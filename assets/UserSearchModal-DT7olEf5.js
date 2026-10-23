import{o as e,r as t,t as n}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{n as a}from"./vendor-markdown-ADGh9TTx.js";import{i as o,r as i,t as s}from"./styled-components.browser.esm-_LeWE6wZ.js";import{C as l,L as d,S as c,Tn as p,_ as u,an as g,b as f,bn as x,d as b,f as m,g as h,h as k,m as y,p as w,u as v,v as j,x as A,y as $}from"./vendor-ui-CaQ2KOJJ.js";import{t as C}from"./climate-BFaVtzMy.js";var S=n(e=>{var t=r();var n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=t.useSyncExternalStore,o=t.useRef,i=t.useEffect,s=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,r,d,c){var p=o(null);if(null===p.current){var u={hasValue:!1,value:null};p.current=u}else u=p.current;p=s(function(){function e(e){if(!i){if(i=!0,a=e,e=d(e),void 0!==c&&u.hasValue){var t=u.value;if(c(t,e))return o=t}return o=e}if(t=o,n(a,e))return t;var r=d(e);return void 0!==c&&c(t,r)?(a=e,t):(a=e,o=r)}var a,o,i=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,r,d,c]);var g=a(e,p[0],p[1]);return i(function(){u.hasValue=!0,u.value=g},[g]),l(g),g}}),M=n((e,t)=>{t.exports=S()}),D=e(r(),1),z=M();var q={notify(){},get:()=>[]};var P=(()=>!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement))(),T=(()=>"undefined"!=typeof navigator&&"ReactNative"===navigator.product)(),I=(()=>P||T?D.useLayoutEffect:D.useEffect)(),R=Symbol.for("react-redux-context"),E="undefined"!=typeof globalThis?globalThis:{};function G(){if(!D.createContext)return{};const e=E[R]??(E[R]=new Map);let t=e.get(D.createContext);return t||(t=D.createContext(null),e.set(D.createContext,t)),t}var H=G();var F=function(e){const{children:t,context:n,serverState:r,store:a}=e,o=D.useMemo(()=>{const e=function(e,t){let n,r=q,a=0,o=!1;function i(){d.onStateChange&&d.onStateChange()}function s(){a++,n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){(()=>{let t=e;for(;t;)t.callback(),t=t.next})()},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function l(){a--,n&&0===a&&(n(),n=void 0,r.clear(),r=q)}const d={addNestedSub:function(e){s();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),l())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return o},trySubscribe:function(){o||(o=!0,s())},tryUnsubscribe:function(){o&&(o=!1,l())},getListeners:()=>r};return d}(a);return{store:a,subscription:e,getServerState:r?()=>r:void 0}},[a,r]),i=D.useMemo(()=>a.getState(),[a]);I(()=>{const{subscription:e}=o;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==a.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[o,i]);const s=n||H;return D.createElement(s.Provider,{value:o},t)};function L(e=H){return function(){return D.useContext(e)}}var V=L();function Y(e=H){const t=e===H?V:L(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var U=Y();function K(e=H){const t=e===H?U:Y(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var N=K(),O=(e,t)=>e===t;function B(e=H){const t=e===H?V:L(e),n=(e,n={})=>{const{equalityFn:r=O}="function"==typeof n?{equalityFn:n}:n,{store:a,subscription:o,getServerState:i}=t();D.useRef(!0);const s=D.useCallback({[e.name]:t=>e(t)}[e.name],[e]),l=(0,z.useSyncExternalStoreWithSelector)(o.addNestedSub,a.getState,i||a.getState,s,r);return D.useDebugValue(l),l};return Object.assign(n,{withTypes:()=>n}),n}var W=B(),Q="/assets/daysthunders-CVOnKTPo.webp",J="/assets/fog-Cew27ml4.webp",X="/assets/texts-Dh_WKfAx.webp",Z="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",_="/assets/reader-DAjoeGA1.webp",ee=JSON.parse('[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n Що таке Стихія? — Це веб-платформа «погода + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити стиль сайту.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв\'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам. ","image":"latestUpdate"},{"q":"Угода користувача","a":"Ця Угода є юридично обов\'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб\'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов\'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім\'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"agreement"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з\'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"weather"},{"q":"Відсутність реклами і підписок.","a":"Це трохи дивно, але логічно. Ми поважаємо ваш час і не хочемо його витрачати на рекламу. Деякі функції обмежені, бо технології Firebase мають безкоштовний ліміт, вони відчутні при великій активності. Повірте через 100 спам-ботів можна втратити за місяць 20000грн.","image":"noAds"},{"q":"Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з\'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":"news"},{"q":"ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо. Рекомндуємо щоб ваш пристрій мав пароль для того щоб пристрій не потрапив у чужі руки. А також не прив\'язуйте картку до ключа який ви використовуєте.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\n, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":"aiHelp"},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Прогортайте трохи нижче карток погоди, ви побачите індичка і карту клімату.\\nКрок 2. Щоб побачити картку натисніть на неї. На карті Ventusky відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з\'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.\\nКрок 6. Карту можна змінити на Windy, а також Карту повітряних тривог і т.д. Щоб зробити це натисніть на текст Налаштування Стихії. \\nКрок 7.Ви можете додати свої фрейми.","image":"climate"},{"q":"За що відповідають налаштування?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна), фонова музика. Та багато чого ще...","image":"settings"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди. З метою безпеки ми не підключали до збереження данних Gemini API Key та діалоги з ШІ. Ви це можете побачити у репозиторії на Github. Ми не збираємо ваші данні, і не передаємо їх третім особам. Код ШІ компонента: https://github.com/TheTurkeyProgramist/stuxia/blob/main/src/components/Aihelp/Aihelp.jsx","image":"registration"}]'),te=t({Tooltip:()=>Ge,default:()=>He}),ne=a(),re=o.div`
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
`,ae=s`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,oe=s`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,ie=s`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,se=s`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,le=i`
  opacity: 0;
  transform-origin: left center;
  animation: ${se} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:e})=>i`
    animation-delay: ${.1+.05*(e||0)}s;
  `}
`,de=o.div`
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
`,ce=o.div`
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
  animation: ${e=>e.$isClosing?oe:ae} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,pe=o.div`
  background:  ${e=>e.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,ue=o.div`
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
`,ge=o.button`
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
`,fe=o(ge)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${ie} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,xe=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 3px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,be=o.article`
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

  ${le}
`,me=o.button`
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
`,he=o.div`
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
`,ye=o.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 1px;
  color: #ffffff;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 22px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`,we=o.div`
  display: flex;
  align-items: center;
  gap: 7px;
  align-self: flex-end;
  padding: 0 12px 10px;
`,ve=o.img`
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
`,je=o.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${ie} 0.3s ease-out forwards;
`,Ae=o.button`
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
`,$e=o.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`,Ce=o.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.72);
`,Se=o.div`
  position: relative;
  width: min(900px, 100%);
  max-height: 85vh;
  overflow-y: auto;
  padding: 28px;
  border-radius: 14px;
  color: #fff;
  background-color: #17252b;
  background-image: ${({$backgroundImage:e})=>e?`linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.78)), url("${e}")`:"linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6))"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`,Me=o.h2`
  margin: 0 42px 18px 0;
  font-size: 22px;
`,De=o.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`,ze=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
`,qe=o.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,Pe=o.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,Te=o.div`
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
`,Ie=o(g)`
  flex: 0 0 auto;
  color: ${({$isDarkMode:e})=>e?"rgba(138, 235, 224, 0.72)":"rgba(23, 67, 72, 0.65)"};
  font-size: 18px;
  transition: color 0.25s ease, transform 0.25s ease;

  ${Te}:focus-within & {
    color: ${({$isDarkMode:e})=>e?"#51e6d5":"#174348"};
    transform: scale(1.12) rotate(-8deg);
  }
`,Re=o.input`
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
`,Ee=o.button`
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
  animation: ${ie} 0.18s ease both;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
    background: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.2)":"rgba(23, 67, 72, 0.18)"};
  }
`,Ge=({content:e,children:t,placement:n="bottom",isDarkMode:r=!0})=>{const[a,o]=(0,D.useState)(!1),i=(0,D.useRef)(null),{refs:s,floatingStyles:d,context:p}=w({open:a,onOpenChange:o,placement:n,strategy:"fixed",transform:!1,whileElementsMounted:l,middleware:[A(8),f(),c({padding:5}),$({element:i})]}),{isMounted:g,styles:x}=j(p,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=k(p,{move:!1}),S=y(p),M=m(p),z=u(p,{role:"tooltip"}),{getReferenceProps:q,getFloatingProps:P}=h([C,S,M,z]);if(!e)return t;const T=r?"#111111":"#ffffff";return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("span",{ref:s.setReference,...q(),style:{display:"inline-flex"},children:t}),g&&(0,ne.jsx)(b,{children:(0,ne.jsxs)(re,{ref:s.setFloating,$isDarkMode:r,style:{...d,...x},...P(),children:[e,(0,ne.jsx)(v,{ref:i,context:p,fill:T,stroke:"#00acb9",strokeWidth:1})]})})]})},He=({onClose:e,isOpen:t,initialFaqQuestion:n,isDarkMode:r})=>{const[a,o]=(0,D.useState)(!1),i=W(e=>e.calendar?.customDays||[]),[s,l]=(0,D.useState)(null),[c,u]=(0,D.useState)({}),[g,f]=(0,D.useState)(""),[b,m]=(0,D.useState)(null),h=(0,D.useCallback)(()=>{b?m(null):s?l(null):(m(null),o(!0),setTimeout(()=>{o(!1),e()},400))},[e,b,s]),k=e=>{const t=document.createElement("a");t.href=e,t.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t)},y=e=>{const t=window.open("","_blank");t.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${e}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),t.document.close()};(0,D.useEffect)(()=>{const e=e=>{"Escape"===e.key&&h()};if(t||a)return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t,a,h]);const w=(e,t)=>{const n=(c[e]||0)===t?0:t;u({...c,[e]:n})},v=D.useMemo(()=>{const e=(new Date).toISOString().split("T")[0];return i.filter(t=>t.date<e).sort((e,t)=>t.date.localeCompare(e.date)).slice(0,5)},[i]),j=D.useMemo(()=>{const e={latestUpdate:"/assets/what-Dh9YNb09.webp",agreement:X,collaboration:"/assets/might-aU9r9rLq.webp",weather:J,noAds:"/assets/finance-D3mOys9f.webp",news:Q,aiHelp:_,climate:C,general:"/assets/myone-Dyn4Do12.webp",settings:"/assets/logo-CeE8IWwr.webp",registration:Z,plans:"/assets/mytwo-DY56vL7p.webp"},t=ee.map(t=>({...t,image:t.image?e[t.image]??null:null}));if(v.length>0){const e=v.map(e=>`• ${e.date}: ${e.reason}`).join("\n");t.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:\n\n${e}`,image:null})}return t},[v]);if((0,D.useEffect)(()=>{if(!t)return void l(null);let e=null;if(n){const t=j.findIndex(e=>e.q===n);t>=0&&(e=j[t])}l(e)},[j,n,t]),!t&&!a)return null;const A=[...j].map((e,t)=>({...e,originalIndex:t,rating:c[t]||0})).filter(e=>{if(!g)return!0;const t=g.toLowerCase();return e.q?.toLowerCase().includes(t)||e.a?.toLowerCase().includes(t)}).sort((e,t)=>t.rating-e.rating);return(0,ne.jsxs)(de,{$isClosing:a,onClick:h,children:[(0,ne.jsxs)(ce,{$isDarkMode:r,$isClosing:a,onClick:e=>e.stopPropagation(),children:[(0,ne.jsxs)(pe,{$isDarkMode:r,children:[(0,ne.jsx)(ge,{onClick:h,children:"Зрозуміло!"}),(0,ne.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:r?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,ne.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:r?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"})]}),(0,ne.jsx)(ue,{children:(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsxs)(Te,{$isDarkMode:r,children:[(0,ne.jsx)(Ie,{$isDarkMode:r,"aria-hidden":"true"}),(0,ne.jsx)(Re,{type:"search",placeholder:"Знайти питання або відповідь...","aria-label":"Пошук питань",value:g,$isDarkMode:r,onChange:e=>f(e.target.value)}),g&&(0,ne.jsx)(Ee,{type:"button",$isDarkMode:r,onClick:()=>f(""),"aria-label":"Очистити пошук",children:(0,ne.jsx)(x,{"aria-hidden":"true"})})]}),(0,ne.jsxs)(xe,{style:{marginTop:0},children:[0===A.length&&(0,ne.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),A.map((e,t)=>{const n=e.originalIndex,a=c[n]||0,o=(e.a||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();return(0,ne.jsxs)(be,{$index:t+1,$image:e.image||"/assets/fog-Cew27ml4.webp",onClick:t=>{t.target.closest("[data-rating-button]")||Array.from(t.currentTarget.querySelectorAll("[data-truncated-content]")).some(e=>e.scrollHeight>e.clientHeight+1)&&l(e)},children:[(0,ne.jsxs)(me,{type:"button","aria-label":`Переглянути відповідь: ${e.q}`,children:[(0,ne.jsx)(he,{"data-truncated-content":!0,children:e.q}),(0,ne.jsx)(ke,{"data-truncated-content":!0,children:o||"Натисніть, щоб переглянути відповідь."})]}),(0,ne.jsxs)(we,{children:[(0,ne.jsx)(Ge,{content:"Корисно",isDarkMode:r,children:(0,ne.jsx)(ye,{"data-rating-button":!0,onClick:e=>{e.stopPropagation(),w(n,1)},"aria-label":"Корисно",children:1===a?(0,ne.jsx)(d,{style:{color:"blue"}}):(0,ne.jsx)(d,{})})}),(0,ne.jsx)(Ge,{content:"Не корисно",isDarkMode:r,children:(0,ne.jsx)(ye,{"data-rating-button":!0,onClick:e=>{e.stopPropagation(),w(n,-1)},"aria-label":"Не корисно",children:(0,ne.jsx)(p,{})})})]})]},n)})]})]})})]}),s&&(0,ne.jsx)(Ce,{onClick:()=>l(null),children:(0,ne.jsxs)(Se,{$backgroundImage:s.image,onClick:e=>e.stopPropagation(),children:[(0,ne.jsx)(fe,{onClick:()=>l(null),children:"×"}),(0,ne.jsx)(Me,{children:s.q}),(0,ne.jsx)(De,{children:($=s,$.content&&Array.isArray($.content)&&$.content.length>0?$.content.map((e,t)=>{if("image"===e.type){const n=e.src||e.image,r=e.alt||$.q||"FAQ image";return(0,ne.jsx)("div",{style:{marginBottom:"10px"},children:(0,ne.jsx)(ve,{src:n,alt:r,onClick:()=>m(n)})},`image-${t}`)}if("text"===e.type){const n=e.value||e.text||"";return(0,ne.jsx)("div",{dangerouslySetInnerHTML:{__html:String(n).replace(/\n/g,"<br/>")}},`text-${t}`)}return null}):(0,ne.jsx)("div",{dangerouslySetInnerHTML:{__html:($.a||"").replace(/\n/g,"<br/>")}}))}),s.image&&(0,ne.jsxs)(ze,{children:[(0,ne.jsx)($e,{onClick:()=>k(s.image),children:"Скачати"}),(0,ne.jsx)($e,{onClick:()=>y(s.image),children:"Друкувати"})]})]})}),b&&(0,ne.jsxs)(qe,{onClick:()=>m(null),children:[(0,ne.jsx)(fe,{onClick:()=>m(null),children:"×"}),(0,ne.jsxs)(je,{children:[(0,ne.jsx)(Ae,{onClick:e=>{e.stopPropagation(),k(b)},children:"Скачати"}),(0,ne.jsx)(Ae,{onClick:e=>{e.stopPropagation(),y(b)},children:"Друкувати"})]}),(0,ne.jsx)(Pe,{src:b,alt:"Прев'ю зображення",onClick:e=>e.stopPropagation()})]})]});var $};export{X as a,F as c,Z as i,N as l,te as n,J as o,_ as r,Q as s,He as t,W as u};
//# sourceMappingURL=UserSearchModal-DT7olEf5.js.map