import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    lng: savedLang,
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: { translation: await (await fetch('/locales/en.json')).json() },
      fr: { translation: await (await fetch('/locales/fr.json')).json() },
      es: { translation: await (await fetch('/locales/es.json')).json() },
    },
  });

export default i18n;
