import { ArrowRight, Gauge, GraduationCap, PlugZap, Route, ScanSearch } from "lucide-react";

/* L'offre en un seul bloc : ce qu'on fait et quand. */
const steps = [
  {
    when: "Jour 0",
    icon: ScanSearch,
    title: "Diagnostic de vos processus",
    text: "On cartographie ce qui prend du temps, qui le fait, et combien ça coûte chaque mois.",
  },
  {
    when: "Jour 7",
    icon: Route,
    title: "Feuille de route chiffrée",
    text: "Vos cas d'usage classés par gain, délai et risque. Vous savez ce que chacun rapporte avant de dépenser un euro.",
  },
  {
    when: "Jour 7 → 30",
    icon: PlugZap,
    title: "Déploiement clé en main",
    text: "On construit l'outil, on le branche sur vos logiciels actuels, on le teste avec vous.",
  },
  {
    when: "Jour 30",
    icon: GraduationCap,
    title: "Formation de l'équipe concernée",
    text: "Une session pratique sur leur vrai travail, pas un cours théorique sur l'IA.",
  },
  {
    when: "J+30",
    icon: Gauge,
    title: "Mesure du gain à J+30",
    text: "On compare avant et après. Le chiffre est le vôtre, pas une estimation de brochure.",
  },
];

export function Offer() {
  return (
    <section id="offre" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1440px] rounded-[22px] bg-pink-soft px-5 py-20 sm:rounded-[28px] sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-14">
          <div className="flex flex-col items-center gap-4 text-center" data-reveal>
            <span className="pill">L&apos;offre</span>
            <h2 className="text-[clamp(2.125rem,4.6vw,3.375rem)] leading-[1.04] font-bold">Le Programme Premier Gain</h2>
            <p className="max-w-[620px] text-lg text-muted">
              Un outil IA qui tourne dans votre entreprise, mesuré, en 30 jours.
            </p>
          </div>

          <ol className="flow" data-flow aria-label="Les étapes du programme">
            <span aria-hidden="true" className="flow-track">
              <span className="flow-fill" />
              <span className="flow-dot" />
            </span>
            {steps.map(({ when, icon: Icon, title, text }, i) => (
              <li key={title} className="flow-step" style={{ "--k": i } as React.CSSProperties}>
                <span className="flow-node" aria-hidden="true">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1.5 pt-1 lg:pt-6">
                  <span className="text-xs font-bold tracking-[0.08em] text-accent-strong uppercase">{when}</span>
                  <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.015em]">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-center gap-3 text-center">
            <a href="#rdv" className="btn" data-cta="offer">
              Voir ce que ça donne chez moi
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <span className="text-sm text-muted">Gratuit, sans engagement · 3 places par mois</span>
          </div>
        </div>
      </div>
    </section>
  );
}
