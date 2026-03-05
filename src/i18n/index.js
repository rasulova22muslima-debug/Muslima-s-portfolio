import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../public/locales/en.json";
import translationRU from "../../public/locales/ru.json";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", 
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });

export default i18next;