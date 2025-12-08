import { generateOGImage } from "~/utils/og-generator.tsx";
import { Context } from "fresh";

async function getImage(): Promise<
  { data: ArrayBuffer; etag: string }
> {
  const raw = generateOGImage();
  const uint8 = new Uint8Array(raw);

  const hashBuffer = await crypto.subtle.digest("SHA-256", uint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  const etag = `"${hashHex.substring(0, 32)}"`;

  return { data: uint8.buffer, etag };
}

export const handler = {
  async GET(ctx: Context<unknown>) {
    const req = ctx.req;

    try {
      const { data, etag } = await getImage();

      if (req.headers.get("if-none-match") === etag) {
        return new Response(null, {
          status: 304,
          headers: {
            "etag": etag,
            "cache-control": "public, max-age=86400, immutable",
          },
        });
      }

      return new Response(data, {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=86400, immutable",
          "etag": etag,
        },
      });
    } catch (error) {
      console.error("[OG] Error generating image:", error);
      return new Response("Error generating OG image", { status: 500 });
    }
  },
};
