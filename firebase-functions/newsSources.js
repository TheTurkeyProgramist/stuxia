// Вбудовані стрічки новин — ЄДИНИЙ список для всього проєкту:
//   • сайт (src/components/News/News.jsx),
//   • Cloudflare-проксі (functions/api/news-feed.js, ?source=<id>),
//   • Firebase-функції (набір новин і push-сповіщення).
// Файл лежить тут, бо на сервер Firebase завантажується лише папка firebase-functions,
// а сайт і Cloudflare можуть імпортувати його звідси.
// Додали стрічку тут → вона є всюди (після деплою Firebase і викладення сайту).

export const NEWS_SOURCES = [
  {
    id: "phys-org",
    url: "https://phys.org/rss-feed/biology-news/animals-news/",
    name: "Phys.org",
    home: "https://phys.org",
  },
  {
    id: "science-daily",
    url: "https://www.sciencedaily.com/rss/top/environment.xml",
    name: "ScienceDaily",
    home: "https://www.sciencedaily.com",
  },
  {
    id: "nature",
    url: "https://www.nature.com/nature.rss",
    name: "Nature",
    home: "https://www.nature.com",
  },
  {
    id: "mongabay",
    url: "https://news.mongabay.com/feed/",
    name: "Mongabay",
    home: "https://news.mongabay.com",
    unblockable: true,
  },
  {
    id: "guardian-environment",
    url: "https://www.theguardian.com/environment/rss",
    name: "The Guardian Environment",
    home: "https://www.theguardian.com/environment",
    unblockable: true,
  },
  {
    // Стара адреса earthobservatory.nasa.gov/feeds/… редіректить сюди
    id: "nasa-earth-observatory",
    url: "https://science.nasa.gov/feed/?science_org=19791%2C22453",
    name: "NASA Earth Observatory",
    home: "https://science.nasa.gov/earth/earth-observatory/",
  },
  {
    id: "bbc-science-environment",
    url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    name: "BBC Science & Environment",
    home: "https://www.bbc.com/news/science_and_environment",
  },
  {
    id: "new-scientist-environment",
    url: "https://www.newscientist.com/subject/environment/feed/",
    name: "New Scientist",
    home: "https://www.newscientist.com/subject/environment/",
  },
  {
    id: "carbon-brief",
    url: "https://www.carbonbrief.org/feed/",
    name: "Carbon Brief",
    home: "https://www.carbonbrief.org",
  },
  {
    id: "grist",
    url: "https://grist.org/feed/",
    name: "Grist",
    home: "https://grist.org",
  },
];

// Службовий початок описів Nature: «Nature, Published online: 11 November 2026; doi:10.1038/…»
const PUBLISHED_PREFIX = /^[^,;]{1,60},\s*Published online:\s*[^;]{1,40};\s*doi:\s*\S+\s*/i;

/** Опис без службового тексту стрічок (до перекладу). */
export const cleanNewsDescription = (text) =>
  String(text || "").replace(PUBLISHED_PREFIX, "").trim();

// Картка показує 2 рядки опису (~110 символів українською, переклад на ~15% довший),
// тож довше перекладати нема сенсу. Так вкладаємося в 500 тис. символів/міс
// безкоштовного Google Cloud Translation (~170 символів на новину × ~75 новин на добу).
export const NEWS_DESC_TRANSLATE_MAX = 100;

/** Початок опису для перекладу — до max символів, по межі слова. */
export const descriptionForTranslation = (text, max = NEWS_DESC_TRANSLATE_MAX) => {
  const s = String(text || "").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:–—-]+$/, "");
};
