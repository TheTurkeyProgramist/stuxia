import React, { useState } from "react";
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
  FiPrinter,
  FiSearch,
  FiVideo,
  FiX,
} from "react-icons/fi";
import "./SiteContextMenu.css";

export default function SiteContextMenu({ children, isDarkMode }) {
  const [selectedText, setSelectedText] = useState("");
  const [media, setMedia] = useState(null);
  const [reader, setReader] = useState(null);

  const captureContext = (event) => {
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

  const printImage = () => {
    if (media?.kind !== "image") return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.title = media.alt || "Фото";
    const image = printWindow.document.createElement("img");
    image.src = media.src;
    image.alt = media.alt || "";
    image.style.cssText = "display:block;max-width:100%;max-height:95vh;margin:auto;object-fit:contain";
    image.onload = () => printWindow.print();
    printWindow.document.body.style.cssText = "margin:0;padding:2vh;display:grid;place-items:center";
    printWindow.document.body.appendChild(image);
  };

  const openReader = () => {
    const content = document.querySelector("article, [role='article']") ?? document.querySelector("main") ?? document.body;
    const title = document.title || "Режим читання";
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

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger asChild>
        <div
          className="site-context-menu-scope"
          onContextMenuCapture={captureContext}
        >
          {children}
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className="site-context-menu-content"
          data-theme={isDarkMode ? "dark" : "light"}
          collisionPadding={10}
          sideOffset={5}
        >
          <ContextMenu.Item
            className="site-context-menu-item"
            title="Відкрийте DevTools клавішами F12 або Ctrl+Shift+I"
            onSelect={() => toast("Браузер не дозволяє сайту відкрити DevTools. Натисніть F12 або Ctrl+Shift+I.")}
          >
            <FiEye aria-hidden="true" />
            <span>Перевірити (DevTools · F12)</span>
          </ContextMenu.Item>
          <ContextMenu.Item
            className="site-context-menu-item"
            disabled={!selectedText}
            onSelect={() => void copySelection()}
          >
            <FiCopy aria-hidden="true" />
            <span>Копіювати виділене</span>
          </ContextMenu.Item>
          {media && (
            <>
              <ContextMenu.Separator className="site-context-menu-separator" />
              <ContextMenu.Item className="site-context-menu-item" onSelect={() => void copyMedia()}>
                {media.kind === "image" ? <FiImage aria-hidden="true" /> : <FiVideo aria-hidden="true" />}
                <span>{media.kind === "image" ? "Копіювати фото" : "Копіювати відео"}</span>
              </ContextMenu.Item>
              <ContextMenu.Item className="site-context-menu-item" onSelect={() => void downloadMedia()}>
                <FiDownload aria-hidden="true" />
                <span>{media.kind === "image" ? "Скачати фото" : "Скачати відео"}</span>
              </ContextMenu.Item>
              {media.kind === "image" && (
                <>
                  <ContextMenu.Item className="site-context-menu-item" onSelect={printImage}>
                    <FiPrinter aria-hidden="true" />
                    <span>Друкувати фото</span>
                  </ContextMenu.Item>
                  <ContextMenu.Item className="site-context-menu-item" onSelect={openLens}>
                    <FiSearch aria-hidden="true" />
                    <span>Шукати фото у Google Об'єктив</span>
                  </ContextMenu.Item>
                </>
              )}
              <ContextMenu.Item className="site-context-menu-item" onSelect={openMedia}>
                <FiExternalLink aria-hidden="true" />
                <span>Відкрити в новій вкладці</span>
              </ContextMenu.Item>
            </>
          )}
          <ContextMenu.Separator className="site-context-menu-separator" />
          <ContextMenu.Item className="site-context-menu-item" onSelect={openReader}>
            <FiBookOpen aria-hidden="true" />
            <span>Відкрити в режимі читання</span>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
      {reader &&
        createPortal(
          <div className="site-reader-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setReader(null)}>
            <section className="site-reader" role="dialog" aria-modal="true" aria-labelledby="site-reader-title" data-theme={isDarkMode ? "dark" : "light"}>
              <header className="site-reader-header">
                <h1 id="site-reader-title">{reader.title}</h1>
                <button type="button" aria-label="Закрити режим читання" onClick={() => setReader(null)}>
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