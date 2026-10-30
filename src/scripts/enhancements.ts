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

/* En-tête sombre quand il passe au-dessus d'un bloc sombre plein écran (hero, carte des pôles figée), clair sinon. */
const header = document.querySelector<HTMLElement>("[data-header]");
const darkBlocks = document.querySelectorAll<HTMLElement>("[data-hero], .map-card");
if (header && darkBlocks.length) {
  const under = new Set<Element>();
  const watch = () => {
    // Zone observée : la bande de l'en-tête uniquement.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.isIntersecting ? under.add(e.target) : under.delete(e.target);
        header.setAttribute("data-theme", under.size ? "dark" : "light");
      },
      { rootMargin: `0px 0px -${window.innerHeight - header.offsetHeight}px 0px` },
    );
    darkBlocks.forEach((el) => io.observe(el));
    return io;
  };
  let io = watch();
  window.addEventListener("resize", () => {
    io.disconnect();
    under.clear();
    io = watch();
  });
}

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

/* La carte des pôles (ordinateur).
   Mode défilement : la carte s'élargit en approchant du haut de l'écran, se fige, et chaque palier de défilement
   (45 % de la hauteur d'écran, comme dans global.css) affiche le pôle suivant. Les onglets font défiler jusqu'au pôle.
   Sans ce mode (mouvement réduit), les onglets fonctionnent comme des onglets classiques. */
document.querySelectorAll<HTMLElement>("[data-map]").forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const photos = [...root.querySelectorAll<HTMLElement>("[data-photo]")];
  const count = root.querySelector<HTMLElement>("[data-map-count]");
  const stage = root.querySelector<HTMLElement>(".map-stage")!;
  const scrollMode = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
  let current = 0;

  const show = (i: number) => {
    if (i === current && tabs[i].getAttribute("aria-selected") === "true") return;
    current = i;
    tabs.forEach((t, k) => {
      const on = k === i;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")!)!.hidden = !on;
    });
    photos.forEach((p) => (p.hidden = p.dataset.photo !== tabs[i].getAttribute("aria-controls")));
    if (count) count.textContent = String(i + 1).padStart(2, "0");
  };

  const step = () => window.innerHeight * 0.45;
  const stickyTop = () => parseFloat(getComputedStyle(stage).top) || 0;

  // Défile jusqu'au palier du pôle i (au milieu du palier, pour ne pas tomber sur une frontière).
  const goTo = (i: number) => {
    if (!scrollMode.matches) return show(i);
    const top = root.getBoundingClientRect().top + window.scrollY - stickyTop();
    window.scrollTo({ top: top + (i + 0.5) * step(), behavior: "smooth" });
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    if (!scrollMode.matches) return;
    const rect = root.getBoundingClientRect();
    const past = stickyTop() - rect.top; // distance parcourue depuis que la carte est figée
    const approach = window.innerHeight * 0.5;
    root.style.setProperty("--e", String(Math.min(1, Math.max(0, (past + approach) / approach))));
    root.style.setProperty("--p", String(Math.min(1, Math.max(0, past / (step() * tabs.length)))));
    show(Math.min(tabs.length - 1, Math.max(0, Math.floor(past / step()))));
  };
  const onScroll = () => {
    if (!ticking) requestAnimationFrame(update);
    ticking = true;
  };

  const setMode = () => {
    root.toggleAttribute("data-scroll", scrollMode.matches);
    if (!scrollMode.matches) {
      root.style.setProperty("--e", "0");
      root.style.setProperty("--p", "0");
    }
    update();
  };
  scrollMode.addEventListener("change", setMode);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  setMode();

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => goTo(i));
    tab.addEventListener("keydown", (e) => {
      const next =
        e.key === "ArrowDown" ? (i + 1) % tabs.length
        : e.key === "ArrowUp" ? (i - 1 + tabs.length) % tabs.length
        : e.key === "Home" ? 0
        : e.key === "End" ? tabs.length - 1
        : null;
      if (next === null) return;
      e.preventDefault();
      goTo(next);
      tabs[next].focus({ preventScroll: true });
    });
  });
});
