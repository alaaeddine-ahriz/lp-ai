import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Logo } from "./Logo";

type Notif = { logo: string; app: string; children: ReactNode; alert?: boolean };

const problems: { title: string; text: string; notifs: [Notif, Notif] }[] = [
  {
    title: "Les ressaisies",
    text: "Un devis arrive par mail. Quelqu'un le recopie dans la facturation, puis dans le tableur de suivi, puis dans le CRM. La même information trois fois, et trois occasions de se tromper.",
    notifs: [
      {
        logo: "gmail",
        app: "Gmail",
        children: (
          <>
            <strong className="block font-semibold text-ink">Nouveau devis reçu</strong>À saisir dans la facturation
          </>
        ),
      },
      { logo: "google-sheets", app: "Google Sheets", children: "Puis dans le tableau de suivi…" },
    ],
  },
  {
    title: "La boîte mail qui déborde",
    text: "Les demandes arrivent dans une boîte partagée. Personne ne sait qui doit répondre, la relance part avec trois jours de retard, et le client a signé ailleurs entre-temps.",
    notifs: [
      {
        logo: "outlook",
        app: "Outlook",
        children: (
          <>
            <strong className="font-semibold text-ink">Demande de devis</strong> · il y a 3 jours
          </>
        ),
      },
      { logo: "outlook", app: "Outlook", children: "Relance client · non envoyée", alert: true },
    ],
  },
  {
    title: "L'info introuvable",
    text: "La bonne version du document existe, quelque part sur le drive. Pour la retrouver, il faut demander à la seule personne qui sait, et attendre qu'elle soit libre.",
    notifs: [
      { logo: "google-drive", app: "Google Drive", children: "Procedure_v3_FINAL_bis.docx" },
      { logo: "microsoft-teams", app: "Teams", children: "« Tu sais où est la dernière version ? »" },
    ],
  },
];

function Notification({ logo, app, children, alert, className }: Notif & { className: string }) {
  return (
    <div
      className={`flex w-[84%] items-center gap-3 rounded-xl bg-white px-3.5 py-3 text-left text-[13px] leading-snug text-muted shadow-[0_8px_24px_-12px_rgb(43_37_35/0.35)] ring-1 ring-black/[0.03] transition-transform duration-500 ${className}`}
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-sand-soft">
        <Logo name={app} logo={logo} size={18} />
      </span>
      <span className="min-w-0 flex-1">{children}</span>
      {alert ? <span className="size-2 shrink-0 rounded-full bg-accent" /> : null}
    </div>
  );
}

const chatgptSteps = [
  "Retrouver les devis sans réponse dans le tableur",
  "Ouvrir ChatGPT et demander une relance",
  "Copier le texte dans Outlook, joindre le devis",
  "Envoyer",
  "Noter la relance dans le tableur",
];

const toolSteps = [
  "Chaque matin, l'outil repère les devis sans réponse depuis 7 jours",
  "La relance est déjà prête dans Outlook, devis joint, dans votre ton",
  "Julie relit et clique sur Envoyer",
];

export function Problems() {
  return (
    <section className="px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 sm:gap-14">
        <h2 className="h2" data-reveal>
          Le problème n&apos;est pas l&apos;IA. <span className="tone">C&apos;est de savoir par où commencer.</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {problems.map((p, i) => (
            <article key={p.title} className="group flex flex-col gap-4" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <div aria-hidden="true" className="grain relative mb-2 flex h-[200px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[20px] bg-sand">
                <Notification {...p.notifs[0]} className="-rotate-[1.5deg] group-hover:-translate-y-1 group-hover:rotate-0" />
                <Notification {...p.notifs[1]} className="translate-x-3 rotate-[1deg] group-hover:translate-x-1 group-hover:rotate-0" />
              </div>
              <h3 className="text-2xl leading-tight">{p.title}</h3>
              <p className="text-muted">{p.text}</p>
            </article>
          ))}
        </div>
        {/* ChatGPT : la même tâche, faite deux fois. À gauche à la main avec ChatGPT, à droite avec un outil construit. */}
        <div className="grain flex flex-col gap-8 overflow-hidden rounded-[24px] bg-clay p-6 sm:p-10" data-reveal>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
            <p className="text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-medium tracking-[-0.02em] [font-family:var(--font-display)]">
              «&nbsp;On utilise déjà ChatGPT.&nbsp;» C&apos;est un bon début. Mais ChatGPT écrit le mail. Il ne l&apos;envoie pas, et il
              ne sait pas qu&apos;il fallait l&apos;envoyer.
            </p>
            <p className="text-[17px] leading-relaxed text-muted">
              Exemple avec une tâche que toutes les PME connaissent&nbsp;: relancer un devis resté sans réponse.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-2xl bg-paper/80 p-6 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-xl">Avec ChatGPT</h3>
                <span className="text-sm text-muted">5 étapes, à la main</span>
              </div>
              <ol className="flex flex-col gap-3 text-[15px] text-muted">
                {chatgptSteps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="w-4 shrink-0 text-soft tabular-nums">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-auto text-[15px]">
                Pour chaque devis. Et la semaine où Julie est en congé, personne ne relance.
              </p>
            </div>

            <div className="grain-dark grain on-dark flex flex-col gap-5 rounded-2xl bg-dark p-6 text-white sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-xl">Avec un outil construit pour vous</h3>
                <span className="text-sm text-on-dark-soft">1 clic</span>
              </div>
              <ol className="flex flex-col gap-3 text-[15px] text-[#ebe3d9]">
                {toolSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-white" strokeWidth={2.5} aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-auto text-[15px] text-white">
                Le suivi se met à jour tout seul. Aucun devis ne passe entre les mailles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
