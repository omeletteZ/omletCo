import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { FALLBACK_LANG, I18N_BASE_CONFIG } from "./settings";

const i18nInstance = i18next.createInstance();

export const initPromise = i18nInstance
  .use(resourcesToBackend(
    (language: string, namespace: string) =>
      import(`./locales/${language}/${namespace}.json`)
  ))
  .init({
    ...I18N_BASE_CONFIG,
    lng: FALLBACK_LANG,
    contextSeparator: ".",
    returnObjects: true,
  });

export default i18nInstance;