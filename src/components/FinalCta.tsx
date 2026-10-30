import { Check } from "lucide-react";
import { bookingUrl, site } from "@/config/site";

const takeaways = [
  "Les trois tâches qui vous coûtent le plus",
  "Ce qu'elles vous coûtent, en heures et en euros, chaque mois",
  "Ce qu'on ferait en premier, en combien de temps, et pour quel prix",
];

export function FinalCta() {
  return (
    <section id="rdv" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="grain grain-dark on-dark relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-dark px-5 py-16 text-white sm:px-6 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_70%_at_80%_0%,#4a3a2f,transparent_70%)]" />
        <div className="wrap relative grid gap-12 px-0! sm:px-0! lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16" data-reveal>
          <div className="flex flex-col items-start gap-7">
            <h2 className="max-w-[760px] text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
              30 minutes d&apos;audit pour savoir <span className="tone">combien l&apos;IA peut vous rapporter.</span>
            </h2>
            <p className="max-w-[560px] text-lg leading-relaxed text-[#ebe3d9]">
              Un appel en visio avec un ingénieur, préparé à partir de ce que vous nous dites de votre entreprise. Gratuit,
              et sans engagement.
            </p>
            {site.calLink ? null : (
              <a href={bookingUrl} className="btn btn-light" data-cta="final">
                Réserver un audit gratuit
              </a>
            )}
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-7">
            <span className="text-sm text-on-dark-soft">Ce que vous avez en raccrochant</span>
            <ul className="flex flex-col gap-3.5 text-[16px] text-[#f1ebe3]">
              {takeaways.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <span className="text-sm text-on-dark-soft">Même si on ne travaille pas ensemble ensuite.</span>
          </div>
        </div>

        {site.calLink ? (
          <div className="wrap relative mt-12 px-0! sm:px-0!">
            <div className="overflow-hidden rounded-[16px] bg-white p-2">
              <div data-cal-link={site.calLink} className="min-h-[560px] w-full overflow-auto" />
            </div>
            <p className="mt-4 text-center text-sm text-[#d8cec2]">
              <a href={bookingUrl} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-white" data-cta="final_newtab">
                Réserver un audit gratuit
              </a>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
