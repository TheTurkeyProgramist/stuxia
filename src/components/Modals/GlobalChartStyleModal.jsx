import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { BsThermometerSun, BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { BiTrendingUp, BiWind } from "react-icons/bi";
import ChartStyleModal from "./ChartStyleModal";
import { DEFAULT_LINE_STYLES, mergeLineStyles } from "../../utils/chartLineStyles";

import i18n from "../../i18n/i18n.js";
/* Стиль ліній графіків із загальних налаштувань — одразу для всіх карток.
   Зберігає ті самі ключі й шле ту саму подію, що й налаштування окремої картки
   (Weather.jsx: saveLineStyles / toggleGlobalLineStyles). */

const GLOBAL_KEY = "chartLineStyles_global";
const USE_GLOBAL_KEY = "chartLineStyles_useGlobal";
const CHANGE_EVENT = "chartLineStylesChanged";

const RIGHT_AXIS = { key: "right", get label() { return i18n.t("modals.GlobalChartStyleModal.pravaVisViter"); }, color: "#00bfff", icon: <BiWind />, wind: true };

const LINES = {
  hourly: [
    { key: "temp", get label() { return i18n.t("modals.GlobalChartStyleModal.temperatura"); }, color: "#ffb36c", icon: <BsThermometerSun /> },
    RIGHT_AXIS,
  ],
  daily: [
    { key: "day", get label() { return i18n.t("modals.GlobalChartStyleModal.den"); }, color: "#ffb36c", icon: <FaSun /> },
    { key: "night", get label() { return i18n.t("modals.GlobalChartStyleModal.nich"); }, color: "#ff1493", icon: <BsMoonStarsFill /> },
    RIGHT_AXIS,
    { key: "trendDay", get label() { return i18n.t("modals.GlobalChartStyleModal.trendDnia"); }, color: "#ffb36c", icon: <BiTrendingUp />, trend: true },
    { key: "trendNight", get label() { return i18n.t("modals.GlobalChartStyleModal.trendNochi"); }, color: "#ff1493", icon: <BiTrendingUp />, trend: true },
  ],
};

const emit = (useGlobal, styles) =>
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { useGlobal, styles } }));

const GlobalChartStyleModal = ({ chartKey, isDarkMode, onClose, zIndex = 100010 }) => {
  const [styles, setStyles] = useState(() => mergeLineStyles(null));

  useEffect(() => {
    let alive = true;
    (async () => {
      const saved = await localforage.getItem(GLOBAL_KEY);
      if (alive) setStyles(mergeLineStyles(saved));
    })();
    const onChange = (e) => {
      const { styles: s } = e.detail || {};
      if (s) setStyles(mergeLineStyles(s));
    };
    window.addEventListener(CHANGE_EVENT, onChange);
    return () => {
      alive = false;
      window.removeEventListener(CHANGE_EVENT, onChange);
    };
  }, []);

  // Зміна із загальних налаштувань = спільний стиль для всіх карток
  const save = (next) => {
    setStyles(next);
    localforage.setItem(GLOBAL_KEY, next);
    localforage.setItem(USE_GLOBAL_KEY, true);
    emit(true, next);
  };

  const lines = styles[chartKey];

  return (
    <ChartStyleModal
      title={chartKey === "hourly" ? i18n.t("modals.GlobalChartStyleModal.stylLiniiPohodynniHrafiky") : i18n.t("modals.GlobalChartStyleModal.stylLiniiHrafikyNa")}
      lines={LINES[chartKey]}
      styles={lines}
      onChange={(lineKey, patch) =>
        save({ ...styles, [chartKey]: { ...lines, [lineKey]: { ...lines[lineKey], ...patch } } })
      }
      onApplyAll={(patch) =>
        save({
          ...styles,
          [chartKey]: Object.fromEntries(
            Object.entries(lines).map(([k, s]) => [
              k,
              { ...s, ...Object.fromEntries(Object.entries(patch).filter(([field]) => field in s)) },
            ]),
          ),
        })
      }
      onReset={() => save({ ...styles, [chartKey]: DEFAULT_LINE_STYLES[chartKey] })}
      // Звідси зміни завжди для всіх карток — перемикача «Для всіх карток» не показуємо
      allCards
      onToggleAllCards={null}
      isDarkMode={isDarkMode}
      onClose={onClose}
      zIndex={zIndex}
    />
  );
};

export default GlobalChartStyleModal;
