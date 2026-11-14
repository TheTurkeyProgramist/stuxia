import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiX, FiCheck, FiMinus, FiChevronDown } from "react-icons/fi";
import { useAnimationsDisabled } from "../../utils/animationsPref.js";

// Модалка «Чому треба обрати нас?» — чесне порівняння Стихії з іншими сервісами

const pop = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.72);
`;

const Box = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "#ffffff" : "#142326")};
  background: ${({ $isDarkMode }) => ($isDarkMode ? "#12343a" : "#fff6c4")};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  animation: ${pop} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px clamp(16px, 3vw, 28px) 10px;
`;

const Title = styled.h2`
  flex: 1;
  margin: 0;
  font-size: 22px;
`;

const CloseButton = styled.button`
  display: inline-grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(127, 127, 127, 0.35);
  background: transparent;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(220, 60, 60, 0.85);
    color: #ffffff;
    transform: rotate(90deg);
  }
  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: 2px;
  }
`;

const Body = styled.div`
  overflow-y: auto;
  padding: 0 clamp(16px, 3vw, 28px) 24px;
  font-size: 14px;
  line-height: 1.55;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(127, 127, 127, 0.4);
    border-radius: 10px;
  }
`;

const Lead = styled.p`
  margin: 0 0 14px;
  opacity: 0.85;
`;

// На вузьких екранах таблиця на 4 колонки не влазить — показуємо картки
const MOBILE = "@media (max-width: 600px)";

const TableWrap = styled.div`
  overflow-x: auto;

  ${MOBILE} {
    display: none;
  }
  border-radius: 10px;
  border: 1px solid
    ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(90, 230, 216, 0.25)" : "rgba(23, 67, 72, 0.2)"};
`;

