import { firebaseConfig } from "./firebaseConfig.js";

let firebasePromise = null;

/**
 * Firebase SDK (~550 КБ) вантажиться лише коли справді потрібен:
 * акаунт, синхронізація карток, скарги на новини.
 * Повертає один об'єкт з db/auth/... з firebase.js і функціями firebase/firestore.
 */
export const loadFirebase = () => {
  if (!firebasePromise) {
    firebasePromise = Promise.all([
      import("./firebase.js"),
      import("firebase/firestore"),
    ])
      .then(([fb, firestore]) => ({ ...firestore, ...fb }))
      .catch((err) => {
        firebasePromise = null; // дозволяємо повторну спробу (напр. після відновлення зв'язку)
        throw err;
      });
  }
  return firebasePromise;
};

const REST_BASE = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents`;

// Значення REST API Firestore → звичайний JS (як docSnap.data() у SDK)
const fromRestValue = (v) => {
  if (!v) return null;
  if ("stringValue" in v) return v.stringValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("timestampValue" in v) return v.timestampValue;
  if ("nullValue" in v) return null;
  if ("arrayValue" in v) return (v.arrayValue.values || []).map(fromRestValue);
  if ("mapValue" in v) return fromRestFields(v.mapValue.fields);
  return null;
};
const fromRestFields = (fields = {}) =>
  Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, fromRestValue(v)]));

/**
 * Читання всієї колекції через REST — без SDK (для публічних колекцій).
 * @returns {Promise<Array<{id: string, data: object}>>}
 */
export async function listCollection(name) {
  const docs = [];
  let pageToken = "";
  do {
    const res = await fetch(
      `${REST_BASE}/${name}?pageSize=300&key=${firebaseConfig.apiKey}${pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : ""}`,
    );
    if (!res.ok) throw new Error(`Firestore REST ${res.status}`);
    const json = await res.json();
    for (const d of json.documents || []) {
      docs.push({ id: d.name.split("/").pop(), data: fromRestFields(d.fields) });
    }
    pageToken = json.nextPageToken || "";
  } while (pageToken);
  return docs;
}

/**
 * Стан техробіт через REST API Firestore — без SDK.
 * Документ: config/global → isMaintenanceMode, maintenanceEndTime, maintenanceMessage
 *
 * @returns {Promise<{isMaintenanceMode: boolean, endTime: string|null, message: string|null}>}
 */
export async function getMaintenanceStatus() {
  const off = { isMaintenanceMode: false, endTime: null, message: null };
  try {
    const res = await fetch(`${REST_BASE}/config/global?key=${firebaseConfig.apiKey}`);
    if (!res.ok) return off;
    const fields = (await res.json()).fields || {};
    const end = fields.maintenanceEndTime;
    return {
      isMaintenanceMode: !!fields.isMaintenanceMode?.booleanValue,
      endTime: end?.timestampValue ?? end?.stringValue ?? null,
      message: fields.maintenanceMessage?.stringValue ?? null,
    };
  } catch {
    // При помилці доступу або мережі не блокуємо сайт.
    return off;
  }
}
