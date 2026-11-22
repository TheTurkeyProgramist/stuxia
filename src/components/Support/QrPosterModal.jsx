// ─────────────────────────────────────────────────────────────
//  Плакат Стихії: чотири QR-коди (донат, сама Стихія, YouTube, Facebook),
//  переваги, піксельні Доміно й Кейт і фото індиків, прохання роздрукувати й повісити.
//  «Скачати» малює повний плакат A4 (150 dpi) у PNG — з окремим текстом
//  для тих, хто побачить його на вулиці.
// ─────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { FiDownload, FiShare2, FiX } from "react-icons/fi";
import kateAndDomino from "../../media/characters/kate-and-domino.webp?w=1000&format=webp&quality=85";
import turkeysTeam from "../../media/characters/turkeys-team.webp?w=600&format=webp&quality=85";
import { DONATE_URL, FACEBOOK_URL, SITE_URL, YOUTUBE_URL } from "./supportConfig";
import {
  MODAL_HEADER_HEIGHT,
  ModalHeaderActions,
  ModalHeaderButton,
  ModalHeaderCloseButton,
  ModalHeaderPrimaryButton,
} from "../Modals/modalHeaderButtons.js";
import Tooltip from "../Tooltip/Tooltip.jsx";
import i18n from "../../i18n/i18n.js";

