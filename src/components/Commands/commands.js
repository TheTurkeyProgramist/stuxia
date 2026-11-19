import i18n from "../../i18n/i18n.js";
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
  { value: "settings", get hint() { return i18n.t("ui.commands.nalashtuvannia"); }, aliases: ["параметри", "налаштування"] },
  { value: "shop", get hint() { return i18n.t("ui.commands.mahazynIPidtrymka"); }, aliases: ["магазин"] },
  { value: "help", get hint() { return i18n.t("ui.commands.dovidka"); }, aliases: ["довідка"] },
  { value: "authors", get hint() { return i18n.t("ui.commands.podiakaAvtoram"); }, aliases: ["подяка", "автори"] },
  { value: "account", get hint() { return i18n.t("ui.commands.vkhidAkaunt"); }, aliases: ["акаунт", "профіль"] },
  { value: "ai", get hint() { return i18n.t("ui.commands.shiPomichnyk"); }, aliases: ["ші", "помічник"] },
  { value: "language", get hint() { return i18n.t("ui.commands.movaSaitu"); }, aliases: ["мова"] },
];

export const SETTINGS_TABS = [
  { value: "personalization", get hint() { return i18n.t("ui.commands.personalizatsiia"); } },
  { value: "security", get hint() { return i18n.t("ui.commands.bezpeka"); } },
  { value: "siteSections", get hint() { return i18n.t("ui.commands.sektsiiTaNovyny"); } },
  { value: "modes", get hint() { return i18n.t("ui.commands.rezhymy"); } },
  { value: "filters", get hint() { return i18n.t("ui.commands.filtry"); } },
  { value: "bgMusic", get hint() { return i18n.t("ui.commands.fonovaMuzyka"); } },
  { value: "beta", get hint() { return i18n.t("ui.commands.betaFunktsii"); } },
];

export const GOTO_TARGETS = [
  { value: "top", get hint() { return i18n.t("ui.commands.pochatokStorinky"); }, aliases: ["верх", "початок"] },
  { value: "hero", get hint() { return i18n.t("ui.commands.holovna"); }, aliases: ["головна"] },
  { value: "weather", get hint() { return i18n.t("ui.commands.pohoda"); }, aliases: ["погода"] },
  { value: "map", get hint() { return i18n.t("ui.commands.klimatychnaMapa"); }, aliases: ["мапа", "карта"] },
];

const WEATHER = { value: "weather", get hint() { return i18n.t("ui.commands.kartkaPohody"); }, aliases: ["погода"] };
const HISTORY = { value: "history", get hint() { return i18n.t("ui.commands.istoriiaKomand"); }, aliases: ["історія"] };

const ON_OFF = [
  { value: "on", get hint() { return i18n.t("ui.commands.uvimknuty"); }, aliases: ["увімк", "увімкнути"] },
  { value: "off", get hint() { return i18n.t("ui.commands.vymknuty"); }, aliases: ["вимк", "вимкнути"] },
  { value: "toggle", get hint() { return i18n.t("ui.commands.peremknuty"); }, aliases: ["перемкнути"] },
  { value: "volume", get hint() { return i18n.t("ui.commands.huchnist0100"); }, aliases: ["гучність"] },
];

const THEMES = [
  { value: "dark", get hint() { return i18n.t("ui.commands.temna"); }, aliases: ["темна"] },
  { value: "light", get hint() { return i18n.t("ui.commands.svitla"); }, aliases: ["світла"] },
  { value: "toggle", get hint() { return i18n.t("ui.commands.peremknuty"); }, aliases: ["перемкнути"] },
];

/** Значення з довідника за назвою або синонімом (без регістру). */
const pick = (options, raw) => {
  const q = norm(raw);
  if (!q) return null;
  return options.find((o) => o.value.toLowerCase() === q || o.aliases?.includes(q)) || null;
};

// ── Картки погоди ───────────────────────────────────────────────────────────

