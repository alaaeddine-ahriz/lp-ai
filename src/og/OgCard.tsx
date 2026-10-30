import { site } from "@/config/site";

/** Visuel Open Graph (1200 × 630), rendu en PNG au build par satori. Même esprit que le hero : noir, gris, sobre. */
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
        background: "radial-gradient(60% 80% at 75% 15%, #4a3a2f, #1d1915 70%)",
        color: "#fff",
        fontFamily: "Familjen",
      }}
    >
      <div style={{ display: "flex", fontSize: 40, fontWeight: 600, letterSpacing: -1.5 }}>
        {site.name}
        <span style={{ color: "#d9363e" }}>.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 78, fontWeight: 600, lineHeight: 1.0, letterSpacing: -3, maxWidth: 1040 }}>
          Vos équipes perdent des heures.&nbsp;<span style={{ color: "#c9beb1" }}>Vous perdez des marchés.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#d8cec2" }}>Audit et conseil en IA pour les PME</div>
      </div>
    </div>
  );
}
