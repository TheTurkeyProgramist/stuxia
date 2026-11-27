// Одиниці карти спільні з картками погоди: те саме сховище й та сама подія "unitsChanged".
// Якщо в карток одиниці окремі, зміна на карті їх не чіпає.
import { useCallback, useEffect, useState } from "react";
import localforage from "localforage";
import { DEFAULT_UNITS } from "../../utils/units.js";
import { loadCardUnits, isUnitsEventForCard, UNITS_GLOBAL_KEY, UNITS_USE_GLOBAL_KEY } from "../../utils/unitsStorage.js";

const MAP_ID = "styxia-map";

export const useMapUnits = () => {
  const [units, setUnits] = useState(DEFAULT_UNITS);

  useEffect(() => {
    let cancelled = false;
    loadCardUnits().then(({ units: saved }) => {
      if (!cancelled) setUnits(saved);
    });
    const onChange = (e) => {
      if (isUnitsEventForCard(e.detail, MAP_ID)) setUnits({ ...DEFAULT_UNITS, ...e.detail.units });
    };
    window.addEventListener("unitsChanged", onChange);
    return () => {
      cancelled = true;
      window.removeEventListener("unitsChanged", onChange);
    };
  }, []);

  const changeUnit = useCallback(
    async (key, value) => {
      const next = { ...units, [key]: value };
      setUnits(next);
      const useGlobal = (await localforage.getItem(UNITS_USE_GLOBAL_KEY)) !== false;
      await localforage.setItem(UNITS_GLOBAL_KEY, next);
      window.dispatchEvent(
        new CustomEvent("unitsChanged", { detail: useGlobal ? { units: next, useGlobal } : { units: next, useGlobal, cardId: MAP_ID } }),
      );
    },
    [units],
  );

  return [units, changeUnit];
};
