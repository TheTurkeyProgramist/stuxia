import { UKRAINE_CITIES_40 } from "./citiesDatabase";
import { rankCityName, searchLocalCities, sortSuggestionsByQuery } from "./citySearch";

const names = (list) => list.map((c) => c.name);

describe("searchLocalCities", () => {
  it("shows cities that start with the query first and drops matches inside case forms", () => {
    const found = names(searchLocalCities(UKRAINE_CITIES_40, "ко"));
    // Спершу ті, що починаються з «ко» (у порядку бази), потім — «ко» всередині назви
    expect(found.slice(0, 7).sort()).toEqual(
      ["Козятин", "Ковель", "Коломия", "Конотоп", "Коростень", "Костопіль", "Костянтинівка"].sort(),
    );
    expect(found[0]).toBe("Конотоп");
    expect(found.slice(7)).toEqual(["Миколаїв", "Нікополь", "Синельникове", "Старокостянтинів"]);
    // «ко» є лише у відмінковій формі «харкові» — Харкова тут бути не має
    expect(found).not.toContain("Харків");
  });

  it("finds the second word of a compound name", () => {
    expect(names(searchLocalCities(UKRAINE_CITIES_40, "під"))).toEqual([]);
    expect(names(searchLocalCities(UKRAINE_CITIES_40, "под"))).toContain("Кам'янець-Подільський");
    expect(names(searchLocalCities(UKRAINE_CITIES_40, "буда"))).toEqual(["Середина-Буда"]);
  });

  it("still finds a city by its Latin name from the start", () => {
    expect(names(searchLocalCities(UKRAINE_CITIES_40, "konot"))).toEqual(["Конотоп"]);
  });
});

describe("rankCityName", () => {
  it("ranks start, case form, next word and inside", () => {
    expect(rankCityName("Конотоп", [], "ко")).toBe(0);
    expect(rankCityName("Суми", ["сумах"], "сума")).toBe(1);
    expect(rankCityName("Кривий Ріг", [], "рі")).toBe(2);
    expect(rankCityName("Мукачево", [], "ач")).toBe(3);
    expect(rankCityName("Харків", ["харкові"], "ко")).toBe(-1);
  });
});

describe("sortSuggestionsByQuery", () => {
  it("lifts geocoder results that start with the query above matches inside a name", () => {
    const list = [{ name: "Мукачево", isLocal: true }, { name: "Ачинськ" }];
    expect(names(sortSuggestionsByQuery(list, "ач"))).toEqual(["Ачинськ", "Мукачево"]);
  });

  it("keeps database cities before geocoder ones within the same rank", () => {
    const list = [{ name: "Конья" }, { name: "Конотоп", isLocal: true }];
    expect(names(sortSuggestionsByQuery(list, "ко"))).toEqual(["Конотоп", "Конья"]);
  });
});
