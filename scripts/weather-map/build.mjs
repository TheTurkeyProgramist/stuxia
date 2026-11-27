// Качає свіжий запуск GFS (NOAA, відкриті дані на AWS) і пакує його в weather-data/:
//   f<год>-<файл>.png — по три шари в каналах R, G, B на кожну годину прогнозу
//                       (склад — src/components/ClimateMap/styxiaLayers.js)
//   thumb-*.png       — мініатюри шарів для панелі
//   regions.txt       — межі областей (для тривог)
//   cities.txt        — міста (серверні й світу) і погода в них на кожну годину прогнозу
//   meta.txt          — JSON: час запуску моделі, розмір сітки, список годин (.txt, щоб Vite не обгортав у модуль)
// Кадри: від учорашньої півночі за Києвом; учора й найближчі години — щогодини (сітка 0.25°, проріджена
// до 0.5°), далі — з кроком step. Минулі години беруться з попередніх запусків моделі.
// Запуск: bun run weather:build [-- --hours=384 --step=3 --hourly=48 --past=1]
//   hours — на скільки годин уперед від запуску (до 384 = 16 днів), step — крок далеких кадрів (кратний 3),
//   hourly — скільки годин уперед іти щогодини (до 120), past — 0, щоб не брати вчорашній день
/* global fetch, URL, AbortSignal, Buffer, console, process, setTimeout */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { crc32, deflateSync } from "node:zlib";
import { decodeGrib2 } from "./grib2.mjs";
import { buildRegions } from "./regions.mjs";
import { loadCities } from "./cities.mjs";
import { KINDS, apparentTemperature, sampleGrid, weatherKind } from "../../src/components/ClimateMap/styxiaWeather.js";
import { DATA_VERSION, LAYERS, WIND_RANGE, colorFor, encodeValue } from "../../src/components/ClimateMap/styxiaLayers.js";

const BUCKET = "https://noaa-gfs-bdp-pds.s3.amazonaws.com";
const OUT_DIR = fileURLToPath(new URL("../../weather-data/", import.meta.url));

const option = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? Number(hit.split("=")[1]) : fallback;
};
const MAX_HOURS = option("hours", 384);
const STEP = option("step", 3);
const HOURLY = Math.min(option("hourly", 48), MAX_HOURS);
const PAST = option("past", 1);
if (!(STEP >= 3 && STEP % 3 === 0 && MAX_HOURS >= 0 && MAX_HOURS <= 384 && MAX_HOURS % STEP === 0 && HOURLY >= 0 && HOURLY <= 120 && HOURLY % STEP === 0)) {
  throw new Error("--step кратний 3; --hours і --hourly кратні кроку (до 384 і 120)");
}
const HOUR_MS = 3600 * 1000;

// Поле GFS (рядок з .idx) і переведення в одиниці шару
const SOURCES = {
  u: [":UGRD:10 m above ground:", (x) => x],
  v: [":VGRD:10 m above ground:", (x) => x],
  temperature: [":TMP:2 m above ground:", (k) => k - 273.15],
  precipitation: [":PRATE:surface:", (x) => x * 3600], // кг/м²/с → мм/год
  clouds: [":TCDC:entire atmosphere:", (x) => x],
  pressure: [":PRMSL:mean sea level:", (pa) => pa / 100],
  humidity: [":RH:2 m above ground:", (x) => x],
  gusts: [":GUST:surface:", (x) => x],
  snow: [":SNOD:surface:", (m) => m * 100], // м → см
  storm: [":CAPE:surface:", (x) => x],
  visibility: [":VIS:surface:", (m) => m / 1000], // м → км
  land: [":LAND:surface:", (x) => x], // маска суші для мініатюр (лише для 0-ї години): 1 — суша
};

// read — читання тіла відповіді: воно теж може обірватися за тайм-аутом, тож повторюється разом із запитом
const fetchOk = async (url, read, options, attempts = 5) => {
  for (let attempt = 1; ; attempt += 1) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(120000), ...options });
      if (!res.ok) throw new Error(`${res.status}`);
      return await read(res);
    } catch (error) {
      if (attempt >= attempts) throw new Error(`${error.message} (${url})`, { cause: error });
      // Пауза перед повтором: мережа чи сервер могли тимчасово захлинутися
      await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
    }
  }
};

const fileUrl = ({ day, hour }, forecastHour, grid = "0p50") =>
  `${BUCKET}/gfs.${day}/${hour}/atmos/gfs.t${hour}z.pgrb2.${grid}.f${String(forecastHour).padStart(3, "0")}`;

const runAt = (time) => {
  const date = new Date(time);
  return {
    date,
    day: date.toISOString().slice(0, 10).replaceAll("-", ""),
    hour: String(date.getUTCHours()).padStart(2, "0"),
  };
};

