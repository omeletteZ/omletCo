"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18N_BASE_CONFIG } from "./settings";

const i18nClient = i18next.createInstance();

export const initPromise = i18nClient
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend(
    (language: string, namespace: string) =>
      import(`./locales/${language}/${namespace}.json`)
  ))
  .init({
    ...I18N_BASE_CONFIG,
    lng: undefined,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: [],
  });

export default i18nClient;