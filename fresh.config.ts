import { defineConfig } from "$fresh/src/server/defines.ts";
import { inject } from "~/plugins.ts";
import twindConfig from "~/twind.config.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import { ga4Plugin } from "ga4/mod.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig), ga4Plugin(), inject],
});
