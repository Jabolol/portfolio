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

        return new Response(
          JSON.stringify({
            lastSixMonths: lastSixMonthsTotal,
            fullYear: fullYearTotal,
          }),
          {
            headers: {
              "content-type": "application/json",
            },
          },
        );
      } catch (err) {
        console.error("Error fetching calendar data:", err);
        return new Response("Error fetching data", { status: 500 });
      }
    }

    const validatedMode = mode === "dark" || mode === "light" ? mode : "dark";
    const data = await getData(USERNAME, "last", validatedMode, half);
    const blob = new Blob([new Uint8Array(data)], { type: "image/png" });

    return new Response(blob, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
};
