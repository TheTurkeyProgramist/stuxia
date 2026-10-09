import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{n as a,t as i}from"./vendor-motion-kBML52GK.js";import{n}from"./vendor-markdown-ADGh9TTx.js";import{K as s,M as t,O as o,P as l,U as d,j as c,q as p}from"./vendor-ui-BTt87RKE.js";import{b as x,m as h,w as g}from"./index-DsXpZiTT.js";var u=e(r()),{PI:b,sin:f,cos:m,tan:j,asin:v,atan2:w,acos:$,sqrt:y,abs:k,round:D}=Math,N=b/180,_=864e5,M=2440588,C=2451545,z=6378.14;function S(e){return new Date((e+.5-M)*_)}function H(e){return e.valueOf()/_-.5+M-C}function T(e){return e+function(e){const r=2e3+e/365.2425;let a;return r<1920?(a=r-1900,a*(1.494119+a*(a*(.0061966-197e-6*a)-.0598939))-2.79):r<1941?(a=r-1920,21.2+a*(.84493+a*(.0020936*a-.0761))):r<1961?(a=r-1950,29.07+a*(.407+a*(-1/233+a/2547))):r<1986?(a=r-1975,45.45+a*(1.067+a*(-1/260-a/718))):r<2005?(a=r-2e3,63.86+a*(.3345+a*(a*(.0017275+a*(651814e-9+2373599e-11*a))-.060374))):r<2050?(a=r-2e3,62.92+a*(.32217+.005589*a)):(a=(r-1820)/100,32*a*a-20-.5628*(2150-r))}(e)/86400}function I(e,r,a){return(w(f(e),m(e)*f(r)-j(a)*m(r))/N+540)%360}function F(e,r,a){return v(f(r)*f(a)+m(r)*m(a)*m(e))}function B(e,r){return N*(280.46061837+360.98564736629*e)-r}function E(e){return e<0&&(e=0),2967e-7/j(e+.00312536/(e+.08901179))}function O(e){const r=e/36525,a=N*(280.46646+r*(36000.76983+3032e-7*r)),i=N*(357.52911+r*(35999.05029-1537e-7*r)),n=f(i),s=m(i),t=N*(125.04-1934.136*r),o=a+N*((1.914602-r*(.004817+14e-6*r))*n+2*(.019993-101e-6*r)*n*s+289e-6*n*(3-4*n*n))-N*(.00569+.00478*f(t)),l=N*(23.439291-r*(.0130042+r*(16e-8-504e-9*r)))+.00256*N*m(t);return{ra:w(m(l)*f(o),m(o)),dec:v(f(l)*f(o))}}var P=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]],U=9e-4;function A(e){return e-2*b*D(e/(2*b))}function q(e,r,a,i,n,s){const t=(f(e)-f(n)*f(s))/(m(n)*m(s));if(t<-1||t>1)return NaN;let o=r+a*$(t)/(2*b);for(let l=0;l<2;l++){const r=O(T(o)),a=A(B(o,i)-r.ra),s=F(a,n,r.dec),t=m(n)*m(r.dec)*f(a);if(k(t)<1e-6)break;o+=(s-e)/(2*b*t)}return o}function R(e,r,a,i=0){const n=N*-a,s=N*r,t=function(e){return-2.076*y(e)/60}(i),o=function(e,r){for(let a=0;a<3;a++)e-=A(B(e,r)-O(T(e)).ra)/(2*b);return e}(D(D(H(e))-U-n/(2*b))+U+n/(2*b),n),l=O(T(o)).dec,d={solarNoon:S(o+C),nadir:S(o+C-.5)};for(const[c,p,x]of P){const e=(c+t)*N,r=q(e,o,-1,n,s,l),a=q(e,o,1,n,s,l);d[p]=Number.isNaN(r)?null:S(r+C),d[x]=Number.isNaN(a)?null:S(a+C)}if(null===d.sunrise){const e=F(0,s,l),r=(P[0][0]+t)*N;d.alwaysUp=e>r,d.alwaysDown=e<=r}return d}var W=new Int32Array([0,0,1,0,6288774,-20905355,2,0,-1,0,1274027,-3699111,2,0,0,0,658314,-2955968,0,0,2,0,213618,-569925,0,1,0,0,-185116,48888,0,0,0,2,-114332,-3149,2,0,-2,0,58793,246158,2,-1,-1,0,57066,-152138,2,0,1,0,53322,-170733,2,-1,0,0,45758,-204586,0,1,-1,0,-40923,-129620,1,0,0,0,-34720,108743,0,1,1,0,-30383,104755,2,0,0,-2,15327,10321,0,0,1,2,-12528,0,0,0,1,-2,10980,79661,4,0,-1,0,10675,-34782,0,0,3,0,10034,-23210,4,0,-2,0,8548,-21636,2,1,-1,0,-7888,24208,2,1,0,0,-6766,30824,1,0,-1,0,-5163,-8379,1,1,0,0,4987,-16675,2,-1,1,0,4036,-12831,2,0,2,0,3994,-10445,4,0,0,0,3861,-11650,2,0,-3,0,3665,14403,0,1,-2,0,-2689,-7003,2,0,-1,2,-2602,0,2,-1,-2,0,2390,10056,1,0,1,0,-2348,6322,2,-2,0,0,2236,-9884,0,1,2,0,-2120,5751,0,2,0,0,-2069,0,2,-2,-1,0,2048,-4950,2,0,1,-2,-1773,4130,2,0,0,2,-1595,0,4,-1,-1,0,1215,-3958,0,0,2,2,-1110,0,3,0,-1,0,-892,3258,2,1,1,0,-810,2616,4,-1,-2,0,759,-1897,0,2,-1,0,-713,-2117,2,2,-1,0,-700,2354,2,1,-2,0,691,0,2,-1,0,-2,596,0,4,0,1,0,549,-1423,0,0,4,0,537,-1117,4,-1,0,0,520,-1571,1,0,-2,0,-487,-1739,2,1,0,-2,-399,0,0,0,2,-2,-381,-4421,1,1,1,0,351,0,3,0,-2,0,-340,0,4,0,-3,0,330,0,2,-1,2,0,327,0,0,2,1,0,-323,1165,1,1,-1,0,299,0,2,0,3,0,294,0,2,0,-1,-2,0,8752]),K=new Int32Array([0,0,0,1,5128122,0,0,1,1,280602,0,0,1,-1,277693,2,0,0,-1,173237,2,0,-1,1,55413,2,0,-1,-1,46271,2,0,0,1,32573,0,0,2,1,17198,2,0,1,-1,9266,0,0,2,-1,8822,2,-1,0,-1,8216,2,0,-2,-1,4324,2,0,1,1,4200,2,1,0,-1,-3359,2,-1,-1,1,2463,2,-1,0,1,2211,2,-1,-1,-1,2065,0,1,-1,-1,-1870,4,0,-1,-1,1828,0,1,0,1,-1794,0,0,0,3,-1749,0,1,-1,1,-1565,1,0,0,1,-1491,0,1,1,1,-1475,0,1,1,-1,-1410,0,1,0,-1,-1344,1,0,0,-1,-1335,0,0,3,1,1107,4,0,0,-1,1021,4,0,-1,1,833,0,0,1,-3,777,4,0,-2,1,671,2,0,0,-3,607,2,0,2,-1,596,2,-1,1,-1,491,2,0,-2,1,-451,0,0,3,-1,439,2,0,2,1,422,2,0,-3,-1,421,2,1,-1,1,-366,2,1,0,1,-351,4,0,0,1,331,2,-1,1,1,315,2,-2,0,-1,302,0,0,1,3,-283,2,1,1,-1,-229,1,1,0,-1,223,1,1,0,1,223,0,1,-2,-1,-220,2,1,-1,-1,-220,1,0,1,1,-185,2,-1,-2,-1,181,0,1,2,1,-177,4,0,-2,-1,176,4,-1,-1,-1,166,1,0,1,-1,-164,4,0,1,-1,132,1,0,-1,-1,-119,4,-1,0,-1,115,2,-2,0,1,107]);function G(e){const r=e/36525,a=218.3164477+r*(481267.88123421+r*(r*(1/538841-r/65194e3)-.0015786)),i=119.75+131.849*r,n=53.09+479264.29*r,s=313.45+481266.484*r,t=1-r*(.002516+74e-7*r),o=N*(297.8501921+r*(445267.1114034+r*(r*(1/545868-r/113065e3)-.0018819))),l=N*(357.5291092+r*(35999.0502909+r*(r/2449e4-1536e-7))),d=N*(134.9633964+r*(477198.8675055+r*(.0087414+r*(1/69699-r/14712e3)))),c=N*(93.272095+r*(483202.0175233+r*(r*(-1/3526e3+r/86331e4)-.0036539)));let p=0,x=0,h=0;for(let j=0;j<W.length;j+=6){const e=W[j+1],r=W[j]*o+e*l+W[j+2]*d+W[j+3]*c,a=1===e||-1===e?t:2===e||-2===e?t*t:1;p+=W[j+4]*a*f(r),x+=W[j+5]*a*m(r)}for(let m=0;m<K.length;m+=5){const e=K[m+1],r=K[m]*o+e*l+K[m+2]*d+K[m+3]*c,a=1===e||-1===e?t:2===e||-2===e?t*t:1;h+=K[m+4]*a*f(r)}const g=N*i,u=N*a;p+=3958*f(g)+1962*f(u-c)+318*f(N*n),h+=-2235*f(u)+382*f(N*s)+175*f(g-c)+175*f(g+c)+127*f(u-d)-115*f(u+d);const{dpsi:b,eps:$}=function(e){const r=N*(125.04452-1934.136261*e),a=N*(280.4665+36000.7698*e),i=N*(218.3165+481267.8813*e),n=(-17.2*f(r)-1.32*f(2*a)-.23*f(2*i)+.21*f(2*r))/3600,s=(9.2*m(r)+.57*m(2*a)+.1*m(2*i)-.09*m(2*r))/3600;return{dpsi:n,eps:N*(23.439291-e*(.0130042+e*(16e-8-504e-9*e))+s)}}(r),y=N*(a+p/1e6+b),k=N*(h/1e6);return{ra:w(f(y)*m($)-j(k)*f($),m(y)),dec:v(f(k)*m($)+m(k)*f($)*f(y)),dist:385000.56+x/1e3}}function J(e,r){return new Date(e.valueOf()+r*_/24)}function L(e,r,a){const i=function(e,r,a){const i=N*-a,n=N*r,s=H(e),t=G(T(s)),o=B(s,i)-t.ra,l=F(o,n,t.dec),d=l-v(z/t.dist*m(l)),c=w(f(o),j(n)*m(t.dec)-f(t.dec)*m(o));return{azimuth:I(o,n,t.dec),altitude:(d+E(d))/N,distance:t.dist,parallacticAngle:c/N}}(e,r,a);return i.altitude+.2725*v(z/i.distance)/N+.09}function Q(e,r,a){for(let i=0;i<2;i++){e-=L(new Date(e),r,a)/((L(new Date(e+3e4),r,a)-L(new Date(e-3e4),r,a))/6e4)}return e}var V=n(),X=g(i.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 16px;
`,Y=g(i.div)`
  background: ${e=>e.$isDarkMode?"linear-gradient(145deg, rgba(20, 20, 32, 0.95), rgba(12, 12, 20, 0.98))":"linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(240, 244, 248, 0.98))"};
  background-image: ${e=>e.$cityImage?`linear-gradient(180deg, rgba(10, 15, 30, 0.78) 0%, rgba(10, 15, 30, 0.92) 100%), url(${e.$cityImage})`:"none"};
  background-size: cover;
  background-position: center;
  color: ${e=>e.$isDarkMode?"#fff":"#1a1a1a"};
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.3)":"rgba(0, 140, 255, 0.25)"};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 238, 255, 0.15);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00eeff;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 14px;
    max-height: 95vh;
  }
