import Card from "~/components/Card.tsx";
import { about } from "~/misc.ts";

export default function About() {
  return (
    <>
      <hr
        class="w-48 h-1 my-3 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="about"
      />
      <div class="flex items-center justify-center">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-10 lg:pb-10">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            About me
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Get to know me a little better.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {about.map(({ title, description, Component, inject }) => (
          <Card
            title={title}
            description={description}
            Component={Component}
            inject={inject}
          />
        ))}
      </div>
    </>
  );
}
