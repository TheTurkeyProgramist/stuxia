import{o as e,r as t,t as n}from"./rolldown-runtime-C_JJxWoe.js";import{a as r}from"./vendor-i18n-DhRqfqeK.js";import{s as a}from"./vendor-motion-B-5ZsAFi.js";import{i as o,r as i,t as s}from"./styled-components.browser.esm-C9MjP7gd.js";import{Ii as l,Qi as d,Wr as c,at as u,ct as p,dt as f,ft as g,ht as b,it as x,lt as m,mt as h,nt as v,ot as y,pt as k,ri as w,st as $,ut as j}from"./vendor-ui-DBFQ2jRZ.js";import{n as S,t as C}from"./MirrorSafe-BBuq4yF6.js";import{n as M,t as D}from"./ventusky-map-CzzRtc5e.js";import{t as T}from"./turkey-in-dragon-museum-DM6RlmZm.js";import{t as z}from"./domino-reading-COxbvq9p.js";var P=n(e=>{var t=r();var n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=t.useSyncExternalStore,o=t.useRef,i=t.useEffect,s=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,r,d,c){var u=o(null);if(null===u.current){var p={hasValue:!1,value:null};u.current=p}else p=u.current;u=s(function(){function e(e){if(!i){if(i=!0,a=e,e=d(e),void 0!==c&&p.hasValue){var t=p.value;if(c(t,e))return o=t}return o=e}if(t=o,n(a,e))return t;var r=d(e);return void 0!==c&&c(t,r)?(a=e,t):(a=e,o=r)}var a,o,i=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,r,d,c]);var f=a(e,u[0],u[1]);return i(function(){p.hasValue=!0,p.value=f},[f]),l(f),f}}),E=n((e,t)=>{t.exports=P()}),G=e(r(),1),q=E();var A={notify(){},get:()=>[]};var I=(()=>!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement))(),L=(()=>"undefined"!=typeof navigator&&"ReactNative"===navigator.product)(),Y=(()=>I||L?G.useLayoutEffect:G.useEffect)(),F=Symbol.for("react-redux-context"),R="undefined"!=typeof globalThis?globalThis:{};function O(){if(!G.createContext)return{};const e=R[F]??(R[F]=new Map);let t=e.get(G.createContext);return t||(t=G.createContext(null),e.set(G.createContext,t)),t}var W=O();var H=function(e){const{children:t,context:n,serverState:r,store:a}=e,o=G.useMemo(()=>{const e=function(e,t){let n,r=A,a=0,o=!1;function i(){d.onStateChange&&d.onStateChange()}function s(){a++,n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){(()=>{let t=e;for(;t;)t.callback(),t=t.next})()},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function l(){a--,n&&0===a&&(n(),n=void 0,r.clear(),r=A)}const d={addNestedSub:function(e){s();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),l())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return o},trySubscribe:function(){o||(o=!0,s())},tryUnsubscribe:function(){o&&(o=!1,l())},getListeners:()=>r};return d}(a);return{store:a,subscription:e,getServerState:r?()=>r:void 0}},[a,r]),i=G.useMemo(()=>a.getState(),[a]);Y(()=>{const{subscription:e}=o;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==a.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[o,i]);const s=n||W;return G.createElement(s.Provider,{value:o},t)};function N(e=W){return function(){return G.useContext(e)}}var U=N();function V(e=W){const t=e===W?U:N(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var _=V();function K(e=W){const t=e===W?_:V(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var B=K(),Q=(e,t)=>e===t;function J(e=W){const t=e===W?U:N(e),n=(e,n={})=>{const{equalityFn:r=Q}="function"==typeof n?{equalityFn:n}:n,{store:a,subscription:o,getServerState:i}=t();G.useRef(!0);const s=G.useCallback({[e.name]:t=>e(t)}[e.name],[e]),l=(0,q.useSyncExternalStoreWithSelector)(o.addNestedSub,a.getState,i||a.getState,s,r);return G.useDebugValue(l),l};return Object.assign(n,{withTypes:()=>n}),n}var X=J(),Z=JSON.parse('[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна!\\nЩо таке Стихія? — Це платформа «погода + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 14 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити стиль сайту.\\n\\nЧи є застосунок? — Так! Є версії для Windows, Linux та Android: шукайте їх у Налаштуваннях Стихії → «Застосунки Стихії». На iPhone та iPad відкрийте сайт у Safari і натисніть «Поділитися» → «На екран Додому».\\n\\nЯк зв\'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам. ","image":"latestUpdate"},{"q":"Угода користувача","a":"Редакція від 8 листопада 2026 року.\\n\\nЦя Угода регулює використання платформи «Стихія» (далі — Сервіс) між Користувачем та Адміністрацією (автор проєкту, TheTurkeyStudio). Використовуючи будь-яку частину Сервісу, ви підтверджуєте згоду з усіма пунктами цієї Угоди. Якщо ви не згодні — будь ласка, не користуйтеся Сервісом.\\n\\n1. Вік\\nСервіс, зокрема створення акаунта, призначений для осіб від 14 років. Користуючись Сервісом або реєструючись, ви підтверджуєте, що вам уже виповнилося 14.\\nОкремі функції мають вищий вік: ШІ з власним ключем Gemini — з 18 років (вимога Google), показ тем у фільтрі новин — з 18 років, новини про казино та ставки і вимкнення фільтра — з 21 року. Вік підтверджується у вікні перед увімкненням функції.\\n\\n2. Штучний інтелект (ШІ)\\n2.1. Сервіс використовує генеративний ШІ (Google Gemini) для допомоги та створення контенту.\\n2.2. ШІ може помилятися або давати суб\'єктивні відповіді. Перевіряйте важливу інформацію: Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. ШІ працює через ваш особистий API-ключ Gemini. Ключ зберігається лише у вашому браузері й не надсилається Адміністрації. Ліміти та умови безкоштовного використання встановлює Google і може їх змінювати.\\n2.5. Ваші повідомлення до ШІ надсилаються до Google та обробляються згідно з умовами Google.\\n\\n3. Контент і авторські права\\n3.1. Статус контенту: Сервіс надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація не є власником розміщених сторонніх медіафайлів (виняток: матеріали з маркуванням «TheTurkeyStudio») і показує їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Права на оригінальну частину робіт, які ви створюєте за допомогою Сервісу, належать вам. Використання чужої інтелектуальної власності (персонажів, торговельних марок, медіа) регулюється правилами її правовласників.\\n3.3. Некомерційне використання матеріалів Сервісу (наприклад, показ у соцмережах) дозволене за умови посилання на джерело «Стихія». Під час некомерційного друку в кутку зображення має залишатися ім\'я автора, вказане на Сайті.\\n3.4. Комерційне використання (зокрема продаж у друкованому чи цифровому вигляді) матеріалів, що містять елементи чужої інтелектуальної власності або персонажів, заборонене. Відповідальність за таке використання несе користувач.\\n3.5. Скарги правовласників (DMCA): сторонні матеріали розміщуються для ознайомлення та заохочення переходу на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) і заперечуєте проти доступності вашого контенту на Сайті, надішліть запит на theturkeystudio@gmail.com.\\n\\n4. Конфіденційність і дані\\n4.1. Ми не просимо зайвого: для акаунта достатньо email або входу через Google. Ми не збираємо дат народження, не використовуємо рекламних трекерів і не продаємо дані.\\n4.2. У хмарі (Firebase) зберігаються лише ваші налаштування, картки, приховані новини та фільтри, скарги на новини, а також технічні лічильники для захисту від зловживань.\\n4.3. Сторонні сервіси обробляють дані за власними політиками: Firebase (Google) — email, а при вході через Google також ім\'я та фото профілю; Cloudflare (хостинг) — IP-адреси й технічні журнали; Google Gemini — повідомлення до ШІ.\\n4.4. Частина даних (наприклад, API-ключ ШІ та локальні налаштування) зберігається лише на вашому пристрої.\\n4.5. Видалити акаунт можна самостійно: Налаштування → Безпека → «Видалити акаунт». Буде видалено вхід і хмарні дані (налаштування, картки погоди, фільтри новин). Залишаться лише технічні лічильники лімітів і позначки поданих скарг на новини — без зв\'язку з вашою поштою чи іменем.\\n4.6. Код Сервісу відкритий — ви можете перевірити його самостійно або за допомогою ШІ: https://github.com/TheTurkeyProgramist/stuxia\\n\\n5. Правила поведінки\\n5.1. Заборонено:\\n— спроби злому, обходу обмежень або несанціонованого доступу до чужих акаунтів;\\n— масові чи навмисно хибні скарги на новини;\\n— автоматизовані запити (боти), що навантажують Сервіс.\\n5.2. За порушення Адміністрація може обмежити доступ до Сервісу або заблокувати акаунт.\\n\\n6. Відмова від гарантій\\n6.1. Сервіс надається «як є» (as is). Ми не гарантуємо безперебійної роботи у разі технічних збоїв на боці провайдерів або форс-мажорних обставин.\\n6.2. Прогнози погоди, новини та інші дані надходять зі сторонніх джерел і можуть бути неточними. Не ухвалюйте важливих рішень (зокрема щодо безпеки) лише на їхній підставі.\\n\\n7. Зміни до Угоди\\n7.1. Адміністрація може змінювати цю Угоду. Про суттєві зміни ми попередимо щонайменше за 3 тижні до набрання ними чинності через повідомлення на цій сторінці. Несуттєві правки (виправлення помилок, уточнення формулювань) діють з моменту публікації.\\n7.2. Продовжуючи користуватися Сервісом після набрання змінами чинності, ви погоджуєтеся з новою редакцією.\\n\\n8. Застосовне право і контакти\\n8.1. Угода регулюється законодавством України.\\n8.2. З усіх питань пишіть на theturkeystudio@gmail.com.","image":"agreement"},{"q":"🎨 Про малюнки","a":"Малюнки на сторінках навчання я малював сам :)\\nВибачте, Ніцерона намалював не дуже. А ще у слові «бундюча» є 2 орфографічні помилки.","image":"plans"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок. Режим пошуку можна змінити: «За назвою міста», «Координати» (широта й довгота) або «Запитати ШІ ✦».\\nКрок 2. Оберіть місто зі списку підказок. Список не закривається, тож можна додати кілька міст поспіль — біля доданих з\'явиться ✓. Коли закінчите, натисніть «Готово».\\nКрок 3. Зверніть увагу на мітки біля міст у списку:\\n  • Червона — небезпечна погода вже сьогодні.\\n  • Помаранчева — небезпечна погода завтра або післязавтра.\\n  Небезпечною вважається температура вище 30°C або нижче −30°C, вітер понад 10 м/с, УФ-індекс понад 7. Наведіть на мітку, щоб побачити всі причини.\\nКрок 4. У картці погоди є вкладки:\\n  • Зараз — температура й відчуття, вологість, вітер і пориви, точка роси, тиск, хмарність, видимість, УФ-індекс, сніг, температура ґрунту, висота замерзання, випаровування.\\n  • Годинна — детально на 72 години, далі до 7 днів. Вигляд: графік, таблиця або блоки (графік — лише для перших 72 годин).\\n  • 16 днів (на телефоні — «Місячна») — прогноз на два тижні вперед: графік, таблиця або блоки.\\n  • Смарт — поради без ШІ та інтернету: день і ніч, опади й пік тепла, тижневий тренд, що вдягнути, тиск і самопочуття.\\nКрок 5. На погодинному графіку небезпечні години підсвічуються: червоним — спека, синім — мороз, помаранчевим — сильний вітер.\\nКрок 6. Кнопка-шестерня на картці: одиниці виміру (°C, °F, K; м/с, км/год, милі/год, вузли; гПа, мм рт. ст. та інші), нова назва, фон, свої свята й події, порядок карток, GPS (на картці вашої локації), видалення та «Прикріпити до ШІ».\\nЛіміти: до 8 власних карток плюс картка вашої локації (після 5 сайт попередить про навантаження на пристрій). З акаунтом можна додати до 40 карток на добу.\\nОновлення: картки оновлюються самі на початку кожної години, поки сторінка відкрита.","image":"weather"},{"q":"Відсутність реклами і підписок.","a":"Це трохи дивно, але логічно. Ми поважаємо ваш час і не хочемо його витрачати на рекламу. Деякі функції обмежені, бо технології Firebase мають безкоштовний ліміт, вони відчутні при великій активності. Повірте через 100 спам-ботів можна втратити за місяць 20000грн.","image":"noAds"},{"q":"Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані джерела про природу й науку: Phys.org, ScienceDaily, Nature, Mongabay, The Guardian Environment.\\nКрок 3. Щоб додати своє джерело, введіть назву сайту або посилання в рядок «Додати стрічку». Підтримуються RSS, YouTube-канали, Telegram-канали, Telegraph, Hive, Mastodon і Bluesky. Можна обрати й зі списку рекомендованих сайтів. Максимум — 5 власних джерел. Facebook не підтримується.\\nКрок 4. Мітка «НОВЕ» зникає через 1 хвилину після того, як ви побачили новину.\\nКрок 5. Меню новини (шестерня):\\n  • Прикріпити до ШІ — додати новину в чат ШІ-Допомоги.\\n  • ШІ Виклад — обговорення новини з чат-ботом (потрібен ключ Gemini). Зберігаються 10 останніх повідомлень, до 300 символів у повідомленні. Чат очищається через 24 год без активності.\\n  • Заглушити — приховує новину, її завжди можна «Розглушити». З акаунтом можна синхронізувати заглушені новини між пристроями: до 30 дій на добу, причому «Заглушити» і «Розглушити» рахуються обидві. Те, що понад ліміт, зберігається лише на цьому пристрої. Лічильник видно в меню новини.\\n  • Подати скаргу — лише з акаунтом, одна скарга на новину на добу і не більше 20 скарг на добу загалом. Новина з 10 скаргами за добу ховається для всіх, а джерело з 20 скаргами потрапляє в «Чорний список» на 24 години.\\nФільтрація: новини про війну, політику, кримінал, 18+, казино тощо приховуються автоматично. Фільтр можна вимкнути в Налаштуваннях Стихії → Новини. Він краще розпізнає українські джерела, ніж міжнародні.","image":"news"},{"q":"ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key».\\n\\nЧи зберігаються мої ключі на сервері? — Ні. Ключ і чати зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо. Рекомендуємо, щоб ваш пристрій мав пароль, а також не прив\'язуйте картку до ключа, який ви використовуєте.\\n\\nЩо вміє ШІ-Допомога? — Кілька окремих чатів, до 15 файлів (фото, відео, аудіо) загальним розміром до 100 МБ, до 4 прикріплених карток погоди чи новин, голосове введення та пошук в інтернеті (його можна вимкнути). На питання про погоду ШІ відповідає зі свіжими даними прогнозу.\\n\\nЯк налаштувати відповіді? — Оберіть довжину (Менше / Нормально / Більше) і кількість рекомендованих питань після відповіді (0–2).\\n\\nЧому треба чекати між запитами? — Щоб берегти вашу безкоштовну квоту: 5 с без рекомендованих питань, 10 с з одним, 15 с з двома. Запит — до 300 символів.\\n\\nПомилка 503 або 429 — що робити? — 503 означає тимчасове перевантаження серверів Google, 429 — вичерпано ліміт вашого ключа. Зачекайте 1–2 хвилини і спробуйте ще раз.\\n\\nЯк скопіювати відповідь? — Натисніть кнопку копіювання біля повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":"aiHelp"},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Прогорніть нижче карток погоди до «Кліматичної мапи».\\nКрок 2. Натисніть «Активувати карту», щоб гортати й масштабувати її. Поки карта вимкнена, вона не заважає прокручувати сторінку.\\nКрок 3. Оберіть джерело: Ventusky (прогноз погоди), Windy (вітер і шари), Excalidraw (онлайн-дошка), Авіарадар. В українській версії також є Тривоги, Повітряні цілі, SaveEcoBot (якість повітря) і DeepState. Джерела можна шукати, а порядок — змінювати перетягуванням.\\nКрок 4. «2 фрейми» — дві карти поруч.\\nКрок 5. Міні-плеєр виносить карту в окреме плаваюче вікно. Також є повноекранний режим.\\nКрок 6. «Закріпити локацію» — карта запам\'ятає точку, масштаб і шар і відкриватиметься саме там.\\nКрок 7. Власний фрейм: вставте посилання або код iframe (наприклад, радар чи вебкамеру). Якщо сайт забороняє показ у фреймі, Стихія про це попередить.","image":"climate"},{"q":"За що відповідають налаштування?","a":"Налаштування Стихії — це:\\n• Профіль: прив\'язки акаунта, зміна пароля, видалення акаунта (Безпека → «Видалити акаунт»).\\n• Час і дата: секунди, формат часу, режим відображення.\\n• Інтерфейс: вимкнення анімацій, підказки в хедері, контекстне меню Стихії, таймер оновлення погоди, власний шрифт, чутливість жестів, швидкий відгук на кліки, дзеркальність сайту.\\n• Секції сайту: порядок, окрема тема для кожної секції, приховування непотрібних.\\n• Новини: фільтр, синхронізація заглушених новин (до 50 дій на добу разом зі змінами фільтра), які частини новини показувати.\\n• Вигляд: головна тема, липкий фон, навчання від Доміно, стратегія завантаження ресурсів, режим Декоратора (свій CSS).\\n• Застосунки Стихії: Windows, Android, Linux, iPhone та iPad.\\n• Перегляд поруч зі сторінкою, затемнення, кольорові та зорові фільтри з пресетами.\\n• Фонова музика: гучність, швидкість, режим відтворення, до 7 власних треків.\\n• «Скинути сайт» (внизу вікна, біля Угоди): скидання до заводських на цьому пристрої — вихід з акаунта, очищення теми, фонів, музики, ключа Gemini, кешу та інших локальних налаштувань. Акаунт і хмарні дані не видаляються: після входу вони повернуться.","image":"settings"},{"q":"Навіщо реєстрація?","a":"Без акаунта картки погоди й налаштування теж зберігаються, але лише на цьому пристрої. Акаунт потрібен, щоб:\\n• синхронізувати між пристроями картки погоди;\\n• синхронізувати тему, порядок і видимість секцій, фони (крім завантажених вами файлів) — до 100 синхронізацій на добу. Кілька швидких змін поспіль рахуються як одна, а автоматична зміна фону у випадковому режимі не рахується. Те, що понад ліміт, зберігається на цьому пристрої й потрапить в акаунт наступного дня;\\n• синхронізувати заглушені новини й фільтр новин (до 50 дій на добу);\\n• подавати скарги на новини.\\nУвійти можна через Google або email і пароль. З акаунтом діє ліміт — до 40 нових карток погоди на добу.\\nЗ метою безпеки ключ Gemini та діалоги з ШІ ніколи не синхронізуються — це можна перевірити в репозиторії на GitHub. Ми не продаємо ваші дані й передаємо їх лише сервісам, без яких сайт не працює (докладніше — в Угоді, розділ 4).\\nАкаунт можна будь-коли видалити самостійно: Налаштування → Безпека → «Видалити акаунт». Разом з ним зникнуть хмарні налаштування, картки та фільтри новин. Код ШІ-компонента: https://github.com/TheTurkeyProgramist/stuxia/blob/main/src/components/Aihelp/Aihelp.jsx","image":"registration"}]'),ee="/assets/foggy-forest-Cew27ml4.webp",te="/assets/egyptian-hieroglyphs-Dh_WKfAx.webp",ne="/assets/two-brothers-Dyn4Do12.webp",re=t({Tooltip:()=>Re,default:()=>Oe}),ae=a(),oe=o.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,ie=s`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,se=s`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,le=s`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,de=s`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,ce=i`
  opacity: 0;
  transform-origin: left center;
  animation: ${de} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:e})=>i`
    animation-delay: ${.1+.05*(e||0)}s;
  `}
`,ue=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${e=>e.$isClosing?0:1};
  pointer-events: ${e=>e.$isClosing?"none":"auto"};
  backdrop-filter: blur(5px);
`,pe=o.div`
  background: ${e=>e.$isDarkMode?"#174348b1":"#ffd001"};
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${e=>e.$isClosing?se:ie} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,fe=o.div`
  background:  ${e=>e.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,ge=o.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`,be=o.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 700;
  padding-right: 9px;
  background: ${e=>e.$isDarkMode?"#27b5b0b1":"#6f6e22c6"};
  color: ${e=>e.$isDarkMode?"#000000b1":"#ffffff"};
  height: 36px;
  font-size: 14px;
  cursor: pointer;
`,xe=o(be)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${le} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,me=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 3px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,he=o.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 190px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  background-color: #174348;
  background-image: ${({$image:e})=>e?`linear-gradient(135deg, rgba(10, 20, 25, 0.82), rgba(10, 20, 25, 0.54)), url("${e}")`:"linear-gradient(135deg, #174348, #263d5b)"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  ${ce}
`,ve=o.button`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 16px 16px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;

  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: -4px;
  }
`,ye=o.div`
  overflow: hidden;
  max-height: calc(1.4em * 3);
  line-height: 1.4;
  font-size: 15px;
`,ke=o.div`
  overflow: hidden;
  max-height: calc(1.45em * 6);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.45;
`,we=o.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${e=>e.$isHovered||e.$isPinned?"800px":"10px"};
  opacity: ${e=>e.$isHovered||e.$isPinned?1:.4};

  &:hover {
    transform: scale(1.01);
  }
`,$e=o.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${le} 0.3s ease-out forwards;
`,je=o.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`,Se=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(10, 16, 22, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${({$variant:e})=>"download"===e?"#ffda79":"#ffffff"};
  font-size: 19px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${({$variant:e})=>"close"===e?"#ff8a8a":"#ffda79"};
    background: ${({$variant:e})=>"close"===e?"rgba(220, 60, 60, 0.85)":"rgba(255, 218, 121, 0.2)"};
    color: #ffffff;
  }

  &:hover svg {
    transform: ${({$variant:e})=>"close"===e?"rotate(90deg)":"top"===e?"translateY(-2px)":"translateY(1px)"};
  }

  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg {
      transition: none;
    }
  }
`,Ce=o.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: rgba(0, 0, 0, 0.72);
`,Me=o.div`
  position: relative;
  box-sizing: border-box;
  width: 95%;
  max-width: none;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  border-radius: 14px;
  color: #fff;
  background-color: #17252b;
  background-image: ${({$backgroundImage:e})=>e?`linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.78)), url("${e}")`:"linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6))"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`,De=o.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px clamp(16px, 3vw, 32px) 14px;
  border-bottom: 1px solid
    ${({$scrolled:e})=>e?"rgba(255, 255, 255, 0.14)":"transparent"};
  background: ${({$scrolled:e})=>e?"rgba(0, 0, 0, 0.45)":"transparent"};
  backdrop-filter: ${({$scrolled:e})=>e?"blur(8px)":"none"};
  -webkit-backdrop-filter: ${({$scrolled:e})=>e?"blur(8px)":"none"};
  box-shadow: ${({$scrolled:e})=>e?"0 6px 18px rgba(0, 0, 0, 0.35)":"none"};
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
`,Te=o.h2`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 22px;
`,ze=o.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px clamp(16px, 3vw, 32px) 28px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
  }
`,Pe=o(Se)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  opacity: ${({$visible:e})=>e?1:0};
  visibility: ${({$visible:e})=>e?"visible":"hidden"};
  transform: translateY(${({$visible:e})=>e?"0":"10px"});
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease,
    background 0.2s ease,
    border-color 0.2s ease;
`,Ee=o.div`
  user-select: text;
  -webkit-user-select: text;
  cursor: text;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`,Ge=o.div`
  flex: 0 0 auto;
  display: flex;
  gap: 8px;
`,qe=o.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,Ae=o.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,Ie=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 46px;
  margin-bottom: 14px;
  padding: 0 14px;
  border: 1px solid
    ${({$isDarkMode:e})=>e?"rgba(90, 230, 216, 0.32)":"rgba(23, 67, 72, 0.24)"};
  border-radius: 14px;
  background: ${({$isDarkMode:e})=>e?"rgba(5, 24, 29, 0.78)":"rgba(255, 255, 255, 0.82)"};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.12);
  transition: border-color 0.25s ease, box-shadow 0.25s ease,
    transform 0.25s ease, background 0.25s ease;

  &:focus-within {
    transform: translateY(-2px);
    border-color: ${({$isDarkMode:e})=>e?"#51e6d5":"#174348"};
    background: ${({$isDarkMode:e})=>e?"rgba(5, 24, 29, 0.96)":"#ffffff"};
    box-shadow: 0 0 0 3px
        ${({$isDarkMode:e})=>e?"rgba(81, 230, 213, 0.16)":"rgba(23, 67, 72, 0.12)"},
      0 8px 22px rgba(0, 0, 0, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Le=o(l)`
  flex: 0 0 auto;
  color: ${({$isDarkMode:e})=>e?"rgba(138, 235, 224, 0.72)":"rgba(23, 67, 72, 0.65)"};
  font-size: 18px;
  transition: color 0.25s ease, transform 0.25s ease;

  ${Ie}:focus-within & {
    color: ${({$isDarkMode:e})=>e?"#51e6d5":"#174348"};
    transform: scale(1.12) rotate(-8deg);
  }
`,Ye=o.input`
  flex: 1;
  min-width: 0;
  padding: 12px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({$isDarkMode:e})=>e?"#ffffff":"#142326"};
  font: inherit;
  font-size: 14px;

  &::placeholder {
    color: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.58)":"rgba(20, 35, 38, 0.55)"};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`,Fe=o.button`
  display: grid;
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.1)":"rgba(23, 67, 72, 0.1)"};
  color: ${({$isDarkMode:e})=>e?"#ffffff":"#174348"};
  cursor: pointer;
  animation: ${le} 0.18s ease both;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
    background: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.2)":"rgba(23, 67, 72, 0.18)"};
  }
`,Re=({content:e,children:t,placement:n="bottom",isDarkMode:r=!0})=>{const[a,o]=(0,G.useState)(!1),i=(0,G.useRef)(null),{refs:s,floatingStyles:l,context:d}=u({open:a,onOpenChange:o,placement:n,strategy:"fixed",transform:!1,whileElementsMounted:b,middleware:[k(8),g(),h({padding:5}),f({element:i})]}),{isMounted:c,styles:w}=j(d,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=$(d,{move:!1}),D=y(d),T=x(d),z=m(d,{role:"tooltip"}),{getReferenceProps:P,getFloatingProps:E}=p([M,D,T,z]);if(!e)return t;const q=r?"#111111":"#ffffff";return(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("span",{ref:s.setReference,...P(),style:{display:"inline-flex"},children:t}),c&&(0,ae.jsx)(C,{children:(0,ae.jsxs)(oe,{ref:s.setFloating,$isDarkMode:r,style:{...l,...w},...E(),children:[(0,ae.jsx)(S,{children:e}),(0,ae.jsx)(v,{ref:i,context:d,fill:q,stroke:"#00acb9",strokeWidth:1})]})})]})},Oe=({onClose:e,isOpen:t,initialFaqQuestion:n,isDarkMode:r})=>{const[a,o]=(0,G.useState)(!1),i=X(e=>e.calendar?.customDays||[]),[s,l]=(0,G.useState)(null),u=(0,G.useRef)({}),p=(e,t)=>({onMouseDown:t=>{u.current[e]=t.target===t.currentTarget},onClick:n=>{const r=!0===u.current[e];u.current[e]=!1,n.target===n.currentTarget&&r&&t()}}),[f,g]=(0,G.useState)(""),[b,x]=(0,G.useState)(null),m=(0,G.useRef)(null),[h,v]=(0,G.useState)(!1),[y,k]=(0,G.useState)(!1);(0,G.useEffect)(()=>{v(!1),k(!1)},[s]);const $=(0,G.useCallback)(()=>{b?x(null):s?l(null):(x(null),o(!0),setTimeout(()=>{o(!1),e()},400))},[e,b,s]),j=async e=>{let t=e,n=null,r=(e.split(/[?#]/)[0].match(/.(w{2,5})$/)||[])[1]||"webp";try{const a=await(await fetch(e)).blob();n=URL.createObjectURL(a),t=n,a.type.startsWith("image/")&&(r=a.type.split("/")[1].replace("jpeg","jpg").split("+")[0])}catch{}const a=document.createElement("a");a.href=t,a.download=`stykhiya_image_${Date.now()}.${r}`,document.body.appendChild(a),a.click(),document.body.removeChild(a),n&&setTimeout(()=>URL.revokeObjectURL(n),1e3)};(0,G.useEffect)(()=>{const e=e=>{"Escape"===e.key&&$()};if(t||a)return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t,a,$]);const S=G.useMemo(()=>{const e=(new Date).toISOString().split("T")[0];return i.filter(t=>t.date<e).sort((e,t)=>t.date.localeCompare(e.date)).slice(0,5)},[i]),C=G.useMemo(()=>{const e={latestUpdate:"/assets/information-sign-Dh9YNb09.webp",agreement:te,collaboration:ne,weather:ee,noAds:T,news:"/assets/night-river-burnt-tree-CVOnKTPo.webp",aiHelp:z,climate:D,general:ne,settings:"/assets/logo-CeE8IWwr.webp",registration:M,plans:"/assets/emperor-nitseron-DY56vL7p.webp"},t=Z.map(t=>({...t,image:t.image?e[t.image]??null:null}));if(S.length>0){const e=S.map(e=>`• ${e.date}: ${e.reason}`).join("\n");t.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:\n\n${e}`,image:null})}return t},[S]);if((0,G.useEffect)(()=>{if(!t)return void l(null);let e=null;if(n){const t=C.findIndex(e=>e.q===n);t>=0&&(e=C[t])}l(e)},[C,n,t]),!t&&!a)return null;const P=[...C].map((e,t)=>({...e,originalIndex:t})).filter(e=>{if(!f)return!0;const t=f.toLowerCase();return e.q?.toLowerCase().includes(t)||e.a?.toLowerCase().includes(t)});return(0,ae.jsxs)(ue,{$isClosing:a,...p("main",$),children:[(0,ae.jsxs)(pe,{$isDarkMode:r,$isClosing:a,onClick:e=>e.stopPropagation(),children:[(0,ae.jsxs)(fe,{$isDarkMode:r,children:[(0,ae.jsx)(be,{onClick:$,children:"Зрозуміло!"}),(0,ae.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:r?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,ae.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:r?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"})]}),(0,ae.jsx)(ge,{children:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsxs)(Ie,{$isDarkMode:r,children:[(0,ae.jsx)(Le,{$isDarkMode:r,"aria-hidden":"true"}),(0,ae.jsx)(Ye,{type:"search",placeholder:"Знайти питання або відповідь...","aria-label":"Пошук питань",value:f,$isDarkMode:r,onChange:e=>g(e.target.value)}),f&&(0,ae.jsx)(Fe,{type:"button",$isDarkMode:r,onClick:()=>g(""),"aria-label":"Очистити пошук",children:(0,ae.jsx)(d,{"aria-hidden":"true"})})]}),(0,ae.jsxs)(me,{style:{marginTop:0},children:[0===P.length&&(0,ae.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),P.map((e,t)=>{const n=e.originalIndex,r=(e.a||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();return(0,ae.jsx)(he,{$index:t+1,$image:e.image||"/assets/foggy-forest-Cew27ml4.webp",onClick:t=>{Array.from(t.currentTarget.querySelectorAll("[data-truncated-content]")).some(e=>e.scrollHeight>e.clientHeight+1)&&l(e)},children:(0,ae.jsxs)(ve,{type:"button","aria-label":`Переглянути відповідь: ${e.q}`,children:[(0,ae.jsx)(ye,{"data-truncated-content":!0,children:e.q}),(0,ae.jsx)(ke,{"data-truncated-content":!0,children:r||"Натисніть, щоб переглянути відповідь."})]})},n)})]})]})})]}),s&&(0,ae.jsx)(Ce,{...p("answer",()=>l(null)),children:(0,ae.jsxs)(Me,{$backgroundImage:s.image,onClick:e=>e.stopPropagation(),children:[(0,ae.jsxs)(De,{$scrolled:h,children:[(0,ae.jsx)(Te,{children:s.q}),(0,ae.jsxs)(Ge,{children:[s.image&&(0,ae.jsx)(Se,{type:"button",$variant:"download","aria-label":"Скачати зображення",title:"Скачати зображення",onClick:()=>j(s.image),children:(0,ae.jsx)(w,{"aria-hidden":"true"})}),(0,ae.jsx)(Se,{type:"button",$variant:"close","aria-label":"Закрити",title:"Закрити (Esc)",onClick:()=>l(null),children:(0,ae.jsx)(d,{"aria-hidden":"true"})})]})]}),(0,ae.jsx)(ze,{ref:m,onScroll:e=>{const t=e.currentTarget.scrollTop;v(t>4),k(t>300)},children:(0,ae.jsx)(Ee,{children:(E=s,E.content&&Array.isArray(E.content)&&E.content.length>0?E.content.map((e,t)=>{if("image"===e.type){const n=e.src||e.image,r=e.alt||E.q||"FAQ image";return(0,ae.jsx)("div",{style:{marginBottom:"10px"},children:(0,ae.jsx)(we,{src:n,alt:r,onClick:()=>x(n)})},`image-${t}`)}if("text"===e.type){const n=e.value||e.text||"";return(0,ae.jsx)("div",{dangerouslySetInnerHTML:{__html:String(n).replace(/\n/g,"<br/>")}},`text-${t}`)}return null}):(0,ae.jsx)("div",{dangerouslySetInnerHTML:{__html:(E.a||"").replace(/\n/g,"<br/>")}}))})}),(0,ae.jsx)(Pe,{type:"button",$variant:"top",$visible:y,tabIndex:y?0:-1,"aria-hidden":!y,"aria-label":"Прокрутити вгору",title:"Прокрутити вгору",onClick:()=>{const e=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;m.current?.scrollTo({top:0,behavior:e?"auto":"smooth"})},children:(0,ae.jsx)(c,{"aria-hidden":"true"})})]})}),b&&(0,ae.jsxs)(qe,{onClick:()=>x(null),children:[(0,ae.jsx)(xe,{onClick:()=>x(null),children:"×"}),(0,ae.jsx)($e,{children:(0,ae.jsx)(je,{onClick:e=>{e.stopPropagation(),j(b)},children:"Скачати"})}),(0,ae.jsx)(Ae,{src:b,alt:"Прев'ю зображення",onClick:e=>e.stopPropagation()})]})]});var E};export{H as a,ee as i,re as n,B as o,te as r,X as s,Oe as t};