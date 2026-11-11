// ─────────────────────────────────────────────────────────────
//  «Запроси друга»: значки отримують обидва.
//
//  1. Людина в акаунті ділиться посиланням https://stuxia.com/?ref=<її uid>.
//  2. Друг відкриває посилання — ref запам'ятовується в цьому браузері.
//  3. Друг створює НОВИЙ акаунт — у Firestore з'являється документ
//     referrals/{uid друга} = { referrer, createdAt, activeDays: 1, lastActiveAt }.
//     Кожен акаунт може бути запрошеним лише один раз (правила Firestore).
//  4. Друг заходить у Стихію ще в інші дні: +1 день, не частіше разу на добу (UTC),
//     лише протягом 14 днів від реєстрації. Усе це перевіряють правила Firestore.
//  5. Коли набралося 3 дні — друг отримує 🌱 «Паросток Стихії»,
//     той, хто запросив, — 📣 «Посол Стихії».
//
//  УВАГА: числа 3 і 14 продубльовані в firestore.rules (match /referrals).
// ─────────────────────────────────────────────────────────────

import { loadFirebase } from "../firebaseLazy.js";
import { getPref, setPref, removePref } from "./prefsStore.js";

const SITE_URL = "https://stuxia.com";
const PENDING_KEY = "stykhia_pending_ref";
const PENDING_TTL_MS = 30 * 24 * 60 * 60 * 1000; // посилання «живе» 30 днів
// Акаунт має бути створений ПІСЛЯ переходу за посиланням (з невеликим запасом)
const CREATION_SLACK_MS = 10 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export const INVITES_FOR_BADGE = 1; // скільки друзів треба для «Посла Стихії»
export const INVITE_ACTIVE_DAYS = 3; // скільки різних днів друг має зайти
export const INVITE_WINDOW_DAYS = 14; // за скільки днів від реєстрації

export const BADGES = {
  supporter: { emoji: "🦃", name: "Друг індиків" },
  inviter: { emoji: "📣", name: "Посол Стихії" },
  invitee: { emoji: "🌱", name: "Паросток Стихії" },
};

const UID_RE = /^[A-Za-z0-9_-]{6,128}$/;
const inviterKey = (uid) => `stykhia_inviter_${uid}`;
// Стан запрошеного в цьому браузері: "none" — не запрошений, "active" — набирає дні, "done" — значок є
const inviteeKey = (uid) => `stykhia_invitee_${uid}`;
const inviteeCheckedKey = (uid) => `stykhia_invitee_checked_${uid}`;

const utcDay = (ms = Date.now()) => new Date(ms).toISOString().slice(0, 10);
const toMs = (ts) => (ts?.toMillis ? ts.toMillis() : Number.isFinite(ts) ? ts : NaN);

const safeGet = (key) => {
  try {
    return getPref(key);
  } catch {
    return null;
  }
};
const safeSet = (key, value) => {
  try {
    setPref(key, value);
  } catch {
    /* приватний режим */
  }
};

// ───────────── Посилання ─────────────

const siteOrigin = () => {
  try {
    const { protocol, hostname, origin } = window.location;
    const isWeb = protocol === "https:" && (hostname === "stuxia.com" || hostname.endsWith(".stuxia.com"));
    return isWeb ? origin : SITE_URL;
  } catch {
    return SITE_URL;
  }
};

export const inviteLink = (uid) => `${siteOrigin()}/?ref=${encodeURIComponent(uid)}`;

