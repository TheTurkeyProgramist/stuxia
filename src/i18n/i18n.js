import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import uk from './locales/uk.json';
import { getPref, setPref } from '../utils/prefsStore.js';

export const RTL_LANGUAGES = new Set(['ar', 'fa']);

export const SPECIAL_FONT_LANGUAGES = {
  ar: 'Noto Sans Arabic',
  fa: 'Noto Sans Arabic',
  zh: 'Noto Sans SC',
};

export const TALL_SCRIPT_LANGUAGES = new Set([]);

export const NO_SPACE_LANGUAGES = new Set(['ja', 'zh']);

export const INTL_LOCALE_MAP = {
  zh: 'zh-CN',
  pt: 'pt-BR',
  en: 'en-US',
};

const supportedLanguages = [
  'uk', 'en', 'be', 'de', 'fr', 'es', 'it', 'pl', 'ro', 'nl', 'pt', 'el',
  'cs', 'hu', 'sv', 'fi', 'bg', 'lt', 'zh', 'ar', 'ja', 'tr', 'ko', 'fa',
  'so', 'qu',
];

// Українська вшита в бандл (fallback), решта мов вантажиться окремим чанком лише при виборі
const lazyLocalesBackend = {
  type: 'backend',
  read(lng, _ns, callback) {
    import(`./locales/${lng}.json`)
      .then((mod) => callback(null, mod.default))
      .catch((err) => callback(err, null));
  },
};

// Вибрана мова зберігається в localforage (через prefsStore), а не в localStorage
const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'prefs',
  lookup: () => getPref('i18nextLng') || undefined,
  cacheUserLanguage: (lng) => setPref('i18nextLng', lng),
});

i18n
  .use(lazyLocalesBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: { uk: { translation: uk } },
    partialBundledLanguages: true,
    fallbackLng: 'uk',
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    detection: {
      order: ['prefs', 'navigator', 'htmlTag'],
      caches: ['prefs'],
    },
  });

export default i18n;