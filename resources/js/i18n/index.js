
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { id, en } from './locales';

let path = (window.location.pathname).split("/")[1] == '' ? 'en' : ((window.location.pathname).split("/")[1] == 'id' ? 'id' : 'en');

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: true,

  

  resources: {
    id: {
      common: id.id
    },
    en: {
      common: en.en,
    },
  },

  fallbackLng: path,

  ns: ['common'],

  defaultNS: 'common',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },

  lng: path,
};



i18n
  .init(options)
  // .changeLanguage(path, (err, t) => {
  //   if (err) return console.log('something went wrong loading', err);
  // });

export default i18n;