import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as t,t as a}from"./vendor-i18n-4NhlWQFf.js";import{n as r}from"./vendor-react-DlsUijjD.js";import{i,n as o,r as n,s,t as l}from"./vendor-motion-Bh6mtAYz.js";import{n as d}from"./vendor-utils-BcX-d9lY.js";import{Bn as c,Bt as p,Kn as g,Kt as x,Pt as b,Qt as u,Ut as f,Vn as m,Wt as h,Xt as w,Yt as v,et as y,fn as $,j as k,kt as M,mi as j,n as D,pt as S,r as z,sn as E,sr as C}from"./vendor-ui-BcfDBn2Z.js";import{B as L,H as I,V as P,f as _,h as Y,p as A,t as K,v as F}from"./index-2DOTQNJp.js";var T=e(t()),R=e(r()),W=e(d()),B=s(),X=I.div`
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
  ${e=>e.$isStickyBgMode?P`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:P`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,U=I.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,O=I.div`
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
    background-image: url(${Y});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`,H=I.kbd`
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
`,q=I.button`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;
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
`,N=I.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: flex-start;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(2, 5, 12, 0.55)":"rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,V="\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 179, 108, 0.25) transparent;\n  &::-webkit-scrollbar { width: 4px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb {\n    background: rgba(255, 179, 108, 0.25);\n    border-radius: 4px;\n  }\n",Z=I.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 0 10px 16px;
  background: ${e=>e.$isDarkMode?"linear-gradient(170deg, rgba(10,16,30,0.97) 0%, rgba(15,22,40,0.97) 60%, rgba(18,14,8,0.97) 100%)":"linear-gradient(170deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 60%, rgba(255,243,220,0.99) 100%)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.18)":"rgba(200,100,0,0.2)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  box-shadow: ${e=>e.$isDarkMode?"0 -8px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset":"0 -8px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8) inset"};
  ${V}
`,J=I.div`
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
`,Q=I.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`,G=I.div`
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
`,ee=I.button`
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
`,te=I.span`
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
`,ae=I.button`
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
`,re=I.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${e=>e.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?"0":"1"};
`,ie=I.div`
  position: absolute;
  inset: 0 0 ${e=>e.$bottomInset||0}px 0;
  display: grid;
  grid-template-columns: ${e=>e.$split?"repeat(2, minmax(0, 1fr))":"minmax(0, 1fr)"};
  gap: ${e=>e.$split?"2px":"0"};
`,oe=I.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`,ne=I.div`
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
`,se=I.div`
  position: relative;
  width: 340px;
  height: 210px;
  margin-bottom: -10px;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 18%;
    right: 18%;
    bottom: -4%;
    height: 28%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.76) 48%,
      rgba(0, 0, 0, 0.76) 88%,
      transparent 100%
    );
    filter: blur(10px);
    pointer-events: none;
  }
`,le=I.video`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: screen;
  opacity: 0.96;
  transition: opacity 300ms ease, filter 300ms ease;
  filter: brightness(1.04);
`,de=I.button`
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
`,ce=I.div`
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
`,pe=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,ge=I.div`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,xe=I.div`
  display: flex;
  gap: 6px;
`,be=I.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,ue=I.div`
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
`,fe=L`
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(4px); }
`,me=I.span`
  display: inline-block;
  animation: ${fe} 3s ease-in-out infinite;
  color: #ffb36c;
  font-weight: 700;
`,he=I.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,we=I.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 12px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,179,108,0.04)":"rgba(255,179,108,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.14)":"rgba(200,100,0,0.18)"};
`,ve=I.input`
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
`,ye=I.button`
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
`,$e=I.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
`,ke=I.div`
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
`,Me=I.label`
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
`,je=I.p`
  margin: 0;
  padding: 14px 4px;
  flex: 1 0 100%;
  text-align: center;
  font-size: 12px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.45)":"rgba(100,50,0,0.55)"};
`,De=I.div`
  flex: 0 0 min(72%, 260px);
  scroll-snap-align: start;
`,Se=I(ke)`
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

  & > ${De} { flex-basis: 176px; }
`,ze=I.div`
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
`,Ee=L`
  0% { opacity: 0; transform: scale(0.5) rotate(-12deg); }
  70% { opacity: 1; transform: scale(1.12) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
`,Ce=L`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(4px) scaleY(0.92); }
  60% { transform: translateY(-2px); }
`,Le=L`
  0%, 100% { transform: rotate(0); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(8deg); }
  60% { transform: rotate(-5deg); }
  80% { transform: rotate(3deg); }
`,Ie=L`
  0% { transform: translateY(0) rotate(0); }
  35% { transform: translateY(-8px) rotate(-15deg); }
  70% { transform: translateY(2px) rotate(4deg); }
  100% { transform: translateY(0) rotate(0); }
`,Pe=L`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
`,_e=L`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(4px, -4px); }
`,Ye=I.div`
  && > * > svg { transform-origin: center; }
  && > :nth-child(1):hover > svg { animation: ${Ce} 0.5s ease; }
  && > :nth-child(3):hover > svg { animation: ${Le} 0.6s ease; }
  && > :nth-child(4):hover > svg { animation: ${Ie} 0.6s ease; transform-origin: bottom left; }
  && > :nth-child(5):hover > svg { animation: ${Pe} 0.6s ease; }
  && > :nth-child(6):hover > svg { animation: ${_e} 0.6s ease; }

  @media (min-width: 1024px) {
    && > * > svg { animation: ${Ee} 0.5s ease both; }
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
    && ${Q} { flex: 1 0 auto; align-items: center; }
    && strong { font-size: 15px; }
    && span { font-size: 11.5px; }
    && ${te} { align-self: center; }
    && ${H}, && select { margin: auto 0 0; }
  }
`,Ae=I.select`
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
`,Ke="(min-width: 768px)",Fe="#ffb36c",Te="(min-width: 1200px) and (pointer: fine), (min-width: 1024px) and (orientation: landscape) and (pointer: coarse)",Re=I.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(190px, 22%, 260px);
  gap: 5px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  & > ${O} {
    margin: 0;
    min-width: 0;
  }

  /* На телефонах бічної панелі немає — порожня колонка стискала карту у вузьку смужку */
  @media (max-width: 767.98px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,We=I(i.aside)`
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
  ${V}
`,Be=I.div`
  box-sizing: border-box;
  padding: 7px 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Xe=I.button`
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
`,Ue=I.button`
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
`,Oe=I.label`
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
`,He=I.span`
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
    background: ${Fe};
    border-color: ${Fe};
    color: #fff;
  }
  input:focus-visible + & { outline: 2px solid #fff; outline-offset: 2px; }
`,qe=I(l)`
  position: relative;
  flex-shrink: 0;
  list-style: none;

  &:hover ${Xe} { opacity: 1; }
`,Ne=I.span`
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
`,Ve=I.span`
  position: absolute;
  right: -6%;
  bottom: -16%;
  display: flex;
  font-size: 96px;
  color: rgba(255, 255, 255, 0.2);
  transform: rotate(-12deg);
  transition: transform 0.3s ease;
`,Ze=I.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
  pointer-events: none;
`,Je=I.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%) scale(2.4);
  filter: blur(22px) saturate(1.4);
  opacity: 0.45;
  pointer-events: none;
