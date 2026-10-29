import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { site } from "@/config/site";
import { HeroFlow } from "./HeroFlow";

/** `image` : photo optionnelle (src/assets/hero.jpg), déjà optimisée par Astro. */
export function Hero({ image }: { image?: { src: string; srcSet: string } }) {
  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="relative mx-auto flex max-w-[1440px] overflow-hidden rounded-[22px] bg-dark sm:rounded-[28px] lg:min-h-[640px]">
        {image ? (
          <>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 1440px) 1440px, 100vw"
              alt=""
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100f]/90 via-[#14100f]/45 to-[#14100f]/10" />
          </>
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_10%,rgb(217_54_62/0.38),transparent_70%),radial-gradient(50%_60%_at_0%_100%,rgb(253_231_229/0.10),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] mask-[radial-gradient(70%_80%_at_70%_30%,#000,transparent)] bg-size-[56px_56px]" />
          </div>
        )}

        <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 pt-10 pb-6 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14 lg:py-16">
          <div className="flex min-w-0 flex-col gap-6">
            <h1 className="text-[clamp(2.25rem,4.7vw,4rem)] leading-[1.02] font-bold text-white">
              Vos équipes perdent des heures chaque semaine. On les récupère avec l&apos;IA en 30&nbsp;jours.
            </h1>
            <p className="max-w-[600px] text-[17px] leading-relaxed text-stone-200 sm:text-lg">
              On repère vos 3 processus les plus coûteux, on installe l&apos;automatisation qui les règle, et on vous
              montre le gain en euros. Vous ne touchez pas une ligne de code.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
              <a href="#rdv" className="btn" data-cta="hero">
                Réserver mon diagnostic gratuit
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm text-stone-300">
                <Clock className="size-4" aria-hidden="true" />
                30 min · Sans engagement
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 lg:items-end">
            {image ? null : <HeroFlow />}
            <div className="flex w-full max-w-[360px] flex-col gap-3 rounded-[20px] bg-white p-5 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)] sm:p-6 lg:mr-4">
              <span className="flex items-center gap-2 text-[13px] font-semibold text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Prochain créneau disponible
              </span>
              <strong className="flex items-start gap-2.5 font-display text-[26px] leading-[1.1] font-bold tracking-tight text-balance">
                <CalendarDays className="mt-1 size-6 shrink-0 text-accent" aria-hidden="true" />
                {site.nextSlot}
              </strong>
              <span className="text-sm text-muted">3 diagnostics par mois. Chacun est préparé sur votre entreprise.</span>
              <a href="#rdv" className="btn btn-sm mt-1 self-start" data-cta="hero_slot">
                Réserver ce créneau
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
