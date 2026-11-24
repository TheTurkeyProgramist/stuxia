// «Погода на свята»: яка погода була на Новий рік, Різдво, Великдень і в перші дні сезонів.
// Джерело — безкоштовний архів Open-Meteo (ERA5), ключ не потрібен. Дані — сторінками по 10 років
// і лише після натискання кнопки (як пагінація): сторінка 0 — останні 10 років, 1 — ще 10 до них…
// Минулі роки не змінюються — кешуємо надовго.
//
// Файл імпортується і з тестів, тому тут нічого не тягнемо (ні i18n, ні React).

// 10 років ≈ 3650 діб ≈ 260 «викликів» Open-Meteo (1 виклик = 2 тижні даних) — з запасом
// у безкоштовний ліміт 600 викликів на хвилину з однієї IP
export const HOLIDAY_PAGE_YEARS = 10;
// Архів ERA5 починається з 1940 року
export const ARCHIVE_FIRST_YEAR = 1940;
// Дані ERA5 з'являються в архіві Open-Meteo із запізненням ~5 діб (так і в документації)
export const ARCHIVE_LAG_DAYS = 5;
// Якщо архів ще не встиг віддати потрібний день — повторюємо не частіше разу на добу
const MIN_RETRY_MS = 24 * 60 * 60 * 1000;
const CACHE_PREFIX = "holiday_weather_v5_";

const DAILY_VARS = ["temperature_2m_max", "temperature_2m_min", "precipitation_sum", "snowfall_sum", "weather_code"];

const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

// Православний Великдень (як святкують в Україні) за григоріанським календарем.
// Алгоритм Міуса для юліанського календаря + 13 днів (вірно для 1900–2099 рр.)
export const orthodoxEaster = (year) => {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 13);
  return ymd(date);
};

// Свята й особливі дні: ключ і дата в певному році.
// Різдво — за обома стилями (25 грудня і 7 січня), сезони — за календарем (1 березня, 1 червня…)
export const HOLIDAYS = [
  { key: "newYear", dateFor: (y) => `${y}-01-01` },
  { key: "christmasJan", dateFor: (y) => `${y}-01-07` },
  { key: "christmasDec", dateFor: (y) => `${y}-12-25` },
  { key: "easter", dateFor: orthodoxEaster },
  { key: "springStart", dateFor: (y) => `${y}-03-01` },
  { key: "summerStart", dateFor: (y) => `${y}-06-01` },
  { key: "autumnStart", dateFor: (y) => `${y}-09-01` },
  { key: "winterStart", dateFor: (y) => `${y}-12-01` },
];

// Середня температура доби (день + ніч) — за нею порівнюємо роки
export const dayMeanTemp = (x) =>
  x.tMax != null && x.tMin != null ? (x.tMax + x.tMin) / 2 : x.tMax ?? x.tMin ?? null;

// Роки від найхолоднішого до найтеплішого (для пояснення «2022 — найхолодніший, далі…»)
export const rankYearsByTemp = (list) =>
  (list || [])
    .map((x) => ({ year: x.year, mean: dayMeanTemp(x) }))
    .filter((x) => x.mean != null)
    .sort((a, b) => a.mean - b.mean || a.year - b.year);

// Роки сторінки: 0 — останні 10 (з поточним), 1 — 10 перед ними… null — архів закінчився
export const holidayPageYears = (page, today = new Date()) => {
  const to = today.getFullYear() - page * HOLIDAY_PAGE_YEARS;
  const from = Math.max(ARCHIVE_FIRST_YEAR, to - HOLIDAY_PAGE_YEARS + 1);
  return to < ARCHIVE_FIRST_YEAR ? null : { from, to };
};

// Межі запиту сторінки. Остання сторінка — до «сьогодні мінус кілька діб», решта — повні роки
export const holidayPageRange = (page, today = new Date()) => {
  const years = holidayPageYears(page, today);
  if (!years) return null;
  let end = `${years.to}-12-31`;
  if (page === 0) {
    const d = new Date(today);
    d.setDate(d.getDate() - ARCHIVE_LAG_DAYS);
    end = ymd(d);
  }
  return { start: `${years.from}-01-01`, end };
};

