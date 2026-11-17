import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import localforage from "localforage";

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

// Будує CSS для елемента; порожні значення та opacity ігноруються
export const buildOverridesCss = (elId, modes) => {
  const selector = toCssSelector(elId);
  let css = "";
  Object.entries(MODE_PREFIX).forEach(([mode, wrap]) => {
    const decls = Object.entries(modes?.[mode] || {})
      .filter(([prop, val]) => val !== "" && val != null && prop !== "opacity")
      .map(([prop, val]) => `${toKebab(prop)}: ${val} !important;`)
      .join(" ");
    if (decls) css += `${wrap(selector)} { ${decls} }\n`;
  });
  return css;
};

// Два декоративні шаблони; «Оригінал» — окремий режим без змін Декоратора
export const PRESET_COUNT = 2;

export const DecoratorProvider = ({ children, isDarkMode }) => {
  const [isDecoratorMode, setIsDecoratorMode] = useState(false);
  const [isPersistent, setIsPersistent] = useState(false);
  const [styleOverrides, setStyleOverrides] = useState({});
  const [changeLog, setChangeLog] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  // Незалежні шаблони декоратора: активний живе в styleOverrides/changeLog, решта — у slots
  const [activePreset, setActivePreset] = useState(0);
  const [slots, setSlots] = useState({});
  // «Оригінал»: сайт без жодних змін Декоратора (шаблони при цьому не втрачаються)
  const [showOriginal, setShowOriginal] = useState(false);

  // Sync isDarkMode to body class for CSS selection
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("decorator-dark-mode");
    } else {
      document.body.classList.remove("decorator-dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const hydrate = async () => {
      try {
        const savedIsPersistent = await localforage.getItem(
          "decorator_persistent",
        );
        if (savedIsPersistent !== null) {
          setIsPersistent(savedIsPersistent);
          if (savedIsPersistent) {
            let savedOverrides = await localforage.getItem(
              "decorator_overrides",
            );
            const savedLog = await localforage.getItem("decorator_changelog");

            // Migration for old structure (flat { color: "red" } -> { light_default: { color: "red" } })
            if (savedOverrides) {
              const migrated = {};
              Object.keys(savedOverrides).forEach((elId) => {
                migrated[elId] = {};
                const elData = savedOverrides[elId];
                if (
                  elData.light_default ||
                  elData.light_hover ||
                  elData.dark_default ||
                  elData.dark_hover
                ) {
                  migrated[elId] = elData; // Already new format
                } else {
                  migrated[elId].light_default = { ...elData }; // Migrate old
                }
              });
              setStyleOverrides(migrated);
            }
            if (savedLog) setChangeLog(savedLog);
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
    } else {
      localforage.removeItem("decorator_show_original");
      localforage.removeItem("decorator_slots");
      localforage.removeItem("decorator_active_preset");
      localforage.removeItem("decorator_overrides");
      localforage.removeItem("decorator_changelog");
    }
    localforage.setItem("decorator_persistent", isPersistent);
  }, [styleOverrides, changeLog, slots, activePreset, showOriginal, isPersistent, isHydrated]);

  // Generate and inject global CSS
  useEffect(() => {
    let styleTag = document.getElementById("decorator-styles");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "decorator-styles";
      document.head.appendChild(styleTag);
    }

    let css = "";
    if (!showOriginal) {
      Object.entries(styleOverrides).forEach(([elId, modes]) => {
        css += buildOverridesCss(elId, modes);
      });
    }

    styleTag.innerHTML = css;
  }, [styleOverrides, showOriginal]);

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
      const next = slots[index] || { overrides: {}, log: [] };
      setSlots((prev) => ({
        ...prev,
        [activePreset]: { overrides: styleOverrides, log: changeLog },
      }));
      setStyleOverrides(next.overrides || {});
      setChangeLog(next.log || []);
      setActivePreset(index);
    },
    [activePreset, slots, styleOverrides, changeLog],
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

  const resetAll = useCallback(() => {
    setStyleOverrides({});
    setChangeLog([]);
    document.querySelectorAll("[data-decorator-id]").forEach((el) => {
      el.removeAttribute("data-decorator-id");
    });
  }, []);

  // Кількість змін у кожному шаблоні (для мініатюр у налаштуваннях)
  const presetChangeCounts = Array.from({ length: PRESET_COUNT }, (_, i) =>
    i === activePreset ? changeLog.length : slots[i]?.log?.length || 0,
  );

  const getOverridesForElement = useCallback(
    (elementId) => styleOverrides[elementId] || {},
    [styleOverrides],
  );

  return (
    <DecoratorContext.Provider
      value={{
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
      }}
    >
      {children}
    </DecoratorContext.Provider>
  );
};
