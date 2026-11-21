// Адреси запитів до Open-Meteo для картки погоди — спільні для сайту (App.jsx)
// і сервера (functions/api/city-weather.js), щоб серверні міста отримували рівно ті самі дані.
//
// ВАЖЛИВО: цей файл імпортує Cloudflare-функція, тож тут НІЧОГО не імпортуємо (особливо i18n).
// i18next при ініціалізації ставить setTimeout, а в Workers таймери поза обробником заборонені —
// деплой падає з «Disallowed operation called within global scope» (так було 19.11.2026).
// Перевіряє serverFunctionsImports.test.js.

// Основний прогноз (best_match): 30 змінних × 17 діб = 3,64 «виклику» Open-Meteo.
// Решту денних даних (максимуми, суми, схід/захід) і повільні величини «зараз»
// рахуємо з погодинного ряду — див. utils/openMeteoDerive.js
export const buildForecastUrl = (lat, lon) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  "&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,cloud_cover,is_day" +
  "&hourly=temperature_2m,uv_index,precipitation_probability,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm" +
  "&daily=temperature_2m_max,temperature_2m_min,snowfall_sum" +
  "&wind_speed_unit=ms&timezone=auto&past_days=1&forecast_days=16";

const isoDate = (d) => d.toISOString().split("T")[0];

// Сезонний прогноз на ~210 днів: 1,51 «виклику» (для seasonal-api Open-Meteo ділить вагу на 120)
export const buildSeasonalUrl = (lat, lon, today = new Date()) => {
  const end = new Date(today);
  end.setDate(end.getDate() + 210);
  return (
    `https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${lat}&longitude=${lon}` +
    "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max" +
    `&wind_speed_unit=ms&start_date=${isoDate(today)}&end_date=${isoDate(end)}`
  );
};

// ───────── Консенсус моделей (логіка змішування — utils/weatherConsensus.js) ─────────

// KNMI / DMI / MET Norway не беремо: над Україною це копії ECMWF (ідентичні числа),
// вони б перекосили медіану на користь однієї моделі.
// Чотири моделі замість семи (21.11.2026): вартість консенсусу 5,6 → 3,2 «виклику».
// Лишили ті, що дають дані на весь горизонт запиту (перевірено для Києва, діб із даними з 11):
// ECMWF 11, GFS 11, GEM 11 і ICON 8,6. Відпали UK Met Office (8,1), Météo-France (5,6) і JMA (11,
// але грубша сітка за GEM). Після ~8,6 доби ICON закінчується, і лишаються рівно три моделі —
// це якраз MIN_CONSENSUS_SOURCES (weatherConsensus.js), тож консенсус тримається до 10-ї доби.
export const CONSENSUS_MODELS = [
  "ecmwf_ifs025", // ECMWF (Європа)
  "icon_seamless", // DWD ICON (Німеччина)
  "gfs_seamless", // NOAA GFS (США)
  "gem_seamless", // Environment Canada
];

// Тиск і точку роси не звіряємо: моделі тут майже не розходяться, а кожна змінна × моделі
// коштує квоти Open-Meteo. Вони лишаються з best_match (точка роси лише обрізається до температури).
// «Відчувається» теж не запитуємо (−0,7 «виклику»): перераховуємо з медіан температури, вологості
// й вітру — див. shiftApparent. Звірено 17.11.2026 на 5 містах × 11 діб: від медіани моделей
// відрізняється в середньому на 0,33° погодинно і 0,41° для денного максимуму.
// Хмарність лишаємо: best_match відходить від медіани в середньому на 17 п.п.
export const CONSENSUS_HOURLY_VARS = [
  "temperature_2m",
  "relative_humidity_2m",
  "wind_speed_10m",
  "wind_gusts_10m",
  "cloud_cover",
  "precipitation",
];

// Із API беремо лише денні макс/мін температури: моделі рахують їх із даних, точніших за
// погодинні (ECMWF — до 3 °C різниці). Решту денних величин згортаємо з погодинного ряду
// кожної моделі — це −5 змінних × моделі у квоті Open-Meteo (було ≈ −3.5 «виклику» на 7 моделях).
// Звірено 15.11.2026 на 5 містах: медіана моделей відрізняється в середньому на
// 0.1–0.3 (вітер, «відчувається»), опади — 0.4 мм: ECMWF/JMA мають крок 3–6 год, і API
// ділить їхні суми на доби інакше; погодинна сума узгоджена з графіком картки.
export const CONSENSUS_DAILY_API_VARS = ["temperature_2m_max", "temperature_2m_min"];

// Після ~10 днів у більшості моделей закінчується горизонт
const CONSENSUS_FORECAST_DAYS = 10;

export const buildConsensusUrl = (lat, lon) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  `&hourly=${CONSENSUS_HOURLY_VARS.join(",")}` +
  `&daily=${CONSENSUS_DAILY_API_VARS.join(",")}` +
  `&models=${CONSENSUS_MODELS.join(",")}` +
  `&wind_speed_unit=ms&timezone=auto&past_days=1&forecast_days=${CONSENSUS_FORECAST_DAYS}`;

// ───────── Легке оновлення «зараз» (розклад оновлень — utils/weatherRefresh.js) ─────────

// 9 змінних, 1 доба → вага 1,0 (мінімальна)
export const LIGHT_CURRENT_VARS = [
  "temperature_2m",
  "relative_humidity_2m",
  "apparent_temperature",
  "weather_code",
  "wind_speed_10m",
  "wind_direction_10m",
  "wind_gusts_10m",
  "cloud_cover",
  "is_day",
];

export const buildLightCurrentUrl = (lat, lon) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  `&current=${LIGHT_CURRENT_VARS.join(",")}&wind_speed_unit=ms&timezone=auto&forecast_days=1`;
