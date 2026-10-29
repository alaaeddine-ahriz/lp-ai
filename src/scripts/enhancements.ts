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
