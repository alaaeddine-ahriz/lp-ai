import { Gauge, GraduationCap, PlugZap, Route, ScanSearch } from "lucide-react";

/* L'offre en un seul bloc : ce qu'on fait et quand. */
const steps = [
  {
    when: "Jour 0",
    icon: ScanSearch,
    title: "Diagnostic de vos processus",
    text: "On passe en revue ce qui prend du temps, qui s'en charge, et ce que ça vous coûte chaque mois.",
  },
  {
    when: "Jour 7",
    icon: Route,
    title: "Feuille de route chiffrée",
    text: "Les chantiers possibles, classés par gain, délai et risque. Vous savez ce que chacun rapporte avant de dépenser un euro.",
  },
  {
    when: "Jour 7 → 30",
    icon: PlugZap,
    title: "Déploiement clé en main",
    text: "On construit l'outil, on le branche sur vos logiciels et on le teste avec les personnes qui vont s'en servir.",
  },
  {
    when: "Jour 30",
    icon: GraduationCap,
    title: "Formation de l'équipe concernée",
    text: "Une session de travail sur leurs propres dossiers. Le lendemain, ils savent s'en servir.",
  },
  {
    when: "J+30",
    icon: Gauge,
    title: "Mesure du gain à J+30",
    text: "On compare avant et après, en heures et en euros. Le chiffre est mesuré chez vous, avec vous.",
  },
];

export function Offer() {
  return (
    <section id="offre" className="px-3 sm:px-6">
      <div className="grain mx-auto max-w-[1440px] rounded-[24px] bg-sand-soft px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-14">
          <h2 className="h2" data-reveal>
            Le Programme Premier Gain.{" "}
            <span className="tone">Un premier outil qui tourne chez vous en 30&nbsp;jours, et le gain mesuré.</span>
          </h2>

          <ol className="flow" data-flow aria-label="Les étapes du programme">
            <span aria-hidden="true" className="flow-track">
              <span className="flow-fill" />
            </span>
            {steps.map(({ when, icon: Icon, title, text }, i) => (
              <li key={title} className="flow-step" style={{ "--k": i } as React.CSSProperties}>
                <span className="flow-node" aria-hidden="true">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1.5 pt-1 lg:pt-6">
                  <span className="text-sm font-medium text-soft">{when}</span>
                  <h3 className="text-[19px] leading-snug tracking-[-0.02em]">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="#rdv" className="btn" data-cta="offer">
              Voir ce que ça donne chez moi
            </a>
            <span className="text-sm text-muted">Gratuit, sans engagement · 3 créneaux par mois</span>
          </div>
        </div>
      </div>
    </section>
  );
}
