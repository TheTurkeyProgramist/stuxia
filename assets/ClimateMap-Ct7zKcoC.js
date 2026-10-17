import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{n as t}from"./vendor-react-BRTeEVAI.js";import{n as a}from"./vendor-markdown-ADGh9TTx.js";import{i as o,r as i,t as n}from"./styled-components.browser.esm-_LeWE6wZ.js";import{n as s}from"./vendor-utils-o-f_e4rV.js";import{R as d,Yn as l,n as c,t as p,tt as g,vt as x}from"./vendor-ui-BkKfN29X.js";import{t as b}from"./vendor-ai-CzXiCoTt.js";import{t as u}from"./climate-BFaVtzMy.js";import{n as f,r as h}from"./index-CaZHfpnU.js";var m=e(r()),k=e(t()),v=e(s()),$=a();n`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;var w=o.div`
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
  ${e=>e.$isStickyBgMode?i`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:i`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,y=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,j=o.div`
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
    background-image: url(${u});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`,M=o.div`
  display: none;
`,D=o.kbd`
  display: ${e=>e.$visible?"inline-flex":"none"};
  align-items: center;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
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
`,S=o.button`
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
`,z=o.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: flex-end;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(2, 5, 12, 0.55)":"rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,E=o.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 8px 10px 16px;
  padding-top: 64px;
  background: ${e=>e.$isDarkMode?"linear-gradient(170deg, rgba(10,16,30,0.97) 0%, rgba(15,22,40,0.97) 60%, rgba(18,14,8,0.97) 100%)":"linear-gradient(170deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 60%, rgba(255,243,220,0.99) 100%)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.18)":"rgba(200,100,0,0.2)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  box-shadow: ${e=>e.$isDarkMode?"0 -8px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset":"0 -8px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8) inset"};
  ${"\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 179, 108, 0.25) transparent;\n  &::-webkit-scrollbar { width: 4px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb {\n    background: rgba(255, 179, 108, 0.25);\n    border-radius: 4px;\n  }\n"}
`,C=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 16px 10px 18px;
  background: ${e=>e.$isDarkMode?"linear-gradient(90deg, rgba(8,14,28,0.98) 0%, rgba(14,18,34,0.98) 50%, rgba(20,12,4,0.98) 100%)":"linear-gradient(90deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 100%)"};
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.2)":"rgba(200,100,0,0.15)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.5);
  z-index: 10;

  h2 {
    margin: 0;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.01em;
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
`,_=o.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`;o.div`
  height: 1px;
  margin: 8px 0 2px;
  background: linear-gradient(90deg, rgba(255,179,108,0.12), rgba(255,255,255,0.05), transparent);
`;var L=o.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.55)":"rgba(160,70,0,0.55)"};
  padding: 0 2px;
  margin-top: 10px;
  margin-bottom: 2px;
`,P=o.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 44px 10px 12px;
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
`,I=o.span`
  display: inline-flex;
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
`,Y=o.button`
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
`,R=o.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${e=>e.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?"0":"1"};
`,W=o.div`
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
`,F=o.div`
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
`,B=o.video`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: screen;
  opacity: 0.96;
  transition: opacity 300ms ease, filter 300ms ease;
  filter: brightness(1.04);
`,X=o.button`
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
`,T=o.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,A=o.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,O=o.div`
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
`,N=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,V=o.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,q=o.div`
  display: flex;
  gap: 6px;
`,K=o.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,H=o.div`
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
`,G=n`
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(4px); }
`,J=o.span`
  display: inline-block;
  animation: ${G} 3s ease-in-out infinite;
  color: #ffb36c;
  font-weight: 700;
`,U=o.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,Q=o.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 12px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,179,108,0.04)":"rgba(255,179,108,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.14)":"rgba(200,100,0,0.18)"};
`,Z=o.input`
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
`,ee=o.button`
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
`,re=o.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 13px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s;

  &:hover, &:focus {
    border-color: #ffb36c;
  }

  option {
    background: #121826;
    color: white;
  }
`,te=o.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
`,ae=o.select`
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  background: ${e=>e.$isDarkMode?"rgba(10,18,36,0.8)":"rgba(255,248,235,0.95)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.85)":"#3a1800"};
  font-size: 13px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  appearance: auto;

  option {
    background: ${e=>e.$isDarkMode?"#0d1525":"#fff8eb"};
    color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  }
