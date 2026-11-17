// Консоль команд Стихії — як чат-команди в іграх: /open shop, /soundtrack, /create weather Київ.
// Тут лише логіка (розбір, автодоповнення, виконання) — без React, тож легко тестувати.
// Дії застосунку приходять через host (див. commandHost.js і App.jsx).

/** Рядок виводу консолі. kind: "ok" | "error" | "info" */
const line = (text, kind = "info") => ({ text, kind });
const ok = (text) => [line(text, "ok")];
const fail = (text) => [line(text, "error")];

const norm = (s) => String(s || "").trim().toLowerCase();

/** "/create weather Нью Йорк" → ["create", "weather", "Нью", "Йорк"]; лапки тримають пробіли. */
export const tokenize = (input) => {
  const text = String(input || "").replace(/^\s*\//, "");
  const tokens = [];
  const re = /"([^"]*)"?|'([^']*)'?|(\S+)/g;
  let m;
  while ((m = re.exec(text))) tokens.push(m[1] ?? m[2] ?? m[3]);
  return tokens;
};

// ── Довідники аргументів ────────────────────────────────────────────────────

export const OPEN_TARGETS = [
  { value: "settings", hint: "Налаштування", aliases: ["параметри", "налаштування"] },
  { value: "shop", hint: "Магазин і підтримка", aliases: ["магазин"] },
  { value: "help", hint: "Довідка", aliases: ["довідка"] },
  { value: "authors", hint: "Подяка авторам", aliases: ["подяка", "автори"] },
  { value: "account", hint: "Вхід / акаунт", aliases: ["акаунт", "профіль"] },
  { value: "ai", hint: "ШІ-помічник", aliases: ["ші", "помічник"] },
  { value: "language", hint: "Мова сайту", aliases: ["мова"] },
];

export const SETTINGS_TABS = [
  { value: "personalization", hint: "Персоналізація" },
  { value: "security", hint: "Безпека" },
  { value: "siteSections", hint: "Секції та новини" },
  { value: "modes", hint: "Режими" },
  { value: "filters", hint: "Фільтри" },
  { value: "bgMusic", hint: "Фонова музика" },
  { value: "beta", hint: "Бета-функції" },
];

export const GOTO_TARGETS = [
  { value: "top", hint: "Початок сторінки", aliases: ["верх", "початок"] },
  { value: "hero", hint: "Головна", aliases: ["головна"] },
  { value: "weather", hint: "Погода", aliases: ["погода"] },
  { value: "map", hint: "Кліматична мапа", aliases: ["мапа", "карта"] },
];

const WEATHER = { value: "weather", hint: "Картка погоди", aliases: ["погода"] };
const HISTORY = { value: "history", hint: "Історія команд", aliases: ["історія"] };

const ON_OFF = [
  { value: "on", hint: "Увімкнути", aliases: ["увімк", "увімкнути"] },
  { value: "off", hint: "Вимкнути", aliases: ["вимк", "вимкнути"] },
  { value: "toggle", hint: "Перемкнути", aliases: ["перемкнути"] },
  { value: "volume", hint: "Гучність 0–100", aliases: ["гучність"] },
];

const THEMES = [
  { value: "dark", hint: "Темна", aliases: ["темна"] },
  { value: "light", hint: "Світла", aliases: ["світла"] },
  { value: "toggle", hint: "Перемкнути", aliases: ["перемкнути"] },
];

/** Значення з довідника за назвою або синонімом (без регістру). */
const pick = (options, raw) => {
  const q = norm(raw);
  if (!q) return null;
  return options.find((o) => o.value.toLowerCase() === q || o.aliases?.includes(q)) || null;
};

// ── Картки погоди ───────────────────────────────────────────────────────────

const cardName = (card) => card?.locationName || (card?.isMain ? "Ваша локація" : "Без назви");

/** Картка за номером (1, 2, …) зі списку /list weather або за назвою міста. */
export const findCard = (cards, query) => {
  const q = norm(query);
  if (!q || !Array.isArray(cards)) return null;
  if (/^\d+$/.test(q)) return cards[Number(q) - 1] || null;
  if (q === "gps") return cards.find((c) => c.isMain) || null;
  return (
    cards.find((c) => norm(cardName(c)) === q) ||
    cards.find((c) => norm(cardName(c)).startsWith(q)) ||
    cards.find((c) => norm(cardName(c)).includes(q)) ||
    null
  );
};

