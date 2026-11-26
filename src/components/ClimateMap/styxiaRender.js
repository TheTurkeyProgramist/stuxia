// Завантаження кадрів прогнозу й малювання шарів «Карти Стихії»: растр шару та частинки вітру.
import { DATA_VERSION, WIND_RANGE, colorFor, decodeValue, encodeValue } from "./styxiaLayers.js";

export const DATA_URL = "/weather-data";
export const MERCATOR_LIMIT = 85.0511;

// Без кешу браузера: після нового weather:build дані мають оновитися
export const fetchData = async (name, signal) => {
  const res = await fetch(`${DATA_URL}/${name}`, { signal, cache: "no-cache" });
  if (!res.ok) throw new Error(`Немає даних Карти Стихії: ${name}`);
  return res;
};

export const loadMeta = async (signal) => {
  const meta = await (await fetchData("meta.txt", signal)).json();
  if (meta.version !== DATA_VERSION) throw new Error("Дані Карти Стихії застаріли — перезберіть їх");
  return meta;
};

/** Індекс кадру, найближчого до зараз: прогноз починається не з часу запуску моделі, а з сьогодні. */
export const nearestFrame = (meta, now = Date.now()) => {
  const hoursSinceRun = (now - Date.parse(meta.time)) / 3600000;
  let best = 0;
  meta.hours.forEach((hour, i) => {
    if (Math.abs(hour - hoursSinceRun) < Math.abs(meta.hours[best] - hoursSinceRun)) best = i;
  });
  return best;
};

/** RGBA-пікселі одного файлу кадру (три шари в каналах R, G, B). */
export const loadRgba = async (meta, hour, file, signal) => {
  const res = await fetchData(`f${String(hour).padStart(3, "0")}-${file}.png`, signal);
  // Без перетворення кольорів: у пікселях лежать числа, а не картинка
  const bitmap = await createImageBitmap(await res.blob(), {
    colorSpaceConversion: "none",
    premultiplyAlpha: "none",
  });
  const canvas = document.createElement("canvas");
  canvas.width = meta.width;
  canvas.height = meta.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();
  return ctx.getImageData(0, 0, meta.width, meta.height).data;
};

// Із RGBA лишаємо лише потрібне: так кадри займають у пам’яті в 2–4 рази менше
export const windPlanes = (rgba) => {
  const planes = new Uint8Array((rgba.length / 4) * 2);
  for (let i = 0; i < rgba.length / 4; i += 1) {
    planes[i * 2] = rgba[i * 4];
    planes[i * 2 + 1] = rgba[i * 4 + 1];
  }
  return planes;
};

export const channelPlane = (rgba, channel) => {
  const plane = new Uint8Array(rgba.length / 4);
  for (let i = 0; i < plane.length; i += 1) plane[i] = rgba[i * 4 + channel];
  return plane;
};

const decodeWind = (byte) => decodeValue(byte, { range: WIND_RANGE });

/** Швидкість вітру (з u та v), закодована як байт шару `layer`. */
export const speedPlane = (planes, layer) => {
  const plane = new Uint8Array(planes.length / 2);
  for (let i = 0; i < plane.length; i += 1) {
    plane[i] = encodeValue(Math.hypot(decodeWind(planes[i * 2]), decodeWind(planes[i * 2 + 1])), layer);
  }
  return plane;
};

// Вітер (u, v) у точці, білінійна інтерполяція по сітці
const wind = [0, 0];
export const sampleWind = ({ meta, planes }, lon, lat) => {
  const { width, height } = meta;
  const fx = ((((lon + 180) % 360) + 360) % 360) * (width / 360);
  const fy = Math.max(0, Math.min(height - 1.001, (90 - lat) * ((height - 1) / 180)));
  const x0 = Math.floor(fx) % width;
  const x1 = (x0 + 1) % width;
  const y0 = Math.floor(fy);
  const dx = fx - Math.floor(fx);
  const dy = fy - y0;
  for (let c = 0; c < 2; c += 1) {
    const at = (x, y) => planes[(y * width + x) * 2 + c];
    const top = at(x0, y0) * (1 - dx) + at(x1, y0) * dx;
    const bottom = at(x0, y0 + 1) * (1 - dx) + at(x1, y0 + 1) * dx;
    wind[c] = decodeWind(top * (1 - dy) + bottom * dy);
  }
  return wind;
};

