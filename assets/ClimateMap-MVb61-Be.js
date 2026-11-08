import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{n as t}from"./vendor-utils-BcX-d9lY.js";import{a,n as r}from"./vendor-i18n-DhRqfqeK.js";import{i,n as o,r as n,s,t as l}from"./vendor-motion-B-5ZsAFi.js";import{i as d,r as c,t as p}from"./styled-components.browser.esm-C9MjP7gd.js";import{n as g}from"./vendor-react-B2dV4D76.js";import{Ai as x,B as b,Ii as u,Kt as f,Mn as m,On as h,Pn as w,Qi as y,Tn as $,V as k,Wn as v,X as M,Xn as j,Yr as D,ji as S,jn as z,jt as E,mn as C,on as L,wn as I,xn as P}from"./vendor-ui-DBFQ2jRZ.js";import{n as _,t as Y}from"./dist-C1SAOP-i.js";import{t as A}from"./ventusky-map-CzzRtc5e.js";import{D as K,E as F,O as T}from"./main-C2VxEdv8.js";var R=e(t()),W=e(a()),X=e(g()),O=s(),B=d.div`
  font-size: 15px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
  display: inline-flex;
    margin-bottom: -41px;
    width: 150px;
  padding:6px 7px;
  transition: all 0.3s ease;
  border-right: 1px solid rgb(255, 179, 108);
    border-left: 1px solid rgb(255, 179, 108);
  margin-right: 4px;
  z-index: 300;
  ${e=>e.$isStickyBgMode?c`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:c`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,U=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,H=d.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 560px;
  margin: 0 auto;
  border-radius: ${e=>e.$isFullscreen?"0":"8px"};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${e=>e.$isFullscreen?"none":"1px solid rgba(255, 255, 255, 0.15)"};
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${A});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`,q=d.kbd`
  display: ${e=>e.$visible?"inline-flex":"none"};
  align-items: center;
  margin-left: auto;
  padding: 2px 7px;
  border: 1px solid rgba(255, 184, 108, 0.3);
  border-bottom-width: 2px;
  border-radius: 5px;
  background: rgba(255, 140, 0, 0.08);
  color: rgba(255, 200, 130, 0.85);
  font-size: 9.5px;
  font-family: ui-monospace, monospace;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: none;
  flex-shrink: 0;
`,N=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;
  text-align: right;
  padding: 10px 14px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 179, 108, 0.55)":"rgba(200, 100, 0, 0.5)"};
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"linear-gradient(135deg, rgba(20, 14, 6, 0.92), rgba(30, 20, 8, 0.88))":"linear-gradient(135deg, rgba(255, 248, 235, 0.97), rgba(255, 235, 200, 0.97))"};
  color: ${e=>e.$isDarkMode?"#ffb36c":"#a05000"};
  cursor: pointer;
  z-index: 100;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 20px rgba(255, 140, 0, 0.12), 0 1px 0 rgba(255,255,255,0.04) inset;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${e=>e.$isDarkMode?"rgba(255, 179, 108, 0.9)":"rgba(200, 100, 0, 0.8)"};
    box-shadow: 0 4px 24px rgba(255, 140, 0, 0.25);
  }
`,V=d.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: flex-start;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(2, 5, 12, 0.55)":"rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,Z="\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 179, 108, 0.25) transparent;\n  &::-webkit-scrollbar { width: 4px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb {\n    background: rgba(255, 179, 108, 0.25);\n    border-radius: 4px;\n  }\n",J=d.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 0 10px 16px;
  background: ${e=>e.$isDarkMode?"linear-gradient(170deg, rgba(10,16,30,0.97) 0%, rgba(15,22,40,0.97) 60%, rgba(18,14,8,0.97) 100%)":"linear-gradient(170deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 60%, rgba(255,243,220,0.99) 100%)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.18)":"rgba(200,100,0,0.2)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  box-shadow: ${e=>e.$isDarkMode?"0 -8px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset":"0 -8px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8) inset"};
  ${Z}
`,Q=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin: 0 -10px 4px;
  padding: 12px 16px 12px 18px;
  background: ${e=>e.$isDarkMode?"linear-gradient(90deg, rgba(8,14,28,0.98) 0%, rgba(14,18,34,0.98) 50%, rgba(20,12,4,0.98) 100%)":"linear-gradient(90deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 100%)"};
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.2)":"rgba(200,100,0,0.15)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.5);
  z-index: 10;

  h2 {
    margin: 0;
    padding: 4px 0;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }
  /* Градієнт на самому анімованому тексті: background-clip на h2 обрізав гліфи з transform */
  h2 > span {
    background: linear-gradient(90deg, #ffb36c, #ffd49e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin: 0;
    margin-top: 1px;
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.42)":"rgba(100,50,0,0.55)"};
    font-size: 11px;
    letter-spacing: 0.02em;
  }
`,G=d.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`,ee=d.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.55)":"rgba(160,70,0,0.55)"};
  padding: 0 2px;
  margin-top: 10px;
  margin-bottom: 2px;

  @media (min-width: 1024px) {
    display: ${e=>e.$hideOnDesktop?"none":"block"};
  }
`,te=d.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 12px;
  border: 1px solid ${e=>e.$active?e.$isDarkMode?"rgba(255,179,108,0.6)":"rgba(200,100,0,0.5)":e.$danger?e.$isDarkMode?"rgba(255,80,80,0.4)":"rgba(200,40,40,0.35)":e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-radius: 10px;
  background: ${e=>e.$active?e.$isDarkMode?"rgba(255,179,108,0.1)":"rgba(255,179,108,0.15)":e.$danger?e.$isDarkMode?"rgba(255,80,80,0.07)":"rgba(255,80,80,0.06)":e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  cursor: pointer;
  gap: 12px;
  text-align: left;
  transition: all 0.18s ease;
  box-shadow: ${e=>e.$active?e.$isDarkMode?"0 0 0 1px rgba(255,179,108,0.15) inset":"0 0 0 1px rgba(200,100,0,0.12) inset":"0 1px 0 rgba(255,255,255,0.03) inset"};

  svg {
    font-size: 20px;
    flex-shrink: 0;
    color: ${e=>e.$active?e.$isDarkMode?"#ffb36c":"#c06000":e.$danger?e.$isDarkMode?"rgba(255,100,100,0.8)":"rgba(180,40,40,0.8)":e.$isDarkMode?"rgba(255,179,108,0.75)":"rgba(160,80,0,0.65)"};
    transition: color 0.18s ease;
  }

  &:hover {
    border-color: ${e=>e.$danger?e.$isDarkMode?"rgba(255,80,80,0.6)":"rgba(200,40,40,0.5)":e.$isDarkMode?"rgba(255,179,108,0.35)":"rgba(200,100,0,0.35)"};
    background: ${e=>e.$danger?e.$isDarkMode?"rgba(255,80,80,0.12)":"rgba(255,80,80,0.08)":e.$isDarkMode?"rgba(255,179,108,0.07)":"rgba(255,179,108,0.1)"};
    box-shadow: ${e=>e.$danger?"0 4px 16px rgba(255,80,80,0.1)":"0 0 0 1px rgba(255,179,108,0.12) inset, 0 4px 16px rgba(255,140,0,0.08)"};
    transform: translateY(-1px);
    svg { color: ${e=>e.$danger?e.$isDarkMode?"#ff7070":"#cc3030":e.$isDarkMode?"#ffb36c":"#c06000"}; }
  }
  &:active { transform: translateY(0); }

  strong {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: ${e=>e.$active?e.$isDarkMode?"#ffd4a0":"#7a3500":e.$danger?e.$isDarkMode?"#ffaaaa":"#aa2020":e.$isDarkMode?"rgba(255,255,255,0.92)":"rgba(30,10,0,0.88)"};
    display: block;
  }

  span {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.38)":"rgba(100,50,0,0.5)"};
    font-size: 10.5px;
    line-height: 1.4;
    display: block;
    margin-top: 1px;
  }
`,ae=d.span`
  && {
    display: inline-flex;
    align-self: flex-start;
    width: fit-content;
    font-size: 10px;
    line-height: 1.4;
    margin-top: 2px;
  }
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: ${e=>e.$on?"rgba(80, 200, 100, 0.15)":"rgba(180, 60, 60, 0.12)"};
  color: ${e=>e.$on?"#5dca70":"#e07070"};
  border: 1px solid ${e=>e.$on?"rgba(80,200,100,0.3)":"rgba(180,60,60,0.25)"};
  margin-top: 2px;
`,re=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.05)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.55)"};
  cursor: pointer;
  transition: all 0.18s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 60, 60, 0.18);
    border-color: rgba(255, 80, 80, 0.35);
    color: #ff8080;
  }
