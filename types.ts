import { JSX } from "preact";
import { Activity } from "activity-calendar";

export type CardProps = {
  title: string;
  description: string;
  Component: ({ ...props }) => JSX.Element;
  inject: string;
  link?: string;
};

export type Year = number | "last";

export type ApiResponse = {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Array<Activity>;
};

export type ApiErrorResponse = {
  error: string;
};

export type SectionProps = {
  id: string;
  title: string;
  description: string;
  items: CardProps[];
};
