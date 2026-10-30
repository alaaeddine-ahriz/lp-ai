import { bookingUrl, site } from "@/config/site";

export function FinalCta() {
  return (
    <section id="rdv" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="grain grain-dark relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-dark px-5 py-20 text-white sm:px-6 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_70%_at_80%_0%,#333331,transparent_70%)]" />
        <div className="wrap relative flex flex-col items-start gap-7 px-0! sm:px-0!" data-reveal>
          <h2 className="max-w-[900px] text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            30 minutes pour savoir <span className="text-stone-500">combien l&apos;IA peut vous rapporter.</span>
          </h2>
          <p className="max-w-[600px] text-lg leading-relaxed text-stone-300">
            Vous repartez avec 3 processus à fort potentiel et une estimation du temps qu&apos;ils vous coûtent chaque
            mois. Même si on ne travaille pas ensemble.
          </p>
          {site.calLink ? null : (
            <a href={bookingUrl} className="btn btn-light" data-cta="final">
              Réserver mon diagnostic gratuit
            </a>
          )}
          <small className="text-sm text-stone-400">Gratuit, sans engagement · 3 places par mois</small>
        </div>

        {site.calLink ? (
          <div className="wrap relative mt-12 px-0! sm:px-0!">
            <div className="overflow-hidden rounded-[16px] bg-white p-2">
              <div data-cal-link={site.calLink} className="min-h-[560px] w-full overflow-auto" />
            </div>
            <p className="mt-4 text-center text-sm text-stone-300">
              <a href={bookingUrl} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-white" data-cta="final_newtab">
                Réserver mon diagnostic gratuit
              </a>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
