// Запасної мови немає (fallbackLng: false): якщо в якійсь мові бракує ключа,
// людина побачить сам ключ замість тексту. Тест не дає такому потрапити в збірку.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(import.meta.dir, "locales");
const flat = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" ? flat(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
const keysOf = (file) => new Set(flat(JSON.parse(readFileSync(join(dir, file), "utf8"))));

const ukKeys = keysOf("uk.json");
const others = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "uk.json");

describe("усі мови мають повний набір ключів", () => {
  test.each(others)("%s", (file) => {
    const keys = keysOf(file);
    const missing = [...ukKeys].filter((k) => !keys.has(k));
    const extra = [...keys].filter((k) => !ukKeys.has(k));
    expect(missing).toEqual([]);
    expect(extra).toEqual([]);
  });
});
