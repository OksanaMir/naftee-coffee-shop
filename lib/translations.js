import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../mocks/en.json';
import cz from '../mocks/cs_CZ.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      cs_CZ: {
        translation: {
          ...cz,
        },
      },
      en: {
        translation: {
          ...en,
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
