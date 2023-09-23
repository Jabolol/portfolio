import GitHubCalendar from "github-calendar";
import useDarkMode from "~/hooks/darkMode.ts";

export default function Contributions() {
  const { getMode } = useDarkMode();

  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="contact"
      />
      <div class="flex items-center justify-center my-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-5 lg:pb-5">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Contributions
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            GitHub graph for the last year.
          </p>
        </div>
      </div>
      <div class="flex justify-center items-center mb-5 md:mb-15 lg:mb-15 overflow-x-scroll mx-10">
        <GitHubCalendar
          username="jabolol"
          colorScheme={getMode().value}
        />
      </div>
    </>
  );
}
