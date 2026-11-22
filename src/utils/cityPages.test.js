import { analyzeSearchQuery } from "./searchAnalyzer";
import {
  CITY_PAGE_LANGS,
  UKRAINE_CITIES_40,
  findCityBySlug,
  getCityLatinName,
  getCityNameForLang,
  getCityPagePath,
  getCitySeoLocalized,
  getCitySlug,
} from "./citiesDatabase";

// Сторінки міст різними мовами: /pohoda/<slug>/ (українська) і /<мова>/<slug>/
describe("сторінки міст різними мовами", () => {
  const konotop = findCityBySlug("konotop");

  it("25 мов, без української і без повторів", () => {
    expect(CITY_PAGE_LANGS.length).toBe(25);
    expect(CITY_PAGE_LANGS).not.toContain("uk");
    expect(new Set(CITY_PAGE_LANGS).size).toBe(25);
  });

  it("латинська назва є в кожного міста бази", () => {
    expect(UKRAINE_CITIES_40.filter((c) => !getCityLatinName(c) || !getCitySlug(c))).toEqual([]);
    expect(getCityLatinName(findCityBySlug("ivano-frankivsk"))).toBe("Ivano-Frankivsk");
  });

  it("кирилиця для be/bg, латиниця для інших", () => {
    expect(getCityNameForLang(konotop, "be")).toBe("Конотоп");
    expect(getCityNameForLang(konotop, "de")).toBe("Konotop");
  });

  it("шляхи сторінок", () => {
    expect(getCityPagePath(konotop, "uk")).toBe("/pohoda/konotop/");
    expect(getCityPagePath(konotop, "en")).toBe("/en/konotop/");
  });

  it("аналізатор відкриває місто з мовної адреси і знає мову", () => {
    const en = analyzeSearchQuery("", "", "/en/konotop/");
    expect(en.isSearchEntry).toBe(true);
    expect(en.cityName).toBe("Конотоп");
    expect(en.pageLang).toBe("en");
    expect(analyzeSearchQuery("", "", "/pohoda/konotop/").pageLang).toBe("uk");
  });

  it("невідома мова чи місто — не сторінка міста", () => {
    expect(analyzeSearchQuery("?", "", "/xx/konotop/").isSearchEntry).toBe(false);
    expect(analyzeSearchQuery("?", "", "/en/nemaie-takoho/").isSearchEntry).toBe(false);
  });

  it("локалізовані SEO-тексти беруться з перекладача", () => {
    const t = (key, vars) => `${key}:${vars?.city ?? ""}:${vars?.brand ?? ""}`;
    const seo = getCitySeoLocalized(konotop, "en", t);
    expect(seo.heading).toBe("heading:Konotop:brand::");
    expect(getCitySeoLocalized(konotop, "uk", t).heading).toBe("Погода в Конотопі");
  });
});
