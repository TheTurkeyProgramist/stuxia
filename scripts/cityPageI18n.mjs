// Сторінки міст іншими мовами: /en/konotop/, /de/konotop/ … (українська — /pohoda/<slug>/,
// її будує cityPageContent.mjs). Тексти — з локалей (seo.cityPage.*), ті самі бере застосунок
// (getCitySeoLocalized), тож після JS заголовок не змінюється. Місяці, числа й дати — через Intl
// мовою сторінки; клімат і сонце рахуються з тих самих даних, що й для української сторінки.

import fs from "node:fs";
import process from "node:process";
import path from "node:path";
import { createRequire } from "node:module";
import {
  CITY_PAGE_LANGS,
  getCitySlug,
  getCityNameForLang,
  getCityPagePath,
  getCitySeoLocalized,
} from "../src/utils/citiesDatabase.js";
import { SITE_URL, escapeHtml, nearestCities } from "./cityPageContent.mjs";

const SunCalc = createRequire(import.meta.url)("suncalc");

export const RTL_LANGS = new Set(["ar", "fa"]);
// Мови, для яких Intl у Node може не мати даних, — місяці й дати англійською краще, ніж нічого
const INTL_LOCALE = { zh: "zh-CN", pt: "pt-BR", en: "en-GB" };
export const OG_LOCALE = {
  uk: "uk_UA", en: "en_US", be: "be_BY", de: "de_DE", fr: "fr_FR", es: "es_ES", it: "it_IT", pl: "pl_PL",
  ro: "ro_RO", nl: "nl_NL", pt: "pt_BR", el: "el_GR", cs: "cs_CZ", hu: "hu_HU", sv: "sv_SE", fi: "fi_FI",
  bg: "bg_BG", lt: "lt_LT", zh: "zh_CN", ar: "ar_AR", ja: "ja_JP", tr: "tr_TR", ko: "ko_KR", fa: "fa_IR",
  so: "so_SO", qu: "qu_PE",
};

/** Переклади seo.cityPage для мови: t(key, vars) з підстановкою {{змінних}}. */
export const loadSeoStrings = (lang, root = process.cwd()) => {
  const file = path.join(root, "src", "i18n", "locales", `${lang}.json`);
  const dict = JSON.parse(fs.readFileSync(file, "utf8")).seo?.cityPage || {};
  return (key, vars = {}) =>
    String(dict[key] ?? key).replace(/\{\{(\w+)\}\}/g, (_, v) => (vars[v] === undefined ? "" : String(vars[v])));
};

const intlLocale = (lang) => INTL_LOCALE[lang] || lang;

