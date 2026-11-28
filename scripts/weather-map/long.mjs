// Довгий прогноз після GFS, по одному кадру на добу (12:00 UTC):
//   GEFS — середнє ансамблю NOAA, до 35 днів (грубші, згладжені значення);
//   CFS — сезонна модель NOAA, один прогін, далі до LAST_DAY днів: лише тенденції.
/* global fetch, AbortSignal, console */
import { apparentTemperature } from "../../src/components/ClimateMap/styxiaWeather.js";
import { ALTITUDES } from "../../src/components/ClimateMap/styxiaLayers.js";

const GEFS = "https://noaa-gefs-pds.s3.amazonaws.com";
const CFS = "https://noaa-cfs-pds.s3.amazonaws.com";
const HOUR_MS = 3600 * 1000;
const DAY_MS = 24 * HOUR_MS;
const GEFS_HOURS = 840;
const LAST_DAY = 90;

const dayStamp = (time) => new Date(time).toISOString().slice(0, 10).replaceAll("-", "");
const stamp = (time) => `${dayStamp(time)}${String(new Date(time).getUTCHours()).padStart(2, "0")}`;

const gefsUrl = (run, time) =>
  `${GEFS}/gefs.${dayStamp(run)}/00/atmos/pgrb2ap5/geavg.t00z.pgrb2a.0p50.f${String((time - run) / HOUR_MS).padStart(3, "0")}`;
const cfsUrl = (kind, run, time) => `${CFS}/cfs.${dayStamp(run)}/00/6hrly_grib_01/${kind}${stamp(time)}.01.${stamp(run)}.grb2`;

// Найсвіжіший запуск о 00 UTC, у якому вже є останній потрібний файл
const findRun = async (lastUrl) => {
  let run = Math.floor(Date.now() / DAY_MS) * DAY_MS;
  for (let i = 0; i < 4; i += 1, run -= DAY_MS) {
    const res = await fetch(`${lastUrl(run)}.idx`, { method: "HEAD", signal: AbortSignal.timeout(30000) });
    if (res.ok) return run;
  }
  throw new Error("немає повного запуску");
};

// Будь-яку сітку широта/довгота (і майже рівномірну гаусову CFS) — на нашу 720×361
const WIDTH = 720;
const HEIGHT = 361;
const regrid = ({ width, height, values }, latTop) => {
  if (width === WIDTH && height === HEIGHT) return values;
  const out = new Float32Array(WIDTH * HEIGHT);
  for (let y = 0; y < HEIGHT; y += 1) {
    const sy = Math.min(height - 1, Math.max(0, ((latTop - (90 - y * 0.5)) / (2 * latTop)) * (height - 1)));
    const y0 = Math.floor(sy);
    const y1 = Math.min(height - 1, y0 + 1);
    for (let x = 0; x < WIDTH; x += 1) {
      const sx = (x / WIDTH) * width;
      const x0 = Math.floor(sx);
      const x1 = (x0 + 1) % width;
      const top = values[y0 * width + x0] * (1 - (sx - x0)) + values[y0 * width + x1] * (sx - x0);
      const bottom = values[y1 * width + x0] * (1 - (sx - x0)) + values[y1 * width + x1] * (sx - x0);
      out[y * WIDTH + x] = top * (1 - (sy - y0)) + bottom * (sy - y0);
    }
  }
  return out;
};

