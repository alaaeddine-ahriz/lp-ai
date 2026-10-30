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
        <div className="wrap relative flex flex-col items-start gap-8 px-0! sm:px-0!" data-reveal>
          <h2 className="max-w-[860px] text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            30 minutes d&apos;audit pour savoir <span className="tone">combien l&apos;IA peut vous rapporter.</span>
          </h2>
          <ul className="flex flex-col gap-3 text-lg text-[#f1ebe3]">
            {takeaways.map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-1.5 size-4.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          {site.calLink ? null : (
            <a href={bookingUrl} className="btn btn-light" data-cta="final">
              Réserver un audit gratuit
            </a>
          )}
          <p className="text-sm text-[#d8cec2]">
            Un appel en visio avec un ingénieur. Gratuit, sans engagement, même si on ne travaille pas ensemble ensuite.
          </p>
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
