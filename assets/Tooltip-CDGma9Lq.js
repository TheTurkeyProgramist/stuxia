import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{a as t}from"./vendor-i18n-DhRqfqeK.js";import{s}from"./vendor-motion-B-5ZsAFi.js";import{i as o}from"./styled-components.browser.esm-C9MjP7gd.js";import{at as r,ct as a,dt as n,ft as i,ht as f,it as l,lt as d,mt as p,nt as c,ot as m,pt as x,st as g,ut as h}from"./vendor-ui-DBFQ2jRZ.js";import{n as u,t as j}from"./MirrorSafe-BBuq4yF6.js";var b=e(t()),y=s(),w=o.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  /* Вище за всі модалки (налаштування — 100001, мова/AI — 200000…300001) */
  z-index: 300010;
  pointer-events: none;
  white-space: nowrap;
`,k=({content:e,children:t,placement:s="bottom",isDarkMode:o=!0,wrapperStyle:k})=>{const[M,v]=(0,b.useState)(!1),$=(0,b.useRef)(null),{refs:D,floatingStyles:S,context:F}=r({open:M,onOpenChange:v,placement:s,strategy:"fixed",transform:!1,whileElementsMounted:f,middleware:[x(8),i(),p({padding:5}),n({element:$})]}),{isMounted:R,styles:z}=h(F,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=g(F,{move:!1}),A=m(F),C=l(F),E=d(F,{role:"tooltip"}),{getReferenceProps:I,getFloatingProps:O}=a([P,A,C,E]);if(!e)return t;const W=o?"#111111":"#ffffff";return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{ref:D.setReference,...I(),style:{display:"inline-flex",...k},children:t}),R&&(0,y.jsx)(j,{children:(0,y.jsxs)(w,{ref:D.setFloating,$isDarkMode:o,style:{...S,...z},...O(),children:[(0,y.jsx)(u,{children:e}),(0,y.jsx)(c,{ref:$,context:F,fill:W,stroke:"#00acb9",strokeWidth:1})]})})]})};export{k as t};