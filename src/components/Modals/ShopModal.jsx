import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect, useRef, useCallback, forwardRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { SiRedragon, SiDungeonsanddragons } from "react-icons/si";
import { GiSpikedDragonHead } from "react-icons/gi";
import shop from '../../media/backgrounds/scenes/turkey-in-dragon-museum.webp';
import SupportCosts from "../Support/SupportCosts.jsx";
import { DONATE_URL } from "../Support/supportConfig";
import {
  inviteLink,
  shareInvite,
  countMyInvites,
  isInviter,
  rememberInviter,
  readInviteeStatus,
  BADGES,
  INVITES_FOR_BADGE,
  INVITE_ACTIVE_DAYS,
  INVITE_WINDOW_DAYS,
} from "../../utils/referral.js";

const CLOSE_DURATION_MS = 500;

const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 2000;
`;

const BRICK_TILE = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='72'><rect width='64' height='72' fill='#6b574d'/><path d='M0 1.5H64M0 37.5H64M32 0V36M0 36V72M64 36V72' fill='none' stroke='#2b1a16' stroke-width='3'/></svg>"
)}")`;

const MODAL_MAX_WIDTH = "1100px";
const MERLON_HEIGHT = "32px";

const SideTower = styled.div`
  display: none;
  position: absolute;
  top: ${MERLON_HEIGHT};
  bottom: 0;
  ${(props) => props.$side}: 0;
  width: calc((100vw - ${MODAL_MAX_WIDTH}) / 2);
  background-image: ${BRICK_TILE};
  background-size: 64px 72px;
  filter: brightness(0.5);
  box-shadow: inset ${(props) => (props.$side === "left" ? "-" : "")}24px 0 40px rgba(0, 0, 0, 0.6);
  pointer-events: none;

  /* зубці на вершині стіни */
  &::before {
    content: "";
    position: absolute;
    top: -${MERLON_HEIGHT};
    left: 0;
    right: 0;
    height: ${MERLON_HEIGHT};
    background-image: ${BRICK_TILE};
    background-size: 64px 72px;
    mask-image: repeating-linear-gradient(90deg, #000 0 40px, transparent 40px 72px);
  }

  /* бійниці */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 16px;
    transform: translateX(-50%);
    background: repeating-linear-gradient(
      180deg,
      transparent 0 120px,
      #1a0c0a 120px 200px,
      transparent 200px 360px
    );
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0 12px rgba(255, 190, 90, 0.35);
  }

  @media (min-width: 1250px) {
    display: block;
  }
`;

const ShopContainer = styled.div`
  background-color: #2b1313;
  background-image: url(${shop});
  background-size: cover;
  background-position: center;
  color: #fff;
  width: 100%;
  max-width: ${MODAL_MAX_WIDTH};
  z-index: 1;
  max-height: 95%;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} ${CLOSE_DURATION_MS}ms ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 1;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background: #000000cd;
  border: none;
  color: #ff6c6c;
  font-size: 15px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

const WALL_COLOR = "rgba(20, 8, 8, 0.82)";

const MERLON_PERIOD = 128;
const MERLON_WIDTH = 72;
const MERLON_COUNT = Math.ceil(1100 / MERLON_PERIOD);

const Battlements = styled.div`
  position: relative;
  height: 26px;
  background: repeating-linear-gradient(
    90deg,
    ${WALL_COLOR} 0 ${MERLON_WIDTH}px,
    transparent ${MERLON_WIDTH}px ${MERLON_PERIOD}px
  );
  border-bottom: 2px solid #ff6c6c;
  display: flex;
  width: 100%;
  min-width: 0;
  overflow-x: clip;
  overflow-y: visible;
  z-index: 2;
  margin-top: 56px;
`;

const MerlonSlot = styled.div`
  position: relative;
  flex: 0 0 ${MERLON_PERIOD}px;
  width: ${MERLON_PERIOD}px;
  height: 100%;
  pointer-events: none;
