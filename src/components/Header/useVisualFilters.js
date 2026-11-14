import { useState, useEffect, useCallback } from "react";
import localforage from "localforage";
import { FiFilm, FiMoon, FiRadio, FiDroplet, FiBookOpen, FiCamera, FiStar } from "react-icons/fi";

// intensity — сила, з якою фільтр вмикається (на 50% більшість ефектів на темному сайті ледь помітні)
export const FILTERS = [
  { id: "none", label: "Вимкнено", intensity: 50 },
  { id: "grayscale", label: "Дальтонізм", intensity: 100 },
  { id: "sepia", label: "Сепія", intensity: 90 },
  { id: "invert", label: "Негатив", intensity: 100 },
  { id: "matrix", label: "Пікселізація", intensity: 60 },
  { id: "uv", label: "УФ-Лампа", intensity: 70 },
  { id: "contrast", label: "Контраст", intensity: 75 },
  { id: "saturate", label: "Насиченість", intensity: 85 },
  { id: "blur", label: "Розмиття", intensity: 25 },
  { id: "hue", label: "Веселка", intensity: 50 },
  { id: "warm", label: "Теплі тони", intensity: 80 },
  { id: "noir", label: "Нуар", intensity: 60 },
  { id: "chaos", label: "Хаос", intensity: 50 },
  { id: "ultrachaos", label: "Ультрахаос", intensity: 50 },
];

// Вибір фільтра з кнопки: одразу з його силою за замовчуванням
export const selectFilter = (prev, id) => {
  const next = { ...prev, filterType: id, filterIntensity: FILTERS.find((f) => f.id === id)?.intensity ?? 50 };
  delete next.combo;
  return next;
};

export const PRESETS = [
  {
    id: "cinema",
    label: "Кіно",
    icon: FiFilm,
    config: { darkIntensity: 15, filterType: "sepia", filterIntensity: 20 },
  },
  {
    id: "night",
    label: "Ніч",
    icon: FiMoon,
    config: { darkIntensity: 70, filterType: "none", filterIntensity: 50 },
  },
  {
    id: "retro",
    label: "Ретро",
    icon: FiRadio,
    config: { darkIntensity: 5, filterType: "grayscale", filterIntensity: 80 },
  },
  {
    id: "acid",
    label: "Кислота",
    icon: FiDroplet,
    config: { darkIntensity: 0, filterType: "hue", filterIntensity: 60 },
  },
  {
    id: "reading",
    label: "Читання",
    icon: FiBookOpen,
    config: { darkIntensity: 20, filterType: "warm", filterIntensity: 60 },
  },
  {
    id: "oldphoto",
    label: "Старе фото",
    icon: FiCamera,
    config: { darkIntensity: 10, filterType: "combo", combo: ["sepia", "contrast"], filterIntensity: 60 },
  },
];

export const CUSTOM_PRESET_ICON = FiStar;
export const MAX_CUSTOM_PRESETS = 6;

// Фільтри, які можна поєднувати у власному пресеті (без анімованих)
export const COMBINABLE_FILTERS = FILTERS.filter(
  (f) => !["none", "hue", "chaos", "ultrachaos"].includes(f.id),
);

// Старі власні пресети зберігались з префіксом "✨ "
export const presetName = (preset) => (preset?.label || "").replace(/^✨\s*/, "");

const DEFAULT_CONFIG = {
  darkIntensity: 0,
  filterType: "none",
  filterIntensity: 50,
};

