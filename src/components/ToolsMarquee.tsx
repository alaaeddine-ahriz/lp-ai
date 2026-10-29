import { tools } from "@/content/tools";
import { Logo } from "./Logo";

function Chips({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 gap-3 pr-3 ${hidden ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center"}`}
    >
      {tools.map((t) => (
        <li
          key={t.name}
          className="flex h-12 items-center gap-2.5 rounded-full border border-line bg-white pr-4.5 pl-2 text-[15px] font-semibold whitespace-nowrap shadow-[0_1px_2px_rgb(28_25_23/0.04)]"
        >
          <span className="grid size-8 place-items-center rounded-full bg-pink-soft">
            <Logo name={t.name} logo={t.logo} size={18} />
          </span>
          {t.name}
        </li>
      ))}
    </ul>
  );
}

export function ToolsMarquee() {
  return (
    <section aria-label="Outils que nous connectons" className="flex flex-col gap-6 pt-14 text-center sm:pt-16">
      <p className="px-6 text-[15px] font-semibold text-muted">On connecte l&apos;IA aux outils que vous utilisez déjà</p>
      <div className="group overflow-hidden mask-[linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:mask-none">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:px-6">
          <Chips />
          <Chips hidden />
        </div>
      </div>
      <p className="px-6 text-sm text-muted">Et vos logiciels métier, s&apos;ils ont une API ou un export.</p>
    </section>
  );
}
