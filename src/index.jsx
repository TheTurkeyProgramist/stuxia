// Спершу підтягуємо налаштування з localforage (мова, анімації, колір тощо),
// і лише потім запускаємо i18n та застосунок — інакше вони прочитали б значення за замовчуванням
import { hydratePrefs } from "./utils/prefsStore.js";
import { captureReferralFromUrl } from "./utils/referral.js";

hydratePrefs()
  .then(() => captureReferralFromUrl()) // ?ref= з посилання «Запроси друга»
  .then(() => import("./main.jsx"));