// Впровадження CSS анімацій для спеціальних ефектів
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.id = "visual-filters-animations-v3";
  document.getElementById("visual-filters-animations-v2")?.remove();
  style.innerHTML = `
    /* Firefox: веселка через обертання кольору шару змішування */
    @keyframes vf-hue-spin {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
    @keyframes ultrachaos-anim {
      0% { backdrop-filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }
      50% { backdrop-filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }
      100% { backdrop-filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }
    }
    @keyframes rainbow-anim {
      0% { backdrop-filter: brightness(var(--v-bright)) hue-rotate(0deg); }
      100% { backdrop-filter: brightness(var(--v-bright)) hue-rotate(360deg); }
    }

  `;
  if (!document.getElementById(style.id)) {
    document.head.appendChild(style);
  }

  // Старий фільтр (після гарячого оновлення чи з попередньої версії) прибираємо —
  // інакше лишалась би його стара структура, а setPixelSize не знаходив би кроків
  document.getElementById("visual-filters-pixelate")?.ownerSVGElement?.remove();
  {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "absolute";
    svg.style.width = "0";
    svg.style.height = "0";
    svg.style.overflow = "hidden";
    svg.style.pointerEvents = "none";

    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "visual-filters-pixelate");
    filter.setAttribute("x", "0");
    filter.setAttribute("y", "0");
    filter.setAttribute("width", "100%");
    filter.setAttribute("height", "100%");

    const flood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
    flood.setAttribute("x", "0");
    flood.setAttribute("y", "0");
    flood.setAttribute("height", "1");
    flood.setAttribute("width", "1");

    const composite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
    composite.setAttribute("width", "2");
    composite.setAttribute("height", "2");

    const tile = document.createElementNS("http://www.w3.org/2000/svg", "feTile");
    tile.setAttribute("result", "tiles");

    const sourceComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
    sourceComposite.setAttribute("in", "SourceGraphic");
    sourceComposite.setAttribute("in2", "tiles");
    sourceComposite.setAttribute("operator", "in");

    // Розтягує кожну точку-зразок на весь блок — без цього лишалась сітка точок
    const dilate = document.createElementNS("http://www.w3.org/2000/svg", "feMorphology");
    dilate.setAttribute("operator", "dilate");
    dilate.setAttribute("radius", "0");

    filter.appendChild(flood);
    filter.appendChild(composite);
    filter.appendChild(tile);
    filter.appendChild(sourceComposite);
    filter.appendChild(dilate);
    svg.appendChild(filter);
    document.body.appendChild(svg);
  }
}

// Блоки як у Minecraft: що більша сила, то більші блоки (0 → 3px, 100 → 23px).
// Розмір непарний, щоб точка-зразок стояла в центрі блоку й dilate рівно його заповнював
const setPixelSize = (filterIntensity) => {
  const radius = Math.round(1 + filterIntensity / 10);
  const pixelSize = radius * 2 + 1;
  const flood = document.querySelector("#visual-filters-pixelate feFlood");
  const block = document.querySelector("#visual-filters-pixelate feComposite");
  const dilate = document.querySelector("#visual-filters-pixelate feMorphology");
  if (!flood || !block || !dilate) return;
  flood.setAttribute("x", String(radius));
  flood.setAttribute("y", String(radius));
  block.setAttribute("width", String(pixelSize));
  block.setAttribute("height", String(pixelSize));
  dilate.setAttribute("radius", String(radius));
};

// Firefox визнає backdrop-filter (і url() у ньому) підтримуваним, але часто його не малює
// (напр. без апаратного WebRender). Тому там усе, що можна, робимо шарами з mix-blend-mode.
const IS_FIREFOX = typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);

// url() у backdrop-filter підтримують не всі браузери — без нього весь фільтр став би невалідним
const supportsBackdropUrl = () =>
  !IS_FIREFOX &&
  typeof CSS !== "undefined" && CSS.supports?.("backdrop-filter", "url(#visual-filters-pixelate)");

// біля 50% invert дає суцільний сірий, тому середину пропускаємо
const invertAmount = (intensity) => (intensity <= 50 ? intensity * 0.6 : 70 + (intensity - 50) * 0.6);

