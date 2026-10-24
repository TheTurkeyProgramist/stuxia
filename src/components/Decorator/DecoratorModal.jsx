import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  useDecorator,
  getUniqueSelector,
  buildOverridesCss,
} from "./DecoratorContext";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out;
`;

const Modal = styled.div`
  background: #1e1e2e;
  color: #cdd6f4;
  border-radius: 16px;
  border: 2px solid #ffb36c;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  animation: ${slideUp} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`;

const Title = styled.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TagBadge = styled.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`;

const Body = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ModeTabsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`;

const TabGroup = styled.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`;

const Tab = styled.button`
  flex: 1;
  background: ${(props) => (props.$active ? "rgba(255, 179, 108, 0.2)" : "transparent")};
  color: ${(props) => (props.$active ? "#ffb36c" : "#a6adc8")};
  border: none;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 179, 108, 0.1);
  }
`;

const PropRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  transition: background 0.15s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const PropLabel = styled.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`;

const PropInput = styled.input`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 179, 108, 0.3);
  color: #cdd6f4;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-family: monospace;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`;

const ColorInput = styled.input`
  width: 36px;
  height: 30px;
  border: 2px solid rgba(255, 179, 108, 0.4);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`;

const ActionBtn = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`;

const ApplyBtn = styled(ActionBtn)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`;

const PassthroughBtn = styled(ActionBtn)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    `
const SmallBtn = styled.button`
  background: rgba(255, 179, 108, 0.12);
  border: 1px solid rgba(255, 179, 108, 0.35);
  color: #ffb36c;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.25);
  }
