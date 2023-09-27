import { computed, signal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const isListening = signal<boolean>(false);
const isDarkMode = signal<boolean>(false);

const useDarkMode = () => {
  const toggle = () => isDarkMode.value = !isDarkMode.value;

  if (!isListening.value && IS_BROWSER) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    isDarkMode.value = mediaQuery.matches;

    useSignalEffect(() => {
      document.documentElement.classList.toggle("dark", isDarkMode.value);
    });

    isListening.value = true;
  }

  const mode = computed(() => isDarkMode.value ? "dark" : "light");

  return { isDarkMode, toggle, mode };
};

export default useDarkMode;
