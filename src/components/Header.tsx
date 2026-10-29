import { site } from "@/config/site";

const links = [
  { href: "#offre", label: "L'offre" },
  { href: "#methode", label: "La méthode" },
  { href: "#faq", label: "Questions" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/85 backdrop-blur-md backdrop-saturate-150">
      <div className="wrap flex h-16 items-center justify-between gap-6 sm:h-18">
        <div className="flex items-center gap-10">
          <a href="#" className="font-display text-[26px] font-extrabold tracking-tight text-accent">
            {site.name}
          </a>
          <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-sm font-medium md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <a href="#rdv" className="btn btn-sm" data-cta="header">
          Réserver mon diagnostic
        </a>
      </div>
    </header>
  );
}
