import{o as A}from"./rolldown-runtime-BNNRdYrd.js";import{$ as W,Di as K,li as h,oi as Z,pr as H,si as w,ui as a}from"./vendor-react-CP5wybkD.js";import{d as J,r as Q,u as V}from"./index-gcrBqmc5.js";import{t as X}from"./KatSceneModal-CwMqJ75p.js";var l=A(K()),D=A(Z()),t=H(),ee=w`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,re=w`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,te=w`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,z=w`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;h`
  background: linear-gradient(
    270deg,
    #ff7eb3,
    #ff758c,
    #7afcff,
    #feffb7,
    #58e2c2
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${z} 5s ease infinite;
`;var oe=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 1000;
  animation: ${e=>e.$isClosing?te:"none"} 0.5s ease-out
    forwards;
`,ae=a.div`
  background: ${e=>e.$isDarkMode?"linear-gradient(145deg, #1f1f26, #121319)":"linear-gradient(145deg, #fffdf9, #f6f3ff)"};
  color: ${e=>e.$isDarkMode?"#f0f0f0":"#111111"};
  padding: 24px 20px 18px;
  border-radius: 24px;
  width: min(92vw, 440px);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.32);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${e=>e.$isDarkMode?"#3d3f4d":"#f1d9c5"};
  animation: ${e=>e.$isClosing?re:ee} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.7);
    border-radius: 999px;
  }
