// Панель шарів і налаштувань «Карти Стихії» — плитки з картинками, як у Windy.
import React from "react";
import styled from "styled-components";
import { FiX, FiEyeOff } from "react-icons/fi";
import { LAYER_ICONS } from "./styxiaIcons.jsx";
import { fadeUp, pressable, revealed } from "./styxiaMotion.js";
import { UNIT_GROUPS } from "../../utils/units.js";

const Wrap = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: min(312px, calc(100% - 64px));
  max-height: calc(100% - 16px);
  border-radius: 12px;
  background: var(--sx-surface-strong);
  color: var(--sx-text);
  font-size: 12px;
  box-shadow: var(--sx-shadow);
  overflow: hidden;
  transform-origin: top left;
  ${(p) => revealed(p.$open)}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-bottom: 1px solid var(--sx-border);

  h3 {
    flex: 1;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
  }
`;

const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #e53935;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  ${pressable}

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #ff5a55;
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`;

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 10px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 166, 77, 0.85) transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Tile = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 0;
  border: none;
  background: none;
  color: ${(p) => (p.$active ? "var(--sx-accent)" : "var(--sx-text)")};
  font-size: 11.5px;
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  line-height: 1.2;
  text-align: left;
  cursor: pointer;

  .thumb {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: 8px;
    overflow: hidden;
    background: var(--sx-thumb-bg);
    border: 2px solid ${(p) => (p.$active ? "var(--sx-accent)" : "transparent")};
    transition:
      border-color 0.18s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  .badge {
    position: absolute;
    top: 4px;
    left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid rgba(255, 255, 255, 0.92);
    background: rgba(15, 20, 30, 0.82);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
    /* Явно білий: інакше іконка бере колір тексту плитки й у денній темі стає темною на темному */
    color: #ffffff;
    font-size: 21px;
  }

  &:hover .thumb {
    border-color: ${(p) => (p.$active ? "var(--sx-accent)" : "var(--sx-border-strong)")};
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
  }

  &:hover .thumb img {
    transform: scale(1.07);
  }

  &:active .thumb {
    transform: scale(0.96);
  }

  @media (prefers-reduced-motion: reduce) {
    .thumb,
    .thumb img {
      transition: none;
    }
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 2px;
    border-radius: 8px;
  }
`;

const Info = styled.section`
  margin-top: 12px;
  padding: 10px;
  border-radius: 10px;
  background: var(--sx-soft);
  line-height: 1.45;
  animation: ${fadeUp} 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  h4 {
    margin: 0 0 6px;
    font-size: 12.5px;
  }

  p {
    margin: 0 0 8px;
    color: var(--sx-text-dim);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  i {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
    margin-top: 3px;
    border-radius: 3px;
    border: 1px solid var(--sx-border-strong);
  }

  b {
    display: block;
    color: var(--sx-accent);
  }
`;

const Settings = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 12px;

  h4 {
    margin: 0 0 4px;
    font-size: 12.5px;
  }
`;

const Switch = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 6px;
  margin: 0 -6px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: var(--sx-soft);
  }

  input {
    margin: 0;
    width: 16px;
    height: 16px;
    accent-color: ${(p) => p.$color};
  }

  i {
    width: 10px;
    height: 10px;
    margin-inline-start: auto;
    border-radius: 50%;
    border: 1.5px solid var(--sx-text);
    background: ${(p) => p.$color};
  }
`;

const Field = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 5px 2px;
  font-weight: 600;

  select {
    padding: 4px 6px;
    border-radius: 6px;
    border: 1px solid var(--sx-border-strong);
    background: var(--sx-field);
    color: var(--sx-text);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  /* Явні кольори: без них у темній темі список відкривається білим по білому */
  option {
    background: var(--sx-field);
    color: var(--sx-text);
  }
`;

const Note = styled.p`
  margin: 4px 0 6px;
  padding: 7px 9px;
  border-radius: 8px;
  background: var(--sx-soft);
  color: var(--sx-text-dim);
  font-size: 11px;
  line-height: 1.4;
`;

const Tip = styled(Note)`
  background: rgba(245, 158, 11, 0.2);
  border: 1px solid #f59e0b;
  color: var(--sx-text);
`;

const HideAll = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--sx-border);
  background: transparent;
  color: var(--sx-text);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  ${pressable}

  &:hover {
    background: var(--sx-soft);
    border-color: var(--sx-border-strong);
  }
