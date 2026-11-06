import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as s}from"./vendor-i18n-4NhlWQFf.js";import{n as i}from"./vendor-react-DlsUijjD.js";import{a as r,d as t,f as n,i as l,o as a,t as o}from"./vendor-firebase-Fffueu5Y.js";import{s as d}from"./vendor-motion-Bh6mtAYz.js";import{n as c}from"./vendor-utils-BcX-d9lY.js";import{An as x,Bn as h,En as p,Fn as f,Gn as g,In as u,Jn as j,Kn as m,Lt as y,N as b,Nn as v,On as w,Pn as k,Rn as $,Rt as S,Sn as C,Sr as T,Tn as M,Un as z,Vn as I,Wn as A,Xn as P,Yn as D,Zn as U,_n as F,bn as N,cr as L,fn as R,gn as E,hi as G,hn as W,ir as B,jn as V,kn as _,mn as Y,nr as O,or as H,pn as X,rn as K,sr as J,tr as Q,un as Z,vn as q,wn as ee,zn as se}from"./vendor-ui-BcfDBn2Z.js";import{A as ie,B as re,C as te,D as ne,E as le,H as ae,I as oe,L as de,M as ce,N as xe,O as he,P as pe,R as fe,S as ge,T as ue,U as je,V as me,b as ye,c as be,d as ve,j as we,k as ke,m as $e,n as Se,r as Ce,u as Te,w as Me,x as ze,y as Ie,z as Ae}from"./index-2DOTQNJp.js";import{auth as Pe}from"./firebase-D5cWCD3l.js";var De=e(s()),Ue=e(i()),Fe=d(),Ne=[{duration:5500,text:"Я не хочу багато користувачів, але я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей."},{duration:3500,text:"Надати вам чудову погоду — наш обов'язок."},{duration:4500,text:"Політика — це фактор, який ми не підтримуємо і який ви не побачите..."},{duration:4e3,text:"Різноманітна та захоплива музика, яку можна додавати та шукати."},{duration:3500,text:"Пишіть, підказуйте, що зробити для вас :)"},{duration:7e3,text:"Ми зробимо красиву оселю з вашим принтером, картинами з Pixabay, нашими сюжетними історіями та моментами з ігор і фільмів."},{duration:4e3,text:"Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!"},{duration:5500,text:"Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)"},{duration:8500,text:"Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким."},{duration:4500,text:"Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом."}],Le=[{title:"Динофроз",author:"Mondo TV"},{title:"Monody, Unity, Hunger",author:"TheFatRat"},{title:"Theory of Everything, Theory of Everything II",author:"DJ-Nate"},{title:"Звуки інтерфейсу",author:"Авторська робота"}],Re=de.filter(e=>/\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(e.src||"")),Ee=re`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`,Ge=re`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`,We=ae.div`
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
`,Be=ae.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`,Ve=ae.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${Ee} 0.8s ease-in-out forwards;
`,_e=ae.button`
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
`,Ye=ae.div`
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
  animation: ${Ge} 0.6s ease-out forwards;
`,Oe=ae.div`
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
  animation: ${Ge} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`,He=ae.audio`
  display: none;
`,Xe=({onClose:e})=>{const s=(0,De.useRef)(null),[i,r]=(0,De.useState)("text"),[t,n]=(0,De.useState)(0),[l,a]=(0,De.useState)(0),[o,d]=(0,De.useState)(0);(0,De.useEffect)(()=>{const e=s.current;return e&&(e.volume=.5,e.play().catch(()=>{})),()=>{e&&(e.pause(),e.currentTime=0)}},[]),(0,De.useEffect)(()=>{if("text"!==i)return;const e=setTimeout(()=>{t<Ne.length-1?n(e=>e+1):r("music")},Ne[t].duration);return()=>clearTimeout(e)},[t,i]),(0,De.useEffect)(()=>{if("music"!==i)return;const e=setInterval(()=>{a(e=>e<Le.length-1?e+1:(r("gallery"),e))},3e3);return()=>clearInterval(e)},[i]),(0,De.useEffect)(()=>{if("gallery"!==i||0===Re.length)return;const e=setInterval(()=>{d(e=>(e+1)%Re.length)},4e3);return()=>clearInterval(e)},[i]),(0,De.useEffect)(()=>{const s=s=>{"Escape"===s.key&&e()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[e]);const c=Re[o],x=Le[l];return(0,Fe.jsx)(We,{children:(0,Fe.jsxs)(Be,{children:[(0,Fe.jsx)(Ve,{src:"gallery"===i?c?.src:Ae,alt:"Stuxia Showcase"},"gallery"===i?`gallery-${o}`:"hero-bg"),(0,Fe.jsx)(_e,{type:"button",onClick:e,children:"Пропустити"}),"text"===i&&Ne[t]?.text&&(0,Fe.jsx)(Ye,{children:Ne[t].text},`caption-${t}`),"music"===i&&x&&(0,Fe.jsxs)(Oe,{children:["Музичний саундтрек: ",(0,Fe.jsx)("span",{children:x.title})," — ",x.author]},`music-${l}`),"gallery"===i&&c&&(0,Fe.jsxs)(Oe,{children:["Зображення на сайті: ",(0,Fe.jsx)("span",{children:c.name})," ",c.author?`— ${c.author}`:""]},`gallery-${o}`),(0,Fe.jsx)(He,{ref:s,src:xe,loop:!0})]})})},Ke=e(c()),Je=re`
  0% { opacity: 0; transform: scale(0.96); }
  100% { opacity: 1; transform: scale(1); }
`,Qe=re`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.96); }
`,Ze=re`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,qe=re`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`,es=re`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,ss=ae.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 100001;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  /* На вкладці фільтрів сторінку не затемнюємо, щоб було видно результат.
     На вужчих екранах сторінку за вікном не видно — там приклад-картинка в самій модалці */
  ${e=>e.$preview&&me`
    @media (min-width: ${768}px) {
      background: transparent;
      backdrop-filter: none;
      justify-content: flex-end;
      padding-right: 2.5%;
    }
  `}
  animation: ${e=>e.$isClosing?Qe:Je} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`,is=ae.div`
  position: fixed;
  inset: 0;
  z-index: 100002;
`,rs=ae.div`
  background: #1c1c1f;
  color: #f3f3f3;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  width: 95%;
  height: 88vh; max-height: 850px;
  transition: width 0.3s ease;
  ${e=>e.$preview&&me`
    @media (min-width: ${768}px) {
      width: max(${640}px, ${e.$previewWidth}%);
    }
  `}
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.2);
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${e=>e.$isClosing?Qe:Je} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`,ts=ae.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px;
  background: #202024;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  user-select: none;
`,ns=ae.div`
  display: flex; align-items: center; gap: 12px;
`,ls=ae.div`
  display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 4px 12px 4px 6px; border-radius: 20px;
`,as=ae.img`
  width: 30px; height: 30px; border-radius: 50%; object-fit: cover;
`,os=ae.h2`font-size: 16px; font-weight: 600; margin: 0; color: #ffffff;`,ds=ae.span`font-size: 11px; color: #a0a0a0;`,cs=ae.div`display: flex; align-items: center; gap: 8px;`,xs=ae.button`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #e0e0e0;
  padding: 6px 12px; border-radius: 6px;
  font-size: 12px; font-weight: 500; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.12); color: #ffffff; }
`,hs=ae.button`
  background: transparent; border: none; color: #f4f2f2;
  width: 32px; height: 32px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 28px; transition: all 0.15s ease;
  &:hover { background: #c42b1c; }
`,ps=ae.div`
  display: flex; flex: 1; overflow: hidden;
  @media (max-width: 768px) { flex-direction: column; }
`,fs=ae.div`
  width: 230px;
  background: #202024;
  border-right: 1px solid rgba(255,255,255,0.08);
  padding: 12px; display: flex; flex-direction: column; gap: 2px;
  overflow-y: auto; flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%; flex-direction: row;
    border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08);
    overflow-x: auto; padding: 8px;
  }
`,gs=ae.div`
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 6px; cursor: pointer;
  font-size: 13px; font-weight: ${e=>e.$active?"600":"400"};
  color: ${e=>e.$active?"#ffffff":e.$locked?"#666":"#c5c5c5"};
  background: ${e=>e.$active?"rgba(255,255,255,0.08)":"transparent"};
  position: relative; transition: all 0.15s ease; white-space: nowrap;
  opacity: ${e=>e.$locked?.45:1};
  pointer-events: ${e=>e.$locked?"none":"auto"};

  ${e=>e.$active&&me`
      &::before {
        content: "";
        position: absolute;
        left: 3px; top: 8px; bottom: 8px;
        width: 3px; background: #60cdff; border-radius: 2px;
      }
    `}

  &:hover { background: rgba(255,255,255,0.06); color: #ffffff; }

  @media (max-width: 768px) {
    padding: 7px 10px;
    &::before { display: none; }
  }
`,us=ae.span`
  font-size: 15px; display: flex; align-items: center; justify-content: center;
  color: ${e=>e.$active?"#60cdff":e.$locked?"#555":"#a0a0a0"};
`,js=ae.span`
  font-size: 10px; margin-left: auto; color: #555;
  background: rgba(255,255,255,0.06); padding: 1px 5px; border-radius: 4px;
`,ms=ae.div`
  flex: 1; padding: 24px; overflow-y: auto;
  background: #1c1c1f; display: flex; flex-direction: column; gap: 16px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
  @media (max-width: 768px) { padding: 16px; }
`,ys=ae.h3`
  font-size: 20px; font-weight: 600; color: #ffffff;
  margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
`,bs=ae.p`
  font-size: 13px; color: #a0a0a0; line-height: 1.5;
  margin: -8px 0 10px 0;
`,vs=ae.div`
  display: flex; flex-direction: column; gap: 8px;
  transition: filter 0.2s ease, opacity 0.2s ease;
  ${({$off:e})=>e&&me`filter: grayscale(1); opacity: 0.55;`}
`,ws={hero:(0,Fe.jsx)(w,{}),weather:(0,Fe.jsx)(E,{}),map:(0,Fe.jsx)(f,{})},ks=ae.h4`
  font-size: 13px; font-weight: 600; color: #a0a0a0;
  text-transform: uppercase; letter-spacing: 0.04em;
  margin: 14px 0 2px 2px; display: flex; align-items: center; gap: 8px;
  ${ys} + &, ${bs} + & { margin-top: 0; }
`,$s=ae.div`display: flex; flex-direction: column; gap: 8px;`,Ss=ae.div`
  background: #27272a;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px; padding: 14px 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); }
  @media (max-width: 550px) { flex-direction: column; align-items: flex-start; }
`,Cs=ae(Ss)`
  flex-direction: column; align-items: stretch; gap: 12px;
`,Ts=ae.div`
  display: contents;
  @media (max-width: ${767}px) { display: none; }
`,Ms=ae(Cs)`
  @media (min-width: ${768}px) { display: none; }
`,zs=ae.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
  transition: filter 0.4s ease-in-out;
`,Is=ae.div`
  display: flex; align-items: center; gap: 14px; flex: 1;
`,As=ae.div`
  width: 36px; height: 36px; min-width: 36px;
  background: rgba(255,255,255,0.06); border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: ${e=>e.$color||"#60cdff"};
`,Ps=ae.div`display: flex; flex-direction: column;`,Ds=ae.span`font-size: 14px; font-weight: 600; color: #ffffff;`,Us=ae.span`font-size: 12px; color: #a0a0a0; margin-top: 2px;`,Fs=ae.div`
  display: flex; align-items: center; gap: 12px;
  @media (max-width: 550px) { width: 100%; justify-content: flex-end; }
`,Ns=ae.div`
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; user-select: none;
`,Ls=ae.span`
  font-size: 13px;
  color: ${e=>e.$checked?"#ffffff":"#a0a0a0"};
  font-weight: 500;
`,Rs=ae.div`
  width: 40px; height: 20px; border-radius: 10px;
  background: ${e=>e.$checked?"#60cdff":"rgba(255,255,255,0.1)"};
  border: 1px solid ${e=>e.$checked?"#60cdff":"rgba(255,255,255,0.3)"};
  position: relative; transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  &::after {
    content: ""; position: absolute;
    top: 2px; left: ${e=>e.$checked?"22px":"2px"};
    width: 14px; height: 14px; border-radius: 50%;
    background: ${e=>e.$checked?"#000000":"#ffffff"};
    transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  }
`,Es=ae.select`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; cursor: pointer; transition: all 0.15s ease;
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
  option { background: #2b2b30; color: #ffffff; }
`,Gs=ae.input`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; width: 100%; box-sizing: border-box; transition: all 0.15s ease;
  &::placeholder { color: #7a7a80; }
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
`;ae(Gs)`
  font-weight: 600;
  ${e=>{const s=e.$textColor||"inherit",i=s.includes("linear"),r=s.includes("270deg");return i?me`
        background: ${s};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${r&&me`background-size: 400% 400%; animation: ${Ze} 5s ease infinite;`}
      `:me`color: ${s}; -webkit-background-clip: none; -webkit-text-fill-color: currentcolor;`}}
`;var Ws=ae.button`
  background: ${e=>e.$primary?"#60cdff":e.$danger?"rgba(196,43,28,0.15)":"rgba(255,255,255,0.08)"};
  color: ${e=>e.$primary?"#000000":e.$danger?"#ff6b6b":"#ffffff"};
  border: 1px solid ${e=>e.$primary?"#60cdff":e.$danger?"rgba(196,43,28,0.5)":"rgba(255,255,255,0.12)"};
  border-radius: 6px; padding: 6px 16px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover {
    background: ${e=>e.$primary?"#70d4ff":e.$danger?"rgba(196,43,28,0.3)":"rgba(255,255,255,0.15)"};
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,Bs=ae.div`
  height: 4px; border-radius: 2px;
  background-color: ${e=>e.$color||"transparent"};
  width: ${e=>e.$width||"0%"};
  transition: width 0.3s ease, background-color 0.3s ease; margin-top: 4px;
`,Vs=ae.span`
  font-size: 11px; color: ${e=>e.$color||"#a0a0a0"}; font-weight: 500; margin-top: 2px;
`,_s=ae.div`
  background: #202024; border-top: 1px solid rgba(255,255,255,0.08);
  padding: 12px 20px; display: flex; align-items: center; justify-content: space-between;
`,Ys=ae.div`
  display: flex; align-items: center; gap: 8px; font-size: 13px; color: #c5c5c5;
`,Os=ae.span`color: #60cdff; text-decoration: underline; cursor: pointer;`,Hs=ae.div`display: flex; align-items: center; gap: 10px;`,Xs=ae.div`
  max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(96,205,255,0.3); border-radius: 2px; }
`,Ks=ae.div`
  display: flex; align-items: center; gap: 8px; padding: 6px 8px;
  border-radius: 6px; cursor: pointer;
  background: ${e=>e.$active?"rgba(96,205,255,0.12)":"transparent"};
  border: 1px solid ${e=>e.$active?"rgba(96,205,255,0.3)":"transparent"};
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); }
`,Js=ae.img`
  width: 32px; height: 32px; border-radius: 4px; object-fit: cover; flex-shrink: 0;
`,Qs=ae.div`flex: 1; min-width: 0;`,Zs=ae.div`
  font-size: 12px; font-weight: 500; color: #ffffff;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,qs=ae.div`font-size: 10px; color: #a0a0a0; margin-top: 1px;`,ei=ae.div`
  width: 2px; background: #60cdff; border-radius: 1px;
  animation: ${qe} ${e=>e.$dur}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
`,si=ae.div`
  display: flex; align-items: flex-end; gap: 1.5px; height: 14px;
`,ii=()=>(0,Fe.jsxs)(si,{children:[(0,Fe.jsx)(ei,{$dur:.6,$delay:0}),(0,Fe.jsx)(ei,{$dur:.8,$delay:.2}),(0,Fe.jsx)(ei,{$dur:.7,$delay:.1})]}),ri=ae.input`
  width: 100%; accent-color: #60cdff; cursor: pointer;
  &::-webkit-slider-thumb { background: #60cdff; }
`,ti=ae.div`
  background: ${e=>e.$hasFile?"rgba(96,205,255,0.06)":"rgba(255,255,255,0.03)"};
  border: 1px solid ${e=>e.$hasFile?"rgba(96,205,255,0.2)":"rgba(255,255,255,0.06)"};
  border-radius: 8px; padding: 10px 12px;
  display: flex; align-items: center; gap: 10px;
`,ni=ae.div`
  flex: 1; font-size: 12px; color: #c5c5c5;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,li=ae.div`display: flex; gap: 6px; flex-shrink: 0;`,ai=ae.button`
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #ffffff; width: 28px; height: 28px; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 13px; transition: all 0.15s ease;
  &:hover { background: ${e=>e.$danger?"rgba(196,43,28,0.3)":"#60cdff"}; color: ${e=>e.$danger?"#ff6b6b":"#000"}; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`,oi=ae.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px;
`,di=ae.button`
  background: ${e=>e.$active?"rgba(96,205,255,0.15)":"rgba(255,255,255,0.04)"};
  color: ${e=>e.$active?"#60cdff":"#e0e0e0"};
  border: 1px solid ${e=>e.$active?"#60cdff":"rgba(255,255,255,0.1)"};
  border-radius: 6px; padding: 8px 10px; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.15s ease; text-align: center;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  &:hover { background: rgba(96,205,255,0.1); border-color: rgba(96,205,255,0.3); color: #ffffff; }
`,ci=ae.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 6px;
`,xi=ae.div`
  display: flex; align-items: center; gap: 4px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(122,252,255,0.2);
  border-radius: 6px; padding: 4px 6px; animation: ${es} 0.2s ease-out forwards;
`,hi=({onClose:e,user:s,onUpdate:i,weatherCardLayout:d=[],isDarkMode:c=!1,onToggleTheme:f=()=>{},onUpdateLayout:w,showUpdateTimer:E,setShowUpdateTimer:re,siteSections:ae=[],moveSiteSection:de=()=>{},sectionThemes:xe={},hiddenSections:fe=[],onToggleSectionVisibility:me=()=>{},onToggleSectionTheme:Ae=()=>{},onResetSectionThemes:Ne=()=>{},loadingStrategy:Le="eager",onSetLoadingStrategy:Re=()=>{},isStickyBgMode:Ee=!1,onToggleStickyBg:Ge=()=>{},bgMusicEnabled:We,setBgMusicEnabled:Be,bgMusicSource:Ve,setBgMusicSource:_e,bgMusicVolume:Ye,setBgMusicVolume:Oe,bgMusicSpeed:He=1,setBgMusicSpeed:Je=()=>{},bgMusicMode:Qe,setBgMusicMode:Ze,bgMusicShuffle:qe,setBgMusicShuffle:es,customBgTracks:ei,setCustomBgTracks:si,libraryBgSettings:hi={},setLibraryBgSettings:pi=()=>{},activeBgTrackId:fi,setActiveBgTrackId:gi=()=>{},onResetBgPosition:ui=()=>{},onSkipBgTrack:ji=()=>{},sfxVolume:mi=.2,setSfxVolume:yi=()=>{},bgAudioRef:bi,bgAudioRef2:vi})=>{const wi=!s;je();const ki=oe(),[$i,Si]=(0,De.useState)("personalization"),[Ci,Ti]=(0,De.useState)(!1),[Mi,zi]=(0,De.useState)(!1),[Ii,Ai]=(0,De.useState)(!1),{isDecoratorMode:Pi,setIsDecoratorMode:Di,changeLog:Ui=[],undoChange:Fi=()=>{},resetAll:Ni=()=>{},isPersistent:Li=!1,setIsPersistent:Ri=()=>{},activePreset:Ei=0,switchPreset:Gi=()=>{}}=be(),{visualConfig:Wi,setVisualConfig:Bi,resetFilters:Vi,customPresets:_i=[],saveCustomPreset:Yi,deleteCustomPreset:Oi,updateCustomPresetName:Hi}=le(s),Xi="combo"===Wi.filterType?Wi.combo||[]:Ie.some(e=>e.id===Wi.filterType)?[Wi.filterType]:[],[Ki,Ji]=(0,De.useState)(""),[Qi,Zi]=(0,De.useState)(()=>{if(s?.avatar&&"string"==typeof s.avatar&&s.avatar.startsWith("http"))return s.avatar;if(s?.photoURL&&"string"==typeof s.photoURL&&s.photoURL.startsWith("http"))return s.photoURL;try{return localStorage.getItem("saved_google_avatar")||null}catch{return null}}),qi=Ce(),[er,sr]=(0,De.useState)(()=>{try{return"false"!==localStorage.getItem("ad_antiheader_enabled")}catch{return!0}}),[ir,rr]=(0,De.useState)(()=>{try{return"true"===localStorage.getItem("site_context_menu_enabled")}catch{return!1}}),[tr,nr]=(0,De.useState)(()=>{try{return"false"!==localStorage.getItem("settings_filters_preview")}catch{return!0}}),[lr,ar]=(0,De.useState)(()=>{try{const e=Number(localStorage.getItem("settings_filters_preview_percent"));return e>=64&&e<=100?e:64}catch{return 64}}),[or,dr]=(0,De.useState)(Te);(0,De.useEffect)(()=>{if(s?.avatar&&"string"==typeof s.avatar&&s.avatar.startsWith("http")&&!s.avatar.startsWith("data:")){Zi(s.avatar);try{localStorage.setItem("saved_google_avatar",s.avatar)}catch{}}},[s]);const[cr,xr]=(0,De.useState)(s?.email||s?.account||""),[hr,pr]=(0,De.useState)(""),[fr,gr]=(0,De.useState)(Pe.currentUser);(0,De.useEffect)(()=>r(Pe,gr),[]);const ur=(fr?.providerData||[]).map(e=>e.providerId),jr=ur.includes("google.com"),mr=ur.includes("password"),yr=Boolean(fr),br=fr?.providerData?.find(e=>"google.com"===e.providerId)?.email||s?.email||s?.account,vr=jr&&!mr,[wr,kr]=(0,De.useState)(!1),[$r,Sr]=(0,De.useState)(!1),[Cr,Tr]=(0,De.useState)(!1);(0,De.useEffect)(()=>{const e=$r?-1:1,s=Cr?-1:1;1===e&&1===s?(document.documentElement.style.transform="",document.documentElement.style.transformOrigin=""):(document.documentElement.style.transform=`scale(${e}, ${s})`,document.documentElement.style.transformOrigin="center center")},[$r,Cr]);const[Mr,zr]=(0,De.useState)({name:s?.firstName||"",day:"",month:"",year:"",oldPassword:"",newPassword:"",confirmPassword:"",textColor:s?.textColor||"grey",borderColor:s?.borderColor||"grey",fontFamily:s?.fontFamily||"",showSeconds:!1!==s?.showSeconds,dateDisplayMode:s?.dateDisplayMode||"both",hour12:!0===s?.hour12,voiceActingMode:s?.voiceActingMode||"malyatko",showUpdateTimer:!1!==E,newsAutoScroll:s?.newsAutoScroll||!1,syncMutedNews:s?.syncMutedNews||!1,gestureSensitivity:s?.gestureSensitivity??1.5,fastClicks:s?.fastClicks??!1}),[Ir,Ar]=(0,De.useState)(s?.newsLayout||[{key:"image",visible:!0},{key:"title",visible:!0},{key:"description",visible:!0}]),Pr=(0,De.useMemo)(()=>({...s}),[s]);(0,De.useEffect)(()=>{if(!s)return;let e="",i="",r="";s.birthDate&&(s.birthDate.includes("-")?[e,i,r]=s.birthDate.split("-"):s.birthDate.includes(".")&&([r,i,e]=s.birthDate.split("."))),zr({name:s?.firstName||"",day:r?String(parseInt(r)):"",month:i?String(parseInt(i)):"",year:e?String(parseInt(e)):"",oldPassword:"",newPassword:"",confirmPassword:"",textColor:s?.textColor||"grey",borderColor:s?.borderColor||"grey",fontFamily:s?.fontFamily||"",showSeconds:!1!==s?.showSeconds,dateDisplayMode:s?.dateDisplayMode||"both",hour12:!0===s?.hour12,voiceActingMode:s?.voiceActingMode||"malyatko",showUpdateTimer:!1!==E,newsAutoScroll:s?.newsAutoScroll||!1,syncMutedNews:s?.syncMutedNews||!1,gestureSensitivity:s?.gestureSensitivity??1.5,fastClicks:s?.fastClicks??!1})},[s,E]);const Dr=()=>Qi||"data:image/webp;base64,UklGRmQDAABXRUJQVlA4IFgDAABwHwCdASqjALEAP/3+/3+/v7+7r1Qcg/A/iUAaGiVlC+AXVedzUkzfGuGTPatrbUysraYc4VliuJZmUI5JVz93KZTjc8EyVS4dUyEH/LU33vHmBHoTONHjc7AaVV6gqtng0G0ByK5OfwXDnZeSMPiz9rUkUuV4oq6ahYASfplzw/F6h3HM7rYFPqg7aNSsoUUfFV/XhGaTaF9gy4b1PJy3b0HjLMY69nrdn2fcYvKZObrX45jEML7Y9WDaVQCYn5KUTjA9wnHQ0z4LVkWZuF9lOSquv7MHagOnHfkN5H9JSse7huV5YCUot3dcn2Z92fYWGvYrg44Tz8h/T+K7MhNdLqH1QAD3j5xF9UNzRPbGb9Jl0gtSDWSnF3rbVetRYpBw29Jk/X4PnchrQXKlZj0sNxyrdf5oftA/HX5ku7tqnxrVIuDN4NVyT20od+w6Vme3gw7gRRV04PToBtqWovQm2oI9J+MRBYh0pRk8B0+SG4+3KjIvFZxSyQkX64ZWyhQBQwO1dVAaeMhbMNcvbRCOXIXioNpuKZOcgDA6645KBTCgp7vpwSUXTlE1p9YdkH+dnfizSjjKMPxtaFTg/wX788y1IDKrR5dcQIDFgP566DOzSKRGR/irHCnmkzaJtcXG1Mlml50yO09qUcyHhGwT8uXqoMNCGBS39tFrGiX3k57F25LzRgfvfDorDLjIAR5nTIcGiXvKB42bMBVmf502lv6cPWwNvxoUpeFQWKDFcPrCfAVJy0QHzDnig+k8BzcZO4WMytAvO5Q+mFAMACfJvQxua4a+w6gLw6x13igh3FPnhkcbBbCPI3vp773AIPJlfA16Q2Y2P4ZWhxAvkh4nYOYQ16+fUu2xdtJBeq7+zuMckFAISbesFSMUHIdJfvWUJfiVrG/d15AMUCtosswLgNcC3SbtOKE8X16ph9c1kVs9OieJShpwDdU6EX78PSLWEsQPFsmNtoD3kf8YXIxkb8aVEZVnodARELQ1zwgikM+0vETUuH7lG73McIp22jxoSXaudqJUPsbK7688jYrcWHOLh53b4GjKb7Z+9HtzDwV3vYKEziXxGGp0sV25YpyCgJ7im45f/7Ki+YGbQdYKMAC0YuksM5TD0xW0z0s7Gm0uG5ewAAAA",Ur=e=>{const r={...Mr,...e};if(zr(r),e.hasOwnProperty("showUpdateTimer")&&re(e.showUpdateTimer),!s)return;const t=Dr();i({...s,firstName:r.name,avatar:t,birthDate:`${r.year}-${r.month.toString().padStart(2,"0")}-${r.day.toString().padStart(2,"0")}`,textColor:r.textColor,borderColor:r.borderColor,fontFamily:r.fontFamily,showSeconds:r.showSeconds,dateDisplayMode:r.dateDisplayMode,hour12:r.hour12,voiceActingMode:r.voiceActingMode,showUpdateTimer:r.showUpdateTimer,newsLayout:e.newsLayout||Ir,newsAutoScroll:e.newsAutoScroll??r.newsAutoScroll,syncMutedNews:e.syncMutedNews??r.syncMutedNews,gestureSensitivity:e.gestureSensitivity??r.gestureSensitivity,fastClicks:e.fastClicks??r.fastClicks})},Fr=()=>{Ti(!0),setTimeout(()=>e(),250)},Nr=()=>{s&&i(Pr),Fr()};Array.from({length:31},(e,s)=>s+1);const Lr=(new Date).getFullYear();Array.from({length:Lr-1909+1},(e,s)=>Lr-s);const Rr=(0,De.useMemo)(()=>{if(!Mr.day||!Mr.month||!Mr.year)return!1;const e=new Date(Mr.year,Mr.month-1,Mr.day);return e.getFullYear()!==parseInt(Mr.year)||e.getMonth()!==parseInt(Mr.month)-1||e.getDate()!==parseInt(Mr.day)},[Mr.day,Mr.month,Mr.year]);(0,De.useMemo)(()=>{const e=Mr.day?String(Mr.day).padStart(2,"0"):"",s=Mr.month?String(Mr.month).padStart(2,"0"):"",i=Mr.year?String(Mr.year):"";return e&&s&&i&&!Rr?`${e}.${s}.${i}`:""},[Mr.day,Mr.month,Mr.year,Rr]);((e,s,i)=>{if(!e||!s||!i)return null;const r=new Date,t=new Date(i,s-1,e);if(isNaN(t.getTime()))return null;let n=r.getFullYear()-t.getFullYear();const l=r.getMonth()-t.getMonth();(l<0||0===l&&r.getDate()<t.getDate())&&n--})(Mr.day,Mr.month,Mr.year);const Er=(e=>{if(!e)return{width:"0%",color:"transparent",label:""};let s=0;return e.length>=6&&s++,e.length>=8&&s++,(/[A-Z]/.test(e)||/[a-z]/.test(e))&&s++,/\d/.test(e)&&s++,/[^A-Za-z0-9]/.test(e)&&s++,s<=2?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:s<=4?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(Mr.newPassword),Gr=(0,De.useRef)(null),Wr=(0,De.useRef)(null),[Br,Vr]=(0,De.useState)(""),[_r,Yr]=(0,De.useState)("library"),[Or,Hr]=(0,De.useState)(0),[Xr,Kr]=(0,De.useState)(0),[Jr,Qr]=(0,De.useState)({}),[Zr,qr]=(0,De.useState)(()=>ke()),[et,st]=(0,De.useState)(()=>{try{return JSON.parse(window.localStorage.getItem("bg_music_downloaded_tracks")||"[]")}catch{return[]}});(0,De.useEffect)(()=>{window.localStorage.setItem("bg_music_downloaded_tracks",JSON.stringify(et)),we(Zr)},[et,Zr]),(0,De.useEffect)(()=>{let e;const s=()=>{const i=bi?.current,r=vi?.current;let t=i;i&&r&&!r.paused&&r.volume>=i.volume&&(t=r),t&&(Hr(t.currentTime||0),Kr(t.duration||0)),e=requestAnimationFrame(s)};return s(),()=>cancelAnimationFrame(e)},[bi,vi]);const it=(e,s)=>{st(i=>i.some(i=>String(i.id)===String(e)&&i.file===s)?i:[...i,{id:e,file:s,name:""}]),qr(s=>s.filter(s=>String(s)!==String(e)))},rt=(0,De.useMemo)(()=>(ei||[]).filter(e=>e?.file),[ei]),tt=(0,De.useMemo)(()=>{let e=pe.map(e=>{const s=ce[e.audio],i=(e=>{const s=ie(e.file),i=s||et.some(s=>s.file===e.file&&String(s.id)===String(e.id)),r=Zr.includes(String(e.id));return{isBase:s,downloaded:i&&!r,softDeleted:r,available:s||i&&!r}})({id:e.id,file:s,text:e.text,author:e.author});return{id:e.id,name:e.text?`${e.text} — ${e.author}`:e.author,file:s,image:ce[e.image],...i}});Br&&(e=e.filter(e=>e.name.toLowerCase().includes(Br.toLowerCase())));const s=e.filter(e=>!ne.some(s=>s.id===e.id)),i=rt.map((e,s)=>({id:`custom-${s}`,customIdx:s,name:e.name,file:e.file,image:null,isCustom:!0,available:!0,hidden:!1===e.enabled})).filter(e=>!Br||e.name.toLowerCase().includes(Br.toLowerCase())),r=e=>({...e,hidden:!1===hi[e.id]?.enabled});return[...ne.map(e=>r({id:e.id,name:e.name,file:e.file,image:null,isBase:!0,downloaded:!0,softDeleted:!1,available:!0})),...i,...s.map(r)].slice(0,28+i.length)},[Br,et,Zr,Ve,rt,hi]),nt=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,lt=[{key:"personalization",icon:(0,Fe.jsx)(P,{}),label:"Персоналізація"},{key:"security",icon:(0,Fe.jsx)(j,{}),label:"Безпека",locked:wi},{key:"siteSections",icon:(0,Fe.jsx)(q,{}),label:"Секції та новини"},{key:"modes",icon:(0,Fe.jsx)(L,{}),label:"Режими та застосунки"},{key:"filters",icon:(0,Fe.jsx)(ee,{}),label:"Візуальні фільтри"},{key:"bgMusic",icon:(0,Fe.jsx)(se,{}),label:"Фонова музика"}],at="filters"===$i&&tr;return(0,Ue.createPortal)((0,Fe.jsxs)(Fe.Fragment,{children:[Ii&&(0,Fe.jsx)(is,{children:(0,Fe.jsx)(Xe,{onClose:()=>Ai(!1)})}),(0,Fe.jsx)(ss,{$isClosing:Ci,$preview:at,onClick:Fr,children:(0,Fe.jsxs)(rs,{$isClosing:Ci,$preview:at,$previewWidth:lr,onClick:e=>e.stopPropagation(),children:[(0,Fe.jsxs)(ts,{children:[(0,Fe.jsx)(ns,{children:(0,Fe.jsxs)(ls,{children:[!wi&&(0,Fe.jsx)(as,{src:Dr(),alt:"User avatar"}),(0,Fe.jsx)("div",{style:{fontSize:"20px",opacity:.5,display:wi?"flex":"none"},children:(0,Fe.jsx)(B,{})}),(0,Fe.jsxs)("div",{style:{padding:wi?"0 4px":0},children:[(0,Fe.jsx)(os,{children:"Параметри"}),(0,Fe.jsx)(ds,{children:wi?"Гість • Увійдіть для повного доступу":s?.email||s?.account||"Обліковий запис"})]})]})}),(0,Fe.jsxs)(cs,{children:[!wi&&(0,Fe.jsxs)(xs,{onClick:()=>Ai(!0),children:[(0,Fe.jsx)(M,{})," Титри"]}),(0,Fe.jsx)(hs,{onClick:Nr,children:(0,Fe.jsx)(J,{})})]})]}),(0,Fe.jsxs)(ps,{children:[(0,Fe.jsx)(fs,{children:lt.map(({key:e,icon:s,label:i,locked:r})=>(0,Fe.jsxs)(gs,{$active:$i===e,$locked:!!r,onClick:()=>!r&&Si(e),children:[(0,Fe.jsx)(us,{$active:$i===e,$locked:!!r,children:s}),i,r&&(0,Fe.jsx)(js,{children:"🔒"})]},e))}),(0,Fe.jsxs)(ms,{children:["security"===$i&&!wi&&(0,Fe.jsxs)($s,{children:[(0,Fe.jsxs)(ys,{children:[(0,Fe.jsx)(j,{})," Безпека та переприв'язка акаунту"]}),(0,Fe.jsx)(bs,{children:"Прив'язка Google-акаунту, зміна пошти та пароля для входу в профіль"}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(z,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Керування прив'язками профілю"}),(0,Fe.jsx)(Us,{children:"Зміна прив'язаного Google-акаунту або пошти"})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"4px"},children:[(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"#ffffff"},children:"Google Акаунт"}),(0,Fe.jsx)("span",{style:{fontSize:"11px",color:jr?"#60cdff":"#a0a0a0"},children:yr?jr?`✓ Прив'язано (${br||"Google"})`:"Не прив'язано":"Хмарний акаунт неактивний — увійдіть знову"})]}),(0,Fe.jsxs)("div",{style:{display:"flex",gap:"6px"},children:[(0,Fe.jsx)(Ws,{type:"button",onClick:async()=>{const e=Pe.currentUser;if(e)try{const r=new o;let n;if(r.setCustomParameters({prompt:"select_account"}),jr&&ur.length>1){if(!window.confirm("Замінити прив'язаний Google-акаунт на інший?"))return;await t(e,"google.com"),n=await l(e,r)}else n=jr?await a(e,r):await l(e,r);const d=n.user,c=d.photoURL||d.providerData?.[0]?.photoURL;if(c){Zi(c);try{localStorage.setItem("saved_google_avatar",c)}catch{}}i({...s,email:d.email||s?.email,avatar:c||s?.avatar}),alert(`✅ Google акаунт підтверджено: ${d.email}`)}catch(r){"auth/cancelled-popup-request"===r.code||"auth/popup-closed-by-user"===r.code||("auth/user-mismatch"===r.code?alert("⚠️ Цей Google акаунт не збігається з поточним профілем! Якщо Google — єдиний спосіб входу, його не можна замінити."):"auth/credential-already-in-use"===r.code||"auth/email-already-in-use"===r.code?alert("⚠️ Цей Google акаунт уже прив'язаний до іншого профілю."):alert("Помилка: "+(r.message||r.code)))}else alert("Хмарний акаунт неактивний. Вийдіть і увійдіть знову, щоб активувати прив'язки.")},disabled:!yr,children:jr?ur.length>1?"Переприв'язати Google":"Підтвердити Google":"Прив'язати Google"}),jr&&ur.length>1&&(0,Fe.jsx)(Ws,{type:"button",$danger:!0,onClick:async()=>{if(Pe.currentUser)if(ur.length<=1)alert("Google — єдиний спосіб входу в цей профіль, відв'язати його не можна, інакше ви втратите доступ.");else if(window.confirm("Ви дійсно бажаєте відв'язати Google від цього профілю?\n\nПісля відв'язки для входу буде потрібен пароль."))try{await t(Pe.currentUser,"google.com"),gr(Pe.currentUser),alert("✅ Google акаунт відв'язано успішно.")}catch(e){"auth/no-such-provider"===e.code?alert("Google вже не прив'язано до цього профілю."):alert("Помилка відв'язування: "+(e.message||e.code))}},children:"Відв'язати"})]})]}),mr?(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"10px"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"#ffffff"},children:"Зміна прив'язаної пошти"}),(0,Fe.jsx)("span",{style:{fontSize:"11px",color:"#888"},children:"На нову пошту буде надіслано лист підтвердження. Зміна набере чинності після кліку на посилання у листі."}),(0,Fe.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,Fe.jsx)(Gs,{type:"email",placeholder:"Введіть нову пошту...",value:cr,onChange:e=>{xr(e.target.value),pr("")},disabled:wr}),(0,Fe.jsx)(Ws,{type:"button",$primary:!0,onClick:async()=>{const e=cr.trim();if(!e||!e.includes("@")||!e.includes("."))return void pr("❌ Введіть коректну електронну пошту!");if(e===(s?.email||s?.account))return void pr("⚠️ Це вже поточна пошта профілю.");const r=Pe.currentUser;if(r)if(mr){kr(!0),pr("⏳ Надсилаємо лист...");try{await n(r,e),i({...s,pendingEmail:e});try{const s=await Ke.default.getItem("registered_user");s&&await Ke.default.setItem("registered_user",{...s,pendingEmail:e})}catch{}pr(`✅ Лист підтвердження надіслано на ${e}. Перевірте вхідні (та спам). Після кліку на посилання входьте з новою поштою.`)}catch(t){"auth/requires-recent-login"===t.code?pr("⚠️ Потрібна повторна авторизація — вийдіть та увійдіть знову, потім спробуйте ще раз."):"auth/email-already-in-use"===t.code?pr("❌ Ця пошта вже використовується іншим акаунтом!"):"auth/invalid-email"===t.code?pr("❌ Неправильний формат електронної пошти!"):pr(`❌ Не вдалося надіслати лист: ${t.code||t.message}`)}finally{kr(!1)}}else pr("⚠️ Пошта цього профілю керується Google і не може бути змінена тут.");else pr("⚠️ Хмарний акаунт неактивний — вийдіть та увійдіть знову, потім спробуйте ще раз.")},style:{whiteSpace:"nowrap"},disabled:wr,children:wr?"⏳...":"Надіслати лист"})]}),hr&&(0,Fe.jsx)("span",{style:{fontSize:"11px",color:hr.startsWith("✅")?"#4caf50":hr.startsWith("❌")?"#f44336":hr.startsWith("⚠️")?"#ffb300":hr.startsWith("📝")?"#60cdff":"#a0a0a0",lineHeight:"1.5"},children:hr})]}):(0,Fe.jsx)("div",{style:{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"10px",fontSize:"11px",color:"#888"},children:yr?"Пошта цього профілю керується Google і змінюється в налаштуваннях Google-акаунту.":"Щоб змінити пошту, вийдіть та увійдіть знову."})]})]}),!vr&&(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(k,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Зміна пароля"}),(0,Fe.jsx)(Us,{children:"Введіть новий пароль для профілю"})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"4px"},children:[(0,Fe.jsx)(Gs,{type:"password",placeholder:"Новий пароль",value:Mr.newPassword,onChange:e=>zr({...Mr,newPassword:e.target.value})}),Mr.newPassword&&(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Fe.jsx)(Bs,{$width:Er.width,$color:Er.color}),(0,Fe.jsxs)(Vs,{$color:Er.color,children:["Надійність: ",Er.label]})]}),(0,Fe.jsx)(Gs,{type:"password",placeholder:"Підтвердіть новий пароль",value:Mr.confirmPassword,onChange:e=>zr({...Mr,confirmPassword:e.target.value})})]})]})]}),"personalization"===$i&&(0,Fe.jsxs)($s,{children:[(0,Fe.jsxs)(ys,{children:[(0,Fe.jsx)(P,{})," Персоналізація та інтерфейс"]}),(0,Fe.jsx)(bs,{children:"Формат часу й дати, анімації, підказки, шрифт, жести та дзеркальність сайту"}),(0,Fe.jsxs)(ks,{children:[(0,Fe.jsx)(W,{})," Час та дата"]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(W,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Відображення секунд"}),(0,Fe.jsx)(Us,{children:"Показувати секунди (17:23:17)"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>Ur({showSeconds:!Mr.showSeconds}),children:[(0,Fe.jsx)(Ls,{$checked:Mr.showSeconds,children:Mr.showSeconds?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Mr.showSeconds})]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(W,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Формат часу"}),(0,Fe.jsx)(Us,{children:"24-годинний або 12-годинний (AM/PM)"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Es,{value:Mr.hour12?"12":"24",onChange:e=>Ur({hour12:"12"===e.target.value}),children:[(0,Fe.jsx)("option",{value:"24",children:"24-годинний"}),(0,Fe.jsx)("option",{value:"12",children:"12-годинний (AM/PM)"})]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(Z,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Режим відображення"}),(0,Fe.jsx)(Us,{children:"Час, дата або обидва разом"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Es,{value:Mr.dateDisplayMode,onChange:e=>Ur({dateDisplayMode:e.target.value}),children:[(0,Fe.jsx)("option",{value:"both",children:"Час та Дата разом"}),(0,Fe.jsx)("option",{value:"time",children:"Тільки Час"}),(0,Fe.jsx)("option",{value:"date",children:"Тільки Дата"})]})})]}),(0,Fe.jsxs)(ks,{children:[(0,Fe.jsx)(P,{})," Інтерфейс"]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(L,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Вимкнути анімації"}),(0,Fe.jsx)(Us,{children:qi?"Анімації та плавні переходи вимкнено — сайт легший для слабких пристроїв":"Іконки, переходи й ефекти анімовані"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>Se(!qi),children:[(0,Fe.jsx)(Ls,{$checked:qi,children:qi?"Вимкнено":"Увімкнено"}),(0,Fe.jsx)(Rs,{$checked:qi})]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(x,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Реклама та підказки в хедері"}),(0,Fe.jsx)(Us,{children:er?"Авто-показ банера з порадами інструментів(можливостей) Стихії та гарячими клавішами":"Банер підказок повністю вимкнено"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>{const e=!er;sr(e);try{localStorage.setItem("ad_antiheader_enabled",e?"true":"false"),window.dispatchEvent(new Event("storage"))}catch{}},children:[(0,Fe.jsx)(Ls,{$checked:er,children:er?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:er})]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(v,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Контекстне меню Стихії"}),(0,Fe.jsx)(Us,{children:ir?"Права кнопка миші відкриває меню Стихії (копіювання, фото, режим читання)":"Права кнопка миші відкриває звичайне меню браузера"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>{const e=!ir;rr(e);try{localStorage.setItem("site_context_menu_enabled",e?"true":"false"),window.dispatchEvent(new Event("storage"))}catch{}},children:[(0,Fe.jsx)(Ls,{$checked:ir,children:ir?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:ir})]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(W,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Таймер оновлення погоди"}),(0,Fe.jsx)(Us,{children:"Показувати відлік до наступного оновлення даних"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>Ur({showUpdateTimer:!Mr.showUpdateTimer}),children:[(0,Fe.jsx)(Ls,{$checked:Mr.showUpdateTimer,children:Mr.showUpdateTimer?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Mr.showUpdateTimer})]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(P,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Власний шрифт"}),(0,Fe.jsx)(Us,{children:"Назва шрифту Google Fonts (напр. Roboto)"})]})]}),(0,Fe.jsx)(Fs,{style:{minWidth:"200px"},children:(0,Fe.jsx)(Gs,{placeholder:"Назва шрифту",value:Mr.fontFamily,onChange:e=>Ur({fontFamily:e.target.value})})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(U,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Чутливість жестів"}),(0,Fe.jsxs)(Us,{children:["Свайпи та слайдери: ",Mr.gestureSensitivity,"x"]})]})]}),(0,Fe.jsx)(Fs,{style:{minWidth:"160px"},children:(0,Fe.jsx)(ri,{type:"range",min:"0.5",max:"3",step:"0.1",value:Mr.gestureSensitivity,onChange:e=>Ur({gestureSensitivity:parseFloat(e.target.value)})})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(P,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Швидкий відгук на кліки"}),(0,Fe.jsx)(Us,{children:"Миттєвий відгук без затримок"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>Ur({fastClicks:!Mr.fastClicks}),children:[(0,Fe.jsx)(Ls,{$checked:Mr.fastClicks,children:Mr.fastClicks?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Mr.fastClicks})]})})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(ee,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Дзеркальність сайту"}),(0,Fe.jsx)(Us,{children:"Скидається після перезавантаження сторінки"})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"По горизонталі (ліво ↔ право)"}),(0,Fe.jsxs)(Ns,{onClick:()=>Sr(!$r),children:[(0,Fe.jsx)(Ls,{$checked:$r,children:$r?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:$r})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"По вертикалі (верх ↕ низ)"}),(0,Fe.jsxs)(Ns,{onClick:()=>Tr(!Cr),children:[(0,Fe.jsx)(Ls,{$checked:Cr,children:Cr?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Cr})]})]}),($r||Cr)&&(0,Fe.jsx)(Ws,{$danger:!0,style:{alignSelf:"flex-start",marginTop:"4px"},onClick:()=>{Sr(!1),Tr(!1)},children:"Скинути дзеркальність"})]})]})]}),"siteSections"===$i&&(0,Fe.jsxs)($s,{children:[(0,Fe.jsxs)(ys,{children:[(0,Fe.jsx)(q,{})," Секції сайту та новини"]}),(0,Fe.jsx)(bs,{children:"Порядок, видимість і тема кожної секції, а також фільтр та вигляд новин"}),ae&&ae.map((e,s)=>{const i=fe?.includes(e.key),r=xe?.[e.key]??c;return(0,Fe.jsx)(Cs,{children:(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:ws[e.key]||(0,Fe.jsx)(V,{})}),(0,Fe.jsx)(Ps,{children:(0,Fe.jsx)(Ds,{children:e.label})})]}),(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,Fe.jsx)(ai,{onClick:()=>Ae(e.key),title:"Змінити тему секції",children:r?(0,Fe.jsx)(b,{style:{fontSize:"13px"}}):(0,Fe.jsx)(K,{style:{fontSize:"13px",color:"#ffb36c"}})}),(0,Fe.jsx)(ai,{onClick:()=>me(e.key),disabled:!i&&ae.length-(fe?.length||0)<=2,title:i?"Показати секцію":"Приховати секцію",children:i?(0,Fe.jsx)(S,{style:{color:"#ff6b6b"}}):(0,Fe.jsx)(y,{style:{color:"#60cdff"}})}),"hero"!==e.key&&(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)(ai,{disabled:s<=1,onClick:()=>de(s,-1),title:"Підняти",children:(0,Fe.jsx)(Y,{})}),(0,Fe.jsx)(ai,{disabled:s===ae.length-1,onClick:()=>de(s,1),title:"Опустити",children:(0,Fe.jsx)(X,{})})]})]})]})},e.key)}),(0,Fe.jsx)("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:(0,Fe.jsx)(Ws,{onClick:Ne,style:{flex:1},children:"Скинути теми секцій"})}),(0,Fe.jsxs)(ks,{children:[(0,Fe.jsx)(p,{})," Новини"]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(j,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Фільтр новин"}),(0,Fe.jsx)(Us,{children:"Приховує новини про війну, політику, кримінал та інший небажаний контент. Зміни діють після оновлення новин"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>{const e=!or;dr(e),ve(e)},children:[(0,Fe.jsx)(Ls,{$checked:or,children:or?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:or})]})})]}),wi?(0,Fe.jsx)(Ss,{style:{opacity:.45},children:(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(p,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Синхронізація заглушених новин"}),(0,Fe.jsx)(Us,{children:"🔒 Доступно тільки для зареєстрованих користувачів"})]})]})}):(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(p,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Синхронізація заглушених новин"}),(0,Fe.jsxs)(Us,{children:["Синхронізувати приховані новини між усіма пристроями. Не більше ",30," дій на добу — «Заглушити» і «Розглушити» рахуються обидві. Те, що понад ліміт, зберігається лише на цьому пристрої й підтягнеться в хмару з наступною синхронізацією."]})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>Ur({syncMutedNews:!Mr.syncMutedNews}),children:[(0,Fe.jsx)(Ls,{$checked:Mr.syncMutedNews,children:Mr.syncMutedNews?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Mr.syncMutedNews})]})})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(p,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Видимість елементів новин"}),(0,Fe.jsx)(Us,{children:"Увімкніть або вимкніть частини новинних карток"})]})]}),(0,Fe.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:Ir.filter(e=>"image"!==e.key).map(e=>(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"title"===e.key?"Заголовок новини":"Опис новини"}),(0,Fe.jsxs)(Ns,{onClick:()=>(e=>{if("image"===e)return;const s=Ir.map(s=>s.key===e?{...s,visible:!s.visible}:s);Ar(s),Ur({newsLayout:s})})(e.key),children:[(0,Fe.jsx)(Ls,{$checked:e.visible,children:e.visible?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:e.visible})]})]},e.key))})]})]}),"modes"===$i&&(0,Fe.jsxs)($s,{children:[(0,Fe.jsxs)(ys,{children:[(0,Fe.jsx)(L,{})," Режими сайту та застосунки"]}),(0,Fe.jsx)(bs,{children:"Тема, швидкість завантаження, режим Декоратора, навчання та застосунки для пристроїв"}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(g,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Навчання від Доміно"}),(0,Fe.jsx)(Us,{children:"Пройти інтерактивне навчання по сайту ще раз"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ws,{disabled:!ki,onClick:()=>{Nr(),setTimeout(()=>ki?.startTutorial(),300)},children:[(0,Fe.jsx)(h,{})," Запустити"]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:c?(0,Fe.jsx)(b,{}):(0,Fe.jsx)(K,{style:{color:"#ffb36c"}})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Головна тема сайту"}),(0,Fe.jsx)(Us,{children:c?"Темна тема активна":"Світла тема активна"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsx)(Ws,{onClick:f,children:c?(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)(b,{})," Темна"]}):(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)(K,{style:{color:"#ffb36c"}})," Світла"]})})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(V,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Липкий фоновий ефект"}),(0,Fe.jsx)(Us,{children:"Закріплення заднього плану при скролі"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:Ge,children:[(0,Fe.jsx)(Ls,{$checked:Ee,children:Ee?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Ee})]})})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#60cdff",children:(0,Fe.jsx)(L,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Стратегія завантаження ресурсів"}),(0,Fe.jsx)(Us,{children:"Оптимізація швидкості запуску та економія трафіку"})]})]}),(0,Fe.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"4px"},children:[{key:"eager",label:"Повний",desc:"Завантажує все відразу при старті"},{key:"delayed",label:"Оптимальний",desc:"Завантажує важкі модулі через 8 сек"},{key:"lazy",label:"Економний",desc:"Завантажує тільки за потребою"}].map(({key:e,label:s})=>(0,Fe.jsx)(Ws,{onClick:()=>Re(e),style:{flex:1,minWidth:"120px",background:Le===e?"rgba(96,205,255,0.15)":void 0,borderColor:Le===e?"#60cdff":void 0},children:s},e))})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#a78bfa",children:(0,Fe.jsx)(G,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Режим Декоратора (CSS Редактор)"}),(0,Fe.jsx)(Us,{children:"Візуальне редагування стилів елементів сторінки"})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"Увімкнути режим Декоратора"}),(0,Fe.jsxs)(Ns,{onClick:()=>Di(!Pi),children:[(0,Fe.jsx)(Ls,{$checked:Pi,children:Pi?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Pi})]})]}),Pi&&(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Fe.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"Зберігати зміни після оновлення"}),(0,Fe.jsxs)(Ns,{onClick:()=>Ri(!Li),children:[(0,Fe.jsx)(Ls,{$checked:Li,children:Li?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:Li})]})]}),(0,Fe.jsx)("div",{style:{fontSize:"12px",fontWeight:"600",color:"#60cdff",marginTop:"4px"},children:"Версія Декоратора (кожна зберігає свої окремі зміни)"}),(0,Fe.jsx)("div",{style:{display:"flex",gap:"6px"},children:[0,1,2].map(e=>(0,Fe.jsxs)(Ws,{onClick:()=>Gi(e),style:{flex:1,outline:Ei===e?"2px solid #60cdff":"none"},children:["Пресет ",e+1]},e))}),(0,Fe.jsxs)("div",{style:{fontSize:"12px",fontWeight:"600",color:"#60cdff",marginTop:"4px"},children:["Журнал змін (",Ui.length,")"]}),Ui.length>0?(0,Fe.jsx)("div",{style:{maxHeight:"140px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"4px"},children:Ui.map(e=>(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.04)",padding:"4px 8px",borderRadius:"4px",fontSize:"11px"},children:[(0,Fe.jsxs)("span",{children:[(0,Fe.jsx)("b",{style:{color:"#60cdff"},children:e.tagName})," ",e.property,": ",e.newValue]}),(0,Fe.jsx)(Ws,{style:{padding:"2px 6px",fontSize:"10px"},onClick:()=>Fi(e.id),children:"Відмінити"})]},e.id))}):(0,Fe.jsx)("span",{style:{fontSize:"11px",color:"#777",fontStyle:"italic"},children:"Змін ще немає"}),Ui.length>0&&(0,Fe.jsx)(Ws,{$danger:!0,onClick:Ni,style:{alignSelf:"flex-start"},children:"Скинути всі зміни Декоратора"})]})]})]}),(0,Fe.jsxs)(ks,{children:[(0,Fe.jsx)(N,{})," Застосунки Стихії"]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(N,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Версія для Windows"}),(0,Fe.jsx)(Us,{children:"Завантажити застосунок Stuxia для комп'ютера"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ws,{as:"a",$primary:!0,href:"https://github.com/TheTurkeyProgramist/stuxia/releases/download/v1.0.0/stuxia_1.0.0_x64-setup.exe",children:[(0,Fe.jsx)(N,{})," Завантажити"]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(U,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Версія для Android"}),(0,Fe.jsx)(Us,{children:"APK для встановлення на Android-пристрої"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ws,{as:"a",$primary:!0,href:"https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Android.apk",children:[(0,Fe.jsx)(N,{})," Завантажити APK"]})})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(N,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Версія для Linux"}),(0,Fe.jsx)(Us,{children:"AppImage для більшості дистрибутивів або DEB для Debian/Ubuntu"})]})]}),(0,Fe.jsxs)(Fs,{children:[(0,Fe.jsxs)(Ws,{as:"a",$primary:!0,href:"https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Linux.AppImage",children:[(0,Fe.jsx)(N,{})," AppImage"]}),(0,Fe.jsxs)(Ws,{as:"a",href:"https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Linux.deb",children:[(0,Fe.jsx)(N,{})," DEB"]})]})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{children:(0,Fe.jsx)(U,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"На iPhone та iPad"}),(0,Fe.jsx)(Us,{children:"Відкрийте сайт у Safari, натисніть «Поділитися» → «На початковий екран»"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ws,{as:"a",$primary:!0,href:"https://stuxia.com",target:"_blank",rel:"noreferrer",children:[(0,Fe.jsx)(p,{})," Відкрити сайт"]})})]})]}),"filters"===$i&&(0,Fe.jsxs)($s,{children:[(0,Fe.jsxs)(ys,{children:[(0,Fe.jsx)(ee,{})," Візуальні фільтри та пресети"]}),(0,Fe.jsxs)(bs,{children:["Затемнення, кольорові фільтри для зору та збереження власних пресетів.",tr&&(0,Fe.jsx)(Ts,{as:"span",children:" Результат видно на сторінці ліворуч"})]}),(0,Fe.jsxs)(Ts,{children:[(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(F,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Перегляд поруч зі сторінкою"}),(0,Fe.jsx)(Us,{children:tr?"На цій вкладці вікно зсувається праворуч і не затемнює сайт (на широкому екрані)":"Вікно налаштувань звичайного розміру, сторінка затемнена"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>{const e=!tr;nr(e);try{localStorage.setItem("settings_filters_preview",e?"true":"false")}catch{}},children:[(0,Fe.jsx)(Ls,{$checked:tr,children:tr?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:tr})]})})]}),tr&&(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(u,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Ширина вікна в режимі перегляду"}),(0,Fe.jsxs)(Us,{children:[lr,"% ширини екрана"]})]})]}),(0,Fe.jsx)(Fs,{style:{minWidth:"180px"},children:(0,Fe.jsx)(ri,{type:"range",min:64,max:100,step:"4",value:lr,onChange:e=>(e=>{ar(e);try{localStorage.setItem("settings_filters_preview_percent",String(e))}catch{}})(Number(e.target.value))})})]})]}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)($,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Зменшення яскравості / Затемнення"}),(0,Fe.jsxs)(Us,{children:["Інтенсивність: ",Wi.darkIntensity||0,"%"]})]})]}),(0,Fe.jsx)(Fs,{style:{minWidth:"180px"},children:(0,Fe.jsx)(ri,{type:"range",min:"0",max:"100",value:Wi.darkIntensity||0,onChange:e=>Bi(s=>({...s,darkIntensity:Number(e.target.value)}))})})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(ee,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Кольорові та зорові фільтри"}),(0,Fe.jsx)(Us,{children:"Оберіть ефект для оформлення сторінки"})]})]}),(0,Fe.jsx)(oi,{style:{marginTop:"4px"},children:ze.map(e=>(0,Fe.jsx)(di,{$active:Wi.filterType===e.id,onClick:()=>Bi(s=>ue(s,e.id)),children:e.label},e.id))})]}),"none"!==Wi.filterType&&(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(P,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Сила ефекту фільтра"}),(0,Fe.jsxs)(Us,{children:["Інтенсивність: ",Wi.filterIntensity||50,"%"]})]})]}),(0,Fe.jsx)(Fs,{style:{minWidth:"180px"},children:(0,Fe.jsx)(ri,{type:"range",min:"0",max:"100",value:Wi.filterIntensity||50,onChange:e=>Bi(s=>({...s,filterIntensity:Number(e.target.value)}))})})]}),(0,Fe.jsxs)(Ms,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(_,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Приклад"}),(0,Fe.jsx)(Us,{children:"Так фільтр виглядатиме на сторінці"})]})]}),(0,Fe.jsx)(zs,{src:"/assets/mountains-CwRk4ZgD.webp",alt:"Приклад візуального фільтра",loading:"lazy",style:{filter:te(Wi)}})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(V,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Комбінація фільтрів"}),(0,Fe.jsx)(Us,{children:Xi.length>1?`Разом діють: ${Xi.map(e=>ze.find(s=>s.id===e)?.label).join(" + ")}`:"Позначте кілька фільтрів, щоб вони діяли разом, і збережіть як власний пресет"})]})]}),(0,Fe.jsx)(oi,{style:{marginTop:"4px"},children:Ie.map(e=>(0,Fe.jsxs)(di,{$active:Xi.includes(e.id),onClick:()=>(e=>{const s=Xi.includes(e)?Xi.filter(s=>s!==e):[...Xi,e];Bi(e=>{const i={...e};return delete i.combo,0===s.length?{...i,filterType:"none"}:1===s.length?{...i,filterType:s[0]}:{...i,filterType:"combo",combo:s}})})(e.id),children:[Xi.includes(e.id)?(0,Fe.jsx)(R,{}):(0,Fe.jsx)(I,{})," ",e.label]},e.id))})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#ffb36c",children:(0,Fe.jsx)(L,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Швидкі стилі та пресети"}),(0,Fe.jsxs)(Us,{children:["Готові стилі та власні пресети (",_i.length,"/",6,"). Хедер і налаштування фільтри не змінюють — тут їх завжди можна вимкнути"]})]})]}),(0,Fe.jsxs)(ci,{style:{marginTop:"4px"},children:[ge.map(e=>(0,Fe.jsxs)(di,{onClick:()=>Bi(e.config),children:[(0,Fe.jsx)(e.icon,{})," ",e.label]},e.id)),_i.map(e=>(0,Fe.jsxs)(xi,{children:[(0,Fe.jsxs)(di,{style:{border:"none",flex:1,padding:"2px"},onClick:()=>Bi(e.config),children:[(0,Fe.jsx)(ye,{})," ",Me(e)]}),(0,Fe.jsx)(ai,{onClick:()=>{const s=window.prompt("Нова назва пресета:",Me(e));s&&Hi(e.id,s)},title:"Перейменувати",style:{width:22,height:22,fontSize:10},children:(0,Fe.jsx)(C,{})}),(0,Fe.jsx)(ai,{$danger:!0,onClick:()=>Oi(e.id),title:"Видалити",style:{width:22,height:22,fontSize:10},children:(0,Fe.jsx)(J,{})})]},e.id))]}),(0,Fe.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[(0,Fe.jsx)(Gs,{placeholder:_i.length>=6?"Досягнуто ліміт — видаліть пресет":"Назва нового пресета...",value:Ki,onChange:e=>Ji(e.target.value),maxLength:15,disabled:_i.length>=6}),(0,Fe.jsx)(Ws,{disabled:_i.length>=6||!Ki.trim(),onClick:()=>{Ki.trim()&&(Yi(Ki),Ji(""))},children:"Зберегти"})]})]}),(0,Fe.jsxs)(Ws,{$danger:!0,onClick:Vi,style:{alignSelf:"flex-start",marginTop:"4px"},children:[(0,Fe.jsx)(g,{})," Скинути всі фільтри"]})]}),"bgMusic"===$i&&(0,Fe.jsxs)($s,{children:[(0,Fe.jsxs)(ys,{children:[(0,Fe.jsx)(se,{})," Фонова музика"]}),(0,Fe.jsx)(bs,{children:"Гучність, швидкість і режим відтворення, бібліотека треків та власні файли"}),(0,Fe.jsxs)(Ss,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#a78bfa",children:(0,Fe.jsx)(se,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Фонова музика"}),(0,Fe.jsx)(Us,{children:"Вмикайте приємну музику під час використання сайту"})]})]}),(0,Fe.jsx)(Fs,{children:(0,Fe.jsxs)(Ns,{onClick:()=>Be(!We),children:[(0,Fe.jsx)(Ls,{$checked:We,children:We?"Увімкнуто":"Вимкнуто"}),(0,Fe.jsx)(Rs,{$checked:We})]})})]}),(0,Fe.jsxs)(vs,{$off:!We,children:[(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#a78bfa",children:(0,Fe.jsx)(H,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Гучність та швидкість"}),(0,Fe.jsx)(Us,{children:"Налаштування відтворення фону та звукових ефектів"})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"4px"},children:[(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,Fe.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Гучність: ",Math.round(100*Ye),"%"]}),(0,Fe.jsx)(ri,{type:"range",min:"0",max:"1",step:"0.01",value:Ye,onChange:e=>Oe(parseFloat(e.target.value)),style:{flex:1}})]}),(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,Fe.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Швидкість: ",He,"x"]}),(0,Fe.jsx)(ri,{type:"range",min:"0.5",max:"2",step:"0.05",value:He,onChange:e=>{return s=parseFloat(e.target.value),Je(s),bi?.current&&(bi.current.playbackRate=s),void(vi?.current&&(vi.current.playbackRate=s));var s},style:{flex:1}})]}),(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,Fe.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Гучність SFX: ",Math.round(100*mi),"%"]}),(0,Fe.jsx)(ri,{type:"range",min:"0",max:"1",step:"0.01",value:mi,onChange:e=>yi(parseFloat(e.target.value)),style:{flex:1}})]})]})]}),(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#a78bfa",children:(0,Fe.jsx)(T,{style:{fontSize:"18px"}})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsx)(Ds,{children:"Режим відтворення"}),(0,Fe.jsxs)(Us,{children:["Позиція: ",nt(Or)," / ",nt(Xr)]})]})]}),(0,Fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,Fe.jsx)(ri,{type:"range",min:"0",max:Xr||100,step:"0.1",value:Or,onChange:e=>{const s=parseFloat(e.target.value),i=bi?.current,r=vi?.current;let t=i;i&&r&&!r.paused&&r.volume>=i.volume&&(t=r),t&&(t.currentTime=s,Hr(s))}}),(0,Fe.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[["loop","order"].map(e=>(0,Fe.jsxs)(Ws,{onClick:()=>Ze(e),style:{background:Qe===e?"rgba(96,205,255,0.15)":void 0,borderColor:Qe===e?"#60cdff":void 0},children:[(0,Fe.jsx)(A,{})," ","loop"===e?"Повтор":"Порядок"]},e)),(0,Fe.jsxs)(Ws,{onClick:()=>es(!qe),style:{background:qe?"rgba(167,139,250,0.15)":void 0,borderColor:qe?"#a78bfa":void 0},children:[(0,Fe.jsx)(D,{})," Перемішати"]}),(0,Fe.jsx)(Ws,{onClick:ui,children:"Скинути позицію"})]})]})]}),(0,Fe.jsx)("div",{style:{display:"flex",gap:"4px",padding:"4px 0"},children:["library","custom"].map(e=>(0,Fe.jsx)(Ws,{onClick:()=>Yr(e),style:{background:_r===e?"rgba(96,205,255,0.15)":void 0,borderColor:_r===e?"#60cdff":void 0},children:"library"===e?(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)(v,{})," Бібліотека"]}):(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)(O,{})," Власні треки"]})},e))}),"library"===_r&&(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[(0,Fe.jsx)(m,{style:{color:"#a0a0a0"}}),(0,Fe.jsx)(Gs,{placeholder:"Пошук треку...",value:Br,onChange:e=>Vr(e.target.value),style:{maxWidth:"280px"}})]}),(0,Fe.jsx)(Xs,{children:tt.map(e=>{const s=Ve===e.file||!e.isCustom&&fi===e.id,i=Jr[e.id],r=void 0!==i&&i<100;return(0,Fe.jsxs)(Ks,{$active:s,style:e.hidden&&"order"===Qe?{opacity:.45}:void 0,onClick:()=>e.isCustom?(_e(e.file),gi(null)):(async e=>{if(!("caches"in window))return _e(e.file),gi(e.id),void it(e.id,e.file);try{const s=await caches.open(he);if(await s.match(e.file))return _e(e.file),gi(e.id),it(e.id,e.file),Qr(s=>({...s,[e.id]:100})),void qr(s=>s.filter(s=>String(s)!==String(e.id)));Qr(s=>({...s,[e.id]:0}));const i=await fetch(e.file),r=i.body?.getReader(),t=Number(i.headers.get("Content-Length"))||0;let n=0;const l=[];for(;;){const{done:s,value:i}=await r.read();if(s)break;l.push(i),n+=i.length,t>0&&Qr(s=>({...s,[e.id]:Math.min(100,Math.round(n/t*100))}))}const a=new Blob(l);await s.put(e.file,new Response(a,{headers:{"Content-Type":i.headers.get("Content-Type")||"audio/mpeg"}})),_e(e.file),gi(e.id),it(e.id,e.file),Qr(s=>({...s,[e.id]:100}))}catch{_e(e.file),gi(e.id),it(e.id,e.file)}})(e),children:[e.image?(0,Fe.jsx)(Js,{src:e.image,alt:e.name}):(0,Fe.jsx)("div",{style:{width:32,height:32,background:e.isCustom?"rgba(96,205,255,0.1)":"rgba(167,139,250,0.1)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:e.isCustom?(0,Fe.jsx)(O,{style:{color:"#60cdff",fontSize:"14px"}}):(0,Fe.jsx)(se,{style:{color:"#a78bfa",fontSize:"14px"}})}),(0,Fe.jsxs)(Qs,{children:[(0,Fe.jsx)(Zs,{children:e.name}),(0,Fe.jsx)(qs,{children:e.isCustom?"Власний трек":r?`Завантаження ${i}%...`:e.available?"✓ Доступний":"↓ Клікніть для завантаження"})]}),s&&(0,Fe.jsx)(ii,{}),"order"===Qe&&(0,Fe.jsx)(ai,{onClick:i=>{i.stopPropagation(),((e,s)=>{const i=!e.hidden;e.isCustom?si(rt.map((s,r)=>r===e.customIdx?{...s,enabled:!i}:s)):pi(s=>({...s,[e.id]:{...s[e.id],enabled:!i}})),i&&s&&ji()})(e,s)},title:e.hidden?"Повернути в чергу":"Пропускати в режимі «Порядок»",children:e.hidden?(0,Fe.jsx)(S,{style:{color:"#ff6b6b"}}):(0,Fe.jsx)(y,{style:{color:"#60cdff"}})})]},e.id)})})]}),"custom"===_r&&(0,Fe.jsxs)(Cs,{children:[(0,Fe.jsxs)(Is,{children:[(0,Fe.jsx)(As,{$color:"#a78bfa",children:(0,Fe.jsx)(O,{})}),(0,Fe.jsxs)(Ps,{children:[(0,Fe.jsxs)(Ds,{children:["Власні треки (",rt.length,"/",7,")"]}),(0,Fe.jsxs)(Us,{children:["MP3/WAV/OPUS (рекомендовано) до ",20," МБ та ",8," хвилин. Додані треки з'являються в бібліотеці"]})]})]}),(0,Fe.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"4px"},children:(rt.length<7?[...rt,null]:rt).map((e,s)=>(0,Fe.jsxs)(ti,{$hasFile:!!e?.file,children:[e?.file?(0,Fe.jsx)("div",{style:{width:28,height:28,background:"rgba(96,205,255,0.1)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Fe.jsx)(se,{style:{color:"#60cdff",fontSize:"13px"}})}):(0,Fe.jsx)("div",{style:{width:28,height:28,background:"rgba(255,255,255,0.04)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Fe.jsx)("span",{style:{color:"#555",fontSize:"12px"},children:s+1})}),(0,Fe.jsx)(ni,{children:e?.name||(0,Fe.jsx)("span",{style:{color:"#555"},children:"Додати трек"})}),(0,Fe.jsxs)(li,{children:[(0,Fe.jsx)(ai,{onClick:()=>{Gr.current=s,Wr.current.click()},title:"Завантажити",children:(0,Fe.jsx)(O,{})}),e?.file&&(0,Fe.jsx)(ai,{$danger:!0,onClick:()=>{return e=s,void si(rt.filter((s,i)=>i!==e));var e},title:"Видалити",children:(0,Fe.jsx)(Q,{})})]})]},s))}),(0,Fe.jsx)("input",{ref:Wr,type:"file",accept:"audio/*",style:{display:"none"},onChange:e=>{const s=e.target.files[0];if(e.target.value="",!s||null===Gr.current)return;if(s.size>20971520)return void alert("Файл занадто великий! Максимум 20 МБ.");const i=new Audio(URL.createObjectURL(s));i.onloadedmetadata=()=>{if(i.duration>480)return alert("Мелодія занадто довга! Максимум 8 хвилин."),void URL.revokeObjectURL(i.src);const e=[...rt];e[Math.min(Gr.current,e.length)]={name:s.name.split(".")[0].substring(0,30),file:s,repeats:1,enabled:!0},si(e.slice(0,7)),_e(s),gi(null),URL.revokeObjectURL(i.src)}}})]})]})]})]})]}),(0,Fe.jsxs)(_s,{children:[(0,Fe.jsxs)(Ys,{children:[(0,Fe.jsx)(x,{style:{color:"#60cdff"}}),(0,Fe.jsxs)("span",{children:["Ви погодились з"," ",(0,Fe.jsx)(Os,{onClick:()=>zi(!0),children:"Угодою"})]})]}),(0,Fe.jsxs)(Hs,{children:[(0,Fe.jsx)(Ws,{onClick:Nr,children:"Скасувати"}),!wi&&(0,Fe.jsx)(Ws,{$primary:!0,onClick:()=>{if(wi)return void Fr();if(Rr)return void alert("Введена некоректна дата!");if(!Mr.day||!Mr.month||!Mr.year)return void alert("Будь ласка, виберіть дату народження!");if(Mr.newPassword){if(Mr.newPassword!==Mr.confirmPassword)return void alert("Нові паролі не збігаються!");if(Mr.newPassword.length<6)return void alert("Пароль занадто короткий!")}const e=Dr();i({...s,account:s?.account||Mr.name,firstName:Mr.name,avatar:e,birthDate:`${Mr.year}-${Mr.month.toString().padStart(2,"0")}-${Mr.day.toString().padStart(2,"0")}`,textColor:Mr.textColor,borderColor:Mr.borderColor,fontFamily:Mr.fontFamily,showSeconds:Mr.showSeconds,dateDisplayMode:Mr.dateDisplayMode,hour12:Mr.hour12,voiceActingMode:Mr.voiceActingMode,showUpdateTimer:Mr.showUpdateTimer,newsLayout:Ir,newsAutoScroll:Mr.newsAutoScroll,syncMutedNews:Mr.syncMutedNews,gestureSensitivity:Mr.gestureSensitivity,fastClicks:Mr.fastClicks,...Mr.newPassword?{oldPassword:Mr.oldPassword,newPassword:Mr.newPassword}:{}}),Fr()},disabled:Rr,children:"Зберегти"})]})]})]})}),Mi&&(0,Fe.jsx)(is,{children:(0,Fe.jsx)($e,{isOpen:Mi,onClose:()=>zi(!1)})})]}),document.body)};export{hi as default};