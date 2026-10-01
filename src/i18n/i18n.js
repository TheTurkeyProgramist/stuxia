import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const RTL_LANGUAGES = new Set(['ar', 'fa', 'ur']);

export const SPECIAL_FONT_LANGUAGES = {
  am: 'Noto Sans Ethiopic',
  ar: 'Noto Sans Arabic',
  bn: 'Noto Sans Bengali',
  fa: 'Noto Sans Arabic',
  gu: 'Noto Sans Gujarati',
  hi: 'Noto Sans Devanagari',
  km: 'Noto Sans Khmer',
  kn: 'Noto Sans Kannada',
  ml: 'Noto Sans Malayalam',
  mr: 'Noto Sans Devanagari',
  my: 'Noto Sans Myanmar',
  si: 'Noto Sans Sinhala',
  ta: 'Noto Sans Tamil',
  te: 'Noto Sans Telugu',
  th: 'Noto Sans Thai',
  ur: 'Noto Nastaliq Urdu',
  zh: 'Noto Sans SC',
};

export const TALL_SCRIPT_LANGUAGES = new Set([
  'am', 'bn', 'gu', 'hi', 'km', 'kn', 'ml', 'mr', 'my', 'si', 'ta', 'te', 'th',
]);

export const NO_SPACE_LANGUAGES = new Set(['ja', 'th', 'zh']);

export const INTL_LOCALE_MAP = {
  zh: 'zh-CN',
  pt: 'pt-BR',
  en: 'en-US',
};

const supportedLanguages = [
  'uk', 'en', 'de', 'fr', 'es', 'it', 'pl', 'ro', 'nl', 'pt', 'el', 'cs',
  'hu', 'ru', 'zh', 'hi', 'ar', 'bn', 'ur', 'id', 'ja', 'mr', 'te', 'tr',
  'ta', 'vi', 'tl', 'ko', 'fa', 'th', 'gu', 'kn', 'ml', 'my', 'uz', 'kk',
  'az', 'km', 'si', 'sw', 'ha', 'yo', 'ig', 'am', 'zu', 'so', 'mg', 'sn',
  'xh', 'qu',
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    supportedLngs: supportedLanguages,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;