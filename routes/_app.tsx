import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore Javi's portfolio and discover his latest projects in full stack development and design."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>portfolio</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
