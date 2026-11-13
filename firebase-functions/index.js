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
import { initializeApp, applicationDefault } from "firebase-admin/app";
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
import { NEWS_SOURCES, cleanNewsDescription, descriptionForTranslation } from "./newsSources.js";

initializeApp();
const db = getFirestore();

// Стрічки беремо через нашу ж функцію на Cloudflare: вона вже вміє розбирати RSS
// і кешує відповіді (sendAlerts — раз на 30 хв, refreshNewsBundle — раз на 10 хв, повз кеш).
const SITE = "https://stuxia.com";

// Вбудовані стрічки — спільний список із сайтом і Cloudflare (newsSources.js)
const FEEDS = NEWS_SOURCES;

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

// fresh — мітка інтервалу: інший URL = повз годинний кеш Cloudflare (для набору новин кожні 10 хв)
const loadFeed = async (feed, fresh = "") => {
  const freshParam = fresh ? `&fresh=${encodeURIComponent(fresh)}` : "";
  const res = await fetch(`${SITE}/api/news-feed?url=${encodeURIComponent(feed.url)}${freshParam}`, {
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
      image: typeof item.image === "string" ? item.image : "",
    }));
};

// Переклад вважаємо вдалим, лише якщо в ньому є кирилиця (інакше перекладач повернув оригінал)
const hasCyrillic = (s) => /[а-яіїєґ]/i.test(s || "");

// План А — офіційний Google Cloud Translation (v2). Ключ не потрібен: функція ходить
// від імені сервісного акаунта проєкту. 500 тис. символів/міс безкоштовно —
// тому описи перекладаємо лише до NEWS_DESC_TRANSLATE_MAX символів.
let cloudToken = null; // { value, expiresAt }
const getCloudToken = async () => {
  if (cloudToken && Date.now() < cloudToken.expiresAt - 60_000) return cloudToken.value;
  const { access_token: value, expires_in: expiresIn } = await applicationDefault().getAccessToken();
  cloudToken = { value, expiresAt: Date.now() + (Number(expiresIn) || 300) * 1000 };
  return value;
};

const translateCloud = async (text) => {
  const res = await fetch("https://translation.googleapis.com/language/translate/v2", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${await getCloudToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ q: [text], target: "uk", format: "text" }),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) {
    // Напр. 403 SERVICE_DISABLED — API не увімкнено в цьому проєкті
    const details = await res.text().catch(() => "");
    throw new Error(`Cloud Translation HTTP ${res.status}: ${details.slice(0, 300)}`);
  }
  const data = await res.json();
  return data?.data?.translations?.[0]?.translatedText || "";
};

// План Б — той самий безкоштовний Google, що й на сайті (з адрес Google Cloud його часто ріже: 429)
const translateGoogle = async (text) => {
  const res = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(text)}`,
    { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) },
  );
  if (!res.ok) throw new Error(`Google HTTP ${res.status}`);
  const data = await res.json();
  return (data?.[0] || []).map((s) => s?.[0] || "").join("");
};

// План В — MyMemory (безкоштовно, без ключа; до 500 символів за запит, ~5 тис. на добу)
const translateMyMemory = async (text) => {
  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 480))}&langpair=en|uk`,
    { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) },
  );
  if (!res.ok) throw new Error(`MyMemory HTTP ${res.status}`);
  const data = await res.json();
  return data?.responseData?.translatedText || "";
};

