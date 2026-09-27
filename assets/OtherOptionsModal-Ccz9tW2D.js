import{o as qe}from"./rolldown-runtime-BNNRdYrd.js";import{B as Ne,H as ne,Kr as l,L as Pe,Qt as Ye,Ur as C,V as Ge,ci as He,i as Ke,si as Te}from"./vendor-react-BrnrJ3qF.js";import{c as te,l as Je}from"./index-gM6wV9Mf.js";import{a as Xe,i as ae,n as re,r as Qe,t as R}from"./bgMusicCatalog-B0iCy7dT.js";var p=qe(Te()),i=He(),Ve=C`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Ze=C`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,Be=C`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,ei=C`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,ii=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: ${t=>t.$isClosing?Be:"none"} 0.5s ease-out
    forwards;
`,ni=l.div`
  background: ${t=>t.$isDarkMode?"#050505cf":"#ffffffd3"};
  color: ${t=>t.$isDarkMode?"white":"#0b0b0b"};
  padding: 12px;
  border-radius: 12px;
  width: 95%;
  max-width: 1200px;
  height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(16px);
  border: 2px solid #ffb36c;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${t=>t.$isClosing?Ze:Ve} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,ti=l.div`
  display: flex;
  gap: 3px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  padding-bottom: 6px;
`,oe=l.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#2a2a2a":t.$isDarkMode?"white":"#2a2a2a"};
  border: 2px solid ${t=>t.$active?"#ffb36c":t.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"};
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
  }
`,ai=l.button`
  position: absolute;
  top: -10px;
  right: 3px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #ff7b00;
  &:hover {
    color: ${t=>t.$isDarkMode?"#fff":"#000"};
  }
`,ri=l.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`,le=l.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,de=l.div`
  padding: 2px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.04)"};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`,$=l.div`
  gap: 8px;
  display: flex;
  align-items: center;
  `,w=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  padding: 5px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
  border-radius: 7px;
  label {
    font-size: 13px;
    color: ${t=>t.$isDarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"};
  }
    svg {
    font-size: 28px;}
`,oi=l.div`
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,se=l.div`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
  padding: 4px 0;
  border-bottom: 1px solid
    ${t=>t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  &:last-child {
    border-bottom: none;
  }
`,li=C`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`,di=l.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
  height: 14px;
  margin-left: 8px;
`,q=l.div`
  width: 2px;
  background: #ffb36c;
  border-radius: 1px;
  animation: ${li} ${t=>t.$dur}s ease-in-out infinite;
  animation-delay: ${t=>t.$delay}s;
`,pe=()=>(0,i.jsxs)(di,{children:[(0,i.jsx)(q,{$dur:.6,$delay:0}),(0,i.jsx)(q,{$dur:.8,$delay:.2}),(0,i.jsx)(q,{$dur:.7,$delay:.1})]}),si=l.span`
  font-size: 12px;
  color: ${t=>t.$error?"#ff4d4d":t.$isDarkMode?"#f9f9f9":"#030303"};
  min-width: 30px;
  text-align: right;
`,xe=l.div`
  position: relative;
  width: 34px;
  height: 20px;
  background: ${t=>t.$active?"#ffb36c":"#555"};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${t=>t.$active?"16px":"2px"};
    transition: 0.3s;
  }
`,ce=l.button`
  background: ${t=>t.$active?"#ffb36c":t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"};
  color: ${t=>t.$active?"#2a2a2a":t.$isDarkMode?"white":"#2a2a2a"};
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  min-width: auto;
  font-size: 11px;
  animation: ${ei} 0.4s ease-out both;
  animation-delay: ${t=>t.$index%10*.05}s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 6px;
    height: 20px;
  }
`,pi=l.input`
  display: none;
`,u=l.button`
  color: #2a2a2a;
  background: rgb(251, 226, 0);
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`,xi=l.input`
  background: transparent;
  border: none;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  padding: 6px;
  border-radius: 4px;
  font-size: 13px;
  flex: 1;
  box-sizing: border-box;
  min-width: 0;
  &::placeholder {
    color: ${t=>t.$isDarkMode?"white":"#010101"};
  }
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px;
  }
`,ci=l.div`
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.02)"};
  border: 1px solid #ffb36c;
  border-radius: 4px;
  padding: 3px 6px;
  @media (max-width: 480px) {
    gap: 3px;
    padding: 1px 3px;
  }
`,fe=l.button`
  background: ${t=>t.$isDarkMode?"rgba(255,179,108,0.2)":"rgba(255,179,108,0.15)"};
  border: 1px solid #ffb36c;
  color: #ffb36c;
  padding: 3px 6px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 2px 4px;
    height: 20px;
  }
`,he=l.span`
  font-size: 11px;
  font-weight: bold;
  min-width: 12px;
  text-align: center;
  color: ${t=>t.$isDarkMode?"white":"#2a2a2a"};
`,fi=l.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"};
  padding: 2px 6px;
  border-radius: 6px;

  @media (max-width: 480px) {
    gap: 2px;
    padding: 1px 4px;
    scale: 0.9;
    transform-origin: right center;
  }
`,hi=l.input`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.3)":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  font-size: 12px;
  margin-bottom: 3px;
  outline: none;
