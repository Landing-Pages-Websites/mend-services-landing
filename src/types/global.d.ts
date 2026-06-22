// Global type augmentations

interface MegaTag {
  trackEvent?: (event: string, payload?: Record<string, unknown>) => void;
}

interface Window {
  dataLayer: Record<string, unknown>[];
  MegaTag?: MegaTag;
}
