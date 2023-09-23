import { useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const useDarkMode = () => {
  const isDarkMode = useSignal<boolean>(false);

  const toggle = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  useSignalEffect(() => {
    if (IS_BROWSER) {
      document.documentElement.classList.toggle("dark", isDarkMode.value);
    }
  });

  return { isDarkMode, toggle };
};

export default useDarkMode;
