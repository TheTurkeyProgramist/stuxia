import { getDefaultUrgentWords, isUrgentNews } from "./newsPersonal.js";

describe("термінові новини різними мовами", () => {
  test("китайська без пробілів", () => {
    expect(isUrgentNews({ title: "突发：北京暴雨", description: "" }, getDefaultUrgentWords("zh"))).toBe(true);
  });
  test("німецька", () => {
    expect(isUrgentNews({ title: "Eilmeldung: Hochwasser", description: "" }, getDefaultUrgentWords("de"))).toBe(true);
  });
  test("українські базові слова лишаються для будь-якої мови", () => {
    expect(getDefaultUrgentWords("fr")).toContain("терміново");
    expect(getDefaultUrgentWords("uk").length).toBe(9);
  });
  test("звичайна новина не термінова", () => {
    expect(isUrgentNews({ title: "Sunny weekend ahead", description: "" }, getDefaultUrgentWords("en"))).toBe(false);
  });
});
