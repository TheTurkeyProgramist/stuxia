// Голосові команди: звичайна фраза → рядок консолі.
// «увімкни музику» → "/soundtrack on", «додай погоду у Львові» → "/create weather Львів".
// Лише шаблони (без ШІ): миттєво, офлайн після розпізнавання і без жодної квоти.

import { findCommand } from "./commands.js";
import { findCityByLocative } from "../../utils/citiesDatabase.js";
import { toGenitive } from "../../utils/genitive.js";
import i18n from "../../i18n/i18n.js";
import { VOICE_LEXICON } from "./voiceLexicon.js";

// Слова-паразити й ввічливість, що не впливають на зміст команди
const FILLERS = new Set([
  "будь", "ласка", "будь-ласка", "будьласка", "please", "мені", "нам", "ну", "а", "давай",
  "можеш", "можна", "будь-яку", "стихія", "стихіє", "окей", "ок", "швидко",
]);

const ORDINALS = [
  [/^перш/, 1], [/^друг/, 2], [/^трет/, 3], [/^четвер/, 4], [/^п'ят/, 5],
  [/^шост/, 6], [/^сьом/, 7], [/^восьм/, 8], [/^дев'ят/, 9], [/^десят/, 10],
];

/** Нижній регістр, без розділових знаків і зайвих слів. */
export const normalizeSpeech = (text) =>
  String(text || "")
    .toLowerCase()
    .replace(/[’ʼ`]/g, "'")
    .replace(/[.,!?;:«»"()。，！？、،؟]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !FILLERS.has(w))
    .join(" ");

const capitalize = (s) =>
  s.replace(/(^|[\s-])(\S)/g, (m, sep, ch) => sep + ch.toUpperCase());

// Назви міст, для яких знаємо родовий відмінок: «для Києва» → «Київ»
let genitiveIndex = null;
const cityFromGenitive = (q) => {
  if (!genitiveIndex) {
    genitiveIndex = new Map();
    // Ті самі міста, що мають місцевий відмінок у базі
    const names = [
      "Київ", "Харків", "Одеса", "Дніпро", "Львів", "Запоріжжя", "Кривий Ріг", "Миколаїв", "Вінниця",
      "Полтава", "Чернігів", "Черкаси", "Суми", "Житомир", "Хмельницький", "Рівне", "Чернівці",
      "Кременчук", "Тернопіль", "Івано-Франківськ", "Луцьк", "Біла Церква", "Ужгород", "Конотоп",
      "Шостка", "Умань", "Херсон", "Маріуполь", "Ніжин", "Бориспіль", "Ірпінь", "Буча", "Мукачево",
    ];
    names.forEach((n) => genitiveIndex.set(toGenitive(n).toLowerCase(), n));
  }
  return genitiveIndex.get(q) || null;
};

/** «у львові», «для києва», «місто суми» → назва міста для пошуку. */
export const cityFromSpeech = (rest) => {
  const words = String(rest || "")
    .split(/\s+/)
    .filter(Boolean);
  // Відкидаємо службові слова на початку: «картку погоди у …», «місто …»
  while (words.length && /^(картк\S*|погод\S*|міст\S*|в|у|для|на|з|із|прогноз\S*)$/.test(words[0])) {
    words.shift();
  }
  const q = words.join(" ");
  if (!q) return "";
  return findCityByLocative(q) || cityFromGenitive(q) || capitalize(q);
};

/** «другу», «2», «Львів» → аргумент для /delete weather. */
const cardFromSpeech = (rest) => {
  const words = rest.split(/\s+/).filter((w) => !/^(картк\S*|погод\S*|міст\S*|номер)$/.test(w));
  if (!words.length) return "";
  if (/^(всі|усі|все|усе|всіх|усіх)$/.test(words[0])) return "all";
  if (/^\d+$/.test(words[0])) return words[0];
  const ord = ORDINALS.find(([re]) => re.test(words[0]));
  if (ord) return String(ord[1]);
  return cityFromSpeech(words.join(" "));
};

const OPEN_WORDS = [
  [/магазин|підтримк/, "shop"],
  [/налаштув|параметр/, "settings"],
  [/довідк/, "help"],
  [/подяк|автор/, "authors"],
  [/акаунт|профіл|вхід|увійти|реєстрац/, "account"],
  [/(^|\s)ші(\s|$)|помічник|асистент|штучн|чат/, "ai"],
  [/мов[уаи]?(\s|$)/, "language"],
];

const GOTO_WORDS = [
  [/погод/, "weather"],
  [/мап|карт[уаиі](\s|$)|клімат/, "map"],
  [/верх|початок|нагору|вгору/, "top"],
  [/головн/, "hero"],
];

const MUSIC = /музик|саундтрек|пісн|мелоді|трек/;

/** Український розбір фрази. */
const ukrainianVoiceToCommand = (speech) => {
  const t = normalizeSpeech(speech);
  if (!t) return null;
  const [first, ...restWords] = t.split(" ");
  const rest = restWords.join(" ");

  // «слеш open shop» або просто англійська команда: «open shop», «soundtrack off»
  if (first === "слеш" || first === "slash") return rest ? `/${rest}` : null;
  // Англійська консольна команда («soundtrack off») — див. voiceToCommand, після словників

  // Довідка по командах
  if (/^(допомога|допоможи|команди|що ти вмієш|що вмієш|які є команди|які команди)$/.test(t)) return "/help";
  if (/^(очисти|очистити|очисть)( консоль| журнал| екран)?$/.test(t)) return "/clear";
  if (/^(закрий|закрити|закрий все|закрий усе|закрий вікна|закрий всі вікна|сховай консоль|закрий консоль)$/.test(t)) {
    return "/close";
  }

  // Тема — раніше за музику, бо «увімкни темну тему» теж починається з «увімкни»
  if (/(тем[уаи]|режим)/.test(t) || /^(темна|світла)$/.test(t)) {
    if (/темн|нічн/.test(t)) return "/theme dark";
    if (/світл|денн/.test(t)) return "/theme light";
    if (/змін|перемкн|інш/.test(t)) return "/theme toggle";
  }

  // Музика: гучність, вимкнути, увімкнути
  const vol = t.match(/(гучність|звук)\D*(\d{1,3})/);
  if (vol) return `/soundtrack volume ${vol[2]}`;
  if (/^(гучніше|голосніше)/.test(t)) return "/soundtrack volume +10";
  if (/^тихіше/.test(t)) return "/soundtrack volume -10";
  if (/^(стоп|тиша|пауза)$/.test(t) || (/(вимкн|виключ|зупин|стоп|пауз|прибер)/.test(t) && MUSIC.test(t))) {
    return "/soundtrack off";
  }
  if (/перемкн/.test(t) && MUSIC.test(t)) return "/soundtrack toggle";
  if (MUSIC.test(t) && (/(увімкн|ввімкн|включ|запуст|грай|заграй|постав|давай)/.test(t) || !rest)) {
    return "/soundtrack on";
  }

  // Картки погоди
  if (/^(список|мої міста|мої картки|які картки|які міста|які в мене картки|які в мене міста)$/.test(t) ||
      /^покажи (список|мої картки|мої міста|картки|міста)/.test(t)) {
    return "/list weather";
  }
  if (/^(додай|додати|добав|створи|створити)$/.test(first)) {
    const city = cityFromSpeech(rest);
    return city ? `/create weather ${city}` : null;
  }
  if (/^(видали|видалити|прибери|прибрати|забери)$/.test(first)) {
    if (/^істор/.test(rest)) return "/delete history";
    const card = cardFromSpeech(rest);
    if (!card) return null;
    return card === "all" ? "/delete weather all" : `/delete weather ${card}`;
  }

  // Озвучити текст
  if (/^(скажи|промов|прочитай)$/.test(first) && rest) return `/say ${rest}`;

  // Відкрити вікно або перейти до розділу
  if (/^(відкрий|відкрити|покажи|запусти|перейди|прокрути|гортай|йди)$/.test(first) || !rest) {
    const target = rest || t;
    const open = OPEN_WORDS.find(([re]) => re.test(target));
    if (open && first !== "перейди" && first !== "прокрути") return `/open ${open[1]}`;
    const go = GOTO_WORDS.find(([re]) => re.test(target));
    if (go) return `/goto ${go[1]}`;
    if (open) return `/open ${open[1]}`;
  }

  return null;
};

/** Приклади для підказки, коли фразу не зрозуміли. */
export const VOICE_EXAMPLES = ["увімкни музику", "додай погоду у Львові", "відкрий магазин", "темна тема"];

// ── Інші мови: словник voiceLexicon.js ─────────────────────────────────────

const siteLang = () => String(i18n.language || "uk").split("-")[0];
const NO_SPACES = new Set(["zh", "ja"]);
const INFIX = new Set(["ar", "fa"]);

/** Фраза мовою lng → команда за словником або null. */
export const lexiconToCommand = (t, lng) => {
  const lex = VOICE_LEXICON[lng];
  if (!lex || !t) return null;
  const tokens = t.split(" ");
  const wordHit = (w) => {
    if (NO_SPACES.has(lng) || w.includes(" ")) return t.includes(w);
    return tokens.some((tok) =>
      w.length <= 3 ? tok === w : INFIX.has(lng) ? tok.includes(w) : tok.startsWith(w),
    );
  };
  const has = (key) => (lex[key] || []).some(wordHit);
  // Назва міста — фраза без службових слів
  const SERVICE = ["add", "del", "card", "weather", "all", "open", "go"].flatMap((k) => lex[k] || []);
  const stripService = () => {
    if (NO_SPACES.has(lng)) {
      let s = t;
      SERVICE.slice().sort((a, b) => b.length - a.length).forEach((w) => { s = s.split(w).join(" "); });
      return s.replace(/\s+/g, " ").trim();
    }
    return tokens
      .filter((tok) => !SERVICE.some((w) => (w.length <= 3 ? tok === w : tok.startsWith(w) || w.split(" ").includes(tok))))
      .join(" ");
  };
  const number = t.match(/\d{1,3}/)?.[0];

  if (has("help") && !has("open")) return "/help";
  if (has("clear") && !has("history") && !has("card") && !has("weather") && !has("music")) return "/clear";
  if (has("theme") || (tokens.length <= 2 && (has("dark") || has("light")) && !has("music"))) {
    if (has("dark")) return "/theme dark";
    if (has("light")) return "/theme light";
    if (has("toggle")) return "/theme toggle";
  }
  if (number && has("volume")) return `/soundtrack volume ${number}`;
  if (has("louder")) return "/soundtrack volume +10";
  if (has("quieter")) return "/soundtrack volume -10";
  if (has("music")) {
    if (has("off")) return "/soundtrack off";
    if (has("toggle")) return "/soundtrack toggle";
    return "/soundtrack on";
  }
  if (tokens.length === 1 && has("off")) return "/soundtrack off";
  if (has("close")) return "/close";
  if (has("list")) return "/list weather";
  const [first, ...restTokens] = tokens;
  if ((lex.say || []).some((w) => first === w || (w.length > 3 && first.startsWith(w))) && restTokens.length) {
    return `/say ${restTokens.join(" ")}`;
  }
  if (has("add")) {
    const city = stripService();
    return city ? `/create weather ${capitalize(city)}` : null;
  }
  if (has("del")) {
    if (has("history")) return "/delete history";
    if (has("all")) return "/delete weather all";
    if (number) return `/delete weather ${number}`;
    const city = stripService();
    return city ? `/delete weather ${capitalize(city)}` : null;
  }
  const OPEN_TARGETS = [["shop", "shop"], ["settings", "settings"], ["helpT", "help"], ["authors", "authors"], ["account", "account"], ["ai", "ai"], ["language", "language"]];
  const PLACES = [["weather", "weather"], ["map", "map"], ["top", "top"], ["hero", "hero"]];
  if (has("open") || has("go") || tokens.length <= 2) {
    const open = OPEN_TARGETS.find(([k]) => has(k));
    const place = PLACES.find(([k]) => has(k));
    if (has("go") && place) return `/goto ${place[1]}`;
    if (open) return `/open ${open[1]}`;
    if (place) return `/goto ${place[1]}`;
  }
  return null;
};

/**
 * Фраза → рядок команди ("/open shop") або null, якщо не зрозуміли.
 * Спершу український розбір, далі — словник мови сайту, потім англійський.
 */
export const voiceToCommand = (speech, lng = siteLang()) => {
  const uk = ukrainianVoiceToCommand(speech);
  if (uk) return uk;
  const t = normalizeSpeech(speech);
  const fromLexicon = (lng !== "uk" && lexiconToCommand(t, lng)) || lexiconToCommand(t, "en");
  if (fromLexicon) return fromLexicon;
  // Просто англійська команда консолі: «soundtrack off», «theme dark»
  const first = t.split(" ")[0];
  if (/^[a-z]+$/.test(first) && findCommand(first)) return `/${t}`;
  return null;
};

/** Приклади фраз мовою сайту. */
export const getVoiceExamples = (lng = siteLang()) => VOICE_LEXICON[lng]?.ex || VOICE_EXAMPLES;
