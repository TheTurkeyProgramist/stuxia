import { voiceToCommand, cityFromSpeech, normalizeSpeech } from "./voiceCommands";

describe("voiceToCommand", () => {
  const cases = [
    ["Увімкни музику.", "/soundtrack on"],
    ["включи, будь ласка, саундтрек", "/soundtrack on"],
    ["Вимкни музику", "/soundtrack off"],
    ["стоп", "/soundtrack off"],
    ["гучність 30", "/soundtrack volume 30"],
    ["зроби звук на 50 відсотків", "/soundtrack volume 50"],
    ["гучніше", "/soundtrack volume +10"],
    ["тихіше", "/soundtrack volume -10"],
    ["Відкрий магазин", "/open shop"],
    ["відкрий налаштування", "/open settings"],
    ["відкрий ШІ помічника", "/open ai"],
    ["покажи подяку", "/open authors"],
    ["увімкни темну тему", "/theme dark"],
    ["світла тема", "/theme light"],
    ["нічний режим", "/theme dark"],
    ["зміни тему", "/theme toggle"],
    ["додай погоду у Львові", "/create weather Львів"],
    ["додай Нью-Йорк", "/create weather Нью-Йорк"],
    ["створи картку для Києва", "/create weather Київ"],
    ["видали Одесу", "/delete weather Одесу"],
    ["видали другу картку", "/delete weather 2"],
    ["видали всі картки", "/delete weather all"],
    ["видали історію", "/delete history"],
    ["покажи мої міста", "/list weather"],
    ["перейди до погоди", "/goto weather"],
    ["покажи мапу", "/goto map"],
    ["нагору", "/goto top"],
    ["скажи привіт світ", "/say привіт світ"],
    ["що ти вмієш", "/help"],
    ["закрий все", "/close"],
    ["open shop", "/open shop"],
    ["слеш soundtrack off", "/soundtrack off"],
  ];
  test.each(cases)("«%s» → %s", (speech, expected) => {
    expect(voiceToCommand(speech)).toBe(expected);
  });

  test("незрозуміле — null", () => {
    expect(voiceToCommand("яка сьогодні погода в космосі і чому")).toBeNull();
    expect(voiceToCommand("")).toBeNull();
  });

  test("місто з відмінків", () => {
    expect(cityFromSpeech("у кривому розі")).toBe("Кривий Ріг");
    expect(cityFromSpeech("для харкова")).toBe("Харків");
    expect(cityFromSpeech("місто суми")).toBe("Суми");
  });

  test("normalizeSpeech прибирає розділові знаки й ввічливість", () => {
    expect(normalizeSpeech("Будь ласка, відкрий магазин!")).toBe("відкрий магазин");
  });
});
