import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import localforage from "localforage";
import DecoratorRuntime from "./DecoratorRuntime.jsx";
import DecoratorDraftPrompt from "./DecoratorDraftPrompt.jsx";
import DecorLayer from "./DecorLayer.jsx";

export const DecoratorContext = createContext();

export const useDecorator = () => useContext(DecoratorContext);

export const getUniqueSelector = (el) => {
  if (!el || !(el instanceof Element)) return "";
  const path = [];
  let current = el;
  while (current && current.nodeType === Node.ELEMENT_NODE && current !== document.body && current !== document.documentElement) {
    let selector = current.nodeName.toLowerCase();
    if (current.id) {
      selector += "#" + (window.CSS?.escape ? CSS.escape(current.id) : current.id);
      path.unshift(selector);
      break; // ID is unique, we can stop here!
    } else {
      let sib = current.previousSibling;
      let nth = 1;
      while (sib) {
        if (sib.nodeType === Node.ELEMENT_NODE && sib.nodeName === current.nodeName) {
          nth++;
        }
        sib = sib.previousSibling;
      }
      selector += `:nth-of-type(${nth})`;
    }
    path.unshift(selector);
    current = current.parentNode;
  }
  return path.join(" > ");
};

export const toCssSelector = (elId) =>
  elId.includes(" > ") || elId.includes("#") || elId.includes(":")
    ? elId
    : `[data-decorator-id="${elId}"]`;

const toKebab = (prop) =>
  prop.startsWith("--") ? prop : prop.replace(/([A-Z])/g, "-$1").toLowerCase();

const MODE_PREFIX = {
  light_default: (sel) => `body:not(.decorator-dark-mode) ${sel}`,
  light_hover: (sel) => `body:not(.decorator-dark-mode) ${sel}:hover`,
  dark_default: (sel) => `body.decorator-dark-mode ${sel}`,
  dark_hover: (sel) => `body.decorator-dark-mode ${sel}:hover`,
};

// Не CSS: такі ключі обробляє DecoratorRuntime (довільний текст зламав би таблицю стилів)
const NON_CSS_KEYS = new Set(["--dec-text"]);

const ruleCss = (selector, styles) => {
  const decls = Object.entries(styles)
    .filter(([prop, val]) => val !== "" && val != null && !NON_CSS_KEYS.has(prop))
    .map(([prop, val]) => `${toKebab(prop)}: ${val} !important;`)
    .join(" ");
  return decls ? `${selector} { ${decls} }\n` : "";
};

// Тінь звукової реакції: --dec-energy (0…1) щокадру ставить DecoratorRuntime
const reactShadow = (color) =>
  // У спокої (energy = 0) тінь нульова й невидима — з'являється лише від натискань і музики
  `0 0 calc(var(--dec-energy, 0) * 38px) calc(var(--dec-energy, 0) * 9px) ${color}`;
const REACT_DEFAULT_COLOR = "color-mix(in srgb, currentColor 45%, transparent)";

export const CUBE_DEFAULT_DEPTH = "6px";
export const CUBE_DEFAULT_DIR = "up-right";
const CUBE_DEFAULT_COLOR = "color-mix(in srgb, currentColor 75%, transparent)";
// inherit — ::before бере колір фону самої кнопки, тож бічні грані «з того ж матеріалу»
export const CUBE_DEFAULT_FILL = "inherit";

// Куди зсунута задня грань. Каркас малюємо для «вгору-праворуч», решту — віддзеркаленням.
// box — де ::before виходить за кнопку, flip — дзеркало, shift — куди «заходить» кнопка на ховері
export const CUBE_DIRECTIONS = {
  "up-right": { label: "Вгору-праворуч", box: ["top", "right"], flip: "none", shift: [1, -1] },
  "up-left": { label: "Вгору-ліворуч", box: ["top", "left"], flip: "scaleX(-1)", shift: [-1, -1] },
  "down-right": { label: "Вниз-праворуч", box: ["bottom", "right"], flip: "scaleY(-1)", shift: [1, 1] },
  "down-left": { label: "Вниз-ліворуч", box: ["bottom", "left"], flip: "scale(-1, -1)", shift: [-1, 1] },
};

