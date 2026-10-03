import{o as h}from"./rolldown-runtime-BNNRdYrd.js";import{$ as k,Di as _,oi as S,pr as z,si as d,ui as r}from"./vendor-react-CP5wybkD.js";import{d as G,u as U}from"./index-gcrBqmc5.js";var l=h(_()),p=h(S()),o=z(),I=d`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,$=d`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,L=d`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,P=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 1000;
  animation: ${a=>a.$isClosing?L:"none"} 0.5s ease-out
    forwards;
`,Y=r.form`
  background: linear-gradient(135deg, #ffffff, #f7fffe);
  padding: 26px;
  border-radius: 14px;
  width: 92%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  animation: ${a=>a.$isClosing?$:I} 0.45s
    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
`,b=r.input`
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,q=r.button`
  background: #ffb36c;
  color: #000;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 6px 12px rgba(255, 179, 108, 0.18);
  width: 100%;
  &:hover {
    transform: translateY(-1px);
  }
`,E=r.button`
  background: #4285f4;
  color: white;
  font-weight: 700;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  box-shadow: 0 6px 12px rgba(66, 133, 244, 0.18);
  &:hover {
    transform: translateY(-1px);
  }
`,A=r.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #000000;
  &:hover {
    color: #ff7b00;
  }
`,M=r.h3`
  font-weight: 900;
  color: black;
`,O=({onClose:a,onLogin:c})=>{const[u,v]=(0,l.useState)(""),[g,y]=(0,l.useState)(""),[f,x]=(0,l.useState)(""),[m,w]=(0,l.useState)(!1),i=t=>{t&&t.stopPropagation(),w(!0),setTimeout(()=>{a()},500)},C=async t=>{t.preventDefault();const e=await p.default.getItem("active_user"),n=await p.default.getItem("registered_user"),s=e||n;s&&s.account===u&&s.password===g?(c(s),i()):x("Невірний Gmail або пароль!")},j=async t=>{t.preventDefault(),t.stopPropagation();try{const e=(await k(U,G)).user,n={uid:e.uid,id:e.uid,account:e.email||"",firstName:e.displayName||e.email||"Користувач",avatar:e.photoURL||"",photoURL:e.photoURL||"",email:e.email||""};await p.default.setItem("active_user",n),c(n),i()}catch(e){console.error("Google Login Error:",e),x("Помилка Google: "+(e.message||e.toString()))}};return(0,o.jsx)(P,{$isClosing:m,onClick:i,children:(0,o.jsxs)(Y,{$isClosing:m,onClick:t=>t.stopPropagation(),onSubmit:C,autoComplete:"off",children:[(0,o.jsx)(A,{onClick:i,children:"×"}),(0,o.jsx)(M,{style:{textAlign:"center"},children:"Вхід"}),(0,o.jsx)("div",{style:{textAlign:"center",fontSize:13,color:"#444",marginTop:-6},children:"Використайте Gmail або натисніть «Увійти з Google»"}),(0,o.jsx)(b,{name:"local-email-input",type:"email",placeholder:"Ваш Gmail (наприклад: you@gmail.com)",value:u,onChange:t=>v(t.target.value),autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true",required:!0}),(0,o.jsx)(b,{name:"local-password-input",type:"password",placeholder:"Пароль (локальний акаунт)",value:g,onChange:t=>y(t.target.value),autoComplete:"off","data-form-type":"other","data-lpignore":"true",required:!0}),f&&(0,o.jsx)("div",{style:{color:"#9b2c2c",fontSize:"13px",textAlign:"center",background:"rgba(255,77,77,0.06)",padding:"8px",borderRadius:8},children:f}),(0,o.jsx)(q,{type:"submit",children:"🔒 Увійти"}),(0,o.jsx)("div",{style:{textAlign:"center",margin:"6px 0",fontSize:"13px",color:"#666"},children:"АБО"}),(0,o.jsx)(E,{type:"button",onClick:j,children:"🔑 Увійти з Google"})]})})};export{O as default};
