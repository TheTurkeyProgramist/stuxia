// Публічна конфігурація Firebase (без SDK) — щоб її можна було імпортувати, не тягнучи бібліотеку
export const firebaseConfig = {
  apiKey: "AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",
  authDomain: "stuxia-5b535.firebaseapp.com",
  projectId: "stuxia-5b535",
  storageBucket: "stuxia-5b535.firebasestorage.app",
  messagingSenderId: "801101038904",
  appId: "1:801101038904:web:70d01ab63f631b74acadcd",
};

// Публічний ключ сайту Cloudflare Turnstile (безкоштовна перевірка від ботів) — лише для
// реєстрації push-сповіщень (Cloud Function savePushProfile). Cloudflare → Turnstile →
// Add widget → домен stuxia.com: «Site Key» сюди, «Secret Key» — у Firebase:
//   firebase functions:secrets:set TURNSTILE_SECRET
// Порожньо — push вимкнено, працюють лише сповіщення, поки Стихія відкрита.
export const turnstileSiteKey = "0x4AAAAAAF7p4UWIAAnbw2_b";

// Публічний VAPID-ключ для push-сповіщень (FCM). Він не секретний, як і apiKey.
// Firebase Console → Project settings → Cloud Messaging → Web Push certificates →
// Generate key pair → скопіюйте «Key pair» сюди.
export const fcmVapidKey =
  "BIvwjqpK2ULD7e6R_cqPeod9Pky4z8ou3-3oyIz6EbExq08UAv6AutTEsM_k53-GOI4sl2MjRvPsf0j9A2WyOFw";
