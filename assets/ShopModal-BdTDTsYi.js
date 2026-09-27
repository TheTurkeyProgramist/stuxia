import{o as x}from"./rolldown-runtime-BNNRdYrd.js";import{Kr as e,Ur as a,ci as f,si as g}from"./vendor-react-BrnrJ3qF.js";import{_ as s,h as d,m as l}from"./index-gM6wV9Mf.js";var b=x(g()),i="/assets/dog-CQtbme_R.webp",u="/assets/shop-C1MYYDqY.webp",h="/assets/image-CzDP_aKm.svg",t=f(),m=a`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,v=a`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,w=a`
  from { opacity: 0; }
  to { opacity: 1; }
`,k=e.div`
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
`,y=e.div`
  background-color: #2b1313;
  color: #fff;
  width: 100%;
  max-height: 95%;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${o=>o.$isClosing?v:m} 0.5s ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`,_=e.button`
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
`,C=e.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,j=e.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid #ff6c6c;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,z=e.div`
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
`;e.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 108, 108, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
`;var T=e.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  gap: 8px;
`,U=e.div`
  font-weight: bold;
  font-size: 17px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`,Y=e.div`
  display: flex;
  align-items: center;
`,$=e.a`
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
`,I=e.div`
  color: #f8f1c6;
  font-size: 13px;
  font-style: italic;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`,P=e.div`
  animation: ${w} 0.4s ease-out;
`,M=({onClose:o})=>{const[c,p]=(0,b.useState)(!1),n=()=>{p(!0),setTimeout(o,500)};return(0,t.jsx)(k,{onClick:n,children:(0,t.jsxs)(y,{$isClosing:c,onClick:r=>r.stopPropagation(),children:[(0,t.jsx)(_,{onClick:n,children:"×"}),(0,t.jsx)(C,{children:"Замок Доміно"}),(0,t.jsx)(P,{children:(0,t.jsx)(j,{children:[{id:"domino",count:"Замок Доміно",img:u,icon:h,isCharacter:!0},{id:"uanimals",count:"Допомога тваринам",img:i,icon:i,buttonText:"Підтримати UAnimals",linkUrl:"https://uanimals.org/"},{id:"ecoaction",count:"Захист природи",img:s,icon:s,buttonText:"Підтримати Екодію",linkUrl:"https://ecoaction.org.ua/"},{id:"ifaw",count:"Міжнародний порятунок тварин",img:d,icon:d,buttonText:"Підтримати IFAW",linkUrl:"https://www.ifaw.org/"},{id:"greenpeace",count:"Захист планети",img:l,icon:l,buttonText:"Підтримати Greenpeace",linkUrl:"https://www.greenpeace.org/international/"},{id:"happypaw",count:"Притулки для тварин",img:i,icon:i,buttonText:"Підтримати Happy Paw",linkUrl:"https://happypaw.ua/"}].map(r=>(0,t.jsx)(z,{$bgImage:r.img,children:(0,t.jsxs)(T,{children:[r.count&&(0,t.jsx)(U,{children:r.count}),(0,t.jsx)(Y,{children:r.isCharacter?(0,t.jsx)(I,{children:"Мене звати Доміно, я люблю давнє кіно. Підтримай фонди будь ласка!"}):(0,t.jsx)($,{href:r.linkUrl,target:"_blank",rel:"noopener noreferrer",children:r.buttonText})})]})},r.id))})})]})})};export{M as default};
