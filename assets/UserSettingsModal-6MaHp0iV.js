import{o as Ce}from"./rolldown-runtime-BNNRdYrd.js";import{Kn as w,Qn as Me,Wn as b,Zn as De,at as ze,cr as Pe,lr as Ae,qn as s}from"./vendor-react-DAvkYs3-.js";import{d as ee,n as Ie,p as We}from"./index-D2ItKjt5.js";import{t as Oe}from"./KatSceneModal-8Ua1RHMH.js";var d=Ce(Pe()),e=Ae(),Fe=b`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,Ye=b`
  0% {
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,Ne=b`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,F=b`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Te=b`
  0%   { transform: translateY(0);   opacity: 1; }
  40%  { transform: translateY(-60px) scale(0.93); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`,Be=b`
  0%   { transform: translateY(0);   opacity: 1; }
  40%  { transform: translateY(60px) scale(0.93); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`,Le=b`
  0%   { transform: translateX(60px); opacity: 0; }
  100% { transform: translateX(0);    opacity: 1; }
`,Ee=b`
  0%   { transform: translateX(-60px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
`;s.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: bold;
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
  animation: ${F} 5s ease infinite;
  display: inline-block;
  margin-left: 5px;
`;var _e=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(3px);
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${t=>t.$isClosing?Ne:"none"} 0.5s ease-out
    forwards;
`,Ue=s.div`
  background: violet;
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
  border: 2px solid #a929ff;
  border-radius: 10px;
  width: 95%;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${t=>t.$isClosing?Ye:Fe} 0.5s ease-out
    forwards;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${t=>t.$isDarkMode?"#5e3e61":"#a981a9"};
    border-radius: 10px;
  }
`,Ge=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin-top: -25px;
    margin-bottom: -15px;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Re=s.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 3px;
    background: violet;
    gap: 4px;
    position: sticky;
    top: 0;
    z-index: 20;
    margin-bottom: 6px;
    flex-wrap: wrap;
  } 
      @media (min-width: 366px) {
    margin-bottom: -42px;
  }
`,te=s.button`
  padding: 3px 7px;
  border-radius: 6px;
  border: 2px solid rgb(13, 13, 13);
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: #000;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
`,Xe=s.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid rgb(6, 6, 6);
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: #000;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
`,Ke=s.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  animation: ${t=>t.$dir==="left"?Le:Ee} 0.3s ease forwards;
`,Ve=s.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
`,$=s.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 3px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(129, 39, 255, 0.4)"};
  border-radius: 6px;
  border: 2px solid #a70080;
    ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.5)"};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  min-width: 0;
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
`,qe=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
`,C=s.input`
  padding: 4px;
  border: 2px solid #000000;
  border-radius: 5px;
  font-size: 13px;
  width: 100%;
  background: #420093;
  color: #ffffff;
  box-sizing: border-box;
  &::placeholder {
  rgba(255, 255, 255, 0.6);
    font-style: italic;
    font-weight: 900;
    font-size: 13px;
    opacity: 1;
  }
`,Ze=s.div`
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: #8300c9;
  padding: 1px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,He=s(C)`
  caret-color: black;
  font-weight: bold;
  ${t=>{const i=t.$textColor||"inherit",p=i.includes("linear"),S=i.includes("270deg");return p?w`
        background: ${i};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${S&&w`
            background-size: 400% 400%;
            animation: ${F} 5s ease infinite;
          `}
      `:w`
        color: ${i};
        background: transparent;
        -webkit-background-clip: none;
        -webkit-text-fill-color: currentcolor;
      `}}
`,j=s.select`
  padding: 4px;
  border: 2px solid
    ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.3)":"#000000"};
  background: transparent;
  color: ${t=>t.$isDarkMode?"#ffffff":"black"};
  border-radius: 5px;
  flex: 1;
  font-weight: 900;
  font-size: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`,Qe=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`,u=s.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  color: ${t=>t.$isDarkMode?"#ffffff":"black"};

