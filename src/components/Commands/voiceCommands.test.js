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

describe("voiceToCommand іншими мовами", () => {
  const cases = [
    ["en", "Turn on the music", "/soundtrack on"],
    ["en", "add weather in London", "/create weather London"],
    ["en", "open the shop", "/open shop"],
    ["en", "dark theme", "/theme dark"],
    ["de", "Musik aus", "/soundtrack off"],
    ["de", "füge Wetter in Berlin hinzu", "/create weather Berlin"],
    ["de", "öffne die Einstellungen", "/open settings"],
    ["fr", "ouvre la boutique", "/open shop"],
    ["fr", "supprime toutes les cartes", "/delete weather all"],
    ["es", "pon música", "/soundtrack on"],
    ["es", "volumen 40", "/soundtrack volume 40"],
    ["pl", "dodaj pogodę w Warszawie", "/create weather Warszawie"],
    ["it", "tema scuro", "/theme dark"],
    ["zh", "播放音乐", "/soundtrack on"],
    ["zh", "添加北京的天气", "/create weather 北京"],
    ["ja", "ショップを開いて", "/open shop"],
    ["ko", "음악 꺼 줘", "/soundtrack off"],
    ["tr", "müziği kapat", "/soundtrack off"],
    ["be", "уключы музыку", "/soundtrack on"],
    ["ar", "افتح المتجر", "/open shop"],
  ];
  test.each(cases)("%s: «%s» → %s", (lng, speech, expected) => {
    expect(voiceToCommand(speech, lng)).toBe(expected);
  });

  test("українська працює за будь-якої мови сайту", () => {
    expect(voiceToCommand("увімкни музику", "de")).toBe("/soundtrack on");
  });
});
