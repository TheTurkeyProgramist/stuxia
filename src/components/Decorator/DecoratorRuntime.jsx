import { useEffect, useMemo, useRef } from "react";
import { toCssSelector } from "./DecoratorContext";
import { parseCssUrl, readMusicLevel } from "./decoratorSounds";
import { playClickEffect } from "./decoratorEffects";
import { ensureDecoratorFont } from "./decoratorFonts";

// Що вмикає «Інтерактив» Декоратора — шукаємо в усіх темах і станах
const hasKey = (overrides, key) =>
  Object.values(overrides).some((modes) =>
    Object.values(modes || {}).some((styles) => styles?.[key]),
  );

const isTypingTarget = (el) =>
  !!el?.closest?.("input, textarea, select, [contenteditable='true']");

/**
 * Поведінка Декоратора, якої немає в чистому CSS:
 *  • курсор-зображення (фото чи GIF) — малюємо самі, бо CSS-курсор GIF не анімує;
 *  • ефект натискання — з місця кліку вилітають зірочки, конфеті, сердечка…;
 *  • шрифти з Google Fonts чи власних файлів — підвантажуємо, коли вони потрібні;
 *  • звукова реакція — тінь, що спалахує при натисканні й «дихає» під фонову музику.
 * Налаштування читаємо з CSS-змінних (--dec-*), тож теми й :hover працюють самі собою.
 */
// Перший непорожній текстовий вузол елемента — «головний напис»
const findMainTextNode = (el) => {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => (node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
  });
  return walker.nextNode();
};