const filterPart = (type, intensity) => {
  switch (type) {
    case "grayscale": return `grayscale(${intensity}%)`;
    case "sepia": return `sepia(${intensity}%)`;
    case "invert": return `invert(${invertAmount(intensity)}%)`;
    case "matrix":
      setPixelSize(intensity);
      // contrast після SVG-фільтра в Chrome перетворює темні блоки на чорні — лишаємо його лише як запасний варіант
      return supportsBackdropUrl()
        ? "url(#visual-filters-pixelate)"
        : `contrast(${110 + intensity * 0.7}%) saturate(${100 + intensity * 0.8}%)`;
    case "uv": return `hue-rotate(280deg) saturate(${100 + intensity}%)`;
    case "contrast": return `contrast(${intensity * 2}%)`;
    case "saturate": return `saturate(${intensity * 2}%)`;
    case "blur": return `blur(${intensity / 10}px)`;
    case "warm": return `sepia(${intensity * 0.6}%) saturate(${100 + intensity * 0.6}%) hue-rotate(-${intensity * 0.15}deg)`;
    case "noir": return `grayscale(100%) contrast(${100 + intensity * 1.5}%) brightness(${100 - intensity * 0.2}%)`;
    default: return "";
  }
};

// Статичний CSS filter для прикладу в модалці (на вузьких екранах сторінку за модалкою не видно)
export const getPreviewFilter = (config) => {
  if (!config) return "none";
  const brightness = 100 - (config.darkIntensity || 0) * 0.6;
  const { filterType, filterIntensity = 50 } = config;
  if (filterType === "hue") return `brightness(${brightness}%) hue-rotate(180deg)`;
  if (filterType === "ultrachaos") {
    return `brightness(${brightness}%) contrast(${100 + filterIntensity * 2}%) saturate(${100 + filterIntensity * 5}%) hue-rotate(180deg)`;
  }
  // Хаос щосекунди міняє фільтр — у прикладі показуємо один із можливих
  if (filterType === "chaos") return `brightness(${brightness}%) ${filterPart("uv", filterIntensity)}`;
  const types = filterType === "combo" ? (config.combo || []) : [filterType];
  return [`brightness(${brightness}%)`, ...types.map((t) => filterPart(t, filterIntensity)).filter(Boolean)].join(" ");
};

const getFilterLayer = () => {
  let layer = document.getElementById("visual-filters-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.id = "visual-filters-layer";
    layer.setAttribute("aria-hidden", "true");
    Object.assign(layer.style, {
      position: "fixed",
      inset: "0",
      zIndex: "1899",
      pointerEvents: "none",
      transition: "backdrop-filter 0.4s ease-in-out, -webkit-backdrop-filter 0.4s ease-in-out",
    });
    document.body.appendChild(layer);
  }
  return layer;
};

const setLayerFilter = (layer, value) => {
  layer.style.backdropFilter = value;
  layer.style.webkitBackdropFilter = value;
};

// ── Шари змішування (mix-blend-mode) ──
// Кожен шар — div на весь екран із фоном і режимом змішування; сила — через opacity.
// Firefox малює їх завжди, на відміну від backdrop-filter.
// Контейнер звичайний (не fixed), щоб шари змішувались з усією сторінкою, а не лише між собою.
const GRAY = "rgb(128, 128, 128)";
const clamp01 = (v) => Math.max(0, Math.min(1, v));

const getBlendContainer = () => {
  document.getElementById("visual-filters-grayscale")?.remove(); // шар з попередньої версії
  let box = document.getElementById("visual-filters-blends");
  if (!box) {
    box = document.createElement("div");
    box.id = "visual-filters-blends";
    box.setAttribute("aria-hidden", "true");
  }
  // Має йти після основного шару, щоб лягати поверх його фільтра
  const base = document.getElementById("visual-filters-layer");
  if (base && box.previousElementSibling !== base) base.after(box);
  else if (!box.isConnected) document.body.appendChild(box);
  return box;
};

