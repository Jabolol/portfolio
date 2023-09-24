import { useSignal, useSignalEffect } from "@preact/signals";
import useDarkMode from "~/hooks/darkMode.ts";
import useWidth from "~/hooks/width.ts";

export default function Contributions() {
  const { mode } = useDarkMode();
  const { width, breakpoint, getWidth } = useWidth();
  const isReduced = width.value < getWidth(breakpoint.value);
  const total = useSignal(NaN);

  useSignalEffect(() => {
    fetch("/api/graph?json=true")
      .then((res) => res.json())
      .then((data) => total.value = data);
  });

  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="contact"
      />
      <div class="flex items-center justify-center mt-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-5 lg:pb-5">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Contributions
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            {total.value} commits in the last {isReduced ? "6 months" : "year"}.
          </p>
        </div>
      </div>
      <div class="transition-opacity duration-500 text-center flex justify-center items-center mb-5 md:mb-15 lg:mb-15 overflow-x-scroll mx-10">
        <img src={`/api/graph?mode=${mode.value}&half=${isReduced}`} />
      </div>
    </>
  );
}
