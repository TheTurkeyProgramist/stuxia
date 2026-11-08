import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{n as i}from"./vendor-utils-BcX-d9lY.js";import{i as r,n as s,r as t}from"./index-Dd-O8J_a.js";import{c as n,h as a,i as o,l,m as d,n as c,o as x,p,s as h,t as f}from"./vendor-firebase-CLgF0jK9.js";import{a as g}from"./vendor-i18n-DhRqfqeK.js";import{i as u,o as j,s as m}from"./vendor-motion-B-5ZsAFi.js";import{i as b,r as y,t as v}from"./styled-components.browser.esm-C9MjP7gd.js";import{n as w}from"./vendor-react-B2dV4D76.js";import{$i as k,$r as $,Ai as S,Bi as C,Bn as z,Di as T,Dn as M,Ei as A,Fi as D,Fr as P,Gi as U,Gn as I,Gr as F,Ii as L,Ji as R,Ki as B,Lr as G,Oi as Y,Pi as N,Q as W,Qi as E,Qr as _,Ri as V,Si as X,Sr as H,Ti as O,Tr as K,Ur as Q,Wi as J,Xi as q,Xr as Z,Yr as ee,Zi as ie,Zr as re,_i as se,_r as te,bi as ne,ci as ae,di as oe,ei as le,fi as de,gi as ce,gr as xe,hi as pe,ii as he,ji as fe,ki as ge,mi as ue,mr as je,nn as me,oi as be,pi as ye,qr as ve,qt as we,ri as ke,rn as $e,ti as Se,ui as Ce,vi as ze,vn as Te,xi as Me,xr as Ae,yi as De,yn as Pe,yr as Ue,zi as Ie,zr as Fe}from"./vendor-ui-DBFQ2jRZ.js";import{t as Le}from"./AgeGateModal-BTTrwGzV.js";import{a as Re,c as Be,d as Ge,f as Ye,i as Ne,l as We,m as Ee,p as _e,t as Ve,u as Xe}from"./contentFilter-6QONIxYe.js";import{o as He,r as Oe}from"./MirrorSafe-BBuq4yF6.js";import{n as Ke}from"./TutorialContext-BworDel4.js";import{o as Qe,t as Je}from"./UserSearchModal-BN28sSE7.js";import{auth as qe}from"./firebase-CROkTg2g.js";import{_ as Ze,bt as ei,r as ii,t as ri,v as si}from"./newsFilterSync-xXr5bbVh.js";import{t as ti}from"./Tooltip-CDGma9Lq.js";import{B as ni,G as ai,H as oi,J as li,K as di,R as ci,U as xi,V as pi,W as hi,Y as fi,_ as gi,b as ui,d as ji,f as mi,g as bi,h as yi,l as vi,m as wi,p as ki,q as $i,u as Si,v as Ci,x as zi,y as Ti,z as Mi}from"./main-C2VxEdv8.js";var Ai=e(g()),Di=e(w()),Pi=m(),Ui=[{duration:5500,text:"Я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей."},{duration:3500,text:"Надати вам чудову погоду — будючий обов'язок."},{duration:4500,text:"Політика — це фактор, який ми не підтримуємо і який ви побачите, але за бажанням..."},{duration:4e3,text:"Різноманітна та захоплива музика, яку можна додавати."},{duration:3500,text:"Пишіть, підказуйте, що зробити для вас :)"},{duration:4e3,text:"Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!"},{duration:5500,text:"Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)"},{duration:8500,text:"Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким."},{duration:4500,text:"Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом :)"}],Ii=[{title:"Динофроз",author:"Mondo TV"},{title:"Monody, Unity, Hunger",author:"TheFatRat"},{title:"Theory of Everything, Theory of Everything II",author:"DJ-Nate"},{title:"Звуки інтерфейсу",author:"Авторська робота"}],Fi=si.filter(e=>/\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(e.src||"")),Li=v`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`,Ri=v`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`,Bi=v`
  from { opacity: 0; }
  to { opacity: 1; }
`,Gi=b.div`
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
  animation: ${Bi} 0.6s ease-out;
  /* Плавне закриття: усе гасне в чорне */
  opacity: ${e=>e.$closing?0:1};
  transition: opacity ${800}ms ease-in-out;
  pointer-events: ${e=>e.$closing?"none":"auto"};
`,Yi=b.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`,Ni=b.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${Li} 0.8s ease-in-out forwards;
`,Wi=b.button`
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
`,Ei=b.div`
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
  animation: ${Ri} 0.6s ease-out forwards;
`,_i=v`
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.94); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,Vi=b.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  width: min(90%, 640px);
  padding: 28px 32px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(148, 255, 250, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  text-align: center;
  animation: ${_i} 0.9s ease-out forwards;

  h2 {
    margin: 0 0 8px;
    font-size: clamp(32px, 6vw, 52px);
    color: #94fffa;
    text-shadow: 0 0 24px rgba(148, 255, 250, 0.45);
  }

  p {
    margin: 0;
    font-size: 15px;
    color: #e6e6e6;
  }
`,Xi=b.div`
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
  animation: ${Ri} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`,Hi=({onClose:e})=>{const[i,r]=(0,Ai.useState)(!1),s=(0,Ai.useRef)(null),t=(0,Ai.useRef)(null),[n,a]=(0,Ai.useState)("text"),[o,l]=(0,Ai.useState)(0),[d,c]=(0,Ai.useState)(0),[x,p]=(0,Ai.useState)(0);(0,Ai.useEffect)(()=>{const e=ui();return s.current=e,()=>{e(),clearTimeout(t.current)}},[]);const h=(0,Ai.useCallback)(()=>{t.current||(s.current?.(),gi()?e():(r(!0),t.current=setTimeout(e,800)))},[e]);(0,Ai.useEffect)(()=>{if("text"!==n)return;const e=setTimeout(()=>{o<Ui.length-1?l(e=>e+1):a("music")},Ui[o].duration);return()=>clearTimeout(e)},[o,n]),(0,Ai.useEffect)(()=>{if("music"!==n)return;const e=setInterval(()=>{c(e=>e<Ii.length-1?e+1:(a("gallery"),e))},3e3);return()=>clearInterval(e)},[n]),(0,Ai.useEffect)(()=>{if("gallery"!==n)return;if(0===Fi.length)return void a("finale");const e=setInterval(()=>{p(e=>e<Fi.length-1?e+1:(a("finale"),e))},2500);return()=>clearInterval(e)},[n]),(0,Ai.useEffect)(()=>{if("finale"!==n)return;const e=setTimeout(h,4e3);return()=>clearTimeout(e)},[n,h]),(0,Ai.useEffect)(()=>{const e=e=>{"Escape"===e.key&&h()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h]);const f=Fi[x],g=Ii[d];return(0,Pi.jsx)(Gi,{$closing:i,children:(0,Pi.jsxs)(Yi,{children:[(0,Pi.jsx)(Ni,{src:"gallery"===n?f?.src:zi,alt:"Stuxia Showcase"},"gallery"===n?`gallery-${x}`:"finale"===n?"finale-bg":"hero-bg"),(0,Pi.jsx)(Wi,{type:"button",onClick:h,children:"Пропустити"}),"text"===n&&Ui[o]?.text&&(0,Pi.jsx)(Ei,{children:Ui[o].text},`caption-${o}`),"music"===n&&g&&(0,Pi.jsxs)(Xi,{children:["Музичний саундтрек: ",(0,Pi.jsx)("span",{children:g.title})," — ",g.author]},`music-${d}`),"gallery"===n&&f&&(0,Pi.jsxs)(Xi,{children:["Зображення на сайті: ",(0,Pi.jsx)("span",{children:f.name})," ",f.author?`— ${f.author}`:""]},`gallery-${x}`),"finale"===n&&(0,Pi.jsxs)(Vi,{children:[(0,Pi.jsx)("h2",{children:"Дякуємо!"}),(0,Pi.jsx)("p",{children:"Гарної погоди та гарного настрою — ваша Стихія"})]})]})})},Oi=e(i()),Ki=["localforage","stykhiia","firebaseLocalStorageDb"],Qi=e=>new Promise(i=>{try{const r=indexedDB.deleteDatabase(e);r.onsuccess=r.onerror=r.onblocked=()=>i()}catch{i()}});async function Ji(e){e&&await e().catch(()=>{}),await Promise.allSettled([Oi.default.clear(),Oi.default.createInstance({name:"stykhiia",storeName:"prefs"}).clear()]);try{localStorage.clear()}catch{}try{sessionStorage.clear()}catch{}if("caches"in window){const e=await caches.keys().catch(()=>[]);await Promise.allSettled(e.map(e=>caches.delete(e)))}if("indexedDB"in window){let e=Ki;if(indexedDB.databases){const i=await indexedDB.databases().catch(()=>[]);e=[...new Set([...e,...i.map(e=>e.name).filter(Boolean)])]}await Promise.race([Promise.allSettled(e.map(Qi)),new Promise(e=>setTimeout(e,1500))])}window.location.reload()}var qi=v`
  0% { opacity: 0; transform: scale(0.96); }
  100% { opacity: 1; transform: scale(1); }
`,Zi=v`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.96); }
`,er=v`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ir=v`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`,rr=v`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,sr=b.div`
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
  ${e=>e.$preview&&y`
    @media (min-width: ${768}px) {
      background: transparent;
      backdrop-filter: none;
      justify-content: flex-end;
      padding-right: 2.5%;
    }
  `}
  animation: ${e=>e.$isClosing?Zi:qi} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`,tr=b.div`
  position: fixed;
  inset: 0;
  z-index: 100002;
`,nr=b.div`
  background: #1c1c1f;
  color: #f3f3f3;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  width: 95%;
  height: 88vh; max-height: 850px;
  transition: width 0.3s ease;
  ${e=>e.$preview&&y`
    @media (min-width: ${768}px) {
      width: max(${640}px, ${e.$previewWidth}%);
    }
  `}
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.2);
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${e=>e.$isClosing?Zi:qi} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`,ar=b.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 7px 10px;
  background: #202024;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  user-select: none;
`,or=b.div`
  display: flex; align-items: center; gap: 12px;
`,lr=b.div`
  display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 4px 12px 4px 6px; border-radius: 20px;
`,dr=b.img`
  width: 30px; height: 30px; border-radius: 50%; object-fit: cover;
`,cr=b.h2`font-size: 16px; font-weight: 600; margin: 0; color: #ffffff;`,xr=b.span`font-size: 11px; color: #a0a0a0;`,pr=b.div`display: flex; align-items: center; gap: 8px;`,hr=b.button`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #e0e0e0;
  padding: 6px 12px; border-radius: 6px;
  font-size: 12px; font-weight: 500; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.12); color: #ffffff; }
`,fr=b.button`
  background: transparent; border: none; color: #f4f2f2;
  width: 32px; height: 32px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 28px; transition: all 0.15s ease;
  &:hover { background: #c42b1c; }
`,gr=b.div`
  display: flex; flex: 1; overflow: hidden;
  @media (max-width: 768px) { flex-direction: column; }
`,ur=b.div`
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
`,jr={pop:{kf:v`0%,100%{transform:scale(1)}40%{transform:scale(1.25)}70%{transform:scale(0.92)}`,dur:"0.5s"},swing:{kf:v`0%,100%{transform:rotate(0)}20%{transform:rotate(-18deg)}45%{transform:rotate(14deg)}70%{transform:rotate(-7deg)}85%{transform:rotate(3deg)}`,dur:"0.8s"},spin:{kf:v`from{transform:rotate(0)}to{transform:rotate(360deg)}`,dur:"0.9s",ease:"cubic-bezier(0.45,0,0.25,1)"},tick:{kf:v`from{transform:rotate(0)}to{transform:rotate(360deg)}`,dur:"1s",ease:"steps(8, end)"},hourglass:{kf:v`0%{transform:rotate(0)}40%,60%{transform:rotate(180deg)}100%{transform:rotate(360deg)}`,dur:"1.1s"},ring:{kf:v`0%,70%,100%{transform:rotate(0)}10%,30%,50%{transform:rotate(-14deg)}20%,40%,60%{transform:rotate(14deg)}`,dur:"0.7s"},drop:{kf:v`0%,100%{transform:translateY(0)}35%{transform:translateY(4px)}55%{transform:translateY(-2px)}75%{transform:translateY(1px)}`,dur:"0.6s"},lift:{kf:v`0%,100%{transform:translateY(0)}35%{transform:translateY(-4px)}60%{transform:translateY(1px)}`,dur:"0.55s"},bounce:{kf:v`0%,100%{transform:translateY(0) scale(1,1)}30%{transform:translateY(-5px) scale(0.94,1.08)}55%{transform:translateY(0) scale(1.1,0.9)}75%{transform:translateY(-2px) scale(1,1)}`,dur:"0.6s"},blink:{kf:v`0%,100%{transform:scaleY(1)}35%{transform:scaleY(0.1)}55%{transform:scaleY(1)}`,dur:"0.5s"},flip:{kf:v`0%,100%{transform:perspective(80px) rotateY(0)}50%{transform:perspective(80px) rotateY(180deg)}`,dur:"0.7s"},flipX:{kf:v`0%,100%{transform:perspective(80px) rotateX(0)}50%{transform:perspective(80px) rotateX(180deg)}`,dur:"0.7s"},tap:{kf:v`0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(1px,2px) scale(0.82)}`,dur:"0.45s"},turn:{kf:v`0%,100%{transform:rotate(0)}35%,65%{transform:rotate(90deg)}`,dur:"0.9s"},wiggle:{kf:v`0%,100%{transform:translateX(0) rotate(0)}25%{transform:translateX(-2px) rotate(-8deg)}75%{transform:translateX(2px) rotate(8deg)}`,dur:"0.5s"},flash:{kf:v`0%,100%{opacity:1;transform:scale(1)}25%{opacity:0.25}50%{opacity:1;transform:scale(1.2)}`,dur:"0.6s"}},mr=new Map([[ie,"tick"],[xe,"tick"],[H,"hourglass"],[ve,"flip"],[Y,"pop"],[G,"ring"],[O,"lift"],[U,"pop"],[Ae,"tap"],[A,"tap"],[Ue,"flipX"],[K,"lift"],[De,"swing"],[se,"turn"],[oe,"drop"],[F,"ring"],[ae,"blink"],[P,"lift"],[W,"swing"],[z,"spin"],[we,"swing"],[Q,"swing"],[he,"drop"],[B,"lift"],[ge,"wiggle"],[I,"lift"],[me,"lift"],[M,"lift"],[$e,"lift"],[q,"ring"],[T,"bounce"],[Fe,"wiggle"],[je,"spin"],[te,"spin"],[ze,"lift"],[pe,"pop"],[X,"pop"],[le,"pop"],[ye,"pop"],[C,"wiggle"],[ue,"lift"],[$,"wiggle"],[Me,"flip"],[V,"pop"],[Se,"spin"],[k,"flash"]]),br=e=>{const i=Array.isArray(e)?e[0]:e;return mr.get(i?.type)||"pop"},yr=e=>{const i=jr[e]||jr.pop;return y`animation: ${i.kf} ${i.dur} ${i.ease||"ease-in-out"};`},vr=b.div`
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 6px; cursor: pointer;
  font-size: 13px; font-weight: ${e=>e.$active?"600":"400"};
  color: ${e=>e.$active?"#ffffff":e.$locked?"#666":"#c5c5c5"};
  background: ${e=>e.$active?"rgba(255,255,255,0.08)":"transparent"};
  position: relative; transition: all 0.15s ease; white-space: nowrap;
  opacity: ${e=>e.$locked?.45:1};
  /* Заблокований пункт лишається «живим» для наведення — щоб показати підказку */
  cursor: ${e=>e.$locked?"not-allowed":"pointer"};

  ${e=>e.$active&&y`
      &::before {
        content: "";
        position: absolute;
        left: 3px; top: 8px; bottom: 8px;
        width: 3px; background: #60cdff; border-radius: 2px;
      }
    `}

  ${e=>!e.$locked&&y`
      &:hover { background: rgba(255,255,255,0.06); color: #ffffff; }
    `}

  @media (max-width: 768px) {
    padding: 7px 10px;
    &::before { display: none; }
  }
