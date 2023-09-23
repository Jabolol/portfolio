import { CardProps } from "~/types.ts";

const Card = (
  { title, description, Component, inject }: CardProps,
) => (
  <div class="flex flex-col items-center">
    <Component class={`h-10 w-auto m-5 ${inject}`} />
    <h1 class="text-1xl font-bold">{title}</h1>
    <p class="dark:text-gray-400 text-gray-600 text-center m-2 max-w-[16rem]">
      {description}
    </p>
  </div>
);

export default Card;
