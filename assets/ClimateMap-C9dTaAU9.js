import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{n as t}from"./vendor-react-BRTeEVAI.js";import{n as a}from"./vendor-markdown-ADGh9TTx.js";import{n as o}from"./vendor-utils-o-f_e4rV.js";import{B as i,Kn as n,bt as s,i as d,r as l,tt as c}from"./vendor-ui-BTt87RKE.js";import{t as p}from"./vendor-ai-CzXiCoTt.js";import{C as g,S as x,i as b,r as u,w as f}from"./index-DsXpZiTT.js";var h=e(r()),m=e(t()),k=e(o()),v=a();x`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;var w=f.div`
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
  ${e=>e.$isStickyBgMode?g`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:g`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,$=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,y=f.div`
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
    background-image: url(${"/assets/climate-3SqiuMmu.webp"});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`,j=f.div`
  display: none;
`,M=f.kbd`
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
`,D=f.button`
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
`,S=f.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: flex-end;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(2, 5, 12, 0.55)":"rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,z=f.div`
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
`,C=f.div`
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
`,E=f.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`;f.div`
  height: 1px;
  margin: 8px 0 2px;
  background: linear-gradient(90deg, rgba(255,179,108,0.12), rgba(255,255,255,0.05), transparent);
`;var _=f.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.55)":"rgba(160,70,0,0.55)"};
  padding: 0 2px;
  margin-top: 10px;
  margin-bottom: 2px;
`,L=f.button`
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
`,P=f.span`
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
`,I=f.button`
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
`,Y=f.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${e=>e.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?"0":"1"};
`,R=f.div`
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
`,W=f.div`
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
`,F=f.video`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: screen;
  opacity: 0.96;
  transition: opacity 300ms ease, filter 300ms ease;
  filter: brightness(1.04);
`,B=f.button`
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
`,X=f.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,T=f.input`
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
`,A=f.div`
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
`,N=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,O=f.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,q=f.div`
  display: flex;
  gap: 6px;
`,V=f.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,K=f.div`
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
`,G=x`
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(4px); }
`,H=f.span`
  display: inline-block;
  animation: ${G} 3s ease-in-out infinite;
  color: #ffb36c;
  font-weight: 700;
