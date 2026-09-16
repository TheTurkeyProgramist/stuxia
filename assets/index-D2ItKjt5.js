const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Prison-ZUwWpvg5.js","assets/rolldown-runtime-BNNRdYrd.js","assets/vendor-react-DAvkYs3-.js","assets/fog--rpOGuZY.js","assets/Aihelp-4YhG2A6U.js","assets/FanArt-DPLiRxG6.js","assets/ShopModal-Ds2eCNlz.js","assets/AchivmentsModal-CWP1Fo-8.js","assets/ClimateMap-DijgNlQb.js","assets/MusicPhoto-BOaBNTXM.js","assets/songAiKnowledge-DCl-r1aV.js","assets/Modal-DIE4gm29.js","assets/KatSceneModal-8Ua1RHMH.js","assets/LoginModal-DLu2dbKw.js","assets/UserSettingsModal-6MaHp0iV.js","assets/WeatherDetailsModal-DveTCxqg.js","assets/OtherOptionsModal-CYzPGWE6.js"])))=>i.map(i=>d[i]);
import{o as Va,r as fs}from"./rolldown-runtime-BNNRdYrd.js";import{$ as Qo,$n as Zl,A as Xl,An as Ql,At as ed,B as ei,Bn as td,Bt as nd,Cn as ja,Ct as aa,D as Cr,Dn as ad,Dt as rd,E as od,En as id,Et as ti,Fn as sd,Gn as ld,Gt as dd,Hn as cd,Ht as ni,I as ud,In as pd,It as ai,Jn as fd,K as gd,Kn as sn,Kt as xd,L as Ua,Ln as gs,Lt as hd,M as ri,Mn as md,N as bd,Nn as jn,Nt as yd,O as wd,On as vd,Ot as kd,P as jd,Pn as fr,Pt as Ma,Q as oi,Qn as mr,Qt as ii,Rn as si,Rt as Sd,Sn as Cd,St as ra,Tn as Td,Tt as Ad,U as gr,Un as Id,Ut as Da,V as Ka,Vt as xs,W as li,Wn as je,Wt as Md,X as Wa,Xn as Dd,Xt as $d,Y as Fa,Yn as zd,Yt as Tr,Zn as wo,Zt as Ld,_n as Rd,_t as oa,an as Ed,ar as Ye,bn as hs,bt as ia,cn as ms,cr as Fd,dn as Pd,dt as sa,er as Nd,et as Vn,fn as Od,ft as la,gn as qa,gt as da,hn as Vd,ht as ca,in as Ga,ir as bs,it as Bd,jn as _d,jt as di,k as Ia,kn as Hd,kt as Ud,ln as ci,lr as Kd,lt as Wd,mn as qd,mt as ua,nn as Gd,nr as Jd,on as ui,or as Yd,pn as Zd,pt as pa,qn as i,qt as Xd,rn as Ja,rr as Qd,rt as ec,sn as tc,sr as nc,st as ac,tn as rc,tr as Ar,tt as oc,un as ys,ut as fa,vt as ga,wn as ic,wt as sc,xn as vo,xt as xa,yt as ha,zn as Ir}from"./vendor-react-DAvkYs3-.js";import{t as ko}from"./fog--rpOGuZY.js";import{t as ws}from"./texts-Cw4jglIa.js";import{t as xr}from"./songAiKnowledge-DCl-r1aV.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();var e=Kd(),a=Va(Fd()),lc=Va(Yd()),vs=zd({name:"calendar",initialState:{customDays:[]},reducers:{addCustomDay:(t,n)=>{const{id:r,date:c,time:l,reason:s,duration:y,durationUnit:f,cardId:x}=n.payload;t.customDays.push({id:r||Date.now(),date:c,time:l||"00:00",reason:s,duration:y||1,durationUnit:f||"hours",cardId:x||"all"})},removeCustomDay:(t,n)=>{t.customDays=t.customDays.filter(r=>r.id!==n.payload)},updateCustomDay:(t,n)=>{const{date:r,reason:c}=n.payload,l=t.customDays.find(s=>s.date===r);l&&(l.reason=c)},setCustomDays:(t,n)=>{t.customDays=n.payload}}}),{addCustomDay:ks,removeCustomDay:dc,updateCustomDay:Bh,setCustomDays:_h}=vs.actions,cc=vs.reducer,uc=fd({reducer:{calendar:cc}}),u=Va(Id()),hr="/assets/fogtwo--KsskB7I.webp",pc=300,pi=["Цей сайт це реальна містика :)","Хочеш відсилку? :)","Індики схожі?","Доміно знає Д??????са?","Точно ні, він чорний, а Доміно чорно-білий :)"],fi=["Доміно бажає гарної погоди :)","Кейт бажає творчого натхнення","Сутінок - не найкраще, що можете побачити...","Драконяче видання...","Марта - і картини...","Відлуння порожнечі","Де він? Хто він?","Це не те, що хотів .......","??? - Я знаю його","Він скоро повернеться"],fc=[{r:1,c:1,delay:"0s"},{r:1,c:2,delay:"0.1s"},{r:1,c:3,delay:"0.2s"},{r:2,c:3,delay:"0.3s"},{r:3,c:3,delay:"0.4s"},{r:3,c:2,delay:"0.5s"},{r:3,c:1,delay:"0.6s"},{r:2,c:1,delay:"0.7s"}],gc=je`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,xc=je`
  0% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
  100% { opacity: 1; }
`,hc=i.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1994;
  opacity: ${t=>t.$isFadingOut?0:1};
  visibility: ${t=>t.$isFadingOut?"hidden":"visible"};
  transition:
    opacity 0.8s ease-in-out,
    visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity, visibility;
`,mc=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,bc=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  animation: ${gc} 0.8s ease-out forwards;
`,yc=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  transition: opacity 0.8s ease-in-out;
  opacity: ${t=>t.$active?1:0};
`,wc=i.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5vh;
  text-align: center;
`,vc=i.div`
  margin-top: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  width: 100%;
`,kc=i.div`
  position: absolute;
  top: -9px;
  left: -7px;
  z-index: 3;
  color: #fff;
  text-align: left;
`,jc=i.p`
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 10px;
  opacity: 0.9;
  margin: 0;
  font-family: "Inter", sans-serif;
`,Sc=i.div`
  font-size: 13px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  max-width: 1200px;
  font-style: italic;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.61);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  margin-top: 5px;
`,Cc=i.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`,Tc=i.div`
  position: absolute;
  top: 22px;
  right: -1px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
`,Ac=i.span`
  font-size: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: right;
  min-width: 170px;
`,Ic=i.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`,Mc=i.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${xc} 0.8s infinite linear;
  grid-row: ${t=>t.$r};
  grid-column: ${t=>t.$c};
  animation-delay: ${t=>t.$delay};
`;function Dc({isLoading:t,isFadingOut:n,randomPhrase:r}){const[c,l]=(0,a.useState)("Готую новини");return(0,a.useEffect)(()=>{const s=new Image;s.src=hr},[]),(0,a.useEffect)(()=>{if(t){let s=0;const y=setInterval(()=>{s<pi.length-1&&(s++,l(pi[s]))},pc),f=fi[Math.floor(Math.random()*fi.length)],x=setTimeout(()=>{clearInterval(y),l(f)},2e3);return()=>{clearInterval(y),clearTimeout(x)}}},[t]),t?(0,e.jsxs)(hc,{$isFadingOut:n,children:[(0,e.jsx)(kc,{children:(0,e.jsx)(jc,{children:"v.1.0.0 | Я в Конотопі :)"})}),(0,e.jsxs)(Tc,{children:[(0,e.jsx)(Ac,{children:c}),(0,e.jsx)(Ic,{children:fc.map((s,y)=>(0,e.jsx)(Mc,{$r:s.r,$c:s.c,$delay:s.delay},y))})]}),(0,e.jsxs)(mc,{children:[(0,e.jsx)(bc,{children:(0,e.jsx)(yc,{src:hr,$active:!0,alt:"Loading..."})}),(0,e.jsx)(wc,{children:(0,e.jsxs)(vc,{children:[(0,e.jsx)(Sc,{children:r}),(0,e.jsx)(Cc,{children:"2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist"})]})})]})]}):null}var $c="/assets/sunnight-DmKgKNb4.webp",zc="/assets/daysthunders-CVOnKTPo.webp",Lc=Va(Cd()),Rc=(t,n=0)=>{if(!t)return n===0?"Сьогодні":`День ${n+1}`;const r=String(t).trim(),c=new Date,l=new Date(c);l.setHours(0,0,0,0);const[s,y]=r.split(".").map(f=>Number(f));if(s&&y){const f=new Date(c.getFullYear(),y-1,s),x=Math.round((f-l)/864e5);return x===0?`${r} (Сьогодні)`:x===1?`${r} (Завтра)`:x===2?`${r} (Післязавтра)`:`${r} (${f.toLocaleDateString("uk",{weekday:"short"})})`}return r},Ec=(t=[])=>{if(!Array.isArray(t)||t.length===0)return[];const n=[],r=new Map;return t.forEach((c,l)=>{const s=c?.dateLabel||c?.date||"today";r.has(s)||(r.set(s,[]),n.push({label:s,title:Rc(s,n.length),items:[]})),r.get(s).push(c)}),n.forEach(c=>{c.items=r.get(c.label)||[]}),n},Fc="/assets/prison-BANVSR28.mp4",Pc="/assets/hiils-CwRk4ZgD.webp",Nc="/assets/studi-DHg_t1il.webp",Oc="/assets/penny-BUV12nwB.webp",Vc="/assets/nicerone-DeI1ZC5d.mp4",js="/assets/asium-B_nRztWf.webp",Ss="/assets/horse-DCbtELLC.webp",Cs="/assets/theorytwo-omR0ZjVQ.webp",Bc="/assets/theorytwo-COG3p5Yj.mp4",_c="/assets/theory-DnqpX73C.mp4",Ts="/assets/fingerdash-DEsolxme.webp",As="/assets/electrodynamix-lzudItwJ.webp",Oa="/assets/sirenhead-Dh1KPUjM.webp",Hc="/assets/backrooms-C_N8r861.webp",Is="/assets/deserttwo-Bpbh89pi.webp",Ms="/assets/desertthree-B1yTfM-X.webp",Ds="/assets/desertfour-KOc6byy4.webp",$s="/assets/desertone-CTJSVy53.webp",zs="/assets/mechannic-B4qHsIdf.webp",Ls="/assets/clubstep-BGgJ_grP.webp",br="/assets/ultra-vip-turkeys--dWdDrjz.webp",Rs="/assets/chess-DE0SQ6bR.webp",Uc="/assets/aurorahills-DmZEChm7.webp",Es="/assets/turkeytwo-DEtUfl4n.webp",Fs="/assets/turkeysthree-DWkC9U9r.webp",Ps="/assets/turkeysfour-B1peYkuR.webp",Ns="/assets/turkeysfive-B9fezKPV.webp",Os="/assets/turkeyssix-C74RJO0D.webp",Vs="/assets/turkeysone-ByUfHIKS.webp",Bs="/assets/turkeysseven-C_bOyIyj.webp",Kc="/assets/asiumone-DdULW5D8.webp",_s="/assets/asiuntwo-B0HnOhGB.webp",Hs="/assets/asiumthree-BHhNiv03.webp",Us="/assets/asiumfour-CleyN5g2.webp",Ks="/assets/asiumfive-DSDp7YH4.webp",Ws="/assets/asiumsix-D7UysOUw.webp",qs="/assets/asiumeleven-BHmk7Yt4.webp",Gs="/assets/asiumtwelve-roupkWdg.webp",Js="/assets/asiumseven-DFmFFiYc.webp",Ys="/assets/swamptwo-8_PhuQBm.webp",Zs="/assets/swampthree-D1x5tDiJ.webp",Xs="/assets/swampsix-DzD2OZh6.webp",Qs="/assets/seampseven-aw1KjEtN.webp",el="/assets/swampeight-Cxl2rbCa.webp",tl="/assets/swampnine-BGdJXMuv.webp",nl="/assets/theory-BgbF1Vw-.webp",al="/assets/deadlocked-D6Jzwofg.webp",rl="/assets/horrortwo-D8aEwkY_.webp",ol="/assets/horrorthree-BFEovIOX.webp",il="/assets/horrorfour-DmgPluVF.webp",jo="/assets/horror-Bwtso3fm.webp",sl="/assets/horrorsix-FrdmNrLk.webp",ll="/assets/horroreight-N8Azt2Lm.webp",So="/assets/vip-dinofroz-C4DCnog6.webp",dl="/assets/dinofrozthree-h3bRBpyn.webp",cl="/assets/dinofrozfour-DkpUmpno.webp",ul="/assets/dinofrozfive-vsWApnpV.webp",pl="/assets/dinofrozsix-B2cUeZYK.webp",fl="/assets/dinofrozseven-r29p04F4.webp",gl="/assets/dinofrozeight-D_wKW6F3.webp",Co="/assets/vip-dragons-B9_gfJz_.webp",xl="/assets/dinofroznine-Btp0fI_a.webp",Wc="/assets/nicerone-w6vAmYap.webp",hl="/assets/village-mmk5VN8H.webp",qc="/assets/sevendays-D9rpKRGr.mp4",Gc="/assets/vladone-D0GzLk2B.mp4",Jc="/assets/domino-B2kX1s2n.webp",Yc="/assets/shop-CjzVirJw.mp4",ml="/assets/faded-CfnCTW9-.webp",Zc="/assets/faded-B0cqhRG7.mp4",bl="/assets/miaandme-BLF13Fck.webp",Xc="/assets/fire-2pNCSf4p.webp",Qc="/assets/clubstep-B4vGowaQ.mp4",eu="/assets/titanic-psUEvksY.webp",tu="/assets/smit-Blk03HJN.webp",nu="/assets/electrodynamix-Pgbof-vP.mp4",au="/assets/volcano-BtJBGKCf.mp4",ru="/assets/whiteloud-LRq9ym10.mp4",ou="/assets/wall-BZpLy1oe.webp",iu="/assets/slivkishow-CvTTxjt1.mp4",su="/assets/days-BYTNHXwz.mp4",go="/assets/dinofroz-N6zhVqvn.mp4",lu="https://raw.githubusercontent.com/TheTurkeyProgramist/stuxia/main/fog.mp4",Pa=[{src:Oa,name:"Щось не так...",category:"Хоррор",author:"Тревор Хендерсон",description:"Навіть ті хто не знають його, починають розуміти ця вишка з сиренами, не така вже вже й не рухома..."},{src:ws,name:"Єгипетські ієрогліфи",category:"Локації",author:"TheTurkeyStudio",description:`Ця картина має глибоку, містичну та інтроспективну атмосферу. Вона ідеально резонує з певним психологічним профілем і складом особистості:
Глибока інтроверсія та рефлексія: Цей образ обирають люди, які відновлюють енергію в тиші та самотності. Вони схильні до глибокого аналізу власних думок і почуттів, вважаючи за краще спостерігати за світом збоку, аніж бути в центрі уваги.
Філософський склад розуму: Символіка ієрогліфів символізує складність буття. Людина з таким характером не лякається невідомості — її приваблюють таємниці, пошук прихованих сенсів та роздуми над глобальними питаннями.`},{src:su,name:"Крижана катастрофа",category:"Песимізм",author:"20th Century Fox",source:"Фільм 'Післязавтра'",start:0,end:300,description:"Тут зображено наслідки людської жадібності та безвідповідальності перед природою. Люди, які обирають цей фон, часто мають песимістичний погляд на світ і схильні до глибоких роздумів про майбутнє планети. Вони можуть відчувати тривогу щодо змін клімату та екологічних катастроф, що відображає їхню турботу про навколишнє середовище та бажання знайти рішення для збереження природи."},{src:ko,name:"Туманний ліс",category:"Хоррор",author:"TheTurkeyStudio",description:"Це стартовий фон для всіх користувачів :) Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:lu,name:"Туманний ліс (Відео)",category:"Хоррор",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:ml,name:"Курорт",category:"Фентезі",author:"TheTurkeyStudio",description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:Zc,name:"Курорт (Відео)",category:"Фентезі",author:"TheTurkeyStudio",start:0,end:300,description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:iu,name:"Політ Кукі у стратосферу",category:"Стихія",author:"SlivkiShow",start:0,end:78,description:"Тут показано цікавий політ на висоту 30 000 метрів! Приємного перегляду небесних краєвидів!"},{src:Nc,name:"Художня студія",category:"Локації",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу творчості та натхнення. Люди, які обирають його, часто мають схильність до мистецтва та креативного самовираження. Вони можуть бути відкритими до нових ідей та люблять експериментувати з різними формами мистецтва, що відображає їхню творчу натуру."},{src:nu,name:"Гроза (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:7,description:"Цей фон створює атмосферу енергії та динаміки. Люди, які обирають його, часто мають схильність до активного способу життя та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:Pc,name:"Гори",category:"Стихія",author:"TheTurkeyStudio",description:`По секрету, я планував зробити його фоном сайту у старих версіях, до 'Туманного лісу'. 
Цей фон створює атмосферу величі та спокою. Люди, які обирають його, часто мають схильність до природи та люблять відчувати себе частиною великого світу. Вони можуть бути інтроспективними та цінувати моменти тиші та роздумів, що відображає їхню глибоку натуру.`},{src:Xc,name:"Вулкан",category:"Стихія",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:au,name:"Вулкан (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:Uc,name:"Аврора Гіллс",category:"Стихія",author:"NovaSoft Interactive",description:"Цей фон взятий з Hidden Object Adventure гри 'Aurora Hills'. Сюжет гри: Ви рейнджер парку у скромному містечку, але люди починають зникати безвісти. Посилання на гру: https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk"},{src:Qs,name:"Туман, що дивиться",category:"Стихія",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:Yc,name:"Магазин Доміно (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Затишна та динамічна атмосфера міського життя. Цей фон підійде тим, хто шукає натхнення у звичайних щоденних моментах, цінує теплі міські локації та комфортний ритм сучасності."},{src:Fc,name:"Кришталева в'язниця",category:"Хоррор",author:"TheTurkeyStudio",start:0,end:300,description:"Загадковий і холодний фон, що випромінює застережливу красу та напругу. Він приваблює шанувальників гостросюжетних історій, психологічних загадок та атмосфери таємничої небезпеки."},{src:Jc,name:"Риболов",category:"Стихія",author:"TheTurkeyStudio",description:"Символ терпіння, витримки та спокійної спостережливості. Цей фон обирають люди, які цінують усамітнення на природі, вміють вичікувати правильний момент та шукають відпочинку від щоденної метушні."},{src:ou,name:"Стиль лофт",category:"Локації",author:"TheTurkeyStudio",description:`Сучасний, лаконічний і стильний інтер'єр із духом свободи. Цей фон відображає прагнення до простору, практичності та естетики урбанізму, приваблюючи людей із витонченим смаком.
 Хоча це просто купа цегли :)`},{src:ru,name:"Білий шум",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Мінімалістичний фон для повного занурення та концентрації. Він створює нейтральний простір без зайвих подразників, допомагаючи відключитися від зовнішнього хаосу та зосередитися на власних думках."},{src:Vc,name:"Імператор Ніцерон (Відео)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:`Цей фон символізує, жагу до небезпек та пригод, і цей дракон вас не зупинить! 
Через нього, мені прийшла в голову ідея, з сайтом погоди у якому купа відсилок ;) Це секретик :) `},{src:Gc,name:"Генерал Влад (Відео, сезон 1)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:"Головні герої в пастці…. Цей фон символізує жагу до свободи, і командної роботи(герої шукають план втечі…, а дракони, хочуть не допустити цього…)"},{src:hl,name:"Древніус і Даркніс",category:"Дракони",author:"highbrow",source:"Dragon Village 3",description:`Картина, прекрасна. Ідеальна для тих хто любить шукати плюси і мінуси. 
Лінк на гру:`},{src:So,name:"Імператор Ніцерон",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Co,name:"Генерал Влад (2 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:dl,name:"Прев'ю мультфільму",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:cl,name:"Драгемон (2 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:ul,name:"Мелтстон",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:pl,name:"Дракони (Епізод)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:fl,name:"Генерал Влад (1 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:gl,name:"Генерал Трік (1 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:xl,name:"Погляд у Рокфроз",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Ts,name:"Замок Ніцерона",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Wc,name:"Іще варіант",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Ss,name:"Кінь",category:"Стихія",author:"Генерація ШІ(Gemini)"},{src:br,name:"Індичка Кейт",category:"Стихія",author:"TheTurkeyStudio"},{src:Vs,name:"Мале бундюче стадо",category:"Стихія",author:"TheTurkeyStudio"},{src:Es,name:"Малий, але впевнений",category:"Стихія",author:"TheTurkeyStudio"},{src:Fs,name:"Дивись мені в очі!",category:"Стихія",author:"TheTurkeyStudio"},{src:Ps,name:"І знову про індиків",category:"Стихія",author:"TheTurkeyStudio"},{src:Ns,name:"2 Індики",category:"Стихія",author:"TheTurkeyStudio"},{src:Os,name:"Ми вже виросли!",category:"Стихія",author:"TheTurkeyStudio"},{src:Bs,name:"Шукаю друга",category:"Стихія",author:"TheTurkeyStudio"},{src:Hc,name:"Нескінченний коридор",category:"Хоррор",author:"TheTurkeyStudio",description:"Знайомий, але глибоко тривожний образ 'місця-порогу'. Цей фон викликає ефект 'ценонопсії' — відчуття моторошної порожнечі в місці, яке зазвичай повне людей. Симетрія заспокоює, але ледь помітний силует у темряві змушує постійно перевіряти, чи ви дійсно тут одні. Ідеально для тих, хто любить гострі відчуття та психологічні загадки. Викликає вряжання, ніби це бекрумс... Навіть мені і спокійно і тривожно дивитись на це..."},{src:$s,name:"Кораблі у пустелі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Сюрреалістичний та заворожуючий образ піщаних морів. Він відображає відчуття плину часу, замисленість та схильність шукати неординарні сенси там, де інші бачать лише пустку."},{src:Is,name:"Пустельні міражі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Образ ілюзій, мрій та вислизаючої краси. Цей фон пасує мрійливим натурам із багатою уявою, які прагнуть вийти за межі повсякденної реальності та відшукати власну істину."},{src:Ms,name:"Кактуси",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Символ витривалості, непохитності та життєвої сили. Цей фон обирають люди з міцним внутрішнім стержнем, які вміють зберігати оптимізм і квітнути навіть у найсуворіших обставинах."},{src:Ds,name:"Піраміда",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Символ монументальності, стабільності та стародавньої мудрості. Цей образ підходить тим, хто цінує структуру, прагне до високих цілей та надихається величчю історії."},{src:tl,name:"Озеро волі",category:"Локації",author:"TheTurkeyStudio",description:"Тиха та освіжаюча локація, що випромінює спокій та гармонію. Цей фон підійде тим, хто прагне емоційного перезавантаження, цінує внутрішню свободу та відчуття чистоти."},{src:Ys,name:"Записка",category:"Локації",author:"TheTurkeyStudio",description:"Атмосферний та інтимний сюжет, оповитий таємницею. Шанувальники цього фону зазвичай уважні до деталей, схильні до ностальгії та цінують глибокі особисті історії."},{src:qs,name:"Зимовий ліс",category:"Локації",author:"TheTurkeyStudio",description:"Атмосфера кришталевої тиші, свіжості та спокою. Цей фон обирають люди, які відновлюють сили у мовчазній споглядальності, цінують чистоту думок та затишок засніженої природи."},{src:Gs,name:"Водоспад",category:"Локації",author:"TheTurkeyStudio",description:"Джерело безперервного руху, відновлення та природної енергії. Фон пасує тим, хто шукає натхнення у динаміці життя, цінує відчуття свіжості та прагне гармонійного розвитку."},{src:_s,name:"Поле і сакури",category:"Фентезі",author:"TheTurkeyStudio",description:"Ніжний та естетичний пейзаж, що випромінює гармонію, цвітіння та весняне оновлення. Його обирають романтичні натури, які цінують витончену красу моменту й естетику східної культури."},{src:Hs,name:"Печера",category:"Фентезі",author:"TheTurkeyStudio",description:"Потаємне та захищене місце, сповнене прадавніх загадок. Підходить для допитливих інтровертів, які цінують відчуття затишку, безпеки та люблять відкривати приховані таємниці."},{src:Us,name:"Річка з лави",category:"Фентезі",author:"TheTurkeyStudio",description:"Палка, експресивна та стихійна локація. Відображає внутрішній вогонь, сильну енергетику, рішучість та сміливість долати будь-які перешкоди на своєму шляху."},{src:Ks,name:"Спуск з гори",category:"Фентезі",author:"TheTurkeyStudio",description:"Захоплюючий краєвид та відчуття руху вперед. Цей фон приваблює цілеспрямованих людей, цінителів пригод та тих, хто любить долати нові вершини й насолоджуватися результатом."},{src:Ws,name:"Скарбниця + Відсилки",category:"Фентезі",author:"TheTurkeyStudio",description:"Атмосфера багатства, секретів та численних великодок. Ідеально підходить для допитливих та уважних глядачів, які люблять помічати дрібні деталі та розгадувати підтексти."},{src:Js,name:"Японський балкон",category:"Фентезі",author:"TheTurkeyStudio",description:"Затишне та заспокійливе місце з гарним краєвидом. Створює відчуття мовчазного спокою, вечірньої рефлексії та приємної гармонії з навколишнім світом."},{src:js,name:"Японський храм",category:"Фентезі",author:"TheTurkeyStudio",description:"Оселя східної мудрості, медитативності та духовної рівноваги. Цей фон обирають люди, які прагнуть знайти внутрішній баланс, цінують традиції та спокійне споглядання."},{src:bl,name:"Міа та я",category:"Фентезі",author:"Studio 100 Media, Lucky Punch, March Ent.",source:"м/с Mia and Me",description:`Цей яскравий та казковий кадр із Мією та Лірією(ім'я може відрізнятись у різних мовах мультсеріалу) у яскраво-рожевих тонах розкриває ніжний, мрійливий та натхненний психотип:
Яскрава фантазія та творче мислення: Цей образ обирають люди, які живуть багатим внутрішнім світом, люблять казкові всесвіти, вірять у дива та прагнуть додавати барв у сіру буденність.
Емпатія та гармонія з природою: Близькість до чарівних істот і казкових світів відображає добре серце, здатність глибоко співчувати та цінувати щиру дружбу.
Віра у власні перетворення: Сюжет про перехід між реальністю та магічним світом резонує з тими, хто любить змінюватися на краще, шукає свій шлях і не боїться довіряти своїй інтуїції.`},{src:jo,name:"Бійцівська собака",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:rl,name:"Будинок з пастками",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:ol,name:"Підвал",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:il,name:"Город зла",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:sl,name:"Втеча",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:qc,name:"Касета, що вбиває",category:"Хоррор",author:"Dreamworks",source:"Фільм 'Дзвінок'",start:0,description:`Цей відеоматеріал має напружену, похмуру та містичну атмосферу, що тримає в постійному психологічному напруженні. Він ідеально резонує з певним психологічним профілем і складом особистості:
Жага до розгадування таємниць і подолання страху: Цей образ обирають люди, яких приваблює психологічна напруга, психологічний трилер та темна естетика. Вони володіють внутрішньою стійкістю та цікавістю, що змушують їх досліджувати складні й лячні теми, долати власні фобії та йти до кінця в пошуках прихованої істини.
Холодний аналітичний розум у кризових ситуаціях: Ситуація жорсткого цейтнолету (відлік семи днів) вимагає максимальної концентрації, холоднокровності та логіки. Людина з таким складом характеру не піддається сліпій паніці перед обличчям невідомого чи невідворотного — вона здатна зберігати тверезість мислення, структурувати хаос навколо себе та рішуче діяти в критичних умовах.`,end:300},{src:ll,name:"Втеча (фінал)",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:el,name:"Болотний дракон",category:"Хоррор",author:"TheTurkeyStudio"},{src:Oc,name:"Пеннівайз",category:"Хоррор",author:""},{src:al,name:"Болото мук",category:"Хоррор",author:"TheTurkeyStudio"},{src:Cs,name:"Чорна діра",category:"Локації",author:"TheTurkeyStudio"},{src:Bc,name:"Чорна діра(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300},{src:As,name:"Гроза",category:"Стихія",author:"TheTurkeyStudio"},{src:zs,name:"Шестерні",category:"Локації",author:"TheTurkeyStudio"},{src:Qc,name:"Невідоме місце(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300},{src:Ls,name:"Невідоме місце",category:"Локації",description:"",author:"TheTurkeyStudio"},{src:nl,name:"Вогнище",category:"Локації",description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих.",author:"TheTurkeyStudio"},{src:_c,name:"Вогнище(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих."},{src:Rs,name:"Шахи",category:"Локації",author:"TheTurkeyStudio"},{src:Zs,name:"Підказка свічки",category:"Хоррор",author:"TheTurkeyStudio"},{src:Xs,name:"Печера кристалів",category:"Хоррор",author:"TheTurkeyStudio"},{src:eu,name:"Титанік",category:"Майбутне",author:"Paramount Pictures & 20th Century",source:"Фільм Titanic (1997)",description:"Цей фон відображає трагедію та величність історії, символізуючи людську амбіцію, крихкість життя та силу природи. Люди, які обирають цей фон, часто мають схильність до роздумів про минуле, цінують історичні події та шукають глибокі сенси у житті. Вони можуть відчувати емпатію до людських переживань та прагнуть зрозуміти уроки минулого для формування кращого майбутнього."},{src:tu,name:"Агент Сміт",category:"Майбутне",author:"WarnerBrothers",source:"Фільм 'Матриця'",description:"Цей фон відображає складність та багатогранність сучасного світу, символізуючи боротьбу між реальністю та ілюзією. Люди, які обирають цей фон, часто мають схильність до критичного мислення, цікавляться технологіями та філософськими питаннями. Вони можуть відчувати потребу у глибокому аналізі навколишнього світу та прагнуть зрозуміти сутність людської природи."}],Ra=t=>t==null?"—":["Північний","Північно-східний","Східний","Південно-східний","Південний","Південно-західний","Західний","Північно-західний"][Math.floor(t/45+.5)%8],du=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`,cu=i.div`
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Ya=i.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Za=i.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,gi=i.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,uu=({onClose:t,isDarkMode:n,currentCardId:r})=>{const c=wo(),l=mr(k=>k.calendar?.customDays||[]),[s,y]=(0,a.useState)(""),[f,x]=(0,a.useState)("00:00"),[g,h]=(0,a.useState)(""),[P,D]=(0,a.useState)(1),[M,$]=(0,a.useState)("hours"),[C,b]=(0,a.useState)(r),w=l.filter(k=>k.cardId==="all"||k.cardId===r),V=()=>{if(!s||!g)return alert("Заповніть дату та назву");if(g.length>30)return alert("Назва занадто довга (макс 30)");if(l.length>=3)return alert("Максимум 3 події на користувача");c(ks({id:Date.now(),date:s,time:f,reason:g,duration:Number(P),durationUnit:M,cardId:C})),y(""),h("")};return(0,e.jsx)(du,{onClick:t,children:(0,e.jsxs)(cu,{$isDarkMode:n,onClick:k=>k.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:0},children:"Встановити дати"}),(0,e.jsxs)(Ya,{children:[(0,e.jsx)("label",{children:"Дата та Час початку"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Za,{type:"date",$isDarkMode:n,value:s,onChange:k=>y(k.target.value)}),(0,e.jsx)(Za,{type:"time",$isDarkMode:n,value:f,onChange:k=>x(k.target.value)})]})]}),(0,e.jsxs)(Ya,{children:[(0,e.jsx)("label",{children:"Тривалість"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Za,{type:"number",min:"1",max:"168",$isDarkMode:n,value:P,onChange:k=>D(k.target.value),style:{width:"60px"}}),(0,e.jsxs)(gi,{$isDarkMode:n,value:M,onChange:k=>$(k.target.value),children:[(0,e.jsx)("option",{value:"hours",children:"Годин"}),(0,e.jsx)("option",{value:"days",children:"Днів"})]})]})]}),(0,e.jsxs)(Ya,{children:[(0,e.jsx)("label",{children:"Застосувати для:"}),(0,e.jsxs)(gi,{$isDarkMode:n,value:C,onChange:k=>b(k.target.value),children:[(0,e.jsx)("option",{value:"all",children:"Всіх карток"}),(0,e.jsx)("option",{value:r,children:"Цієї картки"})]})]}),(0,e.jsxs)(Ya,{children:[(0,e.jsx)("label",{children:"Назва події (макс 30 симв.)"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Za,{type:"text",placeholder:"Наприклад: Новий Рік",$isDarkMode:n,value:g,onChange:k=>h(k.target.value),maxLength:30,style:{flex:1}}),(0,e.jsx)("button",{onClick:V,style:{background:"#ffb36c",border:"none",borderRadius:"5px",padding:"0 15px",fontWeight:"bold",cursor:"pointer"},children:"+"})]})]}),(0,e.jsx)("hr",{style:{border:"0.5px solid #444",margin:"10px 0"}}),(0,e.jsx)("h4",{style:{margin:0},children:"Наступаючі / триваючі події"}),(0,e.jsxs)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[w.length===0&&(0,e.jsx)("p",{style:{fontSize:"12px",opacity:.7},children:"Немає подій"}),w.map(k=>(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:n?"#333":"#eee",padding:"8px",borderRadius:"5px",fontSize:"12px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:k.reason}),(0,e.jsx)("br",{}),k.date," ",k.time," (",k.duration," ",k.durationUnit==="days"?"дн":"год",")"]}),(0,e.jsx)("button",{onClick:()=>c(dc(k.id)),style:{background:"transparent",border:"none",color:"red",cursor:"pointer"},children:(0,e.jsx)(hs,{size:18})})]},k.id))]}),(0,e.jsx)("button",{onClick:t,style:{marginTop:"10px",background:"#444",color:"#fff",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"},children:"Закрити"})]})})},yl=(0,a.createContext)(),pu=({children:t})=>{const[n,r]=(0,a.useState)(!1),[c,l]=(0,a.useState)(0),[s,y]=(0,a.useState)(!1),f=(0,a.useRef)({}),x=($,C)=>{C?f.current[$]=C:delete f.current[$]};(0,a.useEffect)(()=>{(async()=>{try{const b=new URLSearchParams(window.location.search);if(b.has("q")||b.has("city")||b.has("search")||b.has("query")||b.has("pohoda")||window.location.search.toLowerCase().includes("погода")){y(!1),r(!1);return}}catch{}const C=await u.default.getItem("domino_tutorial_prompt");(!C||Date.now()>C)&&setTimeout(()=>y(!0),2500)})()},[]);const g=async()=>{await u.default.setItem("domino_tutorial_prompt",Date.now()+2592e6),y(!1),r(!0),l(1)},h=async()=>{await u.default.setItem("domino_tutorial_prompt",Date.now()+6048e5),y(!1)},P=()=>{l($=>$+1)},D=$=>{l($)},M=()=>{r(!1),l(0)};return(0,e.jsx)(yl.Provider,{value:{isActive:n,setIsActive:r,currentStep:c,setCurrentStep:l,refs:f,registerRef:x,nextStep:P,jumpToStep:D,closeTutorial:M,showInitialModal:s,startTutorial:g,skipTutorialWeek:h},children:t})},Ba=()=>(0,a.useContext)(yl),fu=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Qn=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(fu,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})};je`from { opacity: 0; } to { opacity: 1; }`;var gu=({customDays:t,cardId:n})=>{const[r,c]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{const s=setInterval(()=>c(new Date),1e3);return()=>clearInterval(s)},[]);const l=t.filter(s=>s.cardId==="all"||s.cardId===n);return l.length===0?null:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",padding:"10px",marginTop:"10px"},children:l.map(s=>{const y=new Date(`${s.date}T${s.time}:00`),f=new Date(y.getTime());s.durationUnit==="days"?f.setDate(f.getDate()+s.duration):f.setHours(f.getHours()+s.duration);const x=y-r,g=f-r;if(g<=0)return null;const h=P=>{const D=Math.floor(P/864e5),M=Math.floor(P/36e5%24),$=Math.floor(P/1e3/60%60),C=Math.floor(P/1e3%60);return`${D}дні:${String(M).padStart(2,"0")}:${String($).padStart(2,"0")}:${String(C).padStart(2,"0")}`};return(0,e.jsxs)("div",{style:{background:"rgba(0,0,0,0.4)",color:"#00eaff",padding:"8px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:[s.reason,": ",x>0?`До події: ${h(x)}`:`Подія триватиме ще: ${h(g)}`]},s.id)})})},xu=je`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`,hu=je`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,mu=je`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
`,bu=i.div`
  font-size: 20px;
  text-align: center;
  z-index: 400;
  width: 100px;
  margin-left: auto;
  padding: 5px 14px;
  position: relative;
    margin-bottom: -44px;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#000"};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
    background: ${t=>t.$isDarkMode?" rgba(0, 0, 0, 0.93)":"rgb(255, 255, 255)"};
     border: ${t=>t.$isDarkMode?"2px solid rgba(0, 255, 229, 0.6)":"2px solid rgba(0, 0, 0, 0.2)"};
    `,yu=i.div`
  background: ${t=>t.$isDarkMode?"#0000009e":"#f5f5f5aa"};
  position: relative;
  color: ${t=>t.$isDarkMode?"#fff":"#000000"};
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  min-width: 0;
  z-index: 100;
  max-width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${t=>t.$isMain?"1.5px solid #004cff":"1.5px solid #00fbff"};
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
  }
`,wu=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(0, 238, 255);
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${t=>t.$isMain?"#008cff":"skyblue"};
  }
`,vu=i.div`
  display: flex;
  gap: 4px;
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      background: #555;
    }
  }
`,ku=i.div`
  gap: 4px;
  padding: 1px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  @media (min-width: 768px) {
    height: 600px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,ju=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 240px;
    gap: 14px;
    padding: 12px;
    height: 570px;
    box-sizing: border-box;
    background: ${t=>t.$isDarkMode?"rgba(10, 10, 18, 0.6)":"rgba(240, 244, 248, 0.8)"};
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 16px;
    padding: 14px;
    height: 595px;
  }
`,Su=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  background: ${t=>t.$image?`linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${t.$image}) center/cover no-repeat`:"transparent"};
  @media (min-width: 768px) {
    height: 542px;
    padding: 0;
    overflow: hidden;
  }
`,Cu=i.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    height: 542px;
  }
`,Xa=i.div`
font-size: 17px;
font-weight: 700;
color: ${t=>t.$active?"#00eeff":"#fff"};
`,Qa=i.div`
font-size: 15px;
color: ${t=>t.$active?"#00eeff":"#fff"};
`,er=i.div`
  position: relative;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #00eeff":"1px solid rgba(255, 255, 255, 0.15)"};
  box-shadow: ${t=>t.$active?"0 0 12px rgba(0, 238, 255, 0.5)":"0 2px 6px rgba(0, 0, 0, 0.3)"};
  background: ${t=>t.$bgImg?`linear-gradient(rgba(0, 0, 0, 0.69), rgba(0,0,0,0.7)), url(${t.$bgImg}) center/cover no-repeat`:t.$active?"linear-gradient(135deg, rgba(0, 238, 255, 0.25), rgba(15, 25, 45, 0.9))":"rgba(20, 20, 30, 0.7)"};
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  @media (min-width: 768px) {
    height: 124px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${t=>t.$active?"#00eeff":"rgba(0, 238, 255, 0.6)"};
  }
`,Tu=i.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 6px;
  width: 100%;
  height: 86%;
  padding: 4px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 10px;
  }
`,En=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: ${t=>t.$pad||"2px"};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,Fn=i.div`
  font-size: ${t=>t.$size||"24px"};
  line-height: ${t=>t.$lh||"normal"};
  color: ${t=>t.$color||"inherit"};
  opacity: ${t=>t.$opacity??1};
  transform: ${t=>t.$rotate?`rotate(${t.$rotate}deg)`:"none"};
  display: ${t=>t.$rotate?"inline-block":"block"};
  @media (min-width: 1200px) {
    font-size: 44px;
  }
       @media (min-width: 768px) {
    font-size: 34px;
  }
`,Tn=i.div`
  margin-top: ${t=>t.$mt||"5px"};
  font-size: ${t=>t.$size||"12px"};
  font-weight: ${t=>t.$weight||"bold"};
  text-align: center;
  line-height: ${t=>t.$lh||"normal"};
    @media (min-width: 1200px) {
    font-size: 16px;
  }
       @media (min-width: 768px) {
    font-size: 14px;
  }
`,Mr=i.div`
  font-size: ${t=>t.$size||"10px"};
  font-weight: ${t=>t.$weight||"normal"};
  opacity: ${t=>t.$opacity||.8};
   @media (min-width: 1200px) {
    font-size: 14px;
  }
     @media (min-width: 768px) {
    font-size: 12px;
  }
`,Au=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid rgb(0, 238, 255);
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`,Iu=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  align-self: stretch;
`,Mu=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
`,Du=i.div`
  background: #1e1e1e56;
  padding: 5px;
  border-radius: 20px;
  width: 95%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ffb36c;
  color: white;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,$u=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`,xo=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
`,wl=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`,xi=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #ffb36c":"2px solid transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${xo}, ${wl} {
      opacity: 1;
    }
  }
`,hi=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`,mi=i.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`,Sa=i.div`
  width: ${t=>typeof t.$width=="number"?`${t.$width}px`:t.$width};
  height: ${t=>t.$height||"200px"};
`,Dr={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"28px",padding:0,border:"1px solid rgba(0, 190, 235, 0.7)",borderRadius:"4px",background:"rgba(0, 0, 0, 0.35)",color:"#00bfff",cursor:"pointer"},zu=i(jn.div)`
  background: ${t=>t.$isDarkMode?"rgba(30, 20, 42, 0.88)":"rgba(255, 255, 255, 0.92)"};
  border: 1px solid rgba(138, 43, 226, 0.35);
  border-radius: 12px;
  padding: 14px;
  font-size: 13px;
  line-height: 1.6;
  color: ${t=>t.$isDarkMode?"#efefff":"#2a2a2a"};
  width: 100%;
  min-height: 180px;
  max-height: 480px;
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  @media (max-width: 767px) {
    padding: 10px;
    font-size: 12px;
    max-height: 320px;
  }
`;i.div`
  background: ${t=>t.$isDarkMode?"rgba(30, 20, 42, 0.88)":"rgba(255, 255, 255, 0.92)"};
  border: 1px solid rgba(138, 43, 226, 0.35);
  border-radius: 12px;
  padding: 16px;
  font-size: 13px;
  color: ${t=>t.$isDarkMode?"#efefff":"#4a4a4a"};
  width: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
`;var Lu=i.div`
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.$isExpanded?"none":"5"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-line;
`,Ru=i.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  padding: 6px 0 0 0;
  text-decoration: underline;
`,Eu=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6px;
  background: ${t=>t.$isDarkMode?"rgba(20, 15, 30, 0.75)":"rgba(245, 240, 255, 0.85)"};
  padding: 14px;
  border-radius: 10px;
  border: 1px solid rgba(138, 43, 226, 0.3);

  @media (max-width: 767px) {
    padding: 10px;
    gap: 8px;
  }
`,Fu=i.textarea`
  width: 100%;
  height: 90px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1.5px solid #8a2be2;
  font-size: 13px;
  font-family: inherit;
  line-height: 1.4;
  background: ${t=>t.$isDarkMode?"#151520":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.25);
  }

  @media (max-width: 767px) {
    height: 70px;
    font-size: 12px;
    padding: 8px;
  }
`,bi=i.div`
  display: inline-flex;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.06)"};
  border-radius: 20px;
  padding: 3px;
  gap: 2px;
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.12)"};
`,tr=i.button`
  background: ${t=>t.$active?t.$isDarkMode?"#8a2be2":"#7000df":"transparent"};
  color: ${t=>t.$active?"#ffffff":t.$isDarkMode?"#cccccc":"#444444"};
  border: none;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;
  box-shadow: ${t=>t.$active?"0 2px 8px rgba(138, 43, 226, 0.4)":"none"};

  &:hover {
    color: ${t=>t.$active||t.$isDarkMode?"#ffffff":"#000000"};
  }
`;i.div`
  position: absolute;
  inset: 0;
  background: ${t=>t.$isDarkMode?"rgba(30, 30, 30, 0.98)":"rgba(255, 255, 255, 0.98)"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  z-index: 999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  animation: ${xu} 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  overflow: hidden;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: 1.2rem;
    color: #ffb36c;
  }
  p {
    font-size: 14px;
    margin: 5px 0;
  }
`;i.div`
  flex: 1;
  width: 100%;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;var Pu=i.div`
  position: absolute;
  top: -10px;
  left: -275px;
  width: 100%;
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 5px 5px 0 0;
  display: flex;
  min-width: 309px;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${t=>t.$isClosing?mu:hu} 0.2s
    ease-out forwards;
  overflow: hidden;
  max-height: 70vh;
`,Nu=({user:t,card:n,isDarkMode:r,isLocationEnabled:c,isExtremeTemp:l,isExtremeWind:s,isExtremeUV:y,index:f,totalCards:x,handleRefreshCard:g,handleDeleteCard:h,handleRenameCard:P,moveWeatherCard:D,setIsLocationEnabled:M,customHolidayName:$,currentTimeString:C,layout:b,onOpenDetails:w})=>{const V=wo(),{registerRef:k}=Ba?.()||{registerRef:()=>{}},R=mr(d=>d.calendar?.customDays||[]),[W,U]=(0,a.useState)(!1),[N,_]=(0,a.useState)(n.locationName),[ge,ne]=(0,a.useState)(null),[q,Z]=(0,a.useState)(""),[se,Se]=(0,a.useState)(!1),[fe,tt]=(0,a.useState)(!0),[Ce,ct]=(0,a.useState)(""),[xe,He]=(0,a.useState)("concise"),[$e,wt]=(0,a.useState)("friendly"),[vt,kt]=(0,a.useState)(!1),[Ze,xt]=(0,a.useState)(""),[_e,ht]=(0,a.useState)(0),[Tt,Oe]=(0,a.useState)(!1),[T,F]=(0,a.useState)(!1),[te,de]=(0,a.useState)(0),[Ee,Ve]=(0,a.useState)("charts"),[ze,nt]=(0,a.useState)("charts"),ce=typeof window<"u"&&window.innerWidth<768?"250px":"380px",[jt,mt]=(0,a.useState)(n.cityImage||""),[at,At]=(0,a.useState)("wiki"),[Xe,bt]=(0,a.useState)(!1),[B,ae]=(0,a.useState)(!1),[ue,Be]=(0,a.useState)(!1),[Rt,re]=(0,a.useState)(!1);(0,a.useEffect)(()=>{u.default.getItem("gemini_api_key").then(p=>re(!!p));const d=p=>re(!!p.detail);return window.addEventListener("geminiKeyChanged",d),()=>window.removeEventListener("geminiKeyChanged",d)},[]);const be=()=>{Be(!0),setTimeout(()=>{ae(!1),Be(!1)},180)},[ut,A]=(0,a.useState)(!1),[E,X]=(0,a.useState)({date:"",time:"",reason:"",duration:1,durationUnit:"hours",targetCard:"all"}),[ie,Ke]=(0,a.useState)(!1),[ke,We]=(0,a.useState)("current"),[rt,It]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!n.isMain)return;const d=()=>Ke(!0),p=()=>Ke(!1);return window.addEventListener("domino-open-weather-settings",d),window.addEventListener("domino-close-weather-settings",p),()=>{window.removeEventListener("domino-open-weather-settings",d),window.removeEventListener("domino-close-weather-settings",p)}},[n.isMain]);const[Ut,ve]=(0,a.useState)(!0),[Mt,Vt]=(0,a.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),Et=(0,a.useRef)(null),ln=(0,a.useRef)(null),ot=(0,a.useRef)(null),Dt=(0,a.useRef)(null),Fe=(0,a.useRef)(null),Kt=(0,a.useRef)(null),[Le,oe]=(0,a.useState)(null),[ye,qe]=(0,a.useState)(!1),[le,Te]=(0,a.useState)({day:1,night:1,wind:1}),[we,Pe]=(0,a.useState)(12),Ge=d=>{Te(p=>({...p,[d]:p[d]===1?.3:1}))};(0,a.useEffect)(()=>{const d=()=>{if(!document.fullscreenElement){oe(null);return}requestAnimationFrame(()=>{const p=Le==="hourly"?ot.current:Kt.current;p?.resize(),p?.update("none")})};return document.addEventListener("fullscreenchange",d),()=>document.removeEventListener("fullscreenchange",d)},[Le]),(0,a.useEffect)(()=>{if(!Le)return;const d=setTimeout(()=>{const p=Le==="hourly"?ot.current:Kt.current;p?.resize(),p?.update("none")},100);return()=>clearTimeout(d)},[Le]);const dn=async(d,p)=>{if(document.fullscreenElement){await document.exitFullscreen();return}p.current?.requestFullscreen&&(oe(d),await p.current.requestFullscreen())},it=async(d,p=void 0,O=void 0)=>d.current?(0,Lc.default)(d.current,{backgroundColor:r?"#000000":"#f5f5f5",scale:2,useCORS:!0,allowTaint:!0,windowWidth:p||window.innerWidth,windowHeight:O||window.innerHeight}):null,xn=async(d,p)=>{qe(!0);const O=Le===d,z=p.current;if(!z)return qe(!1),null;let L=null,v=null;if(!O){const Ne=z.getBoundingClientRect();L=z.cloneNode(!0);const pt=z.querySelectorAll("canvas"),Re=L.querySelectorAll("canvas");pt.forEach((ft,an)=>{Re[an]&&Re[an].getContext("2d").drawImage(ft,0,0)}),L.style.position="fixed",L.style.top=`${Ne.top}px`,L.style.left=`${Ne.left}px`,L.style.width=`${Ne.width}px`,L.style.height=`${Ne.height}px`,L.style.margin="0",L.style.zIndex="99998",L.style.pointerEvents="none",document.body.appendChild(L),v=document.createElement("div"),v.style.width=`${Ne.width}px`,v.style.height=`${Ne.height}px`,z.parentElement.insertBefore(v,z),oe(d),await new Promise(ft=>setTimeout(ft,100))}const he=z.style.cssText,Ie=Math.max(z.scrollWidth,window.innerWidth,d==="hourly"?Gt:900),st=Math.max(z.scrollHeight,window.innerHeight,600);O?z.style.cssText+=`
        width: ${Ie}px !important;
        height: ${st}px !important;
        min-height: ${st}px !important;
        max-width: none !important;
        max-height: none !important;
      `:z.style.cssText+=`
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${Ie}px !important;
        height: ${st}px !important;
        min-height: ${st}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${r?"#000":"#f5f5f5"} !important;
      `,await new Promise(Ne=>setTimeout(Ne,100));const Zt=await it(p,Ie,st);return z.style.cssText=he,O||oe(null),qe(!1),L&&(await new Promise(Ne=>setTimeout(Ne,100)),L.remove(),v&&v.remove()),Zt},Wt=async(d,p)=>{const O=await xn(d,p);if(!O)return;const z=document.createElement("a");z.download=`${n.locationName}-${d}-chart.png`,z.href=O.toDataURL("image/png"),z.click()},Mn=async(d,p)=>{const O=await xn(d,p);if(!O)return;const z=O.toDataURL("image/png");let L=document.getElementById("chart-print-iframe");L||(L=document.createElement("iframe"),L.id="chart-print-iframe",L.style.position="fixed",L.style.width="0",L.style.height="0",L.style.border="none",L.style.top="-9999px",L.style.left="-9999px",document.body.appendChild(L));const v=L.contentWindow.document;v.open(),v.write(`
      <html><head><title>${n.locationName} - ${d}</title>
      <style>body{margin:0;text-align:center} img{max-width:100%}</style>
      </head>
      <body><img src="${z}" onload="window.focus();window.print();" /></body></html>
    `),v.close()},Wn=(d,p)=>(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",flexShrink:0},children:[(0,e.jsx)(Qn,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>dn(d,p),title:Le===d?"Вийти з повного екрана":"На весь екран","aria-label":Le===d?"Вийти з повного екрана":"На весь екран",style:Dr,children:(0,e.jsx)(qd,{size:16})})}),(0,e.jsx)(Qn,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>Wt(d,p),"aria-label":"Завантажити скріншот повноекранного графіка",style:Dr,children:(0,e.jsx)(Od,{size:16})})}),(0,e.jsx)(Qn,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>Mn(d,p),"aria-label":"Друкувати скріншот повноекранного графіка",style:Dr,children:(0,e.jsx)(Rd,{size:16})})})]}),en=d=>(0,e.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:`${Math.max(10,we-1)}px`,alignItems:"center"},children:d.map(p=>(0,e.jsx)(Qn,{content:`Натисніть, щоб ${le[p.key]===1?"сховати":"показати"} ${p.label.toLowerCase()}`,isDarkMode:r,children:(0,e.jsxs)("button",{type:"button",onClick:()=>Ge(p.key),"aria-label":`Натисніть, щоб ${le[p.key]===1?"сховати":"показати"}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 6px",border:`1px solid ${p.color}`,borderRadius:"4px",background:r?"#222":"#fff",color:p.color,cursor:"pointer",opacity:le[p.key],fontSize:"inherit",fontWeight:"bold"},children:[(0,e.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:p.color}}),p.label]},p.key)}))}),qn=(d,p,O)=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"nowrap",marginBottom:"4px"},children:[en(O),Wn(d,p)]});(0,a.useEffect)(()=>{if(Dt.current){const d=setTimeout(()=>{Dt.current&&(Dt.current.scrollLeft=144.44444444444446)},100);return()=>clearTimeout(d)}},[n.id,Ut,Mt]),(0,a.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`useGlobalLayout_${n.id}`);p!==null&&ve(p);const O=await u.default.getItem(`localLayout_${n.id}`);O&&Vt(O)})()},[n.id]),(0,a.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`bgMode_${n.id}`);p&&At(p)})()},[n.id]),(0,a.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`legendFontSize_${n.id}`);p&&Pe(p)})()},[n.id]);const hn=d=>{At(d),u.default.setItem(`bgMode_${n.id}`,d),bt(!1)},Gn=()=>{M(!c),be()};(0,a.useEffect)(()=>{let d=!0;return(async()=>{if(at!=="wiki"){d&&mt(at);return}const O=()=>Pa.find(L=>L.name==="Туманний ліс")?.src||Pa[0].src;let z=(n.locationName||n.name||"").trim();if(z==="Ваша локація"&&n.lat&&n.lon)try{const L=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${n.lat}&lon=${n.lon}&format=json&accept-language=uk`)).json();z=L.address?.city||L.address?.town||L.address?.village||L.address?.state||z}catch(L){console.warn("Reverse geocoding failed",L)}if(!z||z==="Ваша локація"){d&&mt(O());return}try{const L=await(await fetch(`https://uk.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(z)}&pithumbsize=1000&format=json&origin=*`)).json(),v=Object.values(L?.query?.pages||{}).find(he=>he.thumbnail?.source)?.thumbnail?.source;v&&d?mt(v):d&&mt(O())}catch(L){console.warn("City image lookup failed:",L),d&&mt(O())}})(),()=>{d=!1}},[n.locationName,n.lat,n.lon,n.name,at]),(0,a.useEffect)(()=>()=>{},[]),(0,a.useEffect)(()=>{Oe(!1),F(!1)},[q]),(0,a.useEffect)(()=>{Et.current&&q&&!Tt&&Et.current.scrollHeight>Et.current.clientHeight&&F(!0)},[q,Tt]),(0,a.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`ai_enabled_${n.id}`);p!==null&&tt(p);const O=await u.default.getItem(`ai_custom_prompt_${n.id}`);O&&(ct(O),xt(O));const z=await u.default.getItem(`ai_custom_prompt_changed_at_${n.id}`);z&&ht(z);const L=await u.default.getItem(`ai_response_length_${n.id}`);L&&He(L);const v=await u.default.getItem(`ai_style_${n.id}`);v&&wt(v)})()},[n.id]);const Bt=(0,a.useCallback)(async()=>{if(se)return;const d=await u.default.getItem("gemini_api_key");if(!d){Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.");return}Se(!0);try{const p=(d||"").trim().replace(/^["']|["']$/g,""),O=new vo(p),z=n.current,L=n.daily16||[],v=(n.hourly||[]).slice(0,5).map(ft=>`${ft.time}: ${ft.temp}, вітер ${ft.windNum}м/с, ${ft.iconPlaceholder}`).join("; "),he=xe==="extensive"?"надай розгорнуту відповідь (кілька речень)":"згенеруй лаконічний прогноз одним реченням (макс 25 слів)",Ie=$e==="scientific"?"використовуй науковий стиль":$e==="sarcastic"?"додай дрібку сарказму та іронії":"використовуй дружній та теплий тон",st=`${Ce.trim()?`Ти метеоролог-асистент. ${Ie}. Виконуй цю інструкцію: ${Ce}. Критичні попередження (якщо є) виводь на самому початку. Використовуй абзаци для розбиття тексту. Відповідь надай українською мовою.`:`Ти метеоролог-асистент. На основі наданих даних ${he}. ${Ie}. Згадай про комфортний одяг. КРИТИЧНІ ПОПЕРЕДЖЕННЯ (температура, вітер, УФ) став найвище. Використовуй абзаци для зручності читання. Відповідь виключно українською мовою.`}

Місто: ${n.locationName}. Поточний час на сайті: ${C}.

Поточні показники: ${z.temp}, ${z.description}, вологість ${z.humidity}, вітер ${z.wind_speed}.
Найближчі години: ${v}.
Прогноз на дні: завтра ${L[1]?.temp_day||"н/д"}, післязавтра ${L[2]?.temp_day||"н/д"}.
Тенденція на 2 тижні: 1-й тиждень ~${L[7]?.temp_day||"н/д"}, 2-й тиждень ~${L[14]?.temp_day||"н/д"}.`,Zt=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.0-flash"];let Ne=null,pt=null;for(const ft of Zt)try{if(Ne=await O.getGenerativeModel({model:ft}).generateContent(st),Ne)break}catch(an){pt=an,console.warn(`Weather summary model ${ft} failed, trying next...`,an)}if(!Ne)throw pt||new Error("Не вдалося отримати прогноз від Gemini");const Re=(await Ne.response).text().trim();Z(Re),await u.default.setItem(`ai_weather_summary_${n.id}`,{text:Re,timestamp:Date.now()})}catch(p){console.error("Gemini Weather Error:",p)}finally{Se(!1)}},[n,se,Ce,xe,$e,C]),Dn=(0,a.useCallback)(async()=>{const d=await u.default.getItem(`ai_weather_summary_${n.id}`);!d||Date.now()-d.timestamp>72e5?Bt():Z(d.text)},[n.id,Bt]),tn=async()=>{const d=!fe;tt(d),await u.default.setItem(`ai_enabled_${n.id}`,d)},$n=()=>{We("ai"),fe&&Dn()};(0,a.useEffect)(()=>{const d=p=>{p.detail||Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")};return window.addEventListener("geminiKeyChanged",d),()=>window.removeEventListener("geminiKeyChanged",d)},[]);const[zn,mn]=(0,a.useState)(!1),[zt,Ln]=(0,a.useState)("");(0,a.useEffect)(()=>{mn(!1)},[ge]);const nn=(d,p=24,O=null,z=1)=>{let L=d;if(d&&typeof d!="string"){const Ie=d.type?.name||"";Ie==="FaSmog"?L="☁️":Ie==="IoRainy"||Ie==="LiaCloudSunRainSolid"?L="🌧️":Ie==="GiSnowing"?L="❄️":Ie==="IoThunderstorm"?L="⛈️":Ie==="FaSun"?L="☀️":Ie==="BsMoonStarsFill"?L="🌙":Ie==="FaCloudMoon"?L="☁️":Ie==="FaCloudMoonRain"||Ie==="LiaCloudMoonRainSolid"?L="🌧️":L="☁️"}const v=document.createElement("canvas");v.width=p,v.height=p;const he=v.getContext("2d");return he.font=`${p-8}px serif`,he.textAlign="center",he.textBaseline="middle",he.fillStyle="rgba(0, 0, 0, 0.72)",he.globalAlpha=z,he.beginPath(),he.arc(p/2,p/2,p*.76,0,Math.PI*2),he.fill(),he.globalAlpha=z,he.fillStyle="#ffffff",he.fillText(L,p/2,p/2),O&&(he.fillStyle=O,he.font=`bold ${p/2}px Arial`,he.fillText("!",p-5,5)),v},Bn=(d,p=18,O=1)=>{const z=document.createElement("canvas"),L=p+12;z.width=L,z.height=L;const v=z.getContext("2d"),he=L/2,Ie=((Number(d)||0)%360+360)%360,st=Math.round(Ie/45)*45*Math.PI/180;return v.translate(he,he),v.rotate(st),v.fillStyle="rgba(0, 0, 0, 0.72)",v.globalAlpha=O,v.beginPath(),v.arc(0,0,L*.45,0,Math.PI*2),v.fill(),v.globalAlpha=O,v.fillStyle="#0099ff",v.strokeStyle="#ffffff",v.lineWidth=1.5,v.beginPath(),v.moveTo(0,-p*.43),v.lineTo(p*.2,p*.12),v.lineTo(p*.07,p*.08),v.lineTo(p*.07,p*.4),v.lineTo(-p*.07,p*.4),v.lineTo(-p*.07,p*.08),v.lineTo(-p*.2,p*.12),v.closePath(),v.fill(),v.stroke(),z},Ft=d=>{const p=((Number(d)||0)%360+360)%360,O=Math.round(p/45)*45;return Ra(O%360)},bn=()=>{N.trim()&&(P(n.id,N),U(!1))},cn=Ec(n.hourly||[]),Qe=cn[te]?.items||[],Gt=Math.max(873,(Qe?.length||24)*35),un={labels:Qe?.map(d=>d.time)||[],datasets:[{label:"Температура (°C)",data:Qe?.map(d=>d.tempNum??0)||[],fill:!0,backgroundColor:"rgba(255, 179, 108, 0.2)",borderColor:"rgba(255, 179, 108, 1)",pointRadius:12,pointStyle:Qe?.map(d=>{let p=null;return(d.tempNum??0)>30?p="#ff0000":(d.tempNum??0)<-30?p="#004cff":(d.windNum??0)>10&&(p="#ff6a00"),nn(d.iconSymbol??d.iconPlaceholder??"☁️",24,p,le.day)}),tension:.4,yAxisID:"y"},{label:"Вітер (м/с)",data:Qe?.map(d=>d.windNum??0)||[],borderColor:"rgba(0, 190, 235, 1)",backgroundColor:"rgba(0, 190, 235, 0.1)",pointRadius:6,pointBackgroundColor:Qe?.map(d=>(d.windNum??0)>10?"#ff6a00":"rgba(0, 190, 235, 1)")||[],pointStyle:Qe?.map(d=>Bn(d.wind_direction_10m,18,le.wind))||[],tension:.4,yAxisID:"y1"}]},Jt={"01.01":"Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)","06.01":"Богоявлення / Водохреще (новий стиль)","07.01":"Різдво Христове (старий стиль)","12.01":"1 серія 'Реальної містики'. Та вже, ціла епоха розкриття містифікацій у 12 сезонів!","14.01":"Василя / Обрізання Господнє (старий стиль)","19.01":"Богоявлення / Водохреще (старий стиль)","02.02":"Стрітення Господнє (новий стиль)","14.02":"З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!","15.02":"Стрітення Господнє (старий стиль)","08.03":"Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)","25.03":"Благовіщення Пресвятої Богородиці (новий стиль)","01.04":"Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)","07.04":"Благовіщення Пресвятої Богородиці (старий стиль)","23.04":"День святого Юрія / Георгія (новий стиль)","01.05":"День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!","02.05":"З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)","06.05":"День святого Юрія / Георгія (старий стиль)","08.05":"День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм. Один не багатьох випадків коли я кажу про політику добре...","09.05":"День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.","27.05":"Випуск Dragon Village 3. Скачаєш? :)","29.05":"Особисте свято у цей день... Пробач, я теж маю секрети :)","10.06":"Вознесіння Господнє","20.06":"Трійця / П'ятдесятниця","21.06":"Просто літнє сонцестояння. Купив собі ескімо? :)","24.06":"Різдво Івана Хрестителя / Купала (новий стиль)","28.06":"День Конституції України","29.06":"Святих апостолів Петра і Павла (новий стиль)","07.07":"Різдво Івана Хрестителя / Івана Купала (старий стиль)","12.07":"Святих апостолів Петра і Павла (старий стиль)","01.08":"День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(","06.08":"Преображення Господнє / Спас (новий стиль)","15.08":"Успіння Пресвятої Богородиці (новий стиль)","19.08":"Преображення Господнє / Спас (старий стиль)","24.08":"День Незалежності України","28.08":"Успіння Пресвятої Богородиці (старий стиль)","01.09":"День знань. Цей день усі ненавидять, бо термін відпустки закінчився.","08.09":"Різдво Пресвятої Богородиці (новий стиль)","11.09":"Випуск 1-ї серії м/с 'Динофроз'. Легенда...","14.09":"Воздвиження Хреста Господнього (новий стиль)","21.09":"Різдво Пресвятої Богородиці (старий стиль)","27.09":"Воздвиження Хреста Господнього (старий стиль)","01.10":"Покрова Пресвятої Богородиці та День козацтва (новий стиль)","14.10":"Покрова Пресвятої Богородиці та День козацтва (старий стиль)","27.10":"День української писемності та мови. Напиши по максимуму каліграфічний лист.","19.11":"Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)","21.11":"Введення в храм Пресвятої Богородиці (новий стиль)","30.11":"День святого Андрія Первозванного (новий стиль)","04.12":"Введення в храм Пресвятої Богородиці (старий стиль)","06.12":"День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","13.12":"День святого Андрія Первозванного (старий стиль)","19.12":"День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","25.12":"Різдво Христове (новий стиль)"},Sn=d=>{const p=d.toLowerCase();return p.includes("сб")||p.includes("нд")},_n=d=>{if(!t?.birthDate||!d)return!1;const[,p,O]=t.birthDate.split("-"),[z,L]=d.split(".");return parseInt(O)===parseInt(z)&&parseInt(p)===parseInt(L)},Ae=(d,p,O)=>{const z=Jt[d],L=Sn(p),v=_n(d),he=R.find(Ie=>Ie.date===O);return z?{type:"holiday",color:"#ff6666",label:z+(L?" + вихідний":"")}:v?{type:"birthday",color:"#e066ff",label:"З Днем Народження! 🎉",isRainbow:!0}:he?{type:"custom",color:"#00bfff",label:he.reason}:L?{type:"weekend",color:"#ff9966",label:"вихідний"}:{type:"regular",color:null,label:""}},Je=d=>{const p=new Date,O=new Date(d);O.setHours(0,0,0,0);const z=O.getTime()-p.getTime();if(z<=0)return null;const L=Math.floor(z/864e5),v=Math.floor(z%864e5/36e5);return L>0?`⏳ Залишилось: ${L}д ${v}г`:`⏳ Почнеться за ${v}г`},Yt=(d,p,O)=>{const z=R.find(Ie=>Ie.date===O),L=Je(O),v=L?` (${L})`:"";if(z)return`💙 Ваша подія: ${z.reason}${v}`;if(_n(d))return`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈${v}`;const he=Jt[d];return he?`✨ Вітаємо з святом: ${he}!${v}`:null},yn={labels:n.daily16?.map(d=>`${d.date}
${d.day}`)||[],datasets:[{label:"День (°C)",data:n.daily16?.map(d=>parseInt(d.temp_day))||[],borderColor:`rgba(255, 179, 108, ${le.day})`,backgroundColor:`rgba(255, 179, 108, ${le.day*.5})`,pointRadius:12,pointStyle:n.daily16?.map(d=>nn(d.iconSymbol??d.iconPlaceholder,24,null,le.day)),pointBorderColor:n.daily16?.map(d=>Ae(d.date,d.day,d.fullDate).color||"#ffb36c"),pointBorderWidth:n.daily16?.map(d=>Ae(d.date,d.day,d.fullDate).color?3:2),tension:.3,yAxisID:"y"},{label:"Ніч (°C)",data:n.daily16?.map(d=>parseInt(d.temp_night))||[],borderColor:`rgba(255, 20, 147, ${le.night})`,backgroundColor:`rgba(255, 20, 147, ${le.night*.2})`,pointStyle:"circle",pointRadius:4,tension:.3,yAxisID:"y"},{label:"Вітер (м/с)",data:n.daily16?.map(d=>parseFloat(d.wind_speed)||0)||[],borderColor:`rgba(0, 153, 255, ${le.wind})`,backgroundColor:`rgba(0, 153, 255, ${le.wind*.2})`,pointStyle:n.daily16?.map(d=>Bn(d.wind_direction_10m,18,le.wind)),pointRadius:6,pointBorderColor:"#ffffff",pointBorderWidth:1.5,pointBackgroundColor:n.daily16?.map(d=>parseFloat(d.wind_speed)>10?"#ff6a00":"#0099ff"),tension:.3,yAxisID:"y1"}]},Pt={animation:ye?!1:void 0,responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,external:Jn,callbacks:{title:d=>`⏰ Час: ${d[0].label}`,label:d=>{if(d.datasetIndex===0){const p=d.parsed.y||0;let O=`Температура: ${p}°C`,z=[];return p>30&&z.push("СПЕКА ☀️"),p<-30&&z.push("МОРОЗ ❄️"),z.length>0&&(O+=` ⚠️ ${z.join(", ")}`),O}else if(d.datasetIndex===1){const p=d.parsed.y||0;let O=` Вітер: ${p.toFixed(1)} м/с`;p>10&&(O+=" ⚠️ СИЛЬНИЙ ВІТЕР");const z=Qe?.[d.dataIndex];return z&&(O+=` | ${Ft(z.wind_direction_10m)} (${Math.round(z.wind_direction_10m||0)}°)`),O}return""},afterLabel:d=>{const p=d.dataIndex,O=Qe?.[p];return d.datasetIndex===0&&O&&(O.iconSymbol||O.iconPlaceholder)||""}}}},scales:{y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"rgba(0, 190, 235, 1)"},ticks:{color:"rgba(0, 190, 235, 1)",font:{size:10}},grid:{drawOnChartArea:!1}},x:{offset:!0,ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{display:!1}}}},pn={...Pt,plugins:{...Pt.plugins,legend:{display:!1},tooltip:{...Pt.plugins.tooltip,external:Jn,callbacks:{title:d=>{const p=n.daily16?.[d[0].dataIndex];if(!p)return d[0].label;const O=Ae(p.date,p.day,p.fullDate),z=Yt(p.date,p.day,p.fullDate),L=O.label?` [${O.label}]`:"",v=d[0].label+L;return z?[z,v]:v},label:d=>{const p=d.datasetIndex===0,O=d.datasetIndex===1,z=d.datasetIndex===2;if(p)return`☀️ День: ${d.parsed.y}°C`;if(O)return`🌙 Ніч: ${d.parsed.y}°C`;if(z){const L=n.daily16?.[d.dataIndex]?.wind_direction_10m||0;return`🌬️ Вітер: ${d.parsed.y.toFixed(1)} м/с | ${Ft(L)} (${Math.round(L)}°)`}return""},afterLabel:d=>{const p=n.daily16?.[d.dataIndex];return!p||d.datasetIndex!==0?"":`
Описання: ${p.description||"—"}`}}}},scales:{...Pt.scales,y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"#0099ff"},ticks:{color:"#0099ff",font:{size:10}},grid:{drawOnChartArea:!1}},x:{...Pt.scales.x,ticks:{...Pt.scales.x.ticks,color:d=>{if(!n.daily16||d.index>=n.daily16.length)return r?"#aaa":"#888";const p=n.daily16[d.index];return Ae(p.date,p.day,p.fullDate).color||(r?"#aaa":"#888")},font:{...Pt.scales.x.ticks.font,weight:d=>{if(!n.daily16||d.index>=n.daily16.length)return"normal";const p=n.daily16[d.index];return Ae(p.date,p.day,p.fullDate).color?"bold":"normal"}}}}},onClick:(d,p)=>{if(p.length>0){const O=p[0].index,z=n.daily16[O],L=Ae(z.date,z.day,z.fullDate);if(L.type==="holiday"||L.type==="birthday")ne(z);else if(L.type==="custom")ne(z),Ln(L.label);else if($.trim()){if($.trim().length>12){alert("Назва свята занадто довга (макс. 12 символів)!");return}V(ks({date:z.fullDate,reason:$.trim()}))}else ne(z)}}};function Jn(d){const{chart:p,tooltip:O}=d,z=document.fullscreenElement,L=z||document.body;let v=L.querySelector("#chartjs-external-tooltip");if(!v){const ft=document.getElementById("chartjs-external-tooltip");ft&&ft.remove(),v=document.createElement("div"),v.id="chartjs-external-tooltip",v.style.position="fixed",v.style.zIndex="2147483647",v.style.maxWidth="min(280px, calc(100vw - 24px))",v.style.boxSizing="border-box",v.style.whiteSpace="pre-line",v.style.background="rgba(15, 15, 25, 0.92)",v.style.color="#fff",v.style.borderRadius="8px",v.style.padding="8px 12px",v.style.pointerEvents="none",v.style.transition="all 0.1s ease",v.style.boxShadow="0 8px 20px rgba(0,0,0,0.4)",v.style.border="1px solid rgba(255, 179, 108, 0.4)",v.style.fontSize="12px",v.style.backdropFilter="blur(6px)",v.setAttribute("role","dialog"),L.appendChild(v)}if(O.opacity===0){v.style.opacity="0";return}if(O.body){const ft=O.title||[],an=O.body.map(qt=>qt.lines),fn=O.afterBody||[];let wn="";ft.forEach(qt=>{wn+=`<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${qt}</div>`}),an.forEach(qt=>{wn+=`<div style="margin-bottom: 2px;">${qt}</div>`}),fn.forEach(qt=>{wn+=`<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${qt}</div>`}),v.innerHTML=wn}const he=p.canvas.getBoundingClientRect(),Ie=v.offsetWidth,st=v.offsetHeight,Zt=z?z.clientWidth:window.innerWidth,Ne=z?z.clientHeight:window.innerHeight,pt=Math.min(Math.max(12,he.left+O.caretX+10),Zt-Ie-12),Re=Math.min(Math.max(12,he.top+O.caretY-st-10),Ne-st-12);v.style.opacity="1",v.style.left=`${pt}px`,v.style.top=`${Re}px`}const[Yn,Zn]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(Yn)return;const d=setInterval(()=>{window.innerWidth>=768&&We(p=>{const O=["current","hourly","daily","ai"],z=O[(O.indexOf(p)+1)%O.length];return z==="ai"&&!q&&fe&&Dn(),z})},6500);return()=>clearInterval(d)},[Yn,q,fe,Dn]);const ma=()=>!Qe||Qe.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r?"#aaa":"#666"},children:"Немає даних годинного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"3px",paddingBottom:"10px",minWidth:"min-content"},children:Qe.map((d,p)=>{const O=d.wind_direction_10m||0,z=Ra(O),L=parseInt(d.temp),v=L>25?"#ff4d4d":L<5?"#4da6ff":"#ffb36c";return(0,e.jsxs)("div",{style:{flex:"0 0 120px",background:r?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:r?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"7px",padding:"4px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",color:r?"#fff":"#1a1a1a",boxShadow:"0 4px 12px rgba(0,0,0,0.12)"},children:[(0,e.jsx)("div",{style:{fontSize:"12px",fontWeight:"bold",opacity:.85},children:d.time||d.label||`${p}:00`}),(0,e.jsxs)("div",{style:{fontSize:"24px",margin:"2px 0"},children:[d.iconSymbol||d.iconPlaceholder||"🌤️",(0,e.jsx)(Tn,{$size:"11px",$lh:"1.2",children:(n.current.iconPlaceholder||"").replace(n.current.iconSymbol||"","").trim()||"Мінлива хмарність"})]}),(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"800",color:v},children:d.temp}),d.feels_like&&(0,e.jsxs)("div",{style:{fontSize:"10px",opacity:.75},children:["Відчувається: ",d.feels_like]}),(0,e.jsx)("div",{style:{width:"80%",height:"1px",background:r?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,e.jsxs)("div",{style:{fontSize:"10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Сила вітру: ",(0,e.jsxs)("span",{children:[d.wind_speed||d.windSpeed||"0"," м/с"]})]}),(0,e.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:["Напрямок: ",(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${O}deg)`,fontSize:"12px"},children:"⬇"})]}),(0,e.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:[" ",z," (",Math.round(O),"°)"]}),(d.wind_gusts_10m||d.wind_gusts)&&parseFloat(d.wind_gusts_10m||d.wind_gusts)>0&&(0,e.jsxs)("div",{style:{fontSize:"9px",color:"#ff9900",fontWeight:"600"},children:["Пориви: ",d.wind_gusts_10m||d.wind_gusts,"м/с"]})]})]},p)})})}),ba=()=>{const d=n.daily16||n.daily||[];return!d||d.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"12px",minWidth:"min-content"},children:d.map((p,O)=>{const z=O<2||p.isPast,L=Ae(p.date,p.day,p.fullDate),v=p.day==="Сб"||p.day==="Нд"||L.type==="weekend",he=p.wind_direction_10m||0,Ie=Ra(he),st=parseInt(p.temp_day||p.temp),Zt=parseInt(p.temp_night||p.nightTemp);let Ne=r?"#fff":"#333",pt=r?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.1)",Re=null;return z?(Ne="#888",pt="rgba(140, 140, 140, 0.35)",Re=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(120,120,120,0.3)",color:"#bbb",padding:"1px 6px",borderRadius:"4px"},children:"⌛ Минулий"})):L.type==="holiday"?(Ne="#ff4d4d",pt="rgba(255, 77, 77, 0.7)",Re=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 77, 77, 0.25)",color:"#ff4d4d",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"🚩 Свято"})):L.type==="custom"?(Ne="#00bfff",pt="rgba(0, 191, 255, 0.7)",Re=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(0, 191, 255, 0.25)",color:"#00bfff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"💙 Подія"})):L.type==="birthday"?(Ne="#e066ff",pt="rgba(224, 102, 255, 0.7)",Re=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(224, 102, 255, 0.25)",color:"#e066ff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"🎂 ДН"})):v&&(Ne="#ffb36c",pt="rgba(255, 179, 108, 0.7)",Re=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 179, 108, 0.25)",color:"#ffb36c",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"🌅 Вихідний"})),(0,e.jsxs)("div",{style:{flex:"0 0 125px",background:z?r?"rgba(20, 20, 26, 0.85)":"rgba(230, 230, 235, 0.85)":r?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:z?"1px dashed rgba(140, 140, 140, 0.4)":`2px solid ${pt}`,borderRadius:"14px",padding:"12px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",textAlign:"center",color:r?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.12)",filter:z?"grayscale(85%)":"none",opacity:z?.75:1,transition:"all 0.2s ease"},children:[Re,(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"bold",color:Ne},children:p.day}),(0,e.jsx)("span",{style:{fontSize:"11px",opacity:.75},children:p.date})]}),(0,e.jsx)("div",{style:{fontSize:"28px",margin:"2px 0"},children:p.iconSymbol||p.iconPlaceholder||"🌤️"}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px",width:"100%"},children:[(0,e.jsxs)("div",{style:{background:"rgba(255, 179, 108, 0.15)",borderRadius:"6px",padding:"2px 4px",fontSize:"14px",fontWeight:"800",color:"#ff9d3b"},children:[st>0?`+${st}`:st,"°"]}),(0,e.jsxs)("div",{style:{background:"rgba(255, 20, 147, 0.12)",borderRadius:"6px",padding:"2px 4px",fontSize:"12px",fontWeight:"700",color:"#ff3399"},children:[Zt>0?`+${Zt}`:Zt,"°"]})]}),(0,e.jsx)("div",{style:{width:"85%",height:"1px",background:r?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,e.jsxs)("div",{style:{fontSize:"11px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:[(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${he}deg)`,fontSize:"13px"},children:"⬇"}),(0,e.jsxs)("span",{children:[p.wind_speed||"0"," м/с"]})]}),(0,e.jsxs)("div",{style:{fontSize:"10px",opacity:.75},children:[Ie," (",Math.round(he),"°)"]}),(p.wind_gusts_10m||p.wind_gusts)&&parseFloat(p.wind_gusts_10m||p.wind_gusts)>0&&(0,e.jsxs)("div",{style:{fontSize:"9px",color:"#ff9900",fontWeight:"600",marginTop:"1px"},children:["Пориви: ",p.wind_gusts_10m||p.wind_gusts,"м/с"]})]})]},O)})})})};return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsx)(yu,{$isMain:n.isMain,$isDarkMode:r,children:(0,e.jsxs)(ju,{$isDarkMode:r,onMouseEnter:()=>Zn(!0),onMouseLeave:()=>Zn(!1),children:[(0,e.jsxs)(Su,{$image:jt||n.cityImage,children:[(0,e.jsxs)(wu,{$isMain:n.isMain,style:{position:"relative",zIndex:10,background:r?"#222":"#444",borderRadius:"8px 8px 0 0"},children:[(0,e.jsxs)("div",{children:[W?(0,e.jsxs)("div",{style:{gap:"2px"},children:[(0,e.jsx)("input",{type:"text",value:N,onChange:d=>_(d.target.value),autoFocus:!0,style:{padding:"2px 5px",fontSize:"14px",borderRadius:"4px",border:"1px solid #ff6a00",background:r?"#333":"#fff",color:r?"#fff":"#000"}}),(0,e.jsx)("button",{onClick:bn,style:{background:"green",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"2px 8px"},children:"✓"}),(0,e.jsx)("button",{onClick:()=>U(!1),style:{background:"red",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"2px 4px"},children:"✕"})]}):(0,e.jsxs)("h3",{style:{display:"flex",alignItems:"center",gap:"8px",margin:0},children:[(0,e.jsxs)("span",{style:{color:"#ffb36c",fontWeight:700},children:["#",f]}),(0,e.jsx)("span",{children:n.locationName})]}),(0,e.jsxs)("p",{style:{fontSize:"10px",color:"#fcfcfc"},children:["Широта: ",n.lat?.toFixed(2),", Довгота: ",n.lon?.toFixed(2)]})]}),(0,e.jsxs)(vu,{style:{position:"relative"},children:[(0,e.jsx)(Qn,{content:"Налаштування картки",isDarkMode:r,children:(0,e.jsx)("button",{ref:d=>{n.isMain&&k&&k("weatherGear",d)},onClick:()=>{window.dispatchEvent(new CustomEvent("domino-weather-gear-clicked")),B?be():ae(!0)},"aria-label":"Налаштування картки",style:{fontSize:"28px",padding:"5px",display:"inline-flex",alignItems:"center",gap:"4px"},children:(0,e.jsx)(ys,{size:28})})}),(B||ue)&&(0,e.jsxs)(Pu,{$isDarkMode:r,$isClosing:ue,children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",padding:"2px 5px 0 0"},children:(0,e.jsx)(Qn,{content:"Закрити меню",isDarkMode:r,children:(0,e.jsx)("button",{onClick:be,style:{background:"transparent",border:"none",color:r?"#ffb36c":"#333",fontSize:"20px",cursor:"pointer",fontWeight:"900",padding:"4px",lineHeight:1},"aria-label":"Закрити меню",children:"✕"})})}),!W&&(0,e.jsxs)("button",{onClick:()=>{U(!0),be()},style:{textAlign:"left",padding:"0px 0px 10px 10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Zd,{size:16})," Змінити назву"]}),(0,e.jsxs)("button",{onClick:()=>{bt(!0),be()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Vd,{size:16})," Змінити фон"]}),(0,e.jsxs)("button",{onClick:()=>{tn(),be()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(ci,{size:16})," ",fe?"Вимкнути ШІ":"Увімкнути ШІ"]}),(0,e.jsxs)("button",{onClick:()=>{A(!0),be()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(ii,{})," Встановити дати"]}),(0,e.jsxs)("button",{onClick:()=>{w(jt||n.cityImage)},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(qa,{size:16})," Детальна погода"]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px",borderBottom:"1px solid #444"},children:[(0,e.jsx)("button",{disabled:f===0,onClick:()=>{be(),D(n.id,-1)},style:{flex:1,background:"transparent",color:f===0?"grey":r?"#fff":"#000",fontSize:"13px",cursor:f===0?"default":"pointer"},children:"Зробити вище картку"}),(0,e.jsx)("button",{disabled:f===x-1,onClick:()=>{be(),D(n.id,1)},style:{flex:1,background:"transparent",color:f===x-1?"grey":r?"#fff":"#000",fontSize:"13px",cursor:f===x-1?"default":"pointer"},children:"Зробити нижче картку"})]}),n.isMain?(0,e.jsxs)("button",{onClick:Gn,style:{textAlign:"left",padding:"10px",background:"transparent",color:c?r?"#fff":"#000":"#b300ad",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Pd,{size:14})," ",c?"GPS On":"GPS Off"]}):(0,e.jsxs)("button",{onClick:()=>{h(n.id)},style:{textAlign:"left",padding:"10px",background:"transparent",color:"red",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(hs,{size:14})," Видалити"]}),(0,e.jsxs)("button",{onClick:()=>{be(),Rt&&window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`weather-${n.id}`,type:"weather",title:n.locationName,details:`Місто: ${n.locationName}. Координати: ${n.lat?.toFixed(2)}, ${n.lon?.toFixed(2)}. Температура: ${n.current?.temp}°C, відчувається: ${n.current?.feels_like}°C. Вітер: ${n.current?.wind_speed} м/с. Вологість: ${n.current?.humidity}%. Тиск: ${n.current?.pressure} гПа.`}}))},style:{textAlign:"left",padding:"10px",background:Rt?"linear-gradient(135deg, #5c1d3c, #62123d)":"rgba(120,120,120,0.3)",color:"#fff",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px",cursor:Rt?"pointer":"default"},children:[(0,e.jsx)(ms,{size:16})," Прикріпити до ШІ"]})]})]})]}),(0,e.jsx)(gu,{customDays:R,cardId:n.id}),(0,e.jsx)(Au,{children:[{key:"current",label:"Зараз"},{key:"hourly",label:"Годинна"},{key:"daily",label:"Місячна"},{key:"ai",label:"ШІ"}].map(d=>(0,e.jsx)("button",{onClick:()=>d.key==="ai"?$n():We(d.key),style:{padding:"4px 2px",border:"none",borderBottom:ke===d.key?"2px solid #00eeff":"2px solid transparent",background:"transparent",color:ke===d.key?"#00eeff":r?"#aaa":"#555",fontWeight:ke===d.key?700:400,fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},children:d.label},d.key))}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[ke==="current"&&(0,e.jsx)(ku,{style:{borderRadius:0},children:(0,e.jsx)(Iu,{style:{position:"relative",borderRadius:0,padding:"2px",background:"rgba(0, 0, 0, 0.43)"},children:(0,e.jsxs)(Tu,{children:[(0,e.jsxs)(En,{"aria-label":n.current.iconPlaceholder,children:[(0,e.jsx)(Fn,{$size:"32px",$lh:"1",children:n.current.iconSymbol||"🌤️"}),(0,e.jsx)(Tn,{$size:"11px",$lh:"1.2",children:(n.current.iconPlaceholder||"").replace(n.current.iconSymbol||"","").trim()||"Мінлива хмарність"})]}),(0,e.jsxs)(En,{"aria-label":"Температура / Відчувається як",children:[(0,e.jsx)(Fn,{$color:parseFloat(n.current.temp)<5?"#4da6ff":parseFloat(n.current.temp)>25?"#ff4d4d":"inherit",children:parseFloat(n.current.temp)<5?(0,e.jsx)(xd,{}):parseFloat(n.current.temp)>25?(0,e.jsx)(Xd,{}):(0,e.jsx)($d,{})}),(0,e.jsxs)(Tn,{$mt:"0px",children:[n.current.temp,(0,e.jsxs)(Mr,{$size:"9px",children:["Відчувається: ",n.current.feels_like]})]})]}),(0,e.jsxs)(En,{"aria-label":"Відносна вологість",children:[(0,e.jsx)(Fn,{$color:parseFloat(n.current.humidity)>70?"#4da6ff":"inherit",children:parseFloat(n.current.humidity)>70?(0,e.jsx)(rc,{}):(0,e.jsx)(Gd,{})}),(0,e.jsxs)(Tn,{$mt:"10px",children:["Вологість: ",n.current.humidity??"—"]})]}),(0,e.jsxs)(En,{"aria-label":`Вітер: ${n.current.wind_speed}, Напрямок: ${n.current.wind_direction_10m}° (${Ra(n.current.wind_direction_10m)}), Пориви: ${n.current.wind_gusts_10m} м/с`,children:[(0,e.jsx)(Fn,{$size:"28px",$rotate:Math.round((n.current.wind_direction_10m||0)/45)*45%360,children:"⬇"}),(0,e.jsxs)(Tn,{$mt:"-5px",children:["Швидкість вітру: ",n.current.wind_speed,(0,e.jsxs)(Mr,{children:[n.current.wind_direction_10m,"° ",Ra(n.current.wind_direction_10m)]}),(0,e.jsxs)(Mr,{$weight:"bold",$opacity:.9,style:{color:s?"#ff4d4d":"inherit"},children:["Пориви: ",n.current.wind_gusts_10m,"м/с"]})]})]}),(0,e.jsx)(Qn,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsxs)(En,{"aria-label":"Точка роси (температура, при якій утворюється роса)",children:[(0,e.jsx)(Fn,{children:(0,e.jsx)(pd,{})}),(0,e.jsxs)(Tn,{children:["Точка роси: ",n.current.dew_point_2m,"°C"]})]})}),(0,e.jsxs)(En,{"aria-label":"Атмосферний тиск",$pad:"10px",children:[(0,e.jsx)(Fn,{$color:parseFloat(n.current.pressure)<1e3?"#4da6ff":parseFloat(n.current.pressure)>1020?"#ff4d4d":"inherit",children:(0,e.jsx)(Sd,{})}),(0,e.jsxs)(Tn,{children:["Атмосферний тиск: ",n.current.pressure]})]}),(0,e.jsxs)(En,{"aria-label":"Хмарність",children:[(0,e.jsx)(Fn,{children:parseFloat(n.current.cloud_cover)<50?(0,e.jsx)(sc,{}):(0,e.jsx)(rd,{})}),(0,e.jsxs)(Tn,{$size:"11px",children:["Хмарність: ",n.current.cloud_cover,"%"]})]}),(0,e.jsxs)(En,{"aria-label":"Видимість",$pad:"0px",children:[(0,e.jsx)(Fn,{$opacity:Math.min(1,Math.max(.3,(n.current.visibility||1e4)/1e4)),$color:(n.current.visibility||1e4)<2e3?"#ff4d4d":"inherit",children:(0,e.jsx)(yd,{})}),(0,e.jsxs)(Tn,{$size:"10px",children:["Видимість:",n.current.visibility!==void 0?(n.current.visibility/1e3).toFixed(1):"—","км"]})]}),(0,e.jsxs)(En,{"aria-label":"УФ-індекс / Сонячна радіація",$pad:"10px",children:[(0,e.jsx)(Fn,{$color:(n.current.uv_index||0)>5?"#ff4d4d":(n.current.uv_index||0)>2?"#ffd700":"inherit",children:(0,e.jsx)(td,{})}),(0,e.jsxs)(Tn,{$size:"10px",children:["УФ-індекс: ",n.current.uv_index??0]})]})]})})}),ke==="hourly"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"8px"},children:[(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Годинний прогноз"}),(0,e.jsxs)(bi,{$isDarkMode:r,children:[(0,e.jsxs)(tr,{$active:Ee==="charts",$isDarkMode:r,onClick:()=>Ve("charts"),children:[(0,e.jsx)(qa,{size:14})," Графіки"]}),(0,e.jsx)(tr,{$active:Ee==="table",$isDarkMode:r,onClick:()=>Ve("table"),children:"📋 Таблиця"})]})]}),cn.length>1&&(0,e.jsx)("div",{style:{marginTop:"8px",marginBottom:"8px"},children:(0,e.jsx)("select",{value:te,onChange:d=>de(Number(d.target.value)),style:{width:"100%",maxWidth:"260px",padding:"8px 10px",borderRadius:"8px",border:r?"1px solid #555":"1px solid #ccc",background:r?"#1f1f1f":"#fff",color:r?"#fff":"#000",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:cn.map((d,p)=>(0,e.jsx)("option",{value:p,children:d.title||d.label},d.label))})}),Ee==="charts"?Qe&&Qe.length>0&&(0,e.jsxs)("div",{ref:ln,style:{position:"relative",width:"100%",minHeight:Le==="hourly"?ye?`${window.innerHeight}px`:"100vh":void 0,padding:Le==="hourly"?"16px":void 0,boxSizing:"border-box",background:Le==="hourly"?r?"#000":"#f5f5f5":"transparent"},children:[qn("hourly",ln,[{key:"day",label:"Температура",color:"#ffb36c"},{key:"wind",label:"Вітер",color:"#0099ff"}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(mi,{children:(0,e.jsx)(Sa,{$width:Le==="hourly"?`max(100%, ${Gt}px)`:Gt,$height:Le==="hourly"?ye?`${window.innerHeight-90}px`:"calc(100vh - 90px)":ce,children:(0,e.jsx)(ja,{ref:ot,options:Pt,data:un},`hourly-${Le||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:Le==="hourly"?"none":"block"},children:(0,e.jsx)(Sa,{$width:Gt,$height:ce,children:(0,e.jsx)(ja,{options:{...Pt,plugins:{...Pt.plugins,tooltip:{enabled:!1}}},data:un})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:Le==="hourly"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:`${Gt}px`,height:ce},children:(0,e.jsx)(Sa,{$width:Gt,$height:ce,children:(0,e.jsx)(ja,{options:{...Pt,plugins:{...Pt.plugins,tooltip:{enabled:!1}}},data:un})})})})]})]}):ma()]}),ke==="daily"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"8px"},children:[(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Прогноз на 16 днів (включаючи 2 минулі дні)"}),(0,e.jsxs)(bi,{$isDarkMode:r,children:[(0,e.jsxs)(tr,{$active:ze==="charts",$isDarkMode:r,onClick:()=>nt("charts"),children:[(0,e.jsx)(qa,{size:14})," Графіки"]}),(0,e.jsx)(tr,{$active:ze==="table",$isDarkMode:r,onClick:()=>nt("table"),children:"📋 Таблиця"})]})]}),ze==="charts"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"6px 8px",background:r?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(4px)",borderBottom:"1px solid #ffb36c",zIndex:100},children:[en([{key:"day",label:"День",color:"#ffb36c"},{key:"night",label:"Ніч",color:"#ff1493"},{key:"wind",label:"Вітер",color:"#0099ff"}]),Wn("daily",Fe)]}),(0,e.jsxs)("div",{ref:Fe,style:{position:"relative",width:"100%",minHeight:Le==="daily"?ye?`${window.innerHeight}px`:"100vh":void 0,padding:Le==="daily"?"16px":void 0,boxSizing:"border-box",background:Le==="daily"?r?"#000":"#f5f5f5":"transparent"},children:[Le==="daily"&&qn("daily",Fe,[{key:"day",label:"День",color:"#ffb36c"},{key:"night",label:"Ніч",color:"#ff1493"},{key:"wind",label:"Вітер",color:"#0099ff"}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(mi,{ref:Dt,children:(0,e.jsx)(Sa,{$width:Le==="daily"?"max(100%, 900px)":900,$height:Le==="daily"?ye?`${window.innerHeight-120}px`:"calc(100vh - 120px)":ce,children:(0,e.jsx)(ja,{ref:Kt,options:pn,data:yn},`daily-${Le||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:Le==="daily"?"none":"block"},children:(0,e.jsx)(Sa,{$width:1300,$height:ce,children:(0,e.jsx)(ja,{options:{...pn,plugins:{...pn.plugins,tooltip:{enabled:!1}}},data:yn})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:Le==="daily"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"1300px",height:ce},children:(0,e.jsx)(Sa,{$width:1300,$height:ce,children:(0,e.jsx)(ja,{options:{...pn,plugins:{...pn.plugins,tooltip:{enabled:!1}}},data:yn})})})})]})]})]}):ba()]}),ke==="ai"&&(0,e.jsxs)(zu,{$isDarkMode:r,layout:!0,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[(0,e.jsx)("span",{className:"ai-header-text",style:{fontWeight:800,color:"#faf7fd",fontSize:"12px",letterSpacing:"1px"},children:"Прогноз ШІ (Gemini)"}),(0,e.jsx)("button",{className:"ai-edit-btn",onClick:()=>kt(!vt),style:{background:"rgba(138, 43, 226, 0.2)",border:"1px solid rgba(138, 43, 226, 0.6)",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"11px",color:"#ffffff",padding:"4px 8px",transition:"all 0.2s"},children:vt?"✕ Сховати":"✏️ Редагувати умову промпту"})]}),vt?(0,e.jsxs)(Eu,{$isDarkMode:r,children:[(0,e.jsx)("label",{style:{fontSize:"11px",fontWeight:"bold"},children:"Своя інструкція до прогнозу:"}),(0,e.jsx)(Fu,{$isDarkMode:r,value:Ce,onChange:d=>ct(d.target.value),placeholder:"Наприклад: Дай поради для рибалки на основі вітру та тиску..."}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"10px",marginTop:"6px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsx)("span",{style:{fontSize:"10px",opacity:.8,fontWeight:"600"},children:"Обсяг:"}),(0,e.jsxs)("select",{value:xe,onChange:d=>He(d.target.value),style:{fontSize:"12px",padding:"6px 10px",borderRadius:"6px",background:r?"#252535":"#fff",color:r?"#fff":"#000",border:"1px solid rgba(138, 43, 226, 0.5)",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"concise",children:"Стисло"}),(0,e.jsx)("option",{value:"extensive",children:"Обширно"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsx)("span",{style:{fontSize:"10px",opacity:.8,fontWeight:"600"},children:"Стиль:"}),(0,e.jsxs)("select",{value:$e,onChange:d=>wt(d.target.value),style:{fontSize:"12px",padding:"6px 10px",borderRadius:"6px",background:r?"#252535":"#fff",color:r?"#fff":"#000",border:"1px solid rgba(138, 43, 226, 0.5)",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"friendly",children:"Дружній"}),(0,e.jsx)("option",{value:"scientific",children:"Науковий"}),(0,e.jsx)("option",{value:"sarcastic",children:"Саркастичний"})]})]})]}),(0,e.jsx)("button",{onClick:async()=>{const d=Ce.trim()!==Ze.trim(),p=Date.now(),O=864e5;if(d&&_e&&p-_e<O){const z=Math.ceil((O-(p-_e))/36e5);alert(`Промпт можна змінити знову через ${z} год.`);return}await u.default.setItem(`ai_custom_prompt_${n.id}`,Ce),await u.default.setItem(`ai_response_length_${n.id}`,xe),await u.default.setItem(`ai_style_${n.id}`,$e),d&&(await u.default.setItem(`ai_custom_prompt_changed_at_${n.id}`,p),xt(Ce),ht(p)),kt(!1),Bt()},style:{background:"linear-gradient(135deg, #8a2be2, #a855f7)",color:"white",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"12px",cursor:"pointer",fontWeight:"bold",boxShadow:"0 3px 10px rgba(138, 43, 226, 0.35)",marginTop:"auto"},children:"💾 Зберегти та оновити"})]})]}):se?(0,e.jsx)("div",{style:{color:"#b362ff",padding:"10px 0",fontSize:"12px"},children:"⏳ Генерація прогнозу ШІ..."}):q?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(jn.div,{layout:!0,transition:{duration:.3},children:(0,e.jsx)(Lu,{ref:Et,$isExpanded:!1,children:q})}),T&&(0,e.jsx)(Ru,{onClick:()=>It(!0),children:"Читати далі..."})]}):(0,e.jsx)("div",{style:{color:r?"#aaa":"#555",padding:"8px 0",fontSize:"12px"},children:'ШІ-аналіз недоступний. Ви можете відредагувати умову промпту вище та натиснути "Зберегти та оновити".'})]})]})]}),(0,e.jsxs)(Cu,{children:[(0,e.jsx)(er,{$active:ke==="current",$bgImg:jt||n.cityImage,onClick:()=>We("current"),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px"},children:n.current?.iconSymbol||"🌤️"}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsxs)(Xa,{$active:ke==="current",children:["Зараз: ",n.current?.temp]}),(0,e.jsxs)(Qa,{$active:ke==="current",children:["Відчувається: ",n.current.feels_like]})]})]})}),(0,e.jsx)(er,{$active:ke==="hourly",$bgImg:$c,onClick:()=>We("hourly"),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#ffb36c"},children:(0,e.jsx)(qa,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(Xa,{$active:ke==="hourly",children:"Годинна(24г)"}),(0,e.jsx)(Qa,{$active:ke==="hourly",children:"Погодинна на 7 днів"})]})]})}),(0,e.jsx)(er,{$active:ke==="daily",onClick:()=>We("daily"),$bgImg:zc,children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#ff1493"},children:(0,e.jsx)(ii,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(Xa,{$active:ke==="daily",children:"Прогноз на 16 днів"}),(0,e.jsx)(Qa,{$active:ke==="daily",children:"Бундючий графік"})]})]})}),(0,e.jsx)(er,{$active:ke==="ai",$bgImg:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",onClick:()=>$n(),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#a855f7"},children:(0,e.jsx)(ci,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(Xa,{$active:ke==="ai",children:"ШІ Прогноз"}),(0,e.jsx)(Qa,{$active:ke==="ai",children:"Gemini AI"})]})]})})]})]})}),rt&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.75)",zIndex:4e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>It(!1),children:(0,e.jsxs)("div",{style:{background:r?"#1a1a2e":"#fff",border:"1px solid rgba(138,43,226,0.5)",borderRadius:"12px",padding:"20px",width:"90%",maxWidth:"480px",maxHeight:"80vh",overflowY:"auto",color:r?"#efefff":"#222",fontSize:"13px",lineHeight:1.6,whiteSpace:"pre-line"},onClick:d=>d.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[(0,e.jsx)("span",{style:{fontWeight:800,color:"#b362ff",fontSize:"13px",letterSpacing:"1px"},children:"Прогноз ШІ — повний текст"}),(0,e.jsx)("button",{onClick:()=>It(!1),style:{background:"none",border:"none",color:"#b362ff",fontSize:"18px",cursor:"pointer"},children:"✕"})]}),q]})}),ut&&(0,e.jsx)(uu,{isDarkMode:r,currentCardId:n.id,onClose:()=>A(!1)}),ie&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",zIndex:3e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>Ke(!1),children:(0,e.jsxs)("div",{ref:d=>{n.isMain&&k&&k("weatherModal",d)},style:{background:r?"#222":"#fff",borderRadius:"10px",padding:"20px",width:"90%",maxWidth:"350px",color:r?"#fff":"#000"},onClick:d=>d.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:"0 0 15px 0"},children:"Налаштування картки"}),(0,e.jsx)("p",{style:{fontSize:"13px",color:r?"#aaa":"#555",marginBottom:"15px"},children:"Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ."}),(0,e.jsx)("button",{onClick:()=>Ke(!1),style:{width:"100%",padding:"10px",background:"#ffb36c",color:"#000",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Закрити"})]})}),Xe&&(0,e.jsx)(Mu,{onClick:()=>bt(!1),children:(0,e.jsxs)(Du,{onClick:d=>d.stopPropagation(),children:[(0,e.jsxs)("h2",{style:{margin:0,color:"#ffb36c"},children:["Зміна фону: ",n.locationName]}),(0,e.jsxs)($u,{children:[(0,e.jsxs)(xi,{$active:at==="wiki",onClick:()=>hn("wiki"),children:[(0,e.jsx)(xo,{children:"Вікіпедія"}),(0,e.jsx)(hi,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png"})]}),Pa.filter(d=>!d.src.endsWith(".mp4")).map((d,p)=>(0,e.jsxs)(xi,{$active:at===d.src,onClick:()=>hn(d.src),children:[d.author&&(0,e.jsxs)(wl,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:d.author}),d.source&&(0,e.jsx)("div",{children:d.source})]}),(0,e.jsx)(xo,{children:d.name}),(0,e.jsx)(hi,{src:d.src})]},p))]}),(0,e.jsx)("button",{onClick:()=>bt(!1),style:{padding:"8px",background:"#ffb36c",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",marginTop:"10px"},children:"Закрити"})]})})]})},Ou=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${t=>t.$isDarkMode?`url(${Oa}) center/cover no-repeat, linear-gradient(135deg, #000000 0%, #000000 100%)`:`url(${Oa}) center/cover no-repeat, linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`};
  color: ${t=>t.$isDarkMode?"#ffffff":"#333333"};
  font-family: var(--font-family, "Inter", sans-serif);
  text-align: center;
  padding: 20px;
  overflow: hidden;
`,Vu=i(jn.h1)`
  font-size: 8rem;
  margin: 0;
  font-weight: 900;
  background: ${t=>t.$isDarkMode?"linear-gradient(90deg, #ffb36c, #94fffa)":"linear-gradient(90deg, #ff7e5f, #feb47b)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`,Bu=i(jn.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 750px;
  background: #0000009b;
  margin-bottom: 40px;
  line-height: 1.5;
`,_u=i(Nd)`
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${t=>t.$isDarkMode?"#000":"#fff"};
  background: ${t=>t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid ${t=>t.$isDarkMode?"transparent":"#333"};
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${t=>t.$isDarkMode?"#ffa149":"#555"};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`,Hu=({isDarkMode:t=!0})=>(0,e.jsxs)(Ou,{$isDarkMode:t,children:[(0,e.jsx)(Vu,{$isDarkMode:t,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:"404"}),(0,e.jsx)(Bu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:"Уведіть правильну назву сторінки! Треба було Доміно поставити на фото, чи Ніцерона. А хоча воно ніби наказує що ти маєш не залишатися тут довго."}),(0,e.jsx)(jn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,e.jsx)(_u,{to:"/",$isDarkMode:t,children:"Повернутися на головну"})})]}),Uu=je`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`,Ku=je`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`,Wu=je`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`,qu=je`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`,Gu=i(jn.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  text-align: center;
  overflow: hidden;
  font-family: var(--font-family, "Inter", sans-serif);
  background:
    url(${Oa}) center / cover no-repeat,
    linear-gradient(135deg, #000 0%, #0a0a0a 100%);
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.15) 3px,
      rgba(0, 0, 0, 0.15) 4px
    );
    animation: ${Uu} 8s linear infinite;
    pointer-events: none;
  }
`,Ju=i(jn.h1)`
  font-weight: 900;
  margin: 6px;
  font-size: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${Wu} 6s infinite;
`,Yu=i(jn.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 4px;
  max-width: 640px;
  width: 100%;
  box-shadow:
    0 0 0 1px rgba(148, 255, 250, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6);
`,Zu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`,Xu=i.p`
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  color: rgba(0, 253, 248, 1);
  letter-spacing: 0.12em;
`,Qu=i.p`
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.65;
  margin: 3px;
`,ep=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
`,tp=i.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  box-shadow: 0 0 8px ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  animation: ${Ku} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`,np=i.span`
  font-size: 12px;
  color: rgb(255, 255, 255);
`,ap=i.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${qu} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,rp=({isDarkMode:t=!0,endTime:n=null,message:r=null})=>{const[c,l]=(0,a.useState)(null),[s,y]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!n)return;let f=null;if(typeof n.toMillis=="function"?f=n.toMillis():n.seconds?f=n.seconds*1e3:f=new Date(n).getTime(),isNaN(f))return;const x=()=>{const h=f-Date.now();if(h<=0){l(null),y(!0),setTimeout(()=>window.location.reload(),6e4);return}const P=Math.floor(h/36e5),D=Math.floor(h%36e5/6e4),M=Math.floor(h%6e4/1e3),$=[];P>0&&$.push(`${P}год`),$.push(`${String(D).padStart(2,"0")}хв`),$.push(`${String(M).padStart(2,"0")}с`),l($.join(" "))};x();const g=setInterval(x,1e3);return()=>clearInterval(g)},[n]),(0,e.jsx)(fr,{children:(0,e.jsx)(Gu,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},children:(0,e.jsxs)(Yu,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:.55,type:"spring",stiffness:120},children:[(0,e.jsx)(ap,{children:(0,e.jsx)("img",{src:Oa,alt:""})}),(0,e.jsx)(Ju,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:s?"Ми завершили оновлення!":"Технічне обслуговування"}),n&&(0,e.jsx)(Zu,{children:(0,e.jsxs)(Xu,{children:[s?"Перезавантаження через":"Залишилось часу",": ",s?"~1 хв":c??"Підраховуємо…"]})}),(0,e.jsxs)(Qu,{children:["Причина робіт: ",r??"Планове оновлення системи."]}),s&&(0,e.jsxs)(ep,{children:[(0,e.jsx)(tp,{$ok:!0}),(0,e.jsx)(np,{children:"Роботи завершено — перезавантаження…"})]})]})},"maintenance-overlay")})},vl=Wd({apiKey:"AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",authDomain:"stuxia-5b535.firebaseapp.com",projectId:"stuxia-5b535",storageBucket:"stuxia-5b535.firebasestorage.app",messagingSenderId:"801101038904",appId:"1:801101038904:web:70d01ab63f631b74acadcd"}),kn=oc(vl),yi=Bd(vl),Hh=new ec;function op(t){const n=Vn(kn,"config","global");return gd(n,r=>{if(!r.exists()){t({isMaintenanceMode:!1,endTime:null,message:null});return}const c=r.data();t({isMaintenanceMode:!!c.isMaintenanceMode,endTime:c.maintenanceEndTime??null,message:c.maintenanceMessage??null})},()=>{t({isMaintenanceMode:!1,endTime:null,message:null})})}var ho="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",ip="/assets/flame-D00vcfgc.webp",sp="/assets/humor-DlTxVxCE.mp4",lp="/assets/unity-F-cBWwIf.webp",dp="/assets/monody-DBysFOWl.webp",cp="/assets/hunger-Bja8eIKz.webp",up="/assets/dinofroz-Bw1EE6sM.mp3",pp="/assets/thefatrat-monody-Bn_jMkG9.mp3",fp="/assets/unity-Dfk4ENTo.mp3",gp="/assets/thefatrat-hunger-CL1g_1gU.mp3",xp="/assets/dragon-CPH8-885.mp3",hp="/assets/harmonic-japan-Dd6wyKZa.mp3",mp="/assets/electrodynamix-BOk9PXVN.mp3",bp="/assets/clubstep-C7imHHYw.mp3",yp="/assets/theoty-of-everything-ll-C8ndIrWQ.mp3",wp="/assets/theory-of-everyting-DW0SvZ3g.mp3",vp="/assets/deadlocked-VXA-1jpn.mp3",kp="/assets/mechanik-kindom-Ck3xg6-z.mp3",jp="/assets/no-no-no-Cs2QaRjF.webp",Sp="/assets/thefatrat-no-no-no-BmhHAhgN.mp3",Ta={faded:ml,dinofrozVideo:go,harmony:js,horse:Ss,theorytwo:Cs,fingerdash:Ts,humorVideo:sp,electrodynamix:As,deserttwo:Is,desertthree:Ms,desertfour:Ds,desertone:$s,unity:lp,mecha:zs,monody:dp,clubstep:Ls,turkeys:br,chess:Rs,turkeytwo:Es,turkeythree:Fs,turkeyfour:Ps,turkeyfive:Ns,turkeysix:Os,turkeysone:Vs,turkeyseven:Bs,asiumone:Kc,asiumtwo:_s,asiumthree:Hs,asiumfour:Us,asiumfive:Ks,asiumsix:Ws,asiumten:qs,asiumeleven:Gs,asiumseven:Js,swamptwo:Ys,swampthree:Zs,swampsix:Xs,swampseven:Qs,swampeight:el,swampnine:tl,theory:nl,deadlocked:al,horrortwo:rl,horrorthree:ol,horrorfour:il,horror:jo,horrorsix:sl,horroreight:ll,dinofrozone:So,dinofrozthree:dl,dinofrozfour:cl,dinofrozfive:ul,dinofrozsix:pl,dinofrozseven:fl,dinofrozeight:gl,dinofroztwo:Co,dinofroznine:xl,hunger:cp,mia:bl,dinofrozAudio:up,monodyAudio:pp,unityAudio:fp,hungerAudio:gp,dragonoraAudio:xp,harmonyAudio:hp,electrodynamixAudio:mp,clubstepAudio:bp,theorytwoAudio:yp,theoryAudio:wp,deadlockedAudio:vp,mechaAudio:kp,nonono:jp,nononoAudio:Sp},Uh=xr.map(t=>({...t,image:Ta[t.image]||t.image,audio:Ta[t.audio]||t.audio,video:Ta[t.video]||t.video,images:Array.isArray(t.images)?t.images.map(n=>Ta[n]||n):t.images,filters:Array.isArray(t.filters)?t.filters.map(n=>({...n,imageUrl:Ta[n.imageUrl]||n.imageUrl})):t.filters})),mo=[{id:"none",label:"Вимкнено"},{id:"grayscale",label:"Дальтонізм"},{id:"sepia",label:"Сепія"},{id:"invert",label:"Негатив"},{id:"matrix",label:"Матриця"},{id:"uv",label:"УФ-Лампа"},{id:"contrast",label:"Контраст"},{id:"saturate",label:"Насиченість"},{id:"blur",label:"Розмиття"},{id:"hue",label:"Веселка"},{id:"chaos",label:"Хаос"},{id:"ultrachaos",label:"Ультрахаос"}],kl=[{id:"cinema",label:"🎬 Кіно",config:{darkIntensity:15,filterType:"sepia",filterIntensity:20}},{id:"night",label:"🌙 Ніч",config:{darkIntensity:70,filterType:"none",filterIntensity:50}},{id:"retro",label:"📻 Ретро",config:{darkIntensity:5,filterType:"grayscale",filterIntensity:80}},{id:"acid",label:"🌈 Кислота",config:{darkIntensity:0,filterType:"hue",filterIntensity:60}}],$r={darkIntensity:0,filterType:"none",filterIntensity:50};if(typeof document<"u"){const t=document.createElement("style");t.id="visual-filters-animations",t.innerHTML=`
    @keyframes ultrachaos-anim {
      0% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }
      50% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }
      100% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }
    }
    @keyframes rainbow-anim {
      0% { filter: brightness(var(--v-bright)) hue-rotate(0deg); }
      100% { filter: brightness(var(--v-bright)) hue-rotate(360deg); }
    }
  `,document.getElementById(t.id)||document.head.appendChild(t)}var wi=t=>{if(!t)return;document.documentElement.style.transition="filter 0.4s ease-in-out";const n=100-(t.darkIntensity||0)*.6;let r=`brightness(${n}%)`;const{filterType:c,filterIntensity:l=50}=t;if(c==="ultrachaos"){const s=100+l*.6,y=100+l*2,f=100+l*1.6,x=100+l*5,g=l/50;document.documentElement.style.setProperty("--v-bright",`${n}%`),document.documentElement.style.setProperty("--v-contrast-min",`${s}%`),document.documentElement.style.setProperty("--v-contrast-max",`${y}%`),document.documentElement.style.setProperty("--v-saturate-min",`${f}%`),document.documentElement.style.setProperty("--v-saturate-max",`${x}%`),document.documentElement.style.setProperty("--v-blur-max",`${g}px`),document.documentElement.style.animation="ultrachaos-anim 4s infinite linear";return}if(c==="hue"){document.documentElement.style.setProperty("--v-bright",`${n}%`);const s=l>0?200/l:0;s>0?document.documentElement.style.animation=`rainbow-anim ${s}s infinite linear`:(document.documentElement.style.animation="none",document.documentElement.style.filter=`brightness(${n}%) hue-rotate(0deg)`);return}if(document.documentElement.style.animation="none",c==="grayscale")r+=` grayscale(${l}%)`;else if(c==="sepia")r+=` sepia(${l}%)`;else if(c==="invert"){const s=l-50;if(s>0)r+=` invert(${s*2}%)`;else if(s<0){const y=1+Math.abs(s)/50;r+=` contrast(${y*100}%) saturate(${y*100}%)`}}else c==="matrix"?r+=` hue-rotate(180deg) grayscale(${l}%)`:c==="uv"?r+=` hue-rotate(280deg) saturate(${100+l}%)`:c==="contrast"?r+=` contrast(${l*2}%)`:c==="saturate"?r+=` saturate(${l*2}%)`:c==="blur"?r+=` blur(${l/10}px)`:c==="hue"&&(r+=` hue-rotate(${l*3.6}deg)`);document.documentElement.style.filter=r},Cp=t=>{const[n,r]=(0,a.useState)($r),[c,l]=(0,a.useState)([]),s=t?.account?`visualConfig_${t.account}`:"visualConfig_guest",y=t?.account?`customPresets_${t.account}`:"customPresets_guest";(0,a.useEffect)(()=>{u.default.getItem(s).then(M=>{M&&r(M)}),u.default.getItem(y).then(M=>{l(M||[])})},[s,y]),(0,a.useEffect)(()=>{let M;if(n.filterType==="chaos"){const $=()=>{const C=mo.filter(V=>!["none","chaos","ultrachaos"].includes(V.id)),b=C[Math.floor(Math.random()*C.length)],w=Math.floor(Math.random()*80)+20;wi({...n,filterType:b.id,filterIntensity:w})};$(),M=setInterval($,Math.floor(Math.random()*2e3)+1e3)}else wi(n);return()=>clearInterval(M)},[n]);const f=(0,a.useCallback)(M=>{r($=>{const C=typeof M=="function"?M($):M;return u.default.setItem(s,C),C})},[s]),x=(0,a.useCallback)(()=>{f($r),u.default.setItem(s,$r)},[s,f]),g=(0,a.useCallback)(M=>{if(!M.trim())return;const $={id:`custom_${Date.now()}`,label:`✨ ${M}`,config:{...n}};l(C=>{const b=[...C,$];return u.default.setItem(y,b),b})},[y,n]),h=(0,a.useCallback)(M=>{l($=>{const C=$.filter(b=>b.id!==M);return u.default.setItem(y,C),C})},[y]),P=(0,a.useCallback)((M,$)=>{$.trim()&&l(C=>{const b=C.map(w=>w.id===M?{...w,label:`✨ ${$}`}:w);return u.default.setItem(y,b),b})},[y]),D=(0,a.useCallback)(M=>{l(M),u.default.setItem(y,M)},[y]);return{visualConfig:n,setVisualConfig:f,resetFilters:x,FILTERS:mo,PRESETS:kl,customPresets:c,saveCustomPreset:g,deleteCustomPreset:h,updateCustomPresetName:P,reorderCustomPresets:D}},jl=(0,a.createContext)(),To=()=>(0,a.useContext)(jl),Tp=t=>{if(!t||!(t instanceof Element))return"";const n=[];let r=t;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r!==document.body&&r!==document.documentElement;){let c=r.nodeName.toLowerCase();if(r.id){c+="#"+r.id,n.unshift(c);break}else{let l=r.previousSibling,s=1;for(;l;)l.nodeType===Node.ELEMENT_NODE&&l.nodeName===r.nodeName&&s++,l=l.previousSibling;c+=`:nth-of-type(${s})`}n.unshift(c),r=r.parentNode}return n.join(" > ")},Ap=({children:t,isDarkMode:n})=>{const[r,c]=(0,a.useState)(!1),[l,s]=(0,a.useState)(!1),[y,f]=(0,a.useState)({}),[x,g]=(0,a.useState)([]),[h,P]=(0,a.useState)(!1);(0,a.useEffect)(()=>{n?document.body.classList.add("decorator-dark-mode"):document.body.classList.remove("decorator-dark-mode")},[n]),(0,a.useEffect)(()=>{(async()=>{try{const w=await u.default.getItem("decorator_persistent");if(w!==null&&(s(w),w)){let V=await u.default.getItem("decorator_overrides");const k=await u.default.getItem("decorator_changelog");if(V){const R={};Object.keys(V).forEach(W=>{R[W]={};const U=V[W];U.light_default||U.light_hover||U.dark_default||U.dark_hover?R[W]=U:R[W].light_default={...U}}),f(R)}k&&g(k)}}catch(w){console.error("Error hydrating decorator state",w)}finally{P(!0)}})()},[]),(0,a.useEffect)(()=>{h&&(l?(u.default.setItem("decorator_overrides",y),u.default.setItem("decorator_changelog",x)):(u.default.removeItem("decorator_overrides"),u.default.removeItem("decorator_changelog")),u.default.setItem("decorator_persistent",l))},[y,x,l,h]),(0,a.useEffect)(()=>{let b=document.getElementById("decorator-styles");b||(b=document.createElement("style"),b.id="decorator-styles",document.head.appendChild(b));let w="";Object.entries(y).forEach(([V,k])=>{const R=V.includes(" > ")||V.includes("#")||V.includes(":")?V:`[data-decorator-id="${V}"]`;k.light_default&&Object.keys(k.light_default).length>0&&(w+=`body:not(.decorator-dark-mode) ${R} { `,Object.entries(k.light_default).forEach(([W,U])=>{w+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`),k.light_hover&&Object.keys(k.light_hover).length>0&&(w+=`body:not(.decorator-dark-mode) ${R}:hover { `,Object.entries(k.light_hover).forEach(([W,U])=>{w+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`),k.dark_default&&Object.keys(k.dark_default).length>0&&(w+=`body.decorator-dark-mode ${R} { `,Object.entries(k.dark_default).forEach(([W,U])=>{w+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`),k.dark_hover&&Object.keys(k.dark_hover).length>0&&(w+=`body.decorator-dark-mode ${R}:hover { `,Object.entries(k.dark_hover).forEach(([W,U])=>{w+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`)}),b.innerHTML=w},[y]);const D=(0,a.useCallback)((b,w,V,k,R,W="light_default")=>{f(U=>{const N=U[b]||{},_=N[W]||{};return{...U,[b]:{...N,[W]:{..._,[V]:R}}}}),g(U=>[...U,{id:Date.now()+"-"+Math.random().toString(36).slice(2,7),elementId:b,tagName:w,property:V,originalValue:k,newValue:R,mode:W,timestamp:new Date().toLocaleTimeString("uk-UA")}])},[]),M=(0,a.useCallback)(b=>{g(w=>{const V=w.find(k=>k.id===b);return V?(f(k=>{const R={...k[V.elementId]||{}},W=V.mode||"light_default",U={...R[W]||{}},N=w.filter(_=>_.elementId===V.elementId&&_.property===V.property&&(_.mode||"light_default")===W&&_.id!==b);if(N.length>0?U[V.property]=N[N.length-1].newValue:delete U[V.property],R[W]=U,Object.keys(U).length===0&&delete R[W],Object.keys(R).length===0){const _={...k};return delete _[V.elementId],_}return{...k,[V.elementId]:R}}),w.filter(k=>k.id!==b)):w})},[]),$=(0,a.useCallback)(()=>{f({}),g([]),document.querySelectorAll("[data-decorator-id]").forEach(b=>{b.removeAttribute("data-decorator-id")})},[]),C=(0,a.useCallback)(b=>y[b]||{},[y]);return(0,e.jsx)(jl.Provider,{value:{isDecoratorMode:r,setIsDecoratorMode:c,styleOverrides:y,changeLog:x,applyStyle:D,undoChange:M,resetAll:$,getOverridesForElement:C,isPersistent:l,setIsPersistent:s,isDarkMode:n},children:t})},zr=[{key:"hero",label:"Головна",path:"hero"},{key:"weather",label:"Погода",path:"weather"},{key:"map",label:"Кліматична мапа",path:"map"},{key:"aihelp",label:"Допомога ШІ",path:"aihelp"},{key:"fanart",label:"Друкарня",path:"fanart"}],Ip=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cec":"#fdff98ee"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Mp=je`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`,Dp=je`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`,$p=je`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,zp=je`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Lp=i.div`
  display: flex;
  margin-left: -5px;
  gap: 3px;
`,Rp=i.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  background: ${t=>t.$isUltra?"rgba(113, 0, 151, 0.05)":"rgba(255, 179, 108, 0.05)"};
  border: 1.5px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  padding: 5px 4px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.5s ease;
  text-align: left;

  &:hover {
    background: ${t=>t.$isUltra?"rgba(113, 0, 151, 0.15)":"rgba(255, 179, 108, 0.15)"};
    transform: translateX(5px);
    box-shadow: 0 4px 15px
      ${t=>t.$isUltra?"rgba(113, 0, 151, 0.2)":"rgba(255, 179, 108, 0.2)"};
  }
`,Ep=i.div`
  width: 32px;
  height: 32px;
  background: #1a1a1a;
  border: 1px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Fp=i.div`
  display: grid;
  align-items: center;
  flex-grow: 1;
`,nr=i.span`
  grid-area: 1/1;
  font-weight: 800;
  transition: opacity 0.5s ease-in-out;
  opacity: ${t=>t.$show?1:0};
  font-size: ${t=>t.$isSymbol?"20px":"16px"};

  ${t=>t.$variant==="rainbow"&&sn`
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7f00,
        #ffff00,
        #00ff00,
        #0000ff,
        #8b00ff
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}

  ${t=>t.$variant==="ultra"&&sn`
      background: linear-gradient(
        270deg,
        #ff7eb3,
        #ff758c,
        #7afcff,
        #feffb7,
        #58e2c2
      );
      background-size: 400% 400%;
      animation: ${zp} 3s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,vi=i.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px;
  margin-bottom: 4px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  }
      span {
      font-size: 23px;
      }
`,Lr=i.div`
  position: relative;
  width: 36px;
  height: 20px;
  background: ${t=>t.$active?"#ff005d":"#ccc"};
  border-radius: 20px;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${t=>t.$active?"18px":"2px"};
    transition: 0.3s;
  }
`,Pp=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: ${t=>t.$isRendered?"block":"none"};
  opacity: ${t=>t.$isOpen?1:0};
  transition: opacity 0.4s ease;
`,Np=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  background: ${t=>t.$isDarkMode?"#1a1a1a83":"#ffffff8a"};
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  z-index: 1001;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  display: ${t=>t.$isRendered?"block":"none"};
  animation: ${t=>t.$isOpen?Mp:Dp} 0.4s
    cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${t=>t.$isDarkMode?"rgba(255, 179, 108, 0.5)":"rgba(255, 0, 93, 0.5)"};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  scrollbar-width: thin;
  scrollbar-color: ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"}
    transparent;
`,Op=i.button`
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 10px;
    @media (min-width: 768px) {
      top: 5px;
  right: 10px;
  }
`,Vp=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Bp=i.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 50;
    background: ${t=>t.$isDarkMode?"#111":"#fff"};
    border-bottom: 2px solid ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"};
    margin-bottom: 3px;
  }
`,ki=i.button`
  flex: 1;
  padding: 2px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  background: ${t=>t.$active?t.$isDarkMode?"#ffb36c":"#ff005d":"transparent"};
  color: ${t=>t.$active?t.$isDarkMode?"#1a1a1a":"#fff":t.$isDarkMode?"#ffb36c":"#ff005d"};
  border-bottom: 3px solid ${t=>t.$active?t.$isDarkMode?"#ffb36c":"#ff005d":"transparent"};
`,ji=i.div`
  @media (max-width: 767px) {
    display: ${t=>t.$active?"block":"none"};
  }
  @media (min-width: 768px) {
    display: block;
  }
`,Si=i.h3`
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 2px solid #ff005d;
  padding-bottom: 5px;
  display: none;
    @media (min-width: 768px) {
    display: inline-block;
  }
`,_p=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ca=i.button`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 5px 6px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s ease;
  text-align: left;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  }

  span.icon {
    font-size: 20px;
  }
`,Hp=i.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 8px 5px;
  margin-bottom: 8px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
`,Up=i.button`
  background: transparent;
  border: none;
  text-align: left;
  color: ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"};
  font-size: 16px;
  font-weight: 600;
  flex-grow: 1;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`,Rr=i.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,ar=i.button`
  background: ${t=>t.$isDarkMode?"#333":"#eee"};
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ccc"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  border-radius: 6px;
  padding: 0px 10px;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  opacity: ${t=>t.disabled?.3:1};
  font-size: 14px;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: #ff005d;
    color: white;
    border-color: #ff005d;
  }
`,Kp=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 3px;
  margin-bottom: 5px;
`,rr=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#3e2723":t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`,Wp=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 5px;
`,qp=i.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`,Gp=i.input`
  flex: 1;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border: 1px solid #ffb36c;
  border-radius: 8px;
  padding: 6px 10px;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #888;
  }
`,Jp=i.button`
  background: #ffb36c;
  color: #3e2723;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffa04d;
  }
`,Ci=i.button`
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border: 1px solid #ffb36c;
  color: ${t=>t.$isDarkMode?"#ffb36c":"#333"};
  border-radius: 8px;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ffb36c;
    color: #3e2723;
  }
`,Yp=i.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  button:first-child {
    flex: 1;
  }
  animation: ${$p} 0.3s ease-out forwards;
`,Zp=i.button`
  background: transparent;
  border: none;
  color: #ffb36c;
  cursor: pointer;
  font-size: 14px;
  padding: 0 5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,Xp=i.button`
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
  &:hover {
    color: #ff1a1a;
    transform: scale(1.1);
  }
`,Qp=i.div`
  cursor: grab;
  color: #ffb36c;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`,e0=i.button`
  width: 100%;
  background: #8a3939;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ff1a1a;
  }
`,ea=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(Ip,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})},t0=({isOpen:t,onClose:n,isDarkMode:r,siteSections:c,resetSiteSections:l,moveSiteSection:s,sectionThemes:y,hiddenSections:f,onToggleSectionVisibility:x,onToggleSectionTheme:g,onResetSectionThemes:h,onToggleTheme:P,onOpenShop:D,onOpenVip:M,onOpenSettings:$,onOpenHelp:C,onOpenOtherOptions:b,showUltra:w,onOpenInfo:V,onLogout:k,isRoutingMode:R,setIsRoutingMode:W,currentPath:U,visualConfig:N,setVisualConfig:_,onResetFilters:ge,customPresets:ne=[],onSavePreset:q,onDeletePreset:Z,onUpdatePresetName:se,onReorderPresets:Se,loadingStrategy:fe,onSetLoadingStrategy:tt,isStickyBgMode:Ce,onToggleStickyBg:ct})=>{const{isDecoratorMode:xe,setIsDecoratorMode:He,changeLog:$e,undoChange:wt,resetAll:vt,isPersistent:kt,setIsPersistent:Ze}=To(),[xt,_e]=(0,a.useState)(!1),[ht,Tt]=(0,a.useState)(""),[Oe,T]=(0,a.useState)(null),[F,te]=(0,a.useState)(null),[de,Ee]=(0,a.useState)("nav"),Ve=bs(),ze=B=>{if(typeof window>"u")return"";const ae=B?`/${B}`.replace(/\/+/g,"/"):"/";return`${`${window.location.origin}${window.location.pathname}`.replace(/\/$/,"")}#${ae}`},nt=async(B,ae)=>{const ue=ze(ae||B);if(ue)try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(ue);else{const Be=document.createElement("input");Be.value=ue,document.body.appendChild(Be),Be.select(),document.execCommand("copy"),document.body.removeChild(Be)}te(B),window.setTimeout(()=>te(null),1500)}catch(Be){console.error("Не вдалося скопіювати посилання секції",Be)}},ce=(B,ae)=>{T(ae),B.dataTransfer.effectAllowed="move",B.currentTarget.style.opacity="0.5"},jt=B=>{B.currentTarget.style.opacity="1",T(null)},mt=(B,ae)=>{if(B.preventDefault(),Oe===null||Oe===ae)return;const ue=[...ne],[Be]=ue.splice(Oe,1);ue.splice(ae,0,Be),Se(ue)},at=B=>{_(ae=>({...ae,filterType:B}))},At=B=>{_(ae=>({...ae,darkIntensity:B}))},Xe=B=>{_(ae=>({...ae,filterIntensity:B}))};(0,a.useEffect)(()=>{if(t)_e(!0);else{const B=setTimeout(()=>_e(!1),400);return()=>clearTimeout(B)}},[t]);const bt=(B,ae)=>{if(n(),R)Ve("/"+ae);else{const ue=document.getElementById(B);ue?ue.scrollIntoView({behavior:"smooth",block:"start"}):B==="hero"&&window.scrollTo({top:0,behavior:"smooth"})}};return xt?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Pp,{$isOpen:t,$isRendered:xt,onClick:n,"data-decorator-ignore":"true"}),(0,e.jsxs)(Np,{$isOpen:t,$isRendered:xt,$isDarkMode:r,"data-decorator-ignore":"true",children:[(0,e.jsx)(Op,{onClick:n,$isDarkMode:r,children:"✕"}),(0,e.jsxs)(Bp,{$isDarkMode:r,children:[(0,e.jsx)(ki,{$active:de==="nav",$isDarkMode:r,onClick:()=>Ee("nav"),children:"Навігація та порядок"}),(0,e.jsx)(ki,{$active:de==="controls",$isDarkMode:r,onClick:()=>Ee("controls"),children:"Керування"})]}),(0,e.jsxs)(Vp,{children:[(0,e.jsxs)(ji,{$active:de==="nav",children:[(0,e.jsx)(Si,{children:"Навігація та порядок"}),c&&c.map((B,ae)=>{const ue=ze(B.path||B.key);return(0,e.jsxs)(Hp,{$isDarkMode:r,children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)(Up,{$isDarkMode:r,onClick:()=>bt(B.key,B.path),children:B.label}),(0,e.jsx)(Rr,{children:(0,e.jsx)(ea,{content:f?.includes(B.key)?"Показати секцію":"Приховати секцію",isDarkMode:r,children:(0,e.jsx)(ar,{style:{padding:"4px 10px"},$isDarkMode:r,onClick:()=>x?.(B.key),"aria-label":f?.includes(B.key)?"Показати секцію":"Приховати секцію",disabled:!f?.includes(B.key)&&c.length-(f?.length||0)<=2,children:f?.includes(B.key)?(0,e.jsx)(Ud,{}):(0,e.jsx)(kd,{})})})}),(0,e.jsx)(Rr,{children:(0,e.jsx)(ea,{content:"Змінити тему секції",isDarkMode:r,children:(0,e.jsx)(ar,{style:{padding:"4px 10px"},$isDarkMode:r,onClick:()=>g?.(B.key),"aria-label":"Змінити тему секції",children:y?.[B.key]??r?(0,e.jsx)(Da,{}):(0,e.jsx)(Ma,{})})})}),B.key!=="hero"&&(0,e.jsxs)(Rr,{children:[(0,e.jsx)(ea,{content:"Підняти секцію",isDarkMode:r,children:(0,e.jsx)(ar,{$isDarkMode:r,disabled:ae<=1,onClick:()=>s(ae,-1),"aria-label":"Підняти секцію",children:"▲"})}),(0,e.jsx)(ea,{content:"Опустити секцію",isDarkMode:r,children:(0,e.jsx)(ar,{$isDarkMode:r,disabled:ae===c.length-1,onClick:()=>s(ae,1),"aria-label":"Опустити секцію",children:"▼"})})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px",width:"100%"},children:[(0,e.jsx)("span",{style:{fontSize:"11px",color:R?"#8a8a8a":r?"#ffb36c":"#ff005d",wordBreak:"break-all",flex:1,minWidth:0},title:ue,children:ue}),(0,e.jsx)("button",{type:"button",onClick:()=>nt(B.key,B.path),style:{border:"none",borderRadius:"6px",padding:"4px",background:r?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)",color:r?"#fff":"#333",cursor:"pointer",fontSize:"11px",fontWeight:"600"},children:F===B.key?"✓ Скопійовано":"Копіювати посилання"})]})]},B.key)}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)("button",{onClick:h,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:r?"#333":"#eee",color:r?"#fff":"#333"},children:"Скинути теми"}),(0,e.jsx)("button",{onClick:l,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:"#990038",color:"white"},children:"Скинути порядок"})]}),f?.length>0&&(0,e.jsx)("div",{style:{marginTop:"10px",fontSize:"10px",color:r?"#fcfbfb":"#070707",fontStyle:"italic"},children:'Підказка: Приховані секції доступні через режим "Маршрутизації". Щоб залишити лише одну секцію, натисніть блок в якому зображено якір та є текст маршрутизація.'})]}),(0,e.jsxs)(ji,{$active:de==="controls",children:[(0,e.jsx)(Si,{children:"Керування"}),(0,e.jsxs)(_p,{children:[(0,e.jsx)("li",{style:{display:"none"},children:(0,e.jsxs)(Rp,{$isUltra:w,onClick:()=>{M(),n()},children:[(0,e.jsxs)(Ep,{$isUltra:w,children:[(0,e.jsx)(nr,{$show:!w,$variant:"rainbow",$isSymbol:!0,children:"+"}),(0,e.jsx)(nr,{$show:w,$variant:"ultra",$isSymbol:!0,children:"♔"})]}),(0,e.jsxs)(Fp,{children:[(0,e.jsx)(nr,{$show:!w,$variant:"rainbow",children:"Стихія+"}),(0,e.jsx)(nr,{$show:w,$variant:"ultra",children:"Стихія Ultra"})]}),(0,e.jsx)("span",{style:{fontSize:"12px",color:w?"#710097":"#ffb36c",fontWeight:"bold"},children:"➔"})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)(vi,{$isDarkMode:r,onClick:()=>W(!R),children:[(0,e.jsx)("span",{className:"icon",children:R?(0,e.jsx)(Ed,{}):(0,e.jsx)(Ld,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:R?"Маршрутизація":"Навігація"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:R?"Зміна URL":"Плавний скрол"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:R?"При натиску ввімкнеться ремим навігації":"При натиску ввімкнеться ремим маршрутизації"})]}),(0,e.jsx)(Lr,{$active:R})]})}),(0,e.jsxs)("li",{children:[(0,e.jsxs)(vi,{$isDarkMode:r,onClick:()=>He(!xe),children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(gs,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:"Режим Декоратора"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Редагування стилів сторінки"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Необхідні незначні знання CSS"})]}),(0,e.jsx)(Lr,{$active:xe})]}),xe&&(0,e.jsxs)("div",{style:{padding:"10px",background:r?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",borderRadius:"10px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Зберігати після перезавантаження:"}),(0,e.jsx)(Lr,{$active:kt,onClick:()=>Ze(!kt),style:{transform:"scale(0.8)",cursor:"pointer"}})]}),(0,e.jsxs)("div",{style:{fontSize:"12px",fontWeight:"bold",marginBottom:"10px",color:r?"#ffb36c":"#ff005d"},children:["Журнал змін (",$e.length,")"]}),$e.length>0?(0,e.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"5px"},children:$e.map(B=>{let ae="";return B.mode==="light_default"?ae="☀️ ":B.mode==="light_hover"?ae="☀️👆 ":B.mode==="dark_default"?ae="🌙 ":B.mode==="dark_hover"&&(ae="🌙👆 "),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px",background:r?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.5)",padding:"5px",borderRadius:"5px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{opacity:.8,marginRight:"4px"},children:ae}),(0,e.jsx)("span",{style:{color:"#ffb36c"},children:B.tagName})," ",B.property,":"," ",(0,e.jsx)("span",{style:{opacity:.7},children:B.originalValue||"none"})," ","➔ ",(0,e.jsx)("b",{children:B.newValue})]}),(0,e.jsx)("button",{onClick:()=>wt(B.id),style:{background:"#ff4d4d",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",padding:"2px 6px",fontSize:"10px",marginLeft:"5px"},children:"Відмінити"})]},B.id)})}):(0,e.jsx)("div",{style:{fontSize:"11px",opacity:.7,fontStyle:"italic"},children:"Змін ще немає"}),$e.length>0&&(0,e.jsx)("button",{onClick:vt,style:{width:"100%",background:"transparent",color:"#ff4d4d",border:"1px solid #ff4d4d",borderRadius:"5px",marginTop:"10px",padding:"5px",fontSize:"11px",cursor:"pointer"},children:"Скинути всі зміни"})]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d",marginBottom:"5px"},children:"Режим завантаження"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(ea,{content:"Завантажує все відразу при старті сайту",isDarkMode:r,children:(0,e.jsx)(rr,{$active:fe==="eager",$isDarkMode:r,onClick:()=>tt("eager"),"aria-label":"Завантажує все відразу при старті сайту",children:"Повний"})}),(0,e.jsx)(ea,{content:"Завантажує важкі модулі через 8 секунд",isDarkMode:r,children:(0,e.jsx)(rr,{$active:fe==="delayed",$isDarkMode:r,onClick:()=>tt("delayed"),"aria-label":"Завантажує важкі модулі через 8 секунд",children:"Оптимальний"})}),(0,e.jsx)(ea,{content:"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",isDarkMode:r,children:(0,e.jsx)(rr,{$active:fe==="lazy",$isDarkMode:r,onClick:()=>tt("lazy"),"aria-label":"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",children:"Економний"})})]})]})}),(0,e.jsxs)("li",{style:{display:"flex"},children:[(0,e.jsxs)(Ca,{$isDarkMode:r,onClick:P,children:["Змінити тему? ",(0,e.jsx)("span",{className:"icon",children:r?(0,e.jsx)(Ma,{}):(0,e.jsx)(Da,{})})]}),(0,e.jsxs)(Ca,{$isDarkMode:r,onClick:ct,style:{color:Ce?"#ff005d":void 0},children:[Ce?"Вимкнути":"Ввімкнути"," липкий фон?"]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Зменшення Яскравості"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:N.darkIntensity||0,onChange:B=>At(Number(B.target.value)),style:{width:"90%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[N.darkIntensity||0,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Фільтри"}),(0,e.jsx)(Kp,{$isDarkMode:r,children:mo.map(B=>(0,e.jsx)(rr,{$active:N.filterType===B.id,$isDarkMode:r,onClick:()=>at(B.id),children:B.label},B.id))})]})}),N.filterType!=="none"&&(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"⚡ Сила ефекту"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:N.filterIntensity||50,onChange:B=>Xe(Number(B.target.value)),style:{width:"92%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[N.filterIntensity||50,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Швидкі стилі"}),(0,e.jsxs)(Wp,{children:[kl.map(B=>(0,e.jsx)(Ci,{$isDarkMode:r,onClick:()=>_(B.config),children:B.label},B.id)),ne.map((B,ae)=>(0,e.jsxs)(Yp,{draggable:!0,onDragStart:ue=>ce(ue,ae),onDragEnd:jt,onDragOver:ue=>ue.preventDefault(),onDrop:ue=>mt(ue,ae),children:[(0,e.jsx)(Qp,{"aria-label":"Перетягніть для сортування",children:"⠿"}),(0,e.jsx)(Ci,{$isDarkMode:r,style:{borderColor:"#7afcff",color:r?"#7afcff":"#006666"},onClick:()=>_(B.config),children:B.label}),(0,e.jsx)(Zp,{onClick:()=>{const ue=B.label.replace("✨ ",""),Be=window.prompt("Введіть нову назву пресета:",ue);Be&&se(B.id,Be)},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(Xp,{onClick:()=>Z(B.id),"aria-label":"Видалити пресет",children:"×"})]},B.id))]}),(0,e.jsxs)(qp,{children:[(0,e.jsx)(Gp,{$isDarkMode:r,placeholder:"Назва пресета...",value:ht,onChange:B=>Tt(B.target.value),maxLength:15}),(0,e.jsx)(Jp,{onClick:()=>{ht.trim()&&(q(ht),Tt(""))},children:"Зберегти"})]})]})}),(0,e.jsx)("li",{children:(0,e.jsx)(e0,{onClick:ge,children:"Скинути всі фільтри ↺"})}),(0,e.jsxs)(Lp,{children:[(0,e.jsx)("li",{children:(0,e.jsx)(Ca,{style:{display:"none"},$isDarkMode:r,onClick:()=>{D(),n()},children:"Магазин"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Ca,{$isDarkMode:r,onClick:()=>{b(),n()},children:"Фонова музика"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Ca,{$isDarkMode:r,onClick:()=>{$(),n()},children:"Налаштування"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Ca,{$isDarkMode:r,onClick:()=>{C(),n()},children:"Навчання"})}),(0,e.jsx)("li",{})]})]})]})]})]})]}):null},An="/assets/relax-Dn2PcHdb.mp3",n0="/assets/bell-B5cBbKiy.mp3",a0="/assets/paper-CyM37wYo.mp3",r0="/assets/concierge-ItJSby-8.mp3",o0=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,i0=je`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,s0=je`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,l0=i.div`
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${t=>t.$isDarkMode?"white":"#000000"};
  position: fixed;
  background: ${t=>t.$isDarkMode?"rgba(0, 0, 0, 0.45)":"rgba(255, 255, 255, 0.86)"};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: ${t=>t.$isStickyBgMode?"blur(10px)":"none"};
  color: ${t=>t.$isDarkMode?"white":"#000000"};
  top: 0;
  left: 0;
  z-index: 1000;
  transition:
    background-color 0.4s ease,
    backdrop-filter 0.4s ease;
  box-sizing: border-box;
  animation: ${s0} 0.8s ease-out 4.3s both;
  margin: 0;
`,d0=i.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`,Ht=i.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  align-items: center;
  justify-content: center;
  padding: 2px;
  flex-shrink: 0;
`,Qt=i.span`
  display: inline-block;
  font-size: 21px;
`;i.span`
  font-size: 12px;
  font-weight: 900;
  max-width: 78%;
  white-space: nowrap;
  text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 3px;
  flex-shrink: 2;

  ${t=>t.$uColor?.includes("linear")?sn`
        background: ${t.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${i0} 5s ease infinite;
      `:`color: ${t.$uColor||"inherit"};`}
`;var Ti=i.img`
  width: 35px;
  height: 35px;
  min-width: 30px;
  margin-right: 0;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  background-image: ${t=>t.$bColor?.includes("linear-gradient")?`linear-gradient(white, white), ${t.$bColor}`:"none"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-color: ${t=>t.$bColor?.includes("linear-gradient")?"transparent":t.$bColor||"transparent"};
`,c0=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,u0=i.button`
  display: flex;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.07)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"};
  color: ${t=>t.$isDarkMode?"#fff":"#111"};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
  }
`,p0=i.div`
  position: absolute;
  top: 42px;
  right: 0;
  z-index: 2001;
  min-width: 290px;
  background: ${t=>t.$isDarkMode?"rgba(14, 14, 14, 0.96)":"rgba(255, 255, 255, 0.96)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.12)"};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 12px 14px;
  color: ${t=>t.$isDarkMode?"#fff":"#111"};
`,f0=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,g0=i.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`,x0=i.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 2px;
`,Ai=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  gap: 4px;
    & > * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`,h0=i.div`
  position: absolute;
  top: 52px;
  right: 10px;
  background: ${t=>t.$isDarkMode?"rgba(18, 18, 18, 0.95)":"rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ddd"};
  backdrop-filter: blur(5px);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Er=i.label`
  font-size: 11px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,Ii=i.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${t=>t.$isDarkMode?"#ffb36c":"#007bff"};
`,m0=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`,b0=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#3e2723":t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 6px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`,Ot=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(o0,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})},y0=({sfxVolume:t=.2,onOpenLogin:n,onOpenRegister:r,onOpenSettings:c,onOpenVip:l,onOpenShop:s,onOpenHelp:y,onOpenOtherOptions:f,onOpenInfo:x,isInfoOpen:g,isDarkMode:h,toggleTheme:P,isStickyBgMode:D,setIsStickyBgMode:M,sectionThemes:$,hiddenSections:C,onToggleSectionVisibility:b,onToggleSectionTheme:w,onResetSectionThemes:V,onOpenAchievements:k,currentAvatar:R,onLogout:W,user:U,siteSections:N,moveSiteSection:_,resetSiteSections:ge,isRoutingMode:ne,setIsRoutingMode:q,currentPath:Z,setIsFsActive:se,loadingStrategy:Se,onSetLoadingStrategy:fe})=>{const{registerRef:tt}=Ba?.()||{registerRef:()=>{}},[Ce,ct]=(0,a.useState)(!1),[xe,He]=(0,a.useState)(!1),[$e,wt]=(0,a.useState)(!1),vt=U?.avatar||R||"data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",kt=re=>{re.currentTarget.onerror=null,re.currentTarget.src=ho},[Ze,xt]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!Ze)return;const re=be=>{const ut=document.getElementById("header-profile-modal"),A=document.getElementById("header-profile-button");ut&&!ut.contains(be.target)&&A&&!A.contains(be.target)&&xt(!1)};return document.addEventListener("mousedown",re),()=>document.removeEventListener("mousedown",re)},[Ze]);const{visualConfig:_e,setVisualConfig:ht,resetFilters:Tt,FILTERS:Oe,PRESETS:T,customPresets:F,saveCustomPreset:te,deleteCustomPreset:de,updateCustomPresetName:Ee,reorderCustomPresets:Ve}=Cp(U);(0,a.useEffect)(()=>{const re=setInterval(()=>ct(be=>!be),3e3);return()=>clearInterval(re)},[]);const ze=re=>{const be=new Audio(re);be.volume=t,be.play().catch(()=>{})},nt=()=>{ze(n0),P()},ce=()=>{ze(a0),He(!0)},jt=()=>{ze(r0),M(re=>!re)},mt=()=>{ze(An),wt(re=>!re)},at=()=>{ze(An),y&&y()},At=()=>{ze(An),s&&s()},Xe=()=>{ze(An),f&&f()},bt=()=>{ze(An),c&&c()},B=()=>{ze(An),W&&W()},ae=()=>{ze(An),n&&n()},ue=()=>{ze(An),r&&r()},Be=re=>{ze(An),ht(be=>({...be,filterType:re}))},Rt=re=>{ze(An),ht(re)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l0,{$isDarkMode:h,$isStickyBgMode:D,"data-decorator-ignore":"true",children:[(0,e.jsx)(d0,{children:U?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Ai,{ref:re=>tt("headerBgTheme",re),children:[(0,e.jsx)(Ot,{content:"Змінити тему",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:nt,$isDarkMode:h,"aria-label":"Змінити тему",children:(0,e.jsx)(Qt,{style:{fontSize:"19px"},children:h?(0,e.jsx)(Ma,{}):(0,e.jsx)(Da,{})})})}),(0,e.jsx)(Ot,{content:"Фон на увесь сайт",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:jt,$isDarkMode:h,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(ni,{style:{color:D?"#ff005d":"inherit"}})})})}),(0,e.jsx)(Ot,{content:"Налаштування вигляду",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:mt,$isDarkMode:h,"aria-label":"Налаштування вигляду",children:(0,e.jsx)(Qt,{style:{marginTop:"2px",fontSize:"24px"},children:(0,e.jsx)(ei,{})})})}),(0,e.jsx)(Ot,{content:"Допомога з сайтом",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:at,$isDarkMode:h,"aria-label":"Допомога з сайтом",children:(0,e.jsx)(Qt,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(Ot,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:At,$isDarkMode:h,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(si,{})})}),(0,e.jsx)(Ot,{content:"Інші опції та фонова музика",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:Xe,$isDarkMode:h,"aria-label":"Інші опції та фонова музика",children:(0,e.jsx)(Qt,{style:{fontSize:"19px",marginTop:"2px"},children:(0,e.jsx)(ai,{})})})}),(0,e.jsx)(Ot,{content:"Налаштування",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:bt,$isDarkMode:h,"aria-label":"Налаштування",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(xs,{})})})}),(0,e.jsx)(Ot,{content:"Вихід з акаунта",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:B,$isDarkMode:h,"aria-label":"Вихід з акаунта",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(sd,{})})})}),(0,e.jsx)(Ot,{content:"Відкрити меню",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:ce,$isDarkMode:h,"aria-label":"Відкрити меню",children:(0,e.jsx)(Qt,{children:"☰"})})})]}),(0,e.jsxs)(c0,{children:[(0,e.jsx)(Ot,{content:"Ваш профіль",isDarkMode:h,children:(0,e.jsx)(u0,{id:"header-profile-button",$isDarkMode:h,onClick:()=>xt(re=>!re),"aria-label":"Профіль користувача",children:(0,e.jsx)(Ti,{src:vt,onError:kt,$bColor:U.borderColor,style:{width:"33px",height:"33px"}})})}),Ze&&(0,e.jsx)(p0,{id:"header-profile-modal",$isDarkMode:h,children:(0,e.jsxs)(f0,{children:[(0,e.jsx)(Ti,{src:vt,onError:kt,$bColor:U.borderColor,style:{width:"42px",height:"42px"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)(x0,{children:"Профіль"}),(0,e.jsxs)(g0,{children:["Ваше ім'я: ",U.firstName]})]})]})})]})]}):(0,e.jsxs)(Ai,{ref:re=>tt("headerBgTheme",re),children:[(0,e.jsx)(Ot,{content:"Змінити тему",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:nt,$isDarkMode:h,"aria-label":"Змінити тему",children:(0,e.jsx)(Qt,{style:{fontSize:"18px"},children:h?(0,e.jsx)(Ma,{}):(0,e.jsx)(Da,{})})})}),(0,e.jsx)(Ot,{content:"Фон на увесь сайт",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:jt,$isDarkMode:h,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(ni,{style:{color:D?"#ff005d":"inherit"}})})})}),(0,e.jsx)(Ot,{content:"Налаштування вигляду",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:mt,$isDarkMode:h,"aria-label":"Налаштування вигляду",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(ei,{})})})}),(0,e.jsx)(Ot,{content:"Навчання",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:at,$isDarkMode:h,"aria-label":"Навчання",children:(0,e.jsx)(Qt,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(Ot,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:At,$isDarkMode:h,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(si,{})})}),(0,e.jsx)(Ot,{content:"Інші опції",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:Xe,$isDarkMode:h,"aria-label":"Інші опції",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(ai,{})})})}),(0,e.jsx)(Ot,{content:"Відкрити меню",isDarkMode:h,children:(0,e.jsx)(Ht,{onClick:ce,$isDarkMode:h,"aria-label":"Відкрити меню",children:(0,e.jsx)(Qt,{children:"☰"})})}),(0,e.jsx)("button",{onClick:ae,style:{fontSize:"11px",cursor:"pointer",background:"none",border:"none",textDecoration:"underline",display:"none",color:h?"#fff":"#000"},children:"Вхід"}),(0,e.jsx)("button",{onClick:ue,style:{fontSize:"14px",cursor:"pointer",background:"none",border:"none",marginRight:"15px",textDecoration:"underline",color:h?"#fff":"#000"},children:"Акаунт"})]})}),$e&&(0,e.jsxs)(h0,{$isDarkMode:h,children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)(Er,{$isDarkMode:h,children:["Яскравість ",(0,e.jsxs)("span",{children:[_e.darkIntensity,"%"]})]}),(0,e.jsx)(Ii,{type:"range",min:"0",max:"100",value:_e.darkIntensity,onChange:re=>ht(be=>({...be,darkIntensity:Number(re.target.value)})),$isDarkMode:h})]}),(0,e.jsx)(m0,{children:Oe.map(re=>(0,e.jsx)(b0,{$active:_e.filterType===re.id,$isDarkMode:h,onClick:()=>Be(re.id),children:re.label},re.id))}),_e.filterType!=="none"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(Er,{$isDarkMode:h,children:["Сила ефекту ",(0,e.jsxs)("span",{children:[_e.filterIntensity,"%"]})]}),(0,e.jsx)(Ii,{type:"range",min:"0",max:"100",value:_e.filterIntensity,onChange:re=>ht(be=>({...be,filterIntensity:Number(re.target.value)})),$isDarkMode:h})]}),(0,e.jsxs)("div",{style:{marginTop:"5px"},children:[(0,e.jsx)(Er,{$isDarkMode:h,style:{marginBottom:"8px"},children:"Стилі"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[T.map(re=>(0,e.jsx)("button",{style:{background:"transparent",border:"1px solid #ffb36c",color:h?"#ffb36c":"#333",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer"},onClick:()=>Rt(re.config),children:re.label},re.id)),F.map(re=>(0,e.jsx)("button",{style:{background:"rgba(255, 179, 108, 0.1)",border:"1px solid #7afcff",color:h?"#7afcff":"#006666",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis"},onClick:()=>Rt(re.config),children:re.label},re.id))]})]})]})]}),(0,e.jsx)(t0,{isOpen:xe,onClose:()=>He(!1),isDarkMode:h,siteSections:N,moveSiteSection:_,resetSiteSections:ge,sectionThemes:$,hiddenSections:C,onToggleSectionVisibility:b,onToggleSectionTheme:w,onResetSectionThemes:V,onToggleTheme:nt,onOpenShop:At,onOpenVip:l,onOpenAchievements:k,showUltra:Ce,onOpenSettings:bt,onOpenHelp:at,onOpenInfo:x,onOpenOtherOptions:Xe,onLogout:B,isRoutingMode:ne,setIsRoutingMode:q,currentPath:Z,visualConfig:_e,setVisualConfig:ht,onResetFilters:Tt,customPresets:F,onSavePreset:te,onDeletePreset:de,onUpdatePresetName:Ee,onReorderPresets:Ve,setIsFsActive:se,loadingStrategy:Se,onSetLoadingStrategy:fe,isStickyBgMode:D,onToggleStickyBg:jt})]})},Sl=Va(nc()),w0="/assets/planes-jETY8OKB.webp",v0="/assets/meridian-BmSGwtRn.webp",Cl="/assets/castle-DO6W3_-e.webp",Tl="/assets/herotext-e_tt891I.webp",Mi=JSON.parse(`[{"id":1,"title":"Метеофор (Gismeteo)","url":"https://meteofor.com.ua/","snippet":"Популярний український метеосайт.\\nПримітка: Містить новини пов'язані з політикою.\\nПостачальник: Uanet / Gismeteo\\nДата випуску: Грудень 1998 року","buttonText":"Подивитись погоду","images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxYt4fP3qDMhaY8ZMuec1u8XnEAqFuykvaQlICB7TSg&s=10"],"tags":["погода","прогноз","україна"]},{"id":2,"title":"Sinoptik — Погода в Україні","url":"https://sinoptik.ua/","snippet":"Погода на 7 днів, 10 днів та місяць для вашого міста.\\nПостачальник: Ukr.net\\nДата випуску: квітень 2006 року","buttonText":"Подивитись погоду","tags":["погода","синоптик","тиждень"],"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFgFFBCFHEgWc0pOHX3rHIIO9CapUlNIIZa6Ve7gl4A&s=10"]},{"id":3,"title":"YouTube","url":"https://www.youtube.com/","snippet":"Слухайте улюблену музику та дивіться відео під час перегляду погоди. Підпишись на 'SlivkiShow' та 'TheTurkeyStudio', будь ласка :)\\nАвтори: Стів Чен, Чад Герлі та Джавед Карім\\nТеперішній власник: Google / Alphabet Inc.\\nДата випуску: 14 лютого 2005 року(Викуплено Google 9 жовтня 2006 року)","buttonText":"Подивишся відео?","images":["planes"],"tags":["музика","відео"]},{"id":4,"title":"Aurora Hills: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk","snippet":"Ласкаво просимо до Аврора-Гіллз!\\n\\nРозташоване в глибині Аппалачів, містечко Аврора-Гіллз колись славилося своєю розвиненою промисловістю та мальовничими краєвидами. Завдяки багатим природним ресурсам регіону Аврора-Гіллз мало всі шанси стати одним із найзаможніших міст штату.\\n\\nОднак усе не так, як здається на перший погляд. Протягом останніх кількох років регіон сколихнула низка загадкових зникнень місцевих жителів і туристів, що спричинило масовий відтік населення з цього містечка. Тепер, у жовтні 1981 року, Аврора-Гіллз — лише тінь того, чим воно було колись; від колишнього процвітання майже нічого не залишилося.\\n\\nВам, як рейнджеру національного парку, належить розслідувати ці зникнення та знайти відповіді на запитання, що роками не давали спокою місцевим жителям. Чому за останні пів року кількість зникнень зросла? Чому не вдається знайти жодних слідів тих, хто зник безвісти? І, що найважливіше: хто чи що стоїть за всім цим? Саме вам доведеться вирушити вглиб національного парку, щоб розкрити таємниці Аврора-Гіллз...\\nВаші ставки: На основі реальних подій чи неймовірна уява?\\nДата випуску: 16 квітня 2024 року\\nПостачальник: NovaSoft Interactive","buttonText":"Завантажити гру","tags":["гра","горор","пригоди"],"youtubeTrailer":"https://www.youtube.com/embed/NsOV7eBWCfg","images":["https://play-lh.googleusercontent.com/JrzlwlllVs2WSAz3E0MM7fL-sym7E3bWO-c7689e-p1nqLjY6EWjE53zWfwXULleM1qxzDRjls3MNjK6Dhnkjw=w5120-h2880-rw","https://play-lh.googleusercontent.com/cndOTOCfDAHOXq87M-UEi26kPOg522GyHnqSKGnpwuUVTjkVXnBbVxWGjpSH6fAotiGJMPtD8MNwvwXxrEUjbQ=w1052-h592-rw","https://play-lh.googleusercontent.com/88Y_AW0zOqtcsL5fl5Lvv-il_0GPeG1TSk1zccYUfbpVjFvF_Q-MKZShoJohsb5Vmgu9P_V0kcq6aeiXh6hC1KA=w1052-h592-rw"]},{"id":5,"title":"Aurora Hills: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch2&hl=uk","snippet":"Ранок 6 жовтня 1981 року розпочався як і будь-який інший: пробудження від неспокійного сну, підготовка до майбутнього дня та поїздка до станції рейнджерів, де ви працювали останні 11 років. Аврора-Гіллз колись була тихою громадою, розташованою в горах Аппалачів, але серія зникнень майже зруйнувала цю безтурботну атмосферу. Лише відчуття спустошення пронизує навколишнє середовище, коли ви проїжджаєте через нині занедбане маленьке містечко.\\n\\nДжен не була на станції рейнджерів, коли ви прибули того ранку. Будучи єдиним іншим рейнджером парку, вона любить рано вставати, і до того часу, як ви прибули, вона вже поїхала до одного з численних закритих пішохідних маршрутів, щоб розпочати пошуки зниклих безвісти людей. Слідуючи її нотаткам, ви звертаєте з головної стежки, щоб зустрітися з нею та дослідити віддалені частини національного парку. Однак, коли ви знаходите її табір, ваші найгірші побоювання справджуються: місце розграбовано, її спорядження розкидано по всьому табору, її намет розірвано, а Джен ніде не видно.\\n\\nНемає часу повертатися назад, вже полудень, і сонце сідає рано в цю пору року. Єдине, що може бути гірше, ніж блукати лісом на самоті, це незважаючи на те, щоб пройти його вночі. Ви не можете покинути Джен зараз, не тоді, коли слід такий свіжий. Тепер у вас немає іншого вибору, окрім як заглибитися в незвідані частини національного парку, ті частини, які перелякані містяни перетворили на місцеві міські легенди. Вам краще піти швидше, можливо, у вас ніколи не буде кращого шансу розкрити темну історію Аврора-Гіллз...\\nДата випуску: 1 березня 2026 року\\nПостачальник: NovaSoft Interactive","buttonText":"Хто чи що викрадає людей?","youtubeTrailer":"https://www.youtube.com/embed/1ZqB0GZA_9c","tags":["гра","горор","пригоди"],"images":["https://play-lh.googleusercontent.com/lO4JOlv9mQttad-XCiiccy0egm3nJTHgxqoXyxTeN30tx3NxfOlvgSuXqY0sfimQPrh3k3aUySbKxoWsZ_NaYA=w1052-h592-rw","https://play-lh.googleusercontent.com/Aybi7U6MYW9PG314QPC2SDYkpJ5Umzr897Qwv84UygmbPGfclLy_luZxAqSWxJuwVmPSvaE5w_gN2OXIuHZVRQ=w1052-h592-rw","https://play-lh.googleusercontent.com/Evd_zcKkzaz1KOS-2rwqNlXl1k6f43OD_U-pn8amx5o1apN7SyGWa9a-D39cvrPZHfmgLRKR7Czlm4CYz4oXNw=w1052-h592-rw"]},{"id":6,"title":"Prometheus","url":"https://prometheus.org.ua/","snippet":"Найбільша українська платформа масових відкритих онлайн-курсів.\\nПостачальники: Іван Примаченко, Олексій Молчановський\\nДата випуску: 15 жовтня 2014 року","buttonText":"Записатись на курс","tags":["освіта","курси","корисно"]},{"id":7,"title":"Gemini","url":"https://gemini.google.com/","snippet":"Професійний ШІ асистент для аналізу тексту, зображень, відео та аудіо. І може їх створювати.\\nПостачальник: Google\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":8,"title":"DeepL Translator","url":"https://www.deepl.com/","snippet":"Один із найточніших онлайн-перекладачів на основі штучного інтелекту.\\nПостачальник: DeepL SE (Ярослав Кутиловський)\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":9,"title":"Coursera","url":"https://www.coursera.org/","snippet":"Онлайн-курси від найкращих університетів та компаній світу.\\nПостачальники: Ендрю Ин, Дафна Коллер\\nДата випуску: 18 квітня 2012 року","buttonText":"Записатись на курс","tags":["освіта","курси","саморозвиток"]},{"id":10,"title":"Duolingo","url":"https://www.duolingo.com/","snippet":"Опановуйте нові мови з найпопулярнішим навчальним додатком у світі! Duolingo — це безкоштовний додаток для вивчення понад 40 мов за допомогою веселих коротких уроків. Практикуйте говоріння, читання, слухання й письмо та вдосконалюйте свої лексичні й граматичні навички.\\nДодаток Duolingo, розроблений експертами з вивчення мови, люблять сотні мільйонів людей по всьому світу. Він допомагає підготуватися до живого спілкування іспанською, французькою, китайською, італійською, німецькою, англійською та багатьма іншими мовами.\\nХоч би з якою метою ви вивчали мову — для подорожей, навчання, кар’єри, спілкування з близькими чи тренування мозку, — вам неодмінно сподобається робити це з Duolingo.\\nЯкі ж переваги Duolingo?\\n• Опановувати мову з Duolingo цікаво та ефективно. Уроки в ігровій формі та веселі персонажі допоможуть вам навчитися впевнено розмовляти, читати, слухати та писати іноземною.\\n• Duolingo справді працює. Створена експертами з вивчення мови, методика Duolingo розроблена так, щоб вивчене закріплювалося в довготривалій пам’яті.\\n• У вас є змога відстежувати свій прогрес. А досягнути поставлених цілей і зробити навчання щоденною звичкою допоможуть веселі винагороди та досягнення!\\n• Ви навчаєтеся разом із понад 500 мільйонами людей з усього світу. Змагайтеся з іншими за переможні місця на дошках пошани, щоб підтримувати інтерес до навчання.\\n• Усі мовні курси безкоштовні. Вивчайте італійську, португальську, турецьку, нідерландську, ірландську, датську, шведську, українську, есперанто, польську, грецьку, угорську, норвезьку, іврит, валлійську, арабську, латинську, гавайську, шотландську ґельську, в’єтнамську, корейську, японську, англійську й навіть високу валірійську! І це не весь список!\\nОсь що кажуть у світі про Duolingo ⭐️⭐️⭐️⭐️⭐️:\\n«Вибір редакції й “найкращий серед найкращих”», — Google Play\\n«Безперечно, найкращий додаток для вивчення мов», — The Wall Street Journal\\n«Ці безкоштовні додаток і вебсайт — одні з наефективніших способів опановувати мову, які мені траплялися… уроки складаються з коротких цікавих завдань, як-от говоріння, переклад чи вибір правильної відповіді, тому я залюбки повертаюсь до них знов і знов», — The New York Times\\n«Duolingo може стати майбутнім освіти», — TIME Magazine\\n«...Duolingo — це веселий, милий і цікавий додаток», — Forbes\\nЯкщо ви любите Duolingo, спробуйте Super Duolingo протягом 14 днів безкоштовно! Опановуйте мову швидко, без реклами й отримуючи корисні бонуси, як-от необмежені серця та щомісячне відновлення відрізка.\\nНадсилайте свої відгуки на адресу android@duolingo.com\\nВебверсія доступна за адресою https://www.duolingo.com\\nПолітика конфіденційності: https://www.duolingo.com/privacy\\nДоміно: Доктор все погано, додаток чудовий, але мови індиків немає, я людей розумію, а вони мене ні... Доктор: Може це на краще, секрети замку ти не видаси :)\\nПостачальники: Луїс фон Ан, Северин Гакер\\nДата випуску: 29 травня 2013 року","buttonText":"Вчити мови","tags":["освіта","мови","корисно"]},{"id":11,"title":"Wikipedia (Українська)","url":"https://uk.wikipedia.org/","snippet":"Вільна енциклопедія, яку може редагувати кожен.\\nІлон Маск пропонував їм багато грошей, якщо вони перейменуються... Чомусь відмовились...\\nПостачальник: Wikimedia Foundation\\nДата випуску: 30 січня 2004 року","buttonText":"Читати і редагувати","youtubeTrailer":"https://www.youtube.com/watch?v=6UkFHYqVsbc","images":[],"tags":["енциклопедія","знання","довідник"]},{"id":12,"title":"Canva","url":"https://www.canva.com/","snippet":"Простий онлайн-інструмент для створення дизайну, презентацій та графіки.\\nЯкщо відкинути 3тю букву, буде кава :) Рифма від Кейт для пісні Полякової: Буде Кава, яку вип'є леді Гага!\\nПостачальник: Canva Pty Ltd (Мелані Перкінс, Кліфф Обрехт, Камерон Адамс)\\nДата випуску: 1 січня 2013 року","buttonText":"Створити дизайн","tags":["дизайн","інструменти","графіка"]},{"id":13,"title":"Photopea","url":"https://www.photopea.com/","snippet":"Безкоштовний онлайн-редактор зображень, аналог Photoshop.\\nМій перший дизайн: почник, з якого зникає шматок :)\\nПостачальник: Іван Куцкір\\nДата випуску: 14 вересня 2013 року","buttonText":"Редагувати фото","tags":["дизайн","фото","інструменти"]},{"id":14,"title":"Notion","url":"https://www.notion.so/","snippet":"Універсальний робочий простір для нотаток, баз даних та керування проєктами.\\nПостачальник: Notion Labs Inc. (Іван Чжао, Саймон Ласт)\\nДата випуску: березень 2016 року","buttonText":"Організувати роботу","tags":["продуктивність","нотатки","робота"]},{"id":15,"title":"Trello","url":"https://trello.com/","snippet":"Популярний інструмент для управління проєктами на основі канбан-дошок.\\nПостачальник: Atlassian (Джоел Спольскі, Майкл Прайор)\\nДата випуску: 13 вересня 2011 року","buttonText":"Керувати завданнями","tags":["продуктивність","менеджмент","робота"]},{"id":16,"title":"GitHub","url":"https://github.com/","snippet":"Найбільший вебсервіс для спільної розробки програмного забезпечення. До речі, ми теж там :)\\nПостачальник: GitHub Inc. / Microsoft\\nДата випуску: 10 квітня 2008 року","buttonText":"Програмувати","tags":["it","програмування","код"]},{"id":17,"title":"Stack Overflow","url":"https://stackoverflow.com/","snippet":"Спільнота для програмістів, де можна знайти відповіді на технічні питання.\\nПостачальник: Stack Exchange Inc. (Джоел Спольскі, Джефф Атвуд)\\nДата випуску: 15 вересня 2008 року","buttonText":"Знайти рішення","tags":["it","програмування","допомога"]},{"id":18,"title":"Wolfram Alpha","url":"https://www.wolframalpha.com/","snippet":"Обчислювальна система, що видає відповіді на складні математичні та наукові питання. Прикольний калькулятор :)\\nПостачальник: Wolfram Research (Стівен Вольфрам)\\nДата випуску: 18 травня 2009 року","buttonText":"Обчислити","tags":["наука","математика","корисно"]},{"id":19,"title":"Google Scholar","url":"https://scholar.google.com/","snippet":"Пошукова система для наукової літератури та публікацій.\\nПостачальник: Google / Alphabet Inc. (Анураг Ачар'я)\\nДата випуску: 20 листопада 2004 року","buttonText":"Шукати статті","tags":["наука","освіта","пошук"]},{"id":20,"title":"TED","url":"https://www.ted.com/","snippet":"Відеолекції від видатних людей на теми технологій, розваг та дизайну.\\nПочатковий власник: Річард Сол Вурмен та Гаррі Маркс\\nПочатковий автор: TED Conferences LLC / Sapling Foundation (Кріс Андерсон)\\nДата випуску: 23 лютого 1984 року","buttonText":"Дивитись лекції","tags":["освіта","відео","натхнення"]},{"id":21,"title":"Internet Archive","url":"https://archive.org/","snippet":"Некомерційна бібліотека мільйонів безкоштовних книг, фільмів, програм та історії вебсайтів (Wayback Machine).\\nПостачальник: Брюстер Кейл\\nДата випуску: 10 травня 1996 року","buttonText":"Шукати в архіві","tags":["історія","архів","книги"]},{"id":22,"title":"Khan Academy","url":"https://uk.khanacademy.org/","snippet":"Безкоштовні мікролекції з математики, історії, медицини тощо.\\nПостачальник: Салман Хан (Salman Khan)\\nДата випуску: вересень 2006 року","buttonText":"Навчатися","tags":["освіта","школа","корисно"]},{"id":23,"title":"W3Schools","url":"https://www.w3schools.com/","snippet":"Найбільший вебсайт для вивчення веб-технологій (HTML, CSS, JavaScript).\\nПостачальник: Refsnes Data\\nДата випуску: 1998 рік","buttonText":"Вчити код","tags":["it","програмування","навчання"]},{"id":24,"title":"Figma","url":"https://www.figma.com/","snippet":"Онлайн-редактор для створення інтерфейсів та прототипування.\\nУлюблений інструмент дизайнерів (і ні, це не те, про що ви подумали за першими трьома буквами :)\\nПостачальник: Ділан Філд та Еван Воллес (Dylan Field, Evan Wallace)\\nДата випуску: 27 вересня 2016 року","buttonText":"Створювати дизайн","tags":["дизайн","інструменти","it"]},{"id":25,"title":"Miro","url":"https://miro.com/","snippet":"Віртуальна дошка для спільної роботи команд, мозкових штурмів та схем.\\nПостачальник: Андрій Хусид та Олег Шардин\\nДата випуску: 2011 рік","buttonText":"Малювати схеми","tags":["продуктивність","робота","інструменти"]},{"id":26,"title":"Grammarly","url":"https://www.grammarly.com/","snippet":"Онлайн-сервіс для перевірки граматики та стилістики текстів (англійською).\\nПостачальник: Олексій Шевченко, Макс Литвин, Дмитро Лідер\\nДата випуску: 1 липня 2009 року","buttonText":"Перевірити текст","tags":["інструменти","письмо","англійська"]},{"id":27,"title":"Todoist","url":"https://todoist.com/","snippet":"Один із найкращих додатків для ведення списків справ (To-Do list).\\nПостачальник: Doist Ltd. (Amir Salihefendıć)\\nДата випуску: 1 січня 2007 року","buttonText":"Планувати","tags":["продуктивність","планування","корисно"]},{"id":28,"title":"Flightradar24","url":"https://www.flightradar24.com/","snippet":"Сервіс для відстеження авіаперельотів у реальному часі по всьому світу.\\nПостачальник: Мікаель Робертссон та Олов Ліндберг\\nДата випуску: 2006 рік","buttonText":"Відстежувати літаки","tags":["радар","авіація","мапа"]},{"id":29,"title":"Windy","url":"https://www.windy.com/","snippet":"Інтерактивна мапа погоди, вітру, циклонів та опадів. Ми її використовуємо на сайті, і спробуйте її з нашими інструментами у Стихії!\\nПостачальник: Іво Лукачович\\nДата випуску: листопад 2014 року","buttonText":"Дивитися погоду","tags":["погода","мапа","метеорологія"]},{"id":30,"title":"VirusTotal","url":"https://www.virustotal.com/","snippet":"Безкоштовна перевірка файлів та посилань на віруси понад 70 антивірусами.\\nЩось ковіду не зупинило :(\\nПостачальник: Chronicle / Google\\nДата випуску: червень 2004 року","buttonText":"Перевірити на віруси","tags":["безпека","інструменти","корисно"]},{"id":31,"title":"Speedtest by Ookla","url":"https://www.speedtest.net/","snippet":"Найпопулярніший сервіс для перевірки швидкості інтернет-з'єднання.\\nПостачальник: Ookla LLC / Ziff Davis\\nДата випуску: 2006 рік","buttonText":"Тест швидкості","tags":["інструменти","інтернет","тест"]},{"id":32,"title":"AlternativeTo","url":"https://alternativeto.net/","snippet":"Сайт для пошуку аналогів та альтернатив для будь-якого програмного забезпечення.\\nПостачальник: Ола та Маркус\\nДата випуску: березень 2009 року","buttonText":"Знайти альтернативу","tags":["інструменти","софт","пошук"]},{"id":33,"title":"Unsplash","url":"https://unsplash.com/","snippet":"Величезна бібліотека якісних фотографій, вільних для використання.\\nПостачальник: Unsplash / Getty Images (Мікаель Чо)\\nДата випуску: травень 2013 року","buttonText":"Шукати фото","tags":["фото","дизайн","ресурси"]},{"id":34,"title":"Pixabay","url":"https://pixabay.com/","snippet":"Безкоштовні стокові зображення, векторна графіка та відео. Використуємо їх бібліотеку на сайті!\\nПостачальник: Pixabay / Canva (Ганс Браксмайєр, Саймон Штейнбергер)\\nДата випуску: 24 листопада 2010 року","buttonText":"Знайти медіа","tags":["фото","ресурси","дизайн"]},{"id":35,"title":"Medium","url":"https://medium.com/","snippet":"Платформа для публікації статей та блогів на будь-які теми.\\nПостачальник: A Medium Corporation (Ев Вільямс)\\nДата випуску: 15 серпня 2012 року","buttonText":"Читати статті","tags":["статті","блог","читання"]},{"id":36,"title":"Pinterest","url":"https://www.pinterest.com/","snippet":"Соціальна мережа для пошуку та збереження візуальних ідей.\\nПостачальник: Бен Зільберман, Пол Скіарра, Еван Шарп\\nДата випуску: січень 2010 року","buttonText":"Шукати ідеї","tags":["візуал","натхнення","дизайн"]},{"id":37,"title":"Behance","url":"https://www.behance.net/","snippet":"Платформа від Adobe для демонстрації творчих робіт дизайнерів та ілюстраторів.\\nПостачальник: Adobe Inc. (Матіас Корреа, Скотт Бельські)\\nДата випуску: листопад 2005 року","buttonText":"Дивитися портфоліо","tags":["дизайн","портфоліо","мистецтво"]},{"id":38,"title":"Ninite","url":"https://ninite.com/","snippet":"Інструмент для швидкого та автоматичного встановлення популярних програм на Windows.\\nПостачальник: Патрік Свенсковські та Саша Кузінс\\nДата випуску: жовтень 2009 року","buttonText":"Встановити софт","tags":["інструменти","windows","софт"]},{"id":39,"title":"ProtonMail","url":"https://proton.me/mail","snippet":"Захищена електронна пошта з наскрізним шифруванням, розроблена в Швейцарії.\\nПостачальник: Proton AG (Енді Йєн)\\nДата випуску: 16 травня 2014 року","buttonText":"Створити пошту","tags":["безпека","пошта","приватність"]},{"id":40,"title":"1.1.1.1 (Cloudflare)","url":"https://1.1.1.1/","snippet":"Безпечний та швидкий DNS-сервіс для приватного серфінгу в інтернеті.\\nДоміно намагався заблокувати свій власний секретний сайт через 1.1.1.1, але забув, що цього сайту навіть не існує в природі :)\\nПостачальник: Метью Прінс, Мішель Затлін, Лі Голловей\\nДата випуску: 1 квітня 2018 року","buttonText":"Налаштувати DNS","tags":["безпека","інтернет","інструменти"]},{"id":41,"title":"Google Keep","url":"https://keep.google.com/","snippet":"Швидкий та зручний сервіс для створення коротких нотаток та списків від Google.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 20 березня 2013 року","buttonText":"Створити нотатку","tags":["продуктивність","нотатки","google"]},{"id":42,"title":"Codecademy","url":"https://www.codecademy.com/","snippet":"Інтерактивна платформа для вивчення програмування з нуля.\\nПостачальник: Codecademy / Skillsoft (Зач Сімс, Раян Бубінські)\\nДата випуску: серпень 2011 року","buttonText":"Вчити програмування","tags":["освіта","it","код"]},{"id":43,"title":"MDN Web Docs","url":"https://developer.mozilla.org/","snippet":"Найповніша документація для веброзробників від Mozilla.\\nПостачальник: Mozilla Foundation\\nДата випуску: 15 липня 2005 року","buttonText":"Читати документацію","tags":["it","довідник","web"]},{"id":44,"title":"Pocket","url":"https://getpocket.com/","snippet":"Сервіс для збереження статей, відео та сторінок, щоб прочитати їх пізніше.\\nПостачальник: Mozilla Corporation (Нейт Вайнер)\\nДата випуску: серпень 2007 року","buttonText":"Зберегти на потім","tags":["читання","продуктивність","інструменти"]},{"id":45,"title":"Feedly","url":"https://feedly.com/","snippet":"Агрегатор RSS-стрічок для зручного читання новин з улюблених сайтів.\\nПостачальник: DevHD (Ерван Гранжен)\\nДата випуску: 15 червня 2008 року","buttonText":"Читати новини","tags":["новини","інструменти","інформація"]},{"id":46,"title":"Nova Poshta (Нова Пошта)","url":"https://novaposhta.ua/","snippet":"Офіційний сайт найбільшого логістичного оператора України. Відстеження посилок.\\nПостачальник: В'ячеслав Климов, Володимир Поперешнюк\\nДата випуску: 13 лютого 2001 року","buttonText":"Відстежити посилку","tags":["доставка","сервіс","україна"]},{"id":47,"title":"Rozetka","url":"https://rozetka.com.ua/","snippet":"Найбільший онлайн-ритейлер в Україні: електроніка, одяг, товари для дому.\\nПостачальник: ТОВ «Розетка.УА» (Владислав Чечоткін)\\nДата випуску: 2005 рік","buttonText":"Купувати","tags":["магазин","покупки","україна"]},{"id":48,"title":"Ukr.net","url":"https://www.ukr.net/","snippet":"Популярний український вебпортал, стрічка новин та електронна пошта.\\nПостачальник: ТОВ «Укрнет»\\nДата випуску: 1998 рік","buttonText":"Читати новини","tags":["новини","портал","україна"]},{"id":49,"title":"Google Drive","url":"https://drive.google.com/","snippet":"Хмарне сховище для зберігання файлів та спільної роботи над документами.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 24 квітня 2012 року","buttonText":"Відкрити диск","tags":["хмара","файли","робота"]},{"id":50,"title":"ChatGPT","url":"https://chat.openai.com/","snippet":"Штучний інтелект для генерації текстів, програмування та відповідей на запитання.\\nПримітка: 13+ з дозволу батьків, 18+ самостійне використання\\nПостачальник: OpenAI\\nДата випуску: 30 листопада 2022 року","buttonText":"Спілкуватися з ШІ","tags":["ші","інструменти","технології"]},{"id":51,"title":"EdEra","url":"https://www.ed-era.com/","snippet":"Студія онлайн-освіти, що створює інтерактивні курси, підручники та спецпроєкти.\\nПостачальник: Ілля Філіпов (EdEra)\\nДата випуску: 2014 рік","buttonText":"Навчатися","tags":["освіта","курси","україна"]},{"id":52,"title":"Boto Sapiens","url":"https://botosapiens.com/","snippet":"Корисні боти та сервіси для автоматизації рутини в Telegram та не тільки.\\nПостачальник: Boto Sapiens Team\\nДата випуску: 2020 рік","buttonText":"Знайти бота","tags":["інструменти","telegram","корисно"]},{"id":53,"title":"Google Translate","url":"https://translate.google.com.ua/","snippet":"Найвідоміший сервіс машинного перекладу для сотень мов світу.\\nНа жаль як і в Дуолінго, проблему Доміно, з розумінням його мови не вирішили :)\\nПостачальник: Google / Alphabet Inc.\\nДата випуску: 28 квітня 2006 року","buttonText":"Перекласти","tags":["переклад","інструменти","мовлення"]},{"id":54,"title":"OpenStreetMap","url":"https://www.openstreetmap.org/","snippet":"Детальна вільна географічна мапа світу, яку створюють користувачі.\\nДоміно: Я впевнений, що це тактика таємних товариств, наспрвді Земля плоска, Стоїть на 3 слонах, і пливе на черепазі(Дивно, я очікував на Ніцероні, хоча якщо подумати. Ніцерон - символ поганої політики людства у мультиплікаційній формі)\\nПостачальник: OpenStreetMap Foundation (Стів Кост)\\nДата випуску: 9 серпня 2004 року","buttonText":"Відкрити мапу","tags":["мапа","географія","навігація"]},{"id":55,"title":"E-Katalog","url":"https://ek.ua/","snippet":"Каталог описів і цін на побутову і комп'ютерну техніку, допомога у виборі.\\nКейт: я хочу собі 17 айфон про макс. Доміно: давай повчишся користуватися дзьобом на нокіа 3310, через 5 років.\\nПостачальник: E-Katalog Ltd.\\nДата випуску: 2001 рік","buttonText":"Порівняти ціни","tags":["покупки","техніка","порівняння"]},{"id":56,"title":"Словко","url":"https://slovko.zaxid.net/","snippet":"Українська версія популярної гри-головоломки Wordle. Відгадайте слово з 5 літер.\\nДоміно: Я відгадав це індик!\\nПостачальник: Zaxid.net / Назарій Захарія\\nДата випуску: січень 2022 року","buttonText":"Грати","tags":["головоломка","слова","логіка"]},{"id":57,"title":"Web Sudoku","url":"https://www.websudoku.com/","snippet":"Мільярди безкоштовних головоломок Судоку різних рівнів складності онлайн.\\nПостачальник: Web Sudoku Ltd (Гідеон та Елізабет Грін)\\nДата випуску: 2005 рік","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":58,"title":"2048","url":"https://play2048.co/","snippet":"Математична головоломка: зсувайте плитки, щоб утворити число 2048.\\nПостачальник: Габріеле Чіруллі (Gabriele Cirulli)\\nДата випуску: 9 березня 2014 року","buttonText":"Грати","tags":["головоломка","математика","логіка"]},{"id":59,"title":"Lichess","url":"https://lichess.org/","snippet":"Безкоштовна платформа для гри в шахи та розв'язання шахових задач-головоломок.\\nНагадайте: Пішка переміщується по будь якій клітинці як хоче? :)\\nПостачальник: Тібо Дюплессі (Thibault Duplessis)\\nДата випуску: 20 червня 2010 року","buttonText":"Розв'язувати задачі","tags":["головоломка","шахи","логіка"]},{"id":60,"title":"Nonograms.org","url":"https://www.nonograms.org/","snippet":"Японські кросворди (нонограми) — малювання картинок за допомогою чисел.\\nПостачальник: Олег Каштелян\\nДата випуску: 2012 рік","buttonText":"Грати","tags":["головоломка","нонограми","логіка"]},{"id":61,"title":"The New York Times Crossword","url":"https://www.nytimes.com/crosswords","snippet":"Легендарні англомовні кросворди та міні-головоломки щодня.\\nПостачальник: The New York Times Company (Віл Шортс)\\nДата випуску: 15 лютого 1942 року","buttonText":"Розв'язувати","tags":["головоломка","кросворд","слова"]},{"id":62,"title":"Jigsaw Planet","url":"https://www.jigsawplanet.com/","snippet":"Збирайте класичні пазли з тисяч безкоштовних картинок онлайн.\\nПостачальник: Critical Hit Software\\nДата випуску: 2007 рік","buttonText":"Збирати пазли","tags":["головоломка","пазли","відпочинок"]},{"id":63,"title":"Monument Valley","url":"https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley","snippet":"Естетична просторова головоломка про неможливу архітектуру та оптичні ілюзії.\\nПостачальник: ustwo games\\nДата випуску: 3 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","архітектура","інді"]},{"id":64,"title":"The Room","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=h-NdQSeTPfA","snippet":"Ласкаво просимо до Кімнати, фізичної головоломки, загорнутої в таємничу гру, всередині прекрасного тактильного 3D-світу.\\n*****************\\nЯк справи, старий друже? Якщо ти це читаєш, значить, це спрацювало. Сподіваюся, ти все ще можеш мені пробачити.\\nМи ніколи не йшли точкою зору щодо моїх досліджень, але ти мусиш залишити такі речі позаду. Ти єдиний, до кого я можу звернутися. Ти мусиш прийти негайно, бо ми всі у великій небезпеці. Сподіваюся, ти пам'ятаєш будинок? Мій кабінет — найвища кімната.\\nРухайся вперед з душею. Тепер шляху назад немає.\\nЯК.\\n******\\nFireproof Games дуже пишається тим, що представляє вам наше найкраще творіння, захопливу подорож, сповнену краси, небезпеки та таємниці в рівній мірі. Перенесіть себе в унікальний простір, який поєднує захоплюючі візуальні ефекти з інтригуючими проблемами, які потрібно вирішити.\\n• Тривожно реалістична графіка: яскраві візуальні ефекти з природним виглядом, вдосконалені для мобільних дисплеїв.\\n• Моторошне керування одним пальцем: сенсорне керування настільки природне, що ви можете грати однією пальцем, щоб повністю орієнтуватися в цьому таємниче красивому 3D-світі.\\n• Фантастичний дизайн, що дозволяє швидко почати грати: легко почати, важко відірватися, таємниці Кімнати занурять вас ще до того, як ви усвідомите, що граєте.\\n• Захопливі шари таємниці: думаєте, що знаєте, на що дивитеся? Подумайте ще раз.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":65,"title":"Brain It On!","url":"https://play.google.com/store/apps/details?id=com.orbital.brainiton","snippet":"Фізичні головоломки, де треба малювати фігури для вирішення завдань.\\nПостачальник: Orbital Nine Games\\nДата випуску: 15 жовтня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","логіка"]},{"id":67,"title":"Where's My Water?","url":"https://play.google.com/store/apps/details?id=com.disney.WMW","snippet":"Прокладайте шлях воді крізь землю, щоб крокодил Свомпі зміг прийняти душ.\\nДоміно: Я тоді через страх крокодилів, на Марсі(чи куди зараз як найдалі можна) пограю в індика. (Це те саме що гра в крокодила, просто для тих хто їх боїться)\\nПостачальник: Disney Interactive\\nДата випуску: 22 вересня 2011 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","disney"]},{"id":68,"title":"Threes!","url":"https://play.google.com/store/apps/details?id=vo.threes.exclaim","snippet":"Елегантна гра-головоломка, де потрібно з'єднувати плитки, кратні трьом.\\nПостачальник: Sirvo / Asher Vollmer\\nДата випуску: 6 лютого 2014 року","buttonText":"Завантажити гру","tags":["головоломка","числа","логіка"]},{"id":69,"title":"Baba Is You","url":"https://store.steampowered.com/app/736260/Baba_Is_You/","snippet":"Геніальна гра, де ви змінюєте самі правила гри, пересуваючи блоки зі словами.\\nПостачальник: Arvi Teikari (Hempuli)\\nДата випуску: 13 березня 2019 року","buttonText":"Дивитися в Steam","tags":["головоломка","логіка","інді"]},{"id":70,"title":"Mini Metro","url":"https://play.google.com/store/apps/details?id=nz.co.codepoint.minimetro","snippet":"Головоломка-симулятор: проєктуйте лінії метро для міста, що постійно зростає.\\nПостачальник: Dinosaur Polo Club\\nДата випуску: 11 серпня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","симулятор","мінімалізм"]},{"id":72,"title":"Portal 2","url":"https://store.steampowered.com/app/620/Portal_2/","snippet":"Культова просторова головоломка від першої особи з портальною гарматою.\\nПостачальник: Valve Corporation\\nДата випуску: 18 квітня 2011 року","buttonText":"Дивитися в Steam","tags":["головоломка","портали","шедевр"]},{"id":73,"title":"The Witness","url":"https://store.steampowered.com/app/210970/The_Witness/","snippet":"Досліджуйте таємничий острів і розв'язуйте сотні складних лабіринтних головоломок.\\nПостачальник: Thekla, Inc. (Jonathan Blow)\\nДата випуску: 26 січня 2016 року","buttonText":"Дивитися в Steam","tags":["головоломка","відкритий_світ","логіка"]},{"id":74,"title":"Braid","url":"https://store.steampowered.com/app/26800/Braid/","snippet":"Платформер-головоломка, де маніпуляції з часом є ключем до вирішення завдань.\\nПостачальник: Number None (Jonathan Blow)\\nДата випуску: 6 серпня 2008 року","buttonText":"Дивитися в Steam","tags":["головоломка","час","інді"]},{"id":75,"title":"Tetris","url":"https://tetris.com/play-tetris","snippet":"Офіційна онлайн-версія найвідомішої у світі гри-головоломки з падаючими блоками.\\nПостачальник: The Tetris Company (Олексій Пажитнов)\\nДата випуску: 6 червня 1984 року","buttonText":"Грати в Tetris","tags":["головоломка","тетріс","класика"]},{"id":76,"title":"Minesweeper Online","url":"https://minesweeperonline.com/","snippet":"Класичний «Сапер» — відкривайте клітинки, спираючись на логіку та числа мін довкола.\\nПостачальник: Microsoft / Роберт Доннер та Курт Джонсон\\nДата випуску: 8 жовтня 1990 року","buttonText":"Грати","tags":["головоломка","сапер","логіка"]},{"id":77,"title":"Flow Free","url":"https://play.google.com/store/apps/details?id=com.bigduckgames.flow","snippet":"З'єднайте крапки однакового кольору лініями, щоб заповнити все ігрове поле.\\nПостачальник: Big Duck Games\\nДата випуску: 7 червня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","лінії","кольори"]},{"id":78,"title":"Monument Valley 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":79,"title":"Bejeweled Classic","url":"https://play.google.com/store/apps/details?id=com.ea.gp.bej3","snippet":"Класична гра зіставлення дорогоцінних каменів, що породила жанр «три в ряд».\\nПостачальник: PopCap Games / EA (Джейсон Капалка)\\nДата випуску: 30 травня 2001 року","buttonText":"Завантажити гру","tags":["головоломка","три_в_ряд","класика"]},{"id":80,"title":"Two Dots","url":"https://play.google.com/store/apps/details?id=com.weplaydots.twodotsandroid","snippet":"Мінімалістична та стильна гра про з'єднання точок одного кольору.\\nПостачальник: Playdots, Inc. / Take-Two Interactive\\nДата випуску: 29 травня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","точки","дизайн"]},{"id":81,"title":"Monument Valley 3","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":82,"title":"Kami 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":83,"title":"Unblock Me","url":"https://play.google.com/store/apps/details?id=com.kiragames.unblockmefree","snippet":"Проста, але складна гра з блоками — виведіть червоний блок з дошки, пересуваючи інші.\\nПостачальник: Kiragames\\nДата випуску: 25 квітня 2009 року","buttonText":"Завантажити гру","tags":["головоломка","блоки","логіка"]},{"id":84,"title":"Roll the Ball","url":"https://play.google.com/store/apps/details?id=com.bitmango.go.rolltheballunrollme","snippet":"Слайд-головоломка: пересувайте блоки, щоб створити шлях для кульки до фінішу.\\nПостачальник: BitMango\\nДата випуску: 20 квітня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","труби","логіка"]},{"id":85,"title":"Infinity Loop","url":"https://play.google.com/store/apps/details?id=com.balysv.loop","snippet":"Розслаблююча гра, де ви обертаєте фрагменти, створюючи нескінченні візерунки.\\nПостачальник: Infinity Games (Balys Valentukevicius)\\nДата випуску: 17 березня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","релакс","візерунки"]},{"id":86,"title":"Water Sort Puzzle","url":"https://play.google.com/store/apps/details?id=com.gma.water.sort.puzzle","snippet":"Сортуйте кольорову воду у склянках так, щоб кожна склянка містила лише один колір.\\nПостачальник: IEC Global / GMA Games\\nДата випуску: 28 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","сортування","логіка"]},{"id":87,"title":"Happy Glass","url":"https://play.google.com/store/apps/details?id=com.game5mobile.lineandwater","snippet":"Малюйте лінії, щоб спрямувати воду і наповнити сумну склянку, зробивши її щасливою.\\nПостачальник: Lion Studios / Game5Mobile\\nДата випуску: 9 серпня 2018 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","малювання"]},{"id":88,"title":"Brain Out","url":"https://play.google.com/store/apps/details?id=com.mind.quiz.brain.out","snippet":"Гра на нестандартне мислення з купою підступних запитань і задач (trick puzzles).\\nПостачальник: Focus Apps / Eyewind\\nДата випуску: 28 серпня 2019 року","buttonText":"Завантажити гру","tags":["головоломка","хитрощі","IQ"]},{"id":89,"title":"Mekorama","url":"https://play.google.com/store/apps/details?id=com.martinmagni.mekorama","snippet":"Проведіть маленького робота через красиві механічні діорами, вирішуючи просторові загадки.\\nПостачальник: Мартин Магні (Martin Magni)\\nДата випуску: 14 лютого 2016 року","buttonText":"Завантажити гру","tags":["головоломка","роботи","3D"]},{"id":90,"title":"Lara Croft GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.lcgo","snippet":"Покрокова головоломка-пригода у світі Tomb Raider з чудовим візуалом.\\nПостачальник: Square Enix Montréal\\nДата випуску: 27 серпня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","пригоди","покрокова"]},{"id":91,"title":"Hitman GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.hitmango","snippet":"Стилізована під настільну гру покрокова стратегія-головоломка зі стелс-елементами.\\nПостачальник: Square Enix Montréal\\nДата випуску: 17 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","стелс","тактика"]},{"id":93,"title":"The Talos Principle","url":"https://store.steampowered.com/app/257510/The_Talos_Principle/","snippet":"Глибока філософська гра-головоломка від першої особи, де ви вирішуєте завдання зі світлом та лазерами.\\nПостачальник: Croteam / Devolver Digital\\nДата випуску: 11 грудня 2014 року","buttonText":"Дивитися в Steam","tags":["головоломка","філософія","sci-fi"]},{"id":95,"title":"Myst","url":"https://store.steampowered.com/app/1255560/Myst/","snippet":"Класична пригодницька головоломка, де вам потрібно розгадати таємниці загадкового острова.\\nПостачальник: Cyan Worlds (Робін та Ренд Міллер)\\nДата випуску: 24 вересня 1993 року","buttonText":"Дивитися в Steam","tags":["головоломка","квест","класика"]},{"id":96,"title":"Wordscapes","url":"https://play.google.com/store/apps/details?id=com.peoplefun.wordcross","snippet":"Головоломка зі словами, яка поєднує пошук слів та кросворд.\\nПостачальник: PeopleFun\\nДата випуску: 19 червня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","слова","кросворд"]},{"id":97,"title":"CodyCross","url":"https://play.google.com/store/apps/details?id=com.fanatee.cody","snippet":"Новий погляд на кросворди з цікавими фактами та гарним дизайном.\\nПостачальник: Fanatee Games\\nДата випуску: 8 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","кросворд","ерудиція"]},{"id":98,"title":"Darkness and Flame 3: The Dark Side","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":99,"title":"100 Doors Games: Escape from School","url":"https://play.google.com/store/apps/details?id=com.Peaksel.OneHundredDoorsGamesEscapeFromSchool","snippet":"Розв'яжіть головоломку кожної кімнати, щоб знайти прихований ключ та відкрити двері.\\nПостачальник: Peaksel\\nДата випуску: 16 березня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","втеча","двері"]},{"id":100,"title":"Tangle Master 3D","url":"https://play.google.com/store/apps/details?id=com.zynga.tangle","snippet":"Просторова головоломка, у якій потрібно розплутати вузли та мотузки.\\nПостачальник: Rollic Games / Zynga\\nДата випуску: 1 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","вузли","3D"]},{"id":101,"title":"Block Puzzle","url":"https://play.google.com/store/apps/details?id=block.puzzle.game.tetris.classic","snippet":"Класична головоломка з дерев'яними блоками в стилі тетріс, без обмежень у часі.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","блоки","релакс"]},{"id":102,"title":"Sudoku.com","url":"https://sudoku.com/uk","snippet":"Один з найпопулярніших сайтів та додатків для вирішення класичного судоку з підказками.\\nПостачальник: Uanet / Gismeteo","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":103,"title":"Mahjong Solitaire","url":"https://play.google.com/store/apps/details?id=com.mobilityware.MahjongSolitaire","snippet":"Класична головоломка на зіставлення однакових плиток маджонгу, щоб очистити дошку.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","маджонг","настільна"]},{"id":104,"title":"Darkness and Flame 4: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":105,"title":"Knotwords","url":"https://play.google.com/store/apps/details?id=com.noodlecake.knotwords","snippet":"Унікальна комбінація судоку та кросворда, де літери розташовані в блоках.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","слова","логіка"]},{"id":106,"title":"Lost Lands 1: Dark Overlord","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands1.free","snippet":"Щось потягло вашого сина в портал! Рушайте на його пошуки в повні загадок Загублені Землі!\\nЗагублені Землі. Темний Владика - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про незвичайний фентезійний світ, повний незвіданих куточків і таємничих мешканців.\\nМолода мати з сином збиралися їхати з літнього будиночка в лісі. Сьюзан всього на секунду відволіклася на телефонний дзвінок. Тим часом її син, який грав неподалік, почув дивні голоси і відправився шукати джерело звуку. Коли Сьюзан помітила що відбувається, Джиммі вже затягувало в портал. Тепер Сьюзан необхідно знайти прохід в цей дивовижний світ і відшукати сина. Все виявиться набагато складніше і небезпечніше, ніж вона могла припустити. На своєму шляху Сьюзан зіткнеться з безліччю загадок і головоломок, зустріне незвичайних мешканців Загублених Земель, також їй будуть протистояти сили зла. Щоб повернути Джиммі їй доведеться перемогти Темного Владику, який тримає в страху весь світ!\\nЧи зможе відчайдушна мати врятувати сина і звільнити цілий світ від зла?\\nПостачальник: 5bn games\\nДата випуску: 24 вер. 2018 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":107,"title":"Lost Lands 2: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":108,"title":"Darkness and Flame 1: Born of Fire","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf1.free","snippet":"Незвичайна знахідка змінює життя дівчини. З цієї миті Еліс долучається до вічної боротьби Темряви та Полум'я і повинна врятувати свій фентезійний світ від знищення.\\nТемрява та полум'я: Породжений вогнем – пригодницька гра-квест із пошуком предметів, міні-іграми й замороками, що розповідає про незвичайний фентезійний світ – Родючі землі – оазиси у нескінченних пустелях.\\nМолода дівчина Еліс знайшла дивну скриньку з яйцем, з якого з'явився вогненний птах і, ніби, вселився в дівчину, залишивши випалений малюнок на руці, сама ж дівчина при цьому посивіла. Із цієї миті Еліс стає залученою у вічну боротьбу Темряви й Полум'я. За дівчиною почалося полювання – невідомі солдати розшукували її, батько зміг уберегти Еліс від них, але це коштувало йому життя. Дівчині довелося покинути свій будинок і відправитися до єдиної рідної людини – дядька, про існування якого вона тільки що довідалася. Разом їм треба буде пройти безліч випробувань у різних куточках Родючих Земель, зустрітися з незвичайними народами й расами, уникнути небезпеки, що наближається, розв'язати безліч заморок і зіштовхнутися з великим злом, що загрожує всьому їх фентезійному світу. Чи зможе Еліс приборкати силу полум'я, даровану їй долею, і врятувати свої землі від перетворення в пустелю смерті?\\n• Пориньте в дивну пригоду у фентезійному світі\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч заморок\\n• Приборкайте силу Полум'я\\n• Врятуйте мир від нищівної для всього живого погрози\\nДосліджуйте більш за 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігр\\nВиявіть кмітливість в інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення\\nЦя гра оптимізована для планшетів та телефонів!\\n+++ Відкрийте для себе ще більше ігор від FIVE-BN GAMES! +++\\nWWW: https://fivebngames.com/\\nFACEBOOK: https://www.facebook.com/fivebn/\\nTWITTER: https://twitter.com/fivebngames\\nYOUTUBE: https://youtube.com/fivebn\\nPINTEREST: https://pinterest.com/five_bn/\\nINSTAGRAM: https://www.instagram.com/five_bn/\\nПостачальник: 5bn games\\nДата випуску:12 квіт. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":109,"title":"Darkness and Flame 2: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":110,"title":"The Legacy 1: Realm of Retribution","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl1.free","snippet":"Детективний квест-головоломка від 5BN: розгадайте таємницю старовинного майяського артефакту в музеї.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":111,"title":"The Legacy 2: Prisoner","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl2.free","snippet":"Пошук зниклого музейного експоната приводить у зовсім інший світ! Захоплююча подорож в атмосфері прадавньої цивілізації.\\n'Спадщина: Бранець' – пригодницька гра в жанрі 'Пошук предметів', з величезним числом захоплюючих міні-ігор і головоломок, яка захопить вас у незвіданий світ і закрутить у вирі подій!\\nПобачивши силует, що ховається вдалечині, охоронця, який несе найрідший бюст представника цивілізації майя, Діана, молода співробітниця історичного музею, ринулася слідом. У результаті погоні події пішли зовсім не за планом! Дівчина - уже не вперше - виявляється в іншому світі. І шлях назад закритий!.. Довідайтеся, хто допоможе Діані впоратися з усіма випробуваннями, що випали на її долю. Пройдіть із ними весь шлях до кінця! Щоб урятувати в'язня прадавнього храму й вибратися з далекого світу додому, Діані доведеться виконати ряд небезпечних завдань, дослідити храми й підземелля, провести прадавні ритуали й знайти несподіваних друзів, готових прийти їй на допомогу! Вас чекає незабутня подорож!\\nДопоможіть Діані подолати труднощі й знайти вірну дорогу додому!\\nВідкрийте для себе новий, загадковий світ і його мешканців!\\nВипробуйте себе в більш ніж 40 міні-іграх і головоломках.\\nЗберіть безліч колекцій і відшукайте десятки морфінг-об'єктів.\\nНасолоджуйтеся приголомшливими локаціями, чудовою графікою й відмінною музикою.\\nДата випуску: 20 трав. 2019 р.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":112,"title":"New York Mysteries 1: Secrets of the Mafia","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym1.free","snippet":"Смілива журналістка, Лора Джеймс, починає власне розслідування таємничих зникнень босів мафії та пропажі дітей, що послідувала за ними.\\nЗагадки Нью-Йорка. Секрети Мафії – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, що розповідає про містичне детективне розслідування, мафіозні таємниці й загадках Нью-Йорка.\\nНью-Йорк, 1955 рік. У місті стало небезпечно. Мафія намагається захопити владу. Але віднедавна з'явилася нова сила. І вона на багато страшніша. За останні дні, п'ять мафіозних босів зникли при загадкових обставинах. На місцях зникнення знаходили лише дивну рідину й метелика. Але не це налякало жителів... У місті стали зникати діти. Усі вони намалювали таких самих метеликів перед зникненням. Лора Джеймс, журналіст «Дейлі Ньюз», починає власне розслідування. Які похмурі таємниці приховують тунелі метро під містом? Чи зможе героїня здолати усі перешкоди та врятувати зниклих.\\nПостачальник: 5bn games\\nДата випуску:24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":113,"title":"New York Mysteries 2: High Voltage","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym2.free","snippet":"Розслідуйте серію дивних убивств у Нью-Йорку, пов'язаних із загадковими електричними аномаліями.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":114,"title":"New York Mysteries 3: The Lantern of Souls","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym3.free","snippet":"Журналістка Лора Джеймс залучається до розслідування чергового вбивства. Однак звичайна, на перший погляд, справа починає набирати небезпечних обертів.\\nЗагадки Нью-Йорка. Ліхтар душ – пригодницька гра-квест з пошуком предметів, міні-іграми й головоломками, що розповідає про нове, небезпечне, містичне детективне розслідування сміливого журналіста Лори Джеймс.\\nНовий епізод жахливої саги переносить вас у Нью-Йорк кінця 50-х років. У заміському маєтку відбувається жорстоке вбивство вдови впливового адвоката. За завданням таємного ордену журналіст газети «Дейлі Ньюз» Лора Джеймс їде на місце злочину. На перший погляд, все виглядає як звичайний розбійний напад. Однак, обшук у будинку загиблої дає несподіваний результат. Небезпека підстерігає героїню на кожному кроці. Хитромудрі пастки і головоломки, таємниці з минулого й містична Темрява, що охопила місто. Чи зможе героїня опанувати те, що відбувається, і врятувати не тільки Нью-Йорк, але і весь світ від катастрофи, що наближається?\\nПостачальник: 5bn games\\nДата випуску:29 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":116,"title":"New York Mysteries 5: Power of Art","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym5.free","snippet":"Викрадені картини оживають: розгадайте таємницю магічного мистецтва у новій частині серії від 5BN. (Поки що остання...)\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":117,"title":"Tricky Doors","url":"https://play.google.com/store/apps/details?id=com.fivebn.trickydoors","snippet":"Атмосферна гра-головоломка від 5BN Games у жанрі «втеча з кімнати» з різноманітними світами, захоплюючими схованками та складними міні-іграми.","buttonText":"Завантажити гру","tags":["головоломка","втеча","5bn","квест"]},{"id":118,"title":"Tiny Room Stories: Town Mystery","url":"https://play.google.com/store/apps/details?id=com.DrunkData.TinyRoom","snippet":"Чудова 3D-головоломка в стилі «втеча з кімнати»: повертайте деталізовані рівні для пошуку підказок.","buttonText":"Завантажити гру","tags":["головоломка","детектив","3d","втеча"]},{"id":120,"title":"Coolors","url":"https://coolors.co/","snippet":"Сучасний та супершвидкий генератор колірних палітр для розробників і дизайнерів з можливістю підбору гармонійних поєднань та експорту в CSS або SVG.","buttonText":"Згенерувати палітру","tags":["дизайн","інструменти","палітра","веб"]},{"id":121,"title":"Agent A: A puzzle in disguise","url":"https://play.google.com/store/apps/details?id=com.yakandco.agenta","snippet":"Шпигунська головоломка у стилі 60-х: проникніть у таємне лігво ворожого агента і знешкодьте пастки.","buttonText":"Завантажити гру","tags":["головоломка","шпигуни","квест","стиль"]},{"id":122,"title":"Adventure Escape Mysteries","url":"https://play.google.com/store/apps/details?id=com.haiku.adventure.escape.mysteries","snippet":"Збірник інтерактивних детективних історій та головоломок від Haiku Games.","buttonText":"Завантажити гру","tags":["головоломка","детектив","квест","історія"]},{"id":123,"title":"Spot the Difference: Find 5","url":"https://play.google.com/store/apps/details?id=com.easybrain.find.differences","snippet":"Класична головоломка на уважність: знайдіть усі відмінності між двома схожими картинками.","buttonText":"Завантажити гру","tags":["головоломка","уважність","пошук"]},{"id":124,"title":"Sudoku - Brain Puzzle Games","url":"https://play.google.com/store/apps/details?id=com.easybrain.sudoku.android","snippet":"Один із найзручніших мобільних додатків для вирішення класичних судоку будь-якої складності.","buttonText":"Завантажити гру","tags":["головоломка","судоку","числа"]},{"id":125,"title":"Nonogram.com - Picture Cross","url":"https://play.google.com/store/apps/details?id=com.easybrain.nonogram","snippet":"Японські кросворди: розгадуйте зашифровані картинки за допомогою логічних підказок.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","числа"]},{"id":126,"title":"Brain Test: Tricky Puzzles","url":"https://play.google.com/store/apps/details?id=com.unicostudio.braintest","snippet":"Захоплююча головоломка з хитрими завданнями та кумедними нестандартними рішеннями.","buttonText":"Завантажити гру","tags":["головоломка","гумор","iq"]},{"id":127,"title":"Rube's Lab - Physics Puzzle","url":"https://play.google.com/store/apps/details?id=com.bouland.rubeslab","snippet":"Фізична головоломка в стилі машин Руба Ґолдберга: будуйте ланцюгові реакції.","buttonText":"Завантажити гру","tags":["головоломка","фізика","механізми"]},{"id":128,"title":"Human Resource Machine","url":"https://play.google.com/store/apps/details?id=com.tomorrowcorporation.humanresourcemachine","snippet":"Весела головоломка, яка навчає базовим принципам програмування через офісну рутину.","buttonText":"Завантажити гру","tags":["головоломка","програмування","код"]},{"id":129,"title":"Bridge Constructor","url":"https://play.google.com/store/apps/details?id=com.headupgames.bridgeconstructor","snippet":"Станьте інженером: будуйте мости через прірви та перевіряйте їх на міцність.","buttonText":"Завантажити гру","tags":["головоломка","будівництво","фізика"]},{"id":130,"title":"Shadowmatic","url":"https://play.google.com/store/apps/details?id=com.triadaal.shadowmatic","snippet":"Оскароносна головоломка: повертайте абстрактні предмети в променях світла, щоб отримати тінь.","buttonText":"Завантажити гру","tags":["головоломка","3d","тіні","релакс"]},{"id":131,"title":"Unpacking","url":"https://play.google.com/store/apps/details?id=com.humblebundle.unpacking","snippet":"Затишна медитативна головоломка про розпакування коробки та облаштування будинку.","buttonText":"Завантажити гру","tags":["головоломка","затишок","релакс"]},{"id":132,"title":"Layovers: World Map Puzzle","url":"https://geoguessr.com/","snippet":"Перевірте свої географічні знання у формі візуальних загадок та інтерактивних мап.","buttonText":"Грати онлайн","tags":["головоломка","географія","знання"]},{"id":133,"title":"Worldle","url":"https://worldle.teuteuf.fr/","snippet":"Щоденна географічна головоломка: вгадайте країну за її контуром та відстанями.","buttonText":"Грати онлайн","tags":["головоломка","географія","слова"]},{"id":134,"title":"Wordle - Official NYT","url":"https://www.nytimes.com/games/wordle/index.html","snippet":"Оригінальна всесвітньо відома гра: вгадайте англійське слово з 5 літер за 6 спроб.","buttonText":"Грати онлайн","tags":["головоломка","слова","англійська"]},{"id":135,"title":"Picross LUNA","url":"https://play.google.com/store/apps/details?id=com.Floralmind.PicrossLuna","snippet":"Атмосферні та казкові японські кросворди зі зворушливою історією та чудовою музикою.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","казка"]},{"id":136,"title":"Remove.bg","url":"https://www.remove.bg/","snippet":"Безкоштовний онлайн-інструмент для автоматичного видалення фону з будь-якого фото за 5 секунд.","buttonText":"Видалити фон","tags":["інструменти","фото","дизайн"]},{"id":137,"title":"ILovePDF","url":"https://www.ilovepdf.com/uk","snippet":"Повний набір безкоштовних інструментів для роботи з PDF: об'єднання, стиснення, конвертація.","buttonText":"Працювати з PDF","tags":["інструменти","документи","pdf"]},{"id":138,"title":"TinyPNG","url":"https://tinypng.com/","snippet":"Розумне стиснення зображень форматів WEBP, PNG та JPEG без втрати якості.","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":139,"title":"FixMySpeakers","url":"https://fixmyspeakers.com/","snippet":"Відтворює спеціальний звук конкретної частоти, щоб виштовхнути воду з динаміка вашого смартфона.","buttonText":"Очистити динамік","tags":["інструменти","смартфон","звук"]},{"id":140,"title":"Radio Garden","url":"http://radio.garden/","snippet":"Інтерактивний 3D-глобус, який дозволяє слухати тисячі прямих трансляцій радіостанцій по всьому світу.","buttonText":"Слухати радіо","tags":["музика","мапа","радіо"]},{"id":141,"title":"MyRetroTVs","url":"https://www.myretrotvs.com/","snippet":"Віртуальний телевізор, який транслює справжні відеоролики, телешоу та рекламу 60-х, 70-х, 80-х чи 90-х років.","buttonText":"Ввімкнути ТВ","tags":["ностальгія","відео","історія"]},{"id":142,"title":"PDF2Go","url":"https://www.pdf2go.com/uk","snippet":"Онлайн-редактор та конвертер PDF-файлів прямо у вашому браузері.","buttonText":"Редагувати PDF","tags":["інструменти","pdf","документи"]},{"id":143,"title":"MyHeritage Deep Nostalgia","url":"https://www.myheritage.com/deep-nostalgia","snippet":"Сервіс на основі штучного інтелекту, який оживляє обличчя на старих архівних фотографіях.","buttonText":"Оживити фото","tags":["ші","фото","історія"]},{"id":144,"title":"Have I Been Pwned","url":"https://haveibeenpwned.com/","snippet":"Перевірте, чи потрапляла ваша електронна пошта або пароль у відомі бази даних витоків інформації.","buttonText":"Перевірити пошту","tags":["безпека","приватність","інструменти"]},{"id":145,"title":"Privnote","url":"https://privnote.com/","snippet":"Створюйте текстові нотатки, які самознищуються одразу після того, як їх прочитає отримувач.","buttonText":"Створити записку","tags":["безпека","приватність","текст"]},{"id":146,"title":"NaturalReaders","url":"https://www.naturalreaders.com/","snippet":"Перетворення будь-якого тексту на природне озвучення штучним інтелектом.","buttonText":"Озвучити текст","tags":["ші","звук","інструменти"]},{"id":147,"title":"Neko-City (NekoWeb)","url":"https://nekoweb.org/","snippet":"Майданчик для створення та перегляду затишних персональних веб-сайтів у дусі інтернету 2000-х.","buttonText":"Дослідити","tags":["веб","ретро","натхнення"]},{"id":148,"title":"10 Minute Mail","url":"https://10minutemail.com/","snippet":"Тимчасова електронна пошта, яка знищується через 10 хвилин. Ідеально для швидких реєстрацій.","buttonText":"Отримати пошту","tags":["безпека","пошта","інструменти"]},{"id":149,"title":"Befunky","url":"https://www.befunky.com/","snippet":"Простий онлайн-фоторедактор, графічний дизайнер та майстер створення колажів.","buttonText":"Редагувати","tags":["дизайн","фото","колаж"]},{"id":150,"title":"Gridzzly","url":"https://gridzzly.com/","snippet":"Створюйте та роздруковуйте власний сітчастий, лінійний або крапковий папір для нотаток.","buttonText":"Створити аркуш","tags":["інструменти","друк","організація"]},{"id":151,"title":"Ninite Pro & Tools","url":"https://ninite.com/","snippet":"Безпечне встановлення декількох популярних додатків одночасно без рекламного сміття.","buttonText":"Вибрати програми","tags":["софт","windows","інструменти"]},{"id":152,"title":"CleanPNG","url":"https://www.cleanpng.com/","snippet":"Безкоштовна база з мільйонів PNG-зображень із прозорим фоном для дизайну.","buttonText":"Шукати PNG","tags":["дизайн","ресурси","картинки"]},{"id":153,"title":"FutureMe","url":"https://www.futureme.org/","snippet":"Напишіть лист самому собі у майбутнє, який прийде на вашу пошту через 1, 3 або 5 років.\\nНапишеш, що це Доміно заставив тебе це зробити, майбутньому я :)","buttonText":"Написати собі","tags":["розваги","саморозвиток","листя"]},{"id":154,"title":"Asoftmurmur","url":"https://asoftmurmur.com/","snippet":"Генератор фонових звуків природи (дощ, вітер, костер) для концентрації або сну.","buttonText":"Слухати фонограму","tags":["релакс","продуктивність","звуки"]},{"id":155,"title":"Soundraw AI","url":"https://soundraw.io/","snippet":"Генератор фонової музики без авторських прав за допомогою штучного інтелекту.\\nПотап написав для нас безкоштовно пісню, але Кейт не сподобалось. Слухаймо: «Ні-на-не-ну-ла-шу, ко-ла-ві-ка-цу» — за 3 секунди шедевр!","buttonText":"Згенерувати трек","tags":["ші","музика","креатив"]},{"id":156,"title":"Стихія","images":["castle"],"url":"https://stuxia.com/","snippet":"Саморекламування на своєму сайті :) Ви ж вже на найдивнішому сайті серед усіх! Працює із видіння Доміно :)\\nПостачальник: TheTurkeyStudio (Бундюча студія)","buttonText":"Ви ж вже тут :)","tags":["погода","музика","хаос"]},{"id":157,"title":"Ніцерон (Динофроз)","url":"https://megogo.net/ua/view/1812091-dinofroz.html","snippet":"Ми не могли його впустити додаючи нашу базу даних, нашого пошуковика :)\\nЄдиний лінк не на гру і додаток(сайт)\\nПостачальник: Mondo TV","buttonText":"Ностальгія...","tags":["дракони","динозаври","Ніцерон"]},{"id":158,"title":"Dragon Village 3","url":"https://play.google.com/store/apps/details?id=com.highbrow.games.dvo&hl=uk","icon":"https://play-lh.googleusercontent.com/xkwb3p2V6SkaxRq3uC_NM3n_tkw_UOcfe6uw75plux3o-e_XiY5Ixis8HTfjjix0U14HMqIbVNICs8IoVRFs=s48","snippet":"Офіційне продовження Dragon Village через 12 років\\nШкода що Діма Комаров не заїхав в Корею, сувенір пов'яний з грою привіз би :)\\n\\nПостачальник: Highbrow","buttonText":"Збереш усіх драконів? :)","tags":["сюжет","стратегія","дракони"],"images":["village"]},{"id":159,"title":"Меридіан 157: Пролог","youtubeTrailer":"https://www.youtube.com/watch?v=pXW52EZI0vY","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.games.meridian157prologue&hl=uk","icon":"https://play-lh.googleusercontent.com/Rkk66wnDj2v-pe86uw-0GsZuHCBvc8DyeOj53pHHLfC318Shb5m8ebOVIBR6Wt3Jl_GzqcHtPeOQf32zol4Wcw=s48","snippet":"Meridian 157: Розділи 1, 2 та 3 офіційно випущені! Завантажте їх зараз на Google Play! Meridian 157: Prologue – це гра-головоломка типу «вкажи та клацни», що зосереджена на захопливих головоломках, захопливій візуальній складовій та захопливому сюжеті. Це перша частина серії Meridian 157, де ви граєте за детектива Девіда Зандера, який розслідує таємничу погодну аномалію в північній частині Тихого океану. Використовуйте свою кмітливість, щоб розгадувати головоломки та долати перешкоди, щоб знайти шлях глибше на острів, щоб розкрити та знайти таємницю загубленого острова на 157-му меридіані!\\nШкола виживання для любителів закинутих об'єктів та таємничих бункерів :)\\nПостачальник: NovaSoft Interactive","buttonText":"Розгадаєш таємницю об'єкту F.L.A.R.E?","tags":["аномалії","головоломки","хоррор"]},{"id":160,"title":"Excalidraw","url":"https://excalidraw.com/","snippet":"Зручна віртуальна дошка для швидкого створення схем, діаграм та начерків у стилі малюнка від руки.\\nЯ знав, що уроки кресленння, щось від мене приховують :)\\nПостачальник: Uanet / Gismeteo","buttonText":"Малювати схему","tags":["інструменти","дизайн","схеми"]},{"id":161,"title":"Горох (Словник)","url":"https://goroh.pp.ua/","snippet":"Сучасна онлайн-бібліотека українських словників: тлумачний, етимологічний, словозміна та синоніми.\\nЯкий оригінальний по імені постачальник...\\nПостачальник: Проєкт «Горох»","buttonText":"Шукати слово","tags":["мова","словник","освіта"]},{"id":162,"title":"Lost Lands 3: The Golden Curse","url":"https://play.google.com/store/apps/details?id=com.fivebn.ll3.f2p&hl=uk","icon":"https://play-lh.googleusercontent.com/v2xe4z9VMItjJ99omnJZLhQkKRjeL4YXAK29IeQv5uBrcByCPaneCKHVnPfwzF73agm6Xrp6waRN31ttqDdqMQ=s48","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася у фентезійному світі. Їй доведеться боротися проти демонів, які перебули у скам'янілому стані останнє тисячоріччя та й знову відродилися по незрозумілій причині.\\n«Загублені Землі. Прокляте золото» – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, розкиданими на безкрайніх просторах фентезійного світу: від долини вулканів до друїдового лісу, від глибокого підземелля до ширяючих островів.\\nПроста миловидна домогосподарка Сьюзан одного чудового дня, відвідавши музей мистецтв, натикається на стародавнє дзеркало, яке раптом невідомим образом починає вабити Сьюзан до себе. Та доторкається до дзеркала й миттєво переноситься у фентезійний казковий світ Загублених Земель. Отут за свої колишні подвиги вона вже давно відома всім, як Сьюзан-Войовниця.\\nСьюзан зустрічає маленьку дівчинку Фіору, яка відводить її в село до свого прадіда Маарону. У ньому Сьюзан впізнає свого старого знайомого друїда. Маарон розповідає, що на їхнє село напала Гарпія – крилатий демон з легенд. Але саме дивне те, що цей демон останню тисячу років стояв у вигляді кам'яної статуї в одному старому занедбаному форті.\\nРазом зі своїми друзями Сьюзан має бути відправитися в жерло вулкана, спуститися в підземелля й піднятися на ширяючі острови для того, щоб зрозуміти, чому Гарпія, Мінотавр, Нага й Солідус, один за іншим, почали звільнятися з «кам'яного полону» і вчиняти в Загублених Землях хаос. І, звичайно, усіх їх потрібно зупинити...\\nПостачальник: 5bn games\\nДата випуску: 24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":163,"title":"Lost Lands 4: The Wanderer","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":164,"title":"Lost Lands 5: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":165,"title":"Lost Lands 6: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":166,"title":"Lost Lands 7: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":167,"title":"Lost Lands 8: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":168,"title":"Meridian 157: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":169,"title":"Meridian 157: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":170,"title":"Meridian 157: Chapter 3","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":171,"title":"Lost Lands 10","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":172,"title":"Lost Lands 11: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":173,"title":"Dragon Village","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":174,"title":"Dragon Village M","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":175,"title":"Dragon Village Collection","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":176,"title":"Legacy 3: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":177,"title":"The Room 2","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=soyeCXKQ6_Q","snippet":"Ласкаво просимо до The Room Two, фізичної головоломки, загорнутої в таємничу гру, у чудовому тактильному 3D-світі.\\nДовгоочікуване продовження фільму «Кімната», який отримав премію BAFTA, нарешті з’явилося.\\nПройдіть слідом загадкових листів від загадкового вченого, відомого лише як AS, у захоплюючий світ таємниць і досліджень.\\n*******************************************************************************************************************\\n«Неймовірно захоплюючий досвід із розумними головоломками, чудовими візуальними ефектами та моторошною атмосферою; абсолютно переповнений новими ідеями». – Грань\\n«Складно сплетений художній твір, ідеально підходить для свого формату, це та гра, заради якої варто сидіти в темряві». - Кишеньковий гравець\\nЧудова гра, що пропонує великі локації з кількома інтерактивними областями та головоломками. Ідеальна гра для холодної зимової ночі. – Єврогеймер\\n«Змушує вас думати про те, як розв’язувати головоломки, навіть коли ви не граєте; ознака класної гри, якою це безперечно є». – 148 додатків\\nЧудове продовження з приголомшливими візуальними ефектами, рівень складності, який тут представлений, вражає. Друга кімната має бути на першому місці у вашому списку ігор. - GSM Арена\\n*******************************************************************************************************************\\nІНФОРМАЦІЙНИЙ ДИЗАЙН\\nЛегко розпочати, важко відірватися, захоплююче поєднання інтригуючих головоломок із простим інтерфейсом користувача\\nІННОВАЦІЙНЕ СЕНСОРНЕ УПРАВЛІННЯ\\nТактильний досвід настільки природний, що ви можете майже відчути поверхню кожного предмета\\nРЕАЛІСТИЧНІ 3D ЛОКАЦІЇ\\nПориньте в різноманітні приголомшливі середовища, які випробуватимуть вашу майстерність розгадувати головоломки.\\nДЕТАЛІЗОВАНІ 3D ОБ'ЄКТИ\\nВникайте в складні деталі десятків артефактів у пошуках їхніх прихованих секретів.\\nНЕРВУЮЧИЙ АУДІО\\nЗахоплюючий саундтрек і динамічні звукові ефекти створюють звуковий ландшафт, який реагує на вашу гру.\\nТЕПЕР ПІДТРИМУЄТЬСЯ ЗБЕРЕЖЕННЯ В ХМАРІ\\nПоділіться своїм прогресом між кількома пристроями та розблокуйте абсолютно нові досягнення.\\nПІДТРИМКА КІЛЬКОХ МОВ\\nДоступно англійською, французькою, італійською, німецькою, іспанською, бразильською та португальською мовами.\\n*******************************************************************************************************************\\nFireproof Games — це невелика незалежна студія, розташована в Гілфорді у Великобританії.\\nДізнайтеся більше на fireproofgames.com\\nСлідкуйте за нами @Fireproof_Games.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":178,"title":"The Room 3","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","youtubeTrailer":"https://www.youtube.com/watch?v=NaZ2DiDH4i0","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":179,"title":"The Room: Old Sins","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"Увійдіть у The Room: Old Sins і перенесіться в місце, де тактильне дослідження зустрічається зі складними головоломками та захоплюючою історією.\\nРаптове зникнення амбітного інженера та його світської дружини провокує полювання на дорогоцінний артефакт. Стежка веде на горище їхнього дому, де знаходять старий, незвичайний ляльковий будиночок...\\nДосліджуйте тривожні місця, дотримуйтесь незрозумілих підказок і маніпулюйте химерними пристосуваннями, розкриваючи таємниці садиби Волдегрейв.\\nВід себе: Хоч ця серія ігор і платна, але навряд її хтось переплюне...\\nПостачальник: Fireproof Games\\nДата випуску: 18 квітня 2018 рік.","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":180,"title":"Regex101","url":"https://regex101.com/","snippet":"Онлайн-інструмент для тестування, налагодження та аналізу регулярних виразів з детальними поясненнями.\\nПостачальник: Firas Dib\\nДата випуску: 2013 рік","buttonText":"Тестувати Regex","tags":["it","програмування","інструменти"]},{"id":181,"title":"DevDocs","url":"https://devdocs.io/","snippet":"Швидкий та зручний навігатор по документації десятків мов програмування та фреймворків в єдиному інтерфейсі.\\nПостачальник: FreeCodeCamp / Thibaut Courouble\\nДата випуску: 2013 рік","buttonText":"Читати документацію","tags":["it","програмування","довідник"]},{"id":182,"title":"CSS Gradient","url":"https://cssgradient.io/","snippet":"Зручний генератор градієнтів для CSS з візуальним редактором та можливістю копіювання коду в один клік.\\nПостачальник: Designmodo\\nДата випуску: 2017 рік","buttonText":"Створити градієнт","tags":["дизайн","веб","інструменти"]},{"id":183,"title":"Coolors","url":"https://coolors.co/","snippet":"Надшвидкий генератор колірних палітр для дизайнерів та розробників з можливістю збереження та експорту.\\nПостачальник: Fabrizio Bianchi\\nДата випуску: 2014 рік","buttonText":"Підібрати кольори","tags":["дизайн","палітра","інструменти"]},{"id":184,"title":"Carbon","url":"https://carbon.now.sh/","snippet":"Створюйте та поширюйте красиві зображення вашого сирцового коду для презентацій та соціальних мереж.\\nПостачальник: Dawn Labs\\nДата випуску: 2017 рік","buttonText":"Оформити код","tags":["it","дизайн","код"]},{"id":185,"title":"JSON Crack","url":"https://jsoncrack.com/","snippet":"Інструмент для візуалізації складних JSON-структур у вигляді зрозумілих та інтерактивних граф-схем.\\nПостачальник: Aykut Saraç\\nДата випуску: 2022 рік","buttonText":"Візуалізувати JSON","tags":["it","інструменти","json"]},{"id":186,"title":"SVGOMG","url":"https://jakearchibald.github.io/svgomg/","snippet":"Зручний веб-інтерфейс для оптимізації та стиснення векторних SVG-файлів без втрати якості.\\nПостачальник: Jake Archibald\\nДата випуску: 2015 рік","buttonText":"Оптимізувати SVG","tags":["веб","оптимізація","дизайн"]},{"id":187,"title":"CodePen","url":"https://codepen.io/","snippet":"Онлайн-середовище для тестування, демонстрації та обміну HTML, CSS і JavaScript кодом у реальному часі.\\nПостачальник: Alex Vazquez, Tim Sabat, Chris Coyier\\nДата випуску: 2012 рік","buttonText":"Створювати пени","tags":["it","веб","програмування"]},{"id":188,"title":"Supercook","url":"https://www.supercook.com/","snippet":"Генератор рецептів, який підбирає страви на основі списку продуктів, що вже є у вашому холодильнику.\\nПостачальник: Assaf Rozenblatt\\nДата випуску: 2010 рік","buttonText":"Знайти рецепт","tags":["кулінарія","інструменти","корисно"]},{"id":189,"title":"PrintFriendly","url":"https://www.printfriendly.com/","snippet":"Очищає веб-сторінки від реклами та зайвих елементів для зручного друку або збереження в PDF.\\nПостачальник: Taylor Robinson\\nДата випуску: 2009 рік","buttonText":"Підготувати до друку","tags":["інструменти","pdf","друк"]},{"id":190,"title":"Musicca","url":"https://www.musicca.com/uk","snippet":"Безкоштовна платформа для вивчення теорії музики, нотної грамоти та гри на віртуальних інструментах.\\nПостачальник: Musicca International\\nДата випуску: 2019 рік","buttonText":"Вчити музику","tags":["музика","освіта","навчання"]},{"id":191,"title":"Lucide Icons","url":"https://lucide.dev/","snippet":"Красивий, послідовний та відкритий набір іконок для сучасних вебдодатків та інтерфейсів.\\nПостачальник: Lucide Open Source Community\\nДата випуску: 2021 рік","buttonText":"Шукати іконки","tags":["дизайн","веб","іконки"]},{"id":192,"title":"Squoosh","url":"https://squoosh.app/","snippet":"Просунутий онлайн-компресор зображень від Google з можливістю порівняння форматів та якості в реальному часі.\\nПостачальник: Google Chrome Labs\\nДата випуску: 2018 рік","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":193,"title":"Type Lit","url":"https://www.typelit.io/","snippet":"Тренажер сліпого друку, де ви практикуєтеся у швидкості набору, передруковуючи класичні художні книги.\\nПостачальник: TypeLit Team\\nДата випуску: 2020 рік","buttonText":"Тренувати друк","tags":["навчання","тренажер","книги"]},{"id":194,"title":"Ray.so","url":"https://ray.so/","snippet":"Створюйте вражаючі та стильні скріншоти коду з градієнтним фоном для соціальних мереж та портфоліо.\\nПостачальник: Raycast\\nДата випуску: 2021 рік","buttonText":"Згенерувати картку","tags":["it","дизайн","інструменти"]},{"id":195,"title":"Coming Soon","url":"11111Coming Soon11111","snippet":"Дні - білі\\nНочі - чорні\\nСонце - жовте\\nІндичатко - горде\\nОчікуйте оновлень...","buttonText":"Очікуйте","tags":["секрет"]}]`),k0=t=>`https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&format=json&origin=*`,j0=(t="")=>t.replace(/<span class="searchmatch">/g,"").replace(/<\/span>/g,"").trim()||"Без опису",bo=[{name:"Конотоп",fullName:"Конотоп (Сумська обл., Україна)",lat:51.24,lon:33.2,aliases:["конотоп","конотопі","конотопу","конотопом","konotop"]},{name:"Київ",fullName:"Київ (Україна)",lat:50.45,lon:30.52,aliases:["київ","києві","києва","києвом","kyiv","kiev"]},{name:"Харків",fullName:"Харків (Харківська обл., Україна)",lat:49.99,lon:36.23,aliases:["харків","харкові","харкова","харковом","kharkiv","kharkov"]},{name:"Одеса",fullName:"Одеса (Одеська обл., Україна)",lat:46.48,lon:30.72,aliases:["одеса","одесі","одеси","одесою","odesa","odessa"]},{name:"Дніпро",fullName:"Дніпро (Дніпропетровська обл., Україна)",lat:48.46,lon:35.04,aliases:["дніпро","дніпрі","дніпра","дніпром","dnipro","dnepropetrovsk"]},{name:"Львів",fullName:"Львів (Львівська обл., Україна)",lat:49.84,lon:24.03,aliases:["львів","львові","львова","львовом","lviv","lwo"]},{name:"Запоріжжя",fullName:"Запоріжжя (Запорізька обл., Україна)",lat:47.84,lon:35.14,aliases:["запоріжжя","запоріжжі","zaporizhzhia","zaporozhye"]},{name:"Кривий Ріг",fullName:"Кривий Ріг (Дніпропетровська обл., Україна)",lat:47.91,lon:33.39,aliases:["кривий ріг","кривому розі","кривого рогу","kryvyi rih"]},{name:"Миколаїв",fullName:"Миколаїв (Миколаївська обл., Україна)",lat:46.98,lon:32,aliases:["миколаїв","миколаєві","миколаєва","mykolaiv","nikolaev"]},{name:"Вінниця",fullName:"Вінниця (Вінницька обл., Україна)",lat:49.23,lon:28.48,aliases:["вінниця","вінниці","вінницею","vinnytsia","vinnitsa"]},{name:"Полтава",fullName:"Полтава (Полтавська обл., Україна)",lat:49.59,lon:34.55,aliases:["полтава","полтаві","полтави","poltava"]},{name:"Чернігів",fullName:"Чернігів (Чернігівська обл., Україна)",lat:51.49,lon:31.29,aliases:["чернігів","чернігові","чернігова","chernihiv","chernigov"]},{name:"Черкаси",fullName:"Черкаси (Черкаська обл., Україна)",lat:49.44,lon:32.06,aliases:["черкаси","черкасах","черкасів","cherkasy","cherkassy"]},{name:"Суми",fullName:"Суми (Сумська обл., Україна)",lat:50.91,lon:34.8,aliases:["суми","сумах","сум","sumy"]},{name:"Житомир",fullName:"Житомир (Житомирська обл., Україна)",lat:50.25,lon:28.66,aliases:["житомир","житомирі","житомира","zhytomyr"]},{name:"Хмельницький",fullName:"Хмельницький (Хмельницька обл., Україна)",lat:49.42,lon:27,aliases:["хмельницький","хмельницькому","khmelnytskyi"]},{name:"Рівне",fullName:"Рівне (Рівненська обл., Україна)",lat:50.62,lon:26.25,aliases:["рівне","рівному","rovno","rivne"]},{name:"Чернівці",fullName:"Чернівці (Чернівецька обл., Україна)",lat:48.29,lon:25.93,aliases:["чернівці","чернівцях","chernivtsi"]},{name:"Кременчук",fullName:"Кременчук (Полтавська обл., Україна)",lat:49.07,lon:33.42,aliases:["кременчук","кременчуці","кременчука","kremenchuk"]},{name:"Тернопіль",fullName:"Тернопіль (Тернопільська обл., Україна)",lat:49.55,lon:25.59,aliases:["тернопіль","тернополі","ternopil"]},{name:"Івано-Франківськ",fullName:"Івано-Франківськ (Івано-Франківська обл., Україна)",lat:48.92,lon:24.71,aliases:["івано-франківськ","франківськ","івано-франківську","ivano-frankivsk"]},{name:"Луцьк",fullName:"Луцьк (Волинська обл., Україна)",lat:50.75,lon:25.34,aliases:["луцьк","луцьку","lutsk"]},{name:"Біла Церква",fullName:"Біла Церква (Київська обл., Україна)",lat:49.8,lon:30.12,aliases:["біла церква","білій церкві","bila tserkva"]},{name:"Ужгород",fullName:"Ужгород (Закарпатська обл., Україна)",lat:48.62,lon:22.3,aliases:["ужгород","ужгороді","uzhhorod"]},{name:"Шостка",fullName:"Шостка (Сумська обл., Україна)",lat:51.86,lon:33.47,aliases:["шостка","шостці","shostka"]},{name:"Умань",fullName:"Умань (Черкаська обл., Україна)",lat:48.75,lon:30.22,aliases:["умань","умані","uman"]},{name:"Бердичів",fullName:"Бердичів (Житомирська обл., Україна)",lat:49.89,lon:28.58,aliases:["бердичів","бердичеві","berdychiv"]},{name:"Дрогобич",fullName:"Дрогобич (Львівська обл., Україна)",lat:49.35,lon:23.5,aliases:["дрогобич","дрогобичі","drohobych"]},{name:"Нікополь",fullName:"Нікополь (Дніпропетровська обл., Україна)",lat:47.57,lon:34.4,aliases:["нікополь","нікополі","nikopol"]},{name:"Бровари",fullName:"Бровари (Київська обл., Україна)",lat:50.51,lon:30.79,aliases:["бровари","броварах","brovary"]},{name:"Павлоград",fullName:"Павлоград (Дніпропетровська обл., Україна)",lat:48.52,lon:35.87,aliases:["павлоград","павлограді","pavlohrad"]},{name:"Сєвєродонецьк",fullName:"Сєвєродонецьк (Луганська обл., Україна)",lat:48.95,lon:38.48,aliases:["сєвєродонецьк","северодонецьк","severodonetsk"]},{name:"Бердянськ",fullName:"Бердянськ (Запорізька обл., Україна)",lat:46.76,lon:36.79,aliases:["бердянськ","бердянську","berdyansk"]},{name:"Кам'янець-Подільський",fullName:"Кам'янець-Подільський (Хмельницька обл., Україна)",lat:48.68,lon:26.58,aliases:["кам'янець-подільський","кам'янець","kamianets-podilskyi"]},{name:"Олександрія",fullName:"Олександрія (Кіровоградська обл., Україна)",lat:48.67,lon:33.11,aliases:["олександрія","олександрії","oleksandriia"]},{name:"Мукачево",fullName:"Мукачево (Закарпатська обл., Україна)",lat:48.44,lon:22.72,aliases:["мукачево","мукачеве","mukachevo"]},{name:"Кам'янське",fullName:"Кам'янське (Дніпропетровська обл., Україна)",lat:48.51,lon:34.61,aliases:["кам'янське","дніпродзержинськ","kamianske"]},{name:"Кропивницький",fullName:"Кропивницький (Кіровоградська обл., Україна)",lat:48.51,lon:32.26,aliases:["кропивницький","кіровоград","kropyvnytskyi"]},{name:"Маріуполь",fullName:"Маріуполь (Донецька обл., Україна)",lat:47.1,lon:37.54,aliases:["маріуполь","маріуполі","mariupol"]},{name:"Севастополь",fullName:"Севастополь (Крим, Україна)",lat:44.62,lon:33.53,aliases:["севастополь","севастополі","sevastopol"]},{name:"Сімферополь",fullName:"Сімферополь (Крим, Україна)",lat:44.95,lon:34.1,aliases:["сімферополь","сімферополі","simferopol"]},{name:"Херсон",fullName:"Херсон (Херсонська обл., Україна)",lat:46.64,lon:32.61,aliases:["херсон","херсоні","kherson"]},{name:"Луганськ",fullName:"Луганськ (Луганська обл., Україна)",lat:48.57,lon:39.31,aliases:["луганськ","луганську","луганська","luhansk","lugansk"]},{name:"Донецьк",fullName:"Донецьк (Донецька обл., Україна)",lat:48.01,lon:37.8,aliases:["донецьк","донеччина","донецьку","донецька","donetsk"]},{name:"Макіївка",fullName:"Макіївка (Донецька обл., Україна)",lat:48.04,lon:37.97,aliases:["макіївка","макіївці","макіївку","makiivka","makeevka"]},{name:"Горлівка",fullName:"Горлівка (Донецька обл., Україна)",lat:48.3,lon:38.05,aliases:["горлівка","горлівці","горлівку","horlivka","gorlovka"]},{name:"Краматорськ",fullName:"Краматорськ (Донецька обл., Україна)",lat:48.74,lon:37.58,aliases:["краматорськ","краматорську","краматорська","kramatorsk"]},{name:"Слов'янськ",fullName:"Слов'янськ (Донецька обл., Україна)",lat:48.85,lon:37.61,aliases:["слов'янськ","слов'янську","слов'янська","sloviansk","slavyansk"]},{name:"Мелітополь",fullName:"Мелітополь (Запорізька обл., Україна)",lat:46.85,lon:35.37,aliases:["мелітополь","мелітополі","мелітополя","melitopol"]},{name:"Бахмут",fullName:"Бахмут (Донецька обл., Україна)",lat:48.59,lon:37.99,aliases:["бахмут","бахмуті","бахмуту","артемівськ","bakhmut"]},{name:"Ізмаїл",fullName:"Ізмаїл (Одеська обл., Україна)",lat:45.35,lon:28.83,aliases:["ізмаїл","ізмаїлі","ізмаїлу","izmail"]},{name:"Ніжин",fullName:"Ніжин (Чернігівська обл., Україна)",lat:51.05,lon:31.88,aliases:["ніжин","ніжині","ніжину","nizhyn","nezhin"]},{name:"Бориспіль",fullName:"Бориспіль (Київська обл., Україна)",lat:50.35,lon:30.95,aliases:["бориспіль","борисполі","борисполя","boryspil"]},{name:"Ірпінь",fullName:"Ірпінь (Київська обл., Україна)",lat:50.52,lon:30.24,aliases:["ірпінь","ірпені","ірпеня","irpin"]},{name:"Буча",fullName:"Буча (Київська обл., Україна)",lat:50.55,lon:30.21,aliases:["буча","бучі","бучу","bucha"]},{name:"Фастів",fullName:"Фастів (Київська обл., Україна)",lat:50.08,lon:29.91,aliases:["фастів","фастові","фастова","fastiv"]},{name:"Коломия",fullName:"Коломия (Івано-Франківська обл., Україна)",lat:48.53,lon:25.04,aliases:["коломия","коломиї","коломию","kolomyia"]},{name:"Стрий",fullName:"Стрий (Львівська обл., Україна)",lat:49.26,lon:23.85,aliases:["стрий","стрию","стриї","stryi","stryy"]},{name:"Калуш",fullName:"Калуш (Івано-Франківська обл., Україна)",lat:49.02,lon:24.36,aliases:["калуш","калуші","калуша","kalush"]},{name:"Ковель",fullName:"Ковель (Волинська обл., Україна)",lat:51.22,lon:24.71,aliases:["ковель","ковелі","ковеля","kovel"]},{name:"Коростень",fullName:"Коростень (Житомирська обл., Україна)",lat:50.95,lon:28.64,aliases:["коростень","коростені","коростеня","korosten"]},{name:"Сміла",fullName:"Сміла (Черкаська обл., Україна)",lat:49.22,lon:31.87,aliases:["сміла","смілі","смілу","smila"]},{name:"Первомайськ",fullName:"Первомайськ (Миколаївська обл., Україна)",lat:48.04,lon:30.85,aliases:["первомайськ","первомайську","pervomaisk"]},{name:"Чорноморськ",fullName:"Чорноморськ (Одеська обл., Україна)",lat:46.3,lon:30.66,aliases:["чорноморськ","чорноморську","іллічівськ","chornomorsk"]},{name:"Покровськ",fullName:"Покровськ (Донецька обл., Україна)",lat:48.28,lon:37.18,aliases:["покровськ","покровську","красноармійськ","pokrovsk"]},{name:"Енергодар",fullName:"Енергодар (Запорізька обл., Україна)",lat:47.5,lon:34.65,aliases:["енергодар","енергодарі","енергодару","enerhodar"]},{name:"Керч",fullName:"Керч (Крим, Україна)",lat:45.36,lon:36.47,aliases:["керч","керчі","керчю","kerch"]},{name:"Євпаторія",fullName:"Євпаторія (Крим, Україна)",lat:45.19,lon:33.36,aliases:["євпаторія","євпаторії","yevpatoria","evpatoria"]},{name:"Ялта",fullName:"Ялта (Крим, Україна)",lat:44.49,lon:34.16,aliases:["ялта","ялті","ялту","yalta"]},{name:"Феодосія",fullName:"Феодосія (Крим, Україна)",lat:45.03,lon:35.38,aliases:["феодосія","феодосії","feodosia"]},{name:"Алчевськ",fullName:"Алчевськ (Луганська обл., Україна)",lat:48.47,lon:38.79,aliases:["алчевськ","алчевську","alchevsk"]},{name:"Самар",fullName:"Самар (Дніпропетровська обл., Україна)",lat:48.63,lon:35.26,aliases:["самар","новомосковськ","новомосковську","samar","novomoskovsk"]},{name:"Шептицький",fullName:"Шептицький (Львівська обл., Україна)",lat:50.38,lon:24.23,aliases:["шептицький","червоноград","chervonohrad","sheptytskyi"]},{name:"Лозова",fullName:"Лозова (Харківська обл., Україна)",lat:48.89,lon:36.32,aliases:["лозова","лозовій","lozova"]},{name:"Ізюм",fullName:"Ізюм (Харківська обл., Україна)",lat:49.21,lon:37.26,aliases:["ізюм","ізюмі","ізюму","izium","izyum"]},{name:"Звягель",fullName:"Звягель (Житомирська обл., Україна)",lat:50.58,lon:27.63,aliases:["звягель","звягелі","новоград-волинський","zviahel"]}],Al=t=>{if(!t||typeof t!="string")return null;const n=t.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(!n)return null;for(const r of bo)if(r.name.toLowerCase()===n||r.aliases.some(c=>c.toLowerCase()===n))return r;for(const r of bo)if(r.aliases.some(c=>n.includes(c.toLowerCase())))return r;return null},Il="data:image/webp;base64,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",S0=je`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`,C0=je`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`,T0=i.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`,A0=i.div`
  background: ${t=>t.$isDarkMode?"#121316bb":"#fcf7f7d3"};
  color: ${t=>t.$isDarkMode?"#f3f4f6":"#1f2937"};
  width: 100%;
  height: 95vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${t=>t.$isDarkMode?"0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.1)":"0 20px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  animation: ${S0} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`,I0=i.div`
  padding: 8px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)"};
`,M0=i.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,D0=i.button`
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  border: none;
  color: inherit;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
  }
`,$0=i.div`
  padding: 12px 20px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 10;
`,z0=i.div`
  position: relative;
  flex: 1;
`,L0=i.button`
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"};
  background: ${t=>t.$isDarkMode?"#1c1d22":"#f8f9fa"};
  color: inherit;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #ffb36c;
  }
`,R0=i.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: ${t=>t.$isDarkMode?"#1e2025":"#ffffff"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"};
  border-radius: 14px;
  padding: 8px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${C0} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 20;
`,E0=i.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"};
  }

  input {
    display: none;
  }
`,F0=i.div`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1.5px solid ${t=>t.$checked?"#ffb36c":t.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)"};
  background: ${t=>t.$checked?"#ffb36c":"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &::after {
    content: "✓";
    font-size: 12px;
    font-weight: bold;
    color: #000;
    display: ${t=>t.$checked?"block":"none"};
  }
`,P0=i.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
  color: #111;
  border: none;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(255, 179, 108, 0.25);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(255, 179, 108, 0.35);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`,N0=i.div`
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
    border-radius: 10px;
  }
`,O0=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,V0=i.div`
  margin: auto;
  text-align: center;
  max-width: 320px;
  color: ${t=>t.$isDarkMode?"#888":"#666"};
  font-size: 13px;
  line-height: 1.5;

  span {
    font-size: 32px;
    display: block;
    margin-bottom: 8px;
  }
`,Di=i.div`
  align-self: ${t=>t.$isBot?"flex-start":"flex-end"};
  background: ${t=>t.$isBot?t.$isDarkMode?"#1d1f24":"#f3f4f6":"linear-gradient(135deg, #ffb36c 0%, #ffa040 100%)"};
  color: ${t=>t.$isBot?t.$isDarkMode?"#f3f4f6":"#1f2937":"#000"};
  padding: 12px 16px;
  border-radius: ${t=>t.$isBot?"16px 16px 16px 4px":"16px 16px 4px 16px"};
  max-width: 85%;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid
    ${t=>t.$isBot?t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)":"transparent"};
  box-shadow: ${t=>t.$isBot?"none":"0 4px 12px rgba(255, 179, 108, 0.15)"};

  p { margin: 0 0 8px 0; }
  p:last-child { margin: 0; }

  a {
    color: ${t=>t.$isBot?"#ffb36c":"#000"};
    text-decoration: underline;
  }
`,B0=i.div`
  padding: 16px 20px;
  border-top: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#16171b":"#fafafa"};
`,_0=i.input`
  flex: 1;
  padding: 12px 18px;
  border-radius: 14px;
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${t=>t.$isDarkMode?"#22242a":"#fff"};
  color: inherit;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ffb36c;
  }

  &::placeholder {
    color: ${t=>t.$isDarkMode?"#666":"#aaa"};
  }
`,H0=i.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
  color: #000;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Fr=[{id:"коротко",label:"Коротко"},{id:"докладно",label:"Докладно"},{id:"науково",label:"Науково"},{id:"дружньо",label:"Дружньо"},{id:"саркастично",label:"Саркастично"}];function U0({isOpen:t,onClose:n,newsItem:r,isDarkMode:c}){const[l,s]=(0,a.useState)(["докладно"]),[y,f]=(0,a.useState)(!1),[x,g]=(0,a.useState)([]),[h,P]=(0,a.useState)(""),[D,M]=(0,a.useState)(!1),[$,C]=(0,a.useState)(""),b=(0,a.useRef)(null),w=(0,a.useRef)(null);(0,a.useEffect)(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),(0,a.useEffect)(()=>{const N=_=>{w.current&&!w.current.contains(_.target)&&f(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]),(0,a.useEffect)(()=>{if(!t)return;u.default.getItem("gemini_api_key").then(_=>C(_));const N=`news_ai_chat_${r?.link||"general"}`;u.default.getItem(N).then(_=>{_?Date.now()-_.timestamp>864e5?g([]):g(_.messages||[]):g([])})},[t,r]),(0,a.useEffect)(()=>{b.current?.scrollIntoView({behavior:"smooth"})},[x,D]);const V=N=>{s(_=>_.includes(N)?_.length>1?_.filter(ge=>ge!==N):_:[..._,N])},k=N=>{const _=N.slice(-20),ge=`news_ai_chat_${r?.link||"general"}`;u.default.setItem(ge,{timestamp:Date.now(),messages:_}),g(_)},R=async(N=null)=>{const _=N||h;if(!_.trim()||D)return;if(!$){alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");return}const ge=l.map(Z=>Fr.find(se=>se.id===Z)?.label).join(", "),ne={text:N?`[Режими: ${ge}] Зроби виклад цієї новини.`:_,isBot:!1},q=[...x,ne];N||P(""),g(q),M(!0);try{const Z=new vo($).getGenerativeModel({model:"gemini-2.5-flash",tools:[{googleSearch:{}}]});let se=`Ти - ШІ-помічник. Твоє завдання зробити виклад новини та відповідати на питання щодо неї.
`;se+=`Скомбінуй у відповіді такі стилі: ${l.join(", ")}.
`,l.includes("коротко")&&(se+=`- Відповідай стисло, головна суть у 1-3 реченнях.
`),l.includes("докладно")&&(se+=`- Надай розгорнуту інформацію з деталями та структурою.
`),l.includes("науково")&&(se+=`- Використовуй академічний тон, аналітичний підхід та відповідну термінологію.
`),l.includes("дружньо")&&(se+=`- Пиши приязно, неформально, додавай емодзі.
`),l.includes("саркастично")&&(se+=`- Додай витончену іронію та сарказм (цензурно, без образ).
`);const Se=`${se}
Новина:
Заголовок: ${r?.title||""}
Опис: ${r?.description||""}
Посилання: ${r?.link||""}

Запит користувача: ${_}`,fe={text:(await Z.generateContent(Se)).response.text(),isBot:!0};k([...q,fe])}catch(Z){console.error(Z);const se={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};k([...q,se])}finally{M(!1)}},W=()=>{f(!1),R("Будь ласка, зроби виклад цієї новини відповідно до обраних режимів.")};if(!t)return null;const U=l.length===0?"Оберіть режим...":l.map(N=>Fr.find(_=>_.id===N)?.label).join(", ");return(0,Sl.createPortal)((0,e.jsx)(T0,{onClick:n,children:(0,e.jsxs)(A0,{$isDarkMode:c,onClick:N=>N.stopPropagation(),children:[(0,e.jsxs)(I0,{$isDarkMode:c,children:[(0,e.jsxs)(M0,{children:[(0,e.jsx)("span",{children:"✨"}),(0,e.jsx)("h3",{children:"ШІ Виклад Новини"})]}),(0,e.jsx)(D0,{$isDarkMode:c,onClick:n,title:"Закрити",children:"✕"})]}),(0,e.jsxs)($0,{$isDarkMode:c,children:[(0,e.jsxs)(z0,{ref:w,children:[(0,e.jsxs)(L0,{$isDarkMode:c,onClick:()=>f(!y),children:[(0,e.jsx)("span",{children:U}),(0,e.jsx)("span",{style:{fontSize:"10px",opacity:.6},children:y?"▲":"▼"})]}),y&&(0,e.jsx)(R0,{$isDarkMode:c,children:Fr.map(N=>{const _=l.includes(N.id);return(0,e.jsxs)(E0,{$isDarkMode:c,children:[(0,e.jsx)("input",{type:"checkbox",checked:_,onChange:()=>V(N.id)}),(0,e.jsx)(F0,{$checked:_,$isDarkMode:c}),N.label]},N.id)})})]}),(0,e.jsx)(P0,{onClick:W,disabled:D,children:"Згенерувати виклад"})]}),(0,e.jsx)(N0,{$isDarkMode:c,children:x.length===0&&!D?(0,e.jsxs)(V0,{$isDarkMode:c,children:[(0,e.jsx)("span",{children:"🤖"}),"Оберіть бажані стилі у випадаючому списку вище та натисніть ",(0,e.jsx)("b",{children:'"Згенерувати виклад"'}),", або поставте власне питання нижче!"]}):(0,e.jsxs)(O0,{children:[x.map((N,_)=>(0,e.jsx)(Di,{$isBot:N.isBot,$isDarkMode:c,children:(0,e.jsx)(jd,{children:N.text})},_)),D&&(0,e.jsx)(Di,{$isBot:!0,$isDarkMode:c,children:"Аналізую та генерую відповідь... 🧠"}),(0,e.jsx)("div",{ref:b})]})}),(0,e.jsxs)(B0,{$isDarkMode:c,children:[(0,e.jsx)(_0,{$isDarkMode:c,value:h,onChange:N=>P(N.target.value),onKeyPress:N=>N.key==="Enter"&&R(),placeholder:"Задайте питання щодо цієї новини...",disabled:D}),(0,e.jsx)(H0,{onClick:()=>R(),disabled:D||!h.trim(),children:"➔"})]})]})}),document.body)}var K0=JSON.parse(`[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n  Погода, музика і безпечні новини, та купа інструментів, чекають на вас!","image":null},{"q":"Угода користувача","a":"Ця Угода є юридично обов'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"preview"},{"q":"Про клімат без цензури","a":"Друзі, я не хочу спілкуватись про цю тему. Проте важливо поговорити про це.\\n          Отже погода, є частиною політики, нечасто, але так.\\n          В Америці є станція для вивчення погоди(HARP), яка пливає на магнітне поле і погоду по всьому світу. \\n          На жаль, розвінчати чи підтвердити данну інформацію неможливо, оскільки джерело конспірологічне, але є дуже переконливі докази. \\n     Якщо є докази, що конспірологія не бреше, присилайте на пошту. Для метеоролога це дуже важливо. \\n          Такі досліди становлять загрозу для планети, і життя людей. Словами це не зупинити. Тому прошу, робіть все що можете, щоб зупинити ці досліди.\\n          Прикро що новини, постійно говорять про політику та показують рекламу. Але про погоду рідко, а тим паче про те, що треба це зупинити.","image":"texts"},{"q":"Співпраця та поради. Можливості сайту.","a":"Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую. А ось можливості сайту: Погода, музика, фан-арти, ШІ і т.д.","image":"might"},{"q":"Історія власників сайту...Не реальних: Кейт, Доміно, Марти...","a":"Це секрет поки.","image":"might"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"hills"},{"q":"🌤 Погода: часті питання","a":"Чому показує не те місто? — Введіть повну назву міста або додайте країну через кому, наприклад: «Київ, Україна».\\n\\nЧому немає прогнозу? — Можливо, API-ліміт вичерпано. Зачекайте кілька хвилин і спробуйте знову.\\n\\nЩо означають значки поруч із містом? — Червоний або оранжевий знак оклику попереджає про небезпечні погодні умови (детальніше у розділі «Погода: навчання»).\\n\\nЯк прибрати місто зі списку? — Натисніть хрестик (✕) на картці міста.\\n\\nЧому УФ-індекс = 0 вночі? — Це нормально: УФ-випромінювання відсутнє без сонця.\\n\\nЯк дізнатись вологість ґрунту або атмосферний тиск? — Ці дані відображаються у розгорнутому вигляді картки «Зараз».","image":"hills"},{"q":"🌤 Погода: додаткові відомості","a":"Крім, назви міста ви можете зробити пошук по координатам.\\n Замітки: під логотипом є поле з датою, назвою(до 12символів) і кнопкою додати.\\nЯкщо ви не ввели дату(лише назву), то ви моджете встановити дату, натиснувши пару разів на дату у 16денному прогнозі.\\nДата підсвічується синім кольором у 16денному прогнозі. Для того щоб прибрати натисніть на дату і назву події в фіолетовому полі, під об'єктом встановленням дати.","image":"hills"},{"q":"Бундючий пошук","a":"Тут ми розміщуємо 200-250 цікавих, корисних сайтів та ігор... А також статті з Вікіпедії. При натиску на зірочку, ви можете перейти на сайт не вводячі символів.","image":null},{"q":"Відсутність реклами на музику","a":"Це трохи дивно, але логічно. Ми поважаємо авторське право. Заробляти на чужих піснях — це неправильно.","image":"three"},{"q":"📰 Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":null},{"q":"📰 Новини: часті питання","a":"Чому деякі RSS не працюють? — Деякі сайти мають «биті» або порожні стрічки. Перевірте посилання через W3C Feed Validator або відкрийте його у браузері.\\n\\nЧи можна додати Facebook чи Twitter? — Ні. Ці платформи не мають RSS. Можна скористатись сторонніми конверторами (наприклад, RSS.app), але вони зазвичай платні.\\n\\nЧому новина не оновлюється? — RSS-стрічки оновлюються з боку самого сайту-джерела. Якщо джерело давно не публікувало — новин не буде.\\n\\nЯк поскаржитись на новину, що проскочила фільтр? — Надішліть скаргу на email: theturkeystudio@gmail.com з посиланням на новину.\\n\\nРекомендовані RSS-джерела:\\n• ScienceDaily: https://www.sciencedaily.com/rss/top/science.xml\\n• NASA: https://www.nasa.gov/rss/dyn/breaking_news.rss\\n• Суспільне: https://suspilne.media/feed/news/rss-uk.xml\\n• BBC World: https://feeds.bbci.co.uk/news/world/rss.xml\\n• TechCrunch: https://techcrunch.com/feed/\\n• The Verge: https://www.theverge.com/rss/index.xml\\n• Укрінформ: https://www.ukrinform.ua/rss\\n• IGN (ігри): https://feeds.feedburner.com/ign/news\\n• TED Talks: https://feeds.feedburner.com/TEDTalks_video","image":null},{"q":"Навчання по управлінню новинами","a":"У Стихії в розділі новини, ви можете додавати власні новинні сайти: RSS-стрічку. \\n      А у налаштуваннях, ви можете налаштувати автоскрол новин при відкритті сайту, і прибрати заголовок та опис новини\\nПримітка: Новини з елементами: війни, політики, 18+, порно, сексу, еротики, криміналу, суду, затримання, казино, корупції, релігії(виняток привітання зі святом, у погодних картках), таємних товариств(конспірологія або теорії змови), теракту, секти. Не відображаються. У разі якщо сайт показав вище перечислений елемент, ви можете(навіть мусите) надіслати скаргу на email! Ми хочемо щоб користувачі Стихії могли бачити к-ка погодних місць одночасно, ностальгувати, слухати музику без лімітів і реклами, а також щоб новини(більшість з яких погані) не псували вам день. \\nПримітка: Якість RSS: Деякі сайти мають \\"биті\\" або порожні RSS-стрічки. Якщо ви спробуєте додати таку, вам видасться помилка або нічого не покаже.\\nДля перевірки необхідно використати безкоштовні онлайн-валідатори, як-от W3C Feed Validation Service або просто відкрити посилання в браузері.\\nОбмеження, які важливо враховувати:\\nRSS-формат: Якщо сайт просто \\"новинний\\", але не має RSS (наприклад, Facebook або Twitter), ви не зможете його додати. Йому потрібно буде шукати спеціальні сервіси, що конвертують сторінки в RSS (наприклад, RSS.app), але це зазвичай платні послуги.\\nМітка Нове: Видима 1хв після скролу до новини.\\nДля тих хто має Google АІ Key, є функція ШІ виклад, чат-бот в плані новини, 1новина=10останніх повідомлень, повне очищення через 24год відсутності питань.\\n\\nНаука та технології:\\nScienceDaily (Top News): https://www.sciencedaily.com/rss/top/science.xml\\nNature (Research Highlights): https://www.nature.com/nature.rss\\nWired (Technology): https://www.wired.com/feed/category/science/feed/\\nTechCrunch: https://techcrunch.com/feed/\\nNASA (Breaking News): https://www.nasa.gov/rss/dyn/breaking_news.rss\\nThe Verge: https://www.theverge.com/rss/index.xml\\n\\nСвітові новини та аналітика:\\nBBC News (World): https://feeds.bbci.co.uk/news/world/rss.xml\\nReuters (Top News): https://feeds.reuters.com/reuters/topNews\\nAl Jazeera (English): https://www.aljazeera.com/xml/rss/all.xml\\nThe Economist (World): https://www.economist.com/world/rss.xml\\n\\nУкраїна (Українською):\\nУкраїнська правда: https://www.pravda.com.ua/rss/\\nNV.ua: https://nv.ua/rss/all.xml\\nСуспільне Новини: https://suspilne.media/feed/news/rss-uk.xml\\nУкрінформ: https://www.ukrinform.ua/rss\\n\\nБізнес та Економіка:\\nBloomberg (Technology): https://feeds.bloomberg.com/technology/news.rss\\nHarvard Business Review: https://hbr.org/rss/topics/leadership\\n\\nРозваги, Культура та Інше:\\nIGN (Games): https://feeds.feedburner.com/ign/news\\nNational Geographic: https://feeds.feedburner.com/ng/science\\nTED Talks: https://feeds.feedburner.com/TEDTalks_video\\nLifehacker: https://lifehacker.com/rss\\n\\nЯкщо ви помітили, що якась новина не оновлюється або посилання не працює — будь ласка, повідомте нам. Ми постійно оновлюємо список джерел.\\nІще дещо для соцмереж і т.д:\\n1. Telegram (Найпростіше для RSS)\\nRSSHub: Готовий публічний сервіс, який перетворює майже будь-що на RSS. Для Telegram-каналу достатньо посилання:\\n[https://rsshub.app/telegram/channel/ім_я_каналу](https://rsshub.app/telegram/channel/ім_я_каналу)\\nTGStat / Telemetr RSS: Деякі агрегатори надають готові RSS-стрічки публічних каналів.\\nTelegram Bot API (JS Wrapper): Створити безкоштовного бота, додати його в канал (або читати публічний канал через getChatHistory) і пересилати пости у свій React-додаток через REST API.\\n2. YouTube\\nУ YouTube є вбудовані безкоштовні RSS-стрічки для кожного каналу, про які мало хто знає. Всі відео та шортси каналу можна отримувати без жодних ключі API:\\nЗа ID каналу:\\n[https://www.youtube.com/feeds/videos.xml?channel_id=UC](https://www.youtube.com/feeds/videos.xml?channel_id=UC)...\\nЗа назвою каналу (через RSSHub):\\n[https://rsshub.app/youtube/user/ім_я_користувача](https://rsshub.app/youtube/user/ім_я_користувача)\\n\\n3. Facebook, Instagram, TikTok та Hive\\nЦі платформи найжорсткіше блокують прямий доступ. Щоб читати блогерів безкоштовно:\\nRSSHub (Universal Parser): Головний порятунок для фронтендера. Він має готові маршрути для TikTok, Instagram та Facebook:\\n[https://rsshub.app/tiktok/user/@username](https://rsshub.app/tiktok/user/@username)\\n[https://rsshub.app/instagram/user/username](https://rsshub.app/instagram/user/username)\\nRSS.app / Feed43: Безкоштовні веб-сервіси, які парсять HTML-сторінку блогера й видають вам готовий RSS XML/JSON (на безкоштовних тарифах є ліміти на 3-5 джерел, але для декількох затишних блогерів цього вистачає).\\nPuppeteer / Cheerio (Власний micro-scraper): Якщо задеплоїти невеличку безкоштовну Node.js функцію на Vercel чи Render, вона може раз на день заходити на сторінку та зчитувати останні пости.","image":null},{"q":"🤖 ШІ-Допомога: покроковий посібник","a":"Крок 1. Відкрийте розділ «Допомога ШІ» у меню.\\nКрок 2. Оберіть провайдера ШІ:\\n  • Gemini (Google) — потрібен Gemini API Key з aistudio.google.com\\n  Крок 3. Вставте ваш API-ключ у відповідне поле. Ключ зберігається лише на вашому пристрої.\\nКрок 4. Оберіть обсяг відповіді: Менше / Нормально / Більше.\\nКрок 5. Оберіть стиль: Дружньо / Стандартно / Науково.\\nКрок 6. Напишіть запитання у текстовому полі. Натисніть Enter або кнопку ➤.\\nКрок 7 (Gemini). Можна прикріпити: фото, відео або аудіофайл — натисніть іконку 📎. Gemini проаналізує вміст.\\nКрок 8 (Gemini). Кнопка 📸 — робить скріншот поточної сторінки і відправляє Gemini: «Поясни що бачиш» або «Що можна покращити на цій сторінці?»\\nКрок 9. Натисніть на прикріплений файл щоб переглянути його на весь екран.\\nКрок 10. Кнопка 📋 на відповіді бота — копіює текст у буфер обміну.\\nКрок 11. 🎤 — голосовий ввід запитання (підтримує українську мову).\\nКрок 12. 🧹 — очищає всю історію чату.\\nПорада: Shift+Enter = новий рядок у запиті без відправлення.","image":null},{"q":"🤖 ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\nЧи може ШІ аналізувати сторінку сайту? — Так! Тільки для Gemini: натисніть 📸, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":null},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Відкрийте розділ «Карта» або «Клімат» у меню.\\nКрок 2. На карті відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.","image":"texts"},{"q":"🗺 Карта клімату: часті питання","a":"Чому карта не завантажується? — Перевірте інтернет-з'єднання. Карта потребує стабільного підключення.\\n\\nЧи можна зберегти знімок карти? — Використовуйте скріншот браузера або функцію ШІ 📸.\\n\\nЩо означають кольори на карті? — Зазвичай: синій — холодно, жовтий — тепло, червоний — спека або аномалія. Конкретне пояснення — у легенді на карті.","image":"texts"},{"q":"🎨 Фан-арти: покроковий посібник","a":"Крок 1. Відкрийте розділ «Фан-арти».\\nКрок 2. Перегляньте галерею — зображення відображаються у сітці.\\nКрок 3. Клікніть на зображення, щоб відкрити його у повноекранному режимі.\\nКрок 4. У повноекранному режимі можна:\\n  • Завантажити зображення.\\n  • Поділитися (якщо функція доступна).\\nКрок 5. Усі фан-арти намальовані вручну автором сайту. Права на власні твори залишаються за вами — деталі в Угоді користувача.","image":"two"},{"q":"🎨 Фан-арти: часті питання","a":"Чи можна завантажити фан-арт? — Так. Натисніть іконку завантаження в повноекранному режимі.\\n\\nЧи можна надіслати свій малюнок? — Напишіть на theturkeystudio@gmail.com. Можливо, вашу роботу додадуть до галереї!\\n\\nЩирість важливіша за досконалість.\\n\\nЧи можна використати фан-арти комерційно? — Тільки у роздрукованому вигляді з підписом автора. Докладніше — в Угоді користувача, пункт 3.2.","image":"two"},{"q":"🎬 Декоратор: покроковий посібник","a":"Крок 1. Відкрийте розділ «Декоратор».\\nКрок 2. Оберіть базовий шаблон або зображення.\\nКрок 3. Додавайте декоративні елементи: рамки, стікери, ефекти.\\nКрок 4. Налаштуйте положення, розмір та прозорість кожного елемента.\\nКрок 5. Завантажте готовий результат кнопкою «💾 Зберегти».","image":null},{"q":"🖥 Загальне: навігація та меню","a":"Меню ☰ (гамбургер) — відкриває бокову панель з усіма розділами сайту.\\nКожна кнопка у меню має підказку — наведіть курсор для опису функції.\\nЛого Стихії — три кнопки:\\n  • Зліва — завантажити поточний вигляд.\\n  • Вгорі — друкувати.\\n  • Справа — повноекранний режим.\\nТемна/Світла тема — перемикач у шапці (Header).\\nАдаптивність: сайт повністю адаптований для мобільних пристроїв.","image":"logofix"},{"q":"🖥 Загальне: часті питання","a":"Що таке Стихія? — Це веб-платформа «погода + музика + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧи є підписка? — Так, деякі функції можуть бути доступні за підпискою. Ціни можуть змінюватись з попередженням за 3 тижні.\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам.","image":"one"},{"q":"За що відповідає меню?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна) Доступ після реєстрації. Та багато чого ще...","image":"logofix"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди, міток на карті та впевненості, що контент використовується за призначенням.","image":"one"},{"q":"Плани і тематика","a":"Сайту з багатьма відсилками ще ніколи не було. Працюю над поліпшенням теперішнього, та додаванхням відсилок і я відкритий до ваших ідей! The strangest site of all.","image":"two"}]`),W0="/assets/logo-CeE8IWwr.webp",q0="/assets/prewiew-CkyBq-Ws.webp",G0="/assets/what-Dh9YNb09.webp",$i="/assets/myone-Dyn4Do12.webp",J0="/assets/mytwo-DY56vL7p.webp",Y0="/assets/soon-Cz5fTUD_.webp",Z0="/assets/mythree-BY2evDkD.webp",Ml=fs({Tooltip:()=>Aa,default:()=>Ll}),X0=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Q0=je`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,ef=je`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,Dl=je`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,tf=je`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,$l=sn`
  opacity: 0;
  transform-origin: left center;
  animation: ${tf} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:t})=>sn`
    animation-delay: ${.1+(t||0)*.05}s;
  `}
`,nf=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${t=>t.$isClosing?0:1};
  pointer-events: ${t=>t.$isClosing?"none":"auto"};
  backdrop-filter: blur(5px);
`,af=i.div`
  background: ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${t=>t.$isClosing?ef:Q0} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,rf=i.div`
  background:  ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,of=i.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`,sf=i.div`
  display: flex;
  justify-content: center;
`,zi=i.button`
  background: ${({$active:t,$isDarkMode:n})=>t?"#8a2be2":n?"#0c0c0cbf":"#fdff98"};

  color: ${({$active:t,$isDarkMode:n})=>t?"#ffffff":"#020202"};

  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({$active:t,$isDarkMode:n})=>t?"#7b22cc":n?"#1a1a1ce6":"#fbff02"};
  }
`,zl=i.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 700;
  padding-right: 9px;
  background: ${t=>t.$isDarkMode?"#27b5b0b1":"#6f6e22c6"};
  color: ${t=>t.$isDarkMode?"#000000b1":"#ffffff"};
  height: 36px;
  font-size: 14px;
  cursor: pointer;
`,lf=i(zl)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${Dl} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,df=i.div`
  margin-top: 3px;
`,cf=i.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${$l}
`,uf=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${({$rating:t,$isDarkMode:n})=>t===1?"#8a2be2":n?"#ffffff":"#111111"};
  opacity: ${t=>t.$rating===-1?.4:1};
  transition: all 0.3s ease;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${({$rating:t,$isDarkMode:n})=>t===-1?n?"#555555":"#cccccc":"#8a2be2"};
    margin-right: 12px;
    display: inline-block;
  }
`,pf=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`,ff=i.div`
  flex: 1;
`,Li=i.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 1px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 22px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`,gf=i.div`
  display: flex;
  align-items: center;
  gap: 7px;
`,xf=i.span`
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${t=>t.$isOpen?"rotate(180deg)":"rotate(90deg)"};
`,hf=i.div`
  max-height: ${t=>t.$isOpen?"6000px":"0"};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: ${t=>t.$isOpen?"5px":"0"};
  font-size: 14px;
  line-height: 1.6;
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"#ffffff":"#060606"};
  opacity: ${t=>t.$isOpen?"1":"0"};
  white-space: pre-line;
`,Ri=i.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${t=>t.$isHovered||t.$isPinned?"800px":"10px"};
  opacity: ${t=>t.$isHovered||t.$isPinned?1:.4};

  &:hover {
    transform: scale(1.01);
  }
`,mf=i.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${Dl} 0.3s ease-out forwards;
`,Ei=i.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`,Pr=i.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  opacity: ${t=>t.$isHovered||t.$isPinned?1:0};
  pointer-events: ${t=>t.$isHovered||t.$isPinned?"auto":"none"};
`,Pn=i.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`,bf=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,yf=i.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,wf=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,vf=i.button`
  padding: 3px;
  color: white;
  border: none;
  background: rgb(11, 113, 138);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  transition: transform 0.2s;
  ${$l}
`,Fi=i.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid rgb(50, 215, 0);
  border-bottom-left-radius: 25px;
  background: rgba(2, 2, 2, 0.9);
  color: #fffefe;
  font-size: 13px;
  outline: none;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #f9f9f9;
  }
`,kf=i.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 450px;
  overflow-y: auto;
  padding: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 4px;
  }
`,Pi=i.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  max-width: 85%;
  position: relative;
  ${t=>t.$isUser?sn`
          background: #8a2be2;
          color: white;
          align-self: flex-end;
        `:sn`
          background: white;
          color: #333;
          align-self: flex-start;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        `}
`,jf=i.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  cursor: pointer;
  margin-top: 4px;
  text-decoration: underline;
`,Sf=i.div`
  display: flex;
`,Cf=i.button`
  background: #6d1a1a;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  color: white;
    border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34px;
  border-bottom-right-radius: 25px;
  align-items: center;
  justify-content: center;
`,Tf=i.button`
  background: rgb(134, 60, 60);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34.5px;
  cursor: pointer;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`,Aa=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(X0,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})},Ll=({onClose:t,isOpen:n,initialFaqQuestion:r,isDarkMode:c})=>{const[l,s]=(0,a.useState)(!1),y=mr(T=>T.calendar?.customDays||[]),[f,x]=(0,a.useState)([]),[g,h]=(0,a.useState)({}),[P,D]=(0,a.useState)(""),[M,$]=(0,a.useState)("faq"),C=1,b=-1;(0,a.useEffect)(()=>{(async()=>{try{const F=await u.default.getItem("training_actions_pinned");F!==null&&se(F)}catch(F){console.error("Error loading pinned state:",F)}})()},[]);const[w,V]=(0,a.useState)([]),[k,R]=(0,a.useState)(!1),[W,U]=(0,a.useState)(""),N=(0,a.useRef)(null),_=(0,a.useRef)(null);(0,a.useEffect)(()=>{(async()=>{const F=await u.default.getItem("gemini_api_key"),te=await u.default.getItem("user_help_session");F&&U(F),V(te||[{text:"Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",isBot:!0}])})()},[]),(0,a.useEffect)(()=>{_.current&&(_.current.scrollTop=_.current.scrollHeight)},[w,k]);const ge=async T=>{await u.default.setItem("user_help_session",T.slice(-15))},[ne,q]=(0,a.useState)(null),[Z,se]=(0,a.useState)(!1),[Se,fe]=(0,a.useState)(null),tt=()=>{N.current&&N.current.abort(),R(!1)},Ce=async()=>{window.confirm("Очистити історію чату з асистентом?")&&(V([{text:"Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",isBot:!0}]),await u.default.removeItem("user_help_session"))},ct=async T=>{T.stopPropagation();const F=!Z;se(F),await u.default.setItem("training_actions_pinned",F)},xe=(0,a.useCallback)(()=>{if(Se){fe(null);return}fe(null),s(!0),setTimeout(()=>{s(!1),t()},400)},[t,Se]),He=T=>{const F=document.createElement("a");F.href=T,F.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild(F),F.click(),document.body.removeChild(F)},$e=T=>{const F=window.open("","_blank");F.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${T}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),F.document.close()};(0,a.useEffect)(()=>{const T=F=>{F.key==="Escape"&&xe()};if(n||l)return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[n,l,xe]);const wt=(T,F)=>{const te=(g[T]||0)===F?0:F;h({...g,[T]:te})},vt=T=>{x(F=>F.includes(T)?F.filter(te=>te!==T):[...F,T])},kt=a.useMemo(()=>{const T=new Date().toISOString().split("T")[0];return y.filter(F=>F.date<T).sort((F,te)=>te.date.localeCompare(F.date)).slice(0,5)},[y]),Ze=a.useMemo(()=>{const T={hills:ko,texts:ws,logofix:W0,preview:q0,info:G0,one:$i,two:J0,soon:Y0,might:$i,three:Z0},F=K0.map(te=>({...te,image:te.image?T[te.image]??null:null}));if(kt.length>0){const te=kt.map(de=>`• ${de.date}: ${de.reason}`).join(`
`);F.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:

${te}`,image:null})}return F},[kt]);if((0,a.useEffect)(()=>{if(!n){x([]);return}const T=[];if(r){const te=Ze.findIndex(de=>de.q===r);te>=0&&(T.push(te),$("faq"))}const F=Ze.findIndex(te=>te.q==="Останнє оновлення");F>=0&&!T.includes(F)&&(T.push(F),$("faq")),x(T)},[Ze,r,n]),!n&&!l)return null;const xt=async()=>{if(!P.trim()||k)return;if(!W){alert("Будь ласка, встановіть API-ключ Gemini у налаштуваннях ШІ для використання цієї функції.");return}const T=P;D("");const F=[...w,{text:T,isBot:!1}];V(F),R(!0);try{const te=new vo(W).getGenerativeModel({model:"gemini-2.5-flash",tools:[{googleSearch:{}}]}),de=Ze.map(ce=>`Q: ${ce.q} A: ${ce.a}`).join(`
`),Ee=xr.map(ce=>{const jt=ce.duration?`${Math.floor(ce.duration/60)}:${(ce.duration%60).toString().padStart(2,"0")}`:"невідомо",mt=ce.lyrics&&Array.isArray(ce.lyrics)?ce.lyrics.map(Xe=>`${Xe.time}s:${Xe.text}`).join("|").substring(0,100):"no",at=ce.filters&&Array.isArray(ce.filters)?ce.filters.map(Xe=>`${Xe.start}-${Xe.end}s:${Xe.type}`).join("|"):"no";let At=`Song: ${ce.author}, Category: ${ce.category}, Duration: ${jt}, Lyrics: ${mt}..., Filters: ${at}, Info: ${ce.text}`;if(ce.schedule){const Xe=ce.schedule.map(bt=>`S${bt.season}E${bt.ep}: ${bt.title} (${bt.date})`).join("; ");At+=`. Schedule: ${Xe}`}return At}).join(`
`),Ve=`Ти асистент проекту "Стихія". Тобі доступні дві бази даних:
      1. База FAQ: містить правила сайту та інструкції щодо розділу Погода. 
      2. База пісень: містить повний список треків (${xr.length} шт), авторів, тексти пісень.

      ІНСТРУКЦІЯ:
      - Якщо запит стосується температури, вітру, УФ-індексу або роботи розділу погоди — шукай у базі FAQ.
      - Якщо запит стосується конкретної пісні, її тривалості, тексту — шукай у Базі пісень.
      - Відповідай коротко, професійно та виключно українською мовою.

      КОНТЕКСТ FAQ: ${de.substring(0,2e3)}
      КОНТЕКСТ ПІСЕНЬ: ${Ee.substring(0,15e3)}

      ЗАПИТ КОРИСТУВАЧА: ${T}`,ze=(await(await te.generateContent(Ve)).response).text(),nt=[...F,{text:ze,isBot:!0}];V(nt),await ge(nt)}catch(te){if(te.name!=="AbortError"){const de=[...F,{text:"Помилка зв'язку з інтелектом. Перевірте ключ.",isBot:!0}];V(de)}}finally{R(!1)}},_e=T=>{D(w[T].text)},ht=T=>{const F=/(https?:\/\/[^\s]+)/g;return T.split(F).map((te,de)=>te.match(F)?(0,e.jsx)("a",{href:te,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:te},de):te)},Tt=T=>T.content&&Array.isArray(T.content)&&T.content.length>0?T.content.map((F,te)=>{if(F.type==="image"){const de=F.src||F.image,Ee=F.alt||T.q||"FAQ image";return(0,e.jsxs)("div",{style:{position:"relative",marginBottom:"10px"},children:[(0,e.jsx)(Ri,{src:de,alt:Ee,$isHovered:ne===de,$isPinned:Z,onClick:()=>fe(de),onMouseEnter:()=>q(de),onMouseLeave:()=>q(null)}),(0,e.jsxs)(Pr,{$isHovered:ne===de,$isPinned:Z,onMouseEnter:()=>q(de),onMouseLeave:()=>q(null),children:[(0,e.jsx)(Pn,{onClick:ct,children:Z?"Відкріпити зображення":"Закріпити зображення"}),(0,e.jsx)(Pn,{onClick:Ve=>{Ve.stopPropagation(),He(de)},children:"Скачати"}),(0,e.jsx)(Pn,{onClick:Ve=>{Ve.stopPropagation(),$e(de)},children:"Друкувати"})]})]},`image-${te}`)}if(F.type==="text"){const de=F.value||F.text||"";return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:String(de).replace(/\n/g,"<br/>")}},`text-${te}`)}return null}):(0,e.jsxs)(e.Fragment,{children:[T.image&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Pr,{$isHovered:ne===T.image,$isPinned:Z,onMouseEnter:()=>q(T.image),onMouseLeave:()=>q(null),children:[(0,e.jsx)(Pn,{onClick:ct,children:Z?"Відкріпити зображення":"Прикріпити зображення"}),(0,e.jsx)(Pn,{onClick:F=>{F.stopPropagation(),He(T.image)},children:"Скачати"}),(0,e.jsx)(Pn,{onClick:F=>{F.stopPropagation(),$e(T.image)},children:"Друкувати"})]})}),(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:(T.a||"").replace(/\n/g,"<br/>")}})]}),Oe=[...Ze].map((T,F)=>({...T,originalIndex:F,rating:g[F]||0})).filter(T=>{if(!P)return!0;const F=P.toLowerCase();return T.q?.toLowerCase().includes(F)||T.a?.toLowerCase().includes(F)}).sort((T,F)=>F.rating-T.rating);return(0,e.jsxs)(nf,{$isClosing:l,onClick:xe,children:[(0,e.jsxs)(af,{$isDarkMode:c,$isClosing:l,onClick:T=>T.stopPropagation(),children:[(0,e.jsxs)(rf,{$isDarkMode:c,children:[(0,e.jsx)(zl,{onClick:xe,children:"Зрозуміло!"}),(0,e.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:c?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,e.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:c?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"}),(0,e.jsxs)(sf,{children:[(0,e.jsx)(zi,{$active:M==="faq",onClick:()=>$("faq"),style:{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",borderRight:"1px solid rgba(0, 0, 0, 0.1)"},children:"Питання (FAQ)"}),(0,e.jsx)(zi,{$active:M==="ai",onClick:()=>$("ai"),style:{borderBottomRightRadius:"20px",borderTopRightRadius:"20px"},children:"ШІ Асистент"})]})]}),(0,e.jsxs)(of,{children:[M==="ai"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(kf,{ref:_,children:[w.map((T,F)=>(0,e.jsxs)(Pi,{$isUser:!T.isBot,children:[ht(T.text),!T.isBot&&F===w.length-1&&!k&&(0,e.jsx)(jf,{onClick:()=>_e(F),children:"редагувати"})]},F)),k&&(0,e.jsx)(Pi,{$isUser:!1,children:"Думаю..."})]}),(0,e.jsxs)(Sf,{children:[(0,e.jsx)(Fi,{type:"text",placeholder:"Запитай ШІ або шукай у FAQ...",value:P,onChange:T=>D(T.target.value),onKeyDown:T=>T.key==="Enter"&&xt()}),(0,e.jsx)(Aa,{content:"Очистити чат",isDarkMode:c,children:(0,e.jsx)(Tf,{onClick:Ce,"aria-label":"Очистити чат",children:(0,e.jsx)(Xl,{})})}),k?(0,e.jsx)(Aa,{content:"Зупинити запит",isDarkMode:c,children:(0,e.jsx)(Cf,{onClick:tt,"aria-label":"Зупинити запит",children:"◼"})}):(0,e.jsx)(Aa,{content:"Відправити",isDarkMode:c,children:(0,e.jsx)(vf,{"aria-label":"Відправити",onClick:xt,children:"➤"})})]})]}),M==="faq"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Fi,{type:"search",placeholder:"Пошук питань...","aria-label":"Пошук питань",value:P,onChange:T=>D(T.target.value)}),(0,e.jsxs)(df,{style:{marginTop:0},children:[Oe.length===0&&(0,e.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),Oe.map((T,F)=>{const te=T.originalIndex,de=g[te]||0;return(0,e.jsxs)(cf,{$index:F+1,children:[(0,e.jsx)(uf,{$isDarkMode:c,$rating:de,onClick:()=>vt(te),children:(0,e.jsxs)(pf,{children:[(0,e.jsx)(ff,{children:T.q}),(0,e.jsxs)(gf,{children:[(0,e.jsx)(Aa,{content:"Корисно",isDarkMode:c,children:(0,e.jsx)(Li,{onClick:Ee=>{Ee.stopPropagation(),wt(te,C)},"aria-label":"Корисно",children:de===C?(0,e.jsx)(di,{style:{color:"blue"}}):(0,e.jsx)(di,{})})}),(0,e.jsx)(Aa,{content:"Не корисно",isDarkMode:c,children:(0,e.jsx)(Li,{onClick:Ee=>{Ee.stopPropagation(),wt(te,b)},"aria-label":"Не корисно",children:de===b?(0,e.jsx)(ri,{}):(0,e.jsx)(ri,{})})}),(0,e.jsx)(xf,{$isOpen:f.includes(te),children:"▼"})]})]})}),(0,e.jsx)(hf,{$isDarkMode:c,$isOpen:f.includes(te),children:(0,e.jsxs)(wf,{children:[T.image&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ri,{src:T.image,alt:T.q,$isHovered:ne===T.image,$isPinned:Z,onClick:()=>fe(T.image),onMouseEnter:()=>q(T.image),onMouseLeave:()=>q(null)}),(0,e.jsxs)(Pr,{$isHovered:ne===T.image,$isPinned:Z,onMouseEnter:()=>q(T.image),onMouseLeave:()=>q(null),children:[(0,e.jsx)(Pn,{onClick:ct,children:Z?"Відкрипити зображення":"Закріпити зображення"}),(0,e.jsx)(Pn,{onClick:Ee=>{Ee.stopPropagation(),He(T.image)},children:"Скачати"}),(0,e.jsx)(Pn,{onClick:Ee=>{Ee.stopPropagation(),$e(T.image)},children:"Друкувати"})]})]}),Tt(T)]})})]},te)})]})]})]})]}),Se&&(0,e.jsxs)(bf,{onClick:()=>fe(null),children:[(0,e.jsx)(lf,{onClick:()=>fe(null),children:"×"}),(0,e.jsxs)(mf,{children:[(0,e.jsx)(Ei,{onClick:T=>{T.stopPropagation(),He(Se)},children:"Скачати"}),(0,e.jsx)(Ei,{onClick:T=>{T.stopPropagation(),$e(Se)},children:"Друкувати"})]}),(0,e.jsx)(yf,{src:Se,alt:"Прев'ю зображення",onClick:T=>T.stopPropagation()})]})]})},Af=[/війн(?:а|и|ою|і|нах)/iu,/бойов(?:і|их|им|ий|а|ої)/iu,/конфлікт(?:у|и|ів|ом)?/iu,new RegExp("(?<!\\p{L})фронт(?:у|і|ом)?(?!\\p{L})","iu"),/атак(?:а|и|у|ою|ам|ах|увал.*)/iu,/обстріл(?:у|и|ів|ом|ами)?/iu,new RegExp("безпілотник(?:и|ів|ами|ом)?|дрон(?:и|ів|ами)?|(?<!\\p{L})бпла(?!\\p{L})","iu"),/загибл(?:ий|их|і|им|ними)/iu,/поранен(?:ий|их|і|им|ними)/iu,/руйнуванн(?:я|ь|ям)/iu,/військов(?:ий|і|их|им|ними|е|а|ого)/iu,/армі(?:я|ї|ю|єю)/iu,/окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,/ракет(?:а|и|ний|них|ами)/iu,/збройн(?:і|их)\s+сил(?:и|)/iu,new RegExp("(?<!\\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})рф(?!\\p{L})|росі(?:я|ї|єю|йськ.*)","iu"),/політик(?:а|и|ою|і|ів)/iu,/корупці(?:я|ї|ю|єю)/iu,/депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,new RegExp("(?<!\\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})мит(?:о|а|ам|ами|ах)(?!\\p{L})","iu"),new RegExp("уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\\p{L})влад(?:а|и|ою)(?!\\p{L})","iu"),/санкці(?:ї|й|ям|ями)/iu,/домовленість|переговор(?:и|ів|ами)/iu,/кримінал(?:у|ом)?/iu,/поліці(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})суд(?:у|ом|ів)?(?!\\p{L})","iu"),/затриман(?:о|ий|і|а)/iu,/вбивств(?:о|а|ом|ах)/iu,/крадіжк(?:а|и|ою|ах)/iu,/вирок(?:у|и|ів|ами|ах)?/iu,/в'?язниц(?:я|і|ю|ею|ях)/iu,/арешт(?:у|и|ів|ами|ах)?/iu,/теракт(?:и|ів|ами|ах|у)?/iu,/вибух(?:и|ів|ами|ах|у)?/iu,/злочин(?:у|и|ів|ом)?/iu,/напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,/побої|мордуванн(?:я|ь|ям)/iu,/душивши?|заламав/iu,/порно(?:графі|г| розроб| фільм.*)?/iu,/porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,/еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,new RegExp("секс(?:у|ом|уальн.*)?(?!\\p{L})","iu"),/\bsex(?:y|ual)?\b/iu,/onlyfans|онліфанс|онлифанс|only-?fans/iu,/webcam|вебкамер.*|вебка/iu,/(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,/оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,/без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,/інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,/стриптиз|топлес|topless/iu,/оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,/пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,/гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,/без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,/(?:онлайн\s*)?казино|casino/iu,/рулетк(?:а|и|у|ою|ці|ок)/iu,/слот(?:и|ів|ами|ах|ам)?|slots?/iu,/покер(?:у|ом|ний|ного)?|poker/iu,/азарт(?:у|ний|ні|них|ою|ість)?/iu,/гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,/ігров(?:і|их|им|ними)\s+автомат/iu,/однорук(?:ий|і)\s+бандит/iu,new RegExp("(?<!\\p{L})(?:краіл|кріаіл)(?!\\p{L})","iu"),/лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,/джекпот(?:и|ів|ом)?|jackpot/iu,/виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,/букмекер(?:и|ів|ського|ських|ська|ський)?/iu,/спортбетт?інг|sports?\s*betting|betting/iu,/gambl(?:e|ing|er)?/iu,/prediction\s+markets?/iu,/ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,/зроби(?:ти|в|ла)\s+ставку/iu,new RegExp("(?<!\\p{L})бк\\s+(?:букмекер|ставок|казино)(?!\\p{L})","iu"),/фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,/бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,/халяв(?:а|и|у|ою)/iu,/favbet|фавбет|favorit|фаворит/iu,/vbet|вбет/iu,/cosmolot|космолот/iu,/slots\s*city|слотс\s*сіт(?:і|и)/iu,/supergra|супер\s*гра|супергра/iu,/first\s*casino|ферст|фірст/iu,/casino\s*ua|казино\s*юа/iu,/champion\s*(?:casino)?|чемпіон\s*(?:казино)?/iu,/ggbet|ггбет/iu,/slotoking|слотокінг|слотокинг/iu,/pin-?up|пінап|пін\s*ап/iu,/slotor|слотор/iu,/777\s*casino|казино\s*777/iu,/parimatch|париматч|паріматч/iu,/1xbet|1хбэт|1хбет|1xslots/iu,/mostbet|мостбет/iu,/vulkan|vulcan|вулкан/iu,/joycasino|джойказино/iu,/casino-x|казино\s*ікс|казино\s*икс/iu,/vavada|вавада/iu,/melbet|мелбет/iu,/betwinner|бетвіннер|бетвиннер/iu,/megapari|мегапарі|мегапари/iu,/catcasino|catbet|кетказино|кетбет/iu,/john\s*bet|джон\s*біт/iu,/ice\s*casino|verde\s*casino|hitnspin/iu,/fonbet|фонбет|marathonbet|марафонбет/iu,/bet365|бет365/iu,/unibet|унібет|унибет/iu,/william\s*hill|вільям\s*хілл/iu,/888\s*(?:casino|poker)?/iu,/pokerstars|покерстарс/iu,/betfair|бетфеір|бетфеар/iu,/bwin|бвін/iu,/stake\s*(?:casino)?|bc\.game|roobet|rollbit/iu,/крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,/crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,/аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,/gallup/iu,/релігі(?:я|ї|ю|єю|йн.*)/iu,new RegExp("(?<!\\p{L})(?:пцу|упц|умп)(?!\\p{L})","iu"),/церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,/патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,/парафія|єпархія|лавра/iu,new RegExp("(?<!\\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\\p{L})|саєнтолог.*|свідки\\s+єгови","iu"),new RegExp("(?<!\\p{L})культ(?:и|ів|у|ом)?(?!\\p{L})","iu"),/масон(?:и|ів|ами|ах)?/iu,/жертвопринес.*|жертвопринош.*/iu,/гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,/мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,new RegExp("карт(?:и|ах)\\s+таро|(?<!\\p{L})гаданн(?:я|ь)(?!\\p{L})|нумеролог","iu"),/пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,/порч(?:а|і)|сглаз|приворо/iu,new RegExp("(?<!\\p{L})(?:набу|сап|бэб)(?!\\p{L})","iu"),/обшук(?:и|ів|ами|ах)?/iu,/детектив(?:и|ів|ам|ами)?/iu,/слідч(?:і|их|им|ий)\s+дії/iu,/слуг(?:а|и)\s+народу/iu,/фракці(?:я|ї|ю|єю)/iu,/міністр(?:и|ів|ам|ами|а)?/iu,/голосувати|голосуванн(?:я|ь)/iu,/підпал(?:и|ів|ам|ами)?/iu,/вербувати|завербува.*/iu,/аварі(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})(?:дзп|дтп)(?!\\p{L})","iu"),/врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,/травмован(?:і|их|ий|о)/iu,/постраждал(?:і|их|и)/iu,/вибор(?:и|ів|ам|ах|чий|чої)/iu,/опозиці(?:я|ї|ю|єю)/iu,/кампані(?:я|ї|ю)/iu,/партій(?:ний|них|ні|я|ї)/iu,/незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,/схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,/хабар(?:і|ів|ник.*)|хабарництво/iu,/шахрайств(?:о|а|і)|шахраї/iu,/зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,/скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,new RegExp("(?<!\\p{L})(?:ніцой|ларис(?:а|и|і|у)?\\s+ніцой)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:євген(?:а|у)?\\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\\s+євген(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:гордон(?:а|у|ом)?|дмитро\\s+гордон)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})спартак(?:\\s+суббот?а|\\s+суббот?и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\\s+алх[іi]м)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:янін(?:а|и)\\s+соколов(?:а|и)|сергі(?:й|я)\\s+притул(?:а|и)|олег\\s+скрипк(?:а|и))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\\p{L})","iu"),/василь\s+малюк/iu,new RegExp("(?<!\\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:ппо|гур|ова|кмва)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)","iu"),/повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,/блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,/інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|борг(?:и|ів)|дефіцит\s+бюджету/iu,/банкрутств(?:о|а)/iu,new RegExp("(?<!\\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\\p{L})","iu"),/фаріон/iu,new RegExp("(?<!\\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\\p{L})","iu"),new RegExp("ліндсі\\s+ґ?рем|(?<!\\p{L})ґ?рем(?!\\p{L})","iu"),new RegExp("джей\\s*ді\\s*венс|(?<!\\p{L})венс(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})каллас(?!\\p{L})","iu"),/урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,/лукашенк(?:о|а|у|ом)/iu,new RegExp("(?<!\\p{L})дуд(?:а|и|і|ою)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})санд(?:у|и|а)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\\p{L})","iu"),/хаменеї|пезешкіан|раїсі/iu,/сі\s*цзіньпін/iu,/кім\s*чен\s*ин/iu,/свастик(?:а|и|у|ою)/iu,/нацизмін?|нацист(?:и|ів|ський|ська)?/iu,/фашизмін?|фашист(?:и|ів|ський|ська)?/iu,/рашизмін?|рашист(?:и|ів|ський|ська)?/iu,/комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,/ґ?геббельс(?:а|у|ом)?/iu,/ґ?гіммлер(?:а|у|ом)?/iu,/ґ?герінг(?:а|у|ом)?/iu,/ґ?гесс(?:а|у|ом)?/iu,/борман(?:а|у|ом)?/iu,/ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,/ріббентроп(?:а|у|ом)?/iu,/менгеле/iu,/розенберг(?:а|у|ом)?/iu,/кальтенбруннер(?:а|у|ом)?/iu,/коновалець|коновальц(?:я|ю|ем)/iu,/бандер(?:а|и|і|у|ою|івськ.*)/iu,/шухевич(?:а|у|ем)?/iu,/андрі(?:й|я)\s+мельник/iu,/сталін(?:а|у|ом)?/iu,/ленін(?:а|у|ом)?/iu,/берій?(?:я|ї|ю|єю)/iu,/молотов(?:а|у|ом)?/iu,/гітлер(?:а|у|ом)?/iu,new RegExp("(?<!\\p{L})хер(?:а|у|ом|и)?(?!\\p{L})","iu"),/хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,/пизд|пізд|піпєц|пипец/iu,/(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,/(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,new RegExp("бляд(?:ь|і|я|ям|ство)|блять|(?<!\\p{L})бля(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})сук(?:а|и|ою|ам|ами)(?!\\p{L})","iu"),/гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,/срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,new RegExp("(?<!\\p{L})гівн(?:о|а|ом)|говно|лайно","iu"),/сцяв|засцян.*|сцяк/iu,/х[*#@$]+й|х[*#@$]+р/iu,/п[*#@$]+зд[аяiі]/iu,/б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,/є[*#@$]+б|е[*#@$]+б/iu,new RegExp("(?<!\\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:маск(?:а|у)?|ілон\\s*маск|ердоган(?:а|у)?|нетаньягу)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алл(?:а|и|і|у)?\\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\\s+мосейчук)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:квартал\\s*95|95\\s*квартал|95-?й?\\s*квартал|студі(?:я|ї|ю)\\s+квартал)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})дизель\\s*шоу(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\\p{L})","iu"),/мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,/призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,new RegExp("(?<!\\p{L})(?:генштаб(?:у|ом)?|гш\\s+зсу)(?!\\p{L})","iu"),/главком(?:а|у)?|командувач(?:а|і|ів)?/iu,/катуванн(?:я|ь|ям)|катува.*/iu,/побит(?:тя|тєм|ті)/iu,/зодіак(?:у|а|и)/iu],If={a:"а",c:"с",e:"е",i:"і",o:"о",p:"р",x:"х",y:"у",k:"к",z:"з",n:"н"},Mf=/[\u00AD\u200B-\u200D\u2060\uFEFF]/g,Df=/[\p{L}\p{M}]+/gu,$f=/[a-z]/i,zf=/[а-яіїєґ]/iu,Lf=new RegExp("(?<=\\p{L})[^\\p{L}\\s\\n\\r]{0,3}(?=\\p{L})|(?<=\\p{L})[\\s\\n\\r]+(?=\\p{L})","gu"),Rf=/[04513@$]/g,Ef={0:"о",4:"а",5:"с",1:"і",3:"е","@":"а",$:"с"},Ni=new RegExp(Af.map(({source:t})=>`(?:${t})`).join("|"),"iu"),Rl=t=>t?t.normalize("NFKC").replace(Mf,"").toLowerCase().replace(Df,n=>!$f.test(n)||!zf.test(n)?n:n.replace(/[aceiopxykzn]/g,r=>If[r])):"",Ff=t=>Rl(t).replace(Rf,n=>Ef[n]).replace(Lf,""),Oi=t=>Ni.test(t)||Ni.test(t.replace(/і/g,"и")),Pf=t=>{if(!t)return!1;const n=Rl(t);return Oi(n)||Oi(Ff(t))},Nf=fs({Tooltip:()=>Vf,default:()=>El}),Of=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Vf=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(Of,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})},Bf=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,_f=i.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`,Vi=[{url:"https://phys.org/rss-feed/biology-news/animals-news/",name:"Phys.org",home:"https://phys.org"}],Hf=i.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`,Uf=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  width: 100%;
  box-sizing: border-box;
`,Kf=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`,Wf=i.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
  overflow-x: auto;
  min-width: 0; 
  scroll-snap-type: x mandatory;
  padding: 10px 22px 10px;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 479px) {
    justify-content: flex-start; 
  }
`,qf=i.div`
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(-50%);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 75%;
  }
      @media (max-width: 980px) {
    gap: 55%;
  }
      @media (max-width: 767px) {
    gap: 40%;
  }
 @media (max-width: 567px) {
    gap: 20%;
  }
     @media (max-width: 425px) {
    gap: 20%;
  }
`,Bi=i.button`
  width: 40px;
  height: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
      font-size: 43px;
  border-radius: 50%;
  border: 2px solid rgba(255, 179, 108, 0.85);
  color: #ffb36c;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, transform 0.2s ease;
  z-index: 1001;
  opacity: 1 !important;
  padding-bottom: 5px;
  padding-left: 4px;
  visibility: visible !important;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.92);
  }
`,Gf=i.div`
  flex: 0 0 280px;
  width: 280px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  opacity: ${t=>t.$distanceFromCenter===0?1:t.$distanceFromCenter===1?.9:.62};
  transform: scale(${t=>t.$distanceFromCenter===0?1:t.$distanceFromCenter===1?.94:.86});
  transform-origin: center center;
  transition: transform 0.25s ease, opacity 0.25s ease;

  @media (max-width: 479px) {flex: 0 0 calc(100vw - 48px);
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    max-width: 320px;
  }

  @media (min-width: 480px) and (max-width: 899px) {
    flex: 0 0 calc(50% - 5px);
    width: calc(50% - 5px);
    min-width: calc(50% - 5px);
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(28% - 4px);
    width: calc(28% - 4px);
    min-width: calc(28% - 4px);
  }
`,Nr=i.a`
  background: #1a1a1a;
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  height: auto;
  min-height: auto;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`,Jf=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`,Yf=i.span`
  position: absolute;
  top: 4px;
  left: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  width: 110px;
  border-radius: 5px;
  font-size: 14px;
  z-index: 5;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #ffb36c;
  }
  backdrop-filter: blur(4px);
`,Zf=i.span`
  position: absolute;
  top: 83%;
  right: 4px;
  background: #ddff00;
  color: #000;
  width: 38px;
  height: 20px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 900;
  z-index: 6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${Bf} 0.5s ease;
`,Xf=i.div`
  position: absolute;
  top: 3px;
  left: 83%;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 7;
`,Qf=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 25px;
  min-width: 25px;
  height: 28px;
  overflow: hidden;
  background: ${t=>t.$background};
  color: ${t=>t.$color||"white"};
  border: none;
  padding: 2px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  transition: width 0.5s ease, background 0.5s ease, transform 0.5s ease;

  svg {
    flex: 0 0 auto;
    font-size: 17px;
  }

  span {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-width 0.5s ease, opacity 0.5s ease;
  }

  &:hover,
  &:focus-visible {
    width: auto;
    transform: scale(1.05);

    span {
      max-width: 100px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`,eg=i(Qf)`
  background: rgb(8, 8, 8);
  color: #ffffff;
  width: 50px;
  height: 40px;
  &:hover,
  &:focus-visible {
    background: rgb(27, 27, 27);
      width: 50px;
  height: 40px;
  }
`,tg=i.div`
  position: absolute;
  top: 39px;
  left: -210px;
  background: rgba(30, 30, 30, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  min-width: 310px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
`,Ea=i.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 3px 7px;
  background: transparent;
  color: ${t=>t.$color||"#fff"};
  font-size: 13px;
  text-align: left;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  &[disabled] {
    opacity: 0.45;
    cursor: default;
    &:hover {
      background: transparent;
    }
  }
`,_i=i.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
`,ng=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`,ag=i.div`
  background: #060606;
  color: #fefcfc;
  padding: 5px;
  border-radius: 7px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #ffb36c;
  position: relative;
`,rg=i.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`,og=({item:t,$isDarkMode:n,showImage:r,showTitle:c,showDescription:l,onAiSummaryClick:s,onReportClick:y,onMuteClick:f,onUnmuteClick:x})=>{const g=(0,a.useRef)(null),[h,P]=(0,a.useState)(t.isNew),[D,M]=(0,a.useState)(!1),[$,C]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async()=>{const V=await u.default.getItem("gemini_api_key");M(!!V)})();const w=V=>M(!!V.detail);return window.addEventListener("geminiKeyChanged",w),()=>window.removeEventListener("geminiKeyChanged",w)},[]),(0,a.useEffect)(()=>{if(!t.isNew)return;const b=new IntersectionObserver(([w])=>{if(w.isIntersecting){const V=setTimeout(async()=>{P(!1);try{const k=await u.default.getItem("seen_news_links")||[];k.includes(t.link)||await u.default.setItem("seen_news_links",[...k,t.link])}catch{}},6e4);return b.unobserve(w.target),()=>clearTimeout(V)}},{threshold:.5});return g.current&&b.observe(g.current),()=>b.disconnect()},[t.isNew,t.link]),t.isBlocked?(0,e.jsx)(Nr,{$isDarkMode:n,style:{cursor:"not-allowed",position:"relative"},as:"div",children:(0,e.jsxs)(_i,{children:[(0,e.jsx)("span",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔒"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4"},children:"Дана новина була неправомірна, і ви не можете її переглянути."})]})}):t.isMuted?(0,e.jsx)(Nr,{$isDarkMode:n,style:{position:"relative",minHeight:"190px"},as:"div",children:(0,e.jsxs)(_i,{style:{background:"rgba(128, 128, 128, 0.5)"},children:[(0,e.jsx)("span",{style:{fontSize:"30px",marginBottom:"10px",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"🔇"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"Новину приховано."}),(0,e.jsx)("button",{onClick:b=>{b.preventDefault(),b.stopPropagation(),x&&x(t)},style:{marginTop:"10px",padding:"5px 15px",background:"#3f5959",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Розглушити"})]})}):(0,e.jsx)(Nr,{ref:g,href:t.link,target:"_blank",rel:"noopener noreferrer",$isDarkMode:n,children:(0,e.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:r?"190px":"auto",minHeight:"auto"},children:[h&&(0,e.jsx)(Zf,{children:"Нове"}),(0,e.jsx)(Yf,{onClick:b=>{b.preventDefault(),b.stopPropagation(),window.open(t.sourceHome,"_blank")},"aria-label":`Перейти на головну сторінку ${t.sourceName}`,children:t.sourceName}),(0,e.jsxs)(Xf,{"aria-label":"Дії з новиною",children:[(0,e.jsx)(eg,{"aria-label":"Налаштування картки новини",title:"Налаштування",onClick:b=>{b.preventDefault(),b.stopPropagation(),C(w=>!w)},children:(0,e.jsx)(ys,{"aria-hidden":"true",style:{fontSize:"29px"}})}),$&&(0,e.jsxs)(tg,{onClick:b=>{b.preventDefault(),b.stopPropagation()},children:[(0,e.jsxs)(Ea,{$color:D?"#ff69b4":"#888",disabled:!D,title:D?"Прикріпити до ШІ-чату":"Додайте Gemini API-ключ",onClick:()=>{if(!D)return;const b=(t.description||t.title).replace(/<[^>]*>?/gm,"").trim();window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`news-${t.link}`,type:"news",title:t.title,details:`Джерело: ${t.sourceName}. Заголовок: "${t.title}". Зміст: "${b}". Посилання: ${t.link}`}})),C(!1)},children:[(0,e.jsx)(ms,{size:14})," Прикріпити до ШІ"]}),(0,e.jsxs)(Ea,{onClick:()=>{s&&s(t),C(!1)},children:[(0,e.jsx)(ud,{size:14})," ШІ Виклад"]}),(0,e.jsx)(Ea,{onClick:()=>{navigator.clipboard.writeText(t.link).then(()=>{Ia.success("Посилання скопійовано!")}),C(!1)},children:"📋 Копіювати шлях"}),t.sourceName!=="Phys.org"&&(0,e.jsxs)(Ea,{$color:"#ff6b6b",onClick:b=>{y&&y(t,b),C(!1)},children:[(0,e.jsx)(nd,{size:14})," Поскаржитися"]}),(0,e.jsxs)(Ea,{$color:"#aaa",onClick:b=>{b.preventDefault(),b.stopPropagation(),f&&f(t,b),C(!1)},children:[(0,e.jsx)(hd,{size:14})," Заглушити"]})]})]}),r&&(0,e.jsx)(Jf,{src:t.displayImage,alt:"",onError:b=>{b.target.onerror=null,b.target.src="data:image/webp;base64,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"}}),(c||l)&&(0,e.jsxs)(ig,{$isDarkMode:n,$overlay:r,children:[c&&(0,e.jsx)("h2",{style:{margin:"0 0 8px 0",fontSize:"16px",display:"-webkit-box",WebkitLineClamp:2,fontWeight:"700",WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:"1.3"},children:t.title}),l&&(0,e.jsx)("p",{style:{fontSize:"13px",opacity:.9,margin:0,lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description})]})]})})},ig=i.div`
  padding: 8px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  min-height: auto;
  flex-grow: 0;

  ${t=>t.$overlay?`
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.83) 80%, transparent 100%);
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    margin-top: auto;
  `:`
    color: ${t.$isDarkMode?"#ffffff":"#000000"};
  `}
`,sg=i.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin-bottom: 3px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  width: 320px;
  box-sizing: border-box;
  @media (min-width: 468px) {
    width: 100%;
    }
`,Kn=i.button`
  background: ${t=>t.$active?"#5a3f27":"rgb(26, 49, 56)"};
  color: #ffffff;
  border-radius: 5px;
  padding: 1px 5px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
  }
`,lg=i.div`
  width: 300px;
  height: 8px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)"};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`,dg=i.div`
  height: 100%;
  background: ${t=>t.$isError?"#ff4d4d":"#ffb36c"};
  width: ${t=>t.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${t=>t.$isError?"rgba(255, 77, 77, 0.7)":"rgba(255, 179, 108, 0.5)"};
`,cg=i.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`,Hi=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},yo=t=>{if(!t)return"rss";const n=t.toLowerCase();return n.includes("youtube.com")||n.includes("youtu.be")?"youtube":n.includes("t.me/")||n.includes("telegram.org")||n.startsWith("@")?"telegram":n.includes("telegra.ph/")?"telegraph":n.includes("facebook.com")?"facebook":n.includes("withhive.com")?"hive":"rss"},ug=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?`https://i.ytimg.com/vi/${n[2]}/hqdefault.jpg`:null},na=async t=>{try{const n=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(t)}`);if(!n.ok)throw new Error("AllOrigins error status: "+n.status);const r=await n.json();if(!r.contents)throw new Error("AllOrigins returned empty contents");return r.contents}catch(n){console.warn("AllOrigins failed, trying corsproxy.io fallback...",n);const r=await fetch(`https://corsproxy.io/?${encodeURIComponent(t)}`);if(!r.ok)throw new Error("corsproxy.io error status: "+r.status);return await r.text()}},pg=async t=>{const n=t.match(/(UC[a-zA-Z0-9_-]{22})/);if(n)return n[1];try{const r=await na(t),c=r.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i)||r.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);return c?c[1]:null}catch(r){return console.error("Error resolving YouTube channel ID:",r),null}},Ui=t=>{if(!t)return"";let n=t.replace(/<br\s*\/?>/gi,`
`);n=n.replace(/<[^>]*>?/gm,"");const r=document.createElement("textarea");return r.innerHTML=n,r.value.trim()},fg=async t=>{let n="";const r=t.url;if(r.startsWith("@"))n=r.substring(1);else{const c=r.split("/");n=c[c.length-1]||c[c.length-2]}if(n.startsWith("+")||r.includes("joinchat"))try{const c=await na(r),l=new DOMParser().parseFromString(c,"text/html"),s=l.querySelector(".tgme_page_title")?.textContent?.trim()||"Приватний Telegram",y=l.querySelector(".tgme_page_description")?.textContent?.trim()||"Приватний канал або група.",f=l.querySelector(".tgme_page_photo_image"),x=f?f.getAttribute("src"):"";return{status:"ok",items:[{title:s,description:`${y}

Надіслати контент / Приєднатися:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:x||"",displayImage:x||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}catch{return{status:"ok",items:[{title:"Приватний Telegram Канал",description:`Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Il,sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}try{const c=`https://t.me/s/${n}`,l=await na(c),s=new DOMParser().parseFromString(l,"text/html"),y=s.querySelector(".tgme_channel_info_header_title span")?.textContent||n,f=s.querySelector(".tgme_page_photo_image img")||s.querySelector(".tgme_page_photo_image"),x=f&&f.getAttribute("src")||"",g=`https://t.me/${n}`,h=s.querySelectorAll(".tgme_widget_message"),P=[];return h.forEach(D=>{const M=D.querySelector(".tgme_widget_message_text"),$=M?M.innerHTML:"",C=M?Ui($).substring(0,100):"Повідомлення",b=D.querySelector(".tgme_widget_message_date"),w=b?b.getAttribute("href"):g,V=D.querySelector("time"),k=V?V.getAttribute("datetime"):new Date().toISOString(),R=D.querySelector(".tgme_widget_message_photo_wrap");let W="";if(R){const U=R.getAttribute("style"),N=U&&U.match(/url\(['"]?([^'"]+)['"]?\)/);N&&(W=N[1])}P.push({title:C||"Новий допис",description:$?Ui($):"Перегляньте допис у Telegram.",link:w,pubDate:k,thumbnail:W||x||"",displayImage:W||x||"data:image/webp;base64,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",sourceName:y,sourceFlag:"📢",sourceHome:g,sourceUrl:r})}),{status:"ok",items:P.reverse()}}catch(c){return console.error("Telegram scraping failed:",c),null}},gg=async t=>{try{const n=await na(t.url),r=new DOMParser().parseFromString(n,"text/html"),c=r.querySelector("header h1")?.textContent?.trim()||r.querySelector("title")?.textContent||"Telegraph стаття",l=r.querySelector("header address a")?.textContent||"Telegraph",s=r.querySelector("article img"),y=s?s.getAttribute("src"):"",f=y?y.startsWith("http")?y:`https://telegra.ph${y}`:"",x=Array.from(r.querySelectorAll("article p")).map(g=>g.textContent).join(`

`)||"Читати повну статтю на Telegraph.";return{status:"ok",items:[{title:c,description:x.substring(0,300)+(x.length>300?"...":""),link:t.url,pubDate:new Date().toISOString(),thumbnail:f||"",displayImage:f||"data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",sourceName:l,sourceFlag:"📝",sourceHome:"https://telegra.ph",sourceUrl:t.url}]}}catch(n){return console.error("Telegraph load failed:",n),null}},xg=async t=>{try{const n=await na(t.url),r=new DOMParser().parseFromString(n,"text/html"),c=r.querySelector('meta[property="og:title"]')?.getAttribute("content")||t.name,l=r.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Переглянути сторінку у Facebook.",s=r.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:c,description:l,link:t.url,pubDate:new Date().toISOString(),thumbnail:s||"",displayImage:s||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}catch(n){return console.error("Facebook OG parsing failed, trying simple card:",n),{status:"ok",items:[{title:t.name,description:"Перегляньте оновлення сторінки у Facebook за цим посиланням.",link:t.url,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Il,sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}},hg=t=>{const n=t.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);return n?{gameCode:n[1],lang:n[2]||"en",boardIdx:n[3]}:null},mg=async t=>{const n=t.url;if(n.match(/board\/(\d+)\/(\d+)/))try{const y=await na(n),f=new DOMParser().parseFromString(y,"text/html"),x=f.querySelector('meta[property="og:title"]')?.getAttribute("content")||f.querySelector(".title_wrap .title")?.textContent?.trim()||"Допис у Hive",g=f.querySelector('meta[property="og:description"]')?.getAttribute("content")||f.querySelector(".post_cont")?.textContent?.trim().substring(0,300)||"Деталі допису у спільноті Hive.",h=f.querySelector('meta[property="og:image"]')?.getAttribute("content")||f.querySelector(".post_cont img")?.getAttribute("src")||"";return{status:"ok",items:[{title:x,description:g.length>=300?g.substring(0,300)+"...":g,link:n,pubDate:new Date().toISOString(),thumbnail:h||"",displayImage:h||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:n.split("/board/")[0],sourceUrl:n}]}}catch(y){console.error("Failed to parse single Hive post:",y)}const r=hg(n);if(!r)return null;const{gameCode:c,lang:l,boardIdx:s}=r;try{const y=`https://corsproxy.io/?https://community.withhive.com/${c}/board/list/getBoardList`,f=await(await fetch(y,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams({page:1,board_idx:s,board_type:1,board_comment:1,boardtype1_preview_image:"1",is_mobile:1,select_type:1,view_type:"list"})})).json();if(!f.list)throw new Error("No dynamic list found");const x=new DOMParser().parseFromString(f.list,"text/html").querySelectorAll("li"),g=[];return x.forEach(h=>{const P=h.querySelector("a");if(!P)return;const D=P.getAttribute("href")||"",M=D.startsWith("http")?D:`https://community.withhive.com${D}`,$=h.querySelector(".title, .subject, p, h3, h4"),C=$?$.textContent.trim():"Hive Post",b=h.querySelector("img");let w="";if(b)w=b.getAttribute("src")||b.getAttribute("data-src")||"";else{const U=h.querySelector(".thumb");if(U){const N=U.getAttribute("style"),_=N&&N.match(/url\(['"]?([^'"]+)['"]?\)/);_&&(w=_[1])}}const V=h.querySelector(".t_date, .date, .time"),k=V?V.textContent.trim():new Date().toISOString(),R=h.querySelector(".desc, .text, .wordcut"),W=R?R.textContent.trim():"";g.push({title:C,description:W||"Перегляньте допис у спільноті Hive.",link:M,pubDate:k,thumbnail:w||"",displayImage:w||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:n})}),{status:"ok",items:g}}catch{console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");try{const f=await na(n),x=new DOMParser().parseFromString(f,"text/html"),g=x.querySelector('meta[property="og:title"]')?.getAttribute("content")||x.querySelector(".board_cmm .title")?.textContent?.trim()||`Hive Board ${s}`,h=x.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Перегляньте дописи у спільноті Hive.",P=x.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:g,description:h,link:n,pubDate:new Date().toISOString(),thumbnail:P||"",displayImage:P||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:n}]}}catch{return null}}},bg=async t=>{const n=yo(t.url);return n==="telegram"?await fg(t):n==="telegraph"?await gg(t):n==="hive"?await mg(t):n==="facebook"?await xg(t):null},El=({isDarkMode:t,isStickyBgMode:n,user:r})=>{const{registerRef:c}=Ba?.()||{registerRef:()=>{}},l=t,[s,y]=(0,a.useState)([]),[f,x]=(0,a.useState)(0),[g,h]=(0,a.useState)(!0),[P,D]=(0,a.useState)(0),[M,$]=(0,a.useState)(!1),[C,b]=(0,a.useState)(["all"]),w=A=>{if(A==="all"){b(["all"]);return}let E=[...C].filter(X=>X!=="all");E.includes(A)?E=E.filter(X=>X!==A):E.push(A),E.length===0&&(E=["all"]),b(E)},[V,k]=(0,a.useState)(null),[R,W]=(0,a.useState)(0),U=async A=>{if(!A||A.length<3)return A;try{const E=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(A)}`);return Oe.current?(await E.json())[0].map(X=>X[0]).join(""):A}catch{return A}},[N,_]=(0,a.useState)(!1),[ge,ne]=(0,a.useState)(null),[q,Z]=(0,a.useState)(!1),[se,Se]=(0,a.useState)(!1),[fe,tt]=(0,a.useState)([]),[Ce,ct]=(0,a.useState)(""),[xe,He]=(0,a.useState)(!1),[,$e]=(0,a.useState)([]),[wt,vt]=(0,a.useState)([]),[kt,Ze]=(0,a.useState)(!1),[xt,_e]=(0,a.useState)([]),[ht,Tt]=(0,a.useState)(!1),Oe=(0,a.useRef)(!0),T=(0,a.useRef)(null);(0,a.useEffect)(()=>(Oe.current=!0,(async()=>{try{const E=await u.default.getItem("custom_news_sources");E&&tt(E)}catch{}})(),()=>{Oe.current=!1}),[]),(0,a.useEffect)(()=>{(async()=>{try{const E=await u.default.getItem("filtered_news_stats");E?.date===Hi()&&Array.isArray(E.links)&&Oe.current&&x(E.links.length)}catch{}})()},[]),(0,a.useEffect)(()=>{(async()=>{if(r?.syncMutedNews&&r?.mutedNews)_e(r.mutedNews);else try{const E=await u.default.getItem("muted_news_urls")||[];_e(E)}catch{}})()},[r?.syncMutedNews,r?.mutedNews]),(0,a.useEffect)(()=>{if(r?.newsAutoScroll!==!0)return;const A=window.setTimeout(()=>{T.current?.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>window.clearTimeout(A)},[r?.newsAutoScroll]),(0,a.useEffect)(()=>{const A=()=>{Se(!0),setTimeout(()=>Se(!1),1500)},E=setTimeout(A,2e3),X=setInterval(A,7e3);return()=>{clearTimeout(E),clearInterval(X)}},[]);const F=(0,a.useCallback)(async(A=!1)=>{const E=new AbortController().signal;A&&Oe.current&&(h(!0),D(5),$(!1));try{let X=[];const ie=await u.default.getItem("custom_news_sources")||[],Ke=[...Vi,...ie];let ke=[],We=[];try{const oe=await li(Qo(kn,"news_reports")),ye=await li(Qo(kn,"rss_reports")),qe=Date.now(),le=864e5;oe.forEach(we=>{(we.data().reports||[]).filter(Pe=>{const Ge=typeof Pe=="object"?Pe.timestamp:Pe;return qe-Ge<le}).length>=10&&ke.push(we.id)});const Te=[];ye.forEach(we=>{const Pe=we.data();(Pe.reports||[]).filter(Ge=>{const dn=typeof Ge=="object"?Ge.timestamp:Ge;return qe-dn<le}).length>=20&&(Te.push({id:we.id,url:decodeURIComponent(we.id),name:Pe.name||"Джерело"}),We.push(decodeURIComponent(we.id)))}),Oe.current&&($e(ke),vt(Te))}catch{}for(const oe of Ke)if(!We.includes(oe.url))try{const ye=yo(oe.url);if(ye!=="rss"&&ye!=="youtube"){const qe=await bg(oe);qe&&qe.items&&qe.items.length>0&&(X=[...X,...qe.items])}else{const qe=await(await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(oe.url)}`,{signal:E})).json();if(qe.status==="ok"&&qe.items.length>0){const le=qe.items.map(Te=>{const we=ug(Te.link);return{...Te,thumbnail:we||Te.thumbnail||"",displayImage:we||Te.thumbnail||"data:image/webp;base64,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",sourceName:oe.name,sourceFlag:oe.flag,sourceHome:oe.home,sourceUrl:oe.url}});X=[...X,...le]}}}catch{continue}if(X.length===0){Oe.current&&($(!0),D(100),h(!1));return}A&&Oe.current&&D(25),X.sort((oe,ye)=>new Date(ye.pubDate)-new Date(oe.pubDate));const rt=X.filter(oe=>{const ye=oe.title+" "+(oe.description||"");return!Pf(ye)}),It=X.filter(oe=>!rt.includes(oe)).map(oe=>oe.link||`${oe.sourceUrl}:${oe.title}`),Ut=Hi(),ve=await u.default.getItem("filtered_news_stats"),Mt=ve?.date===Ut&&Array.isArray(ve.links)?ve.links:[],Vt=[...new Set([...Mt,...It])];await u.default.setItem("filtered_news_stats",{date:Ut,links:Vt}),Oe.current&&x(Vt.length);const Et=rt.slice(0,15),ln=new Array(Et.length),ot=[],Dt=[],Fe=await u.default.getItem("seen_news_links")||[];for(let oe=0;oe<Et.length;oe++){const ye=Et[oe],qe=`news_trans_${ye.link}`,le=await u.default.getItem(qe),Te=!Fe.includes(ye.link);if(le)ln[oe]={...le,sourceName:ye.sourceName,sourceFlag:ye.sourceFlag,sourceHome:ye.sourceHome,sourceUrl:ye.sourceUrl,isNew:Te,isBlocked:ke.includes(encodeURIComponent(ye.link))};else{const we=(ye.description||"").replace(/<[^>]*>?/gm,"").trim().substring(0,170);ot.push(oe),Dt.push(ye.title),Dt.push(we)}}if(Dt.length>0){A&&Oe.current&&D(40);let oe=[],ye=[],qe=0;const le=[];for(let Te=0;Te<ot.length;Te++){const we=Dt[Te*2],Pe=Dt[Te*2+1],Ge=we.length+Pe.length+10;qe+Ge>4500&&oe.length>0&&(le.push({strings:oe,indices:ye}),oe=[],ye=[],qe=0),oe.push(we,Pe),ye.push(ot[Te]),qe+=Ge}oe.length>0&&le.push({strings:oe,indices:ye});for(const Te of le){const we=Te.strings.join(" ___ "),Pe=(await U(we)).split(/\s*___\s*/);for(let Ge=0;Ge<Te.indices.length;Ge++){const dn=Te.indices[Ge],it=Et[dn],xn=it.enclosure&&it.enclosure.link||it.thumbnail||"data:image/webp;base64,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",Wt={title:Pe[Ge*2]?.trim()||it.title,description:(Pe[Ge*2+1]?.trim()||"")+"...",link:it.link,displayImage:xn,sourceName:it.sourceName,sourceFlag:it.sourceFlag,sourceHome:it.sourceHome,sourceUrl:it.sourceUrl,isNew:!Fe.includes(it.link),isBlocked:ke.includes(encodeURIComponent(it.link))};await u.default.setItem(`news_trans_${it.link}`,Wt),ln[dn]=Wt}}}A&&Oe.current&&D(100);const Kt=(await u.default.keys()).filter(oe=>oe.startsWith("news_trans_")),Le=Et.map(oe=>`news_trans_${oe.link}`);for(const oe of Kt)Le.includes(oe)||await u.default.removeItem(oe);Oe.current&&(y(ln),k(new Date))}catch(X){if(X.name==="AbortError"||X.message?.includes("aborted")){console.log("Запит було скасовано");return}console.error("Справжня помилка завантаження:",X),Oe.current&&($(!0),D(100),A&&(h(!0),await new Promise(ie=>setTimeout(ie,2500))))}finally{Oe.current&&h(!1)}},[]),te=s.filter(A=>C.includes("all")||C.includes(A.sourceName)),de=te.slice(0,15).map(A=>({...A,isMuted:xt.includes(A.link)})),Ee=de.length>0?[...de,...de,...de]:[],Ve=(0,a.useRef)(null),[ze,nt]=(0,a.useState)(null),ce=(0,a.useRef)(!1),jt=(0,a.useRef)(null),mt=(0,a.useCallback)(()=>{const A=Ve.current;if(!A)return;const E=A.getBoundingClientRect().left+A.clientWidth/2;let X=null,ie=1/0;[...A.querySelectorAll("[data-news-slide]")].forEach((Ke,ke)=>{const We=Ke.getBoundingClientRect(),rt=Math.abs(We.left+We.width/2-E);rt<ie&&(ie=rt,X=ke)}),nt(X)},[]),at=A=>{if(!Ve.current)return;const E=Ve.current,X=(E.querySelector("[data-news-slide]")?.getBoundingClientRect().width||280)+(Number.parseFloat(getComputedStyle(E).gap)||5);ce.current=!0,E.scrollBy({left:A==="left"?-X:X,behavior:"smooth"}),setTimeout(()=>{ce.current=!1},600)},At=()=>{!Ve.current||de.length===0||(mt(),!ce.current&&(jt.current&&clearTimeout(jt.current),jt.current=setTimeout(()=>{const A=Ve.current;if(!A)return;const E=A.scrollWidth/3,X=12,ie=A.style.scrollSnapType;A.scrollLeft<=X?(ce.current=!0,A.style.scrollSnapType="none",A.scrollLeft+=E,requestAnimationFrame(()=>{A.style.scrollSnapType=ie,ce.current=!1})):A.scrollLeft>=E*2-X&&(ce.current=!0,A.style.scrollSnapType="none",A.scrollLeft-=E,requestAnimationFrame(()=>{A.style.scrollSnapType=ie,ce.current=!1}))},150)))};(0,a.useEffect)(()=>{if(Ve.current&&de.length>0){const A=Ve.current.scrollWidth/3;Ve.current.scrollLeft=A,requestAnimationFrame(mt)}},[de.length,C,mt]),(0,a.useEffect)(()=>{(async()=>{try{const X=await u.default.getItem("news_refresh_cooldown_end");if(X){const ie=Math.ceil((X-Date.now())/1e3);ie>0&&W(ie)}}catch{}F(!0)})();const E=setInterval(()=>F(!1),36e5);return()=>{clearInterval(E)}},[]),(0,a.useEffect)(()=>{if(R>0){const A=setTimeout(()=>W(R-1),1e3);return()=>clearTimeout(A)}else u.default.removeItem("news_refresh_cooldown_end")},[R]);const Xe=async()=>{let A=Ce.trim();if(A){if(fe.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}try{let E=A,X="",ie=(0,e.jsx)(Tr,{}),Ke="";E.startsWith("@")&&(E=`https://t.me/${E.slice(1)}`),!E.startsWith("http://")&&!E.startsWith("https://")&&(/^[a-zA-Z0-9_]+$/.test(E)?E=`https://t.me/${E}`:E=`https://${E}`);const ke=new URL(E),We=ke.hostname.replace("www.","");X=We,Ke=ke.origin;const rt=yo(E);if(rt==="youtube"){alert("Здійснюється пошук ID YouTube каналу...");const ve=await pg(E);if(ve)E=`https://www.youtube.com/feeds/videos.xml?channel_id=${ve}`,X=`YouTube: ${We}`,ie=(0,e.jsx)(tc,{});else{alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");return}}else if(rt==="telegram"){const ve=E.split("/");X=`Telegram: ${ve[ve.length-1]||ve[ve.length-2]}`,ie=E.includes("+")||E.includes("joinchat")?"🔒":"📢",Ke=E}else if(rt==="telegraph")X="Telegraph",ie=(0,e.jsx)(Tr,{}),Ke="https://telegra.ph";else if(rt==="facebook"){const ve=E.split("/"),Mt=ve[ve.length-1]||ve[ve.length-2];E=`https://www.facebook.com/${Mt}`,X=`Facebook: ${Mt}`,ie=(0,e.jsx)(ed,{}),Ke=E}else if(rt==="hive"){const ve=E.match(/withhive\.com\/([a-zA-Z0-9_-]+)/),Mt=ve?ve[1]:"Hive";X=`Hive: ${Mt}`,ie=(0,e.jsx)(cd,{}),Ke=`https://community.withhive.com/${Mt}`}else X=We,ie=(0,e.jsx)(Tr,{});const It={url:E,name:X,flag:ie,home:Ke,type:rt},Ut=await u.default.getItem("custom_news_sources")||[];if(Ut.find(ve=>ve.url===E))alert("Це джерело вже додано.");else{if(Ut.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}const ve=[...Ut,It];await u.default.setItem("custom_news_sources",ve),tt(ve),ct(""),He(!1),F(!0)}}catch(E){console.error(E),alert("Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)")}}},bt=async(A,E)=>{if(E.preventDefault(),E.stopPropagation(),!r){alert("Тільки авторизовані користувачі можуть залишати скарги.");return}if(window.confirm("Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)"))try{const X=yi.currentUser||(await ac(yi)).user,ie=r.uid||X.uid,Ke=encodeURIComponent(A.link),ke=encodeURIComponent(A.sourceUrl),We=Date.now(),rt={uid:ie,timestamp:We},It=Vn(kn,"news_reports",Ke),Ut=await gr(It);if(Ut.exists()){if((Ut.data().reports||[]).some(Vt=>Vt.uid===ie&&We-Vt.timestamp<864e5)){alert("Ви вже скаржилися на цю новину сьогодні.");return}await Wa(It,{reports:oi(rt)})}else await Fa(It,{reports:[rt]});const ve=Vn(kn,"rss_reports",ke),Mt=await gr(ve);Mt.exists()?(Mt.data().reports||[]).some(Vt=>Vt.uid===ie&&We-Vt.timestamp<864e5)||await Wa(ve,{reports:oi(rt)}):await Fa(ve,{reports:[rt],name:A.sourceName}),alert("Скаргу прийнято. Дякуємо!"),F(!0)}catch(X){console.warn("Помилка відправки скарги:",X),alert("Помилка відправки скарги.")}},B=async(A,E)=>{E&&(E.preventDefault(),E.stopPropagation());const X=[...xt,A.link];if(_e(X),r?.syncMutedNews&&r?.uid)try{await Wa(Vn(kn,"users",r.uid),{mutedNews:X})}catch(ie){console.warn("Помилка збереження заглушеної новини в Firebase",ie)}else try{await u.default.setItem("muted_news_urls",X)}catch{}},ae=async A=>{const E=xt.filter(X=>X!==A.link);if(_e(E),r?.syncMutedNews&&r?.uid)try{await Wa(Vn(kn,"users",r.uid),{mutedNews:E})}catch(X){console.warn("Помилка розглушення новини в Firebase",X)}else try{await u.default.setItem("muted_news_urls",E)}catch{}},ue=async A=>{if(window.confirm("Видалити це джерело новин?"))try{const E=await u.default.getItem("custom_news_sources")||[],X=E.filter(Ke=>Ke.url!==A);await u.default.setItem("custom_news_sources",X),tt(X);const ie=E.find(Ke=>Ke.url===A)?.name;ie&&C.includes(ie)&&b(["all"]),F(!0)}catch(E){console.error("Localforage error:",E),alert("Помилка видалення джерела.")}},Be=r?.newsLayout||[],Rt=A=>Be.find(E=>E.key===A)?.visible!==!1,re=!0,be=Rt("title"),ut=Rt("description");return(0,e.jsxs)(Hf,{ref:T,children:[(0,e.jsxs)(_f,{$isStickyBgMode:n,$isDarkMode:l,children:[(0,e.jsx)(Uf,{$isDarkMode:l,children:(0,e.jsx)(Kn,{ref:A=>c("newsHeader",A),$isDarkMode:l,onClick:()=>Tt(!ht),style:{marginLeft:"5px",padding:"2px",fontSize:"15px",fontWeight:"600",background:"none"},children:"Натисніть для додавання стрічки новин"})}),(0,e.jsx)(fr,{children:ht&&(0,e.jsxs)(jn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:[(0,e.jsxs)(sg,{children:[(0,e.jsx)(Kn,{$isDarkMode:l,onClick:()=>Z(!0),children:"Інструкція"}),(0,e.jsxs)(Kn,{$isDarkMode:l,$active:C.includes("all"),onClick:()=>w("all"),children:[C.includes("all")?"☑":"☐"," Усі"]}),Vi.map(A=>(0,e.jsxs)(Kn,{$isDarkMode:l,$active:C.includes(A.name),onClick:()=>w(A.name),children:[C.includes(A.name)?"☑":"☐"," ",A.name]},A.name)),fe.map(A=>(0,e.jsxs)(Kn,{$isDarkMode:l,$active:C.includes(A.name),onClick:()=>w(A.name),children:[C.includes(A.name)?"☑":"☐"," ",A.name,(0,e.jsx)("span",{onClick:E=>{E.stopPropagation(),ue(A.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},A.url)),fe.length<5&&(0,e.jsx)(Kn,{$isDarkMode:l,onClick:()=>He(!xe),style:{borderStyle:"dashed"},children:xe?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(Kn,{$isDarkMode:l,onClick:()=>Ze(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",wt.length,")"]})]}),(0,e.jsx)(fr,{children:xe&&(0,e.jsx)(jn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:Ce,onChange:A=>ct(A.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"5px",borderRadius:"5px",border:`1px solid ${l?"rgba(0, 0, 0, 0.98)":"rgb(255, 255, 255)"}`,background:"transparent",color:"#fff",outline:"none",minWidth:"248px",fontFamily:"var(--font-family)",fontSize:"12px","--placeholder-color":"rgba(255, 255, 255, 0.97)"}}),(0,e.jsx)(Kn,{$isDarkMode:l,onClick:Xe,style:{background:"#ffb36c",color:"#000"},children:"Додати"})]})})})]})})]}),g?(0,e.jsxs)("div",{style:{textAlign:"center",color:"gray",padding:"60px 20px"},children:[(0,e.jsx)("div",{style:{marginBottom:"15px",fontSize:"14px",background:"rgba(0, 0, 0, 0.71)",color:"#fff",borderRadius:"5px",padding:"10px 15px",borderRadius:"5px",display:"inline-block",fontWeight:"900"},children:M?"Помилка завантаження!":`Шукаємо цікаві новини: ${P}%`}),(0,e.jsx)(lg,{$isDarkMode:l,children:(0,e.jsx)(dg,{$progress:P,$isError:M})})]}):te.length>0?(0,e.jsxs)("div",{style:{position:"relative",maxWidth:"1400px",margin:"0 auto"},children:[(0,e.jsx)(fr,{mode:"wait",children:(0,e.jsx)(jn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},style:{width:"100%"},children:(0,e.jsxs)(Kf,{children:[(0,e.jsx)(Wf,{ref:Ve,onScroll:At,children:Ee.map((A,E)=>(0,e.jsx)(Gf,{"data-news-slide":!0,$distanceFromCenter:ze===null?2:Math.min(Math.abs(ze-E),2),children:(0,e.jsx)(og,{item:A,$isDarkMode:l,showImage:re,showTitle:be,showDescription:ut,onAiSummaryClick:X=>{ne(X),_(!0)},onReportClick:bt,onMuteClick:B,onUnmuteClick:ae})},`${A.link}-${E}`))}),(0,e.jsxs)(qf,{$visible:se,children:[(0,e.jsx)(Bi,{style:{paddingRight:"10px"},onClick:()=>at("left"),children:"◂"}),(0,e.jsx)(Bi,{onClick:()=>at("right"),children:"▸"})]})]})},C.join(","))}),(0,e.jsxs)(cg,{$isDarkMode:l,children:["За сьогодні відфільтровано ",f," небажаних новин."]})]}):(0,e.jsx)("div",{style:{textAlign:"center",color:"white",padding:"14px",background:"#0000009c",marginTop:"20px",fontSize:"12px"},children:"Перевірте інтернет зв'язок. У випадку стабільного зв'язку це означає, що всі новини сайту мали недопустимий характер і ми їх не пропустили."}),ge&&(0,e.jsx)(U0,{isOpen:N,onClose:()=>_(!1),newsItem:ge,isDarkMode:l}),q&&(0,e.jsx)(Ll,{isOpen:q,onClose:()=>Z(!1),initialFaqQuestion:"Навчання по управлінню новинами"}),kt&&(0,e.jsx)(ng,{onClick:()=>Ze(!1),children:(0,e.jsxs)(ag,{$isDarkMode:l,onClick:A=>A.stopPropagation(),children:[(0,e.jsx)(rg,{onClick:()=>Ze(!1),children:"✕"}),(0,e.jsx)("h2",{style:{marginTop:0},children:"Чорний список (карантин 24 год)"}),(0,e.jsx)("p",{style:{fontSize:"13px"},children:"Ці RSS-джерела отримали багато скарг і відключені для всіх користувачів."}),wt.length===0?(0,e.jsx)("p",{children:"Наразі немає заблокованих джерел."}):(0,e.jsx)("ul",{style:{paddingLeft:"20px",marginTop:"15px"},children:wt.map(A=>(0,e.jsxs)("li",{style:{marginBottom:"15px"},children:[(0,e.jsx)("strong",{style:{fontSize:"16px"},children:A.name}),(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:A.url,target:"_blank",rel:"noreferrer",style:{fontSize:"12px",color:"#ffb36c",wordBreak:"break-all"},children:A.url})]},A.id))})]})})]})},yg=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Ki=(t,n)=>{Ia(t,{duration:4e3,style:{backgroundColor:n?"#0c0c0cbf":"#fdff98bb",color:n?"#ffffff":"#1a1a1a",border:"2px solid #00afce",borderRadius:"6px",boxShadow:`0 4px 12px rgba(0, 0, 0, ${n?"0.5":"0.15"})`,fontSize:"13px",fontWeight:"500",zIndex:"10000",padding:"10px 16px",backdropFilter:"blur(4px)"},icon:"⚠️"})},wg=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,vg=je`
  from { opacity: 1; }
  to { opacity: 0; }
`,kg=je`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,jg=je`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,Sg=je`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`,Cg=je`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,Tg=i.div`
  position: relative;
  width: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`,Ag=i.div`
  display: block;
  width: 192px;
  margin-top: 45px;
  height: 71px;
  background-image: url(${t=>t.$image});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.5);
  animation: ${t=>t.$start?sn`
          ${Sg} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `:"none"};
`,Ig=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${t=>t.$start?sn`
          ${Cg} 1s ease-out forwards
        `:"none"};
  animation-delay: ${t=>t.$start?"1.5s":"0s"};
`,Mg=je`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`,Na=t=>t?t instanceof Blob?t.type.startsWith("video/"):typeof t!="string"?!1:t.includes(".mp4")||t.includes(".webm")||t.includes(".ogg")||t.includes(".mov")||t.startsWith("data:video/")||t.startsWith("blob:"):!1,Wi=async t=>{if(!t)return;const n=typeof t=="string"?t:t.src,r=typeof t=="string"?"background":t.name||"background";if(!n)return;const c=Na(n)?".mp4":".webp",l=r.replace(/[/\\?%*:|"<>]/g,"-").trim()||"background",s=l.toLowerCase().endsWith(c)?l:`${l}${c}`,y=Ia.loading("Завантаження файлу...",{id:"bg-download"});try{const f=await fetch(n);if(!f.ok)throw new Error(`HTTP error ${f.status}`);const x=await f.blob(),g=URL.createObjectURL(x),h=document.createElement("a");h.href=g,h.download=s,document.body.appendChild(h),h.click(),document.body.removeChild(h),setTimeout(()=>URL.revokeObjectURL(g),1500),Ia.success(`Збережено: ${s}`,{id:y})}catch(f){console.warn("Blob fetch download failed, using direct download:",f);try{const x=document.createElement("a");x.href=n,x.download=s,x.target="_blank",x.rel="noopener noreferrer",document.body.appendChild(x),x.click(),document.body.removeChild(x),Ia.success(`Відкрито для скачування: ${s}`,{id:y})}catch{Ia.error("Не вдалося скачати файл",{id:y})}}},or=t=>{const n=[...t];for(let r=n.length-1;r>0;r--){const c=Math.floor(Math.random()*(r+1));[n[r],n[c]]=[n[c],n[r]]}return n},ir=t=>{if(t.author)return t.author;if(!t.snippet)return null;const n=t.snippet.match(/Постачальник(?:и)?:\s*([^\n]+)/);return n?n[1].trim():null},Dg=t=>{if(!t)return null;const n=t.images?.[0];return n?Ol[n]||n:null},$g=(t="")=>t.includes("play.google.com")?"playmarket":t.includes("store.steampowered.com")?"steam":t.includes("apps.apple.com")||t.includes("itunes.apple.com")?"appstore":null,Or={playmarket:{label:"Play Market",emoji:"🤖",color:"#01875f"},steam:{label:"Steam",emoji:"🎮",color:"#1b2838"},appstore:{label:"App Store",emoji:"🍎",color:"#0071e3"}},Vr=t=>{if(!t)return[];const n=[];if(t.platforms&&Array.isArray(t.platforms))return t.platforms;const r=$g(t.url);if(r&&n.push({type:r,url:t.url}),t.snippet){if(t.snippet.includes("play.google.com")&&!n.some(c=>c.type==="playmarket")){const c=t.snippet.match(/(https:\/\/play\.google\.com\/[^\s\n\)]+)/);c&&n.push({type:"playmarket",url:c[1]})}if(t.snippet.includes("store.steampowered.com")&&!n.some(c=>c.type==="steam")){const c=t.snippet.match(/(https:\/\/store\.steampowered\.com\/[^\s\n\)]+)/);c&&n.push({type:"steam",url:c[1]})}}return n},zg=(t=[],n=[])=>{const r=new Set;return[...t||[],...n||[]].filter(c=>{const l=`${c?.lat??""}-${c?.lon??""}-${c?.name??""}-${c?.country??""}`;return!c||r.has(l)?!1:(r.add(l),!0)})},Lg=i.div`
  position: ${t=>t.$isStickyBgMode?"fixed":"absolute"} !important;
  width: ${t=>t.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${t=>t.$isStickyBgMode?"100vh":"100%"} !important;
  top: 0;
  left: 0;
  opacity: ${t=>t.$active?1:0};
  transition:
    opacity ${t=>t.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: scale(
      ${t=>(t.$zoom||1)*(t.$rotationScale||1)}
    )
    rotate(${t=>t.$rotation||0}deg);
  transform-origin: ${t=>t.$focalX}% ${t=>t.$focalY}%;
  filter: ${t=>t.$blurType==="pixelated"?t.$pixelation>.5?"url(#pixelate-hero)":"none":`blur(${t.$blur||0}px)`};
  z-index: ${t=>t.$isStickyBgMode?"-10":"-2"} !important;
  animation: ${t=>t.$panEnabled&&t.$zoom>1?sn`
          ${Mg} ${t.$panSpeed||6}s infinite linear
        `:"none"};
`,sr=t=>{const{$image:n,$active:r,$focalX:c,$focalY:l,$videoStart:s,$videoEnd:y,$videoPlaybackSpeed:f}=t,[x,g]=(0,a.useState)(typeof n=="string"?n:""),h=(0,a.useRef)(null),P=t.$blurType==="pixelated";(0,a.useEffect)(()=>{let C=null;return n instanceof Blob?(C=URL.createObjectURL(n),g(C)):g(n),()=>{C&&URL.revokeObjectURL(C)}},[n]),(0,a.useEffect)(()=>{h.current&&(r?(s!=null&&h.current.currentTime<s&&(h.current.currentTime=s),h.current.playbackRate=f||1,h.current.play().catch(()=>{})):h.current.pause())},[r,s,f]);const D=Na(n),M=s??0,$=y??null;return(0,e.jsx)(Lg,{...t,children:D?(0,e.jsx)("video",{ref:h,src:x,muted:!0,loop:!0,playsInline:!0,onTimeUpdate:C=>{const b=C.target.currentTime;$!==null&&b>=$&&(C.target.currentTime=M)},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${c}% ${l}%`,imageRendering:P?"pixelated":"auto"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${x||"/assets/fog-Cew27ml4.webp"})`,backgroundSize:"cover",backgroundPosition:`${c}% ${l}%`,backgroundRepeat:"no-repeat",imageRendering:P?"pixelated":"auto"}})})},Rg=i.div`
  position: ${t=>t.$isStickyBgMode?"fixed":"absolute"} !important;
  top: 0;
  left: 0;
  width: ${t=>t.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${t=>t.$isStickyBgMode?"100vh":"100%"} !important;
  background: rgba(0, 0, 0, ${t=>t.$opacity});
  z-index: ${t=>t.$isStickyBgMode?"-9":"-1"} !important;
  pointer-events: none;
  transition:
    background 0.5s ease,
    width 0.5s ease,
    height 0.5s ease;
`,Eg=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,Fg=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`,Pg=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ng=i.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  width: 300px;
  background: #00000056;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,Og=i.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`,Vg=i.div`
  position: fixed;
  top: 5%;
  left: 0%;
  width: 100vw;
  height: 97vh;
  background: rgba(2, 2, 2, 0.97);
  border-top: 2px solid #ffb36c;
  padding: 0;
  overflow-y: auto;
  z-index: 99999;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,Bg=i.button`
  width: 100%;
  background: transparent;
  color: ${t=>t.$selected?"#ffb36c":"#fff"};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${t=>t.$selected?"#ffb36c":"transparent"};
  padding: 5px 10px;
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  transition: all 0.15s ease;
  font-weight: ${t=>t.$selected?"bold":"normal"};
  background: ${t=>t.$selected?"rgba(255,179,108,0.08)":"transparent"};

  &:hover {
    background: rgba(255, 179, 108, 0.15);
    border-left-color: #ffb36c;
    color: #ffb36c;
  }
`;i.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2000;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.1) 0%,
    transparent 70%
  );
  border: 4px solid rgba(255, 215, 0, 0.15);
  box-shadow: inset 0 0 50px rgba(255, 215, 0, 0.2);
  opacity: ${t=>t.$active?1:0};
  transition: opacity 2s ease;

  &::after {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${t=>t.$color||"gold"};
    font-size: 14px;
    font-weight: 900;
    text-shadow: 0 0 10px black;
  }
`;var _g=i.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`,Br=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,_r=i.button`
  width: 30px;
  height: 30px;
  border-radius: 10px 0 0 0;
  border: none;
  border-right: 2px solid black;
  background: #1b4b64;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: #353988; }
`,Hr=i.div`
  position: absolute;
  top: 19px;
  left: 30px;
  background: ${t=>t.$isDarkMode?"rgba(10, 10, 20, 0.95)":"rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
  backdrop-filter: blur(12px);
  border-radius: 5px;
  overflow: hidden;
  z-index: 200;
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`,Nn=i.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 10px;
  background: ${t=>t.$active?t.$isDarkMode?"rgba(108,255,228,0.15)":"rgba(0, 175, 206, 0.15)":"transparent"};
  border: none;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"};
  color: ${t=>t.$active?t.$isDarkMode?"#6cffe4":"#007b99":t.$isDarkMode?"#fff":"#222"};
  font-size: 15px;
  font-weight: ${t=>t.$active?"700":"500"};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255,179,108,0.15)":"rgba(255,179,108,0.25)"};
    color: #ff8c2b;
  }
`,qi=i.button`
  padding: 14px;
  background: ${t=>t.$active?"#6cffe48b":"rgba(255, 234, 0, 0.5)"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: 1px solid
    ${t=>t.$active?"#ffff00":"rgb(0, 255, 238)"};
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-family);
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${t=>t.$active?"#98ff6ca0":"rgba(0, 255, 119, 0.59)"};
  }
`,Hg=i.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`,Gi=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 120px;
    height: 30px;
    padding: 5px;
    font-size: 10px;
    border-radius: 8px;
    border: 1px solid #ffb36c;
    background: ${t=>t.$isDarkMode?"white":"black"};
    color: #222;
    font-weight: 500;
    &::placeholder {
      color: #303030;
    }
  }
`,Ug=i.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`,Kg=i.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`,Wg=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a00;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background 0.2s;
`,qg=i.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`,Ji=i.button`
  background: ${t=>t.$active?"#ffb36c":"rgba(255, 179, 108, 0.1)"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 3px;
  padding: 8px 4px;
  font-size: 12px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: ${t=>t.$active?"#ffb36c5d":"rgba(255, 179, 108, 0.3)"};
  }
`,Gg=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Jg=i.div`
  position: relative;
  display: flex;
  width: 99.7%;
  justify-content: center;
`,Yg=i.input`
  width: 100%;
  height: 30px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 11px;
  color: #040404;
  padding-left: 8px;
  padding-right: 35px;
  background: #ffffff;
  border-radius: 0;
  border: none;
  border-right: 2px solid black;
  outline: none;
  box-sizing: border-box;
    &::placeholder {
    color: #000000;
  }
`,Zg=i.button`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border-left: 3px solid black;
  border-top: 1px solid black;
  cursor: pointer;
  font-size: 30px;
  color: rgb(2, 2, 2);
  background: rgb(183, 101, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 30px;
  transition: all 0.2s;
  &:hover {
    font-weight: bold;
  }
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`,Ur=i.button`
  position: relative;
  border-radius: 0 10px 0px 0;
  width: 30px;
  height: 30px;
  background: ${t=>t.disabled?"#ffffff":"yellow"};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-left: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  color: black;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  &:hover {
    background: ${t=>t.disabled?"#ccc":"skyblue"};
    color: ${t=>t.disabled?"black":"transparent"};
  }
  ${t=>!t.disabled&&sn`
      &:hover::after {
        content: "+";
        position: absolute;
        color: black;
        font-size: 22px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`,Yi=i.div`
  position: absolute;
  top: 100%;
  align-items: center;
  background: ${t=>t.isDarkMode?"#fefefeec":"#000000da"};
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
  @media (min-width: 1200px) {
      width: 99.7%;
  }
`,Zi=i.button`
  width: 100%;
  text-align: left;
  padding: 2px;
  border-top: 1px solid #eee;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: ${t=>t.isDarkMode?"#050505fb":"#f4f2f2"};
  &:hover {
    background: skyblue;
    color: white;
  }
`;i.div`
  position: absolute;
  top: 100%;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: ${t=>t.$hasExpanded?"hidden":"auto"};
  border-top: 2px solid rgb(0, 0, 0);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`;i.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;i.div`
  cursor: pointer;
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #205d6e;
  transition: background 0.2s;
  &:hover {
    background: #566fd2;
    color: white;
  }
`;i.div`
  max-height: ${t=>t.$expanded?"220px":"0"};
  overflow-y: ${t=>t.$expanded?"auto":"hidden"};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  padding: ${t=>t.$expanded?"3px":"0 15px"};
  background: #00eaff;
  font-size: 13px;
  color: rgb(9, 9, 9);
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;i.span`
  background: #f6ff00;
  color: #000;
    font-weight: 900;
  padding: 1px 5px;
  border-radius: 2px;
  border: 1px solid #000;
  font-size: 12px;
`;var Xg=i.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: ${t=>t.$isDarkMode?"rgba(10,10,20,0.97)":"rgba(245,247,255,0.97)"};
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,Qg=i.div`
  width: 100%;
  padding: 18px 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
`,ex=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${t=>t.$isDarkMode?"#1a1a2e":"#fff"};
  border: 2px solid ${t=>t.$isDarkMode?"#3a3a5a":"#ddd"};
  border-radius: 50px;
  margin-top: 20px;
  padding: 8px 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  transition: border-color 0.2s;
  &:focus-within {
    border-color: #ffb36c;
    box-shadow: 0 4px 28px rgba(255,179,108,0.25);
  }
`,tx=i.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 17px;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  &::placeholder { color: ${t=>t.$isDarkMode?"#666":"#aaa"}; }
`,nx=i.div`
  color: ${t=>t.$isDarkMode?"#ffffff":"#080808"};
  font-size: 12px;
  text-align: center;
`,ax=i.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  padding: 0 1px 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;`,Kr=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 8px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.15s, transform 0.12s;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.8)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.06)"};
  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255,179,108,0.1)":"rgba(255,179,108,0.15)"};
    border-color: #ffb36c55;
    transform: translateY(-1px);
  }
`,Wr=i.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${t=>t.$bg||"linear-gradient(135deg,#205d6e,#566fd2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
`,qr=new Map,lr=new Map,rx=t=>{if(!t?.url?.includes("play.google.com/store/apps"))return null;try{const n=new URL(t.url).searchParams.get("id");return n?`https://play.google.com/store/apps/details?id=${encodeURIComponent(n)}&hl=en`:null}catch{return null}},ox=async t=>{if(!t)return null;if(qr.has(t))return qr.get(t);if(lr.has(t))return lr.get(t);const n=fetch(`https://r.jina.ai/http://${t.replace(/^https?:\/\//,"")}`).then(r=>r.ok?r.text():"").then(r=>{const c=[...new Set([...r.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[^\s"')]+/g)].map(([l])=>l.replace(/\\u003d/g,"=")).filter(l=>/=s(?:48|96)(?:-rw)?(?:\s|$)/.test(l)))][0]||null;return c&&qr.set(t,c),c}).catch(()=>null).finally(()=>lr.delete(t));return lr.set(t,n),n},ix=(t,n)=>{const r=[];n&&r.push(n),typeof t?.icon=="string"&&t.icon.trim()&&r.push(t.icon.trim());const c=Array.isArray(t?.images)?t.images.find(s=>typeof s=="string"&&/^https?:\/\//i.test(s)):null,l=t?.url?.includes("play.google.com/store/apps");if(l&&c&&r.push(c),!l)try{const s=new URL(t.url).hostname;r.push(`https://www.google.com/s2/favicons?domain=${s}&sz=64`)}catch{}return[...new Set(r)]},Xi=({link:t})=>{const n=rx(t),[r,c]=(0,a.useState)(null),[l,s]=(0,a.useState)(0);(0,a.useEffect)(()=>{let h=!0;return c(null),s(0),n&&ox(n).then(P=>{h&&c(P)}),()=>{h=!1}},[t,n]);const y=ix(t,r),f=t?.title?.charAt(0).toUpperCase()||"?",x=t?.url?.includes("play.google.com/store/apps")?"🎮":f,g=y[l];return g?(0,e.jsx)("img",{src:g,alt:"",width:"28",height:"28",onError:()=>{l<y.length-1?s(h=>h+1):s(y.length)},style:{display:"block",objectFit:"contain"}}):x},Gr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Jr=i.div`
  font-size: 15px;
  font-weight: 700;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yr=i.div`
  font-size: 11px;
  color: ${t=>t.$isDarkMode?"#fdfdfd":"#050505"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qi=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 2px;
`,es=i.span`
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 20px;
  background: ${t=>t.$isDarkMode?"rgba(255,183,108,0.15)":"rgba(255,183,108,0.25)"};
  color: ${t=>t.$isDarkMode?"#ffb36c":"#a05000"};
  font-weight: 600;
`,Zr=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`,Xr=i.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  border: none;
  background: ${t=>t.$color||"#333"};
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s, transform 0.12s;
  &:hover { opacity: 0.85; transform: scale(1.03); }
`,ts=i.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${t=>t.$isDarkMode?"#ffb36c99":"#666"};
  text-transform: uppercase;
  padding: 4px 2px 2px;
`,sx=i.div`
  height: 1px;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.12)"};
  margin: 6px 0;
`,lx=i.div`
  position: fixed;
  inset: 0;
  z-index: 10100;
  background: rgba(0,0,0,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`,dx=i.div`
  background-color: #0e15200a;
  background-image: ${t=>t.$bgImage?`url(${t.$bgImage})`:t.$bg||"none"};
  background-size: cover;
  background-position: center;
  border: 2px solid #ffb36c77;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.95);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.69) 0%,
      rgba(0, 0, 0, 0.73) 50%,
      rgba(0, 0, 0, 0.68) 100%
    );
    z-index: 1;
  }
`,cx=i.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 22px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
`,ux=i.div`
  position: relative;
  z-index: 2;
  flex: 1;
  overflow-y: auto;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #ffb36c66; border-radius: 10px; }
`,px=i.div`
  position: relative;
  z-index: 2;
  padding: 14px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
`,fx=i.div`
  position: relative;
  width: 100%;
  min-height: 140px;
  overflow: hidden;
  background: #05080d00;
  cursor: pointer;

  img.main-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0;
    transition: transform 0.25s ease;
  }

  &:hover img.main-image {
    transform: scale(1.02);
  }

`,gx=i.button`
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 220px;
  aspect-ratio: 16 / 9;
  padding: 0;
  overflow: hidden;
  border: 2px solid #ff3b30;
  border-radius: 6px;
  background: #000;
  cursor: pointer;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.7);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0.82;
  }

  span {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 28px;
    text-shadow: 0 1px 5px #000;
  }

  @media (max-width: 600px) {
    right: 8px;
    bottom: 8px;
    width: 145px;
  }
`,Fl=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?n[2]:null},xx=({images:t=[],youtubeTrailer:n,setFullscreenImage:r,imageMap:c,setFullscreenVideo:l})=>{const s=n?Fl(n):null,y=s?`https://img.youtube.com/vi/${s}/mqdefault.jpg`:null,f=t.map(x=>c[x]||x).find(Boolean)||y;return(0,e.jsxs)(fx,{onClick:x=>{x.stopPropagation(),f&&r(f)},children:[f&&(0,e.jsx)("img",{className:"main-image",src:f,alt:""}),y&&n&&(0,e.jsxs)(gx,{type:"button","aria-label":"Відкрити трейлер",onClick:x=>{x.stopPropagation(),l(n)},children:[(0,e.jsx)("img",{src:y,alt:""}),(0,e.jsx)("span",{children:"▶"})]})]})},ns=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
`,hx=i.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`,Qr=i.button`
  width: 100%;
  padding: 8px;
  background: ${t=>t.isDarkMode?"black":"white"};
  transition: background-color 0.3s ease; 
  color: ${t=>t.isDarkMode?"white":"black"};
  font-weight: bold;
  cursor: ${t=>t.disabled?"default":"pointer"};
  font-size: 13px;
  &:hover {
    background: ${t=>t.isDarkMode?"#220150":"#ffcc00"};
  }
`,mx=i.button`
  position: absolute;
  top: 43px;
  gap: 9px;
  right: 7px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s;
  font-size: 18px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`,bx=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: ${t=>t.$isClosing?vg:wg} 0.3s ease-out
    forwards;
`,yx=i.div`
  background: #000;
  padding: 3px;
  border-radius: 5px;
  width: 95%;
  max-width: 1200px;
  position: reletive;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #ffb36c;
  color: white;
  position: relative;
  animation: ${t=>t.$isClosing?jg:kg} 0.4s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,wx=i.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 10;
  &:hover {
    background: red;
  }
`,vx=i.button`
  position: absolute;
  top: 5px;
  right: 35px;
  background: rgba(255, 179, 108, 0.8);
  color: black;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 10;
  &:hover {
    background: #ffb36c;
  }
`,Pl=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 1px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`,Nl=i.div`
  position: absolute;
  bottom: ${t=>t.$hasSlots?"13px":"0"};
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  padding: 2px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 8;
`,In=i.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px;
  border-radius: 6px;
  label {
    font-size: 12px;
    font-weight: bold;
    color: #ffb36c;
  }
`,kx=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  align-items: end;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;var jx=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
  }
`,Sx=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${t=>t.$active?"#ffb36c":"transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${Nl}, ${Pl} {
      opacity: 1;
    }
  }
`,Cx=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
`,Tx=i.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 98px;
  z-index: 5;
`,eo=i.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  color: "#000dff";
  font-weight: 900;
  text-shadow: 0 0 3px black;
`,to=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
`,On=i.button`
  flex: 1;
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"black":"white"};
  border: none;
  padding: 1px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
`,Ax=i.div`
  position: sticky;
  top: 0;
  border: 2px dashed #ffb36c;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  color: #ccc;

  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`,as=i.button`
  color: #ff7b00;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
`,Ix=i.input`
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: rgba(255, 255, 255, 0.01);
  color: white;
  width: 100%;
  max-width: 300px;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: white;
  }
`,no=i.hr`
  border: 0;
  border-top: 1px solid rgba(255, 179, 108, 0.3);
  width: 100%;
`,Mx=i.h3`
  font-weight: bold;
  color: #ffb36c;
  margin: 5px;
  font-size: 14px;
`,ta=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(yg,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})},ao=[{label:"UTC (Всесвітній час)",value:"UTC"},{label:"GMT (Лондон, Дублін)",value:"Europe/London"},{label:"UTC+1 (Берлін, Париж, Рим, Варшава)",value:"Europe/Berlin"},{label:"UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)",value:"Europe/Kyiv"},{label:"UTC+3 (Стамбул, Ер-Ріяд, Найробі)",value:"Europe/Istanbul"},{label:"UTC+4 (Дубай, Баку, Тбілісі)",value:"Asia/Dubai"},{label:"UTC+5 (Ісламабад, Ташкент, Мальдіви)",value:"Asia/Karachi"},{label:"UTC+6 (Астана, Дакка, Алмати)",value:"Asia/Almaty"},{label:"UTC+7 (Бангкок, Джакарта, Ханой)",value:"Asia/Bangkok"},{label:"UTC+8 (Пекін, Сінгапур, Перт)",value:"Asia/Shanghai"},{label:"UTC+9 (Токіо, Сеул, Іркутськ)",value:"Asia/Tokyo"},{label:"UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",value:"Australia/Sydney"},{label:"UTC+11 (Номеа, Соломонові Острови)",value:"Pacific/Noumea"},{label:"UTC+12 (Окленд, Фіджі)",value:"Pacific/Auckland"},{label:"UTC-1 (Азорські острови, Кабо-Верде)",value:"Atlantic/Azores"},{label:"UTC-2 (Південна Джорджія)",value:"Atlantic/South_Georgia"},{label:"UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",value:"America/Argentina/Buenos_Aires"},{label:"UTC-4 (Сантьяго, Галіфакс, Каракас)",value:"America/Santiago"},{label:"UTC-5 (Нью-Йорк, Торонто, Богота)",value:"America/New_York"},{label:"UTC-6 (Чикаго, Мехіко, Вінніпег)",value:"America/Chicago"},{label:"UTC-7 (Денвер, Едмонтон, Калгарі)",value:"America/Denver"},{label:"UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",value:"America/Los_Angeles"},{label:"UTC-9 (Аляска, Анкоридж)",value:"America/Anchorage"},{label:"UTC-10 (Гаваї, Гонолулу)",value:"Pacific/Honolulu"},{label:"UTC-11 (Паго-Паго, Алофі)",value:"Pacific/Pago_Pago"},{label:"UTC-12 (Острів Бейкер, Острів Гоуленд)",value:"Etc/GMT+12"},{label:"EST (Північна Америка: Східний час)",value:"America/New_York"},{label:"CST (Північна Америка: Центральний час)",value:"America/Chicago"},{label:"MST (Північна Америка: Гірський час)",value:"America/Denver"},{label:"PST (Північна Америка: Тихоокеанський час)",value:"America/Los_Angeles"},{label:"CET (Центральна Європа: Прага, Мадрид)",value:"Europe/Berlin"},{label:"EET (Східна Європа: Софія, Таллінн)",value:"Europe/Kyiv"},{label:"IST (Індія, Нью-Делі)",value:"Asia/Kolkata"},{label:"JST (Японія, Токіо)",value:"Asia/Tokyo"},{label:"AEST (Східна Австралія, Брісбен)",value:"Australia/Brisbane"},{label:"Інший (ввести вручну)",value:"custom_input"}],Ol={planes:w0,village:hl,herotext:Tl,meridian:v0,castle:Cl,hills:ko},ro=({isStickyBgMode:t,heroDateString:n,onAddCity:r,startAnimation:c,user:l,isDarkMode:s,checkWeatherDanger:y,heroBg:f,setHeroBg:x,heroBg2:g,setHeroBg2:h,heroBg3:P,setHeroBg3:D,heroBg4:M,setHeroBg4:$,customHeroBgs:C=[],setCustomHeroBgs:b,heroBgMode:w,setHeroBgMode:V,heroOverlayOpacity:k,setHeroOverlayOpacity:R,bgRatings:W,setBgRatings:U,slideshowInterval:N,setSlideshowInterval:_,slideshowTransition:ge,setSlideshowTransition:ne,filterCategory:q,setFilterCategory:Z,heroBgZoom:se,setHeroBgZoom:Se,heroBgRotation:fe,setHeroBgRotation:tt,heroBgBlur:Ce,setHeroBgBlur:ct,heroBgPixelation:xe,setHeroBgPixelation:He,heroBgBlurType:$e,setHeroBgBlurType:wt,heroBgFocal1:vt,setHeroBgFocal1:kt,heroBgFocal2:Ze,setHeroBgFocal2:xt,heroBgFocal3:_e,setHeroBgFocal3:ht,heroBgFocal4:Tt,setHeroBgFocal4:Oe,heroBgPanEnabled:T,setHeroBgPanEnabled:F,heroBgPanSpeed:te,setHeroBgPanSpeed:de,videoPlaybackSpeed:Ee,setVideoPlaybackSpeed:Ve,screenshots:ze=[],selectedTimezone:nt,setSelectedTimezone:ce,customHolidayName:jt,setCustomHolidayName:mt})=>{wo();const{registerRef:at,isActive:At}=Ba?.()||{registerRef:()=>{}},Xe=mr(o=>o.calendar?.customDays||[]),[bt,B]=(0,a.useState)({date:"",reason:""}),[ae,ue]=(0,a.useState)(""),Be=(0,a.useRef)(null),[Rt,re]=(0,a.useState)(null);(0,a.useEffect)(()=>{const o=()=>{ue("Конотоп"),setTimeout(()=>{r({name:"Конотоп",fullName:"Конотоп (UA)",lat:51.24,lon:33.2})},2e3)};return window.addEventListener("domino-auto-input-konotop",o),()=>window.removeEventListener("domino-auto-input-konotop",o)},[r]),(0,a.useEffect)(()=>{if(Rt!==null&&Be.current){const o=Be.current.querySelector(`[data-id="${Rt}"]`);o&&Be.current.scrollTo({top:o.offsetTop,behavior:"smooth"})}},[Rt]);const[be,ut]=(0,a.useState)([]),[A,E]=(0,a.useState)(3),[X,ie]=(0,a.useState)(!1),[Ke,ke]=(0,a.useState)(""),[We,rt]=(0,a.useState)(300),It=1e3,[Ut,ve]=(0,a.useState)(0);(0,a.useEffect)(()=>{(async()=>{try{const j=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,H=await u.default.getItem(j);ve(Number(H)||0)}catch(j){console.error("Failed to load hero uploaded count:",j)}})()},[l]);const[Mt,Vt]=(0,a.useState)(!1),[Et,ln]=(0,a.useState)(!1),[ot,Dt]=(0,a.useState)(null),[Fe,Kt]=(0,a.useState)(null),[Le,oe]=(0,a.useState)(!1),[ye,qe]=(0,a.useState)(!0),[le,Te]=(0,a.useState)("city");(0,a.useEffect)(()=>(Mt||ot||Le||Fe||le==="links"?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[Mt,ot,Le,Fe,le]),(0,a.useEffect)(()=>{const o=j=>{if(j.key==="Escape"){if(Fe){Kt(null);return}le==="links"&&(Te("city"),ut([]),ie(!1))}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[Fe,le]);const[we,Pe]=(0,a.useState)(!1),[Ge,dn]=(0,a.useState)(null),[it,xn]=(0,a.useState)(null),[Wt,Mn]=(0,a.useState)([]),[Wn,en]=(0,a.useState)([]),[qn,hn]=(0,a.useState)(!1),[Gn,Bt]=(0,a.useState)(""),[Dn,tn]=(0,a.useState)(""),[$n,zn]=(0,a.useState)("rating"),[mn,zt]=(0,a.useState)(1),Ln=1,[nn,Bn]=(0,a.useState)("default"),[Ft,bn]=(0,a.useState)([]),[cn,Qe]=(0,a.useState)(0),[Gt,un]=(0,a.useState)(!1),[Jt,Sn]=(0,a.useState)(""),_n=o=>!Pa.some(j=>j.src===o),Ae=(0,a.useMemo)(()=>[...Pa,...C||[],...(ze||[]).map(o=>({src:o.image,name:`Скріншот: ${o.trackName}`,category:"Скріншоти"}))],[C,ze]),Je=(0,a.useCallback)((o,j=1)=>{const H=Ft.findIndex(ee=>ee.src===o);if(w==="random"){(mn===2?2:1)==2?h(o):x(o),H!==-1&&Qe(H);return}j===2?h(o):j===3?D(o):j===4?$(o):x(o)},[mn,w,Ft,x,h,D,$]),Yt=(0,a.useCallback)(o=>{if(!o||o==="custom_input")return null;try{const j=new Date,H=new Intl.DateTimeFormat("uk",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:o}).format(j),ee=parseInt(H.split(":")[0]);return{timeStr:H,isDay:ee>=6&&ee<20}}catch{return null}},[]),yn=(0,a.useCallback)(o=>{if(o==="UTC")return 0;if(o==="custom_input")return 999;try{const j=new Date,H=j.toLocaleString("en-US",{timeZone:o}),ee=new Date(H),K=j.toLocaleString("en-US",{timeZone:"UTC"});return(ee-new Date(K))/6e4}catch{return 0}},[]),Pt=(0,a.useMemo)(()=>{let o=[...ao];return nn==="alpha"?o.sort((j,H)=>j.label.localeCompare(H.label)):nn==="offset"&&o.sort((j,H)=>yn(j.value)-yn(H.value)),o},[nn,yn]);(0,a.useEffect)(()=>{if(w==="slideshow-2"&&f&&g){zt(1);const o=setInterval(()=>{zt(j=>j===1?2:1)},N*1e3);return()=>clearInterval(o)}else if(w==="slideshow-3"&&f&&g&&P){zt(1);const o=setInterval(()=>{zt(j=>j===3?1:j+1)},N*1e3);return()=>clearInterval(o)}else if(w==="slideshow-4"&&f&&g&&P&&M){zt(1);const o=setInterval(()=>{zt(j=>j===4?1:j+1)},N*1e3);return()=>clearInterval(o)}else if(w==="random"){if(Ft.length===0&&Ae.length>0){const o=or(Ae);bn(o),Qe(0),o[0]&&x(o[0].src);return}if(Ft.length>0){const o=setInterval(()=>{Qe(j=>{const H=(j+1)%Ft.length;return zt(ee=>{const K=ee===1?2:1;return K===1?x(Ft[H].src):h(Ft[H].src),K}),H})},N*1e3);return()=>clearInterval(o)}}},[w,Ae,N,Ft,x,h]),(0,a.useEffect)(()=>{if(w==="random"&&Ae.length>0&&Ft.length!==Ae.length){const o=or(Ae);bn(o),Qe(0),o[0]&&(Je(o[0].src),zt(1))}},[Ae.length,w]),(0,a.useEffect)(()=>{ao.some(o=>o.value===nt)?(Sn(""),un(!1)):(Sn(nt),un(!0))},[nt]);const pn=()=>{ln(!0),setTimeout(()=>{Vt(!1),ln(!1)},350)},Jn=(0,a.useRef)(null),Yn=[...(Ae||[]).filter(o=>{const j=q==="all"||(q==="custom"?_n(o.src):o.category===q),H=(o.name||"").toLowerCase().includes(Ke.toLowerCase());return j&&H})].sort((o,j)=>{if($n==="az")return o.name.localeCompare(j.name);if($n==="za")return j.name.localeCompare(o.name);const H=W[o.src]||0,ee=W[j.src]||0;return H!==ee?ee-H:o.name.localeCompare(j.name)}),Zn=Yn.slice(0,We),ma=()=>{R(.3),Se(1),tt(0),ct(0),kt({x:50,y:50}),xt({x:50,y:50}),F(!1),de(6),Ve&&Ve(1)},ba=o=>{U(j=>{const H=((j[o]||0)+1)%3;return{...j,[o]:H}})},d=(0,a.useRef)(null),p=async o=>{if(!o)return;const j=o.type.startsWith("image/"),H=o.type.startsWith("video/");if(!j&&!H)return;try{const K=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`;if(Number(await u.default.getItem(K)||0)>=It){alert(`Ліміт досягнуто — не більше ${It} карток на добу.`);return}}catch(K){console.error("Failed to check hero daily limit:",K)}if(H){if(o.size>20971520){alert("Відео занадто велике! Максимум 20мб для стабільності.");return}b(K=>[{src:o,name:o.name,category:"Ваші відео"},...K]),x(o);try{const K=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,me=Number(await u.default.getItem(K)||0)+1;await u.default.setItem(K,me),ve(me)}catch(K){console.error("Failed to update hero uploaded count:",K)}return}const ee=new FileReader;ee.onload=K=>{const me=new Image;me.src=K.target.result,me.onload=()=>{const lt=document.createElement("canvas"),St=1200,va=St/me.width;lt.width=St,lt.height=me.height*va,lt.getContext("2d").drawImage(me,0,0,lt.width,lt.height),lt.toBlob(async Lt=>{try{const rn=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,on=Number(await u.default.getItem(rn)||0);if(on>=It){alert(`Ліміт досягнуто — не більше ${It} карток на добу.`);return}const gn=on+1;await u.default.setItem(rn,gn),ve(gn)}catch(rn){console.error("Failed to update hero uploaded count:",rn)}b(rn=>[{src:Lt,name:o.name,category:"Ваші картинки"},...rn]),x(Lt)},"image/jpeg",.7)}}},O=o=>{o.preventDefault()},z=o=>{o.preventDefault();const j=o.dataTransfer.files[0];p(j)},[L,v]=(0,a.useState)([]),[he,Ie]=(0,a.useState)(!1),[st,Zt]=(0,a.useState)(!1),[Ne,pt]=(0,a.useState)(""),[Re,ft]=(0,a.useState)(()=>{const o=localStorage.getItem("hero_cooldown_until");if(o){const j=parseInt(o,10),H=Date.now();return j>H?Math.ceil((j-H)/1e3):0}return 0}),an=(0,a.useRef)(null),fn="5104647d3e574f4a3f23c0aa092eb2b9";(0,a.useEffect)(()=>{const o=j=>{j.type==="mousedown"&&j.button!==0||j.type==="mousedown"&&(j.target===document.body||j.target===document.documentElement)||an.current&&!an.current.contains(j.target)&&ie(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const wn=async(o,j,H=!1)=>{const ee=j.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(ee.length<2){ut([]),ie(!1);return}const K=bo.filter(me=>me.name.toLowerCase().includes(ee)||me.aliases.some(lt=>lt.toLowerCase().includes(ee))).map(me=>({name:me.name,state:"Україна",country:"UA",lat:me.lat,lon:me.lon,isLocal:!0}));K.length>0&&!H&&(ut(K),ie(!0));try{const me=await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(ee)}&limit=${o}&appid=${fn}`)).json(),lt=Array.isArray(me)?me:[];qe(lt.length>=o),ut(St=>zg(H?St:K,lt)),ie(!0)}catch(me){console.error("Помилка API:",me),K.length>0&&(ut(K),ie(!0))}};(0,a.useEffect)(()=>{u.default.getItem("pinnedLinks").then(o=>{o&&Mn(o)})},[]);const qt=o=>{Mn(j=>{let H;return j.includes(o)?H=j.filter(ee=>ee!==o):H=[o,...j].slice(0,5),u.default.setItem("pinnedLinks",H),H})},ya=(0,a.useCallback)(async o=>{const j=o.trim();if(!j){en([]);return}hn(!0);try{const H=await fetch(k0(j));if(!H.ok)throw new Error(`Wikipedia request failed: ${H.status}`);const ee=((await H.json())?.query?.search||[]).map(K=>({id:K.pageid,title:K.title,snippet:j0(K.snippet),url:`https://uk.wikipedia.org/wiki/${encodeURIComponent(K.title).replace(/%20/g,"_")}`}));en(ee)}catch(H){console.error("Wikipedia search error:",H),en([])}finally{hn(!1)}},[]);(0,a.useEffect)(()=>{if(le!=="links"){en([]),hn(!1);return}const o=setTimeout(()=>{ya(ae)},350);return()=>clearTimeout(o)},[le,ae,ya]),(0,a.useEffect)(()=>{E(3),qe(!0);const o=setTimeout(()=>{ae&&wn(3,ae,!1)},500);return()=>clearTimeout(o)},[ae]);const vn=o=>{o.preventDefault(),o.stopPropagation();const j=A+3;E(j),wn(j,ae,!0)};(0,a.useEffect)(()=>{let o;return Re>0&&(o=setInterval(()=>{ft(j=>j<=1?(localStorage.removeItem("hero_cooldown_until"),0):j-1)},1e3)),()=>clearInterval(o)},[Re]);const Rn=async()=>{if(Re>0)return;const o=parseFloat(Gn),j=parseFloat(Dn);if(isNaN(o)||isNaN(j)){alert("Будь ласка, введіть правильні координати");return}if(o<-90||o>90){alert("Широта має бути від -90 до 90");return}if(j<-180||j>180){alert("Довгота має бути від -180 до +180");return}const H={name:"Обрана точка",state:`Широта: ${o}`,country:`Довгота: ${j}`,lat:o,lon:j,isManual:!0};try{pt("🔍 Шукаємо за вказаними координатами...");const ee=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${o}&lon=${j}&limit=10&appid=${fn}`)).json();if(ee&&ee.length>0){v([H,...ee]),Ie(!0),pt("");return}Zt(!0),Ie(!0),v([H]),pt("Нічого не знайшли точно — шукаємо найближче...");const K=1e4,me=Date.now();let lt=!1;e:for(let St=1;St<=15&&!lt;St++){const va=[[o,Math.max(-180,Math.min(180,j+St))],[o,Math.max(-180,Math.min(180,j-St))],[Math.max(-90,Math.min(90,o+St)),j],[Math.max(-90,Math.min(90,o-St)),j]];for(const[Lt,rn]of va){if(Date.now()-me>=K)break e;pt(`🔎 Перевіряємо: ±${St}° (шир: ${Lt.toFixed(1)}°, довг: ${rn.toFixed(1)}°)...`);try{const on=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${Lt}&lon=${rn}&limit=4&appid=${fn}`)).json();if(on&&on.length>0){v([H,...on]),pt(`✅ Знайдено поруч (відхилення ~${St}°)`),lt=!0;break e}}catch{}}}if(!lt){const St=((Date.now()-me)/1e3).toFixed(1);pt(`⚠️ Пошук завершено (${St}с) — навколо немає населених пунктів. Можна додати точку вручну.`)}}catch(ee){console.error("Помилка при пошуку за координатами:",ee),v([H]),Ie(!0),pt("❌ Помилка запиту. Спробуйте ще раз.")}finally{Zt(!1)}},$a=o=>{Re>0||(r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),ft(10),localStorage.setItem("hero_cooldown_until",Date.now()+1e4),Bt(""),tn(""),Ie(!1),v([]))},_a=o=>{Re>0||(r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),ft(9),localStorage.setItem("hero_cooldown_until",Date.now()+9e3),ue(""),ut([]),ie(!1))},wa=(0,a.useMemo)(()=>{const o=new Date,j=o.toISOString().split("T")[0];if(l?.birthDate){const[,K,me]=l.birthDate.split("-");if(o.getDate()===parseInt(me)&&o.getMonth()+1===parseInt(K))return{active:!0,color:"#ff5252",label:"З ДНЕМ НАРОДЖЕННЯ! 🎂"}}const H=Xe.find(K=>K.date===j);if(H)return{active:!0,color:"#fff59d",label:H.reason.toUpperCase()+"! 🎉"};const ee=o.getDay();return ee===0||ee===6?{active:!0,color:"#ffff00"}:{active:!1,color:"#fff59d",label:""}},[Xe,l]).active;return(0,a.useMemo)(()=>wa?Array.from({length:25}).map((o,j)=>({id:j,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,x:`${(Math.random()-.5)*100}px`,y:`${(Math.random()-.5)*100}px`,duration:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`})):[],[wa]),(0,e.jsxs)(Tg,{children:[(0,e.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none",visibility:"hidden"},children:(0,e.jsxs)("filter",{id:"pixelate-hero",x:"0",y:"0",width:"100%",height:"100%",children:[(0,e.jsx)("feFlood",{x:"0",y:"0",height:"1",width:"1"}),(0,e.jsx)("feComposite",{width:Math.max(1,xe*2),height:Math.max(1,xe*2)}),(0,e.jsx)("feTile",{result:"tiles"}),(0,e.jsx)("feComposite",{in:"SourceGraphic",in2:"tiles",operator:"in"}),(0,e.jsx)("feMorphology",{operator:"dilate",radius:xe})]})}),(0,e.jsx)(sr,{$isStickyBgMode:t,$image:f,$active:w==="static"||mn===1,$transition:ge,$zoom:se,$rotation:fe,$rotationScale:Ln,$blur:Ce,$pixelation:xe,$blurType:$e,$focalX:vt?.x||50,$focalY:vt?.y||50,$panEnabled:T&&se>1,$panSpeed:te,$videoStart:Ae.find(o=>o.src===f)?.start,$videoEnd:Ae.find(o=>o.src===f)?.end,$videoPlaybackSpeed:Ee}),(0,e.jsx)(sr,{$isStickyBgMode:t,$image:g,$active:(w==="slideshow-2"||w==="slideshow-3"||w==="slideshow-4"||w==="random")&&mn===2,$transition:ge,$zoom:se,$rotation:fe,$rotationScale:Ln,$blur:Ce,$pixelation:xe,$blurType:$e,$focalX:Ze?.x||50,$focalY:Ze?.y||50,$panEnabled:T&&se>1,$panSpeed:te,$videoStart:Ae.find(o=>o.src===g)?.start,$videoEnd:Ae.find(o=>o.src===g)?.end}),(0,e.jsx)(sr,{$isStickyBgMode:t,$image:P,$active:(w==="slideshow-3"||w==="slideshow-4")&&mn===3,$transition:ge,$zoom:se,$rotation:fe,$rotationScale:Ln,$blur:Ce,$pixelation:xe,$blurType:$e,$focalX:_e?.x||50,$focalY:_e?.y||50,$panEnabled:T&&se>1,$panSpeed:te,$videoStart:Ae.find(o=>o.src===P)?.start,$videoEnd:Ae.find(o=>o.src===P)?.end}),(0,e.jsx)(sr,{$isStickyBgMode:t,$image:M,$active:w==="slideshow-4"&&mn===4,$transition:ge,$zoom:se,$rotation:fe,$rotationScale:Ln,$blur:Ce,$pixelation:xe,$blurType:$e,$focalX:Tt?.x||50,$focalY:Tt?.y||50,$panEnabled:T&&se>1,$panSpeed:te,$videoStart:Ae.find(o=>o.src===M)?.start,$videoEnd:Ae.find(o=>o.src===M)?.end}),(0,e.jsx)(Rg,{$opacity:k,$isStickyBgMode:t}),(0,e.jsxs)(mx,{ref:o=>at("changeBgButton",o),onClick:()=>Vt(!0),children:[(0,e.jsx)(gs,{}),(0,e.jsx)("p",{style:{fontSize:"11px"},children:"Змінити фон?"})]}),(0,e.jsx)(Ag,{$image:Tl,$start:c}),(0,e.jsxs)(Ig,{$start:c,children:[(0,e.jsx)(Eg,{children:(0,e.jsx)(Fg,{children:(0,e.jsx)(Pg,{children:(0,e.jsxs)(Ng,{ref:Jn,children:[n,(0,e.jsx)(ta,{content:"Змінити часовий пояс",isDarkMode:s,children:(0,e.jsx)(Og,{ref:o=>at("timezoneButton",o),onClick:()=>oe(!Le),"aria-label":"Змінити часовий пояс",children:(0,e.jsx)(xs,{})})}),Le&&(0,Sl.createPortal)((0,e.jsxs)(Vg,{children:[(0,e.jsxs)(Ug,{children:[(0,e.jsx)(Wg,{type:"button",onClick:()=>oe(!1),"aria-label":"Закрити список часових поясів",children:"×"}),(0,e.jsx)(Kg,{children:"Часовий пояс"})]}),(0,e.jsxs)(qg,{children:[(0,e.jsx)(Ji,{$active:nn==="default",onClick:()=>Bn("default"),children:"За замовчуванням"}),(0,e.jsx)(Ji,{$active:nn==="offset",onClick:()=>Bn("offset"),children:"UTC +/-"})]}),(0,e.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"0 5px 10px"},children:[Pt.map(o=>{const j=nt===o.value||o.value==="custom_input"&&Gt,H=Yt(o.value);return(0,e.jsx)(Bg,{$selected:j,onClick:()=>{o.value==="custom_input"?(un(!0),ao.some(ee=>ee.value===nt)?Sn(""):Sn(nt)):(un(!1),ce(o.value),u.default.setItem("selected_timezone",o.value),oe(!1))},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsx)("span",{children:o.label}),H&&(0,e.jsxs)("span",{style:{fontSize:"16px",opacity:.9,display:"flex",gap:"10px",whiteSpace:"nowrap",marginLeft:"12px",color:H.isDay?"#ffd54f":"#90caf9"},children:[H.isDay?(0,e.jsx)(Ma,{}):(0,e.jsx)(Da,{}),(0,e.jsx)("p",{children:H.timeStr})]})]})},o.value)}),Gt&&(0,e.jsx)("div",{style:{padding:"12px 0"},children:(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)("input",{type:"text",value:Jt,onChange:o=>Sn(o.target.value),placeholder:"Наприклад: Europe/Warsaw",style:{width:"100%",padding:"10px 110px 10px 10px",borderRadius:"5px",border:"1px solid #ffb36c",background:"#111",color:"#fff",fontSize:"14px",boxSizing:"border-box"}}),(0,e.jsx)("button",{type:"button",onClick:()=>{if(Jt.trim())try{Intl.DateTimeFormat("en",{timeZone:Jt.trim()}),ce(Jt.trim()),u.default.setItem("selected_timezone",Jt.trim()),oe(!1)}catch{Ki("Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",s)}else Ki("Будь ласка, введіть часовий пояс.",s)},style:{position:"absolute",right:"4px",top:"4px",bottom:"4px",padding:"0 12px",background:"#ffb36c",border:"none",borderRadius:"3px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",color:"#1e1e1e"},children:"Застосувати"})]})})]})]}),document.body)]})})})}),(0,e.jsx)(_g,{ref:an,children:le==="city"?(0,e.jsx)(Gg,{children:(0,e.jsxs)(Jg,{children:[(0,e.jsxs)(Br,{children:[(0,e.jsx)(ta,{content:"Вибрати режим пошуку",isDarkMode:s,children:(0,e.jsx)(_r,{onClick:()=>Pe(o=>!o),"aria-label":"Вибрати режим пошуку",children:(0,e.jsx)(Ga,{})})}),we&&(0,e.jsxs)(Hr,{$isDarkMode:s,children:[(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="city",onClick:()=>{Te("city"),Pe(!1),Bt(""),tn(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ga,{})," За назвою міста"]}),(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="coordinates",onClick:()=>{Te("coordinates"),Pe(!1),ue(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ja,{})," Координати"]}),(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="links",onClick:()=>{Te("links"),Pe(!1),ue(""),ut([]),ie(!1),re(null)},children:[(0,e.jsx)(Ua,{}),"  Посилання"]})]})]}),(0,e.jsx)(Yg,{ref:o=>at("heroInput",o),value:ae,$isDarkMode:s,onChange:o=>{ue(o.target.value),window.dispatchEvent(new CustomEvent("domino-hero-input-change",{detail:{value:o.target.value}}))},onFocus:()=>be.length>0&&ie(!0),placeholder:Re>0?`Зачекайте ${Re} сек...`:"Уведіть місто, село.",disabled:Re>0,type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,name:"hero-city-search",inputMode:"search",enterKeyHint:"search","aria-label":"Пошук міста","data-form-type":"other","data-lpignore":"true"}),X&&be.length>0&&(0,e.jsxs)(Yi,{children:[be.map((o,j)=>(0,e.jsxs)(Zi,{onClick:()=>_a(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#fffcfc"},children:["Широта: ",o.lat.toFixed(2),"°, Довгота: ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${j}`)),ye?(0,e.jsx)(Qr,{isDarkMode:s,onClick:vn,children:"Завантажити ще варіанти"}):(0,e.jsx)(Qr,{isDarkMode:s,disabled:!0,children:"Кінець списку"})]}),(0,e.jsx)(Ur,{onClick:()=>{Re===0&&be[0]&&_a(be[0])},disabled:Re>0,children:Re>0?Re:"⌕"})]})}):le==="links"?null:(0,e.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"5px",position:"relative"},children:[(0,e.jsxs)(Hg,{style:{alignItems:"flex-start"},children:[(0,e.jsxs)(Br,{style:{alignSelf:"flex-start"},children:[(0,e.jsx)(ta,{content:"Вибрати режим пошуку",isDarkMode:s,children:(0,e.jsx)(_r,{onClick:()=>Pe(o=>!o),"aria-label":"Вибрати режим пошуку",style:{borderRadius:"8px 0 0 8px",height:"30px"},children:(0,e.jsx)(Ja,{})})}),we&&(0,e.jsxs)(Hr,{$isDarkMode:s,children:[(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="city",onClick:()=>{Te("city"),Pe(!1),Bt(""),tn(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ga,{}),"  За назвою міста"]}),(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="coordinates",onClick:()=>{Te("coordinates"),Pe(!1),ue(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ja,{}),"  Координати"]}),(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="links",onClick:()=>{Te("links"),Pe(!1),ue(""),ut([]),ie(!1),re(null)},children:[(0,e.jsx)(Ua,{}),"   Посилання"]})]})]}),(0,e.jsx)(Gi,{children:(0,e.jsx)("input",{type:"number",value:Gn,onChange:o=>Bt(o.target.value),placeholder:"Широта: Від -90° до +90°",$isDarkMode:s,disabled:Re>0||st,min:"-90",max:"90",step:"0.01"})}),(0,e.jsx)(Gi,{children:(0,e.jsx)("input",{type:"number",value:Dn,onChange:o=>tn(o.target.value),$isDarkMode:s,placeholder:"Довгота: Від -180° до +180°",disabled:Re>0||st,min:"-180",max:"180",step:"0.01"})}),(0,e.jsx)(Ur,{onClick:Rn,disabled:Re>0||st,style:{alignSelf:"flex-start"},children:Re>0?Re:st?"…":"⌕"})]}),Ne&&(0,e.jsxs)("div",{style:{color:Ne.startsWith("✅")?"#00e676":Ne.startsWith("❌")?"#ff5252":Ne.startsWith("⚠️")?"#ffb36c":"#00eaff",fontSize:"11px",fontWeight:"bold",textAlign:"center",padding:"4px 10px",background:"rgba(0,0,0,0.65)",borderRadius:"6px",maxWidth:"340px",margin:"4px auto 0",backdropFilter:"blur(4px)",lineHeight:1.4},children:[st&&(0,e.jsx)("span",{style:{marginRight:"6px"},children:"⟳"}),Ne]}),he&&(0,e.jsxs)(Yi,{style:{width:"auto",minWidth:"300px",marginTop:"6px",left:"50%",transform:"translateX(-50%)",position:"absolute"},children:[(0,e.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"6px",textAlign:"center",fontSize:"12px"},children:st?"🔄 Шукаємо поруч…":L.length>1?"📍 Знайдено поруч з координатами:":"📍 Лише точка за координатами (міст не знайдено)"}),L.map((o,j)=>(0,e.jsxs)(Zi,{onClick:()=>$a(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[o.lat.toFixed(2),"°, ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${j}`)),(0,e.jsx)("button",{onClick:()=>{Ie(!1),v([]),pt("")},style:{width:"100%",padding:"8px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"8px",cursor:"pointer",marginTop:"10px",fontSize:"12px"},children:"✕ Закрити"})]})]})}),(0,e.jsx)("div",{style:{marginTop:"250px",zIndex:90},children:(0,e.jsx)(El,{user:l,isDarkMode:s,isStickyBgMode:t})})]}),Mt&&(0,e.jsx)(bx,{$isClosing:Et,onClick:pn,children:(0,e.jsxs)(yx,{$isClosing:Et,onClick:o=>o.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1px"},children:[(0,e.jsx)("h2",{style:{color:"#fff",margin:0,fontSize:"14px",color:"orange"},children:"Налаштування фону, вигляду"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"1px"},children:[(0,e.jsx)(as,{onClick:ma,style:{padding:"4px 8px",fontSize:"12px",height:"auto"},children:"Скинути"}),(0,e.jsx)(as,{onClick:pn,style:{padding:"4px 8px",fontSize:"16px",height:"auto"},children:"✖"})]})]}),(0,e.jsxs)(kx,{children:[(0,e.jsxs)(In,{children:[(0,e.jsx)("label",{children:"🎞️ Режим зміни фону:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[(0,e.jsxs)("select",{value:w,onChange:o=>{if(V(o.target.value),o.target.value==="random"){const j=or(Ae);bn(j),Qe(0),j[0]&&Je(j[0].src)}zt(1)},style:{background:"#000",color:"#fff",fontSize:"11px",border:"1px solid #555",borderRadius:"2px",padding:"1px",flex:1},children:[(0,e.jsx)("option",{value:"static",children:"Статичний (1 фото)"}),(0,e.jsx)("option",{value:"slideshow-2",children:"Слайд-шоу (2 фото)"}),(0,e.jsx)("option",{value:"slideshow-3",children:"Слайд-шоу (3 фото)"}),(0,e.jsx)("option",{value:"slideshow-4",children:"Слайд-шоу (4 фото)"}),(0,e.jsx)("option",{value:"random",children:"Випадковий (усі фото)"})]}),w==="random"&&(0,e.jsx)(ta,{content:"Перемішати та скинути чергу",isDarkMode:s,children:(0,e.jsx)("button",{onClick:()=>{const o=or(Ae);bn(o),Qe(0),o[0]&&(Je(o[0].src),zt(1))},"aria-label":"Перемішати та скинути чергу",style:{background:"#ffb36c",border:"none",borderRadius:"2px",color:"#000",padding:"1px 8px",cursor:"pointer",fontWeight:"bold",fontSize:"11px",whiteSpace:"nowrap"},children:"Скинути"})})]})]}),(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["Затемнення: ",(k*100).toFixed(0),"%"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:k,onChange:o=>R(parseFloat(o.target.value))})]}),(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["Наближення: ",se.toFixed(2),"x"]}),(0,e.jsx)("input",{type:"range",min:"1",max:"2",step:"0.01",value:se,onChange:o=>Se(parseFloat(o.target.value))})]}),(0,e.jsxs)(In,{children:[(0,e.jsx)("label",{children:"🎭 Ефект фокусу:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"3px"},children:[(0,e.jsx)(qi,{$active:$e==="smooth",onClick:()=>{wt("smooth"),He(0)},style:{flex:1,fontSize:"10px",padding:"2px"},children:"Плавне"}),(0,e.jsx)(qi,{$active:$e==="pixelated",onClick:()=>wt("pixelated"),style:{flex:1,fontSize:"10px",padding:"2px"},children:"Піксельне"})]})]}),(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["🔄 Розворот: ",fe,"°"]}),(0,e.jsx)("input",{type:"range",min:"-180",max:"180",step:"1",value:fe,onChange:o=>tt(parseInt(o.target.value))})]}),(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["Розмиття: ",Ce.toFixed(1),"px"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.5",value:Ce,onChange:o=>ct(parseFloat(o.target.value))})]}),(0,e.jsxs)(In,{style:{opacity:$e==="pixelated"?1:.4},children:[(0,e.jsxs)("label",{children:["Пікселізація: ",xe.toFixed(1)]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.2",value:xe,disabled:$e!=="pixelated",onChange:o=>He(parseFloat(o.target.value))})]})]}),(w==="slideshow-2"||w==="slideshow-3"||w==="slideshow-4"||w==="random")&&(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsx)(no,{}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3px"},children:[(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["Інтервал:"," ",N>=60?`${Math.floor(N/60)}хв ${N%60>0?N%60+"с":""}`:`${N}с`]}),(0,e.jsx)("input",{type:"range",min:"4",max:"300",step:"1",value:N,onChange:o=>_(parseInt(o.target.value))})]}),(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["Перехід: ",ge,"с"]}),(0,e.jsx)("input",{type:"range",min:"0.5",max:"1",step:"0.1",value:ge,onChange:o=>ne(parseFloat(o.target.value))})]}),(0,e.jsxs)(In,{children:[(0,e.jsxs)("label",{children:["Швидкість відео: ",Ee,"x"]}),(0,e.jsx)("input",{type:"range",min:"0.25",max:"2",step:"0.25",value:Ee,onChange:o=>Ve(parseFloat(o.target.value))})]})]})]}),(0,e.jsx)(no,{}),(0,e.jsx)(Mx,{children:"Бібліотека зображень"}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"5px"},children:[(0,e.jsx)(Ix,{placeholder:"Пошук картин за назвою...",value:Ke,onChange:o=>{ke(o.target.value),rt(300)}}),(0,e.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px"},children:"Категорія:"}),(0,e.jsxs)("select",{value:q,onChange:o=>Z(o.target.value),style:{background:"#000",fontSize:"11px",color:"#fff",border:"1px solid #555",borderRadius:"2px",padding:"1px"},children:[(0,e.jsx)("option",{value:"all",children:"Усі"}),(0,e.jsx)("option",{value:"Дракони",children:"Дракони"}),(0,e.jsx)("option",{value:"Стихія",children:"Стихія та тварини"}),(0,e.jsx)("option",{value:"Локації",children:"Локації і предмети"}),(0,e.jsx)("option",{value:"Фентезі",children:"Фентезі"}),(0,e.jsx)("option",{value:"Хоррор",children:"Хоррор"}),(0,e.jsx)("option",{value:"Майбутне",children:"Песимізм"}),(0,e.jsx)("option",{value:"Скріншоти",children:"Скріншоти"}),(0,e.jsx)("option",{value:"custom",children:"Ваші завантажені"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px"},children:"Сортувати:"}),(0,e.jsxs)("select",{value:$n,onChange:o=>zn(o.target.value),style:{background:"#000",color:"#fff",border:"1px solid #555",borderRadius:"2px",fontSize:"11px",padding:"1px"},children:[(0,e.jsx)("option",{value:"rating",children:"За рейтингом"}),(0,e.jsx)("option",{value:"az",children:"Назва А-Я"}),(0,e.jsx)("option",{value:"za",children:"Назва Я-А"})]})]})]})]}),(0,e.jsx)(jx,{children:Zn.map((o,j)=>{const H=W[o.src]||0,ee=Ft.findIndex(K=>K.src===o.src);return(0,e.jsxs)(Sx,{$active:f===o.src||g===o.src,children:[(0,e.jsxs)(Tx,{children:[(0,e.jsx)(eo,{$color:H===2?"gold":H===1?"red":"white",onClick:()=>ba(o.src),children:H===2?"💛":H===1?"❤️":"🤍"}),o.description&&(0,e.jsx)(ta,{content:"Детальний опис картини",isDarkMode:s,children:(0,e.jsx)(eo,{$color:"#aef","aria-label":"Детальний опис картини",onClick:K=>{K.stopPropagation(),Dt({name:o.name,text:o.description,src:o.src,author:o.author,source:o.source})},style:{fontSize:"18px",background:"rgb(7, 7, 7)",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},children:"?"})}),(0,e.jsx)(ta,{content:"Скачати файл фону",isDarkMode:s,children:(0,e.jsx)(eo,{$color:"#ffda79","aria-label":"Скачати фон",onClick:K=>{K.stopPropagation(),Wi(o)},style:{fontSize:"14px",background:"rgba(7, 7, 7, 0.8)",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:"📥"})})]}),_n(o.src)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(vx,{onClick:K=>{K.stopPropagation();const me=window.prompt("Введіть нову назву для цих шпалер:",o.name);me&&b(lt=>lt.map(St=>St.src===o.src?{...St,name:me}:St))},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(wx,{onClick:K=>{K.stopPropagation(),window.confirm(`Видалити шпалери "${o.name}"?`)&&(b(me=>me.filter(lt=>lt.src!==o.src)),U(me=>{const lt={...me};return delete lt[o.src],lt}),f===o.src&&x("/assets/fog-Cew27ml4.webp"),g===o.src&&h("/assets/fog-Cew27ml4.webp"))},"aria-label":"Видалити",children:"×"})]}),o.author&&(0,e.jsxs)(Pl,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:o.author}),o.source&&(0,e.jsx)("div",{children:o.source})]}),(0,e.jsxs)(Nl,{$hasSlots:w==="slideshow-2"||w==="slideshow-3"||w==="slideshow-4",children:[w==="random"&&ee!==-1&&(0,e.jsxs)("span",{style:{color:ee===cn?"#6cffe4":"#ffb36c",marginRight:"6px",fontWeight:"bold",textShadow:ee===cn?"0 0 8px #6cffe4":"none"},children:["#",ee+1," ",ee===cn&&"(Зараз)"]}),o.name]}),Na(o.src)?(0,e.jsx)("video",{preload:"none",muted:!0,playsInline:!0,style:{width:"100%",aspectRatio:"3/2",objectFit:"cover",cursor:"pointer",background:"#111"},onMouseEnter:K=>{K.currentTarget.src||(K.currentTarget.src=o.src),K.currentTarget.play().catch(()=>{})},onMouseLeave:K=>{K.currentTarget.pause(),K.currentTarget.currentTime=0,typeof o.src=="string"&&o.src.startsWith("http")&&(K.currentTarget.removeAttribute("src"),K.currentTarget.load())},onClick:()=>Je(o.src)}):(0,e.jsx)(Cx,{src:o.src,loading:"lazy",onClick:()=>Je(o.src),title:o.name}),w==="slideshow-2"&&(0,e.jsxs)(to,{children:[(0,e.jsx)(On,{$active:f===o.src,onClick:()=>Je(o.src,1),children:"Слот 1"}),(0,e.jsx)(On,{$active:g===o.src,onClick:()=>Je(o.src,2),children:"Слот 2"})]}),w==="slideshow-3"&&(0,e.jsxs)(to,{children:[(0,e.jsx)(On,{$active:f===o.src,onClick:()=>Je(o.src,1),children:"Слот 1"}),(0,e.jsx)(On,{$active:g===o.src,onClick:()=>Je(o.src,2),children:"Слот 2"}),(0,e.jsx)(On,{$active:P===o.src,onClick:()=>Je(o.src,3),children:"Слот 3"})]}),w==="slideshow-4"&&(0,e.jsxs)(to,{children:[(0,e.jsx)(On,{$active:f===o.src,onClick:()=>Je(o.src,1),children:"Слот 1"}),(0,e.jsx)(On,{$active:g===o.src,onClick:()=>Je(o.src,2),children:"Слот 2"}),(0,e.jsx)(On,{$active:P===o.src,onClick:()=>Je(o.src,3),children:"Слот 3"}),(0,e.jsx)(On,{$active:M===o.src,onClick:()=>Je(o.src,4),children:"Слот 4"})]})]},j)})}),Yn.length>We&&(0,e.jsx)(Qr,{onClick:()=>rt(o=>o+300),children:"Завантажити ще"}),(0,e.jsx)(no,{}),(0,e.jsxs)(Ax,{onDragOver:O,onDrop:z,onClick:()=>d.current.click(),children:["Перетягніть сюди картинку(відео) або натисніть",(0,e.jsx)("input",{type:"file",ref:d,hidden:!0,accept:"image/*,video/*",onChange:o=>p(o.target.files[0])})]})]})}),ot&&(0,e.jsx)("div",{onClick:()=>Dt(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"5px"},children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[Na(ot.src)?(0,e.jsx)("video",{src:ot.src,preload:"none",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,e.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${ot.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,e.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"10px",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,e.jsx)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"20px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:ot.name}),(0,e.jsx)("button",{onClick:()=>Dt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"5px",width:"30px",height:"30px",color:"#fff",fontSize:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(255,0,0,0.7)",o.currentTarget.style.borderColor="red"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(0,0,0,0.6)",o.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,e.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"5px 0",paddingRight:"5px"},children:(0,e.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",borderRadius:"8px",backdropFilter:"blur(2px)"},children:ot.text})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Автор: ",ot.author||"Невідомий"]}),ot.source&&(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Джерело: ",ot.source]})]}),(0,e.jsxs)("button",{onClick:()=>Wi(ot),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"13px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 8px rgba(255, 179, 108, 0.4)",display:"flex",alignItems:"center",gap:"6px",transition:"transform 0.15s ease"},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.05)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:["📥 Скачати ",Na(ot.src)?"відео":"картинку"]})]})]})]})}),Ge&&(0,e.jsx)(ns,{onClick:()=>dn(null),children:(0,e.jsx)(hx,{src:Ge,alt:"Fullscreen"})}),it&&(0,e.jsx)(ns,{onClick:()=>xn(null),children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{position:"relative",width:"90%",maxWidth:"800px",aspectRatio:"16/9",background:"#000",borderRadius:"8px",overflow:"hidden",boxShadow:"0 0 20px rgba(255,255,255,0.2)"},children:[(0,e.jsx)("iframe",{src:it.includes("embed")?`${it}?autoplay=1`:`https://www.youtube.com/embed/${Fl(it)}?autoplay=1`,"aria-label":"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}),(0,e.jsx)("button",{onClick:()=>xn(null),style:{position:"absolute",top:"10px",right:"10px",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"30px",height:"30px",color:"#fff",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:"×"})]})}),le==="links"&&(0,e.jsxs)(Xg,{$isDarkMode:s,children:[(0,e.jsxs)(Qg,{$isDarkMode:s,children:[(0,e.jsxs)(ex,{$isDarkMode:s,children:[(0,e.jsxs)(Br,{children:[(0,e.jsx)(ta,{content:"Вибрати режим пошуку",isDarkMode:s,children:(0,e.jsx)(_r,{onClick:()=>Pe(o=>!o),"aria-label":"Вибрати режим пошуку",style:{background:"#ffb36c",color:"#000",borderRadius:"50%",width:"34px",height:"34px"},children:(0,e.jsx)(Ua,{})})}),we&&(0,e.jsxs)(Hr,{$isDarkMode:s,children:[(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="city",onClick:()=>{Te("city"),Pe(!1),Bt(""),tn(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ga,{})," За назвою міста"]}),(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="coordinates",onClick:()=>{Te("coordinates"),Pe(!1),ue(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ja,{})," Координати"]}),(0,e.jsxs)(Nn,{$isDarkMode:s,$active:le==="links",onClick:()=>{Te("links"),Pe(!1),ue(""),ut([]),ie(!1)},children:[(0,e.jsx)(Ua,{})," Посилання"]})]})]}),(0,e.jsx)(tx,{$isDarkMode:s,value:ae,onChange:o=>ue(o.target.value),placeholder:"Пошук сайтів, ігор, статей, авторів...",type:"text",autoFocus:!0,autoComplete:"off"}),ae&&(0,e.jsx)(Zg,{onClick:()=>ue(""),"aria-label":"Очистити",type:"button",style:{position:"static",transform:"none",borderRadius:"50%"},children:"×"}),(0,e.jsx)(Ur,{onClick:()=>{ae.trim()&&window.open("https://www.google.com/search?q="+encodeURIComponent(ae),"_blank")},style:{width:"36px",height:"36px",borderRadius:"50%",fontSize:"16px"},children:"⌕"})]}),(0,e.jsx)(nx,{$isDarkMode:s,children:"Натисніть на картку сайту, щоб відкрити повний опис та галерею • Esc для виходу"})]}),(0,e.jsxs)(ax,{children:[ae.trim()===""&&Wt.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ts,{$isDarkMode:s,children:"📌 Закріплені сайти"}),Mi.filter(o=>Wt.includes(o.id)).map(o=>{const j=ir(o),H=Vr(o);return(0,e.jsxs)(Kr,{$isDarkMode:s,onClick:()=>Kt(o),children:[(0,e.jsx)(Wr,{$bg:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",children:(0,e.jsx)(Xi,{link:o})}),(0,e.jsxs)(Gr,{children:[(0,e.jsx)(Jr,{$isDarkMode:s,children:o.title}),j&&(0,e.jsxs)(Yr,{$isDarkMode:s,children:[" ",j]}),o.tags&&(0,e.jsx)(Qi,{children:o.tags.map(ee=>(0,e.jsxs)(es,{$isDarkMode:s,children:["#",ee]},ee))})]}),(0,e.jsxs)(Zr,{onClick:ee=>ee.stopPropagation(),children:[H.map(ee=>{const K=Or[ee.type];return K?(0,e.jsxs)(Xr,{$color:K.color,onClick:()=>window.open(ee.url,"_blank"),children:[K.emoji," ",K.label]},ee.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"})]})]},`pinned-${o.id}`)}),(0,e.jsx)(sx,{$isDarkMode:s}),(0,e.jsx)(ts,{$isDarkMode:s,children:"🌐 Усі сайти та ресурси"})]}),Mi.filter(o=>{if(ae.trim()==="")return!0;const j=ae.toLowerCase(),H=o.title.toLowerCase().includes(j)||o.snippet&&o.snippet.toLowerCase().includes(j),ee=ir(o)?.toLowerCase().includes(j),K=o.tags&&o.tags.some(me=>me.toLowerCase().includes(j));return H||ee||K}).map(o=>{const j=ir(o),H=Vr(o),ee=Wt.includes(o.id);return(0,e.jsxs)(Kr,{$isDarkMode:s,onClick:()=>Kt(o),children:[(0,e.jsx)(Wr,{children:(0,e.jsx)(Xi,{link:o})}),(0,e.jsxs)(Gr,{children:[(0,e.jsx)(Jr,{$isDarkMode:s,children:o.title}),j&&(0,e.jsx)(Yr,{$isDarkMode:s,children:j}),o.tags&&(0,e.jsx)(Qi,{children:o.tags.map(K=>(0,e.jsxs)(es,{$isDarkMode:s,children:["#",K]},K))})]}),(0,e.jsxs)(Zr,{onClick:K=>K.stopPropagation(),children:[H.map(K=>{const me=Or[K.type];return me?(0,e.jsxs)(Xr,{$color:me.color,onClick:()=>window.open(K.url,"_blank"),children:[me.emoji," ",me.label]},K.type):null}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"}),(0,e.jsx)("button",{onClick:()=>qt(o.id),title:ee?"Відкріпити":"Закріпити",style:{background:"transparent",border:"none",cursor:"pointer",fontSize:"16px",color:ee?"#ffb36c":s?"#666":"#aaa"},children:ee?(0,e.jsx)(dd,{}):(0,e.jsx)(Md,{})})]})]})]},o.id)}),Wn.map(o=>(0,e.jsxs)(Kr,{$isDarkMode:s,onClick:()=>Kt({title:o.title,url:o.url,snippet:o.snippet,buttonText:"Читати у Вікіпедії",author:"Вікіпедія (Українська)",tags:["вікіпедія","енциклопедія"]}),children:[(0,e.jsx)(Wr,{$bg:"linear-gradient(135deg, #00bfff, #0077ff)",children:"W"}),(0,e.jsxs)(Gr,{children:[(0,e.jsx)(Jr,{$isDarkMode:s,children:o.title}),(0,e.jsx)(Yr,{$isDarkMode:s,children:"🌐 Вікіпедія"})]}),(0,e.jsx)(Zr,{onClick:j=>j.stopPropagation(),children:(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#00bfff",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:"Вікіпедія"})})]},o.id)),qn&&(0,e.jsx)("div",{style:{padding:"16px",textAlign:"center",color:s?"#aaa":"#555"},children:"⏳ Завантажую результати з Вікіпедії..."})]})]}),Fe&&(()=>{const o=Dg(Fe),j=ir(Fe);return(0,e.jsx)(lx,{onClick:()=>Kt(null),children:(0,e.jsxs)(dx,{$bgImage:o,$bg:Fe.bg,onClick:H=>H.stopPropagation(),children:[(0,e.jsxs)(cx,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{color:"#ffb36c",margin:0,fontSize:"22px",fontWeight:"bold",textShadow:"0 2px 6px rgba(0,0,0,0.9)"},children:Fe.title}),j&&(0,e.jsxs)("div",{style:{color:"#f9f6f6",fontSize:"13px",marginTop:"4px"},children:["Автор / Постачальник: ",(0,e.jsx)("b",{children:j})]})]}),(0,e.jsx)("button",{onClick:()=>Kt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"32px",height:"32px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]}),(0,e.jsxs)(ux,{children:[Fe.tags&&(0,e.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:Fe.tags.map(H=>(0,e.jsxs)("span",{style:{background:"rgba(255, 179, 108, 0.2)",color:"#ffb36c",border:"1px solid rgba(255, 179, 108, 0.35)",padding:"2px 8px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold"},children:["#",H]},H))}),(Fe.images&&Fe.images.length>0||Fe.youtubeTrailer)&&(0,e.jsx)(xx,{images:Fe.images||[],youtubeTrailer:Fe.youtubeTrailer,setFullscreenImage:dn,imageMap:Ol,setFullscreenVideo:xn}),(0,e.jsx)("div",{style:{lineHeight:"1.8",whiteSpace:"pre-wrap",color:"#f0f0f0",fontSize:"14px",textShadow:"0 1px 4px rgba(0,0,0,0.9)",background:"rgba(0, 0, 0, 0.35)",padding:"14px",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.07)"},children:Fe.snippet})]}),(0,e.jsxs)(px,{children:[Vr(Fe).map(H=>{const ee=Or[H.type];return ee?(0,e.jsxs)(Xr,{$color:ee.color,onClick:()=>window.open(H.url,"_blank"),style:{padding:"8px 14px",fontSize:"13px"},children:[ee.emoji," Відкрити в ",ee.label]},H.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(Fe.url,"_blank"),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"20px",padding:"8px 20px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",marginLeft:"auto"},children:Fe.buttonText||"Перейти на сайт"})]})]})})})()]})},dr=t=>{if(typeof t=="string")return t;if(t&&typeof t=="object"){const n=t.type?.name||"";if(n==="FaSun")return"☀️";if(n==="BsMoonStarsFill")return"🌙";if(n==="FaCloudMoon"||n==="FaSmog")return"☁️";if(n==="IoRainy"||n==="LiaCloudSunRainSolid"||n==="FaCloudMoonRain"||n==="LiaCloudMoonRainSolid")return"🌧️";if(n==="GiSnowing")return"❄️";if(n==="IoThunderstorm")return"⛈️";if(t.props?.children){const r=t.props.children;if(typeof r=="string")return r;if(Array.isArray(r))return r.filter(Boolean).map(String).join("")}}return"☁️"},oo=t=>Array.isArray(t)?t.map(n=>{const r={...n},c=l=>{if(Array.isArray(l))return l.map(s=>c(s));if(l&&typeof l=="object"){if(l.$$typeof&&typeof l.$$typeof=="symbol")return dr(l);const s={};return Object.entries(l).forEach(([y,f])=>{s[y]=c(f)}),s}return l};return Object.entries(r).forEach(([l,s])=>{(l==="current"||l==="hourly"||l==="daily16"||l==="seasonal")&&(r[l]=c(s))}),r.current&&(r.current.iconSymbol=dr(r.current.iconSymbol??r.current.iconPlaceholder),r.current.iconPlaceholder=r.current.iconPlaceholder??r.current.iconSymbol??"☁️"),Array.isArray(r.hourly)&&(r.hourly=r.hourly.map(l=>({...l,iconSymbol:dr(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.daily16)&&(r.daily16=r.daily16.map(l=>({...l,iconSymbol:dr(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.seasonal)&&(r.seasonal=r.seasonal.map(l=>({...l}))),r}):[],Dx=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,$x=je`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`,zx=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Dx} 0.2s ease-out;
`,Lx=i.div`
  background: ${t=>t.$isStickyBgMode?"rgba(30, 30, 46, 0.85)":"#1e1e2e"};
  backdrop-filter: ${t=>t.$isStickyBgMode?"blur(10px)":"none"};
  color: #cdd6f4;
  border-radius: 16px;
  border: 2px solid #ffb36c;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  animation: ${$x} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,Rx=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`,Ex=i.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Fx=i.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`,Px=i.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`,Nx=i.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ox=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`,rs=i.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`,cr=i.button`
  flex: 1;
  background: ${t=>t.$active?"rgba(255, 179, 108, 0.2)":"transparent"};
  color: ${t=>t.$active?"#ffb36c":"#a6adc8"};
  border: none;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 179, 108, 0.1);
  }
`,Vx=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  transition: background 0.15s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,Bx=i.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`,io=i.input`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 179, 108, 0.3);
  color: #cdd6f4;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-family: monospace;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`,os=i.input`
  width: 36px;
  height: 30px;
  border: 2px solid rgba(255, 179, 108, 0.4);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,_x=i.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`,Vl=i.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`,Hx=i(Vl)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`,Ux=i(Vl)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,is=Object.values({color:{label:"Колір тексту",cssProp:"color",type:"color",desc:"Змінює колір шрифту елемента"},backgroundColor:{label:"Колір фону",cssProp:"backgroundColor",type:"color",desc:"Змінює фоновий колір елемента"},border:{label:"Рамка (бордюр)",cssProp:"border",type:"border",desc:"Налаштування межі елемента"},borderRadius:{label:"Заокруглення кутів",cssProp:"borderRadius",type:"text",placeholder:"напр., 8px або 50%",desc:"Радіус заокруглення рамки"},boxShadow:{label:"Тінь елемента",cssProp:"boxShadow",type:"text",placeholder:"напр., 0 4px 10px rgba(0,0,0,0.3)",desc:"Додає ефект тіні навколо елемента"},textShadow:{label:"Тінь тексту",cssProp:"textShadow",type:"text",placeholder:"напр., 1px 1px 2px #000",desc:"Ефект тіні для тексту"},backdropFilter:{label:"Розмиття фону",cssProp:"backdropFilter",type:"text",placeholder:"напр., blur(10px)",desc:"Ефекти для фону (скляний ефект)"},filter:{label:"Фільтри",cssProp:"filter",type:"text",placeholder:"напр., grayscale(50%)",desc:"Ефекти зображення/кольору"},outline:{label:"Контур",cssProp:"outline",type:"text",placeholder:"напр., 2px solid red",desc:"Зовнішня рамка елемента"},textDecoration:{label:"Декорування тексту",cssProp:"textDecoration",type:"text",placeholder:"напр., underline або none",desc:"Підкреслення, закреслення тощо"},cursor:{label:"Курсор миші",cssProp:"cursor",type:"cursor",desc:"Вигляд курсора при наведенні"}}),ss=t=>{if(!t||t==="transparent"||t==="rgba(0, 0, 0, 0)")return"#000000";if(t.startsWith("#"))return t;const n=t.match(/\d+/g);return!n||n.length<3?"#000000":"#"+n.slice(0,3).map(r=>parseInt(r).toString(16).padStart(2,"0")).join("")},Kx=t=>{if(!t||t==="none")return{width:"0px",style:"none",color:"#000000"};const n=t.split(/\s+/);let r="1px",c="solid",l="#000000";return n.forEach(s=>{/^\d+(px|em|rem|%|pt)$/.test(s)||/^\d+$/.test(s)?r=s.includes("px")||s.includes("em")||s.includes("rem")||s.includes("%")||s.includes("pt")?s:s+"px":["solid","double","dashed","dotted","groove","ridge","inset","outset","none"].includes(s)?c=s:(s.startsWith("#")||s.startsWith("rgb")||s.startsWith("hsl")||/^[a-zA-Z]+$/.test(s))&&(l=s)}),{width:r,style:c,color:l}},ur=(t,n,r)=>n==="none"||t==="0px"?"none":`${t} ${n} ${r}`,Wx=({targetElement:t,onClose:n,isStickyBgMode:r})=>{const{applyStyle:c,getOverridesForElement:l,isDarkMode:s}=To(),[y,f]=(0,a.useState)(s?"dark":"light"),[x,g]=(0,a.useState)("default"),h=`${y}_${x}`,P=t?.tagName?.toLowerCase()||"?",D=t?Tp(t):"",[M,$]=(0,a.useState)({});(0,a.useEffect)(()=>{if(D){const R=l(D);$(JSON.parse(JSON.stringify(R)))}},[D,l]);const C=(R,W)=>{$(U=>({...U,[h]:{...U[h]||{},[R]:W}}))},b=()=>{const R=l(D);["light_default","light_hover","dark_default","dark_hover"].forEach(W=>{const U=M[W]||{},N=R[W]||{};is.forEach(({cssProp:_})=>{U[_]!==N[_]&&(U[_]?c(D,P,_,N[_],U[_],W):N[_]&&c(D,P,_,N[_],"",W))})}),n()},w=()=>{n(),setTimeout(()=>{P==="input"||P==="textarea"||P==="select"?t.focus():t.click()},10)};if(!t)return null;const V=M[h]||{};let k="";if(M){const R=D.includes(" > ")||D.includes("#")||D.includes(":")?D:`[data-decorator-id="${D}"]`;M.light_default&&(k+=`body:not(.decorator-dark-mode) ${R} { `,Object.entries(M.light_default).forEach(([W,U])=>{k+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),k+=`}
`),M.light_hover&&(k+=`body:not(.decorator-dark-mode) ${R}:hover { `,Object.entries(M.light_hover).forEach(([W,U])=>{k+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),k+=`}
`),M.dark_default&&(k+=`body.decorator-dark-mode ${R} { `,Object.entries(M.dark_default).forEach(([W,U])=>{k+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),k+=`}
`),M.dark_hover&&(k+=`body.decorator-dark-mode ${R}:hover { `,Object.entries(M.dark_hover).forEach(([W,U])=>{k+=`${W.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),k+=`}
`)}return(0,e.jsxs)(zx,{onClick:R=>{R.target===R.currentTarget&&n()},"data-decorator-ignore":"true",children:[(0,e.jsx)("style",{children:k}),(0,e.jsxs)(Lx,{"data-decorator-ignore":"true",onClick:R=>R.stopPropagation(),$isStickyBgMode:r,children:[(0,e.jsxs)(Rx,{children:[(0,e.jsxs)(Ex,{children:["🎨 Декоратор ",(0,e.jsxs)(Fx,{children:["<",P,">"]})]}),(0,e.jsx)(Px,{onClick:n,"data-decorator-ignore":"true",children:"×"})]}),(0,e.jsxs)(Nx,{children:[(0,e.jsxs)(Ox,{children:[(0,e.jsxs)(rs,{children:[(0,e.jsx)(cr,{$active:y==="light",onClick:()=>f("light"),children:"🌞 Денна"}),(0,e.jsx)(cr,{$active:y==="dark",onClick:()=>f("dark"),children:"🌙 Темна"})]}),(0,e.jsxs)(rs,{children:[(0,e.jsx)(cr,{$active:x==="default",onClick:()=>g("default"),children:"Стандарт"}),(0,e.jsx)(cr,{$active:x==="hover",onClick:()=>g("hover"),children:":hover"})]})]}),is.map(({cssProp:R,label:W,type:U,placeholder:N,desc:_})=>{const ge=V[R]||"";return(0,e.jsx)(Vx,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"5px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)(Bx,{children:W}),(0,e.jsx)("span",{style:{fontSize:"10px",color:"#858da3"},children:_})]}),U==="color"&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsx)(os,{type:"color",value:ss(ge),onChange:ne=>C(R,ne.target.value),"data-decorator-ignore":"true"}),(0,e.jsx)(io,{value:ge,onChange:ne=>C(R,ne.target.value),placeholder:"напр., #ffb36c або transparent","data-decorator-ignore":"true"})]}),U==="cursor"&&(0,e.jsxs)("select",{value:ge,onChange:ne=>C(R,ne.target.value),"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 10px",borderRadius:"8px",fontSize:"12px",outline:"none",width:"100%"},children:[(0,e.jsx)("option",{value:"",children:"успадковується (default)"}),(0,e.jsx)("option",{value:"default",children:"стрілка (default)"}),(0,e.jsx)("option",{value:"pointer",children:"вказівник / посилання (pointer)"}),(0,e.jsx)("option",{value:"grab",children:"захоплення / рука відкрито (grab)"}),(0,e.jsx)("option",{value:"grabbing",children:"рука стиснута (grabbing)"}),(0,e.jsx)("option",{value:"zoom-in",children:"збільшення (zoom-in)"}),(0,e.jsx)("option",{value:"zoom-out",children:"зменшення (zoom-out)"}),(0,e.jsx)("option",{value:"text",children:"виділення тексту (text)"}),(0,e.jsx)("option",{value:"not-allowed",children:"заборонено (not-allowed)"}),(0,e.jsx)("option",{value:"help",children:"довідка (help)"}),(0,e.jsx)("option",{value:"wait",children:"очікування (wait)"}),(0,e.jsx)("option",{value:"move",children:"переміщення (move)"})]}),U==="border"&&(()=>{const ne=Kx(ge);return(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("select",{value:ne.width,onChange:q=>{const Z=ur(q.target.value,ne.style,ne.color);C(R,Z)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:1},children:[(0,e.jsx)("option",{value:"0px",children:"0px"}),(0,e.jsx)("option",{value:"1px",children:"1px"}),(0,e.jsx)("option",{value:"2px",children:"2px"}),(0,e.jsx)("option",{value:"3px",children:"3px"}),(0,e.jsx)("option",{value:"4px",children:"4px"}),(0,e.jsx)("option",{value:"5px",children:"5px"}),(0,e.jsx)("option",{value:"8px",children:"8px"}),(0,e.jsx)("option",{value:"10px",children:"10px"})]}),(0,e.jsxs)("select",{value:ne.style,onChange:q=>{const Z=ur(ne.width,q.target.value,ne.color);C(R,Z)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:2},children:[(0,e.jsx)("option",{value:"none",children:"немає (none)"}),(0,e.jsx)("option",{value:"solid",children:"суцільна (solid)"}),(0,e.jsx)("option",{value:"double",children:"подвійна (double)"}),(0,e.jsx)("option",{value:"dashed",children:"штрихова (dashed)"}),(0,e.jsx)("option",{value:"dotted",children:"пунктирна (dotted)"}),(0,e.jsx)("option",{value:"groove",children:"3D жолоб (groove)"}),(0,e.jsx)("option",{value:"ridge",children:"3D гребінь (ridge)"}),(0,e.jsx)("option",{value:"inset",children:"3D втиснута (inset)"}),(0,e.jsx)("option",{value:"outset",children:"3D витиснута (outset)"})]}),(0,e.jsx)(os,{type:"color",value:ss(ne.color),onChange:q=>{const Z=ur(ne.width,ne.style,q.target.value);C(R,Z)},"data-decorator-ignore":"true"}),(0,e.jsx)(io,{value:ne.color,onChange:q=>{const Z=ur(ne.width,ne.style,q.target.value);C(R,Z)},placeholder:"#ffb36c","data-decorator-ignore":"true",style:{flex:2,minWidth:"70px"}})]})})(),U==="text"&&(0,e.jsx)(io,{value:ge,onChange:ne=>C(R,ne.target.value),placeholder:N||"успадковується","data-decorator-ignore":"true"})]})},R)})]}),(0,e.jsxs)(_x,{children:[(0,e.jsx)(Ux,{onClick:w,"data-decorator-ignore":"true",children:"▶ Виконати дію"}),(0,e.jsx)(Hx,{onClick:b,"data-decorator-ignore":"true",children:"✓ Застосувати"})]})]})]})},so={outline:"2px dashed #ffb36c",outlineOffset:"2px",cursor:"crosshair"},lo=t=>{if(!t)return!0;let n=t;for(;n&&n!==document.body;){if(n.getAttribute?.("data-decorator-ignore")==="true"||n.tagName==="HEADER"||n.id==="decorator-overlay")return!0;n=n.parentElement}return!1},qx=({isStickyBgMode:t})=>{const{isDecoratorMode:n}=To(),[r,c]=(0,a.useState)(null),[l,s]=(0,a.useState)(null),y=(0,a.useCallback)(g=>{!n||lo(g.target)||(r&&r!==g.target&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor=""),g.target.style.outline=so.outline,g.target.style.outlineOffset=so.outlineOffset,g.target.style.cursor=so.cursor,c(g.target))},[n,r]),f=(0,a.useCallback)(g=>{!n||lo(g.target)||(g.target.style.outline="",g.target.style.outlineOffset="",g.target.style.cursor="",r===g.target&&c(null))},[n,r]),x=(0,a.useCallback)(g=>{n&&g.isTrusted&&(lo(g.target)||(g.preventDefault(),g.stopPropagation(),g.target&&(g.target.style.outline="",g.target.style.outlineOffset="",g.target.style.cursor=""),s(g.target)))},[n]);return(0,a.useEffect)(()=>{if(!n){r&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor="",c(null));return}return document.addEventListener("mouseover",y,!0),document.addEventListener("mouseout",f,!0),document.addEventListener("click",x,!0),()=>{document.removeEventListener("mouseover",y,!0),document.removeEventListener("mouseout",f,!0),document.removeEventListener("click",x,!0)}},[n,y,f,x,r]),(0,a.useEffect)(()=>(n?document.body.style.cursor="crosshair":document.body.style.cursor="",()=>{document.body.style.cursor=""}),[n]),!n&&!l?null:(0,e.jsx)(e.Fragment,{children:l&&(0,e.jsx)(Wx,{targetElement:l,onClose:()=>s(null),isStickyBgMode:t})})},Gx=(t="",n="")=>{try{const r=new URLSearchParams(t||window.location.search);let c=r.get("q")||r.get("search")||r.get("city")||r.get("query")||r.get("pohoda")||r.get("s");if(!c&&n){const x=n.indexOf("?");if(x!==-1){const g=new URLSearchParams(n.substring(x));c=g.get("q")||g.get("search")||g.get("city")||g.get("query")||g.get("pohoda")||g.get("s")}}if(!c)return{isSearchEntry:!1,query:"",cityData:null};const l=decodeURIComponent(c).trim();if(!l)return{isSearchEntry:!1,query:"",cityData:null};const s=Al(l);if(s)return{isSearchEntry:!0,query:l,cityName:s.name,cityData:{id:`search-${s.name.toLowerCase()}`,name:s.name,fullName:s.fullName,lat:s.lat,lon:s.lon}};const y=l.replace(/^(погода\s+(в|у)?\s*)/i,"").replace(/(\s*погода)$/i,"").trim(),f=y.charAt(0).toUpperCase()+y.slice(1);return{isSearchEntry:!0,query:l,cityName:f,cityData:{id:`search-${f.toLowerCase()}`,name:f,fullName:`${f} (UA)`,lat:null,lon:null}}}catch(r){return console.error("Помилка аналізу пошукового запиту:",r),{isSearchEntry:!1,query:"",cityData:null}}},Jx=je`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Yx=i.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`,Zx=i.div`
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 24px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Cl}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;
  animation: ${Jx} 0.3s ease-out;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    max-width: 580px;
    padding: 40px 35px;
    border-radius: 16px;
    border-width: 3px;
  }
`,Xx=i.h2`
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`,Qx=i.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 30px;
  }
`,eh=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`,ls=i.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 20px;
  width: 100%;
  max-width: 450px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255,255,255,0.25);
    transform: translateY(-1px);
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 24px;
    border-width: 2px;
    border-radius: 8px;
  }
`,th=i.div`
  position: fixed;
  background: #000;
  color: #fff;
  border: 2px solid #ffb36c;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  z-index: 10002;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  pointer-events: auto;
`,nh=i.button`
  margin-top: 10px;
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`,ah=i.button`
  margin-top: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  &:hover { color: #fff; border-color: #fff; }
`,rh=i.div`
  position: fixed;
  border: 3px dashed #ffb36c;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.65);
`,oh=({user:t})=>{const{isActive:n,currentStep:r,showInitialModal:c,startTutorial:l,skipTutorialWeek:s,refs:y,nextStep:f,jumpToStep:x,closeTutorial:g}=Ba(),[h,P]=(0,a.useState)({}),[D,M]=(0,a.useState)({display:"none"}),[$,C]=(0,a.useState)(!0),[b,w]=(0,a.useState)(!1),V=(0,a.useRef)(null),k=(0,a.useRef)(null),R=(0,a.useCallback)(q=>{if(!q)return;const Z=q.getBoundingClientRect(),se=Math.max(2,Z.top-5),Se=Math.max(2,Z.left-5),fe=Math.min(Z.width+10,window.innerWidth-Se-2),tt=Math.min(Z.height+10,window.innerHeight-se-2);M({top:se,left:Se,width:fe,height:tt});const Ce=300,ct=220;let xe=Z.bottom+15,He=Z.left;xe+ct>window.innerHeight&&(xe=Z.top-ct-10),xe<5&&(xe=5),He+Ce>window.innerWidth&&(He=window.innerWidth-Ce-10),He<5&&(He=5),P({top:xe,left:He})},[]);(0,a.useEffect)(()=>{if(!n)return;const q=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=q}},[n]),(0,a.useEffect)(()=>{if(!n)return;const q=W.find(se=>se.step===r);if(!q){g();return}C(!0),w(!1),q.onEnter&&q.onEnter(),q.autoAction&&q.autoAction();const Z=q.targetName?y.current[q.targetName]:null;if(k.current=Z,Z){Z.scrollIntoView({behavior:"smooth",block:"center"});const se=setTimeout(()=>R(Z),500),Se=()=>R(Z);return window.addEventListener("resize",Se),()=>{clearTimeout(se),window.removeEventListener("resize",Se)}}else M({display:"none"}),P({top:"50%",left:"50%",transform:"translate(-50%, -50%)"})},[r,n]),(0,a.useEffect)(()=>{if(!n||r!==1)return;const q=Z=>{Z.detail&&Z.detail.value&&Z.detail.value.trim().length>0?(C(!1),clearTimeout(V.current),V.current=setTimeout(()=>C(!0),5e3)):(clearTimeout(V.current),C(!0))};return window.addEventListener("domino-hero-input-change",q),()=>{window.removeEventListener("domino-hero-input-change",q),clearTimeout(V.current)}},[n,r]),(0,a.useEffect)(()=>{if(!n)return;const q=()=>{r===1&&f()};return window.addEventListener("domino-next-step-auto",q),()=>window.removeEventListener("domino-next-step-auto",q)},[n,r,f]),(0,a.useEffect)(()=>{if(!n)return;const q=()=>{r===3&&f()};return window.addEventListener("domino-weather-gear-clicked",q),()=>window.removeEventListener("domino-weather-gear-clicked",q)},[n,r,f]);const W=[{step:1,targetName:"heroInput",text:"Привіт! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у випадаючому списку."},{step:2,targetName:null,text:"Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.",autoAction:()=>{setTimeout(()=>{document.body.style.overflow="",window.scrollTo({top:window.innerHeight,behavior:"smooth"}),setTimeout(()=>{document.body.style.overflow="hidden",f()},1500)},2e3)},noSkip:!0},{step:3,targetName:"weatherGear",text:"У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань."},{step:4,targetName:"weatherModal",text:`Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.

• Ліміт: до 8 карток одночасно (до 1000 створень на добу).`},{step:5,targetName:null,text:"Нижче ти знайдеш кліматичну карту Windy.com, чат із Gemini та інструменти для роботи із зображеннями (Стихії, Pixabay...).",onEnter:()=>{window.dispatchEvent(new CustomEvent("domino-close-weather-settings"))}},{step:6,targetName:"newsHeader",text:"Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали."},{step:7,targetName:"headerBgTheme",text:"Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту."},{step:8,targetName:null,text:t?"Дякуємо, що ти з нами! Насолоджуйся сайтом.":"Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)",isLast:!0}],U=(0,a.useCallback)(()=>{if(b)return;w(!0);const q=W.find(Z=>Z.step===r);if(q){if(q.isLast){g();return}if(r===1){const Z=y.current.heroInput;if(!(Z&&Z.value&&Z.value.trim().length>0))window.dispatchEvent(new CustomEvent("domino-auto-input-konotop")),setTimeout(()=>f(),2500);else{setTimeout(()=>w(!1),500);return}}else r===3&&window.dispatchEvent(new CustomEvent("domino-open-weather-settings")),f();setTimeout(()=>w(!1),2e3)}},[b,r,W,g,f,y]),N=(0,a.useCallback)(()=>{b||(window.dispatchEvent(new CustomEvent("domino-close-weather-settings")),x(8))},[b,x]);if(c)return(0,e.jsx)(Yx,{children:(0,e.jsxs)(Zx,{children:[(0,e.jsx)(Xx,{children:"Отримати навчання?"}),(0,e.jsx)(Qx,{children:"Доміно пропонує вам безкоштовну допомогу, для швидшого опанування сайту"}),(0,e.jsxs)(eh,{children:[(0,e.jsx)(ls,{onClick:l,children:"Так, і не нагадувати про це 30 днів"}),(0,e.jsx)(ls,{onClick:s,children:"Ні, і не нагадувати тиждень!"})]})]})});if(!n)return null;const _=W.find(q=>q.step===r);if(!_)return null;const ge=D.display!=="none",ne=!_.isLast&&!_.noSkip&&r<=6;return(0,e.jsxs)(e.Fragment,{children:[ge&&(0,e.jsx)(rh,{style:D}),(0,e.jsxs)(th,{style:{...h,opacity:$?1:0,pointerEvents:$?"auto":"none",transition:"opacity 0.3s ease"},children:[(0,e.jsxs)("div",{style:{fontSize:"12px",color:"#ccc",marginBottom:"5px"},children:["Крок ",r,"/8 (Доміно)"]}),(0,e.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:_.text}),!_.noSkip&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"10px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsx)(nh,{onClick:U,disabled:b,children:_.isLast?"Завершити":"Пропустити"}),ne&&(0,e.jsx)(ah,{onClick:N,title:"Пропустити до кроку 8",children:"До кінця →"})]})]})]})},ih=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
`,sh=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:f,floatingStyles:x,context:g}=pa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:aa,middleware:[xa(8),ia(),ra({padding:5}),ha({element:y})]}),{isMounted:h,styles:P}=ga(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),D=ca(g,{move:!1}),M=ua(g),$=la(g),C=oa(g,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=da([D,M,$,C]);if(!t)return n;const V=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...b(),style:{display:"inline-flex"},children:n}),h&&(0,e.jsx)(sa,{children:(0,e.jsxs)(ih,{ref:f.setFloating,$isDarkMode:c,style:{...x,...P},...w(),children:[t,(0,e.jsx)(fa,{ref:y,context:g,fill:V,stroke:"#00acb9",strokeWidth:1})]})})]})},lh=(0,a.lazy)(()=>Ye(()=>import("./Prison-ZUwWpvg5.js"),__vite__mapDeps([0,1,2,3]))),dh=(0,a.lazy)(()=>Ye(()=>import("./Aihelp-4YhG2A6U.js"),__vite__mapDeps([4,1,2]))),ch=(0,a.lazy)(()=>Ye(()=>import("./FanArt-DPLiRxG6.js"),__vite__mapDeps([5,1,2]))),uh=(0,a.lazy)(()=>Ye(()=>import("./ShopModal-Ds2eCNlz.js"),__vite__mapDeps([6,1,2]))),ph=(0,a.lazy)(()=>Ye(()=>import("./AchivmentsModal-CWP1Fo-8.js"),__vite__mapDeps([7,1,2]))),fh=(0,a.lazy)(()=>Ye(()=>import("./ClimateMap-DijgNlQb.js"),__vite__mapDeps([8,1,2]))),gh=(0,a.lazy)(()=>Ye(()=>import("./MusicPhoto-BOaBNTXM.js"),__vite__mapDeps([9,1,2,10]))),xh=(0,a.lazy)(()=>Ye(()=>import("./Modal-DIE4gm29.js"),__vite__mapDeps([11,1,2,12]))),hh=(0,a.lazy)(()=>Ye(()=>import("./LoginModal-DLu2dbKw.js"),__vite__mapDeps([13,1,2]))),mh=(0,a.lazy)(()=>Ye(()=>import("./UserSettingsModal-6MaHp0iV.js"),__vite__mapDeps([14,1,2,12]))),bh=(0,a.lazy)(()=>Ye(()=>import("./WeatherDetailsModal-DveTCxqg.js"),__vite__mapDeps([15,1,2]))),co=(0,a.lazy)(()=>Ye(()=>Promise.resolve().then(()=>Ml),void 0)),yh=(0,a.lazy)(()=>Ye(()=>import("./OtherOptionsModal-CYzPGWE6.js"),__vite__mapDeps([16,1,2,10]))),wh=ld`
  ${t=>t.$locked&&sn`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
    `}
`,vh=je`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,kh=je`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,uo=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${t=>t.$isHidden?"none":"block"};
`,ds=[br,So,jo,Co,ip];Td.register(ic,ad,vd,id,_d,md,Ql,Hd);var pr=(t,n=1)=>t===0?n?"☀️ Ясно":"🌙 Ясно":t>=1&&t<=3?n?"🌤️ Мінлива хмарність":"☁️ Мінлива хмарність":t>=45&&t<=48?"☁️ Туман":t>=51&&t<=55?"🌧️ Мряка":t>=56&&t<=57?"🌧️ Мряка з снігом":t>=61&&t<=65?"🌧️ Дощ":t>=66&&t<=67?"🌧️ Дощ з снігом":t>=71&&t<=75?"❄️ Снігопад":t===77?"❄️ Сніжна крупа":t>=80&&t<=82?"🌦️ Зливовий дощ":t>=85&&t<=86?"❄️ Зливовий сніг":t>=95&&t<=99?"⛈️ Гроза":"☁️ Хмарно",jh=(t,n=1)=>t===0?n?"ясно":"ясно вночі":t>=1&&t<=3?n?"мінлива хмарність":"хмарно вночі":t>=45&&t<=48?"туман":t>=51&&t<=55?"мряка":t>=56&&t<=57?"мряка зі снігом":t>=61&&t<=65?"дощ":t>=66&&t<=67?"дощ зі снігом":t>=71&&t<=75?"сніг":t===77?"сніжна крупа":t>=80&&t<=82?"зливовий дощ":t>=85&&t<=86?"зливовий сніг":t>=95&&t<=99?"гроза":"хмарно",po=(t,n=1)=>t===0?n?(0,e.jsx)(Ma,{}):(0,e.jsx)(Da,{}):t>=1&&t<=3?n?"🌤️":(0,e.jsx)(Ad,{}):t>=45&&t<=48?(0,e.jsx)(ui,{}):t>=51&&t<=55||t>=56&&t<=57?"🌧️":t>=61&&t<=65?n?(0,e.jsx)(Cr,{}):(0,e.jsx)(ti,{}):t>=66&&t<=67?n?(0,e.jsx)(Cr,{}):(0,e.jsx)(ti,{}):t>=71&&t<=75?(0,e.jsx)(Ir,{}):t===77?(0,e.jsx)(Ir,{}):t>=80&&t<=82?n?(0,e.jsx)(Cr,{}):(0,e.jsx)(od,{}):t>=85&&t<=86?(0,e.jsx)(Ir,{}):t>=95&&t<=99?(0,e.jsx)(bd,{}):(0,e.jsx)(ui,{}),Sh=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"transparent"};
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`,Ch=i.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 42px 10px;
  justify-content: flex-start;
  width: 100%;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    scroll-snap-align: center;
    flex: 0 0 100%;
    width: 100%;
    min-width: 0;
  }
`,Th=i.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  z-index: 500;
  margin-top: 12px;
`,cs=i.button`
  position: absolute;
  top: 50%;
  ${t=>t.$direction==="previous"?"left: 16px;":"right: 16px;"}
  
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 501;
  
  border: 2px solid #00ffe5;
  border-radius: 6px;
  background: #000;
  color: #00ffe5;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(0, 255, 229, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  /* Підключення анімації левітації */
  animation: ${vh} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${kh} 2.5s ease-in-out infinite;
  }

  /* 1. Задня грань */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 44px;
    height: 40px;
    border-top: 1.5px solid rgba(0, 255, 229, 0.6);
    border-left: 1.5px solid rgba(0, 255, 229, 0.6);
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 6px;
    z-index: -2;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  /* 2. З'єднувальні лінії */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 54px;
    height: 54px;
    z-index: -1;
    pointer-events: none;
    
    background: 
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 0 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 100% 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 0 100% / 14px 14px no-repeat;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #000;
    /* Призупиняємо левітацію при наведенні для стабільного кліку */
    animation-play-state: paused;
    box-shadow: 0 0 18px rgba(0, 255, 229, 0.6);
    
    &::before {
      border-color: rgba(0, 255, 229, 0.9);
      top: -12px;
      left: -12px;
    }

    &::after {
      top: -12px;
      left: -12px;
      width: 56px;
      height: 56px;
      background-size: 16px 16px;
    }

    & > * { animation-duration: 1.2s;
    }
  }

  &:active {
    transform: translateY(calc(-50% + 2px)) scale(0.96);
  }
`,Ah=i.button`
  width: 30px;
  height: 30px;
  background: ${t=>t.$active?"#fc7a00":"#00ffe5"};
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &:hover {
    background: ${t=>t.$active?"#fdd9b6":"#3095b7"};
  }
`,Ih=i.div`
  position: relative;
`,Mh=({children:t})=>{const n=(0,a.useRef)(null),[r,c]=(0,a.useState)(0),l=a.Children.toArray(t).length,s=(0,a.useCallback)(f=>{const x=n.current;if(!x)return;const g=x.children[f];g&&x.scrollTo({left:g.offsetLeft,behavior:"smooth"})},[]),y=(0,a.useCallback)(f=>{if(l<2)return;const x=(r+f+l)%l;c(x),s(x)},[r,l,s]);return(0,a.useEffect)(()=>{r>=l&&l>0&&c(l-1)},[l,r]),(0,a.useEffect)(()=>{const f=n.current;if(!f)return;let x;const g=()=>{clearTimeout(x),x=setTimeout(()=>{const h=Array.from(f.children);if(h.length===0)return;const P=h.reduce((D,M,$)=>{const C=Math.abs(h[D].offsetLeft-f.scrollLeft);return Math.abs(M.offsetLeft-f.scrollLeft)<C?$:D},0);c(P)},50)};return f.addEventListener("scroll",g,{passive:!0}),()=>{clearTimeout(x),f.removeEventListener("scroll",g)}},[l]),(0,e.jsxs)(Ih,{children:[(0,e.jsx)(Ch,{ref:n,children:t}),l>1&&(0,e.jsx)(Th,{children:Array.from({length:l},(f,x)=>(0,e.jsx)(Ah,{$active:x===r,onClick:()=>{c(x),s(x)},children:x+1},`carousel-page-${x}`))}),l>1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(cs,{type:"button",$direction:"previous","aria-label":"Попередня картка",onClick:()=>y(-1),children:"◀"}),(0,e.jsx)(cs,{type:"button",$direction:"next","aria-label":"Наступна картка",onClick:()=>y(1),children:"▶"})]})]})},us=["Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.","Доміно, власник сайту і замку!","Ти теж думаєш, що відсилками можна керувати погодою? :)","Погода така сама загадка і т/с 'Ральна містика'","Хто що любить, хто що шукає? :)","Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.","Хочете, щоб ваш трек або відсилка були на сайті? Надсилайте на пошту theturkeystudio@gmail.com","Фан-арти для роздрукування! І плоска 3D-картина краще виглядає на стіні, ніж на екрані. Примітка","0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода, музика і відсилки.","«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...","Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)","Знайди речдок у телешоу «Речдок»","Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?","Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)","Ми вас здивуємо багато чим :)","І що всіх тягне на турецькі серіали?","«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара","Морально підтримайте підпискою на ютуб, рекламою і побажаннями.","Навчання, оцінювання та коментування. І що я написав :)","Чекаю на ваші відсилки, фан-арти та побажання на пошту","Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»","У нас немає сторінки 404 :) Радіовишки, ліси, тумани, сирени...","Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.","Підтримайте, будь ласка, рекламою нас у соцмережах :)","У вас через сім днів буде хороша погода - поганої ж не існує :)","«Теорія неймовірності» (Макс Кідрук) має одну частину :(","Ох, Марта любить, коли ти не тікаєш від долі стати картиною.","Кейт — складна за характером індичка.","Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)","Хто ваш кумир? Зібров чи Винник?","Багато змін клімату, мультиплікації, моди, життя :(","Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)","Місія неможлива - ніде не помилитись","Льодовиковий період чи глобальне потепління через 24 роки.","Правило: дивіться на все під різними кутами.","Попри все, погода не буває поганою - вона буває різною.","Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик в магазині»","Оксану Самойлову з «Україна має талант» хто пам'ятає?","Страху немає, упевненим робиться рух!","Застрягли в минулому :) Але погода - це майбутнє!","Mondo TV - Thanks for legendary cartoons.","Раз, два, три. Погоду нам скажи!","Це початок початку чи початок кінця відсилкам? (Перший варіант)","Вверх - ти летиш! Вниз - ти падаєш! ","Чорний айсберг, потопив ......? ","Доміно тривожить Єллоустон","Я знаю що її звати ......","","Вам приснилися сни про погоду? Бо ви тут! :)","Вам приснився жах що ...... і ...... програли і....","Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)","Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)"],Dh=je`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`,$h=i.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${t=>t.$isNew?"#94fffa":"#ffb36c"};
  font-size: 14px;
  z-index: 10001;
  animation: ${Dh} 3s ease-out infinite;
  animation-delay: ${t=>t.$delay}s;
  --x: ${t=>t.$x}px;
  --y: ${t=>t.$y}px;
`,zh=i.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: ${t=>t.$isDarkMode?"rgba(6, 123, 110, 0.75)":"rgba(98, 112, 8, 0.55)"};
  color: ${t=>t.$isDarkMode?"#00eaff":"#fbff00"};
  padding: 2px 8px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 900;
  z-index: 499;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(6px);
  border: 2px solid
    ${t=>t.$isDarkMode?"rgba(128, 0, 255, 0.99)":"rgb(255, 170, 0)"};
  pointer-events: auto;
  cursor: pointer;
   text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.07);
    background: ${t=>t.$isDarkMode?"rgba(18, 43, 166, 0.69)":"rgba(254, 102, 0, 0.73)"};
  }
  &:active {
    transform: scale(0.95);
  }
`,Lh=i.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${t=>t.$isNew&&sn`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`,ps="siteSectionsOrder",fo=(0,a.memo)(({section:t,isDarkMode:n,isStickyBgMode:r,isLocationEnabled:c,handleRefreshCard:l,handleDeleteCard:s,handleRenameCard:y,moveWeatherCard:f,setIsLocationEnabled:x,user:g,handleOpenRegister:h,onUpdateUser:P,setHeroBg:D,customHeroBgs:M,setCustomHeroBgs:$,setCustomHolidayName:C,customHolidayName:b,weatherCards:w,weatherCardLayout:V,isAnyModalOpen:k,heroDateString:R,isWeatherDetailsOpen:W,setIsWeatherDetailsOpen:U,selectedWeatherCard:N,setSelectedWeatherCard:_,setIsFsActive:ge})=>t?t.key==="weather"?(0,e.jsxs)("div",{id:"weather",children:[(0,e.jsx)(bu,{$isStickyBgMode:r,$isDarkMode:n,children:"Погода"}),(0,e.jsx)(Mh,{children:w.map((ne,q)=>{const Z=ne.current.tempNum>30||ne.current.tempNum<-30,se=ne.current.windNum>10,Se=ne.current.uv_index>7;return(0,e.jsx)("div",{children:(0,e.jsx)(Nu,{isStickyBgMode:r,user:g,card:ne,isDarkMode:n,isLocationEnabled:c,isExtremeTemp:Z,isExtremeWind:se,isExtremeUV:Se,index:q,totalCards:w.length,handleRefreshCard:l,handleDeleteCard:s,handleRenameCard:y,moveWeatherCard:f,setIsLocationEnabled:x,customHolidayName:b,layout:V,onOpenDetails:fe=>{_({...ne,cityImage:fe||ne.cityImage}),U(!0)},currentTimeString:R})},ne.id)})})]}):(0,e.jsxs)("div",{id:t.key,children:[t.key==="map"&&(0,e.jsx)(fh,{isDarkMode:n,isStickyBgMode:r}),t.key==="aihelp"&&(0,e.jsx)(dh,{isDarkMode:n,isStickyBgMode:r}),t.key==="music"&&(0,e.jsx)(gh,{isStickyBgMode:r,user:g,onFsToggle:ge,isAnyModalOpen:k,onUpdateUser:P,isDarkMode:n}),t.key==="fanart"&&(0,e.jsx)(ch,{isStickyBgMode:r,isDarkMode:n,user:g,setHeroBg:D,customHeroBgs:M,setCustomHeroBgs:$}),t.key==="prison"&&(0,e.jsx)(lh,{})]}):null),Rh=()=>{const[t,n]=(0,a.useState)(!0),[r,c]=(0,a.useState)(!1),[l,s]=(0,a.useState)({text:"",isNew:!1}),[y,f]=(0,a.useState)(new Date),[x,g]=(0,a.useState)(!0),[h,P]=(0,a.useState)(!1),[D,M]=(0,a.useState)([]),[$,C]=(0,a.useState)({}),[b,w]=(0,a.useState)(null),V=(0,a.useRef)(null);(0,a.useEffect)(()=>{const m=x?"dark":"light";document.documentElement.dataset.theme=m,document.body.dataset.theme=m},[x]),(0,a.useEffect)(()=>{V.current=b},[b]);const[k,R]=(0,a.useState)(null),[W,U]=(0,a.useState)([]),[N,_]=(0,a.useState)(null),[ge,ne]=(0,a.useState)(null),[q,Z]=(0,a.useState)(null),[se,Se]=(0,a.useState)("static"),[fe,tt]=(0,a.useState)(.2),[Ce,ct]=(0,a.useState)({}),[xe,He]=(0,a.useState)(5),[$e,wt]=(0,a.useState)(.8),[vt,kt]=(0,a.useState)("all"),[Ze,xt]=(0,a.useState)(1),[_e,ht]=(0,a.useState)(0),[Tt,Oe]=(0,a.useState)(0),[T,F]=(0,a.useState)("smooth"),[te,de]=(0,a.useState)(0),[Ee,Ve]=(0,a.useState)({x:50,y:50}),[ze,nt]=(0,a.useState)({x:50,y:50}),[ce,jt]=(0,a.useState)({x:50,y:50}),[mt,at]=(0,a.useState)({x:50,y:50}),[At,Xe]=(0,a.useState)(!1),[bt,B]=(0,a.useState)(6),[ae,ue]=(0,a.useState)(1),[Be,Rt]=(0,a.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),[re,be]=(0,a.useState)(""),[ut,A]=(0,a.useState)(ho),[E,X]=(0,a.useState)(!1),[ie,Ke]=(0,a.useState)(!1),[ke,We]=(0,a.useState)(!1),[rt,It]=(0,a.useState)(!1),[Ut,ve]=(0,a.useState)(!1),[Mt,Vt]=(0,a.useState)(!1),[Et,ln]=(0,a.useState)(!1),[ot,Dt]=(0,a.useState)(!1),[Fe,Kt]=(0,a.useState)(!0),[Le,oe]=(0,a.useState)(!1),[ye,qe]=(0,a.useState)(!1),[le,Te]=(0,a.useState)(!0),[we,Pe]=(0,a.useState)(go),[Ge,dn]=(0,a.useState)("loop"),[it,xn]=(0,a.useState)(!1),[Wt,Mn]=(0,a.useState)(23),[,Wn]=(0,a.useState)(0),[en,qn]=(0,a.useState)(.2),[hn,Gn]=(0,a.useState)(.2),[Bt,Dn]=(0,a.useState)("eager"),[tn,$n]=(0,a.useState)(1),[zn,mn]=(0,a.useState)([]),[zt,Ln]=(0,a.useState)({}),[nn,Bn]=(0,a.useState)(!1),[Ft,bn]=(0,a.useState)(!1),[cn,Qe]=(0,a.useState)(!1),[Gt,un]=(0,a.useState)(null),Jt=(0,a.useCallback)(()=>{const m=new Date,I=3600-(m.getMinutes()*60+m.getSeconds());return I<=0?3600:I},[]),[Sn,_n]=(0,a.useState)(Jt()),Ae=(0,a.useRef)([]),Je=(0,a.useRef)(null),Yt=(0,a.useRef)(null),[yn,Pt]=(0,a.useState)(0),pn=(0,a.useRef)(!1),[Jn,Yn]=(0,a.useState)(!1),[Zn,ma]=(0,a.useState)(!1),[ba,d]=(0,a.useState)(!1),[p,O]=(0,a.useState)(!1),[z,L]=(0,a.useState)("UTC"),[v,he]=(0,a.useState)(!1),[Ie,st]=(0,a.useState)(!1),[Zt,Ne]=(0,a.useState)(null),[pt,Re]=(0,a.useState)(null);(0,a.useEffect)(()=>op(({isMaintenanceMode:m,endTime:I,message:Y})=>{st(m),Ne(I),Re(Y)}),[]),(0,a.useEffect)(()=>{(async()=>{try{const I=await u.default.getItem("isDarkMode");I!==null&&g(I);const Y=await u.default.getItem("isStickyBgMode");Y!==null&&P(Y);const G=await u.default.getItem("sectionThemes");G&&C(G);const J=await u.default.getItem("hiddenSections");J&&M(J);const Q=await u.default.getItem("active_user");Q&&w(Q);const Ue=await u.default.getItem("currentAvatar");Ue&&A(Ue);const yt=await u.default.getItem("isRoutingMode");yt!==null&&wn(yt);const _t=await u.default.getItem("selected_timezone");_t&&L(_t);const Ct=await u.default.getItem("bg_music_enabled");Ct!==null&&qe(Ct);const S=await u.default.getItem("auto_mute_bg_music");S!==null&&Te(S);const $t=await u.default.getItem("lock_filters_in_fs");$t!==null&&Bn($t);const Cn=await u.default.getItem("bg_music_source");Cn&&Pe(Cn);const ka=await u.default.getItem("custom_bg_tracks");ka&&mn(ka);const Hn=await u.default.getItem("bg_music_volume");Hn!==null&&qn(Hn);const Ha=await u.default.getItem("sfx_volume");Ha!==null&&Gn(Ha);const pe=await u.default.getItem("bg_music_speed");pe!==null&&$n(pe);const dt=await u.default.getItem("bg_music_position");dt!==null&&Pt(dt);const et=await u.default.getItem("bg_music_mode");et&&dn(et);const Me=await u.default.getItem("bg_music_shuffle");Me!==null&&xn(Me);const De=await u.default.getItem("active_bg_track_id");De&&Mn(De);const gt=await u.default.getItem("library_bg_settings");gt&&Ln(gt);const Xt=await u.default.getItem("weather_cards");Xt&&Rn(oo(Xt));const Nt=await u.default.getItem("hideDeleteModalUntil");Nt&&j(parseInt(Nt));const Un=await u.default.getItem(ps);Un&&ee(Un);const Xn=await u.default.getItem("hero_background");Xn&&R(Xn);const La=await u.default.getItem("hero_background_2");La&&_(La);const Io=await u.default.getItem("hero_background_3");Io&&ne(Io);const Mo=await u.default.getItem("hero_background_4");Mo&&Z(Mo);const Do=await u.default.getItem("custom_hero_backgrounds");Do&&U(Do);const $o=await u.default.getItem("hero_bg_mode");$o&&Se($o);const zo=await u.default.getItem("hero_slideshow_interval");zo!==null&&He(zo);const Lo=await u.default.getItem("hero_slideshow_transition");Lo!==null&&wt(Lo);const Ro=await u.default.getItem("hero_bg_filter_category");Ro&&kt(Ro);const Eo=await u.default.getItem("hero_bg_zoom");Eo!==null&&xt(Eo);const Fo=await u.default.getItem("hero_bg_rotation");Fo!==null&&de(Fo);const Po=await u.default.getItem("hero_bg_blur");Po!==null&&ht(Po);const No=await u.default.getItem("hero_bg_blur_type");No&&F(No);const Oo=await u.default.getItem("hero_bg_pixelation");Oo!==null&&Oe(Oo);const Vo=await u.default.getItem("hero_bg_focal1");Vo&&Ve(Vo);const Bo=await u.default.getItem("hero_bg_focal2");Bo&&nt(Bo);const _o=await u.default.getItem("hero_bg_focal3");_o&&jt(_o);const Ho=await u.default.getItem("hero_bg_focal4");Ho&&at(Ho);const Uo=await u.default.getItem("hero_bg_pan_enabled");Uo!==null&&Xe(Uo);const Ko=await u.default.getItem("hero_bg_pan_speed");Ko!==null&&B(Ko);const Wo=await u.default.getItem("hero_video_playback_speed");Wo!==null&&ue(Wo);const qo=await u.default.getItem("custom_holiday_name");qo&&be(qo);const Go=await u.default.getItem("dinofroz_screenshots");Go&&_a(Go);const Yl=await u.default.getItem("last_deployed_version"),Jo=await u.default.getItem("weather_card_layout");Jo&&Rt(Jo);const Yo=await u.default.getItem("show_update_timer");Yo!==null&&Kt(Yo);const Zo=await u.default.getItem("modal_loading_strategy");Zo&&Dn(Zo);const Xo={}.REACT_APP_DEPLOY_ID;Xo&&Yl!==Xo&&ma(!0),he(!0)}catch(I){console.error("Помилка завантаження з localforage:",I),he(!0)}})()},[]),(0,a.useEffect)(()=>{v&&(u.default.setItem("isStickyBgMode",h),u.default.setItem("bg_music_enabled",ye),u.default.setItem("auto_mute_bg_music",le),u.default.setItem("lock_filters_in_fs",nn),(we instanceof Blob||typeof we=="string")&&u.default.setItem("bg_music_source",we),u.default.setItem("custom_bg_tracks",zn),u.default.setItem("bg_music_volume",en),u.default.setItem("sfx_volume",hn),u.default.setItem("bg_music_speed",tn),u.default.setItem("bg_music_mode",Ge),u.default.setItem("bg_music_shuffle",it),u.default.setItem("active_bg_track_id",Wt),u.default.setItem("library_bg_settings",zt))},[ye,le,nn,we,zn,zt,en,hn,tn,Ge,it,Wt,v]),(0,a.useEffect)(()=>{(async()=>{const I=await u.default.getItem("seen_loading_phrases")||[],Y=Math.floor(Math.random()*us.length),G=us[Y],J=!I.includes(G);if(J){const Q=[...I,G];await u.default.setItem("seen_loading_phrases",Q.slice(-100))}s({text:G,isNew:J})})()},[]);const ft=(0,a.useCallback)(()=>{Ye(()=>import("./Prison-ZUwWpvg5.js"),__vite__mapDeps([0,1,2,3])),Ye(()=>import("./Aihelp-4YhG2A6U.js"),__vite__mapDeps([4,1,2])),Ye(()=>import("./FanArt-DPLiRxG6.js"),__vite__mapDeps([5,1,2])),Ye(()=>import("./ShopModal-Ds2eCNlz.js"),__vite__mapDeps([6,1,2])),Ye(()=>Promise.resolve().then(()=>Nf),void 0),Ye(()=>import("./AchivmentsModal-CWP1Fo-8.js"),__vite__mapDeps([7,1,2])),Ye(()=>import("./ClimateMap-DijgNlQb.js"),__vite__mapDeps([8,1,2])),Ye(()=>import("./MusicPhoto-BOaBNTXM.js"),__vite__mapDeps([9,1,2,10])),Ye(()=>import("./Modal-DIE4gm29.js"),__vite__mapDeps([11,1,2,12])),Ye(()=>import("./LoginModal-DLu2dbKw.js"),__vite__mapDeps([13,1,2])),Ye(()=>import("./UserSettingsModal-6MaHp0iV.js"),__vite__mapDeps([14,1,2,12])),Ye(()=>import("./WeatherDetailsModal-DveTCxqg.js"),__vite__mapDeps([15,1,2])),Ye(()=>Promise.resolve().then(()=>Ml),void 0),Ye(()=>import("./OtherOptionsModal-CYzPGWE6.js"),__vite__mapDeps([16,1,2,10]))},[]);(0,a.useEffect)(()=>{if(v){if(Bt==="eager")ft();else if(Bt==="delayed"){const m=setTimeout(ft,8e3);return()=>clearTimeout(m)}}},[v,Bt,ft]);const an=(0,a.useMemo)(()=>{const m=l.isNew?12:6;return Array.from({length:m}).map((I,Y)=>({id:Y,x:(Math.random()-.5)*220,y:(Math.random()-.5)*140,delay:Math.random()*2}))},[l]);(0,a.useEffect)(()=>{const m=setTimeout(()=>d(!0),8e3);return()=>clearTimeout(m)},[]),(0,a.useEffect)(()=>{if(b?.fontFamily){const m=b.fontFamily.trim().replace(/ /g,"+").replace(/['"]/g,""),I="custom-google-font";let Y=document.getElementById(I);Y||(Y=document.createElement("link"),Y.id=I,Y.rel="stylesheet",document.head.appendChild(Y)),Y.href=`https://fonts.googleapis.com/css2?family=${m}:wght@400;700;900&display=swap`,document.documentElement.style.setProperty("--font-family",`"${b.fontFamily.replace(/['"]/g,"")}", sans-serif`)}else document.getElementById("custom-google-font")?.remove(),document.documentElement.style.removeProperty("--font-family")},[b?.fontFamily]),(0,a.useEffect)(()=>{const m=()=>{Yn(!0),window.removeEventListener("mousedown",m),window.removeEventListener("scroll",m),window.removeEventListener("touchstart",m)};return window.addEventListener("mousedown",m),window.addEventListener("scroll",m),window.addEventListener("touchstart",m),()=>{window.removeEventListener("mousedown",m),window.removeEventListener("scroll",m),window.removeEventListener("touchstart",m)}},[]);const[fn,wn]=(0,a.useState)(!1);(0,a.useEffect)(()=>{Zn&&ba&&Jn&&!p&&(Dt(!0),ma(!1),O(!0),u.default.setItem("last_deployed_version",{}.REACT_APP_DEPLOY_ID))},[Zn,ba,Jn,p]);const[qt,ya]=(0,a.useState)(!1),[vn,Rn]=(0,a.useState)([]),[$a,_a]=(0,a.useState)([]),wa=E||ie||ke||rt||Ut||Mt||Et||ot||p,[o,j]=(0,a.useState)(0);(0,a.useEffect)(()=>{const I=setTimeout(async()=>{const Y=[go,hr,hr,br];try{await Promise.all(Y.map(G=>fetch(G))),console.log("KatScene assets preloaded in background")}catch(G){console.warn("Failed to preload KatScene assets:",G)}},4e3);return()=>clearTimeout(I)},[]);const[H,ee]=(0,a.useState)([...zr]);(0,a.useEffect)(()=>{if(v){const m=oo(vn);if(u.default.setItem("weather_cards",m).catch(I=>{console.error("weather_cards persistence failed:",I)}),V.current?.uid){const I=m.map(G=>({id:G.id,isMain:G.isMain,locationName:G.locationName,lat:G.lat,lon:G.lon})),Y=Vn(kn,"config",V.current.uid);Fa(Y,{savedWeatherCards:I},{merge:!0}).catch(console.error)}}},[vn,v]),(0,a.useEffect)(()=>{(async()=>{if(V.current?.uid&&v)try{const I=Vn(kn,"config",V.current.uid),Y=await gr(I);if(Y.exists()){const G=Y.data();if(G.savedWeatherCards&&G.savedWeatherCards.filter(J=>!Ae.current.some(Q=>Q.id===J.id)).forEach(J=>{J.isMain?on():Lt({id:J.id,fullName:J.locationName,lat:J.lat,lon:J.lon},!1,J.lat,J.lon)}),G.settings){const J=G.settings;J.isDarkMode!==void 0&&g(J.isDarkMode),J.hiddenSections&&M(J.hiddenSections),J.weatherCardLayout&&Rt(J.weatherCardLayout),J.isRoutingMode!==void 0&&wn(J.isRoutingMode),J.siteSections&&ee(J.siteSections),J.isStickyBgMode!==void 0&&P(J.isStickyBgMode),J.sectionThemes&&C(J.sectionThemes),J.heroBg&&R(J.heroBg),J.heroBg2&&_(J.heroBg2),J.heroBg3&&ne(J.heroBg3),J.heroBg4&&Z(J.heroBg4),J.heroBgMode&&Se(J.heroBgMode),J.customHeroBgs&&U(J.customHeroBgs),J.heroOverlayOpacity!==void 0&&tt(J.heroOverlayOpacity),J.bgRatings&&ct(J.bgRatings)}}}catch(I){console.error("Error syncing from Firestore:",I)}})()},[b,v]),(0,a.useEffect)(()=>{v&&(async()=>{try{const I=await u.default.getItem("weather_cards");if(I){const Y=oo(I);Rn(Y)}}catch(I){console.error("weather_cards hydration failed:",I)}})()},[v]),(0,a.useEffect)(()=>{if(v&&(u.default.setItem("isRoutingMode",fn),u.default.setItem(ps,H),u.default.setItem("hiddenSections",D),u.default.setItem("weatherCardLayout",Be),u.default.setItem("isStickyBgMode",h),u.default.setItem("sectionThemes",$),u.default.setItem("isDarkMode",x),u.default.setItem("hero_video_playback_speed",ae),V.current?.uid)){const m=Vn(kn,"config",V.current.uid);Fa(m,{settings:{isDarkMode:x,hiddenSections:D,weatherCardLayout:Be,isRoutingMode:fn,siteSections:H,isStickyBgMode:h,sectionThemes:$,heroBg:k,heroBg2:N,heroBg3:ge,heroBg4:q,heroBgMode:se,customHeroBgs:W,heroOverlayOpacity:fe,bgRatings:Ce}},{merge:!0}).catch(console.error)}},[fn,H,D,Be,h,$,x,k,N,ge,q,se,W,fe,Ce,ae,v]);const[K,me]=(0,a.useState)("");(0,a.useEffect)(()=>{let m=we;return we instanceof Blob&&(m=URL.createObjectURL(we)),me(m),()=>{we instanceof Blob&&m&&URL.revokeObjectURL(m)}},[we]);const lt=(0,a.useRef)(null);(0,a.useEffect)(()=>{const m=Je.current,I=Yt.current;if(!m||!I)return;lt.current!==K&&(Wn(0),lt.current=K);const Y=ye&&(!Ft||!le),G=Y?en:0,J=.02;let Q=m,Ue=I;m.src&&K&&m.src.includes(K)?(Q=m,Ue=I):I.src&&K&&I.src.includes(K)?(Q=I,Ue=m):(Q=m.paused||m.volume===0?m:I,Ue=Q===m?I:m),Y?Q.paused||Q.src===""||!Q.src.includes(K)?(Q.src=K,!pn.current&&yn>0?(Q.currentTime=yn,pn.current=!0):Q.currentTime=0,Q.volume=0,Q.playbackRate=tn,Q.play().catch(()=>{})):Q.paused&&Q.play().catch(()=>{}):Y||(m.paused||m.pause(),I.paused||I.pause());const yt=setInterval(()=>{Q.volume<G?Q.volume=Math.min(G,Q.volume+J):Q.volume=G,Ue.volume>0?Ue.volume=Math.max(0,Ue.volume-J):Ue.pause(),Q.volume===G&&Ue.volume===0&&clearInterval(yt)},50);return()=>clearInterval(yt)},[ye,Ft,le,K,en,tn,yn]),(0,a.useEffect)(()=>{const m=setInterval(()=>{const I=Je.current,Y=Yt.current;if(!I||!Y)return;const G=I&&!I.paused?I:Y&&!Y.paused?Y:null;G&&G.currentTime>0&&u.default.setItem("bg_music_position",G.currentTime)},5e3);return()=>clearInterval(m)},[]);const St=(0,a.useCallback)(async()=>{Pt(0),await u.default.setItem("bg_music_position",0),Je.current&&(Je.current.currentTime=0),Yt.current&&(Yt.current.currentTime=0),pn.current=!1},[]),va=(0,a.useCallback)(()=>{const m=Je.current,I=Yt.current;if(!m||!I)return;let Y=m;if(I.src&&K&&I.src.includes(K)&&(Y=I),Ge==="loop"){Y.currentTime=0,Y.play().catch(()=>{});return}const G=(zn||[]).find(Q=>Q&&Q.file===we);let J=1;G?J=G.repeats||1:Wt&&(J=zt[Wt]?.repeats||1),Wn(Q=>{const Ue=Q+1;if(Ue<J)return Y.currentTime=0,Y.play().catch(()=>{}),Ue;if(Ge==="order"){const yt=xr.map(S=>({id:S.id,file:Ta[S.audio]||turkeysAudio,enabled:zt[S.id]?.enabled!==!1})).filter(S=>S.enabled),_t=(zn||[]).filter(S=>S&&S.enabled!==!1),Ct=[...yt.map(S=>({id:S.id,file:S.file,isCustom:!1})),..._t.map(S=>({id:S.id,file:S.file,isCustom:!0}))];if(Ct.length>0){const S=Ct.findIndex($t=>$t.file===we);if(it){const $t=Ct.filter(ka=>ka.file!==we),Cn=$t.length>0?$t[Math.floor(Math.random()*$t.length)]:Ct[0];Pe(Cn.file),Mn(Cn.isCustom?null:Cn.id)}else{const $t=Ct[(S+1)%Ct.length];Pe($t.file),Mn($t.isCustom?null:$t.id)}}}return 0})},[Ge,we,zn,it,Wt,zt,K]);(0,a.useEffect)(()=>{ye&&(Je.current&&!Je.current.paused?Je.current.currentTime=0:Yt.current&&!Yt.current.paused&&(Yt.current.currentTime=0))},[Ge,ye]),(0,a.useEffect)(()=>{v&&(u.default.setItem("isDarkMode",x),u.default.setItem("sectionThemes",$),u.default.setItem("hiddenSections",D),u.default.setItem("hero_background",k),u.default.setItem("custom_hero_backgrounds",W),u.default.setItem("hero_background_2",N),u.default.setItem("hero_background_3",ge),u.default.setItem("hero_background_4",q),u.default.setItem("hero_bg_ratings",Ce),u.default.setItem("hero_bg_mode",se),u.default.setItem("hero_overlay_opacity",fe),u.default.setItem("hero_slideshow_interval",xe),u.default.setItem("hero_slideshow_transition",$e),u.default.setItem("hero_bg_filter_category",vt),u.default.setItem("hero_bg_zoom",Ze),u.default.setItem("hero_bg_rotation",te),u.default.setItem("hero_bg_blur",_e),u.default.setItem("hero_bg_blur_type",T),u.default.setItem("hero_bg_pixelation",Tt),u.default.setItem("hero_bg_focal1",Ee),u.default.setItem("hero_bg_focal2",ze),u.default.setItem("hero_bg_focal3",ce),u.default.setItem("hero_bg_focal4",mt),u.default.setItem("hero_bg_pan_enabled",At),u.default.setItem("hero_bg_pan_speed",bt),u.default.setItem("custom_holiday_name",re),u.default.setItem("selected_timezone",z),u.default.setItem("weather_card_layout",Be),u.default.setItem("show_update_timer",Fe),u.default.setItem("modal_loading_strategy",Bt))},[k,N,ge,q,W,Ce,se,fe,xe,$e,vt,Ze,te,_e,T,Tt,Ee,ze,ce,mt,At,bt,v,x,$,D,re,z,Be,Fe,Bt]),(0,a.useEffect)(()=>{b?.fastClicks?document.body.classList.add("fast-clicks-enabled"):document.body.classList.remove("fast-clicks-enabled")},[b?.fastClicks]),(0,a.useEffect)(()=>{v&&(b?(u.default.setItem("active_user",b),b.avatar&&(A(b.avatar),u.default.setItem("currentAvatar",b.avatar))):u.default.removeItem("active_user"))},[b,v]),(0,a.useEffect)(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),(0,a.useEffect)(()=>{Ae.current=vn},[vn]);const Lt=(0,a.useCallback)(async(m,I,Y=null,G=null,J=!1)=>{try{let Q=Y,Ue=G,yt=typeof m=="string"?m:m?.fullName||"Ваша локація";if(m&&typeof m=="object"&&m.lat)Q=m.lat,Ue=m.lon,yt=m.fullName||yt;else if(typeof m=="string"){const pe=Al(m);if(pe)Q=pe.lat,Ue=pe.lon,yt=pe.fullName,m={id:`search-${pe.name.toLowerCase()}`};else{const dt=await Ka.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(m)}&count=1&language=uk`);if(dt.data.results&&dt.data.results[0])Q=dt.data.results[0].latitude,Ue=dt.data.results[0].longitude,yt=dt.data.results[0].name,m={id:Date.now()};else{alert("Місто не знайдено в базі Open-Meteo");return}}}const _t=I?"main-card":m?.id||Date.now();if(!I&&!Ae.current.find(pe=>pe.id===_t)){if(Ae.current.filter(pe=>!pe.isMain).length>=4){alert("Можна мати не більше 4 власних карток погоди плюс поточну GPS-картку.");return}if(V.current)try{const pe=Vn(kn,"config",V.current.uid),dt=await gr(pe);let et=dt.exists()?dt.data():{};const Me=new Date().toISOString().split("T")[0];if(et.cardAdditionsDate!==Me&&(et.cardAdditionsCount=0,et.cardAdditionsDate=Me),et.cardAdditionsCount>=10){alert("Ви досягли ліміту в 10 карток на добу.");return}et.cardAdditionsCount+=1,await Fa(pe,{cardAdditionsCount:et.cardAdditionsCount,cardAdditionsDate:et.cardAdditionsDate},{merge:!0})}catch(pe){console.error("Помилка перевірки ліміту Firestore:",pe)}else{let pe=await u.default.getItem("anonCardLimit")||{};const dt=Date.now();if((!pe.startDate||dt-pe.startDate>6048e5)&&(pe={startDate:dt,count:0}),pe.count>=3){alert("Незареєстровані користувачі можуть додавати лише 3 картки на тиждень. Увійдіть в акаунт, щоб збільшити ліміт!");return}pe.count+=1,await u.default.setItem("anonCardLimit",pe)}}const Ct=`https://api.open-meteo.com/v1/forecast?latitude=${Q}&longitude=${Ue}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day&hourly=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,sunrise,sunset&timezone=auto&past_days=1&forecast_days=16`;console.log("Fetching weather from URL:",Ct);const S=(await Ka.get(Ct)).data;if(console.log("💾 RAW API RESPONSE for",yt,S),console.log("API Response raw data:",{hasResponse:!!S,currentData:S.current,hourlyData:S.hourly?{time:S.hourly.time?.slice(0,2),wind:S.hourly.wind_speed_10m?.slice(0,2)}:null,dailyData:S.daily?{time:S.daily.time?.slice(0,2),uv_index_max:S.daily.uv_index_max?.slice(0,2),wind_speed_10m_max:S.daily.wind_speed_10m_max?.slice(0,2)}:null}),(!S.current||S.current.wind_speed_10m===void 0)&&console.error("❌ Wind speed data missing from current!",{hasCurrentData:!!S.current,currentKeys:S.current?Object.keys(S.current):[],windSpeed:S.current?.wind_speed_10m}),(!S.daily?.uv_index_max||S.daily.uv_index_max.length===0)&&console.error("❌ UV index data missing from daily!",{hasDailyData:!!S.daily,dailyKeys:S.daily?Object.keys(S.daily):[],uvIndex:S.daily?.uv_index_max,uvLength:S.daily?.uv_index_max?.length}),S.hourly?.wind_speed_10m||console.error("❌ Hourly wind data missing!",{hasHourlyData:!!S.hourly,hourlyKeys:S.hourly?Object.keys(S.hourly):[],wind:S.hourly?.wind_speed_10m}),"Notification"in window&&Notification.permission==="granted"){const pe=Date.now();if(pe-Number(window.localStorage.getItem("weatherNotificationLastSentAt")||0)>=36e5){const dt=Math.round(S.current.temperature_2m),et=Math.round(S.current.apparent_temperature),Me=S.current.wind_speed_10m??0,De=S.current.relative_humidity_2m??0,gt=jh(S.current.weather_code,S.current.is_day),Xt=`Температура ${dt}°C${et!==dt?`, відчувається ${et}°C`:""}, ${gt}, вітер ${Me} м/с, вологість ${De}%.`;new Notification(`Погода: ${yt}`,{body:Xt,icon:"/favicon.ico"}),window.localStorage.setItem("weatherNotificationLastSentAt",String(pe))}}const $t=new Date;let Cn=$t.getHours();Cn>=18&&(Cn=18);const ka=`${$t.getFullYear()}-${String($t.getMonth()+1).padStart(2,"0")}-${String($t.getDate()).padStart(2,"0")}T${String(Cn).padStart(2,"0")}:00`;let Hn=(S.hourly?.time||[]).findIndex(pe=>pe.startsWith(ka));Hn===-1&&(Hn=0);const Ha=168;Rn(pe=>{const dt=pe.find(Me=>Me.id===_t);console.log(`Creating weather card for ${yt}`,{windSpeedCurrent:S.current?.wind_speed_10m,windSpeedHourly:S.hourly?.wind_speed_10m?.slice(0,3),uvIndexDaily:S.daily?.uv_index_max?.slice(0,3)});const et={id:_t,isMain:I,locationName:I&&!m?.fullName?"Ваша локація":dt?dt.locationName:yt,lat:Q,lon:Ue,current:{temp:`${Math.round(S.current.temperature_2m)}°C`,tempNum:Math.round(S.current.temperature_2m),feels_like:`${Math.round(S.current.apparent_temperature)}°C`,humidity:`${S.current.relative_humidity_2m}%`,pressure:`${Math.round(S.current.surface_pressure)} hPa`,wind_speed:`${S.current.wind_speed_10m??0} м/с`,windNum:S.current.wind_speed_10m??0,wind_direction_10m:S.current.wind_direction_10m??0,wind_gusts_10m:S.current.wind_gusts_10m??0,uv_index:S.daily?.uv_index_max?.[0]??0,cloud_cover:S.current.cloud_cover??0,visibility:S.current.visibility??0,dew_point_2m:S.current.dew_point_2m??0,temperature_80m:S.current.temperature_80m??0,description:"За кодом: "+S.current.weather_code,iconPlaceholder:pr(S.current.weather_code,S.current.is_day),iconSymbol:po(S.current.weather_code,S.current.is_day)},hourly:(S.hourly?.time||[]).slice(Hn,Hn+Ha).map((Me,De)=>{const gt=Hn+De,Xt=new Date(Me),Nt=Me.slice(0,10),Un=(S.daily?.time||[]).indexOf(Nt);let Xn=1;if(Un!==-1&&S.daily?.sunrise?.[Un]&&S.daily?.sunset?.[Un])Xn=Me>=S.daily.sunrise[Un]&&Me<=S.daily.sunset[Un]?1:0;else{const La=Xt.getHours();Xn=La>=6&&La<21?1:0}return{time:`${String(Xt.getHours()).padStart(2,"0")}:00`,dateLabel:Xt.toLocaleDateString("uk",{day:"2-digit",month:"2-digit"}),fullTime:Me,temp:`${Math.round(S.hourly?.temperature_2m?.[gt]??0)}°C`,tempNum:Math.round(S.hourly?.temperature_2m?.[gt]??0),feels_like:`${Math.round(S.hourly?.apparent_temperature?.[gt]??0)}°C`,windNum:S.hourly?.wind_speed_10m?.[gt]??0,wind_direction_10m:S.hourly?.wind_direction_10m?.[gt]??0,wind_gusts_10m:S.hourly?.wind_gusts_10m?.[gt]??0,relative_humidity_2m:S.hourly?.relative_humidity_2m?.[gt]??null,dew_point_2m:S.hourly?.dew_point_2m?.[gt]??0,precipitation:S.hourly?.precipitation?.[gt]??null,rain:S.hourly?.rain?.[gt]??null,pressure_msl:S.hourly?.pressure_msl?.[gt]??null,cloud_cover:S.hourly?.cloud_cover?.[gt]??null,visibility:S.hourly?.visibility?.[gt]??0,iconPlaceholder:pr(S.hourly?.weather_code?.[gt]??0,Xn),iconSymbol:po(S.hourly?.weather_code?.[gt]??0,Xn)}}),daily16:(S.daily?.time||[]).map((Me,De)=>({date:new Date(Me).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),fullDate:Me,day:new Date(Me).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(S.daily.temperature_2m_max[De]??0)}°C`,temp_night:`${Math.round(S.daily.temperature_2m_min[De]??0)}°C`,uv_index:S.daily.uv_index_max?.[De]??0,wind_speed:`${S.daily.wind_speed_10m_max?.[De]??0} м/с`,wind_direction_10m:S.daily.wind_direction_10m_dominant?.[De]??0,precipitation_probability_max:S.daily.precipitation_probability_max?.[De]??0,rain_sum:S.daily.rain_sum?.[De]??0,precipitation_sum:S.daily.precipitation_sum?.[De]??0,sunrise:S.daily.sunrise?.[De]??null,sunset:S.daily.sunset?.[De]??null,iconPlaceholder:pr(S.daily.weather_code[De]??0,1),iconSymbol:po(S.daily.weather_code[De]??0,1),description:pr(S.daily.weather_code[De]??0,1)}))};return console.log(`Card data created for ${yt}:`,{windSpeedStored:et.current.windNum,uvIndexStored:et.current.uv_index,hourlyWindSample:et.hourly?.slice(0,2).map(Me=>Me.windNum),dailyWindSample:et.daily16?.slice(0,2).map(Me=>Me.wind_speed)}),J?[et,...pe.filter(Me=>Me.id!==_t)]:I?pe.some(Me=>Me.isMain)?pe.map(Me=>Me.isMain?et:Me):[et,...pe]:dt?pe.map(Me=>Me.id===_t?et:Me):pe.length>=8?pe:[...pe,et]});try{const pe=new Date,dt=new Date(pe);dt.setDate(dt.getDate()+210);const et=gt=>gt.toISOString().split("T")[0],Me=`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${Q}&longitude=${Ue}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&start_date=${et(pe)}&end_date=${et(dt)}`,De=(await Ka.get(Me)).data;if(De?.daily?.time?.length){const gt=De.daily.time.map((Xt,Nt)=>({fullDate:Xt,date:new Date(Xt).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),day:new Date(Xt).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(Array.isArray(De.daily.temperature_2m_max?.[0])?De.daily.temperature_2m_max[0][Nt]??0:De.daily.temperature_2m_max?.[Nt]??0)}°C`,temp_night:`${Math.round(Array.isArray(De.daily.temperature_2m_min?.[0])?De.daily.temperature_2m_min[0][Nt]??0:De.daily.temperature_2m_min?.[Nt]??0)}°C`,wind_speed:`${Math.round(Array.isArray(De.daily.wind_speed_10m_max?.[0])?De.daily.wind_speed_10m_max[0][Nt]??0:De.daily.wind_speed_10m_max?.[Nt]??0)} м/с`,precipitation_sum:Array.isArray(De.daily.precipitation_sum?.[0])?De.daily.precipitation_sum[0][Nt]??0:De.daily.precipitation_sum?.[Nt]??0,isSeasonal:!0}));Rn(Xt=>Xt.map(Nt=>Nt.id===_t?{...Nt,seasonal:gt}:Nt))}}catch(pe){console.warn("Seasonal forecast unavailable:",pe.message)}}catch(Q){console.error("Помилка завантаження погоди",Q)}},[]),rn=(0,a.useCallback)(async(m,I)=>{try{const{current:Y,daily:G}=(await Ka.get(`https://api.open-meteo.com/v1/forecast?latitude=${m}&longitude=${I}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&timezone=auto&forecast_days=3`)).data||{};if(!Y||!G)return console.warn("Weather danger check: Missing data",{hasCurrent:!!Y,hasDaily:!!G}),null;const J=Y.wind_speed_10m??0,Q=Y.temperature_2m??0,Ue=G?.uv_index_max?.[0]??0;console.log("Weather danger check data:",{windSpeed:J,currentTemp:Q,uvIndex:Ue,hasUvData:!!G.uv_index_max});const yt=(_t,Ct,S,$t)=>_t>30||Ct<-30||S>10||$t>7;return yt(G?.temperature_2m_max?.[0]??Q,G?.temperature_2m_min?.[0]??Q,J,Ue)?"red":G?.time?.some((_t,Ct)=>yt(G.temperature_2m_max?.[Ct],G.temperature_2m_min?.[Ct],G.wind_speed_10m_max?.[Ct]||0,G.uv_index_max?.[Ct]||0))?"orange":null}catch(Y){return console.error("Weather danger check error:",Y),null}},[]),on=(0,a.useCallback)(()=>{if(!qt){Lt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52);return}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(m=>{Lt({id:"main-card"},!0,m.coords.latitude,m.coords.longitude)},()=>Lt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)):Lt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)},[Lt,qt]),gn=(0,a.useCallback)(m=>{m.isMain?on():Lt(m,!1)},[on,Lt]),Bl=(0,a.useCallback)(()=>{console.log("Manual bulk refresh triggered..."),Ae.current.length>0&&Ae.current.forEach(m=>gn(m)),_n(Jt())},[gn,Jt]);(0,a.useEffect)(()=>{on()},[on]),(0,a.useEffect)(()=>{if(!v)return;const m=Gx(window.location.search,window.location.hash);if(m.isSearchEntry&&m.cityName){const I=m.cityData;document.title=`Погода в місті ${m.cityName} — точний прогноз | Стихія`;const Y=document.querySelector('meta[name="description"]');Y&&Y.setAttribute("content",`Точний прогноз погоди в місті ${m.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`);let G=document.querySelector('link[rel="canonical"]');G&&G.setAttribute("href",`https://stuxia.com/?q=погода+${encodeURIComponent(m.cityName.toLowerCase())}`);let J=document.getElementById("city-jsonld");J||(J=document.createElement("script"),J.id="city-jsonld",J.type="application/ld+json",document.head.appendChild(J)),J.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Place",name:m.cityName,description:`Точний прогноз погоди в місті ${m.cityName}`,address:{"@type":"PostalAddress",addressCountry:"UA",addressLocality:m.cityName}}),Lt(I.lat!==null?{id:I.id,fullName:I.fullName,lat:I.lat,lon:I.lon}:I.name,!1,I.lat,I.lon,!0),setTimeout(()=>{const Q=document.getElementById("weather");Q&&Q.scrollIntoView({behavior:"smooth"})},700)}},[v,Lt]),(0,a.useEffect)(()=>{if(!v)return;const m=new Date;m.setDate(m.getDate()-1);const I=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`;vn.forEach(Y=>{Y.daily16?.[0]?.fullDate!==I&&gn(Y)})},[v,vn,gn]),(0,a.useEffect)(()=>{if(!v)return;const m=setInterval(()=>{if(document.visibilityState==="visible"){const I=Jt();_n(Y=>(Y<=5&&I>3590&&(console.log("Auto-updating weather cards at start of hour..."),Ae.current.forEach(G=>gn(G))),I))}},1e3);return()=>clearInterval(m)},[v,gn,Jt]);const yr=(0,a.useCallback)(m=>{Rn(I=>I.filter(Y=>Y.id!==m))},[]),wr=(0,a.useCallback)(m=>{if(Ae.current.filter(I=>!I.isMain).length>=4){alert("Можна мати не більше 4 власних карток погоди плюс поточну GPS-картку.");return}Lt(m,!1)},[Lt]),vr=(0,a.useCallback)((m,I)=>{Rn(Y=>Y.map(G=>G.id===m?{...G,locationName:I}:G))},[]),kr=(0,a.useCallback)((m,I)=>{Rn(Y=>{const G=Y.findIndex(Ue=>Ue.id===m);if(G===-1)return Y;const J=G+I;if(J<0||J>=Y.length)return Y;const Q=[...Y];return[Q[G],Q[J]]=[Q[J],Q[G]],Q})},[]);(0,a.useEffect)(()=>{const m=setTimeout(()=>c(!0),3500),I=setTimeout(()=>n(!1),5300),Y=setInterval(()=>f(new Date),1e3);return()=>{clearTimeout(m),clearTimeout(I),clearInterval(Y)}},[]);const _l=()=>{w(null),A(ho),u.default.removeItem("currentAvatar"),We(!1)},Hl=(0,a.useCallback)(()=>{g(m=>{const I=!m;return C({}),I})},[]),Ul=(0,a.useCallback)(m=>{C(I=>({...I,[m]:!I[m]}))},[]),Kl=(0,a.useCallback)(()=>{C({})},[]),Wl=(0,a.useCallback)(m=>{M(I=>I.includes(m)?I.filter(Y=>Y!==m):zr.length-I.length<=2?I:[...I,m])},[]),za=(()=>{const m=b?.showSeconds!==!1,I=b?.dateDisplayMode||"both",Y=b?.hour12===!0;try{const G={timeZone:z,hour12:Y};(I==="time"||I==="both")&&(G.hour="2-digit",G.minute="2-digit",m&&(G.second="2-digit")),(I==="date"||I==="both")&&(G.weekday="long",G.day="numeric",G.month="2-digit",G.year="numeric");const J=new Intl.DateTimeFormat("uk",G).formatToParts(y),Q=_t=>J.find(Ct=>Ct.type===_t)?.value||"",Ue=I==="time"||I==="both"?`${Q("hour")}:${Q("minute")}${m?":"+Q("second"):""}${Y&&Q("dayPeriod")?" "+Q("dayPeriod"):""}`:"",yt=I==="date"||I==="both"?`${Q("weekday")?Q("weekday").charAt(0).toUpperCase()+Q("weekday").slice(1):""}${Q("day")?`, ${Q("day")}.${Q("month")}.${Q("year")}`:""}`:"";return I==="both"?`${Ue} ${yt}`.trim():Ue||yt}catch{return`${String(y.getHours()).padStart(2,"0")}:${String(y.getMinutes()).padStart(2,"0")}${b?.showSeconds!==!1?`:${String(y.getSeconds()).padStart(2,"0")}`:""} ${y.toLocaleDateString("uk")}`}})(),Ao=bs(),jr=Qd();(0,a.useEffect)(()=>{!fn&&jr.pathname!=="/"&&Ao("/")},[fn,Ao,jr.pathname]);const ql=(m,I)=>{ee(Y=>{const G=[...Y],J=m+I;return J<0||J>=G.length||([G[m],G[J]]=[G[J],G[m]]),G})},Sr=(0,a.useCallback)(()=>X(!0),[]),Gl=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(ro,{heroDateString:za,onAddCity:wr,startAnimation:!t,user:b,checkWeatherDanger:rn,heroBg:k,setHeroBg:R,heroBg2:N,setHeroBg2:_,heroBg3:ge,setHeroBg3:ne,heroBg4:q,setHeroBg4:Z,isDarkMode:x,customHeroBgs:W,setCustomHeroBgs:U,heroBgMode:se,setHeroBgMode:Se,heroOverlayOpacity:fe,setHeroOverlayOpacity:tt,bgRatings:Ce,setBgRatings:ct,slideshowInterval:xe,setSlideshowInterval:He,slideshowTransition:$e,setSlideshowTransition:wt,filterCategory:vt,setFilterCategory:kt,heroBgZoom:Ze,setHeroBgZoom:xt,heroBgRotation:te,setHeroBgRotation:de,heroBgBlur:_e,setHeroBgBlur:ht,heroBgBlurType:T,heroBgPixelation:Tt,setHeroBgPixelation:Oe,setHeroBgBlurType:F,heroBgFocal1:Ee,setHeroBgFocal1:Ve,heroBgFocal2:ze,setHeroBgFocal2:nt,heroBgFocal3:ce,setHeroBgFocal3:jt,heroBgFocal4:mt,setHeroBgFocal4:at,heroBgPanEnabled:At,setHeroBgPanEnabled:Xe,heroBgPanSpeed:bt,setHeroBgPanSpeed:B,videoPlaybackSpeed:ae,setVideoPlaybackSpeed:ue,screenshots:$a,selectedTimezone:z,setSelectedTimezone:L,customHolidayName:re,isStickyBgMode:h,setCustomHolidayName:be})}),(0,e.jsx)(uo,{className:"weather-section",$isDarkMode:$.weather??x,$isStickyBgMode:h,$isHidden:D.includes("weather"),children:(0,e.jsx)(fo,{section:H.find(m=>m.key==="weather"),weatherCards:vn,heroDateString:za,isDarkMode:$.weather??x,isLocationEnabled:qt,handleRefreshCard:gn,handleDeleteCard:yr,handleRenameCard:vr,moveWeatherCard:kr,setIsLocationEnabled:ya,user:b,isAnyModalOpen:wa,onUpdateUser:w,setHeroBg:R,customHeroBgs:W,setCustomHeroBgs:U,handleOpenRegister:Sr,customHolidayName:re,isStickyBgMode:h,setCustomHolidayName:be,weatherCardLayout:Be,isWeatherDetailsOpen:cn,setIsWeatherDetailsOpen:Qe,selectedWeatherCard:Gt,setSelectedWeatherCard:un,setIsFsActive:bn,isStickyBgMode:h})})]}),Jl=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(ro,{heroDateString:za,onAddCity:wr,startAnimation:!t,user:b,isDarkMode:x,checkWeatherDanger:rn,heroBg:k,setHeroBg:R,heroBg2:N,setHeroBg2:_,heroBg3:ge,setHeroBg3:ne,heroBg4:q,setHeroBg4:Z,customHeroBgs:W,setCustomHeroBgs:U,heroBgMode:se,setHeroBgMode:Se,heroOverlayOpacity:fe,setHeroOverlayOpacity:tt,bgRatings:Ce,setBgRatings:ct,slideshowInterval:xe,setSlideshowInterval:He,slideshowTransition:$e,setSlideshowTransition:wt,filterCategory:vt,setFilterCategory:kt,heroBgZoom:Ze,setHeroBgZoom:xt,heroBgRotation:te,setHeroBgRotation:de,heroBgBlur:_e,setHeroBgBlur:ht,heroBgBlurType:T,heroBgPixelation:Tt,setHeroBgPixelation:Oe,setHeroBgBlurType:F,heroBgFocal1:Ee,setHeroBgFocal1:Ve,heroBgFocal2:ze,setHeroBgFocal2:nt,heroBgFocal3:ce,setHeroBgFocal3:jt,heroBgFocal4:mt,setHeroBgFocal4:at,heroBgPanEnabled:At,setHeroBgPanEnabled:Xe,heroBgPanSpeed:bt,setHeroBgPanSpeed:B,videoPlaybackSpeed:ae,setVideoPlaybackSpeed:ue,screenshots:$a,selectedTimezone:z,setSelectedTimezone:L,customHolidayName:re,isStickyBgMode:h,setCustomHolidayName:be})}),(0,e.jsx)("div",{className:"container",children:H.map(m=>m.key!=="hero"&&(0,e.jsx)(uo,{$isDarkMode:$[m.key]??x,$isStickyBgMode:h,$isHidden:D.includes(m.key),children:(0,e.jsx)(fo,{section:m,weatherCards:vn,isDarkMode:$[m.key]??x,isLocationEnabled:qt,handleRefreshCard:gn,handleDeleteCard:yr,handleRenameCard:vr,moveWeatherCard:kr,setIsLocationEnabled:ya,user:b,isAnyModalOpen:wa,onUpdateUser:w,setHeroBg:R,customHeroBgs:W,setCustomHeroBgs:U,handleOpenRegister:Sr,customHolidayName:re,isStickyBgMode:h,setCustomHolidayName:be,weatherCardLayout:Be,isWeatherDetailsOpen:cn,setIsWeatherDetailsOpen:Qe,selectedWeatherCard:Gt,setSelectedWeatherCard:un,heroDateString:za,setIsFsActive:bn,isStickyBgMode:h})},m.key))})]});return(0,e.jsxs)(Ap,{isDarkMode:x,children:[(0,e.jsx)(oh,{user:b}),(0,e.jsx)(wh,{$locked:Ft&&nn}),(0,e.jsx)(Dc,{isLoading:t,isFadingOut:r,randomPhrase:l.text&&(0,e.jsxs)(Lh,{$isNew:l.isNew,children:[l.text,an.map(m=>(0,e.jsx)($h,{$x:m.x,$y:m.y,$delay:m.delay,$isNew:l.isNew,children:"✧"},m.id))]})}),(0,e.jsx)(Sh,{$isDarkMode:x,$isStickyBgMode:h,children:(0,e.jsxs)("div",{className:"App",children:[(0,e.jsx)("audio",{ref:Je,onEnded:va,preload:"auto"}),(0,e.jsx)("audio",{ref:Yt,onEnded:va,preload:"auto"}),(0,e.jsx)("div",{className:"container",children:(0,e.jsx)(y0,{sfxVolume:hn,onOpenRegister:()=>X(!0),onOpenLogin:()=>Ke(!0),onOpenSettings:()=>We(!0),onOpenVip:()=>It(!0),onOpenShop:()=>ve(!0),onOpenAchievements:()=>Vt(!0),onOpenHelp:()=>ln(!0),onOpenInfo:()=>Dt(!0),onOpenOtherOptions:()=>oe(!0),onCloseInfo:()=>Dt(!1),isInfoOpen:ot,user:b,isDarkMode:x,toggleTheme:Hl,sectionThemes:$,hiddenSections:D,onToggleSectionVisibility:Wl,onToggleSectionTheme:Ul,onResetSectionThemes:Kl,currentAvatar:ut,onLogout:_l,siteSections:H,moveSiteSection:ql,resetSiteSections:()=>ee([...zr]),isRoutingMode:fn,setIsRoutingMode:wn,currentPath:jr.pathname.substring(1),loadingStrategy:Bt,onSetLoadingStrategy:Dn,setIsFsActive:bn,isStickyBgMode:h,setIsStickyBgMode:P})}),(0,e.jsx)("main",{children:(0,e.jsx)(a.Suspense,{fallback:null,children:(0,e.jsxs)(Jd,{children:[(0,e.jsx)(Ar,{path:"/",element:Jl}),H.map(m=>(0,e.jsx)(Ar,{path:`/${m.path}`,element:m.key==="weather"?Gl:(0,e.jsx)("div",{className:"container",style:{paddingTop:"40px",minHeight:"80vh"},children:m.key==="hero"?(0,e.jsx)(ro,{heroDateString:za,onAddCity:wr,startAnimation:!t,user:b,isDarkMode:$.hero??x,checkWeatherDanger:rn,heroBg:k,setHeroBg:R,heroBg2:N,setHeroBg2:_,heroBg3:ge,setHeroBg3:ne,heroBg4:q,setHeroBg4:Z,customHeroBgs:W,setCustomHeroBgs:U,heroBgMode:se,setHeroBgMode:Se,heroOverlayOpacity:fe,setHeroOverlayOpacity:tt,bgRatings:Ce,setBgRatings:ct,slideshowInterval:xe,setSlideshowInterval:He,slideshowTransition:$e,setSlideshowTransition:wt,filterCategory:vt,setFilterCategory:kt,heroBgZoom:Ze,setHeroBgZoom:xt,heroBgRotation:te,setHeroBgRotation:de,heroBgBlur:_e,setHeroBgBlur:ht,heroBgBlurType:T,heroBgPixelation:Tt,setHeroBgPixelation:Oe,heroBgFocal1:Ee,setHeroBgFocal1:Ve,heroBgFocal2:ze,setHeroBgFocal2:nt,heroBgFocal3:ce,setHeroBgFocal3:jt,heroBgFocal4:mt,setHeroBgFocal4:at,heroBgPanEnabled:At,setHeroBgPanEnabled:Xe,heroBgPanSpeed:bt,setHeroBgPanSpeed:B,videoPlaybackSpeed:ae,setVideoPlaybackSpeed:ue,screenshots:$a,selectedTimezone:z,setSelectedTimezone:L,customHolidayName:re,isStickyBgMode:h,setCustomHolidayName:be}):(0,e.jsx)(uo,{$isDarkMode:$[m.key]??x,$isStickyBgMode:h,$isHidden:!1,children:(0,e.jsx)(fo,{section:m,weatherCards:vn,isDarkMode:$[m.key]??x,isLocationEnabled:qt,handleRefreshCard:gn,handleDeleteCard:yr,handleRenameCard:vr,moveWeatherCard:kr,setIsLocationEnabled:ya,user:b,isAnyModalOpen:wa,onUpdateUser:w,setHeroBg:R,customHeroBgs:W,setCustomHeroBgs:U,handleOpenRegister:Sr,customHolidayName:re,isStickyBgMode:h,setCustomHolidayName:be,isWeatherDetailsOpen:cn,setIsWeatherDetailsOpen:Qe,selectedWeatherCard:Gt,setSelectedWeatherCard:un,setIsFsActive:bn,isStickyBgMode:h})})})},m.key)),(0,e.jsx)(Ar,{path:"*",element:(0,e.jsx)(Hu,{})})]})})}),(0,e.jsxs)(a.Suspense,{fallback:null,children:[E&&(0,e.jsx)(xh,{onClose:()=>X(!1),onRegister:m=>{w(m),X(!1)},availableAvatars:ds,isDarkMode:x}),ie&&(0,e.jsx)(hh,{onClose:()=>Ke(!1),onLogin:m=>{w(m),Ke(!1)}}),ke&&b&&(0,e.jsx)(mh,{onClose:()=>We(!1),user:b,availableAvatars:ds,onUpdate:w,weatherCardLayout:Be,onUpdateLayout:Rt,showUpdateTimer:Fe,setShowUpdateTimer:Kt,isDarkMode:x}),rt&&(0,e.jsx)(VipModal,{onClose:()=>It(!1)}),Ut&&(0,e.jsx)(uh,{onClose:()=>ve(!1),hasVip:!!b}),Mt&&(0,e.jsx)(ph,{onClose:()=>Vt(!1),isDarkMode:x}),Et&&(0,e.jsx)(co,{isDarkMode:x,isOpen:Et,onClose:()=>ln(!1)}),p&&(0,e.jsx)(co,{isOpen:p,onClose:()=>O(!1)}),ot&&(0,e.jsx)(co,{onClose:()=>Dt(!1)}),(0,e.jsx)(bh,{isOpen:cn,onClose:()=>Qe(!1),card:Gt,isDarkMode:x}),Le&&(0,e.jsx)(yh,{sfxVolume:hn,setSfxVolume:Gn,bgAudioRef:Je,bgAudioRef2:Yt,onClose:()=>oe(!1),bgMusicEnabled:ye,setBgMusicEnabled:qe,autoMuteBgMusic:le,setAutoMuteBgMusic:Te,lockFiltersInFs:nn,setLockFiltersInFs:Bn,bgMusicSource:we,setBgMusicSource:Pe,customBgTracks:zn,setCustomBgTracks:mn,bgMusicVolume:en,setBgMusicVolume:qn,bgMusicSpeed:tn,setBgMusicSpeed:$n,bgMusicMode:Ge,setBgMusicMode:dn,bgMusicShuffle:it,setBgMusicShuffle:xn,libraryBgSettings:zt,setLibraryBgSettings:Ln,activeBgTrackId:Wt,setActiveBgTrackId:Mn,onResetBgPosition:St,isDarkMode:x})]}),Fe&&(0,e.jsx)(sh,{content:"Налаштування вигляду",isDarkMode:x,children:(0,e.jsxs)(zh,{$isDarkMode:x,onClick:Bl,"aria-label":"Показує час оновлення картки теперішньої погоди і ШІ прогноз.",children:["Оновлення погоди через: ",Math.floor(Sn/60),":",(Sn%60).toString().padStart(2,"0")]})}),(0,e.jsx)(qx,{isStickyBgMode:h})]})}),Ie&&(0,e.jsx)(rp,{isDarkMode:x,endTime:Zt,message:pt})]})};function Eh(){return(0,e.jsx)(pu,{children:(0,e.jsx)(Rh,{})})}window.location.hostname==="www.stuxia.com"&&window.location.replace("https://stuxia.com"+window.location.pathname+window.location.search);window.addEventListener("error",t=>{if(t.message.includes("AbortError")||t.message.includes("aborted"))return t.preventDefault(),!1});window.addEventListener("unhandledrejection",t=>{if(t.reason?.name==="AbortError"||t.reason?.message?.includes("aborted"))return t.preventDefault(),!1});lc.createRoot(document.getElementById("root")).render((0,e.jsx)(Dd,{store:uc,children:(0,e.jsxs)(Zl,{children:[(0,e.jsx)(Eh,{}),(0,e.jsx)(wd,{position:"bottom-right",reverseOrder:!1})]})}));export{js as C,hr as D,Ec as E,br as S,Pc as T,ml as _,Ta as a,So as b,pp as c,yi as d,kn as f,go as g,Pa as h,j0 as i,up as l,Ra as m,Ll as n,Uh as o,Hh as p,k0 as r,fp as s,Pf as t,ip as u,gl as v,Oc as w,Fs as x,ul as y};

//# sourceMappingURL=index-D2ItKjt5.js.map