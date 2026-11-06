// Cloudflare Pages Function: /api/frame-check
//
// Параметри:
//   ?url=<адреса>   сторінка, яку користувач хоче додати як власний фрейм кліматичної карти
//
// Браузер не бачить заголовків чужого сайту (CORS), тому перевіряємо тут:
// X-Frame-Options і CSP frame-ancestors. Відповідь: { embeddable: true | false | null, reason }
// null — визначити не вдалося (сайт недоступний тощо), клієнт тоді дозволяє додати фрейм.

const FETCH_TIMEOUT_MS = 8000;
const MAX_REDIRECTS = 3;
const USER_AGENT = "Mozilla/5.0 (compatible; StuxiaFrameCheck/1.0)";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data, status = 200, extraHeaders = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });

class CheckError extends Error {
  constructor(message, status = 502) {
    super(message);
    this.status = status;
  }
}

// ───────────── Захист від SSRF: лише публічні http(s)-адреси ─────────────

const assertPublicUrl = (rawUrl) => {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new CheckError("Invalid URL", 400);
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new CheckError("Only http(s) URLs are allowed", 400);
  }
  if (url.username || url.password) {
    throw new CheckError("Credentials in URL are not allowed", 400);
  }
  if (url.port && url.port !== "80" && url.port !== "443") {
    throw new CheckError("Custom ports are not allowed", 400);
  }
  const host = url.hostname.toLowerCase();
  const isIpLiteral = host.includes(":") || /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
  if (
    isIpLiteral ||
    host === "localhost" ||
    !host.includes(".") ||
    host.endsWith(".local") ||
    host.endsWith(".internal")
  ) {
    throw new CheckError("This host is not allowed", 400);
  }
  return url;
};

// Редіректи проходимо вручну, щоб перевіряти кожну адресу; тіло сторінки не читаємо
const fetchFinalHeaders = async (rawUrl) => {
  let current = assertPublicUrl(rawUrl);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      const response = await fetch(current.toString(), {
        headers: { Accept: "text/html,*/*", "User-Agent": USER_AGENT },
        redirect: "manual",
        signal: controller.signal,
      });
      response.body?.cancel();
      if (response.status >= 300 && response.status < 400) {
        const location = response.headers.get("location");
        if (!location) throw new CheckError("Redirect without location");
        current = assertPublicUrl(new URL(location, current).toString());
        continue;
      }
      return { headers: response.headers, status: response.status };
    }
    throw new CheckError("Too many redirects");
  } finally {
    clearTimeout(timeout);
  }
};

// ───────────── Розбір заголовків ─────────────

// Чи пускає список джерел frame-ancestors наш сайт (pageOrigin)
const ancestorsAllow = (sources, pageOrigin) => {
  const page = new URL(pageOrigin);
  return sources.some((src) => {
    const s = src.toLowerCase();
    if (s === "*") return true;
    if (s === `${page.protocol}`) return true; // напр. "https:"
    if (s === "'none'" || s === "'self'") return false;
    // джерело без схеми або зі схемою, можливо з *.піддоменом
    const m = s.match(/^(?:([a-z][a-z0-9+.-]*):\/\/)?(\*\.)?([^/:]+)(?::(\d+|\*))?/);
    if (!m) return false;
    const [, scheme, wildcard, host] = m;
    if (scheme && `${scheme}:` !== page.protocol) return false;
    if (wildcard) return page.hostname.endsWith(`.${host}`);
    return page.hostname === host;
  });
};

const analyzeHeaders = (headers, pageOrigin) => {
  // CSP frame-ancestors у сучасних браузерах має пріоритет над X-Frame-Options
  const csp = headers.get("content-security-policy");
  if (csp) {
    const directive = csp
      .split(/[;,]/)
      .map((d) => d.trim())
      .find((d) => d.toLowerCase().startsWith("frame-ancestors"));
    if (directive) {
      const sources = directive.split(/\s+/).slice(1);
      return ancestorsAllow(sources, pageOrigin)
        ? { embeddable: true, reason: "csp-allows" }
        : { embeddable: false, reason: "csp-frame-ancestors" };
    }
  }

  const xfo = (headers.get("x-frame-options") || "").trim().toLowerCase();
  if (xfo === "deny" || xfo === "sameorigin" || xfo.startsWith("allow-from")) {
    return { embeddable: false, reason: "x-frame-options" };
  }
  return { embeddable: true, reason: "no-protection" };
};

export async function onRequest({ request, waitUntil }) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (request.method !== "GET") {
    return json({ error: "Method not allowed" }, 405, { Allow: "GET, OPTIONS" });
  }

  const requestUrl = new URL(request.url);
  const rawUrl = requestUrl.searchParams.get("url");
  if (!rawUrl) return json({ error: "Missing url" }, 400);

  // Перевіряємо від імені сайту, на якому відкрито карту
  const pageOrigin = request.headers.get("origin") || requestUrl.origin;

  const cache = typeof caches !== "undefined" ? caches.default : null;
  const cacheKey = new Request(`${requestUrl.origin}/api/frame-check?url=${encodeURIComponent(rawUrl)}&o=${encodeURIComponent(pageOrigin)}`);
  if (cache) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
  }

  try {
    const { headers, status } = await fetchFinalHeaders(rawUrl);
    const payload = status >= 400
      ? { embeddable: null, reason: `http-${status}` }
      : analyzeHeaders(headers, pageOrigin);
    const result = json(payload, 200, { "Cache-Control": "public, max-age=3600, s-maxage=3600" });
    if (cache && waitUntil) waitUntil(cache.put(cacheKey, result.clone()));
    return result;
  } catch (err) {
    if (err instanceof CheckError && err.status === 400) {
      return json({ error: err.message }, 400);
    }
    return json({ embeddable: null, reason: "unreachable" });
  }
}
