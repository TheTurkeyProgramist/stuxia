// Cloud Functions «Стихії».
//
// sendAlerts — раз на 30 хвилин:
//   • перевіряє вбудовані стрічки новин на термінові новини;
//   • перевіряє прогноз для місць, які стережуть пристрої (гроза, ураган, ожеледь…);
//   • надсилає кожному пристрою те, що він хоче, з його паузою та лімітом на добу.
// Працює навіть тоді, коли сайт закрито.
//
// Вартість: ~1 440 запусків на місяць при безкоштовних 2 000 000; Cloud Scheduler —
// одне завдання з трьох безкоштовних; Firestore — одне читання колекції токенів за запуск.
//
// Власні стрічки користувача зберігаються лише на його пристрої — про них сповіщає
// сама сторінка, поки вона відкрита.

import { createHash } from "node:crypto";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue, FieldPath } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";
import {
  detectHazards,
  placeKey,
  planForToken,
  NEWS_MAX_AGE_MS,
  isValidFcmToken,
  sanitizeProfile,
  ipBucket,
  clientIp,
  kyivDayKey,
} from "./alerts.js";

initializeApp();
const db = getFirestore();

// Стрічки беремо через нашу ж функцію на Cloudflare: вона вже вміє розбирати RSS
// і кешує відповіді (6 запитів на 30 хвилин для всіх користувачів разом).
const SITE = "https://stuxia.com";

// Синхронно з SOURCES у src/components/News/News.jsx
const FEEDS = [
  { name: "Phys.org", url: "https://phys.org/rss-feed/biology-news/animals-news/" },
  { name: "ScienceDaily", url: "https://www.sciencedaily.com/rss/top/environment.xml" },
  { name: "Nature", url: "https://www.nature.com/nature.rss" },
  { name: "Mongabay", url: "https://news.mongabay.com/feed/" },
  { name: "The Guardian Environment", url: "https://www.theguardian.com/environment/rss" },
  { name: "NASA Earth Observatory", url: "https://science.nasa.gov/feed/?science_org=19791%2C22453" },
];

const REGION = "europe-west1";
const TOKENS = "push_tokens";
const LIMITS = "push_limits"; // лічильники реєстрацій (лише для сервера)
const TOKEN_TTL_MS = 60 * 24 * 60 * 60 * 1000; // пристрій мовчить 60 днів — видаляємо
const FCM_BATCH = 500; // ліміт FCM на одну розсилку
const OPEN_METEO_BATCH = 50; // координат в одному запиті
const MAX_PLACES_PER_RUN = 300; // запобіжник для безкоштовного ліміту Open-Meteo
const MAX_TOKEN_READS_PER_RUN = 6000; // стеля витрат на читання Firestore
const CURSOR_DOC = "push_state/cursor";
const FETCH_TIMEOUT_MS = 15000;

// Cloudflare Turnstile: секрет — у Secret Manager
// (firebase functions:secrets:set TURNSTILE_SECRET), у коді його немає
const TURNSTILE_SECRET = defineSecret("TURNSTILE_SECRET");
const TURNSTILE_HOSTS = new Set(["stuxia.com", "www.stuxia.com", "localhost"]);

// Стелі реєстрацій: навіть якщо хтось обійде капчу, база не розростеться без меж
const MAX_CALLS_PER_IP_PER_DAY = 200; // офіси й школи сидять за однією адресою
const MAX_NEW_DEVICES_PER_DAY = 5000; // для всього сайту

const sha256 = (text) => createHash("sha256").update(text).digest("hex");

// Токени, які FCM вважає мертвими: видаляємо з бази
const DEAD_TOKEN_CODES = new Set([
  "messaging/registration-token-not-registered",
  "messaging/invalid-registration-token",
]);

const stripTags = (html) => (html || "").replace(/<[^>]*>?/gm, " ");

const loadFeed = async (feed) => {
  const res = await fetch(`${SITE}/api/news-feed?url=${encodeURIComponent(feed.url)}`, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`${feed.name}: HTTP ${res.status}`);
  const data = await res.json();
  return (data.items || [])
    .filter((item) => item.url && item.title)
    .map((item) => ({
      title: stripTags(item.title).trim(),
      description: stripTags(item.summary || item.content_html),
      link: item.url,
      pubDate: item.date_published,
      sourceName: feed.name,
    }));
};