/*
 * Задня грань 3D-кнопки (як у куба): рамка, зсунута на d, діагональні ребра на кутах
 * і заливка бічних граней. ::before займає кнопку + смугу d з боку зсуву; clip-path лишає
 * лише бічні грані (усе поза кнопкою), тож ребра «за» кнопкою сховані, як у непрозорого куба.
 *
 *   d ┌──────────────┐      ← верхнє ребро задньої грані
 *    ╱▓▓▓▓▓▓▓▓▓▓▓▓▓╱│      ← діагоналі на кутах, ▓ — заливка
 *   ┌──────────────┐▓│
 *   │   кнопка     │▓│      ← праве ребро задньої грані
 *   │              │╱
 *   └──────────────┘
 */
const cubeBackground = (d, c, t = "2px") => {
  const solid = (color) => `linear-gradient(${color}, ${color})`;
  const diag = `linear-gradient(to top left, transparent calc(50% - 1.5px), ${c} calc(50% - 1.5px), ${c} calc(50% + 1.5px), transparent calc(50% + 1.5px))`;
  return [
    [solid(c), "right 0 top 0", `calc(100% - ${d}) ${t}`], // верхнє ребро
    [solid(c), "right 0 top 0", `${t} calc(100% - ${d})`], // праве ребро
    [solid(c), `left ${d} top 0`, `${t} ${d}`], // ліве ребро над кнопкою
    [solid(c), `right 0 bottom ${d}`, `${d} ${t}`], // нижнє ребро праворуч від кнопки
    [diag, "left 0 top 0", `${d} ${d}`], // діагональ зліва вгорі
    [diag, "right 0 top 0", `${d} ${d}`], // діагональ справа вгорі
    [diag, "right 0 bottom 0", `${d} ${d}`], // діагональ справа внизу
  ]
    .map(([image, position, size]) => `${image} ${position} / ${size} no-repeat`)
    .join(", ");
};

// Бічні грані = кнопка з задньою гранню мінус сама кнопка (L-подібна фігура зі скошеними кінцями)
const cubeClip = (d) =>
  `polygon(0 ${d}, ${d} 0, 100% 0, 100% calc(100% - ${d}), calc(100% - ${d}) 100%, calc(100% - ${d}) ${d})`;

const cubeCss = (wrapDef, wrapHov, selector, { d, color, fill, dir }) => {
  const { box, flip } = CUBE_DIRECTIONS[dir] || CUBE_DIRECTIONS[CUBE_DEFAULT_DIR];
  const sides = ["top", "right", "bottom", "left"]
    .map((side) => `${side}: ${box.includes(side) ? `calc(-1 * ${d})` : "0"} !important;`)
    .join(" ");
  return (
    `${wrapDef(selector)}::before { content: "" !important; position: absolute !important; ${sides} ` +
    `pointer-events: none !important; border: none !important; border-radius: 0 !important; ` +
    `transform: ${flip} !important; clip-path: ${cubeClip(d)} !important; ` +
    `background: ${cubeBackground(d, color)} !important; ` +
    // Заливка бічних граней — колір під ребрами (clip-path лишає її лише на самих гранях)
    `background-color: ${fill} !important; opacity: 1; transition: opacity 0.15s ease; }\n` +
    // На ховері кнопка «заходить» у задню грань, і грань зникає
    `${wrapHov(selector)}::before { opacity: 0 !important; }\n`
  );
};

