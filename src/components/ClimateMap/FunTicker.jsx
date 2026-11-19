import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { css, keyframes } from "styled-components";
import { useFunPhrases } from "../../i18n/useFunPhrases.js";

// Одночасно: жарт, цікавий факт і порада по сайту.
// ПК — три колонки; планшет (≤900px) — порада окремим рядком зверху, під нею жарт і факт.
// Колоди — номери фраз: у всіх мовах той самий порядок, тож зміна мови не збиває колоду
const KINDS = [
  { area: "joke", list: (p) => p.JOKES },
  { area: "fact", list: (p) => p.FACTS },
  { area: "tip", list: (p) => [...p.MAP_TIPS, ...p.TIPS] },
];
const INTERVAL_MS = 10000;
const TABLET_QUERY = "(max-width: 900px)";

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Тип видно з розташування — префікси «Факт:» і «Порада:» (мовою сайту) прибираємо
const clean = (text, prefixes) => {
  const re = new RegExp(`^(${prefixes.map(escapeRe).join("|")})\\s*[:：]\\s*`);
  const body = text.replace(re, "");
  return body.charAt(0).toUpperCase() + body.slice(1);
};

const shuffledIndexes = (length) => {
  const out = Array.from({ length }, (_, i) => i);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

// Довжини списків однакові в усіх мовах — беремо з будь-якої (тут — з поточної)
const createDecks = (phrases) =>
  KINDS.map((kind) => ({ cards: shuffledIndexes(kind.list(phrases).length), pos: 0 }));

// Для кожного типу — перемішана колода: фрази не повторюються, доки не покажуться всі
const draw = (decks, kindIndex) => {
  const deck = decks[kindIndex];
  if (deck.pos >= deck.cards.length) {
    deck.cards = shuffledIndexes(deck.cards.length);
    deck.pos = 0;
  }
  return deck.cards[deck.pos++];
};

const drawAll = (decks) => KINDS.map((_, i) => draw(decks, i));

const FunTicker = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const phrases = useFunPhrases();
  // Колоди змінюються на місці (позиція в колоді), сам об'єкт не замінюється.
  // Поки фрази мови вантажаться, колод ще немає
  const [decks, setDecks] = useState(() => (phrases ? createDecks(phrases) : null));
  const [round, setRound] = useState(() => ({ picks: decks ? drawAll(decks) : null, id: 0 }));
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (decks || !phrases) return;
    const fresh = createDecks(phrases);
    setDecks(fresh);
    setRound((prev) => ({ picks: drawAll(fresh), id: prev.id + 1 }));
  }, [decks, phrases]);

  const showNext = useCallback(() => {
    if (!decks) return;
    setRound((prev) => ({ picks: drawAll(decks), id: prev.id + 1 }));
  }, [decks]);

  // Наведення миші чи фокус зупиняють зміну — щоб встигнути дочитати.
  // round.id у залежностях: після кліку відлік починається заново
  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setTimeout(showNext, INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [isPaused, round.id, showNext]);

  return (
    <Ticker
      type="button"
      $isDarkMode={isDarkMode}
      onClick={(e) => { e.stopPropagation(); showNext(); }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {phrases && round.picks &&
        KINDS.map(({ area, list }, i) => (
          <Slot key={`${round.id}-${area}`} $area={area} $isDarkMode={isDarkMode}>
            <Text>{clean(list(phrases)[round.picks[i]] || "", phrases.PREFIXES)}</Text>
          </Slot>
        ))}
      <Hint>{t("climateMap.tickerHint")}</Hint>
    </Ticker>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
`;

// Нижня частина панелі налаштувань: та сама ширина, рамка й фон, без проміжку —
// займає все вільне місце до низу карти; якщо місця мало — текст дрібнішає
const Ticker = styled.button`
  flex: 1 1 0;
  min-height: 0;
  /* Не більше ~4 рядків тексту + підпис: на великому екрані не роздувається в порожній блок */
  max-height: 120px;
  width: min(100%, 1200px);
  margin: 0;
  padding: 4px 6px;
  container-type: size;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr) auto;
  grid-template-areas:
    "joke fact tip"
    "hint hint hint";
  row-gap: 2px;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  border-top: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.14)" : "rgba(200,100,0,0.15)"};
  border-radius: 0 0 12px 12px;
  background: ${(p) => p.$isDarkMode
    ? "linear-gradient(170deg, rgba(15,22,40,0.97) 0%, rgba(18,14,8,0.97) 100%)"
    : "linear-gradient(170deg, rgba(255,248,235,0.99) 0%, rgba(255,243,220,0.99) 100%)"};
  color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.88)" : "#2a1400"};
  font: inherit;
  text-align: center;
  cursor: pointer;
  transition: filter 0.2s ease;

  /* Фон — градієнт, тож підсвічуємо яскравістю, а не background-color */
  &:hover { filter: brightness(1.12); }
  &:focus-visible {
    outline: 2px solid ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.6)" : "rgba(200,100,0,0.5)"};
    outline-offset: -3px;
  }

  @media ${TABLET_QUERY} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas:
      "tip tip"
      "joke fact"
      "hint hint";
    row-gap: 4px;
  }
`;

const divider = (p) => (p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)");

const Slot = styled.span`
  grid-area: ${(p) => p.$area};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  padding: 0 10px;
  animation: ${fadeIn} 0.45s ease both;

  /* ПК: тонкі лінії між колонками */
  ${(p) => p.$area !== "joke" && css`border-left: 1px solid ${divider(p)};`}

  @media ${TABLET_QUERY} {
    ${(p) => p.$area === "tip" && css`
      border-left: none;
      padding-bottom: 4px;
      border-bottom: 1px solid ${divider(p)};
    `}
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
  /* Майже немає місця під панеллю — текст не показуємо зовсім */
  @container (max-height: 36px) { visibility: hidden; }
`;

const Text = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.4;

  @media ${TABLET_QUERY} { font-size: 13px; }
  /* Низький рядок: ті самі 4 рядки, лише дрібніший і щільніший текст (4 × 15px + підпис вміщаються в ~76px) */
  @container (max-height: 84px) { font-size: 12px; line-height: 1.25; }
`;

// Дрібна підказка під фразами; ховається лише тоді, коли поруч не вміщаються навіть 2 рядки фраз
// (висота контейнера — без падінгів: рядок 86px дає ~68px, і підказка там має лишатися)
const Hint = styled.span`
  grid-area: hint;
  font-size: 10.5px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  opacity: 0.55;

  @container (max-height: 50px) { display: none; }
`;

export default FunTicker;
