type EventParams = {
  event_category?: string;
  event_label?: string;
};

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
};
