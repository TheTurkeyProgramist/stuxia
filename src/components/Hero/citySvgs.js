import { useEffect, useState } from "react";

// Мальки міст (27 SVG, ~30 КБ gzip разом) не лежать у стартовому бандлі:
// кожне місто вантажиться окремим маленьким файлом, лише коли його показують,
// і далі береться з кешу.
const LOADERS = import.meta.glob("./images/timezones/*.svg", {
  query: "?raw",
  import: "default",
});

const cache = new Map();
const pending = new Map();

export const citySvgKey = (slug) => `./images/timezones/${slug}.svg`;

/** Чи є такий мальок міста взагалі. */
export const hasCitySvg = (key) => Boolean(key && LOADERS[key]);

/** Розмітка міста, якщо вже завантажена (інакше undefined). */
export const getCachedCitySvg = (key) => cache.get(key);

/** Завантажує розмітку міста; для невідомого ключа — порожній рядок. */
export const loadCitySvg = (key) => {
  if (cache.has(key)) return Promise.resolve(cache.get(key));
  if (!LOADERS[key]) return Promise.resolve("");
  if (!pending.has(key)) {
    pending.set(
      key,
      LOADERS[key]()
        .then((markup) => {
          cache.set(key, markup);
          return markup;
        })
        .finally(() => pending.delete(key)),
    );
  }
  return pending.get(key);
};

/**
 * Розмітка міста для рендеру: поки файл вантажиться — порожній рядок
 * (небо, сонце й частинки сцени малюються й без нього).
 * key = null — нічого не вантажимо (сцена має власну розмітку).
 */
export const useCitySvg = (key) => {
  const [loaded, setLoaded] = useState(() => ({ key, markup: key ? cache.get(key) ?? "" : "" }));

  useEffect(() => {
    if (!key || cache.has(key)) return undefined;
    let cancelled = false;
    loadCitySvg(key)
      .then((markup) => {
        if (!cancelled) setLoaded({ key, markup });
      })
      .catch((error) => console.warn("Не вдалося завантажити мальок міста:", key, error));
    return () => {
      cancelled = true;
    };
  }, [key]);

  if (!key) return "";
  return cache.get(key) ?? (loaded.key === key ? loaded.markup : "");
};
