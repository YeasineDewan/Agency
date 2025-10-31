export function logEvent(eventName, payload = {}) {
  try {
    if (!window.dataLayer) window.dataLayer = [];
    window.dataLayer.push({ event: eventName, ...payload, ts: Date.now() });
  } catch {
    // no-op
  }
}