// Уже українською — не чіпаємо; жоден перекладач не впорався — лишаємо оригінал
const TRANSLATORS = [
  ["Cloud Translation", translateCloud],
  ["Google", translateGoogle],
  ["MyMemory", translateMyMemory],
];
const translateToUk = async (text) => {
  if (!text || hasCyrillic(text)) return text;
  for (const [name, translate] of TRANSLATORS) {
    try {
      const result = (await translate(text)).trim();
      if (hasCyrillic(result)) return result;
      logger.warn(`Переклад ${name}: без кирилиці`, { text, result });
    } catch (err) {
      logger.warn(`Переклад ${name} не вдався`, { error: String(err) });
    }
  }
  return text;
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
      const settled = await Promise.allSettled(FEEDS.map((feed) => loadFeed(feed)));
      settled.forEach((result, i) => {
        if (result.status === "rejected") {
          logger.warn(`Стрічка ${FEEDS[i].name} недоступна`, { error: String(result.reason) });
        }
      });
      // Набір новин (кожні 10 хв, уже перекладений): свіжіший за стрічки з годинним кешем
      // Cloudflare. Стрічки лишаємо — у наборі лише по NEWS_PER_SOURCE з кожної.
      let bundle = [];
      try {
        const snap = await db.doc(NEWS_BUNDLE_DOC).get();
        if (snap.exists) bundle = JSON.parse(snap.get("json") || "[]");
      } catch (err) {
        logger.warn("Набір новин не прочитався — лише стрічки", { error: String(err) });
      }
      const bundleByLink = new Map(bundle.map((item) => [item.link, item]));
      const fromFeeds = settled.flatMap((r) => (r.status === "fulfilled" ? r.value : []));
      const feedLinks = new Set(fromFeeds.map((item) => item.link));
      news = [...fromFeeds, ...bundle.filter((item) => !feedLinks.has(item.link))]
        // Готовий переклад заголовка з набору (терміновість шукаємо в оригіналі)
        .map((item) => ({ ...item, titleUk: bundleByLink.get(item.link)?.titleUk || item.titleUk || null }))
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

    // Перекладаємо лише ті новини, які справді підуть людям (кешуємо на запуск);
    // переклад із набору новин беремо готовим
    const translated = new Map();
    for (const t of plans) {
      for (const m of t.plan.messages) {
        if (!m.tag.startsWith("urgent-")) continue;
        const item = news.find((n) => n.link === m.url);
        if (!item) continue;
        if (!translated.has(item.link)) {
          translated.set(item.link, item.titleUk || (await translateToUk(item.title)));
        }
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

// ───────────── Спільний набір новин (вбудовані стрічки) ─────────────
//
// Кожні 10 хв: по NEWS_PER_SOURCE найсвіжіших новин з кожної вбудованої стрічки,
// перекладені українською, — одним документом global/newsBundle (читати може будь-хто,
// писати — лише сервер). Сайт бере цей набір через /api/news-bundle (кеш Cloudflare)
// замість 10 окремих стрічок і перекладу на кожному пристрої.
// Перекладаємо лише нові новини: уже перекладені беремо з попереднього набору.

const NEWS_BUNDLE_DOC = "global/newsBundle";
const NEWS_PER_SOURCE = 3; // синхронно з NEWS_PER_SOURCE у News.jsx
const NEWS_BUNDLE_INTERVAL_MS = 10 * 60 * 1000;
const NEWS_DESC_MAX = 300;

const cleanDescription = (text) =>
  cleanNewsDescription(stripTags(text).replace(/\s+/g, " ").trim()).slice(0, NEWS_DESC_MAX);

// ── Картинка зі сторінки статті (для стрічок без картинок у RSS: ScienceDaily, Nature) ──
const OG_TIMEOUT_MS = 8000;
const OG_MAX_BYTES = 400 * 1024; // og:image — у <head>, далі читати не треба
const OG_USER_AGENT = "Mozilla/5.0 (compatible; StykhiiaNewsBot/1.0; +https://stuxia.com)";

const decodeHtmlAttr = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x2F;/gi, "/");

const readHead = async (res) => {
  const reader = res.body?.getReader();
  if (!reader) return (await res.text()).slice(0, OG_MAX_BYTES);
  const decoder = new TextDecoder();
  let html = "";
  while (html.length < OG_MAX_BYTES) {
    const { done, value } = await reader.read();
    if (done) break;
    html += decoder.decode(value, { stream: true });
    if (/<\/head>/i.test(html)) break;
  }
  reader.cancel().catch(() => {});
  return html;
};

const fetchOgImage = async (link) => {
  try {
    const res = await fetch(link, {
      headers: { "User-Agent": OG_USER_AGENT, Accept: "text/html" },
      redirect: "follow",
      signal: AbortSignal.timeout(OG_TIMEOUT_MS),
    });
    if (!res.ok) return "";
    const html = await readHead(res);
    for (const meta of html.match(/<meta\b[^>]*>/gi) || []) {
      if (!/(?:property|name)\s*=\s*["'](?:og:image(?::url|:secure_url)?|twitter:image(?::src)?)["']/i.test(meta)) {
        continue;
      }
      const content = meta.match(/content\s*=\s*["']([^"']+)["']/i)?.[1];
      if (!content) continue;
      const url = new URL(decodeHtmlAttr(content.trim()), link);
      if (url.protocol === "https:" || url.protocol === "http:") return url.toString();
    }
  } catch {
    // сторінка не відповіла — лишаємо без картинки
  }
  return "";
};

// Перекладене лише з кирилицею — інакше null, і сайт перекладе сам
const translatedOrNull = async (text) => {
  if (!text) return "";
  const result = await translateToUk(text);
  return hasCyrillic(result) ? result : null;
};

export const refreshNewsBundle = onSchedule(
  {
    schedule: "every 10 minutes",
    timeZone: "Europe/Kyiv",
    region: REGION,
    memory: "256MiB",
    timeoutSeconds: 120,
    maxInstances: 1,
    retryCount: 0,
  },
  async () => {
    const now = Date.now();
    const ref = db.doc(NEWS_BUNDLE_DOC);

    let previous = [];
    try {
      const snap = await ref.get();
      if (snap.exists) previous = JSON.parse(snap.get("json") || "[]");
    } catch (err) {
      logger.warn("Попередній набір новин не прочитався", { error: String(err) });
    }
    const previousByLink = new Map(previous.map((item) => [item.link, item]));

    const fresh = String(Math.floor(now / NEWS_BUNDLE_INTERVAL_MS));
    const settled = await Promise.allSettled(FEEDS.map((feed) => loadFeed(feed, fresh)));

    const items = [];
    const failed = [];
    let translatedCount = 0;
    let ogCount = 0;
    for (let i = 0; i < FEEDS.length; i++) {
      const feed = FEEDS[i];
      const result = settled[i];
      if (result.status !== "fulfilled" || result.value.length === 0) {
        // Стрічка лежить — лишаємо її новини з попереднього набору
        failed.push(feed.name);
        items.push(...previous.filter((item) => item.sourceName === feed.name));
        continue;
      }
      const top = result.value
        .filter((item) => item.link && item.title)
        .sort((a, b) => (Date.parse(b.pubDate) || 0) - (Date.parse(a.pubDate) || 0))
        .slice(0, NEWS_PER_SOURCE);
      for (const raw of top) {
        const description = cleanDescription(raw.description);
        const old = previousByLink.get(raw.link);
        let titleUk = old?.title === raw.title ? old.titleUk : undefined;
        let descriptionUk = old?.description === description ? old.descriptionUk : undefined;
        if (!titleUk) {
          titleUk = await translatedOrNull(raw.title);
          translatedCount += 1;
        }
        if (descriptionUk === undefined || descriptionUk === null) {
          descriptionUk = await translatedOrNull(descriptionForTranslation(description));
          translatedCount += 1;
        }
        // Немає картинки в RSS — шукаємо на сторінці статті один раз (imageTried),
        // а не кожні 10 хв і не на кожному пристрої
        let image = raw.image || old?.image || "";
        let imageTried = Boolean(raw.image || old?.imageTried);
        if (!image && !imageTried) {
          image = await fetchOgImage(raw.link);
          imageTried = true;
          ogCount += 1;
        }
        items.push({
          link: raw.link,
          title: raw.title,
          description,
          titleUk: titleUk || null,
          descriptionUk: descriptionUk ?? null,
          pubDate: raw.pubDate || "",
          sourceName: feed.name,
          image,
          imageTried,
        });
      }
    }

    if (items.length === 0) {
      logger.error("Набір новин порожній — попередній лишаємо без змін", { failed });
      return;
    }
    await ref.set({
      json: JSON.stringify(items),
      count: items.length,
      updatedAt: now,
      failed,
    });
    logger.info(
      `Набір новин: ${items.length} новин, перекладено ${translatedCount} текстів, ` +
        `картинок зі сторінок шукали ${ogCount}` +
        (failed.length ? `; недоступні: ${failed.join(", ")}` : ""),
    );
  },
);
