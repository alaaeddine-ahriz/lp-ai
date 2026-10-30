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
  // Polices auto-hébergées (Fontsource), sous-ensemble latin : il couvre tout le français.
  // Familjen Grotesk pour les titres, Inter pour le texte.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Familjen Grotesk",
      cssVariable: "--font-familjen",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/familjen-grotesk/files/familjen-grotesk-latin-wght-normal.woff2"],
            weight: "400 700",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});