const cardOptions = (host) =>
  (host?.getCards?.() || []).map((c, i) => ({
    value: c.isMain ? "gps" : cardName(c).split(",")[0],
    hint: `№${i + 1} · ${cardName(c)}`,
  }));

// ── Команди ─────────────────────────────────────────────────────────────────

/**
 * name, aliases, usage, description,
 * complete(args, host) → варіанти для аргументу з індексом args.length,
 * run(args, host, ctx) → рядки виводу (можна async).
 */
export const COMMANDS = [
  {
    name: "help",
    aliases: ["?", "допомога"],
    usage: "/help [команда]",
    description: "Список команд або довідка по одній",
    complete: (args) => (args.length === 0 ? COMMANDS.map((c) => ({ value: c.name, hint: c.description })) : []),
    run: (args) => {
      if (args[0]) {
        const cmd = findCommand(args[0]);
        if (!cmd) return fail(`Немає команди «${args[0]}». Спробуйте /help`);
        const out = [line(`${cmd.usage} — ${cmd.description}`, "ok")];
        if (cmd.examples) cmd.examples.forEach((ex) => out.push(line(`  ${ex}`)));
        if (cmd.aliases?.length) out.push(line(`  Інші назви: ${cmd.aliases.join(", ")}`));
        return out;
      }
      return [
        line("Команди Стихії (↑/↓ — вибрати, Enter або Tab — підставити):", "ok"),
        ...COMMANDS.map((c) => line(`  ${c.usage} — ${c.description}`)),
      ];
    },
  },
  {
    name: "open",
    aliases: ["відкрий", "відкрити"],
    usage: "/open <вікно>",
    description: "Відкрити вікно сайту",
    examples: ["/open shop", "/open settings beta", "/open ai"],
    complete: (args) => {
      if (args.length === 0) return OPEN_TARGETS;
      if (args.length === 1 && pick(OPEN_TARGETS, args[0])?.value === "settings") return SETTINGS_TABS;
      return [];
    },
    run: (args, host) => {
      const target = pick(OPEN_TARGETS, args[0]);
      if (!target) {
        return fail(`Вкажіть вікно: ${OPEN_TARGETS.map((t) => t.value).join(", ")}`);
      }
      let tab = null;
      if (target.value === "settings" && args[1]) {
        tab = SETTINGS_TABS.find((t) => norm(t.value) === norm(args[1]))?.value;
        if (!tab) return fail(`Немає вкладки «${args[1]}». Є: ${SETTINGS_TABS.map((t) => t.value).join(", ")}`);
      }
      if (host.openModal(target.value, { tab }) === false) return fail(`Не вдалося відкрити «${target.hint}»`);
      return ok(`Відкрито: ${target.hint}${tab ? ` → ${SETTINGS_TABS.find((t) => t.value === tab).hint}` : ""}`);
    },
  },
  {
    name: "close",
    aliases: ["закрий", "закрити"],
    usage: "/close",
    description: "Закрити всі вікна сайту",
    run: (args, host) => {
      host.closeModals();
      return ok("Усі вікна закрито");
    },
  },
  {
    name: "soundtrack",
    aliases: ["music", "музика", "саундтрек"],
    usage: "/soundtrack [on|off|toggle|volume <0-100|+10|-10>]",
    description: "Фонова музика (без аргументу — увімкнути)",
    examples: ["/soundtrack", "/soundtrack off", "/soundtrack volume 40"],
    complete: (args) => (args.length === 0 ? ON_OFF : []),
    run: (args, host) => {
      const { enabled, volume } = host.getSoundtrack();
      const mode = args[0] ? pick(ON_OFF, args[0])?.value : "on";
      if (!mode) return fail("Використання: /soundtrack [on|off|toggle|volume <0-100>]");
      if (mode === "volume") {
        if (args[1] === undefined) return ok(`Гучність музики: ${Math.round(volume * 100)}%`);
        // «+10» / «-10» — відносно поточної (голосом: «гучніше», «тихіше»)
        const raw = String(args[1]).replace("%", "");
        const relative = /^[+-]/.test(raw);
        const parsed = Number(raw);
        if (!Number.isFinite(parsed)) return fail("Гучність — число від 0 до 100 або +10 / -10");
        const n = relative ? Math.min(100, Math.max(0, Math.round(volume * 100) + parsed)) : parsed;
        if (n < 0 || n > 100) return fail("Гучність — число від 0 до 100");
        host.setSoundtrackVolume(n / 100);
        return ok(`Гучність музики: ${Math.round(n)}%`);
      }
      const next = mode === "toggle" ? !enabled : mode === "on";
      if (next === enabled) return [line(`Музика вже ${enabled ? "грає" : "вимкнена"}`)];
      host.setSoundtrack(next);
      return ok(next ? "♪ Саундтрек увімкнено" : "Саундтрек вимкнено");
    },
  },
  {
    name: "create",
    aliases: ["створи", "створити", "add"],
    usage: "/create weather <місто>",
    description: "Додати картку погоди",
    examples: ["/create weather Львів"],
    complete: (args) => (args.length === 0 ? [WEATHER] : []),
    run: async (args, host) => {
      if (!pick([WEATHER], args[0])) return fail("Використання: /create weather <місто>");
      const rest = args.slice(1).join(" ").trim();
      if (!rest) return fail("Вкажіть місто: /create weather Київ");
      const existing = findCard(host.getCards(), rest);
      if (existing && norm(cardName(existing)).startsWith(norm(rest))) {
        return [line(`«${cardName(existing)}» вже є серед карток`)];
      }
      const { added, message } = await host.addCity(rest);
      return added ? ok(`Додано картку погоди: ${rest}`) : fail(message || `Не вдалося додати «${rest}»`);
    },
  },
  {
    name: "delete",
    aliases: ["видали", "видалити", "remove"],
    usage: "/delete weather <місто|№|all> | /delete history",
    description: "Видалити картку погоди або історію команд",
    examples: ["/delete weather Львів", "/delete weather 3", "/delete weather all"],
    complete: (args, host) => {
      if (args.length === 0) return [WEATHER, HISTORY];
      if (args.length === 1 && pick([WEATHER], args[0])) {
        return [...cardOptions(host).filter((o) => o.value !== "gps"), { value: "all", hint: "Усі власні картки" }];
      }
      return [];
    },
    run: (args, host, ctx) => {
      const what = pick([WEATHER, HISTORY], args[0]);
      if (!what) return fail("Використання: /delete weather <місто|№|all> або /delete history");
      if (what.value === "history") {
        ctx.clearHistory?.();
        return ok("Історію команд очищено");
      }
      const rest = args.slice(1).join(" ").trim();
      if (!rest) return fail("Вкажіть місто або номер: /delete weather 2");
      const cards = host.getCards();

      if (norm(args[1]) === "all") {
        const custom = cards.filter((c) => !c.isMain);
        if (!custom.length) return [line("Власних карток немає")];
        if (norm(args[2]) !== "confirm") {
          return [line(`Буде видалено ${custom.length} карт. Підтвердіть: /delete weather all confirm`, "error")];
        }
        custom.forEach((c) => host.deleteCard(c.id));
        return ok(`Видалено карток: ${custom.length}`);
      }

      const card = findCard(cards, rest);
      if (!card) return fail(`Немає картки «${rest}». Подивіться: /list weather`);
      if (card.isMain) return fail("GPS-картку не видаляють — її вимикають у бета-функціях");
      host.deleteCard(card.id);
      return ok(`Видалено картку: ${cardName(card)}`);
    },
  },
  {
    name: "list",
    aliases: ["список", "ls"],
    usage: "/list [weather|commands]",
    description: "Показати картки погоди",
    complete: (args) =>
      args.length === 0 ? [WEATHER, { value: "commands", hint: "Усі команди", aliases: ["команди"] }] : [],
    run: (args, host) => {
      if (["commands", "команди"].includes(norm(args[0]))) return findCommand("help").run([], host);
      const cards = host.getCards();
      if (!cards.length) return [line("Карток погоди ще немає. Додайте: /create weather Київ")];
      return [
        line(`Картки погоди (${cards.length}):`, "ok"),
        ...cards.map((c, i) => {
          const t = c.current?.temp ?? c.current?.tempNum;
          const temp = t !== undefined && t !== null && t !== "" ? ` · ${t}` : "";
          return line(`  ${i + 1}. ${cardName(c)}${c.isMain ? " (GPS)" : ""}${temp}`);
        }),
      ];
    },
  },
  {
    name: "theme",
    aliases: ["тема"],
    usage: "/theme <dark|light|toggle>",
    description: "Змінити тему сайту",
    complete: (args) => (args.length === 0 ? THEMES : []),
    run: (args, host) => {
      const mode = args[0] ? pick(THEMES, args[0])?.value : "toggle";
      if (!mode) return fail("Використання: /theme <dark|light|toggle>");
      const dark = mode === "toggle" ? !host.isDarkMode() : mode === "dark";
      if (dark === host.isDarkMode()) return [line(`Тема вже ${dark ? "темна" : "світла"}`)];
      host.setDarkMode(dark);
      return ok(`Тема: ${dark ? "темна" : "світла"}`);
    },
  },
  {
    name: "goto",
    aliases: ["перейди", "tp"],
    usage: "/goto <top|hero|weather|map>",
    description: "Прогорнути до розділу сайту",
    complete: (args) => (args.length === 0 ? GOTO_TARGETS : []),
    run: (args, host) => {
      const target = pick(GOTO_TARGETS, args[0]);
      if (!target) return fail(`Куди? ${GOTO_TARGETS.map((t) => t.value).join(", ")}`);
      host.scrollTo(target.value);
      return ok(`→ ${target.hint}`);
    },
  },
  {
    name: "say",
    aliases: ["скажи", "озвуч"],
    usage: "/say <текст>",
    description: "Озвучити текст",
    run: async (args) => {
      const text = args.join(" ").trim();
      if (!text) return fail("Що озвучити? /say Привіт");
      const { speak, isSpeechSupported } = await import("../../utils/weatherSpeech.js");
      if (!isSpeechSupported()) return fail("Браузер не вміє озвучувати текст");
      speak(text).catch(() => {});
      return ok("🔊 Озвучую…");
    },
  },
  {
    name: "clear",
    aliases: ["cls", "очисти"],
    usage: "/clear",
    description: "Очистити консоль",
    run: (args, host, ctx) => {
      ctx.clearLog?.();
      return [];
    },
  },
];

