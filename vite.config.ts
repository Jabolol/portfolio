import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import arraybuffer from "vite-plugin-arraybuffer";

export default defineConfig({
  plugins: [
    fresh(),
    tailwindcss({ optimize: true }),
    arraybuffer(),
  ],
});
