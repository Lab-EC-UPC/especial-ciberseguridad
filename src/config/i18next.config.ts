import i18n from "i18next";
// @ts-ignore
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const storedLanguage = localStorage.getItem("language") || "es";

i18n.use(Backend).use(initReactI18next).init({
    lng: storedLanguage,
    fallbackLng: "es",
    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
