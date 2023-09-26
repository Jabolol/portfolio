import { useComputed, useSignal } from "@preact/signals";

const useWidth = () => {
  const width = useSignal(window.innerWidth);

  const onResize = () => {
    width.value = window.innerWidth;
  };

  const data = {
    width: [0, 768, 992, 1200],
    breakpoints: ["sm", "md", "lg", "xl"],
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

  addEventListener("resize", onResize, { passive: true });

  return { width, breakpoint, getWidth };
};

export default useWidth;
