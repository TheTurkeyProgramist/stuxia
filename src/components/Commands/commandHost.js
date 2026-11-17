// Міст між консоллю команд і App: App на кожному рендері кладе сюди свіжі дії,
// консоль бере їх у момент виконання команди. Так консоль не тягне пропси через Header.

let host = null;

/** App викликає на кожному рендері зі свіжими діями (замикання на поточний стан). */
export const setCommandHost = (next) => {
  host = next;
};

/** Поточні дії застосунку або null, якщо App ще не готовий. */
export const getCommandHost = () => host;

// Модалки, що живуть у Hero (ШІ-помічник, мова) — відкриваються подією
export const OPEN_HERO_MODAL_EVENT = "stykhiia:open-hero-modal";
