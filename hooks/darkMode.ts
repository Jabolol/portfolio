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

  const mode = computed(() => isDarkMode.value ? "dark" : "light");

  return { isDarkMode, toggle, mode };
};

export default useDarkMode;
