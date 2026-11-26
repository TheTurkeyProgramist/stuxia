// Повітряні тривоги на «Карті Стихії»: безкоштовно, без ключа.
// Стан областей — ubilling.net.ua (неофіційний агрегатор), межі — geoBoundaries (OSM, ODbL).
// Браузер не може читати ubilling напряму (немає CORS), тому запит іде через /api/air-alerts
// (у dev — проксі з vite.config.mjs).

export const ALERTS_URL = "/api/air-alerts";

// ISO 3166-2 області (як у geoBoundaries) → її назва в ubilling
export const REGION_NAMES = {
  "UA-05": "Вінницька область",
  "UA-07": "Волинська область",
  "UA-09": "Луганська область",
  "UA-12": "Дніпропетровська область",
  "UA-14": "Донецька область",
  "UA-18": "Житомирська область",
  "UA-21": "Закарпатська область",
  "UA-23": "Запорізька область",
  "UA-26": "Івано-Франківська область",
  "UA-30": "м. Київ",
  "UA-32": "Київська область",
  "UA-35": "Кіровоградська область",
  "UA-40": "Севастополь",
  "UA-43": "Автономна Республіка Крим",
  "UA-46": "Львівська область",
  "UA-48": "Миколаївська область",
  "UA-51": "Одеська область",
  "UA-53": "Полтавська область",
  "UA-56": "Рівненська область",
  "UA-59": "Сумська область",
  "UA-61": "Тернопільська область",
  "UA-63": "Харківська область",
  "UA-65": "Херсонська область",
  "UA-68": "Хмельницька область",
  "UA-71": "Черкаська область",
  "UA-74": "Чернігівська область",
  "UA-77": "Чернівецька область",
};

export const fetchAirAlerts = async (signal) => {
  const res = await fetch(ALERTS_URL, { signal, cache: "no-store" });
  if (!res.ok) throw new Error(`Тривоги: ${res.status}`);
  const data = await res.json();
  if (!data || typeof data.states !== "object") throw new Error("Тривоги: незрозуміла відповідь");
  return { states: data.states, cachedAt: data.cachedat || "", fetchedAt: Date.now() };
};

// Час у ubilling — київський і без пояса, тож рахуємо різницю двох таких позначок між собою
const parseStamp = (stamp) => {
  const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(stamp || "");
  return m ? Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]) : null;
};

/** Скільки хвилин триває тривога (від changed до моменту оновлення даних); null — час незрозумілий. */
export const durationMinutes = (changed, cachedAt) => {
  const from = parseStamp(changed);
  const to = parseStamp(cachedAt);
  return from === null || to === null ? null : Math.max(0, Math.round((to - from) / 60000));
};

// Тривога довша за тиждень — це тимчасово окуповані території (Луганщина, Крим), де вона триває з 2022-го
export const LONG_ALERT_MINUTES = 7 * 24 * 60;

const signedArea = (ring) => {
  let area = 0;
  for (let i = 0; i < ring.length - 1; i += 1) area += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  return area / 2;
};

const ringCentroid = (ring) => {
  const area = signedArea(ring);
  if (!area) return ring[0];
  let x = 0;
  let y = 0;
  for (let i = 0; i < ring.length - 1; i += 1) {
    const cross = ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
    x += (ring[i][0] + ring[i + 1][0]) * cross;
    y += (ring[i][1] + ring[i + 1][1]) * cross;
  }
  return [x / (6 * area), y / (6 * area)];
};

/** Де ставити підпис області: центр найбільшої її частини (острівці й анклави не збивають). */
export const regionLabelPoint = (geometry) => {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  const largest = polygons.reduce((best, polygon) => (Math.abs(signedArea(polygon[0])) > Math.abs(signedArea(best[0])) ? polygon : best));
  return ringCentroid(largest[0]);
};

/**
 * Підписи для областей у тривозі: «з 14:58 · 36 хв». format({ since, minutes, long }) → текст
 * (переклад тримає викликач). Областей без тривоги тут немає.
 */
export const alertLabels = (regions, states, cachedAt, format) => ({
  type: "FeatureCollection",
  features: (regions?.features || []).flatMap((feature) => {
    const state = states?.[REGION_NAMES[feature.properties.iso]];
    if (!state?.alertnow) return [];
    const minutes = durationMinutes(state.changed, cachedAt);
    const long = (minutes ?? 0) >= LONG_ALERT_MINUTES;
    return [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: regionLabelPoint(feature.geometry) },
        // sort: на тісному місці спершу показується свіжіша тривога, тривала — остання
        properties: { text: format({ since: sinceLabel(state.changed, cachedAt), minutes, long }), long, sort: long ? 1e9 : (minutes ?? 1e9) },
      },
    ];
  }),
});

/** Межі областей із властивостями alert (true / false / null — немає даних), name, since і long. */
export const regionsWithAlerts = (regions, states, cachedAt) => ({
  type: "FeatureCollection",
  features: (regions?.features || []).map((feature) => {
    const name = REGION_NAMES[feature.properties.iso];
    const state = name ? states?.[name] : undefined;
    return {
      ...feature,
      properties: {
        iso: feature.properties.iso,
        name: name || feature.properties.name,
        alert: state ? Boolean(state.alertnow) : null,
        since: state?.changed || "",
        long: Boolean(state?.alertnow) && (durationMinutes(state.changed, cachedAt) ?? 0) >= LONG_ALERT_MINUTES,
      },
    };
  }),
});

/** Скільки областей із даними і скільки з них у тривозі. */
export const alertSummary = (states) => {
  const known = Object.values(REGION_NAMES).filter((name) => states?.[name]);
  return { total: known.length, active: known.filter((name) => states[name].alertnow).length };
};

/** «14:58» для сьогоднішньої зміни статусу, інакше «11.12.2022» (час у ubilling — київський). */
export const sinceLabel = (changed, cachedAt) => {
  if (!changed) return "";
  const [date, time = ""] = changed.split(" ");
  if (cachedAt && date === cachedAt.split(" ")[0]) return time.slice(0, 5);
  const [y, m, d] = date.split("-");
  return y && m && d ? `${d}.${m}.${y}` : changed;
};
