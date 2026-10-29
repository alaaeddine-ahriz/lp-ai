import { site } from "@/config/site";

/** Visuel Open Graph (1200 × 630), rendu en PNG au build par satori. */
export function OgCard() {
  return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(70% 90% at 90% 0%, rgba(217,54,62,0.55), rgba(43,37,35,0) 70%), #2B2523",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontFamily: "Bricolage", color: "#F2858A" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontFamily: "Bricolage", fontSize: 76, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1000 }}>
            Vos équipes perdent des heures chaque semaine. On les récupère avec l&apos;IA en 30 jours.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, color: "#E7E5E4" }}>
            <div style={{ display: "flex", background: "#D9363E", color: "#fff", padding: "14px 28px", borderRadius: 999 }}>
              Diagnostic gratuit
            </div>
            30 min · Sans engagement
          </div>
        </div>
      </div>
  );
}
