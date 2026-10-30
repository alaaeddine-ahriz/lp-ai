import { bookingUrl, site } from "@/config/site";

export function FinalCta() {
  return (
    <section id="rdv" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="grain grain-dark on-dark relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-dark px-5 py-16 text-white sm:px-6 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_70%_at_80%_0%,#4a3a2f,transparent_70%)]" />
        <div className="wrap relative flex flex-col items-start gap-7 px-0! sm:px-0!" data-reveal>
          <h2 className="max-w-[900px] text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            30 minutes d&apos;audit pour savoir <span className="tone">combien l&apos;IA peut vous rapporter.</span>
          </h2>
          <p className="max-w-[600px] text-lg leading-relaxed text-[#ebe3d9]">
            Vous repartez avec les trois tâches qui vous coûtent le plus, et ce qu&apos;elles vous coûtent chaque mois.
            Même si on ne travaille pas ensemble ensuite.
          </p>
          {site.calLink ? null : (
            <a href={bookingUrl} className="btn btn-light" data-cta="final">
              Réserver un diagnostic gratuit
            </a>
          )}
          <small className="text-sm text-[#d8cec2]">Gratuit et sans engagement.</small>
        </div>

        {site.calLink ? (
          <div className="wrap relative mt-12 px-0! sm:px-0!">
            <div className="overflow-hidden rounded-[16px] bg-white p-2">
              <div data-cal-link={site.calLink} className="min-h-[560px] w-full overflow-auto" />
            </div>
            <p className="mt-4 text-center text-sm text-[#d8cec2]">
              <a href={bookingUrl} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-white" data-cta="final_newtab">
                Réserver un diagnostic gratuit
              </a>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