`,Je=s.span`
  color: #ff7b00;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`,oe=s.div`
  width: 50px;
  height: 60px;
  min-width: 60px;
  border-radius: 5px;
  padding: 3px;
  background: ${t=>t.$isSelected?t.$borderColor:"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${t=>t.$isSelected&&t.$borderColor?.includes("270deg")&&w`
      background-size: 400% 400%;
      animation: ${F} 5s ease infinite;
    `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,et=s.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;s.div`
  display: flex;
  gap: 3px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;s.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${t=>t.$color};
  cursor: pointer;
  border: 2px solid ${t=>t.$isSelected?"#000":"transparent"};
  box-shadow: ${t=>t.$isSelected?"0 0 5px rgba(0,0,0,0.5)":"0 0 2px rgba(0,0,0,0.2)"};
  ${t=>t.$color.includes("270deg")&&w`
      background-size: 400% 400%;
      animation: ${F} 5s ease infinite;
    `}
`;var tt=s.button`
  background: #ffb36c;
  height: 30px;
  border: 5px solid ${t=>t.$isDarkMode?"transparent":"black"};
  flex: 1;
  color: black;
 border-bottom-right-radius: 10px;
 border-top-right-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ot=s.button`
  background: transparent;
  height: 30px;
   border-bottom-left-radius: 10px;
 border-top-left-radius: 10px;
  color: ${t=>t.$isDarkMode?"#ffffff":"black"};
  flex: 1;
  font-weight: bold;
  border: 5px solid
    ${t=>t.$isDarkMode?"rgba(255,255,255,0.5)":"black"};
  cursor: pointer;
`,rt=s.h3`
  font-weight: 900;
  margin-top: 0px;
  color: ${t=>t.$isDarkMode?"#ffffff":"black"};
`,at=s.div`
  background: rgba(0, 0, 0, 0.1);
  height: 8px;
  border: 2px solid black;
  border-radius: 3px;
  width: 100%;
  overflow: hidden;
`,nt=s.div`
  height: 100%;
  border-radius: 3px;
  background-color: ${t=>t.$color||"transparent"};
  width: ${t=>t.$width||"0%"};
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
`,it=s.span`
  font-size: 11px;
  font-weight: bold;
  color: ${t=>t.$color};
  background: #0000009f;
  align-self: flex-end;
  margin-bottom: 2px;
  border-radius: 2px;
  
`,re=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid
    ${t=>t.disabled?t.$isDarkMode?"#0a0a0a":"#0c0c0c":t.$isDarkMode?"rgba(255, 255, 255, 0.3)":"#000"};
  background: ${t=>t.disabled?"transparent":t.$isDarkMode?"#3e2b42":"#fff"};
  color: ${t=>t.disabled?t.$isDarkMode?"#4c4c4c":"#5b5b5b":t.$isDarkMode?"#fff":"#000"};
  margin-left: 6px;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  transition: all 0.2s;
  box-shadow: ${t=>t.disabled?"none":t.$isDarkMode?"0 2px 0 rgba(255,255,255,0.2)":"0 2px 0 #000"};

  &:hover:not(:disabled) {
    background: #ffb36c;
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 3px 0
      ${t=>t.$isDarkMode?"rgba(255,255,255,0.3)":"#000"};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 0 0
      ${t=>t.$isDarkMode?"rgba(255,255,255,0.3)":"#000"};
  }
`,B=s.div`
  animation: ${t=>t.$swapAnim==="up"?w`${Te} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`:t.$swapAnim==="down"?w`${Be} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`:"none"};
`,st=s.label`
  font-size: 13px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#ffffff":"black"};
`,L=s.button`
  padding: 0 2px;
  border-radius: 2px;
    position: absolute;
  top: 6px;
  right: 104px;
  border: 2px solid;
  ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.5)":"#000"};
  background: transparent;
  color: ${t=>t.$isDarkMode?"#ffffff":"black"};
  font-weight: bold;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.2s;
  box-shadow: 0 2px 0
    ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.5)":"#000"};

  &:hover {
    background: #ffe0b2;
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 3px 0
      ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.7)":"#000"};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 0
      ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.7)":"#000"};
  }
