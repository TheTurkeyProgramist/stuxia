// Новини (News.jsx) і картка погоди (Weather.jsx) — окремі файли, разом ~90 КБ gzip.
//
// Телефон: вантажаться після першого показу сторінки (React.lazy) — так фон Hero (LCP)
// з'являється раніше; PageSpeed для телефона виріс з ~70 до 83.
// ПК: LCP і так швидкий, а робота після першого показу рахується в TBT — PageSpeed для ПК
// падав з 96 до 61–80. Тож на ПК обидва файли вантажаться паралельно з main.jsx, і сторінка
// малюється, коли готові всі (як було до лінивого завантаження). Див. index.jsx і main.jsx.

export const EAGER_CHUNKS_QUERY = "(min-width: 768px)";

export const loadNews = () => import("../components/News/News.jsx");
export const loadWeather = () => import("../components/Weather/Weather.jsx");

const eager = {};
let ready = Promise.resolve();

/** На ПК — почати завантаження новин і картки погоди. Викликати до import("./main.jsx"). */
export const startEagerChunks = () => {
  if (typeof window === "undefined" || !window.matchMedia?.(EAGER_CHUNKS_QUERY).matches) {
    return ready;
  }
  ready = Promise.all([
    loadNews().then((m) => {
      eager.News = m.default;
    }),
    loadWeather().then((m) => {
      eager.Weather = m.default;
    }),
  ]).catch((err) => {
    // Не вийшло — не страшно: компоненти завантажаться ліниво, як на телефоні
    console.warn("Не вдалося заздалегідь завантажити новини / картку погоди:", err);
  });
  return ready;
};

/** Проміс, який main.jsx чекає перед першим малюванням (на телефоні — одразу виконаний). */
export const eagerChunksReady = () => ready;

/** Уже завантажений компонент ("News" | "Weather") або null — тоді беремо React.lazy-версію. */
export const getEagerChunk = (name) => eager[name] || null;
