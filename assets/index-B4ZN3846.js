const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Prison-DIFkMX0Q.js","assets/rolldown-runtime-BNNRdYrd.js","assets/vendor-react-DiGU5HTv.js","assets/fog--rpOGuZY.js","assets/Aihelp-BLw113Lp.js","assets/FanArt-B1IhQm8x.js","assets/ShopModal-h7X_KSVK.js","assets/AchivmentsModal-DWljNu51.js","assets/ClimateMap-BiWTXuYp.js","assets/MusicPhoto-BfVrpkJ8.js","assets/songAiKnowledge-DCl-r1aV.js","assets/Modal-D9gD_S-Y.js","assets/KatSceneModal-CyRn44RW.js","assets/LoginModal-aEfh6ui0.js","assets/UserSettingsModal-Cd91gPuV.js","assets/VipModal-Dcf2ADrt.js","assets/WeatherDetailsModal-CCxeL8t0.js","assets/OtherOptionsModal-NjgQMAfG.js"])))=>i.map(i=>d[i]);
import{o as $a,r as rs}from"./rolldown-runtime-BNNRdYrd.js";import{$n as Be,$t as Va,A as Xl,An as Ql,At as ja,B as or,Bn as qt,Bt as ed,Cn as td,Ct as Uo,D as hr,Dn as nd,Dt as ad,E as rd,En as od,Et as id,F as sd,Fn as ld,Gn as uo,Gt as xr,Hn as dd,Ht as cd,I as Ba,In as ud,It as pd,Jn as fd,Jt as gd,K as Ma,Kn as lr,Kt as md,L as Ko,Ln as hd,Lt as os,M as xd,Mn as is,Mt as qo,N as bd,Nn as Wo,Nt as yd,O as wd,On as dn,Ot as Go,Pn as br,Pt as vd,Q as kd,Qn as ss,Qt as _a,R as Ha,Rn as Te,Rt as Jo,Sn as jd,St as Sd,Tn as Cd,Tt as Td,U as Ad,Un as Id,Ut as Dd,V as Yo,Vn as i,Vt as Md,Wn as zd,X as Zo,Xn as Rd,Xt as Ld,Y as Xo,Yn as yr,Z as zn,Zn as $d,Zt as Ed,_n as Fd,_t as Yn,an as ls,bn as Pd,bt as Zn,cn as Nd,ct as Xn,dn as Od,dt as Qn,en as Vd,er as Bd,et as _d,fn as Hd,ft as ea,gn as po,gt as ta,hn as ds,ht as na,in as Ud,it as Kd,j as Qo,jn as qd,k as ka,kn as rr,kt as Wd,ln as Gd,lt as aa,mt as ra,nn as Jd,nr as Yd,on as Zd,ot as Xd,pt as oa,q as Ua,qn as Qd,qt as ec,rn as cs,rr as tc,sn as nc,st as ia,tn as ei,tr as ac,tt as rc,un as oc,ut as sa,vn as xa,vt as la,wn as ic,wt as sc,xn as lc,xt as dc,yn as cc,yt as da,zn as uc,zt as Sa}from"./vendor-react-DiGU5HTv.js";import{t as fo}from"./fog--rpOGuZY.js";import{t as us}from"./texts-Cw4jglIa.js";import{t as ir}from"./songAiKnowledge-DCl-r1aV.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();var e=tc(),a=$a(Yd()),pc=$a(Bd()),ps=Id({name:"calendar",initialState:{customDays:[]},reducers:{addCustomDay:(t,n)=>{const{id:r,date:c,time:l,reason:s,duration:y,durationUnit:p,cardId:m}=n.payload;t.customDays.push({id:r||Date.now(),date:c,time:l||"00:00",reason:s,duration:y||1,durationUnit:p||"hours",cardId:m||"all"})},removeCustomDay:(t,n)=>{t.customDays=t.customDays.filter(r=>r.id!==n.payload)},updateCustomDay:(t,n)=>{const{date:r,reason:c}=n.payload,l=t.customDays.find(s=>s.date===r);l&&(l.reason=c)},setCustomDays:(t,n)=>{t.customDays=n.payload}}}),{addCustomDay:fs,removeCustomDay:fc,updateCustomDay:$h,setCustomDays:Eh}=ps.actions,gc=ps.reducer,mc=dd({reducer:{calendar:gc}}),u=$a(hd()),sr="/assets/fogtwo--KsskB7I.webp",hc=300,ti=["Цей сайт це реальна містика :)","Хочеш відсилку? :)","Індики схожі?","Доміно знає Д??????са?","Точно ні, він чорний, а Доміно чорно-білий :)"],ni=["Доміно бажає гарної погоди :)","Кейт бажає творчого натхнення","Сутінок - не найкраще, що можете побачити...","Драконяче видання...","Марта - і картини...","Відлуння порожнечі","Де він? Хто він?","Це не те, що хотів .......","??? - Я знаю його","Він скоро повернеться"],xc=[{r:1,c:1,delay:"0s"},{r:1,c:2,delay:"0.1s"},{r:1,c:3,delay:"0.2s"},{r:2,c:3,delay:"0.3s"},{r:3,c:3,delay:"0.4s"},{r:3,c:2,delay:"0.5s"},{r:3,c:1,delay:"0.6s"},{r:2,c:1,delay:"0.7s"}],bc=Te`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,yc=Te`
  0% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
  100% { opacity: 1; }
`,wc=i.div`
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
`,vc=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,kc=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  animation: ${bc} 0.8s ease-out forwards;
`,jc=i.img`
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
`,Sc=i.div`
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
`,Cc=i.div`
  margin-top: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  width: 100%;
`,Tc=i.div`
  position: absolute;
  top: -9px;
  left: -7px;
  z-index: 3;
  color: #fff;
  text-align: left;
`,Ac=i.p`
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 10px;
  opacity: 0.9;
  margin: 0;
  font-family: "Inter", sans-serif;
`,Ic=i.div`
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
`,Dc=i.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`,Mc=i.div`
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
`,zc=i.span`
  font-size: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: right;
  min-width: 170px;
`,Rc=i.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`,Lc=i.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${yc} 0.8s infinite linear;
  grid-row: ${t=>t.$r};
  grid-column: ${t=>t.$c};
  animation-delay: ${t=>t.$delay};
`;function $c({isLoading:t,isFadingOut:n,randomPhrase:r}){const[c,l]=(0,a.useState)("Готую новини");return(0,a.useEffect)(()=>{const s=new Image;s.src=sr},[]),(0,a.useEffect)(()=>{if(t){let s=0;const y=setInterval(()=>{s<ti.length-1&&(s++,l(ti[s]))},hc),p=ni[Math.floor(Math.random()*ni.length)],m=setTimeout(()=>{clearInterval(y),l(p)},2e3);return()=>{clearInterval(y),clearTimeout(m)}}},[t]),t?(0,e.jsxs)(wc,{$isFadingOut:n,children:[(0,e.jsx)(Tc,{children:(0,e.jsx)(Ac,{children:"v.1.0.0 | Я в Конотопі :)"})}),(0,e.jsxs)(Mc,{children:[(0,e.jsx)(zc,{children:c}),(0,e.jsx)(Rc,{children:xc.map((s,y)=>(0,e.jsx)(Lc,{$r:s.r,$c:s.c,$delay:s.delay},y))})]}),(0,e.jsxs)(vc,{children:[(0,e.jsx)(kc,{children:(0,e.jsx)(jc,{src:sr,$active:!0,alt:"Loading..."})}),(0,e.jsx)(Sc,{children:(0,e.jsxs)(Cc,{children:[(0,e.jsx)(Ic,{children:r}),(0,e.jsx)(Dc,{children:"2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist"})]})})]})]}):null}var Ec=$a(Fd()),Fc=(t,n=0)=>{if(!t)return n===0?"Сьогодні":`День ${n+1}`;const r=String(t).trim(),c=new Date,l=new Date(c);l.setHours(0,0,0,0);const[s,y]=r.split(".").map(p=>Number(p));if(s&&y){const p=new Date(c.getFullYear(),y-1,s),m=Math.round((p-l)/864e5);return m===0?`${r} (Сьогодні)`:m===1?`${r} (Завтра)`:m===2?`${r} (Післязавтра)`:`${r} (${p.toLocaleDateString("uk",{weekday:"short"})})`}return r},Pc=(t=[])=>{if(!Array.isArray(t)||t.length===0)return[];const n=[],r=new Map;return t.forEach((c,l)=>{const s=c?.dateLabel||c?.date||"today";r.has(s)||(r.set(s,[]),n.push({label:s,title:Fc(s,n.length),items:[]})),r.get(s).push(c)}),n.forEach(c=>{c.items=r.get(c.label)||[]}),n},Nc="/assets/prison-BANVSR28.mp4",Oc="/assets/hiils-CwRk4ZgD.webp",Vc="/assets/studi-DHg_t1il.webp",Bc="/assets/penny-BUV12nwB.webp",_c="/assets/nicerone-DeI1ZC5d.mp4",gs="/assets/vip-soloveyko-CtAoYgAY.webp",ms="/assets/asium-B_nRztWf.webp",hs="/assets/horse-DCbtELLC.webp",xs="/assets/theorytwo-omR0ZjVQ.webp",Hc="/assets/theorytwo-COG3p5Yj.mp4",Uc="/assets/theory-DnqpX73C.mp4",bs="/assets/fingerdash-DEsolxme.webp",ys="/assets/electrodynamix-lzudItwJ.webp",La="/assets/sirenhead-Dh1KPUjM.webp",Kc="/assets/backrooms-C_N8r861.webp",ws="/assets/vip-desert-Bmmk9Qts.webp",vs="/assets/deserttwo-Bpbh89pi.webp",ks="/assets/desertthree-B1yTfM-X.webp",js="/assets/desertfour-KOc6byy4.webp",Ss="/assets/desertone-CTJSVy53.webp",Cs="/assets/mechannic-B4qHsIdf.webp",Ts="/assets/clubstep-BGgJ_grP.webp",dr="/assets/ultra-vip-turkeys--dWdDrjz.webp",As="/assets/horsethree-CLZvl5e7.webp",qc="/assets/horsetwo-BRmdGHMz.webp",Is="/assets/chess-DE0SQ6bR.webp",Wc="/assets/aurorahills-DmZEChm7.webp",Ds="/assets/turkeytwo-DEtUfl4n.webp",Ms="/assets/turkeysthree-DWkC9U9r.webp",zs="/assets/turkeysfour-B1peYkuR.webp",Rs="/assets/turkeysfive-B9fezKPV.webp",Ls="/assets/turkeyssix-C74RJO0D.webp",$s="/assets/turkeysone-ByUfHIKS.webp",Es="/assets/turkeysseven-C_bOyIyj.webp",Fs="/assets/vip-forest-SaiZLRX8.webp",Ps="/assets/asiumone-DdULW5D8.webp",Ns="/assets/asiuntwo-B0HnOhGB.webp",Os="/assets/asiumthree-BHhNiv03.webp",Vs="/assets/asiumfour-CleyN5g2.webp",Bs="/assets/asiumfive-DSDp7YH4.webp",_s="/assets/asiumsix-D7UysOUw.webp",Hs="/assets/asiumeleven-BHmk7Yt4.webp",Us="/assets/asiumtwelve-roupkWdg.webp",Ks="/assets/asiumseven-DFmFFiYc.webp",qs="/assets/swamptwo-8_PhuQBm.webp",Ws="/assets/swampthree-D1x5tDiJ.webp",Gs="/assets/swampfour-B10ujwoY.webp",Js="/assets/swampfive-DKN2UHLz.webp",Ys="/assets/swampsix-DzD2OZh6.webp",Zs="/assets/seampseven-aw1KjEtN.webp",Xs="/assets/swampeight-Cxl2rbCa.webp",Qs="/assets/swampnine-BGdJXMuv.webp",el="/assets/theory-BgbF1Vw-.webp",tl="/assets/deadlocked-D6Jzwofg.webp",nl="/assets/horrortwo-D8aEwkY_.webp",al="/assets/horrorthree-BFEovIOX.webp",rl="/assets/horrorfour-DmgPluVF.webp",ol="/assets/horrorfive-DTRJJLmu.webp",go="/assets/horror-Bwtso3fm.webp",il="/assets/horrorsix-FrdmNrLk.webp",sl="/assets/horrorseven-DJ2UueTc.webp",ll="/assets/horroreight-N8Azt2Lm.webp",mo="/assets/vip-dinofroz-C4DCnog6.webp",dl="/assets/dinofrozthree-h3bRBpyn.webp",cl="/assets/dinofrozfour-DkpUmpno.webp",ul="/assets/dinofrozfive-vsWApnpV.webp",pl="/assets/dinofrozsix-B2cUeZYK.webp",fl="/assets/dinofrozseven-r29p04F4.webp",gl="/assets/dinofrozeight-D_wKW6F3.webp",ho="/assets/vip-dragons-B9_gfJz_.webp",ml="/assets/dinofroznine-Btp0fI_a.webp",Gc="/assets/nicerone-w6vAmYap.webp",hl="/assets/village-DaGZZK5u.webp",Jc="/assets/sevendays-D9rpKRGr.mp4",Yc="/assets/vladone-D0GzLk2B.mp4",Zc="/assets/domino-B2kX1s2n.webp",Xc="/assets/shop-CjzVirJw.mp4",xl="/assets/faded-CfnCTW9-.webp",Qc="/assets/faded-B0cqhRG7.mp4",bl="/assets/miaandme-BLF13Fck.webp",eu="/assets/fire-2pNCSf4p.webp",tu="/assets/clubstep-B4vGowaQ.mp4",nu="/assets/titanic-psUEvksY.webp",au="/assets/smit-Blk03HJN.webp",ru="/assets/electrodynamix-Pgbof-vP.mp4",ou="/assets/volcano-BtJBGKCf.mp4",iu="/assets/whiteloud-LRq9ym10.mp4",su="/assets/wall-BZpLy1oe.webp",lu="/assets/slivkishow-CvTTxjt1.mp4",du="/assets/days-BYTNHXwz.mp4",ro="/assets/dinofroz-N6zhVqvn.mp4",cu="https://raw.githubusercontent.com/TheTurkeyProgramist/stuxia/main/fog.mp4",za=[{src:La,name:"Щось не так...",category:"Хоррор",author:"TheTurkeyStudio",description:"Навіть ті хто не знають його, починають розуміти ця вишка з сиренами, на така вже вже й не рухома..."},{src:us,name:"Єгипетські ієрогліфи",category:"Локації",author:"TheTurkeyStudio",description:`Ця картина має глибоку, містичну та інтроспективну атмосферу. Вона ідеально резонує з певним психологічним профілем і складом особистості:
Глибока інтроверсія та рефлексія: Цей образ обирають люди, які відновлюють енергію в тиші та самотності. Вони схильні до глибокого аналізу власних думок і почуттів, вважаючи за краще спостерігати за світом збоку, аніж бути в центрі уваги.
Філософський склад розуму: Символіка ієрогліфів символізує складність буття. Людина з таким характером не лякається невідомості — її приваблюють таємниці, пошук прихованих сенсів та роздуми над глобальними питаннями.`},{src:du,name:"Крижана катастрофа",category:"Песимізм",author:"20th Century Fox",source:"Фільм 'Післязавтра'",start:0,end:300,description:"Тут зображено наслідки людської жадібності та безвідповідальності перед природою. Люди, які обирають цей фон, часто мають песимістичний погляд на світ і схильні до глибоких роздумів про майбутнє планети. Вони можуть відчувати тривогу щодо змін клімату та екологічних катастроф, що відображає їхню турботу про навколишнє середовище та бажання знайти рішення для збереження природи."},{src:fo,name:"Туманний ліс",category:"Хоррор",author:"TheTurkeyStudio",description:"Це стартовий фон для всіх користувачів :) Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:cu,name:"Туманний ліс (Відео)",category:"Хоррор",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:xl,name:"Курорт",category:"Фентезі",author:"TheTurkeyStudio",description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:Qc,name:"Курорт (Відео)",category:"Фентезі",author:"TheTurkeyStudio",start:0,end:300,description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:lu,name:"Політ Кукі у стратосферу",category:"Стихія",author:"SlivkiShow",start:0,end:78,description:"Тут показано цікавий політ на висоту 30 000 метрів! Приємного перегляду небесних краєвидів!"},{src:Vc,name:"Художня студія",category:"Локації",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу творчості та натхнення. Люди, які обирають його, часто мають схильність до мистецтва та креативного самовираження. Вони можуть бути відкритими до нових ідей та люблять експериментувати з різними формами мистецтва, що відображає їхню творчу натуру."},{src:ru,name:"Гроза (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:7,description:"Цей фон створює атмосферу енергії та динаміки. Люди, які обирають його, часто мають схильність до активного способу життя та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:Oc,name:"Гори",category:"Стихія",author:"TheTurkeyStudio",description:`По секрету, я планував зробити його фоном сайту у старих версіях, до 'Туманного лісу'. 
Цей фон створює атмосферу величі та спокою. Люди, які обирають його, часто мають схильність до природи та люблять відчувати себе частиною великого світу. Вони можуть бути інтроспективними та цінувати моменти тиші та роздумів, що відображає їхню глибоку натуру.`},{src:eu,name:"Вулкан",category:"Стихія",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:ou,name:"Вулкан (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:Wc,name:"Аврора Гіллс",category:"Стихія",author:"NovaSoft Interactive",description:"Цей фон взятий з Hidden Object Adventure гри 'Aurora Hills'. Сюжет гри: Ви рейнджер парку у скромному містечку, але люди починають зникати безвісти. Посилання на гру: https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk"},{src:Xc,name:"Магазин Доміно (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Затишна та динамічна атмосфера міського життя. Цей фон підійде тим, хто шукає натхнення у звичайних щоденних моментах, цінує теплі міські локації та комфортний ритм сучасності."},{src:Nc,name:"Кришталева в'язниця",category:"Хоррор",author:"TheTurkeyStudio",start:0,end:300,description:"Загадковий і холодний фон, що випромінює застережливу красу та напругу. Він приваблює шанувальників гостросюжетних історій, психологічних загадок та атмосфери таємничої небезпеки."},{src:Zc,name:"Риболов",category:"Стихія",author:"TheTurkeyStudio",description:"Символ терпіння, витримки та спокійної спостережливості. Цей фон обирають люди, які цінують усамітнення на природі, вміють вичікувати правильний момент та шукають відпочинку від щоденної метушні."},{src:su,name:"Стиль лофт",category:"Локації",author:"TheTurkeyStudio",description:`Сучасний, лаконічний і стильний інтер'єр із духом свободи. Цей фон відображає прагнення до простору, практичності та естетики урбанізму, приваблюючи людей із витонченим смаком.
 Хоча це просто купа цегли :)`},{src:iu,name:"Білий шум",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Мінімалістичний фон для повного занурення та концентрації. Він створює нейтральний простір без зайвих подразників, допомагаючи відключитися від зовнішнього хаосу та зосередитися на власних думках."},{src:_c,name:"Імператор Ніцерон (Відео)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:`Цей фон символізує, жагу до небезпек та пригод, і цей дракон вас не зупинить! 
Через нього, мені прийшла в голову ідея, з сайтом погоди у якому купа відсилок ;) Це секретик :) `},{src:Yc,name:"Генерал Влад (Відео, сезон 1)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:"Головні герої в пастці…. Цей фон символізує жагу до свободи, і командної роботи(герої шукають план втечі…, а дракони, хочуть не допустити цього…)"},{src:hl,name:"Древніус і Даркніс",category:"Дракони",author:"highbrow",source:"Dragon Village 3",description:`Картина, прекрасна. Ідеальна для тих хто любить шукати плюси і мінуси. 
Лінк на гру:`},{src:mo,name:"Імператор Ніцерон",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:ho,name:"Генерал Влад (2 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:dl,name:"Прев'ю мультфільму",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:cl,name:"Драгемон (2 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:ul,name:"Мелтстон",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:pl,name:"Дракони (Епізод)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:fl,name:"Генерал Влад (1 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:gl,name:"Генерал Трік (1 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:ml,name:"Погляд у Рокфроз",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:bs,name:"Замок Ніцерона",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Gc,name:"Іще варіант",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:hs,name:"Кінь",category:"Стихія",author:"Генерація ШІ(Gemini)"},{src:As,name:"Лицар",category:"Стихія",author:"Генерація ШІ(Gemini)"},{src:dr,name:"Індичка Кейт",category:"Стихія",author:"TheTurkeyStudio"},{src:$s,name:"Мале бундюче стадо",category:"Стихія",author:"TheTurkeyStudio"},{src:Ds,name:"Малий, але впевнений",category:"Стихія",author:"TheTurkeyStudio"},{src:Ms,name:"Дивись мені в очі!",category:"Стихія",author:"TheTurkeyStudio"},{src:zs,name:"І знову про індиків",category:"Стихія",author:"TheTurkeyStudio"},{src:Rs,name:"2 Індики",category:"Стихія",author:"TheTurkeyStudio"},{src:Ls,name:"Ми вже виросли!",category:"Стихія",author:"TheTurkeyStudio"},{src:Es,name:"Шукаю друга",category:"Стихія",author:"TheTurkeyStudio"},{src:gs,name:"Соловейко",category:"Стихія",author:"TheTurkeyStudio"},{src:ws,name:"Загадки пустелі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Атмосфера безкрайніх просторів та вічних таємниць. Цей фон обирають люди, схильні до самоспостереження, які вміють бачити красу в мінімалізмі й шукають відповіді на глибокі життєві питання в тиші."},{src:Kc,name:"Нескінченний коридор",category:"Хоррор",author:"TheTurkeyStudio",description:"Знайомий, але глибоко тривожний образ 'місця-порогу'. Цей фон викликає ефект 'ценонопсії' — відчуття моторошної порожнечі в місці, яке зазвичай повне людей. Симетрія заспокоює, але ледь помітний силует у темряві змушує постійно перевіряти, чи ви дійсно тут одні. Ідеально для тих, хто любить гострі відчуття та психологічні загадки. Викликає вряжання, ніби це бекрумс... Навіть мені і спокійно і тривожно дивитись на це..."},{src:Ss,name:"Кораблі у пустелі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Сюрреалістичний та заворожуючий образ піщаних морів. Він відображає відчуття плину часу, замисленість та схильність шукати неординарні сенси там, де інші бачать лише пустку."},{src:vs,name:"Пустельні міражі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Образ ілюзій, мрій та вислизаючої краси. Цей фон пасує мрійливим натурам із багатою уявою, які прагнуть вийти за межі повсякденної реальності та відшукати власну істину."},{src:ks,name:"Кактуси",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Символ витривалості, непохитності та життєвої сили. Цей фон обирають люди з міцним внутрішнім стержнем, які вміють зберігати оптимізм і квітнути навіть у найсуворіших обставинах."},{src:js,name:"Піраміда",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Символ монументальності, стабільності та стародавньої мудрості. Цей образ підходить тим, хто цінує структуру, прагне до високих цілей та надихається величчю історії."},{src:Qs,name:"Озеро волі",category:"Локації",author:"TheTurkeyStudio",description:"Тиха та освіжаюча локація, що випромінює спокій та гармонію. Цей фон підійде тим, хто прагне емоційного перезавантаження, цінує внутрішню свободу та відчуття чистоти."},{src:qs,name:"Записка",category:"Локації",author:"TheTurkeyStudio",description:"Атмосферний та інтимний сюжет, оповитий таємницею. Шанувальники цього фону зазвичай уважні до деталей, схильні до ностальгії та цінують глибокі особисті історії."},{src:Hs,name:"Зимовий ліс",category:"Локації",author:"TheTurkeyStudio",description:"Атмосфера кришталевої тиші, свіжості та спокою. Цей фон обирають люди, які відновлюють сили у мовчазній споглядальності, цінують чистоту думок та затишок засніженої природи."},{src:Us,name:"Водоспад",category:"Локації",author:"TheTurkeyStudio",description:"Джерело безперервного руху, відновлення та природної енергії. Фон пасує тим, хто шукає натхнення у динаміці життя, цінує відчуття свіжості та прагне гармонійного розвитку."},{src:Fs,name:"Казковий ліс",category:"Фентезі",author:"TheTurkeyStudio",description:"Магічний простір, сповнений чарів та таємниць. Цей фон обирають мрійливі натури з багатою уявою, які вірять у дива, цінують казки та шукають натхнення у фентезійних світах."},{src:Ps,name:"Під водою",category:"Фентезі",author:"TheTurkeyStudio",description:"Глибока, заспокійлива та таємнича атмосфера підводного царства. Пасує людям, які цінують тишу, плавність життя та прагнуть досліджувати приховані глибини власного внутрішнього світу."},{src:Ns,name:"Поле і сакури",category:"Фентезі",author:"TheTurkeyStudio",description:"Ніжний та естетичний пейзаж, що випромінює гармонію, цвітіння та весняне оновлення. Його обирають романтичні натури, які цінують витончену красу моменту й естетику східної культури."},{src:Os,name:"Печера",category:"Фентезі",author:"TheTurkeyStudio",description:"Потаємне та захищене місце, сповнене прадавніх загадок. Підходить для допитливих інтровертів, які цінують відчуття затишку, безпеки та люблять відкривати приховані таємниці."},{src:Vs,name:"Річка з лави",category:"Фентезі",author:"TheTurkeyStudio",description:"Палка, експресивна та стихійна локація. Відображає внутрішній вогонь, сильну енергетику, рішучість та сміливість долати будь-які перешкоди на своєму шляху."},{src:Bs,name:"Спуск з гори",category:"Фентезі",author:"TheTurkeyStudio",description:"Захоплюючий краєвид та відчуття руху вперед. Цей фон приваблює цілеспрямованих людей, цінителів пригод та тих, хто любить долати нові вершини й насолоджуватися результатом."},{src:_s,name:"Скарбниця + Відсилки",category:"Фентезі",author:"TheTurkeyStudio",description:"Атмосфера багатства, секретів та численних великодок. Ідеально підходить для допитливих та уважних глядачів, які люблять помічати дрібні деталі та розгадувати підтексти."},{src:Ks,name:"Японський балкон",category:"Фентезі",author:"TheTurkeyStudio",description:"Затишне та заспокійливе місце з гарним краєвидом. Створює відчуття мовчазного спокою, вечірньої рефлексії та приємної гармонії з навколишнім світом."},{src:ms,name:"Японський храм",category:"Фентезі",author:"TheTurkeyStudio",description:"Оселя східної мудрості, медитативності та духовної рівноваги. Цей фон обирають люди, які прагнуть знайти внутрішній баланс, цінують традиції та спокійне споглядання."},{src:bl,name:"Міа та я",category:"Фентезі",author:"Studio 100 Media, Lucky Punch, March Ent.",source:"м/с Mia and Me",description:`Цей яскравий та казковий кадр із Мією та Лірією(ім'я може відрізнятись у різних мовах мультсеріалу) у яскраво-рожевих тонах розкриває ніжний, мрійливий та натхненний психотип:
Яскрава фантазія та творче мислення: Цей образ обирають люди, які живуть багатим внутрішнім світом, люблять казкові всесвіти, вірять у дива та прагнуть додавати барв у сіру буденність.
Емпатія та гармонія з природою: Близькість до чарівних істот і казкових світів відображає добре серце, здатність глибоко співчувати та цінувати щиру дружбу.
Віра у власні перетворення: Сюжет про перехід між реальністю та магічним світом резонує з тими, хто любить змінюватися на краще, шукає свій шлях і не боїться довіряти своїй інтуїції.`},{src:go,name:"Бійцівська собака",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:nl,name:"Будинок з пастками",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:al,name:"Підвал",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:rl,name:"Город зла",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:ol,name:"Зіграймо!",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:il,name:"Втеча",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Jc,name:"Касета, що вбиває",category:"Хоррор",author:"Dreamworks",source:"Фільм 'Дзвінок'",start:0,description:`Цей відеоматеріал має напружену, похмуру та містичну атмосферу, що тримає в постійному психологічному напруженні. Він ідеально резонує з певним психологічним профілем і складом особистості:
Жага до розгадування таємниць і подолання страху: Цей образ обирають люди, яких приваблює психологічна напруга, психологічний трилер та темна естетика. Вони володіють внутрішньою стійкістю та цікавістю, що змушують їх досліджувати складні й лячні теми, долати власні фобії та йти до кінця в пошуках прихованої істини.
Холодний аналітичний розум у кризових ситуаціях: Ситуація жорсткого цейтнолету (відлік семи днів) вимагає максимальної концентрації, холоднокровності та логіки. Людина з таким складом характеру не піддається сліпій паніці перед обличчям невідомого чи невідворотного — вона здатна зберігати тверезість мислення, структурувати хаос навколо себе та рішуче діяти в критичних умовах.`,end:300},{src:sl,name:"Далі невідомо...",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:ll,name:"Втеча (фінал)",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Gs,name:"Матка павуків",category:"Хоррор",author:"TheTurkeyStudio"},{src:Js,name:"Злі духи",category:"Хоррор",author:"TheTurkeyStudio"},{src:Zs,name:"Туман, що дивиться",category:"Хоррор",author:"TheTurkeyStudio"},{src:Xs,name:"Болотний дракон",category:"Хоррор",author:"TheTurkeyStudio"},{src:Bc,name:"Пеннівайз",category:"Хоррор",author:""},{src:tl,name:"Болото мук",category:"Хоррор",author:"TheTurkeyStudio"},{src:xs,name:"Чорна діра",category:"Локації",author:"TheTurkeyStudio"},{src:Hc,name:"Чорна діра(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300},{src:ys,name:"Гроза",category:"Стихія",author:"TheTurkeyStudio"},{src:Cs,name:"Шестерні",category:"Локації",author:"TheTurkeyStudio"},{src:tu,name:"Невідоме місце(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300},{src:Ts,name:"Невідоме місце",category:"Локації",description:"",author:"TheTurkeyStudio"},{src:el,name:"Вогнище",category:"Локації",description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих.",author:"TheTurkeyStudio"},{src:Uc,name:"Вогнище(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих."},{src:Is,name:"Шахи",category:"Локації",author:"TheTurkeyStudio"},{src:Ws,name:"Підказка свічки",category:"Хоррор",author:"TheTurkeyStudio"},{src:Ys,name:"Печера кристалів",category:"Хоррор",author:"TheTurkeyStudio"},{src:nu,name:"Титанік",category:"Майбутне",author:"Paramount Pictures & 20th Century",source:"Фільм Titanic (1997)",description:"Цей фон відображає трагедію та величність історії, символізуючи людську амбіцію, крихкість життя та силу природи. Люди, які обирають цей фон, часто мають схильність до роздумів про минуле, цінують історичні події та шукають глибокі сенси у житті. Вони можуть відчувати емпатію до людських переживань та прагнуть зрозуміти уроки минулого для формування кращого майбутнього."},{src:au,name:"Агент Сміт",category:"Майбутне",author:"WarnerBrothers",source:"Фільм 'Матриця'",description:"Цей фон відображає складність та багатогранність сучасного світу, символізуючи боротьбу між реальністю та ілюзією. Люди, які обирають цей фон, часто мають схильність до критичного мислення, цікавляться технологіями та філософськими питаннями. Вони можуть відчувати потребу у глибокому аналізі навколишнього світу та прагнуть зрозуміти сутність людської природи."}],wr=t=>t==null?"—":["Північний","Північно-східний","Східний","Південно-східний","Південний","Південно-західний","Західний","Північно-західний"][Math.floor(t/45+.5)%8],uu=i.div`
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
`,pu=i.div`
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Ka=i.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,qa=i.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,ai=i.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,fu=({onClose:t,isDarkMode:n,currentCardId:r})=>{const c=uo(),l=lr(v=>v.calendar?.customDays||[]),[s,y]=(0,a.useState)(""),[p,m]=(0,a.useState)("00:00"),[f,g]=(0,a.useState)(""),[N,M]=(0,a.useState)(1),[z,R]=(0,a.useState)("hours"),[I,b]=(0,a.useState)(r),w=l.filter(v=>v.cardId==="all"||v.cardId===r),O=()=>{if(!s||!f)return alert("Заповніть дату та назву");if(f.length>30)return alert("Назва занадто довга (макс 30)");if(l.length>=3)return alert("Максимум 3 події на користувача");c(fs({id:Date.now(),date:s,time:p,reason:f,duration:Number(N),durationUnit:z,cardId:I})),y(""),g("")};return(0,e.jsx)(uu,{onClick:t,children:(0,e.jsxs)(pu,{$isDarkMode:n,onClick:v=>v.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:0},children:"Встановити дати"}),(0,e.jsxs)(Ka,{children:[(0,e.jsx)("label",{children:"Дата та Час початку"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(qa,{type:"date",$isDarkMode:n,value:s,onChange:v=>y(v.target.value)}),(0,e.jsx)(qa,{type:"time",$isDarkMode:n,value:p,onChange:v=>m(v.target.value)})]})]}),(0,e.jsxs)(Ka,{children:[(0,e.jsx)("label",{children:"Тривалість"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(qa,{type:"number",min:"1",max:"168",$isDarkMode:n,value:N,onChange:v=>M(v.target.value),style:{width:"60px"}}),(0,e.jsxs)(ai,{$isDarkMode:n,value:z,onChange:v=>R(v.target.value),children:[(0,e.jsx)("option",{value:"hours",children:"Годин"}),(0,e.jsx)("option",{value:"days",children:"Днів"})]})]})]}),(0,e.jsxs)(Ka,{children:[(0,e.jsx)("label",{children:"Застосувати для:"}),(0,e.jsxs)(ai,{$isDarkMode:n,value:I,onChange:v=>b(v.target.value),children:[(0,e.jsx)("option",{value:"all",children:"Всіх карток"}),(0,e.jsx)("option",{value:r,children:"Цієї картки"})]})]}),(0,e.jsxs)(Ka,{children:[(0,e.jsx)("label",{children:"Назва події (макс 30 симв.)"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(qa,{type:"text",placeholder:"Наприклад: Новий Рік",$isDarkMode:n,value:f,onChange:v=>g(v.target.value),maxLength:30,style:{flex:1}}),(0,e.jsx)("button",{onClick:O,style:{background:"#ffb36c",border:"none",borderRadius:"5px",padding:"0 15px",fontWeight:"bold",cursor:"pointer"},children:"+"})]})]}),(0,e.jsx)("hr",{style:{border:"0.5px solid #444",margin:"10px 0"}}),(0,e.jsx)("h4",{style:{margin:0},children:"Наступаючі / триваючі події"}),(0,e.jsxs)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[w.length===0&&(0,e.jsx)("p",{style:{fontSize:"12px",opacity:.7},children:"Немає подій"}),w.map(v=>(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:n?"#333":"#eee",padding:"8px",borderRadius:"5px",fontSize:"12px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:v.reason}),(0,e.jsx)("br",{}),v.date," ",v.time," (",v.duration," ",v.durationUnit==="days"?"дн":"год",")"]}),(0,e.jsx)("button",{onClick:()=>c(fc(v.id)),style:{background:"transparent",border:"none",color:"red",cursor:"pointer"},children:(0,e.jsx)(ds,{size:18})})]},v.id))]}),(0,e.jsx)("button",{onClick:t,style:{marginTop:"10px",background:"#444",color:"#fff",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"},children:"Закрити"})]})})},yl=(0,a.createContext)(),gu=({children:t})=>{const[n,r]=(0,a.useState)(!1),[c,l]=(0,a.useState)(0),[s,y]=(0,a.useState)(!1),p=(0,a.useRef)({}),m=(R,I)=>{I?p.current[R]=I:delete p.current[R]};(0,a.useEffect)(()=>{(async()=>{try{const b=new URLSearchParams(window.location.search);if(b.has("q")||b.has("city")||b.has("search")||b.has("query")||b.has("pohoda")||window.location.search.toLowerCase().includes("погода")){y(!1),r(!1);return}}catch{}const I=await u.default.getItem("domino_tutorial_prompt");(!I||Date.now()>I)&&setTimeout(()=>y(!0),2500)})()},[]);const f=async()=>{await u.default.setItem("domino_tutorial_prompt",Date.now()+2592e6),y(!1),r(!0),l(1)},g=async()=>{await u.default.setItem("domino_tutorial_prompt",Date.now()+6048e5),y(!1)},N=()=>{l(R=>R+1)},M=R=>{l(R)},z=()=>{r(!1),l(0)};return(0,e.jsx)(yl.Provider,{value:{isActive:n,setIsActive:r,currentStep:c,setCurrentStep:l,refs:p,registerRef:m,nextStep:N,jumpToStep:M,closeTutorial:z,showInitialModal:s,startTutorial:f,skipTutorialWeek:g},children:t})},Ea=()=>(0,a.useContext)(yl),mu=i.div`
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
`,qn=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)(mu,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})};Te`from { opacity: 0; } to { opacity: 1; }`;var hu=({customDays:t,cardId:n})=>{const[r,c]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{const s=setInterval(()=>c(new Date),1e3);return()=>clearInterval(s)},[]);const l=t.filter(s=>s.cardId==="all"||s.cardId===n);return l.length===0?null:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",padding:"10px",marginTop:"10px"},children:l.map(s=>{const y=new Date(`${s.date}T${s.time}:00`),p=new Date(y.getTime());s.durationUnit==="days"?p.setDate(p.getDate()+s.duration):p.setHours(p.getHours()+s.duration);const m=y-r,f=p-r;if(f<=0)return null;const g=N=>{const M=Math.floor(N/864e5),z=Math.floor(N/36e5%24),R=Math.floor(N/1e3/60%60),I=Math.floor(N/1e3%60);return`${M}дні:${String(z).padStart(2,"0")}:${String(R).padStart(2,"0")}:${String(I).padStart(2,"0")}`};return(0,e.jsxs)("div",{style:{background:"rgba(0,0,0,0.4)",color:"#00eaff",padding:"8px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:[s.reason,": ",m>0?`До події: ${g(m)}`:`Подія триватиме ще: ${g(f)}`]},s.id)})})},xu=Te`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`,bu=Te`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,yu=Te`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
`,wu=i.div`
  font-size: 22px;
  text-align: center;
  z-index: 100;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 24px;
  position: relative;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#000"};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
  ${t=>t.$isStickyBgMode?qt`
          background: ${t.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${t.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:qt`
          background: ${t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,vu=i.div`
  background: ${t=>t.$isDarkMode?"#0000009e":"#f5f5f5aa"};
  position: relative;
  color: ${t=>t.$isDarkMode?"#fff":"#000000"};
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  z-index: 100;
  max-width: 310px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${t=>t.$isMain?"1.5px solid #004cff":"1.5px solid #00fbff"};
  transition: all 0.3s ease;
`,ku=i.div`
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
`,ju=i.div`
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
`;i.div`
  width: ${t=>t.size||"150px"};
  height: ${t=>t.size||"20px"};
  border-radius: 10px;
  font-size: ${t=>t.fontSize||"13px"};
  color: #fff;
  display: inline-flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;var Su=i.div`
  gap: 4px;
  padding: 1px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${t=>t.$image?`linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${t.$image}) center/cover no-repeat`:"transparent"};
`,Cu=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,Tu=i.div`
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
`,Au=i.div`
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
`,Iu=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`,oo=i.div`
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
`,ri=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #ffb36c":"2px solid transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${oo}, ${wl} {
      opacity: 1;
    }
  }
`,oi=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`,ii=i.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`,ba=i.div`
  width: ${t=>typeof t.$width=="number"?`${t.$width}px`:t.$width};
  height: ${t=>t.$height||"200px"};
`,vr={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"28px",padding:0,border:"1px solid rgba(0, 190, 235, 0.7)",borderRadius:"4px",background:"rgba(0, 0, 0, 0.35)",color:"#00bfff",cursor:"pointer"},Du=i(dn.div)`
  background: rgba(39, 27, 50, 0.74);
  border: 1px solid rgba(138, 43, 226, 0.3);
  padding: 8px;
  font-size: 12px;
  line-height: 1.5;
  color: ${t=>t.$isDarkMode?"#efefff":"#4a4a4a"};
  width: 300px;
  height: 290px;
  overflow-y: auto;
  box-sizing: border-box;
`,si=i.div`
  background: rgba(39, 27, 50, 0.74);
  border: 1px solid rgba(138, 43, 226, 0.3);
  padding: 8px;
  font-size: 12px;
  color: ${t=>t.$isDarkMode?"#efefff":"#4a4a4a"};
  width: 300px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
`,Mu=i.div`
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.$isExpanded?"none":"5"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 11px;
  white-space: pre-line;
`,zu=i.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 0 0 0;
  text-decoration: underline;
`,Ru=i.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,Lu=i.textarea`
  width: 100%;
  height: 60px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #8a2be2;
  font-size: 11px;
  background: ${t=>t.$isDarkMode?"#1a1a1a":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  resize: vertical;
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
`;var $u=i.div`
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
  animation: ${t=>t.$isClosing?yu:bu} 0.2s
    ease-out forwards;
  overflow: hidden;
  max-height: 70vh;
`,Eu=({user:t,card:n,isDarkMode:r,isLocationEnabled:c,isExtremeTemp:l,isExtremeWind:s,isExtremeUV:y,index:p,totalCards:m,handleRefreshCard:f,handleDeleteCard:g,handleRenameCard:N,moveWeatherCard:M,setIsLocationEnabled:z,customHolidayName:R,currentTimeString:I,layout:b,onOpenDetails:w})=>{const O=uo(),{registerRef:v}=Ea?.()||{registerRef:()=>{}},$=lr(d=>d.calendar?.customDays||[]),[q,U]=(0,a.useState)(!1),[P,V]=(0,a.useState)(n.locationName),[fe,ae]=(0,a.useState)(null),[B,Z]=(0,a.useState)(""),[ie,ke]=(0,a.useState)(!1),[xe,Ze]=(0,a.useState)(!0),[Ae,at]=(0,a.useState)(""),[ge,Pe]=(0,a.useState)("concise"),[Ce,gt]=(0,a.useState)("friendly"),[mt,ht]=(0,a.useState)(!1),[We,ut]=(0,a.useState)(!1),[_e,st]=(0,a.useState)(!1),[vt,Re]=(0,a.useState)(0),[S,E]=(0,a.useState)(n.cityImage||""),[ee,de]=(0,a.useState)("wiki"),[Ee,Ie]=(0,a.useState)(!1),[De,Xe]=(0,a.useState)(!1),[ue,kt]=(0,a.useState)(!1),[xt,pt]=(0,a.useState)(!1);(0,a.useEffect)(()=>{u.default.getItem("gemini_api_key").then(x=>pt(!!x));const d=x=>pt(!!x.detail);return window.addEventListener("geminiKeyChanged",d),()=>window.removeEventListener("geminiKeyChanged",d)},[]);const He=()=>{kt(!0),setTimeout(()=>{Xe(!1),kt(!1)},180)},[Ge,bt]=(0,a.useState)(!1),[_,re]=(0,a.useState)({date:"",time:"",reason:"",duration:1,durationUnit:"hours",targetCard:"all"}),[ce,Me]=(0,a.useState)(!1),[Qe,oe]=(0,a.useState)("current"),[Le,Je]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!n.isMain)return;const d=()=>Me(!0),x=()=>Me(!1);return window.addEventListener("domino-open-weather-settings",d),window.addEventListener("domino-close-weather-settings",x),()=>{window.removeEventListener("domino-open-weather-settings",d),window.removeEventListener("domino-close-weather-settings",x)}},[n.isMain]);const[T,F]=(0,a.useState)(!0),[X,se]=(0,a.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),Ue=(0,a.useRef)(null),Tt=(0,a.useRef)(null),rt=(0,a.useRef)(null),Ke=(0,a.useRef)(null),At=(0,a.useRef)(null),Rt=(0,a.useRef)(null),[ne,ft]=(0,a.useState)(null),[jt,Ft]=(0,a.useState)(!1),[lt,dt]=(0,a.useState)({day:1,night:1,wind:1}),[Pt,Fe]=(0,a.useState)(12),Jt=d=>{dt(x=>({...x,[d]:x[d]===1?.3:1}))};(0,a.useEffect)(()=>{const d=()=>{if(!document.fullscreenElement){ft(null);return}requestAnimationFrame(()=>{const x=ne==="hourly"?rt.current:Rt.current;x?.resize(),x?.update("none")})};return document.addEventListener("fullscreenchange",d),()=>document.removeEventListener("fullscreenchange",d)},[ne]),(0,a.useEffect)(()=>{if(!ne)return;const d=setTimeout(()=>{const x=ne==="hourly"?rt.current:Rt.current;x?.resize(),x?.update("none")},100);return()=>clearTimeout(d)},[ne]);const hn=async(d,x)=>{if(document.fullscreenElement){await document.exitFullscreen();return}x.current?.requestFullscreen&&(ft(d),await x.current.requestFullscreen())},le=async(d,x=void 0,G=void 0)=>d.current?(0,Ec.default)(d.current,{backgroundColor:r?"#000000":"#f5f5f5",scale:2,useCORS:!0,allowTaint:!0,windowWidth:x||window.innerWidth,windowHeight:G||window.innerHeight}):null,we=async(d,x)=>{Ft(!0);const G=ne===d,A=x.current;if(!A)return Ft(!1),null;let C=null,L=null;if(!G){const Lt=A.getBoundingClientRect();C=A.cloneNode(!0);const $n=A.querySelectorAll("canvas"),Sn=C.querySelectorAll("canvas");$n.forEach((en,Cn)=>{Sn[Cn]&&Sn[Cn].getContext("2d").drawImage(en,0,0)}),C.style.position="fixed",C.style.top=`${Lt.top}px`,C.style.left=`${Lt.left}px`,C.style.width=`${Lt.width}px`,C.style.height=`${Lt.height}px`,C.style.margin="0",C.style.zIndex="99998",C.style.pointerEvents="none",document.body.appendChild(C),L=document.createElement("div"),L.style.width=`${Lt.width}px`,L.style.height=`${Lt.height}px`,A.parentElement.insertBefore(L,A),ft(d),await new Promise(en=>setTimeout(en,100))}const me=A.style.cssText,Ne=Math.max(A.scrollWidth,window.innerWidth,d==="hourly"?Kt:900),Ct=Math.max(A.scrollHeight,window.innerHeight,600);G?A.style.cssText+=`
        width: ${Ne}px !important;
        height: ${Ct}px !important;
        min-height: ${Ct}px !important;
        max-width: none !important;
        max-height: none !important;
      `:A.style.cssText+=`
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${Ne}px !important;
        height: ${Ct}px !important;
        min-height: ${Ct}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${r?"#000":"#f5f5f5"} !important;
      `,await new Promise(Lt=>setTimeout(Lt,100));const Qt=await le(x,Ne,Ct);return A.style.cssText=me,G||ft(null),Ft(!1),C&&(await new Promise(Lt=>setTimeout(Lt,100)),C.remove(),L&&L.remove()),Qt},et=async(d,x)=>{const G=await we(d,x);if(!G)return;const A=document.createElement("a");A.download=`${n.locationName}-${d}-chart.png`,A.href=G.toDataURL("image/png"),A.click()},ye=async(d,x)=>{const G=await we(d,x);if(!G)return;const A=G.toDataURL("image/png");let C=document.getElementById("chart-print-iframe");C||(C=document.createElement("iframe"),C.id="chart-print-iframe",C.style.position="fixed",C.style.width="0",C.style.height="0",C.style.border="none",C.style.top="-9999px",C.style.left="-9999px",document.body.appendChild(C));const L=C.contentWindow.document;L.open(),L.write(`
      <html><head><title>${n.locationName} - ${d}</title>
      <style>body{margin:0;text-align:center} img{max-width:100%}</style>
      </head>
      <body><img src="${A}" onload="window.focus();window.print();" /></body></html>
    `),L.close()},ve=(d,x)=>(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",flexShrink:0},children:[(0,e.jsx)(qn,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>hn(d,x),title:ne===d?"Вийти з повного екрана":"На весь екран","aria-label":ne===d?"Вийти з повного екрана":"На весь екран",style:vr,children:(0,e.jsx)(Gd,{size:16})})}),(0,e.jsx)(qn,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>et(d,x),"aria-label":"Завантажити скріншот повноекранного графіка",style:vr,children:(0,e.jsx)(nc,{size:16})})}),(0,e.jsx)(qn,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>ye(d,x),"aria-label":"Друкувати скріншот повноекранного графіка",style:vr,children:(0,e.jsx)(Hd,{size:16})})})]}),be=d=>(0,e.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:`${Math.max(10,Pt-1)}px`,alignItems:"center"},children:d.map(x=>(0,e.jsx)(qn,{content:`Натисніть, щоб ${lt[x.key]===1?"сховати":"показати"} ${x.label.toLowerCase()}`,isDarkMode:r,children:(0,e.jsxs)("button",{type:"button",onClick:()=>Jt(x.key),"aria-label":`Натисніть, щоб ${lt[x.key]===1?"сховати":"показати"}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 6px",border:`1px solid ${x.color}`,borderRadius:"4px",background:r?"#222":"#fff",color:x.color,cursor:"pointer",opacity:lt[x.key],fontSize:"inherit",fontWeight:"bold"},children:[(0,e.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:x.color}}),x.label]},x.key)}))}),ze=(d,x,G)=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"nowrap",marginBottom:"4px"},children:[be(G),ve(d,x)]});(0,a.useEffect)(()=>{if(Ke.current){const d=setTimeout(()=>{Ke.current&&(Ke.current.scrollLeft=144.44444444444446)},100);return()=>clearTimeout(d)}},[n.id,T,X]),(0,a.useEffect)(()=>{(async()=>{const x=await u.default.getItem(`useGlobalLayout_${n.id}`);x!==null&&F(x);const G=await u.default.getItem(`localLayout_${n.id}`);G&&se(G)})()},[n.id]),(0,a.useEffect)(()=>{(async()=>{const x=await u.default.getItem(`bgMode_${n.id}`);x&&de(x)})()},[n.id]),(0,a.useEffect)(()=>{(async()=>{const x=await u.default.getItem(`legendFontSize_${n.id}`);x&&Fe(x)})()},[n.id]);const qe=d=>{de(d),u.default.setItem(`bgMode_${n.id}`,d),Ie(!1)},an=()=>{z(!c),He()};(0,a.useEffect)(()=>{let d=!0;return(async()=>{if(ee!=="wiki"){d&&E(ee);return}const G=()=>za.find(C=>C.name==="Туманний ліс")?.src||za[0].src;let A=(n.locationName||n.name||"").trim();if(A==="Ваша локація"&&n.lat&&n.lon)try{const C=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${n.lat}&lon=${n.lon}&format=json&accept-language=uk`)).json();A=C.address?.city||C.address?.town||C.address?.village||C.address?.state||A}catch(C){console.warn("Reverse geocoding failed",C)}if(!A||A==="Ваша локація"){d&&E(G());return}try{const C=await(await fetch(`https://uk.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(A)}&pithumbsize=1000&format=json&origin=*`)).json(),L=Object.values(C?.query?.pages||{}).find(me=>me.thumbnail?.source)?.thumbnail?.source;L&&d?E(L):d&&E(G())}catch(C){console.warn("City image lookup failed:",C),d&&E(G())}})(),()=>{d=!1}},[n.locationName,n.lat,n.lon,n.name,ee]),(0,a.useEffect)(()=>()=>{},[]),(0,a.useEffect)(()=>{ut(!1),st(!1)},[B]),(0,a.useEffect)(()=>{Ue.current&&B&&!We&&Ue.current.scrollHeight>Ue.current.clientHeight&&st(!0)},[B,We]),(0,a.useEffect)(()=>{(async()=>{const x=await u.default.getItem(`ai_enabled_${n.id}`);x!==null&&Ze(x);const G=await u.default.getItem(`ai_custom_prompt_${n.id}`);G&&at(G);const A=await u.default.getItem(`ai_response_length_${n.id}`);A&&Pe(A);const C=await u.default.getItem(`ai_style_${n.id}`);C&&gt(C)})()},[n.id]);const $e=(0,a.useCallback)(async()=>{if(ie)return;const d=await u.default.getItem("gemini_api_key");if(!d){Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.");return}ke(!0);try{const x=new po(d).getGenerativeModel({model:"gemini-3.5-flash-lite"}),G=n.current,A=n.daily16||[],C=(n.hourly||[]).slice(0,5).map(Qt=>`${Qt.time}: ${Qt.temp}, вітер ${Qt.windNum}м/с, ${Qt.iconPlaceholder}`).join("; "),L=ge==="extensive"?"надай розгорнуту відповідь (кілька речень)":"згенеруй лаконічний прогноз одним реченням (макс 25 слів)",me=Ce==="scientific"?"використовуй науковий стиль":Ce==="sarcastic"?"додай дрібку сарказму та іронії":"використовуй дружній та теплий тон",Ne=`${Ae.trim()?`Ти метеоролог-асистент. ${me}. Виконуй цю інструкцію: ${Ae}. Критичні попередження (якщо є) виводь на самому початку. Використовуй абзаци для розбиття тексту. Відповідь надай українською мовою.`:`Ти метеоролог-асистент. На основі наданих даних ${L}. ${me}. Згадай про комфортний одяг. КРИТИЧНІ ПОПЕРЕДЖЕННЯ (температура, вітер, УФ) став найвище. Використовуй абзаци для зручності читання. Відповідь виключно українською мовою.`}

Місто: ${n.locationName}. Поточний час на сайті: ${I}.

Поточні показники: ${G.temp}, ${G.description}, вологість ${G.humidity}, вітер ${G.wind_speed}.
Найближчі години: ${C}.
Прогноз на дні: завтра ${A[1]?.temp_day||"н/д"}, післязавтра ${A[2]?.temp_day||"н/д"}.
Тенденція на 2 тижні: 1-й тиждень ~${A[7]?.temp_day||"н/д"}, 2-й тиждень ~${A[14]?.temp_day||"н/д"}.`,Ct=(await(await x.generateContent(Ne)).response).text().trim();Z(Ct),await u.default.setItem(`ai_weather_summary_${n.id}`,{text:Ct,timestamp:Date.now()})}catch(x){console.error("Gemini Weather Error:",x)}finally{ke(!1)}},[n,ie,Ae,ge,Ce,I]),rn=(0,a.useCallback)(async()=>{const d=await u.default.getItem(`ai_weather_summary_${n.id}`);!d||Date.now()-d.timestamp>72e5?$e():Z(d.text)},[n.id,$e]),_t=async()=>{const d=!xe;Ze(d),await u.default.setItem(`ai_enabled_${n.id}`,d),d&&!B&&rn()};(0,a.useEffect)(()=>{n.current&&n.daily16&&rn()},[n,rn]),(0,a.useEffect)(()=>{const d=x=>{x.detail?(!B||B.includes("Потрібен ключ"))&&$e():Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")};return window.addEventListener("geminiKeyChanged",d),()=>window.removeEventListener("geminiKeyChanged",d)},[B,$e]),(0,a.useEffect)(()=>{Qe==="ai"&&u.default.getItem("gemini_api_key").then(d=>{d?(!B||B.includes("Потрібен ключ"))&&$e():Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")})},[Qe,B,$e]);const[Rn,ca]=(0,a.useState)(!1),[cn,ua]=(0,a.useState)("");(0,a.useEffect)(()=>{ca(!1)},[fe]);const un=(d,x=24,G=null,A=1)=>{let C=d;if(d&&typeof d!="string"){const Ne=d.type?.name||"";Ne==="FaSmog"?C="☁️":Ne==="IoRainy"||Ne==="LiaCloudSunRainSolid"?C="🌧️":Ne==="GiSnowing"?C="❄️":Ne==="IoThunderstorm"?C="⛈️":Ne==="FaSun"?C="☀️":Ne==="BsMoonStarsFill"?C="🌙":Ne==="FaCloudMoon"?C="☁️":Ne==="FaCloudMoonRain"||Ne==="LiaCloudMoonRainSolid"?C="🌧️":C="☁️"}const L=document.createElement("canvas");L.width=x,L.height=x;const me=L.getContext("2d");return me.font=`${x-8}px serif`,me.textAlign="center",me.textBaseline="middle",me.fillStyle="rgba(0, 0, 0, 0.72)",me.globalAlpha=A,me.beginPath(),me.arc(x/2,x/2,x*.76,0,Math.PI*2),me.fill(),me.globalAlpha=A,me.fillStyle="#ffffff",me.fillText(C,x/2,x/2),G&&(me.fillStyle=G,me.font=`bold ${x/2}px Arial`,me.fillText("!",x-5,5)),L},Ln=(d,x=18,G=1)=>{const A=document.createElement("canvas"),C=x+12;A.width=C,A.height=C;const L=A.getContext("2d"),me=C/2,Ne=((Number(d)||0)%360+360)%360,Ct=Math.round(Ne/45)*45*Math.PI/180;return L.translate(me,me),L.rotate(Ct),L.fillStyle="rgba(0, 0, 0, 0.72)",L.globalAlpha=G,L.beginPath(),L.arc(0,0,C*.45,0,Math.PI*2),L.fill(),L.globalAlpha=G,L.fillStyle="#0099ff",L.strokeStyle="#ffffff",L.lineWidth=1.5,L.beginPath(),L.moveTo(0,-x*.43),L.lineTo(x*.2,x*.12),L.lineTo(x*.07,x*.08),L.lineTo(x*.07,x*.4),L.lineTo(-x*.07,x*.4),L.lineTo(-x*.07,x*.08),L.lineTo(-x*.2,x*.12),L.closePath(),L.fill(),L.stroke(),A},Ht=d=>{const x=((Number(d)||0)%360+360)%360,G=Math.round(x/45)*45;return wr(G%360)},On=()=>{P.trim()&&(N(n.id,P),U(!1))},Ut=Pc(n.hourly||[]),Mt=Ut[vt]?.items||[],Kt=Math.max(500,(Mt?.length||24)*35),Yt={labels:Mt?.map(d=>d.time)||[],datasets:[{label:"Температура (°C)",data:Mt?.map(d=>d.tempNum??0)||[],fill:!0,backgroundColor:"rgba(255, 179, 108, 0.2)",borderColor:"rgba(255, 179, 108, 1)",pointRadius:12,pointStyle:Mt?.map(d=>{let x=null;return(d.tempNum??0)>30?x="#ff0000":(d.tempNum??0)<-30?x="#004cff":(d.windNum??0)>10&&(x="#ff6a00"),un(d.iconSymbol??d.iconPlaceholder??"☁️",24,x,lt.day)}),tension:.4,yAxisID:"y"},{label:"Вітер (м/с)",data:Mt?.map(d=>d.windNum??0)||[],borderColor:"rgba(0, 190, 235, 1)",backgroundColor:"rgba(0, 190, 235, 0.1)",pointRadius:6,pointBackgroundColor:Mt?.map(d=>(d.windNum??0)>10?"#ff6a00":"rgba(0, 190, 235, 1)")||[],pointStyle:Mt?.map(d=>Ln(d.wind_direction_10m,18,lt.wind))||[],tension:.4,yAxisID:"y1"}]},St={"01.01":"Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)","06.01":"Богоявлення / Водохреще (новий стиль)","07.01":"Різдво Христове (старий стиль)","12.01":"1 серія 'Реальної містики'. Та вже, ціла епоха розкриття містифікацій у 12 сезонів!","14.01":"Василя / Обрізання Господнє (старий стиль)","19.01":"Богоявлення / Водохреще (старий стиль)","02.02":"Стрітення Господнє (новий стиль)","14.02":"З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!","15.02":"Стрітення Господнє (старий стиль)","08.03":"Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)","25.03":"Благовіщення Пресвятої Богородиці (новий стиль)","01.04":"Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)","07.04":"Благовіщення Пресвятої Богородиці (старий стиль)","23.04":"День святого Юрія / Георгія (новий стиль)","01.05":"День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!","02.05":"З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)","06.05":"День святого Юрія / Георгія (старий стиль)","08.05":"День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм.","09.05":"День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.","10.05":"Вознесіння Господнє (новий стиль)","27.05":"Випуск Dragon Village 3. Скачаєш? :)","29.05":"Особисте свято у цей день... Пробач, я теж маю секрети :)","10.06":"Вознесіння Господнє (старий стиль)","20.06":"Трійця / П'ятдесятниця (новий стиль)","21.06":"Просто літнє сонцестояння. Купив собі ескімо? :)","24.06":"Різдво Івана Хрестителя / Купала (новий стиль)","27.06":"Трійця / П'ятдесятниця (старий стиль)","28.06":"День Конституції України","29.06":"Святих апостолів Петра і Павла (новий стиль)","07.07":"Різдво Івана Хрестителя / Івана Купала (старий стиль)","12.07":"Святих апостолів Петра і Павла (старий стиль)","01.08":"День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(","06.08":"Преображення Господнє / Спас (новий стиль)","15.08":"Успіння Пресвятої Богородиці (новий стиль)","19.08":"Преображення Господнє / Спас (старий стиль)","24.08":"День Незалежності України","28.08":"Успіння Пресвятої Богородиці (старий стиль)","01.09":"День знань. Цей день усі ненавидять, бо термін відпустки закінчився.","08.09":"Різдво Пресвятої Богородиці (новий стиль)","11.09":"Випуск 1-ї серії м/с 'Динофроз'. Легенда...","14.09":"Воздвиження Хреста Господнього (новий стиль)","21.09":"Різдво Пресвятої Богородиці (старий стиль)","27.09":"Воздвиження Хреста Господнього (старий стиль)","01.10":"Покрова Пресвятої Богородиці та День козацтва (новий стиль)","14.10":"Покрова Пресвятої Богородиці та День козацтва (старий стиль)","27.10":"День української писемності та мови. Напиши по максимуму каліграфічний лист.","19.11":"Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)","21.11":"Введення в храм Пресвятої Богородиці (новий стиль)","30.11":"День святого Андрія Первозванного (новий стиль)","04.12":"Введення в храм Пресвятої Богородиці (старий стиль)","06.12":"День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","13.12":"День святого Андрія Первозванного (старий стиль)","19.12":"День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","25.12":"Різдво Христове (новий стиль)"},jn=d=>{const x=d.toLowerCase();return x.includes("сб")||x.includes("нд")},Zt=d=>{if(!t?.birthDate||!d)return!1;const[,x,G]=t.birthDate.split("-"),[A,C]=d.split(".");return parseInt(G)===parseInt(A)&&parseInt(x)===parseInt(C)},on=(d,x,G)=>{const A=St[d],C=jn(x),L=Zt(d),me=$.find(Ne=>Ne.date===G);return A?{type:"holiday",color:"#ff6666",label:A+(C?" + вихідний":"")}:L?{type:"birthday",color:"#e066ff",label:"З Днем Народження! 🎉",isRainbow:!0}:me?{type:"custom",color:"#00bfff",label:me.reason}:C?{type:"weekend",color:"#ff9966",label:"вихідний"}:{type:"regular",color:null,label:""}},Nt=d=>{const x=new Date,G=new Date(d);G.setHours(0,0,0,0);const A=G.getTime()-x.getTime();if(A<=0)return null;const C=Math.floor(A/864e5),L=Math.floor(A%864e5/36e5);return C>0?`⏳ Залишилось: ${C}д ${L}г`:`⏳ Почнеться за ${L}г`},pn=(d,x,G)=>{const A=$.find(Ne=>Ne.date===G),C=Nt(G),L=C?` (${C})`:"";if(A)return`💙 Ваша подія: ${A.reason}${L}`;if(Zt(d))return`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈${L}`;const me=St[d];return me?`✨ Вітаємо з святом: ${me}!${L}`:null},sn={labels:n.daily16?.map(d=>`${d.date}
${d.day}`)||[],datasets:[{label:"День (°C)",data:n.daily16?.map(d=>parseInt(d.temp_day))||[],borderColor:`rgba(255, 179, 108, ${lt.day})`,backgroundColor:`rgba(255, 179, 108, ${lt.day*.5})`,pointRadius:12,pointStyle:n.daily16?.map(d=>un(d.iconSymbol??d.iconPlaceholder,24,null,lt.day)),pointBorderColor:n.daily16?.map(d=>on(d.date,d.day,d.fullDate).color||"#ffb36c"),pointBorderWidth:n.daily16?.map(d=>on(d.date,d.day,d.fullDate).color?3:2),tension:.3,yAxisID:"y"},{label:"Ніч (°C)",data:n.daily16?.map(d=>parseInt(d.temp_night))||[],borderColor:`rgba(255, 20, 147, ${lt.night})`,backgroundColor:`rgba(255, 20, 147, ${lt.night*.2})`,pointStyle:"circle",pointRadius:4,tension:.3,yAxisID:"y"},{label:"Вітер (м/с)",data:n.daily16?.map(d=>parseFloat(d.wind_speed)||0)||[],borderColor:`rgba(0, 153, 255, ${lt.wind})`,backgroundColor:`rgba(0, 153, 255, ${lt.wind*.2})`,pointStyle:n.daily16?.map(d=>Ln(d.wind_direction_10m,18,lt.wind)),pointRadius:6,pointBorderColor:"#ffffff",pointBorderWidth:1.5,pointBackgroundColor:n.daily16?.map(d=>parseFloat(d.wind_speed)>10?"#ff6a00":"#0099ff"),tension:.3,yAxisID:"y1"}]},ot={animation:jt?!1:void 0,responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,external:fn,callbacks:{title:d=>`⏰ Час: ${d[0].label}`,label:d=>{if(d.datasetIndex===0){const x=d.parsed.y||0;let G=`Температура: ${x}°C`,A=[];return x>30&&A.push("СПЕКА ☀️"),x<-30&&A.push("МОРОЗ ❄️"),A.length>0&&(G+=` ⚠️ ${A.join(", ")}`),G}else if(d.datasetIndex===1){const x=d.parsed.y||0;let G=` Вітер: ${x.toFixed(1)} м/с`;x>10&&(G+=" ⚠️ СИЛЬНИЙ ВІТЕР");const A=Mt?.[d.dataIndex];return A&&(G+=` | ${Ht(A.wind_direction_10m)} (${Math.round(A.wind_direction_10m||0)}°)`),G}return""},afterLabel:d=>{const x=d.dataIndex,G=Mt?.[x];return d.datasetIndex===0&&G&&(G.iconSymbol||G.iconPlaceholder)||""}}}},scales:{y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"rgba(0, 190, 235, 1)"},ticks:{color:"rgba(0, 190, 235, 1)",font:{size:10}},grid:{drawOnChartArea:!1}},x:{offset:!0,ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{display:!1}}}},Xt={...ot,plugins:{...ot.plugins,legend:{display:!1},tooltip:{...ot.plugins.tooltip,external:fn,callbacks:{title:d=>{const x=n.daily16?.[d[0].dataIndex];if(!x)return d[0].label;const G=on(x.date,x.day,x.fullDate),A=pn(x.date,x.day,x.fullDate),C=G.label?` [${G.label}]`:"",L=d[0].label+C;return A?[A,L]:L},label:d=>{const x=d.datasetIndex===0,G=d.datasetIndex===1,A=d.datasetIndex===2;if(x)return`☀️ День: ${d.parsed.y}°C`;if(G)return`🌙 Ніч: ${d.parsed.y}°C`;if(A){const C=n.daily16?.[d.dataIndex]?.wind_direction_10m||0;return`🌬️ Вітер: ${d.parsed.y.toFixed(1)} м/с | ${Ht(C)} (${Math.round(C)}°)`}return""},afterLabel:d=>{const x=n.daily16?.[d.dataIndex];return!x||d.datasetIndex!==0?"":`
Описання: ${x.description||"—"}`}}}},scales:{...ot.scales,y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"#0099ff"},ticks:{color:"#0099ff",font:{size:10}},grid:{drawOnChartArea:!1}},x:{...ot.scales.x,ticks:{...ot.scales.x.ticks,color:d=>{if(!n.daily16||d.index>=n.daily16.length)return r?"#aaa":"#888";const x=n.daily16[d.index];return on(x.date,x.day,x.fullDate).color||(r?"#aaa":"#888")},font:{...ot.scales.x.ticks.font,weight:d=>{if(!n.daily16||d.index>=n.daily16.length)return"normal";const x=n.daily16[d.index];return on(x.date,x.day,x.fullDate).color?"bold":"normal"}}}}},onClick:(d,x)=>{if(x.length>0){const G=x[0].index,A=n.daily16[G],C=on(A.date,A.day,A.fullDate);if(C.type==="holiday"||C.type==="birthday")ae(A);else if(C.type==="custom")ae(A),ua(C.label);else if(R.trim()){if(R.trim().length>12){alert("Назва свята занадто довга (макс. 12 символів)!");return}O(fs({date:A.fullDate,reason:R.trim()}))}else ae(A)}}};function fn(d){const{chart:x,tooltip:G}=d,A=document.fullscreenElement,C=A||document.body;let L=C.querySelector("#chartjs-external-tooltip");if(!L){const en=document.getElementById("chartjs-external-tooltip");en&&en.remove(),L=document.createElement("div"),L.id="chartjs-external-tooltip",L.style.position="fixed",L.style.zIndex="2147483647",L.style.maxWidth="min(280px, calc(100vw - 24px))",L.style.boxSizing="border-box",L.style.whiteSpace="pre-line",L.style.background="rgba(15, 15, 25, 0.92)",L.style.color="#fff",L.style.borderRadius="8px",L.style.padding="8px 12px",L.style.pointerEvents="none",L.style.transition="all 0.1s ease",L.style.boxShadow="0 8px 20px rgba(0,0,0,0.4)",L.style.border="1px solid rgba(255, 179, 108, 0.4)",L.style.fontSize="12px",L.style.backdropFilter="blur(6px)",L.setAttribute("role","dialog"),C.appendChild(L)}if(G.opacity===0){L.style.opacity="0";return}if(G.body){const en=G.title||[],Cn=G.body.map(Ot=>Ot.lines),xn=G.afterBody||[];let Tn="";en.forEach(Ot=>{Tn+=`<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${Ot}</div>`}),Cn.forEach(Ot=>{Tn+=`<div style="margin-bottom: 2px;">${Ot}</div>`}),xn.forEach(Ot=>{Tn+=`<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${Ot}</div>`}),L.innerHTML=Tn}const me=x.canvas.getBoundingClientRect(),Ne=L.offsetWidth,Ct=L.offsetHeight,Qt=A?A.clientWidth:window.innerWidth,Lt=A?A.clientHeight:window.innerHeight,$n=Math.min(Math.max(12,me.left+G.caretX+10),Qt-Ne-12),Sn=Math.min(Math.max(12,me.top+G.caretY-Ct-10),Lt-Ct-12);L.style.opacity="1",L.style.left=`${$n}px`,L.style.top=`${Sn}px`}return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsxs)(vu,{$isMain:n.isMain,$isDarkMode:r,children:[(0,e.jsxs)(ku,{$isMain:n.isMain,style:{position:"relative",zIndex:10,background:r?"#222":"#444",borderRadius:"8px 8px 0 0"},children:[(0,e.jsxs)("div",{children:[q?(0,e.jsxs)("div",{style:{gap:"2px"},children:[(0,e.jsx)("input",{type:"text",value:P,onChange:d=>V(d.target.value),autoFocus:!0,style:{padding:"2px 5px",fontSize:"14px",borderRadius:"4px",border:"1px solid #ff6a00",background:r?"#333":"#fff",color:r?"#fff":"#000"}}),(0,e.jsx)("button",{onClick:On,style:{background:"green",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"2px 8px"},children:"✓"}),(0,e.jsx)("button",{onClick:()=>U(!1),style:{background:"red",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"2px 4px"},children:"✕"})]}):(0,e.jsxs)("h3",{style:{display:"flex",alignItems:"center",gap:"8px",margin:0},children:[(0,e.jsxs)("span",{style:{color:"#ffb36c",fontWeight:700},children:["#",p]}),(0,e.jsx)("span",{children:n.locationName})]}),(0,e.jsxs)("p",{style:{fontSize:"10px",color:"#fcfcfc"},children:["Широта: ",n.lat?.toFixed(2),", Довгота: ",n.lon?.toFixed(2)]})]}),(0,e.jsxs)(ju,{style:{position:"relative"},children:[(0,e.jsx)(qn,{content:"Налаштування картки",isDarkMode:r,children:(0,e.jsx)("button",{ref:d=>{n.isMain&&v&&v("weatherGear",d)},onClick:()=>{window.dispatchEvent(new CustomEvent("domino-weather-gear-clicked")),De?He():Xe(!0)},"aria-label":"Налаштування картки",style:{fontSize:"28px",padding:"5px",display:"inline-flex",alignItems:"center",gap:"4px"},children:(0,e.jsx)(ls,{size:28})})}),(De||ue)&&(0,e.jsxs)($u,{$isDarkMode:r,$isClosing:ue,children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",padding:"2px 5px 0 0"},children:(0,e.jsx)(qn,{content:"Закрити меню",isDarkMode:r,children:(0,e.jsx)("button",{onClick:He,style:{background:"transparent",border:"none",color:r?"#ffb36c":"#333",fontSize:"20px",cursor:"pointer",fontWeight:"900",padding:"4px",lineHeight:1},"aria-label":"Закрити меню",children:"✕"})})}),!q&&(0,e.jsxs)("button",{onClick:()=>{U(!0),He()},style:{textAlign:"left",padding:"0px 0px 10px 10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Nd,{size:16})," Змінити назву"]}),(0,e.jsxs)("button",{onClick:()=>{Ie(!0),He()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(oc,{size:16})," Змінити фон"]}),(0,e.jsxs)("button",{onClick:()=>{_t(),He()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Ud,{size:16})," ",xe?"Вимкнути ШІ":"Увімкнути ШІ"]}),(0,e.jsxs)("button",{onClick:()=>{bt(!0),He()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(gd,{})," Встановити дати"]}),(0,e.jsxs)("button",{onClick:()=>{w(S||n.cityImage)},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Od,{size:16})," Детальна погода"]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px",borderBottom:"1px solid #444"},children:[(0,e.jsx)("button",{disabled:p===0,onClick:()=>{He(),M(n.id,-1)},style:{flex:1,background:"transparent",color:p===0?"grey":r?"#fff":"#000",fontSize:"13px",cursor:p===0?"default":"pointer"},children:"Зробити вище картку"}),(0,e.jsx)("button",{disabled:p===m-1,onClick:()=>{He(),M(n.id,1)},style:{flex:1,background:"transparent",color:p===m-1?"grey":r?"#fff":"#000",fontSize:"13px",cursor:p===m-1?"default":"pointer"},children:"Зробити нижче картку"})]}),n.isMain?(0,e.jsxs)("button",{onClick:an,style:{textAlign:"left",padding:"10px",background:"transparent",color:c?r?"#fff":"#000":"#b300ad",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Zd,{size:14})," ",c?"GPS On":"GPS Off"]}):(0,e.jsxs)("button",{onClick:()=>{g(n.id)},style:{textAlign:"left",padding:"10px",background:"transparent",color:"red",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(ds,{size:14})," Видалити"]}),(0,e.jsxs)("button",{onClick:()=>{He(),xt&&window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`weather-${n.id}`,type:"weather",title:n.locationName,details:`Місто: ${n.locationName}. Координати: ${n.lat?.toFixed(2)}, ${n.lon?.toFixed(2)}. Температура: ${n.current?.temp}°C, відчувається: ${n.current?.feels_like}°C. Вітер: ${n.current?.wind_speed} м/с. Вологість: ${n.current?.humidity}%. Тиск: ${n.current?.pressure} гПа.`}}))},style:{textAlign:"left",padding:"10px",background:xt?"linear-gradient(135deg, #5c1d3c, #62123d)":"rgba(120,120,120,0.3)",color:"#fff",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px",cursor:xt?"pointer":"default"},children:[(0,e.jsx)(cs,{size:16})," Прикріпити до ШІ"]})]})]})]}),(0,e.jsx)(hu,{customDays:$,cardId:n.id}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",borderBottom:"1px solid rgb(0,238,255)"},children:[{key:"current",label:"Зараз"},{key:"hourly",label:"Годинна"},{key:"daily",label:"Місячна"},{key:"ai",label:"ШІ"}].map(d=>(0,e.jsx)("button",{onClick:()=>oe(d.key),style:{padding:"4px 2px",border:"none",borderBottom:Qe===d.key?"2px solid #00eeff":"2px solid transparent",background:"transparent",color:Qe===d.key?"#00eeff":r?"#aaa":"#555",fontWeight:Qe===d.key?700:400,fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},children:d.label},d.key))}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Qe==="current"&&(0,e.jsx)(Su,{$image:S||n.cityImage,style:{height:"auto",minHeight:"270px",borderRadius:0},children:(0,e.jsx)(Cu,{style:{position:"relative",borderRadius:0,padding:"2px",background:"rgba(0,0,0,0.6)"},children:(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4px",fontSize:"13px",width:"100%",padding:"3px",boxSizing:"border-box"},children:[(0,e.jsxs)("div",{"aria-label":n.current.iconPlaceholder,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"32px",lineHeight:"1"},children:n.current.iconSymbol||"🌤️"}),(0,e.jsx)("div",{style:{marginTop:"5px",fontSize:"11px",fontWeight:"bold",textAlign:"center",lineHeight:"1.2"},children:(n.current.iconPlaceholder||"").replace(n.current.iconSymbol||"","").trim()||"Мінлива хмарність"})]}),(0,e.jsxs)("div",{"aria-label":"Температура / Відчувається як",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:parseFloat(n.current.temp)<5?"#4da6ff":parseFloat(n.current.temp)>25?"#ff4d4d":"inherit"},children:parseFloat(n.current.temp)<5?(0,e.jsx)(cd,{}):parseFloat(n.current.temp)>25?(0,e.jsx)(Dd,{}):(0,e.jsx)(md,{})}),(0,e.jsxs)("div",{style:{fontWeight:"bold",textAlign:"center"},children:[n.current.temp,(0,e.jsxs)("div",{style:{fontSize:"9px",fontWeight:"normal",opacity:.8},children:["Відчувається: ",n.current.feels_like]})]})]}),(0,e.jsxs)("div",{"aria-label":"Відносна вологість",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:parseFloat(n.current.humidity)>70?"#4da6ff":"inherit"},children:parseFloat(n.current.humidity)>70?(0,e.jsx)(Ld,{}):(0,e.jsx)(Ed,{})}),(0,e.jsxs)("div",{style:{marginTop:"10px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:["Вологість: ",n.current.humidity??"—"]})]}),(0,e.jsxs)("div",{"aria-label":`Вітер: ${n.current.wind_speed}, Напрямок: ${n.current.wind_direction_10m}° (${wr(n.current.wind_direction_10m)}), Пориви: ${n.current.wind_gusts_10m} м/с`,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"28px"},children:(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${Math.round((n.current.wind_direction_10m||0)/45)*45%360}deg)`},children:"⬇"})}),(0,e.jsxs)("div",{style:{fontWeight:"bold",textAlign:"center",marginTop:"-15px",fontSize:"12px"},children:["Швидкість вітру: ",n.current.wind_speed,(0,e.jsxs)("div",{style:{fontSize:"10px",fontWeight:"normal",opacity:.8},children:[n.current.wind_direction_10m,"° ",wr(n.current.wind_direction_10m)]}),(0,e.jsxs)("div",{style:{fontSize:"10px",fontWeight:"bold",opacity:.9,color:s?"#ff4d4d":"inherit"},children:["Пориви: ",n.current.wind_gusts_10m,"м/с"]})]})]}),(0,e.jsx)(qn,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsxs)("div",{"aria-label":"Точка роси (температура, при якій утворюється роса)",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:(0,e.jsx)(qd,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center"},children:["Точка роси: ",n.current.dew_point_2m,"°C"]})]})}),(0,e.jsxs)("div",{"aria-label":"Атмосферний тиск",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:parseFloat(n.current.pressure)<1e3?"#4da6ff":parseFloat(n.current.pressure)>1020?"#ff4d4d":"inherit"},children:(0,e.jsx)(vd,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"12px"},children:["Атмосферний тиск: ",n.current.pressure]})]}),(0,e.jsxs)("div",{"aria-label":"Хмарність",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:parseFloat(n.current.cloud_cover)<50?(0,e.jsx)(dc,{}):(0,e.jsx)(sc,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"11px"},children:["Хмарність: ",n.current.cloud_cover,"%"]})]}),(0,e.jsxs)("div",{"aria-label":"Видимість",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",opacity:Math.min(1,Math.max(.3,(n.current.visibility||1e4)/1e4)),color:(n.current.visibility||1e4)<2e3?"#ff4d4d":"inherit"},children:(0,e.jsx)(Wd,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"10px"},children:["Видимість:",n.current.visibility!==void 0?(n.current.visibility/1e3).toFixed(1):"—","км"]})]}),(0,e.jsxs)("div",{"aria-label":"УФ-індекс / Сонячна радіація",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:(n.current.uv_index||0)>5?"#ff4d4d":(n.current.uv_index||0)>2?"#ffd700":"inherit"},children:(0,e.jsx)(ld,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"10px"},children:["УФ-індекс: ",n.current.uv_index??0]})]})]})})}),Qe==="hourly"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},children:(0,e.jsx)("h4",{style:{margin:0},children:"Годинний прогноз"})}),Ut.length>1&&(0,e.jsx)("div",{style:{marginTop:"8px",marginBottom:"8px"},children:(0,e.jsx)("select",{value:vt,onChange:d=>Re(Number(d.target.value)),style:{width:"100%",maxWidth:"260px",padding:"8px 10px",borderRadius:"8px",border:r?"1px solid #555":"1px solid #ccc",background:r?"#1f1f1f":"#fff",color:r?"#fff":"#000",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:Ut.map((d,x)=>(0,e.jsx)("option",{value:x,children:d.title||d.label},d.label))})}),Mt&&Mt.length>0&&(0,e.jsxs)("div",{ref:Tt,style:{position:"relative",width:"100%",minHeight:ne==="hourly"?jt?`${window.innerHeight}px`:"100vh":void 0,padding:ne==="hourly"?"16px":void 0,boxSizing:"border-box",background:ne==="hourly"?r?"#000":"#f5f5f5":"transparent"},children:[ze("hourly",Tt,[{key:"day",label:"Температура",color:"#ffb36c"},{key:"wind",label:"Вітер",color:"#0099ff"}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(ii,{children:(0,e.jsx)(ba,{$width:ne==="hourly"?`max(100%, ${Kt}px)`:Kt,$height:ne==="hourly"?jt?`${window.innerHeight-90}px`:"calc(100vh - 90px)":"150px",children:(0,e.jsx)(xa,{ref:rt,options:ot,data:Yt},`hourly-${ne||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ne==="hourly"?"none":"block"},children:(0,e.jsx)(ba,{$width:Kt,$height:"150px",children:(0,e.jsx)(xa,{options:{...ot,plugins:{...ot.plugins,tooltip:{enabled:!1}}},data:Yt})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ne==="hourly"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:`${Kt}px`,height:"150px"},children:(0,e.jsx)(ba,{$width:Kt,$height:"150px",children:(0,e.jsx)(xa,{options:{...ot,plugins:{...ot.plugins,tooltip:{enabled:!1}}},data:Yt})})})})]})]})]}),Qe==="daily"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Прогноз на 16 днів (включаючи 2 минулі дні)"})}),(0,e.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"6px 8px",background:r?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(4px)",borderBottom:"1px solid #ffb36c",zIndex:100},children:[be([{key:"day",label:"День",color:"#ffb36c"},{key:"night",label:"Ніч",color:"#ff1493"},{key:"wind",label:"Вітер",color:"#0099ff"}]),ve("daily",At)]}),(0,e.jsxs)("div",{ref:At,style:{position:"relative",width:"100%",minHeight:ne==="daily"?jt?`${window.innerHeight}px`:"100vh":void 0,padding:ne==="daily"?"16px":void 0,boxSizing:"border-box",background:ne==="daily"?r?"#000":"#f5f5f5":"transparent"},children:[ne==="daily"&&ze("daily",At,[{key:"day",label:"День",color:"#ffb36c"},{key:"night",label:"Ніч",color:"#ff1493"},{key:"wind",label:"Вітер",color:"#0099ff"}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(ii,{ref:Ke,children:(0,e.jsx)(ba,{$width:ne==="daily"?"max(100%, 900px)":900,$height:ne==="daily"?jt?`${window.innerHeight-120}px`:"calc(100vh - 120px)":"190px",children:(0,e.jsx)(xa,{ref:Rt,options:Xt,data:sn},`daily-${ne||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ne==="daily"?"none":"block"},children:(0,e.jsx)(ba,{$width:1300,$height:"150px",children:(0,e.jsx)(xa,{options:{...Xt,plugins:{...Xt.plugins,tooltip:{enabled:!1}}},data:sn})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ne==="daily"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"1300px",height:"150px"},children:(0,e.jsx)(ba,{$width:1300,$height:"150px",children:(0,e.jsx)(xa,{options:{...Xt,plugins:{...Xt.plugins,tooltip:{enabled:!1}}},data:sn})})})})]})]})]}),Qe==="ai"&&B&&(0,e.jsxs)(Du,{$isDarkMode:r,layout:!0,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[(0,e.jsx)("span",{className:"ai-header-text",style:{fontWeight:800,color:"#faf7fd",fontSize:"11px",letterSpacing:"1px"},children:"Прогноз ШІ"}),(0,e.jsx)("button",{className:"ai-edit-btn",onClick:()=>ht(!mt),style:{background:"none",border:"none",cursor:"pointer",fontWeight:600,fontSize:"12px",color:"#ffffff",padding:0},children:mt?"Готово":"Редагувати умову промпту"})]}),mt?(0,e.jsxs)(Ru,{$isDarkMode:r,children:[(0,e.jsx)("label",{style:{fontSize:"10px",fontWeight:"bold"},children:"Своя інструкція:"}),(0,e.jsx)(Lu,{$isDarkMode:r,value:Ae,onChange:d=>at(d.target.value),placeholder:"Наприклад: Дай поради для рибалки на основі вітру та тиску..."}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)("select",{value:ge,onChange:d=>Pe(d.target.value),style:{fontSize:"10px",padding:"2px",borderRadius:"4px",background:r?"#333":"#fff",color:r?"#fff":"#000"},children:[(0,e.jsx)("option",{value:"concise",children:"Стисло"}),(0,e.jsx)("option",{value:"extensive",children:"Обширно"})]}),(0,e.jsxs)("select",{value:Ce,onChange:d=>gt(d.target.value),style:{fontSize:"10px",padding:"2px",borderRadius:"4px",background:r?"#333":"#fff",color:r?"#fff":"#000"},children:[(0,e.jsx)("option",{value:"friendly",children:"Дружній"}),(0,e.jsx)("option",{value:"scientific",children:"Науковий"}),(0,e.jsx)("option",{value:"sarcastic",children:"Саркастичний"})]}),(0,e.jsx)("button",{onClick:async()=>{await u.default.setItem(`ai_custom_prompt_${n.id}`,Ae),await u.default.setItem(`ai_response_length_${n.id}`,ge),await u.default.setItem(`ai_style_${n.id}`,Ce),ht(!1),$e()},style:{background:"#8a2be2",color:"white",border:"none",borderRadius:"4px",padding:"4px 8px",fontSize:"10px",cursor:"pointer",fontWeight:"bold"},children:"Зберегти та оновити"})]})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(dn.div,{layout:!0,transition:{duration:.3},children:(0,e.jsx)(Mu,{ref:Ue,$isExpanded:!1,children:B})}),_e&&(0,e.jsx)(zu,{onClick:()=>Je(!0),children:"Читати далі..."})]})]}),Qe==="ai"&&ie&&(0,e.jsx)(si,{$isDarkMode:r,children:(0,e.jsx)("div",{style:{color:"#b362ff"},children:"⏳ Генерація прогнозу ШІ..."})}),Qe==="ai"&&!B&&!ie&&(0,e.jsx)(si,{$isDarkMode:r,children:(0,e.jsx)("div",{style:{color:r?"#aaa":"#555"},children:"ШІ-аналіз недоступний. Перевірте ключ Gemini API."})})]})]}),Le&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.75)",zIndex:4e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>Je(!1),children:(0,e.jsxs)("div",{style:{background:r?"#1a1a2e":"#fff",border:"1px solid rgba(138,43,226,0.5)",borderRadius:"12px",padding:"20px",width:"90%",maxWidth:"480px",maxHeight:"80vh",overflowY:"auto",color:r?"#efefff":"#222",fontSize:"13px",lineHeight:1.6,whiteSpace:"pre-line"},onClick:d=>d.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[(0,e.jsx)("span",{style:{fontWeight:800,color:"#b362ff",fontSize:"13px",letterSpacing:"1px"},children:"Прогноз ШІ — повний текст"}),(0,e.jsx)("button",{onClick:()=>Je(!1),style:{background:"none",border:"none",color:"#b362ff",fontSize:"18px",cursor:"pointer"},children:"✕"})]}),B]})}),Ge&&(0,e.jsx)(fu,{isDarkMode:r,currentCardId:n.id,onClose:()=>bt(!1)}),ce&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",zIndex:3e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>Me(!1),children:(0,e.jsxs)("div",{ref:d=>{n.isMain&&v&&v("weatherModal",d)},style:{background:r?"#222":"#fff",borderRadius:"10px",padding:"20px",width:"90%",maxWidth:"350px",color:r?"#fff":"#000"},onClick:d=>d.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:"0 0 15px 0"},children:"Налаштування картки"}),(0,e.jsx)("p",{style:{fontSize:"13px",color:r?"#aaa":"#555",marginBottom:"15px"},children:"Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ."}),(0,e.jsx)("button",{onClick:()=>Me(!1),style:{width:"100%",padding:"10px",background:"#ffb36c",color:"#000",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Закрити"})]})}),Ee&&(0,e.jsx)(Tu,{onClick:()=>Ie(!1),children:(0,e.jsxs)(Au,{onClick:d=>d.stopPropagation(),children:[(0,e.jsxs)("h2",{style:{margin:0,color:"#ffb36c"},children:["Зміна фону: ",n.locationName]}),(0,e.jsxs)(Iu,{children:[(0,e.jsxs)(ri,{$active:ee==="wiki",onClick:()=>qe("wiki"),children:[(0,e.jsx)(oo,{children:"Вікіпедія"}),(0,e.jsx)(oi,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png"})]}),za.filter(d=>!d.src.endsWith(".mp4")).map((d,x)=>(0,e.jsxs)(ri,{$active:ee===d.src,onClick:()=>qe(d.src),children:[d.author&&(0,e.jsxs)(wl,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:d.author}),d.source&&(0,e.jsx)("div",{children:d.source})]}),(0,e.jsx)(oo,{children:d.name}),(0,e.jsx)(oi,{src:d.src})]},x))]}),(0,e.jsx)("button",{onClick:()=>Ie(!1),style:{padding:"8px",background:"#ffb36c",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",marginTop:"10px"},children:"Закрити"})]})})]})},Fu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${t=>t.$isDarkMode?`url(${La}) center/cover no-repeat, linear-gradient(135deg, #000000 0%, #000000 100%)`:`url(${La}) center/cover no-repeat, linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`};
  color: ${t=>t.$isDarkMode?"#ffffff":"#333333"};
  font-family: var(--font-family, "Inter", sans-serif);
  text-align: center;
  padding: 20px;
  overflow: hidden;
`,Pu=i(dn.h1)`
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
`,Nu=i(dn.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 750px;
  background: #0000009b;
  margin-bottom: 40px;
  line-height: 1.5;
`,Ou=i(fd)`
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
`,Vu=({isDarkMode:t=!0})=>(0,e.jsxs)(Fu,{$isDarkMode:t,children:[(0,e.jsx)(Pu,{$isDarkMode:t,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:"404"}),(0,e.jsx)(Nu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:"Уведіть правильну назву сторінки! Треба було Доміно поставити на фото, чи Ніцерона. А хоча воно ніби наказує що ти маєш не залишатися тут довго."}),(0,e.jsx)(dn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,e.jsx)(Ou,{to:"/",$isDarkMode:t,children:"Повернутися на головну"})})]}),Bu=Te`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`,vl=Te`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`,_u=Te`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`,Hu=Te`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`,Uu=i(dn.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  overflow: hidden;
  font-family: var(--font-family, "Inter", sans-serif);

  /* фон: зображення + чорний градієнт */
  background:
    url(${La}) center / cover no-repeat,
    linear-gradient(135deg, #000 0%, #0a0a0a 100%);

  /* скан-лінії поверх */
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
    animation: ${Bu} 8s linear infinite;
    pointer-events: none;
  }
`,Ku=i(dn.h1)`
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 900;
  margin: 0 0 16px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${_u} 6s infinite;
`,qu=i(dn.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 22px;
  margin-bottom: 28px;
  border-radius: 999px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  background: rgba(255, 179, 108, 0.1);
  color: #ffb36c;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);

  span.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffb36c;
    animation: ${vl} 1.2s ease-in-out infinite;
    flex-shrink: 0;
  }
`,Wu=i(dn.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 36px 40px;
  max-width: 640px;
  width: 100%;
  box-shadow:
    0 0 0 1px rgba(148, 255, 250, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6);
`,Gu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
`,Ju=i.p`
  margin: 0;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.12em;
`,Yu=i.p`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 800;
  color: #94fffa;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  text-shadow: 0 0 20px rgba(148, 255, 250, 0.5);
`,Zu=i.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
  margin: 0 0 28px;
`,li=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  margin-bottom: 10px;
`,di=i.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  box-shadow: 0 0 8px ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  animation: ${vl} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`,ci=i.span`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
`,Xu=i.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${Hu} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,Qu=({isDarkMode:t=!0,endTime:n=null,message:r=null})=>{const[c,l]=(0,a.useState)(null),[s,y]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!n)return;const p=()=>{const f=new Date(n)-Date.now();if(f<=0){l(null),y(!0),setTimeout(()=>window.location.reload(),6e4);return}const g=Math.floor(f/36e5),N=Math.floor(f%36e5/6e4),M=Math.floor(f%6e4/1e3);l(`${g>0?`${g}год `:""}${String(N).padStart(2,"0")}хв ${String(M).padStart(2,"0")}с`)};p();const m=setInterval(p,1e3);return()=>clearInterval(m)},[n]),(0,e.jsx)(rr,{children:(0,e.jsxs)(Uu,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},children:[(0,e.jsxs)(qu,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.5},children:[(0,e.jsx)("span",{className:"dot"}),"Технічні роботи"]}),(0,e.jsx)(Ku,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:s?"⚡ Завершено!":`⚙️ Увага!
Зараз техроботи`}),(0,e.jsxs)(Wu,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:.55,type:"spring",stiffness:120},children:[(0,e.jsx)(Xu,{children:(0,e.jsx)("img",{src:La,alt:""})}),n&&(0,e.jsxs)(Gu,{children:[(0,e.jsx)(Ju,{children:s?"Перезавантаження через":"Залишилось часу"}),(0,e.jsx)(Yu,{children:s?"~1 хв":c??"Підраховуємо…"})]}),(0,e.jsx)(Zu,{children:r??"Ми проводимо технічне обслуговування сайту. Якщо роботи завершаться раніше — ви отримаєте сповіщення і сторінка перезавантажиться автоматично. Якщо ні — очікуйте, час буде вказано вище."}),(0,e.jsxs)(li,{children:[(0,e.jsx)(di,{$ok:!1}),(0,e.jsx)(ci,{children:"Сайт тимчасово недоступний"})]}),s&&(0,e.jsxs)(li,{children:[(0,e.jsx)(di,{$ok:!0}),(0,e.jsx)(ci,{children:"Роботи завершено — перезавантаження…"})]})]})]},"maintenance-overlay")})},kl=Xd({apiKey:"AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",authDomain:"stuxia-5b535.firebaseapp.com",projectId:"stuxia-5b535",storageBucket:"stuxia-5b535.firebasestorage.app",messagingSenderId:"801101038904",appId:"1:801101038904:web:70d01ab63f631b74acadcd"}),mn=kd(kl),ui=rc(kl),Fh=new _d;function ep(t){const n=zn(mn,"config","global");return Ad(n,r=>{if(!r.exists()){t({isMaintenanceMode:!1,endTime:null,message:null});return}const c=r.data();t({isMaintenanceMode:!!c.isMaintenanceMode,endTime:c.maintenanceEndTime??null,message:c.maintenanceMessage??null})},()=>{t({isMaintenanceMode:!1,endTime:null,message:null})})}var io="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",tp="/assets/flame-D00vcfgc.webp",np="/assets/humor-DlTxVxCE.mp4",ap="/assets/unity-F-cBWwIf.webp",rp="/assets/monody-DBysFOWl.webp",op="/assets/hunger-Bja8eIKz.webp",ip="/assets/dinofroz-Bw1EE6sM.mp3",sp="/assets/thefatrat-monody-Bn_jMkG9.mp3",lp="/assets/unity-Dfk4ENTo.mp3",dp="/assets/thefatrat-hunger-CL1g_1gU.mp3",cp="/assets/dragon-CPH8-885.mp3",up="/assets/harmonic-japan-Dd6wyKZa.mp3",pp="/assets/electrodynamix-BOk9PXVN.mp3",fp="/assets/clubstep-C7imHHYw.mp3",gp="/assets/theoty-of-everything-ll-C8ndIrWQ.mp3",mp="/assets/theory-of-everyting-DW0SvZ3g.mp3",hp="/assets/deadlocked-VXA-1jpn.mp3",xp="/assets/mechanik-kindom-Ck3xg6-z.mp3",bp="/assets/no-no-no-Cs2QaRjF.webp",yp="/assets/thefatrat-no-no-no-BmhHAhgN.mp3",wa={faded:xl,dinofrozVideo:ro,soloveyko:gs,harmony:ms,horse:hs,theorytwo:xs,fingerdash:bs,humorVideo:np,electrodynamix:ys,desert:ws,deserttwo:vs,desertthree:ks,desertfour:js,desertone:Ss,unity:ap,mecha:Cs,monody:rp,clubstep:Ts,turkeys:dr,horsethree:As,horsetwo:qc,chess:Is,turkeytwo:Ds,turkeythree:Ms,turkeyfour:zs,turkeyfive:Rs,turkeysix:Ls,turkeysone:$s,turkeyseven:Es,asiumnine:Fs,asiumone:Ps,asiumtwo:Ns,asiumthree:Os,asiumfour:Vs,asiumfive:Bs,asiumsix:_s,asiumten:Hs,asiumeleven:Us,asiumseven:Ks,swamptwo:qs,swampthree:Ws,swampfour:Gs,swampfive:Js,swampsix:Ys,swampseven:Zs,swampeight:Xs,swampnine:Qs,theory:el,deadlocked:tl,horrortwo:nl,horrorthree:al,horrorfour:rl,horrorfive:ol,horror:go,horrorsix:il,horrorseven:sl,horroreight:ll,dinofrozone:mo,dinofrozthree:dl,dinofrozfour:cl,dinofrozfive:ul,dinofrozsix:pl,dinofrozseven:fl,dinofrozeight:gl,dinofroztwo:ho,dinofroznine:ml,hunger:op,mia:bl,dinofrozAudio:ip,monodyAudio:sp,unityAudio:lp,hungerAudio:dp,dragonoraAudio:cp,harmonyAudio:up,electrodynamixAudio:pp,clubstepAudio:fp,theorytwoAudio:gp,theoryAudio:mp,deadlockedAudio:hp,mechaAudio:xp,nonono:bp,nononoAudio:yp},Ph=ir.map(t=>({...t,image:wa[t.image]||t.image,audio:wa[t.audio]||t.audio,video:wa[t.video]||t.video,images:Array.isArray(t.images)?t.images.map(n=>wa[n]||n):t.images,filters:Array.isArray(t.filters)?t.filters.map(n=>({...n,imageUrl:wa[n.imageUrl]||n.imageUrl})):t.filters})),so=[{id:"none",label:"Вимкнено"},{id:"grayscale",label:"Дальтонізм"},{id:"sepia",label:"Сепія"},{id:"invert",label:"Негатив"},{id:"matrix",label:"Матриця"},{id:"uv",label:"УФ-Лампа"},{id:"contrast",label:"Контраст"},{id:"saturate",label:"Насиченість"},{id:"blur",label:"Розмиття"},{id:"hue",label:"Веселка"},{id:"chaos",label:"Хаос"},{id:"ultrachaos",label:"Ультрахаос"}],jl=[{id:"cinema",label:"🎬 Кіно",config:{darkIntensity:15,filterType:"sepia",filterIntensity:20}},{id:"night",label:"🌙 Ніч",config:{darkIntensity:70,filterType:"none",filterIntensity:50}},{id:"retro",label:"📻 Ретро",config:{darkIntensity:5,filterType:"grayscale",filterIntensity:80}},{id:"acid",label:"🌈 Кислота",config:{darkIntensity:0,filterType:"hue",filterIntensity:60}}],kr={darkIntensity:0,filterType:"none",filterIntensity:50};if(typeof document<"u"){const t=document.createElement("style");t.id="visual-filters-animations",t.innerHTML=`
    @keyframes ultrachaos-anim {
      0% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }
      50% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }
      100% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }
    }
    @keyframes rainbow-anim {
      0% { filter: brightness(var(--v-bright)) hue-rotate(0deg); }
      100% { filter: brightness(var(--v-bright)) hue-rotate(360deg); }
    }
  `,document.getElementById(t.id)||document.head.appendChild(t)}var pi=t=>{if(!t)return;document.documentElement.style.transition="filter 0.4s ease-in-out";const n=100-(t.darkIntensity||0)*.6;let r=`brightness(${n}%)`;const{filterType:c,filterIntensity:l=50}=t;if(c==="ultrachaos"){const s=100+l*.6,y=100+l*2,p=100+l*1.6,m=100+l*5,f=l/50;document.documentElement.style.setProperty("--v-bright",`${n}%`),document.documentElement.style.setProperty("--v-contrast-min",`${s}%`),document.documentElement.style.setProperty("--v-contrast-max",`${y}%`),document.documentElement.style.setProperty("--v-saturate-min",`${p}%`),document.documentElement.style.setProperty("--v-saturate-max",`${m}%`),document.documentElement.style.setProperty("--v-blur-max",`${f}px`),document.documentElement.style.animation="ultrachaos-anim 4s infinite linear";return}if(c==="hue"){document.documentElement.style.setProperty("--v-bright",`${n}%`);const s=l>0?200/l:0;s>0?document.documentElement.style.animation=`rainbow-anim ${s}s infinite linear`:(document.documentElement.style.animation="none",document.documentElement.style.filter=`brightness(${n}%) hue-rotate(0deg)`);return}if(document.documentElement.style.animation="none",c==="grayscale")r+=` grayscale(${l}%)`;else if(c==="sepia")r+=` sepia(${l}%)`;else if(c==="invert"){const s=l-50;if(s>0)r+=` invert(${s*2}%)`;else if(s<0){const y=1+Math.abs(s)/50;r+=` contrast(${y*100}%) saturate(${y*100}%)`}}else c==="matrix"?r+=` hue-rotate(180deg) grayscale(${l}%)`:c==="uv"?r+=` hue-rotate(280deg) saturate(${100+l}%)`:c==="contrast"?r+=` contrast(${l*2}%)`:c==="saturate"?r+=` saturate(${l*2}%)`:c==="blur"?r+=` blur(${l/10}px)`:c==="hue"&&(r+=` hue-rotate(${l*3.6}deg)`);document.documentElement.style.filter=r},wp=t=>{const[n,r]=(0,a.useState)(kr),[c,l]=(0,a.useState)([]),s=t?.account?`visualConfig_${t.account}`:"visualConfig_guest",y=t?.account?`customPresets_${t.account}`:"customPresets_guest";(0,a.useEffect)(()=>{u.default.getItem(s).then(z=>{z&&r(z)}),u.default.getItem(y).then(z=>{l(z||[])})},[s,y]),(0,a.useEffect)(()=>{let z;if(n.filterType==="chaos"){const R=()=>{const I=so.filter(O=>!["none","chaos","ultrachaos"].includes(O.id)),b=I[Math.floor(Math.random()*I.length)],w=Math.floor(Math.random()*80)+20;pi({...n,filterType:b.id,filterIntensity:w})};R(),z=setInterval(R,Math.floor(Math.random()*2e3)+1e3)}else pi(n);return()=>clearInterval(z)},[n]);const p=(0,a.useCallback)(z=>{r(R=>{const I=typeof z=="function"?z(R):z;return u.default.setItem(s,I),I})},[s]),m=(0,a.useCallback)(()=>{p(kr),u.default.setItem(s,kr)},[s,p]),f=(0,a.useCallback)(z=>{if(!z.trim())return;const R={id:`custom_${Date.now()}`,label:`✨ ${z}`,config:{...n}};l(I=>{const b=[...I,R];return u.default.setItem(y,b),b})},[y,n]),g=(0,a.useCallback)(z=>{l(R=>{const I=R.filter(b=>b.id!==z);return u.default.setItem(y,I),I})},[y]),N=(0,a.useCallback)((z,R)=>{R.trim()&&l(I=>{const b=I.map(w=>w.id===z?{...w,label:`✨ ${R}`}:w);return u.default.setItem(y,b),b})},[y]),M=(0,a.useCallback)(z=>{l(z),u.default.setItem(y,z)},[y]);return{visualConfig:n,setVisualConfig:p,resetFilters:m,FILTERS:so,PRESETS:jl,customPresets:c,saveCustomPreset:f,deleteCustomPreset:g,updateCustomPresetName:N,reorderCustomPresets:M}},Sl=(0,a.createContext)(),xo=()=>(0,a.useContext)(Sl),vp=t=>{if(!t||!(t instanceof Element))return"";const n=[];let r=t;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r!==document.body&&r!==document.documentElement;){let c=r.nodeName.toLowerCase();if(r.id){c+="#"+r.id,n.unshift(c);break}else{let l=r.previousSibling,s=1;for(;l;)l.nodeType===Node.ELEMENT_NODE&&l.nodeName===r.nodeName&&s++,l=l.previousSibling;c+=`:nth-of-type(${s})`}n.unshift(c),r=r.parentNode}return n.join(" > ")},kp=({children:t,isDarkMode:n})=>{const[r,c]=(0,a.useState)(!1),[l,s]=(0,a.useState)(!1),[y,p]=(0,a.useState)({}),[m,f]=(0,a.useState)([]),[g,N]=(0,a.useState)(!1);(0,a.useEffect)(()=>{n?document.body.classList.add("decorator-dark-mode"):document.body.classList.remove("decorator-dark-mode")},[n]),(0,a.useEffect)(()=>{(async()=>{try{const w=await u.default.getItem("decorator_persistent");if(w!==null&&(s(w),w)){let O=await u.default.getItem("decorator_overrides");const v=await u.default.getItem("decorator_changelog");if(O){const $={};Object.keys(O).forEach(q=>{$[q]={};const U=O[q];U.light_default||U.light_hover||U.dark_default||U.dark_hover?$[q]=U:$[q].light_default={...U}}),p($)}v&&f(v)}}catch(w){console.error("Error hydrating decorator state",w)}finally{N(!0)}})()},[]),(0,a.useEffect)(()=>{g&&(l?(u.default.setItem("decorator_overrides",y),u.default.setItem("decorator_changelog",m)):(u.default.removeItem("decorator_overrides"),u.default.removeItem("decorator_changelog")),u.default.setItem("decorator_persistent",l))},[y,m,l,g]),(0,a.useEffect)(()=>{let b=document.getElementById("decorator-styles");b||(b=document.createElement("style"),b.id="decorator-styles",document.head.appendChild(b));let w="";Object.entries(y).forEach(([O,v])=>{const $=O.includes(" > ")||O.includes("#")||O.includes(":")?O:`[data-decorator-id="${O}"]`;v.light_default&&Object.keys(v.light_default).length>0&&(w+=`body:not(.decorator-dark-mode) ${$} { `,Object.entries(v.light_default).forEach(([q,U])=>{w+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`),v.light_hover&&Object.keys(v.light_hover).length>0&&(w+=`body:not(.decorator-dark-mode) ${$}:hover { `,Object.entries(v.light_hover).forEach(([q,U])=>{w+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`),v.dark_default&&Object.keys(v.dark_default).length>0&&(w+=`body.decorator-dark-mode ${$} { `,Object.entries(v.dark_default).forEach(([q,U])=>{w+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`),v.dark_hover&&Object.keys(v.dark_hover).length>0&&(w+=`body.decorator-dark-mode ${$}:hover { `,Object.entries(v.dark_hover).forEach(([q,U])=>{w+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),w+=`}
`)}),b.innerHTML=w},[y]);const M=(0,a.useCallback)((b,w,O,v,$,q="light_default")=>{p(U=>{const P=U[b]||{},V=P[q]||{};return{...U,[b]:{...P,[q]:{...V,[O]:$}}}}),f(U=>[...U,{id:Date.now()+"-"+Math.random().toString(36).slice(2,7),elementId:b,tagName:w,property:O,originalValue:v,newValue:$,mode:q,timestamp:new Date().toLocaleTimeString("uk-UA")}])},[]),z=(0,a.useCallback)(b=>{f(w=>{const O=w.find(v=>v.id===b);return O?(p(v=>{const $={...v[O.elementId]||{}},q=O.mode||"light_default",U={...$[q]||{}},P=w.filter(V=>V.elementId===O.elementId&&V.property===O.property&&(V.mode||"light_default")===q&&V.id!==b);if(P.length>0?U[O.property]=P[P.length-1].newValue:delete U[O.property],$[q]=U,Object.keys(U).length===0&&delete $[q],Object.keys($).length===0){const V={...v};return delete V[O.elementId],V}return{...v,[O.elementId]:$}}),w.filter(v=>v.id!==b)):w})},[]),R=(0,a.useCallback)(()=>{p({}),f([]),document.querySelectorAll("[data-decorator-id]").forEach(b=>{b.removeAttribute("data-decorator-id")})},[]),I=(0,a.useCallback)(b=>y[b]||{},[y]);return(0,e.jsx)(Sl.Provider,{value:{isDecoratorMode:r,setIsDecoratorMode:c,styleOverrides:y,changeLog:m,applyStyle:M,undoChange:z,resetAll:R,getOverridesForElement:I,isPersistent:l,setIsPersistent:s,isDarkMode:n},children:t})},jr=[{key:"hero",label:"Головна",path:"hero"},{key:"weather",label:"Погода",path:"weather"},{key:"map",label:"Кліматична мапа",path:"map"},{key:"aihelp",label:"Допомога ШІ",path:"aihelp"},{key:"fanart",label:"Друкарня",path:"fanart"}],jp=i.div`
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
`,Sp=Te`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`,Cp=Te`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`,Tp=Te`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,Ap=Te`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ip=i.div`
  display: flex;
  margin-left: -5px;
  gap: 3px;
`,Dp=i.button`
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
`,Mp=i.div`
  width: 32px;
  height: 32px;
  background: #1a1a1a;
  border: 1px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,zp=i.div`
  display: grid;
  align-items: center;
  flex-grow: 1;
`,Wa=i.span`
  grid-area: 1/1;
  font-weight: 800;
  transition: opacity 0.5s ease-in-out;
  opacity: ${t=>t.$show?1:0};
  font-size: ${t=>t.$isSymbol?"20px":"16px"};

  ${t=>t.$variant==="rainbow"&&qt`
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

  ${t=>t.$variant==="ultra"&&qt`
      background: linear-gradient(
        270deg,
        #ff7eb3,
        #ff758c,
        #7afcff,
        #feffb7,
        #58e2c2
      );
      background-size: 400% 400%;
      animation: ${Ap} 3s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,fi=i.div`
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
`,Sr=i.div`
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
`,Rp=i.div`
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
`,Lp=i.div`
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
  animation: ${t=>t.$isOpen?Sp:Cp} 0.4s
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
`,$p=i.button`
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
`,Ep=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Fp=i.div`
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
`,gi=i.button`
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
`,mi=i.div`
  @media (max-width: 767px) {
    display: ${t=>t.$active?"block":"none"};
  }
  @media (min-width: 768px) {
    display: block;
  }
`,hi=i.h3`
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 2px solid #ff005d;
  padding-bottom: 5px;
  display: none;
    @media (min-width: 768px) {
    display: inline-block;
  }
`,Pp=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ya=i.button`
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
`,Np=i.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 8px 5px;
  margin-bottom: 8px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
`,Op=i.button`
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
`,Cr=i.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,Ga=i.button`
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
`,Vp=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 3px;
  margin-bottom: 5px;
`,Ja=i.button`
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
`,Bp=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 5px;
`,_p=i.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`,Hp=i.input`
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
`,Up=i.button`
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
`,xi=i.button`
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
`,Kp=i.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  button:first-child {
    flex: 1;
  }
  animation: ${Tp} 0.3s ease-out forwards;
`,qp=i.button`
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
`,Wp=i.button`
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
`,Gp=i.div`
  cursor: grab;
  color: #ffb36c;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`,Jp=i.button`
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
`,Wn=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)(jp,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})},Yp=({isOpen:t,onClose:n,isDarkMode:r,siteSections:c,resetSiteSections:l,moveSiteSection:s,sectionThemes:y,hiddenSections:p,onToggleSectionVisibility:m,onToggleSectionTheme:f,onResetSectionThemes:g,onToggleTheme:N,onOpenShop:M,onOpenVip:z,onOpenSettings:R,onOpenHelp:I,onOpenOtherOptions:b,showUltra:w,onOpenInfo:O,onLogout:v,isRoutingMode:$,setIsRoutingMode:q,currentPath:U,visualConfig:P,setVisualConfig:V,onResetFilters:fe,customPresets:ae=[],onSavePreset:B,onDeletePreset:Z,onUpdatePresetName:ie,onReorderPresets:ke,loadingStrategy:xe,onSetLoadingStrategy:Ze,isStickyBgMode:Ae,onToggleStickyBg:at})=>{const{isDecoratorMode:ge,setIsDecoratorMode:Pe,changeLog:Ce,undoChange:gt,resetAll:mt,isPersistent:ht,setIsPersistent:We}=xo(),[ut,_e]=(0,a.useState)(!1),[st,vt]=(0,a.useState)(""),[Re,S]=(0,a.useState)(null),[E,ee]=(0,a.useState)(null),[de,Ee]=(0,a.useState)("nav"),Ie=ss(),De=_=>{if(typeof window>"u")return"";const re=_?`/${_}`.replace(/\/+/g,"/"):"/";return`${`${window.location.origin}${window.location.pathname}`.replace(/\/$/,"")}#${re}`},Xe=async(_,re)=>{const ce=De(re||_);if(ce)try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(ce);else{const Me=document.createElement("input");Me.value=ce,document.body.appendChild(Me),Me.select(),document.execCommand("copy"),document.body.removeChild(Me)}ee(_),window.setTimeout(()=>ee(null),1500)}catch(Me){console.error("Не вдалося скопіювати посилання секції",Me)}},ue=(_,re)=>{S(re),_.dataTransfer.effectAllowed="move",_.currentTarget.style.opacity="0.5"},kt=_=>{_.currentTarget.style.opacity="1",S(null)},xt=(_,re)=>{if(_.preventDefault(),Re===null||Re===re)return;const ce=[...ae],[Me]=ce.splice(Re,1);ce.splice(re,0,Me),ke(ce)},pt=_=>{V(re=>({...re,filterType:_}))},He=_=>{V(re=>({...re,darkIntensity:_}))},Ge=_=>{V(re=>({...re,filterIntensity:_}))};(0,a.useEffect)(()=>{if(t)_e(!0);else{const _=setTimeout(()=>_e(!1),400);return()=>clearTimeout(_)}},[t]);const bt=(_,re)=>{if(n(),$)Ie("/"+re);else{const ce=document.getElementById(_);ce?ce.scrollIntoView({behavior:"smooth",block:"start"}):_==="hero"&&window.scrollTo({top:0,behavior:"smooth"})}};return ut?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Rp,{$isOpen:t,$isRendered:ut,onClick:n,"data-decorator-ignore":"true"}),(0,e.jsxs)(Lp,{$isOpen:t,$isRendered:ut,$isDarkMode:r,"data-decorator-ignore":"true",children:[(0,e.jsx)($p,{onClick:n,$isDarkMode:r,children:"✕"}),(0,e.jsxs)(Fp,{$isDarkMode:r,children:[(0,e.jsx)(gi,{$active:de==="nav",$isDarkMode:r,onClick:()=>Ee("nav"),children:"Навігація та порядок"}),(0,e.jsx)(gi,{$active:de==="controls",$isDarkMode:r,onClick:()=>Ee("controls"),children:"Керування"})]}),(0,e.jsxs)(Ep,{children:[(0,e.jsxs)(mi,{$active:de==="nav",children:[(0,e.jsx)(hi,{children:"Навігація та порядок"}),c&&c.map((_,re)=>{const ce=De(_.path||_.key);return(0,e.jsxs)(Np,{$isDarkMode:r,children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)(Op,{$isDarkMode:r,onClick:()=>bt(_.key,_.path),children:_.label}),(0,e.jsx)(Cr,{children:(0,e.jsx)(Wn,{content:p?.includes(_.key)?"Показати секцію":"Приховати секцію",isDarkMode:r,children:(0,e.jsx)(Ga,{style:{padding:"4px 10px"},$isDarkMode:r,onClick:()=>m?.(_.key),"aria-label":p?.includes(_.key)?"Показати секцію":"Приховати секцію",disabled:!p?.includes(_.key)&&c.length-(p?.length||0)<=2,children:p?.includes(_.key)?(0,e.jsx)(id,{}):(0,e.jsx)(Td,{})})})}),(0,e.jsx)(Cr,{children:(0,e.jsx)(Wn,{content:"Змінити тему секції",isDarkMode:r,children:(0,e.jsx)(Ga,{style:{padding:"4px 10px"},$isDarkMode:r,onClick:()=>f?.(_.key),"aria-label":"Змінити тему секції",children:y?.[_.key]??r?(0,e.jsx)(Sa,{}):(0,e.jsx)(ja,{})})})}),_.key!=="hero"&&(0,e.jsxs)(Cr,{children:[(0,e.jsx)(Wn,{content:"Підняти секцію",isDarkMode:r,children:(0,e.jsx)(Ga,{$isDarkMode:r,disabled:re<=1,onClick:()=>s(re,-1),"aria-label":"Підняти секцію",children:"▲"})}),(0,e.jsx)(Wn,{content:"Опустити секцію",isDarkMode:r,children:(0,e.jsx)(Ga,{$isDarkMode:r,disabled:re===c.length-1,onClick:()=>s(re,1),"aria-label":"Опустити секцію",children:"▼"})})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px",width:"100%"},children:[(0,e.jsx)("span",{style:{fontSize:"11px",color:$?"#8a8a8a":r?"#ffb36c":"#ff005d",wordBreak:"break-all",flex:1,minWidth:0},title:ce,children:ce}),(0,e.jsx)("button",{type:"button",onClick:()=>Xe(_.key,_.path),style:{border:"none",borderRadius:"6px",padding:"4px",background:r?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)",color:r?"#fff":"#333",cursor:"pointer",fontSize:"11px",fontWeight:"600"},children:E===_.key?"✓ Скопійовано":"Копіювати посилання"})]})]},_.key)}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)("button",{onClick:g,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:r?"#333":"#eee",color:r?"#fff":"#333"},children:"Скинути теми"}),(0,e.jsx)("button",{onClick:l,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:"#990038",color:"white"},children:"Скинути порядок"})]}),p?.length>0&&(0,e.jsx)("div",{style:{marginTop:"10px",fontSize:"10px",color:r?"#fcfbfb":"#070707",fontStyle:"italic"},children:'Підказка: Приховані секції доступні через режим "Маршрутизації". Щоб залишити лише одну секцію, натисніть блок в якому зображено якір та є текст маршрутизація.'})]}),(0,e.jsxs)(mi,{$active:de==="controls",children:[(0,e.jsx)(hi,{children:"Керування"}),(0,e.jsxs)(Pp,{children:[(0,e.jsx)("li",{style:{display:"none"},children:(0,e.jsxs)(Dp,{$isUltra:w,onClick:()=>{z(),n()},children:[(0,e.jsxs)(Mp,{$isUltra:w,children:[(0,e.jsx)(Wa,{$show:!w,$variant:"rainbow",$isSymbol:!0,children:"+"}),(0,e.jsx)(Wa,{$show:w,$variant:"ultra",$isSymbol:!0,children:"♔"})]}),(0,e.jsxs)(zp,{children:[(0,e.jsx)(Wa,{$show:!w,$variant:"rainbow",children:"Стихія+"}),(0,e.jsx)(Wa,{$show:w,$variant:"ultra",children:"Стихія Ultra"})]}),(0,e.jsx)("span",{style:{fontSize:"12px",color:w?"#710097":"#ffb36c",fontWeight:"bold"},children:"➔"})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)(fi,{$isDarkMode:r,onClick:()=>q(!$),children:[(0,e.jsx)("span",{className:"icon",children:$?(0,e.jsx)(Vd,{}):(0,e.jsx)(ec,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:$?"Маршрутизація":"Навігація"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:$?"Зміна URL":"Плавний скрол"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:$?"При натиску ввімкнеться ремим навігації":"При натиску ввімкнеться ремим маршрутизації"})]}),(0,e.jsx)(Sr,{$active:$})]})}),(0,e.jsxs)("li",{children:[(0,e.jsxs)(fi,{$isDarkMode:r,onClick:()=>Pe(!ge),children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(is,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:"Режим Декоратора"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Редагування стилів сторінки"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Необхідні незначні знання CSS"})]}),(0,e.jsx)(Sr,{$active:ge})]}),ge&&(0,e.jsxs)("div",{style:{padding:"10px",background:r?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",borderRadius:"10px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Зберігати після перезавантаження:"}),(0,e.jsx)(Sr,{$active:ht,onClick:()=>We(!ht),style:{transform:"scale(0.8)",cursor:"pointer"}})]}),(0,e.jsxs)("div",{style:{fontSize:"12px",fontWeight:"bold",marginBottom:"10px",color:r?"#ffb36c":"#ff005d"},children:["Журнал змін (",Ce.length,")"]}),Ce.length>0?(0,e.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"5px"},children:Ce.map(_=>{let re="";return _.mode==="light_default"?re="☀️ ":_.mode==="light_hover"?re="☀️👆 ":_.mode==="dark_default"?re="🌙 ":_.mode==="dark_hover"&&(re="🌙👆 "),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px",background:r?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.5)",padding:"5px",borderRadius:"5px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{opacity:.8,marginRight:"4px"},children:re}),(0,e.jsx)("span",{style:{color:"#ffb36c"},children:_.tagName})," ",_.property,":"," ",(0,e.jsx)("span",{style:{opacity:.7},children:_.originalValue||"none"})," ","➔ ",(0,e.jsx)("b",{children:_.newValue})]}),(0,e.jsx)("button",{onClick:()=>gt(_.id),style:{background:"#ff4d4d",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",padding:"2px 6px",fontSize:"10px",marginLeft:"5px"},children:"Відмінити"})]},_.id)})}):(0,e.jsx)("div",{style:{fontSize:"11px",opacity:.7,fontStyle:"italic"},children:"Змін ще немає"}),Ce.length>0&&(0,e.jsx)("button",{onClick:mt,style:{width:"100%",background:"transparent",color:"#ff4d4d",border:"1px solid #ff4d4d",borderRadius:"5px",marginTop:"10px",padding:"5px",fontSize:"11px",cursor:"pointer"},children:"Скинути всі зміни"})]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d",marginBottom:"5px"},children:"Режим завантаження"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Wn,{content:"Завантажує все відразу при старті сайту",isDarkMode:r,children:(0,e.jsx)(Ja,{$active:xe==="eager",$isDarkMode:r,onClick:()=>Ze("eager"),"aria-label":"Завантажує все відразу при старті сайту",children:"Повний"})}),(0,e.jsx)(Wn,{content:"Завантажує важкі модулі через 8 секунд",isDarkMode:r,children:(0,e.jsx)(Ja,{$active:xe==="delayed",$isDarkMode:r,onClick:()=>Ze("delayed"),"aria-label":"Завантажує важкі модулі через 8 секунд",children:"Оптимальний"})}),(0,e.jsx)(Wn,{content:"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",isDarkMode:r,children:(0,e.jsx)(Ja,{$active:xe==="lazy",$isDarkMode:r,onClick:()=>Ze("lazy"),"aria-label":"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",children:"Економний"})})]})]})}),(0,e.jsxs)("li",{style:{display:"flex"},children:[(0,e.jsxs)(ya,{$isDarkMode:r,onClick:N,children:["Змінити тему? ",(0,e.jsx)("span",{className:"icon",children:r?(0,e.jsx)(ja,{}):(0,e.jsx)(Sa,{})})]}),(0,e.jsxs)(ya,{$isDarkMode:r,onClick:at,style:{color:Ae?"#ff005d":void 0},children:[Ae?"Вимкнути":"Ввімкнути"," липкий фон?"]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Зменшення Яскравості"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:P.darkIntensity||0,onChange:_=>He(Number(_.target.value)),style:{width:"90%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[P.darkIntensity||0,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Фільтри"}),(0,e.jsx)(Vp,{$isDarkMode:r,children:so.map(_=>(0,e.jsx)(Ja,{$active:P.filterType===_.id,$isDarkMode:r,onClick:()=>pt(_.id),children:_.label},_.id))})]})}),P.filterType!=="none"&&(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"⚡ Сила ефекту"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:P.filterIntensity||50,onChange:_=>Ge(Number(_.target.value)),style:{width:"92%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[P.filterIntensity||50,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Швидкі стилі"}),(0,e.jsxs)(Bp,{children:[jl.map(_=>(0,e.jsx)(xi,{$isDarkMode:r,onClick:()=>V(_.config),children:_.label},_.id)),ae.map((_,re)=>(0,e.jsxs)(Kp,{draggable:!0,onDragStart:ce=>ue(ce,re),onDragEnd:kt,onDragOver:ce=>ce.preventDefault(),onDrop:ce=>xt(ce,re),children:[(0,e.jsx)(Gp,{"aria-label":"Перетягніть для сортування",children:"⠿"}),(0,e.jsx)(xi,{$isDarkMode:r,style:{borderColor:"#7afcff",color:r?"#7afcff":"#006666"},onClick:()=>V(_.config),children:_.label}),(0,e.jsx)(qp,{onClick:()=>{const ce=_.label.replace("✨ ",""),Me=window.prompt("Введіть нову назву пресета:",ce);Me&&ie(_.id,Me)},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(Wp,{onClick:()=>Z(_.id),"aria-label":"Видалити пресет",children:"×"})]},_.id))]}),(0,e.jsxs)(_p,{children:[(0,e.jsx)(Hp,{$isDarkMode:r,placeholder:"Назва пресета...",value:st,onChange:_=>vt(_.target.value),maxLength:15}),(0,e.jsx)(Up,{onClick:()=>{st.trim()&&(B(st),vt(""))},children:"Зберегти"})]})]})}),(0,e.jsx)("li",{children:(0,e.jsx)(Jp,{onClick:fe,children:"Скинути всі фільтри ↺"})}),(0,e.jsxs)(Ip,{children:[(0,e.jsx)("li",{children:(0,e.jsx)(ya,{style:{display:"none"},$isDarkMode:r,onClick:()=>{M(),n()},children:"Магазин"})}),(0,e.jsx)("li",{children:(0,e.jsx)(ya,{$isDarkMode:r,onClick:()=>{b(),n()},children:"Фонова музика"})}),(0,e.jsx)("li",{children:(0,e.jsx)(ya,{$isDarkMode:r,onClick:()=>{R(),n()},children:"Налаштування"})}),(0,e.jsx)("li",{children:(0,e.jsx)(ya,{$isDarkMode:r,onClick:()=>{I(),n()},children:"Навчання"})}),(0,e.jsx)("li",{})]})]})]})]})]})]}):null},vn="/assets/relax-Dn2PcHdb.mp3",Zp="/assets/bell-B5cBbKiy.mp3",Xp="/assets/paper-CyM37wYo.mp3",Qp="/assets/concierge-ItJSby-8.mp3",e0=i.div`
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
`,t0=Te`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,n0=Te`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,a0=i.div`
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
  animation: ${n0} 0.8s ease-out 4.3s both;
  margin: 0;
`,r0=i.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`,Bt=i.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  align-items: center;
  justify-content: center;
  padding: 2px;
  flex-shrink: 0;
`,Gt=i.span`
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

  ${t=>t.$uColor?.includes("linear")?qt`
        background: ${t.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${t0} 5s ease infinite;
      `:`color: ${t.$uColor||"inherit"};`}
`;var bi=i.img`
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
`,o0=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,i0=i.button`
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
`,s0=i.div`
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
`,l0=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,d0=i.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`,c0=i.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 2px;
`,yi=i.div`
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
`,u0=i.div`
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
`,Tr=i.label`
  font-size: 11px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,wi=i.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${t=>t.$isDarkMode?"#ffb36c":"#007bff"};
`,p0=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`,f0=i.button`
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
`,Et=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)(e0,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})},g0=({sfxVolume:t=.2,onOpenLogin:n,onOpenRegister:r,onOpenSettings:c,onOpenVip:l,onOpenShop:s,onOpenHelp:y,onOpenOtherOptions:p,onOpenInfo:m,isInfoOpen:f,isDarkMode:g,toggleTheme:N,isStickyBgMode:M,setIsStickyBgMode:z,sectionThemes:R,hiddenSections:I,onToggleSectionVisibility:b,onToggleSectionTheme:w,onResetSectionThemes:O,onOpenAchievements:v,currentAvatar:$,onLogout:q,user:U,siteSections:P,moveSiteSection:V,resetSiteSections:fe,isRoutingMode:ae,setIsRoutingMode:B,currentPath:Z,setIsFsActive:ie,loadingStrategy:ke,onSetLoadingStrategy:xe})=>{const{registerRef:Ze}=Ea?.()||{registerRef:()=>{}},[Ae,at]=(0,a.useState)(!1),[ge,Pe]=(0,a.useState)(!1),[Ce,gt]=(0,a.useState)(!1),mt=U?.avatar||$||"data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",ht=oe=>{oe.currentTarget.onerror=null,oe.currentTarget.src=io},[We,ut]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!We)return;const oe=Le=>{const Je=document.getElementById("header-profile-modal"),T=document.getElementById("header-profile-button");Je&&!Je.contains(Le.target)&&T&&!T.contains(Le.target)&&ut(!1)};return document.addEventListener("mousedown",oe),()=>document.removeEventListener("mousedown",oe)},[We]);const{visualConfig:_e,setVisualConfig:st,resetFilters:vt,FILTERS:Re,PRESETS:S,customPresets:E,saveCustomPreset:ee,deleteCustomPreset:de,updateCustomPresetName:Ee,reorderCustomPresets:Ie}=wp(U);(0,a.useEffect)(()=>{const oe=setInterval(()=>at(Le=>!Le),3e3);return()=>clearInterval(oe)},[]);const De=oe=>{const Le=new Audio(oe);Le.volume=t,Le.play().catch(()=>{})},Xe=()=>{De(Zp),N()},ue=()=>{De(Xp),Pe(!0)},kt=()=>{De(Qp),z(oe=>!oe)},xt=()=>{De(vn),gt(oe=>!oe)},pt=()=>{De(vn),y&&y()},He=()=>{De(vn),s&&s()},Ge=()=>{De(vn),p&&p()},bt=()=>{De(vn),c&&c()},_=()=>{De(vn),q&&q()},re=()=>{De(vn),n&&n()},ce=()=>{De(vn),r&&r()},Me=oe=>{De(vn),st(Le=>({...Le,filterType:oe}))},Qe=oe=>{De(vn),st(oe)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(a0,{$isDarkMode:g,$isStickyBgMode:M,"data-decorator-ignore":"true",children:[(0,e.jsx)(r0,{children:U?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(yi,{ref:oe=>Ze("headerBgTheme",oe),children:[(0,e.jsx)(Et,{content:"Змінити тему",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:Xe,$isDarkMode:g,"aria-label":"Змінити тему",children:(0,e.jsx)(Gt,{style:{fontSize:"19px"},children:g?(0,e.jsx)(ja,{}):(0,e.jsx)(Sa,{})})})}),(0,e.jsx)(Et,{content:"Фон на увесь сайт",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:kt,$isDarkMode:g,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Gt,{children:(0,e.jsx)(Jo,{style:{color:M?"#ff005d":"inherit"}})})})}),(0,e.jsx)(Et,{content:"Налаштування вигляду",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:xt,$isDarkMode:g,"aria-label":"Налаштування вигляду",children:(0,e.jsx)(Gt,{style:{marginTop:"2px",fontSize:"24px"},children:(0,e.jsx)(Ko,{})})})}),(0,e.jsx)(Et,{content:"Допомога з сайтом",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:pt,$isDarkMode:g,"aria-label":"Допомога з сайтом",children:(0,e.jsx)(Gt,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(Et,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:He,$isDarkMode:g,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(Wo,{})})}),(0,e.jsx)(Et,{content:"Інші опції та фонова музика",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:Ge,$isDarkMode:g,"aria-label":"Інші опції та фонова музика",children:(0,e.jsx)(Gt,{style:{fontSize:"19px",marginTop:"2px"},children:(0,e.jsx)(qo,{})})})}),(0,e.jsx)(Et,{content:"Налаштування",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:bt,$isDarkMode:g,"aria-label":"Налаштування",children:(0,e.jsx)(Gt,{children:(0,e.jsx)(os,{})})})}),(0,e.jsx)(Et,{content:"Вихід з акаунта",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:_,$isDarkMode:g,"aria-label":"Вихід з акаунта",children:(0,e.jsx)(Gt,{children:(0,e.jsx)(Ql,{})})})}),(0,e.jsx)(Et,{content:"Відкрити меню",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:ue,$isDarkMode:g,"aria-label":"Відкрити меню",children:(0,e.jsx)(Gt,{children:"☰"})})})]}),(0,e.jsxs)(o0,{children:[(0,e.jsx)(Et,{content:"Ваш профіль",isDarkMode:g,children:(0,e.jsx)(i0,{id:"header-profile-button",$isDarkMode:g,onClick:()=>ut(oe=>!oe),"aria-label":"Профіль користувача",children:(0,e.jsx)(bi,{src:mt,onError:ht,$bColor:U.borderColor,style:{width:"33px",height:"33px"}})})}),We&&(0,e.jsx)(s0,{id:"header-profile-modal",$isDarkMode:g,children:(0,e.jsxs)(l0,{children:[(0,e.jsx)(bi,{src:mt,onError:ht,$bColor:U.borderColor,style:{width:"42px",height:"42px"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)(c0,{children:"Профіль"}),(0,e.jsxs)(d0,{children:["Ваше ім'я: ",U.firstName]})]})]})})]})]}):(0,e.jsxs)(yi,{ref:oe=>Ze("headerBgTheme",oe),children:[(0,e.jsx)(Et,{content:"Змінити тему",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:Xe,$isDarkMode:g,"aria-label":"Змінити тему",children:(0,e.jsx)(Gt,{style:{fontSize:"18px"},children:g?(0,e.jsx)(ja,{}):(0,e.jsx)(Sa,{})})})}),(0,e.jsx)(Et,{content:"Фон на увесь сайт",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:kt,$isDarkMode:g,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Gt,{children:(0,e.jsx)(Jo,{style:{color:M?"#ff005d":"inherit"}})})})}),(0,e.jsx)(Et,{content:"Налаштування вигляду",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:xt,$isDarkMode:g,"aria-label":"Налаштування вигляду",children:(0,e.jsx)(Gt,{children:(0,e.jsx)(Ko,{})})})}),(0,e.jsx)(Et,{content:"Навчання",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:pt,$isDarkMode:g,"aria-label":"Навчання",children:(0,e.jsx)(Gt,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(Et,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:He,$isDarkMode:g,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(Wo,{})})}),(0,e.jsx)(Et,{content:"Інші опції",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:Ge,$isDarkMode:g,"aria-label":"Інші опції",children:(0,e.jsx)(Gt,{children:(0,e.jsx)(qo,{})})})}),(0,e.jsx)(Et,{content:"Відкрити меню",isDarkMode:g,children:(0,e.jsx)(Bt,{onClick:ue,$isDarkMode:g,"aria-label":"Відкрити меню",children:(0,e.jsx)(Gt,{children:"☰"})})}),(0,e.jsx)("button",{onClick:re,style:{fontSize:"11px",cursor:"pointer",background:"none",border:"none",textDecoration:"underline",display:"none",color:g?"#fff":"#000"},children:"Вхід"}),(0,e.jsx)("button",{onClick:ce,style:{fontSize:"14px",cursor:"pointer",background:"none",border:"none",marginRight:"15px",textDecoration:"underline",color:g?"#fff":"#000"},children:"Акаунт"})]})}),Ce&&(0,e.jsxs)(u0,{$isDarkMode:g,children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)(Tr,{$isDarkMode:g,children:["Яскравість ",(0,e.jsxs)("span",{children:[_e.darkIntensity,"%"]})]}),(0,e.jsx)(wi,{type:"range",min:"0",max:"100",value:_e.darkIntensity,onChange:oe=>st(Le=>({...Le,darkIntensity:Number(oe.target.value)})),$isDarkMode:g})]}),(0,e.jsx)(p0,{children:Re.map(oe=>(0,e.jsx)(f0,{$active:_e.filterType===oe.id,$isDarkMode:g,onClick:()=>Me(oe.id),children:oe.label},oe.id))}),_e.filterType!=="none"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(Tr,{$isDarkMode:g,children:["Сила ефекту ",(0,e.jsxs)("span",{children:[_e.filterIntensity,"%"]})]}),(0,e.jsx)(wi,{type:"range",min:"0",max:"100",value:_e.filterIntensity,onChange:oe=>st(Le=>({...Le,filterIntensity:Number(oe.target.value)})),$isDarkMode:g})]}),(0,e.jsxs)("div",{style:{marginTop:"5px"},children:[(0,e.jsx)(Tr,{$isDarkMode:g,style:{marginBottom:"8px"},children:"Стилі"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[S.map(oe=>(0,e.jsx)("button",{style:{background:"transparent",border:"1px solid #ffb36c",color:g?"#ffb36c":"#333",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer"},onClick:()=>Qe(oe.config),children:oe.label},oe.id)),E.map(oe=>(0,e.jsx)("button",{style:{background:"rgba(255, 179, 108, 0.1)",border:"1px solid #7afcff",color:g?"#7afcff":"#006666",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis"},onClick:()=>Qe(oe.config),children:oe.label},oe.id))]})]})]})]}),(0,e.jsx)(Yp,{isOpen:ge,onClose:()=>Pe(!1),isDarkMode:g,siteSections:P,moveSiteSection:V,resetSiteSections:fe,sectionThemes:R,hiddenSections:I,onToggleSectionVisibility:b,onToggleSectionTheme:w,onResetSectionThemes:O,onToggleTheme:Xe,onOpenShop:He,onOpenVip:l,onOpenAchievements:v,showUltra:Ae,onOpenSettings:bt,onOpenHelp:pt,onOpenInfo:m,onOpenOtherOptions:Ge,onLogout:_,isRoutingMode:ae,setIsRoutingMode:B,currentPath:Z,visualConfig:_e,setVisualConfig:st,onResetFilters:vt,customPresets:E,onSavePreset:ee,onDeletePreset:de,onUpdatePresetName:Ee,onReorderPresets:Ie,setIsFsActive:ie,loadingStrategy:ke,onSetLoadingStrategy:xe,isStickyBgMode:M,onToggleStickyBg:kt})]})},Cl=$a(ac()),m0="/assets/planes-jETY8OKB.webp",h0="/assets/meridian-BmSGwtRn.webp",Tl="/assets/castle-DO6W3_-e.webp",Al="/assets/herotext-e_tt891I.webp",vi=JSON.parse(`[{"id":1,"title":"Метеофор (Gismeteo)","url":"https://meteofor.com.ua/","snippet":"Популярний український метеосайт.\\nПримітка: Містить новини пов'язані з політикою.\\nПостачальник: Uanet / Gismeteo\\nДата випуску: Грудень 1998 року","buttonText":"Подивитись погоду","images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxYt4fP3qDMhaY8ZMuec1u8XnEAqFuykvaQlICB7TSg&s=10"],"tags":["погода","прогноз","україна"]},{"id":2,"title":"Sinoptik — Погода в Україні","url":"https://sinoptik.ua/","snippet":"Погода на 7 днів, 10 днів та місяць для вашого міста.\\nПостачальник: Ukr.net\\nДата випуску: квітень 2006 року","buttonText":"Подивитись погоду","tags":["погода","синоптик","тиждень"],"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFgFFBCFHEgWc0pOHX3rHIIO9CapUlNIIZa6Ve7gl4A&s=10"]},{"id":3,"title":"YouTube","url":"https://www.youtube.com/","snippet":"Слухайте улюблену музику та дивіться відео під час перегляду погоди. Підпишись на 'SlivkiShow' та 'TheTurkeyStudio', будь ласка :)\\nАвтори: Стів Чен, Чад Герлі та Джавед Карім\\nТеперішній власник: Google / Alphabet Inc.\\nДата випуску: 14 лютого 2005 року(Викуплено Google 9 жовтня 2006 року)","buttonText":"Подивишся відео?","images":["planes"],"tags":["музика","відео"]},{"id":4,"title":"Aurora Hills: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk","snippet":"Ласкаво просимо до Аврора-Гіллз!\\n\\nРозташоване в глибині Аппалачів, містечко Аврора-Гіллз колись славилося своєю розвиненою промисловістю та мальовничими краєвидами. Завдяки багатим природним ресурсам регіону Аврора-Гіллз мало всі шанси стати одним із найзаможніших міст штату.\\n\\nОднак усе не так, як здається на перший погляд. Протягом останніх кількох років регіон сколихнула низка загадкових зникнень місцевих жителів і туристів, що спричинило масовий відтік населення з цього містечка. Тепер, у жовтні 1981 року, Аврора-Гіллз — лише тінь того, чим воно було колись; від колишнього процвітання майже нічого не залишилося.\\n\\nВам, як рейнджеру національного парку, належить розслідувати ці зникнення та знайти відповіді на запитання, що роками не давали спокою місцевим жителям. Чому за останні пів року кількість зникнень зросла? Чому не вдається знайти жодних слідів тих, хто зник безвісти? І, що найважливіше: хто чи що стоїть за всім цим? Саме вам доведеться вирушити вглиб національного парку, щоб розкрити таємниці Аврора-Гіллз...\\nВаші ставки: На основі реальних подій чи неймовірна уява?\\nДата випуску: 16 квітня 2024 року\\nПостачальник: NovaSoft Interactive","buttonText":"Завантажити гру","tags":["гра","горор","пригоди"],"youtubeTrailer":"https://www.youtube.com/embed/NsOV7eBWCfg","images":["https://play-lh.googleusercontent.com/JrzlwlllVs2WSAz3E0MM7fL-sym7E3bWO-c7689e-p1nqLjY6EWjE53zWfwXULleM1qxzDRjls3MNjK6Dhnkjw=w5120-h2880-rw","https://play-lh.googleusercontent.com/cndOTOCfDAHOXq87M-UEi26kPOg522GyHnqSKGnpwuUVTjkVXnBbVxWGjpSH6fAotiGJMPtD8MNwvwXxrEUjbQ=w1052-h592-rw","https://play-lh.googleusercontent.com/88Y_AW0zOqtcsL5fl5Lvv-il_0GPeG1TSk1zccYUfbpVjFvF_Q-MKZShoJohsb5Vmgu9P_V0kcq6aeiXh6hC1KA=w1052-h592-rw"]},{"id":5,"title":"Aurora Hills: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch2&hl=uk","snippet":"Ранок 6 жовтня 1981 року розпочався як і будь-який інший: пробудження від неспокійного сну, підготовка до майбутнього дня та поїздка до станції рейнджерів, де ви працювали останні 11 років. Аврора-Гіллз колись була тихою громадою, розташованою в горах Аппалачів, але серія зникнень майже зруйнувала цю безтурботну атмосферу. Лише відчуття спустошення пронизує навколишнє середовище, коли ви проїжджаєте через нині занедбане маленьке містечко.\\n\\nДжен не була на станції рейнджерів, коли ви прибули того ранку. Будучи єдиним іншим рейнджером парку, вона любить рано вставати, і до того часу, як ви прибули, вона вже поїхала до одного з численних закритих пішохідних маршрутів, щоб розпочати пошуки зниклих безвісти людей. Слідуючи її нотаткам, ви звертаєте з головної стежки, щоб зустрітися з нею та дослідити віддалені частини національного парку. Однак, коли ви знаходите її табір, ваші найгірші побоювання справджуються: місце розграбовано, її спорядження розкидано по всьому табору, її намет розірвано, а Джен ніде не видно.\\n\\nНемає часу повертатися назад, вже полудень, і сонце сідає рано в цю пору року. Єдине, що може бути гірше, ніж блукати лісом на самоті, це незважаючи на те, щоб пройти його вночі. Ви не можете покинути Джен зараз, не тоді, коли слід такий свіжий. Тепер у вас немає іншого вибору, окрім як заглибитися в незвідані частини національного парку, ті частини, які перелякані містяни перетворили на місцеві міські легенди. Вам краще піти швидше, можливо, у вас ніколи не буде кращого шансу розкрити темну історію Аврора-Гіллз...\\nДата випуску: 1 березня 2026 року\\nПостачальник: NovaSoft Interactive","buttonText":"Хто чи що викрадає людей?","youtubeTrailer":"https://www.youtube.com/embed/1ZqB0GZA_9c","tags":["гра","горор","пригоди"],"images":["https://play-lh.googleusercontent.com/lO4JOlv9mQttad-XCiiccy0egm3nJTHgxqoXyxTeN30tx3NxfOlvgSuXqY0sfimQPrh3k3aUySbKxoWsZ_NaYA=w1052-h592-rw","https://play-lh.googleusercontent.com/Aybi7U6MYW9PG314QPC2SDYkpJ5Umzr897Qwv84UygmbPGfclLy_luZxAqSWxJuwVmPSvaE5w_gN2OXIuHZVRQ=w1052-h592-rw","https://play-lh.googleusercontent.com/Evd_zcKkzaz1KOS-2rwqNlXl1k6f43OD_U-pn8amx5o1apN7SyGWa9a-D39cvrPZHfmgLRKR7Czlm4CYz4oXNw=w1052-h592-rw"]},{"id":6,"title":"Prometheus","url":"https://prometheus.org.ua/","snippet":"Найбільша українська платформа масових відкритих онлайн-курсів.\\nПостачальники: Іван Примаченко, Олексій Молчановський\\nДата випуску: 15 жовтня 2014 року","buttonText":"Записатись на курс","tags":["освіта","курси","корисно"]},{"id":7,"title":"Gemini","url":"https://gemini.google.com/","snippet":"Професійний ШІ асистент для аналізу тексту, зображень, відео та аудіо. І може їх створювати.\\nПостачальник: Google\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":8,"title":"DeepL Translator","url":"https://www.deepl.com/","snippet":"Один із найточніших онлайн-перекладачів на основі штучного інтелекту.\\nПостачальник: DeepL SE (Ярослав Кутиловський)\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":9,"title":"Coursera","url":"https://www.coursera.org/","snippet":"Онлайн-курси від найкращих університетів та компаній світу.\\nПостачальники: Ендрю Ин, Дафна Коллер\\nДата випуску: 18 квітня 2012 року","buttonText":"Записатись на курс","tags":["освіта","курси","саморозвиток"]},{"id":10,"title":"Duolingo","url":"https://www.duolingo.com/","snippet":"Опановуйте нові мови з найпопулярнішим навчальним додатком у світі! Duolingo — це безкоштовний додаток для вивчення понад 40 мов за допомогою веселих коротких уроків. Практикуйте говоріння, читання, слухання й письмо та вдосконалюйте свої лексичні й граматичні навички.\\nДодаток Duolingo, розроблений експертами з вивчення мови, люблять сотні мільйонів людей по всьому світу. Він допомагає підготуватися до живого спілкування іспанською, французькою, китайською, італійською, німецькою, англійською та багатьма іншими мовами.\\nХоч би з якою метою ви вивчали мову — для подорожей, навчання, кар’єри, спілкування з близькими чи тренування мозку, — вам неодмінно сподобається робити це з Duolingo.\\nЯкі ж переваги Duolingo?\\n• Опановувати мову з Duolingo цікаво та ефективно. Уроки в ігровій формі та веселі персонажі допоможуть вам навчитися впевнено розмовляти, читати, слухати та писати іноземною.\\n• Duolingo справді працює. Створена експертами з вивчення мови, методика Duolingo розроблена так, щоб вивчене закріплювалося в довготривалій пам’яті.\\n• У вас є змога відстежувати свій прогрес. А досягнути поставлених цілей і зробити навчання щоденною звичкою допоможуть веселі винагороди та досягнення!\\n• Ви навчаєтеся разом із понад 500 мільйонами людей з усього світу. Змагайтеся з іншими за переможні місця на дошках пошани, щоб підтримувати інтерес до навчання.\\n• Усі мовні курси безкоштовні. Вивчайте італійську, португальську, турецьку, нідерландську, ірландську, датську, шведську, українську, есперанто, польську, грецьку, угорську, норвезьку, іврит, валлійську, арабську, латинську, гавайську, шотландську ґельську, в’єтнамську, корейську, японську, англійську й навіть високу валірійську! І це не весь список!\\nОсь що кажуть у світі про Duolingo ⭐️⭐️⭐️⭐️⭐️:\\n«Вибір редакції й “найкращий серед найкращих”», — Google Play\\n«Безперечно, найкращий додаток для вивчення мов», — The Wall Street Journal\\n«Ці безкоштовні додаток і вебсайт — одні з наефективніших способів опановувати мову, які мені траплялися… уроки складаються з коротких цікавих завдань, як-от говоріння, переклад чи вибір правильної відповіді, тому я залюбки повертаюсь до них знов і знов», — The New York Times\\n«Duolingo може стати майбутнім освіти», — TIME Magazine\\n«...Duolingo — це веселий, милий і цікавий додаток», — Forbes\\nЯкщо ви любите Duolingo, спробуйте Super Duolingo протягом 14 днів безкоштовно! Опановуйте мову швидко, без реклами й отримуючи корисні бонуси, як-от необмежені серця та щомісячне відновлення відрізка.\\nНадсилайте свої відгуки на адресу android@duolingo.com\\nВебверсія доступна за адресою https://www.duolingo.com\\nПолітика конфіденційності: https://www.duolingo.com/privacy\\nДоміно: Доктор все погано, додаток чудовий, але мови індиків немає, я людей розумію, а вони мене ні... Доктор: Може це на краще, секрети замку ти не видаси :)\\nПостачальники: Луїс фон Ан, Северин Гакер\\nДата випуску: 29 травня 2013 року","buttonText":"Вчити мови","tags":["освіта","мови","корисно"]},{"id":11,"title":"Wikipedia (Українська)","url":"https://uk.wikipedia.org/","snippet":"Вільна енциклопедія, яку може редагувати кожен.\\nІлон Маск пропонував їм багато грошей, якщо вони перейменуються... Чомусь відмовились...\\nПостачальник: Wikimedia Foundation\\nДата випуску: 30 січня 2004 року","buttonText":"Читати і редагувати","youtubeTrailer":"https://www.youtube.com/watch?v=6UkFHYqVsbc","images":[],"tags":["енциклопедія","знання","довідник"]},{"id":12,"title":"Canva","url":"https://www.canva.com/","snippet":"Простий онлайн-інструмент для створення дизайну, презентацій та графіки.\\nЯкщо відкинути 3тю букву, буде кава :) Рифма від Кейт для пісні Полякової: Буде Кава, яку вип'є леді Гага!\\nПостачальник: Canva Pty Ltd (Мелані Перкінс, Кліфф Обрехт, Камерон Адамс)\\nДата випуску: 1 січня 2013 року","buttonText":"Створити дизайн","tags":["дизайн","інструменти","графіка"]},{"id":13,"title":"Photopea","url":"https://www.photopea.com/","snippet":"Безкоштовний онлайн-редактор зображень, аналог Photoshop.\\nМій перший дизайн: почник, з якого зникає шматок :)\\nПостачальник: Іван Куцкір\\nДата випуску: 14 вересня 2013 року","buttonText":"Редагувати фото","tags":["дизайн","фото","інструменти"]},{"id":14,"title":"Notion","url":"https://www.notion.so/","snippet":"Універсальний робочий простір для нотаток, баз даних та керування проєктами.\\nПостачальник: Notion Labs Inc. (Іван Чжао, Саймон Ласт)\\nДата випуску: березень 2016 року","buttonText":"Організувати роботу","tags":["продуктивність","нотатки","робота"]},{"id":15,"title":"Trello","url":"https://trello.com/","snippet":"Популярний інструмент для управління проєктами на основі канбан-дошок.\\nПостачальник: Atlassian (Джоел Спольскі, Майкл Прайор)\\nДата випуску: 13 вересня 2011 року","buttonText":"Керувати завданнями","tags":["продуктивність","менеджмент","робота"]},{"id":16,"title":"GitHub","url":"https://github.com/","snippet":"Найбільший вебсервіс для спільної розробки програмного забезпечення. До речі, ми теж там :)\\nПостачальник: GitHub Inc. / Microsoft\\nДата випуску: 10 квітня 2008 року","buttonText":"Програмувати","tags":["it","програмування","код"]},{"id":17,"title":"Stack Overflow","url":"https://stackoverflow.com/","snippet":"Спільнота для програмістів, де можна знайти відповіді на технічні питання.\\nПостачальник: Stack Exchange Inc. (Джоел Спольскі, Джефф Атвуд)\\nДата випуску: 15 вересня 2008 року","buttonText":"Знайти рішення","tags":["it","програмування","допомога"]},{"id":18,"title":"Wolfram Alpha","url":"https://www.wolframalpha.com/","snippet":"Обчислювальна система, що видає відповіді на складні математичні та наукові питання. Прикольний калькулятор :)\\nПостачальник: Wolfram Research (Стівен Вольфрам)\\nДата випуску: 18 травня 2009 року","buttonText":"Обчислити","tags":["наука","математика","корисно"]},{"id":19,"title":"Google Scholar","url":"https://scholar.google.com/","snippet":"Пошукова система для наукової літератури та публікацій.\\nПостачальник: Google / Alphabet Inc. (Анураг Ачар'я)\\nДата випуску: 20 листопада 2004 року","buttonText":"Шукати статті","tags":["наука","освіта","пошук"]},{"id":20,"title":"TED","url":"https://www.ted.com/","snippet":"Відеолекції від видатних людей на теми технологій, розваг та дизайну.\\nПочатковий власник: Річард Сол Вурмен та Гаррі Маркс\\nПочатковий автор: TED Conferences LLC / Sapling Foundation (Кріс Андерсон)\\nДата випуску: 23 лютого 1984 року","buttonText":"Дивитись лекції","tags":["освіта","відео","натхнення"]},{"id":21,"title":"Internet Archive","url":"https://archive.org/","snippet":"Некомерційна бібліотека мільйонів безкоштовних книг, фільмів, програм та історії вебсайтів (Wayback Machine).\\nПостачальник: Брюстер Кейл\\nДата випуску: 10 травня 1996 року","buttonText":"Шукати в архіві","tags":["історія","архів","книги"]},{"id":22,"title":"Khan Academy","url":"https://uk.khanacademy.org/","snippet":"Безкоштовні мікролекції з математики, історії, медицини тощо.\\nПостачальник: Салман Хан (Salman Khan)\\nДата випуску: вересень 2006 року","buttonText":"Навчатися","tags":["освіта","школа","корисно"]},{"id":23,"title":"W3Schools","url":"https://www.w3schools.com/","snippet":"Найбільший вебсайт для вивчення веб-технологій (HTML, CSS, JavaScript).\\nПостачальник: Refsnes Data\\nДата випуску: 1998 рік","buttonText":"Вчити код","tags":["it","програмування","навчання"]},{"id":24,"title":"Figma","url":"https://www.figma.com/","snippet":"Онлайн-редактор для створення інтерфейсів та прототипування.\\nУлюблений інструмент дизайнерів (і ні, це не те, про що ви подумали за першими трьома буквами :)\\nПостачальник: Ділан Філд та Еван Воллес (Dylan Field, Evan Wallace)\\nДата випуску: 27 вересня 2016 року","buttonText":"Створювати дизайн","tags":["дизайн","інструменти","it"]},{"id":25,"title":"Miro","url":"https://miro.com/","snippet":"Віртуальна дошка для спільної роботи команд, мозкових штурмів та схем.\\nПостачальник: Андрій Хусид та Олег Шардин\\nДата випуску: 2011 рік","buttonText":"Малювати схеми","tags":["продуктивність","робота","інструменти"]},{"id":26,"title":"Grammarly","url":"https://www.grammarly.com/","snippet":"Онлайн-сервіс для перевірки граматики та стилістики текстів (англійською).\\nПостачальник: Олексій Шевченко, Макс Литвин, Дмитро Лідер\\nДата випуску: 1 липня 2009 року","buttonText":"Перевірити текст","tags":["інструменти","письмо","англійська"]},{"id":27,"title":"Todoist","url":"https://todoist.com/","snippet":"Один із найкращих додатків для ведення списків справ (To-Do list).\\nПостачальник: Doist Ltd. (Amir Salihefendıć)\\nДата випуску: 1 січня 2007 року","buttonText":"Планувати","tags":["продуктивність","планування","корисно"]},{"id":28,"title":"Flightradar24","url":"https://www.flightradar24.com/","snippet":"Сервіс для відстеження авіаперельотів у реальному часі по всьому світу.\\nПостачальник: Мікаель Робертссон та Олов Ліндберг\\nДата випуску: 2006 рік","buttonText":"Відстежувати літаки","tags":["радар","авіація","мапа"]},{"id":29,"title":"Windy","url":"https://www.windy.com/","snippet":"Інтерактивна мапа погоди, вітру, циклонів та опадів. Ми її використовуємо на сайті, і спробуйте її з нашими інструментами у Стихії!\\nПостачальник: Іво Лукачович\\nДата випуску: листопад 2014 року","buttonText":"Дивитися погоду","tags":["погода","мапа","метеорологія"]},{"id":30,"title":"VirusTotal","url":"https://www.virustotal.com/","snippet":"Безкоштовна перевірка файлів та посилань на віруси понад 70 антивірусами.\\nЩось ковіду не зупинило :(\\nПостачальник: Chronicle / Google\\nДата випуску: червень 2004 року","buttonText":"Перевірити на віруси","tags":["безпека","інструменти","корисно"]},{"id":31,"title":"Speedtest by Ookla","url":"https://www.speedtest.net/","snippet":"Найпопулярніший сервіс для перевірки швидкості інтернет-з'єднання.\\nПостачальник: Ookla LLC / Ziff Davis\\nДата випуску: 2006 рік","buttonText":"Тест швидкості","tags":["інструменти","інтернет","тест"]},{"id":32,"title":"AlternativeTo","url":"https://alternativeto.net/","snippet":"Сайт для пошуку аналогів та альтернатив для будь-якого програмного забезпечення.\\nПостачальник: Ола та Маркус\\nДата випуску: березень 2009 року","buttonText":"Знайти альтернативу","tags":["інструменти","софт","пошук"]},{"id":33,"title":"Unsplash","url":"https://unsplash.com/","snippet":"Величезна бібліотека якісних фотографій, вільних для використання.\\nПостачальник: Unsplash / Getty Images (Мікаель Чо)\\nДата випуску: травень 2013 року","buttonText":"Шукати фото","tags":["фото","дизайн","ресурси"]},{"id":34,"title":"Pixabay","url":"https://pixabay.com/","snippet":"Безкоштовні стокові зображення, векторна графіка та відео. Використуємо їх бібліотеку на сайті!\\nПостачальник: Pixabay / Canva (Ганс Браксмайєр, Саймон Штейнбергер)\\nДата випуску: 24 листопада 2010 року","buttonText":"Знайти медіа","tags":["фото","ресурси","дизайн"]},{"id":35,"title":"Medium","url":"https://medium.com/","snippet":"Платформа для публікації статей та блогів на будь-які теми.\\nПостачальник: A Medium Corporation (Ев Вільямс)\\nДата випуску: 15 серпня 2012 року","buttonText":"Читати статті","tags":["статті","блог","читання"]},{"id":36,"title":"Pinterest","url":"https://www.pinterest.com/","snippet":"Соціальна мережа для пошуку та збереження візуальних ідей.\\nПостачальник: Бен Зільберман, Пол Скіарра, Еван Шарп\\nДата випуску: січень 2010 року","buttonText":"Шукати ідеї","tags":["візуал","натхнення","дизайн"]},{"id":37,"title":"Behance","url":"https://www.behance.net/","snippet":"Платформа від Adobe для демонстрації творчих робіт дизайнерів та ілюстраторів.\\nПостачальник: Adobe Inc. (Матіас Корреа, Скотт Бельські)\\nДата випуску: листопад 2005 року","buttonText":"Дивитися портфоліо","tags":["дизайн","портфоліо","мистецтво"]},{"id":38,"title":"Ninite","url":"https://ninite.com/","snippet":"Інструмент для швидкого та автоматичного встановлення популярних програм на Windows.\\nПостачальник: Патрік Свенсковські та Саша Кузінс\\nДата випуску: жовтень 2009 року","buttonText":"Встановити софт","tags":["інструменти","windows","софт"]},{"id":39,"title":"ProtonMail","url":"https://proton.me/mail","snippet":"Захищена електронна пошта з наскрізним шифруванням, розроблена в Швейцарії.\\nПостачальник: Proton AG (Енді Йєн)\\nДата випуску: 16 травня 2014 року","buttonText":"Створити пошту","tags":["безпека","пошта","приватність"]},{"id":40,"title":"1.1.1.1 (Cloudflare)","url":"https://1.1.1.1/","snippet":"Безпечний та швидкий DNS-сервіс для приватного серфінгу в інтернеті.\\nДоміно намагався заблокувати свій власний секретний сайт через 1.1.1.1, але забув, що цього сайту навіть не існує в природі :)\\nПостачальник: Метью Прінс, Мішель Затлін, Лі Голловей\\nДата випуску: 1 квітня 2018 року","buttonText":"Налаштувати DNS","tags":["безпека","інтернет","інструменти"]},{"id":41,"title":"Google Keep","url":"https://keep.google.com/","snippet":"Швидкий та зручний сервіс для створення коротких нотаток та списків від Google.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 20 березня 2013 року","buttonText":"Створити нотатку","tags":["продуктивність","нотатки","google"]},{"id":42,"title":"Codecademy","url":"https://www.codecademy.com/","snippet":"Інтерактивна платформа для вивчення програмування з нуля.\\nПостачальник: Codecademy / Skillsoft (Зач Сімс, Раян Бубінські)\\nДата випуску: серпень 2011 року","buttonText":"Вчити програмування","tags":["освіта","it","код"]},{"id":43,"title":"MDN Web Docs","url":"https://developer.mozilla.org/","snippet":"Найповніша документація для веброзробників від Mozilla.\\nПостачальник: Mozilla Foundation\\nДата випуску: 15 липня 2005 року","buttonText":"Читати документацію","tags":["it","довідник","web"]},{"id":44,"title":"Pocket","url":"https://getpocket.com/","snippet":"Сервіс для збереження статей, відео та сторінок, щоб прочитати їх пізніше.\\nПостачальник: Mozilla Corporation (Нейт Вайнер)\\nДата випуску: серпень 2007 року","buttonText":"Зберегти на потім","tags":["читання","продуктивність","інструменти"]},{"id":45,"title":"Feedly","url":"https://feedly.com/","snippet":"Агрегатор RSS-стрічок для зручного читання новин з улюблених сайтів.\\nПостачальник: DevHD (Ерван Гранжен)\\nДата випуску: 15 червня 2008 року","buttonText":"Читати новини","tags":["новини","інструменти","інформація"]},{"id":46,"title":"Nova Poshta (Нова Пошта)","url":"https://novaposhta.ua/","snippet":"Офіційний сайт найбільшого логістичного оператора України. Відстеження посилок.\\nПостачальник: В'ячеслав Климов, Володимир Поперешнюк\\nДата випуску: 13 лютого 2001 року","buttonText":"Відстежити посилку","tags":["доставка","сервіс","україна"]},{"id":47,"title":"Rozetka","url":"https://rozetka.com.ua/","snippet":"Найбільший онлайн-ритейлер в Україні: електроніка, одяг, товари для дому.\\nПостачальник: ТОВ «Розетка.УА» (Владислав Чечоткін)\\nДата випуску: 2005 рік","buttonText":"Купувати","tags":["магазин","покупки","україна"]},{"id":48,"title":"Ukr.net","url":"https://www.ukr.net/","snippet":"Популярний український вебпортал, стрічка новин та електронна пошта.\\nПостачальник: ТОВ «Укрнет»\\nДата випуску: 1998 рік","buttonText":"Читати новини","tags":["новини","портал","україна"]},{"id":49,"title":"Google Drive","url":"https://drive.google.com/","snippet":"Хмарне сховище для зберігання файлів та спільної роботи над документами.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 24 квітня 2012 року","buttonText":"Відкрити диск","tags":["хмара","файли","робота"]},{"id":50,"title":"ChatGPT","url":"https://chat.openai.com/","snippet":"Штучний інтелект для генерації текстів, програмування та відповідей на запитання.\\nПримітка: 13+ з дозволу батьків, 18+ самостійне використання\\nПостачальник: OpenAI\\nДата випуску: 30 листопада 2022 року","buttonText":"Спілкуватися з ШІ","tags":["ші","інструменти","технології"]},{"id":51,"title":"EdEra","url":"https://www.ed-era.com/","snippet":"Студія онлайн-освіти, що створює інтерактивні курси, підручники та спецпроєкти.\\nПостачальник: Ілля Філіпов (EdEra)\\nДата випуску: 2014 рік","buttonText":"Навчатися","tags":["освіта","курси","україна"]},{"id":52,"title":"Boto Sapiens","url":"https://botosapiens.com/","snippet":"Корисні боти та сервіси для автоматизації рутини в Telegram та не тільки.\\nПостачальник: Boto Sapiens Team\\nДата випуску: 2020 рік","buttonText":"Знайти бота","tags":["інструменти","telegram","корисно"]},{"id":53,"title":"Google Translate","url":"https://translate.google.com.ua/","snippet":"Найвідоміший сервіс машинного перекладу для сотень мов світу.\\nНа жаль як і в Дуолінго, проблему Доміно, з розумінням його мови не вирішили :)\\nПостачальник: Google / Alphabet Inc.\\nДата випуску: 28 квітня 2006 року","buttonText":"Перекласти","tags":["переклад","інструменти","мовлення"]},{"id":54,"title":"OpenStreetMap","url":"https://www.openstreetmap.org/","snippet":"Детальна вільна географічна мапа світу, яку створюють користувачі.\\nДоміно: Я впевнений, що це тактика таємних товариств, наспрвді Земля плоска, Стоїть на 3 слонах, і пливе на черепазі(Дивно, я очікував на Ніцероні, хоча якщо подумати. Ніцерон - символ поганої політики людства у мультиплікаційній формі)\\nПостачальник: OpenStreetMap Foundation (Стів Кост)\\nДата випуску: 9 серпня 2004 року","buttonText":"Відкрити мапу","tags":["мапа","географія","навігація"]},{"id":55,"title":"E-Katalog","url":"https://ek.ua/","snippet":"Каталог описів і цін на побутову і комп'ютерну техніку, допомога у виборі.\\nКейт: я хочу собі 17 айфон про макс. Доміно: давай повчишся користуватися дзьобом на нокіа 3310, через 5 років.\\nПостачальник: E-Katalog Ltd.\\nДата випуску: 2001 рік","buttonText":"Порівняти ціни","tags":["покупки","техніка","порівняння"]},{"id":56,"title":"Словко","url":"https://slovko.zaxid.net/","snippet":"Українська версія популярної гри-головоломки Wordle. Відгадайте слово з 5 літер.\\nДоміно: Я відгадав це індик!\\nПостачальник: Zaxid.net / Назарій Захарія\\nДата випуску: січень 2022 року","buttonText":"Грати","tags":["головоломка","слова","логіка"]},{"id":57,"title":"Web Sudoku","url":"https://www.websudoku.com/","snippet":"Мільярди безкоштовних головоломок Судоку різних рівнів складності онлайн.\\nПостачальник: Web Sudoku Ltd (Гідеон та Елізабет Грін)\\nДата випуску: 2005 рік","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":58,"title":"2048","url":"https://play2048.co/","snippet":"Математична головоломка: зсувайте плитки, щоб утворити число 2048.\\nПостачальник: Габріеле Чіруллі (Gabriele Cirulli)\\nДата випуску: 9 березня 2014 року","buttonText":"Грати","tags":["головоломка","математика","логіка"]},{"id":59,"title":"Lichess","url":"https://lichess.org/","snippet":"Безкоштовна платформа для гри в шахи та розв'язання шахових задач-головоломок.\\nНагадайте: Пішка переміщується по будь якій клітинці як хоче? :)\\nПостачальник: Тібо Дюплессі (Thibault Duplessis)\\nДата випуску: 20 червня 2010 року","buttonText":"Розв'язувати задачі","tags":["головоломка","шахи","логіка"]},{"id":60,"title":"Nonograms.org","url":"https://www.nonograms.org/","snippet":"Японські кросворди (нонограми) — малювання картинок за допомогою чисел.\\nПостачальник: Олег Каштелян\\nДата випуску: 2012 рік","buttonText":"Грати","tags":["головоломка","нонограми","логіка"]},{"id":61,"title":"The New York Times Crossword","url":"https://www.nytimes.com/crosswords","snippet":"Легендарні англомовні кросворди та міні-головоломки щодня.\\nПостачальник: The New York Times Company (Віл Шортс)\\nДата випуску: 15 лютого 1942 року","buttonText":"Розв'язувати","tags":["головоломка","кросворд","слова"]},{"id":62,"title":"Jigsaw Planet","url":"https://www.jigsawplanet.com/","snippet":"Збирайте класичні пазли з тисяч безкоштовних картинок онлайн.\\nПостачальник: Critical Hit Software\\nДата випуску: 2007 рік","buttonText":"Збирати пазли","tags":["головоломка","пазли","відпочинок"]},{"id":63,"title":"Monument Valley","url":"https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley","snippet":"Естетична просторова головоломка про неможливу архітектуру та оптичні ілюзії.\\nПостачальник: ustwo games\\nДата випуску: 3 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","архітектура","інді"]},{"id":64,"title":"The Room","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=h-NdQSeTPfA","snippet":"Ласкаво просимо до Кімнати, фізичної головоломки, загорнутої в таємничу гру, всередині прекрасного тактильного 3D-світу.\\n*****************\\nЯк справи, старий друже? Якщо ти це читаєш, значить, це спрацювало. Сподіваюся, ти все ще можеш мені пробачити.\\nМи ніколи не йшли точкою зору щодо моїх досліджень, але ти мусиш залишити такі речі позаду. Ти єдиний, до кого я можу звернутися. Ти мусиш прийти негайно, бо ми всі у великій небезпеці. Сподіваюся, ти пам'ятаєш будинок? Мій кабінет — найвища кімната.\\nРухайся вперед з душею. Тепер шляху назад немає.\\nЯК.\\n******\\nFireproof Games дуже пишається тим, що представляє вам наше найкраще творіння, захопливу подорож, сповнену краси, небезпеки та таємниці в рівній мірі. Перенесіть себе в унікальний простір, який поєднує захоплюючі візуальні ефекти з інтригуючими проблемами, які потрібно вирішити.\\n• Тривожно реалістична графіка: яскраві візуальні ефекти з природним виглядом, вдосконалені для мобільних дисплеїв.\\n• Моторошне керування одним пальцем: сенсорне керування настільки природне, що ви можете грати однією пальцем, щоб повністю орієнтуватися в цьому таємниче красивому 3D-світі.\\n• Фантастичний дизайн, що дозволяє швидко почати грати: легко почати, важко відірватися, таємниці Кімнати занурять вас ще до того, як ви усвідомите, що граєте.\\n• Захопливі шари таємниці: думаєте, що знаєте, на що дивитеся? Подумайте ще раз.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":65,"title":"Brain It On!","url":"https://play.google.com/store/apps/details?id=com.orbital.brainiton","snippet":"Фізичні головоломки, де треба малювати фігури для вирішення завдань.\\nПостачальник: Orbital Nine Games\\nДата випуску: 15 жовтня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","логіка"]},{"id":67,"title":"Where's My Water?","url":"https://play.google.com/store/apps/details?id=com.disney.WMW","snippet":"Прокладайте шлях воді крізь землю, щоб крокодил Свомпі зміг прийняти душ.\\nДоміно: Я тоді через страх крокодилів, на Марсі(чи куди зараз як найдалі можна) пограю в індика. (Це те саме що гра в крокодила, просто для тих хто їх боїться)\\nПостачальник: Disney Interactive\\nДата випуску: 22 вересня 2011 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","disney"]},{"id":68,"title":"Threes!","url":"https://play.google.com/store/apps/details?id=vo.threes.exclaim","snippet":"Елегантна гра-головоломка, де потрібно з'єднувати плитки, кратні трьом.\\nПостачальник: Sirvo / Asher Vollmer\\nДата випуску: 6 лютого 2014 року","buttonText":"Завантажити гру","tags":["головоломка","числа","логіка"]},{"id":69,"title":"Baba Is You","url":"https://store.steampowered.com/app/736260/Baba_Is_You/","snippet":"Геніальна гра, де ви змінюєте самі правила гри, пересуваючи блоки зі словами.\\nПостачальник: Arvi Teikari (Hempuli)\\nДата випуску: 13 березня 2019 року","buttonText":"Дивитися в Steam","tags":["головоломка","логіка","інді"]},{"id":70,"title":"Mini Metro","url":"https://play.google.com/store/apps/details?id=nz.co.codepoint.minimetro","snippet":"Головоломка-симулятор: проєктуйте лінії метро для міста, що постійно зростає.\\nПостачальник: Dinosaur Polo Club\\nДата випуску: 11 серпня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","симулятор","мінімалізм"]},{"id":72,"title":"Portal 2","url":"https://store.steampowered.com/app/620/Portal_2/","snippet":"Культова просторова головоломка від першої особи з портальною гарматою.\\nПостачальник: Valve Corporation\\nДата випуску: 18 квітня 2011 року","buttonText":"Дивитися в Steam","tags":["головоломка","портали","шедевр"]},{"id":73,"title":"The Witness","url":"https://store.steampowered.com/app/210970/The_Witness/","snippet":"Досліджуйте таємничий острів і розв'язуйте сотні складних лабіринтних головоломок.\\nПостачальник: Thekla, Inc. (Jonathan Blow)\\nДата випуску: 26 січня 2016 року","buttonText":"Дивитися в Steam","tags":["головоломка","відкритий_світ","логіка"]},{"id":74,"title":"Braid","url":"https://store.steampowered.com/app/26800/Braid/","snippet":"Платформер-головоломка, де маніпуляції з часом є ключем до вирішення завдань.\\nПостачальник: Number None (Jonathan Blow)\\nДата випуску: 6 серпня 2008 року","buttonText":"Дивитися в Steam","tags":["головоломка","час","інді"]},{"id":75,"title":"Tetris","url":"https://tetris.com/play-tetris","snippet":"Офіційна онлайн-версія найвідомішої у світі гри-головоломки з падаючими блоками.\\nПостачальник: The Tetris Company (Олексій Пажитнов)\\nДата випуску: 6 червня 1984 року","buttonText":"Грати в Tetris","tags":["головоломка","тетріс","класика"]},{"id":76,"title":"Minesweeper Online","url":"https://minesweeperonline.com/","snippet":"Класичний «Сапер» — відкривайте клітинки, спираючись на логіку та числа мін довкола.\\nПостачальник: Microsoft / Роберт Доннер та Курт Джонсон\\nДата випуску: 8 жовтня 1990 року","buttonText":"Грати","tags":["головоломка","сапер","логіка"]},{"id":77,"title":"Flow Free","url":"https://play.google.com/store/apps/details?id=com.bigduckgames.flow","snippet":"З'єднайте крапки однакового кольору лініями, щоб заповнити все ігрове поле.\\nПостачальник: Big Duck Games\\nДата випуску: 7 червня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","лінії","кольори"]},{"id":78,"title":"Monument Valley 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":79,"title":"Bejeweled Classic","url":"https://play.google.com/store/apps/details?id=com.ea.gp.bej3","snippet":"Класична гра зіставлення дорогоцінних каменів, що породила жанр «три в ряд».\\nПостачальник: PopCap Games / EA (Джейсон Капалка)\\nДата випуску: 30 травня 2001 року","buttonText":"Завантажити гру","tags":["головоломка","три_в_ряд","класика"]},{"id":80,"title":"Two Dots","url":"https://play.google.com/store/apps/details?id=com.weplaydots.twodotsandroid","snippet":"Мінімалістична та стильна гра про з'єднання точок одного кольору.\\nПостачальник: Playdots, Inc. / Take-Two Interactive\\nДата випуску: 29 травня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","точки","дизайн"]},{"id":81,"title":"Monument Valley 3","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":82,"title":"Kami 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":83,"title":"Unblock Me","url":"https://play.google.com/store/apps/details?id=com.kiragames.unblockmefree","snippet":"Проста, але складна гра з блоками — виведіть червоний блок з дошки, пересуваючи інші.\\nПостачальник: Kiragames\\nДата випуску: 25 квітня 2009 року","buttonText":"Завантажити гру","tags":["головоломка","блоки","логіка"]},{"id":84,"title":"Roll the Ball","url":"https://play.google.com/store/apps/details?id=com.bitmango.go.rolltheballunrollme","snippet":"Слайд-головоломка: пересувайте блоки, щоб створити шлях для кульки до фінішу.\\nПостачальник: BitMango\\nДата випуску: 20 квітня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","труби","логіка"]},{"id":85,"title":"Infinity Loop","url":"https://play.google.com/store/apps/details?id=com.balysv.loop","snippet":"Розслаблююча гра, де ви обертаєте фрагменти, створюючи нескінченні візерунки.\\nПостачальник: Infinity Games (Balys Valentukevicius)\\nДата випуску: 17 березня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","релакс","візерунки"]},{"id":86,"title":"Water Sort Puzzle","url":"https://play.google.com/store/apps/details?id=com.gma.water.sort.puzzle","snippet":"Сортуйте кольорову воду у склянках так, щоб кожна склянка містила лише один колір.\\nПостачальник: IEC Global / GMA Games\\nДата випуску: 28 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","сортування","логіка"]},{"id":87,"title":"Happy Glass","url":"https://play.google.com/store/apps/details?id=com.game5mobile.lineandwater","snippet":"Малюйте лінії, щоб спрямувати воду і наповнити сумну склянку, зробивши її щасливою.\\nПостачальник: Lion Studios / Game5Mobile\\nДата випуску: 9 серпня 2018 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","малювання"]},{"id":88,"title":"Brain Out","url":"https://play.google.com/store/apps/details?id=com.mind.quiz.brain.out","snippet":"Гра на нестандартне мислення з купою підступних запитань і задач (trick puzzles).\\nПостачальник: Focus Apps / Eyewind\\nДата випуску: 28 серпня 2019 року","buttonText":"Завантажити гру","tags":["головоломка","хитрощі","IQ"]},{"id":89,"title":"Mekorama","url":"https://play.google.com/store/apps/details?id=com.martinmagni.mekorama","snippet":"Проведіть маленького робота через красиві механічні діорами, вирішуючи просторові загадки.\\nПостачальник: Мартин Магні (Martin Magni)\\nДата випуску: 14 лютого 2016 року","buttonText":"Завантажити гру","tags":["головоломка","роботи","3D"]},{"id":90,"title":"Lara Croft GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.lcgo","snippet":"Покрокова головоломка-пригода у світі Tomb Raider з чудовим візуалом.\\nПостачальник: Square Enix Montréal\\nДата випуску: 27 серпня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","пригоди","покрокова"]},{"id":91,"title":"Hitman GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.hitmango","snippet":"Стилізована під настільну гру покрокова стратегія-головоломка зі стелс-елементами.\\nПостачальник: Square Enix Montréal\\nДата випуску: 17 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","стелс","тактика"]},{"id":93,"title":"The Talos Principle","url":"https://store.steampowered.com/app/257510/The_Talos_Principle/","snippet":"Глибока філософська гра-головоломка від першої особи, де ви вирішуєте завдання зі світлом та лазерами.\\nПостачальник: Croteam / Devolver Digital\\nДата випуску: 11 грудня 2014 року","buttonText":"Дивитися в Steam","tags":["головоломка","філософія","sci-fi"]},{"id":95,"title":"Myst","url":"https://store.steampowered.com/app/1255560/Myst/","snippet":"Класична пригодницька головоломка, де вам потрібно розгадати таємниці загадкового острова.\\nПостачальник: Cyan Worlds (Робін та Ренд Міллер)\\nДата випуску: 24 вересня 1993 року","buttonText":"Дивитися в Steam","tags":["головоломка","квест","класика"]},{"id":96,"title":"Wordscapes","url":"https://play.google.com/store/apps/details?id=com.peoplefun.wordcross","snippet":"Головоломка зі словами, яка поєднує пошук слів та кросворд.\\nПостачальник: PeopleFun\\nДата випуску: 19 червня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","слова","кросворд"]},{"id":97,"title":"CodyCross","url":"https://play.google.com/store/apps/details?id=com.fanatee.cody","snippet":"Новий погляд на кросворди з цікавими фактами та гарним дизайном.\\nПостачальник: Fanatee Games\\nДата випуску: 8 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","кросворд","ерудиція"]},{"id":98,"title":"Darkness and Flame 3: The Dark Side","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":99,"title":"100 Doors Games: Escape from School","url":"https://play.google.com/store/apps/details?id=com.Peaksel.OneHundredDoorsGamesEscapeFromSchool","snippet":"Розв'яжіть головоломку кожної кімнати, щоб знайти прихований ключ та відкрити двері.\\nПостачальник: Peaksel\\nДата випуску: 16 березня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","втеча","двері"]},{"id":100,"title":"Tangle Master 3D","url":"https://play.google.com/store/apps/details?id=com.zynga.tangle","snippet":"Просторова головоломка, у якій потрібно розплутати вузли та мотузки.\\nПостачальник: Rollic Games / Zynga\\nДата випуску: 1 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","вузли","3D"]},{"id":101,"title":"Block Puzzle","url":"https://play.google.com/store/apps/details?id=block.puzzle.game.tetris.classic","snippet":"Класична головоломка з дерев'яними блоками в стилі тетріс, без обмежень у часі.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","блоки","релакс"]},{"id":102,"title":"Sudoku.com","url":"https://sudoku.com/uk","snippet":"Один з найпопулярніших сайтів та додатків для вирішення класичного судоку з підказками.\\nПостачальник: Uanet / Gismeteo","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":103,"title":"Mahjong Solitaire","url":"https://play.google.com/store/apps/details?id=com.mobilityware.MahjongSolitaire","snippet":"Класична головоломка на зіставлення однакових плиток маджонгу, щоб очистити дошку.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","маджонг","настільна"]},{"id":104,"title":"Darkness and Flame 4: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":105,"title":"Knotwords","url":"https://play.google.com/store/apps/details?id=com.noodlecake.knotwords","snippet":"Унікальна комбінація судоку та кросворда, де літери розташовані в блоках.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","слова","логіка"]},{"id":106,"title":"Lost Lands 1: Dark Overlord","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands1.free","snippet":"Щось потягло вашого сина в портал! Рушайте на його пошуки в повні загадок Загублені Землі!\\nЗагублені Землі. Темний Владика - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про незвичайний фентезійний світ, повний незвіданих куточків і таємничих мешканців.\\nМолода мати з сином збиралися їхати з літнього будиночка в лісі. Сьюзан всього на секунду відволіклася на телефонний дзвінок. Тим часом її син, який грав неподалік, почув дивні голоси і відправився шукати джерело звуку. Коли Сьюзан помітила що відбувається, Джиммі вже затягувало в портал. Тепер Сьюзан необхідно знайти прохід в цей дивовижний світ і відшукати сина. Все виявиться набагато складніше і небезпечніше, ніж вона могла припустити. На своєму шляху Сьюзан зіткнеться з безліччю загадок і головоломок, зустріне незвичайних мешканців Загублених Земель, також їй будуть протистояти сили зла. Щоб повернути Джиммі їй доведеться перемогти Темного Владику, який тримає в страху весь світ!\\nЧи зможе відчайдушна мати врятувати сина і звільнити цілий світ від зла?\\nПостачальник: 5bn games\\nДата випуску: 24 вер. 2018 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":107,"title":"Lost Lands 2: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":108,"title":"Darkness and Flame 1: Born of Fire","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf1.free","snippet":"Незвичайна знахідка змінює життя дівчини. З цієї миті Еліс долучається до вічної боротьби Темряви та Полум'я і повинна врятувати свій фентезійний світ від знищення.\\nТемрява та полум'я: Породжений вогнем – пригодницька гра-квест із пошуком предметів, міні-іграми й замороками, що розповідає про незвичайний фентезійний світ – Родючі землі – оазиси у нескінченних пустелях.\\nМолода дівчина Еліс знайшла дивну скриньку з яйцем, з якого з'явився вогненний птах і, ніби, вселився в дівчину, залишивши випалений малюнок на руці, сама ж дівчина при цьому посивіла. Із цієї миті Еліс стає залученою у вічну боротьбу Темряви й Полум'я. За дівчиною почалося полювання – невідомі солдати розшукували її, батько зміг уберегти Еліс від них, але це коштувало йому життя. Дівчині довелося покинути свій будинок і відправитися до єдиної рідної людини – дядька, про існування якого вона тільки що довідалася. Разом їм треба буде пройти безліч випробувань у різних куточках Родючих Земель, зустрітися з незвичайними народами й расами, уникнути небезпеки, що наближається, розв'язати безліч заморок і зіштовхнутися з великим злом, що загрожує всьому їх фентезійному світу. Чи зможе Еліс приборкати силу полум'я, даровану їй долею, і врятувати свої землі від перетворення в пустелю смерті?\\n• Пориньте в дивну пригоду у фентезійному світі\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч заморок\\n• Приборкайте силу Полум'я\\n• Врятуйте мир від нищівної для всього живого погрози\\nДосліджуйте більш за 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігр\\nВиявіть кмітливість в інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення\\nЦя гра оптимізована для планшетів та телефонів!\\n+++ Відкрийте для себе ще більше ігор від FIVE-BN GAMES! +++\\nWWW: https://fivebngames.com/\\nFACEBOOK: https://www.facebook.com/fivebn/\\nTWITTER: https://twitter.com/fivebngames\\nYOUTUBE: https://youtube.com/fivebn\\nPINTEREST: https://pinterest.com/five_bn/\\nINSTAGRAM: https://www.instagram.com/five_bn/\\nПостачальник: 5bn games\\nДата випуску:12 квіт. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":109,"title":"Darkness and Flame 2: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":110,"title":"The Legacy 1: Realm of Retribution","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl1.free","snippet":"Детективний квест-головоломка від 5BN: розгадайте таємницю старовинного майяського артефакту в музеї.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":111,"title":"The Legacy 2: Prisoner","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl2.free","snippet":"Пошук зниклого музейного експоната приводить у зовсім інший світ! Захоплююча подорож в атмосфері прадавньої цивілізації.\\n'Спадщина: Бранець' – пригодницька гра в жанрі 'Пошук предметів', з величезним числом захоплюючих міні-ігор і головоломок, яка захопить вас у незвіданий світ і закрутить у вирі подій!\\nПобачивши силует, що ховається вдалечині, охоронця, який несе найрідший бюст представника цивілізації майя, Діана, молода співробітниця історичного музею, ринулася слідом. У результаті погоні події пішли зовсім не за планом! Дівчина - уже не вперше - виявляється в іншому світі. І шлях назад закритий!.. Довідайтеся, хто допоможе Діані впоратися з усіма випробуваннями, що випали на її долю. Пройдіть із ними весь шлях до кінця! Щоб урятувати в'язня прадавнього храму й вибратися з далекого світу додому, Діані доведеться виконати ряд небезпечних завдань, дослідити храми й підземелля, провести прадавні ритуали й знайти несподіваних друзів, готових прийти їй на допомогу! Вас чекає незабутня подорож!\\nДопоможіть Діані подолати труднощі й знайти вірну дорогу додому!\\nВідкрийте для себе новий, загадковий світ і його мешканців!\\nВипробуйте себе в більш ніж 40 міні-іграх і головоломках.\\nЗберіть безліч колекцій і відшукайте десятки морфінг-об'єктів.\\nНасолоджуйтеся приголомшливими локаціями, чудовою графікою й відмінною музикою.\\nДата випуску: 20 трав. 2019 р.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":112,"title":"New York Mysteries 1: Secrets of the Mafia","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym1.free","snippet":"Смілива журналістка, Лора Джеймс, починає власне розслідування таємничих зникнень босів мафії та пропажі дітей, що послідувала за ними.\\nЗагадки Нью-Йорка. Секрети Мафії – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, що розповідає про містичне детективне розслідування, мафіозні таємниці й загадках Нью-Йорка.\\nНью-Йорк, 1955 рік. У місті стало небезпечно. Мафія намагається захопити владу. Але віднедавна з'явилася нова сила. І вона на багато страшніша. За останні дні, п'ять мафіозних босів зникли при загадкових обставинах. На місцях зникнення знаходили лише дивну рідину й метелика. Але не це налякало жителів... У місті стали зникати діти. Усі вони намалювали таких самих метеликів перед зникненням. Лора Джеймс, журналіст «Дейлі Ньюз», починає власне розслідування. Які похмурі таємниці приховують тунелі метро під містом? Чи зможе героїня здолати усі перешкоди та врятувати зниклих.\\nПостачальник: 5bn games\\nДата випуску:24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":113,"title":"New York Mysteries 2: High Voltage","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym2.free","snippet":"Розслідуйте серію дивних убивств у Нью-Йорку, пов'язаних із загадковими електричними аномаліями.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":114,"title":"New York Mysteries 3: The Lantern of Souls","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym3.free","snippet":"Журналістка Лора Джеймс залучається до розслідування чергового вбивства. Однак звичайна, на перший погляд, справа починає набирати небезпечних обертів.\\nЗагадки Нью-Йорка. Ліхтар душ – пригодницька гра-квест з пошуком предметів, міні-іграми й головоломками, що розповідає про нове, небезпечне, містичне детективне розслідування сміливого журналіста Лори Джеймс.\\nНовий епізод жахливої саги переносить вас у Нью-Йорк кінця 50-х років. У заміському маєтку відбувається жорстоке вбивство вдови впливового адвоката. За завданням таємного ордену журналіст газети «Дейлі Ньюз» Лора Джеймс їде на місце злочину. На перший погляд, все виглядає як звичайний розбійний напад. Однак, обшук у будинку загиблої дає несподіваний результат. Небезпека підстерігає героїню на кожному кроці. Хитромудрі пастки і головоломки, таємниці з минулого й містична Темрява, що охопила місто. Чи зможе героїня опанувати те, що відбувається, і врятувати не тільки Нью-Йорк, але і весь світ від катастрофи, що наближається?\\nПостачальник: 5bn games\\nДата випуску:29 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":116,"title":"New York Mysteries 5: Power of Art","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym5.free","snippet":"Викрадені картини оживають: розгадайте таємницю магічного мистецтва у новій частині серії від 5BN. (Поки що остання...)\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":117,"title":"Tricky Doors","url":"https://play.google.com/store/apps/details?id=com.fivebn.trickydoors","snippet":"Атмосферна гра-головоломка від 5BN Games у жанрі «втеча з кімнати» з різноманітними світами, захоплюючими схованками та складними міні-іграми.","buttonText":"Завантажити гру","tags":["головоломка","втеча","5bn","квест"]},{"id":118,"title":"Tiny Room Stories: Town Mystery","url":"https://play.google.com/store/apps/details?id=com.DrunkData.TinyRoom","snippet":"Чудова 3D-головоломка в стилі «втеча з кімнати»: повертайте деталізовані рівні для пошуку підказок.","buttonText":"Завантажити гру","tags":["головоломка","детектив","3d","втеча"]},{"id":120,"title":"Coolors","url":"https://coolors.co/","snippet":"Сучасний та супершвидкий генератор колірних палітр для розробників і дизайнерів з можливістю підбору гармонійних поєднань та експорту в CSS або SVG.","buttonText":"Згенерувати палітру","tags":["дизайн","інструменти","палітра","веб"]},{"id":121,"title":"Agent A: A puzzle in disguise","url":"https://play.google.com/store/apps/details?id=com.yakandco.agenta","snippet":"Шпигунська головоломка у стилі 60-х: проникніть у таємне лігво ворожого агента і знешкодьте пастки.","buttonText":"Завантажити гру","tags":["головоломка","шпигуни","квест","стиль"]},{"id":122,"title":"Adventure Escape Mysteries","url":"https://play.google.com/store/apps/details?id=com.haiku.adventure.escape.mysteries","snippet":"Збірник інтерактивних детективних історій та головоломок від Haiku Games.","buttonText":"Завантажити гру","tags":["головоломка","детектив","квест","історія"]},{"id":123,"title":"Spot the Difference: Find 5","url":"https://play.google.com/store/apps/details?id=com.easybrain.find.differences","snippet":"Класична головоломка на уважність: знайдіть усі відмінності між двома схожими картинками.","buttonText":"Завантажити гру","tags":["головоломка","уважність","пошук"]},{"id":124,"title":"Sudoku - Brain Puzzle Games","url":"https://play.google.com/store/apps/details?id=com.easybrain.sudoku.android","snippet":"Один із найзручніших мобільних додатків для вирішення класичних судоку будь-якої складності.","buttonText":"Завантажити гру","tags":["головоломка","судоку","числа"]},{"id":125,"title":"Nonogram.com - Picture Cross","url":"https://play.google.com/store/apps/details?id=com.easybrain.nonogram","snippet":"Японські кросворди: розгадуйте зашифровані картинки за допомогою логічних підказок.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","числа"]},{"id":126,"title":"Brain Test: Tricky Puzzles","url":"https://play.google.com/store/apps/details?id=com.unicostudio.braintest","snippet":"Захоплююча головоломка з хитрими завданнями та кумедними нестандартними рішеннями.","buttonText":"Завантажити гру","tags":["головоломка","гумор","iq"]},{"id":127,"title":"Rube's Lab - Physics Puzzle","url":"https://play.google.com/store/apps/details?id=com.bouland.rubeslab","snippet":"Фізична головоломка в стилі машин Руба Ґолдберга: будуйте ланцюгові реакції.","buttonText":"Завантажити гру","tags":["головоломка","фізика","механізми"]},{"id":128,"title":"Human Resource Machine","url":"https://play.google.com/store/apps/details?id=com.tomorrowcorporation.humanresourcemachine","snippet":"Весела головоломка, яка навчає базовим принципам програмування через офісну рутину.","buttonText":"Завантажити гру","tags":["головоломка","програмування","код"]},{"id":129,"title":"Bridge Constructor","url":"https://play.google.com/store/apps/details?id=com.headupgames.bridgeconstructor","snippet":"Станьте інженером: будуйте мости через прірви та перевіряйте їх на міцність.","buttonText":"Завантажити гру","tags":["головоломка","будівництво","фізика"]},{"id":130,"title":"Shadowmatic","url":"https://play.google.com/store/apps/details?id=com.triadaal.shadowmatic","snippet":"Оскароносна головоломка: повертайте абстрактні предмети в променях світла, щоб отримати тінь.","buttonText":"Завантажити гру","tags":["головоломка","3d","тіні","релакс"]},{"id":131,"title":"Unpacking","url":"https://play.google.com/store/apps/details?id=com.humblebundle.unpacking","snippet":"Затишна медитативна головоломка про розпакування коробки та облаштування будинку.","buttonText":"Завантажити гру","tags":["головоломка","затишок","релакс"]},{"id":132,"title":"Layovers: World Map Puzzle","url":"https://geoguessr.com/","snippet":"Перевірте свої географічні знання у формі візуальних загадок та інтерактивних мап.","buttonText":"Грати онлайн","tags":["головоломка","географія","знання"]},{"id":133,"title":"Worldle","url":"https://worldle.teuteuf.fr/","snippet":"Щоденна географічна головоломка: вгадайте країну за її контуром та відстанями.","buttonText":"Грати онлайн","tags":["головоломка","географія","слова"]},{"id":134,"title":"Wordle - Official NYT","url":"https://www.nytimes.com/games/wordle/index.html","snippet":"Оригінальна всесвітньо відома гра: вгадайте англійське слово з 5 літер за 6 спроб.","buttonText":"Грати онлайн","tags":["головоломка","слова","англійська"]},{"id":135,"title":"Picross LUNA","url":"https://play.google.com/store/apps/details?id=com.Floralmind.PicrossLuna","snippet":"Атмосферні та казкові японські кросворди зі зворушливою історією та чудовою музикою.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","казка"]},{"id":136,"title":"Remove.bg","url":"https://www.remove.bg/","snippet":"Безкоштовний онлайн-інструмент для автоматичного видалення фону з будь-якого фото за 5 секунд.","buttonText":"Видалити фон","tags":["інструменти","фото","дизайн"]},{"id":137,"title":"ILovePDF","url":"https://www.ilovepdf.com/uk","snippet":"Повний набір безкоштовних інструментів для роботи з PDF: об'єднання, стиснення, конвертація.","buttonText":"Працювати з PDF","tags":["інструменти","документи","pdf"]},{"id":138,"title":"TinyPNG","url":"https://tinypng.com/","snippet":"Розумне стиснення зображень форматів WEBP, PNG та JPEG без втрати якості.","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":139,"title":"FixMySpeakers","url":"https://fixmyspeakers.com/","snippet":"Відтворює спеціальний звук конкретної частоти, щоб виштовхнути воду з динаміка вашого смартфона.","buttonText":"Очистити динамік","tags":["інструменти","смартфон","звук"]},{"id":140,"title":"Radio Garden","url":"http://radio.garden/","snippet":"Інтерактивний 3D-глобус, який дозволяє слухати тисячі прямих трансляцій радіостанцій по всьому світу.","buttonText":"Слухати радіо","tags":["музика","мапа","радіо"]},{"id":141,"title":"MyRetroTVs","url":"https://www.myretrotvs.com/","snippet":"Віртуальний телевізор, який транслює справжні відеоролики, телешоу та рекламу 60-х, 70-х, 80-х чи 90-х років.","buttonText":"Ввімкнути ТВ","tags":["ностальгія","відео","історія"]},{"id":142,"title":"PDF2Go","url":"https://www.pdf2go.com/uk","snippet":"Онлайн-редактор та конвертер PDF-файлів прямо у вашому браузері.","buttonText":"Редагувати PDF","tags":["інструменти","pdf","документи"]},{"id":143,"title":"MyHeritage Deep Nostalgia","url":"https://www.myheritage.com/deep-nostalgia","snippet":"Сервіс на основі штучного інтелекту, який оживляє обличчя на старих архівних фотографіях.","buttonText":"Оживити фото","tags":["ші","фото","історія"]},{"id":144,"title":"Have I Been Pwned","url":"https://haveibeenpwned.com/","snippet":"Перевірте, чи потрапляла ваша електронна пошта або пароль у відомі бази даних витоків інформації.","buttonText":"Перевірити пошту","tags":["безпека","приватність","інструменти"]},{"id":145,"title":"Privnote","url":"https://privnote.com/","snippet":"Створюйте текстові нотатки, які самознищуються одразу після того, як їх прочитає отримувач.","buttonText":"Створити записку","tags":["безпека","приватність","текст"]},{"id":146,"title":"NaturalReaders","url":"https://www.naturalreaders.com/","snippet":"Перетворення будь-якого тексту на природне озвучення штучним інтелектом.","buttonText":"Озвучити текст","tags":["ші","звук","інструменти"]},{"id":147,"title":"Neko-City (NekoWeb)","url":"https://nekoweb.org/","snippet":"Майданчик для створення та перегляду затишних персональних веб-сайтів у дусі інтернету 2000-х.","buttonText":"Дослідити","tags":["веб","ретро","натхнення"]},{"id":148,"title":"10 Minute Mail","url":"https://10minutemail.com/","snippet":"Тимчасова електронна пошта, яка знищується через 10 хвилин. Ідеально для швидких реєстрацій.","buttonText":"Отримати пошту","tags":["безпека","пошта","інструменти"]},{"id":149,"title":"Befunky","url":"https://www.befunky.com/","snippet":"Простий онлайн-фоторедактор, графічний дизайнер та майстер створення колажів.","buttonText":"Редагувати","tags":["дизайн","фото","колаж"]},{"id":150,"title":"Gridzzly","url":"https://gridzzly.com/","snippet":"Створюйте та роздруковуйте власний сітчастий, лінійний або крапковий папір для нотаток.","buttonText":"Створити аркуш","tags":["інструменти","друк","організація"]},{"id":151,"title":"Ninite Pro & Tools","url":"https://ninite.com/","snippet":"Безпечне встановлення декількох популярних додатків одночасно без рекламного сміття.","buttonText":"Вибрати програми","tags":["софт","windows","інструменти"]},{"id":152,"title":"CleanPNG","url":"https://www.cleanpng.com/","snippet":"Безкоштовна база з мільйонів PNG-зображень із прозорим фоном для дизайну.","buttonText":"Шукати PNG","tags":["дизайн","ресурси","картинки"]},{"id":153,"title":"FutureMe","url":"https://www.futureme.org/","snippet":"Напишіть лист самому собі у майбутнє, який прийде на вашу пошту через 1, 3 або 5 років.\\nНапишеш, що це Доміно заставив тебе це зробити, майбутньому я :)","buttonText":"Написати собі","tags":["розваги","саморозвиток","листя"]},{"id":154,"title":"Asoftmurmur","url":"https://asoftmurmur.com/","snippet":"Генератор фонових звуків природи (дощ, вітер, костер) для концентрації або сну.","buttonText":"Слухати фонограму","tags":["релакс","продуктивність","звуки"]},{"id":155,"title":"Soundraw AI","url":"https://soundraw.io/","snippet":"Генератор фонової музики без авторських прав за допомогою штучного інтелекту.\\nПотап написав для нас безкоштовно пісню, але Кейт не сподобалось. Слухаймо: «Ні-на-не-ну-ла-шу, ко-ла-ві-ка-цу» — за 3 секунди шедевр!","buttonText":"Згенерувати трек","tags":["ші","музика","креатив"]},{"id":156,"title":"Стихія","images":["castle"],"url":"https://stuxia.com/","snippet":"Саморекламування на своєму сайті :) Ви ж вже на найдивнішому сайті серед усіх! Працює із видіння Доміно :)\\nПостачальник: TheTurkeyStudio (Бундюча студія)","buttonText":"Ви ж вже тут :)","tags":["погода","музика","хаос"]},{"id":157,"title":"Ніцерон (Динофроз)","url":"https://megogo.net/ua/view/1812091-dinofroz.html","snippet":"Ми не могли його впустити додаючи нашу базу даних, нашого пошуковика :)\\nЄдиний лінк не на гру і додаток(сайт)\\nПостачальник: Mondo TV","buttonText":"Ностальгія...","tags":["дракони","динозаври","Ніцерон"]},{"id":158,"title":"Dragon Village 3","url":"https://play.google.com/store/apps/details?id=com.highbrow.games.dvo&hl=uk","icon":"https://play-lh.googleusercontent.com/xkwb3p2V6SkaxRq3uC_NM3n_tkw_UOcfe6uw75plux3o-e_XiY5Ixis8HTfjjix0U14HMqIbVNICs8IoVRFs=s48","snippet":"Офіційне продовження Dragon Village через 12 років\\nШкода що Діма Комаров не заїхав в Корею, сувенір пов'яний з грою привіз би :)\\n\\nПостачальник: Highbrow","buttonText":"Збереш усіх драконів? :)","tags":["сюжет","стратегія","дракони"],"images":["village"]},{"id":159,"title":"Меридіан 157: Пролог","youtubeTrailer":"https://www.youtube.com/watch?v=pXW52EZI0vY","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.games.meridian157prologue&hl=uk","icon":"https://play-lh.googleusercontent.com/Rkk66wnDj2v-pe86uw-0GsZuHCBvc8DyeOj53pHHLfC318Shb5m8ebOVIBR6Wt3Jl_GzqcHtPeOQf32zol4Wcw=s48","snippet":"Meridian 157: Розділи 1, 2 та 3 офіційно випущені! Завантажте їх зараз на Google Play! Meridian 157: Prologue – це гра-головоломка типу «вкажи та клацни», що зосереджена на захопливих головоломках, захопливій візуальній складовій та захопливому сюжеті. Це перша частина серії Meridian 157, де ви граєте за детектива Девіда Зандера, який розслідує таємничу погодну аномалію в північній частині Тихого океану. Використовуйте свою кмітливість, щоб розгадувати головоломки та долати перешкоди, щоб знайти шлях глибше на острів, щоб розкрити та знайти таємницю загубленого острова на 157-му меридіані!\\nШкола виживання для любителів закинутих об'єктів та таємничих бункерів :)\\nПостачальник: NovaSoft Interactive","buttonText":"Розгадаєш таємницю об'єкту F.L.A.R.E?","tags":["аномалії","головоломки","хоррор"]},{"id":160,"title":"Excalidraw","url":"https://excalidraw.com/","snippet":"Зручна віртуальна дошка для швидкого створення схем, діаграм та начерків у стилі малюнка від руки.\\nЯ знав, що уроки кресленння, щось від мене приховують :)\\nПостачальник: Uanet / Gismeteo","buttonText":"Малювати схему","tags":["інструменти","дизайн","схеми"]},{"id":161,"title":"Горох (Словник)","url":"https://goroh.pp.ua/","snippet":"Сучасна онлайн-бібліотека українських словників: тлумачний, етимологічний, словозміна та синоніми.\\nЯкий оригінальний по імені постачальник...\\nПостачальник: Проєкт «Горох»","buttonText":"Шукати слово","tags":["мова","словник","освіта"]},{"id":162,"title":"Lost Lands 3: The Golden Curse","url":"https://play.google.com/store/apps/details?id=com.fivebn.ll3.f2p&hl=uk","icon":"https://play-lh.googleusercontent.com/v2xe4z9VMItjJ99omnJZLhQkKRjeL4YXAK29IeQv5uBrcByCPaneCKHVnPfwzF73agm6Xrp6waRN31ttqDdqMQ=s48","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася у фентезійному світі. Їй доведеться боротися проти демонів, які перебули у скам'янілому стані останнє тисячоріччя та й знову відродилися по незрозумілій причині.\\n«Загублені Землі. Прокляте золото» – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, розкиданими на безкрайніх просторах фентезійного світу: від долини вулканів до друїдового лісу, від глибокого підземелля до ширяючих островів.\\nПроста миловидна домогосподарка Сьюзан одного чудового дня, відвідавши музей мистецтв, натикається на стародавнє дзеркало, яке раптом невідомим образом починає вабити Сьюзан до себе. Та доторкається до дзеркала й миттєво переноситься у фентезійний казковий світ Загублених Земель. Отут за свої колишні подвиги вона вже давно відома всім, як Сьюзан-Войовниця.\\nСьюзан зустрічає маленьку дівчинку Фіору, яка відводить її в село до свого прадіда Маарону. У ньому Сьюзан впізнає свого старого знайомого друїда. Маарон розповідає, що на їхнє село напала Гарпія – крилатий демон з легенд. Але саме дивне те, що цей демон останню тисячу років стояв у вигляді кам'яної статуї в одному старому занедбаному форті.\\nРазом зі своїми друзями Сьюзан має бути відправитися в жерло вулкана, спуститися в підземелля й піднятися на ширяючі острови для того, щоб зрозуміти, чому Гарпія, Мінотавр, Нага й Солідус, один за іншим, почали звільнятися з «кам'яного полону» і вчиняти в Загублених Землях хаос. І, звичайно, усіх їх потрібно зупинити...\\nПостачальник: 5bn games\\nДата випуску: 24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":163,"title":"Lost Lands 4: The Wanderer","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":164,"title":"Lost Lands 5: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":165,"title":"Lost Lands 6: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":166,"title":"Lost Lands 7: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":167,"title":"Lost Lands 8: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":168,"title":"Meridian 157: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":169,"title":"Meridian 157: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":170,"title":"Meridian 157: Chapter 3","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":171,"title":"Lost Lands 10","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":172,"title":"Lost Lands 11: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":173,"title":"Dragon Village","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":174,"title":"Dragon Village M","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":175,"title":"Dragon Village Collection","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":176,"title":"Legacy 3: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":177,"title":"The Room 2","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=soyeCXKQ6_Q","snippet":"Ласкаво просимо до The Room Two, фізичної головоломки, загорнутої в таємничу гру, у чудовому тактильному 3D-світі.\\nДовгоочікуване продовження фільму «Кімната», який отримав премію BAFTA, нарешті з’явилося.\\nПройдіть слідом загадкових листів від загадкового вченого, відомого лише як AS, у захоплюючий світ таємниць і досліджень.\\n*******************************************************************************************************************\\n«Неймовірно захоплюючий досвід із розумними головоломками, чудовими візуальними ефектами та моторошною атмосферою; абсолютно переповнений новими ідеями». – Грань\\n«Складно сплетений художній твір, ідеально підходить для свого формату, це та гра, заради якої варто сидіти в темряві». - Кишеньковий гравець\\nЧудова гра, що пропонує великі локації з кількома інтерактивними областями та головоломками. Ідеальна гра для холодної зимової ночі. – Єврогеймер\\n«Змушує вас думати про те, як розв’язувати головоломки, навіть коли ви не граєте; ознака класної гри, якою це безперечно є». – 148 додатків\\nЧудове продовження з приголомшливими візуальними ефектами, рівень складності, який тут представлений, вражає. Друга кімната має бути на першому місці у вашому списку ігор. - GSM Арена\\n*******************************************************************************************************************\\nІНФОРМАЦІЙНИЙ ДИЗАЙН\\nЛегко розпочати, важко відірватися, захоплююче поєднання інтригуючих головоломок із простим інтерфейсом користувача\\nІННОВАЦІЙНЕ СЕНСОРНЕ УПРАВЛІННЯ\\nТактильний досвід настільки природний, що ви можете майже відчути поверхню кожного предмета\\nРЕАЛІСТИЧНІ 3D ЛОКАЦІЇ\\nПориньте в різноманітні приголомшливі середовища, які випробуватимуть вашу майстерність розгадувати головоломки.\\nДЕТАЛІЗОВАНІ 3D ОБ'ЄКТИ\\nВникайте в складні деталі десятків артефактів у пошуках їхніх прихованих секретів.\\nНЕРВУЮЧИЙ АУДІО\\nЗахоплюючий саундтрек і динамічні звукові ефекти створюють звуковий ландшафт, який реагує на вашу гру.\\nТЕПЕР ПІДТРИМУЄТЬСЯ ЗБЕРЕЖЕННЯ В ХМАРІ\\nПоділіться своїм прогресом між кількома пристроями та розблокуйте абсолютно нові досягнення.\\nПІДТРИМКА КІЛЬКОХ МОВ\\nДоступно англійською, французькою, італійською, німецькою, іспанською, бразильською та португальською мовами.\\n*******************************************************************************************************************\\nFireproof Games — це невелика незалежна студія, розташована в Гілфорді у Великобританії.\\nДізнайтеся більше на fireproofgames.com\\nСлідкуйте за нами @Fireproof_Games.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":178,"title":"The Room 3","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","youtubeTrailer":"https://www.youtube.com/watch?v=NaZ2DiDH4i0","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":179,"title":"The Room: Old Sins","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"Увійдіть у The Room: Old Sins і перенесіться в місце, де тактильне дослідження зустрічається зі складними головоломками та захоплюючою історією.\\nРаптове зникнення амбітного інженера та його світської дружини провокує полювання на дорогоцінний артефакт. Стежка веде на горище їхнього дому, де знаходять старий, незвичайний ляльковий будиночок...\\nДосліджуйте тривожні місця, дотримуйтесь незрозумілих підказок і маніпулюйте химерними пристосуваннями, розкриваючи таємниці садиби Волдегрейв.\\nВід себе: Хоч ця серія ігор і платна, але навряд її хтось переплюне...\\nПостачальник: Fireproof Games\\nДата випуску: 18 квітня 2018 рік.","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":180,"title":"Regex101","url":"https://regex101.com/","snippet":"Онлайн-інструмент для тестування, налагодження та аналізу регулярних виразів з детальними поясненнями.\\nПостачальник: Firas Dib\\nДата випуску: 2013 рік","buttonText":"Тестувати Regex","tags":["it","програмування","інструменти"]},{"id":181,"title":"DevDocs","url":"https://devdocs.io/","snippet":"Швидкий та зручний навігатор по документації десятків мов програмування та фреймворків в єдиному інтерфейсі.\\nПостачальник: FreeCodeCamp / Thibaut Courouble\\nДата випуску: 2013 рік","buttonText":"Читати документацію","tags":["it","програмування","довідник"]},{"id":182,"title":"CSS Gradient","url":"https://cssgradient.io/","snippet":"Зручний генератор градієнтів для CSS з візуальним редактором та можливістю копіювання коду в один клік.\\nПостачальник: Designmodo\\nДата випуску: 2017 рік","buttonText":"Створити градієнт","tags":["дизайн","веб","інструменти"]},{"id":183,"title":"Coolors","url":"https://coolors.co/","snippet":"Надшвидкий генератор колірних палітр для дизайнерів та розробників з можливістю збереження та експорту.\\nПостачальник: Fabrizio Bianchi\\nДата випуску: 2014 рік","buttonText":"Підібрати кольори","tags":["дизайн","палітра","інструменти"]},{"id":184,"title":"Carbon","url":"https://carbon.now.sh/","snippet":"Створюйте та поширюйте красиві зображення вашого сирцового коду для презентацій та соціальних мереж.\\nПостачальник: Dawn Labs\\nДата випуску: 2017 рік","buttonText":"Оформити код","tags":["it","дизайн","код"]},{"id":185,"title":"JSON Crack","url":"https://jsoncrack.com/","snippet":"Інструмент для візуалізації складних JSON-структур у вигляді зрозумілих та інтерактивних граф-схем.\\nПостачальник: Aykut Saraç\\nДата випуску: 2022 рік","buttonText":"Візуалізувати JSON","tags":["it","інструменти","json"]},{"id":186,"title":"SVGOMG","url":"https://jakearchibald.github.io/svgomg/","snippet":"Зручний веб-інтерфейс для оптимізації та стиснення векторних SVG-файлів без втрати якості.\\nПостачальник: Jake Archibald\\nДата випуску: 2015 рік","buttonText":"Оптимізувати SVG","tags":["веб","оптимізація","дизайн"]},{"id":187,"title":"CodePen","url":"https://codepen.io/","snippet":"Онлайн-середовище для тестування, демонстрації та обміну HTML, CSS і JavaScript кодом у реальному часі.\\nПостачальник: Alex Vazquez, Tim Sabat, Chris Coyier\\nДата випуску: 2012 рік","buttonText":"Створювати пени","tags":["it","веб","програмування"]},{"id":188,"title":"Supercook","url":"https://www.supercook.com/","snippet":"Генератор рецептів, який підбирає страви на основі списку продуктів, що вже є у вашому холодильнику.\\nПостачальник: Assaf Rozenblatt\\nДата випуску: 2010 рік","buttonText":"Знайти рецепт","tags":["кулінарія","інструменти","корисно"]},{"id":189,"title":"PrintFriendly","url":"https://www.printfriendly.com/","snippet":"Очищає веб-сторінки від реклами та зайвих елементів для зручного друку або збереження в PDF.\\nПостачальник: Taylor Robinson\\nДата випуску: 2009 рік","buttonText":"Підготувати до друку","tags":["інструменти","pdf","друк"]},{"id":190,"title":"Musicca","url":"https://www.musicca.com/uk","snippet":"Безкоштовна платформа для вивчення теорії музики, нотної грамоти та гри на віртуальних інструментах.\\nПостачальник: Musicca International\\nДата випуску: 2019 рік","buttonText":"Вчити музику","tags":["музика","освіта","навчання"]},{"id":191,"title":"Lucide Icons","url":"https://lucide.dev/","snippet":"Красивий, послідовний та відкритий набір іконок для сучасних вебдодатків та інтерфейсів.\\nПостачальник: Lucide Open Source Community\\nДата випуску: 2021 рік","buttonText":"Шукати іконки","tags":["дизайн","веб","іконки"]},{"id":192,"title":"Squoosh","url":"https://squoosh.app/","snippet":"Просунутий онлайн-компресор зображень від Google з можливістю порівняння форматів та якості в реальному часі.\\nПостачальник: Google Chrome Labs\\nДата випуску: 2018 рік","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":193,"title":"Type Lit","url":"https://www.typelit.io/","snippet":"Тренажер сліпого друку, де ви практикуєтеся у швидкості набору, передруковуючи класичні художні книги.\\nПостачальник: TypeLit Team\\nДата випуску: 2020 рік","buttonText":"Тренувати друк","tags":["навчання","тренажер","книги"]},{"id":194,"title":"Ray.so","url":"https://ray.so/","snippet":"Створюйте вражаючі та стильні скріншоти коду з градієнтним фоном для соціальних мереж та портфоліо.\\nПостачальник: Raycast\\nДата випуску: 2021 рік","buttonText":"Згенерувати картку","tags":["it","дизайн","інструменти"]},{"id":195,"title":"Coming Soon","url":"11111Coming Soon11111","snippet":"Дні - білі\\nНочі - чорні\\nСонце - жовте\\nІндичатко - горде\\nОчікуйте оновлень...","buttonText":"Очікуйте","tags":["секрет"]}]`),x0=t=>`https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&format=json&origin=*`,b0=(t="")=>t.replace(/<span class="searchmatch">/g,"").replace(/<\/span>/g,"").trim()||"Без опису",lo=[{name:"Конотоп",fullName:"Конотоп (Сумська обл., Україна)",lat:51.24,lon:33.2,aliases:["конотоп","конотопі","конотопу","конотопом","konotop"]},{name:"Київ",fullName:"Київ (Україна)",lat:50.45,lon:30.52,aliases:["київ","києві","києва","києвом","kyiv","kiev"]},{name:"Харків",fullName:"Харків (Харківська обл., Україна)",lat:49.99,lon:36.23,aliases:["харків","харкові","харкова","харковом","kharkiv","kharkov"]},{name:"Одеса",fullName:"Одеса (Одеська обл., Україна)",lat:46.48,lon:30.72,aliases:["одеса","одесі","одеси","одесою","odesa","odessa"]},{name:"Дніпро",fullName:"Дніпро (Дніпропетровська обл., Україна)",lat:48.46,lon:35.04,aliases:["дніпро","дніпрі","дніпра","дніпром","dnipro","dnepropetrovsk"]},{name:"Львів",fullName:"Львів (Львівська обл., Україна)",lat:49.84,lon:24.03,aliases:["львів","львові","львова","львовом","lviv","lwo"]},{name:"Запоріжжя",fullName:"Запоріжжя (Запорізька обл., Україна)",lat:47.84,lon:35.14,aliases:["запоріжжя","запоріжжі","zaporizhzhia","zaporozhye"]},{name:"Кривий Ріг",fullName:"Кривий Ріг (Дніпропетровська обл., Україна)",lat:47.91,lon:33.39,aliases:["кривий ріг","кривому розі","кривого рогу","kryvyi rih"]},{name:"Миколаїв",fullName:"Миколаїв (Миколаївська обл., Україна)",lat:46.98,lon:32,aliases:["миколаїв","миколаєві","миколаєва","mykolaiv","nikolaev"]},{name:"Вінниця",fullName:"Вінниця (Вінницька обл., Україна)",lat:49.23,lon:28.48,aliases:["вінниця","вінниці","вінницею","vinnytsia","vinnitsa"]},{name:"Полтава",fullName:"Полтава (Полтавська обл., Україна)",lat:49.59,lon:34.55,aliases:["полтава","полтаві","полтави","poltava"]},{name:"Чернігів",fullName:"Чернігів (Чернігівська обл., Україна)",lat:51.49,lon:31.29,aliases:["чернігів","чернігові","чернігова","chernihiv","chernigov"]},{name:"Черкаси",fullName:"Черкаси (Черкаська обл., Україна)",lat:49.44,lon:32.06,aliases:["черкаси","черкасах","черкасів","cherkasy","cherkassy"]},{name:"Суми",fullName:"Суми (Сумська обл., Україна)",lat:50.91,lon:34.8,aliases:["суми","сумах","сум","sumy"]},{name:"Житомир",fullName:"Житомир (Житомирська обл., Україна)",lat:50.25,lon:28.66,aliases:["житомир","житомирі","житомира","zhytomyr"]},{name:"Хмельницький",fullName:"Хмельницький (Хмельницька обл., Україна)",lat:49.42,lon:27,aliases:["хмельницький","хмельницькому","khmelnytskyi"]},{name:"Рівне",fullName:"Рівне (Рівненська обл., Україна)",lat:50.62,lon:26.25,aliases:["рівне","рівному","rovno","rivne"]},{name:"Чернівці",fullName:"Чернівці (Чернівецька обл., Україна)",lat:48.29,lon:25.93,aliases:["чернівці","чернівцях","chernivtsi"]},{name:"Кременчук",fullName:"Кременчук (Полтавська обл., Україна)",lat:49.07,lon:33.42,aliases:["кременчук","кременчуці","кременчука","kremenchuk"]},{name:"Тернопіль",fullName:"Тернопіль (Тернопільська обл., Україна)",lat:49.55,lon:25.59,aliases:["тернопіль","тернополі","ternopil"]},{name:"Івано-Франківськ",fullName:"Івано-Франківськ (Івано-Франківська обл., Україна)",lat:48.92,lon:24.71,aliases:["івано-франківськ","франківськ","івано-франківську","ivano-frankivsk"]},{name:"Луцьк",fullName:"Луцьк (Волинська обл., Україна)",lat:50.75,lon:25.34,aliases:["луцьк","луцьку","lutsk"]},{name:"Біла Церква",fullName:"Біла Церква (Київська обл., Україна)",lat:49.8,lon:30.12,aliases:["біла церква","білій церкві","bila tserkva"]},{name:"Ужгород",fullName:"Ужгород (Закарпатська обл., Україна)",lat:48.62,lon:22.3,aliases:["ужгород","ужгороді","uzhhorod"]},{name:"Шостка",fullName:"Шостка (Сумська обл., Україна)",lat:51.86,lon:33.47,aliases:["шостка","шостці","shostka"]},{name:"Умань",fullName:"Умань (Черкаська обл., Україна)",lat:48.75,lon:30.22,aliases:["умань","умані","uman"]},{name:"Бердичів",fullName:"Бердичів (Житомирська обл., Україна)",lat:49.89,lon:28.58,aliases:["бердичів","бердичеві","berdychiv"]},{name:"Дрогобич",fullName:"Дрогобич (Львівська обл., Україна)",lat:49.35,lon:23.5,aliases:["дрогобич","дрогобичі","drohobych"]},{name:"Нікополь",fullName:"Нікополь (Дніпропетровська обл., Україна)",lat:47.57,lon:34.4,aliases:["нікополь","нікополі","nikopol"]},{name:"Бровари",fullName:"Бровари (Київська обл., Україна)",lat:50.51,lon:30.79,aliases:["бровари","броварах","brovary"]},{name:"Павлоград",fullName:"Павлоград (Дніпропетровська обл., Україна)",lat:48.52,lon:35.87,aliases:["павлоград","павлограді","pavlohrad"]},{name:"Сєвєродонецьк",fullName:"Сєвєродонецьк (Луганська обл., Україна)",lat:48.95,lon:38.48,aliases:["сєвєродонецьк","северодонецьк","severodonetsk"]},{name:"Бердянськ",fullName:"Бердянськ (Запорізька обл., Україна)",lat:46.76,lon:36.79,aliases:["бердянськ","бердянську","berdyansk"]},{name:"Кам'янець-Подільський",fullName:"Кам'янець-Подільський (Хмельницька обл., Україна)",lat:48.68,lon:26.58,aliases:["кам'янець-подільський","кам'янець","kamianets-podilskyi"]},{name:"Олександрія",fullName:"Олександрія (Кіровоградська обл., Україна)",lat:48.67,lon:33.11,aliases:["олександрія","олександрії","oleksandriia"]},{name:"Мукачево",fullName:"Мукачево (Закарпатська обл., Україна)",lat:48.44,lon:22.72,aliases:["мукачево","мукачеве","mukachevo"]},{name:"Кам'янське",fullName:"Кам'янське (Дніпропетровська обл., Україна)",lat:48.51,lon:34.61,aliases:["кам'янське","дніпродзержинськ","kamianske"]},{name:"Кропивницький",fullName:"Кропивницький (Кіровоградська обл., Україна)",lat:48.51,lon:32.26,aliases:["кропивницький","кіровоград","kropyvnytskyi"]},{name:"Маріуполь",fullName:"Маріуполь (Донецька обл., Україна)",lat:47.1,lon:37.54,aliases:["маріуполь","маріуполі","mariupol"]},{name:"Севастополь",fullName:"Севастополь (Крим, Україна)",lat:44.62,lon:33.53,aliases:["севастополь","севастополі","sevastopol"]},{name:"Сімферополь",fullName:"Сімферополь (Крим, Україна)",lat:44.95,lon:34.1,aliases:["сімферополь","сімферополі","simferopol"]},{name:"Херсон",fullName:"Херсон (Херсонська обл., Україна)",lat:46.64,lon:32.61,aliases:["херсон","херсоні","kherson"]},{name:"Луганськ",fullName:"Луганськ (Луганська обл., Україна)",lat:48.57,lon:39.31,aliases:["луганськ","луганську","луганська","luhansk","lugansk"]},{name:"Донецьк",fullName:"Донецьк (Донецька обл., Україна)",lat:48.01,lon:37.8,aliases:["донецьк","донеччина","донецьку","донецька","donetsk"]},{name:"Макіївка",fullName:"Макіївка (Донецька обл., Україна)",lat:48.04,lon:37.97,aliases:["макіївка","макіївці","макіївку","makiivka","makeevka"]},{name:"Горлівка",fullName:"Горлівка (Донецька обл., Україна)",lat:48.3,lon:38.05,aliases:["горлівка","горлівці","горлівку","horlivka","gorlovka"]},{name:"Краматорськ",fullName:"Краматорськ (Донецька обл., Україна)",lat:48.74,lon:37.58,aliases:["краматорськ","краматорську","краматорська","kramatorsk"]},{name:"Слов'янськ",fullName:"Слов'янськ (Донецька обл., Україна)",lat:48.85,lon:37.61,aliases:["слов'янськ","слов'янську","слов'янська","sloviansk","slavyansk"]},{name:"Мелітополь",fullName:"Мелітополь (Запорізька обл., Україна)",lat:46.85,lon:35.37,aliases:["мелітополь","мелітополі","мелітополя","melitopol"]},{name:"Бахмут",fullName:"Бахмут (Донецька обл., Україна)",lat:48.59,lon:37.99,aliases:["бахмут","бахмуті","бахмуту","артемівськ","bakhmut"]},{name:"Ізмаїл",fullName:"Ізмаїл (Одеська обл., Україна)",lat:45.35,lon:28.83,aliases:["ізмаїл","ізмаїлі","ізмаїлу","izmail"]},{name:"Ніжин",fullName:"Ніжин (Чернігівська обл., Україна)",lat:51.05,lon:31.88,aliases:["ніжин","ніжині","ніжину","nizhyn","nezhin"]},{name:"Бориспіль",fullName:"Бориспіль (Київська обл., Україна)",lat:50.35,lon:30.95,aliases:["бориспіль","борисполі","борисполя","boryspil"]},{name:"Ірпінь",fullName:"Ірпінь (Київська обл., Україна)",lat:50.52,lon:30.24,aliases:["ірпінь","ірпені","ірпеня","irpin"]},{name:"Буча",fullName:"Буча (Київська обл., Україна)",lat:50.55,lon:30.21,aliases:["буча","бучі","бучу","bucha"]},{name:"Фастів",fullName:"Фастів (Київська обл., Україна)",lat:50.08,lon:29.91,aliases:["фастів","фастові","фастова","fastiv"]},{name:"Коломия",fullName:"Коломия (Івано-Франківська обл., Україна)",lat:48.53,lon:25.04,aliases:["коломия","коломиї","коломию","kolomyia"]},{name:"Стрий",fullName:"Стрий (Львівська обл., Україна)",lat:49.26,lon:23.85,aliases:["стрий","стрию","стриї","stryi","stryy"]},{name:"Калуш",fullName:"Калуш (Івано-Франківська обл., Україна)",lat:49.02,lon:24.36,aliases:["калуш","калуші","калуша","kalush"]},{name:"Ковель",fullName:"Ковель (Волинська обл., Україна)",lat:51.22,lon:24.71,aliases:["ковель","ковелі","ковеля","kovel"]},{name:"Коростень",fullName:"Коростень (Житомирська обл., Україна)",lat:50.95,lon:28.64,aliases:["коростень","коростені","коростеня","korosten"]},{name:"Сміла",fullName:"Сміла (Черкаська обл., Україна)",lat:49.22,lon:31.87,aliases:["сміла","смілі","смілу","smila"]},{name:"Первомайськ",fullName:"Первомайськ (Миколаївська обл., Україна)",lat:48.04,lon:30.85,aliases:["первомайськ","первомайську","pervomaisk"]},{name:"Чорноморськ",fullName:"Чорноморськ (Одеська обл., Україна)",lat:46.3,lon:30.66,aliases:["чорноморськ","чорноморську","іллічівськ","chornomorsk"]},{name:"Покровськ",fullName:"Покровськ (Донецька обл., Україна)",lat:48.28,lon:37.18,aliases:["покровськ","покровську","красноармійськ","pokrovsk"]},{name:"Енергодар",fullName:"Енергодар (Запорізька обл., Україна)",lat:47.5,lon:34.65,aliases:["енергодар","енергодарі","енергодару","enerhodar"]},{name:"Керч",fullName:"Керч (Крим, Україна)",lat:45.36,lon:36.47,aliases:["керч","керчі","керчю","kerch"]},{name:"Євпаторія",fullName:"Євпаторія (Крим, Україна)",lat:45.19,lon:33.36,aliases:["євпаторія","євпаторії","yevpatoria","evpatoria"]},{name:"Ялта",fullName:"Ялта (Крим, Україна)",lat:44.49,lon:34.16,aliases:["ялта","ялті","ялту","yalta"]},{name:"Феодосія",fullName:"Феодосія (Крим, Україна)",lat:45.03,lon:35.38,aliases:["феодосія","феодосії","feodosia"]},{name:"Алчевськ",fullName:"Алчевськ (Луганська обл., Україна)",lat:48.47,lon:38.79,aliases:["алчевськ","алчевську","alchevsk"]},{name:"Самар",fullName:"Самар (Дніпропетровська обл., Україна)",lat:48.63,lon:35.26,aliases:["самар","новомосковськ","новомосковську","samar","novomoskovsk"]},{name:"Шептицький",fullName:"Шептицький (Львівська обл., Україна)",lat:50.38,lon:24.23,aliases:["шептицький","червоноград","chervonohrad","sheptytskyi"]},{name:"Лозова",fullName:"Лозова (Харківська обл., Україна)",lat:48.89,lon:36.32,aliases:["лозова","лозовій","lozova"]},{name:"Ізюм",fullName:"Ізюм (Харківська обл., Україна)",lat:49.21,lon:37.26,aliases:["ізюм","ізюмі","ізюму","izium","izyum"]},{name:"Звягель",fullName:"Звягель (Житомирська обл., Україна)",lat:50.58,lon:27.63,aliases:["звягель","звягелі","новоград-волинський","zviahel"]}],Il=t=>{if(!t||typeof t!="string")return null;const n=t.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(!n)return null;for(const r of lo)if(r.name.toLowerCase()===n||r.aliases.some(c=>c.toLowerCase()===n))return r;for(const r of lo)if(r.aliases.some(c=>n.includes(c.toLowerCase())))return r;return null},Dl="data:image/webp;base64,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",y0=Te`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`,w0=Te`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`,v0=i.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`,k0=i.div`
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
  animation: ${y0} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`,j0=i.div`
  padding: 8px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)"};
`,S0=i.div`
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
`,C0=i.button`
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
`,T0=i.div`
  padding: 12px 20px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 10;
`,A0=i.div`
  position: relative;
  flex: 1;
`,I0=i.button`
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
`,D0=i.div`
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
  animation: ${w0} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 20;
`,M0=i.label`
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
`,z0=i.div`
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
`,R0=i.button`
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
`,L0=i.div`
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
`,$0=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,E0=i.div`
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
`,ki=i.div`
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
`,F0=i.div`
  padding: 16px 20px;
  border-top: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#16171b":"#fafafa"};
`,P0=i.input`
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
`,N0=i.button`
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
`,Ar=[{id:"коротко",label:"Коротко"},{id:"докладно",label:"Докладно"},{id:"науково",label:"Науково"},{id:"дружньо",label:"Дружньо"},{id:"саркастично",label:"Саркастично"}];function O0({isOpen:t,onClose:n,newsItem:r,isDarkMode:c}){const[l,s]=(0,a.useState)(["докладно"]),[y,p]=(0,a.useState)(!1),[m,f]=(0,a.useState)([]),[g,N]=(0,a.useState)(""),[M,z]=(0,a.useState)(!1),[R,I]=(0,a.useState)(""),b=(0,a.useRef)(null),w=(0,a.useRef)(null);(0,a.useEffect)(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),(0,a.useEffect)(()=>{const P=V=>{w.current&&!w.current.contains(V.target)&&p(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[]),(0,a.useEffect)(()=>{if(!t)return;u.default.getItem("gemini_api_key").then(V=>I(V));const P=`news_ai_chat_${r?.link||"general"}`;u.default.getItem(P).then(V=>{V?Date.now()-V.timestamp>864e5?f([]):f(V.messages||[]):f([])})},[t,r]),(0,a.useEffect)(()=>{b.current?.scrollIntoView({behavior:"smooth"})},[m,M]);const O=P=>{s(V=>V.includes(P)?V.length>1?V.filter(fe=>fe!==P):V:[...V,P])},v=P=>{const V=P.slice(-20),fe=`news_ai_chat_${r?.link||"general"}`;u.default.setItem(fe,{timestamp:Date.now(),messages:V}),f(V)},$=async(P=null)=>{const V=P||g;if(!V.trim()||M)return;if(!R){alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");return}const fe=l.map(Z=>Ar.find(ie=>ie.id===Z)?.label).join(", "),ae={text:P?`[Режими: ${fe}] Зроби виклад цієї новини.`:V,isBot:!1},B=[...m,ae];P||N(""),f(B),z(!0);try{const Z=new po(R).getGenerativeModel({model:"gemini-2.5-flash"});let ie=`Ти - ШІ-помічник. Твоє завдання зробити виклад новини та відповідати на питання щодо неї.
`;ie+=`Скомбінуй у відповіді такі стилі: ${l.join(", ")}.
`,l.includes("коротко")&&(ie+=`- Відповідай стисло, головна суть у 1-3 реченнях.
`),l.includes("докладно")&&(ie+=`- Надай розгорнуту інформацію з деталями та структурою.
`),l.includes("науково")&&(ie+=`- Використовуй академічний тон, аналітичний підхід та відповідну термінологію.
`),l.includes("дружньо")&&(ie+=`- Пиши приязно, неформально, додавай емодзі.
`),l.includes("саркастично")&&(ie+=`- Додай витончену іронію та сарказм (цензурно, без образ).
`);const ke=`${ie}
Новина:
Заголовок: ${r?.title||""}
Опис: ${r?.description||""}
Посилання: ${r?.link||""}

Запит користувача: ${V}`,xe={text:(await Z.generateContent(ke)).response.text(),isBot:!0};v([...B,xe])}catch(Z){console.error(Z);const ie={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};v([...B,ie])}finally{z(!1)}},q=()=>{p(!1),$("Будь ласка, зроби виклад цієї новини відповідно до обраних режимів.")};if(!t)return null;const U=l.length===0?"Оберіть режим...":l.map(P=>Ar.find(V=>V.id===P)?.label).join(", ");return(0,Cl.createPortal)((0,e.jsx)(v0,{onClick:n,children:(0,e.jsxs)(k0,{$isDarkMode:c,onClick:P=>P.stopPropagation(),children:[(0,e.jsxs)(j0,{$isDarkMode:c,children:[(0,e.jsxs)(S0,{children:[(0,e.jsx)("span",{children:"✨"}),(0,e.jsx)("h3",{children:"ШІ Виклад Новини"})]}),(0,e.jsx)(C0,{$isDarkMode:c,onClick:n,title:"Закрити",children:"✕"})]}),(0,e.jsxs)(T0,{$isDarkMode:c,children:[(0,e.jsxs)(A0,{ref:w,children:[(0,e.jsxs)(I0,{$isDarkMode:c,onClick:()=>p(!y),children:[(0,e.jsx)("span",{children:U}),(0,e.jsx)("span",{style:{fontSize:"10px",opacity:.6},children:y?"▲":"▼"})]}),y&&(0,e.jsx)(D0,{$isDarkMode:c,children:Ar.map(P=>{const V=l.includes(P.id);return(0,e.jsxs)(M0,{$isDarkMode:c,children:[(0,e.jsx)("input",{type:"checkbox",checked:V,onChange:()=>O(P.id)}),(0,e.jsx)(z0,{$checked:V,$isDarkMode:c}),P.label]},P.id)})})]}),(0,e.jsx)(R0,{onClick:q,disabled:M,children:"Згенерувати виклад"})]}),(0,e.jsx)(L0,{$isDarkMode:c,children:m.length===0&&!M?(0,e.jsxs)(E0,{$isDarkMode:c,children:[(0,e.jsx)("span",{children:"🤖"}),"Оберіть бажані стилі у випадаючому списку вище та натисніть ",(0,e.jsx)("b",{children:'"Згенерувати виклад"'}),", або поставте власне питання нижче!"]}):(0,e.jsxs)($0,{children:[m.map((P,V)=>(0,e.jsx)(ki,{$isBot:P.isBot,$isDarkMode:c,children:(0,e.jsx)(bd,{children:P.text})},V)),M&&(0,e.jsx)(ki,{$isBot:!0,$isDarkMode:c,children:"Аналізую та генерую відповідь... 🧠"}),(0,e.jsx)("div",{ref:b})]})}),(0,e.jsxs)(F0,{$isDarkMode:c,children:[(0,e.jsx)(P0,{$isDarkMode:c,value:g,onChange:P=>N(P.target.value),onKeyPress:P=>P.key==="Enter"&&$(),placeholder:"Задайте питання щодо цієї новини...",disabled:M}),(0,e.jsx)(N0,{onClick:()=>$(),disabled:M||!g.trim(),children:"➔"})]})]})}),document.body)}var V0=JSON.parse(`[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n  Погода, музика і безпечні новини, та купа інструментів, чекають на вас!","image":null},{"q":"Угода користувача","a":"Ця Угода є юридично обов'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"preview"},{"q":"Про клімат без цензури","a":"Друзі, я не хочу спілкуватись про цю тему. Проте важливо поговорити про це.\\n          Отже погода, є частиною політики, нечасто, але так.\\n          В Америці є станція для вивчення погоди(HARP), яка пливає на магнітне поле і погоду по всьому світу. \\n          На жаль, розвінчати чи підтвердити данну інформацію неможливо, оскільки джерело конспірологічне, але є дуже переконливі докази. \\n     Якщо є докази, що конспірологія не бреше, присилайте на пошту. Для метеоролога це дуже важливо. \\n          Такі досліди становлять загрозу для планети, і життя людей. Словами це не зупинити. Тому прошу, робіть все що можете, щоб зупинити ці досліди.\\n          Прикро що новини, постійно говорять про політику та показують рекламу. Але про погоду рідко, а тим паче про те, що треба це зупинити.","image":"texts"},{"q":"Співпраця та поради. Можливості сайту.","a":"Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую. А ось можливості сайту: Погода, музика, фан-арти, ШІ і т.д.","image":"might"},{"q":"Історія власників сайту...Не реальних: Кейт, Доміно, Марти...","a":"Це секрет поки.","image":"might"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"hills"},{"q":"🌤 Погода: часті питання","a":"Чому показує не те місто? — Введіть повну назву міста або додайте країну через кому, наприклад: «Київ, Україна».\\n\\nЧому немає прогнозу? — Можливо, API-ліміт вичерпано. Зачекайте кілька хвилин і спробуйте знову.\\n\\nЩо означають значки поруч із містом? — Червоний або оранжевий знак оклику попереджає про небезпечні погодні умови (детальніше у розділі «Погода: навчання»).\\n\\nЯк прибрати місто зі списку? — Натисніть хрестик (✕) на картці міста.\\n\\nЧому УФ-індекс = 0 вночі? — Це нормально: УФ-випромінювання відсутнє без сонця.\\n\\nЯк дізнатись вологість ґрунту або атмосферний тиск? — Ці дані відображаються у розгорнутому вигляді картки «Зараз».","image":"hills"},{"q":"🌤 Погода: додаткові відомості","a":"Крім, назви міста ви можете зробити пошук по координатам.\\n Замітки: під логотипом є поле з датою, назвою(до 12символів) і кнопкою додати.\\nЯкщо ви не ввели дату(лише назву), то ви моджете встановити дату, натиснувши пару разів на дату у 16денному прогнозі.\\nДата підсвічується синім кольором у 16денному прогнозі. Для того щоб прибрати натисніть на дату і назву події в фіолетовому полі, під об'єктом встановленням дати.","image":"hills"},{"q":"Бундючий пошук","a":"Тут ми розміщуємо 200-250 цікавих, корисних сайтів та ігор... А також статті з Вікіпедії. При натиску на зірочку, ви можете перейти на сайт не вводячі символів.","image":null},{"q":"Відсутність реклами на музику","a":"Це трохи дивно, але логічно. Ми поважаємо авторське право. Заробляти на чужих піснях — це неправильно.","image":"three"},{"q":"📰 Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":null},{"q":"📰 Новини: часті питання","a":"Чому деякі RSS не працюють? — Деякі сайти мають «биті» або порожні стрічки. Перевірте посилання через W3C Feed Validator або відкрийте його у браузері.\\n\\nЧи можна додати Facebook чи Twitter? — Ні. Ці платформи не мають RSS. Можна скористатись сторонніми конверторами (наприклад, RSS.app), але вони зазвичай платні.\\n\\nЧому новина не оновлюється? — RSS-стрічки оновлюються з боку самого сайту-джерела. Якщо джерело давно не публікувало — новин не буде.\\n\\nЯк поскаржитись на новину, що проскочила фільтр? — Надішліть скаргу на email: theturkeystudio@gmail.com з посиланням на новину.\\n\\nРекомендовані RSS-джерела:\\n• ScienceDaily: https://www.sciencedaily.com/rss/top/science.xml\\n• NASA: https://www.nasa.gov/rss/dyn/breaking_news.rss\\n• Суспільне: https://suspilne.media/feed/news/rss-uk.xml\\n• BBC World: https://feeds.bbci.co.uk/news/world/rss.xml\\n• TechCrunch: https://techcrunch.com/feed/\\n• The Verge: https://www.theverge.com/rss/index.xml\\n• Укрінформ: https://www.ukrinform.ua/rss\\n• IGN (ігри): https://feeds.feedburner.com/ign/news\\n• TED Talks: https://feeds.feedburner.com/TEDTalks_video","image":null},{"q":"Навчання по управлінню новинами","a":"У Стихії в розділі новини, ви можете додавати власні новинні сайти: RSS-стрічку. \\n      А у налаштуваннях, ви можете налаштувати автоскрол новин при відкритті сайту, і прибрати заголовок та опис новини\\nПримітка: Новини з елементами: війни, політики, 18+, порно, сексу, еротики, криміналу, суду, затримання, казино, корупції, релігії(виняток привітання зі святом, у погодних картках), таємних товариств(конспірологія або теорії змови), теракту, секти. Не відображаються. У разі якщо сайт показав вище перечислений елемент, ви можете(навіть мусите) надіслати скаргу на email! Ми хочемо щоб користувачі Стихії могли бачити к-ка погодних місць одночасно, ностальгувати, слухати музику без лімітів і реклами, а також щоб новини(більшість з яких погані) не псували вам день. \\nПримітка: Якість RSS: Деякі сайти мають \\"биті\\" або порожні RSS-стрічки. Якщо ви спробуєте додати таку, вам видасться помилка або нічого не покаже.\\nДля перевірки необхідно використати безкоштовні онлайн-валідатори, як-от W3C Feed Validation Service або просто відкрити посилання в браузері.\\nОбмеження, які важливо враховувати:\\nRSS-формат: Якщо сайт просто \\"новинний\\", але не має RSS (наприклад, Facebook або Twitter), ви не зможете його додати. Йому потрібно буде шукати спеціальні сервіси, що конвертують сторінки в RSS (наприклад, RSS.app), але це зазвичай платні послуги.\\nМітка Нове: Видима 1хв після скролу до новини.\\nДля тих хто має Google АІ Key, є функція ШІ виклад, чат-бот в плані новини, 1новина=10останніх повідомлень, повне очищення через 24год відсутності питань.\\n\\nНаука та технології:\\nScienceDaily (Top News): https://www.sciencedaily.com/rss/top/science.xml\\nNature (Research Highlights): https://www.nature.com/nature.rss\\nWired (Technology): https://www.wired.com/feed/category/science/feed/\\nTechCrunch: https://techcrunch.com/feed/\\nNASA (Breaking News): https://www.nasa.gov/rss/dyn/breaking_news.rss\\nThe Verge: https://www.theverge.com/rss/index.xml\\n\\nСвітові новини та аналітика:\\nBBC News (World): https://feeds.bbci.co.uk/news/world/rss.xml\\nReuters (Top News): https://feeds.reuters.com/reuters/topNews\\nAl Jazeera (English): https://www.aljazeera.com/xml/rss/all.xml\\nThe Economist (World): https://www.economist.com/world/rss.xml\\n\\nУкраїна (Українською):\\nУкраїнська правда: https://www.pravda.com.ua/rss/\\nNV.ua: https://nv.ua/rss/all.xml\\nСуспільне Новини: https://suspilne.media/feed/news/rss-uk.xml\\nУкрінформ: https://www.ukrinform.ua/rss\\n\\nБізнес та Економіка:\\nBloomberg (Technology): https://feeds.bloomberg.com/technology/news.rss\\nHarvard Business Review: https://hbr.org/rss/topics/leadership\\n\\nРозваги, Культура та Інше:\\nIGN (Games): https://feeds.feedburner.com/ign/news\\nNational Geographic: https://feeds.feedburner.com/ng/science\\nTED Talks: https://feeds.feedburner.com/TEDTalks_video\\nLifehacker: https://lifehacker.com/rss\\n\\nЯкщо ви помітили, що якась новина не оновлюється або посилання не працює — будь ласка, повідомте нам. Ми постійно оновлюємо список джерел.\\nІще дещо для соцмереж і т.д:\\n1. Telegram (Найпростіше для RSS)\\nRSSHub: Готовий публічний сервіс, який перетворює майже будь-що на RSS. Для Telegram-каналу достатньо посилання:\\n[https://rsshub.app/telegram/channel/ім_я_каналу](https://rsshub.app/telegram/channel/ім_я_каналу)\\nTGStat / Telemetr RSS: Деякі агрегатори надають готові RSS-стрічки публічних каналів.\\nTelegram Bot API (JS Wrapper): Створити безкоштовного бота, додати його в канал (або читати публічний канал через getChatHistory) і пересилати пости у свій React-додаток через REST API.\\n2. YouTube\\nУ YouTube є вбудовані безкоштовні RSS-стрічки для кожного каналу, про які мало хто знає. Всі відео та шортси каналу можна отримувати без жодних ключі API:\\nЗа ID каналу:\\n[https://www.youtube.com/feeds/videos.xml?channel_id=UC](https://www.youtube.com/feeds/videos.xml?channel_id=UC)...\\nЗа назвою каналу (через RSSHub):\\n[https://rsshub.app/youtube/user/ім_я_користувача](https://rsshub.app/youtube/user/ім_я_користувача)\\n\\n3. Facebook, Instagram, TikTok та Hive\\nЦі платформи найжорсткіше блокують прямий доступ. Щоб читати блогерів безкоштовно:\\nRSSHub (Universal Parser): Головний порятунок для фронтендера. Він має готові маршрути для TikTok, Instagram та Facebook:\\n[https://rsshub.app/tiktok/user/@username](https://rsshub.app/tiktok/user/@username)\\n[https://rsshub.app/instagram/user/username](https://rsshub.app/instagram/user/username)\\nRSS.app / Feed43: Безкоштовні веб-сервіси, які парсять HTML-сторінку блогера й видають вам готовий RSS XML/JSON (на безкоштовних тарифах є ліміти на 3-5 джерел, але для декількох затишних блогерів цього вистачає).\\nPuppeteer / Cheerio (Власний micro-scraper): Якщо задеплоїти невеличку безкоштовну Node.js функцію на Vercel чи Render, вона може раз на день заходити на сторінку та зчитувати останні пости.","image":null},{"q":"🤖 ШІ-Допомога: покроковий посібник","a":"Крок 1. Відкрийте розділ «Допомога ШІ» у меню.\\nКрок 2. Оберіть провайдера ШІ:\\n  • Gemini (Google) — потрібен Gemini API Key з aistudio.google.com\\n  Крок 3. Вставте ваш API-ключ у відповідне поле. Ключ зберігається лише на вашому пристрої.\\nКрок 4. Оберіть обсяг відповіді: Менше / Нормально / Більше.\\nКрок 5. Оберіть стиль: Дружньо / Стандартно / Науково.\\nКрок 6. Напишіть запитання у текстовому полі. Натисніть Enter або кнопку ➤.\\nКрок 7 (Gemini). Можна прикріпити: фото, відео або аудіофайл — натисніть іконку 📎. Gemini проаналізує вміст.\\nКрок 8 (Gemini). Кнопка 📸 — робить скріншот поточної сторінки і відправляє Gemini: «Поясни що бачиш» або «Що можна покращити на цій сторінці?»\\nКрок 9. Натисніть на прикріплений файл щоб переглянути його на весь екран.\\nКрок 10. Кнопка 📋 на відповіді бота — копіює текст у буфер обміну.\\nКрок 11. 🎤 — голосовий ввід запитання (підтримує українську мову).\\nКрок 12. 🧹 — очищає всю історію чату.\\nПорада: Shift+Enter = новий рядок у запиті без відправлення.","image":null},{"q":"🤖 ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\nЧи може ШІ аналізувати сторінку сайту? — Так! Тільки для Gemini: натисніть 📸, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":null},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Відкрийте розділ «Карта» або «Клімат» у меню.\\nКрок 2. На карті відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.","image":"texts"},{"q":"🗺 Карта клімату: часті питання","a":"Чому карта не завантажується? — Перевірте інтернет-з'єднання. Карта потребує стабільного підключення.\\n\\nЧи можна зберегти знімок карти? — Використовуйте скріншот браузера або функцію ШІ 📸.\\n\\nЩо означають кольори на карті? — Зазвичай: синій — холодно, жовтий — тепло, червоний — спека або аномалія. Конкретне пояснення — у легенді на карті.","image":"texts"},{"q":"🎨 Фан-арти: покроковий посібник","a":"Крок 1. Відкрийте розділ «Фан-арти».\\nКрок 2. Перегляньте галерею — зображення відображаються у сітці.\\nКрок 3. Клікніть на зображення, щоб відкрити його у повноекранному режимі.\\nКрок 4. У повноекранному режимі можна:\\n  • Завантажити зображення.\\n  • Поділитися (якщо функція доступна).\\nКрок 5. Усі фан-арти намальовані вручну автором сайту. Права на власні твори залишаються за вами — деталі в Угоді користувача.","image":"two"},{"q":"🎨 Фан-арти: часті питання","a":"Чи можна завантажити фан-арт? — Так. Натисніть іконку завантаження в повноекранному режимі.\\n\\nЧи можна надіслати свій малюнок? — Напишіть на theturkeystudio@gmail.com. Можливо, вашу роботу додадуть до галереї!\\n\\nЩирість важливіша за досконалість.\\n\\nЧи можна використати фан-арти комерційно? — Тільки у роздрукованому вигляді з підписом автора. Докладніше — в Угоді користувача, пункт 3.2.","image":"two"},{"q":"🎬 Декоратор: покроковий посібник","a":"Крок 1. Відкрийте розділ «Декоратор».\\nКрок 2. Оберіть базовий шаблон або зображення.\\nКрок 3. Додавайте декоративні елементи: рамки, стікери, ефекти.\\nКрок 4. Налаштуйте положення, розмір та прозорість кожного елемента.\\nКрок 5. Завантажте готовий результат кнопкою «💾 Зберегти».","image":null},{"q":"🖥 Загальне: навігація та меню","a":"Меню ☰ (гамбургер) — відкриває бокову панель з усіма розділами сайту.\\nКожна кнопка у меню має підказку — наведіть курсор для опису функції.\\nЛого Стихії — три кнопки:\\n  • Зліва — завантажити поточний вигляд.\\n  • Вгорі — друкувати.\\n  • Справа — повноекранний режим.\\nТемна/Світла тема — перемикач у шапці (Header).\\nАдаптивність: сайт повністю адаптований для мобільних пристроїв.","image":"logofix"},{"q":"🖥 Загальне: часті питання","a":"Що таке Стихія? — Це веб-платформа «погода + музика + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧи є підписка? — Так, деякі функції можуть бути доступні за підпискою. Ціни можуть змінюватись з попередженням за 3 тижні.\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам.","image":"one"},{"q":"За що відповідає меню?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна) Доступ після реєстрації. Та багато чого ще...","image":"logofix"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди, міток на карті та впевненості, що контент використовується за призначенням.","image":"one"},{"q":"Плани і тематика","a":"Сайту з багатьма відсилками ще ніколи не було. Працюю над поліпшенням теперішнього, та додаванхням відсилок і я відкритий до ваших ідей! The strangest site of all.","image":"two"}]`),B0="/assets/logo-CeE8IWwr.webp",_0="/assets/prewiew-CkyBq-Ws.webp",H0="/assets/what-Dh9YNb09.webp",ji="/assets/myone-Dyn4Do12.webp",U0="/assets/mytwo-DY56vL7p.webp",K0="/assets/soon-Cz5fTUD_.webp",q0="/assets/mythree-BY2evDkD.webp",Ml=rs({Tooltip:()=>va,default:()=>$l}),W0=i.div`
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
`,G0=Te`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,J0=Te`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,zl=Te`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,Y0=Te`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,Rl=qt`
  opacity: 0;
  transform-origin: left center;
  animation: ${Y0} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:t})=>qt`
    animation-delay: ${.1+(t||0)*.05}s;
  `}
`,Z0=i.div`
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
`,X0=i.div`
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
  animation: ${t=>t.$isClosing?J0:G0} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,Q0=i.div`
  background:  ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,ef=i.div`
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
`,tf=i.div`
  display: flex;
  justify-content: center;
`,Si=i.button`
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
`,Ll=i.button`
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
`,nf=i(Ll)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${zl} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,af=i.div`
  margin-top: 3px;
`,rf=i.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${Rl}
`,of=i.div`
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
`,sf=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`,lf=i.div`
  flex: 1;
`,Ci=i.button`
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
`,df=i.div`
  display: flex;
  align-items: center;
  gap: 7px;
`,cf=i.span`
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${t=>t.$isOpen?"rotate(180deg)":"rotate(90deg)"};
`,uf=i.div`
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
`,Ti=i.img`
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
`,pf=i.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${zl} 0.3s ease-out forwards;
`,Ai=i.button`
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
`,Ir=i.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  opacity: ${t=>t.$isHovered||t.$isPinned?1:0};
  pointer-events: ${t=>t.$isHovered||t.$isPinned?"auto":"none"};
`,In=i.button`
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
`,ff=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,gf=i.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,mf=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,hf=i.button`
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
  ${Rl}
`,Ii=i.input`
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
`,xf=i.div`
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
`,Di=i.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  max-width: 85%;
  position: relative;
  ${t=>t.$isUser?qt`
          background: #8a2be2;
          color: white;
          align-self: flex-end;
        `:qt`
          background: white;
          color: #333;
          align-self: flex-start;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        `}
`,bf=i.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  cursor: pointer;
  margin-top: 4px;
  text-decoration: underline;
`,yf=i.div`
  display: flex;
`,wf=i.button`
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
`,vf=i.button`
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
`,va=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)(W0,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})},$l=({onClose:t,isOpen:n,initialFaqQuestion:r,isDarkMode:c})=>{const[l,s]=(0,a.useState)(!1),y=lr(S=>S.calendar?.customDays||[]),[p,m]=(0,a.useState)([]),[f,g]=(0,a.useState)({}),[N,M]=(0,a.useState)(""),[z,R]=(0,a.useState)("faq"),I=1,b=-1;(0,a.useEffect)(()=>{(async()=>{try{const E=await u.default.getItem("training_actions_pinned");E!==null&&ie(E)}catch(E){console.error("Error loading pinned state:",E)}})()},[]);const[w,O]=(0,a.useState)([]),[v,$]=(0,a.useState)(!1),[q,U]=(0,a.useState)(""),P=(0,a.useRef)(null),V=(0,a.useRef)(null);(0,a.useEffect)(()=>{(async()=>{const E=await u.default.getItem("gemini_api_key"),ee=await u.default.getItem("user_help_session");E&&U(E),O(ee||[{text:"Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",isBot:!0}])})()},[]),(0,a.useEffect)(()=>{V.current&&(V.current.scrollTop=V.current.scrollHeight)},[w,v]);const fe=async S=>{await u.default.setItem("user_help_session",S.slice(-15))},[ae,B]=(0,a.useState)(null),[Z,ie]=(0,a.useState)(!1),[ke,xe]=(0,a.useState)(null),Ze=()=>{P.current&&P.current.abort(),$(!1)},Ae=async()=>{window.confirm("Очистити історію чату з асистентом?")&&(O([{text:"Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",isBot:!0}]),await u.default.removeItem("user_help_session"))},at=async S=>{S.stopPropagation();const E=!Z;ie(E),await u.default.setItem("training_actions_pinned",E)},ge=(0,a.useCallback)(()=>{if(ke){xe(null);return}xe(null),s(!0),setTimeout(()=>{s(!1),t()},400)},[t,ke]),Pe=S=>{const E=document.createElement("a");E.href=S,E.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild(E),E.click(),document.body.removeChild(E)},Ce=S=>{const E=window.open("","_blank");E.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${S}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),E.document.close()};(0,a.useEffect)(()=>{const S=E=>{E.key==="Escape"&&ge()};if(n||l)return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[n,l,ge]);const gt=(S,E)=>{const ee=(f[S]||0)===E?0:E;g({...f,[S]:ee})},mt=S=>{m(E=>E.includes(S)?E.filter(ee=>ee!==S):[...E,S])},ht=a.useMemo(()=>{const S=new Date().toISOString().split("T")[0];return y.filter(E=>E.date<S).sort((E,ee)=>ee.date.localeCompare(E.date)).slice(0,5)},[y]),We=a.useMemo(()=>{const S={hills:fo,texts:us,logofix:B0,preview:_0,info:H0,one:ji,two:U0,soon:K0,might:ji,three:q0},E=V0.map(ee=>({...ee,image:ee.image?S[ee.image]??null:null}));if(ht.length>0){const ee=ht.map(de=>`• ${de.date}: ${de.reason}`).join(`
`);E.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:

${ee}`,image:null})}return E},[ht]);if((0,a.useEffect)(()=>{if(!n){m([]);return}const S=[];if(r){const ee=We.findIndex(de=>de.q===r);ee>=0&&(S.push(ee),R("faq"))}const E=We.findIndex(ee=>ee.q==="Останнє оновлення");E>=0&&!S.includes(E)&&(S.push(E),R("faq")),m(S)},[We,r,n]),!n&&!l)return null;const ut=async()=>{if(!N.trim()||v)return;if(!q){alert("Будь ласка, встановіть API-ключ Gemini у налаштуваннях ШІ для використання цієї функції.");return}const S=N;M("");const E=[...w,{text:S,isBot:!1}];O(E),$(!0);try{const ee=new po(q).getGenerativeModel({model:"gemini-2.5-flash"}),de=We.map(ue=>`Q: ${ue.q} A: ${ue.a}`).join(`
`),Ee=ir.map(ue=>{const kt=ue.duration?`${Math.floor(ue.duration/60)}:${(ue.duration%60).toString().padStart(2,"0")}`:"невідомо",xt=ue.lyrics&&Array.isArray(ue.lyrics)?ue.lyrics.map(Ge=>`${Ge.time}s:${Ge.text}`).join("|").substring(0,100):"no",pt=ue.filters&&Array.isArray(ue.filters)?ue.filters.map(Ge=>`${Ge.start}-${Ge.end}s:${Ge.type}`).join("|"):"no";let He=`Song: ${ue.author}, Category: ${ue.category}, Duration: ${kt}, Lyrics: ${xt}..., Filters: ${pt}, Info: ${ue.text}`;if(ue.schedule){const Ge=ue.schedule.map(bt=>`S${bt.season}E${bt.ep}: ${bt.title} (${bt.date})`).join("; ");He+=`. Schedule: ${Ge}`}return He}).join(`
`),Ie=`Ти асистент проекту "Стихія". Тобі доступні дві бази даних:
      1. База FAQ: містить правила сайту та інструкції щодо розділу Погода. 
      2. База пісень: містить повний список треків (${ir.length} шт), авторів, тексти пісень.

      ІНСТРУКЦІЯ:
      - Якщо запит стосується температури, вітру, УФ-індексу або роботи розділу погоди — шукай у базі FAQ.
      - Якщо запит стосується конкретної пісні, її тривалості, тексту — шукай у Базі пісень.
      - Відповідай коротко, професійно та виключно українською мовою.

      КОНТЕКСТ FAQ: ${de.substring(0,2e3)}
      КОНТЕКСТ ПІСЕНЬ: ${Ee.substring(0,15e3)}

      ЗАПИТ КОРИСТУВАЧА: ${S}`,De=(await(await ee.generateContent(Ie)).response).text(),Xe=[...E,{text:De,isBot:!0}];O(Xe),await fe(Xe)}catch(ee){if(ee.name!=="AbortError"){const de=[...E,{text:"Помилка зв'язку з інтелектом. Перевірте ключ.",isBot:!0}];O(de)}}finally{$(!1)}},_e=S=>{M(w[S].text)},st=S=>{const E=/(https?:\/\/[^\s]+)/g;return S.split(E).map((ee,de)=>ee.match(E)?(0,e.jsx)("a",{href:ee,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:ee},de):ee)},vt=S=>S.content&&Array.isArray(S.content)&&S.content.length>0?S.content.map((E,ee)=>{if(E.type==="image"){const de=E.src||E.image,Ee=E.alt||S.q||"FAQ image";return(0,e.jsxs)("div",{style:{position:"relative",marginBottom:"10px"},children:[(0,e.jsx)(Ti,{src:de,alt:Ee,$isHovered:ae===de,$isPinned:Z,onClick:()=>xe(de),onMouseEnter:()=>B(de),onMouseLeave:()=>B(null)}),(0,e.jsxs)(Ir,{$isHovered:ae===de,$isPinned:Z,onMouseEnter:()=>B(de),onMouseLeave:()=>B(null),children:[(0,e.jsx)(In,{onClick:at,children:Z?"Відкріпити зображення":"Закріпити зображення"}),(0,e.jsx)(In,{onClick:Ie=>{Ie.stopPropagation(),Pe(de)},children:"Скачати"}),(0,e.jsx)(In,{onClick:Ie=>{Ie.stopPropagation(),Ce(de)},children:"Друкувати"})]})]},`image-${ee}`)}if(E.type==="text"){const de=E.value||E.text||"";return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:String(de).replace(/\n/g,"<br/>")}},`text-${ee}`)}return null}):(0,e.jsxs)(e.Fragment,{children:[S.image&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Ir,{$isHovered:ae===S.image,$isPinned:Z,onMouseEnter:()=>B(S.image),onMouseLeave:()=>B(null),children:[(0,e.jsx)(In,{onClick:at,children:Z?"Відкріпити зображення":"Прикріпити зображення"}),(0,e.jsx)(In,{onClick:E=>{E.stopPropagation(),Pe(S.image)},children:"Скачати"}),(0,e.jsx)(In,{onClick:E=>{E.stopPropagation(),Ce(S.image)},children:"Друкувати"})]})}),(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:(S.a||"").replace(/\n/g,"<br/>")}})]}),Re=[...We].map((S,E)=>({...S,originalIndex:E,rating:f[E]||0})).filter(S=>{if(!N)return!0;const E=N.toLowerCase();return S.q?.toLowerCase().includes(E)||S.a?.toLowerCase().includes(E)}).sort((S,E)=>E.rating-S.rating);return(0,e.jsxs)(Z0,{$isClosing:l,onClick:ge,children:[(0,e.jsxs)(X0,{$isDarkMode:c,$isClosing:l,onClick:S=>S.stopPropagation(),children:[(0,e.jsxs)(Q0,{$isDarkMode:c,children:[(0,e.jsx)(Ll,{onClick:ge,children:"Зрозуміло!"}),(0,e.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:c?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,e.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:c?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"}),(0,e.jsxs)(tf,{children:[(0,e.jsx)(Si,{$active:z==="faq",onClick:()=>R("faq"),style:{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",borderRight:"1px solid rgba(0, 0, 0, 0.1)"},children:"Питання (FAQ)"}),(0,e.jsx)(Si,{$active:z==="ai",onClick:()=>R("ai"),style:{borderBottomRightRadius:"20px",borderTopRightRadius:"20px"},children:"ШІ Асистент"})]})]}),(0,e.jsxs)(ef,{children:[z==="ai"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(xf,{ref:V,children:[w.map((S,E)=>(0,e.jsxs)(Di,{$isUser:!S.isBot,children:[st(S.text),!S.isBot&&E===w.length-1&&!v&&(0,e.jsx)(bf,{onClick:()=>_e(E),children:"редагувати"})]},E)),v&&(0,e.jsx)(Di,{$isUser:!1,children:"Думаю..."})]}),(0,e.jsxs)(yf,{children:[(0,e.jsx)(Ii,{type:"text",placeholder:"Запитай ШІ або шукай у FAQ...",value:N,onChange:S=>M(S.target.value),onKeyDown:S=>S.key==="Enter"&&ut()}),(0,e.jsx)(va,{content:"Очистити чат",isDarkMode:c,children:(0,e.jsx)(vf,{onClick:Ae,"aria-label":"Очистити чат",children:(0,e.jsx)(Xl,{})})}),v?(0,e.jsx)(va,{content:"Зупинити запит",isDarkMode:c,children:(0,e.jsx)(wf,{onClick:Ze,"aria-label":"Зупинити запит",children:"◼"})}):(0,e.jsx)(va,{content:"Відправити",isDarkMode:c,children:(0,e.jsx)(hf,{"aria-label":"Відправити",onClick:ut,children:"➤"})})]})]}),z==="faq"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ii,{type:"search",placeholder:"Пошук питань...","aria-label":"Пошук питань",value:N,onChange:S=>M(S.target.value)}),(0,e.jsxs)(af,{style:{marginTop:0},children:[Re.length===0&&(0,e.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),Re.map((S,E)=>{const ee=S.originalIndex,de=f[ee]||0;return(0,e.jsxs)(rf,{$index:E+1,children:[(0,e.jsx)(of,{$isDarkMode:c,$rating:de,onClick:()=>mt(ee),children:(0,e.jsxs)(sf,{children:[(0,e.jsx)(lf,{children:S.q}),(0,e.jsxs)(df,{children:[(0,e.jsx)(va,{content:"Корисно",isDarkMode:c,children:(0,e.jsx)(Ci,{onClick:Ee=>{Ee.stopPropagation(),gt(ee,I)},"aria-label":"Корисно",children:de===I?(0,e.jsx)(Go,{style:{color:"blue"}}):(0,e.jsx)(Go,{})})}),(0,e.jsx)(va,{content:"Не корисно",isDarkMode:c,children:(0,e.jsx)(Ci,{onClick:Ee=>{Ee.stopPropagation(),gt(ee,b)},"aria-label":"Не корисно",children:de===b?(0,e.jsx)(Qo,{}):(0,e.jsx)(Qo,{})})}),(0,e.jsx)(cf,{$isOpen:p.includes(ee),children:"▼"})]})]})}),(0,e.jsx)(uf,{$isDarkMode:c,$isOpen:p.includes(ee),children:(0,e.jsxs)(mf,{children:[S.image&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ti,{src:S.image,alt:S.q,$isHovered:ae===S.image,$isPinned:Z,onClick:()=>xe(S.image),onMouseEnter:()=>B(S.image),onMouseLeave:()=>B(null)}),(0,e.jsxs)(Ir,{$isHovered:ae===S.image,$isPinned:Z,onMouseEnter:()=>B(S.image),onMouseLeave:()=>B(null),children:[(0,e.jsx)(In,{onClick:at,children:Z?"Відкрипити зображення":"Закріпити зображення"}),(0,e.jsx)(In,{onClick:Ee=>{Ee.stopPropagation(),Pe(S.image)},children:"Скачати"}),(0,e.jsx)(In,{onClick:Ee=>{Ee.stopPropagation(),Ce(S.image)},children:"Друкувати"})]})]}),vt(S)]})})]},ee)})]})]})]})]}),ke&&(0,e.jsxs)(ff,{onClick:()=>xe(null),children:[(0,e.jsx)(nf,{onClick:()=>xe(null),children:"×"}),(0,e.jsxs)(pf,{children:[(0,e.jsx)(Ai,{onClick:S=>{S.stopPropagation(),Pe(ke)},children:"Скачати"}),(0,e.jsx)(Ai,{onClick:S=>{S.stopPropagation(),Ce(ke)},children:"Друкувати"})]}),(0,e.jsx)(gf,{src:ke,alt:"Прев'ю зображення",onClick:S=>S.stopPropagation()})]})]})},kf=[/війн(?:а|и|ою|і|нах)/iu,/бойов(?:і|их|им|ий|а|ої)/iu,/конфлікт(?:у|и|ів|ом)?/iu,new RegExp("(?<!\\p{L})фронт(?:у|і|ом)?(?!\\p{L})","iu"),/атак(?:а|и|у|ою|ам|ах|увал.*)/iu,/обстріл(?:у|и|ів|ом|ами)?/iu,new RegExp("безпілотник(?:и|ів|ами|ом)?|дрон(?:и|ів|ами)?|(?<!\\p{L})бпла(?!\\p{L})","iu"),/загибл(?:ий|их|і|им|ними)/iu,/поранен(?:ий|их|і|им|ними)/iu,/руйнуванн(?:я|ь|ям)/iu,/військов(?:ий|і|их|им|ними|е|а|ого)/iu,/армі(?:я|ї|ю|єю)/iu,/окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,/ракет(?:а|и|ний|них|ами)/iu,/збройн(?:і|их)\s+сил(?:и|)/iu,new RegExp("(?<!\\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})рф(?!\\p{L})|росі(?:я|ї|єю|йськ.*)|(?<!\\p{L})сша(?!\\p{L})|україн(?:а|и|і|ою)","iu"),/політик(?:а|и|ою|і|ів)/iu,/корупці(?:я|ї|ю|єю)/iu,/депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,new RegExp("(?<!\\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})мит(?:о|а|ам|ами|ах)(?!\\p{L})","iu"),new RegExp("уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\\p{L})влад(?:а|и|ою)(?!\\p{L})","iu"),/санкці(?:ї|й|ям|ями)/iu,/домовленість|переговор(?:и|ів|ами)/iu,/кримінал(?:у|ом)?/iu,/поліці(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})суд(?:у|ом|ів)?(?!\\p{L})","iu"),/затриман(?:о|ий|і|а)/iu,/вбивств(?:о|а|ом|ах)/iu,/крадіжк(?:а|и|ою|ах)/iu,/вирок(?:у|и|ів|ами|ах)?/iu,/в'?язниц(?:я|і|ю|ею|ях)/iu,/арешт(?:у|и|ів|ами|ах)?/iu,/теракт(?:и|ів|ами|ах|у)?/iu,/вибух(?:и|ів|ами|ах|у)?/iu,/злочин(?:у|и|ів|ом)?/iu,/напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,/побої|мордуванн(?:я|ь|ям)/iu,/душивши?|заламав/iu,/порно(?:графі|г| розроб| фільм.*)?/iu,/porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,/еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,new RegExp("секс(?:у|ом|уальн.*)?(?!\\p{L})","iu"),/\bsex(?:y|ual)?\b/iu,/onlyfans|онліфанс|онлифанс|only-?fans/iu,/webcam|вебкамер.*|вебка/iu,/(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,/оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,/без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,/інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,/стриптиз|топлес|topless/iu,/оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,/пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,/гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,/без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,/(?:онлайн\s*)?казино|casino/iu,/рулетк(?:а|и|у|ою|ці|ок)/iu,/слот(?:и|ів|ами|ах|ам)?|slots?/iu,/покер(?:у|ом|ний|ного)?|poker/iu,/азарт(?:у|ний|ні|них|ою|ість)?/iu,/гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,/ігров(?:і|их|им|ними)\s+автомат/iu,/однорук(?:ий|і)\s+бандит/iu,new RegExp("(?<!\\p{L})(?:краіл|кріаіл)(?!\\p{L})","iu"),/лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,/джекпот(?:и|ів|ом)?|jackpot/iu,/виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,/букмекер(?:и|ів|ського|ських|ська|ський)?/iu,/спортбетт?інг|sports?\s*betting|betting/iu,/gambl(?:e|ing|er)?/iu,/prediction\s+markets?/iu,/ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,/зроби(?:ти|в|ла)\s+ставку/iu,new RegExp("(?<!\\p{L})бк\\s+(?:букмекер|ставок|казино)(?!\\p{L})","iu"),/фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,/бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,/халяв(?:а|и|у|ою)/iu,/favbet|фавбет|favorit|фаворит/iu,/vbet|вбет/iu,/cosmolot|космолот/iu,/slots\s*city|слотс\s*сіт(?:і|и)/iu,/supergra|супер\s*гра|супергра/iu,/first\s*casino|ферст|фірст/iu,/casino\s*ua|казино\s*юа/iu,/champion\s*(?:casino)?|чемпіон\s*(?:казино)?/iu,/ggbet|ггбет/iu,/slotoking|слотокінг|слотокинг/iu,/pin-?up|пінап|пін\s*ап/iu,/slotor|слотор/iu,/777\s*casino|казино\s*777/iu,/parimatch|париматч|паріматч/iu,/1xbet|1хбэт|1хбет|1xslots/iu,/mostbet|мостбет/iu,/vulkan|vulcan|вулкан/iu,/joycasino|джойказино/iu,/casino-x|казино\s*ікс|казино\s*икс/iu,/vavada|вавада/iu,/melbet|мелбет/iu,/betwinner|бетвіннер|бетвиннер/iu,/megapari|мегапарі|мегапари/iu,/catcasino|catbet|кетказино|кетбет/iu,/john\s*bet|джон\s*біт/iu,/ice\s*casino|verde\s*casino|hitnspin/iu,/fonbet|фонбет|marathonbet|марафонбет/iu,/bet365|бет365/iu,/unibet|унібет|унибет/iu,/william\s*hill|вільям\s*хілл/iu,/888\s*(?:casino|poker)?/iu,/pokerstars|покерстарс/iu,/betfair|бетфеір|бетфеар/iu,/bwin|бвін/iu,/stake\s*(?:casino)?|bc\.game|roobet|rollbit/iu,/крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,/crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,/аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,/gallup/iu,/релігі(?:я|ї|ю|єю|йн.*)/iu,new RegExp("(?<!\\p{L})(?:пцу|упц|умп)(?!\\p{L})","iu"),/церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,/патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,/парафія|єпархія|лавра/iu,new RegExp("(?<!\\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\\p{L})|саєнтолог.*|свідки\\s+єгови","iu"),new RegExp("(?<!\\p{L})культ(?:и|ів|у|ом)?(?!\\p{L})","iu"),/масон(?:и|ів|ами|ах)?/iu,/жертвопринес.*|жертвопринош.*/iu,/гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,/мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,new RegExp("карт(?:и|ах)\\s+таро|(?<!\\p{L})гаданн(?:я|ь)(?!\\p{L})|нумеролог","iu"),/пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,/порч(?:а|і)|сглаз|приворо/iu,new RegExp("(?<!\\p{L})(?:набу|сап|бэб)(?!\\p{L})","iu"),/обшук(?:и|ів|ами|ах)?/iu,/детектив(?:и|ів|ам|ами)?/iu,/слідч(?:і|их|им|ий)\s+дії/iu,/слуг(?:а|и)\s+народу/iu,/фракці(?:я|ї|ю|єю)/iu,/міністр(?:и|ів|ам|ами|а)?/iu,/голосувати|голосуванн(?:я|ь)/iu,/підпал(?:и|ів|ам|ами)?/iu,/вербувати|завербува.*/iu,/аварі(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})(?:дзп|дтп)(?!\\p{L})","iu"),/врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,/травмован(?:і|их|ий|о)/iu,/постраждал(?:і|их|и)/iu,/вибор(?:и|ів|ам|ах|чий|чої)/iu,/опозиці(?:я|ї|ю|єю)/iu,/кампані(?:я|ї|ю)/iu,/партій(?:ний|них|ні|я|ї)/iu,/незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,/схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,/хабар(?:і|ів|ник.*)|хабарництво/iu,/шахрайств(?:о|а|і)|шахраї/iu,/зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,/скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,new RegExp("(?<!\\p{L})(?:ніцой|ларис(?:а|и|і|у)?\\s+ніцой)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:євген(?:а|у)?\\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\\s+євген(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:гордон(?:а|у|ом)?|дмитро\\s+гордон)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})спартак(?:\\s+суббот?а|\\s+суббот?и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\\s+алх[іi]м)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:янін(?:а|и)\\s+соколов(?:а|и)|сергі(?:й|я)\\s+притул(?:а|и)|олег\\s+скрипк(?:а|и))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\\p{L})","iu"),/василь\s+малюк/iu,new RegExp("(?<!\\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:ппо|гур|ова|кмва)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)","iu"),/повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,/блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,/інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|борг(?:и|ів)|дефіцит\s+бюджету/iu,/банкрутств(?:о|а)/iu,new RegExp("(?<!\\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\\p{L})","iu"),/фаріон/iu,new RegExp("(?<!\\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\\p{L})","iu"),new RegExp("ліндсі\\s+ґ?рем|(?<!\\p{L})ґ?рем(?!\\p{L})","iu"),new RegExp("джей\\s*ді\\s*венс|(?<!\\p{L})венс(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})каллас(?!\\p{L})","iu"),/урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,/лукашенк(?:о|а|у|ом)/iu,new RegExp("(?<!\\p{L})дуд(?:а|и|і|ою)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})санд(?:у|и|а)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\\p{L})","iu"),/хаменеї|пезешкіан|раїсі/iu,/сі\s*цзіньпін/iu,/кім\s*чен\s*ин/iu,/свастик(?:а|и|у|ою)/iu,/нацизмін?|нацист(?:и|ів|ський|ська)?/iu,/фашизмін?|фашист(?:и|ів|ський|ська)?/iu,/рашизмін?|рашист(?:и|ів|ський|ська)?/iu,/комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,/ґ?геббельс(?:а|у|ом)?/iu,/ґ?гіммлер(?:а|у|ом)?/iu,/ґ?герінг(?:а|у|ом)?/iu,/ґ?гесс(?:а|у|ом)?/iu,/борман(?:а|у|ом)?/iu,/ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,/ріббентроп(?:а|у|ом)?/iu,/менгеле/iu,/розенберг(?:а|у|ом)?/iu,/кальтенбруннер(?:а|у|ом)?/iu,/коновалець|коновальц(?:я|ю|ем)/iu,/бандер(?:а|и|і|у|ою|івськ.*)/iu,/шухевич(?:а|у|ем)?/iu,/андрі(?:й|я)\s+мельник/iu,/сталін(?:а|у|ом)?/iu,/ленін(?:а|у|ом)?/iu,/берій?(?:я|ї|ю|єю)/iu,/молотов(?:а|у|ом)?/iu,/гітлер(?:а|у|ом)?/iu,new RegExp("(?<!\\p{L})хер(?:а|у|ом|и)?(?!\\p{L})","iu"),/хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,/пизд|пізд|піпєц|пипец/iu,/(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,/(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,new RegExp("бляд(?:ь|і|я|ям|ство)|блять|(?<!\\p{L})бля(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})сук(?:а|и|ою|ам|ами)(?!\\p{L})","iu"),/гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,/срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,new RegExp("(?<!\\p{L})гівн(?:о|а|ом)|говно|лайно","iu"),/сцяв|засцян.*|сцяк/iu,/х[*#@$]+й|х[*#@$]+р/iu,/п[*#@$]+зд[аяiі]/iu,/б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,/є[*#@$]+б|е[*#@$]+б/iu,new RegExp("(?<!\\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:маск(?:а|у)?|ілон\\s*маск|ердоган(?:а|у)?|нетаньягу)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алл(?:а|и|і|у)?\\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\\s+мосейчук)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:квартал\\s*95|95\\s*квартал|95-?й?\\s*квартал|студі(?:я|ї|ю)\\s+квартал)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})дизель\\s*шоу(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\\p{L})","iu"),/мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,/призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,new RegExp("(?<!\\p{L})(?:генштаб(?:у|ом)?|гш\\s+зсу)(?!\\p{L})","iu"),/главком(?:а|у)?|командувач(?:а|і|ів)?/iu,/катуванн(?:я|ь|ям)|катува.*/iu,/побит(?:тя|тєм|ті)/iu,/зодіак(?:у|а|и)/iu],jf={a:"а",c:"с",e:"е",i:"і",o:"о",p:"р",x:"х",y:"у",k:"к",z:"з",n:"н"},Sf=/[\u00AD\u200B-\u200D\u2060\uFEFF]/g,Cf=/[\p{L}\p{M}]+/gu,Tf=/[a-z]/i,Af=/[а-яіїєґ]/iu,If=new RegExp("(?<=\\p{L})[^\\p{L}\\s\\n\\r]{0,3}(?=\\p{L})|(?<=\\p{L})[\\s\\n\\r]+(?=\\p{L})","gu"),Df=/[04513@$]/g,Mf={0:"о",4:"а",5:"с",1:"і",3:"е","@":"а",$:"с"},Mi=new RegExp(kf.map(({source:t})=>`(?:${t})`).join("|"),"iu"),El=t=>t?t.normalize("NFKC").replace(Sf,"").toLowerCase().replace(Cf,n=>!Tf.test(n)||!Af.test(n)?n:n.replace(/[aceiopxykzn]/g,r=>jf[r])):"",zf=t=>El(t).replace(Df,n=>Mf[n]).replace(If,""),zi=t=>Mi.test(t)||Mi.test(t.replace(/і/g,"и")),Rf=t=>{if(!t)return!1;const n=El(t);return zi(n)||zi(zf(t))},Lf=rs({Tooltip:()=>Ef,default:()=>Fl}),$f=i.div`
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
`,Ef=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)($f,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})},Ff=Te`
  from { opacity: 0; }
  to { opacity: 1; }
`,Pf=i.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`,Ri=[{url:"https://phys.org/rss-feed/biology-news/animals-news/",name:"Phys.org",home:"https://phys.org"}],Nf=i.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`,Of=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  width: 100%;
  box-sizing: border-box;
`,Vf=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`,Bf=i.div`
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
`,_f=i.div`
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
`,Li=i.button`
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
`,Hf=i.div`
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
`,Dr=i.a`
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
`,Uf=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`,Kf=i.span`
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
`,qf=i.span`
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
  animation: ${Ff} 0.5s ease;
`,Wf=i.div`
  position: absolute;
  top: 3px;
  left: 83%;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 7;
`,Gf=i.button`
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
`,Jf=i(Gf)`
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
`,Yf=i.div`
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
`,Da=i.button`
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
`,$i=i.div`
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
`,Zf=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`,Xf=i.div`
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
`,Qf=i.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`,eg=({item:t,$isDarkMode:n,showImage:r,showTitle:c,showDescription:l,onAiSummaryClick:s,onReportClick:y,onMuteClick:p,onUnmuteClick:m})=>{const f=(0,a.useRef)(null),[g,N]=(0,a.useState)(t.isNew),[M,z]=(0,a.useState)(!1),[R,I]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async()=>{const O=await u.default.getItem("gemini_api_key");z(!!O)})();const w=O=>z(!!O.detail);return window.addEventListener("geminiKeyChanged",w),()=>window.removeEventListener("geminiKeyChanged",w)},[]),(0,a.useEffect)(()=>{if(!t.isNew)return;const b=new IntersectionObserver(([w])=>{if(w.isIntersecting){const O=setTimeout(async()=>{N(!1);try{const v=await u.default.getItem("seen_news_links")||[];v.includes(t.link)||await u.default.setItem("seen_news_links",[...v,t.link])}catch{}},6e4);return b.unobserve(w.target),()=>clearTimeout(O)}},{threshold:.5});return f.current&&b.observe(f.current),()=>b.disconnect()},[t.isNew,t.link]),t.isBlocked?(0,e.jsx)(Dr,{$isDarkMode:n,style:{cursor:"not-allowed",position:"relative"},as:"div",children:(0,e.jsxs)($i,{children:[(0,e.jsx)("span",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔒"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4"},children:"Дана новина була неправомірна, і ви не можете її переглянути."})]})}):t.isMuted?(0,e.jsx)(Dr,{$isDarkMode:n,style:{position:"relative",minHeight:"190px"},as:"div",children:(0,e.jsxs)($i,{style:{background:"rgba(128, 128, 128, 0.5)"},children:[(0,e.jsx)("span",{style:{fontSize:"30px",marginBottom:"10px",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"🔇"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"Новину приховано."}),(0,e.jsx)("button",{onClick:b=>{b.preventDefault(),b.stopPropagation(),m&&m(t)},style:{marginTop:"10px",padding:"5px 15px",background:"#3f5959",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Розглушити"})]})}):(0,e.jsx)(Dr,{ref:f,href:t.link,target:"_blank",rel:"noopener noreferrer",$isDarkMode:n,children:(0,e.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:r?"190px":"auto",minHeight:"auto"},children:[g&&(0,e.jsx)(qf,{children:"Нове"}),(0,e.jsx)(Kf,{onClick:b=>{b.preventDefault(),b.stopPropagation(),window.open(t.sourceHome,"_blank")},"aria-label":`Перейти на головну сторінку ${t.sourceName}`,children:t.sourceName}),(0,e.jsxs)(Wf,{"aria-label":"Дії з новиною",children:[(0,e.jsx)(Jf,{"aria-label":"Налаштування картки новини",title:"Налаштування",onClick:b=>{b.preventDefault(),b.stopPropagation(),I(w=>!w)},children:(0,e.jsx)(ls,{"aria-hidden":"true",style:{fontSize:"29px"}})}),R&&(0,e.jsxs)(Yf,{onClick:b=>{b.preventDefault(),b.stopPropagation()},children:[(0,e.jsxs)(Da,{$color:M?"#ff69b4":"#888",disabled:!M,title:M?"Прикріпити до ШІ-чату":"Додайте Gemini API-ключ",onClick:()=>{if(!M)return;const b=(t.description||t.title).replace(/<[^>]*>?/gm,"").trim();window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`news-${t.link}`,type:"news",title:t.title,details:`Джерело: ${t.sourceName}. Заголовок: "${t.title}". Зміст: "${b}". Посилання: ${t.link}`}})),I(!1)},children:[(0,e.jsx)(cs,{size:14})," Прикріпити до ШІ"]}),(0,e.jsxs)(Da,{onClick:()=>{s&&s(t),I(!1)},children:[(0,e.jsx)(sd,{size:14})," ШІ Виклад"]}),(0,e.jsx)(Da,{onClick:()=>{navigator.clipboard.writeText(t.link).then(()=>{ka.success("Посилання скопійовано!")}),I(!1)},children:"📋 Копіювати шлях"}),t.sourceName!=="Phys.org"&&(0,e.jsxs)(Da,{$color:"#ff6b6b",onClick:b=>{y&&y(t,b),I(!1)},children:[(0,e.jsx)(pd,{size:14})," Поскаржитися"]}),(0,e.jsxs)(Da,{$color:"#aaa",onClick:b=>{b.preventDefault(),b.stopPropagation(),p&&p(t,b),I(!1)},children:[(0,e.jsx)(yd,{size:14})," Заглушити"]})]})]}),r&&(0,e.jsx)(Uf,{src:t.displayImage,alt:"",onError:b=>{b.target.onerror=null,b.target.src="data:image/webp;base64,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"}}),(c||l)&&(0,e.jsxs)(tg,{$isDarkMode:n,$overlay:r,children:[c&&(0,e.jsx)("h2",{style:{margin:"0 0 8px 0",fontSize:"16px",display:"-webkit-box",WebkitLineClamp:2,fontWeight:"700",WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:"1.3"},children:t.title}),l&&(0,e.jsx)("p",{style:{fontSize:"13px",opacity:.9,margin:0,lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description})]})]})})},tg=i.div`
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
`,ng=i.div`
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
`,Nn=i.button`
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
`,ag=i.div`
  width: 300px;
  height: 8px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)"};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`,rg=i.div`
  height: 100%;
  background: ${t=>t.$isError?"#ff4d4d":"#ffb36c"};
  width: ${t=>t.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${t=>t.$isError?"rgba(255, 77, 77, 0.7)":"rgba(255, 179, 108, 0.5)"};
`,og=i.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`,Ei=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},co=t=>{if(!t)return"rss";const n=t.toLowerCase();return n.includes("youtube.com")||n.includes("youtu.be")?"youtube":n.includes("t.me/")||n.includes("telegram.org")||n.startsWith("@")?"telegram":n.includes("telegra.ph/")?"telegraph":n.includes("facebook.com")?"facebook":n.includes("withhive.com")?"hive":"rss"},ig=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?`https://i.ytimg.com/vi/${n[2]}/hqdefault.jpg`:null},Jn=async t=>{try{const n=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(t)}`);if(!n.ok)throw new Error("AllOrigins error status: "+n.status);const r=await n.json();if(!r.contents)throw new Error("AllOrigins returned empty contents");return r.contents}catch(n){console.warn("AllOrigins failed, trying corsproxy.io fallback...",n);const r=await fetch(`https://corsproxy.io/?${encodeURIComponent(t)}`);if(!r.ok)throw new Error("corsproxy.io error status: "+r.status);return await r.text()}},sg=async t=>{const n=t.match(/(UC[a-zA-Z0-9_-]{22})/);if(n)return n[1];try{const r=await Jn(t),c=r.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i)||r.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);return c?c[1]:null}catch(r){return console.error("Error resolving YouTube channel ID:",r),null}},Fi=t=>{if(!t)return"";let n=t.replace(/<br\s*\/?>/gi,`
`);n=n.replace(/<[^>]*>?/gm,"");const r=document.createElement("textarea");return r.innerHTML=n,r.value.trim()},lg=async t=>{let n="";const r=t.url;if(r.startsWith("@"))n=r.substring(1);else{const c=r.split("/");n=c[c.length-1]||c[c.length-2]}if(n.startsWith("+")||r.includes("joinchat"))try{const c=await Jn(r),l=new DOMParser().parseFromString(c,"text/html"),s=l.querySelector(".tgme_page_title")?.textContent?.trim()||"Приватний Telegram",y=l.querySelector(".tgme_page_description")?.textContent?.trim()||"Приватний канал або група.",p=l.querySelector(".tgme_page_photo_image"),m=p?p.getAttribute("src"):"";return{status:"ok",items:[{title:s,description:`${y}

Надіслати контент / Приєднатися:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:m||"",displayImage:m||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}catch{return{status:"ok",items:[{title:"Приватний Telegram Канал",description:`Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Dl,sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}try{const c=`https://t.me/s/${n}`,l=await Jn(c),s=new DOMParser().parseFromString(l,"text/html"),y=s.querySelector(".tgme_channel_info_header_title span")?.textContent||n,p=s.querySelector(".tgme_page_photo_image img")||s.querySelector(".tgme_page_photo_image"),m=p&&p.getAttribute("src")||"",f=`https://t.me/${n}`,g=s.querySelectorAll(".tgme_widget_message"),N=[];return g.forEach(M=>{const z=M.querySelector(".tgme_widget_message_text"),R=z?z.innerHTML:"",I=z?Fi(R).substring(0,100):"Повідомлення",b=M.querySelector(".tgme_widget_message_date"),w=b?b.getAttribute("href"):f,O=M.querySelector("time"),v=O?O.getAttribute("datetime"):new Date().toISOString(),$=M.querySelector(".tgme_widget_message_photo_wrap");let q="";if($){const U=$.getAttribute("style"),P=U&&U.match(/url\(['"]?([^'"]+)['"]?\)/);P&&(q=P[1])}N.push({title:I||"Новий допис",description:R?Fi(R):"Перегляньте допис у Telegram.",link:w,pubDate:v,thumbnail:q||m||"",displayImage:q||m||"data:image/webp;base64,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",sourceName:y,sourceFlag:"📢",sourceHome:f,sourceUrl:r})}),{status:"ok",items:N.reverse()}}catch(c){return console.error("Telegram scraping failed:",c),null}},dg=async t=>{try{const n=await Jn(t.url),r=new DOMParser().parseFromString(n,"text/html"),c=r.querySelector("header h1")?.textContent?.trim()||r.querySelector("title")?.textContent||"Telegraph стаття",l=r.querySelector("header address a")?.textContent||"Telegraph",s=r.querySelector("article img"),y=s?s.getAttribute("src"):"",p=y?y.startsWith("http")?y:`https://telegra.ph${y}`:"",m=Array.from(r.querySelectorAll("article p")).map(f=>f.textContent).join(`

`)||"Читати повну статтю на Telegraph.";return{status:"ok",items:[{title:c,description:m.substring(0,300)+(m.length>300?"...":""),link:t.url,pubDate:new Date().toISOString(),thumbnail:p||"",displayImage:p||"data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",sourceName:l,sourceFlag:"📝",sourceHome:"https://telegra.ph",sourceUrl:t.url}]}}catch(n){return console.error("Telegraph load failed:",n),null}},cg=async t=>{try{const n=await Jn(t.url),r=new DOMParser().parseFromString(n,"text/html"),c=r.querySelector('meta[property="og:title"]')?.getAttribute("content")||t.name,l=r.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Переглянути сторінку у Facebook.",s=r.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:c,description:l,link:t.url,pubDate:new Date().toISOString(),thumbnail:s||"",displayImage:s||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}catch(n){return console.error("Facebook OG parsing failed, trying simple card:",n),{status:"ok",items:[{title:t.name,description:"Перегляньте оновлення сторінки у Facebook за цим посиланням.",link:t.url,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Dl,sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}},ug=t=>{const n=t.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);return n?{gameCode:n[1],lang:n[2]||"en",boardIdx:n[3]}:null},pg=async t=>{const n=t.url;if(n.match(/board\/(\d+)\/(\d+)/))try{const y=await Jn(n),p=new DOMParser().parseFromString(y,"text/html"),m=p.querySelector('meta[property="og:title"]')?.getAttribute("content")||p.querySelector(".title_wrap .title")?.textContent?.trim()||"Допис у Hive",f=p.querySelector('meta[property="og:description"]')?.getAttribute("content")||p.querySelector(".post_cont")?.textContent?.trim().substring(0,300)||"Деталі допису у спільноті Hive.",g=p.querySelector('meta[property="og:image"]')?.getAttribute("content")||p.querySelector(".post_cont img")?.getAttribute("src")||"";return{status:"ok",items:[{title:m,description:f.length>=300?f.substring(0,300)+"...":f,link:n,pubDate:new Date().toISOString(),thumbnail:g||"",displayImage:g||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:n.split("/board/")[0],sourceUrl:n}]}}catch(y){console.error("Failed to parse single Hive post:",y)}const r=ug(n);if(!r)return null;const{gameCode:c,lang:l,boardIdx:s}=r;try{const y=`https://corsproxy.io/?https://community.withhive.com/${c}/board/list/getBoardList`,p=await(await fetch(y,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams({page:1,board_idx:s,board_type:1,board_comment:1,boardtype1_preview_image:"1",is_mobile:1,select_type:1,view_type:"list"})})).json();if(!p.list)throw new Error("No dynamic list found");const m=new DOMParser().parseFromString(p.list,"text/html").querySelectorAll("li"),f=[];return m.forEach(g=>{const N=g.querySelector("a");if(!N)return;const M=N.getAttribute("href")||"",z=M.startsWith("http")?M:`https://community.withhive.com${M}`,R=g.querySelector(".title, .subject, p, h3, h4"),I=R?R.textContent.trim():"Hive Post",b=g.querySelector("img");let w="";if(b)w=b.getAttribute("src")||b.getAttribute("data-src")||"";else{const U=g.querySelector(".thumb");if(U){const P=U.getAttribute("style"),V=P&&P.match(/url\(['"]?([^'"]+)['"]?\)/);V&&(w=V[1])}}const O=g.querySelector(".t_date, .date, .time"),v=O?O.textContent.trim():new Date().toISOString(),$=g.querySelector(".desc, .text, .wordcut"),q=$?$.textContent.trim():"";f.push({title:I,description:q||"Перегляньте допис у спільноті Hive.",link:z,pubDate:v,thumbnail:w||"",displayImage:w||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:n})}),{status:"ok",items:f}}catch{console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");try{const p=await Jn(n),m=new DOMParser().parseFromString(p,"text/html"),f=m.querySelector('meta[property="og:title"]')?.getAttribute("content")||m.querySelector(".board_cmm .title")?.textContent?.trim()||`Hive Board ${s}`,g=m.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Перегляньте дописи у спільноті Hive.",N=m.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:f,description:g,link:n,pubDate:new Date().toISOString(),thumbnail:N||"",displayImage:N||"data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:n}]}}catch{return null}}},fg=async t=>{const n=co(t.url);return n==="telegram"?await lg(t):n==="telegraph"?await dg(t):n==="hive"?await pg(t):n==="facebook"?await cg(t):null},Fl=({isDarkMode:t,isStickyBgMode:n,user:r})=>{const{registerRef:c}=Ea?.()||{registerRef:()=>{}},l=t,[s,y]=(0,a.useState)([]),[p,m]=(0,a.useState)(0),[f,g]=(0,a.useState)(!0),[N,M]=(0,a.useState)(0),[z,R]=(0,a.useState)(!1),[I,b]=(0,a.useState)(["all"]),w=T=>{if(T==="all"){b(["all"]);return}let F=[...I].filter(X=>X!=="all");F.includes(T)?F=F.filter(X=>X!==T):F.push(T),F.length===0&&(F=["all"]),b(F)},[O,v]=(0,a.useState)(null),[$,q]=(0,a.useState)(0),U=async T=>{if(!T||T.length<3)return T;try{const F=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(T)}`);return Re.current?(await F.json())[0].map(X=>X[0]).join(""):T}catch{return T}},[P,V]=(0,a.useState)(!1),[fe,ae]=(0,a.useState)(null),[B,Z]=(0,a.useState)(!1),[ie,ke]=(0,a.useState)(!1),[xe,Ze]=(0,a.useState)([]),[Ae,at]=(0,a.useState)(""),[ge,Pe]=(0,a.useState)(!1),[,Ce]=(0,a.useState)([]),[gt,mt]=(0,a.useState)([]),[ht,We]=(0,a.useState)(!1),[ut,_e]=(0,a.useState)([]),[st,vt]=(0,a.useState)(!1),Re=(0,a.useRef)(!0),S=(0,a.useRef)(null);(0,a.useEffect)(()=>(Re.current=!0,(async()=>{try{const F=await u.default.getItem("custom_news_sources");F&&Ze(F)}catch{}})(),()=>{Re.current=!1}),[]),(0,a.useEffect)(()=>{(async()=>{try{const F=await u.default.getItem("filtered_news_stats");F?.date===Ei()&&Array.isArray(F.links)&&Re.current&&m(F.links.length)}catch{}})()},[]),(0,a.useEffect)(()=>{(async()=>{if(r?.syncMutedNews&&r?.mutedNews)_e(r.mutedNews);else try{const F=await u.default.getItem("muted_news_urls")||[];_e(F)}catch{}})()},[r?.syncMutedNews,r?.mutedNews]),(0,a.useEffect)(()=>{if(r?.newsAutoScroll!==!0)return;const T=window.setTimeout(()=>{S.current?.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>window.clearTimeout(T)},[r?.newsAutoScroll]),(0,a.useEffect)(()=>{const T=()=>{ke(!0),setTimeout(()=>ke(!1),1500)},F=setTimeout(T,2e3),X=setInterval(T,7e3);return()=>{clearTimeout(F),clearInterval(X)}},[]);const E=(0,a.useCallback)(async(T=!1)=>{const F=new AbortController().signal;T&&Re.current&&(g(!0),M(5),R(!1));try{let X=[];const se=await u.default.getItem("custom_news_sources")||[],Ue=[...Ri,...se];let Tt=[],rt=[];try{const le=await Yo(Zo(mn,"news_reports")),we=await Yo(Zo(mn,"rss_reports")),et=Date.now(),ye=864e5;le.forEach(be=>{(be.data().reports||[]).filter(ze=>{const qe=typeof ze=="object"?ze.timestamp:ze;return et-qe<ye}).length>=10&&Tt.push(be.id)});const ve=[];we.forEach(be=>{const ze=be.data();(ze.reports||[]).filter(qe=>{const an=typeof qe=="object"?qe.timestamp:qe;return et-an<ye}).length>=20&&(ve.push({id:be.id,url:decodeURIComponent(be.id),name:ze.name||"Джерело"}),rt.push(decodeURIComponent(be.id)))}),Re.current&&(Ce(Tt),mt(ve))}catch{}for(const le of Ue)if(!rt.includes(le.url))try{const we=co(le.url);if(we!=="rss"&&we!=="youtube"){const et=await fg(le);et&&et.items&&et.items.length>0&&(X=[...X,...et.items])}else{const et=await(await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(le.url)}`,{signal:F})).json();if(et.status==="ok"&&et.items.length>0){const ye=et.items.map(ve=>{const be=ig(ve.link);return{...ve,thumbnail:be||ve.thumbnail||"",displayImage:be||ve.thumbnail||"data:image/webp;base64,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",sourceName:le.name,sourceFlag:le.flag,sourceHome:le.home,sourceUrl:le.url}});X=[...X,...ye]}}}catch{continue}if(X.length===0){Re.current&&(R(!0),M(100),g(!1));return}T&&Re.current&&M(25),X.sort((le,we)=>new Date(we.pubDate)-new Date(le.pubDate));const Ke=X.filter(le=>{const we=le.title+" "+(le.description||"");return!Rf(we)}),At=X.filter(le=>!Ke.includes(le)).map(le=>le.link||`${le.sourceUrl}:${le.title}`),Rt=Ei(),ne=await u.default.getItem("filtered_news_stats"),ft=ne?.date===Rt&&Array.isArray(ne.links)?ne.links:[],jt=[...new Set([...ft,...At])];await u.default.setItem("filtered_news_stats",{date:Rt,links:jt}),Re.current&&m(jt.length);const Ft=Ke.slice(0,15),lt=new Array(Ft.length),dt=[],Pt=[],Fe=await u.default.getItem("seen_news_links")||[];for(let le=0;le<Ft.length;le++){const we=Ft[le],et=`news_trans_${we.link}`,ye=await u.default.getItem(et),ve=!Fe.includes(we.link);if(ye)lt[le]={...ye,sourceName:we.sourceName,sourceFlag:we.sourceFlag,sourceHome:we.sourceHome,sourceUrl:we.sourceUrl,isNew:ve,isBlocked:Tt.includes(encodeURIComponent(we.link))};else{const be=(we.description||"").replace(/<[^>]*>?/gm,"").trim().substring(0,170);dt.push(le),Pt.push(we.title),Pt.push(be)}}if(Pt.length>0){T&&Re.current&&M(40);let le=[],we=[],et=0;const ye=[];for(let ve=0;ve<dt.length;ve++){const be=Pt[ve*2],ze=Pt[ve*2+1],qe=be.length+ze.length+10;et+qe>4500&&le.length>0&&(ye.push({strings:le,indices:we}),le=[],we=[],et=0),le.push(be,ze),we.push(dt[ve]),et+=qe}le.length>0&&ye.push({strings:le,indices:we});for(const ve of ye){const be=ve.strings.join(" ___ "),ze=(await U(be)).split(/\s*___\s*/);for(let qe=0;qe<ve.indices.length;qe++){const an=ve.indices[qe],$e=Ft[an],rn=$e.enclosure&&$e.enclosure.link||$e.thumbnail||"data:image/webp;base64,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",_t={title:ze[qe*2]?.trim()||$e.title,description:(ze[qe*2+1]?.trim()||"")+"...",link:$e.link,displayImage:rn,sourceName:$e.sourceName,sourceFlag:$e.sourceFlag,sourceHome:$e.sourceHome,sourceUrl:$e.sourceUrl,isNew:!Fe.includes($e.link),isBlocked:Tt.includes(encodeURIComponent($e.link))};await u.default.setItem(`news_trans_${$e.link}`,_t),lt[an]=_t}}}T&&Re.current&&M(100);const Jt=(await u.default.keys()).filter(le=>le.startsWith("news_trans_")),hn=Ft.map(le=>`news_trans_${le.link}`);for(const le of Jt)hn.includes(le)||await u.default.removeItem(le);Re.current&&(y(lt),v(new Date))}catch(X){if(X.name==="AbortError"||X.message?.includes("aborted")){console.log("Запит було скасовано");return}console.error("Справжня помилка завантаження:",X),Re.current&&(R(!0),M(100),T&&(g(!0),await new Promise(se=>setTimeout(se,2500))))}finally{Re.current&&g(!1)}},[]),ee=s.filter(T=>I.includes("all")||I.includes(T.sourceName)),de=ee.slice(0,15).map(T=>({...T,isMuted:ut.includes(T.link)})),Ee=de.length>0?[...de,...de,...de]:[],Ie=(0,a.useRef)(null),[De,Xe]=(0,a.useState)(null),ue=(0,a.useRef)(!1),kt=(0,a.useRef)(null),xt=(0,a.useCallback)(()=>{const T=Ie.current;if(!T)return;const F=T.getBoundingClientRect().left+T.clientWidth/2;let X=null,se=1/0;[...T.querySelectorAll("[data-news-slide]")].forEach((Ue,Tt)=>{const rt=Ue.getBoundingClientRect(),Ke=Math.abs(rt.left+rt.width/2-F);Ke<se&&(se=Ke,X=Tt)}),Xe(X)},[]),pt=T=>{if(!Ie.current)return;const F=Ie.current,X=(F.querySelector("[data-news-slide]")?.getBoundingClientRect().width||280)+(Number.parseFloat(getComputedStyle(F).gap)||5);ue.current=!0,F.scrollBy({left:T==="left"?-X:X,behavior:"smooth"}),setTimeout(()=>{ue.current=!1},600)},He=()=>{!Ie.current||de.length===0||(xt(),!ue.current&&(kt.current&&clearTimeout(kt.current),kt.current=setTimeout(()=>{const T=Ie.current;if(!T)return;const F=T.scrollWidth/3,X=12,se=T.style.scrollSnapType;T.scrollLeft<=X?(ue.current=!0,T.style.scrollSnapType="none",T.scrollLeft+=F,requestAnimationFrame(()=>{T.style.scrollSnapType=se,ue.current=!1})):T.scrollLeft>=F*2-X&&(ue.current=!0,T.style.scrollSnapType="none",T.scrollLeft-=F,requestAnimationFrame(()=>{T.style.scrollSnapType=se,ue.current=!1}))},150)))};(0,a.useEffect)(()=>{if(Ie.current&&de.length>0){const T=Ie.current.scrollWidth/3;Ie.current.scrollLeft=T,requestAnimationFrame(xt)}},[de.length,I,xt]),(0,a.useEffect)(()=>{(async()=>{try{const X=await u.default.getItem("news_refresh_cooldown_end");if(X){const se=Math.ceil((X-Date.now())/1e3);se>0&&q(se)}}catch{}E(!0)})();const F=setInterval(()=>E(!1),36e5);return()=>{clearInterval(F)}},[]),(0,a.useEffect)(()=>{if($>0){const T=setTimeout(()=>q($-1),1e3);return()=>clearTimeout(T)}else u.default.removeItem("news_refresh_cooldown_end")},[$]);const Ge=async()=>{let T=Ae.trim();if(T){if(xe.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}try{let F=T,X="",se=(0,e.jsx)(xr,{}),Ue="";F.startsWith("@")&&(F=`https://t.me/${F.slice(1)}`),!F.startsWith("http://")&&!F.startsWith("https://")&&(/^[a-zA-Z0-9_]+$/.test(F)?F=`https://t.me/${F}`:F=`https://${F}`);const Tt=new URL(F),rt=Tt.hostname.replace("www.","");X=rt,Ue=Tt.origin;const Ke=co(F);if(Ke==="youtube"){alert("Здійснюється пошук ID YouTube каналу...");const ne=await sg(F);if(ne)F=`https://www.youtube.com/feeds/videos.xml?channel_id=${ne}`,X=`YouTube: ${rt}`,se=(0,e.jsx)(Jd,{});else{alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");return}}else if(Ke==="telegram"){const ne=F.split("/");X=`Telegram: ${ne[ne.length-1]||ne[ne.length-2]}`,se=F.includes("+")||F.includes("joinchat")?"🔒":"📢",Ue=F}else if(Ke==="telegraph")X="Telegraph",se=(0,e.jsx)(xr,{}),Ue="https://telegra.ph";else if(Ke==="facebook"){const ne=F.split("/"),ft=ne[ne.length-1]||ne[ne.length-2];F=`https://www.facebook.com/${ft}`,X=`Facebook: ${ft}`,se=(0,e.jsx)(ad,{}),Ue=F}else if(Ke==="hive"){const ne=F.match(/withhive\.com\/([a-zA-Z0-9_-]+)/),ft=ne?ne[1]:"Hive";X=`Hive: ${ft}`,se=(0,e.jsx)(ud,{}),Ue=`https://community.withhive.com/${ft}`}else X=rt,se=(0,e.jsx)(xr,{});const At={url:F,name:X,flag:se,home:Ue,type:Ke},Rt=await u.default.getItem("custom_news_sources")||[];if(Rt.find(ne=>ne.url===F))alert("Це джерело вже додано.");else{if(Rt.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}const ne=[...Rt,At];await u.default.setItem("custom_news_sources",ne),Ze(ne),at(""),Pe(!1),E(!0)}}catch(F){console.error(F),alert("Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)")}}},bt=async(T,F)=>{if(F.preventDefault(),F.stopPropagation(),!r){alert("Тільки авторизовані користувачі можуть залишати скарги.");return}if(window.confirm("Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)"))try{const X=ui.currentUser||(await Kd(ui)).user,se=r.uid||X.uid,Ue=encodeURIComponent(T.link),Tt=encodeURIComponent(T.sourceUrl),rt=Date.now(),Ke={uid:se,timestamp:rt},At=zn(mn,"news_reports",Ue),Rt=await or(At);if(Rt.exists()){if((Rt.data().reports||[]).some(jt=>jt.uid===se&&rt-jt.timestamp<864e5)){alert("Ви вже скаржилися на цю новину сьогодні.");return}await Ua(At,{reports:Xo(Ke)})}else await Ma(At,{reports:[Ke]});const ne=zn(mn,"rss_reports",Tt),ft=await or(ne);ft.exists()?(ft.data().reports||[]).some(jt=>jt.uid===se&&rt-jt.timestamp<864e5)||await Ua(ne,{reports:Xo(Ke)}):await Ma(ne,{reports:[Ke],name:T.sourceName}),alert("Скаргу прийнято. Дякуємо!"),E(!0)}catch(X){console.warn("Помилка відправки скарги:",X),alert("Помилка відправки скарги.")}},_=async(T,F)=>{F&&(F.preventDefault(),F.stopPropagation());const X=[...ut,T.link];if(_e(X),r?.syncMutedNews&&r?.uid)try{await Ua(zn(mn,"users",r.uid),{mutedNews:X})}catch(se){console.warn("Помилка збереження заглушеної новини в Firebase",se)}else try{await u.default.setItem("muted_news_urls",X)}catch{}},re=async T=>{const F=ut.filter(X=>X!==T.link);if(_e(F),r?.syncMutedNews&&r?.uid)try{await Ua(zn(mn,"users",r.uid),{mutedNews:F})}catch(X){console.warn("Помилка розглушення новини в Firebase",X)}else try{await u.default.setItem("muted_news_urls",F)}catch{}},ce=async T=>{if(window.confirm("Видалити це джерело новин?"))try{const F=await u.default.getItem("custom_news_sources")||[],X=F.filter(Ue=>Ue.url!==T);await u.default.setItem("custom_news_sources",X),Ze(X);const se=F.find(Ue=>Ue.url===T)?.name;se&&I.includes(se)&&b(["all"]),E(!0)}catch(F){console.error("Localforage error:",F),alert("Помилка видалення джерела.")}},Me=r?.newsLayout||[],Qe=T=>Me.find(F=>F.key===T)?.visible!==!1,oe=!0,Le=Qe("title"),Je=Qe("description");return(0,e.jsxs)(Nf,{ref:S,children:[(0,e.jsxs)(Pf,{$isStickyBgMode:n,$isDarkMode:l,children:[(0,e.jsx)(Of,{$isDarkMode:l,children:(0,e.jsx)(Nn,{ref:T=>c("newsHeader",T),$isDarkMode:l,onClick:()=>vt(!st),style:{marginLeft:"5px",padding:"2px",fontSize:"15px",fontWeight:"600",background:"none"},children:"Натисніть для додавання стрічки новин"})}),(0,e.jsx)(rr,{children:st&&(0,e.jsxs)(dn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:[(0,e.jsxs)(ng,{children:[(0,e.jsx)(Nn,{$isDarkMode:l,onClick:()=>Z(!0),children:"Інструкція"}),(0,e.jsxs)(Nn,{$isDarkMode:l,$active:I.includes("all"),onClick:()=>w("all"),children:[I.includes("all")?"☑":"☐"," Усі"]}),Ri.map(T=>(0,e.jsxs)(Nn,{$isDarkMode:l,$active:I.includes(T.name),onClick:()=>w(T.name),children:[I.includes(T.name)?"☑":"☐"," ",T.name]},T.name)),xe.map(T=>(0,e.jsxs)(Nn,{$isDarkMode:l,$active:I.includes(T.name),onClick:()=>w(T.name),children:[I.includes(T.name)?"☑":"☐"," ",T.name,(0,e.jsx)("span",{onClick:F=>{F.stopPropagation(),ce(T.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},T.url)),xe.length<5&&(0,e.jsx)(Nn,{$isDarkMode:l,onClick:()=>Pe(!ge),style:{borderStyle:"dashed"},children:ge?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(Nn,{$isDarkMode:l,onClick:()=>We(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",gt.length,")"]})]}),(0,e.jsx)(rr,{children:ge&&(0,e.jsx)(dn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:Ae,onChange:T=>at(T.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"5px",borderRadius:"5px",border:`1px solid ${l?"rgba(0, 0, 0, 0.98)":"rgb(255, 255, 255)"}`,background:"transparent",color:"#fff",outline:"none",minWidth:"248px",fontFamily:"var(--font-family)",fontSize:"12px","--placeholder-color":"rgba(255, 255, 255, 0.97)"}}),(0,e.jsx)(Nn,{$isDarkMode:l,onClick:Ge,style:{background:"#ffb36c",color:"#000"},children:"Додати"})]})})})]})})]}),f?(0,e.jsxs)("div",{style:{textAlign:"center",color:"gray",padding:"60px 20px"},children:[(0,e.jsx)("div",{style:{marginBottom:"15px",fontSize:"14px",background:"rgba(0, 0, 0, 0.71)",color:"#fff",borderRadius:"5px",padding:"10px 15px",borderRadius:"5px",display:"inline-block",fontWeight:"900"},children:z?"Помилка завантаження!":`Шукаємо цікаві новини: ${N}%`}),(0,e.jsx)(ag,{$isDarkMode:l,children:(0,e.jsx)(rg,{$progress:N,$isError:z})})]}):ee.length>0?(0,e.jsxs)("div",{style:{position:"relative",maxWidth:"1400px",margin:"0 auto"},children:[(0,e.jsx)(rr,{mode:"wait",children:(0,e.jsx)(dn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},style:{width:"100%"},children:(0,e.jsxs)(Vf,{children:[(0,e.jsx)(Bf,{ref:Ie,onScroll:He,children:Ee.map((T,F)=>(0,e.jsx)(Hf,{"data-news-slide":!0,$distanceFromCenter:De===null?2:Math.min(Math.abs(De-F),2),children:(0,e.jsx)(eg,{item:T,$isDarkMode:l,showImage:oe,showTitle:Le,showDescription:Je,onAiSummaryClick:X=>{ae(X),V(!0)},onReportClick:bt,onMuteClick:_,onUnmuteClick:re})},`${T.link}-${F}`))}),(0,e.jsxs)(_f,{$visible:ie,children:[(0,e.jsx)(Li,{style:{paddingRight:"10px"},onClick:()=>pt("left"),children:"◂"}),(0,e.jsx)(Li,{onClick:()=>pt("right"),children:"▸"})]})]})},I.join(","))}),(0,e.jsxs)(og,{$isDarkMode:l,children:["За сьогодні відфільтровано ",p," небажаних новин."]})]}):(0,e.jsx)("div",{style:{textAlign:"center",color:"white",padding:"14px",background:"#0000009c",marginTop:"20px",fontSize:"12px"},children:"Перевірте інтернет зв'язок. У випадку стабільного зв'язку це означає, що всі новини сайту мали недопустимий характер і ми їх не пропустили."}),fe&&(0,e.jsx)(O0,{isOpen:P,onClose:()=>V(!1),newsItem:fe,isDarkMode:l}),B&&(0,e.jsx)($l,{isOpen:B,onClose:()=>Z(!1),initialFaqQuestion:"Навчання по управлінню новинами"}),ht&&(0,e.jsx)(Zf,{onClick:()=>We(!1),children:(0,e.jsxs)(Xf,{$isDarkMode:l,onClick:T=>T.stopPropagation(),children:[(0,e.jsx)(Qf,{onClick:()=>We(!1),children:"✕"}),(0,e.jsx)("h2",{style:{marginTop:0},children:"Чорний список (карантин 24 год)"}),(0,e.jsx)("p",{style:{fontSize:"13px"},children:"Ці RSS-джерела отримали багато скарг і відключені для всіх користувачів."}),gt.length===0?(0,e.jsx)("p",{children:"Наразі немає заблокованих джерел."}):(0,e.jsx)("ul",{style:{paddingLeft:"20px",marginTop:"15px"},children:gt.map(T=>(0,e.jsxs)("li",{style:{marginBottom:"15px"},children:[(0,e.jsx)("strong",{style:{fontSize:"16px"},children:T.name}),(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:T.url,target:"_blank",rel:"noreferrer",style:{fontSize:"12px",color:"#ffb36c",wordBreak:"break-all"},children:T.url})]},T.id))})]})})]})},gg=i.div`
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
`,Pi=(t,n)=>{ka(t,{duration:4e3,style:{backgroundColor:n?"#0c0c0cbf":"#fdff98bb",color:n?"#ffffff":"#1a1a1a",border:"2px solid #00afce",borderRadius:"6px",boxShadow:`0 4px 12px rgba(0, 0, 0, ${n?"0.5":"0.15"})`,fontSize:"13px",fontWeight:"500",zIndex:"10000",padding:"10px 16px",backdropFilter:"blur(4px)"},icon:"⚠️"})},mg=Te`
  from { opacity: 0; }
  to { opacity: 1; }
`,hg=Te`
  from { opacity: 1; }
  to { opacity: 0; }
`,xg=Te`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,bg=Te`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,yg=Te`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`,wg=Te`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,vg=i.div`
  position: relative;
  width: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`,kg=i.div`
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
  animation: ${t=>t.$start?qt`
          ${yg} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `:"none"};
`,jg=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${t=>t.$start?qt`
          ${wg} 1s ease-out forwards
        `:"none"};
  animation-delay: ${t=>t.$start?"1.5s":"0s"};
`,Sg=Te`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`,Ra=t=>t?t instanceof Blob?t.type.startsWith("video/"):typeof t!="string"?!1:t.includes(".mp4")||t.includes(".webm")||t.includes(".ogg")||t.includes(".mov")||t.startsWith("data:video/")||t.startsWith("blob:"):!1,Ni=async t=>{if(!t)return;const n=typeof t=="string"?t:t.src,r=typeof t=="string"?"background":t.name||"background";if(!n)return;const c=Ra(n)?".mp4":".webp",l=r.replace(/[/\\?%*:|"<>]/g,"-").trim()||"background",s=l.toLowerCase().endsWith(c)?l:`${l}${c}`,y=ka.loading("Завантаження файлу...",{id:"bg-download"});try{const p=await fetch(n);if(!p.ok)throw new Error(`HTTP error ${p.status}`);const m=await p.blob(),f=URL.createObjectURL(m),g=document.createElement("a");g.href=f,g.download=s,document.body.appendChild(g),g.click(),document.body.removeChild(g),setTimeout(()=>URL.revokeObjectURL(f),1500),ka.success(`Збережено: ${s}`,{id:y})}catch(p){console.warn("Blob fetch download failed, using direct download:",p);try{const m=document.createElement("a");m.href=n,m.download=s,m.target="_blank",m.rel="noopener noreferrer",document.body.appendChild(m),m.click(),document.body.removeChild(m),ka.success(`Відкрито для скачування: ${s}`,{id:y})}catch{ka.error("Не вдалося скачати файл",{id:y})}}},Ya=t=>{const n=[...t];for(let r=n.length-1;r>0;r--){const c=Math.floor(Math.random()*(r+1));[n[r],n[c]]=[n[c],n[r]]}return n},Za=t=>{if(t.author)return t.author;if(!t.snippet)return null;const n=t.snippet.match(/Постачальник(?:и)?:\s*([^\n]+)/);return n?n[1].trim():null},Cg=t=>{if(!t)return null;const n=t.images?.[0];return n?Vl[n]||n:null},Tg=(t="")=>t.includes("play.google.com")?"playmarket":t.includes("store.steampowered.com")?"steam":t.includes("apps.apple.com")||t.includes("itunes.apple.com")?"appstore":null,Mr={playmarket:{label:"Play Market",emoji:"🤖",color:"#01875f"},steam:{label:"Steam",emoji:"🎮",color:"#1b2838"},appstore:{label:"App Store",emoji:"🍎",color:"#0071e3"}},zr=t=>{if(!t)return[];const n=[];if(t.platforms&&Array.isArray(t.platforms))return t.platforms;const r=Tg(t.url);if(r&&n.push({type:r,url:t.url}),t.snippet){if(t.snippet.includes("play.google.com")&&!n.some(c=>c.type==="playmarket")){const c=t.snippet.match(/(https:\/\/play\.google\.com\/[^\s\n\)]+)/);c&&n.push({type:"playmarket",url:c[1]})}if(t.snippet.includes("store.steampowered.com")&&!n.some(c=>c.type==="steam")){const c=t.snippet.match(/(https:\/\/store\.steampowered\.com\/[^\s\n\)]+)/);c&&n.push({type:"steam",url:c[1]})}}return n},Ag=(t=[],n=[])=>{const r=new Set;return[...t||[],...n||[]].filter(c=>{const l=`${c?.lat??""}-${c?.lon??""}-${c?.name??""}-${c?.country??""}`;return!c||r.has(l)?!1:(r.add(l),!0)})},Ig=i.div`
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
  animation: ${t=>t.$panEnabled&&t.$zoom>1?qt`
          ${Sg} ${t.$panSpeed||6}s infinite linear
        `:"none"};
`,Xa=t=>{const{$image:n,$active:r,$focalX:c,$focalY:l,$videoStart:s,$videoEnd:y,$videoPlaybackSpeed:p}=t,[m,f]=(0,a.useState)(typeof n=="string"?n:""),g=(0,a.useRef)(null),N=t.$blurType==="pixelated";(0,a.useEffect)(()=>{let I=null;return n instanceof Blob?(I=URL.createObjectURL(n),f(I)):f(n),()=>{I&&URL.revokeObjectURL(I)}},[n]),(0,a.useEffect)(()=>{g.current&&(r?(s!=null&&g.current.currentTime<s&&(g.current.currentTime=s),g.current.playbackRate=p||1,g.current.play().catch(()=>{})):g.current.pause())},[r,s,p]);const M=Ra(n),z=s??0,R=y??null;return(0,e.jsx)(Ig,{...t,children:M?(0,e.jsx)("video",{ref:g,src:m,muted:!0,loop:!0,playsInline:!0,onTimeUpdate:I=>{const b=I.target.currentTime;R!==null&&b>=R&&(I.target.currentTime=z)},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${c}% ${l}%`,imageRendering:N?"pixelated":"auto"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${m||"/assets/fog-Cew27ml4.webp"})`,backgroundSize:"cover",backgroundPosition:`${c}% ${l}%`,backgroundRepeat:"no-repeat",imageRendering:N?"pixelated":"auto"}})})},Dg=i.div`
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
`,Mg=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,zg=i.div`
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
`,Rg=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Lg=i.div`
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
`,$g=i.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`,Eg=i.div`
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
`,Fg=i.button`
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
`;var Pg=i.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`,Rr=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Lr=i.button`
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
`,$r=i.div`
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
`,Dn=i.button`
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
`,Oi=i.button`
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
`,Ng=i.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`,Vi=i.div`
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
`,Og=i.div`
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
`,Vg=i.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`,Bg=i.button`
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
`,_g=i.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`,Bi=i.button`
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
`,Hg=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Ug=i.div`
  position: relative;
  display: flex;
  width: 99.7%;
  justify-content: center;
`,Kg=i.input`
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
`,qg=i.button`
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
`,Er=i.button`
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
  ${t=>!t.disabled&&qt`
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
`,_i=i.div`
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
`,Hi=i.button`
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
`;var Wg=i.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: ${t=>t.$isDarkMode?"rgba(10,10,20,0.97)":"rgba(245,247,255,0.97)"};
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,Gg=i.div`
  width: 100%;
  padding: 18px 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
`,Jg=i.div`
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
`,Yg=i.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 17px;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  &::placeholder { color: ${t=>t.$isDarkMode?"#666":"#aaa"}; }
`,Zg=i.div`
  color: ${t=>t.$isDarkMode?"#ffffff":"#080808"};
  font-size: 12px;
  text-align: center;
`,Xg=i.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  padding: 0 1px 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;`,Fr=i.div`
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
`,Pr=i.div`
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
`,Nr=new Map,Qa=new Map,Qg=t=>{if(!t?.url?.includes("play.google.com/store/apps"))return null;try{const n=new URL(t.url).searchParams.get("id");return n?`https://play.google.com/store/apps/details?id=${encodeURIComponent(n)}&hl=en`:null}catch{return null}},em=async t=>{if(!t)return null;if(Nr.has(t))return Nr.get(t);if(Qa.has(t))return Qa.get(t);const n=fetch(`https://r.jina.ai/http://${t.replace(/^https?:\/\//,"")}`).then(r=>r.ok?r.text():"").then(r=>{const c=[...new Set([...r.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[^\s"')]+/g)].map(([l])=>l.replace(/\\u003d/g,"=")).filter(l=>/=s(?:48|96)(?:-rw)?(?:\s|$)/.test(l)))][0]||null;return c&&Nr.set(t,c),c}).catch(()=>null).finally(()=>Qa.delete(t));return Qa.set(t,n),n},tm=(t,n)=>{const r=[];n&&r.push(n),typeof t?.icon=="string"&&t.icon.trim()&&r.push(t.icon.trim());const c=Array.isArray(t?.images)?t.images.find(s=>typeof s=="string"&&/^https?:\/\//i.test(s)):null,l=t?.url?.includes("play.google.com/store/apps");if(l&&c&&r.push(c),!l)try{const s=new URL(t.url).hostname;r.push(`https://www.google.com/s2/favicons?domain=${s}&sz=64`)}catch{}return[...new Set(r)]},Ui=({link:t})=>{const n=Qg(t),[r,c]=(0,a.useState)(null),[l,s]=(0,a.useState)(0);(0,a.useEffect)(()=>{let g=!0;return c(null),s(0),n&&em(n).then(N=>{g&&c(N)}),()=>{g=!1}},[t,n]);const y=tm(t,r),p=t?.title?.charAt(0).toUpperCase()||"?",m=t?.url?.includes("play.google.com/store/apps")?"🎮":p,f=y[l];return f?(0,e.jsx)("img",{src:f,alt:"",width:"28",height:"28",onError:()=>{l<y.length-1?s(g=>g+1):s(y.length)},style:{display:"block",objectFit:"contain"}}):m},Or=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Vr=i.div`
  font-size: 15px;
  font-weight: 700;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Br=i.div`
  font-size: 11px;
  color: ${t=>t.$isDarkMode?"#fdfdfd":"#050505"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ki=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 2px;
`,qi=i.span`
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 20px;
  background: ${t=>t.$isDarkMode?"rgba(255,183,108,0.15)":"rgba(255,183,108,0.25)"};
  color: ${t=>t.$isDarkMode?"#ffb36c":"#a05000"};
  font-weight: 600;
`,_r=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`,Hr=i.button`
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
`,Wi=i.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${t=>t.$isDarkMode?"#ffb36c99":"#666"};
  text-transform: uppercase;
  padding: 4px 2px 2px;
`,nm=i.div`
  height: 1px;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.12)"};
  margin: 6px 0;
`,am=i.div`
  position: fixed;
  inset: 0;
  z-index: 10100;
  background: rgba(0,0,0,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`,rm=i.div`
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
`,om=i.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 22px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
`,im=i.div`
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
`,sm=i.div`
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
`,lm=i.div`
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

`,dm=i.button`
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
`,Pl=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?n[2]:null},cm=({images:t=[],youtubeTrailer:n,setFullscreenImage:r,imageMap:c,setFullscreenVideo:l})=>{const s=n?Pl(n):null,y=s?`https://img.youtube.com/vi/${s}/mqdefault.jpg`:null,p=t.map(m=>c[m]||m).find(Boolean)||y;return(0,e.jsxs)(lm,{onClick:m=>{m.stopPropagation(),p&&r(p)},children:[p&&(0,e.jsx)("img",{className:"main-image",src:p,alt:""}),y&&n&&(0,e.jsxs)(dm,{type:"button","aria-label":"Відкрити трейлер",onClick:m=>{m.stopPropagation(),l(n)},children:[(0,e.jsx)("img",{src:y,alt:""}),(0,e.jsx)("span",{children:"▶"})]})]})},Gi=i.div`
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
`,um=i.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`,Ur=i.button`
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
`,pm=i.button`
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
`,fm=i.div`
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
  animation: ${t=>t.$isClosing?hg:mg} 0.3s ease-out
    forwards;
`,gm=i.div`
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
  animation: ${t=>t.$isClosing?bg:xg} 0.4s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,mm=i.button`
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
`,hm=i.button`
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
`,Nl=i.div`
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
`,Ol=i.div`
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
`,kn=i.div`
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
`,xm=i.div`
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
`;var bm=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
  }
`,ym=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${t=>t.$active?"#ffb36c":"transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${Ol}, ${Nl} {
      opacity: 1;
    }
  }
`,wm=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
`,vm=i.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 98px;
  z-index: 5;
`,Kr=i.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  color: "#000dff";
  font-weight: 900;
  text-shadow: 0 0 3px black;
`,qr=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
`,Mn=i.button`
  flex: 1;
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"black":"white"};
  border: none;
  padding: 1px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
`,km=i.div`
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
`,Ji=i.button`
  color: #ff7b00;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
`,jm=i.input`
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
`,Wr=i.hr`
  border: 0;
  border-top: 1px solid rgba(255, 179, 108, 0.3);
  width: 100%;
`,Sm=i.h3`
  font-weight: bold;
  color: #ffb36c;
  margin: 5px;
  font-size: 14px;
`,Gn=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)(gg,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})},Gr=[{label:"UTC (Всесвітній час)",value:"UTC"},{label:"GMT (Лондон, Дублін)",value:"Europe/London"},{label:"UTC+1 (Берлін, Париж, Рим, Варшава)",value:"Europe/Berlin"},{label:"UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)",value:"Europe/Kyiv"},{label:"UTC+3 (Стамбул, Ер-Ріяд, Найробі)",value:"Europe/Istanbul"},{label:"UTC+4 (Дубай, Баку, Тбілісі)",value:"Asia/Dubai"},{label:"UTC+5 (Ісламабад, Ташкент, Мальдіви)",value:"Asia/Karachi"},{label:"UTC+6 (Астана, Дакка, Алмати)",value:"Asia/Almaty"},{label:"UTC+7 (Бангкок, Джакарта, Ханой)",value:"Asia/Bangkok"},{label:"UTC+8 (Пекін, Сінгапур, Перт)",value:"Asia/Shanghai"},{label:"UTC+9 (Токіо, Сеул, Іркутськ)",value:"Asia/Tokyo"},{label:"UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",value:"Australia/Sydney"},{label:"UTC+11 (Номеа, Соломонові Острови)",value:"Pacific/Noumea"},{label:"UTC+12 (Окленд, Фіджі)",value:"Pacific/Auckland"},{label:"UTC-1 (Азорські острови, Кабо-Верде)",value:"Atlantic/Azores"},{label:"UTC-2 (Південна Джорджія)",value:"Atlantic/South_Georgia"},{label:"UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",value:"America/Argentina/Buenos_Aires"},{label:"UTC-4 (Сантьяго, Галіфакс, Каракас)",value:"America/Santiago"},{label:"UTC-5 (Нью-Йорк, Торонто, Богота)",value:"America/New_York"},{label:"UTC-6 (Чикаго, Мехіко, Вінніпег)",value:"America/Chicago"},{label:"UTC-7 (Денвер, Едмонтон, Калгарі)",value:"America/Denver"},{label:"UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",value:"America/Los_Angeles"},{label:"UTC-9 (Аляска, Анкоридж)",value:"America/Anchorage"},{label:"UTC-10 (Гаваї, Гонолулу)",value:"Pacific/Honolulu"},{label:"UTC-11 (Паго-Паго, Алофі)",value:"Pacific/Pago_Pago"},{label:"UTC-12 (Острів Бейкер, Острів Гоуленд)",value:"Etc/GMT+12"},{label:"EST (Північна Америка: Східний час)",value:"America/New_York"},{label:"CST (Північна Америка: Центральний час)",value:"America/Chicago"},{label:"MST (Північна Америка: Гірський час)",value:"America/Denver"},{label:"PST (Північна Америка: Тихоокеанський час)",value:"America/Los_Angeles"},{label:"CET (Центральна Європа: Прага, Мадрид)",value:"Europe/Berlin"},{label:"EET (Східна Європа: Софія, Таллінн)",value:"Europe/Kyiv"},{label:"IST (Індія, Нью-Делі)",value:"Asia/Kolkata"},{label:"JST (Японія, Токіо)",value:"Asia/Tokyo"},{label:"AEST (Східна Австралія, Брісбен)",value:"Australia/Brisbane"},{label:"Інший (ввести вручну)",value:"custom_input"}],Vl={planes:m0,village:hl,herotext:Al,meridian:h0,castle:Tl,hills:fo},Jr=({isStickyBgMode:t,heroDateString:n,onAddCity:r,startAnimation:c,user:l,isDarkMode:s,checkWeatherDanger:y,heroBg:p,setHeroBg:m,heroBg2:f,setHeroBg2:g,heroBg3:N,setHeroBg3:M,heroBg4:z,setHeroBg4:R,customHeroBgs:I=[],setCustomHeroBgs:b,heroBgMode:w,setHeroBgMode:O,heroOverlayOpacity:v,setHeroOverlayOpacity:$,bgRatings:q,setBgRatings:U,slideshowInterval:P,setSlideshowInterval:V,slideshowTransition:fe,setSlideshowTransition:ae,filterCategory:B,setFilterCategory:Z,heroBgZoom:ie,setHeroBgZoom:ke,heroBgRotation:xe,setHeroBgRotation:Ze,heroBgBlur:Ae,setHeroBgBlur:at,heroBgPixelation:ge,setHeroBgPixelation:Pe,heroBgBlurType:Ce,setHeroBgBlurType:gt,heroBgFocal1:mt,setHeroBgFocal1:ht,heroBgFocal2:We,setHeroBgFocal2:ut,heroBgFocal3:_e,setHeroBgFocal3:st,heroBgFocal4:vt,setHeroBgFocal4:Re,heroBgPanEnabled:S,setHeroBgPanEnabled:E,heroBgPanSpeed:ee,setHeroBgPanSpeed:de,videoPlaybackSpeed:Ee,setVideoPlaybackSpeed:Ie,screenshots:De=[],selectedTimezone:Xe,setSelectedTimezone:ue,customHolidayName:kt,setCustomHolidayName:xt})=>{uo();const{registerRef:pt,isActive:He}=Ea?.()||{registerRef:()=>{}},Ge=lr(o=>o.calendar?.customDays||[]),[bt,_]=(0,a.useState)({date:"",reason:""}),[re,ce]=(0,a.useState)(""),Me=(0,a.useRef)(null),[Qe,oe]=(0,a.useState)(null);(0,a.useEffect)(()=>{const o=()=>{ce("Конотоп"),setTimeout(()=>{r({name:"Конотоп",fullName:"Конотоп (UA)",lat:51.24,lon:33.2})},2e3)};return window.addEventListener("domino-auto-input-konotop",o),()=>window.removeEventListener("domino-auto-input-konotop",o)},[r]),(0,a.useEffect)(()=>{if(Qe!==null&&Me.current){const o=Me.current.querySelector(`[data-id="${Qe}"]`);o&&Me.current.scrollTo({top:o.offsetTop,behavior:"smooth"})}},[Qe]);const[Le,Je]=(0,a.useState)([]),[T,F]=(0,a.useState)(3),[X,se]=(0,a.useState)(!1),[Ue,Tt]=(0,a.useState)(""),[rt,Ke]=(0,a.useState)(300),At=1e3,[Rt,ne]=(0,a.useState)(0);(0,a.useEffect)(()=>{(async()=>{try{const k=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,H=await u.default.getItem(k);ne(Number(H)||0)}catch(k){console.error("Failed to load hero uploaded count:",k)}})()},[l]);const[ft,jt]=(0,a.useState)(!1),[Ft,lt]=(0,a.useState)(!1),[dt,Pt]=(0,a.useState)(null),[Fe,Jt]=(0,a.useState)(null),[hn,le]=(0,a.useState)(!1),[we,et]=(0,a.useState)(!0),[ye,ve]=(0,a.useState)("city");(0,a.useEffect)(()=>(ft||dt||hn||Fe||ye==="links"?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[ft,dt,hn,Fe,ye]),(0,a.useEffect)(()=>{const o=k=>{if(k.key==="Escape"){if(Fe){Jt(null);return}ye==="links"&&(ve("city"),Je([]),se(!1))}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[Fe,ye]);const[be,ze]=(0,a.useState)(!1),[qe,an]=(0,a.useState)(null),[$e,rn]=(0,a.useState)(null),[_t,Rn]=(0,a.useState)([]),[ca,cn]=(0,a.useState)([]),[ua,un]=(0,a.useState)(!1),[Ln,Ht]=(0,a.useState)(""),[On,Ut]=(0,a.useState)(""),[Mt,Kt]=(0,a.useState)("rating"),[Yt,St]=(0,a.useState)(1),jn=1,[Zt,on]=(0,a.useState)("default"),[Nt,pn]=(0,a.useState)([]),[sn,ot]=(0,a.useState)(0),[Xt,fn]=(0,a.useState)(!1),[d,x]=(0,a.useState)(""),G=o=>!za.some(k=>k.src===o),A=(0,a.useMemo)(()=>[...za,...I||[],...(De||[]).map(o=>({src:o.image,name:`Скріншот: ${o.trackName}`,category:"Скріншоти"}))],[I,De]),C=(0,a.useCallback)((o,k=1)=>{const H=Nt.findIndex(te=>te.src===o);if(w==="random"){(Yt===2?2:1)==2?g(o):m(o),H!==-1&&ot(H);return}k===2?g(o):k===3?M(o):k===4?R(o):m(o)},[Yt,w,Nt,m,g,M,R]),L=(0,a.useCallback)(o=>{if(!o||o==="custom_input")return null;try{const k=new Date,H=new Intl.DateTimeFormat("uk",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:o}).format(k),te=parseInt(H.split(":")[0]);return{timeStr:H,isDay:te>=6&&te<20}}catch{return null}},[]),me=(0,a.useCallback)(o=>{if(o==="UTC")return 0;if(o==="custom_input")return 999;try{const k=new Date,H=k.toLocaleString("en-US",{timeZone:o}),te=new Date(H),K=k.toLocaleString("en-US",{timeZone:"UTC"});return(te-new Date(K))/6e4}catch{return 0}},[]),Ne=(0,a.useMemo)(()=>{let o=[...Gr];return Zt==="alpha"?o.sort((k,H)=>k.label.localeCompare(H.label)):Zt==="offset"&&o.sort((k,H)=>me(k.value)-me(H.value)),o},[Zt,me]);(0,a.useEffect)(()=>{if(w==="slideshow-2"&&p&&f){St(1);const o=setInterval(()=>{St(k=>k===1?2:1)},P*1e3);return()=>clearInterval(o)}else if(w==="slideshow-3"&&p&&f&&N){St(1);const o=setInterval(()=>{St(k=>k===3?1:k+1)},P*1e3);return()=>clearInterval(o)}else if(w==="slideshow-4"&&p&&f&&N&&z){St(1);const o=setInterval(()=>{St(k=>k===4?1:k+1)},P*1e3);return()=>clearInterval(o)}else if(w==="random"){if(Nt.length===0&&A.length>0){const o=Ya(A);pn(o),ot(0),o[0]&&m(o[0].src);return}if(Nt.length>0){const o=setInterval(()=>{ot(k=>{const H=(k+1)%Nt.length;return St(te=>{const K=te===1?2:1;return K===1?m(Nt[H].src):g(Nt[H].src),K}),H})},P*1e3);return()=>clearInterval(o)}}},[w,A,P,Nt,m,g]),(0,a.useEffect)(()=>{if(w==="random"&&A.length>0&&Nt.length!==A.length){const o=Ya(A);pn(o),ot(0),o[0]&&(C(o[0].src),St(1))}},[A.length,w]),(0,a.useEffect)(()=>{Gr.some(o=>o.value===Xe)?(x(""),fn(!1)):(x(Xe),fn(!0))},[Xe]);const Ct=()=>{lt(!0),setTimeout(()=>{jt(!1),lt(!1)},350)},Qt=(0,a.useRef)(null),Lt=[...(A||[]).filter(o=>{const k=B==="all"||(B==="custom"?G(o.src):o.category===B),H=(o.name||"").toLowerCase().includes(Ue.toLowerCase());return k&&H})].sort((o,k)=>{if(Mt==="az")return o.name.localeCompare(k.name);if(Mt==="za")return k.name.localeCompare(o.name);const H=q[o.src]||0,te=q[k.src]||0;return H!==te?te-H:o.name.localeCompare(k.name)}),$n=Lt.slice(0,rt),Sn=()=>{$(.3),ke(1),Ze(0),at(0),ht({x:50,y:50}),ut({x:50,y:50}),E(!1),de(6),Ie&&Ie(1)},en=o=>{U(k=>{const H=((k[o]||0)+1)%3;return{...k,[o]:H}})},Cn=(0,a.useRef)(null),xn=async o=>{if(!o)return;const k=o.type.startsWith("image/"),H=o.type.startsWith("video/");if(!k&&!H)return;try{const K=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`;if(Number(await u.default.getItem(K)||0)>=At){alert(`Ліміт досягнуто — не більше ${At} карток на добу.`);return}}catch(K){console.error("Failed to check hero daily limit:",K)}if(H){if(o.size>20971520){alert("Відео занадто велике! Максимум 20мб для стабільності.");return}b(K=>[{src:o,name:o.name,category:"Ваші відео"},...K]),m(o);try{const K=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,he=Number(await u.default.getItem(K)||0)+1;await u.default.setItem(K,he),ne(he)}catch(K){console.error("Failed to update hero uploaded count:",K)}return}const te=new FileReader;te.onload=K=>{const he=new Image;he.src=K.target.result,he.onload=()=>{const tt=document.createElement("canvas"),yt=1200,ma=yt/he.width;tt.width=yt,tt.height=he.height*ma,tt.getContext("2d").drawImage(he,0,0,tt.width,tt.height),tt.toBlob(async zt=>{try{const tn=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,nn=Number(await u.default.getItem(tn)||0);if(nn>=At){alert(`Ліміт досягнуто — не більше ${At} карток на добу.`);return}const ln=nn+1;await u.default.setItem(tn,ln),ne(ln)}catch(tn){console.error("Failed to update hero uploaded count:",tn)}b(tn=>[{src:zt,name:o.name,category:"Ваші картинки"},...tn]),m(zt)},"image/jpeg",.7)}}},Tn=o=>{o.preventDefault()},Ot=o=>{o.preventDefault();const k=o.dataTransfer.files[0];xn(k)},[Vn,Oe]=(0,a.useState)([]),[Fa,Bn]=(0,a.useState)(!1),[En,Pa]=(0,a.useState)(!1),[_n,bn]=(0,a.useState)(""),[It,Hn]=(0,a.useState)(()=>{const o=localStorage.getItem("hero_cooldown_until");if(o){const k=parseInt(o,10),H=Date.now();return k>H?Math.ceil((k-H)/1e3):0}return 0}),Ca=(0,a.useRef)(null),yn="5104647d3e574f4a3f23c0aa092eb2b9";(0,a.useEffect)(()=>{const o=k=>{k.type==="mousedown"&&k.button!==0||k.type==="mousedown"&&(k.target===document.body||k.target===document.documentElement)||Ca.current&&!Ca.current.contains(k.target)&&se(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const pa=async(o,k,H=!1)=>{const te=k.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(te.length<2){Je([]),se(!1);return}const K=lo.filter(he=>he.name.toLowerCase().includes(te)||he.aliases.some(tt=>tt.toLowerCase().includes(te))).map(he=>({name:he.name,state:"Україна",country:"UA",lat:he.lat,lon:he.lon,isLocal:!0}));K.length>0&&!H&&(Je(K),se(!0));try{const he=await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(te)}&limit=${o}&appid=${yn}`)).json(),tt=Array.isArray(he)?he:[];et(tt.length>=o),Je(yt=>Ag(H?yt:K,tt)),se(!0)}catch(he){console.error("Помилка API:",he),K.length>0&&(Je(K),se(!0))}};(0,a.useEffect)(()=>{u.default.getItem("pinnedLinks").then(o=>{o&&Rn(o)})},[]);const Un=o=>{Rn(k=>{let H;return k.includes(o)?H=k.filter(te=>te!==o):H=[o,...k].slice(0,5),u.default.setItem("pinnedLinks",H),H})},fa=(0,a.useCallback)(async o=>{const k=o.trim();if(!k){cn([]);return}un(!0);try{const H=await fetch(x0(k));if(!H.ok)throw new Error(`Wikipedia request failed: ${H.status}`);const te=((await H.json())?.query?.search||[]).map(K=>({id:K.pageid,title:K.title,snippet:b0(K.snippet),url:`https://uk.wikipedia.org/wiki/${encodeURIComponent(K.title).replace(/%20/g,"_")}`}));cn(te)}catch(H){console.error("Wikipedia search error:",H),cn([])}finally{un(!1)}},[]);(0,a.useEffect)(()=>{if(ye!=="links"){cn([]),un(!1);return}const o=setTimeout(()=>{fa(re)},350);return()=>clearTimeout(o)},[ye,re,fa]),(0,a.useEffect)(()=>{F(3),et(!0);const o=setTimeout(()=>{re&&pa(3,re,!1)},500);return()=>clearTimeout(o)},[re]);const gn=o=>{o.preventDefault(),o.stopPropagation();const k=T+3;F(k),pa(k,re,!0)};(0,a.useEffect)(()=>{let o;return It>0&&(o=setInterval(()=>{Hn(k=>k<=1?(localStorage.removeItem("hero_cooldown_until"),0):k-1)},1e3)),()=>clearInterval(o)},[It]);const An=async()=>{if(It>0)return;const o=parseFloat(Ln),k=parseFloat(On);if(isNaN(o)||isNaN(k)){alert("Будь ласка, введіть правильні координати");return}if(o<-90||o>90){alert("Широта має бути від -90 до 90");return}if(k<-180||k>180){alert("Довгота має бути від -180 до +180");return}const H={name:"Обрана точка",state:`Широта: ${o}`,country:`Довгота: ${k}`,lat:o,lon:k,isManual:!0};try{bn("🔍 Шукаємо за вказаними координатами...");const te=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${o}&lon=${k}&limit=10&appid=${yn}`)).json();if(te&&te.length>0){Oe([H,...te]),Bn(!0),bn("");return}Pa(!0),Bn(!0),Oe([H]),bn("Нічого не знайшли точно — шукаємо найближче...");const K=1e4,he=Date.now();let tt=!1;e:for(let yt=1;yt<=15&&!tt;yt++){const ma=[[o,Math.max(-180,Math.min(180,k+yt))],[o,Math.max(-180,Math.min(180,k-yt))],[Math.max(-90,Math.min(90,o+yt)),k],[Math.max(-90,Math.min(90,o-yt)),k]];for(const[zt,tn]of ma){if(Date.now()-he>=K)break e;bn(`🔎 Перевіряємо: ±${yt}° (шир: ${zt.toFixed(1)}°, довг: ${tn.toFixed(1)}°)...`);try{const nn=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${zt}&lon=${tn}&limit=4&appid=${yn}`)).json();if(nn&&nn.length>0){Oe([H,...nn]),bn(`✅ Знайдено поруч (відхилення ~${yt}°)`),tt=!0;break e}}catch{}}}if(!tt){const yt=((Date.now()-he)/1e3).toFixed(1);bn(`⚠️ Пошук завершено (${yt}с) — навколо немає населених пунктів. Можна додати точку вручну.`)}}catch(te){console.error("Помилка при пошуку за координатами:",te),Oe([H]),Bn(!0),bn("❌ Помилка запиту. Спробуйте ще раз.")}finally{Pa(!1)}},Ta=o=>{It>0||(r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),Hn(10),localStorage.setItem("hero_cooldown_until",Date.now()+1e4),Ht(""),Ut(""),Bn(!1),Oe([]))},Na=o=>{It>0||(r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),Hn(9),localStorage.setItem("hero_cooldown_until",Date.now()+9e3),ce(""),Je([]),se(!1))},ga=(0,a.useMemo)(()=>{const o=new Date,k=o.toISOString().split("T")[0];if(l?.birthDate){const[,K,he]=l.birthDate.split("-");if(o.getDate()===parseInt(he)&&o.getMonth()+1===parseInt(K))return{active:!0,color:"#ff5252",label:"З ДНЕМ НАРОДЖЕННЯ! 🎂"}}const H=Ge.find(K=>K.date===k);if(H)return{active:!0,color:"#fff59d",label:H.reason.toUpperCase()+"! 🎉"};const te=o.getDay();return te===0||te===6?{active:!0,color:"#ffff00"}:{active:!1,color:"#fff59d",label:""}},[Ge,l]).active;return(0,a.useMemo)(()=>ga?Array.from({length:25}).map((o,k)=>({id:k,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,x:`${(Math.random()-.5)*100}px`,y:`${(Math.random()-.5)*100}px`,duration:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`})):[],[ga]),(0,e.jsxs)(vg,{children:[(0,e.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none",visibility:"hidden"},children:(0,e.jsxs)("filter",{id:"pixelate-hero",x:"0",y:"0",width:"100%",height:"100%",children:[(0,e.jsx)("feFlood",{x:"0",y:"0",height:"1",width:"1"}),(0,e.jsx)("feComposite",{width:Math.max(1,ge*2),height:Math.max(1,ge*2)}),(0,e.jsx)("feTile",{result:"tiles"}),(0,e.jsx)("feComposite",{in:"SourceGraphic",in2:"tiles",operator:"in"}),(0,e.jsx)("feMorphology",{operator:"dilate",radius:ge})]})}),(0,e.jsx)(Xa,{$isStickyBgMode:t,$image:p,$active:w==="static"||Yt===1,$transition:fe,$zoom:ie,$rotation:xe,$rotationScale:jn,$blur:Ae,$pixelation:ge,$blurType:Ce,$focalX:mt?.x||50,$focalY:mt?.y||50,$panEnabled:S&&ie>1,$panSpeed:ee,$videoStart:A.find(o=>o.src===p)?.start,$videoEnd:A.find(o=>o.src===p)?.end,$videoPlaybackSpeed:Ee}),(0,e.jsx)(Xa,{$isStickyBgMode:t,$image:f,$active:(w==="slideshow-2"||w==="slideshow-3"||w==="slideshow-4"||w==="random")&&Yt===2,$transition:fe,$zoom:ie,$rotation:xe,$rotationScale:jn,$blur:Ae,$pixelation:ge,$blurType:Ce,$focalX:We?.x||50,$focalY:We?.y||50,$panEnabled:S&&ie>1,$panSpeed:ee,$videoStart:A.find(o=>o.src===f)?.start,$videoEnd:A.find(o=>o.src===f)?.end}),(0,e.jsx)(Xa,{$isStickyBgMode:t,$image:N,$active:(w==="slideshow-3"||w==="slideshow-4")&&Yt===3,$transition:fe,$zoom:ie,$rotation:xe,$rotationScale:jn,$blur:Ae,$pixelation:ge,$blurType:Ce,$focalX:_e?.x||50,$focalY:_e?.y||50,$panEnabled:S&&ie>1,$panSpeed:ee,$videoStart:A.find(o=>o.src===N)?.start,$videoEnd:A.find(o=>o.src===N)?.end}),(0,e.jsx)(Xa,{$isStickyBgMode:t,$image:z,$active:w==="slideshow-4"&&Yt===4,$transition:fe,$zoom:ie,$rotation:xe,$rotationScale:jn,$blur:Ae,$pixelation:ge,$blurType:Ce,$focalX:vt?.x||50,$focalY:vt?.y||50,$panEnabled:S&&ie>1,$panSpeed:ee,$videoStart:A.find(o=>o.src===z)?.start,$videoEnd:A.find(o=>o.src===z)?.end}),(0,e.jsx)(Dg,{$opacity:v,$isStickyBgMode:t}),(0,e.jsxs)(pm,{ref:o=>pt("changeBgButton",o),onClick:()=>jt(!0),children:[(0,e.jsx)(is,{}),(0,e.jsx)("p",{style:{fontSize:"11px"},children:"Змінити фон?"})]}),(0,e.jsx)(kg,{$image:Al,$start:c}),(0,e.jsxs)(jg,{$start:c,children:[(0,e.jsx)(Mg,{children:(0,e.jsx)(zg,{children:(0,e.jsx)(Rg,{children:(0,e.jsxs)(Lg,{ref:Qt,children:[n,(0,e.jsx)(Gn,{content:"Змінити часовий пояс",isDarkMode:s,children:(0,e.jsx)($g,{ref:o=>pt("timezoneButton",o),onClick:()=>le(!hn),"aria-label":"Змінити часовий пояс",children:(0,e.jsx)(os,{})})}),hn&&(0,Cl.createPortal)((0,e.jsxs)(Eg,{children:[(0,e.jsxs)(Og,{children:[(0,e.jsx)(Bg,{type:"button",onClick:()=>le(!1),"aria-label":"Закрити список часових поясів",children:"×"}),(0,e.jsx)(Vg,{children:"Часовий пояс"})]}),(0,e.jsxs)(_g,{children:[(0,e.jsx)(Bi,{$active:Zt==="default",onClick:()=>on("default"),children:"За замовчуванням"}),(0,e.jsx)(Bi,{$active:Zt==="offset",onClick:()=>on("offset"),children:"UTC +/-"})]}),(0,e.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"0 5px 10px"},children:[Ne.map(o=>{const k=Xe===o.value||o.value==="custom_input"&&Xt,H=L(o.value);return(0,e.jsx)(Fg,{$selected:k,onClick:()=>{o.value==="custom_input"?(fn(!0),Gr.some(te=>te.value===Xe)?x(""):x(Xe)):(fn(!1),ue(o.value),u.default.setItem("selected_timezone",o.value),le(!1))},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsx)("span",{children:o.label}),H&&(0,e.jsxs)("span",{style:{fontSize:"16px",opacity:.9,display:"flex",gap:"10px",whiteSpace:"nowrap",marginLeft:"12px",color:H.isDay?"#ffd54f":"#90caf9"},children:[H.isDay?(0,e.jsx)(ja,{}):(0,e.jsx)(Sa,{}),(0,e.jsx)("p",{children:H.timeStr})]})]})},o.value)}),Xt&&(0,e.jsx)("div",{style:{padding:"12px 0"},children:(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)("input",{type:"text",value:d,onChange:o=>x(o.target.value),placeholder:"Наприклад: Europe/Warsaw",style:{width:"100%",padding:"10px 110px 10px 10px",borderRadius:"5px",border:"1px solid #ffb36c",background:"#111",color:"#fff",fontSize:"14px",boxSizing:"border-box"}}),(0,e.jsx)("button",{type:"button",onClick:()=>{if(d.trim())try{Intl.DateTimeFormat("en",{timeZone:d.trim()}),ue(d.trim()),u.default.setItem("selected_timezone",d.trim()),le(!1)}catch{Pi("Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",s)}else Pi("Будь ласка, введіть часовий пояс.",s)},style:{position:"absolute",right:"4px",top:"4px",bottom:"4px",padding:"0 12px",background:"#ffb36c",border:"none",borderRadius:"3px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",color:"#1e1e1e"},children:"Застосувати"})]})})]})]}),document.body)]})})})}),(0,e.jsx)(Pg,{ref:Ca,children:ye==="city"?(0,e.jsx)(Hg,{children:(0,e.jsxs)(Ug,{children:[(0,e.jsxs)(Rr,{children:[(0,e.jsx)(Gn,{content:"Вибрати режим пошуку",isDarkMode:s,children:(0,e.jsx)(Lr,{onClick:()=>ze(o=>!o),"aria-label":"Вибрати режим пошуку",children:(0,e.jsx)(Va,{})})}),be&&(0,e.jsxs)($r,{$isDarkMode:s,children:[(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="city",onClick:()=>{ve("city"),ze(!1),Ht(""),Ut(""),Je([]),se(!1)},children:[(0,e.jsx)(Va,{})," За назвою міста"]}),(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="coordinates",onClick:()=>{ve("coordinates"),ze(!1),ce(""),Je([]),se(!1)},children:[(0,e.jsx)(_a,{})," Координати"]}),(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="links",onClick:()=>{ve("links"),ze(!1),ce(""),Je([]),se(!1),oe(null)},children:[(0,e.jsx)(Ba,{}),"  Посилання"]})]})]}),(0,e.jsx)(Kg,{ref:o=>pt("heroInput",o),value:re,$isDarkMode:s,onChange:o=>{ce(o.target.value),window.dispatchEvent(new CustomEvent("domino-hero-input-change",{detail:{value:o.target.value}}))},onFocus:()=>Le.length>0&&se(!0),placeholder:It>0?`Зачекайте ${It} сек...`:"Уведіть місто, село.",disabled:It>0,type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,name:"hero-city-search",inputMode:"search",enterKeyHint:"search","aria-label":"Пошук міста","data-form-type":"other","data-lpignore":"true"}),X&&Le.length>0&&(0,e.jsxs)(_i,{children:[Le.map((o,k)=>(0,e.jsxs)(Hi,{onClick:()=>Na(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#fffcfc"},children:["Широта: ",o.lat.toFixed(2),"°, Довгота: ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${k}`)),we?(0,e.jsx)(Ur,{isDarkMode:s,onClick:gn,children:"Завантажити ще варіанти"}):(0,e.jsx)(Ur,{isDarkMode:s,disabled:!0,children:"Кінець списку"})]}),(0,e.jsx)(Er,{onClick:()=>{It===0&&Le[0]&&Na(Le[0])},disabled:It>0,children:It>0?It:"⌕"})]})}):ye==="links"?null:(0,e.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"5px",position:"relative"},children:[(0,e.jsxs)(Ng,{style:{alignItems:"flex-start"},children:[(0,e.jsxs)(Rr,{style:{alignSelf:"flex-start"},children:[(0,e.jsx)(Gn,{content:"Вибрати режим пошуку",isDarkMode:s,children:(0,e.jsx)(Lr,{onClick:()=>ze(o=>!o),"aria-label":"Вибрати режим пошуку",style:{borderRadius:"8px 0 0 8px",height:"30px"},children:(0,e.jsx)(_a,{})})}),be&&(0,e.jsxs)($r,{$isDarkMode:s,children:[(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="city",onClick:()=>{ve("city"),ze(!1),Ht(""),Ut(""),Je([]),se(!1)},children:[(0,e.jsx)(Va,{}),"  За назвою міста"]}),(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="coordinates",onClick:()=>{ve("coordinates"),ze(!1),ce(""),Je([]),se(!1)},children:[(0,e.jsx)(_a,{}),"  Координати"]}),(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="links",onClick:()=>{ve("links"),ze(!1),ce(""),Je([]),se(!1),oe(null)},children:[(0,e.jsx)(Ba,{}),"   Посилання"]})]})]}),(0,e.jsx)(Vi,{children:(0,e.jsx)("input",{type:"number",value:Ln,onChange:o=>Ht(o.target.value),placeholder:"Широта: Від -90° до +90°",$isDarkMode:s,disabled:It>0||En,min:"-90",max:"90",step:"0.01"})}),(0,e.jsx)(Vi,{children:(0,e.jsx)("input",{type:"number",value:On,onChange:o=>Ut(o.target.value),$isDarkMode:s,placeholder:"Довгота: Від -180° до +180°",disabled:It>0||En,min:"-180",max:"180",step:"0.01"})}),(0,e.jsx)(Er,{onClick:An,disabled:It>0||En,style:{alignSelf:"flex-start"},children:It>0?It:En?"…":"⌕"})]}),_n&&(0,e.jsxs)("div",{style:{color:_n.startsWith("✅")?"#00e676":_n.startsWith("❌")?"#ff5252":_n.startsWith("⚠️")?"#ffb36c":"#00eaff",fontSize:"11px",fontWeight:"bold",textAlign:"center",padding:"4px 10px",background:"rgba(0,0,0,0.65)",borderRadius:"6px",maxWidth:"340px",margin:"4px auto 0",backdropFilter:"blur(4px)",lineHeight:1.4},children:[En&&(0,e.jsx)("span",{style:{marginRight:"6px"},children:"⟳"}),_n]}),Fa&&(0,e.jsxs)(_i,{style:{width:"auto",minWidth:"300px",marginTop:"6px",left:"50%",transform:"translateX(-50%)",position:"absolute"},children:[(0,e.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"6px",textAlign:"center",fontSize:"12px"},children:En?"🔄 Шукаємо поруч…":Vn.length>1?"📍 Знайдено поруч з координатами:":"📍 Лише точка за координатами (міст не знайдено)"}),Vn.map((o,k)=>(0,e.jsxs)(Hi,{onClick:()=>Ta(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[o.lat.toFixed(2),"°, ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${k}`)),(0,e.jsx)("button",{onClick:()=>{Bn(!1),Oe([]),bn("")},style:{width:"100%",padding:"8px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"8px",cursor:"pointer",marginTop:"10px",fontSize:"12px"},children:"✕ Закрити"})]})]})}),(0,e.jsx)("div",{style:{marginTop:"250px",zIndex:90},children:(0,e.jsx)(Fl,{user:l,isDarkMode:s,isStickyBgMode:t})})]}),ft&&(0,e.jsx)(fm,{$isClosing:Ft,onClick:Ct,children:(0,e.jsxs)(gm,{$isClosing:Ft,onClick:o=>o.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1px"},children:[(0,e.jsx)("h2",{style:{color:"#fff",margin:0,fontSize:"14px",color:"orange"},children:"Налаштування фону, вигляду"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"1px"},children:[(0,e.jsx)(Ji,{onClick:Sn,style:{padding:"4px 8px",fontSize:"12px",height:"auto"},children:"Скинути"}),(0,e.jsx)(Ji,{onClick:Ct,style:{padding:"4px 8px",fontSize:"16px",height:"auto"},children:"✖"})]})]}),(0,e.jsxs)(xm,{children:[(0,e.jsxs)(kn,{children:[(0,e.jsx)("label",{children:"🎞️ Режим зміни фону:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[(0,e.jsxs)("select",{value:w,onChange:o=>{if(O(o.target.value),o.target.value==="random"){const k=Ya(A);pn(k),ot(0),k[0]&&C(k[0].src)}St(1)},style:{background:"#000",color:"#fff",fontSize:"11px",border:"1px solid #555",borderRadius:"2px",padding:"1px",flex:1},children:[(0,e.jsx)("option",{value:"static",children:"Статичний (1 фото)"}),(0,e.jsx)("option",{value:"slideshow-2",children:"Слайд-шоу (2 фото)"}),(0,e.jsx)("option",{value:"slideshow-3",children:"Слайд-шоу (3 фото)"}),(0,e.jsx)("option",{value:"slideshow-4",children:"Слайд-шоу (4 фото)"}),(0,e.jsx)("option",{value:"random",children:"Випадковий (усі фото)"})]}),w==="random"&&(0,e.jsx)(Gn,{content:"Перемішати та скинути чергу",isDarkMode:s,children:(0,e.jsx)("button",{onClick:()=>{const o=Ya(A);pn(o),ot(0),o[0]&&(C(o[0].src),St(1))},"aria-label":"Перемішати та скинути чергу",style:{background:"#ffb36c",border:"none",borderRadius:"2px",color:"#000",padding:"1px 8px",cursor:"pointer",fontWeight:"bold",fontSize:"11px",whiteSpace:"nowrap"},children:"Скинути"})})]})]}),(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["Затемнення: ",(v*100).toFixed(0),"%"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:v,onChange:o=>$(parseFloat(o.target.value))})]}),(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["Наближення: ",ie.toFixed(2),"x"]}),(0,e.jsx)("input",{type:"range",min:"1",max:"2",step:"0.01",value:ie,onChange:o=>ke(parseFloat(o.target.value))})]}),(0,e.jsxs)(kn,{children:[(0,e.jsx)("label",{children:"🎭 Ефект фокусу:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"3px"},children:[(0,e.jsx)(Oi,{$active:Ce==="smooth",onClick:()=>{gt("smooth"),Pe(0)},style:{flex:1,fontSize:"10px",padding:"2px"},children:"Плавне"}),(0,e.jsx)(Oi,{$active:Ce==="pixelated",onClick:()=>gt("pixelated"),style:{flex:1,fontSize:"10px",padding:"2px"},children:"Піксельне"})]})]}),(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["🔄 Розворот: ",xe,"°"]}),(0,e.jsx)("input",{type:"range",min:"-180",max:"180",step:"1",value:xe,onChange:o=>Ze(parseInt(o.target.value))})]}),(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["Розмиття: ",Ae.toFixed(1),"px"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.5",value:Ae,onChange:o=>at(parseFloat(o.target.value))})]}),(0,e.jsxs)(kn,{style:{opacity:Ce==="pixelated"?1:.4},children:[(0,e.jsxs)("label",{children:["Пікселізація: ",ge.toFixed(1)]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.2",value:ge,disabled:Ce!=="pixelated",onChange:o=>Pe(parseFloat(o.target.value))})]})]}),(w==="slideshow-2"||w==="slideshow-3"||w==="slideshow-4"||w==="random")&&(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsx)(Wr,{}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3px"},children:[(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["Інтервал:"," ",P>=60?`${Math.floor(P/60)}хв ${P%60>0?P%60+"с":""}`:`${P}с`]}),(0,e.jsx)("input",{type:"range",min:"4",max:"300",step:"1",value:P,onChange:o=>V(parseInt(o.target.value))})]}),(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["Перехід: ",fe,"с"]}),(0,e.jsx)("input",{type:"range",min:"0.5",max:"1",step:"0.1",value:fe,onChange:o=>ae(parseFloat(o.target.value))})]}),(0,e.jsxs)(kn,{children:[(0,e.jsxs)("label",{children:["Швидкість відео: ",Ee,"x"]}),(0,e.jsx)("input",{type:"range",min:"0.25",max:"2",step:"0.25",value:Ee,onChange:o=>Ie(parseFloat(o.target.value))})]})]})]}),(0,e.jsx)(Wr,{}),(0,e.jsx)(Sm,{children:"Бібліотека зображень"}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"5px"},children:[(0,e.jsx)(jm,{placeholder:"Пошук картин за назвою...",value:Ue,onChange:o=>{Tt(o.target.value),Ke(300)}}),(0,e.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px"},children:"Категорія:"}),(0,e.jsxs)("select",{value:B,onChange:o=>Z(o.target.value),style:{background:"#000",fontSize:"11px",color:"#fff",border:"1px solid #555",borderRadius:"2px",padding:"1px"},children:[(0,e.jsx)("option",{value:"all",children:"Усі"}),(0,e.jsx)("option",{value:"Дракони",children:"Дракони"}),(0,e.jsx)("option",{value:"Стихія",children:"Стихія та тварини"}),(0,e.jsx)("option",{value:"Локації",children:"Локації і предмети"}),(0,e.jsx)("option",{value:"Фентезі",children:"Фентезі"}),(0,e.jsx)("option",{value:"Хоррор",children:"Хоррор"}),(0,e.jsx)("option",{value:"Майбутне",children:"Песимізм"}),(0,e.jsx)("option",{value:"Скріншоти",children:"Скріншоти"}),(0,e.jsx)("option",{value:"custom",children:"Ваші завантажені"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px"},children:"Сортувати:"}),(0,e.jsxs)("select",{value:Mt,onChange:o=>Kt(o.target.value),style:{background:"#000",color:"#fff",border:"1px solid #555",borderRadius:"2px",fontSize:"11px",padding:"1px"},children:[(0,e.jsx)("option",{value:"rating",children:"За рейтингом"}),(0,e.jsx)("option",{value:"az",children:"Назва А-Я"}),(0,e.jsx)("option",{value:"za",children:"Назва Я-А"})]})]})]})]}),(0,e.jsx)(bm,{children:$n.map((o,k)=>{const H=q[o.src]||0,te=Nt.findIndex(K=>K.src===o.src);return(0,e.jsxs)(ym,{$active:p===o.src||f===o.src,children:[(0,e.jsxs)(vm,{children:[(0,e.jsx)(Kr,{$color:H===2?"gold":H===1?"red":"white",onClick:()=>en(o.src),children:H===2?"💛":H===1?"❤️":"🤍"}),o.description&&(0,e.jsx)(Gn,{content:"Детальний опис картини",isDarkMode:s,children:(0,e.jsx)(Kr,{$color:"#aef","aria-label":"Детальний опис картини",onClick:K=>{K.stopPropagation(),Pt({name:o.name,text:o.description,src:o.src,author:o.author,source:o.source})},style:{fontSize:"18px",background:"rgb(7, 7, 7)",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},children:"?"})}),(0,e.jsx)(Gn,{content:"Скачати файл фону",isDarkMode:s,children:(0,e.jsx)(Kr,{$color:"#ffda79","aria-label":"Скачати фон",onClick:K=>{K.stopPropagation(),Ni(o)},style:{fontSize:"14px",background:"rgba(7, 7, 7, 0.8)",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:"📥"})})]}),G(o.src)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(hm,{onClick:K=>{K.stopPropagation();const he=window.prompt("Введіть нову назву для цих шпалер:",o.name);he&&b(tt=>tt.map(yt=>yt.src===o.src?{...yt,name:he}:yt))},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(mm,{onClick:K=>{K.stopPropagation(),window.confirm(`Видалити шпалери "${o.name}"?`)&&(b(he=>he.filter(tt=>tt.src!==o.src)),U(he=>{const tt={...he};return delete tt[o.src],tt}),p===o.src&&m("/assets/fog-Cew27ml4.webp"),f===o.src&&g("/assets/fog-Cew27ml4.webp"))},"aria-label":"Видалити",children:"×"})]}),o.author&&(0,e.jsxs)(Nl,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:o.author}),o.source&&(0,e.jsx)("div",{children:o.source})]}),(0,e.jsxs)(Ol,{$hasSlots:w==="slideshow-2"||w==="slideshow-3"||w==="slideshow-4",children:[w==="random"&&te!==-1&&(0,e.jsxs)("span",{style:{color:te===sn?"#6cffe4":"#ffb36c",marginRight:"6px",fontWeight:"bold",textShadow:te===sn?"0 0 8px #6cffe4":"none"},children:["#",te+1," ",te===sn&&"(Зараз)"]}),o.name]}),Ra(o.src)?(0,e.jsx)("video",{preload:"none",muted:!0,playsInline:!0,style:{width:"100%",aspectRatio:"3/2",objectFit:"cover",cursor:"pointer",background:"#111"},onMouseEnter:K=>{K.currentTarget.src||(K.currentTarget.src=o.src),K.currentTarget.play().catch(()=>{})},onMouseLeave:K=>{K.currentTarget.pause(),K.currentTarget.currentTime=0,typeof o.src=="string"&&o.src.startsWith("http")&&(K.currentTarget.removeAttribute("src"),K.currentTarget.load())},onClick:()=>C(o.src)}):(0,e.jsx)(wm,{src:o.src,loading:"lazy",onClick:()=>C(o.src),title:o.name}),w==="slideshow-2"&&(0,e.jsxs)(qr,{children:[(0,e.jsx)(Mn,{$active:p===o.src,onClick:()=>C(o.src,1),children:"Слот 1"}),(0,e.jsx)(Mn,{$active:f===o.src,onClick:()=>C(o.src,2),children:"Слот 2"})]}),w==="slideshow-3"&&(0,e.jsxs)(qr,{children:[(0,e.jsx)(Mn,{$active:p===o.src,onClick:()=>C(o.src,1),children:"Слот 1"}),(0,e.jsx)(Mn,{$active:f===o.src,onClick:()=>C(o.src,2),children:"Слот 2"}),(0,e.jsx)(Mn,{$active:N===o.src,onClick:()=>C(o.src,3),children:"Слот 3"})]}),w==="slideshow-4"&&(0,e.jsxs)(qr,{children:[(0,e.jsx)(Mn,{$active:p===o.src,onClick:()=>C(o.src,1),children:"Слот 1"}),(0,e.jsx)(Mn,{$active:f===o.src,onClick:()=>C(o.src,2),children:"Слот 2"}),(0,e.jsx)(Mn,{$active:N===o.src,onClick:()=>C(o.src,3),children:"Слот 3"}),(0,e.jsx)(Mn,{$active:z===o.src,onClick:()=>C(o.src,4),children:"Слот 4"})]})]},k)})}),Lt.length>rt&&(0,e.jsx)(Ur,{onClick:()=>Ke(o=>o+300),children:"Завантажити ще"}),(0,e.jsx)(Wr,{}),(0,e.jsxs)(km,{onDragOver:Tn,onDrop:Ot,onClick:()=>Cn.current.click(),children:["Перетягніть сюди картинку(відео) або натисніть",(0,e.jsx)("input",{type:"file",ref:Cn,hidden:!0,accept:"image/*,video/*",onChange:o=>xn(o.target.files[0])})]})]})}),dt&&(0,e.jsx)("div",{onClick:()=>Pt(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"5px"},children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[Ra(dt.src)?(0,e.jsx)("video",{src:dt.src,preload:"none",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,e.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${dt.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,e.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"10px",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,e.jsx)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"20px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:dt.name}),(0,e.jsx)("button",{onClick:()=>Pt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"5px",width:"30px",height:"30px",color:"#fff",fontSize:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(255,0,0,0.7)",o.currentTarget.style.borderColor="red"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(0,0,0,0.6)",o.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,e.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"5px 0",paddingRight:"5px"},children:(0,e.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",borderRadius:"8px",backdropFilter:"blur(2px)"},children:dt.text})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Автор: ",dt.author||"Невідомий"]}),dt.source&&(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Джерело: ",dt.source]})]}),(0,e.jsxs)("button",{onClick:()=>Ni(dt),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"13px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 8px rgba(255, 179, 108, 0.4)",display:"flex",alignItems:"center",gap:"6px",transition:"transform 0.15s ease"},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.05)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:["📥 Скачати ",Ra(dt.src)?"відео":"картинку"]})]})]})]})}),qe&&(0,e.jsx)(Gi,{onClick:()=>an(null),children:(0,e.jsx)(um,{src:qe,alt:"Fullscreen"})}),$e&&(0,e.jsx)(Gi,{onClick:()=>rn(null),children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{position:"relative",width:"90%",maxWidth:"800px",aspectRatio:"16/9",background:"#000",borderRadius:"8px",overflow:"hidden",boxShadow:"0 0 20px rgba(255,255,255,0.2)"},children:[(0,e.jsx)("iframe",{src:$e.includes("embed")?`${$e}?autoplay=1`:`https://www.youtube.com/embed/${Pl($e)}?autoplay=1`,"aria-label":"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}),(0,e.jsx)("button",{onClick:()=>rn(null),style:{position:"absolute",top:"10px",right:"10px",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"30px",height:"30px",color:"#fff",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:"×"})]})}),ye==="links"&&(0,e.jsxs)(Wg,{$isDarkMode:s,children:[(0,e.jsxs)(Gg,{$isDarkMode:s,children:[(0,e.jsxs)(Jg,{$isDarkMode:s,children:[(0,e.jsxs)(Rr,{children:[(0,e.jsx)(Gn,{content:"Вибрати режим пошуку",isDarkMode:s,children:(0,e.jsx)(Lr,{onClick:()=>ze(o=>!o),"aria-label":"Вибрати режим пошуку",style:{background:"#ffb36c",color:"#000",borderRadius:"50%",width:"34px",height:"34px"},children:(0,e.jsx)(Ba,{})})}),be&&(0,e.jsxs)($r,{$isDarkMode:s,children:[(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="city",onClick:()=>{ve("city"),ze(!1),Ht(""),Ut(""),Je([]),se(!1)},children:[(0,e.jsx)(Va,{})," За назвою міста"]}),(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="coordinates",onClick:()=>{ve("coordinates"),ze(!1),ce(""),Je([]),se(!1)},children:[(0,e.jsx)(_a,{})," Координати"]}),(0,e.jsxs)(Dn,{$isDarkMode:s,$active:ye==="links",onClick:()=>{ve("links"),ze(!1),ce(""),Je([]),se(!1)},children:[(0,e.jsx)(Ba,{})," Посилання"]})]})]}),(0,e.jsx)(Yg,{$isDarkMode:s,value:re,onChange:o=>ce(o.target.value),placeholder:"Пошук сайтів, ігор, статей, авторів...",type:"text",autoFocus:!0,autoComplete:"off"}),re&&(0,e.jsx)(qg,{onClick:()=>ce(""),"aria-label":"Очистити",type:"button",style:{position:"static",transform:"none",borderRadius:"50%"},children:"×"}),(0,e.jsx)(Er,{onClick:()=>{re.trim()&&window.open("https://www.google.com/search?q="+encodeURIComponent(re),"_blank")},style:{width:"36px",height:"36px",borderRadius:"50%",fontSize:"16px"},children:"⌕"})]}),(0,e.jsx)(Zg,{$isDarkMode:s,children:"Натисніть на картку сайту, щоб відкрити повний опис та галерею • Esc для виходу"})]}),(0,e.jsxs)(Xg,{children:[re.trim()===""&&_t.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Wi,{$isDarkMode:s,children:"📌 Закріплені сайти"}),vi.filter(o=>_t.includes(o.id)).map(o=>{const k=Za(o),H=zr(o);return(0,e.jsxs)(Fr,{$isDarkMode:s,onClick:()=>Jt(o),children:[(0,e.jsx)(Pr,{$bg:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",children:(0,e.jsx)(Ui,{link:o})}),(0,e.jsxs)(Or,{children:[(0,e.jsx)(Vr,{$isDarkMode:s,children:o.title}),k&&(0,e.jsxs)(Br,{$isDarkMode:s,children:[" ",k]}),o.tags&&(0,e.jsx)(Ki,{children:o.tags.map(te=>(0,e.jsxs)(qi,{$isDarkMode:s,children:["#",te]},te))})]}),(0,e.jsxs)(_r,{onClick:te=>te.stopPropagation(),children:[H.map(te=>{const K=Mr[te.type];return K?(0,e.jsxs)(Hr,{$color:K.color,onClick:()=>window.open(te.url,"_blank"),children:[K.emoji," ",K.label]},te.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"})]})]},`pinned-${o.id}`)}),(0,e.jsx)(nm,{$isDarkMode:s}),(0,e.jsx)(Wi,{$isDarkMode:s,children:"🌐 Усі сайти та ресурси"})]}),vi.filter(o=>{if(re.trim()==="")return!0;const k=re.toLowerCase(),H=o.title.toLowerCase().includes(k)||o.snippet&&o.snippet.toLowerCase().includes(k),te=Za(o)?.toLowerCase().includes(k),K=o.tags&&o.tags.some(he=>he.toLowerCase().includes(k));return H||te||K}).map(o=>{const k=Za(o),H=zr(o),te=_t.includes(o.id);return(0,e.jsxs)(Fr,{$isDarkMode:s,onClick:()=>Jt(o),children:[(0,e.jsx)(Pr,{children:(0,e.jsx)(Ui,{link:o})}),(0,e.jsxs)(Or,{children:[(0,e.jsx)(Vr,{$isDarkMode:s,children:o.title}),k&&(0,e.jsx)(Br,{$isDarkMode:s,children:k}),o.tags&&(0,e.jsx)(Ki,{children:o.tags.map(K=>(0,e.jsxs)(qi,{$isDarkMode:s,children:["#",K]},K))})]}),(0,e.jsxs)(_r,{onClick:K=>K.stopPropagation(),children:[H.map(K=>{const he=Mr[K.type];return he?(0,e.jsxs)(Hr,{$color:he.color,onClick:()=>window.open(K.url,"_blank"),children:[he.emoji," ",he.label]},K.type):null}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"}),(0,e.jsx)("button",{onClick:()=>Un(o.id),title:te?"Відкріпити":"Закріпити",style:{background:"transparent",border:"none",cursor:"pointer",fontSize:"16px",color:te?"#ffb36c":s?"#666":"#aaa"},children:te?(0,e.jsx)(Md,{}):(0,e.jsx)(ed,{})})]})]})]},o.id)}),ca.map(o=>(0,e.jsxs)(Fr,{$isDarkMode:s,onClick:()=>Jt({title:o.title,url:o.url,snippet:o.snippet,buttonText:"Читати у Вікіпедії",author:"Вікіпедія (Українська)",tags:["вікіпедія","енциклопедія"]}),children:[(0,e.jsx)(Pr,{$bg:"linear-gradient(135deg, #00bfff, #0077ff)",children:"W"}),(0,e.jsxs)(Or,{children:[(0,e.jsx)(Vr,{$isDarkMode:s,children:o.title}),(0,e.jsx)(Br,{$isDarkMode:s,children:"🌐 Вікіпедія"})]}),(0,e.jsx)(_r,{onClick:k=>k.stopPropagation(),children:(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#00bfff",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:"Вікіпедія"})})]},o.id)),ua&&(0,e.jsx)("div",{style:{padding:"16px",textAlign:"center",color:s?"#aaa":"#555"},children:"⏳ Завантажую результати з Вікіпедії..."})]})]}),Fe&&(()=>{const o=Cg(Fe),k=Za(Fe);return(0,e.jsx)(am,{onClick:()=>Jt(null),children:(0,e.jsxs)(rm,{$bgImage:o,$bg:Fe.bg,onClick:H=>H.stopPropagation(),children:[(0,e.jsxs)(om,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{color:"#ffb36c",margin:0,fontSize:"22px",fontWeight:"bold",textShadow:"0 2px 6px rgba(0,0,0,0.9)"},children:Fe.title}),k&&(0,e.jsxs)("div",{style:{color:"#f9f6f6",fontSize:"13px",marginTop:"4px"},children:["Автор / Постачальник: ",(0,e.jsx)("b",{children:k})]})]}),(0,e.jsx)("button",{onClick:()=>Jt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"32px",height:"32px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]}),(0,e.jsxs)(im,{children:[Fe.tags&&(0,e.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:Fe.tags.map(H=>(0,e.jsxs)("span",{style:{background:"rgba(255, 179, 108, 0.2)",color:"#ffb36c",border:"1px solid rgba(255, 179, 108, 0.35)",padding:"2px 8px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold"},children:["#",H]},H))}),(Fe.images&&Fe.images.length>0||Fe.youtubeTrailer)&&(0,e.jsx)(cm,{images:Fe.images||[],youtubeTrailer:Fe.youtubeTrailer,setFullscreenImage:an,imageMap:Vl,setFullscreenVideo:rn}),(0,e.jsx)("div",{style:{lineHeight:"1.8",whiteSpace:"pre-wrap",color:"#f0f0f0",fontSize:"14px",textShadow:"0 1px 4px rgba(0,0,0,0.9)",background:"rgba(0, 0, 0, 0.35)",padding:"14px",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.07)"},children:Fe.snippet})]}),(0,e.jsxs)(sm,{children:[zr(Fe).map(H=>{const te=Mr[H.type];return te?(0,e.jsxs)(Hr,{$color:te.color,onClick:()=>window.open(H.url,"_blank"),style:{padding:"8px 14px",fontSize:"13px"},children:[te.emoji," Відкрити в ",te.label]},H.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(Fe.url,"_blank"),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"20px",padding:"8px 20px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",marginLeft:"auto"},children:Fe.buttonText||"Перейти на сайт"})]})]})})})()]})},er=t=>{if(typeof t=="string")return t;if(t&&typeof t=="object"){const n=t.type?.name||"";if(n==="FaSun")return"☀️";if(n==="BsMoonStarsFill")return"🌙";if(n==="FaCloudMoon"||n==="FaSmog")return"☁️";if(n==="IoRainy"||n==="LiaCloudSunRainSolid"||n==="FaCloudMoonRain"||n==="LiaCloudMoonRainSolid")return"🌧️";if(n==="GiSnowing")return"❄️";if(n==="IoThunderstorm")return"⛈️";if(t.props?.children){const r=t.props.children;if(typeof r=="string")return r;if(Array.isArray(r))return r.filter(Boolean).map(String).join("")}}return"☁️"},Yr=t=>Array.isArray(t)?t.map(n=>{const r={...n},c=l=>{if(Array.isArray(l))return l.map(s=>c(s));if(l&&typeof l=="object"){if(l.$$typeof&&typeof l.$$typeof=="symbol")return er(l);const s={};return Object.entries(l).forEach(([y,p])=>{s[y]=c(p)}),s}return l};return Object.entries(r).forEach(([l,s])=>{(l==="current"||l==="hourly"||l==="daily16"||l==="seasonal")&&(r[l]=c(s))}),r.current&&(r.current.iconSymbol=er(r.current.iconSymbol??r.current.iconPlaceholder),r.current.iconPlaceholder=r.current.iconPlaceholder??r.current.iconSymbol??"☁️"),Array.isArray(r.hourly)&&(r.hourly=r.hourly.map(l=>({...l,iconSymbol:er(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.daily16)&&(r.daily16=r.daily16.map(l=>({...l,iconSymbol:er(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.seasonal)&&(r.seasonal=r.seasonal.map(l=>({...l}))),r}):[],Cm=Te`
  from { opacity: 0; }
  to { opacity: 1; }
`,Tm=Te`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`,Am=i.div`
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
  animation: ${Cm} 0.2s ease-out;
`,Im=i.div`
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
  animation: ${Tm} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,Dm=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`,Mm=i.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,zm=i.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`,Rm=i.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`,Lm=i.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$m=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`,Yi=i.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`,tr=i.button`
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
`,Em=i.div`
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
`,Fm=i.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`,Zr=i.input`
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
`,Zi=i.input`
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
`,Pm=i.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`,Bl=i.button`
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
`,Nm=i(Bl)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`,Om=i(Bl)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,Xi=Object.values({color:{label:"Колір тексту",cssProp:"color",type:"color",desc:"Змінює колір шрифту елемента"},backgroundColor:{label:"Колір фону",cssProp:"backgroundColor",type:"color",desc:"Змінює фоновий колір елемента"},border:{label:"Рамка (бордюр)",cssProp:"border",type:"border",desc:"Налаштування межі елемента"},borderRadius:{label:"Заокруглення кутів",cssProp:"borderRadius",type:"text",placeholder:"напр., 8px або 50%",desc:"Радіус заокруглення рамки"},boxShadow:{label:"Тінь елемента",cssProp:"boxShadow",type:"text",placeholder:"напр., 0 4px 10px rgba(0,0,0,0.3)",desc:"Додає ефект тіні навколо елемента"},textShadow:{label:"Тінь тексту",cssProp:"textShadow",type:"text",placeholder:"напр., 1px 1px 2px #000",desc:"Ефект тіні для тексту"},backdropFilter:{label:"Розмиття фону",cssProp:"backdropFilter",type:"text",placeholder:"напр., blur(10px)",desc:"Ефекти для фону (скляний ефект)"},filter:{label:"Фільтри",cssProp:"filter",type:"text",placeholder:"напр., grayscale(50%)",desc:"Ефекти зображення/кольору"},outline:{label:"Контур",cssProp:"outline",type:"text",placeholder:"напр., 2px solid red",desc:"Зовнішня рамка елемента"},textDecoration:{label:"Декорування тексту",cssProp:"textDecoration",type:"text",placeholder:"напр., underline або none",desc:"Підкреслення, закреслення тощо"},cursor:{label:"Курсор миші",cssProp:"cursor",type:"cursor",desc:"Вигляд курсора при наведенні"}}),Qi=t=>{if(!t||t==="transparent"||t==="rgba(0, 0, 0, 0)")return"#000000";if(t.startsWith("#"))return t;const n=t.match(/\d+/g);return!n||n.length<3?"#000000":"#"+n.slice(0,3).map(r=>parseInt(r).toString(16).padStart(2,"0")).join("")},Vm=t=>{if(!t||t==="none")return{width:"0px",style:"none",color:"#000000"};const n=t.split(/\s+/);let r="1px",c="solid",l="#000000";return n.forEach(s=>{/^\d+(px|em|rem|%|pt)$/.test(s)||/^\d+$/.test(s)?r=s.includes("px")||s.includes("em")||s.includes("rem")||s.includes("%")||s.includes("pt")?s:s+"px":["solid","double","dashed","dotted","groove","ridge","inset","outset","none"].includes(s)?c=s:(s.startsWith("#")||s.startsWith("rgb")||s.startsWith("hsl")||/^[a-zA-Z]+$/.test(s))&&(l=s)}),{width:r,style:c,color:l}},nr=(t,n,r)=>n==="none"||t==="0px"?"none":`${t} ${n} ${r}`,Bm=({targetElement:t,onClose:n,isStickyBgMode:r})=>{const{applyStyle:c,getOverridesForElement:l,isDarkMode:s}=xo(),[y,p]=(0,a.useState)(s?"dark":"light"),[m,f]=(0,a.useState)("default"),g=`${y}_${m}`,N=t?.tagName?.toLowerCase()||"?",M=t?vp(t):"",[z,R]=(0,a.useState)({});(0,a.useEffect)(()=>{if(M){const $=l(M);R(JSON.parse(JSON.stringify($)))}},[M,l]);const I=($,q)=>{R(U=>({...U,[g]:{...U[g]||{},[$]:q}}))},b=()=>{const $=l(M);["light_default","light_hover","dark_default","dark_hover"].forEach(q=>{const U=z[q]||{},P=$[q]||{};Xi.forEach(({cssProp:V})=>{U[V]!==P[V]&&(U[V]?c(M,N,V,P[V],U[V],q):P[V]&&c(M,N,V,P[V],"",q))})}),n()},w=()=>{n(),setTimeout(()=>{N==="input"||N==="textarea"||N==="select"?t.focus():t.click()},10)};if(!t)return null;const O=z[g]||{};let v="";if(z){const $=M.includes(" > ")||M.includes("#")||M.includes(":")?M:`[data-decorator-id="${M}"]`;z.light_default&&(v+=`body:not(.decorator-dark-mode) ${$} { `,Object.entries(z.light_default).forEach(([q,U])=>{v+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),v+=`}
`),z.light_hover&&(v+=`body:not(.decorator-dark-mode) ${$}:hover { `,Object.entries(z.light_hover).forEach(([q,U])=>{v+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),v+=`}
`),z.dark_default&&(v+=`body.decorator-dark-mode ${$} { `,Object.entries(z.dark_default).forEach(([q,U])=>{v+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),v+=`}
`),z.dark_hover&&(v+=`body.decorator-dark-mode ${$}:hover { `,Object.entries(z.dark_hover).forEach(([q,U])=>{v+=`${q.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${U} !important; `}),v+=`}
`)}return(0,e.jsxs)(Am,{onClick:$=>{$.target===$.currentTarget&&n()},"data-decorator-ignore":"true",children:[(0,e.jsx)("style",{children:v}),(0,e.jsxs)(Im,{"data-decorator-ignore":"true",onClick:$=>$.stopPropagation(),$isStickyBgMode:r,children:[(0,e.jsxs)(Dm,{children:[(0,e.jsxs)(Mm,{children:["🎨 Декоратор ",(0,e.jsxs)(zm,{children:["<",N,">"]})]}),(0,e.jsx)(Rm,{onClick:n,"data-decorator-ignore":"true",children:"×"})]}),(0,e.jsxs)(Lm,{children:[(0,e.jsxs)($m,{children:[(0,e.jsxs)(Yi,{children:[(0,e.jsx)(tr,{$active:y==="light",onClick:()=>p("light"),children:"🌞 Денна"}),(0,e.jsx)(tr,{$active:y==="dark",onClick:()=>p("dark"),children:"🌙 Темна"})]}),(0,e.jsxs)(Yi,{children:[(0,e.jsx)(tr,{$active:m==="default",onClick:()=>f("default"),children:"Стандарт"}),(0,e.jsx)(tr,{$active:m==="hover",onClick:()=>f("hover"),children:":hover"})]})]}),Xi.map(({cssProp:$,label:q,type:U,placeholder:P,desc:V})=>{const fe=O[$]||"";return(0,e.jsx)(Em,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"5px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)(Fm,{children:q}),(0,e.jsx)("span",{style:{fontSize:"10px",color:"#858da3"},children:V})]}),U==="color"&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsx)(Zi,{type:"color",value:Qi(fe),onChange:ae=>I($,ae.target.value),"data-decorator-ignore":"true"}),(0,e.jsx)(Zr,{value:fe,onChange:ae=>I($,ae.target.value),placeholder:"напр., #ffb36c або transparent","data-decorator-ignore":"true"})]}),U==="cursor"&&(0,e.jsxs)("select",{value:fe,onChange:ae=>I($,ae.target.value),"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 10px",borderRadius:"8px",fontSize:"12px",outline:"none",width:"100%"},children:[(0,e.jsx)("option",{value:"",children:"успадковується (default)"}),(0,e.jsx)("option",{value:"default",children:"стрілка (default)"}),(0,e.jsx)("option",{value:"pointer",children:"вказівник / посилання (pointer)"}),(0,e.jsx)("option",{value:"grab",children:"захоплення / рука відкрито (grab)"}),(0,e.jsx)("option",{value:"grabbing",children:"рука стиснута (grabbing)"}),(0,e.jsx)("option",{value:"zoom-in",children:"збільшення (zoom-in)"}),(0,e.jsx)("option",{value:"zoom-out",children:"зменшення (zoom-out)"}),(0,e.jsx)("option",{value:"text",children:"виділення тексту (text)"}),(0,e.jsx)("option",{value:"not-allowed",children:"заборонено (not-allowed)"}),(0,e.jsx)("option",{value:"help",children:"довідка (help)"}),(0,e.jsx)("option",{value:"wait",children:"очікування (wait)"}),(0,e.jsx)("option",{value:"move",children:"переміщення (move)"})]}),U==="border"&&(()=>{const ae=Vm(fe);return(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("select",{value:ae.width,onChange:B=>{const Z=nr(B.target.value,ae.style,ae.color);I($,Z)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:1},children:[(0,e.jsx)("option",{value:"0px",children:"0px"}),(0,e.jsx)("option",{value:"1px",children:"1px"}),(0,e.jsx)("option",{value:"2px",children:"2px"}),(0,e.jsx)("option",{value:"3px",children:"3px"}),(0,e.jsx)("option",{value:"4px",children:"4px"}),(0,e.jsx)("option",{value:"5px",children:"5px"}),(0,e.jsx)("option",{value:"8px",children:"8px"}),(0,e.jsx)("option",{value:"10px",children:"10px"})]}),(0,e.jsxs)("select",{value:ae.style,onChange:B=>{const Z=nr(ae.width,B.target.value,ae.color);I($,Z)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:2},children:[(0,e.jsx)("option",{value:"none",children:"немає (none)"}),(0,e.jsx)("option",{value:"solid",children:"суцільна (solid)"}),(0,e.jsx)("option",{value:"double",children:"подвійна (double)"}),(0,e.jsx)("option",{value:"dashed",children:"штрихова (dashed)"}),(0,e.jsx)("option",{value:"dotted",children:"пунктирна (dotted)"}),(0,e.jsx)("option",{value:"groove",children:"3D жолоб (groove)"}),(0,e.jsx)("option",{value:"ridge",children:"3D гребінь (ridge)"}),(0,e.jsx)("option",{value:"inset",children:"3D втиснута (inset)"}),(0,e.jsx)("option",{value:"outset",children:"3D витиснута (outset)"})]}),(0,e.jsx)(Zi,{type:"color",value:Qi(ae.color),onChange:B=>{const Z=nr(ae.width,ae.style,B.target.value);I($,Z)},"data-decorator-ignore":"true"}),(0,e.jsx)(Zr,{value:ae.color,onChange:B=>{const Z=nr(ae.width,ae.style,B.target.value);I($,Z)},placeholder:"#ffb36c","data-decorator-ignore":"true",style:{flex:2,minWidth:"70px"}})]})})(),U==="text"&&(0,e.jsx)(Zr,{value:fe,onChange:ae=>I($,ae.target.value),placeholder:P||"успадковується","data-decorator-ignore":"true"})]})},$)})]}),(0,e.jsxs)(Pm,{children:[(0,e.jsx)(Om,{onClick:w,"data-decorator-ignore":"true",children:"▶ Виконати дію"}),(0,e.jsx)(Nm,{onClick:b,"data-decorator-ignore":"true",children:"✓ Застосувати"})]})]})]})},Xr={outline:"2px dashed #ffb36c",outlineOffset:"2px",cursor:"crosshair"},Qr=t=>{if(!t)return!0;let n=t;for(;n&&n!==document.body;){if(n.getAttribute?.("data-decorator-ignore")==="true"||n.tagName==="HEADER"||n.id==="decorator-overlay")return!0;n=n.parentElement}return!1},_m=({isStickyBgMode:t})=>{const{isDecoratorMode:n}=xo(),[r,c]=(0,a.useState)(null),[l,s]=(0,a.useState)(null),y=(0,a.useCallback)(f=>{!n||Qr(f.target)||(r&&r!==f.target&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor=""),f.target.style.outline=Xr.outline,f.target.style.outlineOffset=Xr.outlineOffset,f.target.style.cursor=Xr.cursor,c(f.target))},[n,r]),p=(0,a.useCallback)(f=>{!n||Qr(f.target)||(f.target.style.outline="",f.target.style.outlineOffset="",f.target.style.cursor="",r===f.target&&c(null))},[n,r]),m=(0,a.useCallback)(f=>{n&&f.isTrusted&&(Qr(f.target)||(f.preventDefault(),f.stopPropagation(),f.target&&(f.target.style.outline="",f.target.style.outlineOffset="",f.target.style.cursor=""),s(f.target)))},[n]);return(0,a.useEffect)(()=>{if(!n){r&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor="",c(null));return}return document.addEventListener("mouseover",y,!0),document.addEventListener("mouseout",p,!0),document.addEventListener("click",m,!0),()=>{document.removeEventListener("mouseover",y,!0),document.removeEventListener("mouseout",p,!0),document.removeEventListener("click",m,!0)}},[n,y,p,m,r]),(0,a.useEffect)(()=>(n?document.body.style.cursor="crosshair":document.body.style.cursor="",()=>{document.body.style.cursor=""}),[n]),!n&&!l?null:(0,e.jsx)(e.Fragment,{children:l&&(0,e.jsx)(Bm,{targetElement:l,onClose:()=>s(null),isStickyBgMode:t})})},Hm=(t="",n="")=>{try{const r=new URLSearchParams(t||window.location.search);let c=r.get("q")||r.get("search")||r.get("city")||r.get("query")||r.get("pohoda")||r.get("s");if(!c&&n){const m=n.indexOf("?");if(m!==-1){const f=new URLSearchParams(n.substring(m));c=f.get("q")||f.get("search")||f.get("city")||f.get("query")||f.get("pohoda")||f.get("s")}}if(!c)return{isSearchEntry:!1,query:"",cityData:null};const l=decodeURIComponent(c).trim();if(!l)return{isSearchEntry:!1,query:"",cityData:null};const s=Il(l);if(s)return{isSearchEntry:!0,query:l,cityName:s.name,cityData:{id:`search-${s.name.toLowerCase()}`,name:s.name,fullName:s.fullName,lat:s.lat,lon:s.lon}};const y=l.replace(/^(погода\s+(в|у)?\s*)/i,"").replace(/(\s*погода)$/i,"").trim(),p=y.charAt(0).toUpperCase()+y.slice(1);return{isSearchEntry:!0,query:l,cityName:p,cityData:{id:`search-${p.toLowerCase()}`,name:p,fullName:`${p} (UA)`,lat:null,lon:null}}}catch(r){return console.error("Помилка аналізу пошукового запиту:",r),{isSearchEntry:!1,query:"",cityData:null}}},Um=Te`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Km=i.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`,qm=i.div`
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 24px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Tl}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;
  animation: ${Um} 0.3s ease-out;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    max-width: 580px;
    padding: 40px 35px;
    border-radius: 16px;
    border-width: 3px;
  }
`,Wm=i.h2`
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`,Gm=i.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 30px;
  }
`,Jm=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`,es=i.button`
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
`,Ym=i.div`
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
`,Zm=i.button`
  margin-top: 10px;
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`,Xm=i.button`
  margin-top: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  &:hover { color: #fff; border-color: #fff; }
`,Qm=i.div`
  position: fixed;
  border: 3px dashed #ffb36c;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.65);
`,eh=({user:t})=>{const{isActive:n,currentStep:r,showInitialModal:c,startTutorial:l,skipTutorialWeek:s,refs:y,nextStep:p,jumpToStep:m,closeTutorial:f}=Ea(),[g,N]=(0,a.useState)({}),[M,z]=(0,a.useState)({display:"none"}),[R,I]=(0,a.useState)(!0),[b,w]=(0,a.useState)(!1),O=(0,a.useRef)(null),v=(0,a.useRef)(null),$=(0,a.useCallback)(B=>{if(!B)return;const Z=B.getBoundingClientRect(),ie=Math.max(2,Z.top-5),ke=Math.max(2,Z.left-5),xe=Math.min(Z.width+10,window.innerWidth-ke-2),Ze=Math.min(Z.height+10,window.innerHeight-ie-2);z({top:ie,left:ke,width:xe,height:Ze});const Ae=300,at=220;let ge=Z.bottom+15,Pe=Z.left;ge+at>window.innerHeight&&(ge=Z.top-at-10),ge<5&&(ge=5),Pe+Ae>window.innerWidth&&(Pe=window.innerWidth-Ae-10),Pe<5&&(Pe=5),N({top:ge,left:Pe})},[]);(0,a.useEffect)(()=>{if(!n)return;const B=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=B}},[n]),(0,a.useEffect)(()=>{if(!n)return;const B=q.find(ie=>ie.step===r);if(!B){f();return}I(!0),w(!1),B.onEnter&&B.onEnter(),B.autoAction&&B.autoAction();const Z=B.targetName?y.current[B.targetName]:null;if(v.current=Z,Z){Z.scrollIntoView({behavior:"smooth",block:"center"});const ie=setTimeout(()=>$(Z),500),ke=()=>$(Z);return window.addEventListener("resize",ke),()=>{clearTimeout(ie),window.removeEventListener("resize",ke)}}else z({display:"none"}),N({top:"50%",left:"50%",transform:"translate(-50%, -50%)"})},[r,n]),(0,a.useEffect)(()=>{if(!n||r!==1)return;const B=Z=>{Z.detail&&Z.detail.value&&Z.detail.value.trim().length>0?(I(!1),clearTimeout(O.current),O.current=setTimeout(()=>I(!0),5e3)):(clearTimeout(O.current),I(!0))};return window.addEventListener("domino-hero-input-change",B),()=>{window.removeEventListener("domino-hero-input-change",B),clearTimeout(O.current)}},[n,r]),(0,a.useEffect)(()=>{if(!n)return;const B=()=>{r===1&&p()};return window.addEventListener("domino-next-step-auto",B),()=>window.removeEventListener("domino-next-step-auto",B)},[n,r,p]),(0,a.useEffect)(()=>{if(!n)return;const B=()=>{r===3&&p()};return window.addEventListener("domino-weather-gear-clicked",B),()=>window.removeEventListener("domino-weather-gear-clicked",B)},[n,r,p]);const q=[{step:1,targetName:"heroInput",text:"Привіт! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у випадаючому списку."},{step:2,targetName:null,text:"Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.",autoAction:()=>{setTimeout(()=>{document.body.style.overflow="",window.scrollTo({top:window.innerHeight,behavior:"smooth"}),setTimeout(()=>{document.body.style.overflow="hidden",p()},1500)},2e3)},noSkip:!0},{step:3,targetName:"weatherGear",text:"У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань."},{step:4,targetName:"weatherModal",text:`Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.

• Ліміт: до 8 карток одночасно (до 1000 створень на добу).`},{step:5,targetName:null,text:"Нижче ти знайдеш кліматичну карту Windy.com, чат із Gemini та інструменти для роботи із зображеннями (Стихії, Pixabay...).",onEnter:()=>{window.dispatchEvent(new CustomEvent("domino-close-weather-settings"))}},{step:6,targetName:"newsHeader",text:"Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали."},{step:7,targetName:"headerBgTheme",text:"Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту."},{step:8,targetName:null,text:t?"Дякуємо, що ти з нами! Насолоджуйся сайтом.":"Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)",isLast:!0}],U=(0,a.useCallback)(()=>{if(b)return;w(!0);const B=q.find(Z=>Z.step===r);if(B){if(B.isLast){f();return}if(r===1){const Z=y.current.heroInput;if(!(Z&&Z.value&&Z.value.trim().length>0))window.dispatchEvent(new CustomEvent("domino-auto-input-konotop")),setTimeout(()=>p(),2500);else{setTimeout(()=>w(!1),500);return}}else r===3&&window.dispatchEvent(new CustomEvent("domino-open-weather-settings")),p();setTimeout(()=>w(!1),2e3)}},[b,r,q,f,p,y]),P=(0,a.useCallback)(()=>{b||(window.dispatchEvent(new CustomEvent("domino-close-weather-settings")),m(8))},[b,m]);if(c)return(0,e.jsx)(Km,{children:(0,e.jsxs)(qm,{children:[(0,e.jsx)(Wm,{children:"Отримати навчання?"}),(0,e.jsx)(Gm,{children:"Доміно пропонує вам безкоштовну допомогу, для швидшого опанування сайту"}),(0,e.jsxs)(Jm,{children:[(0,e.jsx)(es,{onClick:l,children:"Так, і не нагадувати про це 30 днів"}),(0,e.jsx)(es,{onClick:s,children:"Ні, і не нагадувати тиждень!"})]})]})});if(!n)return null;const V=q.find(B=>B.step===r);if(!V)return null;const fe=M.display!=="none",ae=!V.isLast&&!V.noSkip&&r<=6;return(0,e.jsxs)(e.Fragment,{children:[fe&&(0,e.jsx)(Qm,{style:M}),(0,e.jsxs)(Ym,{style:{...g,opacity:R?1:0,pointerEvents:R?"auto":"none",transition:"opacity 0.3s ease"},children:[(0,e.jsxs)("div",{style:{fontSize:"12px",color:"#ccc",marginBottom:"5px"},children:["Крок ",r,"/8 (Доміно)"]}),(0,e.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:V.text}),!V.noSkip&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"10px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsx)(Zm,{onClick:U,disabled:b,children:V.isLast?"Завершити":"Пропустити"}),ae&&(0,e.jsx)(Xm,{onClick:P,title:"Пропустити до кроку 8",children:"До кінця →"})]})]})]})},th=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
`,nh=({content:t,children:n,placement:r="bottom",isDarkMode:c=!0})=>{const[l,s]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:p,floatingStyles:m,context:f}=sa({open:l,onOpenChange:s,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:Zn,middleware:[la(8),Yn(),da({padding:5}),ta({element:y})]}),{isMounted:g,styles:N}=na(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),M=ea(f,{move:!1}),z=Qn(f),R=aa(f),I=ra(f,{role:"tooltip"}),{getReferenceProps:b,getFloatingProps:w}=oa([M,z,R,I]);if(!t)return n;const O=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...b(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(Xn,{children:(0,e.jsxs)(th,{ref:p.setFloating,$isDarkMode:c,style:{...m,...N},...w(),children:[t,(0,e.jsx)(ia,{ref:y,context:f,fill:O,stroke:"#00acb9",strokeWidth:1})]})})]})},ah=(0,a.lazy)(()=>Be(()=>import("./Prison-DIFkMX0Q.js"),__vite__mapDeps([0,1,2,3]))),rh=(0,a.lazy)(()=>Be(()=>import("./Aihelp-BLw113Lp.js"),__vite__mapDeps([4,1,2]))),oh=(0,a.lazy)(()=>Be(()=>import("./FanArt-B1IhQm8x.js"),__vite__mapDeps([5,1,2]))),ih=(0,a.lazy)(()=>Be(()=>import("./ShopModal-h7X_KSVK.js"),__vite__mapDeps([6,1,2]))),sh=(0,a.lazy)(()=>Be(()=>import("./AchivmentsModal-DWljNu51.js"),__vite__mapDeps([7,1,2]))),lh=(0,a.lazy)(()=>Be(()=>import("./ClimateMap-BiWTXuYp.js"),__vite__mapDeps([8,1,2]))),dh=(0,a.lazy)(()=>Be(()=>import("./MusicPhoto-BfVrpkJ8.js"),__vite__mapDeps([9,1,2,10]))),ch=(0,a.lazy)(()=>Be(()=>import("./Modal-D9gD_S-Y.js"),__vite__mapDeps([11,1,2,12]))),uh=(0,a.lazy)(()=>Be(()=>import("./LoginModal-aEfh6ui0.js"),__vite__mapDeps([13,1,2]))),ph=(0,a.lazy)(()=>Be(()=>import("./UserSettingsModal-Cd91gPuV.js"),__vite__mapDeps([14,1,2,12]))),fh=(0,a.lazy)(()=>Be(()=>import("./VipModal-Dcf2ADrt.js"),__vite__mapDeps([15,1,2]))),gh=(0,a.lazy)(()=>Be(()=>import("./WeatherDetailsModal-CCxeL8t0.js"),__vite__mapDeps([16,1,2]))),eo=(0,a.lazy)(()=>Be(()=>Promise.resolve().then(()=>Ml),void 0)),mh=(0,a.lazy)(()=>Be(()=>import("./OtherOptionsModal-NjgQMAfG.js"),__vite__mapDeps([17,1,2,10]))),hh=uc`
  ${t=>t.$locked&&qt`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
    `}
`,to=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${t=>t.$isHidden?"none":"block"};
`,ts=[dr,mo,go,ho,tp];Pd.register(cc,jd,td,lc,od,nd,Cd,ic);var ar=(t,n=1)=>t===0?n?"☀️ Ясно":"🌙 Ясно":t>=1&&t<=3?n?"🌤️ Мінлива хмарність":"☁️ Мінлива хмарність":t>=45&&t<=48?"☁️ Туман":t>=51&&t<=55?"🌧️ Мряка":t>=56&&t<=57?"🌧️ Мряка з снігом":t>=61&&t<=65?"🌧️ Дощ":t>=66&&t<=67?"🌧️ Дощ з снігом":t>=71&&t<=75?"❄️ Снігопад":t===77?"❄️ Сніжна крупа":t>=80&&t<=82?"🌦️ Зливовий дощ":t>=85&&t<=86?"❄️ Зливовий сніг":t>=95&&t<=99?"⛈️ Гроза":"☁️ Хмарно",xh=(t,n=1)=>t===0?n?"ясно":"ясно вночі":t>=1&&t<=3?n?"мінлива хмарність":"хмарно вночі":t>=45&&t<=48?"туман":t>=51&&t<=55?"мряка":t>=56&&t<=57?"мряка зі снігом":t>=61&&t<=65?"дощ":t>=66&&t<=67?"дощ зі снігом":t>=71&&t<=75?"сніг":t===77?"сніжна крупа":t>=80&&t<=82?"зливовий дощ":t>=85&&t<=86?"зливовий сніг":t>=95&&t<=99?"гроза":"хмарно",no=(t,n=1)=>t===0?n?(0,e.jsx)(ja,{}):(0,e.jsx)(Sa,{}):t>=1&&t<=3?n?"🌤️":(0,e.jsx)(Sd,{}):t>=45&&t<=48?(0,e.jsx)(ei,{}):t>=51&&t<=55||t>=56&&t<=57?"🌧️":t>=61&&t<=65?n?(0,e.jsx)(hr,{}):(0,e.jsx)(Uo,{}):t>=66&&t<=67?n?(0,e.jsx)(hr,{}):(0,e.jsx)(Uo,{}):t>=71&&t<=75?(0,e.jsx)(br,{}):t===77?(0,e.jsx)(br,{}):t>=80&&t<=82?n?(0,e.jsx)(hr,{}):(0,e.jsx)(rd,{}):t>=85&&t<=86?(0,e.jsx)(br,{}):t>=95&&t<=99?(0,e.jsx)(xd,{}):(0,e.jsx)(ei,{}),bh=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"transparent"};
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`,yh=i.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  justify-content: flex-start;
  width: 100%;
  scroll-behavior: smooth;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: visible;
    scroll-snap-type: none;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }

  > * {
    scroll-snap-align: center;
    flex: 0 0 100%;

    @media (min-width: 769px) {
      flex: 0 1 auto;
    }
  }
`,wh=i.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media (min-width: 769px) {
    display: none;
  }
`,vh=i.button`
  width: 34px;
  height: 34px;
  background: ${t=>t.$active?"#ffb36c":"#333"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &:hover {
    background: ${t=>t.$active?"#ffd36a":"#555"};
  }
`,kh=({children:t})=>{const n=(0,a.useRef)(null),[r,c]=(0,a.useState)(0),l=Array.isArray(t)?t.length:1,s=(0,a.useCallback)(y=>{const p=n.current;if(!p)return;const m=p.children[y];m&&p.scrollTo({left:m.offsetLeft,behavior:"smooth"})},[]);return(0,a.useEffect)(()=>{r>=l?c(Math.max(0,l-1)):s(r)},[r,l,s]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(wh,{children:Array.from({length:l},(y,p)=>(0,e.jsx)(vh,{$active:p===r,onClick:()=>c(p),children:p+1},`carousel-page-${p}`))}),(0,e.jsx)(yh,{ref:n,children:t})]})},ns=["Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.","Доміно, власник сайту і замку!","Ти теж думаєш, що відсилками можна керувати погодою? :)","Погода така сама загадка і т/с 'Ральна містика'","Хто що любить, хто що шукає? :)","Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.","Хочете, щоб ваш трек або відсилка були на сайті? Надсилайте на пошту theturkeystudio@gmail.com","Фан-арти для роздрукування! І плоска 3D-картина краще виглядає на стіні, ніж на екрані. Примітка","0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода, музика і відсилки.","«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...","Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)","Знайди речдок у телешоу «Речдок»","Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?","Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)","Ми вас здивуємо багато чим :)","І що всіх тягне на турецькі серіали?","«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара","Морально підтримайте підпискою на ютуб, рекламою і побажаннями.","Навчання, оцінювання та коментування. І що я написав :)","Чекаю на ваші відсилки, фан-арти та побажання на пошту","Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»","У нас немає сторінки 404 :) Радіовишки, ліси, тумани, сирени...","Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.","Підтримайте, будь ласка, рекламою нас у соцмережах :)","У вас через сім днів буде хороша погода - поганої ж не існує :)","«Теорія неймовірності» (Макс Кідрук) має одну частину :(","Ох, Марта любить, коли ти не тікаєш від долі стати картиною.","Кейт — складна за характером індичка.","Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)","Хто ваш кумир? Зібров чи Винник?","Багато змін клімату, мультиплікації, моди, життя :(","Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)","Місія неможлива - ніде не помилитись","Льодовиковий період чи глобальне потепління через 24 роки.","Правило: дивіться на все під різними кутами.","Попри все, погода не буває поганою - вона буває різною.","Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик в магазині»","Оксану Самойлову з «Україна має талант» хто пам'ятає?","Страху немає, упевненим робиться рух!","Застрягли в минулому :) Але погода - це майбутнє!","Mondo TV - Thanks for legendary cartoons.","Раз, два, три. Погоду нам скажи!","Це початок початку чи початок кінця відсилкам? (Перший варіант)","Вверх - ти летиш! Вниз - ти падаєш! ","Чорний айсберг, потопив ......? ","Доміно тривожить Єллоустон","Я знаю що її звати ......","","Вам приснилися сни про погоду? Бо ви тут! :)","Вам приснився жах що ...... і ...... програли і....","Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)","Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)"],jh=Te`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`,Sh=i.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${t=>t.$isNew?"#94fffa":"#ffb36c"};
  font-size: 14px;
  z-index: 10001;
  animation: ${jh} 3s ease-out infinite;
  animation-delay: ${t=>t.$delay}s;
  --x: ${t=>t.$x}px;
  --y: ${t=>t.$y}px;
`,Ch=i.div`
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
`,Th=i.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${t=>t.$isNew&&qt`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`,as="siteSectionsOrder",ao=(0,a.memo)(({section:t,isDarkMode:n,isStickyBgMode:r,isLocationEnabled:c,handleRefreshCard:l,handleDeleteCard:s,handleRenameCard:y,moveWeatherCard:p,setIsLocationEnabled:m,user:f,handleOpenRegister:g,onUpdateUser:N,setHeroBg:M,customHeroBgs:z,setCustomHeroBgs:R,setCustomHolidayName:I,customHolidayName:b,weatherCards:w,weatherCardLayout:O,isAnyModalOpen:v,heroDateString:$,isWeatherDetailsOpen:q,setIsWeatherDetailsOpen:U,selectedWeatherCard:P,setSelectedWeatherCard:V,setIsFsActive:fe})=>t?t.key==="weather"?(0,e.jsxs)("div",{id:"weather",children:[(0,e.jsx)(wu,{$isStickyBgMode:r,$isDarkMode:n,children:"Погода"}),(0,e.jsx)(kh,{children:w.map((ae,B)=>{const Z=ae.current.tempNum>30||ae.current.tempNum<-30,ie=ae.current.windNum>10,ke=ae.current.uv_index>7;return(0,e.jsx)("div",{children:(0,e.jsx)(Eu,{isStickyBgMode:r,user:f,card:ae,isDarkMode:n,isLocationEnabled:c,isExtremeTemp:Z,isExtremeWind:ie,isExtremeUV:ke,index:B,totalCards:w.length,handleRefreshCard:l,handleDeleteCard:s,handleRenameCard:y,moveWeatherCard:p,setIsLocationEnabled:m,customHolidayName:b,layout:O,onOpenDetails:xe=>{V({...ae,cityImage:xe||ae.cityImage}),U(!0)},currentTimeString:$})},ae.id)})})]}):(0,e.jsxs)("div",{id:t.key,children:[t.key==="map"&&(0,e.jsx)(lh,{isDarkMode:n,isStickyBgMode:r}),t.key==="aihelp"&&(0,e.jsx)(rh,{isDarkMode:n,isStickyBgMode:r}),t.key==="music"&&(0,e.jsx)(dh,{isStickyBgMode:r,user:f,onFsToggle:fe,isAnyModalOpen:v,onUpdateUser:N,isDarkMode:n}),t.key==="fanart"&&(0,e.jsx)(oh,{isStickyBgMode:r,isDarkMode:n,user:f,setHeroBg:M,customHeroBgs:z,setCustomHeroBgs:R}),t.key==="prison"&&(0,e.jsx)(ah,{})]}):null),Ah=()=>{const[t,n]=(0,a.useState)(!0),[r,c]=(0,a.useState)(!1),[l,s]=(0,a.useState)({text:"",isNew:!1}),[y,p]=(0,a.useState)(new Date),[m,f]=(0,a.useState)(!0),[g,N]=(0,a.useState)(!1),[M,z]=(0,a.useState)([]),[R,I]=(0,a.useState)({}),[b,w]=(0,a.useState)(null),O=(0,a.useRef)(null);(0,a.useEffect)(()=>{const h=m?"dark":"light";document.documentElement.dataset.theme=h,document.body.dataset.theme=h},[m]),(0,a.useEffect)(()=>{O.current=b},[b]);const[v,$]=(0,a.useState)(null),[q,U]=(0,a.useState)([]),[P,V]=(0,a.useState)(null),[fe,ae]=(0,a.useState)(null),[B,Z]=(0,a.useState)(null),[ie,ke]=(0,a.useState)("static"),[xe,Ze]=(0,a.useState)(.2),[Ae,at]=(0,a.useState)({}),[ge,Pe]=(0,a.useState)(5),[Ce,gt]=(0,a.useState)(.8),[mt,ht]=(0,a.useState)("all"),[We,ut]=(0,a.useState)(1),[_e,st]=(0,a.useState)(0),[vt,Re]=(0,a.useState)(0),[S,E]=(0,a.useState)("smooth"),[ee,de]=(0,a.useState)(0),[Ee,Ie]=(0,a.useState)({x:50,y:50}),[De,Xe]=(0,a.useState)({x:50,y:50}),[ue,kt]=(0,a.useState)({x:50,y:50}),[xt,pt]=(0,a.useState)({x:50,y:50}),[He,Ge]=(0,a.useState)(!1),[bt,_]=(0,a.useState)(6),[re,ce]=(0,a.useState)(1),[Me,Qe]=(0,a.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),[oe,Le]=(0,a.useState)(""),[Je,T]=(0,a.useState)(io),[F,X]=(0,a.useState)(!1),[se,Ue]=(0,a.useState)(!1),[Tt,rt]=(0,a.useState)(!1),[Ke,At]=(0,a.useState)(!1),[Rt,ne]=(0,a.useState)(!1),[ft,jt]=(0,a.useState)(!1),[Ft,lt]=(0,a.useState)(!1),[dt,Pt]=(0,a.useState)(!1),[Fe,Jt]=(0,a.useState)(!0),[hn,le]=(0,a.useState)(!1),[we,et]=(0,a.useState)(!1),[ye,ve]=(0,a.useState)(!0),[be,ze]=(0,a.useState)(ro),[qe,an]=(0,a.useState)("loop"),[$e,rn]=(0,a.useState)(!1),[_t,Rn]=(0,a.useState)(23),[,ca]=(0,a.useState)(0),[cn,ua]=(0,a.useState)(.2),[un,Ln]=(0,a.useState)(.2),[Ht,On]=(0,a.useState)("eager"),[Ut,Mt]=(0,a.useState)(1),[Kt,Yt]=(0,a.useState)([]),[St,jn]=(0,a.useState)({}),[Zt,on]=(0,a.useState)(!1),[Nt,pn]=(0,a.useState)(!1),[sn,ot]=(0,a.useState)(!1),[Xt,fn]=(0,a.useState)(null),d=(0,a.useCallback)(()=>{const h=new Date,D=3600-(h.getMinutes()*60+h.getSeconds());return D<=0?3600:D},[]),[x,G]=(0,a.useState)(d()),A=(0,a.useRef)([]),C=(0,a.useRef)(null),L=(0,a.useRef)(null),[me,Ne]=(0,a.useState)(0),Ct=(0,a.useRef)(!1),[Qt,Lt]=(0,a.useState)(!1),[$n,Sn]=(0,a.useState)(!1),[en,Cn]=(0,a.useState)(!1),[xn,Tn]=(0,a.useState)(!1),[Ot,Vn]=(0,a.useState)("UTC"),[Oe,Fa]=(0,a.useState)(!1),[Bn,En]=(0,a.useState)(!1),[Pa,_n]=(0,a.useState)(null),[bn,It]=(0,a.useState)(null);(0,a.useEffect)(()=>ep(({isMaintenanceMode:h,endTime:D,message:Y})=>{En(h),_n(D),It(Y)}),[]),(0,a.useEffect)(()=>{(async()=>{try{const D=await u.default.getItem("isDarkMode");D!==null&&f(D);const Y=await u.default.getItem("isStickyBgMode");Y!==null&&N(Y);const W=await u.default.getItem("sectionThemes");W&&I(W);const J=await u.default.getItem("hiddenSections");J&&z(J);const Q=await u.default.getItem("active_user");Q&&w(Q);const Ve=await u.default.getItem("currentAvatar");Ve&&T(Ve);const ct=await u.default.getItem("isRoutingMode");ct!==null&&pa(ct);const Vt=await u.default.getItem("selected_timezone");Vt&&Vn(Vt);const wt=await u.default.getItem("bg_music_enabled");wt!==null&&et(wt);const j=await u.default.getItem("auto_mute_bg_music");j!==null&&ve(j);const Dt=await u.default.getItem("lock_filters_in_fs");Dt!==null&&on(Dt);const wn=await u.default.getItem("bg_music_source");wn&&ze(wn);const ha=await u.default.getItem("custom_bg_tracks");ha&&Yt(ha);const Fn=await u.default.getItem("bg_music_volume");Fn!==null&&ua(Fn);const Oa=await u.default.getItem("sfx_volume");Oa!==null&&Ln(Oa);const pe=await u.default.getItem("bg_music_speed");pe!==null&&Mt(pe);const nt=await u.default.getItem("bg_music_position");nt!==null&&Ne(nt);const Ye=await u.default.getItem("bg_music_mode");Ye&&an(Ye);const je=await u.default.getItem("bg_music_shuffle");je!==null&&rn(je);const Se=await u.default.getItem("active_bg_track_id");Se&&Rn(Se);const it=await u.default.getItem("library_bg_settings");it&&jn(it);const Wt=await u.default.getItem("weather_cards");Wt&&An(Yr(Wt));const $t=await u.default.getItem("hideDeleteModalUntil");$t&&k(parseInt($t));const Pn=await u.default.getItem(as);Pn&&te(Pn);const Kn=await u.default.getItem("hero_background");Kn&&$(Kn);const Ia=await u.default.getItem("hero_background_2");Ia&&V(Ia);const yo=await u.default.getItem("hero_background_3");yo&&ae(yo);const wo=await u.default.getItem("hero_background_4");wo&&Z(wo);const vo=await u.default.getItem("custom_hero_backgrounds");vo&&U(vo);const ko=await u.default.getItem("hero_bg_mode");ko&&ke(ko);const jo=await u.default.getItem("hero_slideshow_interval");jo!==null&&Pe(jo);const So=await u.default.getItem("hero_slideshow_transition");So!==null&&gt(So);const Co=await u.default.getItem("hero_bg_filter_category");Co&&ht(Co);const To=await u.default.getItem("hero_bg_zoom");To!==null&&ut(To);const Ao=await u.default.getItem("hero_bg_rotation");Ao!==null&&de(Ao);const Io=await u.default.getItem("hero_bg_blur");Io!==null&&st(Io);const Do=await u.default.getItem("hero_bg_blur_type");Do&&E(Do);const Mo=await u.default.getItem("hero_bg_pixelation");Mo!==null&&Re(Mo);const zo=await u.default.getItem("hero_bg_focal1");zo&&Ie(zo);const Ro=await u.default.getItem("hero_bg_focal2");Ro&&Xe(Ro);const Lo=await u.default.getItem("hero_bg_focal3");Lo&&kt(Lo);const $o=await u.default.getItem("hero_bg_focal4");$o&&pt($o);const Eo=await u.default.getItem("hero_bg_pan_enabled");Eo!==null&&Ge(Eo);const Fo=await u.default.getItem("hero_bg_pan_speed");Fo!==null&&_(Fo);const Po=await u.default.getItem("hero_video_playback_speed");Po!==null&&ce(Po);const No=await u.default.getItem("custom_holiday_name");No&&Le(No);const Oo=await u.default.getItem("dinofroz_screenshots");Oo&&Na(Oo);const Zl=await u.default.getItem("last_deployed_version"),Vo=await u.default.getItem("weather_card_layout");Vo&&Qe(Vo);const Bo=await u.default.getItem("show_update_timer");Bo!==null&&Jt(Bo);const _o=await u.default.getItem("modal_loading_strategy");_o&&On(_o);const Ho={}.REACT_APP_DEPLOY_ID;Ho&&Zl!==Ho&&Sn(!0),Fa(!0)}catch(D){console.error("Помилка завантаження з localforage:",D),Fa(!0)}})()},[]),(0,a.useEffect)(()=>{Oe&&(u.default.setItem("isStickyBgMode",g),u.default.setItem("bg_music_enabled",we),u.default.setItem("auto_mute_bg_music",ye),u.default.setItem("lock_filters_in_fs",Zt),(be instanceof Blob||typeof be=="string")&&u.default.setItem("bg_music_source",be),u.default.setItem("custom_bg_tracks",Kt),u.default.setItem("bg_music_volume",cn),u.default.setItem("sfx_volume",un),u.default.setItem("bg_music_speed",Ut),u.default.setItem("bg_music_mode",qe),u.default.setItem("bg_music_shuffle",$e),u.default.setItem("active_bg_track_id",_t),u.default.setItem("library_bg_settings",St))},[we,ye,Zt,be,Kt,St,cn,un,Ut,qe,$e,_t,Oe]),(0,a.useEffect)(()=>{(async()=>{const D=await u.default.getItem("seen_loading_phrases")||[],Y=Math.floor(Math.random()*ns.length),W=ns[Y],J=!D.includes(W);if(J){const Q=[...D,W];await u.default.setItem("seen_loading_phrases",Q.slice(-100))}s({text:W,isNew:J})})()},[]);const Hn=(0,a.useCallback)(()=>{Be(()=>import("./Prison-DIFkMX0Q.js"),__vite__mapDeps([0,1,2,3])),Be(()=>import("./Aihelp-BLw113Lp.js"),__vite__mapDeps([4,1,2])),Be(()=>import("./FanArt-B1IhQm8x.js"),__vite__mapDeps([5,1,2])),Be(()=>import("./ShopModal-h7X_KSVK.js"),__vite__mapDeps([6,1,2])),Be(()=>Promise.resolve().then(()=>Lf),void 0),Be(()=>import("./AchivmentsModal-DWljNu51.js"),__vite__mapDeps([7,1,2])),Be(()=>import("./ClimateMap-BiWTXuYp.js"),__vite__mapDeps([8,1,2])),Be(()=>import("./MusicPhoto-BfVrpkJ8.js"),__vite__mapDeps([9,1,2,10])),Be(()=>import("./Modal-D9gD_S-Y.js"),__vite__mapDeps([11,1,2,12])),Be(()=>import("./LoginModal-aEfh6ui0.js"),__vite__mapDeps([13,1,2])),Be(()=>import("./UserSettingsModal-Cd91gPuV.js"),__vite__mapDeps([14,1,2,12])),Be(()=>import("./VipModal-Dcf2ADrt.js"),__vite__mapDeps([15,1,2])),Be(()=>import("./WeatherDetailsModal-CCxeL8t0.js"),__vite__mapDeps([16,1,2])),Be(()=>Promise.resolve().then(()=>Ml),void 0),Be(()=>import("./OtherOptionsModal-NjgQMAfG.js"),__vite__mapDeps([17,1,2,10]))},[]);(0,a.useEffect)(()=>{if(Oe){if(Ht==="eager")Hn();else if(Ht==="delayed"){const h=setTimeout(Hn,8e3);return()=>clearTimeout(h)}}},[Oe,Ht,Hn]);const Ca=(0,a.useMemo)(()=>{const h=l.isNew?12:6;return Array.from({length:h}).map((D,Y)=>({id:Y,x:(Math.random()-.5)*220,y:(Math.random()-.5)*140,delay:Math.random()*2}))},[l]);(0,a.useEffect)(()=>{const h=setTimeout(()=>Cn(!0),8e3);return()=>clearTimeout(h)},[]),(0,a.useEffect)(()=>{if(b?.fontFamily){const h=b.fontFamily.trim().replace(/ /g,"+").replace(/['"]/g,""),D="custom-google-font";let Y=document.getElementById(D);Y||(Y=document.createElement("link"),Y.id=D,Y.rel="stylesheet",document.head.appendChild(Y)),Y.href=`https://fonts.googleapis.com/css2?family=${h}:wght@400;700;900&display=swap`,document.documentElement.style.setProperty("--font-family",`"${b.fontFamily.replace(/['"]/g,"")}", sans-serif`)}else document.getElementById("custom-google-font")?.remove(),document.documentElement.style.removeProperty("--font-family")},[b?.fontFamily]),(0,a.useEffect)(()=>{const h=()=>{Lt(!0),window.removeEventListener("mousedown",h),window.removeEventListener("scroll",h),window.removeEventListener("touchstart",h)};return window.addEventListener("mousedown",h),window.addEventListener("scroll",h),window.addEventListener("touchstart",h),()=>{window.removeEventListener("mousedown",h),window.removeEventListener("scroll",h),window.removeEventListener("touchstart",h)}},[]);const[yn,pa]=(0,a.useState)(!1);(0,a.useEffect)(()=>{$n&&en&&Qt&&!xn&&(Pt(!0),Sn(!1),Tn(!0),u.default.setItem("last_deployed_version",{}.REACT_APP_DEPLOY_ID))},[$n,en,Qt,xn]);const[Un,fa]=(0,a.useState)(!1),[gn,An]=(0,a.useState)([]),[Ta,Na]=(0,a.useState)([]),ga=F||se||Tt||Ke||Rt||ft||Ft||dt||xn,[o,k]=(0,a.useState)(0);(0,a.useEffect)(()=>{const D=setTimeout(async()=>{const Y=[ro,sr,sr,dr];try{await Promise.all(Y.map(W=>fetch(W))),console.log("KatScene assets preloaded in background")}catch(W){console.warn("Failed to preload KatScene assets:",W)}},4e3);return()=>clearTimeout(D)},[]);const[H,te]=(0,a.useState)([...jr]);(0,a.useEffect)(()=>{if(Oe){const h=Yr(gn);if(u.default.setItem("weather_cards",h).catch(D=>{console.error("weather_cards persistence failed:",D)}),O.current?.uid){const D=h.map(W=>({id:W.id,isMain:W.isMain,locationName:W.locationName,lat:W.lat,lon:W.lon})),Y=zn(mn,"config",O.current.uid);Ma(Y,{savedWeatherCards:D},{merge:!0}).catch(console.error)}}},[gn,Oe]),(0,a.useEffect)(()=>{(async()=>{if(O.current?.uid&&Oe)try{const D=zn(mn,"config",O.current.uid),Y=await or(D);if(Y.exists()){const W=Y.data();if(W.savedWeatherCards&&W.savedWeatherCards.filter(J=>!A.current.some(Q=>Q.id===J.id)).forEach(J=>{J.isMain?nn():zt({id:J.id,fullName:J.locationName,lat:J.lat,lon:J.lon},!1,J.lat,J.lon)}),W.settings){const J=W.settings;J.isDarkMode!==void 0&&f(J.isDarkMode),J.hiddenSections&&z(J.hiddenSections),J.weatherCardLayout&&Qe(J.weatherCardLayout),J.isRoutingMode!==void 0&&pa(J.isRoutingMode),J.siteSections&&te(J.siteSections),J.isStickyBgMode!==void 0&&N(J.isStickyBgMode),J.sectionThemes&&I(J.sectionThemes),J.heroBg&&$(J.heroBg),J.heroBg2&&V(J.heroBg2),J.heroBg3&&ae(J.heroBg3),J.heroBg4&&Z(J.heroBg4),J.heroBgMode&&ke(J.heroBgMode),J.customHeroBgs&&U(J.customHeroBgs),J.heroOverlayOpacity!==void 0&&Ze(J.heroOverlayOpacity),J.bgRatings&&at(J.bgRatings)}}}catch(D){console.error("Error syncing from Firestore:",D)}})()},[b,Oe]),(0,a.useEffect)(()=>{Oe&&(async()=>{try{const D=await u.default.getItem("weather_cards");if(D){const Y=Yr(D);An(Y)}}catch(D){console.error("weather_cards hydration failed:",D)}})()},[Oe]),(0,a.useEffect)(()=>{if(Oe&&(u.default.setItem("isRoutingMode",yn),u.default.setItem(as,H),u.default.setItem("hiddenSections",M),u.default.setItem("weatherCardLayout",Me),u.default.setItem("isStickyBgMode",g),u.default.setItem("sectionThemes",R),u.default.setItem("isDarkMode",m),u.default.setItem("hero_video_playback_speed",re),O.current?.uid)){const h=zn(mn,"config",O.current.uid);Ma(h,{settings:{isDarkMode:m,hiddenSections:M,weatherCardLayout:Me,isRoutingMode:yn,siteSections:H,isStickyBgMode:g,sectionThemes:R,heroBg:v,heroBg2:P,heroBg3:fe,heroBg4:B,heroBgMode:ie,customHeroBgs:q,heroOverlayOpacity:xe,bgRatings:Ae}},{merge:!0}).catch(console.error)}},[yn,H,M,Me,g,R,m,v,P,fe,B,ie,q,xe,Ae,re,Oe]);const[K,he]=(0,a.useState)("");(0,a.useEffect)(()=>{let h=be;return be instanceof Blob&&(h=URL.createObjectURL(be)),he(h),()=>{be instanceof Blob&&h&&URL.revokeObjectURL(h)}},[be]);const tt=(0,a.useRef)(null);(0,a.useEffect)(()=>{const h=C.current,D=L.current;if(!h||!D)return;tt.current!==K&&(ca(0),tt.current=K);const Y=we&&(!Nt||!ye),W=Y?cn:0,J=.02;let Q=h,Ve=D;h.src&&K&&h.src.includes(K)?(Q=h,Ve=D):D.src&&K&&D.src.includes(K)?(Q=D,Ve=h):(Q=h.paused||h.volume===0?h:D,Ve=Q===h?D:h),Y?Q.paused||Q.src===""||!Q.src.includes(K)?(Q.src=K,!Ct.current&&me>0?(Q.currentTime=me,Ct.current=!0):Q.currentTime=0,Q.volume=0,Q.playbackRate=Ut,Q.play().catch(()=>{})):Q.paused&&Q.play().catch(()=>{}):Y||(h.paused||h.pause(),D.paused||D.pause());const ct=setInterval(()=>{Q.volume<W?Q.volume=Math.min(W,Q.volume+J):Q.volume=W,Ve.volume>0?Ve.volume=Math.max(0,Ve.volume-J):Ve.pause(),Q.volume===W&&Ve.volume===0&&clearInterval(ct)},50);return()=>clearInterval(ct)},[we,Nt,ye,K,cn,Ut,me]),(0,a.useEffect)(()=>{const h=setInterval(()=>{const D=C.current,Y=L.current;if(!D||!Y)return;const W=D&&!D.paused?D:Y&&!Y.paused?Y:null;W&&W.currentTime>0&&u.default.setItem("bg_music_position",W.currentTime)},5e3);return()=>clearInterval(h)},[]);const yt=(0,a.useCallback)(async()=>{Ne(0),await u.default.setItem("bg_music_position",0),C.current&&(C.current.currentTime=0),L.current&&(L.current.currentTime=0),Ct.current=!1},[]),ma=(0,a.useCallback)(()=>{const h=C.current,D=L.current;if(!h||!D)return;let Y=h;if(D.src&&K&&D.src.includes(K)&&(Y=D),qe==="loop"){Y.currentTime=0,Y.play().catch(()=>{});return}const W=(Kt||[]).find(Q=>Q&&Q.file===be);let J=1;W?J=W.repeats||1:_t&&(J=St[_t]?.repeats||1),ca(Q=>{const Ve=Q+1;if(Ve<J)return Y.currentTime=0,Y.play().catch(()=>{}),Ve;if(qe==="order"){const ct=ir.map(j=>({id:j.id,file:wa[j.audio]||turkeysAudio,enabled:St[j.id]?.enabled!==!1})).filter(j=>j.enabled),Vt=(Kt||[]).filter(j=>j&&j.enabled!==!1),wt=[...ct.map(j=>({id:j.id,file:j.file,isCustom:!1})),...Vt.map(j=>({id:j.id,file:j.file,isCustom:!0}))];if(wt.length>0){const j=wt.findIndex(Dt=>Dt.file===be);if($e){const Dt=wt.filter(ha=>ha.file!==be),wn=Dt.length>0?Dt[Math.floor(Math.random()*Dt.length)]:wt[0];ze(wn.file),Rn(wn.isCustom?null:wn.id)}else{const Dt=wt[(j+1)%wt.length];ze(Dt.file),Rn(Dt.isCustom?null:Dt.id)}}}return 0})},[qe,be,Kt,$e,_t,St,K]);(0,a.useEffect)(()=>{we&&(C.current&&!C.current.paused?C.current.currentTime=0:L.current&&!L.current.paused&&(L.current.currentTime=0))},[qe,we]),(0,a.useEffect)(()=>{Oe&&(u.default.setItem("isDarkMode",m),u.default.setItem("sectionThemes",R),u.default.setItem("hiddenSections",M),u.default.setItem("hero_background",v),u.default.setItem("custom_hero_backgrounds",q),u.default.setItem("hero_background_2",P),u.default.setItem("hero_background_3",fe),u.default.setItem("hero_background_4",B),u.default.setItem("hero_bg_ratings",Ae),u.default.setItem("hero_bg_mode",ie),u.default.setItem("hero_overlay_opacity",xe),u.default.setItem("hero_slideshow_interval",ge),u.default.setItem("hero_slideshow_transition",Ce),u.default.setItem("hero_bg_filter_category",mt),u.default.setItem("hero_bg_zoom",We),u.default.setItem("hero_bg_rotation",ee),u.default.setItem("hero_bg_blur",_e),u.default.setItem("hero_bg_blur_type",S),u.default.setItem("hero_bg_pixelation",vt),u.default.setItem("hero_bg_focal1",Ee),u.default.setItem("hero_bg_focal2",De),u.default.setItem("hero_bg_focal3",ue),u.default.setItem("hero_bg_focal4",xt),u.default.setItem("hero_bg_pan_enabled",He),u.default.setItem("hero_bg_pan_speed",bt),u.default.setItem("custom_holiday_name",oe),u.default.setItem("selected_timezone",Ot),u.default.setItem("weather_card_layout",Me),u.default.setItem("show_update_timer",Fe),u.default.setItem("modal_loading_strategy",Ht))},[v,P,fe,B,q,Ae,ie,xe,ge,Ce,mt,We,ee,_e,S,vt,Ee,De,ue,xt,He,bt,Oe,m,R,M,oe,Ot,Me,Fe,Ht]),(0,a.useEffect)(()=>{b?.fastClicks?document.body.classList.add("fast-clicks-enabled"):document.body.classList.remove("fast-clicks-enabled")},[b?.fastClicks]),(0,a.useEffect)(()=>{Oe&&(b?(u.default.setItem("active_user",b),b.avatar&&(T(b.avatar),u.default.setItem("currentAvatar",b.avatar))):u.default.removeItem("active_user"))},[b,Oe]),(0,a.useEffect)(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),(0,a.useEffect)(()=>{A.current=gn},[gn]);const zt=(0,a.useCallback)(async(h,D,Y=null,W=null,J=!1)=>{try{let Q=Y,Ve=W,ct=typeof h=="string"?h:h?.fullName||"Ваша локація";if(h&&typeof h=="object"&&h.lat)Q=h.lat,Ve=h.lon,ct=h.fullName||ct;else if(typeof h=="string"){const pe=Il(h);if(pe)Q=pe.lat,Ve=pe.lon,ct=pe.fullName,h={id:`search-${pe.name.toLowerCase()}`};else{const nt=await Ha.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(h)}&count=1&language=uk`);if(nt.data.results&&nt.data.results[0])Q=nt.data.results[0].latitude,Ve=nt.data.results[0].longitude,ct=nt.data.results[0].name,h={id:Date.now()};else{alert("Місто не знайдено в базі Open-Meteo");return}}}const Vt=D?"main-card":h?.id||Date.now();if(!D&&!A.current.find(pe=>pe.id===Vt))if(O.current)try{const pe=zn(mn,"config",O.current.uid),nt=await or(pe);let Ye=nt.exists()?nt.data():{};const je=new Date().toISOString().split("T")[0];if(Ye.cardAdditionsDate!==je&&(Ye.cardAdditionsCount=0,Ye.cardAdditionsDate=je),Ye.cardAdditionsCount>=10){alert("Ви досягли ліміту в 10 карток на добу.");return}Ye.cardAdditionsCount+=1,await Ma(pe,{cardAdditionsCount:Ye.cardAdditionsCount,cardAdditionsDate:Ye.cardAdditionsDate},{merge:!0})}catch(pe){console.error("Помилка перевірки ліміту Firestore:",pe)}else{let pe=await u.default.getItem("anonCardLimit")||{};const nt=Date.now();if((!pe.startDate||nt-pe.startDate>6048e5)&&(pe={startDate:nt,count:0}),pe.count>=3){alert("Незареєстровані користувачі можуть додавати лише 3 картки на тиждень. Увійдіть в акаунт, щоб збільшити ліміт!");return}pe.count+=1,await u.default.setItem("anonCardLimit",pe)}const wt=`https://api.open-meteo.com/v1/forecast?latitude=${Q}&longitude=${Ve}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day&hourly=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,sunrise,sunset&timezone=auto&past_days=1&forecast_days=16`;console.log("Fetching weather from URL:",wt);const j=(await Ha.get(wt)).data;if(console.log("💾 RAW API RESPONSE for",ct,j),console.log("API Response raw data:",{hasResponse:!!j,currentData:j.current,hourlyData:j.hourly?{time:j.hourly.time?.slice(0,2),wind:j.hourly.wind_speed_10m?.slice(0,2)}:null,dailyData:j.daily?{time:j.daily.time?.slice(0,2),uv_index_max:j.daily.uv_index_max?.slice(0,2),wind_speed_10m_max:j.daily.wind_speed_10m_max?.slice(0,2)}:null}),(!j.current||j.current.wind_speed_10m===void 0)&&console.error("❌ Wind speed data missing from current!",{hasCurrentData:!!j.current,currentKeys:j.current?Object.keys(j.current):[],windSpeed:j.current?.wind_speed_10m}),(!j.daily?.uv_index_max||j.daily.uv_index_max.length===0)&&console.error("❌ UV index data missing from daily!",{hasDailyData:!!j.daily,dailyKeys:j.daily?Object.keys(j.daily):[],uvIndex:j.daily?.uv_index_max,uvLength:j.daily?.uv_index_max?.length}),j.hourly?.wind_speed_10m||console.error("❌ Hourly wind data missing!",{hasHourlyData:!!j.hourly,hourlyKeys:j.hourly?Object.keys(j.hourly):[],wind:j.hourly?.wind_speed_10m}),"Notification"in window&&Notification.permission==="granted"){const pe=Date.now();if(pe-Number(window.localStorage.getItem("weatherNotificationLastSentAt")||0)>=36e5){const nt=Math.round(j.current.temperature_2m),Ye=Math.round(j.current.apparent_temperature),je=j.current.wind_speed_10m??0,Se=j.current.relative_humidity_2m??0,it=xh(j.current.weather_code,j.current.is_day),Wt=`Температура ${nt}°C${Ye!==nt?`, відчувається ${Ye}°C`:""}, ${it}, вітер ${je} м/с, вологість ${Se}%.`;new Notification(`🌤️ Погода: ${ct}`,{body:Wt,icon:"/favicon.ico"}),window.localStorage.setItem("weatherNotificationLastSentAt",String(pe))}}const Dt=new Date;let wn=Dt.getHours();wn>=18&&(wn=18);const ha=`${Dt.getFullYear()}-${String(Dt.getMonth()+1).padStart(2,"0")}-${String(Dt.getDate()).padStart(2,"0")}T${String(wn).padStart(2,"0")}:00`;let Fn=(j.hourly?.time||[]).findIndex(pe=>pe.startsWith(ha));Fn===-1&&(Fn=0);const Oa=168;An(pe=>{const nt=pe.find(je=>je.id===Vt);console.log(`Creating weather card for ${ct}`,{windSpeedCurrent:j.current?.wind_speed_10m,windSpeedHourly:j.hourly?.wind_speed_10m?.slice(0,3),uvIndexDaily:j.daily?.uv_index_max?.slice(0,3)});const Ye={id:Vt,isMain:D,locationName:D&&!h?.fullName?"Ваша локація":nt?nt.locationName:ct,lat:Q,lon:Ve,current:{temp:`${Math.round(j.current.temperature_2m)}°C`,tempNum:Math.round(j.current.temperature_2m),feels_like:`${Math.round(j.current.apparent_temperature)}°C`,humidity:`${j.current.relative_humidity_2m}%`,pressure:`${Math.round(j.current.surface_pressure)} hPa`,wind_speed:`${j.current.wind_speed_10m??0} м/с`,windNum:j.current.wind_speed_10m??0,wind_direction_10m:j.current.wind_direction_10m??0,wind_gusts_10m:j.current.wind_gusts_10m??0,uv_index:j.daily?.uv_index_max?.[0]??0,cloud_cover:j.current.cloud_cover??0,visibility:j.current.visibility??0,dew_point_2m:j.current.dew_point_2m??0,temperature_80m:j.current.temperature_80m??0,description:"За кодом: "+j.current.weather_code,iconPlaceholder:ar(j.current.weather_code,j.current.is_day),iconSymbol:no(j.current.weather_code,j.current.is_day)},hourly:(j.hourly?.time||[]).slice(Fn,Fn+Oa).map((je,Se)=>{const it=Fn+Se,Wt=new Date(je),$t=je.slice(0,10),Pn=(j.daily?.time||[]).indexOf($t);let Kn=1;if(Pn!==-1&&j.daily?.sunrise?.[Pn]&&j.daily?.sunset?.[Pn])Kn=je>=j.daily.sunrise[Pn]&&je<=j.daily.sunset[Pn]?1:0;else{const Ia=Wt.getHours();Kn=Ia>=6&&Ia<21?1:0}return{time:`${String(Wt.getHours()).padStart(2,"0")}:00`,dateLabel:Wt.toLocaleDateString("uk",{day:"2-digit",month:"2-digit"}),fullTime:je,temp:`${Math.round(j.hourly?.temperature_2m?.[it]??0)}°C`,tempNum:Math.round(j.hourly?.temperature_2m?.[it]??0),feels_like:`${Math.round(j.hourly?.apparent_temperature?.[it]??0)}°C`,windNum:j.hourly?.wind_speed_10m?.[it]??0,wind_direction_10m:j.hourly?.wind_direction_10m?.[it]??0,wind_gusts_10m:j.hourly?.wind_gusts_10m?.[it]??0,relative_humidity_2m:j.hourly?.relative_humidity_2m?.[it]??null,dew_point_2m:j.hourly?.dew_point_2m?.[it]??0,precipitation:j.hourly?.precipitation?.[it]??null,rain:j.hourly?.rain?.[it]??null,pressure_msl:j.hourly?.pressure_msl?.[it]??null,cloud_cover:j.hourly?.cloud_cover?.[it]??null,visibility:j.hourly?.visibility?.[it]??0,iconPlaceholder:ar(j.hourly?.weather_code?.[it]??0,Kn),iconSymbol:no(j.hourly?.weather_code?.[it]??0,Kn)}}),daily16:(j.daily?.time||[]).map((je,Se)=>({date:new Date(je).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),fullDate:je,day:new Date(je).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(j.daily.temperature_2m_max[Se]??0)}°C`,temp_night:`${Math.round(j.daily.temperature_2m_min[Se]??0)}°C`,uv_index:j.daily.uv_index_max?.[Se]??0,wind_speed:`${j.daily.wind_speed_10m_max?.[Se]??0} м/с`,wind_direction_10m:j.daily.wind_direction_10m_dominant?.[Se]??0,precipitation_probability_max:j.daily.precipitation_probability_max?.[Se]??0,rain_sum:j.daily.rain_sum?.[Se]??0,precipitation_sum:j.daily.precipitation_sum?.[Se]??0,sunrise:j.daily.sunrise?.[Se]??null,sunset:j.daily.sunset?.[Se]??null,iconPlaceholder:ar(j.daily.weather_code[Se]??0,1),iconSymbol:no(j.daily.weather_code[Se]??0,1),description:ar(j.daily.weather_code[Se]??0,1)}))};return console.log(`Card data created for ${ct}:`,{windSpeedStored:Ye.current.windNum,uvIndexStored:Ye.current.uv_index,hourlyWindSample:Ye.hourly?.slice(0,2).map(je=>je.windNum),dailyWindSample:Ye.daily16?.slice(0,2).map(je=>je.wind_speed)}),J?[Ye,...pe.filter(je=>je.id!==Vt)]:D?pe.some(je=>je.isMain)?pe.map(je=>je.isMain?Ye:je):[Ye,...pe]:nt?pe.map(je=>je.id===Vt?Ye:je):pe.length>=8?pe:[...pe,Ye]});try{const pe=new Date,nt=new Date(pe);nt.setDate(nt.getDate()+210);const Ye=it=>it.toISOString().split("T")[0],je=`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${Q}&longitude=${Ve}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&start_date=${Ye(pe)}&end_date=${Ye(nt)}`,Se=(await Ha.get(je)).data;if(Se?.daily?.time?.length){const it=Se.daily.time.map((Wt,$t)=>({fullDate:Wt,date:new Date(Wt).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),day:new Date(Wt).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(Array.isArray(Se.daily.temperature_2m_max?.[0])?Se.daily.temperature_2m_max[0][$t]??0:Se.daily.temperature_2m_max?.[$t]??0)}°C`,temp_night:`${Math.round(Array.isArray(Se.daily.temperature_2m_min?.[0])?Se.daily.temperature_2m_min[0][$t]??0:Se.daily.temperature_2m_min?.[$t]??0)}°C`,wind_speed:`${Math.round(Array.isArray(Se.daily.wind_speed_10m_max?.[0])?Se.daily.wind_speed_10m_max[0][$t]??0:Se.daily.wind_speed_10m_max?.[$t]??0)} м/с`,precipitation_sum:Array.isArray(Se.daily.precipitation_sum?.[0])?Se.daily.precipitation_sum[0][$t]??0:Se.daily.precipitation_sum?.[$t]??0,isSeasonal:!0}));An(Wt=>Wt.map($t=>$t.id===Vt?{...$t,seasonal:it}:$t))}}catch(pe){console.warn("Seasonal forecast unavailable:",pe.message)}}catch(Q){console.error("Помилка завантаження погоди",Q)}},[]),tn=(0,a.useCallback)(async(h,D)=>{try{const{current:Y,daily:W}=(await Ha.get(`https://api.open-meteo.com/v1/forecast?latitude=${h}&longitude=${D}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&timezone=auto&forecast_days=3`)).data||{};if(!Y||!W)return console.warn("Weather danger check: Missing data",{hasCurrent:!!Y,hasDaily:!!W}),null;const J=Y.wind_speed_10m??0,Q=Y.temperature_2m??0,Ve=W?.uv_index_max?.[0]??0;console.log("Weather danger check data:",{windSpeed:J,currentTemp:Q,uvIndex:Ve,hasUvData:!!W.uv_index_max});const ct=(Vt,wt,j,Dt)=>Vt>30||wt<-30||j>10||Dt>7;return ct(W?.temperature_2m_max?.[0]??Q,W?.temperature_2m_min?.[0]??Q,J,Ve)?"red":W?.time?.some((Vt,wt)=>ct(W.temperature_2m_max?.[wt],W.temperature_2m_min?.[wt],W.wind_speed_10m_max?.[wt]||0,W.uv_index_max?.[wt]||0))?"orange":null}catch(Y){return console.error("Weather danger check error:",Y),null}},[]),nn=(0,a.useCallback)(()=>{if(!Un){zt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52);return}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(h=>{zt({id:"main-card"},!0,h.coords.latitude,h.coords.longitude)},()=>zt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)):zt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)},[zt,Un]),ln=(0,a.useCallback)(h=>{h.isMain?nn():zt(h,!1)},[nn,zt]),_l=(0,a.useCallback)(()=>{console.log("Manual bulk refresh triggered..."),A.current.length>0&&A.current.forEach(h=>ln(h)),G(d())},[ln,d]);(0,a.useEffect)(()=>{nn()},[nn]),(0,a.useEffect)(()=>{if(!Oe)return;const h=Hm(window.location.search,window.location.hash);if(h.isSearchEntry&&h.cityName){const D=h.cityData;document.title=`Погода в місті ${h.cityName} — точний прогноз | Стихія`;const Y=document.querySelector('meta[name="description"]');Y&&Y.setAttribute("content",`Точний прогноз погоди в місті ${h.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`);let W=document.querySelector('link[rel="canonical"]');W&&W.setAttribute("href",`https://stuxia.com/?q=погода+${encodeURIComponent(h.cityName.toLowerCase())}`);let J=document.getElementById("city-jsonld");J||(J=document.createElement("script"),J.id="city-jsonld",J.type="application/ld+json",document.head.appendChild(J)),J.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Place",name:h.cityName,description:`Точний прогноз погоди в місті ${h.cityName}`,address:{"@type":"PostalAddress",addressCountry:"UA",addressLocality:h.cityName}}),zt(D.lat!==null?{id:D.id,fullName:D.fullName,lat:D.lat,lon:D.lon}:D.name,!1,D.lat,D.lon,!0),setTimeout(()=>{const Q=document.getElementById("weather");Q&&Q.scrollIntoView({behavior:"smooth"})},700)}},[Oe,zt]),(0,a.useEffect)(()=>{if(!Oe)return;const h=new Date;h.setDate(h.getDate()-1);const D=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`;gn.forEach(Y=>{Y.daily16?.[0]?.fullDate!==D&&ln(Y)})},[Oe,gn,ln]),(0,a.useEffect)(()=>{if(!Oe)return;const h=setInterval(()=>{if(document.visibilityState==="visible"){const D=d();G(Y=>(Y<=5&&D>3590&&(console.log("Auto-updating weather cards at start of hour..."),A.current.forEach(W=>ln(W))),D))}},1e3);return()=>clearInterval(h)},[Oe,ln,d]);const cr=(0,a.useCallback)(h=>{An(D=>D.filter(Y=>Y.id!==h))},[]),ur=(0,a.useCallback)(h=>{if(A.current.length>=8){alert("Можна мати не більше 8 карток одночасно!");return}zt(h,!1)},[zt]),pr=(0,a.useCallback)((h,D)=>{An(Y=>Y.map(W=>W.id===h?{...W,locationName:D}:W))},[]),fr=(0,a.useCallback)((h,D)=>{An(Y=>{const W=Y.findIndex(Ve=>Ve.id===h);if(W===-1)return Y;const J=W+D;if(J<0||J>=Y.length)return Y;const Q=[...Y];return[Q[W],Q[J]]=[Q[J],Q[W]],Q})},[]);(0,a.useEffect)(()=>{const h=setTimeout(()=>c(!0),3500),D=setTimeout(()=>n(!1),5300),Y=setInterval(()=>p(new Date),1e3);return()=>{clearTimeout(h),clearTimeout(D),clearInterval(Y)}},[]);const Hl=()=>{w(null),T(io),u.default.removeItem("currentAvatar"),rt(!1)},Ul=(0,a.useCallback)(()=>{f(h=>{const D=!h;return I({}),D})},[]),Kl=(0,a.useCallback)(h=>{I(D=>({...D,[h]:!D[h]}))},[]),ql=(0,a.useCallback)(()=>{I({})},[]),Wl=(0,a.useCallback)(h=>{z(D=>D.includes(h)?D.filter(Y=>Y!==h):jr.length-D.length<=2?D:[...D,h])},[]),Aa=(()=>{const h=b?.showSeconds!==!1,D=b?.dateDisplayMode||"both",Y=b?.hour12===!0;try{const W={timeZone:Ot,hour12:Y};(D==="time"||D==="both")&&(W.hour="2-digit",W.minute="2-digit",h&&(W.second="2-digit")),(D==="date"||D==="both")&&(W.weekday="long",W.day="numeric",W.month="2-digit",W.year="numeric");const J=new Intl.DateTimeFormat("uk",W).formatToParts(y),Q=Vt=>J.find(wt=>wt.type===Vt)?.value||"",Ve=D==="time"||D==="both"?`${Q("hour")}:${Q("minute")}${h?":"+Q("second"):""}${Y&&Q("dayPeriod")?" "+Q("dayPeriod"):""}`:"",ct=D==="date"||D==="both"?`${Q("weekday")?Q("weekday").charAt(0).toUpperCase()+Q("weekday").slice(1):""}${Q("day")?`, ${Q("day")}.${Q("month")}.${Q("year")}`:""}`:"";return D==="both"?`${Ve} ${ct}`.trim():Ve||ct}catch{return`${String(y.getHours()).padStart(2,"0")}:${String(y.getMinutes()).padStart(2,"0")}${b?.showSeconds!==!1?`:${String(y.getSeconds()).padStart(2,"0")}`:""} ${y.toLocaleDateString("uk")}`}})(),bo=ss(),gr=$d();(0,a.useEffect)(()=>{!yn&&gr.pathname!=="/"&&bo("/")},[yn,bo,gr.pathname]);const Gl=(h,D)=>{te(Y=>{const W=[...Y],J=h+D;return J<0||J>=W.length||([W[h],W[J]]=[W[J],W[h]]),W})},mr=(0,a.useCallback)(()=>X(!0),[]),Jl=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(Jr,{heroDateString:Aa,onAddCity:ur,startAnimation:!t,user:b,checkWeatherDanger:tn,heroBg:v,setHeroBg:$,heroBg2:P,setHeroBg2:V,heroBg3:fe,setHeroBg3:ae,heroBg4:B,setHeroBg4:Z,isDarkMode:m,customHeroBgs:q,setCustomHeroBgs:U,heroBgMode:ie,setHeroBgMode:ke,heroOverlayOpacity:xe,setHeroOverlayOpacity:Ze,bgRatings:Ae,setBgRatings:at,slideshowInterval:ge,setSlideshowInterval:Pe,slideshowTransition:Ce,setSlideshowTransition:gt,filterCategory:mt,setFilterCategory:ht,heroBgZoom:We,setHeroBgZoom:ut,heroBgRotation:ee,setHeroBgRotation:de,heroBgBlur:_e,setHeroBgBlur:st,heroBgBlurType:S,heroBgPixelation:vt,setHeroBgPixelation:Re,setHeroBgBlurType:E,heroBgFocal1:Ee,setHeroBgFocal1:Ie,heroBgFocal2:De,setHeroBgFocal2:Xe,heroBgFocal3:ue,setHeroBgFocal3:kt,heroBgFocal4:xt,setHeroBgFocal4:pt,heroBgPanEnabled:He,setHeroBgPanEnabled:Ge,heroBgPanSpeed:bt,setHeroBgPanSpeed:_,videoPlaybackSpeed:re,setVideoPlaybackSpeed:ce,screenshots:Ta,selectedTimezone:Ot,setSelectedTimezone:Vn,customHolidayName:oe,isStickyBgMode:g,setCustomHolidayName:Le})}),(0,e.jsx)(to,{$isDarkMode:R.weather??m,$isStickyBgMode:g,$isHidden:M.includes("weather"),children:(0,e.jsx)(ao,{section:H.find(h=>h.key==="weather"),weatherCards:gn,heroDateString:Aa,isDarkMode:R.weather??m,isLocationEnabled:Un,handleRefreshCard:ln,handleDeleteCard:cr,handleRenameCard:pr,moveWeatherCard:fr,setIsLocationEnabled:fa,user:b,isAnyModalOpen:ga,onUpdateUser:w,setHeroBg:$,customHeroBgs:q,setCustomHeroBgs:U,handleOpenRegister:mr,customHolidayName:oe,isStickyBgMode:g,setCustomHolidayName:Le,weatherCardLayout:Me,isWeatherDetailsOpen:sn,setIsWeatherDetailsOpen:ot,selectedWeatherCard:Xt,setSelectedWeatherCard:fn,setIsFsActive:pn,isStickyBgMode:g})})]}),Yl=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(Jr,{heroDateString:Aa,onAddCity:ur,startAnimation:!t,user:b,isDarkMode:m,checkWeatherDanger:tn,heroBg:v,setHeroBg:$,heroBg2:P,setHeroBg2:V,heroBg3:fe,setHeroBg3:ae,heroBg4:B,setHeroBg4:Z,customHeroBgs:q,setCustomHeroBgs:U,heroBgMode:ie,setHeroBgMode:ke,heroOverlayOpacity:xe,setHeroOverlayOpacity:Ze,bgRatings:Ae,setBgRatings:at,slideshowInterval:ge,setSlideshowInterval:Pe,slideshowTransition:Ce,setSlideshowTransition:gt,filterCategory:mt,setFilterCategory:ht,heroBgZoom:We,setHeroBgZoom:ut,heroBgRotation:ee,setHeroBgRotation:de,heroBgBlur:_e,setHeroBgBlur:st,heroBgBlurType:S,heroBgPixelation:vt,setHeroBgPixelation:Re,setHeroBgBlurType:E,heroBgFocal1:Ee,setHeroBgFocal1:Ie,heroBgFocal2:De,setHeroBgFocal2:Xe,heroBgFocal3:ue,setHeroBgFocal3:kt,heroBgFocal4:xt,setHeroBgFocal4:pt,heroBgPanEnabled:He,setHeroBgPanEnabled:Ge,heroBgPanSpeed:bt,setHeroBgPanSpeed:_,videoPlaybackSpeed:re,setVideoPlaybackSpeed:ce,screenshots:Ta,selectedTimezone:Ot,setSelectedTimezone:Vn,customHolidayName:oe,isStickyBgMode:g,setCustomHolidayName:Le})}),(0,e.jsx)("div",{className:"container",children:H.map(h=>h.key!=="hero"&&(0,e.jsx)(to,{$isDarkMode:R[h.key]??m,$isStickyBgMode:g,$isHidden:M.includes(h.key),children:(0,e.jsx)(ao,{section:h,weatherCards:gn,isDarkMode:R[h.key]??m,isLocationEnabled:Un,handleRefreshCard:ln,handleDeleteCard:cr,handleRenameCard:pr,moveWeatherCard:fr,setIsLocationEnabled:fa,user:b,isAnyModalOpen:ga,onUpdateUser:w,setHeroBg:$,customHeroBgs:q,setCustomHeroBgs:U,handleOpenRegister:mr,customHolidayName:oe,isStickyBgMode:g,setCustomHolidayName:Le,weatherCardLayout:Me,isWeatherDetailsOpen:sn,setIsWeatherDetailsOpen:ot,selectedWeatherCard:Xt,setSelectedWeatherCard:fn,heroDateString:Aa,setIsFsActive:pn,isStickyBgMode:g})},h.key))})]});return(0,e.jsxs)(kp,{isDarkMode:m,children:[(0,e.jsx)(eh,{user:b}),(0,e.jsx)(hh,{$locked:Nt&&Zt}),(0,e.jsx)($c,{isLoading:t,isFadingOut:r,randomPhrase:l.text&&(0,e.jsxs)(Th,{$isNew:l.isNew,children:[l.text,Ca.map(h=>(0,e.jsx)(Sh,{$x:h.x,$y:h.y,$delay:h.delay,$isNew:l.isNew,children:"✧"},h.id))]})}),(0,e.jsx)(bh,{$isDarkMode:m,$isStickyBgMode:g,children:(0,e.jsxs)("div",{className:"App",children:[(0,e.jsx)("audio",{ref:C,onEnded:ma,preload:"auto"}),(0,e.jsx)("audio",{ref:L,onEnded:ma,preload:"auto"}),(0,e.jsx)("div",{className:"container",children:(0,e.jsx)(g0,{sfxVolume:un,onOpenRegister:()=>X(!0),onOpenLogin:()=>Ue(!0),onOpenSettings:()=>rt(!0),onOpenVip:()=>At(!0),onOpenShop:()=>ne(!0),onOpenAchievements:()=>jt(!0),onOpenHelp:()=>lt(!0),onOpenInfo:()=>Pt(!0),onOpenOtherOptions:()=>le(!0),onCloseInfo:()=>Pt(!1),isInfoOpen:dt,user:b,isDarkMode:m,toggleTheme:Ul,sectionThemes:R,hiddenSections:M,onToggleSectionVisibility:Wl,onToggleSectionTheme:Kl,onResetSectionThemes:ql,currentAvatar:Je,onLogout:Hl,siteSections:H,moveSiteSection:Gl,resetSiteSections:()=>te([...jr]),isRoutingMode:yn,setIsRoutingMode:pa,currentPath:gr.pathname.substring(1),loadingStrategy:Ht,onSetLoadingStrategy:On,setIsFsActive:pn,isStickyBgMode:g,setIsStickyBgMode:N})}),(0,e.jsx)("main",{children:(0,e.jsx)(a.Suspense,{fallback:null,children:(0,e.jsxs)(Rd,{children:[(0,e.jsx)(yr,{path:"/",element:Yl}),H.map(h=>(0,e.jsx)(yr,{path:`/${h.path}`,element:h.key==="weather"?Jl:(0,e.jsx)("div",{className:"container",style:{paddingTop:"40px",minHeight:"80vh"},children:h.key==="hero"?(0,e.jsx)(Jr,{heroDateString:Aa,onAddCity:ur,startAnimation:!t,user:b,isDarkMode:R.hero??m,checkWeatherDanger:tn,heroBg:v,setHeroBg:$,heroBg2:P,setHeroBg2:V,heroBg3:fe,setHeroBg3:ae,heroBg4:B,setHeroBg4:Z,customHeroBgs:q,setCustomHeroBgs:U,heroBgMode:ie,setHeroBgMode:ke,heroOverlayOpacity:xe,setHeroOverlayOpacity:Ze,bgRatings:Ae,setBgRatings:at,slideshowInterval:ge,setSlideshowInterval:Pe,slideshowTransition:Ce,setSlideshowTransition:gt,filterCategory:mt,setFilterCategory:ht,heroBgZoom:We,setHeroBgZoom:ut,heroBgRotation:ee,setHeroBgRotation:de,heroBgBlur:_e,setHeroBgBlur:st,heroBgBlurType:S,heroBgPixelation:vt,setHeroBgPixelation:Re,heroBgFocal1:Ee,setHeroBgFocal1:Ie,heroBgFocal2:De,setHeroBgFocal2:Xe,heroBgFocal3:ue,setHeroBgFocal3:kt,heroBgFocal4:xt,setHeroBgFocal4:pt,heroBgPanEnabled:He,setHeroBgPanEnabled:Ge,heroBgPanSpeed:bt,setHeroBgPanSpeed:_,videoPlaybackSpeed:re,setVideoPlaybackSpeed:ce,screenshots:Ta,selectedTimezone:Ot,setSelectedTimezone:Vn,customHolidayName:oe,isStickyBgMode:g,setCustomHolidayName:Le}):(0,e.jsx)(to,{$isDarkMode:R[h.key]??m,$isStickyBgMode:g,$isHidden:!1,children:(0,e.jsx)(ao,{section:h,weatherCards:gn,isDarkMode:R[h.key]??m,isLocationEnabled:Un,handleRefreshCard:ln,handleDeleteCard:cr,handleRenameCard:pr,moveWeatherCard:fr,setIsLocationEnabled:fa,user:b,isAnyModalOpen:ga,onUpdateUser:w,setHeroBg:$,customHeroBgs:q,setCustomHeroBgs:U,handleOpenRegister:mr,customHolidayName:oe,isStickyBgMode:g,setCustomHolidayName:Le,isWeatherDetailsOpen:sn,setIsWeatherDetailsOpen:ot,selectedWeatherCard:Xt,setSelectedWeatherCard:fn,setIsFsActive:pn,isStickyBgMode:g})})})},h.key)),(0,e.jsx)(yr,{path:"*",element:(0,e.jsx)(Vu,{})})]})})}),(0,e.jsxs)(a.Suspense,{fallback:null,children:[F&&(0,e.jsx)(ch,{onClose:()=>X(!1),onRegister:h=>{w(h),X(!1)},availableAvatars:ts,isDarkMode:m}),se&&(0,e.jsx)(uh,{onClose:()=>Ue(!1),onLogin:h=>{w(h),Ue(!1)}}),Tt&&b&&(0,e.jsx)(ph,{onClose:()=>rt(!1),user:b,availableAvatars:ts,onUpdate:w,weatherCardLayout:Me,onUpdateLayout:Qe,showUpdateTimer:Fe,setShowUpdateTimer:Jt,isDarkMode:m}),Ke&&(0,e.jsx)(fh,{onClose:()=>At(!1)}),Rt&&(0,e.jsx)(ih,{onClose:()=>ne(!1),hasVip:!!b}),ft&&(0,e.jsx)(sh,{onClose:()=>jt(!1),isDarkMode:m}),Ft&&(0,e.jsx)(eo,{isDarkMode:m,isOpen:Ft,onClose:()=>lt(!1)}),xn&&(0,e.jsx)(eo,{isOpen:xn,onClose:()=>Tn(!1)}),dt&&(0,e.jsx)(eo,{onClose:()=>Pt(!1)}),(0,e.jsx)(gh,{isOpen:sn,onClose:()=>ot(!1),card:Xt,isDarkMode:m}),hn&&(0,e.jsx)(mh,{sfxVolume:un,setSfxVolume:Ln,bgAudioRef:C,bgAudioRef2:L,onClose:()=>le(!1),bgMusicEnabled:we,setBgMusicEnabled:et,autoMuteBgMusic:ye,setAutoMuteBgMusic:ve,lockFiltersInFs:Zt,setLockFiltersInFs:on,bgMusicSource:be,setBgMusicSource:ze,customBgTracks:Kt,setCustomBgTracks:Yt,bgMusicVolume:cn,setBgMusicVolume:ua,bgMusicSpeed:Ut,setBgMusicSpeed:Mt,bgMusicMode:qe,setBgMusicMode:an,bgMusicShuffle:$e,setBgMusicShuffle:rn,libraryBgSettings:St,setLibraryBgSettings:jn,activeBgTrackId:_t,setActiveBgTrackId:Rn,onResetBgPosition:yt,isDarkMode:m})]}),Fe&&(0,e.jsx)(nh,{content:"Налаштування вигляду",isDarkMode:m,children:(0,e.jsxs)(Ch,{$isDarkMode:m,onClick:_l,"aria-label":"Показує час оновлення картки теперішньої погоди і ШІ прогноз.",children:["Оновлення погоди через: ",Math.floor(x/60),":",(x%60).toString().padStart(2,"0")]})}),(0,e.jsx)(_m,{isStickyBgMode:g})]})}),Bn&&(0,e.jsx)(Qu,{isDarkMode:m,endTime:Pa,message:bn})]})};function Ih(){return(0,e.jsx)(gu,{children:(0,e.jsx)(Ah,{})})}window.location.hostname==="www.stuxia.com"&&window.location.replace("https://stuxia.com"+window.location.pathname+window.location.search);window.addEventListener("error",t=>{if(t.message.includes("AbortError")||t.message.includes("aborted"))return t.preventDefault(),!1});window.addEventListener("unhandledrejection",t=>{if(t.reason?.name==="AbortError"||t.reason?.message?.includes("aborted"))return t.preventDefault(),!1});pc.createRoot(document.getElementById("root")).render((0,e.jsx)(zd,{store:mc,children:(0,e.jsxs)(Qd,{children:[(0,e.jsx)(Ih,{}),(0,e.jsx)(wd,{position:"bottom-right",reverseOrder:!1})]})}));export{Oc as C,Bc as S,sr as T,ul as _,lp as a,Ms as b,tp as c,Fh as d,wr as f,gl as g,xl as h,Ph as i,ui as l,ro as m,$l as n,sp as o,za as p,wa as r,ip as s,Rf as t,mn as u,mo as v,Pc as w,dr as x,Fs as y};

//# sourceMappingURL=index-B4ZN3846.js.map