import { Plugin } from "$fresh/server.ts";

const CUSTOM_STYLE_ID = "__JBL_INJECT";

export const inject: Plugin = {
  name: "inject",
  entrypoints: {
    worker:
      `data:application/javascript,export default function e(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/worker.js").then(()=>console.log("[info] Registered ServiceWorker")).catch(e=>console.log("[error] Failed to register ServiceWorker",{err:e}))};`,
    manifest:
      `data:application/javascript,export default function e({type:e,...t}){let n=document.createElement(e);for(let[a,f]of Object.entries(t))n[a]=f;document.head.append(n)};`,
  },
  render: ({ render }) => {
    render();
    return {
      scripts: [{
        entrypoint: "manifest",
        state: {
          type: "link",
          rel: "manifest",
          href: "/site.webmanifest",
        },
      }],
      styles: [{
        cssText: "html {scroll-behavior: smooth;}",
        id: CUSTOM_STYLE_ID,
      }],
    };
  },
};
