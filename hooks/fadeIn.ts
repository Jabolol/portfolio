import { useRef } from "preact/hooks";
import { useSignal, useSignalEffect } from "@preact/signals";
import { FADE_IN_THRESHOLD } from "~/constants/index.ts";

const useFadeIn = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const isLoaded = useSignal(false);

  useSignalEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && ref.current) {
        ref.current.classList.add("fade-in");
        isLoaded.value = true;
        observer.disconnect();
      }
    }, { threshold: FADE_IN_THRESHOLD });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return { ref, isLoaded };
};

export default useFadeIn;
