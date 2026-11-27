import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaAnchor, FaAppleAlt, FaBell, FaBolt, FaCar, FaFish, FaLeaf, FaStar,
  FaCalculator, FaClone, FaSeedling, FaFire, FaTrophy, FaHeart, FaRedo, FaTimes, FaExchangeAlt,
  FaCheck, FaMedal, FaUserSecret, FaArrowRight, FaShieldAlt, FaGift } from "react-icons/fa";
import { makeTask, shuffle } from "./mathTasks.js";
import dominoAvatar from "../../media/characters/domino-avatar.webp";
import kateAvatar from "../../media/characters/kate-watering-plant.webp";

// Офлайн-ігри: код входить у сайт, тож на вже відкритій сторінці інтернет не потрібен.
// Імпортуються звичайним (не lazy) імпортом — інакше без мережі чанк не завантажився б
const Board = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* safe: у низькому фреймі верх не обрізається, а вміст прокручується */
  justify-content: safe center;
  gap: 14px;
  padding: 44px 12px 16px;
  box-sizing: border-box;
  overflow: auto;
  background: linear-gradient(135deg, #14233d, #3a2058);
  color: #ffffff;
  text-align: center;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 72px;
  padding: 10px 18px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  background: ${(p) => p.$bg || "rgba(255,255,255,0.1)"};
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover { transform: translateY(-2px); }
  &:focus-visible { outline: 2px solid #ffb36c; outline-offset: 2px; }
  &[aria-pressed="true"] { background: #ffb36c; border-color: #ffb36c; color: #1a0800; }
`;

// Перемикач із двох кнопок в одній капсулі
const Tabs = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.28);

  button { border-color: transparent; border-radius: 999px; background: transparent; }
  button:hover { transform: none; background: rgba(255, 255, 255, 0.1); }
  button[aria-pressed="true"] { background: #ffb36c; }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: min(100%, 520px);
  padding: 20px 14px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const Answers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 8px;
  width: 100%;

  button { padding: 14px 8px; font-size: 18px; direction: ltr; }
`;

const Stat = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.28);
  font-weight: 700;

  svg { color: #ffd166; }
`;

const Question = styled.div`
  font-size: clamp(22px, 7vw, 34px);
  white-space: pre-wrap;
  font-weight: 800;
  direction: ltr;
`;

const Signature = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  opacity: 0.75;

  svg { color: #ff7a8a; }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 56px);
  gap: 8px;
`;

const Card = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: ${(p) => (p.$open ? "#ffffff" : "rgba(255,255,255,0.14)")};
  color: #3a2058;
  font-size: 24px;
  cursor: pointer;
`;

// Сюжет: скільки правильних поспіль → хто озивається. Після останнього гра починається спочатку
const STORY = {
  10: { id: "domino", image: dominoAvatar },
  20: { id: "kate", image: kateAvatar },
  50: { id: "kornis", Icon: FaUserSecret, isEnd: true },
};
const PRAISE_MS = 900;
const SHIELD_EVERY = 5;
const RECORD_KEY = "styxia_trainer_record";

// Поточна серія теж зберігається: кінець ігрового часу чи перезавантаження її не скидають
const STREAK_KEY = "styxia_trainer_streak";

const readLevels = (key) => {
  try {
    return { easy: 0, hard: 0, ...JSON.parse(localStorage.getItem(key)) };
  } catch {
    return { easy: 0, hard: 0 };
  }
};

const saveLevels = (key, values) => {
  try {
    localStorage.setItem(key, JSON.stringify(values));
  } catch {
    /* без сховища значення живуть до перезавантаження */
  }
};

const Praise = styled.div`
  min-height: 22px;
  color: #7dffa8;
  font-weight: 800;
`;

const Bonus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  background: #ffd166;
  color: #2a1a00;
  font-size: 13px;
  font-weight: 800;
`;

const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img, > svg {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ffb36c;
  }
  > svg { box-sizing: border-box; padding: 18px; background: rgba(0, 0, 0, 0.4); }
  strong { font-size: 18px; color: #ffb36c; }
  p { margin: 0; line-height: 1.5; }
`;

const MathGame = () => {
  const { t, i18n } = useTranslation();
  const sep = (1.5).toLocaleString(i18n.resolvedLanguage || i18n.language).includes(",") ? "," : ".";
  const [streaks, setStreaks] = useState(() => readLevels(STREAK_KEY));
  // Відкриваємо той рівень, на якому людина зупинилась
  const [level, setLevel] = useState(() => (readLevels(STREAK_KEY).level === "hard" ? "hard" : "easy"));
  const score = streaks[level];
  const [task, setTask] = useState(() => makeTask(level, score, sep));
  const [wrong, setWrong] = useState(null);
  const [isPraised, setIsPraised] = useState(false);
  // Якщо перервались саме на репліці сюжету — показуємо її знову
  const [story, setStory] = useState(() => STORY[score] || null);
  const [records, setRecords] = useState(() => readLevels(RECORD_KEY));

  const setScore = (value) => setStreaks((all) => ({ ...all, [level]: value }));

  // Імунітет — один про запас; зберігається разом із серією
  const [hasShield, setHasShield] = useState(() => readLevels(STREAK_KEY).shield === true);
  const [isRescued, setIsRescued] = useState(false);
  // Поки імунітет уже є, замість другого пропонуємо подвійні бали
  const bonus = task.bonus === "shield" && hasShield ? "double" : task.bonus;

  useEffect(() => {
    saveLevels(STREAK_KEY, { ...streaks, level, shield: hasShield });
  }, [streaks, level, hasShield]);

  // Мить показуємо зелену відповідь і похвалу, а тоді — сюжет або наступний приклад
  useEffect(() => {
    if (!isPraised) return undefined;
    const timer = setTimeout(() => {
      setIsPraised(false);
      if (STORY[score]) setStory(STORY[score]);
      else setTask(makeTask(level, score, sep));
    }, PRAISE_MS);
    return () => clearTimeout(timer);
  }, [isPraised, score, level, sep]);

  const choose = (value) => {
    if (isPraised) return;
    if (value !== task.answer) {
      setWrong(value);
      // Бонус дається лише за відповідь з першої спроби
      setTask({ ...task, bonus: null });
      setIsRescued(hasShield);
      if (hasShield) setHasShield(false);
      else setScore(0);
      return;
    }
    const raised = score + (bonus === "double" ? 2 : 1);
    // Подвійні бали не перестрибують репліку сюжету
    const milestone = Object.keys(STORY).map(Number).find((point) => point > score && point <= raised);
    const next = milestone || raised;
    // Імунітет — за складну тему з таким бонусом і за кожні 5 правильних поспіль (запас — один)
    if (bonus === "shield" || Math.floor(next / SHIELD_EVERY) > Math.floor(score / SHIELD_EVERY)) setHasShield(true);
    setIsRescued(false);
    setScore(next);
    setWrong(null);
    setIsPraised(true);
    if (next > records[level]) {
      const updated = { ...records, [level]: next };
      setRecords(updated);
      saveLevels(RECORD_KEY, updated);
    }
  };

  // У кожного рівня своя серія, перемикання її не скидає
  const changeLevel = (next) => {
    if (next === level) return;
    setLevel(next);
    setTask(makeTask(next, streaks[next], sep));
    setStory(STORY[streaks[next]] || null);
    setWrong(null);
    setIsPraised(false);
    setIsRescued(false);
  };

  const continueStory = () => {
    const next = story.isEnd ? 0 : score;
    setScore(next);
    setStory(null);
    setTask(makeTask(level, next, sep));
  };

  return (
    <>
      <Tabs>
        {[["easy", FaSeedling], ["hard", FaFire]].map(([id, Icon]) => (
          <Button key={id} type="button" aria-pressed={level === id} onClick={() => changeLevel(id)}>
            <Icon aria-hidden="true" />
            {t(`climateMap.games.${id}`)}
          </Button>
        ))}
      </Tabs>
      <Panel>
        {story ? (
          <>
            <Speaker role="status">
              {story.image ? <img src={story.image} alt="" /> : <story.Icon aria-hidden="true" />}
              <strong>{t(`climateMap.story.${story.id}Name`)}</strong>
              <p>{t(`climateMap.story.${story.id}`)}</p>
            </Speaker>
            <Button type="button" onClick={continueStory}>
              {story.isEnd ? <FaRedo aria-hidden="true" /> : <FaArrowRight aria-hidden="true" />}
              {t(`climateMap.story.${story.isEnd ? "restart" : "next"}`)}
            </Button>
          </>
        ) : (
          <>
            {bonus && (
              <Bonus>
                {bonus === "shield" ? <FaShieldAlt aria-hidden="true" /> : <FaGift aria-hidden="true" />}
                {t(`climateMap.story.${bonus}`)}
              </Bonus>
            )}
            <Question>{task.text}</Question>
            <Answers>
              {task.options.map((value) => {
                const isRight = isPraised && value === task.answer;
                return (
                  <Button
                    key={value}
                    type="button"
                    $bg={isRight ? "#1f9d55" : value === wrong ? "#a83232" : undefined}
                    onClick={() => choose(value)}
                  >
                    {isRight && <FaCheck aria-hidden="true" />}
                    {value === wrong && <FaTimes aria-hidden="true" />}
                    {value}
                  </Button>
                );
              })}
            </Answers>
            <Praise aria-live="polite">
              {isPraised && t(`climateMap.story.praise${(score % 3) + 1}`)}
              {isRescued && t("climateMap.story.rescued")}
            </Praise>
          </>
        )}
        <Row>
          <Stat><FaTrophy aria-hidden="true" />{t("climateMap.games.score")}: {score}</Stat>
          <Stat><FaMedal aria-hidden="true" />{t("climateMap.story.record")}: {records[level]}</Stat>
          {hasShield && <Stat><FaShieldAlt aria-hidden="true" />{t("climateMap.story.hasShield")}</Stat>}
        </Row>
      </Panel>
    </>
  );
};

const PAIR_ICONS = [FaAnchor, FaAppleAlt, FaBell, FaBolt, FaCar, FaFish, FaLeaf, FaStar];
const makeDeck = () => shuffle([...PAIR_ICONS.keys(), ...PAIR_ICONS.keys()]);

const PairsGame = () => {
  const { t } = useTranslation();
  const [deck, setDeck] = useState(makeDeck);
  const [open, setOpen] = useState([]);
  const [found, setFound] = useState([]);
  const [moves, setMoves] = useState(0);

  // Дві відкриті картки: збіг лишаємо, інакше за мить закриваємо
  useEffect(() => {
    if (open.length !== 2) return undefined;
    const [first, second] = open;
    const match = deck[first] === deck[second];
    const timer = setTimeout(() => {
      if (match) setFound((list) => [...list, deck[first]]);
      setOpen([]);
    }, match ? 250 : 800);
    return () => clearTimeout(timer);
  }, [open, deck]);

  const flip = (index) => {
    if (open.length === 2 || open.includes(index) || found.includes(deck[index])) return;
    if (open.length === 1) setMoves((m) => m + 1);
    setOpen([...open, index]);
  };

  const restart = () => {
    setDeck(makeDeck());
    setOpen([]);
    setFound([]);
    setMoves(0);
  };

  return (
    <Panel>
      <Cards>
        {deck.map((icon, index) => {
          const isOpen = open.includes(index) || found.includes(icon);
          const Icon = PAIR_ICONS[icon];
          return (
            <Card key={index} type="button" $open={isOpen} aria-label={`${index + 1}`} onClick={() => flip(index)}>
              {isOpen && <Icon aria-hidden="true" />}
            </Card>
          );
        })}
      </Cards>
      <Stat aria-live="polite">
        {found.length === PAIR_ICONS.length ? <FaTrophy aria-hidden="true" /> : <FaExchangeAlt aria-hidden="true" />}
        {t("climateMap.games.moves")}: {moves}
        {found.length === PAIR_ICONS.length && ` · ${t("climateMap.games.win")}`}
      </Stat>
      <Button type="button" onClick={restart}><FaRedo aria-hidden="true" />{t("climateMap.games.again")}</Button>
    </Panel>
  );
};

const OfflineGames = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState("math");
  return (
    <Board>
      <Tabs>
        {[["math", FaCalculator], ["pairs", FaClone]].map(([id, Icon]) => (
          <Button key={id} type="button" aria-pressed={game === id} onClick={() => setGame(id)}>
            <Icon aria-hidden="true" />
            {t(`climateMap.games.${id}`)}
          </Button>
        ))}
      </Tabs>
      {game === "math" ? <MathGame /> : <PairsGame />}
      <Signature>{t("climateMap.games.madeWith")}<FaHeart aria-hidden="true" /></Signature>
    </Board>
  );
};

export default OfflineGames;
