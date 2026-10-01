/**
 * i18n Utility Hooks & Helpers
 * Handles RTL, number formatting, font loading, and language metadata.
 */
import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  RTL_LANGUAGES,
  SPECIAL_FONT_LANGUAGES,
  TALL_SCRIPT_LANGUAGES,
  NO_SPACE_LANGUAGES,
  INTL_LOCALE_MAP,
} from './i18n';

// ── Language metadata ──────────────────────────────────────────────────────────

/** All supported languages grouped by region */
export const LANGUAGE_GROUPS = [
  {
    regionKey: 'europeNorthAmerica',
    languages: [
      { code: 'uk', name: 'Українська', nativeName: 'Українська', speakers: '~35 млн' },
      { code: 'en', name: 'English', nativeName: 'English', speakers: '~1.5B' },
      { code: 'de', name: 'Deutsch', nativeName: 'Deutsch', speakers: '~135M' },
      { code: 'fr', name: 'Français', nativeName: 'Français', speakers: '~300M' },
      { code: 'es', name: 'Español', nativeName: 'Español', speakers: '~560M' },
      { code: 'it', name: 'Italiano', nativeName: 'Italiano', speakers: '~65M' },
      { code: 'pl', name: 'Polski', nativeName: 'Polski', speakers: '~45M' },
      { code: 'ro', name: 'Română', nativeName: 'Română', speakers: '~26M' },
      { code: 'nl', name: 'Nederlands', nativeName: 'Nederlands', speakers: '~25M' },
      { code: 'pt', name: 'Português', nativeName: 'Português', speakers: '~260M' },
      { code: 'el', name: 'Ελληνικά', nativeName: 'Ελληνικά', speakers: '~13M' },
      { code: 'cs', name: 'Čeština', nativeName: 'Čeština', speakers: '~11M' },
      { code: 'hu', name: 'Magyar', nativeName: 'Magyar', speakers: '~13M' },
      { code: 'ru', name: 'Русский', nativeName: 'Русский', speakers: '~250M' },
    ],
  },
  {
    regionKey: 'asiaMiddleEast',
    languages: [
      { code: 'zh', name: '中文', nativeName: '中文 (普通话)', speakers: '~1.1B' },
      { code: 'hi', name: 'हिन्दी', nativeName: 'हिन्दी', speakers: '~600M' },
      { code: 'ar', name: 'العربية', nativeName: 'العربية', speakers: '~400M', rtl: true },
      { code: 'bn', name: 'বাংলা', nativeName: 'বাংলা', speakers: '~250M' },
      { code: 'ur', name: 'اردو', nativeName: 'اردو', speakers: '~230M', rtl: true },
      { code: 'id', name: 'Indonesia', nativeName: 'Bahasa Indonesia', speakers: '~200M' },
      { code: 'ja', name: '日本語', nativeName: '日本語', speakers: '~125M' },
      { code: 'mr', name: 'मराठी', nativeName: 'मराठी', speakers: '~99M' },
      { code: 'te', name: 'తెలుగు', nativeName: 'తెలుగు', speakers: '~95M' },
      { code: 'tr', name: 'Türkçe', nativeName: 'Türkçe', speakers: '~90M' },
      { code: 'ta', name: 'தமிழ்', nativeName: 'தமிழ்', speakers: '~86M' },
      { code: 'vi', name: 'Tiếng Việt', nativeName: 'Tiếng Việt', speakers: '~85M' },
      { code: 'tl', name: 'Filipino', nativeName: 'Filipino / Tagalog', speakers: '~83M' },
      { code: 'ko', name: '한국어', nativeName: '한국어', speakers: '~81M' },
      { code: 'fa', name: 'فارسی', nativeName: 'فارسی', speakers: '~78M', rtl: true },
      { code: 'th', name: 'ภาษาไทย', nativeName: 'ภาษาไทย', speakers: '~60M' },
      { code: 'gu', name: 'ગુજરાતી', nativeName: 'ગુજરાતી', speakers: '~60M' },
      { code: 'kn', name: 'ಕನ್ನಡ', nativeName: 'ಕನ್ನಡ', speakers: '~55M' },
      { code: 'ml', name: 'മലയാളം', nativeName: 'മലയാളം', speakers: '~38M' },
      { code: 'my', name: 'မြန်မာ', nativeName: 'မြန်မာဘာသာ', speakers: '~43M' },
      { code: 'uz', name: "O'zbek", nativeName: "O'zbek tili", speakers: '~35M' },
      { code: 'kk', name: 'Қазақша', nativeName: 'Қазақ тілі', speakers: '~18M' },
      { code: 'az', name: 'Azərbaycan', nativeName: 'Azərbaycan dili', speakers: '~30M' },
      { code: 'km', name: 'ខ្មែរ', nativeName: 'ភាសាខ្មែរ', speakers: '~16M' },
      { code: 'si', name: 'සිංහල', nativeName: 'සිංහල', speakers: '~17M' },
    ],
  },
  {
    regionKey: 'africa',
    languages: [
      { code: 'sw', name: 'Kiswahili', nativeName: 'Kiswahili', speakers: '~200M' },
      { code: 'ha', name: 'Hausa', nativeName: 'Hausa', speakers: '~100M' },
      { code: 'yo', name: 'Yorùbá', nativeName: 'Yorùbá', speakers: '~45M' },
      { code: 'ig', name: 'Igbo', nativeName: 'Igbo', speakers: '~45M' },
      { code: 'am', name: 'አማርኛ', nativeName: 'አማርኛ', speakers: '~35M' },
      { code: 'zu', name: 'IsiZulu', nativeName: 'IsiZulu', speakers: '~27M' },
      { code: 'so', name: 'Soomaali', nativeName: 'Soomaali', speakers: '~20M' },
      { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy', speakers: '~28M' },
      { code: 'sn', name: 'Shona', nativeName: 'ChiShona', speakers: '~14M' },
      { code: 'xh', name: 'IsiXhosa', nativeName: 'IsiXhosa', speakers: '~10M' },
    ],
  },
  {
    regionKey: 'latinAmerica',
    languages: [
      { code: 'qu', name: 'Quechua', nativeName: 'Runasimi', speakers: '~10M' },
    ],
  },
];

/** Flat list of all languages */
export const ALL_LANGUAGES = LANGUAGE_GROUPS.flatMap(g => g.languages);

// ── RTL & Direction management ─────────────────────────────────────────────────

/**
 * Returns true if the given language code is RTL
 * @param {string} lang
 */
export function isRTL(lang) {
  return RTL_LANGUAGES.has(lang);
}

/**
 * Apply RTL/LTR direction to <html> and load required fonts
 * @param {string} lang
 */
export function applyLanguageToDOM(lang) {
  const html = document.documentElement;

  // ── Direction (RTL support) ──
  if (RTL_LANGUAGES.has(lang)) {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', lang);
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', INTL_LOCALE_MAP[lang] || lang);
  }

  // ── Script-specific body classes ──
  html.classList.remove('lang-tall-script', 'lang-no-space', 'lang-rtl');
  if (TALL_SCRIPT_LANGUAGES.has(lang)) html.classList.add('lang-tall-script');
  if (NO_SPACE_LANGUAGES.has(lang)) html.classList.add('lang-no-space');
  if (RTL_LANGUAGES.has(lang)) html.classList.add('lang-rtl');

  // ── Load Google Noto font if needed ──
  const fontName = SPECIAL_FONT_LANGUAGES[lang];
  if (fontName) {
    const linkId = `noto-font-${lang}`;
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}&display=swap`;
      document.head.appendChild(link);
    }
    // Apply the font to body
    html.style.setProperty('--i18n-font', `'${fontName}', system-ui, sans-serif`);
  } else {
    html.style.removeProperty('--i18n-font');
  }
}

// ── Number & Date formatting ────────────────────────────────────────────────────

/**
 * Format a temperature value according to locale conventions.
 * Uses Intl.NumberFormat to handle locale-specific decimal separators.
 * @param {number} value
 * @param {string} lang
 * @param {string} unit - 'C' | 'F'
 */
export function formatTemperature(value, lang, unit = 'C') {
  const locale = INTL_LOCALE_MAP[lang] || lang;
  try {
    const formatted = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 1,
      minimumFractionDigits: 0,
    }).format(value);
    return `${formatted}°${unit}`;
  } catch {
    return `${value}°${unit}`;
  }
}

/**
 * Format wind speed according to locale conventions.
 * @param {number} value
 * @param {string} lang
 */
export function formatWindSpeed(value, lang) {
  const locale = INTL_LOCALE_MAP[lang] || lang;
  try {
    return new Intl.NumberFormat(locale, {
      maximumFractionDigits: 1,
    }).format(value);
  } catch {
    return String(value);
  }
}

/**
 * Format a general number for display in the current locale.
 * @param {number} value
 * @param {string} lang
 */
export function formatNumber(value, lang) {
  const locale = INTL_LOCALE_MAP[lang] || lang;
  try {
    return new Intl.NumberFormat(locale).format(value);
  } catch {
    return String(value);
  }
}

// ── React Hooks ─────────────────────────────────────────────────────────────────

/**
 * Hook: Apply DOM-level language changes whenever i18n language changes.
 * Should be used once in the root App component.
 */
export function useLanguageEffect() {
  const { i18n } = useTranslation();

  useEffect(() => {
    applyLanguageToDOM(i18n.language);
  }, [i18n.language]);
}

/**
 * Hook: Get a number formatter bound to the current locale.
 * Returns a formatNumber function.
 */
export function useNumberFormat() {
  const { i18n } = useTranslation();
  return useCallback(
    (value, opts = {}) => {
      const locale = INTL_LOCALE_MAP[i18n.language] || i18n.language;
      try {
        return new Intl.NumberFormat(locale, opts).format(value);
      } catch {
        return String(value);
      }
    },
    [i18n.language]
  );
}

/**
 * Hook: Get a temperature formatter bound to the current locale.
 */
export function useTemperatureFormat() {
  const { i18n } = useTranslation();
  return useCallback(
    (value, unit = 'C') => formatTemperature(value, i18n.language, unit),
    [i18n.language]
  );
}

/**
 * Hook: Returns whether current language is RTL
 */
export function useIsRTL() {
  const { i18n } = useTranslation();
  return RTL_LANGUAGES.has(i18n.language);
}
