import { Banknote, Compass, Factory, Handshake, Megaphone, Scale, Target, User, Users } from "lucide-react";
import type { Photos } from "@/lib/photos";

/*
 * La carte des pôles, dessinée comme un organigramme : la direction en haut, les pôles en dessous.
 * Le visiteur clique sur le sien et voit où l'IA peut intervenir, et ce qui reste humain.
 * Ordinateur : organigramme cliquable, un seul panneau visible à la fois.
 * Mobile : rangée de pastilles collée en haut + carrousel de cartes à faire glisser.
 * Le comportement est dans src/scripts/enhancements.ts ; sans JS, tout reste lisible.
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
        text: "Chiffre d'affaires, trésorerie, devis en cours : tout sur votre téléphone, branché sur votre compta et votre CRM. Et vous pouvez lui poser vos questions.",
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
        text: "Posts, articles, pages : un outil qui connaît votre offre et votre ton, pas du texte générique.",
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
        text: "Une fiche prête avant chaque rendez-vous : chiffres, équipe, actualités, questions à poser.",
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
        text: "Relance des devis non signés ; contrat, signature et appel de lancement pour ceux qui signent.",
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
        text: "Fiches de mesure, briefs atelier, plannings, suivi du stock : faits pour votre façon de travailler.",
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
        text: "Ce qui rentre, ce qui sort, ce qui est rentable : directement dans votre cockpit.",
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

const center = 3; // index du pôle sous la direction : les pulsations partent de là vers les côtés

function Node({ pole, selected, root }: { pole: Pole; selected: boolean; root?: boolean }) {
  return (
    <button
      type="button"
      role="tab"
      id={`tab-${pole.id}`}
      aria-controls={`panel-${pole.id}`}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      className={`map-node group/node relative z-[1] flex items-center gap-3 rounded-xl border border-line bg-white p-3 text-left transition-colors duration-200 hover:border-ink/30 aria-selected:border-ink aria-selected:bg-ink aria-selected:text-white ${root ? "w-[260px]" : "w-full flex-col items-start"}`}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-sand-soft text-ink transition-colors group-aria-selected/node:bg-white/10 group-aria-selected/node:text-white">
        <pole.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[15px] leading-tight font-medium">{pole.name}</span>
        <span className="text-[13px] text-soft transition-colors group-aria-selected/node:text-stone-400">
          {pole.points.length} leviers
        </span>
      </span>
    </button>
  );
}

/* Un fil de l'organigramme : un trait fixe et une pulsation qui le parcourt (animée par transform, donc fluide). */
function Wire({ kind }: { kind: "trunk" | "bus" | "stub" }) {
  return (
    <span aria-hidden="true" className={`map-wire map-wire--${kind}`}>
      <i />
    </span>
  );
}

