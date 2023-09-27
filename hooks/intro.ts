import { useSignal, useSignalEffect } from "@preact/signals";
import { phrases } from "~/misc.ts";

const getRandomPhrase = (prev = ""): string => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  return phrase === prev ? getRandomPhrase(phrase) : phrase;
};

const useIntro = () => {
  const isVisible = useSignal(true);
  const intro = useSignal<string>(getRandomPhrase());

  useSignalEffect(() => {
    const intervalId = setInterval(() => {
      isVisible.value = false;
      setTimeout(() => {
        intro.value = getRandomPhrase(intro.value);
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
