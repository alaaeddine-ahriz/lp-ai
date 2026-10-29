/** Photo déjà optimisée par Astro (src/assets/photos), prête pour un <img srcset>. */
export type Photo = { src: string; srcSet: string };

/** Photos disponibles, indexées par nom de fichier sans extension (ex. "hero", "pole-vente"). */
export type Photos = Record<string, Photo>;
