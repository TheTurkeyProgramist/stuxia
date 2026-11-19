import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
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

// Кожна мова (і українська теж) — окремий чанк, вантажиться лише вибрана.
// Запасної мови немає: усі мови мають повний набір ключів (перевіряє localesComplete.test.js)
const lazyLocalesBackend = {
  type: 'backend',
  read(lng, _ns, callback) {
    import(`./locales/${lng}.json`)
      .then((mod) => callback(null, mod.default))
      .catch((err) => callback(err, null));
  },
};

// Вибрана мова зберігається в localforage (через prefsStore), а не в localStorage
export const LANG_CHOSEN_KEY = 'i18nLangChosen';

/** Мова, яку людина вибрала сама (у вікні мов). */
export const saveChosenLanguage = (lng) => {
  setPref('i18nextLng', lng);
  setPref(LANG_CHOSEN_KEY, '1');
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'prefs',
  lookup: () => {
    const saved = getPref('i18nextLng');
    if (!saved) return undefined;
    // Раніше «uk» записувалось кожному відвідувачу автоматично — таке не вважаємо вибором
    if (saved === 'uk' && getPref(LANG_CHOSEN_KEY) !== '1') return undefined;
    return saved;
  },
});

// Перший вхід: перша мова браузера, яку підтримує сайт; якщо жодної — англійська
languageDetector.addDetector({
  name: 'browser',
  lookup: () => {
    if (typeof navigator === 'undefined') return undefined;
    const list = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const tag of list) {
      const lower = String(tag || '').toLowerCase();
      // Російська з Білорусі (ru-BY) — білоруська
      if (lower === 'ru-by') return 'be';
      // Російська (ru) і російська з України (ru-UA) — українська
      if (lower === 'ru' || lower === 'ru-ua') return 'uk';
      const code = lower.split('-')[0];
      if (supportedLanguages.includes(code)) return code;
    }
    return 'en';
  },
});

/** Виконується, коли файл вибраної мови завантажено — до цього застосунок не малюємо (main.jsx). */
export const i18nReady = i18n
  .use(lazyLocalesBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: false,
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    // Спершу мова, яку людина вибрала сама; інакше — мова браузера.
    // Автовизначену мову не запам'ятовуємо: зміниться мова браузера — зміниться й сайт.
    detection: {
      order: ['prefs', 'browser'],
      caches: [],
    },
  });

export default i18n;