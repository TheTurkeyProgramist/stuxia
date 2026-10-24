// Cloudflare Pages Function: /api/news-feed
//
// Параметри:
//   ?source=<id вбудованої стрічки>
//   ?url=<адреса>            RSS/Atom, YouTube, Telegram, Mastodon, Bluesky
//   ?resolve=youtube&url=..  повертає { channelId } для @handle / посилання на канал
//
// Усе повертається у форматі JSON Feed (items[].url/title/summary/content_html/date_published/image),
// тому клієнтський parseJsonFeed працює без змін.

const FEEDS = {
  "phys-org": "https://phys.org/rss-feed/biology-news/animals-news/",
  "science-daily": "https://www.sciencedaily.com/rss/top/environment.xml",
  nature: "https://www.nature.com/nature.rss",
  mongabay: "https://news.mongabay.com/feed/",
  "guardian-environment": "https://www.theguardian.com/environment/rss",
};
const MAX_ITEMS_PER_FEED = 10;
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 10000;
const MAX_REDIRECTS = 3;
const USER_AGENT = "NewsFeedReader/1.0 (+RSS reader)";

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

class FeedError extends Error {
  constructor(message, status = 502) {
    super(message);
    this.status = status;
  }
}

const isHttpUrl = (value) =>
  typeof value === "string" &&
  (value.startsWith("http://") || value.startsWith("https://"));

// ───────────── Безпечне завантаження чужих адрес (захист від SSRF) ─────────────

const assertPublicUrl = (rawUrl) => {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new FeedError("Invalid URL", 400);
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new FeedError("Only http(s) URLs are allowed", 400);
  }
  if (url.username || url.password) {
    throw new FeedError("Credentials in URL are not allowed", 400);
  }
  if (url.port && url.port !== "80" && url.port !== "443") {
    throw new FeedError("Custom ports are not allowed", 400);
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
    throw new FeedError("This host is not allowed", 400);
  }
  return url;
};

const readLimitedText = async (response) => {
  const declared = Number(response.headers.get("content-length") || 0);
  if (declared > MAX_BODY_BYTES) throw new FeedError("Feed is too large");
  if (!response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let text = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new FeedError("Feed is too large");
    }
    text += decoder.decode(value, { stream: true });
  }
  return text + decoder.decode();
};

// Редіректи проходимо вручну, щоб перевіряти кожну адресу
const safeFetchText = async (rawUrl, { accept = "*/*", skipHostCheck = false } = {}) => {
  let current = skipHostCheck ? new URL(rawUrl) : assertPublicUrl(rawUrl);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      const response = await fetch(current.toString(), {
        headers: {
          Accept: accept,
          "Accept-Language": "en,uk;q=0.8",
          "User-Agent": USER_AGENT,
        },
        redirect: "manual",
        signal: controller.signal,
      });
      if (response.status >= 300 && response.status < 400) {
        const location = response.headers.get("location");
        if (!location) throw new FeedError("Redirect without location");
        const next = new URL(location, current);
        current = skipHostCheck ? next : assertPublicUrl(next.toString());
        continue;
      }
      if (!response.ok) throw new FeedError(`Source responded with HTTP ${response.status}`);
      return await readLimitedText(response);
    }
    throw new FeedError("Too many redirects");
  } finally {
    clearTimeout(timeout);
  }
};

// ───────────── Допоміжне для тексту / XML ─────────────

const NAMED_ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

const decodeEntities = (str) =>
  str.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code) => {
    if (code[0] === "#") {
      const num = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      try {
        return String.fromCodePoint(num);
      } catch {
        return match;
      }
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });

// Вміст тегу: CDATA лишаємо як є (там сирий HTML), інакше декодуємо сутності
const textOf = (raw) => {
  if (!raw) return "";
  if (raw.includes("<![CDATA[")) {
    return raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
  }
  return decodeEntities(raw).trim();
};

const stripTags = (html) => decodeEntities((html || "").replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]*>/g, "")).trim();

const getTag = (xml, tag) => {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "i"));
  return m ? textOf(m[1]) : "";
};

