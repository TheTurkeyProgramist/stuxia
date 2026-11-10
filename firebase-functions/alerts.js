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

// ───────────── Реєстрація пристрою (savePushProfile) ─────────────

export const PAUSE_OPTIONS = [30, 60, 120, 240, 480]; // синхронно з ALERT_PAUSE_OPTIONS
export const MAX_PLACES = 10;
export const MAX_WORDS = 20;
export const MAX_WORD_LENGTH = 40;

// Токен FCM: латиниця, цифри, «_», «-», «:» (зазвичай ~150–170 символів)
export const isValidFcmToken = (token) =>
  typeof token === "string" && /^[A-Za-z0-9_:-]{100,4096}$/.test(token);

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
    ? p.places
        .filter((pl) => pl && typeof pl === "object")
        .map((pl) => ({ lat: Number(pl.lat), lon: Number(pl.lon), name: pl.name }))
        .filter((pl) => Number.isFinite(pl.lat) && Math.abs(pl.lat) <= 90)
        .filter((pl) => Number.isFinite(pl.lon) && Math.abs(pl.lon) <= 180)
        .slice(0, MAX_PLACES)
        .map((pl) => ({
          lat: Math.round(pl.lat * 10) / 10,
          lon: Math.round(pl.lon * 10) / 10,
          name: (typeof pl.name === "string" ? pl.name : "").trim().slice(0, 60) || "Ваша локація",
        }))
    : [];
  return {
    newsAlerts: p.newsAlerts === true,
    weatherAlerts: p.weatherAlerts === true,
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