// Той самий безкоштовний перекладач, що й на сайті; не вдалося — лишаємо оригінал
const translateToUk = async (text) => {
  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(text)}`,
      { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) },
    );
    if (!res.ok) return text;
    const data = await res.json();
    return data[0].map((s) => s[0]).join("") || text;
  } catch {
    return text;
  }
};

// Прогноз на найближчі години для всіх унікальних місць (кількома запитами)
const loadHazards = async (places, now) => {
  const unique = new Map();
  places.forEach((p) => unique.set(placeKey(p), p));
  let keys = [...unique.keys()];
  if (keys.length > MAX_PLACES_PER_RUN) {
    logger.warn(`Місць ${keys.length} — перевіряємо лише ${MAX_PLACES_PER_RUN} (запобіжник Open-Meteo)`);
    keys = keys.slice(0, MAX_PLACES_PER_RUN);
  }
  const result = new Map();
  for (let i = 0; i < keys.length; i += OPEN_METEO_BATCH) {
    const chunk = keys.slice(i, i + OPEN_METEO_BATCH);
    const lats = chunk.map((k) => k.split(",")[0]).join(",");
    const lons = chunk.map((k) => k.split(",")[1]).join(",");
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}` +
          "&hourly=weather_code,wind_gusts_10m&wind_speed_unit=ms&timezone=GMT&forecast_hours=7",
        { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) },
      );
      if (!res.ok) throw new Error(`Open-Meteo: HTTP ${res.status}`);
      const data = await res.json();
      // Для одного місця Open-Meteo віддає об'єкт, для кількох — масив
      const list = Array.isArray(data) ? data : [data];
      list.forEach((entry, idx) => result.set(chunk[idx], detectHazards(entry.hourly, now)));
    } catch (err) {
      logger.warn("Прогноз для частини місць недоступний", { error: String(err) });
    }
  }
  return result;
};

/**
 * Cloudflare Turnstile: перевіряємо токен на сервері Cloudflare.
 * Дозволяємо лише наші домени й дію "push" (її ставить сторінка під час перевірки).
 */
const verifyTurnstile = async (captcha, ip) => {
  if (typeof captcha !== "string" || captcha.length < 10 || captcha.length > 4096) return false;
  try {
    const body = new URLSearchParams({ secret: TURNSTILE_SECRET.value(), response: captcha });
    if (ip) body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    const result = await res.json();
    if (!result.success) {
      logger.info("Turnstile відхилив токен", { errors: result["error-codes"] });
      return false;
    }
    // Тестовий секрет Cloudflare (1x0000…AA) не повертає action — дозволяємо його лише
    // для локальної перевірки; із справжнім секретом такої відповіді не буває
    if (result.metadata?.result_with_testing_key === true) {
      logger.warn("Turnstile працює з ТЕСТОВИМ секретом — для бою встановіть справжній");
      return true;
    }
    return result.action === "push" && TURNSTILE_HOSTS.has(result.hostname);
  } catch (err) {
    logger.warn("Turnstile недоступний", { error: String(err) });
    return false;
  }
};

/**
 * Реєстрація пристрою або оновлення його профілю сповіщень.
 *
 * Захист від спаму (кожен шар окремо обійти можна, разом — дорого й безглуздо):
 *  • Cloudflare Turnstile (безкоштовна «капча»): токен одноразовий і живе 5 хвилин —
 *    кожен виклик потребує нової перевірки, повторно використати його не можна;
 *  • не більше MAX_CALLS_PER_IP_PER_DAY викликів з однієї адреси (IPv6 — блоком /64);
 *  • не більше MAX_NEW_DEVICES_PER_DAY нових пристроїв на добу для всього сайту;
 *  • пробна відправка FCM: у базу потрапляють лише справжні push-підписки;
 *  • профіль очищається й обмежується на сервері.
 */
