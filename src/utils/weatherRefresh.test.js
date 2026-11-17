import {
  FULL_REFRESH_MS,
  LIGHT_REFRESH_MS,
  applyLightCurrent,
  buildLightCurrentUrl,
  cityYesterday,
  pickRefreshKind,
} from "./weatherRefresh";

const NOW = Date.parse("2026-11-17T10:30:00Z"); // 12:30 у Києві (UTC+2)
const KYIV = 7200;

const card = (over = {}) => ({
  id: 1,
  windUnit: "ms",
  utcOffsetSeconds: KYIV,
  fetchedAt: NOW - 30 * 60 * 1000,
  updatedAt: NOW - 30 * 60 * 1000,
  current: { temp: "5°C", tempNum: 5, feels_like: "2°C", pressure: "1010 hPa", visibility: 9000 },
  daily16: [{ fullDate: "2026-11-16" }],
  hourly: [
    { fullTime: "2026-11-17T12:00", pressure_msl: 1015.4, visibility: 4000, snow_depth: 0.02, dew_point_2m: 1 },
  ],
  ...over,
});

describe("pickRefreshKind", () => {
  it("does nothing while data is fresh", () => {
    expect(pickRefreshKind(card(), NOW)).toBeNull();
  });
  it("asks for a light refresh after an hour", () => {
    const old = NOW - LIGHT_REFRESH_MS;
    expect(pickRefreshKind(card({ fetchedAt: old, updatedAt: old }), NOW)).toBe("light");
  });
  it("a recent light refresh postpones the next one", () => {
    expect(pickRefreshKind(card({ fetchedAt: NOW - 2 * 3600e3, updatedAt: NOW - 60e3 }), NOW)).toBeNull();
  });
  it("asks for a full refresh after ~3 hours, on a new day or for old cards", () => {
    expect(pickRefreshKind(card({ fetchedAt: NOW - FULL_REFRESH_MS, updatedAt: NOW }), NOW)).toBe("full");
    expect(pickRefreshKind(card({ daily16: [{ fullDate: "2026-11-15" }] }), NOW)).toBe("full");
    expect(pickRefreshKind(card({ fetchedAt: undefined }), NOW)).toBe("full");
    expect(pickRefreshKind(card({ windUnit: undefined }), NOW)).toBe("full");
    expect(pickRefreshKind(card({ current: null }), NOW)).toBe("full");
  });
});

describe("cityYesterday", () => {
  it("uses the city's own time zone", () => {
    // 23:30 UTC 17.11 — у Києві вже 18.11, тож «вчора» там 17.11
    expect(cityYesterday({ utcOffsetSeconds: KYIV }, Date.parse("2026-11-17T23:30:00Z"))).toBe("2026-11-17");
    expect(cityYesterday({ utcOffsetSeconds: -18000 }, Date.parse("2026-11-17T23:30:00Z"))).toBe("2026-11-16");
  });
});

describe("applyLightCurrent", () => {
  const fresh = {
    time: "2026-11-17T12:30",
    temperature_2m: 7.4,
    apparent_temperature: 4.6,
    relative_humidity_2m: 71,
    wind_speed_10m: 3.2,
    wind_direction_10m: 200,
    wind_gusts_10m: 6,
    cloud_cover: 40,
    weather_code: 2,
    is_day: 1,
  };

  it("updates «now» and takes slow values from this hour's forecast", () => {
    const c = card();
    const next = applyLightCurrent(c, fresh, {
      now: NOW,
      decorate: (code) => ({ iconPlaceholder: `icon-${code}` }),
    });
    expect(next.current.temp).toBe("7°C");
    expect(next.current.feels_like).toBe("5°C");
    expect(next.current.humidity).toBe("71%");
    expect(next.current.windNum).toBe(3.2);
    expect(next.current.pressure).toBe("1015 hPa");
    expect(next.current.visibility).toBe(4000);
    expect(next.current.snow_depth).toBe(0.02);
    expect(next.current.iconPlaceholder).toBe("icon-2");
    expect(next.updatedAt).toBe(NOW);
    expect(next.fetchedAt).toBe(c.fetchedAt); // повний прогноз не оновлювався
    expect(next.hourly).toBe(c.hourly);
    expect(c.current.temp).toBe("5°C"); // не мутує
  });

  it("ignores an empty response", () => {
    const c = card();
    expect(applyLightCurrent(c, { time: "x" })).toBe(c);
    expect(applyLightCurrent(c, null)).toBe(c);
  });
});

describe("buildLightCurrentUrl", () => {
  it("requests only the current block (9 variables = 1 Open-Meteo call)", () => {
    const url = new URL(buildLightCurrentUrl(51.24, 33.2));
    expect(url.searchParams.get("current").split(",")).toHaveLength(9);
    expect(url.searchParams.get("hourly")).toBeNull();
    expect(url.searchParams.get("forecast_days")).toBe("1");
  });
});
