import { useCallback } from "react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";

export const useTranslations = () => {
  const { lang } = useLang();

  const t = useCallback(
    (path) => {
      const keys = path.split(".");
      let value = translations[lang] ?? translations.pl;

      for (const key of keys) {
        value = value?.[key];
      }

      return value ?? path;
    },
    [lang]
  );

  return t;
};