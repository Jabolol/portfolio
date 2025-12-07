import { computed, signal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const isDarkMode = signal<boolean>(false);

const useDarkMode = () => {
  const toggle = () => isDarkMode.value = !isDarkMode.value;

  useSignalEffect(() => {
    if (!IS_BROWSER) return;

    const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
    isDarkMode.value = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      isDarkMode.value = e.matches;
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  });

  useSignalEffect(() => {
    if (!IS_BROWSER) return;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  });

  const mode = computed(() => isDarkMode.value ? "dark" : "light");

  return { isDarkMode, toggle, mode };
};

export default useDarkMode;
