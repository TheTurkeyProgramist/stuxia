// Чиста логіка екстрених сповіщень (без Firebase) — щоб її можна було перевірити тестами.
// Синхронно з src/utils/emergencyAlerts.js та src/utils/newsPersonal.js.

export const DEFAULT_URGENT_WORDS = [
  "терміново",
  "термінова",
  "блискавка",
  "евакуац",
  "надзвичайн",
  "breaking",
  "urgent",
  "evacuat",
  "emergency",
];

export const NEWS_MAX_AGE_MS = 12 * 60 * 60 * 1000; // стара «термінова» новина вже не термінова
export const WEATHER_REPEAT_MS = 12 * 60 * 60 * 1000; // те саме явище для того ж місця — не частіше
export const WEATHER_ALERT_HOURS = 6;
export const GUST_STORM_MS = 20;
export const GUST_HURRICANE_MS = 32.7;
const NEWS_SENT_KEEP = 100;

const CODE_HAZARDS = [
  { type: "hail", label: "гроза з градом", codes: [96, 99] },
  { type: "thunder", label: "гроза", codes: [95] },
  { type: "ice", label: "крижаний дощ, ожеледь", codes: [66, 67] },
  { type: "snow", label: "сильний снігопад", codes: [75, 86] },
  { type: "rain", label: "сильна злива", codes: [65, 82] },
];

