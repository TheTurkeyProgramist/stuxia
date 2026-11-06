// Тести правил Firestore (firestore.rules) в емуляторі.
// Запуск: bun run test:rules
// (піднімає емулятор Firestore з демо-проєктом, у справжню базу нічого не пише)
import { initializeApp, deleteApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  writeBatch,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const PROJECT = "demo-stuxia";
const HOST = "127.0.0.1";
const PORT = 8085;
const BASE = `http://${HOST}:${PORT}/v1/projects/${PROJECT}/databases/(default)/documents`;

const apps = [];
const dbFor = (uid, provider = "password") => {
  const app = initializeApp({ projectId: PROJECT, apiKey: "demo" }, `app-${apps.length}`);
  apps.push(app);
  const db = getFirestore(app);
  const mockUserToken = uid
    ? { user_id: uid, sub: uid, firebase: { sign_in_provider: provider } }
    : undefined;
  connectFirestoreEmulator(db, HOST, PORT, mockUserToken ? { mockUserToken } : {});
  return db;
};

// Запис в обхід правил (як адмін) — для підготовки даних
const seed = async (path, fields) => {
  const res = await fetch(`${BASE}/${path}`, {
    method: "PATCH",
    headers: { Authorization: "Bearer owner", "Content-Type": "application/json" },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) throw new Error(`seed ${path}: ${res.status} ${await res.text()}`);
};
const clearAll = async () => {
  await fetch(
    `http://${HOST}:${PORT}/emulator/v1/projects/${PROJECT}/databases/(default)/documents`,
    { method: "DELETE" },
  );
};
const yesterdayIso = () => new Date(Date.now() - 26 * 3600 * 1000).toISOString();

let passed = 0;
let failed = 0;
const expectAllow = async (name, fn) => {
  try {
    await fn();
    passed += 1;
    console.log(`  ✓ дозволено: ${name}`);
  } catch (e) {
    failed += 1;
    console.log(`  ✗ МАЛО БУТИ ДОЗВОЛЕНО: ${name}\n      ${e.code || ""} ${e.message}`);
  }
};
const expectDeny = async (name, fn) => {
  try {
    await fn();
    failed += 1;
    console.log(`  ✗ МАЛО БУТИ ЗАБОРОНЕНО: ${name}`);
  } catch (e) {
    if (e.code === "permission-denied") {
      passed += 1;
      console.log(`  ✓ заборонено: ${name}`);
    } else {
      failed += 1;
      console.log(`  ✗ інша помилка (${name}): ${e.code} ${e.message}`);
    }
  }
};

const settings = { isDarkMode: true, heroBgMode: "static", heroBg: "/assets/x.webp" };
const counted = (data, countKey, atKey, count) => ({
  ...data,
  [countKey]: count,
  [atKey]: serverTimestamp(),
});

const run = async () => {
  const alice = dbFor("alice");
  const bob = dbFor("bob");
  const anon = dbFor("anon1", "anonymous");
  const guest = dbFor(null);

  console.log("\nconfig/{uid}: налаштування");
  await clearAll();
  const aliceCfg = doc(alice, "config", "alice");
  await expectAllow("налаштування з лічильником 1", () =>
    setDoc(aliceCfg, counted({ settings }, "settingsSyncCount", "settingsSyncAt", 1), { merge: true }));
  await expectDeny("налаштування без лічильника", () =>
    setDoc(aliceCfg, { settings: { ...settings, isDarkMode: false } }, { merge: true }));
  await expectDeny("лічильник не зріс (знову 1)", () =>
    setDoc(aliceCfg, counted({ settings: { isDarkMode: false } }, "settingsSyncCount", "settingsSyncAt", 1), { merge: true }));
  await expectAllow("лічильник зріс до 2", () =>
    setDoc(aliceCfg, counted({ settings: { isDarkMode: false } }, "settingsSyncCount", "settingsSyncAt", 2), { merge: true }));
  await expectDeny("лічильник понад ліміт (101)", () =>
    setDoc(aliceCfg, counted({ settings }, "settingsSyncCount", "settingsSyncAt", 101), { merge: true }));
  await expectDeny("час з браузера замість серверного (підробка дати)", () =>
    setDoc(aliceCfg, { settings, settingsSyncCount: 1, settingsSyncAt: Timestamp.fromDate(new Date(Date.now() - 2 * 864e5)) }, { merge: true }));
  await expectDeny("скинути лічильник без зміни налаштувань", () =>
    setDoc(aliceCfg, { settingsSyncCount: 1 }, { merge: true }));
  await expectDeny("невідоме поле в налаштуваннях", () =>
    setDoc(aliceCfg, counted({ settings: { evil: "x".repeat(10) } }, "settingsSyncCount", "settingsSyncAt", 3), { merge: true }));
  await expectDeny("невідоме поле в документі", () =>
    setDoc(aliceCfg, { junk: "spam" }, { merge: true }));
  await expectDeny("надто довга адреса фону", () =>
    setDoc(aliceCfg, counted({ settings: { heroBg: "x".repeat(3000) } }, "settingsSyncCount", "settingsSyncAt", 3), { merge: true }));
  await expectDeny("видалення свого config", () => deleteDoc(aliceCfg));
  await expectDeny("чужий акаунт пише в config/alice", () =>
    setDoc(doc(bob, "config", "alice"), counted({ settings }, "settingsSyncCount", "settingsSyncAt", 50), { merge: true }));
  await expectDeny("чужий акаунт читає config/alice", () => getDoc(doc(bob, "config", "alice")));
  await expectDeny("без входу пише config/alice", () =>
    setDoc(doc(guest, "config", "alice"), { settings }, { merge: true }));

  console.log("\nconfig/{uid}: нова доба");
  await clearAll();
  await seed("config/alice", {
    settingsSyncCount: { integerValue: "100" },
    settingsSyncAt: { timestampValue: yesterdayIso() },
  });
  await expectAllow("учора було 100 — сьогодні знову з 1", () =>
    setDoc(aliceCfg, counted({ settings }, "settingsSyncCount", "settingsSyncAt", 1), { merge: true }));
  await expectDeny("сьогодні вже 1 — повтор 1 заборонено", () =>
    setDoc(aliceCfg, counted({ settings: { isDarkMode: false } }, "settingsSyncCount", "settingsSyncAt", 1), { merge: true }));

  console.log("\nconfig/{uid}: старі поля в документі не заважають");
  await clearAll();
  await seed("config/alice", { legacyField: { stringValue: "old" }, cardAdditionsDate: { stringValue: "2026-01-01" } });
  await expectAllow("запис налаштувань у документ зі старими полями", () =>
    setDoc(aliceCfg, counted({ settings }, "settingsSyncCount", "settingsSyncAt", 1), { merge: true }));

  console.log("\nconfig/{uid}: картки, заглушені новини, додавання");
  await clearAll();
  const card = { id: 1, isMain: false, locationName: "Київ", lat: 50.45, lon: 30.52 };
  await expectAllow("2 картки з лічильником", () =>
    setDoc(aliceCfg, counted({ savedWeatherCards: [card, { ...card, id: 2 }] }, "cardsSyncCount", "cardsSyncAt", 1), { merge: true }));
  await expectDeny("10 карток (максимум 9)", () =>
    setDoc(aliceCfg, counted({ savedWeatherCards: Array.from({ length: 10 }, (_, i) => ({ ...card, id: i })) }, "cardsSyncCount", "cardsSyncAt", 2), { merge: true }));
  await expectDeny("картки без лічильника", () =>
    setDoc(aliceCfg, { savedWeatherCards: [card] }, { merge: true }));
  await expectAllow("заглушені новини з лічильником", () =>
    setDoc(aliceCfg, counted({ mutedNews: ["https://a"] }, "muteSyncCount", "muteSyncAt", 1), { merge: true }));
  await expectDeny("заглушені: 31-ша за добу", () =>
    setDoc(aliceCfg, counted({ mutedNews: ["https://b"] }, "muteSyncCount", "muteSyncAt", 31), { merge: true }));
  await expectDeny("заглушені: понад 1000 у списку", () =>
    setDoc(aliceCfg, counted({ mutedNews: Array.from({ length: 1001 }, (_, i) => `u${i}`) }, "muteSyncCount", "muteSyncAt", 2), { merge: true }));
  await expectAllow("додавання картки: лічильник 1", () =>
    setDoc(aliceCfg, { cardAdditionsCount: 1, cardAdditionsAt: serverTimestamp() }, { merge: true }));
  await expectDeny("додавання картки: 41-ше", () =>
    setDoc(aliceCfg, { cardAdditionsCount: 41, cardAdditionsAt: serverTimestamp() }, { merge: true }));

  console.log("\nскарги");
  await clearAll();
  const reportBatch = (db, uid, newsId, count, extra = {}) => {
    const b = writeBatch(db);
    b.set(doc(db, "news_reports", newsId), { reporters: { [uid]: serverTimestamp() }, ...extra }, { merge: true });
    b.set(doc(db, "config", uid), { reportCount: count, reportAt: serverTimestamp() }, { merge: true });
    return b.commit();
  };
  await expectAllow("скарга + лічильник однією транзакцією", () => reportBatch(alice, "alice", "n1", 1));
  await expectDeny("скарга без лічильника", () =>
    setDoc(doc(alice, "news_reports", "n2"), { reporters: { alice: serverTimestamp() } }, { merge: true }));
  await expectDeny("повторна скарга на ту саму новину за добу", () => reportBatch(alice, "alice", "n1", 2));
  await expectAllow("інша новина — лічильник 2", () => reportBatch(alice, "alice", "n3", 2));
  await expectDeny("скарга від чужого імені (uid bob)", () => {
    const b = writeBatch(alice);
    b.set(doc(alice, "news_reports", "n4"), { reporters: { bob: serverTimestamp() } }, { merge: true });
    b.set(doc(alice, "config", "alice"), { reportCount: 3, reportAt: serverTimestamp() }, { merge: true });
    return b.commit();
  });
  await expectDeny("кілька голосів одним записом", () => {
    const b = writeBatch(alice);
    b.set(doc(alice, "news_reports", "n5"), { reporters: { alice: serverTimestamp(), fake1: serverTimestamp() } }, { merge: true });
    b.set(doc(alice, "config", "alice"), { reportCount: 3, reportAt: serverTimestamp() }, { merge: true });
    return b.commit();
  });
  await expectDeny("стара схема reports (масив)", () => {
    const b = writeBatch(alice);
    b.set(doc(alice, "news_reports", "n6"), { reports: [{ uid: "alice", timestamp: Date.now() }] }, { merge: true });
    b.set(doc(alice, "config", "alice"), { reportCount: 3, reportAt: serverTimestamp() }, { merge: true });
    return b.commit();
  });
  await expectDeny("анонімний акаунт", () => reportBatch(anon, "anon1", "n7", 1));
  await expectDeny("видалення чужих скарг", () => deleteDoc(doc(bob, "news_reports", "n1")));
  await expectAllow("інший акаунт (bob) скаржиться на ту саму новину", () => reportBatch(bob, "bob", "n1", 1));

  await clearAll();
  await seed("config/alice", {
    reportCount: { integerValue: "20" },
    reportAt: { timestampValue: new Date().toISOString() },
  });
  await expectDeny("21-ша скарга за добу", () => reportBatch(alice, "alice", "n8", 21));

  console.log("\nджерела (rss_reports)");
  await clearAll();
  const rssBatch = (db, uid, count, data) => {
    const b = writeBatch(db);
    b.set(doc(db, "rss_reports", "src1"), { reporters: { [uid]: serverTimestamp() }, ...data }, { merge: true });
    b.set(doc(db, "config", uid), { reportCount: count, reportAt: serverTimestamp() }, { merge: true });
    return b.commit();
  };
  await expectAllow("перша скарга на джерело з назвою", () => rssBatch(alice, "alice", 1, { name: "BBC" }));
  await expectDeny("зміна назви джерела", () => rssBatch(bob, "bob", 1, { name: "Hacked" }));
  await expectAllow("скарга без зміни назви", () => rssBatch(bob, "bob", 1, {}));

  console.log("\nінші колекції");
  await expectAllow("читання global без входу", () => getDoc(doc(guest, "global", "x")));
  await expectDeny("запис у global", () => setDoc(doc(alice, "global", "x"), { a: 1 }));
  await expectDeny("запис у config/global", () => setDoc(doc(alice, "config", "global"), { maintenance: true }));
  await expectAllow("читання config/global без входу", () => getDoc(doc(guest, "config", "global")));
  await expectDeny("запис у users/{свій uid}", () => setDoc(doc(alice, "users", "alice"), { mutedNews: [] }));

  console.log(`\nРазом: ${passed} пройшло, ${failed} не пройшло`);
  await Promise.all(apps.map((a) => deleteApp(a)));
  process.exit(failed ? 1 : 0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
