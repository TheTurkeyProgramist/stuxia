// Вміст статичних сторінок міст /pohoda/<slug>/ (підключає cityPagesPlugin у vite.config.mjs).
//
// Кожна сторінка має бути НЕ шаблонною — інакше Google вважає їх дублікатами й не показує.
// Тому для міст із кліматом (src/data/cityClimate.json, scripts/fetch-city-climate.mjs) додаємо
// те, що є лише в цього міста: клімат по місяцях за 10 років, рекорди, світловий день,
// найближчі міста з відстанню і посилання на сторінку області. Усе рахується під час збірки —
// Open-Meteo на сторінку не витрачається (погоду «зараз» показує сам застосунок).

import { createRequire } from "node:module";
import { getCitySlug, getCitySeo, getCityLocative } from "../src/utils/citiesDatabase.js";

// suncalc — UMD-модуль без ESM-експорту: у Node (конфіг Vite) беремо його через require
const SunCalc = createRequire(import.meta.url)("suncalc");

export const SITE_URL = "https://stuxia.com";

// Області зі своєю сторінкою-хабом. Поки що — Сумщина (почали з Конотопа).
export const REGIONS = [
  {
    slug: "sumska-oblast",
    name: "Сумська область",
    inRegion: "в Сумській області",
    match: (city) => /Сумська/.test(city.fullName || ""),
  },
];

// Власний абзац для міста — найсильніший сигнал унікальності. Лише перевірені факти.
const CITY_INTRO = {
  konotop:
    "Конотоп — місто на заході Сумщини на річці Єзуч, один із найбільших залізничних вузлів північного сходу України. " +
    "Нижче — не лише прогноз, а й те, якою погода в Конотопі буває насправді: клімат за останні 10 років, рекорди спеки й морозу, світловий день.",
};

const MONTHS = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];
const MONTHS_IN = ["січні", "лютому", "березні", "квітні", "травні", "червні", "липні", "серпні", "вересні", "жовтні", "листопаді", "грудні"];

export const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** +25,7° · −6,2° · 0° — з українською комою і справжнім мінусом. */
export const fmtTemp = (t, digits = 1) => {
  const v = Number(t.toFixed(digits));
  if (v === 0) return "0°";
  const abs = Math.abs(v).toFixed(digits).replace(/\.0$/, "").replace(".", ",");
  return `${v > 0 ? "+" : "−"}${abs}°`;
};

const fmtNum = (n) => String(n).replace(".", ",");

const fmtDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"][m - 1]} ${y}`;
};

/** Відстань між містами по поверхні Землі, км. */
export const distanceKm = (a, b) => {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};

const kyivTime = (date) =>
  new Intl.DateTimeFormat("uk-UA", { timeZone: "Europe/Kyiv", hour: "2-digit", minute: "2-digit" }).format(date);

const dayLength = (times) => {
  const minutes = Math.round((times.sunset - times.sunrise) / 60000);
  return `${Math.floor(minutes / 60)} год ${minutes % 60} хв`;
};

/** Схід/захід сонця в найкоротший і найдовший день (рахуємо локально, без API). */
export const sunFacts = (city, year = new Date().getUTCFullYear()) => {
  const winter = SunCalc.getTimes(new Date(Date.UTC(year, 11, 21, 10)), city.lat, city.lon);
  const summer = SunCalc.getTimes(new Date(Date.UTC(year, 5, 21, 10)), city.lat, city.lon);
  return {
    winter: { sunrise: kyivTime(winter.sunrise), sunset: kyivTime(winter.sunset), length: dayLength(winter) },
    summer: { sunrise: kyivTime(summer.sunrise), sunset: kyivTime(summer.sunset), length: dayLength(summer) },
  };
};

/** Короткий підсумок клімату одним абзацом — різний для кожного міста, бо з його даних. */
export const climateSummary = (city, climate) => {
  const m = climate.months;
  const idx = (fn) => m.reduce((best, x, i) => (fn(x) > fn(m[best]) ? i : best), 0);
  const warm = idx((x) => x.tmax);
  const cold = idx((x) => -x.tmax);
  const wet = idx((x) => x.precip);
  const snow = idx((x) => x.snowDays);
  const yearPrecip = m.reduce((s, x) => s + x.precip, 0);
  const snowTotal = Math.round(m.reduce((s, x) => s + x.snowDays, 0));
  return (
    `За ${climate.period} роки найтепліший місяць ${getCityLocative(city)} — ${MONTHS[warm]}: удень у середньому ${fmtTemp(m[warm].tmax)}, уночі ${fmtTemp(m[warm].tmin)}. ` +
    `Найхолодніший — ${MONTHS[cold]}: ${fmtTemp(m[cold].tmax)} удень і ${fmtTemp(m[cold].tmin)} уночі. ` +
    `За рік випадає близько ${yearPrecip} мм опадів, найбільше — у ${MONTHS_IN[wet]} (${m[wet].precip} мм). ` +
    `Снігових днів — у середньому ${snowTotal} на рік, найчастіше у ${MONTHS_IN[snow]}. ` +
    `Рекорди десятиліття: ${fmtTemp(climate.hottest.t)} ${fmtDate(climate.hottest.date)} і ${fmtTemp(climate.coldest.t)} ${fmtDate(climate.coldest.date)}.`
  );
};

