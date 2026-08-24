type TrackingValue = string | number | boolean | null;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, TrackingValue>>;
  }
}

export function trackConversion(
  event: string,
  parameters: Record<string, TrackingValue> = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...parameters });
}
