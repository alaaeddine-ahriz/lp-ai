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
        {/* ChatGPT : une conversation type à gauche, le constat à droite. */}
        <div
          className="grain grid items-center gap-8 overflow-hidden rounded-[24px] bg-clay p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14"
          data-reveal
        >
          <div aria-hidden="true" className="flex flex-col gap-3 rounded-2xl bg-white p-4 text-[14px] leading-snug shadow-[0_1px_0_rgb(28_24_20/0.04),0_12px_32px_-20px_rgb(28_24_20/0.35)] sm:p-5">
            <span className="text-xs text-soft">ChatGPT · onglet ouvert par Julie, mardi&nbsp;16&nbsp;h&nbsp;42</span>
            <p className="self-end rounded-2xl rounded-br-md bg-sand-soft px-4 py-2.5">
              Écris une relance polie pour le devis Martin, envoyé il y a 10 jours.
            </p>
            <p className="max-w-[92%] rounded-2xl rounded-bl-md border border-line px-4 py-2.5 text-muted">
              Bonjour Monsieur Martin, je me permets de revenir vers vous au sujet du devis que nous vous avons transmis
              le…
            </p>
            <p className="pt-1 text-xs text-soft">
              Puis Julie copie le texte, l&apos;envoie depuis Outlook, et note la relance dans le tableur. Pour chaque
              devis.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(1.375rem,2.4vw,1.75rem)] leading-snug font-medium tracking-[-0.02em] [font-family:var(--font-display)]">
              Vous avez sûrement déjà testé ChatGPT, et vos équipes aussi, chacun de son côté. C&apos;est pratique pour
              écrire un mail.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Mais ça ne change rien à la façon dont l&apos;entreprise tourne&nbsp;: le travail autour reste à la main.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