// Ділимося системним меню (телефон) або копіюємо посилання.
// Повертає "shared" | "copied" | "cancelled" | "failed"
export const shareInvite = async (uid) => {
  const url = inviteLink(uid);
  const text = "Стихія — погода, музика й новини в одному місці. Заходь, і ми обидва отримаємо значки!";
  if (navigator.share) {
    try {
      await navigator.share({ title: "Стихія", text, url });
      return "shared";
    } catch (err) {
      if (err?.name === "AbortError") return "cancelled";
      // інакше пробуємо скопіювати
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "failed";
  }
};

// ───────────── Сторона друга ─────────────

// Викликати один раз при старті: забирає ?ref= з адреси і запам'ятовує його
export const captureReferralFromUrl = () => {
  try {
    const url = new URL(window.location.href);
    const ref = url.searchParams.get("ref");
    if (!ref) return;
    url.searchParams.delete("ref");
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
    if (!UID_RE.test(ref)) return;
    // Перше посилання головніше: не перезаписуємо, поки воно не прострочене
    if (readPending()) return;
    setPref(PENDING_KEY, JSON.stringify({ ref, at: Date.now() }));
  } catch {
    /* немає window / приватний режим */
  }
};

const readPending = () => {
  try {
    const raw = getPref(PENDING_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data?.ref || !UID_RE.test(data.ref) || Date.now() - data.at > PENDING_TTL_MS) {
      removePref(PENDING_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
};

// Firebase з гарантовано відновленою сесією саме цього користувача (інакше null)
const firebaseFor = async (uid) => {
  const fb = await loadFirebase();
  await fb.auth.authStateReady();
  const current = fb.auth.currentUser;
  if (!current || current.uid !== uid || current.isAnonymous) return null;
  return { fb, current };
};

const statusFrom = (data) => {
  const activeDays = Number(data?.activeDays) || 0;
  const createdAt = toMs(data?.createdAt);
  const deadline = Number.isFinite(createdAt) ? createdAt + INVITE_WINDOW_DAYS * DAY_MS : NaN;
  const done = activeDays >= INVITE_ACTIVE_DAYS;
  return {
    activeDays,
    deadline,
    lastActiveAt: toMs(data?.lastActiveAt),
    done,
    expired: !done && Number.isFinite(deadline) && Date.now() > deadline,
  };
};

// Після входу: якщо акаунт новий і прийшов за посиланням — записуємо запрошення
// (день реєстрації — перший активний день). Нічого не кидає. true — записано.
export const claimPendingReferral = async (user) => {
  const pending = readPending();
  if (!pending || !user?.uid) return false;
  if (pending.ref === user.uid) {
    removePref(PENDING_KEY);
    return false;
  }
  try {
    const session = await firebaseFor(user.uid);
    if (!session) return false;
    const { fb, current } = session;

    // Старий акаунт за посиланням не рахується — лише створений після переходу
    const createdAt = Date.parse(current.metadata?.creationTime || "");
    if (!Number.isFinite(createdAt) || createdAt < pending.at - CREATION_SLACK_MS) {
      removePref(PENDING_KEY);
      return false;
    }

    const ref = fb.doc(fb.db, "referrals", current.uid);
    const snap = await fb.getDoc(ref);
    if (!snap.exists()) {
      await fb.setDoc(ref, {
        referrer: pending.ref,
        createdAt: fb.serverTimestamp(),
        activeDays: 1,
        lastActiveAt: fb.serverTimestamp(),
      });
      safeSet(inviteeKey(current.uid), "active");
      safeSet(inviteeCheckedKey(current.uid), utcDay());
    }
    removePref(PENDING_KEY);
    return !snap.exists();
  } catch (err) {
    console.warn("Не вдалося зарахувати запрошення:", err?.code || err);
    return false;
  }
};

// Стан запрошеного (для панелі): null — не запрошений або не вдалося перевірити
export const readInviteeStatus = async (uid) => {
  if (!uid || safeGet(inviteeKey(uid)) === "none") return null;
  try {
    const session = await firebaseFor(uid);
    if (!session) return null;
    const { fb } = session;
    const snap = await fb.getDoc(fb.doc(fb.db, "referrals", uid));
    if (!snap.exists()) {
      safeSet(inviteeKey(uid), "none");
      return null;
    }
    const status = { ...statusFrom(snap.data()), referrer: snap.data().referrer };
    safeSet(inviteeKey(uid), status.done ? "done" : "active");
    return status;
  } catch {
    return null;
  }
};

// Раз на добу: якщо це запрошений друг і ще набирає дні — зараховуємо сьогоднішній.
// Повертає { activeDays, done, justCounted, justDone } або null.
export const trackInviteeActivity = async (user) => {
  const uid = user?.uid;
  if (!uid) return null;
  const state = safeGet(inviteeKey(uid));
  if (state === "none" || state === "done") return null;
  const today = utcDay();
  if (safeGet(inviteeCheckedKey(uid)) === today) return null; // сьогодні вже перевіряли
  try {
    const session = await firebaseFor(uid);
    if (!session) return null;
    const { fb } = session;
    const ref = fb.doc(fb.db, "referrals", uid);
    const snap = await fb.getDoc(ref);
    safeSet(inviteeCheckedKey(uid), today);
    if (!snap.exists()) {
      safeSet(inviteeKey(uid), "none");
      return null;
    }
    const status = statusFrom(snap.data());
    if (status.done) {
      safeSet(inviteeKey(uid), "done");
      return { activeDays: status.activeDays, done: true, justCounted: false, justDone: false };
    }
    safeSet(inviteeKey(uid), "active");
    const sameDay = Number.isFinite(status.lastActiveAt) && utcDay(status.lastActiveAt) === today;
    if (status.expired || sameDay) {
      return { activeDays: status.activeDays, done: false, justCounted: false, justDone: false };
    }
    const activeDays = status.activeDays + 1;
    await fb.updateDoc(ref, { activeDays, lastActiveAt: fb.serverTimestamp() });
    const done = activeDays >= INVITE_ACTIVE_DAYS;
    if (done) safeSet(inviteeKey(uid), "done");
    return { activeDays, done, justCounted: true, justDone: done };
  } catch (err) {
    console.warn("Не вдалося зарахувати день:", err?.code || err);
    return null;
  }
};

export const isInvitee = (user) =>
  !!user && (user.isInvitee === true || safeGet(inviteeKey(user.uid)) === "done");

// ───────────── Сторона того, хто запрошує ─────────────

// Друзі за посиланням: { total, qualified, inProgress: [днів...], expired }.
// null — не вдалося перевірити.
export const countMyInvites = async (uid) => {
  if (!uid) return null;
  try {
    const session = await firebaseFor(uid);
    if (!session) return null;
    const { fb } = session;
    const q = fb.query(fb.collection(fb.db, "referrals"), fb.where("referrer", "==", uid), fb.limit(50));
    const snap = await fb.getDocs(q);
    const result = { total: snap.size, qualified: 0, inProgress: [], expired: 0 };
    snap.forEach((d) => {
      const s = statusFrom(d.data());
      if (s.done) result.qualified += 1;
      else if (s.expired) result.expired += 1;
      else result.inProgress.push(s.activeDays);
    });
    return result;
  } catch (err) {
    console.warn("Не вдалося перевірити запрошення:", err?.code || err);
    return null;
  }
};

export const rememberInviter = (uid) => {
  if (uid) safeSet(inviterKey(uid), String(Date.now()));
};

export const isInviter = (user) =>
  !!user && (user.isInviter === true || !!safeGet(inviterKey(user.uid)));
