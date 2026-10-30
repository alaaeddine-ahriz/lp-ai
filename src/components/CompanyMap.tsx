import { Banknote, Compass, Factory, Handshake, Megaphone, Plus, Scale, Target, User, Users } from "lucide-react";
import type { Photos } from "@/lib/photos";

/*
 * La carte des pôles : le visiteur choisit le sien et voit où l'IA peut intervenir, et ce qui reste humain.
 * Ordinateur : une grande carte avec la photo du pôle en fond, la liste à gauche (onglets verticaux) et le contenu à droite.
 * Mobile : accordéon natif (<details>), un pôle ouvert à la fois, sans JS.
 * Les onglets sont activés par src/scripts/enhancements.ts.
 * Photo facultative par pôle : src/assets/photos/pole-<id>.jpg (ex. pole-vente.jpg).
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
        text: "Le chiffre du mois, la trésorerie, les devis en attente : sur votre téléphone, branché sur votre compta et votre CRM. Vous lui posez une question, il vous répond avec vos chiffres.",
      },
      {
        title: "L'assistant email",
        text: "Votre boîte triée chaque matin, un résumé de ce qui compte, et des brouillons de réponse écrits comme vous écrivez. Rien ne part sans que vous l'ayez relu.",
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
        text: "On surveille les publicités de vos concurrents et, chaque semaine, vous recevez les angles qui fonctionnent chez eux.",
      },
      {
        title: "Production de contenu",
        text: "Posts, articles, pages de vente, écrits par un outil qui connaît votre offre, vos clients et votre façon de parler.",
      },
      {
        title: "Reporting des campagnes",
        text: "Dépenses, clics et conversions réunis au même endroit, sans attendre le rapport de l'agence.",
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
        text: "Les bonnes entreprises, le bon interlocuteur, ses coordonnées et l'actualité de sa boîte, triés comme vous le voulez.",
      },
      {
        title: "Messages personnalisés",
        text: "Chaque prospect reçoit un message écrit pour lui, même quand vous en contactez des centaines.",
      },
      {
        title: "Réponse immédiate",
        text: "Quand un prospect répond qu'il est intéressé, il reçoit tout de suite une proposition de rendez-vous. Le CRM se met à jour tout seul.",
      },
      {
        title: "Standard pour les appels entrants",
        text: "Quand personne ne peut décrocher, il répond, comprend la demande et prend rendez-vous.",
      },
    ],
    human: "Les appels de prospection : pas de voix robot qui démarche vos prospects.",
  },
  {
    id: "vente",
    name: "Vente",
    icon: Handshake,
    goal: "Signer plus, et plus vite.",
    points: [
      {
        title: "Préparation des rendez-vous",
        text: "Avant chaque rendez-vous, une fiche sur l'entreprise : ses chiffres, son équipe, ses actualités et les questions à poser.",
      },
      {
        title: "Chiffrage assisté",
        text: "L'outil lit le dossier de consultation et prépare l'estimation. Vous pouvez répondre avant vos concurrents.",
      },
      {
        title: "Comptes rendus automatiques",
        text: "Après chaque appel, le compte rendu est dans le CRM et le client a reçu le récapitulatif avec les prochaines étapes.",
      },
      {
        title: "Relances et démarrage client",
        text: "Les devis non signés sont relancés au bon moment. Pour ceux qui signent, le contrat, la signature et l'appel de lancement s'enchaînent.",
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
        text: "Le cahier des charges découpé en tâches, réparties dans l'équipe, avec un planning que tout le monde voit.",
      },
      {
        title: "Client tenu informé",
        text: "À chaque étape validée, le client reçoit un mot. Il sait où en est son projet sans avoir à appeler.",
      },
      {
        title: "Outils métier sur mesure",
        text: "Fiches de mesure, briefs pour l'atelier, plannings, suivi du stock : des outils faits pour votre métier, pas pour un autre.",
      },
    ],
    human: "Votre savoir-faire et la livraison.",
  },
  {
    id: "rh",
    name: "RH",
    icon: Users,
    goal: "Recruter et accueillir sans y passer vos semaines.",
    points: [
      {
        title: "Recrutement",
        text: "Fiches de poste, annonces, premier tri des CV, préparation des entretiens et comptes rendus.",
      },
      {
        title: "Assistant interne",
        text: "Un nouvel arrivant pose ses questions à un assistant qui connaît vos procédures, plutôt qu'à son manager toutes les cinq minutes.",
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
        text: "Les impayés sont relancés au bon moment, avec le bon ton, sans que vous ayez à y penser.",
      },
      {
        title: "Lien avec le comptable",
        text: "Les pièces et les données sont préparées et envoyées au cabinet, et tout est archivé comme il faut.",
      },
      {
        title: "Suivi budgétaire",
        text: "Ce qui rentre, ce qui sort et ce qui rapporte vraiment : directement dans votre cockpit.",
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

/** Photo du pôle avec son nom et son objectif par-dessus. Sans photo : fond sombre et grande icône en filigrane. */
function PoleVisual({ pole, photos, sizes }: { pole: Pole; photos: Photos; sizes: string }) {
  const photo = photos[`pole-${pole.id}`];
  return (
    <div className="grain grain-dark on-dark relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[20px] bg-dark p-6 text-white sm:min-h-[280px] sm:p-8">
      {photo ? (
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={sizes}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover saturate-[0.8]"
        />
      ) : (
        <pole.icon aria-hidden="true" className="absolute -top-6 -right-6 size-52 text-white/[0.07]" strokeWidth={1} />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgb(29_25_21/0.92),rgb(29_25_21/0.4)_55%,rgb(29_25_21/0.05))]" />
      <div className="relative flex flex-col gap-1.5">
        <h3 className="text-[28px] leading-tight sm:text-[32px]">{pole.name}</h3>
        <p className="max-w-[420px] text-[#ebe3d9]">{pole.goal}</p>
      </div>
    </div>
  );
}

