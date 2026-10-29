import { track } from "@/lib/analytics";

/* Apparition au scroll : `data-in` est posé une fois l'élément à l'écran. */
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.setAttribute("data-in", "");
      io.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -12% 0px" },
);
document.querySelectorAll("[data-reveal], [data-flow]").forEach((el) => io.observe(el));

/* Suivi des clics sur les CTA, avec leur emplacement. */
document.addEventListener("click", (e) => {
  const cta = (e.target as Element | null)?.closest<HTMLElement>("[data-cta]");
  if (cta) track("cta_click", { location: cta.dataset.cta ?? "unknown" });
});

/* Bouton fixe sur mobile : visible après le hero, masqué quand la section #rdv est à l'écran. */
const sticky = document.querySelector<HTMLElement>("[data-mobile-cta]");
const rdv = document.getElementById("rdv");
if (sticky) {
  let pastHero = false;
  let atBooking = false;
  const update = () => {
    const shown = pastHero && !atBooking;
    sticky.toggleAttribute("data-shown", shown);
    sticky.inert = !shown;
  };
  const onScroll = () => {
    const next = window.scrollY > window.innerHeight * 0.9;
    if (next !== pastHero) {
      pastHero = next;
      update();
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (rdv) {
    new IntersectionObserver(([entry]) => {
      atBooking = entry.isIntersecting;
      update();
    }).observe(rdv);
  }
}

/* Calendrier Cal.com : chargé seulement quand la section #rdv approche de l'écran. */
const calEl = document.querySelector<HTMLElement>("[data-cal-link]");
if (calEl) {
  const calObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      calObserver.disconnect();
      import("./cal").then(({ mountCal }) => mountCal(calEl, calEl.dataset.calLink!));
    },
    { rootMargin: "800px 0px" },
  );
  calObserver.observe(calEl);
}

/* La carte des pôles.
   Ordinateur : l'organigramme fonctionne en onglets (clic, flèches, Début/Fin).
   Mobile : les pastilles font défiler le carrousel, et le carrousel allume la bonne pastille. */
document.querySelectorAll<HTMLElement>("[data-map]").forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[role="tabpanel"]')];
  const chips = [...root.querySelectorAll<HTMLButtonElement>("[data-target]")];
  const chipRow = root.querySelector<HTMLElement>("[data-map-chips]");
  const track = root.querySelector<HTMLElement>("[data-map-track]");

  const activate = (id: string) => {
    for (const p of panels) p.toggleAttribute("data-active", p.id === id);
    for (const t of tabs) {
      const on = t.getAttribute("aria-controls") === id;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    }
    for (const c of chips) {
      const on = c.dataset.target === id;
      if (on) c.setAttribute("aria-current", "true");
      else c.removeAttribute("aria-current");
      if (on && chipRow) {
        const li = c.parentElement!;
        chipRow.scrollTo({ left: li.offsetLeft - (chipRow.clientWidth - li.clientWidth) / 2, behavior: "smooth" });
      }
    }
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activate(tab.getAttribute("aria-controls")!));
    tab.addEventListener("keydown", (e) => {
      const next =
        e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length]
        : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length]
        : e.key === "Home" ? tabs[0]
        : e.key === "End" ? tabs[tabs.length - 1]
        : null;
      if (!next) return;
      e.preventDefault();
      activate(next.getAttribute("aria-controls")!);
      next.focus();
    });
  });

  if (!track) return;
  let lockedUntil = 0; // pendant un défilement lancé par une pastille, on ignore les cartes traversées
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      const panel = document.getElementById(chip.dataset.target!)!;
      lockedUntil = Date.now() + 700;
      track.scrollTo({ left: panel.offsetLeft - (track.clientWidth - panel.clientWidth) / 2, behavior: "smooth" });
      activate(panel.id);
    }),
  );
  // La carte la plus visible dans le carrousel devient la carte active.
  const seen = new IntersectionObserver(
    (entries) => {
      if (Date.now() < lockedUntil || !window.matchMedia("(max-width: 1023px)").matches) return;
      const best = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (best) activate(best.target.id);
    },
    { root: track, threshold: [0.6] },
  );
  panels.forEach((p) => seen.observe(p));
});
