import { Banknote, Compass, Factory, Handshake, Megaphone, Plus, Scale, Target, Users } from "lucide-react";
import type { Photos } from "@/lib/photos";

/*
 * La carte des pôles : le visiteur choisit le sien et voit où l'IA peut intervenir, et ce qui reste humain.
 * Ordinateur : une grande carte pilotée par le défilement (elle s'élargit, se fige, puis passe les pôles un par un).
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
    human: "Les appels de prospection. Pas de voix robot qui démarche vos prospects.",
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

/** Les leviers du pôle, puis une phrase simple sur ce qui reste humain. */
function PoleDetails({ pole, dark }: { pole: Pole; dark?: boolean }) {
  const text = dark ? "text-[#e2d9ce]" : "text-muted";
  return (
    <div className="flex flex-col gap-6">
      <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {pole.points.map((pt) => (
          <li key={pt.title} className="flex flex-col gap-1">
            <strong className="text-[17px] font-medium">{pt.title}</strong>
            <span className={`text-[15px] leading-relaxed ${text}`}>{pt.text}</span>
          </li>
        ))}
      </ul>
      <p className={`text-[15px] ${text}`}>Ce qui reste humain : {lowerFirst(pole.human)}</p>
    </div>
  );
}

const lowerFirst = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);

export function CompanyMap({ photos = {} }: { photos?: Photos }) {
  return (
    <section id="carte" className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        <h2 className="h2" data-reveal>
          Où l&apos;IA peut intervenir <span className="tone">dans votre entreprise.</span>
        </h2>

      </div>

      {/* Ordinateur : la carte s'élargit jusqu'aux bords en arrivant en haut de l'écran, reste fixe,
          et le défilement fait passer les pôles un par un (src/scripts/enhancements.ts).
          Sans animation (mouvement réduit), c'est une carte à onglets classique. */}
      <div data-map className="map-scroll relative mt-10 hidden sm:mt-12 lg:block">
        <div className="map-stage">
          <div className="map-card grain grain-dark on-dark relative overflow-hidden bg-dark text-white">
            {poles.map((p, i) => {
              const photo = photos[`pole-${p.id}`];
              return (
                <div
                  key={p.id}
                  aria-hidden="true"
                  data-photo={`panel-${p.id}`}
                  className="map-photo pointer-events-none absolute inset-0"
                  hidden={i !== 0}
                >
                  {photo ? (
                    <img
                      src={photo.src}
                      srcSet={photo.srcSet}
                      sizes="100vw"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover saturate-[0.8]"
                    />
                  ) : null}
                </div>
              );
            })}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(29_25_21/0.95),rgb(29_25_21/0.74)_45%,rgb(29_25_21/0.84)),linear-gradient(to_top,rgb(29_25_21/0.9),transparent_70%)]" />

            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[4] h-0.5 bg-white/10">
              <div className="map-progress h-full origin-left bg-white/70" />
            </div>
            <div className="map-inner relative mx-auto w-[min(1180px,100%-48px)]">
              <div className="grid w-full grid-cols-[230px_minmax(0,1fr)] items-start gap-14 px-10 py-12">
                <div className="flex flex-col gap-4">
                  <span className="text-sm text-on-dark-soft">
                    <span data-map-count>01</span> / {String(poles.length).padStart(2, "0")}
                  </span>
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
                        className="border-l-2 border-white/15 py-2 pl-5 text-left text-lg leading-tight font-medium text-white/55 transition-colors [font-family:var(--font-display)] hover:border-white/40 hover:text-white aria-selected:border-white aria-selected:text-white"
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tous les panneaux dans la même case : la colonne garde la hauteur du plus long, rien ne saute. */}
                <div className="map-stack grid">
                  {poles.map((p, i) => (
                    <div
                      key={p.id}
                      role="tabpanel"
                      id={`panel-${p.id}`}
                      aria-labelledby={`tab-${p.id}`}
                      hidden={i !== 0}
                      className="map-panel flex flex-col gap-8 pt-9 [grid-area:1/1]"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[44px] leading-none">{p.name}</h3>
                        <p className="text-lg text-[#ebe3d9]">{p.goal}</p>
                      </div>
                      <PoleDetails pole={p} dark />
                      <a href="#rdv" className="btn btn-light self-start" data-cta="map">
                        Réserver un audit gratuit
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        {/* Mobile : accordéon, un pôle ouvert à la fois, puis la conclusion */}
        <div className="mt-10 flex flex-col gap-8 lg:hidden">
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
          <a href="#rdv" className="btn self-start" data-cta="map">
            Réserver un audit gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
