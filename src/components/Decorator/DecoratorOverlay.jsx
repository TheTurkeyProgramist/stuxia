import React, { useState, useEffect, useCallback } from "react";
import { useDecorator } from "./DecoratorContext";
import { lazyWithRetry } from "../../utils/lazyWithRetry.js";
import { ModalSuspense } from "../Loader/ModalLoading.jsx";

// Модалка декоратора потрібна лише після вибору елемента
const DecoratorModal = lazyWithRetry(() => import("./DecoratorModal"));

const HIGHLIGHT_STYLE = {
  outline: "2px dashed #ffb36c",
  outlineOffset: "2px",
  cursor: "crosshair",
};

const isIgnored = (el) => {
  if (!el) return true;
  let current = el;
  while (current && current !== document.body) {
    if (
      current.getAttribute?.("data-decorator-ignore") === "true" ||
      current.tagName === "HEADER" ||
      current.id === "decorator-overlay"
    ) {
      return true;
    }
    current = current.parentElement;
  }
  return false;
};

// Батьківський елемент, який можна редагувати (не body і не службові шари)
const getEditableParent = (el) => {
  const parent = el?.parentElement;
  if (!parent || parent === document.body || parent === document.documentElement) return null;
  return isIgnored(parent) ? null : parent;
};

const DecoratorOverlay = ({ isStickyBgMode }) => {
  const { isDecoratorMode } = useDecorator();
  const [hoveredEl, setHoveredEl] = useState(null);
  const [selectedEl, setSelectedEl] = useState(null);

  // Глобальні стилі тепер застосовуються через <style> у DecoratorContext

  const handleMouseOver = useCallback(
    (e) => {
      if (!isDecoratorMode || e.altKey || isIgnored(e.target)) return;

      // Прибираємо попереднє підсвічування
      if (hoveredEl && hoveredEl !== e.target) {
        hoveredEl.style.outline = "";
        hoveredEl.style.outlineOffset = "";
        hoveredEl.style.cursor = "";
      }

      e.target.style.outline = HIGHLIGHT_STYLE.outline;
      e.target.style.outlineOffset = HIGHLIGHT_STYLE.outlineOffset;
      e.target.style.cursor = HIGHLIGHT_STYLE.cursor;
      setHoveredEl(e.target);
    },
    [isDecoratorMode, hoveredEl],
  );

  const handleMouseOut = useCallback(
    (e) => {
      if (!isDecoratorMode || isIgnored(e.target)) return;
      e.target.style.outline = "";
      e.target.style.outlineOffset = "";
      e.target.style.cursor = "";
      if (hoveredEl === e.target) setHoveredEl(null);
    },
    [isDecoratorMode, hoveredEl],
  );

  const handleClick = useCallback(
    (e) => {
      if (!isDecoratorMode) return;
      if (!e.isTrusted) return; // Ігноруємо програмні кліки (напр., через "Виконати дію")
      if (e.altKey) return; // Alt + клік — звичайний клік, без відкриття редактора
      if (isIgnored(e.target)) return;

      e.preventDefault();
      e.stopPropagation();

      // Прибираємо підсвічування
      if (e.target) {
        e.target.style.outline = "";
        e.target.style.outlineOffset = "";
        e.target.style.cursor = "";
      }

      setSelectedEl(e.target);
    },
    [isDecoratorMode],
  );

  useEffect(() => {
    if (!isDecoratorMode) {
      // Очищаємо підсвічування при виключенні режиму
      if (hoveredEl) {
        hoveredEl.style.outline = "";
        hoveredEl.style.outlineOffset = "";
        hoveredEl.style.cursor = "";
        setHoveredEl(null);
      }
      return;
    }

    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [
    isDecoratorMode,
    handleMouseOver,
    handleMouseOut,
    handleClick,
    hoveredEl,
  ]);

  // Змінити курсор для всього body
  useEffect(() => {
    if (isDecoratorMode) {
      document.body.style.cursor = "crosshair";
    } else {
      document.body.style.cursor = "";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [isDecoratorMode]);

  if (!isDecoratorMode && !selectedEl) return null;

  return (
    <>
      {selectedEl && (
        <ModalSuspense onCancel={() => setSelectedEl(null)}>
          <DecoratorModal
            targetElement={selectedEl}
            onClose={() => setSelectedEl(null)}
            parentTag={getEditableParent(selectedEl)?.tagName.toLowerCase()}
            onSelectParent={() => setSelectedEl((el) => getEditableParent(el) || el)}
          />
        </ModalSuspense>
      )}
    </>
  );
};

export default DecoratorOverlay;
