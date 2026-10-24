const FEEDS = {
  "phys-org": "https://phys.org/rss-feed/biology-news/animals-news/",
  "science-daily": "https://www.sciencedaily.com/rss/top/environment.xml",
  nature: "https://www.nature.com/nature.rss",
  mongabay: "https://news.mongabay.com/feed/",
  "guardian-environment": "https://www.theguardian.com/environment/rss",
};
const MAX_ITEMS_PER_FEED = 10;

module.exports = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    return response.end ? response.end() : response.status(204).end();
  }

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, OPTIONS");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const source = request.query?.source;
  const rawUrl = request.query?.url;
  const feedUrl =
    typeof source === "string"
      ? FEEDS[source] || (source.startsWith("http://") || source.startsWith("https://") ? source : null)
      : typeof rawUrl === "string" && (rawUrl.startsWith("http://") || rawUrl.startsWith("https://"))
        ? rawUrl
        : null;

  if (!feedUrl) {
    return response.status(400).json({ error: "Unknown RSS source" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const feedRequestUrl = `https://www.toptal.com/developers/feed2json/convert?url=${encodeURIComponent(feedUrl)}`;
    const feedResponse = await fetch(feedRequestUrl, {
      headers: { Accept: "application/json" },
      redirect: "error",
      signal: controller.signal,
    });

    if (!feedResponse.ok) {
      return response.status(502).json({ error: "RSS source is temporarily unavailable" });
    }

    const body = await feedResponse.text();
    if (!body.trim() || body.length > 2 * 1024 * 1024) {
      return response.status(502).json({ error: "RSS source returned an invalid feed" });
    }

    let feed;
    try {
      feed = JSON.parse(body);
    } catch {
      return response.status(502).json({ error: "RSS converter returned an invalid response" });
    }
    if (!Array.isArray(feed.items)) {
      return response.status(502).json({ error: "RSS converter returned an invalid feed" });
    }

    feed.items = feed.items.slice(0, MAX_ITEMS_PER_FEED);

    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.setHeader(
      "Cache-Control",
      "public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600",
    );
    return response.status(200).json(feed);
  } catch {
    return response.status(502).json({ error: "RSS source is temporarily unavailable" });
  } finally {
    clearTimeout(timeout);
  }
};
