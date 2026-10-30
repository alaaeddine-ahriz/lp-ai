import { site } from "@/config/site";

/*
 * Pas de menu : la page n'a qu'une action possible, réserver le diagnostic.
 * Sombre au-dessus du hero, clair ensuite (`data-theme` est mis à jour par src/scripts/enhancements.ts).
 */
export function Header() {
  return (
    <header
      data-header
      data-theme="dark"
      className="group/header sticky top-0 z-40 border-b border-line/80 bg-paper/90 text-ink backdrop-blur-md transition-colors duration-300 data-[theme=dark]:border-white/10 data-[theme=dark]:bg-dark/90 data-[theme=dark]:text-white"
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#" className="text-[24px] font-semibold tracking-[-0.04em]">
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <a
          href="#rdv"
          className="btn btn-sm group-data-[theme=dark]/header:border-white group-data-[theme=dark]/header:bg-white group-data-[theme=dark]/header:text-ink"
          data-cta="header"
        >
          Réserver un diagnostic
        </a>
      </div>
    </header>
  );
}