/**
 * Картинка шару для MapLibre (blob-адреса). MapLibre розтягує її лінійно в проєкції Меркатора,
 * а сітка GFS рівномірна за широтою — тому перераховуємо рядки.
 */
export const layerBlobUrl = async ({ width, height }, layer, plane) => {
  const size = width;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(width, size);
  const palette = Array.from({ length: 256 }, (_, byte) => colorFor(decodeValue(byte, layer), layer));
  const maxY = Math.log(Math.tan(Math.PI / 4 + (MERCATOR_LIMIT * Math.PI) / 360));
  for (let row = 0; row < size; row += 1) {
    const mercator = maxY * (1 - (2 * (row + 0.5)) / size);
    const lat = (360 / Math.PI) * Math.atan(Math.exp(mercator)) - 90;
    const fy = (90 - lat) * ((height - 1) / 180);
    const y0 = Math.min(height - 2, Math.floor(fy));
    const dy = fy - y0;
    for (let x = 0; x < width; x += 1) {
      const a = plane[y0 * width + x];
      const b = plane[(y0 + 1) * width + x];
      image.data.set(palette[Math.round(a + (b - a) * dy)], (row * width + x) * 4);
    }
  }
  ctx.putImageData(image, 0, 0);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  return URL.createObjectURL(blob);
};

const FRAME_MS = 1000 / 60;

/**
 * Частинки вітру: живуть у географічних координатах, а крок на екрані не залежить від масштабу.
 * Швидкість руху не залежить від FPS: чим рідше кадри, тим більший крок за кадр.
 * options: getWind() → { meta, planes } | null, getFps(), getColor(), onFps(к/с) раз на секунду.
 */
export const startParticles = (map, canvas, { getWind, getFps, getColor, onFps }) => {
  const ctx = canvas.getContext("2d");
  let particles = [];
  let frame = 0;
  let width = 0;
  let height = 0;
  let visible = true;
  let last = 0;
  let counted = 0;
  let windowStart = 0;

  const spawn = (particle = {}) => {
    const point = map.unproject([Math.random() * width, Math.random() * height]);
    particle.lon = point.lng;
    particle.lat = point.lat;
    particle.age = Math.floor(Math.random() * 80);
    return particle;
  };

  const reset = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(3500, Math.round((width * height) / 260));
    particles = Array.from({ length: count }, () => spawn());
  };

  const draw = (now) => {
    frame = requestAnimationFrame(draw);
    const field = getWind();
    if (!visible || map.isMoving() || !width || !field) {
      // Не малюємо — тож і частоту кадрів не міряємо
      counted = 0;
      windowStart = now;
      last = now;
      return;
    }
    const interval = 1000 / getFps();
    // 0,9: rAF вирівнюється по кадру екрана, і суворе порівняння пропускало б кожен другий кадр
    if (now - last < interval * 0.9) return;
    const dt = Math.min(now - last, 100);
    last = now;
    const steps = dt / FRAME_MS;

    // Старі сліди поступово тьмяніють
    ctx.globalCompositeOperation = "destination-in";
    ctx.fillStyle = `rgba(0, 0, 0, ${0.92 ** steps})`;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = getColor();
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    // Градусів за кадр на 1 м/с
    const speed = 0.09 * steps * (360 / (512 * 2 ** map.getZoom()));
    for (const p of particles) {
      const [u, v] = sampleWind(field, p.lon, p.lat);
      const from = map.project([p.lon, p.lat]);
      const cos = Math.max(0.1, Math.cos((p.lat * Math.PI) / 180));
      p.lon += u * speed;
      p.lat += v * speed * cos;
      p.age += steps;
      const to = map.project([p.lon, p.lat]);
      if (p.age > 90 || to.x < 0 || to.y < 0 || to.x > width || to.y > height || Math.abs(p.lat) > 85) {
        spawn(p);
        p.age = 0;
        continue;
      }
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
    }
    ctx.stroke();

    counted += 1;
    if (now - windowStart >= 1000) {
      onFps(Math.round((counted * 1000) / (now - windowStart)));
      counted = 0;
      windowStart = now;
    }
  };

  const clear = () => ctx.clearRect(0, 0, width, height);
  map.on("movestart", clear);
  map.on("moveend", reset);
  map.on("resize", reset);
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  observer.observe(canvas);
  reset();
  frame = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    map.off("movestart", clear);
    map.off("moveend", reset);
    map.off("resize", reset);
  };
};
