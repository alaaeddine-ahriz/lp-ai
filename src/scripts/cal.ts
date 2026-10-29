import { track } from "@/lib/analytics";

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns: Record<string, (...args: unknown[]) => void>;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

const NS = "diagnostic";

/** Snippet officiel Cal.com : crée la file d'attente `window.Cal` et charge embed.js. */
function loadCal() {
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal; const ar = arguments;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
      if (ar[0] === L) {
        const api: any = function () { p(api, arguments); };
        const namespace = ar[1]; api.q = api.q || [];
        if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
        else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

/** Affiche le calendrier Cal.com dans `el` et remonte `booking_completed` à la réservation. */
export function mountCal(el: HTMLElement, calLink: string) {
  loadCal();
  const Cal = window.Cal!;
  Cal("init", NS, { origin: "https://app.cal.com" });
  const api = Cal.ns[NS];
  api("inline", { elementOrSelector: el, calLink, config: { layout: "month_view" } });
  api("ui", {
    cssVarsPerTheme: { light: { "cal-brand": "#D9363E" }, dark: { "cal-brand": "#D9363E" } },
    theme: "light",
    hideEventTypeDetails: false,
    layout: "month_view",
  });
  api("on", { action: "bookingSuccessfulV2", callback: () => track("booking_completed") });
}
