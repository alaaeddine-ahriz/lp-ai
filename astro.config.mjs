// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://example.com",
  // Les composants React ne servent qu'au rendu HTML au build : aucun JS React n'est envoyé au navigateur.
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  // Une seule famille (Onest), auto-hébergée via Fontsource. Le sous-ensemble latin couvre tout le français.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Onest",
      cssVariable: "--font-onest",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/onest/files/onest-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});