`;

// ranges: «від – до» рядки заздалегідь складає викликач; info — { id, levels, text(key) }
const StyxiaPanel = ({
  open, t, layers, layerId, onLayer, thumbBase, thumbSuffix, info, switches, units, onUnit, alertsNote, animation, onClose, onHideAll,
}) => (
  <Wrap role="dialog" aria-label={t("climateMap.styxia.panelTitle")} $open={open} inert={!open}>
    <Header>
      <h3>{t("climateMap.styxia.panelTitle")}</h3>
      <Close type="button" aria-label={t("climateMap.styxia.closePanel")} title={t("climateMap.styxia.closePanel")} onClick={onClose}>
        <FiX aria-hidden="true" />
      </Close>
    </Header>
    <Scroll>
      <Grid role="radiogroup" aria-label={t("climateMap.styxia.layer")}>
        {[...layers.map((l) => l.id), "none"].map((id) => {
          const Icon = LAYER_ICONS[id];
          const active = id === layerId;
          return (
            <Tile key={id} type="button" role="radio" aria-checked={active} $active={active} onClick={() => onLayer(id)}>
              <span className="thumb">
                {/* Мініатюру робить weather:build; немає — лишається однотонна плитка */}
                <img
                  src={`${thumbBase}/thumb-${id}.png${thumbSuffix}`}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="badge" aria-hidden="true">
                  <Icon />
                </span>
              </span>
              <span>{t(`climateMap.styxia.${id}`)}</span>
            </Tile>
          );
        })}
      </Grid>

      {info && (
        <Info key={info.title} aria-live="polite">
          <h4>{info.title}</h4>
          <p>{info.about}</p>
          <ul>
            {info.levels.map((level) => (
              <li key={level.key}>
                <i style={{ background: `rgb(${level.color.join(",")})` }} aria-hidden="true" />
                <span>
                  <b>{level.range}</b>
                  {level.text}
                </span>
              </li>
            ))}
          </ul>
        </Info>
      )}

      <Settings>
        <h4>{t("climateMap.styxia.settingsTitle")}</h4>
        {switches.map(({ id, label, checked, onChange, color }) => (
          <Switch key={id} $color={color}>
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
            {label}
            {["server", "world", "places", "own", "alerts"].includes(id) ? <i aria-hidden="true" /> : null}
          </Switch>
        ))}
        {alertsNote && <Note>{alertsNote}</Note>}
        <h4 style={{ marginTop: 10 }}>{t("newsWeather.Weather.odynytsiVymiru")}</h4>
        {/* Дати на карті свої, тому лише одиниці виміру */}
        {UNIT_GROUPS.filter((group) => group.key !== "date").map((group) => (
          <Field key={group.key}>
            {group.title}
            <select value={units[group.key]} onChange={(e) => onUnit(group.key, e.target.value)}>
              {group.options.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        ))}
        <h4 style={{ marginTop: 10 }}>{t("climateMap.styxia.animationTitle")}</h4>
        <Field>
          {t("climateMap.styxia.speed")}
          <select value={animation.speed} onChange={(e) => animation.onSpeed(Number(e.target.value))}>
            {animation.speeds.map((value) => (
              <option key={value} value={value}>
                ×{value}
              </option>
            ))}
          </select>
        </Field>
        <Field>
          {t("climateMap.styxia.fps")}
          <select value={animation.fps} onChange={(e) => animation.onFps(Number(e.target.value))}>
            {animation.fpsOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </Field>
        {animation.measured !== null && <Note>{t("climateMap.styxia.measuredFps", { fps: animation.measured })}</Note>}
        {animation.tip && <Tip role="status">{animation.tip}</Tip>}
        <HideAll type="button" onClick={onHideAll}>
          <FiEyeOff aria-hidden="true" />
          {t("climateMap.styxia.hideAll")}
        </HideAll>
      </Settings>
    </Scroll>
  </Wrap>
);

export default StyxiaPanel;
