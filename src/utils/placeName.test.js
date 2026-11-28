import { describe, expect, test } from "bun:test";
import { displayPlace, shortPlace } from "./placeName.js";

describe("shortPlace", () => {
  test.each([
    ["Пекін, Beijing, Beijing Shi (CN)", "Пекін (CN)"],
    ["Київ, Україна (без GPS)", "Київ (без GPS)"],
    ["Жмеринка (Вінницька обл., Україна)", "Жмеринка"],
    ["北京, 中国（无 GPS）", "北京（无 GPS）"],
    ["Київ", "Київ"],
  ])("%s → %s", (full, short) => expect(shortPlace(full)).toBe(short));

  test("однакові короткі назви лишаються повними", () => {
    const all = ["Попівка, Сумська (UA)", "Попівка, Полтавська (UA)"];
    expect(displayPlace(all[0], true, all)).toBe(all[0]);
    expect(displayPlace(all[0], false)).toBe(all[0]);
  });
});
