import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from 'i18n/en'
import th from 'i18n/th'


// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: en,
  th: th,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng:['en','th'],
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;