const STYLE = {
  section:
    "max-width:900px;margin:24px auto;padding:16px 18px;box-sizing:border-box;border-radius:12px;background:rgba(0,0,0,.62);color:#fff;font-size:14px;line-height:1.55",
  h1: "margin:0 0 8px;font-size:22px;line-height:1.3",
  h2: "margin:18px 0 6px;font-size:17px;line-height:1.3",
  p: "margin:0 0 6px",
  muted: "margin:10px 0 0;opacity:.7;font-size:12px",
  crumbs: "margin:0 0 8px;font-size:12px;opacity:.8",
  link: "color:#7dd3fc",
  table: "width:100%;border-collapse:collapse;font-size:13px;font-variant-numeric:tabular-nums",
  th: "text-align:left;padding:4px 6px;border-bottom:1px solid rgba(255,255,255,.3);font-weight:600",
  td: "padding:3px 6px;border-bottom:1px solid rgba(255,255,255,.12)",
  list: "margin:0;padding-left:18px",
  scroll: "overflow-x:auto",
};

const link = (href, text) => `<a href="${href}" style="${STYLE.link}">${escapeHtml(text)}</a>`;

const climateTable = (climate) => `<div style="${STYLE.scroll}"><table style="${STYLE.table}">
        <thead><tr><th style="${STYLE.th}">Місяць</th><th style="${STYLE.th}">Удень</th><th style="${STYLE.th}">Уночі</th><th style="${STYLE.th}">Опади</th><th style="${STYLE.th}">Днів з опадами</th><th style="${STYLE.th}">Днів зі снігом</th></tr></thead>
        <tbody>${climate.months
          .map(
            (m, i) =>
              `<tr><td style="${STYLE.td}">${MONTHS[i][0].toUpperCase()}${MONTHS[i].slice(1)}</td><td style="${STYLE.td}">${fmtTemp(m.tmax)}</td><td style="${STYLE.td}">${fmtTemp(m.tmin)}</td><td style="${STYLE.td}">${m.precip} мм</td><td style="${STYLE.td}">${fmtNum(Math.round(m.wetDays))}</td><td style="${STYLE.td}">${fmtNum(Math.round(m.snowDays))}</td></tr>`,
          )
          .join("")}</tbody>
      </table></div>`;