export function CompanyMap({ photos = {} }: { photos?: Photos }) {
  const [root, ...branches] = poles;
  return (
    <section id="carte" className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 border-t border-line pt-20 sm:gap-14 sm:pt-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end lg:gap-16" data-reveal>
          <h2 className="h2">
            Où l&apos;IA peut intervenir <span className="tone">dans votre entreprise.</span>
          </h2>
          <p className="max-w-[520px] text-lg leading-relaxed text-muted">
            On n&apos;invente rien : chaque point est une tâche que quelqu&apos;un fait déjà chez vous, souvent à la
            main. Et que vous payez déjà.{" "}
            <span className="hidden lg:inline">Cliquez sur votre pôle.</span>
            <span className="lg:hidden">Faites glisser pour voir chaque pôle.</span>
          </p>
        </div>

        <div data-map className="flex flex-col gap-5 lg:gap-10" data-reveal>
          {/* Ordinateur : l'organigramme */}
          <div role="tablist" aria-label="Pôles de l'entreprise" className="map-chart hidden lg:flex">
            <div className="map-root">
              <Node pole={root} selected root />
              <Wire kind="trunk" />
            </div>
            <div className="map-branches">
              {branches.map((p, i) => (
                <div
                  key={p.id}
                  className="map-leaf"
                  data-side={i < center ? "left" : i > center ? "right" : "center"}
                  style={{ "--d": Math.abs(i - center) } as React.CSSProperties}
                >
                  <Wire kind="bus" />
                  <Wire kind="stub" />
                  <Node pole={p} selected={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile : pastilles collées sous l'en-tête, elles suivent le carrousel */}
          <nav
            aria-label="Pôles de l'entreprise"
            className="sticky top-16 z-20 -mx-5 bg-white/90 py-3 backdrop-blur-md lg:hidden"
          >
            <ul data-map-chips className="flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {poles.map((p, i) => (
                <li key={p.id} className="shrink-0">
                  <button
                    type="button"
                    data-target={`panel-${p.id}`}
                    aria-current={i === 0 ? "true" : undefined}
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-medium text-muted transition-colors aria-[current=true]:border-ink aria-[current=true]:bg-ink aria-[current=true]:text-white"
                  >
                    <p.icon className="size-4" strokeWidth={2} aria-hidden="true" />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div
            data-map-track
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 items-stretch gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:block lg:snap-none lg:overflow-visible lg:p-0 [&::-webkit-scrollbar]:hidden"
          >
            {poles.map((p, i) => {
              const photo = photos[`pole-${p.id}`];
              return (
                <div
                  key={p.id}
                  role="tabpanel"
                  id={`panel-${p.id}`}
                  aria-labelledby={`tab-${p.id}`}
                  data-active={i === 0 ? "" : undefined}
                  className="map-panel flex w-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-line bg-white sm:w-[70%] lg:grid lg:w-auto lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent"
                >
                  {/* Photo et visuel par défaut reçoivent le même traitement (halo rouge, dégradé sombre). */}
                  <div className="grain grain-dark relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-dark p-5 text-white sm:p-8 lg:min-h-[420px] lg:rounded-[24px]">
                    {photo ? (
                      <img
                        src={photo.src}
                        srcSet={photo.srcSet}
                        sizes="(min-width: 1024px) 420px, 86vw"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 size-full object-cover saturate-[0.6]"
                      />
                    ) : (
                      <div aria-hidden="true" className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-size-[18px_18px] mask-[linear-gradient(to_bottom,#000,transparent_75%)]" />
                        <p.icon className="absolute -top-6 -right-6 size-52 text-white/[0.07]" strokeWidth={1} />
                      </div>
                    )}
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgb(11_11_11/0.9),rgb(11_11_11/0.35)_55%,rgb(11_11_11/0.05))]" />
                    <div className="relative flex flex-col gap-2 lg:gap-3">
                      <span className="grid size-10 place-items-center rounded-lg bg-white/15 text-white backdrop-blur-sm lg:size-11">
                        <p.icon className="size-5 lg:size-6" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="text-[26px] leading-tight lg:text-[32px]">{p.name}</h3>
                      <p className="max-w-[340px] text-[15px] text-stone-200 lg:text-base">{p.goal}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6 lg:gap-7 lg:p-0">
                    <ul className="flex flex-col gap-4 lg:gap-5">
                      {p.points.map((pt, k) => (
                        <li key={pt.title} className="map-item flex gap-3 lg:gap-4" style={{ "--k": k } as React.CSSProperties}>
                          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-ink" />
                          <p className="text-[15px] leading-relaxed text-muted lg:text-[17px]">
                            <strong className="font-medium text-ink">{pt.title}.</strong> {pt.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto flex items-start gap-3 border-t border-line pt-4 text-sm lg:mt-0 lg:pt-5 lg:text-[15px]">
                      <User className="mt-0.5 size-4 shrink-0 text-soft lg:size-4.5" aria-hidden="true" />
                      <span>
                        <strong className="font-medium">Ce qui reste humain : </strong>
                        <span className="text-muted">{p.human}</span>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between" data-reveal>
          <p className="max-w-[680px] text-lg leading-relaxed">
            On ne vous propose pas de tout automatiser d&apos;un coup. On commence par un seul pôle, on pose un socle
            qui connaît vos données, puis on ajoute des modules quand le premier rapporte.
          </p>
          <a href="#rdv" className="btn" data-cta="map">
            Trouver mon premier pôle
          </a>
        </div>
      </div>
    </section>
  );
}
