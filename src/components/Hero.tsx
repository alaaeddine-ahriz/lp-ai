import { ArrowRight, Clock } from "lucide-react";
import type { Photo } from "@/lib/photos";

const losses = ["des marchés.", "des clients.", "des devis.", "de la marge."];

/** `image` : photo facultative (src/assets/photos/hero.jpg). Sans photo : fond sombre uni. */
export function Hero({ image }: { image?: Photo }) {
  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="relative mx-auto flex max-w-[1440px] overflow-hidden rounded-[22px] bg-dark sm:rounded-[28px] lg:min-h-[560px]">
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
          </div>
        )}

        <div className="relative mx-auto flex w-full max-w-[1180px] flex-col justify-end gap-7 px-5 pt-14 pb-10 sm:px-6 sm:py-20 lg:py-24">
          <h1 className="max-w-[900px] text-[clamp(2.375rem,5.6vw,4.75rem)] leading-[1.02] font-bold text-white">
            Vos équipes perdent des heures. Vous perdez{" "}
            <span className="sr-only">des marchés.</span>
            {/* Les fins de phrase défilent ; une seule est visible si les animations sont désactivées. */}
            <span aria-hidden="true" className="rotator text-[#F59A9E]">
              {losses.map((l, i) => (
                <span key={l} style={{ "--n": i } as React.CSSProperties}>
                  {l}
                </span>
              ))}
            </span>
          </h1>
          <p className="max-w-[640px] text-[17px] leading-relaxed text-stone-200 sm:text-lg">
            On récupère ces heures avec l&apos;IA en 30&nbsp;jours. On repère vos 3 processus les plus coûteux, on
            construit l&apos;outil qui les règle, et on vous montre le gain en euros. Vous ne touchez pas une ligne de
            code.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
            <a href="#rdv" className="btn" data-cta="hero">
              Réserver mon diagnostic gratuit
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-stone-300">
              <Clock className="size-4" aria-hidden="true" />
              30 min · Sans engagement · 3 places par mois
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
