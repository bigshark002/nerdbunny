import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './en.json';

const resources = {
  en: {
    translation: english,
  },
};

i18next
.use(initReactI18next)
.init({
  resources,
  lng: 'en'
});

export default i18next;