// Будує CSS для елемента; порожні значення ігноруються.
// «Інтерактив» (3D, звукова реакція) береться зі стану «Звичайний» і доповнює :hover.
export const buildOverridesCss = (elId, modes) => {
  const selector = toCssSelector(elId);
  let css = "";
  ["light", "dark"].forEach((theme) => {
    const def = modes?.[`${theme}_default`] || {};
    const hov = modes?.[`${theme}_hover`] || {};
    const wrapDef = MODE_PREFIX[`${theme}_default`];
    const wrapHov = MODE_PREFIX[`${theme}_hover`];
    const extraDef = {};
    const extraHov = {};

    const is3d = !!def["--dec-3d"];
    const depth = def["--dec-3d-depth"] || CUBE_DEFAULT_DEPTH;
    const dir = CUBE_DIRECTIONS[def["--dec-3d-dir"]] ? def["--dec-3d-dir"] : CUBE_DEFAULT_DIR;

    if (def["--dec-react"]) {
      // Власний колір теж робимо напівпрозорим — тінь не має перекривати сусідні елементи
      const customGlow = def["--dec-react-color"];
      const glow = reactShadow(
        customGlow ? `color-mix(in srgb, ${customGlow} 50%, transparent)` : REACT_DEFAULT_COLOR,
      );
      const withGlow = (user) => [user && user !== "none" ? user : "", glow].filter(Boolean).join(", ");
      extraDef.boxShadow = withGlow(def.boxShadow);
      if (hov.boxShadow) extraHov.boxShadow = withGlow(hov.boxShadow);
    }

    if (is3d) {
      extraDef.transition = def.transition || "transform 0.15s ease";
      // На ховері кнопка зсувається на пів глибини в бік задньої грані
      const [sx, sy] = CUBE_DIRECTIONS[dir].shift;
      extraHov.transform = `${hov.transform || def.transform || ""} translate(calc(${depth} * ${sx / 2}), calc(${depth} * ${sy / 2}))`.trim();
    }

    css += ruleCss(wrapDef(selector), { ...def, ...extraDef });
    css += ruleCss(wrapHov(selector), { ...hov, ...extraHov });
    if (is3d) {
      css += cubeCss(wrapDef, wrapHov, selector, {
        d: depth,
        dir,
        color: def["--dec-3d-color"] || CUBE_DEFAULT_COLOR,
        fill: def["--dec-3d-fill"] || CUBE_DEFAULT_FILL,
      });
    }

    // Курсор-зображення малює DecoratorRuntime — системний ховаємо (і на вкладених елементах)
    [[def, wrapDef], [hov, wrapHov]].forEach(([styles, wrap]) => {
      if (styles["--dec-cursor-image"]) {
        css += `${wrap(selector)}, ${wrap(selector)} * { cursor: none !important; }\n`;
      }
    });
  });
  return css;
};

// Два декоративні шаблони; «Оригінал» — окремий режим без змін Декоратора
export const PRESET_COUNT = 2;

// Старий формат ({ color: "red" }) → { light_default: { color: "red" } }
const migrateOverrides = (saved) => {
  if (!saved) return {};
  const migrated = {};
  Object.keys(saved).forEach((elId) => {
    const elData = saved[elId] || {};
    migrated[elId] =
      elData.light_default || elData.light_hover || elData.dark_default || elData.dark_hover
        ? elData
        : { light_default: { ...elData } };
  });
  return migrated;
};

// Зміни шаблону = записи журналу + декор-об'єкти (фото/відео)
const slotSize = (slot) => (slot?.log?.length || 0) + (slot?.decor?.length || 0);

// Скільки змін у чернетці — у всіх шаблонах разом
const countDraftChanges = (draft) =>
  (draft.log?.length || 0) +
  (draft.decor?.length || 0) +
  Object.entries(draft.slots || {})
    .filter(([index]) => Number(index) !== draft.activePreset)
    .reduce((sum, [, slot]) => sum + slotSize(slot), 0);

// Чи є в шаблонах хоч одна зміна (для чернетки незбережених змін)
const hasAnyChanges = (log, slots, decor = []) =>
  log.length > 0 || decor.length > 0 || Object.values(slots || {}).some((slot) => slotSize(slot) > 0);

