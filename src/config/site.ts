/**
 * Tout ce qui change d'un déploiement à l'autre est ici.
 * Les valeurs entre crochets sont des placeholders à remplacer avant la mise en ligne.
 */
export const site = {
  /** Nom de la marque (logo, titre, pied de page). « Socle » : on pose d'abord un socle qui connaît vos données, puis on ajoute des modules. */
  name: "Socle",
  /** URL publique, utilisée pour le sitemap et l'Open Graph. */
  url: import.meta.env.PUBLIC_SITE_URL || "https://example.com",
  email: "[Email]",

  /**
   * Lien Cal.com au format "utilisateur/evenement" (ex. "acme/diagnostic-30-min").
   * Vide : le bouton de la section #rdv reste un simple lien.
   * Renseigné : le calendrier Cal.com s'affiche directement dans la section #rdv.
   */
  calLink: import.meta.env.PUBLIC_CAL_LINK || "",

  /** Domaine déclaré dans Plausible. Vide : aucun script d'analytics n'est chargé. */
  plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || "",
} as const;

export const bookingUrl = site.calLink ? `https://cal.com/${site.calLink}` : "#rdv";
