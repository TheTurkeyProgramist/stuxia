// Точки «Карти Стихії»: серверні міста (погода з нашого сервера) і власні картки погоди.
// Точки малює MapLibre (GeoJSON → circle + symbol), тож тисячі точок не створюють DOM-елементів.
import { UKRAINE_CITIES_40, getCitySlug, getCityNameForLang } from "../../utils/citiesDatabase.js";
import { SERVER_CITIES, SERVER_NOW_TTL_MS } from "../../utils/serverCities.js";
import { fetchServerNow } from "../../utils/serverWeather.js";
import * as SunCalc from "suncalc";
import { KINDS, kindIcon, sampleGrid } from "./styxiaWeather.js";
import { decodeValue } from "./styxiaLayers.js";

const PARALLEL = 6;
const RETRY_AFTER_MS = 5 * 60 * 1000;

// Центри областей — завжди в першому ряду міст на карті (з малого масштабу й першими при тісноті).
// «Швидкість оновлення» на сервері тут ні до чого: Донецьк, Луганськ і Сімферополь серверу «повільні»,
// але на карті їх не можна губити
const OBLAST_CENTERS = new Set([
  "Вінниця", "Луцьк", "Дніпро", "Донецьк", "Житомир", "Ужгород", "Запоріжжя", "Івано-Франківськ", "Київ",
  "Кропивницький", "Луганськ", "Львів", "Миколаїв", "Одеса", "Полтава", "Рівне", "Суми", "Тернопіль", "Харків",
  "Херсон", "Хмельницький", "Черкаси", "Чернівці", "Чернігів", "Сімферополь", "Севастополь",
]);

const CITY_BY_SLUG = new Map(UKRAINE_CITIES_40.map((city) => [getCitySlug(city), city]));

// Кеш спільний на всю сторінку: перемикання джерел не перепитує сервер
const cache = new Map(); // slug → { current, until }

const feature = (lat, lon, properties) => ({
  type: "Feature",
  geometry: { type: "Point", coordinates: [lon, lat] },
  properties,
});

const weatherProps = (temp, wind) => ({
  temp: Number.isFinite(temp) ? Math.round(temp) : null,
  wind: Number.isFinite(wind) ? Math.round(wind * 10) / 10 : null,
});

/** Ключ іконки погоди за кодом WMO (Open-Meteo); null — коду немає. */
export const iconKey = (code, isDay = 1) => {
  const c = Number(code);
  if (code === null || code === undefined || !Number.isFinite(c)) return null;
  const day = isDay === undefined || isDay === null ? true : Boolean(Number(isDay));
  if (c === 0) return day ? "clear-day" : "clear-night";
  if (c <= 2) return day ? "partly-day" : "partly-night";
  if (c === 3) return "cloudy";
  if (c === 45 || c === 48) return "fog";
  if (c === 56 || c === 57 || c === 66 || c === 67) return "sleet";
  if (c >= 51 && c <= 55) return "drizzle";
  if (c >= 61 && c <= 65) return "rain";
  if (c >= 71 && c <= 77) return "snow";
  if (c >= 80 && c <= 82) return "showers";
  if (c === 85 || c === 86) return "snow";
  if (c >= 95) return "storm";
  return "cloudy";
};

