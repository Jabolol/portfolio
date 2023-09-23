import Trophy from "$icons/trophy.tsx";
import { JSX } from "preact/jsx-runtime";

const Award = (
  { title, description, Component, inject, link }: {
    title: string;
    description: string;
    Component: ({ ...props }) => JSX.Element;
    inject: string;
    link: string;
  },
) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div class="flex flex-col items-center">
      <Component class={`h-10 w-auto m-5 ${inject}`} />
      <h1 class="text-1xl font-bold">{title}</h1>
      <p class="text-gray-400 text-center m-2 max-w-[16rem]">
        {description}
      </p>
    </div>
  </a>
);

const details: Readonly<Parameters<typeof Award>[0][]> = [{
  title: "Mediamarkt Hackathon",
  description: "1st place building a mobile app and blockchain PoC.",
  Component: Trophy,
  inject: "text-yellow-500",
  link:
    "https://www.linkedin.com/posts/javierriosur_letsgomediamarkt-mediamarktsaturntechnology-activity-7052268380841553921-7OsO",
}, {
  title: "NEAR Web3 Hackathon",
  description: "1st place building a decentralised certification storage.",
  Component: Trophy,
  inject: "text-yellow-400",
  link:
    "https://www.linkedin.com/posts/alex-arteaga-c_honored-to-have-participated-in-this-weekends-activity-7053675065107750913-6uq4",
}, {
  title: "IBM Metaverse Hackathon",
  description: "2nd place creating a Metaverse demo using Unity.",
  Component: Trophy,
  inject: "text-gray-400",
  link:
    "https://www.linkedin.com/posts/javierriosur_this-sunday-the-metaverse-social-club-hackathon-activity-7003371720011059200-Ri0_",
}];

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
          <p class="mt-4 text-lg lg:text-2xl text-gray-400 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Some of my hackathon feats.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-5 md:mb-15 lg:mb-15">
        {details.map((props) => <Award {...props} />)}
      </div>
    </>
  );
}
