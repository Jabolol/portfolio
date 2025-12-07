import { CardProps } from "~/types.ts";

const ExternalLinkIcon = (
  props: { size?: number; stroke?: number; class?: string } = {},
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ?? 16}
    height={props.size ?? 16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={props.stroke ?? 1.5}
    stroke-linecap="round"
    stroke-linejoin="round"
    class={props.class}
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M7 7H3v14h14v-4" />
  </svg>
);

export default function Card(
  { title, description, Component, inject, date, link }: CardProps,
) {
  const cardContent = (
    <div class="flex flex-col items-center">
      <Component class={`h-10 w-auto m-5 ${inject}`} />
      <div class="flex flex-col items-center gap-1 w-full">
        <div class="flex items-center gap-1">
          <h1 class="text-1xl font-bold">{title}</h1>
          {link && (
            <ExternalLinkIcon
              size={16}
              stroke={1.5}
              class="text-gray-400 dark:text-gray-500 opacity-70"
            />
          )}
        </div>
        {date && (
          <span class="text-xs text-gray-500 dark:text-gray-600">{date}</span>
        )}
      </div>
      <p class="dark:text-gray-400 text-gray-600 text-center m-2 max-w-[16rem]">
        {description}
      </p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
