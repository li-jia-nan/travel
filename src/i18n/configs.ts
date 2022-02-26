import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en.json';
import translation_zh from './zh.json';

const resources = {
  en: { translation: translation_en },
  zh: { translation: translation_zh },
};

const config: InitOptions = {
  resources,
  lng: 'zh',
  interpolation: { escapeValue: false },
};

i18n.use(initReactI18next).init(config);

export default i18n;