const setBlends = (specs) => {
  const box = getBlendContainer();
  const active = specs.filter((s) => clamp01(s.opacity) > 0);
  while (box.children.length > active.length) box.lastElementChild.remove();
  active.forEach((spec, i) => {
    let el = box.children[i];
    if (!el) {
      el = document.createElement("div");
      Object.assign(el.style, {
        position: "fixed",
        inset: "0",
        zIndex: "1899",
        pointerEvents: "none",
        transition: "opacity 0.4s ease-in-out",
      });
      box.appendChild(el);
    }
    el.style.background = spec.color;
    el.style.mixBlendMode = spec.mode;
    el.style.opacity = String(clamp01(spec.opacity));
    el.style.animation = spec.animation || "none";
  });
};

// Чорно-білий — у всіх браузерах: сірий фон у режимі "saturation" забирає насиченість
const grayscaleBlend = (intensity) => ({ color: GRAY, mode: "saturation", opacity: intensity / 100 });

// Firefox: як відтворити фільтр шарами змішування.
// backdrop — те, що інакше не зробити (розмиття, посилення контрасту): лишається на backdrop-filter
const firefoxEffect = (type, intensity) => {
  const p = intensity / 100;
  switch (type) {
    case "sepia":
      // режим "color" бере відтінок шару, а яскравість — сторінки, як і sepia()
      return { blends: [{ color: "rgb(173, 154, 120)", mode: "color", opacity: p }] };
    case "invert":
      // різниця з білим = інверсія; з opacity — рівно invert(x%)
      return { blends: [{ color: "#fff", mode: "difference", opacity: invertAmount(intensity) / 100 }] };
    case "uv":
      return {
        blends: [
          { color: "rgb(150, 0, 255)", mode: "hue", opacity: 0.4 + p * 0.6 },
          { color: "rgb(255, 0, 255)", mode: "saturation", opacity: p * 0.5 },
        ],
      };
    case "saturate":
      // saturate(x) = intensity * 2 %: нижче 50 — вицвітання, вище — насичення
      return {
        blends: [
          p < 0.5
            ? { color: GRAY, mode: "saturation", opacity: 1 - 2 * p }
            : { color: "rgb(255, 0, 0)", mode: "saturation", opacity: (2 * p - 1) * 0.5 },
        ],
      };
    case "contrast":
      // зменшення контрасту = змішування із сірим; посилення шарами не зробити
      return p < 0.5
        ? { blends: [{ color: GRAY, mode: "normal", opacity: 1 - 2 * p }] }
        : { backdrop: filterPart("contrast", intensity), blends: [] };
    case "warm":
      // кремовий "multiply" зігріває білий і світлі кольори, відтінки лишаються
      return { blends: [{ color: "rgb(255, 235, 190)", mode: "multiply", opacity: p }] };
    case "noir":
      return {
        backdrop: `contrast(${100 + intensity * 1.5}%)`,
        blends: [grayscaleBlend(100), { color: "#000", mode: "normal", opacity: p * 0.2 }],
      };
    case "matrix":
      // SVG-пікселізацію Firefox у backdrop-filter не малює — як і раніше, запасний варіант
      return {
        backdrop: `contrast(${110 + intensity * 0.7}%)`,
        blends: [{ color: "rgb(255, 0, 0)", mode: "saturation", opacity: p * 0.4 }],
      };
    default:
      return { backdrop: filterPart(type, intensity), blends: [] };
  }
};

