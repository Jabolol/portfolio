import { useSignal, useSignalEffect } from "@preact/signals";
import { phrases } from "~/misc.ts";

const getRandomPhrase = () => {
  return phrases[Math.floor(Math.random() * phrases.length)];
};

const useIntro = () => {
  const isVisible = useSignal(true);
  const intro = useSignal<string>(getRandomPhrase());

  useSignalEffect(() => {
    const intervalId = setInterval(() => {
      isVisible.value = false;
      setTimeout(() => {
        intro.value = getRandomPhrase();
        isVisible.value = true;
      }, 500);
    }, 3e3);

    return () => {
      clearInterval(intervalId);
    };
  });

  return { isVisible, intro };
};

export default useIntro;
