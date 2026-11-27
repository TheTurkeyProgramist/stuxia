// Кнопка «Ліміти» в шапці налаштувань: кружечок показує витрачене на синхронізації, а по натиску —
// добові ліміти акаунта (utils/cloudCounter.js) і скільки власного вже збережено.
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import localforage from "localforage";
import { useFloating, autoUpdate, offset, shift, useClick, useDismiss, useRole, useInteractions, useTransitionStyles } from "@floating-ui/react";
import { FiX } from "react-icons/fi";
import { loadFirebase } from "../../firebaseLazy";
import { CLOUD_LIMITS, CLOUD_WRITE_EVENT, usedTodayFromCloud } from "../../utils/cloudCounter";
import { SETTINGS_SYNC_COUNTER_KEY, countForToday } from "../../utils/settingsSync";
import { MUTE_COUNTER_KEY } from "../../utils/muteSync";
import { CUSTOM_FEEDS_MAX } from "../../utils/newsPersonal";
import { MAX_CUSTOM_WEATHER_CARDS, MAX_CUSTOM_FRAMES, MAX_DEVICE_ACCOUNTS } from "../../utils/ownLimits";
import { getDeviceAccounts, rememberDeviceAccount } from "../../utils/deviceAccounts";
import { useBeta } from "../../utils/betaFeatures";
import { ModalHeaderButton } from "./modalHeaderButtons.js";

// Добові ліміти; labelKey — modals.UserSettingsModal.*
const ROWS = [
  { id: "settings", labelKey: "limitsSettings" },
  { id: "mute", labelKey: "limitsMute" },
  { id: "cardAdditions", labelKey: "limitsAdditions" },
  { id: "reports", labelKey: "limitsReports" },
];

// Ці лічильники є ще й на пристрої
const LOCAL_COUNTERS = { settings: SETTINGS_SYNC_COUNTER_KEY, mute: MUTE_COUNTER_KEY };

// Скільки власного збережено на пристрої: читаємо при кожному відкритті віконця
const useSaved = (open, uid) => {
  const [saved, setSaved] = useState({ cards: 0, feeds: 0, frames: 0, accounts: 0 });
  useEffect(() => {
    if (!open) return undefined;
    let alive = true;
    const lists = ["weather_cards", "custom_news_sources", "climate_custom_user_frames"].map((key) =>
      localforage.getItem(key).then((list) => (Array.isArray(list) ? list : [])).catch(() => []),
    );
    // Поточний акаунт теж рахується, навіть якщо увійшли ще до появи цього ліміту
    const accounts = rememberDeviceAccount(uid).then(getDeviceAccounts);
    Promise.all([...lists, accounts]).then(([cards, feeds, frames, ids]) => {
      if (!alive) return;
      setSaved({ cards: cards.filter((c) => !c.isMain).length, feeds: feeds.length, frames: frames.length, accounts: ids.length });
    });
    return () => {
      alive = false;
    };
  }, [open, uid]);
  return saved;
};

const colorFor = (share) => (share >= 0.9 ? "#e5484d" : "var(--s-accent)");

const RADIUS = 9;
const LENGTH = 2 * Math.PI * RADIUS;

const Panel = styled.div`
  z-index: 20;
  width: min(320px, calc(100vw - 16px));
  @media (min-width: 768px) { width: min(660px, calc(100vw - 16px)); }
  box-sizing: border-box;
  padding: 14px 16px;
  border: 2px solid var(--s-accent);
  border-radius: 10px;
  background: var(--s-menu);
  color: var(--s-text);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  text-align: start;

  max-height: calc(100vh - 80px);
  overflow-y: auto;

  h3 { margin: 0 0 12px; font-size: 15px; font-weight: 700; }
  ul { display: flex; flex-direction: column; gap: 12px; margin: 0; padding: 0; list-style: none; }
  li > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 5px;
    font-size: 13px;
  }
  strong { white-space: nowrap; font-variant-numeric: tabular-nums; }
  p { margin: 12px 0 0; font-size: 12px; color: var(--s-muted); }
`;

