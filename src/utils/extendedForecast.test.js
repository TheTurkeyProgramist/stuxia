import { parseEc46, pickExtensionDays, buildExtendedUrl } from "./extendedForecast";

// Ансамбль із 10 членів: значення v(member, day)
const makeJson = (days, v) => {
  const daily = { time: days };
  const vars = {
    temperature_2m_max: (m, i) => 5 + m - i,
    temperature_2m_min: (m, i) => -2 + m - i,
    precipitation_sum: (m) => (m < 7 ? 2 : 0),
    snowfall_sum: () => 0,
    weather_code: () => 61,
    wind_speed_10m_max: () => 4,
    wind_gusts_10m_max: () => 9,
    ...v,
  };
  for (const [name, fn] of Object.entries(vars)) {
    daily[name] = days.map((_, i) => fn(0, i));
    for (let m = 1; m < 10; m++) daily[`${name}_member${String(m).padStart(2, "0")}`] = days.map((_, i) => fn(m, i));
  }
  return { daily };
};

describe("extendedForecast", () => {
  it("URL — модель EC46, 30 днів, м/с", () => {
    const url = new URL(buildExtendedUrl(51.24, 33.2));
    expect(url.hostname).toBe("seasonal-api.open-meteo.com");
    expect(url.searchParams.get("models")).toBe("ecmwf_ec46");
    expect(url.searchParams.get("wind_speed_unit")).toBe("ms");
  });

  it("медіана, розкид і частка членів з опадами", () => {
    const [d] = parseEc46(makeJson(["2026-12-10"]));
    expect(d.fullDate).toBe("2026-12-10");
    expect(d.tmax).toBe(9.5); // медіана 5..14
    expect(d.tmaxLo).toBe(5.9);
    expect(d.tmaxHi).toBe(13.1);
    expect(d.precipProb).toBe(70);
    expect(d.members).toBe(10);
    expect(d.code).toBe(80); // дощ ≈2 мм у більшості членів
  });

  it("мороз і сніг → сніговий код; сухо → ясно", () => {
    const snowy = parseEc46(makeJson(["2026-12-10"], { temperature_2m_max: () => -3, snowfall_sum: () => 2 }))[0];
    expect(snowy.code).toBe(71);
    const dry = parseEc46(makeJson(["2026-12-10"], { precipitation_sum: () => 0 }))[0];
    expect(dry.code).toBe(1);
  });

  it("обрізає до 28 днів від сьогодні після останнього дня звичайного прогнозу", () => {
    const ext = Array.from({ length: 30 }, (_, i) => ({
      fullDate: new Date(Date.parse("2026-11-22T00:00:00Z") + i * 86400000).toISOString().slice(0, 10),
    }));
    const picked = pickExtensionDays(ext, "2026-12-07", "2026-11-22");
    expect(picked[0].fullDate).toBe("2026-12-08");
    expect(picked.at(-1).fullDate).toBe("2026-12-19");
    expect(picked.length).toBe(12);
  });

  it("порожня відповідь — порожньо", () => {
    expect(parseEc46(null)).toEqual([]);
    expect(parseEc46({ error: true })).toEqual([]);
  });
});