`,J=f.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,U=f.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 12px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,179,108,0.04)":"rgba(255,179,108,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.14)":"rgba(200,100,0,0.18)"};
`,Q=f.input`
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
`,Z=f.button`
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
`,ee=f.select`
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
`,re=f.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
`,te=f.select`
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
`,ae=f.div`
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
`,oe=f.select`
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
`,ie=({isDarkMode:e,isStickyBgMode:r})=>{const[t,a]=(0,h.useState)(48.379),[o,g]=(0,h.useState)(31.165),[x,f]=(0,h.useState)(5),[G,ie]=(0,h.useState)(!1),[ne,se]=(0,h.useState)(!1),[de,le]=(0,h.useState)(""),[ce,pe]=(0,h.useState)(!1),[ge,xe]=(0,h.useState)(""),[be,ue]=(0,h.useState)(!0),[fe,he]=(0,h.useState)("wind"),[me,ke]=(0,h.useState)(!1),[ve,we]=(0,h.useState)(()=>"undefined"==typeof navigator||navigator.onLine),[$e,ye]=(0,h.useState)(!1),[je,Me]=(0,h.useState)(!1),[De,Se]=(0,h.useState)(null),[ze,Ce]=(0,h.useState)("ventusky"),[Ee,_e]=(0,h.useState)(!1),Le=["/assets/pixelturkey-KW2VmpPY.webp","/assets/twoturkey-BYSCG93W.webp"],[Pe,Ie]=(0,h.useState)(0),[Ye,Re]=(0,h.useState)("auto"),[We,Fe]=(0,h.useState)(!1),Be="always"===Ye||"auto"===Ye&&!We;(0,h.useEffect)(()=>{const e=window.matchMedia("(pointer: coarse)"),r=()=>Fe(e.matches);return r(),e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),(0,h.useEffect)(()=>{const e=setInterval(()=>{Ie(e=>(e+1)%Le.length)},1500);return()=>clearInterval(e)},[]);const[Xe,Te]=(0,h.useState)(()=>"undefined"==typeof window?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[Ae,Ne]=(0,h.useState)({width:320,height:220}),Oe=(0,h.useRef)(null),qe=(0,h.useRef)(null),Ve=(0,h.useRef)(null),Ke=(0,h.useRef)(null),[Ge,He]=(0,h.useState)([]),[Je,Ue]=(0,h.useState)(""),[Qe,Ze]=(0,h.useState)(""),[er,rr]=(0,h.useState)(()=>{if("undefined"==typeof navigator||!navigator.onLine)return!0;if(navigator.connection){const e=navigator.connection;if(e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))return!0}return!1}),[tr,ar]=(0,h.useState)(!1),[or,ir]=(0,h.useState)(!1),nr=(0,h.useRef)(null),sr=!me||be||!ve;(0,h.useEffect)(()=>{!ve||er||tr||ir(!0)},[ve,er,tr]),(0,h.useEffect)(()=>{const e=nr.current;if(e)if(sr&&ve&&!er&&!tr&&or){const r=e.play();void 0!==r&&r.catch(()=>{})}else e.pause()},[sr,ve,er,tr,or]),(0,h.useEffect)(()=>{const e=()=>{ye(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]),(0,h.useEffect)(()=>{const e=()=>{const e="undefined"==typeof navigator||navigator.onLine;if(we(e),e)if("undefined"!=typeof navigator&&navigator.connection){const e=navigator.connection;rr(!!e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))}else rr(!1);else rr(!0)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.addEventListener("change",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.removeEventListener("change",e)}},[]);const dr=async e=>{Ce(e);try{await k.default.setItem("selected_climate_provider",e)}catch(r){}},lr=async()=>{ke(!0),b.success("Карту увімкнено",{icon:"🗺️",duration:1800});try{await k.default.setItem("map_last_unlocked_time",Date.now())}catch(e){}},cr=(0,h.useMemo)(()=>["Налаштування Стихії","Додавання карти(фреймів)","Налаштування Стихії","Пошук місця","Налаштування Стихії","Закріпити локацію","Налаштування Стихії","Карти та безліч функцій","Налаштування Стихії","Міні-плеєр карти","Налаштування Стихії","Повноекранний режим"],[]),[pr,gr]=(0,h.useState)(0);(0,h.useEffect)(()=>{const e=setInterval(()=>{gr(e=>(e+1)%cr.length)},3e3);return()=>clearInterval(e)},[cr]),(0,h.useEffect)(()=>{(async()=>{try{const e=await k.default.getItem("gemini_api_key");e&&xe(e);const r=await k.default.getItem("selected_climate_provider");r&&Ce(r);const t=await k.default.getItem("climate_keyboard_shortcut_mode");["none","auto","always"].includes(t)&&Re(t);const o=await k.default.getItem("pinned_map_location");o&&(a(o.lat),g(o.lon),f(o.zoom),o.overlay&&he(o.overlay),o.provider&&Ce(o.provider),_e(!0));const i=await k.default.getItem("map_last_unlocked_time");i&&Date.now()-i<6048e5&&ke(!0);const n=await k.default.getItem("climate_custom_user_frames");n&&Array.isArray(n)&&He(n)}catch(e){}})()},[]);const xr=async e=>{He(e);try{await k.default.setItem("climate_custom_user_frames",e)}catch(r){}},br=async e=>{e&&e.stopPropagation();try{await k.default.setItem("pinned_map_location",{lat:t,lon:o,zoom:x,overlay:fe,provider:ze}),await k.default.setItem("selected_climate_provider",ze),_e(!0),b.success("Локацію закріплено! Завантажиться при наступному вході.",{duration:3e3,icon:"📍"})}catch(r){b.error("Помилка при закріпленні локації.")}},ur=async()=>{if(window.documentPictureInPicture)try{const e=await window.documentPictureInPicture.requestWindow({width:400,height:300});e.document.body.style.margin="0",e.document.body.style.overflow="hidden",e.document.body.style.background="#1a1a1a",e.addEventListener("pagehide",()=>{Se(null),Me(!1)}),Se(e),Me(!0)}catch(e){Me(!0)}else Me(!0)};(0,h.useEffect)(()=>{const e=e=>{if(Ve.current){const{startX:r,startY:t,originX:a,originY:o}=Ve.current,i=Math.max(8,Math.min(window.innerWidth-120,a+e.clientX-r)),n=Math.max(8,Math.min(window.innerHeight-80,o+e.clientY-t));Te({x:i,y:n})}if(Ke.current){const{startX:r,startY:t,width:a,height:o}=Ke.current,i=Math.max(260,Math.min(window.innerWidth-24,a+e.clientX-r)),n=Math.max(200,Math.min(window.innerHeight-24,o+e.clientY-t));Ne({width:i,height:n})}},r=()=>{Ve.current=null,Ke.current=null};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r)}},[]);const fr=(e=Oe)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.current?.requestFullscreen&&e.current.requestFullscreen()};(0,h.useEffect)(()=>{const e=e=>{if(!["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)&&e.shiftKey&&e.ctrlKey)switch(e.key.toLowerCase()){case"m":e.preventDefault(),ke(e=>!e);break;case"f":e.preventDefault(),fr();break;case"p":e.preventDefault(),je?De?De.close():Me(!1):ur();break;case"w":{e.preventDefault();const r=["ventusky","windy",...Ge.map(e=>e.id)];Ce(e=>{const t=(r.indexOf(e)+1)%r.length;return r[t]});break}case"s":e.preventDefault(),ie(e=>!e);break;case"l":e.preventDefault(),br();break;case"k":e.preventDefault(),setIsFramesModalOpen(e=>!e)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[je,De,Ge]);const hr=(0,h.useMemo)(()=>{if("windy"===ze)return`https://embed.windy.com/embed2.html?lat=${t}&lon=${o}&zoom=${x}&level=surface&overlay=${fe}&menu=&message=true&marker=`;if("ventusky"===ze){let e=fe;return"rain"===fe&&(e="rain-3h"),"temp"===fe&&(e="temperature"),"clouds"===fe&&(e="cloud-cover"),`https://www.ventusky.com/?p=${t};${o};${x}&l=${e}`}if("alerts-ua"===ze)return"https://alerts.in.ua/";if("excalidraw"===ze)return"https://excalidraw.com/";if("saveecobot"===ze)return"https://www.saveecobot.com/maps";if("radarbox"===ze)return"https://www.radarbox.com/";const e=Ge.find(e=>e.id===ze);if(e)return e.url;let r=fe;return"rain"===fe&&(r="rain-3h"),"temp"===fe&&(r="temperature"),"clouds"===fe&&(r="cloud-cover"),`https://www.ventusky.com/?p=${t};${o};${x}&l=${r}`},[ze,t,o,x,fe,Ge]);return(0,h.useEffect)(()=>{ue(ve)},[ze,t,o,x,fe,ve]),(0,v.jsxs)($,{children:[(0,v.jsx)(w,{$isDarkMode:e,$isStickyBgMode:r,children:"Кліматична мапа"}),(0,v.jsx)(u,{position:"bottom-center",toastOptions:{duration:2500,style:{background:e?"rgba(20,24,36,0.97)":"rgba(255,252,245,0.98)",color:e?"#f0e8d8":"#2a1000",border:e?"1px solid rgba(255,179,108,0.25)":"1px solid rgba(200,100,0,0.2)",borderRadius:"10px",fontSize:"13px",fontWeight:500,boxShadow:e?"0 8px 32px rgba(0,0,0,0.5)":"0 8px 32px rgba(0,0,0,0.12)",padding:"10px 14px"},success:{iconTheme:{primary:"#5dca70",secondary:e?"#111":"#fff"}},error:{iconTheme:{primary:"#e07070",secondary:e?"#111":"#fff"}}}}),(0,v.jsx)(D,{$isDarkMode:e,type:"button",onClick:()=>se(!0),"aria-label":cr[pr],children:(0,v.jsx)(H,{children:cr[pr]},pr)}),(0,v.jsxs)(y,{ref:Oe,$isFullscreen:$e,onClick:()=>!me&&lr(),children:[(0,v.jsxs)(j,{$isOpen:ne,children:[G&&(0,v.jsxs)(X,{onSubmit:async e=>{if(e?.preventDefault(),de.trim()&&!ce)if(ge){pe(!0);try{const e=new p(ge).getGenerativeModel({model:"gemini-2.5-flash",tools:[{googleSearch:{}}]}),r=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. \n      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.\n      Запит: ${de}`;let t=(await(await e.generateContent(r)).response).text().trim();t.startsWith("```json")?t=t.replace(/```json/g,"").replace(/```/g,"").trim():t.startsWith("```")&&(t=t.replace(/```/g,"").trim());const o=JSON.parse(t);Number.isFinite(o.lat)&&Number.isFinite(o.lon)&&(a(o.lat),g(o.lon),le(""),ie(!1),ke(!0),b.success(`Локацію знайдено! ${de}`,{icon:"🗺️"}))}catch(r){b.error("Не вдалося знайти локацію. Спробуйте змінити запит.")}finally{pe(!1)}}else b.error("API-ключ Gemini не знайдено. Додайте його в налаштуваннях ШІ.",{icon:"🔑"})},children:[(0,v.jsx)(T,{value:de,onChange:e=>le(e.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,v.jsx)(B,{type:"submit",$active:!0,disabled:ce,onClick:e=>e.stopPropagation(),children:ce?"Шукаю...":"Знайти"})]}),(0,v.jsx)(B,{onClick:e=>{e.stopPropagation(),ie(!G)},children:"ШІ Пошук"}),(0,v.jsx)(B,{onClick:br,children:"Закріпити"}),(0,v.jsxs)(ee,{value:ze,onChange:e=>dr(e.target.value),onClick:e=>e.stopPropagation(),"aria-label":"Оберіть джерело мапи",children:[(0,v.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,v.jsx)("option",{value:"windy",children:"Windy"}),(0,v.jsx)("option",{value:"alerts-ua",children:"Карта тривог України"}),(0,v.jsx)("option",{value:"excalidraw",children:"Онлайн-дошка (Excalidraw)"}),(0,v.jsx)("option",{value:"saveecobot",children:"Якість повітря (SaveEcoBot)"}),(0,v.jsx)("option",{value:"radarbox",children:"Моніторинг польотів (RadarBox)"}),Ge.map(e=>(0,v.jsx)("option",{value:e.id,children:e.title},e.id))]}),(0,v.jsx)("div",{style:{height:"1px",background:"rgba(255,255,255,0.2)",margin:"4px 0"}}),(0,v.jsx)(B,{onClick:e=>{e.stopPropagation(),me?ke(!1):lr()},style:{border:me?"1px solid #ff4d4d":"1px solid skyblue"},children:me?"Деактивувати":"Активувати"}),(0,v.jsx)(B,{onClick:e=>{e.stopPropagation(),fr()},children:$e?"Згорнути":"На весь екран"}),(0,v.jsx)(B,{onClick:e=>{e.stopPropagation(),je?De?De.close():Me(!1):ur()},children:je?"Закрити міні-плеєр":"Міні-плеєр"})]}),ne&&(0,v.jsx)(S,{$isDarkMode:e,onClick:()=>se(!1),children:(0,v.jsxs)(z,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,v.jsxs)(C,{$isDarkMode:e,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:(0,v.jsx)(H,{children:cr[pr]},pr)}),(0,v.jsx)("p",{children:"Керуйте картою та її джерелом"})]}),(0,v.jsx)(I,{$isDarkMode:e,type:"button",onClick:()=>se(!1),children:"×"})]}),(0,v.jsx)(_,{$isDarkMode:e,children:"Налаштування"}),(0,v.jsxs)(ae,{$isDarkMode:e,children:[(0,v.jsx)(i,{}),(0,v.jsxs)(E,{children:[(0,v.jsx)("strong",{children:"Комбінації клавіш"}),(0,v.jsx)("span",{children:"Показувати підказки клавіш поруч з діями?"})]}),(0,v.jsxs)(oe,{$isDarkMode:e,value:Ye,onChange:async e=>{const r=e.target.value;Re(r);try{await k.default.setItem("climate_keyboard_shortcut_mode",r)}catch(t){}},children:[(0,v.jsx)("option",{value:"none",children:"Без"}),(0,v.jsx)("option",{value:"auto",children:"Авто"}),(0,v.jsx)("option",{value:"always",children:"Так"})]})]}),(0,v.jsx)(_,{$isDarkMode:e,children:"Карта"}),(0,v.jsxs)(L,{$isDarkMode:e,$active:me,$danger:me,type:"button",onClick:()=>me?(async()=>{ke(!1),b("Карту вимкнено",{icon:"🔒",duration:1800});try{await k.default.removeItem("map_last_unlocked_time")}catch(e){}})():lr(),children:[(0,v.jsx)(n,{}),(0,v.jsxs)(E,{children:[(0,v.jsx)("strong",{children:me?"Деактивувати карту":"Активувати карту"}),(0,v.jsx)(P,{$on:me,children:me?"● Увімкнено":"○ Вимкнено"})]}),(0,v.jsx)(M,{$visible:Be,children:"Ctrl + Shift + M"})]}),(0,v.jsxs)(L,{$isDarkMode:e,$active:Ee,type:"button",onClick:Ee?async e=>{e&&e.stopPropagation();try{await k.default.removeItem("pinned_map_location"),await k.default.removeItem("selected_climate_provider"),_e(!1),b("Закріплення локації знято.",{icon:"📌",duration:2e3})}catch(r){}}:br,children:[(0,v.jsx)(c,{}),(0,v.jsxs)(E,{children:[(0,v.jsx)("strong",{children:Ee?"Відкріпити локацію":"Закріпити локацію"}),(0,v.jsx)(P,{$on:Ee,children:Ee?"● Закріплено":"○ Не закріплено"})]}),(0,v.jsx)(M,{$visible:Be,children:"Ctrl + Shift + L"})]}),(0,v.jsxs)(L,{$isDarkMode:e,type:"button",onClick:()=>fr(),children:[(0,v.jsx)(d,{}),(0,v.jsxs)(E,{children:[(0,v.jsx)("strong",{children:$e?"Згорнути карту":"Відкрити на весь екран"}),(0,v.jsx)("span",{children:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд."})]}),(0,v.jsx)(M,{$visible:Be,children:"Ctrl + Shift + F"})]}),(0,v.jsxs)(L,{$isDarkMode:e,type:"button",onClick:ur,children:[(0,v.jsx)(l,{}),(0,v.jsxs)(E,{children:[(0,v.jsx)("strong",{children:"Міні-плеєр карти"}),(0,v.jsx)("span",{children:"Винести карту в окреме плаваюче вікно для паралельної роботи."})]}),(0,v.jsx)(M,{$visible:Be,children:"Ctrl + Shift + P"})]}),(0,v.jsx)(_,{$isDarkMode:e,children:"Джерело карти"}),(0,v.jsxs)(re,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,v.jsxs)(L,{$isDarkMode:e,style:{background:"none",border:"none",borderRadius:0,margin:0,padding:"10px 44px 10px 12px"},type:"button",children:[(0,v.jsx)(s,{}),(0,v.jsxs)(E,{children:[(0,v.jsx)("strong",{children:"Джерело карти"}),(0,v.jsx)("span",{children:"Windy, Ventusky, Тривоги, Excalidraw, SaveEcoBot та RadarBox"})]}),(0,v.jsx)(M,{$visible:Be,children:"Ctrl + Shift + W"})]}),(0,v.jsxs)(te,{$isDarkMode:e,value:ze,onChange:e=>dr(e.target.value),children:[(0,v.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,v.jsx)("option",{value:"windy",children:"Windy"}),(0,v.jsx)("option",{value:"alerts-ua",children:"Карта тривог України"}),(0,v.jsx)("option",{value:"excalidraw",children:"Онлайн-дошка (Excalidraw)"}),(0,v.jsx)("option",{value:"saveecobot",children:"Якість повітря (SaveEcoBot)"}),(0,v.jsx)("option",{value:"radarbox",children:"Моніторинг польотів (RadarBox)"}),Ge.map(e=>(0,v.jsx)("option",{value:e.id,children:e.title},e.id))]})]}),(0,v.jsx)(_,{$isDarkMode:e,children:"Власний фрейм / віджет"}),(0,v.jsxs)(U,{$isDarkMode:e,onSubmit:e=>{if(e.preventDefault(),!Qe.trim())return;let r=Qe.trim();const t=r.match(/src=["']([^"']+)["']/i);if(t&&(r=t[1]),!r.startsWith("http://")&&!r.startsWith("https://"))return void b.error("Будь ласка, введіть коректне посилання (https://...)");const a=Je.trim()||"Власний віджет",o={id:"custom-"+Date.now(),title:a,url:r},i=[...Ge,o];xr(i),Ce(o.id),Ue(""),Ze("")},onClick:e=>e.stopPropagation(),children:[(0,v.jsx)(Q,{$isDarkMode:e,type:"text",placeholder:"Назва (напр. Радар, Вебкамера...)",value:Je,onChange:e=>Ue(e.target.value)}),(0,v.jsxs)(J,{children:[(0,v.jsx)(Q,{$isDarkMode:e,type:"text",placeholder:"URL або iframe код (https://...)",value:Qe,onChange:e=>Ze(e.target.value),style:{width:"100%",paddingRight:"88px"},required:!0}),(0,v.jsx)(Z,{type:"submit",style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px"},children:"Додати"})]}),Ge.length>0&&(0,v.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,v.jsx)("span",{style:{fontSize:"10px",color:e?"rgba(255,255,255,0.35)":"rgba(100,50,0,0.45)",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Збережені:"}),Ge.map(r=>(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",padding:"6px 10px",borderRadius:"7px",border:e?"1px solid rgba(255,255,255,0.07)":"1px solid rgba(0,0,0,0.08)"},children:[(0,v.jsx)("span",{style:{fontSize:"12px",color:e?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.8)"},children:r.title}),(0,v.jsx)("button",{type:"button",onClick:()=>(e=>{const r=Ge.filter(r=>r.id!==e);xr(r),ze===e&&dr("ventusky")})(r.id),style:{background:"transparent",border:"none",color:"rgba(255,80,80,0.7)",cursor:"pointer",fontSize:"13px",padding:"2px 4px",borderRadius:"4px"},title:"Видалити",children:"🗑️"})]},r.id))]})]})]})}),je?(0,v.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:"Закрийте міні-плеєр щоб повернути карту"}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(R,{"aria-hidden":!sr,style:{visibility:sr?"visible":"hidden"},children:[!ve||er||tr?(0,v.jsx)("img",{src:Le[Pe],alt:"Це Доміно :)",style:{width:"340px",height:"210px",imageRendering:"pixelated",marginBottom:"-20px"}}):null,(0,v.jsx)(W,{children:(0,v.jsx)(F,{ref:nr,src:or?"/assets/turkey-compressed-DAbp5j3_.webm":void 0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:!ve||er||tr?"none":"auto",onCanPlay:e=>{if(sr&&ve&&!er&&!tr){const r=e.target.play();void 0!==r&&r.catch(()=>{})}},onError:()=>ar(!0),style:{display:!ve||er||tr?"none":"block"}})}),(0,v.jsx)("p",{style:{fontSize:"16px"},children:ve?me?"Завантаження...":"Натисніть на карту для активації":"Перевірте інтернет-з'єднання для користування картою"}),(0,v.jsx)("p",{children:"Інтерактивні карти надано сервісами Windy, Ventusky, Карта тривог України і т.д. (містять файли cookie)"}),(0,v.jsx)("p",{children:"Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!"})]}),(0,v.jsx)(Y,{"aria-label":"Weather Map",src:me&&ve?hr:void 0,$isLoading:be,$isReady:me,onLoad:()=>ue(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})]})]}),De?(0,m.createPortal)((0,v.jsx)(Y,{"aria-label":"Weather Map (PiP)",src:hr,$isLoading:be,$isReady:!0,onLoad:()=>ue(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy",style:{width:"100%",height:"100vh"}}),De.document.body):je&&(0,v.jsxs)(A,{ref:qe,onDoubleClick:()=>Me(!1),style:{left:Xe.x,top:Xe.y,width:Ae.width,height:Ae.height},children:[(0,v.jsxs)(N,{onMouseDown:e=>{e.target.closest("button")||(e.preventDefault(),Ve.current={startX:e.clientX,startY:e.clientY,originX:Xe.x,originY:Xe.y})},children:[(0,v.jsx)(O,{children:"Міні-карта • подвійний клік — назад"}),(0,v.jsxs)(q,{children:[(0,v.jsx)(B,{onClick:e=>{e.stopPropagation(),fr(qe)},children:$e?"Згорнути":"⛶"}),(0,v.jsx)(B,{onClick:e=>{e.stopPropagation(),Me(!1)},children:"✕"})]})]}),(0,v.jsxs)(V,{children:[be&&(0,v.jsx)(R,{children:(0,v.jsx)("p",{children:"Завантаження..."})}),(0,v.jsx)(Y,{"aria-label":"Weather Map Mini",src:hr,$isLoading:be,$isReady:!0,onLoad:()=>ue(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,v.jsx)(K,{onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),Ke.current={startX:e.clientX,startY:e.clientY,width:Ae.width,height:Ae.height}}})]})]})]})};export{ie as default};
//# sourceMappingURL=ClimateMap-C9dTaAU9.js.map