`,Z=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
`,ee=g.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, #00eeff 0%, #ffb36c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,re=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ae=g(i.button)`
  background: rgba(0, 0, 0, 0.45);
  color: #00eeff;
  border: 1px solid rgba(0, 238, 255, 0.4);
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(6px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 238, 255, 0.2);
    box-shadow: 0 0 12px rgba(0, 238, 255, 0.4);
    color: #fff;
  }
`,ie=g(i.button)`
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  color: white;
  border: none;
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(255, 65, 108, 0.35);

  &:hover {
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.5);
  }
`,ne=g(i.div)`
  background: ${e=>e.$isDarkMode?"rgba(15, 20, 32, 0.75)":"rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
  border-radius: 16px;
  padding: 16px;
  margin-top: 14px;

  h3 {
    margin-top: 0;
    color: #00eeff;
    font-size: 16px;
  }
`,se=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`,te=g(i.div)`
  background: ${e=>e.$isDarkMode?"linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)":"linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)"};
  border: 1px solid ${e=>e.$borderColor||"rgba(0, 238, 255, 0.25)"};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  .icon {
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: ${e=>e.$iconBg||"rgba(0, 238, 255, 0.15)"};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .label {
    font-size: 11px;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .val {
    font-size: 14px;
    font-weight: 800;
    color: ${e=>e.$valColor||"#fff"};
  }
`,oe=g.span`
  color: ${e=>e.$color||"#ff6b6b"};
  font-weight: bold;
  background: ${e=>e.$color||"#ff6b6b"}22;
  padding: 2px 7px;
  border-radius: 6px;
  border: 1px solid ${e=>e.$color||"#ff6b6b"}44;
`,le=g.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;

  button {
    background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
    color: ${e=>e.$isDarkMode?"#aaa":"#555"};
    border: 1px solid transparent;
    padding: 8px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    transition: all 0.25s ease;

    &.active {
      background: linear-gradient(135deg, #00eeff 0%, #008cff 100%);
      color: #000;
      box-shadow: 0 4px 15px rgba(0, 238, 255, 0.4);
    }

    &:hover:not(.active) {
      background: rgba(0, 238, 255, 0.15);
      color: #00eeff;
    }
  }
`,de=g.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;

    th,
    td {
      padding: 10px 8px;
      text-align: center;
      border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
    }

    th {
      background: ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.15)":"rgba(0, 140, 255, 0.15)"};
      color: ${e=>e.$isDarkMode?"#00eeff":"#0055ff"};
      font-weight: 800;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.5px;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    tbody tr {
      transition: background 0.2s ease;
      &:hover {
        background: ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.08)":"rgba(0, 140, 255, 0.08)"};
      }
    }

    tbody tr:nth-child(odd) {
      background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.02)":"rgba(0, 0, 0, 0.02)"};
    }
  }
`,ce=({isOpen:e,onClose:r,card:i,isDarkMode:n})=>{const[g,j]=(0,u.useState)("hourly"),[v,D]=(0,u.useState)(0);if(!e||!i)return null;const _=i.current||{},M=i.hourly||[],C=i.daily16||[],z=x(M),S=z[v]?.items||[],I=C.find(e=>e.date===z[v]?.label)||C[0],F=e=>{if(!e)return"—";const r=new Date(e);return isNaN(r.getTime())?"—":`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`},B=(e=>{try{const r=new Date(e||Date.now()),a=function(e=new Date){const r=T(H(e)),a=O(r),i=G(r),n=149598e3,s=$(f(a.dec)*f(i.dec)+m(a.dec)*m(i.dec)*m(a.ra-i.ra)),t=w(n*f(s),i.dist-n*m(s)),o=w(m(a.dec)*f(a.ra-i.ra),f(a.dec)*m(i.dec)-m(a.dec)*f(i.dec)*m(a.ra-i.ra)),l=o<0;return{fraction:(1+m(t))/2,phase:.5+.5*t*(l?-1:1)/b,angle:o/N,waxing:l}}(r),n=function(e,r,a){const i=new Date(e);i.setUTCHours(0,0,0,0);let n,s,t=L(i,r,a),o=t;for(let d=1;d<=24;d+=2){const e=L(J(i,d),r,a),l=L(J(i,d+1),r,a);o=Math.max(o,e,l);const c=(t+l)/2-e,p=(l-t)/2,x=-p/(2*c),h=p*p-4*c*e;let g=0,u=0,b=0;const f=(c*x+p)*x+e;if(h>=0){const e=y(h)/(2*k(c));u=x-e,b=x+e,k(u)<=1&&g++,k(b)<=1&&g++,u<-1&&(u=b)}if(1===g?t<0?n=d+u:s=d+u:2===g&&(n=d+(f<0?b:u),s=d+(f<0?u:b)),void 0!==n&&void 0!==s)break;t=l}const l={};return void 0!==n&&(l.rise=new Date(Q(J(i,n).valueOf(),r,a))),void 0!==s&&(l.set=new Date(Q(J(i,s).valueOf(),r,a))),void 0===n&&void 0===s&&(l.alwaysUp=o>0,l.alwaysDown=o<=0),l}(r,i.lat||50.45,i.lon||30.52),s=a.phase;let t="";t=0===s?"🌑 Молодик":s<.25?"🌒 Зростаючий серп":.25===s?"🌓 Перша чверть":s<.5?"🌔 Зростаючий місяць":.5===s?"🌕 Повня":s<.75?"🌖 Спадаючий місяць":.75===s?"🌗 Остання чверть":"🌘 Спадаючий серп";const o=e=>{if(!e||isNaN(new Date(e).getTime()))return"Не сходить";const r=new Date(e);return`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`},l=n.rise?o(n.rise):"Не сходить";return{phaseText:t,rise:l,set:n.set?o(n.set):"Не заходить"}}catch(r){return{phaseText:"—",rise:"—",set:"—"}}})(I?.fullDate),E=(e=>{try{const r=R(new Date(e||Date.now()),i.lat||50.45,i.lon||30.52),a=e=>{if(!e||isNaN(new Date(e).getTime()))return"—";const r=new Date(e);return`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`};return{civilDawn:a(r.dawn),civilDusk:a(r.dusk),nauticalDawn:a(r.nauticalDawn),nauticalDusk:a(r.nauticalDusk),astroDawn:a(r.nightEnd),astroDusk:a(r.night)}}catch(r){return{civilDawn:"—",civilDusk:"—",nauticalDawn:"—",nauticalDusk:"—",astroDawn:"—",astroDusk:"—"}}})(I?.fullDate),P=((e,r)=>{if(!e||!r)return"—";const a=new Date(e),i=new Date(r);if(isNaN(a.getTime())||isNaN(i.getTime()))return"—";const n=i-a;return n<0?"—":`${Math.floor(n/36e5)}г ${Math.floor(n%36e5/6e4)}хв`})(I?.sunrise,I?.sunset);return(0,V.jsx)(a,{children:(0,V.jsx)(X,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:(0,V.jsxs)(Y,{$isDarkMode:n,$cityImage:i.cityImage,initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(Z,{children:[(0,V.jsxs)(ee,{children:["🏙️ Детальний прогноз: ",i.locationName]}),(0,V.jsxs)(re,{children:[i.cityImage&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(ae,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{e.stopPropagation();const r=document.createElement("a");r.href=i.cityImage,r.download=`${i.locationName}_фото.jpg`,r.target="_blank",r.click()},children:[(0,V.jsx)(l,{size:12})," Завантажити фото"]}),(0,V.jsxs)(ae,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{e.stopPropagation();const r=window.open("");r.document.write(`<img src="${i.cityImage}" style="width:100%"/>`),r.setTimeout(()=>r.print(),500)},children:[(0,V.jsx)(d,{size:12})," Друк"]})]}),(0,V.jsxs)(ie,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:r,children:[(0,V.jsx)(p,{size:13})," Закрити"]})]})]}),(0,V.jsxs)(le,{$isDarkMode:n,children:[(0,V.jsxs)("button",{className:"hourly"===g?"active":"",onClick:()=>j("hourly"),children:["По годинам (",M.length,"г)"]}),(0,V.jsx)("button",{className:"daily"===g?"active":"",onClick:()=>j("daily"),children:"По днях (16д)"})]}),"hourly"===g&&M.length>0&&(0,V.jsxs)(ne,{$isDarkMode:n,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},children:[(0,V.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:z.length>1&&(0,V.jsx)("select",{value:v,onChange:e=>D(Number(e.target.value)),style:{background:n?"#1f2430":"#ffffff",color:n?"#00eeff":"#0066ff",border:"1.5px solid #00eeff",padding:"6px 14px",borderRadius:"10px",cursor:"pointer",fontSize:"13px",fontWeight:"bold",outline:"none",boxShadow:"0 4px 12px rgba(0, 238, 255, 0.2)"},children:z.map((e,r)=>(0,V.jsxs)("option",{value:r,children:["📅 ",e.title||e.label]},e.label))})}),(0,V.jsxs)(se,{children:[(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(255, 215, 0, 0.4)",$iconBg:"rgba(255, 215, 0, 0.15)",$valColor:"#ffd700",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:(0,V.jsx)(s,{style:{color:"#ffd700"}})}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Схід / Захід сонця"}),(0,V.jsxs)("span",{className:"val",children:[F(I?.sunrise)," — ",F(I?.sunset)]})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(52, 152, 219, 0.4)",$iconBg:"rgba(52, 152, 219, 0.15)",$valColor:"#3498db",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:(0,V.jsx)(o,{style:{color:"#3498db"}})}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Тривалість дня"}),(0,V.jsx)("span",{className:"val",children:P})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(255, 179, 108, 0.4)",$iconBg:"rgba(255, 179, 108, 0.15)",$valColor:"#ffb36c",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:"🏙️"}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Цивільні сутінки"}),(0,V.jsxs)("span",{className:"val",children:[E.civilDawn," — ",E.civilDusk]})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(155, 89, 182, 0.4)",$iconBg:"rgba(155, 89, 182, 0.15)",$valColor:"#be90d4",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:"⚓"}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Навігаційні сутінки"}),(0,V.jsxs)("span",{className:"val",children:[E.nauticalDawn," — ",E.nauticalDusk]})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(75, 0, 130, 0.4)",$iconBg:"rgba(75, 0, 130, 0.15)",$valColor:"#a855f7",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:"🔭"}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Астрономічні сутінки"}),(0,V.jsxs)("span",{className:"val",children:[E.astroDawn," — ",E.astroDusk]})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(236, 240, 241, 0.4)",$iconBg:"rgba(236, 240, 241, 0.15)",$valColor:"#e0e0e0",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:(0,V.jsx)(c,{style:{color:"#ecf0f1"}})}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Схід / Захід місяця"}),(0,V.jsxs)("span",{className:"val",children:[B.rise," — ",B.set]})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(155, 89, 182, 0.4)",$iconBg:"rgba(155, 89, 182, 0.15)",$valColor:"#be90d4",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:(0,V.jsx)(t,{style:{color:"#9b59b6"}})}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Фаза місяця"}),(0,V.jsx)("span",{className:"val",children:B.phaseText})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(0, 238, 255, 0.4)",$iconBg:"rgba(0, 238, 255, 0.15)",$valColor:"#00eeff",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:"❄️"}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Сніг / Замерзання ґрунту"}),(0,V.jsxs)("span",{className:"val",children:[_.snow_depth?`${(100*_.snow_depth).toFixed(1)} см`:"0 см"," | Ґрунт: ",_.soil_temperature_0cm??0,"°C"]})]})]}),(0,V.jsxs)(te,{$isDarkMode:n,$borderColor:"rgba(255, 153, 0, 0.4)",$iconBg:"rgba(255, 153, 0, 0.15)",$valColor:"#ff9900",whileHover:{scale:1.02},children:[(0,V.jsx)("div",{className:"icon",children:"💧"}),(0,V.jsxs)("div",{className:"content",children:[(0,V.jsx)("span",{className:"label",children:"Випаровування (ET0)"}),(0,V.jsx)("span",{className:"val",children:_.evapotranspiration?`${_.evapotranspiration.toFixed(2)} мм`:"0 мм"})]})]})]}),(0,V.jsx)(de,{$isDarkMode:n,children:(0,V.jsxs)("table",{children:[(0,V.jsx)("thead",{children:(0,V.jsxs)("tr",{children:[(0,V.jsx)("th",{children:"Час"}),(0,V.jsxs)("th",{children:["Температура",(0,V.jsx)("br",{}),"(Відчувається)"]}),(0,V.jsxs)("th",{children:["Вітер (м/с)",(0,V.jsx)("br",{}),"Напрям"]}),(0,V.jsxs)("th",{children:["Вологість",(0,V.jsx)("br",{}),"Точка роси"]}),(0,V.jsx)("th",{children:"Опади / Сніг"}),(0,V.jsx)("th",{children:"Замерзання 0°C / Ґрунт"}),(0,V.jsx)("th",{children:"Випаровування"}),(0,V.jsx)("th",{children:"Тиск / Хмарність"})]})}),(0,V.jsx)("tbody",{children:S.map((e,r)=>(0,V.jsxs)("tr",{children:[(0,V.jsx)("td",{children:(0,V.jsx)("strong",{children:e.time})}),(0,V.jsxs)("td",{children:[void 0!==e.tempNum&&(e.tempNum>30||e.tempNum<-30)?(0,V.jsxs)(oe,{$color:e.tempNum>30?"#ff6b6b":e.tempNum<-30?"#4169e1":"#ffb36c",children:[e.tempNum,"°C"]}):`${void 0!==e.tempNum?e.tempNum:"—"}°C`,(0,V.jsx)("br",{}),(0,V.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["(",void 0!==e.feels_like?e.feels_like:"—",")"]})]}),(0,V.jsxs)("td",{children:[void 0!==e.windNum&&e.windNum>10?(0,V.jsxs)(oe,{$color:"#ff9800",children:[e.windNum.toFixed(1)," м/с"]}):`${void 0!==e.windNum?e.windNum.toFixed(1):"—"}`,e.wind_gusts_10m?` (${e.wind_gusts_10m.toFixed(1)})`:"",(0,V.jsx)("br",{}),(0,V.jsx)("span",{style:{fontSize:"10px"},children:h(e.wind_direction_10m)})]}),(0,V.jsxs)("td",{children:[e.relative_humidity_2m??"—","%",(0,V.jsx)("br",{}),(0,V.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["TR: ",void 0!==e.dew_point_2m?`${e.dew_point_2m}°C`:"—"]})]}),(0,V.jsxs)("td",{children:[void 0!==e.precipitation?e.precipitation.toFixed(1):"—"," мм",(0,V.jsx)("br",{}),(0,V.jsx)("span",{style:{fontSize:"10px",opacity:.7},children:e.snow_depth?`Сніг: ${(100*e.snow_depth).toFixed(1)}см`:"Без снігу"})]}),(0,V.jsxs)("td",{children:[e.freezing_level_height?`${e.freezing_level_height}м`:"—",(0,V.jsx)("br",{}),(0,V.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["Ґрунт: ",void 0!==e.soil_temperature_0cm?`${e.soil_temperature_0cm}°C`:"—"]})]}),(0,V.jsx)("td",{children:void 0!==e.evapotranspiration?`${e.evapotranspiration.toFixed(2)} мм`:"0 мм"}),(0,V.jsxs)("td",{children:[e.pressure_msl?Math.round(e.pressure_msl):"—"," hPa",(0,V.jsx)("br",{}),(0,V.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["Хмари: ",e.cloud_cover??"—","%"]})]})]},r))})]})})]}),"daily"===g&&C.length>0&&(0,V.jsx)(ne,{$isDarkMode:n,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},children:(0,V.jsx)(de,{$isDarkMode:n,children:(0,V.jsxs)("table",{children:[(0,V.jsx)("thead",{children:(0,V.jsxs)("tr",{children:[(0,V.jsx)("th",{children:"Дата"}),(0,V.jsx)("th",{children:"День"}),(0,V.jsx)("th",{children:"Ніч"}),(0,V.jsx)("th",{children:"Вітер"}),(0,V.jsx)("th",{children:"УФ"}),(0,V.jsx)("th",{children:"Опади %"}),(0,V.jsx)("th",{children:"Дощ (мм)"}),(0,V.jsx)("th",{children:"Випаровування (ET0)"})]})}),(0,V.jsx)("tbody",{children:C.map((e,r)=>(0,V.jsxs)("tr",{children:[(0,V.jsx)("td",{children:(0,V.jsx)("strong",{children:e.date})}),(0,V.jsx)("td",{children:parseInt(e.temp_day)>30||parseInt(e.temp_day)<-30?(0,V.jsx)(oe,{$color:parseInt(e.temp_day)>30?"#ff6b6b":"#4169e1",children:e.temp_day}):e.temp_day}),(0,V.jsx)("td",{children:e.temp_night}),(0,V.jsx)("td",{children:parseFloat(e.wind_speed)>10?(0,V.jsx)(oe,{$color:"#ff9800",children:e.wind_speed}):e.wind_speed}),(0,V.jsx)("td",{children:e.uv_index>7?(0,V.jsx)(oe,{$color:"#ff6b6b",children:e.uv_index}):e.uv_index}),(0,V.jsxs)("td",{children:[e.precipitation_probability_max??"—","%"]}),(0,V.jsx)("td",{children:void 0!==e.rain_sum?e.rain_sum.toFixed(1):"—"}),(0,V.jsx)("td",{children:void 0!==e.evapotranspiration?`${e.evapotranspiration.toFixed(2)} мм`:"—"})]},r))})]})})})]})})})};export{ce as default};
//# sourceMappingURL=WeatherDetailsModal-C1jXQIec.js.map