const cardName = (card) => card?.locationName || (card?.isMain ? i18n.t("ui.commands.vashaLokatsiia") : i18n.t("ui.commands.bezNazvy"));

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
    get usage() { return i18n.t("ui.commands.helpKomanda"); },
    get description() { return i18n.t("ui.commands.spysokKomandAboDovidka"); },
    complete: (args) => (args.length === 0 ? COMMANDS.map((c) => ({ value: c.name, hint: c.description })) : []),
    run: (args) => {
      if (args[0]) {
        const cmd = findCommand(args[0]);
        if (!cmd) return fail(i18n.t("ui.commands.nemaieKomandySprobuiteHelp", { v0: args[0] }));
        const out = [line(`${cmd.usage} — ${cmd.description}`, "ok")];
        if (cmd.examples) cmd.examples.forEach((ex) => out.push(line(`  ${ex}`)));
        if (cmd.aliases?.length) out.push(line("  " + i18n.t("ui.commands.inshiNazvy", { v0: cmd.aliases.join(", ") })));
        return out;
      }
      return [
        line(i18n.t("ui.commands.komandyStykhiiVybratyEnter"), "ok"),
        ...COMMANDS.map((c) => line(`  ${c.usage} — ${c.description}`)),
      ];
    },
  },
  {
    name: "open",
    aliases: ["відкрий", "відкрити"],
    get usage() { return i18n.t("ui.commands.openVikno"); },
    get description() { return i18n.t("ui.commands.vidkrytyViknoSaitu"); },
    examples: ["/open shop", "/open settings beta", "/open ai"],
    complete: (args) => {
      if (args.length === 0) return OPEN_TARGETS;
      if (args.length === 1 && pick(OPEN_TARGETS, args[0])?.value === "settings") return SETTINGS_TABS;
      return [];
    },
    run: (args, host) => {
      const target = pick(OPEN_TARGETS, args[0]);
      if (!target) {
        return fail(i18n.t("ui.commands.vkazhitVikno", { v0: OPEN_TARGETS.map((t) => t.value).join(", ") }));
      }
      let tab = null;
      if (target.value === "settings" && args[1]) {
        tab = SETTINGS_TABS.find((t) => norm(t.value) === norm(args[1]))?.value;
        if (!tab) return fail(i18n.t("ui.commands.nemaieVkladkyIe", { v0: args[1], v1: SETTINGS_TABS.map((t) => t.value).join(", ") }));
      }
      if (host.openModal(target.value, { tab }) === false) return fail(i18n.t("ui.commands.neVdalosiaVidkryty", { hint: target.hint }));
      return ok(i18n.t("ui.commands.vidkryto", { hint: target.hint, v1: tab ? ` → ${SETTINGS_TABS.find((t) => t.value === tab).hint}` : "" }));
    },
  },
  {
    name: "close",
    aliases: ["закрий", "закрити"],
    usage: "/close",
    get description() { return i18n.t("ui.commands.zakrytyVsiViknaSaitu"); },
    run: (args, host) => {
      host.closeModals();
      return ok(i18n.t("ui.commands.usiViknaZakryto"));
    },
  },
  {
    name: "soundtrack",
    aliases: ["music", "музика", "саундтрек"],
    usage: "/soundtrack [on|off|toggle|volume <0-100|+10|-10>]",
    get description() { return i18n.t("ui.commands.fonovaMuzykaBezArhumentu"); },
    examples: ["/soundtrack", "/soundtrack off", "/soundtrack volume 40"],
    complete: (args) => (args.length === 0 ? ON_OFF : []),
    run: (args, host) => {
      const { enabled, volume } = host.getSoundtrack();
      const mode = args[0] ? pick(ON_OFF, args[0])?.value : "on";
      if (!mode) return fail(i18n.t("ui.commands.vykorystanniaSoundtrackOnOff"));
      if (mode === "volume") {
        if (args[1] === undefined) return ok(i18n.t("ui.commands.huchnistMuzyky", { Math: Math.round(volume * 100) }));
        // «+10» / «-10» — відносно поточної (голосом: «гучніше», «тихіше»)
        const raw = String(args[1]).replace("%", "");
        const relative = /^[+-]/.test(raw);
        const parsed = Number(raw);
        if (!Number.isFinite(parsed)) return fail(i18n.t("ui.commands.huchnistChysloVid0"));
        const n = relative ? Math.min(100, Math.max(0, Math.round(volume * 100) + parsed)) : parsed;
        if (n < 0 || n > 100) return fail(i18n.t("ui.commands.huchnistChysloVid02"));
        host.setSoundtrackVolume(n / 100);
        return ok(i18n.t("ui.commands.huchnistMuzyky", { Math: Math.round(n) }));
      }
      const next = mode === "toggle" ? !enabled : mode === "on";
      if (next === enabled) return [line(i18n.t("ui.commands.muzykaVzhe", { v0: enabled ? "грає" : "вимкнена" }))];
      host.setSoundtrack(next);
      return ok(next ? i18n.t("ui.commands.saundtrekUvimkneno") : i18n.t("ui.commands.saundtrekVymkneno"));
    },
  },
  {
    name: "create",
    aliases: ["створи", "створити", "add"],
    get usage() { return i18n.t("ui.commands.createWeatherMisto"); },
    get description() { return i18n.t("ui.commands.dodatyKartkuPohody"); },
    get examples() { return [i18n.t("ui.commands.createWeatherLviv")]; },
    complete: (args) => (args.length === 0 ? [WEATHER] : []),
    run: async (args, host) => {
      if (!pick([WEATHER], args[0])) return fail(i18n.t("ui.commands.vykorystanniaCreateWeatherMisto"));
      const rest = args.slice(1).join(" ").trim();
      if (!rest) return fail(i18n.t("ui.commands.vkazhitMistoCreateWeather"));
      const existing = findCard(host.getCards(), rest);
      if (existing && norm(cardName(existing)).startsWith(norm(rest))) {
        return [line(i18n.t("ui.commands.vzheIeSeredKartok", { v0: cardName(existing) }))];
      }
      const { added, message } = await host.addCity(rest);
      return added ? ok(i18n.t("ui.commands.dodanoKartkuPohody", { rest: rest })) : fail(message || i18n.t("ui.commands.neVdalosiaDodaty", { rest: rest }));
    },
  },
  {
    name: "delete",
    aliases: ["видали", "видалити", "remove"],
    get usage() { return i18n.t("ui.commands.deleteWeatherMistoAll"); },
    get description() { return i18n.t("ui.commands.vydalytyKartkuPohodyAbo"); },
    get examples() { return [i18n.t("ui.commands.deleteWeatherLviv"), "/delete weather 3", "/delete weather all"]; },
    complete: (args, host) => {
      if (args.length === 0) return [WEATHER, HISTORY];
      if (args.length === 1 && pick([WEATHER], args[0])) {
        return [...cardOptions(host).filter((o) => o.value !== "gps"), { value: "all", hint: i18n.t("ui.commands.usiVlasniKartky") }];
      }
      return [];
    },
    run: (args, host, ctx) => {
      const what = pick([WEATHER, HISTORY], args[0]);
      if (!what) return fail(i18n.t("ui.commands.vykorystanniaDeleteWeatherMisto"));
      if (what.value === "history") {
        ctx.clearHistory?.();
        return ok(i18n.t("ui.commands.istoriiuKomandOchyshcheno"));
      }
      const rest = args.slice(1).join(" ").trim();
      if (!rest) return fail(i18n.t("ui.commands.vkazhitMistoAboNomer"));
      const cards = host.getCards();

      if (norm(args[1]) === "all") {
        const custom = cards.filter((c) => !c.isMain);
        if (!custom.length) return [line(i18n.t("ui.commands.vlasnykhKartokNemaie"))];
        if (norm(args[2]) !== "confirm") {
          return [line(i18n.t("ui.commands.budeVydalenoKartPidtverdit", { length: custom.length }), "error")];
        }
        custom.forEach((c) => host.deleteCard(c.id));
        return ok(i18n.t("ui.commands.vydalenoKartok", { length: custom.length }));
      }

      const card = findCard(cards, rest);
      if (!card) return fail(i18n.t("ui.commands.nemaieKartkyPodyvitsiaList", { rest: rest }));
      if (card.isMain) return fail(i18n.t("ui.commands.gpsKartkuNeVydaliaiut"));
      host.deleteCard(card.id);
      return ok(i18n.t("ui.commands.vydalenoKartku", { v0: cardName(card) }));
    },
  },
  {
    name: "list",
    aliases: ["список", "ls"],
    usage: "/list [weather|commands]",
    get description() { return i18n.t("ui.commands.pokazatyKartkyPohody"); },
    complete: (args) =>
      args.length === 0 ? [WEATHER, { value: "commands", hint: i18n.t("ui.commands.usiKomandy"), aliases: ["команди"] }] : [],
    run: (args, host) => {
      if (["commands", i18n.t("ui.commands.komandy")].includes(norm(args[0]))) return findCommand("help").run([], host);
      const cards = host.getCards();
      if (!cards.length) return [line(i18n.t("ui.commands.kartokPohodyShcheNemaie"))];
      return [
        line(i18n.t("ui.commands.kartkyPohody", { length: cards.length }), "ok"),
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
    get description() { return i18n.t("ui.commands.zminytyTemuSaitu"); },
    complete: (args) => (args.length === 0 ? THEMES : []),
    run: (args, host) => {
      const mode = args[0] ? pick(THEMES, args[0])?.value : "toggle";
      if (!mode) return fail(i18n.t("ui.commands.vykorystanniaThemeDarkLight"));
      const dark = mode === "toggle" ? !host.isDarkMode() : mode === "dark";
      if (dark === host.isDarkMode()) return [line(i18n.t("ui.commands.temaVzhe", { v0: dark ? "темна" : "світла" }))];
      host.setDarkMode(dark);
      return ok(i18n.t("ui.commands.tema", { v0: dark ? "темна" : "світла" }));
    },
  },
  {
    name: "goto",
    aliases: ["перейди", "tp"],
    usage: "/goto <top|hero|weather|map>",
    get description() { return i18n.t("ui.commands.prohornutyDoRozdiluSaitu"); },
    complete: (args) => (args.length === 0 ? GOTO_TARGETS : []),
    run: (args, host) => {
      const target = pick(GOTO_TARGETS, args[0]);
      if (!target) return fail(i18n.t("ui.commands.kudy", { v0: GOTO_TARGETS.map((t) => t.value).join(", ") }));
      host.scrollTo(target.value);
      return ok(`→ ${target.hint}`);
    },
  },
  {
    name: "say",
    aliases: ["скажи", "озвуч"],
    get usage() { return i18n.t("ui.commands.sayTekst"); },
    get description() { return i18n.t("ui.commands.ozvuchytyTekst"); },
    run: async (args) => {
      const text = args.join(" ").trim();
      if (!text) return fail(i18n.t("ui.commands.shchoOzvuchytySayPryvit"));
      const { speak, isSpeechSupported } = await import("../../utils/weatherSpeech.js");
      if (!isSpeechSupported()) return fail(i18n.t("ui.commands.brauzerNeVmiieOzvuchuvaty"));
      speak(text).catch(() => {});
      return ok(i18n.t("ui.commands.ozvuchuiu"));
    },
  },
  {
    name: "clear",
    aliases: ["cls", "очисти"],
    usage: "/clear",
    get description() { return i18n.t("ui.commands.ochystytyKonsol"); },
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
  if (!cmd) return fail(i18n.t("ui.commands.nevidomaKomandaSpysokHelp", { v0: tokens[0] }));
  if (!host) return fail(i18n.t("ui.commands.saitShcheZavantazhuietsiaSprobuite"));
  try {
    return (await cmd.run(tokens.slice(1), host, ctx)) || [];
  } catch (err) {
    console.warn("Команда впала:", err);
    return fail(i18n.t("ui.commands.pomylka", { v0: err?.message || err }));
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