`,ae=["name","birthDate","security","textColor","borderColor","avatar","voiceActing","dateDisplay","interfaceSettings","newsLayout"],lt={title:"Заголовок",description:"Опис"},yt=({onClose:t,user:i,availableAvatars:p,onUpdate:S,weatherCardLayout:dt,isDarkMode:ne=!1,onUpdateLayout:ct,showUpdateTimer:Y,setShowUpdateTimer:ie})=>{De(),Me(r=>r.calendar?.customDays||[]);const[pt,ft]=(0,d.useState)({d:"",m:"",reason:""}),[N,E]=(0,d.useState)({}),[M,_]=(0,d.useState)(!1),[D,U]=(0,d.useState)(!1);(0,d.useEffect)(()=>{const r=M?-1:1,n=D?-1:1;return r===1&&n===1?(document.documentElement.style.transform="",document.documentElement.style.transformOrigin=""):(document.documentElement.style.transform=`scale(${r}, ${n})`,document.documentElement.style.transformOrigin="center center"),()=>{}},[M,D]);const[z,G]=(0,d.useState)(i?.mobileViewMode||"scroll"),[v,P]=(0,d.useState)(0),[se,le]=(0,d.useState)("left"),A=3,[a,f]=(0,d.useState)({name:i?.firstName||"",day:"",month:"",year:"",oldPassword:"",newPassword:"",confirmPassword:"",avatarIndex:p.indexOf(i?.avatar)!==-1?p.indexOf(i?.avatar):i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("http")&&p.indexOf(i.avatar)===-1?-1:0,textColor:i?.textColor||"grey",borderColor:i?.borderColor||"grey",fontFamily:i?.fontFamily||"",showSeconds:i?.showSeconds!==!1,dateDisplayMode:i?.dateDisplayMode||"both",hour12:i?.hour12===!0,voiceActingMode:i?.voiceActingMode||"malyatko",showUpdateTimer:Y!==!1,newsAutoScroll:i?.newsAutoScroll||!1,syncMutedNews:i?.syncMutedNews||!1,gestureSensitivity:i?.gestureSensitivity??1.5,fastClicks:i?.fastClicks??!1,mobileViewMode:i?.mobileViewMode||"scroll"}),[R,X]=(0,d.useState)(!1),[K,de]=(0,d.useState)(!1),[m,V]=(0,d.useState)([...ae]),[I,ce]=(0,d.useState)(i?.newsLayout||[{key:"image",visible:!0},{key:"title",visible:!0},{key:"description",visible:!0}]),pe=(0,d.useMemo)(()=>({...i}),[i]);(0,d.useEffect)(()=>{if(!i)return;let r="",n="",o="";i.birthDate&&(i.birthDate.includes("-")?[r,n,o]=i.birthDate.split("-"):i.birthDate.includes(".")&&([o,n,r]=i.birthDate.split(".")));const l=p.indexOf(i?.avatar)!==-1?p.indexOf(i?.avatar):i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("http")?-1:0;f({name:i?.firstName||"",day:o?String(parseInt(o)):"",month:n?String(parseInt(n)):"",year:r?String(parseInt(r)):"",oldPassword:"",newPassword:"",confirmPassword:"",avatarIndex:l,textColor:i?.textColor||"grey",borderColor:i?.borderColor||"grey",fontFamily:i?.fontFamily||"",showSeconds:i?.showSeconds!==!1,dateDisplayMode:i?.dateDisplayMode||"both",hour12:i?.hour12===!0,voiceActingMode:i?.voiceActingMode||"malyatko",showUpdateTimer:Y!==!1,newsAutoScroll:i?.newsAutoScroll||!1,syncMutedNews:i?.syncMutedNews||!1,gestureSensitivity:i?.gestureSensitivity??1.5,fastClicks:i?.fastClicks??!1})},[i,p,Y]);const W=r=>{r&&r.stopPropagation&&r.stopPropagation(),de(!0),setTimeout(()=>t(),500)},q=r=>{r&&r.stopPropagation(),S(pe),W()},fe=Array.from({length:31},(r,n)=>n+1),he=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],Z=new Date().getFullYear(),xe=Array.from({length:Z-1909+1},(r,n)=>Z-n),h=r=>{const n={...a,...r};f(n),r.hasOwnProperty("showUpdateTimer")&&ie(r.showUpdateTimer),S({...i,firstName:n.name,avatar:n.avatarIndex===-1?i?.avatar:p[n.avatarIndex],birthDate:`${n.year}-${n.month.toString().padStart(2,"0")}-${n.day.toString().padStart(2,"0")}`,textColor:n.textColor,borderColor:n.borderColor,fontFamily:n.fontFamily,showSeconds:n.showSeconds,dateDisplayMode:n.dateDisplayMode,hour12:n.hour12,voiceActingMode:n.voiceActingMode,showUpdateTimer:n.showUpdateTimer,newsLayout:r.newsLayout||I,newsAutoScroll:r.newsAutoScroll??n.newsAutoScroll,syncMutedNews:r.syncMutedNews??n.syncMutedNews,gestureSensitivity:r.gestureSensitivity??n.gestureSensitivity,fastClicks:r.fastClicks??n.fastClicks})},k=(0,d.useMemo)(()=>{if(!a.day||!a.month||!a.year)return!1;const r=new Date(a.year,a.month-1,a.day);return r.getFullYear()!==parseInt(a.year)||r.getMonth()!==parseInt(a.month)-1||r.getDate()!==parseInt(a.day)},[a.day,a.month,a.year]),ge=(0,d.useMemo)(()=>{const r=a.day?String(a.day).padStart(2,"0"):"",n=a.month?String(a.month).padStart(2,"0"):"",o=a.year?String(a.year):"";return!r||!n||!o||k?"":`${r}.${n}.${o}`},[a.day,a.month,a.year,k]),H=((r,n,o)=>{if(!r||!n||!o)return null;const l=new Date,x=new Date(o,n-1,r);if(isNaN(x.getTime()))return null;let g=l.getFullYear()-x.getFullYear();const c=l.getMonth()-x.getMonth();return(c<0||c===0&&l.getDate()<x.getDate())&&g--,g})(a.day,a.month,a.year),O=(r=>{if(!r)return{width:"0%",color:"transparent",label:""};let n=0;return r.length>=6&&(n+=1),r.length>=8&&(n+=1),(/[A-Z]/.test(r)||/[a-z]/.test(r))&&(n+=1),/\d/.test(r)&&(n+=1),/[^A-Za-z0-9]/.test(r)&&(n+=1),n<=2?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:n<=4?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(a.newPassword),ue=()=>{if(k){alert("Введена некоректна дата!");return}if(!a.day||!a.month||!a.year){alert("Будь ласка, виберіть дату народження!");return}if(a.newPassword){if(a.newPassword!==a.confirmPassword){alert("Нові паролі не збігаються!");return}if(a.newPassword.length<6){alert("Пароль занадто короткий!");return}}S({account:i?.account||a.name,firstName:a.name,avatar:a.avatarIndex===-1?i?.avatar:p[a.avatarIndex],birthDate:`${a.year}-${a.month.toString().padStart(2,"0")}-${a.day.toString().padStart(2,"0")}`,textColor:a.textColor,borderColor:a.borderColor,fontFamily:a.fontFamily,showSeconds:a.showSeconds,dateDisplayMode:a.dateDisplayMode,hour12:a.hour12,voiceActingMode:a.voiceActingMode,showUpdateTimer:a.showUpdateTimer,newsLayout:I,newsAutoScroll:a.newsAutoScroll,syncMutedNews:a.syncMutedNews,gestureSensitivity:a.gestureSensitivity,fastClicks:a.fastClicks,...a.newPassword?{oldPassword:a.oldPassword,newPassword:a.newPassword}:{}}),W()},Q=(r,n)=>{const o=r+n;V(g=>{const c=[...g];return o<0||o>=c.length||([c[r],c[o]]=[c[o],c[r]]),c});const l=m[r],x=m[o];l&&x&&(E(g=>({...g,[l]:n>0?"down":"up",[x]:n>0?"up":"down"})),setTimeout(()=>{E(g=>{const c={...g};return delete c[l],delete c[x],c})},420))},be=()=>{V([...ae]),P(0)},me=r=>{if(r==="image")return;const n=I.map(o=>o.key===r?{...o,visible:!o.visible}:o);ce(n),h({newsLayout:n})},ye=!0,[we,J]=(0,d.useState)(!1),ve=()=>{J(!1),W()},ke=i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("http")&&p.indexOf(i.avatar)===-1,Se=!!(i?.email&&!i?.password),$e=Math.ceil(m.length/A),je=r=>{le(r>v?"left":"right"),P(r)},y=(r,n,o)=>(0,e.jsxs)(qe,{children:[(0,e.jsx)(st,{style:{fontSize:"13px",fontWeight:"bold"},children:o}),(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)(re,{disabled:n===0,onClick:()=>Q(n,-1),title:"Вище",style:{width:"22px",height:"22px",fontSize:"19px",fontWeight:900},children:"⬆"}),(0,e.jsx)(re,{disabled:n===m.length-1,onClick:()=>Q(n,1),title:"Нижче",style:{width:"22px",height:"22px",fontSize:"19px",fontWeight:900},children:"⬇"})]})]}),T=(r,n)=>r==="name"?(0,e.jsxs)($,{children:[y(r,n,"Ім'я"),(0,e.jsx)(He,{value:a.name,onChange:o=>f({...a,name:o.target.value})}),y(r,n,"Оберіть аватар"),(0,e.jsxs)(et,{children:[p.map((o,l)=>(0,e.jsx)(oe,{$isSelected:a.avatarIndex===l,$borderColor:a.borderColor,onClick:()=>f({...a,avatarIndex:l}),children:(0,e.jsx)("img",{src:o,alt:"avatar"})},l)),ke&&(0,e.jsx)(oe,{$isSelected:a.avatarIndex===-1,$borderColor:a.borderColor,title:"Google аватарка",onClick:()=>f({...a,avatarIndex:-1}),children:(0,e.jsx)("img",{src:i.avatar,alt:"google-avatar",onError:o=>{o.currentTarget.onerror=null,o.currentTarget.src=p[0]}})},"external")]})]},"name"):r==="birthDate"?(0,e.jsxs)($,{children:[y(r,n,`Дата народження${H!==null&&!k?`: ${ge} • Вік: ${H}`:""}`),(0,e.jsxs)(Qe,{children:[(0,e.jsxs)(j,{value:a.day,onChange:o=>f({...a,day:o.target.value}),children:[(0,e.jsx)("option",{value:"",children:"День"}),fe.map(o=>(0,e.jsx)("option",{value:o,children:o},o))]}),(0,e.jsxs)(j,{value:a.month,onChange:o=>f({...a,month:o.target.value}),children:[(0,e.jsx)("option",{value:"",children:"Місяць"}),he.map((o,l)=>(0,e.jsx)("option",{value:l+1,children:o},l))]}),(0,e.jsxs)(j,{value:a.year,onChange:o=>f({...a,year:o.target.value}),children:[(0,e.jsx)("option",{value:"",children:"Рік"}),xe.map(o=>(0,e.jsx)("option",{value:o,children:o},o))]})]}),k&&(0,e.jsx)("span",{style:{color:"red",fontSize:"11px"},children:"Такої дати не існує!"}),y(r,n,"Налаштування годинника"),(0,e.jsxs)(u,{children:[(0,e.jsx)("input",{type:"checkbox",checked:a.showSeconds,onChange:o=>h({showSeconds:o.target.checked})}),(0,e.jsx)("label",{style:{fontWeight:"900",fontSize:"11px"},children:"Показувати секунди (17:23:17)"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1px"},children:[(0,e.jsx)("label",{style:{fontSize:"12px",fontWeight:"bold",color:"#000"},children:"Формат часу"}),(0,e.jsxs)(j,{value:a.hour12?"12":"24",onChange:o=>h({hour12:o.target.value==="12"}),children:[(0,e.jsx)("option",{value:"24",children:"24-годинний формат"}),(0,e.jsx)("option",{value:"12",children:"12-годинний формат (AM/PM)"})]}),(0,e.jsxs)(j,{value:a.dateDisplayMode,onChange:o=>h({dateDisplayMode:o.target.value}),children:[(0,e.jsx)("option",{value:"both",children:"Час та Дата (разом)"}),(0,e.jsx)("option",{value:"time",children:"Тільки Час"}),(0,e.jsx)("option",{value:"date",children:"Тільки Дата"})]})]})]},"birthDate"):r==="security"?(0,e.jsxs)($,{children:[y(r,n,"Безпека"),Se?(0,e.jsx)("div",{style:{fontSize:13,color:"#444"},children:"Google-акаунт — змінюйте пароль у налаштуваннях Google."}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:async()=>{if(!ee.currentUser)return alert("Потрібно авторизуватись в системі!");try{await ze(ee.currentUser,We),alert("Google акаунт успішно прив'язано!")}catch(o){o.code==="auth/credential-already-in-use"?alert("Цей Google акаунт вже прив'язаний до іншого профілю!"):o.code==="auth/cancelled-popup-request"||o.code==="auth/popup-closed-by-user"||alert("Помилка прив'язки: "+o.message)}},style:{background:"#105fdf",border:"2px solid black",color:"white",padding:"5px",borderRadius:"5px",fontWeight:"bold",cursor:"pointer",marginBottom:"3px",fontSize:"14px"},children:"Прив'язати Google"}),(0,e.jsx)(C,{type:"password",placeholder:"Поточний пароль",disabled:!0,readOnly:!0,value:"********",style:{marginBottom:"2px",opacity:.6,cursor:"not-allowed"}}),(0,e.jsx)(C,{name:"settings-new-password",type:"password",placeholder:"Новий пароль",onChange:o=>f({...a,newPassword:o.target.value}),style:{marginBottom:"4px"},autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),a.newPassword&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(at,{children:(0,e.jsx)(nt,{$width:O.width,$color:O.color})}),(0,e.jsxs)(it,{$color:O.color,children:["Надійність: ",O.label]})]}),(0,e.jsx)(C,{name:"settings-confirm-password",type:"password",placeholder:"Підтвердіть новий пароль",onChange:o=>f({...a,confirmPassword:o.target.value}),autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"})]})]},"security"):r==="borderColor"||r==="voiceActing"?null:r==="interfaceSettings"?(0,e.jsxs)($,{children:[y(r,n,"Налаштування інтерфейсу"),(0,e.jsxs)(u,{children:[(0,e.jsx)("input",{type:"checkbox",checked:a.showUpdateTimer,onChange:o=>h({showUpdateTimer:o.target.checked})}),(0,e.jsx)("label",{style:{fontSize:"11px",fontWeight:900},children:"Показувати таймер оновлення погоди"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{style:{fontSize:"13px",fontWeight:"bold",color:"#000"},children:"Власний шрифт (Google Fonts)"}),(0,e.jsx)(C,{placeholder:"Назва шрифту (напр. Roboto, Open Sans)",value:a.fontFamily,onChange:o=>h({fontFamily:o.target.value})})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)("label",{style:{fontSize:"13px",color:"#000",fontWeight:"bold"},children:"Чутливість жестів (свайпи, слайдери)"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:a.gestureSensitivity,onChange:o=>h({gestureSensitivity:parseFloat(o.target.value)}),style:{flex:1}}),(0,e.jsxs)("span",{style:{fontSize:"14px",minWidth:"30px",color:"#000",fontWeight:"bold"},children:[a.gestureSensitivity,"x"]})]})]}),(0,e.jsxs)(u,{children:[(0,e.jsx)("input",{type:"checkbox",checked:a.fastClicks,onChange:o=>h({fastClicks:o.target.checked})}),(0,e.jsx)("label",{style:{fontWeight:900,fontSize:"11px"},children:"Швидкий відгук на кліки (без затримки)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{style:{fontSize:"12px",fontWeight:"bold",color:"#000",display:"block"},children:"Дзеркальність сайту (скидається при перезавантаженні)"}),(0,e.jsxs)(u,{children:[(0,e.jsx)("input",{type:"checkbox",id:"mirrorX",checked:M,onChange:o=>_(o.target.checked)}),(0,e.jsx)("label",{htmlFor:"mirrorX",style:{fontWeight:900,fontSize:"11px"},children:"По горизонталі (ліво↔право)"})]}),(0,e.jsxs)(u,{children:[(0,e.jsx)("input",{type:"checkbox",id:"mirrorY",checked:D,onChange:o=>U(o.target.checked)}),(0,e.jsx)("label",{htmlFor:"mirrorY",style:{fontWeight:900,fontSize:"11px"},children:"По вертикалі (верх↕низ)"})]}),(M||D)&&(0,e.jsx)("button",{onClick:()=>{_(!1),U(!1)},style:{marginTop:"4px",padding:"4px 10px",background:"#ff4d4d",color:"#fff",border:"none",borderRadius:"5px",fontWeight:"bold",fontSize:"11px",cursor:"pointer"},children:"✖ Прибрати дзеркало"})]})]},"interfaceSettings"):r==="newsLayout"?(0,e.jsxs)($,{children:[y(r,n,"Налаштування новин"),(0,e.jsx)("p",{style:{fontSize:"11px",color:"#050505",fontWeight:900},children:"Виберіть, які елементи новин відображати."}),(0,e.jsxs)(u,{style:{marginBottom:"6px"},children:[(0,e.jsx)("input",{type:"checkbox",checked:a.syncMutedNews,onChange:o=>h({syncMutedNews:o.target.checked})}),(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:500},children:"Синхронізувати заглушені новини між пристроями"})]}),I.filter(o=>o.key!=="image").map(o=>(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",background:"rgba(255, 255, 255, 0.12)",padding:"3px",borderRadius:"5px",marginBottom:"4px"},children:(0,e.jsxs)(u,{style:{flex:1},children:[(0,e.jsx)("input",{type:"checkbox",checked:o.visible,onChange:()=>me(o.key)}),(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:500},children:lt[o.key]})]})},o.key))]},"newsLayout"):null;return(0,e.jsxs)(e.Fragment,{children:[we&&(0,e.jsx)(Oe,{onClose:ve}),(0,e.jsx)(_e,{$isClosing:K,onClick:()=>W(),children:(0,e.jsxs)(Ue,{$isClosing:K,onClick:r=>r.stopPropagation(),children:[(0,e.jsxs)("div",{style:{top:"-4px",zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"22px",background:"violet",position:"sticky",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)(rt,{children:"Налаштування"}),(0,e.jsx)("div",{style:{fontSize:12,color:"#000000",fontWeight:"900"},children:i?.email||i?.account})]}),(0,e.jsx)(L,{onClick:be,children:"Змінити лад"}),(0,e.jsx)(L,{style:{right:"59px"},onClick:()=>J(!0),children:"Титри"}),(0,e.jsx)(L,{style:{right:"2px"},onClick:q,children:"Закрити"}),(0,e.jsxs)(Re,{children:[(0,e.jsx)(te,{$active:z==="scroll",onClick:()=>{G("scroll"),P(0)},children:"Скрол"}),(0,e.jsx)(te,{$active:z==="carousel",onClick:()=>{G("carousel"),P(0)},children:"Карусель"}),z==="carousel"&&Array.from({length:$e}).map((r,n)=>(0,e.jsx)(Xe,{$active:v===n,onClick:()=>je(n),children:n+1},n))]})]}),(0,e.jsx)(Ge,{children:m.map((r,n)=>{const o=T(r,n);return o?(0,e.jsx)(B,{$swapAnim:N[r]||null,children:o},r):null})}),(0,e.jsx)(Ve,{children:z==="scroll"?m.map((r,n)=>{const o=T(r,n);return o?(0,e.jsx)(B,{$swapAnim:N[r]||null,children:o},`m-${r}`):null}):(0,e.jsx)(Ke,{$dir:se,children:m.slice(v*A,(v+1)*A).map((r,n)=>{const o=v*A+n,l=T(r,o);return l?(0,e.jsx)(B,{$swapAnim:N[r]||null,children:l},`c-${r}`):null})},v)}),(0,e.jsxs)(Ze,{$isDarkMode:ne,children:[(0,e.jsxs)(u,{children:[(0,e.jsx)("input",{type:"checkbox",checked:ye,readOnly:!0,style:{accentColor:"#ffb36c"}}),(0,e.jsxs)("span",{style:{fontWeight:"900"},children:["Ви погодились з"," ",(0,e.jsx)(Je,{onClick:()=>X(!0),children:"Угодою"})]})]}),(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)(ot,{onClick:q,children:"Скасувати"}),(0,e.jsx)(tt,{onClick:ue,disabled:k,children:"Зберегти"})]})]})]})}),R&&(0,e.jsx)(Ie,{isOpen:R,onClose:()=>X(!1)})]})};export{yt as default};

//# sourceMappingURL=UserSettingsModal-6MaHp0iV.js.map