export const applyFilterEffect = (config) => {
  if (!config) return;
  const layer = getFilterLayer();
  // раніше фільтри вішались на <html> і чіпали хедер з налаштуваннями
  document.documentElement.style.filter = "";
  document.documentElement.style.animation = "";

  const darkBrightness = 100 - (config.darkIntensity || 0) * 0.6;
  const { filterType, filterIntensity = 50 } = config;
  layer.style.animation = "none";
  layer.style.display = "";

  // Затемнення: у Firefox — чорний напівпрозорий шар (рівно те саме, що brightness()),
  // в інших браузерах — brightness() у backdrop-filter
  const blends = IS_FIREFOX ? [{ color: "#000", mode: "normal", opacity: 1 - darkBrightness / 100 }] : [];
  const brightness = IS_FIREFOX ? 100 : darkBrightness;

  const hideLayer = () => {
    setLayerFilter(layer, "");
    layer.style.display = "none";
  };

  // Обробка спеціальних анімованих фільтрів
  if (filterType === "ultrachaos") {
    const contrastMin = 100 + filterIntensity * 0.6;
    const contrastMax = 100 + filterIntensity * 2;
    const saturateMin = 100 + filterIntensity * 1.6;
    const saturateMax = 100 + filterIntensity * 5;
    const blurMax = filterIntensity / 50;

    layer.style.setProperty("--v-bright", `${brightness}%`);
    layer.style.setProperty("--v-contrast-min", `${contrastMin}%`);
    layer.style.setProperty("--v-contrast-max", `${contrastMax}%`);
    layer.style.setProperty("--v-saturate-min", `${saturateMin}%`);
    layer.style.setProperty("--v-saturate-max", `${saturateMax}%`);
    layer.style.setProperty("--v-blur-max", `${blurMax}px`);
    // Статичний кадр на випадок, коли анімація вимкнена — інакше лишався б попередній фільтр
    setLayerFilter(layer, `brightness(${brightness}%) contrast(${contrastMax}%) saturate(${saturateMax}%) hue-rotate(180deg)`);
    layer.style.animation = "ultrachaos-anim 4s infinite linear";
    if (IS_FIREFOX) {
      // Те, що Firefox точно намалює: кольори, що мчать по колу, і перенасичення
      blends.push(
        { color: "rgb(255, 0, 0)", mode: "hue", opacity: 0.5 + filterIntensity / 200, animation: "vf-hue-spin 2s infinite linear" },
        { color: "rgb(255, 0, 0)", mode: "saturation", opacity: filterIntensity / 100 },
      );
    }
    setBlends(blends);
    return;
  }

  if (filterType === "hue") {
    // Чим більша інтенсивність, тим швидше обертання (50 → 4 с)
    const duration = filterIntensity > 0 ? (200 / filterIntensity) : 0;
    if (IS_FIREFOX) {
      hideLayer();
      if (duration > 0) {
        blends.push({ color: "rgb(255, 0, 0)", mode: "hue", opacity: 0.6, animation: `vf-hue-spin ${duration}s infinite linear` });
      }
      setBlends(blends);
      return;
    }
    setBlends(blends);
    layer.style.setProperty("--v-bright", `${brightness}%`);
    // Статичний кадр на випадок, коли анімація вимкнена — інакше лишався б попередній фільтр
    setLayerFilter(layer, duration > 0 ? `brightness(${brightness}%) hue-rotate(180deg)` : `brightness(${brightness}%)`);
    if (duration > 0) layer.style.animation = `rainbow-anim ${duration}s infinite linear`;
    return;
  }

  const types = filterType === "combo" ? (config.combo || []) : [filterType];
  const parts = [];
  types.forEach((t) => {
    if (t === "grayscale") {
      blends.push(grayscaleBlend(filterIntensity));
      return;
    }
    const effect = IS_FIREFOX
      ? firefoxEffect(t, filterIntensity)
      : { backdrop: filterPart(t, filterIntensity), blends: [] };
    if (effect.backdrop) parts.push(effect.backdrop);
    blends.push(...effect.blends);
  });
  setBlends(blends);

  if (brightness === 100 && parts.length === 0) {
    hideLayer();
    return;
  }
  setLayerFilter(layer, [`brightness(${brightness}%)`, ...parts].join(" "));
};

const SYNC_EVENT = "visual-filters-sync";
const broadcast = (key, value) =>
  queueMicrotask(() => window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: { key, value } })));

