import useIntro from "~/hooks/intro.ts";
import OctoCat from "$icons/brand-github.tsx";

export default function Hero() {
  const { isVisible, intro } = useIntro();

  return (
    <div class="pt-20">
      <div class="container mx-auto px-16 py-12 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-bold text-center mb-8 sm:mb-12">
          Software engineering{" "}
          <span class="bg-gradient-to-r from-rose-500 to-fuchsia-500 text-transparent bg-clip-text">
            student
          </span>
          ,{" "}
          <span class="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-transparent bg-clip-text nowrap">
            freelancer
          </span>{" "}
          and{" "}
          <span class="bg-gradient-to-r from-purple-700 to-sky-300 text-transparent bg-clip-text nowrap">
            blogger
          </span>
        </h1>
        <div class="flex flex-col items-center gap-y-3">
          <p
            class={`${
              isVisible.value ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 text-center text-lg md:text-2xl font-bold dark:text-gray-400 text-gray-600 lg:max-w-36rem lg:mx-auto`}
          >
            {intro}
          </p>
          <a
            href="https://github.com/Jabolol"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center mt-4 px-4 py-2 border border-black dark:border-white rounded-md text-black dark:text-white bg-transparent dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
          >
            <OctoCat class="mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
