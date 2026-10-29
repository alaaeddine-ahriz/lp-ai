import { site } from "@/config/site";

/* Pas de menu : la page n'a qu'une action possible, réserver le diagnostic. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/85 backdrop-blur-md backdrop-saturate-150">
      <div className="wrap flex h-16 items-center justify-between gap-6 sm:h-18">
        <a href="#" className="font-display text-[26px] font-extrabold tracking-tight text-accent">
          {site.name}
        </a>
        <a href="#rdv" className="btn btn-sm" data-cta="header">
          Réserver mon diagnostic
        </a>
      </div>
    </header>
  );
}
