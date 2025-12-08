import {
  fetchCalendarData,
  getData,
  selectLastHalfYear,
  totalCountFor,
} from "~/calendar.tsx";
import type { Context } from "fresh";

const USERNAME = Deno.env.get("GITHUB_USERNAME") ?? "octocat";
if (USERNAME === "octocat") {
  console.warn(
    "[graph] Falling back to stub user because GITHUB_USERNAME is not set",
  );
}

async function generateETag(data: Uint8Array | string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBytes = typeof data === "string"
    ? encoder.encode(data)
    : new Uint8Array(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBytes);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join(
    "",
  );
  return `"${hashHex.substring(0, 32)}"`;
}

export const handler = {
  async GET(ctx: Context<unknown>) {
    const req = ctx.req;
    const url = new URL(req.url);
    const mode = url.searchParams.get("mode") ?? "dark";
    const half = url.searchParams.get("half")?.toLowerCase() === "true";
    const json = url.searchParams.get("json")?.toLowerCase() === "true";

    if (json) {
      try {
        const data = await fetchCalendarData(USERNAME, "last");
        const lastSixMonthsContributions = selectLastHalfYear(
          data.contributions,
        );
        const lastSixMonthsTotal = totalCountFor(lastSixMonthsContributions);
        const fullYearTotal = data.total["lastYear"];

        const jsonBody = JSON.stringify({
          lastSixMonths: lastSixMonthsTotal,
          fullYear: fullYearTotal,
        });
        const etag = await generateETag(jsonBody);

        const ifNoneMatch = req.headers.get("if-none-match");
        if (ifNoneMatch === etag) {
          return new Response(null, {
            status: 304,
            headers: {
              "etag": etag,
              "cache-control":
                "public, max-age=600, stale-while-revalidate=300",
            },
          });
        }

        return new Response(jsonBody, {
          headers: {
            "content-type": "application/json",
            "etag": etag,
            "cache-control": "public, max-age=600, stale-while-revalidate=300",
          },
        });
      } catch (err) {
        console.error("Error fetching calendar data:", err);
        return new Response("Error fetching data", { status: 500 });
      }
    }

    const validatedMode = mode === "dark" || mode === "light" ? mode : "dark";
    const data = await getData(USERNAME, "last", validatedMode, half);
    const etag = await generateETag(data);

    const ifNoneMatch = req.headers.get("if-none-match");
    if (ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          "etag": etag,
          "cache-control": "public, max-age=600, stale-while-revalidate=300",
        },
      });
    }

    const blob = new Blob([new Uint8Array(data)], { type: "image/png" });

    return new Response(blob, {
      headers: {
        "content-type": "image/png",
        "etag": etag,
        "cache-control": "public, max-age=600, stale-while-revalidate=300",
      },
    });
  },
};
