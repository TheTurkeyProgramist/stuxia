import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FiArrowUp, FiCheck, FiImage, FiRotateCw, FiTrash2 } from "react-icons/fi";
import { useDecorator } from "./DecoratorContext";

import i18n from "../../i18n/i18n.js";
/*
 * Декор-об'єкти: власні фото, GIF і відео поверх сторінки, як наліпки.
 * Координати — у пікселях документа (прокручуються разом зі сторінкою).
 * У «Редагуванні» їх можна тягати, розтягувати за ручки й обертати, як у Paint;
 * у «Перегляді» вони не заважають клікам (pointer-events: none).
 */

export const MAX_DECOR_IMAGE_MB = 5;
export const MAX_DECOR_VIDEO_MB = 25;
const MIN_SIZE = 24;
const START_MAX = 320;

const ACCENT = "#ffb36c";

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: 45;
`;

const Item = styled.div`
  position: absolute;
  touch-action: none;
  user-select: none;
  pointer-events: ${(p) => (p.$editing ? "auto" : "none")};
  cursor: ${(p) => (p.$editing ? "move" : "default")};
  outline: ${(p) => (p.$selected ? `2px dashed ${ACCENT}` : p.$editing ? "1px dashed rgba(255,179,108,0.45)" : "none")};
  outline-offset: 2px;

  img,
  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    pointer-events: none;
    -webkit-user-drag: none;
  }
`;

const Handle = styled.span`
  position: absolute;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 4px;
  background: #fff;
  border: 2px solid ${ACCENT};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  touch-action: none;
`;

const RotateHandle = styled.span`
  position: absolute;
  left: 50%;
  top: -42px;
  width: 26px;
  height: 26px;
  margin-left: -13px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${ACCENT};
  color: #1c1c1f;
  cursor: grab;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  touch-action: none;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 2px;
    height: 16px;
    margin-left: -1px;
    background: ${ACCENT};
  }
`;

const ItemTools = styled.div`
  position: absolute;
  right: 0;
  bottom: calc(100% + 8px);
  display: flex;
  gap: 4px;
  button {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    background: #202024;
    color: #f3f3f3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    &:hover {
      background: #323238;
    }
  }
`;

// Нижня панель «Редагування»: додати фото/відео, вийти з режиму
const Toolbar = styled.div`
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  z-index: 99990;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 24px);
  padding: 8px 8px 8px 14px;
  border-radius: 12px;
  background: #202024;
  color: #f3f3f3;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  font-size: 13px;

  span {
    color: #c5c5c5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  b {
    color: ${ACCENT};
  }
  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

const ToolBtn = styled.label`
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: ${(p) => (p.$primary ? ACCENT : "rgba(255,255,255,0.08)")};
  color: ${(p) => (p.$primary ? "#1c1c1f" : "#f3f3f3")};
  border: none;
  font-family: inherit;
  font-size: 13px;
  &:hover {
    filter: brightness(1.08);
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

const ToolError = styled.span`
  && {
    color: #ff8a8a;
    display: inline;
  }
