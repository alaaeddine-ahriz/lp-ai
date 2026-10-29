import { Banknote, Check, Compass, Factory, Handshake, Megaphone, Scale, Target, User, Users } from "lucide-react";

/*
 * La carte des pôles : le visiteur choisit le pôle qui lui parle et voit où l'IA peut intervenir.
 * Les onglets sont activés par src/scripts/enhancements.ts ; sans JS, le premier pôle reste affiché.
 */
type Pole = {
  id: string;
  name: string;
  icon: typeof Compass;
  goal: string;
  points: { title: string; text: string }[];
  human: string;
};

const poles: Pole[] = [
  {
    id: "direction",
    name: "Direction",
    icon: Compass,
    goal: "Piloter l'entreprise et reprendre la main sur son temps.",
    points: [
      {
        title: "Le cockpit du dirigeant",
        text: "Chiffre d'affaires, trésorerie, devis en cours : tout sur votre téléphone, branché sur votre compta et votre CRM. Et vous pouvez lui poser vos questions.",
      },
      {
        title: "L'assistant email",
        text: "Votre boîte triée, un résumé chaque matin, des brouillons de réponse dans votre ton. Rien ne part sans vous.",
      },
    ],
    human: "Le management de vos équipes et vos relations.",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    goal: "Se faire voir et attirer les bons clients.",
    points: [
      {
        title: "Veille concurrentielle",
        text: "Les publicités de vos concurrents surveillées en continu, avec chaque semaine les angles qui marchent.",
      },
      {
        title: "Production de contenu",
        text: "Posts, articles, pages : un outil qui connaît votre offre et votre ton, pas du texte générique.",
      },
      {
        title: "Reporting des campagnes",
        text: "Dépenses, clics, conversions réunis dans un seul tableau de bord.",
      },
    ],
    human: "Le tournage, votre image, les relations presse.",
  },
  {
    id: "prospection",
    name: "Prospection",
    icon: Target,
    goal: "Aller chercher de nouveaux clients.",
    points: [
      {
        title: "Fichier de prospects",
        text: "Trouvés, enrichis (nom, poste, taille, actualités) et segmentés comme vous le souhaitez.",
      },
      {
        title: "Messages personnalisés",
        text: "Chaque prospect reçoit un message écrit pour lui, même à grande échelle.",
      },
      {
        title: "Réponse immédiate",
        text: "Un prospect intéressé reçoit une proposition de rendez-vous tant qu'il est chaud. Tout est rangé dans le CRM.",
      },
      {
        title: "Standard pour les appels entrants",
        text: "Il répond, qualifie la demande et prend rendez-vous quand personne n'est disponible.",
      },
    ],
    human: "Les appels de prospection : pas de voix robot qui démarche vos prospects.",
  },
  {
    id: "vente",
    name: "Vente",
    icon: Handshake,
    goal: "Signer plus, et plus vite.",
    points: [
      {
        title: "Préparation des rendez-vous",
        text: "Une fiche prête avant chaque rendez-vous : chiffres, équipe, actualités, questions à poser.",
      },
      {
        title: "Chiffrage assisté",
        text: "L'outil lit le dossier de consultation et prépare l'estimation. Vous répondez avant vos concurrents.",
      },
      {
        title: "Comptes rendus automatiques",
        text: "Après chaque appel, le compte rendu arrive dans le CRM et le récapitulatif part au client.",
      },
      {
        title: "Relances et démarrage client",
        text: "Relance des devis non signés ; contrat, signature et appel de lancement pour ceux qui signent.",
      },
    ],
    human: "La relation et la négociation.",
  },
  {
    id: "production",
    name: "Production",
    icon: Factory,
    goal: "Livrer ce que vous avez vendu, sans perdre de temps.",
    points: [
      {
        title: "Planification",
        text: "Le cahier des charges découpé en tâches, réparties dans l'équipe, avec un planning.",
      },
      {
        title: "Client tenu informé",
        text: "Chaque étape validée prévient le client. Moins d'allers-retours, un client qui se sent suivi.",
      },
      {
        title: "Outils métier sur mesure",
        text: "Fiches de mesure, briefs atelier, plannings, suivi du stock : faits pour votre façon de travailler.",
      },
    ],
    human: "Votre savoir-faire et la livraison.",
  },
  {
    id: "rh",
    name: "RH",
    icon: Users,
    goal: "Recruter et intégrer sans y passer vos semaines.",
    points: [
      {
        title: "Recrutement",
        text: "Fiches de poste, annonces, tri des CV, préparation des entretiens et comptes rendus.",
      },
      {
        title: "Assistant interne",
        text: "Les nouveaux posent leurs questions à un assistant qui connaît vos procédures, pas à leur manager toutes les 5 minutes.",
      },
    ],
    human: "Le choix des personnes.",
  },
  {
    id: "finance",
    name: "Finance",
    icon: Banknote,
    goal: "Savoir où va l'argent.",
    points: [
      {
        title: "Relances de factures",
        text: "Les impayés relancés au bon moment, sans que vous ayez à y penser.",
      },
      {
        title: "Lien avec le comptable",
        text: "Pièces et données préparées et transmises, archivage en règle.",
      },
      {
        title: "Suivi budgétaire",
        text: "Ce qui rentre, ce qui sort, ce qui est rentable : directement dans votre cockpit.",
      },
    ],
    human: "Les décisions financières.",
  },
  {
    id: "juridique",
    name: "Juridique",
    icon: Scale,
    goal: "Sécuriser sans y passer des heures.",
    points: [
      {
        title: "Contrats",
        text: "Rédaction, synthèse et archivage de vos contrats.",
      },
      {
        title: "Litiges",
        text: "La synthèse des réclamations du trimestre, et ce qui a vraiment été dit dans un appel quand un client conteste.",
      },
    ],
    human: "La décision juridique, avec votre avocat.",
  },
];

