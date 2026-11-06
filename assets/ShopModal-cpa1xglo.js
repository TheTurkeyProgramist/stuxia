import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as t}from"./vendor-i18n-4NhlWQFf.js";import{s as r}from"./vendor-motion-Bh6mtAYz.js";import{Rr as n,Vr as i,vi as o}from"./vendor-ui-BcfDBn2Z.js";import{B as s,H as a,V as l,_ as c}from"./index-2DOTQNJp.js";var d,h,u=e(t()),f=Object.defineProperty,g=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))m.call(t,r)&&x(e,r,t[r]);return e},b=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};(e=>{const t=class t{constructor(e,r,n,o){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let s=[];for(let t=0;t<this.size;t++)s.push(!1);for(let t=0;t<this.size;t++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(n);if(this.drawCodewords(a),-1==o){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const r=this.getPenaltyScore();r<e&&(o=t,e=r),this.applyMask(t)}}i(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(r,n){const i=e.QrSegment.makeSegments(r);return t.encodeSegments(i,n)}static encodeBinary(r,n){const i=e.QrSegment.makeBytes(r);return t.encodeSegments([i],n)}static encodeSegments(e,n,o=1,a=40,l=-1,c=!0){if(!(t.MIN_VERSION<=o&&o<=a&&a<=t.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let d,h;for(d=o;;d++){const r=8*t.getNumDataCodewords(d,n),i=s.getTotalBits(e,d);if(i<=r){h=i;break}if(d>=a)throw new RangeError("Data too long")}for(const r of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])c&&h<=8*t.getNumDataCodewords(d,r)&&(n=r);let u=[];for(const t of e){r(t.mode.modeBits,4,u),r(t.numChars,t.mode.numCharCountBits(d),u);for(const e of t.getData())u.push(e)}i(u.length==h);const f=8*t.getNumDataCodewords(d,n);i(u.length<=f),r(0,Math.min(4,f-u.length),u),r(0,(8-u.length%8)%8,u),i(u.length%8==0);for(let t=236;u.length<f;t^=253)r(t,8,u);let g=[];for(;8*g.length<u.length;)g.push(0);return u.forEach((e,t)=>g[t>>>3]|=e<<7-(7&t)),new t(d,n,g,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)0==r&&0==n||0==r&&n==t-1||r==t-1&&0==n||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let n=0;n<10;n++)r=r<<1^1335*(r>>>9);const o=21522^(t<<10|r);i(o>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,n(o,i));this.setFunctionModule(8,7,n(o,6)),this.setFunctionModule(8,8,n(o,7)),this.setFunctionModule(7,8,n(o,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,n(o,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,n(o,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,n(o,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;i(t>>>18==0);for(let r=0;r<18;r++){const e=n(t,r),i=this.size-11+r%3,o=Math.floor(r/3);this.setFunctionModule(i,o,e),this.setFunctionModule(o,i,e)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const i=Math.max(Math.abs(n),Math.abs(r)),o=e+n,s=t+r;0<=o&&o<this.size&&0<=s&&s<this.size&&this.setFunctionModule(o,s,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw new RangeError("Invalid argument");const o=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],s=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],a=Math.floor(t.getNumRawDataModules(r)/8),l=o-a%o,c=Math.floor(a/o);let d=[];const h=t.reedSolomonComputeDivisor(s);for(let i=0,f=0;i<o;i++){let r=e.slice(f,f+c-s+(i<l?0:1));f+=r.length;const n=t.reedSolomonComputeRemainder(r,h);i<l&&r.push(0),d.push(r.concat(n))}let u=[];for(let t=0;t<d[0].length;t++)d.forEach((e,r)=>{(t!=c-s||r>=l)&&u.push(e[t])});return i(u.length==a),u}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let o=0;o<2;o++){const s=t-o,a=t+1&2?i:this.size-1-i;!this.isFunction[a][s]&&r<8*e.length&&(this.modules[a][s]=n(e[r>>>3],7-(7&r)),r++)}}i(r==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let i=0;i<this.size;i++){let r=!1,n=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[i][s]==r?(n++,5==n?e+=t.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,o),r||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),r=this.modules[i][s],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,o)*t.PENALTY_N3}for(let i=0;i<this.size;i++){let r=!1,n=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][i]==r?(n++,5==n?e+=t.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,o),r||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),r=this.modules[s][i],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,o)*t.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let r=0;r<this.size-1;r++){const n=this.modules[i][r];n==this.modules[i][r+1]&&n==this.modules[i+1][r]&&n==this.modules[i+1][r+1]&&(e+=t.PENALTY_N2)}let r=0;for(const t of this.modules)r=t.reduce((e,t)=>e+(t?1:0),r);const n=this.size*this.size,o=Math.ceil(Math.abs(20*r-10*n)/n)-1;return i(0<=o&&o<=9),e+=o*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return i(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let i=0;i<e;i++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(const i of e){const e=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^285*(r>>>7),r^=(t>>>n&1)*e;return i(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];i(t<=3*this.size);const r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function n(e,t){return!!(e>>>t&1)}function i(e){if(!e)throw new Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;const o=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let n=[];for(const e of t)r(e,8,n);return new e(e.Mode.BYTE,t.length,n)}static makeNumeric(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");let n=[];for(let e=0;e<t.length;){const i=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+i),10),3*i+1,n),e+=i}return new e(e.Mode.NUMERIC,t.length,n)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let n,i=[];for(n=0;n+2<=t.length;n+=2){let o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),r(o,11,i)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,i),new e(e.Mode.ALPHANUMERIC,t.length,i)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,n),r(t,21,n)}return new e(e.Mode.ECI,0,n)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const n of e){const e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=o;e.QrSegment=o})(d||(d={})),(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})((h=d||(d={})).QrCode||(h.QrCode={})),(e=>{(e=>{const t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||(e.QrSegment={}))})(d||(d={}));var v=d,E={L:v.QrCode.Ecc.LOW,M:v.QrCode.Ecc.MEDIUM,Q:v.QrCode.Ecc.QUARTILE,H:v.QrCode.Ecc.HIGH},M=128,y="L",C="#FFFFFF",R="#000000",k=!1,A=1;function N(e,t=0){const r=[];return e.forEach(function(e,n){let i=null;e.forEach(function(o,s){if(!o&&null!==i)return r.push(`M${i+t} ${n+t}h${s-i}v1H${i+t}z`),void(i=null);if(s!==e.length-1)o&&null===i&&(i=s);else{if(!o)return;null===i?r.push(`M${s+t},${n+t} h1v1H${s+t}z`):r.push(`M${i+t},${n+t} h${s+1-i}v1H${i+t}z`)}})}),r.join("")}function z(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function S(e,t,r,n){if(null==n)return null;const i=e.length+2*r,o=Math.floor(.1*t),s=i/t,a=(n.width||o)*s,l=(n.height||o)*s,c=null==n.x?e.length/2-a/2:n.x*s,d=null==n.y?e.length/2-l/2:n.y*s,h=null==n.opacity?1:n.opacity;let u=null;if(n.excavate){let e=Math.floor(c),t=Math.floor(d);u={x:e,y:t,w:Math.ceil(a+c-e),h:Math.ceil(l+d-t)}}return{x:c,y:d,h:l,w:a,excavation:u,opacity:h,crossOrigin:n.crossOrigin}}function I({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:s,boostLevel:a}){let l=u.useMemo(()=>{const n=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...v.QrSegment.makeSegments(t)),e),[]);return v.QrCode.encodeSegments(n,E[t],r,void 0,void 0,a)},[e,t,r,a]);const{cells:c,margin:d,numCells:h,calculatedImageSettings:f}=u.useMemo(()=>{let e=l.getModules();const t=function(e,t){return null!=t?Math.max(Math.floor(t),0):e?4:0}(n,i);return{cells:e,margin:t,numCells:e.length+2*t,calculatedImageSettings:S(e,s,t,o)}},[l,s,o,n,i]);return{qrcode:l,margin:d,cells:c,numCells:h,calculatedImageSettings:f}}var P=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();u.forwardRef(function(e,t){const r=e,{value:n,size:i=M,level:o=y,bgColor:s=C,fgColor:a=R,includeMargin:l=k,minVersion:c=A,boostLevel:d,marginSize:h,imageSettings:f}=r,g=b(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:p}=g,m=b(g,["style"]),x=null==f?void 0:f.src,v=u.useRef(null),E=u.useRef(null),S=u.useCallback(e=>{v.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[$,O]=u.useState(!1),{margin:_,cells:j,numCells:L,calculatedImageSettings:T}=I({value:n,level:o,minVersion:c,boostLevel:d,includeMargin:l,marginSize:h,imageSettings:f,size:i});u.useEffect(()=>{if(null!=v.current){const e=v.current,t=e.getContext("2d");if(!t)return;let r=j;const n=E.current,o=null!=T&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;o&&null!=T.excavation&&(r=z(j,T.excavation));const l=window.devicePixelRatio||1;e.height=e.width=i*l;const c=i/L*l;t.scale(c,c),t.fillStyle=s,t.fillRect(0,0,L,L),t.fillStyle=a,P?t.fill(new Path2D(N(r,_))):j.forEach(function(e,r){e.forEach(function(e,n){e&&t.fillRect(n+_,r+_,1,1)})}),T&&(t.globalAlpha=T.opacity),o&&t.drawImage(n,T.x+_,T.y+_,T.w,T.h)}}),u.useEffect(()=>{O(!1)},[x]);const F=w({height:i,width:i},p);let H=null;return null!=x&&(H=u.createElement("img",{src:x,key:x,style:{display:"none"},onLoad:()=>{O(!0)},ref:E,crossOrigin:null==T?void 0:T.crossOrigin})),u.createElement(u.Fragment,null,u.createElement("canvas",w({style:F,height:i,width:i,ref:S,role:"img"},m)),H)}).displayName="QRCodeCanvas";var $=u.forwardRef(function(e,t){const r=e,{value:n,size:i=M,level:o=y,bgColor:s=C,fgColor:a=R,includeMargin:l=k,minVersion:c=A,boostLevel:d,title:h,marginSize:f,imageSettings:g}=r,p=b(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:m,cells:x,numCells:v,calculatedImageSettings:E}=I({value:n,level:o,minVersion:c,boostLevel:d,includeMargin:l,marginSize:f,imageSettings:g,size:i});let S=x,P=null;null!=g&&null!=E&&(null!=E.excavation&&(S=z(x,E.excavation)),P=u.createElement("image",{href:g.src,height:E.h,width:E.w,x:E.x+m,y:E.y+m,preserveAspectRatio:"none",opacity:E.opacity,crossOrigin:E.crossOrigin}));const $=N(S,m);return u.createElement("svg",w({height:i,width:i,viewBox:`0 0 ${v} ${v}`,ref:t,role:"img"},p),!!h&&u.createElement("title",null,h),u.createElement("path",{fill:s,d:`M0,0 h${v}v${v}H0z`,shapeRendering:"crispEdges"}),u.createElement("path",{fill:a,d:$,shapeRendering:"crispEdges"}),P)});$.displayName="QRCodeSVG";var O=r(),_=s`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,j=s`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,L=s`
  from { opacity: 0; }
  to { opacity: 1; }
`,T=a.div`
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
`,F=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='64' height='72'><rect width='64' height='72' fill='#6b574d'/><path d='M0 1.5H64M0 37.5H64M32 0V36M0 36V72M64 36V72' fill='none' stroke='#2b1a16' stroke-width='3'/></svg>")}")`,H="1100px",U="32px",B=a.div`
  display: none;
  position: absolute;
  top: ${U};
  bottom: 0;
  ${e=>e.$side}: 0;
  width: calc((100vw - ${H}) / 2);
  background-image: ${F};
  background-size: 64px 72px;
  filter: brightness(0.5);
  box-shadow: inset ${e=>"left"===e.$side?"-":""}24px 0 40px rgba(0, 0, 0, 0.6);
  pointer-events: none;

  /* зубці на вершині стіни */
  &::before {
    content: "";
    position: absolute;
    top: -${U};
    left: 0;
    right: 0;
    height: ${U};
    background-image: ${F};
    background-size: 64px 72px;
    mask-image: repeating-linear-gradient(90deg, #000 0 40px, transparent 40px 72px);
  }

  /* бійниці */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 16px;
    transform: translateX(-50%);
    background: repeating-linear-gradient(
      180deg,
      transparent 0 120px,
      #1a0c0a 120px 200px,
      transparent 200px 360px
    );
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0 12px rgba(255, 190, 90, 0.35);
  }

  @media (min-width: 1250px) {
    display: block;
  }
`,D=a.div`
  background-color: #2b1313;
  background-image: url(${c});
  background-size: cover;
  background-position: center;
  color: #fff;
  width: 100%;
  max-width: ${H};
  z-index: 1;
  max-height: 95%;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${e=>e.$isClosing?j:_} ${500}ms ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`,V=a.button`
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 1;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background: #000000cd;
  border: none;
  color: #ff6c6c;
  font-size: 15px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`,Q=a.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 20px;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  background: #000000cd;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,Y="rgba(20, 8, 8, 0.82)",G=128,X=Math.ceil(8.59375),K=a.div`
  position: relative;
  height: 26px;
  background: repeating-linear-gradient(
    90deg,
    ${Y} 0 ${72}px,
    transparent ${72}px ${G}px
  );
  border-bottom: 2px solid #ff6c6c;
  display: flex;
  width: 100%;
  min-width: 0;
  overflow-x: clip;
  overflow-y: visible;
  z-index: 2;
  margin-top: 80px;
`,W=a.div`
  position: relative;
  flex: 0 0 ${G}px;
  width: ${G}px;
  height: 100%;
  pointer-events: none;
`,J=a.span`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: ${72}px;
  display: flex;
  justify-content: center;
  color: ${Y};
  font-size: 68px;
  line-height: 0;
`,Z=e=>(0,O.jsxs)("svg",{viewBox:"0 0 64 64",width:"1em",height:"1em",fill:"currentColor",...e,children:[(0,O.jsx)("path",{d:"M24 5.5a5.5 5.5 0 0 0-5 3 5 5 0 0 0-5.500-.5 5 5 0 0 0-3.500 6 5 5 0 0 0-4 5.500 4.500 4.500 0 0 0-1.500 5.500 4 4 0 0 0-1.500 6 6 6 0 0 0 5.500 5.500H26V16c0-5-1.500-8-2-10.500z"}),(0,O.jsx)("path",{d:"M24 5.500c-2 3-1.500 9 1 14l5 3.500V40l-9 2-1.500 4.500c3 1 8-1 12-2.500V22z"}),(0,O.jsx)("ellipse",{cx:"40",cy:"32",rx:"19",ry:"14.500"}),(0,O.jsx)("path",{d:"M52 10c-1 7 5 12 6 22",fill:"none",stroke:"currentColor",strokeWidth:"6.500",strokeLinecap:"round"}),(0,O.jsx)("circle",{cx:"53",cy:"9",r:"5.800"}),(0,O.jsx)("path",{d:"M57 8l5.500 3.200-5 1.200z"}),(0,O.jsx)("path",{d:"M57 13l1.500 3.500 1-3z"}),(0,O.jsx)("path",{d:"M35 44h1.800v11H35zM41 44h1.800v11H41zM32 55h8v2H32zM39 54.500h8.500l-2 2.500H39z"})]}),q=[{Icon:i},{Icon:Z},{Icon:o},{Icon:Z},{Icon:n},{Icon:Z}],ee=a.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,te=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 120px;
  border-bottom: 1px solid #ff6c6c;
  background-color: ${Y};
  background-image:
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.06) 0 2px, transparent 2px 32px),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0 2px, transparent 2px 64px);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(20, 8, 8, 0.68);
  }
`,re=a.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 10px;
`,ne=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 1 260px;
`,ie=a.a`
  display: block;
  padding: 8px;
  background: #fff;
  border-radius: 12px;
  line-height: 0;
  flex-shrink: 0;
`,oe=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,se=a.div`
  font-family: Georgia, "Times New Roman", serif;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`,ae=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,le=a.a`
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

  ${e=>e.$featured&&l`
      padding:13px 16px;
      font-size: 14px;
      color: #2b1313;
      background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
      border-color: #fff3c4;

      &:hover {
        background: linear-gradient(135deg, #ffe08f 0%, #ffb84d 100%);
      }
    `}
`,ce=a.div`
  color: #f8f1c6;
  font-size: 13px;
  font-style: italic;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`,de=a.div`
  display: flex;
  flex-direction: column;
  animation: ${L} 0.4s ease-out;
`,he="https://donatello.to/TheTurkeyStudio",ue=[{id:"uanimals",title:"Допомога тваринам",buttonText:"Підтримати UAnimals",linkUrl:"https://uanimals.org/"},{id:"ecoaction",title:"Захист природи",buttonText:"Підтримати Екодію",linkUrl:"https://ecoaction.org.ua/"},{id:"happypaw",title:"Притулки для тварин",buttonText:"Підтримати Happy Paw",linkUrl:"https://happypaw.ua/"},{id:"tnc",title:"Охорона земель і вод",buttonText:"Підтримати Nature Conservancy",linkUrl:"https://www.nature.org/"},{id:"oceana",title:"Захист океанів",buttonText:"Підтримати Oceana",linkUrl:"https://oceana.org/"},{id:"rainforest",title:"Захист тропічних лісів",buttonText:"Підтримати Rainforest Trust",linkUrl:"https://rainforesttrust.org/"}];Array.from({length:10},(e,t)=>t),Array.from({length:6},(e,t)=>t);var fe=({onClose:e})=>{const[t,r]=(0,u.useState)(!1),n=(0,u.useRef)(null),i=(0,u.useCallback)(()=>{n.current||(r(!0),n.current=setTimeout(e,500))},[e]);return(0,u.useEffect)(()=>{const e=e=>{"Escape"===e.key&&i()},t=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e),document.body.style.overflow=t}},[i]),(0,u.useEffect)(()=>()=>clearTimeout(n.current),[]),(0,O.jsxs)(T,{onClick:i,children:[(0,O.jsx)(B,{$side:"left","aria-hidden":"true"}),(0,O.jsx)(B,{$side:"right","aria-hidden":"true"}),(0,O.jsxs)(D,{role:"dialog","aria-modal":"true","aria-label":"Замок Доміно",$isClosing:t,onClick:e=>e.stopPropagation(),children:[(0,O.jsx)(V,{onClick:i,children:"Закрити"}),(0,O.jsxs)(de,{children:[(0,O.jsxs)(re,{children:[(0,O.jsxs)(ne,{children:[(0,O.jsx)(Q,{children:"Древній Замок"}),(0,O.jsx)(ce,{children:"Мене звати Доміно, я люблю давнє кіно. Підтримай фонди і мене будь ласка!"}),(0,O.jsx)(le,{href:he,target:"_blank",rel:"noopener noreferrer",$featured:!0,children:"Підтримате нас!"})]}),(0,O.jsx)(ie,{href:he,target:"_blank",rel:"noopener noreferrer","aria-label":"QR-код для підтримки автора",children:(0,O.jsx)($,{value:he,size:128})})]}),(0,O.jsx)(K,{children:Array.from({length:X},(e,t)=>{const{Icon:r}=q[t%q.length];return(0,O.jsx)(W,{children:(0,O.jsx)(J,{"aria-hidden":"true",children:(0,O.jsx)(r,{})})},t)})}),(0,O.jsx)(ee,{children:ue.map(e=>(0,O.jsx)(te,{children:(0,O.jsxs)(oe,{children:[(0,O.jsx)(se,{children:e.title}),(0,O.jsx)(ae,{children:(0,O.jsx)(le,{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",children:e.buttonText})})]})},e.id))})]})]})]})};export{fe as default};