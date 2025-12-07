import { Resvg } from "resvg-wasm";
import { render } from "preact-render-to-string";
import IconBrandTypescript from "$icons/brand-typescript.tsx";
import IconBrandPython from "$icons/brand-python.tsx";
import IconBrandCoinbase from "$icons/brand-coinbase.tsx";
import BrandHaskell from "~/components/BrandHaskell.tsx";

export const OG_DATA = {
  name: "Javier Ríos Urbano",
  company: "Kariba Labs",
  stat1: "Processing 1.2+ PB monthly",
  stat2: "9 Hackathon Wins",
  location: "Madrid, Spain",
};

interface OGCardProps {
  name: string;
  company: string;
  stat1: string;
  stat2: string;
  location: string;
}

const OGCard = ({
  name,
  company,
  stat1,
  stat2,
  location,
}: OGCardProps) => {
  const bgColor = "rgb(18, 24, 39)";
  const textColor = "#ffffff";

  const techBadges = [
    { Icon: IconBrandPython, color: "#ffd43b" },
    { Icon: IconBrandTypescript, color: "#3178c6" },
    { Icon: IconBrandCoinbase, color: "#9ca3af" },
    { Icon: BrandHaskell, color: "#7c3aed" },
  ];

  return (
    <svg
      width="1200"
      height="630"
      viewBox="0 0 1200 630"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f43f5e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d946ef;stop-opacity:1" />
        </linearGradient>

        <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#d946ef;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
        </linearGradient>

        <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#7e22ce;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#7dd3fc;stop-opacity:1" />
        </linearGradient>
      </defs>

      <rect width="1200" height="630" fill={bgColor} />

      <g transform="translate(820, 78)">
        {techBadges.map(({ Icon, color }, idx) => (
          <g transform={`translate(${idx * 74}, 0)`}>
            <Icon size={64} color={color} />
          </g>
        ))}
      </g>

      <g transform="translate(100, 180)">
        <text
          x="0"
          y="0"
          font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="56"
          font-weight="700"
          fill={textColor}
        >
          {name}
        </text>

        <text
          x="0"
          y="90"
          font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="40"
          font-weight="700"
          fill={textColor}
        >
          Impact data <tspan fill="url(#gradient-1)">engineer</tspan>
        </text>

        <text
          x="0"
          y="150"
          font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="40"
          font-weight="700"
          fill={textColor}
        >
          distributed data{" "}
          <tspan fill="url(#gradient-2)">platform builder</tspan>
        </text>

        <text
          x="0"
          y="210"
          font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="40"
          font-weight="700"
          fill={textColor}
        >
          and <tspan fill="url(#gradient-3)">open-source hacker</tspan>
        </text>

        <g transform="translate(0, 280)">
          <text
            x="0"
            y="0"
            font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="26"
            font-weight="600"
            fill={textColor}
          >
            {stat1}
          </text>

          <text
            x="500"
            y="0"
            font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="26"
            font-weight="600"
            fill={textColor}
          >
            {stat2}
          </text>
        </g>

        <text
          x="0"
          y="360"
          font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="22"
          fill="#9ca3af"
        >
          @ {company} • {location}
        </text>
      </g>
    </svg>
  );
};

async function loadFont(path: string): Promise<Uint8Array> {
  const url = new URL(path, import.meta.url);

  try {
    return await Deno.readFile(url);
  } catch {
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  }
}

const [fontBold, fontSemiBold] = await Promise.all([
  loadFont("../static/fonts/Inter-Bold.woff2"),
  loadFont("../static/fonts/Inter-SemiBold.woff2"),
]);

export function generateOGImage() {
  const CardWrapper = () => <OGCard {...OG_DATA} />;

  const finalSvg = render(<CardWrapper />);

  const resvg = new Resvg(finalSvg, {
    dpi: 100,
    shapeRendering: 2,
    imageRendering: 0,
    textRendering: 2,
    fitTo: { mode: "zoom", value: 2 },
    font: {
      fontBuffers: [fontBold, fontSemiBold],
      defaultFontFamily: "Inter",
      loadSystemFonts: false,
    },
  });

  return resvg.render().asPng();
}