const t = (key) => i18n.t(`modals.QrPosterModal.${key}`);
const shortUrl = (url) => url.replace(/^https?:\/\//, "");
const POSTER_FILE_NAME = "stykhiia-poster.png";

// «Поділитися» картинкою вміють телефони й частина десктопних браузерів;
// де не вміють — кнопки немає, лишається «Скачати»
const CAN_SHARE_FILES = (() => {
  try {
    return (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function" &&
      typeof navigator.canShare === "function" &&
      navigator.canShare({ files: [new File([""], POSTER_FILE_NAME, { type: "image/png" })] })
    );
  } catch {
    return false;
  }
})();

const CODES = [
  { id: "donate", url: DONATE_URL, captionKey: "donateCaption", color: "#c2410c" },
  { id: "site", url: SITE_URL, captionKey: "siteCaption", color: "#15803d" },
  // Назви соцмереж не перекладаємо; під Facebook адресу не пишемо — задовга
  { id: "youtube", url: YOUTUBE_URL, caption: "YouTube", label: "@TheTurkeyStudio", color: "#dc2626" },
  { id: "facebook", url: FACEBOOK_URL, caption: "Facebook", label: "", color: "#1d4ed8" },
];
const captionOf = (code) => (code.captionKey ? t(code.captionKey) : code.caption);
const labelOf = (code) => code.label ?? shortUrl(code.url);

// Переваги на плакаті — тексти з «Чому треба обрати нас?», уже перекладені всіма мовами
const PERK_KEYS = [
  "bezReklamyPidpysokI",
  "pohodaBezpechniNovynyMuzyka",
  "saitMozhnaZibratyPid",
  "rezhymDekoratoraDozvoliaieDodaty",
  "osnovnyiInterfeisPerekladenoPonad",
  "ieVersiiDliaWindows",
];

// ── Плакат (canvas) ─────────────────────────────────────────
const POSTER_W = 1240; // A4 при 150 dpi
const POSTER_H = 1754;
const POSTER_QR_PX = 250;
const INK = "#2b1313";
const PAPER = "#fffdf7";
const SERIF = 'Georgia, "Times New Roman", serif';
const SANS = '"Segoe UI", system-ui, -apple-system, sans-serif';

// Перенос рядків: за пробілами, а для мов без пробілів (японська, китайська) — за символами
const wrapText = (ctx, text, maxWidth) => {
  const lines = [];
  let line = "";
  for (const ch of String(text)) {
    const test = line + ch;
    if (line && ctx.measureText(test).width > maxWidth) {
      const cut = line.lastIndexOf(" ");
      if (cut > 0) {
        lines.push(line.slice(0, cut));
        line = line.slice(cut + 1) + ch;
      } else {
        lines.push(line);
        line = ch.trim();
      }
    } else {
      line = test;
    }
  }
  if (line.trim()) lines.push(line);
  return lines;
};

const drawLines = (ctx, lines, y, lineHeight) => {
  lines.forEach((l, i) => ctx.fillText(l, POSTER_W / 2, y + i * lineHeight));
  return y + lines.length * lineHeight;
};

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

const renderPoster = async (qrCanvases) => {
  const canvas = document.createElement("canvas");
  canvas.width = POSTER_W;
  canvas.height = POSTER_H;
  const ctx = canvas.getContext("2d");
  const textW = POSTER_W - 160;
  ctx.direction = document.documentElement.dir === "rtl" ? "rtl" : "ltr";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, POSTER_W, POSTER_H);

  // Верхня смуга: питання й короткий опис
  ctx.font = `bold 64px ${SERIF}`;
  const headLines = wrapText(ctx, t("posterHeadline"), textW);
  ctx.font = `36px ${SANS}`;
  const subLines = wrapText(ctx, t("posterSub"), textW);
  const bandH = 70 + headLines.length * 78 + 18 + subLines.length * 46 + 60;
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, POSTER_W, bandH);
  ctx.fillStyle = "#ffd36b";
  ctx.font = `bold 64px ${SERIF}`;
  let y = drawLines(ctx, headLines, 70, 78) + 18;
  ctx.fillStyle = "#f8f1c6";
  ctx.font = `36px ${SANS}`;
  drawLines(ctx, subLines, y, 46);

  // Чотири коди в ряд, під кожним — підпис і адреса
  const gap = 40;
  const qrY = bandH + 50;
  const qrX0 = (POSTER_W - CODES.length * POSTER_QR_PX - (CODES.length - 1) * gap) / 2;
  const colW = POSTER_QR_PX + gap - 10;
  let qrBottom = qrY + POSTER_QR_PX;
  CODES.forEach((code, i) => {
    const x = qrX0 + i * (POSTER_QR_PX + gap);
    const cx = x + POSTER_QR_PX / 2;
    const src = qrCanvases[code.id];
    if (src) ctx.drawImage(src, x, qrY, POSTER_QR_PX, POSTER_QR_PX);
    ctx.fillStyle = code.color;
    ctx.font = `bold 28px ${SANS}`;
    let cy = qrY + POSTER_QR_PX + 14;
    wrapText(ctx, captionOf(code), colW).forEach((l) => {
      ctx.fillText(l, cx, cy);
      cy += 34;
    });
    const label = labelOf(code);
    if (label) {
      ctx.fillStyle = INK;
      ctx.font = `600 20px ${SANS}`;
      ctx.fillText(label, cx, cy + 2);
      cy += 28;
    }
    qrBottom = Math.max(qrBottom, cy);
  });

  // Заклик відсканувати
  y = qrBottom + 26;
  ctx.fillStyle = INK;
  ctx.font = `bold 40px ${SANS}`;
  y = drawLines(ctx, wrapText(ctx, t("scan"), textW), y, 50) + 26;

  // Переваги — дві колонки з зеленими галочками
  const perkColGap = 40;
  const perkColW = (textW - perkColGap) / 2;
  const perkTextW = perkColW - 46;
  const perkLH = 31;
  ctx.textAlign = "left";
  for (let i = 0; i < PERK_KEYS.length; i += 2) {
    ctx.font = `24px ${SANS}`;
    const rows = [PERK_KEYS[i], PERK_KEYS[i + 1]].filter(Boolean).map((k) =>
      wrapText(ctx, i18n.t(`modals.WhyUsModal.${k}`), perkTextW),
    );
    rows.forEach((lines, col) => {
      const x = 80 + col * (perkColW + perkColGap);
      ctx.fillStyle = "#15803d";
      ctx.beginPath();
      ctx.arc(x + 15, y + 15, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(x + 8, y + 15);
      ctx.lineTo(x + 13, y + 21);
      ctx.lineTo(x + 23, y + 9);
      ctx.stroke();
      ctx.fillStyle = INK;
      ctx.font = `24px ${SANS}`;
      lines.forEach((l, j) => ctx.fillText(l, x + 46, y + j * perkLH));
    });
    y += Math.max(...rows.map((r) => r.length)) * perkLH + 14;
  }
  ctx.textAlign = "center";
  y += 10;

  // Вітання внизу (міряємо заздалегідь, щоб картинки зайняли решту місця)
  const footerH = 100;
  ctx.font = `bold 46px ${SERIF}`;
  const welcomeLines = wrapText(ctx, t("posterWelcome"), textW);
  const welcomeH = welcomeLines.length * 58;

  // Піксельні Доміно й Кейт і мініатюра справжніх індиків — поруч, однакової висоти
  const [img, photo] = await Promise.all([loadImage(kateAndDomino), loadImage(turkeysTeam)]);
  const ratio = img.naturalWidth / img.naturalHeight;
  const photoRatio = photo.naturalWidth / photo.naturalHeight;
  const imgGap = 40;
  const maxImgH = POSTER_H - footerH - 30 - welcomeH - 16 - y;
  const imgH = Math.max(0, Math.min(maxImgH, (textW - imgGap) / (ratio + photoRatio)));
  const imgW = imgH * ratio;
  const photoW = imgH * photoRatio;
  const imgX = (POSTER_W - imgW - imgGap - photoW) / 2;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, imgX, y, imgW, imgH);
  ctx.imageSmoothingEnabled = true;
  const photoX = imgX + imgW + imgGap;
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(photoX, y, photoW, imgH, 18);
  ctx.clip();
  ctx.drawImage(photo, photoX, y, photoW, imgH);
  ctx.restore();
  y += imgH + 16;

  ctx.fillStyle = "#c2410c";
  ctx.font = `bold 46px ${SERIF}`;
  drawLines(ctx, welcomeLines, y, 58);

  // Нижня смуга: адреса й автор
  ctx.fillStyle = INK;
  ctx.fillRect(0, POSTER_H - footerH, POSTER_W, footerH);
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#f8f1c6";
  ctx.font = `bold 34px ${SANS}`;
  ctx.fillText(shortUrl(SITE_URL), POSTER_W / 2, POSTER_H - footerH + 30);
  ctx.fillStyle = "rgba(248, 241, 198, 0.75)";
  ctx.font = `24px ${SANS}`;
  ctx.fillText(t("madeBy"), POSTER_W / 2, POSTER_H - footerH + 68);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
};