export const useVisualFilters = (user) => {
  const [visualConfig, setVisualConfigState] = useState(DEFAULT_CONFIG);
  const [customPresets, setCustomPresets] = useState([]);

  const storageKey = user?.account
    ? `visualConfig_${user.account}`
    : "visualConfig_guest";
  const presetsKey = user?.account
    ? `customPresets_${user.account}`
    : "customPresets_guest";

  useEffect(() => {
    localforage.getItem(storageKey).then((saved) => {
      if (saved) setVisualConfigState(saved);
    });

    localforage.getItem(presetsKey).then((saved) => {
      if (saved) setCustomPresets(saved);
      else setCustomPresets([]);
    });
  }, [storageKey, presetsKey]);

  // Хук використовують і хедер, і налаштування — тримаємо їх у синхроні
  useEffect(() => {
    const onSync = (e) => {
      if (e.detail.key === storageKey) setVisualConfigState(e.detail.value);
      if (e.detail.key === presetsKey) setCustomPresets(e.detail.value);
    };
    window.addEventListener(SYNC_EVENT, onSync);
    return () => window.removeEventListener(SYNC_EVENT, onSync);
  }, [storageKey, presetsKey]);

  useEffect(() => {
    let interval;
    if (visualConfig.filterType === "chaos") {
      const triggerChaos = () => {
        const pool = FILTERS.filter(
          (f) => !["none", "chaos", "ultrachaos"].includes(f.id),
        );
        const randomFilter = pool[Math.floor(Math.random() * pool.length)];
        const randomIntensity = Math.floor(Math.random() * 80) + 20;
        applyFilterEffect({
          ...visualConfig,
          filterType: randomFilter.id,
          filterIntensity: randomIntensity,
        });
      };
      triggerChaos();
      // Встановлюємо випадковий інтервал від 1с до 3с
      interval = setInterval(
        triggerChaos,
        Math.floor(Math.random() * 2000) + 1000,
      );
    } else {
      applyFilterEffect(visualConfig);
    }
    return () => clearInterval(interval);
  }, [visualConfig]);

  const setVisualConfig = useCallback(
    (updater) => {
      setVisualConfigState((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater;
        localforage.setItem(storageKey, next);
        broadcast(storageKey, next);
        return next;
      });
    },
    [storageKey],
  );

  const resetFilters = useCallback(() => {
    setVisualConfig(DEFAULT_CONFIG);
    localforage.setItem(storageKey, DEFAULT_CONFIG);
  }, [storageKey, setVisualConfig]);

  const saveCustomPreset = useCallback(
    (name) => {
      if (!name.trim()) return;
      const newPreset = {
        id: `custom_${Date.now()}`,
        label: name.trim(),
        config: { ...visualConfig },
      };
      setCustomPresets((prev) => {
        if (prev.length >= MAX_CUSTOM_PRESETS) return prev;
        const next = [...prev, newPreset];
        localforage.setItem(presetsKey, next);
        broadcast(presetsKey, next);
        return next;
      });
    },
    [presetsKey, visualConfig],
  );

  const deleteCustomPreset = useCallback(
    (id) => {
      setCustomPresets((prev) => {
        const next = prev.filter((p) => p.id !== id);
        localforage.setItem(presetsKey, next);
        broadcast(presetsKey, next);
        return next;
      });
    },
    [presetsKey],
  );

  const updateCustomPresetName = useCallback(
    (id, newName) => {
      if (!newName.trim()) return;
      setCustomPresets((prev) => {
        const next = prev.map((p) =>
          p.id === id ? { ...p, label: newName.trim() } : p,
        );
        localforage.setItem(presetsKey, next);
        broadcast(presetsKey, next);
        return next;
      });
    },
    [presetsKey],
  );

  const reorderCustomPresets = useCallback(
    (newPresets) => {
      setCustomPresets(newPresets);
      localforage.setItem(presetsKey, newPresets);
      broadcast(presetsKey, newPresets);
    },
    [presetsKey],
  );

  return {
    visualConfig,
    setVisualConfig,
    resetFilters,
    FILTERS,
    PRESETS,
    customPresets,
    saveCustomPreset,
    deleteCustomPreset,
    updateCustomPresetName,
    reorderCustomPresets,
  };
};