const getAttr = (tagSource, name) => {
  const m = tagSource.match(new RegExp(`\\s${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return m ? decodeEntities(m[1]) : "";
};

const getAllOpenTags = (xml, tag) =>
  xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?/?>`, "gi")) || [];

const toIsoDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
};

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)(\?|#|$)/i;

const pickImage = (itemXml, htmlFallback) => {
  for (const tag of getAllOpenTags(itemXml, "media:content")) {
    const url = getAttr(tag, "url");
    const type = getAttr(tag, "type");
    const medium = getAttr(tag, "medium");
    if (isHttpUrl(url) && (medium === "image" || type.startsWith("image/") || IMAGE_EXT.test(url))) {
      return url;
    }
  }
  for (const tag of getAllOpenTags(itemXml, "media:thumbnail")) {
    const url = getAttr(tag, "url");
    if (isHttpUrl(url)) return url;
  }
  for (const tag of getAllOpenTags(itemXml, "enclosure")) {
    const url = getAttr(tag, "url");
    const type = getAttr(tag, "type");
    if (isHttpUrl(url) && (type.startsWith("image/") || IMAGE_EXT.test(url))) return url;
  }
  for (const tag of getAllOpenTags(itemXml, "itunes:image")) {
    const url = getAttr(tag, "href");
    if (isHttpUrl(url)) return url;
  }
  const img = (htmlFallback || "").match(/<img[^>]+src=["']([^"']+)["']/i);
  if (img && isHttpUrl(img[1])) return decodeEntities(img[1]);
  return "";
};

// ───────────── RSS / Atom → JSON Feed ─────────────

const parseRssOrAtom = (xml) => {
  const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) || [];
  const items = [];
  for (const block of blocks) {

    let url = getTag(block, "link");
    if (!isHttpUrl(url)) {
      const links = getAllOpenTags(block, "link");
      const alternate =
        links.find((tag) => getAttr(tag, "rel") === "alternate") ||
        links.find((tag) => !getAttr(tag, "rel")) ||
        links[0];
      url = alternate ? getAttr(alternate, "href") : "";
    }
    if (!isHttpUrl(url)) {
      const guid = getTag(block, "guid");
      if (isHttpUrl(guid)) url = guid;
    }
    if (!isHttpUrl(url)) continue;

    const description = getTag(block, "description") || getTag(block, "summary");
    const content = getTag(block, "content:encoded") || getTag(block, "content");
    // У Mastodon та деяких інших стрічок немає <title> — беремо початок тексту
    const title =
      stripTags(getTag(block, "title")) ||
      stripTags(description || content).replace(/\s+/g, " ").slice(0, 100);
    if (!title) continue;
    const date =
      getTag(block, "pubDate") ||
      getTag(block, "published") ||
      getTag(block, "updated") ||
      getTag(block, "dc:date");

    items.push({
      id: url,
      url,
      title,
      summary: description || content,
      content_html: content || description,
      date_published: toIsoDate(date),
      image: pickImage(block, content || description),
    });
    if (items.length >= MAX_ITEMS_PER_FEED) break;
  }
  return items;
};

// Запасний шлях — зовнішній конвертер (без зображень), якщо прямий розбір не дав записів
const fetchViaConverter = async (feedUrl) => {
  const body = await safeFetchText(
    `https://www.toptal.com/developers/feed2json/convert?url=${encodeURIComponent(feedUrl)}`,
    { accept: "application/json", skipHostCheck: true },
  );
  const feed = JSON.parse(body);
  if (!Array.isArray(feed.items)) throw new FeedError("RSS converter returned an invalid feed");
  return feed.items.slice(0, MAX_ITEMS_PER_FEED);
};

const loadGenericFeed = async (feedUrl, options = {}) => {
  try {
    const xml = await safeFetchText(feedUrl, {
      accept: "application/rss+xml, application/atom+xml, application/xml, text/xml, */*",
      ...options,
    });
    const items = parseRssOrAtom(xml);
    if (items.length > 0) return items;
  } catch (err) {
    if (err instanceof FeedError && err.status === 400) throw err;
  }
  return fetchViaConverter(feedUrl);
};

// ───────────── YouTube ─────────────

const isYoutubeHost = (host) =>
  host === "youtu.be" || host === "youtube.com" || host.endsWith(".youtube.com");

const resolveYoutubeChannelId = async (rawUrl) => {
  const direct = rawUrl.match(/(UC[a-zA-Z0-9_-]{22})/);
  if (direct) return direct[1];
  const url = assertPublicUrl(rawUrl);
  if (!isYoutubeHost(url.hostname.toLowerCase())) throw new FeedError("Not a YouTube URL", 400);
  const html = await safeFetchText(url.toString(), { accept: "text/html" });
  const match =
    html.match(/"channelId":"(UC[a-zA-Z0-9_-]{22})"/) ||
    html.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/) ||
    html.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/);
  if (!match) throw new FeedError("YouTube channel was not found", 404);
  return match[1];
};

// ───────────── Telegram (публічні канали) ─────────────

