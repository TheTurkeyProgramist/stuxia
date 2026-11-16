// Спершу підтягуємо налаштування з localforage (мова, анімації, колір тощо),
// і лише потім запускаємо i18n та застосунок — інакше вони прочитали б значення за замовчуванням
import { hydratePrefs } from "./utils/prefsStore.js";
import { captureReferralFromUrl } from "./utils/referral.js";
import { startEagerChunks } from "./utils/eagerChunks.js";

hydratePrefs()
  .then(() => captureReferralFromUrl()) // ?ref= з посилання «Запроси друга»
  .then(() => {
    // ПК: новини й картка погоди вантажаться паралельно з main.jsx (див. eagerChunks.js).
    // Після hydratePrefs — бо їхній код може читати налаштування вже при завантаженні
    startEagerChunks();
    return import("./main.jsx");
  });
