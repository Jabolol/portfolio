import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { BREAKPOINTS } from "~/constants/index.ts";

const useWidth = () => {
  const width = useSignal(
    typeof globalThis.window === "undefined" ? 0 : globalThis.window.innerWidth,
  );

  const data = {
    width: BREAKPOINTS.values,
    breakpoints: BREAKPOINTS.names,
  } as const;

  const getBreakpoint = () => {
    const index = data.width.findIndex((min, i, arr) =>
      min >= width.value && (arr[i - 1] || 0) < width.value
    );
    return data.breakpoints[index] || "xl";
  };

  const getWidth = (breakpoint: typeof data["breakpoints"][number]) => {
    const index = data.breakpoints.indexOf(breakpoint) + 1;
    return data.width[index] ?? data.breakpoints[data.breakpoints.length - 1];
  };

  const breakpoint = useComputed(getBreakpoint);

  useSignalEffect(() => {
    if (!IS_BROWSER) return;

    const onResize = () => {
      width.value = globalThis.window.innerWidth;
    };

    addEventListener("resize", onResize, { passive: true });

    return () => {
      removeEventListener("resize", onResize);
    };
  });

  return { width, breakpoint, getWidth };
};

export default useWidth;
