import { ArrowRight } from "lucide-react";
import { bookingUrl, site } from "@/config/site";

export function FinalCta() {
  return (
    <section id="rdv" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[22px] bg-dark px-5 py-20 sm:rounded-[28px] sm:px-6 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(217_54_62/0.35),transparent_70%)]"
        />
        <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-6 text-center" data-reveal>
          <h2 className="text-[clamp(2.25rem,5vw,3.625rem)] leading-[1.03] font-bold text-white">
            30 minutes pour savoir combien l&apos;IA peut vous rapporter.
          </h2>
          <p className="max-w-[640px] text-lg text-stone-200">
            Vous repartez avec 3 processus à fort potentiel et une estimation du temps qu&apos;ils vous coûtent chaque
            mois. Même si on ne travaille pas ensemble.
          </p>
          {site.calLink ? null : (
            <a href={bookingUrl} className="btn mt-2 sm:min-h-14 sm:text-[17px]" data-cta="final">
              Réserver mon diagnostic gratuit
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          )}
          <small className="text-sm text-stone-300">Gratuit, sans engagement · 3 places par mois</small>
        </div>

        {site.calLink ? (
          <div className="relative mx-auto mt-12 max-w-[1040px]">
            <div className="overflow-hidden rounded-[20px] bg-white p-2 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)]">
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
