import { useState } from "react";
import styled from "styled-components";

// Логотипи джерел новин.
// Логотип тягнемо з кількох місць по черзі, щоб плитка ніколи не лишалась «голою»:
//   1) apple-touch-icon самого сайту (велика чітка іконка),
//   2) Google favicon (128px),
//   3) DuckDuckGo favicon,
//   4) монограма в кольорі бренду — показується одразу і лишається, якщо все інше не вдалось.
// Яке джерело спрацювало, запам'ятовуємо в localStorage — наступного разу без зайвих запитів.

// Відомі бренди: домен для логотипа + фірмовий колір
const BRANDS = {
  "bbc.com": { color: "#bb1919" },
  "cnn.com": { color: "#cc0000" },
  "nytimes.com": { color: "#121212" },
  "theguardian.com": { color: "#052962" },
  "aljazeera.com": { color: "#fa9000" },
  "foxnews.com": { color: "#003366" },
  "nbcnews.com": { color: "#0089d0" },
  "abcnews.go.com": { color: "#1a1a1a" },
  "cbsnews.com": { color: "#1a1a1a" },
  "news.sky.com": { color: "#c8102e" },
  "dw.com": { color: "#05b2fc" },
  "france24.com": { color: "#00a3e0" },
  "euronews.com": { color: "#003399" },
  "thehill.com": { color: "#1c3f6e" },
  "wired.com": { color: "#121212" },
  "techcrunch.com": { color: "#0a9e01" },
  "theverge.com": { color: "#5200ff" },
  "arstechnica.com": { color: "#ff4e00" },
  "nasa.gov": { color: "#0b3d91" },
  "pravda.com.ua": { color: "#b5121b" },
  "ukrinform.ua": { color: "#0057b7" },
  "radiosvoboda.org": { color: "#1330bf" },
  "youtube.com": { color: "#ff0000" },
  "t.me": { color: "#229ed9" },
  "bsky.app": { color: "#1185fe" },
  "phys.org": { color: "#1f5c99" },
  "sciencedaily.com": { color: "#004276" },
  "nature.com": { color: "#c80000" },
  "mongabay.com": { color: "#3b7a1e" },
};

// RSS-хости, які віддають чужий або порожній favicon, — підміняємо на головний сайт
const HOST_ALIASES = {
  "bbci.co.uk": "bbc.com",
  "skynews.com": "news.sky.com",
  "science.nasa.gov": "nasa.gov",
  "news.mongabay.com": "mongabay.com",
  "telegram.org": "t.me",
  "youtu.be": "youtube.com",
};

const STRIP_SUBDOMAIN = /^(www\d?|feeds?|rss|moxie|m|api)\./i;

export function getSourceDomain(...urls) {
  for (const raw of urls) {
    if (!raw) continue;
    try {
      let host = new URL(String(raw).startsWith("http") ? raw : `https://${raw}`).hostname.toLowerCase();
      while (STRIP_SUBDOMAIN.test(host)) host = host.replace(STRIP_SUBDOMAIN, "");
      host = HOST_ALIASES[host] || host;
      // Піддомени відомих брендів (edition.cnn.com → cnn.com)
      const known = Object.keys(BRANDS).find((d) => host === d || host.endsWith(`.${d}`));
      return known || host;
    } catch {
      /* наступна адреса */
    }
  }
  return "";
}

// Запасний колір для невідомих сайтів — сталий для кожного домену
const hashColor = (text) => {
  let h = 0;
  for (const ch of String(text)) h = (h * 31 + ch.codePointAt(0)) % 360;
  return `hsl(${h}, 55%, 42%)`;
};

export function getSourceBrand({ name = "", url = "", home = "" } = {}) {
  const domain = getSourceDomain(home, url);
  return {
    domain,
    color: BRANDS[domain]?.color || hashColor(domain || name),
  };
}

