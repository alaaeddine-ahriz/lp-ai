import { Plus } from "lucide-react";

export const faqs = [
  {
    q: "Je n'ai pas d'équipe technique. C'est un problème ?",
    a: "Non, c'est même le cas de la plupart des PME. On s'occupe de toute la partie technique. Votre rôle : nous expliquer comment vous travaillez et valider le résultat.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le diagnostic est gratuit. Ensuite, chaque cas d'usage a un prix fixe annoncé avant de signer, calculé pour être remboursé par le temps gagné en quelques mois. Pas de TJM, pas de mauvaise surprise.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "On choisit avec vous des outils conformes au RGPD, on limite les accès au strict nécessaire et on documente où vont vos données. Les informations sensibles ne partent pas dans un outil public.",
  },
  {
    q: "Et si mes équipes ne s'en servent pas ?",
    a: "C'est pour ça qu'on part de leur travail réel et qu'on les forme sur leurs propres dossiers. Une automatisation que personne n'utilise ne rapporte rien, on le mesure à J+30.",
  },
  {
    q: "Pourquoi seulement 3 diagnostics par mois ?",
    a: "Parce que chaque diagnostic est préparé à la main, sur votre entreprise. Au-delà, on ne pourrait plus tenir le délai de 30 jours pour les clients en cours.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-[860px]">
        <h2 className="h2 mb-8" data-reveal>
          Vos questions
        </h2>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} name="faq" className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold transition-colors hover:text-accent">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-pink-soft text-accent transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4.5" aria-hidden="true" />
                </span>
              </summary>
              <p className="pr-14 pb-6 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
