import { ArrowRight, Banknote, Compass, Factory, Handshake, Megaphone, Scale, Target, User, Users } from "lucide-react";
import type { Photos } from "@/lib/photos";

/*
 * La carte des pôles, dessinée comme un organigramme : la direction en haut, les pôles en dessous.
 * Le visiteur clique sur le sien et voit où l'IA peut intervenir, et ce qui reste humain.
 * Les onglets sont activés par src/scripts/enhancements.ts ; sans JS, le premier pôle reste affiché.
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

const total = poles.reduce((n, p) => n + p.points.length, 0);
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
      className={`map-node group/node relative flex w-full items-center gap-3 rounded-2xl border border-line bg-white p-2.5 pr-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-[0_12px_28px_-16px_rgb(43_37_35/0.35)] aria-selected:border-ink aria-selected:bg-ink aria-selected:text-white aria-selected:shadow-[0_16px_36px_-16px_rgb(28_25_23/0.6)] ${root ? "lg:w-[260px] lg:p-3" : "lg:flex-col lg:items-start lg:p-3"}`}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-pink text-accent transition-colors group-aria-selected/node:bg-accent group-aria-selected/node:text-white">
        <pole.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[15px] leading-tight font-semibold">{pole.name}</span>
        <span className="text-[13px] text-muted transition-colors group-aria-selected/node:text-stone-300">
          {pole.points.length} leviers
        </span>
      </span>
    </button>
  );
}

export function CompanyMap({ photos = {} }: { photos?: Photos }) {
  const [root, ...branches] = poles;
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 border-t border-line pt-20 sm:gap-14 sm:pt-24">
        <div className="flex flex-col items-center gap-4 text-center" data-reveal>
          <span className="pill bg-pink!">La carte · {total} leviers</span>
          <h2 className="h2">Où l&apos;IA peut intervenir dans votre entreprise</h2>
          <p className="max-w-[680px] text-lg text-muted">
            On n&apos;invente rien : chaque point est une tâche que quelqu&apos;un fait déjà chez vous, souvent à la
            main. Et que vous payez déjà. Cliquez sur votre pôle.
          </p>
        </div>

        <div data-tabs className="flex flex-col gap-8 lg:gap-10" data-reveal>
          <div role="tablist" aria-label="Pôles de l'entreprise" className="map-chart">
            <div className="map-root">
              <Node pole={root} selected root />
            </div>
            <div className="map-branches">
              {branches.map((p, i) => (
                <div
                  key={p.id}
                  className="map-leaf"
                  data-side={i < center ? "left" : i > center ? "right" : "center"}
                  style={{ "--d": Math.abs(i - center) } as React.CSSProperties}
                >
                  <Node pole={p} selected={false} />
                </div>
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
                className="map-panel grid items-center gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-14"
              >
                {/* Photo et visuel par défaut reçoivent le même traitement (halo rouge, dégradé sombre) pour rester homogènes. */}
                <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[24px] bg-dark p-6 text-white sm:p-8 lg:min-h-[420px]">
                  {photo ? (
                    <img
                      src={photo.src}
                      srcSet={photo.srcSet}
                      sizes="(min-width: 1024px) 420px, 100vw"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 size-full object-cover saturate-[0.75]"
                    />
                  ) : (
                    <div aria-hidden="true" className="absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-size-[18px_18px] mask-[linear-gradient(to_bottom,#000,transparent_75%)]" />
                      <p.icon className="absolute -top-6 -right-6 size-52 text-white/[0.07]" strokeWidth={1} />
                    </div>
                  )}
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,rgb(217_54_62/0.45),transparent_70%),linear-gradient(to_top,rgb(20_16_15/0.92),rgb(20_16_15/0.35)_55%,rgb(20_16_15/0.1))]" />
                  <div className="relative flex flex-col gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-accent text-white shadow-[0_8px_24px_-8px_rgb(217_54_62/0.8)]">
                      <p.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="text-[32px] leading-tight font-bold">{p.name}</h3>
                    <p className="max-w-[340px] text-stone-200">{p.goal}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-7">
                  <ul className="flex flex-col gap-5">
                    {p.points.map((pt, k) => (
                      <li key={pt.title} className="map-item flex gap-4" style={{ "--k": k } as React.CSSProperties}>
                        <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-accent ring-4 ring-pink" />
                        <p className="text-[17px] leading-relaxed text-muted">
                          <strong className="font-semibold text-ink">{pt.title}.</strong> {pt.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="flex items-start gap-3 border-t border-line pt-5 text-[15px]">
                    <User className="mt-0.5 size-4.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold">Ce qui reste humain : </strong>
                      <span className="text-muted">{p.human}</span>
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-6 text-center" data-reveal>
          <p className="max-w-[760px] text-lg">
            On ne vous propose pas de tout automatiser d&apos;un coup. On commence par un seul pôle, on pose un socle
            qui connaît vos données, puis on ajoute des modules quand le premier rapporte.
          </p>
          <a href="#rdv" className="btn" data-cta="map">
            Trouver mon premier pôle
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
