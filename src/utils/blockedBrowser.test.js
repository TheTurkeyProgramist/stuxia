import { isBlockedBrowser, isBlockedHost } from "./blockedBrowser.js";

describe("isBlockedBrowser", () => {
  test("Яндекс Браузер на ПК і телефоні — заблоковано", () => {
    expect(isBlockedBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 YaBrowser/24.6.0.0 Safari/537.36")).toBe(true);
    expect(isBlockedBrowser("Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 YaBrowser/24.4.1.99.00 SA/3 Mobile Safari/537.36")).toBe(true);
  });
  test("звичайні браузери — ні", () => {
    expect(isBlockedBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")).toBe(false);
    expect(isBlockedBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0")).toBe(false);
    expect(isBlockedBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0")).toBe(false);
  });
});

describe("isBlockedHost", () => {
  test("проксі Яндекс Перекладача — заблоковано", () => {
    expect(isBlockedHost("stuxia-com.translated.turbopages.org")).toBe(true);
    expect(isBlockedHost("translate.yandex.net")).toBe(true);
  });
  test("власний домен, локальна розробка і Google Перекладач — ні", () => {
    expect(isBlockedHost("stuxia.com")).toBe(false);
    expect(isBlockedHost("localhost")).toBe(false);
    expect(isBlockedHost("stuxia-com.translate.goog")).toBe(false);
  });
});
