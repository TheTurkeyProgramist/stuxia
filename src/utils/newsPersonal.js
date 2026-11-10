import localforage from "localforage";
import { getPref, setPref, removePref } from "./prefsStore.js";
import { canSendLocalAlert, recordLocalAlert, showSystemNotification } from "./emergencyAlerts.js";

// Особисті налаштування новин: ліміт власних стрічок, термінові новини (без сервера)
// та персональні рекомендації. Усе зберігається лише на цьому пристрої.

const readJson = (key, fallback) => {
  try {
    const raw = getPref(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const textOf = (item) =>
  `${item?.title || ""} ${(item?.description || "").replace(/<[^>]*>?/gm, " ")}`.toLowerCase();

// Короткі слова (ai, oil…) шукаємо як окреме слово, довші — як частину слова (основу)
const matchesWord = (text, word) => {
  const w = word.toLowerCase().trim();
  if (!w) return false;
  if (w.length <= 3) {
    const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^\\p{L}])${escaped}($|[^\\p{L}])`, "u").test(text);
  }
  return text.includes(w);
};

// ───────────── Власні стрічки ─────────────

export const CUSTOM_FEEDS_MIN = 6;
export const CUSTOM_FEEDS_MAX = 9;
const CUSTOM_FEEDS_LIMIT_KEY = "news_custom_feeds_limit";

export const getCustomFeedsLimit = () => {
  const n = Number(getPref(CUSTOM_FEEDS_LIMIT_KEY));
  return Number.isInteger(n) && n >= CUSTOM_FEEDS_MIN && n <= CUSTOM_FEEDS_MAX
    ? n
    : CUSTOM_FEEDS_MIN;
};

export const setCustomFeedsLimit = (n) => {
  const clamped = Math.min(CUSTOM_FEEDS_MAX, Math.max(CUSTOM_FEEDS_MIN, Math.round(n)));
  setPref(CUSTOM_FEEDS_LIMIT_KEY, String(clamped));
};

// ───────────── Термінові новини ─────────────

export const URGENT_NOTIFY_KEY = "news_urgent_notify";
export const URGENT_WORDS_KEY = "news_urgent_words";
const URGENT_NOTIFIED_KEY = "news_urgent_notified"; // localforage: посилання, про які вже сповістили
export const URGENT_MAX_WORDS = 20;
export const URGENT_MAX_WORD_LENGTH = 40;
// Сповіщаємо лише про свіже: стара «термінова» новина вже не термінова
const URGENT_MAX_AGE_MS = 12 * 60 * 60 * 1000;
const URGENT_MAX_PER_CHECK = 3;

// Основи слів: «евакуац» ловить «евакуація», «евакуації»; англійські — для оригіналів стрічок
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

export const isUrgentNotifyEnabled = () => getPref(URGENT_NOTIFY_KEY) === "true";
export const setUrgentNotifyEnabled = (enabled) =>
  setPref(URGENT_NOTIFY_KEY, enabled ? "true" : "false");

export const getUrgentWords = () => {
  const saved = readJson(URGENT_WORDS_KEY, null);
  return Array.isArray(saved)
    ? saved.filter((w) => typeof w === "string" && w.trim())
    : DEFAULT_URGENT_WORDS;
};

export const setUrgentWords = (words) =>
  setPref(URGENT_WORDS_KEY, JSON.stringify(words.slice(0, URGENT_MAX_WORDS)));

export const resetUrgentWords = () => removePref(URGENT_WORDS_KEY);

export const isUrgentNews = (item, words = getUrgentWords()) => {
  const text = textOf(item);
  return words.some((w) => matchesWord(text, w));
};

/**
 * Системне сповіщення про свіжі термінові новини (поки сайт або застосунок відкритий).
 * Про кожну новину — лише раз; за одну перевірку — не більше трьох.
 */
export const notifyUrgentNews = async (items) => {
  if (!isUrgentNotifyEnabled()) return;
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  const notified = (await localforage.getItem(URGENT_NOTIFIED_KEY).catch(() => null)) || [];
  const now = Date.now();
  const fresh = items
    .filter((item) => item?.isUrgent && item.link && !notified.includes(item.link))
    .filter((item) => {
      const time = new Date(item.pubDate).getTime();
      return Number.isNaN(time) || now - time < URGENT_MAX_AGE_MS;
    })
    .slice(0, URGENT_MAX_PER_CHECK);
  if (fresh.length === 0) return;

  const shown = [];
  for (const item of fresh) {
    // Пауза між сповіщеннями й ліміт на добу (Налаштування → Секції та новини)
    if (!(await canSendLocalAlert("news"))) break;
    try {
      await showSystemNotification(`Терміново: ${item.title}`.slice(0, 120), {
        body: item.sourceName || "Стихія",
        tag: `urgent-${item.link}`,
        url: item.link,
      });
      shown.push(item.link);
      await recordLocalAlert("news");
    } catch (err) {
      console.warn("Не вдалося показати сповіщення:", err);
    }
  }
  // Пропущені через паузу новини теж позначаємо: пізніше вони вже не «термінові»
  await localforage
    .setItem(URGENT_NOTIFIED_KEY, [...notified, ...fresh.map((i) => i.link)].slice(-200))
    .catch(() => {});
  return shown;
};

// ───────────── Персональні рекомендації ─────────────

const RECS_ENABLED_KEY = "news_recs_enabled";
export const RECS_TOPICS_KEY = "news_recs_topics";
const RECS_PROFILE_KEY = "news_recs_profile";
// Старі кліки поступово «забуваються», щоб рекомендації встигали за новими інтересами
const RECS_DECAY = 0.97;
const RECS_MAX_SOURCES = 40;

// Теми для ручного вибору та для визначення теми новини (укр. основи + англ. слова оригіналів)
export const NEWS_TOPICS = [
  {
    id: "animals",
    label: "Тварини",
    words: ["animal", "species", "wildlife", "bird", "mammal", "insect", "whale", "shark", "tiger", "elephant", "wolves", "frog", "reptile", "тварин", "птах", "звір", "комах", "кит", "кити", "китів", "акул", "тигр", "слон", "вовк", "жаба", "жаби"],
  },
  {
    id: "climate",
    label: "Клімат і погода",
    words: ["climate", "weather", "warming", "heatwave", "heat wave", "drought", "flood", "storm", "hurricane", "typhoon", "wildfire", "rainfall", "emission", "carbon", "ozone", "клімат", "погод", "спек", "посух", "повін", "шторм", "ураган", "тайфун", "пожеж", "викид", "вуглец", "озон"],
  },
  {
    id: "space",
    label: "Космос",
    words: ["space", "nasa", "planet", "mars", "lunar", "asteroid", "comet", "galaxy", "telescope", "orbit", "satellite", "astronaut", "космос", "космічн", "планет", "марс", "астероїд", "комет", "галактик", "телескоп", "орбіт", "супутник", "астронавт"],
  },
  {
    id: "ocean",
    label: "Океани й моря",
    words: ["ocean", "marine", "coral", "reef", "coast", "seabed", "океан", "морськ", "моря", "корал", "риф", "узбереж"],
  },
  {
    id: "plants",
    label: "Рослини й ліси",
    words: ["plant", "tree", "forest", "deforestation", "fungi", "fungus", "flower", "seed", "рослин", "дерев", "ліс", "лісі", "лісу", "ліси", "лісів", "лісов", "гриб", "квіт", "насінн"],
  },
  {
    id: "health",
    label: "Здоров'я",
    words: ["health", "disease", "virus", "vaccine", "cancer", "brain", "medicine", "medical", "infection", "здоров", "хвороб", "вірус", "вакцин", "мозок", "мозку", "медиц", "інфекц"],
  },
  {
    id: "tech",
    label: "Технології",
    words: ["technology", "robot", "artificial intelligence", "ai", "algorithm", "computer", "software", "drone", "технолог", "робот", "штучн", "алгоритм", "комп'ютер", "дрон"],
  },
  {
    id: "energy",
    label: "Енергетика",
    words: ["energy", "solar", "wind power", "wind farm", "battery", "batteries", "nuclear", "fossil", "renewable", "енерг", "сонячн", "вітров", "батаре", "атомн", "нафт", "газ", "газу", "газов"],
  },
];

export const detectTopics = (item) => {
  const text = textOf(item);
  return NEWS_TOPICS.filter((topic) => topic.words.some((w) => matchesWord(text, w))).map(
    (topic) => topic.id,
  );
};

/** Рекомендації увімкнені за замовчуванням (дані не залишають пристрій). */
export const isRecsEnabled = () => getPref(RECS_ENABLED_KEY) !== "false";
export const setRecsEnabled = (enabled) => setPref(RECS_ENABLED_KEY, enabled ? "true" : "false");

export const getRecsTopics = () => {
  const saved = readJson(RECS_TOPICS_KEY, []);
  const known = new Set(NEWS_TOPICS.map((t) => t.id));
  return Array.isArray(saved) ? saved.filter((id) => known.has(id)) : [];
};
export const setRecsTopics = (ids) => setPref(RECS_TOPICS_KEY, JSON.stringify(ids));

const emptyProfile = () => ({ topics: {}, sources: {}, clicks: 0 });

export const getRecsProfile = () => {
  const saved = readJson(RECS_PROFILE_KEY, null);
  return saved && typeof saved === "object"
    ? { ...emptyProfile(), ...saved }
    : emptyProfile();
};

export const resetRecsProfile = () => removePref(RECS_PROFILE_KEY);

/** Користувач відкрив новину — запам'ятовуємо її джерело й теми. */
export const recordNewsClick = (item) => {
  if (!isRecsEnabled() || !item) return;
  const profile = getRecsProfile();
  const decay = (map) =>
    Object.fromEntries(
      Object.entries(map)
        .map(([k, v]) => [k, Math.round(v * RECS_DECAY * 1000) / 1000])
        .filter(([, v]) => v >= 0.05),
    );
  const topics = decay(profile.topics);
  const sources = decay(profile.sources);
  detectTopics(item).forEach((id) => {
    topics[id] = (topics[id] || 0) + 1;
  });
  if (item.sourceName) sources[item.sourceName] = (sources[item.sourceName] || 0) + 1;
  // Лишаємо лише найчастіші джерела, щоб профіль не ріс без кінця
  const trimmedSources = Object.fromEntries(
    Object.entries(sources)
      .sort((a, b) => b[1] - a[1])
      .slice(0, RECS_MAX_SOURCES),
  );
  setPref(
    RECS_PROFILE_KEY,
    JSON.stringify({ topics, sources: trimmedSources, clicks: profile.clicks + 1 }),
  );
};

/** Знімок налаштувань для оцінки багатьох новин за раз. */
export const getRecsContext = () => {
  const enabled = isRecsEnabled();
  const profile = getRecsProfile();
  const maxOf = (map) => Math.max(0, ...Object.values(map));
  return {
    enabled,
    manualTopics: new Set(getRecsTopics()),
    profile,
    maxTopic: maxOf(profile.topics),
    maxSource: maxOf(profile.sources),
  };
};

/**
 * Наскільки новина цікава користувачу: обрані вручну теми важать найбільше,
 * далі — теми й джерела, які він часто відкривав. 0 — без рекомендацій.
 */
export const scoreNews = (item, ctx) => {
  if (!ctx?.enabled) return 0;
  const topics = detectTopics(item);
  let score = 0;
  topics.forEach((id) => {
    if (ctx.manualTopics.has(id)) score += 3;
    if (ctx.maxTopic > 0) score += 2 * ((ctx.profile.topics[id] || 0) / ctx.maxTopic);
  });
  if (ctx.maxSource > 0 && item.sourceName) {
    score += 1.5 * ((ctx.profile.sources[item.sourceName] || 0) / ctx.maxSource);
  }
  return score;
};

/** Найчастіші інтереси — щоб показати в налаштуваннях, що саме Стихія «вивчила». */
export const getTopInterests = (profile = getRecsProfile(), limit = 3) => {
  const top = (map) =>
    Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([k]) => k);
  const labelOf = (id) => NEWS_TOPICS.find((t) => t.id === id)?.label || id;
  return { topics: top(profile.topics).map(labelOf), sources: top(profile.sources) };
};

// Ключі, зміна яких має перебудувати стрічку (кліки — ні, щоб новини не стрибали під пальцем)
export const NEWS_ORDER_PREF_KEYS = new Set([RECS_ENABLED_KEY, RECS_TOPICS_KEY, URGENT_WORDS_KEY]);
