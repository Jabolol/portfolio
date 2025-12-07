import Bulb from "$icons/bulb.tsx";
import Brain from "$icons/brain.tsx";
import Paint from "$icons/paint.tsx";
import Tools from "$icons/tools.tsx";
import Ruler from "$icons/ruler-measure.tsx";
import Puzzle from "$icons/puzzle.tsx";
import { CardProps } from "~/types.ts";

export const about: CardProps[] = [
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
