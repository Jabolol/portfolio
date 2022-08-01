/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import Title from "../components/Title.tsx";
import List from "../islands/List.tsx";
import Projects from "../islands/Projects.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Title
        color="blue header"
        title="Hello, I am Jabolo"
        paragraph="FullStack Developer"
        svg="wave_1"
      />
      <List
        color="second"
        title="Languages"
        className="language"
        ulClassName="languages"
        elementArray={[
          {
            url: "https://www.typescriptlang.org/",
            id: "typescript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#3178c6", "#ffffff"],
            },
          },
          {
            url: "https://python.org",
            id: "python",
            colors: { light: ["#ffffff"], dark: ["#366994", "#ffc331"] },
          },
          {
            url: "https://webassembly.org/",
            id: "wasm",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#654ff0", "#ffffff"],
            },
          },
          {
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            id: "html",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#e34f26", "#ef652a", "#ffffff", "#ffffff"],
            },
          },
          {
            url: "https://javascript.com",
            id: "javascript",
            colors: {
              light: ["#ffffff", "#202731"],
              dark: ["#f7df1e", "#000000"],
            },
          },
          {
            url: "https://sass-lang.com",
            id: "sass",
            colors: { light: ["#ffffff"], dark: ["#cd6799"] },
          },
        ]}
        svg="wave_2"
      />
      <List
        color="pink third"
        title={`Libraries & Frameworks`}
        className="framework"
        ulClassName="framework"
        elementArray={[
          {
            url: "https://reactjs.org/",
            id: "react",
            colors: { light: ["#ffffff"], dark: ["#00d8ff", "#00d8ff"] },
          },
          {
            url: "https://vuejs.org/",
            id: "vue",
            colors: { light: ["#ffffff"], dark: ["#41b883", "#34495e"] },
          },
          {
            url: "https://fresh.deno.dev/",
            id: "fresh",
            colors: {
              light: ["#ffffff", "#ff0066"],
              dark: ["#ffd80b", "#ffffff", "#ffd80b", "#ffffff"],
            },
          },
          {
            url: "https://webpack.js.org/",
            id: "webpack",
            colors: {
              light: ["#ffffff", "#ff0066"],
              dark: ["#ffffff", "#8ed6fb", "#1c78c0"],
            },
          },
          {
            url: "https://assemblyscript.org/",
            id: "assemblyscript",
            colors: {
              light: ["#ffffff", "#ff0066"],
              dark: ["#007acc", "#ffffff"],
            },
          },
          {
            url: "https://expressjs.com/",
            id: "express",
            colors: { light: ["#ffffff"], dark: ["#000000"] },
          },
        ]}
        svg="wave_3"
      />
      <List
        color="grey fourth"
        title="Technologies"
        className="technologies"
        ulClassName="technologies"
        elementArray={[
          {
            url: "https://github.com/",
            id: "github",
            colors: { light: ["#ffffff"], dark: ["#000000"] },
          },
          {
            url: "https://mongodb.com/",
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
            url: "https://www.adobe.com/products/photoshop.html",
            id: "photoshop",
            colors: {
              light: ["#ffffff", "#1b2029", "#31a8ff"],
              dark: ["#001e36", "#31a8ff", "#31a8ff"],
            },
          },
          {
            url: "https://nodejs.org/",
            id: "node",
            colors: { light: ["#ffffff"], dark: ["#8cc84b"] },
          },
          {
            url: "https://deno.land/",
            id: "deno",
            colors: { light: ["#ffffff"], dark: ["#000000", "#000000"] },
          },
          {
            url: "https://code.visualstudio.com/",
            id: "vscode",
            colors: {
              light: ["#ffffff"],
              dark: ["#2489ca", "#1070b3", "#0877b9", "#3c99d4"],
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
        ]}
        svg="wave_4"
      />
      <Projects color="green" title="Projects" svg="wave" />
      <Footer />
    </>
  );
}
