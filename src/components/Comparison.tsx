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
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 border-t border-line pt-20 sm:gap-12 sm:pt-24">
        <h2 className="h2" data-reveal>
          Pourquoi la plupart des projets IA en PME ne rapportent rien
        </h2>

        {/* Tableau (tablette et ordinateur) */}
        <div className="hidden overflow-hidden rounded-[24px] border border-line md:block" data-reveal>
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Comparaison entre l&apos;approche habituelle et celle de {site.name}</caption>
            <thead>
              <tr>
                <th scope="col" className="w-1/2 px-8 py-5 text-sm font-semibold tracking-wide text-muted uppercase">
                  {them}
                </th>
                <th scope="col" className="w-1/2 bg-pink-soft px-8 py-5 text-sm font-semibold tracking-wide text-accent-strong uppercase">
                  {us}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([a, b]) => (
                <tr key={a} className="border-t border-line">
                  <td className="px-8 py-6 text-muted">
                    <span className="flex items-start gap-3">
                      <X className="mt-0.5 size-5 shrink-0 text-stone-400" aria-hidden="true" />
                      {a}
                    </span>
                  </td>
                  <td className="bg-pink-soft px-8 py-6 text-[17px] font-semibold">
                    <span className="flex items-start gap-3">
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
            <li key={a} className="overflow-hidden rounded-[18px] border border-line" data-reveal>
              <p className="flex items-start gap-3 px-5 py-4 text-[15px] text-muted">
                <X className="mt-0.5 size-4.5 shrink-0 text-stone-400" aria-hidden="true" />
                <span>
                  <span className="sr-only">{them} : </span>
                  {a}
                </span>
              </p>
              <p className="flex items-start gap-3 bg-pink-soft px-5 py-4 font-semibold">
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