export function CompanyMap() {
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 border-t border-line pt-20 sm:gap-12 sm:pt-24">
        <div className="flex flex-col items-center gap-4 text-center" data-reveal>
          <span className="pill bg-pink!">La carte</span>
          <h2 className="h2">Où l&apos;IA peut intervenir dans votre entreprise</h2>
          <p className="max-w-[680px] text-lg text-muted">
            On n&apos;invente rien : chaque point est une tâche que quelqu&apos;un fait déjà chez vous, souvent à la
            main. Et que vous payez déjà.
          </p>
        </div>

        <div data-tabs className="flex flex-col gap-6" data-reveal>
          <div
            role="tablist"
            aria-label="Pôles de l'entreprise"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {poles.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`tab-${p.id}`}
                aria-controls={`panel-${p.id}`}
                aria-selected={i === 0}
                tabIndex={i === 0 ? 0 : -1}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] font-semibold text-muted transition-colors hover:border-ink/20 hover:text-ink aria-selected:border-ink aria-selected:bg-ink aria-selected:text-white"
              >
                <p.icon className="size-4" strokeWidth={2} aria-hidden="true" />
                {p.name}
              </button>
            ))}
          </div>

          {poles.map((p, i) => (
            <div
              key={p.id}
              role="tabpanel"
              id={`panel-${p.id}`}
              aria-labelledby={`tab-${p.id}`}
              hidden={i !== 0}
              className="rounded-[24px] bg-pink-soft p-6 sm:p-10"
            >
              {/* Mobile : présentation, points, puis « ce qui reste humain ». Ordinateur : deux colonnes. */}
              <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-6">
                <div className="flex flex-col gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent text-white">
                    <p.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="text-[28px] leading-tight font-bold">{p.name}</h3>
                  <p className="text-muted">{p.goal}</p>
                </div>
                <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:content-start">
                  {p.points.map((pt) => (
                    <li key={pt.title} className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="flex flex-col gap-1">
                        <strong className="text-[17px] font-semibold">{pt.title}</strong>
                        <span className="text-[15px] leading-relaxed text-muted">{pt.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="flex items-start gap-2.5 self-start rounded-2xl bg-white p-4 text-[15px] leading-snug">
                  <User className="mt-0.5 size-4.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <strong className="block font-semibold">Ce qui reste humain</strong>
                    <span className="text-muted">{p.human}</span>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-[760px] text-center text-lg" data-reveal>
          On ne vous propose pas de tout automatiser d&apos;un coup. On commence par un seul pôle, on pose un socle qui
          connaît vos données, puis on ajoute des modules quand le premier rapporte.
        </p>
      </div>
    </section>
  );
}