const saveBlob = (blob, name) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// ── Вікно ───────────────────────────────────────────────────
const popIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.8);
  /* Без анімації: фон лежить поза aria-modal, а анімації поза активною модалкою
     ставляться на паузу (utils/pageActivity.css) — застиг би на opacity: 0 */
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1040px, 100%);
  max-height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: #1d0d0d;
  color: #fff;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
  animation: ${popIn} 0.25s ease-out;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-shrink: 0;
  height: ${MODAL_HEADER_HEIGHT}px;
  box-sizing: border-box;
  padding: 0 12px;
  background: rgba(20, 8, 8, 0.95);
  border-bottom: 1px solid rgba(255, 108, 108, 0.45);
  --mhb-accent: #f3a83b;
  --mhb-on-accent: #2b1313;
  --mhb-accent-hover: #ffb84d;
  --mhb-danger: #ff8a8a;
`;

const Title = styled.h2`
  margin: 0;
  min-width: 0;
  font-family: ${SERIF};
  font-size: 16px;
  color: #f8f1c6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Body = styled.div`
  overflow-y: auto;
  padding: 10px;
`;

// Коди й Доміно з Кейт — в один ряд; на вузькому екрані переносяться
const Paper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 28px;
  padding: 14px;
  border-radius: 10px;
  background: ${PAPER};
  color: ${INK};
  text-align: center;
`;

const QrRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;
`;

const QrCard = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  & > a {
    display: block;
    line-height: 0;
    border-radius: 6px;
  }
  & > a:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
  /* Підпис — кольорова «табличка» під кодом, щоб одразу було видно, куди веде */
  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 6px 14px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--code-color) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--code-color) 35%, transparent);
  }
  strong {
    font-size: 18px;
    font-weight: 800;
    color: var(--code-color);
  }
  small {
    font-size: 13px;
    font-weight: 600;
    color: ${INK};
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  max-width: 420px;
`;

const Pixels = styled.img`
  display: block;
  width: min(240px, 60%);
  height: auto;
  image-rendering: pixelated;
`;

const Pictures = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

// Мініатюра справжніх індиків поруч із піксельними
const Photo = styled.img`
  display: block;
  width: min(150px, 40%);
  height: auto;
  border-radius: 10px;
`;

const Scan = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
`;

const MadeBy = styled.small`
  font-size: 12px;
  font-weight: 600;
  color: #6b574d;
`;

const PrintNote = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.45;
  color: #f8f1c6;
  text-align: center;
`;

// Підказка, де взяти плакат, — окремим рядком, кольором кнопки «Скачати»
const DownloadHint = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 4px;
  font-weight: 700;
  color: #ffd36b;
  & > svg {
    flex-shrink: 0;
  }
`;

// Повнорозмірні коди для плаката — лише як джерело для canvas
const Hidden = styled.div`
  display: none;
