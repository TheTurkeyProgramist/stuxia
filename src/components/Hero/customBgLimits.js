// Ліміти власних фонів (завантажені з пристрою та додані з Wikimedia Commons)

export const MAX_CUSTOM_BGS = 30;
export const MAX_IMAGE_BYTES = 200 * 1024; // картинку стискаємо до цього розміру
export const MAX_VIDEO_BYTES = 20 * 1024 * 1024;
export const MAX_VIDEO_SECONDS = 2 * 60;

export const CUSTOM_BG_LIMITS_TEXT =
  `до ${MAX_CUSTOM_BGS} фонів · картинки стискаються до 200 КБ · відео до 20 МБ і 2 хв`;

export const customBgLimitMessage = () =>
  `Можна мати не більше ${MAX_CUSTOM_BGS} власних фонів. Видаліть якийсь у «Бібліотеці», щоб додати новий.`;

const loadImage = (blob) =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image decode failed"));
    };
    img.src = url;
  });

const canvasToJpeg = (canvas, quality) =>
  new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", quality));

/**
 * Стискає картинку в JPEG не більше MAX_IMAGE_BYTES: спершу знижує якість,
 * потім — розмір. Невеликі картинки не збільшує.
 */
export const compressImageToLimit = async (blob, { maxWidth = 1920 } = {}) => {
  const img = await loadImage(blob);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  let width = Math.min(maxWidth, img.naturalWidth || img.width);
  let best = null;

  while (width >= 480) {
    const scale = width / (img.naturalWidth || img.width);
    canvas.width = Math.round(width);
    canvas.height = Math.round((img.naturalHeight || img.height) * scale);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    for (const quality of [0.82, 0.72, 0.62, 0.52]) {
      const out = await canvasToJpeg(canvas, quality);
      if (!out) continue;
      best = out;
      if (out.size <= MAX_IMAGE_BYTES) return out;
    }
    width *= 0.8;
  }
  // Дуже деталізована картинка: віддаємо найменший варіант, що вийшов
  if (best && best.size <= MAX_IMAGE_BYTES * 1.5) return best;
  throw new Error("Image too large after compression");
};

/** Тривалість відео в секундах (NaN, якщо браузер не зміг його прочитати) */
export const getVideoDuration = (blob) =>
  new Promise((resolve) => {
    const url = URL.createObjectURL(blob);
    const video = document.createElement("video");
    let done = false;
    const finish = (value) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      URL.revokeObjectURL(url);
      video.removeAttribute("src");
      video.load();
      resolve(value);
    };
    const timer = setTimeout(() => finish(NaN), 10_000);
    video.preload = "metadata";
    video.muted = true;
    video.onloadedmetadata = () => finish(video.duration);
    video.onerror = () => finish(NaN);
    video.src = url;
  });
