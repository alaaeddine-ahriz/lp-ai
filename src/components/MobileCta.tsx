/**
 * Bouton fixé en bas d'écran sur mobile. Masqué par défaut ;
 * `src/scripts/enhancements.ts` pose `data-shown` après le hero et le retire à l'arrivée sur #rdv.
 */
export function MobileCta() {
  return (
    <div
      data-mobile-cta
      inert
      className="fixed inset-x-0 bottom-0 z-40 translate-y-full border-t border-line bg-paper/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 data-shown:translate-y-0 md:hidden"
    >
      <a href="#rdv" className="btn w-full" data-cta="mobile_sticky">
        Réserver un diagnostic gratuit
      </a>
    </div>
  );
}
