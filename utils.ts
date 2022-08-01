import { asset } from "$fresh/runtime.ts";

export const hover = (element: MouseEvent) => {
  const image = document.getElementById(
    (element.target as HTMLImageElement).id,
  )!;
  image.onload = () => (image.style.transform = "scale(1.2)");
  image.setAttribute(
    "src",
    asset(`/Images/${(element.target as HTMLImageElement).id}.png`),
  );
};
export const unhover = (element: MouseEvent) => {
  const image = document.getElementById(
    (element.target as HTMLImageElement).id,
  )!;
  image.onload = () => (image.style.transform = "scale(1)");
  image.setAttribute(
    "src",
    asset(`/Images/${(element.target as HTMLImageElement).id}_white.png`),
  );
};

export const hoverSVG = (event: MouseEvent) => {
  const svg = document.getElementById((event.target as HTMLImageElement).id)!;
  svg.setAttributeNS(null, "fill", "#fff");
};

export const unhoverSVG = (event: MouseEvent) => {
  const svg = document.getElementById((event.target as HTMLImageElement).id)!;
  svg.setAttributeNS(null, "fill", "#000");
};

export const hoverProject = (element: MouseEvent) => {
  const image = document.getElementById(
    (element.target as HTMLImageElement).id,
  )!;
  image.onload = () => (image.style.transform = "scale(1.2)");
  image.setAttribute(
    "src",
    asset(
      `/Images/Projects/${
        (element.target as HTMLImageElement).id.split("_")[1]
      }/${(element.target as HTMLImageElement).id.split("_")[0]}.png`,
    ),
  );
};
export const unhoverProject = (element: MouseEvent) => {
  const image = document.getElementById(
    (element.target as HTMLImageElement).id,
  )!;
  image.onload = () => (image.style.transform = "scale(1)");
  image.setAttribute(
    "src",
    asset(
      `/Images/Projects/${
        (element.target as HTMLImageElement).id.split("_")[1]
      }/${(element.target as HTMLImageElement).id.split("_")[0]}_white.png`,
    ),
  );
};

export const rgb2hex = (rgb: string) =>
  `#${
    rgb
      .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)!
      .slice(1)
      .map((n, i) =>
        (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
          .toString(16)
          .padStart(2, "0")
          .replace("NaN", "")
      )
      .join("")
  }`;

export const scale = ([number]: TemplateStringsArray) => `scale(${number})`;
