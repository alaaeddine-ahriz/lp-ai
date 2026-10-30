import type { ReactNode } from "react";
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

/* Exemple chiffré : une PME qui envoie une dizaine de devis par semaine. Chaque étape faite à la main, et ce qu'elle coûte. */
const ledger = [
  ["Retrouver les devis sans réponse dans le tableur", "20 min par semaine, quand quelqu'un y pense"],
  ["Écrire la relance avec ChatGPT, la copier dans Outlook", "5 min par devis"],
  ["Relancer avec une semaine de retard", "Le client a eu le temps de signer ailleurs"],
  ["Oublier de relancer, la semaine où Julie est en congé", "Un devis perdu, sans que personne ne le sache"],
  ["Noter la relance dans le tableur", "Un suivi faux dès qu'on saute une ligne"],
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
        {/* ChatGPT : une tâche courante, découpée en étapes, avec ce que chaque étape coûte vraiment. */}
        <div className="grain flex flex-col gap-8 overflow-hidden rounded-[24px] bg-clay p-6 sm:p-10" data-reveal>
          <div className="flex flex-col gap-3">
            <p className="max-w-[820px] text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-medium tracking-[-0.02em] [font-family:var(--font-display)]">
              «&nbsp;On utilise déjà ChatGPT.&nbsp;» C&apos;est un bon début. Mais ChatGPT écrit le mail. Il ne
              l&apos;envoie pas, et il ne sait pas qu&apos;il fallait l&apos;envoyer.
            </p>
            <p className="text-[17px] text-muted">
              Exemple&nbsp;: relancer les devis restés sans réponse, pour une dizaine de devis par semaine.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-paper/85">
            <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 px-6 pt-5 pb-3 text-sm text-soft sm:grid">
              <span>À la main, avec ChatGPT</span>
              <span>Ce que ça vous coûte</span>
            </div>
            <ul>
              {ledger.map(([step, loss]) => (
                <li
                  key={step}
                  className="grid gap-1 border-t border-line px-6 py-4 first:border-t-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8 sm:first:border-t"
                >
                  <span className="text-[15px] text-muted">{step}</span>
                  <span className="text-[16px] font-medium">{loss}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-line bg-sand px-6 py-4 text-[16px]">
              <strong className="font-medium">Au total</strong>&nbsp;: plus d&apos;une heure par semaine de travail à la
              main, et des devis qui partent chez un concurrent. C&apos;est ce chiffre-là qu&apos;on calcule avec vous
              pendant l&apos;audit.
            </p>
          </div>

          <p className="grain grain-dark on-dark rounded-2xl bg-dark px-6 py-5 text-[16px] leading-relaxed text-[#ebe3d9]">
            <strong className="font-medium text-white">Avec un outil construit pour vous&nbsp;:</strong> chaque matin, les
            relances sont prêtes dans Outlook, devis joint. Julie relit, clique sur Envoyer, et le suivi se met à jour
            tout seul. Dix minutes par semaine, et plus aucun devis oublié.
          </p>
        </div>
      </div>
    </section>
  );
}