`,oe=o.div`
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
`,ie=o.select`
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
`,ne=({isDarkMode:e,isStickyBgMode:r})=>{const[t,a]=(0,m.useState)(48.379),[o,i]=(0,m.useState)(31.165),[n,s]=(0,m.useState)(5),[u,G]=(0,m.useState)(!1),[ne,se]=(0,m.useState)(!1),[de,le]=(0,m.useState)(""),[ce,pe]=(0,m.useState)(!1),[ge,xe]=(0,m.useState)(""),[be,ue]=(0,m.useState)(!0),[fe,he]=(0,m.useState)("wind"),[me,ke]=(0,m.useState)(!1),[ve,$e]=(0,m.useState)(()=>"undefined"==typeof navigator||navigator.onLine),[we,ye]=(0,m.useState)(!1),[je,Me]=(0,m.useState)(!1),[De,Se]=(0,m.useState)(null),[ze,Ee]=(0,m.useState)("ventusky"),[Ce,_e]=(0,m.useState)(!1),Le=["/assets/pixelturkey-KW2VmpPY.webp","/assets/twoturkey-BY97OAmK.webp"],[Pe,Ie]=(0,m.useState)(0),[Ye,Re]=(0,m.useState)("auto"),[We,Fe]=(0,m.useState)(!1),Be="always"===Ye||"auto"===Ye&&!We;(0,m.useEffect)(()=>{const e=window.matchMedia("(pointer: coarse)"),r=()=>Fe(e.matches);return r(),e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),(0,m.useEffect)(()=>{const e=setInterval(()=>{Ie(e=>(e+1)%Le.length)},1500);return()=>clearInterval(e)},[]);const[Xe,Te]=(0,m.useState)(()=>"undefined"==typeof window?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[Ae,Oe]=(0,m.useState)({width:320,height:220}),Ne=(0,m.useRef)(null),Ve=(0,m.useRef)(null),qe=(0,m.useRef)(null),Ke=(0,m.useRef)(null),[He,Ge]=(0,m.useState)([]),[Je,Ue]=(0,m.useState)(""),[Qe,Ze]=(0,m.useState)(""),[er,rr]=(0,m.useState)(()=>{if("undefined"==typeof navigator||!navigator.onLine)return!0;if(navigator.connection){const e=navigator.connection;if(e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))return!0}return!1}),[tr,ar]=(0,m.useState)(!1),[or,ir]=(0,m.useState)(!1),nr=(0,m.useRef)(null),sr=!me||be||!ve;(0,m.useEffect)(()=>{!ve||er||tr||ir(!0)},[ve,er,tr]),(0,m.useEffect)(()=>{const e=nr.current;if(e)if(sr&&ve&&!er&&!tr&&or){const r=e.play();void 0!==r&&r.catch(()=>{})}else e.pause()},[sr,ve,er,tr,or]),(0,m.useEffect)(()=>{const e=()=>{ye(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]),(0,m.useEffect)(()=>{const e=()=>{const e="undefined"==typeof navigator||navigator.onLine;if($e(e),e)if("undefined"!=typeof navigator&&navigator.connection){const e=navigator.connection;rr(!!e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))}else rr(!1);else rr(!0)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.addEventListener("change",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.removeEventListener("change",e)}},[]);const dr=async e=>{Ee(e);try{await v.default.setItem("selected_climate_provider",e)}catch(r){}},lr=async()=>{ke(!0),h.success("Карту увімкнено",{icon:"🗺️",duration:1800});try{await v.default.setItem("map_last_unlocked_time",Date.now())}catch(e){}},cr=(0,m.useMemo)(()=>["Налаштування Стихії","Додавання карти(фреймів)","Налаштування Стихії","Пошук місця","Налаштування Стихії","Закріпити локацію","Налаштування Стихії","Карти та безліч функцій","Налаштування Стихії","Міні-плеєр карти","Налаштування Стихії","Повноекранний режим"],[]),[pr,gr]=(0,m.useState)(0);(0,m.useEffect)(()=>{const e=setInterval(()=>{gr(e=>(e+1)%cr.length)},3e3);return()=>clearInterval(e)},[cr]),(0,m.useEffect)(()=>{(async()=>{try{const e=await v.default.getItem("gemini_api_key");e&&xe(e);const r=await v.default.getItem("selected_climate_provider");r&&Ee(r);const t=await v.default.getItem("climate_keyboard_shortcut_mode");["none","auto","always"].includes(t)&&Re(t);const o=await v.default.getItem("pinned_map_location");o&&(a(o.lat),i(o.lon),s(o.zoom),o.overlay&&he(o.overlay),o.provider&&Ee(o.provider),_e(!0));const n=await v.default.getItem("map_last_unlocked_time");n&&Date.now()-n<6048e5&&ke(!0);const d=await v.default.getItem("climate_custom_user_frames");d&&Array.isArray(d)&&Ge(d)}catch(e){}})()},[]);const xr=async e=>{Ge(e);try{await v.default.setItem("climate_custom_user_frames",e)}catch(r){}},br=async e=>{e&&e.stopPropagation();try{await v.default.setItem("pinned_map_location",{lat:t,lon:o,zoom:n,overlay:fe,provider:ze}),await v.default.setItem("selected_climate_provider",ze),_e(!0),h.success("Локацію закріплено! Завантажиться при наступному вході.",{duration:3e3,icon:"📍"})}catch(r){h.error("Помилка при закріпленні локації.")}},ur=async()=>{if(window.documentPictureInPicture)try{const e=await window.documentPictureInPicture.requestWindow({width:400,height:300});e.document.body.style.margin="0",e.document.body.style.overflow="hidden",e.document.body.style.background="#1a1a1a",e.addEventListener("pagehide",()=>{Se(null),Me(!1)}),Se(e),Me(!0)}catch(e){Me(!0)}else Me(!0)};(0,m.useEffect)(()=>{const e=e=>{if(qe.current){const{startX:r,startY:t,originX:a,originY:o}=qe.current,i=Math.max(8,Math.min(window.innerWidth-120,a+e.clientX-r)),n=Math.max(8,Math.min(window.innerHeight-80,o+e.clientY-t));Te({x:i,y:n})}if(Ke.current){const{startX:r,startY:t,width:a,height:o}=Ke.current,i=Math.max(260,Math.min(window.innerWidth-24,a+e.clientX-r)),n=Math.max(200,Math.min(window.innerHeight-24,o+e.clientY-t));Oe({width:i,height:n})}},r=()=>{qe.current=null,Ke.current=null};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r)}},[]);const fr=(e=Ne)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.current?.requestFullscreen&&e.current.requestFullscreen()};(0,m.useEffect)(()=>{const e=e=>{if(!["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)&&e.shiftKey&&e.ctrlKey)switch(e.key.toLowerCase()){case"m":e.preventDefault(),ke(e=>!e);break;case"f":e.preventDefault(),fr();break;case"p":e.preventDefault(),je?De?De.close():Me(!1):ur();break;case"w":{e.preventDefault();const r=["ventusky","windy",...He.map(e=>e.id)];Ee(e=>{const t=(r.indexOf(e)+1)%r.length;return r[t]});break}case"s":e.preventDefault(),G(e=>!e);break;case"l":e.preventDefault(),br();break;case"k":e.preventDefault(),setIsFramesModalOpen(e=>!e)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[je,De,He]);const hr=(0,m.useMemo)(()=>{if("windy"===ze)return`https://embed.windy.com/embed2.html?lat=${t}&lon=${o}&zoom=${n}&level=surface&overlay=${fe}&menu=&message=true&marker=`;if("ventusky"===ze){let e=fe;return"rain"===fe&&(e="rain-3h"),"temp"===fe&&(e="temperature"),"clouds"===fe&&(e="cloud-cover"),`https://www.ventusky.com/?p=${t};${o};${n}&l=${e}`}if("alerts-ua"===ze)return"https://alerts.in.ua/";if("excalidraw"===ze)return"https://excalidraw.com/";if("saveecobot"===ze)return"https://www.saveecobot.com/maps";if("radarbox"===ze)return"https://www.radarbox.com/";const e=He.find(e=>e.id===ze);if(e)return e.url;let r=fe;return"rain"===fe&&(r="rain-3h"),"temp"===fe&&(r="temperature"),"clouds"===fe&&(r="cloud-cover"),`https://www.ventusky.com/?p=${t};${o};${n}&l=${r}`},[ze,t,o,n,fe,He]);return(0,m.useEffect)(()=>{ue(ve)},[ze,t,o,n,fe,ve]),(0,$.jsxs)(y,{children:[(0,$.jsx)(w,{$isDarkMode:e,$isStickyBgMode:r,children:"Кліматична мапа"}),(0,$.jsx)(f,{position:"bottom-center",toastOptions:{duration:2500,style:{background:e?"rgba(20,24,36,0.97)":"rgba(255,252,245,0.98)",color:e?"#f0e8d8":"#2a1000",border:e?"1px solid rgba(255,179,108,0.25)":"1px solid rgba(200,100,0,0.2)",borderRadius:"10px",fontSize:"13px",fontWeight:500,boxShadow:e?"0 8px 32px rgba(0,0,0,0.5)":"0 8px 32px rgba(0,0,0,0.12)",padding:"10px 14px"},success:{iconTheme:{primary:"#5dca70",secondary:e?"#111":"#fff"}},error:{iconTheme:{primary:"#e07070",secondary:e?"#111":"#fff"}}}}),(0,$.jsx)(S,{$isDarkMode:e,type:"button",onClick:()=>se(!0),"aria-label":cr[pr],children:(0,$.jsx)(J,{children:cr[pr]},pr)}),(0,$.jsxs)(j,{ref:Ne,$isFullscreen:we,onClick:()=>!me&&lr(),children:[(0,$.jsxs)(M,{$isOpen:ne,children:[u&&(0,$.jsxs)(T,{onSubmit:async e=>{if(e?.preventDefault(),de.trim()&&!ce)if(ge){pe(!0);try{const e=new b(ge).getGenerativeModel({model:"gemini-2.5-flash",tools:[{googleSearch:{}}]}),r=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. \n      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.\n      Запит: ${de}`;let t=(await(await e.generateContent(r)).response).text().trim();t.startsWith("```json")?t=t.replace(/```json/g,"").replace(/```/g,"").trim():t.startsWith("```")&&(t=t.replace(/```/g,"").trim());const o=JSON.parse(t);Number.isFinite(o.lat)&&Number.isFinite(o.lon)&&(a(o.lat),i(o.lon),le(""),G(!1),ke(!0),h.success(`Локацію знайдено! ${de}`,{icon:"🗺️"}))}catch(r){h.error("Не вдалося знайти локацію. Спробуйте змінити запит.")}finally{pe(!1)}}else h.error("API-ключ Gemini не знайдено. Додайте його в налаштуваннях ШІ.",{icon:"🔑"})},children:[(0,$.jsx)(A,{value:de,onChange:e=>le(e.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,$.jsx)(X,{type:"submit",$active:!0,disabled:ce,onClick:e=>e.stopPropagation(),children:ce?"Шукаю...":"Знайти"})]}),(0,$.jsx)(X,{onClick:e=>{e.stopPropagation(),G(!u)},children:"ШІ Пошук"}),(0,$.jsx)(X,{onClick:br,children:"Закріпити"}),(0,$.jsxs)(re,{value:ze,onChange:e=>dr(e.target.value),onClick:e=>e.stopPropagation(),"aria-label":"Оберіть джерело мапи",children:[(0,$.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,$.jsx)("option",{value:"windy",children:"Windy"}),(0,$.jsx)("option",{value:"alerts-ua",children:"Карта тривог України"}),(0,$.jsx)("option",{value:"excalidraw",children:"Онлайн-дошка (Excalidraw)"}),(0,$.jsx)("option",{value:"saveecobot",children:"Якість повітря (SaveEcoBot)"}),(0,$.jsx)("option",{value:"radarbox",children:"Моніторинг польотів (RadarBox)"}),He.map(e=>(0,$.jsx)("option",{value:e.id,children:e.title},e.id))]}),(0,$.jsx)("div",{style:{height:"1px",background:"rgba(255,255,255,0.2)",margin:"4px 0"}}),(0,$.jsx)(X,{onClick:e=>{e.stopPropagation(),me?ke(!1):lr()},style:{border:me?"1px solid #ff4d4d":"1px solid skyblue"},children:me?"Деактивувати":"Активувати"}),(0,$.jsx)(X,{onClick:e=>{e.stopPropagation(),fr()},children:we?"Згорнути":"На весь екран"}),(0,$.jsx)(X,{onClick:e=>{e.stopPropagation(),je?De?De.close():Me(!1):ur()},children:je?"Закрити міні-плеєр":"Міні-плеєр"})]}),ne&&(0,$.jsx)(z,{$isDarkMode:e,onClick:()=>se(!1),children:(0,$.jsxs)(E,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(C,{$isDarkMode:e,children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("h2",{children:(0,$.jsx)(J,{children:cr[pr]},pr)}),(0,$.jsx)("p",{children:"Керуйте картою та її джерелом"})]}),(0,$.jsx)(Y,{$isDarkMode:e,type:"button",onClick:()=>se(!1),children:"×"})]}),(0,$.jsx)(L,{$isDarkMode:e,children:"Налаштування"}),(0,$.jsxs)(oe,{$isDarkMode:e,children:[(0,$.jsx)(d,{}),(0,$.jsxs)(_,{children:[(0,$.jsx)("strong",{children:"Комбінації клавіш"}),(0,$.jsx)("span",{children:"Показувати підказки клавіш поруч з діями?"})]}),(0,$.jsxs)(ie,{$isDarkMode:e,value:Ye,onChange:async e=>{const r=e.target.value;Re(r);try{await v.default.setItem("climate_keyboard_shortcut_mode",r)}catch(t){}},children:[(0,$.jsx)("option",{value:"none",children:"Без"}),(0,$.jsx)("option",{value:"auto",children:"Авто"}),(0,$.jsx)("option",{value:"always",children:"Так"})]})]}),(0,$.jsx)(L,{$isDarkMode:e,children:"Карта"}),(0,$.jsxs)(P,{$isDarkMode:e,$active:me,$danger:me,type:"button",onClick:()=>me?(async()=>{ke(!1),h("Карту вимкнено",{icon:"🔒",duration:1800});try{await v.default.removeItem("map_last_unlocked_time")}catch(e){}})():lr(),children:[(0,$.jsx)(l,{}),(0,$.jsxs)(_,{children:[(0,$.jsx)("strong",{children:me?"Деактивувати карту":"Активувати карту"}),(0,$.jsx)(I,{$on:me,children:me?"● Увімкнено":"○ Вимкнено"})]}),(0,$.jsx)(D,{$visible:Be,children:"Ctrl + Shift + M"})]}),(0,$.jsxs)(P,{$isDarkMode:e,$active:Ce,type:"button",onClick:Ce?async e=>{e&&e.stopPropagation();try{await v.default.removeItem("pinned_map_location"),await v.default.removeItem("selected_climate_provider"),_e(!1),h("Закріплення локації знято.",{icon:"📌",duration:2e3})}catch(r){}}:br,children:[(0,$.jsx)(g,{}),(0,$.jsxs)(_,{children:[(0,$.jsx)("strong",{children:Ce?"Відкріпити локацію":"Закріпити локацію"}),(0,$.jsx)(I,{$on:Ce,children:Ce?"● Закріплено":"○ Не закріплено"})]}),(0,$.jsx)(D,{$visible:Be,children:"Ctrl + Shift + L"})]}),(0,$.jsxs)(P,{$isDarkMode:e,type:"button",onClick:()=>fr(),children:[(0,$.jsx)(c,{}),(0,$.jsxs)(_,{children:[(0,$.jsx)("strong",{children:we?"Згорнути карту":"Відкрити на весь екран"}),(0,$.jsx)("span",{children:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд."})]}),(0,$.jsx)(D,{$visible:Be,children:"Ctrl + Shift + F"})]}),(0,$.jsxs)(P,{$isDarkMode:e,type:"button",onClick:ur,children:[(0,$.jsx)(p,{}),(0,$.jsxs)(_,{children:[(0,$.jsx)("strong",{children:"Міні-плеєр карти"}),(0,$.jsx)("span",{children:"Винести карту в окреме плаваюче вікно для паралельної роботи."})]}),(0,$.jsx)(D,{$visible:Be,children:"Ctrl + Shift + P"})]}),(0,$.jsx)(L,{$isDarkMode:e,children:"Джерело карти"}),(0,$.jsxs)(te,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(P,{$isDarkMode:e,style:{background:"none",border:"none",borderRadius:0,margin:0,padding:"10px 44px 10px 12px"},type:"button",children:[(0,$.jsx)(x,{}),(0,$.jsxs)(_,{children:[(0,$.jsx)("strong",{children:"Джерело карти"}),(0,$.jsx)("span",{children:"Windy, Ventusky, Тривоги, Excalidraw, SaveEcoBot та RadarBox"})]}),(0,$.jsx)(D,{$visible:Be,children:"Ctrl + Shift + W"})]}),(0,$.jsxs)(ae,{$isDarkMode:e,value:ze,onChange:e=>dr(e.target.value),children:[(0,$.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,$.jsx)("option",{value:"windy",children:"Windy"}),(0,$.jsx)("option",{value:"alerts-ua",children:"Карта тривог України"}),(0,$.jsx)("option",{value:"excalidraw",children:"Онлайн-дошка (Excalidraw)"}),(0,$.jsx)("option",{value:"saveecobot",children:"Якість повітря (SaveEcoBot)"}),(0,$.jsx)("option",{value:"radarbox",children:"Моніторинг польотів (RadarBox)"}),He.map(e=>(0,$.jsx)("option",{value:e.id,children:e.title},e.id))]})]}),(0,$.jsx)(L,{$isDarkMode:e,children:"Власний фрейм / віджет"}),(0,$.jsxs)(Q,{$isDarkMode:e,onSubmit:e=>{if(e.preventDefault(),!Qe.trim())return;let r=Qe.trim();const t=r.match(/src=["']([^"']+)["']/i);if(t&&(r=t[1]),!r.startsWith("http://")&&!r.startsWith("https://"))return void h.error("Будь ласка, введіть коректне посилання (https://...)");const a=Je.trim()||"Власний віджет",o={id:"custom-"+Date.now(),title:a,url:r},i=[...He,o];xr(i),Ee(o.id),Ue(""),Ze("")},onClick:e=>e.stopPropagation(),children:[(0,$.jsx)(Z,{$isDarkMode:e,type:"text",placeholder:"Назва (напр. Радар, Вебкамера...)",value:Je,onChange:e=>Ue(e.target.value)}),(0,$.jsxs)(U,{children:[(0,$.jsx)(Z,{$isDarkMode:e,type:"text",placeholder:"URL або iframe код (https://...)",value:Qe,onChange:e=>Ze(e.target.value),style:{width:"100%",paddingRight:"88px"},required:!0}),(0,$.jsx)(ee,{type:"submit",style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px"},children:"Додати"})]}),He.length>0&&(0,$.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,$.jsx)("span",{style:{fontSize:"10px",color:e?"rgba(255,255,255,0.35)":"rgba(100,50,0,0.45)",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Збережені:"}),He.map(r=>(0,$.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",padding:"6px 10px",borderRadius:"7px",border:e?"1px solid rgba(255,255,255,0.07)":"1px solid rgba(0,0,0,0.08)"},children:[(0,$.jsx)("span",{style:{fontSize:"12px",color:e?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.8)"},children:r.title}),(0,$.jsx)("button",{type:"button",onClick:()=>(e=>{const r=He.filter(r=>r.id!==e);xr(r),ze===e&&dr("ventusky")})(r.id),style:{background:"transparent",border:"none",color:"rgba(255,80,80,0.7)",cursor:"pointer",fontSize:"13px",padding:"2px 4px",borderRadius:"4px"},title:"Видалити",children:"🗑️"})]},r.id))]})]})]})}),je?(0,$.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:"Закрийте міні-плеєр щоб повернути карту"}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(W,{"aria-hidden":!sr,style:{visibility:sr?"visible":"hidden"},children:[!ve||er||tr?(0,$.jsx)("img",{src:Le[Pe],alt:"Це Доміно :)",style:{width:"340px",height:"auto",maxWidth:"100%",imageRendering:"pixelated",marginBottom:"-20px"}}):null,(0,$.jsx)(F,{children:(0,$.jsx)(B,{ref:nr,src:or?"/assets/turkey-compressed-DAbp5j3_.webm":void 0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:!ve||er||tr?"none":"auto",onCanPlay:e=>{if(sr&&ve&&!er&&!tr){const r=e.target.play();void 0!==r&&r.catch(()=>{})}},onError:()=>ar(!0),style:{display:!ve||er||tr?"none":"block"}})}),(0,$.jsx)("p",{style:{fontSize:"16px"},children:ve?me?"Завантаження...":"Натисніть на карту для активації":"Перевірте інтернет-з'єднання для користування картою"}),(0,$.jsx)("p",{children:"Інтерактивні карти надано сервісами Windy, Ventusky, Карта тривог України і т.д. (містять файли cookie)"}),(0,$.jsx)("p",{children:"Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!"})]}),(0,$.jsx)(R,{"aria-label":"Weather Map",src:me&&ve?hr:void 0,$isLoading:be,$isReady:me,onLoad:()=>ue(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})]})]}),De?(0,k.createPortal)((0,$.jsx)(R,{"aria-label":"Weather Map (PiP)",src:hr,$isLoading:be,$isReady:!0,onLoad:()=>ue(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy",style:{width:"100%",height:"100vh"}}),De.document.body):je&&(0,$.jsxs)(O,{ref:Ve,onDoubleClick:()=>Me(!1),style:{left:Xe.x,top:Xe.y,width:Ae.width,height:Ae.height},children:[(0,$.jsxs)(N,{onMouseDown:e=>{e.target.closest("button")||(e.preventDefault(),qe.current={startX:e.clientX,startY:e.clientY,originX:Xe.x,originY:Xe.y})},children:[(0,$.jsx)(V,{children:"Міні-карта • подвійний клік — назад"}),(0,$.jsxs)(q,{children:[(0,$.jsx)(X,{onClick:e=>{e.stopPropagation(),fr(Ve)},children:we?"Згорнути":"⛶"}),(0,$.jsx)(X,{onClick:e=>{e.stopPropagation(),Me(!1)},children:"✕"})]})]}),(0,$.jsxs)(K,{children:[be&&(0,$.jsx)(W,{children:(0,$.jsx)("p",{children:"Завантаження..."})}),(0,$.jsx)(R,{"aria-label":"Weather Map Mini",src:hr,$isLoading:be,$isReady:!0,onLoad:()=>ue(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,$.jsx)(H,{onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),Ke.current={startX:e.clientX,startY:e.clientY,width:Ae.width,height:Ae.height}}})]})]})]})};export{ne as default};
//# sourceMappingURL=ClimateMap-Ct7zKcoC.js.map