// Найсвіжіший запуск (о 00, 06, 12, 18 UTC), у якому вже викладено й останню потрібну годину
const findLatestRun = async () => {
  const step = 6 * 3600 * 1000;
  let time = Math.floor(Date.now() / step) * step;
  for (let i = 0; i < 12; i += 1, time -= step) {
    const run = runAt(time);
    const last = await fetch(`${fileUrl(run, MAX_HOURS)}.idx`, { method: "HEAD", signal: AbortSignal.timeout(30000) });
    if (last.ok) return run;
  }
  throw new Error("Не знайшов жодного повного запуску GFS за 3 доби");
};

// Тягнемо лише потрібне поле за байтовим діапазоном з .idx, а не весь файл
const downloadField = async (url, index, pattern) => {
  const line = index.findIndex((row) => row.includes(pattern));
  if (line === -1) throw new Error(`Немає поля ${pattern} у ${url}`);
  const start = Number(index[line].split(":")[1]);
  const end = index[line + 1] ? Number(index[line + 1].split(":")[1]) - 1 : "";
  const bytes = await fetchOk(url, (res) => res.arrayBuffer(), { headers: { Range: `bytes=${start}-${end}` } });
  return decodeGrib2(Buffer.from(bytes));
};

const pngChunk = (type, data) => {
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  chunk.write(type, 4, "latin1");
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(chunk.subarray(4, 8 + data.length)), 8 + data.length);
  return chunk;
};

// PNG без залежностей: 8 біт, RGB
const encodePng = (width, height, rgb) => {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header.set([8, 2, 0, 0, 0], 8);
  const rows = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    rgb.copy(rows, y * (width * 3 + 1) + 1, y * width * 3, (y + 1) * width * 3);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk("IHDR", header),
    pngChunk("IDAT", deflateSync(rows, { level: 9 })),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
};

const pool = async (items, limit, worker) => {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const item = items[next];
        next += 1;
        await worker(item);
      }
    }),
  );
};

// Які поля в яких каналах: вітер — завжди в field, решта — зі списку шарів
const wind = { range: WIND_RANGE };
const FILES = { field: [["u", wind], ["v", wind]] };
for (const layer of LAYERS) {
  if (layer.fromWind) continue;
  FILES[layer.file] ||= [];
  FILES[layer.file][layer.channel] = [layer.id, layer];
}

// Сітку 0.25° проріджуємо вдвічі — вона збігається з 0.5°
const halve = ({ width, height, values }) => {
  const w = width / 2;
  const h = (height + 1) / 2;
  const out = new Float32Array(w * h);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) out[y * w + x] = values[y * 2 * width + x * 2];
  }
  return { width: w, height: h, values: out };
};

const loadHour = async ({ run, forecastHour, fine }) => {
  const url = fileUrl(run, forecastHour, fine ? "0p25" : "0p50");
  const index = (await fetchOk(`${url}.idx`, (res) => res.text())).trim().split("\n");
  const fields = {};
  const wanted = Object.entries(SOURCES).filter(([id]) => id !== "land" || forecastHour === 0);
  await pool(wanted, 6, async ([id, [pattern, convert]]) => {
    const field = await downloadField(url, index, pattern);
    const { width, height, values } = fine ? halve(field) : field;
    fields[id] = { width, height, values: values.map(convert) };
  });
  // «Відчувається як»: рахуємо з температури, вологості й вітру — нових завантажень не потрібно
  const { temperature, humidity, u, v } = fields;
  fields.feelsLike = {
    width: temperature.width,
    height: temperature.height,
    values: temperature.values.map((t, i) => apparentTemperature(t, humidity.values[i], Math.hypot(u.values[i], v.values[i]))),
  };
  return fields;
};

const writeHour = async (forecastHour, fields) => {
  const { width, height } = fields.temperature;
  for (const [name, channels] of Object.entries(FILES)) {
    const rgb = Buffer.alloc(width * height * 3);
    channels.forEach(([id, encoding], channel) => {
      const { values } = fields[id];
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          // GFS починається з довготи 0°, а карті зручніше з −180°
          const value = values[y * width + ((x + width / 2) % width)];
          // NaN (поза бітмапом) — найменше значення шару
          rgb[(y * width + x) * 3 + channel] = Number.isNaN(value) ? 0 : encodeValue(value, encoding);
        }
      }
    });
    await writeFile(`${OUT_DIR}f${String(forecastHour).padStart(3, "0")}-${name}.png`, encodePng(width, height, rgb));
  }
};