`;

// [x, y] ручки у частках розміру + напрямок розтягування [sx, sy]
const HANDLES = [
  [0, 0, -1, -1, "nwse-resize"],
  [0.5, 0, 0, -1, "ns-resize"],
  [1, 0, 1, -1, "nesw-resize"],
  [1, 0.5, 1, 0, "ew-resize"],
  [1, 1, 1, 1, "nwse-resize"],
  [0.5, 1, 0, 1, "ns-resize"],
  [0, 1, -1, 1, "nesw-resize"],
  [0, 0.5, -1, 0, "ew-resize"],
];

const useObjectUrl = (blob) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!(blob instanceof Blob)) return undefined;
    const next = URL.createObjectURL(blob);
    setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [blob]);
  return url;
};

const DecorObject = ({ item, editing, selected, onSelect, onCommit, onRemove, onFront }) => {
  const url = useObjectUrl(item.blob);
  // Під час перетягування — локальний стан, у контекст (і сховище) пишемо лише в кінці
  const [live, setLive] = useState(null);
  const box = live || item;

  const startGesture = (e, kind, handle) => {
    if (!editing || e.button > 0) return;
    e.preventDefault();
    e.stopPropagation();
    onSelect(item.id);
    const start = { px: e.clientX, py: e.clientY, x: item.x, y: item.y, w: item.w, h: item.h, r: item.r || 0 };
    const cx0 = start.x + start.w / 2;
    const cy0 = start.y + start.h / 2;
    const rad = (start.r * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    let latest = start;

    const move = (ev) => {
      const dx = ev.clientX - start.px;
      const dy = ev.clientY - start.py;
      if (kind === "move") {
        latest = { ...start, x: start.x + dx, y: start.y + dy };
      } else if (kind === "rotate") {
        // Центр об'єкта в координатах вікна
        const ccx = cx0 - window.scrollX;
        const ccy = cy0 - window.scrollY;
        let angle = (Math.atan2(ev.clientY - ccy, ev.clientX - ccx) * 180) / Math.PI + 90;
        if (ev.shiftKey) angle = Math.round(angle / 15) * 15;
        latest = { ...start, r: Math.round(((angle % 360) + 360) % 360) };
      } else {
        // Розтягування в системі координат повернутого об'єкта; протилежний край стоїть на місці
        const [sx, sy] = handle;
        const lx = dx * cos + dy * sin;
        const ly = -dx * sin + dy * cos;
        let w = sx ? start.w + sx * lx : start.w;
        let h = sy ? start.h + sy * ly : start.h;
        if (sx && sy && !ev.shiftKey) {
          // Кут — пропорційно (Shift — вільно)
          const scale = (w / start.w + h / start.h) / 2;
          w = start.w * scale;
          h = start.h * scale;
        }
        w = Math.max(MIN_SIZE, w);
        h = Math.max(MIN_SIZE, h);
        const dcx = (sx * (w - start.w)) / 2;
        const dcy = (sy * (h - start.h)) / 2;
        const cx = cx0 + dcx * cos - dcy * sin;
        const cy = cy0 + dcx * sin + dcy * cos;
        latest = { ...start, w: Math.round(w), h: Math.round(h), x: Math.round(cx - w / 2), y: Math.round(cy - h / 2) };
      }
      setLive(latest);
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      setLive(null);
      if (latest !== start) {
        const { x, y, w, h, r } = latest;
        onCommit(item.id, { x, y, w, h, r });
      }
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  };

  return (
    <Item
      $editing={editing}
      $selected={selected}
      style={{
        left: box.x,
        top: box.y,
        width: box.w,
        height: box.h,
        transform: box.r ? `rotate(${box.r}deg)` : undefined,
        zIndex: item.z || 1,
        opacity: item.opacity ?? 1,
      }}
      onPointerDown={(e) => startGesture(e, "move")}
      data-decorator-ignore="true"
    >
      {url &&
        (item.kind === "video" ? (
          <video src={url} autoPlay muted loop playsInline />
        ) : (
          <img src={url} alt="" draggable={false} />
        ))}

      {editing && selected && (
        <>
          {HANDLES.map(([hx, hy, sx, sy, cursor]) => (
            <Handle
              key={`${hx}-${hy}`}
              style={{ left: `${hx * 100}%`, top: `${hy * 100}%`, cursor }}
              onPointerDown={(e) => startGesture(e, "resize", [sx, sy])}
            />
          ))}
          <RotateHandle title={i18n.t("ui.DecorLayer.obernutyShiftKrokom15")} onPointerDown={(e) => startGesture(e, "rotate")}>
            <FiRotateCw size={14} />
          </RotateHandle>
          <ItemTools onPointerDown={(e) => e.stopPropagation()}>
            <button type="button" title={i18n.t("ui.DecorLayer.naPeredniiPlan")} aria-label={i18n.t("ui.DecorLayer.naPeredniiPlan")} onClick={() => onFront(item.id)}>
              <FiArrowUp />
            </button>
            <button type="button" title={i18n.t("ui.DecorLayer.vydalyty")} aria-label={i18n.t("ui.DecorLayer.vydalytyDekor")} onClick={() => onRemove(item.id)}>
              <FiTrash2 />
            </button>
          </ItemTools>
        </>
      )}
    </Item>
  );
};

// Природний розмір фото/відео, вписаний у START_MAX
const measure = (file) =>
  new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const done = (w, h) => {
      URL.revokeObjectURL(url);
      const k = Math.min(1, START_MAX / Math.max(w || START_MAX, h || START_MAX));
      resolve({ w: Math.round((w || START_MAX) * k), h: Math.round((h || START_MAX * 0.75) * k) });
    };
    if (file.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => done(video.videoWidth, video.videoHeight);
      video.onerror = () => done();
      video.src = url;
    } else {
      const img = new Image();
      img.onload = () => done(img.naturalWidth, img.naturalHeight);
      img.onerror = () => done();
      img.src = url;
    }
  });

const DecorLayer = () => {
  const {
    decorItems = [],
    decorVisible,
    isDecoratorMode,
    addDecorItem,
    updateDecorItem,
    removeDecorItem,
    bringDecorToFront,
    setViewMode,
  } = useDecorator();
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  const layerRef = useRef(null);

  // Клік повз об'єкти знімає виділення; Delete — видалити виділений
  useEffect(() => {
    if (!isDecoratorMode) {
      setSelected(null);
      return undefined;
    }
    const onDown = (e) => {
      if (!layerRef.current?.contains(e.target)) setSelected(null);
    };
    const onKey = (e) => {
      if (!selected || e.target.closest?.("input, textarea, [contenteditable='true']")) return;
      if (e.key === "Delete" || e.key === "Backspace") {
        removeDecorItem(selected);
        setSelected(null);
      }
    };
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [isDecoratorMode, selected, removeDecorItem]);

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const isVideo = file.type.startsWith("video/");
    if (!isVideo && !file.type.startsWith("image/")) {
      setError(i18n.t("ui.DecorLayer.oberitFotoGifAbo"));
      return;
    }
    const limit = isVideo ? MAX_DECOR_VIDEO_MB : MAX_DECOR_IMAGE_MB;
    if (file.size > limit * 1024 * 1024) {
      setError(i18n.t("ui.DecorLayer.zavelykyiFailMaksymumMb", { limit: limit }));
      return;
    }
    setError("");
    const { w, h } = await measure(file);
    // Ставимо в центр того, що зараз видно на екрані
    const id = addDecorItem({
      kind: isVideo ? "video" : "image",
      blob: file,
      name: file.name,
      w,
      h,
      x: Math.round(window.scrollX + window.innerWidth / 2 - w / 2),
      y: Math.round(window.scrollY + window.innerHeight / 2 - h / 2),
      r: 0,
    });
    setSelected(id);
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {decorVisible && decorItems.length > 0 && (
        <Layer ref={layerRef} data-decorator-ignore="true" aria-hidden={!isDecoratorMode}>
          {decorItems.map((item) => (
            <DecorObject
              key={item.id}
              item={item}
              editing={isDecoratorMode}
              selected={selected === item.id}
              onSelect={setSelected}
              onCommit={updateDecorItem}
              onRemove={(id) => {
                removeDecorItem(id);
                setSelected(null);
              }}
              onFront={bringDecorToFront}
            />
          ))}
        </Layer>
      )}

      {isDecoratorMode && (
        <Toolbar role="toolbar" aria-label={i18n.t("ui.DecorLayer.redahuvanniaDekoratora")} data-decorator-ignore="true">
          <span>
            <b>{i18n.t("ui.DecorLayer.redahuvannia")}</b> {i18n.t("ui.DecorLayer.klatsnitElementShchobZminyty")}
            {decorItems.length > 0 ? " " + i18n.t("ui.DecorLayer.dekorTiahnitRoztiahuiteI") : ""}
          </span>
          {error && <ToolError role="alert">{error}</ToolError>}
          <ToolBtn title={i18n.t("ui.DecorLayer.fotoAboGifDo", { MAX_DECOR_IMAGE_MB: MAX_DECOR_IMAGE_MB, MAX_DECOR_VIDEO_MB: MAX_DECOR_VIDEO_MB })}>
            <FiImage /> {i18n.t("ui.DecorLayer.fotoVideo")}
            <input type="file" accept="image/*,video/*" onChange={onFile} />
          </ToolBtn>
          <ToolBtn as="button" type="button" $primary onClick={() => setViewMode("view")}>
            <FiCheck /> {i18n.t("ui.DecorLayer.hotovo")}
          </ToolBtn>
        </Toolbar>
      )}
    </>,
    document.body,
  );
};

export default DecorLayer;