const Table = styled.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;

  th,
  td {
    padding: 9px 12px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid
      ${({ $isDarkMode }) =>
        $isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
  }
  thead th {
    position: sticky;
    top: 0;
    font-size: 13px;
    background: ${({ $isDarkMode }) => ($isDarkMode ? "#0d272c" : "#ffe679")};
  }
  tbody tr:last-child td {
    border-bottom: none;
  }
  td:first-child {
    font-weight: 600;
  }
  th:nth-child(2),
  td:nth-child(2) {
    background: ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(81, 230, 213, 0.08)" : "rgba(23, 67, 72, 0.06)"};
  }
`;

const Mark = styled.span`
  display: inline-flex;
  align-items: flex-start;
  gap: 6px;
  color: ${({ $kind, $isDarkMode }) =>
    $kind === "yes"
      ? $isDarkMode
        ? "#6ff0b0"
        : "#14794a"
      : $kind === "no"
        ? $isDarkMode
          ? "#ff9a9a"
          : "#b42323"
        : $isDarkMode
          ? "#ffd27a"
          : "#8a5a00"};

  svg {
    flex: 0 0 auto;
    margin-top: 3px;
  }
`;

const CardList = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;

  ${MOBILE} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Card = styled.li`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid
    ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(90, 230, 216, 0.25)" : "rgba(23, 67, 72, 0.2)"};
`;

const CardTitle = styled.h4`
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "#0d272c" : "#ffe679")};
`;

const CardRows = styled.dl`
  margin: 0;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: minmax(84px, 36%) 1fr;
  gap: 8px;
  padding: 7px 12px;
  background: ${({ $highlight, $isDarkMode }) =>
    $highlight
      ? $isDarkMode
        ? "rgba(81, 230, 213, 0.08)"
        : "rgba(23, 67, 72, 0.06)"
      : "transparent"};

  & + & {
    border-top: 1px solid
      ${({ $isDarkMode }) =>
        $isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
  }

  dt {
    font-size: 12px;
    opacity: 0.75;
    padding-top: 1px;
  }
  dd {
    margin: 0;
    min-width: 0;
    overflow-wrap: anywhere;
  }
`;

const COLUMNS = [
  { key: "us", label: "Стихія" },
  { key: "weather", label: "Погодні сайти" },
  { key: "news", label: "Новинні агрегатори" },
];

// Плавне згортання/розгортання порівняння
const DURATION = "0.5s";
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const PEEK = 36; // скільки px наступного рядка видно (у зникненні) в згорнутому стані

const ShowAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px dashed
    ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(90, 230, 216, 0.45)" : "rgba(23, 67, 72, 0.4)"};
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  svg {
    flex: 0 0 auto;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    transition: transform ${DURATION} ${EASE};
  }

  &:hover {
    background: ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(81, 230, 213, 0.1)" : "rgba(23, 67, 72, 0.08)"};
  }
  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: 2px;
  }

  ${({ $noAnim }) =>
    $noAnim ? "&, svg { transition: none; }" : ""}

  @media (prefers-reduced-motion: reduce) {
    &,
    svg {
      transition: none;
    }
  }
`;

const Collapse = styled.div`
  overflow: hidden;
  transition: height ${DURATION} ${EASE},
    -webkit-mask-size ${DURATION} ${EASE}, mask-size ${DURATION} ${EASE};
  /* Низ м'яко зникає, поки порівняння згорнуте. Розгорнуте — градієнт
     виїжджає за межі блока (mask-size більший), тож усе видно повністю. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 calc(100% - ${PEEK}px),
    transparent
  );
  mask-image: linear-gradient(to bottom, #000 calc(100% - ${PEEK}px), transparent);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100%
    ${({ $faded }) => ($faded ? "100%" : `calc(100% + ${PEEK}px)`)};
  mask-size: 100%
    ${({ $faded }) => ($faded ? "100%" : `calc(100% + ${PEEK}px)`)};

  ${({ $noAnim }) => ($noAnim ? "transition: none;" : "")}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// position: relative — щоб offsetTop рядків і карток рахувався від нього
const CollapseInner = styled.div`
  position: relative;
`;

const SectionTitle = styled.h3`
  margin: 22px 0 8px;
  font-size: 17px;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 20px;

  li + li {
    margin-top: 4px;
  }
`;

// yes — є, no — немає, part — частково / залежить.
// Перші TOP_ROWS рядків — найсильніші відмінності плюс один чесний мінус
// (iPhone), щоб таблиця з першого погляду не виглядала рекламою; їх видно одразу;
// решта ховається під кнопкою «Показати все порівняння».
const TOP_ROWS = 8;

const ROWS = [
  {
    feature: "Реклама",
    us: ["yes", "Немає взагалі"],
    weather: ["no", "Зазвичай є банери або відео"],
    news: ["no", "Зазвичай є, часто багато"],
  },
  {
    feature: "Кілька карток погоди одночасно безкоштовно",
    us: ["yes", "Так, без підписки"],
    weather: ["part", "Зазвичай одне місто, більше — платно"],
    news: ["no", "—"],
  },
  {
    feature: "Фільтр токсичного контенту в новинах",
    us: ["yes", "Так, з віковими рівнями"],
    weather: ["no", "—"],
    news: ["part", "Рідко налаштовується"],
  },
  {
    feature: "Працює без інтернету",
    us: ["yes", "Так, показує останній прогноз"],
    weather: ["part", "У деяких, так"],
    news: ["part", "У деяких, так"],
  },
  {
    feature: "Кілька кліматичних карт",
    us: ["yes", "Windy, Ventusky, тривоги, DeepState, авіарадар, свої фрейми"],
    weather: ["part", "Одна власна карта"],
    news: ["no", "—"],
  },
  {
    feature: "Платні підписки",
    us: ["yes", "Немає — усе безкоштовно"],
    weather: ["part", "Часто «Преміум» без реклами"],
    news: ["part", "Буває платний доступ до статей"],
  },
  {
    feature: "Відкритий код",
    us: ["yes", "Так, AGPL-3.0 на GitHub"],
    weather: ["no", "Рідко"],
    news: ["no", "Рідко"],
  },
  {
    feature: "Застосунок для iPhone з App Store",
    us: ["no", "Поки немає (у планах), є «На екран Додому»"],
    weather: ["yes", "Зазвичай є"],
    news: ["yes", "Зазвичай є"],
  },
  // ——— далі — під кнопкою «Показати все порівняння» ———
  {
    feature: "Власні джерела новин (RSS, YouTube, Telegram, Mastodon…)",
    us: ["yes", "До 10 своїх джерел"],
    weather: ["no", "—"],
    news: ["part", "Залежить від сервісу"],
  },
  {
    feature: "Термінові новини та push-сповіщення",
    // Коли запрацює push (ключ Turnstile + деплой функцій) — змінити на
    // ["yes", "Позначка «Терміново» і push навіть із закритим сайтом (iPhone — з екрана «Додому»)"]
    us: ["part", "Позначка «Терміново» і сповіщення, поки Стихія відкрита"],
    weather: ["part", "Попередження про погоду, зазвичай у застосунку"],
    news: ["yes", "Push навіть із закритим застосунком"],
  },
  {
    feature: "Персональні рекомендації",
    us: ["yes", "Обрані теми + ваші кліки, дані лише на пристрої"],
    weather: ["no", "—"],
    news: ["yes", "Так, але профіль зберігається на серверах сервісу"],
  },
  {
    feature: "Попередження про небезпечну погоду",
    us: ["part", "Мітки біля міст за власними порогами прогнозу, не офіційні попередження синоптиків"],
    weather: ["yes", "Так"],
    news: ["no", "—"],
  },
  {
    feature: "ШІ-помічник",
    us: ["part", "Так, але потрібен свій ключ Gemini"],
    weather: ["no", "Рідко"],
    news: ["part", "Іноді, часто платно"],
  },
  {
    feature: "Персоналізація вигляду (теми, фони, порядок секцій)",
    us: ["yes", "Дуже гнучка"],
    weather: ["part", "Мінімальна"],
    news: ["part", "Мінімальна"],
  },
  {
    feature: "Синхронізація між пристроями",
    us: ["part", "Так, з акаунтом, але є денні ліміти"],
    weather: ["part", "Зазвичай лише в застосунку з акаунтом"],
    news: ["part", "Залежить від сервісу"],
  },
  {
    feature: "Вбудований музичний плеєр",
    us: ["part", "Так, але це підбірка автора, а не повний каталог"],
    weather: ["no", "—"],
    news: ["no", "—"],
  },
  {
    feature: "Мови інтерфейсу",
    us: ["part", "25+ мов основного інтерфейсу; довідка й більшість налаштувань — лише українською"],
    weather: ["part", "Зазвичай кілька"],
    news: ["part", "Часто одна-дві"],
  },
  {
    feature: "Застосунки для Windows, Linux та Android",
    us: ["yes", "Так, усі три"],
    weather: ["part", "Зазвичай лише мобільні"],
    news: ["part", "Зазвичай лише мобільні"],
  },
  {
    feature: "Віджети на екрані телефона",
    us: ["no", "Немає"],
    weather: ["yes", "Зазвичай є"],
    news: ["part", "У деяких"],
  },
  {
    feature: "Простота для новачків",
    us: ["part", "Багато налаштувань, треба час, щоб розібратися"],
    weather: ["yes", "Зазвичай прості"],
    news: ["yes", "Зазвичай прості"],
  },
  {
    feature: "Власна метеомодель / команда синоптиків",
    us: ["no", "Ні, дані з Open-Meteo"],
    weather: ["part", "У великих сервісів є"],
    news: ["no", "—"],
  },
  {
    feature: "Вікові обмеження",
    // 22+ — бо вимкнений фільтр показує казино та ставки (GAMBLING_MIN_AGE в ageGate.js)
    us: ["part", "Акаунт — від 14, ШІ — від 18, вимкнення деяких напрямків фільтру новин — від 22"],
    weather: ["yes", "Зазвичай немає"],
    news: ["part", "Залежить від сервісу"],
  },
  {
    feature: "Швидкість на слабких пристроях",
    us: ["part", "Важчий через багато функцій"],
    weather: ["yes", "Зазвичай легкі"],
    news: ["part", "Залежить від кількості реклами"],
  },
  {
    feature: "Команда розробників",
    us: ["part", "Одна людина, оновлення повільніші"],
    weather: ["yes", "Зазвичай команда"],
    news: ["yes", "Зазвичай команда"],
  },
];

const ADVANTAGES = [
  "Без реклами, підписок і продажу ваших даних.",
  "Погода, безпечні новини, музика та корисні інструменти — на одній сторінці.",
  "Ключі ШІ та чати зберігаються лише у вашому браузері.",
  "Сайт можна «зібрати під себе»: теми, фони, порядок і видимість секцій.",
  "Є версії для Windows, Linux та Android.",
  "Відкритий код під ліцензією AGPL-3.0 — кожен може перевірити, що відбувається з даними.",
  "Основний інтерфейс перекладено понад 25 мовами.",
  "Дбаємо про доступність: можна вимкнути анімації та розмиття, а на слабких пристроях це відбувається автоматично.",
  "Режим Декоратора дозволяє додати власний CSS і змінити сайт до дрібниць.",
  "Акаунт необов'язковий, але з ним картки погоди, тема й фільтр новин синхронізуються між пристроями.",
  "Вбудований музичний плеєр із підбіркою пісень і відео.",
];

// Лише головні недоліки. Дрібніші (ліміти Firebase, помилки фільтра, складні
// налаштування) описані в довідці: «Чесні обмеження Стихії» у faqData.json.
const DISADVANTAGES = [
  "Немає застосунку в App Store — на iPhone/iPad лише через Safari → «На екран Додому».",
  "Немає власної метеомоделі: прогноз береться з Open-Meteo, тож якщо цей сервіс недоступний, свіжих даних не буде.",
  "ШІ працює лише з вашим власним ключем Gemini (з 18 років).",
  "Проєкт розвиває одна людина, тож оновлення можуть виходити повільніше.",
  "Через велику кількість функцій сайт важчий за звичайний погодний — на старих пристроях може працювати повільніше.",
];

const MarkCell = ({ value, isDarkMode }) => {
  const [kind, text] = value;
  const Icon = kind === "yes" ? FiCheck : kind === "no" ? FiX : FiMinus;
  return (
    <Mark $kind={kind} $isDarkMode={isDarkMode}>
      <Icon aria-hidden="true" />
      <span>{text}</span>
    </Mark>
  );
};

// Відстань від node до ancestor через offsetTop — на неї не впливає transform
// (модалка з'являється з scale, і getBoundingClientRect дав би хибні числа)
const offsetWithin = (node, ancestor) => {
  let y = 0;
  let n = node;
  while (n && n !== ancestor) {
    y += n.offsetTop;
    n = n.offsetParent;
  }
  return n === ancestor ? y : null;
};

const WhyUsModal = ({ onClose, isDarkMode, backdropProps }) => {
  const [showAll, setShowAll] = useState(false);
  const [heights, setHeights] = useState(null); // { collapsed, full }
  const bodyRef = useRef(null);
  const innerRef = useRef(null);
  const animationsDisabled = useAnimationsDisabled();
  const hiddenCount = ROWS.length - TOP_ROWS;

  // Усі рядки завжди в DOM; анімуємо лише висоту контейнера між
  // «до кінця TOP_ROWS-го рядка + краєчок наступного» і повною висотою.
  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return undefined;
    const measure = () => {
      // Видима лише таблиця (ПК) або картки (телефон) — беремо ту, що на екрані
      const last = [
        ...inner.querySelectorAll(`[data-row="${TOP_ROWS - 1}"]`),
      ].find((n) => n.offsetParent !== null);
      const bottom = last ? offsetWithin(last, inner) : null;
      if (bottom == null) return;
      const full = inner.offsetHeight;
      const collapsed = Math.min(full, bottom + last.offsetHeight + PEEK);
      setHeights((h) =>
        h && h.full === full && h.collapsed === collapsed
          ? h
          : { full, collapsed },
      );
    };
    measure();
    if (typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  const toggle = () => {
    const body = bodyRef.current;
    // Згортаємо разом із прокруткою вгору, щоб кнопка лишалася під пальцем,
    // а не «стрибала» до інших розділів
    if (showAll && body && heights) {
      const delta = Math.min(body.scrollTop, heights.full - heights.collapsed);
      if (delta > 0) {
        const reduce =
          animationsDisabled ||
          window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        body.scrollBy({ top: -delta, behavior: reduce ? "auto" : "smooth" });
      }
    }
    setShowAll((v) => !v);
  };

  const height = heights
    ? `${showAll ? heights.full : heights.collapsed}px`
    : undefined;

  return (
  <Backdrop {...backdropProps}>
    <Box
      $isDarkMode={isDarkMode}
      role="dialog"
      aria-modal="true"
      aria-labelledby="why-us-title"
      onClick={(e) => e.stopPropagation()}
    >
      <Header>
        <Title id="why-us-title">Чому треба обрати нас?</Title>
        <CloseButton
          type="button"
          aria-label="Закрити"
          title="Закрити (Esc)"
          onClick={onClose}
        >
          <FiX aria-hidden="true" />
        </CloseButton>
      </Header>
      <Body ref={bodyRef}>
        <Lead>
          Чесне порівняння Стихії з типовими погодними сайтами та новинними
          агрегаторами — з перевагами і недоліками.
        </Lead>
        <Collapse
          style={{ height }}
          $faded={!showAll && hiddenCount > 0}
          $noAnim={animationsDisabled}
        >
        <CollapseInner ref={innerRef}>
        <TableWrap id="why-us-table" $isDarkMode={isDarkMode}>
          <Table $isDarkMode={isDarkMode}>
            <thead>
              <tr>
                <th scope="col">Можливість</th>
                <th scope="col">Стихія</th>
                <th scope="col">Погодні сайти</th>
                <th scope="col">Новинні агрегатори</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  data-row={i}
                  aria-hidden={!showAll && i >= TOP_ROWS ? true : undefined}
                >
                  <td>{row.feature}</td>
                  <td>
                    <MarkCell value={row.us} isDarkMode={isDarkMode} />
                  </td>
                  <td>
                    <MarkCell value={row.weather} isDarkMode={isDarkMode} />
                  </td>
                  <td>
                    <MarkCell value={row.news} isDarkMode={isDarkMode} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>

        <CardList id="why-us-comparison">
          {ROWS.map((row, i) => (
            <Card
              key={row.feature}
              data-row={i}
              aria-hidden={!showAll && i >= TOP_ROWS ? true : undefined}
              $isDarkMode={isDarkMode}
            >
              <CardTitle $isDarkMode={isDarkMode}>{row.feature}</CardTitle>
              <CardRows>
                {COLUMNS.map((col) => (
                  <CardRow
                    key={col.key}
                    $highlight={col.key === "us"}
                    $isDarkMode={isDarkMode}
                  >
                    <dt>{col.label}</dt>
                    <dd>
                      <MarkCell value={row[col.key]} isDarkMode={isDarkMode} />
                    </dd>
                  </CardRow>
                ))}
              </CardRows>
            </Card>
          ))}
        </CardList>
        </CollapseInner>
        </Collapse>

        {hiddenCount > 0 && (
          <ShowAllButton
            type="button"
            $isDarkMode={isDarkMode}
            $open={showAll}
            $noAnim={animationsDisabled}
            aria-expanded={showAll}
            aria-controls="why-us-table why-us-comparison"
            onClick={toggle}
          >
            <FiChevronDown aria-hidden="true" />
            {showAll
              ? "Згорнути порівняння"
              : `Показати всі порівняння (ще ${hiddenCount})`}
          </ShowAllButton>
        )}

        <SectionTitle>Переваги Стихії</SectionTitle>
        <List>
          {ADVANTAGES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>

        <SectionTitle>Чесні недоліки</SectionTitle>
        <List>
          {DISADVANTAGES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      </Body>
    </Box>
  </Backdrop>
  );
};

export default WhyUsModal;
