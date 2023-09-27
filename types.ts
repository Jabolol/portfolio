import { JSX } from "preact";
import { Activity } from "activity-calendar";

export type CardProps = {
  title: string;
  description: string;
  Component: ({ ...props }) => JSX.Element;
  inject: string;
};

export type WithLink = {
  link: string;
} & CardProps;

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