const makeFormat = (lang) => {
  const loc = intlLocale(lang);
  const num = new Intl.NumberFormat(loc, { maximumFractionDigits: 1, minimumFractionDigits: 0 });
  const signed = new Intl.NumberFormat(loc, { maximumFractionDigits: 1, signDisplay: "exceptZero" });
  const month = new Intl.DateTimeFormat(loc, { month: "long", timeZone: "UTC" });
  const date = new Intl.DateTimeFormat(loc, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  const time = new Intl.DateTimeFormat(loc, { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Kyiv" });
  return {
    temp: (t) => `${signed.format(Number(t.toFixed(1)))}°`,
    num: (n) => num.format(n),
    month: (i) => month.format(new Date(Date.UTC(2025, i, 15))),
    date: (iso) => date.format(new Date(`${iso}T12:00:00Z`)),
    time: (d) => time.format(d),
  };
};

const STYLE = {
  section:
    "max-width:900px;margin:24px auto;padding:16px 18px;box-sizing:border-box;border-radius:12px;background:rgba(0,0,0,.62);color:#fff;font-size:14px;line-height:1.55",
  h1: "margin:0 0 8px;font-size:22px;line-height:1.3",
  h2: "margin:18px 0 6px;font-size:17px;line-height:1.3",
  p: "margin:0 0 6px",
  muted: "margin:10px 0 0;opacity:.7;font-size:12px",
  link: "color:#7dd3fc",
  table: "width:100%;border-collapse:collapse;font-size:13px;font-variant-numeric:tabular-nums",
  th: "text-align:start;padding:4px 6px;border-bottom:1px solid rgba(255,255,255,.3);font-weight:600",
  td: "padding:3px 6px;border-bottom:1px solid rgba(255,255,255,.12)",
  list: "margin:0;padding-inline-start:18px",
  scroll: "overflow-x:auto",
  langs: "margin:12px 0 0;font-size:12px;opacity:.85;line-height:1.9",
};
const link = (href, text, extra = "") => `<a href="${href}" style="${STYLE.link}"${extra}>${escapeHtml(text)}</a>`;

// Самоназви мов для блоку «Іншими мовами» (внутрішні посилання між версіями сторінки)
const LANG_NAMES = {
  uk: "Українська", en: "English", be: "Беларуская", de: "Deutsch", fr: "Français", es: "Español", it: "Italiano",
  pl: "Polski", ro: "Română", nl: "Nederlands", pt: "Português", el: "Ελληνικά", cs: "Čeština", hu: "Magyar",
  sv: "Svenska", fi: "Suomi", bg: "Български", lt: "Lietuvių", zh: "中文", ar: "العربية", ja: "日本語", tr: "Türkçe",
  ko: "한국어", fa: "فارسی", so: "Soomaali", qu: "Runa Simi",
};

/** <link rel="alternate" hreflang> на всі мовні версії сторінки міста (+ x-default — англійська). */
export const buildHreflangLinks = (city) =>
  [
    `<link rel="alternate" hreflang="uk" href="${SITE_URL}${getCityPagePath(city, "uk")}" />`,
    ...CITY_PAGE_LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE_URL}${getCityPagePath(city, l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${getCityPagePath(city, "en")}" />`,
  ].join("\n    ");

/** Блок посилань на інші мовні версії (видимий, для людей і краулера). */
export const buildLanguageLinks = (city, lang, label) =>
  `<p style="${STYLE.langs}">${escapeHtml(label)}: ${["uk", ...CITY_PAGE_LANGS]
    .filter((l) => l !== lang)
    .map((l) => link(getCityPagePath(city, l), LANG_NAMES[l], ` hreflang="${l}" lang="${l}"`))
    .join(" · ")}</p>`;

/** Сторінка міста мовою lang: title, description, видимий блок #city-seo і JSON-LD. */
export const buildLocalizedCityPage = (city, lang, all, climateBySlug, t) => {
  const f = makeFormat(lang);
  const seo = getCitySeoLocalized(city, lang, t);
  const name = getCityNameForLang(city, lang);
  const climate = climateBySlug[getCitySlug(city)];
  const parts = [
    `<h1 style="${STYLE.h1}">${escapeHtml(seo.heading)}</h1>`,
    `<p style="${STYLE.p}">${escapeHtml(seo.description)}</p>`,
    `<p style="${STYLE.p};opacity:.85">${escapeHtml(seo.text)}</p>`,
  ];

  if (climate) {
    const m = climate.months;
    const idx = (fn) => m.reduce((best, x, i) => (fn(x) > fn(m[best]) ? i : best), 0);
    const warm = idx((x) => x.tmax);
    const cold = idx((x) => -x.tmax);
    const yearPrecip = m.reduce((s, x) => s + x.precip, 0);
    parts.push(`<h2 style="${STYLE.h2}">${escapeHtml(t("climateTitle"))}</h2>`);
    parts.push(
      `<p style="${STYLE.p}">${escapeHtml(
        t("climateSummary", {
          period: climate.period,
          warmMonth: f.month(warm),
          warmDay: f.temp(m[warm].tmax),
          warmNight: f.temp(m[warm].tmin),
          coldMonth: f.month(cold),
          coldDay: f.temp(m[cold].tmax),
          coldNight: f.temp(m[cold].tmin),
          precip: t("mm", { v: f.num(yearPrecip) }),
          hot: f.temp(climate.hottest.t),
          hotDate: f.date(climate.hottest.date),
          cold: f.temp(climate.coldest.t),
          coldDate: f.date(climate.coldest.date),
        }),
      )}</p>`,
    );
    const th = (k) => `<th style="${STYLE.th}">${escapeHtml(t(k))}</th>`;
    const td = (v) => `<td style="${STYLE.td}">${escapeHtml(v)}</td>`;
    const rows = m
      .map((x, i) => {
        const month = f.month(i);
        return `<tr>${td(month.charAt(0).toLocaleUpperCase(intlLocale(lang)) + month.slice(1))}${td(f.temp(x.tmax))}${td(f.temp(x.tmin))}${td(t("mm", { v: f.num(x.precip) }))}${td(f.num(Math.round(x.wetDays)))}${td(f.num(Math.round(x.snowDays)))}</tr>`;
      })
      .join("");
    parts.push(
      `<details><summary style="cursor:pointer">${escapeHtml(t("tableSummary", { period: climate.period }))}</summary><div style="${STYLE.scroll}"><table style="${STYLE.table}"><thead><tr>${th("colMonth")}${th("colDay")}${th("colNight")}${th("colPrecip")}${th("colWetDays")}${th("colSnowDays")}</tr></thead><tbody>${rows}</tbody></table></div></details>`,
    );

    const year = new Date().getUTCFullYear();
    const sun = (month) => SunCalc.getTimes(new Date(Date.UTC(year, month, 21, 10)), city.lat, city.lon);
    const length = (s) => {
      const minutes = Math.round((s.sunset - s.sunrise) / 60000);
      return t("duration", { h: Math.floor(minutes / 60), m: minutes % 60 });
    };
    const winter = sun(11);
    const summer = sun(5);
    parts.push(`<h2 style="${STYLE.h2}">${escapeHtml(t("daylightTitle"))}</h2>`);
    parts.push(
      `<p style="${STYLE.p}">${escapeHtml(
        t("daylightText", {
          city: name,
          wr: f.time(winter.sunrise),
          ws: f.time(winter.sunset),
          wl: length(winter),
          sr: f.time(summer.sunrise),
          ss: f.time(summer.sunset),
          sl: length(summer),
        }),
      )}</p>`,
    );

    const near = nearestCities(city, all);
    if (near.length) {
      parts.push(`<h2 style="${STYLE.h2}">${escapeHtml(t("nearbyTitle"))}</h2>`);
      parts.push(
        `<ul style="${STYLE.list}">${near
          .map(
            ({ city: c, km }) =>
              `<li>${link(getCityPagePath(c, lang), getCitySeoLocalized(c, lang, t).heading)} — ${escapeHtml(t("km", { v: f.num(Math.round(km)) }))}</li>`,
          )
          .join("")}</ul>`,
      );
    }
    parts.push(`<p style="${STYLE.muted}">${escapeHtml(t("sourceNote", { period: climate.period, elev: f.num(climate.elevation) }))}</p>`);
  }

  parts.push(buildLanguageLinks(city, lang, t("otherLanguages")));

  const url = `${SITE_URL}${getCityPagePath(city, lang)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name,
      alternateName: city.name,
      description: seo.heading,
      inLanguage: lang,
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lon },
      address: { "@type": "PostalAddress", addressCountry: "UA", addressLocality: name },
    },
  ];

  return {
    url,
    title: seo.title,
    shortTitle: seo.shortTitle,
    description: seo.description,
    section: `<section id="city-seo" lang="${lang}" style="${STYLE.section}">
      ${parts.join("\n      ")}
    </section>`,
    jsonLd,
  };
};
