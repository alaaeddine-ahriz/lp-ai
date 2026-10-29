import { ArrowRight, Gauge, Gift, GraduationCap, PlugZap, Route, ScanSearch } from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    title: "Diagnostic de vos processus",
    text: "On cartographie ce qui prend du temps, qui le fait, et combien ça coûte chaque mois.",
  },
  {
    icon: Route,
    title: "Feuille de route chiffrée",
    text: "Vos cas d'usage classés par gain, délai et risque. Vous savez ce que chacun rapporte avant de dépenser un euro.",
  },
  {
    icon: PlugZap,
    title: "Déploiement clé en main",
    text: "On construit l'automatisation, on la branche sur vos outils actuels, on la teste avec vous.",
  },
  {
    icon: GraduationCap,
    title: "Formation de l'équipe concernée",
    text: "Une session pratique sur leur vrai travail, pas un cours théorique sur l'IA.",
  },
  {
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
              Une automatisation IA qui tourne dans votre entreprise, mesurée, en 30 jours.
            </p>
          </div>

          <ol className="flow" data-flow aria-label="Les étapes du programme">
            <span aria-hidden="true" className="flow-track">
              <span className="flow-fill" />
              <span className="flow-dot" />
            </span>
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flow-step" style={{ "--k": i } as React.CSSProperties}>
                <span className="flow-node" aria-hidden="true">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1.5 pt-1 lg:pt-6">
                  <span className="text-xs font-semibold tracking-[0.08em] text-accent-strong uppercase">Étape {i + 1}</span>
                  <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.015em]">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="relative flex flex-col gap-6 overflow-hidden rounded-[22px] bg-accent p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:gap-10"
            data-reveal
          >
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-white/10 blur-2xl" />
            <div className="flex shrink-0 items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                <Gift className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-sm font-bold tracking-[0.08em] uppercase">Offerts</span>
            </div>
            <div className="grid flex-1 gap-4 text-[15px] leading-relaxed sm:grid-cols-2 sm:gap-8">
              <p>
                <strong>Bonus 1 :</strong> une charte d&apos;usage IA pour vos équipes (ce qu&apos;on confie à l&apos;IA, ce
                qu&apos;on ne lui confie jamais).
              </p>
              <p className="sm:border-l sm:border-white/25 sm:pl-8">
                <strong>Bonus 2 :</strong> 30 jours de support après la mise en production.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#rdv" className="btn" data-cta="offer">
              Voir ce que ça donne chez moi
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