export const savePushProfile = onCall(
  {
    region: REGION,
    secrets: [TURNSTILE_SECRET],
    maxInstances: 5,
    concurrency: 20,
    memory: "256MiB",
    timeoutSeconds: 30,
  },
  async (request) => {
    const token = request.data?.token;
    if (!isValidFcmToken(token)) throw new HttpsError("invalid-argument", "Некоректний токен");

    // Спершу перевірка від ботів — до будь-яких записів у базу
    const ip = clientIp(request.rawRequest);
    if (!(await verifyTurnstile(request.data?.captcha, ip))) {
      throw new HttpsError("permission-denied", "Перевірку від ботів не пройдено");
    }

    const profile = sanitizeProfile(request.data?.profile);
    const ref = db.collection(TOKENS).doc(sha256(token));
    const today = kyivDayKey(Date.now());

    // Нічого не хоче — не зберігаємо (і не рахуємо в ліміти)
    if (!profile.newsAlerts && !profile.weatherAlerts) {
      await ref.delete();
      return { ok: true, deleted: true };
    }

    // Ліміт за адресою: зберігаємо лише хеш адреси, лічильник живе одну добу
    const ipRef = db.collection(LIMITS).doc(`ip_${sha256(`${today}|${ipBucket(ip)}`)}`);
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(ipRef);
      const count = snap.exists ? snap.data().count || 0 : 0;
      if (count >= MAX_CALLS_PER_IP_PER_DAY) {
        throw new HttpsError("resource-exhausted", "Забагато запитів з цієї мережі сьогодні");
      }
      tx.set(ipRef, { count: count + 1, day: today });
    });

    const existing = await ref.get();
    if (!existing.exists) {
      // Пробна відправка: нічого не надсилає, але FCM каже, чи токен справжній
      try {
        await getMessaging().send({ token, data: { check: "1" } }, true);
      } catch {
        throw new HttpsError("invalid-argument", "Push-підписка недійсна");
      }
      // Загальна стеля нових пристроїв на добу
      const globalRef = db.collection(LIMITS).doc(`new_${today}`);
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(globalRef);
        const count = snap.exists ? snap.data().count || 0 : 0;
        if (count >= MAX_NEW_DEVICES_PER_DAY) {
          throw new HttpsError("resource-exhausted", "Сьогодні забагато нових підписок");
        }
        tx.set(globalRef, { count: count + 1, day: today });
      });
    }

    await ref.set({ token, updatedAt: FieldValue.serverTimestamp(), ...profile }, { merge: true });
    return { ok: true };
  },
);

/**
 * Стеля витрат на читання: за один запуск — не більше MAX_TOKEN_READS_PER_RUN токенів.
 * Наступний запуск продовжує з того місця, де зупинився попередній (курсор у push_state).
 * Поки пристроїв менше стелі, кожен перевіряється щоразу; якщо їх раптом стане
 * значно більше (напр. атака), сповіщення сповільняться, але рахунок не зросте:
 * 6 000 × 48 запусків ≈ 288 тис. читань на добу ≈ $0,15 понад безкоштовні 50 тис.
 */
const readTokenPage = async () => {
  const cursorRef = db.doc(CURSOR_DOC);
  const after = (await cursorRef.get()).data()?.after || null;
  const base = db.collection(TOKENS).orderBy(FieldPath.documentId());
  let docs = (await (after ? base.startAfter(after) : base).limit(MAX_TOKEN_READS_PER_RUN).get()).docs;
  // Дійшли до кінця — добираємо з початку до курсора (по колу)
  if (docs.length < MAX_TOKEN_READS_PER_RUN && after) {
    const rest = await base.endAt(after).limit(MAX_TOKEN_READS_PER_RUN - docs.length).get();
    docs = docs.concat(rest.docs);
  }
  // Прочитали всіх — наступного разу знову з початку; інакше — з місця зупинки
  const next = docs.length === MAX_TOKEN_READS_PER_RUN ? docs[docs.length - 1].id : null;
  await cursorRef.set({ after: next });
  if (next) logger.warn(`Пристроїв понад ${MAX_TOKEN_READS_PER_RUN} — перевіряємо їх по черзі`);
  return docs;
};

// Лічильники минулих діб більше не потрібні
const cleanupOldLimits = async (today) => {
  const old = await db.collection(LIMITS).where("day", "<", today).limit(400).get();
  if (old.empty) return 0;
  const batch = db.batch();
  old.docs.forEach((d) => batch.delete(d.ref));
  await batch.commit();
  return old.size;
};

