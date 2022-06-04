import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import HttpBackend from "i18next-http-backend";

import { resources } from './resources'


i18n
  .use(HttpBackend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ["en", "es", "de"],
    ns: ['public'],
    load: "languageOnly",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //     loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}.json`,
    // },
    resources: resources
  });

export default i18n;