`,ie=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`,ne=a.button`
  position: absolute;
  top: -4px;
  right: 5px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: ${e=>e.$isDarkMode?"#f5f5f5":"#000000"};
  &:hover {
    color: #ffb36c;
  }
`,se=a.h3`
  text-align: center;
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.02em;
  color: ${e=>e.$isDarkMode?"#fff":"#1b1b1b"};
  width: 100%;
  font-size: 2rem;
  background: linear-gradient(135deg, #ffb36c, #ff7a59, #7ac7ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,de=a.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"#d6d6d6":"#5d5d5d"};
  margin-top: -4px;
`,m=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,M=a.input`
  padding: 12px 14px;
  border: 1px solid ${e=>e.$isDarkMode?"#4d5365":"#ebd4c0"};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  background: ${e=>e.$isDarkMode?"#2a2d38":"rgba(255,255,255,0.7)"};
  transition: all 0.2s ease;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
  &::placeholder {
    color: ${e=>e.$isDarkMode?"#a7abb8":"#7a7a7a"};
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`,S=a.select`
  padding: 11px 12px;
  border: 1px solid ${e=>e.$isDarkMode?"#4d5365":"#ebd4c0"};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  background: ${e=>e.$isDarkMode?"#2a2d38":"rgba(255,255,255,0.75)"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`,le=a.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`,ce=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: ${e=>e.$isDarkMode?"#d7d7d7":"#4e4e4e"};
  padding: 4px 2px;

  input {
    accent-color: #ffb36c;
    width: 15px;
    height: 15px;
  }
`,pe=a.span`
  color: ${e=>(e.$isDarkMode,"#ffb36c")};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;a.div`
  width: 34px;
  height: 34px;
  min-width: 60px;
  min-height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 3px;
  background: ${e=>e.$isSelected?e.$borderColor:"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ${e=>{const p=e.$borderColor?.includes("270deg");if(e.$isSelected&&e.$borderColor?.includes("linear-gradient"))return p?h`
            background-size: 400% 400%;
            animation: ${z} 5s ease infinite;
          `:h`
            background-size: 100% 100%;
            animation: none;
          `}}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
`;a.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding: 5px 2px;
  min-height: 45px;
  align-items: center;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;a.div`
  font-size: 12px;
  font-weight: bold;
  color: grey;
`;a.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 5px 2px;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;a.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${e=>e.$color};
  cursor: pointer;
  border: 2px solid ${e=>e.$isSelected?"#000":"transparent"};
  box-shadow: ${e=>e.$isSelected?"0 0 5px rgba(0,0,0,0.5)":"0 0 2px rgba(0,0,0,0.2)"};

  ${e=>{const p=e.$color?.includes("270deg");if(e.$color?.includes("linear-gradient"))return p?h`
            background-size: 400% 400%;
            animation: ${z} 5s ease infinite;
          `:h`
            background-size: 100% 100%;
            animation: none;
          `}}
`;var ge=a.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8d6c 100%);
  color: ${e=>e.$isDarkMode?"#181818":"#111"};
  font-weight: 800;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 10px 22px rgba(255, 153, 93, 0.25);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(255, 153, 93, 0.3);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  width: 100%;
`,fe=a.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,xe=a.button`
  background: linear-gradient(135deg, #4d8af7 0%, #2d6ae8 100%);
  color: white;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 14px;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 22px rgba(66, 133, 244, 0.25);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(66, 133, 244, 0.32);
  }
`,G=a.div`
  font-size: 12px;
  line-height: 1.4;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.09);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
`,ue=a.div`
  width: 100%;
  height: 7px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
  margin-top: -2px;
`,he=a.div`
  height: 100%;
  border-radius: inherit;
  background: ${e=>e.$color};
  width: ${e=>e.$width};
  transition: width 0.3s ease, background-color 0.3s ease;
`,ke=({onClose:e,onRegister:p,availableAvatars:$=[],isDarkMode:s=!1})=>{const[i,v]=(0,l.useState)({account:"",firstName:"",password:"",confirmPassword:"",avatarIndex:0,textColor:"grey",borderColor:"grey"}),b=(r=>{if(!r)return{width:"0%",color:"transparent",label:""};let o=0;return r.length>=6&&(o+=1),r.length>=8&&(o+=1),(/[A-Z]/.test(r)||/[a-z]/.test(r))&&(o+=1),/\d/.test(r)&&(o+=1),/[^A-Za-z0-9]/.test(r)&&(o+=1),o<=1?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:o<=2?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(i.password),[n,k]=(0,l.useState)({day:"",month:"",year:""}),[y,B]=(0,l.useState)(!1),[I,_]=(0,l.useState)(!1),[F,d]=(0,l.useState)(""),[P,T]=(0,l.useState)(!1),[E]=(0,l.useState)(!1),C=r=>{r&&r.stopPropagation(),T(!0),setTimeout(()=>{e()},500)},N=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],R=Array.from({length:new Date().getFullYear()-1909+1},(r,o)=>1909+o).reverse(),U=Array.from({length:31},(r,o)=>o+1),j=(0,l.useMemo)(()=>{const{day:r,month:o,year:c}=n;if(!r||!o||!c)return!1;const g=parseInt(r),f=parseInt(o),u=parseInt(c),x=new Date(u,f-1,g);return x.getFullYear()!==u||x.getMonth()!==f-1||x.getDate()!==g},[n]),O=(r,o,c)=>{const g=new Date,f=new Date(c,o-1,r);let u=g.getFullYear()-f.getFullYear();const x=g.getMonth()-f.getMonth();return(x<0||x===0&&g.getDate()<f.getDate())&&u--,u},q=async()=>{if(!i.account||!i.password||!n.day||!n.month||!n.year)return d("Заповніть всі поля!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.account))return d("Невірний формат Gmail!");if(j)return d("Такої дати не існує!");if(i.password!==i.confirmPassword)return d("Паролі не співпадають!");if(!y)return d("Прийміть угоду!");if(O(parseInt(n.day),parseInt(n.month),parseInt(n.year))<13)return d("Реєстрація дозволена лише з 13 років!");const r=await D.default.getItem("registered_user");if(r&&r.account===i.account)return d("Акаунт з таким Gmail вже існує!");await Y()},L=async r=>{r.preventDefault(),r.stopPropagation();try{const o=(await W(V,J)).user,c={uid:o.uid,id:o.uid,account:o.email||"",firstName:o.displayName||o.email||"Користувач",password:"",avatar:o.photoURL||($.length?$[i.avatarIndex]:""),photoURL:o.photoURL||"",textColor:i.textColor||"grey",borderColor:i.borderColor||"grey",birthDate:"2000-01-01"};await D.default.setItem("registered_user",c),p(c),C(r)}catch(o){console.error("Google Auth Error:",o),d("Помилка Google: "+(o.message||o.toString()))}},Y=async()=>{const r={account:i.account,firstName:i.firstName||i.account,password:i.password,avatar:$[i.avatarIndex],textColor:i.textColor,borderColor:i.borderColor,birthDate:`${n.year}-${n.month.padStart(2,"0")}-${n.day.padStart(2,"0")}`};await D.default.setItem("registered_user",r),p(r)};return(0,t.jsx)(t.Fragment,{children:E?(0,t.jsx)(X,{onClose:Y}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(oe,{$isClosing:P,onClick:C,children:(0,t.jsxs)(ae,{$isClosing:P,onClick:r=>r.stopPropagation(),$isDarkMode:s,children:[(0,t.jsx)(ne,{onClick:C,$isDarkMode:s,children:"×"}),(0,t.jsx)(se,{$isDarkMode:s,children:"Реєстрація"}),(0,t.jsx)(de,{$isDarkMode:s,children:"Створи акаунт і почни вивчати погоду з комфортом."}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(M,{type:"email",placeholder:"Gmail",onChange:r=>v({...i,account:r.target.value}),$isDarkMode:s})}),(0,t.jsx)(m,{children:(0,t.jsxs)(le,{children:[(0,t.jsxs)(S,{value:n.day,onChange:r=>k({...n,day:r.target.value}),$isDarkMode:s,children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"День"}),U.map(r=>(0,t.jsx)("option",{value:r,children:r},r))]}),(0,t.jsxs)(S,{value:n.month,onChange:r=>k({...n,month:r.target.value}),$isDarkMode:s,children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Місяць"}),N.map((r,o)=>(0,t.jsx)("option",{value:o+1,children:r},o))]}),(0,t.jsxs)(S,{value:n.year,onChange:r=>k({...n,year:r.target.value}),$isDarkMode:s,children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Рік"}),R.map(r=>(0,t.jsx)("option",{value:r,children:r},r))]})]})}),j&&(0,t.jsx)(G,{children:"Такої дати не існує!"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(M,{name:"signup-password-field",type:"password",placeholder:"Пароль",onChange:r=>v({...i,password:r.target.value}),$isDarkMode:s,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),i.password&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ue,{$isDarkMode:s,children:(0,t.jsx)(he,{$color:b.color,$width:b.width})}),(0,t.jsxs)("span",{style:{fontSize:"11px",fontWeight:"bold",color:b.color,alignSelf:"flex-end",marginTop:"-2px"},children:["Надійність: ",b.label]})]})]}),(0,t.jsx)(m,{children:(0,t.jsx)(M,{name:"signup-confirm-password-field",type:"password",placeholder:"Підтвердіть пароль",onChange:r=>v({...i,confirmPassword:r.target.value}),$isDarkMode:s,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"})}),F&&(0,t.jsx)(G,{children:F}),(0,t.jsxs)(ce,{$isDarkMode:s,children:[(0,t.jsx)("input",{type:"checkbox",checked:y,onChange:r=>B(r.target.checked)}),(0,t.jsxs)("label",{children:["Я погоджуюсь з"," ",(0,t.jsx)(pe,{$isDarkMode:s,onClick:()=>_(!0),children:"Угодою"})]})]}),(0,t.jsxs)(fe,{children:[(0,t.jsx)(ge,{onClick:q,disabled:!y||j,$isDarkMode:s,children:"Зареєструватися"}),(0,t.jsx)(xe,{type:"button",onClick:L,children:"🔑 Google Вхід"})]})]})]})}),I&&(0,t.jsx)(Q,{isOpen:I,onClose:()=>_(!1)})]})})};export{ke as default};