`,ie=d.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${e=>e.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?"0":"1"};
`,oe=d.div`
  position: absolute;
  inset: 0 0 ${e=>e.$bottomInset||0}px 0;
  display: grid;
  grid-template-columns: ${e=>e.$split?"repeat(2, minmax(0, 1fr))":"minmax(0, 1fr)"};
  gap: ${e=>e.$split?"2px":"0"};
`,ne=d.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`,se=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  gap: 17px;
  flex-direction: column;
  width: 310px;
  text-align: center;
  z-index: 1;
  pointer-events: none;
    p {
    margin: 0;
    margin-top: 1px;
   font-size: 11px;
    letter-spacing: 0.02em;
    color: black;
    background-color: #ffffffe1;
     font-weight: 700;
     border-radius: 7px;
     padding: 3px;
  }
`,le=d.div`
  position: relative;
  width: 340px;
  height: 210px;
  margin-bottom: -10px;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    /* Широка пласка тінь під усією сценою — ефект, що індики й дерево стоять на землі */
    left: -6%;
    right: -6%;
    bottom: -2%;
    height: 24%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse closest-side,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.72) 55%,
      rgba(0, 0, 0, 0.35) 82%,
      transparent 100%
    );
    filter: blur(12px);
    pointer-events: none;
  }
`,de=d.video`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: screen;
  opacity: 0.96;
  transition: opacity 300ms ease, filter 300ms ease;
  filter: brightness(1.04);
`,ce=d.button`
  background: ${e=>e.$active?"linear-gradient(135deg, #00c6ff, #0072ff)":"rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${e=>e.$active?"rgba(0, 198, 255, 0.6)":"rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${e=>e.$active?"0 4px 12px rgba(0, 114, 255, 0.3)":"none"};

  &:hover {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,pe=d.div`
  position: fixed;
  z-index: 2200;
  display: flex;
  flex-direction: column;
  background: rgba(10, 15, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  user-select: none;
`,ge=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,xe=d.div`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,be=d.div`
  display: flex;
  gap: 6px;
`,ue=d.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,fe=d.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(255, 255, 255, 0.35) 50%
  );
`,me=p`
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(4px); }
`,he=d.span`
  display: inline-block;
  animation: ${me} 3s ease-in-out infinite;
  color: #ffb36c;
  font-weight: 700;
`,we=d.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: #ffb36c;

  & > strong { font-weight: 700; }
`,ye=d(he)`
  display: block;
  font-size: 11.5px;
  font-weight: 500;
  opacity: 0.85;
`,$e=d.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,ke=d.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 12px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,179,108,0.04)":"rgba(255,179,108,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.14)":"rgba(200,100,0,0.18)"};
`,ve=d.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.35)":"rgba(255,255,255,0.85)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  font-size: 13px;
  outline: none;
  transition: border-color 0.18s;
  &::placeholder { color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(100,50,0,0.4)"}; }
  &:focus {
    border-color: rgba(255, 179, 108, 0.6);
    background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.98)"};
  }
`,Me=d.button`
  padding: 9px 16px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffb36c, #e07000);
  color: #0d0800;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.18s, transform 0.18s;
  &:hover { opacity: 0.88; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`,je=d.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
`,De=d.div`
  position: relative;
  display: flex;
  gap: 10px;
  padding: 10px 12px 12px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 12px;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Se=d.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    position: absolute;
    left: 12px;
    font-size: 15px;
    color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.7)":"rgba(160,80,0,0.6)"};
    pointer-events: none;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 9px 34px 9px 36px;
    border-radius: 10px;
    border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
    background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.35)":"rgba(255,255,255,0.85)"};
    color: ${e=>e.$isDarkMode?"white":"#1a0800"};
    font-size: 13px;
    outline: none;
    transition: border-color 0.18s;
    &::placeholder { color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.35)":"rgba(100,50,0,0.4)"}; }
    &:focus { border-color: rgba(255, 179, 108, 0.6); }
    &::-webkit-search-cancel-button { display: none; }
  }

  button {
    position: absolute;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.6)":"rgba(30,10,0,0.55)"};
    cursor: pointer;
    svg { position: static; font-size: 15px; color: inherit; }
    &:hover { background: rgba(255, 179, 108, 0.15); }
  }
`,ze=d.p`
  margin: 0;
  padding: 14px 4px;
  flex: 1 0 100%;
  text-align: center;
  font-size: 12px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.45)":"rgba(100,50,0,0.55)"};
`,Ee=d.div`
  flex: 0 0 min(72%, 260px);
  scroll-snap-align: start;
`,Ce=d(De)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  box-sizing: border-box;
  height: ${124}px;
  align-items: center;
  scroll-snap-type: none;
  background: ${e=>e.$isDarkMode?"rgba(16, 17, 20, 0.94)":"rgba(246, 247, 249, 0.94)"};

  & > ${Ee} { flex-basis: 176px; }
`,Le=d.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 12px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"};
  gap: 12px;
  box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset;

  svg {
    font-size: 20px;
    flex-shrink: 0;
    color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.75)":"rgba(160,80,0,0.65)"};
  }

  strong {
    font-size: 13px;
    font-weight: 600;
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.92)":"rgba(30,10,0,0.88)"};
    display: block;
  }
  span {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.38)":"rgba(100,50,0,0.5)"};
    font-size: 10.5px;
    line-height: 1.4;
    display: block;
    margin-top: 1px;
  }
`,Ie=p`
  0% { opacity: 0; transform: scale(0.5) rotate(-12deg); }
  70% { opacity: 1; transform: scale(1.12) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
`,Pe=p`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(4px) scaleY(0.92); }
  60% { transform: translateY(-2px); }
`,_e=p`
  0%, 100% { transform: rotate(0); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(8deg); }
  60% { transform: rotate(-5deg); }
  80% { transform: rotate(3deg); }
