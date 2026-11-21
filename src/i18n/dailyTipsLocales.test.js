import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Підказки «Повітря / ожеледиця / сніг на машині / світло» мають бути в усіх мовах із тими самими {{змінними}}
const dir = join(import.meta.dir, "locales");
const files = readdirSync(dir).filter((f) => f.endsWith(".json"));
const load = (f) => JSON.parse(readFileSync(join(dir, f), "utf8")).newsWeather?.dailyTips;
const vars = (s) => (String(s).match(/\{\{\w+\}\}/g) || []).sort().join(",");

describe("newsWeather.dailyTips у локалях", () => {
  const uk = load("uk.json");
  it("українська має ключі", () => expect(Object.keys(uk).length).toBeGreaterThan(30));
  for (const f of files) {
    it(`${f}: усі ключі й змінні збігаються з uk`, () => {
      const tips = load(f);
      expect(tips).toBeDefined();
      expect(Object.keys(tips).sort()).toEqual(Object.keys(uk).sort());
      for (const k of Object.keys(uk)) expect(vars(tips[k])).toBe(vars(uk[k]));
    });
  }
});
