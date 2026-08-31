import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLang, // load saved language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    }
  });

// Set text direction on load
document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";

export default i18n;
