import { tools } from "@/content/tools";

function Logos({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-14 pr-14 sm:gap-16 sm:pr-16 ${hidden ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-10"}`}
    >
      {tools.map((t) => (
        <li key={t.name} className="shrink-0">
          <img
            src={`/logos/${t.logo}.svg`}
            alt={hidden ? "" : t.name}
            title={t.name}
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="size-9 object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function ToolsMarquee() {
  return (
    <section aria-label="Outils que nous connectons" className="flex flex-col gap-8 pt-14 text-center sm:pt-16">
      <p className="px-6 text-sm text-muted">On se branche sur les outils que vous utilisez déjà</p>
      <div className="group overflow-hidden mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] motion-reduce:mask-none">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:px-6">
          <Logos />
          <Logos hidden />
        </div>
      </div>
      <p className="px-6 text-sm text-muted">Et sur vos logiciels métier, dès qu&apos;ils ont une API ou un export.</p>
    </section>
  );
}
