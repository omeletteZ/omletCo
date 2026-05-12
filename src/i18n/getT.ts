import i18next, { initPromise } from "./index";
import { DEFAULT_NS } from "./settings";

export async function getT(
  ns?: string | string[],
  lang?: string | null,
  keyPrefix?: string
) {
  await initPromise; // ← вот это главное, чего не хватало

  const language = lang ?? i18next.resolvedLanguage!;

  if (language && i18next.resolvedLanguage !== language) {
    await i18next.changeLanguage(language);
  }

  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }

  return {
    t: i18next.getFixedT(language, ns ?? DEFAULT_NS, keyPrefix),
    i18n: i18next,
  };
}