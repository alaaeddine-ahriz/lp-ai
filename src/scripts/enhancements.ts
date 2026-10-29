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

/* Onglets de la carte des pôles (clic, flèches gauche/droite, Début/Fin). */
document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const select = (tab: HTMLButtonElement, focus = false) => {
    for (const t of tabs) {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")!)!.hidden = !on;
    }
    if (focus) tab.focus();
    tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      const next =
        e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length]
        : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length]
        : e.key === "Home" ? tabs[0]
        : e.key === "End" ? tabs[tabs.length - 1]
        : null;
      if (!next) return;
      e.preventDefault();
      select(next, true);
    });
  });
});