// Телефон — одна колонка; планшет і ПК — дві поруч
const Columns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;

  section:first-child h3 { padding-inline-end: 36px; }
  section + section { padding-top: 12px; border-top: 1px solid color-mix(in srgb, var(--s-text) 18%, transparent); }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

    section + section {
      padding-top: 0;
      padding-inline-start: 20px;
      border-top: none;
      border-inline-start: 1px solid color-mix(in srgb, var(--s-text) 18%, transparent);
    }
    section + section h3 { padding-inline-end: 36px; }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 8px;
  inset-inline-end: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #e53935;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.2s ease;

  &:hover { background: #ff5a55; transform: rotate(90deg); }
  &:focus-visible { outline: 2px solid var(--s-accent); outline-offset: 2px; }
`;

const Note = styled.p`
  && { padding: 8px 10px; border: 1px solid #f59e0b; border-radius: 8px; background: rgba(245, 158, 11, 0.15); color: var(--s-text); font-weight: 600; }
`;

const Bar = styled.div`
  height: 8px;
  border-radius: 8px;
  overflow: hidden;
  background: color-mix(in srgb, var(--s-text) 15%, transparent);

  span {
    display: block;
    height: 100%;
    border-radius: 8px;
    transition: width 0.4s ease;
  }
`;

const useUsage = (uid, open) => {
  const [used, setUsed] = useState({});

  // Перечитуємо й при відкритті віконця: могли витрачати з інших пристроїв
  useEffect(() => {
    if (!uid) return undefined;
    let alive = true;
    const raise = (id, count) =>
      alive && setUsed((prev) => ({ ...prev, [id]: Math.max(prev[id] || 0, count) }));
    Object.entries(LOCAL_COUNTERS).forEach(([id, key]) => {
      localforage.getItem(key).then((counter) => raise(id, countForToday(counter, uid))).catch(() => {});
    });
    loadFirebase()
      .then(async ({ db, doc, getDoc }) => {
        const data = (await getDoc(doc(db, "config", uid))).data();
        ROWS.forEach(({ id }) => raise(id, usedTodayFromCloud(data, CLOUD_LIMITS[id])));
      })
      .catch(() => {});
    const onWrite = (e) => {
      const row = ROWS.find(({ id }) => CLOUD_LIMITS[id].countKey === e.detail.countKey);
      if (row) raise(row.id, e.detail.count);
    };
    window.addEventListener(CLOUD_WRITE_EVENT, onWrite);
    return () => {
      alive = false;
      window.removeEventListener(CLOUD_WRITE_EVENT, onWrite);
    };
  }, [uid, open]);

  return used;
};

const UsageRow = ({ label, used, limit }) => {
  const share = Math.min(1, used / limit);
  return (
    <li>
      <div>
        <span>{label}</span>
        <strong>{used} / {limit}</strong>
      </div>
      <Bar>
        <span style={{ width: `${share * 100}%`, background: colorFor(share) }} />
      </Bar>
    </li>
  );
};

const SyncUsageRing = ({ uid }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const used = useUsage(uid, open);
  const saved = useSaved(open, uid);
  // Без GPS-картки її місце дістається ще одній власній
  const hideGpsCard = useBeta("hideGpsCard");
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-end",
    strategy: "fixed",
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), shift({ padding: 8 })],
  });
  // Плавно і відкривається, і закривається: віконце лишається, доки анімація не догасне
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 260,
    initial: { opacity: 0, transform: "translateY(-10px) scale(0.96)" },
    common: { transformOrigin: "top right" },
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: "dialog" }),
  ]);

  const label = t("modals.UserSettingsModal.limitsButton");
  const share = Math.min(1, (used.settings || 0) / CLOUD_LIMITS.settings.limit);

  return (
    <>
      <ModalHeaderButton type="button" ref={refs.setReference} aria-label={label} {...getReferenceProps()}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="4" opacity="0.25" />
          <circle
            cx="12"
            cy="12"
            r={RADIUS}
            fill="none"
            stroke={colorFor(share)}
            strokeWidth="4"
            strokeDasharray={LENGTH}
            strokeDashoffset={LENGTH * (1 - share)}
            transform="rotate(-90 12 12)"
          />
        </svg>
        <span>{label}</span>
      </ModalHeaderButton>
      {isMounted && (
        <Panel ref={refs.setFloating} style={{ ...floatingStyles, ...transitionStyles }} {...getFloatingProps()}>
          <Close type="button" aria-label={t("common.close")} title={t("common.close")} onClick={() => setOpen(false)}>
            <FiX aria-hidden="true" />
          </Close>
          <Columns>
            <section>
              <h3>{t("modals.UserSettingsModal.limitsTitle")}</h3>
              <ul>
                {ROWS.map(({ id, labelKey }) => (
                  <UsageRow
                    key={id}
                    label={t(`modals.UserSettingsModal.${labelKey}`)}
                    used={Math.min(used[id] || 0, CLOUD_LIMITS[id].limit)}
                    limit={CLOUD_LIMITS[id].limit}
                  />
                ))}
              </ul>
              <p>{t("modals.UserSettingsModal.limitsReset")}</p>
            </section>
            <section>
              <h3>{t("modals.UserSettingsModal.limitsSavedTitle")}</h3>
              <ul>
                <UsageRow
                  label={t("modals.UserSettingsModal.limitsCards")}
                  used={saved.cards}
                  limit={MAX_CUSTOM_WEATHER_CARDS + (hideGpsCard ? 1 : 0)}
                />
                <UsageRow label={t("modals.UserSettingsModal.limitsFeeds")} used={saved.feeds} limit={CUSTOM_FEEDS_MAX} />
                <UsageRow label={t("modals.UserSettingsModal.limitsFrames")} used={saved.frames} limit={MAX_CUSTOM_FRAMES} />
              <UsageRow label={t("modals.UserSettingsModal.limitsAccounts")} used={saved.accounts} limit={MAX_DEVICE_ACCOUNTS} />
              </ul>
            </section>
          </Columns>
          <p>{t("modals.UserSettingsModal.limitsSyncNote")}</p>
          <Note>{t("modals.UserSettingsModal.limitsNote")}</Note>
        </Panel>
      )}
    </>
  );
};

export default SyncUsageRing;
