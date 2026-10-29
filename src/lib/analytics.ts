type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

/** Envoie un événement à Plausible s'il est chargé. Sans analytics configuré, ne fait rien. */
export function track(event: "cta_click" | "booking_completed", props?: Props) {
  window.plausible?.(event, props ? { props } : undefined);
}
