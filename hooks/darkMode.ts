import { computed, signal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const isDarkMode = signal<boolean>(true);

const useDarkMode = () => {
  const toggle = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  useSignalEffect(() => {
    if (IS_BROWSER) {
      document.documentElement.classList.toggle("dark", isDarkMode.value);
    }
  });

  const getMode = () => {
    return computed(() => isDarkMode.value ? "dark" : "light");
  };

  return { isDarkMode, toggle, getMode };
};

export default useDarkMode;
