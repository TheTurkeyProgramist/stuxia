const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WeatherLineChart-BWz6ncR3.js","assets/rolldown-runtime-C_JJxWoe.js","assets/vendor-i18n-4NhlWQFf.js","assets/vendor-motion-Bh6mtAYz.js","assets/vendor-graphics-B7yU7KfP.js","assets/vendor-firebase-Fffueu5Y.js","assets/vendor-html2canvas-B-9fjxkU.js","assets/firebase-D5cWCD3l.js","assets/NewsAiModal-UU4y9vOt.js","assets/vendor-react-DlsUijjD.js","assets/vendor-utils-BcX-d9lY.js","assets/vendor-ui-BcfDBn2Z.js","assets/vendor-ai-Bo_x5aWR.js","assets/freeWebSearch-DSf0b8-p.js","assets/Aihelp-BOm2XwFF.js","assets/ShopModal-cpa1xglo.js","assets/ClimateMap-CsQUMNry.js","assets/Modal-U0hz_5pj.js","assets/UserSettingsModal-CydwlPNm.js"])))=>i.map(i=>d[i]);
import{o as e,r as t,t as r}from"./rolldown-runtime-C_JJxWoe.js";import{a as i,i as a,n,r as s,t as o}from"./vendor-i18n-4NhlWQFf.js";import{n as l,t as c}from"./vendor-react-DlsUijjD.js";import{a as d,i as h,o as f,s as p}from"./vendor-motion-Bh6mtAYz.js";import{n as x,t as u}from"./vendor-utils-BcX-d9lY.js";import{$ as g,$n as m,$r as y,$t as b,A as w,At as v,B as k,Br as j,C as M,Ci as S,Cn as $,Ct as D,D as C,Dn as L,Dt as A,E as z,Et as I,F as E,Ft as N,G as R,Gr as T,H as F,Hn as P,Hr as V,I as _,In as O,Ir as B,It as H,J as q,Jr as K,Jt as Z,K as U,Kn as J,Kr as W,L as G,Ln as Y,Lr as Q,M as X,Mn as ee,Mt as te,N as re,Nr as ie,Nt as ae,O as ne,Ot as se,P as oe,Q as le,Qn as ce,Qr as de,R as he,Rn as fe,S as pe,Si as xe,St as ue,T as ge,Tn as me,Un as ye,Ur as be,V as we,Vn as ve,Vt as ke,Wr as je,X as Me,Xr as Se,Y as $e,Yn as De,Yr as Ce,Z as Le,Zr as Ae,Zt as ze,_ as Ie,_i as Ee,_t as Ne,a as Re,ai as Te,an as Fe,ar as Pe,at as Ve,b as _e,bn as Oe,bt as Be,c as He,ci as qe,ct as Ke,d as Ze,di as Ue,dn as Je,dr as We,dt as Ge,ei as Ye,en as Qe,er as Xe,et,f as tt,fi as rt,fn as it,fr as at,ft as nt,g as st,gi as ot,gr as lt,gt as ct,h as dt,hi as ht,hn as ft,ht as pt,ii as xt,in as ut,it as gt,jt as mt,k as yt,kn as bt,l as wt,li as vt,ln as kt,m as jt,mr as Mt,mt as St,ni as $t,nn as Dt,nt as Ct,o as Lt,oi as At,on as zt,ot as It,p as Et,pi as Nt,pr as Rt,q as Tt,qr as Ft,ri as Pt,rn as Vt,rr as _t,rt as Ot,s as Bt,si as Ht,sn as qt,sr as Kt,st as Zt,ti as Ut,tn as Jt,tt as Wt,u as Gt,ui as Yt,ut as Qt,v as Xt,vt as er,w as tr,wn as rr,wt as ir,x as ar,xn as nr,xt as sr,y as or,yi as lr,yn as cr,yt as dr,z as hr,zr as fr,zt as pr}from"./vendor-ui-BcfDBn2Z.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var xr=t({climateMap:()=>yr,common:()=>gr,default:()=>br,hero:()=>ur,settings:()=>mr}),ur={language:"Мова"},gr={close:"Закрити"},mr={language:{title:"Мова сайту",searchPlaceholder:"Пошук мови...",noResults:"Нічого не знайдено",rtlNote:"Арабська та перська пишуться справа наліво — сайт автоматично змінює напрямок тексту.",regions:{europeNorthAmerica:"Європа та Північна Америка",asiaMiddleEast:"Азія та Близький Схід",africa:"Африка",latinAmerica:"Латинська Америка"}},decor:{label:"Декор",title:"Малюнки країн і погодні ефекти (вимкніть для економії продуктивності)"}},yr={title:"Кліматична мапа",sources:{ventuskySubtitle:"Прогноз погоди",windySubtitle:"Вітер і шари",alertsTitle:"Тривоги",alertsSubtitle:"Карта тривог України",airTargetsTitle:"Повітряні цілі",airTargetsSubtitle:"Шахеди, ракети (орієнтовно)",excalidrawSubtitle:"Онлайн-дошка",saveEcoBotSubtitle:"Якість повітря",airTrafficTitle:"Авіарадар",deepStateSubtitle:"Карта подій в Україні"},options:{alerts:"Карта тривог України (alerts.in.ua)",airTargets:"Повітряні цілі: шахеди, ракети (Ukraine Alarm)",excalidraw:"Онлайн-дошка (Excalidraw)",saveEcoBot:"Якість повітря (SaveEcoBot)",airTraffic:"Авіарадар (TheAirTraffic)",deepState:"Карта подій (DeepState)"},dragItem:"Перетягнути {{title}}",dragHint:"Перетягнути, щоб змінити порядок",splitTooltip:"Показувати поруч у два фрейми",splitLabel:"2 фрейми",deleteItem:"Видалити {{title}}",delete:"Видалити",customWidget:"Власний віджет",mapEnabled:"Карту увімкнено",mapDisabled:"Карту вимкнено",settingsTitle:"Налаштування Стихії",rotating:{shortcuts:"Комбінації клавіш",addFrames:"Додавання карти(фреймів)",pinLocation:"Закріпити локацію",mapsAndFeatures:"Карти та безліч функцій",miniPlayer:"Міні-плеєр карти",fullscreen:"Повноекранний режим"},invalidUrl:"Будь ласка, введіть коректне посилання (https://...)",frameBlocked:"Сайт {{host}} забороняє показ у фреймі — додати його не вийде.",frameChecking:"Перевірка…",confirmDeleteFrame:"Видалити «{{title}}» з бічної панелі?",locationPinned:"Локацію закріплено! Завантажиться при наступному вході.",pinError:"Помилка при закріпленні локації.",locationUnpinned:"Закріплення локації знято.",shortcuts:"Комбінації клавіш",shortcutsDesc:"Показувати підказки клавіш поруч з діями?",shortcutsNone:"Без",shortcutsAuto:"Авто",shortcutsAlways:"Так",mapLabel:"Карта",activateMap:"Активувати карту",deactivateMap:"Деактивувати карту",activateMapDesc:"Увімкнути карту, щоб гортати, масштабувати й перемикати шари.",deactivateMapDesc:"Вимкнути взаємодію з картою, щоб вона не перехоплювала прокрутку сторінки.",statusOn:"Увімкнено",statusOff:"Вимкнено",pinLocation:"Закріпити локацію",unpinLocation:"Відкріпити локацію",pinLocationDesc:"Запам'ятати поточну точку, масштаб і шар — карта відкриватиметься саме тут.",unpinLocationDesc:"Карта відкривається з закріпленою точкою, масштабом і шаром.",statusPinned:"Закріплено",statusUnpinned:"Не закріплено",openFullscreen:"Відкрити на весь екран",collapseMap:"Згорнути карту",fullscreenDesc:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд.",miniPlayer:"Міні-плеєр карти",miniPlayerDesc:"Винести карту в окреме плаваюче вікно для паралельної роботи.",mapSource:"Джерело карти",mapSourceDesc:"Windy, Ventusky, Тривоги, DeepState, авіарадар та інші",sourcesAria:"Джерела карти",searchSources:"Пошук карт і фреймів",noSourcesFound:"Нічого не знайдено",clearSearch:"Очистити пошук",customFrame:"Власний фрейм / віджет",titlePlaceholder:"Назва (напр. Радар, Вебкамера...)",titlePlaceholderShort:"Назва (напр. Радар)",urlPlaceholder:"URL або iframe код (https://...)",urlPlaceholderShort:"URL або iframe код",add:"Додати",cancel:"Скасувати",saved:"Збережені:",addOwnFrame:"Додати власний фрейм",addYourFrame:"Додати свій фрейм",closeMiniPlayerHint:"Закрийте міні-плеєр щоб повернути карту",checkInternet:"Перевірте інтернет-з'єднання для користування картою",clickToActivate:"Натисніть на карту для активації",loading:"Завантаження...",credits:"Інтерактивні карти надано сервісами Windy, Ventusky, Карта тривог України і т.д. (містять файли cookie)",settingsHint:"Кнопка «Налаштування Стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!",secondFrame:"другий фрейм",miniMapTitle:"Міні-карта • подвійний клік — назад",collapse:"Згорнути"},br={hero:ur,common:gr,settings:mr,climateMap:yr},wr={},vr=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),n=r?.nonce||r?.getAttribute("nonce");a=t.map(t=>{var r;if(t=function(e){return"/"+e}(t),r=t,(t=import.meta.resolve?import.meta.resolve(r):new URL(r,import.meta.url).href)in wr)return;wr[t]=!0;const i=t.endsWith(".css");for(let n=e.length-1;n>=0;n--){const r=e[n];if(r.href===t&&(!i||"stylesheet"===r.rel))return}const a=document.createElement("link");return a.rel=i?"stylesheet":"modulepreload",i||(a.as="script"),a.crossOrigin="",a.href=t,n&&a.setAttribute("nonce",n),document.head.appendChild(a),i?new Promise((e,r)=>{a.addEventListener("load",e),a.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${t}`)))}):void 0}),i=Promise.all(a.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))}var a;function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return i.then(t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)})},kr=new Set(["ar","fa"]),jr={ar:"Noto Sans Arabic",fa:"Noto Sans Arabic",zh:"Noto Sans SC"},Mr=new Set([]),Sr=new Set(["ja","zh"]),$r={zh:"zh-CN",pt:"pt-BR",en:"en-US"};i.use({type:"backend",read(e,t,r){((e,t,r)=>{const i=t.lastIndexOf("?"),a=e[-1===i||i<t.lastIndexOf("/")?t:t.slice(0,i)];return a?"function"==typeof a?a():Promise.resolve(a):new Promise((e,i)=>{("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==r?". Note that variables only represent file names one level deep.":""))))})})(Object.assign({"./locales/ar.json":()=>vr(()=>import("./ar-CQY1vITf.js"),[]),"./locales/be.json":()=>vr(()=>import("./be-CeUs4NDr.js"),[]),"./locales/bg.json":()=>vr(()=>import("./bg-ReygRQp1.js"),[]),"./locales/cs.json":()=>vr(()=>import("./cs-LSLWrUcy.js"),[]),"./locales/de.json":()=>vr(()=>import("./de-bXL8KAFy.js"),[]),"./locales/el.json":()=>vr(()=>import("./el-vz7L_wbb.js"),[]),"./locales/en.json":()=>vr(()=>import("./en-Bb6ZArYl.js"),[]),"./locales/es.json":()=>vr(()=>import("./es-Cac_hHSe.js"),[]),"./locales/fa.json":()=>vr(()=>import("./fa-C-SJkW5i.js"),[]),"./locales/fi.json":()=>vr(()=>import("./fi-ghZdQV2T.js"),[]),"./locales/fr.json":()=>vr(()=>import("./fr-BYgtUQI8.js"),[]),"./locales/hu.json":()=>vr(()=>import("./hu-CZEdFwwz.js"),[]),"./locales/it.json":()=>vr(()=>import("./it-DthpeAD8.js"),[]),"./locales/ja.json":()=>vr(()=>import("./ja-BxiDvPYT.js"),[]),"./locales/ko.json":()=>vr(()=>import("./ko-iKKrIVs0.js"),[]),"./locales/lt.json":()=>vr(()=>import("./lt-DA02pAu3.js"),[]),"./locales/nl.json":()=>vr(()=>import("./nl-Kbvn_tzb.js"),[]),"./locales/pl.json":()=>vr(()=>import("./pl-m0qNJd7h.js"),[]),"./locales/pt.json":()=>vr(()=>import("./pt-CPAWNdjZ.js"),[]),"./locales/qu.json":()=>vr(()=>import("./qu-CYnDImeO.js"),[]),"./locales/ro.json":()=>vr(()=>import("./ro-CYP_DNXr.js"),[]),"./locales/so.json":()=>vr(()=>import("./so-96I1pwEd.js"),[]),"./locales/sv.json":()=>vr(()=>import("./sv-ChkOCepR.js"),[]),"./locales/tr.json":()=>vr(()=>import("./tr-1xSyo8gS.js"),[]),"./locales/uk.json":()=>vr(()=>Promise.resolve().then(()=>xr),void 0),"./locales/zh.json":()=>vr(()=>import("./zh-BvY3-I8a.js"),[])}),`./locales/${e}.json`,3).then(e=>r(null,e.default)).catch(e=>r(e,null))}}).use(a).use(n).init({resources:{uk:{translation:br}},partialBundledLanguages:!0,fallbackLng:"uk",supportedLngs:["uk","en","be","de","fr","es","it","pl","ro","nl","pt","el","cs","hu","sv","fi","bg","lt","zh","ar","ja","tr","ko","fa","so","qu"],load:"languageOnly",react:{useSuspense:!1},interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"]}});var Dr=r(e=>{var t=s();var r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=t.useSyncExternalStore,a=t.useRef,n=t.useEffect,o=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,s,c,d){var h=a(null);if(null===h.current){var f={hasValue:!1,value:null};h.current=f}else f=h.current;h=o(function(){function e(e){if(!n){if(n=!0,i=e,e=c(e),void 0!==d&&f.hasValue){var t=f.value;if(d(t,e))return a=t}return a=e}if(t=a,r(i,e))return t;var s=c(e);return void 0!==d&&d(t,s)?(i=e,t):(i=e,a=s)}var i,a,n=!1,o=void 0===s?null:s;return[function(){return e(t())},null===o?void 0:function(){return e(o())}]},[t,s,c,d]);var p=i(e,h[0],h[1]);return n(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}}),Cr=r((e,t)=>{t.exports=Dr()}),Lr=e(c()),Ar=e(s(),1),zr=Cr();var Ir={notify(){},get:()=>[]};var Er=(()=>!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement))(),Nr=(()=>"undefined"!=typeof navigator&&"ReactNative"===navigator.product)(),Rr=(()=>Er||Nr?Ar.useLayoutEffect:Ar.useEffect)(),Tr=Symbol.for("react-redux-context"),Fr="undefined"!=typeof globalThis?globalThis:{};function Pr(){if(!Ar.createContext)return{};const e=Fr[Tr]??(Fr[Tr]=new Map);let t=e.get(Ar.createContext);return t||(t=Ar.createContext(null),e.set(Ar.createContext,t)),t}var Vr=Pr();var _r=function(e){const{children:t,context:r,serverState:i,store:a}=e,n=Ar.useMemo(()=>{const e=function(e,t){let r,i=Ir,a=0,n=!1;function s(){c.onStateChange&&c.onStateChange()}function o(){a++,r||(r=t?t.addNestedSub(s):e.subscribe(s),i=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){var t;t=()=>{let t=e;for(;t;)t.callback(),t=t.next},t()},get(){const t=[];let r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(r){let i=!0;const a=t={callback:r,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){i&&null!==e&&(i=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function l(){a--,r&&0===a&&(r(),r=void 0,i.clear(),i=Ir)}const c={addNestedSub:function(e){o();const t=i.subscribe(e);let r=!1;return()=>{r||(r=!0,t(),l())}},notifyNestedSubs:function(){i.notify()},handleChangeWrapper:s,isSubscribed:function(){return n},trySubscribe:function(){n||(n=!0,o())},tryUnsubscribe:function(){n&&(n=!1,l())},getListeners:()=>i};return c}(a);return{store:a,subscription:e,getServerState:i?()=>i:void 0}},[a,i]),s=Ar.useMemo(()=>a.getState(),[a]);Rr(()=>{const{subscription:e}=n;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),s!==a.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[n,s]);const o=r||Vr;return Ar.createElement(o.Provider,{value:n},t)};function Or(e=Vr){return function(){return Ar.useContext(e)}}var Br=Or();function Hr(e=Vr){const t=e===Vr?Br:Or(e),r=()=>{const{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var qr=Hr();function Kr(e=Vr){const t=e===Vr?qr:Hr(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Zr=Kr(),Ur=(e,t)=>e===t;function Jr(e=Vr){const t=e===Vr?Br:Or(e),r=(e,r={})=>{const{equalityFn:i=Ur}="function"==typeof r?{equalityFn:r}:r,{store:a,subscription:n,getServerState:s}=t();Ar.useRef(!0);const o=Ar.useCallback({[e.name]:t=>e(t)}[e.name],[e]),l=(0,zr.useSyncExternalStoreWithSelector)(n.addNestedSub,a.getState,s||a.getState,o,i);return Ar.useDebugValue(l),l};return Object.assign(r,{withTypes:()=>r}),r}var Wr=Jr();function Gr(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Yr=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),Qr=()=>Math.random().toString(36).substring(7).split("").join("."),Xr={INIT:`@@redux/INIT${Qr()}`,REPLACE:`@@redux/REPLACE${Qr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Qr()}`};function ei(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function ti(e,t,r){if("function"!=typeof e)throw new Error(Gr(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(Gr(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(Gr(1));return r(ti)(e,t)}let i=e,a=t,n=new Map,s=n,o=0,l=!1;function c(){s===n&&(s=new Map,n.forEach((e,t)=>{s.set(t,e)}))}function d(){if(l)throw new Error(Gr(3));return a}function h(e){if("function"!=typeof e)throw new Error(Gr(4));if(l)throw new Error(Gr(5));let t=!0;c();const r=o++;return s.set(r,e),function(){if(t){if(l)throw new Error(Gr(6));t=!1,c(),s.delete(r),n=null}}}function f(e){if(!ei(e))throw new Error(Gr(7));if(void 0===e.type)throw new Error(Gr(8));if("string"!=typeof e.type)throw new Error(Gr(17));if(l)throw new Error(Gr(9));try{l=!0,a=i(a,e)}finally{l=!1}return(n=s).forEach(e=>{e()}),e}return f({type:Xr.INIT}),{dispatch:f,subscribe:h,getState:d,replaceReducer:function(e){if("function"!=typeof e)throw new Error(Gr(10));i=e,f({type:Xr.REPLACE})},[Yr]:function(){const e=h;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(Gr(11));function r(){const e=t;e.next&&e.next(d())}return r(),{unsubscribe:e(r)}},[Yr](){return this}}}}}function ri(e){const t=Object.keys(e),r={};for(let n=0;n<t.length;n++){const i=t[n];"function"==typeof e[i]&&(r[i]=e[i])}const i=Object.keys(r);let a;try{!function(e){Object.keys(e).forEach(t=>{const r=e[t];if(void 0===r(void 0,{type:Xr.INIT}))throw new Error(Gr(12));if(void 0===r(void 0,{type:Xr.PROBE_UNKNOWN_ACTION()}))throw new Error(Gr(13))})}(r)}catch(rm){a=rm}return function(e={},t){if(a)throw a;let n=!1;const s={};for(let a=0;a<i.length;a++){const o=i[a],l=r[o],c=e[o],d=l(c,t);if(void 0===d)throw t&&t.type,new Error(Gr(14));s[o]=d,n=n||d!==c}return n=n||i.length!==Object.keys(e).length,n?s:e}}function ii(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}var ai=Symbol.for("immer-nothing"),ni=Symbol.for("immer-draftable"),si=Symbol.for("immer-state");function oi(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var li=Object,ci=li.getPrototypeOf,di="constructor",hi="prototype",fi="configurable",pi="enumerable",xi="writable",ui="value",gi=e=>!!e&&!!e[si];function mi(e){return!!e&&(wi(e)||$i(e)||!!e[ni]||!!e[di]?.[ni]||Di(e)||Ci(e))}var yi=li[hi][di].toString(),bi=new WeakMap;function wi(e){if(!e||!Li(e))return!1;const t=ci(e);if(null===t||t===li[hi])return!0;const r=li.hasOwnProperty.call(t,di)&&t[di];if(r===Object)return!0;if(!Ai(r))return!1;let i=bi.get(r);return void 0===i&&(i=Function.toString.call(r),bi.set(r,i)),i===yi}function vi(e,t,r=!0){0===ki(e)?(r?Reflect.ownKeys(e):li.keys(e)).forEach(r=>{t(r,e[r],e)}):e.forEach((r,i)=>t(i,r,e))}function ki(e){const t=e[si];return t?t.type_:$i(e)?1:Di(e)?2:Ci(e)?3:0}var ji=(e,t,r=ki(e))=>2===r?e.has(t):li[hi].hasOwnProperty.call(e,t),Mi=(e,t,r=ki(e))=>2===r?e.get(t):e[t],Si=(e,t,r,i=ki(e))=>{2===i?e.set(t,r):3===i?e.add(r):e[t]=r};var $i=Array.isArray,Di=e=>e instanceof Map,Ci=e=>e instanceof Set,Li=e=>"object"==typeof e,Ai=e=>"function"==typeof e,zi=e=>"boolean"==typeof e;var Ii=e=>e.copy_||e.base_,Ei=e=>e.modified_?e.copy_:e.base_;function Ni(e,t){if(Di(e))return new Map(e);if(Ci(e))return new Set(e);if($i(e))return Array[hi].slice.call(e);const r=wi(e);if(!0===t||"class_only"===t&&!r){const t=li.getOwnPropertyDescriptors(e);delete t[si];let r=Reflect.ownKeys(t);for(let i=0;i<r.length;i++){const a=r[i],n=t[a];!1===n[xi]&&(n[xi]=!0,n[fi]=!0),(n.get||n.set)&&(t[a]={[fi]:!0,[xi]:!0,[pi]:n[pi],[ui]:e[a]})}return li.create(ci(e),t)}{const t=ci(e);if(null!==t&&r)return{...e};const i=li.create(t);return li.assign(i,e)}}function Ri(e,t=!1){return Fi(e)||gi(e)||!mi(e)||(ki(e)>1&&li.defineProperties(e,{set:Ti,add:Ti,clear:Ti,delete:Ti}),li.freeze(e),t&&vi(e,(e,t)=>{Ri(t,!0)},!1)),e}var Ti={[ui]:function(){oi(2)}};function Fi(e){return null===e||!Li(e)||li.isFrozen(e)}var Pi="MapSet",Vi="Patches",_i="ArrayMethods",Oi={};function Bi(e){const t=Oi[e];return t||oi(0),t}var Hi,qi=e=>!!Oi[e],Ki=()=>Hi;function Zi(e,t){t&&(e.patchPlugin_=Bi(Vi),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ui(e){Ji(e),e.drafts_.forEach(Gi),e.drafts_=null}function Ji(e){e===Hi&&(Hi=e.parent_)}var Wi=e=>Hi={drafts_:[],parent_:Hi,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:qi(Pi)?Bi(Pi):void 0,arrayMethodsPlugin_:qi(_i)?Bi(_i):void 0};function Gi(e){const t=e[si];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Yi(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];if(void 0!==e&&e!==r){r[si].modified_&&(Ui(t),oi(4)),mi(e)&&(e=Qi(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(r[si].base_,e,t)}else e=Qi(t,r);return function(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ri(t,r)}(t,e,!0),Ui(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ai?e:void 0}function Qi(e,t){if(Fi(t))return t;const r=t[si];if(!r)return aa(t,e.handledSet_,e);if(!ea(r,e))return t;if(!r.modified_)return r.base_;if(!r.finalized_){const{callbacks_:t}=r;if(t)for(;t.length>0;)t.pop()(e);ia(r,e)}return r.copy_}function Xi(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ea=(e,t)=>e.scope_===t,ta=[];function ra(e,t,r,i){const a=Ii(e),n=e.type_;if(void 0!==i&&Mi(a,i,n)===t)return void Si(a,i,r,n);if(!e.draftLocations_){const t=e.draftLocations_=new Map;vi(a,(e,r)=>{if(gi(r)){const i=t.get(r)||[];i.push(e),t.set(r,i)}})}const s=e.draftLocations_.get(t)??ta;for(const o of s)Si(a,o,r,n)}function ia(e,t){if(e.modified_&&!e.finalized_&&(3===e.type_||1===e.type_&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){const{patchPlugin_:r}=t;if(r){const i=r.getPath(e);i&&r.generatePatches_(e,i,t)}Xi(e)}}function aa(e,t,r){return!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1||gi(e)||t.has(e)||!mi(e)||Fi(e)||(t.add(e),vi(e,(i,a)=>{if(gi(a)){const t=a[si];ea(t,r)&&(Si(e,i,Ei(t),e.type_),Xi(t))}else mi(a)&&aa(a,t,r)})),e}var na={get(e,t){if(t===si)return e;let r=e.scope_.arrayMethodsPlugin_;const i=1===e.type_&&"string"==typeof t;if(i&&r?.isArrayOperationMethod(t))return r.createMethodInterceptor(e,t);const a=Ii(e);if(!ji(a,t,e.type_))return function(e,t,r){const i=la(t,r);return i?ui in i?i[ui]:i.get?.call(e.draft_):void 0}(e,a,t);const n=a[t];if(e.finalized_||!mi(n))return n;if(i&&e.operationMethod&&r?.isMutatingArrayMethod(e.operationMethod)&&function(e){const t=+e;return Number.isInteger(t)&&String(t)===e}(t))return n;if(n===oa(e.base_,t)||function(e,t,r){return!(1!==e.type_||!e.allIndicesReassigned_||e.assigned_?.get(t)||!mi(r)||r[si])&&e.baseRefs_.has(r)}(e,t,n)){da(e);const r=1===e.type_?+t:t,i=ha(e.scope_,n,e,r);return e.copy_[r]=i}return n},has:(e,t)=>t in Ii(e),ownKeys:e=>Reflect.ownKeys(Ii(e)),set(e,t,r){const i=la(Ii(e),t);if(i?.set)return i.set.call(e.draft_,r),!0;if(!e.modified_){const i=oa(Ii(e),t),a=i?.[si];if(a&&a.base_===r)return e.copy_[t]=r,e.assigned_.set(t,!1),!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,i)&&(void 0!==r||ji(e.base_,t,e.type_)))return!0;da(e),ca(e)}return e.copy_[t]===r&&(void 0!==r||ji(e.copy_,t,e.type_))||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_.set(t,!0),function(e,t,r){const{scope_:i}=e;if(gi(r)){const a=r[si];ea(a,i)&&a.callbacks_.push(function(){da(e),ra(e,r,Ei(a),t)})}else mi(r)&&e.callbacks_.push(function(){const a=Ii(e);3===e.type_?a.has(r)&&aa(r,i.handledSet_,i):Mi(a,t,e.type_)===r&&i.drafts_.length>1&&!0===(e.assigned_.get(t)??!1)&&e.copy_&&aa(Mi(e.copy_,t,e.type_),i.handledSet_,i)})}(e,t,r)),!0},deleteProperty:(e,t)=>(da(e),void 0!==oa(e.base_,t)||t in e.base_?(e.assigned_.set(t,!1),ca(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=Ii(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i?{[xi]:!0,[fi]:1!==e.type_||"length"!==t,[pi]:i[pi],[ui]:r[t]}:i},defineProperty(){oi(11)},getPrototypeOf:e=>ci(e.base_),setPrototypeOf(){oi(12)}},sa={};for(let DD in na){let e=na[DD];sa[DD]=function(){const t=arguments;return t[0]=t[0][0],e.apply(this,t)}}function oa(e,t){const r=e[si];return(r?Ii(r):e)[t]}function la(e,t){if(!(t in e))return;let r=ci(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=ci(r)}}function ca(e){e.modified_||(e.modified_=!0,e.parent_&&ca(e.parent_))}function da(e){e.copy_||(e.assigned_=new Map,e.copy_=Ni(e.base_,e.scope_.immer_.useStrictShallowCopy_))}sa.deleteProperty=function(e,t){return sa.set.call(this,e,t,void 0)},sa.set=function(e,t,r){return na.set.call(this,e[0],t,r,e[0])};function ha(e,t,r,i){const[a,n]=Di(t)?Bi(Pi).proxyMap_(t,r):Ci(t)?Bi(Pi).proxySet_(t,r):function(e,t){const r=$i(e),i={type_:r?1:0,scope_:t?t.scope_:Ki(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let a=i,n=na;r&&(a=[i],n=sa);const{revoke:s,proxy:o}=Proxy.revocable(a,n);return i.draft_=o,i.revoke_=s,[o,i]}(t,r);return(r?.scope_??Ki()).drafts_.push(a),n.callbacks_=r?.callbacks_??[],n.key_=i,r&&void 0!==i?function(e,t,r){e.callbacks_.push(function(i){const a=t;if(!a||!ea(a,i))return;i.mapSetPlugin_?.fixSetContents(a);const n=Ei(a);ra(e,a.draft_??a,n,r),ia(a,i)})}(r,n,i):n.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(n);const{patchPlugin_:t}=e;n.modified_&&t&&t.generatePatches_(n,[],e)}),a}function fa(e){if(!mi(e)||Fi(e))return e;const t=e[si];let r,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Ni(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else r=Ni(e,!0);return vi(r,(e,t)=>{Si(r,e,fa(t))},i),t&&(t.finalized_=!1),r}globalThis.Iterator;var pa=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,r)=>{if(Ai(e)&&!Ai(t)){const r=t;t=e;const i=this;return function(e=r,...a){return i.produce(e,e=>t.call(this,e,...a))}}let i;if(Ai(t)||oi(6),void 0===r||Ai(r)||oi(7),mi(e)){const a=Wi(this),n=ha(a,e,void 0);let s=!0;try{i=t(n),s=!1}finally{s?Ui(a):Ji(a)}return Zi(a,r),Yi(i,a)}if(!e||!Li(e)){if(i=t(e),void 0===i&&(i=e),i===ai&&(i=void 0),this.autoFreeze_&&Ri(i,!0),r){const t=[],a=[];Bi(Vi).generateReplacementPatches_(e,i,{patches_:t,inversePatches_:a}),r(t,a)}return i}oi(1)},this.produceWithPatches=(e,t)=>{if(Ai(e))return(t,...r)=>this.produceWithPatches(t,t=>e(t,...r));let r,i;return[this.produce(e,t,(e,t)=>{r=e,i=t}),r,i]},zi(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),zi(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),zi(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){mi(e)||oi(8),gi(e)&&(e=function(e){gi(e)||oi(10);return fa(e)}(e));const t=Wi(this),r=ha(t,e,void 0);return r[si].isManual_=!0,Ji(t),r}finishDraft(e,t){const r=e&&e[si];r&&r.isManual_||oi(9);const{scope_:i}=r;return Zi(i,t),Yi(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}r>-1&&(t=t.slice(r+1));const i=Bi(Vi).applyPatches_;return gi(e)?i(e,t):this.produce(e,e=>i(e,t))}},xa=pa.produce;function ua(e){return({dispatch:t,getState:r})=>i=>a=>"function"==typeof a?a(t,r,e):i(a)}var ga=ua(),ma=ua,ya="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?ii:ii.apply(null,arguments)};function ba(e,t){function r(...r){if(t){let i=t(...r);if(!i)throw new Error(Ea(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>function(e){return ei(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,r}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var wa=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function va(e){return mi(e)?xa(e,()=>{}):e}function ka(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}var ja=e=>t=>{setTimeout(t,e)},Ma=(e={type:"raf"})=>t=>(...r)=>{const i=t(...r);let a=!0,n=!1,s=!1;const o=new Set,l="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?(c=window.requestAnimationFrame,d=100,e=>{let t=!1;const r=()=>{t||(t=!0,cancelAnimationFrame(i),clearTimeout(a),e())},i=c(r),a=setTimeout(r,d)}):ja(10):"callback"===e.type?e.queueNotification:ja(e.timeout);var c,d;const h=()=>{s=!1,n&&(n=!1,o.forEach(e=>e()))};return Object.assign({},i,{subscribe(e){const t=i.subscribe(()=>a&&e());return o.add(e),()=>{t(),o.delete(e)}},dispatch(e){try{return a=!e?.meta?.RTK_autoBatch,n=!a,n&&(s||(s=!0,l(h))),i.dispatch(e)}finally{a=!0}}})};function Sa(e){const t={},r=[];let i;const a={addCase(e,r){const i="string"==typeof e?e:e.type;if(!i)throw new Error(Ea(28));if(i in t)throw new Error(Ea(29));return t[i]=r,a},addAsyncThunk:(e,i)=>(i.pending&&(t[e.pending.type]=i.pending),i.rejected&&(t[e.rejected.type]=i.rejected),i.fulfilled&&(t[e.fulfilled.type]=i.fulfilled),i.settled&&r.push({matcher:e.settled,reducer:i.settled}),a),addMatcher:(e,t)=>(r.push({matcher:e,reducer:t}),a),addDefaultCase:e=>(i=e,a)};return e(a),[t,r,i]}var $a=Symbol.for("rtk-slice-createasyncthunk");function Da(e,t){return`${e}/${t}`}function Ca({creators:e}={}){const t=e?.asyncThunk?.[$a];return function(e){const{name:r,reducerPath:i=r}=e;if(!r)throw new Error(Ea(11));const a=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},n=Object.keys(a),s={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},o={addCase(e,t){const r="string"==typeof e?e:e.type;if(!r)throw new Error(Ea(12));if(r in s.sliceCaseReducersByType)throw new Error(Ea(13));return s.sliceCaseReducersByType[r]=t,o},addMatcher:(e,t)=>(s.sliceMatchers.push({matcher:e,reducer:t}),o),exposeAction:(e,t)=>(s.actionCreators[e]=t,o),exposeCaseReducer:(e,t)=>(s.sliceCaseReducersByName[e]=t,o)};function l(){const[t={},r=[],i]="function"==typeof e.extraReducers?Sa(e.extraReducers):[e.extraReducers],a={...t,...s.sliceCaseReducersByType};return function(e,t){let r,[i,a,n]=Sa(t);if(function(e){return"function"==typeof e}(e))r=()=>va(e());else{const t=va(e);r=()=>t}function s(e=r(),t){let s=[i[t.type],...a.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===s.filter(e=>!!e).length&&(s=[n]),s.reduce((e,r)=>{if(r){if(gi(e)){const i=r(e,t);return void 0===i?e:i}if(mi(e))return xa(e,e=>r(e,t));{const i=r(e,t);if(void 0===i){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return i}}return e},e)}return s.getInitialState=r,s}(e.initialState,e=>{for(let t in a)e.addCase(t,a[t]);for(let t of s.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);i&&e.addDefaultCase(i)})}n.forEach(i=>{const n=a[i],s={reducerName:i,type:Da(r,i),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(n)?function({type:e,reducerName:t,createNotation:r},i,a){let n,s;if("reducer"in i){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(i))throw new Error(Ea(17));n=i.reducer,s=i.prepare}else n=i;a.addCase(e,n).exposeCaseReducer(t,n).exposeAction(t,s?ba(e,s):ba(e))}(s,n,o):function({type:e,reducerName:t},r,i,a){if(!a)throw new Error(Ea(18));const{payloadCreator:n,fulfilled:s,pending:o,rejected:l,settled:c,options:d}=r,h=a(e,n,d);i.exposeAction(t,h),s&&i.addCase(h.fulfilled,s);o&&i.addCase(h.pending,o);l&&i.addCase(h.rejected,l);c&&i.addMatcher(h.settled,c);i.exposeCaseReducer(t,{fulfilled:s||za,pending:o||za,rejected:l||za,settled:c||za})}(s,n,o,t)});const c=e=>e,d=new Map,h=new WeakMap;let f;function p(e,t){return f||(f=l()),f(e,t)}function x(){return f||(f=l()),f.getInitialState()}function u(t,r=!1){function i(e){let a=e[t];return void 0===a&&r&&(a=ka(h,i,x)),a}function a(t=c){return ka(ka(d,r,()=>new WeakMap),t,()=>{const i={};for(const[a,n]of Object.entries(e.selectors??{}))i[a]=La(n,t,()=>ka(h,t,x),r);return i})}return{reducerPath:t,getSelectors:a,get selectors(){return a(i)},selectSlice:i}}const g={name:r,reducer:p,actions:s.actionCreators,caseReducers:s.sliceCaseReducersByName,getInitialState:x,...u(i),injectInto(e,{reducerPath:t,...r}={}){const a=t??i;return e.inject({reducerPath:a,reducer:p},r),{...g,...u(a,!0)}}};return g}}function La(e,t,r,i){function a(a,...n){let s=t(a);return void 0===s&&i&&(s=r()),e(s,...n)}return a.unwrapped=e,a}var Aa=Ca();function za(){}var{assign:Ia}=Object;function Ea(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Na=Aa({name:"calendar",initialState:{customDays:[]},reducers:{addCustomDay:(e,t)=>{const{id:r,date:i,time:a,reason:n,duration:s,durationUnit:o,cardId:l}=t.payload;e.customDays.push({id:r||Date.now(),date:i,time:a||"00:00",reason:n,duration:s||1,durationUnit:o||"hours",cardId:l||"all"})},removeCustomDay:(e,t)=>{e.customDays=e.customDays.filter(e=>e.id!==t.payload)},updateCustomDay:(e,t)=>{const{date:r,reason:i}=t.payload,a=e.customDays.find(e=>e.date===r);a&&(a.reason=i)},setCustomDays:(e,t)=>{e.customDays=t.payload}}}),{addCustomDay:Ra,removeCustomDay:Ta,updateCustomDay:Fa,setCustomDays:Pa}=Na.actions,Va=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=e??{};let n=new wa;return t&&(function(e){return"boolean"==typeof e}(t)?n.push(ga):n.push(ma(t.extraArgument))),n},{reducer:r,middleware:i,devTools:a=!0,duplicateMiddlewareCheck:n=!0,preloadedState:s,enhancers:o}=e||{};let l,c;if("function"==typeof r)l=r;else{if(!ei(r))throw new Error(Ea(1));l=ri(r)}c="function"==typeof i?i(t):t();let d=ii;a&&(d=ya({trace:!1,..."object"==typeof a&&a}));const h=(f=function(...e){return t=>(r,i)=>{const a=t(r,i);let n=()=>{throw new Error(Gr(15))};const s={getState:a.getState,dispatch:(e,...t)=>n(e,...t)};return n=ii(...e.map(e=>e(s)))(a.dispatch),{...a,dispatch:n}}}(...c),function(e){const{autoBatch:t=!0}=e??{};let r=new wa(f);return t&&r.push(Ma("object"==typeof t?t:void 0)),r});var f;return ti(l,s,d(..."function"==typeof o?o(h):h()))}({reducer:{calendar:Na.reducer}}),_a="-ms-",Oa="-moz-",Ba="-webkit-",Ha="comm",qa="rule",Ka="decl",Za="@keyframes",Ua=Math.abs,Ja=String.fromCharCode,Wa=Object.assign;function Ga(e){return e.trim()}function Ya(e,t){return(e=t.exec(e))?e[0]:e}function Qa(e,t,r){return e.replace(t,r)}function Xa(e,t,r){return e.indexOf(t,r)}function en(e,t){return 0|e.charCodeAt(t)}function tn(e,t,r){return e.slice(t,r)}function rn(e){return e.length}function an(e){return e.length}function nn(e,t){return t.push(e),e}function sn(e,t){return e.filter(function(e){return!Ya(e,t)})}var on,ln,cn=1,dn=1,hn=0,fn=0,pn=0,xn="";function un(e,t,r,i,a,n,s,o){return{value:e,root:t,parent:r,type:i,props:a,children:n,line:cn,column:dn,length:s,return:"",siblings:o}}function gn(e,t){return Wa(un("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mn(e){for(;e.root;)e=gn(e.root,{children:[e]});nn(e,e.siblings)}function yn(){return pn=fn>0?en(xn,--fn):0,dn--,10===pn&&(dn=1,cn--),pn}function bn(){return pn=fn<hn?en(xn,fn++):0,dn++,10===pn&&(dn=1,cn++),pn}function wn(){return en(xn,fn)}function vn(){return fn}function kn(e,t){return tn(xn,e,t)}function jn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mn(e){return Ga(kn(fn-1,Dn(91===e?e+2:40===e?e+1:e)))}function Sn(e){for(;(pn=wn())&&pn<33;)bn();return jn(e)>2||jn(pn)>3?"":" "}function $n(e,t){for(;--t&&bn()&&!(pn<48||pn>102||pn>57&&pn<65||pn>70&&pn<97););return kn(e,vn()+(t<6&&32==wn()&&32==bn()))}function Dn(e){for(;bn();)switch(pn){case e:return fn;case 34:case 39:34!==e&&39!==e&&Dn(pn);break;case 40:41===e&&Dn(e);break;case 92:bn()}return fn}function Cn(e,t){for(;bn()&&e+pn!==57&&(e+pn!==84||47!==wn()););return"/*"+kn(t,fn-1)+"*"+Ja(47===e?e:bn())}function Ln(e){for(;!jn(wn());)bn();return kn(e,fn)}function An(e){return function(e){return xn="",e}(zn("",null,null,null,[""],e=function(e){return cn=dn=1,hn=rn(xn=e),fn=0,[]}(e),0,[0],e))}function zn(e,t,r,i,a,n,s,o,l){for(var c=0,d=0,h=s,f=0,p=0,x=0,u=1,g=1,m=1,y=0,b="",w=a,v=n,k=i,j=b;g;)switch(x=y,y=bn()){case 40:if(108!=x&&58==en(j,h-1)){-1!=Xa(j+=Qa(Mn(y),"&","&\f"),"&\f",Ua(c?o[c-1]:0))&&(m=-1);break}case 34:case 39:case 91:j+=Mn(y);break;case 9:case 10:case 13:case 32:j+=Sn(x);break;case 92:j+=$n(vn()-1,7);continue;case 47:switch(wn()){case 42:case 47:nn(En(Cn(bn(),vn()),t,r,l),l),5!=jn(x||1)&&5!=jn(wn()||1)||!rn(j)||" "===tn(j,-1,void 0)||(j+=" ");break;default:j+="/"}break;case 123*u:o[c++]=rn(j)*m;case 125*u:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==m&&(j=Qa(j,/\f/g,"")),p>0&&(rn(j)-h||0===u&&47===x)&&nn(p>32?Nn(j+";",i,r,h-1,l):Nn(Qa(j," ","")+";",i,r,h-2,l),l);break;case 59:j+=";";default:if(nn(k=In(j,t,r,c,d,a,o,b,w=[],v=[],h,n),n),123===y)if(0===d)zn(j,t,k,k,w,n,h,o,v);else{switch(f){case 99:if(110===en(j,3))break;case 108:if(97===en(j,2))break;default:d=0;case 100:case 109:case 115:}d?zn(e,k,k,i&&nn(In(e,k,k,0,0,a,o,b,a,w=[],h,v),v),a,v,h,o,i?w:v):zn(j,k,k,k,[""],v,0,o,v)}}c=d=p=0,u=m=1,b=j="",h=s;break;case 58:h=1+rn(j),p=x;default:if(u<1)if(123==y)--u;else if(125==y&&0==u++&&125==yn())continue;switch(j+=Ja(y),y*u){case 38:m=d>0?1:(j+="\f",-1);break;case 44:o[c++]=(rn(j)-1)*m,m=1;break;case 64:45===wn()&&(j+=Mn(bn())),f=wn(),d=h=rn(b=j+=Ln(vn())),y++;break;case 45:45===x&&2==rn(j)&&(u=0)}}return n}function In(e,t,r,i,a,n,s,o,l,c,d,h){for(var f=a-1,p=0===a?n:[""],x=an(p),u=0,g=0,m=0;u<i;++u)for(var y=0,b=tn(e,f+1,f=Ua(g=s[u])),w=e;y<x;++y)(w=Ga(g>0?p[y]+" "+b:Qa(b,/&\f/g,p[y])))&&(l[m++]=w);return un(e,t,r,0===a?qa:o,l,c,d,h)}function En(e,t,r,i){return un(e,t,r,Ha,Ja(pn),tn(e,2,-2),0,i)}function Nn(e,t,r,i,a){return un(e,t,r,Ka,tn(e,0,i),tn(e,i+1,-1),i,a)}function Rn(e,t,r){switch(function(e,t){return 45^en(e,0)?(((t<<2^en(e,0))<<2^en(e,1))<<2^en(e,2))<<2^en(e,3):0}(e,t)){case 5103:return Ba+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ba+e+e;case 4855:return Ba+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Oa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ba+e+Oa+e+_a+e+e;case 5936:switch(en(e,t+11)){case 114:return Ba+e+_a+Qa(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ba+e+_a+Qa(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ba+e+_a+Qa(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ba+e+_a+e+e;case 6165:return Ba+e+_a+"flex-"+e+e;case 5187:return Ba+e+Qa(e,/(\w+).+(:[^]+)/,Ba+"box-$1$2"+_a+"flex-$1$2")+e;case 5443:return Ba+e+_a+"flex-item-"+Qa(e,/flex-|-self/g,"")+(Ya(e,/flex-|baseline/)?"":_a+"grid-row-"+Qa(e,/flex-|-self/g,""))+e;case 4675:return Ba+e+_a+"flex-line-pack"+Qa(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ba+e+_a+Qa(e,"shrink","negative")+e;case 5292:return Ba+e+_a+Qa(e,"basis","preferred-size")+e;case 6060:return Ba+"box-"+Qa(e,"-grow","")+Ba+e+_a+Qa(e,"grow","positive")+e;case 4554:return Ba+Qa(e,/([^-])(transform)/g,"$1"+Ba+"$2")+e;case 6187:return Qa(Qa(Qa(e,/(zoom-|grab)/,Ba+"$1"),/(image-set)/,Ba+"$1"),e,"")+e;case 5495:case 3959:return Qa(e,/(image-set\([^]*)/,Ba+"$1$`$1");case 4968:return Qa(Qa(e,/(.+:)(flex-)?(.*)/,Ba+"box-pack:$3"+_a+"flex-pack:$3"),/space-between/,"justify")+Ba+e+e;case 4200:if(!Ya(e,/flex-|baseline/))return _a+"grid-column-align"+tn(e,t)+e;break;case 2592:case 3360:return _a+Qa(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,Ya(e.props,/grid-\w+-end/)})?~Xa(e+(r=r[t].value),"span",0)?e:_a+Qa(e,"-start","")+e+_a+"grid-row-span:"+(~Xa(r,"span",0)?Ya(r,/\d+/):+Ya(r,/\d+/)-+Ya(e,/\d+/))+";":_a+Qa(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return Ya(e.props,/grid-\w+-start/)})?e:_a+Qa(Qa(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Qa(e,/(.+)-inline(.+)/,Ba+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(en(e,t+1)){case 109:if(45!==en(e,t+4))break;case 102:return Qa(e,/(.+:)(.+)-([^]+)/,"$1"+Ba+"$2-$3$1"+Oa+(108==en(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Xa(e,"stretch",0)?Rn(Qa(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Qa(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,i,a,n,s,o){return _a+r+":"+i+o+(a?_a+r+"-span:"+(n?s:+s-+i)+o:"")+e});case 4949:if(121===en(e,t+6))return Qa(e,":",":"+Ba)+e;break;case 6444:switch(en(e,45===en(e,14)?18:11)){case 120:return Qa(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ba+(45===en(e,14)?"inline-":"")+"box$3$1"+Ba+"$2$3$1"+_a+"$2box$3")+e;case 100:return Qa(e,":",":"+_a)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Qa(e,"scroll-","scroll-snap-")+e}return e}function Tn(e,t){for(var r="",i=0;i<e.length;i++)r+=t(e[i],i,e,t)||"";return r}function Fn(e,t,r,i){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Ka:return e.return=e.return||e.value;case Ha:return"";case Za:return e.return=e.value+"{"+Tn(e.children,i)+"}";case qa:if(!rn(e.value=e.props.join(",")))return""}return rn(r=Tn(e.children,i))?e.return=e.value+"{"+r+"}":""}function Pn(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case Ka:return void(e.return=Rn(e.value,e.length,r));case Za:return Tn([gn(e,{value:Qa(e.value,"@","@"+Ba)})],i);case qa:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(Ya(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mn(gn(e,{props:[Qa(t,/:(read-\w+)/,":-moz-$1")]})),mn(gn(e,{props:[t]})),Wa(e,{props:sn(r,i)});break;case"::placeholder":mn(gn(e,{props:[Qa(t,/:(plac\w+)/,":"+Ba+"input-$1")]})),mn(gn(e,{props:[Qa(t,/:(plac\w+)/,":-moz-$1")]})),mn(gn(e,{props:[Qa(t,/:(plac\w+)/,_a+"input-$1")]})),mn(gn(e,{props:[t]})),Wa(e,{props:sn(r,i)})}return""})}}var Vn="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_n="active",On="data-styled-version",Bn="6.5.3",Hn="/*!sc*/\n",qn="undefined"!=typeof window&&"undefined"!=typeof document;function Kn(e){if("undefined"!=typeof process){const t={}[e];if(void 0!==t&&""!==t)return"false"!==t}}var Zn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(ln=null!==(on=Kn("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==on?on:Kn("SC_DISABLE_SPEEDY"))&&void 0!==ln?ln:"undefined"!=typeof process&&!1),Un="sc-keyframes-",Jn={};function Wn(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var Gn=new Map,Yn=new Map,Qn=1,Xn=e=>{if(Gn.has(e))return Gn.get(e);for(;Yn.has(Qn);)Qn++;const t=Qn++;return Gn.set(e,t),Yn.set(t,e),t},es=e=>Yn.get(e),ts=(e,t)=>{Qn=t+1,Gn.set(e,t),Yn.set(t,e)},rs=Object.freeze([]),is=Object.freeze({});function as(e,t,r=is){return e.theme!==r.theme&&e.theme||t||r.theme}var ns=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ss=/(^-|-$)/g;function os(e){return e.replace(ns,"-").replace(ss,"")}var ls=/(a)(d)/gi,cs=e=>String.fromCharCode(e+(e>25?39:97));function ds(e){let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=cs(t%52)+r;return(cs(t%52)+r).replace(ls,"$1-$2")}var hs=5381,fs=(e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e},ps=e=>fs(hs,e);function xs(e){return ds(ps(e)>>>0)}function us(e){return"string"==typeof e&&!0}function gs(e){return us(e)?`styled.${e}`:`Styled(${function(e){return e.displayName||e.name||"Component"}(e)})`}var ms=Symbol.for("react.memo"),ys=Symbol.for("react.forward_ref"),bs={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ws={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ks={[ys]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ms]:vs};function js(e){return("type"in(t=e)&&t.type.$$typeof)===ms?vs:"$$typeof"in e?ks[e.$$typeof]:bs;var t}var Ms=Object.defineProperty,Ss=Object.getOwnPropertyNames,$s=Object.getOwnPropertySymbols,Ds=Object.getOwnPropertyDescriptor,Cs=Object.getPrototypeOf,Ls=Object.prototype;function As(e,t,r){if("string"!=typeof t){const i=Cs(t);i&&i!==Ls&&As(e,i,r);const a=Ss(t).concat($s(t)),n=js(e),s=js(t);for(let o=0;o<a.length;++o){const i=a[o];if(!(i in ws||r&&r[i]||s&&i in s||n&&i in n)){const r=Ds(t,i);try{Ms(e,i,r)}catch(e){}}}}return e}function zs(e){return"function"==typeof e}var Is=Symbol.for("react.forward_ref");function Es(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===Is&&"styledComponentId"in e}function Ns(e,t){return e&&t?e+" "+t:e||t||""}function Rs(e,t){return e.join(t||"")}function Ts(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fs(e,t,r=!1){if(!r&&!Ts(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let i=0;i<t.length;i++)e[i]=Fs(e[i],t[i]);else if(Ts(t))for(const i in t)e[i]=Fs(e[i],t[i]);return e}function Ps(e,t){Object.defineProperty(e,"toString",{value:t})}var Vs=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let r=this._cGroup;r<e;r++)t+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=e;r--)t-=this.groupSizes[r];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,r=t.length;let i=r;for(;e>=i;)if(i<<=1,i<0)throw Wn(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(t),this.length=i;for(let e=r;e<i;e++)this.groupSizes[e]=0}let r=this.indexOfGroup(e+1),i=0;for(let a=0,n=t.length;a<n;a++)this.tag.insertRule(r,t[a])&&(this.groupSizes[e]++,r++,i++);i>0&&this._cGroup>e&&(this._cIndex+=i)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],r=this.indexOfGroup(e),i=r+t;this.groupSizes[e]=0;for(let e=r;e<i;e++)this.tag.deleteRule(r);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const r=this.groupSizes[e],i=this.indexOfGroup(e),a=i+r;for(let n=i;n<a;n++)t+=this.tag.getRule(n)+Hn;return t}},_s=`style[${Vn}][${On}="${Bn}"]`,Os=new RegExp(`^${Vn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Bs=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,Hs=e=>{if(!e)return document;if(Bs(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Bs(t))return t}return document},qs=(e,t,r)=>{const i=r.split(",");let a;for(let n=0,s=i.length;n<s;n++)(a=i[n])&&e.registerName(t,a)},Ks=(e,t)=>{var r;const i=(null!==(r=t.textContent)&&void 0!==r?r:"").split(Hn),a=[];for(let n=0,s=i.length;n<s;n++){const t=i[n].trim();if(!t)continue;const r=t.match(Os);if(r){const t=0|parseInt(r[1],10),i=r[2];0!==t&&(ts(i,t),qs(e,i,r[3]),e.getTag().insertRules(t,a)),a.length=0}else a.push(t)}},Zs=e=>{const t=Hs(e.options.target).querySelectorAll(_s);for(let r=0,i=t.length;r<i;r++){const i=t[r];i&&i.getAttribute(Vn)!==_n&&(Ks(e,i),i.parentNode&&i.parentNode.removeChild(i))}},Us=!1;var Js=(e,t)=>{const r=document.head,i=e||r,a=document.createElement("style"),n=(e=>{const t=Array.from(e.querySelectorAll(`style[${Vn}]`));return t[t.length-1]})(i),s=void 0!==n?n.nextSibling:null;a.setAttribute(Vn,_n),a.setAttribute(On,Bn);const o=t||function(){if(!1!==Us)return Us;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Us=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Us=t.getAttribute("content")||void 0}return Us="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0}();return o&&a.setAttribute("nonce",o),i.insertBefore(a,s),a},Ws=class{constructor(e,t){this.element=Js(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const r=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let i=0,a=r.length;i<a;i++){const t=r[i];if(t.ownerNode===e)return t}throw Wn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Gs=class{constructor(e,t){this.element=Js(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Ys=qn,Qs={isServer:!qn,useCSSOMInjection:!Zn},Xs=class e{static registerId(e){return Xn(e)}constructor(e=is,t={},r){this.options=Object.assign(Object.assign({},Qs),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!e.isServer,!this.server&&qn&&Ys&&(Ys=!1,Zs(this)),Ps(this,()=>(e=>{const t=e.getTag(),{length:r}=t;let i="";for(let a=0;a<r;a++){const r=es(a);if(void 0===r)continue;const n=e.names.get(r);if(void 0===n||!n.size)continue;const s=t.getGroup(a);if(0===s.length)continue;const o=Vn+".g"+a+'[id="'+r+'"]';let l="";for(const e of n)e.length>0&&(l+=e+",");i+=s+o+'{content:"'+l+'"}/*!sc*/\n'}return i})(this))}rehydrate(){!this.server&&qn&&Zs(this)}reconstructWithOptions(t,r=!0){const i=new e(Object.assign(Object.assign({},this.options),t),this.gs,r&&this.names||void 0);return i.keyframeIds=new Set(this.keyframeIds),!this.server&&qn&&t.target!==this.options.target&&Hs(this.options.target)!==Hs(t.target)&&Zs(i),i}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:e,target:t,nonce:r})=>e?new Ws(t,r):new Gs(t,r))(this.options),new Vs(e)));var e}hasNameForId(e,t){var r,i;return null!==(i=null===(r=this.names.get(e))||void 0===r?void 0:r.has(t))&&void 0!==i&&i}registerName(e,t){Xn(e),e.startsWith(Un)&&this.keyframeIds.add(e);const r=this.names.get(e);r?r.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,r){this.registerName(e,t),this.getTag().insertRules(Xn(e),r)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Xn(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},eo=new WeakSet,to={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ro(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in to||e.startsWith("--")?String(t).trim():t+"px"}var io=47;function ao(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let r=0;r<e.length;r++){const i=e.charCodeAt(r);t+=i>=65&&i<=90?"-"+String.fromCharCode(i+32):e[r]}return t.startsWith("ms-")?"-"+t:t}var no=Symbol.for("sc-keyframes");function so(e){return zs(e)&&!(e.prototype&&e.prototype.isReactComponent)}var oo=e=>null==e||!1===e||""===e,lo=Symbol.for("react.client.reference");function co(e){return e.$$typeof===lo}function ho(e,t){for(const r in e){const i=e[r];e.hasOwnProperty(r)&&!oo(i)&&(Array.isArray(i)&&eo.has(i)||zs(i)?t.push(ao(r)+":",i,";"):Ts(i)?(t.push(r+" {"),ho(i,t),t.push("}")):t.push(ao(r)+": "+ro(r,i)+";"))}}function fo(e,t,r,i,a=[]){if(oo(e))return a;const n=typeof e;if("string"===n)return a.push(e),a;if("function"===n)return co(e)?a:so(e)&&t?fo(e(t),t,r,i,a):(a.push(e),a);if(Array.isArray(e)){for(let n=0;n<e.length;n++)fo(e[n],t,r,i,a);return a}return Es(e)?(a.push(`.${e.styledComponentId}`),a):function(e){return"object"==typeof e&&null!==e&&no in e}(e)?(r?(e.inject(r,i),a.push(e.getName(i))):a.push(e),a):co(e)?a:Ts(e)?e.toString!==Object.prototype.toString?(a.push(e.toString()),a):(ho(e,a),a):(a.push(e.toString()),a)}var po=ps(Bn),xo=class{constructor(e,t,r){this.rules=e,this.componentId=t,this.baseHash=fs(po,t),this.baseStyle=r,Xs.registerId(t)}generateAndInjectStyles(e,t,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";{let a="";for(let i=0;i<this.rules.length;i++){const n=this.rules[i];if("string"==typeof n)a+=n;else if(n)if(so(n)){const i=n(e);"string"==typeof i?a+=i:null!=i&&!1!==i&&(a+=Rs(fo(i,e,t,r)))}else a+=Rs(fo(n,e,t,r))}if(a){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=r.hash?r.hash+a:a;let n=this.dynamicNameCache.get(e);if(!n){if(n=ds(fs(fs(this.baseHash,r.hash),a)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,n)}if(!t.hasNameForId(this.componentId,n)){const e=r(a,"."+n,void 0,this.componentId);t.insertRules(this.componentId,n,e)}i=Ns(i,n)}}return i}},uo=/&/g;function go(e,t){let r=0;for(;--t>=0&&92===e.charCodeAt(t);)r++;return!(1&~r)}function mo(e){const t=e.length;let r="",i=0,a=0,n=0,s=!1,o=!1;for(let l=0;l<t;l++){const c=e.charCodeAt(l);if(0!==n||s||c!==io||42!==e.charCodeAt(l+1))if(s)42===c&&e.charCodeAt(l+1)===io&&(s=!1,l++);else if(34!==c&&39!==c||go(e,l)){if(0===n)if(123===c)a++;else if(125===c){if(a--,a<0){o=!0;let r=l+1;for(;r<t;){const t=e.charCodeAt(r);if(59===t||10===t)break;r++}r<t&&59===e.charCodeAt(r)&&r++,a=0,l=r-1,i=r;continue}0===a&&(r+=e.substring(i,l+1),i=l+1)}else 59===c&&0===a&&(r+=e.substring(i,l+1),i=l+1)}else 0===n?n=c:n===c&&(n=0);else s=!0,l++}return o||0!==a||0!==n?(i<t&&0===a&&0===n&&(r+=e.substring(i)),r):e}function yo(e,t){const r=t+" ",i=","+r;for(let a=0;a<e.length;a++){const n=e[a];if("rule"===n.type){n.value=(r+n.value).replaceAll(",",i);const e=n.props,t=[];for(let i=0;i<e.length;i++)t[i]=r+e[i];n.props=t}Array.isArray(n.children)&&"@keyframes"!==n.type&&yo(n.children,t)}return e}var bo=new Xs,wo=function({options:e=is,plugins:t=rs}=is){let r,i,a;const n=(e,t,a)=>a.startsWith(i)&&a.endsWith(i)&&a.replaceAll(i,"").length>0?`.${r}`:e,s=t.slice();s.push(e=>{"rule"===e.type&&e.value.includes("&")&&(a||(a=new RegExp(`\\${i}\\b`,"g")),e.props[0]=e.props[0].replace(uo,i).replace(a,n))}),e.prefix&&s.push(Pn),s.push(Fn);let o=[];const l=function(e){var t=an(e);return function(r,i,a,n){for(var s="",o=0;o<t;o++)s+=e[o](r,i,a,n)||"";return s}}(s.concat((h=e=>o.push(e),function(e){e.root||(e=e.return)&&h(e)}))),c=(t,n="",s="",c="&")=>{r=c,i=n,a=void 0;const d=function(e){const t=-1!==e.indexOf("//"),r=-1!==e.indexOf("}");if(!t&&!r)return e;if(!t)return mo(e);const i=e.length;let a="",n=0,s=0,o=0,l=0,c=0,d=!1;for(;s<i;){const t=e.charCodeAt(s);if(34!==t&&39!==t||go(e,s))if(0===o)if(t===io&&s+1<i&&42===e.charCodeAt(s+1)){for(s+=2;s+1<i&&(42!==e.charCodeAt(s)||e.charCodeAt(s+1)!==io);)s++;s+=2}else if(40!==t)if(41!==t)if(l>0)s++;else if(42===t&&s+1<i&&e.charCodeAt(s+1)===io)a+=e.substring(n,s),s+=2,n=s,d=!0;else if(t===io&&s+1<i&&e.charCodeAt(s+1)===io){for(a+=e.substring(n,s);s<i&&10!==e.charCodeAt(s);)s++;n=s,d=!0}else 123===t?c++:125===t&&c--,s++;else l>0&&l--,s++;else l++,s++;else s++;else 0===o?o=t:o===t&&(o=0),s++}return d?(n<i&&(a+=e.substring(n)),0===c?a:mo(a)):0===c?e:mo(e)}(t);let h=An(s||n?s+" "+n+" { "+d+" }":d);return e.namespace&&(h=yo(h,e.namespace)),o=[],Tn(h,l),o},d=e;var h;let f=hs;for(let p=0;p<t.length;p++)t[p].name||Wn(15),f=fs(f,t[p].name);return null!=d&&d.namespace&&(f=fs(f,d.namespace)),null!=d&&d.prefix&&(f=fs(f,"p")),c.hash=f!==hs?f.toString():"",c}(),vo=Ar.createContext({shouldForwardProp:void 0,styleSheet:bo,stylis:wo,stylisPlugins:void 0});vo.Consumer;function ko(){return Ar.useContext(vo)}var jo=Ar.createContext(void 0),Mo=(jo.Consumer,Object.prototype.hasOwnProperty),So={};function $o(e,t){const r="string"!=typeof e?"sc":os(e);So[r]=(So[r]||0)+1;const i=r+"-"+xs(Bn+r+So[r]);return t?t+"-"+i:i}function Do(e,t,r){const i=Es(e),a=e,n=!us(e),{attrs:s=rs,componentId:o=$o(t.displayName,t.parentComponentId),displayName:l=gs(e)}=t,c=t.displayName&&t.componentId?os(t.displayName)+"-"+t.componentId:t.componentId||o,d=i&&a.attrs?a.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:h}=t;if(i&&a.shouldForwardProp){const e=a.shouldForwardProp;if(t.shouldForwardProp){const r=t.shouldForwardProp;h=(t,i)=>e(t,i)&&r(t,i)}else h=e}const f=new xo(r,c,i?a.componentStyle:void 0);function p(e,t){return function(e,t,r){const{attrs:i,componentStyle:a,defaultProps:n,foldedComponentIds:s,styledComponentId:o,target:l}=e,c=Ar.useContext(jo),d=ko(),h=e.shouldForwardProp||d.shouldForwardProp,f=as(t,c,n)||is;let p,x;{const e=Ar.useRef(null),r=e.current;if(null!==r&&r[1]===f&&r[2]===d.styleSheet&&r[3]===d.stylis&&r[7]===a&&function(e,t,r){const i=e,a=t;let n=0;for(const s in a)if(Mo.call(a,s)&&(n++,i[s]!==a[s]))return!1;return n===r}(r[0],t,r[4]))p=r[5],x=r[6];else{p=function(e,t,r){const i=Object.assign(Object.assign({},t),{className:void 0,theme:r}),a=e.length>1;for(let n=0;n<e.length;n++){const r=e[n],s=zs(r)?r(a?Object.assign({},i):i):r;for(const e in s)"className"===e?i.className=Ns(i.className,s[e]):"style"===e?i.style=Object.assign(Object.assign({},i.style),s[e]):e in t&&void 0===t[e]||(i[e]=s[e])}return"className"in t&&"string"==typeof t.className&&(i.className=Ns(i.className,t.className)),i}(i,t,f),x=a.generateAndInjectStyles(p,d.styleSheet,d.stylis);let r=0;for(const e in t)Mo.call(t,e)&&r++;e.current=[t,f,d.styleSheet,d.stylis,r,p,x,a]}}const u=p.as||l,g=function(e,t,r,i){const a={};for(const n in e)void 0===e[n]||"$"===n[0]||"as"===n||"theme"===n&&e.theme===r||("forwardedAs"===n?a.as=e.forwardedAs:i&&!i(n,t)||(a[n]=e[n]));return a}(p,u,f,h);let m=Ns(s,o);return x&&(m+=" "+x),p.className&&(m+=" "+p.className),g[us(u)&&u.includes("-")?"class":"className"]=m,r&&(g.ref=r),(0,Ar.createElement)(u,g)}(x,e,t)}p.displayName=l;let x=Ar.forwardRef(p);return x.attrs=d,x.componentStyle=f,x.displayName=l,x.shouldForwardProp=h,x.foldedComponentIds=i?Ns(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=c,x.target=i?a.target:e,Object.defineProperty(x,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=i?function(e,...t){for(const r of t)Fs(e,r,!0);return e}({},a.defaultProps,e):e}}),Ps(x,()=>`.${x.styledComponentId}`),n&&As(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Co(e,t){const r=[e[0]];for(let i=0,a=t.length;i<a;i+=1)r.push(t[i],e[i+1]);return r}var Lo=e=>(eo.add(e),e);function Ao(e,...t){if(zs(e)||Ts(e))return Lo(fo(Co(rs,[e,...t])));const r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?fo(r):Lo(fo(Co(r,t)))}function zo(e,t,r=is){if(!t)throw Wn(1,t);const i=(i,...a)=>e(t,r,Ao(i,...a));return i.attrs=i=>zo(e,t,Object.assign(Object.assign({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)})),i.withConfig=i=>zo(e,t,Object.assign(Object.assign({},r),i)),i}var Io=e=>zo(Do,e),Eo=Io;new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]).forEach(e=>{Eo[e]=Io(e)});var No,Ro=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const r=e[t];if(zs(r)&&!Es(r))return!1}return!0}(e),Xs.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,r,i){const a=this.componentId;if(this.isStatic){if(r.hasNameForId(a,a+e))this.instanceRules.has(e)||this.computeRules(e,t,r,i);else{const n=this.computeRules(e,t,r,i);r.insertRules(a,n.name,n.rules)}return}const n=this.instanceRules.get(e);if(this.computeRules(e,t,r,i),!r.server&&n){const t=n.rules,r=this.instanceRules.get(e).rules;if(t.length===r.length){let e=!0;for(let i=0;i<t.length;i++)if(t[i]!==r[i]){e=!1;break}if(e)return}}this.rebuildGroup(r)}computeRules(e,t,r,i){const a=Rs(fo(this.rules,t,r,i)),n={name:this.componentId+e,rules:i(a,"")};return this.instanceRules.set(e,n),n}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const r of this.instanceRules.values())e.insertRules(t,r.name,r.rules)}};var To=class{constructor(e,t){this[No]=!0,this.inject=(e,t=wo)=>{const r=this.getName(t);if(!e.hasNameForId(this.id,r)){const i=t(this.rules,r,"@keyframes");e.insertRules(this.id,r,i)}},this.name=e,this.id=Un+e,this.rules=t,Xn(this.id),Ps(this,()=>{throw Wn(12,String(this.name))})}getName(e=wo){return e.hash?this.name+ds(+e.hash>>>0):this.name}};function Fo(e,...t){const r=Rs(Ao(e,...t)),i=xs(r);return new To(i,r)}No=no;var Po=e(x()),Vo="/assets/foggy-forest-loader-DOS37NC_.webp",_o=p(),Oo=[{r:1,c:1,delay:"0s"},{r:1,c:2,delay:"0.1s"},{r:1,c:3,delay:"0.2s"},{r:2,c:3,delay:"0.3s"},{r:3,c:3,delay:"0.4s"},{r:3,c:2,delay:"0.5s"},{r:3,c:1,delay:"0.6s"},{r:2,c:1,delay:"0.7s"}],Bo=[{Icon:lt,color:"#2bfffb",title:"Vite"},{Icon:B,color:"#FBF0DF",title:"Bun"},{Icon:fr,color:"#FFFFFF",title:"GitHub"},{Icon:Q,color:"#F38020",title:"Cloudflare"},{Icon:at,color:"#FFCA28",title:"Firebase"},{Icon:$t,color:"#007ACC",title:"VS Code"},{Icon:V,color:"#FFFFFF",title:"Vercel"},{Icon:j,color:"#00fff7",title:"HostIQ / Hosting"}],Ho=Fo`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,qo=Fo`
  0%, 100% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
`,Ko=Eo.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1994;
  opacity: ${e=>e.$isFadingOut?0:1};
  visibility: ${e=>e.$isFadingOut?"hidden":"visible"};
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity;
`,Zo=Eo.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  animation: ${Ho} 0.8s ease-out forwards;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.8s ease-in-out;
    opacity: ${e=>e.$active?1:0};
  }

  /* Розмитий фон у барвах зображення — заповнює порожні місця */
  .loader-bg-blur {
    filter: blur(28px) saturate(1.3) brightness(0.8);
    transform: scale(1.2);
  }

  /* На вузьких екранах зображення вписується по ширині */
  @media (max-width: 480px) {
    .loader-bg-main {
      object-fit: contain;
    }
  }
`,Uo=Eo.div`
  position: relative;
  z-index: 2;
  width: 96%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5vh;
  text-align: center;
  color: #fff;
  font-family: "Inter", sans-serif;
`,Jo=Eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.45);
  padding: 8px 16px;
  border-radius: 14px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  span {
    font-size: 15px;
    letter-spacing: 1.5px;
    color: #fff;
    font-weight: 700;
  }
`,Wo=Eo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  svg {
    font-size: 22px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }
`,Go=Eo.div`
  font-size: 13px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  max-width: 1200px;
  font-style: italic;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.61);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 5px 12px;
  margin-top: 5px;
`,Yo=Eo.p`
  margin-bottom: clamp(24px, 6vh, 55px);
  color: rgb(255, 255, 255);
  font-size: 10px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`,Qo=Eo.div`
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

  span {
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: right;
    min-width: min(170px, 40vw);
  }
`,Xo=Eo.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`,el=Eo.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${qo} 0.8s infinite linear;
  grid-row: ${e=>e.$r};
  grid-column: ${e=>e.$c};
  animation-delay: ${e=>e.$delay};
`;function tl({isLoading:e,isFadingOut:t,randomPhrase:r}){return(0,Ar.useEffect)(()=>{(new Image).src=Vo},[]),e?(0,_o.jsxs)(Ko,{$isFadingOut:t,role:"status","aria-live":"polite",children:[(0,_o.jsxs)(Qo,{children:[(0,_o.jsx)("span",{children:"v.1.0.0 | Я в Конотопі :)"}),(0,_o.jsx)(Xo,{children:Oo.map((e,t)=>(0,_o.jsx)(el,{$r:e.r,$c:e.c,$delay:e.delay},t))})]}),(0,_o.jsxs)(Zo,{$active:!0,children:[(0,_o.jsx)("img",{className:"loader-bg-blur",src:Vo,alt:"","aria-hidden":"true"}),(0,_o.jsx)("img",{className:"loader-bg-main",src:Vo,alt:"Loading..."})]}),(0,_o.jsxs)(Uo,{children:[(0,_o.jsxs)(Jo,{children:[(0,_o.jsx)("span",{children:"Працює на базі:"}),(0,_o.jsx)(Wo,{children:Bo.map(({Icon:e,color:t,title:r})=>(0,_o.jsx)(e,{style:{color:t},title:r},r))})]}),r&&(0,_o.jsx)(Go,{children:r}),(0,_o.jsx)(Yo,{children:"2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist"})]})]}):null}var rl=(e,t=0)=>{if(!e)return 0===t?"Сьогодні":`День ${t+1}`;const r=String(e).trim(),i=new Date,a=new Date(i);a.setHours(0,0,0,0);const[n,s]=r.split(".").map(e=>Number(e));if(n&&s){const e=new Date(i.getFullYear(),s-1,n),t=Math.round((e-a)/864e5);return 0===t?`${r} (Сьогодні)`:1===t?`${r} (Завтра)`:2===t?`${r} (Післязавтра)`:`${r} (${e.toLocaleDateString("uk",{weekday:"short"})})`}return r},il=[0,6,12,18],al=e=>{const t=parseInt(String(e?.time??"").split(":")[0],10);return Number.isNaN(t)?null:t},nl={0:"Ніч",6:"Ранок",12:"День",18:"Вечір"},sl=["precipitation","snowfall","evapotranspiration"],ol=["windNum","wind_gusts_10m","wind_gusts"],ll=(e=[])=>{if(!Array.isArray(e)||0===e.length)return[];const t=[],r=new Map;return e.forEach((e,i)=>{const a=e?.dateLabel||e?.date||"today";r.has(a)||(r.set(a,[]),t.push({label:a,title:rl(a,t.length),items:[]})),r.get(a).push(e)}),t.forEach(e=>{e.items=r.get(e.label)||[]}),t},cl={"ваша локація":"вашої локації","ваше місто":"вашого міста","київ":"Києва","ріг":"Рогу","дніпро":"Дніпра"},dl=e=>{const t=e.toLowerCase();if(cl[t])return i=cl[t],(r=e)[0]===r[0].toUpperCase()&&r[0]!==r[0].toLowerCase()?i[0].toUpperCase()+i.slice(1):i;var r,i;if(/ці$/.test(t))return e+"в";if(/[^аеєиіїоуюя]и$/.test(t)&&t.length>3)return e.slice(0,-1);if(/ія$/.test(t))return e.slice(0,-1)+"ї";if(/я$/.test(t))return e.slice(0,-1)+"і";if(/а$/.test(t)){const r=t[t.length-2];return e.slice(0,-1)+("жчшщ".includes(r)?"і":"и")}if(/їв$/.test(t))return e.slice(0,-2)+"єва";if(/[жчшщ]ів$/.test(t))return e.slice(0,-2)+"ева";if(/ів$/.test(t))return e.slice(0,-2)+"ова";if(/іль$/.test(t))return e.slice(0,-3)+"оля";if(/ь$/.test(t))return e.slice(0,-1)+"я";const a=t[t.length-1];return/[а-яґєії]/.test(a)&&!"аеєиіїоуюяь".includes(a)?e+"а":e},hl=(e,t=0)=>{if(null==e)return t;if("number"==typeof e)return isNaN(e)?t:e;const r=String(e).match(/-?\d+(\.\d+)?/);return r?parseFloat(r[0]):t},fl=(e=[],t=new Date)=>{const r=`${(i=t).getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;var i;return e.filter(e=>!(e?.fullDate&&e.fullDate<r))},pl=(e,t="C")=>{const r=hl(e,null);if(null===r)return"—";let i,a="°C";return"F"===t?(i=Math.round(9*r/5+32),a="°F"):"K"===t?(i=Math.round(10*(r+273.15))/10,a="K"):i=Math.round(10*r)/10,`${i>0?"+":""}${i}${a}`},xl=(e,{unit:t="C",currentTimeString:r="",now:i=new Date}={})=>{if(!e)return null;const a=e.current||{},n=fl(e.daily16||[],i),s=n[0]||{},o=e.hourly||[],l=e.locationName||"Ваше місто",c=(e=>{if(!e||"string"!=typeof e)return e;const t=e.trim(),r=cl[t.toLowerCase()];if(r)return r;const i=t.match(/^([^,(]+?)(\s*[,(].*)?$/),a=i?i[1]:t,n=i?.[2]||"",s=a.split(" ");return s.map((e,t)=>{if(e.includes("-")){const t=e.split("-");return t[t.length-1]=dl(t[t.length-1]),t.join("-")}return t<s.length-1?(e=>/ий$/.test(e)?e.replace(/ий$/,"ого"):/ій$/.test(e)?e.replace(/ій$/,"ього"):/а$/.test(e)?e.replace(/а$/,"ої"):/е$/.test(e)?e.replace(/е$/,"ого"):null)(e)??e:dl(e)}).join(" ")+n})(l),d=((e,t,r="C")=>{const i=hl(e?.temp,0),a=hl(e?.feels_like,i),n=hl(t?.temp_day,i),s=hl(t?.temp_night,i-4),o=Math.round(10*(n-s))/10,l=Math.round(10*(a-i))/10;let c,d=null;o>=11?(d=`Контраст день/ніч: ${o}°C`,c=`Сьогодні вдень очікується близько ${pl(n,r)}, проте вночі стовпчики термометрів різко опустяться до ${pl(s,r)} (добова амплітуда ${o}°C). Вечір буде значно прохолоднішим, тому теплий верхній одяг буде обов'язковим.`):o>=7?(d="Помірний спад до ночі",c=`Денна температура становитиме близько ${pl(n,r)}, а нічна знизиться до ${pl(s,r)}. Різниця у ${o}°C є типовою, але вимагатиме теплішого шару одягу після заходу сонця.`):o<=3&&o>=-1?(d="Рівна доба",c=`Добові коливання мінімальні: вдень близько ${pl(n,r)}, а вночі ${pl(s,r)}. Щільна хмарність або волога повітряна маса утримують стабільний температурний фон без різких перепадів.`):c=`Сьогодні температурний графік: вдень ${pl(n,r)}, вночі близько ${pl(s,r)}.`,l<=-3?c+=` Через пориви вітру та сирість температура відчувається на ${Math.abs(l)}°C нижче за реальну (${pl(a,r)}).`:l>=3&&(c+=` Через високу вологість відчувається тепліше та душніше (${pl(a,r)}).`);let h=null;return s<=0&&n>0&&(h="Увага: вночі можливі приморозки або ожеледиця на мокрих ділянках доріг!",c+=` ${h}`),{dayTemp:n,nightTemp:s,delta:o,feelsLike:a,badge:d,message:c,warning:h}})(a,s,t),h=((e=[],t="C")=>{if(!Array.isArray(e)||0===e.length)return{rainWindowText:"Дані про годинний графік відсутні.",peakTempText:"",windTrendText:"",badges:[],windWarning:null};const r=[],i=e.slice(0,24).map(e=>{let t=12;if(e.time){const r=e.time.match(/(\d{1,2})/);r&&(t=parseInt(r[1],10))}const r=hl(e.tempNum??e.temp,0),i=hl(e.precipitation_probability??e.pop,0),a=hl(e.precipitation,0),n=hl(e.windNum??e.wind_speed,0),s=hl(e.wind_gusts_10m??e.wind_gusts,0),o=null==e.visibility?null:hl(e.visibility,null),l=(e.description||e.iconPlaceholder||"").toLowerCase(),c=l.includes("сніг")||l.includes("snow"),d=i>=40||a>=.3||l.includes("дощ")||l.includes("злива")||l.includes("мряка")||l.includes("rain")||l.includes("гроза");return{...e,hourNum:t,temp:r,pop:i,precip:a,wind:n,gust:s,visibility:o,isRain:d,isSnow:c,desc:l}}),a=i.filter(e=>e.hourNum>=6&&e.hourNum<14&&e.isRain),n=i.filter(e=>e.hourNum>=14&&e.hourNum<=22&&e.isRain),s=i.filter(e=>(e.hourNum<6||e.hourNum>22)&&e.isRain);let o;if(n.length>0&&0===a.length){const e=n[0].time||`${n[0].hourNum}:00`;r.push("З другої половини дня дощ"),o=`З другої половини дня очікуються опади: орієнтовно після ${e} небо затягне дощовою хмарністю (ймовірність до ${n[0].pop||65}%). Перша половина дня мине без істотних опадів, тож вуличні справи варто запланувати до обіду.`}else a.length>0&&0===n.length?(r.push("Дощ у першій половині дня"),o="Основні опади зосереджені в першій половині дня. Ближче до обіду та у другій половині дня дощовий фронт відступить, погода почне поступово прояснюватися."):a.length>0&&n.length>0?(r.push("Затяжні опади"),o="Опади очікуються як у першій, так і в другій половині дня. Парасоля та вологозахисне взуття знадобляться протягом усього дня."):s.length>0?(r.push("Нічний дощ"),o="Вдень суттєвих опадів не прогнозується, проте пізно ввечері або вночі можливий локальний дощ."):(r.push("Без опадів протягом дня"),o="У найближчі 24 години опадів не очікується. Зберігатиметься комфортна суха погода.");let l=i[0],c=i[0];i.forEach(e=>{e.temp>l.temp&&(l=e),e.temp<c.temp&&(c=e)});const d=`Добовий максимум очікується о ${l.time||`${l.hourNum}:00`} (${pl(l.temp,t)}), тоді як мінімальна позначка (${pl(c.temp,t)}) зафіксується о ${c.time||`${c.hourNum}:00`}.`,h=i.reduce((e,t)=>t.wind>e.wind?t:e,i[0]),f=i.reduce((e,t)=>t.gust>e.gust?t:e,i[0]);let p,x=null;const u=Math.round(h.wind),g=Math.round(f.gust),m=u>=10||g>=15;if(m){const e=g>=15?f:h;g>=15?r.push(`Пориви вітру до ${g} м/с`):r.push(`Сильний вітер до ${u} м/с`),x=`Увага, сильний вітер: до ${u} м/с${g>u?`, пориви до ${g} м/с`:""}, найсильніше близько ${e.time||`${e.hourNum}:00`} — будьте обережні поблизу старих дерев і легких конструкцій.`,p=x}else p=u>=6||g>=10?`Вітровий режим помірний: до ${u} м/с${g>u?`, пориви до ${g} м/с`:""}.`:`Вітер спокійний та слабкий (до ${u||2} м/с), сприятливий для прогулянок.`;const y=i.some(e=>(e.isRain||e.isSnow)&&e.temp>=-3&&e.temp<=2);y&&r.push("Ризик ожеледиці");const b=i.find(e=>null!==e.visibility&&e.visibility<1e3)||null;b&&r.push("Туман");const w=i.some(e=>e.isSnow);return{rainWindowText:o,peakTempText:d,windTrendText:p,windWarning:x,maxWind:u,maxGust:g,isWindStrong:m,iceRisk:y,snowLikely:w,fog:b?{time:b.time||`${b.hourNum}:00`,visibilityKm:Math.round(b.visibility/100)/10}:null,badges:r}})(o,t),f=((e=[],t="C")=>{if(!Array.isArray(e)||e.length<3)return{trendText:"Недостатньо даних для довгострокового аналізу тенденції.",jumpBadge:null,weekSummaryText:""};const r=e.slice(0,10).map((e,t)=>({index:t,date:e.date||e.day||`День ${t+1}`,dayName:e.day||e.dayName||"",tempDay:hl(e.temp_day,0),tempNight:hl(e.temp_night,0),pop:hl(e.precipitation_probability_max??e.pop,0),desc:(e.description||"").toLowerCase()})),i=r[0].tempDay;let a,n,s=0,o=null,l=0,c=null;for(let f=1;f<r.length;f++){const e=r[f].tempDay-i;e>s&&(s=e,o=r[f]),e<l&&(l=e,c=r[f])}s>=5&&o?(n=`Різкий підйом: +${Math.round(s)}°C`,a=`На тижні очікується різкий підйом температури: починаючи з ${o.dayName||o.date}, повітря прогріється до ${pl(o.tempDay,t)} (підйом одразу на +${Math.round(s)}°C у порівнянні з початком періоду). Зайде тепла повітряна маса!`):l<=-5&&c?(n=`Різкий спад: ${Math.round(l)}°C`,a=`На зміну теплій погоді насувається різке похолодання: до ${c.dayName||c.date} стовпчики термометрів впадуть до ${pl(c.tempDay,t)} (падіння на ${Math.abs(Math.round(l))}°C). Підготуйте тепліші речі наперед.`):(n="Стабільний тиждень",a=`На найближчий тиждень різких температурних стрибків не передбачається: температура коливатиметься у межах від ${pl(Math.min(...r.map(e=>e.tempDay)),t)} до ${pl(Math.max(...r.map(e=>e.tempDay)),t)}. Синоптична ситуація залишатиметься прогнозованою.`);const d=r.filter(e=>e.pop>=45||e.desc.includes("дощ")||e.desc.includes("злив")).length;let h;return h=d>=4?`Загалом тиждень буде вологим та дощовим (${d} з ${r.length} днів очікуються з опадами).`:0===d?"Попереду сухий та сприятливий період без суттєвих опадів.":`Опади матимуть періодичний або локальний характер (дощових днів: близько ${d}).`,{trendText:a,jumpBadge:n,weekSummaryText:h}})(n,t),p=(e=>{const t=hl(e?.pressure,1013),r=hl(e?.humidity,50),i=hl(e?.uv_index??e?.uvi,0),a=[];return t<1005?a.push({type:"pressure_low",title:"Знижений атмосферний тиск",text:`Тиск становить ${t} гПа, що свідчить про наближення циклонічної зони негоди. Метеозалежні люди можуть відчувати втому, головний біль та зниження працездатності.`}):t>1022&&a.push({type:"pressure_high",title:"Високий атмосферний тиск",text:`Барометричний тиск підвищений (${t} гПа), обумовлений впливом антициклону — очікується суха та спокійна погода.`}),r>=85?a.push({type:"humidity",title:"Висока вологість повітря",text:`Вологість ${r}%: посилюється відчуття вогкості або паркоти, можливе утворення вранішнього туману чи конденсату.`}):r<35&&a.push({type:"humidity",title:"Сухе повітря",text:`Вологість знижена (${r}%): пийте більше води та зволожуйте шкіру.`}),i>=6&&a.push({type:"uvi",title:"Підвищений УФ-індекс",text:`УФ-індекс сягає ${i}: з 11:00 до 16:00 рекомендовано користуватися сонцезахисними окулярами та кремом.`}),a})(a),x=((e,t,r)=>{const i=hl(e?.temp,15),a=hl(e?.feels_like,i),n=hl(t?.temp_day,i),s=hl(t?.temp_night,i),o=hl(t?.snowfall_sum,0)>0||Boolean(r.snowLikely),l=r.badges.some(e=>e.toLowerCase().includes("дощ")),c=r.isWindStrong??r.maxWind>=10,d=[];if(c){const e=r.maxGust;d.push({type:"wind_warning",title:e>r.maxWind?`Увага, сильний вітер (пориви до ${e} м/с):`:`Увага, сильний вітер до ${r.maxWind} м/с:`,text:"вдягайте вітрозахисну куртку з капюшоном і тримайтеся подалі від дерев та рекламних конструкцій."})}let h;return r.iceRisk&&d.push({type:"ice",title:"Ожеледиця",text:"Опади при температурі близько 0° — тротуари й дороги можуть обмерзнути. Взуття з рифленою підошвою, за кермом плавно гальмуйте."}),h=a<-10?"Сильний мороз: теплий пуховик, термобілизна, шапка, шарф, рукавиці та утеплене взуття.":a<0?"Зимовий теплий пуховик, шапка, шарф, рукавички та утеплене зимове взуття.":a<8?"Щільна демісезонна куртка або пальто, теплий светр та закрите взуття.":a<16?"Легка куртка, толстовка чи худі, які можна зняти в разі потепління.":a<23?"Легкий кардиган, сорочка з довгим рукавом або лонгслів.":"Максимально легкий літній одяг з натуральних тканин (льон, бавовна).",Math.round(a)!==Math.round(i)&&(h+=` Відчувається як ${pl(Math.round(a))}.`),n-s>=8&&(h+=` За добу від ${pl(s)} до ${pl(n)} — одягайтесь шарами.`),d.push({type:"cloth",title:"Гардероб",text:h}),o&&d.push({type:"snow",title:"Сніг",text:"Очікується сніг: зимове взуття з протектором і більше часу на дорогу."}),s<=0&&n>0&&d.push({type:"frost",title:"Заморозки вночі",text:`Вночі до ${pl(s)}: накрийте чутливі рослини, а вранці закладіть час на розморожування скла авто.`}),l&&d.push({type:"umbrella",title:"Парасоля",text:"Обов'язково візьміть із собою компактну парасольку або легкий дощовик."}),r.fog&&d.push({type:"fog",title:"Туман",text:`Близько ${r.fog.time} видимість знизиться до ${r.fog.visibilityKm} км: водіям — ближнє світло та більша дистанція.`}),l&&!r.iceRisk&&d.push({type:"car",title:"Автомобілістам",text:"Зважайте на мокре дорожнє покриття та збільшуйте дистанцію гальмування."}),c||l||r.iceRisk||a<-10?d.push({type:"home",title:"Відпочинок",text:"Погода не для довгих прогулянок — краще спланувати справи в приміщенні або вийти ненадовго."}):a>30?d.push({type:"sport",title:"Відпочинок",text:"Спека: гуляйте зранку або ввечері, пийте більше води та уникайте сонця опівдні."}):d.push({type:"sport",title:"Відпочинок",text:"Чудовий час для прогулянок на відкритому повітрі, пробіжки чи катання на велосипеді."}),d})(a,s,h),u=[];d.badge&&u.push(d.badge),h.badges.forEach(e=>u.push(e)),f.jumpBadge&&u.push(f.jumpBadge);let g=`Прогноз для ${c}: `;u.some(e=>e.includes("дощ"))?g+="Очікуються опади, день вимагатиме парасолі":f.jumpBadge?.includes("підйом")?g+="Попереду різке потепління та приємна динаміка":f.jumpBadge?.includes("спад")?g+="Насувається хвиля похолодання":g+="Стійка та комфортна погода на найближчий час";const m=[`[Прогноз для ${c}]`,`Час: ${r||"зараз"}`,"","Добовий баланс:",d.message,"","Погодинні зміни:",h.rainWindowText,h.peakTempText,h.windTrendText,"","Тижневий тренд:",f.trendText,f.weekSummaryText,"",...p.length>0?["Атмосферні фактори:",...p.map(e=>`• ${e.title}: ${e.text}`),""]:[],"Рекомендації та гардероб:",...x.map(e=>`• ${e.title} ${e.text}`)].join("\n");return{locationName:l,locationNameGenitive:c,headline:g,allBadges:Array.from(new Set(u)),dayNight:d,hourlyData:h,weeklyData:f,atmosphereNotes:p,lifestyleAdvice:x,fullText:m,generatedAt:Date.now()}},ul="/assets/mountains-CwRk4ZgD.webp",gl="/assets/art-studio-DHg_t1il.webp",ml="/assets/foggy-forest-Cew27ml4.webp",yl="/assets/japanese-temple-B_nRztWf.webp",bl="/assets/black-hole-omR0ZjVQ.webp",wl="/assets/nitseron-castle-DEsolxme.webp",vl="/assets/thunderstorm-lzudItwJ.webp",kl="/assets/siren-head-Dh1KPUjM.webp",jl="/assets/mirages-Bpbh89pi.webp",Ml="/assets/cacti-B1yTfM-X.webp",Sl="/assets/pyramid-KOc6byy4.webp",$l="/assets/ships-in-desert-CTJSVy53.webp",Dl="/assets/gears-B4qHsIdf.webp",Cl="/assets/unknown-place-BGgJ_grP.webp",Ll="/assets/kate--dWdDrjz.webp",Al="/assets/chess-DE0SQ6bR.webp",zl="/assets/small-but-confident-DEtUfl4n.webp",Il="/assets/look-me-in-the-eyes-DWkC9U9r.webp",El="/assets/grown-up-C74RJO0D.webp",Nl="/assets/small-flock-ByUfHIKS.webp",Rl="/assets/looking-for-a-friend-C_bOyIyj.webp",Tl="/assets/sakura-field-B0HnOhGB.webp",Fl="/assets/cave-BHhNiv03.webp",Pl="/assets/lava-river-CleyN5g2.webp",Vl="/assets/mountain-descent-DSDp7YH4.webp",_l="/assets/treasury-D7UysOUw.webp",Ol="/assets/winter-forest-BHmk7Yt4.webp",Bl="/assets/waterfall-roupkWdg.webp",Hl="/assets/japanese-balcony-DFmFFiYc.webp",ql="/assets/note-8_PhuQBm.webp",Kl="/assets/candle-hint-D1x5tDiJ.webp",Zl="/assets/crystal-cave-DzD2OZh6.webp",Ul="/assets/watching-fog-aw1KjEtN.webp",Jl="/assets/swamp-dragon-Cxl2rbCa.webp",Wl="/assets/lake-of-freedom-BGdJXMuv.webp",Gl="/assets/campfire-BgbF1Vw-.webp",Yl="/assets/swamp-of-torment-D6Jzwofg.webp",Ql="/assets/trap-house-D8aEwkY_.webp",Xl="/assets/basement-BFEovIOX.webp",ec="/assets/evil-garden-DmgPluVF.webp",tc="/assets/fighting-dog-Bwtso3fm.webp",rc="/assets/escape-FrdmNrLk.webp",ic="/assets/escape-finale-N8Azt2Lm.webp",ac="/assets/emperor-nitseron-C4DCnog6.webp",nc="/assets/preview-h3bRBpyn.webp",sc="/assets/dragemon-s2-DkpUmpno.webp",oc="/assets/meltstone-vsWApnpV.webp",lc="/assets/time-travel-B2cUeZYK.webp",cc="/assets/general-vlad-s1-r29p04F4.webp",dc="/assets/general-trick-s1-D_wKW6F3.webp",hc="/assets/general-vlad-s2-B9_gfJz_.webp",fc="/assets/rockfroz-view-Btp0fI_a.webp",pc="/assets/dragon-village-3-mmk5VN8H.webp",xc="/assets/resort-CfnCTW9-.webp",uc="/assets/mia-and-me-BLF13Fck.webp",gc="/assets/volcano-2pNCSf4p.webp",mc="/assets/egyptian-hieroglyphs-Dh_WKfAx.webp",yc="/assets/slivkishow-cookie-flight-O-FTl1Nd.webp",bc=[{src:kl,name:"Щось не так...",category:"Темрява та Містика",author:"Тревор Хендерсон"},{src:mc,name:"Єгипетські ієрогліфи",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:$l,name:"Кораблі у пустелі",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)"},{src:"/assets/the-day-after-tomorrow-fT7HuHvy.webp",name:"Крижана катастрофа",category:"Природа та Стихії",author:"20th Century Fox",source:"Фільм 'Післязавтра'",start:0,end:300},{src:ml,name:"Туманний ліс",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:"/assets/foggy-forest-DJVy3omR.webm",name:"Туманний ліс (Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300},{src:xc,name:"Курорт",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:yc,name:"Політ Кукі у стратосферу",category:"Природа та Стихії",author:"SlivkiShow",start:0,end:78},{src:gl,name:"Художня студія",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:"/assets/thunderstorm-DTaMof_s.webm",name:"Гроза (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:7},{src:ul,name:"Гори",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:gc,name:"Вулкан",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:"/assets/volcano-KB8MoWGq.webm",name:"Вулкан (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300},{src:"/assets/aurora-hills-DmZEChm7.webp",name:"Аврора Гіллс",category:"Темрява та Містика",author:"NovaSoft Interactive"},{src:Ul,name:"Туман, що дивиться",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:"/assets/crystal-prison-BCKpykFy.webp",name:"Кришталева в'язниця",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300},{src:"/assets/loft-BZpLy1oe.webp",name:"Стиль лофт",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:"/assets/white-noise-FEPM_AdH.webm",name:"Білий шум",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300},{src:"/assets/emperor-nitseron-CfBwIS_m.webm",name:"Імператор Ніцерон (Відео)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300},{src:"/assets/general-vlad-s1-DjzLRhMv.webm",name:"Генерал Влад (Відео, сезон 1)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300},{src:pc,name:"Древніус і Даркніс",category:"Фентезі та Легенди",author:"highbrow",source:"Dragon Village 3"},{src:ac,name:"Імператор Ніцерон",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:hc,name:"Генерал Влад (2 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:nc,name:"Прев'ю мультфільму",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:sc,name:"Драгемон (2 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:oc,name:"Мелтстон",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:lc,name:"Переміщення у часі",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:cc,name:"Генерал Влад (1 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:dc,name:"Генерал Трік (1 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:fc,name:"Погляд у Рокфроз",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:wl,name:"Замок Ніцерона",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:"/assets/nitseron-alt-w6vAmYap.webp",name:"Іще варіант",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Ll,name:"Індичка Кейт",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Nl,name:"Мале бундюче стадо",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:zl,name:"Малий, але впевнений",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Il,name:"Дивись мені в очі!",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:El,name:"Ми вже виросли!",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Rl,name:"Шукаю друга",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:"/assets/backrooms-C_N8r861.webp",name:"Нескінченний коридор",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:jl,name:"Пустельні міражі",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)"},{src:Ml,name:"Кактуси",category:"Природа та Стихії",author:"Генерація ШІ (Gemini)"},{src:Sl,name:"Піраміда",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)"},{src:Wl,name:"Озеро волі",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:ql,name:"Записка",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:Ol,name:"Зимовий ліс",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Bl,name:"Водоспад",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Tl,name:"Поле і сакури",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Fl,name:"Печера",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:Pl,name:"Річка з лави",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Vl,name:"Спуск з гори",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:_l,name:"Скарбниця + Відсилки",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:Hl,name:"Японський балкон",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:yl,name:"Японський храм",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:uc,name:"Міа та я",category:"Фентезі та Легенди",author:"Studio 100 Media, Lucky Punch, March Ent.",source:"м/с Mia and Me"},{src:tc,name:"Бійцівська собака",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Ql,name:"Будинок з пастками",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Xl,name:"Підвал",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:ec,name:"Город зла",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:rc,name:"Втеча",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:"/assets/the-ring-CmfzbL-1.webp",name:"Касета, що вбиває",category:"Темрява та Містика",author:"Dreamworks",source:"Фільм 'Дзвінок'",start:0,end:300},{src:ic,name:"Втеча (фінал)",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Jl,name:"Болотний дракон",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:"/assets/pennywise-it-2017-BUV12nwB.webp",name:"Пеннівайз",category:"Темрява та Містика",author:"Warner Bros. / New Line Cinema",source:"Фільм 'Воно' (2017)"},{src:Yl,name:"Болото мук",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:bl,name:"Чорна діра",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:vl,name:"Гроза",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Dl,name:"Шестерні",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:"/assets/unknown-place-CJ01w-fY.webm",name:"Невідоме місце(Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300},{src:Cl,name:"Невідоме місце",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:Gl,name:"Вогнище",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:"/assets/campfire-C4pFnsf-.webm",name:"Вогнище(Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300},{src:Al,name:"Шахи",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Kl,name:"Підказка свічки",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:Zl,name:"Печера кристалів",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:"/assets/titanic-psUEvksY.webp",name:"Титанік",category:"Темрява та Містика",author:"Paramount Pictures & 20th Century",source:"Фільм Titanic (1997)"},{src:"/assets/agent-smith-matrix-Blk03HJN.webp",name:"Агент Сміт",category:"Темрява та Містика",author:"WarnerBrothers",source:"Фільм 'Матриця'"}],wc=e=>null==e?"—":["Північний","Північно-східний","Східний","Південно-східний","Південний","Південно-західний","Західний","Північно-західний"][Math.floor(e/45+.5)%8],vc=e=>{const t=(e||[]).map((e,t)=>({x:t,y:e})).filter(e=>Number.isFinite(e.y));if(t.length<2)return null;const r=t.length,i=t.reduce((e,t)=>e+t.x,0),a=t.reduce((e,t)=>e+t.y,0),n=t.reduce((e,t)=>e+t.x*t.y,0),s=r*t.reduce((e,t)=>e+t.x*t.x,0)-i*i;if(0===s)return null;const o=(r*n-i*a)/s,l=(a-o*i)/r;return{slope:o,intercept:l,data:e.map((e,t)=>+(l+o*t).toFixed(2))}},kc={smooth:{label:"Плавна"},monotone:{label:"Без викидів",hint:"Плавна, але не виходить за межі реальних значень"},straight:{label:"Ламана"},stepped:{label:"Сходинки"}},jc={solid:{label:"Суцільна",pattern:[]},dashed:{label:"Штрихова",pattern:[8,5]},dotted:{label:"Крапкова",pattern:[1,6]},dashDot:{label:"Штрих-пунктир",pattern:[10,4,2,4]},longDash:{label:"Довгий штрих",pattern:[16,6]}},Mc=(e={})=>({curve:"smooth",dash:"solid",width:3,fill:!1,points:!0,dimOpacity:.3,...e}),Sc={hourly:{temp:Mc({fill:!0}),right:Mc({fill:null})},daily:{day:Mc(),night:Mc(),right:Mc(),trendDay:{dash:"dashed",width:2},trendNight:{dash:"dashed",width:2}}},$c=e=>{const t={};return Object.entries(Sc).forEach(([r,i])=>{t[r]={},Object.entries(i).forEach(([i,a])=>{const n=e?.[r]?.[i],s={...a,...n&&"object"==typeof n?n:{}};void 0===s.curve||kc[s.curve]||(s.curve=a.curve),jc[s.dash]||(s.dash=a.dash);const o=Number(s.width);if(s.width=Number.isFinite(o)?Math.min(8,Math.max(1,o)):a.width,void 0!==a.dimOpacity){const e=Number(s.dimOpacity);s.dimOpacity=Number.isFinite(e)?Math.min(.9,Math.max(0,e)):a.dimOpacity}t[r][i]=s})}),t},Dc=(e,t={})=>{const{tension:r=.4,pointRadius:i,fill:a}=t,n=e||{},s={borderWidth:n.width??3,borderDash:jc[n.dash]?.pattern??[],borderCapStyle:"dotted"===n.dash?"round":"butt"};return"straight"===n.curve?s.tension=0:"stepped"===n.curve?Object.assign(s,{tension:0,stepped:"middle"}):"monotone"===n.curve?Object.assign(s,{tension:r,cubicInterpolationMode:"monotone"}):void 0!==n.curve&&(s.tension=r),void 0!==n.fill&&(s.fill=n.fill??a??!1),void 0!==i&&void 0!==n.points&&(s.pointRadius=n.points?i:0,n.points||(s.pointHoverRadius=0)),s},Cc=e(l()),Lc=Eo.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ac=Eo.div`
  background: ${e=>e.$isDarkMode?"#1c1c1f":"#fff"};
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"};
  border-radius: 14px;
  box-sizing: border-box;
  width: 95vw;
  max-height: 92vh;
  overflow-y: auto;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  & > * {
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`,zc=Eo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -20px;
  z-index: 2;
  margin: -20px -22px 0;
  padding: 14px 22px;
  background: inherit;
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"};

  @media (max-width: 600px) {
    top: -16px;
    margin: -16px -16px 0;
    padding: 12px 16px;
  }
`,Ic=Eo.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  font-size: 20px;
  color: #00eeff;
  background: rgba(0, 238, 255, 0.12);
  border: 1px solid rgba(0, 238, 255, 0.3);
  flex-shrink: 0;
`,Ec=Eo.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  display: inline-flex;
  padding: 6px;
  border-radius: 6px;
  &:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.2);
  }
`,Nc=Eo.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    font-size: 15px;
  }
`,Rc=Eo.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  & > ${Nc} {
    margin-bottom: 0;
  }
`,Tc=Eo.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${e=>e.$active?"#00eeff":e.$isDarkMode?"#444":"#ccc"};
  background: ${e=>e.$active?e.$isDarkMode?"rgba(0,238,255,0.12)":"rgba(0,140,255,0.1)":"transparent"};
  input {
    accent-color: #00eeff;
    width: 16px;
    height: 16px;
    margin: 0;
  }
`,Fc=Eo.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(0,238,255,0.18)":"rgba(0,140,255,0.2)"};
  background: ${e=>e.$isDarkMode?"linear-gradient(135deg, rgba(0,238,255,0.06), rgba(255,255,255,0.02))":"linear-gradient(135deg, rgba(0,140,255,0.06), rgba(0,0,0,0.015))"};
`,Pc=Eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
  gap: 14px;
`,Vc=Eo.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  opacity: 0.65;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
`,_c=Eo.div`
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)"};
  border-top: 3px solid ${e=>e.$color};
  border-radius: 12px;
  padding: 12px 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.15s, box-shadow 0.15s;
  &:hover {
    box-shadow: 0 6px 22px ${e=>e.$color}22;
  }
`,Oc=Eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${e=>e.$color};
  padding-bottom: 10px;
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"};
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: ${e=>e.$color}22;
    font-size: 17px;
  }
`,Bc=Eo.span`
  margin-left: auto;
  padding: 6px 10px;
  border-radius: 8px;
  background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.35)":"rgba(0,0,0,0.04)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,Hc=Eo.div`
  display: grid;
  grid-template-columns: 92px 1fr;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  .name {
    opacity: 0.7;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`,qc=Eo.div`
  height: 1px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"};
`,Kc=Eo.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Zc=Eo.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  font-size: 12.5px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${e=>e.$active?"#00eeff":e.$isDarkMode?"#3a3a40":"#d4d4d8"};
  background: ${e=>e.$active?e.$isDarkMode?"rgba(0,238,255,0.14)":"rgba(0,140,255,0.1)":e.$isDarkMode?"rgba(255,255,255,0.02)":"#fff"};
  box-shadow: ${e=>e.$active?"0 0 0 2px rgba(0,238,255,0.15)":"none"};
  color: inherit;
  font-weight: ${e=>e.$active?700:500};
  transition: border-color 0.15s, background 0.15s, transform 0.1s;
  &:hover {
    border-color: #00eeff;
  }
  &:active {
    transform: scale(0.97);
  }
  svg {
    flex-shrink: 0;
  }
`,Uc=Eo.span`
  min-width: 44px;
  text-align: center;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${e=>e.$color};
  background: ${e=>e.$color}1f;
`,Jc=Eo.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 2px;
`,Wc=Eo.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${e=>e.$active?e.$color:e.$isDarkMode?"#3a3a40":"#d4d4d8"};
  background: ${e=>e.$active?`${e.$color}1f`:"transparent"};
  color: ${e=>e.$active?e.$color:"inherit"};
  opacity: ${e=>e.$active?1:.75};
  transition: all 0.15s;
  &:hover {
    opacity: 1;
  }
  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  &:focus-within {
    outline: 2px solid ${e=>e.$color};
    outline-offset: 2px;
  }
  svg {
    font-size: 15px;
  }
`,Gc=Eo.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"};
  padding-top: 14px;
`,Yc=Eo.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #00eeff;
  background: rgba(0, 238, 255, 0.15);
  color: ${e=>e.$isDarkMode?"#00eeff":"#006b80"};
  &:hover {
    background: rgba(0, 238, 255, 0.25);
  }
`,Qc=Eo.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ffb36c;
  background: transparent;
  color: ${e=>e.$isDarkMode?"#ffb36c":"#333"};
`,Xc=[28,10,22,6,16,12],ed=[28,6,20,10],td=(e,t,r,i=Xc,a=4)=>{const n=i.map((e,n)=>[a+n*(t-2*a)/(i.length-1),e/32*r]);if("stepped"===e){let e=`M${n[0][0]},${n[0][1]}`;for(let t=1;t<n.length;t++){e+=` H${(n[t-1][0]+n[t][0])/2} V${n[t][1]} H${n[t][0]}`}return e}if("straight"===e||!e)return n.map((e,t)=>`${t?"L":"M"}${e[0]},${e[1]}`).join(" ");let s=`M${n[0][0]},${n[0][1]}`;for(let o=0;o<n.length-1;o++){const t=n[o-1]||n[o],r=n[o],i=n[o+1],a=n[o+2]||i,l="monotone"===e?.12:.18,c=[r[0]+(i[0]-t[0])*l,r[1]+(i[1]-t[1])*l],d=[i[0]-(a[0]-r[0])*l,i[1]-(a[1]-r[1])*l];s+=` C${c[0]},${c[1]} ${d[0]},${d[1]} ${i[0]},${i[1]}`}return s},rd=({style:e,color:t,fill:r,w:i=150,h:a=34})=>{const n=td(e.curve,i,a),s=jc[e.dash]?.pattern||[];return(0,_o.jsxs)("svg",{width:i,height:a,viewBox:`0 0 ${i} ${a}`,"aria-hidden":"true",style:{display:"block",overflow:"visible"},children:[r&&(0,_o.jsx)("path",{d:`${n} L${i-4},${a} L4,${a} Z`,fill:t,opacity:"0.18"}),(0,_o.jsx)("path",{d:n,fill:"none",stroke:t,strokeWidth:e.width,strokeDasharray:s.length?s.join(" "):void 0,strokeLinecap:"dotted"===e.dash?"round":"butt",strokeLinejoin:"round"}),e.points&&Xc.map((e,r)=>(0,_o.jsx)("circle",{cx:4+r*(i-8)/(Xc.length-1),cy:e/32*a,r:"2.5",fill:t},r))]})},id=({curve:e,color:t})=>(0,_o.jsx)("svg",{width:"26",height:"16",viewBox:"0 0 26 16","aria-hidden":"true",style:{overflow:"visible"},children:(0,_o.jsx)("path",{d:td(e,26,16,ed,2),fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ad=e=>0===e?"сховати":`${Math.round(100*e)}%`,nd=({value:e,color:t,label:r,onChange:i})=>(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,_o.jsx)("input",{type:"range",min:"0",max:90,step:"5",value:Math.round(100*e),onChange:e=>i(Number(e.target.value)/100),"aria-label":r,style:{flex:1,maxWidth:"260px",accentColor:t,cursor:"pointer"}}),(0,_o.jsx)(Uc,{$color:t,style:{minWidth:"64px",opacity:0===e?.7:Math.max(.45,e+.3)},children:ad(e)})]}),sd=({dashKey:e,color:t})=>(0,_o.jsx)("svg",{width:"28",height:"8","aria-hidden":"true",children:(0,_o.jsx)("line",{x1:"1",y1:"4",x2:"27",y2:"4",stroke:t,strokeWidth:"2",strokeDasharray:jc[e].pattern.join(" ")||void 0,strokeLinecap:"dotted"===e?"round":"butt"})}),od=({title:e,lines:t,styles:r,onChange:i,onApplyAll:a,onReset:n,onClose:s,allCards:o,onToggleAllCards:l,isDarkMode:c})=>{(0,Ar.useEffect)(()=>{const e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);const d=c?"#ddd":"#333",h=t.filter(e=>!e.trend),f=t.filter(e=>e.trend),p=h.map(e=>r[e.key]?.curve),x=t.map(e=>r[e.key]?.dash),u=p.every(e=>e===p[0])?p[0]:null,g=x.every(e=>e===x[0])?x[0]:null,m=r[h[0]?.key]?.dimOpacity??.3,b=e=>{const t=r[e.key];if(!t)return null;const a=t.fill??e.autoFill??!1,n=t=>i(e.key,t);return(0,_o.jsxs)(_c,{$isDarkMode:c,$color:e.color,children:[(0,_o.jsxs)(Oc,{$color:e.color,$isDarkMode:c,children:[e.icon&&(0,_o.jsx)("span",{className:"icon",children:e.icon}),e.label,(0,_o.jsx)(Bc,{$isDarkMode:c,children:(0,_o.jsx)(rd,{style:e.trend?{...t,curve:"straight",points:!1}:t,color:e.color,fill:!e.trend&&a})})]}),!e.trend&&(0,_o.jsxs)(Hc,{children:[(0,_o.jsx)("span",{className:"name",children:"Форма"}),(0,_o.jsx)(Kc,{children:Object.entries(kc).map(([r,i])=>(0,_o.jsxs)(Zc,{$active:t.curve===r,$isDarkMode:c,title:i.hint,onClick:()=>n({curve:r}),children:[(0,_o.jsx)(id,{curve:r,color:e.color})," ",i.label]},r))})]}),(0,_o.jsxs)(Hc,{children:[(0,_o.jsx)("span",{className:"name",children:"Тип лінії"}),(0,_o.jsx)(Kc,{children:Object.entries(jc).map(([r,i])=>(0,_o.jsx)(Zc,{$active:t.dash===r,$isDarkMode:c,title:i.label,"aria-label":i.label,onClick:()=>n({dash:r}),children:(0,_o.jsx)(sd,{dashKey:r,color:e.color})},r))})]}),(0,_o.jsxs)(Hc,{children:[(0,_o.jsx)("span",{className:"name",children:"Товщина"}),(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,_o.jsx)("input",{type:"range",min:1,max:8,step:"1",value:t.width,onChange:e=>n({width:Number(e.target.value)}),"aria-label":`Товщина лінії ${e.label}`,style:{flex:1,maxWidth:"260px",accentColor:e.color,cursor:"pointer"}}),(0,_o.jsxs)(Uc,{$color:e.color,children:[t.width," px"]})]})]}),void 0!==t.dimOpacity&&(0,_o.jsxs)(Hc,{title:"Наскільки видно лінію, коли її вимкнено в легенді над графіком",children:[(0,_o.jsx)("span",{className:"name",children:"Коли вимкнено"}),(0,_o.jsx)(nd,{value:t.dimOpacity,color:e.color,label:`Прозорість вимкненої лінії ${e.label}`,onChange:e=>n({dimOpacity:e})})]}),!e.trend&&(0,_o.jsxs)(Jc,{children:[(0,_o.jsxs)(Wc,{$active:a,$color:e.color,$isDarkMode:c,children:[(0,_o.jsx)("input",{type:"checkbox",checked:a,onChange:e=>n({fill:e.target.checked})}),a?(0,_o.jsx)(je,{}):(0,_o.jsx)(pt,{}),"Заливка під лінією"]}),(0,_o.jsxs)(Wc,{$active:t.points,$color:e.color,$isDarkMode:c,children:[(0,_o.jsx)("input",{type:"checkbox",checked:t.points,onChange:e=>n({points:e.target.checked})}),t.points?(0,_o.jsx)(je,{}):(0,_o.jsx)(dr,{}),"Точки / іконки"]})]})]},e.key)},w=document.fullscreenElement||document.body;return(0,Cc.createPortal)((0,_o.jsx)(Lc,{onClick:s,children:(0,_o.jsxs)(Ac,{$isDarkMode:c,role:"dialog","aria-label":e,onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(zc,{$isDarkMode:c,children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,_o.jsx)(Ic,{children:(0,_o.jsx)(xt,{})}),(0,_o.jsxs)("div",{children:[(0,_o.jsx)("h3",{style:{margin:0,fontSize:"18px"},children:e}),(0,_o.jsx)("div",{style:{fontSize:"12px",opacity:.6,marginTop:"2px"},children:"Форма, тип і товщина кожної лінії. Графік оновлюється одразу."})]})]}),(0,_o.jsx)(Ec,{onClick:s,"aria-label":"Закрити",children:(0,_o.jsx)(Fe,{})})]}),(0,_o.jsxs)("div",{children:[(0,_o.jsxs)(Rc,{children:[(0,_o.jsxs)(Nc,{children:[(0,_o.jsx)(Ye,{})," Для всіх ліній",(0,_o.jsxs)(Vc,{children:["· ",(0,_o.jsx)(y,{}),o?"зміни застосовуються до графіків усіх карток":"зміни діють лише для цієї картки"]})]}),(0,_o.jsxs)(Tc,{$active:o,$isDarkMode:c,children:[(0,_o.jsx)("input",{type:"checkbox",checked:o,onChange:e=>l(e.target.checked)}),"Для всіх карток"]})]}),(0,_o.jsxs)(Fc,{$isDarkMode:c,children:[(0,_o.jsxs)(Hc,{children:[(0,_o.jsx)("span",{className:"name",children:"Форма"}),(0,_o.jsx)(Kc,{children:Object.entries(kc).map(([e,t])=>(0,_o.jsxs)(Zc,{$active:u===e,$isDarkMode:c,title:t.hint,onClick:()=>a({curve:e}),children:[(0,_o.jsx)(id,{curve:e,color:d})," ",t.label]},e))})]}),(0,_o.jsx)(qc,{$isDarkMode:c}),(0,_o.jsxs)(Hc,{children:[(0,_o.jsx)("span",{className:"name",children:"Тип лінії"}),(0,_o.jsx)(Kc,{children:Object.entries(jc).map(([e,t])=>(0,_o.jsxs)(Zc,{$active:g===e,$isDarkMode:c,onClick:()=>a({dash:e}),children:[(0,_o.jsx)(sd,{dashKey:e,color:d})," ",t.label]},e))})]}),(0,_o.jsx)(qc,{$isDarkMode:c}),(0,_o.jsxs)(Hc,{title:"Наскільки видно лінію, коли її вимкнено в легенді над графіком",children:[(0,_o.jsx)("span",{className:"name",children:"Коли вимкнено"}),(0,_o.jsx)(nd,{value:m,color:"#00eeff",label:"Прозорість вимкнених ліній",onChange:e=>a({dimOpacity:e})})]})]})]}),(0,_o.jsxs)("div",{children:[(0,_o.jsxs)(Nc,{style:{marginBottom:"10px"},children:[(0,_o.jsx)(Te,{})," Кожна лінія окремо"]}),(0,_o.jsx)(Pc,{children:h.map(b)})]}),f.length>0&&(0,_o.jsxs)("div",{children:[(0,_o.jsxs)(Nc,{style:{marginBottom:"10px"},children:[(0,_o.jsx)(qe,{})," Лінії тренду",(0,_o.jsx)(Vc,{children:"· видно, коли тренд увімкнено кнопкою на графіку"})]}),(0,_o.jsx)(Pc,{children:f.map(b)})]}),(0,_o.jsxs)(Gc,{$isDarkMode:c,children:[(0,_o.jsxs)(Qc,{$isDarkMode:c,onClick:n,children:[(0,_o.jsx)(zt,{})," Скинути до типових"]}),(0,_o.jsxs)(Yc,{$isDarkMode:c,onClick:s,children:[(0,_o.jsx)(je,{size:16})," Готово"]})]})]})}),w)},ld={pressure_low:(0,_o.jsx)(Ne,{}),pressure_high:(0,_o.jsx)(Ne,{}),humidity:(0,_o.jsx)(q,{}),uvi:(0,_o.jsx)(lr,{}),wind_warning:(0,_o.jsx)(vt,{}),cloth:(0,_o.jsx)(Ot,{}),umbrella:(0,_o.jsx)(Zt,{}),car:(0,_o.jsx)(F,{}),sport:(0,_o.jsx)(Ct,{}),home:(0,_o.jsx)(Le,{}),ice:(0,_o.jsx)(Nt,{}),snow:(0,_o.jsx)(Ve,{}),frost:(0,_o.jsx)(E,{}),fog:(0,_o.jsx)(Pt,{})},cd={pressure_low:"#4da6ff",pressure_high:"#ff4d4d",humidity:"#4da6ff",uvi:"#ffd700",wind_warning:"#ff9900",cloth:"#ffb36c",umbrella:"#14b8a6",car:"#aaa",sport:"#4ade80",home:"#a3a3a3",ice:"#7dd3fc",snow:"#80d4ff",frost:"#4da6ff",fog:"#9fb3c8"},dd=({title:e,icon:t,color:r,children:i})=>(0,_o.jsxs)("div",{style:{borderLeft:`3px solid ${r}`,paddingLeft:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:800,fontSize:"15px",color:r},children:[(0,_o.jsx)("span",{style:{display:"inline-flex",fontSize:"18px"},children:t}),e]}),i]}),hd=({icon:e,color:t,children:r})=>(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[(0,_o.jsx)("span",{style:{display:"inline-flex",flexShrink:0,marginTop:"3px",fontSize:"16px",color:t},children:e}),(0,_o.jsx)("span",{children:r})]}),fd=({ruleForecast:e,forecastTimeString:t,isDarkMode:r,onClose:i})=>{const[a,n]=(0,Ar.useState)(!1),s="#00eeff";return(0,Cc.createPortal)((0,_o.jsx)("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(4px)",zIndex:3e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:i,children:(0,_o.jsxs)("div",{role:"dialog","aria-label":"Повний звіт прогнозу",style:{background:r?"#0b0b0b":"#fff",border:"1px solid rgba(0,238,255,0.6)",borderRadius:"12px",padding:"20px",width:"95%",maxWidth:"95vw",maxHeight:"92vh",overflowY:"auto",color:r?"#efefff":"#222",fontSize:"14px",lineHeight:1.6,whiteSpace:"pre-line",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",marginBottom:"12px"},children:[(0,_o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",fontWeight:800,color:s,fontSize:"14px",letterSpacing:"1px"},children:[(0,_o.jsx)(Ut,{size:22}),"Смарт-прогноз (Офлайн / Правила) — повний звіт"]}),(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,_o.jsxs)("button",{onClick:()=>{e?.fullText&&(navigator.clipboard?.writeText(e.fullText),n(!0),setTimeout(()=>n(!1),2e3))},title:"Скопіювати текст прогнозу",style:{display:"inline-flex",alignItems:"center",gap:"4px",background:a?"rgba(0,255,150,0.2)":"rgba(0,238,255,0.12)",border:"1px solid "+(a?"#00ff96":"rgba(0,238,255,0.5)"),color:a?"#00ff96":"#00eeff",borderRadius:"6px",padding:"4px 8px",fontSize:"12px",fontWeight:600,cursor:"pointer"},children:[(0,_o.jsx)(je,{size:16}),a?"Скопійовано!":"Скопіювати"]}),(0,_o.jsx)("button",{onClick:i,"aria-label":"Закрити",style:{background:"none",border:"none",color:s,cursor:"pointer",display:"inline-flex",padding:"2px"},children:(0,_o.jsx)(Yt,{size:30})})]})]}),e?(0,_o.jsxs)("div",{style:{whiteSpace:"normal",display:"flex",flexDirection:"column",gap:"16px"},children:[(0,_o.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px 20px",opacity:.85},children:[(0,_o.jsxs)(hd,{icon:(0,_o.jsx)(Ft,{}),color:"#00eeff",children:["Прогноз для ",e.locationNameGenitive||e.locationName]}),(0,_o.jsxs)(hd,{icon:(0,_o.jsx)(R,{}),color:"#aaa",children:["Час: ",t||"зараз"]})]}),(0,_o.jsx)(dd,{title:"Добовий баланс",icon:(0,_o.jsx)(Vt,{}),color:"#ffb36c",children:(0,_o.jsx)(hd,{icon:(0,_o.jsx)(he,{}),color:"#ffb36c",children:e.dayNight?.message})}),(0,_o.jsxs)(dd,{title:"Погодинні зміни",icon:(0,_o.jsx)(yt,{}),color:"#00b7ff",children:[(0,_o.jsx)(hd,{icon:(0,_o.jsx)(Tt,{}),color:"#14b8a6",children:e.hourlyData?.rainWindowText}),(0,_o.jsx)(hd,{icon:(0,_o.jsx)(_,{}),color:"#ff9d3b",children:e.hourlyData?.peakTempText}),(0,_o.jsx)(hd,{icon:(0,_o.jsx)(vt,{}),color:"#00b7ff",children:e.hourlyData?.windTrendText})]}),(0,_o.jsxs)(dd,{title:"Тижневий тренд",icon:(0,_o.jsx)(k,{}),color:"#b362ff",children:[(0,_o.jsx)(hd,{icon:(0,_o.jsx)(Ut,{}),color:"#b362ff",children:e.weeklyData?.trendText}),(0,_o.jsx)(hd,{icon:(0,_o.jsx)(U,{}),color:"#aaa",children:e.weeklyData?.weekSummaryText})]}),e.atmosphereNotes?.length>0&&(0,_o.jsx)(dd,{title:"Атмосферні фактори",icon:(0,_o.jsx)($e,{}),color:"#4da6ff",children:e.atmosphereNotes.map((e,t)=>(0,_o.jsxs)(hd,{icon:ld[e.type]||(0,_o.jsx)(H,{}),color:cd[e.type]||"#4da6ff",children:[(0,_o.jsxs)("b",{children:[e.title,":"]})," ",e.text]},t))}),e.lifestyleAdvice?.length>0&&(0,_o.jsx)(dd,{title:"Рекомендації та гардероб",icon:(0,_o.jsx)(le,{}),color:"#4ade80",children:e.lifestyleAdvice.map((e,t)=>(0,_o.jsxs)(hd,{icon:ld[e.type]||(0,_o.jsx)(le,{}),color:cd[e.type]||"#4ade80",children:[(0,_o.jsx)("b",{children:e.title})," ",e.text]},t))})]}):"Дані формуються..."]})}),document.body)},pd=({isDarkMode:e,onClose:t,contentRef:r})=>(0,_o.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",zIndex:1300,display:"flex",justifyContent:"center",alignItems:"center"},onClick:t,children:(0,_o.jsxs)("div",{ref:r,style:{background:e?"#222":"#fff",borderRadius:"10px",padding:"20px",width:"90%",maxWidth:"350px",color:e?"#fff":"#000"},onClick:e=>e.stopPropagation(),children:[(0,_o.jsx)("h3",{style:{margin:"0 0 15px 0"},children:"Налаштування картки"}),(0,_o.jsx)("p",{style:{fontSize:"13px",color:e?"#aaa":"#555",marginBottom:"15px"},children:"Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ."}),(0,_o.jsx)("button",{onClick:t,style:{width:"100%",padding:"10px",background:"#ffb36c",color:"#000",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Закрити"})]})}),xd=Eo.div`
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
`,ud=Eo.div`
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
`,gd=Eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`,md=Eo.div`
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
`,yd=Eo.div`
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
`,bd=Eo.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${e=>e.$active?"2px solid #ffb36c":"2px solid transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${md}, ${yd} {
      opacity: 1;
    }
  }
`,wd=Eo.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`,vd=({locationName:e,bgMode:t,onSelect:r,onClose:i})=>(0,_o.jsx)(xd,{onClick:i,children:(0,_o.jsxs)(ud,{onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)("h2",{style:{margin:0,color:"#ffb36c"},children:["Зміна фону: ",e]}),(0,_o.jsx)(gd,{children:bc.filter(e=>/\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(e.src||"")).map((e,i)=>(0,_o.jsxs)(bd,{$active:t===e.src,onClick:()=>r(e.src),children:[e.author&&(0,_o.jsxs)(yd,{children:[(0,_o.jsx)("div",{style:{fontWeight:"bold"},children:e.author}),e.source&&(0,_o.jsx)("div",{children:e.source})]}),(0,_o.jsx)(md,{children:e.name}),(0,_o.jsx)(wd,{src:e.src})]},i))}),(0,_o.jsx)("button",{onClick:i,style:{padding:"8px",background:"#ffb36c",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",marginTop:"10px"},children:"Закрити"})]})}),kd=Eo.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`,jd=Eo.div`
  background: ${e=>e.$isDarkMode?"#1c1c1f":"#fff"};
  color: ${e=>e.$isDarkMode?"#fff":"#000"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"};
  border-radius: 14px;
  width: 100%;
  max-width: 760px;
  max-height: 94vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`,Md=Eo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);
  flex-shrink: 0;
`,Sd=Eo.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 26px;
  cursor: pointer;
  display: inline-flex;
  padding: 2px;
  border-radius: 6px;
  opacity: 0.75;
  transition: transform 0.25s ease, background 0.2s, color 0.2s, opacity 0.2s;
  &:hover {
    opacity: 1;
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.15);
    transform: rotate(90deg);
  }
  &:active {
    transform: rotate(90deg) scale(0.9);
  }
`,$d=Eo.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,Dd=Eo.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
`,Cd=Eo.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
`,Ld=Eo.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  min-width: 0;
  background: ${e=>e.$isDarkMode?"#333":"#f9f9f9"};
  color: ${e=>e.$isDarkMode?"#fff":"#000"};
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: #ffd199;
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.3);
  }
`,Ad=Eo.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${e=>e.$isDarkMode?"#333":"#f9f9f9"};
  color: ${e=>e.$isDarkMode?"#fff":"#000"};
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: #ffd199;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.3);
  }
`,zd=Eo.button`
  background: linear-gradient(135deg, #ffb36c, #ff9a3d);
  border: none;
  border-radius: 5px;
  padding: 0 18px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #222;
  transition: transform 0.15s, box-shadow 0.2s, filter 0.2s;
  &:hover {
    transform: translateY(-1px) scale(1.06);
    box-shadow: 0 4px 14px rgba(255, 179, 108, 0.55);
    filter: brightness(1.08);
  }
  &:active {
    transform: scale(0.95);
  }
`,Id=Eo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.$isDarkMode?"#2b2b2f":"#eee"};
  border-left: 3px solid #ffb36c;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 12px;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  &:hover {
    transform: translateX(3px);
    background: ${e=>e.$isDarkMode?"#35353a":"#e2e2e2"};
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }
`,Ed=Eo.button`
  background: transparent;
  border: none;
  color: #ff5c5c;
  cursor: pointer;
  display: inline-flex;
  padding: 5px;
  border-radius: 50%;
  opacity: 0.75;
  transition: transform 0.15s, background 0.2s, opacity 0.2s;
  &:hover {
    opacity: 1;
    background: rgba(255, 92, 92, 0.18);
    transform: scale(1.15) rotate(-8deg);
  }
`,Nd=({onClose:e,isDarkMode:t,currentCardId:r})=>{const i=Zr(),a=Wr(e=>e.calendar?.customDays||[]),[n,s]=(0,Ar.useState)(""),[o,l]=(0,Ar.useState)("00:00"),[c,d]=(0,Ar.useState)(""),[h,f]=(0,Ar.useState)(1),[p,x]=(0,Ar.useState)("hours"),[u,g]=(0,Ar.useState)(r),m=a.filter(e=>"all"===e.cardId||e.cardId===r);(0,Ar.useEffect)(()=>{const t=t=>{"Escape"===t.key&&e()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e]);const y=()=>n&&c?c.length>30?alert("Назва занадто довга (макс 30)"):a.length>=3?alert("Максимум 3 події на користувача"):(i(Ra({id:Date.now(),date:n,time:o,reason:c,duration:Number(h),durationUnit:p,cardId:u})),s(""),void d("")):alert("Заповніть дату та назву");return(0,Cc.createPortal)((0,_o.jsx)(kd,{onClick:e,children:(0,_o.jsxs)(jd,{$isDarkMode:t,role:"dialog","aria-label":"Встановити дати",onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(Md,{children:[(0,_o.jsxs)("h3",{style:{margin:0,display:"flex",alignItems:"center",gap:"8px"},children:[(0,_o.jsx)(be,{style:{color:"#ffb36c"}})," Встановити дати"]}),(0,_o.jsx)(Sd,{onClick:e,"aria-label":"Закрити",children:(0,_o.jsx)(Yt,{})})]}),(0,_o.jsxs)($d,{children:[(0,_o.jsxs)(Dd,{children:[(0,_o.jsxs)(Cd,{children:[(0,_o.jsx)("label",{children:"Дата та Час початку"}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,_o.jsx)(Ld,{type:"date",$isDarkMode:t,value:n,onChange:e=>s(e.target.value),style:{flex:1}}),(0,_o.jsx)(Ld,{type:"time",$isDarkMode:t,value:o,onChange:e=>l(e.target.value)})]})]}),(0,_o.jsxs)(Cd,{children:[(0,_o.jsx)("label",{children:"Тривалість"}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,_o.jsx)(Ld,{type:"number",min:"1",max:"168",$isDarkMode:t,value:h,onChange:e=>f(e.target.value),style:{width:"80px"}}),(0,_o.jsxs)(Ad,{$isDarkMode:t,value:p,onChange:e=>x(e.target.value),children:[(0,_o.jsx)("option",{value:"hours",children:"Годин"}),(0,_o.jsx)("option",{value:"days",children:"Днів"})]})]})]}),(0,_o.jsxs)(Cd,{children:[(0,_o.jsx)("label",{children:"Застосувати для:"}),(0,_o.jsxs)(Ad,{$isDarkMode:t,value:u,onChange:e=>g(e.target.value),children:[(0,_o.jsx)("option",{value:"all",children:"Всіх карток"}),(0,_o.jsx)("option",{value:r,children:"Цієї картки"})]})]}),(0,_o.jsxs)(Cd,{children:[(0,_o.jsx)("label",{children:"Назва події (макс 30 симв.)"}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,_o.jsx)(Ld,{type:"text",placeholder:"Наприклад: Новий Рік",$isDarkMode:t,value:c,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y()},maxLength:30,style:{flex:1}}),(0,_o.jsx)(zd,{onClick:y,"aria-label":"Додати подію",children:"+"})]})]})]}),(0,_o.jsxs)(Dd,{children:[(0,_o.jsx)("h4",{style:{margin:0},children:"Наступаючі / триваючі події"}),(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[0===m.length&&(0,_o.jsx)("p",{style:{fontSize:"12px",opacity:.7,margin:0},children:"Немає подій"}),m.map(e=>(0,_o.jsxs)(Id,{$isDarkMode:t,children:[(0,_o.jsxs)("div",{children:[(0,_o.jsx)("b",{children:e.reason}),(0,_o.jsx)("br",{}),e.date," ",e.time," (",e.duration," ","days"===e.durationUnit?"дн":"год",")"]}),(0,_o.jsx)(Ed,{onClick:()=>i(Ta(e.id)),"aria-label":"Видалити подію",children:(0,_o.jsx)(Ht,{size:18})})]},e.id))]})]})]})]})}),document.body)},Rd={temp:"C",wind:"ms",pressure:"hpa",distance:"km",precip:"mm"},Td={...Rd},Fd={temp:"F",wind:"mph",pressure:"inhg",distance:"mi",precip:"in"},Pd=(e,t)=>Object.keys(Rd).every(r=>e?.[r]===t[r]),Vd=[{key:"temp",title:"Температура",options:[{key:"C",label:"°C",hint:"Цельсій (рекомендовано)"},{key:"K",label:"K",hint:"Кельвіни"},{key:"F",label:"°F",hint:"Фаренгейти"}]},{key:"wind",title:"Швидкість вітру",options:[{key:"ms",label:"м/с",hint:"Метри за секунду"},{key:"kmh",label:"км/год",hint:"Кілометри за годину"},{key:"mph",label:"миль/год",hint:"Милі за годину"},{key:"kn",label:"вуз.",hint:"Вузли"}]},{key:"pressure",title:"Атмосферний тиск",options:[{key:"hpa",label:"гПа",hint:"Гектопаскалі"},{key:"mmhg",label:"мм рт. ст.",hint:"Міліметри ртутного стовпа"},{key:"inhg",label:"inHg",hint:"Дюйми ртутного стовпа"},{key:"kpa",label:"кПа",hint:"Кілопаскалі"}]},{key:"distance",title:"Відстань і висота",options:[{key:"km",label:"км / м",hint:"Кілометри та метри"},{key:"mi",label:"милі / фути",hint:"Милі та фути"}]},{key:"precip",title:"Опади, сніг, випаровування",options:[{key:"mm",label:"мм / см",hint:"Міліметри та сантиметри"},{key:"in",label:"дюйми",hint:"Дюйми"}]}],_d=e=>{const t=parseFloat(e);return Number.isFinite(t)?t:null},Od=(e,t=1)=>{const r=10**t;return Math.round(e*r)/r},Bd=e=>"K"===e?"K":"F"===e?"°F":"°C",Hd={ms:1,kmh:3.6,mph:2.236936,kn:1.943844},qd={ms:"м/с",kmh:"км/год",mph:"миль/год",kn:"вуз."},Kd=e=>qd[e]||"м/с",Zd=(e,t)=>{const r=_d(e);return null===r?null:r*(Hd[t]??1)},Ud={hpa:1,kpa:.1,mmhg:.750062,inhg:.02953},Jd={hpa:"гПа",kpa:"кПа",mmhg:"мм рт. ст.",inhg:"inHg"},Wd=e=>Jd[e]||"гПа",Gd=e=>"mi"===e?"миль":"км",Yd=(e,t)=>{const r=_d(e);return null===r?null:"mi"===t?.621371*r:r},Qd=(e,t,r,i=!0)=>null===e?"—":`${Od(e,r)}${i?" ":""}${t}`,Xd=e=>{const t={...Rd,...e||{}};return{units:t,temp:e=>{const r=((e,t)=>{const r=_d(e);return null===r?null:"F"===t?9*r/5+32:"K"===t?r+273.15:r})(e,t.temp);return null===r?"—":"F"===t.temp?`${Math.round(r)}°F`:Qd(r,Bd(t.temp),1,!1)},wind:(e,r=1)=>Qd(Zd(e,t.wind),Kd(t.wind),r),pressure:e=>{const r="inhg"===t.pressure?2:"kpa"===t.pressure?1:0;return Qd(((e,t)=>{const r=_d(e);return null===r?null:r*(Ud[t]??1)})(e,t.pressure),Wd(t.pressure),r)},precip:(e,r=1)=>Qd(((e,t)=>{const r=_d(e);return null===r?null:"in"===t?r/25.4:r})(e,t.precip),(e=>"in"===e?"in":"мм")(t.precip),"in"===t.precip?2:r),snow:(e,r=1)=>Qd(((e,t)=>{const r=_d(e);return null===r?null:"in"===t?r/2.54:r})(e,t.precip),(e=>"in"===e?"in":"см")(t.precip),"in"===t.precip?2:r),visibility:e=>Qd(Yd(e,t.distance),Gd(t.distance),1),height:e=>Qd(((e,t)=>{const r=_d(e);return null===r?null:"mi"===t?3.28084*r:r})(e,t.distance),(e=>"mi"===e?"ft":"м")(t.distance),0),windValue:e=>Od(Zd(e,t.wind)??0,1),windAxis:`Вітер (${Kd(t.wind)})`}},eh={temp:{icon:(0,_o.jsx)(ut,{}),color:"#ffb36c",example:e=>e.temp(20)},wind:{icon:(0,_o.jsx)(vt,{}),color:"#00b7ff",example:e=>e.wind(5)},pressure:{icon:(0,_o.jsx)(Ne,{}),color:"#b362ff",example:e=>e.pressure(1013)},distance:{icon:(0,_o.jsx)(Qe,{}),color:"#4ade80",example:e=>`${e.visibility(10)} · ${e.height(1e3)}`},precip:{icon:(0,_o.jsx)(ae,{}),color:"#14b8a6",example:e=>`${e.precip(2.5)} · ${e.snow(10)}`}},th=[{key:"temp",title:"Температура",lines:["°F = °C × 9/5 + 32","K = °C + 273,15"],advice:"°C — найзручніша для повсякденного життя, нуль збігається з замерзанням води. °F має сенс лише якщо ви звикли до американської шкали. K потрібні майже виключно в науці."},{key:"wind",title:"Швидкість вітру",lines:["км/год = м/с × 3,6","миль/год = м/с × 2,237","вузли = м/с × 1,944"],advice:"м/с — стандарт метеорологів. км/год легше уявити в порівнянні з авто, вузли потрібні морякам і пілотам."},{key:"pressure",title:"Атмосферний тиск",lines:["мм рт. ст. = гПа × 0,750","кПа = гПа ÷ 10","inHg = гПа × 0,02953"],advice:"Норма — приблизно 1013 гПа, або 760 мм рт. ст. В Україні звична мм рт. ст., у прогнозах і на графіках — гПа. inHg потрібні лише для американських джерел."},{key:"distance",title:"Відстань і висота",lines:["милі = км × 0,6214","фути = м × 3,281"],advice:"Міняйте на милі/фути тільки якщо звикли до них, наприклад під час подорожі до США чи Британії."},{key:"precip",title:"Опади і сніг",lines:["дюйми (опади) = мм ÷ 25,4","дюйми (сніг) = см ÷ 2,54"],advice:"Мм краще для опадів: 1 мм = 1 літр води на кв. метр. Дюйми дають дрібні числа (0,04 in), тому їх складніше читати."}],rh=[{key:"metric",label:"Метрична",hint:"°C, м/с, гПа, км, мм",icon:(0,_o.jsx)(ke,{}),units:Td},{key:"imperial",label:"Імперська",hint:"°F, миль/год, inHg, милі, дюйми",icon:(0,_o.jsx)(pr,{}),units:Fd},{key:"custom",label:"Користувацька",hint:"Обрати кожну одиницю окремо",icon:(0,_o.jsx)(Jt,{})}],ih=Eo.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`,ah=Eo.div`
  background: ${e=>e.$isDarkMode?"#1c1c1f":"#fff"};
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"};
  border-radius: 14px;
  box-sizing: border-box;
  width: 95vw;
  height: 95vh;
  overflow-y: auto;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  /* При фіксованій висоті flex-діти інакше стискаються й шапка з кнопкою зникає */
  & > * {
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`,nh=Eo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -20px;
  z-index: 2;
  margin: -20px -22px 0;
  padding: 14px 22px;
  background: inherit;

  @media (max-width: 600px) {
    top: -16px;
    margin: -16px -16px 0;
    padding: 12px 16px;
  }
`,sh=Eo.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  display: inline-flex;
  padding: 6px;
  border-radius: 6px;
  &:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.2);
  }
`,oh=Eo.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 8px;
`,lh=Eo.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ch=Eo.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 8px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${e=>e.$active?"#00eeff":e.$isDarkMode?"#444":"#ccc"};
  background: ${e=>e.$active?e.$isDarkMode?"rgba(0,238,255,0.15)":"rgba(0,140,255,0.12)":"transparent"};
  color: inherit;
  transition: all 0.15s;
  &:hover {
    border-color: #00eeff;
  }
  .icon {
    font-size: 20px;
    color: ${e=>e.$active?"#00eeff":"inherit"};
  }
  .label {
    font-size: 14px;
    font-weight: ${e=>e.$active?700:500};
  }
  .hint {
    font-size: 11px;
    opacity: 0.6;
    text-align: center;
  }
`,dh=Eo.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  /* Непарна остання картка розтягується на всю ширину */
  & > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,hh=Eo.div`
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.025)"};
  border-left: 3px solid ${e=>e.$color};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,fh=Eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  .icon {
    display: inline-flex;
    font-size: 18px;
    color: ${e=>e.$color};
  }
  .example {
    margin-left: auto;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.65;
    white-space: nowrap;
  }
`,ph=Eo.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,xh=Eo.button`
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${e=>e.$active?"#00eeff":e.$isDarkMode?"#555":"#bbb"};
  background: ${e=>e.$active?e.$isDarkMode?"#00eeff":"#008cff":"transparent"};
  color: ${e=>e.$active?"#000":"inherit"};
  font-weight: ${e=>e.$active?700:400};
  transition: all 0.15s;
  &:hover {
    border-color: #00eeff;
  }
`,uh=Eo.details`
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 10px;
  padding: 10px 12px;

  summary {
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
  }
  .formula-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 12px;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
  .formula-card {
    border-left: 3px solid ${e=>e.$isDarkMode?"#00eeff":"#008cff"};
    padding-left: 10px;
    font-size: 13px;
    line-height: 1.45;
    &:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
  .formula-card strong {
    display: block;
    margin-bottom: 2px;
  }
  .formula-card code {
    display: block;
    font-family: Consolas, monospace;
  }
  .formula-card p {
    margin: 6px 0 0;
    opacity: 0.75;
  }
  .general {
    margin: 12px 0 0;
    font-size: 12px;
    opacity: 0.7;
  }
`,gh=Eo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,mh=Eo.div`
  font-size: 13px;
  opacity: 0.8;
`,yh=Eo.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ffb36c;
  background: transparent;
  color: ${e=>e.$isDarkMode?"#ffb36c":"#333"};
`,bh=Eo.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
  & > ${oh} {
    margin-bottom: 0;
  }
  .hint {
    font-size: 12px;
    opacity: 0.65;
  }
`,wh=Eo.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${e=>e.$active?"#00eeff":e.$isDarkMode?"#444":"#ccc"};
  background: ${e=>e.$active?e.$isDarkMode?"rgba(0,238,255,0.12)":"rgba(0,140,255,0.1)":"transparent"};
  input {
    accent-color: #00eeff;
    width: 16px;
    height: 16px;
    margin: 0;
  }
`,vh=({units:e,onChange:t,onClose:r,isDarkMode:i,allCards:a=!0,onToggleAllCards:n})=>{const[s,o]=(0,Ar.useState)(!1),l=s?"custom":(e=>Pd(e,Td)?"metric":Pd(e,Fd)?"imperial":"custom")(e),c=Xd(e);return(0,Ar.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[r]),(0,Cc.createPortal)((0,_o.jsx)(ih,{onClick:r,children:(0,_o.jsxs)(ah,{$isDarkMode:i,role:"dialog","aria-label":"Одиниці виміру",onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(nh,{children:[(0,_o.jsxs)("h3",{style:{margin:0,display:"flex",alignItems:"center",gap:"8px"},children:[(0,_o.jsx)(Qe,{style:{color:"#00eeff"}})," Одиниці виміру"]}),(0,_o.jsx)(sh,{onClick:r,"aria-label":"Закрити",children:(0,_o.jsx)(Fe,{})})]}),(0,_o.jsxs)("div",{children:[(0,_o.jsxs)(bh,{children:[(0,_o.jsx)(oh,{children:"Система мір"}),n&&(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[(0,_o.jsx)("span",{className:"hint",children:a?"Одиниці однакові для всіх карток":"Одиниці діють лише для цієї картки"}),(0,_o.jsxs)(wh,{$active:a,$isDarkMode:i,children:[(0,_o.jsx)("input",{type:"checkbox",checked:a,onChange:e=>n(e.target.checked)}),"Для всіх карток"]})]})]}),(0,_o.jsx)(lh,{children:rh.map(e=>(0,_o.jsxs)(ch,{$active:l===e.key,$isDarkMode:i,onClick:()=>{o("custom"===e.key),e.units&&t({...e.units})},children:[(0,_o.jsx)("span",{className:"icon",children:e.icon}),(0,_o.jsx)("span",{className:"label",children:e.label}),(0,_o.jsx)("span",{className:"hint",children:e.hint})]},e.key))})]}),(0,_o.jsxs)("div",{children:[(0,_o.jsx)(oh,{children:"Окремі одиниці"}),(0,_o.jsx)(dh,{children:Vd.map(r=>{const a=eh[r.key];return(0,_o.jsxs)(hh,{$isDarkMode:i,$color:a.color,children:[(0,_o.jsxs)(fh,{$color:a.color,children:[(0,_o.jsx)("span",{className:"icon",children:a.icon}),r.title,(0,_o.jsx)("span",{className:"example",children:a.example(c)})]}),(0,_o.jsx)(ph,{children:r.options.map(a=>(0,_o.jsx)(xh,{$active:e[r.key]===a.key,$isDarkMode:i,title:a.hint,onClick:()=>(e=>{o(!1),t(e)})({...e,[r.key]:a.key}),children:a.label},a.key))})]},r.key)})})]}),(0,_o.jsxs)(uh,{$isDarkMode:i,children:[(0,_o.jsx)("summary",{children:"Як переводити одиниці і чи варто"}),(0,_o.jsx)("div",{className:"formula-list",children:th.map(e=>(0,_o.jsxs)("div",{className:"formula-card",children:[(0,_o.jsx)("strong",{children:e.title}),e.lines.map(e=>(0,_o.jsx)("code",{children:e},e)),(0,_o.jsx)("p",{children:e.advice})]},e.key))}),(0,_o.jsx)("p",{className:"general",children:"Дані завжди зберігаються в метричних одиницях, а перемикач лише перераховує числа для показу. Точність не втрачається, тому змінюйте одиницю вільно: це нічого не ламає. Якщо вагаєтесь, залиште метричну систему."})]}),(0,_o.jsxs)(gh,{children:[(0,_o.jsxs)(mh,{children:["Приклад: ",c.temp(20)," · ",c.wind(5)," · ",c.pressure(1013)]}),(0,_o.jsxs)(yh,{$isDarkMode:i,onClick:()=>{o(!1),t({...Rd})},children:[(0,_o.jsx)(zt,{})," Скинути до типових"]})]})]})}),document.body)},kh="units_settings",jh="units_useGlobal",Mh=e=>`units_settings_${e}`,Sh=(0,Ar.createContext)(),$h="domino_tutorial_seen",Dh="domino_tutorial_shown_count",Ch=({children:e})=>{const[t,r]=(0,Ar.useState)(!1),[i,a]=(0,Ar.useState)(0),[n,s]=(0,Ar.useState)(!1),o=(0,Ar.useRef)({});(0,Ar.useEffect)(()=>{let e,t,i=!1;return(async()=>{try{const e=new URLSearchParams(window.location.search);if(e.has("q")||e.has("city")||e.has("search")||e.has("query")||e.has("pohoda")||window.location.search.toLowerCase().includes("погода"))return s(!1),void r(!1)}catch(rm){}const a=await Po.default.getItem($h),n=await Po.default.getItem("domino_tutorial_prompt"),o=await Po.default.getItem(Dh)||0;i||a||n||(o>=2?await Po.default.setItem($h,!0):e=setTimeout(async()=>{await Po.default.setItem(Dh,o+1),s(!0),t=setTimeout(()=>s(!1),9e3)},6e3))})(),()=>{i=!0,clearTimeout(e),clearTimeout(t)}},[]);return(0,_o.jsx)(Sh.Provider,{value:{isActive:t,setIsActive:r,currentStep:i,setCurrentStep:a,refs:o,registerRef:(e,t)=>{t?o.current[e]=t:delete o.current[e]},nextStep:()=>{a(e=>e+1)},jumpToStep:e=>{a(e)},closeTutorial:()=>{r(!1),a(0)},showInitialModal:n,startTutorial:()=>{Po.default.setItem($h,!0),s(!1),r(!0),a(1)},skipTutorial:()=>{Po.default.setItem($h,!0),s(!1)}},children:e})},Lh=()=>(0,Ar.useContext)(Sh),{PI:Ah,sin:zh,cos:Ih,tan:Eh,asin:Nh,atan2:Rh,acos:Th,sqrt:Fh,abs:Ph,round:Vh}=Math,_h=Ah/180,Oh=864e5,Bh=2440588,Hh=2451545,qh=6378.14;function Kh(e){return new Date((e+.5-Bh)*Oh)}function Zh(e){return e.valueOf()/Oh-.5+Bh-Hh}function Uh(e){return e+function(e){const t=2e3+e/365.2425;let r;return t<1920?(r=t-1900,r*(1.494119+r*(r*(.0061966-197e-6*r)-.0598939))-2.79):t<1941?(r=t-1920,21.2+r*(.84493+r*(.0020936*r-.0761))):t<1961?(r=t-1950,29.07+r*(.407+r*(-1/233+r/2547))):t<1986?(r=t-1975,45.45+r*(1.067+r*(-1/260-r/718))):t<2005?(r=t-2e3,63.86+r*(.3345+r*(r*(.0017275+r*(651814e-9+2373599e-11*r))-.060374))):t<2050?(r=t-2e3,62.92+r*(.32217+.005589*r)):(r=(t-1820)/100,32*r*r-20-.5628*(2150-t))}(e)/86400}function Jh(e,t,r){return(Rh(zh(e),Ih(e)*zh(t)-Eh(r)*Ih(t))/_h+540)%360}function Wh(e,t,r){return Nh(zh(t)*zh(r)+Ih(t)*Ih(r)*Ih(e))}function Gh(e,t){return _h*(280.46061837+360.98564736629*e)-t}function Yh(e){return e<0&&(e=0),2967e-7/Eh(e+.00312536/(e+.08901179))}function Qh(e){const t=e/36525,r=_h*(280.46646+t*(36000.76983+3032e-7*t)),i=_h*(357.52911+t*(35999.05029-1537e-7*t)),a=zh(i),n=Ih(i),s=_h*(125.04-1934.136*t),o=r+_h*((1.914602-t*(.004817+14e-6*t))*a+2*(.019993-101e-6*t)*a*n+289e-6*a*(3-4*a*a))-_h*(.00569+.00478*zh(s)),l=_h*(23.439291-t*(.0130042+t*(16e-8-504e-9*t)))+.00256*_h*Ih(s);return{ra:Rh(Ih(l)*zh(o),Ih(o)),dec:Nh(zh(l)*zh(o))}}var Xh=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]],ef=9e-4;function tf(e){return e-2*Ah*Vh(e/(2*Ah))}function rf(e,t,r,i,a,n){const s=(zh(e)-zh(a)*zh(n))/(Ih(a)*Ih(n));if(s<-1||s>1)return NaN;let o=t+r*Th(s)/(2*Ah);for(let l=0;l<2;l++){const t=Qh(Uh(o)),r=tf(Gh(o,i)-t.ra),n=Wh(r,a,t.dec),s=Ih(a)*Ih(t.dec)*zh(r);if(Ph(s)<1e-6)break;o+=(n-e)/(2*Ah*s)}return o}function af(e,t,r,i=0){const a=_h*-r,n=_h*t,s=function(e){return-2.076*Fh(e)/60}(i),o=function(e,t){for(let r=0;r<3;r++)e-=tf(Gh(e,t)-Qh(Uh(e)).ra)/(2*Ah);return e}(Vh(Vh(Zh(e))-ef-a/(2*Ah))+ef+a/(2*Ah),a),l=Qh(Uh(o)).dec,c={solarNoon:Kh(o+Hh),nadir:Kh(o+Hh-.5)};for(const[d,h,f]of Xh){const e=(d+s)*_h,t=rf(e,o,-1,a,n,l),r=rf(e,o,1,a,n,l);c[h]=Number.isNaN(t)?null:Kh(t+Hh),c[f]=Number.isNaN(r)?null:Kh(r+Hh)}if(null===c.sunrise){const e=Wh(0,n,l),t=(Xh[0][0]+s)*_h;c.alwaysUp=e>t,c.alwaysDown=e<=t}return c}var nf=new Int32Array([0,0,1,0,6288774,-20905355,2,0,-1,0,1274027,-3699111,2,0,0,0,658314,-2955968,0,0,2,0,213618,-569925,0,1,0,0,-185116,48888,0,0,0,2,-114332,-3149,2,0,-2,0,58793,246158,2,-1,-1,0,57066,-152138,2,0,1,0,53322,-170733,2,-1,0,0,45758,-204586,0,1,-1,0,-40923,-129620,1,0,0,0,-34720,108743,0,1,1,0,-30383,104755,2,0,0,-2,15327,10321,0,0,1,2,-12528,0,0,0,1,-2,10980,79661,4,0,-1,0,10675,-34782,0,0,3,0,10034,-23210,4,0,-2,0,8548,-21636,2,1,-1,0,-7888,24208,2,1,0,0,-6766,30824,1,0,-1,0,-5163,-8379,1,1,0,0,4987,-16675,2,-1,1,0,4036,-12831,2,0,2,0,3994,-10445,4,0,0,0,3861,-11650,2,0,-3,0,3665,14403,0,1,-2,0,-2689,-7003,2,0,-1,2,-2602,0,2,-1,-2,0,2390,10056,1,0,1,0,-2348,6322,2,-2,0,0,2236,-9884,0,1,2,0,-2120,5751,0,2,0,0,-2069,0,2,-2,-1,0,2048,-4950,2,0,1,-2,-1773,4130,2,0,0,2,-1595,0,4,-1,-1,0,1215,-3958,0,0,2,2,-1110,0,3,0,-1,0,-892,3258,2,1,1,0,-810,2616,4,-1,-2,0,759,-1897,0,2,-1,0,-713,-2117,2,2,-1,0,-700,2354,2,1,-2,0,691,0,2,-1,0,-2,596,0,4,0,1,0,549,-1423,0,0,4,0,537,-1117,4,-1,0,0,520,-1571,1,0,-2,0,-487,-1739,2,1,0,-2,-399,0,0,0,2,-2,-381,-4421,1,1,1,0,351,0,3,0,-2,0,-340,0,4,0,-3,0,330,0,2,-1,2,0,327,0,0,2,1,0,-323,1165,1,1,-1,0,299,0,2,0,3,0,294,0,2,0,-1,-2,0,8752]),sf=new Int32Array([0,0,0,1,5128122,0,0,1,1,280602,0,0,1,-1,277693,2,0,0,-1,173237,2,0,-1,1,55413,2,0,-1,-1,46271,2,0,0,1,32573,0,0,2,1,17198,2,0,1,-1,9266,0,0,2,-1,8822,2,-1,0,-1,8216,2,0,-2,-1,4324,2,0,1,1,4200,2,1,0,-1,-3359,2,-1,-1,1,2463,2,-1,0,1,2211,2,-1,-1,-1,2065,0,1,-1,-1,-1870,4,0,-1,-1,1828,0,1,0,1,-1794,0,0,0,3,-1749,0,1,-1,1,-1565,1,0,0,1,-1491,0,1,1,1,-1475,0,1,1,-1,-1410,0,1,0,-1,-1344,1,0,0,-1,-1335,0,0,3,1,1107,4,0,0,-1,1021,4,0,-1,1,833,0,0,1,-3,777,4,0,-2,1,671,2,0,0,-3,607,2,0,2,-1,596,2,-1,1,-1,491,2,0,-2,1,-451,0,0,3,-1,439,2,0,2,1,422,2,0,-3,-1,421,2,1,-1,1,-366,2,1,0,1,-351,4,0,0,1,331,2,-1,1,1,315,2,-2,0,-1,302,0,0,1,3,-283,2,1,1,-1,-229,1,1,0,-1,223,1,1,0,1,223,0,1,-2,-1,-220,2,1,-1,-1,-220,1,0,1,1,-185,2,-1,-2,-1,181,0,1,2,1,-177,4,0,-2,-1,176,4,-1,-1,-1,166,1,0,1,-1,-164,4,0,1,-1,132,1,0,-1,-1,-119,4,-1,0,-1,115,2,-2,0,1,107]);function of(e){const t=e/36525,r=218.3164477+t*(481267.88123421+t*(t*(1/538841-t/65194e3)-.0015786)),i=119.75+131.849*t,a=53.09+479264.29*t,n=313.45+481266.484*t,s=1-t*(.002516+74e-7*t),o=_h*(297.8501921+t*(445267.1114034+t*(t*(1/545868-t/113065e3)-.0018819))),l=_h*(357.5291092+t*(35999.0502909+t*(t/2449e4-1536e-7))),c=_h*(134.9633964+t*(477198.8675055+t*(.0087414+t*(1/69699-t/14712e3)))),d=_h*(93.272095+t*(483202.0175233+t*(t*(-1/3526e3+t/86331e4)-.0036539)));let h=0,f=0,p=0;for(let w=0;w<nf.length;w+=6){const e=nf[w+1],t=nf[w]*o+e*l+nf[w+2]*c+nf[w+3]*d,r=1===e||-1===e?s:2===e||-2===e?s*s:1;h+=nf[w+4]*r*zh(t),f+=nf[w+5]*r*Ih(t)}for(let w=0;w<sf.length;w+=5){const e=sf[w+1],t=sf[w]*o+e*l+sf[w+2]*c+sf[w+3]*d,r=1===e||-1===e?s:2===e||-2===e?s*s:1;p+=sf[w+4]*r*zh(t)}const x=_h*i,u=_h*r;h+=3958*zh(x)+1962*zh(u-d)+318*zh(_h*a),p+=-2235*zh(u)+382*zh(_h*n)+175*zh(x-d)+175*zh(x+d)+127*zh(u-c)-115*zh(u+c);const{dpsi:g,eps:m}=function(e){const t=_h*(125.04452-1934.136261*e),r=_h*(280.4665+36000.7698*e),i=_h*(218.3165+481267.8813*e),a=(-17.2*zh(t)-1.32*zh(2*r)-.23*zh(2*i)+.21*zh(2*t))/3600,n=(9.2*Ih(t)+.57*Ih(2*r)+.1*Ih(2*i)-.09*Ih(2*t))/3600;return{dpsi:a,eps:_h*(23.439291-e*(.0130042+e*(16e-8-504e-9*e))+n)}}(t),y=_h*(r+h/1e6+g),b=_h*(p/1e6);return{ra:Rh(zh(y)*Ih(m)-Eh(b)*zh(m),Ih(y)),dec:Nh(zh(b)*Ih(m)+Ih(b)*zh(m)*zh(y)),dist:385000.56+f/1e3}}function lf(e=new Date){const t=Uh(Zh(e)),r=Qh(t),i=of(t),a=149598e3,n=Th(zh(r.dec)*zh(i.dec)+Ih(r.dec)*Ih(i.dec)*Ih(r.ra-i.ra)),s=Rh(a*zh(n),i.dist-a*Ih(n)),o=Rh(Ih(r.dec)*zh(r.ra-i.ra),zh(r.dec)*Ih(i.dec)-Ih(r.dec)*zh(i.dec)*Ih(r.ra-i.ra)),l=o<0;return{fraction:(1+Ih(s))/2,phase:.5+.5*s*(l?-1:1)/Ah,angle:o/_h,waxing:l}}function cf(e,t){return new Date(e.valueOf()+t*Oh/24)}function df(e,t,r){const i=function(e,t,r){const i=_h*-r,a=_h*t,n=Zh(e),s=of(Uh(n)),o=Gh(n,i)-s.ra,l=Wh(o,a,s.dec),c=l-Nh(qh/s.dist*Ih(l)),d=Rh(zh(o),Eh(a)*Ih(s.dec)-zh(s.dec)*Ih(o));return{azimuth:Jh(o,a,s.dec),altitude:(c+Yh(c))/_h,distance:s.dist,parallacticAngle:d/_h}}(e,t,r);return i.altitude+.2725*Nh(qh/i.distance)/_h+.09}function hf(e,t,r){for(let i=0;i<2;i++){e-=df(new Date(e),t,r)/((df(new Date(e+3e4),t,r)-df(new Date(e-3e4),t,r))/6e4)}return e}var ff=50.45,pf=30.52,xf=e=>{if(!e)return"—";const t=new Date(e);return isNaN(t.getTime())?"—":`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},uf=(e,t=50.45,r=30.52)=>{try{const i=af(new Date(e||Date.now()),t||ff,r||pf);return{civilDawn:xf(i.dawn),civilDusk:xf(i.dusk),nauticalDawn:xf(i.nauticalDawn),nauticalDusk:xf(i.nauticalDusk),astroDawn:xf(i.nightEnd),astroDusk:xf(i.night)}}catch(rm){return{civilDawn:"—",civilDusk:"—",nauticalDawn:"—",nauticalDusk:"—",astroDawn:"—",astroDusk:"—"}}},gf=[{at:0,name:"Молодик"},{at:.25,name:"Перша чверть"},{at:.5,name:"Повня"},{at:.75,name:"Остання чверть"}],mf=e=>e<.02||e>.98?"Молодик":e<.23?"Зростаючий серп":e<.27?"Перша чверть":e<.48?"Зростаючий місяць":e<.52?"Повня":e<.73?"Спадаючий місяць":e<.77?"Остання чверть":"Спадаючий серп",yf=e=>{const t=108e5;let r=lf(e).phase;for(let i=e.getTime()+t;i<e.getTime()+26784e5;i+=t){const e=lf(new Date(i)).phase;for(const t of gf)if(0===t.at?e<r:r<t.at&&e>=t.at)return{name:t.name,date:new Date(i)};r=e}return null},bf=(e,t,r=Date.now())=>{const i=e?new Date(e).getTime():NaN,a=t?new Date(t).getTime():NaN;return isNaN(i)||isNaN(a)||a<=i?{progress:null,isActive:!1}:r<=i?{progress:0,isActive:!1}:r>=a?{progress:1,isActive:!1}:{progress:(r-i)/(a-i),isActive:!0}},wf=(e,t=50.45,r=30.52)=>{try{const i=new Date(e||Date.now()),a=e=>{const i=af(e,t||ff,r||pf);return(i.sunset-i.sunrise)/6e4},n=Math.round(a(i)-a(new Date(i.getTime()-864e5)));return isNaN(n)?null:n}catch(rm){return null}},vf=(e,t=50.45,r=30.52)=>{try{const i=new Date(e||Date.now()),{phase:a,fraction:n}=lf(i),s=function(e,t,r){const i=new Date(e);i.setUTCHours(0,0,0,0);let a,n,s=df(i,t,r),o=s;for(let c=1;c<=24;c+=2){const e=df(cf(i,c),t,r),l=df(cf(i,c+1),t,r);o=Math.max(o,e,l);const d=(s+l)/2-e,h=(l-s)/2,f=-h/(2*d),p=h*h-4*d*e;let x=0,u=0,g=0;const m=(d*f+h)*f+e;if(p>=0){const e=Fh(p)/(2*Ph(d));u=f-e,g=f+e,Ph(u)<=1&&x++,Ph(g)<=1&&x++,u<-1&&(u=g)}if(1===x?s<0?a=c+u:n=c+u:2===x&&(a=c+(m<0?g:u),n=c+(m<0?u:g)),void 0!==a&&void 0!==n)break;s=l}const l={};return void 0!==a&&(l.rise=new Date(hf(cf(i,a).valueOf(),t,r))),void 0!==n&&(l.set=new Date(hf(cf(i,n).valueOf(),t,r))),void 0===a&&void 0===n&&(l.alwaysUp=o>0,l.alwaysDown=o<=0),l}(i,t||ff,r||pf);return{phase:a,fraction:n,name:mf(a),riseDate:s.rise||null,setDate:s.set||null,rise:s.rise?xf(s.rise):"Не сходить",set:s.set?xf(s.set):"Не заходить",nextPhase:yf(i)}}catch(rm){return null}},kf=(e,t)=>{if(!e||!t)return"—";const r=new Date(e),i=new Date(t);if(isNaN(r.getTime())||isNaN(i.getTime()))return"—";const a=i-r;return a<0?"—":`${Math.floor(a/36e5)}г ${Math.floor(a%36e5/6e4)}хв`},jf=(e,t)=>45===t||48===t||"number"==typeof e&&e<1e3,Mf=Fo`
  0%, 100% { transform: translateX(-1px) skewX(0deg); }
  50% { transform: translateX(3px) skewX(-8deg); }
`,Sf=Fo`
  to { transform: rotate(360deg); }
`,$f=(Fo`
  0%, 100% { transform: translateY(1px); }
  50% { transform: translateY(-2px); }
`,Fo`
  0%, 75% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`),Df=Fo`
  0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 0 transparent); }
  50% { opacity: 0.45; transform: scale(0.85); filter: drop-shadow(0 0 4px currentColor); }
`,Cf=Fo`
  0%, 100% { transform: rotate(-18deg); }
  50% { transform: rotate(18deg); }
`,Lf=Eo.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > svg {
    animation: ${e=>e.$kf} ${e=>e.$dur} ${e=>e.$ease||"ease-in-out"} infinite;
    transform-origin: center;
  }
  @media (prefers-reduced-motion: reduce) {
    & > svg {
      animation: none;
    }
  }
`,Af=({children:e})=>(0,_o.jsx)(Lf,{$kf:Mf,$dur:"1.8s",children:e}),zf=({children:e})=>(0,_o.jsx)(Lf,{$kf:Sf,$dur:"12s",$ease:"linear",children:e}),If=({children:e})=>(0,_o.jsx)(Lf,{$kf:$f,$dur:"3s",children:e}),Ef=({children:e})=>(0,_o.jsx)(Lf,{$kf:Df,$dur:"2.2s",children:e}),Nf=({children:e})=>(0,_o.jsx)(Lf,{$kf:Cf,$dur:"2.4s",children:e}),Rf=({phase:e=0,size:t=22})=>{const r=Math.cos(2*Math.PI*e),i=e<.5,a=e<.015||e>.985,n=`M 12 2 A 10 10 0 0 ${i?1:0} 12 22 A ${10*Math.abs(r)} 10 0 0 ${i?r>0?0:1:r>0?1:0} 12 2 Z`;return(0,_o.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,_o.jsx)("circle",{cx:12,cy:12,r:10,fill:"rgba(255,255,255,0.12)",stroke:"rgba(255,255,255,0.35)",strokeWidth:"0.8"}),!a&&(0,_o.jsx)("path",{d:n,fill:"#f3ead2",style:{filter:"drop-shadow(0 0 3px rgba(243,234,210,0.6))"}})]})},Tf=Eo.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  margin-top: 2px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font-size: 11px;
  line-height: 1.3;
`,Ff=Eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 12px;
  svg {
    font-size: 22px;
    flex-shrink: 0;
  }
`,Pf=Eo.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.85;
`,Vf=Eo.div`
  position: relative;
  height: 3px;
  margin: 4px 4px 2px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.18);
`,_f=Eo.div`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 2px;
  background: ${e=>e.$color};
`,Of=Eo.div`
  position: absolute;
  top: 50%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${e=>e.$color};
  box-shadow: 0 0 8px ${e=>e.$color};
`,Bf=Eo.div`
  font-size: 10px;
  opacity: 0.7;
`,Hf=({icon:e,title:t,riseLabel:r,setLabel:i,progress:a,isActive:n,color:s,footer:o})=>(0,_o.jsxs)(Tf,{children:[(0,_o.jsxs)(Ff,{children:[e,(0,_o.jsx)("span",{children:t})]}),(0,_o.jsxs)(Pf,{children:[(0,_o.jsxs)("span",{children:["Схід — ",r]}),(0,_o.jsxs)("span",{children:["Захід — ",i]})]}),null!==a&&(0,_o.jsxs)(Vf,{children:[(0,_o.jsx)(_f,{$color:s,style:{width:100*a+"%"}}),n&&(0,_o.jsx)(Of,{$color:s,style:{left:100*a+"%"}})]}),o&&(0,_o.jsx)(Bf,{children:o})]}),qf={width:"1em",height:"1em",viewBox:"0 0 24 24","aria-hidden":!0},Kf="M-12 0 q3 -1.6 6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 V20 H-12 Z",Zf=({humidity:e,waterColor:t="#4da6ff"})=>{const r=(e=>{const t=parseFloat(e);return!Number.isFinite(t)||t<=0?0:Math.min(4,Math.ceil(t/25))})(e),i=(0,Ar.useId)(),a=21-17*r/4;return(0,_o.jsxs)("svg",{...qf,children:[(0,_o.jsx)("defs",{children:(0,_o.jsx)("clipPath",{id:i,children:(0,_o.jsx)("path",{d:"M6 4h12l-1.6 17H7.6z"})})}),r>0&&(0,_o.jsx)("g",{clipPath:`url(#${i})`,children:(0,_o.jsxs)("g",{transform:`translate(0 ${a})`,children:[(0,_o.jsx)("path",{d:Kf,fill:t,children:(0,_o.jsx)("animateTransform",{attributeName:"transform",type:"translate",from:"0 0",to:"12 0",dur:"2.4s",repeatCount:"indefinite"})}),(0,_o.jsx)("path",{d:Kf,fill:t,opacity:"0.45",transform:"translate(0 1.2)",children:(0,_o.jsx)("animateTransform",{attributeName:"transform",type:"translate",from:"12 1.2",to:"0 1.2",dur:"3.6s",repeatCount:"indefinite"})})]})}),(0,_o.jsx)("path",{d:"M5 3h14l-1.8 18.2a1 1 0 0 1-1 .8H7.8a1 1 0 0 1-1-.8z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"})]})},Uf=({temp:e,mercuryColor:t="#ff9d3b"})=>{const r=(e=>{const t=parseFloat(e);return Number.isFinite(t)?t<-10?1:t<5?2:t<18?3:t<=28?4:5:3})(e),i=15-11*r/5;return(0,_o.jsxs)("svg",{...qf,children:[(0,_o.jsx)("rect",{x:"10.2",y:i,width:"3.6",height:15-i+2,fill:t}),(0,_o.jsx)("circle",{cx:"12",cy:"18",r:"2.9",fill:t}),(0,_o.jsx)("path",{d:"M9 14.2V4.5a3 3 0 0 1 6 0v9.7a5 5 0 1 1-6 0z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),[0,1,2,3,4].map(e=>(0,_o.jsx)("line",{x1:"17.2",x2:e%2?"18.6":"19.8",y1:5+2.4*e,y2:5+2.4*e,stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"},e))]})},Jf=[-70,-35,0,35,70],Wf=({pressure:e})=>{const t=(e=>{const t=parseFloat(e);return Number.isFinite(t)?t<995?0:t<1008?1:t<1018?2:t<1030?3:4:2})(e);return(0,_o.jsxs)("svg",{...qf,children:[(0,_o.jsx)("path",{d:"M2.5 18a9.5 9.5 0 0 1 19 0",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),Jf.map(e=>(0,_o.jsx)("line",{x1:"12",y1:"9.4",x2:"12",y2:"11",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",transform:`rotate(${e} 12 18)`},e)),(0,_o.jsx)("g",{style:{transform:`rotate(${Jf[t]}deg)`,transformOrigin:"12px 18px",transition:"transform 0.9s cubic-bezier(.34,1.56,.64,1)"},children:(0,_o.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"10.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),(0,_o.jsx)("circle",{cx:"12",cy:"18",r:"1.9",fill:"currentColor"}),(0,_o.jsx)("line",{x1:"3",y1:"21.5",x2:"21",y2:"21.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})},Gf=[{y:15.5,x1:4,x2:20,dx:1.6,dur:"3.2s"},{y:18.5,x1:6,x2:22,dx:-1.6,dur:"4s"},{y:21.5,x1:3,x2:17,dx:1.6,dur:"3.6s"}],Yf=e=>{const t=Math.max(0,Number(e)||0),r=.3+.7*Math.min(t/10,1),i=Math.min(1,Math.max(0,(t-30)/50)),a=Math.round(255+-178*i);return{opacity:r,color:0===i?"#80d4ff":`rgb(255, ${a}, ${a})`}},Qf=Fo`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Xf=Fo`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
`,ep=Eo.svg`
  .sun-outer {
    transform-origin: 12px 12px;
    animation: ${Qf} ${e=>e.$dur}s linear infinite;
  }
  .sun-core {
    transform-origin: 12px 12px;
    animation: ${Xf} 2.6s ease-in-out infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .sun-outer, .sun-core { animation: none; }
  }
`,tp=(e,t,r,i,a)=>Array.from({length:e},(n,s)=>{const o=(360*s/e+t)*(Math.PI/180),[l,c]=[Math.sin(o),-Math.cos(o)],[d,h]=[-c,l],f=(e,t)=>`${(12+l*e+d*t).toFixed(2)} ${(12+c*e+h*t).toFixed(2)}`;return`M${f(r,-a)}L${f(i,0)}L${f(r,a)}Z`}).join(""),rp=tp(8,22.5,8.6,11.8,1.1),ip=tp(8,0,6,9,1.4),ap=({uv:e})=>{const t=Number(e)||0,r=t<=0?30:Math.max(4,20-2*t);return(0,_o.jsxs)(ep,{...qf,$dur:r,children:[(0,_o.jsx)("path",{className:"sun-outer",d:rp,fill:"currentColor",opacity:"0.7"}),(0,_o.jsxs)("g",{className:"sun-core",children:[(0,_o.jsx)("path",{d:ip,fill:"currentColor"}),(0,_o.jsx)("circle",{cx:"12",cy:"12",r:"4.2",fill:"currentColor"})]})]})},np=(e,t,r=4,i=20)=>{const a=parseFloat(e),n=(t||[]).slice(1,r+1).map(e=>parseFloat(e?.cloud_cover)).filter(Number.isFinite);if(!Number.isFinite(a)||!n.length)return 0;const s=n.reduce((e,t)=>e+t,0)/n.length-a;return s>=i?1:s<=-i?-1:0},sp=Fo`
  0%, 40%, 100% { opacity: 0; }
  10%, 30% { opacity: 1; }
  20% { opacity: 0.2; }
`,op=Eo.span`
  position: relative;
  display: inline-flex;
`,lp=Eo.span`
  position: absolute;
  top: -4px;
  right: -8px;
  font-size: 0.45em;
  color: ${e=>e.$color};
  opacity: 0;
  animation: ${sp} 4s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`,cp=({cloudCover:e,trend:t})=>(0,_o.jsxs)(op,{children:[parseFloat(e)<50?(0,_o.jsx)(v,{}):(0,_o.jsx)(N,{}),0!==t&&(0,_o.jsx)(lp,{$color:t>0?"#4da6ff":"#ffd700",title:t>0?"Хмарність зросте":"Хмарність спадатиме",children:t>0?(0,_o.jsx)(se,{}):(0,_o.jsx)(A,{})})]}),dp=()=>(0,_o.jsxs)("svg",{...qf,children:[(0,_o.jsx)("path",{d:"M7 12.5a3.6 3.6 0 0 1-.4-7.2A5 5 0 0 1 16 6a3.3 3.3 0 0 1 .8 6.5z",fill:"currentColor"}),Gf.map(e=>(0,_o.jsx)("line",{x1:e.x1,x2:e.x2,y1:e.y,y2:e.y,stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",children:(0,_o.jsx)("animateTransform",{attributeName:"transform",type:"translate",values:`${-e.dx} 0;${e.dx} 0;${-e.dx} 0`,dur:e.dur,repeatCount:"indefinite"})},e.y))]}),hp="#ffc933",fp="#f4e9c1",pp="#4da6ff",xp="translate(3 -1) scale(.75)",up=Fo`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`,gp=Fo`0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); }`,mp=Fo`from { transform: translateX(-1.4px); } to { transform: translateX(1.4px); }`,yp=Fo`from { transform: translateX(1.6px); } to { transform: translateX(-1.6px); }`,bp=Fo`
  0% { transform: translateX(-26px); opacity: 0; }
  10%, 90% { opacity: 1; }
  100% { transform: translateX(50px); opacity: 0; }
`,wp=Fo`
  0% { transform: translateY(0); opacity: 0; }
  15% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translateY(6px); opacity: 0; }
`,vp=Fo`
  0% { transform: translate(-1px, 0); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translate(1px, 3px); }
  100% { transform: translate(-1px, 7px); opacity: 0; }
`,kp=Fo`
  0%, 55%, 100% { opacity: 0.25; }
  60%, 70% { opacity: 1; }
  65% { opacity: 0.4; }
`,jp=Fo`0%, 100% { opacity: 0.25; } 50% { opacity: 1; }`,Mp=Eo.svg`
  overflow: hidden;
  vertical-align: -0.125em;
  .rays { animation: ${up} 16s linear infinite; }
  .pulse { animation: ${gp} 3s ease-in-out infinite; }
  .driftA { animation: ${mp} 5s ease-in-out infinite alternate; }
  .driftB { animation: ${yp} 6.5s ease-in-out infinite alternate; }
  .run { animation: ${bp} 9s linear infinite; }
  .drop { animation: ${wp} 1s linear infinite; }
  .drop.fast { animation-duration: 0.7s; }
  .drop.slow { animation-duration: 1.7s; }
  .flake { animation: ${vp} 2.4s linear infinite; }
  .bolt { animation: ${kp} 2.6s linear infinite; }
  .star { animation: ${jp} 2.2s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
  }
`,Sp=({transform:e,cls:t,opacity:r,outline:i})=>(0,_o.jsx)("g",{transform:e,opacity:r,children:(0,_o.jsx)("g",{className:t,children:(0,_o.jsx)("path",{d:"M7 20a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 12.5 3.8 3.8 0 0 1 17.5 20z",fill:"currentColor",stroke:i?"rgba(0,0,0,0.5)":"none",strokeWidth:"0.9",paintOrder:"stroke"})})}),$p=({cx:e,cy:t,r:r,ray:i=1.3,len:a=1.6})=>(0,_o.jsxs)("g",{children:[(0,_o.jsx)("g",{className:"rays",style:{transformOrigin:`${e}px ${t}px`},children:Array.from({length:8},(n,s)=>(0,_o.jsx)("line",{x1:e,x2:e,y1:t-r-i,y2:t-r-i-a,stroke:hp,strokeWidth:r>4?1.6:1.2,strokeLinecap:"round",transform:`rotate(${45*s} ${e} ${t})`},s))}),(0,_o.jsx)("circle",{className:"pulse",cx:e,cy:t,r:r,fill:hp,style:{transformOrigin:`${e}px ${t}px`}})]}),Dp=({transform:e})=>(0,_o.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:fp,transform:e}),Cp=({xs:e,cls:t="",width:r=1.6,color:i=pp})=>e.map((e,a)=>(0,_o.jsx)("line",{className:`drop ${t}`,x1:e,y1:"15.5",x2:e-.9,y2:"18",stroke:i,strokeWidth:r,strokeLinecap:"round",style:{animationDelay:.37*a%1+"s"}},e)),Lp=({xs:e})=>e.map((e,t)=>(0,_o.jsx)("circle",{className:"drop slow",cx:e,cy:"16",r:"0.8",fill:pp,style:{animationDelay:.55*t+"s"}},e)),Ap=({xs:e})=>e.map((e,t)=>(0,_o.jsx)("circle",{className:"flake",cx:e,cy:"15.5",r:"1.05",fill:"#d6ecff",style:{animationDelay:.8*t+"s"}},e)),zp=[{y:15.5,x1:5,x2:19,cls:"driftA"},{y:18.5,x1:7,x2:21,cls:"driftB"},{y:21.5,x1:4,x2:17,cls:"driftA"}],Ip=e=>(e||"").replace(/^[^\p{L}]+/u,"").trim(),Ep=({item:e,code:t,isDay:r})=>{const i=t??e?.weather_code??(e=>{const t=`${e?.description||""} ${e?.iconPlaceholder||""}`.toLowerCase();return/сонячно|місячно/.test(t)?0:/мінлива/.test(t)?2:/туман/.test(t)?45:/мряка з/.test(t)?56:/мряка/.test(t)?51:/дощ з снігом/.test(t)?66:/зливовий дощ/.test(t)?80:/дощ/.test(t)?61:/сніж|сніг/.test(t)?71:/гроза/.test(t)?95:3.5})(e),a=r??(e=>{if(null!=e?.is_day)return Number(e.is_day)?1:0;const t=`${e?.description||""} ${e?.iconPlaceholder||""}`;if(/місячно|нічна|🌙/i.test(t))return 0;if(/мінлива/i.test(t)&&t.includes("☁"))return 0;const r=parseInt(e?.time,10);return Number.isFinite(r)?r>=6&&r<21?1:0:1})(e),n=(e=>0===e?"clear":e>=1&&e<=3?"partly":e>=45&&e<=48?"fog":e>=51&&e<=55?"drizzle":e>=56&&e<=57||e>=66&&e<=67?"sleet":e>=61&&e<=65?"rain":e>=71&&e<=77?"snow":e>=80&&e<=82?"showers":e>=85&&e<=86?"snow":e>=95&&e<=99?"thunder":"overcast")(i);let s;switch(n){case"clear":s=a?(0,_o.jsx)($p,{cx:12,cy:12,r:4.6,ray:1.6,len:2.2}):(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Dp,{}),[[18.5,5],[20.5,9.5],[15.5,2.5]].map(([e,t],r)=>(0,_o.jsx)("circle",{className:"star",cx:e,cy:t,r:"0.8",fill:fp,style:{animationDelay:.7*r+"s"}},r))]});break;case"partly":s=(0,_o.jsxs)(_o.Fragment,{children:[a?(0,_o.jsx)($p,{cx:16,cy:8,r:3.3,ray:1.2,len:1.5}):(0,_o.jsx)(Dp,{transform:"translate(10.5 0.5) scale(.5)"}),(0,_o.jsx)(Sp,{transform:"translate(0 7.5) scale(.5)",cls:"run",opacity:"0.55"}),(0,_o.jsx)(Sp,{transform:"translate(2 5) scale(.82)",cls:"driftA",outline:!0})]});break;case"fog":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftA"}),zp.map(e=>(0,_o.jsx)("g",{className:e.cls,children:(0,_o.jsx)("line",{x1:e.x1,x2:e.x2,y1:e.y,y2:e.y,stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:"0.85"})},e.y))]});break;case"drizzle":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftA"}),(0,_o.jsx)(Lp,{xs:[8.5,12,15.5]})]});break;case"rain":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftA"}),(0,_o.jsx)(Cp,{xs:[8.5,12,15.5]})]});break;case"showers":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftB"}),(0,_o.jsx)(Cp,{xs:[7.5,10.5,13.5,16.5],cls:"fast",width:1.9})]});break;case"sleet":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftA"}),(0,_o.jsx)(Cp,{xs:[8.5,15.5]}),(0,_o.jsx)(Ap,{xs:[12]})]});break;case"snow":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftB"}),(0,_o.jsx)(Ap,{xs:[8.5,12,15.5]})]});break;case"thunder":s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:xp,cls:"driftA"}),(0,_o.jsx)("path",{className:"bolt",d:"M13 13.5 9.2 19H12l-1 4.5 4.3-6H12.6z",fill:"#ffd700"})]});break;default:s=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Sp,{transform:"translate(6 -2.5) scale(.6)",cls:"driftB",opacity:"0.55"}),(0,_o.jsx)(Sp,{transform:"translate(1 3.5) scale(.88)",cls:"driftA",outline:!0})]})}return(0,_o.jsx)(Mp,{width:"1em",height:"1em",viewBox:"0 0 24 24","aria-hidden":"true",children:s})},Np=new Map,Rp=(e,t)=>{Np.size>400&&Np.clear(),Np.set(e,t)},Tp=(0,Ar.lazy)(()=>vr(()=>import("./WeatherLineChart-BWz6ncR3.js"),__vite__mapDeps([0,1,2,3,4,5]))),Fp=e=>(0,_o.jsx)(Ar.Suspense,{fallback:null,children:(0,_o.jsx)(Tp,{...e})}),Pp=Eo.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Vp=({content:e,children:t,placement:r="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,Ar.useState)(!1),s=(0,Ar.useRef)(null),{refs:o,floatingStyles:l,context:c}=Ie({open:a,onOpenChange:n,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:C,middleware:[ge(8),tr(),z({padding:5}),M({element:s})]}),{isMounted:d,styles:h}=pe(c,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),f=or(c,{move:!1}),p=Xt(c),x=st(c),u=ar(c,{role:"tooltip"}),{getReferenceProps:g,getFloatingProps:m}=_e([f,p,x,u]);if(!e)return t;const y=i?"#111111":"#ffffff";return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{ref:o.setReference,...g({onMouseLeave:()=>n(!1),onClick:()=>n(!1)}),style:{display:"inline-flex"},children:t}),d&&(0,_o.jsx)(dt,{children:(0,_o.jsxs)(Pp,{ref:o.setFloating,$isDarkMode:i,style:{...l,...h},...m(),children:[e,(0,_o.jsx)(jt,{ref:s,context:c,fill:y,stroke:"#00acb9",strokeWidth:1})]})})]})};Fo`from { opacity: 0; } to { opacity: 1; }`;var _p=({customDays:e,cardId:t})=>{const[r,i]=(0,Ar.useState)(new Date),a=e.filter(e=>"all"===e.cardId||e.cardId===t),n=a.length>0;return(0,Ar.useEffect)(()=>{if(!n)return;const e=setInterval(()=>i(new Date),1e3);return()=>clearInterval(e)},[n]),n?(0,_o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",padding:"10px",marginTop:"10px"},children:a.map(e=>{const t=new Date(`${e.date}T${e.time}:00`),i=new Date(t.getTime());"days"===e.durationUnit?i.setDate(i.getDate()+e.duration):i.setHours(i.getHours()+e.duration);const a=t-r,n=i-r;if(n<=0)return null;const s=e=>{const t=Math.floor(e/864e5),r=Math.floor(e/36e5%24),i=Math.floor(e/1e3/60%60),a=Math.floor(e/1e3%60);return`${t}дні:${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`};return(0,_o.jsxs)("div",{style:{background:"rgba(0,0,0,0.4)",color:"#00eaff",padding:"8px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:[e.reason,": ",a>0?`До події: ${s(a)}`:`Подія триватиме ще: ${s(n)}`]},e.id)})}):null};Fo`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;var Op=Fo`
  from { clip-path: inset(0 0 100% 0); }
  to { clip-path: inset(0 0 0 0); }
`,Bp=Fo`
  from { clip-path: inset(0 0 0 0); }
  to { clip-path: inset(0 0 100% 0); }
`,Hp=Eo.div`
  font-size: 20px;
  text-align: center;
  z-index: 400;
  width: 100px;
  margin-left: auto;
  padding: 5px 14px;
  position: relative;
    margin-bottom: 4px;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${e=>e.$isDarkMode?"white":"#000"};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
    background: ${e=>e.$isDarkMode?" rgba(0, 0, 0, 0.93)":"rgb(255, 255, 255)"};
     border: ${e=>e.$isDarkMode?"2px solid rgba(0, 255, 229, 0.6)":"2px solid rgba(0, 0, 0, 0.2)"};
    `,qp=Eo.div`
  background: ${e=>e.$isDarkMode?"#0000009e":"#f5f5f5aa"};
  position: relative;
  color: #fff;
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  min-width: 0;
  z-index: 100;
  max-width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${e=>e.$isMain?"1.5px solid #004cff":"1.5px solid #00fbff"};
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
  }
`,Kp=Eo.div`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgb(0, 238, 255);
  overflow: visible;
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${e=>e.$isMain?"#008cff":"skyblue"};
  }
`,Zp=Eo.div`
  position: relative;
  display: flex;
  align-self: stretch;
  align-items: stretch;
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
`,Up=Eo.div`
  gap: 4px;
  padding: 1px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  @media (min-width: 768px) {
    /* Заповнює рівно доступну висоту вкладки, без прокрутки */
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,Jp=Eo.div`
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
    background: ${e=>e.$isDarkMode?"rgba(10, 10, 18, 0.6)":"rgba(240, 244, 248, 0.8)"};
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 16px;
    padding: 14px;
    height: 595px;
  }
`,Wp=Eo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  background: ${e=>e.$image?`linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${e.$image}) center/cover no-repeat`:"transparent"};
  /* Телефон: однакова висота для всіх карток і вкладок */
  @media (max-width: 767px) {
    height: 620px;
  }
  @media (min-width: 768px) {
    height: 542px;
    padding: 0;
    overflow: hidden;
  }
`,Gp=Eo.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    /* Активна вкладка розтягується на всю висоту і не стискається */
    & > * {
      flex: 1 0 auto;
    }
  }
  /* Планшет і комп'ютер: вміст вкладки не обрізається, а прокручується вертикально */
  @media (min-width: 768px) {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }
`,Yp=Eo.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    height: 542px;
  }
`,Qp=Eo.div`
font-size: 17px;
font-weight: 700;
color: ${e=>e.$active?"#00eeff":"#fff"};
`,Xp=Eo.div`
font-size: 15px;
color: ${e=>e.$active?"#00eeff":"#fff"};
`,ex=Eo.div`
  position: relative;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: ${e=>e.$active?"2px solid #00eeff":"1px solid rgba(255, 255, 255, 0.15)"};
  box-shadow: ${e=>e.$active?"0 0 12px rgba(0, 238, 255, 0.5)":"0 2px 6px rgba(0, 0, 0, 0.3)"};
  background: ${e=>e.$bgImg?`linear-gradient(rgba(0, 0, 0, 0.69), rgba(0,0,0,0.7)), url(${e.$bgImg}) center/cover no-repeat`:e.$active?"linear-gradient(135deg, rgba(0, 238, 255, 0.25), rgba(15, 25, 45, 0.9))":"rgba(20, 20, 30, 0.7)"};
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  @media (min-width: 768px) {
    height: 124px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${e=>e.$active?"#00eeff":"rgba(0, 238, 255, 0.6)"};
  }
`,tx=Eo.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  gap: 2px;
  width: 100%;
  height: 84%;
  padding: 1px;
  box-sizing: border-box;
  @media (max-width: 767px) {
    height: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 3px;
    padding: 4px;
  }
`,rx=Eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: ${e=>e.$pad||"2px"};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,ix=Eo.div`
  font-size: ${e=>e.$size||"24px"};
  line-height: ${e=>e.$lh||"normal"};
  color: ${e=>e.$color||"inherit"};
  opacity: ${e=>e.$opacity??1};
  transform: ${e=>e.$rotate?`rotate(${e.$rotate}deg)`:"none"};
  display: ${e=>e.$rotate?"inline-block":"block"};
  @media (min-width: 1200px) {
    font-size: 44px;
  }
       @media (min-width: 768px) {
    font-size: 34px;
  }
`,ax=Eo.div`
  margin-top: ${e=>e.$mt||"5px"};
  font-size: ${e=>e.$size||"12px"};
  font-weight: ${e=>e.$weight||"bold"};
  text-align: center;
  line-height: ${e=>e.$lh||"normal"};
    @media (min-width: 1200px) {
    font-size: 16px;
  }
       @media (min-width: 768px) {
    font-size: 14px;
  }
`,nx=Eo.div`
  font-size: ${e=>e.$size||"10px"};
  font-weight: ${e=>e.$weight||"normal"};
  opacity: ${e=>e.$opacity||.8};
   @media (min-width: 1200px) {
    font-size: 14px;
  }
     @media (min-width: 768px) {
    font-size: 12px;
  }
`,sx=Eo.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid rgb(0, 238, 255);
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`,ox=Eo.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  align-self: stretch;
`,lx=Eo.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 10px;
  }
`,cx=Eo.div`
  width: ${e=>"number"==typeof e.$width?`${e.$width}px`:e.$width};
  height: ${e=>e.$height||"200px"};
`,dx={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"28px",padding:0,border:"1px solid rgba(0, 190, 235, 0.7)",borderRadius:"4px",background:"rgba(0, 0, 0, 0.35)",color:"#00bfff",cursor:"pointer"},hx=Eo(h.div)`
  /* Під тему: темна — чорний фон, світла — білий; рамка нейтральна */
  background: ${e=>e.$isDarkMode?"rgba(0, 0, 0, 0.88)":"rgba(255, 255, 255, 0.92)"};
  border: 2px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.12)"};
  padding: 14px;
  font-size: 15px;
  line-height: 1.6;
  color: ${e=>e.$isDarkMode?"#efefff":"#2a2a2a"};
  width: 100%;
  height: 497px;
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  /* Телефон: без власної прокрутки — прокручується вся вкладка */
  @media (max-width: 767px) {
    padding: 0 3px 3px;
    height: auto;
    overflow: visible;
  }
`,fx=Eo.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.1)"};
  @media (max-width: 767px) {
    margin-bottom: 10px;
    padding-top: 8px;
  }
`,px=Eo.div`
  display: flex;
  gap: 6px;
  @media (max-width: 767px) {
    .smart-full-report {
      display: none;
    }
  }
`,xx=Eo(T)`
  margin-left: auto;
  font-size: 18px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: rotate(${e=>e.$open?"180deg":"0deg"});
`;Eo.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: ${e=>e.$active?"1.5px solid #00f0ff":e.$isDarkMode?"1px solid rgba(255, 255, 255, 0.2)":"1px solid rgba(0, 0, 0, 0.15)"};
  background: ${e=>e.$active?e.$isDarkMode?"linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(138, 43, 226, 0.35))":"linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(138, 43, 226, 0.2))":e.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.04)"};
  color: ${e=>e.$active?e.$isDarkMode?"#00f0ff":"#0066cc":e.$isDarkMode?"#bbb":"#555"};
  transition: all 0.2s ease;
  &:hover {
    color: ${e=>e.$isDarkMode?"#fff":"#000"};
    border-color: #00f0ff;
    transform: translateY(-1px);
  }
`;var ux=Eo.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  background: ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.12)":"rgba(0, 180, 220, 0.15)"};
  color: ${e=>e.$isDarkMode?"#00eeff":"#007a99"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.35)":"rgba(0, 180, 220, 0.35)"};
`,gx=Eo.div`
  background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(245, 248, 252, 0.85)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
  border-left: 3.5px solid ${e=>e.$accent||"#00eeff"};
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 767px) {
    padding: 6px 8px;
    margin-bottom: 0;
  }
`,mx=Eo.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 1.25;
    gap: 8px;
    user-select: none;
    /* Іконка розділу більша, текст компактніший */
    & > svg:first-child {
      font-size: 20px !important;
      flex-shrink: 0;
    }
  }
`,yx=Eo.div`
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"#ddd":"#333"};
  white-space: pre-line;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 1.4;
  }
`,bx=Eo.div`
  display: inline-flex;
  align-items: center;
  background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.06)"};
  padding: 3px;
  gap: 2px;
  border: 2px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.95)":"rgb(255, 253, 253)"};
`,wx=Eo.button`
  background: ${e=>e.$active?e.$isDarkMode?"#8a2be2":"#7000df":"transparent"};
  color: ${e=>e.$active?"#ffffff":e.$isDarkMode?"#cccccc":"#f9f3f3"};
  border: none;
  padding: 4px 14px;
  font-size: 15px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$active?"0 2px 8px rgba(138, 43, 226, 0.4)":"none"};
`,vx=Eo.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  background: ${e=>e.$isDarkMode?"#222":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 8px 8px 0 0;
  display: grid;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${e=>e.$isClosing?Bp:Op} 0.35s
    ease forwards;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(522px - 100% - 6px);
grid-template-columns: repeat(2, 1fr);
  /* Перший ряд («Одиниці виміру») за висотою вмісту, решта ділять простір порівну */
  grid-template-rows: auto;
  grid-auto-rows: 1fr;
  & > :first-child {
    grid-column: span 2;
  }
  /* Останній пункт, що лишився сам у ряду, розтягується на всю ширину */
  & > :last-child:nth-child(even) {
    grid-column: 1 / -1;
  }
  @media (max-width: 767px) {
    /* Висота за вмістом, щоб усі пункти було видно; прокрутка лише на дуже низьких екранах */
    height: auto;
    max-height: 90vh;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: auto;
    /* Рядки за висотою вмісту, щоб пояснення не обрізались */
    grid-auto-rows: auto;
  }
`,kx=Eo.span`
  position: relative;
  display: inline-flex;
  font-size: 28px;
  width: 1em;
  height: 1em;

  & > svg {
    position: absolute;
    inset: 0;
    width: 1em;
    height: 1em;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  & > svg:first-child {
    opacity: ${e=>e.$open?0:1};
    transform: rotate(${e=>e.$open?"-90deg":"0deg"});
  }
  & > svg:last-child {
    opacity: ${e=>e.$open?1:0};
    transform: rotate(${e=>e.$open?"0deg":"90deg"});
  }
`,jx=Eo.button`
 text-align: center;
 padding:8px 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  background: transparent;
  font-size: 16px;
 gap: 6px;
  color: ${e=>e.$isDarkMode?"#020202":"#f1eeee"};
border: 1px solid ${e=>e.$isDarkMode?"#020202":"#f1eeee"};
  @media (max-width: 767px) {
    padding: 6px 4px;
    gap: 3px;
    font-size: 14px;
    line-height: 1.2;
  }
  @media (min-width: 768px) {
     padding:6px 20px;
      gap: 4px;
  }
svg {
    font-size: 24px;
    flex-shrink: 0;
   @media (max-width: 767px) {
    font-size: 20px;
  }
   @media (min-width: 768px) {
    font-size: 30px;
  }
}
`,Mx=bc.find(e=>"Туманний ліс"===e.name)?.src||bc[0].src,Sx=Eo.span`
  font-size: 11px;
  line-height: 1.25;
  font-weight: 400;
  opacity: 0.65;
  @media (max-width: 767px) {
    font-size: 10px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
`,$x=Eo.p`
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 2px 0 0;
  font-size: 11px;
  color: #fcfcfc;
  opacity: 0.85;
  svg {
    font-size: 13px;
    flex-shrink: 0;
  }
`,Dx=()=>(0,_o.jsxs)($x,{children:["Натисніть ",(0,_o.jsx)(W,{"aria-label":"шестерню"})," для своєї локації"]}),Cx=Eo.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
  /* Планшет і комп'ютер: плитки по 4 в ряд; неповний останній ряд розтягується на всю ширину */
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    & > :last-child:nth-child(4n + 1) {
      grid-column: 1 / -1;
    }
    & > :nth-last-child(2):nth-child(4n + 1),
    & > :last-child:nth-child(4n + 2) {
      grid-column: span 2;
    }
    & > :last-child:nth-child(4n + 3) {
      grid-column: span 2;
    }
  }
`,Lx=Eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-width: 0;
  min-height: 56px;
  padding: 5px 4px;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  svg {
    font-size: 22px;
    flex-shrink: 0;
    margin-bottom: 2px;
  }
`,Ax=Eo.div`
  font-size: 10px;
  line-height: 1.2;
  opacity: 0.75;
`,zx=Eo.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: anywhere;
  /* 4 плитки в ряд — значення трохи менші, щоб вміщались */
  @media (min-width: 768px) {
    font-size: 12px;
  }
`,Ix=({user:t,card:r,isDarkMode:i,isLocationEnabled:a,isExtremeTemp:n,isExtremeWind:s,isExtremeUV:o,index:l,totalCards:c,handleRefreshCard:d,handleDeleteCard:f,handleRenameCard:p,moveWeatherCard:x,setIsLocationEnabled:u,customHolidayName:g,currentTimeString:m,layout:y})=>{const b=Zr(),{registerRef:v}=Lh?.()||{registerRef:()=>{}},j=Wr(e=>e.calendar?.customDays||[]),[M,$]=(0,Ar.useState)(!1),[C,L]=(0,Ar.useState)(r.locationName),[A,z]=(0,Ar.useState)(null),[I,N]=(0,Ar.useState)(!1),[T,P]=(0,Ar.useState)(0),[V,O]=(0,Ar.useState)("charts"),[B,Z]=(0,Ar.useState)("charts"),[J,G]=(0,Ar.useState)(()=>"undefined"!=typeof window&&window.innerWidth<768);(0,Ar.useEffect)(()=>{const e=()=>G(window.innerWidth<768);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const Y=J?"250px":"380px",[Q,ee]=(0,Ar.useState)(["dayNight"]),te=e=>!J||Q.includes(e),ie=e=>ee(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),ae=e=>J?{role:"button",tabIndex:0,"aria-expanded":te(e),onClick:()=>ie(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),ie(e))},style:{cursor:"pointer"}}:{},se=e=>J?(0,_o.jsx)(xx,{$open:te(e)}):null,[ce,fe]=(0,Ar.useState)(Rd),[pe,xe]=(0,Ar.useState)(!0),ue=ce.temp,ge=Xd(ce),[me,ye]=(0,Ar.useState)(!1),[be,ke]=(0,Ar.useState)(m),$e=(0,Ar.useRef)(m);$e.current=m,(0,Ar.useEffect)(()=>{const e=setInterval(()=>ke($e.current),198e4);return()=>clearInterval(e)},[]);const De=(0,Ar.useMemo)(()=>xl(r,{unit:ue,currentTimeString:be}),[r,ue,be]),[ze,Ie]=(0,Ar.useState)(!1),Ee=new Date,Re=`${Ee.getFullYear()}-${String(Ee.getMonth()+1).padStart(2,"0")}-${String(Ee.getDate()).padStart(2,"0")}`,Te=e=>Boolean(e?.fullDate)&&e.fullDate<Re,Fe=(0,Ar.useMemo)(()=>{const e=r.daily16||r.daily||[];return ze?e:e.filter(e=>!(e?.fullDate&&e.fullDate<Re))},[r.daily16,r.daily,ze,Re]),Pe=(0,Ar.useMemo)(()=>Fe.map(e=>({twilight:uf(e.fullDate,r.lat,r.lon),moon:vf(e.fullDate,r.lat,r.lon),dayDiff:wf(e.fullDate,r.lat,r.lon)})),[Fe,r.lat,r.lon]),[Ve,_e]=(0,Ar.useState)(r.cityImage||""),[Oe,Be]=(0,Ar.useState)(Mx),[He,Ke]=(0,Ar.useState)(!1),[Ze,Ue]=(0,Ar.useState)(!1),[Je,We]=(0,Ar.useState)(!1),[Ge,Ye]=(0,Ar.useState)(!1);(0,Ar.useEffect)(()=>{(async e=>{const t=!1!==await Po.default.getItem(jh);if(!t&&void 0!==e){const r=await Po.default.getItem(Mh(e));if(r)return{useGlobal:t,units:{...Rd,...r}}}const r=await Po.default.getItem(kh);if(r)return{useGlobal:t,units:{...Rd,...r}};const i=await Po.default.getItem("temp_unit");return{useGlobal:t,units:i?{...Rd,temp:i}:{...Rd}}})(r.id).then(({useGlobal:e,units:t})=>{xe(e),fe(t)});const e=e=>{const t=e.detail;if(!((e,t)=>!!e?.units&&(void 0===e.cardId||e.cardId===t))(t,r.id))return;const i={...Rd,...t.units};fe(i),xe(t.useGlobal),t.useGlobal||void 0!==t.cardId||Po.default.setItem(Mh(r.id),i)};return window.addEventListener("unitsChanged",e),()=>window.removeEventListener("unitsChanged",e)},[r.id]);const Qe=e=>null==e||"—"===e?"—":isNaN(parseFloat(e))?e:ge.temp(e);(0,Ar.useEffect)(()=>{Po.default.getItem("gemini_api_key").then(e=>Ye(!!e));const e=e=>Ye(!!e.detail);return window.addEventListener("geminiKeyChanged",e),()=>window.removeEventListener("geminiKeyChanged",e)},[]);const Xe=()=>{We(!0),setTimeout(()=>{Ue(!1),We(!1)},350)},[et,tt]=(0,Ar.useState)(!1),[it,at]=(0,Ar.useState)({date:"",time:"",reason:"",duration:1,durationUnit:"hours",targetCard:"all"}),[st,ot]=(0,Ar.useState)(!1),[lt,ct]=(0,Ar.useState)("current"),[dt,ht]=(0,Ar.useState)(!1);(0,Ar.useEffect)(()=>{if(!r.isMain)return;const e=()=>ot(!0),t=()=>ot(!1);return window.addEventListener("domino-open-weather-settings",e),window.addEventListener("domino-close-weather-settings",t),()=>{window.removeEventListener("domino-open-weather-settings",e),window.removeEventListener("domino-close-weather-settings",t)}},[r.isMain]);const[ft,pt]=(0,Ar.useState)(!0),[ut,gt]=(0,Ar.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),mt=(0,Ar.useRef)(null),bt=(0,Ar.useRef)(null),wt=(0,Ar.useRef)(null),kt=(0,Ar.useRef)(null),jt=(0,Ar.useRef)(null),[Mt,St]=(0,Ar.useState)(null),[$t,Lt]=(0,Ar.useState)(!1),[zt,It]=(0,Ar.useState)({day:!1,night:!1,wind:!1}),[Et,Rt]=(0,Ar.useState)(12),[_t,Bt]=(0,Ar.useState)(Sc),[qt,Kt]=(0,Ar.useState)(!1),[Jt,Wt]=(0,Ar.useState)(null),[Gt,Qt]=(0,Ar.useState)(!1),[Xt,er]=(0,Ar.useState)("wind"),tr={wind:{label:"Вітер",axis:ge.windAxis,color:"#0099ff",rgb:"0, 153, 255",icon:(0,_o.jsx)(vt,{})},uv:{label:"УФ-індекс",axis:"УФ-індекс",color:"#a855f7",rgb:"168, 85, 247",icon:(0,_o.jsx)(Vt,{})},precip:{label:"Опади",axis:"Опади (%)",color:"#14b8a6",rgb:"20, 184, 166",icon:(0,_o.jsx)(Tt,{})},clouds:{label:"Хмарність",axis:"Хмарність (%)",color:"#9ca3af",rgb:"156, 163, 175",icon:(0,_o.jsx)(U,{})},visibility:{label:"Видимість",axis:`Видимість (${Gd(ce.distance)})`,color:"#7dd3fc",rgb:"125, 211, 252",icon:(0,_o.jsx)(Pt,{})}},rr=tr[Xt],ir="precip"===Xt||"clouds"===Xt,ar=(e,t)=>{switch(Xt){case"uv":return parseFloat(e.uv_index)||0;case"precip":return parseFloat(t?e.precipitation_probability_max:e.precipitation_probability)||0;case"clouds":{const r=t?e.cloud_cover_mean:e.cloud_cover;return null==r?null:r}case"visibility":{const r=t?e.visibility_min:e.visibility;return null==r?null:Math.round(10*Yd(r/1e3,ce.distance))/10}default:return 0}},nr=e=>"uv"===Xt?`УФ-індекс: ${(e||0).toFixed(1)}`:"precip"===Xt?`Ймовірність опадів: ${Math.round(e||0)}%`:"clouds"===Xt?`Хмарність: ${Math.round(e||0)}%`:"visibility"===Xt?`Видимість: ${e??"—"} ${Gd(ce.distance)}`:"",sr=e=>{It(t=>({...t,[e]:!t[e]}))},or={hourly:{day:"temp",wind:"right"},daily:{day:"day",night:"night",wind:"right"}},cr=e=>Object.fromEntries(Object.entries(zt).map(([t,r])=>{const i=_t[e][or[e][t]];return[t,r?i?.dimOpacity??.3:1]})),dr=cr("hourly"),hr=cr("daily"),fr=e=>{if(qt)return Po.default.setItem("chartLineStyles_global",e),void window.dispatchEvent(new CustomEvent("chartLineStylesChanged",{detail:{useGlobal:!0,styles:e}}));Bt(e),Po.default.setItem(`chartLineStyles_${r.id}`,e)},pr=()=>{const e=!Gt;Qt(e),Po.default.setItem(`dailyTrend_${r.id}`,e)};(0,Ar.useEffect)(()=>{const e=()=>{document.fullscreenElement?requestAnimationFrame(()=>{const e="hourly"===Mt?bt.current:jt.current;e?.resize(),e?.update("none")}):St(null)};return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)},[Mt]),(0,Ar.useEffect)(()=>{if(!Mt)return;const e=setTimeout(()=>{const e="hourly"===Mt?bt.current:jt.current;e?.resize(),e?.update("none")},100);return()=>clearTimeout(e)},[Mt]);const xr=async(t,r)=>{Lt(!0);const a=Mt===t,n=r.current;if(!n)return Lt(!1),null;let s=null,o=null;if(!a){const e=n.getBoundingClientRect();s=n.cloneNode(!0);const r=n.querySelectorAll("canvas"),i=s.querySelectorAll("canvas");r.forEach((e,t)=>{i[t]&&i[t].getContext("2d").drawImage(e,0,0)}),s.style.position="fixed",s.style.top=`${e.top}px`,s.style.left=`${e.left}px`,s.style.width=`${e.width}px`,s.style.height=`${e.height}px`,s.style.margin="0",s.style.zIndex="99998",s.style.pointerEvents="none",document.body.appendChild(s),o=document.createElement("div"),o.style.width=`${e.width}px`,o.style.height=`${e.height}px`,n.parentElement.insertBefore(o,n),St(t),await new Promise(e=>setTimeout(e,100))}const l=n.style.cssText,c=Math.max(n.scrollWidth,window.innerWidth,"hourly"===t?Tr:900),d=Math.max(n.scrollHeight,window.innerHeight,600);let h;n.style.cssText+=a?`\n        width: ${c}px !important;\n        height: ${d}px !important;\n        min-height: ${d}px !important;\n        max-width: none !important;\n        max-height: none !important;\n      `:`\n        position: fixed !important;\n        top: -9999px !important;\n        left: -9999px !important;\n        width: ${c}px !important;\n        height: ${d}px !important;\n        min-height: ${d}px !important;\n        max-width: none !important;\n        max-height: none !important;\n        z-index: -9999 !important;\n        background: ${i?"#000":"#f5f5f5"} !important;\n      `,await new Promise(e=>setTimeout(e,100));try{h=await(async(t,r,a)=>{if(!t.current)return null;const{default:n}=await vr(async()=>{const{default:t}=await import("./vendor-html2canvas-B-9fjxkU.js").then(t=>e(t.t()));return{default:t}},__vite__mapDeps([6,1]));return n(t.current,{backgroundColor:i?"#000000":"#f5f5f5",scale:2,useCORS:!0,allowTaint:!0,windowWidth:r||window.innerWidth,windowHeight:a||window.innerHeight})})(r,c,d)}finally{n.style.cssText=l,a||St(null),Lt(!1),s&&(await new Promise(e=>setTimeout(e,100)),s.remove(),o&&o.remove())}return h},ur=(e,t)=>(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",flexShrink:0},children:[(0,_o.jsx)(Vp,{content:"Стиль ліній графіка",isDarkMode:i,children:(0,_o.jsx)("button",{type:"button",onClick:()=>Wt(e),"aria-label":"Стиль ліній графіка",style:dx,children:(0,_o.jsx)(xt,{size:16})})}),"daily"===e&&(0,_o.jsx)(Vp,{content:Gt?`Сховати лінію тренду. ${Qr}`:"Показати лінію тренду температури",isDarkMode:i,children:(0,_o.jsxs)("button",{type:"button",onClick:pr,"aria-label":Gt?"Сховати лінію тренду":"Показати лінію тренду","aria-pressed":Gt,style:{...dx,width:"auto",gap:"4px",padding:"0 6px",fontSize:"11px",fontWeight:"bold",background:Gt?"rgba(0, 190, 235, 0.25)":dx.background},children:[(0,_o.jsx)(qe,{size:16}),Gt&&Xr]})}),(0,_o.jsx)(Vp,{content:Mt===e?"Вийти з повного екрана":"На весь екран",isDarkMode:i,children:(0,_o.jsx)("button",{type:"button",onClick:()=>(async(e,t)=>{document.fullscreenElement?await document.exitFullscreen():t.current?.requestFullscreen&&(St(e),await t.current.requestFullscreen())})(e,t),"aria-label":Mt===e?"Вийти з повного екрана":"На весь екран",style:dx,children:(0,_o.jsx)(Se,{size:16})})}),(0,_o.jsx)(Vp,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:i,children:(0,_o.jsx)("button",{type:"button",onClick:()=>(async(e,t)=>{const i=await xr(e,t);if(!i)return;const a=document.createElement("a");a.download=`${r.locationName}-${e}-chart.png`,a.href=i.toDataURL("image/png"),a.click()})(e,t),"aria-label":"Завантажити скріншот повноекранного графіка",style:dx,children:(0,_o.jsx)(K,{size:16})})})]}),gr=e=>(0,_o.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:`${Math.max(10,Et-1)}px`,alignItems:"center"},children:e.map(e=>"wind"===e.key?(0,_o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",border:`1px solid ${rr.color}`,borderRadius:"4px",background:i?"#222":"#fff",color:rr.color,opacity:zt.wind?.45:1,fontWeight:"bold"},children:[(0,_o.jsx)(Vp,{content:`Натисніть, щоб ${zt.wind?"показати":"сховати"} шкалу графіка`,isDarkMode:i,children:(0,_o.jsx)("button",{type:"button",onClick:()=>sr("wind"),"aria-label":"Сховати або показати праву шкалу",style:{display:"inline-flex",alignItems:"center",padding:"3px 4px 3px 6px",border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:"14px"},children:rr.icon})}),(0,_o.jsx)("select",{value:Xt,onChange:e=>er(e.target.value),"aria-label":"Показник правої осі графіка",style:{padding:"3px 2px",border:"none",background:"transparent",color:"inherit",fontSize:"inherit",fontWeight:"bold",cursor:"pointer",outline:"none"},children:Object.entries(tr).map(([e,t])=>(0,_o.jsx)("option",{value:e,style:{color:"#000"},children:t.label},e))})]},e.key):(0,_o.jsx)(Vp,{content:`Натисніть, щоб ${zt[e.key]?"показати":"сховати"} шкалу графіка ${e.label.toLowerCase()}`,isDarkMode:i,children:(0,_o.jsxs)("button",{type:"button",onClick:()=>sr(e.key),"aria-label":`Натисніть, щоб ${zt[e.key]?"показати":"сховати"} шкалу графіка ${e.label.toLowerCase()}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 6px",border:`1px solid ${e.color}`,borderRadius:"4px",background:i?"#222":"#fff",color:e.color,cursor:"pointer",opacity:zt[e.key]?.45:1,fontSize:"inherit",fontWeight:"bold"},children:[(0,_o.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:e.color}}),e.icon&&(0,_o.jsx)("span",{style:{display:"inline-flex",alignItems:"center",fontSize:"14px"},children:e.icon}),e.label]})},e.key))}),mr=(e,t,r)=>(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"nowrap",marginBottom:"4px"},children:[gr(r),ur(e,t)]});(0,Ar.useEffect)(()=>{if(wt.current){const e=setTimeout(()=>{wt.current&&(wt.current.scrollLeft=1300/18*2)},100);return()=>clearTimeout(e)}},[r.id,ft,ut]),(0,Ar.useEffect)(()=>{(async()=>{const e=await Po.default.getItem(`useGlobalLayout_${r.id}`);null!==e&&pt(e);const t=await Po.default.getItem(`localLayout_${r.id}`);t&&gt(t)})()},[r.id]),(0,Ar.useEffect)(()=>{(async()=>{const e=await Po.default.getItem(`bgMode_${r.id}`);e&&"wiki"!==e&&Be(e)})()},[r.id]),(0,Ar.useEffect)(()=>{(async()=>{const e=await Po.default.getItem(`legendFontSize_${r.id}`);e&&Rt(e)})()},[r.id]),(0,Ar.useEffect)(()=>{(async()=>{const e=!0===await Po.default.getItem("chartLineStyles_useGlobal"),t=await Po.default.getItem(e?"chartLineStyles_global":`chartLineStyles_${r.id}`);Kt(e),Bt($c(t));const i=await Po.default.getItem(`dailyTrend_${r.id}`);null!==i&&Qt(i)})();const e=e=>{const{useGlobal:t,styles:i}=e.detail||{},a=$c(i);Kt(t),Bt(a),t||Po.default.setItem(`chartLineStyles_${r.id}`,a)};return window.addEventListener("chartLineStylesChanged",e),()=>window.removeEventListener("chartLineStylesChanged",e)},[r.id]);const yr=()=>{u(!a),Xe()};(0,Ar.useEffect)(()=>{_e(Oe)},[Oe]),(0,Ar.useEffect)(()=>()=>{},[]);const[br,wr]=(0,Ar.useState)(!1),[kr,jr]=(0,Ar.useState)("");(0,Ar.useEffect)(()=>{wr(!1)},[A]);const Mr=(e,t=24,r=null,i=1)=>{let a=e;if(e&&"string"!=typeof e){const t=e.type?.name||"";a="FaSmog"===t?"☁️":"IoRainy"===t||"LiaCloudSunRainSolid"===t?"🌧️":"GiSnowing"===t?"❄️":"IoThunderstorm"===t?"⛈️":"FaSun"===t?"☀️":"BsMoonStarsFill"===t?"🌙":"FaCloudMoon"===t?"☁️":"FaCloudMoonRain"===t||"LiaCloudMoonRainSolid"===t?"🌧️":"☁️"}const n=`icon|${a}|${t}|${r}|${i}`,s=Np.get(n);if(s)return s;const o=document.createElement("canvas");Rp(n,o),o.width=t,o.height=t;const l=o.getContext("2d");return l.font=t-8+"px serif",l.textAlign="center",l.textBaseline="middle",l.fillStyle="rgba(0, 0, 0, 0.72)",l.globalAlpha=i,l.beginPath(),l.arc(t/2,t/2,.76*t,0,2*Math.PI),l.fill(),l.globalAlpha=i,l.fillStyle="#ffffff",l.fillText(a,t/2,t/2),r&&(l.fillStyle=r,l.font=`bold ${t/2}px Arial`,l.fillText("!",t-5,5)),o},Sr=(e,t=18,r=1)=>{const i=`arrow|${45*Math.round(((Number(e)||0)%360+360)%360/45)}|${t}|${r}`,a=Np.get(i);if(a)return a;const n=document.createElement("canvas");Rp(i,n);const s=t+12;n.width=s,n.height=s;const o=n.getContext("2d"),l=s/2,c=((Number(e)||0)%360+360)%360,d=45*Math.round(c/45)*Math.PI/180;return o.translate(l,l),o.rotate(d),o.fillStyle="rgba(0, 0, 0, 0.72)",o.globalAlpha=r,o.beginPath(),o.arc(0,0,.45*s,0,2*Math.PI),o.fill(),o.globalAlpha=r,o.fillStyle="#0099ff",o.strokeStyle="#ffffff",o.lineWidth=1.5,o.beginPath(),o.moveTo(0,.43*-t),o.lineTo(.2*t,.12*t),o.lineTo(.07*t,.08*t),o.lineTo(.07*t,.4*t),o.lineTo(.07*-t,.4*t),o.lineTo(.07*-t,.08*t),o.lineTo(.2*-t,.12*t),o.closePath(),o.fill(),o.stroke(),n},$r=e=>{const t=((Number(e)||0)%360+360)%360,r=45*Math.round(t/45);return wc(r%360)},Dr=()=>{C.trim()&&(p(r.id,C),$(!1))},Cr=((e=[])=>ll(e).map((e,t)=>{return t<1?{...e,chartAvailable:!0}:t<3?{...e,items:e.items.filter(e=>{const t=al(e);return null===t||t%3==0}),chartAvailable:!0}:{...e,items:(r=e.items,il.map(e=>{const t=r.filter(t=>{const r=al(t);return null!==r&&r>=e&&r<e+6});if(0===t.length)return null;const i={...t[0],time:`${nl[e]} ${String(e).padStart(2,"0")}:00`};return sl.forEach(e=>{const r=t.map(t=>Number(t[e])).filter(Number.isFinite);r.length&&(i[e]=r.reduce((e,t)=>e+t,0))}),ol.forEach(e=>{const r=t.map(t=>Number(t[e])).filter(Number.isFinite);r.length&&(i[e]=Math.max(...r))}),i}).filter(Boolean)),chartAvailable:!1};var r}))(r.hourly||[]),Lr=Cr[T]?.items||[],zr=!1!==Cr[T]?.chartAvailable,Ir=zr&&!J,Er="charts"!==V||Ir?V:"blocks",Nr="charts"===B&&J?"blocks":B,Rr="Графіки недоступні на телефоні",Tr=Math.max(873,35*(Lr?.length||24)),Fr="F"===ue?"°F":"K"===ue?"K":"°C",Pr=e=>Number.isFinite(e)?"F"===ue?Math.round(10*(9*e/5+32))/10:"K"===ue?Math.round(10*(e+273.15))/10:e:e,Vr={labels:Lr?.map(e=>e.time)||[],datasets:[{label:`Температура (${Fr})`,data:Lr?.map(e=>Pr(e.tempNum??0))||[],backgroundColor:`rgba(255, 179, 108, ${.2*dr.day})`,borderColor:`rgba(255, 179, 108, ${dr.day})`,hidden:0===dr.day,pointStyle:Lr?.map(e=>{let t=null;return(e.tempNum??0)>30?t="#ff0000":(e.tempNum??0)<-30?t="#004cff":(e.windNum??0)>10&&(t="#ff6a00"),Mr(e.iconSymbol??e.iconPlaceholder??"☁️",24,t,dr.day)}),...Dc(_t.hourly.temp,{tension:.4,pointRadius:12,fill:!0}),yAxisID:"y"},"wind"===Xt?{label:ge.windAxis,data:Lr?.map(e=>ge.windValue(e.windNum??0))||[],borderColor:`rgba(0, 190, 235, ${dr.wind})`,backgroundColor:`rgba(0, 190, 235, ${.1*dr.wind})`,hidden:0===dr.wind,pointBackgroundColor:Lr?.map(e=>(e.windNum??0)>10?"#ff6a00":`rgba(0, 190, 235, ${dr.wind})`)||[],pointStyle:Lr?.map(e=>Sr(e.wind_direction_10m,18,dr.wind))||[],...Dc(_t.hourly.right,{tension:.4,pointRadius:6,fill:!1}),yAxisID:"y1"}:{label:rr.axis,data:Lr?.map(e=>ar(e,!1))||[],borderColor:`rgba(${rr.rgb}, ${dr.wind})`,backgroundColor:`rgba(${rr.rgb}, ${.15*dr.wind})`,hidden:0===dr.wind,pointStyle:"circle",pointBackgroundColor:`rgba(${rr.rgb}, ${dr.wind})`,...Dc(_t.hourly.right,{tension:.4,pointRadius:4,fill:"precip"===Xt}),yAxisID:"y1"}]},_r=e=>0===e?"Ясно":e>=1&&e<=3?"Частково хмарно":e>=45&&e<=48?"Туман":e>=51&&e<=55?"Дрібна сяка":e>=61&&e<=65?"Дощ":e>=71&&e<=77?"Сніг":e>=80&&e<=82?"Шквальний дощ":e>=95&&e<=99?"Гроза":"Хмарно",Or={"01.01":"Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)","06.01":"Богоявлення / Водохреще (новий стиль)","07.01":"Різдво Христове (старий стиль)",12.01:"1 серія 'Реальної містики'. Ціла епоха розкриття містифікацій у 12 сезонів!",14.01:"Василя / Обрізання Господнє (старий стиль)",19.01:"Богоявлення / Водохреще (старий стиль)","02.02":"Стрітення Господнє (новий стиль)",14.02:"З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!",15.02:"Стрітення Господнє (старий стиль)","08.03":"Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)",20.03:"Весняне рівнодення. Сонце встало на сході, а індики вже на заході :)",25.03:"Благовіщення Пресвятої Богородиці (новий стиль)","01.04":"Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)","07.04":"Благовіщення Пресвятої Богородиці (старий стиль)",23.04:"День святого Юрія / Георгія (новий стиль)","01.05":"День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!","02.05":"З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)","06.05":"День святого Юрія / Георгія (старий стиль)","08.05":"День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм. Один не багатьох випадків коли я кажу про політику добре...","09.05":"День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.",27.05:"Випуск Dragon Village 3. Скачаєш? :)",29.05:"Особисте свято у цей день... Пробач, я теж маю секрети :)",10.06:"Вознесіння Господнє",20.06:"Трійця / П'ятдесятниця",21.06:"Просто літнє сонцестояння. Купив собі ескімо? :)",24.06:"Різдво Івана Хрестителя / Купала (новий стиль)",28.06:"День Конституції України",29.06:"Святих апостолів Петра і Павла (новий стиль)","07.07":"Різдво Івана Хрестителя / Івана Купала (старий стиль)",12.07:"Святих апостолів Петра і Павла (старий стиль)","01.08":"День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(","06.08":"Преображення Господнє / Спас (новий стиль)",15.08:"Успіння Пресвятої Богородиці (новий стиль)",19.08:"Преображення Господнє / Спас (старий стиль)",24.08:"День Незалежності України",28.08:"Успіння Пресвятої Богородиці (старий стиль)","01.09":"День знань. Цей день усі ненавидять, бо термін відпустки закінчився :(","08.09":"Різдво Пресвятої Богородиці (новий стиль)",11.09:"Випуск 1-ї серії м/с 'Динофроз'. Легенда...",14.09:"Воздвиження Хреста Господнього (новий стиль)",20.09:"Всесвітній день прибирання!",21.09:"Різдво Пресвятої Богородиці (старий стиль)",23.09:"Осіннє рівнодення. Древніус = Даркніс :)",27.09:"Воздвиження Хреста Господнього (старий стиль)","01.10":"Покрова Пресвятої Богородиці та День козацтва (новий стиль)","14.10":"Покрова Пресвятої Богородиці та День козацтва (старий стиль)","24.10":"Почався ретроградний Меркурій. Якщо синоптики помилилися з дощем — винні зірки, а не ми! :)","27.10":"День української писемності та мови. Напиши по максимуму каліграфічний лист.",19.11:"Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)",21.11:"Введення в храм Пресвятої Богородиці (новий стиль)",30.11:"День святого Андрія Первозванного (новий стиль)","04.12":"Введення в храм Пресвятої Богородиці (старий стиль)","06.12":"День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)",13.12:"День святого Андрія Первозванного (старий стиль)",19.12:"День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)",22.12:"Зимове сонцестояння. Найтемніший день. Як очі Марти...",25.12:"Різдво Христове (новий стиль)"},Br=e=>{if(!t?.birthDate||!e)return!1;const[,r,i]=t.birthDate.split("-"),[a,n]=e.split(".");return parseInt(i)===parseInt(a)&&parseInt(r)===parseInt(n)},Hr=(e,t,r)=>{const i=Or[e],a=(e=>{const t=e.toLowerCase();return t.includes("сб")||t.includes("нд")})(t),n=Br(e),s=j.find(e=>e.date===r);return i?{type:"holiday",color:"#ff6666",label:i+(a?" + Вихідний":"")}:n?{type:"birthday",color:"#e066ff",label:"З Днем Народження! 🎉",isRainbow:!0}:s?{type:"custom",color:"#00bfff",label:s.reason}:a?{type:"weekend",color:"#ff9966",label:"Вихідний"}:{type:"regular",color:null,label:""}},qr=(e,r,i)=>{const a=j.find(e=>e.date===i),n=(e=>{const t=new Date,r=new Date(e);r.setHours(0,0,0,0);const i=r.getTime()-t.getTime();if(i<=0)return null;const a=Math.floor(i/864e5),n=Math.floor(i%864e5/36e5);return a>0?`⏳ Залишилось: ${a}д ${n}г`:`⏳ Почнеться за ${n}г`})(i);if(a)return n?[`💙 Ваша подія: ${a.reason}`,`(${n})`]:[`💙 Ваша подія: ${a.reason}`];if(Br(e))return n?[`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈`,`(${n})`]:[`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈`];const s=Or[e];return s?n?[`✨ Вітаємо зі святом: ${s}!`,`(${n})`]:[`✨ Вітаємо зі святом: ${s}!`]:null},Kr=Fe?.map(e=>Pr(parseInt(e.temp_day)))||[],Ur=Fe?.map(e=>Pr(parseInt(e.temp_night)))||[],Jr=vc(Kr),Gr=vc(Ur),Yr=e=>{if(!e)return"—";const t=Math.round(10*e.slope)/10;return`${t>0?"+":""}${t}°`},Qr=`Тренд: день ${Yr(Jr)}/день, ніч ${Yr(Gr)}/день`,Xr=`${Yr(Jr)} / ${Yr(Gr)}`,ei=(e,t,r,i,a)=>({label:e,data:t.data,isTrend:!0,borderColor:`rgba(${r}, ${.9*i})`,hidden:0===i,pointRadius:0,pointHoverRadius:0,fill:!1,tension:0,...Dc(a),yAxisID:"y"}),ti=Gt?[Jr&&ei("Тренд (день)",Jr,"255, 179, 108",hr.day,_t.daily.trendDay),Gr&&ei("Тренд (ніч)",Gr,"255, 20, 147",hr.night,_t.daily.trendNight)].filter(Boolean):[],ri={labels:Fe?.map(e=>`${e.date}\n${e.day}`)||[],datasets:[{label:`День (${Fr})`,data:Kr,borderColor:`rgba(255, 179, 108, ${hr.day})`,backgroundColor:`rgba(255, 179, 108, ${.5*hr.day})`,hidden:0===hr.day,pointStyle:Fe?.map(e=>Mr(e.iconSymbol??e.iconPlaceholder,24,null,hr.day)),pointBorderColor:Fe?.map(e=>Hr(e.date,e.day,e.fullDate).color||"#ffb36c"),pointBorderWidth:Fe?.map(e=>Hr(e.date,e.day,e.fullDate).color?3:2),...Dc(_t.daily.day,{tension:.3,pointRadius:12,fill:!1}),yAxisID:"y"},{label:`Ніч (${Fr})`,data:Ur,borderColor:`rgba(255, 20, 147, ${hr.night})`,backgroundColor:`rgba(255, 20, 147, ${.2*hr.night})`,hidden:0===hr.night,pointStyle:"circle",...Dc(_t.daily.night,{tension:.3,pointRadius:4,fill:!1}),yAxisID:"y"},"wind"===Xt?{label:ge.windAxis,data:Fe?.map(e=>ge.windValue(parseFloat(e.wind_speed)||0))||[],borderColor:`rgba(0, 153, 255, ${hr.wind})`,backgroundColor:`rgba(0, 153, 255, ${.2*hr.wind})`,hidden:0===hr.wind,pointStyle:Fe?.map(e=>Sr(e.wind_direction_10m,18,hr.wind)),pointBorderColor:"#ffffff",pointBorderWidth:1.5,pointBackgroundColor:Fe?.map(e=>parseFloat(e.wind_speed)>10?"#ff6a00":"#0099ff"),...Dc(_t.daily.right,{tension:.3,pointRadius:6,fill:!1}),yAxisID:"y1"}:{label:rr.axis,data:Fe?.map(e=>ar(e,!0))||[],borderColor:`rgba(${rr.rgb}, ${hr.wind})`,backgroundColor:`rgba(${rr.rgb}, ${.2*hr.wind})`,hidden:0===hr.wind,pointStyle:"circle",pointBackgroundColor:`rgba(${rr.rgb}, ${hr.wind})`,...Dc(_t.daily.right,{tension:.3,pointRadius:4,fill:!1}),yAxisID:"y1"},...ti]},ii={animation:!$t&&void 0,responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,external:ni,filter:e=>!e.dataset.isTrend,callbacks:{title:e=>`⏰ Час: ${e[0].label}`,label:e=>{if(0===e.datasetIndex){const t=Lr?.[e.dataIndex]?.tempNum??0;let r=`Температура: ${Qe(t)}`,i=[];return t>30&&i.push("СПЕКА ☀️"),t<-30&&i.push("МОРОЗ ❄️"),i.length>0&&(r+=` ⚠️ ${i.join(", ")}`),r}if(1===e.datasetIndex&&"wind"!==Xt)return` ${nr(e.parsed.y)}`;if(1===e.datasetIndex){const t=Lr?.[e.dataIndex]?.windNum??0;let r=` Вітер: ${ge.wind(t)}`;t>10&&(r+=" ⚠️ СИЛЬНИЙ ВІТЕР");const i=Lr?.[e.dataIndex];return i&&(r+=` | ${$r(i.wind_direction_10m)} (${Math.round(i.wind_direction_10m||0)}°)`),r}return""},afterBody:e=>{if(0===e.length)return"";const t=e[0],r=Lr?.[t.dataIndex];return r?`Стан погоди: ${r.description||_r(r.weather_code)||Ip(r.iconPlaceholder)||"Погода"}`:""}}}},scales:{y:{beginAtZero:!1,title:{display:!0,text:`Температура (${Fr})`,color:"#ffb36c"},ticks:{color:i?"#aaa":"#888",font:{size:10}},grid:{color:i?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,...ir?{max:100}:{},title:{display:!0,text:rr.axis,color:"wind"===Xt?"rgba(0, 190, 235, 1)":rr.color},ticks:{color:"wind"===Xt?"rgba(0, 190, 235, 1)":rr.color,font:{size:10}},grid:{drawOnChartArea:!1}},x:{offset:!0,ticks:{color:"#fff",font:{size:10}},grid:{display:!1}}}},ai={...ii,plugins:{...ii.plugins,legend:{display:!1},tooltip:{...ii.plugins.tooltip,enabled:!1,external:ni,callbacks:{title:e=>{const t=Fe?.[e[0].dataIndex];if(!t)return e[0].label;const r=Hr(t.date,t.day,t.fullDate),i=qr(t.date,t.day,t.fullDate),a=`${t.date}${t.day.toLowerCase()}${r.label?` [${r.label}]`:""}`;return i?[...i,a]:a},label:e=>{const t=0===e.datasetIndex,r=1===e.datasetIndex,i=2===e.datasetIndex;if(t)return`☀️ День: ${Qe(parseInt(Fe?.[e.dataIndex]?.temp_day))}`;if(r)return`🌙 Ніч: ${Qe(parseInt(Fe?.[e.dataIndex]?.temp_night))}`;if(i&&"wind"!==Xt)return nr(e.parsed.y);if(i){const t=Fe?.[e.dataIndex],r=t?.wind_direction_10m||0;return`🌬️ Вітер: ${ge.wind(parseFloat(t?.wind_speed)||0)} | ${$r(r)} (${Math.round(r)}°)`}return""},afterBody:e=>{if(0===e.length)return"";const t=e[0],r=Fe?.[t.dataIndex];return r?`Стан погоди: ${r.description||_r(r.weather_code)||Ip(r.iconPlaceholder)||"—"}`:""}}}},scales:{...ii.scales,y:{beginAtZero:!1,title:{display:!0,text:`Температура (${Fr})`,color:"#ffb36c"},ticks:{color:i?"#aaa":"#888",font:{size:10}},grid:{color:i?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,...ir?{max:100}:{},title:{display:!0,text:rr.axis,color:rr.color},ticks:{color:rr.color,font:{size:10}},grid:{drawOnChartArea:!1}},x:{...ii.scales.x,ticks:{...ii.scales.x.ticks,color:e=>{if(!Fe||e.index>=Fe.length)return"#fff";const t=Fe[e.index];return Hr(t.date,t.day,t.fullDate).color||"#fff"},font:{...ii.scales.x.ticks.font,weight:e=>{if(!Fe||e.index>=Fe.length)return"normal";const t=Fe[e.index];return Hr(t.date,t.day,t.fullDate).color?"bold":"normal"}}}}},onClick:(e,t)=>{if(t.length>0){const e=t[0].index,r=Fe[e],i=Hr(r.date,r.day,r.fullDate);if("holiday"===i.type||"birthday"===i.type)z(r);else if("custom"===i.type)z(r),jr(i.label);else if(g.trim()){if(g.trim().length>12)return void alert("Назва свята занадто довга (макс. 12 символів)!");b(Ra({date:r.fullDate,reason:g.trim()}))}else z(r)}}};function ni(e){const{chart:t,tooltip:r}=e,i=document.fullscreenElement,a=i||document.body;let n=a.querySelector("#chartjs-external-tooltip");if(!n){const e=document.getElementById("chartjs-external-tooltip");e&&e.remove(),n=document.createElement("div"),n.id="chartjs-external-tooltip",n.style.position="fixed",n.style.zIndex="2147483647",n.style.maxWidth="min(280px, calc(100vw - 24px))",n.style.boxSizing="border-box",n.style.whiteSpace="pre-line",n.style.background="rgba(15, 15, 25, 0.92)",n.style.color="#fff",n.style.borderRadius="8px",n.style.padding="8px 12px",n.style.pointerEvents="none",n.style.transition="all 0.1s ease",n.style.boxShadow="0 8px 20px rgba(0,0,0,0.4)",n.style.border="1px solid rgba(255, 179, 108, 0.4)",n.style.fontSize="12px",n.style.backdropFilter="blur(6px)",n.setAttribute("role","dialog"),a.appendChild(n)}if(0===r.opacity||!t.isPointInArea({x:r.caretX,y:r.caretY}))return void(n.style.opacity="0");if(r.body){const e=r.title||[],t=r.body.map(e=>e.lines),i=r.afterBody||[];let a="";e.forEach(e=>{a+=`<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${e}</div>`}),t.forEach(e=>{a+=`<div style="margin-bottom: 2px;">${e}</div>`}),i.forEach(e=>{a+=`<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${e}</div>`}),n.innerHTML=a}const s=t.canvas.getBoundingClientRect(),o=n.offsetWidth,l=n.offsetHeight,c=i?i.clientWidth:window.innerWidth,d=i?i.clientHeight:window.innerHeight,h=Math.min(Math.max(12,s.left+r.caretX+10),c-o-12),f=Math.min(Math.max(12,s.top+r.caretY-l-10),d-l-12);n.style.opacity="1",n.style.left=`${h}px`,n.style.top=`${f}px`}const[si,oi]=(0,Ar.useState)(!1);(0,Ar.useEffect)(()=>{if(si)return;const e=setInterval(()=>{window.innerWidth>=768&&ct(e=>{const t=["current","hourly","daily","ai"];return t[(t.indexOf(e)+1)%t.length]})},6500);return()=>clearInterval(e)},[si]);const li=e=>null==e||""===e?"—":`${String(e).replace(/%/g,"")}%`,ci=e=>(0,_o.jsx)(Cx,{children:e.map(({icon:e,label:t,value:r,sub:i})=>(0,_o.jsxs)(Lx,{children:[e,(0,_o.jsx)(Ax,{children:t}),(0,_o.jsx)(zx,{children:r}),i&&(0,_o.jsx)(Ax,{children:i})]},t))});return(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,_o.jsx)(qp,{$isMain:r.isMain,$isDarkMode:i,children:(0,_o.jsxs)(Jp,{$isDarkMode:i,onMouseEnter:()=>oi(!0),onMouseLeave:()=>oi(!1),children:[(0,_o.jsxs)(Wp,{$image:Ve||r.cityImage,children:[(0,_o.jsxs)(Kp,{$isMain:r.isMain,style:{position:"relative",zIndex:300,background:i?"#040404":"rgb(246, 246, 246)"},children:[(0,_o.jsxs)("div",{children:[M?(0,_o.jsxs)(h.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,_o.jsx)("input",{type:"text",value:C,onChange:e=>L(e.target.value),onKeyDown:e=>{"Enter"===e.key?(e.preventDefault(),Dr()):"Escape"===e.key&&$(!1)},autoFocus:!0,style:{padding:"4px 10px",fontSize:"13px",fontWeight:"600",borderRadius:"8px",border:"1.5px solid #00eeff",background:i?"rgba(10, 15, 25, 0.9)":"#ffffff",color:i?"#ffffff":"#1a1a1a",outline:"none",boxShadow:"0 0 12px rgba(0, 238, 255, 0.4)"}}),(0,_o.jsx)(h.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:Dr,title:"Зберегти (Enter)","aria-label":"Зберегти",style:{background:"linear-gradient(135deg, #00eeff 0%, #008cff 100%)",color:"#000000",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 238, 255, 0.4)"},children:(0,_o.jsx)(je,{size:18})}),(0,_o.jsx)(h.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>$(!1),title:"Скасувати (Esc)","aria-label":"Скасувати",style:{background:"linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",color:"#ffffff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(255, 65, 108, 0.4)"},children:(0,_o.jsx)(Yt,{size:18})})]}):(0,_o.jsx)(Vp,{content:"Двічі клацніть, щоб змінити назву",isDarkMode:i,children:(0,_o.jsxs)("h3",{onDoubleClick:()=>$(!0),style:{display:"flex",alignItems:"center",gap:"8px",margin:0,cursor:"pointer",userSelect:"none"},children:[(0,_o.jsxs)("span",{style:{color:i?"white":"black",fontWeight:900},children:["#",l]}),(0,_o.jsx)("span",{style:{color:i?"white":"black",fontWeight:900},children:r.locationName})]})}),r.isMain&&r.isFallbackLocation&&(0,_o.jsx)(Dx,{}),(0,_o.jsxs)("p",{style:{fontSize:"10px",color:"#fcfcfc"},children:["Широта: ",r.lat?.toFixed(2),", Довгота: ",r.lon?.toFixed(2)]})]}),(0,_o.jsx)("div",{style:{position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center",flex:1,minWidth:0},children:(0,_o.jsx)(Zp,{style:{position:"relative",zIndex:2},children:(0,_o.jsx)(Vp,{content:"Налаштування картки",isDarkMode:i,children:(0,_o.jsx)("button",{ref:e=>{r.isMain&&v&&v("weatherGear",e)},onClick:()=>{window.dispatchEvent(new CustomEvent("domino-weather-gear-clicked")),Ze?Xe():Ue(!0)},"aria-label":"Налаштування картки",style:{padding:"5px",display:"inline-flex",height:"100%",boxSizing:"border-box",color:""+(i?"rgb(251, 251, 251)":"rgb(3, 3, 3)"),alignItems:"center",gap:"4px"},children:(0,_o.jsxs)(kx,{$open:Ze&&!Je,children:[(0,_o.jsx)(W,{}),(0,_o.jsx)(nt,{})]})})})})}),(Ze||Je)&&(0,_o.jsxs)(vx,{$isDarkMode:i,$isClosing:Je,children:[(0,_o.jsxs)(jx,{isDarkMode:i,onClick:()=>ye(!0),"aria-label":"Змінити одиниці виміру",style:{padding:"4px 12px",gap:"0"},children:[(0,_o.jsx)(D,{style:{color:"#ffb36c"}}),(0,_o.jsx)("span",{children:"Одиниці виміру"}),(0,_o.jsxs)("span",{style:{fontSize:"12px",opacity:.65},children:[Bd(ce.temp)," · ",Kd(ce.wind)," · ",Wd(ce.pressure)]})]}),!M&&(0,_o.jsxs)(jx,{isDarkMode:i,onClick:()=>{$(!0),Xe()},children:[(0,_o.jsx)(Ce,{})," Змінити назву",(0,_o.jsx)(Sx,{children:"Своя назва для цієї картки"})]}),(0,_o.jsxs)(jx,{isDarkMode:i,onClick:()=>{Ke(!0),Xe()},children:[(0,_o.jsx)(de,{})," Змінити фон",(0,_o.jsx)(Sx,{children:"Картинка позаду погоди"})]}),(0,_o.jsxs)(jx,{isDarkMode:i,onClick:()=>{tt(!0),Xe()},children:[(0,_o.jsx)(we,{})," Встановити дати",(0,_o.jsx)(Sx,{children:"Свої свята й події в прогнозі"})]}),(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"4px",padding:"6px",minWidth:0,borderBottom:"1px solid "+(i?"rgba(255, 255, 255, 0.98)":"rgb(0, 0, 0)")},children:[(0,_o.jsx)("button",{disabled:0===l,onClick:()=>{Xe(),x(r.id,-1)},style:{flex:1,background:"transparent",color:0===l?"grey":i?"#fff":"#000",fontSize:"13px",cursor:0===l?"default":"pointer"},children:"Зробити вище картку"}),(0,_o.jsx)("button",{disabled:l===c-1,onClick:()=>{Xe(),x(r.id,1)},style:{flex:1,background:"transparent",color:l===c-1?"grey":i?"#fff":"#000",fontSize:"13px",cursor:l===c-1?"default":"pointer"},children:"Зробити нижче картку"})]}),r.isMain?(0,_o.jsxs)(jx,{onClick:yr,onTouchEnd:e=>{e.preventDefault(),yr()},title:a?"Вимкнути GPS (зараз увімкнено)":"Увімкнути GPS (зараз вимкнено)",style:{background:a?"rgba(0,200,80,0.12)":"rgba(180,0,0,0.08)",border:"1px solid "+(a?"#00c84d":"#b30000"),color:a?"#00c84d":"#b30000",transition:"all 0.2s ease"},children:[(0,_o.jsx)(Ft,{style:{transform:"scale(1.12)"}})," ",a?"GPS Увімк.":"GPS Вимк.",(0,_o.jsx)(Sx,{children:a?"Погода там, де ви зараз":"Увімкніть, щоб бачити свою локацію"})]}):(0,_o.jsxs)(jx,{onClick:()=>{f(r.id)},style:{background:"transparent",color:"red"},children:[(0,_o.jsx)(Ht,{style:{transform:"scale(1.08)"}})," Видалити",(0,_o.jsx)(Sx,{children:"Прибрати цю картку"})]}),(0,_o.jsxs)(jx,{onClick:()=>{Xe(),Ge&&window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`weather-${r.id}`,type:"weather",title:r.locationName,details:`Місто: ${r.locationName}. Координати: ${r.lat?.toFixed(2)}, ${r.lon?.toFixed(2)}. Температура: ${r.current?.temp}°C, відчувається: ${r.current?.feels_like}°C. Вітер: ${r.current?.wind_speed} м/с. Вологість: ${r.current?.humidity}%. Тиск: ${r.current?.pressure} гПа.`}}))},style:{textAlign:"center",background:Ge?"linear-gradient(135deg, #5c1d3c, #62123d)":"rgba(120,120,120,0.3)",cursor:Ge?"pointer":"default"},children:[(0,_o.jsx)(ve,{style:{transform:"scale(1.2)"}})," Прикріпити до ШІ",(0,_o.jsx)(Sx,{children:Ge?"Запитати ШІ про цю погоду":"Потрібен ключ Gemini"})]})]})]}),(0,_o.jsx)(_p,{customDays:j,cardId:r.id}),(0,_o.jsx)(sx,{children:[{key:"current",label:"Зараз"},{key:"hourly",label:"Годинна"},{key:"daily",label:"Місячна"},{key:"ai",label:"Смарт"}].map(e=>(0,_o.jsx)("button",{onClick:()=>ct(e.key),style:{padding:"4px 2px",border:"none",borderBottom:lt===e.key?"2px solid #00eeff":"2px solid transparent",background:"transparent",color:lt===e.key?"#00eeff":i?"#aaa":"#555",fontWeight:lt===e.key?700:400,fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},children:e.label},e.key))}),(0,_o.jsxs)(Gp,{children:["current"===lt&&(0,_o.jsx)(Up,{style:{borderRadius:0},children:(0,_o.jsx)(ox,{style:{position:"relative",borderRadius:0,padding:"2px",background:"rgba(0, 0, 0, 0.43)"},children:(0,_o.jsxs)(tx,{children:[(0,_o.jsxs)(rx,{"aria-label":r.current.iconPlaceholder,children:[(0,_o.jsx)(ix,{$size:"32px",$lh:"1",children:(0,_o.jsx)(Ep,{item:r.current})}),(0,_o.jsx)(ax,{$size:"11px",$lh:"1.2",children:Ip(r.current.iconPlaceholder)||"Мінлива хмарність"})]}),(0,_o.jsxs)(rx,{"aria-label":"Температура / Відчувається як",children:[(0,_o.jsx)(ix,{$color:parseFloat(r.current.temp)<5?"#4da6ff":parseFloat(r.current.temp)>25?"#ff4d4d":"#ffb36c",children:(0,_o.jsx)(Uf,{temp:r.current.temp,mercuryColor:parseFloat(r.current.temp)<5?"#4da6ff":parseFloat(r.current.temp)>25?"#ff4d4d":"#ff9d3b"})}),(0,_o.jsxs)(ax,{$mt:"0px",children:[Qe(r.current.temp),(0,_o.jsxs)(nx,{$size:"9px",children:["Відчувається: ",Qe(r.current.feels_like)]})]})]}),(0,_o.jsxs)(rx,{"aria-label":"Відносна вологість",children:[(0,_o.jsx)(ix,{$color:"#a8d8ff",children:(0,_o.jsx)(Zf,{humidity:r.current.humidity})}),(0,_o.jsxs)(ax,{$mt:"10px",children:["Вологість: ",r.current.humidity??"—"]})]}),(0,_o.jsxs)(rx,{"aria-label":`Вітер: ${r.current.wind_speed}, Напрямок: ${r.current.wind_direction_10m}° (${wc(r.current.wind_direction_10m)}), Пориви: ${r.current.wind_gusts_10m} м/с`,children:[(0,_o.jsx)(ix,{$size:"28px",$color:"#00eeff",$rotate:45*Math.round((r.current.wind_direction_10m||0)/45)%360,children:"⬇"}),(0,_o.jsxs)(ax,{$mt:"-5px",children:["Швидкість вітру: ",ge.wind(r.current.windNum??r.current.wind_speed),(0,_o.jsxs)(nx,{children:[r.current.wind_direction_10m,"° ",wc(r.current.wind_direction_10m)]}),(0,_o.jsxs)(nx,{$weight:"bold",$opacity:.9,style:{color:s?"#ff4d4d":"inherit"},children:["Пориви: ",ge.wind(r.current.wind_gusts_10m)]})]})]}),(0,_o.jsx)(Vp,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:i,children:(0,_o.jsxs)(rx,{"aria-label":"Точка роси (температура, при якій утворюється роса)",children:[(0,_o.jsx)(ix,{$color:"#00ffcc",children:(0,_o.jsx)(rt,{})}),(0,_o.jsxs)(ax,{children:["Точка роси: ",Qe(r.current.dew_point_2m)]})]})}),(0,_o.jsxs)(rx,{"aria-label":"Атмосферний тиск",$pad:"10px",children:[(0,_o.jsx)(ix,{$color:parseFloat(r.current.pressure)<1e3?"#4da6ff":parseFloat(r.current.pressure)>1020?"#ff4d4d":"#ffb36c",children:(0,_o.jsx)(Wf,{pressure:r.current.pressure})}),(0,_o.jsxs)(ax,{children:["Атмосферний тиск: ",ge.pressure(r.current.pressure)]})]}),(0,_o.jsxs)(rx,{"aria-label":"Хмарність",children:[(0,_o.jsx)(ix,{$color:"#c3cfdc",children:(0,_o.jsx)(cp,{cloudCover:r.current.cloud_cover,trend:np(r.current.cloud_cover,r.hourly)})}),(0,_o.jsxs)(ax,{$size:"11px",children:["Хмарність: ",r.current.cloud_cover,"%"]})]}),(0,_o.jsxs)(rx,{"aria-label":"Видимість",$pad:"0px",children:[(0,_o.jsx)(ix,{$opacity:Math.min(1,Math.max(.3,(r.current.visibility||1e4)/1e4)),$color:(r.current.visibility||1e4)<2e3?"#ff4d4d":"#9fb3c8",children:(0,_o.jsx)(dp,{})}),(0,_o.jsxs)(ax,{$size:"10px",children:["Видимість: ",void 0!==r.current.visibility?ge.visibility(r.current.visibility/1e3):"—"]})]}),(0,_o.jsxs)(rx,{"aria-label":"УФ-індекс / Сонячна радіація",$pad:"10px",children:[(0,_o.jsx)(ix,{$color:(r.current.uv_index||0)>5?"#ff4d4d":(r.current.uv_index||0)>2?"#ff9900":"#ffd700",children:(0,_o.jsx)(ap,{uv:r.current.uv_index})}),(0,_o.jsxs)(ax,{$size:"10px",children:["УФ-індекс: ",r.current.uv_index??0]})]}),(0,_o.jsx)(Vp,{content:"Товщина снігового покриву (см)",isDarkMode:i,children:(0,_o.jsxs)(rx,{"aria-label":"Сніговий покрив",children:[(0,_o.jsx)(ix,{$color:Yf(100*(r.current.snow_depth||0)).color,$opacity:Yf(100*(r.current.snow_depth||0)).opacity,children:(0,_o.jsx)(Dt,{})}),(0,_o.jsxs)(ax,{$size:"10px",children:["Сніг: ",ge.snow(100*(r.current.snow_depth||0))]})]})}),(0,_o.jsx)(Vp,{content:"Температура ґрунту (0 см) та рівень 0°C ізотерми (висота замерзання)",isDarkMode:i,children:(0,_o.jsxs)(rx,{"aria-label":"Замерзання та температура ґрунту",children:[(0,_o.jsx)(ix,{$color:r.current.soil_temperature_0cm<=0?"#4da6ff":"#00cdff",children:(0,_o.jsx)(Nt,{})}),(0,_o.jsxs)(ax,{$size:"10px",children:["Ґрунт: ",void 0!==r.current.soil_temperature_0cm?Qe(r.current.soil_temperature_0cm):"—",(0,_o.jsxs)(nx,{$size:"9px",children:["Рівень 0°C: ",null!=r.current.freezing_level_height?ge.height(r.current.freezing_level_height):"—"]})]})]})}),(0,_o.jsx)(Vp,{content:"Випаровування (ET0, мм). Показує швидкість втрати вологи з ґрунту та рослин. Важливо для поливу саду/городу, оцінки висихання білизни та комфорту.",isDarkMode:i,children:(0,_o.jsxs)(rx,{"aria-label":"Випаровування",children:[(0,_o.jsx)(ix,{$color:r.current.evapotranspiration>3?"#ff9900":"#00eeff",children:(0,_o.jsx)(S,{})}),(0,_o.jsxs)(ax,{$size:"10px",children:["Випаровування: ",ge.precip(r.current.evapotranspiration??0,2)]})]})})]})})}),"hourly"===lt&&(0,_o.jsxs)("div",{children:[(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"8px"},children:[(0,_o.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Годинний прогноз"}),(0,_o.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:(0,_o.jsxs)(bx,{$isDarkMode:i,children:[(0,_o.jsx)(wx,{$active:"charts"===Er,$isDarkMode:i,onClick:()=>Ir&&O("charts"),disabled:!Ir,style:Ir?void 0:{opacity:.35,cursor:"not-allowed"},title:J?Rr:zr?"Графіки":"Графік доступний лише на перші 72 год",children:(0,_o.jsx)(Ut,{size:18})}),(0,_o.jsx)(wx,{$active:"table"===Er,$isDarkMode:i,onClick:()=>O("table"),title:"Таблиця",children:(0,_o.jsx)(At,{size:18})}),(0,_o.jsx)(wx,{$active:"blocks"===Er,$isDarkMode:i,onClick:()=>O("blocks"),title:"Блоки",children:(0,_o.jsx)(Ae,{size:18})})]})})]}),Cr.length>1&&(0,_o.jsx)("div",{style:{marginTop:"8px",marginBottom:"8px"},children:(0,_o.jsx)("select",{value:T,onChange:e=>P(Number(e.target.value)),style:{width:"100%",maxWidth:"260px",padding:"8px 10px",borderRadius:"8px",border:i?"1px solid #555":"1px solid #ccc",background:i?"#1f1f1f":"#fff",color:i?"#fff":"#000",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:Cr.map((e,t)=>(0,_o.jsx)("option",{value:t,children:e.title||e.label},e.label))})}),"charts"===Er?Lr&&Lr.length>0&&(0,_o.jsxs)("div",{ref:mt,style:{position:"relative",width:"100%",minHeight:"hourly"===Mt?$t?`${window.innerHeight}px`:"100vh":void 0,padding:"hourly"===Mt?"16px":void 0,boxSizing:"border-box",background:"hourly"===Mt?i?"#000":"#f5f5f5":"transparent"},children:[mr("hourly",mt,[{key:"day",label:"Температура",color:"#ffb36c",icon:(0,_o.jsx)(_,{})},{key:"wind",label:rr.label,color:rr.color,icon:rr.icon}]),(0,_o.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,_o.jsx)(lx,{children:(0,_o.jsx)(cx,{$width:"hourly"===Mt?`max(100%, ${Tr}px)`:Tr,$height:"hourly"===Mt?$t?window.innerHeight-90+"px":"calc(100vh - 90px)":Y,children:(0,_o.jsx)(Fp,{ref:bt,options:ii,data:Vr},`hourly-${Mt||"normal"}`)})}),(0,_o.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:i?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:"hourly"===Mt?"none":"block"},children:(0,_o.jsx)(cx,{$width:Tr,$height:Y,children:(0,_o.jsx)(Fp,{options:{...ii,plugins:{...ii.plugins,tooltip:{...ii.plugins.tooltip,enabled:!0}}},data:Vr})})}),(0,_o.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:i?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:"hourly"===Mt?"none":"block"},children:(0,_o.jsx)("div",{style:{position:"absolute",top:0,right:0,width:`${Tr}px`,height:Y},children:(0,_o.jsx)(cx,{$width:Tr,$height:Y,children:(0,_o.jsx)(Fp,{options:{...ii,plugins:{...ii.plugins,tooltip:{...ii.plugins.tooltip,enabled:!0}}},data:Vr})})})})]})]}):"table"===Er?Lr&&0!==Lr.length?(0,_o.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,_o.jsx)("div",{style:{display:"flex",gap:"3px",paddingBottom:"10px",minWidth:"min-content"},children:Lr.map((e,t)=>{const r=e.wind_direction_10m||0,a=wc(r),n=parseInt(e.temp),s=n>25?"#ff4d4d":n<5?"#4da6ff":"#ffb36c";return(0,_o.jsxs)("div",{style:{flex:"0 0 120px",background:i?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:i?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"7px",padding:"4px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.12)"},children:[(0,_o.jsx)("div",{style:{fontSize:"12px",fontWeight:"bold",opacity:.85,color:"#fff"},children:e.time||e.label||`${t}:00`}),(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"2px 0"},children:[(0,_o.jsx)("div",{style:{fontSize:"24px"},children:(0,_o.jsx)(Ep,{item:e})}),(0,_o.jsx)(ax,{$size:"11px",$lh:"1.2",children:e.description||_r(e.weather_code)||Ip(e.iconPlaceholder)||"Погода"})]}),(0,_o.jsx)("div",{style:{fontSize:"16px",fontWeight:"800",color:s},children:Qe(e.tempNum??e.temp)}),e.feels_like&&(0,_o.jsxs)("div",{style:{fontSize:"10px",opacity:.75},children:["Відчувається: ",Qe(e.feels_like)]}),(0,_o.jsx)("div",{style:{width:"80%",height:"1px",background:i?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,_o.jsxs)("div",{style:{fontSize:"10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Сила вітру: ",(0,_o.jsx)("span",{children:ge.wind(e.windNum??e.wind_speed??e.windSpeed??0)})]}),(0,_o.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:["Напрямок: ",(0,_o.jsx)("span",{style:{display:"inline-block",transform:`rotate(${r}deg)`,fontSize:"12px"},children:"⬇"})]}),(0,_o.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:[" ",a," (",Math.round(r),"°)"]}),(e.wind_gusts_10m||e.wind_gusts)&&parseFloat(e.wind_gusts_10m||e.wind_gusts)>0&&(0,_o.jsxs)("div",{style:{fontSize:"9px",color:"#ff9900",fontWeight:"600"},children:["Пориви: ",ge.wind(e.wind_gusts_10m||e.wind_gusts)]})]})]},t)})})}):(0,_o.jsx)("div",{style:{padding:"20px",textAlign:"center",color:i?"#aaa":"#666"},children:"Немає даних годинного прогнозу."}):Lr&&0!==Lr.length?(0,_o.jsx)("div",{style:{marginTop:"6px",width:"100%",overflowX:"auto"},children:(0,_o.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"2px",minWidth:J?"min-content":void 0},children:Lr.map((e,t)=>{const a=e.wind_direction_10m||0,n=wc(a),s=r.current?.isPolarNight||e.isPolarNight,o=r.current?.isPolarDay||e.isPolarDay;return(0,_o.jsxs)("div",{style:{flex:J?"0 0 200px":"0 0 calc((100% - 20px) / 3 * 1.6)",boxSizing:"border-box",background:i?"rgba(20, 20, 30, 0.92)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:i?"1px solid rgba(0, 238, 255, 0.3)":"1px solid rgba(0, 140, 255, 0.3)",borderRadius:"10px",padding:"8px",display:"flex",flexDirection:"column",gap:"4px",color:i?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.2)",fontSize:"11px"},children:[(0,_o.jsxs)("div",{style:{fontSize:"13px",fontWeight:"bold",textAlign:"center",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"},children:[(0,_o.jsx)(R,{})," ",e.time||e.label||`${t}:00`]}),(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[(0,_o.jsx)("span",{style:{fontSize:"24px"},children:(0,_o.jsx)(Ep,{item:e})}),(0,_o.jsx)("span",{style:{fontSize:"11px",fontWeight:"600",opacity:.9},children:e.description||_r(e.weather_code)||Ip(e.iconPlaceholder)||"Погода"})]}),(0,_o.jsxs)("div",{style:{background:"rgba(255,255,255,0.08)",borderRadius:"8px",padding:"6px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[!s&&(0,_o.jsxs)("div",{style:{fontWeight:"800",fontSize:"14px",color:"#ff9d3b"},children:["Температура: ",Qe(e.tempNum??e.temp)]}),e.feels_like&&(0,_o.jsxs)("div",{style:{fontSize:"10px",opacity:.8},children:["Відчувається: ",Qe(e.feels_like)]}),s&&(0,_o.jsxs)("div",{style:{fontSize:"10px",color:"#4da6ff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(re,{})," Полярна ніч"]}),o&&(0,_o.jsxs)("div",{style:{fontSize:"10px",color:"#ffd700",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(Vt,{})," Полярний день"]})]}),ci([{icon:(0,_o.jsx)(Af,{children:(0,_o.jsx)(vt,{style:{color:"#00eeff"}})}),label:"Вітер",value:ge.wind(e.windNum??e.wind_speed??e.windSpeed??0),sub:n},{icon:(0,_o.jsx)(Af,{children:(0,_o.jsx)(vt,{style:{color:"#ff9900"}})}),label:"Пориви",value:e.wind_gusts_10m?ge.wind(e.wind_gusts_10m):"—"},{icon:(0,_o.jsx)(q,{style:{color:"#4da6ff"}}),label:"Вологість",value:li(e.relative_humidity_2m??e.humidity)},{icon:(0,_o.jsx)(rt,{style:{color:"#00ffcc"}}),label:"Точка роси",value:void 0!==e.dew_point_2m?Qe(e.dew_point_2m):"—"},{icon:(0,_o.jsx)(Tt,{style:{color:"#3399ff"}}),label:"Опади",value:ge.precip(e.precipitation??0)},{icon:(0,_o.jsx)(Dt,{style:{color:"#80d4ff"}}),label:"Сніговий покрив",value:ge.snow(100*(e.snow_depth??0))},{icon:(0,_o.jsx)(Nt,{style:{color:"#00cdff"}}),label:"Ґрунт",value:void 0!==e.soil_temperature_0cm?Qe(e.soil_temperature_0cm):"—"},{icon:(0,_o.jsx)(he,{style:{color:"#ff9d3b"}}),label:"Рівень 0°C",value:void 0!==e.freezing_level_height?ge.height(e.freezing_level_height):"—"},{icon:(0,_o.jsx)(S,{style:{color:"#00eeff"}}),label:"Випаровування",value:void 0!==e.evapotranspiration?ge.precip(e.evapotranspiration,2):"—"},{icon:(0,_o.jsx)(Ne,{style:{color:"#ffb36c"}}),label:"Тиск",value:ge.pressure(e.pressure_msl??e.pressure??r.current?.pressure)},{icon:(0,_o.jsx)(U,{style:{color:"#aaa"}}),label:"Хмари",value:li(e.cloud_cover??r.current?.cloud_cover)}])]},t)})})}):(0,_o.jsx)("div",{style:{padding:"20px",textAlign:"center",color:i?"#aaa":"#666"},children:"Немає даних годинного прогнозу."})]}),"daily"===lt&&(0,_o.jsxs)("div",{children:[(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"8px"},children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[(0,_o.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Прогноз на 16 днів"}),(0,_o.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"12px",cursor:"pointer",userSelect:"none",opacity:.9},children:[(0,_o.jsx)("input",{type:"checkbox",checked:ze,onChange:e=>Ie(e.target.checked),style:{cursor:"pointer",accentColor:"#00eeff"}}),"Показати вчора"]})]}),(0,_o.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:(0,_o.jsxs)(bx,{$isDarkMode:i,children:[(0,_o.jsx)(wx,{$active:"charts"===Nr,$isDarkMode:i,onClick:()=>!J&&Z("charts"),disabled:J,style:J?{opacity:.35,cursor:"not-allowed"}:void 0,title:J?Rr:"Графіки",children:(0,_o.jsx)(Ut,{size:18})}),(0,_o.jsx)(wx,{$active:"table"===Nr,$isDarkMode:i,onClick:()=>Z("table"),title:"Таблиця",children:(0,_o.jsx)(At,{size:18})}),(0,_o.jsx)(wx,{$active:"blocks"===Nr,$isDarkMode:i,onClick:()=>Z("blocks"),title:"Блоки",children:(0,_o.jsx)(Ae,{size:18})})]})})]}),"charts"===Nr?(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"6px 8px",background:i?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(4px)",borderBottom:"1px solid #ffb36c",zIndex:10},children:[gr([{key:"day",label:"День",color:"#ffb36c",icon:(0,_o.jsx)(Vt,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,_o.jsx)(re,{})},{key:"wind",label:rr.label,color:rr.color,icon:rr.icon}]),ur("daily",kt)]}),(0,_o.jsxs)("div",{ref:kt,style:{position:"relative",width:"100%",minHeight:"daily"===Mt?$t?`${window.innerHeight}px`:"100vh":void 0,padding:"daily"===Mt?"16px":void 0,boxSizing:"border-box",background:"daily"===Mt?i?"#000":"#f5f5f5":"transparent"},children:["daily"===Mt&&mr("daily",kt,[{key:"day",label:"День",color:"#ffb36c",icon:(0,_o.jsx)(Vt,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,_o.jsx)(re,{})},{key:"wind",label:rr.label,color:rr.color,icon:rr.icon}]),(0,_o.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,_o.jsx)(lx,{ref:wt,children:(0,_o.jsx)(cx,{$width:"daily"===Mt?"max(100%, 900px)":900,$height:"daily"===Mt?$t?window.innerHeight-120+"px":"calc(100vh - 120px)":Y,children:(0,_o.jsx)(Fp,{ref:jt,options:ai,data:ri},`daily-${Mt||"normal"}`)})}),(0,_o.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:i?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:"daily"===Mt?"none":"block"},children:(0,_o.jsx)(cx,{$width:1300,$height:Y,children:(0,_o.jsx)(Fp,{options:{...ai,plugins:{...ai.plugins,tooltip:{...ai.plugins.tooltip,enabled:!0}}},data:ri})})}),(0,_o.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:i?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:"daily"===Mt?"none":"block"},children:(0,_o.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"1300px",height:Y},children:(0,_o.jsx)(cx,{$width:1300,$height:Y,children:(0,_o.jsx)(Fp,{options:{...ai,plugins:{...ai.plugins,tooltip:{...ai.plugins.tooltip,enabled:!0}}},data:ri})})})})]})]})]}):"table"===Nr?(()=>{const e=Fe;return e&&0!==e.length?(0,_o.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,_o.jsx)("div",{style:{display:"flex",gap:"5px",minWidth:"min-content"},children:e.map((e,t)=>{const a=Te(e)||e.isPast,n=Hr(e.date,e.day,e.fullDate),s="Сб"===e.day||"Нд"===e.day||"weekend"===n.type,o=e.wind_direction_10m||0,l=wc(o),c=parseInt(e.temp_day||e.temp),d=parseInt(e.temp_night||e.nightTemp),h=e.isPolarNight||r.current?.isPolarNight,f=e.isPolarDay||r.current?.isPolarDay;let p="#fff",x=i?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.1)",u=null;return a?(p="#888",x="rgba(140, 140, 140, 0.35)",u=(0,_o.jsx)("span",{style:{fontSize:"9px",background:"rgba(120,120,120,0.3)",color:"#bbb",padding:"1px 6px",borderRadius:"4px"},children:"Минулі дні"})):"holiday"===n.type?(p="#ff4d4d",x="rgba(255, 77, 77, 0.7)",u=(0,_o.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 77, 77, 0.25)",color:"#ff4d4d",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вітаю зі святом!"})):"custom"===n.type?(p="#00bfff",x="rgba(0, 191, 255, 0.7)",u=(0,_o.jsx)("span",{style:{fontSize:"9px",background:"rgba(0, 191, 255, 0.25)",color:"#00bfff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Ваша подія"})):"birthday"===n.type?(p="#e066ff",x="rgba(224, 102, 255, 0.7)",u=(0,_o.jsx)("span",{style:{fontSize:"9px",background:"rgba(224, 102, 255, 0.25)",color:"#e066ff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вітаємо з днем народження!"})):s&&(p="#ffb36c",x="rgba(255, 179, 108, 0.7)",u=(0,_o.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 179, 108, 0.25)",color:"#ffb36c",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вихідний день"})),(0,_o.jsxs)("div",{style:{flex:"0 0 125px",background:a?i?"rgba(20, 20, 26, 0.85)":"rgba(230, 230, 235, 0.85)":i?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:a?"1px dashed rgba(140, 140, 140, 0.4)":`2px solid ${x}`,borderRadius:"14px",padding:"12px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",textAlign:"center",color:i?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.12)",filter:a?"grayscale(100%)":"none",opacity:a?.75:1,transition:"all 0.2s ease"},children:[u,(0,_o.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,_o.jsxs)("span",{style:{fontSize:"12px",fontWeight:"bold",color:p},children:[e.date," ",e.day]})}),(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)("div",{style:{fontSize:"28px"},children:(0,_o.jsx)(Ep,{item:e})}),(0,_o.jsx)("div",{style:{fontSize:"10px",lineHeight:1.3,opacity:.8,color:p,fontWeight:600},children:e.description||_r(e.weather_code??0)||"Погода"})]}),(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px",width:"100%"},children:[!h&&(0,_o.jsxs)("div",{style:{background:"rgba(255, 179, 108, 0.15)",borderRadius:"6px",padding:"2px 4px",fontSize:"14px",fontWeight:"800",color:"#ff9d3b"},children:["День: ",Qe(c)]}),!f&&(0,_o.jsxs)("div",{style:{background:"rgba(255, 20, 147, 0.12)",borderRadius:"6px",padding:"2px 4px",fontSize:"12px",fontWeight:"700",color:"#ff3399"},children:["Ніч: ",Qe(d)]})]}),(0,_o.jsx)("div",{style:{width:"85%",height:"1px",background:i?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,_o.jsxs)("div",{style:{fontSize:"11px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Напрямок: ",(0,_o.jsx)("span",{style:{display:"inline-block",transform:`rotate(${o}deg)`,fontSize:"13px"},children:"⬇"})]}),(0,_o.jsx)("div",{style:{fontSize:"10px"},children:(0,_o.jsxs)("span",{children:["Сила вітру: ",e.wind_speed||"0"]})}),(0,_o.jsxs)("div",{style:{fontSize:"10px"},children:[l," (",Math.round(o),"°)"]})]})]},t)})})}):(0,_o.jsx)("div",{style:{padding:"20px",textAlign:"center",color:i?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."})})():(()=>{const e=Fe;return e&&0!==e.length?(0,_o.jsx)("div",{style:{marginTop:"6px",width:"100%",overflowX:"auto"},children:(0,_o.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"2px",minWidth:J?"min-content":void 0},children:e.map((e,t)=>{const a=Hr(e.date,e.day,e.fullDate),n=e.wind_direction_10m||0,s=wc(n),o=e.isPolarNight||r.current?.isPolarNight,l=e.isPolarDay||r.current?.isPolarDay,c=e.isPolarEndDay,{twilight:d,moon:h,dayDiff:f}=Pe[t]||{},p=bf(e.sunrise,e.sunset),x=bf(h?.riseDate,h?.setDate),u=Number(e.precipitation_probability_max??e.pop);return(0,_o.jsxs)("div",{style:{flex:J?"0 0 210px":"0 0 calc((100% - 20px) / 3 * 1.6)",filter:Te(e)?"grayscale(1)":"none",boxSizing:"border-box",background:i?"rgba(25, 25, 38, 0.92)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:a.color?`2px solid ${a.color}`:i?"1px solid rgba(255, 255, 255, 0.15)":"1px solid rgba(0,0,0,0.1)",borderRadius:"12px",padding:"8px",display:"flex",flexDirection:"column",gap:"4px",color:i?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",fontSize:"11px"},children:[(0,_o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",alignItems:"center",gap:"6px"},children:[(0,_o.jsxs)("div",{style:{fontSize:"13px",fontWeight:"bold",color:a.color||"#fff",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"},children:[(0,_o.jsx)(k,{})," ",e.date," ",e.day]}),(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",minWidth:0},children:[(0,_o.jsx)("span",{style:{fontSize:"26px",flexShrink:0},children:(0,_o.jsx)(Ep,{item:e})}),(0,_o.jsx)("span",{style:{fontSize:"11px",fontWeight:"600"},children:e.description||_r(e.weather_code)||Ip(e.iconPlaceholder)||"Погода"})]})]}),(0,_o.jsxs)("div",{style:{background:"rgba(255,255,255,0.08)",borderRadius:"8px",padding:"6px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",gap:"2px 8px",fontSize:"13px"},children:[!o&&(0,_o.jsxs)("div",{style:{fontWeight:"800",color:"#ff9d3b",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(Vt,{})," День: ",Qe(e.temp_day||e.temp),null!=e.feels_like_max&&(0,_o.jsxs)("span",{style:{fontSize:"10px",fontWeight:600,opacity:.8},children:["(відч. ",Qe(Math.round(e.feels_like_max)),")"]})]}),!l&&(0,_o.jsxs)("div",{style:{fontWeight:"700",color:"#ff3399",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(re,{})," Ніч: ",Qe(e.temp_night||e.nightTemp),null!=e.feels_like_min&&(0,_o.jsxs)("span",{style:{fontSize:"10px",fontWeight:600,opacity:.8},children:["(відч. ",Qe(Math.round(e.feels_like_min)),")"]})]}),o&&(0,_o.jsxs)("div",{style:{flexBasis:"100%",justifyContent:"center",fontSize:"10px",color:"#4da6ff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(re,{})," Полярна ніч (день не показується)"]}),l&&(0,_o.jsxs)("div",{style:{flexBasis:"100%",justifyContent:"center",fontSize:"10px",color:"#ffd700",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(Vt,{})," Полярний день (ніч не показується)"]}),c&&(0,_o.jsxs)("div",{style:{flexBasis:"100%",justifyContent:"center",fontSize:"10px",color:"#00eeff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(H,{})," Закінчення полярного періоду"]})]}),ci([{icon:(0,_o.jsx)(Af,{children:(0,_o.jsx)(vt,{style:{color:"#00eeff"}})}),label:"Вітер",value:ge.wind(e.wind_speed??0),sub:(0,_o.jsxs)(_o.Fragment,{children:[s,null!=e.wind_gusts_max&&(0,_o.jsxs)("div",{style:{color:"#ff9900",fontWeight:600,opacity:1},children:["Пориви: ",ge.wind(e.wind_gusts_max)]})]})},{icon:(0,_o.jsx)(zf,{children:(0,_o.jsx)(Vt,{style:{color:"#ffd700"}})}),label:"УФ-індекс",value:e.uv_index??"—"},{icon:(0,_o.jsx)(q,{style:{color:"#4da6ff",opacity:isNaN(u)?.4:.2+.8*Math.min(u,100)/100}}),label:"Ймовірність опадів",value:li(e.precipitation_probability_max??e.pop)},{icon:(0,_o.jsx)(Tt,{style:{color:"#3399ff"}}),label:"Дощ",value:ge.precip(e.rain_sum??e.rain??0)},{icon:(0,_o.jsx)(Dt,{style:{color:"#80d4ff"}}),label:"Сніг",value:null!=e.snowfall_sum?ge.snow(e.snowfall_sum):"—"},{icon:(0,_o.jsx)(U,{style:{color:"#c3cfdc"}}),label:"Хмарність",value:li(e.cloud_cover_mean)},{icon:(0,_o.jsx)("span",{style:{display:"inline-flex",color:jf(e.visibility_min,e.weather_code)?"#ff9900":"#9fb3c8"},children:(0,_o.jsx)(dp,{})}),label:jf(e.visibility_min,e.weather_code)?"Туман, видимість":"Видимість",value:null!=e.visibility_min?ge.visibility(e.visibility_min/1e3):"—"},{icon:(0,_o.jsx)(S,{style:{color:"#00eeff"}}),label:"Випаровування",value:void 0!==e.evapotranspiration?ge.precip(e.evapotranspiration,2):"—"},{icon:(0,_o.jsx)(ne,{style:{color:"#ffb36c"}}),label:"Цивільні сутінки",value:d?`${d.civilDawn} — ${d.civilDusk}`:"—"},{icon:(0,_o.jsx)(Nf,{children:(0,_o.jsx)(w,{style:{color:"#be90d4"}})}),label:"Навігаційні сутінки",value:d?`${d.nauticalDawn} — ${d.nauticalDusk}`:"—"},{icon:(0,_o.jsx)(Ef,{children:(0,_o.jsx)(oe,{style:{color:"#a855f7"}})}),label:"Астрономічні сутінки",value:d?`${d.astroDawn} — ${d.astroDusk}`:"—"}]),(0,_o.jsx)(Hf,{icon:(0,_o.jsx)(If,{children:(0,_o.jsx)(X,{style:{color:"#3498db"}})}),title:`Тривалість дня: ${kf(e.sunrise,e.sunset)}`,riseLabel:xf(e.sunrise),setLabel:xf(e.sunset),progress:p.progress,isActive:p.isActive,color:"#ffd700",footer:null==f?null:0===f?"Тривалість дня як учора":`День на ${Math.abs(f)} хв ${f>0?"довший":"коротший"}, ніж учора`}),h&&(0,_o.jsx)(Hf,{icon:(0,_o.jsx)(Rf,{phase:h.phase}),title:`${h.name}: ${(100*h.fraction).toFixed(1).replace(".",",")}%`,riseLabel:h.rise,setLabel:h.set,progress:x.progress,isActive:x.isActive,color:"#9fb3c8",footer:h.nextPhase?`${h.nextPhase.name} — ${h.nextPhase.date.toLocaleDateString("uk",{day:"numeric",month:"long"})}`:null})]},t)})})}):(0,_o.jsx)("div",{style:{padding:"20px",textAlign:"center",color:i?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."})})()]}),"ai"===lt&&(0,_o.jsxs)(hx,{$isDarkMode:i,layout:!0,children:[(0,_o.jsxs)(fx,{$isDarkMode:i,children:[(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",fontSize:"12px",fontWeight:700,color:i?"#00eeff":"#0066aa"},title:"Аналіз на базі умов, збігів та фізичних параметрів без ШІ та інтернету",children:[(0,_o.jsx)(Ut,{style:{fontSize:"14px"}}),(0,_o.jsx)("span",{children:"Системні повідомлення"})]}),(0,_o.jsxs)(px,{children:[(0,_o.jsxs)("button",{onClick:()=>{De?.fullText&&(navigator.clipboard?.writeText(De.fullText),N(!0),setTimeout(()=>N(!1),2e3))},style:{background:I?"rgba(0, 255, 150, 0.25)":i?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.08)",border:I?"1px solid #00ff96":i?"1px solid rgba(255, 255, 255, 0.2)":"1px solid rgba(0, 0, 0, 0.15)",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"11px",color:I?"#00ff96":i?"#fff":"#222",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",transition:"all 0.2s"},title:"Скопіювати текст прогнозу",children:[(0,_o.jsx)(je,{style:{fontSize:"14px"}}),(0,_o.jsx)("span",{children:I?"Скопійовано!":"Скопіювати"})]}),(0,_o.jsx)("button",{className:"smart-full-report",onClick:()=>ht(!0),style:{background:"rgba(0, 238, 255, 0.15)",border:"1px solid rgba(0, 238, 255, 0.5)",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"11px",color:i?"#00eeff":"#007a99",padding:"4px 8px",transition:"all 0.2s"},children:"Повний звіт"})]})]}),(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:J?"4px":"10px"},children:[(0,_o.jsxs)("div",{children:[(0,_o.jsx)("div",{style:{fontSize:"14px",fontWeight:800,color:i?"#00eeff":"#0066aa",marginBottom:"6px"},children:De?.headline}),De?.allBadges&&De.allBadges.length>0&&(0,_o.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:"8px"},children:De.allBadges.map((e,t)=>(0,_o.jsxs)(ux,{$isDarkMode:i,children:[e.toLowerCase().includes("дощ")&&(0,_o.jsx)(Tt,{style:{marginRight:"4px"}}),e.toLowerCase().includes("вітер")&&(0,_o.jsx)(vt,{style:{marginRight:"4px"}}),e.toLowerCase().includes("підйом")&&(0,_o.jsx)(Ut,{style:{marginRight:"4px"}}),e.toLowerCase().includes("спад")&&(0,_o.jsx)(E,{style:{marginRight:"4px"}}),(e.toLowerCase().includes("контраст")||e.toLowerCase().includes("ніч"))&&(0,_o.jsx)(re,{style:{marginRight:"4px"}}),(0,_o.jsx)("span",{children:e})]},t))})]}),(0,_o.jsxs)(gx,{$isDarkMode:i,$accent:"#ffb300",children:[(0,_o.jsxs)(mx,{$isDarkMode:i,...ae("dayNight"),children:[(0,_o.jsx)(re,{style:{color:"#facc15",fontSize:"14px"}}),(0,_o.jsx)("span",{children:"Добовий контраст (день vs ніч)"}),se("dayNight")]}),te("dayNight")&&(0,_o.jsx)(yx,{$isDarkMode:i,children:De?.dayNight?.message})]}),(0,_o.jsxs)(gx,{$isDarkMode:i,$accent:"#00bfff",children:[(0,_o.jsxs)(mx,{$isDarkMode:i,...ae("hourly"),children:[(0,_o.jsx)(yt,{style:{color:"#00bfff",fontSize:"14px"}}),(0,_o.jsx)("span",{children:"Динаміка доби (опади, пік тепла, вітер)"}),se("hourly")]}),te("hourly")&&(0,_o.jsxs)(yx,{$isDarkMode:i,children:[(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"flex-start"},children:[(0,_o.jsx)(Tt,{style:{color:"#38bdf8",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),(0,_o.jsx)("span",{children:De?.hourlyData?.rainWindowText})]}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"flex-start",marginTop:"4px"},children:[(0,_o.jsx)(he,{style:{color:"#f97316",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),(0,_o.jsx)("span",{children:De?.hourlyData?.peakTempText})]}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"flex-start",marginTop:"4px"},children:[(0,_o.jsx)(vt,{style:{color:"#00eeff",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),(0,_o.jsx)("span",{children:De?.hourlyData?.windTrendText})]})]})]}),(0,_o.jsxs)(gx,{$isDarkMode:i,$accent:"#a855f7",children:[(0,_o.jsxs)(mx,{$isDarkMode:i,...ae("weekly"),children:[(0,_o.jsx)(Ut,{style:{color:"#a855f7",fontSize:"14px"}}),(0,_o.jsx)("span",{children:"Тижневий тренд та динаміка"}),se("weekly")]}),te("weekly")&&(0,_o.jsxs)(yx,{$isDarkMode:i,children:[(0,_o.jsx)("div",{children:De?.weeklyData?.trendText}),(0,_o.jsx)("div",{style:{marginTop:"4px",opacity:.9},children:De?.weeklyData?.weekSummaryText})]})]}),De?.lifestyleAdvice&&De.lifestyleAdvice.length>0&&(0,_o.jsxs)(gx,{$isDarkMode:i,$accent:"#10b981",children:[(0,_o.jsxs)(mx,{$isDarkMode:i,...ae("advice"),children:[(0,_o.jsx)(le,{style:{color:"#10b981",fontSize:"14px"}}),(0,_o.jsx)("span",{children:"Поради та гардероб"}),se("advice")]}),te("advice")&&(0,_o.jsx)(yx,{$isDarkMode:i,children:De.lifestyleAdvice.map((e,t)=>"wind_warning"===e.type?(0,_o.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start",background:i?"rgba(255, 179, 0, 0.15)":"rgba(255, 179, 0, 0.12)",border:"1px solid rgba(255, 179, 0, 0.45)",borderRadius:"8px",padding:"8px 10px",marginTop:t>0?"5px":0},children:[(0,_o.jsx)(H,{style:{color:"#ffb300",fontSize:"16px",flexShrink:0,marginTop:"2px"}}),(0,_o.jsxs)("div",{style:{fontSize:"12px",lineHeight:"1.5"},children:[(0,_o.jsx)("strong",{style:{color:i?"#ffd166":"#b45309"},children:e.title})," ",(0,_o.jsx)("span",{children:e.text})]})]},t):(0,_o.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start",marginTop:t>0?"4px":0},children:["cloth"===e.type&&(0,_o.jsx)(Ot,{style:{color:"#10b981",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"umbrella"===e.type&&(0,_o.jsx)(Zt,{style:{color:"#00bfff",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"car"===e.type&&(0,_o.jsx)(F,{style:{color:"#f59e0b",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"sport"===e.type&&(0,_o.jsx)(Ct,{style:{color:"#10b981",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"home"===e.type&&(0,_o.jsx)(Le,{style:{color:"#a3a3a3",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"ice"===e.type&&(0,_o.jsx)(Nt,{style:{color:"#7dd3fc",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"snow"===e.type&&(0,_o.jsx)(Dt,{style:{color:"#80d4ff",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"frost"===e.type&&(0,_o.jsx)(E,{style:{color:"#4da6ff",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"fog"===e.type&&(0,_o.jsx)(Pt,{style:{color:"#9fb3c8",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),(0,_o.jsxs)("div",{children:[(0,_o.jsxs)("strong",{children:[e.title,":"]})," ",e.text]})]},t))})]}),De?.atmosphereNotes&&De.atmosphereNotes.length>0&&(0,_o.jsxs)(gx,{$isDarkMode:i,$accent:"#ec4899",children:[(0,_o.jsxs)(mx,{$isDarkMode:i,...ae("atmosphere"),children:[(0,_o.jsx)(Me,{style:{color:"#ec4899",fontSize:"14px"}}),(0,_o.jsx)("span",{children:"Атмосферний тиск та фактори"}),se("atmosphere")]}),te("atmosphere")&&(0,_o.jsx)(yx,{$isDarkMode:i,children:De.atmosphereNotes.map((e,t)=>(0,_o.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start",marginTop:t>0?"4px":0},children:[("pressure_low"===e.type||"pressure_high"===e.type)&&(0,_o.jsx)(Me,{style:{color:"#ec4899",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"humidity"===e.type&&(0,_o.jsx)(q,{style:{color:"#38bdf8",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),"uvi"===e.type&&(0,_o.jsx)(lr,{style:{color:"#eab308",fontSize:"14px",flexShrink:0,marginTop:"2px"}}),(0,_o.jsxs)("div",{children:[(0,_o.jsxs)("strong",{children:[e.title,":"]})," ",e.text]})]},t))})]})]})]})]})]}),(0,_o.jsxs)(Yp,{children:[(0,_o.jsx)(ex,{$active:"current"===lt,$bgImg:Ve||r.cityImage,onClick:()=>ct("current"),children:(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,_o.jsx)("div",{style:{fontSize:"36px"},children:(0,_o.jsx)(Ep,{item:r.current})}),(0,_o.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,_o.jsxs)(Qp,{$active:"current"===lt,children:["Зараз: ",Qe(r.current?.temp)]}),(0,_o.jsxs)(Xp,{$active:"current"===lt,children:["Відчувається: ",Qe(r.current?.feels_like)]})]})]})}),(0,_o.jsx)(ex,{$active:"hourly"===lt,$bgImg:"/assets/day-night-clock-DZx18xWi.webp",onClick:()=>ct("hourly"),children:(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,_o.jsx)("div",{style:{fontSize:"36px",color:"#ffb36c"},children:(0,_o.jsx)(Ut,{})}),(0,_o.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,_o.jsx)(Qp,{$active:"hourly"===lt,children:"Годинна(72г)"}),(0,_o.jsx)(Xp,{$active:"hourly"===lt,children:"Детально 72г, далі до 7 днів"})]})]})}),(0,_o.jsx)(ex,{$active:"daily"===lt,onClick:()=>ct("daily"),$bgImg:"/assets/night-river-burnt-tree-CxT9F4_1.webp",children:(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,_o.jsx)("div",{style:{fontSize:"36px",color:"#ff1493"},children:(0,_o.jsx)(we,{})}),(0,_o.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,_o.jsx)(Qp,{$active:"daily"===lt,children:"Прогноз на 16 днів"}),(0,_o.jsx)(Xp,{$active:"daily"===lt,children:"Бундючий графік"})]})]})}),(0,_o.jsx)(ex,{$active:"ai"===lt,$bgImg:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",onClick:()=>ct("ai"),children:(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,_o.jsx)("div",{style:{fontSize:"36px",color:"#00eeff"},children:(0,_o.jsx)(Ut,{})}),(0,_o.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,_o.jsx)(Qp,{$active:"ai"===lt,children:"Смарт-прогноз"}),(0,_o.jsx)(Xp,{$active:"ai"===lt,children:"Експертні правила"})]})]})})]})]})}),dt&&(0,_o.jsx)(fd,{ruleForecast:De,forecastTimeString:be,isDarkMode:i,onClose:()=>ht(!1)}),et&&(0,_o.jsx)(Nd,{isDarkMode:i,currentCardId:r.id,onClose:()=>tt(!1)}),Jt&&(0,_o.jsx)(od,{title:"hourly"===Jt?"Стиль ліній: погодинний графік":"Стиль ліній: графік на 16 днів",lines:"hourly"===Jt?[{key:"temp",label:"Температура",color:"#ffb36c",icon:(0,_o.jsx)(_,{})},{key:"right",label:rr.label,color:rr.color,icon:rr.icon,autoFill:"precip"===Xt}]:[{key:"day",label:"День",color:"#ffb36c",icon:(0,_o.jsx)(Vt,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,_o.jsx)(re,{})},{key:"right",label:rr.label,color:rr.color,icon:rr.icon},{key:"trendDay",label:"Тренд дня",color:"#ffb36c",icon:(0,_o.jsx)(qe,{}),trend:!0},{key:"trendNight",label:"Тренд ночі",color:"#ff1493",icon:(0,_o.jsx)(qe,{}),trend:!0}],styles:_t[Jt],onChange:(e,t)=>((e,t,r)=>{fr({..._t,[e]:{..._t[e],[t]:{..._t[e][t],...r}}})})(Jt,e,t),onApplyAll:e=>((e,t)=>{const r=Object.fromEntries(Object.entries(_t[e]).map(([e,r])=>[e,{...r,...Object.fromEntries(Object.entries(t).filter(([e])=>e in r))}]));fr({..._t,[e]:r})})(Jt,e),onReset:()=>{return e=Jt,void fr({..._t,[e]:Sc[e]});var e},allCards:qt,onToggleAllCards:e=>{Po.default.setItem("chartLineStyles_useGlobal",e),e&&Po.default.setItem("chartLineStyles_global",_t),window.dispatchEvent(new CustomEvent("chartLineStylesChanged",{detail:{useGlobal:e,styles:_t}}))},isDarkMode:i,onClose:()=>Wt(null)}),me&&(0,_o.jsx)(vh,{units:ce,onChange:e=>{if(pe)return Po.default.setItem(kh,e),void window.dispatchEvent(new CustomEvent("unitsChanged",{detail:{units:e,useGlobal:!0}}));Po.default.setItem(Mh(r.id),e),window.dispatchEvent(new CustomEvent("unitsChanged",{detail:{units:e,useGlobal:!1,cardId:r.id}}))},allCards:pe,onToggleAllCards:e=>{Po.default.setItem(jh,e),e&&Po.default.setItem(kh,ce),window.dispatchEvent(new CustomEvent("unitsChanged",{detail:{units:ce,useGlobal:e}}))},isDarkMode:i,onClose:()=>ye(!1)}),st&&(0,_o.jsx)(pd,{isDarkMode:i,onClose:()=>ot(!1),contentRef:e=>{r.isMain&&v&&v("weatherModal",e)}}),He&&(0,_o.jsx)(vd,{locationName:r.locationName,bgMode:Oe,onSelect:e=>{Be(e),Po.default.setItem(`bgMode_${r.id}`,e),Ke(!1)},onClose:()=>Ke(!1)})]})},Ex=Fo`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`,Nx=Fo`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`,Rx=Fo`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`,Tx=Fo`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`,Fx=Eo(h.div)`
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
    url(${kl}) center / cover no-repeat,
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
    animation: ${Ex} 8s linear infinite;
    pointer-events: none;
  }
`,Px=Eo(h.h1)`
  font-weight: 900;
  margin: 6px;
  font-size: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${Rx} 6s infinite;
`,Vx=Eo(h.div)`
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
`,_x=Eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`,Ox=Eo.p`
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  color: rgba(0, 253, 248, 1);
  letter-spacing: 0.12em;
`,Bx=Eo.p`
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.65;
  margin: 3px;
`,Hx=Eo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
`,qx=Eo.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$ok:e})=>e?"#4ade80":"#ffb36c"};
  box-shadow: 0 0 8px ${({$ok:e})=>e?"#4ade80":"#ffb36c"};
  animation: ${Nx} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`,Kx=Eo.span`
  font-size: 12px;
  color: rgb(255, 255, 255);
`,Zx=Eo.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${Tx} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,Ux=({isDarkMode:e=!0,endTime:t=null,message:r=null})=>{const[i,a]=(0,Ar.useState)(null),[n,s]=(0,Ar.useState)(!1);return(0,Ar.useEffect)(()=>{if(!t)return;let e=null;if(e="function"==typeof t.toMillis?t.toMillis():t.seconds?1e3*t.seconds:new Date(t).getTime(),isNaN(e))return;const r=()=>{const t=e-Date.now();if(t<=0)return a(null),s(!0),void setTimeout(()=>window.location.reload(),6e4);const r=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4),n=Math.floor(t%6e4/1e3),o=[];r>0&&o.push(`${r}год`),o.push(`${String(i).padStart(2,"0")}хв`),o.push(`${String(n).padStart(2,"0")}с`),a(o.join(" "))};r();const i=setInterval(r,1e3);return()=>clearInterval(i)},[t]),(0,_o.jsx)(f,{children:(0,_o.jsx)(Fx,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},children:(0,_o.jsxs)(Vx,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:.55,type:"spring",stiffness:120},children:[(0,_o.jsx)(Zx,{children:(0,_o.jsx)("img",{src:kl,alt:""})}),(0,_o.jsx)(Px,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:n?"Ми завершили оновлення!":"Технічне обслуговування"}),t&&(0,_o.jsx)(_x,{children:(0,_o.jsxs)(Ox,{children:[n?"Перезавантаження через":"Залишилось часу",": ",n?"~1 хв":i??"Підраховуємо…"]})}),(0,_o.jsxs)(Bx,{children:["Причина робіт: ",r??"Планове оновлення системи."]}),n&&(0,_o.jsxs)(Hx,{children:[(0,_o.jsx)(qx,{$ok:!0}),(0,_o.jsx)(Kx,{children:"Роботи завершено — перезавантаження…"})]})]})},"maintenance-overlay")})},Jx={apiKey:"AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",authDomain:"stuxia-5b535.firebaseapp.com",projectId:"stuxia-5b535",storageBucket:"stuxia-5b535.firebasestorage.app",messagingSenderId:"801101038904",appId:"1:801101038904:web:70d01ab63f631b74acadcd"},Wx=null,Gx=()=>(Wx||(Wx=Promise.all([vr(()=>import("./firebase-D5cWCD3l.js"),__vite__mapDeps([7,5,1])),vr(()=>import("./vendor-firebase-Fffueu5Y.js").then(e=>e.p),__vite__mapDeps([5,1]))]).then(([e,t])=>({...t,...e})).catch(e=>{throw Wx=null,e})),Wx),Yx=`https://firestore.googleapis.com/v1/projects/${Jx.projectId}/databases/(default)/documents`,Qx=e=>e?"stringValue"in e?e.stringValue:"integerValue"in e?Number(e.integerValue):"doubleValue"in e?e.doubleValue:"booleanValue"in e?e.booleanValue:"timestampValue"in e?e.timestampValue:"nullValue"in e?null:"arrayValue"in e?(e.arrayValue.values||[]).map(Qx):"mapValue"in e?Xx(e.mapValue.fields):null:null,Xx=(e={})=>Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Qx(t)]));async function eu(e){const t=[];let r="";do{const i=await fetch(`${Yx}/${e}?pageSize=300&key=${Jx.apiKey}${r?`&pageToken=${encodeURIComponent(r)}`:""}`);if(!i.ok)throw new Error(`Firestore REST ${i.status}`);const a=await i.json();for(const e of a.documents||[])t.push({id:e.name.split("/").pop(),data:Xx(e.fields)});r=a.nextPageToken||""}while(r);return t}var tu="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",ru=[{id:1,image:"dinofrozone",audio:"dinofrozAudio",author:"Mondo TV",text:"Dinofroz"},{id:2,image:"monody",audio:"monodyAudio",author:"TheFatRat",text:"Monody"},{id:4,image:"theorytwo",audio:"theorytwoAudio",author:"DJ-Nate",text:"Theory of everything II"},{id:5,image:"theory",audio:"theoryAudio",author:"DJ-Nate",text:"Theory of everything"},{id:6,image:"unity",audio:"unityAudio",author:"TheFatRat",text:"Unity"},{id:7,image:"hunger",audio:"hungerAudio",author:"TheFatRat",text:"Hunger"},{id:8,image:"silent",audio:"silentAudio",author:"TheTurkeyStudio",text:"Silent"}],iu="/assets/silent-56iXNcQC.opus",au={faded:xc,silent:ml,silentAudio:iu,harmony:yl,horse:"/assets/white-horse-DCbtELLC.webp",theorytwo:bl,fingerdash:wl,electrodynamix:vl,deserttwo:jl,desertthree:Ml,desertfour:Sl,desertone:$l,unity:"/assets/thefatrat-unity-cover-F-cBWwIf.webp",mecha:Dl,monody:"/assets/thefatrat-monody-cover-DBysFOWl.webp",clubstep:Cl,turkeys:Ll,chess:Al,turkeytwo:zl,turkeythree:Il,turkeyfour:"/assets/young-flock-in-yard-B1peYkuR.webp",turkeyfive:"/assets/autumn-pen-B9fezKPV.webp",turkeysix:El,turkeysone:Nl,turkeyseven:Rl,asiumone:"/assets/harmony-DdULW5D8.webp",asiumtwo:Tl,asiumthree:Fl,asiumfour:Pl,asiumfive:Vl,asiumsix:_l,asiumten:Ol,asiumeleven:Bl,asiumseven:Hl,swamptwo:ql,swampthree:Kl,swampsix:Zl,swampseven:Ul,swampeight:Jl,swampnine:Wl,theory:Gl,deadlocked:Yl,horrortwo:Ql,horrorthree:Xl,horrorfour:ec,horror:tc,horrorsix:rc,horroreight:ic,dinofrozone:ac,dinofrozthree:nc,dinofrozfour:sc,dinofrozfive:oc,dinofrozsix:lc,dinofrozseven:cc,dinofrozeight:dc,dinofroztwo:hc,dinofroznine:fc,hunger:"/assets/thefatrat-hunger-cover-Bja8eIKz.webp",mia:uc,dinofrozAudio:"/assets/dinofroz-Dh4R-5aX.opus",monodyAudio:"/assets/thefatrat-monody-CtGuyQHg.opus",unityAudio:"/assets/unity-BezWr83K.opus",hungerAudio:"/assets/thefatrat-hunger-CEyOjh5O.opus",theorytwoAudio:"/assets/theory-of-everything-ll-64HhfYQH.opus",theoryAudio:"/assets/theory-of-everything-Bk8Tcze1.opus"},nu=(ru.map(e=>({...e,image:au[e.image]||e.image,audio:au[e.audio]||e.audio,video:au[e.video]||e.video,images:Array.isArray(e.images)?e.images.map(e=>au[e]||e):e.images,filters:Array.isArray(e.filters)?e.filters.map(e=>({...e,imageUrl:au[e.imageUrl]||e.imageUrl})):e.filters})),[{key:"hero",label:"Головна",path:"hero"},{key:"weather",label:"Погода",path:"weather"},{key:"map",label:"Кліматична мапа",path:"map"}]),su=[],ou=new Set(su.map(e=>e.file)),lu=e=>!!e&&ou.has(e),cu="bg-audio-cache",du=()=>{if("undefined"==typeof window)return[];try{const e=window.localStorage.getItem("bg_music_soft_deleted_ids");return e?JSON.parse(e):[]}catch{return[]}},hu=(e=[])=>{if("undefined"!=typeof window)try{window.localStorage.setItem("bg_music_soft_deleted_ids",JSON.stringify(Array.from(new Set(e))))}catch{}},fu="/assets/relax-Dn2PcHdb.mp3",pu="/assets/bell-B5cBbKiy.mp3",xu=[{id:"none",label:"Вимкнено",intensity:50},{id:"grayscale",label:"Дальтонізм",intensity:100},{id:"sepia",label:"Сепія",intensity:90},{id:"invert",label:"Негатив",intensity:100},{id:"matrix",label:"Пікселізація",intensity:60},{id:"uv",label:"УФ-Лампа",intensity:70},{id:"contrast",label:"Контраст",intensity:75},{id:"saturate",label:"Насиченість",intensity:85},{id:"blur",label:"Розмиття",intensity:25},{id:"hue",label:"Веселка",intensity:50},{id:"warm",label:"Теплі тони",intensity:80},{id:"noir",label:"Нуар",intensity:60},{id:"chaos",label:"Хаос",intensity:50},{id:"ultrachaos",label:"Ультрахаос",intensity:50}],uu=(e,t)=>{const r={...e,filterType:t,filterIntensity:xu.find(e=>e.id===t)?.intensity??50};return delete r.combo,r},gu=[{id:"cinema",label:"Кіно",icon:me,config:{darkIntensity:15,filterType:"sepia",filterIntensity:20}},{id:"night",label:"Ніч",icon:fe,config:{darkIntensity:70,filterType:"none",filterIntensity:50}},{id:"retro",label:"Ретро",icon:P,config:{darkIntensity:5,filterType:"grayscale",filterIntensity:80}},{id:"acid",label:"Кислота",icon:nr,config:{darkIntensity:0,filterType:"hue",filterIntensity:60}},{id:"reading",label:"Читання",icon:kt,config:{darkIntensity:20,filterType:"warm",filterIntensity:60}},{id:"oldphoto",label:"Старе фото",icon:Je,config:{darkIntensity:10,filterType:"combo",combo:["sepia","contrast"],filterIntensity:60}}],mu=ce,yu=xu.filter(e=>!["none","hue","chaos","ultrachaos"].includes(e.id)),bu=e=>(e?.label||"").replace(/^✨\s*/,""),wu={darkIntensity:0,filterType:"none",filterIntensity:50};if("undefined"!=typeof document){const e=document.createElement("style");e.id="visual-filters-animations-v2",e.innerHTML="\n    @keyframes ultrachaos-anim {\n      0% { backdrop-filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }\n      50% { backdrop-filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }\n      100% { backdrop-filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }\n    }\n    @keyframes rainbow-anim {\n      0% { backdrop-filter: brightness(var(--v-bright)) hue-rotate(0deg); }\n      100% { backdrop-filter: brightness(var(--v-bright)) hue-rotate(360deg); }\n    }\n\n  ",document.getElementById(e.id)||document.head.appendChild(e),document.getElementById("visual-filters-pixelate")?.ownerSVGElement?.remove();{const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("aria-hidden","true"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.overflow="hidden",e.style.pointerEvents="none";const t=document.createElementNS("http://www.w3.org/2000/svg","filter");t.setAttribute("id","visual-filters-pixelate"),t.setAttribute("x","0"),t.setAttribute("y","0"),t.setAttribute("width","100%"),t.setAttribute("height","100%");const r=document.createElementNS("http://www.w3.org/2000/svg","feFlood");r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("height","1"),r.setAttribute("width","1");const i=document.createElementNS("http://www.w3.org/2000/svg","feComposite");i.setAttribute("width","2"),i.setAttribute("height","2");const a=document.createElementNS("http://www.w3.org/2000/svg","feTile");a.setAttribute("result","tiles");const n=document.createElementNS("http://www.w3.org/2000/svg","feComposite");n.setAttribute("in","SourceGraphic"),n.setAttribute("in2","tiles"),n.setAttribute("operator","in");const s=document.createElementNS("http://www.w3.org/2000/svg","feMorphology");s.setAttribute("operator","dilate"),s.setAttribute("radius","0"),t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(n),t.appendChild(s),e.appendChild(t),document.body.appendChild(e)}}var vu=(e,t)=>{switch(e){case"grayscale":return`grayscale(${t}%)`;case"sepia":return`sepia(${t}%)`;case"invert":return`invert(${t<=50?.6*t:70+.6*(t-50)}%)`;case"matrix":return(e=>{const t=Math.round(1+e/10),r=2*t+1,i=document.querySelector("#visual-filters-pixelate feFlood"),a=document.querySelector("#visual-filters-pixelate feComposite"),n=document.querySelector("#visual-filters-pixelate feMorphology");i&&a&&n&&(i.setAttribute("x",String(t)),i.setAttribute("y",String(t)),a.setAttribute("width",String(r)),a.setAttribute("height",String(r)),n.setAttribute("radius",String(t)))})(t),"undefined"!=typeof CSS&&CSS.supports?.("backdrop-filter","url(#visual-filters-pixelate)")?"url(#visual-filters-pixelate)":`contrast(${110+.7*t}%) saturate(${100+.8*t}%)`;case"uv":return`hue-rotate(280deg) saturate(${100+t}%)`;case"contrast":return`contrast(${2*t}%)`;case"saturate":return`saturate(${2*t}%)`;case"blur":return`blur(${t/10}px)`;case"warm":return`sepia(${.6*t}%) saturate(${100+.6*t}%) hue-rotate(-${.15*t}deg)`;case"noir":return`grayscale(100%) contrast(${100+1.5*t}%) brightness(${100-.2*t}%)`;default:return""}},ku=e=>{if(!e)return"none";const t=100-.6*(e.darkIntensity||0),{filterType:r,filterIntensity:i=50}=e;if("hue"===r)return`brightness(${t}%) hue-rotate(180deg)`;if("ultrachaos"===r)return`brightness(${t}%) contrast(${100+2*i}%) saturate(${100+5*i}%) hue-rotate(180deg)`;if("chaos"===r)return`brightness(${t}%) ${vu("uv",i)}`;return[`brightness(${t}%)`,...("combo"===r?e.combo||[]:[r]).map(e=>vu(e,i)).filter(Boolean)].join(" ")},ju=(e,t)=>{e.style.backdropFilter=t,e.style.webkitBackdropFilter=t},Mu=e=>{if(!e)return;const t=(()=>{let e=document.getElementById("visual-filters-layer");return e||(e=document.createElement("div"),e.id="visual-filters-layer",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"fixed",inset:"0",zIndex:"1899",pointerEvents:"none",transition:"backdrop-filter 0.4s ease-in-out, -webkit-backdrop-filter 0.4s ease-in-out"}),document.body.appendChild(e)),e})();document.documentElement.style.filter="",document.documentElement.style.animation="";const r=100-.6*(e.darkIntensity||0),{filterType:i,filterIntensity:a=50}=e;if(t.style.animation="none",t.style.display="","ultrachaos"===i){const e=100+.6*a,i=100+2*a,n=100+1.6*a,s=100+5*a,o=a/50;return t.style.setProperty("--v-bright",`${r}%`),t.style.setProperty("--v-contrast-min",`${e}%`),t.style.setProperty("--v-contrast-max",`${i}%`),t.style.setProperty("--v-saturate-min",`${n}%`),t.style.setProperty("--v-saturate-max",`${s}%`),t.style.setProperty("--v-blur-max",`${o}px`),ju(t,`brightness(${r}%) contrast(${i}%) saturate(${s}%) hue-rotate(180deg)`),void(t.style.animation="ultrachaos-anim 4s infinite linear")}if("hue"===i){t.style.setProperty("--v-bright",`${r}%`);const e=a>0?200/a:0;return ju(t,e>0?`brightness(${r}%) hue-rotate(180deg)`:`brightness(${r}%)`),void(e>0&&(t.style.animation=`rainbow-anim ${e}s infinite linear`))}const n=("combo"===i?e.combo||[]:[i]).map(e=>vu(e,a)).filter(Boolean);if(100===r&&0===n.length)return ju(t,""),void(t.style.display="none");ju(t,[`brightness(${r}%)`,...n].join(" "))},Su="visual-filters-sync",$u=(e,t)=>queueMicrotask(()=>window.dispatchEvent(new CustomEvent(Su,{detail:{key:e,value:t}}))),Du=e=>{const[t,r]=(0,Ar.useState)(wu),[i,a]=(0,Ar.useState)([]),n=e?.account?`visualConfig_${e.account}`:"visualConfig_guest",s=e?.account?`customPresets_${e.account}`:"customPresets_guest";(0,Ar.useEffect)(()=>{Po.default.getItem(n).then(e=>{e&&r(e)}),Po.default.getItem(s).then(e=>{a(e||[])})},[n,s]),(0,Ar.useEffect)(()=>{const e=e=>{e.detail.key===n&&r(e.detail.value),e.detail.key===s&&a(e.detail.value)};return window.addEventListener(Su,e),()=>window.removeEventListener(Su,e)},[n,s]),(0,Ar.useEffect)(()=>{let e;if("chaos"===t.filterType){const r=()=>{const e=xu.filter(e=>!["none","chaos","ultrachaos"].includes(e.id)),r=e[Math.floor(Math.random()*e.length)],i=Math.floor(80*Math.random())+20;Mu({...t,filterType:r.id,filterIntensity:i})};r(),e=setInterval(r,Math.floor(2e3*Math.random())+1e3)}else Mu(t);return()=>clearInterval(e)},[t]);const o=(0,Ar.useCallback)(e=>{r(t=>{const r="function"==typeof e?e(t):e;return Po.default.setItem(n,r),$u(n,r),r})},[n]),l=(0,Ar.useCallback)(()=>{o(wu),Po.default.setItem(n,wu)},[n,o]),c=(0,Ar.useCallback)(e=>{if(!e.trim())return;const r={id:`custom_${Date.now()}`,label:e.trim(),config:{...t}};a(e=>{if(e.length>=6)return e;const t=[...e,r];return Po.default.setItem(s,t),$u(s,t),t})},[s,t]),d=(0,Ar.useCallback)(e=>{a(t=>{const r=t.filter(t=>t.id!==e);return Po.default.setItem(s,r),$u(s,r),r})},[s]),h=(0,Ar.useCallback)((e,t)=>{t.trim()&&a(r=>{const i=r.map(r=>r.id===e?{...r,label:t.trim()}:r);return Po.default.setItem(s,i),$u(s,i),i})},[s]),f=(0,Ar.useCallback)(e=>{a(e),Po.default.setItem(s,e),$u(s,e)},[s]);return{visualConfig:t,setVisualConfig:o,resetFilters:l,FILTERS:xu,PRESETS:gu,customPresets:i,saveCustomPreset:c,deleteCustomPreset:d,updateCustomPresetName:h,reorderCustomPresets:f}},Cu=Eo.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Lu=Fo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Au=Fo`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,zu=Eo.div`
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: ${e=>e.$accentColor?`3px solid ${e.$accentColor}`:"2px solid "+(e.$isDarkMode?"white":"#000000")};
  position: fixed;
  background-color: ${e=>e.$accentColor?e.$isDarkMode?`color-mix(in srgb, ${e.$accentColor} 35%, #0d0d0d)`:`color-mix(in srgb, ${e.$accentColor} 35%, #ffffff)`:e.$isDarkMode?"rgba(0, 0, 0, 0.45)":"rgba(255, 255, 255, 0.86)"};
  box-shadow: ${e=>e.$accentColor?`0 3px 14px ${e.$accentColor}66`:"none"};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"blur(8px)"};
  color: ${e=>e.$isDarkMode?"white":"#000000"};
  top: 0;
  left: 0;
  z-index: 1900;
  transition:
    background-color 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.4s ease;
  box-sizing: border-box;
  animation: ${Au} 0.8s ease-out 4.3s both;
  margin: 0;
`,Iu=Eo.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`,Eu=Eo.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${e=>e.$isDarkMode?"#fff":"#1a1a1a"};
  background-color: ${e=>e.$isDarkMode?"#090909":"#fefbfb"};
  align-items: center;
  height: 26px;
  justify-content: center;
  padding: 4px 20%;
  border-radius: 6px;
  flex-shrink: 0;
  transition: outline 0.15s ease, transform 0.15s ease;

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`,Nu=Eo.span`
  display: inline-block;
  font-size: 21px;
`;Eo.span`
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

  ${e=>e.$uColor?.includes("linear")?Ao`
        background: ${e.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${Lu} 5s ease infinite;
      `:`color: ${e.$uColor||"inherit"};`}
`;var Ru,Tu,Fu,Pu=Eo.img`
  width: 35px;
  height: 35px;
  min-width: 30px;
  margin-right: 0;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  background-image: ${e=>e.$bColor?.includes("linear-gradient")?`linear-gradient(white, white), ${e.$bColor}`:"none"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-color: ${e=>e.$bColor?.includes("linear-gradient")?"transparent":e.$bColor||"transparent"};
`,Vu=({src:e,...t})=>{const[r,i]=(0,Ar.useState)(!1),[a,n]=(0,Ar.useState)(!1),[s,o]=(0,Ar.useState)(0),l=(0,Ar.useRef)(null);(0,Ar.useEffect)(()=>{window.clearTimeout(l.current),i(!1),n(!1),o(0)},[e]),(0,Ar.useEffect)(()=>{const e=()=>{"visible"===document.visibilityState&&(window.clearTimeout(l.current),i(!1),n(!1),o(e=>e+1))};return window.addEventListener("online",e),document.addEventListener("visibilitychange",e),()=>{window.clearTimeout(l.current),window.removeEventListener("online",e),document.removeEventListener("visibilitychange",e)}},[]);return(0,_o.jsx)(Pu,{src:r?tu:e,onError:()=>{if(!a)return n(!0),void(l.current=window.setTimeout(()=>o(e=>e+1),1e3));i(!0)},...t},s)},_u=Eo.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ou=Eo.button`
  display: flex;
  align-items: center;
  background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.07)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"};
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`,Bu=Eo.div`
  position: absolute;
  top: 42px;
  right: 0;
  z-index: 2001;
  min-width: 290px;
  background: ${e=>e.$isDarkMode?"rgba(14, 14, 14, 0.96)":"rgba(255, 255, 255, 0.96)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.12)"};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 12px 14px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
`,Hu=Eo.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,qu=Eo.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`,Ku=Eo.div`
  font-size: 12px;
`,Zu=Eo.div`
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
`,Uu=Eo.div`
  position: absolute;
  top: 52px;
  right: 10px;
  background: ${e=>e.$isDarkMode?"rgba(18, 18, 18, 0.95)":"rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${e=>e.$isDarkMode?"#444":"#ddd"};
  backdrop-filter: blur(5px);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ju=Eo.label`
  font-size: 11px;
  font-weight: bold;
  color: ${e=>e.$isDarkMode?"#fff":"#333"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,Wu=Eo.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${e=>e.$isDarkMode?"#ffb36c":"#007bff"};
`,Gu=Eo.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`,Yu=Eo.button`
  background: ${e=>e.$active?"#ffb36c":"transparent"};
  color: ${e=>e.$active?"#3e2723":e.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 6px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`,Qu=Eo.div`
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 2100;
  background: ${e=>e.$isDarkMode?"rgba(14, 14, 14, 0.97)":"rgba(255, 255, 255, 0.97)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4);
  border-radius: 14px;
  padding: 10px 12px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  min-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  outline: none;
`,Xu=Eo.div`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  margin-bottom: 2px;
`,eg=Eo.div`
  display: flex;
  gap: 6px;
`,tg=Eo.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 6px 8px;
  border-radius: 8px;
  border: 2px solid ${e=>e.$active?"#00afce":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  transition: border-color 0.15s, transform 0.1s;
  background: ${e=>e.$bg};
  color: ${e=>e.$color};
  &:hover { transform: translateY(-1px); }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`,rg=Eo.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`,ig=Eo.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$active?"#fff":"transparent"};
  outline: 2px solid ${e=>e.$active?e.$color:"transparent"};
  background: ${e=>e.$color};
  cursor: pointer;
  transition: transform 0.1s, outline 0.12s;
  flex-shrink: 0;
  &:hover { transform: scale(1.2); }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 3px;
    transform: scale(1.2);
  }
`,ag=Eo.div`
  height: 3px;
  border-radius: 2px;
  background: ${e=>e.$color||"transparent"};
  opacity: ${e=>e.$color?.6:0};
  transition: background 0.2s;
`,ng=[{id:"none",label:"Без накладення",color:null,hex:null},{id:"red",label:"Червоний",color:"#FF3B30",hex:"#FF3B30"},{id:"orange",label:"Оранжевий",color:"#FF9500",hex:"#FF9500"},{id:"yellow",label:"Жовтий",color:"#FFD60A",hex:"#FFD60A"},{id:"green",label:"Зелений",color:"#30D158",hex:"#30D158"},{id:"cyan",label:"Блакитний",color:"#00C7BE",hex:"#00C7BE"},{id:"blue",label:"Синій",color:"#0A84FF",hex:"#0A84FF"},{id:"violet",label:"Фіолетовий",color:"#BF5AF2",hex:"#BF5AF2"},{id:"pink",label:"Рожевий",color:"#FF375F",hex:"#FF375F"}],sg=({content:e,children:t,placement:r="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,Ar.useState)(!1),s=(0,Ar.useRef)(null),{refs:o,floatingStyles:l,context:c}=Ie({open:a,onOpenChange:n,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:C,middleware:[ge(8),tr(),z({padding:5}),M({element:s})]}),{isMounted:d,styles:h}=pe(c,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),f=or(c,{move:!1}),p=Xt(c),x=st(c),u=ar(c,{role:"tooltip"}),{getReferenceProps:g,getFloatingProps:m}=_e([f,p,x,u]);if(!e)return t;const y=i?"#111111":"#ffffff";return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{ref:o.setReference,...g(),style:{display:"inline-flex"},children:t}),d&&(0,_o.jsx)(dt,{children:(0,_o.jsxs)(Cu,{ref:o.setFloating,$isDarkMode:i,style:{...l,...h},...m(),children:[e,(0,_o.jsx)(jt,{ref:s,context:c,fill:y,stroke:"#00acb9",strokeWidth:1})]})})]})},og=({sfxVolume:e=.2,onOpenRegister:t,onOpenSettings:r,onOpenVip:i,onOpenShop:a,onOpenHelp:n,onOpenOtherOptions:s,onOpenInfo:o,onOpenAuthorsDirectory:l,isInfoOpen:c,isDarkMode:d,toggleTheme:h,isStickyBgMode:f,setIsStickyBgMode:p,onOpenAchievements:x,currentAvatar:u,onLogout:g,user:m,setIsFsActive:y,loadingStrategy:b,onSetLoadingStrategy:w})=>{const{registerRef:v}=Lh?.()||{registerRef:()=>{}},[k,j]=(0,Ar.useState)(!1),[M,S]=(0,Ar.useState)(!1),[$,D]=(0,Ar.useState)(!1),[C,L]=(0,Ar.useState)(null),A=(0,Ar.useRef)(null),z=(0,Ar.useRef)(null),E=m?.photoURL||m?.avatar||u||"data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",[N,R]=(0,Ar.useState)(!1),T=t=>{const r=new Audio(t);r.volume=e,r.play().catch(()=>{})};(0,Ar.useEffect)(()=>{if(!N)return;const e=e=>{const t=document.getElementById("header-profile-modal"),r=document.getElementById("header-profile-button");t&&!t.contains(e.target)&&r&&!r.contains(e.target)&&R(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[N]),(0,Ar.useEffect)(()=>{const e=e=>{!e.altKey||"t"!==e.key.toLowerCase()&&"е"!==e.key&&"Е"!==e.key&&"т"!==e.key&&"Т"!==e.key||(e.preventDefault(),T(pu),z.current?.focus())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[e]),(0,Ar.useEffect)(()=>{if($){const e=setTimeout(()=>{(A.current?.querySelector("button"))?.focus()},50);return()=>clearTimeout(e)}},[$]);const F=e=>{if("Escape"===e.key)return e.preventDefault(),D(!1),void z.current?.focus();if(e.altKey&&("a"===e.key.toLowerCase()||"ф"===e.key||"Ф"===e.key||"а"===e.key||"А"===e.key)){e.preventDefault(),T(fu);const t=ng.map(e=>e.color),r=(t.indexOf(C)+1)%t.length;return void L(t[r])}const t=Array.from(A.current?.querySelectorAll("button")||[]);if(!t.length)return;const r=t.indexOf(document.activeElement);"ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),t[r<t.length-1?r+1:0]?.focus()):"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),t[r>0?r-1:t.length-1]?.focus())},P=e=>{if((!A.current||!A.current.contains(document.activeElement))&&["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(e.key)){const t=e.currentTarget,r=Array.from(t.querySelectorAll("button, [tabindex='0']")).filter(e=>e.offsetWidth>0&&e.offsetHeight>0);if(!r.length)return;const i=r.indexOf(document.activeElement);if(-1===i)return;"ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),r[(i+1)%r.length]?.focus()):"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),r[(i-1+r.length)%r.length]?.focus())}},{visualConfig:V,setVisualConfig:_,resetFilters:O,FILTERS:B,PRESETS:H,customPresets:q,saveCustomPreset:K,deleteCustomPreset:Z,updateCustomPresetName:U,reorderCustomPresets:J}=Du(m);(0,Ar.useEffect)(()=>{const e=setInterval(()=>j(e=>!e),3e3);return()=>clearInterval(e)},[]);const W=()=>{T("/assets/concierge-ItJSby-8.mp3"),p(e=>!e)},G=()=>{T(fu),n&&n()},Y=()=>{T(fu),a&&a()},Q=e=>{T(fu),_(e)};return(0,_o.jsx)(_o.Fragment,{children:(0,_o.jsxs)(zu,{$isDarkMode:d,$isStickyBgMode:f,$accentColor:C,"data-decorator-ignore":"true",children:[(0,_o.jsx)(Iu,{children:m?(0,_o.jsx)(_o.Fragment,{children:(0,_o.jsxs)(Zu,{ref:e=>v("headerBgTheme",e),onKeyDown:P,children:[(0,_o.jsxs)("div",{style:{position:"relative",display:"inline-flex"},children:[(0,_o.jsx)(sg,{content:"Вибір теми",isDarkMode:d,children:(0,_o.jsxs)(Eu,{ref:z,onClick:()=>{T(pu),D(e=>!e)},onKeyDown:e=>{"ArrowDown"!==e.key&&"Enter"!==e.key&&" "!==e.key||("ArrowDown"===e.key&&e.preventDefault(),D(!0))},$isDarkMode:d,"aria-label":"Вибір теми (Alt + T)",style:{position:"relative"},children:[(0,_o.jsx)(Nu,{style:{fontSize:"19px"},children:(0,_o.jsx)(We,{})}),C&&(0,_o.jsx)("span",{style:{position:"absolute",bottom:1,right:1,width:6,height:6,borderRadius:"50%",background:C,border:"1px solid rgba(0,0,0,0.3)"}})]})}),$&&(0,_o.jsxs)(Qu,{ref:A,$isDarkMode:d,tabIndex:-1,onKeyDown:F,children:[(0,_o.jsx)(Xu,{children:"Базова тема"}),(0,_o.jsxs)(eg,{children:[(0,_o.jsx)(tg,{$bg:"#ffffff",$color:"#111",$active:!d,onClick:()=>{d&&(T("/assets/bell-B5cBbKiy.mp3"),h())},children:"☀️ Світла"}),(0,_o.jsx)(tg,{$bg:"#111111",$color:"#fff",$active:d,onClick:()=>{d||(T("/assets/bell-B5cBbKiy.mp3"),h())},children:"🌙 Темна"})]}),(0,_o.jsx)(Xu,{children:"Акцентний колір"}),(0,_o.jsx)(rg,{children:ng.map(e=>(0,_o.jsx)(sg,{content:e.label,isDarkMode:d,placement:"top",children:(0,_o.jsx)(ig,{$color:e.color||(d?"#555":"#ccc"),$active:C===e.color,onClick:()=>{T("/assets/relax-Dn2PcHdb.mp3"),L(e.color)},title:e.label,style:"none"===e.id?{background:"linear-gradient(135deg,#ccc 40%,#fff 60%)",border:"2px solid #aaa"}:{}})},e.id))}),(0,_o.jsx)(ag,{$color:C}),(0,_o.jsx)("div",{style:{fontSize:10,opacity:.45,textAlign:"center"},children:C?`Акцент: ${ng.find(e=>e.color===C)?.label}`:"Без накладення кольору"})]})]}),(0,_o.jsx)(sg,{content:"Фон на увесь сайт",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:W,$isDarkMode:d,"aria-label":"Фон на увесь сайт",children:(0,_o.jsx)(Nu,{children:(0,_o.jsx)(I,{style:{color:f?"#ff005d":"inherit"}})})})}),(0,_o.jsx)(sg,{content:"Допомога з сайтом",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:G,$isDarkMode:d,"aria-label":"Допомога з сайтом",children:(0,_o.jsx)(Nu,{style:{fontWeight:900},children:"?"})})}),(0,_o.jsx)(sg,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:Y,$isDarkMode:d,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,_o.jsx)(ot,{})})}),(0,_o.jsx)(sg,{content:"Автори та джерела",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:()=>l?.(),$isDarkMode:d,"aria-label":"Автори та джерела",children:(0,_o.jsx)(Nu,{style:{fontSize:"18px"},children:(0,_o.jsx)(hr,{})})})}),(0,_o.jsx)(sg,{content:"Налаштування",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:()=>{T(fu),r&&r()},$isDarkMode:d,"aria-label":"Налаштування",children:(0,_o.jsx)(Nu,{children:(0,_o.jsx)(ue,{})})})}),(0,_o.jsx)(sg,{content:"Вихід з акаунта",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:()=>{T(fu),g&&g()},$isDarkMode:d,"aria-label":"Вихід з акаунта",children:(0,_o.jsx)(Nu,{children:(0,_o.jsx)(Ue,{})})})}),(0,_o.jsxs)(_u,{children:[(0,_o.jsx)(sg,{content:"Ваш профіль",isDarkMode:d,children:(0,_o.jsx)(Ou,{id:"header-profile-button",$isDarkMode:d,onClick:()=>R(e=>!e),"aria-label":"Профіль користувача",children:(0,_o.jsx)(Vu,{src:E,$bColor:m.borderColor,style:{width:"33px",height:"33px"}})})}),N&&(0,_o.jsx)(Bu,{id:"header-profile-modal",$isDarkMode:d,children:(0,_o.jsxs)(Hu,{children:[(0,_o.jsx)(Vu,{src:E,$bColor:m.borderColor,style:{width:"42px",height:"42px"}}),(0,_o.jsxs)("div",{children:[(0,_o.jsx)(Ku,{children:"Профіль"}),(0,_o.jsxs)(qu,{children:["Електронна пошта: ",m.email||m.account]})]})]})})]})]})}):(0,_o.jsxs)(Zu,{ref:e=>v("headerBgTheme",e),onKeyDown:P,children:[(0,_o.jsxs)("div",{style:{position:"relative",display:"inline-flex"},children:[(0,_o.jsx)(sg,{content:"Вибір теми",isDarkMode:d,children:(0,_o.jsxs)(Eu,{ref:z,onClick:()=>{T(pu),D(e=>!e)},onKeyDown:e=>{"ArrowDown"!==e.key&&"Enter"!==e.key&&" "!==e.key||("ArrowDown"===e.key&&e.preventDefault(),D(!0))},$isDarkMode:d,"aria-label":"Вибір теми (Alt + T)",style:{position:"relative"},children:[(0,_o.jsx)(Nu,{style:{fontSize:"18px"},children:(0,_o.jsx)(We,{})}),C&&(0,_o.jsx)("span",{style:{position:"absolute",bottom:1,right:1,width:6,height:6,borderRadius:"50%",background:C,border:"1px solid rgba(0,0,0,0.3)"}})]})}),$&&(0,_o.jsxs)(Qu,{ref:A,$isDarkMode:d,tabIndex:-1,onKeyDown:F,children:[(0,_o.jsx)(Xu,{children:"Базова тема"}),(0,_o.jsxs)(eg,{children:[(0,_o.jsx)(tg,{$bg:"#ffffff",$color:"#111",$active:!d,onClick:()=>{d&&(T("/assets/bell-B5cBbKiy.mp3"),h())},children:"☀️ Світла"}),(0,_o.jsx)(tg,{$bg:"#111111",$color:"#fff",$active:d,onClick:()=>{d||(T("/assets/bell-B5cBbKiy.mp3"),h())},children:"🌙 Темна"})]}),(0,_o.jsx)(Xu,{children:"Акцентний колір"}),(0,_o.jsx)(rg,{children:ng.map(e=>(0,_o.jsx)(sg,{content:e.label,isDarkMode:d,placement:"top",children:(0,_o.jsx)(ig,{$color:e.color||(d?"#555":"#ccc"),$active:C===e.color,onClick:()=>{T("/assets/relax-Dn2PcHdb.mp3"),L(e.color)},style:"none"===e.id?{background:"linear-gradient(135deg,#ccc 40%,#fff 60%)",border:"2px solid #aaa"}:{}})},e.id))}),(0,_o.jsx)(ag,{$color:C}),(0,_o.jsx)("div",{style:{fontSize:10,opacity:.45,textAlign:"center"},children:C?`Акцент: ${ng.find(e=>e.color===C)?.label}`:"Без накладення кольору"})]})]}),(0,_o.jsx)(sg,{content:"Фон на увесь сайт",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:W,$isDarkMode:d,"aria-label":"Фон на увесь сайт",children:(0,_o.jsx)(Nu,{children:(0,_o.jsx)(I,{style:{color:f?"#ff005d":"inherit"}})})})}),(0,_o.jsx)(sg,{content:"Навчання",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:G,$isDarkMode:d,"aria-label":"Навчання",children:(0,_o.jsx)(Nu,{style:{fontWeight:900},children:"?"})})}),(0,_o.jsx)(sg,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:Y,$isDarkMode:d,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,_o.jsx)(ot,{})})}),(0,_o.jsx)(sg,{content:"Автори та джерела",isDarkMode:d,children:(0,_o.jsx)(Eu,{onClick:()=>l?.(),$isDarkMode:d,"aria-label":"Автори та джерела",children:(0,_o.jsx)(Nu,{style:{fontSize:"18px"},children:(0,_o.jsx)(hr,{})})})}),(0,_o.jsx)("button",{onClick:()=>{T(fu),t&&t()},style:{fontSize:"14px",cursor:"pointer",background:"none",border:"none",marginRight:"15px",textDecoration:"underline",color:d?"#fff":"#000"},children:"Акаунт"})]})}),M&&(0,_o.jsxs)(Uu,{$isDarkMode:d,children:[(0,_o.jsxs)("div",{children:[(0,_o.jsxs)(Ju,{$isDarkMode:d,children:["Яскравість ",(0,_o.jsxs)("span",{children:[V.darkIntensity,"%"]})]}),(0,_o.jsx)(Wu,{type:"range",min:"0",max:"100",value:V.darkIntensity,onChange:e=>_(t=>({...t,darkIntensity:Number(e.target.value)})),$isDarkMode:d})]}),(0,_o.jsx)(Gu,{children:B.map(e=>(0,_o.jsx)(Yu,{$active:V.filterType===e.id,$isDarkMode:d,onClick:()=>{return t=e.id,T(fu),void _(e=>uu(e,t));var t},children:e.label},e.id))}),"none"!==V.filterType&&(0,_o.jsxs)("div",{children:[(0,_o.jsxs)(Ju,{$isDarkMode:d,children:["Сила ефекту ",(0,_o.jsxs)("span",{children:[V.filterIntensity,"%"]})]}),(0,_o.jsx)(Wu,{type:"range",min:"0",max:"100",value:V.filterIntensity,onChange:e=>_(t=>({...t,filterIntensity:Number(e.target.value)})),$isDarkMode:d})]}),(0,_o.jsxs)("div",{style:{marginTop:"5px"},children:[(0,_o.jsx)(Ju,{$isDarkMode:d,style:{marginBottom:"8px"},children:"Стилі"}),(0,_o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[H.map(e=>(0,_o.jsx)("button",{style:{background:"transparent",border:"1px solid #ffb36c",color:d?"#ffb36c":"#333",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer"},onClick:()=>Q(e.config),children:(0,_o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(e.icon,{})," ",e.label]})},e.id)),q.map(e=>(0,_o.jsx)("button",{style:{background:"rgba(255, 179, 108, 0.1)",border:"1px solid #7afcff",color:d?"#7afcff":"#006666",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis"},onClick:()=>Q(e.config),children:(0,_o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[(0,_o.jsx)(mu,{})," ",bu(e)]})},e.id))]})]})]})]})})},lg=[{id:1,author:"Mondo TV",linkkone:"https://megogo.net/ua/view/1813141-dinofroz-sezon-1-seriya-1.html?video_view_tab=description",linknameoneone:"Дивитися",linknameonetwo:"Megogo","Замітка":"Ця студія багато чого цікавого випустила, ми показали лише незначну к-сть, не лише з повагою до автора і українського телеканалу що це показав, але й тому що Стихія хоче показали трохи ностальгії. Посилання на перегляд у Мегого і ютуб канал Малатко ТВ, беззаперечно розмістив. Надіюсь хтось це передивитися.",info:"Mondo TV SpA — італійська компанія з виробництва та розповсюдження телевізійних програм. Заснована Орландо Корраді в 1985 році та розташована в Римі, Mondo TV є публічною компанією, акції якої котируються на сегменті STAR головної італійської фондової біржі Borsa Italiana. Вона самостійно або у співпраці з міжнародними мережами розповсюджує та виробляє мультсеріали та художні фільми для телебачення та кінотеатрів. Mondo TV також працює в інших суміжних секторах, таких як розповсюдження музики та аудіовізуальних матеріалів, експлуатація, медіа, видавнича справа та мерчандайзинг, та є одним з небагатьох відділень італійських компаній або груп з виробництва аудіовізуальних матеріалів, що працюють на ринках за межами Італії."},{id:2,author:"TheFatRat","Замітка":"Особистий респект, за бажання поширення їхніх мелодій безкоштовно.",info:"TheFatRat (справжнє ім'я Крістіан Бюлль) — німецький музичний продюсер та діджей, відомий своїми електронними треками, які часто використовуються в ігрових відео та стрімах. Його музика характеризується енергійними ритмами та мелодійними елементами, що робить її привабливою для геймерів та фанатів електронної музики.",linkkone:"https://www.youtube.com/@TheFatRat",linknameoneone:"Профіль автора",linknameonetwo:"У YouTube"},{id:3,author:"TheTurkeyStudio",info:"Доміно сам цю назву придумав, він хоче щоб було місце де немає поняття, і чому прогноз погоди такий політичний, тому я й придумав Стихію :)"},{id:4,author:"DJ-Nate","Примітка":"Пісні автора з гри Geometry Dash, що є популярною грою на мобільних пристроях.","Замітка":"Лише тому що мій клас у минулому грав безпервно у цю гру.",linkkone:"https://dj-nate.newgrounds.com/",linknameoneone:"Профіль автора",linknameonetwo:"У Newgrounds",info:"DJ-Nate відомий своїми електронними треками, які часто використовуються в ігрових відео та стрімах. Його музика характеризується енергійними ритмами та мелодійними елементами, що робить її привабливою для геймерів та фанатів електронної музики."},{id:5,author:"SayGames - MyLittleUniverse(Estoty)","Примітка":"Усе чудово.","Замітка":"Без заміток",info:"SayGames - це команда розробників, які створювали гру My Little Universe і т.д. коротше ви управляєте маленьким світом, граючи за стікмена."}],cg=Eo(h.div)`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`,dg=Eo(h.div)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 640px) {
    & > div {
      grid-template-columns: 1fr !important;
    }
  }
`,hg=Eo.button`
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`,fg=({isOpen:e,onClose:t})=>{const[r,i]=(0,Ar.useState)(lg[0]||null);return e?(0,_o.jsx)(cg,{onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,_o.jsxs)(dg,{onClick:e=>e.stopPropagation(),initial:{y:30,opacity:0},animate:{y:0,opacity:1},exit:{y:30,opacity:0},style:{background:"linear-gradient(145deg, rgba(17,18,34,0.97), rgba(20,28,52,0.97))",color:"white",border:"1px solid rgba(255,255,255,0.08)",padding:"18px",borderRadius:"18px",maxWidth:"760px",width:"92%",maxHeight:"78vh",overflow:"hidden",zIndex:2050},children:[(0,_o.jsx)(hg,{onClick:t,style:{color:"white"},children:"×"}),(0,_o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(220px, 260px) minmax(0, 1fr)",gap:"16px"},children:[(0,_o.jsxs)("div",{children:[(0,_o.jsx)("h3",{style:{margin:"0 0 12px",fontSize:"18px",color:"#ffb36c"},children:"Автори та джерела"}),(0,_o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxHeight:"52vh",overflowY:"auto",paddingRight:"4px"},children:lg.map(e=>(0,_o.jsxs)("button",{onClick:()=>i(e),style:{width:"100%",background:r?.author===e.author?"rgba(255,179,108,0.14)":"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",color:"white",padding:"10px 12px",textAlign:"left",cursor:"pointer",transition:"all 0.2s ease"},children:[(0,_o.jsx)("div",{style:{fontWeight:700,fontSize:"14px",lineHeight:1.3},children:e.author}),(0,_o.jsx)("div",{style:{fontSize:"11px",opacity:.75,marginTop:"2px"},children:e.info?e.info.slice(0,54).trim()+(e.info.length>54?"…":""):"Деталі автора"})]},e.id||e.author))})]}),(0,_o.jsx)("div",{style:{minWidth:0,overflowY:"auto",maxHeight:"56vh",paddingRight:"6px"},children:r?(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsxs)("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"10px",marginBottom:"12px"},children:[(0,_o.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Автор / Компанія"}),(0,_o.jsx)("h4",{style:{margin:0,fontSize:"22px",lineHeight:1.2,color:"#fff"},children:r.author})]}),(0,_o.jsx)("div",{style:{fontSize:"14px",lineHeight:"1.7",color:"rgba(255,255,255,0.9)",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:r.info||"Опис автора відсутній."}),(r.linkkone||r.linknameoneone||r.linknameonetwo)&&(0,_o.jsxs)("div",{style:{marginTop:"18px",display:"flex",flexWrap:"wrap",gap:"8px"},children:[r.linkkone&&(0,_o.jsx)("a",{href:r.linkkone,target:"_blank",rel:"noreferrer",style:{display:"inline-block",background:"rgba(255,179,108,0.12)",border:"1px solid rgba(255,179,108,0.45)",color:"#ffd39a",padding:"8px 12px",borderRadius:"10px",textDecoration:"none",fontSize:"13px"},children:r.linknameoneone||"Джерело"}),r.linknameonetwo&&r.linkkone&&(0,_o.jsx)("span",{style:{color:"rgba(255,255,255,0.7)",fontSize:"12px",alignSelf:"center"},children:r.linknameonetwo})]}),(r["Замітка"]||r["Примітка"])&&(0,_o.jsxs)("div",{style:{marginTop:"18px",padding:"12px 14px",borderRadius:"12px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"},children:[r["Замітка"]&&(0,_o.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,_o.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Нотатка"}),(0,_o.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",lineHeight:"1.6",fontSize:"13px"},children:r["Замітка"]})]}),r["Примітка"]&&(0,_o.jsxs)("div",{children:[(0,_o.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Примітка"}),(0,_o.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",lineHeight:"1.6",fontSize:"13px"},children:r["Примітка"]})]})]})]}):null})]})]})}):null},pg="/assets/turkey-in-dragon-museum-DO6W3_-e.webp",xg=[{name:"Конотоп",fullName:"Конотоп (Сумська обл., Україна)",lat:51.24,lon:33.2,aliases:["конотоп","конотопі","конотопу","конотопом","konotop"]},{name:"Київ",fullName:"Київ (Україна)",lat:50.45,lon:30.52,aliases:["київ","києві","києва","києвом","kyiv","kiev"]},{name:"Харків",fullName:"Харків (Харківська обл., Україна)",lat:49.99,lon:36.23,aliases:["харків","харкові","харкова","харковом","kharkiv","kharkov"]},{name:"Одеса",fullName:"Одеса (Одеська обл., Україна)",lat:46.48,lon:30.72,aliases:["одеса","одесі","одеси","одесою","odesa","odessa"]},{name:"Дніпро",fullName:"Дніпро (Дніпропетровська обл., Україна)",lat:48.46,lon:35.04,aliases:["дніпро","дніпрі","дніпра","дніпром","dnipro","dnepropetrovsk"]},{name:"Львів",fullName:"Львів (Львівська обл., Україна)",lat:49.84,lon:24.03,aliases:["львів","львові","львова","львовом","lviv","lwo"]},{name:"Запоріжжя",fullName:"Запоріжжя (Запорізька обл., Україна)",lat:47.84,lon:35.14,aliases:["запоріжжя","запоріжжі","zaporizhzhia","zaporozhye"]},{name:"Кривий Ріг",fullName:"Кривий Ріг (Дніпропетровська обл., Україна)",lat:47.91,lon:33.39,aliases:["кривий ріг","кривому розі","кривого рогу","kryvyi rih"]},{name:"Миколаїв",fullName:"Миколаїв (Миколаївська обл., Україна)",lat:46.98,lon:32,aliases:["миколаїв","миколаєві","миколаєва","mykolaiv","nikolaev"]},{name:"Вінниця",fullName:"Вінниця (Вінницька обл., Україна)",lat:49.23,lon:28.48,aliases:["вінниця","вінниці","вінницею","vinnytsia","vinnitsa"]},{name:"Полтава",fullName:"Полтава (Полтавська обл., Україна)",lat:49.59,lon:34.55,aliases:["полтава","полтаві","полтави","poltava"]},{name:"Чернігів",fullName:"Чернігів (Чернігівська обл., Україна)",lat:51.49,lon:31.29,aliases:["чернігів","чернігові","чернігова","chernihiv","chernigov"]},{name:"Черкаси",fullName:"Черкаси (Черкаська обл., Україна)",lat:49.44,lon:32.06,aliases:["черкаси","черкасах","черкасів","cherkasy","cherkassy"]},{name:"Суми",fullName:"Суми (Сумська обл., Україна)",lat:50.91,lon:34.8,aliases:["суми","сумах","сум","sumy"]},{name:"Житомир",fullName:"Житомир (Житомирська обл., Україна)",lat:50.25,lon:28.66,aliases:["житомир","житомирі","житомира","zhytomyr"]},{name:"Хмельницький",fullName:"Хмельницький (Хмельницька обл., Україна)",lat:49.42,lon:27,aliases:["хмельницький","хмельницькому","khmelnytskyi"]},{name:"Рівне",fullName:"Рівне (Рівненська обл., Україна)",lat:50.62,lon:26.25,aliases:["рівне","рівному","rivne","rovno"]},{name:"Чернівці",fullName:"Чернівці (Чернівецька обл., Україна)",lat:48.29,lon:25.93,aliases:["чернівці","чернівцях","chernivtsi"]},{name:"Кременчук",fullName:"Кременчук (Полтавська обл., Україна)",lat:49.07,lon:33.42,aliases:["кременчук","кременчуці","кременчука","kremenchuk"]},{name:"Тернопіль",fullName:"Тернопіль (Тернопільська обл., Україна)",lat:49.55,lon:25.59,aliases:["тернопіль","тернополі","ternopil"]},{name:"Івано-Франківськ",fullName:"Івано-Франківськ (Івано-Франківська обл., Україна)",lat:48.92,lon:24.71,aliases:["івано-франківськ","франківськ","івано-франківську","ivano-frankivsk"]},{name:"Луцьк",fullName:"Луцьк (Волинська обл., Україна)",lat:50.75,lon:25.34,aliases:["луцьк","луцьку","lutsk"]},{name:"Біла Церква",fullName:"Біла Церква (Київська обл., Україна)",lat:49.8,lon:30.12,aliases:["біла церква","білій церкві","bila tserkva"]},{name:"Ужгород",fullName:"Ужгород (Закарпатська обл., Україна)",lat:48.62,lon:22.3,aliases:["ужгород","ужгороді","uzhhorod"]},{name:"Шостка",fullName:"Шостка (Сумська обл., Україна)",lat:51.86,lon:33.47,aliases:["шостка","шостці","shostka"]},{name:"Умань",fullName:"Умань (Черкаська обл., Україна)",lat:48.75,lon:30.22,aliases:["умань","умані","uman"]},{name:"Бердичів",fullName:"Бердичів (Житомирська обл., Україна)",lat:49.89,lon:28.58,aliases:["бердичів","бердичеві","berdychiv"]},{name:"Дрогобич",fullName:"Дрогобич (Львівська обл., Україна)",lat:49.35,lon:23.5,aliases:["дрогобич","дрогобичі","drohobych"]},{name:"Нікополь",fullName:"Нікополь (Дніпропетровська обл., Україна)",lat:47.57,lon:34.4,aliases:["нікополь","нікополі","nikopol"]},{name:"Бровари",fullName:"Бровари (Київська обл., Україна)",lat:50.51,lon:30.79,aliases:["бровари","броварах","brovary"]},{name:"Павлоград",fullName:"Павлоград (Дніпропетровська обл., Україна)",lat:48.52,lon:35.87,aliases:["павлоград","павлограді","pavlohrad"]},{name:"Сєвєродонецьк",fullName:"Сєвєродонецьк (Луганська обл., Україна)",lat:48.95,lon:38.48,aliases:["сєвєродонецьк","северодонецьк","severodonetsk"]},{name:"Бердянськ",fullName:"Бердянськ (Запорізька обл., Україна)",lat:46.76,lon:36.79,aliases:["бердянськ","бердянську","berdyansk"]},{name:"Кам'янець-Подільський",fullName:"Кам'янець-Подільський (Хмельницька обл., Україна)",lat:48.68,lon:26.58,aliases:["кам'янець-подільський","кам'янець","kamianets-podilskyi"]},{name:"Олександрія",fullName:"Олександрія (Кіровоградська обл., Україна)",lat:48.67,lon:33.11,aliases:["олександрія","олександрії","oleksandriia"]},{name:"Мукачево",fullName:"Мукачево (Закарпатська обл., Україна)",lat:48.44,lon:22.72,aliases:["мукачево","мукачеве","mukachevo"]},{name:"Кам'янське",fullName:"Кам'янське (Дніпропетровська обл., Україна)",lat:48.51,lon:34.61,aliases:["кам'янське","дніпродзержинськ","kamianske"]},{name:"Кропивницький",fullName:"Кропивницький (Кіровоградська обл., Україна)",lat:48.51,lon:32.26,aliases:["кропивницький","кіровоград","kropyvnytskyi"]},{name:"Маріуполь",fullName:"Маріуполь (Донецька обл., Україна)",lat:47.1,lon:37.54,aliases:["маріуполь","маріуполі","mariupol"]},{name:"Севастополь",fullName:"Севастополь (Крим, Україна)",lat:44.62,lon:33.53,aliases:["севастополь","севастополі","sevastopol"]},{name:"Сімферополь",fullName:"Сімферополь (Крим, Україна)",lat:44.95,lon:34.1,aliases:["сімферополь","сімферополі","simferopol"]},{name:"Херсон",fullName:"Херсон (Херсонська обл., Україна)",lat:46.64,lon:32.61,aliases:["херсон","херсоні","kherson"]},{name:"Луганськ",fullName:"Луганськ (Луганська обл., Україна)",lat:48.57,lon:39.31,aliases:["луганськ","луганську","луганська","luhansk","lugansk"]},{name:"Донецьк",fullName:"Донецьк (Донецька обл., Україна)",lat:48.01,lon:37.8,aliases:["донецьк","донеччина","донецьку","донецька","donetsk"]},{name:"Макіївка",fullName:"Макіївка (Донецька обл., Україна)",lat:48.04,lon:37.97,aliases:["макіївка","макіївці","макіївку","makiivka","makeevka"]},{name:"Горлівка",fullName:"Горлівка (Донецька обл., Україна)",lat:48.3,lon:38.05,aliases:["горлівка","горлівці","горлівку","horlivka","gorlovka"]},{name:"Краматорськ",fullName:"Краматорськ (Донецька обл., Україна)",lat:48.74,lon:37.58,aliases:["краматорськ","краматорську","краматорська","kramatorsk"]},{name:"Слов'янськ",fullName:"Слов'янськ (Донецька обл., Україна)",lat:48.85,lon:37.61,aliases:["слов'янськ","слов'янську","слов'янська","sloviansk","slavyansk"]},{name:"Мелітополь",fullName:"Мелітополь (Запорізька обл., Україна)",lat:46.85,lon:35.37,aliases:["мелітополь","мелітополі","мелітополя","melitopol"]},{name:"Бахмут",fullName:"Бахмут (Донецька обл., Україна)",lat:48.59,lon:37.99,aliases:["бахмут","бахмуті","бахмуту","артемівськ","bakhmut"]},{name:"Ізмаїл",fullName:"Ізмаїл (Одеська обл., Україна)",lat:45.35,lon:28.83,aliases:["ізмаїл","ізмаїлі","ізмаїлу","izmail"]},{name:"Ніжин",fullName:"Ніжин (Чернігівська обл., Україна)",lat:51.05,lon:31.88,aliases:["ніжин","ніжині","ніжину","nizhyn","nezhin"]},{name:"Бориспіль",fullName:"Бориспіль (Київська обл., Україна)",lat:50.35,lon:30.95,aliases:["бориспіль","борисполі","борисполя","boryspil"]},{name:"Ірпінь",fullName:"Ірпінь (Київська обл., Україна)",lat:50.52,lon:30.24,aliases:["ірпінь","ірпені","ірпеня","irpin"]},{name:"Буча",fullName:"Буча (Київська обл., Україна)",lat:50.55,lon:30.21,aliases:["буча","бучі","бучу","bucha"]},{name:"Фастів",fullName:"Фастів (Київська обл., Україна)",lat:50.08,lon:29.91,aliases:["фастів","фастові","фастова","fastiv"]},{name:"Коломия",fullName:"Коломия (Івано-Франківська обл., Україна)",lat:48.53,lon:25.04,aliases:["коломия","коломиї","коломию","kolomyia"]},{name:"Стрий",fullName:"Стрий (Львівська обл., Україна)",lat:49.26,lon:23.85,aliases:["стрий","стрию","стриї","stryi","stryy"]},{name:"Калуш",fullName:"Калуш (Івано-Франківська обл., Україна)",lat:49.02,lon:24.36,aliases:["калуш","калуші","калуша","kalush"]},{name:"Ковель",fullName:"Ковель (Волинська обл., Україна)",lat:51.22,lon:24.71,aliases:["ковель","ковелі","ковеля","kovel"]},{name:"Коростень",fullName:"Коростень (Житомирська обл., Україна)",lat:50.95,lon:28.64,aliases:["коростень","коростені","коростеня","korosten"]},{name:"Сміла",fullName:"Сміла (Черкаська обл., Україна)",lat:49.22,lon:31.87,aliases:["сміла","смілі","смілу","smila"]},{name:"Первомайськ",fullName:"Первомайськ (Миколаївська обл., Україна)",lat:48.04,lon:30.85,aliases:["первомайськ","первомайську","pervomaisk"]},{name:"Чорноморськ",fullName:"Чорноморськ (Одеська обл., Україна)",lat:46.3,lon:30.66,aliases:["чорноморськ","чорноморську","іллічівськ","chornomorsk"]},{name:"Покровськ",fullName:"Покровськ (Донецька обл., Україна)",lat:48.28,lon:37.18,aliases:["покровськ","покровську","красноармійськ","pokrovsk"]},{name:"Енергодар",fullName:"Енергодар (Запорізька обл., Україна)",lat:47.5,lon:34.65,aliases:["енергодар","енергодарі","енергодару","enerhodar"]},{name:"Керч",fullName:"Керч (Крим, Україна)",lat:45.36,lon:36.47,aliases:["керч","керчі","керчю","kerch"]},{name:"Євпаторія",fullName:"Євпаторія (Крим, Україна)",lat:45.19,lon:33.36,aliases:["євпаторія","євпаторії","yevpatoria","evpatoria"]},{name:"Ялта",fullName:"Ялта (Крим, Україна)",lat:44.49,lon:34.16,aliases:["ялта","ялті","ялту","yalta"]},{name:"Феодосія",fullName:"Феодосія (Крим, Україна)",lat:45.03,lon:35.38,aliases:["феодосія","феодосії","feodosia"]},{name:"Алчевськ",fullName:"Алчевськ (Луганська обл., Україна)",lat:48.47,lon:38.79,aliases:["алчевськ","алчевську","alchevsk"]},{name:"Самар",fullName:"Самар (Дніпропетровська обл., Україна)",lat:48.63,lon:35.26,aliases:["самар","новомосковськ","новомосковську","samar","novomoskovsk"]},{name:"Шептицький",fullName:"Шептицький (Львівська обл., Україна)",lat:50.38,lon:24.23,aliases:["шептицький","червоноград","chervonohrad","sheptytskyi"]},{name:"Лозова",fullName:"Лозова (Харківська обл., Україна)",lat:48.89,lon:36.32,aliases:["лозова","лозовій","lozova"]},{name:"Ізюм",fullName:"Ізюм (Харківська обл., Україна)",lat:49.21,lon:37.26,aliases:["ізюм","ізюмі","ізюму","izium","izyum"]},{name:"Звягель",fullName:"Звягель (Житомирська обл., Україна)",lat:50.58,lon:27.63,aliases:["звягель","звягелі","новоград-волинський","zviahel"]}],ug=e=>{if(!e||"string"!=typeof e)return null;const t=e.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(!t)return null;for(const r of xg){if(r.name.toLowerCase()===t)return r;if(r.aliases.some(e=>e.toLowerCase()===t))return r}for(const r of xg)if(r.aliases.some(e=>t.includes(e.toLowerCase())))return r;return null},gg=e=>(e.aliases.find(e=>/^[a-z][a-z -]*$/.test(e))||"").replace(/\s+/g,"-"),mg="data:image/webp;base64,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",yg=JSON.parse('[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна!\\nЩо таке Стихія? — Це платформа «погода + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити стиль сайту.\\n\\nЧи є застосунок? — Так! Є версії для Windows, Linux та Android: шукайте їх у Налаштуваннях Стихії → «Застосунки Стихії». На iPhone та iPad відкрийте сайт у Safari і натисніть «Поділитися» → «На екран Додому».\\n\\nЯк зв\'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам. ","image":"latestUpdate"},{"q":"Угода користувача","a":"Ця Угода є юридично обов\'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб\'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов\'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім\'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"agreement"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок. Режим пошуку можна змінити: «За назвою міста», «Координати» (широта й довгота) або «Запитати ШІ ✦».\\nКрок 2. Оберіть місто зі списку підказок. Список не закривається, тож можна додати кілька міст поспіль — біля доданих з\'явиться ✓. Коли закінчите, натисніть «Готово».\\nКрок 3. Зверніть увагу на мітки біля міст у списку:\\n  • Червона — небезпечна погода вже сьогодні.\\n  • Помаранчева — небезпечна погода завтра або післязавтра.\\n  Небезпечною вважається температура вище 30°C або нижче −30°C, вітер понад 10 м/с, УФ-індекс понад 7. Наведіть на мітку, щоб побачити всі причини.\\nКрок 4. У картці погоди є вкладки:\\n  • Зараз — температура й відчуття, вологість, вітер і пориви, точка роси, тиск, хмарність, видимість, УФ-індекс, сніг, температура ґрунту, висота замерзання, випаровування.\\n  • Годинна — детально на 72 години, далі до 7 днів. Вигляд: графік, таблиця або блоки (графік — лише для перших 72 годин).\\n  • 16 днів (на телефоні — «Місячна») — прогноз на два тижні вперед: графік, таблиця або блоки.\\n  • Смарт — поради без ШІ та інтернету: день і ніч, опади й пік тепла, тижневий тренд, що вдягнути, тиск і самопочуття.\\nКрок 5. На погодинному графіку небезпечні години підсвічуються: червоним — спека, синім — мороз, помаранчевим — сильний вітер.\\nКрок 6. Кнопка-шестерня на картці: одиниці виміру (°C, °F, K; м/с, км/год, милі/год, вузли; гПа, мм рт. ст. та інші), нова назва, фон, свої свята й події, порядок карток, GPS (на картці вашої локації), видалення та «Прикріпити до ШІ».\\nЛіміти: до 8 власних карток плюс картка вашої локації (після 5 сайт попередить про навантаження на пристрій). З акаунтом можна додати до 40 карток на добу.\\nОновлення: картки оновлюються самі на початку кожної години, поки сторінка відкрита.","image":"weather"},{"q":"Відсутність реклами і підписок.","a":"Це трохи дивно, але логічно. Ми поважаємо ваш час і не хочемо його витрачати на рекламу. Деякі функції обмежені, бо технології Firebase мають безкоштовний ліміт, вони відчутні при великій активності. Повірте через 100 спам-ботів можна втратити за місяць 20000грн.","image":"noAds"},{"q":"Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані джерела про природу й науку: Phys.org, ScienceDaily, Nature, Mongabay, The Guardian Environment.\\nКрок 3. Щоб додати своє джерело, введіть назву сайту або посилання в рядок «Додати стрічку». Підтримуються RSS, YouTube-канали, Telegram-канали, Telegraph, Hive, Mastodon і Bluesky. Можна обрати й зі списку рекомендованих сайтів. Максимум — 5 власних джерел. Facebook не підтримується.\\nКрок 4. Мітка «НОВЕ» зникає через 1 хвилину після того, як ви побачили новину.\\nКрок 5. Меню новини (шестерня):\\n  • Прикріпити до ШІ — додати новину в чат ШІ-Допомоги.\\n  • ШІ Виклад — обговорення новини з чат-ботом (потрібен ключ Gemini). Зберігаються 10 останніх повідомлень, до 300 символів у повідомленні. Чат очищається через 24 год без активності.\\n  • Заглушити — приховує новину, її завжди можна «Розглушити». З акаунтом можна синхронізувати заглушені новини між пристроями: до 30 дій на добу, причому «Заглушити» і «Розглушити» рахуються обидві. Те, що понад ліміт, зберігається лише на цьому пристрої. Лічильник видно в меню новини.\\n  • Подати скаргу — лише з акаунтом, одна скарга на новину на добу і не більше 20 скарг на добу загалом. Новина з 10 скаргами за добу ховається для всіх, а джерело з 20 скаргами потрапляє в «Чорний список» на 24 години.\\nФільтрація: новини про війну, політику, кримінал, 18+, казино тощо приховуються автоматично. Фільтр можна вимкнути в Налаштуваннях Стихії → Новини. Він краще розпізнає українські джерела, ніж міжнародні.","image":"news"},{"q":"ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key».\\n\\nЧи зберігаються мої ключі на сервері? — Ні. Ключ і чати зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо. Рекомендуємо, щоб ваш пристрій мав пароль, а також не прив\'язуйте картку до ключа, який ви використовуєте.\\n\\nЩо вміє ШІ-Допомога? — Кілька окремих чатів, до 15 файлів (фото, відео, аудіо) загальним розміром до 100 МБ, до 4 прикріплених карток погоди чи новин, голосове введення та пошук в інтернеті (його можна вимкнути). На питання про погоду ШІ відповідає зі свіжими даними прогнозу.\\n\\nЯк налаштувати відповіді? — Оберіть довжину (Менше / Нормально / Більше) і кількість рекомендованих питань після відповіді (0–2).\\n\\nЧому треба чекати між запитами? — Щоб берегти вашу безкоштовну квоту: 5 с без рекомендованих питань, 10 с з одним, 15 с з двома. Запит — до 300 символів.\\n\\nПомилка 503 або 429 — що робити? — 503 означає тимчасове перевантаження серверів Google, 429 — вичерпано ліміт вашого ключа. Зачекайте 1–2 хвилини і спробуйте ще раз.\\n\\nЯк скопіювати відповідь? — Натисніть кнопку копіювання біля повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":"aiHelp"},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Прогорніть нижче карток погоди до «Кліматичної мапи».\\nКрок 2. Натисніть «Активувати карту», щоб гортати й масштабувати її. Поки карта вимкнена, вона не заважає прокручувати сторінку.\\nКрок 3. Оберіть джерело: Ventusky (прогноз погоди), Windy (вітер і шари), Excalidraw (онлайн-дошка), Авіарадар. В українській версії також є Тривоги, Повітряні цілі, SaveEcoBot (якість повітря) і DeepState. Джерела можна шукати, а порядок — змінювати перетягуванням.\\nКрок 4. «2 фрейми» — дві карти поруч.\\nКрок 5. Міні-плеєр виносить карту в окреме плаваюче вікно. Також є повноекранний режим.\\nКрок 6. «Закріпити локацію» — карта запам\'ятає точку, масштаб і шар і відкриватиметься саме там.\\nКрок 7. Власний фрейм: вставте посилання або код iframe (наприклад, радар чи вебкамеру). Якщо сайт забороняє показ у фреймі, Стихія про це попередить.","image":"climate"},{"q":"За що відповідають налаштування?","a":"Налаштування Стихії — це:\\n• Профіль: прив\'язки акаунта, зміна пароля.\\n• Час і дата: секунди, формат часу, режим відображення.\\n• Інтерфейс: вимкнення анімацій, підказки в хедері, контекстне меню Стихії, таймер оновлення погоди, власний шрифт, чутливість жестів, швидкий відгук на кліки, дзеркальність сайту.\\n• Секції сайту: порядок, окрема тема для кожної секції, приховування непотрібних.\\n• Новини: фільтр, синхронізація заглушених новин (до 30 дій на добу), які частини новини показувати.\\n• Вигляд: головна тема, липкий фон, навчання від Доміно, стратегія завантаження ресурсів, режим Декоратора (свій CSS).\\n• Застосунки Стихії: Windows, Android, Linux, iPhone та iPad.\\n• Перегляд поруч зі сторінкою, затемнення, кольорові та зорові фільтри з пресетами.\\n• Фонова музика: гучність, швидкість, режим відтворення, до 7 власних треків.","image":"settings"},{"q":"Навіщо реєстрація?","a":"Без акаунта картки погоди й налаштування теж зберігаються, але лише на цьому пристрої. Акаунт потрібен, щоб:\\n• синхронізувати між пристроями картки погоди;\\n• синхронізувати тему, порядок і видимість секцій, фони (крім завантажених вами файлів) — до 100 синхронізацій на добу. Кілька швидких змін поспіль рахуються як одна, а автоматична зміна фону у випадковому режимі не рахується. Те, що понад ліміт, зберігається на цьому пристрої й потрапить в акаунт наступного дня;\\n• синхронізувати заглушені новини (до 30 дій на добу);\\n• подавати скарги на новини.\\nУвійти можна через Google або email і пароль. З акаунтом діє ліміт — до 40 нових карток погоди на добу.\\nЗ метою безпеки ключ Gemini та діалоги з ШІ ніколи не синхронізуються — це можна перевірити в репозиторії на GitHub. Ми не збираємо ваші дані й не передаємо їх третім особам. Код ШІ-компонента: https://github.com/TheTurkeyProgramist/stuxia/blob/main/src/components/Aihelp/Aihelp.jsx","image":"registration"}]'),bg="/assets/two-brothers-Dyn4Do12.webp",wg="/assets/domino-reading-DAjoeGA1.webp",vg="/assets/ventusky-map-3SqiuMmu.webp",kg=t({Tooltip:()=>em,default:()=>tm}),jg=Eo.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Mg=Fo`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Sg=Fo`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,$g=Fo`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,Dg=Ao`
  opacity: 0;
  transform-origin: left center;
  animation: ${Fo`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:e})=>Ao`
    animation-delay: ${.1+.05*(e||0)}s;
  `}
`,Cg=Eo.div`
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
  opacity: ${e=>e.$isClosing?0:1};
  pointer-events: ${e=>e.$isClosing?"none":"auto"};
  backdrop-filter: blur(5px);
`,Lg=Eo.div`
  background: ${e=>e.$isDarkMode?"#174348b1":"#ffd001"};
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
  animation: ${e=>e.$isClosing?Sg:Mg} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,Ag=Eo.div`
  background:  ${e=>e.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,zg=Eo.div`
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
`,Ig=Eo.button`
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
  background: ${e=>e.$isDarkMode?"#27b5b0b1":"#6f6e22c6"};
  color: ${e=>e.$isDarkMode?"#000000b1":"#ffffff"};
  height: 36px;
  font-size: 14px;
  cursor: pointer;
`,Eg=Eo(Ig)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${$g} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,Ng=Eo.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 3px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,Rg=Eo.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 190px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  background-color: #174348;
  background-image: ${({$image:e})=>e?`linear-gradient(135deg, rgba(10, 20, 25, 0.82), rgba(10, 20, 25, 0.54)), url("${e}")`:"linear-gradient(135deg, #174348, #263d5b)"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  ${Dg}
`,Tg=Eo.button`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 16px 16px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;

  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: -4px;
  }
`,Fg=Eo.div`
  overflow: hidden;
  max-height: calc(1.4em * 3);
  line-height: 1.4;
  font-size: 15px;
`,Pg=Eo.div`
  overflow: hidden;
  max-height: calc(1.45em * 6);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.45;
`,Vg=Eo.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${e=>e.$isHovered||e.$isPinned?"800px":"10px"};
  opacity: ${e=>e.$isHovered||e.$isPinned?1:.4};

  &:hover {
    transform: scale(1.01);
  }
`,_g=Eo.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${$g} 0.3s ease-out forwards;
`,Og=Eo.button`
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
`,Bg=Eo.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(10, 16, 22, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${({$variant:e})=>"download"===e?"#ffda79":"#ffffff"};
  font-size: 19px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${({$variant:e})=>"close"===e?"#ff8a8a":"#ffda79"};
    background: ${({$variant:e})=>"close"===e?"rgba(220, 60, 60, 0.85)":"rgba(255, 218, 121, 0.2)"};
    color: #ffffff;
  }

  &:hover svg {
    transform: ${({$variant:e})=>"close"===e?"rotate(90deg)":"translateY(1px)"};
  }

  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg {
      transition: none;
    }
  }
`,Hg=Eo.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: rgba(0, 0, 0, 0.72);
`,qg=Eo.div`
  position: relative;
  box-sizing: border-box;
  width: 95%;
  max-width: none;
  max-height: 85vh;
  overflow-y: auto;
  padding: 28px clamp(16px, 3vw, 32px);
  border-radius: 14px;
  color: #fff;
  background-color: #17252b;
  background-image: ${({$backgroundImage:e})=>e?`linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.78)), url("${e}")`:"linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6))"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`,Kg=Eo.h2`
  margin: 0 ${({$actions:e})=>e>1?"100px":"52px"} 18px 0;
  font-size: 22px;
`,Zg=Eo.div`
  user-select: text;
  -webkit-user-select: text;
  cursor: text;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`,Ug=Eo.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: flex;
  gap: 8px;
`,Jg=Eo.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,Wg=Eo.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,Gg=Eo.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 46px;
  margin-bottom: 14px;
  padding: 0 14px;
  border: 1px solid
    ${({$isDarkMode:e})=>e?"rgba(90, 230, 216, 0.32)":"rgba(23, 67, 72, 0.24)"};
  border-radius: 14px;
  background: ${({$isDarkMode:e})=>e?"rgba(5, 24, 29, 0.78)":"rgba(255, 255, 255, 0.82)"};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.12);
  transition: border-color 0.25s ease, box-shadow 0.25s ease,
    transform 0.25s ease, background 0.25s ease;

  &:focus-within {
    transform: translateY(-2px);
    border-color: ${({$isDarkMode:e})=>e?"#51e6d5":"#174348"};
    background: ${({$isDarkMode:e})=>e?"rgba(5, 24, 29, 0.96)":"#ffffff"};
    box-shadow: 0 0 0 3px
        ${({$isDarkMode:e})=>e?"rgba(81, 230, 213, 0.16)":"rgba(23, 67, 72, 0.12)"},
      0 8px 22px rgba(0, 0, 0, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Yg=Eo(J)`
  flex: 0 0 auto;
  color: ${({$isDarkMode:e})=>e?"rgba(138, 235, 224, 0.72)":"rgba(23, 67, 72, 0.65)"};
  font-size: 18px;
  transition: color 0.25s ease, transform 0.25s ease;

  ${Gg}:focus-within & {
    color: ${({$isDarkMode:e})=>e?"#51e6d5":"#174348"};
    transform: scale(1.12) rotate(-8deg);
  }
`,Qg=Eo.input`
  flex: 1;
  min-width: 0;
  padding: 12px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({$isDarkMode:e})=>e?"#ffffff":"#142326"};
  font: inherit;
  font-size: 14px;

  &::placeholder {
    color: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.58)":"rgba(20, 35, 38, 0.55)"};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`,Xg=Eo.button`
  display: grid;
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.1)":"rgba(23, 67, 72, 0.1)"};
  color: ${({$isDarkMode:e})=>e?"#ffffff":"#174348"};
  cursor: pointer;
  animation: ${$g} 0.18s ease both;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
    background: ${({$isDarkMode:e})=>e?"rgba(255, 255, 255, 0.2)":"rgba(23, 67, 72, 0.18)"};
  }
`,em=({content:e,children:t,placement:r="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,Ar.useState)(!1),s=(0,Ar.useRef)(null),{refs:o,floatingStyles:l,context:c}=Ie({open:a,onOpenChange:n,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:C,middleware:[ge(8),tr(),z({padding:5}),M({element:s})]}),{isMounted:d,styles:h}=pe(c,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),f=or(c,{move:!1}),p=Xt(c),x=st(c),u=ar(c,{role:"tooltip"}),{getReferenceProps:g,getFloatingProps:m}=_e([f,p,x,u]);if(!e)return t;const y=i?"#111111":"#ffffff";return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{ref:o.setReference,...g(),style:{display:"inline-flex"},children:t}),d&&(0,_o.jsx)(dt,{children:(0,_o.jsxs)(jg,{ref:o.setFloating,$isDarkMode:i,style:{...l,...h},...m(),children:[e,(0,_o.jsx)(jt,{ref:s,context:c,fill:y,stroke:"#00acb9",strokeWidth:1})]})})]})},tm=({onClose:e,isOpen:t,initialFaqQuestion:r,isDarkMode:i})=>{const[a,n]=(0,Ar.useState)(!1),s=Wr(e=>e.calendar?.customDays||[]),[o,l]=(0,Ar.useState)(null),c=(0,Ar.useRef)({}),d=(e,t)=>({onMouseDown:t=>{c.current[e]=t.target===t.currentTarget},onClick:r=>{const i=!0===c.current[e];c.current[e]=!1,r.target===r.currentTarget&&i&&t()}}),[h,f]=(0,Ar.useState)(""),[p,x]=(0,Ar.useState)(null),u=(0,Ar.useCallback)(()=>{p?x(null):o?l(null):(x(null),n(!0),setTimeout(()=>{n(!1),e()},400))},[e,p,o]),g=async e=>{let t=e,r=null,i=(e.split(/[?#]/)[0].match(/.(w{2,5})$/)||[])[1]||"webp";try{const a=await(await fetch(e)).blob();r=URL.createObjectURL(a),t=r,a.type.startsWith("image/")&&(i=a.type.split("/")[1].replace("jpeg","jpg").split("+")[0])}catch{}const a=document.createElement("a");a.href=t,a.download=`stykhiya_image_${Date.now()}.${i}`,document.body.appendChild(a),a.click(),document.body.removeChild(a),r&&setTimeout(()=>URL.revokeObjectURL(r),1e3)};(0,Ar.useEffect)(()=>{const e=e=>{"Escape"===e.key&&u()};if(t||a)return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t,a,u]);const m=Ar.useMemo(()=>{const e=(new Date).toISOString().split("T")[0];return s.filter(t=>t.date<e).sort((e,t)=>t.date.localeCompare(e.date)).slice(0,5)},[s]),y=Ar.useMemo(()=>{const e={latestUpdate:"/assets/information-sign-Dh9YNb09.webp",agreement:mc,collaboration:bg,weather:ml,noAds:pg,news:"/assets/night-river-burnt-tree-CVOnKTPo.webp",aiHelp:wg,climate:vg,general:bg,settings:"/assets/logo-CeE8IWwr.webp",registration:tu,plans:"/assets/emperor-nitseron-DY56vL7p.webp"},t=yg.map(t=>({...t,image:t.image?e[t.image]??null:null}));if(m.length>0){const e=m.map(e=>`• ${e.date}: ${e.reason}`).join("\n");t.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:\n\n${e}`,image:null})}return t},[m]);if((0,Ar.useEffect)(()=>{if(!t)return void l(null);let e=null;if(r){const t=y.findIndex(e=>e.q===r);t>=0&&(e=y[t])}l(e)},[y,r,t]),!t&&!a)return null;const b=[...y].map((e,t)=>({...e,originalIndex:t})).filter(e=>{if(!h)return!0;const t=h.toLowerCase();return e.q?.toLowerCase().includes(t)||e.a?.toLowerCase().includes(t)});return(0,_o.jsxs)(Cg,{$isClosing:a,...d("main",u),children:[(0,_o.jsxs)(Lg,{$isDarkMode:i,$isClosing:a,onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(Ag,{$isDarkMode:i,children:[(0,_o.jsx)(Ig,{onClick:u,children:"Зрозуміло!"}),(0,_o.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:i?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,_o.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:i?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"})]}),(0,_o.jsx)(zg,{children:(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsxs)(Gg,{$isDarkMode:i,children:[(0,_o.jsx)(Yg,{$isDarkMode:i,"aria-hidden":"true"}),(0,_o.jsx)(Qg,{type:"search",placeholder:"Знайти питання або відповідь...","aria-label":"Пошук питань",value:h,$isDarkMode:i,onChange:e=>f(e.target.value)}),h&&(0,_o.jsx)(Xg,{type:"button",$isDarkMode:i,onClick:()=>f(""),"aria-label":"Очистити пошук",children:(0,_o.jsx)(Kt,{"aria-hidden":"true"})})]}),(0,_o.jsxs)(Ng,{style:{marginTop:0},children:[0===b.length&&(0,_o.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),b.map((e,t)=>{const r=e.originalIndex,i=(e.a||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();return(0,_o.jsx)(Rg,{$index:t+1,$image:e.image||"/assets/foggy-forest-Cew27ml4.webp",onClick:t=>{Array.from(t.currentTarget.querySelectorAll("[data-truncated-content]")).some(e=>e.scrollHeight>e.clientHeight+1)&&l(e)},children:(0,_o.jsxs)(Tg,{type:"button","aria-label":`Переглянути відповідь: ${e.q}`,children:[(0,_o.jsx)(Fg,{"data-truncated-content":!0,children:e.q}),(0,_o.jsx)(Pg,{"data-truncated-content":!0,children:i||"Натисніть, щоб переглянути відповідь."})]})},r)})]})]})})]}),o&&(0,_o.jsx)(Hg,{...d("answer",()=>l(null)),children:(0,_o.jsxs)(qg,{$backgroundImage:o.image,onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(Ug,{children:[o.image&&(0,_o.jsx)(Bg,{type:"button",$variant:"download","aria-label":"Скачати зображення",title:"Скачати зображення",onClick:()=>g(o.image),children:(0,_o.jsx)(Oe,{"aria-hidden":"true"})}),(0,_o.jsx)(Bg,{type:"button",$variant:"close","aria-label":"Закрити",title:"Закрити (Esc)",onClick:()=>l(null),children:(0,_o.jsx)(Kt,{"aria-hidden":"true"})})]}),(0,_o.jsx)(Kg,{$actions:o.image?2:1,children:o.q}),(0,_o.jsx)(Zg,{children:(w=o,w.content&&Array.isArray(w.content)&&w.content.length>0?w.content.map((e,t)=>{if("image"===e.type){const r=e.src||e.image,i=e.alt||w.q||"FAQ image";return(0,_o.jsx)("div",{style:{marginBottom:"10px"},children:(0,_o.jsx)(Vg,{src:r,alt:i,onClick:()=>x(r)})},`image-${t}`)}if("text"===e.type){const r=e.value||e.text||"";return(0,_o.jsx)("div",{dangerouslySetInnerHTML:{__html:String(r).replace(/\n/g,"<br/>")}},`text-${t}`)}return null}):(0,_o.jsx)("div",{dangerouslySetInnerHTML:{__html:(w.a||"").replace(/\n/g,"<br/>")}}))})]})}),p&&(0,_o.jsxs)(Jg,{onClick:()=>x(null),children:[(0,_o.jsx)(Eg,{onClick:()=>x(null),children:"×"}),(0,_o.jsx)(_g,{children:(0,_o.jsx)(Og,{onClick:e=>{e.stopPropagation(),g(p)},children:"Скачати"})}),(0,_o.jsx)(Wg,{src:p,alt:"Прев'ю зображення",onClick:e=>e.stopPropagation()})]})]});var w},rm={data:""},im=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||rm},am=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,nm=/\/\*[^]*?\*\/|  +/g,sm=/\n+/g,om=(e,t)=>{let r="",i="",a="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+s+";":i+="f"==n[1]?om(s,n):n+"{"+om(s,"k"==n[1]?"":t)+"}":"object"==typeof s?i+=om(s,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n="-"==n[1]?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=om.p?om.p(n,s):n+":"+s+";")}return r+(t&&a?t+"{"+a+"}":a)+i},lm={},cm=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+cm(e[r]);return t}return e},dm=(e,t,r,i,a)=>{let n=cm(e),s=lm[n]||(lm[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!lm[s]){let t=n!==e?e:(e=>{let t,r,i=[{}];for(;t=am.exec(e.replace(nm,""));)t[4]?i.shift():t[3]?(r=t[3].replace(sm," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(sm," ").trim();return i[0]})(e);lm[s]=om(a?{["@keyframes "+s]:t}:t,r?"":"."+s)}let o=r&&lm.g;return r&&(lm.g=lm[s]),((e,t,r,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(lm[s],t,i,o),s};function hm(e){let t=this||{},r=e.call?e(t.p):e;return dm(r.unshift?r.raw?((e,t,r)=>e.reduce((e,i,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":om(e,""):!1===e?"":e}return e+i+(null==n?"":n)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,im(t.target),t.g,t.o,t.k)}hm.bind({g:1});var fm=hm.bind({k:1});function pm(e,t){let r=this||{};return function(){let i=arguments;function a(n,s){let o=Object.assign({},n),l=o.className||a.className;r.p=Object.assign({theme:Tu&&Tu()},o),r.o=/go\d/.test(l),o.className=hm.apply(r,i)+(l?" "+l:""),t&&(o.ref=s);let c=e;return e[0]&&(c=o.as||e,delete o.as),Fu&&c[0]&&Fu(o),Ru(c,o)}return t?t(a):a}}var xm=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,um=(()=>{let e=0;return()=>(++e).toString()})(),gm=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),mm="default",ym=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return ym(e,{type:e.toasts.find(e=>e.id===i.id)?1:0,toast:i});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},bm=[],wm={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},vm={},km=(e,t=mm)=>{vm[t]=ym(vm[t]||wm,e),bm.forEach(([e,r])=>{e===t&&r(vm[t])})},jm=e=>Object.keys(vm).forEach(t=>km(e,t)),Mm=(e=mm)=>t=>{km(t,e)},Sm={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$m=e=>(t,r)=>{let i=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||um()}))(t,e,r);return Mm(i.toasterId||(e=>Object.keys(vm).find(t=>vm[t].toasts.some(t=>t.id===e)))(i.id))({type:2,toast:i}),i.id},Dm=(e,t)=>$m("blank")(e,t);Dm.error=$m("error"),Dm.success=$m("success"),Dm.loading=$m("loading"),Dm.custom=$m("custom"),Dm.dismiss=(e,t)=>{let r={type:3,toastId:e};t?Mm(t)(r):jm(r)},Dm.dismissAll=e=>Dm.dismiss(void 0,e),Dm.remove=(e,t)=>{let r={type:4,toastId:e};t?Mm(t)(r):jm(r)},Dm.removeAll=e=>Dm.remove(void 0,e),Dm.promise=(e,t,r)=>{let i=Dm.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?xm(t.success,e):void 0;return a?Dm.success(a,{id:i,...r,...null==r?void 0:r.success}):Dm.dismiss(i),e}).catch(e=>{let a=t.error?xm(t.error,e):void 0;a?Dm.error(a,{id:i,...r,...null==r?void 0:r.error}):Dm.dismiss(i)}),e};var Cm=(e,t="default")=>{let{toasts:r,pausedAt:i}=((e={},t=mm)=>{let[r,i]=(0,Ar.useState)(vm[t]||wm),a=(0,Ar.useRef)(vm[t]);(0,Ar.useEffect)(()=>(a.current!==vm[t]&&i(vm[t]),bm.push([t,i]),()=>{let e=bm.findIndex(([e])=>e===t);e>-1&&bm.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,i,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||Sm[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:n}})(e,t),a=(0,Ar.useRef)(new Map).current,n=(0,Ar.useCallback)((e,t=1e3)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),s({type:4,toastId:e})},t);a.set(e,r)},[]);(0,Ar.useEffect)(()=>{if(i)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let i=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(!(i<0))return setTimeout(()=>Dm.dismiss(r.id,t),i);r.visible&&Dm.dismiss(r.id)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,i,t]);let s=(0,Ar.useCallback)(Mm(t),[t]),o=(0,Ar.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),l=(0,Ar.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),c=(0,Ar.useCallback)(()=>{i&&s({type:6,time:Date.now()})},[i,s]),d=(0,Ar.useCallback)((e,t)=>{let{reverseOrder:i=!1,gutter:a=8,defaultPosition:n}=t||{},s=r.filter(t=>(t.position||n)===(e.position||n)&&t.height),o=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<o&&e.visible).length;return s.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,Ar.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:l,startPause:o,endPause:c,calculateOffset:d}}},Lm=fm`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Am=fm`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,zm=fm`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Im=pm("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Lm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Am} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${zm} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Em=fm`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Nm=pm("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Em} 1s linear infinite;
`,Rm=fm`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Tm=fm`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Fm=pm("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Tm} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Pm=pm("div")`
  position: absolute;
`,Vm=pm("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_m=fm`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Om=pm("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_m} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Bm=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?Ar.createElement(Om,null,t):t:"blank"===r?null:Ar.createElement(Vm,null,Ar.createElement(Nm,{...i}),"loading"!==r&&Ar.createElement(Pm,null,"error"===r?Ar.createElement(Im,{...i}):Ar.createElement(Fm,{...i})))},Hm=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,qm=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Km=pm("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Zm=pm("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Um=Ar.memo(({toast:e,position:t,style:r,children:i})=>{let a=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[i,a]=gm()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Hm(r),qm(r)];return{animation:t?`${fm(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${fm(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=Ar.createElement(Bm,{toast:e}),s=Ar.createElement(Zm,{...e.ariaProps},xm(e.message,e));return Ar.createElement(Km,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof i?i({icon:n,message:s}):Ar.createElement(Ar.Fragment,null,n,s))});!function(e,t,r,i){om.p=t,Ru=e,Tu=r,Fu=i}(Ar.createElement);var Jm=({id:e,className:t,style:r,onHeightUpdate:i,children:a})=>{let n=Ar.useCallback(t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;i(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return Ar.createElement("div",{ref:n,className:t,style:r},a)},Wm=hm`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Gm=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:a,toasterId:n,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:c}=Cm(r,n);return Ar.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,s=((e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:gm()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...a}})(n,c.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return Ar.createElement(Jm,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?Wm:"",style:s},"custom"===r.type?xm(r.message,r):a?a(r):Ar.createElement(Um,{toast:r,position:n}))}))},Ym=Dm,Qm={a:"а",c:"с",e:"е",i:"і",o:"о",p:"р",x:"х",y:"у",k:"к",z:"з",n:"н"},Xm=/[\u00AD\u200B-\u200D\u2060\uFEFF]/g,ey=/[\p{L}\p{M}]+/gu,ty=/[a-z]/i,ry=/[а-яіїєґ]/iu,iy=/[’ʼ`´‘]/g,ay=/(?<![\p{L}\p{N}])(?:\p{L}[\s.,_\-*]{1,2}){2,}\p{L}(?![\p{L}\p{N}])/gu,ny=/(?<=\p{L})[^\p{L}\p{N}\s]{1,3}(?=\p{L})/gu,sy=/(\p{L})\1{2,}/gu,oy=/[\p{L}\p{N}@$]+/gu,ly=/[04513@$]/g,cy={0:"о",4:"а",5:"с",1:"і",3:"е","@":"а",$:"с"},dy=new RegExp([/війн(?:а|и|ою|і|нах)/iu,/бойов(?:і|их|им|ий|а|ої)/iu,/конфлікт(?:у|и|ів|ом)?/iu,/(?<!\p{L})фронт(?:у|і|ом)?(?!\p{L})/iu,/(?<!\p{L})атак(?:а|и|у|ою|ам|ах|ув\p{L}*)/iu,/обстріл(?:у|и|ів|ом|ами)?/iu,/безпілотник(?:и|ів|ами|ом)?|(?<!\p{L})дрон(?:и|ів|ами|а|у|ом)?(?!\p{L})|(?<!\p{L})бпла(?!\p{L})/iu,/загибл(?:ий|их|і|им|ними)/iu,/поранен(?:ий|их|і|им|ними)/iu,/руйнуванн(?:я|ь|ям)/iu,/військов(?:ий|і|их|им|ними|е|а|ого)/iu,/(?<!\p{L})армі(?:я|ї|ю|єю)/iu,/окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,/ракет(?:а|и|ний|них|ами)/iu,/збройн(?:і|их)\s+сил(?:и|)/iu,/(?<!\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\p{L})/iu,/(?<!\p{L})рф(?!\p{L})|росі(?:я|ї|єю|йськ.*)/iu,/політик(?:а|и|ою|і|ів)/iu,/корупці(?:я|ї|ю|єю)/iu,/депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,/(?<!\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\p{L})/iu,/(?<!\p{L})мит(?:о|а|ам|ами|ах)(?!\p{L})/iu,/уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\p{L})влад(?:а|и|ою)(?!\p{L})/iu,/санкці(?:ї|й|ям|ями)/iu,/домовленість|переговор(?:и|ів|ами)/iu,/кримінал(?:у|ом)?/iu,/поліці(?:я|ї|ю|єю)/iu,/(?<!\p{L})суд(?:у|ом|ів)?(?!\p{L})/iu,/затриман(?:о|ий|і|а)/iu,/вбивств(?:о|а|ом|ах)/iu,/крадіжк(?:а|и|ою|ах)/iu,/вирок(?:у|и|ів|ами|ах)?/iu,/в'?язниц(?:я|і|ю|ею|ях)/iu,/арешт(?:у|и|ів|ами|ах)?/iu,/теракт(?:и|ів|ами|ах|у)?/iu,/вибух(?:и|ів|ами|ах|у)?/iu,/злочин(?:у|и|ів|ом)?/iu,/напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,/побої|мордуванн(?:я|ь|ям)/iu,/душивши?|заламав/iu,/порно(?:графі|г| розроб| фільм.*)?/iu,/porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,/еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,/секс(?:у|ом|уальн.*)?(?!\p{L})/iu,/\bsex(?:y|ual)?\b/iu,/onlyfans|онліфанс|онлифанс|only-?fans/iu,/webcam|вебкамер.*|вебка/iu,/(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,/оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,/без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,/інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,/стриптиз|топлес|topless/iu,/оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,/пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,/гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,/без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,/(?:онлайн\s*)?казино|casino/iu,/рулетк(?:а|и|у|ою|ці|ок)/iu,/слот(?:и|ів|ами|ах|ам)?|slots?/iu,/покер(?:у|ом|ний|ного)?|poker/iu,/азарт(?:у|ний|ні|них|ою|ість)?/iu,/гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,/ігров(?:і|их|им|ними)\s+автомат/iu,/однорук(?:ий|і)\s+бандит/iu,/(?<!\p{L})(?:краіл|кріаіл)(?!\p{L})/iu,/лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,/джекпот(?:и|ів|ом)?|jackpot/iu,/виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,/букмекер(?:и|ів|ського|ських|ська|ський)?/iu,/спортбетт?інг|sports?\s*betting|betting/iu,/gambl(?:e|ing|er)?/iu,/prediction\s+markets?/iu,/ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,/зроби(?:ти|в|ла)\s+ставку/iu,/(?<!\p{L})бк\s+(?:букмекер|ставок|казино)(?!\p{L})/iu,/фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,/бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,/халяв(?:а|и|у|ою)/iu,/favbet|фавбет|favorit\s*(?:bet|casino|sport)|фаворит\s*(?:спорт|казино|бет)/iu,/vbet|вбет/iu,/cosmolot|космолот/iu,/slots\s*city|слотс\s*сіт(?:і|и)/iu,/supergra|супер\s*гра|супергра/iu,/first\s*casino|ферст\s*казино|фірст\s*казино/iu,/casino\s*ua|казино\s*юа/iu,/champion\s*casino|чемпіон\s*казино/iu,/ggbet|ггбет/iu,/slotoking|слотокінг|слотокинг/iu,/pin-?up|пінап|пін\s*ап/iu,/slotor|слотор/iu,/777\s*casino|казино\s*777/iu,/parimatch|париматч|паріматч/iu,/1xbet|1хбэт|1хбет|1xslots/iu,/mostbet|мостбет/iu,/(?:vulkan|vulcan|вулкан)\s*(?:casino|bet|vegas|казино|вегас|клуб|ставк\p{L}*)/iu,/joycasino|джойказино/iu,/casino-x|казино\s*ікс|казино\s*икс/iu,/vavada|вавада/iu,/melbet|мелбет/iu,/betwinner|бетвіннер|бетвиннер/iu,/megapari|мегапарі|мегапари/iu,/catcasino|catbet|кетказино|кетбет/iu,/john\s*bet|джон\s*біт/iu,/ice\s*casino|verde\s*casino|hitnspin/iu,/fonbet|фонбет|marathonbet|марафонбет/iu,/bet365|бет365/iu,/unibet|унібет|унибет/iu,/william\s*hill|вільям\s*хілл/iu,/(?<!\d)888\s*(?:casino|poker|казино|покер)/iu,/pokerstars|покерстарс/iu,/betfair|бетфеір|бетфеар/iu,/bwin|бвін/iu,/stake\.com|stake\s*casino|bc\.game|roobet|rollbit/iu,/крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,/crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,/аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,/gallup/iu,/релігі(?:я|ї|ю|єю|йн.*)/iu,/(?<!\p{L})(?:пцу|упц|умп)(?!\p{L})/iu,/церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,/патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,/парафія|єпархія|лавра/iu,/(?<!\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\p{L})|саєнтолог.*|свідки\s+єгови/iu,/(?<!\p{L})культ(?:и|ів|у|ом)?(?!\p{L})/iu,/масон(?:и|ів|ами|ах)?/iu,/жертвопринес.*|жертвопринош.*/iu,/гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,/мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,/карт(?:и|ах)\s+таро|(?<!\p{L})гаданн(?:я|ь)(?!\p{L})|нумеролог/iu,/пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,/(?<!\p{L})порч(?:а|і)(?!\p{L})|сглаз|приворо/iu,/(?<!\p{L})(?:набу|сап|бэб)(?!\p{L})/iu,/обшук(?:и|ів|ами|ах)?/iu,/детектив(?:и|ів|ам|ами)?/iu,/слідч(?:і|их|им|ий)\s+дії/iu,/слуг(?:а|и)\s+народу/iu,/фракці(?:я|ї|ю|єю)/iu,/міністр(?:и|ів|ам|ами|а)?/iu,/голосувати|голосуванн(?:я|ь)/iu,/підпал(?:и|ів|ам|ами)?/iu,/вербувати|завербува.*/iu,/аварі(?:я|ї|ю|єю)/iu,/(?<!\p{L})(?:дзп|дтп)(?!\p{L})/iu,/врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,/травмован(?:і|их|ий|о)/iu,/постраждал(?:і|их|и)/iu,/вибор(?:и|ів|ам|ах|чий|чої)/iu,/опозиці(?:я|ї|ю|єю)/iu,/кампані(?:я|ї|ю)/iu,/партій(?:ний|них|ні|я|ї)/iu,/незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,/схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,/хабар(?:і|ів|ник.*)|хабарництво/iu,/шахрайств(?:о|а|і)|шахраї/iu,/зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,/скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,/(?<!\p{L})(?:ніцой|ларис(?:а|и|і|у)?\s+ніцой)(?!\p{L})/iu,/(?<!\p{L})(?:євген(?:а|у)?\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\s+євген(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:гордон(?:а|у|ом)?|дмитро\s+гордон)(?!\p{L})/iu,/(?<!\p{L})спартак\s+суббот\p{L}*/iu,/(?<!\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\s+алх[іi]м)(?!\p{L})/iu,/(?<!\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\p{L})/iu,/(?<!\p{L})(?:янін(?:а|и)\s+соколов(?:а|и)|сергі(?:й|я)\s+притул(?:а|и)|олег\s+скрипк(?:а|и))(?!\p{L})/iu,/(?<!\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\p{L})/iu,/василь\s+малюк/iu,/(?<!\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:ппо|гур|ова|кмва)(?!\p{L})/iu,/(?<!\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)/iu,/повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,/блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,/інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|(?<!\p{L})борг(?:и|ів)(?!\p{L})|дефіцит\s+бюджету/iu,/банкрутств(?:о|а)/iu,/(?<!\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\p{L})/iu,/фаріон/iu,/(?<!\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\p{L})/iu,/ліндсі\s+ґ?рем|(?<!\p{L})ґ?рем(?!\p{L})/iu,/джей\s*ді\s*венс|(?<!\p{L})венс(?!\p{L})/iu,/(?<!\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\p{L})/iu,/(?<!\p{L})каллас(?!\p{L})/iu,/урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,/лукашенк(?:о|а|у|ом)/iu,/(?<!\p{L})дуд(?:а|и|і|ою)(?!\p{L})/iu,/(?<!\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\p{L})/iu,/(?<!\p{L})санд(?:у|и|а)(?!\p{L})/iu,/(?<!\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\p{L})/iu,/хаменеї|пезешкіан|раїсі/iu,/сі\s*цзіньпін/iu,/кім\s*чен\s*ин/iu,/свастик(?:а|и|у|ою)/iu,/нацизмін?|нацист(?:и|ів|ський|ська)?/iu,/фашизмін?|фашист(?:и|ів|ський|ська)?/iu,/рашизмін?|рашист(?:и|ів|ський|ська)?/iu,/комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,/ґ?геббельс(?:а|у|ом)?/iu,/ґ?гіммлер(?:а|у|ом)?/iu,/ґ?герінг(?:а|у|ом)?/iu,/ґ?гесс(?:а|у|ом)?/iu,/борман(?:а|у|ом)?/iu,/ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,/ріббентроп(?:а|у|ом)?/iu,/менгеле/iu,/розенберг(?:а|у|ом)?/iu,/кальтенбруннер(?:а|у|ом)?/iu,/коновалець|коновальц(?:я|ю|ем)/iu,/бандер(?:а|и|і|у|ою|івськ.*)/iu,/шухевич(?:а|у|ем)?/iu,/андрі(?:й|я)\s+мельник/iu,/сталін(?:а|у|ом)?/iu,/ленін(?:а|у|ом)?/iu,/берій?(?:я|ї|ю|єю)/iu,/(?<!коктейл[ьюяі]?\s)(?<!\p{L})молотов(?:а|у|ом)?(?!\p{L})/iu,/гітлер(?:а|у|ом)?/iu,/(?<!\p{L})хер(?:а|у|ом|и)?(?!\p{L})/iu,/хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,/пизд|пізд|піпєц|пипец/iu,/(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,/(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,/бляд(?:ь|і|я|ям|ство)|блять|(?<!\p{L})бля(?!\p{L})/iu,/(?<!\p{L})сук(?:а|и|ою|ам|ами)(?!\p{L})/iu,/гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,/срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,/(?<!\p{L})гівн(?:о|а|ом)|говно|лайно/iu,/сцяв|засцян.*|сцяк/iu,/х[*#@$]+й|х[*#@$]+р/iu,/п[*#@$]+зд[аяiі]/iu,/б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,/є[*#@$]+б|е[*#@$]+б/iu,/(?<!\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:ілон\s*маск(?:а|у|ом)?|ердоган(?:а|у)?|нетаньягу)(?!\p{L})/iu,/(?<!\p{L})(?:алл(?:а|и|і|у)?\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\s+мосейчук)(?!\p{L})/iu,/(?<!\p{L})(?:квартал\s*95|95\s*квартал|95-?й?\s*квартал|студі(?:я|ї|ю)\s+квартал)(?!\p{L})/iu,/(?<!\p{L})дизель\s*шоу(?!\p{L})/iu,/(?<!\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\p{L})/iu,/мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,/призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,/(?<!\p{L})(?:генштаб(?:у|ом)?|гш\s+зсу)(?!\p{L})/iu,/главком(?:а|у)?|командувач(?:а|і|ів)?/iu,/катуванн(?:я|ь|ям)|катува.*/iu,/побит(?:тя|тєм|ті)/iu,/зодіак(?:у|а|и)/iu].map(({source:e})=>`(?:${e})`).join("|"),"iu"),hy=e=>e?e.normalize("NFKC").replace(Xm,"").replace(iy,"'").toLowerCase().replace(ey,e=>ty.test(e)&&ry.test(e)?e.replace(/[aceiopxykzn]/g,e=>Qm[e]):e):"",fy=e=>(e=>e.replace(oy,e=>/\p{L}/u.test(e)?e.replace(ly,e=>cy[e]):e))(hy(e)).replace(ay,e=>e.replace(/[\s.,_\-*]/g,"")).replace(ny,"").replace(sy,"$1"),py=e=>dy.test(e)||dy.test(e.replace(/виборі/giu," ").replace(/і/g,"и")),xy="news_filter_enabled",uy=()=>{try{return"false"!==localStorage.getItem(xy)}catch{return!0}},gy=e=>{try{localStorage.setItem(xy,e?"true":"false")}catch{}},my=e=>{if(!e)return!1;const t=hy(e);return py(t)||py(fy(e))},yy="muted_news_pending",by="muted_news_sync_counter",wy=()=>(new Date).toISOString().slice(0,10),vy=e=>e?"function"==typeof e.toDate?e.toDate().toISOString().slice(0,10):e instanceof Date?e.toISOString().slice(0,10):"string"==typeof e?e.slice(0,10):null:null,ky=(e,t)=>e&&vy(e.date)===wy()?t&&e.uid&&e.uid!==t?0:Number(e.count)||0:0,jy={settings:{countKey:"settingsSyncCount",atKey:"settingsSyncAt",limit:100},cards:{countKey:"cardsSyncCount",atKey:"cardsSyncAt",limit:100},mute:{countKey:"muteSyncCount",atKey:"muteSyncAt",limit:30},cardAdditions:{countKey:"cardAdditionsCount",atKey:"cardAdditionsAt",limit:40},reports:{countKey:"reportCount",atKey:"reportAt",limit:20}},My=(e,{countKey:t,atKey:r})=>vy(e?.[r])===wy()&&Number(e?.[t])||0,Sy=async({uid:e,data:t,limitConfig:r,counterRef:i,storageKey:a})=>{const{countKey:n,atKey:s,limit:o}=r,l=wy(),c=(e=>e.current?.date===wy()?e.current.count:0)(i);if(c>=o)return{ok:!1,reason:"limit",count:c};const{db:d,doc:h,setDoc:f,getDoc:p,serverTimestamp:x}=await Gx(),u=h(d,"config",e),g=async r=>(i.current={date:l,count:r},a&&Po.default.setItem(a,{uid:e,date:l,count:r}).catch(()=>{}),await f(u,{...t,[n]:r,[s]:x()},{merge:!0}),{ok:!0,count:r});try{return await g(c+1)}catch(m){if(!(e=>"permission-denied"===e?.code||/permission/i.test(e?.message||""))(m))throw m;const e=await p(u),t=My(e.exists()?e.data():{},r);return i.current={date:l,count:t},t>=o?{ok:!1,reason:"limit",count:t}:g(t+1)}},$y=t({Tooltip:()=>Ly,default:()=>_b}),Dy=(0,Ar.lazy)(()=>vr(()=>import("./NewsAiModal-UU4y9vOt.js"),__vite__mapDeps([8,1,2,9,3,10,11,12,13]))),Cy=Eo.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Ly=({content:e,children:t,placement:r="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,Ar.useState)(!1),s=(0,Ar.useRef)(null),{refs:o,floatingStyles:l,context:c}=Ie({open:a,onOpenChange:n,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:C,middleware:[ge(8),tr(),z({padding:5}),M({element:s})]}),{isMounted:d,styles:h}=pe(c,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),f=or(c,{move:!1}),p=Xt(c),x=st(c),u=ar(c,{role:"tooltip"}),{getReferenceProps:g,getFloatingProps:m}=_e([f,p,x,u]);if(!e)return t;const y=i?"#111111":"#ffffff";return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{ref:o.setReference,...g(),style:{display:"inline-flex"},children:t}),d&&(0,_o.jsx)(dt,{children:(0,_o.jsxs)(Cy,{ref:o.setFloating,$isDarkMode:i,style:{...l,...h},...m(),children:[e,(0,_o.jsx)(jt,{ref:s,context:c,fill:y,stroke:"#00acb9",strokeWidth:1})]})})]})},Ay=Fo`
  from { opacity: 0; }
  to { opacity: 1; }
`,zy=Eo.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`,Iy=[{id:"phys-org",url:"https://phys.org/rss-feed/biology-news/animals-news/",name:"Phys.org",home:"https://phys.org"},{id:"science-daily",url:"https://www.sciencedaily.com/rss/top/environment.xml",name:"ScienceDaily",home:"https://www.sciencedaily.com"},{id:"nature",url:"https://www.nature.com/nature.rss",name:"Nature",home:"https://www.nature.com"},{id:"mongabay",url:"https://news.mongabay.com/feed/",name:"Mongabay",home:"https://news.mongabay.com",unblockable:!0},{id:"guardian-environment",url:"https://www.theguardian.com/environment/rss",name:"The Guardian Environment",home:"https://www.theguardian.com/environment",unblockable:!0}],Ey=[{name:"BBC News",url:"https://feeds.bbci.co.uk/news/rss.xml"},{name:"BBC World",url:"https://feeds.bbci.co.uk/news/world/rss.xml"},{name:"CNN",url:"http://rss.cnn.com/rss/edition.rss"},{name:"The New York Times",url:"https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"},{name:"The Guardian World",url:"https://www.theguardian.com/world/rss"},{name:"Al Jazeera",url:"https://www.aljazeera.com/xml/rss/all.xml"},{name:"Fox News",url:"https://moxie.foxnews.com/google-publisher/latest.xml"},{name:"NBC News",url:"https://feeds.nbcnews.com/nbcnews/public/news"},{name:"ABC News",url:"https://abcnews.go.com/abcnews/topstories"},{name:"CBS News",url:"https://www.cbsnews.com/latest/rss/main"},{name:"Sky News",url:"https://feeds.skynews.com/feeds/rss/world.xml"},{name:"Deutsche Welle",url:"https://rss.dw.com/rdf/rss-en-all"},{name:"France 24",url:"https://www.france24.com/en/rss"},{name:"Euronews",url:"https://www.euronews.com/rss"},{name:"The Hill",url:"https://thehill.com/feed/"},{name:"Wired",url:"https://www.wired.com/feed/rss"},{name:"TechCrunch",url:"https://techcrunch.com/feed/"},{name:"The Verge",url:"https://www.theverge.com/rss/index.xml"},{name:"Ars Technica",url:"https://feeds.arstechnica.com/arstechnica/index"},{name:"NASA",url:"https://www.nasa.gov/rss/dyn/breaking_news.rss"},{name:"Українська правда",url:"https://www.pravda.com.ua/rss/view_news/"},{name:"Укрінформ",url:"https://www.ukrinform.ua/rss/block-lastnews"},{name:"Радіо Свобода",url:"https://www.radiosvoboda.org/api/zrqiteuuir"}],Ny=/facebook|фейсбук|fb\.com|fb\.me|\bfb\b|\bфб\b/i,Ry=new Set(Iy.filter(e=>e.unblockable).map(e=>e.url)),Ty=Fo`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,Fy=Fo`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,Py=Eo.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`,Vy=Eo.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${e=>e.$isDarkMode?"white":"#010101"};
  width: 100%;
  box-sizing: border-box;
`,_y=Eo.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`,Oy=Eo.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
  overflow-x: auto;
  min-width: 0; 
  scroll-snap-type: x mandatory;
  padding: 10px 0 10px;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 479px) {
    justify-content: flex-start; 
  }
`,By=Eo.div`
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;
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
`,Hy=Eo.button`
  position: absolute;
  top: 50%;
  ${e=>"previous"===e.$direction?"left: 16px;":"right: 16px;"}
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 501;
  pointer-events: auto;
  
  border: 2px solid #ffaa00;
  border-radius: 6px;
  background: #000;
  color: #ffaa00;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  /* Підключення анімації левітації */
  animation: ${Ty} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${Fy} 2.5s ease-in-out infinite;
  }

  /* 1. Задня грань */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 44px;
    height: 40px;
    border-top: 2px solid rgb(255, 170, 0);
    border-left: 2px solid rgb(255, 170, 0);
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
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 0 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 100% 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 0 100% / 14px 14px no-repeat;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #000;
    animation-play-state: paused;
    box-shadow: 0 0 18px rgba(255, 170, 0, 0.99);
    
    &::before {
      border-color: rgba(255, 170, 0, 0.95);
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

    & > * { 
      animation-duration: 1.2s;
    }
  }

  &:active {
    transform: translateY(calc(-50% + 2px)) scale(0.96);
  }
`,qy=Eo.div`
  flex: 0 0 270px;
  width: 270px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1px;
  opacity: ${e=>0===e.$distanceFromCenter?1:1===e.$distanceFromCenter?.9:.82};
  transform: scale(${e=>0===e.$distanceFromCenter?1:1===e.$distanceFromCenter?.94:.9});
  transform-origin: center center;
  transition: transform 0.25s ease, opacity 0.25s ease;

  @media (max-width: 479px) {
    flex: 0 0 calc(100vw - 48px);
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
    flex: 0 0 calc(33.333% - 4px);
    width: calc(33.333% - 4px);
    min-width: calc(33.333% - 4px);
  }
`,Ky=Eo.button`
  display: block;
  margin: 0 auto 0;
  padding: 6px 22px;
  border: 2px solid #ffaa00;
  border-radius: 6px;
  background: #000;
  color: #ffaa00;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  transition: box-shadow 0.2s ease, transform 0.1s ease;

  &:hover {
    box-shadow: 0 0 18px rgba(255, 170, 0, 0.99);
  }

  &:active {
    transform: scale(0.97);
  }
`,Zy=Eo.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #111;
  border: 1px solid rgba(255, 170, 0, 0.4);
  border-radius: 10px;
  padding: 12px;
  box-sizing: border-box;
  color: #fff;
`,Uy=Eo.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 600px) {
    flex: 1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(240px, 1fr));

    /* Картки розтягуються на всю висоту модалки */
    & > a {
      height: 100%;
    }
    & > a > div:first-child {
      flex: 1;
      height: auto !important;
    }
  }
`,Jy=Eo.a`
  background: #1a1a1a;
  color: ${e=>e.$isDarkMode?"#ffffff":"#000000"};
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
`,Wy=Eo.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`,Gy=Eo.span`
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
`,Yy=Eo.span`
  position: absolute;
  top: 83%;
  right: 4px;
  background: #ddff00;
  color: #000;
  width: 80px;
  height: 69px;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 23px;
  font-weight: 900;
  z-index: 6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${Ay} 0.5s ease;
`,Qy=Eo.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 9;
`,Xy=Eo.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 25px;
  min-width: 25px;
  height: 28px;
  overflow: hidden;
  background: ${e=>e.$background};
  color: ${e=>e.$color||"white"};
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
`,eb=Eo(Xy)`
  background: rgb(8, 8, 8);
  color: #ffffff;
  width: 50px;
  height: 40px;
  /* Глобальне правило CardAction span ховає будь-який span до ховеру — шестерня має бути видима завжди */
  span {
    max-width: none;
    opacity: 1;
    overflow: visible;
  }
  &:hover,
  &:focus-visible {
    background: rgb(27, 27, 27);
    width: 50px;
    height: 40px;
  }
`,tb=Eo.div`
  position: absolute;
  inset: 0;
  min-height: 145px;
  padding-top: 48px;
  box-sizing: border-box;
  background: #1c1c1c;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 8;
  overflow: hidden;
  clip-path: ${e=>e.$open?"inset(0 0 0 0)":"inset(0 0 100% 0)"};
  visibility: ${e=>e.$open?"visible":"hidden"};
  pointer-events: ${e=>e.$open?"auto":"none"};
  /* visibility ховає меню лише після завершення закриття */
  transition:
    clip-path 0.35s ease,
    visibility 0s linear ${e=>e.$open?"0s":"0.35s"};
`,rb=Eo.span`
  position: relative;
  display: inline-flex;
  width: 29px;
  height: 29px;

  & > svg {
    position: absolute;
    inset: 0;
    font-size: 29px;
    transition: transform 0.35s ease, opacity 0.35s ease;
  }
  & > svg:first-child {
    opacity: ${e=>e.$open?0:1};
    transform: rotate(${e=>e.$open?"-90deg":"0deg"});
  }
  & > svg:last-child {
    opacity: ${e=>e.$open?1:0};
    transform: rotate(${e=>e.$open?"0deg":"90deg"});
  }
`,ib=Eo.span`
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  color: ${e=>e.$exhausted?"#ffb36c":"rgba(255, 255, 255, 0.6)"};
`,ab=Eo.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: transparent;
  color: ${e=>e.$color||"#fff"};
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.15s;

  svg {
    font-size: 26px;
    flex-shrink: 0;
  }

  &:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.07);
  }

  /* Непарний останній пункт на всю ширину */
  &:last-child:nth-child(odd) {
    grid-column: 1 / -1;
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
`,nb=Eo.div`
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
`,sb=Eo.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`,ob=Eo.div`
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
`,lb=Eo(h.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  z-index: 100000;
  padding: 5px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`,cb=Eo.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  overflow-y: auto;
  padding-right: 8px;
`,db=Eo.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`,hb=new Set(Iy.map(e=>e.name)),fb=({item:e,$isDarkMode:t,showImage:r,showTitle:i,showDescription:a,onAiSummaryClick:n,onReportClick:s,onMuteClick:o,onUnmuteClick:l,muteSyncInfo:c})=>{const d=(0,Ar.useRef)(null),[h,f]=(0,Ar.useState)(e.isNew),[p,x]=(0,Ar.useState)(!1),[u,g]=(0,Ar.useState)(!1),[m,y]=(0,Ar.useState)(null);return(0,Ar.useEffect)(()=>{(async()=>{const e=await Po.default.getItem("gemini_api_key");x(!!e)})();const e=e=>x(!!e.detail);return window.addEventListener("geminiKeyChanged",e),()=>window.removeEventListener("geminiKeyChanged",e)},[]),(0,Ar.useEffect)(()=>{if(!r)return;const t=new IntersectionObserver(([r])=>{if(r.isIntersecting)if(t.disconnect(),e.displayImage&&"data:image/webp;base64,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"!==e.displayImage)y(e.displayImage);else{const t=Rb(e.link||e.title||"");y(t),Fb(e.link).then(e=>{e&&y(e)})}},{rootMargin:"300px",threshold:0});return d.current&&t.observe(d.current),()=>t.disconnect()},[e.displayImage,e.link,r]),(0,Ar.useEffect)(()=>{if(!e.isNew)return;const t=new IntersectionObserver(([r])=>{if(r.isIntersecting){const i=setTimeout(async()=>{f(!1);try{const t=await Po.default.getItem("seen_news_links")||[];t.includes(e.link)||await Po.default.setItem("seen_news_links",[...t,e.link])}catch(t){}},6e4);return t.unobserve(r.target),()=>clearTimeout(i)}},{threshold:.5});return d.current&&t.observe(d.current),()=>t.disconnect()},[e.isNew,e.link]),e.isBlocked?(0,_o.jsx)(Jy,{$isDarkMode:t,style:{cursor:"not-allowed",position:"relative"},as:"div",children:(0,_o.jsxs)(nb,{children:[(0,_o.jsx)("span",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔒"}),(0,_o.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4"},children:"Дана новина була неправомірна, і ви не можете її переглянути."})]})}):e.isMuted?(0,_o.jsx)(Jy,{$isDarkMode:t,style:{position:"relative",minHeight:"190px"},as:"div",children:(0,_o.jsxs)(nb,{style:{background:"rgba(128, 128, 128, 0.5)"},children:[(0,_o.jsx)("span",{style:{fontSize:"30px",marginBottom:"10px",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"🔇"}),(0,_o.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"Новину приховано."}),(0,_o.jsx)("button",{onClick:t=>{t.preventDefault(),t.stopPropagation(),l&&l(e)},style:{marginTop:"10px",padding:"5px 15px",background:"#3f5959",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Розглушити"}),c&&(0,_o.jsx)(ib,{$exhausted:c.used>=c.limit,style:{marginTop:"8px",background:"rgba(0,0,0,0.35)",padding:"3px 8px",borderRadius:"999px"},children:c.used>=c.limit?`Ліміт ${c.limit}/${c.limit} — зміни лише на цьому пристрої`:`Синхронізація: ${c.used}/${c.limit} за добу`})]})}):(0,_o.jsx)(Jy,{ref:d,href:e.link,target:"_blank",rel:"noopener noreferrer",$isDarkMode:t,children:(0,_o.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:r?"160px":"auto",minHeight:"auto"},children:[h&&(0,_o.jsx)(Yy,{children:"Нове"}),(0,_o.jsx)(Gy,{onClick:t=>{t.preventDefault(),t.stopPropagation(),window.open(e.sourceHome,"_blank")},"aria-label":`Перейти на головну сторінку ${e.sourceName}`,children:e.sourceName}),(0,_o.jsx)(Qy,{"aria-label":"Дії з новиною",children:(0,_o.jsx)(Ly,{content:u?"Закрити налаштування":"Налаштування",isDarkMode:t,children:(0,_o.jsx)(eb,{"aria-label":"Налаштування картки новини","aria-expanded":u,onClick:e=>{e.preventDefault(),e.stopPropagation(),g(e=>!e)},children:(0,_o.jsxs)(rb,{$open:u,children:[(0,_o.jsx)(W,{"aria-hidden":"true"}),(0,_o.jsx)(nt,{"aria-hidden":"true"})]})})})}),(0,_o.jsxs)(tb,{$open:u,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[(0,_o.jsxs)(ab,{$color:p?"#ff69b4":"#888",disabled:!p,title:p?"Прикріпити до ШІ-чату":"Додайте Gemini API-ключ",onClick:()=>{if(!p)return;const t=(e.description||e.title).replace(/<[^>]*>?/gm,"").trim();window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`news-${e.link}`,type:"news",title:e.title,details:`Джерело: ${e.sourceName}. Заголовок: "${e.title}". Зміст: "${t}". Посилання: ${e.link}`}})),g(!1)},children:[(0,_o.jsx)(ve,{})," Прикріпити до ШІ"]}),(0,_o.jsxs)(ab,{onClick:()=>{n&&n(e),g(!1)},children:[(0,_o.jsx)(ie,{})," ШІ Виклад"]}),!hb.has(e.sourceName)&&(0,_o.jsxs)(ab,{$color:"#ff6b6b",onClick:t=>{s&&s(e,t),g(!1)},children:[(0,_o.jsx)(er,{})," Подати скаргу"]}),(0,_o.jsxs)(ab,{$color:"#aaa",onClick:t=>{t.preventDefault(),t.stopPropagation(),o&&o(e,t),g(!1)},children:[(0,_o.jsx)(ct,{})," Заглушити",c&&(0,_o.jsx)(ib,{$exhausted:c.used>=c.limit,children:c.used>=c.limit?"Лише на цьому пристрої":`Синхронізація ${c.used}/${c.limit}`})]})]}),r&&(0,_o.jsx)(Wy,{src:m||"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",alt:"",loading:"lazy",decoding:"async",onError:t=>{t.target.onerror=null,t.target.src=Rb(e.link||e.title||"")}}),(i||a)&&(0,_o.jsxs)(ub,{$isDarkMode:t,$overlay:r,children:[i&&(0,_o.jsxs)(pb,{children:[(0,_o.jsx)("h2",{style:{margin:0,fontSize:"16px",display:"-webkit-box",WebkitLineClamp:2,fontWeight:"700",WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:"1.3"},children:e.title}),(0,_o.jsx)(Ly,{content:"Копіювати шлях",isDarkMode:t,children:(0,_o.jsx)(xb,{type:"button","aria-label":"Копіювати шлях до новини",onClick:t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e.link).then(()=>{Ym.success("Посилання скопійовано!")})},children:(0,_o.jsx)(ee,{"aria-hidden":"true"})})})]}),a&&(0,_o.jsx)("p",{style:{fontSize:"13px",opacity:.9,margin:0,lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.description})]})]})})},pb=Eo.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 8px;
`,xb=Eo.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  color: inherit;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(0, 172, 185, 0.35);
    transform: scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid #00acb9;
    outline-offset: 2px;
  }
`,ub=Eo.div`
  padding: 8px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  min-height: auto;
  flex-grow: 0;

  ${e=>e.$overlay?"\n    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.83) 80%, transparent 100%);\n    color: #ffffff;\n    text-shadow: 0 1px 3px rgba(0,0,0,0.8);\n    margin-top: auto;\n  ":`\n    color: ${e.$isDarkMode?"#ffffff":"#000000"};\n  `}
`,gb=Eo.div`
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
`,mb=Eo.button`
  background: ${e=>e.$active?"#5a3f27":"rgb(26, 49, 56)"};
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: start;
  font-weight: 600;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
  }
`,yb=Eo.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 3px;
`,bb=Eo(mb)`
  position: relative;
  /* По 3 в ряд; плитки неповного останнього ряду ділять ширину порівну */
  flex: 1 1 calc((100% - 20px) / 3);
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 96px;
  padding: 12px 8px;
  text-align: center;
  line-height: 1.25;
  border-radius: 10px;

  & > svg {
    font-size: 28px;
    flex-shrink: 0;
  }
`,wb=Eo.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: 2px solid rgba(255, 170, 0, 0.5);
  background: #111;
  color: #fff;
  font-family: var(--font-family);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #ffaa00;
    box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  }
`,vb=Eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
  max-height: 55vh;
  overflow-y: auto;
  padding-right: 4px;
`,kb=Eo.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 86px;
  padding: 10px 8px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgb(26, 49, 56);
  color: #fff;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s ease;

  & > svg {
    font-size: 24px;
  }
  &:hover:not(:disabled) {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,jb=Eo.div`
  width: 300px;
  height: 8px;
  background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)"};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`,Mb=Eo.div`
  height: 100%;
  background: ${e=>e.$isError?"#ff4d4d":"#ffb36c"};
  width: ${e=>e.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${e=>e.$isError?"rgba(255, 77, 77, 0.7)":"rgba(255, 179, 108, 0.5)"};
`,Sb=Eo.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`,$b=864e5,Db=e=>{if(!e)return 0;if("function"==typeof e.toMillis)return e.toMillis();if("number"==typeof e)return e;if("object"==typeof e&&"timestamp"in e)return Number(e.timestamp)||0;const t=Date.parse(e);return Number.isNaN(t)?0:t},Cb=(e,t=Date.now())=>{if(!e)return 0;const r=new Set;return Object.entries(e.reporters||{}).forEach(([e,i])=>{t-Db(i)<$b&&r.add(e)}),(e.reports||[]).forEach((e,i)=>{t-Db(e)<$b&&r.add(e?.uid||`legacy-${i}`)}),r.size},Lb=(e,t,r=Date.now())=>!!e&&(!!(e.reporters?.[t]&&r-Db(e.reporters[t])<$b)||(e.reports||[]).some(e=>e?.uid===t&&r-Db(e)<$b)),Ab=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},zb=e=>{if(!e)return"rss";const t=e.toLowerCase();return t.includes("youtube.com")||t.includes("youtu.be")?"youtube":t.includes("t.me/")||t.includes("telegram.org")||t.startsWith("@")?"telegram":t.includes("telegra.ph/")?"telegraph":t.includes("withhive.com")?"hive":"rss"},Ib=e=>{if(e.enclosure?.link&&e.enclosure.link.match(/\.(jpe?g|png|webp|gif)/i))return e.enclosure.link;if(e.thumbnail&&e.thumbnail.startsWith("http"))return e.thumbnail;const t=(e.content||e.description||"").match(/<img[^>]+src=["']([^"']+)["']/i);return t&&t[1]&&t[1].startsWith("http")?t[1]:null},Eb=new Map([[Ol,"/assets/asium-winter-forest-UpCQsERR.webp"],[Al,"/assets/chess-Cz9yL-my.webp"],[gl,"/assets/art-studio-D4yvsCfT.webp"],[gc,"/assets/volcano-BTmLnCES.webp"],[yc,"/assets/slivkishow-cookie-flight-DGoH5o65.webp"],[Tl,"/assets/asium-sakura-field-Ct-_5W50.webp"],[Bl,"/assets/asium-waterfall-Dx03-vT7.webp"],[Ll,"/assets/turkeys-kate-f5jIIFlg.webp"],[pg,"/assets/turkey-in-dragon-museum-B86dXmNa.webp"],[Wl,"/assets/swamp-lake-of-freedom-BeG2-L3S.webp"]]),Nb=bc.filter(e=>"Природа та Стихії"===e.category&&/\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(e.src||"")).map(e=>Eb.get(e.src)||e.src),Rb=e=>{if(!Nb.length)return mg;let t=0;for(let r=0;r<e.length;r++)t=31*t+e.charCodeAt(r)&4294967295;return Nb[Math.abs(t)%Nb.length]},Tb=async e=>{try{const t=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(e)}`);if(!t.ok)throw new Error("AllOrigins error status: "+t.status);const r=await t.json();if(!r.contents)throw new Error("AllOrigins returned empty contents");return r.contents}catch(rm){console.warn("AllOrigins failed, trying corsproxy.io fallback...",rm);const r=await fetch(`https://corsproxy.io/?${encodeURIComponent(e)}`);if(!r.ok)throw new Error("corsproxy.io error status: "+r.status,{cause:rm});return await r.text()}},Fb=async e=>{if(!e||!/^https?:\/\//i.test(e))return null;const t=`og_img_${e}`;try{const r=await Po.default.getItem(t);if("string"==typeof r)return r||null;const i=await Tb(e),a=(new DOMParser).parseFromString(i,"text/html"),n=a.querySelector('meta[property="og:image"]')?.getAttribute("content")||a.querySelector('meta[name="twitter:image"]')?.getAttribute("content")||"",s=n?new URL(n,e).href:"";return await Po.default.setItem(t,s),s||null}catch{return null}},Pb=e=>{if(!e)return"";let t=e.replace(/<br\s*\/?>/gi,"\n");t=t.replace(/<[^>]*>?/gm,"");const r=document.createElement("textarea");return r.innerHTML=t,r.value.trim()},Vb=async e=>{const t=zb(e.url);return"telegram"===t?await(async e=>{let t;const r=e.url;if(r.startsWith("@"))t=r.substring(1);else{const e=r.split("/");t=e[e.length-1]||e[e.length-2]}if(t.startsWith("+")||r.includes("joinchat"))try{const t=await Tb(r),i=(new DOMParser).parseFromString(t,"text/html"),a=i.querySelector(".tgme_page_title")?.textContent?.trim()||"Приватний Telegram",n=i.querySelector(".tgme_page_description")?.textContent?.trim()||"Приватний канал або група.",s=i.querySelector(".tgme_page_photo_image"),o=s?s.getAttribute("src"):"";return{status:"ok",items:[{title:a,description:`${n}\n\nНадіслати контент / Приєднатися:\n${r}`,link:r,pubDate:(new Date).toISOString(),thumbnail:o||"",displayImage:o||"data:image/webp;base64,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",sourceName:e.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}catch(rm){return{status:"ok",items:[{title:"Приватний Telegram Канал",description:`Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:\n${r}`,link:r,pubDate:(new Date).toISOString(),thumbnail:"",displayImage:mg,sourceName:e.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}try{const e=`https://t.me/s/${t}`,i=await Tb(e),a=(new DOMParser).parseFromString(i,"text/html"),n=a.querySelector(".tgme_channel_info_header_title span")?.textContent||t,s=a.querySelector(".tgme_page_photo_image img")||a.querySelector(".tgme_page_photo_image"),o=s&&s.getAttribute("src")||"",l=`https://t.me/${t}`,c=a.querySelectorAll(".tgme_widget_message"),d=[];return c.forEach(e=>{const t=e.querySelector(".tgme_widget_message_text"),i=t?t.innerHTML:"",a=t?Pb(i).substring(0,100):"Повідомлення",s=e.querySelector(".tgme_widget_message_date"),c=s?s.getAttribute("href"):l,h=e.querySelector("time"),f=h?h.getAttribute("datetime"):(new Date).toISOString(),p=e.querySelector(".tgme_widget_message_photo_wrap");let x="";if(p){const e=p.getAttribute("style"),t=e&&e.match(/url\(['"]?([^'"]+)['"]?\)/);t&&(x=t[1])}d.push({title:a||"Новий допис",description:i?Pb(i):"Перегляньте допис у Telegram.",link:c,pubDate:f,thumbnail:x||o||"",displayImage:x||o||"data:image/webp;base64,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",sourceName:n,sourceFlag:"📢",sourceHome:l,sourceUrl:r})}),{status:"ok",items:d.reverse()}}catch(rm){return console.error("Telegram scraping failed:",rm),null}})(e):"telegraph"===t?await(async e=>{try{const t=await Tb(e.url),r=(new DOMParser).parseFromString(t,"text/html"),i=r.querySelector("header h1")?.textContent?.trim()||r.querySelector("title")?.textContent||"Telegraph стаття",a=r.querySelector("header address a")?.textContent||"Telegraph",n=r.querySelector("article img"),s=n?n.getAttribute("src"):"",o=s?s.startsWith("http")?s:`https://telegra.ph${s}`:"",l=Array.from(r.querySelectorAll("article p")).map(e=>e.textContent).join("\n\n")||"Читати повну статтю на Telegraph.";return{status:"ok",items:[{title:i,description:l.substring(0,300)+(l.length>300?"...":""),link:e.url,pubDate:(new Date).toISOString(),thumbnail:o||"",displayImage:o||"data:image/webp;base64,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",sourceName:a,sourceFlag:"📝",sourceHome:"https://telegra.ph",sourceUrl:e.url}]}}catch(rm){return console.error("Telegraph load failed:",rm),null}})(e):"hive"===t?await(async e=>{const t=e.url;if(t.match(/board\/(\d+)\/(\d+)/))try{const r=await Tb(t),i=(new DOMParser).parseFromString(r,"text/html"),a=i.querySelector('meta[property="og:title"]')?.getAttribute("content")||i.querySelector(".title_wrap .title")?.textContent?.trim()||"Допис у Hive",n=i.querySelector('meta[property="og:description"]')?.getAttribute("content")||i.querySelector(".post_cont")?.textContent?.trim().substring(0,300)||"Деталі допису у спільноті Hive.",s=i.querySelector('meta[property="og:image"]')?.getAttribute("content")||i.querySelector(".post_cont img")?.getAttribute("src")||"";return{status:"ok",items:[{title:a,description:n.length>=300?n.substring(0,300)+"...":n,link:t,pubDate:(new Date).toISOString(),thumbnail:s||"",displayImage:s||"data:image/webp;base64,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",sourceName:e.name,sourceFlag:"🐝",sourceHome:t.split("/board/")[0],sourceUrl:t}]}}catch(rm){console.error("Failed to parse single Hive post:",rm)}const r=(e=>{const t=e.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);return t?{gameCode:t[1],lang:t[2]||"en",boardIdx:t[3]}:null})(t);if(!r)return null;const{gameCode:i,lang:a,boardIdx:n}=r;try{const r=`https://corsproxy.io/?https://community.withhive.com/${i}/board/list/getBoardList`,a=await(await fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams({page:1,board_idx:n,board_type:1,board_comment:1,boardtype1_preview_image:"1",is_mobile:1,select_type:1,view_type:"list"})})).json();if(!a.list)throw new Error("No dynamic list found");const s=(new DOMParser).parseFromString(a.list,"text/html").querySelectorAll("li"),o=[];return s.forEach(r=>{const a=r.querySelector("a");if(!a)return;const n=a.getAttribute("href")||"",s=n.startsWith("http")?n:`https://community.withhive.com${n}`,l=r.querySelector(".title, .subject, p, h3, h4"),c=l?l.textContent.trim():"Hive Post",d=r.querySelector("img");let h="";if(d)h=d.getAttribute("src")||d.getAttribute("data-src")||"";else{const e=r.querySelector(".thumb");if(e){const t=e.getAttribute("style"),r=t&&t.match(/url\(['"]?([^'"]+)['"]?\)/);r&&(h=r[1])}}const f=r.querySelector(".t_date, .date, .time"),p=f?f.textContent.trim():(new Date).toISOString(),x=r.querySelector(".desc, .text, .wordcut"),u=x?x.textContent.trim():"";o.push({title:c,description:u||"Перегляньте допис у спільноті Hive.",link:s,pubDate:p,thumbnail:h||"",displayImage:h||"data:image/webp;base64,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",sourceName:e.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${i}`,sourceUrl:t})}),{status:"ok",items:o}}catch(rm){console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");try{const r=await Tb(t),a=(new DOMParser).parseFromString(r,"text/html"),s=a.querySelector('meta[property="og:title"]')?.getAttribute("content")||a.querySelector(".board_cmm .title")?.textContent?.trim()||`Hive Board ${n}`,o=a.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Перегляньте дописи у спільноті Hive.",l=a.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:s,description:o,link:t,pubDate:(new Date).toISOString(),thumbnail:l||"",displayImage:l||"data:image/webp;base64,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",sourceName:e.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${i}`,sourceUrl:t}]}}catch(s){return null}}})(e):null},_b=({isDarkMode:e,isStickyBgMode:t,user:r})=>{const{registerRef:i}=Lh?.()||{registerRef:()=>{}},a=e,[n,s]=(0,Ar.useState)([]),[o,l]=(0,Ar.useState)(0),[c,d]=(0,Ar.useState)(!0),[p,x]=(0,Ar.useState)(0),[u,g]=(0,Ar.useState)(!1),[m,y]=(0,Ar.useState)(""),[w,v]=(0,Ar.useState)(["all"]),k=e=>{if("all"===e)return void v(["all"]);let t=[...w].filter(e=>"all"!==e);t.includes(e)?t=t.filter(t=>t!==e):t.push(e),0===t.length&&(t=["all"]),v(t)},[j,M]=(0,Ar.useState)(null),[S,$]=(0,Ar.useState)(0),D=async e=>{if(!e||e.length<3)return e;try{const t=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(e)}`);return t.ok&&ne.current?(await t.json())[0].map(e=>e[0]).join(""):null}catch{return null}},[C,L]=(0,Ar.useState)(!1),[A,z]=(0,Ar.useState)(null),[I,E]=(0,Ar.useState)(!1),[N,R]=(0,Ar.useState)(!1),[T,F]=(0,Ar.useState)([]),[P,V]=(0,Ar.useState)(""),[_,O]=(0,Ar.useState)(!1),[,B]=(0,Ar.useState)([]),[H,q]=(0,Ar.useState)([]),[K,Z]=(0,Ar.useState)(!1),[U,J]=(0,Ar.useState)([]),W=(0,Ar.useRef)([]);W.current=U;const Y=Boolean(r?.syncMutedNews&&r?.uid),[Q,X]=(0,Ar.useState)(0),ee=(0,Ar.useRef)(0);ee.current=Q;const te=(0,Ar.useRef)(null),re=Y?{used:Q,limit:30}:null,[ie,ae]=(0,Ar.useState)(!1),ne=(0,Ar.useRef)(!0),se=(0,Ar.useRef)(null),oe=(0,Ar.useRef)(null),[le,ce]=(0,Ar.useState)(!1),[de,he]=(0,Ar.useState)(!1);(0,Ar.useEffect)(()=>{ne.current=!0;return(async()=>{try{const e=await Po.default.getItem("custom_news_sources");e&&F(e)}catch(e){}})(),()=>{ne.current=!1,oe.current?.abort()}},[]),(0,Ar.useEffect)(()=>{(async()=>{try{const e=await Po.default.getItem("filtered_news_stats");e?.date===Ab()&&Array.isArray(e.links)&&ne.current&&l(e.links.length)}catch(e){}})()},[]),(0,Ar.useEffect)(()=>{let e=!1;return(async()=>{let t=[];try{t=await Po.default.getItem("muted_news_urls")||[]}catch(i){}if(e||J(t),Y)try{const[t,i]=await Promise.all([Po.default.getItem(yy),Po.default.getItem(by)]),{db:a,doc:n,getDoc:s}=await Gx(),o=await s(n(a,"config",r.uid)),l=o.exists()?o.data():{},c=ky({date:vy(l.muteSyncAt),count:l.muteSyncCount},r.uid),d=Math.max(c,ky(i,r.uid));if(e)return;if(te.current=wy(),X(d),Array.isArray(l.mutedNews)){const e=((e,t)=>{const r=new Set(t?.unmute||[]);return[...new Set([...e||[],...t?.mute||[]])].filter(e=>!r.has(e))})(l.mutedNews,t);J(e),Po.default.setItem("muted_news_urls",e).catch(()=>{})}}catch(i){console.warn("Не вдалося завантажити заглушені новини з хмари",i)}})(),()=>{e=!0}},[Y,r?.uid]),(0,Ar.useEffect)(()=>{if(!0!==r?.newsAutoScroll)return;const e=window.setTimeout(()=>{se.current?.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>window.clearTimeout(e)},[r?.newsAutoScroll]),(0,Ar.useEffect)(()=>{const e=()=>{R(!0),setTimeout(()=>R(!1),1500)},t=setTimeout(e,2e3),r=setInterval(e,7e3);return()=>{clearTimeout(t),clearInterval(r)}},[]);const fe=(0,Ar.useCallback)(async(e=!1,t=!1)=>{oe.current?.abort();const r=new AbortController;oe.current=r;const i=r.signal;ne.current&&(g(!1),y("")),e&&ne.current&&(d(!0),x(5));try{let r=[];const a=[],n=await Po.default.getItem("custom_news_sources")||[],o=[...Iy,...n.filter(e=>!Ny.test(e.url||""))];let c=[],h=[];try{const e=9e5,r=t?null:await Po.default.getItem("news_blocklist_cache");if(r&&Date.now()-r.savedAt<e)c=r.bNews,h=r.blockedSources.map(e=>e.url),ne.current&&(B(c),q(r.blockedSources));else{const[e,t]=(await Promise.all([eu("news_reports"),eu("rss_reports")])).map(e=>e.map(e=>({id:e.id,data:()=>e.data}))),r=Date.now();e.forEach(e=>{Cb(e.data(),r)>=10&&c.push(e.id)});const i=[];t.forEach(e=>{const t=e.data();if(Cb(t,r)>=20){if(Ry.has(decodeURIComponent(e.id)))return;i.push({id:e.id,url:decodeURIComponent(e.id),name:t.name||"Джерело"}),h.push(decodeURIComponent(e.id))}}),ne.current&&(B(c),q(i)),await Po.default.setItem("news_blocklist_cache",{savedAt:Date.now(),bNews:c,blockedSources:i})}}catch(rm){}const f=async e=>{try{const t=await fetch(e,{signal:i}),r=t.headers.get("content-type")||"";if(t.ok&&r.includes("json")){const e=await t.json();if(e&&Array.isArray(e.items))return(e.items||[]).map(e=>({title:e.title||"",link:e.url||e.external_url||"",description:e.summary||e.content_text||e.content_html||"",content:e.content_html||"",pubDate:e.date_published||e.date_modified||"",thumbnail:e.image||""})).filter(e=>e.title&&e.link)}}catch(t){if("AbortError"===t.name)throw t}return null},p=(e,t)=>e.map(e=>{const r=(e=>{if(!e)return null;const t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?`https://i.ytimg.com/vi/${t[2]}/hqdefault.jpg`:null})(e.link),i=Ib(e);return{...e,thumbnail:r||i||e.thumbnail||"",displayImage:r||i||e.thumbnail||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:t.flag,sourceHome:t.home,sourceUrl:t.url}}),u=async e=>{const t=zb(e.url);if("rss"!==t&&"youtube"!==t){if("telegram"===t){const t=await f(`/api/news-feed?url=${encodeURIComponent(e.url)}`);if(t&&t.length>0)return p(t,e)}const r=await Vb(e);return r?.items?.length>0?r.items:[]}const r=Iy.find(t=>t.url===e.url),a=r?`/api/news-feed?source=${encodeURIComponent(r.id)}`:`/api/news-feed?url=${encodeURIComponent(e.url)}`;let n=await f(a);if(!n){const t=await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(e.url)}`,{signal:i});if(!t.ok)throw new Error(`RSS-конвертер відповів HTTP ${t.status}`);const r=await t.json();if("ok"!==r.status||!Array.isArray(r.items))throw new Error(r.message||"RSS-конвертер повернув некоректну відповідь");n=r.items}return p(n,e)},m=o.filter(e=>!h.includes(e.url));if((await Promise.allSettled(m.map(u))).forEach((e,t)=>{"fulfilled"!==e.status?"AbortError"!==e.reason?.name&&(a.push(m[t].name),console.warn(`Не вдалося завантажити новини з ${m[t].name}:`,e.reason)):r=[...r,...e.value]}),i.aborted)return;if(0===r.length)return void(ne.current&&(y(a.length>0?`Не вдалося отримати новини (недоступно: ${a.join(", ")}). Перевірте з'єднання або спробуйте оновити сторінку пізніше.`:"Зараз немає доступних новин. Спробуйте оновити сторінку пізніше."),g(!0),x(100),d(!1)));e&&ne.current&&x(25),r.sort((e,t)=>new Date(t.pubDate)-new Date(e.pubDate));const b=uy(),w=r.filter(e=>{if(!b)return!0;const t=e.title+" "+(e.description||"");return!my(t)}),v=r.filter(e=>!w.includes(e)).map(e=>e.link||`${e.sourceUrl}:${e.title}`),k=Ab(),j=await Po.default.getItem("filtered_news_stats"),S=j?.date===k&&Array.isArray(j.links)?j.links:[],$=[...new Set([...S,...v])];await Po.default.setItem("filtered_news_stats",{date:k,links:$}),ne.current&&l($.length);const C={},L=w.filter(e=>(C[e.sourceName]=(C[e.sourceName]||0)+1,C[e.sourceName]<=10)).slice(0,45),A=new Array(L.length),z=[],I=[],E=await Po.default.getItem("seen_news_links")||[];for(let e=0;e<L.length;e++){const t=L[e],r=`news_trans_${t.link}`,i=await Po.default.getItem(r),a=!E.includes(t.link);if(i)A[e]={...i,displayImage:i.displayImage&&"data:image/webp;base64,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"!==i.displayImage?i.displayImage:t.displayImage||"data:image/webp;base64,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",sourceName:t.sourceName,sourceFlag:t.sourceFlag,sourceHome:t.sourceHome,sourceUrl:t.sourceUrl,isNew:a,isBlocked:c.includes(encodeURIComponent(t.link))};else{const r=(t.description||"").replace(/<[^>]*>?/gm,"").trim().substring(0,170);z.push(e),I.push(t.title),I.push(r)}}if(I.length>0){e&&ne.current&&x(40);let t=[],r=[],i=0;const a=[];for(let e=0;e<z.length;e++){const n=I[2*e],s=I[2*e+1],o=n.length+s.length+10;i+o>4500&&t.length>0&&(a.push({strings:t,indices:r}),t=[],r=[],i=0),t.push(n,s),r.push(z[e]),i+=o}t.length>0&&a.push({strings:t,indices:r});const n=async(e,t)=>{const r=await D(`${e} ___ ${t}`);if(null===r)return null;const i=r.split(/\s*___\s*/);return 2===i.length?i:null};for(const e of a){const t=await D(e.strings.join(" ___ "));let r=null===t?null:t.split(/\s*___\s*/);const i=r&&r.length===e.strings.length;for(let a=0;a<e.indices.length;a++){const t=e.indices[a],s=L[t],o=e.strings[2*a],l=e.strings[2*a+1],d=Ib(s)||"data:image/webp;base64,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",h=i?[r[2*a],r[2*a+1]]:await n(o,l),f={title:h?.[0]?.trim()||s.title,description:(h?h[1]?.trim()||"":l)+"...",link:s.link,displayImage:d,sourceName:s.sourceName,sourceFlag:s.sourceFlag,sourceHome:s.sourceHome,sourceUrl:s.sourceUrl,isNew:!E.includes(s.link),isBlocked:c.includes(encodeURIComponent(s.link))};h&&await Po.default.setItem(`news_trans_${s.link}`,f),A[t]=f}}}e&&ne.current&&x(100);const N=await Po.default.keys(),R=N.filter(e=>e.startsWith("news_trans_")),T=N.filter(e=>e.startsWith("og_img_")),F=L.map(e=>`news_trans_${e.link}`),P=L.map(e=>`og_img_${e.link}`);for(const e of R)F.includes(e)||await Po.default.removeItem(e);for(const e of T)P.includes(e)||await Po.default.removeItem(e);ne.current&&(s(A),M(new Date))}catch(rm){if("AbortError"===rm.name||rm.message?.includes("aborted"))return;console.error("Справжня помилка завантаження:",rm),ne.current&&(y("Сталася помилка під час завантаження новин. Спробуйте ще раз пізніше."),g(!0),x(100),e&&(d(!0),await new Promise(e=>setTimeout(e,2500))))}finally{ne.current&&oe.current===r&&d(!1)}},[]),pe=n.filter(e=>w.includes("all")||w.includes(e.sourceName)),ue=new Set,ge=[],me=[];pe.forEach(e=>{ue.has(e.sourceName)?me.push(e):(ue.add(e.sourceName),ge.push(e))});const ye=e=>({...e,isMuted:U.includes(e.link)}),be=ge.slice(0,45).map(ye),we=me.slice(0,4).map(ye),ke=be.length>0?[...be,...be,...be]:[],je=(0,Ar.useRef)(null),[Me,Se]=(0,Ar.useState)(null),$e=(0,Ar.useRef)(!1),De=(0,Ar.useRef)(null),Ce=(0,Ar.useCallback)(()=>{const e=je.current;if(!e)return;const t=e.getBoundingClientRect().left+e.clientWidth/2;let r=null,i=1/0;[...e.querySelectorAll("[data-news-slide]")].forEach((e,a)=>{const n=e.getBoundingClientRect(),s=Math.abs(n.left+n.width/2-t);s<i&&(i=s,r=a)}),Se(r)},[]),Le=e=>{if(!je.current)return;const t=je.current,r=(t.querySelector("[data-news-slide]")?.getBoundingClientRect().width||280)+(Number.parseFloat(getComputedStyle(t).gap)||5);$e.current=!0,t.scrollBy({left:"left"===e?-r:r,behavior:"smooth"}),setTimeout(()=>{$e.current=!1},600)};(0,Ar.useEffect)(()=>{if(je.current&&be.length>0){const e=je.current.scrollWidth/3;je.current.scrollLeft=e,requestAnimationFrame(Ce)}},[be.length,w,Ce]),(0,Ar.useEffect)(()=>{(async()=>{try{const e=await Po.default.getItem("news_refresh_cooldown_end");if(e){const t=Math.ceil((e-Date.now())/1e3);t>0&&$(t)}}catch(e){}fe(!0)})();const e=setInterval(()=>fe(!1),36e5);return()=>{clearInterval(e)}},[]),(0,Ar.useEffect)(()=>{if(S>0){const e=setTimeout(()=>$(S-1),1e3);return()=>clearTimeout(e)}Po.default.removeItem("news_refresh_cooldown_end")},[S]);const Ae=async(e,t)=>{let r=("string"==typeof e?e:P).trim();if(!Ny.test(r)&&r)if(T.length>=5)alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");else try{let e=r,i="",a=(0,_o.jsx)(G,{}),n="";const s=e.match(/^@([\w.-]+)@([\w-]+(?:\.[\w-]+)+)$/);s?e=`https://${s[2]}/@${s[1]}`:e.startsWith("@")&&(e=`https://t.me/${e.slice(1)}`),e.startsWith("http://")||e.startsWith("https://")||(e=/^[a-zA-Z0-9_]+$/.test(e)?`https://t.me/${e}`:`https://${e}`);const o=new URL(e),l=o.hostname.replace("www.","");i=l,n=o.origin;const c=zb(e);if("youtube"===c){alert("Здійснюється пошук ID YouTube каналу...");const t=await(async e=>{const t=e.match(/(UC[a-zA-Z0-9_-]{22})/);if(t)return t[1];try{const t=await fetch(`/api/news-feed?resolve=youtube&url=${encodeURIComponent(e)}`);if(t.ok){const e=await t.json();if(e?.channelId)return e.channelId}}catch{}try{const t=await Tb(e),r=t.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i)||t.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i)||t.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i)||t.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);return r?r[1]:null}catch(rm){return console.error("Error resolving YouTube channel ID:",rm),null}})(e);if(!t)return void alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");e=`https://www.youtube.com/feeds/videos.xml?channel_id=${t}`,i=`YouTube: ${l}`,a=(0,_o.jsx)(Ke,{})}else if("telegram"===c){const t=e.split("/");i=`Telegram: ${t[t.length-1]||t[t.length-2]}`,a=e.includes("+")||e.includes("joinchat")?"🔒":"📢",n=e}else if("telegraph"===c)i="Telegraph",a=(0,_o.jsx)(G,{}),n="https://telegra.ph";else if("hive"===c){const t=e.match(/withhive\.com\/([a-zA-Z0-9_-]+)/),r=t?t[1]:"Hive";i=`Hive: ${r}`,a=(0,_o.jsx)(xe,{}),n=`https://community.withhive.com/${r}`}else/^bsky\.app$/i.test(l)&&o.pathname.startsWith("/profile/")?(i=`Bluesky: ${o.pathname.split("/")[2]||l}`,a="🦋"):/^\/@[^/]+\/?$/.test(o.pathname)?(i=`Mastodon: ${o.pathname.replace(/\//g,"")}@${l}`,a="🐘"):(i=l,a=(0,_o.jsx)(G,{}));const d={url:e,name:"string"==typeof t&&t||i,flag:a,home:n,type:c},h=await Po.default.getItem("custom_news_sources")||[];if(h.find(t=>t.url===e))alert("Це джерело вже додано.");else{if(h.length>=5)return void alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");const e=[...h,d];await Po.default.setItem("custom_news_sources",e),F(e),V(""),O(!1),he(!1),fe(!0)}}catch(rm){console.error(rm),alert("Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)")}},ze=async(e,t)=>{if(t.preventDefault(),t.stopPropagation(),r){if(window.confirm("Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)"))try{const{auth:t,db:r,doc:i,getDoc:a,writeBatch:n,serverTimestamp:s}=await Gx();"function"==typeof t.authStateReady&&await t.authStateReady();const o=t.currentUser;if(!o||o.isAnonymous)return void alert("Щоб поскаржитися, увійдіть в акаунт ще раз.");const l=o.uid,c=encodeURIComponent(e.link),d=encodeURIComponent(e.sourceUrl),h=i(r,"news_reports",c),f=i(r,"rss_reports",d),p=i(r,"config",l),[x,u,g]=await Promise.all([a(h),a(f),a(p)]);if(Lb(x.exists()?x.data():null,l))return void alert("Ви вже скаржилися на цю новину сьогодні.");const m=My(g.exists()?g.data():{},jy.reports);if(m>=jy.reports.limit)return void alert(`Можна подати не більше ${jy.reports.limit} скарг на добу.`);const y=n(r);y.set(h,{reporters:{[l]:s()}},{merge:!0});const b=u.exists()?u.data():null;Lb(b,l)||y.set(f,{reporters:{[l]:s()},...b?.name?{}:{name:String(e.sourceName||"Джерело").slice(0,100)}},{merge:!0}),y.set(p,{[jy.reports.countKey]:m+1,[jy.reports.atKey]:s()},{merge:!0}),await y.commit(),alert("Скаргу прийнято. Дякуємо!"),fe(!0,!0)}catch(i){console.warn("Помилка відправки скарги:",i),alert("Помилка відправки скарги.")}}else alert("Тільки авторизовані користувачі можуть залишати скарги.")},Ie=async(e,t)=>{const i=W.current,a=("mute"===t?[...new Set([...i,e])]:i.filter(t=>t!==e)).slice(-1e3);W.current=a,J(a);try{await Po.default.setItem("muted_news_urls",a)}catch(o){}if(!Y)return;const n=async()=>{try{const r=await Po.default.getItem(yy);await Po.default.setItem(yy,((e,t,r)=>{const i=e||{mute:[],unmute:[]},a="mute"===r?"unmute":"mute";return{...i,[r]:[...new Set([...i[r]||[],t])],[a]:(i[a]||[]).filter(e=>e!==t)}})(r,e,t))}catch(o){}},s={current:{date:te.current,count:ee.current}};try{const e=await Sy({uid:r.uid,data:{mutedNews:a},limitConfig:jy.mute,counterRef:s,storageKey:by});e.ok?(await Po.default.removeItem(yy),30===e.count&&Ym("Використано всі 30 синхронізацій на сьогодні. Далі зміни зберігатимуться лише на цьому пристрої.",{id:"mute-sync-limit",duration:4500})):(await n(),Ym("Ліміт синхронізації вичерпано (30/30 за добу). Зміну збережено лише на цьому пристрої.",{id:"mute-sync-limit",duration:4500}))}catch(o){console.warn("Помилка синхронізації заглушених новин",o),await n()}finally{te.current=s.current.date,ee.current=s.current.count,X(s.current.count)}},Ee=async(e,t)=>{t&&(t.preventDefault(),t.stopPropagation()),await Ie(e.link,"mute")},Ne=async e=>{await Ie(e.link,"unmute")},Re=async e=>{if(window.confirm("Видалити це джерело новин?"))try{const t=await Po.default.getItem("custom_news_sources")||[],r=t.filter(t=>t.url!==e);await Po.default.setItem("custom_news_sources",r),F(r);const i=t.find(t=>t.url===e)?.name;i&&w.includes(i)&&v(["all"]),fe(!0)}catch(t){console.error("Localforage error:",t),alert("Помилка видалення джерела.")}},Te=r?.newsLayout||[],Fe=e=>!1!==Te.find(t=>t.key===e)?.visible,Pe=!0,Ve=Fe("title"),_e=Fe("description"),[Oe,Be]=(0,Ar.useState)(!1);return(0,_o.jsxs)(Py,{ref:se,children:[(0,_o.jsxs)(zy,{$isStickyBgMode:t,$isDarkMode:a,children:[(0,_o.jsx)(Vy,{$isDarkMode:a,children:(0,_o.jsx)(mb,{ref:e=>i("newsHeader",e),$isDarkMode:a,onClick:()=>Be(!0),style:{marginLeft:"5px",padding:"2px",fontSize:"15px",fontWeight:"600",background:"none"},children:"Натисніть для додавання стрічки новин"})}),(0,_o.jsx)(f,{children:ie&&(0,_o.jsxs)(h.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:[(0,_o.jsxs)(gb,{children:[(0,_o.jsx)(mb,{$isDarkMode:a,onClick:()=>E(!0),children:"Інструкція"}),(0,_o.jsxs)(mb,{$isDarkMode:a,$active:w.includes("all"),onClick:()=>k("all"),children:[w.includes("all")?"☑":"☐"," Усі"]}),Iy.map(e=>(0,_o.jsxs)(mb,{$isDarkMode:a,$active:w.includes(e.name),onClick:()=>k(e.name),children:[w.includes(e.name)?"☑":"☐"," ",e.name]},e.name)),T.map(e=>(0,_o.jsxs)(mb,{$isDarkMode:a,$active:w.includes(e.name),onClick:()=>k(e.name),children:[w.includes(e.name)?"☑":"☐"," ",e.name,(0,_o.jsx)("span",{onClick:t=>{t.stopPropagation(),Re(e.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},e.url)),T.length<5&&(0,_o.jsx)(mb,{$isDarkMode:a,onClick:()=>O(!_),style:{borderStyle:"dashed"},children:_?"Скасувати":"Додати стрічку"}),(0,_o.jsxs)(mb,{$isDarkMode:a,onClick:()=>Z(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",H.length,")"]})]}),(0,_o.jsx)(f,{children:_&&(0,_o.jsx)(h.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,_o.jsx)("input",{type:"text",value:P,onChange:e=>V(e.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"5px",borderRadius:"5px",border:"1px solid "+(a?"rgba(0, 0, 0, 0.98)":"rgb(255, 255, 255)"),background:"transparent",color:"#fff",outline:"none",minWidth:"248px",fontFamily:"var(--font-family)",fontSize:"12px","--placeholder-color":"rgba(255, 255, 255, 0.97)"}}),(0,_o.jsx)(mb,{$isDarkMode:a,onClick:Ae,style:{background:"#ffb36c",color:"#000"},children:"Додати"})]})})})]})})]}),c?(0,_o.jsxs)("div",{style:{textAlign:"center",color:"gray",padding:"60px 20px"},children:[(0,_o.jsx)("div",{style:{marginBottom:"15px",fontSize:"14px",background:"rgba(0, 0, 0, 0.71)",color:"#fff",borderRadius:"5px",padding:"10px 15px",display:"inline-block",fontWeight:"900"},children:u?"Помилка завантаження!":`Шукаємо цікаві новини: ${p}%`}),(0,_o.jsx)(jb,{$isDarkMode:a,children:(0,_o.jsx)(Mb,{$progress:p,$isError:u})})]}):pe.length>0?(0,_o.jsxs)("div",{style:{position:"relative",maxWidth:"1400px",margin:"0 auto"},children:[(0,_o.jsx)(f,{mode:"wait",children:(0,_o.jsx)(h.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},style:{width:"100%"},children:(0,_o.jsxs)(_y,{children:[(0,_o.jsx)(Oy,{ref:je,onScroll:()=>{je.current&&0!==be.length&&(Ce(),$e.current||(De.current&&clearTimeout(De.current),De.current=setTimeout(()=>{const e=je.current;if(!e)return;const t=e.scrollWidth/3,r=e.style.scrollSnapType;e.scrollLeft<=12?($e.current=!0,e.style.scrollSnapType="none",e.scrollLeft+=t,requestAnimationFrame(()=>{e.style.scrollSnapType=r,$e.current=!1})):e.scrollLeft>=2*t-12&&($e.current=!0,e.style.scrollSnapType="none",e.scrollLeft-=t,requestAnimationFrame(()=>{e.style.scrollSnapType=r,$e.current=!1}))},150)))},children:ke.map((e,t)=>(0,_o.jsx)(qy,{"data-news-slide":!0,$distanceFromCenter:null===Me?2:Math.min(Math.abs(Me-t),2),children:(0,_o.jsx)(fb,{item:e,$isDarkMode:a,showImage:Pe,showTitle:Ve,showDescription:_e,onAiSummaryClick:e=>{z(e),L(!0)},onReportClick:ze,onMuteClick:Ee,onUnmuteClick:Ne,muteSyncInfo:re})},`${e.link}-${t}`))}),(0,_o.jsxs)(By,{$visible:N,children:[(0,_o.jsx)(Hy,{$direction:"previous",onClick:()=>Le("left"),children:"◀"}),(0,_o.jsx)(Hy,{$direction:"next",onClick:()=>Le("right"),children:"▶"})]})]})},w.join(","))}),(0,_o.jsx)(Ky,{onClick:()=>ce(!0),children:"Більше новин, джерела над кнопкою"}),(0,_o.jsxs)(Sb,{$isDarkMode:a,children:["За сьогодні відфільтровано ",o," небажаних новин."]})]}):(0,_o.jsx)("div",{style:{textAlign:"center",color:"white",padding:"14px",background:"#0000009c",marginTop:"20px",fontSize:"12px"},children:u?m:0===n.length?"Усі отримані новини приховані фільтром вмісту.":"Для обраних джерел поки немає новин."}),A&&C&&(0,_o.jsx)(Ar.Suspense,{fallback:null,children:(0,_o.jsx)(Dy,{isOpen:C,onClose:()=>L(!1),newsItem:A,isDarkMode:a})}),I&&(0,_o.jsx)(tm,{isOpen:I,onClose:()=>E(!1),initialFaqQuestion:"Новини: покроковий посібник"}),K&&(0,_o.jsx)(sb,{onClick:()=>Z(!1),children:(0,_o.jsxs)(ob,{$isDarkMode:a,onClick:e=>e.stopPropagation(),children:[(0,_o.jsx)(db,{onClick:()=>Z(!1),children:"✕"}),(0,_o.jsx)("h2",{style:{marginTop:0},children:"Чорний список (карантин 24 год)"}),(0,_o.jsx)("p",{style:{fontSize:"13px"},children:"Ці RSS-джерела отримали багато скарг і відключені для всіх користувачів."}),0===H.length?(0,_o.jsx)("p",{children:"Наразі немає заблокованих джерел."}):(0,_o.jsx)("ul",{style:{paddingLeft:"20px",marginTop:"15px"},children:H.map(e=>(0,_o.jsxs)("li",{style:{marginBottom:"15px"},children:[(0,_o.jsx)("strong",{style:{fontSize:"16px"},children:e.name}),(0,_o.jsx)("br",{}),(0,_o.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",style:{fontSize:"12px",color:"#ffb36c",wordBreak:"break-all"},children:e.url})]},e.id))})]})}),(0,Cc.createPortal)((0,_o.jsx)(f,{children:le&&(0,_o.jsx)(lb,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:()=>ce(!1),style:{alignItems:"center",justifyContent:"center",padding:"8px"},children:(0,_o.jsxs)(Zy,{onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px",paddingBottom:"6px",borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},children:[(0,_o.jsx)("h2",{style:{margin:0,color:"#ffaa00",fontSize:"15px"},children:"Більше новин"}),(0,_o.jsx)(db,{onClick:()=>ce(!1),children:"✕"})]}),(0,_o.jsx)(Uy,{children:we.map(e=>(0,_o.jsx)(fb,{item:e,$isDarkMode:a,showImage:Pe,showTitle:Ve,showDescription:_e,onAiSummaryClick:e=>{z(e),L(!0)},onReportClick:ze,onMuteClick:Ee,onUnmuteClick:Ne,muteSyncInfo:re},e.link))})]})},"more-news-modal")}),document.body),(0,Cc.createPortal)((0,_o.jsx)(f,{children:Oe&&(0,_o.jsxs)(lb,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.25},children:[(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",zIndex:"3000",margin:"0 auto 16px auto",paddingBottom:"3px",borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},children:[(0,_o.jsx)("h2",{style:{margin:0,color:"#ffaa00",fontSize:"15px"},children:"Повноекранні новини та керування стрічками"}),(0,_o.jsx)(db,{onClick:()=>Be(!1),style:{fontSize:"16px",padding:"6px 16px"},children:"Закрити"})]}),(0,_o.jsx)(cb,{children:(0,_o.jsxs)("div",{style:{background:"rgba(20, 20, 20, 0.8)",padding:"12px",borderRadius:"8px",marginBottom:"20px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[(0,_o.jsx)("div",{style:{marginBottom:"10px",fontWeight:"600",fontSize:"14px"},children:"Налаштування та вибір авторів / джерел:"}),(0,_o.jsx)(wb,{type:"text",value:P,onChange:e=>V(e.target.value),onFocus:()=>he(!0),onBlur:()=>he(!1),onKeyDown:e=>{"Enter"===e.key&&P.trim()&&Ae(),"Escape"===e.key&&e.currentTarget.blur()},placeholder:"Додати стрічку: назва сайту або посилання (RSS, YouTube, Telegram, Mastodon, Bluesky, Hive)"}),de?(0,_o.jsx)("div",{onMouseDown:e=>e.preventDefault(),children:(0,_o.jsxs)(vb,{children:[Ny.test(P)&&(0,_o.jsx)("div",{style:{gridColumn:"1 / -1",padding:"14px",borderRadius:"10px",border:"1px dashed rgba(255, 170, 0, 0.6)",background:"rgba(255, 170, 0, 0.08)",color:"#ffd9a0",fontSize:"14px",lineHeight:1.5},children:"🪦 Facebook — мертвий сад, з якого всі йдуть, а він ще й вимагає гроші за рекламу. Тому бундючна студія звідти й пішла. Шукай їх у YouTube, Telegram або Bluesky."}),P.trim()&&!Ny.test(P)&&(0,_o.jsxs)(kb,{onClick:()=>Ae(),children:[(0,_o.jsx)(ve,{}),"Додати «",P.trim().length>40?P.trim().slice(0,40)+"…":P.trim(),"»"]}),Ey.filter(e=>{const t=P.trim().toLowerCase();return!t||e.name.toLowerCase().includes(t)||e.url.toLowerCase().includes(t)}).map(e=>{const t=Iy.some(t=>t.url===e.url)||T.some(t=>t.url===e.url);return(0,_o.jsxs)(kb,{disabled:t||T.length>=5,onClick:()=>Ae(e.url,e.name),children:[(0,_o.jsx)(b,{}),e.name,t&&(0,_o.jsx)("span",{style:{fontSize:"11px"},children:"✓ Додано"})]},e.url)})]})}):(0,_o.jsxs)(yb,{children:[(0,_o.jsxs)(bb,{$isDarkMode:a,onClick:()=>E(!0),children:[(0,_o.jsx)(St,{}),"Інструкція"]}),(0,_o.jsxs)(bb,{$isDarkMode:a,$active:w.includes("all"),onClick:()=>k("all"),children:[(0,_o.jsx)(sr,{}),w.includes("all")?"☑":"☐"," Усі"]}),Iy.map(e=>(0,_o.jsxs)(bb,{$isDarkMode:a,$active:w.includes(e.name),onClick:()=>k(e.name),children:[(0,_o.jsx)(b,{}),w.includes(e.name)?"☑":"☐"," ",e.name]},e.name)),T.map(e=>(0,_o.jsxs)(bb,{$isDarkMode:a,$active:w.includes(e.name),onClick:()=>k(e.name),children:[(0,_o.jsx)(b,{}),(0,_o.jsxs)("span",{children:[w.includes(e.name)?"☑":"☐"," ",e.name]}),(0,_o.jsx)("span",{onClick:t=>{t.stopPropagation(),Re(e.url)},style:{position:"absolute",top:"4px",right:"10px",fontSize:"18px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},e.url)),(0,_o.jsxs)(bb,{$isDarkMode:a,onClick:()=>Z(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:[(0,_o.jsx)(Ge,{}),"Чорний список (",H.length,")"]})]})]})})]})}),document.body)]})},Ob='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#eef3f6,var(--shade) var(--night));stroke:none"/><path d="M60 170L210 42L360 170Z" style="fill:color-mix(in srgb,#8ea2b6,var(--shade) var(--night));stroke:none"/><path d="M168 77.8L210 42L252 77.8L228 72.8L210 79.8L189 72.8Z" style="fill:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke:none"/><path d="M-40 170L50 86L140 170Z" style="fill:color-mix(in srgb,#7b90a6,var(--shade) var(--night));stroke:none"/><path d="M24.8 109.5L50 86L75.2 109.5L60.8 104.5L50 111.5L37.4 104.5Z" style="fill:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke:none"/><path d="M260 170L360 74L460 170Z" style="fill:color-mix(in srgb,#7b90a6,var(--shade) var(--night));stroke:none"/><path d="M332 100.9L360 74L388 100.9L372 95.9L360 102.9L346 95.9Z" style="fill:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke:none"/><path d="M117 140L146 121.8L175 140Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night))"/><rect x="120" y="140" width="52" height="30" style="fill:color-mix(in srgb,#8a5a3a,var(--shade) var(--night))"/><rect class="win" x="129.6" y="147.1" width="11.8" height="6.2" rx="0.8"/><rect class="win" x="150.6" y="147.1" width="11.8" height="6.2" rx="0.8"/><rect x="139" y="160.4" width="14" height="9.6" style="fill:color-mix(in srgb,#5a3a22,var(--shade) var(--night))"/><path d="M227 144L252 128.6L277 144Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night))"/><rect x="230" y="144" width="44" height="26" style="fill:color-mix(in srgb,#9a6644,var(--shade) var(--night))"/><rect class="win" x="242.5" y="150.5" width="19" height="4.6" rx="0.8"/><rect x="245.4" y="161.7" width="13.2" height="8.3" style="fill:color-mix(in srgb,#5a3a22,var(--shade) var(--night))"/><rect x="132" y="120" width="7" height="12" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night))"/><g class="sway" style="animation-delay:-0.70s"><rect x="28.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M19.65 166L30 145.3L40.35 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M21.927 153.6L30 132.9L38.073 153.6Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M24.204 141.2L30 120.5L35.796 141.2Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/></g><rect x="53.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M46.9 166L55 149.8L63.1 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M48.682 156.3L55 140.1L61.318 156.3Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M50.464 146.6L55 130.4L59.536 146.6Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><rect x="88.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M80.55 166L90 147.1L99.45 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M82.629 154.7L90 135.8L97.371 154.7Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M84.708 143.3L90 124.4L95.292 143.3Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><g class="sway" style="animation-delay:-0.19s"><rect x="193.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M187.35 166L195 150.7L202.65 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M189.033 156.8L195 141.5L200.967 156.8Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M190.716 147.6L195 132.3L199.284 147.6Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/></g><rect x="298.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M289.2 166L300 144.4L310.8 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M291.576 153L300 131.4L308.424 153Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M293.952 140.1L300 118.5L306.048 140.1Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><rect x="323.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M316.45 166L325 148.9L333.55 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M318.331 155.7L325 138.6L331.669 155.7Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M320.212 145.5L325 128.4L329.788 145.5Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><g class="sway" style="animation-delay:-2.08s"><rect x="358.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M350.1 166L360 146.2L369.9 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M352.278 154.1L360 134.3L367.722 154.1Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M354.456 142.2L360 122.4L365.544 142.2Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/></g><rect x="383.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M377.35 166L385 150.7L392.65 166Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M379.033 156.8L385 141.5L390.967 156.8Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/><path d="M380.716 147.6L385 132.3L389.284 147.6Z" style="fill:color-mix(in srgb,#1d5b37,var(--shade) var(--night));stroke:none"/></g></svg>\n',Bb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5fa24f,var(--shade) var(--night));stroke:none"/><path d="M-20 170L40 100L110 86L180 70L260 82L330 74L420 120V170Z" style="fill:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke:none"/><rect x="150" y="58" width="28" height="112" style="fill:color-mix(in srgb,#c9ccd2,var(--shade) var(--night))"/><rect x="148" y="55" width="32" height="4" style="fill:color-mix(in srgb,#c9ccd2,var(--shade) var(--night))"/><rect class="win off" x="157" y="65.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="166" y="65.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="157" y="76.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="166" y="76.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="157" y="88.1" width="5" height="6.6" rx="0.8"/><rect class="win off" x="166" y="88.1" width="5" height="6.6" rx="0.8"/><rect class="win" x="157" y="99.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="166" y="99.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="157" y="110.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="166" y="110.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="157" y="122.1" width="5" height="6.6" rx="0.8"/><rect class="win off" x="166" y="122.1" width="5" height="6.6" rx="0.8"/><rect class="win" x="157" y="133.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="166" y="133.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="157" y="144.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="166" y="144.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="157" y="156.1" width="5" height="6.6" rx="0.8"/><rect class="win off" x="166" y="156.1" width="5" height="6.6" rx="0.8"/><rect x="188" y="58" width="28" height="112" style="fill:color-mix(in srgb,#c9ccd2,var(--shade) var(--night))"/><rect x="186" y="55" width="32" height="4" style="fill:color-mix(in srgb,#c9ccd2,var(--shade) var(--night))"/><rect class="win" x="195" y="65.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="65.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="195" y="76.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="204" y="76.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="195" y="88.1" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="88.1" width="5" height="6.6" rx="0.8"/><rect class="win off" x="195" y="99.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="99.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="195" y="110.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="110.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="195" y="122.1" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="122.1" width="5" height="6.6" rx="0.8"/><rect class="win off" x="195" y="133.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="133.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="195" y="144.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="204" y="144.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="195" y="156.1" width="5" height="6.6" rx="0.8"/><rect class="win off" x="204" y="156.1" width="5" height="6.6" rx="0.8"/><rect x="10" y="144" width="22" height="26" style="fill:color-mix(in srgb,#f4d35e,var(--shade) var(--night))"/><rect class="win" x="17.6" y="152.6" width="6.7" height="8.7" rx="0.8"/><rect x="36" y="138" width="22" height="32" style="fill:color-mix(in srgb,#ee964b,var(--shade) var(--night))"/><rect class="win" x="43.6" y="149.6" width="6.7" height="8.7" rx="0.8"/><rect x="62" y="132" width="22" height="38" style="fill:color-mix(in srgb,#f95738,var(--shade) var(--night))"/><rect class="win off" x="69.6" y="146.6" width="6.7" height="8.7" rx="0.8"/><rect x="88" y="144" width="22" height="26" style="fill:color-mix(in srgb,#4ea8de,var(--shade) var(--night))"/><rect class="win" x="95.6" y="152.6" width="6.7" height="8.7" rx="0.8"/><rect x="114" y="138" width="22" height="32" style="fill:color-mix(in srgb,#c77dff,var(--shade) var(--night))"/><rect class="win" x="121.6" y="149.6" width="6.7" height="8.7" rx="0.8"/><rect x="240" y="130" width="40" height="40" style="fill:color-mix(in srgb,#f4d35e,var(--shade) var(--night))"/><rect class="win" x="248.3" y="136.7" width="8.4" height="5.2" rx="0.8"/><rect class="win off" x="263.3" y="136.7" width="8.4" height="5.2" rx="0.8"/><rect class="win" x="248.3" y="145.3" width="8.4" height="5.2" rx="0.8"/><rect class="win" x="263.3" y="145.3" width="8.4" height="5.2" rx="0.8"/><rect x="254" y="157.2" width="12" height="12.8" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/><rect x="290" y="136" width="44" height="34" style="fill:color-mix(in srgb,#4ea8de,var(--shade) var(--night))"/><rect class="win" x="297.5" y="143.6" width="6.3" height="7.9" rx="0.8"/><rect class="win off" x="308.8" y="143.6" width="6.3" height="7.9" rx="0.8"/><rect class="win off" x="320.2" y="143.6" width="6.3" height="7.9" rx="0.8"/><rect x="305.4" y="159.1" width="13.2" height="10.9" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/><path d="M350 170Q353 144 344 118" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="335.5" cy="119.3" rx="11" ry="3.2" transform="rotate(40 335.5 119.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="338.8" cy="116.9" rx="11" ry="3.2" transform="rotate(75 338.8 116.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="344" cy="116" rx="11" ry="3.2" transform="rotate(70 344 116)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="349.2" cy="116.9" rx="11" ry="3.2" transform="rotate(105 349.2 116.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="352.5" cy="119.3" rx="11" ry="3.2" transform="rotate(140 352.5 119.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="344" cy="120" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M385 170Q382 149 391 128" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="382.5" cy="129.3" rx="11" ry="3.2" transform="rotate(40 382.5 129.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="385.8" cy="126.9" rx="11" ry="3.2" transform="rotate(75 385.8 126.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="391" cy="126" rx="11" ry="3.2" transform="rotate(70 391 126)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="396.2" cy="126.9" rx="11" ry="3.2" transform="rotate(105 396.2 126.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="399.5" cy="129.3" rx="11" ry="3.2" transform="rotate(140 399.5 129.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="391" cy="130" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g></svg>\n',Hb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#7aa35a,var(--shade) var(--night));stroke:none"/><path d="M-50 170L70 60L190 170Z" style="fill:color-mix(in srgb,#6a7f99,var(--shade) var(--night));stroke:none"/><path d="M36.4 90.8L70 60L103.6 90.8L84.4 85.8L70 92.8L53.2 85.8Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night));stroke:none"/><path d="M110 170L240 74L370 170Z" style="fill:color-mix(in srgb,#5c728d,var(--shade) var(--night));stroke:none"/><path d="M203.6 100.9L240 74L276.4 100.9L255.6 95.9L240 102.9L221.8 95.9Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night));stroke:none"/><path d="M250 170L360 52L470 170Z" style="fill:color-mix(in srgb,#7088a3,var(--shade) var(--night));stroke:none"/><path d="M329.2 85L360 52L390.8 85L373.2 80L360 87L344.6 80Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night));stroke:none"/><rect x="130" y="130" width="110" height="40" style="fill:color-mix(in srgb,#e9e3d3,var(--shade) var(--night))"/><rect x="128" y="127" width="114" height="4" style="fill:color-mix(in srgb,#d6ccb5,var(--shade) var(--night))"/><rect class="win" x="138.7" y="143.9" width="9.3" height="12.1" rx="0.8"/><path d="M143.3 143.9V156.1M138.7 150H148" style="fill:none;stroke-width:0.8"/><rect class="win" x="155.3" y="143.9" width="9.3" height="12.1" rx="0.8"/><path d="M160 143.9V156.1M155.3 150H164.7" style="fill:none;stroke-width:0.8"/><rect class="win" x="172" y="143.9" width="9.3" height="12.1" rx="0.8"/><path d="M176.7 143.9V156.1M172 150H181.3" style="fill:none;stroke-width:0.8"/><rect class="win off" x="188.7" y="143.9" width="9.3" height="12.1" rx="0.8"/><path d="M193.3 143.9V156.1M188.7 150H198" style="fill:none;stroke-width:0.8"/><rect class="win" x="205.3" y="143.9" width="9.3" height="12.1" rx="0.8"/><path d="M210 143.9V156.1M205.3 150H214.7" style="fill:none;stroke-width:0.8"/><rect class="win" x="222" y="143.9" width="9.3" height="12.1" rx="0.8"/><path d="M226.7 143.9V156.1M222 150H231.3" style="fill:none;stroke-width:0.8"/><rect x="170" y="114" width="30" height="16" style="fill:color-mix(in srgb,#e9e3d3,var(--shade) var(--night))"/><rect class="win" x="173.8" y="118" width="3" height="8" rx="0.8"/><rect class="win off" x="180.3" y="118" width="3" height="8" rx="0.8"/><rect class="win" x="186.8" y="118" width="3" height="8" rx="0.8"/><rect class="win off" x="193.3" y="118" width="3" height="8" rx="0.8"/><path d="M168 114A17 17 0 0 1 202 114Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M185 97V88" style="fill:none;stroke:color-mix(in srgb,#f2c14e,var(--shade) var(--night));stroke-width:1.6;stroke-linecap:round"/><rect x="285" y="88" width="28" height="82" style="fill:color-mix(in srgb,#8eb3d1,var(--shade) var(--night))"/><rect x="283" y="85" width="32" height="4" style="fill:color-mix(in srgb,#8eb3d1,var(--shade) var(--night))"/><rect class="win" x="292" y="95.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="301" y="95.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="292" y="107.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="301" y="107.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="292" y="119.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="301" y="119.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="292" y="131.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="301" y="131.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="292" y="143.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="301" y="143.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="292" y="155.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="301" y="155.7" width="5" height="6.6" rx="0.8"/><rect x="318" y="106" width="32" height="64" style="fill:color-mix(in srgb,#a5c0d6,var(--shade) var(--night))"/><rect x="316" y="103" width="36" height="4" style="fill:color-mix(in srgb,#a5c0d6,var(--shade) var(--night))"/><rect class="win" x="324.6" y="113.7" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="331.9" y="113.7" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="339.3" y="113.7" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="324.6" y="124.5" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="331.9" y="124.5" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="339.3" y="124.5" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="324.6" y="135.3" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="331.9" y="135.3" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="339.3" y="135.3" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="324.6" y="146.1" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="331.9" y="146.1" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="339.3" y="146.1" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="324.6" y="156.9" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="331.9" y="156.9" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="339.3" y="156.9" width="4.1" height="5.3" rx="0.8"/><rect x="38.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M31 166L40 148L49 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M32.98 155.2L40 137.2L47.02 155.2Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M34.96 144.4L40 126.4L45.04 144.4Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><rect x="58.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M53.25 166L60 152.5L66.75 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M54.735 157.9L60 144.4L65.265 157.9Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M56.22 149.8L60 136.3L63.78 149.8Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><rect x="368.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M361.9 166L370 149.8L378.1 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M363.682 156.3L370 140.1L376.318 156.3Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M365.464 146.6L370 130.4L374.536 146.6Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/></g></svg>\n',qb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#6e9f58,var(--shade) var(--night));stroke:none"/><path d="M-40 172Q20 110 80 172Z" style="fill:color-mix(in srgb,#5a8f5a,var(--shade) var(--night));stroke:none"/><path d="M115 172Q190 146 265 172Z" style="fill:color-mix(in srgb,#64965a,var(--shade) var(--night));stroke:none"/><path d="M-20 230V176H112Q150 176 166 190Q180 204 178 230Z" style="fill:color-mix(in srgb,#2f7fb5,var(--shade) var(--night));stroke:none"/><path d="M112 176Q150 176 166 190Q180 204 178 230H194Q196 200 178 184Q160 171 120 171Z" style="fill:color-mix(in srgb,#e8d8a0,var(--shade) var(--night));stroke:none"/><path class="wave" d="M24 192q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.60s"/><path class="wave" d="M86 206q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.20s"/><path class="wave" d="M40 214q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.21s"/><path d="M-20 150H165" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:3;stroke-linecap:round"/><path d="M-20 130Q0 128 21 96Q68 146 115 96Q138 128 165 140" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:1.6;stroke-linecap:round"/><path d="M30 104.7V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M39 111.5V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M48 116.5V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M57 119.6V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M66 121V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M75 120.4V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M84 118.1V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M93 113.9V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><path d="M102 107.9V150" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:0.7;stroke-linecap:round"/><rect x="16" y="94" width="3" height="82" style="fill:color-mix(in srgb,#d2492a,var(--shade) var(--night))"/><rect x="22" y="94" width="3" height="82" style="fill:color-mix(in srgb,#d2492a,var(--shade) var(--night))"/><path d="M16 104H25M16 120H25M16 138H25" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="110" y="94" width="3" height="82" style="fill:color-mix(in srgb,#d2492a,var(--shade) var(--night))"/><rect x="116" y="94" width="3" height="82" style="fill:color-mix(in srgb,#d2492a,var(--shade) var(--night))"/><path d="M110 104H119M110 120H119M110 138H119" style="fill:none;stroke:color-mix(in srgb,#d2492a,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="150" y="150" width="6" height="26" style="fill:color-mix(in srgb,#9aa4b0,var(--shade) var(--night))"/><path d="M150 150H160Q176 150 188 164Q194 171 206 171H420" style="fill:none;stroke:color-mix(in srgb,#7d828b,var(--shade) var(--night));stroke-width:3;stroke-linecap:round"/><path d="M206 171H420" style="fill:none;stroke:color-mix(in srgb,#e9eef2,var(--shade) var(--night));stroke-width:0.6;stroke-linecap:round"/><ellipse cx="214" cy="160" rx="42" ry="12" style="fill:color-mix(in srgb,#dfe6ee,var(--shade) var(--night))"/><ellipse cx="214" cy="157" rx="30" ry="6.5" style="fill:color-mix(in srgb,#4f9a4f,var(--shade) var(--night))"/><circle cx="196" cy="156" r="2.4" style="fill:color-mix(in srgb,#2f7d3a,var(--shade) var(--night));stroke:none"/><circle cx="208" cy="154" r="2.4" style="fill:color-mix(in srgb,#2f7d3a,var(--shade) var(--night));stroke:none"/><circle cx="221" cy="156" r="2.4" style="fill:color-mix(in srgb,#2f7d3a,var(--shade) var(--night));stroke:none"/><circle cx="232" cy="157" r="2.4" style="fill:color-mix(in srgb,#2f7d3a,var(--shade) var(--night));stroke:none"/><circle cx="203" cy="159" r="2.4" style="fill:color-mix(in srgb,#2f7d3a,var(--shade) var(--night));stroke:none"/><rect class="win" x="180" y="164.6" width="6" height="3.5" rx="0.5"/><rect class="win" x="189" y="165.2" width="6" height="3.5" rx="0.5"/><rect class="win" x="198" y="165.7" width="6" height="3.5" rx="0.5"/><rect class="win" x="207" y="166.3" width="6" height="3.5" rx="0.5"/><rect class="win off" x="216" y="166.2" width="6" height="3.5" rx="0.5"/><rect class="win" x="225" y="165.7" width="6" height="3.5" rx="0.5"/><rect class="win" x="234" y="165.1" width="6" height="3.5" rx="0.5"/><rect class="win" x="243" y="164.6" width="6" height="3.5" rx="0.5"/><rect x="262" y="140" width="38" height="30" style="fill:color-mix(in srgb,#8fc1e3,var(--shade) var(--night))"/><rect x="260" y="137" width="42" height="4" style="fill:color-mix(in srgb,#e9eef2,var(--shade) var(--night))"/><rect class="win" x="269.1" y="147" width="5.2" height="6" rx="0.8"/><rect class="win" x="278.4" y="147" width="5.2" height="6" rx="0.8"/><rect class="win" x="287.7" y="147" width="5.2" height="6" rx="0.8"/><rect class="win" x="269.1" y="157" width="5.2" height="6" rx="0.8"/><rect class="win" x="278.4" y="157" width="5.2" height="6" rx="0.8"/><rect class="win" x="287.7" y="157" width="5.2" height="6" rx="0.8"/><path d="M186 184V196" style="fill:none;stroke:color-mix(in srgb,#5b4636,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M178 185Q186 175 194 185Z" style="fill:color-mix(in srgb,#ea4335,var(--shade) var(--night))"/><path d="M203 184V196" style="fill:none;stroke:color-mix(in srgb,#5b4636,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M195 185Q203 175 211 185Z" style="fill:color-mix(in srgb,#fbbc05,var(--shade) var(--night))"/><path d="M220 184V196" style="fill:none;stroke:color-mix(in srgb,#5b4636,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M212 185Q220 175 228 185Z" style="fill:color-mix(in srgb,#4285f4,var(--shade) var(--night))"/><path d="M237 184V196" style="fill:none;stroke:color-mix(in srgb,#5b4636,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M229 185Q237 175 245 185Z" style="fill:color-mix(in srgb,#34a853,var(--shade) var(--night))"/><circle cx="258" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><circle cx="267" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><path d="M258 202L261 197H266L267 202M261 197L262.5 202" style="fill:none;stroke:color-mix(in srgb,#ea4335,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><circle cx="276" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><circle cx="285" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><path d="M276 202L279 197H284L285 202M279 197L280.5 202" style="fill:none;stroke:color-mix(in srgb,#fbbc05,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><circle cx="294" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><circle cx="303" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><path d="M294 202L297 197H302L303 202M297 197L298.5 202" style="fill:none;stroke:color-mix(in srgb,#4285f4,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><circle cx="312" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><circle cx="321" cy="202" r="3.2" style="fill:none;stroke:color-mix(in srgb,#333,var(--shade) var(--night));stroke-width:1"/><path d="M312 202L315 197H320L321 202M315 197L316.5 202" style="fill:none;stroke:color-mix(in srgb,#34a853,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><path d="M306 170V152Q330 140 354 152V170Z" style="fill:color-mix(in srgb,#cfd8e0,var(--shade) var(--night))"/><rect class="win off" x="312.2" y="156.4" width="5.6" height="7.2" rx="0.8"/><rect class="win off" x="322.2" y="156.4" width="5.6" height="7.2" rx="0.8"/><rect class="win off" x="332.2" y="156.4" width="5.6" height="7.2" rx="0.8"/><rect class="win off" x="342.2" y="156.4" width="5.6" height="7.2" rx="0.8"/><rect x="326" y="142" width="3.5" height="3.5" style="fill:color-mix(in srgb,#f25022,var(--shade) var(--night));stroke:none"/><rect x="330" y="142" width="3.5" height="3.5" style="fill:color-mix(in srgb,#7fba00,var(--shade) var(--night));stroke:none"/><rect x="326" y="146" width="3.5" height="3.5" style="fill:color-mix(in srgb,#00a4ef,var(--shade) var(--night));stroke:none"/><rect x="330" y="146" width="3.5" height="3.5" style="fill:color-mix(in srgb,#ffb900,var(--shade) var(--night));stroke:none"/><g class="sway" style="animation-delay:-0.10s"><rect x="360.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M354.8 166L362 151.6L369.2 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M356.384 157.4L362 143L367.616 157.4Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M357.968 148.7L362 134.3L366.032 148.7Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-0.60s"><rect x="374.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M370.15 166L376 154.3L381.85 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M371.437 159L376 147.3L380.563 159Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M372.724 152L376 140.3L379.276 152Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/></g></g></svg>\n',Kb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#c8b37a,var(--shade) var(--night));stroke:none"/><rect x="15" y="154" width="130" height="16" style="fill:color-mix(in srgb,#c98f5a,var(--shade) var(--night))"/><rect x="29" y="138" width="102" height="16" style="fill:color-mix(in srgb,#c98f5a,var(--shade) var(--night))"/><rect x="43" y="122" width="74" height="16" style="fill:color-mix(in srgb,#c98f5a,var(--shade) var(--night))"/><rect x="57" y="106" width="46" height="16" style="fill:color-mix(in srgb,#c98f5a,var(--shade) var(--night))"/><rect x="70" y="92" width="20" height="14" style="fill:color-mix(in srgb,#b0784a,var(--shade) var(--night))"/><path d="M74 170V106H86V170Z" style="fill:color-mix(in srgb,#d9a473,var(--shade) var(--night));stroke:none"/><rect x="196" y="154" width="22" height="16" style="fill:color-mix(in srgb,#e9e2d0,var(--shade) var(--night))"/><rect x="202" y="70" width="10" height="84" style="fill:color-mix(in srgb,#e9e2d0,var(--shade) var(--night))"/><path d="M207 70V60" style="fill:none;stroke:color-mix(in srgb,#e9e2d0,var(--shade) var(--night));stroke-width:3;stroke-linecap:round"/><path d="M200 58L207 46L214 58Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><rect x="240" y="136" width="36" height="34" style="fill:color-mix(in srgb,#f28fb1,var(--shade) var(--night))"/><rect class="win" x="247.9" y="143.6" width="7.3" height="7.9" rx="0.8"/><rect class="win" x="260.9" y="143.6" width="7.3" height="7.9" rx="0.8"/><rect x="252.6" y="159.1" width="10.8" height="10.9" style="fill:color-mix(in srgb,#2b4a8b,var(--shade) var(--night))"/><rect x="280" y="132" width="36" height="38" style="fill:color-mix(in srgb,#f6c453,var(--shade) var(--night))"/><rect class="win" x="287.9" y="140.2" width="7.3" height="9.5" rx="0.8"/><rect class="win off" x="300.9" y="140.2" width="7.3" height="9.5" rx="0.8"/><rect x="292.6" y="157.8" width="10.8" height="12.2" style="fill:color-mix(in srgb,#2b4a8b,var(--shade) var(--night))"/><rect x="322" y="132" width="36" height="38" style="fill:color-mix(in srgb,#5cc8c2,var(--shade) var(--night))"/><rect class="win off" x="329.9" y="140.2" width="7.3" height="9.5" rx="0.8"/><rect class="win off" x="342.9" y="140.2" width="7.3" height="9.5" rx="0.8"/><rect x="334.6" y="157.8" width="10.8" height="12.2" style="fill:color-mix(in srgb,#2b4a8b,var(--shade) var(--night))"/><rect x="136.5" y="140" width="7" height="30" rx="3.5" style="fill:color-mix(in srgb,#3e8a4f,var(--shade) var(--night))"/><path d="M137 156H131V146" style="fill:none;stroke:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke-width:4"/><path d="M143 152H149V142" style="fill:none;stroke:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke-width:4"/><rect x="361.5" y="140" width="7" height="30" rx="3.5" style="fill:color-mix(in srgb,#3e8a4f,var(--shade) var(--night))"/><path d="M362 156H356V146" style="fill:none;stroke:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke-width:4"/><path d="M368 152H374V142" style="fill:none;stroke:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke-width:4"/><rect x="171.5" y="140" width="7" height="30" rx="3.5" style="fill:color-mix(in srgb,#3e8a4f,var(--shade) var(--night))"/><path d="M172 156H166V146" style="fill:none;stroke:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke-width:4"/><path d="M178 152H184V142" style="fill:none;stroke:color-mix(in srgb,#3e8a4f,var(--shade) var(--night));stroke-width:4"/></g></svg>\n',Zb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#7b7f88,var(--shade) var(--night));stroke:none"/><rect x="-20" y="184" width="440" height="46" style="fill:color-mix(in srgb,#2f6d9a,var(--shade) var(--night));stroke:none"/><path class="wave" d="M57.5 207.5q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.15s"/><path class="wave" d="M172 211.1q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-1.60s"/><path class="wave" d="M313.7 205.2q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.98s"/><rect x="100" y="100" width="24" height="70" style="fill:color-mix(in srgb,#8e9aaf,var(--shade) var(--night))"/><rect x="98" y="97" width="28" height="4" style="fill:color-mix(in srgb,#8e9aaf,var(--shade) var(--night))"/><rect class="win" x="106.5" y="108.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="113.5" y="108.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="106.5" y="120.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="113.5" y="120.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="106.5" y="132.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="113.5" y="132.5" width="3.9" height="5.1" rx="0.8"/><rect class="win off" x="106.5" y="144.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="113.5" y="144.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="106.5" y="156.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="113.5" y="156.5" width="3.9" height="5.1" rx="0.8"/><rect x="126" y="78" width="28" height="92" style="fill:color-mix(in srgb,#a3b1c6,var(--shade) var(--night))"/><rect x="124" y="75" width="32" height="4" style="fill:color-mix(in srgb,#a3b1c6,var(--shade) var(--night))"/><rect class="win off" x="133" y="85.6" width="5" height="6.6" rx="0.8"/><rect class="win off" x="142" y="85.6" width="5" height="6.6" rx="0.8"/><rect class="win off" x="133" y="97.3" width="5" height="6.6" rx="0.8"/><rect class="win" x="142" y="97.3" width="5" height="6.6" rx="0.8"/><rect class="win off" x="133" y="109" width="5" height="6.6" rx="0.8"/><rect class="win" x="142" y="109" width="5" height="6.6" rx="0.8"/><rect class="win" x="133" y="120.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="142" y="120.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="133" y="132.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="142" y="132.4" width="5" height="6.6" rx="0.8"/><rect class="win" x="133" y="144.2" width="5" height="6.6" rx="0.8"/><rect class="win off" x="142" y="144.2" width="5" height="6.6" rx="0.8"/><rect class="win" x="133" y="155.9" width="5" height="6.6" rx="0.8"/><rect class="win off" x="142" y="155.9" width="5" height="6.6" rx="0.8"/><rect x="228" y="86" width="26" height="84" style="fill:color-mix(in srgb,#8e9aaf,var(--shade) var(--night))"/><rect x="226" y="83" width="30" height="4" style="fill:color-mix(in srgb,#8e9aaf,var(--shade) var(--night))"/><rect class="win off" x="234.8" y="94.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="242.8" y="94.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="234.8" y="106.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="242.8" y="106.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="234.8" y="118.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="242.8" y="118.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="234.8" y="131.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="242.8" y="131.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="234.8" y="143.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="242.8" y="143.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="234.8" y="155.9" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="242.8" y="155.9" width="4.5" height="5.8" rx="0.8"/><rect x="285" y="96" width="30" height="74" style="fill:color-mix(in srgb,#b7c3d6,var(--shade) var(--night))"/><rect x="283" y="93" width="34" height="4" style="fill:color-mix(in srgb,#b7c3d6,var(--shade) var(--night))"/><rect class="win" x="292.2" y="103.8" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="302.2" y="103.8" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="292.2" y="116.6" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="302.2" y="116.6" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="292.2" y="129.4" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="302.2" y="129.4" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="292.2" y="142.2" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="302.2" y="142.2" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="292.2" y="155" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="302.2" y="155" width="5.6" height="7.3" rx="0.8"/><rect x="318" y="74" width="24" height="96" style="fill:color-mix(in srgb,#9aa8bd,var(--shade) var(--night))"/><rect x="316" y="71" width="28" height="4" style="fill:color-mix(in srgb,#9aa8bd,var(--shade) var(--night))"/><rect class="win off" x="324.5" y="82.6" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="331.5" y="82.6" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="324.5" y="94.9" width="3.9" height="5.1" rx="0.8"/><rect class="win off" x="331.5" y="94.9" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="324.5" y="107.2" width="3.9" height="5.1" rx="0.8"/><rect class="win off" x="331.5" y="107.2" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="324.5" y="119.5" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="331.5" y="119.5" width="3.9" height="5.1" rx="0.8"/><rect class="win off" x="324.5" y="131.7" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="331.5" y="131.7" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="324.5" y="144" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="331.5" y="144" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="324.5" y="156.3" width="3.9" height="5.1" rx="0.8"/><rect class="win" x="331.5" y="156.3" width="3.9" height="5.1" rx="0.8"/><rect x="345" y="110" width="30" height="60" style="fill:color-mix(in srgb,#a8b6ca,var(--shade) var(--night))"/><rect x="343" y="107" width="34" height="4" style="fill:color-mix(in srgb,#a8b6ca,var(--shade) var(--night))"/><rect class="win" x="352.2" y="117.6" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="362.2" y="117.6" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="352.2" y="130.1" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="362.2" y="130.1" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="352.2" y="142.6" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="362.2" y="142.6" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="352.2" y="155.1" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="362.2" y="155.1" width="5.6" height="7.3" rx="0.8"/><rect x="378" y="90" width="26" height="80" style="fill:color-mix(in srgb,#8e9aaf,var(--shade) var(--night))"/><rect x="376" y="87" width="30" height="4" style="fill:color-mix(in srgb,#8e9aaf,var(--shade) var(--night))"/><rect class="win" x="384.8" y="97.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="392.8" y="97.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="384.8" y="109.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="392.8" y="109.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="384.8" y="121.3" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="392.8" y="121.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="384.8" y="132.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="392.8" y="132.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="384.8" y="144.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="392.8" y="144.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="384.8" y="156.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="392.8" y="156.3" width="4.5" height="5.8" rx="0.8"/><rect x="160" y="80" width="40" height="90" style="fill:color-mix(in srgb,#c9c2b3,var(--shade) var(--night))"/><rect x="166" y="62" width="28" height="18" style="fill:color-mix(in srgb,#c9c2b3,var(--shade) var(--night))"/><rect x="173" y="50" width="14" height="12" style="fill:color-mix(in srgb,#c9c2b3,var(--shade) var(--night))"/><path d="M180 50V28" style="fill:none;stroke:color-mix(in srgb,#c9c2b3,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect class="win" x="166.3" y="86.3" width="6" height="7" rx="0.8"/><rect class="win" x="177" y="86.3" width="6" height="7" rx="0.8"/><rect class="win" x="187.7" y="86.3" width="6" height="7" rx="0.8"/><rect class="win" x="166.3" y="98.1" width="6" height="7" rx="0.8"/><rect class="win off" x="177" y="98.1" width="6" height="7" rx="0.8"/><rect class="win" x="187.7" y="98.1" width="6" height="7" rx="0.8"/><rect class="win" x="166.3" y="109.8" width="6" height="7" rx="0.8"/><rect class="win" x="177" y="109.8" width="6" height="7" rx="0.8"/><rect class="win" x="187.7" y="109.8" width="6" height="7" rx="0.8"/><rect class="win off" x="166.3" y="121.5" width="6" height="7" rx="0.8"/><rect class="win off" x="177" y="121.5" width="6" height="7" rx="0.8"/><rect class="win off" x="187.7" y="121.5" width="6" height="7" rx="0.8"/><rect class="win" x="166.3" y="133.2" width="6" height="7" rx="0.8"/><rect class="win" x="177" y="133.2" width="6" height="7" rx="0.8"/><rect class="win" x="187.7" y="133.2" width="6" height="7" rx="0.8"/><rect class="win" x="166.3" y="144.9" width="6" height="7" rx="0.8"/><rect class="win" x="177" y="144.9" width="6" height="7" rx="0.8"/><rect class="win" x="187.7" y="144.9" width="6" height="7" rx="0.8"/><rect class="win" x="166.3" y="156.6" width="6" height="7" rx="0.8"/><rect class="win" x="177" y="156.6" width="6" height="7" rx="0.8"/><rect class="win" x="187.7" y="156.6" width="6" height="7" rx="0.8"/><rect x="256" y="94" width="22" height="76" style="fill:color-mix(in srgb,#cfd5dc,var(--shade) var(--night))"/><path d="M256 94Q267 66 278 94Z" style="fill:color-mix(in srgb,#e3e8ee,var(--shade) var(--night))"/><path d="M260 86L267 72L274 86" style="fill:none;stroke:color-mix(in srgb,#9aa4b0,var(--shade) var(--night));stroke-width:1"/><path d="M267 66V54" style="fill:none;stroke:color-mix(in srgb,#cfd5dc,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round"/><rect class="win off" x="260.8" y="100.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="268.8" y="100.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="260.8" y="112.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="268.8" y="112.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="260.8" y="123.4" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="268.8" y="123.4" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="260.8" y="134.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="268.8" y="134.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="260.8" y="146.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="268.8" y="146.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="260.8" y="157.4" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="268.8" y="157.4" width="4.5" height="5.8" rx="0.8"/><path d="M38 170L42 150H62L66 170Z" style="fill:color-mix(in srgb,#a99b84,var(--shade) var(--night))"/><rect x="40" y="146" width="24" height="4" style="fill:color-mix(in srgb,#968872,var(--shade) var(--night))"/><path d="M48 121L45.3 100H48.7L52.5 120Z" style="fill:color-mix(in srgb,#6fb59a,var(--shade) var(--night))"/><path d="M44.5 99H49.5L48.5 96H45.5Z" style="fill:color-mix(in srgb,#d9a441,var(--shade) var(--night))"/><path d="M47 96Q43.5 91 47 86Q50.5 91 47 96Z" style="fill:color-mix(in srgb,#f6c453,var(--shade) var(--night))"/><path d="M45 146L47 128Q48 120 52 118.5H55Q59 120 59 128L60 146Z" style="fill:color-mix(in srgb,#6fb59a,var(--shade) var(--night))"/><path d="M48 132Q53 136 59 131M47 140Q53 144 60 139" style="fill:none;stroke:color-mix(in srgb,#5a9c84,var(--shade) var(--night));stroke-width:0.8;stroke-linecap:round"/><rect x="57.5" y="121" width="3.5" height="7.5" style="fill:color-mix(in srgb,#5fa088,var(--shade) var(--night))"/><circle cx="53.5" cy="115" r="3.4" style="fill:color-mix(in srgb,#6fb59a,var(--shade) var(--night))"/><path d="M50.5 112.5l-3 -2.5M52.3 111.5l-1 -3.5M54.7 111.5l1 -3.5M56.5 112.5l3 -2.5" style="fill:none;stroke:color-mix(in srgb,#6fb59a,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/></g></svg>\n',Ub='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#f0d9a0,var(--shade) var(--night));stroke:none"/><rect x="-20" y="192" width="440" height="38" style="fill:color-mix(in srgb,#1f8fc0,var(--shade) var(--night));stroke:none"/><path class="wave" d="M76.7 211.5q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.80s"/><path class="wave" d="M155 211.4q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-1.21s"/><path class="wave" d="M266.7 210.7q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.96s"/><path d="M20 170L75 74L96 70L150 170Z" style="fill:color-mix(in srgb,#3f7a4a,var(--shade) var(--night));stroke:none"/><rect x="84" y="50" width="4" height="22" style="fill:color-mix(in srgb,#f4f4f0,var(--shade) var(--night));stroke:none"/><rect x="76" y="56" width="20" height="3" style="fill:color-mix(in srgb,#f4f4f0,var(--shade) var(--night));stroke:none"/><circle cx="86" cy="48" r="2.6" style="fill:color-mix(in srgb,#f4f4f0,var(--shade) var(--night));stroke:none"/><path d="M280 170Q285 84 325 78Q362 84 368 170Z" style="fill:color-mix(in srgb,#4d7a56,var(--shade) var(--night));stroke:none"/><rect x="50" y="146" width="16" height="12" style="fill:color-mix(in srgb,#f28482,var(--shade) var(--night))"/><rect class="win off" x="55" y="149" width="5" height="5" rx="0.8"/><rect x="70" y="136" width="16" height="12" style="fill:color-mix(in srgb,#f6bd60,var(--shade) var(--night))"/><rect class="win" x="75" y="139" width="5" height="5" rx="0.8"/><rect x="92" y="142" width="16" height="12" style="fill:color-mix(in srgb,#84a59d,var(--shade) var(--night))"/><rect class="win off" x="97" y="145" width="5" height="5" rx="0.8"/><rect x="112" y="150" width="16" height="12" style="fill:color-mix(in srgb,#f5cac3,var(--shade) var(--night))"/><rect class="win off" x="117" y="153" width="5" height="5" rx="0.8"/><rect x="60" y="158" width="16" height="12" style="fill:color-mix(in srgb,#90be6d,var(--shade) var(--night))"/><rect class="win" x="65" y="161" width="5" height="5" rx="0.8"/><rect x="86" y="158" width="16" height="12" style="fill:color-mix(in srgb,#43aa8b,var(--shade) var(--night))"/><rect class="win off" x="91" y="161" width="5" height="5" rx="0.8"/><rect x="108" y="162" width="16" height="12" style="fill:color-mix(in srgb,#f28482,var(--shade) var(--night))"/><rect class="win" x="113" y="165" width="5" height="5" rx="0.8"/><rect x="180" y="116" width="30" height="54" style="fill:color-mix(in srgb,#e9e2d0,var(--shade) var(--night))"/><rect x="178" y="113" width="34" height="4" style="fill:color-mix(in srgb,#e9e2d0,var(--shade) var(--night))"/><rect class="win" x="187.2" y="123.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="197.2" y="123.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="187.2" y="134.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="197.2" y="134.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="187.2" y="145.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="197.2" y="145.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="187.2" y="156.2" width="5.6" height="6.6" rx="0.8"/><rect class="win" x="197.2" y="156.2" width="5.6" height="6.6" rx="0.8"/><rect x="214" y="128" width="26" height="42" style="fill:color-mix(in srgb,#cfe1e8,var(--shade) var(--night))"/><rect x="212" y="125" width="30" height="4" style="fill:color-mix(in srgb,#cfe1e8,var(--shade) var(--night))"/><rect class="win" x="220.8" y="135.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="228.8" y="135.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="220.8" y="146.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="228.8" y="146.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="220.8" y="156.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="228.8" y="156.8" width="4.5" height="5.8" rx="0.8"/><g class="sway" style="animation-delay:-0.09s"><path d="M160 170Q157 147 166 124" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="157.5" cy="125.3" rx="11" ry="3.2" transform="rotate(40 157.5 125.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="160.8" cy="122.9" rx="11" ry="3.2" transform="rotate(75 160.8 122.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="166" cy="122" rx="11" ry="3.2" transform="rotate(70 166 122)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="171.2" cy="122.9" rx="11" ry="3.2" transform="rotate(105 171.2 122.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="174.5" cy="125.3" rx="11" ry="3.2" transform="rotate(140 174.5 125.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="166" cy="126" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-1.59s"><path d="M255 170Q258 145 249 120" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="240.5" cy="121.3" rx="11" ry="3.2" transform="rotate(40 240.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="243.8" cy="118.9" rx="11" ry="3.2" transform="rotate(75 243.8 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="249" cy="118" rx="11" ry="3.2" transform="rotate(70 249 118)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="254.2" cy="118.9" rx="11" ry="3.2" transform="rotate(105 254.2 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="257.5" cy="121.3" rx="11" ry="3.2" transform="rotate(140 257.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="249" cy="122" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><path d="M385 170Q388 148 379 126" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="370.5" cy="127.3" rx="11" ry="3.2" transform="rotate(40 370.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="373.8" cy="124.9" rx="11" ry="3.2" transform="rotate(75 373.8 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="379" cy="124" rx="11" ry="3.2" transform="rotate(70 379 124)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="384.2" cy="124.9" rx="11" ry="3.2" transform="rotate(105 384.2 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="387.5" cy="127.3" rx="11" ry="3.2" transform="rotate(140 387.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="379" cy="128" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g></svg>\n',Jb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5aa053,var(--shade) var(--night));stroke:none"/><path d="M-40 170L75 62L190 170Z" style="fill:color-mix(in srgb,#6f86a6,var(--shade) var(--night));stroke:none"/><path d="M42.8 92.2L75 62L107.2 92.2L88.8 87.2L75 94.2L58.9 87.2Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night));stroke:none"/><path d="M130 170L260 48L390 170Z" style="fill:color-mix(in srgb,#5f7899,var(--shade) var(--night));stroke:none"/><path d="M223.6 82.2L260 48L296.4 82.2L275.6 77.2L260 84.2L241.8 77.2Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night));stroke:none"/><path d="M290 170L380 78L470 170Z" style="fill:color-mix(in srgb,#7590b0,var(--shade) var(--night));stroke:none"/><path d="M354.8 103.8L380 78L405.2 103.8L390.8 98.8L380 105.8L367.4 98.8Z" style="fill:color-mix(in srgb,#f4f8fb,var(--shade) var(--night));stroke:none"/><path d="M255 172Q330 102 405 172Z" style="fill:color-mix(in srgb,#4f9a52,var(--shade) var(--night));stroke:none"/><path d="M323 138L330 58L337 138Z" style="fill:color-mix(in srgb,#d0d4da,var(--shade) var(--night))"/><path d="M325 120H335M326.5 100H333.5M328 80H332" style="fill:none;stroke:color-mix(in srgb,#9aa1aa,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><rect x="60" y="86" width="30" height="84" style="fill:color-mix(in srgb,#e8e2d4,var(--shade) var(--night))"/><rect class="win" x="66.5" y="94.7" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="73.1" y="94.7" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="79.8" y="94.7" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="66.5" y="107.1" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="73.1" y="107.1" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="79.8" y="107.1" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="66.5" y="119.4" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="73.1" y="119.4" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="79.8" y="119.4" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="66.5" y="131.7" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="73.1" y="131.7" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="79.8" y="131.7" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="66.5" y="144.1" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="73.1" y="144.1" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="79.8" y="144.1" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="66.5" y="156.4" width="3.7" height="4.9" rx="0.8"/><rect class="win" x="73.1" y="156.4" width="3.7" height="4.9" rx="0.8"/><rect class="win off" x="79.8" y="156.4" width="3.7" height="4.9" rx="0.8"/><path d="M58 86Q75 66 92 86Z" style="fill:color-mix(in srgb,#e3b23c,var(--shade) var(--night))"/><rect x="100" y="130" width="48" height="40" style="fill:color-mix(in srgb,#c9d6df,var(--shade) var(--night))"/><rect x="98" y="127" width="52" height="4" style="fill:color-mix(in srgb,#c9d6df,var(--shade) var(--night))"/><rect class="win" x="107.8" y="138" width="7.1" height="9" rx="0.8"/><rect class="win" x="120.5" y="138" width="7.1" height="9" rx="0.8"/><rect class="win off" x="133.1" y="138" width="7.1" height="9" rx="0.8"/><rect class="win off" x="107.8" y="153" width="7.1" height="9" rx="0.8"/><rect class="win" x="120.5" y="153" width="7.1" height="9" rx="0.8"/><rect class="win" x="133.1" y="153" width="7.1" height="9" rx="0.8"/><rect x="200" y="122" width="56" height="48" style="fill:color-mix(in srgb,#e0b48a,var(--shade) var(--night))"/><rect x="198" y="119" width="60" height="4" style="fill:color-mix(in srgb,#e0b48a,var(--shade) var(--night))"/><rect class="win" x="207.5" y="129.3" width="6.4" height="6.8" rx="0.8"/><rect class="win" x="219" y="129.3" width="6.4" height="6.8" rx="0.8"/><rect class="win" x="230.5" y="129.3" width="6.4" height="6.8" rx="0.8"/><rect class="win" x="242" y="129.3" width="6.4" height="6.8" rx="0.8"/><rect class="win" x="207.5" y="140.6" width="6.4" height="6.8" rx="0.8"/><rect class="win" x="219" y="140.6" width="6.4" height="6.8" rx="0.8"/><rect class="win off" x="230.5" y="140.6" width="6.4" height="6.8" rx="0.8"/><rect class="win" x="242" y="140.6" width="6.4" height="6.8" rx="0.8"/><rect x="221" y="154.6" width="14" height="15.4" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/><rect x="168.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M162.35 166L170 150.7L177.65 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M164.033 156.8L170 141.5L175.967 156.8Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M165.716 147.6L170 132.3L174.284 147.6Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><rect x="273.5" y="164" width="3" height="6" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M268.25 166L275 152.5L281.75 166Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M269.735 157.9L275 144.4L280.265 157.9Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/><path d="M271.22 149.8L275 136.3L278.78 149.8Z" style="fill:color-mix(in srgb,#1f6b3a,var(--shade) var(--night));stroke:none"/></g></svg>\n',Wb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5fae4e,var(--shade) var(--night));stroke:none"/><rect x="60" y="138" width="90" height="32" style="fill:color-mix(in srgb,#f5f0e6,var(--shade) var(--night))"/><rect class="win off" x="70.3" y="147.6" width="10.9" height="10.8" rx="3"/><path d="M75.8 147.6V158.4M70.3 153H81.2" style="fill:none;stroke-width:0.8"/><rect class="win" x="89.8" y="147.6" width="10.9" height="10.8" rx="3"/><path d="M95.3 147.6V158.4M89.8 153H100.7" style="fill:none;stroke-width:0.8"/><rect class="win" x="109.3" y="147.6" width="10.9" height="10.8" rx="3"/><path d="M114.8 147.6V158.4M109.3 153H120.2" style="fill:none;stroke-width:0.8"/><rect class="win" x="128.8" y="147.6" width="10.9" height="10.8" rx="3"/><path d="M134.3 147.6V158.4M128.8 153H139.7" style="fill:none;stroke-width:0.8"/><path d="M52 140L105 96L158 140Z" style="fill:color-mix(in srgb,#e06b2b,var(--shade) var(--night))"/><path d="M68 118L105 82L142 118Z" style="fill:color-mix(in srgb,#2a7a5a,var(--shade) var(--night))"/><path d="M105 82V70M52 140l-6 -6M158 140l6 -6" style="fill:none;stroke:color-mix(in srgb,#f2c14e,var(--shade) var(--night));stroke-width:1.6;stroke-linecap:round"/><path d="M180 170L186 120Q200 54 214 120L220 170Z" style="fill:color-mix(in srgb,#e8dcc0,var(--shade) var(--night))"/><path d="M200 66V44" style="fill:none;stroke:color-mix(in srgb,#e8dcc0,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M188 140H212M190 120H210M194 100H206" style="fill:none;stroke:color-mix(in srgb,#c7b48d,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><path d="M280 170Q280 132 300 128Q320 132 320 170Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M296 128L300 84L304 128Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M360 170Q363 145 354 120" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="345.5" cy="121.3" rx="11" ry="3.2" transform="rotate(40 345.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="348.8" cy="118.9" rx="11" ry="3.2" transform="rotate(75 348.8 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="354" cy="118" rx="11" ry="3.2" transform="rotate(70 354 118)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="359.2" cy="118.9" rx="11" ry="3.2" transform="rotate(105 359.2 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="362.5" cy="121.3" rx="11" ry="3.2" transform="rotate(140 362.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="354" cy="122" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M25 170Q22 147 31 124" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="22.5" cy="125.3" rx="11" ry="3.2" transform="rotate(40 22.5 125.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="25.8" cy="122.9" rx="11" ry="3.2" transform="rotate(75 25.8 122.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="31" cy="122" rx="11" ry="3.2" transform="rotate(70 31 122)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="36.2" cy="122.9" rx="11" ry="3.2" transform="rotate(105 36.2 122.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="39.5" cy="125.3" rx="11" ry="3.2" transform="rotate(140 39.5 125.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="31" cy="126" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g></svg>\n',Gb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#e3c77d,var(--shade) var(--night));stroke:none"/><rect x="-20" y="196" width="440" height="34" style="fill:color-mix(in srgb,#3aa0c8,var(--shade) var(--night));stroke:none"/><path class="wave" d="M47.5 210.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.86s"/><path class="wave" d="M202 205.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.60s"/><path class="wave" d="M297.4 206.4q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.78s"/><rect x="120" y="100" width="30" height="70" style="fill:color-mix(in srgb,#8fb1c9,var(--shade) var(--night))"/><rect x="118" y="97" width="34" height="4" style="fill:color-mix(in srgb,#8fb1c9,var(--shade) var(--night))"/><rect class="win off" x="127.2" y="107.4" width="5.6" height="7.2" rx="0.8"/><rect class="win" x="137.2" y="107.4" width="5.6" height="7.2" rx="0.8"/><rect class="win off" x="127.2" y="119.4" width="5.6" height="7.2" rx="0.8"/><rect class="win" x="137.2" y="119.4" width="5.6" height="7.2" rx="0.8"/><rect class="win" x="127.2" y="131.4" width="5.6" height="7.2" rx="0.8"/><rect class="win off" x="137.2" y="131.4" width="5.6" height="7.2" rx="0.8"/><rect class="win off" x="127.2" y="143.4" width="5.6" height="7.2" rx="0.8"/><rect class="win" x="137.2" y="143.4" width="5.6" height="7.2" rx="0.8"/><rect class="win" x="127.2" y="155.4" width="5.6" height="7.2" rx="0.8"/><rect class="win" x="137.2" y="155.4" width="5.6" height="7.2" rx="0.8"/><rect x="245" y="112" width="28" height="58" style="fill:color-mix(in srgb,#b7c9d6,var(--shade) var(--night))"/><rect x="243" y="109" width="32" height="4" style="fill:color-mix(in srgb,#b7c9d6,var(--shade) var(--night))"/><rect class="win off" x="252" y="119.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="261" y="119.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="252" y="131.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="261" y="131.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="252" y="143.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="261" y="143.7" width="5" height="6.6" rx="0.8"/><rect class="win off" x="252" y="155.7" width="5" height="6.6" rx="0.8"/><rect class="win" x="261" y="155.7" width="5" height="6.6" rx="0.8"/><rect x="183" y="130" width="34" height="40" style="fill:color-mix(in srgb,#a9c1d6,var(--shade) var(--night))"/><rect x="187" y="100" width="26" height="70" style="fill:color-mix(in srgb,#a9c1d6,var(--shade) var(--night))"/><rect x="191" y="75" width="18" height="95" style="fill:color-mix(in srgb,#a9c1d6,var(--shade) var(--night))"/><rect x="195" y="52" width="10" height="118" style="fill:color-mix(in srgb,#a9c1d6,var(--shade) var(--night))"/><path d="M200 52V30" style="fill:none;stroke:color-mix(in srgb,#a9c1d6,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect class="win off" x="197" y="58" width="6" height="4" rx="0.8"/><rect class="win off" x="197" y="67" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="76" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="85" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="94" width="6" height="4" rx="0.8"/><rect class="win off" x="197" y="103" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="112" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="121" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="130" width="6" height="4" rx="0.8"/><rect class="win" x="197" y="139" width="6" height="4" rx="0.8"/><rect class="win off" x="197" y="148" width="6" height="4" rx="0.8"/><rect class="win off" x="197" y="157" width="6" height="4" rx="0.8"/><rect class="win" x="185" y="138" width="5" height="4" rx="0.8"/><rect class="win" x="210" y="138" width="5" height="4" rx="0.8"/><rect class="win off" x="185" y="147" width="5" height="4" rx="0.8"/><rect class="win" x="210" y="147" width="5" height="4" rx="0.8"/><rect class="win off" x="185" y="156" width="5" height="4" rx="0.8"/><rect class="win" x="210" y="156" width="5" height="4" rx="0.8"/><path d="M300 170V72Q350 100 344 170Z" style="fill:color-mix(in srgb,#f2f6f8,var(--shade) var(--night))"/><path d="M300 72L296 62" style="fill:none;stroke:color-mix(in srgb,#cfd8de,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect class="win" x="311" y="104.4" width="5" height="4" rx="0.8"/><rect class="win" x="326" y="104.4" width="5" height="4" rx="0.8"/><rect class="win" x="311" y="117.2" width="5" height="4" rx="0.8"/><rect class="win" x="326" y="117.2" width="5" height="4" rx="0.8"/><rect class="win off" x="311" y="130" width="5" height="4" rx="0.8"/><rect class="win" x="326" y="130" width="5" height="4" rx="0.8"/><rect class="win off" x="311" y="142.8" width="5" height="4" rx="0.8"/><rect class="win" x="326" y="142.8" width="5" height="4" rx="0.8"/><rect class="win off" x="311" y="155.6" width="5" height="4" rx="0.8"/><rect class="win" x="326" y="155.6" width="5" height="4" rx="0.8"/><path d="M40 170Q37 147.5 46 125" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="37.5" cy="126.3" rx="11" ry="3.2" transform="rotate(40 37.5 126.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="40.8" cy="123.9" rx="11" ry="3.2" transform="rotate(75 40.8 123.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="46" cy="123" rx="11" ry="3.2" transform="rotate(70 46 123)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="51.2" cy="123.9" rx="11" ry="3.2" transform="rotate(105 51.2 123.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="54.5" cy="126.3" rx="11" ry="3.2" transform="rotate(140 54.5 126.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="46" cy="127" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M375 170Q378 150 369 130" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="360.5" cy="131.3" rx="11" ry="3.2" transform="rotate(40 360.5 131.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="363.8" cy="128.9" rx="11" ry="3.2" transform="rotate(75 363.8 128.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="369" cy="128" rx="11" ry="3.2" transform="rotate(70 369 128)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="374.2" cy="128.9" rx="11" ry="3.2" transform="rotate(105 374.2 128.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="377.5" cy="131.3" rx="11" ry="3.2" transform="rotate(140 377.5 131.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="369" cy="132" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g></svg>\n',Yb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#8fb35a,var(--shade) var(--night));stroke:none"/><path d="M120 170V96H200V170H182V128A22 22 0 0 0 138 128V170Z" fill-rule="evenodd" style="fill:color-mix(in srgb,#d9a86c,var(--shade) var(--night))"/><rect x="128" y="84" width="64" height="12" style="fill:color-mix(in srgb,#c9955a,var(--shade) var(--night))"/><path d="M150 84A10 10 0 0 1 170 84Z" style="fill:color-mix(in srgb,#c9955a,var(--shade) var(--night))"/><path d="M120 108H200" style="fill:none;stroke:color-mix(in srgb,#b47f48,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><path d="M250 170Q248 152 267 140Q286 152 284 170Z" style="fill:color-mix(in srgb,#f4f1ea,var(--shade) var(--night))"/><path d="M264 170Q262 142.4 277 124Q292 142.4 290 170Z" style="fill:color-mix(in srgb,#f4f1ea,var(--shade) var(--night))"/><path d="M278 170Q276 147.2 297 132Q318 147.2 316 170Z" style="fill:color-mix(in srgb,#f4f1ea,var(--shade) var(--night))"/><path d="M296 170Q294 138.8 311 118Q328 138.8 326 170Z" style="fill:color-mix(in srgb,#f4f1ea,var(--shade) var(--night))"/><path d="M312 170Q310 149.6 329 136Q348 149.6 346 170Z" style="fill:color-mix(in srgb,#f4f1ea,var(--shade) var(--night))"/><path d="M330 170Q328 154.4 343 144Q358 154.4 356 170Z" style="fill:color-mix(in srgb,#f4f1ea,var(--shade) var(--night))"/><rect x="38" y="152" width="4" height="18" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="40" cy="147.6" r="14" style="fill:color-mix(in srgb,#4a8f3b,var(--shade) var(--night))"/><rect x="78" y="155" width="4" height="15" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="80" cy="152.4" r="11" style="fill:color-mix(in srgb,#4a8f3b,var(--shade) var(--night))"/><rect x="378" y="153" width="4" height="17" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="380" cy="149.2" r="13" style="fill:color-mix(in srgb,#4a8f3b,var(--shade) var(--night))"/></g></svg>\n',Qb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5a9e50,var(--shade) var(--night));stroke:none"/><path d="M190 172Q300 50 410 172Z" style="fill:color-mix(in srgb,#3d8b4a,var(--shade) var(--night));stroke:none"/><rect x="297" y="64" width="7" height="50" style="fill:color-mix(in srgb,#e9eef2,var(--shade) var(--night))"/><ellipse cx="300.5" cy="74" rx="12" ry="6" style="fill:color-mix(in srgb,#e9eef2,var(--shade) var(--night))"/><rect class="win" x="292" y="72" width="17" height="3" rx="0.8"/><path d="M300.5 64V40" style="fill:none;stroke:color-mix(in srgb,#e9eef2,var(--shade) var(--night));stroke-width:1.6;stroke-linecap:round"/><rect x="20" y="74" width="32" height="96" style="fill:color-mix(in srgb,#7fa7c9,var(--shade) var(--night))"/><rect x="18" y="71" width="36" height="4" style="fill:color-mix(in srgb,#7fa7c9,var(--shade) var(--night))"/><rect class="win" x="26.6" y="81.7" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="33.9" y="81.7" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="81.7" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="26.6" y="92.5" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="33.9" y="92.5" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="92.5" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="26.6" y="103.2" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="33.9" y="103.2" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="103.2" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="26.6" y="114" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="33.9" y="114" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="41.3" y="114" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="26.6" y="124.7" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="33.9" y="124.7" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="124.7" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="26.6" y="135.5" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="33.9" y="135.5" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="135.5" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="26.6" y="146.2" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="33.9" y="146.2" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="146.2" width="4.1" height="5.3" rx="0.8"/><rect class="win off" x="26.6" y="157" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="33.9" y="157" width="4.1" height="5.3" rx="0.8"/><rect class="win" x="41.3" y="157" width="4.1" height="5.3" rx="0.8"/><rect x="56" y="94" width="36" height="76" style="fill:color-mix(in srgb,#9bbad4,var(--shade) var(--night))"/><rect x="54" y="91" width="40" height="4" style="fill:color-mix(in srgb,#9bbad4,var(--shade) var(--night))"/><rect class="win off" x="62.9" y="101.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="71.6" y="101.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="80.2" y="101.3" width="4.9" height="6.3" rx="0.8"/><rect class="win off" x="62.9" y="112.3" width="4.9" height="6.3" rx="0.8"/><rect class="win off" x="71.6" y="112.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="80.2" y="112.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="62.9" y="123.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="71.6" y="123.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="80.2" y="123.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="62.9" y="134.3" width="4.9" height="6.3" rx="0.8"/><rect class="win off" x="71.6" y="134.3" width="4.9" height="6.3" rx="0.8"/><rect class="win off" x="80.2" y="134.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="62.9" y="145.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="71.6" y="145.3" width="4.9" height="6.3" rx="0.8"/><rect class="win off" x="80.2" y="145.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="62.9" y="156.3" width="4.9" height="6.3" rx="0.8"/><rect class="win" x="71.6" y="156.3" width="4.9" height="6.3" rx="0.8"/><rect class="win off" x="80.2" y="156.3" width="4.9" height="6.3" rx="0.8"/><rect x="130" y="146" width="74" height="24" style="fill:color-mix(in srgb,#8a8f98,var(--shade) var(--night))"/><path d="M163 170V158A4 4 0 0 1 171 158V170Z" style="fill:color-mix(in srgb,#3c3a38,var(--shade) var(--night))"/><rect x="140" y="128" width="54" height="18" style="fill:color-mix(in srgb,#b3392f,var(--shade) var(--night))"/><rect class="win" x="146.5" y="132.8" width="6.4" height="8.4" rx="0.8"/><rect class="win off" x="158" y="132.8" width="6.4" height="8.4" rx="0.8"/><rect class="win off" x="169.5" y="132.8" width="6.4" height="8.4" rx="0.8"/><rect class="win" x="181" y="132.8" width="6.4" height="8.4" rx="0.8"/><path d="M124 130Q140 127 148 118H186Q194 127 210 130Z" style="fill:color-mix(in srgb,#3c4148,var(--shade) var(--night))"/><path d="M134 120Q146 118 152 110H182Q188 118 200 120Z" style="fill:color-mix(in srgb,#3c4148,var(--shade) var(--night))"/><rect x="17" y="94" width="40" height="17" style="fill:#111111;stroke:color-mix(in srgb,#ff5fa2,var(--shade) var(--night));stroke-width:1.2"/><text x="37" y="104.8" text-anchor="middle" style="fill:#ff7eb6;stroke:none;stroke-width:0;paint-order:stroke;font:800 5.5px Arial,sans-serif">SEOUL</text><rect x="58" y="110" width="32" height="16" style="fill:#5b2d91"/><text x="74" y="122" text-anchor="middle" style="fill:#ffffff;stroke:none;stroke-width:0;paint-order:stroke;font:800 8px Arial,sans-serif">K-POP</text><path d="M226 152V170M264 152V170" style="fill:none;stroke:color-mix(in srgb,#5b5f66,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="212" y="120" width="66" height="32" style="fill:#1d63d8"/><path d="M238 120L241 112L245 118L249 109L253 118L257 112L260 120Z" style="fill:#e23b3b"/><text x="245" y="134" text-anchor="middle" style="fill:#ffd23f;stroke:#7a1d1d;stroke-width:1.4;paint-order:stroke;font:800 10px Arial,sans-serif">DRAGON</text><text x="245" y="146" text-anchor="middle" style="fill:#ffd23f;stroke:#7a1d1d;stroke-width:1.2;paint-order:stroke;font:800 8.5px Arial,sans-serif">VILLAGE</text></g></svg>\n',Xb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#6fa85a,var(--shade) var(--night));stroke:none"/><rect x="80" y="140" width="220" height="30" style="fill:color-mix(in srgb,#b7312c,var(--shade) var(--night))"/><path d="M180 170V156A10 10 0 0 1 200 156V170Z" style="fill:color-mix(in srgb,#5c1d1a,var(--shade) var(--night))"/><rect x="120" y="114" width="140" height="26" style="fill:color-mix(in srgb,#c8382f,var(--shade) var(--night))"/><rect class="win off" x="130" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M135.1 120.4V133.6M130 127H140.3" style="fill:none;stroke-width:0.8"/><rect class="win" x="148.3" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M153.4 120.4V133.6M148.3 127H158.5" style="fill:none;stroke-width:0.8"/><rect class="win" x="166.6" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M171.7 120.4V133.6M166.6 127H176.8" style="fill:none;stroke-width:0.8"/><rect class="win" x="184.9" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M190 120.4V133.6M184.9 127H195.1" style="fill:none;stroke-width:0.8"/><rect class="win off" x="203.2" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M208.3 120.4V133.6M203.2 127H213.4" style="fill:none;stroke-width:0.8"/><rect class="win" x="221.5" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M226.6 120.4V133.6M221.5 127H231.7" style="fill:none;stroke-width:0.8"/><rect class="win" x="239.7" y="120.4" width="10.2" height="13.2" rx="0.8"/><path d="M244.9 120.4V133.6M239.7 127H250" style="fill:none;stroke-width:0.8"/><path d="M100 116Q120 112 132 102H248Q260 112 280 116Z" style="fill:color-mix(in srgb,#f0b429,var(--shade) var(--night))"/><path d="M126 102Q140 98 148 90H232Q240 98 254 102Z" style="fill:color-mix(in srgb,#f0b429,var(--shade) var(--night))"/><path d="M150 116V121" style="fill:none;stroke:color-mix(in srgb,#5c1d1a,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><ellipse cx="150" cy="125" rx="4" ry="5" style="fill:color-mix(in srgb,#ff3b30,var(--shade) var(--night))"/><path d="M230 116V121" style="fill:none;stroke:color-mix(in srgb,#5c1d1a,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><ellipse cx="230" cy="125" rx="4" ry="5" style="fill:color-mix(in srgb,#ff3b30,var(--shade) var(--night))"/><rect x="333" y="148" width="34" height="22" style="fill:color-mix(in srgb,#c8382f,var(--shade) var(--night))"/><rect class="win" x="347" y="154" width="6" height="9" rx="0.8"/><path d="M326 150Q333 148 335 144H365Q367 148 374 150Z" style="fill:color-mix(in srgb,#2e6b4f,var(--shade) var(--night))"/><rect x="336" y="126" width="28" height="22" style="fill:color-mix(in srgb,#c8382f,var(--shade) var(--night))"/><rect class="win" x="347" y="132" width="6" height="9" rx="0.8"/><path d="M329 128Q336 126 338 122H362Q364 126 371 128Z" style="fill:color-mix(in srgb,#2e6b4f,var(--shade) var(--night))"/><rect x="339" y="104" width="22" height="22" style="fill:color-mix(in srgb,#c8382f,var(--shade) var(--night))"/><rect class="win" x="347" y="110" width="6" height="9" rx="0.8"/><path d="M332 106Q339 104 341 100H359Q361 104 368 106Z" style="fill:color-mix(in srgb,#2e6b4f,var(--shade) var(--night))"/><rect x="342" y="82" width="16" height="22" style="fill:color-mix(in srgb,#c8382f,var(--shade) var(--night))"/><rect class="win off" x="347" y="88" width="6" height="9" rx="0.8"/><path d="M335 84Q342 82 344 78H356Q358 82 365 84Z" style="fill:color-mix(in srgb,#2e6b4f,var(--shade) var(--night))"/><path d="M350 78V64" style="fill:none;stroke:color-mix(in srgb,#f0b429,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="33" y="153" width="4" height="17" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="35" cy="149.2" r="13" style="fill:color-mix(in srgb,#3f9b4b,var(--shade) var(--night))"/></g></svg>\n',ew='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5cb85c,var(--shade) var(--night));stroke:none"/><rect x="-20" y="196" width="440" height="34" style="fill:color-mix(in srgb,#2a6fa0,var(--shade) var(--night));stroke:none"/><path class="wave" d="M102.4 212.7q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.43s"/><path class="wave" d="M252.3 211.2q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-1.42s"/><path d="M-40 172Q90 70 220 172Z" style="fill:color-mix(in srgb,#4caf50,var(--shade) var(--night));stroke:none"/><path d="M180 172Q300 90 420 172Z" style="fill:color-mix(in srgb,#66bb6a,var(--shade) var(--night));stroke:none"/><path d="M57 136L80 122L103 136Z" style="fill:color-mix(in srgb,#c2452d,var(--shade) var(--night))"/><rect x="60" y="136" width="40" height="34" style="fill:color-mix(in srgb,#f8f8f4,var(--shade) var(--night))"/><rect class="win" x="68.3" y="143.6" width="8.4" height="7.9" rx="0.8"/><rect class="win off" x="83.3" y="143.6" width="8.4" height="7.9" rx="0.8"/><rect x="74" y="159.1" width="12" height="10.9" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/><path d="M107 130L133 113.9L159 130Z" style="fill:color-mix(in srgb,#c2452d,var(--shade) var(--night))"/><rect x="110" y="130" width="46" height="40" style="fill:color-mix(in srgb,#f8f8f4,var(--shade) var(--night))"/><rect class="win off" x="119" y="138.4" width="10.1" height="10.3" rx="0.8"/><path d="M124 138.4V148.8M119 143.6H129" style="fill:none;stroke-width:0.8"/><rect class="win" x="137" y="138.4" width="10.1" height="10.3" rx="0.8"/><path d="M142 138.4V148.8M137 143.6H147" style="fill:none;stroke-width:0.8"/><rect x="126.1" y="157.2" width="13.8" height="12.8" style="fill:color-mix(in srgb,#2f4a6b,var(--shade) var(--night))"/><path d="M167 114L188 94L209 114Z" style="fill:color-mix(in srgb,#2b2b2b,var(--shade) var(--night))"/><rect x="170" y="114" width="36" height="56" style="fill:color-mix(in srgb,#f8f8f4,var(--shade) var(--night))"/><rect class="win" x="180.7" y="123.6" width="14.6" height="13.8" rx="0.8"/><path d="M188 123.6V137.4M180.7 130.5H195.3" style="fill:none;stroke-width:0.8"/><rect class="win" x="180.7" y="146.6" width="14.6" height="13.8" rx="0.8"/><path d="M188 146.6V160.4M180.7 153.5H195.3" style="fill:none;stroke-width:0.8"/><path d="M330 170L334 92H350L354 170Z" style="fill:color-mix(in srgb,#f8f8f4,var(--shade) var(--night))"/><path d="M332 140H352L353 150H331Z" style="fill:color-mix(in srgb,#d62828,var(--shade) var(--night));stroke:none"/><path d="M333 112H351L351.6 122H332.4Z" style="fill:color-mix(in srgb,#d62828,var(--shade) var(--night));stroke:none"/><rect class="win" x="335" y="80" width="14" height="12" rx="0.8"/><path d="M342 80V92M335 86H349" style="fill:none;stroke-width:0.8"/><path d="M332 80L342 68L352 80Z" style="fill:color-mix(in srgb,#d62828,var(--shade) var(--night))"/></g></svg>\n',tw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#e8f0f4,var(--shade) var(--night));stroke:none"/><rect x="-20" y="192" width="440" height="38" style="fill:color-mix(in srgb,#335a78,var(--shade) var(--night));stroke:none"/><path class="wave" d="M40.8 212.5q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#b8d4e6,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.90s"/><path class="wave" d="M221.1 202q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#b8d4e6,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.35s"/><path d="M-30 170L80 50L190 170Z" style="fill:color-mix(in srgb,#9fb3c4,var(--shade) var(--night));stroke:none"/><path d="M49.2 83.6L80 50L110.8 83.6L93.2 78.6L80 85.6L64.6 78.6Z" style="fill:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke:none"/><path d="M140 170L240 70L340 170Z" style="fill:color-mix(in srgb,#8aa1b5,var(--shade) var(--night));stroke:none"/><path d="M212 98L240 70L268 98L252 93L240 100L226 93Z" style="fill:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke:none"/><path d="M260 170L360 42L460 170Z" style="fill:color-mix(in srgb,#a9bccb,var(--shade) var(--night));stroke:none"/><path d="M332 77.8L360 42L388 77.8L372 72.8L360 79.8L346 72.8Z" style="fill:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke:none"/><rect x="70" y="146" width="70" height="24" style="fill:color-mix(in srgb,#9a4b2e,var(--shade) var(--night))"/><rect class="win" x="79.2" y="152.4" width="8.1" height="7.2" rx="0.8"/><rect class="win" x="93.7" y="152.4" width="8.1" height="7.2" rx="0.8"/><rect class="win" x="108.2" y="152.4" width="8.1" height="7.2" rx="0.8"/><rect class="win" x="122.7" y="152.4" width="8.1" height="7.2" rx="0.8"/><path d="M187 136L210 122L233 136Z" style="fill:color-mix(in srgb,#3a3a3a,var(--shade) var(--night))"/><rect x="190" y="136" width="40" height="34" style="fill:color-mix(in srgb,#f5f5f5,var(--shade) var(--night))"/><rect class="win off" x="198.3" y="143.6" width="8.4" height="7.9" rx="0.8"/><rect class="win" x="213.3" y="143.6" width="8.4" height="7.9" rx="0.8"/><rect x="204" y="159.1" width="12" height="10.9" style="fill:color-mix(in srgb,#3a3a3a,var(--shade) var(--night))"/><rect x="202" y="106" width="16" height="22" style="fill:color-mix(in srgb,#f5f5f5,var(--shade) var(--night))"/><path d="M200 106L210 82L220 106Z" style="fill:color-mix(in srgb,#3a3a3a,var(--shade) var(--night))"/><rect class="win" x="206" y="110" width="8" height="8" rx="0.8"/><ellipse cx="300" cy="162" rx="5" ry="8" style="fill:color-mix(in srgb,#1d1d24,var(--shade) var(--night))"/><ellipse cx="300" cy="164" rx="3" ry="5.5" style="fill:color-mix(in srgb,#f5f5f5,var(--shade) var(--night));stroke:none"/><path d="M298.5 155l1.5 2l1.5 -2z" style="fill:color-mix(in srgb,#f4a62a,var(--shade) var(--night));stroke:none"/><ellipse cx="316" cy="162" rx="5" ry="8" style="fill:color-mix(in srgb,#1d1d24,var(--shade) var(--night))"/><ellipse cx="316" cy="164" rx="3" ry="5.5" style="fill:color-mix(in srgb,#f5f5f5,var(--shade) var(--night));stroke:none"/><path d="M314.5 155l1.5 2l1.5 -2z" style="fill:color-mix(in srgb,#f4a62a,var(--shade) var(--night));stroke:none"/><ellipse cx="330" cy="162" rx="5" ry="8" style="fill:color-mix(in srgb,#1d1d24,var(--shade) var(--night))"/><ellipse cx="330" cy="164" rx="3" ry="5.5" style="fill:color-mix(in srgb,#f5f5f5,var(--shade) var(--night));stroke:none"/><path d="M328.5 155l1.5 2l1.5 -2z" style="fill:color-mix(in srgb,#f4a62a,var(--shade) var(--night));stroke:none"/><ellipse cx="352" cy="162" rx="5" ry="8" style="fill:color-mix(in srgb,#1d1d24,var(--shade) var(--night))"/><ellipse cx="352" cy="164" rx="3" ry="5.5" style="fill:color-mix(in srgb,#f5f5f5,var(--shade) var(--night));stroke:none"/><path d="M350.5 155l1.5 2l1.5 -2z" style="fill:color-mix(in srgb,#f4a62a,var(--shade) var(--night));stroke:none"/></g></svg>\n',rw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5fa24f,var(--shade) var(--night));stroke:none"/><rect x="-20" y="182" width="440" height="48" style="fill:color-mix(in srgb,#3f7fa8,var(--shade) var(--night));stroke:none"/><path class="wave" d="M81.4 205.3q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.86s"/><path class="wave" d="M173 198.1q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.96s"/><path class="wave" d="M323.2 189.7q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.14s"/><rect x="20" y="70" width="30" height="100" style="fill:color-mix(in srgb,#8eb3d1,var(--shade) var(--night))"/><rect x="18" y="67" width="34" height="4" style="fill:color-mix(in srgb,#8eb3d1,var(--shade) var(--night))"/><rect class="win" x="27.2" y="77.3" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="37.2" y="77.3" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="27.2" y="88.5" width="5.6" height="6.8" rx="0.8"/><rect class="win off" x="37.2" y="88.5" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="27.2" y="99.8" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="37.2" y="99.8" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="27.2" y="111" width="5.6" height="6.8" rx="0.8"/><rect class="win off" x="37.2" y="111" width="5.6" height="6.8" rx="0.8"/><rect class="win off" x="27.2" y="122.3" width="5.6" height="6.8" rx="0.8"/><rect class="win off" x="37.2" y="122.3" width="5.6" height="6.8" rx="0.8"/><rect class="win off" x="27.2" y="133.5" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="37.2" y="133.5" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="27.2" y="144.8" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="37.2" y="144.8" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="27.2" y="156" width="5.6" height="6.8" rx="0.8"/><rect class="win" x="37.2" y="156" width="5.6" height="6.8" rx="0.8"/><rect x="54" y="90" width="26" height="80" style="fill:color-mix(in srgb,#b5c9d8,var(--shade) var(--night))"/><rect x="52" y="87" width="30" height="4" style="fill:color-mix(in srgb,#b5c9d8,var(--shade) var(--night))"/><rect class="win" x="60.8" y="97.9" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="68.8" y="97.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="60.8" y="109.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="68.8" y="109.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="60.8" y="121.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="68.8" y="121.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="60.8" y="132.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="68.8" y="132.9" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="60.8" y="144.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="68.8" y="144.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="60.8" y="156.3" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="68.8" y="156.3" width="4.5" height="5.8" rx="0.8"/><rect x="84" y="58" width="34" height="112" style="fill:color-mix(in srgb,#7aa0c0,var(--shade) var(--night))"/><rect x="82" y="55" width="38" height="4" style="fill:color-mix(in srgb,#7aa0c0,var(--shade) var(--night))"/><rect class="win off" x="90.8" y="65.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="65.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="65.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="90.8" y="77.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="98.8" y="77.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="77.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="90.8" y="88.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="88.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="88.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="90.8" y="99.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="99.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="99.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="90.8" y="111.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="111.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="111.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="90.8" y="122.4" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="98.8" y="122.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="122.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="90.8" y="133.8" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="133.8" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="106.8" y="133.8" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="90.8" y="145.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="145.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="145.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="90.8" y="156.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="98.8" y="156.4" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="106.8" y="156.4" width="4.5" height="5.8" rx="0.8"/><rect x="122" y="106" width="28" height="64" style="fill:color-mix(in srgb,#c9d6df,var(--shade) var(--night))"/><rect x="120" y="103" width="32" height="4" style="fill:color-mix(in srgb,#c9d6df,var(--shade) var(--night))"/><rect class="win" x="129" y="114.5" width="5" height="6.6" rx="0.8"/><rect class="win off" x="138" y="114.5" width="5" height="6.6" rx="0.8"/><rect class="win" x="129" y="128" width="5" height="6.6" rx="0.8"/><rect class="win" x="138" y="128" width="5" height="6.6" rx="0.8"/><rect class="win" x="129" y="141.5" width="5" height="6.6" rx="0.8"/><rect class="win" x="138" y="141.5" width="5" height="6.6" rx="0.8"/><rect class="win" x="129" y="155" width="5" height="6.6" rx="0.8"/><rect class="win off" x="138" y="155" width="5" height="6.6" rx="0.8"/><path d="M180 150H420" style="fill:none;stroke:color-mix(in srgb,#5c6f86,var(--shade) var(--night));stroke-width:4;stroke-linecap:round"/><path d="M200 150L250 110L300 150M300 150L350 110L400 150" style="fill:none;stroke:color-mix(in srgb,#5c6f86,var(--shade) var(--night));stroke-width:3"/><path d="M225 150L250 130L275 150M325 150L350 130L375 150M250 110V150M350 110V150" style="fill:none;stroke:color-mix(in srgb,#5c6f86,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round"/><rect x="246" y="104" width="8" height="80" style="fill:color-mix(in srgb,#5c6f86,var(--shade) var(--night))"/><rect x="346" y="104" width="8" height="80" style="fill:color-mix(in srgb,#5c6f86,var(--shade) var(--night))"/><rect x="158" y="154" width="4" height="16" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="160" cy="150.8" r="12" style="fill:color-mix(in srgb,#9b6fd6,var(--shade) var(--night))"/><rect x="184" y="154" width="4" height="16" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="186" cy="150.8" r="12" style="fill:color-mix(in srgb,#9b6fd6,var(--shade) var(--night))"/></g></svg>\n',iw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#4f9a4f,var(--shade) var(--night));stroke:none"/><rect x="-20" y="178" width="440" height="52" style="fill:color-mix(in srgb,#2b7bbd,var(--shade) var(--night));stroke:none"/><path class="wave" d="M97.7 212.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.30s"/><path class="wave" d="M176 185.7q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.70s"/><path class="wave" d="M292.2 207.2q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.32s"/><rect x="320" y="88" width="26" height="82" style="fill:color-mix(in srgb,#8eb3d1,var(--shade) var(--night))"/><rect x="318" y="85" width="30" height="4" style="fill:color-mix(in srgb,#8eb3d1,var(--shade) var(--night))"/><rect class="win off" x="326.8" y="96.1" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="334.8" y="96.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="326.8" y="108.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="334.8" y="108.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="326.8" y="120.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="334.8" y="120.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="326.8" y="132.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="334.8" y="132.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="326.8" y="144.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="334.8" y="144.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="326.8" y="156.1" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="334.8" y="156.1" width="4.5" height="5.8" rx="0.8"/><rect x="350" y="108" width="34" height="62" style="fill:color-mix(in srgb,#a7c3d9,var(--shade) var(--night))"/><rect x="348" y="105" width="38" height="4" style="fill:color-mix(in srgb,#a7c3d9,var(--shade) var(--night))"/><rect class="win off" x="356.8" y="116.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="364.8" y="116.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="372.8" y="116.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="356.8" y="129.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="364.8" y="129.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="372.8" y="129.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="356.8" y="142.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="364.8" y="142.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="372.8" y="142.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="356.8" y="155.6" width="4.5" height="5.8" rx="0.8"/><rect class="win off" x="364.8" y="155.6" width="4.5" height="5.8" rx="0.8"/><rect class="win" x="372.8" y="155.6" width="4.5" height="5.8" rx="0.8"/><path d="M8 172Q85 82 162 172" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:4;stroke-linecap:round"/><path d="M0 140H170" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:3;stroke-linecap:round"/><path d="M50 140V136.3" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M62 140V131" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M74 140V127.9" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M86 140V127" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M98 140V128.3" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M110 140V131.7" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M122 140V137.4" style="fill:none;stroke:color-mix(in srgb,#7a8796,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><rect x="4" y="128" width="10" height="44" style="fill:color-mix(in srgb,#c9b79c,var(--shade) var(--night))"/><rect x="156" y="128" width="10" height="44" style="fill:color-mix(in srgb,#c9b79c,var(--shade) var(--night))"/><rect x="180" y="160" width="120" height="12" style="fill:color-mix(in srgb,#d8c9a8,var(--shade) var(--night))"/><path d="M188 160Q200 122 226 110Q216 136 222 160Z" style="fill:color-mix(in srgb,#f4f4f0,var(--shade) var(--night))"/><path d="M216 160Q232 118 260 106Q248 136 254 160Z" style="fill:color-mix(in srgb,#f4f4f0,var(--shade) var(--night))"/><path d="M248 160Q262 128 286 120Q276 142 282 160Z" style="fill:color-mix(in srgb,#f4f4f0,var(--shade) var(--night))"/></g></svg>\n',aw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#6aa84f,var(--shade) var(--night));stroke:none"/><rect x="-20" y="190" width="440" height="40" style="fill:color-mix(in srgb,#2f7fb5,var(--shade) var(--night));stroke:none"/><path class="wave" d="M74.9 205.3q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.98s"/><path class="wave" d="M210.3 213q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.15s"/><rect x="32" y="104" width="22" height="66" style="fill:color-mix(in srgb,#c9b79c,var(--shade) var(--night))"/><path d="M30 104L43 78L56 104Z" style="fill:color-mix(in srgb,#5a6b8a,var(--shade) var(--night))"/><rect class="win" x="39.1" y="114.5" width="7.8" height="7.5" rx="0.8"/><rect class="win" x="39.1" y="127" width="7.8" height="7.5" rx="0.8"/><rect class="win" x="39.1" y="139.5" width="7.8" height="7.5" rx="0.8"/><rect class="win off" x="39.1" y="152" width="7.8" height="7.5" rx="0.8"/><rect x="140" y="135" width="120" height="35" style="fill:color-mix(in srgb,#e8dcc5,var(--shade) var(--night))"/><rect class="win" x="150" y="144.4" width="10.1" height="13.1" rx="3"/><path d="M155 144.4V157.6M150 151H160" style="fill:none;stroke-width:0.8"/><rect class="win" x="168" y="144.4" width="10.1" height="13.1" rx="3"/><path d="M173 144.4V157.6M168 151H178" style="fill:none;stroke-width:0.8"/><rect class="win" x="186" y="144.4" width="10.1" height="13.1" rx="3"/><path d="M191 144.4V157.6M186 151H196" style="fill:none;stroke-width:0.8"/><rect class="win" x="204" y="144.4" width="10.1" height="13.1" rx="3"/><path d="M209 144.4V157.6M204 151H214" style="fill:none;stroke-width:0.8"/><rect class="win off" x="222" y="144.4" width="10.1" height="13.1" rx="3"/><path d="M227 144.4V157.6M222 151H232" style="fill:none;stroke-width:0.8"/><rect class="win" x="240" y="144.4" width="10.1" height="13.1" rx="3"/><path d="M245 144.4V157.6M240 151H250" style="fill:none;stroke-width:0.8"/><path d="M168 135A32 32 0 0 1 232 135Z" style="fill:color-mix(in srgb,#9db0c4,var(--shade) var(--night))"/><path d="M146 135A14 14 0 0 1 174 135Z" style="fill:color-mix(in srgb,#9db0c4,var(--shade) var(--night))"/><path d="M226 135A14 14 0 0 1 254 135Z" style="fill:color-mix(in srgb,#9db0c4,var(--shade) var(--night))"/><rect x="122" y="75" width="7" height="95" style="fill:color-mix(in srgb,#efe6d5,var(--shade) var(--night))"/><path d="M121 75L125.5 56L130 75Z" style="fill:color-mix(in srgb,#7d8ca3,var(--shade) var(--night))"/><rect x="120.5" y="98" width="10" height="3" style="fill:color-mix(in srgb,#d9cdb6,var(--shade) var(--night))"/><rect x="270" y="75" width="7" height="95" style="fill:color-mix(in srgb,#efe6d5,var(--shade) var(--night))"/><path d="M269 75L273.5 56L278 75Z" style="fill:color-mix(in srgb,#7d8ca3,var(--shade) var(--night))"/><rect x="268.5" y="98" width="10" height="3" style="fill:color-mix(in srgb,#d9cdb6,var(--shade) var(--night))"/><path d="M297 124L317 112.1L337 124Z" style="fill:color-mix(in srgb,#8d3b2a,var(--shade) var(--night))"/><rect x="300" y="124" width="34" height="46" style="fill:color-mix(in srgb,#e07a5f,var(--shade) var(--night))"/><rect class="win off" x="307.6" y="133.6" width="6.7" height="8.7" rx="0.8"/><rect class="win" x="319.6" y="133.6" width="6.7" height="8.7" rx="0.8"/><rect class="win" x="307.6" y="151.6" width="6.7" height="8.7" rx="0.8"/><rect class="win off" x="319.6" y="151.6" width="6.7" height="8.7" rx="0.8"/><path d="M342 132L365 118L388 132Z" style="fill:color-mix(in srgb,#8d3b2a,var(--shade) var(--night))"/><rect x="345" y="132" width="40" height="38" style="fill:color-mix(in srgb,#f2cc8f,var(--shade) var(--night))"/><rect class="win" x="353.3" y="139.8" width="8.4" height="8.4" rx="0.8"/><rect class="win" x="368.3" y="139.8" width="8.4" height="8.4" rx="0.8"/><rect class="win off" x="353.3" y="153.8" width="8.4" height="8.4" rx="0.8"/><rect class="win" x="368.3" y="153.8" width="8.4" height="8.4" rx="0.8"/></g></svg>\n',nw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#4f9e45,var(--shade) var(--night));stroke:none"/><path d="M250 172Q330 106 410 172Z" style="fill:color-mix(in srgb,#3f8a3b,var(--shade) var(--night));stroke:none"/><rect x="318" y="118" width="24" height="22" style="fill:color-mix(in srgb,#b8bcc4,var(--shade) var(--night))"/><rect class="win off" x="321.8" y="125" width="3" height="8" rx="0.8"/><rect class="win" x="328.5" y="125" width="3" height="8" rx="0.8"/><rect class="win off" x="335.2" y="125" width="3" height="8" rx="0.8"/><rect x="320" y="114" width="20" height="4" style="fill:color-mix(in srgb,#a6abb4,var(--shade) var(--night))"/><path d="M328 89L321 75" style="fill:none;stroke:color-mix(in srgb,#c8ccd4,var(--shade) var(--night));stroke-width:2.2;stroke-linecap:round"/><path d="M321 76L318 46M318.5 72H323.5" style="fill:none;stroke:color-mix(in srgb,#e3e7ec,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><path d="M332 89L339 79" style="fill:none;stroke:color-mix(in srgb,#c8ccd4,var(--shade) var(--night));stroke-width:2.2;stroke-linecap:round"/><ellipse cx="341" cy="76" rx="4.2" ry="5.2" style="fill:color-mix(in srgb,#c8ccd4,var(--shade) var(--night))"/><path d="M325 114L327 93Q328 86 330 85.5Q332 86 333 93L335 114Z" style="fill:color-mix(in srgb,#c8ccd4,var(--shade) var(--night))"/><circle cx="330" cy="82.5" r="2.6" style="fill:color-mix(in srgb,#c8ccd4,var(--shade) var(--night))"/><rect x="60" y="80" width="34" height="90" style="fill:color-mix(in srgb,#f4efe1,var(--shade) var(--night))"/><rect class="win" x="66.9" y="105.3" width="7.3" height="9.5" rx="0.8"/><rect class="win" x="79.9" y="105.3" width="7.3" height="9.5" rx="0.8"/><rect class="win" x="66.9" y="125.3" width="7.3" height="9.5" rx="0.8"/><rect class="win off" x="79.9" y="125.3" width="7.3" height="9.5" rx="0.8"/><rect class="win" x="66.9" y="145.3" width="7.3" height="9.5" rx="0.8"/><rect class="win off" x="79.9" y="145.3" width="7.3" height="9.5" rx="0.8"/><rect x="66" y="66" width="22" height="14" style="fill:color-mix(in srgb,#f4efe1,var(--shade) var(--night))"/><path d="M68 66Q67.1 54.3 77 46.2Q86.9 54.3 86 66Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M77 46.2v-6M74.5 42.2h5" style="fill:none;stroke:color-mix(in srgb,#c99a2e,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><rect x="120" y="122" width="95" height="48" style="fill:color-mix(in srgb,#f6f1e3,var(--shade) var(--night))"/><rect class="win" x="129.7" y="131.5" width="11.9" height="13.6" rx="0.8"/><path d="M135.6 131.5V145.1M129.7 138.3H141.6" style="fill:none;stroke-width:0.8"/><rect class="win" x="150.9" y="131.5" width="11.9" height="13.6" rx="0.8"/><path d="M156.9 131.5V145.1M150.9 138.3H162.8" style="fill:none;stroke-width:0.8"/><rect class="win" x="172.2" y="131.5" width="11.9" height="13.6" rx="0.8"/><path d="M178.1 131.5V145.1M172.2 138.3H184.1" style="fill:none;stroke-width:0.8"/><rect class="win" x="193.4" y="131.5" width="11.9" height="13.6" rx="0.8"/><path d="M199.4 131.5V145.1M193.4 138.3H205.3" style="fill:none;stroke-width:0.8"/><rect x="160.5" y="154.6" width="14" height="15.4" style="fill:color-mix(in srgb,#2f6db5,var(--shade) var(--night))"/><path d="M153 122Q151.6 103.8 167 91.19999999999999Q182.4 103.8 181 122Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M167 91.19999999999999v-6M164.5 87.19999999999999h5" style="fill:none;stroke:color-mix(in srgb,#c99a2e,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><path d="M125 122Q124.3 112.9 132 106.6Q139.7 112.9 139 122Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M132 106.6v-6M129.5 102.6h5" style="fill:none;stroke:color-mix(in srgb,#c99a2e,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><path d="M196 122Q195.3 112.9 203 106.6Q210.7 112.9 210 122Z" style="fill:color-mix(in srgb,#f2c14e,var(--shade) var(--night))"/><path d="M203 106.6v-6M200.5 102.6h5" style="fill:none;stroke:color-mix(in srgb,#c99a2e,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><path d="M237 126L263 109.9L289 126Z" style="fill:color-mix(in srgb,#8a5a44,var(--shade) var(--night))"/><rect x="240" y="126" width="46" height="44" style="fill:color-mix(in srgb,#e9c46a,var(--shade) var(--night))"/><rect class="win off" x="249" y="134.4" width="10.1" height="10.2" rx="0.8"/><path d="M254 134.4V144.6M249 139.5H259" style="fill:none;stroke-width:0.8"/><rect class="win" x="267" y="134.4" width="10.1" height="10.2" rx="0.8"/><path d="M272 134.4V144.6M267 139.5H277" style="fill:none;stroke-width:0.8"/><rect class="win" x="249" y="151.4" width="10.1" height="10.2" rx="0.8"/><path d="M254 151.4V161.6M249 156.5H259" style="fill:none;stroke-width:0.8"/><rect class="win" x="267" y="151.4" width="10.1" height="10.2" rx="0.8"/><path d="M272 151.4V161.6M267 156.5H277" style="fill:none;stroke-width:0.8"/><path d="M263 112V92" style="fill:none;stroke:color-mix(in srgb,#5b4636,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><rect x="263" y="92" width="14" height="5" style="fill:color-mix(in srgb,#0057b7,var(--shade) var(--night));stroke:none"/><rect x="263" y="97" width="14" height="5" style="fill:color-mix(in srgb,#ffd700,var(--shade) var(--night));stroke:none"/><rect x="24" y="153" width="4" height="17" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="26" cy="149.2" r="13" style="fill:color-mix(in srgb,#3f9b4b,var(--shade) var(--night))"/><ellipse cx="140" cy="205" rx="20" ry="3" style="fill:color-mix(in srgb,#3e7a36,var(--shade) var(--night));stroke:none"/><ellipse cx="205" cy="205" rx="20" ry="3" style="fill:color-mix(in srgb,#3e7a36,var(--shade) var(--night));stroke:none"/><path d="M126 196Q108 186 112 170Q118 156 132 160Q138 168 140 186Z" style="fill:color-mix(in srgb,#d9d9d9,var(--shade) var(--night))"/><path d="M116 172L130 184M120 164L132 182M128 160L135 180" style="fill:none;stroke:color-mix(in srgb,#a8a8a8,var(--shade) var(--night));stroke-width:0.8;stroke-linecap:round"/><path d="M136 194L134 204M142 194L144 204M131 204H136M141 204H147" style="fill:none;stroke:color-mix(in srgb,#d63a3a,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/><ellipse cx="139" cy="187" rx="11" ry="9" style="fill:color-mix(in srgb,#ececec,var(--shade) var(--night))"/><path d="M141 182L142 168H146L146 182Z" style="fill:color-mix(in srgb,#d63a3a,var(--shade) var(--night))"/><circle cx="144" cy="165" r="4" style="fill:color-mix(in srgb,#4a78c2,var(--shade) var(--night))"/><path d="M141 162Q144 158 147 162Z" style="fill:color-mix(in srgb,#e04848,var(--shade) var(--night))"/><circle cx="145.5" cy="164.5" r="0.8" style="fill:color-mix(in srgb,#111,var(--shade) var(--night));stroke:none"/><path d="M147 165.5L150 166.5L147 167.5Z" style="fill:color-mix(in srgb,#e8a080,var(--shade) var(--night))"/><path d="M143 176L161 173L162 190L144 192Z" style="fill:color-mix(in srgb,#f2ead2,var(--shade) var(--night))"/><text x="152.5" y="179.5" text-anchor="middle" style="fill:color-mix(in srgb,#333,var(--shade) var(--night));stroke:none;stroke-width:0;paint-order:stroke;font:800 3.4px Arial,sans-serif">DAILY</text><text x="152.5" y="183.3" text-anchor="middle" style="fill:color-mix(in srgb,#333,var(--shade) var(--night));stroke:none;stroke-width:0;paint-order:stroke;font:800 3.4px Arial,sans-serif">CLUCK</text><path d="M146 186H158M146 188.5H157" style="fill:none;stroke:color-mix(in srgb,#9a9480,var(--shade) var(--night));stroke-width:0.6;stroke-linecap:round"/><path d="M212 186L224 196L211 194Z" style="fill:color-mix(in srgb,#ededed,var(--shade) var(--night))"/><path d="M221 193L224 196L220 195Z" style="fill:color-mix(in srgb,#222,var(--shade) var(--night))"/><path d="M201 196L199 204M207 196L209 204M196 204H201M206 204H212" style="fill:none;stroke:color-mix(in srgb,#e8a0a0,var(--shade) var(--night));stroke-width:1.3;stroke-linecap:round"/><ellipse cx="205" cy="189" rx="12" ry="8" style="fill:color-mix(in srgb,#f4f4f4,var(--shade) var(--night))"/><path d="M197 186L195 173H199L201 186Z" style="fill:color-mix(in srgb,#f4f4f4,var(--shade) var(--night))"/><circle cx="196.5" cy="171" r="3.6" style="fill:color-mix(in srgb,#f4a3b5,var(--shade) var(--night))"/><circle cx="195.5" cy="170.3" r="0.8" style="fill:color-mix(in srgb,#111,var(--shade) var(--night));stroke:none"/><path d="M193.5 171Q190.5 173 192 177Q194 174 194 172Z" style="fill:color-mix(in srgb,#e98aa0,var(--shade) var(--night))"/><rect x="184" y="184" width="8" height="6" rx="1" style="fill:color-mix(in srgb,#9aa4b0,var(--shade) var(--night))"/><path d="M185 184Q188 179 191 184M184 187L176 183" style="fill:none;stroke:color-mix(in srgb,#7d8691,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><circle cx="174" cy="187" r="0.8" style="fill:color-mix(in srgb,#8fd3ff,var(--shade) var(--night));stroke:none"/><circle cx="173" cy="191" r="0.8" style="fill:color-mix(in srgb,#8fd3ff,var(--shade) var(--night));stroke:none"/><circle cx="175" cy="194" r="0.8" style="fill:color-mix(in srgb,#8fd3ff,var(--shade) var(--night));stroke:none"/><path d="M166 197H178L176 206H168Z" style="fill:color-mix(in srgb,#6b4e2a,var(--shade) var(--night))"/><path d="M172 197L167 189M172 197L172 186M172 197L177 189M172 197L164 193M172 197L180 193" style="fill:none;stroke:color-mix(in srgb,#2f8a3a,var(--shade) var(--night));stroke-width:1.4;stroke-linecap:round"/></g></svg>\n',sw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#4a9e52,var(--shade) var(--night));stroke:none"/><path d="M295 170L310 112L325 170" style="fill:none;stroke:color-mix(in srgb,#9aa4b0,var(--shade) var(--night));stroke-width:3;stroke-linecap:round"/><g class="anim-wheel"><circle cx="310" cy="112" r="44" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:2.5"/><circle cx="310" cy="112" r="4" style="fill:color-mix(in srgb,#9aa4b0,var(--shade) var(--night))"/><path d="M310 112L354 112" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L341.1 143.1" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L310 156" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L278.9 143.1" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L266 112" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L278.9 80.9" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L310 68" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><path d="M310 112L341.1 80.9" style="fill:none;stroke:color-mix(in srgb,#dfe6ee,var(--shade) var(--night));stroke-width:1;stroke-linecap:round"/><g class="anim-cabin"><rect x="350.5" y="109" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="337.6" y="140.1" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="306.5" y="153" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="275.4" y="140.1" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="262.5" y="109" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="275.4" y="77.9" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="306.5" y="65" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g><g class="anim-cabin"><rect x="337.6" y="77.9" width="7" height="6" rx="2" style="fill:color-mix(in srgb,#e85d75,var(--shade) var(--night))"/></g></g><rect x="88" y="126" width="100" height="44" style="fill:color-mix(in srgb,#cfa860,var(--shade) var(--night))"/><rect x="86" y="123" width="104" height="4" style="fill:color-mix(in srgb,#b38d48,var(--shade) var(--night))"/><rect class="win" x="96.3" y="134.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="111.3" y="134.4" width="8.4" height="10.2" rx="0.8"/><rect class="win off" x="126.3" y="134.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="141.3" y="134.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="156.3" y="134.4" width="8.4" height="10.2" rx="0.8"/><rect class="win off" x="171.3" y="134.4" width="8.4" height="10.2" rx="0.8"/><rect class="win off" x="96.3" y="151.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="111.3" y="151.4" width="8.4" height="10.2" rx="0.8"/><rect class="win off" x="126.3" y="151.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="141.3" y="151.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="156.3" y="151.4" width="8.4" height="10.2" rx="0.8"/><rect class="win" x="171.3" y="151.4" width="8.4" height="10.2" rx="0.8"/><rect x="60" y="75" width="28" height="95" style="fill:color-mix(in srgb,#d7b46a,var(--shade) var(--night))"/><path d="M58 75L74 42L90 75Z" style="fill:color-mix(in srgb,#5d6f7e,var(--shade) var(--night))"/><circle cx="74" cy="92" r="9" style="fill:color-mix(in srgb,#f6f1dd,var(--shade) var(--night))"/><path d="M74 92V86M74 92L78 94" style="fill:none;stroke:color-mix(in srgb,#2b1d2e,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><rect class="win" x="66.2" y="111.4" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="76.2" y="111.4" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="66.2" y="125.4" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="76.2" y="125.4" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="66.2" y="139.4" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="76.2" y="139.4" width="5.6" height="7.3" rx="0.8"/><rect class="win" x="66.2" y="153.4" width="5.6" height="7.3" rx="0.8"/><rect class="win off" x="76.2" y="153.4" width="5.6" height="7.3" rx="0.8"/><g transform="translate(270 0)"><rect x="-50" y="133" width="44" height="35" rx="4" style="fill:color-mix(in srgb,#d62828,var(--shade) var(--night))"/><rect x="-50" y="149" width="44" height="2" style="fill:color-mix(in srgb,#a51d1d,var(--shade) var(--night));stroke:none"/><rect class="win" x="-46.7" y="138" width="6" height="7" rx="0.8"/><rect class="win" x="-38.2" y="138" width="6" height="7" rx="0.8"/><rect class="win" x="-29.7" y="138" width="6" height="7" rx="0.8"/><rect class="win" x="-21.2" y="138" width="6" height="7" rx="0.8"/><rect class="win" x="-46" y="154" width="6" height="7" rx="0.8"/><rect class="win" x="-36" y="154" width="6" height="7" rx="0.8"/><rect class="win" x="-26" y="154" width="6" height="7" rx="0.8"/><rect class="win" x="-14" y="136" width="6" height="9" rx="0.8"/><rect x="-14" y="153" width="6" height="13" style="fill:color-mix(in srgb,#3a3a3a,var(--shade) var(--night))"/><rect x="-7" y="160" width="2" height="3" style="fill:color-mix(in srgb,#ffe08a,var(--shade) var(--night));stroke:none"/><circle cx="-40" cy="168" r="4.5" style="fill:color-mix(in srgb,#222,var(--shade) var(--night))"/><circle cx="-40" cy="168" r="1.8" style="fill:color-mix(in srgb,#9aa4b0,var(--shade) var(--night));stroke:none"/><circle cx="-15" cy="168" r="4.5" style="fill:color-mix(in srgb,#222,var(--shade) var(--night))"/><circle cx="-15" cy="168" r="1.8" style="fill:color-mix(in srgb,#9aa4b0,var(--shade) var(--night));stroke:none"/></g></g></svg>\n',ow='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#7fb05a,var(--shade) var(--night));stroke:none"/><ellipse cx="25" cy="145" rx="5" ry="25" style="fill:color-mix(in srgb,#245e33,var(--shade) var(--night));stroke:none"/><ellipse cx="380" cy="142.5" rx="5" ry="27.5" style="fill:color-mix(in srgb,#245e33,var(--shade) var(--night));stroke:none"/><ellipse cx="178" cy="150" rx="5" ry="20" style="fill:color-mix(in srgb,#245e33,var(--shade) var(--night));stroke:none"/><rect x="50" y="130" width="95" height="40" style="fill:color-mix(in srgb,#efe3c8,var(--shade) var(--night))"/><rect x="48" y="127" width="99" height="4" style="fill:color-mix(in srgb,#d8c7a5,var(--shade) var(--night))"/><rect class="win off" x="58.7" y="143.8" width="9.5" height="12.4" rx="0.8"/><path d="M63.5 143.8V156.2M58.7 150H68.3" style="fill:none;stroke-width:0.8"/><rect class="win" x="75.7" y="143.8" width="9.5" height="12.4" rx="0.8"/><path d="M80.5 143.8V156.2M75.7 150H85.3" style="fill:none;stroke-width:0.8"/><rect class="win off" x="92.7" y="143.8" width="9.5" height="12.4" rx="0.8"/><path d="M97.5 143.8V156.2M92.7 150H102.3" style="fill:none;stroke-width:0.8"/><rect class="win" x="109.7" y="143.8" width="9.5" height="12.4" rx="0.8"/><path d="M114.5 143.8V156.2M109.7 150H119.3" style="fill:none;stroke-width:0.8"/><rect class="win off" x="126.7" y="143.8" width="9.5" height="12.4" rx="0.8"/><path d="M131.5 143.8V156.2M126.7 150H136.3" style="fill:none;stroke-width:0.8"/><path d="M74 130A23 23 0 0 1 120 130Z" style="fill:color-mix(in srgb,#9fb4c0,var(--shade) var(--night))"/><rect x="93" y="101" width="8" height="8" style="fill:color-mix(in srgb,#efe3c8,var(--shade) var(--night))"/><path d="M210 170V108L300 100L340 112V170Z" style="fill:color-mix(in srgb,#d9a66b,var(--shade) var(--night))"/><path d="M210 128L340 128M210 148L340 148" style="fill:none;stroke:color-mix(in srgb,#b9874e,var(--shade) var(--night));stroke-width:1.2;stroke-linecap:round"/><rect class="win off" x="216" y="112" width="8" height="12" rx="4"/><rect class="win off" x="231.5" y="112" width="8" height="12" rx="4"/><rect class="win" x="247" y="112" width="8" height="12" rx="4"/><rect class="win" x="262.5" y="112" width="8" height="12" rx="4"/><rect class="win" x="278" y="112" width="8" height="12" rx="4"/><rect class="win off" x="293.5" y="112" width="8" height="12" rx="4"/><rect class="win" x="309" y="112" width="8" height="12" rx="4"/><rect class="win" x="324.5" y="112" width="8" height="12" rx="4"/><rect class="win" x="216" y="132" width="8" height="12" rx="4"/><rect class="win" x="231.5" y="132" width="8" height="12" rx="4"/><rect class="win off" x="247" y="132" width="8" height="12" rx="4"/><rect class="win" x="262.5" y="132" width="8" height="12" rx="4"/><rect class="win" x="278" y="132" width="8" height="12" rx="4"/><rect class="win" x="293.5" y="132" width="8" height="12" rx="4"/><rect class="win" x="309" y="132" width="8" height="12" rx="4"/><rect class="win off" x="324.5" y="132" width="8" height="12" rx="4"/><rect class="win off" x="216" y="152" width="8" height="12" rx="4"/><rect class="win off" x="231.5" y="152" width="8" height="12" rx="4"/><rect class="win off" x="247" y="152" width="8" height="12" rx="4"/><rect class="win" x="262.5" y="152" width="8" height="12" rx="4"/><rect class="win off" x="278" y="152" width="8" height="12" rx="4"/><rect class="win off" x="293.5" y="152" width="8" height="12" rx="4"/><rect class="win off" x="309" y="152" width="8" height="12" rx="4"/><rect class="win off" x="324.5" y="152" width="8" height="12" rx="4"/></g></svg>\n',lw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#2ec4c6,var(--shade) var(--night));stroke:none"/><rect x="-20" y="176" width="440" height="54" style="fill:color-mix(in srgb,#24b0bb,var(--shade) var(--night));stroke:none"/><path class="wave" d="M31.2 199.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#e6fffd,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.40s"/><path class="wave" d="M171.8 206.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#e6fffd,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-1.61s"/><path class="wave" d="M302.3 195.1q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#e6fffd,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.33s"/><ellipse cx="80" cy="172" rx="80" ry="9" style="fill:color-mix(in srgb,#f3dfa2,var(--shade) var(--night));stroke:none"/><path d="M55 170Q51 145 63 120" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="54.5" cy="121.3" rx="11" ry="3.2" transform="rotate(40 54.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="57.8" cy="118.9" rx="11" ry="3.2" transform="rotate(75 57.8 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="63" cy="118" rx="11" ry="3.2" transform="rotate(70 63 118)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="68.2" cy="118.9" rx="11" ry="3.2" transform="rotate(105 68.2 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="71.5" cy="121.3" rx="11" ry="3.2" transform="rotate(140 71.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="63" cy="122" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><path d="M105 170Q108.5 149 98 128" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="89.5" cy="129.3" rx="11" ry="3.2" transform="rotate(40 89.5 129.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="92.8" cy="126.9" rx="11" ry="3.2" transform="rotate(75 92.8 126.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="98" cy="126" rx="11" ry="3.2" transform="rotate(70 98 126)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="103.2" cy="126.9" rx="11" ry="3.2" transform="rotate(105 103.2 126.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="106.5" cy="129.3" rx="11" ry="3.2" transform="rotate(140 106.5 129.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="98" cy="130" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/><rect x="170" y="160" width="210" height="3" style="fill:color-mix(in srgb,#a0703c,var(--shade) var(--night))"/><path d="M193 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M208 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M223 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="190" y="138" width="36" height="22" style="fill:color-mix(in srgb,#c88b4a,var(--shade) var(--night))"/><path d="M184 139L208 118.2L232 139Z" style="fill:color-mix(in srgb,#e0b45c,var(--shade) var(--night))"/><rect class="win" x="212.3" y="143.5" width="7.9" height="7" rx="0.8"/><rect x="195.4" y="146.4" width="7.9" height="13.6" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/><path d="M253 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M268 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M283 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="250" y="138" width="36" height="22" style="fill:color-mix(in srgb,#c88b4a,var(--shade) var(--night))"/><path d="M244 139L268 118.2L292 139Z" style="fill:color-mix(in srgb,#e0b45c,var(--shade) var(--night))"/><rect class="win" x="272.3" y="143.5" width="7.9" height="7" rx="0.8"/><rect x="255.4" y="146.4" width="7.9" height="13.6" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/><path d="M313 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M328 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M343 160V186" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="310" y="138" width="36" height="22" style="fill:color-mix(in srgb,#c88b4a,var(--shade) var(--night))"/><path d="M304 139L328 118.2L352 139Z" style="fill:color-mix(in srgb,#e0b45c,var(--shade) var(--night))"/><rect class="win" x="332.3" y="143.5" width="7.9" height="7" rx="0.8"/><rect x="315.4" y="146.4" width="7.9" height="13.6" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/></g></svg>\n',cw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#f0dca6,var(--shade) var(--night));stroke:none"/><rect x="-20" y="186" width="440" height="44" style="fill:color-mix(in srgb,#16a2c7,var(--shade) var(--night));stroke:none"/><path class="wave" d="M38.9 207.1q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.85s"/><path class="wave" d="M235.4 198.6q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.27s"/><path d="M160 170L230 92H262L340 170Z" style="fill:color-mix(in srgb,#3f7d4a,var(--shade) var(--night));stroke:none"/><path d="M230 92Q246 100 262 92Z" style="fill:color-mix(in srgb,#2c5a35,var(--shade) var(--night));stroke:none"/><rect x="70" y="150" width="40" height="20" style="fill:color-mix(in srgb,#a8713f,var(--shade) var(--night))"/><path d="M64 151L90 116L116 151Z" style="fill:color-mix(in srgb,#c9a25a,var(--shade) var(--night))"/><rect class="win off" x="94.8" y="155" width="8.8" height="6.4" rx="0.8"/><rect x="76" y="157.6" width="8.8" height="12.4" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/><rect x="150" y="152" width="34" height="18" style="fill:color-mix(in srgb,#b07a45,var(--shade) var(--night))"/><path d="M144 153L167 124L190 153Z" style="fill:color-mix(in srgb,#d9b26a,var(--shade) var(--night))"/><rect class="win off" x="171.1" y="156.5" width="7.5" height="5.8" rx="0.8"/><rect x="155.1" y="158.8" width="7.5" height="11.2" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/><g class="sway" style="animation-delay:-1.00s"><path d="M30 170Q27 145 36 120" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="27.5" cy="121.3" rx="11" ry="3.2" transform="rotate(40 27.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="30.8" cy="118.9" rx="11" ry="3.2" transform="rotate(75 30.8 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="36" cy="118" rx="11" ry="3.2" transform="rotate(70 36 118)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="41.2" cy="118.9" rx="11" ry="3.2" transform="rotate(105 41.2 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="44.5" cy="121.3" rx="11" ry="3.2" transform="rotate(140 44.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="36" cy="122" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-1.47s"><path d="M120 170Q123 148 114 126" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="105.5" cy="127.3" rx="11" ry="3.2" transform="rotate(40 105.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="108.8" cy="124.9" rx="11" ry="3.2" transform="rotate(75 108.8 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="114" cy="124" rx="11" ry="3.2" transform="rotate(70 114 124)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="119.2" cy="124.9" rx="11" ry="3.2" transform="rotate(105 119.2 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="122.5" cy="127.3" rx="11" ry="3.2" transform="rotate(140 122.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="114" cy="128" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-2.42s"><path d="M360 170Q364 142 352 114" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="343.5" cy="115.3" rx="11" ry="3.2" transform="rotate(40 343.5 115.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="346.8" cy="112.9" rx="11" ry="3.2" transform="rotate(75 346.8 112.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="352" cy="112" rx="11" ry="3.2" transform="rotate(70 352 112)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="357.2" cy="112.9" rx="11" ry="3.2" transform="rotate(105 357.2 112.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="360.5" cy="115.3" rx="11" ry="3.2" transform="rotate(140 360.5 115.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="352" cy="116" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><path d="M320 170Q317 150 326 130" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="317.5" cy="131.3" rx="11" ry="3.2" transform="rotate(40 317.5 131.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="320.8" cy="128.9" rx="11" ry="3.2" transform="rotate(75 320.8 128.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="326" cy="128" rx="11" ry="3.2" transform="rotate(70 326 128)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="331.2" cy="128.9" rx="11" ry="3.2" transform="rotate(105 331.2 128.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="334.5" cy="131.3" rx="11" ry="3.2" transform="rotate(140 334.5 131.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="326" cy="132" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g></svg>\n',dw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#e8d39a,var(--shade) var(--night));stroke:none"/><rect x="-20" y="184" width="440" height="46" style="fill:color-mix(in srgb,#1f8fb3,var(--shade) var(--night));stroke:none"/><path class="wave" d="M64.4 207.4q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.01s"/><path class="wave" d="M198.2 211q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-1.86s"/><path class="wave" d="M261.2 196.4q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.64s"/><path d="M-30 172Q110 34 250 172Z" style="fill:color-mix(in srgb,#2f8a4a,var(--shade) var(--night));stroke:none"/><path d="M220 172Q330 62 440 172Z" style="fill:color-mix(in srgb,#3a9a52,var(--shade) var(--night));stroke:none"/><path d="M113 158V170" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M129 158V170" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M145 158V170" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="110" y="136" width="38" height="22" style="fill:color-mix(in srgb,#b07a45,var(--shade) var(--night))"/><path d="M104 137L129 115.1L154 137Z" style="fill:color-mix(in srgb,#d9b26a,var(--shade) var(--night))"/><rect class="win" x="133.6" y="141.5" width="8.4" height="7" rx="0.8"/><rect x="115.7" y="144.4" width="8.4" height="13.6" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/><path d="M203 160V170" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M217 160V170" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M231 160V170" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><rect x="200" y="140" width="34" height="20" style="fill:color-mix(in srgb,#9c6a3a,var(--shade) var(--night))"/><path d="M194 141L217 121.3L240 141Z" style="fill:color-mix(in srgb,#e0bb6c,var(--shade) var(--night))"/><rect class="win" x="221.1" y="145" width="7.5" height="6.4" rx="0.8"/><rect x="205.1" y="147.6" width="7.5" height="12.4" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night))"/><g class="sway" style="animation-delay:-3.32s"><path d="M40 170Q37 144 46 118" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="37.5" cy="119.3" rx="11" ry="3.2" transform="rotate(40 37.5 119.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="40.8" cy="116.9" rx="11" ry="3.2" transform="rotate(75 40.8 116.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="46" cy="116" rx="11" ry="3.2" transform="rotate(70 46 116)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="51.2" cy="116.9" rx="11" ry="3.2" transform="rotate(105 51.2 116.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="54.5" cy="119.3" rx="11" ry="3.2" transform="rotate(140 54.5 119.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="46" cy="120" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-0.92s"><path d="M270 170Q273.5 147 263 124" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="254.5" cy="125.3" rx="11" ry="3.2" transform="rotate(40 254.5 125.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="257.8" cy="122.9" rx="11" ry="3.2" transform="rotate(75 257.8 122.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="263" cy="122" rx="11" ry="3.2" transform="rotate(70 263 122)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="268.2" cy="122.9" rx="11" ry="3.2" transform="rotate(105 268.2 122.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="271.5" cy="125.3" rx="11" ry="3.2" transform="rotate(140 271.5 125.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="263" cy="126" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-2.02s"><path d="M370 170Q367 143 376 116" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="367.5" cy="117.3" rx="11" ry="3.2" transform="rotate(40 367.5 117.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="370.8" cy="114.9" rx="11" ry="3.2" transform="rotate(75 370.8 114.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="376" cy="114" rx="11" ry="3.2" transform="rotate(70 376 114)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="381.2" cy="114.9" rx="11" ry="3.2" transform="rotate(105 381.2 114.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="384.5" cy="117.3" rx="11" ry="3.2" transform="rotate(140 384.5 117.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="376" cy="118" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><path d="M300 196Q330 206 360 196Z" style="fill:color-mix(in srgb,#8a5a2b,var(--shade) var(--night))"/></g></svg>\n',hw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#f0dca6,var(--shade) var(--night));stroke:none"/><rect x="-20" y="186" width="440" height="44" style="fill:color-mix(in srgb,#1aa3c9,var(--shade) var(--night));stroke:none"/><path class="wave" d="M62.6 213.3q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.20s"/><path class="wave" d="M197.3 210.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.74s"/><path class="wave" d="M279.5 202.8q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.95s"/><path d="M200 170L250 104Q275 96 300 102L340 112L420 150V170Z" style="fill:color-mix(in srgb,#7a8f4f,var(--shade) var(--night));stroke:none"/><path d="M256 104Q278 112 300 102" style="fill:none;stroke:color-mix(in srgb,#5f7340,var(--shade) var(--night));stroke-width:2"/><rect x="30" y="106" width="44" height="64" style="fill:color-mix(in srgb,#f2a1b5,var(--shade) var(--night))"/><rect x="28" y="103" width="48" height="4" style="fill:color-mix(in srgb,#d9738e,var(--shade) var(--night))"/><rect class="win" x="37.5" y="113.7" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="48.8" y="113.7" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="60.2" y="113.7" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="37.5" y="127.2" width="6.3" height="8.1" rx="0.8"/><rect class="win off" x="48.8" y="127.2" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="60.2" y="127.2" width="6.3" height="8.1" rx="0.8"/><rect class="win off" x="37.5" y="140.7" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="48.8" y="140.7" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="60.2" y="140.7" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="37.5" y="154.2" width="6.3" height="8.1" rx="0.8"/><rect class="win off" x="48.8" y="154.2" width="6.3" height="8.1" rx="0.8"/><rect class="win" x="60.2" y="154.2" width="6.3" height="8.1" rx="0.8"/><rect x="80" y="90" width="36" height="80" style="fill:color-mix(in srgb,#e8eef2,var(--shade) var(--night))"/><rect x="78" y="87" width="40" height="4" style="fill:color-mix(in srgb,#e8eef2,var(--shade) var(--night))"/><rect class="win" x="87.9" y="97.3" width="7.3" height="7" rx="0.8"/><rect class="win" x="100.9" y="97.3" width="7.3" height="7" rx="0.8"/><rect class="win" x="87.9" y="109" width="7.3" height="7" rx="0.8"/><rect class="win" x="100.9" y="109" width="7.3" height="7" rx="0.8"/><rect class="win" x="87.9" y="120.7" width="7.3" height="7" rx="0.8"/><rect class="win" x="100.9" y="120.7" width="7.3" height="7" rx="0.8"/><rect class="win" x="87.9" y="132.3" width="7.3" height="7" rx="0.8"/><rect class="win off" x="100.9" y="132.3" width="7.3" height="7" rx="0.8"/><rect class="win" x="87.9" y="144" width="7.3" height="7" rx="0.8"/><rect class="win" x="100.9" y="144" width="7.3" height="7" rx="0.8"/><rect class="win" x="87.9" y="155.7" width="7.3" height="7" rx="0.8"/><rect class="win" x="100.9" y="155.7" width="7.3" height="7" rx="0.8"/><g class="sway" style="animation-delay:-3.62s"><path d="M140 170Q137 143 146 116" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="137.5" cy="117.3" rx="11" ry="3.2" transform="rotate(40 137.5 117.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="140.8" cy="114.9" rx="11" ry="3.2" transform="rotate(75 140.8 114.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="146" cy="114" rx="11" ry="3.2" transform="rotate(70 146 114)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="151.2" cy="114.9" rx="11" ry="3.2" transform="rotate(105 151.2 114.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="154.5" cy="117.3" rx="11" ry="3.2" transform="rotate(140 154.5 117.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="146" cy="118" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-3.66s"><path d="M170 170Q173 148 164 126" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="155.5" cy="127.3" rx="11" ry="3.2" transform="rotate(40 155.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="158.8" cy="124.9" rx="11" ry="3.2" transform="rotate(75 158.8 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="164" cy="124" rx="11" ry="3.2" transform="rotate(70 164 124)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="169.2" cy="124.9" rx="11" ry="3.2" transform="rotate(105 169.2 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="172.5" cy="127.3" rx="11" ry="3.2" transform="rotate(140 172.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="164" cy="128" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-0.27s"><path d="M375 170Q378.5 145 368 120" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="359.5" cy="121.3" rx="11" ry="3.2" transform="rotate(40 359.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="362.8" cy="118.9" rx="11" ry="3.2" transform="rotate(75 362.8 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="368" cy="118" rx="11" ry="3.2" transform="rotate(70 368 118)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="373.2" cy="118.9" rx="11" ry="3.2" transform="rotate(105 373.2 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="376.5" cy="121.3" rx="11" ry="3.2" transform="rotate(140 376.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="368" cy="122" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><ellipse cx="220" cy="158" rx="4" ry="13" transform="rotate(12 220 158)" style="fill:color-mix(in srgb,#ff7f50,var(--shade) var(--night))"/></g></svg>\n',fw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#5aa15a,var(--shade) var(--night));stroke:none"/><rect x="-20" y="182" width="440" height="48" style="fill:color-mix(in srgb,#1f86b0,var(--shade) var(--night));stroke:none"/><path class="wave" d="M39.1 189.9q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-2.93s"/><path class="wave" d="M173 189.4q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-1.15s"/><path class="wave" d="M261.6 210q7 -4 14 0q7 4 14 0" style="fill:none;stroke:color-mix(in srgb,#ffffff,var(--shade) var(--night));stroke-width:1.5;stroke-linecap:round;animation-delay:-0.02s"/><path d="M170 170Q190 120 230 70Q262 54 290 92Q320 130 360 170Z" style="fill:color-mix(in srgb,#2e7d45,var(--shade) var(--night));stroke:none"/><path d="M-20 170Q40 110 120 170Z" style="fill:color-mix(in srgb,#3d8f50,var(--shade) var(--night));stroke:none"/><path d="M64 170V150" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M85 170V150" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M106 170V150" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M54 152Q85 112 116 152Z" style="fill:color-mix(in srgb,#c9a25a,var(--shade) var(--night))"/><rect class="win off" x="79" y="156" width="12" height="8" rx="0.8"/><path d="M134 170V150" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M151 170V150" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M168 170V150" style="fill:none;stroke:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><path d="M124 152Q151 112 178 152Z" style="fill:color-mix(in srgb,#c9a25a,var(--shade) var(--night))"/><rect class="win off" x="145" y="156" width="12" height="8" rx="0.8"/><path d="M247 136L265 118L283 136Z" style="fill:color-mix(in srgb,#c2452d,var(--shade) var(--night))"/><rect x="250" y="136" width="30" height="34" style="fill:color-mix(in srgb,#f8f8f4,var(--shade) var(--night))"/><rect class="win" x="259.4" y="143.6" width="11.2" height="7.9" rx="0.8"/><rect x="260.5" y="159.1" width="9" height="10.9" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/><g class="sway" style="animation-delay:-2.28s"><path d="M30 170Q27 145 36 120" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="27.5" cy="121.3" rx="11" ry="3.2" transform="rotate(40 27.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="30.8" cy="118.9" rx="11" ry="3.2" transform="rotate(75 30.8 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="36" cy="118" rx="11" ry="3.2" transform="rotate(70 36 118)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="41.2" cy="118.9" rx="11" ry="3.2" transform="rotate(105 41.2 118.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="44.5" cy="121.3" rx="11" ry="3.2" transform="rotate(140 44.5 121.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="36" cy="122" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-2.61s"><path d="M205 170Q208 148 199 126" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="190.5" cy="127.3" rx="11" ry="3.2" transform="rotate(40 190.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="193.8" cy="124.9" rx="11" ry="3.2" transform="rotate(75 193.8 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="199" cy="124" rx="11" ry="3.2" transform="rotate(70 199 124)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="204.2" cy="124.9" rx="11" ry="3.2" transform="rotate(105 204.2 124.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="207.5" cy="127.3" rx="11" ry="3.2" transform="rotate(140 207.5 127.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="199" cy="128" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><g class="sway" style="animation-delay:-1.58s"><path d="M330 170Q327 144 336 118" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="327.5" cy="119.3" rx="11" ry="3.2" transform="rotate(40 327.5 119.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="330.8" cy="116.9" rx="11" ry="3.2" transform="rotate(75 330.8 116.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="336" cy="116" rx="11" ry="3.2" transform="rotate(70 336 116)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="341.2" cy="116.9" rx="11" ry="3.2" transform="rotate(105 341.2 116.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="344.5" cy="119.3" rx="11" ry="3.2" transform="rotate(140 344.5 119.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="336" cy="120" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g><path d="M385 170Q388 149 379 128" style="fill:none;stroke:color-mix(in srgb,#8a5a2b,var(--shade) var(--night));stroke-width:3.5;stroke-linecap:round"/><ellipse cx="370.5" cy="129.3" rx="11" ry="3.2" transform="rotate(40 370.5 129.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="373.8" cy="126.9" rx="11" ry="3.2" transform="rotate(75 373.8 126.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="379" cy="126" rx="11" ry="3.2" transform="rotate(70 379 126)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="384.2" cy="126.9" rx="11" ry="3.2" transform="rotate(105 384.2 126.9)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><ellipse cx="387.5" cy="129.3" rx="11" ry="3.2" transform="rotate(140 387.5 129.3)" style="fill:color-mix(in srgb,#2f9e44,var(--shade) var(--night));stroke:none"/><circle cx="379" cy="130" r="2.4" style="fill:color-mix(in srgb,#6b4423,var(--shade) var(--night));stroke:none"/></g></svg>\n',pw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round"><rect x="-20" y="170" width="440" height="70" style="fill:color-mix(in srgb,#4caf50,var(--shade) var(--night));stroke:none"/><path d="M40 172Q220 110 400 172Z" style="fill:color-mix(in srgb,#5cbf5f,var(--shade) var(--night));stroke:none"/><rect x="28" y="154" width="4" height="16" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="30" cy="150.8" r="12" style="fill:color-mix(in srgb,#3f9b4b,var(--shade) var(--night))"/><rect x="368" y="153" width="4" height="17" style="fill:color-mix(in srgb,#7a4f2a,var(--shade) var(--night));stroke:none"/><circle cx="370" cy="149.2" r="13" style="fill:color-mix(in srgb,#3f9b4b,var(--shade) var(--night))"/><rect x="150" y="128" width="80" height="42" style="fill:color-mix(in srgb,#c98a5a,var(--shade) var(--night))"/><rect x="148" y="125" width="84" height="4" style="fill:color-mix(in srgb,#8d5b3a,var(--shade) var(--night))"/><rect class="win" x="160.1" y="140.5" width="13.1" height="17" rx="0.8"/><path d="M166.7 140.5V157.5M160.1 149H173.2" style="fill:none;stroke-width:0.8"/><rect class="win" x="183.5" y="140.5" width="13.1" height="17" rx="0.8"/><path d="M190 140.5V157.5M183.5 149H196.5" style="fill:none;stroke-width:0.8"/><rect class="win" x="206.8" y="140.5" width="13.1" height="17" rx="0.8"/><path d="M213.3 140.5V157.5M206.8 149H219.9" style="fill:none;stroke-width:0.8"/><path d="M168 125A20 20 0 0 1 208 125Z" style="fill:color-mix(in srgb,#8fa3ad,var(--shade) var(--night))"/><path d="M215 125V96" style="fill:none;stroke:color-mix(in srgb,#5b4636,var(--shade) var(--night));stroke-width:2;stroke-linecap:round"/><circle cx="215" cy="97" r="4.5" style="fill:color-mix(in srgb,#e63946,var(--shade) var(--night))"/><rect x="198" y="170" width="4" height="50" style="fill:color-mix(in srgb,#f1f1f1,var(--shade) var(--night));stroke:none"/><path d="M52 130L82.5 110.75L113 130Z" style="fill:color-mix(in srgb,#b5523b,var(--shade) var(--night))"/><rect x="55" y="130" width="55" height="40" style="fill:color-mix(in srgb,#e3b26b,var(--shade) var(--night))"/><rect class="win off" x="65" y="138.4" width="12.6" height="10.3" rx="0.8"/><path d="M71.3 138.4V148.8M65 143.6H77.6" style="fill:none;stroke-width:0.8"/><rect class="win" x="87.5" y="138.4" width="12.6" height="10.3" rx="0.8"/><path d="M93.8 138.4V148.8M87.5 143.6H100.1" style="fill:none;stroke-width:0.8"/><rect x="75.5" y="157.2" width="14" height="12.8" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/><path d="M267 134L300 113L333 134Z" style="fill:color-mix(in srgb,#7d3c2c,var(--shade) var(--night))"/><rect x="270" y="134" width="60" height="36" style="fill:color-mix(in srgb,#d9846b,var(--shade) var(--night))"/><rect class="win" x="280.5" y="141.9" width="14" height="8.7" rx="0.8"/><rect class="win" x="305.5" y="141.9" width="14" height="8.7" rx="0.8"/><rect x="293" y="158.5" width="14" height="11.5" style="fill:color-mix(in srgb,#d6282b,var(--shade) var(--night))"/></g></svg>\n',xw=Fo`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate3d(var(--drift), 250px, 0) rotate(var(--spin)); opacity: 0; }
`,uw=Eo.span`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,gw=Eo.span`
  position: absolute;
  width: 9px;
  height: 12px;
  border-radius: 45% 45% 40% 40%;
  background: radial-gradient(circle at 50% 60%, #ffe08a 0%, #ff9a3d 45%, #e8562a 100%);
  box-shadow: 0 0 10px 3px rgba(255, 150, 60, 0.55);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #ffe9a8;
  }
`,mw=Eo.span`
  position: absolute;
  top: -12px;
  width: 7px;
  height: 5px;
  border-radius: 70% 0 70% 0;
  background: linear-gradient(135deg, #ffd3e2, #f49ac0);
  will-change: transform, opacity;
  animation: ${xw} var(--dur) linear var(--delay) infinite;
`,yw=[{x:9,y:34},{x:24,y:18},{x:38,y:40},{x:55,y:22},{x:71,y:36},{x:86,y:16}],bw=[{x:12,dur:12,delay:0,drift:-60,spin:300},{x:35,dur:14,delay:-5,drift:-70,spin:-260},{x:58,dur:13,delay:-9,drift:-50,spin:320},{x:80,dur:15,delay:-3,drift:-80,spin:-300},{x:96,dur:12.5,delay:-7,drift:-65,spin:280}],ww=e=>({left:`${e.x}%`,"--dur":`${e.dur}s`,"--delay":`${e.delay}s`,"--drift":`${e.drift}px`,"--spin":`${e.spin}deg`}),vw=(0,Ar.memo)(({className:e})=>(0,_o.jsx)(uw,{className:e,"aria-hidden":"true",children:yw.map((e,t)=>(0,_o.jsx)(gw,{style:{left:`${e.x}%`,top:`${e.y}%`}},t))})),kw=(0,Ar.memo)(({className:e})=>(0,_o.jsx)(uw,{className:e,"aria-hidden":"true",children:bw.map((e,t)=>(0,_o.jsx)(mw,{className:"particle",style:ww(e)},t))})),jw=Object.assign({"./images/timezones/america_anchorage.svg":Ob,"./images/timezones/america_caracas.svg":Bb,"./images/timezones/america_denver.svg":Hb,"./images/timezones/america_los_angeles.svg":qb,"./images/timezones/america_mexico_city.svg":Kb,"./images/timezones/america_new_york.svg":Zb,"./images/timezones/america_sao_paulo.svg":Ub,"./images/timezones/asia_almaty.svg":Jb,"./images/timezones/asia_bangkok.svg":Wb,"./images/timezones/asia_dubai.svg":Gb,"./images/timezones/asia_kolkata.svg":Yb,"./images/timezones/asia_seoul.svg":Qb,"./images/timezones/asia_shanghai.svg":Xb,"./images/timezones/atlantic_azores.svg":ew,"./images/timezones/atlantic_south_georgia.svg":tw,"./images/timezones/australia_brisbane.svg":rw,"./images/timezones/australia_sydney.svg":iw,"./images/timezones/europe_istanbul.svg":aw,"./images/timezones/europe_kyiv.svg":nw,"./images/timezones/europe_london.svg":sw,"./images/timezones/europe_rome.svg":ow,"./images/timezones/indian_maldives.svg":lw,"./images/timezones/pacific_fiji.svg":cw,"./images/timezones/pacific_guadalcanal.svg":dw,"./images/timezones/pacific_honolulu.svg":hw,"./images/timezones/pacific_pago_pago.svg":fw,"./images/timezones/utc.svg":pw}),Mw={asia_dubai:"heat",asia_kolkata:"heat",asia_bangkok:"heat",america_mexico_city:"heat",pacific_guadalcanal:"rain",pacific_fiji:"rain",pacific_pago_pago:"rain",america_caracas:"rain",america_sao_paulo:"rain",america_anchorage:"snow",atlantic_south_georgia:"snow",asia_almaty:"snow",europe_london:"fog"},Sw=(e,t,r)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${t}'>${r}</svg>`)}")`,$w=Sw(60,60,"<g stroke='#d6e6ff' stroke-width='1.2' stroke-linecap='round' opacity='.75'><path d='M10 0l-3 12M40 20l-3 12M25 38l-3 12M54 46l-3 12M4 48l-2 8'/></g>"),Dw=Sw(40,40,"<g stroke='#c9dcff' stroke-width='1.4' stroke-linecap='round' opacity='.85'><path d='M6 0l-4 16M26 8l-4 16M16 22l-4 16M36 26l-4 16M30 -10l-4 16'/></g>"),Cw=Sw(80,80,"<g fill='#fff' opacity='.9'><circle cx='10' cy='12' r='2'/><circle cx='50' cy='6' r='1.4'/><circle cx='34' cy='34' r='2.4'/><circle cx='68' cy='42' r='1.6'/><circle cx='18' cy='58' r='1.5'/><circle cx='56' cy='70' r='2.1'/></g>"),Lw=Sw(60,60,"<g fill='#fff' opacity='.95'><circle cx='6' cy='8' r='1.6'/><circle cx='30' cy='4' r='1.2'/><circle cx='48' cy='18' r='1.8'/><circle cx='20' cy='28' r='1.3'/><circle cx='40' cy='40' r='1.6'/><circle cx='8' cy='48' r='1.2'/><circle cx='54' cy='54' r='1.4'/></g><g stroke='#fff' stroke-width='1' opacity='.55' stroke-linecap='round'><path d='M12 18l8 -6M36 30l8 -6M24 50l8 -6'/></g>"),Aw=Sw(120,60,"<g fill='none' stroke='#fff' stroke-width='3' opacity='.14' stroke-linecap='round'><path d='M0 15q15 -6 30 0t30 0t30 0t30 0'/><path d='M0 45q15 -6 30 0t30 0t30 0t30 0'/></g>"),zw=Sw(400,220,"<defs><radialGradient id='f'><stop offset='0' stop-color='#e8ecf0' stop-opacity='.85'/><stop offset='1' stop-color='#e8ecf0' stop-opacity='0'/></radialGradient></defs><g fill='url(#f)'><ellipse cx='110' cy='150' rx='105' ry='32'/><ellipse cx='290' cy='132' rx='105' ry='28'/><ellipse cx='200' cy='186' rx='195' ry='36'/></g>"),Iw=200,Ew=170,Nw=168,Rw=128,Tw=36e5,Fw=[{e:-1,top:"#050816",bot:"#111a35",shade:"#070b1c",night:68,lit:1,stars:1},{e:-.35,top:"#0b1026",bot:"#1c2a4a",shade:"#0b1030",night:62,lit:1,stars:1},{e:-.12,top:"#2a2358",bot:"#c0587a",shade:"#2a1d45",night:45,lit:.9,stars:.35},{e:.05,top:"#f39ac0",bot:"#ffa25c",shade:"#5a2a4a",night:25,lit:.45,stars:0},{e:.3,top:"#5aa9f5",bot:"#bfe3ff",shade:"#1a2340",night:0,lit:0,stars:0},{e:1,top:"#2f86f0",bot:"#9fd4ff",shade:"#1a2340",night:0,lit:0,stars:0}],Pw=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),Vw=(e,t,r)=>e+(t-e)*r,_w=(e,t,r)=>{const[i,a,n]=Pw(e),[s,o,l]=Pw(t);return`rgb(${Math.round(Vw(i,s,r))}, ${Math.round(Vw(a,o,r))}, ${Math.round(Vw(n,l,r))})`},Ow=Eo.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(180deg, var(--sky-top, #2f86f0), var(--sky-bot, #9fd4ff));

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.35), transparent 38%);
  }

  svg {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  .stars {
    opacity: var(--stars, 0);
  }

  .stars circle {
    animation: city-scene-twinkle 3s ease-in-out infinite alternate;
  }

  .win {
    fill: var(--win-on, #bfe6f7);
  }

  .win.off {
    fill: var(--win-off, #bfe6f7);
  }

  /* Погода: тайловий шар зсувається на ціле число тайлів, тому цикл безшовний.
     Поки шар прихований, анімація на паузі. */
  .fx {
    position: absolute;
    inset: -240px -120px;
    opacity: 0;
    background-repeat: repeat;
    transition: opacity 1.5s ease;
    animation: city-scene-drift var(--dur) linear infinite paused;
  }

  .fx-rain {
    background-image: ${$w};
    --dx: -60px;
    --dy: 240px;
    --dur: 0.9s;
  }

  .fx-downpour {
    background-image: ${Dw};
    --dx: -40px;
    --dy: 160px;
    --dur: 0.35s;
  }

  .fx-snow {
    background-image: ${Cw};
    --dx: 80px;
    --dy: 160px;
    --dur: 9s;
  }

  .fx-blizzard {
    background-image: ${Lw};
    --dx: 120px;
    --dy: 120px;
    --dur: 1.1s;
  }

  .fx-heat {
    inset: 0;
    background-image: ${Aw};
    filter: blur(1.5px);
    animation: city-scene-rise 5s linear infinite paused;
    -webkit-mask-image: linear-gradient(transparent 35%, #000 75%);
    mask-image: linear-gradient(transparent 35%, #000 75%);
  }

  .fx-fog {
    background-image: ${zw};
    background-size: 400px 100%;
    inset: 0 -400px 0 0;
    --dx: -400px;
    --dy: 0px;
    --dur: 45s;
  }

  .fx-fog.slow {
    --dur: 80s;
    background-position: 170px 18px;
    animation-direction: reverse;
  }

  .fx-veil {
    inset: 0;
    animation: none;
  }

  .fx-veil.blizzard {
    background: linear-gradient(rgba(215, 225, 238, 0.15), rgba(215, 225, 238, 0.45));
  }

  .fx-veil.storm {
    background: rgba(20, 28, 48, 0.3);
  }

  &[data-climate="rain"] .fx-rain,
  &[data-climate="snow"] .fx-snow,
  &[data-climate="fog"] .fx-fog,
  &[data-climate="heat"][data-phase="day"] .fx-heat,
  &[data-phase="night"] .fx-downpour,
  &[data-phase="night"] .fx-blizzard,
  &[data-phase="night"] .fx-veil {
    opacity: 1;
    animation-play-state: running;
  }

  &[data-phase="night"] .fx-rain,
  &[data-phase="night"] .fx-snow {
    opacity: 0;
    animation-play-state: paused;
  }

  &[data-phase="night"] .fx-fog {
    opacity: 0.55;
  }

  /* Китайські ліхтарики злітають лише вночі (display: none зупиняє анімацію вдень) */
  .lanterns {
    display: none;
  }

  &[data-phase="night"] .lanterns {
    display: block;
  }

  /* Спека: вдень далекий план трохи «пливе» */
  &[data-climate="heat"][data-phase="day"] .city-layer {
    filter: var(--heat-filter);
  }

  @keyframes city-scene-twinkle {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.35;
    }
  }

  /* Анімовані деталі всередині SVG міст (класи ставить генератор) */
  .wave {
    transform-box: fill-box;
    transform-origin: center;
    animation: city-scene-wave 3.5s ease-in-out infinite alternate;
  }

  /* Дерева на вітрі хитаються від основи стовбура */
  .sway {
    transform-box: fill-box;
    transform-origin: 50% 100%;
    animation: city-scene-sway 4s ease-in-out infinite alternate;
  }

  /* Злива чи заметіль уночі — вітер сильніший */
  &[data-phase="night"][data-climate="rain"] .sway,
  &[data-phase="night"][data-climate="snow"] .sway {
    animation-name: city-scene-sway-strong;
    animation-duration: 1.6s;
  }

  /* Сніговий клімат — вода крижана, хвилі стоять */
  &[data-climate="snow"] .wave {
    animation: none;
  }

  .anim-wheel {
    transform-box: view-box;
    transform-origin: 310px 112px;
    animation: city-scene-spin 60s linear infinite;
  }

  .anim-cabin {
    transform-box: fill-box;
    transform-origin: center;
    animation: city-scene-spin 60s linear infinite reverse;
  }

  @keyframes city-scene-wave {
    from {
      transform: translateX(-6px) scaleX(0.8);
      opacity: 0.5;
    }
    to {
      transform: translateX(6px) scaleX(1.15);
      opacity: 1;
    }
  }

  @keyframes city-scene-sway {
    from {
      transform: rotate(-2deg);
    }
    to {
      transform: rotate(2.5deg);
    }
  }

  @keyframes city-scene-sway-strong {
    from {
      transform: rotate(-3deg);
    }
    to {
      transform: rotate(6deg);
    }
  }

  @keyframes city-scene-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes city-scene-rise {
    to {
      background-position: 0 -60px;
    }
  }

  @keyframes city-scene-drift {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(var(--dx), var(--dy));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .stars circle,
    .fx,
    .wave,
    .sway,
    .anim-wheel,
    .anim-cabin {
      animation: none;
    }
    &[data-climate="heat"][data-phase="day"] .city-layer {
      filter: none;
    }
  }
`,Bw=Eo.span`
  position: absolute;
  inset: 0;
`,Hw=(0,Ar.memo)(({timezone:e,now:t})=>{const r=(0,Ar.useRef)(null),i=(0,Ar.useRef)(null),a=(0,Ar.useRef)(null),n=(0,Ar.useRef)(null),s=(0,Ar.useRef)(null),o=e.value.toLowerCase().replace(/\//g,"_"),l=Mw[o],c=jw[`./images/timezones/${o}.svg`]??"",d=(0,Ar.useMemo)(()=>({__html:c}),[c]),h=(0,Ar.useMemo)(()=>(e=>{let t=[...e].reduce((e,t)=>31*e+t.charCodeAt(0),7)>>>0;const r=()=>(t=1664525*t+1013904223>>>0,t/4294967296);return Array.from({length:34},()=>({x:400*r(),y:140*r(),r:.5+1.1*r(),d:(3*r()).toFixed(2)}))})(o),[o]),f=((e,t)=>{const r=t.getTime(),i=[-1,0,1].flatMap(t=>{const i=af(new Date(r+24*t*Tw),e.lat,e.lon);return[{type:"rise",at:i.sunrise.getTime()},{type:"set",at:i.sunset.getTime()}]}).filter(e=>Number.isFinite(e.at)).sort((e,t)=>e.at-t.at),a=i.filter(e=>e.at<=r).pop(),n=i.find(e=>e.at>r);if(a&&n&&a.type!==n.type){const e=n.at-a.at,t=Math.max(1,Math.round(e/(2*Tw))),i=Math.floor((r-a.at)/e*t);return("rise"===a.type?-90:90)+180*i/t}const s=Number(new Intl.DateTimeFormat("en-GB",{hour:"numeric",hourCycle:"h23",timeZone:e.value}).format(t));return 2*Math.floor(s/2)/24*360-180})(e,t);return(0,Ar.useLayoutEffect)(()=>{const e=e=>{const t=e*Math.PI/180,s=Math.cos(t),o=(e=>{let t=0;for(;t<Fw.length-2&&e>Fw[t+1].e;)t++;const r=Fw[t],i=Fw[t+1],a=Math.min(1,Math.max(0,(e-r.e)/(i.e-r.e)));return{top:_w(r.top,i.top,a),bot:_w(r.bot,i.bot,a),shade:_w(r.shade,i.shade,a),night:Vw(r.night,i.night,a),lit:Vw(r.lit,i.lit,a),stars:Vw(r.stars,i.stars,a)}})(s),l=r.current;if(!l)return;l.style.setProperty("--sky-top",o.top),l.style.setProperty("--sky-bot",o.bot),l.style.setProperty("--shade",o.shade),l.style.setProperty("--night",`${o.night.toFixed(1)}%`),l.style.setProperty("--stars",o.stars.toFixed(2)),l.style.setProperty("--win-on",_w("#bfe6f7","#ffd36b",o.lit)),l.style.setProperty("--win-off",_w("#bfe6f7","#262f48",o.lit)),l.dataset.phase=s>.15?"day":s<-.12?"night":"twilight";const c=Iw+Nw*Math.sin(t),d=Ew-Rw*s;i.current?.setAttribute("transform",`translate(${c.toFixed(1)} ${d.toFixed(1)})`),a.current?.setAttribute("fill",_w("#ff7a3d","#ffe066",Math.min(1,Math.max(0,2.5*s)))),n.current?.setAttribute("transform",`translate(${(2*Iw-c).toFixed(1)} ${(2*Ew-d).toFixed(1)})`)},t=s.current;if(null===t)return s.current=f,void e(f);const o=((f-t)%360+360)%360;if(o<.01)return;let l;const c=performance.now(),d=r=>{const i=Math.min(1,(r-c)/4e3);s.current=t+o*(e=>e<.5?2*e*e:1-(-2*e+2)**2/2)(i),e(s.current),i<1&&(l=requestAnimationFrame(d))};return l=requestAnimationFrame(d),()=>cancelAnimationFrame(l)},[f]),(0,_o.jsxs)(Ow,{ref:r,"aria-hidden":"true","data-climate":l,style:"heat"===l?{"--heat-filter":`url(#heat-${o})`}:void 0,children:[(0,_o.jsxs)("svg",{viewBox:"0 0 400 220",preserveAspectRatio:"xMidYMax slice",children:[(0,_o.jsxs)("defs",{children:[(0,_o.jsxs)("radialGradient",{id:`glow-${o}`,children:[(0,_o.jsx)("stop",{offset:"0%",stopColor:"#fff6c8",stopOpacity:"0.9"}),(0,_o.jsx)("stop",{offset:"100%",stopColor:"#fff6c8",stopOpacity:"0"})]}),"heat"===l&&(0,_o.jsxs)("filter",{id:`heat-${o}`,x:"0",y:"0",width:"100%",height:"100%",children:[(0,_o.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"0.012 0.06",numOctaves:"1",seed:"3",children:(0,_o.jsx)("animate",{attributeName:"baseFrequency",dur:"4s",values:"0.012 0.06;0.013 0.066;0.012 0.06",repeatCount:"indefinite"})}),(0,_o.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"3"})]})]}),(0,_o.jsx)("g",{className:"stars",fill:"#fff",children:h.map((e,t)=>(0,_o.jsx)("circle",{cx:e.x,cy:e.y,r:e.r,style:{animationDelay:`${e.d}s`}},t))}),(0,_o.jsxs)("g",{ref:n,children:[(0,_o.jsx)("circle",{r:"26",fill:`url(#glow-${o})`,opacity:"0.45"}),(0,_o.jsx)("circle",{r:"12",fill:"#f4f1de"}),(0,_o.jsx)("circle",{cx:"-4",cy:"-3",r:"2.6",fill:"#d9d4bb"}),(0,_o.jsx)("circle",{cx:"4",cy:"4",r:"1.8",fill:"#d9d4bb"}),(0,_o.jsx)("circle",{cx:"3",cy:"-5",r:"1.2",fill:"#d9d4bb"})]}),(0,_o.jsxs)("g",{ref:i,children:[(0,_o.jsx)("circle",{r:"34",fill:`url(#glow-${o})`,opacity:"0.8"}),(0,_o.jsx)("circle",{ref:a,r:"15",fill:"#ffe066"})]})]}),c&&(0,_o.jsx)(Bw,{className:"city-layer",dangerouslySetInnerHTML:d}),"asia_shanghai"===o&&(0,_o.jsx)(vw,{className:"lanterns"}),"heat"===l&&(0,_o.jsx)("span",{className:"fx fx-heat"}),"rain"===l&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{className:"fx fx-veil storm"}),(0,_o.jsx)("span",{className:"fx fx-rain"}),(0,_o.jsx)("span",{className:"fx fx-downpour"})]}),"snow"===l&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{className:"fx fx-veil blizzard"}),(0,_o.jsx)("span",{className:"fx fx-snow"}),(0,_o.jsx)("span",{className:"fx fx-blizzard"})]}),"fog"===l&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{className:"fx fx-fog slow"}),(0,_o.jsx)("span",{className:"fx fx-fog"})]})]})}),qw="scene_decor_enabled",Kw=new Set,Zw="undefined"==typeof window||(()=>{try{return"false"!==localStorage.getItem(qw)}catch{return!0}})(),Uw=e=>{Zw=e;try{localStorage.setItem(qw,String(e))}catch{}Kw.forEach(e=>e())},Jw=e=>(Kw.add(e),()=>Kw.delete(e)),Ww=()=>(0,Ar.useSyncExternalStore)(Jw,()=>Zw,()=>!0),Gw=Eo.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 6px 10px;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 480px) {
    .decor-label {
      display: none;
    }
  }
`,Yw=Eo.span`
  position: relative;
  width: 32px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 999px;
  background: ${e=>e.$on?e.$accent:"rgba(255, 255, 255, 0.2)"};
  transition: background 0.15s ease;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${e=>e.$on?"16px":"2px"};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.15s ease;
  }
`,Qw=({label:e,title:t,accent:r="#60cdff"})=>{const i=Ww();return(0,_o.jsxs)(Gw,{type:"button",role:"switch","aria-checked":i,"aria-label":t,title:t,onClick:()=>Uw(!i),children:[(0,_o.jsx)(Qt,{size:16,color:i?r:"#a0a0a0"}),(0,_o.jsx)("span",{className:"decor-label",children:e}),(0,_o.jsx)(Yw,{$on:i,$accent:r})]})},Xw=0,ev=null,tv=()=>(ev??(ev=(async()=>{try{const e=Date.now(),t=await fetch(`/?clock=${e}`,{method:"HEAD",cache:"no-store"}),r=Date.now(),i=Date.parse(t.headers.get("date"));if(Number.isFinite(i)){const t=i+500-(e+r)/2;Math.abs(t)>3e4&&(Xw=t)}}catch{}return Xw})()),ev),rv=()=>new Date(Date.now()+Xw),iv=Eo.div`
  position: fixed;
  inset: 5% 0 0;
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
`,av=Eo.div`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`,nv=Eo.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`,sv=Eo.button`
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
`,ov=Eo.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 16px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
    padding: 10px;
  }
`,lv=Eo.button`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  min-width: 0;
  min-height: ${e=>e.$decor?"220px":"110px"};
  padding: 9px;
  color: ${e=>e.$selected?"#ffb36c":"#fff"};
  background: ${e=>e.$selected?"rgba(255, 179, 108, 0.12)":"rgba(255, 255, 255, 0.035)"};
  border: 1px solid
    ${e=>e.$selected?"#ffb36c":"rgba(255, 255, 255, 0.12)"};
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.85);
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 179, 108, 0.14);
    border-color: #ffb36c;
    outline: none;
    transform: translateY(-1px);
  }

  /* У дві колонки непарна остання картка тягнеться на всю ширину */
  @media (max-width: 1199px) {
    &:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }

`,cv=Eo.span`
  min-width: 0;
  font-size: 15px;
  line-height: 1.35;
  font-weight: 600;
`,dv=Eo.span`
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`,hv=Eo.span`
  padding: 2px 7px;
  color: #ffcf9d;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 179, 108, 0.25);
  border-radius: 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  white-space: nowrap;
`,fv=Eo.span`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  color: ${e=>e.$color};
`,pv=Eo.span`
  margin-top: 2px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`,xv=Eo.span`
  font-size: 18px;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
`,uv=Eo.span`
  display: flex;
  align-items: center;
  gap: 7px;
`,gv=Eo.svg`
  flex: 0 0 auto;
  width: 25px;
  height: 25px;

  line {
    stroke-linecap: round;
  }
`,mv=Eo.span`
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$color};
  font-size: 20px;
`,yv=Eo.span`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  z-index: 30;
  display: block;
  padding: 10px 12px;
  color: #fff;
  background: rgba(18, 18, 18, 0.88);
  border: 1px solid rgba(255, 179, 108, 0.75);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  white-space: normal;
  pointer-events: none;
  font-size: 12px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  ${lv}:hover &,
  ${lv}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: opacity 0.25s ease;
  }
`,bv=Eo.span`
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 1px 6px;
  color: #ffcf9d;
  background: rgba(255, 179, 108, 0.12);
  border-radius: 10px;
`,wv=[{label:"Всесвітній час",value:"UTC",lat:51.4779,lon:0,cities:["Рейк'явік"]},{label:"Лондон",value:"Europe/London",lat:51.5072,lon:-.1276,cities:["Дублін"]},{label:"Рим",value:"Europe/Rome",lat:41.9028,lon:12.4964,cities:["Берлін","Париж","Варшава"],legacyValues:["Europe/Berlin"]},{label:"Київ",value:"Europe/Kyiv",lat:50.4501,lon:30.5234,cities:["Гельсінкі","Софія","Таллінн"]},{label:"Стамбул",value:"Europe/Istanbul",lat:41.0082,lon:28.9784,cities:["Ер-Ріяд","Найробі"]},{label:"Дубай",value:"Asia/Dubai",lat:25.2048,lon:55.2708,cities:["Баку","Тбілісі"]},{label:"Мальдіви",value:"Indian/Maldives",lat:4.1755,lon:73.5093,cities:["Ісламабад","Ташкент"],legacyValues:["Asia/Karachi"]},{label:"Алмати",value:"Asia/Almaty",lat:43.2389,lon:76.8897,cities:[]},{label:"Бангкок",value:"Asia/Bangkok",lat:13.7563,lon:100.5018,cities:["Джакарта","Ханой"]},{label:"Пекін",value:"Asia/Shanghai",lat:39.9042,lon:116.4074,cities:["Сінгапур"]},{label:"Сеул",value:"Asia/Seoul",lat:37.5665,lon:126.978,cities:["Токіо"],legacyValues:["Asia/Tokyo"]},{label:"Сідней",value:"Australia/Sydney",lat:-33.8688,lon:151.2093,cities:["Мельбурн"]},{label:"Соломонові острови",value:"Pacific/Guadalcanal",lat:-9.4456,lon:159.9729,cities:["Нумеа"],legacyValues:["Pacific/Noumea"]},{label:"Фіджі",value:"Pacific/Fiji",lat:-18.1248,lon:178.4501,cities:["Сува"]},{label:"Азорські острови",value:"Atlantic/Azores",lat:37.7412,lon:-25.6756,cities:["Понта-Делгада"]},{label:"Південна Джорджія",value:"Atlantic/South_Georgia",lat:-54.2833,lon:-36.5,cities:["Грютвікен"]},{label:"Бразилія",value:"America/Sao_Paulo",lat:-15.7975,lon:-47.8919,cities:["Бразиліа","Ріо-де-Жанейро","Сан-Паулу"],legacyValues:["America/Argentina/Buenos_Aires"]},{label:"Каракас",value:"America/Caracas",lat:10.4806,lon:-66.9036,cities:[]},{label:"Нью-Йорк",value:"America/New_York",lat:40.7128,lon:-74.006,cities:["Торонто"]},{label:"Мехіко",value:"America/Mexico_City",lat:19.4326,lon:-99.1332,cities:[]},{label:"Денвер",value:"America/Denver",lat:39.7392,lon:-104.9903,cities:["Едмонтон","Калгарі"]},{label:"Сан-Франциско",value:"America/Los_Angeles",lat:37.7749,lon:-122.4194,cities:["Ванкувер","Лос-Анджелес"]},{label:"Аляска",value:"America/Anchorage",lat:61.2181,lon:-149.9003,cities:["Анкоридж"]},{label:"Гаваї",value:"Pacific/Honolulu",lat:21.3099,lon:-157.8581,cities:["Гонолулу"]},{label:"Паго-Паго",value:"Pacific/Pago_Pago",lat:-14.2756,lon:-170.702,cities:["Алофі"]},{label:"Нью-Делі",value:"Asia/Kolkata",lat:28.6139,lon:77.209,cities:[]},{label:"Східна Австралія",value:"Australia/Brisbane",lat:-27.4698,lon:153.0251,cities:["Голд-Кост"]}],vv=(e,t)=>{try{const r=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:e.value}).formatToParts(t),i=Number(r.find(e=>"hour"===e.type)?.value),a=Number(r.find(e=>"minute"===e.type)?.value),n=`${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`,s=new Intl.DateTimeFormat("uk",{weekday:"short",day:"numeric",month:"long",timeZone:e.value}).format(t),o=((e,t)=>{const r=new Intl.DateTimeFormat("en",{timeZone:e,timeZoneName:"longOffset"}).formatToParts(t).find(e=>"timeZoneName"===e.type)?.value;if(!r||"GMT"===r)return"UTC+00:00";const i=r.match(/^GMT([+-])(\d{1,2})(?::(\d{2}))?$/);if(!i)return r.replace(/^GMT/,"UTC");const[,a,n,s="00"]=i;return`UTC${a}${n.padStart(2,"0")}:${s}`})(e.value,t),l=af(t,e.lat,e.lon),c=l.sunrise.getTime(),d=l.sunset.getTime(),h=t.getTime(),f=36e5;let p;return p=Number.isFinite(c)&&Number.isFinite(d)?Math.abs(h-c)<=f?"dawn":Math.abs(h-d)<=f?"dusk":h>c+f&&h<d-f?"day":"night":"night",{timeStr:n,dateStr:s,phase:p,utcOffset:o,clockTime:{hour:i,minute:a}}}catch{return null}},kv={dawn:{label:"Світанок",color:"#62d6e8",Icon:m},day:{label:"День",color:"#ffd54f",Icon:Vt},dusk:{label:"Сутінки",color:"#f080b5",Icon:Xe},night:{label:"Ніч",color:"#90caf9",Icon:re}},jv=({isOpen:e,onClose:t,selectedTimezone:r,setSelectedTimezone:i})=>{const[a,n]=(0,Ar.useState)(rv),s=Ww();(0,Ar.useEffect)(()=>{if(!e)return;n(rv()),tv().then(()=>n(rv()));const t=window.setInterval(()=>n(rv()),6e4);return()=>window.clearInterval(t)},[e]);const o=(0,Ar.useRef)(t);(0,Ar.useLayoutEffect)(()=>{o.current=t});const l=(0,Ar.useMemo)(()=>(0,_o.jsx)(ov,{children:wv.map(e=>{const t=r===e.value||e.legacyValues?.includes(r),n=vv(e,a),l=n?kv[n.phase]:null,c=l?.Icon,d=e.cities;return(0,_o.jsxs)(lv,{type:"button",$selected:t,$decor:s,"aria-label":`${e.label}${n?`, ${n.timeStr}, ${n.dateStr}`:""}${n?`, ${n.utcOffset}`:""}${d.length?`. Інші міста: ${d.join(", ")}`:""}`,onClick:()=>{i(e.value),Po.default.setItem("selected_timezone",e.value),o.current()},children:[s&&(0,_o.jsx)(Hw,{timezone:e,now:a}),(0,_o.jsxs)(dv,{children:[(0,_o.jsx)(cv,{children:e.label}),n&&(0,_o.jsx)(hv,{children:n.utcOffset})]}),n&&l&&c&&(0,_o.jsxs)(fv,{$color:l.color,children:[(0,_o.jsxs)(uv,{children:[(0,_o.jsxs)(gv,{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,_o.jsx)("circle",{cx:"12",cy:"12",r:"10.5",fill:"rgba(0, 0, 0, 0.2)",stroke:"currentColor",strokeWidth:"1.4"}),(0,_o.jsx)("line",{x1:"12",y1:"12",x2:"12",y2:"6",stroke:"currentColor",strokeWidth:"1.8",transform:`rotate(${n.clockTime.hour%12*30+.5*n.clockTime.minute} 12 12)`}),(0,_o.jsx)("line",{x1:"12",y1:"12",x2:"12",y2:"3.5",stroke:"currentColor",strokeWidth:"1.3",transform:`rotate(${6*n.clockTime.minute} 12 12)`}),(0,_o.jsx)("circle",{cx:"12",cy:"12",r:"1.2",fill:"currentColor"})]}),(0,_o.jsx)(xv,{children:n.timeStr})]}),(0,_o.jsx)(pv,{children:n.dateStr})]}),n&&l&&c&&(0,_o.jsx)(mv,{$color:l.color,title:l.label,"aria-label":l.label,children:(0,_o.jsx)(c,{"aria-hidden":"true"})}),(0,_o.jsxs)(yv,{"aria-hidden":"true",children:["Часовий пояс: ",e.value,d.length>0&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("br",{}),"Інші міста:",(0,_o.jsx)("br",{}),d.map(e=>(0,_o.jsx)(bv,{children:e},e))]})]})]},e.value)})}),[a,r,i]);return e?(0,Cc.createPortal)((0,_o.jsxs)(iv,{children:[(0,_o.jsxs)(av,{children:[(0,_o.jsx)(sv,{type:"button",onClick:t,"aria-label":"Закрити список часових поясів",children:"×"}),(0,_o.jsx)(nv,{children:"Часовий пояс"}),(0,_o.jsx)(Qw,{label:"Декор",title:"Малюнки міст і погодні ефекти (вимкніть для економії продуктивності)",accent:"#ffb36c"})]}),l]}),document.body):null},Mv=e=>!!e&&(e instanceof Blob?e.type.startsWith("video/"):"string"==typeof e&&(e.includes(".mp4")||e.includes(".webm")||e.includes(".ogg")||e.includes(".mov")||e.startsWith("data:video/")||e.startsWith("blob:"))),Sv=async e=>{if(!e)return;const t="string"==typeof e?e:e.src,r="string"==typeof e?"background":e.name||"background";if(!t)return;const i=Mv(t),a=("string"==typeof t?t.split(/[?#]/,1)[0]:"").match(/\.(webp|png|jpe?g|gif|mp4|webm|ogg|mov)$/i)?.[0],n=t instanceof Blob?{"image/jpeg":".jpg","image/png":".png","image/webp":".webp","video/mp4":".mp4","video/webm":".webm","video/ogg":".ogg"}[t.type]:null,s=a||n||(i?".mp4":".webp"),o=r.replace(/[/\\?%*:|"<>]/g,"-").trim()||"background",l=/\.(webp|png|jpe?g|gif|mp4|webm|ogg|mov)$/i.test(o)?o:`${o}${s}`,c=Ym.loading("Завантаження файлу...",{id:"bg-download"});try{let e;if(t instanceof Blob)e=t;else{const r=await fetch(t);if(!r.ok)throw new Error(`HTTP error ${r.status}`);e=await r.blob()}const r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=l,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(r),1500),Ym.success(`Збережено: ${l}`,{id:c})}catch(d){console.warn("Blob fetch download failed, using direct download:",d);try{const e=document.createElement("a");e.href=t,e.download=l,e.target="_blank",e.rel="noopener noreferrer",document.body.appendChild(e),e.click(),document.body.removeChild(e),Ym.success(`Відкрито для скачування: ${l}`,{id:c})}catch(h){Ym.error("Не вдалося скачати файл",{id:c})}}},$v=e=>{const t=[...e];for(let r=t.length-1;r>0;r--){const e=Math.floor(Math.random()*(r+1));[t[r],t[e]]=[t[e],t[r]]}return t},Dv=Fo`
  from { opacity: 0; }
  to { opacity: 1; }
`,Cv=Fo`
  from { opacity: 1; }
  to { opacity: 0; }
`,Lv=Fo`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Av=Fo`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,zv=Eo.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 6, 14, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  animation: ${e=>e.$isClosing?Cv:Dv} 0.3s ease-out forwards;
`,Iv=Eo.div`
  background: linear-gradient(145deg, rgba(16, 20, 32, 0.97) 0%, rgba(8, 10, 18, 0.98) 100%);
  padding: 20px;
  border-radius: 18px;
  width: 95%;
  max-width: 1240px;
  max-height: 88vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid rgba(255, 179, 108, 0.35);
  color: white;
  position: relative;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 35px rgba(255, 179, 108, 0.12);
  animation: ${e=>e.$isClosing?Av:Lv} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.85) rgba(255, 255, 255, 0.05);
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.03); border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%); border-radius: 10px; }
`,Ev=Eo.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(220, 38, 38, 0.85);
  backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover { background: #ef4444; transform: scale(1.15); box-shadow: 0 0 10px rgba(239, 68, 68, 0.5); }
`,Nv=Eo.button`
  position: absolute;
  top: 6px;
  right: 36px;
  background: rgba(255, 179, 108, 0.9);
  backdrop-filter: blur(4px);
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover { background: #ffa852; transform: scale(1.15); box-shadow: 0 0 10px rgba(255, 179, 108, 0.5); }
`,Rv=Eo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  color: #ffb36c;
  text-align: center;
  padding: 4px 6px;
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  z-index: 4;
`,Tv=Eo.div`
  position: absolute;
  bottom: ${e=>e.$hasSlots?"20px":"0"};
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 70%, transparent 100%);
  color: white;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 5;
`,Fv=Eo.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 179, 108, 0.15);
  padding: 8px 10px;
  border-radius: 10px;
  transition: all 0.2s ease;
  &:hover { background: rgba(255, 255, 255, 0.07); border-color: rgba(255, 179, 108, 0.35); }
  label { font-size: 11px; font-weight: 700; color: #ffc996; display: flex; align-items: center; gap: 4px; }
  input[type="range"] { accent-color: #ffb36c; cursor: pointer; }
`,Pv=Eo.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: stretch;
  @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1200px) { grid-template-columns: repeat(4, 1fr); }
`,Vv=Eo.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 2px;
`,_v=Eo.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${e=>e.$active?"#ffb36c":"rgba(255, 255, 255, 0.1)"};
  box-shadow: ${e=>e.$active?"0 0 16px rgba(255, 179, 108, 0.5), inset 0 0 0 1px #ffb36c":"0 4px 12px rgba(0, 0, 0, 0.35)"};
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: #0d0f19;
  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${e=>e.$active?"#ffb36c":"rgba(255, 179, 108, 0.6)"};
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 179, 108, 0.25);
    ${Tv}, ${Rv} { opacity: 1; }
  }
`,Ov=Eo.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
  display: block;
`,Bv=Eo.div`
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
  pointer-events: none;
  & > * { pointer-events: auto; }
`,Hv=Eo.button`
  background: rgba(10, 12, 22, 0.75);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  font-size: 13px;
  color: ${e=>e.$color||"#fff"};
  font-weight: 900;
  transition: all 0.2s ease;
  &:hover { transform: scale(1.15); background: rgba(18, 22, 38, 0.95); border-color: #ffb36c; box-shadow: 0 0 10px rgba(255, 179, 108, 0.3); }
`,qv=Eo.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(8, 10, 18, 0.85);
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  z-index: 7;
`,Kv=Eo.button`
  flex: 1;
  background: ${e=>e.$active?"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)":"transparent"};
  color: ${e=>e.$active?"#000":"#ccc"};
  border: none;
  padding: 3px 2px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: ${e=>e.$active?"#000":"#fff"};
    background: ${e=>e.$active?"linear-gradient(135deg, #ffc48c 0%, #ffa047 100%)":"rgba(255, 179, 108, 0.2)"};
  }
`,Zv=Eo.div`
  position: sticky;
  bottom: -20px;
  z-index: 20;
  flex-shrink: 0;
  margin: 4px -20px -20px;
  border: 2px dashed rgba(255, 179, 108, 0.4);
  padding: 16px 20px;
  text-align: center;
  border-radius: 14px;
  cursor: pointer;
  color: #ddd;
  font-size: 13px;
  font-weight: 500;
  background: rgba(10, 14, 26, 0.98);
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  &:hover { background: rgba(255, 179, 108, 0.06); border-color: #ffb36c; color: #fff; box-shadow: 0 0 15px rgba(255, 179, 108, 0.15); }
`,Uv=Eo.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 38px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 179, 108, 0.55);
  border-radius: 8px;
  color: #17120d;
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  &:disabled { cursor: wait; opacity: 0.65; }
`,Jv=Eo.button`
  background: rgba(255, 179, 108, 0.1);
  color: ${e=>e.$danger?"#ff6b6b":"#ffb36c"};
  border: 1px solid ${e=>e.$danger?"rgba(255, 107, 107, 0.3)":"rgba(255, 179, 108, 0.3)"};
  border-radius: 8px;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover { background: ${e=>e.$danger?"rgba(255, 107, 107, 0.25)":"rgba(255, 179, 108, 0.25)"}; transform: translateY(-1px); box-shadow: 0 4px 12px ${e=>e.$danger?"rgba(255, 107, 107, 0.2)":"rgba(255, 179, 108, 0.2)"}; }
  &:active { transform: translateY(0); }
`,Wv=Eo.input`
  padding: 7px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 179, 108, 0.3);
  background: rgba(255, 255, 255, 0.04);
  color: white;
  width: 100%;
  max-width: 320px;
  font-size: 12px;
  outline: none;
  transition: all 0.2s ease;
  &::placeholder { color: #8a8d9b; }
  &:focus { background: rgba(255, 255, 255, 0.1); border-color: #ffb36c; box-shadow: 0 0 12px rgba(255, 179, 108, 0.25); }
`,Gv=Eo.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 179, 108, 0.35), transparent);
  margin: 8px 0;
  width: 100%;
`,Yv=Eo.h3`
  font-weight: 700;
  color: #ffb36c;
  margin: 4px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.3px;
`,Qv=Eo.button`
  width: 100%;
  padding: 8px;
  background: ${e=>e.isDarkMode?"black":"white"};
  transition: background-color 0.3s ease;
  color: ${e=>e.isDarkMode?"white":"black"};
  font-weight: bold;
  cursor: ${e=>e.disabled?"default":"pointer"};
  font-size: 13px;
  &:hover { background: ${e=>e.isDarkMode?"#220150":"#ffcc00"}; }
`,Xv=({bg:e,onClose:t,onDownload:r})=>{const[i,a]=(0,Ar.useState)(null);Ar.useEffect(()=>{if(e.src instanceof Blob){const t=URL.createObjectURL(e.src);return a(t),()=>URL.revokeObjectURL(t)}a(null)},[e.src]),Ar.useEffect(()=>{const e=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t]);const n=e.src instanceof Blob?i:e.src,s={background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"8px",width:"40px",height:"40px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"};return(0,Cc.createPortal)((0,_o.jsxs)("div",{role:"dialog","aria-modal":"true","aria-label":e.name?`Перегляд фону: ${e.name}`:"Перегляд фону",onClick:t,style:{position:"fixed",inset:0,background:"#000",zIndex:3e5,display:"flex",alignItems:"center",justifyContent:"center"},children:[n&&(Mv(e.src)?(0,_o.jsx)("video",{src:n,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,onClick:e=>e.stopPropagation(),style:{width:"100%",height:"100%",objectFit:"contain"}}):(0,_o.jsx)("img",{src:n,alt:e.name,onClick:e=>e.stopPropagation(),style:{width:"100%",height:"100%",objectFit:"contain"}})),(0,_o.jsxs)("div",{style:{position:"absolute",top:"12px",right:"12px",display:"flex",gap:"8px"},children:[(0,_o.jsx)("button",{onClick:t=>{t.stopPropagation(),r(e)},style:s,"aria-label":"Скачати",children:(0,_o.jsx)(Oe,{})}),(0,_o.jsx)("button",{onClick:t,style:s,"aria-label":"Закрити",children:(0,_o.jsx)(Kt,{})})]})]}),document.body)},ek=Ar.memo(({bg:e,onClick:t})=>{const r=(0,Ar.useRef)(null),[i,a]=(0,Ar.useState)(null);Ar.useEffect(()=>{if(e?.src instanceof Blob){const t=URL.createObjectURL(e.src);return a(t),()=>URL.revokeObjectURL(t)}a(null)},[e?.src]);const n=e?.src instanceof Blob?i:"string"==typeof e?.src?e.src:void 0,[s,o]=(0,Ar.useState)(!1);Ar.useEffect(()=>{const e=r.current;if(!e||s)return;if("undefined"==typeof IntersectionObserver)return void o(!0);const t=new IntersectionObserver(([e])=>{e.isIntersecting&&(o(!0),t.disconnect())},{rootMargin:"200px"});return t.observe(e),()=>t.disconnect()},[s]);const l=n&&s?`${n}#t=0.1`:void 0;return(0,_o.jsx)("video",{ref:r,src:l,preload:s?"metadata":"none",muted:!0,playsInline:!0,style:{width:"100%",aspectRatio:"3/2",objectFit:"cover",cursor:"pointer",background:"#111"},onMouseEnter:()=>{if(s||o(!0),r.current&&l){"auto"!==r.current.preload&&(r.current.preload="auto");const e=r.current.play();void 0!==e&&e.catch(()=>{})}},onMouseLeave:()=>{r.current&&(r.current.pause(),r.current.currentTime=.1)},onClick:t})}),tk={[pc]:{src:pc},[xc]:{src:xc}},rk=({isOpen:e,isClosing:t,onClose:r,onReset:i,isDarkMode:a,user:n,heroBg:s,heroBg2:o,heroBg3:l,setHeroBg:c,setHeroBg2:d,setHeroBg3:h,customHeroBgs:f=[],setCustomHeroBgs:p,heroBgMode:x,setHeroBgMode:u,bgRatings:g,setBgRatings:m,slideshowInterval:y,setSlideshowInterval:b,filterCategory:w,setFilterCategory:v,heroBgBlur:k,setHeroBgBlur:j,heroBgPixelation:M,setHeroBgPixelation:S,activeLayer:$,setActiveLayer:D,randomBgsList:C,setRandomBgsList:A,randomCurrentIndex:z,setRandomCurrentIndex:I,hills:E})=>{const[N,R]=(0,Ar.useState)(""),[T,F]=(0,Ar.useState)("az"),[P,V]=(0,Ar.useState)(300),[_,B]=(0,Ar.useState)(""),[H,q]=(0,Ar.useState)([]),[K,Z]=(0,Ar.useState)("idle"),[U,W]=(0,Ar.useState)(1),[G,Y]=(0,Ar.useState)(null),Q=(0,Ar.useRef)(null),X=(0,Ar.useMemo)(()=>[...bc,...f||[]],[f]),ee=e=>!bc.some(t=>t.src===e),te=(0,Ar.useCallback)((e,t=1)=>{const r=C.findIndex(t=>t.src===e);if("random"===x)return 2==(2===$?2:1)?d(e):c(e),void(-1!==r&&I(r));2===t?d(e):3===t?h(e):c(e)},[$,x,C,c,d,h,I]),re=async(e=1)=>{const t=_.trim();if(t&&"loading"!==K){Z("loading");try{const r=await(async e=>{try{const t=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(e)}`);if(!t.ok)throw new Error(`Translation failed: ${t.status}`);return(await t.json())[0].map(e=>e[0]).join("")}catch(t){return console.error("Pixabay query translation failed:",t),e}})(t),i=new URLSearchParams({key:"50977795-feb18de71b048a02e0c824e54",q:r,image_type:"photo",per_page:"12",page:String(e),safesearch:"true"}),a=await fetch(`https://pixabay.com/api/?${i}`);if(!a.ok)throw new Error(`Pixabay request failed: ${a.status}`);const n=((await a.json()).hits||[]).map(e=>({id:e.id,previewURL:e.previewURL,largeImageURL:e.largeImageURL,name:e.tags||t,source:"Pixabay"}));q(t=>1===e?n:[...t,...n]),W(e),Z(n.length?"idle":"no-results")}catch(r){console.error("Pixabay image search failed:",r),Z("error"),Ym.error("Не вдалося виконати пошук Pixabay. Спробуйте ще раз.")}}},ie=async e=>{if(!e)return;const t=e.type.startsWith("image/"),r=e.type.startsWith("video/");if(!t&&!r)return;try{const e=`hero_cards_${n?.uid||"guest"}_${(new Date).toISOString().split("T")[0]}`;if(Number(await Po.default.getItem(e)||0)>=50)return void alert("Ліміт досягнуто — не більше 50 карток на добу.")}catch(a){console.error("Failed to check hero daily limit:",a)}if(r){if(e.size>20971520)return void alert("Відео занадто велике! Максимум 20мб для стабільності.");p(t=>[{src:e,name:e.name,category:"Ваші відео"},...t]),c(e);try{const e=`hero_cards_${n?.uid||"guest"}_${(new Date).toISOString().split("T")[0]}`,t=Number(await Po.default.getItem(e)||0);await Po.default.setItem(e,t+1)}catch(a){console.error("Failed to update hero uploaded count:",a)}return}const i=new FileReader;i.onload=t=>{const r=new Image;r.src=t.target.result,r.onload=()=>{const t=document.createElement("canvas"),i=1200/r.width;t.width=1200,t.height=r.height*i,t.getContext("2d").drawImage(r,0,0,t.width,t.height),t.toBlob(async t=>{try{const e=`hero_cards_${n?.uid||"guest"}_${(new Date).toISOString().split("T")[0]}`,t=Number(await Po.default.getItem(e)||0);if(t>=50)return void alert("Ліміт досягнуто — не більше 50 карток на добу.");await Po.default.setItem(e,t+1)}catch(a){console.error("Failed to update hero uploaded count:",a)}p(r=>[{src:t,name:e.name,category:"Ваші картинки"},...r]),c(t)},"image/jpeg",.7)}},i.readAsDataURL(e)},ae=[...(X||[]).filter(e=>{const t="all"===w||("custom"===w?ee(e.src):e.category===w),r=(e.name||"").toLowerCase().includes(N.toLowerCase());return t&&r})].sort((e,t)=>"za"===T?(t.name||"").localeCompare(e.name||""):(e.name||"").localeCompare(t.name||"")),ne=ae.slice(0,P);return e?(0,_o.jsx)(zv,{$isClosing:t,onClick:r,children:(0,_o.jsxs)(Iv,{$isClosing:t,onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px",borderBottom:"1px solid rgba(255, 179, 108, 0.2)"},children:[(0,_o.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:(0,_o.jsxs)("div",{children:[(0,_o.jsx)("h2",{style:{margin:0,fontSize:"16px",fontWeight:"700",background:"linear-gradient(90deg, #ffb36c 0%, #ffe3b8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"0.4px"},children:"Налаштування фону та вигляду"}),(0,_o.jsx)("span",{style:{fontSize:"11px",color:"#8a8d9b"},children:"Персоналізуйте теми, слайд-шоу та візуальні ефекти"})]})}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,_o.jsxs)(Jv,{onClick:i,children:[(0,_o.jsx)(ye,{})," Скинути"]}),(0,_o.jsxs)(Jv,{$danger:!0,onClick:r,children:[(0,_o.jsx)(Kt,{})," Закрити"]})]})]}),(0,_o.jsxs)(Pv,{children:[(0,_o.jsxs)(Fv,{children:[(0,_o.jsxs)("label",{children:[(0,_o.jsx)(bt,{})," Режим фону:"]}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[(0,_o.jsxs)("select",{value:x,onChange:e=>{if(u(e.target.value),"random"===e.target.value){const e=$v(X);A(e),I(0),e[0]&&te(e[0].src)}D(1)},style:{background:"rgba(10, 14, 26, 0.95)",color:"#fff",fontSize:"12px",fontWeight:"500",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",padding:"4px 6px",flex:1,outline:"none"},children:[(0,_o.jsx)("option",{value:"static",children:"Статичний (1 фото)"}),(0,_o.jsx)("option",{value:"slideshow-2",children:"Слайд-шоу (2 фото)"}),(0,_o.jsx)("option",{value:"slideshow-3",children:"Слайд-шоу (3 фото)"}),(0,_o.jsx)("option",{value:"random",children:"Випадковий (усі фото)"})]}),"random"===x&&(0,_o.jsx)(GM,{content:"Перемішати та скинути чергу",isDarkMode:a,children:(0,_o.jsx)("button",{onClick:()=>{const e=$v(X);A(e),I(0),e[0]&&(te(e[0].src),D(1))},"aria-label":"Перемішати та скинути чергу",style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",border:"none",borderRadius:"6px",color:"#000",padding:"2px 8px",cursor:"pointer",fontWeight:"bold",fontSize:"11px",whiteSpace:"nowrap"},children:(0,_o.jsx)(De,{})})})]})]}),("slideshow-2"===x||"slideshow-3"===x||"random"===x)&&(0,_o.jsxs)(Fv,{children:[(0,_o.jsxs)("label",{children:[(0,_o.jsx)(ft,{})," Інтервал: ",Math.floor(y/60),"хв",y%60>0?` ${y%60}с`:""]}),(0,_o.jsx)("input",{type:"range",min:"60",max:"300",step:"5",value:y,onChange:e=>b(parseInt(e.target.value))})]}),(0,_o.jsxs)(Fv,{children:[(0,_o.jsxs)("label",{children:[(0,_o.jsx)(nr,{})," Розмиття: ",k.toFixed(1),"px"]}),(0,_o.jsx)("input",{type:"range",min:"0",max:"20",step:"0.5",value:k,onChange:e=>j(parseFloat(e.target.value))})]}),(0,_o.jsxs)(Fv,{children:[(0,_o.jsxs)("label",{children:[(0,_o.jsx)(L,{})," Пікселізація: ",M.toFixed(1)]}),(0,_o.jsx)("input",{type:"range",min:"0",max:"20",step:"0.2",value:M,onChange:e=>S(parseFloat(e.target.value))})]})]}),(0,_o.jsx)(Gv,{}),(0,_o.jsxs)(Yv,{children:[(0,_o.jsx)(bt,{})," Бібліотека зображень"]}),(0,_o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),re(1)},style:{display:"flex",flexWrap:"wrap",gap:8},children:[(0,_o.jsx)(Wv,{"aria-label":"Пошук фонів на Pixabay",placeholder:"Пошук зображень на Pixabay...",value:_,onChange:e=>B(e.target.value),style:{flex:"1 1 240px"}}),(0,_o.jsxs)(Uv,{type:"submit",disabled:"loading"===K,children:[(0,_o.jsx)(J,{}),"loading"===K?"Шукаємо...":"Pixabay"]})]}),"no-results"===K&&(0,_o.jsx)("span",{style:{color:"#c5c8d0",fontSize:12},children:"Нічого не знайдено. Спробуйте інший запит."}),"error"===K&&(0,_o.jsx)("span",{role:"alert",style:{color:"#ff8a80",fontSize:12},children:"Пошук не вдався. Спробуйте ще раз."}),H.length>0&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(105px, 1fr))",gap:8},children:H.map(e=>(0,_o.jsxs)("button",{type:"button",onClick:()=>(e=>{const t=e.largeImageURL||e.previewURL,r=f.find(r=>r.id===e.id||r.src===t);r||p(r=>[{id:`pixabay-${e.id}`,src:t,name:e.name,category:"Ваші картинки",source:e.source},...r]),te(r?.src||t),Ym.success("Фон встановлено.")})(e),title:`Встановити фон: ${e.name}`,style:{position:"relative",aspectRatio:"1",overflow:"hidden",padding:0,border:"1px solid rgba(255, 179, 108, 0.4)",borderRadius:8,background:"#10131b",cursor:"pointer"},children:[(0,_o.jsx)("img",{src:e.previewURL,alt:e.name,loading:"lazy",style:{display:"block",width:"100%",height:"100%",objectFit:"cover"}}),(0,_o.jsx)("span",{style:{position:"absolute",inset:"auto 0 0",padding:"4px",overflow:"hidden",color:"#fff",background:"rgba(0,0,0,.72)",fontSize:10,textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.name})]},e.id))}),H.length===12*U&&(0,_o.jsx)(Uv,{type:"button",disabled:"loading"===K,onClick:()=>re(U+1),children:"loading"===K?"Завантажуємо...":"Ще з Pixabay"})]}),(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[(0,_o.jsx)(Wv,{placeholder:"Фільтр наявних фонів за назвою...",value:N,onChange:e=>{R(e.target.value),V(300)}}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,_o.jsx)("label",{style:{fontSize:"12px",color:"#ffc996",fontWeight:"600"},children:"Категорія:"}),(0,_o.jsxs)("select",{value:w,onChange:e=>v(e.target.value),style:{background:"rgba(10, 14, 26, 0.95)",fontSize:"12px",color:"#fff",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",padding:"4px 8px",outline:"none",cursor:"pointer"},children:[(0,_o.jsx)("option",{value:"all",children:"Усі зображення"}),(0,_o.jsx)("option",{value:"Природа та Стихії",children:"Природа та Стихії"}),(0,_o.jsx)("option",{value:"Фентезі та Легенди",children:"Фентезі та Легенди"}),(0,_o.jsx)("option",{value:"Темрява та Містика",children:"Темрява та Містика"}),(0,_o.jsx)("option",{value:"custom",children:"Ваші зображення та відео"})]})]}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,_o.jsx)("label",{style:{fontSize:"12px",color:"#ffc996",fontWeight:"600"},children:"Сортувати:"}),(0,_o.jsxs)("select",{value:T,onChange:e=>F(e.target.value),style:{background:"rgba(10, 14, 26, 0.95)",color:"#fff",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",fontSize:"12px",padding:"4px 8px",outline:"none",cursor:"pointer"},children:[(0,_o.jsx)("option",{value:"az",children:"Назва А-Я"}),(0,_o.jsx)("option",{value:"za",children:"Назва Я-А"})]})]})]})]}),(0,_o.jsx)(Vv,{children:ne.map((e,t)=>{const r=g[e.src]||0,i=C.findIndex(t=>t.src===e.src),n=tk[e.src];return(0,_o.jsxs)(_v,{$active:s===e.src||o===e.src,children:[(0,_o.jsxs)(Bv,{children:[(0,_o.jsx)(Hv,{$color:2===r?"gold":1===r?"#ff4d4d":"white",onClick:()=>{return t=e.src,void m(e=>{const r=((e[t]||0)+1)%3;return{...e,[t]:r}});var t},children:2===r?"💛":1===r?"❤️":"🤍"}),(0,_o.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,_o.jsx)(GM,{content:"На весь екран",isDarkMode:a,children:(0,_o.jsx)(Hv,{$color:"#aef","aria-label":"Відкрити на весь екран",onClick:t=>{t.stopPropagation(),Y(e)},children:(0,_o.jsx)(O,{})})}),(0,_o.jsx)(GM,{content:"Скачати файл фону",isDarkMode:a,children:(0,_o.jsx)(Hv,{$color:"#ffda79","aria-label":"Скачати фон",title:"Завантажити фон",onClick:t=>{t.stopPropagation(),Sv(e)},children:(0,_o.jsx)(Oe,{})})})]})]}),ee(e.src)&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(Nv,{onClick:t=>{t.stopPropagation();const r=window.prompt("Введіть нову назву для цих шпалер:",e.name);r&&p(t=>t.map(t=>t.src===e.src?{...t,name:r}:t))},"aria-label":"Редагувати назву",children:"✎"}),(0,_o.jsx)(Ev,{onClick:t=>{t.stopPropagation(),window.confirm(`Видалити шпалери "${e.name}"?`)&&(p(t=>t.filter(t=>t.src!==e.src)),m(t=>{const r={...t};return delete r[e.src],r}),s===e.src&&c(E),o===e.src&&d(E))},"aria-label":"Видалити",children:"×"})]}),e.author&&(0,_o.jsxs)(Rv,{children:[(0,_o.jsx)("div",{style:{fontWeight:"bold"},children:e.author}),e.source&&(0,_o.jsx)("div",{children:e.source})]}),(0,_o.jsxs)(Tv,{$hasSlots:"slideshow-2"===x||"slideshow-3"===x,children:["random"===x&&-1!==i&&(0,_o.jsxs)("span",{style:{color:i===z?"#6cffe4":"#ffb36c",marginRight:"6px",fontWeight:"bold",textShadow:i===z?"0 0 8px #6cffe4":"none"},children:["#",i+1," ",i===z&&"(Зараз)"]}),e.name]}),Mv(e.src)?(0,_o.jsx)(ek,{bg:e,onClick:()=>te(e.src)}):(0,_o.jsx)(Ov,{src:n?.src||e.src,loading:"lazy",onClick:()=>te(e.src),title:e.name}),"slideshow-2"===x&&(0,_o.jsxs)(qv,{children:[(0,_o.jsx)(Kv,{$active:s===e.src,onClick:()=>te(e.src,1),children:"Слот 1"}),(0,_o.jsx)(Kv,{$active:o===e.src,onClick:()=>te(e.src,2),children:"Слот 2"})]}),"slideshow-3"===x&&(0,_o.jsxs)(qv,{children:[(0,_o.jsx)(Kv,{$active:s===e.src,onClick:()=>te(e.src,1),children:"Слот 1"}),(0,_o.jsx)(Kv,{$active:o===e.src,onClick:()=>te(e.src,2),children:"Слот 2"}),(0,_o.jsx)(Kv,{$active:l===e.src,onClick:()=>te(e.src,3),children:"Слот 3"})]})]},t)})}),ae.length>P&&(0,_o.jsx)(Qv,{onClick:()=>V(e=>e+300),children:"Завантажити ще"}),(0,_o.jsx)(Gv,{}),(0,_o.jsxs)(Zv,{onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),ie(e.dataTransfer.files[0])},onClick:()=>Q.current?.click(),children:[(0,_o.jsx)(_t,{size:24,"aria-hidden":"true"}),(0,_o.jsxs)("div",{children:[(0,_o.jsx)("span",{style:{color:"#ffb36c",fontWeight:"bold"},children:"Перетягніть сюди"})," картинку або відео"]}),(0,_o.jsx)("span",{style:{fontSize:"11px",color:"#8a8d9b"},children:"або натисніть для вибору файлу з вашого пристрою"}),(0,_o.jsx)("input",{type:"file",ref:Q,hidden:!0,accept:"image/*,video/*",onChange:e=>{ie(e.target.files[0]),e.target.value=""}})]}),G&&(0,_o.jsx)(Xv,{bg:G,onClose:()=>Y(null),onDownload:Sv})]})}):null},ik=Object.assign({"./images/timezones/america_anchorage.svg":Ob,"./images/timezones/america_caracas.svg":Bb,"./images/timezones/america_denver.svg":Hb,"./images/timezones/america_los_angeles.svg":qb,"./images/timezones/america_mexico_city.svg":Kb,"./images/timezones/america_new_york.svg":Zb,"./images/timezones/america_sao_paulo.svg":Ub,"./images/timezones/asia_almaty.svg":Jb,"./images/timezones/asia_bangkok.svg":Wb,"./images/timezones/asia_dubai.svg":Gb,"./images/timezones/asia_kolkata.svg":Yb,"./images/timezones/asia_seoul.svg":Qb,"./images/timezones/asia_shanghai.svg":Xb,"./images/timezones/atlantic_azores.svg":ew,"./images/timezones/atlantic_south_georgia.svg":tw,"./images/timezones/australia_brisbane.svg":rw,"./images/timezones/australia_sydney.svg":iw,"./images/timezones/europe_istanbul.svg":aw,"./images/timezones/europe_kyiv.svg":nw,"./images/timezones/europe_london.svg":sw,"./images/timezones/europe_rome.svg":ow,"./images/timezones/indian_maldives.svg":lw,"./images/timezones/pacific_fiji.svg":cw,"./images/timezones/pacific_guadalcanal.svg":dw,"./images/timezones/pacific_honolulu.svg":hw,"./images/timezones/pacific_pago_pago.svg":fw,"./images/timezones/utc.svg":pw}),ak=e=>`fill:color-mix(in srgb,${e},var(--shade) var(--night))`,nk=(e,t,r,i,a,n=0)=>`<rect x="${e}" y="${t}" width="${r}" height="${i}"${n?` rx="${n}"`:""} style="${ak(a)}"/>`,sk=(e,t)=>`<path d="${e}" style="${ak(t)}"/>`,ok=(e,t,r,i)=>`<circle cx="${e}" cy="${t}" r="${r}" style="${ak(i)}"/>`,lk=(e,t,r,i,a)=>`<ellipse cx="${e}" cy="${t}" rx="${r}" ry="${i}" style="${ak(a)};stroke:none"/>`,ck=(e,t,r=1.2)=>`<path d="${e}" style="fill:none;stroke:color-mix(in srgb,${t},var(--shade) var(--night));stroke-width:${r};stroke-linecap:round"/>`,dk=(e,t=170)=>`<rect x="-20" y="${t}" width="440" height="${240-t}" style="${ak(e)};stroke:none"/>`,hk=(e,t="#4f8fc0")=>dk(t,e)+ck(`M20 ${e+12}h40M120 ${e+22}h50M240 ${e+10}h45M320 ${e+26}h50`,"#cfe6f7",1.4),fk=(e,t,r,i,a,n,s=6,o=8,l=.8)=>{let c="";for(let d=0;d<i;d++)for(let i=0;i<r;i++){c+=`<rect class="win${(7*d+3*i+e)%5==0?" off":""}" x="${e+i*a}" y="${t+d*n}" width="${s}" height="${o}" rx="${l}"/>`}return c},pk=e=>`<g class="sway">${e}</g>`,xk=(e,t=22,r="#2f6b3a")=>pk(lk(e,170-t/2,t/4.5,t/2,r)),uk=(e,t=11,r="#3f7d3f")=>pk(nk(e-1.5,158,3,12,"#6b4a2e")+ok(e,152,t,r)),gk=e=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round">${e}</g></svg>`,mk=gk(dk("#7fb05a")+hk(186,"#5a8fb0")+nk(110,104,180,66,"#b5523b")+ck("M110 120h180M110 140h180","#efe3d0",1.6)+fk(122,126,9,2,19,18,7,9)+nk(92,70,36,100,"#b5523b")+nk(272,70,36,100,"#b5523b")+nk(182,58,36,112,"#b5523b")+ck("M92 90h36M92 112h36M272 90h36M272 112h36M182 80h36M182 104h36","#efe3d0",1.6)+sk("M88 70q22 -34 44 0z","#3f7d5a")+sk("M268 70q22 -34 44 0z","#3f7d5a")+sk("M178 58q22 -36 44 0z","#3f7d5a")+nk(198,32,4,10,"#3f7d5a")+fk(104,80,2,1,8,0,6,9)+fk(284,80,2,1,8,0,6,9)+fk(194,70,2,1,8,0,6,9)+xk(30,34)+xk(52,26)+xk(352,30)+xk(372,38)),yk=gk(dk("#cfc6b2")+nk(14,112,100,58,"#d8d2c4")+fk(22,122,6,3,15,15,7,9)+nk(301,40,6,72,"#c9ccd2")+nk(303,12,2,28,"#d9442e")+ok(304,56,11,"#b8bec8")+ck("M293 56h22","#8a919c",1)+nk(286,112,100,58,"#d8d2c4")+fk(294,122,6,3,15,15,7,9)+nk(126,112,148,6,"#e6d7b0")+[134,156,178,212,234,256].map(e=>nk(e,118,10,52,"#eadcb6")).join("")+nk(122,98,156,14,"#e6d7b0")+ck("M126 105h148","#c9b88f",1)+nk(160,80,80,18,"#e6d7b0")+sk("M182 80l6 -12h8l2 -8h6l2 8h8l6 12z","#4f7d6a")+xk(118,20)+xk(282,20)),bk=gk(dk("#8fb36a")+nk(-10,120,120,50,"#ebdfc4")+sk("M-10 120l8 -14h104l8 14z","#6f7f8f")+fk(2,128,7,3,15,14,7,9)+sk("M38 170L68 134L98 170Z","#9fc6dc")+ck("M68 134V170M53 152h30M45 161h46M68 134L52 170M68 134L84 170","#6f97b0",.8)+nk(290,120,120,50,"#ebdfc4")+sk("M290 120l8 -14h104l8 14z","#6f7f8f")+fk(300,128,7,3,15,14,7,9)+sk("M158 170Q184 112 194 40L206 40Q216 112 242 170L224 170Q210 132 200 132Q190 132 176 170Z","#8a6542")+nk(172,124,56,6,"#7a5838")+nk(186,84,28,5,"#7a5838")+nk(197,22,6,18,"#7a5838")+ck("M184 112l32 -26M216 112l-32 -26M190 76l20 -30M210 76l-20 -30","#6b4c2f",.8)+uk(140,10)+uk(260,10)),wk=(e,t,r=18)=>sk(`M${e} 170V${t+30}Q${e+r/2} ${t-6} ${e+r} ${t+30}V170Z`,"#c9a777")+ok(e+r/2,t+2,3,"#d9654b")+fk(e+r/2-2,t+40,1,4,0,18,4,9,2),vk=e=>sk(`M${e} 170V104l8 -8h56l8 8V170Z`,"#ead9bd")+sk(`M${e-2} 104l10 -10h56l10 10z`,"#b5523b")+fk(e+8,110,4,3,15,19,7,11,1)+ck(`M${e+4} 124h64M${e+4} 143h64`,"#5a4a3a",1),kk=gk(dk("#bdb3a2")+ck("M-20 186h440M-20 204h440","#a89c88",1)+vk(-6)+vk(328)+nk(126,116,148,54,"#c4a06d")+sk("M150 116l50 -26 50 26z","#b8925e")+wk(132,54)+wk(156,36)+wk(226,36)+wk(250,54)+wk(191,14)+uk(98,12,"#4f8f3f")+uk(302,12,"#4f8f3f")),jk=(e,t,r,i)=>nk(e,170-t,36,t,r)+sk(`M${e} ${170-t}l18 -18 18 18z`,i)+fk(e+6,178-t,3,Math.floor((t-14)/18),9,18,6,9),Mk=gk(dk("#bfb3a0")+jk(4,62,"#e8b84a","#a5443a")+jk(40,72,"#d9654b","#7a3a2e")+jk(76,58,"#7fae8a","#a5443a")+jk(112,76,"#e7d3a8","#7a3a2e")+jk(148,64,"#c97b9a","#a5443a")+jk(184,70,"#6fa3c7","#7a3a2e")+nk(232,100,120,70,"#c96f4a")+fk(240,112,8,3,14,18,7,10)+nk(276,46,32,54,"#c96f4a")+ok(292,64,8,"#f4ecd8")+sk("M276 46l16 -22 16 22z","#4f8f7a")+nk(290,14,4,12,"#4f8f7a")+jk(360,66,"#e8b84a","#a5443a")),Sk=(e,t,r)=>nk(e,170-r,t,r,"#f4efe4")+sk(`M${e-3} ${170-r}l${t/2+3} -12 ${t/2+3} 12z`,"#b5523b")+fk(e+t/2-3,178-r,1,1,0,0,6,7),$k=gk(sk("M-20 170Q80 80 200 96Q300 104 420 170Z","#4f8f4a")+dk("#7fb05a")+nk(150,70,100,50,"#efe8dc")+fk(160,82,6,2,15,16,6,8)+nk(140,52,28,68,"#efe8dc")+sk("M136 52l18 -26 18 26z","#b5523b")+nk(232,40,26,80,"#efe8dc")+sk("M228 40l17 -28 17 28z","#b5523b")+sk("M150 70l20 -16h60l20 16z","#b5523b")+fk(148,62,2,2,8,18,5,8)+fk(239,52,2,3,8,18,5,8)+Sk(14,34,24)+Sk(84,28,20)+Sk(286,30,22)+Sk(370,32,24)+xk(40,40,"#2f5e33")+xk(66,52,"#2f5e33")+xk(330,46,"#2f5e33")+xk(360,36,"#2f5e33")),Dk=(e,t=1)=>sk(`M${e-12*t} 170L${e-8*t} ${170-64*t}H${e+8*t}L${e+12*t} 170Z`,"#8a5a3c")+sk(`M${e-10*t} ${170-64*t}q${10*t} -14 ${20*t} 0z`,"#5a3a2a")+nk(e-4*t,170-18*t,8*t,18*t,"#3a2a20")+`<g transform="translate(${e} ${170-66*t}) rotate(20)">`+nk(-2*t,-46*t,4*t,92*t,"#efe3c8")+nk(-46*t,-2*t,92*t,4*t,"#efe3c8")+nk(2*t,-42*t,9*t,32*t,"#c9b89a")+nk(-11*t,10*t,9*t,32*t,"#c9b89a")+nk(10*t,2*t,32*t,9*t,"#c9b89a")+nk(-42*t,-11*t,32*t,9*t,"#c9b89a")+"</g>",Ck=(e,t)=>Array.from({length:20},(r,i)=>ok(8+20*i,e,3.2,t)).join(""),Lk=gk(dk("#7fb05a")+Ck(180,"#e0483e")+Ck(192,"#f2c94c")+Ck(204,"#e86aa0")+Dk(110)+Dk(300,.8)+nk(180,112,26,58,"#a5443a")+sk("M180 112v-8h4v-6h4v-6h10v6h4v6h4v8z","#a5443a")+fk(186,120,2,3,9,15,6,9)+nk(206,120,24,50,"#3f5f7a")+sk("M206 120v-6h4v-6h16v6h4v6z","#3f5f7a")+fk(211,128,2,2,8,16,6,9)),Ak=gk(sk("M-20 170Q40 104 120 102H290Q350 106 420 170Z","#c9a77a")+dk("#a8b86a")+nk(126,96,158,8,"#e9dfc8")+nk(120,104,170,4,"#d9cdb0")+Array.from({length:9},(e,t)=>nk(132+17.5*t,64,9,32,"#efe6d2")).join("")+nk(124,54,162,10,"#e9dfc8")+sk("M124 54L205 34 286 54Z","#e9dfc8")+ck("M124 59h162","#c9b88f",1)+[92,116,296,322].map((e,t)=>nk(e,152-t%2*4,22,18+t%2*4,"#f6f4ee")+nk(e+8,160,6,10,"#2f6fb0")+fk(e+3,156-t%2*4,1,1,0,0,4,4,.5)).join("")+uk(40,9,"#6f8f4a")+uk(66,7,"#6f8f4a")+uk(350,9,"#6f8f4a")),zk=(e,t)=>nk(e,t+30,22,140-t,"#5a5560")+sk(`M${e-2} ${t+30}L${e+11} ${t} ${e+24} ${t+30}Z`,"#3d3a40")+sk(`M${e-6} ${t+34}l4 -14 4 14zM${e+24} ${t+34}l4 -14 4 14z`,"#3d3a40")+fk(e+8,t+42,1,3,0,20,6,12,3),Ik=gk(hk(150,"#5a8fb0")+nk(-10,100,90,50,"#efd9b0")+sk("M-10 100l45 -20 45 20z","#b5523b")+fk(2,110,5,2,15,18,7,9)+nk(300,104,110,46,"#e8c99a")+sk("M300 104l55 -22 55 22z","#b5523b")+fk(310,114,6,2,15,16,7,9)+nk(120,100,160,50,"#e8dcc4")+fk(130,112,9,2,16,18,7,10,3)+zk(140,34)+zk(236,34)+nk(-20,150,440,8,"#a89a84")+[20,100,180,260,340].map(e=>sk(`M${e} 158h50v22q-25 -18 -50 0z`,"#a89a84")).join("")),Ek=gk(hk(156,"#4f86b0")+nk(30,112,340,44,"#efe2c6")+sk("M30 112l10 -12h320l10 12z","#a5443a")+fk(40,122,21,2,16,16,5,10,2.5)+sk("M164 100q36 -54 72 0z","#a5443a")+nk(197,58,6,16,"#a5443a")+nk(164,92,72,20,"#efe2c6")+[44,100,290,346].map(e=>nk(e,84,10,28,"#efe2c6")+sk(`M${e-2} 84l7 -18 7 18z`,"#a5443a")).join("")+nk(-20,150,440,6,"#b9ab8e")),Nk=(e,t,r)=>nk(e,160-t,34,t,r)+sk(`M${e-2} ${160-t}h38l-6 -10h-26z`,"#6b4a3a")+fk(e+6,168-t,3,Math.floor((t-10)/16),9,16,5,9),Rk=gk(hk(160,"#3f7fb0")+Nk(0,64,"#e2a34a")+Nk(34,76,"#c85a3a")+Nk(68,58,"#f0d27a")+Nk(102,70,"#d98a5a")+Nk(136,62,"#e8c49a")+nk(230,84,30,76,"#b5523b")+sk("M226 84l19 -60 19 60z","#3a3a44")+ck("M232 74l26 0M236 58h18M240 42h10","#5a5a66",1)+Nk(270,66,"#f0d27a")+Nk(304,74,"#c85a3a")+Nk(338,60,"#e2a34a")+Nk(372,70,"#d98a5a")),Tk=gk(dk("#cfd6dc")+sk("M100 170h200l-10 -12h-180z","#bfc6cc")+nk(120,92,160,66,"#f4f4f2")+sk("M150 92l50 -16 50 16z","#f4f4f2")+[130,152,174,216,238,260].map(e=>nk(e,104,8,54,"#e6e6e2")).join("")+nk(176,52,48,28,"#f4f4f2")+sk("M174 54q26 -46 52 0z","#4f9a7a")+nk(198,21,4,10,"#e0b54a")+[118,270].map(e=>nk(e,74,14,18,"#f4f4f2")+sk(`M${e-2} 76q9 -18 18 0z`,"#4f9a7a")).join("")+fk(186,60,3,1,10,0,5,10,2.5)+uk(50,12)+uk(350,12)),Fk=(e,t,r,i)=>sk(`M${e-r} ${t}q${r} -${1.6*r} ${2*r} 0z`,i)+nk(e-1.5,t-.8*r-8,3,8,"#e0b54a"),Pk=gk(dk("#b9c09a")+nk(110,118,180,52,"#efe6d2")+fk(122,130,9,2,19,18,7,11,3.5)+nk(150,92,100,26,"#efe6d2")+nk(178,68,44,24,"#efe6d2")+Fk(200,68,22,"#e0b54a")+Fk(160,92,12,"#5f9a7a")+Fk(240,92,12,"#5f9a7a")+Fk(124,118,10,"#5f9a7a")+Fk(276,118,10,"#5f9a7a")+nk(296,70,22,100,"#efe6d2")+Fk(307,70,11,"#e0b54a")+fk(304,86,1,3,0,22,6,12,3)+uk(50,13)+uk(360,11)),Vk=gk(sk("M100 170Q160 86 240 90Q300 96 340 170Z","#4f8f4a")+dk("#7fb05a")+sk("M196 92V40l12 -6 12 6v52z","#b5523b")+sk("M194 40l14 -14 14 14z","#7a3a2e")+nk(207,6,2,20,"#5a4a3a")+nk(209,6,16,4,"#f2c94c")+nk(209,10,16,4,"#3f8f4a")+nk(209,14,16,4,"#c8423a")+fk(202,50,2,2,8,18,5,9,2.5)+nk(20,120,50,50,"#f4f4f2")+nk(32,70,26,50,"#f4f4f2")+sk("M30 70l15 -22 15 22z","#7a8a9a")+fk(38,80,2,2,8,16,5,9,2.5)+nk(320,128,70,42,"#e8c99a")+sk("M320 128l35 -18 35 18z","#b5523b")+fk(328,138,4,2,15,15,7,9)+xk(120,30,"#2f5e33")+xk(280,34,"#2f5e33")),_k=(e,t=13)=>pk(nk(e-2,154,4,16,"#6b4a3a")+ok(e,148,t,"#f4a7c4")+ok(e+.7*t,152,.7*t,"#f7bdd3")),Ok=gk(sk("M40 170L170 50Q200 40 230 50L360 170Z","#6f7fa8")+sk("M150 70L170 50Q200 40 230 50L250 70Q232 64 220 74Q206 62 194 74Q182 64 168 76Z","#f4f6fa")+dk("#8fb36a")+[0,1,2,3,4].map(e=>{const t=152-20*e,r=52-7*e;return nk(80-r/2+6,t,r-12,18,"#c8423a")+sk(`M${80-r/2-6} ${t}h${r+12}l-8 -6h${-(r-4)}z`,"#3a3030")}).join("")+nk(78,56,4,16,"#3a3030")+nk(278,122,6,48,"#d9442e")+nk(326,122,6,48,"#d9442e")+sk("M266 118h78l-4 -8h-70z","#d9442e")+nk(272,130,66,5,"#d9442e")+_k(30)+_k(140,11)+_k(372)),Bk=gk(sk("M-20 170L60 70 120 120 200 50 280 116 340 76 420 170Z","#9a8f8a")+sk("M42 92L60 70 78 86M182 66L200 50 218 66M326 92L340 76 354 90","#f4f6fa")+dk("#d6c7a0")+nk(291,44,6,126,"#c9c6c0")+nk(293,12,2,32,"#c9c6c0")+sk("M278 72q16 -18 32 0q-16 9 -32 0z","#b0aca6")+fk(282,66,4,1,7,0,4,4,.5)+sk("M144 170Q170 120 182 64L218 64Q230 120 256 170L232 170Q216 124 200 120Q184 124 168 170Z","#ece7dc")+nk(178,48,44,18,"#ece7dc")+nk(188,38,24,10,"#ece7dc")+ck("M182 64l-14 106M218 64l14 106","#cfc6b4",1)+fk(184,52,4,1,9,0,5,8,2.5)+uk(60,10,"#5f8f4a")+uk(340,10,"#5f8f4a")),Hk=e=>sk(`M${e} 176Q${e+6} 160 ${e+14} 162Q${e+20} 162 ${e+24} 172L${e+30} 170L${e+36} 158L${e+43} 157L${e+44} 161L${e+38} 163L${e+33} 177L${e+29} 183V200H${e+26}V185H${e+9}V200H${e+6}V184Q${e} 182 ${e} 176Z`,"#7a4a2a"),qk=gk(hk(140,"#2f9fc4")+dk("#c27a4a",160)+sk("M34 150h66l-9 9h-50z","#6b4a2e")+sk("M66 150V108L100 146Z","#f6f4ee")+sk("M62 150V120L42 146Z","#efe6d2")+nk(204,116,56,44,"#f6f4ee")+fk(212,124,3,2,15,16,8,11,4)+nk(264,128,44,32,"#f6f4ee")+nk(264,128,44,5,"#3f8fc0")+fk(272,140,2,1,18,0,8,11,4)+nk(314,112,56,48,"#f6f4ee")+sk("M320 112q22 -30 44 0z","#f6f4ee")+nk(374,62,12,98,"#f6f4ee")+sk("M372 62l8 -16 8 16z","#3f8fc0")+fk(322,126,3,1,16,0,7,12,3.5)+pk(sk("M166 190l3 -42h4l3 42z","#5a3a22")+sk("M170 152l-12 -10M172 150l12 -10","#5a3a22")+lk(171,138,38,9,"#5f8a3a"))+Hk(30)+Hk(92)),Kk=e=>sk(`M${e} 186q0 -6 6 -6h18l2 -20l-2 -4l3 -4l2 3l2 -3l2 4q2 2 0 5l-1 3l-3 22q4 2 4 8v12h-3v-10h-4v10h-3v-10h-12v10h-3v-10h-3v10h-3z`,"#f2ead8")+ok(e+30,154,.9,"#2b1d2e"),Zk=Array.from({length:6},(e,t)=>{const r=160-10*t,i=6*t-10,a=230-14*t;return nk(i,r+6,a-i,4,"#8a8273")+nk(i,r,a-i,6,"#8fbf6a")}).join(""),Uk=e=>nk(e,90,32,20,"#a39b8a")+sk(`M${e-3} 90l19 -14 19 14z`,"#b8924e")+sk(`M${e+12} 110l2 -12h4l2 12z`,"#3a3530"),Jk={be:mk,de:yk,fr:bk,es:kk,pl:Mk,ro:$k,nl:Lk,el:Ak,cs:Ik,hu:Ek,sv:Rk,fi:Tk,bg:Pk,lt:Vk,ja:Ok,fa:Bk,so:qk,qu:gk(sk("M-20 170L40 96 90 130 150 80 210 140 260 100 330 150 420 110V170Z","#7d9aa8")+sk("M236 170Q256 104 280 44Q292 36 300 52Q312 96 340 170Z","#3f7d4a")+sk("M-20 170V108Q60 92 150 100L240 170Z","#5f8f5a")+dk("#6fa04f")+Zk+Uk(34)+Uk(80)+Uk(126)+Kk(300)+Kk(350))},Wk={uk:"europe_kyiv",en:"europe_london",it:"europe_rome",pt:"america_sao_paulo",tr:"europe_istanbul",zh:"asia_shanghai",ko:"asia_seoul",ar:"asia_dubai"},Gk=new Set(["ja","ko"]),Yk=new Set(["zh"]),Qk={fi:"snow",sv:"snow",lt:"snow",be:"snow",nl:"wind",en:"fog",ja:"wind",qu:"wind",ar:"heat",so:"heat",fa:"heat",es:"heat"},Xk={ar:{"#e3c77d":"#d89a52"}},ej={night:{top:"#050816",bot:"#1c2a4a",shade:"#070b1c",night:.62,winOn:"#ffd36b",winOff:"#262f48"},day:{top:"#4f9bf2",bot:"#bfe3ff",shade:"#1a2340",night:0,winOn:"#bfe6f7",winOff:"#bfe6f7"},dawn:{top:"#f39ac0",bot:"#ffa25c",shade:"#5a2a4a",night:.22,winOn:"#dcddb7",winOff:"#7a94a8"}},tj={top:"#8fb4d8",bot:"#e4eef7"},rj={day:{x:345,y:42,core:"#ffe066"},dawn:{x:320,y:160,core:"#ff8a3d"}},ij=[[24,18,1.1],[62,44,.8],[96,14,1.3],[138,36,.7],[176,12,1],[214,50,.9],[252,22,1.2],[296,58,.7],[338,16,1],[372,42,1.3],[118,66,.8],[232,80,.7],[44,84,.9],[356,88,.8]],aj={zh:vw,ja:kw},nj=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),sj=new Map,oj=e=>{if(sj.has(e))return sj.get(e);const t=Yk.has(e)?"night":Gk.has(e)?"dawn":"day",r=ej[t],i=Qk[e];let a=Jk[e]??ik[`./images/timezones/${Wk[e]}.svg`]??"";for(const[c,d]of Object.entries(Xk[e]??{}))a=a.replaceAll(c,d);a=a.replace(/^<svg[^>]*>/,"").replace(/<\/svg>\s*$/,"").replace(/color-mix\(in srgb,(#[0-9a-f]{6}),var\(--shade\) var\(--night\)\)/gi,(e,t)=>((e,t,r)=>{const i=nj(e),a=nj(t);return`rgb(${i.map((e,t)=>Math.round(e+(a[t]-e)*r)).join(",")})`})(t,r.shade,r.night));let n="";if("night"===t)n=`<g fill="#fff" opacity=".9">${ij.map(([e,t,r])=>`<circle cx="${e}" cy="${t}" r="${r}"/>`).join("")}</g><circle cx="62" cy="40" r="26" fill="url(#g)" opacity=".45"/><circle cx="62" cy="40" r="12" fill="#f4f1de"/><circle cx="58" cy="37" r="2.6" fill="#d9d4bb"/><circle cx="66" cy="44" r="1.8" fill="#d9d4bb"/>`;else if("snow"!==i){const e=rj[t];n=`<circle cx="${e.x}" cy="${e.y}" r="34" fill="url(#g)" opacity=".8"/><circle cx="${e.x}" cy="${e.y}" r="15" fill="${e.core}"/>`}const s="wind"===i?".sway{transform-box:fill-box;transform-origin:50% 100%;animation:s 3.6s steps(6) infinite alternate}@keyframes s{from{transform:rotate(-3deg)}to{transform:rotate(5deg)}}@media (prefers-reduced-motion:reduce){.sway{animation:none}}":"",o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><style>.win{fill:${r.winOn}}.win.off{fill:${r.winOff}}${s}</style><defs><radialGradient id="g"><stop offset="0" stop-color="#fff6c8" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></radialGradient></defs>`+n+a+"</svg>",l=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`;return sj.set(e,l),l},lj=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'><g fill='none' stroke='#fff' stroke-width='1.6' stroke-linecap='round' opacity='.5'><path d='M14 28h50q10 0 10 -6'/><path d='M170 80h60'/><path d='M60 132h40q8 0 8 6'/></g></svg>")}")`,cj=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><g fill='#fff' opacity='.9'><circle cx='18' cy='22' r='2'/><circle cx='86' cy='12' r='1.5'/><circle cx='56' cy='72' r='2.3'/><circle cx='118' cy='96' r='1.7'/><circle cx='30' cy='118' r='1.5'/></g></svg>")}")`,dj=Eo.span`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
  contain: strict;
  background: linear-gradient(180deg, var(--sky-top), var(--sky-bot));

  /* Затемнення лише в лівому верхньому куті під підписом — білий текст читається
     й на світлому небі, а сонце праворуч лишається яскравим */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    background: radial-gradient(ellipse 85% 55% at 0 0, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.25) 55%, transparent);
  }

  > img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Тайловий шар зсувається на ціле число тайлів — цикл безшовний.
     Анімується лише transform (на GPU), поза екраном усе на паузі. */
  .fx {
    position: absolute;
    top: calc(var(--dy) * -1);
    left: calc(var(--dx) * -1);
    right: calc(var(--dx) * -1);
    bottom: 0;
    background-repeat: repeat;
    animation: lang-scene-drift var(--dur) linear infinite;
  }

  .fx-snow {
    background-image: ${cj};
    --dx: 140px;
    --dy: 140px;
    --dur: 16s;
  }

  .fx-wind {
    background-image: ${lj};
    --dx: 320px;
    --dy: 0px;
    --dur: 6s;
    animation-direction: reverse;
  }

  .fx-fog {
    background-image: ${zw};
    background-size: 400px 100%;
    --dx: 400px;
    --dy: 0px;
    --dur: 45s;
    animation-direction: reverse;
  }

  .fx-fog.slow {
    --dur: 80s;
    background-position: 170px 18px;
    animation-direction: normal;
    opacity: 0.8;
  }

  /* Марево — хвилі повітря піднімаються вгору */
  .fx-heat {
    --dx: 0px;
    --dy: 60px;
    --dur: 8s;
    background-image: ${Aw};
    animation-direction: reverse;
    -webkit-mask-image: linear-gradient(transparent 35%, #000 75%);
    mask-image: linear-gradient(transparent 35%, #000 75%);
  }

  &[data-paused] .fx,
  &[data-paused] .particle {
    animation-play-state: paused;
  }

  /* Сніг: трохи білої пелени */
  &[data-climate='snow']::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(rgba(235, 242, 250, 0.1), rgba(235, 242, 250, 0.35));
  }

  @keyframes lang-scene-drift {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(var(--dx), var(--dy));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fx {
      animation: none !important;
    }
  }
`,hj=(0,Ar.memo)(({code:e})=>{const t=Yk.has(e)?"night":Gk.has(e)?"dawn":"day",r=Qk[e],i=aj[e],a=Boolean(r||i),n={...ej[t],..."snow"===r?tj:null},s=(0,Ar.useRef)(null);return(0,Ar.useEffect)(()=>{const e=s.current;if(!a||!e)return;e.dataset.paused="";const t=new IntersectionObserver(([t])=>{t.isIntersecting?delete e.dataset.paused:e.dataset.paused=""});return t.observe(e),()=>t.disconnect()},[a]),(0,_o.jsxs)(dj,{ref:s,"aria-hidden":"true","data-climate":r,style:{"--sky-top":n.top,"--sky-bot":n.bot},children:[(0,_o.jsx)("img",{src:oj(e),alt:"",decoding:"async",draggable:!1}),i&&(0,_o.jsx)(i,{}),"heat"===r&&(0,_o.jsx)("span",{className:"fx fx-heat"}),"wind"===r&&(0,_o.jsx)("span",{className:"fx fx-wind"}),"snow"===r&&(0,_o.jsx)("span",{className:"fx fx-snow"}),"fog"===r&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{className:"fx fx-fog slow"}),(0,_o.jsx)("span",{className:"fx fx-fog"})]})]})}),fj=[{regionKey:"europeNorthAmerica",languages:[{code:"uk",name:"Ukrainian",nativeName:"Українська"},{code:"en",name:"English",nativeName:"English"},{code:"be",name:"Belarusian",nativeName:"Беларуская"},{code:"de",name:"German",nativeName:"Deutsch"},{code:"fr",name:"French",nativeName:"Français"},{code:"es",name:"Spanish",nativeName:"Español"},{code:"it",name:"Italian",nativeName:"Italiano"},{code:"pl",name:"Polish",nativeName:"Polski"},{code:"ro",name:"Romanian",nativeName:"Română"},{code:"nl",name:"Dutch",nativeName:"Nederlands"},{code:"pt",name:"Portuguese",nativeName:"Português"},{code:"el",name:"Greek",nativeName:"Ελληνικά"},{code:"cs",name:"Czech",nativeName:"Čeština"},{code:"hu",name:"Hungarian",nativeName:"Magyar"},{code:"sv",name:"Swedish",nativeName:"Svenska"},{code:"fi",name:"Finnish",nativeName:"Suomi"},{code:"bg",name:"Bulgarian",nativeName:"Български"},{code:"lt",name:"Lithuanian",nativeName:"Lietuvių"}]},{regionKey:"asiaMiddleEast",languages:[{code:"zh",name:"Chinese",nativeName:"中文"},{code:"ar",name:"Arabic",nativeName:"العربية",rtl:!0},{code:"ja",name:"Japanese",nativeName:"日本語"},{code:"tr",name:"Turkish",nativeName:"Türkçe"},{code:"ko",name:"Korean",nativeName:"한국어"},{code:"fa",name:"Persian",nativeName:"فارسی",rtl:!0}]},{regionKey:"africa",languages:[{code:"so",name:"Somali",nativeName:"Soomaali"}]},{regionKey:"latinAmerica",languages:[{code:"qu",name:"Quechua",nativeName:"Runasimi"}]}].flatMap(e=>e.languages);function pj(){const{i18n:e}=o();(0,Ar.useEffect)(()=>{!function(e){const t=document.documentElement;kr.has(e)?(t.setAttribute("dir","rtl"),t.setAttribute("lang",e)):(t.setAttribute("dir","ltr"),t.setAttribute("lang",$r[e]||e)),t.classList.remove("lang-tall-script","lang-no-space","lang-rtl"),Mr.has(e)&&t.classList.add("lang-tall-script"),Sr.has(e)&&t.classList.add("lang-no-space"),kr.has(e)&&t.classList.add("lang-rtl");const r=jr[e];if(r){const i=`noto-font-${e}`;if(!document.getElementById(i)){const e=document.createElement("link");e.id=i,e.rel="stylesheet",e.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(r)}&display=swap`,document.head.appendChild(e)}t.style.setProperty("--i18n-font",`'${r}', system-ui, sans-serif`)}else t.style.removeProperty("--i18n-font")}(e.language)},[e.language])}var xj=Eo.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,uj=Eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2b2b30;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 0.15s;

  &:focus-within {
    border-color: #60cdff;
    box-shadow: 0 0 0 2px rgba(96, 205, 255, 0.15);
  }
`,gj=Eo.input`
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-family: inherit;
  flex: 1;

  &::placeholder {
    color: #7a7a80;
  }
`,mj=Eo.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;

  > * {
    grid-column: span 2;
  }

  > :nth-child(3n + 1):nth-last-child(2),
  > :nth-child(3n + 1):nth-last-child(2) + * {
    grid-column: span 3;
  }

  > :nth-child(3n + 1):last-child {
    grid-column: span 6;
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > *,
    > :nth-child(3n + 1):nth-last-child(2),
    > :nth-child(3n + 1):nth-last-child(2) + *,
    > :nth-child(3n + 1):last-child {
      grid-column: span 1;
    }

    > :nth-child(2n + 1):last-child {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;

    > *,
    > :nth-child(2n + 1):last-child {
      grid-column: auto;
    }
  }
`,yj=Eo.button`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-height: ${e=>e.$decor?"200px":"64px"};
  /* Картки поза екраном браузер не малює зовсім — прокрутка легша */
  content-visibility: auto;
  contain-intrinsic-size: auto ${e=>e.$decor?"200px":"64px"};
  padding: 9px 10px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid
    ${e=>e.$active?"#60cdff":"rgba(255, 255, 255, 0.12)"};
  box-shadow: ${e=>e.$active?"0 0 0 2px rgba(96, 205, 255, 0.35)":"none"};
  background: #2b2b30;
  transition: border-color 0.15s ease;
  text-align: start;
  font-family: inherit;
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.9),
    0 0 8px rgba(0, 0, 0, 0.6);

  &:hover {
    border-color: rgba(96, 205, 255, 0.6);
  }
`,bj=Eo.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
`,wj=Eo.div`
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
`,vj=Eo.span`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`,kj=Eo.span`
  position: relative;
  z-index: 1;
  font-size: 9px;
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  border: 1px solid rgba(255, 179, 108, 0.3);
  border-radius: 3px;
  padding: 1px 4px;
  white-space: nowrap;
  flex-shrink: 0;
`,jj=Eo.div`
  position: relative;
  z-index: 1;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #60cdff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 10px;
  color: #000;
`,Mj=Eo.div`
  font-size: 11px;
  color: #7a7a80;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 8px 12px;
  line-height: 1.5;
`,Sj=()=>{const{t:e,i18n:t}=o(),r=Ww(),[i,a]=(0,Ar.useState)(""),n=t.language?.split("-")[0]||"uk",s=(0,Ar.useMemo)(()=>{const e=i.trim().toLowerCase();return e?fj.filter(t=>t.nativeName.toLowerCase().includes(e)||t.name.toLowerCase().includes(e)||t.code.toLowerCase().includes(e)):fj},[i]);return(0,_o.jsxs)(xj,{children:[(0,_o.jsxs)(uj,{children:[(0,_o.jsx)(J,{style:{color:"#7a7a80",fontSize:"14px",flexShrink:0}}),(0,_o.jsx)(gj,{placeholder:e("settings.language.searchPlaceholder"),value:i,onChange:e=>a(e.target.value),autoComplete:"off",spellCheck:!1}),i&&(0,_o.jsx)("button",{onClick:()=>a(""),style:{background:"none",border:"none",color:"#7a7a80",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]}),(0,_o.jsx)(mj,{children:s.map(e=>{const i=n===e.code,a=function(e){return kr.has(e)}(e.code);return(0,_o.jsxs)(yj,{$active:i,$decor:r,onClick:()=>{return r=e.code,void t.changeLanguage(r);var r},title:"en"===e.code?e.nativeName:`${e.nativeName} (${e.name})`,children:[r&&(0,_o.jsx)(hj,{code:e.code}),i&&(0,_o.jsx)(jj,{children:(0,_o.jsx)(it,{})}),(0,_o.jsx)(bj,{children:(0,_o.jsxs)(wj,{children:[e.nativeName,"en"!==e.code&&(0,_o.jsxs)(vj,{children:[" (",e.name,")"]})]})}),a&&(0,_o.jsx)(kj,{children:"RTL"})]},e.code)})}),!i&&(0,_o.jsxs)(Mj,{children:["🌐 ",e("settings.language.rtlNote")]}),0===s.length&&(0,_o.jsxs)("div",{style:{color:"#7a7a80",fontSize:"13px",textAlign:"center",padding:"20px"},children:[e("settings.language.noResults"),': "',i,'"']})]})},$j=Eo.div`
  position: fixed;
  inset: 0;
  z-index: 200000;
  /* Без backdrop-filter: розмиття відео хіро під модалкою перераховувалось щокадру й гальмувало прокрутку */
  background: rgba(2, 2, 2, 0.92);
  display: flex;
  padding-top: 5vh;
`,Dj=Eo.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #1f1f23;
  border-top: 2px solid #60cdff;
  border-radius: 14px 14px 0 0;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  overflow: hidden;
`,Cj=Eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  h2 {
    flex: 1;
    margin: 0;
    font-size: inherit;
  }
`,Lj=Eo.button`
  display: flex;
  background: transparent;
  border: none;
  color: #a0a0a0;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`,Aj=Eo.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,zj=({isOpen:e,onClose:t})=>{const{t:r}=o();return(0,Ar.useEffect)(()=>{if(!e)return;const r=e=>"Escape"===e.key&&t();return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e,t]),e?(0,Cc.createPortal)((0,_o.jsx)($j,{onClick:t,children:(0,_o.jsxs)(Dj,{role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(Cj,{children:[(0,_o.jsx)(ir,{size:20}),(0,_o.jsx)("h2",{children:r("settings.language.title")}),(0,_o.jsx)(Qw,{label:r("settings.decor.label"),title:r("settings.decor.title")}),(0,_o.jsx)(Lj,{type:"button",onClick:t,"aria-label":r("common.close"),children:(0,_o.jsx)(nt,{size:20})})]}),(0,_o.jsx)(Aj,{children:(0,_o.jsx)(Sj,{})})]})}),document.body):null},Ij="data-active-overlay",Ej=new Set,Nj=!0,Rj=null,Tj=new Set,Fj=()=>{const e=(()=>{const e=document.querySelector('[aria-modal="true"]');if(e)return e;const t=window.innerWidth,r=window.innerHeight;let i=document.elementFromPoint(t/2,r/2);for(;i&&i!==document.body;i=i.parentElement){if(i.hasAttribute("data-page-bg"))return null;if("fixed"!==getComputedStyle(i).position)continue;const e=i.getBoundingClientRect();if(e.width*e.height>=t*r*.6)return i}return null})();(e=>{if(e===Rj)return;Rj?.removeAttribute(Ij),Rj=e;const t=document.documentElement;Rj?(Rj.setAttribute(Ij,""),t.setAttribute("data-overlay-open",""),document.querySelectorAll("video").forEach(e=>{e.paused||Rj.contains(e)||(e.pause(),Tj.add(e))})):(t.removeAttribute("data-overlay-open"),Tj.forEach(e=>{e.isConnected&&e.play()?.catch(()=>{})}),Tj.clear())})(e);const t=!document.hidden&&document.hasFocus()&&!e;t!==Nj&&(Nj=t,Ej.forEach(e=>e()))},Pj=()=>{let e=null;const t=()=>{e||(e=setTimeout(()=>{e=null,Fj()},150))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("visibilitychange",Fj),window.addEventListener("focus",Fj),window.addEventListener("blur",t),window.addEventListener("resize",t),Fj()};"undefined"!=typeof document&&(document.body?Pj():document.addEventListener("DOMContentLoaded",Pj,{once:!0}));var Vj=e=>(Ej.add(e),()=>Ej.delete(e)),_j=()=>Nj,Oj=()=>!0,Bj=Ar.lazy(()=>vr(()=>import("./Aihelp-BOm2XwFF.js"),__vite__mapDeps([14,1,2,3,10,11,9,12,13]))),Hj=["/assets/dragon-village-3-C94U_fqt.webp","/assets/resort-DVMunGKB.webp","/assets/nitseron-alt-Cgct1JDj.webp","/assets/small-but-confident-mx7SDBfx.webp"],qj=Fo`
  from { opacity: 0.35; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Kj=Eo.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Zj=Fo`
  from { opacity: 0; }
  to { opacity: 1; }
`;Fo`
  from { opacity: 1; }
  to { opacity: 0; }
`,Fo`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Fo`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;var Uj=Fo`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`,Jj=Fo`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,Wj=Eo.div`
  position: relative;
  width: 100%;
  height: 632px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`,Gj=Eo.div`
  display: block;
  width: 212px;
  margin-top: 75px;
  height: 78px;
  background-image: url(${e=>e.$image});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.5);
  animation: ${e=>e.$start?Ao`
          ${Uj} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `:"none"};
`,Yj=Eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${e=>e.$start?Ao`
          ${Jj} 1s ease-out forwards
        `:"none"};
  animation-delay: ${e=>e.$start?"1.5s":"0s"};
`,Qj=e=>{const t=[...e];for(let r=t.length-1;r>0;r--){const e=Math.floor(Math.random()*(r+1));[t[r],t[e]]=[t[e],t[r]]}return t},Xj=async(e,t)=>{const r=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e}&lon=${t}&zoom=12&accept-language=uk`)).json(),i=r?.address,a=i&&(i.city||i.town||i.village||i.hamlet||i.municipality||r.name);return a?[{name:a,state:i.state||i.region,country:(i.country_code||"").toUpperCase(),lat:parseFloat(r.lat),lon:parseFloat(r.lon)}]:[]},eM=Eo.div`
  position: ${e=>e.$isStickyBgMode?"fixed":"absolute"} !important;
  width: ${e=>e.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${e=>e.$isStickyBgMode?"100vh":"100%"} !important;
  top: 0;
  left: 0;
  opacity: ${e=>e.$active?1:0};
  transition:
    opacity ${e=>e.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: translateZ(0);
  filter: ${e=>{const t=[];return e.$blur>0&&t.push(`blur(${e.$blur}px)`),e.$pixelation>.5&&t.push("url(#pixelate-hero)"),t.length?t.join(" "):"none"}};
  z-index: ${e=>e.$isStickyBgMode?"-10":"-2"} !important;
  will-change: opacity;
  backface-visibility: hidden;
`,tM=Eo.div`
  position: fixed;
  inset: 0;
  z-index: 200000;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(18px) saturate(0.65);
  -webkit-backdrop-filter: blur(18px) saturate(0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${Zj} 180ms ease-out;
`,rM=Eo.div`
  width: calc(100vw - 32px);
  height: calc(100vh - 32px);
  max-height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  animation: ${Zj} 220ms ease-out;
`,iM=Eo.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: ${e=>e.$isDarkMode?"#0e0e16":"#f8f8fc"};
`,aM=new Map,nM=Ar.memo(e=>{const{$image:t,$active:r,$focalX:i,$focalY:a,$videoStart:n,$videoEnd:s,$transition:o}=e,[l,c]=(0,Ar.useState)(null),d=(0,Ar.useRef)(null),h=(0,Ar.useRef)(null),f=!!(p=t)&&(p instanceof Blob?p.type.startsWith("video/"):"string"==typeof p&&(p.includes(".mp4")||p.includes(".webm")||p.includes(".ogg")||p.includes(".mov")||p.startsWith("data:video/")||p.startsWith("blob:")));var p;const[x,u]=(0,Ar.useState)(!0),g=(0,Ar.useSyncExternalStore)(Vj,_j,Oj);(0,Ar.useEffect)(()=>{if(!f)return;const e=h.current;let t;return e&&"undefined"!=typeof IntersectionObserver&&(t=new IntersectionObserver(([e])=>u(e.isIntersecting),{threshold:0}),t.observe(e)),()=>t?.disconnect()},[f]);const m=r&&x&&g;(0,Ar.useEffect)(()=>{if(!f)return;if(t instanceof Blob){const e=URL.createObjectURL(t);return c({key:t,url:e}),()=>URL.revokeObjectURL(e)}if("string"!=typeof t||!t||aM.has(t))return;let e=!0;return fetch(t).then(e=>e.blob()).then(r=>{const i=URL.createObjectURL(r);aM.set(t,i),e&&c({key:t,url:i})}).catch(()=>{e&&c({key:t,url:t})}),()=>{e=!1}},[t,f]);const y=f?"string"==typeof t&&aM.has(t)?aM.get(t):l?.key===t?l.url:void 0:"string"==typeof t?t:"";(0,Ar.useEffect)(()=>{const e=d.current;if(e)if(m){if(null!=n&&e.currentTime<n&&e.paused&&(e.currentTime=n),e.paused){const t=e.play();void 0!==t&&t.catch(()=>{})}}else if(!e.paused){const t=setTimeout(()=>{e.pause(),r||(e.currentTime=n??0)},x&&g?1e3*(o||0):0);return()=>clearTimeout(t)}},[m,r,o,n,y]),(0,Ar.useEffect)(()=>{const e=d.current;if(!e||!m||!y)return;let t=e.currentTime,r=0;const i=setInterval(()=>{if(!e.seeking&&0!==e.readyState){if(e.currentTime!==t)return t=e.currentTime,void(r=0);if(r+=1,1===r)e.play()?.catch(()=>{});else if(r>=3){r=0;const t=e.currentTime;e.load(),e.currentTime=t,e.play()?.catch(()=>{})}}},1500);return()=>clearInterval(i)},[m,y]);const b=n??0,w=s??null,[v,k]=(0,Ar.useState)(null),j=Boolean(y)&&v===y,M=()=>{y&&v!==y&&(console.warn("Фон не завантажився, показуємо заглушку:",y),k(y))};return(0,_o.jsx)(eM,{ref:h,"data-page-bg":"",...e,children:f&&!j?(0,_o.jsx)("video",{ref:d,src:y,preload:"auto",muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0,onError:M,onCanPlay:e=>{if(m){const t=e.target;if(t.paused){const e=t.play();void 0!==e&&e.catch(()=>{})}}},onTimeUpdate:e=>{if(!w)return;const t=e.target.currentTime,r=e.target.duration;w>0&&t>=w&&r&&w<r-.5&&(e.target.currentTime=b)},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${i}% ${a}%`}}):(0,_o.jsx)("img",{src:j||!y?ml:y,alt:"Геройський фон",fetchPriority:r?"high":"low",loading:r?"eager":"lazy",decoding:"async",onError:()=>{!j&&y&&"/assets/foggy-forest-Cew27ml4.webp"!==y&&M()},onLoad:e=>{e.currentTarget.decode?.().catch(()=>{})},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${i}% ${a}%`,display:"block"}})})}),sM=Eo.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,oM=Eo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`,lM=Eo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,cM=Eo.div`
  color: ${e=>e.$isDarkMode?"#f4f7fb":"#20242b"};
  font-size: 13px;
  text-align: right;
  font-weight: 600;
  width: 100%;
  min-height: 34px;
  box-sizing: border-box;
  background: transparent;
  padding: 4px 8px;
  border-bottom: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"};
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
    gap: 8px;
    padding: 6px 9px;
  }
`,dM=Eo.div`
 display: flex;
 flex: 0 0 auto;
 flex-direction: column;
 align-items: flex-start;
 gap: 2px;
`,hM=Eo.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: none;
  gap: 3px;
  border-radius: 4px;
  padding: 2px 5px;
  background: transparent;
  color: ${e=>e.$isDarkMode?"#fff":"#30343b"};
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.08)"};
  }
`,fM=Eo.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 3px 3px;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`,pM=Eo.div`
  width: min(860px, calc(100vw - 8px));
  box-sizing: border-box;
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.18)"};
  border-radius: 12px;
  background: ${e=>e.$isDarkMode?"rgba(18, 22, 29, 0.96)":"rgba(248, 250, 252, 0.97)"};
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(12px);
`,xM=Eo.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding-top: 4px;

  & > * {
    display: block;
    width: 100%;
  }
`,uM=Fo`
  from { opacity: 0; transform: scale(0.75); }
  to { opacity: 1; transform: scale(1); }
`,gM=Eo.span`
  display: grid;
  width: 22px;
  height: 22px;
  font-size: 18px;
  flex: 0 0 22px;
  place-items: center;
  animation: ${uM} 300ms ease both;
`,mM=Eo.span`
  white-space: nowrap;
  animation: ${uM} 300ms ease both;
`,yM=Eo.button`
  width: 100%;
  box-sizing: border-box;
  height: 39px;
  border-radius: 6px;
  border: none;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"};
  color: ${e=>e.$isDarkMode?"#f2f5f8":"#30343b"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  padding: 0 8px;
  flex-shrink: 0;
  transition: background 0.2s ease;
  &:hover { background: #353988; }
`,bM=Fo`
  from { opacity: 0; }
  to { opacity: 1; }
`,wM=Fo`
  from { opacity: 1; }
  to { opacity: 0; }
`,vM=Fo`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(24px); }
`,kM=Fo`
  from { opacity: 0; transform: translateX(-24px); }
  to { opacity: 1; transform: translateX(0); }
`,jM=Fo`
  from { transform: rotate(-120deg) scale(0.4); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
`,MM=Eo.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 43px;
    z-index: 5;
    padding: 0;
    box-sizing: border-box;
    border-radius: 10px;
    background: ${e=>e.$isDarkMode?"rgb(18, 22, 29)":"rgb(248, 250, 252)"};
    animation: ${e=>e.$closing?Ao`${wM} 260ms ease-in both`:Ao`${bM} 280ms cubic-bezier(0.22, 1, 0.36, 1) both`};
  }
`,SM=Eo(yM)`
  flex: none;
  width: 100%;
  height: 39px;
  font-size: 16px;

  ${gM} {
    width: 24px;
    height: 24px;
    font-size: 20px;
    flex: 0 0 24px;
  }

  animation: ${e=>e.$closing?Ao`${vM} 200ms ease-in both`:Ao`${kM} 320ms cubic-bezier(0.22, 1, 0.36, 1) both`};
  animation-delay: ${e=>e.$delay||"0ms"};
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: 0 6px 18px rgba(53, 57, 136, 0.45);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: scale(1.2) rotate(-6deg);
  }
`,$M=Eo(yM)`
  height: 39px;
  font-size: 16px;
  &:hover {
    background: #8a2b3a;
  }

  & > span:first-child {
    animation: ${jM} 350ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }
`,DM=Eo.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`,CM=Eo.div`
  display: flex;
  flex: 1 1 180px;
  min-width: 0;
  input {
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    padding: 0 12px;
    font-family: var(--font-family);
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: ${e=>e.$isDarkMode?"#10151c":"#fff"};
    color: ${e=>e.$isDarkMode?"#f4f7fb":"#20242b"};
    font-weight: 500;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: ${e=>e.$isDarkMode?"#aab4c0":"#68717d"};
    }

    &:hover,
    &:focus {
      border-color: ${e=>e.$isDarkMode?"#ecb900":"#00fbff"};
    }

    &:focus {
      box-shadow: inset 0 0 0 1px
        ${e=>e.$isDarkMode?"#ecb900":"#00fbff"};
    }
  }
`,LM=Eo.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 96px;
  height: 46px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background: #2f81f7;
  color: #fff;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: #1f6feb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,AM=Eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 8px;

  /* на вузьких екранах поля координат переносяться у 2 рядки (46+8+46),
     тому обидва режими мають однакову мінімальну висоту */
  @media (max-width: 503px) {
    min-height: 148px;
  }

  /* накладка вибору режиму (2 кнопки + «Відмінити» + проміжки) має вміщатися
     без зміни висоти блоку при відкритті */
  @media (min-width: 504px) {
    min-height: 125px;
  }
`,zM=Eo.svg`
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;

  g {
    opacity: 0;
  }

  rect {
    fill: none;
    stroke: url(#search-border-gradient);
    stroke-width: 1.4px;
    stroke-linecap: round;
    stroke-dasharray: 1000 0;
    filter: url(#search-border-glow);
  }
`,IM=Eo.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${e=>e.$isDarkMode?"#10151c":"#ffffff"};

  &:has(> input:hover) ${zM} rect,
  &:has(> input:focus) ${zM} rect {
    opacity: 1;
  }
`,EM=Eo.input`
  width: 100%;
  height: 46px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#040404"};
  padding: 0px 12px;
  background: ${e=>e.$isDarkMode?"#10151c":"#ffffff"};
  border-radius: 8px;
  border: 1px solid transparent;
  outline: none;
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: ${e=>e.$isDarkMode?"#f3efef":"#000000"};
  }
`,NM=Eo.div`
  display: ${e=>e.$desktopOnly?"none":"block"};
  width: 100%;
  color: ${e=>e.$isDarkMode?"#f4f7fb":"#30343b"};
  font-size: 12px;
  height: 40px; 
  line-height: 1.4;
  text-align: center;

  @media (min-width: 560px) {
    display: block;
    height: 20px;
  }

  @media (max-width: 559px) {
    display: ${e=>e.$desktopOnly?"none":"block"};
  }
`,RM=Eo.div`
  position: absolute;
  top: 100%;
  align-items: center;
  background: ${e=>e.isDarkMode?"#fefefeec":"#000000da"};
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  width: 99.7%;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.85) rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%);
    border-radius: 999px;
  }
`,TM=Eo.button`
  width: 100%;
  text-align: left;
  padding: 2px;
  border-top: 1px solid #eee;
  font-size: 14px;
  cursor: ${e=>e.$added?"default":"pointer"};
  transition: all 0.2s;
  color: ${e=>e.isDarkMode?"#050505fb":"#f4f2f2"};
  ${e=>e.$added&&Ao`
    background: rgba(74, 222, 128, 0.25);
  `}
  &:hover {
    background: ${e=>e.$added?"rgba(74, 222, 128, 0.25)":"skyblue"};
    color: white;
  }
`,FM=Eo.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  min-width: 0;
`,PM=Eo.span`
  min-width: 0;
  flex: 1;
`,VM=Eo.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 52%;
  margin-right: 4px;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>"now"===e.$level?"#fff":"#1a0800"};
  background: ${e=>"now"===e.$level?"linear-gradient(135deg, #e5484d, #a8202a)":"linear-gradient(135deg, #ffca91, #ff9d48)"};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);

  svg {
    flex-shrink: 0;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 3px 7px;
    font-size: 10px;
  }
`,_M=["Сьогодні","Завтра","Післязавтра"],OM={heat:It,frost:Dt,wind:qt,uv:Vt},BM=({type:e,value:t})=>"heat"===e?`спека до ${t}°C`:"frost"===e?`мороз до ${String(t).replace("-","−")}°C`:"wind"===e?`вітер ${t} м/с`:`УФ-індекс ${t}`,HM=Eo.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 8px;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 600;
  color: #f4f2f2;
  background: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid rgba(255, 179, 108, 0.6);
`,qM=Eo.button`
  padding: 4px 12px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  color: #1a0800;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
`,KM=Eo.span`
    color: ${e=>e.$isDarkMode?"#fbfbfb":"#060606"};
  flex: 1;
  text-align: right;
  font-size: 12px;
`,ZM=Eo.button`
  width: 100%;
  padding: 8px;
  background: ${e=>e.isDarkMode?"black":"white"};
  transition: background-color 0.3s ease; 
  color: ${e=>e.isDarkMode?"white":"black"};
  font-weight: bold;
  cursor: ${e=>e.disabled?"default":"pointer"};
  font-size: 13px;
  &:hover {
    background: ${e=>e.isDarkMode?"#220150":"#ffcc00"};
  }
`,UM=Eo.button`
  position: absolute;
  top: 40px;
  gap: 6px;
  left: 4px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 148px;
  height: 70px;
  border-radius: 5px;
  cursor: pointer;
  padding: 4px 6px;
  z-index: 100;
  transition: all 0.3s;
  font-size: 14px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`,JM=Eo.span`
  display: flex;
  gap: 2px;
  flex: 0 0 auto;
`,WM=Eo.img`
  width: 67px;
  height: 35px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  animation: ${qj} 0.45s ease-out both;
`,GM=({content:e,children:t,placement:r="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,Ar.useState)(!1),s=(0,Ar.useRef)(null),{refs:o,floatingStyles:l,context:c}=Ie({open:a,onOpenChange:n,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:C,middleware:[ge(8),tr(),z({padding:5}),M({element:s})]}),{isMounted:d,styles:h}=pe(c,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),f=or(c,{move:!1}),p=Xt(c),x=st(c),u=ar(c,{role:"tooltip"}),{getReferenceProps:g,getFloatingProps:m}=_e([f,p,x,u]);if(!e)return t;const y=i?"#111111":"#ffffff";return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{ref:o.setReference,...g(),style:{display:"inline-flex"},children:t}),d&&(0,_o.jsx)(dt,{children:(0,_o.jsxs)(Kj,{ref:o.setFloating,$isDarkMode:i,style:{...l,...h},...m(),children:[e,(0,_o.jsx)(jt,{ref:s,context:c,fill:y,stroke:"#00acb9",strokeWidth:1})]})})]})},YM=({isStickyBgMode:e,heroDateString:t,onAddCity:r,cardLimits:i,startAnimation:a,user:n,isDarkMode:s,checkWeatherDanger:l,heroBg:c,setHeroBg:d,heroBg2:h,setHeroBg2:f,heroBg3:p,setHeroBg3:x,customHeroBgs:u=[],setCustomHeroBgs:g,heroBgMode:m,setHeroBgMode:y,bgRatings:b,setBgRatings:w,slideshowInterval:v,setSlideshowInterval:k,filterCategory:j,setFilterCategory:M,heroBgBlur:S,setHeroBgBlur:$,heroBgPixelation:D,setHeroBgPixelation:C,heroBgFocal1:L,setHeroBgFocal1:A,heroBgFocal2:z,setHeroBgFocal2:I,heroBgFocal3:E,setHeroBgFocal3:N,selectedTimezone:R,setSelectedTimezone:T,customHolidayName:F,setCustomHolidayName:P})=>{Zr();const{registerRef:V,isActive:_}=Lh?.()||{registerRef:()=>{}},O=Wr(e=>e.calendar?.customDays||[]),[B,H]=(0,Ar.useState)({date:"",reason:""}),[q,K]=(0,Ar.useState)("");(0,Ar.useEffect)(()=>{const e=()=>{K("Конотоп"),setTimeout(()=>{r({name:"Конотоп",fullName:"Конотоп (UA)",lat:51.24,lon:33.2})},2e3)};return window.addEventListener("domino-auto-input-konotop",e),()=>window.removeEventListener("domino-auto-input-konotop",e)},[r]);const[Z,U]=(0,Ar.useState)([]),[J,W]=(0,Ar.useState)(3),[G,Y]=(0,Ar.useState)(!1),[Q,X]=(0,Ar.useState)([]),ee=(0,Ar.useRef)(new Set),te=()=>{ee.current=new Set,X([])},[re,ie]=(0,Ar.useState)(0);(0,Ar.useEffect)(()=>{const e=setInterval(()=>{ie(e=>0===e?1:0)},2400);return()=>clearInterval(e)},[]);const[ae,ne]=(0,Ar.useState)(!1),[se,oe]=(0,Ar.useState)(!1),[le,ce]=(0,Ar.useState)(!1),[de,he]=(0,Ar.useState)(!1),{t:fe,i18n:pe}=o(),xe="en"===pe.resolvedLanguage?"Language":`Language (${fe("hero.language")})`,[ge,me]=(0,Ar.useState)(!0),[ye,be]=(0,Ar.useState)("city"),[we,ve]=(0,Ar.useState)(0),[ke,je]=(0,Ar.useState)(!1),[Me,Se]=(0,Ar.useState)(!1),[$e,De]=(0,Ar.useState)("city"),[Ce,Le]=(0,Ar.useState)(!1),Ae=["ШІ-асистент (Gemini)","Змінити режим пошуку?","coordinates"===ye?"За назвою міста":"Координати (шир/дов)","Змінити режим пошуку?"],ze=Ae[we],Ie=0===we?"ai":2===we?"coordinates"===ye?"city":"coordinates":ye;(0,Ar.useEffect)(()=>{ve(0);const e=setInterval(()=>{ve(e=>(e+1)%Ae.length)},3e3);return()=>clearInterval(e)},[ye,Ae.length]);const Ee=[{id:"ai",label:"ШІ-асистент (Gemini)",Icon:Qt},{id:"city",label:"За назвою міста",Icon:Wt},{id:"coordinates",label:"Координати (шир/дов)",Icon:et}].filter(({id:e})=>e!==$e),Ne=e=>{Me||(Se(!0),setTimeout(()=>{je(!1),Se(!1),e?.()},260))},Re=ke?(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(MM,{$isDarkMode:s,$closing:Me,children:Ee.map(({id:e,label:t,Icon:r},i)=>(0,_o.jsxs)(SM,{type:"button",$closing:Me,$delay:70*(Me?Ee.length-1-i:i)+"ms",onClick:()=>Te(e),$isDarkMode:s,children:[(0,_o.jsx)(gM,{children:(0,_o.jsx)(r,{})}),(0,_o.jsx)(mM,{children:t})]},e))}),(0,_o.jsx)(xM,{style:{paddingTop:0},children:(0,_o.jsxs)($M,{type:"button",onClick:()=>Ne(),"aria-label":"Відмінити вибір режиму пошуку",$isDarkMode:s,children:[(0,_o.jsx)(gM,{children:(0,_o.jsx)(nt,{})}),(0,_o.jsx)(mM,{children:"Відмінити"})]})})]}):(0,_o.jsx)(xM,{children:(0,_o.jsx)(GM,{content:"Натисніть, щоб відкрити вибір режиму пошуку",isDarkMode:s,children:(0,_o.jsxs)(yM,{onClick:()=>{De(ye),je(!0)},"aria-label":"Відкрити вибір режиму пошуку",$isDarkMode:s,children:[(0,_o.jsx)(gM,{children:"coordinates"===Ie?(0,_o.jsx)(et,{}):"ai"===Ie?(0,_o.jsx)(Qt,{}):(0,_o.jsx)(Wt,{})},`${we}-${Ie}`),(0,_o.jsx)(mM,{children:ze},`${we}-${ze}`)]})})}),Te=e=>{"ai"!==e?(be(e),"city"===e?(Pe(""),_e("")):K(""),U([]),Y(!1),"city"!==e&&rt(!1),Ne()):Ne(()=>Le(!0))};(0,Ar.useEffect)(()=>(document.body.style.overflow=ae||le||Ce?"hidden":"",()=>{document.body.style.overflow=""}),[ae,le,Ce]),(0,Ar.useEffect)(()=>{const e=e=>{if("Escape"===e.key){if(Ce)return void Le(!1);ke&&Ne()}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[Ce,ke,Me]);const[Fe,Pe]=(0,Ar.useState)(""),[Ve,_e]=(0,Ar.useState)(""),[Oe,He]=(0,Ar.useState)(1),[qe,Ke]=(0,Ar.useState)([]),[Ze,Ue]=(0,Ar.useState)(0),Je=(0,Ar.useMemo)(()=>[...bc,...u||[]],[u]),We=Hj.slice(2*re,2*re+2),Ge=(0,Ar.useCallback)((e,t=1)=>{const r=qe.findIndex(t=>t.src===e);if("random"===m)return 2==(2===Oe?2:1)?f(e):d(e),void(-1!==r&&Ue(r));2===t?f(e):3===t?x(e):d(e)},[Oe,m,qe,d,f,x]);(0,Ar.useEffect)(()=>{if("slideshow-2"===m&&c&&h){He(1);const e=setInterval(()=>{He(e=>1===e?2:1)},1e3*v);return()=>clearInterval(e)}if("slideshow-3"===m&&c&&h&&p){He(1);const e=setInterval(()=>{He(e=>3===e?1:e+1)},1e3*v);return()=>clearInterval(e)}if("random"===m){if(0===qe.length&&Je.length>0){const e=Qj(Je);return Ke(e),Ue(0),void(e[0]&&d(e[0].src))}if(qe.length>0){const e=setInterval(()=>{Ue(e=>{const t=(e+1)%qe.length;return He(e=>{const r=1===e?2:1;return 1===r?d(qe[t].src):f(qe[t].src),r}),t})},1e3*v);return()=>clearInterval(e)}}},[m,Je,v,qe,d,f]),(0,Ar.useEffect)(()=>{if("random"===m&&Je.length>0&&qe.length!==Je.length){const e=Qj(Je);Ke(e),Ue(0),e[0]&&(Ge(e[0].src),He(1))}},[Je.length,m]);const Ye=(0,Ar.useRef)(null),[Qe,Xe]=(0,Ar.useState)([]),[tt,rt]=(0,Ar.useState)(!1),[it,at]=(0,Ar.useState)(!1),[st,ot]=(0,Ar.useState)(""),lt=(0,Ar.useRef)(null);(0,Ar.useEffect)(()=>{const e=e=>{"mousedown"===e.type&&0!==e.button||e.target!==document.body&&e.target!==document.documentElement&&lt.current&&!lt.current.contains(e.target)&&(Y(!1),te())};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const ct=async(e,t,r=!1)=>{const i=t.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(i.length<2)return U([]),void Y(!1);const a=xg.filter(e=>e.name.toLowerCase().includes(i)||e.aliases.some(e=>e.toLowerCase().includes(i))).map(e=>({name:e.name,state:"Україна",country:"UA",lat:e.lat,lon:e.lon,isLocal:!0}));a.length>0&&!r&&(U(a),Y(!0));try{const t=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(i)}&count=${e}&language=uk&format=json`)).json(),n=(Array.isArray(t?.results)?t.results:[]).map(e=>({name:e.name,state:e.admin1,country:e.country_code,lat:e.latitude,lon:e.longitude}));me(n.length>=e),U(e=>((e=[],t=[])=>{const r=new Set;return[...e||[],...t||[]].filter(e=>{const t=`${e?.lat??""}-${e?.lon??""}-${e?.name??""}-${e?.country??""}`;return!(!e||r.has(t)||(r.add(t),0))})})(r?e:a,n)),Y(!0)}catch(n){console.error("Помилка API:",n),a.length>0&&(U(a),Y(!0))}};(0,Ar.useEffect)(()=>{W(3),me(!0);const e=setTimeout(()=>{q&&ct(3,q,!1)},500);return()=>clearTimeout(e)},[q]);const dt=(0,Ar.useRef)(!1),ft=async()=>{if(dt.current)return;const e=parseFloat(Fe),t=parseFloat(Ve);if(isNaN(e)||isNaN(t))return void alert("Будь ласка, введіть правильні координати");if(e<-90||e>90)return void alert("Широта має бути від -90 до 90");if(t<-180||t>180)return void alert("Довгота має бути від -180 до +180");const r={name:"Обрана точка",state:`Широта: ${e}`,country:`Довгота: ${t}`,lat:e,lon:t,isManual:!0};dt.current=!0;try{ot("🔍 Шукаємо за вказаними координатами...");const i=await Xj(e,t);if(i.length>0)return Xe([r,...i]),rt(!0),void ot("");at(!0),rt(!0),Xe([r]),ot("Нічого не знайшли точно — шукаємо найближче...");const a=1e4,n=Date.now();let s=!1;e:for(let o=1;o<=15&&!s;o++){const i=[[e,Math.max(-180,Math.min(180,t+o))],[e,Math.max(-180,Math.min(180,t-o))],[Math.max(-90,Math.min(90,e+o)),t],[Math.max(-90,Math.min(90,e-o)),t]];for(const[e,t]of i){if(Date.now()-n>=a)break e;ot(`🔎 Перевіряємо: ±${o}° (шир: ${e.toFixed(1)}°, довг: ${t.toFixed(1)}°)...`);try{await new Promise(e=>setTimeout(e,1100));const i=await Xj(e,t);if(i.length>0){Xe([r,...i]),ot(`✅ Знайдено поруч (відхилення ~${o}°)`),s=!0;break e}}catch(rm){}}}if(!s){const e=((Date.now()-n)/1e3).toFixed(1);ot(`⚠️ Пошук завершено (${e}с) — навколо немає населених пунктів. Можна додати точку вручну.`)}}catch(i){console.error("Помилка при пошуку за координатами:",i),Xe([r]),rt(!0),ot("❌ Помилка запиту. Спробуйте ще раз.")}finally{dt.current=!1,at(!1)}},pt=e=>{r({name:e.name,fullName:`${e.name}${e.state?`, ${e.state}`:""} (${e.country})`,lat:e.lat,lon:e.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),Pe(""),_e(""),rt(!1),Xe([])},xt=e=>`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`,[ut,gt]=(0,Ar.useState)({}),mt=(0,Ar.useRef)(new Map);(0,Ar.useEffect)(()=>{if(!G||"function"!=typeof l||0===Z.length)return;const e=Date.now(),t=Z.filter(t=>{const r=mt.current.get(xt(t));return!r||e-r.at>6e5});0!==t.length&&(t.forEach(t=>mt.current.set(xt(t),{at:e,value:null})),l(t.map(({lat:e,lon:t})=>({lat:e,lon:t}))).then(e=>{const r={};t.forEach((t,i)=>{const a=xt(t),n=e?.[i]??null;mt.current.set(a,{at:Date.now(),value:n}),r[a]=n}),gt(e=>({...e,...r}))}).catch(()=>{}))},[Z,G,l]);const yt=e=>{const t=ut[xt(e)];if(!t?.reasons?.length)return null;const[r,...i]=t.reasons,a=OM[r.type]||qt,n=_M[t.dayIndex]||"Найближчі дні",s=`${n}: ${t.reasons.map(BM).join(", ")}`;return(0,_o.jsxs)(VM,{$level:t.level,title:s,"aria-label":`Небезпечна погода. ${s}`,children:[(0,_o.jsx)(a,{"aria-hidden":"true"}),n,": ",BM(r),i.length>0&&` +${i.length}`]})},bt=async e=>{const t=xt(e);if(ee.current.has(t))return;ee.current.add(t),X(e=>[...e,t]);const i={name:e.name,fullName:`${e.name}${e.state?`, ${e.state}`:""} (${e.country})`,lat:e.lat,lon:e.lon};window.dispatchEvent(new CustomEvent("domino-next-step-auto"));let a=!1;try{a=await r(i)}catch(n){console.error("Не вдалося додати місто:",n)}!1===a&&(ee.current.delete(t),X(e=>e.filter(e=>e!==t)))},wt=(0,Ar.useMemo)(()=>{const e=new Date,t=e.toISOString().split("T")[0];if(n?.birthDate){const[,t,r]=n.birthDate.split("-");if(e.getDate()===parseInt(r)&&e.getMonth()+1===parseInt(t))return{active:!0,color:"#ff5252",label:"З ДНЕМ НАРОДЖЕННЯ!"}}const r=O.find(e=>e.date===t);if(r)return{active:!0,color:"#fff59d",label:r.reason.toUpperCase()+"! 🎉"};const i=e.getDay();return 0===i||6===i?{active:!0,color:"#ffff00"}:{active:!1,color:"#fff59d",label:""}},[O,n]).active;return(0,Ar.useMemo)(()=>wt?Array.from({length:25}).map((e,t)=>({id:t,top:100*Math.random()+"%",left:100*Math.random()+"%",x:100*(Math.random()-.5)+"px",y:100*(Math.random()-.5)+"px",duration:3+4*Math.random()+"s",delay:5*Math.random()+"s"})):[],[wt]),(0,_o.jsxs)(Wj,{children:[(0,_o.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none",visibility:"hidden"},children:(0,_o.jsxs)("filter",{id:"pixelate-hero",x:"0",y:"0",width:"100%",height:"100%",children:[(0,_o.jsx)("feFlood",{x:"0",y:"0",height:"1",width:"1"}),(0,_o.jsx)("feComposite",{width:Math.max(1,2*D),height:Math.max(1,2*D)}),(0,_o.jsx)("feTile",{result:"tiles"}),(0,_o.jsx)("feComposite",{in:"SourceGraphic",in2:"tiles",operator:"in"}),(0,_o.jsx)("feMorphology",{operator:"dilate",radius:D})]})}),(0,_o.jsx)(nM,{$isStickyBgMode:e,$image:c,$active:"static"===m||1===Oe,$transition:1,$blur:S,$pixelation:D,$focalX:L?.x||50,$focalY:L?.y||50,$videoStart:Je.find(e=>e.src===c)?.start,$videoEnd:Je.find(e=>e.src===c)?.end}),(0,_o.jsx)(nM,{$isStickyBgMode:e,$image:h,$active:("slideshow-2"===m||"slideshow-3"===m||"random"===m)&&2===Oe,$transition:1,$blur:S,$pixelation:D,$focalX:z?.x||50,$focalY:z?.y||50,$videoStart:Je.find(e=>e.src===h)?.start,$videoEnd:Je.find(e=>e.src===h)?.end}),(0,_o.jsx)(nM,{$isStickyBgMode:e,$image:p,$active:"slideshow-3"===m&&3===Oe,$transition:1,$blur:S,$pixelation:D,$focalX:E?.x||50,$focalY:E?.y||50,$videoStart:Je.find(e=>e.src===p)?.start,$videoEnd:Je.find(e=>e.src===p)?.end}),(0,_o.jsxs)(UM,{ref:e=>V("changeBgButton",e),onClick:()=>ne(!0),"aria-label":"Змінити фон",children:[(0,_o.jsxs)("span",{style:{display:"flex",gap:"5px"},children:[(0,_o.jsx)(ht,{size:27}),(0,_o.jsx)("span",{style:{fontSize:"14px"},children:"Змінити фон?"})]}),(0,_o.jsx)(JM,{"aria-hidden":"true",children:We.map(e=>(0,_o.jsx)(WM,{src:e,alt:""},e))})]}),(0,_o.jsx)(Gj,{$image:"/assets/wordmark-stykhiia-DaVXLrcU.webp",$start:a}),(0,_o.jsxs)(Yj,{$start:a,children:[(0,_o.jsxs)(pM,{$isDarkMode:s,children:[(0,_o.jsx)(sM,{children:(0,_o.jsx)(oM,{children:(0,_o.jsx)(lM,{children:(0,_o.jsxs)(cM,{ref:Ye,$isDarkMode:s,children:[(0,_o.jsxs)(dM,{children:[(0,_o.jsxs)(hM,{ref:e=>V("timezoneButton",e),onClick:()=>ce(!le),"aria-label":"Змінити часовий пояс?",$isDarkMode:s,children:[(0,_o.jsx)(ue,{size:18})," Змінити часовий пояс?"]}),(0,_o.jsxs)(hM,{onClick:()=>he(!0),"aria-label":xe,$isDarkMode:s,children:[(0,_o.jsx)(ir,{size:18})," ",xe]})]}),(0,_o.jsx)(KM,{$isDarkMode:s,style:{flex:1,textAlign:"right"},children:t}),(0,_o.jsx)(jv,{isOpen:le,onClose:()=>ce(!1),selectedTimezone:R,setSelectedTimezone:T,isDarkMode:s})]})})})}),(0,_o.jsx)(fM,{ref:lt,children:"city"===ye?(0,_o.jsxs)(AM,{children:[(0,_o.jsxs)(IM,{$isDarkMode:s,children:[(0,_o.jsx)(EM,{ref:e=>V("heroInput",e),value:q,$isDarkMode:s,onChange:e=>{K(e.target.value),window.dispatchEvent(new CustomEvent("domino-hero-input-change",{detail:{value:e.target.value}}))},onFocus:()=>Z.length>0&&Y(!0),placeholder:"Уведіть місто, село. Наприклад: Київ...",type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,name:"hero-city-search",inputMode:"search",enterKeyHint:"search","aria-label":"Пошук міста","data-form-type":"other","data-lpignore":"true"}),(0,_o.jsxs)(zM,{"aria-hidden":"true",focusable:"false",children:[(0,_o.jsxs)("defs",{children:[(0,_o.jsxs)("linearGradient",{id:"search-border-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",gradientTransform:"rotate(0 0.5 0.5)",children:[(0,_o.jsx)("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:"0 0.5 0.5",to:"360 0.5 0.5",dur:"28s",repeatCount:"indefinite"}),(0,_o.jsx)("stop",{offset:"0%",stopColor:"#00bfff"}),(0,_o.jsx)("stop",{offset:"50%",stopColor:"#a855f7"}),(0,_o.jsx)("stop",{offset:"100%",stopColor:"#ffd400"})]}),(0,_o.jsxs)("filter",{id:"search-border-glow",x:"-50%",y:"-100%",width:"200%",height:"300%",children:[(0,_o.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"3.4",result:"wideGlow"}),(0,_o.jsx)("feComponentTransfer",{in:"wideGlow",result:"softGlow",children:(0,_o.jsx)("feFuncA",{type:"linear",slope:"0.35"})}),(0,_o.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1.4",result:"coreGlow"}),(0,_o.jsxs)("feMerge",{children:[(0,_o.jsx)("feMergeNode",{in:"softGlow"}),(0,_o.jsx)("feMergeNode",{in:"coreGlow"}),(0,_o.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,_o.jsx)("rect",{x:"2",y:"2",width:"calc(100% - 4px)",height:"calc(100% - 4px)",rx:"8",pathLength:"1000"})]}),G&&Z.length>0&&(0,_o.jsxs)(RM,{children:[i&&(0,_o.jsxs)(HM,{children:[(0,_o.jsxs)("span",{children:[Q.length>0&&`Додано: ${Q.length} · `,"Карток: ",i.custom,"/",i.maxCustom,null!==i.daily&&` · Сьогодні: ${i.daily}/${i.maxDaily}`]}),Q.length>0&&(0,_o.jsx)(qM,{type:"button",onMouseDown:e=>e.preventDefault(),onClick:()=>{K(""),U([]),Y(!1),te()},children:"Готово"})]}),Z.map((e,t)=>(0,_o.jsx)(TM,{$added:Q.includes(xt(e)),onMouseDown:t=>{t.preventDefault(),bt(e)},onTouchEnd:t=>{t.preventDefault(),bt(e)},onClick:()=>bt(e),children:(0,_o.jsxs)(FM,{children:[(0,_o.jsxs)(PM,{children:[Q.includes(xt(e))&&"✓ ",e.name,e.state?`, ${e.state}`:""," (",e.country,")",(0,_o.jsx)("br",{}),(0,_o.jsxs)("span",{style:{fontSize:"0.85em",color:"#fffcfc"},children:["Широта: ",e.lat.toFixed(2),"°, Довгота: ",e.lon.toFixed(2),"°"]})]}),yt(e)]})},`${e.lat}-${e.lon}-${t}`)),ge?(0,_o.jsx)(ZM,{isDarkMode:s,onClick:e=>{e.preventDefault(),e.stopPropagation();const t=J+3;W(t),ct(t,q,!0)},children:"Завантажити ще варіанти"}):(0,_o.jsx)(ZM,{isDarkMode:s,disabled:!0,children:"Кінець списку"})]})]}),(0,_o.jsx)(NM,{$isDarkMode:s,children:"Ви заслуговуєте на багатофункціональний прогноз, де немає політики та реклами! Гарної погоди!"}),Re]}):(0,_o.jsxs)(AM,{children:[(0,_o.jsxs)(DM,{style:{alignItems:"flex-start"},children:[(0,_o.jsx)(CM,{$isDarkMode:s,children:(0,_o.jsx)("input",{type:"number",value:Fe,onChange:e=>Pe(e.target.value),onKeyDown:e=>{"Enter"===e.key&&ft()},placeholder:"Широта: Від -90° до +90°",disabled:it,min:"-90",max:"90",step:"0.01"})}),(0,_o.jsx)(CM,{$isDarkMode:s,children:(0,_o.jsx)("input",{type:"number",value:Ve,onChange:e=>_e(e.target.value),onKeyDown:e=>{"Enter"===e.key&&ft()},placeholder:"Довгота: Від -180° до +180°",disabled:it,min:"-180",max:"180",step:"0.01"})}),(0,_o.jsxs)(LM,{type:"button",onClick:ft,disabled:it,children:[(0,_o.jsx)(Be,{}),"Знайти"]})]}),(0,_o.jsx)(NM,{$isDarkMode:s,$desktopOnly:!0,children:"Ви заслуговуєте на багатофункціональний прогноз, де немає політики та реклами! Гарної погоди!"}),st&&(0,_o.jsxs)("div",{style:{color:st.startsWith("✅")?"#00e676":st.startsWith("❌")?"#ff5252":st.startsWith("⚠️")?"#ffb36c":"#00eaff",fontSize:"11px",fontWeight:"bold",textAlign:"center",padding:"4px 10px",background:"rgba(0,0,0,0.65)",borderRadius:"6px",maxWidth:"340px",margin:"4px auto 0",backdropFilter:"blur(4px)",lineHeight:1.4},children:[it&&(0,_o.jsx)("span",{style:{marginRight:"6px"},children:"⟳"}),st]}),Re,tt&&(0,_o.jsxs)(RM,{style:{width:"auto",minWidth:"300px",marginTop:"6px",left:"50%",transform:"translateX(-50%)",position:"absolute"},children:[(0,_o.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"6px",textAlign:"center",fontSize:"12px"},children:it?"Шукаємо поруч…":Qe.length>1?"Знайдено поруч з координатами:":"Лише точка за координатами (міст не знайдено)"}),Qe.map((e,t)=>(0,_o.jsxs)(TM,{onMouseDown:t=>{t.preventDefault(),pt(e)},onClick:()=>pt(e),children:[e.name,e.state?`, ${e.state}`:""," (",e.country,")",(0,_o.jsx)("br",{}),(0,_o.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[e.lat.toFixed(2),"°, ",e.lon.toFixed(2),"°"]})]},`${e.lat}-${e.lon}-${t}`)),(0,_o.jsx)("button",{onClick:()=>{rt(!1),Xe([]),ot("")},style:{width:"100%",padding:"8px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"8px",cursor:"pointer",marginTop:"10px",fontSize:"12px"},children:"✕ Закрити"})]})]})})]}),(0,_o.jsx)("div",{style:{marginTop:"0px",zIndex:90},children:(0,_o.jsx)(_b,{user:n,isDarkMode:s,isStickyBgMode:e})})]}),(0,_o.jsx)(rk,{isOpen:ae,isClosing:se,onClose:()=>{oe(!0),setTimeout(()=>{ne(!1),oe(!1)},350)},onReset:()=>{$(0),C(0),A({x:50,y:50}),I({x:50,y:50})},isDarkMode:s,user:n,heroBg:c,heroBg2:h,heroBg3:p,setHeroBg:d,setHeroBg2:f,setHeroBg3:x,customHeroBgs:u,setCustomHeroBgs:g,heroBgMode:m,setHeroBgMode:y,bgRatings:b,setBgRatings:w,slideshowInterval:v,setSlideshowInterval:k,filterCategory:j,setFilterCategory:M,heroBgBlur:S,setHeroBgBlur:$,heroBgPixelation:D,setHeroBgPixelation:C,activeLayer:Oe,setActiveLayer:He,randomBgsList:qe,setRandomBgsList:Ke,randomCurrentIndex:Ze,setRandomCurrentIndex:Ue,hills:ml}),(0,_o.jsx)(zj,{isOpen:de,onClose:()=>he(!1)}),Ce&&(0,Cc.createPortal)((0,_o.jsx)(tM,{onClick:()=>Le(!1),children:(0,_o.jsx)(rM,{onClick:e=>e.stopPropagation(),children:(0,_o.jsx)(iM,{$isDarkMode:s,children:(0,_o.jsx)(Ar.Suspense,{fallback:null,children:(0,_o.jsx)(Bj,{isDarkMode:s,isStickyBgMode:!1,onClose:()=>Le(!1)})})})})}),document.body)]})},QM=(0,Ar.createContext)(),XM=()=>(0,Ar.useContext)(QM),eS={light_default:e=>`body:not(.decorator-dark-mode) ${e}`,light_hover:e=>`body:not(.decorator-dark-mode) ${e}:hover`,dark_default:e=>`body.decorator-dark-mode ${e}`,dark_hover:e=>`body.decorator-dark-mode ${e}:hover`},tS=(e,t)=>{const r=(e=>e.includes(" > ")||e.includes("#")||e.includes(":")?e:`[data-decorator-id="${e}"]`)(e);let i="";return Object.entries(eS).forEach(([e,a])=>{const n=Object.entries(t?.[e]||{}).filter(([e,t])=>""!==t&&null!=t&&"opacity"!==e).map(([e,t])=>`${(e=>e.startsWith("--")?e:e.replace(/([A-Z])/g,"-$1").toLowerCase())(e)}: ${t} !important;`).join(" ");n&&(i+=`${a(r)} { ${n} }\n`)}),i},rS=({children:e,isDarkMode:t})=>{const[r,i]=(0,Ar.useState)(!1),[a,n]=(0,Ar.useState)(!1),[s,o]=(0,Ar.useState)({}),[l,c]=(0,Ar.useState)([]),[d,h]=(0,Ar.useState)(!1),[f,p]=(0,Ar.useState)(0),[x,u]=(0,Ar.useState)({});(0,Ar.useEffect)(()=>{t?document.body.classList.add("decorator-dark-mode"):document.body.classList.remove("decorator-dark-mode")},[t]),(0,Ar.useEffect)(()=>{(async()=>{try{const e=await Po.default.getItem("decorator_persistent");if(null!==e&&(n(e),e)){let e=await Po.default.getItem("decorator_overrides");const t=await Po.default.getItem("decorator_changelog");if(e){const t={};Object.keys(e).forEach(r=>{t[r]={};const i=e[r];i.light_default||i.light_hover||i.dark_default||i.dark_hover?t[r]=i:t[r].light_default={...i}}),o(t)}t&&c(t);const r=await Po.default.getItem("decorator_slots"),i=await Po.default.getItem("decorator_active_preset");r&&u(r),Number.isInteger(i)&&p(i)}}catch(e){console.error("Error hydrating decorator state",e)}finally{h(!0)}})()},[]),(0,Ar.useEffect)(()=>{d&&(a?(Po.default.setItem("decorator_overrides",s),Po.default.setItem("decorator_changelog",l),Po.default.setItem("decorator_slots",x),Po.default.setItem("decorator_active_preset",f)):(Po.default.removeItem("decorator_slots"),Po.default.removeItem("decorator_active_preset"),Po.default.removeItem("decorator_overrides"),Po.default.removeItem("decorator_changelog")),Po.default.setItem("decorator_persistent",a))},[s,l,x,f,a,d]),(0,Ar.useEffect)(()=>{let e=document.getElementById("decorator-styles");e||(e=document.createElement("style"),e.id="decorator-styles",document.head.appendChild(e));let t="";Object.entries(s).forEach(([e,r])=>{t+=tS(e,r)}),e.innerHTML=t},[s]);const g=(0,Ar.useCallback)((e,t,r,i,a,n="light_default")=>{o(t=>{const i={...t[e]||{}},s={...i[n]||{}};""===a||null==a?delete s[r]:s[r]=a,0===Object.keys(s).length?delete i[n]:i[n]=s;const o={...t};return 0===Object.keys(i).length?delete o[e]:o[e]=i,o}),c(s=>[...s,{id:Date.now()+"-"+Math.random().toString(36).slice(2,7),elementId:e,tagName:t,property:r,originalValue:i,newValue:a,mode:n,timestamp:(new Date).toLocaleTimeString("uk-UA")}])},[]),m=(0,Ar.useCallback)(e=>{if(e===f||e<0||e>=3)return;const t=x[e]||{overrides:{},log:[]};u(e=>({...e,[f]:{overrides:s,log:l}})),o(t.overrides||{}),c(t.log||[]),p(e)},[f,x,s,l]),y=(0,Ar.useCallback)(e=>{c(t=>{const r=t.find(t=>t.id===e);return r?(o(i=>{const a={...i[r.elementId]||{}},n=r.mode||"light_default",s={...a[n]||{}},o=t.filter(t=>t.elementId===r.elementId&&t.property===r.property&&(t.mode||"light_default")===n&&t.id!==e);if(o.length>0?s[r.property]=o[o.length-1].newValue:delete s[r.property],a[n]=s,0===Object.keys(s).length&&delete a[n],0===Object.keys(a).length){const e={...i};return delete e[r.elementId],e}return{...i,[r.elementId]:a}}),t.filter(t=>t.id!==e)):t})},[]),b=(0,Ar.useCallback)(()=>{o({}),c([]),document.querySelectorAll("[data-decorator-id]").forEach(e=>{e.removeAttribute("data-decorator-id")})},[]),w=(0,Ar.useCallback)(e=>s[e]||{},[s]);return(0,_o.jsx)(QM.Provider,{value:{isDecoratorMode:r,setIsDecoratorMode:i,styleOverrides:s,changeLog:l,applyStyle:g,undoChange:y,resetAll:b,getOverridesForElement:w,isPersistent:a,setIsPersistent:n,activePreset:f,switchPreset:m,isDarkMode:t},children:e})},iS=e=>{if("string"==typeof e)return e;if(e&&"object"==typeof e){const t=e.type?.name||"";if("FaSun"===t)return"☀️";if("BsMoonStarsFill"===t)return"🌙";if("FaCloudMoon"===t)return"☁️";if("FaSmog"===t)return"☁️";if("IoRainy"===t||"LiaCloudSunRainSolid"===t||"FaCloudMoonRain"===t||"LiaCloudMoonRainSolid"===t)return"🌧️";if("GiSnowing"===t)return"❄️";if("IoThunderstorm"===t)return"⛈️";if(e.props?.children){const t=e.props.children;if("string"==typeof t)return t;if(Array.isArray(t))return t.filter(Boolean).map(String).join("")}}return"☁️"},aS=e=>Array.isArray(e)?e.map(e=>{const t={...e},r=e=>{if(Array.isArray(e))return e.map(e=>r(e));if(e&&"object"==typeof e){if(e.$$typeof&&"symbol"==typeof e.$$typeof)return iS(e);const t={};return Object.entries(e).forEach(([e,i])=>{t[e]=r(i)}),t}return e};return Object.entries(t).forEach(([e,i])=>{"current"!==e&&"hourly"!==e&&"daily16"!==e&&"seasonal"!==e||(t[e]=r(i))}),t.current&&(t.current.iconSymbol=iS(t.current.iconSymbol??t.current.iconPlaceholder),t.current.iconPlaceholder=t.current.iconPlaceholder??t.current.iconSymbol??"☁️"),Array.isArray(t.hourly)&&(t.hourly=t.hourly.map(e=>({...e,iconSymbol:iS(e.iconSymbol??e.iconPlaceholder),iconPlaceholder:e.iconPlaceholder??e.iconSymbol??"☁️"}))),Array.isArray(t.daily16)&&(t.daily16=t.daily16.map(e=>({...e,iconSymbol:iS(e.iconSymbol??e.iconPlaceholder),iconPlaceholder:e.iconPlaceholder??e.iconSymbol??"☁️"}))),Array.isArray(t.seasonal)&&(t.seasonal=t.seasonal.map(e=>({...e}))),t}):[],nS=Fo`
  from { opacity: 0; }
  to { opacity: 1; }
`,sS=Fo`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`,oS=Eo.div`
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
  animation: ${nS} 0.2s ease-out;
`,lS=Eo.div`
  background: #1e1e2e;
  color: #cdd6f4;
  border-radius: 16px;
  border: 2px solid #ffb36c;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  animation: ${sS} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,cS=Eo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`,dS=Eo.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,hS=Eo.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`,fS=Eo.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`,pS=Eo.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,xS=Eo.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`,uS=Eo.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`,gS=Eo.button`
  flex: 1;
  background: ${e=>e.$active?"rgba(255, 179, 108, 0.2)":"transparent"};
  color: ${e=>e.$active?"#ffb36c":"#a6adc8"};
  border: none;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 179, 108, 0.1);
  }
`,mS=Eo.div`
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
`,yS=Eo.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`,bS=Eo.input`
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
`,wS=Eo.input`
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
`,vS=Eo.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`,kS=Eo.button`
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
`,jS=Eo(kS)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`,MS=Eo(kS)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    `,SS=Eo.button`
  background: rgba(255, 179, 108, 0.12);
  border: 1px solid rgba(255, 179, 108, 0.35);
  color: #ffb36c;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.25);
  }
`,$S={background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none"},DS=Object.values({color:{label:"Колір тексту",cssProp:"color",type:"color",desc:"Змінює колір шрифту елемента"},backgroundColor:{label:"Колір фону",cssProp:"backgroundColor",type:"color",desc:"Змінює фоновий колір елемента"},border:{label:"Рамка (бордюр)",cssProp:"border",type:"border",desc:"Налаштування межі елемента"},borderRadius:{label:"Заокруглення кутів",cssProp:"borderRadius",type:"text",placeholder:"напр., 8px або 50%",desc:"Радіус заокруглення рамки"},boxShadow:{label:"Тінь елемента",cssProp:"boxShadow",type:"text",placeholder:"напр., 0 4px 10px rgba(0,0,0,0.3)",desc:"Додає ефект тіні навколо елемента"},textShadow:{label:"Тінь тексту",cssProp:"textShadow",type:"text",placeholder:"напр., 1px 1px 2px #000",desc:"Ефект тіні для тексту"},backdropFilter:{label:"Розмиття фону",cssProp:"backdropFilter",type:"text",placeholder:"напр., blur(10px)",desc:"Ефекти для фону (скляний ефект)"},filter:{label:"Фільтри",cssProp:"filter",type:"text",placeholder:"напр., grayscale(50%)",desc:"Ефекти зображення/кольору"},transform:{label:"Трансформація",cssProp:"transform",type:"transform",placeholder:"напр., rotate(5deg) scale(1.1) або skewY(3deg)",desc:"Зсув, поворот, масштаб, нахил — або свій CSS"},transformOrigin:{label:"Точка трансформації",cssProp:"transformOrigin",type:"text",placeholder:"напр., center, top left, 50% 100%",desc:"Відносно чого виконується трансформація"},transition:{label:"Анімація переходу",cssProp:"transition",type:"text",placeholder:"напр., all 0.3s ease",desc:"Плавність зміни стилів (корисно для :hover)"},outline:{label:"Контур",cssProp:"outline",type:"text",placeholder:"напр., 2px solid red",desc:"Зовнішня рамка елемента"},textDecoration:{label:"Декорування тексту",cssProp:"textDecoration",type:"text",placeholder:"напр., underline або none",desc:"Підкреслення, закреслення тощо"},cursor:{label:"Курсор миші",cssProp:"cursor",type:"cursor",desc:"Вигляд курсора при наведенні"}}),CS=new Set(DS.map(e=>e.cssProp)),LS=["light_default","light_hover","dark_default","dark_hover"],AS=new Set(["opacity"]),zS=e=>{if(!e||"transparent"===e||"rgba(0, 0, 0, 0)"===e)return"#000000";if(e.startsWith("#"))return/^#[0-9a-f]{3}$/i.test(e)?"#"+e.slice(1).split("").map(e=>e+e).join(""):/^#[0-9a-f]{6}/i.test(e)?e.slice(0,7):"#000000";const t=e.match(/\d+/g);return!t||t.length<3?"#000000":"#"+t.slice(0,3).map(e=>Math.min(255,parseInt(e)).toString(16).padStart(2,"0")).join("")},IS=["solid","double","dashed","dotted","groove","ridge","inset","outset"],ES=["0px","1px","2px","3px","4px","5px","8px","10px"],NS=[{key:"translateX",label:"X (px)",unit:"px",def:0,step:1},{key:"translateY",label:"Y (px)",unit:"px",def:0,step:1},{key:"rotate",label:"Поворот (°)",unit:"deg",def:0,step:1},{key:"scale",label:"Масштаб",unit:"",def:1,step:.05},{key:"skewX",label:"Нахил X (°)",unit:"deg",def:0,step:1},{key:"skewY",label:"Нахил Y (°)",unit:"deg",def:0,step:1}],RS=({targetElement:e,onClose:t})=>{const{applyStyle:r,getOverridesForElement:i,isDarkMode:a,activePreset:n}=XM(),[s,o]=(0,Ar.useState)(a?"dark":"light"),[l,c]=(0,Ar.useState)("default"),[d,h]=(0,Ar.useState)(""),[f,p]=(0,Ar.useState)(""),[x,u]=(0,Ar.useState)(""),g=`${s}_${l}`,m=e?.tagName?.toLowerCase()||"?",y=e?(e=>{if(!(e&&e instanceof Element))return"";const t=[];let r=e;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r!==document.body&&r!==document.documentElement;){let e=r.nodeName.toLowerCase();if(r.id){e+="#"+(window.CSS?.escape?CSS.escape(r.id):r.id),t.unshift(e);break}{let t=r.previousSibling,i=1;for(;t;)t.nodeType===Node.ELEMENT_NODE&&t.nodeName===r.nodeName&&i++,t=t.previousSibling;e+=`:nth-of-type(${i})`}t.unshift(e),r=r.parentNode}return t.join(" > ")})(e):"",[b,w]=(0,Ar.useState)({});(0,Ar.useEffect)(()=>{y&&w(JSON.parse(JSON.stringify(i(y))))},[y]),(0,Ar.useEffect)(()=>{const e=e=>{"Escape"===e.key&&t()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t]);const v=(e,t)=>{w(r=>{const i={...r[g]||{}};return""===t||null==t?delete i[e]:i[e]=t,{...r,[g]:i}})},k=()=>{const e=(e=>e.startsWith("--")?e:e.trim().replace(/-([a-z])/g,(e,t)=>t.toUpperCase()))(d);/^(--)?[a-zA-Z][a-zA-Z0-9-]*$/.test(e)?AS.has(e)?u("Прозорість (opacity) не підтримується"):f.trim()?(v(e,f.trim()),h(""),p(""),u("")):u("Вкажіть значення"):u("Некоректна назва властивості")};if(!e)return null;const j=b[g]||{},M=Object.entries(j).filter(([e])=>!CS.has(e)&&!AS.has(e)),S=tS(y,b),$=(e,t,r)=>{const i=(e=>{const t={};if(!e)return t;const r=/(translateX|translateY|rotate|scale|skewX|skewY)\(\s*(-?\d*\.?\d+)\s*(?:px|deg)?\s*\)/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t})(t),a=(r,a)=>v(e,((e,t="")=>{const r=NS.map(e=>e.key).join("|"),i=t.replace(new RegExp(`(${r})\\(\\s*-?\\d*\\.?\\d+\\s*(?:px|deg)?\\s*\\)`,"g"),"").trim();return[NS.filter(t=>void 0!==e[t.key]&&""!==e[t.key]&&Number(e[t.key])!==t.def).map(t=>`${t.key}(${e[t.key]}${t.unit})`).join(" "),i].filter(Boolean).join(" ")})({...i,[r]:a},t));return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px"},children:NS.map(e=>(0,_o.jsxs)("label",{style:{fontSize:"10px",color:"#a6adc8",display:"flex",flexDirection:"column",gap:"2px"},children:[e.label,(0,_o.jsx)(bS,{type:"number",step:e.step,value:i[e.key]??"",placeholder:String(e.def),onChange:t=>a(e.key,t.target.value),"data-decorator-ignore":"true",style:{minWidth:0}})]},e.key))}),(0,_o.jsx)(bS,{value:t,onChange:t=>v(e,t.target.value),placeholder:r,"data-decorator-ignore":"true"})]})};return(0,_o.jsxs)(oS,{onClick:e=>{e.target===e.currentTarget&&t()},"data-decorator-ignore":"true",children:[(0,_o.jsx)("style",{children:S}),(0,_o.jsxs)(lS,{"data-decorator-ignore":"true",onClick:e=>e.stopPropagation(),children:[(0,_o.jsxs)(cS,{children:[(0,_o.jsxs)(dS,{children:["🎨 Декоратор ",(0,_o.jsxs)(hS,{children:["<",m,">"]})]}),(0,_o.jsx)(fS,{onClick:t,"data-decorator-ignore":"true",children:"×"})]}),(0,_o.jsxs)(pS,{children:[(0,_o.jsxs)(xS,{children:[(0,_o.jsxs)(uS,{children:[(0,_o.jsx)(gS,{$active:"light"===s,onClick:()=>o("light"),children:"🌞 Денна"}),(0,_o.jsx)(gS,{$active:"dark"===s,onClick:()=>o("dark"),children:"🌙 Темна"})]}),(0,_o.jsxs)(uS,{children:[(0,_o.jsx)(gS,{$active:"default"===l,onClick:()=>c("default"),children:"Стандарт"}),(0,_o.jsx)(gS,{$active:"hover"===l,onClick:()=>c("hover"),children:":hover"})]})]}),(0,_o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,_o.jsxs)("span",{style:{fontSize:"11px",color:"#858da3"},children:["Пресет ",n+1," — зміни не впливають на інші пресети"]}),(0,_o.jsx)(SS,{onClick:()=>{w(e=>({...e,[`${s}_default`]:{},[`${s}_hover`]:{}}))},"data-decorator-ignore":"true",children:"Очистити тему"})]}),DS.map(({cssProp:e,label:t,type:r,placeholder:i,desc:a})=>{const n=j[e]||"";return(0,_o.jsx)(mS,{children:(0,_o.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"5px"},children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[(0,_o.jsx)(yS,{children:t}),(0,_o.jsx)("span",{style:{fontSize:"10px",color:"#858da3",textAlign:"right"},children:a})]}),"color"===r&&(0,_o.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,_o.jsx)(wS,{type:"color",value:zS(n),onChange:t=>v(e,t.target.value),"data-decorator-ignore":"true"}),(0,_o.jsx)(bS,{value:n,onChange:t=>v(e,t.target.value),placeholder:"напр., #ffb36c або transparent","data-decorator-ignore":"true"})]}),"cursor"===r&&(0,_o.jsxs)("select",{value:n,onChange:t=>v(e,t.target.value),"data-decorator-ignore":"true",style:{...$S,width:"100%"},children:[(0,_o.jsx)("option",{value:"",children:"успадковується (default)"}),(0,_o.jsx)("option",{value:"default",children:"стрілка (default)"}),(0,_o.jsx)("option",{value:"pointer",children:"вказівник / посилання (pointer)"}),(0,_o.jsx)("option",{value:"grab",children:"захоплення / рука відкрито (grab)"}),(0,_o.jsx)("option",{value:"grabbing",children:"рука стиснута (grabbing)"}),(0,_o.jsx)("option",{value:"zoom-in",children:"збільшення (zoom-in)"}),(0,_o.jsx)("option",{value:"zoom-out",children:"зменшення (zoom-out)"}),(0,_o.jsx)("option",{value:"text",children:"виділення тексту (text)"}),(0,_o.jsx)("option",{value:"not-allowed",children:"заборонено (not-allowed)"}),(0,_o.jsx)("option",{value:"help",children:"довідка (help)"}),(0,_o.jsx)("option",{value:"wait",children:"очікування (wait)"}),(0,_o.jsx)("option",{value:"move",children:"переміщення (move)"})]}),"border"===r&&(()=>{const t=(e=>{let t="1px",r="none",i="#000000";return e&&"none"!==e?(r="solid",(e.match(/(?:rgba?|hsla?)\([^)]*\)|\S+/g)||[]).forEach(e=>{/^\d*\.?\d+(px|em|rem|pt)?$/.test(e)?t=/[a-z]/.test(e)?e:e+"px":"none"===e?r="none":IS.includes(e)?r=e:i=e}),{width:t,style:r,color:i}):{width:t,style:r,color:i}})(n),r=ES.includes(t.width)?ES:[...ES,t.width],i=(t,r,i)=>{return v(e,(a=t,s=i,"none"===(n=r)?"none":`${a} ${n} ${s}`));var a,n,s};return(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center"},children:[(0,_o.jsx)("select",{value:t.width,onChange:e=>i(e.target.value,t.style,t.color),"data-decorator-ignore":"true",style:{...$S,flex:1},children:r.map(e=>(0,_o.jsx)("option",{value:e,children:e},e))}),(0,_o.jsxs)("select",{value:t.style,onChange:e=>i(t.width,e.target.value,t.color),"data-decorator-ignore":"true",style:{...$S,flex:2},children:[(0,_o.jsx)("option",{value:"none",children:"немає (none)"}),(0,_o.jsx)("option",{value:"solid",children:"суцільна (solid)"}),(0,_o.jsx)("option",{value:"double",children:"подвійна (double)"}),(0,_o.jsx)("option",{value:"dashed",children:"штрихова (dashed)"}),(0,_o.jsx)("option",{value:"dotted",children:"пунктирна (dotted)"}),(0,_o.jsx)("option",{value:"groove",children:"3D жолоб (groove)"}),(0,_o.jsx)("option",{value:"ridge",children:"3D гребінь (ridge)"}),(0,_o.jsx)("option",{value:"inset",children:"3D втиснута (inset)"}),(0,_o.jsx)("option",{value:"outset",children:"3D витиснута (outset)"})]}),(0,_o.jsx)(wS,{type:"color",value:zS(t.color),onChange:e=>i(t.width,t.style,e.target.value),"data-decorator-ignore":"true"}),(0,_o.jsx)(bS,{value:t.color,onChange:e=>i(t.width,t.style,e.target.value),placeholder:"#ffb36c","data-decorator-ignore":"true",style:{flex:2,minWidth:"70px"}})]})})(),"transform"===r&&$(e,n,i),"text"===r&&(0,_o.jsx)(bS,{value:n,onChange:t=>v(e,t.target.value),placeholder:i||"успадковується","data-decorator-ignore":"true"})]})},e)}),(0,_o.jsxs)(mS,{children:[(0,_o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_o.jsx)(yS,{children:"Власні CSS-властивості"}),(0,_o.jsx)("span",{style:{fontSize:"10px",color:"#858da3"},children:"Будь-яка властивість, окрім opacity"})]}),M.map(([e,t])=>(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,_o.jsx)(hS,{style:{minWidth:"90px"},children:e}),(0,_o.jsx)(bS,{value:t,onChange:t=>w(r=>({...r,[g]:{...r[g]||{},[e]:t.target.value}})),"data-decorator-ignore":"true"}),(0,_o.jsx)(SS,{onClick:()=>v(e,""),"data-decorator-ignore":"true",children:"✕"})]},e)),(0,_o.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,_o.jsx)(bS,{value:d,onChange:e=>h(e.target.value),placeholder:"напр., letter-spacing","data-decorator-ignore":"true"}),(0,_o.jsx)(bS,{value:f,onChange:e=>p(e.target.value),onKeyDown:e=>"Enter"===e.key&&k(),placeholder:"напр., 2px","data-decorator-ignore":"true"}),(0,_o.jsx)(SS,{onClick:k,"data-decorator-ignore":"true",children:"+"})]}),x&&(0,_o.jsx)("span",{style:{fontSize:"11px",color:"#f38ba8"},children:x})]})]}),(0,_o.jsxs)(vS,{children:[(0,_o.jsx)(MS,{onClick:()=>{t(),setTimeout(()=>{"input"===m||"textarea"===m||"select"===m?e.focus():e.click()},10)},"data-decorator-ignore":"true",children:"▶ Виконати дію"}),(0,_o.jsx)(jS,{onClick:()=>{const e=i(y);LS.forEach(t=>{const i=b[t]||{},a=e[t]||{};new Set([...Object.keys(i),...Object.keys(a)]).forEach(e=>{if(AS.has(e))return;const n=i[e]||"",s=a[e]||"";n!==s&&r(y,m,e,s,n,t)})}),t()},"data-decorator-ignore":"true",children:"✓ Застосувати"})]})]})]})},TS="2px dashed #ffb36c",FS="2px",PS="crosshair",VS=e=>{if(!e)return!0;let t=e;for(;t&&t!==document.body;){if("true"===t.getAttribute?.("data-decorator-ignore")||"HEADER"===t.tagName||"decorator-overlay"===t.id)return!0;t=t.parentElement}return!1},_S=({isStickyBgMode:e})=>{const{isDecoratorMode:t}=XM(),[r,i]=(0,Ar.useState)(null),[a,n]=(0,Ar.useState)(null),s=(0,Ar.useCallback)(e=>{t&&!VS(e.target)&&(r&&r!==e.target&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor=""),e.target.style.outline=TS,e.target.style.outlineOffset=FS,e.target.style.cursor=PS,i(e.target))},[t,r]),o=(0,Ar.useCallback)(e=>{t&&!VS(e.target)&&(e.target.style.outline="",e.target.style.outlineOffset="",e.target.style.cursor="",r===e.target&&i(null))},[t,r]),l=(0,Ar.useCallback)(e=>{t&&e.isTrusted&&(VS(e.target)||(e.preventDefault(),e.stopPropagation(),e.target&&(e.target.style.outline="",e.target.style.outlineOffset="",e.target.style.cursor=""),n(e.target)))},[t]);return(0,Ar.useEffect)(()=>{if(t)return document.addEventListener("mouseover",s,!0),document.addEventListener("mouseout",o,!0),document.addEventListener("click",l,!0),()=>{document.removeEventListener("mouseover",s,!0),document.removeEventListener("mouseout",o,!0),document.removeEventListener("click",l,!0)};r&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor="",i(null))},[t,s,o,l,r]),(0,Ar.useEffect)(()=>(document.body.style.cursor=t?"crosshair":"",()=>{document.body.style.cursor=""}),[t]),t||a?(0,_o.jsx)(_o.Fragment,{children:a&&(0,_o.jsx)(RS,{targetElement:a,onClose:()=>n(null)})}):null},OS=()=>{try{return"true"===localStorage.getItem("site_context_menu_enabled")}catch{return!1}};function BS({children:e,isDarkMode:t}){const[r,i]=(0,Ar.useState)(OS),[a,n]=(0,Ar.useState)(""),[s,o]=(0,Ar.useState)(null),[l,c]=(0,Ar.useState)(null);(0,Ar.useEffect)(()=>{const e=()=>i(OS());return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[]);return(0,_o.jsxs)(Ze,{children:[(0,_o.jsx)(Et,{asChild:!0,disabled:!r,children:(0,_o.jsx)("div",{className:"site-context-menu-scope",onContextMenuCapture:r?e=>{n(window.getSelection()?.toString().trim()??"");const t=(e.target instanceof Element?e.target:null)?.closest("img, video");t instanceof HTMLImageElement?o({kind:"image",src:t.currentSrc||t.src,alt:t.alt}):t instanceof HTMLVideoElement?o({kind:"video",src:t.currentSrc||t.src||t.querySelector("source")?.src}):o(null)}:void 0,children:e})}),(0,_o.jsx)(Gt,{children:(0,_o.jsxs)(He,{className:"site-context-menu-content","data-theme":t?"dark":"light",collisionPadding:10,sideOffset:5,children:[(0,_o.jsxs)(wt,{className:"site-context-menu-item",title:"Браузер не дозволяє сайту відкрити своє меню. Натисніть Shift + ПКМ.",onSelect:()=>{Ym("Утримайте Shift і натисніть правою кнопкою миші — відкриється меню браузера",{icon:"🖥️",duration:5e3})},children:[(0,_o.jsx)(Y,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Меню браузера (Shift + права кнопка миші)"})]}),(0,_o.jsx)(tt,{className:"site-context-menu-separator"}),(0,_o.jsxs)(wt,{className:"site-context-menu-item",title:"Відкрийте DevTools клавішами F12 або Ctrl+Shift+I",onSelect:()=>Ym("Браузер не дозволяє сайту відкрити DevTools. Натисніть F12 або Ctrl+Shift+I."),children:[(0,_o.jsx)(rr,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Перевірити (DevTools · F12)"})]}),(0,_o.jsxs)(wt,{className:"site-context-menu-item",disabled:!a,onSelect:()=>{(async()=>{try{if(navigator.clipboard?.writeText)return void(await navigator.clipboard.writeText(a))}catch{}const e=document.createElement("textarea");e.value=a,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()})()},children:[(0,_o.jsx)(cr,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Копіювати виділене"})]}),s&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(tt,{className:"site-context-menu-separator"}),(0,_o.jsxs)(wt,{className:"site-context-menu-item",onSelect:()=>{(async()=>{if(s)if("video"!==s.kind)try{const e=await fetch(s.src),t=await createImageBitmap(await e.blob()),r=document.createElement("canvas");r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(t,0,0);const i=await new Promise(e=>r.toBlob(e,"image/png"));await navigator.clipboard.write([new ClipboardItem({"image/png":i})])}catch{await navigator.clipboard.writeText(s.src)}else await navigator.clipboard.writeText(s.src)})()},children:["image"===s.kind?(0,_o.jsx)(bt,{"aria-hidden":"true"}):(0,_o.jsx)(Pe,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"image"===s.kind?"Копіювати фото":"Копіювати відео"})]}),(0,_o.jsxs)(wt,{className:"site-context-menu-item",onSelect:()=>{(async()=>{if(!s)return;const e=document.createElement("a");e.download=new URL(s.src,window.location.href).pathname.split("/").pop()||("image"===s.kind?"photo":"video");try{const t=await fetch(s.src);e.href=URL.createObjectURL(await t.blob()),e.click(),window.setTimeout(()=>URL.revokeObjectURL(e.href),1e3)}catch{e.href=s.src,e.target="_blank",e.rel="noreferrer",e.click()}})()},children:[(0,_o.jsx)(Oe,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"image"===s.kind?"Скачати фото":"Скачати відео"})]}),"image"===s.kind&&(0,_o.jsxs)(wt,{className:"site-context-menu-item",onSelect:()=>{"image"===s?.kind&&window.open(`https://lens.google.com/uploadbyurl?url=${encodeURIComponent(s.src)}`,"_blank","noopener,noreferrer")},children:[(0,_o.jsx)(J,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Шукати фото у Google Об'єктив"})]}),(0,_o.jsxs)(wt,{className:"site-context-menu-item",onSelect:()=>{s&&window.open(s.src,"_blank","noopener,noreferrer")},children:[(0,_o.jsx)($,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Відкрити в новій вкладці"})]})]}),(0,_o.jsx)(tt,{className:"site-context-menu-separator"}),(0,_o.jsxs)(wt,{className:"site-context-menu-item",onSelect:()=>{const e=document.querySelector("article, [role='article']")??document.querySelector("main")??document.body,t=document.title||"Режим читання",r=e.innerText.trim();c({title:t,text:r})},children:[(0,_o.jsx)(kt,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Відкрити в режимі читання"})]})]})}),l&&(0,Cc.createPortal)((0,_o.jsx)("div",{className:"site-reader-backdrop",onMouseDown:e=>e.target===e.currentTarget&&c(null),children:(0,_o.jsxs)("section",{className:"site-reader",role:"dialog","aria-modal":"true","aria-labelledby":"site-reader-title","data-theme":t?"dark":"light",children:[(0,_o.jsxs)("header",{className:"site-reader-header",children:[(0,_o.jsx)("h1",{id:"site-reader-title",children:l.title}),(0,_o.jsx)("button",{type:"button","aria-label":"Закрити режим читання",onClick:()=>c(null),children:(0,_o.jsx)(Kt,{"aria-hidden":"true"})})]}),(0,_o.jsx)("article",{className:"site-reader-content",children:l.text.split("\n").filter(Boolean).map((e,t)=>(0,_o.jsx)("p",{children:e},`${t}-${e.slice(0,24)}`))})]})}),document.body)]})}var HS=(e="",t="",r="")=>{try{const a=r.match(/^\/pohoda\/([a-z-]+)\/?$/),n=a&&(i=a[1],xg.find(e=>gg(e)===i)||null);if(n)return{isSearchEntry:!0,query:n.name,cityName:n.name,cityData:{id:`search-${n.name.toLowerCase()}`,name:n.name,fullName:n.fullName,lat:n.lat,lon:n.lon}};const s=new URLSearchParams(e||window.location.search);let o=s.get("q")||s.get("search")||s.get("city")||s.get("query")||s.get("pohoda")||s.get("s");if(!o&&t){const e=t.indexOf("?");if(-1!==e){const r=new URLSearchParams(t.substring(e));o=r.get("q")||r.get("search")||r.get("city")||r.get("query")||r.get("pohoda")||r.get("s")}}if(!o)return{isSearchEntry:!1,query:"",cityData:null};const l=decodeURIComponent(o).trim();if(!l)return{isSearchEntry:!1,query:"",cityData:null};const c=ug(l);if(c)return{isSearchEntry:!0,query:l,cityName:c.name,cityData:{id:`search-${c.name.toLowerCase()}`,name:c.name,fullName:c.fullName,lat:c.lat,lon:c.lon}};const d=l.replace(/^(погода\s+(в|у)?\s*)/i,"").replace(/(\s*погода)$/i,"").trim(),h=d.charAt(0).toUpperCase()+d.slice(1);return{isSearchEntry:!0,query:l,cityName:h,cityData:{id:`search-${h.toLowerCase()}`,name:h,fullName:`${h} (UA)`,lat:null,lon:null}}}catch(a){return console.error("Помилка аналізу пошукового запиту:",a),{isSearchEntry:!1,query:"",cityData:null}}var i},qS=e=>Array.from(new Uint8Array(e),e=>e.toString(16).padStart(2,"0")).join(""),KS=async(e,t)=>{const r=await crypto.subtle.importKey("raw",(new TextEncoder).encode(e),"PBKDF2",!1,["deriveBits"]),i=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:t,iterations:15e4},r,256);return qS(i)},ZS=()=>Boolean(globalThis.crypto?.subtle),US=async e=>{if(!ZS())return{};const t=crypto.getRandomValues(new Uint8Array(16));return{passwordSalt:qS(t),passwordHash:await KS(e,t)}},JS=async(e,{passwordSalt:t,passwordHash:r})=>{return!!(t&&r&&ZS())&&await KS(e,(i=t,new Uint8Array(i.match(/../g).map(e=>parseInt(e,16)))))===r;var i},WS=e=>{if(!e)return e;const{password:t,passwordHash:r,passwordSalt:i,...a}=e;return a},GS="settings_sync_pending",YS=e=>JSON.stringify(e,(e,t)=>t&&"object"==typeof t&&!Array.isArray(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t),QS=e=>JSON.parse(JSON.stringify(e)),XS="animations_disabled",e$="animationsPrefChanged",t$=()=>{try{return"true"===localStorage.getItem(XS)}catch{return!1}},r$=e=>{"undefined"!=typeof document&&document.documentElement.toggleAttribute("data-animations-off",e)};r$(t$());var i$=e=>{try{localStorage.setItem(XS,e?"true":"false")}catch{}r$(e),window.dispatchEvent(new Event(e$))},a$=e=>(window.addEventListener(e$,e),()=>window.removeEventListener(e$,e)),n$=()=>(0,Ar.useSyncExternalStore)(a$,t$,()=>!1),s$="/assets/kate-and-domino-oaIgeWU2.webm",o$="#ffb36c",l$=(()=>{if("undefined"==typeof navigator)return!1;const e=navigator.userAgent;return!(/safari/i.test(e)&&!/chrome|chromium|crios|edg|android/i.test(e))})(),c$=Fo`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,d$=Fo`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
`,h$=Fo`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`,f$=Fo`
  0%, 100% { box-shadow: 0 0 0 9999px rgba(0,0,0,0.62), 0 0 0 0 rgba(255,179,108,0.55); }
  50% { box-shadow: 0 0 0 9999px rgba(0,0,0,0.62), 0 0 0 8px rgba(255,179,108,0); }
`,p$="\n  background: linear-gradient(160deg, rgba(28, 20, 12, 0.95) 0%, rgba(10, 10, 16, 0.97) 100%);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 179, 108, 0.55);\n  box-shadow: 0 14px 36px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06);\n  color: #fff;\n",x$="\n  background: linear-gradient(135deg, #ffca91, #ff9d48);\n  color: #1a0800;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n  transition: filter 0.15s ease, transform 0.15s ease;\n  &:hover:not(:disabled) { filter: brightness(1.06); transform: translateY(-1px); }\n  &:disabled { opacity: 0.55; cursor: default; }\n  &:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }\n",u$=Eo.div`
  ${p$}
  position: fixed;
  bottom: 70px;
  right: 12px;
  width: 260px;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 16px;
  z-index: 10000;
  animation: ${e=>e.$closing?d$:c$} 0.3s ease-out forwards;
  pointer-events: ${e=>e.$closing?"none":"auto"};

  /* На телефоні знизу бейдж закривав кнопку «Погода» — переносимо під шапку */
  @media (max-width: 767px) {
    top: calc(80px + env(safe-area-inset-top));
    bottom: auto;
    width: 220px;
    padding: 10px 12px;
  }
`,g$=Eo.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-right: 22px;
`,m$=Eo.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  span { display: block; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.65); }
`,y$=Eo.button`
  ${x$}
  width: 100%;
  border-radius: 10px;
  padding: 9px 12px;
  font-size: 14px;
`,b$=Eo.div`
  margin-top: 8px;
  font-size: 11px;
  line-height: 1.35;
  color: rgba(255,255,255,0.6);
`,w$=Eo.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 50%;
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s ease;
  &:hover { background: rgba(255,255,255,0.2); color: #fff; }
`,v$=Eo.div`
  flex-shrink: 0;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at 50% 60%, rgba(255,179,108,0.35) 0%, rgba(255,179,108,0.08) 70%);
  border: 1px solid rgba(255,179,108,0.45);
  animation: ${h$} 2.6s ease-in-out infinite;

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 170%;
    transform: translate(-50%, -50%);
    image-rendering: pixelated;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,k$=Eo.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>Math.round(.5*e.$size)}px;
`,j$=Eo.div`
  ${p$}
  position: fixed;
  width: min(320px, calc(100vw - 20px));
  box-sizing: border-box;
  padding: 14px 14px 12px;
  border-radius: 16px;
  z-index: 10002;
  pointer-events: auto;
  transition: opacity 0.3s ease, top 0.3s ease, left 0.3s ease;
`,M$=Eo.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`,S$=Eo.div`
  flex: 1;
  min-width: 0;
`,$$=Eo.div`
  font-size: 14px;
  font-weight: 700;
  color: ${o$};
`,D$=Eo.div`
  font-size: 11px;
  color: rgba(255,255,255,0.6);
  margin: 2px 0 6px;
`,C$=Eo.div`
  display: flex;
  gap: 3px;
`,L$=Eo.span`
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background: ${e=>e.$done?o$:"rgba(255,255,255,0.15)"};
  transition: background 0.3s ease;
`,A$=Eo.div`
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.5;
  color: #f3eee8;
`,z$=Eo.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
`,I$=Eo.button`
  ${x$}
  padding: 7px 16px;
  border-radius: 9px;
  font-size: 13px;
`,E$=Eo.button`
  background: transparent;
  color: rgba(255,255,255,0.6);
  border: none;
  padding: 6px 4px;
  cursor: pointer;
  font-size: 12px;
  &:hover { color: #fff; text-decoration: underline; }
`,N$=Eo.div`
  position: fixed;
  border: 2px solid ${o$};
  border-radius: 12px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.62);
  animation: ${f$} 1.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,R$=({size:e})=>{const[t,r]=(0,Ar.useState)(!l$);return(0,_o.jsx)(v$,{$size:e,"aria-hidden":"true",children:t?(0,_o.jsx)(k$,{$size:e,children:"🦃"}):(0,_o.jsx)("video",{src:s$,autoPlay:!("undefined"!=typeof window&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),loop:!0,muted:!0,playsInline:!0,preload:"auto",onError:()=>r(!0)})})},T$=({user:e})=>{const{isActive:t,currentStep:r,showInitialModal:i,startTutorial:a,skipTutorial:n,refs:s,nextStep:o,jumpToStep:l,closeTutorial:c}=Lh(),[d,h]=(0,Ar.useState)({}),[f,p]=(0,Ar.useState)({display:"none"}),[x,u]=(0,Ar.useState)(!0),[g,m]=(0,Ar.useState)(!1),y=(0,Ar.useRef)(null),b=(0,Ar.useRef)(null),[w,v]=(0,Ar.useState)(!1);(0,Ar.useEffect)(()=>{if(i)return void v(!0);const e=setTimeout(()=>v(!1),300);return()=>clearTimeout(e)},[i]);const k=(0,Ar.useCallback)(e=>{if(!e)return;const t=e.getBoundingClientRect(),r=Math.max(2,t.top-5),i=Math.max(2,t.left-5),a=Math.min(t.width+10,window.innerWidth-i-2),n=Math.min(t.height+10,window.innerHeight-r-2);p({top:r,left:i,width:a,height:n});const s=Math.min(320,window.innerWidth-20);let o=t.bottom+15,l=t.left;o+250>window.innerHeight&&(o=t.top-250-10),o<5&&(o=5),l+s>window.innerWidth&&(l=window.innerWidth-s-10),l<5&&(l=5),h({top:o,left:l})},[]);(0,Ar.useEffect)(()=>{if(!t)return;const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[t]),(0,Ar.useEffect)(()=>{if(!t)return;const e=j.find(e=>e.step===r);if(!e)return void c();u(!0),m(!1),e.onEnter&&e.onEnter(),e.autoAction&&e.autoAction();const i=e.targetName?s.current[e.targetName]:e.targetId?document.getElementById(e.targetId):null;if(b.current=i,i){i.scrollIntoView({behavior:"smooth",block:"center"});const e=setTimeout(()=>k(i),500),t=()=>k(i);return window.addEventListener("resize",t),()=>{clearTimeout(e),window.removeEventListener("resize",t)}}p({display:"none"}),h({top:"50%",left:"50%",transform:"translate(-50%, -50%)"})},[r,t]),(0,Ar.useEffect)(()=>{if(!t||1!==r)return;const e=e=>{e.detail&&e.detail.value&&e.detail.value.trim().length>0?(u(!1),clearTimeout(y.current),y.current=setTimeout(()=>u(!0),5e3)):(clearTimeout(y.current),u(!0))};return window.addEventListener("domino-hero-input-change",e),()=>{window.removeEventListener("domino-hero-input-change",e),clearTimeout(y.current)}},[t,r]),(0,Ar.useEffect)(()=>{if(!t)return;const e=()=>{1===r&&o()};return window.addEventListener("domino-next-step-auto",e),()=>window.removeEventListener("domino-next-step-auto",e)},[t,r,o]),(0,Ar.useEffect)(()=>{if(!t)return;const e=()=>{3===r&&o()};return window.addEventListener("domino-weather-gear-clicked",e),()=>window.removeEventListener("domino-weather-gear-clicked",e)},[t,r,o]);const j=[{step:1,targetName:"heroInput",text:"Привіт, я Доміно! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у списку. Можна натиснути кілька міст поспіль."},{step:2,targetName:null,text:"Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.",autoAction:()=>{setTimeout(()=>{document.body.style.overflow="",window.scrollTo({top:window.innerHeight,behavior:"smooth"}),setTimeout(()=>{document.body.style.overflow="hidden",o()},1500)},2e3)},noSkip:!0},{step:3,targetName:"weatherGear",text:"У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань."},{step:4,targetName:"weatherModal",text:"Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.\n\n• До 8 карток плюс GPS-картка (понад 5 — навантаження на пристрій).\n• До 40 нових карток на добу."},{step:5,targetId:"map",text:"Тут усі карти в одному місці: Windy і Ventusky для погоди, мапа тривог, DeepState та інші.\n\n• Обирай джерело в списку карт.\n• Додавай власні фрейми — сайти, які дозволяють вбудовування (ми перевіримо це за тебе).\n• На комп’ютері та планшеті (горизонтально) можна відкрити дві карти поруч.",onEnter:()=>{window.dispatchEvent(new CustomEvent("domino-close-weather-settings"))}},{step:6,targetName:"newsHeader",text:"Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали."},{step:7,targetName:"headerBgTheme",text:"Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту."},{step:8,targetName:null,text:e?"Дякуємо, що ти з нами! Насолоджуйся сайтом.":"Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)",isLast:!0}],M=(0,Ar.useCallback)(()=>{if(g)return;m(!0);const e=j.find(e=>e.step===r);if(e)if(e.isLast)c();else{if(1===r){const e=s.current.heroInput;if(e&&e.value&&e.value.trim().length>0)return void setTimeout(()=>m(!1),500);window.dispatchEvent(new CustomEvent("domino-auto-input-konotop")),setTimeout(()=>o(),2500)}else 3===r?(window.dispatchEvent(new CustomEvent("domino-open-weather-settings")),o()):o();setTimeout(()=>m(!1),2e3)}},[g,r,j,c,o,s]),S=(0,Ar.useCallback)(()=>{g||(window.dispatchEvent(new CustomEvent("domino-close-weather-settings")),l(8))},[g,l]);if(w||i)return(0,_o.jsxs)(u$,{$closing:!i,role:"dialog","aria-label":"Навчання від Доміно",children:[(0,_o.jsx)(w$,{onClick:n,"aria-label":"Закрити",children:"×"}),(0,_o.jsxs)(g$,{children:[(0,_o.jsx)(R$,{size:52}),(0,_o.jsxs)(m$,{children:["Я Доміно!",(0,_o.jsx)("span",{children:"Покажу сайт за хвилину"})]})]}),(0,_o.jsx)(y$,{onClick:a,children:"Почати навчання"}),(0,_o.jsx)(b$,{children:"Запустити знову можна в Параметрах → Режими сайту"})]});if(!t)return null;const $=j.find(e=>e.step===r);if(!$)return null;const D="none"!==f.display,C=!$.isLast&&!$.noSkip&&r<=6;return(0,_o.jsxs)(_o.Fragment,{children:[D&&(0,_o.jsx)(N$,{style:f}),(0,_o.jsxs)(j$,{role:"dialog","aria-live":"polite",style:{...d,opacity:x?1:0,pointerEvents:x?"auto":"none"},children:[(0,_o.jsxs)(M$,{children:[(0,_o.jsx)(R$,{size:48}),(0,_o.jsxs)(S$,{children:[(0,_o.jsx)($$,{children:"Доміно"}),(0,_o.jsxs)(D$,{children:["Крок ",r," з ",8]}),(0,_o.jsx)(C$,{"aria-hidden":"true",children:Array.from({length:8},(e,t)=>(0,_o.jsx)(L$,{$done:t<r},t))})]})]}),(0,_o.jsx)(A$,{children:$.text}),!$.noSkip&&(0,_o.jsxs)(z$,{children:[C?(0,_o.jsx)(E$,{onClick:S,title:"Пропустити до кроку 8",children:"До кінця →"}):(0,_o.jsx)("span",{}),(0,_o.jsx)(I$,{onClick:M,disabled:g,children:$.isLast?"Завершити":"Пропустити"})]})]})]})},F$=Eo.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,P$=({content:e,children:t,placement:r="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,Ar.useState)(!1),s=(0,Ar.useRef)(null),{refs:o,floatingStyles:l,context:c}=Ie({open:a,onOpenChange:n,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:C,middleware:[ge(8),tr(),z({padding:5}),M({element:s})]}),{isMounted:d,styles:h}=pe(c,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),f=or(c,{move:!1}),p=Xt(c),x=st(c),u=ar(c,{role:"tooltip"}),{getReferenceProps:g,getFloatingProps:m}=_e([f,p,x,u]);if(!e)return t;const y=i?"#111111":"#ffffff";return(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("span",{ref:o.setReference,...g({onMouseLeave:()=>n(!1),onClick:()=>n(!1)}),style:{display:"inline-flex"},children:t}),d&&(0,_o.jsx)(dt,{children:(0,_o.jsxs)(F$,{ref:o.setFloating,$isDarkMode:i,style:{...l,...h},...m(),children:[e,(0,_o.jsx)(jt,{ref:s,context:c,fill:y,stroke:"#00acb9",strokeWidth:1})]})})]})};(0,Ar.lazy)(()=>vr(()=>import("./Aihelp-BOm2XwFF.js"),__vite__mapDeps([14,1,2,3,10,11,9,12,13])));var V$=(0,Ar.lazy)(()=>vr(()=>import("./ShopModal-cpa1xglo.js"),__vite__mapDeps([15,1,2,3,11,9]))),_$=(0,Ar.lazy)(()=>vr(()=>import("./ClimateMap-CsQUMNry.js"),__vite__mapDeps([16,1,2,9,3,10,11]))),O$=(0,Ar.lazy)(()=>vr(()=>import("./Modal-U0hz_5pj.js"),__vite__mapDeps([17,1,2,5,3,10,7]))),B$=(0,Ar.lazy)(()=>vr(()=>import("./UserSettingsModal-CydwlPNm.js"),__vite__mapDeps([18,1,2,9,5,3,10,11,7]))),H$=(0,Ar.lazy)(()=>vr(()=>Promise.resolve().then(()=>kg),void 0)),q$=(function(e,...t){const r=Ao(e,...t),i=`sc-global-${xs(JSON.stringify(r))}`,a=new Ro(r,i),n=e=>{const t=ko(),r=Ar.useContext(jo);let n;{const e=Ar.useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(i)),n=e.current}t.styleSheet.server&&s(n,e,t.styleSheet,r,t.stylis);{const o=a.isStatic?[n,t.styleSheet,a]:[n,e,t.styleSheet,r,t.stylis,a],l=Ar.useRef(a);Ar.useLayoutEffect(()=>{t.styleSheet.server||(l.current!==a&&(t.styleSheet.clearRules(i),l.current=a),s(n,e,t.styleSheet,r,t.stylis))},o),Ar.useLayoutEffect(()=>()=>{t.styleSheet.server||a.removeStyles(n,t.styleSheet)},[n,t.styleSheet,a])}return t.styleSheet.server&&a.instanceRules.delete(n),null};function s(e,t,r,i,s){if(a.isStatic)a.renderStyles(e,Jn,r,s);else{const o=Object.assign(Object.assign({},t),{theme:as(t,i,n.defaultProps)});a.renderStyles(e,o,r,s)}}return Ar.memo(n)})`
  ${e=>e.$locked&&Ao`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
      /* Візуальні фільтри тепер живуть на окремому шарі (useVisualFilters) */
      #visual-filters-layer {
        display: none !important;
      }
    `}
`,K$=Fo`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,Z$=Fo`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,U$=Eo.div`
  background-color: ${e=>e.$isStickyBgMode?"transparent":e.$isDarkMode?"#000000":"#ffffff"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#000000"};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${e=>e.$isHidden?"none":"block"};
`,J$=(e,t=1)=>0===e?t?"☀️ Сонячно":"🌙 Місячно":e>=1&&e<=3?t?"🌤️ Мінлива хмарність":"☁️ Мінлива хмарність":e>=45&&e<=48?"☁️ Туман":e>=51&&e<=55?"🌧️ Мряка":e>=56&&e<=57?"🌧️ Мряка з снігом":e>=61&&e<=65?"🌧️ Дощ":e>=66&&e<=67?"🌧️ Дощ з снігом":e>=71&&e<=75?"❄️ Снігопад":77===e?"❄️ Сніжна крупа":e>=80&&e<=82?"🌦️ Зливовий дощ":e>=85&&e<=86?"❄️ Зливовий сніг":e>=95&&e<=99?"⛈️ Гроза":"☁️ Хмарно",W$=(e,t=1)=>0===e?t?"Сонячно":"Місячно":e>=1&&e<=3?t?"Мінлива хмарність":"Нічна мінлива хмарність":e>=45&&e<=48?"Туманно":e>=51&&e<=55?"Мряка":e>=56&&e<=57?"Мряка з снігом":e>=61&&e<=65?"Дощ":e>=66&&e<=67?"Дощ з снігом":e>=71&&e<=75?"Сніг":77===e?"Сніжна крупа":e>=80&&e<=82?"Зливовий дощ":e>=85&&e<=86?"Зливовий сніг":e>=95&&e<=99?"Гроза":"Хмарно",G$=(e,t=1)=>0===e?t?(0,_o.jsx)(Vt,{}):(0,_o.jsx)(re,{}):e>=1&&e<=3?t?(0,_o.jsx)(Bt,{}):(0,_o.jsx)(mt,{}):e>=45&&e<=48?(0,_o.jsx)(gt,{}):e>=51&&e<=55||e>=56&&e<=57?(0,_o.jsx)(Rt,{}):e>=61&&e<=65||e>=66&&e<=67?t?(0,_o.jsx)(Lt,{}):(0,_o.jsx)(te,{}):e>=71&&e<=75||77===e?(0,_o.jsx)(Ee,{}):e>=80&&e<=82?t?(0,_o.jsx)(Lt,{}):(0,_o.jsx)(Re,{}):e>=85&&e<=86?(0,_o.jsx)(Ee,{}):e>=95&&e<=99?(0,_o.jsx)(Mt,{}):(0,_o.jsx)(gt,{}),Y$=Eo.div`
  background-color: ${e=>e.$isStickyBgMode?"transparent":e.$isDarkMode?"#000000":"transparent"};
  color: ${e=>e.$isDarkMode?"#ffffff":"inherit"};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`,Q$=Eo.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 42px;
  justify-content: flex-start;
  width: 100%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 18px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.12);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #00ffe5, #8bdcff);
    border-radius: 999px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #6ef5ea, #b3ecff);
  }

  > * {
    scroll-snap-align: center;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
  }
`,X$=Eo.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  z-index: 9000;
  margin-top: 8px;
`,eD=Eo.button`
  position: absolute;
  top: 50%;
  ${e=>"previous"===e.$direction?"left: 42px;":"right: 42px;"}
  /* Телефон: стрілки майже біля країв екрана (зліва запас під 3D-грань, що виступає на 10px) */
  @media (max-width: 767px) {
    ${e=>"previous"===e.$direction?"left: 12px;":"right: 4px;"}
  }
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  
  border: 2px solid #00ffe5;
  border-radius: 6px;
  background: #000;
  color: #00ffe5;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  box-shadow: 0 0 12px rgba(0, 255, 229, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  /* Підключення анімації левітації */
  animation: ${K$} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${Z$} 2.5s ease-in-out infinite;
  }

  /* 1. Задня грань */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 44px;
    height: 40px;
    border-top: 2px solid rgb(0, 255, 229);
    border-left: 2px solid rgb(0, 255, 229);
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
`,tD=Eo.button`
  width: 30px;
  height: 30px;
  background: ${e=>e.$active?"#fc7a00":"#00ffe5"};
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
    background: ${e=>e.$active?"#fdd9b6":"#3095b7"};
  }
`,rD=Eo.div`
  position: relative;
  z-index: 1800;
  isolation: isolate;
`,iD=Eo.div`
  position: relative;
  width: min(420px, calc(100% - 16px));
  margin: 0 auto 10px;
  z-index: 9500;
`,aD=Eo.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 4px;
  & > * {
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }
`,nD=Eo.button`
  position: relative;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 5px 14px;
  border-radius: 10px;
  border: 2px solid ${e=>e.$off?"#888":"rgba(0, 255, 229, 0.6)"};
  background: ${e=>e.$isDarkMode?"rgba(0, 0, 0, 0.93)":"rgb(255, 255, 255)"};
  color: ${e=>e.$off?e.$isDarkMode?"#bbb":"#555":e.$isDarkMode?"#00ffe5":"#006b61"};
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 255, 229, 0.4);
  }
`,sD=({isDarkMode:e})=>{const t=n$();return(0,_o.jsxs)(nD,{type:"button",$off:t,$isDarkMode:e,"aria-pressed":t,onClick:()=>i$(!t),children:[t?(0,_o.jsx)(ze,{}):(0,_o.jsx)(Z,{}),t?"Увімкнути анімації":"Вимкнути анімації"]})},oD=Eo.button`
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 14px;

  /* Лупа й стрілка не стискаються, текст обрізається трьома крапками */
  & > svg,
  & > span:last-child {
    flex-shrink: 0;
  }
  & > span:first-of-type {
    flex: 1;
    min-width: 0;
    text-align: left;
  }
  border-radius: 8px;
  border: 2px solid #00ffe5;
  background: ${e=>e.$isDarkMode?"#000":"#fff"};
  color: ${e=>e.$isDarkMode?"#00ffe5":"#006b61"};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 229, 0.25);

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    box-shadow: 0 0 16px rgba(0, 255, 229, 0.5);
  }
`,lD=Eo.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #00ffe5;
  background: ${e=>e.$isDarkMode?"#0a0a0a":"#fff"};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`,cD=Eo.input`
  width: 100%;
  box-sizing: border-box;
  padding: 7px 10px;
  margin-bottom: 6px;
  border-radius: 6px;
  border: 1.5px solid rgba(0, 255, 229, 0.6);
  background: ${e=>e.$isDarkMode?"#000":"#f5f8fc"};
  color: ${e=>e.$isDarkMode?"#00ffe5":"#000"};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ffe5;
  }
`,dD=Eo.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 240px;
  overflow-y: auto;
`,hD=Eo.li`
  & > button {
    width: 100%;
    text-align: left;
    padding: 7px 10px;
    border: none;
    border-radius: 6px;
    background: ${e=>e.$active?"#fc7a00":"transparent"};
    color: ${e=>e.$active?"#000":e.$isDarkMode?"#e6fffc":"#111"};
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > button:hover {
    background: ${e=>e.$active?"#fdd9b6":"rgba(0, 255, 229, 0.2)"};
  }
`,fD=Eo.div`
  padding: 7px 10px;
  font-size: 13px;
  opacity: 0.7;
  color: ${e=>e.$isDarkMode?"#e6fffc":"#111"};
`,pD=({children:e,labels:t=[],isDarkMode:r})=>{const i=(0,Ar.useRef)(null),[a,n]=(0,Ar.useState)(0),[s,o]=(0,Ar.useState)(""),[l,c]=(0,Ar.useState)(!1),d=(0,Ar.useRef)(null);(0,Ar.useEffect)(()=>{if(!l)return;const e=e=>{d.current&&!d.current.contains(e.target)&&c(!1)},t=e=>{"Escape"===e.key&&c(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[l]);const h=Ar.Children.toArray(e),f=h.length,p=(0,Ar.useCallback)(e=>{const t=i.current;if(!t)return;const r=t.children[e];r&&t.scrollTo({left:r.offsetLeft,behavior:"smooth"})},[]),x=(0,Ar.useCallback)(e=>{if(f<2)return;const t=(a+e+f)%f;n(t),p(t)},[a,f,p]);(0,Ar.useEffect)(()=>{a>=f&&f>0&&n(f-1)},[f,a]),(0,Ar.useEffect)(()=>{const e=i.current;if(!e)return;let t;const r=()=>{clearTimeout(t),t=setTimeout(()=>{const t=Array.from(e.children);if(0===t.length)return;const r=t.reduce((r,i,a)=>{const n=Math.abs(t[r].offsetLeft-e.scrollLeft);return Math.abs(i.offsetLeft-e.scrollLeft)<n?a:r},0);n(r)},50)};return e.addEventListener("scroll",r,{passive:!0}),()=>{clearTimeout(t),e.removeEventListener("scroll",r)}},[f]);const u=e=>{n(e),p(e),c(!1),o("")},m=s.trim().toLowerCase(),y=t.map((e,t)=>({label:e||`Картка ${t+1}`,index:t})).filter(({label:e})=>!m||e.toLowerCase().includes(m));return(0,_o.jsxs)(rD,{children:[f>1&&(0,_o.jsxs)(iD,{ref:d,children:[(0,_o.jsxs)(oD,{type:"button",$isDarkMode:r,"aria-expanded":l,onClick:()=>c(e=>!e),children:[(0,_o.jsx)(g,{"aria-hidden":"true"}),(0,_o.jsx)("span",{children:"Натисніть, щоб знайти створене місто"}),(0,_o.jsx)("span",{"aria-hidden":"true",children:l?"▲":"▼"})]}),l&&(0,_o.jsxs)(lD,{$isDarkMode:r,children:[(0,_o.jsx)(cD,{type:"search",autoFocus:!0,$isDarkMode:r,value:s,placeholder:"Назва міста...","aria-label":"Пошук серед створених карток",onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y.length>0&&u(y[0].index)}}),(0,_o.jsx)(dD,{children:y.map(({label:e,index:t})=>(0,_o.jsx)(hD,{$active:t===a,$isDarkMode:r,children:(0,_o.jsxs)("button",{type:"button",title:e,onClick:()=>u(t),children:[t+1,". ",e]})},`city-jump-${t}`))}),0===y.length&&(0,_o.jsx)(fD,{$isDarkMode:r,children:"Такого міста немає серед карток"})]})]}),(0,_o.jsx)(Q$,{ref:i,children:h.map((e,t)=>Math.abs(t-a)<=1?e:(0,_o.jsx)("div",{"aria-hidden":"true"},e.key))}),f>1&&(0,_o.jsx)(X$,{children:Array.from({length:f},(e,t)=>(0,_o.jsx)(tD,{$active:t===a,onClick:()=>{n(t),p(t)},children:t+1},`carousel-page-${t}`))}),f>1&&(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)(eD,{type:"button",$direction:"previous","aria-label":"Попередня картка",onClick:()=>x(-1),children:"◀"}),(0,_o.jsx)(eD,{type:"button",$direction:"next","aria-label":"Наступна картка",onClick:()=>x(1),children:"▶"})]})]})},xD=["Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.","Доміно, власник сайту і замку!","Ти теж думаєш, що відсилками можна керувати погодою? :)","Погода така сама загадка і т/с 'Ральна містика'","Хто що любить, хто що шукає? :)","Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.","0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода і відсилки.","«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...","Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)","Знайди речдок у телешоу «Речдок»","Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?","Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)","Ми вас здивуємо багато чим :)","І що всіх тягне на турецькі серіали?","«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара","Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»","Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.","Підтримайте, будь ласка, рекламою нас у соцмережах :)","У вас через сім днів буде хороша погода - поганої ж не існує :)","«Теорія неймовірності» (Макс Кідрук) має одну частину :(","Кейт — складна за характером індичка.","Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)","Хто ваш кумир? Зібров чи Винник?","Багато змін клімату, мультиплікації, моди, життя :(","Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)","Місія неможлива - ніде не помилитись","Льодовиковий період чи глобальне потепління через 24 роки.","Попри все, погода не буває поганою - вона буває різною.","Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик на карті»","Оксану Самойлову з «Україна має талант» хто пам'ятає?","Страху немає, упевненим робиться рух!","Застрягли в минулому :) Але погода - це майбутнє!","Mondo TV - Thanks for legendary cartoons.","Раз, два, три. Погоду нам скажи!","Вверх - ти летиш! Вниз - ти падаєш! ","Чорний айсберг, потопив ......? ","Доміно тривожить Єллоустон","Невже наш світ подібний на сюжет «Гри престолів»... :(","Обереш червону таблетку чи синю(фраза з Матриці...)","Хто придумав фразу? «Як тобі таке Ілон Маск»","Чи є листя у трави?","Єдина ОС де ми недоступні це Temple OS :)","«Дизель Шоу»: Цей світ остаточно тіктокнувся... :(","Не новини, а країна(світ) чудес, бракує лише Аліси... Світ втратив глузд.","Цей сайт це реальна містика :)","Доміно бажає гарної погоди :)","Сутінок - не найкраще, що можете побачити...","Драконяче видання...","Марта - і картини...","Мені одному здається що більшість в політці крихітки Цахеси та безжалісні Ніцерони?","Фрази «Бідний Йорик» і «Бути чи не бути» з якого твору?","Вам приснилися сни про погоду? Бо ви тут! :)","Вам приснився жах що ..е... і ....і. програли і...(Відсилка...)","Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)","Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)","Факт: блискавка в п'ять разів гарячіша за поверхню Сонця — близько 30 000 °C.","Факт: жодна сніжинка не схожа на іншу, але всі вони мають шість променів.","Факт: найнижча температура на Землі — −89,2 °C на станції «Восток» в Антарктиді.","Факт: у пустелі Атакама є місця, де дощу не було сотні років.","Факт: індики бачать кольори краще за людей і мають кут огляду майже 270°.","Факт: одна велика купчаста хмара може важити понад 500 тонн.","Факт: краплі дощу не схожі на сльози — вони сплюснуті, як булочки.","Факт: веселку можна побачити й уночі — це місячна веселка.","Факт: торнадо може мати швидкість вітру понад 480 км/год.","Факт: секвоя «Гіперіон» — найвище дерево у світі, понад 115 метрів.","Факт: восьминоги мають три серця і блакитну кров.","Факт: бамбук може вирости майже на метр за одну добу.","Факт: на острові Комодо живуть справжні дракони — велетенські ящірки, що полюють на оленів.","Факт: грім — це звук розширення повітря, нагрітого блискавкою.","Факт: за запахом дощу стоїть речовина геосмін, і люди відчувають її краще за акул кров.","Факт: мурахи ніколи не сплять так, як ми, — лише короткі дрімки по хвилині.","Факт: найбільший град важив майже кілограм (Бангладеш, 1986).","Факт: Амазонія виробляє власні дощі — дерева випаровують воду, що стає хмарами.","Факт: туман — це хмара, яка просто вирішила полежати на землі :)","Факт: колібрі — єдині птахи, що вміють літати задом наперед.","Факт: на Венері сніг металевий, а на Нептуні вітри досягають 2000 км/год."],uD=Fo`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`,gD=Eo.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${e=>e.$isNew?"#94fffa":"#ffb36c"};
  font-size: 14px;
  z-index: 10001;
  animation: ${uD} 3s ease-out infinite;
  animation-delay: ${e=>e.$delay}s;
  --x: ${e=>e.$x}px;
  --y: ${e=>e.$y}px;
`,mD=Eo.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  background: ${e=>e.$isDarkMode?"rgba(0, 0, 0, 0.89)":"rgba(255, 255, 255, 0.97)"};
  color: ${e=>e.$isDarkMode?"#f8f9f9":"#060606"};
  padding: 0px 18px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 700;
  z-index: 1998;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(6px);
  border: 2px solid
    ${e=>e.$isDarkMode?"rgba(249, 248, 250, 0.99)":"rgb(5, 5, 5)"};
  pointer-events: auto;
  cursor: pointer;
  opacity: ${e=>e.$isVisible?1:0};
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.07);
     }
  &:active {
    transform: scale(0.95);
  }
`,yD=Eo.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${e=>e.$isNew&&Ao`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`,bD="siteSectionsOrder",wD=(e,t)=>{const r=aS(t);if(0===r.length)return e;const i=new Set(r.map(e=>e.id));return[...r.map(t=>e.find(e=>e.id===t.id)??t),...e.filter(e=>!i.has(e.id))]},vD=(e,t=[])=>e instanceof Blob||"string"==typeof e&&(e.startsWith("data:")||e.startsWith("blob:")||e.startsWith("[object ")||t.some(t=>t?.src===e)),kD=e=>"slideshow-4"===e?"slideshow-3":e,jD=e=>{const t=(0,Ar.useRef)(null),[r,i]=(0,Ar.useState)(!1);(0,Ar.useEffect)(()=>{if(r)return;const e=t.current;if(!e||"undefined"==typeof IntersectionObserver)return void i(!0);const a=new IntersectionObserver(([e])=>{e.isIntersecting&&(a.disconnect(),i(!0))},{rootMargin:"300px",threshold:0});return a.observe(e),()=>a.disconnect()},[r]);const a=(0,_o.jsx)("div",{ref:t,style:{minHeight:"560px"}});return r?(0,_o.jsx)(Ar.Suspense,{fallback:a,children:(0,_o.jsx)(_$,{...e})}):a},MD=(0,Ar.memo)(({section:e,isDarkMode:t,isStickyBgMode:r,isLocationEnabled:i,handleRefreshCard:a,handleDeleteCard:n,handleRenameCard:s,moveWeatherCard:o,setIsLocationEnabled:l,user:c,customHolidayName:d,weatherCards:h,weatherCardLayout:f,heroDateString:p})=>e?"weather"===e.key?(0,_o.jsxs)("div",{id:"weather",children:[(0,_o.jsxs)(aD,{children:[(0,_o.jsx)(sD,{isDarkMode:t}),(0,_o.jsx)(Hp,{$isStickyBgMode:r,$isDarkMode:t,children:"Погода"})]}),(0,_o.jsx)(pD,{isDarkMode:t,labels:h.map(e=>e.locationName),children:h.map((e,x)=>{const u=e.current.tempNum>30||e.current.tempNum<-30,g=e.current.windNum>10,m=e.current.uv_index>7;return(0,_o.jsx)("div",{children:(0,_o.jsx)(Ix,{isStickyBgMode:r,user:c,card:e,isDarkMode:t,isLocationEnabled:i,isExtremeTemp:u,isExtremeWind:g,isExtremeUV:m,index:x,totalCards:h.length,handleRefreshCard:a,handleDeleteCard:n,handleRenameCard:s,moveWeatherCard:o,setIsLocationEnabled:l,customHolidayName:d,layout:f,currentTimeString:p})},e.id)})})]}):(0,_o.jsxs)("div",{id:e.key,children:["map"===e.key&&(0,_o.jsx)(jD,{isDarkMode:t,isStickyBgMode:r}),"prison"===e.key&&(0,_o.jsx)(Prison,{})]}):null),SD=()=>{pj();const[e,t]=(0,Ar.useState)(!0),[r,i]=(0,Ar.useState)(!1),[a,n]=(0,Ar.useState)(!1),[s,o]=(0,Ar.useState)(!1),[l,c]=(0,Ar.useState)({text:"",isNew:!1}),[d,h]=(0,Ar.useState)(new Date),[f,p]=(0,Ar.useState)(!0),[x,g]=(0,Ar.useState)(!1),[m,y]=(0,Ar.useState)([]),[b,w]=(0,Ar.useState)({}),[v,k]=(0,Ar.useState)(null),j=(0,Ar.useRef)(null);(0,Ar.useEffect)(()=>{const e=f?"dark":"light";document.documentElement.dataset.theme=e,document.body.dataset.theme=e},[f]),(0,Ar.useEffect)(()=>{j.current=v},[v]);const[M,S]=(0,Ar.useState)(null),[$,D]=(0,Ar.useState)([]),[C,L]=(0,Ar.useState)(null),[A,z]=(0,Ar.useState)(null),[I,E]=(0,Ar.useState)("static"),[N,R]=(0,Ar.useState)({}),[T,F]=(0,Ar.useState)(60),[P,V]=(0,Ar.useState)("all"),[_,O]=(0,Ar.useState)(0),[B,H]=(0,Ar.useState)(0),[q,K]=(0,Ar.useState)({x:50,y:50}),[Z,U]=(0,Ar.useState)({x:50,y:50}),[J,W]=(0,Ar.useState)({x:50,y:50}),[G,Y]=(0,Ar.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),[Q,X]=(0,Ar.useState)(""),[ee,te]=(0,Ar.useState)(tu),[re,ie]=(0,Ar.useState)(!1),[ae,ne]=(0,Ar.useState)(!1),[se,oe]=(0,Ar.useState)(!1),[le,ce]=(0,Ar.useState)(!1),[de,he]=(0,Ar.useState)(!1),[fe,pe]=(0,Ar.useState)(!1),[xe,ue]=(0,Ar.useState)(!1),[ge,me]=(0,Ar.useState)(!1),[ye,be]=(0,Ar.useState)(!0),[we,ve]=(0,Ar.useState)(!1),[ke,je]=(0,Ar.useState)(!1),[Me,Se]=(0,Ar.useState)(!0),[$e,De]=(0,Ar.useState)(""),[Ce,Le]=(0,Ar.useState)("loop"),[Ae,ze]=(0,Ar.useState)(!1),[Ie,Ee]=(0,Ar.useState)(23),[Ne,Re]=(0,Ar.useState)(0),[Te,Fe]=(0,Ar.useState)(.2),[Pe,Ve]=(0,Ar.useState)(.2),[_e,Oe]=(0,Ar.useState)("eager"),[Be,He]=(0,Ar.useState)(1),[qe,Ke]=(0,Ar.useState)([]),[Ze,Ue]=(0,Ar.useState)({}),[Je,We]=(0,Ar.useState)(!1),[Ge,Ye]=(0,Ar.useState)(!1),Qe=(0,Ar.useCallback)(()=>{const e=new Date,t=3600-(60*e.getMinutes()+e.getSeconds());return t<=0?3600:t},[]),[Xe,et]=(0,Ar.useState)(Qe()),tt=(0,Ar.useRef)([]),rt=(0,Ar.useRef)(null),it=(0,Ar.useRef)(null),at=(0,Ar.useRef)(null),[nt,st]=(0,Ar.useState)(0),ot=(0,Ar.useRef)(!1),[lt,ct]=(0,Ar.useState)(!1),[dt,ht]=(0,Ar.useState)(!1),[ft,pt]=(0,Ar.useState)(!1),[xt,ut]=(0,Ar.useState)(!1),[gt,mt]=(0,Ar.useState)("UTC"),[yt,bt]=(0,Ar.useState)(!1),[wt,vt]=(0,Ar.useState)(!1),[kt,jt]=(0,Ar.useState)(null),[Mt,St]=(0,Ar.useState)(null);(0,Ar.useEffect)(()=>{let e=!0;const t=async()=>{if("visible"!==document.visibilityState)return;const{isMaintenanceMode:t,endTime:r,message:i}=await async function(){const e={isMaintenanceMode:!1,endTime:null,message:null};try{const t=await fetch(`${Yx}/config/global?key=${Jx.apiKey}`);if(!t.ok)return e;const r=(await t.json()).fields||{},i=r.maintenanceEndTime;return{isMaintenanceMode:!!r.isMaintenanceMode?.booleanValue,endTime:i?.timestampValue??i?.stringValue??null,message:r.maintenanceMessage?.stringValue??null}}catch{return e}}();e&&(vt(t),jt(r),St(i))},r=setTimeout(t,3e3);return document.addEventListener("visibilitychange",t),()=>{e=!1,clearTimeout(r),document.removeEventListener("visibilitychange",t)}},[]),(0,Ar.useEffect)(()=>{(async()=>{try{const e=await Po.default.getItem("isDarkMode");null!==e&&p(e);const t=await Po.default.getItem("isStickyBgMode");null!==t&&g(t);const r=await Po.default.getItem("sectionThemes");r&&w(r);const i=await Po.default.getItem("hiddenSections");i&&y(i);const a=await Po.default.getItem("active_user");a&&k(a);const n=await Po.default.getItem("currentAvatar");n&&te(n);const s=await Po.default.getItem("selected_timezone");s&&mt(s);const o=await Po.default.getItem("bg_music_enabled");null!==o&&je(o);const l=await Po.default.getItem("auto_mute_bg_music");null!==l&&Se(l);const c=await Po.default.getItem("lock_filters_in_fs");null!==c&&We(c);const d=await Po.default.getItem("bg_music_source");d&&De(d);const h=await Po.default.getItem("custom_bg_tracks");h&&Ke(h);const f=await Po.default.getItem("bg_music_volume");null!==f&&Fe(f);const x=await Po.default.getItem("sfx_volume");null!==x&&Ve(x);const u=await Po.default.getItem("bg_music_speed");null!==u&&He(u);const m=await Po.default.getItem("bg_music_position");null!==m&&st(m);const b=await Po.default.getItem("bg_music_mode");b&&Le(b);const v=await Po.default.getItem("bg_music_shuffle");null!==v&&ze(v);const j=await Po.default.getItem("active_bg_track_id");j&&Ee(j);const M=await Po.default.getItem("library_bg_settings");M&&Ue(M);const $=await Po.default.getItem("isLocationEnabled");null!==$&&Lt($);const C=await Po.default.getItem("weather_cards");C&&zt(e=>wD(e,C));const A=await Po.default.getItem("hideDeleteModalUntil");A&&Rt(parseInt(A));const I=await Po.default.getItem(bD);if(I){const e=I.filter(e=>"aihelp"!==e.key&&"fanart"!==e.key);Ft(e)}const N=await Po.default.getItem("hero_background");N&&S(N);const R=await Po.default.getItem("hero_background_2");R&&L(R);const T=await Po.default.getItem("hero_background_3");T&&z(T);const P=await Po.default.getItem("custom_hero_backgrounds"),_=((e,t)=>{const r=Array.isArray(e)?[...e]:[],i=Array.isArray(t)?t:[],a=new Set;return r.forEach(e=>{e?.id&&a.add(`id:${e.id}`),"string"==typeof e?.src&&a.add(`src:${e.src}`)}),i.forEach(e=>{if(!e?.src)return;const t=[e.id?`id:${e.id}`:null,"string"==typeof e.src?`src:${e.src}`:null].filter(Boolean);t.some(e=>a.has(e))||(r.push({...e,category:e.category||"Ваші зображення"}),t.forEach(e=>a.add(e)))}),r})(P,await Po.default.getItem("fanart_custom_images"));_.length&&D(_);const B=await Po.default.getItem("hero_bg_mode");B&&E(kD(B));const q=await Po.default.getItem("hero_slideshow_interval");null!==q&&F(Math.max(60,q));const Z=await Po.default.getItem("hero_bg_filter_category");Z&&V(Z);const J=await Po.default.getItem("hero_bg_blur");null!==J&&O(J);const G=await Po.default.getItem("hero_bg_pixelation");null!==G&&H(G);const Q=await Po.default.getItem("hero_bg_focal1");Q&&K(Q);const ee=await Po.default.getItem("hero_bg_focal2");ee&&U(ee);const re=await Po.default.getItem("hero_bg_focal3");re&&W(re);const ie=await Po.default.getItem("custom_holiday_name");ie&&X(ie);const ae=await Po.default.getItem("last_deployed_version"),ne=await Po.default.getItem("weather_card_layout");ne&&Y(ne);const se=await Po.default.getItem("show_update_timer");null!==se&&be(se);const oe={}.REACT_APP_DEPLOY_ID;oe&&ae!==oe&&ht(!0),bt(!0)}catch(e){console.error("Помилка завантаження з localforage:",e),bt(!0)}})()},[]),(0,Ar.useEffect)(()=>{yt&&(Po.default.setItem("isStickyBgMode",x),Po.default.setItem("bg_music_enabled",ke),Po.default.setItem("auto_mute_bg_music",Me),Po.default.setItem("lock_filters_in_fs",Je),($e instanceof Blob||"string"==typeof $e)&&Po.default.setItem("bg_music_source",$e),Po.default.setItem("custom_bg_tracks",qe),Po.default.setItem("bg_music_volume",Te),Po.default.setItem("sfx_volume",Pe),Po.default.setItem("bg_music_speed",Be),Po.default.setItem("bg_music_mode",Ce),Po.default.setItem("bg_music_shuffle",Ae),Po.default.setItem("active_bg_track_id",Ie),Po.default.setItem("library_bg_settings",Ze))},[ke,Me,Je,$e,qe,Ze,Te,Pe,Be,Ce,Ae,Ie,yt]),(0,Ar.useEffect)(()=>{(async()=>{const e=await Po.default.getItem("seen_loading_phrases")||[],t=Math.floor(Math.random()*xD.length),r=xD[t],i=!e.includes(r);if(i){const t=[...e,r];await Po.default.setItem("seen_loading_phrases",t.slice(-100))}c({text:r,isNew:i})})()},[]);const $t=(0,Ar.useCallback)(async()=>{await Promise.all([vr(()=>import("./Aihelp-BOm2XwFF.js"),__vite__mapDeps([14,1,2,3,10,11,9,12,13])),vr(()=>import("./ShopModal-cpa1xglo.js"),__vite__mapDeps([15,1,2,3,11,9])),vr(()=>Promise.resolve().then(()=>$y),void 0),vr(()=>import("./Modal-U0hz_5pj.js"),__vite__mapDeps([17,1,2,5,3,10,7])),vr(()=>import("./UserSettingsModal-CydwlPNm.js"),__vite__mapDeps([18,1,2,9,5,3,10,11,7])),vr(()=>Promise.resolve().then(()=>kg),void 0)])},[]);(0,Ar.useEffect)(()=>{yt&&$t().catch(e=>{console.error("Помилка попереднього завантаження модулів:",e)}).finally(()=>n(!0))},[yt,$t]);const Dt=(0,Ar.useMemo)(()=>{const e=l.isNew?12:6;return Array.from({length:e}).map((e,t)=>({id:t,x:220*(Math.random()-.5),y:140*(Math.random()-.5),delay:2*Math.random()}))},[l]);(0,Ar.useEffect)(()=>{const e=setTimeout(()=>pt(!0),8e3);return()=>clearTimeout(e)},[]),(0,Ar.useEffect)(()=>{if(v?.fontFamily){const e=v.fontFamily.trim().replace(/ /g,"+").replace(/['"]/g,""),t="custom-google-font";let r=document.getElementById(t);r||(r=document.createElement("link"),r.id=t,r.rel="stylesheet",document.head.appendChild(r)),r.href=`https://fonts.googleapis.com/css2?family=${e}:wght@400;700;900&display=swap`,document.documentElement.style.setProperty("--font-family",`"${v.fontFamily.replace(/['"]/g,"")}", sans-serif`)}else document.getElementById("custom-google-font")?.remove(),document.documentElement.style.removeProperty("--font-family")},[v?.fontFamily]),(0,Ar.useEffect)(()=>{const e=()=>{ct(!0),window.removeEventListener("mousedown",e),window.removeEventListener("scroll",e),window.removeEventListener("touchstart",e)};return window.addEventListener("mousedown",e),window.addEventListener("scroll",e),window.addEventListener("touchstart",e),()=>{window.removeEventListener("mousedown",e),window.removeEventListener("scroll",e),window.removeEventListener("touchstart",e)}},[]),(0,Ar.useEffect)(()=>{dt&&ft&&lt&&!xt&&(ue(!0),ht(!1),ut(!0),Po.default.setItem("last_deployed_version",{}.REACT_APP_DEPLOY_ID))},[dt,ft,lt,xt]);const[Ct,Lt]=(0,Ar.useState)(!1),[At,zt]=(0,Ar.useState)([]),[It,Et]=(0,Ar.useState)(0),[Nt,Rt]=(0,Ar.useState)(0);(0,Ar.useEffect)(()=>{if(!lt)return;const e=setTimeout(async()=>{const e=[...new Set([Vo,Vo,Ll])];try{await Promise.all(e.map(e=>fetch(e,{cache:"force-cache"})))}catch(t){console.warn("Failed to preload KatScene assets:",t)}},4e3);return()=>clearTimeout(e)},[lt]);const[Tt,Ft]=(0,Ar.useState)([...nu]),Pt=(0,Ar.useRef)(null),Vt=(0,Ar.useRef)(null),_t=(0,Ar.useRef)(null);(0,Ar.useEffect)(()=>{if(yt){const e=aS(At);if(Po.default.setItem("weather_cards",e).catch(e=>{console.error("weather_cards persistence failed:",e)}),j.current?.uid){const t=QS(e.slice(0,9).map(e=>({id:e.id,isMain:e.isMain,locationName:e.locationName,lat:e.lat,lon:e.lon}))),r=j.current.uid,i=`${r}|${YS(t)}`;i!==Pt.current&&Vt.current===r&&(Pt.current=i,_t.current?.(r,t))}}},[At,yt]);const Ot=(0,Ar.useRef)({date:null,count:0}),Bt=(0,Ar.useRef)(null),Ht=(0,Ar.useRef)(null),qt=(0,Ar.useRef)(null),Kt=(0,Ar.useRef)(null),Zt=(0,Ar.useCallback)(async()=>{const e=j.current?.uid,t=Ht.current;if(!e||!t)return;if(Vt.current!==e)return;const r=YS(t);if(r===Bt.current)return void Po.default.removeItem(GS).catch(()=>{});const i=wy(),a=()=>Po.default.setItem(GS,{uid:e,date:i}).catch(()=>{});try{if((await Sy({uid:e,data:{settings:t},limitConfig:jy.settings,counterRef:Ot,storageKey:"settings_sync_counter"})).ok)return Bt.current=r,void Po.default.removeItem(GS).catch(()=>{});a(),Kt.current!==i&&(Kt.current=i,Ym("Ліміт синхронізації налаштувань (100 на добу) вичерпано. Зміни збережено на цьому пристрої, в акаунт вони потраплять завтра.",{id:"settings-sync-limit",duration:5e3}))}catch(rm){console.error("Firestore settings sync failed:",rm),a()}},[]),Ut=(0,Ar.useRef)({date:null,count:0}),Jt=(0,Ar.useCallback)(async(e,t)=>{try{(await Sy({uid:e,data:{savedWeatherCards:t},limitConfig:jy.cards,counterRef:Ut})).ok||(Pt.current=null,console.warn("Ліміт синхронізації карток погоди на сьогодні вичерпано"))}catch(rm){Pt.current=null,console.error("Firestore cards sync failed:",rm)}},[]);_t.current=Jt,(0,Ar.useEffect)(()=>{(async()=>{if(j.current?.uid&&yt)try{const{db:e,doc:t,getDoc:r}=await Gx(),i=await r(t(e,"config",j.current.uid)),a=i.exists()?i.data():{};Et(vy(a.cardAdditionsAt)===wy()&&a.cardAdditionsCount||0);const n=j.current.uid,[s,o]=await Promise.all([Po.default.getItem("settings_sync_counter").catch(()=>null),Po.default.getItem(GS).catch(()=>null)]);Ot.current={date:wy(),count:Math.max(My(a,jy.settings),ky(s,n))},Ut.current={date:wy(),count:My(a,jy.cards)};const l=o?.uid===n;if(!a.savedWeatherCards&&tt.current.length&&Jt(n,QS(tt.current.slice(0,9).map(e=>({id:e.id,isMain:e.isMain,locationName:e.locationName,lat:e.lat,lon:e.lon})))),i.exists()){const e=i.data();if(e.savedWeatherCards&&e.savedWeatherCards.filter(e=>!tt.current.some(t=>t.id===e.id)).forEach(e=>{e.isMain?ir():tr({id:e.id,fullName:e.locationName,lat:e.lat,lon:e.lon},!1,e.lat,e.lon)}),e.settings&&(Bt.current=YS(e.settings)),e.settings&&!l){const t=e.settings;void 0!==t.isDarkMode&&p(t.isDarkMode),t.hiddenSections&&y(t.hiddenSections),t.weatherCardLayout&&Y(t.weatherCardLayout),t.siteSections&&Ft(t.siteSections.filter(e=>"fanart"!==e.key)),void 0!==t.isStickyBgMode&&g(t.isStickyBgMode),t.sectionThemes&&w(t.sectionThemes),t.heroBg&&!vD(t.heroBg)&&S(t.heroBg),t.heroBg2&&!vD(t.heroBg2)&&L(t.heroBg2),t.heroBg3&&!vD(t.heroBg3)&&z(t.heroBg3),t.heroBgMode&&E(kD(t.heroBgMode)),t.bgRatings&&R(e=>({...Object.fromEntries(Object.entries(e||{}).filter(([e])=>vD(e))),...Object.fromEntries(Object.entries(t.bgRatings).filter(([e])=>!vD(e)))}))}}Vt.current=n,!l&&a.settings||Zt()}catch(rm){console.error("Error syncing from Firestore:",rm)}})()},[v,yt]),(0,Ar.useEffect)(()=>{yt&&(async()=>{try{const e=await Po.default.getItem("weather_cards");e&&zt(t=>wD(t,e))}catch(e){console.error("weather_cards hydration failed:",e)}})()},[yt]),(0,Ar.useEffect)(()=>{if(yt&&(Po.default.setItem("isLocationEnabled",Ct),Po.default.setItem(bD,Tt),Po.default.setItem("hiddenSections",m),Po.default.setItem("weatherCardLayout",G),Po.default.setItem("isStickyBgMode",x),Po.default.setItem("sectionThemes",b),Po.default.setItem("isDarkMode",f),j.current?.uid)){const e=j.current.uid,t=e=>vD(e,$)?null:e,r=Object.fromEntries(Object.entries(N||{}).filter(([e])=>!vD(e,$))),i={isDarkMode:f,hiddenSections:m,weatherCardLayout:G,siteSections:Tt,isStickyBgMode:x,sectionThemes:b,heroBg3:t(A),heroBgMode:I,bgRatings:r};"random"!==I&&(i.heroBg=t(M),i.heroBg2=t(C)),Ht.current=QS(i),clearTimeout(qt.current),qt.current=setTimeout(()=>{j.current?.uid===e&&Zt()},2e3)}},[Ct,Tt,m,G,x,b,f,M,C,A,I,$,N,yt]);const[Wt,Gt]=(0,Ar.useState)("");(0,Ar.useEffect)(()=>{let e=$e;return $e instanceof Blob&&(e=URL.createObjectURL($e)),Gt(e),()=>{$e instanceof Blob&&e&&URL.revokeObjectURL(e)}},[$e]);const Yt=(0,Ar.useRef)(null);(0,Ar.useEffect)(()=>{const e=it.current,t=at.current;if(!e||!t)return;Yt.current!==Wt&&(Re(0),Yt.current=Wt);const r=ke&&(!Ge||!Me),i=r?Te:0;let a=e,n=t;e.src&&Wt&&e.src.includes(Wt)?(a=e,n=t):t.src&&Wt&&t.src.includes(Wt)?(a=t,n=e):(a=e.paused||0===e.volume?e:t,n=a===e?t:e),r?""!==a.src&&a.src.includes(Wt)?(a.playbackRate=Be,a.paused&&a.play().catch(()=>{})):(a.src=Wt,!ot.current&&nt>0?(a.currentTime=nt,ot.current=!0):a.currentTime=0,a.volume=0,a.playbackRate=Be,a.play().catch(()=>{})):r||(e.paused||e.pause(),t.paused||t.pause());const s=setInterval(()=>{a.volume<i?a.volume=Math.min(i,a.volume+.02):a.volume=i,n.volume>0?n.volume=Math.max(0,n.volume-.02):n.pause(),a.volume===i&&0===n.volume&&clearInterval(s)},50);return()=>clearInterval(s)},[ke,Ge,Me,Wt,Te,Be,nt]),(0,Ar.useEffect)(()=>{it.current&&(it.current.playbackRate=Be),at.current&&(at.current.playbackRate=Be)},[Be]),(0,Ar.useEffect)(()=>{const e=setInterval(()=>{const e=it.current,t=at.current;if(!e||!t)return;const r=e&&!e.paused?e:t&&!t.paused?t:null;r&&r.currentTime>0&&Po.default.setItem("bg_music_position",r.currentTime)},5e3);return()=>clearInterval(e)},[]);const Qt=(0,Ar.useCallback)(async()=>{st(0),await Po.default.setItem("bg_music_position",0),it.current&&(it.current.currentTime=0),at.current&&(at.current.currentTime=0),ot.current=!1},[]),Xt=(0,Ar.useCallback)(()=>{const e=[...su.map(e=>({id:e.id,file:e.file})),...ru.filter(e=>!su.some(t=>t.id===e.id)).map(e=>({id:e.id,file:au[e.audio]||e.audio}))].filter(e=>!1!==Ze[e.id]?.enabled),t=(qe||[]).filter(e=>e&&e.file&&!1!==e.enabled),r=[...e.filter(e=>su.some(t=>t.id===e.id)).map(e=>({...e,isCustom:!1})),...t.map(e=>({id:null,file:e.file,isCustom:!0})),...e.filter(e=>!su.some(t=>t.id===e.id)).map(e=>({...e,isCustom:!1}))];if(0===r.length)return;const i=r.filter(e=>e.file!==$e);let a;a=Ae?i.length>0?i[Math.floor(Math.random()*i.length)]:r[0]:r[(r.findIndex(e=>e.file===$e)+1)%r.length],Re(0),De(a.file),Ee(a.isCustom?null:a.id)},[qe,Ze,$e,Ae]),er=(0,Ar.useCallback)(()=>{const e=it.current,t=at.current;if(!e||!t)return;let r=e;if(t.src&&Wt&&t.src.includes(Wt)&&(r=t),"loop"===Ce)return r.currentTime=0,void r.play().catch(()=>{});const i=(qe||[]).find(e=>e&&e.file===$e);let a=1;i?a=i.repeats||1:Ie&&(a=Ze[Ie]?.repeats||1);const n=Ne+1;n<a?(r.currentTime=0,r.play().catch(()=>{}),Re(n)):"order"===Ce?Xt():Re(0)},[Ne,Ce,$e,qe,Ie,Ze,Wt,Xt]);(0,Ar.useEffect)(()=>{ke&&(it.current&&!it.current.paused?it.current.currentTime=0:at.current&&!at.current.paused&&(at.current.currentTime=0))},[Ce,ke]),(0,Ar.useEffect)(()=>{yt&&Po.default.setItem("hero_background",M)},[M,yt]),(0,Ar.useEffect)(()=>{yt&&Po.default.setItem("hero_background_2",C)},[C,yt]),(0,Ar.useEffect)(()=>{yt&&Po.default.setItem("hero_background_3",A)},[A,yt]),(0,Ar.useEffect)(()=>{yt&&Po.default.setItem("custom_hero_backgrounds",$)},[$,yt]),(0,Ar.useEffect)(()=>{yt&&(Po.default.setItem("isDarkMode",f),Po.default.setItem("sectionThemes",b),Po.default.setItem("hiddenSections",m),Po.default.setItem("hero_bg_ratings",N),Po.default.setItem("hero_bg_mode",I),Po.default.setItem("hero_slideshow_interval",T),Po.default.setItem("hero_bg_filter_category",P),Po.default.setItem("hero_bg_blur",_),Po.default.setItem("hero_bg_pixelation",B),Po.default.setItem("hero_bg_focal1",q),Po.default.setItem("hero_bg_focal2",Z),Po.default.setItem("hero_bg_focal3",J),Po.default.setItem("custom_holiday_name",Q),Po.default.setItem("selected_timezone",gt),Po.default.setItem("weather_card_layout",G),Po.default.setItem("show_update_timer",ye),Po.default.setItem("modal_loading_strategy",_e))},[N,I,T,P,_,B,q,Z,J,yt,f,b,m,Q,gt,G,ye,_e]),(0,Ar.useEffect)(()=>{v?.fastClicks?document.body.classList.add("fast-clicks-enabled"):document.body.classList.remove("fast-clicks-enabled")},[v?.fastClicks]),(0,Ar.useEffect)(()=>{if(yt)if(v){const e=v.photoURL||v.avatar||ee;Po.default.setItem("active_user",{...WS(v),photoURL:v.photoURL||v.avatar||""}),e&&(te(e),Po.default.setItem("currentAvatar",e))}else Po.default.removeItem("active_user")},[v,yt]),(0,Ar.useEffect)(()=>{"Notification"in window&&"default"===Notification.permission&&Notification.requestPermission()},[]),(0,Ar.useEffect)(()=>{tt.current=At},[At]);const tr=(0,Ar.useCallback)(async(e,t,r=null,i=null,a=!1)=>{try{let o=r,l=i,c="string"==typeof e?e:e?.fullName||"Ваша локація";if(e&&"object"==typeof e&&e.lat)o=e.lat,l=e.lon,c=e.fullName||c;else if("string"==typeof e){const t=ug(e);if(t)o=t.lat,l=t.lon,c=t.fullName,e={id:`search-${t.name.toLowerCase()}`};else{const t=await u.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(e)}&count=1&language=uk`,{timeout:8e3});if(!t.data.results||!t.data.results[0])return void alert("Місто не знайдено в базі Open-Meteo");o=t.data.results[0].latitude,l=t.data.results[0].longitude,c=t.data.results[0].name,e={id:Date.now()}}}const d=t?"main-card":e?.id||Date.now();if(!t&&!tt.current.find(e=>e.id===d)){const e=tt.current.filter(e=>!e.isMain).length;if(e>=8)return alert("Можна мати не більше 8 власних карток погоди плюс поточну GPS-картку."),!1;if(e>=5&&Ym("Більше 5 карток спричиняє навантаження на пристрій.",{icon:"⚠️",duration:4e3}),j.current)try{const{db:e,doc:t,getDoc:r}=await Gx(),i=j.current.uid,a=await r(t(e,"config",i)),n={current:{date:wy(),count:My(a.exists()?a.data():{},jy.cardAdditions)}};Et(n.current.count);const s=await Sy({uid:i,data:{},limitConfig:jy.cardAdditions,counterRef:n});if(Et(n.current.count),!s.ok)return alert("Ви досягли ліміту в 40 карток на добу."),!1}catch(rm){console.error("Помилка перевірки ліміту Firestore:",rm)}}const h=`https://api.open-meteo.com/v1/forecast?latitude=${o}&longitude=${l}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm,uv_index,precipitation_probability&hourly=temperature_2m,uv_index,precipitation_probability,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,et0_fao_evapotranspiration,sunrise,sunset,wind_gusts_10m_max,apparent_temperature_max,apparent_temperature_min,snowfall_sum&wind_speed_unit=ms&timezone=auto&past_days=1&forecast_days=16`,f=`om_cache_v2_${Number(o).toFixed(2)},${Number(l).toFixed(2)}`;let p=null;try{const e=await Po.default.getItem(f);e?.data&&Date.now()-e.time<6e5&&(p=e.data)}catch{p=null}if(!p){let e,t;for(let r=0;r<2;r+=1)try{e=await u.get(h,{timeout:2e4});break}catch(n){t=n,0===r&&await new Promise(e=>setTimeout(e,1e3))}if(!e)throw t;p=e.data,Po.default.setItem(f,{time:Date.now(),data:p}).catch(()=>{})}if(p.current,p.hourly&&(p.hourly.time?.slice(0,2),p.hourly.wind_speed_10m?.slice(0,2)),p.daily&&(p.daily.time?.slice(0,2),p.daily.uv_index_max?.slice(0,2),p.daily.wind_speed_10m_max?.slice(0,2)),p.current&&void 0!==p.current.wind_speed_10m||console.error("❌ Wind speed data missing from current!",{hasCurrentData:!!p.current,currentKeys:p.current?Object.keys(p.current):[],windSpeed:p.current?.wind_speed_10m}),p.daily?.uv_index_max&&0!==p.daily.uv_index_max.length||console.error("❌ UV index data missing from daily!",{hasDailyData:!!p.daily,dailyKeys:p.daily?Object.keys(p.daily):[],uvIndex:p.daily?.uv_index_max,uvLength:p.daily?.uv_index_max?.length}),p.hourly?.wind_speed_10m||console.error("❌ Hourly wind data missing!",{hasHourlyData:!!p.hourly,hourlyKeys:p.hourly?Object.keys(p.hourly):[],wind:p.hourly?.wind_speed_10m}),"Notification"in window&&"granted"===Notification.permission){const e=Date.now();if(e-Number(window.localStorage.getItem("weatherNotificationLastSentAt")||0)>=36e5){const t=Math.round(p.current.temperature_2m),r=Math.round(p.current.apparent_temperature),i=p.current.wind_speed_10m??0,a=p.current.relative_humidity_2m??0,n=`Температура ${t}°C${r!==t?`, відчувається ${r}°C`:""}, ${W$(p.current.weather_code,p.current.is_day)}, вітер ${i} м/с, вологість ${a}%.`;new Notification(`Погода: ${c}`,{body:n,icon:"/favicon.ico"}),window.localStorage.setItem("weatherNotificationLastSentAt",String(e))}}const x=new Date;let g=x.getHours();g>=18&&(g=18);const m=`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}-${String(x.getDate()).padStart(2,"0")}T${String(g).padStart(2,"0")}:00`;let y=(p.hourly?.time||[]).findIndex(e=>e.startsWith(m));-1===y&&(y=0);const b=168;zt(r=>{const i=r.find(e=>e.id===d);p.current,p.hourly?.wind_speed_10m?.slice(0,3),p.daily?.uv_index_max?.slice(0,3);const n=(e=>{const t={};(e?.time||[]).forEach((r,i)=>{const a=String(r).slice(0,10);t[a]||(t[a]={clouds:[],visibility:[]});const n=e.cloud_cover?.[i],s=e.visibility?.[i];"number"==typeof n&&t[a].clouds.push(n),"number"==typeof s&&t[a].visibility.push(s)});const r={};return Object.entries(t).forEach(([e,{clouds:t,visibility:i}])=>{const a=(n=t).length?n.reduce((e,t)=>e+t,0)/n.length:null;var n;r[e]={cloudCoverMean:null===a?null:Math.round(a),visibilityMin:i.length?Math.min(...i):null}}),r})(p.hourly),s={id:d,isMain:t,windUnit:"ms",isFallbackLocation:t&&!!e?.isFallback,locationName:t&&!e?.fullName?"Ваша локація":t&&e?.isFallback?c:i?i.locationName:c,lat:o,lon:l,current:{temp:`${Math.round(p.current.temperature_2m)}°C`,tempNum:Math.round(p.current.temperature_2m),feels_like:`${Math.round(p.current.apparent_temperature)}°C`,humidity:`${p.current.relative_humidity_2m}%`,pressure:`${Math.round(p.current.surface_pressure)} hPa`,wind_speed:`${p.current.wind_speed_10m??0} м/с`,windNum:p.current.wind_speed_10m??0,wind_direction_10m:p.current.wind_direction_10m??0,wind_gusts_10m:p.current.wind_gusts_10m??0,uv_index:p.daily?.uv_index_max?.[0]??0,cloud_cover:p.current.cloud_cover??0,visibility:p.current.visibility??0,dew_point_2m:p.current.dew_point_2m??0,temperature_80m:p.current.temperature_80m??0,snow_depth:p.current.snow_depth??0,evapotranspiration:p.current.et0_fao_evapotranspiration??0,freezing_level_height:p.current.freezing_level_height??0,soil_temperature_0cm:p.current.soil_temperature_0cm??0,description:"За кодом: "+p.current.weather_code,weather_code:p.current.weather_code,is_day:p.current.is_day,iconPlaceholder:J$(p.current.weather_code,p.current.is_day),iconSymbol:G$(p.current.weather_code,p.current.is_day)},hourly:(p.hourly?.time||[]).slice(y,y+b).map((e,t)=>{const r=y+t,i=new Date(e),a=e.slice(0,10),n=(p.daily?.time||[]).indexOf(a);let s;if(-1!==n&&p.daily?.sunrise?.[n]&&p.daily?.sunset?.[n])s=e>=p.daily.sunrise[n]&&e<=p.daily.sunset[n]?1:0;else{const e=i.getHours();s=e>=6&&e<21?1:0}return{time:`${String(i.getHours()).padStart(2,"0")}:00`,dateLabel:i.toLocaleDateString("uk",{day:"2-digit",month:"2-digit"}),fullTime:e,temp:`${Math.round(p.hourly?.temperature_2m?.[r]??0)}°C`,tempNum:Math.round(p.hourly?.temperature_2m?.[r]??0),feels_like:`${Math.round(p.hourly?.apparent_temperature?.[r]??0)}°C`,windNum:p.hourly?.wind_speed_10m?.[r]??0,wind_direction_10m:p.hourly?.wind_direction_10m?.[r]??0,wind_gusts_10m:p.hourly?.wind_gusts_10m?.[r]??0,relative_humidity_2m:p.hourly?.relative_humidity_2m?.[r]??null,dew_point_2m:p.hourly?.dew_point_2m?.[r]??0,precipitation:p.hourly?.precipitation?.[r]??null,precipitation_probability:p.hourly?.precipitation_probability?.[r]??0,uv_index:p.hourly?.uv_index?.[r]??0,rain:p.hourly?.rain?.[r]??null,pressure_msl:p.hourly?.pressure_msl?.[r]??null,cloud_cover:p.hourly?.cloud_cover?.[r]??null,visibility:p.hourly?.visibility?.[r]??0,snow_depth:p.hourly?.snow_depth?.[r]??0,evapotranspiration:p.hourly?.et0_fao_evapotranspiration?.[r]??0,freezing_level_height:p.hourly?.freezing_level_height?.[r]??0,soil_temperature_0cm:p.hourly?.soil_temperature_0cm?.[r]??0,weather_code:p.hourly?.weather_code?.[r]??0,is_day:s,iconPlaceholder:J$(p.hourly?.weather_code?.[r]??0,s),iconSymbol:G$(p.hourly?.weather_code?.[r]??0,s),description:W$(p.hourly?.weather_code?.[r]??0,s)}}),daily16:(p.daily?.time||[]).map((e,t)=>({date:new Date(e).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),fullDate:e,day:new Date(e).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(p.daily.temperature_2m_max[t]??0)}°C`,temp_night:`${Math.round(p.daily.temperature_2m_min[t]??0)}°C`,uv_index:p.daily.uv_index_max?.[t]??0,wind_speed:`${p.daily.wind_speed_10m_max?.[t]??0} м/с`,wind_direction_10m:p.daily.wind_direction_10m_dominant?.[t]??0,precipitation_probability_max:p.daily.precipitation_probability_max?.[t]??0,rain_sum:p.daily.rain_sum?.[t]??0,precipitation_sum:p.daily.precipitation_sum?.[t]??0,evapotranspiration:p.daily.et0_fao_evapotranspiration?.[t]??0,sunrise:p.daily.sunrise?.[t]??null,sunset:p.daily.sunset?.[t]??null,wind_gusts_max:p.daily.wind_gusts_10m_max?.[t]??null,feels_like_max:p.daily.apparent_temperature_max?.[t]??null,feels_like_min:p.daily.apparent_temperature_min?.[t]??null,snowfall_sum:p.daily.snowfall_sum?.[t]??null,cloud_cover_mean:n[e]?.cloudCoverMean??null,visibility_min:n[e]?.visibilityMin??null,weather_code:p.daily.weather_code[t]??0,is_day:1,iconPlaceholder:J$(p.daily.weather_code[t]??0,1),iconSymbol:G$(p.daily.weather_code[t]??0,1),description:W$(p.daily.weather_code[t]??0,1)}))};return s.current.windNum,s.current.uv_index,s.hourly?.slice(0,2).map(e=>e.windNum),s.daily16?.slice(0,2).map(e=>e.wind_speed),a?[s,...r.filter(e=>e.id!==d)]:t?r.some(e=>e.isMain)?r.map(e=>e.isMain?s:e):[s,...r]:i?r.map(e=>e.id===d?s:e):r.filter(e=>!e.isMain).length>=8?r:[...r,s]});try{const e=new Date,t=new Date(e);t.setDate(t.getDate()+210);const r=e=>e.toISOString().split("T")[0],i=`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${o}&longitude=${l}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&wind_speed_unit=ms&start_date=${r(e)}&end_date=${r(t)}`,a=(await u.get(i,{timeout:8e3})).data;if(a?.daily?.time?.length){const e=a.daily.time.map((e,t)=>({fullDate:e,date:new Date(e).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),day:new Date(e).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(Array.isArray(a.daily.temperature_2m_max?.[0])?a.daily.temperature_2m_max[0][t]??0:a.daily.temperature_2m_max?.[t]??0)}°C`,temp_night:`${Math.round(Array.isArray(a.daily.temperature_2m_min?.[0])?a.daily.temperature_2m_min[0][t]??0:a.daily.temperature_2m_min?.[t]??0)}°C`,wind_speed:`${Math.round(Array.isArray(a.daily.wind_speed_10m_max?.[0])?a.daily.wind_speed_10m_max[0][t]??0:a.daily.wind_speed_10m_max?.[t]??0)} м/с`,precipitation_sum:Array.isArray(a.daily.precipitation_sum?.[0])?a.daily.precipitation_sum[0][t]??0:a.daily.precipitation_sum?.[t]??0,isSeasonal:!0}));zt(t=>t.map(t=>t.id===d?{...t,seasonal:e}:t))}}catch(s){console.warn("Seasonal forecast unavailable:",s.message)}}catch(n){console.error("Помилка завантаження погоди",n)}},[]),rr=(0,Ar.useCallback)(async e=>{if(!Array.isArray(e)||0===e.length)return[];try{const t=e.map(e=>Number(e.lat).toFixed(4)).join(","),r=e.map(e=>Number(e.lon).toFixed(4)).join(","),i=await u.get(`https://api.open-meteo.com/v1/forecast?latitude=${t}&longitude=${r}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&wind_speed_unit=ms&timezone=auto&forecast_days=3`,{timeout:8e3}),a=Array.isArray(i.data)?i.data:[i.data],n=(e,t,r,i)=>{const a=[];return e>30&&a.push({type:"heat",value:Math.round(e)}),t<-30&&a.push({type:"frost",value:Math.round(t)}),r>10&&a.push({type:"wind",value:Math.round(r)}),i>7&&a.push({type:"uv",value:Math.round(i)}),a};return e.map((e,t)=>{const{current:r,daily:i}=a[t]||{};if(!r||!i)return null;const s=n(i.temperature_2m_max?.[0]??r.temperature_2m??0,i.temperature_2m_min?.[0]??r.temperature_2m??0,r.wind_speed_10m??0,i.uv_index_max?.[0]??0);if(s.length>0)return{level:"now",dayIndex:0,reasons:s};for(let a=1;a<(i.time?.length??0);a++){const e=n(i.temperature_2m_max?.[a]??0,i.temperature_2m_min?.[a]??0,i.wind_speed_10m_max?.[a]??0,i.uv_index_max?.[a]??0);if(e.length>0)return{level:"soon",dayIndex:a,reasons:e}}return null})}catch(t){return console.error("Weather danger check error:",t),e.map(()=>null)}},[]),ir=(0,Ar.useCallback)(()=>{if(Ct)if("geolocation"in navigator){const e={enableHighAccuracy:!0,timeout:8e3,maximumAge:0},t={enableHighAccuracy:!1,timeout:15e3,maximumAge:0},r=e=>{console.warn("Geolocation failed on mobile device:",e),tr({fullName:"Київ",id:"main-card",isFallback:!0},!0,50.45,30.52)};navigator.geolocation.getCurrentPosition(e=>{tr({id:"main-card"},!0,e.coords.latitude,e.coords.longitude)},()=>{navigator.geolocation.getCurrentPosition(e=>{tr({id:"main-card"},!0,e.coords.latitude,e.coords.longitude)},r,t)},e)}else tr({fullName:"Київ",id:"main-card",isFallback:!0},!0,50.45,30.52);else tr({fullName:"Київ",id:"main-card",isFallback:!0},!0,50.45,30.52)},[tr,Ct]),ar=(0,Ar.useCallback)(e=>{e.isMain?ir():tr(e,!1)},[ir,tr]),nr=(0,Ar.useCallback)(()=>{tt.current.length>0&&tt.current.forEach(e=>ar(e)),et(Qe())},[ar,Qe]);(0,Ar.useEffect)(()=>{ir()},[ir]),(0,Ar.useEffect)(()=>{if(!yt)return;const e=HS(window.location.search,window.location.hash,window.location.pathname);if(e.isSearchEntry&&e.cityName){const t=e.cityData;document.title=`Погода в місті ${e.cityName} — точний прогноз | Стихія`;const r=document.querySelector('meta[name="description"]');r&&r.setAttribute("content",`Точний прогноз погоди в місті ${e.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`);let i=document.querySelector('link[rel="canonical"]');if(i){const t=ug(e.cityName);i.setAttribute("href",t?`https://stuxia.com/pohoda/${gg(t)}/`:`https://stuxia.com/?q=погода+${encodeURIComponent(e.cityName.toLowerCase())}`)}let a=document.getElementById("city-jsonld");a||(a=document.createElement("script"),a.id="city-jsonld",a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Place",name:e.cityName,description:`Точний прогноз погоди в місті ${e.cityName}`,address:{"@type":"PostalAddress",addressCountry:"UA",addressLocality:e.cityName}}),tr(null!==t.lat?{id:t.id,fullName:t.fullName,lat:t.lat,lon:t.lon}:t.name,!1,t.lat,t.lon,!0),setTimeout(()=>{const e=document.getElementById("weather");e&&e.scrollIntoView({behavior:"smooth"})},700)}},[yt,tr]),(0,Ar.useEffect)(()=>{if(!yt)return;const e=new Date;e.setDate(e.getDate()-1);const t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;At.forEach(e=>{e.daily16?.[0]?.fullDate===t&&"ms"===e.windUnit||ar(e)})},[yt,At,ar]),(0,Ar.useEffect)(()=>{if(!yt)return;const e=setInterval(()=>{if("visible"===document.visibilityState){const e=Qe();et(t=>(t<=5&&e>3590&&tt.current.forEach(e=>ar(e)),e))}},1e3);return()=>clearInterval(e)},[yt,ar,Qe]),(0,Ar.useEffect)(()=>{if(!yt)return;const e=()=>{if("hidden"===document.visibilityState)return void(rt.current=Date.now());const e=rt.current?Date.now()-rt.current:0;rt.current=null,e<3e5||(tt.current.forEach(e=>ar(e)),et(Qe()))};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[yt,ar,Qe]);const sr=(0,Ar.useCallback)(e=>{zt(t=>t.filter(t=>t.id!==e))},[]),or=(0,Ar.useRef)(Promise.resolve()),lr=(0,Ar.useCallback)(e=>{const t=or.current.then(async()=>tt.current.filter(e=>!e.isMain).length>=8?(alert("Можна мати не більше 8 власних карток погоди плюс поточну GPS-картку."),!1):!1!==await tr(e,!1));return or.current=t.catch(()=>{}),t},[tr]),cr=(0,Ar.useCallback)((e,t)=>{zt(r=>r.map(r=>r.id===e?{...r,locationName:t}:r))},[]),dr=(0,Ar.useCallback)((e,t)=>{zt(r=>{const i=r.findIndex(t=>t.id===e);if(-1===i)return r;const a=i+t;if(a<0||a>=r.length)return r;const n=[...r];return[n[i],n[a]]=[n[a],n[i]],n})},[]);(0,Ar.useEffect)(()=>{const e=setTimeout(()=>o(!0),3500);tv().then(()=>h(rv()));const t=setInterval(()=>h(rv()),1e3);return()=>{clearTimeout(e),clearInterval(t)}},[]),(0,Ar.useEffect)(()=>{if(!a||!s)return;i(!0);const e=setTimeout(()=>t(!1),1800);return()=>clearTimeout(e)},[a,s]);const hr=(0,Ar.useCallback)(()=>{p(e=>{const t=!e;return w({}),t})},[]),fr=(0,Ar.useCallback)(e=>{w(t=>({...t,[e]:!t[e]}))},[]),pr=(0,Ar.useCallback)(()=>{w({})},[]),xr=(0,Ar.useCallback)(e=>{y(t=>t.includes(e)?t.filter(t=>t!==e):nu.length-t.length<=2?t:[...t,e])},[]),ur=(()=>{const e=!1!==v?.showSeconds,t=v?.dateDisplayMode||"both",r=!0===v?.hour12;try{const i={timeZone:gt,hour12:r};"time"!==t&&"both"!==t||(i.hour="2-digit",i.minute="2-digit",e&&(i.second="2-digit")),"date"!==t&&"both"!==t||(i.weekday="long",i.day="numeric",i.month="2-digit",i.year="numeric");const a=new Intl.DateTimeFormat("uk",i).formatToParts(d),n=e=>a.find(t=>t.type===e)?.value||"",s="time"===t||"both"===t?`${n("hour")}:${n("minute")}${e?":"+n("second"):""}${r&&n("dayPeriod")?" "+n("dayPeriod"):""}`:"",o="date"===t||"both"===t?`${n("weekday")?n("weekday").charAt(0).toUpperCase()+n("weekday").slice(1):""}${n("day")?`, ${n("day")}.${n("month")}.${n("year")}`:""}`:"";return"both"===t?`${s} ${o}`.trim():s||o}catch(rm){return`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}${!1!==v?.showSeconds?`:${String(d.getSeconds()).padStart(2,"0")}`:""} ${d.toLocaleDateString("uk")}`}})(),gr=(0,_o.jsxs)(_o.Fragment,{children:[(0,_o.jsx)("div",{id:"hero",children:(0,_o.jsx)(YM,{heroDateString:ur,onAddCity:lr,cardLimits:{custom:At.filter(e=>!e.isMain).length,maxCustom:8,daily:v?It:null,maxDaily:40},startAnimation:!e,user:v,isDarkMode:f,checkWeatherDanger:rr,heroBg:M,setHeroBg:S,heroBg2:C,setHeroBg2:L,heroBg3:A,setHeroBg3:z,customHeroBgs:$,setCustomHeroBgs:D,heroBgMode:I,setHeroBgMode:E,bgRatings:N,setBgRatings:R,slideshowInterval:T,setSlideshowInterval:F,filterCategory:P,setFilterCategory:V,heroBgBlur:_,setHeroBgBlur:O,heroBgPixelation:B,setHeroBgPixelation:H,heroBgFocal1:q,setHeroBgFocal1:K,heroBgFocal2:Z,setHeroBgFocal2:U,heroBgFocal3:J,setHeroBgFocal3:W,selectedTimezone:gt,setSelectedTimezone:mt,customHolidayName:Q,isStickyBgMode:x,setCustomHolidayName:X})}),(0,_o.jsx)("div",{className:"container",children:Tt.map(e=>"hero"!==e.key&&(0,_o.jsx)(U$,{$isDarkMode:b[e.key]??f,$isStickyBgMode:x,$isHidden:m.includes(e.key),children:(0,_o.jsx)(MD,{section:e,weatherCards:At,isDarkMode:b[e.key]??f,isLocationEnabled:Ct,handleRefreshCard:ar,handleDeleteCard:sr,handleRenameCard:cr,moveWeatherCard:dr,setIsLocationEnabled:Lt,user:v,customHolidayName:Q,isStickyBgMode:x,weatherCardLayout:G,heroDateString:ur})},e.key))})]});return(0,_o.jsx)(rS,{isDarkMode:f,children:(0,_o.jsxs)(BS,{isDarkMode:f,onToggleTheme:hr,children:[(0,_o.jsx)(T$,{user:v}),(0,_o.jsx)(q$,{$locked:Ge&&Je}),(0,_o.jsx)(tl,{isLoading:e,isFadingOut:r,randomPhrase:l.text&&(0,_o.jsxs)(yD,{$isNew:l.isNew,children:[l.text,Dt.map(e=>(0,_o.jsx)(gD,{$x:e.x,$y:e.y,$delay:e.delay,$isNew:l.isNew,children:"✧"},e.id))]})}),(0,_o.jsx)(Y$,{$isDarkMode:f,$isStickyBgMode:x,children:(0,_o.jsxs)("div",{className:"App",children:[(0,_o.jsx)("audio",{ref:it,onEnded:er,preload:"auto"}),(0,_o.jsx)("audio",{ref:at,onEnded:er,preload:"auto"}),(0,_o.jsx)("div",{className:"container",children:(0,_o.jsx)(og,{sfxVolume:Pe,onOpenRegister:()=>ie(!0),onOpenSettings:()=>ne(!0),onOpenVip:()=>oe(!0),onOpenShop:()=>ce(!0),onOpenAchievements:()=>he(!0),onOpenHelp:()=>pe(!0),onOpenInfo:()=>ue(!0),onOpenAuthorsDirectory:()=>me(!0),onOpenOtherOptions:()=>ne(!0),onCloseInfo:()=>ue(!1),isInfoOpen:xe,user:v,isDarkMode:f,toggleTheme:hr,currentAvatar:ee,onLogout:()=>{Gx().then(({signOut:e,auth:t})=>e(t)).catch(e=>console.warn("Firebase signOut:",e)),k(null),te(tu),Po.default.removeItem("currentAvatar"),ne(!1)},loadingStrategy:_e,onSetLoadingStrategy:Oe,setIsFsActive:Ye,isStickyBgMode:x,setIsStickyBgMode:g})}),(0,_o.jsx)("main",{children:(0,_o.jsx)(Ar.Suspense,{fallback:null,children:gr})}),(0,_o.jsxs)(Ar.Suspense,{fallback:null,children:[re&&(0,_o.jsx)(O$,{onClose:()=>ie(!1),onRegister:e=>{k(e),ie(!1)},isDarkMode:f}),(ae||we)&&(0,_o.jsx)(B$,{onClose:()=>{ne(!1),ve(!1)},user:v,onUpdate:k,weatherCardLayout:G,onUpdateLayout:Y,showUpdateTimer:ye,setShowUpdateTimer:be,isDarkMode:f,bgMusicEnabled:ke,setBgMusicEnabled:je,autoMuteBgMusic:Me,setAutoMuteBgMusic:Se,bgMusicSource:$e,setBgMusicSource:De,customBgTracks:qe,setCustomBgTracks:Ke,bgMusicVolume:Te,setBgMusicVolume:Fe,bgMusicSpeed:Be,setBgMusicSpeed:He,bgMusicMode:Ce,setBgMusicMode:Le,bgMusicShuffle:Ae,setBgMusicShuffle:ze,libraryBgSettings:Ze,setLibraryBgSettings:Ue,activeBgTrackId:Ie,setActiveBgTrackId:Ee,onResetBgPosition:Qt,onSkipBgTrack:Xt,sfxVolume:Pe,setSfxVolume:Ve,bgAudioRef:it,bgAudioRef2:at,onToggleTheme:hr,siteSections:Tt,moveSiteSection:(e,t)=>{Ft(r=>{const i=[...r],a=e+t;return a<0||a>=i.length||([i[e],i[a]]=[i[a],i[e]]),i})},resetSiteSections:()=>Ft([...nu]),sectionThemes:b,hiddenSections:m,onToggleSectionVisibility:xr,onToggleSectionTheme:fr,onResetSectionThemes:pr,loadingStrategy:_e,onSetLoadingStrategy:Oe,isStickyBgMode:x,onToggleStickyBg:()=>g(!x)}),se&&(0,_o.jsx)(VipModal,{onClose:()=>oe(!1)}),le&&(0,_o.jsx)(V$,{onClose:()=>ce(!1),hasVip:!!v}),de&&(0,_o.jsx)(AchivmentsModal,{onClose:()=>he(!1),isDarkMode:f}),fe&&(0,_o.jsx)(H$,{isDarkMode:f,isOpen:fe,onClose:()=>pe(!1)}),xt&&(0,_o.jsx)(H$,{isOpen:xt,onClose:()=>ut(!1)}),xe&&(0,_o.jsx)(H$,{onClose:()=>ue(!1)}),(0,_o.jsx)(fg,{isOpen:ge,onClose:()=>me(!1)})]}),ye&&(0,_o.jsx)(P$,{content:"Налаштування вигляду",isDarkMode:f,children:(0,_o.jsxs)(mD,{$isDarkMode:f,$isVisible:Math.floor(Xe/60)%10==0,onClick:nr,"aria-label":"Показує час оновлення картки теперішньої погоди і ШІ прогноз.",children:["Оновлення погоди через: ",Math.floor(Xe/60)," хв"]})}),(0,_o.jsx)(_S,{isStickyBgMode:x})]})}),wt&&(0,_o.jsx)(Ux,{isDarkMode:f,endTime:kt,message:Mt})]})})};function $D(){const e=n$();return(0,_o.jsx)(d,{reducedMotion:e?"always":"user",children:(0,_o.jsx)(Ch,{children:(0,_o.jsx)(SD,{})})})}document.addEventListener("visibilitychange",()=>{document.hidden&&document.querySelectorAll("video").forEach(e=>{e.paused||e.pause()})}),window.addEventListener("error",e=>{if(e.message.includes("AbortError")||e.message.includes("aborted"))return e.preventDefault(),!1}),window.addEventListener("unhandledrejection",e=>{if("AbortError"===e.reason?.name||e.reason?.message?.includes("aborted"))return e.preventDefault(),!1}),Lr.createRoot(document.getElementById("root")).render((0,_o.jsxs)(_r,{store:Va,children:[(0,_o.jsx)($D,{}),(0,_o.jsx)(Gm,{position:"bottom-right",reverseOrder:!1})]}));export{lu as A,Fo as B,ku as C,su as D,Du as E,Jx as F,Eo as H,Lh as I,bc as L,au as M,iu as N,cu as O,ru as P,ul as R,gu as S,uu as T,Zr as U,Ao as V,pg as _,US as a,mu as b,XM as c,gy as d,Gm as f,wg as g,vg as h,ZS as i,hu as j,du as k,my as l,tm as m,i$ as n,WS as o,Ym as p,n$ as r,JS as s,s$ as t,uy as u,sg as v,bu as w,xu as x,yu as y,Vo as z};