`,wr=b.span`
  font-size: 15px; display: flex; align-items: center; justify-content: center;
  color: ${e=>e.$active?"#60cdff":e.$locked?"#555":"#a0a0a0"};

  & > svg { transform-origin: center; }

  ${e=>!e.$locked&&y`
      *:hover > & > svg {
        ${yr(e.$anim)}
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    & > svg { animation: none !important; }
  }
`,kr=b.span`
  font-size: 10px; margin-left: auto; color: #555;
  background: rgba(255,255,255,0.06); padding: 1px 5px; border-radius: 4px;
`,$r=b.div`
  flex: 1; padding: 24px; overflow-y: auto;
  background: #1c1c1f; display: flex; flex-direction: column; gap: 16px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
  @media (max-width: 768px) { padding: 16px; }
`,Sr=b.div`
  position: relative; flex: 1; min-width: 0; min-height: 0;
  display: flex; flex-direction: column;
`,Cr=v`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
`,zr=b(u.div)`
  position: absolute; left: 0; right: 6px; bottom: 0; height: 84px;
  display: flex; align-items: flex-end; justify-content: center; padding-bottom: 14px;
  background: linear-gradient(to bottom, rgba(28,28,31,0), rgba(28,28,31,0.92) 60%, #1c1c1f);
  pointer-events: none; z-index: 2;
`,Tr=b.button`
  pointer-events: auto;
  display: flex; align-items: center; gap: 6px;
  font: inherit; font-size: 12px; font-weight: 600; color: #60cdff;
  background: rgba(96,205,255,0.12); border: 1px solid rgba(96,205,255,0.35);
  border-radius: 999px; padding: 5px 14px; cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
  transition: background 0.15s ease;
  &:hover { background: rgba(96,205,255,0.22); }
  &:focus-visible { outline: 2px solid rgba(96,205,255,0.6); outline-offset: 2px; }
  svg { animation: ${Cr} 1.4s ease-in-out infinite; }
`,Mr=b.h3`
  font-size: 20px; font-weight: 600; color: #ffffff;
  margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
`,Ar=b.p`
  font-size: 13px; color: #a0a0a0; line-height: 1.5;
  margin: -8px 0 10px 0;
`,Dr=b.div`
  display: flex; flex-direction: column; gap: 8px;
  transition: filter 0.2s ease, opacity 0.2s ease;
  ${({$off:e})=>e&&y`filter: grayscale(1); opacity: 0.55;`}
`,Pr={hero:(0,Pi.jsx)(ue,{}),weather:(0,Pi.jsx)($,{}),map:(0,Pi.jsx)(Me,{})},Ur={hero:"#60a5fa",weather:"#7dd3fc",map:"#4ade80"},Ir=b.h4.attrs({"data-scroll-hint":""})`
  font-size: 13px; font-weight: 600; color: #a0a0a0;
  text-transform: uppercase; letter-spacing: 0.04em;
  margin: 14px 0 2px 2px; display: flex; align-items: center; gap: 8px;
  ${Mr} + &, ${Ar} + & { margin-top: 0; }
`,Fr=b.div`display: flex; flex-direction: column; gap: 8px;`,Lr=b.div`
  background: #27272a;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px; padding: 14px 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); }
  @media (max-width: 550px) { flex-direction: column; align-items: flex-start; }
`,Rr=b(Lr)`
  flex-direction: column; align-items: stretch; gap: 12px;
`,Br=b.div`
  display: contents;
  @media (max-width: ${767}px) { display: none; }
`,Gr=b(Rr)`
  @media (min-width: ${768}px) { display: none; }
`,Yr=b.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
  transition: filter 0.4s ease-in-out;
`,Nr=b.div`
  display: flex; align-items: center; gap: 14px; flex: 1;
`,Wr=b.div`
  --icon-color: ${e=>e.$color||"#60cdff"};
  width: 36px; height: 36px; min-width: 36px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: var(--icon-color);
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--icon-color) 22%, transparent),
    color-mix(in srgb, var(--icon-color) 6%, transparent)
  );
  border: 1px solid color-mix(in srgb, var(--icon-color) 35%, transparent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--icon-color) 14%, transparent);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  *:hover > & {
    transform: scale(1.06);
    box-shadow: 0 0 16px color-mix(in srgb, var(--icon-color) 30%, transparent);
  }

  & > svg { transform-origin: center; }

  ${Lr}:hover & > svg,
  *:hover > & > svg {
    ${e=>yr(e.$anim)}
  }

  @media (prefers-reduced-motion: reduce) {
    & > svg { animation: none !important; }
  }
`,Er=({$anim:e,children:i,...r})=>(0,Pi.jsx)(Wr,{$anim:e??br(i),...r,children:i}),_r=b.div`display: flex; flex-direction: column;`,Vr=b.span`font-size: 14px; font-weight: 600; color: #ffffff;`,Xr=b.span`font-size: 12px; color: #a0a0a0; margin-top: 2px;`,Hr=b.div`
  display: flex; align-items: center; gap: 12px;
  @media (max-width: 550px) { width: 100%; justify-content: flex-end; }
`,Or=b.div`
  margin-left: 18px; padding-left: 14px;
  border-left: 2px solid rgba(249,115,22,0.35);
  display: flex; flex-direction: column; gap: 8px;
  opacity: ${e=>e.$disabled?.45:1};
  pointer-events: ${e=>e.$disabled?"none":"auto"};
  filter: ${e=>e.$disabled?"grayscale(1)":"none"};
  transition: opacity 0.2s ease, filter 0.2s ease;
  @media (max-width: 550px) { margin-left: 6px; padding-left: 10px; }
`,Kr=b.span`
  font-size: 13px; font-weight: 600; color: #ffffff;
`,Qr=b.div`
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  &:last-child { border-bottom: none; }
  @media (max-width: 550px) { flex-wrap: wrap; }
`,Jr=b.div`
  display: inline-flex; gap: 2px; padding: 2px; flex-shrink: 0;
  background: #1f1f23; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px;
`,qr=b.button`
  border: none; border-radius: 4px; padding: 4px 10px;
  font-size: 12px; font-weight: 600; font-family: inherit; cursor: pointer;
  background: ${e=>e.$active?"hide"===e.$tone?"rgba(249,115,22,0.2)":"rgba(52,211,153,0.2)":"transparent"};
  color: ${e=>e.$active?"hide"===e.$tone?"#fb923c":"#34d399":"#a0a0a0"};
  transition: background 0.15s ease, color 0.15s ease;
  &:hover { color: #ffffff; }
`,Zr=b.div`display: flex; flex-wrap: wrap; gap: 6px;`,es=b.span`
  display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
  font-size: 12px; word-break: break-all;
  font-family: ${e=>e.$regex?"Consolas, monospace":"inherit"};
  color: ${e=>e.$regex?"#93c5fd":"#fde68a"};
  background: ${e=>e.$regex?"rgba(96,165,250,0.1)":"rgba(250,204,21,0.1)"};
  border: 1px solid ${e=>e.$regex?"rgba(96,165,250,0.3)":"rgba(250,204,21,0.3)"};
  border-radius: 999px; padding: 2px 4px 2px 10px;
  button {
    display: flex; border: none; background: none; color: inherit;
    cursor: pointer; padding: 2px; border-radius: 50%;
    &:hover { background: rgba(255,255,255,0.12); }
  }
`,is=b.span`
  font-size: 12px; margin-top: -4px;
  color: ${e=>"invalid"===e.$tone?"#f87171":"regex"===e.$tone?"#34d399":"#a0a0a0"};
`,rs=b.div`
  font-size: 12px; color: #c8c8cc; line-height: 1.5;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 6px; padding: 8px 12px;
  p { margin: 8px 0 0; }
  code {
    font-family: Consolas, monospace; font-size: 12px; color: #93c5fd;
    background: rgba(96,165,250,0.1); border-radius: 4px; padding: 1px 5px;
    word-break: break-all;
  }
`,ss=b.button`
  display: flex; align-items: center; gap: 6px; width: 100%;
  background: none; border: none; padding: 0; text-align: left;
  font: inherit; font-size: 12px; font-weight: 600; color: #60cdff;
  cursor: pointer; user-select: none;
  &:hover { color: #8fdcff; }
  &:focus-visible { outline: 2px solid rgba(96,205,255,0.5); outline-offset: 2px; border-radius: 4px; }
`,ts=b.span`
  display: flex; transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});
`,ns=b.div`
  display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap;
  code { flex: 1; min-width: 200px; padding: 6px 8px; }
`,as=b.div`
  display: grid; grid-template-columns: max-content 1fr; gap: 6px 10px;
  align-items: baseline; margin-top: 8px;
  @media (max-width: 550px) { grid-template-columns: 1fr; span { margin-bottom: 4px; } }
`,os=b.div`
  display: flex; flex-direction: column; gap: 4px;
  font-size: 12px; color: #a0a0a0; padding: 2px 4px;
  span { display: flex; align-items: center; gap: 6px; }
  svg { flex-shrink: 0; color: #60cdff; }
`,ls=String.raw`/уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\p{L})влад(?:а|и|ою)(?!\p{L})/iu`,ds=[["/ … /","Початок і кінець правила. Без косих рисок запис вважається звичайним словом"],["уряд","Звичайні літери шукаються як є"],["(?:у|ом)","Група варіантів: «у» або «ом». «?:» означає просто групу (нічого не запам'ятовує)"],["?","Після групи чи літери: «може бути, а може й не бути». Тому уряд(?:у|ом)? = уряд, уряду, урядом"],["|","«АБО» між частинами правила: достатньо, щоб знайшлася будь-яка з них"],[String.raw`\p{L}`,"Будь-яка літера будь-якої мови"],[String.raw`(?<!\p{L})`,"Перед цим місцем не має бути літери — слово не може бути кінцем іншого слова (тож «безвладдя» не спрацює)"],[String.raw`(?!\p{L})`,"Після цього місця не має бути літери — слово має тут закінчитись (тож «владика» не спрацює)"],["i","Прапорець після правила: без різниці великі чи малі літери (додається автоматично)"],["u","Прапорець Unicode — потрібен для \\p{L} (додається автоматично)"]],cs=[[".","Будь-який один символ"],["*","Попереднє повторюється 0 і більше разів: футбол\\p{L}* = футбол, футболу, футболіст…"],["+","Попереднє повторюється 1 і більше разів"],[String.raw`\s`,"Пробіл: збірн\\p{L}*\\s+україни = «збірна України», «збірної  України»"],["[аоє]","Один із перелічених символів"],[String.raw`\.`,"Сам символ крапки (без \\ крапка означає «будь-який символ»)"]],xs=b.div`
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; user-select: none;
`,ps=b.span`
  font-size: 13px;
  color: ${e=>e.$checked?"#ffffff":"#a0a0a0"};
  font-weight: 500;
