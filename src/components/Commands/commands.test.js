import { tokenize, findCommand, findCard, runCommand, getSuggestions } from "./commands";

const makeHost = (overrides = {}) => {
  const state = {
    dark: false,
    music: false,
    volume: 0.2,
    opened: [],
    closed: 0,
    deleted: [],
    added: [],
    scrolled: [],
    cards: [
      { id: "gps", isMain: true, locationName: "Конотоп", current: { temp: "+3°" } },
      { id: "a", locationName: "Київ, Україна", current: { temp: "+5°" } },
      { id: "b", locationName: "Львів, Україна", current: null },
    ],
  };
  const host = {
    openModal: (name, opts) => state.opened.push({ name, ...opts }),
    closeModals: () => state.closed++,
    getSoundtrack: () => ({ enabled: state.music, volume: state.volume }),
    setSoundtrack: (v) => (state.music = v),
    setSoundtrackVolume: (v) => (state.volume = v),
    getCards: () => state.cards,
    addCity: async (name) => {
      if (name === "Атлантида") return { added: false, message: "Місто не знайдено в базі Open-Meteo" };
      state.added.push(name);
      return { added: true, message: "" };
    },
    deleteCard: (id) => state.deleted.push(id),
    isDarkMode: () => state.dark,
    setDarkMode: (v) => (state.dark = v),
    scrollTo: (t) => state.scrolled.push(t),
    ...overrides,
  };
  return { host, state };
};

describe("commands", () => {
  test("tokenize прибирає слеш і тримає лапки", () => {
    expect(tokenize("/create weather Нью Йорк")).toEqual(["create", "weather", "Нью", "Йорк"]);
    expect(tokenize('/say "привіт світ" ще')).toEqual(["say", "привіт світ", "ще"]);
    expect(tokenize("   ")).toEqual([]);
  });

  test("команди знаходяться за синонімами", () => {
    expect(findCommand("ВІДКРИЙ").name).toBe("open");
    expect(findCommand("music").name).toBe("soundtrack");
    expect(findCommand("nope")).toBeNull();
  });

  test("findCard — за номером, назвою, gps", () => {
    const { state } = makeHost();
    expect(findCard(state.cards, "2").id).toBe("a");
    expect(findCard(state.cards, "льв").id).toBe("b");
    expect(findCard(state.cards, "gps").id).toBe("gps");
    expect(findCard(state.cards, "9")).toBeNull();
  });

  test("/open відкриває вікно і вкладку налаштувань", async () => {
    const { host, state } = makeHost();
    const out = await runCommand("/open магазин", host);
    expect(out[0].kind).toBe("ok");
    await runCommand("/open settings beta", host);
    expect(state.opened).toEqual([{ name: "shop", tab: null }, { name: "settings", tab: "beta" }]);
    expect((await runCommand("/open settings zzz", host))[0].kind).toBe("error");
    expect((await runCommand("/open", host))[0].kind).toBe("error");
  });

  test("/soundtrack без аргументу вмикає, volume задає гучність", async () => {
    const { host, state } = makeHost();
    await runCommand("/soundtrack", host);
    expect(state.music).toBe(true);
    await runCommand("/soundtrack toggle", host);
    expect(state.music).toBe(false);
    await runCommand("/soundtrack volume 40", host);
    expect(state.volume).toBe(0.4);
    expect((await runCommand("/soundtrack volume 400", host))[0].kind).toBe("error");
  });

  test("/create weather додає місто, дубль не додає", async () => {
    const { host, state } = makeHost();
    await runCommand("/create weather Одеса", host);
    expect(state.added).toEqual(["Одеса"]);
    await runCommand("/create weather Київ", host);
    expect(state.added).toEqual(["Одеса"]);
  });

  test("/create weather показує причину відмови в консолі", async () => {
    const { host } = makeHost();
    const out = await runCommand("/create weather Атлантида", host);
    expect(out).toEqual([{ text: "Місто не знайдено в базі Open-Meteo", kind: "error" }]);
  });

  test("/create news більше немає", async () => {
    const { host } = makeHost();
    const out = await runCommand("/create news", host);
    expect(out[0].kind).toBe("error");
  });

  test("/delete weather не чіпає GPS і просить підтвердження для all", async () => {
    const { host, state } = makeHost();
    expect((await runCommand("/delete weather gps", host))[0].kind).toBe("error");
    await runCommand("/delete weather 2", host);
    expect(state.deleted).toEqual(["a"]);
    await runCommand("/delete weather all", host);
    expect(state.deleted).toEqual(["a"]);
    await runCommand("/delete weather all confirm", host);
    expect(state.deleted).toEqual(["a", "a", "b"]);
  });

  test("/theme і /goto", async () => {
    const { host, state } = makeHost();
    await runCommand("/theme dark", host);
    expect(state.dark).toBe(true);
    await runCommand("/goto мапа", host);
    expect(state.scrolled).toEqual(["map"]);
  });

  test("невідома команда — помилка, а не виняток", async () => {
    const { host } = makeHost();
    const out = await runCommand("/fly", host);
    expect(out[0].kind).toBe("error");
  });

  test("підказки: назви команд, аргументи, картки", () => {
    const { host } = makeHost();
    expect(getSuggestions("/so", host).map((s) => s.value)).toEqual(["soundtrack"]);
    expect(getSuggestions("/open s", host).map((s) => s.value)).toEqual(["settings", "shop"]);
    expect(getSuggestions("/open s", host)[1].text).toBe("/open shop ");
    expect(getSuggestions("/create ", host).map((s) => s.value)).toEqual(["weather"]);
    expect(getSuggestions("/delete weather ", host).map((s) => s.value)).toEqual(["Київ", "Львів", "all"]);
  });
});
