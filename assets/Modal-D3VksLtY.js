import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{t as o}from"./UserSearchModal-DT7olEf5.js";import{_ as a}from"./vendor-firebase-CjTrerxT.js";import{n as t}from"./vendor-markdown-ADGh9TTx.js";import{i,r as n,t as s}from"./styled-components.browser.esm-_LeWE6wZ.js";import{n as d}from"./vendor-utils-o-f_e4rV.js";import{f as l,m as p,p as c}from"./index-YdQqwtry.js";import{t as x}from"./KatSceneModal-D_YeKxzG.js";var g=e(r()),f=e(d()),b=t(),u=s`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,h=s`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,m=s`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,w=s`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;n`
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
  animation: ${w} 5s ease infinite;
`;var k=i.div`
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
  animation: ${e=>e.$isClosing?m:"none"} 0.5s ease-out
    forwards;
`,$=i.div`
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
  animation: ${e=>e.$isClosing?h:u} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.7);
    border-radius: 999px;
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`,v=i.button`
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
`,j=i.h3`
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
`,D=i.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"#d6d6d6":"#5d5d5d"};
  margin-top: -4px;
`,C=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,M=i.input`
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
`,z=i.select`
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
`,S=i.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`,I=i.div`
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
`,Y=i.span`
  color: ${e=>(e.$isDarkMode,"#ffb36c")};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;i.div`
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

  ${e=>{const r=e.$borderColor?.includes("270deg");if(e.$isSelected&&e.$borderColor?.includes("linear-gradient"))return r?n`
            background-size: 400% 400%;
            animation: ${w} 5s ease infinite;
          `:n`
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
`,i.div`
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
`,i.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,i.div`
  font-size: 12px;
  font-weight: bold;
  color: grey;
`,i.div`
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
`,i.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${e=>e.$color};
  cursor: pointer;
  border: 2px solid ${e=>e.$isSelected?"#000":"transparent"};
  box-shadow: ${e=>e.$isSelected?"0 0 5px rgba(0,0,0,0.5)":"0 0 2px rgba(0,0,0,0.2)"};

  ${e=>{const r=e.$color?.includes("270deg");if(e.$color?.includes("linear-gradient"))return r?n`
            background-size: 400% 400%;
            animation: ${w} 5s ease infinite;
          `:n`
            background-size: 100% 100%;
            animation: none;
          `}}
`;var F=i.button`
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
`,P=i.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,A=i.button`
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
`,G=i.div`
  font-size: 12px;
  line-height: 1.4;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.09);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
`,N=i.div`
  width: 100%;
  height: 7px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
  margin-top: -2px;
`,R=i.div`
  height: 100%;
  border-radius: inherit;
  background: ${e=>e.$color};
  width: ${e=>e.$width};
  transition: width 0.3s ease, background-color 0.3s ease;
`,U=({onClose:e,onRegister:r,availableAvatars:t=[],isDarkMode:i=!1})=>{const[n,s]=(0,g.useState)({account:"",firstName:"",password:"",confirmPassword:"",avatarIndex:0,textColor:"grey",borderColor:"grey"}),d=(e=>{if(!e)return{width:"0%",color:"transparent",label:""};let r=0;return e.length>=6&&(r+=1),e.length>=8&&(r+=1),(/[A-Z]/.test(e)||/[a-z]/.test(e))&&(r+=1),/\d/.test(e)&&(r+=1),/[^A-Za-z0-9]/.test(e)&&(r+=1),r<=1?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:r<=2?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(n.password),[u,h]=(0,g.useState)({day:"",month:"",year:""}),[m,w]=(0,g.useState)(!1),[U,_]=(0,g.useState)(!1),[L,T]=(0,g.useState)(""),[Z,K]=(0,g.useState)(!1),[O]=(0,g.useState)(!1),W=r=>{r&&r.stopPropagation(),K(!0),setTimeout(()=>{e()},500)},q=Array.from({length:(new Date).getFullYear()-1909+1},(e,r)=>1909+r).reverse(),B=Array.from({length:31},(e,r)=>r+1),E=(0,g.useMemo)(()=>{const{day:e,month:r,year:o}=u;if(!e||!r||!o)return!1;const a=parseInt(e),t=parseInt(r),i=parseInt(o),n=new Date(i,t-1,a);return n.getFullYear()!==i||n.getMonth()!==t-1||n.getDate()!==a},[u]),H=async()=>{const e=await c(n.account,n.password),o={...e?{uid:e.uid,id:e.uid}:{},account:n.account,firstName:n.firstName||n.account,password:n.password,avatar:t[n.avatarIndex],textColor:n.textColor,borderColor:n.borderColor,birthDate:`${u.year}-${u.month.padStart(2,"0")}-${u.day.padStart(2,"0")}`};await f.default.setItem("registered_user",o),r(o)};return(0,b.jsx)(b.Fragment,{children:O?(0,b.jsx)(x,{onClose:H}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{$isClosing:Z,onClick:W,children:(0,b.jsxs)($,{$isClosing:Z,onClick:e=>e.stopPropagation(),$isDarkMode:i,children:[(0,b.jsx)(v,{onClick:W,$isDarkMode:i,children:"×"}),(0,b.jsx)(j,{$isDarkMode:i,children:"Реєстрація"}),(0,b.jsx)(D,{$isDarkMode:i,children:"Створи акаунт і почни вивчати погоду з комфортом."}),(0,b.jsxs)(y,{children:[(0,b.jsx)(C,{children:(0,b.jsx)(M,{type:"email",placeholder:"Gmail",onChange:e=>s({...n,account:e.target.value}),$isDarkMode:i})}),(0,b.jsx)(C,{children:(0,b.jsxs)(S,{children:[(0,b.jsxs)(z,{value:u.day,onChange:e=>h({...u,day:e.target.value}),$isDarkMode:i,children:[(0,b.jsx)("option",{value:"",disabled:!0,children:"День"}),B.map(e=>(0,b.jsx)("option",{value:e,children:e},e))]}),(0,b.jsxs)(z,{value:u.month,onChange:e=>h({...u,month:e.target.value}),$isDarkMode:i,children:[(0,b.jsx)("option",{value:"",disabled:!0,children:"Місяць"}),["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"].map((e,r)=>(0,b.jsx)("option",{value:r+1,children:e},r))]}),(0,b.jsxs)(z,{value:u.year,onChange:e=>h({...u,year:e.target.value}),$isDarkMode:i,children:[(0,b.jsx)("option",{value:"",disabled:!0,children:"Рік"}),q.map(e=>(0,b.jsx)("option",{value:e,children:e},e))]})]})}),E&&(0,b.jsx)(G,{children:"Такої дати не існує!"}),(0,b.jsxs)(C,{children:[(0,b.jsx)(M,{name:"signup-password-field",type:"password",placeholder:"Пароль",onChange:e=>s({...n,password:e.target.value}),$isDarkMode:i,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),n.password&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(N,{$isDarkMode:i,children:(0,b.jsx)(R,{$color:d.color,$width:d.width})}),(0,b.jsxs)("span",{style:{fontSize:"11px",fontWeight:"bold",color:d.color,alignSelf:"flex-end",marginTop:"-2px"},children:["Надійність: ",d.label]})]})]}),(0,b.jsx)(C,{children:(0,b.jsx)(M,{name:"signup-confirm-password-field",type:"password",placeholder:"Підтвердіть пароль",onChange:e=>s({...n,confirmPassword:e.target.value}),$isDarkMode:i,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"})}),L&&(0,b.jsx)(G,{children:L}),(0,b.jsxs)(I,{$isDarkMode:i,children:[(0,b.jsx)("input",{type:"checkbox",checked:m,onChange:e=>w(e.target.checked)}),(0,b.jsxs)("label",{children:["Я погоджуюсь з"," ",(0,b.jsx)(Y,{$isDarkMode:i,onClick:()=>_(!0),children:"Угодою"})]})]}),(0,b.jsxs)(P,{children:[(0,b.jsx)(F,{onClick:async()=>{if(!(n.account&&n.password&&u.day&&u.month&&u.year))return T("Заповніть всі поля!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.account))return T("Невірний формат Gmail!");if(E)return T("Такої дати не існує!");if(n.password!==n.confirmPassword)return T("Паролі не співпадають!");if(!m)return T("Прийміть угоду!");if(((e,r,o)=>{const a=new Date,t=new Date(o,r-1,e);let i=a.getFullYear()-t.getFullYear();const n=a.getMonth()-t.getMonth();return(n<0||0===n&&a.getDate()<t.getDate())&&i--,i})(parseInt(u.day),parseInt(u.month),parseInt(u.year))<13)return T("Реєстрація дозволена лише з 13 років!");const e=await f.default.getItem("registered_user");if(e&&e.account===n.account)return T("Акаунт з таким Gmail вже існує!");await H()},disabled:!m||E,$isDarkMode:i,children:"Зареєструватися"}),(0,b.jsx)(A,{type:"button",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{const o=(await a(l,p)).user,i={uid:o.uid,id:o.uid,account:o.email||"",firstName:o.displayName||o.email||"Користувач",password:"",avatar:o.photoURL||(t.length?t[n.avatarIndex]:""),photoURL:o.photoURL||"",textColor:n.textColor||"grey",borderColor:n.borderColor||"grey",birthDate:"2000-01-01"};await f.default.setItem("registered_user",i),r(i),W(e)}catch(o){T("Помилка Google: "+(o.message||o.toString()))}},children:"🔑 Google Вхід"})]})]})]})}),U&&(0,b.jsx)(o,{isOpen:U,onClose:()=>_(!1)})]})})};export{U as default};
//# sourceMappingURL=Modal-D3VksLtY.js.map