`,ui=l.select`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"rgb(0, 0, 0)":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#030303"};
  font-size: 12px;
  outline: none;
  cursor: pointer;
`,ki=({sfxVolume:t=.2,setSfxVolume:ue,onClose:be,bgMusicEnabled:S,setBgMusicEnabled:ge,autoMuteBgMusic:bi,setAutoMuteBgMusic:gi,lockFiltersInFs:mi,setLockFiltersInFs:$i,bgMusicSource:b,setBgMusicSource:x,bgMusicVolume:N,setBgMusicVolume:me,bgMusicSpeed:wi,setBgMusicSpeed:vi,customBgTracks:s,setCustomBgTracks:g,bgMusicMode:m,setBgMusicMode:$e,bgMusicShuffle:P,setBgMusicShuffle:we,libraryBgSettings:v={},setLibraryBgSettings:Y=()=>{},setActiveBgTrackId:h=()=>{},onResetBgPosition:ve=()=>{},isDarkMode:o,bgAudioRef:W,bgAudioRef2:A})=>{const[G,ye]=(0,p.useState)(!1),[F,H]=(0,p.useState)("custom"),K=(0,p.useRef)(null),I=(0,p.useRef)(null),[k,je]=(0,p.useState)(""),[D,Ce]=(0,p.useState)("default"),[z,T]=(0,p.useState)(()=>{if(typeof window>"u")return[];try{const e=window.localStorage.getItem("bg_music_downloaded_tracks");return e?JSON.parse(e):[]}catch{return[]}}),[_,L]=(0,p.useState)(()=>Qe()),[O,y]=(0,p.useState)({}),[J,X]=(0,p.useState)(0),[Q,Se]=(0,p.useState)(0);(0,p.useEffect)(()=>{typeof window<"u"&&(window.localStorage.setItem("bg_music_downloaded_tracks",JSON.stringify(z)),Xe(_))},[z,_]);const j=(e,a)=>{T(n=>n.some(r=>String(r.id)===String(e)&&r.file===a)?n:[...n,{id:e,file:a,name:""}]),L(n=>n.filter(r=>String(r)!==String(e)))},ke=e=>{const a=e.file,n=ae(a),r=n||z.some(c=>c.file===a&&String(c.id)===String(e.id)),d=_.includes(String(e.id));return{isBase:n,downloaded:r&&!d,softDeleted:d,available:n||r&&!d}},V=async e=>{if(!("caches"in window)){x(e.file),h(e.id),j(e.id,e.file);return}try{const a=await caches.open(re);if(await a.match(e.file)){x(e.file),h(e.id),j(e.id,e.file),y(f=>({...f,[e.id]:100})),L(f=>f.filter(M=>String(M)!==String(e.id)));return}y(f=>({...f,[e.id]:0}));const n=await fetch(e.file);if(!n.ok)throw new Error("Fetch failed");const r=n.body?.getReader();if(!r){await a.put(e.file,n.clone()),x(e.file),h(e.id),j(e.id,e.file);return}const d=Number(n.headers.get("Content-Length"))||0;let c=0;const ie=[];for(;;){const{done:f,value:M}=await r.read();if(f)break;if(ie.push(M),c+=M.length,d>0){const Ee=Math.min(100,Math.round(c/d*100));y(Ue=>({...Ue,[e.id]:Ee}))}}const Le=new Blob(ie),Oe=new Response(Le,{headers:{"Content-Type":n.headers.get("Content-Type")||"audio/mpeg"}});await a.put(e.file,Oe),x(e.file),h(e.id),j(e.id,e.file),y(f=>({...f,[e.id]:100}))}catch(a){console.error("Audio cache download failed:",a),x(e.file),h(e.id),j(e.id,e.file),y(n=>({...n,[e.id]:0}))}},De=async e=>{if(!ae(e.file)&&window.confirm(`М'яке видалення: файл ${e.text||e.author||"трека"} залишиться в Cache API на кілька сеансів, але зникне з локального списку. Продовжити?`)&&(T(a=>a.filter(n=>!(String(n.id)===String(e.id)&&n.file===e.file))),L(a=>a.includes(String(e.id))?a:[...a,String(e.id)]),b===e.file&&(x(R[0]?.file||turkeysAudio),h(R[0]?.id||null)),typeof window<"u"&&"caches"in window)){const a=await caches.open(re),n=await a.match(e.file);n&&setTimeout(async()=>{try{await a.put(e.file,new Response(n.body,{headers:n.headers}))}catch{}},0)}};(0,p.useEffect)(()=>{let e;const a=()=>{const n=W?.current,r=A?.current;let d=n;n&&r&&(!r.paused&&r.volume>=n.volume?d=r:!n.paused&&n.volume>=r.volume&&(d=n)),d&&(X(d.currentTime||0),Se(d.duration||0)),e=requestAnimationFrame(a)};return a(),()=>cancelAnimationFrame(e)},[W,A]);const ze=e=>{const a=parseFloat(e.target.value),n=W?.current,r=A?.current;let d=n;n&&r&&(!r.paused&&r.volume>=n.volume?d=r:!n.paused&&n.volume>=r.volume&&(d=n)),d&&(d.currentTime=a,X(a))},Z=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,_e=(0,p.useMemo)(()=>{let e=Je.map(n=>{const r=te[n.audio]||turkeysAudio,d=ke({id:n.id,file:r,text:n.text,author:n.author});return{id:n.id,name:n.text?`${n.text} - ${n.author}`:n.author,file:r,image:te[n.image],...d}});k&&(e=e.filter(n=>n.name.toLowerCase().includes(k.toLowerCase()))),D==="az"?e.sort((n,r)=>n.name.localeCompare(r.name,"uk")):D==="za"&&e.sort((n,r)=>r.name.localeCompare(n.name,"uk"));const a=e.filter(n=>!R.some(r=>r.id===n.id));return[...R.map(n=>({id:n.id,name:n.name,file:n.file,image:null,isBase:!0,downloaded:!0,softDeleted:!1,available:!0})),...a].slice(0,28)},[k,D,z,_,b]),E=e=>e?e.trim().split(/\s+/).filter(Boolean).length:0,Me=e=>{I.current=e,K.current.click()},Re=e=>{const a=Array.from({length:7},(n,r)=>(s||[])[r]||null);a[e]=null,g(a)},B=()=>{ye(!0),setTimeout(be,500)},We=e=>{const a=e.target.files[0];if(a&&I.current!==null){if(a.size>15728640){alert("Файл занадто великий! Максимум 15 МБ.");return}const n=new Audio(URL.createObjectURL(a));n.onloadedmetadata=()=>{if(n.duration>300){alert("Мелодія занадто довга! Максимум 5 хвилин."),URL.revokeObjectURL(n.src);return}const r=Array.from({length:7},(d,c)=>(s||[])[c]||null);r[I.current]={name:a.name.split(".")[0].substring(0,30),file:a,repeats:1,enabled:!0},g(r),x(a),h(null),URL.revokeObjectURL(n.src)}}},Ae=(e,a)=>{if(E(a)>30){alert("Максимум 30 слів у назві!");return}const n=Array.from({length:7},(r,d)=>(s||[])[d]||null);n[e]||(n[e]={name:"",file:null,repeats:1,enabled:!0}),n[e]={...n[e],name:a},g(n)},ee=(e,a)=>{const n=Array.from({length:7},(d,c)=>(s||[])[c]||null);if(!n[e])return;const r=Math.max(1,Math.min(3,(n[e].repeats||1)+a));n[e]={...n[e],repeats:r},g(n)},Fe=e=>{const a=Array.from({length:7},(n,r)=>(s||[])[r]||null);a[e]&&(a[e]={...a[e],enabled:!a[e].enabled},g(a))},U=(e,a,n)=>{if(!Y)return;const r=v&&v[e]||{repeats:1,enabled:!0};Y({...v,[e]:{...r,[a]:n}})},Ie=()=>{const e=m==="loop"?"order":"loop";$e(e),e==="loop"&&g(Array.from({length:7},(a,n)=>(s||[])[n]||null).map(a=>a?{...a,repeats:1,enabled:!0}:null))};return(0,i.jsx)(ii,{$isClosing:G,onClick:B,$isDarkMode:o,children:(0,i.jsxs)(ni,{$isClosing:G,onClick:e=>e.stopPropagation(),$isDarkMode:o,children:[(0,i.jsx)(ai,{onClick:B,$isDarkMode:o,children:"×"}),(0,i.jsx)("h3",{style:{textAlign:"center",fontSize:"20px",color:"#db6a00",fontWeight:"900"},children:"Інші опції"}),(0,i.jsxs)(ri,{children:[(0,i.jsxs)(le,{children:[(0,i.jsxs)(ti,{$isDarkMode:o,children:[(0,i.jsx)(oe,{$active:F==="custom",$isDarkMode:o,onClick:()=>H("custom"),children:"Власні (до 7 треків)"}),(0,i.jsx)(oe,{$active:F==="library",$isDarkMode:o,onClick:()=>H("library"),children:"Бібліотека (24 треки)"})]}),F==="custom"?(0,i.jsxs)(de,{$isDarkMode:o,children:[(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:[0,1,2,3,4,5,6].map(e=>(0,i.jsxs)(se,{$isDarkMode:o,children:[(0,i.jsx)("div",{style:{width:"30px",height:"30px",borderRadius:"6px",border:o?"1px solid #555":"1px solid #ccc",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",flexShrink:0},children:(0,i.jsx)(ne,{})}),(0,i.jsxs)(ci,{$isDarkMode:o,children:[(0,i.jsx)(xi,{$isDarkMode:o,placeholder:"Підбери назву своєї мелодії",value:s[e]?.name||"",onChange:a=>Ae(e,a.target.value)}),(0,i.jsxs)(si,{$error:E(s[e]?.name)>30,$isDarkMode:o,style:{minWidth:"35px",textAlign:"right"},children:[E(s[e]?.name),"/30"]}),(0,i.jsx)(fe,{$isDarkMode:o,onClick:()=>Me(e),title:s[e]?"Змінити трек":"Додати трек",children:s[e]?"Зміниш?":"Додавай"}),s[e]&&(0,i.jsx)(fe,{$isDarkMode:o,onClick:()=>Re(e),title:"Видалити трек",children:"✕"}),(0,i.jsx)(ce,{$active:b===s[e]?.file,onClick:()=>{if(!s[e]?.file){alert("Вставте трек, щоб його слухати!");return}x(s[e].file)},$isDarkMode:o,$index:e,disabled:!s[e]?.file,title:s[e]?.file?"Слухати трек":"Додайте трек спочатку",children:s[e]?.file&&b===s[e].file?S?(0,i.jsx)(pe,{}):"⏸":"▶"})]}),m==="order"&&s?.[e]&&(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",background:o?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)",padding:"2px",borderRadius:"6px"},children:[(0,i.jsx)(u,{onClick:()=>ee(e,-1),style:{padding:"2px 5px",minWidth:"20px"},children:"◀"}),(0,i.jsx)(he,{$isDarkMode:o,children:s[e]?.repeats||1}),(0,i.jsx)(u,{onClick:()=>ee(e,1),style:{padding:"2px 5px",minWidth:"20px"},children:"▶"}),(0,i.jsx)("input",{type:"checkbox",checked:s[e]?.enabled!==!1,onChange:()=>Fe(e),title:"Включити в чергу"})]})]},e))}),(0,i.jsx)(pi,{type:"file",ref:K,accept:"audio/*",onChange:We})]}):(0,i.jsxs)(de,{$isDarkMode:o,children:[(0,i.jsx)(hi,{$isDarkMode:o,placeholder:"Пошук у бібліотеці...",value:k,onChange:e=>je(e.target.value)}),(0,i.jsxs)(ui,{$isDarkMode:o,value:D,onChange:e=>Ce(e.target.value),children:[(0,i.jsx)("option",{value:"default",children:"Те що зараз (стандартно)"}),(0,i.jsx)("option",{value:"az",children:"Алфавіт (А-Я)"}),(0,i.jsx)("option",{value:"za",children:"Алфавіт (Я-А)"})]}),(0,i.jsx)(oi,{style:{width:"100%",boxSizing:"border-box"},children:_e.map((e,a)=>{const n=v&&v[e.id]||{repeats:1,enabled:!0};return(0,i.jsxs)(se,{$isDarkMode:o,style:{flexWrap:"nowrap",width:"100%",minWidth:0,boxSizing:"border-box"},children:[e.image?(0,i.jsx)("img",{src:e.image,alt:"",style:{width:"30px",height:"30px",borderRadius:"6px",objectFit:"cover",flexShrink:0}}):(0,i.jsx)("div",{style:{width:"30px",height:"30px",borderRadius:"6px",background:o?"#333":"#eee",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",flexShrink:0},children:"🎵"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[(0,i.jsxs)(ce,{$isDarkMode:o,$active:b===e.file,onClick:()=>{e.isBase||e.downloaded||!e.softDeleted?(x(e.file),h(e.id)):V({id:e.id,file:e.file,text:e.name,author:e.name})},$index:a,style:{flex:"1 1 auto",width:"100%",maxWidth:"100%",textAlign:"left",padding:"6px 8px",display:"flex",justifyContent:"flex-start",opacity:n.enabled?1:.5,minWidth:0,overflow:"hidden"},children:[(0,i.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,minWidth:0},children:e.name}),b===e.file&&S&&(0,i.jsx)(pe,{})]}),O[e.id]>0&&O[e.id]<100&&(0,i.jsx)("div",{style:{height:"4px",background:"rgba(255,179,108,0.2)",borderRadius:"999px",overflow:"hidden",marginTop:"4px"},children:(0,i.jsx)("div",{style:{height:"100%",width:`${O[e.id]}%`,background:"#ffb36c",transition:"width 0.2s ease"}})})]}),!e.isBase&&(0,i.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:e.softDeleted||!e.downloaded&&!e.isBase?(0,i.jsx)(u,{onClick:()=>V({id:e.id,file:e.file,text:e.name,author:e.name}),style:{padding:"3px 8px",minWidth:"74px",background:"#ffb36c"},children:"Завантажити"}):(0,i.jsx)(u,{onClick:()=>De({id:e.id,file:e.file,text:e.name,author:e.name}),style:{padding:"3px 8px",minWidth:"74px",background:"#ff7b7b"},children:"Видалити"})}),m==="order"&&(0,i.jsxs)(fi,{$isDarkMode:o,children:[(0,i.jsx)(u,{onClick:()=>U(e.id,"repeats",Math.max(1,n.repeats-1)),style:{padding:"1px 4px",minWidth:"16px"},children:"◀"}),(0,i.jsx)(he,{$isDarkMode:o,children:n.repeats}),(0,i.jsx)(u,{onClick:()=>U(e.id,"repeats",Math.min(3,n.repeats+1)),style:{padding:"1px 4px",minWidth:"16px"},children:"▶"}),(0,i.jsx)("input",{type:"checkbox",checked:n.enabled,onChange:r=>U(e.id,"enabled",r.target.checked),title:"Включити в чергу"})]})]},e.id)})})]})]}),(0,i.jsxs)(le,{children:[(0,i.jsxs)(w,{$isDarkMode:o,children:[(0,i.jsxs)($,{children:[(0,i.jsx)(ne,{}),(0,i.jsx)("label",{children:"Фонова музика сайту"})]}),(0,i.jsx)(xe,{$active:S,onClick:()=>ge(!S)})]}),(0,i.jsxs)(w,{$isDarkMode:o,children:[(0,i.jsxs)($,{children:[(0,i.jsx)(Ne,{}),(0,i.jsx)("label",{children:"Режим відтворення"})]}),(0,i.jsx)("div",{style:{display:"flex",gap:"5px"},children:(0,i.jsx)(u,{$active:m==="loop",onClick:Ie,style:{background:m==="loop"?"#ffb36c":"#555",width:"80px"},children:m==="loop"?"Повтор":"По черзі"})})]}),(0,i.jsxs)(w,{$isDarkMode:o,children:[(0,i.jsxs)($,{children:[(0,i.jsx)(Ge,{}),(0,i.jsx)("label",{children:"Випадковий порядок (Shuffle)"})]}),(0,i.jsx)(xe,{$active:P,onClick:()=>we(!P)})]}),(0,i.jsxs)(w,{$isDarkMode:o,children:[(0,i.jsxs)($,{children:[(0,i.jsx)(Ke,{}),(0,i.jsxs)("label",{children:["Гучність музики: ",Math.round(N*100),"%"]})]}),(0,i.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:N,onChange:e=>me(parseFloat(e.target.value)),style:{cursor:"pointer",accentColor:"#ffb36c",width:"100px"}})]}),(0,i.jsxs)(w,{$isDarkMode:o,children:[(0,i.jsxs)($,{children:[(0,i.jsx)(Ye,{}),(0,i.jsxs)("label",{children:["Гучність звуків кнопок: ",Math.round(t*100),"%"]})]}),(0,i.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:t,onChange:e=>ue(parseFloat(e.target.value)),style:{cursor:"pointer",accentColor:"#ffb36c",width:"100px"}})]}),(0,i.jsxs)(w,{$isDarkMode:o,style:{flexDirection:"column",alignItems:"stretch",gap:"10px"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsxs)($,{children:[(0,i.jsx)(Pe,{}),(0,i.jsx)("label",{children:"Позиція музики"})]}),(0,i.jsxs)("div",{style:{fontSize:"12px",color:o?"#ccc":"#555"},children:[Z(J)," / ",Z(Q)]})]}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,i.jsx)("input",{type:"range",min:"0",max:Q||100,step:"0.1",value:J,onChange:ze,style:{flex:1,cursor:"pointer",accentColor:"#ffb36c"}}),(0,i.jsx)(u,{onClick:ve,style:{fontSize:"11px",padding:"5px 10px",minWidth:"max-content"},children:"⏮ Спочатку"})]})]})]})]})]})})};export{ki as default};
