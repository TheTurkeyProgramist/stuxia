import { useRef, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { FiCheck, FiFilm, FiImage, FiLoader, FiMaximize2, FiSearch } from "react-icons/fi";

// Пошук нових фонів на Pixabay: фото, ілюстрації або відео.
// Вибрана картинка завантажується в браузер (Blob): її посилання тимчасове,
// а Pixabay і так просить не тримати постійних посилань; файл працює й офлайн.

const PIXABAY_KEY = "50977795-feb18de71b048a02e0c824e54";
const PER_PAGE = 24;
const MAX_VIDEO_BYTES = 20 * 1024 * 1024; // як і для власних відео
const NO_RESULTS = "no-results";

const TYPES = [
  { value: "photo", label: "Фото", Icon: FiImage },
  { value: "illustration", label: "Ілюстрації", Icon: FiImage },
  { value: "video", label: "Відео", Icon: FiFilm },
];

const ORDERS = [
  { value: "popular", label: "Популярні" },
  { value: "latest", label: "Нові" },
];

const SUGGESTIONS = ["ліс", "гори", "море", "космос", "нічне місто", "осінь", "зима", "водоспад", "північне сяйво", "пустеля", "дощ", "туман"];

const hasCyrillic = (text) => /[а-яіїєґё]/i.test(text);

const translateQuery = async (query) => {
  if (!hasCyrillic(query)) return query;
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(query)}`,
    );
    if (!response.ok) throw new Error(`Translation failed: ${response.status}`);
    const data = await response.json();
    return data[0].map((item) => item[0]).join("");
  } catch (error) {
    console.error("Pixabay query translation failed:", error);
    return query;
  }
};

const formatDuration = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

const mapImageHit = (hit) => ({
  key: `img-${hit.id}`,
  kind: "image",
  thumb: hit.webformatURL || hit.previewURL,
  full: hit.largeImageURL || hit.webformatURL,
  name: hit.tags,
  author: hit.user,
  meta: `${hit.imageWidth}×${hit.imageHeight}`,
});

// Найбільша якість, що вкладається в ліміт 20 МБ
const pickVideo = (videos) =>
  ["large", "medium", "small", "tiny"]
    .map((size) => videos?.[size])
    .find((video) => video?.url && (!video.size || video.size <= MAX_VIDEO_BYTES));

const mapVideoHit = (hit) => {
  const video = pickVideo(hit.videos);
  if (!video) return null;
  return {
    key: `vid-${hit.id}`,
    kind: "video",
    thumb: hit.videos?.medium?.thumbnail || hit.videos?.small?.thumbnail || hit.videos?.tiny?.thumbnail || "",
    full: video.url,
    name: hit.tags,
    author: hit.user,
    meta: `${formatDuration(hit.duration || 0)} · ${video.width}×${video.height}`,
  };
};

const Panel = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 179, 108, 0.22);
  background: linear-gradient(145deg, rgba(255, 179, 108, 0.06), rgba(255, 255, 255, 0.02));
`;

const PanelTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #ffc996;
  a {
    color: #8fd18f;
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
    color: #ffb36c;
    pointer-events: none;
  }
  input {
    width: 100%;
    padding: 9px 14px 9px 36px;
    border-radius: 10px;
    border: 1px solid rgba(255, 179, 108, 0.35);
    background: rgba(5, 8, 16, 0.6);
    color: #fff;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    &::placeholder { color: #7d8191; }
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
  color: #c5c8d0;
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
  color: ${(p) => (p.$active ? "#17120d" : "#d8dae0")};
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
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: #d8dae0;
  font-size: 11px;
  cursor: pointer;
  &:hover { border-color: #ffb36c; color: #fff; }
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
  background: #10131b;
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
  animation: pixabay-spin 1s linear infinite;
  @keyframes pixabay-spin { to { transform: rotate(360deg); } }
`;

// Відео-картка — лише кадр-прев'ю: навіть найменша версія відео важить ~10 МБ,
// тож не програємо її при наведенні (переглянути можна кнопкою «на весь екран»)
const VideoThumb = ({ item }) =>
  item.thumb ? (
    <img src={item.thumb} alt={item.name} loading="lazy" />
  ) : (
    <video src={`${item.full}#t=0.1`} muted playsInline preload="metadata" />
  );

const PixabaySearch = ({ customHeroBgs = [], setCustomHeroBgs, onSelect, onPreview }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("photo");
  const [horizontal, setHorizontal] = useState(true);
  const [order, setOrder] = useState("popular");
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [addingKey, setAddingKey] = useState(null);
  const requestRef = useRef(0);

  const search = async (overrides = {}) => {
    const options = { query, type, horizontal, order, page: 1, ...overrides };
    const text = options.query.trim();
    if (!text) return;
    // Застарілі відповіді (швидко змінили фільтр) не перезаписують нові
    const requestId = ++requestRef.current;
    setStatus(options.page === 1 ? "loading" : "loading-more");
    try {
      const translated = await translateQuery(text);
      const isVideo = options.type === "video";
      const params = new URLSearchParams({
        key: PIXABAY_KEY,
        q: translated,
        per_page: String(PER_PAGE),
        page: String(options.page),
        safesearch: "true",
        order: options.order,
      });
      if (!isVideo) {
        params.set("image_type", options.type);
        // Горизонтальні й достатньо великі — щоб фон не був розмитим на весь екран
        if (options.horizontal) {
          params.set("orientation", "horizontal");
          params.set("min_width", "1600");
        }
      }
      const response = await fetch(`https://pixabay.com/api/${isVideo ? "videos/" : ""}?${params}`);
      if (!response.ok) throw new Error(`Pixabay request failed: ${response.status}`);
      const data = await response.json();
      if (requestId !== requestRef.current) return;
      const items = (data.hits || []).map(isVideo ? mapVideoHit : mapImageHit).filter(Boolean);
      setResults((previous) => (options.page === 1 ? items : [...previous, ...items]));
      setTotal(data.totalHits || 0);
      setPage(options.page);
      setStatus(options.page === 1 && !items.length ? NO_RESULTS : "idle");
    } catch (error) {
      if (requestId !== requestRef.current) return;
      console.error("Pixabay search failed:", error);
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

  const findSaved = (item) =>
    customHeroBgs.find((bg) => bg.id === `pixabay-${item.key}` || bg.id === `pixabay-${item.key.replace(/^img-/, "")}`);

  const addBackground = async (item) => {
    const saved = findSaved(item);
    if (saved) {
      onSelect(saved.src);
      toast.success("Фон встановлено.");
      return;
    }
    setAddingKey(item.key);
    let src = item.full;
    // Посилання на картинки Pixabay тимчасові (pixabay.com/get/…), тож картинку
    // зберігаємо файлом. Посилання на відео постійні (cdn.pixabay.com/video/…),
    // а CDN відео не дозволяє завантаження з інших сайтів — їх лишаємо посиланням.
    if (item.kind === "image") {
      try {
        const response = await fetch(item.full);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        src = await response.blob();
      } catch (error) {
        // Не вдалось завантажити — лишаємо посилання, фон однаково з'явиться
        console.warn("Pixabay download failed, keeping URL:", error);
      }
    }
    setCustomHeroBgs((previous) => [
      {
        id: `pixabay-${item.key}`,
        src,
        name: item.name,
        category: item.kind === "video" ? "Ваші відео" : "Ваші картинки",
        source: "Pixabay",
        author: item.author,
      },
      ...previous,
    ]);
    onSelect(src);
    setAddingKey(null);
    toast.success(item.kind === "video" ? "Відео-фон встановлено." : "Фон встановлено.");
  };

  const loading = status === "loading";
  const hasMore = results.length > 0 && results.length < total;

  return (
    <Panel aria-label="Пошук нових фонів на Pixabay">
      <PanelTitle>
        <span>Фото, ілюстрації та відео для фону</span>
        <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Зображення та відео з Pixabay</a>
      </PanelTitle>

      <SearchRow onSubmit={(event) => { event.preventDefault(); search(); }}>
        <SearchField>
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            aria-label="Пошук фонів на Pixabay"
            placeholder="Що шукаємо? Наприклад: гори в тумані"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </SearchField>
        <SearchButton type="submit" disabled={loading}>
          {loading ? <Spinner /> : <FiSearch />}
          {loading ? "Шукаємо..." : "Шукати"}
        </SearchButton>
      </SearchRow>

      <Toolbar>
        <Segmented role="group" aria-label="Тип">
          {TYPES.map(({ value, label, Icon }) => (
            <SegmentButton key={value} type="button" $active={type === value} aria-pressed={type === value} onClick={() => changeFilter({ type: value })}>
              <Icon aria-hidden="true" /> {label}
            </SegmentButton>
          ))}
        </Segmented>
        <Segmented role="group" aria-label="Порядок">
          {ORDERS.map(({ value, label }) => (
            <SegmentButton key={value} type="button" $active={order === value} aria-pressed={order === value} onClick={() => changeFilter({ order: value })}>
              {label}
            </SegmentButton>
          ))}
        </Segmented>
        {type !== "video" && (
          <label style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
            <input type="checkbox" checked={horizontal} onChange={(event) => changeFilter({ horizontal: event.target.checked })} style={{ accentColor: "#ffb36c" }} />
            Лише широкі й чіткі (від 1600 px)
          </label>
        )}
      </Toolbar>

      <Chips>
        {SUGGESTIONS.map((word) => (
          <Chip key={word} type="button" onClick={() => { setQuery(word); search({ query: word }); }}>
            {word}
          </Chip>
        ))}
      </Chips>

      {status === NO_RESULTS && <span style={{ color: "#c5c8d0", fontSize: 12 }}>Нічого не знайдено. Спробуйте інший запит або зніміть фільтр «Лише широкі».</span>}
      {status === "error" && <span role="alert" style={{ color: "#ff8a80", fontSize: 12 }}>Пошук не вдався. Перевірте з'єднання і спробуйте ще раз.</span>}

      {results.length > 0 && (
        <>
          <span style={{ fontSize: 11, color: "#8a8d9b" }}>
            Знайдено {total.toLocaleString("uk-UA")} · натисніть на картку, щоб зробити фоном
          </span>
          <Grid>
            {results.map((item) => {
              const added = Boolean(findSaved(item));
              const adding = addingKey === item.key;
              return (
                <Card key={item.key} $added={added}>
                  {item.kind === "video" ? <VideoThumb item={item} /> : <img src={item.thumb} alt={item.name} loading="lazy" />}
                  <CardPick type="button" disabled={Boolean(addingKey)} onClick={() => addBackground(item)} aria-label={`Зробити фоном: ${item.name}`} />
                  {adding ? (
                    <Badge $bg="rgba(255, 179, 108, 0.95)" $color="#17120d"><Spinner /> Завантажуємо</Badge>
                  ) : added ? (
                    <Badge $bg="rgba(110, 231, 168, 0.95)" $color="#0b2a1a"><FiCheck /> Додано</Badge>
                  ) : item.kind === "video" ? (
                    <Badge><FiFilm /> Відео</Badge>
                  ) : null}
                  <ZoomButton type="button" aria-label={`Переглянути: ${item.name}`} onClick={() => onPreview({ src: item.full, name: item.name })}>
                    <FiMaximize2 />
                  </ZoomButton>
                  <CardInfo className="info">
                    <div>{item.name}</div>
                    <div><span>{item.meta}</span> · {item.author}</div>
                  </CardInfo>
                </Card>
              );
            })}
          </Grid>
          {hasMore && (
            <SearchButton type="button" disabled={status === "loading-more"} onClick={() => search({ page: page + 1 })} style={{ alignSelf: "center" }}>
              {status === "loading-more" ? <><Spinner /> Завантажуємо...</> : "Показати ще"}
            </SearchButton>
          )}
        </>
      )}
    </Panel>
  );
};

export default PixabaySearch;
