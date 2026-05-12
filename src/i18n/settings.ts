export const FALLBACK_LANG = "ru";
export const LANGUAGES = ["ru", "en"] as const;
export const DEFAULT_NS = "common";
export const COOKIE_NAME = "i18next";
export const HEADER_NAME = "x-i18n-lang";

export const I18N_BASE_CONFIG = {
  supportedLngs: LANGUAGES,
  fallbackLng: FALLBACK_LANG,
  fallbackNS: DEFAULT_NS,
  defaultNS: DEFAULT_NS,
} as const;