const DecoratorRuntime = ({ styleOverrides, showOriginal, isDecoratorMode, isDarkMode }) => {
  const overrides = showOriginal ? {} : styleOverrides;
  const hasCursorImages = useMemo(() => hasKey(overrides, "--dec-cursor-image"), [overrides]);
  const hasEffects = useMemo(() => hasKey(overrides, "--dec-click-fx"), [overrides]);
  // Джерела шрифтів (google:…, pack:…) — підвантажуємо кожне один раз
  const fontKey = useMemo(() => {
    const sources = new Set();
    Object.values(overrides).forEach((modes) =>
      Object.values(modes || {}).forEach((styles) => {
        if (styles?.["--dec-font-src"]) sources.add(styles["--dec-font-src"]);
      }),
    );
    return [...sources].join("\n");
  }, [overrides]);
  // Селектори елементів зі звуковою реакцією
  const reactKey = useMemo(
    () =>
      Object.entries(overrides)
        .filter(([, modes]) => Object.values(modes || {}).some((s) => s?.["--dec-react"]))
        .map(([elId]) => toCssSelector(elId))
        .join("\n"),
    [overrides],
  );

  const cubeKey = useMemo(
    () =>
      Object.entries(overrides)
        .filter(([, modes]) => Object.values(modes || {}).some((s) => s?.["--dec-3d"]))
        .map(([elId]) => toCssSelector(elId))
        .join("\n"),
    [overrides],
  );

  const decoratorModeRef = useRef(isDecoratorMode);
  decoratorModeRef.current = isDecoratorMode;

  useEffect(() => {
    if (fontKey) fontKey.split("\n").forEach(ensureDecoratorFont);
  }, [fontKey]);

  /* ---------- Курсор-зображення ---------- */
  useEffect(() => {
    if (!hasCursorImages) return undefined;
    const img = document.createElement("img");
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.setAttribute("data-decorator-ignore", "true");
    Object.assign(img.style, {
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: "2147483647",
      pointerEvents: "none",
      display: "none",
      height: "auto",
      willChange: "transform",
      userSelect: "none",
    });
    document.body.appendChild(img);
    let current = "";

    const onOver = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      const cs = getComputedStyle(e.target);
      const src = parseCssUrl(cs.getPropertyValue("--dec-cursor-image"));
      if (src !== current) {
        current = src;
        if (src) img.src = src;
      }
      if (src) {
        img.style.width = cs.getPropertyValue("--dec-cursor-size").trim() || "32px";
        img.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      img.style.display = src ? "block" : "none";
    };
    const onMove = (e) => {
      if (current) img.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const onLeave = (e) => {
      if (!e.relatedTarget) img.style.display = "none";
    };

    document.addEventListener("pointerover", onOver, true);
    document.addEventListener("pointermove", onMove, { capture: true, passive: true });
    document.addEventListener("pointerout", onLeave, true);
    return () => {
      document.removeEventListener("pointerover", onOver, true);
      document.removeEventListener("pointermove", onMove, true);
      document.removeEventListener("pointerout", onLeave, true);
      img.remove();
    };
  }, [hasCursorImages]);

  /* ---------- 3D-кнопка ---------- */
  // Каркас задньої грані — ::before з position: absolute, тож кнопці потрібна точка відліку.
  // Ставимо relative лише «статичним» елементам: absolute/fixed/sticky уже є точкою відліку,
  // а примусовий relative зламав би їхнє розташування.
  useEffect(() => {
    if (!cubeKey) return undefined;
    const selectors = cubeKey.split("\n");
    const marked = new Set();
    const apply = () => {
      selectors.forEach((sel) => {
        try {
          document.querySelectorAll(sel).forEach((el) => {
            if (marked.has(el) || getComputedStyle(el).position !== "static") return;
            el.style.position = "relative";
            marked.add(el);
          });
        } catch {
          /* некоректний селектор — пропускаємо */
        }
      });
    };
    apply();
    // Елементи можуть з'явитися пізніше (лінива підвантажка секцій)
    const timer = setInterval(apply, 1500);
    return () => {
      clearInterval(timer);
      marked.forEach((el) => el.style.removeProperty("position"));
    };
  }, [cubeKey]);

  /* ---------- Текст у блоці ---------- */
  // Селектор → новий текст для поточної теми. Змінюємо лише nodeValue наявного текстового вузла:
  // React і далі володіє тим самим вузлом, тож нічого не ламається. Якщо React перемалює
  // напис — MutationObserver підставить наш текст знову.
  const textKey = useMemo(() => {
    const mode = isDarkMode ? "dark_default" : "light_default";
    const entries = Object.entries(overrides)
      .map(([elId, modes]) => [toCssSelector(elId), modes?.[mode]?.["--dec-text"]])
      .filter(([, text]) => typeof text === "string" && text !== "");
    return entries.length ? JSON.stringify(entries) : "";
  }, [overrides, isDarkMode]);

  useEffect(() => {
    if (!textKey) return undefined;
    const entries = JSON.parse(textKey);
    const originals = new Map(); // текстовий вузол → початковий текст
    let frame = 0;

    const apply = () => {
      frame = 0;
      entries.forEach(([selector, text]) => {
        let elements;
        try {
          elements = document.querySelectorAll(selector);
        } catch {
          return; // некоректний селектор — пропускаємо
        }
        elements.forEach((el) => {
          const node = findMainTextNode(el);
          if (!node || node.nodeValue === text) return;
          if (!originals.has(node)) originals.set(node, node.nodeValue);
          node.nodeValue = text;
        });
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      // Повертаємо справжній текст (якщо React його ще не перемалював)
      originals.forEach((original, node) => {
        if (node.isConnected) node.nodeValue = original;
      });
    };
  }, [textKey]);

  /* ---------- Ефект натискання ---------- */
  useEffect(() => {
    if (!hasEffects) return undefined;
    const onDown = (e) => {
      if (e.button > 0) return;
      // У режимі Декоратора клік відкриває редактор — ефект лише для Alt + клік
      if (decoratorModeRef.current && !e.altKey) return;
      if (isTypingTarget(e.target)) return;
      const cs = getComputedStyle(e.target);
      const effect = cs.getPropertyValue("--dec-click-fx").trim();
      if (!effect) return;
      const color = cs.getPropertyValue("--dec-click-fx-color").trim();
      playClickEffect(effect, e.clientX, e.clientY, color || undefined);
    };
    document.addEventListener("pointerdown", onDown, true);
    return () => document.removeEventListener("pointerdown", onDown, true);
  }, [hasEffects]);

  /* ---------- Звукова реакція ---------- */
  useEffect(() => {
    if (!reactKey) return undefined;
    const selectors = reactKey.split("\n");
    let elements = [];
    const press = new Map(); // елемент → сила натискання 0…1
    let held = null;
    let music = 0;
    let raf = 0;

    const refresh = () => {
      const found = new Set();
      selectors.forEach((sel) => {
        try {
          document.querySelectorAll(sel).forEach((el) => found.add(el));
        } catch {
          /* некоректний селектор — пропускаємо */
        }
      });
      elements.forEach((el) => {
        if (!found.has(el)) el.style.removeProperty("--dec-energy");
      });
      elements = [...found];
    };

    const frame = () => {
      raf = 0;
      const level = readMusicLevel();
      // Швидко роздувається, повільно спадає — тінь «дихає» в такт
      const target = level ?? 0;
      music = target > music ? music * 0.4 + target * 0.6 : music * 0.88 + target * 0.12;
      let busy = level !== null || music > 0.01;

      elements.forEach((el) => {
        let p = press.get(el) || 0;
        if (el === held) p = 1;
        else if (p) {
          p = p * 0.86;
          if (p < 0.02) p = 0;
        }
        press.set(el, p);
        if (p) busy = true;
        const energy = Math.max(music, p);
        const prev = Number(el.style.getPropertyValue("--dec-energy")) || 0;
        if (Math.abs(prev - energy) > 0.008 || (energy === 0 && prev !== 0)) {
          el.style.setProperty("--dec-energy", energy.toFixed(3));
        }
      });
      if (busy) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onDown = (e) => {
      const el = elements.find((node) => node.contains(e.target));
      if (!el) return;
      held = el;
      press.set(el, 1);
      kick();
    };
    const onUp = () => {
      held = null;
      kick();
    };

    refresh();
    kick();
    // Елементи можуть з'являтися пізніше, а музика — вмикатися: перевіряємо раз на секунду
    const timer = setInterval(() => {
      refresh();
      kick();
    }, 1000);
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("pointerup", onUp, true);
    document.addEventListener("pointercancel", onUp, true);
    return () => {
      clearInterval(timer);
      cancelAnimationFrame(raf);
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("pointerup", onUp, true);
      document.removeEventListener("pointercancel", onUp, true);
      elements.forEach((el) => el.style.removeProperty("--dec-energy"));
    };
  }, [reactKey]);

  return null;
};

export default DecoratorRuntime;
