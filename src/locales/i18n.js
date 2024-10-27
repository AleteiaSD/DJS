import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './en.json';
import translationSr from './sr.json';

const resources = {
  en: {
    translation: translationEn
  },
  sr: {
    translation: translationSr
  }
};

// Učitaj sačuvani jezik iz localStorage ili postavi na 'sr' kao podrazumevani
const savedLanguage = localStorage.getItem('language') || 'sr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Učitaj sačuvani jezik
    fallbackLng: 'sr', //default language if there is no translation
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
