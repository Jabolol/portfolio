import "$std/dotenv/load.ts";
import ga4 from "~/utils/ga4.ts";
import { App, staticFiles } from "fresh";
import { ensureWasmInitialized } from "~/utils/wasm-init.ts";
import { refreshContributionsCache } from "~/utils/contributions-cache.ts";

const USERNAME = Deno.env.get("GITHUB_USERNAME") ?? "octocat";

await ensureWasmInitialized();

Deno.cron("Refresh GitHub contributions cache", "*/10 * * * *", async () => {
  await refreshContributionsCache(USERNAME);
});

export const app = new App()
  .use(staticFiles())
  .use(ga4)
  .fsRoutes();
