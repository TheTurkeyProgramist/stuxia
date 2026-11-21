import { SERVER_CITIES } from "./serverCities";

// Вартість «викликів» Open-Meteo (виміряно X-RateLimit-Cost): прогноз 3,64 + консенсус 4 моделей 3,2
const FULL_COST = 6.84;
const NOW_COST = 1; // «зараз» одним запитом: 1 на місто щогодини
const SEASONAL_COST = 1.51;
const KV_WRITES_LIMIT = 1000; // безкоштовний Workers KV: записів на добу

describe("серверні міста: добовий бюджет Open-Meteo", () => {
  const fast = SERVER_CITIES.filter((c) => c.tier === "fast").length;
  const slow = SERVER_CITIES.length - fast;

  it("не перевищує 9 000 «викликів» на добу, навіть якщо дивляться всі міста", () => {
    const cost =
      fast * 8 * FULL_COST + slow * 3 * FULL_COST + SERVER_CITIES.length * (24 * NOW_COST + SEASONAL_COST);
    expect(cost).toBeLessThanOrEqual(9000);
  });

  it("вкладається в безкоштовний ліміт записів KV", () => {
    expect(fast * 8 + slow * 3 + SERVER_CITIES.length + 24).toBeLessThanOrEqual(KV_WRITES_LIMIT);
  });

  it("slug-и унікальні й непорожні", () => {
    const slugs = SERVER_CITIES.map((c) => c.slug);
    expect(slugs.every(Boolean)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
