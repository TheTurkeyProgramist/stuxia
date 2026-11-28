// Один акаунт — один пристрій онлайн. Хто відкрив Стихію останнім, той і лишається:
// пристрій записує себе в sessions/{uid}, а попередній бачить чужий id і блокується.
// Без акаунта пристрій не впізнати, тож обмеження лише для тих, хто увійшов.
// Якщо Firestore недоступний (офлайн, правила не задеплоєні) — нічого не блокуємо.
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { MdDevices } from "react-icons/md";
import { loadFirebase } from "../firebaseLazy";

// Вкладки одного браузера — той самий пристрій
const deviceId = () => {
  const KEY = "styxia_device_id";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 24px;
  background: rgba(8, 12, 26, 0.97);
  color: #fff;
  font-family: var(--font-family);
  text-align: center;

  > svg {
    font-size: 56px;
    color: #ffb02e;
  }

  h2 {
    margin: 0;
    font-size: 22px;
  }

  p {
    max-width: 420px;
    margin: 0;
    line-height: 1.5;
    opacity: 0.85;
  }

  button {
    margin-top: 6px;
    padding: 12px 26px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(135deg, #ffe29a 0%, #ffb02e 48%, #f07a00 100%);
    color: #2a1500;
    font: inherit;
    font-weight: 800;
    cursor: pointer;
  }
`;

const SingleDeviceGuard = ({ signedIn }) => {
  const { t } = useTranslation();
  const [blocked, setBlocked] = useState(false);
  const claimRef = useRef(null);

  useEffect(() => {
    if (!signedIn) return undefined;
    let stopped = false;
    let stopAuth = null;
    let stopSession = null;

    Promise.all([loadFirebase(), import("firebase/auth")])
      .then(([{ auth, db, doc, setDoc, onSnapshot, serverTimestamp }, { onAuthStateChanged }]) => {
        if (stopped) return;
        stopAuth = onAuthStateChanged(auth, (account) => {
          stopSession?.();
          stopSession = null;
          claimRef.current = null;
          setBlocked(false);
          if (!account || account.isAnonymous) return;

          const ref = doc(db, "sessions", account.uid);
          const mine = deviceId();
          const claim = () => setDoc(ref, { deviceId: mine, at: serverTimestamp() });
          claimRef.current = claim;
          claim()
            .then(() => {
              if (stopped || auth.currentUser?.uid !== account.uid) return;
              stopSession?.();
              stopSession = onSnapshot(
                ref,
                (snap) => {
                  // Кеш міг лишитися з минулого візиту — віримо лише серверу
                  if (snap.metadata.fromCache || snap.metadata.hasPendingWrites) return;
                  const other = snap.data()?.deviceId;
                  setBlocked(Boolean(other) && other !== mine);
                },
                (error) => console.warn("Сесія пристрою:", error.code),
              );
            })
            .catch((error) => console.warn("Сесія пристрою:", error.code));
        });
      })
      .catch((error) => console.warn("Сесія пристрою:", error));

    return () => {
      stopped = true;
      stopAuth?.();
      stopSession?.();
      claimRef.current = null;
      setBlocked(false);
    };
  }, [signedIn]);

  // Заблокований пристрій: звук зупиняємо, сторінка під заслоном не клікається й клавішами
  useEffect(() => {
    if (!blocked) return undefined;
    document.querySelectorAll("audio, video").forEach((media) => media.pause());
    const root = document.getElementById("root");
    root?.setAttribute("inert", "");
    return () => root?.removeAttribute("inert");
  }, [blocked]);

  if (!blocked) return null;
  return createPortal(
    <Overlay role="alertdialog" aria-modal="true" aria-labelledby="other-device-title">
      <MdDevices aria-hidden="true" />
      <h2 id="other-device-title">{t("common.otherDeviceTitle")}</h2>
      <p>{t("common.otherDeviceText")}</p>
      <button
        type="button"
        autoFocus
        onClick={() => {
          setBlocked(false);
          claimRef.current?.().catch((error) => console.warn("Сесія пристрою:", error.code));
        }}
      >
        {t("common.otherDeviceContinue")}
      </button>
    </Overlay>,
    document.body,
  );
};

export default SingleDeviceGuard;
