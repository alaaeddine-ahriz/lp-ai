import type { Photo } from "@/lib/photos";

const losses = ["des marchés.", "des clients.", "des devis.", "de la marge."];

/**
 * Hero pleine largeur, fond quasi noir avec une lumière grise douce et un grain léger.
 * `image` : photo facultative (src/assets/photos/hero.jpg), assombrie pour garder le texte lisible.
 */
export function Hero({ image }: { image?: Photo }) {
  return (
    <section data-hero className="grain grain-dark relative overflow-hidden bg-dark text-white">
      <div aria-hidden="true" className="absolute inset-0">
        {image ? (
          <>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="100vw"
              alt=""
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_72%_18%,#3b3b39,transparent_70%)]" />
        )}
      </div>

      <div className="wrap relative flex min-h-[calc(100svh-4rem)] max-h-[860px] flex-col justify-end gap-8 pt-24 pb-14 sm:pb-20 lg:min-h-[640px]">
        <p className="text-sm text-stone-400">Diagnostic gratuit · 30 minutes · 3 places par mois</p>
        <h1 className="max-w-[980px] text-[clamp(2.5rem,6.2vw,5.25rem)] leading-[1.0]">
          Vos équipes perdent des heures. <span className="tone">Vous perdez </span>
          <span className="sr-only">des marchés.</span>
          {/* La fin de phrase défile ; seule la première est visible si les animations sont désactivées. */}
          <span aria-hidden="true" className="rotator tone">
            {losses.map((l, i) => (
              <span key={l} style={{ "--n": i } as React.CSSProperties}>
                {l}
              </span>
            ))}
          </span>
        </h1>
        <p className="max-w-[600px] text-lg leading-relaxed text-stone-300">
          On récupère ces heures avec l&apos;IA en 30&nbsp;jours. On repère vos 3 processus les plus coûteux, on
          construit l&apos;outil qui les règle, et on vous montre le gain en euros. Vous ne touchez pas une ligne de
          code.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#rdv" className="btn btn-light" data-cta="hero">
            Réserver mon diagnostic gratuit
          </a>
          <a href="#carte" className="btn btn-outline" data-cta="hero_map">
            Voir où l&apos;IA intervient
          </a>
        </div>
      </div>
    </section>
  );
}