/** Найближчі міста тієї ж області (або всієї бази, якщо області немає). */
export const nearestCities = (city, all, count = 5) => {
  const region = REGIONS.find((r) => r.match(city));
  return all
    .filter((c) => c !== city && getCitySlug(c) && (!region || region.match(c)))
    .map((c) => ({ city: c, km: distanceKm(city, c) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, count);
};

/**
 * HTML блоку #city-seo для сторінки міста. Без клімату — короткий варіант (як раніше),
 * з кліматом — повний (клімат, сонце, сусіди, хлібні крихти).
 */
export const buildCitySection = (city, all, climateBySlug = {}) => {
  const seo = getCitySeo(city);
  const slug = getCitySlug(city);
  const climate = climateBySlug[slug];
  const region = REGIONS.find((r) => r.match(city));
  const parts = [];
  if (region) {
    parts.push(
      `<p style="${STYLE.crumbs}">${link("/", "Стихія")} › ${link(`/pohoda/${region.slug}/`, `Погода ${region.inRegion}`)} › ${escapeHtml(city.name)}</p>`,
    );
  }
  parts.push(`<h1 style="${STYLE.h1}">${escapeHtml(seo.heading)}</h1>`);
  parts.push(`<p style="${STYLE.p}">${escapeHtml(seo.description)}</p>`);
  if (CITY_INTRO[slug]) parts.push(`<p style="${STYLE.p}">${escapeHtml(CITY_INTRO[slug])}</p>`);
  parts.push(`<p style="${STYLE.p};opacity:.85">${escapeHtml(seo.text)}</p>`);

  if (climate) {
    const sun = sunFacts(city);
    const near = nearestCities(city, all);
    parts.push(`<h2 style="${STYLE.h2}">Клімат по місяцях</h2>`);
    parts.push(`<p style="${STYLE.p}">${escapeHtml(climateSummary(city, climate))}</p>`);
    parts.push(`<details><summary style="cursor:pointer">Таблиця: температура й опади по місяцях (${climate.period})</summary>${climateTable(climate)}</details>`);
    parts.push(`<h2 style="${STYLE.h2}">Світловий день</h2>`);
    parts.push(
      `<p style="${STYLE.p}">${escapeHtml(
        `21 грудня сонце ${getCityLocative(city)} сходить о ${sun.winter.sunrise} і сідає о ${sun.winter.sunset} — найкоротший день триває ${sun.winter.length}. ` +
          `21 червня — схід о ${sun.summer.sunrise}, захід о ${sun.summer.sunset}, день ${sun.summer.length}.`,
      )}</p>`,
    );
    if (near.length) {
      parts.push(`<h2 style="${STYLE.h2}">Погода поруч</h2>`);
      parts.push(
        `<ul style="${STYLE.list}">${near
          .map(({ city: c, km }) => `<li>${link(`/pohoda/${getCitySlug(c)}/`, getCitySeo(c).heading)} — ${Math.round(km)} км</li>`)
          .join("")}${region ? `<li>${link(`/pohoda/${region.slug}/`, `Усі міста: погода ${region.inRegion}`)}</li>` : ""}</ul>`,
      );
    }
    parts.push(
      `<p style="${STYLE.muted}">Клімат — середні за ${climate.period} роки за даними архіву Open-Meteo (реаналіз ERA5), висота ${climate.elevation} м над рівнем моря. Схід і захід сонця — за київським часом.</p>`,
    );
  }

  return `<section id="city-seo" style="${STYLE.section}">
      ${parts.join("\n      ")}
    </section>`;
};

/** Розмітка Schema.org: місце + хлібні крихти (для міст з областю). */
export const buildCityJsonLd = (city, url) => {
  const region = REGIONS.find((r) => r.match(city));
  const items = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: city.name,
      description: getCitySeo(city).heading,
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lon },
      address: {
        "@type": "PostalAddress",
        addressCountry: "UA",
        addressLocality: city.name,
        ...(region ? { addressRegion: region.name } : {}),
      },
    },
  ];
  if (region) {
    items.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Стихія", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: `Погода ${region.inRegion}`, item: `${SITE_URL}/pohoda/${region.slug}/` },
        { "@type": "ListItem", position: 3, name: city.name, item: url },
      ],
    });
  }
  return items;
};

/** Сторінка області: усі міста з посиланнями і коротким кліматом (січень / липень). */
export const buildRegionPage = (region, all, climateBySlug = {}) => {
  const cities = all.filter((c) => region.match(c) && getCitySlug(c));
  const title = `Погода ${region.inRegion} — прогноз для ${cities.length} міст | Стихія`;
  const description =
    `Погода ${region.inRegion}: ${cities.map((c) => c.name).join(", ")}. ` +
    `Прогноз погодинно і на 16 днів, клімат кожного міста по місяцях.`;
  const rows = cities
    .map((c) => {
      const cl = climateBySlug[getCitySlug(c)];
      const climateCells = cl
        ? `<td style="${STYLE.td}">${fmtTemp(cl.months[0].tmax)} / ${fmtTemp(cl.months[0].tmin)}</td><td style="${STYLE.td}">${fmtTemp(cl.months[6].tmax)} / ${fmtTemp(cl.months[6].tmin)}</td>`
        : `<td style="${STYLE.td}">—</td><td style="${STYLE.td}">—</td>`;
      return `<tr><td style="${STYLE.td}">${link(`/pohoda/${getCitySlug(c)}/`, c.name)}</td>${climateCells}</tr>`;
    })
    .join("");
  const section = `<section id="city-seo" style="${STYLE.section}">
      <p style="${STYLE.crumbs}">${link("/", "Стихія")} › ${escapeHtml(region.name)}</p>
      <h1 style="${STYLE.h1}">${escapeHtml(`Погода ${region.inRegion}`)}</h1>
      <p style="${STYLE.p}">${escapeHtml(description)}</p>
      <p style="${STYLE.p}">Оберіть місто — Стихія відкриє його прогноз: температура зараз і як вона відчувається, опади, вітер і пориви, УФ-індекс, погодинно на тиждень і по днях на 16 днів.</p>
      <h2 style="${STYLE.h2}">Міста</h2>
      <div style="${STYLE.scroll}"><table style="${STYLE.table}">
        <thead><tr><th style="${STYLE.th}">Місто</th><th style="${STYLE.th}">Січень, удень / уночі</th><th style="${STYLE.th}">Липень, удень / уночі</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
      <p style="${STYLE.muted}">Клімат — середні за ${escapeHtml(Object.values(climateBySlug)[0]?.period || "останні 10")} роки (архів Open-Meteo, реаналіз ERA5).</p>
    </section>`;
  return { title, shortTitle: `Погода ${region.inRegion} | Стихія`, description, section, cities };
};

