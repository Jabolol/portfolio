import { JSX } from "preact";

export type CardProps = {
  title: string;
  description: string;
  Component: ({ ...props }) => JSX.Element;
  inject: string;
};
