import { HardHat, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";

export function Commitment() {
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-4 rounded-[24px] bg-pink-soft p-7 sm:p-10" data-reveal>
          <div className="flex items-center justify-between gap-4">
            <span className="pill">Notre engagement</span>
            <ShieldCheck className="size-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h2 className="mt-2 text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[1.08] font-bold">
            Si on ne trouve rien qui vaille le coup, on vous le dit.
          </h2>
          <p className="text-muted">
            Pendant l&apos;appel, si on ne voit aucun processus où l&apos;IA vous fait gagner au moins{" "}
            {site.commitmentThreshold} par semaine, on vous le dit franchement et on ne vous propose rien. Et une fois le
            déploiement lancé, on travaille jusqu&apos;à ce que l&apos;automatisation tourne, sans surcoût.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-[24px] border border-line p-7 sm:p-10" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <div className="flex items-center justify-between gap-4">
            <span className="pill bg-pink!">Qui est derrière</span>
            <HardHat className="size-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h2 className="mt-2 text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[1.08] font-bold">
            Des ingénieurs qui construisent, pas des formateurs qui conseillent.
          </h2>
          <p className="text-muted">
            Une équipe d&apos;ingénieurs issus des meilleures écoles, qui a mis en production des infrastructures et des
            chaînes d&apos;automatisation pour de grands groupes. On applique la même rigueur aux PME : des systèmes qui
            tournent, mesurés, maintenus.
          </p>
        </div>
      </div>
    </section>
  );
}
