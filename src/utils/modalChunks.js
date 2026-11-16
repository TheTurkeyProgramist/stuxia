// Файли модалок, що відкриваються з шапки. Один завантажувач і для React.lazy (App.jsx),
// і для попереднього завантаження: наведення курсора чи дотик до кнопки починає вантажити
// модалку ще до кліку, тож на момент натискання вона здебільшого вже готова.
import { retryImport } from "./lazyWithRetry.js";
import { preloadModalLoading } from "../components/Loader/ModalLoading.jsx";

export const modalLoaders = {
  settings: () => import("../components/Modals/UserSettingsModal.jsx"),
  shop: () => import("../components/Modals/ShopModal.jsx"),
  authors: () => import("../components/Header/AuthorsDirectoryModal.jsx"),
  help: () => import("../components/Modals/UserSearchModal.jsx"),
  register: () => import("../components/Modals/Modal.jsx"),
};

const started = new Set();

/** Почати завантаження модалки заздалегідь (повторні виклики нічого не роблять). */
export const prefetchModal = (key) => {
  preloadModalLoading();
  const load = modalLoaders[key];
  if (!load || started.has(key)) return;
  // Ощадний режим чи 2G — не вантажимо наперед того, що людина може й не відкрити
  const connection = typeof navigator !== "undefined" ? navigator.connection : null;
  if (connection?.saveData || /2g/.test(connection?.effectiveType || "")) return;
  started.add(key);
  retryImport(load, 1).catch(() => started.delete(key));
};

/** Пропси для кнопки: попереднє завантаження при наведенні, фокусі й дотику. */
export const prefetchProps = (key) => {
  const run = () => prefetchModal(key);
  return { onPointerEnter: run, onFocus: run, onTouchStart: run };
};
