import ArrowRight from "$icons/arrow-right.tsx";
import Typescript from "$icons/brand-typescript.tsx";
import C from "$icons/brand-coinbase.tsx";
import Ruby from "$icons/diamond.tsx";
import React from "$icons/brand-react.tsx";
import Vue from "$icons/brand-vue.tsx";
import Markdown from "$icons/markdown.tsx";
import Python from "$icons/brand-python.tsx";
import { JSX } from "preact/jsx-runtime";

const Project = (
  { title, description, Logo, inject, link = "https://github.com/Jabolol" }: {
    title: string;
    description: string;
    Logo: ({ ...props }) => JSX.Element;
    inject: string;
    link?: string;
  },
) => (
  <a
    class="flex items-center justify-between my-5 px-4 py-3 border-b-2 dark:border-1 rounded-lg dark:rounded-lg border-gray-200 dark:border-gray-400 dark:shadow-none shadow-md w-4/5 md:w-2/5 lg:w-2/5 mx-auto"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="flex items-center">
      <div class="flex-shrink-0 w-8 h-8 mr-3">
        <Logo class={`w-full h-full ${inject}`} />
      </div>
      <div class="flex flex-col">
        <h1 class="text-sm font-bold text-black dark:text-white pb-2 sm:pb-2 md:pb-1 lg:pb-1">
          {title}
        </h1>
        <p class="text-xs text-gray-500">{description}</p>
      </div>
    </div>
    <div class="flex-shrink-0 w-5 h-5 ml-3">
      <ArrowRight class="dark:text-gray-400 text-gray-600 dark:dark:text-gray-400 text-gray-600 w-full h-full" />
    </div>
  </a>
);

const projects: Readonly<Parameters<typeof Project>[0][]> = [
  {
    title: "Portfolio",
    description:
      "The third edition of my portfolio. Now with a slick design and a curated UI.",
    Logo: React,
    inject: "text-cyan-400",
    link: "https://github.com/Jabolol/portfolio",
  },
  {
    title: "CarrierX",
    description:
      "Hackathon-winning app to have an easier time managing all the paraphernalia related to deliveries.",
    Logo: React,
    inject: "text-cyan-400",
    link: "https://github.com/Jabolol/carrierx",
  },
  {
    title: "Counterverse",
    description:
      "A revolutionary way to buy, sell, and merge unique digital assets in this NFT marketplace.",
    Logo: React,
    inject: "text-cyan-400",
    link: "https://counterverse.vercel.app/",
  },
  {
    title: "UniCal",
    description:
      "Auto-scraping and dynamic Apple Calendar integration for my university events.",
    Logo: Typescript,
    inject: "text-blue-500",
  },
  {
    title: "FFI",
    description:
      "Deno Foreign Function Interface learning resources for my university colleagues.",
    Logo: Typescript,
    inject: "text-blue-500",
    link: "https://deno-pitch.vercel.app/",
  },
  {
    title: "Blog",
    description:
      "My blog. 100% opinionated, unapologetically me, and not for the faint of heart.",
    Logo: Markdown,
    inject: "text-blue-600",
    link: "https://javi-blog.deno.dev/",
  },
  {
    title: "BitStat",
    description:
      "Track the latest crypto trends and stay on top of the market with real-time statistics and news.",
    Logo: Vue,
    inject: "text-green-400",
  },
  {
    title: "Slashy",
    description:
      "Streamline your app development with this utility tool for seamless slash command registration.",
    Logo: Python,
    inject: "text-yellow-400",
  },
  {
    title: "SkySpy",
    description:
      "Track live planes and get flight info on Discord, on the fly.",
    Logo: Ruby,
    inject: "text-red-500",
  },
  {
    title: "FastFuse",
    description:
      "Lightning-fast file compressor and decompressor that zaps and unzaps your files with Huffman Coding.",
    Logo: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/fastfuse",
  },
  {
    title: "Labyrinthia",
    description:
      "Maze generation and solving with binary search trees and breadth-first algorithms.",
    Logo: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/labyrinthia",
  },
  {
    title: "PushSwap",
    description:
      "List ordering with this innovative algorithm and visualizer, using only two stacks and limited operations.",
    Logo: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/pushswap",
  },
  {
    title: "Hunter",
    description:
      "New version of Nintendo's Duck Hunt. Aim, shoot, and compete for the highest score.",
    Logo: C,
    inject: "dark:text-gray-400 text-gray-600",
  },
  {
    title: "Battleship",
    description:
      "Experience a fresh take on Battleship with this local multiplayer edition. Ready to sink some ships?",
    Logo: C,
    inject: "dark:text-gray-400 text-gray-600",
  },
  {
    title: "MyShell",
    description:
      "Custom UNIX-like shell with library functions. Streamlined and powerful interface for advanced workflow.",
    Logo: C,
    inject: "dark:text-gray-400 text-gray-600",
  },
];

export default function Projects() {
  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="projects"
      />
      <div class="flex items-center justify-center my-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-10 lg:pb-10">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Projects
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Some of my coolest Projects.
          </p>
        </div>
      </div>
      {projects.map((props) => <Project {...props} />)}
    </>
  );
}
