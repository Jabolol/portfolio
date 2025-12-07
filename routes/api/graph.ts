import { initWasm } from "resvg-wasm";
import { defineRoute } from "$fresh/src/server/defines.ts";
import {
  fetchCalendarData,
  getData,
  selectLastHalfYear,
  totalCountFor,
} from "~/calendar.tsx";

const USERNAME = Deno.env.get("GITHUB_USERNAME");
if (!USERNAME) {
  throw new Error("GITHUB_USERNAME environment variable is required");
}

await initWasm(fetch("https://esm.sh/@resvg/resvg-wasm@2.6.2/index_bg.wasm"));

export default defineRoute(async (req) => {
  if (req.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }

  const url = new URL(req.url);
  const mode = url.searchParams.get("mode") ?? "dark";
  const half = url.searchParams.get("half")?.toLowerCase() === "true";
  const json = url.searchParams.get("json")?.toLowerCase() === "true";

  if (json) {
    try {
      const data = await fetchCalendarData(USERNAME, "last");
      const contributions = half
        ? selectLastHalfYear(data.contributions)
        : data.contributions;
      const total = half
        ? totalCountFor(contributions)
        : data.total["lastYear"];

      return new Response(JSON.stringify(total), {
        headers: {
          "content-type": "application/json",
        },
      });
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
});
