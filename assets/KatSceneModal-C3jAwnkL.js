import{o as t}from"./rolldown-runtime-C_JJxWoe.js";import{r as e}from"./vendor-i18n-4XGuJdvG.js";import{n as r}from"./vendor-markdown-ADGh9TTx.js";import{S as o,h as a,w as n,x as i}from"./index-DsXpZiTT.js";var s=t(e()),l=r(),d=[{duration:5500,text:"Я не хочу багато користувачів, але я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей."},{duration:3500,text:"Надати вам чудову погоду — наш обов'язок."},{duration:4500,text:"Політика — це фактор, який ми не підтримуємо і який ви не побачите..."},{duration:4e3,text:"Різноманітна та захоплива музика, яку можна додавати та шукати."},{duration:3500,text:"Пишіть, підказуйте, що зробити для вас :)"},{duration:7e3,text:"Ми зробимо красиву оселю з вашим принтером, картинами з Pixabay, нашими сюжетними історіями та моментами з ігор і фільмів."},{duration:4e3,text:"Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!"},{duration:5500,text:"Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)"},{duration:8500,text:"Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким."},{duration:4500,text:"Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом."}],u=[{title:"Динофроз",author:"Mondo TV"},{title:"No No No, Monody, Unity, Hunger",author:"TheFatRat"},{title:"Dragonora, Asium, Factorium",author:"SayGames - MyLittleUniverse (Estoty)"},{title:"Electrodynamix, Clubstep, Theory of Everything, Theory of Everything II",author:"DJ-Nate"},{title:"Fingerbang (Fingerdash), Deadlocked",author:"Geometry Dash"},{title:"Болотна крамниця, Звуки індиків і ще кілька",author:"Авторська робота"}],c=a.filter(t=>t.src&&!t.src.endsWith(".mp4")),x=o`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`,p=o`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`,f=n.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,h=n.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`,g=n.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${x} 0.8s ease-in-out forwards;
`,m=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  font-size: 12px;
  padding: 8px 14px;
  border: 1px solid rgba(148, 255, 250, 0.5);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #94fffa;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(148, 255, 250, 0.2);
  }
`,b=n.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  z-index: 5;
  width: min(90%, 900px);
  padding: 12px 18px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  animation: ${p} 0.6s ease-out forwards;
`,y=n.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(148, 255, 250, 0.3);
  padding: 10px 22px;
  border-radius: 20px;
  color: #94fffa;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-align: center;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  animation: ${p} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`,v=n.audio`
  display: none;
`,w=({onClose:t})=>{const e=(0,s.useRef)(null),[r,o]=(0,s.useState)("text"),[a,n]=(0,s.useState)(0),[x,p]=(0,s.useState)(0),[w,j]=(0,s.useState)(0);(0,s.useEffect)(()=>{const t=e.current;return t&&(t.volume=.5,t.play().catch(()=>{})),()=>{t&&(t.pause(),t.currentTime=0)}},[]),(0,s.useEffect)(()=>{if("text"!==r)return;const t=setTimeout(()=>{a<d.length-1?n(t=>t+1):o("music")},d[a].duration);return()=>clearTimeout(t)},[a,r]),(0,s.useEffect)(()=>{if("music"!==r)return;const t=setInterval(()=>{p(t=>t<u.length-1?t+1:(o("gallery"),t))},3e3);return()=>clearInterval(t)},[r]),(0,s.useEffect)(()=>{if("gallery"!==r||0===c.length)return;const t=setInterval(()=>{j(t=>(t+1)%c.length)},4e3);return()=>clearInterval(t)},[r]),(0,s.useEffect)(()=>{const e=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t]);const k=c[w],E=u[x];return(0,l.jsx)(f,{children:(0,l.jsxs)(h,{children:[(0,l.jsx)(g,{src:"gallery"===r?k?.src:i,alt:"Stuxia Showcase"},"gallery"===r?`gallery-${w}`:"hero-bg"),(0,l.jsx)(m,{type:"button",onClick:t,children:"Пропустити"}),"text"===r&&d[a]?.text&&(0,l.jsx)(b,{children:d[a].text},`caption-${a}`),"music"===r&&E&&(0,l.jsxs)(y,{children:["Музичний саундтрек: ",(0,l.jsx)("span",{children:E.title})," — ",E.author]},`music-${x}`),"gallery"===r&&k&&(0,l.jsxs)(y,{children:["Зображення на сайті: ",(0,l.jsx)("span",{children:k.name})," ",k.author?`— ${k.author}`:""]},`gallery-${w}`),(0,l.jsx)(v,{ref:e,src:"/assets/silent-CYwH4UpB.mp3",loop:!0})]})})};export{w as t};
//# sourceMappingURL=KatSceneModal-C3jAwnkL.js.map