`,hs=b.div`
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
`,fs=b.select`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; cursor: pointer; transition: all 0.15s ease;
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
  option { background: #2b2b30; color: #ffffff; }
`,gs=b.input`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; width: 100%; box-sizing: border-box; transition: all 0.15s ease;
  &::placeholder { color: #7a7a80; }
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
`;b(gs)`
  font-weight: 600;
  ${e=>{const i=e.$textColor||"inherit",r=i.includes("linear"),s=i.includes("270deg");return r?y`
        background: ${i};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${s&&y`background-size: 400% 400%; animation: ${er} 5s ease infinite;`}
      `:y`color: ${i}; -webkit-background-clip: none; -webkit-text-fill-color: currentcolor;`}}
`;var us=b.button`
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
`,js=b.div`
  height: 4px; border-radius: 2px;
  background-color: ${e=>e.$color||"transparent"};
  width: ${e=>e.$width||"0%"};
  transition: width 0.3s ease, background-color 0.3s ease; margin-top: 4px;
`,ms=b.span`
  font-size: 11px; color: ${e=>e.$color||"#a0a0a0"}; font-weight: 500; margin-top: 2px;
`,bs=b.div`
  background: #202024; border-top: 1px solid rgba(255,255,255,0.08);
  padding: 12px 20px; display: flex; align-items: center; justify-content: space-between;
`,ys=b.div`
  display: flex; align-items: center; flex-wrap: wrap; gap: 8px; font-size: 13px; color: #c5c5c5;
`,vs=b.span`color: #60cdff; text-decoration: underline; cursor: pointer;`,ws=v`from { opacity: 0; } to { opacity: 1; }`,ks=v`
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,$s=b.div`
  position: fixed; inset: 0; z-index: 100003;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  animation: ${ws} 0.18s ease both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Ss=b.div`
  width: min(440px, 100%);
  padding: 22px 22px 18px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: #1c1c1f;
  color: #f3f3f3;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.2);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${ks} 0.22s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Cs=b.div`
  display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
`,zs=b.div`
  flex: 0 0 auto;
  display: grid; place-items: center;
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(196,43,28,0.18); color: #ff8a8a; font-size: 19px;
`,Ts=b.h3`
  margin: 0; font-size: 17px; font-weight: 600; line-height: 1.3;
`,Ms=b.ul`
  list-style: none; margin: 0 0 14px; padding: 0;
  display: flex; flex-direction: column; gap: 8px;
  font-size: 13px; color: #d4d4d4; line-height: 1.4;
  li { display: flex; align-items: flex-start; gap: 10px; }
  svg { flex: 0 0 auto; margin-top: 2px; color: #a0a0a0; }
`,As=b.div`
  display: flex; align-items: flex-start; gap: 10px;
  padding: 10px 12px; margin-bottom: 18px;
  border-radius: 8px;
  background: rgba(96,205,255,0.08); border: 1px solid rgba(96,205,255,0.2);
  font-size: 12px; color: #bfe9ff; line-height: 1.45;
  svg { flex: 0 0 auto; margin-top: 1px; color: #60cdff; }
`,Ds=b.div`
  display: flex; justify-content: flex-end; gap: 10px;
`,Ps=b(us)`
  background: #c42b1c; border-color: #c42b1c; color: #ffffff;
  &:hover:not(:disabled) { background: #d83b2b; border-color: #d83b2b; }
  &:focus-visible { outline: 2px solid #ff8a8a; outline-offset: 2px; }
`,Us=({onConfirm:e,onCancel:i,loading:r})=>{const s=(0,Ai.useRef)(null);return(0,Ai.useEffect)(()=>{s.current?.focus();const e=e=>{"Escape"!==e.key||r||i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[i,r]),(0,Pi.jsx)($s,{"data-active-overlay":"",onMouseDown:e=>{e.target!==e.currentTarget||r||i()},children:(0,Pi.jsxs)(Ss,{role:"alertdialog","aria-modal":"true","aria-labelledby":"reset-confirm-title","aria-describedby":"reset-confirm-list",children:[(0,Pi.jsxs)(Cs,{children:[(0,Pi.jsx)(zs,{children:(0,Pi.jsx)(D,{"aria-hidden":"true"})}),(0,Pi.jsx)(Ts,{id:"reset-confirm-title",children:"Скинути сайт до заводських?"})]}),(0,Pi.jsxs)(Ms,{id:"reset-confirm-list",children:[(0,Pi.jsxs)("li",{children:[(0,Pi.jsx)(R,{"aria-hidden":"true"})," Вийти з акаунта на цьому пристрої"]}),(0,Pi.jsxs)("li",{children:[(0,Pi.jsx)(pe,{"aria-hidden":"true"})," Стерти тему, фони, музику, ключ Gemini та всі інші локальні налаштування"]}),(0,Pi.jsxs)("li",{children:[(0,Pi.jsx)(J,{"aria-hidden":"true"})," Очистити кеш і перезавантажити сторінку"]})]}),(0,Pi.jsxs)(As,{children:[(0,Pi.jsx)($,{"aria-hidden":"true"}),(0,Pi.jsx)("span",{children:"Акаунт і хмарні дані не видаляються — після входу вони повернуться."})]}),(0,Pi.jsxs)(Ds,{children:[(0,Pi.jsx)(us,{ref:s,type:"button",onClick:i,disabled:r,children:"Скасувати"}),(0,Pi.jsx)(Ps,{type:"button",onClick:e,disabled:r,children:r?"Скидаємо...":"Скинути"})]})]})})},Is=b.button`
  display: inline-flex; align-items: center; gap: 5px;
  margin-left: 6px; padding: 3px 9px;
  border: 1px solid rgba(255,107,107,0.35); border-radius: 6px;
  background: transparent; color: #ff8a8a;
  font: inherit; font-size: 12px; cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  &:hover:not(:disabled) { background: rgba(196,43,28,0.25); border-color: rgba(255,107,107,0.7); color: #ffffff; }
  &:focus-visible { outline: 2px solid #ff8a8a; outline-offset: 2px; }
  &:disabled { opacity: 0.6; cursor: progress; }
`,Fs=b.div`display: flex; align-items: center; gap: 10px;`,Ls=b.div`
  max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(96,205,255,0.3); border-radius: 2px; }
`,Rs=b.div`
  display: flex; align-items: center; gap: 8px; padding: 6px 8px;
  border-radius: 6px; cursor: pointer;
  background: ${e=>e.$active?"rgba(96,205,255,0.12)":"transparent"};
  border: 1px solid ${e=>e.$active?"rgba(96,205,255,0.3)":"transparent"};
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); }
`,Bs=b.img`
  width: 32px; height: 32px; border-radius: 4px; object-fit: cover; flex-shrink: 0;
`,Gs=b.div`flex: 1; min-width: 0;`,Ys=b.div`
  font-size: 12px; font-weight: 500; color: #ffffff;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,Ns=b.div`font-size: 10px; color: #a0a0a0; margin-top: 1px;`,Ws=b.div`
  width: 2px; background: #60cdff; border-radius: 1px;
  animation: ${ir} ${e=>e.$dur}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
`,Es=b.div`
  display: flex; align-items: flex-end; gap: 1.5px; height: 14px;
`,_s=()=>(0,Pi.jsxs)(Es,{children:[(0,Pi.jsx)(Ws,{$dur:.6,$delay:0}),(0,Pi.jsx)(Ws,{$dur:.8,$delay:.2}),(0,Pi.jsx)(Ws,{$dur:.7,$delay:.1})]}),Vs=b.input`
  width: 100%; accent-color: #60cdff; cursor: pointer;
  &::-webkit-slider-thumb { background: #60cdff; }
`,Xs=b.div`
  background: ${e=>e.$hasFile?"rgba(96,205,255,0.06)":"rgba(255,255,255,0.03)"};
  border: 1px solid ${e=>e.$hasFile?"rgba(96,205,255,0.2)":"rgba(255,255,255,0.06)"};
  border-radius: 8px; padding: 10px 12px;
  display: flex; align-items: center; gap: 10px;
`,Hs=b.div`
  flex: 1; font-size: 12px; color: #c5c5c5;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,Os=b.div`display: flex; gap: 6px; flex-shrink: 0;`,Ks=b.button`
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #ffffff; width: 28px; height: 28px; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 13px; transition: all 0.15s ease;
  &:hover { background: ${e=>e.$danger?"rgba(196,43,28,0.3)":"#60cdff"}; color: ${e=>e.$danger?"#ff6b6b":"#000"}; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`,Qs=b.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px;
`,Js=b.button`
  background: ${e=>e.$active?"rgba(96,205,255,0.15)":"rgba(255,255,255,0.04)"};
  color: ${e=>e.$active?"#60cdff":"#e0e0e0"};
  border: 1px solid ${e=>e.$active?"#60cdff":"rgba(255,255,255,0.1)"};
  border-radius: 6px; padding: 8px 10px; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.15s ease; text-align: center;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  &:hover { background: rgba(96,205,255,0.1); border-color: rgba(96,205,255,0.3); color: #ffffff; }
`,qs=b.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 6px;
`,Zs=b.div`
  display: flex; align-items: center; gap: 4px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(122,252,255,0.2);
  border-radius: 6px; padding: 4px 6px; animation: ${rr} 0.2s ease-out forwards;
`,et=({onClose:e,user:i,onUpdate:g,weatherCardLayout:m=[],isDarkMode:b=!1,onToggleTheme:y=()=>{},onUpdateLayout:v,showUpdateTimer:w,setShowUpdateTimer:$,siteSections:G=[],moveSiteSection:ue=()=>{},sectionThemes:Me={},hiddenSections:ei=[],onToggleSectionVisibility:si=()=>{},onToggleSectionTheme:gi=()=>{},onResetSectionThemes:ui=()=>{},loadingStrategy:zi="eager",onSetLoadingStrategy:Ui=()=>{},isStickyBgMode:Ii=!1,onToggleStickyBg:Fi=()=>{},bgMusicEnabled:Li,setBgMusicEnabled:Ri,bgMusicSource:Bi,setBgMusicSource:Gi,bgMusicVolume:Yi,setBgMusicVolume:Ni,bgMusicSpeed:Wi=1,setBgMusicSpeed:Ei=()=>{},bgMusicMode:_i,setBgMusicMode:Vi,bgMusicShuffle:Xi,setBgMusicShuffle:Ki,customBgTracks:Qi,setCustomBgTracks:qi,libraryBgSettings:Zi={},setLibraryBgSettings:er=()=>{},activeBgTrackId:ir,setActiveBgTrackId:rr=()=>{},onResetBgPosition:jr=()=>{},onSkipBgTrack:mr=()=>{},sfxVolume:yr=.2,setSfxVolume:Cr=()=>{},bgAudioRef:Wr,bgAudioRef2:ws,onLogout:ks=()=>{}})=>{const $s=!i;Qe();const Ss=Ke(),[Cs,zs]=fi(),[Ts,Ms]=(0,Ai.useState)("personalization"),[As,Ds]=(0,Ai.useState)(!1),[Ps,Ws]=(0,Ai.useState)(!1),[Es,et]=(0,Ai.useState)(!1),{isDecoratorMode:it,setIsDecoratorMode:rt,changeLog:st=[],undoChange:tt=()=>{},resetAll:nt=()=>{},isPersistent:at=!1,setIsPersistent:ot=()=>{},activePreset:lt=0,switchPreset:dt=()=>{}}=vi(),{visualConfig:ct,setVisualConfig:xt,resetFilters:pt,customPresets:ht=[],saveCustomPreset:ft,deleteCustomPreset:gt,updateCustomPresetName:ut}=ai(i),jt="combo"===ct.filterType?ct.combo||[]:ci.some(e=>e.id===ct.filterType)?[ct.filterType]:[],[mt,bt]=(0,Ai.useState)(""),[yt,vt]=(0,Ai.useState)(()=>{if(i?.avatar&&"string"==typeof i.avatar&&i.avatar.startsWith("http"))return i.avatar;if(i?.photoURL&&"string"==typeof i.photoURL&&i.photoURL.startsWith("http"))return i.photoURL;try{return s("saved_google_avatar")||null}catch{return null}}),wt=Ti(),kt=(0,Ai.useRef)(null),[$t,St]=(0,Ai.useState)(null),Ct=e=>{const i=e.getBoundingClientRect().bottom-40;return[...e.querySelectorAll("[data-scroll-hint]")].find(e=>e.getBoundingClientRect().top>i)};(0,Ai.useEffect)(()=>{const e=kt.current;if(!e)return;let i=0;const r=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(e.scrollHeight-e.clientHeight-e.scrollTop<=24)return void St(null);const i=Ct(e)?.textContent?.trim()||null;St(e=>e&&e.label===i?e:{label:i})})};r(),e.addEventListener("scroll",r,{passive:!0});const s=new ResizeObserver(r);return s.observe(e),[...e.children].forEach(e=>s.observe(e)),()=>{cancelAnimationFrame(i),e.removeEventListener("scroll",r),s.disconnect()}},[Ts]);const[zt,Tt]=(0,Ai.useState)(()=>{try{return"false"!==s("ad_antiheader_enabled")}catch{return!0}}),[Mt,At]=(0,Ai.useState)(()=>{try{return"true"===s("site_context_menu_enabled")}catch{return!1}}),[Dt,Pt]=(0,Ai.useState)(()=>{try{return"false"!==s("settings_filters_preview")}catch{return!0}}),[Ut,It]=(0,Ai.useState)(()=>{try{const e=Number(s("settings_filters_preview_percent"));return e>=64&&e<=100?e:64}catch{return 64}}),[Ft,Lt]=(0,Ai.useState)(Be),Rt=()=>{i?.uid&&i?.syncMutedNews&&ii(i.uid)};(0,Ai.useEffect)(()=>()=>ri(),[]);const[Bt,Gt]=Le(),[Yt,Nt]=(0,Ai.useState)(We),[Wt,Et]=(0,Ai.useState)(Ne),[_t,Vt]=(0,Ai.useState)(Re),[Xt,Ht]=(0,Ai.useState)(""),[Ot,Kt]=(0,Ai.useState)(!1),Qt=Xt.trim()?Xe(Xt):null,Jt=async(e,i)=>{if(Wt[e]===i)return;if("show"===i){const i=Ve.find(i=>i.key===e)?.label||e;if(!("gambling"===e?await Bt(21,"Новини про казино та ставки можна показувати лише з 21 року."):await Bt(18,`Тема «${i}» може містити неприємний або дорослий контент. Показувати її можна лише з 18 років.`)))return}const r={...Wt,[e]:i};Et(r),Ge(r),Rt()};(0,Ai.useEffect)(()=>{if(i?.avatar&&"string"==typeof i.avatar&&i.avatar.startsWith("http")&&!i.avatar.startsWith("data:")){vt(i.avatar);try{r("saved_google_avatar",i.avatar)}catch{}}},[i]);const[qt,Zt]=(0,Ai.useState)(i?.email||i?.account||""),[en,rn]=(0,Ai.useState)(""),[sn,tn]=(0,Ai.useState)(qe.currentUser);(0,Ai.useEffect)(()=>h(qe,tn),[]);const nn=(sn?.providerData||[]).map(e=>e.providerId),an=nn.includes("google.com"),on=nn.includes("password"),ln=Boolean(sn),dn=sn?.providerData?.find(e=>"google.com"===e.providerId)?.email||i?.email||i?.account,cn=an&&!on,[xn,pn]=(0,Ai.useState)(!1),[hn,fn]=(0,Ai.useState)(""),[gn,un]=(0,Ai.useState)(!1),[jn,mn]=(0,Ai.useState)(!1),[bn,yn]=(0,Ai.useState)(!1),[vn,wn]=(0,Ai.useState)(!1),kn=(0,Ai.useCallback)(()=>wn(!1),[]),$n=["settingsSyncCount","settingsSyncAt","cardsSyncCount","cardsSyncAt","muteSyncCount","muteSyncAt","cardAdditionsCount","cardAdditionsAt","reportCount","reportAt"],[Sn,Cn]=(0,Ai.useState)(()=>He().x),[zn,Tn]=(0,Ai.useState)(()=>He().y);(0,Ai.useEffect)(()=>{Oe(Sn,zn)},[Sn,zn]);const[Mn,An]=(0,Ai.useState)({name:i?.firstName||"",day:"",month:"",year:"",oldPassword:"",newPassword:"",confirmPassword:"",textColor:i?.textColor||"grey",borderColor:i?.borderColor||"grey",fontFamily:i?.fontFamily||"",showSeconds:!1!==i?.showSeconds,dateDisplayMode:i?.dateDisplayMode||"both",hour12:!0===i?.hour12,voiceActingMode:i?.voiceActingMode||"malyatko",showUpdateTimer:!1!==w,newsAutoScroll:i?.newsAutoScroll||!1,syncMutedNews:i?.syncMutedNews||!1,gestureSensitivity:i?.gestureSensitivity??1.5,fastClicks:i?.fastClicks??!1}),[Dn,Pn]=(0,Ai.useState)(i?.newsLayout||[{key:"image",visible:!0},{key:"title",visible:!0},{key:"description",visible:!0}]),Un=(0,Ai.useMemo)(()=>({...i}),[i]);(0,Ai.useEffect)(()=>{if(!i)return;let e="",r="",s="";i.birthDate&&(i.birthDate.includes("-")?[e,r,s]=i.birthDate.split("-"):i.birthDate.includes(".")&&([s,r,e]=i.birthDate.split("."))),An({name:i?.firstName||"",day:s?String(parseInt(s)):"",month:r?String(parseInt(r)):"",year:e?String(parseInt(e)):"",oldPassword:"",newPassword:"",confirmPassword:"",textColor:i?.textColor||"grey",borderColor:i?.borderColor||"grey",fontFamily:i?.fontFamily||"",showSeconds:!1!==i?.showSeconds,dateDisplayMode:i?.dateDisplayMode||"both",hour12:!0===i?.hour12,voiceActingMode:i?.voiceActingMode||"malyatko",showUpdateTimer:!1!==w,newsAutoScroll:i?.newsAutoScroll||!1,syncMutedNews:i?.syncMutedNews||!1,gestureSensitivity:i?.gestureSensitivity??1.5,fastClicks:i?.fastClicks??!1})},[i,w]);const In=()=>yt||"data:image/webp;base64,UklGRmQDAABXRUJQVlA4IFgDAABwHwCdASqjALEAP/3+/3+/v7+7r1Qcg/A/iUAaGiVlC+AXVedzUkzfGuGTPatrbUysraYc4VliuJZmUI5JVz93KZTjc8EyVS4dUyEH/LU33vHmBHoTONHjc7AaVV6gqtng0G0ByK5OfwXDnZeSMPiz9rUkUuV4oq6ahYASfplzw/F6h3HM7rYFPqg7aNSsoUUfFV/XhGaTaF9gy4b1PJy3b0HjLMY69nrdn2fcYvKZObrX45jEML7Y9WDaVQCYn5KUTjA9wnHQ0z4LVkWZuF9lOSquv7MHagOnHfkN5H9JSse7huV5YCUot3dcn2Z92fYWGvYrg44Tz8h/T+K7MhNdLqH1QAD3j5xF9UNzRPbGb9Jl0gtSDWSnF3rbVetRYpBw29Jk/X4PnchrQXKlZj0sNxyrdf5oftA/HX5ku7tqnxrVIuDN4NVyT20od+w6Vme3gw7gRRV04PToBtqWovQm2oI9J+MRBYh0pRk8B0+SG4+3KjIvFZxSyQkX64ZWyhQBQwO1dVAaeMhbMNcvbRCOXIXioNpuKZOcgDA6645KBTCgp7vpwSUXTlE1p9YdkH+dnfizSjjKMPxtaFTg/wX788y1IDKrR5dcQIDFgP566DOzSKRGR/irHCnmkzaJtcXG1Mlml50yO09qUcyHhGwT8uXqoMNCGBS39tFrGiX3k57F25LzRgfvfDorDLjIAR5nTIcGiXvKB42bMBVmf502lv6cPWwNvxoUpeFQWKDFcPrCfAVJy0QHzDnig+k8BzcZO4WMytAvO5Q+mFAMACfJvQxua4a+w6gLw6x13igh3FPnhkcbBbCPI3vp773AIPJlfA16Q2Y2P4ZWhxAvkh4nYOYQ16+fUu2xdtJBeq7+zuMckFAISbesFSMUHIdJfvWUJfiVrG/d15AMUCtosswLgNcC3SbtOKE8X16ph9c1kVs9OieJShpwDdU6EX78PSLWEsQPFsmNtoD3kf8YXIxkb8aVEZVnodARELQ1zwgikM+0vETUuH7lG73McIp22jxoSXaudqJUPsbK7688jYrcWHOLh53b4GjKb7Z+9HtzDwV3vYKEziXxGGp0sV25YpyCgJ7im45f/7Ki+YGbQdYKMAC0YuksM5TD0xW0z0s7Gm0uG5ewAAAA",Fn=e=>{const r={...Mn,...e};if(An(r),e.hasOwnProperty("showUpdateTimer")&&$(e.showUpdateTimer),!i)return;const s=In();g({...i,firstName:r.name,avatar:s,birthDate:`${r.year}-${r.month.toString().padStart(2,"0")}-${r.day.toString().padStart(2,"0")}`,textColor:r.textColor,borderColor:r.borderColor,fontFamily:r.fontFamily,showSeconds:r.showSeconds,dateDisplayMode:r.dateDisplayMode,hour12:r.hour12,voiceActingMode:r.voiceActingMode,showUpdateTimer:r.showUpdateTimer,newsLayout:e.newsLayout||Dn,newsAutoScroll:e.newsAutoScroll??r.newsAutoScroll,syncMutedNews:e.syncMutedNews??r.syncMutedNews,gestureSensitivity:e.gestureSensitivity??r.gestureSensitivity,fastClicks:e.fastClicks??r.fastClicks})},Ln=()=>{Ds(!0),setTimeout(()=>e(),250)},Rn=()=>{i&&g(Un),Ln()};Array.from({length:31},(e,i)=>i+1);const Bn=(new Date).getFullYear();Array.from({length:Bn-1909+1},(e,i)=>Bn-i);const Gn=(0,Ai.useMemo)(()=>{if(!Mn.day||!Mn.month||!Mn.year)return!1;const e=new Date(Mn.year,Mn.month-1,Mn.day);return e.getFullYear()!==parseInt(Mn.year)||e.getMonth()!==parseInt(Mn.month)-1||e.getDate()!==parseInt(Mn.day)},[Mn.day,Mn.month,Mn.year]);(0,Ai.useMemo)(()=>{const e=Mn.day?String(Mn.day).padStart(2,"0"):"",i=Mn.month?String(Mn.month).padStart(2,"0"):"",r=Mn.year?String(Mn.year):"";return e&&i&&r&&!Gn?`${e}.${i}.${r}`:""},[Mn.day,Mn.month,Mn.year,Gn]);((e,i,r)=>{if(!e||!i||!r)return null;const s=new Date,t=new Date(r,i-1,e);if(isNaN(t.getTime()))return null;let n=s.getFullYear()-t.getFullYear();const a=s.getMonth()-t.getMonth();(a<0||0===a&&s.getDate()<t.getDate())&&n--})(Mn.day,Mn.month,Mn.year);const Yn=(e=>{if(!e)return{width:"0%",color:"transparent",label:""};let i=0;return e.length>=6&&i++,e.length>=8&&i++,(/[A-Z]/.test(e)||/[a-z]/.test(e))&&i++,/\d/.test(e)&&i++,/[^A-Za-z0-9]/.test(e)&&i++,i<=2?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:i<=4?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(Mn.newPassword),Nn=(0,Ai.useRef)(null),Wn=(0,Ai.useRef)(null),[En,_n]=(0,Ai.useState)(""),[Vn,Xn]=(0,Ai.useState)("library"),[Hn,On]=(0,Ai.useState)(0),[Kn,Qn]=(0,Ai.useState)(0),[Jn,qn]=(0,Ai.useState)({}),[Zn,ea]=(0,Ai.useState)(()=>wi()),[ia,ra]=(0,Ai.useState)(()=>{try{return JSON.parse(s("bg_music_downloaded_tracks")||"[]")}catch{return[]}});(0,Ai.useEffect)(()=>{r("bg_music_downloaded_tracks",JSON.stringify(ia)),bi(Zn)},[ia,Zn]),(0,Ai.useEffect)(()=>{let e;const i=()=>{const r=Wr?.current,s=ws?.current;let t=r;r&&s&&!s.paused&&s.volume>=r.volume&&(t=s),t&&(On(t.currentTime||0),Qn(t.duration||0)),e=requestAnimationFrame(i)};return i(),()=>cancelAnimationFrame(e)},[Wr,ws]);const sa=(e,i)=>{ra(r=>r.some(r=>String(r.id)===String(e)&&r.file===i)?r:[...r,{id:e,file:i,name:""}]),ea(i=>i.filter(i=>String(i)!==String(e)))},ta=(0,Ai.useMemo)(()=>(Qi||[]).filter(e=>e?.file),[Qi]),na=(0,Ai.useMemo)(()=>{let e=ji.map(e=>{const i=Si[e.audio],r=(e=>{const i=yi(e.file),r=i||ia.some(i=>i.file===e.file&&String(i.id)===String(e.id)),s=Zn.includes(String(e.id));return{isBase:i,downloaded:r&&!s,softDeleted:s,available:i||r&&!s}})({id:e.id,file:i,text:e.text,author:e.author});return{id:e.id,name:e.text?`${e.text} — ${e.author}`:e.author,file:i,image:Si[e.image],...r}});En&&(e=e.filter(e=>e.name.toLowerCase().includes(En.toLowerCase())));const i=e.filter(e=>!mi.some(i=>i.id===e.id)),r=ta.map((e,i)=>({id:`custom-${i}`,customIdx:i,name:e.name,file:e.file,image:null,isCustom:!0,available:!0,hidden:!1===e.enabled})).filter(e=>!En||e.name.toLowerCase().includes(En.toLowerCase())),s=e=>({...e,hidden:!1===Zi[e.id]?.enabled});return[...mi.map(e=>s({id:e.id,name:e.name,file:e.file,image:null,isBase:!0,downloaded:!0,softDeleted:!1,available:!0})),...r,...i.map(s)].slice(0,28+r.length)},[En,ia,Zn,Bi,ta,Zi]),aa=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,oa=[{key:"personalization",icon:(0,Pi.jsx)(C,{}),label:"Персоналізація"},{key:"security",icon:(0,Pi.jsx)(V,{}),label:"Безпека",locked:$s},{key:"siteSections",icon:(0,Pi.jsx)(Se,{}),label:"Секції та новини"},{key:"modes",icon:(0,Pi.jsx)(k,{}),label:"Режими та застосунки"},{key:"filters",icon:(0,Pi.jsx)(ae,{}),label:"Візуальні фільтри"},{key:"bgMusic",icon:(0,Pi.jsx)(T,{}),label:"Фонова музика"}],la="filters"===Ts&&Dt;return(0,Di.createPortal)((0,Pi.jsxs)(Pi.Fragment,{children:[Es&&(0,Pi.jsx)(tr,{children:(0,Pi.jsx)(Hi,{onClose:()=>et(!1)})}),(0,Pi.jsx)(sr,{$isClosing:As,$preview:la,onClick:Ln,children:(0,Pi.jsxs)(nr,{$isClosing:As,$preview:la,$previewWidth:Ut,onClick:e=>e.stopPropagation(),children:[(0,Pi.jsxs)(ar,{children:[(0,Pi.jsx)(or,{children:(0,Pi.jsxs)(lr,{children:[!$s&&(0,Pi.jsx)(dr,{src:In(),alt:"User avatar"}),(0,Pi.jsx)("div",{style:{fontSize:"20px",opacity:.5,display:$s?"flex":"none"},children:(0,Pi.jsx)(R,{})}),(0,Pi.jsxs)("div",{children:[(0,Pi.jsx)(cr,{children:"Параметри"}),(0,Pi.jsx)(xr,{children:$s?"Гість • Увійдіть для повного доступу":i?.email||i?.account||"Обліковий запис"})]})]})}),(0,Pi.jsxs)(pr,{children:[(0,Pi.jsxs)(hr,{onClick:()=>et(!0),children:[(0,Pi.jsx)(Ce,{})," Титри"]}),(0,Pi.jsx)(fr,{onClick:Rn,children:(0,Pi.jsx)(E,{})})]})]}),(0,Pi.jsxs)(gr,{children:[(0,Pi.jsx)(ur,{children:oa.map(({key:e,icon:i,label:r,locked:s})=>{const t=(0,Pi.jsxs)(vr,{$active:Ts===e,$locked:!!s,"aria-disabled":!!s||void 0,onClick:()=>!s&&Ms(e),children:[(0,Pi.jsx)(wr,{$active:Ts===e,$locked:!!s,$anim:br(i),children:i}),r,s&&(0,Pi.jsx)(kr,{children:"🔒"})]},e);return s?(0,Pi.jsx)(ti,{content:"Необхідна реєстрація",placement:"right",wrapperStyle:{display:"block",flexShrink:0},children:t},e):t})}),(0,Pi.jsxs)(Sr,{children:[(0,Pi.jsxs)($r,{ref:kt,children:["security"===Ts&&!$s&&(0,Pi.jsxs)(Fr,{children:[(0,Pi.jsxs)(Mr,{children:[(0,Pi.jsx)(V,{})," Безпека та переприв'язка акаунту"]}),(0,Pi.jsx)(Ar,{children:"Прив'язка Google-акаунту, зміна пошти та пароля для входу в профіль"}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#60cdff",children:(0,Pi.jsx)(De,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Керування прив'язками профілю"}),(0,Pi.jsx)(Xr,{children:"Зміна прив'язаного Google-акаунту або пошти"})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"4px"},children:[(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"#ffffff"},children:"Google Акаунт"}),(0,Pi.jsx)("span",{style:{fontSize:"11px",color:an?"#60cdff":"#a0a0a0"},children:ln?an?`✓ Прив'язано (${dn||"Google"})`:"Не прив'язано":"Хмарний акаунт неактивний — увійдіть знову"})]}),(0,Pi.jsxs)("div",{style:{display:"flex",gap:"6px"},children:[(0,Pi.jsx)(us,{type:"button",onClick:async()=>{const e=qe.currentUser;if(e)try{const s=new c;let t;if(s.setCustomParameters({prompt:"select_account"}),an&&nn.length>1){if(!window.confirm("Замінити прив'язаний Google-акаунт на інший?"))return;await d(e,"google.com"),t=await x(e,s)}else t=an?await l(e,s):await x(e,s);const n=t.user,a=n.photoURL||n.providerData?.[0]?.photoURL;if(a){vt(a);try{r("saved_google_avatar",a)}catch{}}g({...i,email:n.email||i?.email,avatar:a||i?.avatar}),alert(`✅ Google акаунт підтверджено: ${n.email}`)}catch(s){"auth/cancelled-popup-request"===s.code||"auth/popup-closed-by-user"===s.code||("auth/user-mismatch"===s.code?alert("⚠️ Цей Google акаунт не збігається з поточним профілем! Якщо Google — єдиний спосіб входу, його не можна замінити."):"auth/credential-already-in-use"===s.code||"auth/email-already-in-use"===s.code?alert("⚠️ Цей Google акаунт уже прив'язаний до іншого профілю."):alert("Помилка: "+(s.message||s.code)))}else alert("Хмарний акаунт неактивний. Вийдіть і увійдіть знову, щоб активувати прив'язки.")},disabled:!ln,children:an?nn.length>1?"Переприв'язати Google":"Підтвердити Google":"Прив'язати Google"}),an&&nn.length>1&&(0,Pi.jsx)(us,{type:"button",$danger:!0,onClick:async()=>{if(qe.currentUser)if(nn.length<=1)alert("Google — єдиний спосіб входу в цей профіль, відв'язати його не можна, інакше ви втратите доступ.");else if(window.confirm("Ви дійсно бажаєте відв'язати Google від цього профілю?\n\nПісля відв'язки для входу буде потрібен пароль."))try{await d(qe.currentUser,"google.com"),tn(qe.currentUser),alert("✅ Google акаунт відв'язано успішно.")}catch(e){"auth/no-such-provider"===e.code?alert("Google вже не прив'язано до цього профілю."):alert("Помилка відв'язування: "+(e.message||e.code))}},children:"Відв'язати"})]})]}),on?(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"10px"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"#ffffff"},children:"Зміна прив'язаної пошти"}),(0,Pi.jsx)("span",{style:{fontSize:"11px",color:"#888"},children:"На нову пошту буде надіслано лист підтвердження. Зміна набере чинності після кліку на посилання у листі."}),(0,Pi.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,Pi.jsx)(gs,{type:"email",placeholder:"Введіть нову пошту...",value:qt,onChange:e=>{Zt(e.target.value),rn("")},disabled:xn}),(0,Pi.jsx)(us,{type:"button",$primary:!0,onClick:async()=>{const e=qt.trim();if(!e||!e.includes("@")||!e.includes("."))return void rn("❌ Введіть коректну електронну пошту!");if(e===(i?.email||i?.account))return void rn("⚠️ Це вже поточна пошта профілю.");const r=qe.currentUser;if(r)if(on){pn(!0),rn("⏳ Надсилаємо лист...");try{await a(r,e),g({...i,pendingEmail:e});try{const i=await Oi.default.getItem("registered_user");i&&await Oi.default.setItem("registered_user",{...i,pendingEmail:e})}catch{}rn(`✅ Лист підтвердження надіслано на ${e}. Перевірте вхідні (та спам). Після кліку на посилання входьте з новою поштою.`)}catch(s){"auth/requires-recent-login"===s.code?rn("⚠️ Потрібна повторна авторизація — вийдіть та увійдіть знову, потім спробуйте ще раз."):"auth/email-already-in-use"===s.code?rn("❌ Ця пошта вже використовується іншим акаунтом!"):"auth/invalid-email"===s.code?rn("❌ Неправильний формат електронної пошти!"):rn(`❌ Не вдалося надіслати лист: ${s.code||s.message}`)}finally{pn(!1)}}else rn("⚠️ Пошта цього профілю керується Google і не може бути змінена тут.");else rn("⚠️ Хмарний акаунт неактивний — вийдіть та увійдіть знову, потім спробуйте ще раз.")},style:{whiteSpace:"nowrap"},disabled:xn,children:xn?"⏳...":"Надіслати лист"})]}),en&&(0,Pi.jsx)("span",{style:{fontSize:"11px",color:en.startsWith("✅")?"#4caf50":en.startsWith("❌")?"#f44336":en.startsWith("⚠️")?"#ffb300":en.startsWith("📝")?"#60cdff":"#a0a0a0",lineHeight:"1.5"},children:en})]}):(0,Pi.jsx)("div",{style:{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"10px",fontSize:"11px",color:"#888"},children:ln?"Пошта цього профілю керується Google і змінюється в налаштуваннях Google-акаунту.":"Щоб змінити пошту, вийдіть та увійдіть знову."})]})]}),!cn&&(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#f87171",children:(0,Pi.jsx)(se,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Зміна пароля"}),(0,Pi.jsx)(Xr,{children:"Введіть новий пароль для профілю"})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"4px"},children:[(0,Pi.jsx)(gs,{type:"password",placeholder:"Новий пароль",value:Mn.newPassword,onChange:e=>An({...Mn,newPassword:e.target.value})}),Mn.newPassword&&(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Pi.jsx)(js,{$width:Yn.width,$color:Yn.color}),(0,Pi.jsxs)(ms,{$color:Yn.color,children:["Надійність: ",Yn.label]})]}),(0,Pi.jsx)(gs,{type:"password",placeholder:"Підтвердіть новий пароль",value:Mn.confirmPassword,onChange:e=>An({...Mn,confirmPassword:e.target.value})})]})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#ff6b6b",children:(0,Pi.jsx)(J,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Видалити акаунт"}),(0,Pi.jsx)(Xr,{children:"Назавжди видаляє вхід, хмарні налаштування, картки погоди та фільтри новин. Скасувати не можна."})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"4px"},children:[(0,Pi.jsxs)("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:"#c5c5c5",cursor:"pointer"},children:[(0,Pi.jsx)("input",{type:"checkbox",checked:jn,onChange:e=>mn(e.target.checked),disabled:gn}),"Також очистити цей пристрій (тема, фони, музика, ключ Gemini)"]}),(0,Pi.jsx)("div",{children:(0,Pi.jsx)(us,{type:"button",$danger:!0,onClick:async()=>{const e=qe.currentUser;if(!e)return void fn("⚠️ Хмарний акаунт неактивний — вийдіть та увійдіть знову, потім спробуйте ще раз.");const i=window.prompt("Видалення акаунта не можна скасувати: зникнуть вхід, хмарні налаштування, картки погоди та фільтри новин.\n\nЩоб підтвердити, введіть слово ВИДАЛИТИ");if(null!==i)if("ВИДАЛИТИ"===i.trim().toUpperCase()){un(!0);try{if(fn("⏳ Підтвердіть, що це ви..."),nn.includes("google.com")){const i=new c;i.setCustomParameters({prompt:"select_account"}),await l(e,i)}else if(on){const i=window.prompt("Введіть поточний пароль від акаунта:");if(!i)return void fn("");await n(e,f.credential(e.email,i))}fn("⏳ Видаляємо дані...");const{db:i,doc:r,getDoc:s,updateDoc:a,deleteDoc:d,deleteField:x}=await Ze(),p=r(i,"config",e.uid),h=await s(p);if(h.exists()){const e=Object.fromEntries(Object.keys(h.data()).filter(e=>!$n.includes(e)).map(e=>[e,x()]));Object.keys(e).length&&await a(p,e)}await d(r(i,"users",e.uid)).catch(()=>{}),await o(e),await Promise.all(["registered_user","currentAvatar"].map(e=>Oi.default.removeItem(e).catch(()=>{})));try{t("saved_google_avatar")}catch{}if(jn)return alert("✅ Акаунт видалено. Зараз очистимо цей пристрій і перезавантажимо сторінку."),void(await Ji());alert("✅ Акаунт і пов'язані з ним дані видалено."),ks()}catch(r){const e=r?.code||"";fn("auth/popup-closed-by-user"===e||"auth/cancelled-popup-request"===e?"":"auth/wrong-password"===e||"auth/invalid-credential"===e?"❌ Неправильний пароль — акаунт не видалено.":"auth/user-mismatch"===e?"⚠️ Оберіть той самий Google-акаунт, з яким ви увійшли.":"auth/requires-recent-login"===e?"⚠️ Потрібна повторна авторизація — вийдіть та увійдіть знову, потім спробуйте ще раз.":"permission-denied"===e?"❌ Сервер не дозволив стерти дані — акаунт не видалено. Спробуйте пізніше.":`❌ Не вдалося видалити акаунт: ${e||r?.message}`)}finally{un(!1)}}else fn("❌ Слово введено неправильно — акаунт не видалено.")},disabled:gn||!ln,children:gn?"⏳...":"Видалити акаунт"})}),!ln&&(0,Pi.jsx)("span",{style:{fontSize:"11px",color:"#888"},children:"Хмарний акаунт неактивний — вийдіть та увійдіть знову."}),hn&&(0,Pi.jsx)("span",{style:{fontSize:"11px",color:hn.startsWith("❌")?"#f44336":hn.startsWith("⚠️")?"#ffb300":"#a0a0a0",lineHeight:"1.5"},children:hn})]})]})]}),"personalization"===Ts&&(0,Pi.jsxs)(Fr,{children:[(0,Pi.jsxs)(Mr,{children:[(0,Pi.jsx)(C,{})," Персоналізація та інтерфейс"]}),(0,Pi.jsx)(Ar,{children:"Формат часу й дати, анімації, підказки, шрифт, жести та дзеркальність сайту"}),(0,Pi.jsxs)(Ir,{children:[(0,Pi.jsx)(_,{})," Час та дата"]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#38bdf8",children:(0,Pi.jsx)(ie,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Відображення секунд"}),(0,Pi.jsx)(Xr,{children:"Показувати секунди (17:23:17)"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>Fn({showSeconds:!Mn.showSeconds}),children:[(0,Pi.jsx)(ps,{$checked:Mn.showSeconds,children:Mn.showSeconds?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Mn.showSeconds})]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#22d3ee",children:(0,Pi.jsx)(xe,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Формат часу"}),(0,Pi.jsx)(Xr,{children:"24-годинний або 12-годинний (AM/PM)"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(fs,{value:Mn.hour12?"12":"24",onChange:e=>Fn({hour12:"12"===e.target.value}),children:[(0,Pi.jsx)("option",{value:"24",children:"24-годинний"}),(0,Pi.jsx)("option",{value:"12",children:"12-годинний (AM/PM)"})]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#34d399",children:(0,Pi.jsx)(ve,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Режим відображення"}),(0,Pi.jsx)(Xr,{children:"Час, дата або обидва разом"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(fs,{value:Mn.dateDisplayMode,onChange:e=>Fn({dateDisplayMode:e.target.value}),children:[(0,Pi.jsx)("option",{value:"both",children:"Час та Дата разом"}),(0,Pi.jsx)("option",{value:"time",children:"Тільки Час"}),(0,Pi.jsx)("option",{value:"date",children:"Тільки Дата"})]})})]}),(0,Pi.jsxs)(Ir,{children:[(0,Pi.jsx)(C,{})," Інтерфейс"]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fbbf24",children:(0,Pi.jsx)(Y,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Вимкнути анімації"}),(0,Pi.jsx)(Xr,{children:wt?"Анімації та плавні переходи вимкнено — сайт легший для слабких пристроїв":"Іконки, переходи й ефекти анімовані"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>Ci(!wt),children:[(0,Pi.jsx)(ps,{$checked:wt,children:wt?"Вимкнено":"Увімкнено"}),(0,Pi.jsx)(hs,{$checked:wt})]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#a3e635",children:(0,Pi.jsx)(O,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Контекстне меню Стихії"}),(0,Pi.jsx)(Xr,{children:Mt?"Права кнопка миші відкриває меню Стихії (копіювання, фото, режим читання)":"Права кнопка миші відкриває звичайне меню браузера"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>{const e=!Mt;At(e);try{r("site_context_menu_enabled",e?"true":"false")}catch{}},children:[(0,Pi.jsx)(ps,{$checked:Mt,children:Mt?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Mt})]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#2dd4bf",children:(0,Pi.jsx)(H,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Таймер оновлення погоди"}),(0,Pi.jsx)(Xr,{children:"Показувати відлік до наступного оновлення даних"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>Fn({showUpdateTimer:!Mn.showUpdateTimer}),children:[(0,Pi.jsx)(ps,{$checked:Mn.showUpdateTimer,children:Mn.showUpdateTimer?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Mn.showUpdateTimer})]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#f472b6",children:(0,Pi.jsx)(U,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Власний шрифт"}),(0,Pi.jsx)(Xr,{children:"Назва шрифту Google Fonts (напр. Roboto)"})]})]}),(0,Pi.jsx)(Hr,{style:{minWidth:"200px"},children:(0,Pi.jsx)(gs,{placeholder:"Назва шрифту",value:Mn.fontFamily,onChange:e=>Fn({fontFamily:e.target.value})})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fb7185",children:(0,Pi.jsx)(Ae,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Чутливість жестів"}),(0,Pi.jsxs)(Xr,{children:["Свайпи та слайдери: ",Mn.gestureSensitivity,"x"]})]})]}),(0,Pi.jsx)(Hr,{style:{minWidth:"160px"},children:(0,Pi.jsx)(Vs,{type:"range",min:"0.5",max:"3",step:"0.1",value:Mn.gestureSensitivity,onChange:e=>Fn({gestureSensitivity:parseFloat(e.target.value)})})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#facc15",children:(0,Pi.jsx)(A,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Швидкий відгук на кліки"}),(0,Pi.jsx)(Xr,{children:"Миттєвий відгук без затримок"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>Fn({fastClicks:!Mn.fastClicks}),children:[(0,Pi.jsx)(ps,{$checked:Mn.fastClicks,children:Mn.fastClicks?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Mn.fastClicks})]})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#818cf8",children:(0,Pi.jsx)(Ue,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Дзеркальність сайту"}),(0,Pi.jsx)(Xr,{children:"Скидається після перезавантаження сторінки"})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"По горизонталі (ліво ↔ право)"}),(0,Pi.jsxs)(xs,{onClick:()=>Cn(!Sn),children:[(0,Pi.jsx)(ps,{$checked:Sn,children:Sn?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Sn})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"По вертикалі (верх ↕ низ)"}),(0,Pi.jsxs)(xs,{onClick:()=>Tn(!zn),children:[(0,Pi.jsx)(ps,{$checked:zn,children:zn?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:zn})]})]}),(Sn||zn)&&(0,Pi.jsx)(us,{$danger:!0,style:{alignSelf:"flex-start",marginTop:"4px"},onClick:()=>{Cn(!1),Tn(!1)},children:"Скинути дзеркальність"})]})]})]}),"siteSections"===Ts&&(0,Pi.jsxs)(Fr,{children:[(0,Pi.jsxs)(Mr,{children:[(0,Pi.jsx)(Se,{})," Секції сайту та новини"]}),(0,Pi.jsx)(Ar,{children:"Порядок, видимість і тема кожної секції, а також фільтр та вигляд новин"}),G&&G.map((e,i)=>{const r=ei?.includes(e.key),s=Me?.[e.key]??b;return(0,Pi.jsx)(Rr,{children:(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:Ur[e.key]||"#94a3b8",children:Pr[e.key]||(0,Pi.jsx)(ye,{})}),(0,Pi.jsx)(_r,{children:(0,Pi.jsx)(Vr,{children:e.label})})]}),(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,Pi.jsx)(Ks,{onClick:()=>gi(e.key),title:"Змінити тему секції",children:s?(0,Pi.jsx)(W,{style:{fontSize:"13px"}}):(0,Pi.jsx)(z,{style:{fontSize:"13px",color:"#ffb36c"}})}),(0,Pi.jsx)(Ks,{onClick:()=>si(e.key),disabled:!r&&G.length-(ei?.length||0)<=2,title:r?"Показати секцію":"Приховати секцію",children:r?(0,Pi.jsx)(Pe,{style:{color:"#ff6b6b"}}):(0,Pi.jsx)(Te,{style:{color:"#60cdff"}})}),"hero"!==e.key&&(0,Pi.jsxs)(Pi.Fragment,{children:[(0,Pi.jsx)(Ks,{disabled:i<=1,onClick:()=>ue(i,-1),title:"Підняти",children:(0,Pi.jsx)(re,{})}),(0,Pi.jsx)(Ks,{disabled:i===G.length-1,onClick:()=>ue(i,1),title:"Опустити",children:(0,Pi.jsx)(Z,{})})]})]})]})},e.key)}),(0,Pi.jsx)("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:(0,Pi.jsx)(us,{onClick:ui,style:{flex:1},children:"Скинути теми секцій"})}),(0,Pi.jsxs)(Ir,{children:[(0,Pi.jsx)(de,{})," Новини"]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#f97316",children:(0,Pi.jsx)(oe,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Фільтр новин"}),(0,Pi.jsx)(Xr,{children:"Приховує новини про війну, політику, кримінал та інший небажаний контент. Зміни діють після оновлення новин"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:async()=>{const e=!Ft;(e||await Bt(21,"Без фільтра у стрічку потраплять усі новини, зокрема про війну, кримінал, казино та ставки. Вимкнути фільтр можна лише з 21 року."))&&(Lt(e),_e(e),Rt())},children:[(0,Pi.jsx)(ps,{$checked:Ft,children:Ft?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Ft})]})})]}),(0,Pi.jsxs)(Or,{$disabled:!Ft,"aria-disabled":!Ft,children:[(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Не видаляти, а показувати плашку"}),(0,Pi.jsx)(Xr,{children:"Небажана новина лишається у стрічці під плашкою «Небажаний контент був автозаблокований» з кнопкою «Розглушити»"})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>{const e=!Yt;Nt(e),Ee(e),Rt()},children:[(0,Pi.jsx)(ps,{$checked:Yt,children:Yt?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Yt})]})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Які теми бачити"}),(0,Pi.jsx)(Xr,{children:"Для кожної теми оберіть: не рекомендувати (фільтр її ховає) чи показувати"})]}),(0,Pi.jsx)("div",{children:Ve.map(({key:e,label:i})=>{const r=Wt[e]||"hide";return(0,Pi.jsxs)(Qr,{children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:i}),(0,Pi.jsxs)(Jr,{role:"radiogroup","aria-label":i,children:[(0,Pi.jsx)(qr,{type:"button",role:"radio","aria-checked":"hide"===r,$active:"hide"===r,$tone:"hide",onClick:()=>Jt(e,"hide"),children:"Не рекомендувати"}),(0,Pi.jsx)(qr,{type:"button",role:"radio","aria-checked":"show"===r,$active:"show"===r,$tone:"show",onClick:()=>Jt(e,"show"),children:"Показувати"})]})]},e)})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(_r,{children:[(0,Pi.jsxs)(Kr,{children:["Власні слова та правила (",_t.length,"/",50,")"]}),(0,Pi.jsx)(Xr,{children:"Новини з цими словами в заголовку чи описі теж блокуватимуться. Регістр не важливий. Можна писати не лише слово, а й правило між косими рисками — див. пояснення нижче"})]}),(0,Pi.jsxs)("form",{style:{display:"flex",gap:"8px"},onSubmit:e=>{e.preventDefault(),(()=>{const e=Xt.trim().slice(0,300);if(!e)return;if(_t.length>=50)return;if("invalid"===Xe(e).kind)return;if(_t.some(i=>i.toLowerCase()===e.toLowerCase()))return void Ht("");const i=[..._t,e];Vt(i),Ye(i),Ht(""),Rt()})()},children:[(0,Pi.jsx)(gs,{type:"text",value:Xt,maxLength:300,placeholder:"Слово (футбол) або правило (/футбол\\p{L}*/iu)",disabled:!Ft,spellCheck:!1,onChange:e=>Ht(e.target.value),style:"regex"===Qt?.kind||"invalid"===Qt?.kind?{fontFamily:"Consolas, monospace"}:void 0}),(0,Pi.jsxs)(us,{type:"submit",disabled:!Ft||!Xt.trim()||"invalid"===Qt?.kind||_t.length>=50,children:[(0,Pi.jsx)(fe,{})," Додати"]})]}),Qt&&(0,Pi.jsxs)(is,{$tone:Qt.kind,children:["word"===Qt.kind&&"Звичайне слово: блокуватиметься текст, що містить його","regex"===Qt.kind&&"Правило коректне — його можна додати","invalid"===Qt.kind&&`Помилка в правилі: ${Qt.error}`]}),_t.length>0&&(0,Pi.jsx)(Zr,{children:_t.map(e=>(0,Pi.jsxs)(es,{$regex:"word"!==Xe(e).kind,children:[e,(0,Pi.jsx)("button",{type:"button","aria-label":`Прибрати «${e}»`,onClick:()=>(e=>{const i=_t.filter(i=>i!==e);Vt(i),Ye(i),Rt()})(e),children:(0,Pi.jsx)(E,{})})]},e))}),(0,Pi.jsxs)(rs,{children:[(0,Pi.jsxs)(ss,{type:"button","aria-expanded":Ot,"aria-controls":"news-filter-regex-help",onClick:()=>Kt(e=>!e),children:[(0,Pi.jsx)(ts,{$open:Ot,"aria-hidden":"true",children:(0,Pi.jsx)(Z,{})}),"Як писати правила (регулярні вирази)"]}),(0,Pi.jsx)(j,{initial:!1,children:Ot&&(0,Pi.jsxs)(u.div,{id:"news-filter-regex-help",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.35,ease:[.4,0,.2,1]},style:{overflow:"hidden"},children:[(0,Pi.jsx)("p",{children:"Правило — це шаблон між косими рисками. Воно ловить одразу всі форми слова. Приклад, який блокує новини про уряд, парламент і владу:"}),(0,Pi.jsxs)(ns,{children:[(0,Pi.jsx)("code",{children:ls}),(0,Pi.jsx)(us,{type:"button",onClick:()=>Ht(ls),children:"Вставити приклад"})]}),(0,Pi.jsxs)("p",{children:["Спрацює на: ",(0,Pi.jsx)("i",{children:"уряд, уряду, урядом, парламент, парламенту, парламентом, влада, влади, владою"}),". Не спрацює на: ",(0,Pi.jsx)("i",{children:"владика, безвладдя"}),"."]}),(0,Pi.jsx)(as,{children:ds.map(([e,i])=>(0,Pi.jsxs)(Ai.Fragment,{children:[(0,Pi.jsx)("code",{children:e}),(0,Pi.jsx)("span",{children:i})]},e))}),(0,Pi.jsx)("p",{style:{marginTop:"10px"},children:"Інші корисні елементи:"}),(0,Pi.jsx)(as,{children:cs.map(([e,i])=>(0,Pi.jsxs)(Ai.Fragment,{children:[(0,Pi.jsx)("code",{children:e}),(0,Pi.jsx)("span",{children:i})]},e))})]},"regex-help")})]})]}),(0,Pi.jsxs)(os,{children:[(0,Pi.jsxs)("span",{children:[(0,Pi.jsx)(ce,{"aria-hidden":"true"})," Нові налаштування, як і сам фільтр, діють після оновлення новин."]}),(0,Pi.jsxs)("span",{children:[(0,Pi.jsx)(ce,{"aria-hidden":"true"})," Розглушена плашка відкрита лише до перезавантаження сторінки."]})]})]}),$s?(0,Pi.jsx)(Lr,{style:{opacity:.45},children:(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#e879f9",children:(0,Pi.jsx)(F,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Синхронізація заглушених новин і фільтра"}),(0,Pi.jsx)(Xr,{children:"🔒 Доступно тільки для зареєстрованих користувачів"})]})]})}):(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#e879f9",children:(0,Pi.jsx)(F,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Синхронізація заглушених новин і фільтра"}),(0,Pi.jsxs)(Xr,{children:["Синхронізувати приховані новини та налаштування фільтра (теми, власні слова й правила) між усіма пристроями. Не більше ",50," дій на добу — «Заглушити», «Розглушити» і зміна фільтра рахуються однаково (кілька змін фільтра поспіль — одна дія). Те, що понад ліміт, зберігається лише на цьому пристрої й підтягнеться в хмару з наступною синхронізацією."]})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>Fn({syncMutedNews:!Mn.syncMutedNews}),children:[(0,Pi.jsx)(ps,{$checked:Mn.syncMutedNews,children:Mn.syncMutedNews?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Mn.syncMutedNews})]})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#c4b5fd",children:(0,Pi.jsx)(ae,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Видимість елементів новин"}),(0,Pi.jsx)(Xr,{children:"Увімкніть або вимкніть частини новинних карток"})]})]}),(0,Pi.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:Dn.filter(e=>"image"!==e.key).map(e=>(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"title"===e.key?"Заголовок новини":"Опис новини"}),(0,Pi.jsxs)(xs,{onClick:()=>(e=>{if("image"===e)return;const i=Dn.map(i=>i.key===e?{...i,visible:!i.visible}:i);Pn(i),Fn({newsLayout:i})})(e.key),children:[(0,Pi.jsx)(ps,{$checked:e.visible,children:e.visible?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:e.visible})]})]},e.key))})]})]}),"modes"===Ts&&(0,Pi.jsxs)(Fr,{children:[(0,Pi.jsxs)(Mr,{children:[(0,Pi.jsx)(k,{})," Режими сайту та застосунки"]}),(0,Pi.jsx)(Ar,{children:"Тема, акцентний колір, швидкість завантаження, режим Декоратора, навчання та застосунки для пристроїв"}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#86efac",children:(0,Pi.jsx)(P,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Навчання від Доміно"}),(0,Pi.jsx)(Xr,{children:"Пройти інтерактивне навчання по сайту ще раз"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(us,{disabled:!Ss,onClick:()=>{Rn(),setTimeout(()=>Ss?.startTutorial(),300)},children:[(0,Pi.jsx)(S,{})," Запустити"]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#ffb36c",children:b?(0,Pi.jsx)(W,{}):(0,Pi.jsx)(z,{style:{color:"#ffb36c"}})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Головна тема сайту"}),(0,Pi.jsx)(Xr,{children:b?"Темна тема активна":"Світла тема активна"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsx)(us,{onClick:y,children:b?(0,Pi.jsxs)(Pi.Fragment,{children:[(0,Pi.jsx)(W,{})," Темна"]}):(0,Pi.jsxs)(Pi.Fragment,{children:[(0,Pi.jsx)(z,{style:{color:"#ffb36c"}})," Світла"]})})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:Cs||"#60cdff",children:(0,Pi.jsx)(we,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Акцентний колір шапки"}),(0,Pi.jsx)(Xr,{children:Cs?`Акцент: ${li(Cs)}`:"Без накладення кольору"})]})]}),(0,Pi.jsx)($i,{isDarkMode:!0,accentColor:Cs,onPick:zs,columns:di.length})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#5eead4",children:(0,Pi.jsx)(Q,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Липкий фоновий ефект"}),(0,Pi.jsx)(Xr,{children:"Закріплення заднього плану при скролі"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:Fi,children:[(0,Pi.jsx)(ps,{$checked:Ii,children:Ii?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Ii})]})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#93c5fd",children:(0,Pi.jsx)(he,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Стратегія завантаження ресурсів"}),(0,Pi.jsx)(Xr,{children:"Оптимізація швидкості запуску та економія трафіку"})]})]}),(0,Pi.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"4px"},children:[{key:"eager",label:"Повний",desc:"Завантажує все відразу при старті"},{key:"delayed",label:"Оптимальний",desc:"Завантажує важкі модулі через 8 сек"},{key:"lazy",label:"Економний",desc:"Завантажує тільки за потребою"}].map(({key:e,label:i})=>(0,Pi.jsx)(us,{onClick:()=>Ui(e),style:{flex:1,minWidth:"120px",background:zi===e?"rgba(96,205,255,0.15)":void 0,borderColor:zi===e?"#60cdff":void 0},children:i},e))})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#d946ef",children:(0,Pi.jsx)(ge,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Режим Декоратора (CSS Редактор)"}),(0,Pi.jsx)(Xr,{children:"Візуальне редагування стилів елементів сторінки"})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"Увімкнути режим Декоратора"}),(0,Pi.jsxs)(xs,{onClick:()=>rt(!it),children:[(0,Pi.jsx)(ps,{$checked:it,children:it?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:it})]})]}),it&&(0,Pi.jsxs)(Pi.Fragment,{children:[(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Pi.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"Зберігати зміни після оновлення"}),(0,Pi.jsxs)(xs,{onClick:()=>ot(!at),children:[(0,Pi.jsx)(ps,{$checked:at,children:at?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:at})]})]}),(0,Pi.jsx)("div",{style:{fontSize:"12px",fontWeight:"600",color:"#60cdff",marginTop:"4px"},children:"Версія Декоратора (кожна зберігає свої окремі зміни)"}),(0,Pi.jsx)("div",{style:{display:"flex",gap:"6px"},children:[0,1,2].map(e=>(0,Pi.jsxs)(us,{onClick:()=>dt(e),style:{flex:1,outline:lt===e?"2px solid #60cdff":"none"},children:["Пресет ",e+1]},e))}),(0,Pi.jsxs)("div",{style:{fontSize:"12px",fontWeight:"600",color:"#60cdff",marginTop:"4px"},children:["Журнал змін (",st.length,")"]}),st.length>0?(0,Pi.jsx)("div",{style:{maxHeight:"140px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"4px"},children:st.map(e=>(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.04)",padding:"4px 8px",borderRadius:"4px",fontSize:"11px"},children:[(0,Pi.jsxs)("span",{children:[(0,Pi.jsx)("b",{style:{color:"#60cdff"},children:e.tagName})," ",e.property,": ",e.newValue]}),(0,Pi.jsx)(us,{style:{padding:"2px 6px",fontSize:"10px"},onClick:()=>tt(e.id),children:"Відмінити"})]},e.id))}):(0,Pi.jsx)("span",{style:{fontSize:"11px",color:"#777",fontStyle:"italic"},children:"Змін ще немає"}),st.length>0&&(0,Pi.jsx)(us,{$danger:!0,onClick:nt,style:{alignSelf:"flex-start"},children:"Скинути всі зміни Декоратора"})]})]})]}),(0,Pi.jsxs)(Ir,{children:[(0,Pi.jsx)(ke,{})," Застосунки Стихії"]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#00a4ef",children:(0,Pi.jsx)(I,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Версія для Windows"}),(0,Pi.jsx)(Xr,{children:"Завантажити застосунок Stuxia для комп'ютера"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(us,{as:"a",$primary:!0,href:"https://github.com/TheTurkeyProgramist/stuxia/releases/download/v1.0.0/stuxia_1.0.0_x64-setup.exe",children:[(0,Pi.jsx)(ke,{})," Завантажити"]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#3ddc84",children:(0,Pi.jsx)(me,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Версія для Android"}),(0,Pi.jsx)(Xr,{children:"APK для встановлення на Android-пристрої"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(us,{as:"a",$primary:!0,href:"https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Android.apk",children:[(0,Pi.jsx)(ke,{})," Завантажити APK"]})})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fcc624",children:(0,Pi.jsx)(M,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Версія для Linux"}),(0,Pi.jsx)(Xr,{children:"AppImage для більшості дистрибутивів або DEB для Debian/Ubuntu"})]})]}),(0,Pi.jsxs)(Hr,{children:[(0,Pi.jsxs)(us,{as:"a",$primary:!0,href:"https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Linux.AppImage",children:[(0,Pi.jsx)(ke,{})," AppImage"]}),(0,Pi.jsxs)(us,{as:"a",href:"https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Linux.deb",children:[(0,Pi.jsx)(ke,{})," DEB"]})]})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#d1d5db",children:(0,Pi.jsx)($e,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"На iPhone та iPad"}),(0,Pi.jsx)(Xr,{children:"Відкрийте сайт у Safari, натисніть «Поділитися» → «На початковий екран»"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(us,{as:"a",$primary:!0,href:"https://stuxia.com",target:"_blank",rel:"noreferrer",children:[(0,Pi.jsx)(de,{})," Відкрити сайт"]})})]})]}),"filters"===Ts&&(0,Pi.jsxs)(Fr,{children:[(0,Pi.jsxs)(Mr,{children:[(0,Pi.jsx)(ae,{})," Візуальні фільтри та пресети"]}),(0,Pi.jsxs)(Ar,{children:["Затемнення, кольорові фільтри для зору та збереження власних пресетів.",Dt&&(0,Pi.jsx)(Br,{as:"span",children:" Результат видно на сторінці ліворуч"})]}),(0,Pi.jsxs)(Br,{children:[(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fdba74",children:(0,Pi.jsx)(le,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Перегляд поруч зі сторінкою"}),(0,Pi.jsx)(Xr,{children:Dt?"На цій вкладці вікно зсувається праворуч і не затемнює сайт (на широкому екрані)":"Вікно налаштувань звичайного розміру, сторінка затемнена"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>{const e=!Dt;Pt(e);try{r("settings_filters_preview",e?"true":"false")}catch{}},children:[(0,Pi.jsx)(ps,{$checked:Dt,children:Dt?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Dt})]})})]}),Dt&&(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fcd34d",children:(0,Pi.jsx)(X,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Ширина вікна в режимі перегляду"}),(0,Pi.jsxs)(Xr,{children:[Ut,"% ширини екрана"]})]})]}),(0,Pi.jsx)(Hr,{style:{minWidth:"180px"},children:(0,Pi.jsx)(Vs,{type:"range",min:64,max:100,step:"4",value:Ut,onChange:e=>(e=>{It(e);try{r("settings_filters_preview_percent",String(e))}catch{}})(Number(e.target.value))})})]})]}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fde047",children:(0,Pi.jsx)(je,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Зменшення яскравості / Затемнення"}),(0,Pi.jsxs)(Xr,{children:["Інтенсивність: ",ct.darkIntensity||0,"%"]})]})]}),(0,Pi.jsx)(Hr,{style:{minWidth:"180px"},children:(0,Pi.jsx)(Vs,{type:"range",min:"0",max:"100",value:ct.darkIntensity||0,onChange:e=>xt(i=>({...i,darkIntensity:Number(e.target.value)}))})})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#f0abfc",children:(0,Pi.jsx)(te,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Кольорові та зорові фільтри"}),(0,Pi.jsx)(Xr,{children:"Оберіть ефект для оформлення сторінки"})]})]}),(0,Pi.jsx)(Qs,{style:{marginTop:"4px"},children:ni.map(e=>(0,Pi.jsx)(Js,{$active:ct.filterType===e.id,onClick:()=>xt(i=>hi(i,e.id)),children:e.label},e.id))})]}),"none"!==ct.filterType&&(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#fca5a5",children:(0,Pi.jsx)(C,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Сила ефекту фільтра"}),(0,Pi.jsxs)(Xr,{children:["Інтенсивність: ",ct.filterIntensity||50,"%"]})]})]}),(0,Pi.jsx)(Hr,{style:{minWidth:"180px"},children:(0,Pi.jsx)(Vs,{type:"range",min:"0",max:"100",value:ct.filterIntensity||50,onChange:e=>xt(i=>({...i,filterIntensity:Number(e.target.value)}))})})]}),(0,Pi.jsxs)(Gr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#67e8f9",children:(0,Pi.jsx)(pe,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Приклад"}),(0,Pi.jsx)(Xr,{children:"Так фільтр виглядатиме на сторінці"})]})]}),(0,Pi.jsx)(Yr,{src:"/assets/mountains-CwRk4ZgD.webp",alt:"Приклад візуального фільтра",loading:"lazy",style:{filter:oi(ct)}})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#a5b4fc",children:(0,Pi.jsx)(ze,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Комбінація фільтрів"}),(0,Pi.jsx)(Xr,{children:jt.length>1?`Разом діють: ${jt.map(e=>ni.find(i=>i.id===e)?.label).join(" + ")}`:"Позначте кілька фільтрів, щоб вони діяли разом, і збережіть як власний пресет"})]})]}),(0,Pi.jsx)(Qs,{style:{marginTop:"4px"},children:ci.map(e=>(0,Pi.jsxs)(Js,{$active:jt.includes(e.id),onClick:()=>(e=>{const i=jt.includes(e)?jt.filter(i=>i!==e):[...jt,e];xt(e=>{const r={...e};return delete r.combo,0===i.length?{...r,filterType:"none"}:1===i.length?{...r,filterType:i[0]}:{...r,filterType:"combo",combo:i}})})(e.id),children:[jt.includes(e.id)?(0,Pi.jsx)(ee,{}):(0,Pi.jsx)(fe,{})," ",e.label]},e.id))})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#f9a8d4",children:(0,Pi.jsx)(Fe,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Швидкі стилі та пресети"}),(0,Pi.jsxs)(Xr,{children:["Готові стилі та власні пресети (",ht.length,"/",6,"). Хедер і налаштування фільтри не змінюють — тут їх завжди можна вимкнути"]})]})]}),(0,Pi.jsxs)(qs,{style:{marginTop:"4px"},children:[pi.map(e=>(0,Pi.jsxs)(Js,{onClick:()=>xt(e.config),children:[(0,Pi.jsx)(e.icon,{})," ",e.label]},e.id)),ht.map(e=>(0,Pi.jsxs)(Zs,{children:[(0,Pi.jsxs)(Js,{style:{border:"none",flex:1,padding:"2px"},onClick:()=>xt(e.config),children:[(0,Pi.jsx)(Mi,{})," ",xi(e)]}),(0,Pi.jsx)(Ks,{onClick:()=>{const i=window.prompt("Нова назва пресета:",xi(e));i&&ut(e.id,i)},title:"Перейменувати",style:{width:22,height:22,fontSize:10},children:(0,Pi.jsx)(be,{})}),(0,Pi.jsx)(Ks,{$danger:!0,onClick:()=>gt(e.id),title:"Видалити",style:{width:22,height:22,fontSize:10},children:(0,Pi.jsx)(E,{})})]},e.id))]}),(0,Pi.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[(0,Pi.jsx)(gs,{placeholder:ht.length>=6?"Досягнуто ліміт — видаліть пресет":"Назва нового пресета...",value:mt,onChange:e=>bt(e.target.value),maxLength:15,disabled:ht.length>=6}),(0,Pi.jsx)(us,{disabled:ht.length>=6||!mt.trim(),onClick:()=>{mt.trim()&&(ft(mt),bt(""))},children:"Зберегти"})]})]}),(0,Pi.jsxs)(us,{$danger:!0,onClick:pt,style:{alignSelf:"flex-start",marginTop:"4px"},children:[(0,Pi.jsx)(D,{})," Скинути всі фільтри"]})]}),"bgMusic"===Ts&&(0,Pi.jsxs)(Fr,{children:[(0,Pi.jsxs)(Mr,{children:[(0,Pi.jsx)(T,{})," Фонова музика"]}),(0,Pi.jsx)(Ar,{children:"Гучність, швидкість і режим відтворення, бібліотека треків та власні файли"}),(0,Pi.jsxs)(Lr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#a78bfa",children:(0,Pi.jsx)(T,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Фонова музика"}),(0,Pi.jsx)(Xr,{children:"Вмикайте приємну музику під час використання сайту"})]})]}),(0,Pi.jsx)(Hr,{children:(0,Pi.jsxs)(xs,{onClick:()=>Ri(!Li),children:[(0,Pi.jsx)(ps,{$checked:Li,children:Li?"Увімкнуто":"Вимкнуто"}),(0,Pi.jsx)(hs,{$checked:Li})]})})]}),(0,Pi.jsxs)(Dr,{$off:!Li,children:[(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#c084fc",children:(0,Pi.jsx)(q,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Гучність та швидкість"}),(0,Pi.jsx)(Xr,{children:"Налаштування відтворення фону та звукових ефектів"})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"4px"},children:[(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,Pi.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Гучність: ",Math.round(100*Yi),"%"]}),(0,Pi.jsx)(Vs,{type:"range",min:"0",max:"1",step:"0.01",value:Yi,onChange:e=>Ni(parseFloat(e.target.value)),style:{flex:1}})]}),(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,Pi.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Швидкість: ",Wi,"x"]}),(0,Pi.jsx)(Vs,{type:"range",min:"0.5",max:"2",step:"0.05",value:Wi,onChange:e=>{return i=parseFloat(e.target.value),Ei(i),Wr?.current&&(Wr.current.playbackRate=i),void(ws?.current&&(ws.current.playbackRate=i));var i},style:{flex:1}})]}),(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,Pi.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Гучність SFX: ",Math.round(100*yr),"%"]}),(0,Pi.jsx)(Vs,{type:"range",min:"0",max:"1",step:"0.01",value:yr,onChange:e=>Cr(parseFloat(e.target.value)),style:{flex:1}})]})]})]}),(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#8b5cf6",children:(0,Pi.jsx)(K,{style:{fontSize:"18px"}})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsx)(Vr,{children:"Режим відтворення"}),(0,Pi.jsxs)(Xr,{children:["Позиція: ",aa(Hn)," / ",aa(Kn)]})]})]}),(0,Pi.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,Pi.jsx)(Vs,{type:"range",min:"0",max:Kn||100,step:"0.1",value:Hn,onChange:e=>{const i=parseFloat(e.target.value),r=Wr?.current,s=ws?.current;let t=r;r&&s&&!s.paused&&s.volume>=r.volume&&(t=s),t&&(t.currentTime=i,On(i))}}),(0,Pi.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[["loop","order"].map(e=>(0,Pi.jsxs)(us,{onClick:()=>Vi(e),style:{background:_i===e?"rgba(96,205,255,0.15)":void 0,borderColor:_i===e?"#60cdff":void 0},children:[(0,Pi.jsx)(N,{})," ","loop"===e?"Повтор":"Порядок"]},e)),(0,Pi.jsxs)(us,{onClick:()=>Ki(!Xi),style:{background:Xi?"rgba(167,139,250,0.15)":void 0,borderColor:Xi?"#a78bfa":void 0},children:[(0,Pi.jsx)(Ie,{})," Перемішати"]}),(0,Pi.jsx)(us,{onClick:jr,children:"Скинути позицію"})]})]})]}),(0,Pi.jsx)("div",{style:{display:"flex",gap:"4px",padding:"4px 0"},children:["library","custom"].map(e=>(0,Pi.jsx)(us,{onClick:()=>Xn(e),style:{background:Vn===e?"rgba(96,205,255,0.15)":void 0,borderColor:Vn===e?"#60cdff":void 0},children:"library"===e?(0,Pi.jsxs)(Pi.Fragment,{children:[(0,Pi.jsx)(ne,{})," Бібліотека"]}):(0,Pi.jsxs)(Pi.Fragment,{children:[(0,Pi.jsx)(B,{})," Власні треки"]})},e))}),"library"===Vn&&(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[(0,Pi.jsx)(L,{style:{color:"#a0a0a0"}}),(0,Pi.jsx)(gs,{placeholder:"Пошук треку...",value:En,onChange:e=>_n(e.target.value),style:{maxWidth:"280px"}})]}),(0,Pi.jsx)(Ls,{children:na.map(e=>{const i=Bi===e.file||!e.isCustom&&ir===e.id,r=Jn[e.id],s=void 0!==r&&r<100;return(0,Pi.jsxs)(Rs,{$active:i,style:e.hidden&&"order"===_i?{opacity:.45}:void 0,onClick:()=>e.isCustom?(Gi(e.file),rr(null)):(async e=>{if(!("caches"in window))return Gi(e.file),rr(e.id),void sa(e.id,e.file);try{const i=await caches.open(ki);if(await i.match(e.file))return Gi(e.file),rr(e.id),sa(e.id,e.file),qn(i=>({...i,[e.id]:100})),void ea(i=>i.filter(i=>String(i)!==String(e.id)));qn(i=>({...i,[e.id]:0}));const r=await fetch(e.file),s=r.body?.getReader(),t=Number(r.headers.get("Content-Length"))||0;let n=0;const a=[];for(;;){const{done:i,value:r}=await s.read();if(i)break;a.push(r),n+=r.length,t>0&&qn(i=>({...i,[e.id]:Math.min(100,Math.round(n/t*100))}))}const o=new Blob(a);await i.put(e.file,new Response(o,{headers:{"Content-Type":r.headers.get("Content-Type")||"audio/mpeg"}})),Gi(e.file),rr(e.id),sa(e.id,e.file),qn(i=>({...i,[e.id]:100}))}catch{Gi(e.file),rr(e.id),sa(e.id,e.file)}})(e),children:[e.image?(0,Pi.jsx)(Bs,{src:e.image,alt:e.name}):(0,Pi.jsx)("div",{style:{width:32,height:32,background:e.isCustom?"rgba(96,205,255,0.1)":"rgba(167,139,250,0.1)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:e.isCustom?(0,Pi.jsx)(B,{style:{color:"#60cdff",fontSize:"14px"}}):(0,Pi.jsx)(T,{style:{color:"#a78bfa",fontSize:"14px"}})}),(0,Pi.jsxs)(Gs,{children:[(0,Pi.jsx)(Ys,{children:e.name}),(0,Pi.jsx)(Ns,{children:e.isCustom?"Власний трек":s?`Завантаження ${r}%...`:e.available?"✓ Доступний":"↓ Клікніть для завантаження"})]}),i&&(0,Pi.jsx)(_s,{}),"order"===_i&&(0,Pi.jsx)(Ks,{onClick:r=>{r.stopPropagation(),((e,i)=>{const r=!e.hidden;e.isCustom?qi(ta.map((i,s)=>s===e.customIdx?{...i,enabled:!r}:i)):er(i=>({...i,[e.id]:{...i[e.id],enabled:!r}})),r&&i&&mr()})(e,i)},title:e.hidden?"Повернути в чергу":"Пропускати в режимі «Порядок»",children:e.hidden?(0,Pi.jsx)(Pe,{style:{color:"#ff6b6b"}}):(0,Pi.jsx)(Te,{style:{color:"#60cdff"}})})]},e.id)})})]}),"custom"===Vn&&(0,Pi.jsxs)(Rr,{children:[(0,Pi.jsxs)(Nr,{children:[(0,Pi.jsx)(Er,{$color:"#7c3aed",children:(0,Pi.jsx)(B,{})}),(0,Pi.jsxs)(_r,{children:[(0,Pi.jsxs)(Vr,{children:["Власні треки (",ta.length,"/",7,")"]}),(0,Pi.jsxs)(Xr,{children:["MP3/WAV/OPUS (рекомендовано) до ",20," МБ та ",8," хвилин. Додані треки з'являються в бібліотеці"]})]})]}),(0,Pi.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"4px"},children:(ta.length<7?[...ta,null]:ta).map((e,i)=>(0,Pi.jsxs)(Xs,{$hasFile:!!e?.file,children:[e?.file?(0,Pi.jsx)("div",{style:{width:28,height:28,background:"rgba(96,205,255,0.1)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Pi.jsx)(T,{style:{color:"#60cdff",fontSize:"13px"}})}):(0,Pi.jsx)("div",{style:{width:28,height:28,background:"rgba(255,255,255,0.04)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Pi.jsx)("span",{style:{color:"#555",fontSize:"12px"},children:i+1})}),(0,Pi.jsx)(Hs,{children:e?.name||(0,Pi.jsx)("span",{style:{color:"#555"},children:"Додати трек"})}),(0,Pi.jsxs)(Os,{children:[(0,Pi.jsx)(Ks,{onClick:()=>{Nn.current=i,Wn.current.click()},title:"Завантажити",children:(0,Pi.jsx)(B,{})}),e?.file&&(0,Pi.jsx)(Ks,{$danger:!0,onClick:()=>{return e=i,void qi(ta.filter((i,r)=>r!==e));var e},title:"Видалити",children:(0,Pi.jsx)(J,{})})]})]},i))}),(0,Pi.jsx)("input",{ref:Wn,type:"file",accept:"audio/*",style:{display:"none"},onChange:e=>{const i=e.target.files[0];if(e.target.value="",!i||null===Nn.current)return;if(i.size>20971520)return void alert("Файл занадто великий! Максимум 20 МБ.");const r=new Audio(URL.createObjectURL(i));r.onloadedmetadata=()=>{if(r.duration>480)return alert("Мелодія занадто довга! Максимум 8 хвилин."),void URL.revokeObjectURL(r.src);const e=[...ta];e[Math.min(Nn.current,e.length)]={name:i.name.split(".")[0].substring(0,30),file:i,repeats:1,enabled:!0},qi(e.slice(0,7)),Gi(i),rr(null),URL.revokeObjectURL(r.src)}}})]})]})]})]}),(0,Pi.jsx)(j,{children:$t&&(0,Pi.jsx)(zr,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:(0,Pi.jsxs)(Tr,{type:"button",onClick:()=>{const e=kt.current;if(!e)return;const i=Ct(e),r=i?e.scrollTop+i.getBoundingClientRect().top-e.getBoundingClientRect().top-12:e.scrollTop+.8*e.clientHeight;e.scrollTo({top:r,behavior:wt?"auto":"smooth"})},children:[(0,Pi.jsx)(Z,{"aria-hidden":"true"}),$t.label?`Нижче: ${$t.label}`:"Прокрутіть нижче"]})},"scroll-hint")})]})]}),(0,Pi.jsxs)(bs,{children:[(0,Pi.jsxs)(ys,{children:[(0,Pi.jsx)(ce,{style:{color:"#60cdff"}}),(0,Pi.jsxs)("span",{children:["Ви погодились з"," ",(0,Pi.jsx)(vs,{onClick:()=>Ws(!0),children:"Угодою"})]}),(0,Pi.jsx)(ti,{content:"Вийти з акаунта й стерти всі дані сайту на цьому пристрої",placement:"top",isDarkMode:b,children:(0,Pi.jsxs)(Is,{type:"button",onClick:()=>wn(!0),disabled:bn,children:[(0,Pi.jsx)(D,{"aria-hidden":"true"}),bn?"Скидаємо...":"Скинути сайт"]})})]}),(0,Pi.jsxs)(Fs,{children:[(0,Pi.jsx)(us,{onClick:Rn,children:"Скасувати"}),!$s&&(0,Pi.jsx)(us,{$primary:!0,onClick:()=>{if($s)return void Ln();if(Gn)return void alert("Введена некоректна дата!");if(!Mn.day||!Mn.month||!Mn.year)return void alert("Будь ласка, виберіть дату народження!");if(Mn.newPassword){if(Mn.newPassword!==Mn.confirmPassword)return void alert("Нові паролі не збігаються!");if(Mn.newPassword.length<6)return void alert("Пароль занадто короткий!")}const e=In();g({...i,account:i?.account||Mn.name,firstName:Mn.name,avatar:e,birthDate:`${Mn.year}-${Mn.month.toString().padStart(2,"0")}-${Mn.day.toString().padStart(2,"0")}`,textColor:Mn.textColor,borderColor:Mn.borderColor,fontFamily:Mn.fontFamily,showSeconds:Mn.showSeconds,dateDisplayMode:Mn.dateDisplayMode,hour12:Mn.hour12,voiceActingMode:Mn.voiceActingMode,showUpdateTimer:Mn.showUpdateTimer,newsLayout:Dn,newsAutoScroll:Mn.newsAutoScroll,syncMutedNews:Mn.syncMutedNews,gestureSensitivity:Mn.gestureSensitivity,fastClicks:Mn.fastClicks,...Mn.newPassword?{oldPassword:Mn.oldPassword,newPassword:Mn.newPassword}:{}}),Ln()},disabled:Gn,children:"Зберегти"})]})]})]})}),Ps&&(0,Pi.jsx)(tr,{children:(0,Pi.jsx)(Je,{isOpen:Ps,onClose:()=>Ws(!1)})}),Gt,vn&&(0,Pi.jsx)(Us,{onConfirm:async()=>{yn(!0),await Ji(()=>p(qe))},onCancel:kn,loading:bn})]}),document.body)};export{et as default};