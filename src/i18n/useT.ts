"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18next, { initPromise } from "./client";

export function useT(ns?: string) {
  const lang = useParams().lang;

  if (typeof lang !== "string") {
    throw new Error("useT is only available inside [lang]");
  }

  const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);

  useEffect(() => {
    initPromise.then(() => {
      if (i18next.resolvedLanguage !== lang) {
        i18next.changeLanguage(lang);
      }
    });
  }, []); 

  useEffect(() => {
    if (activeLng === i18next.resolvedLanguage) return;
    setActiveLng(i18next.resolvedLanguage);
  }, [activeLng]);

  useEffect(() => {
    if (!lang || i18next.resolvedLanguage === lang) return;
    i18next.changeLanguage(lang);
  }, [lang]);

  return useTranslation(ns);
}