export const longFrames = async ({ after, fetchOk, downloadField, pool, sources }) => {
  const open = async (url, latTop = 90) => ({
    url,
    latTop,
    index: (await fetchOk(`${url}.idx`, (res) => res.text())).trim().split("\n"),
  });

  // Поле з одного файлу: перший наявний із шаблонів, переведений в одиниці шару
  const read = async (file, patterns, convert) => {
    const pattern = patterns.find((p) => file.index.some((row) => row.includes(p)));
    if (!pattern) return null;
    return regrid(await downloadField(file.url, file.index, pattern), file.latTop).map(convert);
  };

  // plan: поле → [файл, шаблони, переведення]
  const build = async (plan) => {
    const fields = {};
    await pool(Object.entries(plan), 6, async ([id, [file, patterns, convert]]) => {
      const values = await read(file, patterns, convert);
      if (values) fields[id] = { width: WIDTH, height: HEIGHT, values };
    });
    const { temperature, humidity, u, v } = fields;
    const make = (fn) => ({ width: WIDTH, height: HEIGHT, values: temperature.values.map(fn) });
    fields.feelsLike = make((t, i) => apparentTemperature(t, humidity.values[i], Math.hypot(u.values[i], v.values[i])));
    // Цих полів у довгих моделях може не бути: пориви = швидкість вітру, видимість — без туману
    fields.gusts ||= make((_, i) => Math.hypot(u.values[i], v.values[i]));
    fields.visibility ||= make(() => 24);
    fields.storm ||= make(() => 0);
    fields.snow ||= make(() => 0);
    const missing = Object.keys(plan).filter((id) => !fields[id]);
    if (missing.length) throw new Error(`немає полів: ${missing.join(", ")}`);
    return fields;
  };

  const same = (file, ids) => Object.fromEntries(ids.map((id) => [id, [file, [sources[id][0]], sources[id][1]]]));

  const upper = (file) => {
    const plan = {};
    for (const { meters, mb } of ALTITUDES) {
      // Якщо рівня немає (у GEFS — 600 гПа й температури на 300) — найближчий сусідній
      const levels = [mb, { 925: 900, 600: 700, 300: 250 }[mb] || mb];
      for (const [prefix, name] of [["u", "UGRD"], ["v", "VGRD"], ["t", "TMP"]]) {
        const id = `${prefix}${meters}`;
        plan[id] = [file, levels.map((level) => `:${name}:${level} mb:`), sources[id][1]];
      }
    }
    return plan;
  };

  const loadGefs = (run) => async (time) => {
    const file = await open(gefsUrl(run, time));
    return build({
      ...same(file, ["u", "v", "temperature", "pressure", "humidity", "snow"]),
      clouds: [file, [":TCDC:entire atmosphere"], (x) => x],
      storm: [file, [":CAPE:180-0 mb above ground:"], (x) => x],
      precipitation: [file, [":APCP:surface:"], (x) => x / 6], // сума за 6 год → мм/год
      ...upper(file),
    });
  };

  const loadCfs = (run) => async (time) => {
    const flux = await open(cfsUrl("flxf", run, time), 89.277);
    const levels = await open(cfsUrl("pgbf", run, time));
    return build({
      ...same(flux, ["u", "v", "temperature", "precipitation", "snow"]),
      clouds: [flux, [":TCDC:entire atmosphere"], (x) => x],
      ...same(levels, ["pressure", "humidity", "storm"]),
      ...upper(levels),
    });
  };

  const frames = [];
  let time = Math.floor((after - 12 * HOUR_MS) / DAY_MS) * DAY_MS + 36 * HOUR_MS;
  try {
    const run = await findRun((r) => gefsUrl(r, r + GEFS_HOURS * HOUR_MS));
    const load = loadGefs(run);
    for (; time <= run + GEFS_HOURS * HOUR_MS; time += DAY_MS) frames.push({ time, source: "gefs", load });
  } catch (error) {
    console.warn(`GEFS пропущено: ${error.message}`);
  }
  try {
    const end = Math.floor(Date.now() / DAY_MS) * DAY_MS + LAST_DAY * DAY_MS + 12 * HOUR_MS;
    const run = await findRun((r) => cfsUrl("flxf", r, end));
    const load = loadCfs(run);
    for (; time <= end; time += DAY_MS) frames.push({ time, source: "cfs", load });
  } catch (error) {
    console.warn(`CFS пропущено: ${error.message}`);
  }
  return frames;
};
