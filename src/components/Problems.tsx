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

export function Problems() {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 sm:gap-14">
        <h2 className="h2" data-reveal>
          Le problème n&apos;est pas l&apos;IA. <span className="tone">C&apos;est de savoir par où commencer.</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {problems.map((p, i) => (
            <article key={p.title} className="group flex flex-col gap-4" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <div aria-hidden="true" className="grain relative mb-2 flex h-[200px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[20px] bg-sand-soft">
                <Notification {...p.notifs[0]} className="-rotate-[1.5deg] group-hover:-translate-y-1 group-hover:rotate-0" />
                <Notification {...p.notifs[1]} className="translate-x-3 rotate-[1deg] group-hover:translate-x-1 group-hover:rotate-0" />
              </div>
              <h3 className="text-2xl leading-tight">{p.title}</h3>
              <p className="text-muted">{p.text}</p>
            </article>
          ))}
        </div>
        <p className="max-w-[680px] text-xl leading-relaxed" data-reveal>
          Vous avez sûrement déjà testé ChatGPT, et vos équipes aussi, chacun de son côté. C&apos;est pratique pour
          écrire un mail. Mais ça ne change rien à la façon dont l&apos;entreprise tourne.
        </p>
      </div>
    </section>
  );
}
