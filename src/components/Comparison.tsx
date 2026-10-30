import { Check } from "lucide-react";
import { site } from "@/config/site";

/* Une ligne = une promesse habituelle et ce qu'on fait à la place. Notre colonne est celle qu'on lit en premier. */
const rows = [
  ["« L'IA va transformer votre entreprise »", "Un gain chiffré en heures et en euros, avant de commencer"],
  ["Un projet de 6 mois au périmètre flou", "Un premier outil en production en 30 jours"],
  ["Une formation, puis débrouillez-vous", "On construit, on branche, on forme. Vous validez."],
  ["Des automatisations bricolées qui cassent", "Un outil fait pour votre façon de travailler, et maintenu"],
  ["Un TJM qui dérape", "Un prix fixe, annoncé avant de signer"],
];

const lowerFirst = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);

export function Comparison() {
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 border-t border-line pt-20 sm:gap-14 sm:pt-24">
        <h2 className="h2" data-reveal>
          Pourquoi la plupart des projets IA en PME <span className="tone">ne rapportent rien.</span>
        </h2>

        <div className="w-full" data-reveal>
          {/* Tablette et ordinateur : deux colonnes */}
          <table className="hidden w-full border-collapse text-left md:table">
            <caption className="sr-only">Ce qu&apos;on vous vend d&apos;habitude, et ce que fait {site.name}</caption>
            <thead>
              <tr className="text-sm font-medium">
                <th scope="col" className="w-[42%] pb-4 text-muted">D&apos;habitude</th>
                <th scope="col" className="pb-4 text-ink">Avec {site.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([them, us]) => (
                <tr key={them} className="border-t border-line">
                  <td className="py-5 pr-8 text-muted">{them}</td>
                  <td className="py-5">
                    <span className="flex items-start gap-3 text-lg font-medium">
                      <Check className="mt-1 size-5 shrink-0 text-ink" strokeWidth={2.5} aria-hidden="true" />
                      {us}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile : ce qu'on fait d'abord, l'habitude en dessous */}
          <ul className="flex flex-col md:hidden">
            {rows.map(([them, us]) => (
              <li key={them} className="flex gap-3 border-t border-line py-5 first:border-t-0 first:pt-0">
                <Check className="mt-1 size-5 shrink-0 text-ink" strokeWidth={2.5} aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <strong className="text-[17px] font-medium">{us}</strong>
                  <span className="text-[15px] text-muted">Au lieu de : {lowerFirst(them)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
