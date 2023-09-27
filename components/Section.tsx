import Card from "~/components/Card.tsx";
import { SectionProps } from "~/types.ts";

export default function Section(
  { id, title, description, items }: SectionProps,
) {
  return (
    <>
      <hr
        class="w-48 h-1 my-3 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id={id}
      />
      <div class="flex items-center justify-center">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-10 lg:pb-10">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            {title}
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            {description}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((props) => <Card {...props} />)}
      </div>
    </>
  );
}
