export function Team() {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center" data-reveal>
        <span className="pill bg-pink!">Qui est derrière</span>
        <h2 className="text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.08] font-bold">
          Des ingénieurs qui construisent, pas des formateurs qui conseillent.
        </h2>
        <p className="max-w-[680px] text-lg text-muted">
          Une équipe d&apos;ingénieurs issus des meilleures écoles, qui a mis en production des infrastructures et des
          chaînes d&apos;automatisation pour de grands groupes. On applique la même rigueur aux PME : des systèmes qui
          tournent, mesurés, maintenus.
        </p>
      </div>
    </section>
  );
}