export const buildHolidayUrl = (lat, lon, page = 0, today = new Date()) => {
  const { start, end } = holidayPageRange(page, today);
  return (
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}` +
    `&start_date=${start}&end_date=${end}&daily=${DAILY_VARS.join(",")}&timezone=auto`
  );
};

const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

// Денний ряд → { newYear: [{ year, date, tMax, tMin, precip, snow, code }], … } — найновіші роки першими,
// лише ті, що вже є в архіві
export const pickHolidayWeather = (daily) => {
  const time = daily?.time || [];
  const index = new Map(time.map((d, i) => [d, i]));
  const years = [...new Set(time.map((d) => Number(d.slice(0, 4))))].sort((a, b) => b - a);
  const out = {};
  HOLIDAYS.forEach(({ key, dateFor }) => {
    out[key] = years
      .map((year) => {
        const date = dateFor(year);
        const i = index.get(date);
        if (i === undefined) return null;
        const tMax = num(daily.temperature_2m_max?.[i]);
        const tMin = num(daily.temperature_2m_min?.[i]);
        if (tMax === null && tMin === null) return null;
        return {
          year,
          date,
          tMax,
          tMin,
          precip: num(daily.precipitation_sum?.[i]),
          snow: num(daily.snowfall_sum?.[i]),
          code: num(daily.weather_code?.[i]),
        };
      })
      .filter(Boolean);
  });
  return out;
};

// Кілька завантажених сторінок → один набір: роки кожного свята від найновішого, без повторів
export const mergeHolidayPages = (pages) => {
  const out = {};
  HOLIDAYS.forEach(({ key }) => {
    const byYear = new Map();
    (pages || []).forEach((p) => (p?.[key] || []).forEach((x) => byYear.set(x.year, x)));
    out[key] = [...byYear.values()].sort((a, b) => b.year - a.year);
  });
  return out;
};

// Коли кеш застаріває. Минулі дні в архіві не змінюються, тож новий запит має сенс лише тоді,
// коли в архіві з'явився наступний важливий день (свято чи перший день сезону): його дата + 5 діб.
// lastDay — останній день, який архів реально віддав минулого разу (YYYY-MM-DD).
export const nextHolidayRefresh = (lastDay) => {
  const year = Number(String(lastDay).slice(0, 4));
  const next = [year, year + 1]
    .flatMap((y) => HOLIDAYS.map((h) => h.dateFor(y)))
    .filter((d) => d > lastDay)
    .sort()[0];
  const [y, m, d] = next.split("-").map(Number);
  return ymd(new Date(y, m - 1, d + ARCHIVE_LAG_DAYS));
};

// Чи можна брати збережене: ще не настав день оновлення (або після невдалої спроби не минула доба)
export const isHolidayCacheFresh = (raw, now = Date.now()) => {
  if (!raw?.data || !raw.lastDay) return false;
  if (ymd(new Date(now)) < nextHolidayRefresh(raw.lastDay)) return true;
  return now - (raw.at || 0) < MIN_RETRY_MS;
};

const cacheKey = (lat, lon, page) =>
  `${CACHE_PREFIX}${Number(lat).toFixed(2)}_${Number(lon).toFixed(2)}_p${page}`;

// Одна сторінка (10 років). Свіжа сторінка 0 оновлюється після нових важливих днів,
// старіші — повністю в минулому, тож беремо з кешу без строку давності
export const fetchHolidayPage = async (lat, lon, page = 0, { signal, now = Date.now() } = {}) => {
  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(cacheKey(lat, lon, page)) || "null");
    if (page > 0 ? cached?.data : isHolidayCacheFresh(cached, now)) return cached.data;
  } catch {
    /* сховище недоступне — просто йдемо в мережу */
  }
  let json;
  try {
    const res = await fetch(buildHolidayUrl(lat, lon, page, new Date(now)), { signal });
    if (!res.ok) throw Object.assign(new Error(`holiday archive ${res.status}`), { status: res.status });
    json = await res.json();
  } catch (e) {
    // Немає мережі чи ліміт — краще показати старі дані, ніж помилку
    if (e?.name !== "AbortError" && cached?.data) return cached.data;
    throw e;
  }
  const data = pickHolidayWeather(json.daily);
  if (!Object.values(data).some((list) => list.length)) throw new Error("holiday archive empty");
  const time = json.daily?.time || [];
  const lastDay = time[time.length - 1];
  try {
    localStorage.setItem(cacheKey(lat, lon, page), JSON.stringify({ at: now, lastDay, data }));
  } catch {
    /* переповнене сховище — не критично */
  }
  return data;
};
