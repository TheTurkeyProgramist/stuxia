import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import authorsData from "../MusicPhoto/authors.json";
import { useAnimationsDisabled } from "../../utils/animationsPref.js";

/*
  Структура запису в authors.json:
  {
    "id": 1,
    "name": "Назва автора / студії",
    "role": "Хто це · Країна",            — короткий підпис під іменем
    "quote": "Коронна фраза",             — показується великою цитатою під іменем
    "bio": "Біографія",
    "usedIn": ["Трек 1", "Мультсеріал"],  — що саме з його робіт є у Стихії
    "note": "Особиста нотатка",
    "remark": "Примітка",
    "links": [{ "label": "Дивитися", "platform": "YouTube", "url": "https://..." }]
  }
  Обов'язкове лише "name"; порожні чи відсутні поля просто не показуються.

  Для будь-кого:
    "image": "characters/domino-avatar.webp" — картинка 4:3, шлях від src/media/
      (папки characters, turkeys, brand, third-party/*; лише .webp)
  Герої Стихії (Доміно, Кейт) — додатково:
    "kind": "hero"                        — окремий розділ на початку, зелений акцент
*/
const MEDIA = import.meta.glob("../../media/{characters,turkeys,brand,third-party/*}/*.webp", {
  eager: true,
  import: "default",
});
const resolveImage = (path) => {
  if (!path) return null;
  // "./characters/x.webp", "/characters/x.webp", "src/media/characters/x.webp" → "characters/x.webp"
  const clean = path.trim().replace(/^\.?\//, "").replace(/^(src\/)?media\//, "");
  const url = MEDIA[`../../media/${clean}`];
  // Хибний шлях у authors.json не ламає сайт (картинки просто не буде), тож підказуємо в консолі під час розробки
  if (!url && import.meta.env.DEV) {
    console.warn(`[authors.json] Картинку не знайдено: "${path}". Шлях від src/media/, лише .webp у characters, turkeys, brand, third-party/*.`);
  }
  return url || null;
};

const RAW = authorsData.map((a, i) => ({
  id: a.id ?? `author-${i}`,
  kind: a.kind === "hero" ? "hero" : "author",
  image: resolveImage(a.image),
  name: a.name || "Без імені",
  role: a.role || "",
  quote: (a.quote || "").trim(),
  bio: a.bio || "",
  usedIn: Array.isArray(a.usedIn) ? a.usedIn.filter(Boolean) : [],
  note: a.note || "",
  remark: a.remark || "",
  links: Array.isArray(a.links) ? a.links.filter((l) => l && l.url) : [],
}));

// Герої завжди йдуть першими, далі автори; нумерація сторінок наскрізна
const AUTHORS = [
  ...RAW.filter((a) => a.kind === "hero"),
  ...RAW.filter((a) => a.kind !== "hero"),
].map((a, index) => ({ ...a, index, page: index + 1 }));

const isHero = (a) => a.kind === "hero";

// Книга — на планшетах і комп'ютерах; на телефонах (і низьких екранах) — список.
const BOOK_QUERY = "(min-width: 768px) and (min-height: 520px)";
const subscribeBook = (callback) => {
  const mq = window.matchMedia(BOOK_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};
const useIsBook = () =>
  useSyncExternalStore(subscribeBook, () => window.matchMedia(BOOK_QUERY).matches, () => true);

const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[ʼ’`]/g, "'")
    .trim();

const matchesQuery = (author, q) =>
  !q || [author.name, author.role, author.bio, ...author.usedIn].some((f) => normalize(f).includes(q));

const FLIP_DURATION = 0.8;
const FLIP_EASE = [0.645, 0.045, 0.355, 1];

/* ─────────────────────────── Спільний вміст сторінки автора ─────────────────────────── */

// Ім'я автора: якщо не влазить в один рядок — зменшуємо шрифт (від розміру з CSS до MIN_NAME_SIZE)
const MIN_NAME_SIZE = 14;
const FitName = ({ children }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const fit = () => {
      el.style.fontSize = "";
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.scrollWidth > el.clientWidth && size > MIN_NAME_SIZE) {
        size -= 1;
        el.style.fontSize = `${size}px`;
      }
    };

    fit();
    // Перераховуємо, коли змінюється ширина (поворот екрана, ресайз вікна) і коли довантажився шрифт
    let lastWidth = el.clientWidth;
    const ro = new ResizeObserver(() => {
      if (el.clientWidth === lastWidth) return;
      lastWidth = el.clientWidth;
      fit();
    });
    ro.observe(el);
    document.fonts?.ready.then(fit).catch(() => {});
    return () => ro.disconnect();
  }, [children]);

  return <Name ref={ref}>{children}</Name>;
};

const AuthorArticle = ({ author, $dropCap }) => (
  <Article $hero={isHero(author)}>
    {author.image && <Portrait src={author.image} alt={author.name} loading="lazy" />}
    {author.role && <Kicker>{author.role}</Kicker>}
    <FitName>{author.name}</FitName>
    {author.quote && <Quote>«{author.quote}»</Quote>}
    <Rule />

    {author.bio ? (
      <Bio $dropCap={$dropCap}>{author.bio}</Bio>
    ) : (
      <EmptyText>Біографія ще пишеться…</EmptyText>
    )}

    {author.usedIn.length > 0 && (
      <Section>
        <SectionTitle>У Стихії</SectionTitle>
        <Chips>
          {author.usedIn.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </Chips>
      </Section>
    )}

    {author.note && (
      <Note>
        <SectionTitle>Від автора Стихії</SectionTitle>
        <p>{author.note}</p>
      </Note>
    )}

    {author.remark && (
      <Section>
        <SectionTitle>Примітка</SectionTitle>
        <Remark>{author.remark}</Remark>
      </Section>
    )}

    {author.links.length > 0 && (
      <Links>
        {author.links.map((link) => (
          <LinkButton key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
            <span>{link.label || "Джерело"}</span>
            {link.platform && <LinkPlatform>{link.platform}</LinkPlatform>}
            <FaExternalLinkAlt aria-hidden="true" />
          </LinkButton>
        ))}
      </Links>
    )}
  </Article>
);

const SearchField = ({ value, onChange, autoFocus }) => (
  <SearchWrap>
    <FaSearch aria-hidden="true" />
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Пошук: автор, трек, мультфільм…"
      aria-label="Пошук авторів"
      autoFocus={autoFocus}
    />
    {value && (
      <ClearButton type="button" onClick={() => onChange("")} aria-label="Очистити пошук">
        <FaTimes />
      </ClearButton>
    )}
  </SearchWrap>
);

/* ─────────────────────────────────── Компонент ─────────────────────────────────── */

const AuthorsDirectoryModal = ({ isOpen, onClose, isDarkMode = true }) => {
  const isBook = useIsBook();
  const animationsOff = useAnimationsDisabled();
  const reduceMotion = useReducedMotion();
  const noMotion = animationsOff || reduceMotion;

  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState(null); // { id, from, to, dir }
  const [mobileIndex, setMobileIndex] = useState(null);
  const currentRef = useRef(0);
  const flipCounter = useRef(0);

  const q = normalize(query);
  const filtered = useMemo(() => AUTHORS.filter((a) => matchesQuery(a, q)), [q]);
  const groups = [
    { key: "hero", title: "Герої Стихії", items: filtered.filter(isHero) },
    { key: "author", title: "Автори та джерела", items: filtered.filter((a) => !isHero(a)) },
  ].filter((g) => g.items.length > 0);

  const goTo = useCallback(
    (index) => {
      const from = currentRef.current;
      if (index < 0 || index >= AUTHORS.length || index === from) return;
      currentRef.current = index;
      setCurrent(index);
      if (noMotion) {
        setFlip(null);
        return;
      }
      flipCounter.current += 1;
      setFlip({ id: flipCounter.current, from, to: index, dir: index > from ? 1 : -1 });
    },
    [noMotion],
  );

  const handleClose = useCallback(() => {
    setQuery("");
    setMobileIndex(null);
    setFlip(null);
    onClose?.();
  }, [onClose]);

  // Блокуємо прокрутку сторінки під модалкою
  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc — закрити / назад; ← → — гортати книгу
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (!isBook && mobileIndex !== null) setMobileIndex(null);
        else handleClose();
        return;
      }
      if (!isBook) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") goTo(currentRef.current + 1);
      if (e.key === "ArrowLeft") goTo(currentRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, isBook, mobileIndex, goTo, handleClose]);

  if (!isOpen) return null;

  const instant = { duration: 0 };

  /* ───────────── Телефон: пошук + список, деталі — по натиску ───────────── */
  if (!isBook) {
    const mobileAuthor = mobileIndex !== null ? AUTHORS[mobileIndex] : null;
    return (
      <MobileShell
        $dark={isDarkMode}
        role="dialog"
        aria-modal="true"
        aria-label="Автори та джерела"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={noMotion ? instant : { duration: 0.25, ease: "easeOut" }}
      >
        <MobileHeader>
          <div>
            <Eyebrow>Стихія · довідник</Eyebrow>
            <MobileTitle>Автори та джерела</MobileTitle>
          </div>
          <RoundButton type="button" onClick={handleClose} aria-label="Закрити">
            <FaTimes />
          </RoundButton>
        </MobileHeader>

        <MobileSearchRow>
          <SearchField value={query} onChange={setQuery} />
        </MobileSearchRow>

        <MobileList>
          {groups.map((group) => (
            <React.Fragment key={group.key}>
              <GroupLabel $hero={group.key === "hero"}>{group.title}</GroupLabel>
              {group.items.map((a) => (
            <MobileCard
              key={a.id}
              type="button"
              $hero={isHero(a)}
              onClick={() => setMobileIndex(a.index)}
            >
              {a.image && <Avatar src={a.image} alt="" $size={48} />}
              <MobileCardText>
                <MobileCardName>{a.name}</MobileCardName>
                {a.role && <MobileCardRole>{a.role}</MobileCardRole>}
                {a.bio && <MobileCardExcerpt>{a.bio}</MobileCardExcerpt>}
              </MobileCardText>
              <FaChevronRight aria-hidden="true" />
            </MobileCard>
              ))}
            </React.Fragment>
          ))}
          {filtered.length === 0 && <EmptyText>Нікого не знайдено за «{query}».</EmptyText>}
        </MobileList>

        <AnimatePresence>
          {mobileAuthor && (
            <MobileDetail
              key="detail"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={noMotion ? instant : { type: "tween", duration: 0.28, ease: "easeOut" }}
            >
              <MobileHeader>
                <BackButton type="button" onClick={() => setMobileIndex(null)}>
                  <FaArrowLeft aria-hidden="true" /> Усі автори
                </BackButton>
                <RoundButton type="button" onClick={handleClose} aria-label="Закрити">
                  <FaTimes />
                </RoundButton>
              </MobileHeader>

              <MobileDetailScroll key={mobileAuthor.id}>
                <AuthorArticle author={mobileAuthor} />
              </MobileDetailScroll>

              <MobilePager>
                <PagerButton
                  type="button"
                  disabled={mobileAuthor.index === 0}
                  onClick={() => setMobileIndex(mobileAuthor.index - 1)}
                >
                  <FaChevronLeft aria-hidden="true" /> Назад
                </PagerButton>
                <PagerCount>
                  {mobileAuthor.page} / {AUTHORS.length}
                </PagerCount>
                <PagerButton
                  type="button"
                  disabled={mobileAuthor.index === AUTHORS.length - 1}
                  onClick={() => setMobileIndex(mobileAuthor.index + 1)}
                >
                  Далі <FaChevronRight aria-hidden="true" />
                </PagerButton>
              </MobilePager>
            </MobileDetail>
          )}
        </AnimatePresence>
      </MobileShell>
    );
  }

  /* ───────────── Планшет / ПК: розгорнута книга з перегортанням ───────────── */
  // Під час перегортання назад нижня сторінка ще показує стару — нова «прилітає» зліва
  const underAuthor = AUTHORS[flip?.dir === -1 ? flip.from : current];
  const leafAuthor = flip ? AUTHORS[flip.dir === 1 ? flip.from : flip.to] : null;

  return (
    <BookOverlay
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={noMotion ? instant : { duration: 0.2 }}
    >
      <ScreenClose type="button" onClick={handleClose} aria-label="Закрити">
        <FaTimes />
      </ScreenClose>

      <Book
        $dark={isDarkMode}
        role="dialog"
        aria-modal="true"
        aria-label="Автори та джерела"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={noMotion ? instant : { duration: 0.35, ease: "easeOut" }}
      >
        <Ribbon aria-hidden="true" />

        {/* Ліва сторінка — зміст */}
        <LeftPage>
          <Eyebrow $paper>Стихія · довідник</Eyebrow>
          <BookTitle>Автори та джерела</BookTitle>
          <Lead>Герої Стихії, а також люди й студії, чия музика та мультфільми живуть у ній.</Lead>

          <SearchField value={query} onChange={setQuery} />

          <TocLabel>Зміст</TocLabel>
          <Toc>
            {groups.map((group) => (
              <React.Fragment key={group.key}>
                <GroupLabel $hero={group.key === "hero"} $paper>
                  {group.title}
                </GroupLabel>
                {group.items.map((a) => {
              const active = a.index === current;
              return (
                <TocItem
                  key={a.id}
                  type="button"
                  $active={active}
                  $hero={isHero(a)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => goTo(a.index)}
                >
                  {a.image ? (
                    <Avatar src={a.image} alt="" $size={26} />
                  ) : (
                    <TocNum>{String(a.page).padStart(2, "0")}</TocNum>
                  )}
                  <TocMain>
                    <TocName>{a.name}</TocName>
                    <TocLeader aria-hidden="true" />
                  </TocMain>
                  <TocPage>{a.page}</TocPage>
                  {a.role && <TocRole>{a.role}</TocRole>}
                </TocItem>
              );
                })}
              </React.Fragment>
            ))}
            {filtered.length === 0 && <EmptyText>Нікого не знайдено за «{query}».</EmptyText>}
          </Toc>
        </LeftPage>

        {/* Права сторінка — автор */}
        <RightPage>
          <Face>
            <FaceScroll key={underAuthor.id}>
              <AuthorArticle author={underAuthor} $dropCap />
            </FaceScroll>
            <FaceFooter>
              <PagerButton
                type="button"
                $paper
                disabled={current === 0}
                onClick={() => goTo(current - 1)}
                aria-label="Попередня сторінка"
              >
                <FaChevronLeft aria-hidden="true" />
              </PagerButton>
              <PageNumber>
                — {underAuthor.page} з {AUTHORS.length} —
              </PageNumber>
              <PagerButton
                type="button"
                $paper
                disabled={current === AUTHORS.length - 1}
                onClick={() => goTo(current + 1)}
                aria-label="Наступна сторінка"
              >
                <FaChevronRight aria-hidden="true" />
              </PagerButton>
            </FaceFooter>
          </Face>

          {flip && leafAuthor && (
            <Leaf
              key={flip.id}
              initial={{ rotateY: flip.dir === 1 ? 0 : -180 }}
              animate={{ rotateY: flip.dir === 1 ? -180 : 0 }}
              transition={{ duration: FLIP_DURATION, ease: FLIP_EASE }}
              onAnimationComplete={() => setFlip((f) => (f && f.id === flip.id ? null : f))}
              aria-hidden="true"
            >
              <LeafFront>
                <FaceScroll>
                  <AuthorArticle author={leafAuthor} $dropCap />
                </FaceScroll>
                <FaceFooter>
                  <PageNumber>
                    — {leafAuthor.page} з {AUTHORS.length} —
                  </PageNumber>
                </FaceFooter>
                <LeafShade
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.45, 0] }}
                  transition={{ duration: FLIP_DURATION, ease: "easeInOut" }}
                />
              </LeafFront>
              {/* Зворот аркуша: лягає на ліву сторінку й розчиняється в змісті */}
              <LeafBack
                initial={{ opacity: flip.dir === 1 ? 1 : 0 }}
                animate={{ opacity: flip.dir === 1 ? [1, 1, 0] : [0, 1, 1] }}
                transition={{
                  duration: FLIP_DURATION,
                  times: flip.dir === 1 ? [0, 0.72, 1] : [0, 0.28, 1],
                }}
              />
            </Leaf>
          )}
        </RightPage>
      </Book>
    </BookOverlay>
  );
};

export default AuthorsDirectoryModal;

/* ─────────────────────────────────── Стилі ─────────────────────────────────── */

const SERIF = `"PT Serif", "Literata", Georgia, "Times New Roman", serif`;

/*
  Теми. Тема береться з перемикача сайту (isDarkMode з App.jsx):
    книга   — bookLightVars (світлий папір)   / bookDarkVars (нічна книга)
    телефон — mobileLightVars                / mobileDarkVars
*/

// Книга, світла тема: кремовий папір, темно-синя обкладинка
const bookLightVars = `
  --paper: #f3e9d5;
  --paper-hi: rgba(255, 255, 255, 0.55);
  --paper-lo: rgba(170, 130, 80, 0.16);
  --spine: var(--spine);
  --spine-line: rgba(60, 35, 15, 0.35);
  --cover-bg: linear-gradient(135deg, #1b2547 0%, #121a35 50%, #0d1329 100%);
  --cover-border: rgba(255, 179, 108, 0.32);
  --ink: #2b2117;
  --muted: #7b6a54;
  --accent: #b5601b;
  --rule: rgba(70, 45, 20, 0.16);
  --chip-bg: rgba(181, 96, 27, 0.08);
  --chip-border: rgba(181, 96, 27, 0.35);
  --note-bg: rgba(255, 250, 238, 0.6);
  --hero-accent: #2e7a50;
  --hero-chip-bg: rgba(46, 122, 80, 0.09);
  --hero-chip-border: rgba(46, 122, 80, 0.38);
  --field-bg: rgba(255, 252, 244, 0.75);
  --field-border: rgba(70, 45, 20, 0.2);
  --display-font: ${SERIF};
  --body-font: ${SERIF};
`;

// Книга, темна тема: «нічний» чорнильно-синій папір, теплий текст, майже чорна обкладинка
const bookDarkVars = `
  --paper: #1b2136;
  --paper-hi: rgba(120, 140, 210, 0.1);
  --paper-lo: rgba(0, 0, 0, 0.3);
  --spine: rgba(0, 0, 0, 0.7);
  --spine-line: rgba(0, 0, 0, 0.6);
  --cover-bg: linear-gradient(135deg, #0d1122 0%, #080b17 60%, #05070f 100%);
  --cover-border: rgba(255, 179, 108, 0.4);
  --ink: #ece4d3;
  --muted: rgba(236, 228, 211, 0.6);
  --accent: #ffb36c;
  --rule: rgba(236, 228, 211, 0.12);
  --chip-bg: rgba(255, 179, 108, 0.1);
  --chip-border: rgba(255, 179, 108, 0.35);
  --note-bg: rgba(255, 255, 255, 0.04);
  --hero-accent: #7fd6a2;
  --hero-chip-bg: rgba(127, 214, 162, 0.1);
  --hero-chip-border: rgba(127, 214, 162, 0.38);
  --field-bg: rgba(255, 255, 255, 0.05);
  --field-border: rgba(236, 228, 211, 0.16);
  --display-font: ${SERIF};
  --body-font: ${SERIF};
`;

// Телефон, світла тема
const mobileLightVars = `
  --shell-bg: linear-gradient(165deg, #f7f4ee 0%, #eef1f8 100%);
  --detail-bg: linear-gradient(165deg, #fbf9f4 0%, #f1f3f9 100%);
  --card-bg: rgba(255, 255, 255, 0.85);
  --card-border: rgba(31, 36, 51, 0.08);
  --card-active: rgba(196, 98, 26, 0.1);
  --ink: #1f2433;
  --muted: rgba(31, 36, 51, 0.62);
  --accent: #c4621a;
  --rule: rgba(31, 36, 51, 0.1);
  --chip-bg: rgba(196, 98, 26, 0.08);
  --chip-border: rgba(196, 98, 26, 0.35);
  --note-bg: rgba(31, 36, 51, 0.04);
  --hero-accent: #2e7a50;
  --hero-chip-bg: rgba(46, 122, 80, 0.09);
  --hero-chip-border: rgba(46, 122, 80, 0.38);
  --field-bg: #ffffff;
  --field-border: rgba(31, 36, 51, 0.14);
  --display-font: inherit;
  --body-font: inherit;
`;

// Телефон, темна тема
const mobileDarkVars = `
  --shell-bg: linear-gradient(165deg, #0f1229 0%, #141c3a 55%, #19244a 100%);
  --detail-bg: linear-gradient(165deg, #10142d 0%, #16203f 100%);
  --card-bg: rgba(255, 255, 255, 0.04);
  --card-border: rgba(255, 255, 255, 0.08);
  --card-active: rgba(255, 179, 108, 0.12);
  --ink: #f4f6ff;
  --muted: rgba(228, 234, 255, 0.64);
  --accent: #ffb36c;
  --rule: rgba(255, 255, 255, 0.1);
  --chip-bg: rgba(255, 179, 108, 0.1);
  --chip-border: rgba(255, 179, 108, 0.38);
  --note-bg: rgba(255, 255, 255, 0.05);
  --hero-accent: #7fd6a2;
  --hero-chip-bg: rgba(127, 214, 162, 0.1);
  --hero-chip-border: rgba(127, 214, 162, 0.4);
  --field-bg: rgba(255, 255, 255, 0.06);
  --field-border: rgba(255, 255, 255, 0.12);
  --display-font: inherit;
  --body-font: inherit;
`;

const paperBackground = `
  background-color: var(--paper);
  background-image:
    radial-gradient(120% 90% at 50% 0%, var(--paper-hi), transparent 60%),
    radial-gradient(90% 70% at 50% 110%, var(--paper-lo), transparent 70%);
`;

/* ── Вміст статті ── */

// Герої Стихії: той самий макет, але зелений акцент замість помаранчевого
const heroScope = `
  --accent: var(--hero-accent);
  --chip-bg: var(--hero-chip-bg);
  --chip-border: var(--hero-chip-border);
`;

const Article = styled.article`
  color: var(--ink);
  ${({ $hero }) => $hero && heroScope}

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Portrait = styled.img`
  float: right;
  /* Прямокутний альбомний 16:9; кадр трохи зміщений догори, щоб не різало голови */
  width: clamp(150px, 18vw, 220px);
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center 30%;
  border-radius: 7px;
  border: 3px solid var(--accent);
  box-shadow:
    0 0 0 6px var(--chip-bg),
    0 10px 24px rgba(0, 0, 0, 0.22);
  background: var(--chip-bg);
`;

const Avatar = styled.img`
  flex-shrink: 0;
  align-self: center;
  width: ${({ $size }) => Math.round(($size * 4) / 3)}px;
  height: ${({ $size }) => $size}px;
  border-radius: 7px;
  object-fit: cover;
  border: 2px solid var(--accent);
`;

const GroupLabel = styled.div`
  display: flex;
  align-items: center;
  font-family: system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: ${({ $hero }) => ($hero ? "var(--hero-accent)" : "var(--muted)")};

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--rule);
  }
`;

const Kicker = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--accent);
`;

const Name = styled.h2`
  font-family: var(--display-font);
  font-size: clamp(28px, 3.4vw, 42px);
  line-height: 1.08;
  font-weight: 700;
  color: var(--ink);
  /* Завжди в один рядок: шрифт зменшує FitName.
     flow-root — щоб заголовок займав лише місце поруч із портретом (float), а не всю ширину */
  display: flow-root;
  white-space: nowrap;
`;

const Quote = styled.blockquote`
  font-family: var(--display-font);
  font-style: italic;
  font-size: clamp(17px, 1.6vw, 21px);
  line-height: 1.45;
  color: var(--accent);
  overflow-wrap: break-word;
`;

const Rule = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), var(--rule) 30%, transparent);
  opacity: 0.8;
`;

const Bio = styled.p`
  font-family: var(--body-font);
  font-size: 16px;
  line-height: 1.75;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  color: var(--ink);

  ${({ $dropCap }) =>
    $dropCap &&
    `
    &::first-letter {
      float: left;
      font-size: 3.3em;
      line-height: 0.85;
      font-weight: 700;
      color: var(--accent);
    }
  `}
`;

const EmptyText = styled.p`
  color: var(--muted);
  font-style: italic;
`;

const Section = styled.section`
`;

const SectionTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--muted);
  font-family: inherit;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  background: var(--chip-bg);
  color: var(--ink);
`;

const Note = styled.aside`
  border-left: 3px solid var(--accent);
  border-radius: 0 12px 12px 0;
  background: var(--note-bg);

  p {
    font-family: var(--body-font);
    font-style: italic;
    font-size: 15px;
    line-height: 1.65;
    color: var(--ink);
  }
`;

const Remark = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  border-radius: 12px;
  border: 1px solid var(--chip-border);
  background: var(--chip-bg);
  color: var(--ink);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 11px;
    color: var(--accent);
  }

  &:hover {
    background: var(--chip-border);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

const LinkPlatform = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: var(--muted);
`;

/* ── Пошук ── */

const SearchWrap = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  min-height: 44px;
  border-radius: 12px;
  background: var(--field-bg);
  border: 1px solid var(--field-border);
  color: var(--muted);
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: var(--accent);
  }

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: var(--ink);
    font: inherit;
    font-size: 15px;
  }

  input::placeholder {
    color: var(--muted);
  }

  input::-webkit-search-cancel-button {
    display: none;
  }
`;

const ClearButton = styled.button`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  cursor: pointer;

  &:hover {
    color: var(--ink);
  }
`;

/* ── Спільні кнопки ── */

const Eyebrow = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--accent);
`;

const RoundButton = styled.button`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--field-border);
  background: var(--field-bg);
  color: var(--ink);
  font-size: 16px;
  cursor: pointer;
`;

const PagerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  border-radius: 999px;
  border: 1px solid var(--field-border);
  background: ${({ $paper }) => ($paper ? "transparent" : "var(--field-bg)")};
  color: var(--ink);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--chip-bg);
    border-color: var(--chip-border);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

/* ── Телефон ── */

const MobileShell = styled(motion.div)`

  /* Без відступів: обнуляємо й браузерні за замовчуванням */
  :where(&) :where(h2, p, hr, blockquote, button, input) {
    margin: 0;
    padding: 0;
  }
  ${({ $dark }) => ($dark ? mobileDarkVars : mobileLightVars)}
  position: fixed;
  inset: 0;
  z-index: 2050;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--ink);
  background: var(--shell-bg);
  padding-top: env(safe-area-inset-top);
`;

const MobileHeader = styled.header`
  padding: 12px 16px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileTitle = styled.h2`
  font-size: 22px;
  line-height: 1.2;
  color: var(--ink);
`;

const MobileSearchRow = styled.div`
  padding: 0 16px 10px;
`;

const MobileList = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
  overflow-y: auto;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
`;

const MobileCard = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  text-align: left;
  border-radius: 16px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--ink);
  font: inherit;
  cursor: pointer;

  ${({ $hero }) =>
    $hero &&
    `
    ${heroScope}
    border-color: var(--chip-border);
    background: linear-gradient(100deg, var(--chip-bg), var(--card-bg) 70%);
  `}

  > svg {
    flex-shrink: 0;
    color: var(--accent);
    font-size: 14px;
  }

  &:active {
    background: var(--card-active);
  }
`;

const MobileCardText = styled.div`
  flex: 1;
  min-width: 0;
`;

const MobileCardName = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const MobileCardRole = styled.div`
  font-size: 12px;
  color: var(--accent);
`;

const MobileCardExcerpt = styled.div`
  font-size: 13px;
  line-height: 1.45;
  color: var(--muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MobileDetail = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding-top: env(safe-area-inset-top);
  background: var(--detail-bg);
  box-shadow: -20px 0 40px rgba(0, 0, 0, 0.35);
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  border-radius: 999px;
  border: 0;
  background: transparent;
  color: var(--accent);
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const MobileDetailScroll = styled.div`
  padding: 4px 16px 16px;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const MobilePager = styled.nav`
  padding: 8px 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid var(--rule);
`;

const PagerCount = styled.span`
  font-size: 13px;
  color: var(--muted);
`;

/* ── Книга ── */

const BookOverlay = styled(motion.div)`
  /* Зверху смуга під хрестик, щоб він не налазив на книгу */
  padding: 56px 12px 12px;

  /* Без відступів: обнуляємо й браузерні за замовчуванням */
  :where(&) :where(h2, p, hr, blockquote, button, input) {
    margin: 0;
    padding: 0;
  }
  position: fixed;
  inset: 0;
  z-index: 2050;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Зверху місце під кнопку закриття, щоб вона не налазила на книгу на планшетах */
  background:
    radial-gradient(80% 70% at 50% 45%, rgba(30, 40, 80, 0.55), transparent 70%),
    rgba(4, 6, 16, 0.86);
  backdrop-filter: blur(6px);
`;

const ScreenClose = styled.button`
  position: absolute;
  top: 5px;
  right: 12px;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 179, 108, 0.22);
    transform: rotate(90deg);
  }
`;

const Book = styled(motion.div)`
  padding: 8px;
  ${({ $dark }) => ($dark ? bookDarkVars : bookLightVars)}
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  width: min(1180px, 100%);
  height: min(800px, calc(100vh - 68px));
  height: min(800px, calc(100dvh - 68px));
  border-radius: 20px;
  /* Обкладинка */
  background: var(--cover-bg);
  border: 1px solid var(--cover-border);
  box-shadow:
    0 40px 90px rgba(0, 0, 0, 0.6),
    inset 0 0 0 4px rgba(255, 179, 108, 0.08);
  color: var(--ink);

  /* Корінець по центру */
  &::after {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: calc(8px + (100% - 16px) * 0.46);
    width: 2px;
    transform: translateX(-1px);
    background: linear-gradient(180deg, transparent, var(--spine-line), transparent);
    z-index: 1;
    pointer-events: none;
  }
`;

const Ribbon = styled.div`
  position: absolute;
  top: -4px;
  /* На лівій сторінці (зміст), біля корінця — щоб не налазила на портрет */
  left: calc(8px + (100% - 16px) * 0.46 - 56px);
  z-index: 6;
  width: 22px;
  height: 64px;
  background: linear-gradient(180deg, #ffb36c, #e0782a);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  pointer-events: none;
`;

const pageBase = `
  ${paperBackground}
  position: relative;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

const LeftPage = styled.section`
  padding: 20px 22px 14px;
  ${pageBase}
  z-index: 1;
  border-radius: 8px 2px 2px 8px;
  box-shadow: inset -34px 0 40px -30px var(--spine);
`;

const BookTitle = styled.h2`
  font-family: ${SERIF};
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.1;
  color: var(--ink);
`;

const Lead = styled.p`
  font-family: ${SERIF};
  font-style: italic;
  font-size: 15px;
  line-height: 1.55;
  color: var(--muted);
`;

const TocLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--muted);
  border-bottom: 1px solid var(--rule);
`;

const Toc = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const TocItem = styled.button`
  position: relative;
  display: grid;
  grid-template-columns: 2.4em minmax(0, 1fr) auto;
  align-items: baseline;
  width: 100%;
  padding: 0 10px;
  border: 0;
  border-radius: 10px;
  text-align: left;
  font-family: ${SERIF};
  ${({ $hero }) => $hero && heroScope}
  color: var(--ink);
  background: ${({ $active }) => ($active ? "var(--chip-bg)" : "transparent")};
  cursor: pointer;
  transition: background 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 3px;
    border-radius: 3px;
    background: var(--accent);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  &:hover {
    background: var(--chip-bg);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`;

const TocNum = styled.span`
  font-size: 13px;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
`;

const TocMain = styled.span`
  display: flex;
  align-items: baseline;
  min-width: 0;
`;

const TocName = styled.span`
  font-size: 17px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TocLeader = styled.span`
  flex: 1;
  min-width: 16px;
  border-bottom: 2px dotted var(--rule);
  transform: translateY(-4px);
`;

const TocPage = styled.span`
  font-size: 14px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
`;

const TocRole = styled.span`
  grid-column: 2 / 4;
  font-family: system-ui, sans-serif;
  font-size: 12px;
  color: var(--muted);
`;

const RightPage = styled.section`
  position: relative;
  z-index: 2;
  min-height: 0;
  perspective: 2400px;
  perspective-origin: 0% 50%;
`;

const Face = styled.div`
  ${pageBase}
  position: absolute;
  inset: 0;
  border-radius: 2px 8px 8px 2px;
  box-shadow: inset 34px 0 40px -30px var(--spine);
`;

const FaceScroll = styled.div`
  padding: 20px 22px 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

const FaceFooter = styled.footer`
  padding: 6px 16px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:has(> :only-child) {
    justify-content: center;
  }
`;

const PageNumber = styled.span`
  font-family: ${SERIF};
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
`;

const Leaf = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 5;
  transform-origin: left center;
  transform-style: preserve-3d;
  pointer-events: none;
  will-change: transform;
`;

const LeafFront = styled.div`
  ${pageBase}
  position: absolute;
  inset: 0;
  border-radius: 2px 8px 8px 2px;
  box-shadow:
    inset 34px 0 40px -30px var(--spine),
    0 10px 30px rgba(0, 0, 0, 0.25);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
`;

const LeafShade = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(40, 25, 10, 0.5), rgba(40, 25, 10, 0.05) 70%);
  pointer-events: none;
`;

const LeafBack = styled(motion.div)`
  ${paperBackground}
  position: absolute;
  inset: 0;
  border-radius: 8px 2px 2px 8px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: inset -34px 0 40px -30px var(--spine);
`;
