// Шрифти Декоратора: Google Fonts, шрифти Стихії, системний або свій файл (пакети з customFonts).
// В оверрайдах зберігаємо: fontFamily + --font-family (готовий CSS-стек — щоб змінились і вкладені
// елементи, які беруть var(--font-family)) та --dec-font-src (звідки завантажити шрифт).
import { STYKHIIA_FONTS } from "../../utils/stykhiiaFont";
import { ensureFontPack, fontPackStack } from "../../utils/customFonts";

import i18n from "../../i18n/i18n.js";
export const SYSTEM_FONT_STACK =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

// Google Fonts з кирилицею (українські літери є в усіх)
export const GOOGLE_FONTS = [
  { name: "Unbounded", get hint() { return i18n.t("ui.decoratorFonts.shyrokyiSuchasnyiDliaZaholovkiv"); }, fallback: "sans-serif" },
  { name: "Montserrat", get hint() { return i18n.t("ui.decoratorFonts.heometrychnyiUniversalnyi"); }, fallback: "sans-serif" },
  { name: "Inter", get hint() { return i18n.t("ui.decoratorFonts.chitkyiDliaInterfeisiv"); }, fallback: "sans-serif" },
  { name: "Roboto", get hint() { return i18n.t("ui.decoratorFonts.klasychnyiAndroid"); }, fallback: "sans-serif" },
  { name: "Rubik", get hint() { return i18n.t("ui.decoratorFonts.zlehkaZaokruhlenyi"); }, fallback: "sans-serif" },
  { name: "Comfortaa", get hint() { return i18n.t("ui.decoratorFonts.kruhlyiIMiakyi"); }, fallback: "sans-serif" },
  { name: "Exo 2", get hint() { return i18n.t("ui.decoratorFonts.tekhnolohichnyiFuturystychnyi"); }, fallback: "sans-serif" },
  { name: "Oswald", get hint() { return i18n.t("ui.decoratorFonts.vuzkyiShchilnyi"); }, fallback: "sans-serif" },
  { name: "Russo One", get hint() { return i18n.t("ui.decoratorFonts.masyvnyiSportyvnyi"); }, fallback: "sans-serif" },
  { name: "Playfair Display", get hint() { return i18n.t("ui.decoratorFonts.elehantnyiIzZasichkamy"); }, fallback: "serif" },
  { name: "PT Serif", get hint() { return i18n.t("ui.decoratorFonts.knyzhkovyiIzZasichkamy"); }, fallback: "serif" },
  { name: "Caveat", get hint() { return i18n.t("ui.decoratorFonts.rukopysnyi"); }, fallback: "cursive" },
  { name: "Marck Script", get hint() { return i18n.t("ui.decoratorFonts.kalihrafichnyi"); }, fallback: "cursive" },
  { name: "Amatic SC", get hint() { return i18n.t("ui.decoratorFonts.tonkyiRukopysnyiKapitel"); }, fallback: "cursive" },
  { name: "Press Start 2P", get hint() { return i18n.t("ui.decoratorFonts.pikselnyiIakUStarykh"); }, fallback: "monospace" },
  { name: "JetBrains Mono", get hint() { return i18n.t("ui.decoratorFonts.monoshyrynnyiDliaKodu"); }, fallback: "monospace" },
];

const cleanName = (name) => (name || "").replace(/["'<>\\;{}]/g, "").trim();

export const googleStack = (name, fallback = "sans-serif") => `"${cleanName(name)}", ${fallback}`;

// Варіант шрифту → що записати в оверрайди (null — «як на сайті», тобто нічого)
export const fontStyles = (choice) => {
  if (!choice) return null;
  if (choice.kind === "system") {
    return { stack: SYSTEM_FONT_STACK, src: "system" };
  }
  if (choice.kind === "stykhiia") {
    const font = STYKHIIA_FONTS.find((f) => f.id === choice.id);
    return font ? { stack: font.stack, src: `stykhiia:${font.id}` } : null;
  }
  if (choice.kind === "google") {
    const name = cleanName(choice.name);
    if (!name) return null;
    const known = GOOGLE_FONTS.find((f) => f.name.toLowerCase() === name.toLowerCase());
    return { stack: googleStack(name, known?.fallback), src: `google:${name}` };
  }
  if (choice.kind === "pack") {
    return { stack: fontPackStack(choice.id), src: `pack:${choice.id}` };
  }
  return null;
};

// Розбір --dec-font-src назад у варіант (для показу у списку)
export const parseFontSrc = (src = "") => {
  const value = String(src).trim();
  if (value === "system") return { kind: "system" };
  const [kind, ...rest] = value.split(":");
  const name = rest.join(":");
  if (kind === "stykhiia") return { kind, id: name };
  if (kind === "google") return { kind, name };
  if (kind === "pack") return { kind, id: name };
  return null;
};

// Підвантажує шрифт за --dec-font-src: Google — через <link>, власний пакет — з IndexedDB.
// Шрифти Стихії та системний уже доступні.
export const ensureDecoratorFont = (src) => {
  const choice = parseFontSrc(src);
  if (!choice) return;
  if (choice.kind === "google") {
    const name = cleanName(choice.name);
    if (!name) return;
    const id = `dec-gfont-${name.replace(/\s+/g, "-").toLowerCase()}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name).replace(/%20/g, "+")}:wght@400;700&display=swap`;
    document.head.appendChild(link);
  } else if (choice.kind === "pack") {
    ensureFontPack(choice.id);
  }
};