`;

const selectStyle = {
  background: "rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 179, 108, 0.3)",
  color: "#cdd6f4",
  padding: "7px 8px",
  borderRadius: "8px",
  fontSize: "12px",
  outline: "none",
};

const EDITABLE_PROPS_CONFIG = {
  color: {
    label: "Колір тексту",
    cssProp: "color",
    type: "color",
    desc: "Змінює колір шрифту елемента",
  },
  backgroundColor: {
    label: "Колір фону",
    cssProp: "backgroundColor",
    type: "color",
    desc: "Змінює фоновий колір елемента",
  },
  border: {
    label: "Рамка (бордюр)",
    cssProp: "border",
    type: "border",
    desc: "Налаштування межі елемента",
  },
  borderRadius: {
    label: "Заокруглення кутів",
    cssProp: "borderRadius",
    type: "text",
    placeholder: "напр., 8px або 50%",
    desc: "Радіус заокруглення рамки",
  },
  boxShadow: {
    label: "Тінь елемента",
    cssProp: "boxShadow",
    type: "text",
    placeholder: "напр., 0 4px 10px rgba(0,0,0,0.3)",
    desc: "Додає ефект тіні навколо елемента",
  },
  textShadow: {
    label: "Тінь тексту",
    cssProp: "textShadow",
    type: "text",
    placeholder: "напр., 1px 1px 2px #000",
    desc: "Ефект тіні для тексту",
  },
  backdropFilter: {
    label: "Розмиття фону",
    cssProp: "backdropFilter",
    type: "text",
    placeholder: "напр., blur(10px)",
    desc: "Ефекти для фону (скляний ефект)",
  },
  filter: {
    label: "Фільтри",
    cssProp: "filter",
    type: "text",
    placeholder: "напр., grayscale(50%)",
    desc: "Ефекти зображення/кольору",
  },
  transform: {
    label: "Трансформація",
    cssProp: "transform",
    type: "transform",
    placeholder: "напр., rotate(5deg) scale(1.1) або skewY(3deg)",
    desc: "Зсув, поворот, масштаб, нахил — або свій CSS",
  },
  transformOrigin: {
    label: "Точка трансформації",
    cssProp: "transformOrigin",
    type: "text",
    placeholder: "напр., center, top left, 50% 100%",
    desc: "Відносно чого виконується трансформація",
  },
  transition: {
    label: "Анімація переходу",
    cssProp: "transition",
    type: "text",
    placeholder: "напр., all 0.3s ease",
    desc: "Плавність зміни стилів (корисно для :hover)",
  },
  outline: {
    label: "Контур",
    cssProp: "outline",
    type: "text",
    placeholder: "напр., 2px solid red",
    desc: "Зовнішня рамка елемента",
  },
  textDecoration: {
    label: "Декорування тексту",
    cssProp: "textDecoration",
    type: "text",
    placeholder: "напр., underline або none",
    desc: "Підкреслення, закреслення тощо",
  },
  cursor: {
    label: "Курсор миші",
    cssProp: "cursor",
    type: "cursor",
    desc: "Вигляд курсора при наведенні",
  },
};

const EDITABLE_PROPS = Object.values(EDITABLE_PROPS_CONFIG);
const KNOWN_PROPS = new Set(EDITABLE_PROPS.map((p) => p.cssProp));
const MODES = ["light_default", "light_hover", "dark_default", "dark_hover"];
const FORBIDDEN_PROPS = new Set(["opacity"]);

/* ---------- Хелпери ---------- */
const rgbToHex = (rgb) => {
  if (!rgb || rgb === "transparent" || rgb === "rgba(0, 0, 0, 0)")
    return "#000000";
  if (rgb.startsWith("#")) {
    if (/^#[0-9a-f]{3}$/i.test(rgb)) {
      return "#" + rgb.slice(1).split("").map((c) => c + c).join("");
    }
    return /^#[0-9a-f]{6}/i.test(rgb) ? rgb.slice(0, 7) : "#000000";
  }
  const match = rgb.match(/\d+/g);
  if (!match || match.length < 3) return "#000000";
  return (
    "#" +
    match
      .slice(0, 3)
      .map((n) => Math.min(255, parseInt(n)).toString(16).padStart(2, "0"))
      .join("")
  );
};

const BORDER_STYLES = ["solid", "double", "dashed", "dotted", "groove", "ridge", "inset", "outset"];
const BORDER_WIDTHS = ["0px", "1px", "2px", "3px", "4px", "5px", "8px", "10px"];

const parseBorder = (borderStr) => {
  let width = "1px";
  let style = "none";
  let color = "#000000";
  if (!borderStr || borderStr === "none") return { width, style, color };

  style = "solid";
  const parts = borderStr.match(/(?:rgba?|hsla?)\([^)]*\)|\S+/g) || [];
  parts.forEach((part) => {
    if (/^\d*\.?\d+(px|em|rem|pt)?$/.test(part)) {
      width = /[a-z]/.test(part) ? part : part + "px";
    } else if (part === "none") {
      style = "none";
    } else if (BORDER_STYLES.includes(part)) {
      style = part;
    } else {
      color = part;
    }
  });
  return { width, style, color };
};

const combineBorder = (width, style, color) =>
  style === "none" ? "none" : `${width} ${style} ${color}`;

const TRANSFORM_FIELDS = [
  { key: "translateX", label: "X (px)", unit: "px", def: 0, step: 1 },
  { key: "translateY", label: "Y (px)", unit: "px", def: 0, step: 1 },
  { key: "rotate", label: "Поворот (°)", unit: "deg", def: 0, step: 1 },
  { key: "scale", label: "Масштаб", unit: "", def: 1, step: 0.05 },
  { key: "skewX", label: "Нахил X (°)", unit: "deg", def: 0, step: 1 },
  { key: "skewY", label: "Нахил Y (°)", unit: "deg", def: 0, step: 1 },
];

const parseTransform = (str) => {
  const result = {};
  if (!str) return result;
  const re = /(translateX|translateY|rotate|scale|skewX|skewY)\(\s*(-?\d*\.?\d+)\s*(?:px|deg)?\s*\)/g;
  let m;
  while ((m = re.exec(str))) result[m[1]] = m[2];
  return result;
};

// Збирає transform; невідомі функції (matrix, 3d тощо) зберігаються з вихідного рядка
const buildTransform = (fields, original = "") => {
  const known = TRANSFORM_FIELDS.map((f) => f.key).join("|");
  const extra = original
    .replace(new RegExp(`(${known})\\(\\s*-?\\d*\\.?\\d+\\s*(?:px|deg)?\\s*\\)`, "g"), "")
    .trim();
  const own = TRANSFORM_FIELDS.filter(
    (f) => fields[f.key] !== undefined && fields[f.key] !== "" && Number(fields[f.key]) !== f.def,
  )
    .map((f) => `${f.key}(${fields[f.key]}${f.unit})`)
    .join(" ");
  return [own, extra].filter(Boolean).join(" ");
};

const toCamel = (name) =>
  name.startsWith("--") ? name : name.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const DecoratorModal = ({ targetElement, onClose }) => {
  const { applyStyle, getOverridesForElement, isDarkMode, activePreset } = useDecorator();

  const [activeTheme, setActiveTheme] = useState(isDarkMode ? "dark" : "light");
  const [activeState, setActiveState] = useState("default");
  const [newPropName, setNewPropName] = useState("");
  const [newPropValue, setNewPropValue] = useState("");
  const [customError, setCustomError] = useState("");

  const currentMode = `${activeTheme}_${activeState}`;

  const tagName = targetElement?.tagName?.toLowerCase() || "?";
  const elementId = targetElement ? getUniqueSelector(targetElement) : "";

  const [editedStyles, setEditedStyles] = useState({});

  // Завантажуємо збережені стилі лише при зміні елемента (інакше ввід скидався б при кожному оновленні контексту)
  useEffect(() => {
    if (elementId) {
      setEditedStyles(JSON.parse(JSON.stringify(getOverridesForElement(elementId))));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (key, value) => {
    setEditedStyles((prev) => {
      const modeStyles = { ...(prev[currentMode] || {}) };
      if (value === "" || value == null) delete modeStyles[key];
      else modeStyles[key] = value;
      return { ...prev, [currentMode]: modeStyles };
    });
  };

  const handleAddCustom = () => {
    const name = toCamel(newPropName);
    if (!/^(--)?[a-zA-Z][a-zA-Z0-9-]*$/.test(name)) {
      setCustomError("Некоректна назва властивості");
      return;
    }
    if (FORBIDDEN_PROPS.has(name)) {
      setCustomError("Прозорість (opacity) не підтримується");
      return;
    }
    if (!newPropValue.trim()) {
      setCustomError("Вкажіть значення");
      return;
    }
    handleChange(name, newPropValue.trim());
    setNewPropName("");
    setNewPropValue("");
    setCustomError("");
  };

  const clearCurrentTheme = () => {
    setEditedStyles((prev) => ({
      ...prev,
      [`${activeTheme}_default`]: {},
      [`${activeTheme}_hover`]: {},
    }));
  };

  const handleApply = () => {
    const existing = getOverridesForElement(elementId);

    MODES.forEach((mode) => {
      const modeStyles = editedStyles[mode] || {};
      const oldStyles = existing[mode] || {};
      const props = new Set([...Object.keys(modeStyles), ...Object.keys(oldStyles)]);

      props.forEach((cssProp) => {
        if (FORBIDDEN_PROPS.has(cssProp)) return;
        const next = modeStyles[cssProp] || "";
        const prev = oldStyles[cssProp] || "";
        if (next !== prev) {
          applyStyle(elementId, tagName, cssProp, prev, next, mode);
        }
      });
    });

    onClose();
  };

  const handlePassthrough = () => {
    onClose();
    setTimeout(() => {
      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select"
      ) {
        targetElement.focus();
      } else {
        targetElement.click();
      }
    }, 10);
  };

  if (!targetElement) return null;

  const currentModeStyles = editedStyles[currentMode] || {};
  const customProps = Object.entries(currentModeStyles).filter(
    ([k]) => !KNOWN_PROPS.has(k) && !FORBIDDEN_PROPS.has(k),
  );

  const previewCss = buildOverridesCss(elementId, editedStyles);

  const renderTransform = (cssProp, val, placeholder) => {
    const fields = parseTransform(val);
    const setField = (key, v) =>
      handleChange(cssProp, buildTransform({ ...fields, [key]: v }, val));
    return (
      <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
          {TRANSFORM_FIELDS.map((f) => (
            <label key={f.key} style={{ fontSize: "10px", color: "#a6adc8", display: "flex", flexDirection: "column", gap: "2px" }}>
              {f.label}
              <PropInput
                type="number"
                step={f.step}
                value={fields[f.key] ?? ""}
                placeholder={String(f.def)}
                onChange={(e) => setField(f.key, e.target.value)}
                data-decorator-ignore="true"
                style={{ minWidth: 0 }}
              />
            </label>
          ))}
        </div>
        <PropInput
          value={val}
          onChange={(e) => handleChange(cssProp, e.target.value)}
          placeholder={placeholder}
          data-decorator-ignore="true"
        />
      </>
    );
  };

  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-decorator-ignore="true"
    >
      <style>{previewCss}</style>

      <Modal data-decorator-ignore="true" onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Title>
            🎨 Декоратор <TagBadge>&lt;{tagName}&gt;</TagBadge>
          </Title>
          <CloseBtn onClick={onClose} data-decorator-ignore="true">
            &times;
          </CloseBtn>
        </ModalHeader>

        <Body>
          <ModeTabsContainer>
            <TabGroup>
              <Tab $active={activeTheme === "light"} onClick={() => setActiveTheme("light")}>
                🌞 Денна
              </Tab>
              <Tab $active={activeTheme === "dark"} onClick={() => setActiveTheme("dark")}>
                🌙 Темна
              </Tab>
            </TabGroup>
            <TabGroup>
              <Tab $active={activeState === "default"} onClick={() => setActiveState("default")}>
                Стандарт
              </Tab>
              <Tab $active={activeState === "hover"} onClick={() => setActiveState("hover")}>
                :hover
              </Tab>
            </TabGroup>
          </ModeTabsContainer>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "11px", color: "#858da3" }}>
              Пресет {activePreset + 1} — зміни не впливають на інші пресети
            </span>
            <SmallBtn onClick={clearCurrentTheme} data-decorator-ignore="true">
              Очистити тему
            </SmallBtn>
          </div>

          {EDITABLE_PROPS.map(({ cssProp, label, type, placeholder, desc }) => {
            const val = currentModeStyles[cssProp] || "";

            return (
              <PropRow key={cssProp}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <PropLabel>{label}</PropLabel>
                    <span style={{ fontSize: "10px", color: "#858da3", textAlign: "right" }}>{desc}</span>
                  </div>

                  {type === "color" && (
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <ColorInput
                        type="color"
                        value={rgbToHex(val)}
                        onChange={(e) => handleChange(cssProp, e.target.value)}
                        data-decorator-ignore="true"
                      />
                      <PropInput
                        value={val}
                        onChange={(e) => handleChange(cssProp, e.target.value)}
                        placeholder="напр., #ffb36c або transparent"
                        data-decorator-ignore="true"
                      />
                    </div>
                  )}

                  {type === "cursor" && (
                    <select
                      value={val}
                      onChange={(e) => handleChange(cssProp, e.target.value)}
                      data-decorator-ignore="true"
                      style={{ ...selectStyle, width: "100%" }}
                    >
                      <option value="">успадковується (default)</option>
                      <option value="default">стрілка (default)</option>
                      <option value="pointer">вказівник / посилання (pointer)</option>
                      <option value="grab">захоплення / рука відкрито (grab)</option>
                      <option value="grabbing">рука стиснута (grabbing)</option>
                      <option value="zoom-in">збільшення (zoom-in)</option>
                      <option value="zoom-out">зменшення (zoom-out)</option>
                      <option value="text">виділення тексту (text)</option>
                      <option value="not-allowed">заборонено (not-allowed)</option>
                      <option value="help">довідка (help)</option>
                      <option value="wait">очікування (wait)</option>
                      <option value="move">переміщення (move)</option>
                    </select>
                  )}

                  {type === "border" &&
                    (() => {
                      const parsed = parseBorder(val);
                      const widths = BORDER_WIDTHS.includes(parsed.width)
                        ? BORDER_WIDTHS
                        : [...BORDER_WIDTHS, parsed.width];
                      const set = (w, s, c) => handleChange(cssProp, combineBorder(w, s, c));
                      return (
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                          <select
                            value={parsed.width}
                            onChange={(e) => set(e.target.value, parsed.style, parsed.color)}
                            data-decorator-ignore="true"
                            style={{ ...selectStyle, flex: 1 }}
                          >
                            {widths.map((w) => (
                              <option key={w} value={w}>
                                {w}
                              </option>
                            ))}
                          </select>

                          <select
                            value={parsed.style}
                            onChange={(e) => set(parsed.width, e.target.value, parsed.color)}
                            data-decorator-ignore="true"
                            style={{ ...selectStyle, flex: 2 }}
                          >
                            <option value="none">немає (none)</option>
                            <option value="solid">суцільна (solid)</option>
                            <option value="double">подвійна (double)</option>
                            <option value="dashed">штрихова (dashed)</option>
                            <option value="dotted">пунктирна (dotted)</option>
                            <option value="groove">3D жолоб (groove)</option>
                            <option value="ridge">3D гребінь (ridge)</option>
                            <option value="inset">3D втиснута (inset)</option>
                            <option value="outset">3D витиснута (outset)</option>
                          </select>

                          <ColorInput
                            type="color"
                            value={rgbToHex(parsed.color)}
                            onChange={(e) => set(parsed.width, parsed.style, e.target.value)}
                            data-decorator-ignore="true"
                          />
                          <PropInput
                            value={parsed.color}
                            onChange={(e) => set(parsed.width, parsed.style, e.target.value)}
                            placeholder="#ffb36c"
                            data-decorator-ignore="true"
                            style={{ flex: 2, minWidth: "70px" }}
                          />
                        </div>
                      );
                    })()}

                  {type === "transform" && renderTransform(cssProp, val, placeholder)}

                  {type === "text" && (
                    <PropInput
                      value={val}
                      onChange={(e) => handleChange(cssProp, e.target.value)}
                      placeholder={placeholder || "успадковується"}
                      data-decorator-ignore="true"
                    />
                  )}
                </div>
              </PropRow>
            );
          })}

          <PropRow>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <PropLabel>Власні CSS-властивості</PropLabel>
              <span style={{ fontSize: "10px", color: "#858da3" }}>Будь-яка властивість, окрім opacity</span>
            </div>

            {customProps.map(([name, value]) => (
              <div key={name} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <TagBadge style={{ minWidth: "90px" }}>{name}</TagBadge>
                <PropInput
                  value={value}
                  onChange={(e) => setEditedStyles((prev) => ({
                    ...prev,
                    [currentMode]: { ...(prev[currentMode] || {}), [name]: e.target.value },
                  }))}
                  data-decorator-ignore="true"
                />
                <SmallBtn onClick={() => handleChange(name, "")} data-decorator-ignore="true">
                  ✕
                </SmallBtn>
              </div>
            ))}

            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <PropInput
                value={newPropName}
                onChange={(e) => setNewPropName(e.target.value)}
                placeholder="напр., letter-spacing"
                data-decorator-ignore="true"
              />
              <PropInput
                value={newPropValue}
                onChange={(e) => setNewPropValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
                placeholder="напр., 2px"
                data-decorator-ignore="true"
              />
              <SmallBtn onClick={handleAddCustom} data-decorator-ignore="true">
                +
              </SmallBtn>
            </div>
            {customError && <span style={{ fontSize: "11px", color: "#f38ba8" }}>{customError}</span>}
          </PropRow>
        </Body>

        <Footer>
          <PassthroughBtn onClick={handlePassthrough} data-decorator-ignore="true">
            ▶ Виконати дію
          </PassthroughBtn>
          <ApplyBtn onClick={handleApply} data-decorator-ignore="true">
            ✓ Застосувати
          </ApplyBtn>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default DecoratorModal;
