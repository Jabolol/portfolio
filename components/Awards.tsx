import Card from "~/components/Card.tsx";
import { awards } from "~/misc.ts";

export default function Awards() {
  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="awards"
      />
      <div class="flex items-center justify-center my-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-5 lg:pb-5">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Awards
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Some of my hackathon feats.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-5 md:mb-15 lg:mb-15">
        {awards.map(({ link, title, description, Component, inject }) => (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
              title={title}
              description={description}
              Component={Component}
              inject={inject}
            />
          </a>
        ))}
      </div>
    </>
  );
}