`;

const QrPosterModal = ({ onClose }) => {
  const qrCanvases = useRef({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // Плакат малюємо одразу при відкритті: браузер дозволяє «Поділитися» лише відразу
  // після кліку, і поки малювали б плакат, дозвіл міг би згаснути
  const posterRef = useRef(null);
  const getPoster = useCallback(async () => {
    if (!posterRef.current) {
      posterRef.current = renderPoster(qrCanvases.current).catch((err) => {
        posterRef.current = null;
        throw err;
      });
    }
    return posterRef.current;
  }, []);
  useEffect(() => {
    // Кадр, щоб QR-канвас встиг намалюватися
    const id = requestAnimationFrame(() => getPoster().catch(() => {}));
    return () => cancelAnimationFrame(id);
  }, [getPoster]);

  const download = useCallback(async () => {
    if (busy) return;
    setBusy(true);
    try {
      const blob = await getPoster();
      if (blob) saveBlob(blob, POSTER_FILE_NAME);
    } catch (err) {
      console.warn("Не вдалося створити плакат:", err);
    } finally {
      setBusy(false);
    }
  }, [busy, getPoster]);

  const share = useCallback(async () => {
    if (busy) return;
    setBusy(true);
    try {
      const blob = await getPoster();
      if (!blob) return;
      const file = new File([blob], POSTER_FILE_NAME, { type: "image/png" });
      await navigator.share({ files: [file], title: t("title"), text: t("shareText") });
    } catch (err) {
      // Людина закрила меню «Поділитися» — це не помилка
      if (err?.name !== "AbortError") console.warn("Не вдалося поділитися плакатом:", err);
    } finally {
      setBusy(false);
    }
  }, [busy, getPoster]);

  // Портал: вікно не залежить від анімацій і прокрутки замку.
  // Кліки не спливають до оверлею замку (React веде події порталу деревом компонентів).
  return createPortal(
    <Overlay
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <Sheet
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-poster-title"
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <Title id="qr-poster-title">{t("title")}</Title>
          <ModalHeaderActions>
            {CAN_SHARE_FILES && (
              <Tooltip content={t("tipShare")}>
                <ModalHeaderButton type="button" onClick={share} disabled={busy} aria-busy={busy}>
                  <FiShare2 aria-hidden="true" />
                  <span>{t("share")}</span>
                </ModalHeaderButton>
              </Tooltip>
            )}
            <Tooltip content={t("tipDownload")}>
              <ModalHeaderPrimaryButton type="button" onClick={download} disabled={busy} aria-busy={busy}>
                <FiDownload aria-hidden="true" />
                <span>{t("download")}</span>
              </ModalHeaderPrimaryButton>
            </Tooltip>
            <Tooltip content={t("tipClose")}>
              <ModalHeaderCloseButton type="button" $thinIcon onClick={onClose}>
                <FiX aria-hidden="true" />
                <span>{i18n.t("modals.ShopModal.zakryty")}</span>
              </ModalHeaderCloseButton>
            </Tooltip>
          </ModalHeaderActions>
        </Header>
        <Body>
          <Paper>
            <QrRow>
              {CODES.map((code) => (
                <QrCard key={code.id} style={{ "--code-color": code.color }}>
                  <a href={code.url} target="_blank" rel="noopener noreferrer" aria-label={captionOf(code)}>
                    <QRCodeSVG value={code.url} size={150} marginSize={2} level="M" />
                  </a>
                  <figcaption>
                    <strong>{captionOf(code)}</strong>
                    {labelOf(code) && <small>{labelOf(code)}</small>}
                  </figcaption>
                </QrCard>
              ))}
            </QrRow>
            <Side>
              <Pictures>
                <Pixels src={kateAndDomino} alt="" decoding="async" />
                <Photo src={turkeysTeam} alt="" decoding="async" />
              </Pictures>
              <Scan>{t("scan")}</Scan>
              <MadeBy>{t("madeBy")}</MadeBy>
            </Side>
          </Paper>
          <PrintNote>
            {t("printNote")}
            <DownloadHint>
              <FiDownload aria-hidden="true" /> {t("downloadHint")}
            </DownloadHint>
          </PrintNote>
        </Body>
        <Hidden aria-hidden="true">
          {CODES.map((code) => (
            <QRCodeCanvas
              key={code.id}
              ref={(el) => {
                qrCanvases.current[code.id] = el;
              }}
              value={code.url}
              size={POSTER_QR_PX}
              marginSize={2}
              level="M"
            />
          ))}
        </Hidden>
      </Sheet>
    </Overlay>,
    document.body,
  );
};

export default QrPosterModal;