/** Les leviers du pôle et ce qui reste humain. */
function PoleDetails({ pole }: { pole: Pole }) {
  return (
    <div className="flex flex-col gap-6">
      <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {pole.points.map((pt) => (
          <li key={pt.title} className="flex flex-col gap-1">
            <strong className="text-[17px] font-medium">{pt.title}</strong>
            <span className="text-[15px] leading-relaxed text-muted">{pt.text}</span>
          </li>
        ))}
      </ul>
      <p className="flex items-start gap-3 rounded-xl bg-sand px-4 py-3 text-[15px]">
        <User className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
        <span>
          <strong className="font-medium">Ce qui reste humain : </strong>
          <span className="text-muted">{pole.human}</span>
        </span>
      </p>
    </div>
  );
}

const closing = (
  <>
    On n&apos;invente rien&nbsp;: chaque point est une tâche que quelqu&apos;un fait déjà chez vous, souvent à la main.
    Et on ne touche pas à tout&nbsp;: on commence par le pôle qui vous coûte le plus, et on n&apos;ajoute la suite que
    quand ce premier outil a fait ses preuves.
  </>
);

export function CompanyMap({ photos = {} }: { photos?: Photos }) {
  return (
    <section id="carte" className="px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 sm:gap-12">
        <h2 className="h2" data-reveal>
          Où l&apos;IA peut intervenir <span className="tone">dans votre entreprise.</span>
        </h2>

        {/* Ordinateur : une seule grande carte. La photo du pôle choisi en fond, la liste à gauche, le contenu à droite. */}
        <div
          data-map
          className="grain grain-dark on-dark relative hidden overflow-hidden rounded-[28px] bg-dark text-white lg:block"
          data-reveal
        >
          <div className="grid min-h-[600px] grid-cols-[250px_minmax(0,1fr)] gap-14 p-10 pb-12">
            <div className="relative z-[1] flex flex-col gap-4">
              <span className="text-sm text-on-dark-soft">Choisissez votre pôle</span>
              <div role="tablist" aria-label="Pôles de l'entreprise" aria-orientation="vertical" className="flex flex-col">
                {poles.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    id={`tab-${p.id}`}
                    aria-controls={`panel-${p.id}`}
                    aria-selected={i === 0}
                    tabIndex={i === 0 ? 0 : -1}
                    className="group/tab border-l-2 border-white/15 py-2.5 pl-5 text-left text-lg leading-tight font-medium text-white/55 transition-colors [font-family:var(--font-display)] hover:border-white/40 hover:text-white aria-selected:border-white aria-selected:text-white"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {poles.map((p, i) => {
              const photo = photos[`pole-${p.id}`];
              return (
                <div
                  key={p.id}
                  role="tabpanel"
                  id={`panel-${p.id}`}
                  aria-labelledby={`tab-${p.id}`}
                  hidden={i !== 0}
                  className="map-panel flex flex-col justify-end gap-8 [&>*:not(.map-photo)]:relative"
                >
                  {/* La photo appartient au panneau : elle change avec lui, mais couvre toute la carte. */}
                  <div aria-hidden="true" className="map-photo pointer-events-none absolute inset-0">
                    {photo ? (
                      <img
                        src={photo.src}
                        srcSet={photo.srcSet}
                        sizes="1180px"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover saturate-[0.8]"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(29_25_21/0.94),rgb(29_25_21/0.72)_40%,rgb(29_25_21/0.82)),linear-gradient(to_top,rgb(29_25_21/0.85),transparent_70%)]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[40px] leading-none">{p.name}</h3>
                    <p className="text-lg text-[#ebe3d9]">{p.goal}</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-10 gap-y-5">
                    {p.points.map((pt) => (
                      <li key={pt.title} className="flex flex-col gap-1">
                        <strong className="text-[17px] font-medium text-white">{pt.title}</strong>
                        <span className="text-[15px] leading-relaxed text-[#e2d9ce]">{pt.text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="flex items-center gap-2.5 text-[15px] text-[#e2d9ce]">
                    <User className="size-4 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="font-medium text-white">Ce qui reste humain : </strong>
                      {p.human}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative z-[2] flex items-center justify-between gap-10 border-t border-white/15 bg-[rgb(20_17_14/0.6)] px-10 py-7 backdrop-blur-sm">
            <p className="max-w-[720px] text-[15px] leading-relaxed text-[#ebe3d9]">{closing}</p>
            <a href="#rdv" className="btn btn-light shrink-0" data-cta="map">
              Trouver mon premier pôle
            </a>
          </div>
        </div>

        {/* Mobile : accordéon, un pôle ouvert à la fois, puis la conclusion */}
        <div className="flex flex-col gap-8 lg:hidden">
          <div className="flex flex-col">
            {poles.map((p, i) => (
              <details key={p.id} name="poles" open={i === 0} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3">
                    <p.icon className="size-5 text-muted" strokeWidth={1.75} aria-hidden="true" />
                    <span className="text-lg font-medium [font-family:var(--font-display)]">{p.name}</span>
                  </span>
                  <Plus className="size-4.5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <div className="flex flex-col gap-6 pb-6">
                  <PoleVisual pole={p} photos={photos} sizes="100vw" />
                  <PoleDetails pole={p} />
                </div>
              </details>
            ))}
          </div>
          <div className="grain grain-dark on-dark flex flex-col items-start gap-5 rounded-[20px] bg-dark p-6 text-white">
            <p className="text-[15px] leading-relaxed text-[#ebe3d9]">{closing}</p>
            <a href="#rdv" className="btn btn-light" data-cta="map">
              Trouver mon premier pôle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