`;

// фігурка стоїть на зубці: низ іконки збігається з верхом зубця
const Mascot = styled.span`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: ${MERLON_WIDTH}px;
  display: flex;
  justify-content: center;
  color: ${WALL_COLOR};
  font-size: 52px;
  line-height: 0;
`;

const TurkeyIcon = (props) => (
  <svg viewBox="0 0 64 64" width="1em" height="1em" fill="currentColor" {...props}>
    {/* віяло хвоста: зубчасті пір'їни */}
    <path d="M24 5.5a5.5 5.5 0 0 0-5 3 5 5 0 0 0-5.500-.5 5 5 0 0 0-3.500 6 5 5 0 0 0-4 5.500 4.500 4.500 0 0 0-1.500 5.500 4 4 0 0 0-1.500 6 6 6 0 0 0 5.500 5.500H26V16c0-5-1.500-8-2-10.500z" />
    <path d="M24 5.500c-2 3-1.500 9 1 14l5 3.500V40l-9 2-1.500 4.500c3 1 8-1 12-2.500V22z" />
    {/* тулуб */}
    <ellipse cx="40" cy="32" rx="19" ry="14.500" />
    {/* шия, голова, дзьоб */}
    <path d="M52 10c-1 7 5 12 6 22" fill="none" stroke="currentColor" strokeWidth="6.500" strokeLinecap="round" />
    <circle cx="53" cy="9" r="5.800" />
    <path d="M57 8l5.500 3.200-5 1.200z" />
    <path d="M57 13l1.500 3.500 1-3z" />
    {/* ноги */}
    <path d="M35 44h1.800v11H35zM41 44h1.800v11H41zM32 55h8v2H32zM39 54.500h8.500l-2 2.500H39z" />
  </svg>
);

const MASCOTS = [
  { Icon: SiRedragon },
  { Icon: TurkeyIcon },
  { Icon: GiSpikedDragonHead },
  { Icon: TurkeyIcon },
  { Icon: SiDungeonsanddragons },
  { Icon: TurkeyIcon },
];

const FundsHeader = styled.div`
  padding: 10px 16px 8px;
  text-align: center;
  background: rgba(8, 28, 16, 0.88);
  border-bottom: 1px solid rgba(47, 191, 113, 0.6);
  scroll-margin-top: 20px;
`;

const FundsTitle = styled.h3`
  margin: 0 0 4px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  letter-spacing: 1px;
  color: #b8f5cf;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
`;

const FundsSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: #e6f7ec;
  opacity: 0.85;
`;

const FundDesc = styled.div`
  font-size: 12px;
  color: #f1e6e0;
  opacity: 0.85;
  text-align: center;
  max-width: 260px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

// Елементи в ряд, на вузькому екрані переносяться
const InlineRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  width: 100%;

  & > h2 {
    margin: 0;
    flex-shrink: 0;
  }
`;

const EcoJumpButton = styled.button`
  padding: 13px 16px;
  border-radius: 8px;
  border: 1px solid #b8f5cf;
  background: rgba(8, 28, 16, 0.85);
  color: #b8f5cf;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
  &:hover {
    transform: translateY(-1px);
    background: rgba(20, 60, 35, 0.9);
  }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const ShareButton = styled(EcoJumpButton)`
  border-color: #ffb3d1;
  color: #ffd6e6;
  background: rgba(40, 10, 28, 0.85);
  &:hover {
    background: rgba(70, 20, 50, 0.9);
  }
`;

// ───────────── «Запроси друга» ─────────────

const PINK = "#ffb3d1";
const PINK_SOFT = "rgba(255, 179, 209, 0.35)";

const InviteBox = styled.section`
  margin: 4px 10px 10px;
  padding: 12px 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(48, 12, 34, 0.92) 0%, rgba(26, 8, 22, 0.92) 100%);
  border: 1px solid ${PINK_SOFT};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  scroll-margin-top: 20px;
