// Змінна іконка вкладки: той самий індик, лише з кольорокорекцією під пору року й ніч.
// Іконку встановленого застосунку (робочий стіл, екран телефону) браузер так міняти не дає.
import { getSeason } from "./sceneSeasons";

const FILTERS = {
  spring: "saturate(1.15) hue-rotate(-18deg)",
  summer: "none",
  autumn: "sepia(0.45) saturate(1.8) hue-rotate(-18deg)",
  winter: "saturate(0.75) brightness(1.15) hue-rotate(14deg)",
  night: "brightness(0.8) saturate(0.9) hue-rotate(40deg)",
};

export const getFaviconVariant = (date = new Date()) => {
  const hour = date.getHours();
  return hour >= 22 || hour < 6 ? "night" : getSeason(date);
};

const SIZE = 64;
const CHECK_EVERY_MS = 15 * 60 * 1000;

export const startDynamicFavicon = () => {
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  // Де canvas не вміє filter (Safari) — лишається звичайна іконка
  if (!ctx || typeof ctx.filter !== "string") return;

  const image = new Image();
  let current = "";
  const apply = () => {
    const variant = getFaviconVariant();
    if (variant === current) return;
    current = variant;
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.filter = FILTERS[variant];
    ctx.drawImage(image, 0, 0, SIZE, SIZE);

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = canvas.toDataURL("image/png");
    // Прибираємо статичні <link rel="icon">, інакше браузер може лишитися на них
    document.querySelectorAll('link[rel="icon"]').forEach((el) => el.remove());
    document.head.appendChild(link);
  };

  image.onload = () => {
    apply();
    setInterval(apply, CHECK_EVERY_MS);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) apply();
    });
  };
  image.src = "/icon-192.png";
};