// Короткі слова (ai, oil…) — окремим словом, довші — як основа
export const matchesWord = (text, word) => {
  const w = String(word).toLowerCase().trim();
  if (!w) return false;
  if (w.length <= 3) {
    const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^\\p{L}])${escaped}($|[^\\p{L}])`, "u").test(text);
  }
  return text.includes(w);
};

export const isUrgent = (item, words) => {
  const text = `${item.title} ${item.description || ""}`.toLowerCase();
  return words.some((w) => matchesWord(text, w));
};

/**
 * Небезпечні явища в найближчі години. hourly — Open-Meteo з timezone=GMT
 * (time, weather_code, wind_gusts_10m у м/с).
 */
export const detectHazards = (hourly, now = Date.now()) => {
  const times = hourly?.time || [];
  const codes = hourly?.weather_code || [];
  const gusts = hourly?.wind_gusts_10m || [];
  const from = now - 60 * 60 * 1000;
  const to = now + WEATHER_ALERT_HOURS * 60 * 60 * 1000;
  const found = new Map();
  let maxGust = 0;
  times.forEach((t, i) => {
    const at = Date.parse(`${t}Z`);
    if (Number.isNaN(at) || at < from || at > to) return;
    const hazard = CODE_HAZARDS.find((h) => h.codes.includes(codes[i]));
    if (hazard && !found.has(hazard.type)) found.set(hazard.type, hazard);
    const gust = Number(gusts[i]) || 0;
    if (gust > maxGust) maxGust = gust;
  });
  if (maxGust >= GUST_HURRICANE_MS) {
    found.set("hurricane", { type: "hurricane", label: `ураганний вітер, пориви до ${Math.round(maxGust)} м/с` });
  } else if (maxGust >= GUST_STORM_MS) {
    found.set("storm", { type: "storm", label: `штормовий вітер, пориви до ${Math.round(maxGust)} м/с` });
  }
  if (found.has("hail")) found.delete("thunder");
  return [...found.values()];
};

export const formatWeatherAlert = (placeName, hazards) => {
  const labels = hazards.map((h) => h.label);
  const first = labels[0].charAt(0).toUpperCase() + labels[0].slice(1);
  return {
    title: `⚠ ${first} — ${placeName}`.slice(0, 120),
    body: `Найближчі ${WEATHER_ALERT_HOURS} год: ${labels.join("; ")}`,
  };
};

export const placeKey = (p) => `${Number(p.lat).toFixed(1)},${Number(p.lon).toFixed(1)}`;

// ───────────── Ранковий прогноз о 7:00 (sendMorningBrief) ─────────────
//
// «Конотоп: +3°, без дощу» + «Вдягни теплу куртку · вдень до +7°, вітер до 6 м/с».
// Заголовок і перший рядок тексту видно навіть у згорнутому сповіщенні.

// Запит до Open-Meteo: 7 змінних × 2 доби = вага 1 «виклик» на місце (Open-Meteo, calculateQueryWeight:
// max(1, змінні/10, змінні/10 × дні/14) на кожне місце). Беремо години «від зараз до 21:00».
export const MORNING_HOURLY_VARS = [
  "temperature_2m",
  "apparent_temperature",
  "precipitation_probability",
  "precipitation",
  "weather_code",
  "wind_speed_10m",
  "wind_gusts_10m",
];
const MORNING_DAY_HOURS = 14; // 7:00 → 21:00
const MORNING_OUT_HOURS = 2; // «вийти з дому» — найхолодніше з найближчих 2 годин
const WET_CHANCE = 40; // %, нижче — «без дощу»

const STORM = new Set([95, 96, 99]);
const SNOW = new Set([71, 73, 75, 77, 85, 86]);
const RAIN = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]);

/** +3°, −2°, 0° (справжній мінус, а не дефіс). */
export const formatTemp = (t) => {
  const n = Math.round(Number(t));
  if (!Number.isFinite(n) || n === 0) return "0°";
  return n > 0 ? `+${n}°` : `−${Math.abs(n)}°`;
};

/** Що вдягнути — за найхолоднішою «відчувається» на виході з дому (як getOutfitAdvice у QuickWeather.jsx). */
export const morningOutfit = (feels, wind) => {
  if (feels <= -10) return "вдягни пуховик, шапку й рукавиці";
  if (feels <= 0) return "вдягни теплу куртку й шапку";
  if (feels <= 7) return "вдягни теплу куртку";
  if (feels <= 14) return wind >= 8 ? "вдягни вітровку" : "вдягни легку куртку";
  if (feels <= 20) return wind >= 8 ? "вдягни вітровку" : "вистачить кофти";
  return "можна у футболці";
};

/**
 * Текст ранкового сповіщення для одного місця.
 * entry — відповідь Open-Meteo для місця з timezone=auto (місцевий час + utc_offset_seconds);
 * now — час розсилки. Повертає { title, body } або null.
 */
export const formatMorningBrief = (placeName, entry, now = Date.now()) => {
  const hourly = entry?.hourly;
  const times = hourly?.time || [];
  const offsetMs = (Number(entry?.utc_offset_seconds) || 0) * 1000;
  const hourStart = now - (now % (60 * 60 * 1000));
  // Місцевий час «2026-11-18T07:00» → момент у UTC
  const start = times.findIndex((t) => Date.parse(`${t}Z`) - offsetMs >= hourStart);
  if (start < 0) return null;
  const at = (name, i) => Number(hourly?.[name]?.[i]);
  const day = [];
  for (let i = start; i < Math.min(times.length, start + MORNING_DAY_HOURS + 1); i++) day.push(i);
  if (!Number.isFinite(at("temperature_2m", start))) return null;

  // Перша година з опадами, у які варто вірити
  const wetIdx = day.find((i) => {
    const code = at("weather_code", i);
    const chance = at("precipitation_probability", i);
    const mm = at("precipitation", i);
    const wetCode = STORM.has(code) || SNOW.has(code) || RAIN.has(code);
    return (Number.isFinite(chance) ? chance >= WET_CHANCE : true) && (wetCode || mm >= 0.2);
  });
  const tempNow = at("temperature_2m", start);
  let sky;
  let wet = null;
  if (wetIdx === undefined) {
    sky = tempNow <= 1 ? "без опадів" : "без дощу";
  } else {
    const code = at("weather_code", wetIdx);
    wet = STORM.has(code)
      ? "гроза"
      : SNOW.has(code) || (!RAIN.has(code) && at("temperature_2m", wetIdx) <= 0)
        ? "сніг"
        : "дощ";
    sky = wetIdx === start ? wet : `${wet} з ${String(times[wetIdx]).slice(11, 16)}`;
  }

  const outHours = day.slice(0, MORNING_OUT_HOURS + 1);
  const feels = Math.min(...outHours.map((i) => at("apparent_temperature", i)).filter(Number.isFinite));
  const wind = Math.max(0, ...day.map((i) => at("wind_speed_10m", i)).filter(Number.isFinite));
  const gusts = Math.max(0, ...day.map((i) => at("wind_gusts_10m", i)).filter(Number.isFinite));
  const maxTemp = Math.max(...day.map((i) => at("temperature_2m", i)).filter(Number.isFinite));

  let advice = morningOutfit(Number.isFinite(feels) ? feels : tempNow, wind);
  // «Вдягни куртку і візьми парасолю», але «Можна у футболці, але візьми парасолю»
  const joiner = advice.startsWith("вдягни") ? " і" : ", але";
  if (wet === "сніг") advice += `${joiner} взуй непромокне взуття`;
  else if (wet) advice += `${joiner} візьми парасолю`;

  const name = String(placeName || "").trim();
  const place = !name || name === "Ваша локація" ? "Біля вас" : name.slice(0, 40);
  const details = [`вдень до ${formatTemp(maxTemp)}`, `вітер до ${Math.round(wind)} м/с`];
  if (gusts >= 15) details.push(`пориви до ${Math.round(gusts)} м/с`);
  return {
    title: `${place}: ${formatTemp(tempNow)}, ${sky}`.slice(0, 120),
    body: `${advice.charAt(0).toUpperCase()}${advice.slice(1)} · ${details.join(", ")}`,
  };
};

// ───────────── Реєстрація пристрою (savePushProfile) ─────────────

export const PAUSE_OPTIONS = [30, 60, 120, 240, 480]; // синхронно з ALERT_PAUSE_OPTIONS
export const MAX_PLACES = 10;
export const MAX_WORDS = 20;
export const MAX_WORD_LENGTH = 40;

// Токен FCM: латиниця, цифри, «_», «-», «:» (зазвичай ~150–170 символів)
export const isValidFcmToken = (token) =>
  typeof token === "string" && /^[A-Za-z0-9_:-]{100,4096}$/.test(token);

/** Місце з профілю: координати округлюємо до ~10 км, назву обрізаємо; погане — null. */
const sanitizePlace = (pl) => {
  if (!pl || typeof pl !== "object") return null;
  const lat = Number(pl.lat);
  const lon = Number(pl.lon);
  if (!Number.isFinite(lat) || Math.abs(lat) > 90) return null;
  if (!Number.isFinite(lon) || Math.abs(lon) > 180) return null;
  return {
    lat: Math.round(lat * 10) / 10,
    lon: Math.round(lon * 10) / 10,
    name: (typeof pl.name === "string" ? pl.name : "").trim().slice(0, 60) || "Ваша локація",
  };
};

/** Профіль від браузера — лише очищені й обмежені значення, решту відкидаємо. */
export const sanitizeProfile = (raw) => {
  const p = raw && typeof raw === "object" ? raw : {};
  const words = Array.isArray(p.urgentWords)
    ? [...new Set(
        p.urgentWords
          .filter((w) => typeof w === "string")
          .map((w) => w.trim().toLowerCase().slice(0, MAX_WORD_LENGTH))
          .filter(Boolean),
      )].slice(0, MAX_WORDS)
    : [];
  const places = Array.isArray(p.places)
    ? p.places.map(sanitizePlace).filter(Boolean).slice(0, MAX_PLACES)
    : [];
  const morningPlace = p.morningBrief === true ? sanitizePlace(p.morningPlace) : null;
  return {
    newsAlerts: p.newsAlerts === true,
    weatherAlerts: p.weatherAlerts === true,
    // Ранковий прогноз — лише разом із місцем, для якого його рахувати
    morningBrief: Boolean(morningPlace),
    morningPlace,
    pauseMinutes: PAUSE_OPTIONS.includes(p.pauseMinutes) ? p.pauseMinutes : 120,
    dailyLimit: clampInt(p.dailyLimit, 1, 20, 5),
    urgentWords: words,
    places,
  };
};

/**
 * Ключ для ліміту за адресою. IPv4 — сама адреса; IPv6 — блок /64 (у одного
 * абонента їх мільярди, і бот міняв би адресу щоразу). Невідома адреса — спільний кошик.
 */
export const ipBucket = (ip) => {
  const raw = String(ip || "").trim().replace(/^::ffff:/i, "");
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(raw)) return raw;
  if (raw.includes(":")) {
    // Розгортаємо «::», щоб взяти рівно перші 4 групи
    const [head, tail = ""] = raw.toLowerCase().split("::");
    const h = head ? head.split(":") : [];
    const t = tail ? tail.split(":") : [];
    const full = [...h, ...Array(Math.max(0, 8 - h.length - t.length)).fill("0"), ...t];
    return `${full.slice(0, 4).map((g) => g.replace(/^0+(?=.)/, "")).join(":")}::/64`;
  }
  return "unknown";
};

/**
 * Адреса клієнта. ОСТАННЯ з X-Forwarded-For: її дописує інфраструктура Google,
 * а все, що лівіше, клієнт може підставити сам (так обходили б ліміт за адресою).
 */
export const clientIp = (rawRequest) => {
  const forwarded = rawRequest?.headers?.["x-forwarded-for"];
  const list = (Array.isArray(forwarded) ? forwarded.join(",") : forwarded || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return list[list.length - 1] || rawRequest?.ip || "";
};

/** Доба за Києвом — щоб «ліміт на добу» скидався опівночі для людей, а не за UTC. */
export const kyivDayKey = (ms) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Kyiv" }).format(new Date(ms));

// Час може прийти числом або Firestore Timestamp
const toMillis = (v) => (typeof v?.toMillis === "function" ? v.toMillis() : Number(v) || 0);

const clampInt = (v, min, max, fallback) =>
  Number.isInteger(v) && v >= min && v <= max ? v : fallback;

/**
 * Що надіслати одному пристрою за цей запуск і як оновити його службові поля.
 *
 * tokenData — документ push_tokens; news — свіжі новини (усі джерела, вже з перекладом
 * чи без); hazardsByPlace — Map(placeKey → явища). Правила:
 *  • ліміт на добу (dailyLimit, 1–20) — для всього разом;
 *  • погода ігнорує паузу (її не можна відкладати), новини — чекають її;
 *  • одна новина за запуск (пауза все одно не дасть більше);
 *  • однакові явища для того ж місця — не частіше ніж раз на 12 год.
 */
export const planForToken = (tokenData, news, hazardsByPlace, now = Date.now()) => {
  const dailyLimit = clampInt(tokenData.dailyLimit, 1, 20, 5);
  const pauseMs = clampInt(tokenData.pauseMinutes, 0, 1440, 120) * 60 * 1000;
  const today = kyivDayKey(now);
  let dayCount = tokenData.dayKey === today ? Number(tokenData.dayCount) || 0 : 0;
  // Локальні сповіщення сторінки (власні стрічки, поки Стихія відкрита) теж рахуються:
  // пристрій повідомляє їх у localDay / localCount / localLastAt
  const localToday = tokenData.localDay === today ? Number(tokenData.localCount) || 0 : 0;
  const used = () => dayCount + localToday;
  let lastSentAt = Math.max(Number(tokenData.lastSentAt) || 0, toMillis(tokenData.localLastAt));
  const weatherSent = { ...(tokenData.weatherSent || {}) };
  const newsSent = Array.isArray(tokenData.newsSent) ? [...tokenData.newsSent] : [];
  const messages = [];

  // 1. Погода — для кожного місця одним сповіщенням
  if (tokenData.weatherAlerts && Array.isArray(tokenData.places)) {
    for (const place of tokenData.places) {
      if (used() >= dailyLimit) break;
      if (!Number.isFinite(Number(place?.lat)) || !Number.isFinite(Number(place?.lon))) continue;
      const key = placeKey(place);
      const hazards = (hazardsByPlace.get(key) || []).filter(
        (h) => now - (weatherSent[`${key}|${h.type}`] || 0) >= WEATHER_REPEAT_MS,
      );
      if (hazards.length === 0) continue;
      const name = String(place.name || "Ваша локація").slice(0, 60);
      messages.push({ ...formatWeatherAlert(name, hazards), url: "/", tag: `weather-${key}`, kind: "weather" });
      hazards.forEach((h) => {
        weatherSent[`${key}|${h.type}`] = now;
      });
      dayCount += 1;
      lastSentAt = now;
    }
  }

  // 2. Термінові новини — за словами цього пристрою, з паузою
  if (tokenData.newsAlerts && used() < dailyLimit && now - lastSentAt >= pauseMs) {
    const words =
      Array.isArray(tokenData.urgentWords) && tokenData.urgentWords.length > 0
        ? tokenData.urgentWords.filter((w) => typeof w === "string")
        : DEFAULT_URGENT_WORDS;
    const item = news.find((n) => !newsSent.includes(n.link) && isUrgent(n, words));
    if (item) {
      messages.push({
        title: `Терміново: ${item.titleUk || item.title}`.slice(0, 120),
        body: item.sourceName,
        url: item.link,
        tag: `urgent-${item.link}`.slice(0, 200),
        kind: "news",
      });
      newsSent.push(item.link);
      dayCount += 1;
      lastSentAt = now;
    }
  }

  // Старі записи про погоду прибираємо
  Object.keys(weatherSent).forEach((k) => {
    if (now - weatherSent[k] > WEATHER_REPEAT_MS * 2) delete weatherSent[k];
  });

  return {
    messages,
    update: messages.length
      ? {
          lastSentAt,
          dayKey: today,
          dayCount,
          weatherSent,
          newsSent: newsSent.slice(-NEWS_SENT_KEEP),
        }
      : null,
  };
};
