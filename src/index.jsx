// Спершу підтягуємо налаштування з localforage (мова, анімації, колір тощо),
// і лише потім запускаємо i18n та застосунок — інакше вони прочитали б значення за замовчуванням
import { hydratePrefs } from "./utils/prefsStore.js";

hydratePrefs().then(() => import("./main.jsx"));