// Мініатюри шарів для панелі: фрагмент Європи, дані шару поверх схематичної суші й моря
const THUMB = { width: 160, height: 120, lon: [-20, 60], lat: [68, 8] };
const OCEAN = [44, 70, 102];
const LAND = [104, 116, 92];
const makeThumbnail = (fields, layer) => {
  const { width, height } = fields.temperature;
  const at = (values, lon, lat) =>
    values[Math.round(((90 - lat) * (height - 1)) / 180) * width + (Math.round((((lon % 360) + 360) % 360) * (width / 360)) % width)];
  const rgb = Buffer.alloc(THUMB.width * THUMB.height * 3);
  for (let y = 0; y < THUMB.height; y += 1) {
    for (let x = 0; x < THUMB.width; x += 1) {
      const lon = THUMB.lon[0] + ((x + 0.5) / THUMB.width) * (THUMB.lon[1] - THUMB.lon[0]);
      const lat = THUMB.lat[0] + ((y + 0.5) / THUMB.height) * (THUMB.lat[1] - THUMB.lat[0]);
      let color = at(fields.land.values, lon, lat) > 0.5 ? LAND : OCEAN;
      if (layer) {
        const value = layer.fromWind
          ? Math.hypot(at(fields.u.values, lon, lat), at(fields.v.values, lon, lat))
          : at(fields[layer.id].values, lon, lat);
        // NaN (поза бітмапом, наприклад сніг над морем) — лишається підкладка
        if (!Number.isNaN(value)) {
          const [r, g, b, a] = colorFor(value, layer);
          const k = a / 255;
          color = [r, g, b].map((c, i) => Math.round(color[i] * (1 - k) + c * k));
        }
      }
      rgb.set(color, (y * THUMB.width + x) * 3);
    }
  }
  return encodePng(THUMB.width, THUMB.height, rgb);
};

// Погода в містах на годину прогнозу: [температура ×10, тип погоди, вітер ×10] на кожне місто підряд
const NO_DATA = -9999;
const sampleCities = (cities, fields) => {
  const { width, height } = fields.temperature;
  const out = [];
  for (const city of cities) {
    const at = (id) => sampleGrid(fields[id].values, width, height, city.lon, city.lat);
    const temp = at("temperature");
    const kind = weatherKind({
      temp,
      precip: at("precipitation"),
      clouds: at("clouds"),
      cape: at("storm"),
      visibility: at("visibility"),
    });
    const wind = Math.hypot(at("u"), at("v"));
    out.push(Number.isFinite(temp) ? Math.round(temp * 10) : NO_DATA, KINDS.indexOf(kind), Number.isFinite(wind) ? Math.round(wind * 10) : 0);
  }
  return out;
};

const run = await findLatestRun();
const runTime = run.date.getTime();

// Початок шкали: вчора 00:00 за Києвом (UTC+2/+3 — беремо 21:00 позавчора за UTC)
const start = PAST ? Math.floor(Date.now() / (24 * HOUR_MS)) * 24 * HOUR_MS - 27 * HOUR_MS : runTime;
const FRAMES = [];
// Минуле: перші години відповідного запуску — це найточніше, що модель знає про той час
for (let time = start; time < runTime; time += HOUR_MS) {
  const past = runAt(Math.floor(time / (6 * HOUR_MS)) * 6 * HOUR_MS);
  FRAMES.push({ time, run: past, forecastHour: (time - past.date.getTime()) / HOUR_MS, fine: true });
}
for (let h = 0; h <= MAX_HOURS; h += h < HOURLY ? 1 : STEP) {
  FRAMES.push({ time: runTime + h * HOUR_MS, run, forecastHour: h, fine: h <= HOURLY });
}
// Години в meta та в назвах файлів — від початку шкали
const HOURS = FRAMES.map((frame) => (frame.time - FRAMES[0].time) / HOUR_MS);
console.log(`GFS ${run.date.toISOString()}, кадрів: ${HOURS.length}`);
await mkdir(OUT_DIR, { recursive: true });

// Без списку міст карта працює, лише без закордонних міст і прогнозу в серверних
let cities = [];
try {
  cities = await loadCities();
  console.log("Міст: " + cities.length + " (серверних і світу, Natural Earth)");
} catch (error) {
  console.warn("Список міст не завантажено: " + error.message);
}
const citySamples = new Array(HOURS.length);

let grid = null;
let done = 0;
await pool(FRAMES, 3, async (frame) => {
  const offset = HOURS[FRAMES.indexOf(frame)];
  const fields = await loadHour(frame);
  grid = { width: fields.temperature.width, height: fields.temperature.height };
  await writeHour(offset, fields);
  citySamples[HOURS.indexOf(offset)] = sampleCities(cities, fields);
  if (frame.time === runTime) {
    for (const layer of LAYERS) await writeFile(`${OUT_DIR}thumb-${layer.id}.png`, makeThumbnail(fields, layer));
    await writeFile(`${OUT_DIR}thumb-none.png`, makeThumbnail(fields, null));
  }
  done += 1;
  console.log(`  ${done}/${HOURS.length}: ${new Date(frame.time).toISOString()}`);
});

try {
  await buildRegions(OUT_DIR);
} catch (error) {
  // Тривоги необов’язкові: без меж областей карта працює, лише без заливки
  console.warn(`Межі областей не завантажено: ${error.message}`);
}

await writeFile(OUT_DIR + "cities.txt", JSON.stringify({ cities, frames: citySamples }));

// meta — останнім: поки його не оновлено, карта не вважає дані новими
await writeFile(
  `${OUT_DIR}meta.txt`,
  JSON.stringify({ version: DATA_VERSION, time: new Date(FRAMES[0].time).toISOString(), run: run.date.toISOString(), width: grid.width, height: grid.height, hours: HOURS, step: STEP }),
);
console.log(`Готово: weather-data/ (${HOURS.length} кадрів, ${grid.width}×${grid.height})`);
