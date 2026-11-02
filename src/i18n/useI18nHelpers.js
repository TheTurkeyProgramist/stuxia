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
      { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'be', name: 'Belarusian', nativeName: 'Беларуская' },
      { code: 'de', name: 'German', nativeName: 'Deutsch' },
      { code: 'fr', name: 'French', nativeName: 'Français' },
      { code: 'es', name: 'Spanish', nativeName: 'Español' },
      { code: 'it', name: 'Italian', nativeName: 'Italiano' },
      { code: 'pl', name: 'Polish', nativeName: 'Polski' },
      { code: 'ro', name: 'Romanian', nativeName: 'Română' },
      { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
      { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
      { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
      { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
      { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
      { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
      { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
      { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
      { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
    ],
  },
  {
    regionKey: 'asiaMiddleEast',
    languages: [
      { code: 'zh', name: 'Chinese', nativeName: '中文' },
      { code: 'ar', name: 'Arabic', nativeName: 'العربية', rtl: true },
      { code: 'ja', name: 'Japanese', nativeName: '日本語' },
      { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
      { code: 'ko', name: 'Korean', nativeName: '한국어' },
      { code: 'fa', name: 'Persian', nativeName: 'فارسی', rtl: true },
    ],
  },
  {
    regionKey: 'africa',
    languages: [
      { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
    ],
  },
  {
    regionKey: 'latinAmerica',
    languages: [
      { code: 'qu', name: 'Quechua', nativeName: 'Runasimi' },
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
