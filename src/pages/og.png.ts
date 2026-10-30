import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgCard } from "@/og/OgCard";

export const GET: APIRoute = async () => {
  const fonts = join(process.cwd(), "node_modules/@fontsource/onest/files");
  const [semibold, regular] = await Promise.all([
    readFile(join(fonts, "onest-latin-600-normal.woff")),
    readFile(join(fonts, "onest-latin-400-normal.woff")),
  ]);
  const svg = await satori(OgCard(), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Onest", data: semibold, weight: 600, style: "normal" },
      { name: "Onest", data: regular, weight: 400, style: "normal" },
    ],
  });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