`;

// Вміст під заголовком (посилання, статус, умови) — розгортається плавно
const InviteContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 3px 3px; /* щоб рамка фокусу не обрізалась */
`;

const InviteChevron = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-size: 20px;
  line-height: 1;
  color: #ffd6e6;
  transition: transform 0.35s ease;
  transform: rotate(${(p) => (p.$open ? "90deg" : "0deg")});
`;

const InviteHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
  cursor: pointer;
`;

const InviteTitle = styled.h3`
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  font-weight: normal;
  color: #ffe3ee;

  /* заголовок — кнопка згортання (доступна з клавіатури) */
  button {
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  button:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

const InviteText = styled.p`
  margin: 2px 0 0;
  font-size: 12.5px;
  color: #f1d7e2;
  opacity: 0.85;
`;

const BadgePills = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #f1d7e2;
`;

const BadgePill = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid ${PINK_SOFT};
  background: rgba(0, 0, 0, 0.35);
  white-space: nowrap;
`;

// Посилання й кнопки — одне поле
const LinkGroup = styled.div`
  display: flex;
  align-items: stretch;
  border: 1px solid ${PINK_SOFT};
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.45);
  overflow: hidden;
  transition: border-color 0.15s ease;

  &:focus-within {
    border-color: ${PINK};
  }
`;

const InviteLinkInput = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  padding: 9px 12px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 13px;
  text-overflow: ellipsis;
  outline: none;
`;

const LinkAction = styled.button`
  flex-shrink: 0;
  padding: 0 14px;
  border: none;
  border-left: 1px solid ${PINK_SOFT};
  background: ${(p) => (p.$primary ? PINK : "transparent")};
  color: ${(p) => (p.$primary ? "#2b0f1f" : "#ffd6e6")};
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${(p) => (p.$primary ? "#ffc9de" : "rgba(255, 179, 209, 0.12)")};
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: -2px;
  }
`;

const InviteFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 10px;
  min-height: 26px;
`;

const InviteStatus = styled.div`
  flex: 1 1 200px;
  font-size: 12.5px;
  color: ${(p) => (p.$ok ? "#b8f5cf" : "#f1d7e2")};
  opacity: ${(p) => (p.$ok ? 1 : 0.85)};
`;

const RefreshButton = styled.button`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid ${PINK_SOFT};
  background: transparent;
  color: #ffd6e6;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.15s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 179, 209, 0.12);
    transform: rotate(90deg);
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// Крапки прогресу: ●●○
const Dots = styled.span`
  display: inline-flex;
  gap: 3px;
  margin-right: 6px;
  vertical-align: middle;

  i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid ${PINK};
  }
  i[data-on="true"] {
    background: ${PINK};
  }
`;

const ProgressDots = ({ value, total }) => (
  <Dots aria-hidden="true">
    {Array.from({ length: total }, (_, i) => (
      <i key={i} data-on={i < value} />
    ))}
  </Dots>
);

const RULES_ANIM_MS = 350;

const InviteRules = styled.div`
  font-size: 12.5px;
  line-height: 1.5;
  color: #f1d7e2;
  border-top: 1px solid rgba(255, 179, 209, 0.15);
  padding-top: 8px;
`;

const RulesToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-size: 12px;
  color: #ffd6e6;
  opacity: 0.75;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &::after {
    content: "›";
    display: inline-block;
    transition: transform ${RULES_ANIM_MS}ms ease;
    transform: rotate(${(p) => (p["aria-expanded"] ? "90deg" : "0deg")});
  }
  &:hover {
    opacity: 1;
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// Плавне розгортання: висота 0fr → 1fr + прозорість
const RulesCollapse = styled.div`
  display: grid;
  grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition:
    grid-template-rows ${RULES_ANIM_MS}ms ease,
    opacity ${RULES_ANIM_MS}ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const RulesInner = styled.div`
  overflow: hidden;
  min-height: 0;
  visibility: ${(p) => (p.$open ? "visible" : "hidden")};
  /* ховаємо від клавіатури й читачів екрана лише після завершення згортання */
  transition: visibility 0s linear ${(p) => (p.$open ? "0s" : `${RULES_ANIM_MS}ms`)};

  h4 {
    margin: 10px 0 4px;
    font-size: 12.5px;
    color: #ffe3ee;
  }
  ul, ol {
    margin: 0;
    padding-left: 18px;
  }
  li + li {
    margin-top: 2px;
  }
`;

const { supporter: B_SUP, inviter: B_INV, invitee: B_NEW } = BADGES;
const fmtDate = (ms) =>
  Number.isFinite(ms) ? new Date(ms).toLocaleDateString("uk-UA", { day: "numeric", month: "long" }) : "";

// Умови й опис значків — видно завжди, навіть без акаунта
const InviteRulesBlock = () => {
  const [open, setOpen] = useState(false);
  return (
    <InviteRules>
      <RulesToggle
        type="button"
        aria-expanded={open}
        aria-controls="invite-rules"
        onClick={() => setOpen((v) => !v)}
      >
        Умови та як це працює
      </RulesToggle>
      <RulesCollapse $open={open}>
        <RulesInner $open={open} id="invite-rules">

          <h4>Як отримати значки</h4>
          <ol>
            <li>Увійдіть в акаунт, і тут з'явиться ваше особисте посилання.</li>
            <li>Скопіюйте його або натисніть «Поділитися» і надішліть другові.</li>
            <li>Друг відкриває посилання і створює акаунт у Стихії (через Google або пошту).</li>
            <li>
              Друг заходить у Стихію {INVITE_ACTIVE_DAYS} різні дні протягом {INVITE_WINDOW_DAYS} днів
              від реєстрації. День реєстрації вже рахується як перший.
            </li>
            <li>
              Значки отримуєте обидва: ви {B_INV.emoji} «{B_INV.name}», друг {B_NEW.emoji} «{B_NEW.name}».
              Щоб побачити свій, відкрийте замок або натисніть ↻.
            </li>
          </ol>

          <h4>Коли друга зараховано</h4>
          <ul>
            <li>Акаунт новий: створений після переходу за вашим посиланням. Старі акаунти не рахуються.</li>
            <li>
              Друг створює акаунт протягом 30 днів після переходу і в тому самому браузері, де
              відкрив посилання.
            </li>
            <li>
              День зараховується, коли друг відкриває Стихію, увійшовши в акаунт. Один день
              рахується один раз, хоч скільки разів зайти. Підряд заходити не обов'язково.
            </li>
            <li>
              Доба рахується за світовим часом (UTC): у Києві нова доба для значка починається
              о 02:00 взимку й о 03:00 влітку.
            </li>
            <li>Анонімний вхід (без акаунта) не рахується.</li>
            <li>Кожну людину можна запросити лише один раз. Якщо друг відкрив кілька посилань, рахується перше.</li>
            <li>Запросити самого себе не можна.</li>
            <li>
              {INVITES_FOR_BADGE === 1
                ? "Для значка вистачить одного друга, який виконав умову."
                : `Для значка потрібно ${INVITES_FOR_BADGE} друзів, які виконали умову.`}
            </li>
          </ul>

          <h4>Усі значки Стихії</h4>
          <ul>
            <li>{B_SUP.emoji} «{B_SUP.name}»: за підтримку Стихії донатом.</li>
            <li>{B_INV.emoji} «{B_INV.name}»: за друга, якого ви привели.</li>
            <li>{B_NEW.emoji} «{B_NEW.name}»: для друга, який прийшов за запрошенням.</li>
          </ul>

          <h4>Про значки</h4>
          <ul>
            <li>Значки видно у вашому профілі (кнопка з аватаром угорі).</li>
            <li>Це просто подяка: значки не дають платних функцій і нічого не відкривають.</li>
            <li>Значок залишається з вами назавжди. На новому пристрої відкрийте замок, і він повернеться.</li>
            <li>Ми показуємо лише кількість друзів, а не їхні імена чи пошту.</li>
            <li>Якщо щось пішло не так, напишіть нам, і ми розберемося.</li>
          </ul>
        </RulesInner>
      </RulesCollapse>
    </InviteRules>
  );
};

// Короткий підсумок про друзів, які прийшли за посиланням
const invitesSummary = (stats) => {
  if (!stats.total) return "Поки що ніхто не прийшов за вашим посиланням";
  const parts = [`Друзів: ${stats.total}`, `виконали умову: ${stats.qualified}`];
  if (stats.inProgress.length) {
    parts.push(`набирають дні: ${stats.inProgress.map((d) => `${d}/${INVITE_ACTIVE_DAYS}`).join(", ")}`);
  }
  if (stats.expired) parts.push(`не встигли: ${stats.expired}`);
  return parts.join(" · ");
};

// Посилання, кнопки й прогрес — лише для акаунта
const InviteLinkBlock = ({ user, onUserUpdate }) => {
  const [stats, setStats] = useState(null);
  const [invitee, setInvitee] = useState(null);
  const [checking, setChecking] = useState(false);
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef(null);
  const inviterBadge = isInviter(user);
  const link = inviteLink(user.uid);

  const check = useCallback(async () => {
    setChecking(true);
    const [s, me] = await Promise.all([countMyInvites(user.uid), readInviteeStatus(user.uid)]);
    setChecking(false);
    setInvitee(me);
    setFailed(s === null);
    if (s === null) return;
    setStats(s);
    const patch = {};
    if (s.qualified >= INVITES_FOR_BADGE && !isInviter(user)) {
      rememberInviter(user.uid);
      Object.assign(patch, { isInviter: true, inviterSince: Date.now() });
    }
    if (me?.done && !user.isInvitee) Object.assign(patch, { isInvitee: true });
    if (Object.keys(patch).length) onUserUpdate?.({ ...user, ...patch });
  }, [user, onUserUpdate]);

  useEffect(() => {
    check();
  }, [user.uid]); // перевіряємо лише при відкритті / зміні акаунта

  useEffect(() => () => clearTimeout(copiedTimer.current), []);

  const flashCopied = () => {
    setCopied(true);
    clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      flashCopied();
    } catch {
      /* можна скопіювати вручну: поле виділяється при фокусі */
    }
  };

  const onShare = async () => {
    if ((await shareInvite(user.uid)) === "copied") flashCopied();
  };

  const canShare = typeof navigator !== "undefined" && !!navigator.share;

  let status;
  if (invitee && !invitee.done && !invitee.expired) {
    status = (
      <>
        <ProgressDots value={invitee.activeDays} total={INVITE_ACTIVE_DAYS} />
        Вас запросив друг: день {invitee.activeDays} з {INVITE_ACTIVE_DAYS}. Заходьте до{" "}
        {fmtDate(invitee.deadline)}
      </>
    );
  } else if (failed) {
    status = "Не вдалося перевірити запрошення";
  } else if (stats) {
    status = (
      <>
        {inviterBadge && `${B_INV.emoji} Ви — ${B_INV.name} · `}
        {invitee?.done && `${B_NEW.emoji} Ви — ${B_NEW.name} · `}
        {invitesSummary(stats)}
      </>
    );
  } else {
    status = "Перевіряємо…";
  }

  return (
    <>
      <LinkGroup>
        <InviteLinkInput
          readOnly
          value={link}
          onFocus={(e) => e.target.select()}
          aria-label="Ваше посилання-запрошення"
        />
        <LinkAction type="button" onClick={onCopy} aria-live="polite">
          {copied ? "Скопійовано ✓" : "Копіювати"}
        </LinkAction>
        {canShare && (
          <LinkAction type="button" $primary onClick={onShare}>
            Поділитися
          </LinkAction>
        )}
      </LinkGroup>
      <InviteFooter>
        <InviteStatus $ok={(inviterBadge || invitee?.done) && !failed} role="status">
          {status}
        </InviteStatus>
        <RefreshButton
          type="button"
          onClick={check}
          disabled={checking}
          aria-label="Оновити стан запрошень"
          title="Оновити"
        >
          ↻
        </RefreshButton>
      </InviteFooter>
    </>
  );
};

// Згорнутий блок показує лише заголовок і значки; клік по ньому розгортає решту.
// Вміст монтується при першому розгортанні — тоді ж і перевіряються запрошення.
const InvitePanel = forwardRef(({ user, onUserUpdate, open, onToggle }, ref) => {
  const [mounted, setMounted] = useState(open);
  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  return (
    <InviteBox ref={ref} id="invite-friend" aria-labelledby="invite-friend-title">
      <InviteHead onClick={onToggle}>
        <div>
          <InviteTitle>
            <button
              type="button"
              id="invite-friend-title"
              aria-expanded={open}
              aria-controls="invite-friend-content"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              🎁 Запроси друга
            </button>
          </InviteTitle>
          <InviteText>
            Друг заходить у Стихію {INVITE_ACTIVE_DAYS} дні, і значки отримуєте обидва
          </InviteText>
        </div>
        <BadgePills>
          <BadgePill title={`Вам: «${B_INV.name}»`}>{B_INV.emoji} {B_INV.name}</BadgePill>
          <BadgePill title={`Другу: «${B_NEW.name}»`}>{B_NEW.emoji} {B_NEW.name}</BadgePill>
          <InviteChevron $open={open} aria-hidden="true">›</InviteChevron>
        </BadgePills>
      </InviteHead>
      <RulesCollapse $open={open}>
        <RulesInner $open={open} id="invite-friend-content">
          {mounted && (
            <InviteContent>
              {user?.uid ? (
                <InviteLinkBlock user={user} onUserUpdate={onUserUpdate} />
              ) : (
                <InviteStatus>Увійдіть в акаунт (кнопка «Акаунт» угорі), щоб отримати своє посилання.</InviteStatus>
              )}
              <InviteRulesBlock />
            </InviteContent>
          )}
        </RulesInner>
      </RulesCollapse>
    </InviteBox>
  );
});
InvitePanel.displayName = "InvitePanel";

const FundList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FundRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  min-height: 0;
  border-bottom: 1px solid rgba(47, 191, 113, 0.45);
  border-right: 1px solid rgba(47, 191, 113, 0.2);
  background-color: ${WALL_COLOR};
  background-image:
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.06) 0 2px, transparent 2px 32px),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0 2px, transparent 2px 64px);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(20, 8, 8, 0.68);
  }
`;

const SupportCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 8px 10px 4px;
`;

const SupportBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 1 260px;
`;


// Маленький QR у ряду кнопок — щоб задонатити з телефона, дивлячись на комп'ютер
const QrBox = styled.a`
  display: block;
  padding: 4px;
  background: #fff;
  border-radius: 8px;
  line-height: 0;
  flex-shrink: 0;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.6);
    position: relative;
    z-index: 5;
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }

  /* на телефоні сканувати власний екран нема сенсу */
  @media (max-width: 600px) {
    display: none;
  }
`;

// Перший ряд не заходить під кнопку «Закрити»
const TopRow = styled(InlineRow)`
  padding-right: 90px;
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const FundName = styled.div`
  font-family: Georgia, "Times New Roman", serif;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkButton = styled.a`
  padding: 8px 16px;
  background: linear-gradient(135deg, #a124db 0%, #7b00ff 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    background: linear-gradient(135deg, #b53ee6 0%, #8f1aff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  ${(props) =>
    props.$eco &&
    css`
      padding: 10px 18px;
      font-size: 14px;
      background: linear-gradient(135deg, #2fbf71 0%, #149a52 100%);
      border-color: #b8f5cf;
      box-shadow: 0 4px 14px rgba(47, 191, 113, 0.35);

      &:hover {
        background: linear-gradient(135deg, #43d684 0%, #1bb362 100%);
        box-shadow: 0 6px 18px rgba(47, 191, 113, 0.5);
      }
    `}

  ${(props) =>
    props.$featured &&
    css`
      padding:13px 16px;
      font-size: 14px;
      color: #2b1313;
      background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
      border-color: #fff3c4;

      &:hover {
        background: linear-gradient(135deg, #ffe08f 0%, #ffb84d 100%);
      }
    `}
`;

const CharacterText = styled.div`
  color: #f8f1c6;
  font-size: 13px;
  font-style: italic;
  flex: 1 1 280px;
  background: rgba(0, 0, 0, 0.83);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`;

const AnimatedContent = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.4s ease-out;
`;


const funds = [
  {
    id: "uanimals",
    title: "Допомога тваринам",
    desc: "Рятують тварин, які постраждали від війни",
    buttonText: "Підтримати UAnimals",
    linkUrl: "https://uanimals.org/",
  },
  {
    id: "ecoaction",
    title: "Захист природи",
    desc: "Захищають довкілля і клімат України",
    buttonText: "Підтримати Екодію",
    linkUrl: "https://ecoaction.org.ua/",
  },
  {
    id: "happypaw",
    title: "Притулки для тварин",
    desc: "Допомагають безпритульним тваринам знайти дім",
    buttonText: "Підтримати Happy Paw",
    linkUrl: "https://happypaw.ua/",
  },
  {
    id: "tnc",
    title: "Охорона земель і вод",
    desc: "Бережуть землі й води по всьому світу",
    buttonText: "Підтримати Nature Conservancy",
    linkUrl: "https://www.nature.org/",
  },
  {
    id: "oceana",
    title: "Захист океанів",
    desc: "Захищають океани та морське життя",
    buttonText: "Підтримати Oceana",
    linkUrl: "https://oceana.org/",
  },
  {
    id: "rainforest",
    title: "Захист тропічних лісів",
    desc: "Бережуть тропічні ліси від вирубки",
    buttonText: "Підтримати Rainforest Trust",
    linkUrl: "https://rainforesttrust.org/",
  },
];

const TOWER_ROWS = Array.from({ length: 10 }, (_, r) => r);
const TOWER_COLS = Array.from({ length: 6 }, (_, c) => c);

const Tower = () => (
  <svg viewBox="0 0 100 160" width="90" height="144" aria-hidden="true" style={{ flexShrink: 0 }}>
    <defs>
      <clipPath id="tower-body">
        <rect x="20" y="30" width="60" height="120" />
      </clipPath>
    </defs>
    {[14, 34, 54, 74].map((x) => (
      <rect key={x} x={x} y="4" width="12" height="12" fill="#8a7468" stroke="#2b1a16" strokeWidth="1.5" />
    ))}
    <rect x="14" y="16" width="72" height="14" fill="#8a7468" stroke="#2b1a16" strokeWidth="1.5" />
    <rect x="20" y="30" width="60" height="120" fill="#7a665c" />
    <g clipPath="url(#tower-body)" fill="#7a665c" stroke="#2b1a16" strokeWidth="1">
      {TOWER_ROWS.map((r) =>
        TOWER_COLS.map((c) => (
          <rect
            key={`${r}-${c}`}
            x={20 + c * 15 - (r % 2 ? 7.5 : 0)}
            y={30 + r * 12}
            width="15"
            height="12"
          />
        ))
      )}
    </g>
    <rect x="43" y="56" width="14" height="24" fill="#1a0c0a" stroke="#2b1a16" strokeWidth="1.5" />
    <rect x="46" y="60" width="8" height="8" fill="#ffd36b" />
    <rect x="41" y="112" width="18" height="38" fill="#3a1d12" stroke="#2b1a16" strokeWidth="1.5" />
    <rect x="12" y="150" width="76" height="6" fill="#5a4840" stroke="#2b1a16" strokeWidth="1.5" />
  </svg>
);

const ShopModal = ({ onClose, user, onUserUpdate }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef(null);
  const inviteRef = useRef(null);
  const [inviteOpen, setInviteOpen] = useState(false);
  const fundsRef = useRef(null);

  const handleClose = useCallback(() => {
    if (timerRef.current) return;
    setIsClosing(true);
    timerRef.current = setTimeout(onClose, CLOSE_DURATION_MS);
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleClose]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <Overlay onClick={handleClose}>
      <SideTower $side="left" aria-hidden="true" />
      <SideTower $side="right" aria-hidden="true" />
      <ShopContainer
        role="dialog"
        aria-modal="true"
        aria-label="Замок Доміно"
        $isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
      >
          <CloseButton onClick={handleClose}>
            Закрити
          </CloseButton>
        <AnimatedContent>
          <SupportCard>
            <SupportBody>
              <TopRow>
                <CharacterText>
  Мене звати Доміно, у цьому замку я показую погоду. Вхід в Стихію - завжди відкритий!
  А якщо хочете, щоб світло в залі не згасало, ось банка.
</CharacterText>
              </TopRow>
              <InlineRow>
                <LinkButton href={DONATE_URL} target="_blank" rel="noopener noreferrer" $featured>
                  Підтримати Стихію
                </LinkButton>
                <QrBox
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="QR-код для підтримки Стихії"
                  title="Відскануйте телефоном, щоб підтримати Стихію"
                >
                  <QRCodeSVG value={DONATE_URL} size={42} />
                </QrBox>
                <EcoJumpButton
                  type="button"
                  onClick={() => fundsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  Або допомогти екофондам ↓
                </EcoJumpButton>
                <ShareButton
                  type="button"
                  onClick={() => {
                    setInviteOpen(true);
                    inviteRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  🎁 Поділитися — значок у подарунок ↓
                </ShareButton>
              </InlineRow>
            </SupportBody>
          </SupportCard>
          <SupportCosts user={user} onUserUpdate={onUserUpdate} />
          <InvitePanel
            ref={inviteRef}
            user={user}
            onUserUpdate={onUserUpdate}
            open={inviteOpen}
            onToggle={() => setInviteOpen((v) => !v)}
          />
          <Battlements>
            {Array.from({ length: MERLON_COUNT }, (_, i) => {
              const { Icon } = MASCOTS[i % MASCOTS.length];
              return (
                <MerlonSlot key={i}>
                  <Mascot aria-hidden="true">
                    <Icon />
                  </Mascot>
                </MerlonSlot>
              );
            })}
          </Battlements>
          <FundsHeader ref={fundsRef} id="eco-funds">
            <FundsTitle>Екологічні фонди</FundsTitle>
            <FundsSubtitle>
              Донат іде напряму фонду, не нам. Обирайте те, що вам близьке.
            </FundsSubtitle>
          </FundsHeader>
          <FundList>
            {funds.map((fund) => (
              <FundRow key={fund.id}>
                <RowContent>
                  <FundName>{fund.title}</FundName>
                  <FundDesc>{fund.desc}</FundDesc>
                  <ActionWrapper>
                    <LinkButton href={fund.linkUrl} target="_blank" rel="noopener noreferrer" $eco>
                      {fund.buttonText}
                    </LinkButton>
                  </ActionWrapper>
                </RowContent>
              </FundRow>
            ))}
          </FundList>
        </AnimatedContent>
      </ShopContainer>
    </Overlay>
  );
};

export default ShopModal;