`,Qe=I.span`
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
`,Ge=I.span`
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
`,et=I.span`
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
`,tt=I.button`
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
  outline: ${e=>e.$active?`2px solid ${Fe}`:"2px solid transparent"};
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
    ${Ve} { transform: rotate(-6deg) scale(1.06); }
    ${Ze} { transform: scale(1.05); }
    ${Qe} { transform: translateY(-62%) scale(1.08); }
  }
  &:focus-visible { outline: 2px solid ${Fe}; }
`,at=I.button`
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
    border-color: ${Fe};
    color: ${Fe};
    background: rgba(255, 179, 108, 0.08);
    outline: none;
  }
`,rt=I(we)`
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
`,it=I(ye)`
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.75)"};
`,ot=[{id:"ventusky",title:"Ventusky",subtitleKey:"climateMap.sources.ventuskySubtitle",Icon:b,bg:"linear-gradient(135deg, #1e3c72, #2a8bd8)",cover:"/assets/ventusky-Cp6sp0Oh.webp"},{id:"windy",title:"Windy",subtitleKey:"climateMap.sources.windySubtitle",Icon:E,bg:"linear-gradient(135deg, #3b1d8f, #1fa2b8)",cover:"/assets/windy-DYykK3_h.webp"},{id:"alerts-ua",titleKey:"climateMap.sources.alertsTitle",subtitleKey:"climateMap.sources.alertsSubtitle",Icon:M,bg:"linear-gradient(135deg, #5c1010, #d63333)",cover:"/assets/air-alerts-DKIULZZF.webp"},{id:"ukrainealarm",titleKey:"climateMap.sources.airTargetsTitle",subtitleKey:"climateMap.sources.airTargetsSubtitle",Icon:u,bg:"linear-gradient(135deg, #3a0d0d, #b8451f)",cover:"/assets/air-targets-ohZISqyy.webp"},{id:"excalidraw",title:"Excalidraw",subtitleKey:"climateMap.sources.excalidrawSubtitle",Icon:v,bg:"linear-gradient(135deg, #4b3fc4, #9d93f5)",cover:"/assets/excalidraw-B4vboi0k.webp"},{id:"saveecobot",title:"SaveEcoBot",subtitleKey:"climateMap.sources.saveEcoBotSubtitle",Icon:h,bg:"linear-gradient(135deg, #0f6b5f, #7cbf1e)",cover:"/assets/saveecobot-_APioVhl.webp"},{id:"airtraffic",titleKey:"climateMap.sources.airTrafficTitle",subtitle:"TheAirTraffic (ADS-B)",Icon:w,bg:"linear-gradient(135deg, #0b2545, #d98a0b)",cover:"/assets/air-traffic-uJUSz0WP.webp"},{id:"deepstate",title:"DeepState",subtitleKey:"climateMap.sources.deepStateSubtitle",Icon:x,bg:"linear-gradient(135deg, #1b2a3a, #3d6b4f)",cover:"/assets/deepstate-wsH-eTKB.webp"}],nt=ot.map(e=>e.id),st=new Set(["alerts-ua","ukrainealarm","saveecobot","deepstate"]),lt=({item:e,isActive:t,onSelect:r,onDelete:i,splitAvailable:o,isSplitChecked:s,splitLocked:l,onToggleSplit:d,isDarkMode:p})=>{const{t:g}=a(),x=n(),{id:b,title:u,subtitle:f,Icon:m,bg:h,frame:w,cover:v,favicon:y}=e,[k,M]=(0,T.useState)(!1);return(0,B.jsxs)(qe,{value:b,forwardedAs:"div",dragListener:!1,dragControls:x,children:[(0,B.jsxs)(tt,{type:"button",$bg:h,$active:t,"aria-pressed":t,title:u,onClick:e=>r(b,e),children:[(0,B.jsx)(Ne,{$active:t,children:(0,B.jsx)(c,{})}),v?(0,B.jsx)(Ze,{src:v,alt:"",loading:"lazy",draggable:!1}):y&&!k?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Je,{src:y,alt:"",draggable:!1}),(0,B.jsx)(Qe,{children:(0,B.jsx)("img",{src:y,alt:"",draggable:!1,referrerPolicy:"no-referrer",onError:()=>M(!0)})})]}):w?(0,B.jsx)(Ge,{children:(u||"?").trim().charAt(0)}):(0,B.jsx)(Ve,{children:(0,B.jsx)(m,{})}),(0,B.jsxs)(et,{children:[(0,B.jsx)("strong",{children:u}),(0,B.jsx)("small",{children:f})]})]}),(0,B.jsx)(Ue,{type:"button","aria-label":g("climateMap.dragItem",{title:u}),title:g("climateMap.dragHint"),onPointerDown:e=>x.start(e),children:(0,B.jsx)(S,{})}),o&&(0,B.jsx)(Oe,{$withDelete:!!w,children:(0,B.jsxs)(F,{content:g("climateMap.splitTooltip"),isDarkMode:p,children:[(0,B.jsx)("input",{type:"checkbox","aria-label":g("climateMap.splitTooltip"),checked:s,disabled:l,onChange:()=>d(b)}),(0,B.jsx)(He,{"aria-hidden":"true",children:(0,B.jsx)($,{})}),(0,B.jsx)("span",{style:{marginLeft:6},children:g("climateMap.splitLabel")})]})}),w&&(0,B.jsx)(Xe,{type:"button","aria-label":g("climateMap.deleteItem",{title:u}),title:g("climateMap.delete"),onClick:()=>i(w),children:(0,B.jsx)(C,{})})]})},dt=({item:e,isActive:t,onSelect:a})=>{const{id:r,title:i,subtitle:o,Icon:n,bg:s,frame:l,cover:d,favicon:p}=e,[g,x]=(0,T.useState)(!1),b=(0,T.useRef)(null);return(0,T.useEffect)(()=>{const e=b.current,a=e?.parentElement;t&&a&&(a.scrollLeft=e.offsetLeft-12)},[t]),(0,B.jsx)(De,{ref:b,children:(0,B.jsxs)(tt,{type:"button",$bg:s,$active:t,"aria-pressed":t,title:i,onClick:()=>a(r),children:[(0,B.jsx)(Ne,{$active:t,children:(0,B.jsx)(c,{})}),d?(0,B.jsx)(Ze,{src:d,alt:"",loading:"lazy",draggable:!1}):p&&!g?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Je,{src:p,alt:"",draggable:!1}),(0,B.jsx)(Qe,{children:(0,B.jsx)("img",{src:p,alt:"",draggable:!1,referrerPolicy:"no-referrer",onError:()=>x(!0)})})]}):l?(0,B.jsx)(Ge,{children:(i||"?").trim().charAt(0)}):(0,B.jsx)(Ve,{children:(0,B.jsx)(n,{})}),(0,B.jsxs)(et,{children:[(0,B.jsx)("strong",{children:i}),(0,B.jsx)("small",{children:o})]})]})})},ct=({value:e,onChange:t,titles:a})=>(0,B.jsx)("div",{role:"group",onDoubleClick:e=>e.stopPropagation(),style:{display:"flex",gap:2,padding:2,borderRadius:8,background:"rgba(255,255,255,0.08)"},children:[0,1].map(r=>(0,B.jsx)("button",{type:"button","aria-pressed":e===r,title:a[r],onClick:e=>{e.stopPropagation(),t(r)},style:{minWidth:28,padding:"4px 8px",border:"none",borderRadius:6,background:e===r?Fe:"transparent",color:e===r?"#1a0800":"rgba(255,255,255,0.75)",font:"600 12px system-ui, sans-serif",cursor:"pointer"},children:r+1},r))}),pt=e=>{let t=0;for(const a of e)t=(31*t+a.charCodeAt(0))%360;return`linear-gradient(135deg, hsl(${t}, 50%, 26%), hsl(${(t+40)%360}, 60%, 46%))`},gt=e=>{try{return`https://www.google.com/s2/favicons?domain=${new URL(e).hostname}&sz=128`}catch{return null}},xt=e=>{try{return new URL(e).hostname.replace(/^www\./,"")}catch{return null}},bt=({isDarkMode:e,isStickyBgMode:t})=>{const{t:r,i18n:i}=a(),n="uk"===(i.resolvedLanguage||i.language),[s,l]=(0,T.useState)(48.379),[d,c]=(0,T.useState)(31.165),[x,b]=(0,T.useState)(5),[u,h]=(0,T.useState)(!1),[w,v]=(0,T.useState)(!0),[$,M]=(0,T.useState)("wind"),[S,E]=(0,T.useState)(!1),[L,I]=(0,T.useState)(()=>"undefined"==typeof navigator||navigator.onLine),[P,Y]=(0,T.useState)(!1),[K,F]=(0,T.useState)(!1),[V,fe]=(0,T.useState)(!1),[De,Ee]=(0,T.useState)(null),[Ce,Le]=(0,T.useState)(0),[Ie,Pe]=(0,T.useState)(!0),[_e,Fe]=(0,T.useState)("ventusky"),[Xe,Ue]=(0,T.useState)(!1),[Oe,He]=(0,T.useState)("auto"),[qe,Ne]=(0,T.useState)(!1),Ve="always"===Oe||"auto"===Oe&&!qe;(0,T.useEffect)(()=>{const e=window.matchMedia("(pointer: coarse)"),t=()=>Ne(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const[Ze,Je]=(0,T.useState)(()=>"undefined"!=typeof window&&window.matchMedia(Ke).matches),[Qe,Ge]=(0,T.useState)(!1),[et,tt]=(0,T.useState)("windy"),[bt,ut]=(0,T.useState)(!0),[ft,mt]=(0,T.useState)(()=>"undefined"!=typeof window&&window.matchMedia(Te).matches);(0,T.useEffect)(()=>{const e=window.matchMedia(Te),t=()=>mt(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const ht=ft&&Qe,[wt,vt]=(0,T.useState)(!1),[yt,$t]=(0,T.useState)([]),[kt,Mt]=(0,T.useState)("");(0,T.useEffect)(()=>{const e=window.matchMedia(Ke),t=()=>Je(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const[jt,Dt]=(0,T.useState)(()=>"undefined"==typeof window?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[St,zt]=(0,T.useState)({width:320,height:220}),Et=(0,T.useRef)(null),Ct=(0,T.useRef)(null),Lt=(0,T.useRef)(null),It=(0,T.useRef)(null),[Pt,_t]=(0,T.useState)([]),[Yt,At]=(0,T.useState)(""),[Kt,Ft]=(0,T.useState)(""),[Tt,Rt]=(0,T.useState)(!1),Wt=(0,T.useMemo)(()=>{const e=[...ot.filter(e=>n||!st.has(e.id)).map(e=>({...e,title:e.titleKey?r(e.titleKey):e.title,subtitle:e.subtitleKey?r(e.subtitleKey):e.subtitle})),...Pt.map(e=>({id:e.id,title:e.title,subtitle:xt(e.url)||r("climateMap.customWidget"),Icon:p,bg:pt(e.id),favicon:gt(e.url),frame:e}))],t=new Map(e.map(e=>[e.id,e])),a=yt.filter(e=>t.has(e)).map(e=>t.get(e)),i=new Set(a.map(e=>e.id));return[...a,...e.filter(e=>!i.has(e.id))]},[Pt,yt,r,n]),Bt=(0,T.useMemo)(()=>{const e=kt.trim().toLowerCase();return e?Wt.filter(t=>[t.title,t.subtitle,t.frame?.url].some(t=>t&&t.toLowerCase().includes(e))):Wt},[Wt,kt]),[Xt,Ut]=(0,T.useState)(!1),Ot=(0,T.useRef)(null),Ht=!S||w||!L;(0,T.useEffect)(()=>{const e=Ot.current;if(e)if(Ht){const t=e.play();void 0!==t&&t.catch(()=>{})}else e.pause()},[Ht,Xt,V]),(0,T.useEffect)(()=>{const e=()=>{Y(!!document.fullscreenElement),F(!!document.fullscreenElement&&document.fullscreenElement===Et.current)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]),(0,T.useEffect)(()=>{const e=()=>{I("undefined"==typeof navigator||navigator.onLine)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}},[]),(0,T.useEffect)(()=>()=>De?.close(),[De]);const qt=async e=>{Fe(e);try{await W.default.setItem("selected_climate_provider",e)}catch(t){console.error("Error saving climate provider:",t)}};(0,T.useEffect)(()=>{n||(st.has(_e)&&Fe("ventusky"),st.has(et)&&tt("windy"===_e?"ventusky":"windy"))},[n,_e,et]);const Nt=async e=>{tt(e);try{await W.default.setItem("climate_second_provider",e)}catch(t){console.error("Error saving second provider:",t)}},Vt=async e=>{Ge(e);try{await W.default.setItem("climate_split_enabled",e)}catch(t){console.error("Error saving split mode:",t)}},Zt=async()=>{E(!0),A.success(r("climateMap.mapEnabled"),{icon:"🗺️",duration:1800});try{await W.default.setItem("map_last_unlocked_time",Date.now())}catch(e){console.error("Error saving map unlock time:",e)}},Jt=async()=>{E(!1),A(r("climateMap.mapDisabled"),{icon:"🔒",duration:1800});try{await W.default.removeItem("map_last_unlocked_time")}catch(e){console.error("Error removing map unlock time:",e)}},Qt=(0,T.useMemo)(()=>{const e=r("climateMap.settingsTitle");return[e,r(Ze?"climateMap.rotating.shortcuts":"climateMap.rotating.addFrames"),e,r("climateMap.rotating.pinLocation"),e,r("climateMap.rotating.mapsAndFeatures"),e,r("climateMap.rotating.miniPlayer"),e,r("climateMap.rotating.fullscreen")]},[Ze,r]),[Gt,ea]=(0,T.useState)(0);(0,T.useEffect)(()=>{const e=setInterval(()=>{ea(e=>(e+1)%Qt.length)},3e3);return()=>clearInterval(e)},[Qt]),(0,T.useEffect)(()=>{(async()=>{try{const e=await W.default.getItem("climate_custom_user_frames"),t=Array.isArray(e)?e:[];_t(t);const a=await W.default.getItem("climate_source_order");Array.isArray(a)&&$t(a);const r=[...nt,...t.map(e=>e.id)],i=e=>{e&&r.includes(e)&&Fe(e)};i(await W.default.getItem("selected_climate_provider"));const o=await W.default.getItem("climate_second_provider");o&&r.includes(o)&&tt(o);const n=await W.default.getItem("climate_split_enabled");"boolean"==typeof n&&Ge(n);const s=await W.default.getItem("climate_keyboard_shortcut_mode");["none","auto","always"].includes(s)&&He(s);const d=await W.default.getItem("pinned_map_location");d&&(l(d.lat),c(d.lon),b(d.zoom),d.overlay&&M(d.overlay),i(d.provider),Ue(!0));const p=await W.default.getItem("map_last_unlocked_time");p&&Date.now()-p<6048e5&&E(!0)}catch(e){console.error("Error loading map data:",e)}})()},[]);const ta=async e=>{_t(e);try{await W.default.setItem("climate_custom_user_frames",e)}catch(t){console.error("Error saving custom frames:",t)}},aa=e=>{const t=Pt.filter(t=>t.id!==e);ta(t),_e===e&&qt("ventusky"),et===e&&Nt("windy")},ra=async e=>{if(e.preventDefault(),!Kt.trim()||Tt)return;let t=Kt.trim();const a=t.match(/src=["']([^"']+)["']/i);if(a&&(t=a[1]),!t.startsWith("http://")&&!t.startsWith("https://"))return void A.error(r("climateMap.invalidUrl"));Rt(!0);const i=await(async e=>{const t=`/api/frame-check?url=${encodeURIComponent(e)}`;try{const e=await fetch(t,{signal:AbortSignal.timeout(1e4)});if(!e.ok||!e.headers.get("content-type")?.includes("application/json"))return null;const a=await e.json();return"boolean"==typeof a.embeddable?a.embeddable:null}catch{return null}})(t);if(Rt(!1),!1===i)return void A.error(r("climateMap.frameBlocked",{host:xt(t)||t}),{duration:6e3});const o=Yt.trim()||r("climateMap.customWidget"),n={id:"custom-"+Date.now(),title:o,url:t},s=[...Pt,n];ta(s),Fe(n.id),At(""),Ft(""),vt(!1)},ia=()=>{vt(!1),At(""),Ft("")},oa=async e=>{$t(e);try{await W.default.setItem("climate_source_order",e)}catch(t){console.error("Error saving source order:",t)}},na=(0,B.jsxs)(Me,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,B.jsx)(g,{}),(0,B.jsx)("input",{type:"search",value:kt,onChange:e=>Mt(e.target.value),onKeyDown:e=>"Escape"===e.key&&Mt(""),placeholder:r("climateMap.searchSources"),"aria-label":r("climateMap.searchSources")}),kt&&(0,B.jsx)("button",{type:"button","aria-label":r("climateMap.clearSearch"),onClick:()=>Mt(""),children:(0,B.jsx)(C,{})})]}),sa=e=>{if(ht)e===et?Vt(!1):e===_e?(qt(et),Vt(!1)):Nt(e);else{if(e===_e)return;Nt(e),Vt(!0)}S||Zt()},la=e=>{ht&&e===et&&Nt(_e),qt(e),S||Zt()},da=e=>{window.confirm(r("climateMap.confirmDeleteFrame",{title:e.title}))&&aa(e.id)},ca=async e=>{e&&e.stopPropagation();try{await W.default.setItem("pinned_map_location",{lat:s,lon:d,zoom:x,overlay:$,provider:_e}),await W.default.setItem("selected_climate_provider",_e),Ue(!0),A.success(r("climateMap.locationPinned"),{duration:3e3,icon:"📍"})}catch(t){console.error("Error pinning location:",t),A.error(r("climateMap.pinError"))}},pa=async e=>{e&&e.stopPropagation();try{await W.default.removeItem("pinned_map_location"),Ue(!1),A(r("climateMap.locationUnpinned"),{icon:"📌",duration:2e3})}catch(t){console.error("Error unpinning location:",t)}},ga=async()=>{if(window.documentPictureInPicture)try{const e=await window.documentPictureInPicture.requestWindow({width:400,height:300});e.document.body.style.margin="0",e.document.body.style.overflow="hidden",e.document.body.style.background="#1a1a1a",e.addEventListener("pagehide",()=>{Ee(null),fe(!1)}),Ee(e),fe(!0)}catch(e){console.error("PiP API failed:",e),fe(!0)}else fe(!0)};(0,T.useEffect)(()=>{const e=e=>{if(Lt.current){const{startX:t,startY:a,originX:r,originY:i}=Lt.current,o=Math.max(8,Math.min(window.innerWidth-120,r+e.clientX-t)),n=Math.max(8,Math.min(window.innerHeight-80,i+e.clientY-a));Dt({x:o,y:n})}if(It.current){const{startX:t,startY:a,width:r,height:i}=It.current,o=Math.max(260,Math.min(window.innerWidth-24,r+e.clientX-t)),n=Math.max(200,Math.min(window.innerHeight-24,i+e.clientY-a));zt({width:o,height:n})}},t=()=>{Lt.current=null,It.current=null};return window.addEventListener("pointermove",e),window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",t),window.removeEventListener("pointercancel",t)}},[]);const xa=(e=Et)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.current?.requestFullscreen&&e.current.requestFullscreen()};(0,T.useEffect)(()=>{const e=e=>{if("Escape"===e.key&&u&&"INPUT"!==e.target.tagName)h(!1);else if(!["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)&&e.ctrlKey&&e.altKey&&!e.shiftKey&&!e.metaKey)switch(e.code){case"KeyM":e.preventDefault(),S?Jt():Zt();break;case"KeyF":e.preventDefault(),xa();break;case"KeyP":e.preventDefault(),V?De?De.close():fe(!1):ga();break;case"KeyS":{e.preventDefault();const t=Wt.map(e=>e.id);Fe(e=>{const a=(t.indexOf(e)+1)%t.length;return t[a]});break}case"KeyO":e.preventDefault(),Xe?pa():ca();break;case"KeyD":if(!ft)break;e.preventDefault(),Vt(!Qe);break;case"KeyK":e.preventDefault(),h(e=>!e)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[V,De,Pt,Wt,S,Xe,s,d,x,$,_e,u,ft,Qe]);const ba=e=>{if("windy"===e)return`https://embed.windy.com/embed2.html?lat=${s}&lon=${d}&zoom=${x}&level=surface&overlay=${$}&menu=&message=true&marker=`;if("ventusky"===e){let e=$;return"rain"===$&&(e="rain-3h"),"temp"===$&&(e="temperature"),"clouds"===$&&(e="cloud-cover"),`https://www.ventusky.com/?p=${s};${d};${x}&l=${e}`}if("alerts-ua"===e)return"https://alerts.in.ua/";if("ukrainealarm"===e)return"https://map.ukrainealarm.com/";if("excalidraw"===e)return"https://excalidraw.com/";if("saveecobot"===e)return"https://www.saveecobot.com/maps";if("airtraffic"===e)return`https://globe.theairtraffic.com/?lat=${s}&lon=${d}&zoom=${x}`;if("deepstate"===e)return"https://deepstatemap.live/";const t=Pt.find(t=>t.id===e);if(t)return t.url;let a=$;return"rain"===$&&(a="rain-3h"),"temp"===$&&(a="temperature"),"clouds"===$&&(a="cloud-cover"),`https://www.ventusky.com/?p=${s};${d};${x}&l=${a}`},ua=(0,T.useMemo)(()=>ba(_e),[_e,s,d,x,$,Pt]),fa=(0,T.useMemo)(()=>ba(et),[et,s,d,x,$,Pt]);(0,T.useEffect)(()=>{v(L)},[_e,s,d,x,$,L,V]),(0,T.useEffect)(()=>{ut(L)},[et,s,d,x,$,L,ht,V]);const ma=ht&&1===Ce?fa:ua,ha=[_e,et].map(e=>Wt.find(t=>t.id===e)?.title),wa=ht&&(0,B.jsx)(ct,{value:Ce,onChange:Le,titles:ha});(0,T.useEffect)(()=>{Pe(L)},[ma,L,V]);const va=K&&!V;return(0,B.jsxs)(U,{children:[(0,B.jsx)(X,{$isDarkMode:e,$isStickyBgMode:t,children:r("climateMap.title")}),(0,B.jsx)(_,{position:"bottom-center",toastOptions:{duration:2500,style:{background:e?"rgba(20,24,36,0.97)":"rgba(255,252,245,0.98)",color:e?"#f0e8d8":"#2a1000",border:e?"1px solid rgba(255,179,108,0.25)":"1px solid rgba(200,100,0,0.2)",borderRadius:"10px",fontSize:"13px",fontWeight:500,boxShadow:e?"0 8px 32px rgba(0,0,0,0.5)":"0 8px 32px rgba(0,0,0,0.12)",padding:"10px 14px"},success:{iconTheme:{primary:"#5dca70",secondary:e?"#111":"#fff"}},error:{iconTheme:{primary:"#e07070",secondary:e?"#111":"#fff"}}}}),(0,B.jsx)(q,{$isDarkMode:e,type:"button",onClick:()=>h(!0),"aria-label":Qt[Gt],children:(0,B.jsx)(me,{children:Qt[Gt]},Gt)}),(0,B.jsxs)(Re,{children:[(0,B.jsxs)(O,{ref:Et,$isFullscreen:P,onClick:()=>!S&&Zt(),children:[u&&(0,B.jsx)(N,{$isDarkMode:e,onClick:()=>h(!1),children:(0,B.jsxs)(Z,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,B.jsxs)(J,{$isDarkMode:e,children:[(0,B.jsx)("div",{children:(0,B.jsx)("h2",{children:(0,B.jsx)(me,{children:Qt[Gt]},Gt)})}),(0,B.jsx)(ae,{$isDarkMode:e,type:"button",onClick:()=>h(!1),children:"×"})]}),(0,B.jsxs)(Ye,{children:[(0,B.jsxs)(ze,{$isDarkMode:e,children:[(0,B.jsx)(f,{}),(0,B.jsxs)(Q,{children:[(0,B.jsx)("strong",{children:r("climateMap.shortcuts")}),(0,B.jsx)("span",{children:r("climateMap.shortcutsDesc")})]}),(0,B.jsxs)(Ae,{$isDarkMode:e,value:Oe,onChange:async e=>{const t=e.target.value;He(t);try{await W.default.setItem("climate_keyboard_shortcut_mode",t)}catch(a){console.error("Error saving keyboard shortcut mode:",a)}},children:[(0,B.jsx)("option",{value:"none",children:r("climateMap.shortcutsNone")}),(0,B.jsx)("option",{value:"auto",children:r("climateMap.shortcutsAuto")}),(0,B.jsx)("option",{value:"always",children:r("climateMap.shortcutsAlways")})]})]}),(0,B.jsx)(G,{$isDarkMode:e,$hideOnDesktop:!0,children:r("climateMap.mapLabel")}),(0,B.jsxs)(ee,{$isDarkMode:e,$active:S,$danger:S,type:"button",onClick:()=>S?Jt():Zt(),children:[(0,B.jsx)(j,{}),(0,B.jsxs)(Q,{children:[(0,B.jsx)("strong",{children:r(S?"climateMap.deactivateMap":"climateMap.activateMap")}),(0,B.jsx)("span",{children:r(S?"climateMap.deactivateMapDesc":"climateMap.activateMapDesc")}),(0,B.jsx)(te,{$on:S,children:S?`● ${r("climateMap.statusOn")}`:`○ ${r("climateMap.statusOff")}`})]}),(0,B.jsx)(H,{$visible:Ve,children:"Ctrl + Alt + M"})]}),(0,B.jsxs)(ee,{$isDarkMode:e,$active:Xe,type:"button",onClick:Xe?pa:ca,children:[(0,B.jsx)(k,{}),(0,B.jsxs)(Q,{children:[(0,B.jsx)("strong",{children:r(Xe?"climateMap.unpinLocation":"climateMap.pinLocation")}),(0,B.jsx)("span",{children:r(Xe?"climateMap.unpinLocationDesc":"climateMap.pinLocationDesc")}),(0,B.jsx)(te,{$on:Xe,children:Xe?`● ${r("climateMap.statusPinned")}`:`○ ${r("climateMap.statusUnpinned")}`})]}),(0,B.jsx)(H,{$visible:Ve,children:"Ctrl + Alt + O"})]}),(0,B.jsxs)(ee,{$isDarkMode:e,type:"button",onClick:()=>xa(),children:[(0,B.jsx)(z,{}),(0,B.jsxs)(Q,{children:[(0,B.jsx)("strong",{children:r(P?"climateMap.collapseMap":"climateMap.openFullscreen")}),(0,B.jsx)("span",{children:r("climateMap.fullscreenDesc")})]}),(0,B.jsx)(H,{$visible:Ve,children:"Ctrl + Alt + F"})]}),(0,B.jsxs)(ee,{$isDarkMode:e,type:"button",onClick:ga,children:[(0,B.jsx)(D,{}),(0,B.jsxs)(Q,{children:[(0,B.jsx)("strong",{children:r("climateMap.miniPlayer")}),(0,B.jsx)("span",{children:r("climateMap.miniPlayerDesc")})]}),(0,B.jsx)(H,{$visible:Ve,children:"Ctrl + Alt + P"})]})]}),!Ze&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(G,{$isDarkMode:e,children:r("climateMap.mapSource")}),(0,B.jsxs)($e,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,B.jsxs)(ee,{$isDarkMode:e,style:{background:"none",border:"none",borderRadius:0,margin:0,padding:"10px 12px",pointerEvents:"none"},type:"button",children:[(0,B.jsx)(y,{}),(0,B.jsxs)(Q,{children:[(0,B.jsx)("strong",{children:r("climateMap.mapSource")}),(0,B.jsx)("span",{children:r("climateMap.mapSourceDesc")})]}),(0,B.jsx)(H,{$visible:Ve,children:"Ctrl + Alt + S"})]}),(0,B.jsx)("div",{style:{padding:"0 12px 2px"},children:na}),(0,B.jsxs)(ke,{$isDarkMode:e,"aria-label":r("climateMap.sourcesAria"),children:[0===Bt.length&&(0,B.jsx)(je,{$isDarkMode:e,children:r("climateMap.noSourcesFound")}),Bt.map(e=>(0,B.jsx)(dt,{item:e,isActive:_e===e.id,onSelect:qt},e.id))]})]}),(0,B.jsx)(G,{$isDarkMode:e,children:r("climateMap.customFrame")}),(0,B.jsxs)(we,{$isDarkMode:e,onSubmit:ra,onClick:e=>e.stopPropagation(),children:[(0,B.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:r("climateMap.titlePlaceholder"),value:Yt,onChange:e=>At(e.target.value)}),(0,B.jsxs)(he,{children:[(0,B.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:r("climateMap.urlPlaceholder"),value:Kt,onChange:e=>Ft(e.target.value),style:{width:"100%",paddingRight:"88px"},required:!0}),(0,B.jsx)(ye,{type:"submit",disabled:Tt,style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px"},children:r(Tt?"climateMap.frameChecking":"climateMap.add")})]}),Pt.length>0&&(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,B.jsx)("span",{style:{fontSize:"10px",color:e?"rgba(255,255,255,0.35)":"rgba(100,50,0,0.45)",letterSpacing:"0.05em",textTransform:"uppercase"},children:r("climateMap.saved")}),Pt.map(t=>(0,B.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",padding:"6px 10px",borderRadius:"7px",border:e?"1px solid rgba(255,255,255,0.07)":"1px solid rgba(0,0,0,0.08)"},children:[(0,B.jsx)("span",{style:{fontSize:"12px",color:e?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.8)"},children:t.title}),(0,B.jsx)("button",{type:"button",onClick:()=>aa(t.id),style:{background:"transparent",border:"none",color:"rgba(255,80,80,0.7)",cursor:"pointer",fontSize:"13px",padding:"2px 4px",borderRadius:"4px"},title:r("climateMap.delete"),children:"🗑️"})]},t.id))]})]})]})]})}),V?(0,B.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:r("climateMap.closeMiniPlayerHint")}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(ne,{"aria-hidden":!Ht,style:{visibility:Ht?"visible":"hidden"},children:[!Xt&&(0,B.jsx)(se,{children:(0,B.jsx)(le,{ref:Ot,src:"/assets/kate-and-domino-oaIgeWU2.webm",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onCanPlay:e=>{if(Ht){const t=e.target.play();void 0!==t&&t.catch(()=>{})}},onError:()=>Ut(!0)})}),(0,B.jsx)("p",{style:{fontSize:"16px"},children:r(L?S?"climateMap.loading":"climateMap.clickToActivate":"climateMap.checkInternet")}),(0,B.jsx)("p",{children:r("climateMap.credits")}),(0,B.jsx)("p",{children:r("climateMap.settingsHint")})]}),(0,B.jsxs)(ie,{$split:ht,$bottomInset:va?124:0,children:[(0,B.jsx)(oe,{children:(0,B.jsx)(re,{"aria-label":"Weather Map",src:S&&L?ua:void 0,$isLoading:w,$isReady:S,onLoad:()=>v(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})}),ht&&(0,B.jsx)(oe,{children:(0,B.jsx)(re,{"aria-label":`Weather Map (${r("climateMap.secondFrame")})`,src:S&&L?fa:void 0,$isLoading:bt,$isReady:S,onLoad:()=>ut(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})})]})]}),va&&(0,B.jsx)(Se,{$isDarkMode:e,"aria-label":r("climateMap.sourcesAria"),onWheel:e=>{Math.abs(e.deltaY)>Math.abs(e.deltaX)&&(e.currentTarget.scrollLeft+=e.deltaY)},children:Wt.map(e=>(0,B.jsx)(dt,{item:e,isActive:_e===e.id||ht&&et===e.id,onSelect:la},e.id))})]}),Ze&&(0,B.jsx)(We,{$isDarkMode:e,"aria-label":r("climateMap.sourcesAria"),layoutScroll:!0,children:(0,B.jsxs)(Be,{children:[na,0===Bt.length&&(0,B.jsx)(je,{$isDarkMode:e,children:r("climateMap.noSourcesFound")}),(0,B.jsx)(o,{axis:"y",as:"div",values:Bt.map(e=>e.id),onReorder:e=>{if(Bt.length===Wt.length)return oa(e);const t=new Set(e),a=[...e];oa(Wt.map(e=>t.has(e.id)?a.shift():e.id))},style:{display:"flex",flexDirection:"column",gap:"16px",margin:0,padding:0},children:Bt.map(t=>(0,B.jsx)(lt,{item:t,isActive:_e===t.id||ht&&et===t.id,onSelect:la,onDelete:da,splitAvailable:ft,isSplitChecked:ht&&(t.id===_e||t.id===et),splitLocked:!ht&&t.id===_e,onToggleSplit:sa,isDarkMode:e},t.id))}),wt?(0,B.jsxs)(rt,{$isDarkMode:e,onSubmit:ra,onKeyDown:e=>"Escape"===e.key&&ia(),children:[(0,B.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:r("climateMap.titlePlaceholderShort"),value:Yt,onChange:e=>At(e.target.value),autoFocus:!0}),(0,B.jsx)(ve,{$isDarkMode:e,type:"text",placeholder:r("climateMap.urlPlaceholderShort"),value:Kt,onChange:e=>Ft(e.target.value),required:!0}),(0,B.jsxs)("div",{style:{display:"flex",gap:"6px"},children:[(0,B.jsx)(ye,{type:"submit",style:{flex:1},disabled:Tt,children:r(Tt?"climateMap.frameChecking":"climateMap.add")}),(0,B.jsx)(it,{$isDarkMode:e,type:"button",onClick:ia,children:r("climateMap.cancel")})]})]}):(0,B.jsxs)(at,{$isDarkMode:e,type:"button","aria-label":r("climateMap.addOwnFrame"),title:r("climateMap.addOwnFrame"),onClick:()=>vt(!0),children:[(0,B.jsx)(m,{}),(0,B.jsx)("span",{children:r("climateMap.addYourFrame")})]})]})})]}),De?(0,R.createPortal)((0,B.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[wa&&(0,B.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:6,background:"#111"},children:wa}),(0,B.jsx)(re,{"aria-label":"Weather Map (PiP)",src:ma,$isLoading:Ie,$isReady:!0,onLoad:()=>Pe(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",style:{width:"100%",flex:1,minHeight:0,border:"none"}})]}),De.document.body):V&&(0,B.jsxs)(ce,{ref:Ct,onDoubleClick:()=>fe(!1),style:{left:jt.x,top:jt.y,width:St.width,height:St.height},children:[(0,B.jsxs)(pe,{style:{touchAction:"none"},onPointerDown:e=>{e.target.closest("button")||(e.preventDefault(),Lt.current={startX:e.clientX,startY:e.clientY,originX:jt.x,originY:jt.y})},children:[(0,B.jsx)(ge,{children:r("climateMap.miniMapTitle")}),(0,B.jsxs)(xe,{children:[wa,(0,B.jsx)(de,{onClick:e=>{e.stopPropagation(),xa(Ct)},children:P?r("climateMap.collapse"):"⛶"}),(0,B.jsx)(de,{onClick:e=>{e.stopPropagation(),fe(!1)},children:"✕"})]})]}),(0,B.jsxs)(be,{children:[Ie&&(0,B.jsx)(ne,{children:(0,B.jsx)("p",{children:r("climateMap.loading")})}),(0,B.jsx)(re,{"aria-label":"Weather Map Mini",src:ma,$isLoading:Ie,$isReady:!0,onLoad:()=>Pe(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,B.jsx)(ue,{style:{touchAction:"none"},onPointerDown:e=>{e.preventDefault(),e.stopPropagation(),It.current={startX:e.clientX,startY:e.clientY,width:St.width,height:St.height}}})]})]})]})};export{bt as default};