export const sendAlerts = onSchedule(
  {
    schedule: "every 30 minutes",
    timeZone: "Europe/Kyiv",
    region: REGION,
    memory: "256MiB",
    timeoutSeconds: 180,
    maxInstances: 1,
    retryCount: 0,
  },
  async () => {
    const now = Date.now();
    await cleanupOldLimits(kyivDayKey(now)).catch((err) =>
      logger.warn("Не вдалося прибрати старі лічильники", { error: String(err) }),
    );
    const tokenDocs = await readTokenPage();
    if (tokenDocs.length === 0) {
      logger.info("Підписаних пристроїв немає");
      return;
    }

    const toDelete = new Set();
    const live = [];
    tokenDocs.forEach((snap) => {
      const data = snap.data();
      const age = data.updatedAt?.toMillis ? now - data.updatedAt.toMillis() : Infinity;
      if (!data.token || age > TOKEN_TTL_MS) toDelete.add(snap.ref);
      else if (data.newsAlerts || data.weatherAlerts) live.push({ ref: snap.ref, data });
    });

    // Новини — лише якщо хтось їх хоче
    let news = [];
    if (live.some((t) => t.data.newsAlerts)) {
      const settled = await Promise.allSettled(FEEDS.map(loadFeed));
      settled.forEach((result, i) => {
        if (result.status === "rejected") {
          logger.warn(`Стрічка ${FEEDS[i].name} недоступна`, { error: String(result.reason) });
        }
      });
      news = settled
        .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
        .filter((item) => {
          const time = new Date(item.pubDate).getTime();
          return !Number.isNaN(time) && now - time < NEWS_MAX_AGE_MS;
        })
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    }

    // Погода — лише для місць, які стережуть пристрої
    const places = live
      .filter((t) => t.data.weatherAlerts && Array.isArray(t.data.places))
      .flatMap((t) => t.data.places)
      .filter((p) => Number.isFinite(Number(p?.lat)) && Number.isFinite(Number(p?.lon)));
    const hazardsByPlace = places.length ? await loadHazards(places, now) : new Map();

    // План для кожного пристрою
    const plans = live
      .map((t) => ({ ...t, plan: planForToken(t.data, news, hazardsByPlace, now) }))
      .filter((t) => t.plan.messages.length > 0);

    // Перекладаємо лише ті новини, які справді підуть людям (кешуємо на запуск)
    const translated = new Map();
    for (const t of plans) {
      for (const m of t.plan.messages) {
        if (!m.tag.startsWith("urgent-")) continue;
        const item = news.find((n) => n.link === m.url);
        if (!item) continue;
        if (!translated.has(item.link)) translated.set(item.link, await translateToUk(item.title));
        m.title = `Терміново: ${translated.get(item.link)}`.slice(0, 120);
      }
    }

    // Розсилка: лише data — показує сповіщення наш Service Worker (public/sw-notifications.js)
    const outgoing = plans.flatMap((t) =>
      t.plan.messages.map((m) => ({
        owner: t,
        message: {
          token: t.data.token,
          // kind — щоб Service Worker записав сповіщення в журнал сторінки (спільний ліміт)
          data: { title: m.title, body: m.body, url: m.url, tag: m.tag, kind: m.kind || "news" },
          webpush: { headers: { Urgency: "high", TTL: String(6 * 60 * 60) } },
        },
      })),
    );
    let delivered = 0;
    for (let i = 0; i < outgoing.length; i += FCM_BATCH) {
      const chunk = outgoing.slice(i, i + FCM_BATCH);
      const response = await getMessaging().sendEach(chunk.map((o) => o.message));
      delivered += response.successCount;
      response.responses.forEach((r, idx) => {
        if (!r.success && DEAD_TOKEN_CODES.has(r.error?.code)) toDelete.add(chunk[idx].owner.ref);
      });
    }

    // Службові поля (пауза, ліміт, що вже надіслано) — і прибирання мертвих токенів
    const writes = [
      ...plans.filter((t) => !toDelete.has(t.ref)).map((t) => ({ ref: t.ref, update: t.plan.update })),
      ...[...toDelete].map((ref) => ({ ref, del: true })),
    ];
    for (let i = 0; i < writes.length; i += 400) {
      const batch = db.batch();
      writes.slice(i, i + 400).forEach((w) => {
        if (w.del) batch.delete(w.ref);
        else batch.set(w.ref, w.update, { merge: true });
      });
      await batch.commit();
    }

    logger.info(
      `Пристроїв: ${live.length}; свіжих новин: ${news.length}; місць: ${hazardsByPlace.size}; ` +
        `сповіщень: ${outgoing.length} (доставлено ${delivered}); видалено токенів: ${toDelete.size}`,
    );
  },
);
