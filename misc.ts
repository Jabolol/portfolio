import Bulb from "$icons/bulb.tsx";
import Brain from "$icons/brain.tsx";
import Paint from "$icons/paint.tsx";
import Tools from "$icons/tools.tsx";
import Ruler from "$icons/ruler-measure.tsx";
import Puzzle from "$icons/puzzle.tsx";
import Trophy from "$icons/trophy.tsx";
import Mail from "$icons/mail.tsx";
import LinkedIn from "$icons/brand-linkedin.tsx";
import Github from "$icons/brand-github.tsx";
import Typescript from "$icons/brand-typescript.tsx";
import C from "$icons/brand-coinbase.tsx";
import Ruby from "$icons/diamond.tsx";
import React from "$icons/brand-react.tsx";
import Markdown from "$icons/markdown.tsx";
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

export const awards: CardProps[] = [
  {
    title: "XDC Foundation",
    description: "1st place in the Social Media Crypto Bot category.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/javierriosur_last-week-i-had-the-opportunity-to-participate-activity-7084512255098126336-hiaL",
  },
  {
    title: "Mediamarkt Hackathon",
    description:
      "1st place building a mobile app and blockchain Proof of Concept.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/javierriosur_letsgomediamarkt-mediamarktsaturntechnology-activity-7052268380841553921-7OsO",
  },
  {
    title: "Google & Interacso Open Source Jam",
    description: "1st place contributing to open-source projects on GitHub.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/javierriosur_thrilled-to-share-that-i-emerged-as-a-winner-activity-7078410738955882497-ciRz",
  },
  {
    title: "NEAR Web3 Hackathon",
    description: "1st place building a decentralised certification storage.",
    Component: Trophy,
    inject: "text-yellow-400",
    link:
      "https://www.linkedin.com/posts/alex-arteaga-c_honored-to-have-participated-in-this-weekends-activity-7053675065107750913-6uq4",
  },
  {
    title: "ETH Barcelona Hackathon",
    description: "Best Decentralized Finance project in the hackathon.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/alex-arteaga-c_great-news-im-elated-to-share-with-activity-7084461331734511616-0y0g",
  },
  {
    title: "IBM Metaverse Hackathon",
    description: "2nd place creating a Metaverse demo using Unity.",
    Component: Trophy,
    inject: "text-gray-400",
    link:
      "https://www.linkedin.com/posts/javierriosur_this-sunday-the-metaverse-social-club-hackathon-activity-7003371720011059200-Ri0_",
  },
];

export const contact: CardProps[] = [{
  title: "LinkedIn",
  description: "Posts about events, conventions and everything in between.",
  Component: LinkedIn,
  inject: "text-blue-500",
  link: "https://www.linkedin.com/in/javierriosur/",
}, {
  title: "Email",
  description: "The best way to reach me.",
  link: "mailto:javier.rios-urbano@epitech.eu",
  Component: Mail,
  inject: "text-pink-400",
}, {
  title: "GitHub",
  description: "Open source contributions, interests and my latest projects.",
  Component: Github,
  inject: "text-black dark:text-white",
  link: "https://github.com/Jabolol",
}];

export const projects: CardProps[] = [
  {
    title: "Toucan",
    description: "XDC tracker and hackathon winner submission for ETH BCN 2023",
    Component: Typescript,
    inject: "text-blue-500",
    link: "https://github.com/Jabolol/toucan",
  },
  {
    title: "Raven",
    description:
      "Custom BeReal app that allows you to see BeReals without posting.",
    Component: React,
    inject: "text-cyan-400",
    link: "https://github.com/Jabolol/raven/",
  },
  {
    title: "GameBoy",
    description: "A GameBoy emulator written from scratch in C, using SDL2.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/gameboy",
  },
  {
    title: "SkySpy",
    description:
      "Track live planes and get flight info on Discord, on the fly.",
    Component: Ruby,
    inject: "text-red-500",
    link: "https://github.com/Jabolol",
  },
  {
    title: "Turbo",
    description:
      "High-performance framework for Deno, optimizing speed using FFI.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/turbo",
  },
  {
    title: "Blog",
    description: "Hard concepts explained in a simple and intuitive way.",
    Component: Markdown,
    inject: "text-blue-600",
    link: "https://javi-blog.deno.dev/",
  },
];

export const phrases = [
  "TypeScript enthusiast",
  "Low level wizard",
  "C master",
  "Blogging machine",
  "Deno lover",
  "Full-stack ninja",
  "Vue enthusiast",
  "Ruby rockstar",
  "Docker master",
  "Kubernetes whisperer",
  "Serverless samurai",
  "DevOps ninja",
  "Test-driven development devotee",
  "Agile practitioner",
  "Embedded systems pro",
  "Python mastermind",
  "Scrum master",
  "Git wizard",
  "Ruby ninja",
  "GitHub addict",
  "Open source enthusiast",
  "Hackathon champion",
  "Tech community builder",
  "Pythonista",
  "Pythonic prodigy",
  "Rubyist extraordinaire",
  "Pythonic visionary",
  "Ruby magician",
  "Ruby maven",
  "Sass sorcerer",
  "DEADBEEF",
] as const;
