import React, { useEffect, useState } from "react";
import { MdMouse } from "react-icons/md";
import { createPortal } from "react-dom";
import * as ContextMenu from "@radix-ui/react-context-menu";
import toast from "react-hot-toast";
import {
  FiBookOpen,
  FiCopy,
  FiDownload,
  FiExternalLink,
  FiEye,
  FiImage,
  FiMonitor,
  FiSearch,
  FiVideo,
  FiX,
} from "react-icons/fi";
import "./SiteContextMenu.css";
import { getFloatingRoot } from "../utils/siteMirror";
import { getPref, subscribePrefs } from "../utils/prefsStore.js";

import i18n from "../i18n/i18n.js";
const SITE_CONTEXT_MENU_KEY = "site_context_menu_enabled";

const readEnabled = () => {
  try {
    return getPref(SITE_CONTEXT_MENU_KEY) === "true";
  } catch {
    return false;
  }
};

export default function SiteContextMenu({ children, isDarkMode }) {
  // За замовчуванням вимкнено — показується звичайне меню браузера
  const [isEnabled, setIsEnabled] = useState(readEnabled);
  const [selectedText, setSelectedText] = useState("");
  const [media, setMedia] = useState(null);
  const [reader, setReader] = useState(null);
  // У дзеркальному режимі меню рендериться в шар-компенсатор, інакше воно опиниться навпроти курсора
  const [portalRoot, setPortalRoot] = useState(undefined);

  useEffect(() => {
    const syncEnabled = () => setIsEnabled(readEnabled());
    return subscribePrefs(syncEnabled);
  }, []);

  const captureContext = (event) => {
    setPortalRoot(getFloatingRoot());
    setSelectedText(window.getSelection()?.toString().trim() ?? "");
    const target = event.target instanceof Element ? event.target : null;
    const mediaElement = target?.closest("img, video");

    if (mediaElement instanceof HTMLImageElement) {
      setMedia({ kind: "image", src: mediaElement.currentSrc || mediaElement.src, alt: mediaElement.alt });
    } else if (mediaElement instanceof HTMLVideoElement) {
      setMedia({
        kind: "video",
        src: mediaElement.currentSrc || mediaElement.src || mediaElement.querySelector("source")?.src,
      });
    } else {
      setMedia(null);
    }
  };

  const copySelection = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(selectedText);
        return;
      }
    } catch {
      // Fall back to the document copy command when clipboard access is denied.
    }

    const textArea = document.createElement("textarea");
    textArea.value = selectedText;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  };

  const copyMedia = async () => {
    if (!media) return;

    if (media.kind === "video") {
      await navigator.clipboard.writeText(media.src);
      return;
    }

    try {
      const response = await fetch(media.src);
      const imageBitmap = await createImageBitmap(await response.blob());
      const canvas = document.createElement("canvas");
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvas.getContext("2d").drawImage(imageBitmap, 0, 0);
      const png = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      await navigator.clipboard.write([new ClipboardItem({ "image/png": png })]);
    } catch {
      await navigator.clipboard.writeText(media.src);
    }
  };

  const downloadMedia = async () => {
    if (!media) return;
    const link = document.createElement("a");
    const pathname = new URL(media.src, window.location.href).pathname;
    link.download = pathname.split("/").pop() || (media.kind === "image" ? "photo" : "video");

    try {
      const response = await fetch(media.src);
      link.href = URL.createObjectURL(await response.blob());
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    } catch {
      link.href = media.src;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.click();
    }
  };

  const openReader = () => {
    const content = document.querySelector("article, [role='article']") ?? document.querySelector("main") ?? document.body;
    const title = document.title || i18n.t("ui.SiteContextMenu.rezhymChytannia");
    const text = content.innerText.trim();
    setReader({ title, text });
  };

  const openLens = () => {
    if (media?.kind !== "image") return;
    window.open(`https://lens.google.com/uploadbyurl?url=${encodeURIComponent(media.src)}`, "_blank", "noopener,noreferrer");
  };

  const openMedia = () => {
    if (media) window.open(media.src, "_blank", "noopener,noreferrer");
  };

  /** Браузери блокують відкриття нативного меню через JS (isTrusted=false).
   *  Єдиний спосіб — Shift + права кнопка миші. Показуємо підказку. */
  const openNativeMenu = () => {
    toast(i18n.t("ui.SiteContextMenu.utrymaiteShiftINatysnit"), {
      icon: <MdMouse style={{ fontSize: "18px" }} />,
      duration: 5000,
    });
  };

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger asChild disabled={!isEnabled}>
        <div
          className="site-context-menu-scope"
          onContextMenuCapture={isEnabled ? captureContext : undefined}
        >
          {children}
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal container={portalRoot}>
        <ContextMenu.Content
          className="site-context-menu-content"
          data-theme={isDarkMode ? "dark" : "light"}
          collisionPadding={10}
          sideOffset={5}
        >
          {/* ── Меню браузера (вгорі) ── */}
          <ContextMenu.Item
            className="site-context-menu-item"
            title={i18n.t("ui.SiteContextMenu.brauzerNeDozvoliaieSaitu")}
            onSelect={openNativeMenu}
          >
            <FiMonitor aria-hidden="true" />
            <span>{i18n.t("ui.SiteContextMenu.meniuBrauzeraShiftPrava")}</span>
          </ContextMenu.Item>
          <ContextMenu.Separator className="site-context-menu-separator" />

          <ContextMenu.Item
            className="site-context-menu-item"
            title={i18n.t("ui.SiteContextMenu.vidkryiteDevtoolsKlavishamyF12")}
            onSelect={() => toast(i18n.t("ui.SiteContextMenu.brauzerNeDozvoliaieSaitu2"))}
          >
            <FiEye aria-hidden="true" />
            <span>{i18n.t("ui.SiteContextMenu.perevirytyDevtoolsF12")}</span>
          </ContextMenu.Item>
          <ContextMenu.Item
            className="site-context-menu-item"
            disabled={!selectedText}
            onSelect={() => void copySelection()}
          >
            <FiCopy aria-hidden="true" />
            <span>{i18n.t("ui.SiteContextMenu.kopiiuvatyVydilene")}</span>
          </ContextMenu.Item>
          {media && (
            <>
              <ContextMenu.Separator className="site-context-menu-separator" />
              <ContextMenu.Item className="site-context-menu-item" onSelect={() => void copyMedia()}>
                {media.kind === "image" ? <FiImage aria-hidden="true" /> : <FiVideo aria-hidden="true" />}
                <span>{media.kind === "image" ? i18n.t("ui.SiteContextMenu.kopiiuvatyFoto") : i18n.t("ui.SiteContextMenu.kopiiuvatyVideo")}</span>
              </ContextMenu.Item>
              <ContextMenu.Item className="site-context-menu-item" onSelect={() => void downloadMedia()}>
                <FiDownload aria-hidden="true" />
                <span>{media.kind === "image" ? i18n.t("ui.SiteContextMenu.skachatyFoto") : i18n.t("ui.SiteContextMenu.skachatyVideo")}</span>
              </ContextMenu.Item>
              {media.kind === "image" && (
                <ContextMenu.Item className="site-context-menu-item" onSelect={openLens}>
                  <FiSearch aria-hidden="true" />
                  <span>{i18n.t("ui.SiteContextMenu.shukatyFotoUGoogle")}</span>
                </ContextMenu.Item>
              )}
              <ContextMenu.Item className="site-context-menu-item" onSelect={openMedia}>
                <FiExternalLink aria-hidden="true" />
                <span>{i18n.t("ui.SiteContextMenu.vidkrytyVNoviiVkladtsi")}</span>
              </ContextMenu.Item>
            </>
          )}
          <ContextMenu.Separator className="site-context-menu-separator" />
          <ContextMenu.Item className="site-context-menu-item" onSelect={openReader}>
            <FiBookOpen aria-hidden="true" />
            <span>{i18n.t("ui.SiteContextMenu.vidkrytyVRezhymiChytannia")}</span>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
      {reader &&
        createPortal(
          <div className="site-reader-backdrop" onMouseDown={(event) => event.button === 0 && event.target === event.currentTarget && setReader(null)}>
            <section className="site-reader" role="dialog" aria-modal="true" aria-labelledby="site-reader-title" data-theme={isDarkMode ? "dark" : "light"}>
              <header className="site-reader-header">
                <h1 id="site-reader-title">{reader.title}</h1>
                <button type="button" aria-label={i18n.t("ui.SiteContextMenu.zakrytyRezhymChytannia")} onClick={() => setReader(null)}>
                  <FiX aria-hidden="true" />
                </button>
              </header>
              <article className="site-reader-content">{reader.text.split("\n").filter(Boolean).map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>)}</article>
            </section>
          </div>,
          document.body,
        )}
    </ContextMenu.Root>
  );
}