/** Команда за назвою або синонімом. */
export const findCommand = (name) => {
  const q = norm(name);
  if (!q) return null;
  return COMMANDS.find((c) => c.name === q || c.aliases?.includes(q)) || null;
};

/**
 * Виконати рядок команди. ctx — стан консолі між командами
 * ({ clearLog, clearHistory }). Повертає рядки виводу.
 */
export const runCommand = async (input, host, ctx = {}) => {
  const tokens = tokenize(input);
  if (!tokens.length) return [];
  const cmd = findCommand(tokens[0]);
  if (!cmd) return fail(`Невідома команда «${tokens[0]}». Список: /help`);
  if (!host) return fail("Сайт ще завантажується, спробуйте за мить");
  try {
    return (await cmd.run(tokens.slice(1), host, ctx)) || [];
  } catch (err) {
    console.warn("Команда впала:", err);
    return fail(`Помилка: ${err?.message || err}`);
  }
};

/**
 * Підказки для поточного слова. Кожна: { value, hint, text } — text є повним
 * рядком, який стане в поле після вибору підказки.
 */
export const getSuggestions = (input, host) => {
  const raw = String(input || "");
  const tokens = tokenize(raw);
  const endsWithSpace = /\s$/.test(raw);
  const current = endsWithSpace ? "" : tokens[tokens.length - 1] || "";
  const before = endsWithSpace ? tokens : tokens.slice(0, -1);
  const prefix = norm(current);

  let options;
  if (before.length === 0) {
    options = COMMANDS.map((c) => ({ value: c.name, hint: c.description, aliases: c.aliases }));
  } else {
    const cmd = findCommand(before[0]);
    options = cmd?.complete?.(before.slice(1), host) || [];
  }

  return options
    .filter(
      (o) =>
        !prefix ||
        (o.value.toLowerCase().startsWith(prefix) && o.value.toLowerCase() !== prefix) ||
        o.aliases?.some((a) => a.startsWith(prefix) && a !== prefix),
    )
    .slice(0, 12)
    .map((o) => ({
      value: o.value,
      hint: o.hint,
      text: `/${[...before, /\s/.test(o.value) ? `"${o.value}"` : o.value].join(" ")} `,
    }));
};
