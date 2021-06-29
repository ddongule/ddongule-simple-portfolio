import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langEn from './lang.en';
import langKo from './lang.ko';

const resources = {
  'en-US': {
    translation: langEn,
  },
  'ko-KR': {
    translation: langKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'ko-KR',
  fallbackLng: {
    'en-US': ['en-US'],
    default: ['ko-KR'],
  },
  debug: true,
  defaultNS: 'translation',
  ns: 'translation',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
