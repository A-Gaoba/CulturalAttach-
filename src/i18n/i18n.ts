import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import translationAR from "./locales/ar/translation.json";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: translationAR },
      en: { translation: translationEN },
      ru: { translation: translationRU },
    },
    fallbackLng: "ar",
    debug: true,
    detection: {
      // Language detection options
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
