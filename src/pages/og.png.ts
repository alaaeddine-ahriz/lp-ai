import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgCard } from "@/og/OgCard";

export const GET: APIRoute = async () => {
  const [display, body] = await Promise.all([
    readFile(join(process.cwd(), "src/og/fonts/BricolageGrotesque-Bold.ttf")),
    readFile(join(process.cwd(), "src/og/fonts/Inter-Medium.ttf")),
  ]);
  const svg = await satori(OgCard(), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Bricolage", data: display, weight: 700, style: "normal" },
      { name: "Inter", data: body, weight: 500, style: "normal" },
    ],
  });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
