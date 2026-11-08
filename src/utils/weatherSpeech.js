// Озвучення прогнозу (бета).
// Два рушії:
//  • "browser" — голоси пристрою (Web Speech API): безкоштовно, миттєво, набір залежить від ОС і браузера.
//    Найживіші українські голоси — «Microsoft Polina/Ostap Online (Natural)» в Edge.
//  • "piper" — нейромережа Piper прямо в браузері (@mintplex-labs/piper-tts-web): однаково звучить
//    на будь-якому пристрої, але модель (20–77 МБ) завантажується один раз і зберігається в браузері.
import { getPref, setPref } from "./prefsStore.js";

export const VOICE_PREF_KEYS = {
  engine: "beta_voice_engine",
  voiceId: "beta_voice_id",
  rate: "beta_voice_rate",
};

export const SAMPLE_PHRASE =
  "Привіт! Сьогодні у Києві плюс чотири градуси, мінлива хмарність, вітер слабкий.";

export const PIPER_VOICES = [
  {
    id: "uk_UA-ukrainian_tts-medium",
    label: "Лада — нейромережа, якісна",
    sizeMb: 77,
  },
  {
    id: "uk_UA-lada-x_low",
    label: "Лада — нейромережа, легка",
    sizeMb: 21,
  },
];

const NATURAL_VOICE_RE = /natural|neural|online|premium|enhanced|google/i;

export const isSpeechSupported = () =>
  typeof window !== "undefined" && "speechSynthesis" in window;

export const getVoiceSettings = () => ({
  engine: getPref(VOICE_PREF_KEYS.engine) || "browser",
  voiceId: getPref(VOICE_PREF_KEYS.voiceId) || "",
  rate: Number(getPref(VOICE_PREF_KEYS.rate)) || 1,
});

export const saveVoiceSettings = (patch) => {
  Object.entries(patch).forEach(([name, value]) => {
    if (VOICE_PREF_KEYS[name]) setPref(VOICE_PREF_KEYS[name], value);
  });
};

// ── Голоси браузера ─────────────────────────────────────────────────────────

/** Список голосів пристрою (Chrome віддає його не одразу — чекаємо voiceschanged). */
export const loadBrowserVoices = () =>
  new Promise((resolve) => {
    if (!isSpeechSupported()) return resolve([]);
    const synth = window.speechSynthesis;
    const initial = synth.getVoices();
    if (initial.length) return resolve(initial);
    const timer = setTimeout(() => resolve(synth.getVoices()), 2000);
    synth.addEventListener(
      "voiceschanged",
      () => {
        clearTimeout(timer);
        resolve(synth.getVoices());
      },
      { once: true },
    );
  });

/** Українські голоси першими, серед них — «живі» (Natural/Online/Google). */
export const describeBrowserVoices = (voices) =>
  voices
    .map((v) => ({
      id: v.voiceURI,
      name: v.name,
      lang: v.lang,
      isUkrainian: /^uk\b|^uk-/i.test(v.lang),
      isNatural: NATURAL_VOICE_RE.test(v.name),
      isLocal: v.localService,
    }))
    .sort(
      (a, b) =>
        Number(b.isUkrainian) - Number(a.isUkrainian) ||
        Number(b.isNatural) - Number(a.isNatural) ||
        a.name.localeCompare(b.name),
    );

// ── Відтворення ─────────────────────────────────────────────────────────────

let currentStop = null;

export const stopSpeaking = () => {
  currentStop?.();
  currentStop = null;
};

const speakWithBrowser = async (text, voiceId, rate) => {
  if (!isSpeechSupported()) throw new Error("Браузер не вміє озвучувати текст");
  const synth = window.speechSynthesis;
  const voices = await loadBrowserVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice =
    voices.find((v) => v.voiceURI === voiceId) ||
    voices.find((v) => /^uk/i.test(v.lang));
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || "uk-UA";
  utterance.rate = rate;

  return new Promise((resolve, reject) => {
    utterance.onend = () => resolve();
    utterance.onerror = (e) =>
      e.error === "interrupted" || e.error === "canceled"
        ? resolve()
        : reject(new Error(e.error || "Помилка озвучення"));
    currentStop = () => synth.cancel();
    synth.cancel();
    synth.speak(utterance);
  });
};

let piperModulePromise = null;
let piperSession = null;
let piperSessionVoice = null;

const loadPiper = () => {
  piperModulePromise ??= import("@mintplex-labs/piper-tts-web").catch((err) => {
    piperModulePromise = null;
    throw err;
  });
  return piperModulePromise;
};

