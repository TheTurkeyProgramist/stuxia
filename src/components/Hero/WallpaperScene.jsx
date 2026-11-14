import { memo, useEffect, useState } from "react";
import CityScene from "./CityScene.jsx";
import { TIMEZONES } from "./TimezoneModal.jsx";
import {
  EVERGREEN_LANGUAGES,
  LANGUAGE_CLIMATES,
  LANGUAGE_PLACES,
  LANGUAGE_SCENES,
  SEASONAL_SNOW_LANGUAGES,
} from "../Modals/languageScenes.js";
import { getNow } from "../../utils/serverClock.js";
import {
  WALLPAPER_PREFIX,
  getWallpaperSettings,
  useWallpaperSettingsMap,
} from "../../utils/wallpaperPrefs.js";

// Каталог живих шпалер. id іде в src ("scene:<id>") і в ключ налаштувань:
// міста часових поясів — за назвою поясу ("Europe/Kyiv"),
// власні сцени мов — "lang:<код>" (решта мов показують ті самі міста, тож їх не дублюємо)
const cityWallpapers = TIMEZONES.map((timezone) => ({
  id: timezone.value,
  label: timezone.label,
  group: "cities",
  scene: timezone,
}));

const countryWallpapers = Object.entries(LANGUAGE_PLACES)
  .filter(([code]) => LANGUAGE_SCENES[code])
  .map(([code, place]) => {
    const climate = LANGUAGE_CLIMATES[code];
    return {
      id: `lang:${code}`,
      label: place.label,
      group: "countries",
      // Сцена у форматі, який розуміє CityScene: пояс і координати — для руху сонця
      scene: {
        value: place.tz,
        label: place.label,
        lat: place.lat,
        lon: place.lon,
        slug: `lang_${code}`,
        markup: LANGUAGE_SCENES[code],
        climate,
        seasonal:
          !EVERGREEN_LANGUAGES.has(code) && (climate !== "snow" || SEASONAL_SNOW_LANGUAGES.has(code)),
        particles: code === "ja" ? "petals" : undefined,
      },
    };
  });

export const WALLPAPERS = [...cityWallpapers, ...countryWallpapers];

export const WALLPAPER_GROUPS = [
  { value: "cities", label: "Міста часових поясів" },
  { value: "countries", label: "Країни (з вибору мови)" },
];

export const findWallpaper = (src) => {
  const id = typeof src === "string" ? src.slice(WALLPAPER_PREFIX.length) : "";
  return WALLPAPERS.find((wallpaper) => wallpaper.id === id) ?? null;
};

// Сонце на шпалерах крокує раз на дві години, сезон міняється раз на місяці,
// тож оновлювати час раз на хвилину більш ніж достатньо
export const useMinuteNow = () => {
  const [now, setNow] = useState(getNow);
  useEffect(() => {
    const id = window.setInterval(() => setNow(getNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
};

// Жива шпалера на весь фон: сцена з її власними часом доби й порою року
const WallpaperScene = ({ src }) => {
  const wallpaper = findWallpaper(src);
  const settingsMap = useWallpaperSettingsMap();
  const now = useMinuteNow();
  if (!wallpaper) return null;
  const { time, season, animations } = getWallpaperSettings(settingsMap, wallpaper.id);
  return (
    <CityScene
      timezone={wallpaper.scene}
      now={now}
      timeOfDay={time}
      season={season}
      still={animations === "off"}
      fit="contain"
    />
  );
};

export default memo(WallpaperScene);
