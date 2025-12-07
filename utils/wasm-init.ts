import { initWasm } from "resvg-wasm";

let initialized = false;

export async function ensureWasmInitialized() {
  if (!initialized) {
    await initWasm(
      fetch("https://esm.sh/@resvg/resvg-wasm@2.6.2/index_bg.wasm"),
    );
    initialized = true;
  }
}
