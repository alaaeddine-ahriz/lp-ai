import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

type App = { name: string; logo?: string; icon?: typeof FileText };

const cases: { title: string; text: string; from: App[]; to: App[] }[] = [
  {
    title: "Devis et factures sans ressaisie",
    text: "Les infos d'un mail ou d'un PDF arrivent seules dans votre outil de facturation. Vous vérifiez, vous validez.",
    from: [{ name: "Gmail", logo: "gmail" }, { name: "PDF", icon: FileText }],
    to: [{ name: "Sage", logo: "sage" }],
  },
  {
    title: "Demandes clients triées et préparées",
    text: "Chaque mail entrant est classé, une réponse est rédigée, les relances partent au bon moment.",
    from: [{ name: "Outlook", logo: "outlook" }],
    to: [{ name: "HubSpot", logo: "hubspot" }, { name: "Outlook", logo: "outlook" }],
  },
  {
    title: "Un assistant qui connaît l'entreprise",
    text: "Vos équipes posent leurs questions, l'assistant répond à partir de vos propres documents, procédures et tarifs.",
    from: [
      { name: "Google Drive", logo: "google-drive" },
      { name: "Notion", logo: "notion" },
      { name: "SharePoint", logo: "sharepoint" },
    ],
    to: [{ name: "Microsoft Teams", logo: "microsoft-teams" }],
  },
];

function Tiles({ apps }: { apps: App[] }) {
  return (
    <div className="flex flex-col gap-2">
      {apps.map(({ name, logo, icon: Icon }) => (
        <span
          key={name}
          className="grid size-11 place-items-center rounded-xl bg-white shadow-[0_6px_16px_-8px_rgb(43_37_35/0.4)] ring-1 ring-black/[0.03]"
        >
          {Icon ? <Icon className="size-5 text-accent" strokeWidth={1.75} /> : <Logo name={name} logo={logo} size={22} />}
        </span>
      ))}
    </div>
  );
}

function Wire() {
  return <span className="uc-wire h-0.5 min-w-6 flex-1" />;
}

export function UseCases() {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 sm:gap-14">
        <h2 className="h2" data-reveal>
          Ce qu&apos;on installe le plus souvent
        </h2>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className="group flex flex-col gap-4 rounded-[22px] border border-line p-3 pb-7 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgb(43_37_35/0.35)]"
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              <div
                aria-hidden="true"
                className="mb-2 flex h-[180px] items-center justify-center gap-0 rounded-[16px] bg-pink-soft bg-[radial-gradient(circle,rgb(217_54_62/0.12)_1px,transparent_1px)] bg-size-[16px_16px] px-6"
              >
                <Tiles apps={c.from} />
                <Wire />
                <span className="relative grid size-13 shrink-0 place-items-center rounded-full bg-accent text-white shadow-[0_0_0_6px_rgb(217_54_62/0.12)] transition-transform duration-500 group-hover:rotate-12">
                  <Sparkles className="size-6" strokeWidth={1.75} />
                </span>
                <Wire />
                <Tiles apps={c.to} />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-4">
                <h3 className="text-[22px] leading-tight font-bold">{c.title}</h3>
                <p className="flex-1 text-muted">{c.text}</p>
                <a
                  href="#rdv"
                  data-cta={`use_case_${i + 1}`}
                  className="mt-2 inline-flex items-center gap-1.5 self-start font-semibold text-ink underline decoration-accent/40 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Réserver mon diagnostic
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
