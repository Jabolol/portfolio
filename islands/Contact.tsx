import Mail from "$icons/mail.tsx";
import LinkedIn from "$icons/brand-linkedin.tsx";
import Github from "$icons/brand-github.tsx";
import { JSX } from "preact/jsx-runtime";

const Info = (
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

const details: Readonly<Parameters<typeof Info>[0][]> = [{
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

export default function Contact() {
  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="contact"
      />
      <div class="flex items-center justify-center my-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-5 lg:pb-5">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Contact
          </h1>
          <p class="mt-4 text-lg lg:text-2xl text-gray-400 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Let's get in touch.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-5 md:mb-15 lg:mb-15">
        {details.map((props) => <Info {...props} />)}
      </div>
    </>
  );
}
