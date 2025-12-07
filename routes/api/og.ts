import { defineRoute } from "$fresh/src/server/defines.ts";
import { generateOGImage } from "~/utils/og-generator.tsx";

let cachedImage: Uint8Array<ArrayBuffer> | null = null;
let cachedEtag: string | null = null;

async function getImage(): Promise<
  { data: Uint8Array<ArrayBuffer>; etag: string }
> {
  if (cachedImage && cachedEtag) {
    return { data: cachedImage, etag: cachedEtag };
  }

  const raw = await generateOGImage();
  const arrayBuf = new ArrayBuffer(raw.byteLength);
  const data = new Uint8Array(arrayBuf);
  data.set(raw);

  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = [...new Uint8Array(hashBuffer)];
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join(
    "",
  );
  const etag = `W/"${hashHex}"`;

  cachedImage = data;
  cachedEtag = etag;

  return { data, etag };
}

export default defineRoute(async (req) => {
  if (req.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }

  try {
    const { data, etag } = await getImage();

    if (req.headers.get("If-None-Match") === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          ETag: etag,
          "Cache-Control": "public, max-age=86400, immutable",
        },
      });
    }

    return new Response(new Blob([data], { type: "image/png" }), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable",
        ETag: etag,
      },
    });
  } catch (error) {
    console.error("[OG] Error generating image:", error);
    return new Response("Error generating OG image", { status: 500 });
  }
});
