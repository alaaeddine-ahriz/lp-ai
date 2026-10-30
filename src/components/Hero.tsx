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
        <p className="text-sm text-stone-400">Pour les PME de 5 à 50 personnes</p>
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
          Un devis recopié trois fois. Une relance qui n&apos;est jamais partie. Un fichier que seule Sophie sait
          retrouver. On part de là&nbsp;: on trouve les trois tâches qui vous coûtent le plus, on construit l&apos;outil
          qui s&apos;en charge, et au bout de 30&nbsp;jours on compte ensemble les heures récupérées.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            <a href="#rdv" className="btn btn-light" data-cta="hero">
              Réserver un diagnostic gratuit
            </a>
            <a href="#carte" className="btn btn-outline" data-cta="hero_map">
              Voir où l&apos;IA intervient
            </a>
          </div>
          <p className="text-sm text-stone-400">30 minutes en visio. 3 créneaux par mois.</p>
        </div>
      </div>
    </section>
  );
}