const makeDecorId = () => `decor-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

/*
 * Режими Декоратора:
 *  off  — зміни Декоратора не застосовуються (сайт як є);
 *  view — перегляд: зміни видно, сайт працює як звичайно, керування — у «Параметрах»;
 *  edit — редагування: клік по елементу відкриває редактор.
 */
export const DECORATOR_VIEW_MODES = ["off", "view", "edit"];

export const DecoratorProvider = ({ children, isDarkMode }) => {
  const [viewMode, setViewModeState] = useState("view");
  const isDecoratorMode = viewMode === "edit";
  const [isPersistent, setIsPersistent] = useState(false);
  // Незбережені зміни минулої сесії: чекають відповіді «Зберегти / Відкинути»
  const [pendingDraft, setPendingDraft] = useState(null);
  const [styleOverrides, setStyleOverrides] = useState({});
  const [changeLog, setChangeLog] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  // Незалежні шаблони декоратора: активний живе в styleOverrides/changeLog, решта — у slots
  const [activePreset, setActivePreset] = useState(0);
  const [slots, setSlots] = useState({});
  // «Оригінал»: сайт без жодних змін Декоратора (шаблони при цьому не втрачаються)
  const [showOriginal, setShowOriginal] = useState(false);
  // Декор-об'єкти активного шаблону: { id, kind: "image"|"video", blob, x, y, w, h, r, z }
  const [decorItems, setDecorItems] = useState([]);

  // Sync isDarkMode to body class for CSS selection
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("decorator-dark-mode");
    } else {
      document.body.classList.remove("decorator-dark-mode");
    }
  }, [isDarkMode]);

  // Режим зберігається завжди; «Редагування» після перезавантаження стає «Переглядом»,
  // щоб сайт одразу не перехоплював кліки
  const setViewMode = useCallback((mode) => {
    if (!DECORATOR_VIEW_MODES.includes(mode)) return;
    setViewModeState(mode);
    localforage.setItem("decorator_view_mode", mode === "edit" ? "view" : mode).catch(() => {});
  }, []);
  // Сумісність зі старим API: увімкнути/вимкнути редагування
  const setIsDecoratorMode = useCallback((on) => setViewMode(on ? "edit" : "view"), [setViewMode]);

  useEffect(() => {
    const hydrate = async () => {
      try {
        const savedViewMode = await localforage.getItem("decorator_view_mode");
        if (savedViewMode === "off" || savedViewMode === "view") setViewModeState(savedViewMode);

        const savedIsPersistent = await localforage.getItem(
          "decorator_persistent",
        );
        if (!savedIsPersistent) {
          // Зберігання вимкнене, але з минулої сесії лишилась чернетка — спитаємо, чи зберегти
          const draft = await localforage.getItem("decorator_draft");
          if (draft && hasAnyChanges(draft.log || [], draft.slots, draft.decor)) setPendingDraft(draft);
        }
        if (savedIsPersistent !== null) {
          setIsPersistent(savedIsPersistent);
          if (savedIsPersistent) {
            const savedOverrides = await localforage.getItem(
              "decorator_overrides",
            );
            const savedLog = await localforage.getItem("decorator_changelog");
            if (savedOverrides) setStyleOverrides(migrateOverrides(savedOverrides));
            if (savedLog) setChangeLog(savedLog);
            const savedDecor = await localforage.getItem("decorator_decor");
            if (Array.isArray(savedDecor)) setDecorItems(savedDecor);
            const savedSlots = await localforage.getItem("decorator_slots");
            const savedActive = await localforage.getItem("decorator_active_preset");
            const savedOriginal = await localforage.getItem("decorator_show_original");
            if (savedSlots) setSlots(savedSlots);
            if (Number.isInteger(savedActive) && savedActive < PRESET_COUNT) {
              setActivePreset(savedActive);
            } else if (Number.isInteger(savedActive)) {
              // Колишній «Пресет 3» більше не існує — повертаємось до шаблону 1
              const first = savedSlots?.[0] || { overrides: {}, log: [] };
              setStyleOverrides(first.overrides || {});
              setChangeLog(first.log || []);
              setDecorItems(first.decor || []);
              setActivePreset(0);
            }
            if (savedOriginal === true) setShowOriginal(true);
          }
        }
      } catch (err) {
        console.error("Error hydrating decorator state", err);
      } finally {
        setIsHydrated(true);
      }
    };
    hydrate();
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    if (isPersistent) {
      localforage.setItem("decorator_overrides", styleOverrides);
      localforage.setItem("decorator_changelog", changeLog);
      localforage.setItem("decorator_slots", slots);
      localforage.setItem("decorator_active_preset", activePreset);
      localforage.setItem("decorator_show_original", showOriginal);
      localforage.setItem("decorator_decor", decorItems);
      localforage.removeItem("decorator_draft");
    } else {
      localforage.removeItem("decorator_show_original");
      localforage.removeItem("decorator_slots");
      localforage.removeItem("decorator_active_preset");
      localforage.removeItem("decorator_overrides");
      localforage.removeItem("decorator_changelog");
      localforage.removeItem("decorator_decor");
      // Чернетка: незбережені зміни переживуть перезавантаження, а після нього сайт спитає,
      // чи їх зберегти. Поки питання з минулої сесії без відповіді — стару чернетку не чіпаємо.
      if (!pendingDraft) {
        if (hasAnyChanges(changeLog, slots, decorItems)) {
          localforage.setItem("decorator_draft", {
            overrides: styleOverrides,
            log: changeLog,
            decor: decorItems,
            slots,
            activePreset,
            showOriginal,
          });
        } else {
          localforage.removeItem("decorator_draft");
        }
      }
    }
    localforage.setItem("decorator_persistent", isPersistent);
  }, [styleOverrides, changeLog, decorItems, slots, activePreset, showOriginal, isPersistent, isHydrated, pendingDraft]);

  // «Зберегти»: відновлюємо зміни з чернетки й вмикаємо зберігання після оновлення
  const restoreDraft = useCallback(() => {
    if (!pendingDraft) return;
    setStyleOverrides(migrateOverrides(pendingDraft.overrides));
    setChangeLog(pendingDraft.log || []);
    setDecorItems(Array.isArray(pendingDraft.decor) ? pendingDraft.decor : []);
    setSlots(pendingDraft.slots || {});
    const active = pendingDraft.activePreset;
    setActivePreset(Number.isInteger(active) && active < PRESET_COUNT ? active : 0);
    setShowOriginal(pendingDraft.showOriginal === true);
    setIsPersistent(true);
    setPendingDraft(null);
  }, [pendingDraft]);

  const discardDraft = useCallback(() => {
    localforage.removeItem("decorator_draft");
    setPendingDraft(null);
  }, []);

  // Generate and inject global CSS
  useEffect(() => {
    let styleTag = document.getElementById("decorator-styles");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "decorator-styles";
      document.head.appendChild(styleTag);
    }

    let css = "";
    // «Оригінал» або режим «Вимкнено» — сайт без змін Декоратора
    if (!showOriginal && viewMode !== "off") {
      Object.entries(styleOverrides).forEach(([elId, modes]) => {
        css += buildOverridesCss(elId, modes);
      });
    }

    styleTag.innerHTML = css;
  }, [styleOverrides, showOriginal, viewMode]);

  const applyStyle = useCallback(
    (
      elementId,
      tagName,
      property,
      originalValue,
      newValue,
      mode = "light_default",
    ) => {
      // Редагування в «Оригіналі» повертає активний шаблон, щоб зміну було видно
      setShowOriginal(false);
      setStyleOverrides((prev) => {
        const elStyles = { ...(prev[elementId] || {}) };
        const modeStyles = { ...(elStyles[mode] || {}) };
        if (newValue === "" || newValue == null) {
          delete modeStyles[property];
        } else {
          modeStyles[property] = newValue;
        }
        if (Object.keys(modeStyles).length === 0) {
          delete elStyles[mode];
        } else {
          elStyles[mode] = modeStyles;
        }
        const next = { ...prev };
        if (Object.keys(elStyles).length === 0) {
          delete next[elementId];
        } else {
          next[elementId] = elStyles;
        }
        return next;
      });

      setChangeLog((prev) => [
        ...prev,
        {
          id: Date.now() + "-" + Math.random().toString(36).slice(2, 7),
          elementId,
          tagName,
          property,
          originalValue,
          newValue,
          mode,
          timestamp: new Date().toLocaleTimeString("uk-UA"),
        },
      ]);
    },
    [],
  );

  const switchPreset = useCallback(
    (index) => {
      if (index < 0 || index >= PRESET_COUNT) return;
      setShowOriginal(false);
      if (index === activePreset) return;
      const next = slots[index] || { overrides: {}, log: [], decor: [] };
      setSlots((prev) => ({
        ...prev,
        [activePreset]: { overrides: styleOverrides, log: changeLog, decor: decorItems },
      }));
      setStyleOverrides(next.overrides || {});
      setChangeLog(next.log || []);
      setDecorItems(next.decor || []);
      setActivePreset(index);
    },
    [activePreset, slots, styleOverrides, changeLog, decorItems],
  );

  const undoChange = useCallback((changeId) => {
    setChangeLog((prev) => {
      const change = prev.find((c) => c.id === changeId);
      if (!change) return prev;

      setStyleOverrides((prevStyles) => {
        const elStyles = { ...(prevStyles[change.elementId] || {}) };
        const mode = change.mode || "light_default";
        const modeStyles = { ...(elStyles[mode] || {}) };

        const earlierChanges = prev.filter(
          (c) =>
            c.elementId === change.elementId &&
            c.property === change.property &&
            (c.mode || "light_default") === mode &&
            c.id !== changeId,
        );

        if (earlierChanges.length > 0) {
          modeStyles[change.property] =
            earlierChanges[earlierChanges.length - 1].newValue;
        } else {
          delete modeStyles[change.property];
        }

        elStyles[mode] = modeStyles;

        // Clean up empty modes
        if (Object.keys(modeStyles).length === 0) {
          delete elStyles[mode];
        }

        if (Object.keys(elStyles).length === 0) {
          const newOverrides = { ...prevStyles };
          delete newOverrides[change.elementId];
          return newOverrides;
        }

        return { ...prevStyles, [change.elementId]: elStyles };
      });

      return prev.filter((c) => c.id !== changeId);
    });
  }, []);

  /* ---------- Декор-об'єкти ---------- */
  const addDecorItem = useCallback((item) => {
    const id = makeDecorId();
    setShowOriginal(false);
    setDecorItems((prev) => [...prev, { ...item, id, z: prev.reduce((m, d) => Math.max(m, d.z || 1), 0) + 1 }]);
    return id;
  }, []);
  const updateDecorItem = useCallback((id, patch) => {
    setDecorItems((prev) => prev.map((d) => (d.id === id ? { ...d, ...patch } : d)));
  }, []);
  const removeDecorItem = useCallback((id) => {
    setDecorItems((prev) => prev.filter((d) => d.id !== id));
  }, []);
  const bringDecorToFront = useCallback((id) => {
    setDecorItems((prev) => {
      const top = prev.reduce((m, d) => Math.max(m, d.z || 1), 0);
      return prev.map((d) => (d.id === id ? { ...d, z: top + 1 } : d));
    });
  }, []);

  const resetAll = useCallback(() => {
    setStyleOverrides({});
    setChangeLog([]);
    setDecorItems([]);
    document.querySelectorAll("[data-decorator-id]").forEach((el) => {
      el.removeAttribute("data-decorator-id");
    });
  }, []);

  // Кількість змін у кожному шаблоні (для мініатюр у налаштуваннях)
  const presetChangeCounts = Array.from({ length: PRESET_COUNT }, (_, i) =>
    i === activePreset ? changeLog.length + decorItems.length : slotSize(slots[i]),
  );

  const getOverridesForElement = useCallback(
    (elementId) => styleOverrides[elementId] || {},
    [styleOverrides],
  );

  return (
    <DecoratorContext.Provider
      value={{
        viewMode,
        setViewMode,
        isDecoratorMode,
        setIsDecoratorMode,
        styleOverrides,
        changeLog,
        applyStyle,
        undoChange,
        resetAll,
        getOverridesForElement,
        isPersistent,
        setIsPersistent,
        activePreset,
        switchPreset,
        showOriginal,
        setShowOriginal,
        presetChangeCounts,
        isDarkMode,
        decorItems,
        decorVisible: !showOriginal && viewMode !== "off",
        addDecorItem,
        updateDecorItem,
        removeDecorItem,
        bringDecorToFront,
      }}
    >
      <DecoratorRuntime
        styleOverrides={styleOverrides}
        showOriginal={showOriginal || viewMode === "off"}
        isDecoratorMode={isDecoratorMode}
        isDarkMode={isDarkMode}
      />
      <DecorLayer />
      {pendingDraft && (
        <DecoratorDraftPrompt
          isDarkMode={isDarkMode}
          changes={countDraftChanges(pendingDraft)}
          onSave={restoreDraft}
          onDiscard={discardDraft}
        />
      )}
      {children}
    </DecoratorContext.Provider>
  );
};
