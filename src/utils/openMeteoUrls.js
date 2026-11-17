// Адреси запитів до Open-Meteo для картки погоди — спільні для сайту (App.jsx)
// і сервера (functions/api/city-weather.js), щоб серверні міста отримували рівно ті самі дані.

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