// Під точкою — коротка назва: без «(область, країна)» і без «, Dubai, …»; повна — у спливній картці
const shortName = (name) => String(name).split(/ \(|,/)[0].trim();

// Текст стану погоди (переклади вже є для швидкої погоди в шапці)
const CONDITION_KEYS = {
  "clear-day": "iasno",
  "clear-night": "iasnaNich",
  "partly-day": "minlyvaKhmarnist",
  "partly-night": "minlyvaKhmarnist",
  cloudy: "khmarno",
  fog: "tuman",
  drizzle: "mriaka",
  rain: "doshch",
  showers: "zlyva",
  sleet: "doshch",
  snow: "snih",
  storm: "hroza",
};
/** Ключ перекладу тексту «Хмарно», «Дощ»… за ключем іконки; null — іконки немає. */
export const conditionKey = (icon) => (CONDITION_KEYS[icon] ? `newsWeather.QuickWeather.${CONDITION_KEYS[icon]}` : null);

// «+2°» — температура окремим підписом біля іконки: назва може не поміститися, а температура лишається
const tempText = (temp) => (temp === null ? "" : `${temp > 0 ? "+" : ""}${temp}°`);

/** Власні картки погоди (разом із GPS-карткою). Картки без координат пропускаємо. */
// gps: false — GPS на картці вимкнено, тож головна картка тут звичайна (без позначки GPS)
export const ownFeatures = (cards = [], { gps: gpsOn = true } = {}) =>
  cards.flatMap((card) => {
    const lat = Number.parseFloat(card?.lat);
    const lon = Number.parseFloat(card?.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return [];
    const { temp, wind } = weatherProps(card.current?.tempNum, card.current?.windNum);
    const name = card.locationName || "";
    // Під точкою — коротка назва без «(область, країна)», повна — у спливній картці
    const icon = iconKey(card.current?.weather_code, card.current?.is_day);
    // GPS-картка — окремо від доданих вручну: її назва може збігатися з назвою міста деінде
    const gps = Boolean(card.isMain) && gpsOn;
    return [
      feature(lat, lon, { kind: "own", gps, name, temp, wind, icon, text: shortName(name) + (gps ? " (GPS)" : ""), short: tempText(temp), order: 0 }),
    ];
  });

const isDaytime = (lat, lon, date) => SunCalc.getPosition(date, lat, lon).altitude > 0;

/**
 * Погода міст зі збірки (cities.txt) на кадр: Map id → { temp, wind, icon }.
 * Температура в файлі в десятих градуса, вітер — у десятих м/с, тип погоди — індекс у KINDS.
 */
export const forecastFor = (data, frame, validTime) => {
  const flat = data?.frames?.[frame];
  if (!flat) return null;
  const date = new Date(validTime);
  const result = new Map();
  data.cities.forEach((city, i) => {
    const temp = flat[i * 3];
    result.set(city.id, {
      temp: temp <= -9000 ? null : Math.round(temp / 10),
      wind: flat[i * 3 + 2] / 10,
      icon: kindIcon(KINDS[flat[i * 3 + 1]], isDaytime(city.lat, city.lon, date)),
    });
  });
  return result;
};

/** Міста світу (не серверні) з погодою обраного кадру; назва — мовою сайту, якщо вона є. */
export const worldFeatures = (data, forecast, lang) =>
  data.cities
    .filter((city) => city.tier !== "s")
    .map((city) => {
      const { temp, wind, icon } = forecast.get(city.id) || {};
      const name = city.l?.[lang] || city.n;
      const t = temp ?? null;
      return feature(city.lat, city.lon, {
        kind: "world",
        name,
        temp: t,
        wind: wind ?? null,
        icon,
        text: shortName(name),
        short: tempText(t),
        order: 3 + city.tier,
      });
    });

/** Серверні міста: живі дані з сервера, а коли передано forecast (кадр не «зараз») — прогноз моделі. */
export const serverFeatures = (lang, forecast = null) =>
  SERVER_CITIES.map((city) => {
    const predicted = forecast?.get(city.slug);
    const current = predicted ? null : cache.get(city.slug)?.current;
    const { temp, wind } = predicted
      ? { temp: predicted.temp, wind: predicted.wind }
      : weatherProps(current?.temperature_2m, current?.wind_speed_10m);
    const source = CITY_BY_SLUG.get(city.slug);
    const name = (source && getCityNameForLang(source, lang)) || city.name;
    return feature(city.lat, city.lon, {
      kind: "server",
      name,
      temp,
      wind,
      icon: predicted ? predicted.icon : iconKey(current?.weather_code, current?.is_day),
      text: shortName(name),
      short: tempText(temp),
      order: city.tier === "fast" || OBLAST_CENTERS.has(city.name) ? 1 : 2,
    });
  });

/**
 * Довантажує «зараз» для серверних міст у видимій частині карти, великі — першими.
 * onUpdate викликається після кожної порції; shouldStop — щоб припинити на новому русі карти.
 */
export const loadVisibleServerWeather = async (bounds, onUpdate, shouldStop) => {
  const queue = SERVER_CITIES.filter(
    (city) => !(cache.get(city.slug)?.until > Date.now()) && bounds.contains([city.lon, city.lat]),
  ).sort((a, b) => (a.tier === "fast" ? 0 : 1) - (b.tier === "fast" ? 0 : 1));

  for (let i = 0; i < queue.length && !shouldStop(); i += PARALLEL) {
    await Promise.all(
      queue.slice(i, i + PARALLEL).map(async (city) => {
        const current = await fetchServerNow(city.slug);
        const ttl = current ? SERVER_NOW_TTL_MS : RETRY_AFTER_MS;
        cache.set(city.slug, { current: current || cache.get(city.slug)?.current, until: Date.now() + ttl });
      }),
    );
    if (!shouldStop()) onUpdate();
  }
};

const PERCENT_LAYERS = new Set(["clouds", "humidity"]);

/** Короткий підпис значення шару біля міста: «+3°», «45%», «1013», «0.4». Одиниці — у легенді. */
export const compactValue = (value, layerId, digits = null) => {
  if (!Number.isFinite(value)) return "";
  if (layerId === "temperature" || layerId === "feelsLike") {
    const rounded = Math.round(value);
    return `${rounded > 0 ? "+" : ""}${rounded === 0 ? 0 : rounded}°`;
  }
  if (PERCENT_LAYERS.has(layerId)) return `${Math.round(value)}%`;
  if (digits === 2) return value.toFixed(2);
  const text = Math.abs(value) < 10 ? (Math.round(value * 10) / 10).toFixed(1) : String(Math.round(value));
  return text === "-0.0" ? "0.0" : text;
};

/**
 * Біля міст показуємо значення ВИБРАНОГО шару, а не завжди температуру: опади — на шарі опадів, тиск — на шарі тиску.
 * Значення беремо з тих самих байтів, з яких намальовано шар. Температура лишається як є (там живі дані серверів),
 * «Відчувається як» міняє лише число, а решта шарів — ще й іконку (на іконку шару). Справжню погоду зберігаємо
 * у weatherIcon — для картки-тултіпа.
 */
export const applyLayerValues = (features, layer, plane, meta, unit = null) => {
  // Приземна температура вже є в точках; на висоті (unit.aloft) беремо її з шару
  if (!layer || !plane || (layer.id === "temperature" && !unit?.aloft)) return features;
  return features.map((feature) => {
    const [lon, lat] = feature.geometry.coordinates;
    const value = decodeValue(Math.round(sampleGrid(plane, meta.width, meta.height, lon + 180, lat)), layer);
    return {
      ...feature,
      properties: {
        ...feature.properties,
        short: compactValue(unit ? unit.convert(value) : value, layer.id, unit?.digits),
        weatherIcon: feature.properties.icon,
        icon: layer.id === "feelsLike" || layer.id === "temperature" ? feature.properties.icon : `layer-${layer.id}`,
      },
    };
  });
};
