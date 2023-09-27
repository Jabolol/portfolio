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
import Vue from "$icons/brand-vue.tsx";
import Markdown from "$icons/markdown.tsx";
import Python from "$icons/brand-python.tsx";
import { CardProps, WithLink } from "~/types.ts";

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

export const awards: WithLink[] = [
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

export const contact: WithLink[] = [{
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

export const projects: WithLink[] = [
  {
    title: "Portfolio",
    description:
      "The third edition of my portfolio. Now with a slick design and a curated UI.",
    Component: React,
    inject: "text-cyan-400",
    link: "https://github.com/Jabolol/portfolio",
  },
  {
    title: "CarrierX",
    description:
      "Hackathon-winning app to have an easier time managing all the paraphernalia related to deliveries.",
    Component: React,
    inject: "text-cyan-400",
    link: "https://github.com/Jabolol/carrierx",
  },
  {
    title: "Counterverse",
    description:
      "A revolutionary way to buy, sell, and merge unique digital assets in this NFT marketplace.",
    Component: React,
    inject: "text-cyan-400",
    link: "https://counterverse.vercel.app/",
  },
  {
    title: "UniCal",
    description:
      "Auto-scraping and dynamic Apple Calendar integration for my university events.",
    Component: Typescript,
    inject: "text-blue-500",
    link: "https://github.com/Jabolol",
  },
  {
    title: "FFI",
    description:
      "Deno Foreign Function Interface learning resources for my university colleagues.",
    Component: Typescript,
    inject: "text-blue-500",
    link: "https://deno-pitch.vercel.app/",
  },
  {
    title: "Blog",
    description:
      "My blog. 100% opinionated, unapologetically me, and not for the faint of heart.",
    Component: Markdown,
    inject: "text-blue-600",
    link: "https://javi-blog.deno.dev/",
  },
  {
    title: "BitStat",
    description:
      "Track the latest crypto trends and stay on top of the market with real-time statistics and news.",
    Component: Vue,
    inject: "text-green-400",
    link: "https://github.com/Jabolol",
  },
  {
    title: "Slashy",
    description:
      "Streamline your app development with this utility tool for seamless slash command registration.",
    Component: Python,
    inject: "text-yellow-400",
    link: "https://github.com/Jabolol",
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
    title: "FastFuse",
    description:
      "Lightning-fast file compressor and decompressor that zaps and unzaps your files with Huffman Coding.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/fastfuse",
  },
  {
    title: "Labyrinthia",
    description:
      "Maze generation and solving with binary search trees and breadth-first algorithms.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/labyrinthia",
  },
  {
    title: "PushSwap",
    description:
      "List ordering with this innovative algorithm and visualizer, using only two stacks and limited operations.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/pushswap",
  },
  {
    title: "Hunter",
    description:
      "New version of Nintendo's Duck Hunt. Aim, shoot, and compete for the highest score.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol",
  },
  {
    title: "Battleship",
    description:
      "Experience a fresh take on Battleship with this local multiplayer edition. Ready to sink some ships?",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol",
  },
  {
    title: "MyShell",
    description:
      "Custom UNIX-like shell with library functions. Streamlined and powerful interface for advanced workflow.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol",
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