/** Сесія Piper для голосу. Бібліотека тримає одну сесію, тож при зміні голосу створюємо нову. */
const getPiperSession = async (voiceId, onProgress) => {
  const piper = await loadPiper();
  if (piperSession && piperSessionVoice === voiceId) return piperSession;
  piper.TtsSession._instance = null;
  try {
    piperSession = await piper.TtsSession.create({ voiceId, progress: onProgress });
    piperSessionVoice = voiceId;
    return piperSession;
  } catch (err) {
    piper.TtsSession._instance = null;
    piperSession = null;
    piperSessionVoice = null;
    throw err;
  }
};

/** Які моделі Piper уже лежать у браузері. */
export const getStoredPiperVoices = async () => {
  try {
    const piper = await loadPiper();
    return await piper.stored();
  } catch {
    return [];
  }
};

const speakWithPiper = async (text, voiceId, rate, onProgress) => {
  const id = PIPER_VOICES.some((v) => v.id === voiceId) ? voiceId : PIPER_VOICES[0].id;
  const session = await getPiperSession(id, onProgress);
  const wav = await session.predict(text);
  const url = URL.createObjectURL(wav);
  const audio = new Audio(url);
  audio.playbackRate = rate;

  return new Promise((resolve, reject) => {
    const cleanup = () => URL.revokeObjectURL(url);
    audio.onended = () => {
      cleanup();
      resolve();
    };
    audio.onerror = () => {
      cleanup();
      reject(new Error("Не вдалося відтворити звук"));
    };
    currentStop = () => {
      audio.pause();
      cleanup();
      resolve();
    };
    audio.play().catch((err) => {
      cleanup();
      reject(err);
    });
  });
};

/**
 * Озвучує текст. Попереднє озвучення зупиняється.
 * onProgress({ loaded, total }) — хід завантаження моделі Piper.
 */
export const speak = async (text, { engine, voiceId, rate, onProgress } = {}) => {
  stopSpeaking();
  const settings = getVoiceSettings();
  const useEngine = engine || settings.engine;
  const useVoice = voiceId ?? settings.voiceId;
  const useRate = rate ?? settings.rate;
  if (useEngine === "piper") return speakWithPiper(text, useVoice, useRate, onProgress);
  return speakWithBrowser(text, useVoice, useRate);
};

// ── Текст прогнозу ──────────────────────────────────────────────────────────

const plural = (n, [one, few, many]) => {
  const abs = Math.abs(Math.round(n)) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (last === 1) return one;
  if (last >= 2 && last <= 4) return few;
  return many;
};

const degrees = (n) => {
  const value = Math.round(n);
  const sign = value > 0 ? "плюс " : value < 0 ? "мінус " : "";
  return `${sign}${Math.abs(value)} ${plural(value, ["градус", "градуси", "градусів"])}`;
};

const parseNum = (value) => {
  const num = typeof value === "number" ? value : parseFloat(String(value).replace(",", "."));
  return Number.isFinite(num) ? num : null;
};

const toLocalIsoDate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

/** Коротке зведення для озвучення: зараз + сьогодні. */
export const buildForecastSpeech = (card) => {
  if (!card?.current) return "";
  const parts = [];
  const name = card.locationName || "Ваша локація";
  parts.push(`Погода: ${name}.`);

  const now = new Date();
  const hourPrefix = `${toLocalIsoDate(now)}T${String(now.getHours()).padStart(2, "0")}`;
  const nowHour =
    card.hourly?.find((h) => h.fullTime?.startsWith(hourPrefix)) || card.hourly?.[0];
  const description = nowHour?.description?.replace(/\p{Extended_Pictographic}/gu, "").trim();

  const temp = parseNum(card.current.tempNum ?? card.current.temp);
  if (temp !== null) {
    parts.push(`Зараз ${degrees(temp)}${description ? `, ${description.toLowerCase()}` : ""}.`);
  }
  const feels = parseNum(card.current.feels_like);
  if (feels !== null && temp !== null && Math.round(feels) !== Math.round(temp)) {
    parts.push(`Відчувається як ${degrees(feels)}.`);
  }
  const wind = parseNum(card.current.windNum);
  if (wind !== null) {
    const w = Math.round(wind);
    parts.push(
      w === 0
        ? "Майже безвітряно."
        : `Вітер ${w} ${plural(w, ["метр", "метри", "метрів"])} за секунду.`,
    );
  }

  const today = card.daily16?.find((d) => d.fullDate === toLocalIsoDate(now));
  if (today) {
    const max = parseNum(today.temp_day);
    const min = parseNum(today.temp_night);
    if (max !== null && min !== null) {
      parts.push(`Сьогодні максимум ${degrees(max)}, мінімум ${degrees(min)}.`);
    }
    const rain = parseNum(today.precipitation_probability_max);
    if (rain !== null && rain >= 30) {
      parts.push(`Ймовірність опадів ${Math.round(rain)} відсотків.`);
    }
  }
  return parts.join(" ");
};
