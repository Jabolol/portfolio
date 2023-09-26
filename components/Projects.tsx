import { projects } from "~/misc.ts";
import { CardProps } from "~/types.ts";
import ArrowRight from "$icons/arrow-right.tsx";

const Project = (
  { title, description, Component, inject, link }: CardProps & { link: string },
) => (
  <a
    class="flex items-center justify-between my-5 px-4 py-3 border-b-2 dark:border-1 rounded-lg dark:rounded-lg border-gray-200 dark:border-gray-400 dark:shadow-none shadow-md w-4/5 md:w-2/5 lg:w-2/5 mx-auto"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="flex items-center">
      <div class="flex-shrink-0 w-8 h-8 mr-3">
        <Component class={`w-full h-full ${inject}`} />
      </div>
      <div class="flex flex-col">
        <h1 class="text-sm font-bold text-black dark:text-white pb-2 sm:pb-2 md:pb-1 lg:pb-1">
          {title}
        </h1>
        <p class="text-xs text-gray-500">{description}</p>
      </div>
    </div>
    <div class="flex-shrink-0 w-5 h-5 ml-3">
      <ArrowRight class="dark:text-gray-400 text-gray-600 dark:dark:text-gray-400 text-gray-600 w-full h-full" />
    </div>
  </a>
);

export default function Projects() {
  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="projects"
      />
      <div class="flex items-center justify-center my-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-10 lg:pb-10">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Projects
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Some of my coolest Projects.
          </p>
        </div>
      </div>
      {projects.map((props) => <Project {...props} />)}
    </>
  );
}