`,Ye=p`
  0% { transform: translateY(0) rotate(0); }
  35% { transform: translateY(-8px) rotate(-15deg); }
  70% { transform: translateY(2px) rotate(4deg); }
  100% { transform: translateY(0) rotate(0); }
`,Ae=p`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
`,Ke=p`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(4px, -4px); }
`,Fe=d.div`
  && > * > svg { transform-origin: center; }
  && > :nth-child(1):hover > svg { animation: ${Pe} 0.5s ease; }
  && > :nth-child(3):hover > svg { animation: ${_e} 0.6s ease; }
  && > :nth-child(4):hover > svg { animation: ${Ye} 0.6s ease; transform-origin: bottom left; }
  && > :nth-child(5):hover > svg { animation: ${Ae} 0.6s ease; }
  && > :nth-child(6):hover > svg { animation: ${Ke} 0.6s ease; }

  @media (min-width: 1024px) {
    && > * > svg { animation: ${Ie} 0.5s ease both; }
    && > :nth-child(3) > svg { animation-delay: 0.06s; }
    && > :nth-child(4) > svg { animation-delay: 0.12s; }
    && > :nth-child(5) > svg { animation-delay: 0.18s; }
    && > :nth-child(6) > svg { animation-delay: 0.24s; }
  }

  @media (prefers-reduced-motion: reduce) {
    && > * > svg, && > *:hover > svg { animation: none; }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-top: 12px;

    && > * {
      grid-column: span 2;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      margin-top: 0;
      padding: 22px 16px 16px;
      text-align: center;
    }
    && > :nth-child(n + 5) { grid-column: span 3; }

    && > * > svg { font-size: 46px; }
    && ${G} { flex: 1 0 auto; align-items: center; }
    && strong { font-size: 15px; }
    && span { font-size: 11.5px; }
    && ${ae} { align-self: center; }
    && ${q}, && select { margin: auto 0 0; }
  }
`,Te=d.select`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.25)":"rgba(200,100,0,0.25)"};
  background: ${e=>e.$isDarkMode?"rgba(255,140,0,0.08)":"rgba(255,200,100,0.12)"};
  color: ${e=>e.$isDarkMode?"rgba(255,200,130,0.9)":"#7a4000"};
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: border-color 0.18s;
  flex-shrink: 0;
  &:hover { border-color: rgba(255, 179, 108, 0.55); }
  option { background: ${e=>e.$isDarkMode?"#0d1525":"#fff8eb"}; color: ${e=>e.$isDarkMode?"white":"#1a0800"}; }
`,Re="(min-width: 768px)",We="#ffb36c",Xe="(min-width: 1200px) and (pointer: fine), (min-width: 1024px) and (orientation: landscape) and (pointer: coarse)",Oe=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(190px, 22%, 260px);
  gap: 5px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  & > ${H} {
    margin: 0;
    min-width: 0;
  }

  /* На телефонах бічної панелі немає — порожня колонка стискала карту у вузьку смужку */
  @media (max-width: 767.98px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Be=d(i.aside)`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  min-width: 0;
  min-height: 560px;
  contain: size;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${e=>e.$isDarkMode?"#1b1c1f":"#f6f7f9"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  box-shadow: ${e=>e.$isDarkMode?"0 20px 50px rgba(0,0,0,0.6)":"0 12px 32px rgba(0,0,0,0.12)"};
  ${Z}
`,Ue=d.div`
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 8px 7px;
  background: ${e=>e.$isDarkMode?"#1b1c1f":"#f6f7f9"};
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,He=d.h2`
  margin: 0;
  padding: 2px 4px;
  font-family: var(--font-family);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
`,qe=d(N)`
  justify-content: center;
  width: 100%;
  min-height: 46px;
  padding: 8px 10px;
  font-size: 13px;
  line-height: 1.25;
  text-align: center;
`,Ne=d.div`
  box-sizing: border-box;
  padding: 7px 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ve=d.button`
  position: absolute;
  top: 6px;
  right: 44px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-top: 3px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.18s ease, background 0.18s ease;

  &:hover { background: rgba(220, 50, 50, 0.9); }
  &:focus-visible { opacity: 1; }
`,Ze=d.button`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 22px;
  cursor: grab;
  touch-action: none;
  transition: background 0.18s ease;

  &:hover { background: rgba(0, 0, 0, 0.8); }
  &:active { cursor: grabbing; }
`,Je=d.label`
  position: absolute;
  top: 6px;
  right: ${e=>e.$withDelete?"76px":"44px"};
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 10px 0 8px;
  box-sizing: border-box;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background 0.18s ease;

  &:hover { background: rgba(0, 0, 0, 0.82); }
  /* Сам input розтягнутий на всю плашку — область дотику ≥ 32px; видимий квадрат малює SplitBox */
  input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
  input:disabled { cursor: not-allowed; }
  input:disabled ~ * { opacity: 0.55; }
`,Qe=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 2px solid #fff;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 12px;
  color: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;

  input:checked + & {
    background: ${We};
    border-color: ${We};
    color: #fff;
  }
  input:focus-visible + & { outline: 2px solid #fff; outline-offset: 2px; }
`,Ge=d(l)`
  position: relative;
  flex-shrink: 0;
  list-style: none;

  &:hover ${Ve} { opacity: 1; }
`,et=d.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 54px;
  height: 54px;
  background: ${e=>e.$active?"rgba(255,255,255,0.3)":"#ffffff"};
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transition: background 0.2s ease;

  svg {
    position: absolute;
    top: 9px;
    left: 9px;
    font-size: 17px;
    color: ${e=>e.$active?"#ffffff":"#202124"};
  }
`,tt=d.span`
  position: absolute;
  right: -6%;
  bottom: -16%;
  display: flex;
  font-size: 96px;
  color: rgba(255, 255, 255, 0.2);
  transform: rotate(-12deg);
  transition: transform 0.3s ease;
`,at=d.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
  pointer-events: none;
`,rt=d.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%) scale(2.4);
  filter: blur(22px) saturate(1.4);
  opacity: 0.45;
  pointer-events: none;
`,it=d.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-62%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: transform 0.3s ease;

  img { width: 36px; height: 36px; object-fit: contain; }
`,ot=d.span`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-62%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`,nt=d.span`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);

  strong, small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  strong { font-size: 15px; font-weight: 700; }
  small { font-size: 11px; opacity: 0.85; }
`,st=d.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  padding: 0;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  background: ${e=>e.$bg};
  color: #ffffff;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  outline: ${e=>e.$active?`2px solid ${We}`:"2px solid transparent"};
  outline-offset: 3px;
  transition: transform 0.2s ease, outline-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.7) 32%, rgba(0, 0, 0, 0.25) 58%, transparent 80%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    ${tt} { transform: rotate(-6deg) scale(1.06); }
    ${at} { transform: scale(1.05); }
    ${it} { transform: translateY(-62%) scale(1.08); }
  }
  &:focus-visible { outline: 2px solid ${We}; }
