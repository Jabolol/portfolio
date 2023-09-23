import { useRef } from "preact/hooks";
import { useSignal, useSignalEffect } from "@preact/signals";

const useFadeIn = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const isLoaded = useSignal(false);

  useSignalEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current!.classList.add("fade-in");
        isLoaded.value = true;
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  });

  return { ref, isLoaded };
};

export default useFadeIn;
