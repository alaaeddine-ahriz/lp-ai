import { Check, X } from "lucide-react";
import { site } from "@/config/site";

const rows = [
  ["« L'IA va transformer votre entreprise »", "Un gain chiffré en heures et en euros, avant de commencer"],
  ["Un projet de 6 mois au périmètre flou", "Une première automatisation en production en 30 jours"],
  ["Une formation, puis débrouillez-vous", "On construit, on branche, on forme. Vous validez."],
  ["Des automatisations bricolées qui cassent au moindre changement", "Un outil construit pour votre façon de travailler, et maintenu"],
  ["Un TJM qui dérape", "Un prix fixe par cas d'usage, annoncé avant de signer"],
];

const them = "Ce qu'on vous vend d'habitude";
const us = "Ce qu'on fait";

export function Comparison() {
  const last = rows.length - 1;
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 border-t border-line pt-20 sm:gap-14 sm:pt-24">
        <div className="flex flex-col items-center gap-4 text-center" data-reveal>
          <span className="pill bg-pink!">Avant / après</span>
          <h2 className="h2">Pourquoi la plupart des projets IA en PME ne rapportent rien</h2>
        </div>

        {/* Deux colonnes face à face (tablette et ordinateur) : « d'habitude » en retrait, « ce qu'on fait » en avant. */}
        <div className="relative hidden md:block" data-reveal>
          <span
            aria-hidden="true"
            className="absolute top-6 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-white font-display text-sm font-bold text-ink shadow-[0_6px_20px_-6px_rgb(28_25_23/0.35)] ring-1 ring-line"
          >
            VS
          </span>
          <table className="w-full table-fixed border-separate border-spacing-x-3 border-spacing-y-0 text-left">
            <caption className="sr-only">Comparaison entre l&apos;approche habituelle et celle de {site.name}</caption>
            <thead>
              <tr>
                <th scope="col" className="rounded-t-[24px] bg-stone-100 px-8 pt-8 pb-5 align-top">
                  <span className="text-sm font-semibold tracking-wide text-muted uppercase">{them}</span>
                </th>
                <th scope="col" className="rounded-t-[24px] bg-dark bg-[radial-gradient(60%_140%_at_85%_0%,rgb(217_54_62/0.4),transparent_70%)] px-8 pt-8 pb-5 align-top">
                  <span className="text-sm font-semibold tracking-wide text-[#F59A9E] uppercase">
                    {us}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([a, b], i) => (
                <tr key={a}>
                  <td className={`bg-stone-100 px-8 ${i === last ? "rounded-b-[24px] pb-8" : ""}`}>
                    <span className="flex items-start gap-3 border-t border-stone-200 py-5 text-stone-600">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-stone-200">
                        <X className="size-3 text-stone-600" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="line-through decoration-stone-300">{a}</span>
                    </span>
                  </td>
                  <td className={`bg-dark px-8 ${i === last ? "rounded-b-[24px] pb-8" : ""}`}>
                    <span className="flex items-start gap-3 border-t border-white/10 py-5 text-[17px] font-semibold text-white">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-white">
                        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {b}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Version empilée (mobile) */}
        <ul className="flex flex-col gap-3 md:hidden">
          {rows.map(([a, b]) => (
            <li key={a} className="overflow-hidden rounded-[20px]" data-reveal>
              <p className="flex items-start gap-3 bg-stone-100 px-5 py-4 text-[15px] text-stone-600">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-stone-200">
                  <X className="size-3 text-stone-600" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="line-through decoration-stone-300">
                  <span className="sr-only">{them} : </span>
                  {a}
                </span>
              </p>
              <p className="flex items-start gap-3 bg-dark px-5 py-4 font-semibold text-white">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>
                  <span className="sr-only">{us} : </span>
                  {b}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
