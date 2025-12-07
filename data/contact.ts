import Mail from "$icons/mail.tsx";
import LinkedIn from "$icons/brand-linkedin.tsx";
import Github from "$icons/brand-github.tsx";
import { CardProps } from "~/types.ts";

export const contact: CardProps[] = [
  {
    title: "LinkedIn",
    description: "Posts about events, conventions and everything in between.",
    Component: LinkedIn,
    inject: "text-blue-500",
    link: "https://www.linkedin.com/in/javierriosur/",
  },
  {
    title: "Email",
    description: "The best way to reach me.",
    link: "mailto:javier.rios-urbano@epitech.eu",
    Component: Mail,
    inject: "text-pink-400",
  },
  {
    title: "GitHub",
    description: "Open source contributions, interests and my latest projects.",
    Component: Github,
    inject: "text-black dark:text-white",
    link: "https://github.com/Jabolol",
  },
];
