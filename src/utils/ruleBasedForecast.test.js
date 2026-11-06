import {
  analyzeHourlyTimeline,
  analyzeWeeklyTrends,
  analyzeAtmosphereAndHealth,
  generateActionableAdvice,
  generateRuleBasedForecast,
  upcomingDays,
} from "./ruleBasedForecast";

// Година прогнозу з розумними значеннями за замовчуванням
const hour = (time, overrides = {}) => ({
  time,
  tempNum: 10,
  windNum: 3,
  wind_gusts_10m: 5,
  precipitation_probability: 0,
  precipitation: 0,
  visibility: 20000,
  description: "Ясно",
  ...overrides,
});

const adviceTypes = (items) => items.map((i) => i.type);

describe("analyzeHourlyTimeline", () => {
  it("detects rain from precipitation_probability, not only from the description", () => {
    const result = analyzeHourlyTimeline([
      hour("09:00", { precipitation_probability: 80 }),
      hour("15:00"),
    ]);
    expect(result.badges).toContain("Дощ у першій половині дня");
  });

  it("uses real wind gusts instead of average wind speed", () => {
    const result = analyzeHourlyTimeline([hour("12:00", { windNum: 8, wind_gusts_10m: 18 })]);
    expect(result.maxWind).toBe(8);
    expect(result.maxGust).toBe(18);
    expect(result.isWindStrong).toBe(true);
    expect(result.badges).toContain("Пориви вітру до 18 м/с");
  });

  it("flags ice risk when precipitation falls around 0°", () => {
    const result = analyzeHourlyTimeline([hour("07:00", { tempNum: 0, precipitation: 1.2 })]);
    expect(result.iceRisk).toBe(true);
    expect(result.badges).toContain("Ризик ожеледиці");
  });

  it("does not flag ice risk for dry frost", () => {
    const result = analyzeHourlyTimeline([hour("07:00", { tempNum: -1 })]);
    expect(result.iceRisk).toBe(false);
  });

  it("reports the first foggy hour", () => {
    const result = analyzeHourlyTimeline([hour("05:00"), hour("06:00", { visibility: 400 })]);
    expect(result.fog).toEqual({ time: "06:00", visibilityKm: 0.4 });
  });
});

describe("analyzeWeeklyTrends", () => {
  it("counts rainy days from precipitation_probability_max", () => {
    const days = Array.from({ length: 5 }, (_, i) => ({
      date: `0${i + 1}.11`,
      temp_day: "10°C",
      temp_night: "5°C",
      precipitation_probability_max: 70,
      description: "Хмарно",
    }));
    expect(analyzeWeeklyTrends(days).weekSummaryText).toContain("дощовим");
  });
});

describe("analyzeAtmosphereAndHealth", () => {
  it("warns about UV using the uv_index field", () => {
    const notes = analyzeAtmosphereAndHealth({ pressure: 1013, humidity: 50, uv_index: 7 });
    expect(notes.map((n) => n.type)).toContain("uvi");
  });
});

describe("upcomingDays", () => {
  it("drops days before today", () => {
    const now = new Date(2026, 10, 5, 12);
    const days = [{ fullDate: "2026-11-04" }, { fullDate: "2026-11-05" }, { fullDate: "2026-11-06" }];
    expect(upcomingDays(days, now).map((d) => d.fullDate)).toEqual(["2026-11-05", "2026-11-06"]);
  });
});

describe("generateActionableAdvice", () => {
  const calm = analyzeHourlyTimeline([hour("12:00")]);

  it("picks clothing by feels-like temperature", () => {
    const items = generateActionableAdvice({ temp: 3, feels_like: -4 }, { temp_day: 4, temp_night: 1 }, calm);
    const cloth = items.find((i) => i.type === "cloth");
    expect(cloth.text).toContain("пуховик");
    expect(cloth.text).toContain("Відчувається як -4°C");
  });

  it("suggests layers for a large daily range", () => {
    const items = generateActionableAdvice({ temp: 5, feels_like: 5 }, { temp_day: 12, temp_night: -1 }, calm);
    expect(items.find((i) => i.type === "cloth").text).toContain("шарами");
    expect(adviceTypes(items)).toContain("frost");
  });

  it("warns about ice and skips the generic wet-road tip", () => {
    const icy = analyzeHourlyTimeline([hour("08:00", { tempNum: 0, precipitation: 2, description: "Дощ" })]);
    const types = adviceTypes(generateActionableAdvice({ temp: 0, feels_like: -3 }, { temp_day: 1, temp_night: -2 }, icy));
    expect(types).toContain("ice");
    expect(types).not.toContain("car");
  });

  it("does not suggest outdoor sport in bad weather", () => {
    const windy = analyzeHourlyTimeline([hour("12:00", { windNum: 12, wind_gusts_10m: 20 })]);
    const types = adviceTypes(generateActionableAdvice({ temp: 10, feels_like: 6 }, { temp_day: 11, temp_night: 6 }, windy));
    expect(types).toContain("home");
    expect(types).not.toContain("sport");
  });

  it("adds snow and fog advice", () => {
    const foggy = analyzeHourlyTimeline([hour("06:00", { visibility: 300, description: "Сніг" })]);
    const types = adviceTypes(generateActionableAdvice({ temp: -2, feels_like: -5 }, { temp_day: -1, temp_night: -4 }, foggy));
    expect(types).toContain("snow");
    expect(types).toContain("fog");
  });
});

describe("generateRuleBasedForecast", () => {
  it("analyses from today, ignoring yesterday", () => {
    const now = new Date(2026, 10, 5, 12);
    const forecast = generateRuleBasedForecast(
      {
        locationName: "Київ",
        current: { temp: 8, feels_like: 8 },
        hourly: [hour("12:00")],
        daily16: [
          { fullDate: "2026-11-04", temp_day: "-20°C", temp_night: "-25°C" },
          { fullDate: "2026-11-05", temp_day: "9°C", temp_night: "4°C" },
          { fullDate: "2026-11-06", temp_day: "10°C", temp_night: "5°C" },
          { fullDate: "2026-11-07", temp_day: "11°C", temp_night: "5°C" },
        ],
      },
      { now },
    );
    expect(forecast.dayNight.dayTemp).toBe(9);
    expect(forecast.weeklyData.jumpBadge).toBe("Стабільний тиждень");
  });
});
