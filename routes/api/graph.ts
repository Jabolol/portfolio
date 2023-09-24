import { initWasm } from "resvg-wasm";
import { defineRoute } from "$fresh/src/server/defines.ts";
import { fetchCalendarData, getData } from "~/calendar.tsx";

const USERNAME = Deno.env.get("GITHUB_USERNAME")!;

await initWasm(fetch("https://esm.sh/@resvg/resvg-wasm@2.4.1/index_bg.wasm"));

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
    const data = await fetchCalendarData(USERNAME, "last");

    return new Response(JSON.stringify(data.total["lastYear"]), {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const data = await getData(USERNAME, "last", mode as "dark" | "light", half);

  return new Response(data, {
    headers: {
      "content-type": "image/png",
    },
  });
});
