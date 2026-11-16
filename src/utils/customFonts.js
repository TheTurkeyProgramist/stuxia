// Власні пакети шрифтів користувача. Файли лежать лише на цьому пристрої (IndexedDB) і нікуди
// не відправляються. У user.fontFamily пишеться тільки "pack:<id>" — на іншому пристрої,
// де такого пакета немає, просто лишиться звичайний шрифт сайту.
// Розбір файлів/ZIP — окремо в customFontImport.js (потрібен лише в Налаштуваннях).
import localforage from "localforage";

export const FONT_PACK_PREFIX = "pack:";
const INDEX_KEY = "index";

const store = localforage.createInstance({ name: "stykhiia-fonts", storeName: "packs" });

const loading = new Map(); // id → Promise<stack | null>
const registered = new Map(); // id → FontFace[]

export const getFontPackId = (value) =>
  typeof value === "string" && value.startsWith(FONT_PACK_PREFIX)
    ? value.slice(FONT_PACK_PREFIX.length)
    : null;

export const fontPackValue = (id) => FONT_PACK_PREFIX + id;

// Внутрішня назва, щоб не зіткнутися зі шрифтом, встановленим у системі, чи з Google Fonts
const familyOf = (id) => `Stykhiia Pack ${id}`;
export const fontPackStack = (id) => `"${familyOf(id)}", system-ui, sans-serif`;

export async function listFontPacks() {
  try {
    return (await store.getItem(INDEX_KEY)) || [];
  } catch {
    return [];
  }
}

async function registerPack(id) {
  if (typeof FontFace === "undefined" || !document.fonts) return null;
  let pack;
  try {
    pack = await store.getItem(id);
  } catch {
    return null;
  }
  if (!pack?.files?.length) return null;

  const faces = [];
  for (const f of pack.files) {
    try {
      // slice — FontFace може «забрати» буфер собі, а він ще потрібен у сховищі
      const face = new FontFace(familyOf(id), f.data.slice(0), {
        weight: f.weight,
        style: f.style,
        display: "swap",
      });
      await face.load();
      document.fonts.add(face);
      faces.push(face);
    } catch {
      /* пошкоджений файл — решта пакета все одно працює */
    }
  }
  if (!faces.length) return null;
  registered.set(id, faces);
  return fontPackStack(id);
}

// Реєструє шрифти пакета в document.fonts (один раз) і повертає CSS-стек або null
export function ensureFontPack(id) {
  if (!id) return Promise.resolve(null);
  if (!loading.has(id)) {
    loading.set(
      id,
      registerPack(id).then((stack) => {
        if (!stack) loading.delete(id);
        return stack;
      }),
    );
  }
  return loading.get(id);
}

const makeId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// pack: { name, files: [{ fileName, weight, style, data: ArrayBuffer }] } → meta з індексу
export async function saveFontPack(pack) {
  const id = makeId();
  const size = pack.files.reduce((s, f) => s + f.data.byteLength, 0);
  const meta = { id, name: pack.name, count: pack.files.length, size, addedAt: Date.now() };
  try {
    await store.setItem(id, { id, name: pack.name, files: pack.files });
    const index = await listFontPacks();
    await store.setItem(INDEX_KEY, [...index, meta]);
  } catch (err) {
    store.removeItem(id).catch(() => {});
    const quota = err?.name === "QuotaExceededError" || /quota/i.test(err?.message || "");
    throw new Error(
      quota
        ? "Браузеру не вистачає місця для цього пакета. Видаліть старий пакет або візьміть менше файлів."
        : "Не вдалося зберегти пакет у браузері.",
      { cause: err },
    );
  }
  return meta;
}

export async function deleteFontPack(id) {
  registered.get(id)?.forEach((face) => document.fonts?.delete(face));
  registered.delete(id);
  loading.delete(id);
  await store.removeItem(id);
  const index = await listFontPacks();
  await store.setItem(INDEX_KEY, index.filter((p) => p.id !== id));
}
