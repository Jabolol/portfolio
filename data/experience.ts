import Database from "$icons/database.tsx";
import Settings from "$icons/settings.tsx";
import Presentation from "$icons/presentation.tsx";
import { CardProps } from "~/types.ts";

export const experience: CardProps[] = [
  {
    title: "Kariba Labs",
    description:
      "Developing distributed ETL pipelines on Trino clusters indexing GitHub activity and blockchain data to measure OSS impact.",
    Component: Database,
    inject: "text-cyan-400",
    link: "https://www.oso.xyz/",
    date: "Sep 2024 - Present",
  },
  {
    title: "Porsche AG",
    description:
      "Built tooling for Porsche Motorsport Data Platform processing live LMDh, Formula E, and GT3 telemetry.",
    Component: Settings,
    inject: "text-red-500",
    link: "https://racing.porsche.com/",
    date: "Apr - Aug 2025",
  },
  {
    title: "EPITECH",
    description:
      "Led discussion groups and lab sessions for 20+ students in C programming and software engineering.",
    Component: Presentation,
    inject: "text-purple-500",
    link: "https://www.epitech.eu/",
    date: "Feb 2024 - Feb 2025",
  },
];
