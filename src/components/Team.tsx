import type { Photo } from "@/lib/photos";

/* Écoles des ingénieurs qui font l'implémentation (logos dans /public/logos/schools). */
const schools = [
  { name: "ESSEC Business School", file: "essec", w: 172, h: 60 },
  { name: "Institut Polytechnique de Paris", file: "ip-paris", w: 160, h: 60 },
  { name: "Groupe INSA", file: "insa", w: 296, h: 40 },
];
const H = 160; // hauteur des fichiers PNG ; `h` = hauteur affichée, réglée pour un poids visuel équivalent

/* Trois écoles seulement : on répète la liste pour que le bandeau soit plein sur grand écran. */
function SchoolLogos({ hidden }: { hidden?: boolean }) {
  const list = [...schools, ...schools, ...schools];
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24 ${hidden ? "motion-reduce:hidden" : ""}`}
    >
      {list.map((s, i) => (
        <li key={i} className={`shrink-0 ${i >= schools.length ? "motion-reduce:hidden" : ""}`} aria-hidden={i >= schools.length || undefined}>
          <img
            src={`/logos/schools/${s.file}.png`}
            alt={hidden || i >= schools.length ? "" : s.name}
            width={Math.round((s.w * s.h) / H)}
            height={s.h}
            style={{ height: s.h }}
            loading="lazy"
            decoding="async"
            className="w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}

function Schools() {
  return (
    <div className="flex w-full flex-col gap-6 pt-4">
      <p className="text-sm text-muted">Les ingénieurs qui construisent vos outils sont passés par</p>
      <div className="group w-full overflow-hidden mask-[linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee [animation-duration:40s] group-hover:[animation-play-state:paused] motion-reduce:mx-auto motion-reduce:animate-none">
          <SchoolLogos />
          <SchoolLogos hidden />
        </div>
      </div>
    </div>
  );
}

/** Photo facultative : src/assets/photos/team.jpg (l'équipe, format paysage ou carré). */
export function Team({ photo }: { photo?: Photo }) {
  const text = (
    <>
      <h2 className="h2">
        Des ingénieurs qui vous conseillent, <span className="tone">puis qui construisent.</span>
      </h2>
      <p className="max-w-[640px] text-lg leading-relaxed text-muted">
        Avant Socle, on a mis en production des infrastructures et des chaînes d&apos;automatisation pour de grands
        groupes. Notre conseil vient de là : on ne vous recommande que ce qu&apos;on sait construire, faire tourner et
        maintenir chez vous.
      </p>
    </>
  );

  return (
    <section className="px-5 py-14 sm:px-6 sm:py-20">
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
          <div className="lg:col-span-2">
            <Schools />
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-[1180px] flex-col gap-12" data-reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end lg:gap-16">{text}</div>
          <Schools />
        </div>
      )}
    </section>
  );
}
