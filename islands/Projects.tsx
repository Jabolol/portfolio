/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";
import { rgb2hex, scale } from "../utils.ts";

import * as Icons from "../components/Icons.tsx";

type ProjectsProps = {
  color: string;
  title: string;
  svg: string;
};

type SingleProjectProps = {
  project: string;
  title: string;
  text: string;
  isWebm?: boolean;
  techUsed: {
    id: string;
    url: string;
    colors: { dark: string[]; light: string[] };
  }[];
};

const WHITE_HEX = "#fff";

function SingleProject({
  project,
  title,
  text,
  techUsed,
  isWebm,
}: SingleProjectProps) {
  return (
    <div className={"projects-div"}>
      <div className={"image"}>
        {isWebm
          ? (
            <video controls autoPlay loop muted playsInline>
              <source src={asset(`/Projects/${project.toLowerCase()}.webm`)} type="video/webm"/>
              <source src={asset(`/Projects/${project.toLowerCase()}.mp4`)} type="video/mp4"/>
            </video>
          )
          : (
            <img
              src={asset(
                `/Projects/${project.toLowerCase()}.webp`,
              )}
              alt={project}
            />
          )}
      </div>
      <div className={"text"}>
        <h1>{title}</h1>
        <p>{text}</p>
        <br />
        <div className={"tech-used-div"}>
          <ul className={"tech-used-div-list"}>
            {techUsed.map(({ url, id, colors }) => (
              {
                url,
                id,
                Icon: Object.entries(Icons.usedTech).find(([c]) =>
                  c === id.split("_")[0]
                )![1],
                colors,
              }
            )).map(({ url, id, Icon, colors }) => (
              <a href={url}>
                <li
                  onMouseEnter={() => {
                    const svg = document.getElementById(
                      `${id}_small_${project.toLowerCase()}`,
                    )!;
                    svg.style.transform = scale`1.2`;
                    const children = Array.from(
                      svg.querySelectorAll("*") as NodeListOf<SVGElement>,
                    );
                    const dark = children.filter((
                      { style: { fill, stroke } },
                    ) =>
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
                    const svg = document.getElementById(
                      `${id}_small_${project.toLowerCase()}`,
                    )!;
                    svg.style.transform = scale`1`;
                    const children = Array.from(
                      svg.querySelectorAll<SVGAElement>("*"),
                    );
                    const light = children.filter((
                      { style: { fill, stroke } },
                    ) =>
                      fill || stroke
                        ? colors.light.some((hex) =>
                          rgb2hex(
                            fill ? fill : stroke,
                          ) === hex
                        )
                        : false
                    );
                    const dark = children.filter((
                      { style: { fill, stroke } },
                    ) =>
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
                  <Icon
                    id={`${id}_small_${project.toLowerCase()}`}
                    width={48}
                    height={48}
                  />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ color, title, svg }: ProjectsProps) {
  return (
    <section className={color}>
      <h1>{title}</h1>
      <SingleProject
        project="Queen"
        title="Queen"
        text="Fullstack application, used by a popular Spanish discotheque, which manages its referral and tickets system. Admin dashboard, full API and an application to scan the QR codes."
        techUsed={[
          {
            url: "https://reactjs.org",
            id: "react",
            colors: { light: ["#ffffff"], dark: ["#00d8ff", "#00d8ff"] },
          },
          {
            url: "https://typescriptlang.org",
            id: "typescript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#3178c6", "#ffffff"],
            },
          },
          {
            url: "https://deno.land",
            id: "deno",
            colors: { light: ["#ffffff"], dark: ["#000000", "#000000"] },
          },
          {
            url: "https://mongodb.com",
            id: "mongo",
            colors: {
              light: ["#ffffff"],
              dark: [
                "#a6a385",
                "#499d4a",
                "#58aa50",
                "#918e74",
                "#408940",
                "#4d9446",
              ],
            },
          },
        ]}
        isWebm={true}
      />
      <SingleProject
        project="Cryp2"
        title="Cryp2"
        text="Site which displays real-time cryptocurrencies information, including exchange rates, history and news."
        techUsed={[
          {
            url: "https://vuejs.org",
            id: "vue",
            colors: { light: ["#ffffff"], dark: ["#41b883", "#34495e"] },
          },
          {
            url: "https://typescriptlang.org",
            id: "typescript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#3178c6", "#ffffff"],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://sass-lang.com",
            id: "sass",
            colors: { light: ["#ffffff"], dark: ["#cd6799"] },
          },
        ]}
        isWebm={true}
      />
      <SingleProject
        project="Shinobu"
        title="Shinobu"
        text="Shinobu is a complete Discord moderation bot. Mainly used for moderation with an extensive list of commands, such as ban, warn, watch a word, lookup... The Discord Moderator's best friend."
        techUsed={[
          {
            url: "https://javascript.com",
            id: "javascript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#f7df1e", "#000000"],
            },
          },
          {
            url: "https://mongodb.com",
            id: "mongo",
            colors: {
              light: ["#ffffff"],
              dark: [
                "#a6a385",
                "#499d4a",
                "#58aa50",
                "#918e74",
                "#408940",
                "#4d9446",
              ],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://postman.com",
            id: "postman",
            colors: {
              light: ["#ffffff"],
              dark: ["#ff6c37"],
            },
          },
        ]}
      />
      <SingleProject
        project="Sarah"
        title="Sarah"
        text="Sarah is a Discord music bot. Supports adding songs to the queue, looping, changing the volume, joining stages and playing every song from YouTube."
        techUsed={[
          {
            url: "https://javascript.com",
            id: "javascript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#f7df1e", "#000000"],
            },
          },
          {
            url: "https://mongodb.com",
            id: "mongo",
            colors: {
              light: ["#ffffff"],
              dark: [
                "#a6a385",
                "#499d4a",
                "#58aa50",
                "#918e74",
                "#408940",
                "#4d9446",
              ],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://postman.com",
            id: "postman",
            colors: {
              light: ["#ffffff"],
              dark: ["#ff6c37"],
            },
          },
        ]}
      />
      <SingleProject
        project="Aiko"
        title="Aiko"
        text="Aiko is a Discord leveling bot. It offers an entertaining way to engage users with custom rankcards, role rewards at certain level and custom colors for users."
        techUsed={[
          {
            url: "https://javascript.com",
            id: "javascript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#f7df1e", "#000000"],
            },
          },
          {
            url: "https://mongodb.com",
            id: "mongo",
            colors: {
              light: ["#ffffff"],
              dark: [
                "#a6a385",
                "#499d4a",
                "#58aa50",
                "#918e74",
                "#408940",
                "#4d9446",
              ],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://postman.com",
            id: "postman",
            colors: {
              light: ["#ffffff"],
              dark: ["#ff6c37"],
            },
          },
        ]}
      />
      <SingleProject
        project="Kaito"
        title="Kaito"
        text="Kaito is a Discord economy bot. It counts with earning money, giving money, buying roles from the shop, and adding or removing items from the shop."
        techUsed={[
          {
            url: "https://javascript.com",
            id: "javascript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#f7df1e", "#000000"],
            },
          },
          {
            url: "https://mongodb.com",
            id: "mongo",
            colors: {
              light: ["#ffffff"],
              dark: [
                "#a6a385",
                "#499d4a",
                "#58aa50",
                "#918e74",
                "#408940",
                "#4d9446",
              ],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://postman.com",
            id: "postman",
            colors: {
              light: ["#ffffff"],
              dark: ["#ff6c37"],
            },
          },
        ]}
      />
      <SingleProject
        project="Ducky"
        title="Ducky"
        text="Ducky is a Discord browser bot. Goes to the specified site and sends a screenshot. Supports .onion links, as the connections go through Tor."
        techUsed={[
          {
            url: "https://typescriptlang.org",
            id: "typescript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#3178c6", "#ffffff"],
            },
          },
          {
            url: "https://redis.io/",
            id: "redis",
            colors: {
              light: ["#ffffff", "#1b2029"],
              dark: [
                "#912626",
                "#c6302b",
                "#912626",
                "#c6302b",
                "#912626",
                "#c6302b",
                "#ffffff",
                "#1b2029",
              ],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://postman.com",
            id: "postman",
            colors: {
              light: ["#ffffff"],
              dark: ["#ff6c37"],
            },
          },
        ]}
      />
      <SingleProject
        project="JabBoat"
        title="JabBoat"
        text="JabBoat is my personal development bot. I have successfully implemented minimax algorithm in Tic Tac Toe using Discord's API, amongst other things."
        techUsed={[
          {
            url: "https://javascript.com",
            id: "javascript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#f7df1e", "#000000"],
            },
          },
          {
            url: "https://nodejs.org",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://redis.io/",
            id: "redis",
            colors: {
              light: ["#ffffff", "#1b2029"],
              dark: [
                "#912626",
                "#c6302b",
                "#912626",
                "#c6302b",
                "#912626",
                "#c6302b",
                "#ffffff",
                "#1b2029",
              ],
            },
          },
          {
            url: "https://postman.com",
            id: "postman",
            colors: {
              light: ["#ffffff"],
              dark: ["#ff6c37"],
            },
          },
        ]}
        isWebm={true}
      />
      <div className={svg}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          >
          </path>
        </svg>
      </div>
    </section>
  );
}
