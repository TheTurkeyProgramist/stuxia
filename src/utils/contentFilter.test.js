import {
  getNewsBlockReason,
  getNewsFilterText,
  NEWS_FILTER_FAST_DESCRIPTION_CHARS,
} from "./contentFilter";

// Налаштування передаємо явно — тести не залежать від збережених у браузері
const prefs = (overrides = {}) => ({
  enabled: true,
  softMode: false,
  categories: {},
  customWords: [],
  ...overrides,
});

describe("getNewsFilterText", () => {
  test("ретельний режим — заголовок і весь опис як є", () => {
    const item = { title: "Заголовок", description: "<p>Опис</p>" };
    expect(getNewsFilterText(item, true)).toBe("Заголовок <p>Опис</p>");
  });

  test("швидкий режим прибирає HTML і зайві пробіли", () => {
    const item = { title: "Заголовок", description: "<p>Перший</p>\n\n<b>другий</b>" };
    expect(getNewsFilterText(item, false)).toBe("Заголовок Перший другий");
  });

  test("швидкий режим бере лише початок довгого опису", () => {
    const item = { title: "Т", description: "а".repeat(NEWS_FILTER_FAST_DESCRIPTION_CHARS + 300) };
    expect(getNewsFilterText(item, false)).toBe(`Т ${"а".repeat(NEWS_FILTER_FAST_DESCRIPTION_CHARS)}`);
  });

  test("без опису чи заголовка не падає", () => {
    expect(getNewsFilterText({}, false)).toBe(" ");
    expect(getNewsFilterText({ title: "Т" }, true)).toBe("Т ");
  });
});

describe("getNewsBlockReason", () => {
  test("власне слово блокує новину, повторна перевірка дає той самий результат (кеш)", () => {
    const p = prefs({ customWords: ["кабачок"] });
    const first = getNewsBlockReason("Новина про кабачок", p);
    expect(first?.type).toBe("custom");
    expect(getNewsBlockReason("Новина про кабачок", p)).toEqual(first);
  });

  test("кеш враховує налаштування: без слова та сама новина проходить", () => {
    expect(getNewsBlockReason("Новина про кабачок", prefs())).toBeNull();
  });

  test("вимкнений фільтр нічого не блокує", () => {
    expect(getNewsBlockReason("Новина про кабачок", prefs({ enabled: false, customWords: ["кабачок"] }))).toBeNull();
  });

  test("слово далеко в довгому описі швидкий режим не бачить, а ретельний — бачить", () => {
    const p = prefs({ customWords: ["кабачок"] });
    const item = { title: "Погода", description: `${"x ".repeat(NEWS_FILTER_FAST_DESCRIPTION_CHARS)} кабачок` };
    expect(getNewsBlockReason(getNewsFilterText(item, false), p)).toBeNull();
    expect(getNewsBlockReason(getNewsFilterText(item, true), p)?.type).toBe("custom");
  });
});
