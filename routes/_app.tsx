/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link href={asset("/main.css")} rel="stylesheet" />
        <title>Jabolo's Portfolio</title>
        <meta name="title" content="Jabolo's Portfolio" />
        <meta
          name="description"
          content="Jabolo's mastered programming languages, libraries, frameworks, tools and the like! Includes showcases and details regarding finished projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jabolo.deno.dev/" />
        <meta property="og:title" content="Jabolo's Portfolio" />
        <meta
          property="og:description"
          content="Jabolo's mastered programming languages, libraries, frameworks, tools and the like! Includes showcases and details regarding finished projects."
        />
        <meta property="og:image" content={asset(`/logo.png`)} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jabolo.deno.dev/" />
        <meta property="twitter:title" content="Jabolo's Portfolio" />
        <meta
          property="twitter:description"
          content="Jabolo's mastered programming languages, libraries, frameworks, tools and the like! Includes showcases and details regarding finished projects."
        />
        <meta property="twitter:image" content={asset(`/logo.png`)} />
        <meta name="theme-color" content="#3c31dd" />
        <link rel="icon" type="image/svg" href={asset("/logo.svg")} />
      </Head>
      <props.Component />
    </>
  );
}
