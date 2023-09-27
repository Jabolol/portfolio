import { JSX } from "preact/jsx-runtime";
import { CardProps } from "~/types.ts";

const Wrapper = (nodes: JSX.Element, link?: string) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {nodes}
      </a>
    );
  }
  return nodes;
};

const Card = (
  { title, description, Component, inject, link }: CardProps,
) => (
  <div class="flex flex-col items-center">
    <Component class={`h-10 w-auto m-5 ${inject}`} />
    <h1 class="text-1xl font-bold">{title}</h1>
    <p class="dark:text-gray-400 text-gray-600 text-center m-2 max-w-[16rem]">
      {description}
    </p>
  </div>
);

export default function (props: CardProps) {
  return Wrapper(Card(props), props.link);
}
