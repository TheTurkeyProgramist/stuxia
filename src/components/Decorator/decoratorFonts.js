// Шрифти Декоратора: Google Fonts, шрифти Стихії, системний або свій файл (пакети з customFonts).
// В оверрайдах зберігаємо: fontFamily + --font-family (готовий CSS-стек — щоб змінились і вкладені
// елементи, які беруть var(--font-family)) та --dec-font-src (звідки завантажити шрифт).
import { STYKHIIA_FONTS } from "../../utils/stykhiiaFont";
import { ensureFontPack, fontPackStack } from "../../utils/customFonts";

export const SYSTEM_FONT_STACK =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

// Google Fonts з кирилицею (українські літери є в усіх)
export const GOOGLE_FONTS = [
  { name: "Unbounded", hint: "Широкий сучасний — для заголовків", fallback: "sans-serif" },
  { name: "Montserrat", hint: "Геометричний, універсальний", fallback: "sans-serif" },
  { name: "Inter", hint: "Чіткий для інтерфейсів", fallback: "sans-serif" },
  { name: "Roboto", hint: "Класичний Android", fallback: "sans-serif" },
  { name: "Rubik", hint: "Злегка заокруглений", fallback: "sans-serif" },
  { name: "Comfortaa", hint: "Круглий і м'який", fallback: "sans-serif" },
  { name: "Exo 2", hint: "Технологічний, футуристичний", fallback: "sans-serif" },
  { name: "Oswald", hint: "Вузький, щільний", fallback: "sans-serif" },
  { name: "Russo One", hint: "Масивний, спортивний", fallback: "sans-serif" },
  { name: "Playfair Display", hint: "Елегантний із засічками", fallback: "serif" },
  { name: "PT Serif", hint: "Книжковий із засічками", fallback: "serif" },
  { name: "Caveat", hint: "Рукописний", fallback: "cursive" },
  { name: "Marck Script", hint: "Каліграфічний", fallback: "cursive" },
  { name: "Amatic SC", hint: "Тонкий рукописний, капітель", fallback: "cursive" },
  { name: "Press Start 2P", hint: "Піксельний, як у старих іграх", fallback: "monospace" },
  { name: "JetBrains Mono", hint: "Моноширинний для коду", fallback: "monospace" },
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
