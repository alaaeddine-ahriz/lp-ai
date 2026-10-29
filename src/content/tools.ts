/**
 * Outils du bandeau (logos seuls). `logo` = nom du fichier dans /public/logos (sans extension).
 * Pour ajouter un outil, déposer son SVG dans /public/logos puis l'ajouter ici.
 */
export type Tool = { name: string; logo: string };

export const tools: Tool[] = [
  { name: "Gmail", logo: "gmail" },
  { name: "Outlook", logo: "outlook" },
  { name: "Google Drive", logo: "google-drive" },
  { name: "SharePoint", logo: "sharepoint" },
  { name: "Notion", logo: "notion" },
  { name: "Slack", logo: "slack" },
  { name: "Microsoft Teams", logo: "microsoft-teams" },
  { name: "HubSpot", logo: "hubspot" },
  { name: "Pipedrive", logo: "pipedrive" },
  { name: "Sage", logo: "sage" },
  { name: "Qonto", logo: "qonto" },
  { name: "Excel", logo: "excel" },
  { name: "Google Sheets", logo: "google-sheets" },
  { name: "Airtable", logo: "airtable" },
  { name: "Trello", logo: "trello" },
  { name: "WhatsApp Business", logo: "whatsapp" },
  { name: "Shopify", logo: "shopify" },
  { name: "Make", logo: "make" },
  { name: "n8n", logo: "n8n" },
];