`,lt=d.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  border: 2px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.2)"};
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.65)":"rgba(0,0,0,0.5)"};
  font-size: 40px;
  cursor: pointer;
  transition: all 0.2s ease;

  span { font-size: 13px; font-weight: 600; letter-spacing: 0.01em; }

  &:hover, &:focus-visible {
    border-color: ${We};
    color: ${We};
    background: rgba(255, 179, 108, 0.08);
    outline: none;
  }
`,dt=d(ke)`
  flex-shrink: 0;
  margin-top: 0;
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 16 / 9;
  justify-content: center;
  gap: 5px;
  padding: 7px;
  border-width: 2px;

  input {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1.2;
  }

  button {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1.2;
  }
`,ct=d(Me)`
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.75)"};
`,pt=[{id:"ventusky",title:"Ventusky",subtitleKey:"climateMap.sources.ventuskySubtitle",Icon:C,bg:"linear-gradient(135deg, #1e3c72, #2a8bd8)",cover:"/assets/ventusky-Cp6sp0Oh.webp"},{id:"windy",title:"Windy",subtitleKey:"climateMap.sources.windySubtitle",Icon:v,bg:"linear-gradient(135deg, #3b1d8f, #1fa2b8)",cover:"/assets/windy-DYykK3_h.webp"},{id:"alerts-ua",titleKey:"climateMap.sources.alertsTitle",subtitleKey:"climateMap.sources.alertsSubtitle",Icon:L,bg:"linear-gradient(135deg, #5c1010, #d63333)",cover:"/assets/air-alerts-DKIULZZF.webp"},{id:"ukrainealarm",titleKey:"climateMap.sources.airTargetsTitle",subtitleKey:"climateMap.sources.airTargetsSubtitle",Icon:w,bg:"linear-gradient(135deg, #3a0d0d, #b8451f)",cover:"/assets/air-targets-ohZISqyy.webp"},{id:"excalidraw",title:"Excalidraw",subtitleKey:"climateMap.sources.excalidrawSubtitle",Icon:z,bg:"linear-gradient(135deg, #4b3fc4, #9d93f5)",cover:"/assets/excalidraw-B4vboi0k.webp"},{id:"saveecobot",title:"SaveEcoBot",subtitleKey:"climateMap.sources.saveEcoBotSubtitle",Icon:$,bg:"linear-gradient(135deg, #0f6b5f, #7cbf1e)",cover:"/assets/saveecobot-_APioVhl.webp"},{id:"airtraffic",titleKey:"climateMap.sources.airTrafficTitle",subtitle:"TheAirTraffic (ADS-B)",Icon:m,bg:"linear-gradient(135deg, #0b2545, #d98a0b)",cover:"/assets/air-traffic-uJUSz0WP.webp"},{id:"deepstate",title:"DeepState",subtitleKey:"climateMap.sources.deepStateSubtitle",Icon:h,bg:"linear-gradient(135deg, #1b2a3a, #3d6b4f)",cover:"/assets/deepstate-wsH-eTKB.webp"}],gt=pt.map(e=>e.id),xt=new Set(["alerts-ua","ukrainealarm","saveecobot","deepstate"]),bt=({item:e,isActive:t,onSelect:a,onDelete:i,splitAvailable:o,isSplitChecked:s,splitLocked:l,onToggleSplit:d,isDarkMode:c})=>{const{t:p}=r(),g=n(),{id:b,title:u,subtitle:f,Icon:m,bg:h,frame:w,cover:$,favicon:k}=e,[v,M]=(0,W.useState)(!1);return(0,O.jsxs)(Ge,{value:b,forwardedAs:"div",dragListener:!1,dragControls:g,children:[(0,O.jsxs)(st,{type:"button",$bg:h,$active:t,"aria-pressed":t,title:u,onClick:e=>a(b,e),children:[(0,O.jsx)(et,{$active:t,children:(0,O.jsx)(x,{})}),$?(0,O.jsx)(at,{src:$,alt:"",loading:"lazy",draggable:!1}):k&&!v?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(rt,{src:k,alt:"",draggable:!1}),(0,O.jsx)(it,{children:(0,O.jsx)("img",{src:k,alt:"",draggable:!1,referrerPolicy:"no-referrer",onError:()=>M(!0)})})]}):w?(0,O.jsx)(ot,{children:(u||"?").trim().charAt(0)}):(0,O.jsx)(tt,{children:(0,O.jsx)(m,{})}),(0,O.jsxs)(nt,{children:[(0,O.jsx)("strong",{children:u}),(0,O.jsx)("small",{children:f})]})]}),(0,O.jsx)(Ze,{type:"button","aria-label":p("climateMap.dragItem",{title:u}),title:p("climateMap.dragHint"),onPointerDown:e=>g.start(e),children:(0,O.jsx)(j,{})}),o&&(0,O.jsx)(Je,{$withDelete:!!w,children:(0,O.jsxs)(T,{content:p("climateMap.splitTooltip"),isDarkMode:c,children:[(0,O.jsx)("input",{type:"checkbox","aria-label":p("climateMap.splitTooltip"),checked:s,disabled:l,onChange:()=>d(b)}),(0,O.jsx)(Qe,{"aria-hidden":"true",children:(0,O.jsx)(D,{})}),(0,O.jsx)("span",{style:{marginLeft:6},children:p("climateMap.splitLabel")})]})}),w&&(0,O.jsx)(Ve,{type:"button","aria-label":p("climateMap.deleteItem",{title:u}),title:p("climateMap.delete"),onClick:()=>i(w),children:(0,O.jsx)(y,{})})]})},ut=({item:e,isActive:t,onSelect:a})=>{const{id:r,title:i,subtitle:o,Icon:n,bg:s,frame:l,cover:d,favicon:c}=e,[p,g]=(0,W.useState)(!1),b=(0,W.useRef)(null);return(0,W.useEffect)(()=>{const e=b.current,a=e?.parentElement;t&&a&&(a.scrollLeft=e.offsetLeft-12)},[t]),(0,O.jsx)(Ee,{ref:b,children:(0,O.jsxs)(st,{type:"button",$bg:s,$active:t,"aria-pressed":t,title:i,onClick:()=>a(r),children:[(0,O.jsx)(et,{$active:t,children:(0,O.jsx)(x,{})}),d?(0,O.jsx)(at,{src:d,alt:"",loading:"lazy",draggable:!1}):c&&!p?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(rt,{src:c,alt:"",draggable:!1}),(0,O.jsx)(it,{children:(0,O.jsx)("img",{src:c,alt:"",draggable:!1,referrerPolicy:"no-referrer",onError:()=>g(!0)})})]}):l?(0,O.jsx)(ot,{children:(i||"?").trim().charAt(0)}):(0,O.jsx)(tt,{children:(0,O.jsx)(n,{})}),(0,O.jsxs)(nt,{children:[(0,O.jsx)("strong",{children:i}),(0,O.jsx)("small",{children:o})]})]})})},ft=({value:e,onChange:t,titles:a})=>(0,O.jsx)("div",{role:"group",onDoubleClick:e=>e.stopPropagation(),style:{display:"flex",gap:2,padding:2,borderRadius:8,background:"rgba(255,255,255,0.08)"},children:[0,1].map(r=>(0,O.jsx)("button",{type:"button","aria-pressed":e===r,title:a[r],onClick:e=>{e.stopPropagation(),t(r)},style:{minWidth:28,padding:"4px 8px",border:"none",borderRadius:6,background:e===r?We:"transparent",color:e===r?"#1a0800":"rgba(255,255,255,0.75)",font:"600 12px system-ui, sans-serif",cursor:"pointer"},children:r+1},r))}),mt=e=>{let t=0;for(const a of e)t=(31*t+a.charCodeAt(0))%360;return`linear-gradient(135deg, hsl(${t}, 50%, 26%), hsl(${(t+40)%360}, 60%, 46%))`},ht=e=>{try{return`https://www.google.com/s2/favicons?domain=${new URL(e).hostname}&sz=128`}catch{return null}},wt=e=>{try{return new URL(e).hostname.replace(/^www\./,"")}catch{return null}},yt=({isDarkMode:e,isStickyBgMode:t})=>{const{t:a,i18n:i}=r(),n="uk"===(i.resolvedLanguage||i.language),[s,l]=(0,W.useState)(48.379),[d,c]=(0,W.useState)(31.165),[p,g]=(0,W.useState)(5),[x,m]=(0,W.useState)(!1),[h,w]=(0,W.useState)(!0),[$,v]=(0,W.useState)("wind"),[j,D]=(0,W.useState)(!1),[z,C]=(0,W.useState)(()=>"undefined"==typeof navigator||navigator.onLine),[L,A]=(0,W.useState)(!1),[K,T]=(0,W.useState)(!1),[Z,me]=(0,W.useState)(!1),[he,Ee]=(0,W.useState)(null),[Ie,Pe]=(0,W.useState)(0),[_e,Ye]=(0,W.useState)(!0),[Ae,Ke]=(0,W.useState)("ventusky"),[We,Ve]=(0,W.useState)(!1),[Ze,Je]=(0,W.useState)("auto"),[Qe,Ge]=(0,W.useState)(!1),et="always"===Ze||"auto"===Ze&&!Qe;(0,W.useEffect)(()=>{const e=window.matchMedia("(pointer: coarse)"),t=()=>Ge(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const[tt,at]=(0,W.useState)(()=>"undefined"!=typeof window&&window.matchMedia(Re).matches),[rt,it]=(0,W.useState)(!1),[ot,nt]=(0,W.useState)("windy"),[st,yt]=(0,W.useState)(!0),[$t,kt]=(0,W.useState)(()=>"undefined"!=typeof window&&window.matchMedia(Xe).matches);(0,W.useEffect)(()=>{const e=window.matchMedia(Xe),t=()=>kt(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const vt=$t&&rt,[Mt,jt]=(0,W.useState)(!1),[Dt,St]=(0,W.useState)([]),[zt,Et]=(0,W.useState)("");(0,W.useEffect)(()=>{const e=window.matchMedia(Re),t=()=>at(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const[Ct,Lt]=(0,W.useState)(()=>"undefined"==typeof window?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[It,Pt]=(0,W.useState)({width:320,height:220}),_t=(0,W.useRef)(null),Yt=(0,W.useRef)(null),At=(0,W.useRef)(null),Kt=(0,W.useRef)(null),[Ft,Tt]=(0,W.useState)([]),[Rt,Wt]=(0,W.useState)(""),[Xt,Ot]=(0,W.useState)(""),[Bt,Ut]=(0,W.useState)(!1),Ht=(0,W.useMemo)(()=>{const e=[...pt.filter(e=>n||!xt.has(e.id)).map(e=>({...e,title:e.titleKey?a(e.titleKey):e.title,subtitle:e.subtitleKey?a(e.subtitleKey):e.subtitle})),...Ft.map(e=>({id:e.id,title:e.title,subtitle:wt(e.url)||a("climateMap.customWidget"),Icon:P,bg:mt(e.id),favicon:ht(e.url),frame:e}))],t=new Map(e.map(e=>[e.id,e])),r=Dt.filter(e=>t.has(e)).map(e=>t.get(e)),i=new Set(r.map(e=>e.id));return[...r,...e.filter(e=>!i.has(e.id))]},[Ft,Dt,a,n]),qt=(0,W.useMemo)(()=>{const e=zt.trim().toLowerCase();return e?Ht.filter(t=>[t.title,t.subtitle,t.frame?.url].some(t=>t&&t.toLowerCase().includes(e))):Ht},[Ht,zt]),[Nt,Vt]=(0,W.useState)(!1),Zt=(0,W.useRef)(null),Jt=!j||h||!z,Qt=F();(0,W.useEffect)(()=>{const e=Zt.current;if(e)if(Jt&&Qt){const t=e.play();void 0!==t&&t.catch(()=>{})}else e.pause()},[Jt,Qt,Nt,Z]),(0,W.useEffect)(()=>{const e=()=>{A(!!document.fullscreenElement),T(!!document.fullscreenElement&&document.fullscreenElement===_t.current)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]),(0,W.useEffect)(()=>{const e=()=>{C("undefined"==typeof navigator||navigator.onLine)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}},[]),(0,W.useEffect)(()=>()=>he?.close(),[he]);const Gt=async e=>{Ke(e);try{await R.default.setItem("selected_climate_provider",e)}catch(t){console.error("Error saving climate provider:",t)}};(0,W.useEffect)(()=>{n||(xt.has(Ae)&&Ke("ventusky"),xt.has(ot)&&nt("windy"===Ae?"ventusky":"windy"))},[n,Ae,ot]);const ea=async e=>{nt(e);try{await R.default.setItem("climate_second_provider",e)}catch(t){console.error("Error saving second provider:",t)}},ta=async e=>{it(e);try{await R.default.setItem("climate_split_enabled",e)}catch(t){console.error("Error saving split mode:",t)}},aa=async()=>{D(!0),_.success(a("climateMap.mapEnabled"),{icon:"🗺️",duration:1800});try{await R.default.setItem("map_last_unlocked_time",Date.now())}catch(e){console.error("Error saving map unlock time:",e)}},ra=async()=>{D(!1),_(a("climateMap.mapDisabled"),{icon:"🔒",duration:1800});try{await R.default.removeItem("map_last_unlocked_time")}catch(e){console.error("Error removing map unlock time:",e)}},ia=a("climateMap.settingsTitle"),oa=(0,W.useMemo)(()=>[a(tt?"climateMap.rotating.shortcuts":"climateMap.rotating.addFrames"),a("climateMap.rotating.pinLocation"),a("climateMap.rotating.mapsAndFeatures"),a("climateMap.rotating.miniPlayer"),a("climateMap.rotating.fullscreen")],[tt,a]),[na,sa]=(0,W.useState)(0),la=(0,O.jsxs)(we,{children:[(0,O.jsx)("strong",{children:ia}),(0,O.jsx)(ye,{children:oa[na]},na)]});(0,W.useEffect)(()=>{const e=setInterval(()=>{sa(e=>(e+1)%oa.length)},3e3);return()=>clearInterval(e)},[oa]),(0,W.useEffect)(()=>{(async()=>{try{const e=await R.default.getItem("climate_custom_user_frames"),t=Array.isArray(e)?e:[];Tt(t);const a=await R.default.getItem("climate_source_order");Array.isArray(a)&&St(a);const r=[...gt,...t.map(e=>e.id)],i=e=>{e&&r.includes(e)&&Ke(e)};i(await R.default.getItem("selected_climate_provider"));const o=await R.default.getItem("climate_second_provider");o&&r.includes(o)&&nt(o);const n=await R.default.getItem("climate_split_enabled");"boolean"==typeof n&&it(n);const s=await R.default.getItem("climate_keyboard_shortcut_mode");["none","auto","always"].includes(s)&&Je(s);const d=await R.default.getItem("pinned_map_location");d&&(l(d.lat),c(d.lon),g(d.zoom),d.overlay&&v(d.overlay),i(d.provider),Ve(!0));const p=await R.default.getItem("map_last_unlocked_time");p&&Date.now()-p<6048e5&&D(!0)}catch(e){console.error("Error loading map data:",e)}})()},[]);const da=async e=>{Tt(e);try{await R.default.setItem("climate_custom_user_frames",e)}catch(t){console.error("Error saving custom frames:",t)}},ca=e=>{const t=Ft.filter(t=>t.id!==e);da(t),Ae===e&&Gt("ventusky"),ot===e&&ea("windy")},pa=async e=>{if(e.preventDefault(),!Xt.trim()||Bt)return;let t=Xt.trim();const r=t.match(/src=["']([^"']+)["']/i);if(r&&(t=r[1]),!t.startsWith("http://")&&!t.startsWith("https://"))return void _.error(a("climateMap.invalidUrl"));Ut(!0);const i=await(async e=>{const t=`/api/frame-check?url=${encodeURIComponent(e)}`;try{const e=await fetch(t,{signal:AbortSignal.timeout(1e4)});if(!e.ok||!e.headers.get("content-type")?.includes("application/json"))return null;const a=await e.json();return"boolean"==typeof a.embeddable?a.embeddable:null}catch{return null}})(t);if(Ut(!1),!1===i)return void _.error(a("climateMap.frameBlocked",{host:wt(t)||t}),{duration:6e3});const o=Rt.trim()||a("climateMap.customWidget"),n={id:"custom-"+Date.now(),title:o,url:t},s=[...Ft,n];da(s),Ke(n.id),Wt(""),Ot(""),jt(!1)},ga=()=>{jt(!1),Wt(""),Ot("")},xa=async e=>{St(e);try{await R.default.setItem("climate_source_order",e)}catch(t){console.error("Error saving source order:",t)}},ba=(0,O.jsxs)(Se,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,O.jsx)(u,{}),(0,O.jsx)("input",{type:"search",value:zt,onChange:e=>Et(e.target.value),onKeyDown:e=>"Escape"===e.key&&Et(""),placeholder:a("climateMap.searchSources"),"aria-label":a("climateMap.searchSources")}),zt&&(0,O.jsx)("button",{type:"button","aria-label":a("climateMap.clearSearch"),onClick:()=>Et(""),children:(0,O.jsx)(y,{})})]}),ua=e=>{if(vt)e===ot?ta(!1):e===Ae?(Gt(ot),ta(!1)):ea(e);else{if(e===Ae)return;ea(e),ta(!0)}j||aa()},fa=e=>{vt&&e===ot&&ea(Ae),Gt(e),j||aa()},ma=e=>{window.confirm(a("climateMap.confirmDeleteFrame",{title:e.title}))&&ca(e.id)},ha=async e=>{e&&e.stopPropagation();try{await R.default.setItem("pinned_map_location",{lat:s,lon:d,zoom:p,overlay:$,provider:Ae}),await R.default.setItem("selected_climate_provider",Ae),Ve(!0),_.success(a("climateMap.locationPinned"),{duration:3e3,icon:"📍"})}catch(t){console.error("Error pinning location:",t),_.error(a("climateMap.pinError"))}},wa=async e=>{e&&e.stopPropagation();try{await R.default.removeItem("pinned_map_location"),Ve(!1),_(a("climateMap.locationUnpinned"),{icon:"📌",duration:2e3})}catch(t){console.error("Error unpinning location:",t)}},ya=async()=>{if(window.documentPictureInPicture)try{const e=await window.documentPictureInPicture.requestWindow({width:400,height:300});e.document.body.style.margin="0",e.document.body.style.overflow="hidden",e.document.body.style.background="#1a1a1a",e.addEventListener("pagehide",()=>{Ee(null),me(!1)}),Ee(e),me(!0)}catch(e){console.error("PiP API failed:",e),me(!0)}else me(!0)};(0,W.useEffect)(()=>{const e=e=>{if(At.current){const{startX:t,startY:a,originX:r,originY:i}=At.current,o=Math.max(8,Math.min(window.innerWidth-120,r+e.clientX-t)),n=Math.max(8,Math.min(window.innerHeight-80,i+e.clientY-a));Lt({x:o,y:n})}if(Kt.current){const{startX:t,startY:a,width:r,height:i}=Kt.current,o=Math.max(260,Math.min(window.innerWidth-24,r+e.clientX-t)),n=Math.max(200,Math.min(window.innerHeight-24,i+e.clientY-a));Pt({width:o,height:n})}},t=()=>{At.current=null,Kt.current=null};return window.addEventListener("pointermove",e),window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",t),window.removeEventListener("pointercancel",t)}},[]);const $a=(e=_t)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.current?.requestFullscreen&&e.current.requestFullscreen()};(0,W.useEffect)(()=>{const e=e=>{if("Escape"===e.key&&x&&"INPUT"!==e.target.tagName)m(!1);else if(!["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)&&e.ctrlKey&&e.altKey&&!e.shiftKey&&!e.metaKey)switch(e.code){case"KeyM":e.preventDefault(),j?ra():aa();break;case"KeyF":e.preventDefault(),$a();break;case"KeyP":e.preventDefault(),Z?he?he.close():me(!1):ya();break;case"KeyS":{e.preventDefault();const t=Ht.map(e=>e.id);Ke(e=>{const a=(t.indexOf(e)+1)%t.length;return t[a]});break}case"KeyO":e.preventDefault(),We?wa():ha();break;case"KeyD":if(!$t)break;e.preventDefault(),ta(!rt);break;case"KeyK":e.preventDefault(),m(e=>!e)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Z,he,Ft,Ht,j,We,s,d,p,$,Ae,x,$t,rt]);const ka=e=>{if("windy"===e)return`https://embed.windy.com/embed2.html?lat=${s}&lon=${d}&zoom=${p}&level=surface&overlay=${$}&menu=&message=true&marker=`;if("ventusky"===e){let e=$;return"rain"===$&&(e="rain-3h"),"temp"===$&&(e="temperature"),"clouds"===$&&(e="cloud-cover"),`https://www.ventusky.com/?p=${s};${d};${p}&l=${e}`}if("alerts-ua"===e)return"https://alerts.in.ua/";if("ukrainealarm"===e)return"https://map.ukrainealarm.com/";if("excalidraw"===e)return"https://excalidraw.com/";if("saveecobot"===e)return"https://www.saveecobot.com/maps";if("airtraffic"===e)return`https://globe.theairtraffic.com/?lat=${s}&lon=${d}&zoom=${p}`;if("deepstate"===e)return"https://deepstatemap.live/";const t=Ft.find(t=>t.id===e);if(t)return t.url;let a=$;return"rain"===$&&(a="rain-3h"),"temp"===$&&(a="temperature"),"clouds"===$&&(a="cloud-cover"),`https://www.ventusky.com/?p=${s};${d};${p}&l=${a}`},va=(0,W.useMemo)(()=>ka(Ae),[Ae,s,d,p,$,Ft]),Ma=(0,W.useMemo)(()=>ka(ot),[ot,s,d,p,$,Ft]);(0,W.useEffect)(()=>{w(z)},[Ae,s,d,p,$,z,Z]),(0,W.useEffect)(()=>{yt(z)},[ot,s,d,p,$,z,vt,Z]);const ja=vt&&1===Ie?Ma:va,Da=[Ae,ot].map(e=>Ht.find(t=>t.id===e)?.title),Sa=vt&&(0,O.jsx)(ft,{value:Ie,onChange:Pe,titles:Da});(0,W.useEffect)(()=>{Ye(z)},[ja,z,Z]);const za=K&&!Z;return(0,O.jsxs)(U,{children:[!tt&&(0,O.jsx)(B,{$isDarkMode:e,$isStickyBgMode:t,children:a("climateMap.title")}),(0,O.jsx)(Y,{position:"bottom-center",toastOptions:{duration:2500,style:{background:e?"rgba(20,24,36,0.97)":"rgba(255,252,245,0.98)",color:e?"#f0e8d8":"#2a1000",border:e?"1px solid rgba(255,179,108,0.25)":"1px solid rgba(200,100,0,0.2)",borderRadius:"10px",fontSize:"13px",fontWeight:500,boxShadow:e?"0 8px 32px rgba(0,0,0,0.5)":"0 8px 32px rgba(0,0,0,0.12)",padding:"10px 14px"},success:{iconTheme:{primary:"#5dca70",secondary:e?"#111":"#fff"}},error:{iconTheme:{primary:"#e07070",secondary:e?"#111":"#fff"}}}}),!tt&&(0,O.jsx)(N,{$isDarkMode:e,type:"button",onClick:()=>m(!0),"aria-label":ia,children:la}),(0,O.jsxs)(Oe,{children:[(0,O.jsxs)(H,{ref:_t,$isFullscreen:L,onClick:()=>!j&&aa(),children:[x&&(0,O.jsx)(V,{$isDarkMode:e,onClick:()=>m(!1),children:(0,O.jsxs)(J,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,O.jsxs)(Q,{$isDarkMode:e,children:[(0,O.jsx)("div",{children:(0,O.jsx)("h2",{children:(0,O.jsx)("span",{style:{color:"#ffb36c"},children:ia})})}),(0,O.jsx)(re,{$isDarkMode:e,type:"button",onClick:()=>m(!1),children:"×"})]}),(0,O.jsxs)(Fe,{children:[(0,O.jsxs)(Le,{$isDarkMode:e,children:[(0,O.jsx)(I,{}),(0,O.jsxs)(G,{children:[(0,O.jsx)("strong",{children:a("climateMap.shortcuts")}),(0,O.jsx)("span",{children:a("climateMap.shortcutsDesc")})]}),(0,O.jsxs)(Te,{$isDarkMode:e,value:Ze,onChange:async e=>{const t=e.target.value;Je(t);try{await R.default.setItem("climate_keyboard_shortcut_mode",t)}catch(a){console.error("Error saving keyboard shortcut mode:",a)}},children:[(0,O.jsx)("option",{value:"none",children:a("climateMap.shortcutsNone")}),(0,O.jsx)("option",{value:"auto",children:a("climateMap.shortcutsAuto")}),(0,O.jsx)("option",{value:"always",children:a("climateMap.shortcutsAlways")})]})]}),(0,O.jsx)(ee,{$isDarkMode:e,$hideOnDesktop:!0,children:a("climateMap.mapLabel")}),(0,O.jsxs)(te,{$isDarkMode:e,$active:j,$danger:j,type:"button",onClick:()=>j?ra():aa(),children:[(0,O.jsx)(f,{}),(0,O.jsxs)(G,{children:[(0,O.jsx)("strong",{children:a(j?"climateMap.deactivateMap":"climateMap.activateMap")}),(0,O.jsx)("span",{children:a(j?"climateMap.deactivateMapDesc":"climateMap.activateMapDesc")}),(0,O.jsx)(ae,{$on:j,children:j?`● ${a("climateMap.statusOn")}`:`○ ${a("climateMap.statusOff")}`})]}),(0,O.jsx)(q,{$visible:et,children:"Ctrl + Alt + M"})]}),(0,O.jsxs)(te,{$isDarkMode:e,$active:We,type:"button",onClick:We?wa:ha,children:[(0,O.jsx)(M,{}),(0,O.jsxs)(G,{children:[(0,O.jsx)("strong",{children:a(We?"climateMap.unpinLocation":"climateMap.pinLocation")}),(0,O.jsx)("span",{children:a(We?"climateMap.unpinLocationDesc":"climateMap.pinLocationDesc")}),(0,O.jsx)(ae,{$on:We,children:We?`● ${a("climateMap.statusPinned")}`:`○ ${a("climateMap.statusUnpinned")}`})]}),(0,O.jsx)(q,{$visible:et,children:"Ctrl + Alt + O"})]}),(0,O.jsxs)(te,{$isDarkMode:e,type:"button",onClick:()=>$a(),children:[(0,O.jsx)(k,{}),(0,O.jsxs)(G,{children:[(0,O.jsx)("strong",{children:a(L?"climateMap.collapseMap":"climateMap.openFullscreen")}),(0,O.jsx)("span",{children:a("climateMap.fullscreenDesc")})]}),(0,O.jsx)(q,{$visible:et,children:"Ctrl + Alt + F"})]}),(0,O.jsxs)(te,{$isDarkMode:e,type:"button",onClick:ya,children:[(0,O.jsx)(b,{}),(0,O.jsxs)(G,{children:[(0,O.jsx)("strong",{children:a("climateMap.miniPlayer")}),(0,O.jsx)("span",{children:a("climateMap.miniPlayerDesc")})]}),(0,O.jsx)(q,{$visible:et,children:"Ctrl + Alt + P"})]})]}),!tt&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(ee,{$isDarkMode:e,children:a("climateMap.mapSource")}),(0,O.jsxs)(je,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,O.jsxs)(te,{$isDarkMode:e,style:{background:"none",border:"none",borderRadius:0,margin:0,padding:"10px 12px",pointerEvents:"none"},type:"button",children:[(0,O.jsx)(E,{}),(0,O.jsxs)(G,{children:[(0,O.jsx)("strong",{children:a("climateMap.mapSource")}),(0,O.jsx)("span",{children:a("climateMap.mapSourceDesc")})]}),(0,O.jsx)(q,{$visible:et,children:"Ctrl + Alt + S"})]}),(0,O.jsx)("div",{style:{padding:"0 12px 2px"},children:ba}),(0,O.jsxs)(De,{$isDarkMode:e,"aria-label":a("climateMap.sourcesAria"),children:[0===qt.length&&(0,O.jsx)(ze,{$isDarkMode:e,children:a("climateMap.noSourcesFound")}),qt.map(e=>(0,O.jsx)(ut,{item:e,isActive:Ae===e.id,onSelect:Gt},e.id))]})]}),(0,O.jsx)(ee,{$isDarkMode:e,children:a("climateMap.customFrame")}),(0,O.jsxs)(ke,{$isDarkMode:e,onSubmit:pa,onClick:e=>e.stopPropagation(),children:[(0,O.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:a("climateMap.titlePlaceholder"),value:Rt,onChange:e=>Wt(e.target.value)}),(0,O.jsxs)($e,{children:[(0,O.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:a("climateMap.urlPlaceholder"),value:Xt,onChange:e=>Ot(e.target.value),style:{width:"100%",paddingRight:"88px"},required:!0}),(0,O.jsx)(Me,{type:"submit",disabled:Bt,style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px"},children:a(Bt?"climateMap.frameChecking":"climateMap.add")})]}),Ft.length>0&&(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,O.jsx)("span",{style:{fontSize:"10px",color:e?"rgba(255,255,255,0.35)":"rgba(100,50,0,0.45)",letterSpacing:"0.05em",textTransform:"uppercase"},children:a("climateMap.saved")}),Ft.map(t=>(0,O.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",padding:"6px 10px",borderRadius:"7px",border:e?"1px solid rgba(255,255,255,0.07)":"1px solid rgba(0,0,0,0.08)"},children:[(0,O.jsx)("span",{style:{fontSize:"12px",color:e?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.8)"},children:t.title}),(0,O.jsx)("button",{type:"button",onClick:()=>ca(t.id),style:{background:"transparent",border:"none",color:"rgba(255,80,80,0.7)",cursor:"pointer",fontSize:"13px",padding:"2px 4px",borderRadius:"4px"},title:a("climateMap.delete"),children:"🗑️"})]},t.id))]})]})]})]})}),Z?(0,O.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:a("climateMap.closeMiniPlayerHint")}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(se,{"aria-hidden":!Jt,style:{visibility:Jt?"visible":"hidden"},children:[!Nt&&(0,O.jsx)(le,{children:(0,O.jsx)(de,{ref:Zt,src:"/assets/kate-and-domino-oaIgeWU2.webm",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onCanPlay:e=>{if(Jt){const t=e.target.play();void 0!==t&&t.catch(()=>{})}},onError:()=>Vt(!0)})}),(0,O.jsx)("p",{style:{fontSize:"16px"},children:a(z?j?"climateMap.loading":"climateMap.clickToActivate":"climateMap.checkInternet")}),(0,O.jsx)("p",{children:a("climateMap.credits")}),(0,O.jsx)("p",{children:a("climateMap.settingsHint")})]}),(0,O.jsxs)(oe,{$split:vt,$bottomInset:za?124:0,children:[(0,O.jsx)(ne,{children:(0,O.jsx)(ie,{"aria-label":"Weather Map",src:j&&z?va:void 0,$isLoading:h,$isReady:j,onLoad:()=>w(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})}),vt&&(0,O.jsx)(ne,{children:(0,O.jsx)(ie,{"aria-label":`Weather Map (${a("climateMap.secondFrame")})`,src:j&&z?Ma:void 0,$isLoading:st,$isReady:j,onLoad:()=>yt(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})})]})]}),za&&(0,O.jsx)(Ce,{$isDarkMode:e,"aria-label":a("climateMap.sourcesAria"),onWheel:e=>{Math.abs(e.deltaY)>Math.abs(e.deltaX)&&(e.currentTarget.scrollLeft+=e.deltaY)},children:Ht.map(e=>(0,O.jsx)(ut,{item:e,isActive:Ae===e.id||vt&&ot===e.id,onSelect:fa},e.id))})]}),tt&&(0,O.jsxs)(Be,{$isDarkMode:e,"aria-label":a("climateMap.sourcesAria"),layoutScroll:!0,children:[(0,O.jsxs)(Ue,{$isDarkMode:e,children:[(0,O.jsx)(He,{$isDarkMode:e,children:a("climateMap.title")}),(0,O.jsx)(qe,{$isDarkMode:e,type:"button",onClick:()=>m(!0),"aria-label":ia,children:la})]}),(0,O.jsxs)(Ne,{children:[ba,0===qt.length&&(0,O.jsx)(ze,{$isDarkMode:e,children:a("climateMap.noSourcesFound")}),(0,O.jsx)(o,{axis:"y",as:"div",values:qt.map(e=>e.id),onReorder:e=>{if(qt.length===Ht.length)return xa(e);const t=new Set(e),a=[...e];xa(Ht.map(e=>t.has(e.id)?a.shift():e.id))},style:{display:"flex",flexDirection:"column",gap:"16px",margin:0,padding:0},children:qt.map(t=>(0,O.jsx)(bt,{item:t,isActive:Ae===t.id||vt&&ot===t.id,onSelect:fa,onDelete:ma,splitAvailable:$t,isSplitChecked:vt&&(t.id===Ae||t.id===ot),splitLocked:!vt&&t.id===Ae,onToggleSplit:ua,isDarkMode:e},t.id))}),Mt?(0,O.jsxs)(dt,{$isDarkMode:e,onSubmit:pa,onKeyDown:e=>"Escape"===e.key&&ga(),children:[(0,O.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:a("climateMap.titlePlaceholderShort"),value:Rt,onChange:e=>Wt(e.target.value),autoFocus:!0}),(0,O.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:a("climateMap.urlPlaceholderShort"),value:Xt,onChange:e=>Ot(e.target.value),required:!0}),(0,O.jsxs)("div",{style:{display:"flex",gap:"6px"},children:[(0,O.jsx)(Me,{type:"submit",style:{flex:1},disabled:Bt,children:a(Bt?"climateMap.frameChecking":"climateMap.add")}),(0,O.jsx)(ct,{$isDarkMode:e,type:"button",onClick:ga,children:a("climateMap.cancel")})]})]}):(0,O.jsxs)(lt,{$isDarkMode:e,type:"button","aria-label":a("climateMap.addOwnFrame"),title:a("climateMap.addOwnFrame"),onClick:()=>jt(!0),children:[(0,O.jsx)(S,{}),(0,O.jsx)("span",{children:a("climateMap.addYourFrame")})]})]})]})]}),he?(0,X.createPortal)((0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[Sa&&(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:6,background:"#111"},children:Sa}),(0,O.jsx)(ie,{"aria-label":"Weather Map (PiP)",src:ja,$isLoading:_e,$isReady:!0,onLoad:()=>Ye(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",style:{width:"100%",flex:1,minHeight:0,border:"none"}})]}),he.document.body):Z&&(0,O.jsxs)(pe,{ref:Yt,onDoubleClick:()=>me(!1),style:{left:Ct.x,top:Ct.y,width:It.width,height:It.height},children:[(0,O.jsxs)(ge,{style:{touchAction:"none"},onPointerDown:e=>{e.target.closest("button")||(e.preventDefault(),At.current={startX:e.clientX,startY:e.clientY,originX:Ct.x,originY:Ct.y})},children:[(0,O.jsx)(xe,{children:a("climateMap.miniMapTitle")}),(0,O.jsxs)(be,{children:[Sa,(0,O.jsx)(ce,{onClick:e=>{e.stopPropagation(),$a(Yt)},children:L?a("climateMap.collapse"):"⛶"}),(0,O.jsx)(ce,{onClick:e=>{e.stopPropagation(),me(!1)},children:"✕"})]})]}),(0,O.jsxs)(ue,{children:[_e&&(0,O.jsx)(se,{children:(0,O.jsx)("p",{children:a("climateMap.loading")})}),(0,O.jsx)(ie,{"aria-label":"Weather Map Mini",src:ja,$isLoading:_e,$isReady:!0,onLoad:()=>Ye(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,O.jsx)(fe,{style:{touchAction:"none"},onPointerDown:e=>{e.preventDefault(),e.stopPropagation(),Kt.current={startX:e.clientX,startY:e.clientY,width:It.width,height:It.height}}})]})]})]})};export{yt as default};