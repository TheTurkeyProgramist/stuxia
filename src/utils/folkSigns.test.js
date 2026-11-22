import { getFolkSigns, verifyPrediction, buildFolkContext, WEATHER_SIGNS, CALENDAR_SIGNS } from "./folkSigns";

// Погодинні дані від nowKey на n годин уперед
const makeHours = (start, n, fn = () => ({})) =>
  Array.from({ length: n }, (_, i) => {
    const t = new Date(Date.parse(`${start}:00:00Z`) + i * 3600000).toISOString().slice(0, 16);
    return { fullTime: t, tempNum: 0, cloud_cover: 50, precipitation: 0, precipitation_probability: 0, weather_code: 3, wind_gusts_10m: 5, ...fn(i, t) };
  });

const baseCard = (over = {}) => ({
  current: { tempNum: 0, humidity: "70%", pressure: "1013 hPa", windNum: 1, wind_direction_10m: 90, cloud_cover: 50, weather_code: 3, ...over.current },
  hourly: over.hourly || makeHours("2026-11-22T12", 60),
  daily16: over.daily16 || [
    { fullDate: "2026-11-22", temp_day: "2°C", temp_night: "-2°C", precipitation_sum: 0, weather_code: 3 },
    { fullDate: "2026-11-23", temp_day: "6°C", temp_night: "1°C", precipitation_sum: 0, weather_code: 3 },
  ],
});

describe("folkSigns", () => {
  it("усі id унікальні", () => {
    const ids = [...WEATHER_SIGNS, ...CALENDAR_SIGNS].map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("контекст читає рядки з одиницями", () => {
    const c = buildFolkContext(baseCard(), "2026-11-22T12");
    expect(c.humidity).toBe(70);
    expect(c.pressure).toBe(1013);
    expect(c.month).toBe(11);
  });

  it("північний вітер → холод; моделі кажуть тепліше → не погоджуються", () => {
    const card = baseCard({
      current: { wind_direction_10m: 0, windNum: 6 },
      hourly: makeHours("2026-11-22T12", 48, (i, t) => ({ tempNum: t.startsWith("2026-11-23") ? 4 : 0 })),
    });
    const res = getFolkSigns(card, "2026-11-22T12");
    const s = res.weather.find((x) => x.id === "northWind");
    expect(s).toBeDefined();
    expect(s.verdict).toBe("disagree");
    expect(s.detail.kind).toBe("temp");
  });

  it("південний вітер узимку → відлига, і моделі бачать плюс", () => {
    const card = baseCard({
      current: { tempNum: -1, wind_direction_10m: 190, windNum: 5 },
      hourly: makeHours("2026-11-22T12", 48, (i) => ({ tempNum: i > 20 ? 3 : -1 })),
    });
    const s = getFolkSigns(card, "2026-11-22T12").weather.find((x) => x.id === "southWind");
    expect(s.verdict).toBe("agree");
    expect(s.detail).toEqual({ kind: "range", min: -1, max: 3 });
  });

  it("низький тиск → дощ; сухий прогноз → не погоджуються", () => {
    const card = baseCard({ current: { pressure: "1004 hPa", humidity: "90%" } });
    const s = getFolkSigns(card, "2026-11-22T12").weather.find((x) => x.predicts === "rain");
    expect(s.id).toBe("smokeDown");
    expect(s.verdict).toBe("disagree");
  });

  it("однакові передбачення не дублюються і є ліміт", () => {
    const card = baseCard({ current: { pressure: "1004 hPa", humidity: "90%", wind_direction_10m: 0, windNum: 6 } });
    const res = getFolkSigns(card, "2026-11-22T12", { limit: 1 });
    expect(res.weather.length + res.calendar.length).toBe(1);
  });

  it("сезонні прикмети не спрацьовують поза сезоном (парко — лише влітку)", () => {
    const card = baseCard({ current: { tempNum: 30, dew_point_2m: 20 } });
    expect(getFolkSigns(card, "2026-11-22T12").weather.some((x) => x.id === "stuffy")).toBe(false);
  });

  it("на Введення мороз → прикмета на далеку перспективу", () => {
    const card = baseCard({ current: { tempNum: -4 } });
    const res = getFolkSigns(card, "2026-11-21T12");
    expect(res.calendar.map((x) => x.id)).toEqual(["vvedenniaFrost"]);
    expect(res.calendar[0].verdict).toBe("far");
  });

  it("Катерини звіряються з прогнозом на Миколая", () => {
    const daily16 = [
      { fullDate: "2026-11-24", temp_day: "-1°C", temp_night: "-5°C", precipitation_sum: 2, weather_code: 73 },
      { fullDate: "2026-12-06", temp_day: "-2°C", temp_night: "-6°C", precipitation_sum: 1, weather_code: 71, description: "Сніг" },
    ];
    const card = baseCard({ daily16, hourly: makeHours("2026-11-24T12", 48) });
    const s = getFolkSigns(card, "2026-11-24T12").calendar[0];
    expect(s.id).toBe("katerynyCompare");
    expect(s.verdict).toBe("agree");
    expect(s.detail.date).toBe("2026-12-06");
  });

  it("ясно завтра вдень → згода для «ясної» прикмети", () => {
    const c = buildFolkContext(
      baseCard({ hourly: makeHours("2026-11-22T12", 48, () => ({ cloud_cover: 10 })) }),
      "2026-11-22T12",
    );
    expect(verifyPrediction("clear", c)).toEqual({ verdict: "agree", detail: { kind: "cloud", c: 10 } });
  });

  it("без картки — порожньо", () => {
    expect(getFolkSigns(null, "2026-11-22T12")).toEqual({ calendar: [], weather: [], checked: 0, today: null });
  });
});
