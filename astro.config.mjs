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
  // Polices auto-hébergées (paquets Fontsource), sous-ensemble latin : il couvre tout le français.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Bricolage Grotesque",
      cssVariable: "--font-bricolage",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            // Fichier avec les axes graisse + taille optique : les grands titres se resserrent automatiquement.
            src: ["@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-opsz-normal.woff2"],
            weight: "200 800",
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
