// Замість системних підказок title на всьому сайті — власні, у стилі Tooltip.jsx.
// Поки курсор чи фокус на елементі, title прибирається (інакше браузер покаже ще й свою),
// а потім повертається на місце.
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useFloating, autoUpdate, offset, flip, shift } from "@floating-ui/react";
import { TooltipBox } from "./Tooltip";
import { MirrorText } from "./MirrorSafe";
import { getFloatingRoot } from "../../utils/siteMirror";

const DELAY = 250;
// У iframe title — назва для читачів з екрана, підказкою вона не є
const closestTitled = (node) => node?.closest?.("[title]:not(iframe)") || null;

const TitleTooltips = () => {
  const [tip, setTip] = useState(null); // { anchor, text }
  const { refs, floatingStyles } = useFloating({
    open: Boolean(tip),
    elements: { reference: tip?.anchor },
    placement: "top",
    strategy: "fixed",
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 5 })],
  });

  useEffect(() => {
    let anchor = null;
    let timer = null;
    let saved = new Map(); // елемент → його title
    let labelled = false;

    const dismiss = () => {
      clearTimeout(timer);
      setTip(null);
    };

    // React міг оновити title, поки на елементі курсор («Пауза» ↔ «Відтворити»)
    const observer = new MutationObserver((records) => {
      records.forEach(({ target }) => {
        const text = target.getAttribute("title");
        if (text === null) return;
        saved.set(target, text);
        target.removeAttribute("title");
        if (target !== anchor) return;
        if (labelled) target.setAttribute("aria-label", text);
        setTip((shown) => (shown && text ? { anchor, text } : null));
      });
    });

    const release = () => {
      dismiss();
      observer.disconnect();
      saved.forEach((text, el) => el.setAttribute("title", text));
      if (labelled) anchor.removeAttribute("aria-label");
      saved = new Map();
      labelled = false;
      anchor = null;
    };

    const take = (el) => {
      anchor = el;
      // Прибираємо title і в предків: інакше браузер покаже їхню підказку
      for (let node = el; node; node = closestTitled(node.parentElement)) {
        saved.set(node, node.getAttribute("title"));
        node.removeAttribute("title");
        observer.observe(node, { attributes: true, attributeFilter: ["title"] });
      }
      const text = saved.get(el);
      if (!text) return;
      // Кнопка лише з іконкою не має лишитися без назви
      if (!el.hasAttribute("aria-label") && !el.textContent.trim()) {
        el.setAttribute("aria-label", text);
        labelled = true;
      }
      timer = setTimeout(() => {
        if (el.isConnected) setTip({ anchor: el, text: saved.get(el) });
      }, DELAY);
    };

    const enter = (target) => {
      const titled = closestTitled(target);
      // Усе ще всередині того самого елемента, без вкладеної власної підказки
      if (anchor?.contains(target) && (!titled || !anchor.contains(titled))) return;
      release();
      if (titled) take(titled);
    };

    const onOver = (e) => {
      if (e.pointerType !== "touch") enter(e.target);
    };
    const onOut = (e) => {
      if (!e.relatedTarget) release();
    };
    const onFocus = (e) => {
      if (e.target.matches?.(":focus-visible")) enter(e.target);
    };
    const onKey = (e) => {
      if (e.key === "Escape") dismiss();
    };

    const events = [
      ["pointerover", onOver],
      ["pointerout", onOut],
      ["focusin", onFocus],
      ["focusout", release],
      ["pointerdown", dismiss],
      ["keydown", onKey],
      ["scroll", dismiss],
    ];
    events.forEach(([name, handler]) => document.addEventListener(name, handler, true));
    return () => {
      events.forEach(([name, handler]) => document.removeEventListener(name, handler, true));
      release();
    };
  }, []);

  if (!tip?.anchor.isConnected) return null;
  return createPortal(
    <TooltipBox ref={refs.setFloating} $isDarkMode role="tooltip" style={{ ...floatingStyles, whiteSpace: "pre-line" }}>
      <MirrorText>{tip.text}</MirrorText>
    </TooltipBox>,
    // У повноекранному режимі видно лише вміст повноекранного елемента
    document.fullscreenElement || getFloatingRoot() || document.body,
  );
};

export default TitleTooltips;
