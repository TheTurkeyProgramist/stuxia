// Пори року для мальків міст і країн: трава й рослини перефарбовуються
// за поточною датою. Весна й літо — рідна зелень, осінь (вересень–листопад) —
// помаранчево-червона, зима (грудень–лютий) — салатова.
// У південній півкулі сезони зсунуті на пів року.

const hexToHsl = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (!d) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1));
  let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h *= 60;
  return [h < 0 ? h + 360 : h, s, l];
};

const hslToHex = (h, s, l) => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] =
    h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return `#${[r, g, b].map((v) => Math.round((v + m) * 255).toString(16).padStart(2, "0")).join("")}`;
};

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Зелені, які пори року не змінюють:
// фасад будинку у Варшаві (не рослина) і хвойні — сосни Денвера, Лос-Анджелеса
// й Алмати, кипарис Рима, ялини Анкориджа, вузькі дерева tree() у сценах мов
const KEEP = new Set(["#7fae8a", "#1f6b3a", "#245e33", "#1d5b37", "#2f6b3a", "#2f5e33"]);

// Рослинність — помірно насичена зелень. Бірюзові дахи, мідна патина
// (відтінок > 145°) і кислотні логотипи (насиченість > 0.65) не чіпаємо.
const isPlant = (hex, [h, s]) => !KEEP.has(hex) && h >= 70 && h <= 145 && s >= 0.18 && s <= 0.65;

// Осінні відтінки: світла трава — золотаво-помаранчева, крони — по черзі
// помаранчеві й червоні (сталий вибір за кольором, щоб не блимало)
const AUTUMN_HUES = [24, 6, 32, 14];

const recolor = (hex, season, isGround) => {
  const hsl = hexToHsl(hex);
  if (!isPlant(hex, hsl)) return hex;
  const [, s, l] = hsl;
  if (season === "autumn") {
    if (isGround || l >= 0.5) return hslToHex(36, clamp(s + 0.25, 0.5, 0.7), clamp(l, 0.45, 0.6));
    const seed = parseInt(hex.slice(1), 16);
    return hslToHex(AUTUMN_HUES[seed % AUTUMN_HUES.length], clamp(s + 0.2, 0.5, 0.7), clamp(l, 0.3, 0.5));
  }
  // Зима — виразно салатова: світлішає пропорційно, тож крони лишаються
  // темнішими за траву
  if (season === "winter") {
    return hslToHex(80, clamp(s + 0.1, 0.45, 0.6), l + (0.76 - l) * 0.45);
  }
  return hex;
};

export const getSeason = (date = new Date(), southern = false) => {
  const month = (date.getMonth() + (southern ? 6 : 0)) % 12;
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
};

const cache = new Map();

// Смуга землі на всю ширину сцени (<rect x="-20" … width="440">) — це трава,
// навіть якщо вона темна, тож восени вона золотава, а не червона, як крони
const GROUND_RE = /<rect x="-20" y="[\d.]+" width="440"[^>]*?(#[0-9a-f]{6})/gi;

// Перефарбовує всі зелені рослин у SVG-розмітці під пору року
export const applySeason = (markup, season) => {
  if (!markup || season === "spring" || season === "summer") return markup;
  const ground = new Set([...markup.matchAll(GROUND_RE)].map((m) => m[1].toLowerCase()));
  return markup.replace(/#[0-9a-f]{6}\b/gi, (match) => {
    const hex = match.toLowerCase();
    const isGround = ground.has(hex);
    const key = `${season}${isGround ? "g" : ""}${hex}`;
    if (!cache.has(key)) cache.set(key, recolor(hex, season, isGround));
    return cache.get(key);
  });
};
