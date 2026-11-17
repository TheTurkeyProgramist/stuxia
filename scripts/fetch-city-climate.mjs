// Клімат міст для сторінок /pohoda/<slug>/ — реальні дані за 10 років (архів Open-Meteo, ERA5).
//
// Запускати вручну, коли додаєш місто: `bun scripts/fetch-city-climate.mjs` (лише нові міста)
// або `bun scripts/fetch-city-climate.mjs --force` (усі заново). Результат — src/data/cityClimate.json,
// його комітимо: збірка сайту бере дані з файлу й до Open-Meteo не ходить.
//
// Вартість: Open-Meteo рахує «виклики» як max(1, змінні/10 × дні/14) на місце —
// 4 змінні × 3 653 дні ≈ 104 виклики на місто (див. X-RateLimit-Cost у виводі).
// Безкоштовно — 600 за хвилину, тож між містами чекаємо PAUSE_MS.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { UKRAINE_CITIES_40, getCitySlug } from "../src/utils/citiesDatabase.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(root, "src", "data", "cityClimate.json");
const START = "2016-01-01";
const END = "2025-12-31";
const PERIOD = "2016–2025";
const VARS = ["temperature_2m_max", "temperature_2m_min", "precipitation_sum", "snowfall_sum"];
const PAUSE_MS = 15000;
// Поки що — Сумщина (почали з Конотопа); інші області — розширити цей фільтр
const WANTED = (city) => /Сумська/.test(city.fullName);

const force = process.argv.includes("--force");
const existing = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : {};
const round1 = (v) => Math.round(v * 10) / 10;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const summarize = (daily) => {
  const months = Array.from({ length: 12 }, () => ({ tmax: [], tmin: [], precip: 0, wet: 0, snow: 0, years: new Set() }));
  let hottest = { t: -Infinity, date: "" };
  let coldest = { t: Infinity, date: "" };
  daily.time.forEach((date, i) => {
    const m = months[Number(date.slice(5, 7)) - 1];
    const tmax = daily.temperature_2m_max[i];
    const tmin = daily.temperature_2m_min[i];
    const pr = daily.precipitation_sum[i];
    const sn = daily.snowfall_sum[i];
    m.years.add(date.slice(0, 4));
    if (Number.isFinite(tmax)) {
      m.tmax.push(tmax);
      if (tmax > hottest.t) hottest = { t: tmax, date };
    }
    if (Number.isFinite(tmin)) {
      m.tmin.push(tmin);
      if (tmin < coldest.t) coldest = { t: tmin, date };
    }
    if (Number.isFinite(pr)) {
      m.precip += pr;
      if (pr >= 1) m.wet += 1;
    }
    if (Number.isFinite(sn) && sn >= 1) m.snow += 1;
  });
  const avg = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : null);
  return {
    months: months.map((m) => {
      const years = m.years.size || 1;
      return {
        tmax: round1(avg(m.tmax)), // середній денний максимум, °C
        tmin: round1(avg(m.tmin)), // середній нічний мінімум, °C
        precip: Math.round(m.precip / years), // опадів за місяць, мм
        wetDays: round1(m.wet / years), // днів з опадами ≥ 1 мм
        snowDays: round1(m.snow / years), // днів зі снігом ≥ 1 см
      };
    }),
    hottest: { t: round1(hottest.t), date: hottest.date },
    coldest: { t: round1(coldest.t), date: coldest.date },
  };
};

let totalCost = 0;
const result = { ...existing };
const cities = UKRAINE_CITIES_40.filter(WANTED);
for (const [n, city] of cities.entries()) {
  const slug = getCitySlug(city);
  if (!force && existing[slug]?.period === PERIOD) {
    console.log(`= ${city.name}: уже є`);
    continue;
  }
  const url =
    `https://archive-api.open-meteo.com/v1/archive?latitude=${city.lat}&longitude=${city.lon}` +
    `&start_date=${START}&end_date=${END}&daily=${VARS.join(",")}&timezone=Europe%2FKyiv`;
  const res = await fetch(url);
  const cost = Number(res.headers.get("x-ratelimit-cost")) || 0;
  totalCost += cost;
  if (!res.ok) {
    console.error(`✗ ${city.name}: HTTP ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  const data = await res.json();
  result[slug] = { period: PERIOD, elevation: Math.round(data.elevation), ...summarize(data.daily) };
  console.log(`✓ ${city.name}: вартість ${cost} викликів`);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(result, null, 1)}\n`);
  if (n < cities.length - 1) await sleep(PAUSE_MS);
}
console.log(`Готово: ${Object.keys(result).length} міст у ${path.relative(root, OUT)}; витрачено ${round1(totalCost)} викликів Open-Meteo`);
