import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{i as r,n as o}from"./index-Dd-O8J_a.js";import{a as t}from"./vendor-i18n-DhRqfqeK.js";import{s as i}from"./vendor-motion-B-5ZsAFi.js";import{i as a,t as n}from"./styled-components.browser.esm-C9MjP7gd.js";import{n as s}from"./vendor-react-B2dV4D76.js";var d=e(t()),l=e(s()),c="age_confirmed",f="Ключ Gemini видає Google, і за умовами Gemini API користуватися ним можна лише з 18 років.",p=e=>(()=>{try{return Number(o(c))||0}catch{return 0}})()>=e,g=i(),x=n`from { opacity: 0; } to { opacity: 1; }`,m=n`
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,u=a.div`
  position: fixed; inset: 0;
  /* Вище за модалки ШІ (до 300001) і налаштувань, нижче за шар тултіпів */
  z-index: 2147483000;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: ${x} 0.18s ease both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,b=a.div`
  width: min(420px, 100%);
  padding: 22px 22px 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: #1c1c1f;
  color: #f3f3f3;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.2);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${m} 0.22s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,h=a.div`
  display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
`,y=a.div`
  flex: 0 0 auto;
  display: grid; place-items: center;
  width: 44px; height: 44px; border-radius: 50%;
  background: ${({$age:e})=>e>=21?"rgba(196, 43, 28, 0.2)":"rgba(255, 179, 0, 0.16)"};
  border: 2px solid ${({$age:e})=>e>=21?"#ff6b6b":"#ffb300"};
  color: ${({$age:e})=>e>=21?"#ff8a8a":"#ffc94d"};
  font-size: 14px; font-weight: 800;
`,v=a.h3`
  margin: 0; font-size: 17px; font-weight: 600; line-height: 1.3;
`,j=a.p`
  margin: 0 0 12px; font-size: 13px; line-height: 1.5; color: #d4d4d4;
`,$=a.p`
  margin: 0 0 18px; font-size: 11px; line-height: 1.45; color: #8f8f8f;
`,w=a.div`
  display: flex; justify-content: flex-end; gap: 10px;
`,k=a.button`
  border-radius: 6px; padding: 7px 16px;
  font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  background: ${({$primary:e})=>e?"#60cdff":"rgba(255, 255, 255, 0.08)"};
  color: ${({$primary:e})=>e?"#000000":"#ffffff"};
  border: 1px solid ${({$primary:e})=>e?"#60cdff":"rgba(255, 255, 255, 0.12)"};
  &:hover { background: ${({$primary:e})=>e?"#70d4ff":"rgba(255, 255, 255, 0.15)"}; }
  &:focus-visible { outline: 2px solid #60cdff; outline-offset: 2px; }
`,C=({age:e,text:r,onConfirm:o,onCancel:t})=>{const i=(0,d.useRef)(null);return(0,d.useEffect)(()=>{i.current?.focus();const e=e=>{"Escape"===e.key&&(e.stopPropagation(),t())};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[t]),(0,l.createPortal)((0,g.jsx)(u,{"data-active-overlay":"",onMouseDown:e=>{e.target===e.currentTarget&&t()},children:(0,g.jsxs)(b,{role:"alertdialog","aria-modal":"true","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-text",children:[(0,g.jsxs)(h,{children:[(0,g.jsxs)(y,{$age:e,"aria-hidden":"true",children:[e,"+"]}),(0,g.jsx)(v,{id:"age-gate-title",children:"Підтвердження віку"})]}),(0,g.jsx)(j,{id:"age-gate-text",children:r}),(0,g.jsx)($,{children:"Підтвердження зберігається на цьому пристрої. Його можна скинути кнопкою «Скинути сайт» у налаштуваннях."}),(0,g.jsxs)(w,{children:[(0,g.jsx)(k,{ref:i,type:"button",onClick:t,children:"Скасувати"}),(0,g.jsxs)(k,{type:"button",$primary:!0,onClick:o,children:["Мені виповнилося ",e]})]})]})}),document.body)},z=()=>{const[e,o]=(0,d.useState)(null),t=(0,d.useCallback)((e,r)=>p(e)?Promise.resolve(!0):new Promise(t=>o({age:e,text:r,resolve:t})),[]),i=(0,d.useCallback)(()=>{e&&((e=>{if(!p(e))try{r(c,String(e))}catch{}})(e.age),e.resolve(!0),o(null))},[e]),a=(0,d.useCallback)(()=>{e&&(e.resolve(!1),o(null))},[e]);return[t,e?(0,g.jsx)(C,{age:e.age,text:e.text,onConfirm:i,onCancel:a}):null]};export{f as n,z as t};