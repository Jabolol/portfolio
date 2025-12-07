import { JSX } from "preact";
import { Activity } from "activity-calendar";

export type CardProps = {
  title: string;
  description: string;
  Component: (
    props: JSX.SVGAttributes<SVGSVGElement> & {
      size?: number;
      color?: string;
      stroke?: number;
    },
  ) => JSX.Element;
  inject: string;
  link?: string;
  date?: string;
};

export type Year = number | "last";

export type ApiResponse = {
  total: Record<number | string, number> & { lastYear: number };
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

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};
