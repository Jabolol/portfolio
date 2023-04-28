import Bulb from "$icons/bulb.tsx";
import Brain from "$icons/brain.tsx";
import Paint from "$icons/paint.tsx";
import Tools from "$icons/tools.tsx";
import Ruler from "$icons/ruler-measure.tsx";
import Puzzle from "$icons/puzzle.tsx";
import { JSX } from "preact/jsx-runtime";

const Card = (
  { title, description, Component, inject }: {
    title: string;
    description: string;
    Component: ({ ...props }) => JSX.Element;
    inject: string;
  },
) => (
  <div class="flex flex-col items-center">
    <Component class={`h-10 w-auto m-5 ${inject}`} />
    <h1 class="text-1xl font-bold">{title}</h1>
    <p class="text-gray-400 text-center m-2 max-w-[16rem]">
      {description}
    </p>
  </div>
);

const info: Readonly<Parameters<typeof Card>[0][]> = [
  {
    title: "Innovative",
    description:
      "Striving to bring out-of-the-box solutions to every project I work on.",
    Component: Bulb,
    inject: "text-blue-500",
  },
  {
    title: "Analytical",
    description:
      "Actively seeking new challenges to solve using my keen attention to detail.",
    Component: Brain,
    inject: "text-sky-300",
  },
  {
    title: "Creative",
    description:
      "Exploring new and imaginative ways to solve problems and bring unique ideas to life.",
    Component: Paint,
    inject: "text-teal-500",
  },
  {
    title: "Resourceful",
    description:
      "Always on the lookout for new technologies so as to deliver the best possible solution.",
    Component: Tools,
    inject: "text-lime-400",
  },
  {
    title: "Detail-oriented",
    description:
      "Attentive to the small details that can make a big difference in the final product.",
    Component: Ruler,
    inject: "text-yellow-400",
  },
  {
    title: "Ambitious",
    description:
      "Constantly taking on new challenges to broaden my skills and knowledge.",
    Component: Puzzle,
    inject: "text-rose-500",
  },
];

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
          <p class="mt-4 text-lg lg:text-2xl text-gray-400 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Get to know me a little better.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {info.map((props) => <Card {...props} />)}
      </div>
    </>
  );
}