const loadTelegram = async (url) => {
  const parts = url.pathname.split("/").filter(Boolean);
  const name = parts[0] === "s" ? parts[1] : parts[0];
  if (!name || name.startsWith("+") || name === "joinchat") {
    throw new FeedError("Only public Telegram channels are supported", 400);
  }
  if (!/^[a-zA-Z0-9_]{3,64}$/.test(name)) throw new FeedError("Invalid Telegram channel", 400);

  const html = await safeFetchText(`https://t.me/s/${name}`, { accept: "text/html" });
  const channelTitle = stripTags(
    (html.match(/tgme_channel_info_header_title[^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>/i) || [])[1] || name,
  );
  const avatar = (html.match(/tgme_channel_info_header[\s\S]*?<img[^>]+src=["']([^"']+)["']/i) || [])[1] || "";

  const messages = html.split(/<div class="tgme_widget_message_wrap/i).slice(1);
  const items = [];
  for (const msg of messages) {
    const post = (msg.match(/data-post=["']([^"']+)["']/i) || [])[1];
    if (!post) continue;
    const textHtml = (msg.match(/tgme_widget_message_text[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || "";
    const text = stripTags(textHtml);
    const photoStyle = (msg.match(/tgme_widget_message_photo_wrap[^>]*style=["']([^"']+)["']/i) || [])[1] || "";
    const photo = (photoStyle.match(/url\(['"]?([^'")]+)['"]?\)/) || [])[1] || "";
    const date = (msg.match(/<time[^>]+datetime=["']([^"']+)["']/i) || [])[1] || "";
    items.push({
      id: `https://t.me/${post}`,
      url: `https://t.me/${post}`,
      title: text ? text.slice(0, 100) : `${channelTitle}: новий допис`,
      summary: textHtml,
      content_html: textHtml,
      date_published: toIsoDate(date),
      image: photo || avatar,
    });
  }
  if (items.length === 0) throw new FeedError("No public posts found", 404);
  return items.reverse().slice(0, MAX_ITEMS_PER_FEED);
};

// ───────────── Bluesky (публічний API без ключа) ─────────────

const loadBluesky = async (url) => {
  const parts = url.pathname.split("/").filter(Boolean);
  const handle = parts[0] === "profile" ? parts[1] : null;
  if (!handle || !/^[a-zA-Z0-9.:_-]{3,253}$/.test(handle)) {
    throw new FeedError("Invalid Bluesky profile", 400);
  }
  const body = await safeFetchText(
    `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${encodeURIComponent(handle)}&limit=30&filter=posts_no_replies`,
    { accept: "application/json", skipHostCheck: true },
  );
  const data = JSON.parse(body);
  const items = [];
  for (const entry of data.feed || []) {
    if (entry.reason) continue; // пропускаємо репости
    const post = entry.post;
    if (!post?.uri) continue;
    const text = post.record?.text || "";
    const rkey = post.uri.split("/").pop();
    const postUrl = `https://bsky.app/profile/${post.author?.handle || handle}/post/${rkey}`;
    const embed = post.embed || {};
    const image =
      embed.images?.[0]?.fullsize ||
      embed.images?.[0]?.thumb ||
      embed.external?.thumb ||
      embed.media?.images?.[0]?.fullsize ||
      post.author?.avatar ||
      "";
    items.push({
      id: postUrl,
      url: postUrl,
      title: text ? text.replace(/\s+/g, " ").slice(0, 100) : "Допис у Bluesky",
      summary: text,
      content_html: text,
      date_published: toIsoDate(post.record?.createdAt || post.indexedAt),
      image,
    });
    if (items.length >= MAX_ITEMS_PER_FEED) break;
  }
  if (items.length === 0) throw new FeedError("No Bluesky posts found", 404);
  return items;
};

// ───────────── Вибір обробника за адресою ─────────────

const loadItems = async (feedUrl) => {
  const url = assertPublicUrl(feedUrl);
  const host = url.hostname.toLowerCase().replace(/^www\./, "");

  if (host === "t.me" || host === "telegram.me") return loadTelegram(url);
  if (host === "bsky.app") return loadBluesky(url);

  // Mastodon: https://інстанс/@user → https://інстанс/@user.rss
  if (/^\/@[^/]+\/?$/.test(url.pathname)) {
    const mastodonFeed = `${url.origin}${url.pathname.replace(/\/$/, "")}.rss`;
    return loadGenericFeed(mastodonFeed);
  }

  return loadGenericFeed(url.toString());
};

export async function onRequest({ request, waitUntil }) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (request.method !== "GET") {
    return json({ error: "Method not allowed" }, 405, { Allow: "GET, OPTIONS" });
  }

  const params = new URL(request.url).searchParams;
  const source = params.get("source");
  const rawUrl = params.get("url");

  // Кеш Cloudflare: ключ — повний URL запиту (з source/url/resolve)
  const cache = typeof caches !== "undefined" ? caches.default : null;
  const cacheKey = new Request(request.url, { method: "GET" });
  if (cache) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
  }

  try {
    let payload;
    let cacheControl = "public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600";

    if (params.get("resolve") === "youtube") {
      if (!isHttpUrl(rawUrl)) return json({ error: "Invalid URL" }, 400);
      payload = { channelId: await resolveYoutubeChannelId(rawUrl) };
      cacheControl = "public, max-age=86400, s-maxage=86400";
    } else {
      const feedUrl = source
        ? FEEDS[source] || (isHttpUrl(source) ? source : null)
        : isHttpUrl(rawUrl)
          ? rawUrl
          : null;
      if (!feedUrl) return json({ error: "Unknown RSS source" }, 400);
      const items = await loadItems(feedUrl);
      payload = { version: "https://jsonfeed.org/version/1.1", items };
    }

    const result = json(payload, 200, { "Cache-Control": cacheControl });
    if (cache && waitUntil) waitUntil(cache.put(cacheKey, result.clone()));
    return result;
  } catch (err) {
    if (err instanceof FeedError) {
      return json({ error: err.message }, err.status);
    }
    return json({ error: "RSS source is temporarily unavailable" }, 502);
  }
}
