import{o}from"./rolldown-runtime-C_JJxWoe.js";import{r as e}from"./vendor-i18n-4XGuJdvG.js";import{n as i}from"./vendor-markdown-ADGh9TTx.js";import{S as t,_ as r,g as n,w as a,y as s}from"./index-DsXpZiTT.js";var d=o(e()),l="/assets/dog-CQtbme_R.webp",c="/assets/shop-C1MYYDqY.webp",p="/assets/image-CzDP_aKm.svg",x=i(),f=t`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,g=t`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,b=t`
  from { opacity: 0; }
  to { opacity: 1; }
`,m=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 2000;
`,h=a.div`
  background-color: #2b1313;
  color: #fff;
  width: 100%;
  max-height: 95%;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${o=>o.$isClosing?g:f} 0.5s ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`,u=a.button`
  position: absolute;
  top: -20px;
  right: 5px;
  background: transparent;
  border: none;
  color: #ff6c6c;
  font-size: 42px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`,w=a.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,k=a.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid #ff6c6c;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,v=a.div`
  position: relative;
  border-bottom: 1px solid #ff6c6c;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  min-height: 120px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;
  overflow: hidden;
  background-image: url(${o=>o.$bgImage});
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    &:nth-child(odd) {
      border-right: 1px solid #ff6c6c;
      min-height: 180px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.55); 
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;a.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 108, 108, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
`;var y=a.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  gap: 8px;
`,j=a.div`
  font-weight: bold;
  font-size: 17px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`,z=a.div`
  display: flex;
  align-items: center;
`,C=a.a`
  padding: 8px 16px;
  background: linear-gradient(135deg, #a124db 0%, #7b00ff 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    background: linear-gradient(135deg, #b53ee6 0%, #8f1aff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }
`,Y=a.div`
  color: #f8f1c6;
  font-size: 13px;
  font-style: italic;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`,T=a.div`
  animation: ${b} 0.4s ease-out;
`,U=({onClose:o})=>{const[e,i]=(0,d.useState)(!1),t=()=>{i(!0),setTimeout(o,500)};return(0,x.jsx)(m,{onClick:t,children:(0,x.jsxs)(h,{$isClosing:e,onClick:o=>o.stopPropagation(),children:[(0,x.jsx)(u,{onClick:t,children:"×"}),(0,x.jsx)(w,{children:"Замок Доміно"}),(0,x.jsx)(T,{children:(0,x.jsx)(k,{children:[{id:"domino",count:"Замок Доміно",img:c,icon:p,isCharacter:!0},{id:"uanimals",count:"Допомога тваринам",img:l,icon:l,buttonText:"Підтримати UAnimals",linkUrl:"https://uanimals.org/"},{id:"ecoaction",count:"Захист природи",img:s,icon:s,buttonText:"Підтримати Екодію",linkUrl:"https://ecoaction.org.ua/"},{id:"ifaw",count:"Міжнародний порятунок тварин",img:r,icon:r,buttonText:"Підтримати IFAW",linkUrl:"https://www.ifaw.org/"},{id:"greenpeace",count:"Захист планети",img:n,icon:n,buttonText:"Підтримати Greenpeace",linkUrl:"https://www.greenpeace.org/international/"},{id:"happypaw",count:"Притулки для тварин",img:l,icon:l,buttonText:"Підтримати Happy Paw",linkUrl:"https://happypaw.ua/"}].map(o=>(0,x.jsx)(v,{$bgImage:o.img,children:(0,x.jsxs)(y,{children:[o.count&&(0,x.jsx)(j,{children:o.count}),(0,x.jsx)(z,{children:o.isCharacter?(0,x.jsx)(Y,{children:"Мене звати Доміно, я люблю давнє кіно. Підтримай фонди будь ласка!"}):(0,x.jsx)(C,{href:o.linkUrl,target:"_blank",rel:"noopener noreferrer",children:o.buttonText})})]})},o.id))})})]})})};export{U as default};
//# sourceMappingURL=ShopModal-Xktq-0oc.js.map