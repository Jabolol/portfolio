import { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  const siteUrl = (Deno.env.get("SITE_URL") ?? "http://localhost:8000").replace(
    /\/$/,
    "",
  );
  const ogImage = `${siteUrl}/api/og`;

  return (
    <html lang="en" style="scroll-behavior: smooth;">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#d946ef" />
        <meta
          name="description"
          content="Software Engineer at Kariba Labs processing 1.2+ PB monthly. 9-time hackathon winner specializing in TypeScript, distributed systems and blockchain infrastructure"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl + "/"} />
        <meta
          property="og:title"
          content="Javier Ríos Urbano - Software Engineer"
        />
        <meta
          property="og:description"
          content="Software Engineer at Kariba Labs processing 1.2+ PB monthly. 9-time hackathon winner specializing in distributed systems and blockchain infrastructure."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Javier Ríos Urbano - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Software Engineer at Kariba Labs processing 1.2+ PB monthly. 9-time hackathon winner specializing in distributed systems and blockchain infrastructure."
        />
        <meta name="twitter:image" content={ogImage} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>portfolio</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
