import { ArrowRight, Gauge, Gift, GraduationCap, PlugZap, Route, ScanSearch, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";

/* L'offre complète en un seul bloc : ce qu'on fait et quand (le flux), ce qui est offert, la garantie. */
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
    text: "On construit l'automatisation, on la branche sur vos outils actuels, on la teste avec vous.",
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
              Une automatisation IA qui tourne dans votre entreprise, mesurée, en 30 jours.
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

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative flex flex-col gap-5 overflow-hidden rounded-[22px] bg-accent p-6 text-white sm:p-8" data-reveal>
              <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-white/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                  <Gift className="size-5.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold tracking-[0.08em] uppercase">Offerts</span>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                <li>
                  <strong>Bonus 1 :</strong> une charte d&apos;usage IA pour vos équipes (ce qu&apos;on confie à l&apos;IA, ce
                  qu&apos;on ne lui confie jamais).
                </li>
                <li>
                  <strong>Bonus 2 :</strong> 30 jours de support après la mise en production.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-[22px] bg-white p-6 ring-1 ring-line sm:p-8" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-pink">
                  <ShieldCheck className="size-5.5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold tracking-[0.08em] text-accent-strong uppercase">Notre engagement</span>
              </div>
              <h3 className="text-[22px] leading-tight font-bold">Si on ne trouve rien qui vaille le coup, on vous le dit.</h3>
              <p className="text-[15px] leading-relaxed text-muted">
                Pendant l&apos;appel, si on ne voit aucun processus où l&apos;IA vous fait gagner au moins{" "}
                {site.commitmentThreshold} par semaine, on vous le dit franchement et on ne vous propose rien. Et une fois
                le déploiement lancé, on travaille jusqu&apos;à ce que l&apos;automatisation tourne, sans surcoût.
              </p>
            </div>
          </div>

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
