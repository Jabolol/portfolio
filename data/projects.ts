import Typescript from "$icons/brand-typescript.tsx";
import Python from "$icons/brand-python.tsx";
import C from "$icons/brand-coinbase.tsx";
import React from "$icons/brand-react.tsx";
import { CardProps } from "~/types.ts";
import BrandHaskell from "~/components/BrandHaskell.tsx";

export const projects: CardProps[] = [
  {
    title: "OpenSource Observer",
    description:
      "Indexers, data pipelines, and analytics measuring OSS impact.",
    Component: Python,
    inject: "text-yellow-500",
    link: "https://github.com/opensource-observer/oso",
  },
  {
    title: "AutoRetroFunding",
    description:
      "On-chain retro funding pools with human-guided impact scores.",
    Component: Typescript,
    inject: "text-blue-500",
    link: "https://ethglobal.com/showcase/autoretrofunding-bxy5k",
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
    description: "Game Boy emulator written from scratch in C with SDL2.",
    Component: C,
    inject: "dark:text-gray-400 text-gray-600",
    link: "https://github.com/Jabolol/gameboy",
  },
  {
    title: "Frost",
    description: "Compiler for the Frost programming language.",
    Component: BrandHaskell,
    inject: "text-indigo-500",
    link: "https://github.com/Jabolol/frost",
  },
  {
    title: "DeepFunding",
    description: "Model contest allocating funds across OSS dependency graphs.",
    Component: Python,
    inject: "text-yellow-500",
    link: "https://www.deepfunding.org",
  },
];
