// Розбір файлів для власного пакета шрифтів: .ttf/.otf/.woff/.woff2 або ZIP-архів
// (наприклад, «Download family» з Google Fonts). ZIP розпаковується без бібліотек —
// через вбудований DecompressionStream("deflate-raw").

const FONT_EXT = /\.(ttf|otf|woff2?)$/i;
const ZIP_EXT = /\.zip$/i;
const MB = 1024 * 1024;
const MAX_FILE = 15 * MB;
const MAX_PACK = 40 * MB;
const MAX_FILES = 24;
const EXT_PRIORITY = { woff2: 0, woff: 1, otf: 2, ttf: 3 };

const WEIGHTS = [
  [/hairline|thin/, 100],
  [/extra-?light|ultra-?light/, 200],
  [/light/, 300],
  [/semi-?bold|demi-?bold/, 600],
  [/extra-?bold|ultra-?bold/, 800],
  [/black|heavy/, 900],
  [/bold/, 700],
  [/medium/, 500],
];
const isVariable = (name) => /variable|\[wght/i.test(name);

function describeFile(fileName) {
  const lower = fileName.toLowerCase();
  const style = /italic|oblique/.test(lower) ? "italic" : "normal";
  if (isVariable(lower)) return { weight: "100 900", style };
  const hit = WEIGHTS.find(([re]) => re.test(lower));
  return { weight: String(hit ? hit[1] : 400), style };
}

// "OpenSans-BoldItalic.ttf" → "Open Sans"; "Open_Sans.zip" → "Open Sans"
function guessName(fileName) {
  const base = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]?variablefont.*$/i, "")
    .replace(/\[.*\]$/, "");
  const family = (/\.zip$/i.test(fileName) ? base : base.split(/[-_]/)[0]) || base;
  return family
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim()
    .slice(0, 40) || "Мій шрифт";
}

async function inflateRaw(buffer) {
  const stream = new Blob([buffer]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Response(stream).arrayBuffer();
}

async function unzipFonts(buffer) {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Цей браузер не вміє розпаковувати ZIP. Розпакуйте архів і виберіть самі файли шрифтів.");
  }
  const view = new DataView(buffer);
  const len = buffer.byteLength;
  let eocd = -1;
  for (let i = len - 22; i >= Math.max(0, len - 65557); i--) {
    if (view.getUint32(i, true) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("Архів пошкоджений або це не ZIP.");

  const count = view.getUint16(eocd + 10, true);
  let p = view.getUint32(eocd + 16, true);
  const decoder = new TextDecoder();
  const out = [];

  for (let n = 0; n < count && p + 46 <= len; n++) {
    if (view.getUint32(p, true) !== 0x02014b50) break;
    const method = view.getUint16(p + 10, true);
    const compSize = view.getUint32(p + 20, true);
    const rawSize = view.getUint32(p + 24, true);
    const nameLen = view.getUint16(p + 28, true);
    const extraLen = view.getUint16(p + 30, true);
    const commentLen = view.getUint16(p + 32, true);
    const localOff = view.getUint32(p + 42, true);
    const path = decoder.decode(new Uint8Array(buffer, p + 46, nameLen));
    p += 46 + nameLen + extraLen + commentLen;

    const fileName = path.split("/").pop();
    if (!FONT_EXT.test(fileName) || path.startsWith("__MACOSX") || fileName.startsWith("._")) continue;
    if (rawSize > MAX_FILE || localOff + 30 > len) continue;

    const start = localOff + 30 + view.getUint16(localOff + 26, true) + view.getUint16(localOff + 28, true);
    if (start + compSize > len) continue;
    const raw = buffer.slice(start, start + compSize);
    if (method === 0) out.push({ fileName, data: raw });
    else if (method === 8) out.push({ fileName, data: await inflateRaw(raw) });
  }
  return out;
}

async function isValidFont(data) {
  try {
    await new FontFace("Stykhiia Probe", data.slice(0)).load();
    return true;
  } catch {
    return false;
  }
}

// FileList → { name, files: [{ fileName, weight, style, data }] }; кидає Error з поясненням
export async function readFontPack(fileList) {
  const picked = Array.from(fileList || []);
  if (!picked.length) throw new Error("Файли не вибрано.");
  if (typeof FontFace === "undefined") throw new Error("Цей браузер не підтримує власні шрифти.");

  let raw = [];
  for (const file of picked) {
    if (ZIP_EXT.test(file.name)) {
      if (file.size > MAX_PACK) throw new Error("Архів завеликий (більше 40 МБ).");
      raw.push(...(await unzipFonts(await file.arrayBuffer())));
    } else if (FONT_EXT.test(file.name) && file.size <= MAX_FILE) {
      raw.push({ fileName: file.name, data: await file.arrayBuffer() });
    }
  }
  if (!raw.length) throw new Error("Не знайдено файлів шрифтів (.ttf, .otf, .woff, .woff2).");

  // Google Fonts кладе в архів і змінний шрифт, і папку static/ — змінного досить
  if (raw.some((f) => isVariable(f.fileName))) raw = raw.filter((f) => isVariable(f.fileName));

  // Той самий шрифт у кількох форматах — лишаємо найкомпактніший (woff2 → … → ttf)
  const byStem = new Map();
  for (const f of raw) {
    const stem = f.fileName.replace(/\.[^.]+$/, "").toLowerCase();
    const ext = f.fileName.split(".").pop().toLowerCase();
    const prev = byStem.get(stem);
    if (!prev || EXT_PRIORITY[ext] < EXT_PRIORITY[prev.fileName.split(".").pop().toLowerCase()]) {
      byStem.set(stem, f);
    }
  }

  const files = [];
  let total = 0;
  for (const f of byStem.values()) {
    if (files.length >= MAX_FILES) break;
    if (total + f.data.byteLength > MAX_PACK) break;
    if (!(await isValidFont(f.data))) continue;
    files.push({ fileName: f.fileName, ...describeFile(f.fileName), data: f.data });
    total += f.data.byteLength;
  }
  if (!files.length) throw new Error("Файли не схожі на шрифти або пошкоджені.");

  const zip = picked.find((f) => ZIP_EXT.test(f.name));
  return { name: guessName(zip ? zip.name : files[0].fileName), files };
}
