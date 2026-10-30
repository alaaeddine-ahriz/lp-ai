import { Plus } from "lucide-react";

export const faqs = [
  {
    q: "Concrètement, vous faites quoi ?",
    a: "De l'audit et du conseil, puis de la mise en œuvre. On commence par auditer votre façon de travailler pour trouver où l'IA vous fait gagner du temps, on vous conseille sur ce qui vaut le coup, et si vous le souhaitez on construit et on installe les outils.",
  },
  {
    q: "Je n'ai pas d'équipe technique. C'est un problème ?",
    a: "Non, c'est le cas de la plupart des PME. On s'occupe de toute la partie technique. De votre côté, il suffit de nous montrer comment vous travaillez, puis de valider le résultat.",
  },
  {
    q: "Et si l'IA ne sert à rien chez moi ?",
    a: "On vous le dit pendant l'appel. Si on ne voit aucun processus où l'IA vous fait gagner plusieurs heures par semaine, on ne vous propose rien. Vous repartez quand même avec le diagnostic.",
  },
  {
    q: "Combien ça coûte ?",
    a: "L'audit de départ est gratuit. Ensuite, chaque outil a un prix fixe, annoncé avant de signer et calculé pour être remboursé en quelques mois par le temps gagné. Pas de facturation au jour, pas de dépassement.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "On choisit avec vous des outils conformes au RGPD, on limite les accès au strict nécessaire et on vous écrit noir sur blanc où vont vos données. Rien de sensible ne part dans un outil public.",
  },
  {
    q: "Et si mes équipes ne s'en servent pas ?",
    a: "C'est le vrai risque, alors on le traite dès le départ : on part de leur travail réel et on les forme sur leurs propres dossiers. À J+30, on mesure aussi l'usage. Un outil que personne n'ouvre ne rapporte rien.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start" data-reveal>
          <h2 className="h2">
            Vos questions, <span className="tone">nos réponses.</span>
          </h2>
          <p className="max-w-[360px] text-[17px] leading-relaxed text-muted">
            Une question qui n&apos;est pas ici ? Posez-la pendant l&apos;audit, c&apos;est fait pour ça.
          </p>
          <a href="#rdv" className="btn self-start" data-cta="faq">
            Réserver un audit gratuit
          </a>
        </div>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} name="faq" className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium transition-colors hover:text-muted">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center text-ink transition-transform duration-300 group-open:rotate-45">
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
