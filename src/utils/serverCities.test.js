import { SERVER_CITIES, findServerCity, serverCityBySlug } from "./serverCities";

describe("serverCities", () => {
  it("covers every city of the database with a unique slug", () => {
    const slugs = SERVER_CITIES.map((c) => c.slug);
    expect(slugs.length).toBe(86);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("puts Kyiv, oblast centres and Konotop into the fast tier", () => {
    const fast = SERVER_CITIES.filter((c) => c.tier === "fast").map((c) => c.name);
    expect(fast).toHaveLength(23);
    expect(fast).toContain("Конотоп");
    expect(serverCityBySlug("kyiv").tier).toBe("fast");
    expect(serverCityBySlug("buryn").tier).toBe("slow");
    expect(serverCityBySlug("nope")).toBeNull();
  });

  it("snaps nearby coordinates to the nearest server city", () => {
    expect(findServerCity(50.45, 30.52).slug).toBe("kyiv"); // точно з бази
    expect(findServerCity(50.47, 30.55).slug).toBe("kyiv"); // GPS за ~3 км
    expect(findServerCity(51.2325, 33.2004).slug).toBe("konotop"); // геокодер Open-Meteo
    expect(findServerCity(50.0, 31.0)).toBeNull(); // поле між містами
    expect(findServerCity("x", 1)).toBeNull();
  });
});