const getInitials = (name, domain) => {
  const words = String(name || domain || "?")
    .replace(/^the\s+/i, "")
    .split(/[\s\-–—.]+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w));
  const letters = words.length > 1 ? words[0][0] + words[1][0] : (words[0] || "?").slice(0, 2);
  return letters.toUpperCase();
};

const logoCandidates = (domain) =>
  domain
    ? [
        `https://${domain}/apple-touch-icon.png`,
        `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
        `https://icons.duckduckgo.com/ip3/${encodeURIComponent(domain)}.ico`,
      ]
    : [];

const CACHE_KEY = "stykhiia_source_logo_v1";
const NONE = -1;
// Якщо логотип не знайшовся зовсім — пробуємо знову через 3 дні (сайт міг його додати)
const NONE_RETRY_MS = 3 * 24 * 60 * 60 * 1000;
let memoryCache = null;

const readCache = () => {
  if (memoryCache) return memoryCache;
  try {
    memoryCache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}") || {};
  } catch {
    memoryCache = {};
  }
  return memoryCache;
};

// Значення в кеші: номер джерела, що спрацювало, або { none: час останньої невдачі }
const getCachedStage = (domain) => {
  const value = readCache()[domain];
  if (Number.isInteger(value)) return value;
  if (value?.none && Date.now() - value.none < NONE_RETRY_MS) return NONE;
  return 0;
};

const writeCache = (domain, stage) => {
  if (!domain) return;
  // Без мережі всі джерела «падають» — це не привід запам'ятовувати невдачу
  if (stage === NONE && typeof navigator !== "undefined" && navigator.onLine === false) return;
  const cache = readCache();
  if (cache[domain] === stage) return;
  cache[domain] = stage === NONE ? { none: Date.now() } : stage;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    /* приватний режим — лише в пам'яті */
  }
};

const LogoBox = styled.span`
  position: relative;
  flex-shrink: 0;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: ${(p) => Math.round(p.$size * 0.24)}px;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$color};
  color: #ffffff;
  font-family: var(--font-family, system-ui, sans-serif);
  font-size: ${(p) => Math.round(p.$size * 0.38)}px;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  user-select: none;

  & > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: ${(p) => Math.round(p.$size * 0.12)}px;
    box-sizing: border-box;
    background: #ffffff;
    opacity: ${(p) => (p.$loaded ? 1 : 0)};
    transition: opacity 0.25s ease;
  }
  /* Велика іконка сайту (apple-touch-icon) уже має свій фон — на весь квадрат */
  & > img[data-full] {
    padding: 0;
    object-fit: cover;
  }
`;

export default function SourceLogo({ name, url, home, size = 36, className }) {
  const { domain, color } = getSourceBrand({ name, url, home });
  const candidates = logoCandidates(domain);
  const initialStage = () => getCachedStage(domain);
  const [state, setState] = useState(() => ({ domain, stage: initialStage(), loaded: false }));

  // Інше джерело в тій самій плитці — починаємо пошук логотипа спочатку
  let { stage, loaded } = state;
  if (state.domain !== domain) {
    stage = initialStage();
    loaded = false;
    setState({ domain, stage, loaded });
  }

  const src = stage !== NONE ? candidates[stage] : null;

  const fail = () => {
    const next = stage + 1 < candidates.length ? stage + 1 : NONE;
    if (next === NONE) writeCache(domain, NONE);
    setState({ domain, stage: next, loaded: false });
  };

  const handleLoad = (e) => {
    // Заглушки сервісів favicon — крихітні (16px), такі не показуємо
    if (e.currentTarget.naturalWidth < 24) {
      fail();
      return;
    }
    writeCache(domain, stage);
    setState({ domain, stage, loaded: true });
  };

  return (
    <LogoBox $size={size} $color={color} $loaded={loaded} className={className} aria-hidden="true">
      {getInitials(name, domain)}
      {src && (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          data-full={stage === 0 ? "" : undefined}
          onLoad={handleLoad}
          onError={fail}
        />
      )}
    </LogoBox>
  );
}
