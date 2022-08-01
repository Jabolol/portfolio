/** @jsx h */
import { h } from "preact";
import { rgb2hex, scale } from "../utils.ts";

import * as Icons from "../components/Icons.tsx";
const { Wave } = Icons;

type ListProps = {
  color: string;
  title: string;
  className: "language" | "framework" | "technologies";
  ulClassName: "languages" | "framework" | "technologies";
  elementArray: {
    url: string;
    id: string;
    colors: { light: string[]; dark: string[] };
  }[];
  svg: string;
};

const WHITE_HEX = "#fff";

export default function List(
  { color, title, className, ulClassName, elementArray, svg }: ListProps,
) {
  return (
    <section className={color}>
      <h1>{title}</h1>
      <div className={`${className}-div`}>
        <ul className={`${ulClassName}-list`}>
          {(elementArray.map(({ url, id, colors }, index) => ({
            url,
            id,
            Icon: Object.values(Icons[className])[index],
            colors,
          }))).map(({ url, id, Icon, colors }) => (
            <a href={url} target="_blank" rel="noopener">
              <li
                onMouseEnter={() => {
                  const svg = document.getElementById(id)!;
                  svg.style.transform = scale`1.2`;
                  const children = Array.from(
                    svg.querySelectorAll("*") as NodeListOf<SVGElement>,
                  );
                  const dark = children.filter(({ style: { fill, stroke } }) =>
                    fill || stroke
                      ? colors.light.some((hex) =>
                        rgb2hex(fill ? fill : stroke) === hex
                      )
                      : false
                  );
                  dark.forEach((x, i) =>
                    x.style.fill
                      ? x.style.fill = colors.dark[i]
                      : x.style.stroke = colors.dark[i]
                  );
                }}
                onMouseLeave={() => {
                  const svg = document.getElementById(id)!;
                  svg.style.transform = scale`1`;
                  const children = Array.from(
                    svg.querySelectorAll<SVGAElement>("*"),
                  );
                  const light = children.filter(({ style: { fill, stroke } }) =>
                    fill || stroke
                      ? colors.light.some((hex) =>
                        rgb2hex(
                          fill ? fill : stroke,
                        ) === hex
                      )
                      : false
                  );
                  const dark = children.filter(({ style: { fill, stroke } }) =>
                    fill || stroke
                      ? colors.dark.some((hex) =>
                        rgb2hex(
                          fill ? fill : stroke,
                        ) === hex
                      )
                      : false
                  );
                  dark.forEach((x) =>
                    x.style.fill
                      ? x.style.fill = WHITE_HEX
                      : x.style.stroke = WHITE_HEX
                  );
                  light.forEach((x) =>
                    x.style.fill
                      ? x.style.fill = colors.light[1]
                      : x.style.stroke = colors.light[1]
                  );
                }}
              >
                <Icon id={id} width={128} height={128} />
              </li>
            </a>
          ))}
        </ul>
      </div>
      <Wave className={svg} />
    </section>
  );
}
