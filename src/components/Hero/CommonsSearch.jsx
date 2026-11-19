import { useRef, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { FiCheck, FiFilm, FiImage, FiLoader, FiMaximize2, FiSearch } from "react-icons/fi";
import {
  MAX_CUSTOM_BGS,
  MAX_VIDEO_BYTES,
  MAX_VIDEO_SECONDS,
  compressImageToLimit,
  customBgLimitMessage,
} from "./customBgLimits.js";

import i18n from "../../i18n/i18n.js";
// Пошук нових фонів у Wikimedia Commons: фото, картини або відео.
// API відкрите й не потребує ключа; файли віддаються з CORS, тож вибране
// завантажуємо в браузер (Blob) — фон працює й офлайн.

const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const PER_PAGE = 24;
const FULL_WIDTH = 1920; // стандартний розмір мініатюр Wikimedia — досить для фону
const NO_RESULTS = "no-results";

const TYPES = [
  { value: "photo", get label() { return i18n.t("ui.CommonsSearch.foto"); }, Icon: FiImage },
  { value: "painting", get label() { return i18n.t("ui.CommonsSearch.kartyny"); }, Icon: FiImage },
  { value: "video", get label() { return i18n.t("ui.CommonsSearch.video"); }, Icon: FiFilm },
];

const ORDERS = [
  { value: "relevance", get label() { return i18n.t("ui.CommonsSearch.naikrashchi"); } },
  { value: "create_timestamp_desc", get label() { return i18n.t("ui.CommonsSearch.novi"); } },
];

const SUGGESTIONS = () => ([i18n.t("ui.CommonsSearch.lis"), i18n.t("ui.CommonsSearch.hory"), i18n.t("ui.CommonsSearch.more"), i18n.t("ui.CommonsSearch.kosmos"), i18n.t("ui.CommonsSearch.nichneMisto"), i18n.t("ui.CommonsSearch.osin"), i18n.t("ui.CommonsSearch.zyma"), i18n.t("ui.CommonsSearch.vodospad"), i18n.t("ui.CommonsSearch.pivnichneSiaivo"), i18n.t("ui.CommonsSearch.pustelia"), i18n.t("ui.CommonsSearch.doshch"), i18n.t("ui.CommonsSearch.tuman")]);

// Commons не має «безпечного пошуку», тож відсіюємо очевидне за назвою файлу
const UNSAFE_WORDS = ["nude", "naked", "nudity", "erotic", "nsfw", "porn", "sex", "topless", "genitals"];
const UNSAFE_RE = new RegExp(`\\b(${UNSAFE_WORDS.join("|")})`, "i");
const SAFE_FILTER = UNSAFE_WORDS.map((word) => `-intitle:${word}`).join(" ");

const hasCyrillic = (text) => /[а-яіїєґё]/i.test(text);

const translateQuery = async (query) => {
  const siteLng = String(i18n.language || "uk").split("-")[0];
  if (!hasCyrillic(query) && siteLng === "en") return query;
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(query)}`,
    );
    if (!response.ok) throw new Error(`Translation failed: ${response.status}`);
    const data = await response.json();
    return data[0].map((item) => item[0]).join("");
  } catch (error) {
    console.error("Background search query translation failed:", error);
    return query;
  }
};

const formatDuration = (seconds) => {
  const total = Math.round(seconds || 0);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};

// «<a href=…>Ім'я</a>» → «Ім'я»
const stripHtml = (html = "") => {
  const text = new DOMParser().parseFromString(String(html), "text/html").body.textContent || "";
  return text.replace(/\s+/g, " ").trim();
};

const fileTitle = (page) => page.title.replace(/^File:/, "").replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ");

const describe = (page, info) => {
  const meta = info.extmetadata || {};
  return {
    name: stripHtml(meta.ObjectName?.value) || fileTitle(page),
    author: stripHtml(meta.Artist?.value).slice(0, 80) || info.user || "Wikimedia Commons",
    license: stripHtml(meta.LicenseShortName?.value),
    page: info.descriptionurl,
  };
};

// Мініатюра потрібної ширини: …/500px-Name.jpg → …/1920px-Name.jpg
const resizeThumb = (thumbUrl, width) => thumbUrl?.replace(/\/\d+px-/, `/${width}px-`);

const fullImageUrl = (info) => {
  if (info.width > FULL_WIDTH && info.thumburl) return resizeThumb(info.thumburl, FULL_WIDTH);
  // Невеликі JPEG/PNG/WebP беремо як є; TIFF тощо браузер не покаже — лише мініатюра
  if (/^image\/(jpeg|png|webp)$/.test(info.mime)) return info.url;
  return info.thumburl || info.url;
};

const mapImagePage = (page) => {
  const info = page.imageinfo?.[0];
  if (!info) return null;
  return {
    key: `img-${page.pageid}`,
    kind: "image",
    thumb: info.thumburl || info.url,
    full: fullImageUrl(info),
    width: info.width,
    height: info.height,
    ...describe(page, info),
    meta: `${info.width}×${info.height}`,
  };
};

// Найкраща готова версія відео (WebM до 1080p), що вкладається в ліміт 20 МБ
const pickVideo = (info) => {
  const duration = info.duration || 0;
  const estimate = (derivative) => (derivative.bandwidth && duration ? (derivative.bandwidth * duration) / 8 : 0);
  const best = (info.derivatives || [])
    .filter((d) => /webm/.test(d.type) && Math.min(d.width, d.height) <= 1080 && estimate(d) <= MAX_VIDEO_BYTES)
    .sort((a, b) => b.width * b.height - a.width * a.height)[0];
  if (best) return { url: best.src, width: best.width, height: best.height };
  if (/^video\/(webm|mp4)/.test(info.mime) && info.size <= MAX_VIDEO_BYTES) {
    return { url: info.url, width: info.width, height: info.height };
  }
  return null;
};

const mapVideoPage = (page) => {
  const info = page.videoinfo?.[0];
  if (!info) return null;
  // Як і для власних відео: не довші за 2 хвилини
  if (info.duration > MAX_VIDEO_SECONDS) return null;
  const video = pickVideo(info);
  if (!video) return null;
  return {
    key: `vid-${page.pageid}`,
    kind: "video",
    thumb: info.thumburl || "",
    full: video.url,
    width: info.width,
    height: info.height,
    ...describe(page, info),
    meta: `${formatDuration(info.duration)} · ${video.width}×${video.height}`,
  };
};

const buildSearchUrl = ({ text, type, horizontal, order, offset }) => {
  const isVideo = type === "video";
  const terms = [
    type === "painting" ? `${text} (painting OR artwork)` : text,
    isVideo ? "filetype:video" : "filetype:bitmap",
    // Достатньо великі — щоб фон не був розмитим на весь екран
    horizontal ? `filew:>${isVideo ? 1279 : 1599}` : "",
    SAFE_FILTER,
  ].filter(Boolean);
  const prefix = isVideo ? "vi" : "ii";
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    origin: "*",
    generator: "search",
    gsrnamespace: "6",
    gsrsearch: terms.join(" "),
    gsrlimit: String(PER_PAGE),
    gsroffset: String(offset),
    gsrsort: order,
    prop: isVideo ? "videoinfo" : "imageinfo",
    [`${prefix}prop`]: `url|size|mime|user|extmetadata${isVideo ? "|derivatives" : ""}`,
    [`${prefix}extmetadatafilter`]: "ObjectName|Artist|LicenseShortName",
    [`${prefix}urlwidth`]: "500",
  });
  return `${COMMONS_API}?${params}`;
};

const Panel = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 179, 108, 0.22);
  background: linear-gradient(145deg, rgba(255, 179, 108, 0.06), rgba(var(--bm-ink, 255, 255, 255), 0.02));
`;

const PanelTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--bm-label, #ffc996);
  a {
    color: var(--bm-link, #8fd18f);
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
  }
`;

const SearchRow = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SearchField = styled.label`
  position: relative;
  flex: 1 1 260px;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: 12px;
    color: var(--bm-accent-text, #ffb36c);
    pointer-events: none;
  }
  input {
    width: 100%;
    padding: 9px 14px 9px 36px;
    border-radius: 10px;
    border: 1px solid rgba(255, 179, 108, 0.35);
    background: var(--bm-input-bg, rgba(5, 8, 16, 0.6));
    color: var(--bm-input-text, #fff);
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    &::placeholder { color: var(--bm-muted, #7d8191); }
    &:focus { border-color: #ffb36c; box-shadow: 0 0 12px rgba(255, 179, 108, 0.25); }
  }
`;

const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 38px;
  padding: 8px 18px;
  border: 1px solid rgba(255, 179, 108, 0.55);
  border-radius: 10px;
  color: #17120d;
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  &:disabled { cursor: wait; opacity: 0.65; }
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  font-size: 12px;
  color: var(--bm-nav-text, #c5c8d0);
`;

const Segmented = styled.div`
  display: inline-flex;
  border: 1px solid rgba(255, 179, 108, 0.3);
  border-radius: 9px;
  overflow: hidden;
`;

const SegmentButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 11px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => (p.$active ? "#17120d" : "var(--bm-nav-text, #d8dae0)")};
  background: ${(p) => (p.$active ? "linear-gradient(135deg, #ffca91, #ff9d48)" : "transparent")};
  &:hover { background: ${(p) => (p.$active ? "linear-gradient(135deg, #ffca91, #ff9d48)" : "rgba(255, 179, 108, 0.15)")}; }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.button`
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(var(--bm-ink, 255, 255, 255), 0.14);
  background: rgba(var(--bm-ink, 255, 255, 255), 0.04);
  color: var(--bm-nav-text, #d8dae0);
  font-size: 11px;
  cursor: pointer;
  &:hover { border-color: #ffb36c; color: var(--bm-text, #fff); }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
`;

const Card = styled.div`
  position: relative;
  aspect-ratio: 3 / 2;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bm-thumb-bg, #10131b);
  border: 2px solid ${(p) => (p.$added ? "#6ee7a8" : "rgba(255, 255, 255, 0.1)")};
  transition: transform 0.2s ease, border-color 0.2s ease;
  &:hover { transform: translateY(-3px); border-color: ${(p) => (p.$added ? "#6ee7a8" : "rgba(255, 179, 108, 0.7)")}; }
  &:hover .info { opacity: 1; }
  img, video { display: block; width: 100%; height: 100%; object-fit: cover; }
`;

const CardPick = styled.button`
  position: absolute;
  inset: 0;
  z-index: 1;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  &:disabled { cursor: wait; }
`;

const CardInfo = styled.div`
  position: absolute;
  inset: auto 0 0;
  z-index: 2;
  padding: 14px 7px 5px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
  color: #fff;
  font-size: 10px;
  line-height: 1.35;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  div { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  span { color: #ffd9b0; }
`;

const Badge = styled.span`
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border-radius: 999px;
  background: ${(p) => p.$bg || "rgba(0, 0, 0, 0.65)"};
  color: ${(p) => p.$color || "#fff"};
  font-size: 10px;
  font-weight: 700;
  pointer-events: none;
`;

const ZoomButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(10, 12, 22, 0.75);
  color: #aef;
  cursor: pointer;
  &:hover { border-color: #ffb36c; }
`;

const Spinner = styled(FiLoader)`
  animation: bg-search-spin 1s linear infinite;
  @keyframes bg-search-spin { to { transform: rotate(360deg); } }
`;

// Відео-картка — лише кадр-прев'ю, щоб не тягнути мегабайти відео при прокрутці
// (переглянути можна кнопкою «на весь екран»)
const VideoThumb = ({ item }) =>
  item.thumb ? (
    <img src={item.thumb} alt={item.name} loading="lazy" />
  ) : (
    <video src={`${item.full}#t=0.1`} muted playsInline preload="metadata" />
  );

const CommonsSearch = ({ customHeroBgs = [], setCustomHeroBgs, onSelect, onPreview }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("photo");
  const [horizontal, setHorizontal] = useState(true);
  const [order, setOrder] = useState("relevance");
  const [results, setResults] = useState([]);
  const [nextOffset, setNextOffset] = useState(null);
  const [status, setStatus] = useState("idle");
  const [addingKey, setAddingKey] = useState(null);
  const requestRef = useRef(0);

  const search = async (overrides = {}) => {
    const options = { query, type, horizontal, order, offset: 0, ...overrides };
    const text = options.query.trim();
    if (!text) return;
    // Застарілі відповіді (швидко змінили фільтр) не перезаписують нові
    const requestId = ++requestRef.current;
    const firstPage = options.offset === 0;
    setStatus(firstPage ? "loading" : "loading-more");
    try {
      const translated = await translateQuery(text);
      const response = await fetch(buildSearchUrl({ ...options, text: translated }));
      if (!response.ok) throw new Error(`Commons request failed: ${response.status}`);
      const data = await response.json();
      if (data.error) throw new Error(data.error.info || data.error.code);
      if (requestId !== requestRef.current) return;
      const isVideo = options.type === "video";
      const items = (data.query?.pages || [])
        .sort((a, b) => a.index - b.index)
        .map(isVideo ? mapVideoPage : mapImagePage)
        .filter(Boolean)
        .filter((item) => !UNSAFE_RE.test(item.name))
        // Для фону потрібні горизонтальні кадри
        .filter((item) => !options.horizontal || item.width >= item.height);
      setResults((previous) => (firstPage ? items : [...previous, ...items]));
      setNextOffset(data.continue?.gsroffset ?? null);
      setStatus(firstPage && !items.length ? NO_RESULTS : "idle");
    } catch (error) {
      if (requestId !== requestRef.current) return;
      console.error("Commons search failed:", error);
      setStatus("error");
    }
  };

  // Зміна фільтра одразу оновлює результати, якщо вже щось шукали
  const changeFilter = (patch) => {
    if ("type" in patch) setType(patch.type);
    if ("horizontal" in patch) setHorizontal(patch.horizontal);
    if ("order" in patch) setOrder(patch.order);
    if (query.trim()) search(patch);
  };

  const findSaved = (item) => customHeroBgs.find((bg) => bg.id === `commons-${item.key}`);

  const addBackground = async (item) => {
    const saved = findSaved(item);
    if (saved) {
      onSelect(saved.src);
      toast.success(i18n.t("ui.CommonsSearch.fonVstanovleno"));
      return;
    }
    if (customHeroBgs.length >= MAX_CUSTOM_BGS) {
      toast.error(customBgLimitMessage());
      return;
    }
    setAddingKey(item.key);
    let src = item.full;
    // Commons віддає файли з CORS, тож зберігаємо їх у браузері: фон не зникне,
    // навіть якщо файл перейменують, і працюватиме офлайн.
    try {
      const response = await fetch(item.full);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      if (item.kind === "video" && blob.size > MAX_VIDEO_BYTES) throw new Error("Video is too large");
      // Картинку зберігаємо стиснутою до 200 КБ, як і завантажені з пристрою
      src = item.kind === "image" ? await compressImageToLimit(blob) : blob;
    } catch (error) {
      // Не вдалось завантажити — лишаємо посилання, фон однаково з'явиться
      console.warn("Commons download failed, keeping URL:", error);
    }
    setCustomHeroBgs((previous) => [
      {
        id: `commons-${item.key}`,
        src,
        name: item.name,
        category: item.kind === "video" ? i18n.t("ui.CommonsSearch.vashiVideo") : i18n.t("ui.CommonsSearch.vashiKartynky"),
        source: item.license ? `Wikimedia Commons · ${item.license}` : "Wikimedia Commons",
        author: item.author,
        sourceUrl: item.page,
      },
      ...previous,
    ]);
    onSelect(src);
    setAddingKey(null);
    toast.success(item.kind === "video" ? i18n.t("ui.CommonsSearch.videoFonVstanovleno") : i18n.t("ui.CommonsSearch.fonVstanovleno"));
  };

  const loading = status === "loading";
  const hasMore = results.length > 0 && nextOffset !== null;

  return (
    <Panel aria-label={i18n.t("ui.CommonsSearch.poshukNovykhFonivU")}>
      <PanelTitle>
        <span>{i18n.t("ui.CommonsSearch.fotoKartynyTaVideo")}</span>
        <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener noreferrer">{i18n.t("ui.CommonsSearch.vilniFailyZWikimedia")}</a>
      </PanelTitle>

      <SearchRow onSubmit={(event) => { event.preventDefault(); search(); }}>
        <SearchField>
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            aria-label={i18n.t("ui.CommonsSearch.poshukFonivUWikimedia")}
            placeholder={i18n.t("ui.CommonsSearch.shchoShukaiemoNaprykladHory")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </SearchField>
        <SearchButton type="submit" disabled={loading}>
          {loading ? <Spinner /> : <FiSearch />}
          {loading ? i18n.t("ui.CommonsSearch.shukaiemo") : i18n.t("ui.CommonsSearch.shukaty")}
        </SearchButton>
      </SearchRow>

      <Toolbar>
        <Segmented role="group" aria-label={i18n.t("ui.CommonsSearch.typ")}>
          {TYPES.map(({ value, label, Icon }) => (
            <SegmentButton key={value} type="button" $active={type === value} aria-pressed={type === value} onClick={() => changeFilter({ type: value })}>
              <Icon aria-hidden="true" /> {label}
            </SegmentButton>
          ))}
        </Segmented>
        <Segmented role="group" aria-label={i18n.t("ui.CommonsSearch.poriadok")}>
          {ORDERS.map(({ value, label }) => (
            <SegmentButton key={value} type="button" $active={order === value} aria-pressed={order === value} onClick={() => changeFilter({ order: value })}>
              {label}
            </SegmentButton>
          ))}
        </Segmented>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
          <input type="checkbox" checked={horizontal} onChange={(event) => changeFilter({ horizontal: event.target.checked })} style={{ accentColor: "#ffb36c" }} />
          {type === "video" ? i18n.t("ui.CommonsSearch.lysheHoryzontalniIChitki") : i18n.t("ui.CommonsSearch.lysheShyrokiIChitki")}
        </label>
      </Toolbar>

      <Chips>
        {SUGGESTIONS().map((word) => (
          <Chip key={word} type="button" onClick={() => { setQuery(word); search({ query: word }); }}>
            {word}
          </Chip>
        ))}
      </Chips>

      {status === NO_RESULTS && <span style={{ color: "var(--bm-nav-text, #c5c8d0)", fontSize: 12 }}>{i18n.t("ui.CommonsSearch.nichohoNeZnaidenoSprobuite")}</span>}
      {status === "error" && <span role="alert" style={{ color: "var(--bm-danger, #ff8a80)", fontSize: 12 }}>{i18n.t("ui.CommonsSearch.poshukNeVdavsiaPerevirte")}</span>}

      {results.length > 0 && (
        <>
          <span style={{ fontSize: 11, color: "var(--bm-muted, #8a8d9b)" }}>
            {i18n.t("ui.CommonsSearch.pokazano")} {results.length.toLocaleString("uk-UA")} {i18n.t("ui.CommonsSearch.natysnitNaKartkuShchob")}
          </span>
          <Grid>
            {results.map((item) => {
              const added = Boolean(findSaved(item));
              const adding = addingKey === item.key;
              return (
                <Card key={item.key} $added={added}>
                  {item.kind === "video" ? <VideoThumb item={item} /> : <img src={item.thumb} alt={item.name} loading="lazy" />}
                  <CardPick type="button" disabled={Boolean(addingKey)} onClick={() => addBackground(item)} aria-label={i18n.t("ui.CommonsSearch.zrobytyFonom", { name: item.name })} />
                  {adding ? (
                    <Badge $bg="rgba(255, 179, 108, 0.95)" $color="#17120d"><Spinner /> {i18n.t("ui.CommonsSearch.zavantazhuiemo")}</Badge>
                  ) : added ? (
                    <Badge $bg="rgba(110, 231, 168, 0.95)" $color="#0b2a1a"><FiCheck /> {i18n.t("ui.CommonsSearch.dodano")}</Badge>
                  ) : item.kind === "video" ? (
                    <Badge><FiFilm /> {i18n.t("ui.CommonsSearch.video")}</Badge>
                  ) : null}
                  <ZoomButton type="button" aria-label={i18n.t("ui.CommonsSearch.perehlianuty", { name: item.name })} onClick={() => onPreview({ src: item.full, name: item.name })}>
                    <FiMaximize2 />
                  </ZoomButton>
                  <CardInfo className="info">
                    <div>{item.name}</div>
                    <div>
                      <span>{item.meta}</span> · {item.author}
                      {item.license && <> · {item.license}</>}
                    </div>
                  </CardInfo>
                </Card>
              );
            })}
          </Grid>
          {hasMore && (
            <SearchButton type="button" disabled={status === "loading-more"} onClick={() => search({ offset: nextOffset })} style={{ alignSelf: "center" }}>
              {status === "loading-more" ? <><Spinner /> {i18n.t("ui.CommonsSearch.zavantazhuiemo2")}</> : i18n.t("ui.CommonsSearch.pokazatyShche")}
            </SearchButton>
          )}
        </>
      )}
    </Panel>
  );
};

export default CommonsSearch;
