import type { Photo } from "@/lib/photos";

/** Photo facultative : src/assets/photos/team.jpg (l'équipe, format paysage ou carré). */
export function Team({ photo }: { photo?: Photo }) {
  const text = (
    <>
      <span className="pill bg-pink!">Qui est derrière</span>
      <h2 className="text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.08] font-bold">
        Des ingénieurs qui construisent, pas des formateurs qui conseillent.
      </h2>
      <p className="max-w-[680px] text-lg text-muted">
        Une équipe d&apos;ingénieurs issus des meilleures écoles, qui a mis en production des infrastructures et des
        chaînes d&apos;automatisation pour de grands groupes. On applique la même rigueur aux PME : des systèmes qui
        tournent, mesurés, maintenus.
      </p>
    </>
  );

  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      {photo ? (
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
          <img
            src={photo.src}
            srcSet={photo.srcSet}
            sizes="(min-width: 1024px) 560px, 100vw"
            alt="L'équipe"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[24px] object-cover"
          />
          <div className="flex flex-col items-start gap-5">{text}</div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center" data-reveal>
          {text}
        </div>
      )}
    </section>
  );
}
