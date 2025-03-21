const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MpegParser-DJEe9mN9.js","assets/AbstractID3Parser-K05mt0-y.js","assets/ID3v2Parser-CczxrljN.js","assets/DsdiffParser-DzK12UNk.js","assets/AiffParser-BslZo6vL.js","assets/DsfParser-UK2TH3GP.js","assets/FlacParser-CVhEZ0fI.js","assets/VorbisParser-C3gNceiP.js","assets/MusepackParser-DmhXarsa.js","assets/OggParser-HTPiol4i.js","assets/WaveParser-B4mVUS7d.js"])))=>i.map(i=>d[i]);
var wd=Object.defineProperty;var Rd=(i,e,t)=>e in i?wd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ie=(i,e,t)=>Rd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="173",_r={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cd=0,el=1,Id=2,ih=1,Pd=2,bn=3,Kn=0,Gt=1,Rn=2,_i=0,xr=1,tl=2,nl=3,il=4,Ld=5,Fi=100,Dd=101,Nd=102,Ud=103,Fd=104,Od=200,Bd=201,kd=202,zd=203,yo=204,Mo=205,Hd=206,Gd=207,Vd=208,Wd=209,Xd=210,Yd=211,qd=212,jd=213,Kd=214,So=0,To=1,Eo=2,Tr=3,bo=4,Ao=5,wo=6,Ro=7,rh=0,Zd=1,$d=2,xi=0,Jd=1,Qd=2,ef=3,sh=4,tf=5,nf=6,rf=7,rl="attached",sf="detached",ah=300,Er=301,br=302,Co=303,Io=304,ya=306,Ar=1e3,fi=1001,ha=1002,Ut=1003,oh=1004,$r=1005,Kt=1006,na=1007,qn=1008,Zn=1009,ch=1010,lh=1011,os=1012,yc=1013,Wi=1014,vn=1015,ds=1016,Mc=1017,Sc=1018,wr=1020,uh=35902,hh=1021,dh=1022,ln=1023,fh=1024,ph=1025,vr=1026,Rr=1027,Tc=1028,Ec=1029,mh=1030,bc=1031,Ac=1033,ia=33776,ra=33777,sa=33778,aa=33779,Po=35840,Lo=35841,Do=35842,No=35843,Uo=36196,Fo=37492,Oo=37496,Bo=37808,ko=37809,zo=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,Yo=37816,qo=37817,jo=37818,Ko=37819,Zo=37820,$o=37821,oa=36492,Jo=36494,Qo=36495,gh=36283,ec=36284,tc=36285,nc=36286,cs=2300,ls=2301,Ra=2302,sl=2400,al=2401,ol=2402,af=2500,of=0,_h=1,ic=2,cf=3200,lf=3201,xh=0,uf=1,hi="",yt="srgb",Ot="srgb-linear",da="linear",tt="srgb",Ki=7680,cl=519,hf=512,df=513,ff=514,vh=515,pf=516,mf=517,gf=518,_f=519,rc=35044,ll="300 es",Cn=2e3,fa=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const ts=Math.PI/180,Cr=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function wc(i,e){return(i%e+e)%e}function xf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function vf(i,e,t){return i!==e?(t-i)/(e-i):0}function ns(i,e,t){return(1-t)*i+t*e}function yf(i,e,t,n){return ns(i,e,1-Math.exp(-t*n))}function Mf(i,e=1){return e-Math.abs(wc(i,e*2)-e)}function Sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ef(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bf(i,e){return i+Math.random()*(e-i)}function Af(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&(ul=i);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(i){return i*ts}function Cf(i){return i*Cr}function If(i){return(i&i-1)===0&&i!==0}function Pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Df(i,e,t,n,r){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),h=s((e+n)/2),f=o((e+n)/2),a=s((e-n)/2),l=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(c*f,u*a,u*l,c*h);break;case"YZY":i.set(u*l,c*f,u*a,c*h);break;case"ZXZ":i.set(u*a,u*l,c*f,c*h);break;case"XZX":i.set(c*f,u*g,u*d,c*h);break;case"YXY":i.set(u*d,c*f,u*g,c*h);break;case"ZYZ":i.set(u*g,u*d,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yr={DEG2RAD:ts,RAD2DEG:Cr,generateUUID:Mn,clamp:Oe,euclideanModulo:wc,mapLinear:xf,inverseLerp:vf,lerp:ns,damp:yf,pingpong:Mf,smoothstep:Sf,smootherstep:Tf,randInt:Ef,randFloat:bf,randFloatSpread:Af,seededRandom:wf,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:If,ceilPowerOfTwo:Pf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:Qe,denormalize:_n};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,s,o,c,u,h){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,u,h)}set(e,t,n,r,s,o,c,u,h){const f=this.elements;return f[0]=e,f[1]=r,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],f=n[4],a=n[7],l=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],S=r[1],E=r[4],y=r[7],C=r[2],A=r[5],w=r[8];return s[0]=o*_+c*S+u*C,s[3]=o*m+c*E+u*A,s[6]=o*p+c*y+u*w,s[1]=h*_+f*S+a*C,s[4]=h*m+f*E+a*A,s[7]=h*p+f*y+a*w,s[2]=l*_+d*S+g*C,s[5]=l*m+d*E+g*A,s[8]=l*p+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*c*h-n*s*f+n*c*u+r*s*h-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],a=f*o-c*h,l=c*u-f*s,d=h*s-o*u,g=t*a+n*l+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=a*_,e[1]=(r*h-f*n)*_,e[2]=(c*n-r*o)*_,e[3]=l*_,e[4]=(f*t-r*u)*_,e[5]=(r*s-c*t)*_,e[6]=d*_,e[7]=(n*u-h*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-r*h,r*u,-r*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Ne;function yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){const i=us("canvas");return i.style.display="block",i}const hl={};function hr(i){i in hl||(hl[i]=!0,console.warn(i))}function Uf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ff(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Of(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){const i={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?da:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ot]:{primaries:e,whitePoint:n,transfer:da,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}const We=Bf();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=us("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zf=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(Ia(r[o].image)):s.push(Ia(r[o]))}else s=Ia(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hf=0;class Et extends Yi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=fi,r=fi,s=Kt,o=qn,c=ln,u=Zn,h=Et.DEFAULT_ANISOTROPY,f=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Mn(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=ah;Et.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,h=u[0],f=u[4],a=u[8],l=u[1],d=u[5],g=u[9],_=u[2],m=u[6],p=u[10];if(Math.abs(f-l)<.01&&Math.abs(a-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+l)<.1&&Math.abs(a+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,y=(d+1)/2,C=(p+1)/2,A=(f+l)/4,w=(a+_)/4,U=(g+m)/4;return E>y&&E>C?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=A/n,s=w/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=U/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=U/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(a-_)*(a-_)+(l-f)*(l-f));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(a-_)/S,this.z=(l-f)/S,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sh extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vf extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,c){let u=n[r+0],h=n[r+1],f=n[r+2],a=n[r+3];const l=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=a;return}if(c===1){e[t+0]=l,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(a!==_||u!==l||h!==d||f!==g){let m=1-c;const p=u*l+h*d+f*g+a*_,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),A=Math.atan2(C,p*S);m=Math.sin(m*A)/C,c=Math.sin(c*A)/C}const y=c*S;if(u=u*m+l*y,h=h*m+d*y,f=f*m+g*y,a=a*m+_*y,m===1-c){const C=1/Math.sqrt(u*u+h*h+f*f+a*a);u*=C,h*=C,f*=C,a*=C}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,r,s,o){const c=n[r],u=n[r+1],h=n[r+2],f=n[r+3],a=s[o],l=s[o+1],d=s[o+2],g=s[o+3];return e[t]=c*g+f*a+u*d-h*l,e[t+1]=u*g+f*l+h*a-c*d,e[t+2]=h*g+f*d+c*l-u*a,e[t+3]=f*g-c*a-u*l-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(r/2),a=c(s/2),l=u(n/2),d=u(r/2),g=u(s/2);switch(o){case"XYZ":this._x=l*f*a+h*d*g,this._y=h*d*a-l*f*g,this._z=h*f*g+l*d*a,this._w=h*f*a-l*d*g;break;case"YXZ":this._x=l*f*a+h*d*g,this._y=h*d*a-l*f*g,this._z=h*f*g-l*d*a,this._w=h*f*a+l*d*g;break;case"ZXY":this._x=l*f*a-h*d*g,this._y=h*d*a+l*f*g,this._z=h*f*g+l*d*a,this._w=h*f*a-l*d*g;break;case"ZYX":this._x=l*f*a-h*d*g,this._y=h*d*a+l*f*g,this._z=h*f*g-l*d*a,this._w=h*f*a+l*d*g;break;case"YZX":this._x=l*f*a+h*d*g,this._y=h*d*a+l*f*g,this._z=h*f*g-l*d*a,this._w=h*f*a-l*d*g;break;case"XZY":this._x=l*f*a-h*d*g,this._y=h*d*a-l*f*g,this._z=h*f*g+l*d*a,this._w=h*f*a+l*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],c=t[5],u=t[9],h=t[2],f=t[6],a=t[10],l=n+c+a;if(l>0){const d=.5/Math.sqrt(l+1);this._w=.25/d,this._x=(f-u)*d,this._y=(s-h)*d,this._z=(o-r)*d}else if(n>c&&n>a){const d=2*Math.sqrt(1+n-c-a);this._w=(f-u)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+h)/d}else if(c>a){const d=2*Math.sqrt(1+c-n-a);this._w=(s-h)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(u+f)/d}else{const d=2*Math.sqrt(1+a-n-c);this._w=(o-r)/d,this._x=(s+h)/d,this._y=(u+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*c+r*h-s*u,this._y=r*f+o*u+s*c-n*h,this._z=s*f+o*h+n*u-r*c,this._w=o*f-n*c-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let c=o*e._w+n*e._x+r*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),a=Math.sin((1-t)*f)/h,l=Math.sin(t*f)/h;return this._w=o*a+this._w*l,this._x=n*a+this._x*l,this._y=r*a+this._y*l,this._z=s*a+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*r-c*n),f=2*(c*t-s*r),a=2*(s*n-o*t);return this.x=t+u*h+o*a-c*f,this.y=n+u*f+c*h-s*a,this.z=r+u*a+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=r*u-s*c,this.y=s*o-n*u,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new P,pl=new un;class $n{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ms.subVectors(this.max,kr),$i.subVectors(e.a,kr),Ji.subVectors(e.b,kr),Qi.subVectors(e.c,kr),Qn.subVectors(Ji,$i),ei.subVectors(Qi,Ji),Ei.subVectors($i,Qi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Ei.z,Ei.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Ei.z,0,-Ei.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Ei.y,Ei.x,0];return!La(t,$i,Ji,Qi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!La(t,$i,Ji,Qi,Ms))?!1:(Ss.crossVectors(Qn,ei),t=[Ss.x,Ss.y,Ss.z],La(t,$i,Ji,Qi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,ys=new $n,$i=new P,Ji=new P,Qi=new P,Qn=new P,ei=new P,Ei=new P,kr=new P,Ms=new P,Ss=new P,bi=new P;function La(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bi.fromArray(i,s);const c=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),u=e.dot(bi),h=t.dot(bi),f=n.dot(bi);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const Wf=new $n,zr=new P,Da=new P;class Dn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Da)),this.expandByPoint(zr.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new P,Na=new P,Ts=new P,ti=new P,Ua=new P,Es=new P,Fa=new P;class Nr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Na.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Na);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ts),c=ti.dot(this.direction),u=-ti.dot(Ts),h=ti.lengthSq(),f=Math.abs(1-o*o);let a,l,d,g;if(f>0)if(a=o*u-c,l=o*c-u,g=s*f,a>=0)if(l>=-g)if(l<=g){const _=1/f;a*=_,l*=_,d=a*(a+o*l+2*c)+l*(o*a+l+2*u)+h}else l=s,a=Math.max(0,-(o*l+c)),d=-a*a+l*(l+2*u)+h;else l=-s,a=Math.max(0,-(o*l+c)),d=-a*a+l*(l+2*u)+h;else l<=-g?(a=Math.max(0,-(-o*s+c)),l=a>0?-s:Math.min(Math.max(-s,-u),s),d=-a*a+l*(l+2*u)+h):l<=g?(a=0,l=Math.min(Math.max(-s,-u),s),d=l*(l+2*u)+h):(a=Math.max(0,-(o*s+c)),l=a>0?s:Math.min(Math.max(-s,-u),s),d=-a*a+l*(l+2*u)+h);else l=o>0?-s:s,a=Math.max(0,-(o*l+c)),d=-a*a+l*(l+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(Na).addScaledVector(Ts,l),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,c,u;const h=1/this.direction.x,f=1/this.direction.y,a=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,r=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,r=(e.min.x-l.x)*h),f>=0?(s=(e.min.y-l.y)*f,o=(e.max.y-l.y)*f):(s=(e.max.y-l.y)*f,o=(e.min.y-l.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),a>=0?(c=(e.min.z-l.z)*a,u=(e.max.z-l.z)*a):(c=(e.max.z-l.z)*a,u=(e.min.z-l.z)*a),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,r,s){Ua.subVectors(t,e),Es.subVectors(n,e),Fa.crossVectors(Ua,Es);let o=this.direction.dot(Fa),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;ti.subVectors(this.origin,e);const u=c*this.direction.dot(Es.crossVectors(ti,Es));if(u<0)return null;const h=c*this.direction.dot(Ua.cross(ti));if(h<0||u+h>o)return null;const f=-c*ti.dot(Fa);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,r,s,o,c,u,h,f,a,l,d,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,u,h,f,a,l,d,g,_,m)}set(e,t,n,r,s,o,c,u,h,f,a,l,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=c,p[13]=u,p[2]=h,p[6]=f,p[10]=a,p[14]=l,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r),f=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const l=o*f,d=o*a,g=c*f,_=c*a;t[0]=u*f,t[4]=-u*a,t[8]=h,t[1]=d+g*h,t[5]=l-_*h,t[9]=-c*u,t[2]=_-l*h,t[6]=g+d*h,t[10]=o*u}else if(e.order==="YXZ"){const l=u*f,d=u*a,g=h*f,_=h*a;t[0]=l+_*c,t[4]=g*c-d,t[8]=o*h,t[1]=o*a,t[5]=o*f,t[9]=-c,t[2]=d*c-g,t[6]=_+l*c,t[10]=o*u}else if(e.order==="ZXY"){const l=u*f,d=u*a,g=h*f,_=h*a;t[0]=l-_*c,t[4]=-o*a,t[8]=g+d*c,t[1]=d+g*c,t[5]=o*f,t[9]=_-l*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const l=o*f,d=o*a,g=c*f,_=c*a;t[0]=u*f,t[4]=g*h-d,t[8]=l*h+_,t[1]=u*a,t[5]=_*h+l,t[9]=d*h-g,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const l=o*u,d=o*h,g=c*u,_=c*h;t[0]=u*f,t[4]=_-l*a,t[8]=g*a+d,t[1]=a,t[5]=o*f,t[9]=-c*f,t[2]=-h*f,t[6]=d*a+g,t[10]=l-_*a}else if(e.order==="XZY"){const l=o*u,d=o*h,g=c*u,_=c*h;t[0]=u*f,t[4]=-a,t[8]=h*f,t[1]=l*a+_,t[5]=o*f,t[9]=d*a-g,t[2]=g*a-d,t[6]=c*f,t[10]=_*a+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,Yf)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ni.crossVectors(n,Yt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ni.crossVectors(n,Yt)),ni.normalize(),bs.crossVectors(Yt,ni),r[0]=ni.x,r[4]=bs.x,r[8]=Yt.x,r[1]=ni.y,r[5]=bs.y,r[9]=Yt.y,r[2]=ni.z,r[6]=bs.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],f=n[1],a=n[5],l=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],E=n[7],y=n[11],C=n[15],A=r[0],w=r[4],U=r[8],T=r[12],M=r[1],I=r[5],W=r[9],k=r[13],G=r[2],Z=r[6],V=r[10],Q=r[14],H=r[3],re=r[7],ue=r[11],xe=r[15];return s[0]=o*A+c*M+u*G+h*H,s[4]=o*w+c*I+u*Z+h*re,s[8]=o*U+c*W+u*V+h*ue,s[12]=o*T+c*k+u*Q+h*xe,s[1]=f*A+a*M+l*G+d*H,s[5]=f*w+a*I+l*Z+d*re,s[9]=f*U+a*W+l*V+d*ue,s[13]=f*T+a*k+l*Q+d*xe,s[2]=g*A+_*M+m*G+p*H,s[6]=g*w+_*I+m*Z+p*re,s[10]=g*U+_*W+m*V+p*ue,s[14]=g*T+_*k+m*Q+p*xe,s[3]=S*A+E*M+y*G+C*H,s[7]=S*w+E*I+y*Z+C*re,s[11]=S*U+E*W+y*V+C*ue,s[15]=S*T+E*k+y*Q+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],c=e[5],u=e[9],h=e[13],f=e[2],a=e[6],l=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*u*a-r*h*a-s*c*l+n*h*l+r*c*d-n*u*d)+_*(+t*u*d-t*h*l+s*o*l-r*o*d+r*h*f-s*u*f)+m*(+t*h*a-t*c*d-s*o*a+n*o*d+s*c*f-n*h*f)+p*(-r*c*f-t*u*a+t*c*l+r*o*a-n*o*l+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],a=e[9],l=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=a*m*h-_*l*h+_*u*d-c*m*d-a*u*p+c*l*p,E=g*l*h-f*m*h-g*u*d+o*m*d+f*u*p-o*l*p,y=f*_*h-g*a*h+g*c*d-o*_*d-f*c*p+o*a*p,C=g*a*u-f*_*u-g*c*l+o*_*l+f*c*m-o*a*m,A=t*S+n*E+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(_*l*s-a*m*s-_*r*d+n*m*d+a*r*p-n*l*p)*w,e[2]=(c*m*s-_*u*s+_*r*h-n*m*h-c*r*p+n*u*p)*w,e[3]=(a*u*s-c*l*s-a*r*h+n*l*h+c*r*d-n*u*d)*w,e[4]=E*w,e[5]=(f*m*s-g*l*s+g*r*d-t*m*d-f*r*p+t*l*p)*w,e[6]=(g*u*s-o*m*s-g*r*h+t*m*h+o*r*p-t*u*p)*w,e[7]=(o*l*s-f*u*s+f*r*h-t*l*h-o*r*d+t*u*d)*w,e[8]=y*w,e[9]=(g*a*s-f*_*s-g*n*d+t*_*d+f*n*p-t*a*p)*w,e[10]=(o*_*s-g*c*s+g*n*h-t*_*h-o*n*p+t*c*p)*w,e[11]=(f*c*s-o*a*s-f*n*h+t*a*h+o*n*d-t*c*d)*w,e[12]=C*w,e[13]=(f*_*r-g*a*r+g*n*l-t*_*l-f*n*m+t*a*m)*w,e[14]=(g*c*r-o*_*r-g*n*u+t*_*u+o*n*m-t*c*m)*w,e[15]=(o*a*r-f*c*r+f*n*u-t*a*u-o*n*l+t*c*l)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,h=s*o,f=s*c;return this.set(h*o+n,h*c-r*u,h*u+r*c,0,h*c+r*u,f*c+n,f*u-r*o,0,h*u-r*c,f*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,h=s+s,f=o+o,a=c+c,l=s*h,d=s*f,g=s*a,_=o*f,m=o*a,p=c*a,S=u*h,E=u*f,y=u*a,C=n.x,A=n.y,w=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+y)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(d-y)*A,r[5]=(1-(l+p))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+E)*w,r[9]=(m-S)*w,r[10]=(1-(l+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const o=er.set(r[4],r[5],r[6]).length(),c=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const h=1/s,f=1/o,a=1/c;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=f,pn.elements[5]*=f,pn.elements[6]*=f,pn.elements[8]*=a,pn.elements[9]*=a,pn.elements[10]*=a,t.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,o,c=Cn){const u=this.elements,h=2*s/(t-e),f=2*s/(n-r),a=(t+e)/(t-e),l=(n+r)/(n-r);let d,g;if(c===Cn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(c===fa)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=a,u[12]=0,u[1]=0,u[5]=f,u[9]=l,u[13]=0,u[2]=0,u[6]=0,u[10]=d,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,c=Cn){const u=this.elements,h=1/(t-e),f=1/(n-r),a=1/(o-s),l=(t+e)*h,d=(n+r)*f;let g,_;if(c===Cn)g=(o+s)*a,_=-2*a;else if(c===fa)g=s*a,_=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-l,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-d,u[2]=0,u[6]=0,u[10]=_,u[14]=-g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new P,pn=new Pe,Xf=new P(0,0,0),Yf=new P(1,1,1),ni=new P,bs=new P,Yt=new P,ml=new Pe,gl=new un;class Ln{constructor(e=0,t=0,n=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],u=r[1],h=r[5],f=r[9],a=r[2],l=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-a,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,d),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const _l=new P,tr=new un,kn=new Pe,As=new P,Hr=new P,jf=new P,Kf=new un,xl=new P(1,0,0),vl=new P(0,1,0),yl=new P(0,0,1),Ml={type:"added"},Zf={type:"removed"},nr={type:"childadded",child:null},Oa={type:"childremoved",child:null};class ct extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new P,t=new Ln,n=new un,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ne}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(yl,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Hr,As,this.up):kn.lookAt(As,Hr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(kn),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const a=u[h];s(e.shapes,a)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),a=o(e.shapes),l=o(e.skeletons),d=o(e.animations),g=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),a.length>0&&(n.shapes=a),l.length>0&&(n.skeletons=l),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ct.DEFAULT_UP=new P(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,zn=new P,Ba=new P,Hn=new P,ir=new P,rr=new P,Sl=new P,ka=new P,za=new P,Ha=new P,Ga=new Ke,Va=new Ke,Wa=new Ke;class xn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mn.subVectors(r,t),zn.subVectors(n,t),Ba.subVectors(e,t);const o=mn.dot(mn),c=mn.dot(zn),u=mn.dot(Ba),h=zn.dot(zn),f=zn.dot(Ba),a=o*h-c*c;if(a===0)return s.set(0,0,0),null;const l=1/a,d=(h*u-c*f)*l,g=(o*f-c*u)*l;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,s,o,c,u){return this.getBarycoord(e,t,n,r,Hn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Hn.x),u.addScaledVector(o,Hn.y),u.addScaledVector(c,Hn.z),u)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ga.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ga.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ga,s.x),o.addScaledVector(Va,s.y),o.addScaledVector(Wa,s.z),o}static isFrontFacing(e,t,n,r){return mn.subVectors(n,t),zn.subVectors(e,t),mn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),mn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,c;ir.subVectors(r,n),rr.subVectors(s,n),ka.subVectors(e,n);const u=ir.dot(ka),h=rr.dot(ka);if(u<=0&&h<=0)return t.copy(n);za.subVectors(e,r);const f=ir.dot(za),a=rr.dot(za);if(f>=0&&a<=f)return t.copy(r);const l=u*a-f*h;if(l<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(ir,o);Ha.subVectors(e,s);const d=ir.dot(Ha),g=rr.dot(Ha);if(g>=0&&d<=g)return t.copy(s);const _=d*h-u*g;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(n).addScaledVector(rr,c);const m=f*g-d*a;if(m<=0&&a-f>=0&&d-g>=0)return Sl.subVectors(s,r),c=(a-f)/(a-f+(d-g)),t.copy(r).addScaledVector(Sl,c);const p=1/(m+_+l);return o=_*p,c=l*p,t.copy(n).addScaledVector(ir,o).addScaledVector(rr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=wc(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xa(o,s,e+1/3),this.g=Xa(o,s,e),this.b=Xa(o,s,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return We.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Oe(Ct.r*255,0,255))*65536+Math.round(Oe(Ct.g*255,0,255))*256+Math.round(Oe(Ct.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(n,r,s),c=Math.min(n,r,s);let u,h;const f=(c+o)/2;if(c===o)u=0,h=0;else{const a=o-c;switch(h=f<=.5?a/(o+c):a/(2-o-c),o){case n:u=(r-s)/a+(r<s?6:0);break;case r:u=(s-n)/a+2;break;case s:u=(n-r)/a+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=yt){We.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ws);const n=ns(ii.h,ws.h,t),r=ns(ii.s,ws.s,t),s=ns(ii.l,ws.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new be;be.NAMES=Th;let $f=0;class Pn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=xr,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bi extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new P,Rs=new Ee;let Jf=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class Eh extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qf=0;const sn=new Pe,Ya=new ct,sr=new P,qt=new $n,Gr=new $n,Tt=new P;class Tn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?bh:Eh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Gr.setFromBufferAttribute(c),this.morphTargetsRelative?(Tt.addVectors(qt.min,Gr.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,Gr.max),qt.expandByPoint(Tt)):(qt.expandByPoint(Gr.min),qt.expandByPoint(Gr.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)Tt.fromBufferAttribute(c,h),u&&(sr.fromBufferAttribute(e,h),Tt.add(sr)),r=Math.max(r,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let U=0;U<n.count;U++)c[U]=new P,u[U]=new P;const h=new P,f=new P,a=new P,l=new Ee,d=new Ee,g=new Ee,_=new P,m=new P;function p(U,T,M){h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,T),a.fromBufferAttribute(n,M),l.fromBufferAttribute(s,U),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),f.sub(h),a.sub(h),d.sub(l),g.sub(l);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(a,-d.y).multiplyScalar(I),m.copy(a).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(I),c[U].add(_),c[T].add(_),c[M].add(_),u[U].add(m),u[T].add(m),u[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,T=S.length;U<T;++U){const M=S[U],I=M.start,W=M.count;for(let k=I,G=I+W;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new P,y=new P,C=new P,A=new P;function w(U){C.fromBufferAttribute(r,U),A.copy(C);const T=c[U];E.copy(T),E.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(A,T);const I=y.dot(u[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,I)}for(let U=0,T=S.length;U<T;++U){const M=S[U],I=M.start,W=M.count;for(let k=I,G=I+W;k<G;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,d=n.count;l<d;l++)n.setXYZ(l,0,0,0);const r=new P,s=new P,o=new P,c=new P,u=new P,h=new P,f=new P,a=new P;if(e)for(let l=0,d=e.count;l<d;l+=3){const g=e.getX(l+0),_=e.getX(l+1),m=e.getX(l+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),f.subVectors(o,s),a.subVectors(r,s),f.cross(a),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),c.add(f),u.add(f),h.add(f),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,d=t.count;l<d;l+=3)r.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),f.subVectors(o,s),a.subVectors(r,s),f.cross(a),n.setXYZ(l+0,f.x,f.y,f.z),n.setXYZ(l+1,f.x,f.y,f.z),n.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,a=c.normalized,l=new h.constructor(u.length*f);let d=0,g=0;for(let _=0,m=u.length;_<m;_++){c.isInterleavedBufferAttribute?d=u[_]*c.data.stride+c.offset:d=u[_]*f;for(let p=0;p<f;p++)l[g++]=h[d++]}return new Ft(l,f,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,a=h.length;f<a;f++){const l=h[f],d=e(l,n);u.push(d)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let a=0,l=h.length;a<l;a++){const d=h[a];f.push(d.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],a=s[h];for(let l=0,d=a.length;l<d;l++)f.push(a[l].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const a=o[h];this.addGroup(a.start,a.count,a.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new Pe,Ai=new Nr,Cs=new Dn,El=new P,Is=new P,Ps=new P,Ls=new P,qa=new P,Ds=new P,bl=new P,Ns=new P;class Zt extends ct{constructor(e=new Tn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Ds.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],a=s[u];f!==0&&(qa.fromBufferAttribute(a,e),o?Ds.addScaledVector(qa,f):Ds.addScaledVector(qa.sub(t),f))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Cs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Cs,El)===null||Ai.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(Tl.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,a=s.attributes.normal,l=s.groups,d=s.drawRange;if(c!==null)if(Array.isArray(o))for(let g=0,_=l.length;g<_;g++){const m=l[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=E;y<C;y+=3){const A=c.getX(y),w=c.getX(y+1),U=c.getX(y+2);r=Us(this,p,e,n,h,f,a,A,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=c.getX(m),E=c.getX(m+1),y=c.getX(m+2);r=Us(this,o,e,n,h,f,a,S,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let g=0,_=l.length;g<_;g++){const m=l[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(u.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=E;y<C;y+=3){const A=y,w=y+1,U=y+2;r=Us(this,p,e,n,h,f,a,A,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(u.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,E=m+1,y=m+2;r=Us(this,o,e,n,h,f,a,S,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ep(i,e,t,n,r,s,o,c){let u;if(e.side===Gt?u=n.intersectTriangle(o,s,r,!0,c):u=n.intersectTriangle(r,s,o,e.side===Kn,c),u===null)return null;Ns.copy(c),Ns.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Ns);return h<t.near||h>t.far?null:{distance:h,point:Ns.clone(),object:i}}function Us(i,e,t,n,r,s,o,c,u,h){i.getVertexPosition(c,Is),i.getVertexPosition(u,Ps),i.getVertexPosition(h,Ls);const f=ep(i,e,t,n,Is,Ps,Ls,bl);if(f){const a=new P;xn.getBarycoord(bl,Is,Ps,Ls,a),r&&(f.uv=xn.getInterpolatedAttribute(r,c,u,h,a,new Ee)),s&&(f.uv1=xn.getInterpolatedAttribute(s,c,u,h,a,new Ee)),o&&(f.normal=xn.getInterpolatedAttribute(o,c,u,h,a,new P),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const l={a:c,b:u,c:h,normal:new P,materialIndex:0};xn.getNormal(Is,Ps,Ls,l.normal),f.face=l,f.barycoord=a}return f}class fs extends Tn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],a=[];let l=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(f,3)),this.setAttribute("uv",new Sn(a,2));function g(_,m,p,S,E,y,C,A,w,U,T){const M=y/w,I=C/U,W=y/2,k=C/2,G=A/2,Z=w+1,V=U+1;let Q=0,H=0;const re=new P;for(let ue=0;ue<V;ue++){const xe=ue*I-k;for(let Be=0;Be<Z;Be++){const it=Be*M-W;re[_]=it*S,re[m]=xe*E,re[p]=G,h.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=A>0?1:-1,f.push(re.x,re.y,re.z),a.push(Be/w),a.push(1-ue/U),Q+=1}}for(let ue=0;ue<U;ue++)for(let xe=0;xe<w;xe++){const Be=l+xe+Z*ue,it=l+xe+Z*(ue+1),Y=l+(xe+1)+Z*(ue+1),ee=l+(xe+1)+Z*ue;u.push(Be,it,ee),u.push(it,Y,ee),H+=6}c.addGroup(d,H,T),d+=H,l+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const r in n)e[r]=n[r]}return e}function tp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const np={clone:Ir,merge:Lt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cc extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new P,Al=new Ee,wl=new Ee;class Dt extends Cc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Al,wl),t.subVectors(wl,Al)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/h,r*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,or=1;class sp extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dt(ar,or,e,t);r.layers=this.layers,this.add(r);const s=new Dt(ar,or,e,t);s.layers=this.layers,this.add(s);const o=new Dt(ar,or,e,t);o.layers=this.layers,this.add(o);const c=new Dt(ar,or,e,t);c.layers=this.layers,this.add(c);const u=new Dt(ar,or,e,t);u.layers=this.layers,this.add(u);const h=new Dt(ar,or,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,c,u]=t;for(const h of t)this.remove(h);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,h,f]=this.children,a=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(a,l,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ic extends Et{constructor(e,t,n,r,s,o,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,r,s,o,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ic(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fs(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:_i});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),c=t.minFilter;return t.minFilter===qn&&(t.minFilter=Kt),new sp(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ki extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=h.joints["index-finger-tip"],a=h.joints["thumb-tip"],l=f.position.distanceTo(a.position),d=.02,g=.005;h.inputState.pinching&&l>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(op)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cp extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new P;class Pc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rl=new P,Cl=new Ke,Il=new Ke,up=new P,Pl=new Pe,Fs=new P,Ka=new Dn,Ll=new Pe,Za=new Nr;class hp extends Zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rl,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fs),this.boundingBox.expandByPoint(Fs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fs),this.boundingSphere.expandByPoint(Fs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(r),e.ray.intersectsSphere(Ka)!==!1&&(Ll.copy(r).invert(),Za.copy(e.ray).applyMatrix4(Ll),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Cl.fromBufferAttribute(r.attributes.skinIndex,e),Il.fromBufferAttribute(r.attributes.skinWeight,e),Rl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Il.getComponent(s);if(o!==0){const c=Cl.getComponent(s);Pl.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(up.copy(Rl).applyMatrix4(Pl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wh extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rh extends Et{constructor(e=null,t=1,n=1,r,s,o,c,u,h=Ut,f=Ut,a,l){super(null,o,c,u,h,f,r,s,a,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=new Pe,dp=new Pe;class Lc{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:dp;Dl.multiplyMatrices(c,t[s]),Dl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rh(t,e,e,ln,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wh),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const c=n[r];e.boneInverses.push(c.toArray())}return e}}class sc extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cr=new Pe,Nl=new Pe,Os=[],Ul=new $n,fp=new Pe,Vr=new Zt,Wr=new Dn;class pp extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,fp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Ul.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Wr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=r[o+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cr),Nl.multiplyMatrices(n,cr),Vr.matrixWorld=Nl,Vr.raycast(e,Os);for(let o=0,c=Os.length;o<c;o++){const u=Os[o];u.instanceId=s,u.object=this,t.push(u)}Os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rh(new Float32Array(r*this.count),r,this.count,Tc,vn));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=r*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const $a=new P,mp=new P,gp=new Ne;class ui{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$a.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($a),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gp.getNormalMatrix(e),r=this.coplanarPoint($a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Dn,Bs=new P;class Dc{constructor(e=new ui,t=new ui,n=new ui,r=new ui,s=new ui,o=new ui){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],u=r[3],h=r[4],f=r[5],a=r[6],l=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],E=r[14],y=r[15];if(n[0].setComponents(u-s,l-h,m-d,y-p).normalize(),n[1].setComponents(u+s,l+h,m+d,y+p).normalize(),n[2].setComponents(u+o,l+f,m+g,y+S).normalize(),n[3].setComponents(u-o,l-f,m-g,y-S).normalize(),n[4].setComponents(u-c,l-a,m-_,y-E).normalize(),t===Cn)n[5].setComponents(u+c,l+a,m+_,y+E).normalize();else if(t===fa)n[5].setComponents(c,a,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nc extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pa=new P,ma=new P,Fl=new Pe,Xr=new Nr,ks=new Dn,Ja=new P,Ol=new P;class Uc extends ct{constructor(e=new Tn,t=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)pa.fromBufferAttribute(t,r-1),ma.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;Fl.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Fl);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,l=n.attributes.position;if(f!==null){const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=h){const p=f.getX(_),S=f.getX(_+1),E=zs(this,e,Xr,u,p,S,_);E&&t.push(E)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(d),p=zs(this,e,Xr,u,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=h){const p=zs(this,e,Xr,u,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=zs(this,e,Xr,u,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function zs(i,e,t,n,r,s,o){const c=i.geometry.attributes.position;if(pa.fromBufferAttribute(c,r),ma.fromBufferAttribute(c,s),t.distanceSqToSegment(pa,ma,Ja,Ol)>n)return;Ja.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ja);if(!(h<e.near||h>e.far))return{distance:h,point:Ol.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Bl=new P,kl=new P;class Ch extends Uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Bl.fromBufferAttribute(t,r),kl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bl.distanceTo(kl);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _p extends Uc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ih extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new Pe,ac=new Nr,Hs=new Dn,Gs=new P;class xp extends ct{constructor(e=new Tn,t=new Ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;zl.copy(r).invert(),ac.copy(e.ray).applyMatrix4(zl);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,a=n.attributes.position;if(h!==null){const l=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=l,_=d;g<_;g++){const m=h.getX(g);Gs.fromBufferAttribute(a,m),Hl(Gs,m,u,r,e,t,this)}}else{const l=Math.max(0,o.start),d=Math.min(a.count,o.start+o.count);for(let g=l,_=d;g<_;g++)Gs.fromBufferAttribute(a,g),Hl(Gs,g,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Hl(i,e,t,n,r,s,o){const c=ac.distanceSqToPoint(i);if(c<t){const u=new P;ac.closestPointToPoint(i,u),u.applyMatrix4(n);const h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ph extends Et{constructor(e,t,n,r,s,o,c,u,h,f=vr){if(f!==vr&&f!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===vr&&(n=Wi),n===void 0&&f===Rr&&(n=wr),super(null,r,s,o,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ut,this.minFilter=u!==void 0?u:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ma extends Tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(r),h=c+1,f=u+1,a=e/c,l=t/u,d=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const S=p*l-o;for(let E=0;E<h;E++){const y=E*a-s;g.push(y,-S,0),_.push(0,0,1),m.push(E/c),m.push(1-p/u)}}for(let p=0;p<u;p++)for(let S=0;S<c;S++){const E=S+h*p,y=S+h*(p+1),C=S+1+h*(p+1),A=S+1+h*p;d.push(E,y,A),d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class hs extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vp extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yp extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sp(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Gl(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)r[o++]=i[c+u]}return r}function Lh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class ps{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tp extends ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,c=r[s],u=r[o];if(c===void 0)switch(this.getSettings_().endingStart){case al:s=e,c=2*t-n;break;case ol:s=r.length-2,c=t+r[s]-r[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case al:o=e,u=2*n-t;break;case ol:o=1,u=n+r[1]-r[0];break;default:o=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,a=this._offsetNext,l=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-l*m+2*l*_-l*g,S=(1+l)*m+(-1.5-2*l)*_+(-.5+l)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let C=0;C!==c;++C)s[C]=p*o[f+C]+S*o[h+C]+E*o[u+C]+y*o[a+C];return s}}class Ep extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(r-t),a=1-f;for(let l=0;l!==c;++l)s[l]=o[h+l]*a+o[u+l]*f;return s}}class bp extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(r!==void 0&&Mp(r))for(let c=0,u=r.length;c!==u;++c){const h=r[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ra,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(r)u=!0;else{const a=c*n,l=a-n,d=a+n;for(let g=0;g!==n;++g){const _=t[a+g];if(_!==t[l+g]||_!==t[d+g]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const a=c*n,l=o*n;for(let d=0;d!==n;++d)t[l+d]=t[a+d]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ls;class Ur extends Un{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=cs;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends Un{}Dh.prototype.ValueTypeName="color";class Pr extends Un{}Pr.prototype.ValueTypeName="number";class Ap extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(r-t);let h=e*c;for(let f=h+c;h!==f;h+=4)un.slerpFlat(s,0,o,h-c,o,h,u);return s}}class Lr extends Un{InterpolantFactoryMethodLinear(e){return new Ap(this.times,this.values,this.getValueSize(),e)}}Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends Un{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=cs;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Un{}Dr.prototype.ValueTypeName="vector";class wp{constructor(e="",t=-1,n=[],r=af){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(Cp(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Un.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Sp(u);u=Gl(u,1,f),h=Gl(h,1,f),!r&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new Pr(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const a=f[1];let l=r[a];l||(r[a]=l=[]),l.push(h)}}const o=[];for(const c in r)o.push(this.CreateFromMorphTargetSequence(c,r[c],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(a,l,d,g,_){if(d.length!==0){const m=[],p=[];Lh(d,m,p,g),m.length!==0&&_.push(new a(l,m,p))}},r=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let a=0;a<h.length;a++){const l=h[a].keys;if(!(!l||l.length===0))if(l[0].morphTargets){const d={};let g;for(g=0;g<l.length;g++)if(l[g].morphTargets)for(let _=0;_<l[g].morphTargets.length;_++)d[l[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==l[g].morphTargets.length;++S){const E=l[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}r.push(new Pr(".morphTargetInfluence["+_+"]",m,p))}u=d.length*o}else{const d=".bones["+t[a].name+"]";n(Dr,d+".position",l,"pos",r),n(Lr,d+".quaternion",l,"rot",r),n(Dr,d+".scale",l,"scl",r)}}return r.length===0?null:new this(s,u,r,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return Dh;case"quaternion":return Lr;case"bool":case"boolean":return Ur;case"string":return Fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rp(i.type);if(i.times===void 0){const t=[],n=[];Lh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ip{constructor(e,t,n){const r=this;let s=!1,o=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,c),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,c),o===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,a){return h.push(f,a),this},this.removeHandler=function(f){const a=h.indexOf(f);return a!==-1&&h.splice(a,2),this},this.getHandler=function(f){for(let a=0,l=h.length;a<l;a+=2){const d=h[a],g=h[a+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null}}}const Pp=new Ip;class qi{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Lp extends Error{constructor(e,t){super(e),this.response=t}}class Nh extends qi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=Gn[e],a=h.body.getReader(),l=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),d=l?parseInt(l):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){a.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,w=f.length;A<w;A++){const U=f[A];U.onProgress&&U.onProgress(C)}p.enqueue(y),S()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Lp(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const a=/charset="?([^;"\s]*)"?/i.exec(c),l=a&&a[1]?a[1].toLowerCase():void 0,d=new TextDecoder(l);return h.arrayBuffer().then(g=>d.decode(g))}}}).then(h=>{pi.add(e,h);const f=Gn[e];delete Gn[e];for(let a=0,l=f.length;a<l;a++){const d=f[a];d.onLoad&&d.onLoad(h)}}).catch(h=>{const f=Gn[e];if(f===void 0)throw this.manager.itemError(e),h;delete Gn[e];for(let a=0,l=f.length;a<l;a++){const d=f[a];d.onError&&d.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uh extends qi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const c=us("img");function u(){f(),pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(a){f(),r&&r(a),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Dp extends qi{constructor(e){super(e)}load(e,t,n,r){const s=new Ic;s.colorSpace=yt;const o=new Uh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function u(h){o.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let h=0;h<e.length;++h)u(h);return s}}class Fh extends qi{constructor(e){super(e)}load(e,t,n,r){const s=new Et,o=new Uh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Fc extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qa=new Pe,Vl=new P,Wl=new P;class Oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wl),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Np extends Oc{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Up extends Fc{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xl=new Pe,Yr=new P,eo=new P;class Fp extends Oc{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yr),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),r.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl)}}class Op extends Fc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Fp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bc extends Cc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bp extends Oc{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sa extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class is{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kp extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return pi.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){r&&r(h),pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});pi.add(e,u),s.manager.itemStart(e)}}class zp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yl(){return performance.now()}const kc="\\[\\]\\.:\\/",Gp=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",Vp="[^"+kc.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",zc),Xp=/(WCOD+)?/.source.replace("WCOD",Vp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),jp=new RegExp("^"+Wp+Xp+Yp+qp+"$"),Kp=["material","materials","bones","map"];class Zp{constructor(e,t,n){const r=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(e){const t=jp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Kp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[r];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Zp;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ql=new Pe;class $p{constructor(e,t,n=0,r=1/0){this.ray=new Nr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(e,t=!0,n=[]){return oc(e,this,n,t),n.sort(jl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)oc(e[r],this,n,t);return n.sort(jl),n}}function jl(i,e){return i.distance-e.distance}function oc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,c=s.length;o<c;o++)oc(s[o],e,t,!0)}}class Kl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ws=new P,ht=new Cc;class Jp extends Ch{constructor(e){const t=new Tn,n=new Nc({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(g,_){u(g),u(_)}function u(g){r.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(r.length/3-1)}t.setAttribute("position",new Sn(r,3)),t.setAttribute("color",new Sn(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new be(16755200),f=new be(16711680),a=new be(43775),l=new be(16777215),d=new be(3355443);this.setColors(h,f,a,l,d)}setColors(e,t,n,r,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,r.r,r.g,r.b),c.setXYZ(39,r.r,r.g,r.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;ht.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const s=this.camera.coordinateSystem===Cn?-1:0;ft("c",t,e,ht,0,0,s),ft("t",t,e,ht,0,0,1),ft("n1",t,e,ht,-1,-1,s),ft("n2",t,e,ht,n,-1,s),ft("n3",t,e,ht,-1,r,s),ft("n4",t,e,ht,n,r,s),ft("f1",t,e,ht,-1,-1,1),ft("f2",t,e,ht,n,-1,1),ft("f3",t,e,ht,-1,r,1),ft("f4",t,e,ht,n,r,1),ft("u1",t,e,ht,n*.7,r*1.1,s),ft("u2",t,e,ht,-1*.7,r*1.1,s),ft("u3",t,e,ht,0,r*2,s),ft("cf1",t,e,ht,-1,0,1),ft("cf2",t,e,ht,n,0,1),ft("cf3",t,e,ht,0,-1,1),ft("cf4",t,e,ht,0,r,1),ft("cn1",t,e,ht,-1,0,s),ft("cn2",t,e,ht,n,0,s),ft("cn3",t,e,ht,0,-1,s),ft("cn4",t,e,ht,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ft(i,e,t,n,r,s,o){Ws.set(r,s,o).unproject(n);const c=e[i];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],Ws.x,Ws.y,Ws.z)}}class Qp extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Zl(i,e,t,n){const r=em(n);switch(t){case hh:return i*e;case fh:return i*e;case ph:return i*e*2;case Tc:return i*e/r.components*r.byteLength;case Ec:return i*e/r.components*r.byteLength;case mh:return i*e*2/r.components*r.byteLength;case bc:return i*e*2/r.components*r.byteLength;case dh:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case Ac:return i*e*4/r.components*r.byteLength;case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:case No:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Do:return Math.max(i,8)*Math.max(e,8)/2;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oa:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gh:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(i){switch(i){case Zn:case ch:return{byteLength:1,components:1};case os:case lh:case ds:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case Wi:case yc:case vn:return{byteLength:4,components:1};case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function tm(i){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,a=h.byteLength,l=i.createBuffer();i.bindBuffer(u,l),i.bufferData(u,h,f),c.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:l,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:a}}function n(c,u,h){const f=u.array,a=u.updateRanges;if(i.bindBuffer(h,c),a.length===0)i.bufferSubData(h,0,f);else{a.sort((d,g)=>d.start-g.start);let l=0;for(let d=1;d<a.length;d++){const g=a[l],_=a[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++l,a[l]=_)}a.length=l+1;for(let d=0,g=a.length;d<g;d++){const _=a[d];i.bufferSubData(h,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(i.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:r,remove:s,update:o}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:rm,alphamap_pars_fragment:sm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:cm,aomap_pars_fragment:lm,batching_pars_vertex:um,batching_vertex:hm,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:Tm,color_vertex:Em,common:bm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:wm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:jm,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:Ym,lights_pars_begin:qm,lights_toon_fragment:Km,lights_toon_pars_fragment:Zm,lights_phong_fragment:$m,lights_phong_pars_fragment:Jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:og,map_fragment:cg,map_pars_fragment:lg,map_particle_fragment:ug,map_particle_pars_fragment:hg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:_g,morphtarget_vertex:xg,normal_fragment_begin:vg,normal_fragment_maps:yg,normal_pars_fragment:Mg,normal_pars_vertex:Sg,normal_vertex:Tg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Ig,premultiplied_alpha_fragment:Pg,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Bg,shadowmap_vertex:kg,shadowmask_pars_fragment:zg,skinbase_vertex:Hg,skinning_pars_vertex:Gg,skinning_vertex:Vg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:Yg,tonemapping_fragment:qg,tonemapping_pars_fragment:jg,transmission_fragment:Kg,transmission_pars_fragment:Zg,uv_pars_fragment:$g,uv_pars_vertex:Jg,uv_vertex:Qg,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:r_,cube_vert:s_,cube_frag:a_,depth_vert:o_,depth_frag:c_,distanceRGBA_vert:l_,distanceRGBA_frag:u_,equirect_vert:h_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:__,meshlambert_frag:x_,meshmatcap_vert:v_,meshmatcap_frag:y_,meshnormal_vert:M_,meshnormal_frag:S_,meshphong_vert:T_,meshphong_frag:E_,meshphysical_vert:b_,meshphysical_frag:A_,meshtoon_vert:w_,meshtoon_frag:R_,points_vert:C_,points_frag:I_,shadow_vert:P_,shadow_frag:L_,sprite_vert:D_,sprite_frag:N_},te={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},An={basic:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Lt([te.points,te.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Lt([te.common,te.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Lt([te.sprite,te.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Lt([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Lt([te.lights,te.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};An.physical={uniforms:Lt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Xs={r:0,b:0,g:0},Ri=new Ln,U_=new Pe;function F_(i,e,t,n,r,s,o){const c=new be(0);let u=s===!0?0:1,h,f,a=null,l=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const C=g(E);C===null?p(c,u):C&&C.isColor&&(p(C,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===ya)?(f===void 0&&(f=new Zt(new fs(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ir(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ri.copy(y.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Ri)),f.material.toneMapped=We.getTransfer(C.colorSpace)!==tt,(a!==C||l!==C.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,a=C,l=C.version,d=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Zt(new Ma(2,2),new yi({name:"BackgroundMaterial",uniforms:Ir(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=We.getTransfer(C.colorSpace)!==tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(a!==C||l!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,a=C,l=C.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,y){E.getRGB(Xs,Ah(i)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,y,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,y=1){c.set(E),u=y,p(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,p(c,u)},render:_,addToRenderList:m,dispose:S}}function O_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null);let s=r,o=!1;function c(M,I,W,k,G){let Z=!1;const V=a(k,W,I);s!==V&&(s=V,h(s.object)),Z=d(M,k,W,G),Z&&g(M,k,W,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(M,I,W,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function u(){return i.createVertexArray()}function h(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function a(M,I,W){const k=W.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let Z=G[I.id];Z===void 0&&(Z={},G[I.id]=Z);let V=Z[k];return V===void 0&&(V=l(u()),Z[k]=V),V}function l(M){const I=[],W=[],k=[];for(let G=0;G<t;G++)I[G]=0,W[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,I,W,k){const G=s.attributes,Z=I.attributes;let V=0;const Q=W.getAttributes();for(const H in Q)if(Q[H].location>=0){const ue=G[H];let xe=Z[H];if(xe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function g(M,I,W,k){const G={},Z=I.attributes;let V=0;const Q=W.getAttributes();for(const H in Q)if(Q[H].location>=0){let ue=Z[H];ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),G[H]=xe,V++}s.attributes=G,s.attributesNum=V,s.index=k}function _(){const M=s.newAttributes;for(let I=0,W=M.length;I<W;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const W=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;W[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),G[M]!==I&&(i.vertexAttribDivisor(M,I),G[M]=I)}function S(){const M=s.newAttributes,I=s.enabledAttributes;for(let W=0,k=I.length;W<k;W++)I[W]!==M[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function E(M,I,W,k,G,Z,V){V===!0?i.vertexAttribIPointer(M,I,W,G,Z):i.vertexAttribPointer(M,I,W,k,G,Z)}function y(M,I,W,k){_();const G=k.attributes,Z=W.getAttributes(),V=I.defaultAttributeValues;for(const Q in Z){const H=Z[Q];if(H.location>=0){let re=G[Q];if(re===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const ue=re.normalized,xe=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const it=Be.buffer,Y=Be.type,ee=Be.bytesPerElement,me=Y===i.INT||Y===i.UNSIGNED_INT||re.gpuType===yc;if(re.isInterleavedBufferAttribute){const se=re.data,Te=se.stride,je=re.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)p(H.location+Ae,se.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Ae=0;Ae<H.locationSize;Ae++)E(H.location+Ae,xe/H.locationSize,Y,ue,Te*ee,(je+xe/H.locationSize*Ae)*ee,me)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,re.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);i.bindBuffer(i.ARRAY_BUFFER,it);for(let se=0;se<H.locationSize;se++)E(H.location+se,xe/H.locationSize,Y,ue,xe*ee,xe/H.locationSize*se*ee,me)}}else if(V!==void 0){const ue=V[Q];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(H.location,ue);break;case 3:i.vertexAttrib3fv(H.location,ue);break;case 4:i.vertexAttrib4fv(H.location,ue);break;default:i.vertexAttrib1fv(H.location,ue)}}}}S()}function C(){U();for(const M in n){const I=n[M];for(const W in I){const k=I[W];for(const G in k)f(k[G].object),delete k[G];delete I[W]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const W in I){const k=I[W];for(const G in k)f(k[G].object),delete k[G];delete I[W]}delete n[M.id]}function w(M){for(const I in n){const W=n[I];if(W[M.id]===void 0)continue;const k=W[M.id];for(const G in k)f(k[G].object),delete k[G];delete W[M.id]}}function U(){T(),o=!0,s!==r&&(s=r,h(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:U,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function B_(i,e,t){let n;function r(h){n=h}function s(h,f){i.drawArrays(n,h,f),t.update(f,n,1)}function o(h,f,a){a!==0&&(i.drawArraysInstanced(n,h,f,a),t.update(f,n,a))}function c(h,f,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,a);let d=0;for(let g=0;g<a;g++)d+=f[g];t.update(d,n,1)}function u(h,f,a,l){if(a===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)o(h[g],f[g],l[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,f,0,l,0,a);let g=0;for(let _=0;_<a;_++)g+=f[_]*l[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function k_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(w){const U=w===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vn&&!U)}function u(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const a=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:a,reverseDepthBuffer:l,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function z_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ui,c=new Ne,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(a,l){const d=a.length!==0||l||n!==0||r;return r=l,n=a.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,l){t=f(a,l,0)},this.setState=function(a,l,d){const g=a.clippingPlanes,_=a.clipIntersection,m=a.clipShadows,p=i.get(a);if(!r||g===null||g.length===0||s&&!m)s?f(null):h();else{const S=s?0:n,E=S*4;let y=p.clippingState||null;u.value=y,y=f(g,l,E,d);for(let C=0;C!==E;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(a,l,d,g){const _=a!==null?a.length:0;let m=null;if(_!==0){if(m=u.value,g!==!0||m===null){const p=d+_*4,S=l.matrixWorldInverse;c.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==_;++E,y+=4)o.copy(a[E]).applyMatrix4(S,c),o.normal.toArray(m,y),m[y+3]=o.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function H_(i){let e=new WeakMap;function t(o,c){return c===Co?o.mapping=Er:c===Io&&(o.mapping=br),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===Co||c===Io)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new ap(u.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const pr=4,$l=[.125,.215,.35,.446,.526,.582],Oi=20,to=new Bc,Jl=new be;let no=null,io=0,ro=0,so=!1;const Ni=(1+Math.sqrt(5))/2,lr=1/Ni,Ql=[new P(-Ni,lr,0),new P(Ni,lr,0),new P(-lr,0,Ni),new P(lr,0,Ni),new P(0,Ni,-lr),new P(0,Ni,lr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,ro),this._renderer.xr.enabled=so,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:ds,format:ln,colorSpace:Ot,depthBuffer:!1},r=tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(s)),this._blurMaterial=V_(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,r){const c=new Dt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,a=f.autoClear,l=f.toneMapping;f.getClearColor(Jl),f.toneMapping=xi,f.autoClear=!1;const d=new Bi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Zt(new fs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Jl),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(c.up.set(0,u[p],0),c.lookAt(h[p],0,0)):S===1?(c.up.set(0,0,u[p]),c.lookAt(0,h[p],0)):(c.up.set(0,u[p],0),c.lookAt(0,0,h[p]));const E=this._cubeSize;Ys(r,S*E,p>2?E:0,E,E),f.setRenderTarget(r),_&&f.render(g,c),f.render(e,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=l,f.autoClear=a,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Ys(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Ql[(r-s-1)%Ql.length];this._blur(e,s-1,s,o,c)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,c){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,a=new Zt(this._lodPlanes[r],h),l=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let S=0;for(let w=0;w<Oi;++w){const U=w/_,T=Math.exp(-U*U/2);p.push(T),w===0?S+=T:w<m&&(S+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;l.envMap.value=e.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=o==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:E}=this;l.dTheta.value=g,l.mipInt.value=E-n;const y=this._sizeLods[r],C=3*y*(r>E-pr?r-E+pr:0),A=4*(this._cubeSize-y);Ys(t,C,A,3*y,2*y),u.setRenderTarget(t),u.render(a,to)}}function G_(i){const e=[],t=[],n=[];let r=i;const s=i-pr+1+$l.length;for(let o=0;o<s;o++){const c=Math.pow(2,r);t.push(c);let u=1/c;o>i-pr?u=$l[o-i+pr-1]:o===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,a=1+h,l=[f,f,a,f,a,a,f,f,a,a,f,a],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),E=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,U=A>2?0:-1,T=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];S.set(T,_*g*A),E.set(l,m*g*A);const M=[A,A,A,A,A,A];y.set(M,p*g*A)}const C=new Tn;C.setAttribute("position",new Ft(S,_)),C.setAttribute("uv",new Ft(E,m)),C.setAttribute("faceIndex",new Ft(y,p)),e.push(C),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tu(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function V_(i,e,t){const n=new Float32Array(Oi),r=new P(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function nu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function iu(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W_(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Co||u===Io,f=u===Er||u===br;if(h||f){let a=e.get(c);const l=a!==void 0?a.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==l)return t===null&&(t=new eu(i)),a=h?t.fromEquirectangular(c,a):t.fromCubemap(c,a),a.texture.pmremVersion=c.pmremVersion,e.set(c,a),a.texture;if(a!==void 0)return a.texture;{const d=c.image;return h&&d&&d.height>0||f&&d&&r(d)?(t===null&&(t=new eu(i)),a=h?t.fromEquirectangular(c):t.fromCubemap(c),a.texture.pmremVersion=c.pmremVersion,e.set(c,a),c.addEventListener("dispose",s),a.texture):null}}}return c}function r(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function X_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Y_(i,e,t,n){const r={},s=new WeakMap;function o(a){const l=a.target;l.index!==null&&e.remove(l.index);for(const g in l.attributes)e.remove(l.attributes[g]);l.removeEventListener("dispose",o),delete r[l.id];const d=s.get(l);d&&(e.remove(d),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function c(a,l){return r[l.id]===!0||(l.addEventListener("dispose",o),r[l.id]=!0,t.memory.geometries++),l}function u(a){const l=a.attributes;for(const d in l)e.update(l[d],i.ARRAY_BUFFER)}function h(a){const l=[],d=a.index,g=a.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let E=0,y=S.length;E<y;E+=3){const C=S[E+0],A=S[E+1],w=S[E+2];l.push(C,A,A,w,w,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){const C=E+0,A=E+1,w=E+2;l.push(C,A,A,w,w,C)}}else return;const m=new(yh(l)?bh:Eh)(l,1);m.version=_;const p=s.get(a);p&&e.remove(p),s.set(a,m)}function f(a){const l=s.get(a);if(l){const d=a.index;d!==null&&l.version<d.version&&h(a)}else h(a);return s.get(a)}return{get:c,update:u,getWireframeAttribute:f}}function q_(i,e,t){let n;function r(l){n=l}let s,o;function c(l){s=l.type,o=l.bytesPerElement}function u(l,d){i.drawElements(n,d,s,l*o),t.update(d,n,1)}function h(l,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,l*o,g),t.update(d,n,g))}function f(l,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,l,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function a(l,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<l.length;p++)h(l[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,l,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=a}function j_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function K_(i,e,t){const n=new WeakMap,r=new Ke;function s(o,c,u){const h=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,a=f!==void 0?f.length:0;let l=n.get(c);if(l===void 0||l.count!==a){let T=function(){w.dispose(),n.delete(c),c.removeEventListener("dispose",T)};l!==void 0&&l.texture.dispose();const d=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=c.attributes.position.count*E,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*C*4*a),w=new Sh(A,y,C,a);w.type=vn,w.needsUpdate=!0;const U=E*4;for(let M=0;M<a;M++){const I=m[M],W=p[M],k=S[M],G=y*C*4*M;for(let Z=0;Z<I.count;Z++){const V=Z*U;d===!0&&(r.fromBufferAttribute(I,Z),A[G+V+0]=r.x,A[G+V+1]=r.y,A[G+V+2]=r.z,A[G+V+3]=0),g===!0&&(r.fromBufferAttribute(W,Z),A[G+V+4]=r.x,A[G+V+5]=r.y,A[G+V+6]=r.z,A[G+V+7]=0),_===!0&&(r.fromBufferAttribute(k,Z),A[G+V+8]=r.x,A[G+V+9]=r.y,A[G+V+10]=r.z,A[G+V+11]=k.itemSize===4?r.w:1)}}l={count:a,texture:w,size:new Ee(y,C)},n.set(c,l),c.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];const g=c.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:s}}function Z_(i,e,t,n){let r=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,a=e.get(u,f);if(r.get(a)!==h&&(e.update(a),r.set(a,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const l=u.skeleton;r.get(l)!==h&&(l.update(),r.set(l,h))}return a}function o(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const Bh=new Et,ru=new Ph(1,1),kh=new Sh,zh=new Vf,Hh=new Ic,su=[],au=[],ou=new Float32Array(16),cu=new Float32Array(9),lu=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=su[r];if(s===void 0&&(s=new Float32Array(r),su[r]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(s,c)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ta(i,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function t0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),St(t,n)}}function n0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),St(t,n)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),St(t,n)}}function r0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function c0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function d0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=vh,s=ru):s=Bh,t.setTexture2D(e||s,r)}function f0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zh,r)}function p0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hh,r)}function m0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kh,r)}function g0(i){switch(i){case 5126:return $_;case 35664:return J_;case 35665:return Q_;case 35666:return e0;case 35674:return t0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return r0;case 35667:case 35671:return s0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return c0;case 36294:return l0;case 36295:return u0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function _0(i,e){i.uniform1fv(this.addr,e)}function x0(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function v0(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function y0(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function M0(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S0(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function E0(i,e){i.uniform1iv(this.addr,e)}function b0(i,e){i.uniform2iv(this.addr,e)}function A0(i,e){i.uniform3iv(this.addr,e)}function w0(i,e){i.uniform4iv(this.addr,e)}function R0(i,e){i.uniform1uiv(this.addr,e)}function C0(i,e){i.uniform2uiv(this.addr,e)}function I0(i,e){i.uniform3uiv(this.addr,e)}function P0(i,e){i.uniform4uiv(this.addr,e)}function L0(i,e,t){const n=this.cache,r=e.length,s=Ta(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bh,s[o])}function D0(i,e,t){const n=this.cache,r=e.length,s=Ta(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function N0(i,e,t){const n=this.cache,r=e.length,s=Ta(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function U0(i,e,t){const n=this.cache,r=e.length,s=Ta(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,s[o])}function F0(i){switch(i){case 5126:return _0;case 35664:return x0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return T0;case 5124:case 35670:return E0;case 35667:case 35671:return b0;case 35668:case 35672:return A0;case 35669:case 35673:return w0;case 5125:return R0;case 36294:return C0;case 36295:return I0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return U0}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g0(t.type)}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F0(t.type)}}class k0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function uu(i,e){i.seq.push(e),i.map[e.id]=e}function z0(i,e,t){const n=i.name,r=n.length;for(ao.lastIndex=0;;){const s=ao.exec(n),o=ao.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===r){uu(t,h===void 0?new O0(c,i,e):new B0(c,i,e));break}else{let a=t.map[c];a===void 0&&(a=new k0(c),uu(t,a)),t=a}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);z0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const H0=37297;let G0=0;function V0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const du=new Ne;function W0(i){We._getMatrix(du,We.workingColorSpace,i);const e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+V0(i.getShaderSource(e),o)}else return r}function X0(i,e){const t=W0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Y0(i,e){let t;switch(e){case Jd:t="Linear";break;case Qd:t="Reinhard";break;case ef:t="Cineon";break;case sh:t="ACESFilmic";break;case nf:t="AgX";break;case rf:t="Neutral";break;case tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new P;function q0(){We.getLuminanceCoefficients(qs);const i=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function K0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Jr(i){return i!==""}function pu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace($0,Q0)}const J0=new Map;function Q0(i,e){let t=Fe[e];if(t===void 0){const n=J0.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(ex,tx)}function tx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _u(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function ix(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case br:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function sx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rh:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case $d:e="ENVMAP_BLENDING_ADD";break}return e}function ax(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ox(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=nx(t),h=ix(t),f=rx(t),a=sx(t),l=ax(t),d=j0(t),g=K0(s),_=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+a:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==xi?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,X0("linearToOutputTexel",t.outputColorSpace),q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=cc(o),o=pu(o,t),o=mu(o,t),c=cc(c),c=pu(c,t),c=mu(c,t),o=gu(o),c=gu(c),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+o,y=S+p+c,C=hu(r,r.VERTEX_SHADER,E),A=hu(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(A).trim();let Z=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,A);else{const Q=fu(r,C,"vertex"),H=fu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+Q+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||G==="")&&(V=!1);V&&(I.diagnostics={runnable:Z,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(C),r.deleteShader(A),U=new ca(r,_),T=Z0(r,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,H0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let cx=0;class lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ux(e),t.set(e,n)),n}}class ux{constructor(e){this.id=cx++,this.code=e,this.usedTimes=0}}function hx(i,e,t,n,r,s,o){const c=new Rc,u=new lx,h=new Set,f=[],a=r.logarithmicDepthBuffer,l=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,M,I,W,k){const G=W.fog,Z=k.geometry,V=T.isMeshStandardMaterial?W.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),H=Q&&Q.mapping===ya?Q.image.height:null,re=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Be=0;Z.morphAttributes.position!==void 0&&(Be=1),Z.morphAttributes.normal!==void 0&&(Be=2),Z.morphAttributes.color!==void 0&&(Be=3);let it,Y,ee,me;if(re){const Je=An[re];it=Je.vertexShader,Y=Je.fragmentShader}else it=T.vertexShader,Y=T.fragmentShader,u.update(T),ee=u.getVertexShaderID(T),me=u.getFragmentShaderID(T);const se=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),je=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,dt=!!T.map,ot=!!T.matcap,ze=!!Q,R=!!T.aoMap,tn=!!T.lightMap,He=!!T.bumpMap,Ge=!!T.normalMap,ve=!!T.displacementMap,st=!!T.emissiveMap,_e=!!T.metalnessMap,b=!!T.roughnessMap,x=T.anisotropy>0,F=T.clearcoat>0,q=T.dispersion>0,K=T.iridescence>0,X=T.sheen>0,ge=T.transmission>0,ae=x&&!!T.anisotropyMap,he=F&&!!T.clearcoatMap,Xe=F&&!!T.clearcoatNormalMap,J=F&&!!T.clearcoatRoughnessMap,de=K&&!!T.iridescenceMap,Se=K&&!!T.iridescenceThicknessMap,we=X&&!!T.sheenColorMap,fe=X&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,Ue=!!T.specularColorMap,rt=!!T.specularIntensityMap,L=ge&&!!T.transmissionMap,ne=ge&&!!T.thicknessMap,z=!!T.gradientMap,j=!!T.alphaMap,ce=T.alphaTest>0,oe=!!T.alphaHash,De=!!T.extensions;let lt=xi;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(lt=i.toneMapping);const wt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:it,fragmentShader:Y,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:je,instancingColor:je&&k.instanceColor!==null,instancingMorph:je&&k.morphTexture!==null,supportsVertexTextures:l,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ot,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:ot,envMap:ze,envMapMode:ze&&Q.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:tn,bumpMap:He,normalMap:Ge,displacementMap:l&&ve,emissiveMap:st,normalMapObjectSpace:Ge&&T.normalMapType===uf,normalMapTangentSpace:Ge&&T.normalMapType===xh,metalnessMap:_e,roughnessMap:b,anisotropy:x,anisotropyMap:ae,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:Xe,clearcoatRoughnessMap:J,dispersion:q,iridescence:K,iridescenceMap:de,iridescenceThicknessMap:Se,sheen:X,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:Ue,specularIntensityMap:rt,transmission:ge,transmissionMap:L,thicknessMap:ne,gradientMap:z,opaque:T.transparent===!1&&T.blending===xr&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:oe,combine:T.combine,mapUv:dt&&_(T.map.channel),aoMapUv:R&&_(T.aoMap.channel),lightMapUv:tn&&_(T.lightMap.channel),bumpMapUv:He&&_(T.bumpMap.channel),normalMapUv:Ge&&_(T.normalMap.channel),displacementMapUv:ve&&_(T.displacementMap.channel),emissiveMapUv:st&&_(T.emissiveMap.channel),metalnessMapUv:_e&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:ae&&_(T.anisotropyMap.channel),clearcoatMapUv:he&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(T.sheenRoughnessMap.channel),specularMapUv:Ve&&_(T.specularMap.channel),specularColorMapUv:Ue&&_(T.specularColorMap.channel),specularIntensityMapUv:rt&&_(T.specularIntensityMap.channel),transmissionMapUv:L&&_(T.transmissionMap.channel),thicknessMapUv:ne&&_(T.thicknessMap.channel),alphaMapUv:j&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ge||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(dt||j),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:Te,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&We.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&We.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Rn,flipSided:T.side===Gt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return wt.vertexUv1s=h.has(1),wt.vertexUv2s=h.has(2),wt.vertexUv3s=h.has(3),h.clear(),wt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)M.push(I),M.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(S(M,T),E(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function S(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){c.disableAll(),M.supportsVertexTextures&&c.enable(0),M.instancing&&c.enable(1),M.instancingColor&&c.enable(2),M.instancingMorph&&c.enable(3),M.matcap&&c.enable(4),M.envMap&&c.enable(5),M.normalMapObjectSpace&&c.enable(6),M.normalMapTangentSpace&&c.enable(7),M.clearcoat&&c.enable(8),M.iridescence&&c.enable(9),M.alphaTest&&c.enable(10),M.vertexColors&&c.enable(11),M.vertexAlphas&&c.enable(12),M.vertexUv1s&&c.enable(13),M.vertexUv2s&&c.enable(14),M.vertexUv3s&&c.enable(15),M.vertexTangents&&c.enable(16),M.anisotropy&&c.enable(17),M.alphaHash&&c.enable(18),M.batching&&c.enable(19),M.dispersion&&c.enable(20),M.batchingColor&&c.enable(21),T.push(c.mask),c.disableAll(),M.fog&&c.enable(0),M.useFog&&c.enable(1),M.flatShading&&c.enable(2),M.logarithmicDepthBuffer&&c.enable(3),M.reverseDepthBuffer&&c.enable(4),M.skinning&&c.enable(5),M.morphTargets&&c.enable(6),M.morphNormals&&c.enable(7),M.morphColors&&c.enable(8),M.premultipliedAlpha&&c.enable(9),M.shadowMapEnabled&&c.enable(10),M.doubleSided&&c.enable(11),M.flipSided&&c.enable(12),M.useDepthPacking&&c.enable(13),M.dithering&&c.enable(14),M.transmission&&c.enable(15),M.sheen&&c.enable(16),M.opaque&&c.enable(17),M.pointsUvs&&c.enable(18),M.decodeVideoTexture&&c.enable(19),M.decodeVideoTextureEmissive&&c.enable(20),M.alphaToCoverage&&c.enable(21),T.push(c.mask)}function y(T){const M=g[T.type];let I;if(M){const W=An[M];I=np.clone(W.uniforms)}else I=T.uniforms;return I}function C(T,M){let I;for(let W=0,k=f.length;W<k;W++){const G=f[W];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new ox(i,M,T,s),f.push(I)),I}function A(T){if(--T.usedTimes===0){const M=f.indexOf(T);f[M]=f[f.length-1],f.pop(),T.destroy()}}function w(T){u.remove(T)}function U(){u.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:U}}function dx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function r(o,c,u){i.get(o)[c]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function fx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(a,l,d,g,_,m){let p=i[e];return p===void 0?(p={id:a.id,object:a,geometry:l,material:d,groupOrder:g,renderOrder:a.renderOrder,z:_,group:m},i[e]=p):(p.id=a.id,p.object=a,p.geometry=l,p.material=d,p.groupOrder=g,p.renderOrder=a.renderOrder,p.z=_,p.group=m),e++,p}function c(a,l,d,g,_,m){const p=o(a,l,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function u(a,l,d,g,_,m){const p=o(a,l,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function h(a,l){t.length>1&&t.sort(a||fx),n.length>1&&n.sort(l||xu),r.length>1&&r.sort(l||xu)}function f(){for(let a=e,l=i.length;a<l;a++){const d=i[a];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:f,sort:h}}function px(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new vu,i.set(n,[o])):r>=s.length?(o=new vu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new be};break;case"SpotLight":t={position:new P,direction:new P,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _x=0;function xx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vx(i){const e=new mx,t=gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const r=new P,s=new Pe,o=new Pe;function c(h){let f=0,a=0,l=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,E=0,y=0,C=0,A=0,w=0;h.sort(xx);for(let T=0,M=h.length;T<M;T++){const I=h[T],W=I.color,k=I.intensity,G=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=W.r*k,a+=W.g*k,l+=W.b*k;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],k);w++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=V,d++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(W).multiplyScalar(k),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;const Q=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Q.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Z,y++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(W).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const Q=I.shadow,H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(k),V.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=a,n.ambient[2]=l;const U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==y||U.numSpotMaps!==C||U.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=y,U.numSpotMaps=C,U.numLightProbes=w,n.version=_x++)}function u(h,f){let a=0,l=0,d=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){const E=h[p];if(E.isDirectionalLight){const y=n.directional[a];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),a++}else if(E.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=n.point[l];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),l++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:c,setupView:u,state:n}}function yu(i){const e=new vx(i),t=[],n=[];function r(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function yx(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new yu(i),e.set(r,[c])):s>=o.length?(c=new yu(i),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tx(i,e,t){let n=new Dc;const r=new Ee,s=new Ee,o=new Ke,c=new vp({depthPacking:lf}),u=new yp,h={},f=t.maxTextureSize,a={[Kn]:Gt,[Gt]:Kn,[Rn]:Rn},l=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),d=l.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tn;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let p=this.type;this.render=function(A,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(_i),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=p!==bn&&this.type===bn,G=p===bn&&this.type!==bn;for(let Z=0,V=A.length;Z<V;Z++){const Q=A[Z],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||k===!0||G===!0){const xe=this.type!==bn?{minFilter:Ut,magFilter:Ut}:{};H.map!==null&&H.map.dispose(),H.map=new Xi(r.x,r.y,xe),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ue=H.getViewportCount();for(let xe=0;xe<ue;xe++){const Be=H.getViewport(xe);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),W.viewport(o),H.updateMatrices(Q,xe),n=H.getFrustum(),y(w,U,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&S(H,U),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,I)};function S(A,w){const U=e.update(_);l.defines.VSM_SAMPLES!==A.blurSamples&&(l.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,l.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xi(r.x,r.y)),l.uniforms.shadow_pass.value=A.map.texture,l.uniforms.resolution.value=A.mapSize,l.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,U,l,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,U,d,_,null)}function E(A,w,U,T){let M=null;const I=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=U.isPointLight===!0?u:c,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=M.uuid,k=w.uuid;let G=h[W];G===void 0&&(G={},h[W]=G);let Z=G[k];Z===void 0&&(Z=M.clone(),G[k]=Z,w.addEventListener("dispose",C)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,T===bn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:a[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=U}return M}function y(A,w,U,T,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const k=e.update(A),G=A.material;if(Array.isArray(G)){const Z=k.groups;for(let V=0,Q=Z.length;V<Q;V++){const H=Z[V],re=G[H.materialIndex];if(re&&re.visible){const ue=E(A,re,T,M);A.onBeforeShadow(i,A,w,U,k,ue,H),i.renderBufferDirect(U,null,k,ue,A,H),A.onAfterShadow(i,A,w,U,k,ue,H)}}}else if(G.visible){const Z=E(A,G,T,M);A.onBeforeShadow(i,A,w,U,k,Z,null),i.renderBufferDirect(U,null,k,Z,A,null),A.onAfterShadow(i,A,w,U,k,Z,null)}}const W=A.children;for(let k=0,G=W.length;k<G;k++)y(W[k],w,U,T,M)}function C(A){A.target.removeEventListener("dispose",C);for(const U in h){const T=h[U],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Ex={[So]:To,[Eo]:wo,[bo]:Ro,[Tr]:Ao,[To]:So,[wo]:Eo,[Ro]:bo,[Ao]:Tr};function bx(i,e){function t(){let L=!1;const ne=new Ke;let z=null;const j=new Ke(0,0,0,0);return{setMask:function(ce){z!==ce&&!L&&(i.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){L=ce},setClear:function(ce,oe,De,lt,wt){wt===!0&&(ce*=lt,oe*=lt,De*=lt),ne.set(ce,oe,De,lt),j.equals(ne)===!1&&(i.clearColor(ce,oe,De,lt),j.copy(ne))},reset:function(){L=!1,z=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,z=null,j=null,ce=null;return{setReversed:function(oe){if(ne!==oe){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const lt=ce;ce=null,this.setClear(lt)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?se(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(oe){z!==oe&&!L&&(i.depthMask(oe),z=oe)},setFunc:function(oe){if(ne&&(oe=Ex[oe]),j!==oe){switch(oe){case So:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ce!==oe&&(ne&&(oe=1-oe),i.clearDepth(oe),ce=oe)},reset:function(){L=!1,z=null,j=null,ce=null,ne=!1}}}function r(){let L=!1,ne=null,z=null,j=null,ce=null,oe=null,De=null,lt=null,wt=null;return{setTest:function(Je){L||(Je?se(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Je){ne!==Je&&!L&&(i.stencilMask(Je),ne=Je)},setFunc:function(Je,hn,Fn){(z!==Je||j!==hn||ce!==Fn)&&(i.stencilFunc(Je,hn,Fn),z=Je,j=hn,ce=Fn)},setOp:function(Je,hn,Fn){(oe!==Je||De!==hn||lt!==Fn)&&(i.stencilOp(Je,hn,Fn),oe=Je,De=hn,lt=Fn)},setLocked:function(Je){L=Je},setClear:function(Je){wt!==Je&&(i.clearStencil(Je),wt=Je)},reset:function(){L=!1,ne=null,z=null,j=null,ce=null,oe=null,De=null,lt=null,wt=null}}}const s=new t,o=new n,c=new r,u=new WeakMap,h=new WeakMap;let f={},a={},l=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,E=null,y=null,C=null,A=null,w=new be(0,0,0),U=0,T=!1,M=null,I=null,W=null,k=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Q>=2);let re=null,ue={};const xe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),it=new Ke().fromArray(xe),Y=new Ke().fromArray(Be);function ee(L,ne,z,j){const ce=new Uint8Array(4),oe=i.createTexture();i.bindTexture(L,oe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<z;De++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ne+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return oe}const me={};me[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),se(i.DEPTH_TEST),o.setFunc(Tr),He(!1),Ge(el),se(i.CULL_FACE),R(_i);function se(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Te(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function je(L,ne){return a[L]!==ne?(i.bindFramebuffer(L,ne),a[L]=ne,L===i.DRAW_FRAMEBUFFER&&(a[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(a[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ae(L,ne){let z=d,j=!1;if(L){z=l.get(ne),z===void 0&&(z=[],l.set(ne,z));const ce=L.textures;if(z.length!==ce.length||z[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,De=ce.length;oe<De;oe++)z[oe]=i.COLOR_ATTACHMENT0+oe;z.length=ce.length,j=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,j=!0);j&&i.drawBuffers(z)}function dt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const ot={[Fi]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};ot[Ud]=i.MIN,ot[Fd]=i.MAX;const ze={[Od]:i.ZERO,[Bd]:i.ONE,[kd]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[Xd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[Hd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[Wd]:i.ONE_MINUS_DST_COLOR,[Gd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[qd]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(L,ne,z,j,ce,oe,De,lt,wt,Je){if(L===_i){_===!0&&(Te(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),L!==Ld){if(L!==m||Je!==T){if((p!==Fi||y!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,y=Fi),Je)switch(L){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,C=null,A=null,w.set(0,0,0),U=0,m=L,T=Je}return}ce=ce||ne,oe=oe||z,De=De||j,(ne!==p||ce!==y)&&(i.blendEquationSeparate(ot[ne],ot[ce]),p=ne,y=ce),(z!==S||j!==E||oe!==C||De!==A)&&(i.blendFuncSeparate(ze[z],ze[j],ze[oe],ze[De]),S=z,E=j,C=oe,A=De),(lt.equals(w)===!1||wt!==U)&&(i.blendColor(lt.r,lt.g,lt.b,wt),w.copy(lt),U=wt),m=L,T=!1}function tn(L,ne){L.side===Rn?Te(i.CULL_FACE):se(i.CULL_FACE);let z=L.side===Gt;ne&&(z=!z),He(z),L.blending===xr&&L.transparent===!1?R(_i):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;c.setTest(j),j&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Ge(L){L!==Cd?(se(i.CULL_FACE),L!==I&&(L===el?i.cullFace(i.BACK):L===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),I=L}function ve(L){L!==W&&(V&&i.lineWidth(L),W=L)}function st(L,ne,z){L?(se(i.POLYGON_OFFSET_FILL),(k!==ne||G!==z)&&(i.polygonOffset(ne,z),k=ne,G=z)):Te(i.POLYGON_OFFSET_FILL)}function _e(L){L?se(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+Z-1),re!==L&&(i.activeTexture(L),re=L)}function x(L,ne,z){z===void 0&&(re===null?z=i.TEXTURE0+Z-1:z=re);let j=ue[z];j===void 0&&(j={type:void 0,texture:void 0},ue[z]=j),(j.type!==L||j.texture!==ne)&&(re!==z&&(i.activeTexture(z),re=z),i.bindTexture(L,ne||me[L]),j.type=L,j.texture=ne)}function F(){const L=ue[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){it.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function fe(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Ve(L,ne){let z=h.get(ne);z===void 0&&(z=new WeakMap,h.set(ne,z));let j=z.get(L);j===void 0&&(j=i.getUniformBlockIndex(ne,L.name),z.set(L,j))}function Ue(L,ne){const j=h.get(ne).get(L);u.get(ne)!==j&&(i.uniformBlockBinding(ne,j,L.__bindingPointIndex),u.set(ne,j))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,ue={},a={},l=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,E=null,y=null,C=null,A=null,w=new be(0,0,0),U=0,T=!1,M=null,I=null,W=null,k=null,G=null,it.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:se,disable:Te,bindFramebuffer:je,drawBuffers:Ae,useProgram:dt,setBlending:R,setMaterial:tn,setFlipSided:He,setCullFace:Ge,setLineWidth:ve,setPolygonOffset:st,setScissorTest:_e,activeTexture:b,bindTexture:x,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:de,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Xe,texStorage3D:J,texSubImage2D:X,texSubImage3D:ge,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:we,viewport:fe,reset:rt}}function Ax(i,e,t,n,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,f=new WeakMap;let a;const l=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):us("canvas")}function _(b,x,F){let q=1;const K=_e(b);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(q*K.width),ge=Math.floor(q*K.height);a===void 0&&(a=g(X,ge));const ae=x?g(X,ge):a;return ae.width=X,ae.height=ge,ae.getContext("2d").drawImage(b,0,0,X,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+ge+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,x,F,q,K=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),x===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){const ge=K?da:We.getTransfer(q);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=ge===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(b,x){let F;return b?x===null||x===Wi||x===wr?F=i.DEPTH24_STENCIL8:x===vn?F=i.DEPTH32F_STENCIL8:x===os&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wi||x===wr?F=i.DEPTH_COMPONENT24:x===vn?F=i.DEPTH_COMPONENT32F:x===os&&(F=i.DEPTH_COMPONENT16),F}function C(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ut&&b.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){const x=b.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&f.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),M(x)}function U(b){const x=n.get(b);if(x.__webglInit===void 0)return;const F=b.source,q=l.get(F);if(q){const K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(b),Object.keys(q).length===0&&l.delete(F)}n.remove(b)}function T(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const F=b.source,q=l.get(F);delete q[x.__cacheKey],o.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let q=0,K=F.length;q<K;q++){const X=n.get(F[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[q])}n.remove(b)}let I=0;function W(){I=0}function k(){const b=I;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function G(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function Z(b,x){const F=n.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,b,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function V(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Y(F,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Q(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Y(F,b,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function H(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ee(F,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const re={[Ar]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},ue={[Ut]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},xe={[hf]:i.NEVER,[_f]:i.ALWAYS,[df]:i.LESS,[vh]:i.LEQUAL,[ff]:i.EQUAL,[gf]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function Be(b,x){if(x.type===vn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===na||x.magFilter===$r||x.magFilter===qn||x.minFilter===Kt||x.minFilter===na||x.minFilter===$r||x.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,re[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,re[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,re[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==$r&&x.minFilter!==qn||x.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const q=x.source;let K=l.get(q);K===void 0&&(K={},l.set(q,K));const X=G(x);if(X!==b.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[X].usedTimes++;const ge=K[b.__cacheKey];ge!==void 0&&(K[b.__cacheKey].usedTimes--,ge.usedTimes===0&&T(x)),b.__cacheKey=X,b.__webglTexture=K[X].texture}return F}function Y(b,x,F){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const K=it(b,x),X=x.source;t.bindTexture(q,b.__webglTexture,i.TEXTURE0+F);const ge=n.get(X);if(X.version!==ge.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const ae=We.getPrimaries(We.workingColorSpace),he=x.colorSpace===hi?null:We.getPrimaries(x.colorSpace),Xe=x.colorSpace===hi||ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let J=_(x.image,!1,r.maxTextureSize);J=st(x,J);const de=s.convert(x.format,x.colorSpace),Se=s.convert(x.type);let we=E(x.internalFormat,de,Se,x.colorSpace,x.isVideoTexture);Be(q,x);let fe;const Ve=x.mipmaps,Ue=x.isVideoTexture!==!0,rt=ge.__version===void 0||K===!0,L=X.dataReady,ne=C(x,J);if(x.isDepthTexture)we=y(x.format===Rr,x.type),rt&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,we,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,we,J.width,J.height,0,de,Se,null));else if(x.isDataTexture)if(Ve.length>0){Ue&&rt&&t.texStorage2D(i.TEXTURE_2D,ne,we,Ve[0].width,Ve[0].height);for(let z=0,j=Ve.length;z<j;z++)fe=Ve[z],Ue?L&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,fe.width,fe.height,de,Se,fe.data):t.texImage2D(i.TEXTURE_2D,z,we,fe.width,fe.height,0,de,Se,fe.data);x.generateMipmaps=!1}else Ue?(rt&&t.texStorage2D(i.TEXTURE_2D,ne,we,J.width,J.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,de,Se,J.data)):t.texImage2D(i.TEXTURE_2D,0,we,J.width,J.height,0,de,Se,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,we,Ve[0].width,Ve[0].height,J.depth);for(let z=0,j=Ve.length;z<j;z++)if(fe=Ve[z],x.format!==ln)if(de!==null)if(Ue){if(L)if(x.layerUpdates.size>0){const ce=Zl(fe.width,fe.height,x.format,x.type);for(const oe of x.layerUpdates){const De=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,oe,fe.width,fe.height,1,de,De)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,J.depth,de,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,we,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,J.depth,de,Se,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,we,fe.width,fe.height,J.depth,0,de,Se,fe.data)}else{Ue&&rt&&t.texStorage2D(i.TEXTURE_2D,ne,we,Ve[0].width,Ve[0].height);for(let z=0,j=Ve.length;z<j;z++)fe=Ve[z],x.format!==ln?de!==null?Ue?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,z,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,fe.width,fe.height,de,Se,fe.data):t.texImage2D(i.TEXTURE_2D,z,we,fe.width,fe.height,0,de,Se,fe.data)}else if(x.isDataArrayTexture)if(Ue){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,we,J.width,J.height,J.depth),L)if(x.layerUpdates.size>0){const z=Zl(J.width,J.height,x.format,x.type);for(const j of x.layerUpdates){const ce=J.data.subarray(j*z/J.data.BYTES_PER_ELEMENT,(j+1)*z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,de,Se,ce)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Se,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,J.width,J.height,J.depth,0,de,Se,J.data);else if(x.isData3DTexture)Ue?(rt&&t.texStorage3D(i.TEXTURE_3D,ne,we,J.width,J.height,J.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Se,J.data)):t.texImage3D(i.TEXTURE_3D,0,we,J.width,J.height,J.depth,0,de,Se,J.data);else if(x.isFramebufferTexture){if(rt)if(Ue)t.texStorage2D(i.TEXTURE_2D,ne,we,J.width,J.height);else{let z=J.width,j=J.height;for(let ce=0;ce<ne;ce++)t.texImage2D(i.TEXTURE_2D,ce,we,z,j,0,de,Se,null),z>>=1,j>>=1}}else if(Ve.length>0){if(Ue&&rt){const z=_e(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ne,we,z.width,z.height)}for(let z=0,j=Ve.length;z<j;z++)fe=Ve[z],Ue?L&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,de,Se,fe):t.texImage2D(i.TEXTURE_2D,z,we,de,Se,fe);x.generateMipmaps=!1}else if(Ue){if(rt){const z=_e(J);t.texStorage2D(i.TEXTURE_2D,ne,we,z.width,z.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Se,J)}else t.texImage2D(i.TEXTURE_2D,0,we,de,Se,J);m(x)&&p(q),ge.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ee(b,x,F){if(x.image.length!==6)return;const q=it(b,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const X=n.get(K);if(K.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+F);const ge=We.getPrimaries(We.workingColorSpace),ae=x.colorSpace===hi?null:We.getPrimaries(x.colorSpace),he=x.colorSpace===hi||ge===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!Xe&&!J?de[j]=_(x.image[j],!0,r.maxCubemapSize):de[j]=J?x.image[j].image:x.image[j],de[j]=st(x,de[j]);const Se=de[0],we=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),Ve=E(x.internalFormat,we,fe,x.colorSpace),Ue=x.isVideoTexture!==!0,rt=X.__version===void 0||q===!0,L=K.dataReady;let ne=C(x,Se);Be(i.TEXTURE_CUBE_MAP,x);let z;if(Xe){Ue&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ve,Se.width,Se.height);for(let j=0;j<6;j++){z=de[j].mipmaps;for(let ce=0;ce<z.length;ce++){const oe=z[ce];x.format!==ln?we!==null?Ue?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,Ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,oe.width,oe.height,we,fe,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,Ve,oe.width,oe.height,0,we,fe,oe.data)}}}else{if(z=x.mipmaps,Ue&&rt){z.length>0&&ne++;const j=_e(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ve,j.width,j.height)}for(let j=0;j<6;j++)if(J){Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,we,fe,de[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,de[j].width,de[j].height,0,we,fe,de[j].data);for(let ce=0;ce<z.length;ce++){const De=z[ce].image[j].image;Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,De.width,De.height,we,fe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,Ve,De.width,De.height,0,we,fe,De.data)}}else{Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,fe,de[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,we,fe,de[j]);for(let ce=0;ce<z.length;ce++){const oe=z[ce];Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,we,fe,oe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,Ve,we,fe,oe.image[j])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function me(b,x,F,q,K,X){const ge=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),he=E(F.internalFormat,ge,ae,F.colorSpace),Xe=n.get(x),J=n.get(F);if(J.__renderTarget=x,!Xe.__hasExternalTextures){const de=Math.max(1,x.width>>X),Se=Math.max(1,x.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,X,he,de,Se,x.depth,0,ge,ae,null):t.texImage2D(K,X,he,de,Se,0,ge,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Ge(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,J.__webglTexture,0,He(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,J.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(b,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=y(x.stencilBuffer,K),ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=He(x);Ge(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,X,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,b)}else{const q=x.textures;for(let K=0;K<q.length;K++){const X=q[K],ge=s.convert(X.format,X.colorSpace),ae=s.convert(X.type),he=E(X.internalFormat,ge,ae,X.colorSpace),Xe=He(x);F&&Ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,he,x.width,x.height):Ge(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const K=q.__webglTexture,X=He(x);if(x.depthTexture.format===vr)Ge(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Rr)Ge(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function je(b){const x=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),se(x.__webglDepthbuffer[q],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),se(x.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(b,x,F){const q=n.get(b);x!==void 0&&me(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&je(b)}function dt(b){const x=b.texture,F=n.get(b),q=n.get(x);b.addEventListener("dispose",w);const K=b.textures,X=b.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let he=0;he<x.mipmaps.length;he++)F.__webglFramebuffer[ae][he]=i.createFramebuffer()}else F.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)F.__webglFramebuffer[ae]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ae=0,he=K.length;ae<he;ae++){const Xe=n.get(K[ae]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Ge(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const he=K[ae];F.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const Xe=s.convert(he.format,he.colorSpace),J=s.convert(he.type),de=E(he.internalFormat,Xe,J,he.colorSpace,b.isXRRenderTarget===!0),Se=He(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),se(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)me(F.__webglFramebuffer[ae][he],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else me(F.__webglFramebuffer[ae],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,he=K.length;ae<he;ae++){const Xe=K[ae],J=n.get(Xe);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Be(i.TEXTURE_2D,Xe),me(F.__webglFramebuffer,b,Xe,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(Xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),Be(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)me(F.__webglFramebuffer[he],b,x,i.COLOR_ATTACHMENT0,ae,he);else me(F.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ae,0);m(x)&&p(ae),t.unbindTexture()}b.depthBuffer&&je(b)}function ot(b){const x=b.textures;for(let F=0,q=x.length;F<q;F++){const K=x[F];if(m(K)){const X=S(b),ge=n.get(K).__webglTexture;t.bindTexture(X,ge),p(X),t.unbindTexture()}}}const ze=[],R=[];function tn(b){if(b.samples>0){if(Ge(b)===!1){const x=b.textures,F=b.width,q=b.height;let K=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(b),ae=x.length>1;if(ae)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<x.length;he++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Xe=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,K,i.NEAREST),u===!0&&(ze.length=0,R.length=0,ze.push(i.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ze.push(X),R.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Xe=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&u){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(b){return Math.min(r.maxSamples,b.samples)}function Ge(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(b){const x=o.render.frame;f.get(b)!==x&&(f.set(b,x),b.update())}function st(b,x){const F=b.colorSpace,q=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ot&&F!==hi&&(We.getTransfer(F)===tt?(q!==ln||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function _e(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ge}function wx(i,e){function t(n,r=hi){let s;const o=We.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.BYTE;if(n===lh)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===dh)return i.RGB;if(n===ln)return i.RGBA;if(n===fh)return i.LUMINANCE;if(n===ph)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===Tc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===ia||n===ra||n===sa||n===aa)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Lo||n===Do||n===No)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===Fo||n===Oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uo||n===Fo)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===jo||n===Ko||n===Zo||n===$o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===Jo||n===Qo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===ec||n===tc||n===nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Et,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yi({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends Yi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,c="local-floor",u=1,h=null,f=null,a=null,l=null,d=null,g=null;const _=new Ix,m=t.getContextAttributes();let p=null,S=null;const E=[],y=[],C=new Ee;let A=null;const w=new Dt;w.viewport=new Ke;const U=new Dt;U.viewport=new Ke;const T=[w,U],M=new zp;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=E[Y];return ee===void 0&&(ee=new ja,E[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=E[Y];return ee===void 0&&(ee=new ja,E[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=E[Y];return ee===void 0&&(ee=new ja,E[Y]=ee),ee.getHandSpace()};function k(Y){const ee=y.indexOf(Y.inputSource);if(ee===-1)return;const me=E[ee];me!==void 0&&(me.update(Y.inputSource,Y.frame,h||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<E.length;Y++){const ee=y[Y];ee!==null&&(y[Y]=null,E[Y].disconnect(ee))}I=null,W=null,_.reset(),e.setRenderTarget(p),d=null,l=null,a=null,r=null,S=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return l!==null?l:d},this.getBinding=function(){return a},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,se=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Rr:vr,se=m.stencil?wr:Wi);const je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};a=new XRWebGLBinding(r,t),l=a.createProjectionLayer(je),r.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),S=new Xi(l.textureWidth,l.textureHeight,{format:ln,type:Zn,depthTexture:new Ph(l.textureWidth,l.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xi(d.framebufferWidth,d.framebufferHeight,{format:ln,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await r.requestReferenceSpace(c),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Y){for(let ee=0;ee<Y.removed.length;ee++){const me=Y.removed[ee],se=y.indexOf(me);se>=0&&(y[se]=null,E[se].disconnect(me))}for(let ee=0;ee<Y.added.length;ee++){const me=Y.added[ee];let se=y.indexOf(me);if(se===-1){for(let je=0;je<E.length;je++)if(je>=y.length){y.push(me),se=je;break}else if(y[je]===null){y[je]=me,se=je;break}if(se===-1)break}const Te=E[se];Te&&Te.connect(me)}}const V=new P,Q=new P;function H(Y,ee,me){V.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const se=V.distanceTo(Q),Te=ee.projectionMatrix.elements,je=me.projectionMatrix.elements,Ae=Te[14]/(Te[10]-1),dt=Te[14]/(Te[10]+1),ot=(Te[9]+1)/Te[5],ze=(Te[9]-1)/Te[5],R=(Te[8]-1)/Te[0],tn=(je[8]+1)/je[0],He=Ae*R,Ge=Ae*tn,ve=se/(-R+tn),st=ve*-R;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const _e=Ae+ve,b=dt+ve,x=He-st,F=Ge+(se-st),q=ot*dt/b*_e,K=ze*dt/b*_e;Y.projectionMatrix.makePerspective(x,F,q,K,_e,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,me=Y.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(me=_.depthFar)),M.near=U.near=w.near=ee,M.far=U.far=w.far=me,(I!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,W=M.far),w.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,M.layers.mask=w.layers.mask|U.layers.mask;const se=Y.parent,Te=M.cameras;re(M,se);for(let je=0;je<Te.length;je++)re(Te[je],se);Te.length===2?H(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),ue(Y,M,se)};function ue(Y,ee,me){me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(l===null&&d===null))return u},this.setFoveation=function(Y){u=Y,l!==null&&(l.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xe=null;function Be(Y,ee){if(f=ee.getViewerPose(h||o),g=ee,f!==null){const me=f.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let se=!1;me.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Ae=0;Ae<me.length;Ae++){const dt=me[Ae];let ot=null;if(d!==null)ot=d.getViewport(dt);else{const R=a.getViewSubImage(l,dt);ot=R.viewport,Ae===0&&(e.setRenderTargetTextures(S,R.colorTexture,l.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(S))}let ze=T[Ae];ze===void 0&&(ze=new Dt,ze.layers.enable(Ae),ze.viewport=new Ke,T[Ae]=ze),ze.matrix.fromArray(dt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(dt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ot.x,ot.y,ot.width,ot.height),Ae===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(ze)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&a){const Ae=a.getDepthInformation(me[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let me=0;me<E.length;me++){const se=y[me],Te=E[me];se!==null&&Te!==void 0&&Te.update(se,ee,h||o)}xe&&xe(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const it=new Oh;it.setAnimationLoop(Be),this.setAnimationLoop=function(Y){xe=Y},this.dispose=function(){}}}const Ci=new Ln,Lx=new Pe;function Dx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),a(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),l(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?u(m,p,S,E):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function u(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function a(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Nx(i,e,t,n){let r={},s={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function h(S,E){let y=r[S.id];y===void 0&&(g(S),y=f(S),r[S.id]=y,S.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(S,C);const A=e.render.frame;s[S.id]!==A&&(l(S),s[S.id]=A)}function f(S){const E=a();S.__bindingPointIndex=E;const y=i.createBuffer(),C=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function a(){for(let S=0;S<c;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(S){const E=r[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,w=y.length;A<w;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,M=U.length;T<M;T++){const I=U[T];if(d(I,A,T,C)===!0){const W=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let Z=0;Z<k.length;Z++){const V=k[Z],Q=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,E,y,C){const A=S.value,w=E+"_"+y;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const U=C[w];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[w]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(S){const E=S.uniforms;let y=0;const C=16;for(let w=0,U=E.length;w<U;w++){const T=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,I=T.length;M<I;M++){const W=T[M],k=Array.isArray(W.value)?W.value:[W.value];for(let G=0,Z=k.length;G<Z;G++){const V=k[G],Q=_(V),H=y%C,re=H%Q.boundary,ue=H+re;y+=re,ue!==0&&C-ue<Q.storage&&(y+=C-ue),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=Q.storage}}}const A=y%C;return A>0&&(y+=C-A),S.__size=y,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:u,update:h,dispose:p}}class Ux{constructor(e={}){const{canvas:t=Nf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:a=!1,reverseDepthBuffer:l=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=xi,this.toneMappingExposure=1;const y=this;let C=!1,A=0,w=0,U=null,T=-1,M=null;const I=new Ke,W=new Ke;let k=null;const G=new be(0);let Z=0,V=t.width,Q=t.height,H=1,re=null,ue=null;const xe=new Ke(0,0,V,Q),Be=new Ke(0,0,V,Q);let it=!1;const Y=new Dc;let ee=!1,me=!1;this.transmissionResolutionScale=1;const se=new Pe,Te=new Pe,je=new P,Ae=new Ke,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ze(){return U===null?H:1}let R=n;function tn(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),R===null){const D="webgl2";if(R=tn(D,v),R===null)throw tn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Ge,ve,st,_e,b,x,F,q,K,X,ge,ae,he,Xe,J,de,Se,we,fe,Ve,Ue,rt,L;function ne(){He=new X_(R),He.init(),Ue=new wx(R,He),Ge=new k_(R,He,e,Ue),ve=new bx(R,He),Ge.reverseDepthBuffer&&l&&ve.buffers.depth.setReversed(!0),st=new j_(R),_e=new dx,b=new Ax(R,He,ve,_e,Ge,Ue,st),x=new H_(y),F=new W_(y),q=new tm(R),rt=new O_(R,q),K=new Y_(R,q,st,rt),X=new Z_(R,K,q,st),we=new K_(R,Ge,b),J=new z_(_e),ge=new hx(y,x,F,He,Ge,rt,J),ae=new Dx(y,_e),he=new px,Xe=new yx(He),Se=new F_(y,x,F,ve,X,d,u),de=new Tx(y,X,Ge),L=new Nx(R,st,Ge,ve),fe=new B_(R,He,st),Ve=new q_(R,He,st),st.programs=ge.programs,y.capabilities=Ge,y.extensions=He,y.properties=_e,y.renderLists=he,y.shadowMap=de,y.state=ve,y.info=st}ne();const z=new Px(y,R);this.xr=z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(V,Q,!1))},this.getSize=function(v){return v.set(V,Q)},this.setSize=function(v,D,O=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,Q=D,t.width=Math.floor(v*H),t.height=Math.floor(D*H),O===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(V*H,Q*H).floor()},this.setDrawingBufferSize=function(v,D,O){V=v,Q=D,H=O,t.width=Math.floor(v*O),t.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(I)},this.getViewport=function(v){return v.copy(xe)},this.setViewport=function(v,D,O,B){v.isVector4?xe.set(v.x,v.y,v.z,v.w):xe.set(v,D,O,B),ve.viewport(I.copy(xe).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,D,O,B){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,D,O,B),ve.scissor(W.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){ve.setScissorTest(it=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(v=!0,D=!0,O=!0){let B=0;if(v){let N=!1;if(U!==null){const $=U.texture.format;N=$===Ac||$===bc||$===Ec}if(N){const $=U.texture.type,ie=$===Zn||$===Wi||$===os||$===wr||$===Mc||$===Sc,le=Se.getClearColor(),pe=Se.getClearAlpha(),Re=le.r,Ce=le.g,ye=le.b;ie?(g[0]=Re,g[1]=Ce,g[2]=ye,g[3]=pe,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Re,_[1]=Ce,_[2]=ye,_[3]=pe,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}D&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Se.dispose(),he.dispose(),Xe.dispose(),_e.dispose(),x.dispose(),F.dispose(),X.dispose(),rt.dispose(),L.dispose(),ge.dispose(),z.dispose(),z.removeEventListener("sessionstart",qc),z.removeEventListener("sessionend",jc),Si.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=st.autoReset,D=de.enabled,O=de.autoUpdate,B=de.needsUpdate,N=de.type;ne(),st.autoReset=v,de.enabled=D,de.autoUpdate=O,de.needsUpdate=B,de.type=N}function oe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function De(v){const D=v.target;D.removeEventListener("dispose",De),lt(D)}function lt(v){wt(v),_e.remove(v)}function wt(v){const D=_e.get(v).programs;D!==void 0&&(D.forEach(function(O){ge.releaseProgram(O)}),v.isShaderMaterial&&ge.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,B,N,$){D===null&&(D=dt);const ie=N.isMesh&&N.matrixWorld.determinant()<0,le=Md(v,D,O,B,N);ve.setMaterial(B,ie);let pe=O.index,Re=1;if(B.wireframe===!0){if(pe=K.getWireframeAttribute(O),pe===void 0)return;Re=2}const Ce=O.drawRange,ye=O.attributes.position;let Ye=Ce.start*Re,Ze=(Ce.start+Ce.count)*Re;$!==null&&(Ye=Math.max(Ye,$.start*Re),Ze=Math.min(Ze,($.start+$.count)*Re)),pe!==null?(Ye=Math.max(Ye,0),Ze=Math.min(Ze,pe.count)):ye!=null&&(Ye=Math.max(Ye,0),Ze=Math.min(Ze,ye.count));const mt=Ze-Ye;if(mt<0||mt===1/0)return;rt.setup(N,B,le,O,pe);let ut,qe=fe;if(pe!==null&&(ut=q.get(pe),qe=Ve,qe.setIndex(ut)),N.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*ze()),qe.setMode(R.LINES)):qe.setMode(R.TRIANGLES);else if(N.isLine){let Me=B.linewidth;Me===void 0&&(Me=1),ve.setLineWidth(Me*ze()),N.isLineSegments?qe.setMode(R.LINES):N.isLineLoop?qe.setMode(R.LINE_LOOP):qe.setMode(R.LINE_STRIP)}else N.isPoints?qe.setMode(R.POINTS):N.isSprite&&qe.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,bt=N._multiDrawCounts,$e=N._multiDrawCount,dn=pe?q.get(pe).bytesPerElement:1,ji=_e.get(B).currentProgram.getUniforms();for(let Xt=0;Xt<$e;Xt++)ji.setValue(R,"_gl_DrawID",Xt),qe.render(Me[Xt]/dn,bt[Xt])}else if(N.isInstancedMesh)qe.renderInstances(Ye,mt,N.count);else if(O.isInstancedBufferGeometry){const Me=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,bt=Math.min(O.instanceCount,Me);qe.renderInstances(Ye,mt,bt)}else qe.render(Ye,mt)};function Je(v,D,O){v.transparent===!0&&v.side===Rn&&v.forceSinglePass===!1?(v.side=Gt,v.needsUpdate=!0,vs(v,D,O),v.side=Kn,v.needsUpdate=!0,vs(v,D,O),v.side=Rn):vs(v,D,O)}this.compile=function(v,D,O=null){O===null&&(O=v),p=Xe.get(O),p.init(D),E.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),v!==O&&v.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const $=N.material;if($)if(Array.isArray($))for(let ie=0;ie<$.length;ie++){const le=$[ie];Je(le,O,N),B.add(le)}else Je($,O,N),B.add($)}),E.pop(),p=null,B},this.compileAsync=function(v,D,O=null){const B=this.compile(v,D,O);return new Promise(N=>{function $(){if(B.forEach(function(ie){_e.get(ie).currentProgram.isReady()&&B.delete(ie)}),B.size===0){N(v);return}setTimeout($,10)}He.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let hn=null;function Fn(v){hn&&hn(v)}function qc(){Si.stop()}function jc(){Si.start()}const Si=new Oh;Si.setAnimationLoop(Fn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(v){hn=v,z.setAnimationLoop(v),v===null?Si.stop():Si.start()},z.addEventListener("sessionstart",qc),z.addEventListener("sessionend",jc),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,D,U),p=Xe.get(v,E.length),p.init(D),E.push(p),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Te),me=this.localClippingEnabled,ee=J.init(this.clippingPlanes,me),m=he.get(v,S.length),m.init(),S.push(m),z.enabled===!0&&z.isPresenting===!0){const $=y.xr.getDepthSensingMesh();$!==null&&Aa($,D,-1/0,y.sortObjects)}Aa(v,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,ue),ot=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ot&&Se.addToRenderList(m,v),this.info.render.frame++,ee===!0&&J.beginShadows();const O=p.state.shadowsArray;de.render(O,v,D),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const $=D.cameras;if(N.length>0)for(let ie=0,le=$.length;ie<le;ie++){const pe=$[ie];Zc(B,N,v,pe)}ot&&Se.render(v);for(let ie=0,le=$.length;ie<le;ie++){const pe=$[ie];Kc(m,v,pe,pe.viewport)}}else N.length>0&&Zc(B,N,v,D),ot&&Se.render(v),Kc(m,v,D);U!==null&&w===0&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(y,v,D),rt.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],ee===!0&&J.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Aa(v,D,O,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){B&&Ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Te);const ie=X.update(v),le=v.material;le.visible&&m.push(v,ie,le,O,Ae.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Y.intersectsObject(v))){const ie=X.update(v),le=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ae.copy(v.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ae.copy(ie.boundingSphere.center)),Ae.applyMatrix4(v.matrixWorld).applyMatrix4(Te)),Array.isArray(le)){const pe=ie.groups;for(let Re=0,Ce=pe.length;Re<Ce;Re++){const ye=pe[Re],Ye=le[ye.materialIndex];Ye&&Ye.visible&&m.push(v,ie,Ye,O,Ae.z,ye)}}else le.visible&&m.push(v,ie,le,O,Ae.z,null)}}const $=v.children;for(let ie=0,le=$.length;ie<le;ie++)Aa($[ie],D,O,B)}function Kc(v,D,O,B){const N=v.opaque,$=v.transmissive,ie=v.transparent;p.setupLightsView(O),ee===!0&&J.setGlobalState(y.clippingPlanes,O),B&&ve.viewport(I.copy(B)),N.length>0&&xs(N,D,O),$.length>0&&xs($,D,O),ie.length>0&&xs(ie,D,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Zc(v,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Xi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ds:Zn,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const $=p.state.transmissionRenderTarget[B.id],ie=B.viewport||I;$.setSize(ie.z*y.transmissionResolutionScale,ie.w*y.transmissionResolutionScale);const le=y.getRenderTarget();y.setRenderTarget($),y.getClearColor(G),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),ot&&Se.render(O);const pe=y.toneMapping;y.toneMapping=xi;const Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ee===!0&&J.setGlobalState(y.clippingPlanes,B),xs(v,O,B),b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ye=0,Ye=D.length;ye<Ye;ye++){const Ze=D[ye],mt=Ze.object,ut=Ze.geometry,qe=Ze.material,Me=Ze.group;if(qe.side===Rn&&mt.layers.test(B.layers)){const bt=qe.side;qe.side=Gt,qe.needsUpdate=!0,$c(mt,O,B,ut,qe,Me),qe.side=bt,qe.needsUpdate=!0,Ce=!0}}Ce===!0&&(b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($))}y.setRenderTarget(le),y.setClearColor(G,Z),Re!==void 0&&(B.viewport=Re),y.toneMapping=pe}function xs(v,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,$=v.length;N<$;N++){const ie=v[N],le=ie.object,pe=ie.geometry,Re=B===null?ie.material:B,Ce=ie.group;le.layers.test(O.layers)&&$c(le,D,O,pe,Re,Ce)}}function $c(v,D,O,B,N,$){v.onBeforeRender(y,D,O,B,N,$),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(y,D,O,B,v,$),N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=Gt,N.needsUpdate=!0,y.renderBufferDirect(O,D,B,N,v,$),N.side=Kn,N.needsUpdate=!0,y.renderBufferDirect(O,D,B,N,v,$),N.side=Rn):y.renderBufferDirect(O,D,B,N,v,$),v.onAfterRender(y,D,O,B,N,$)}function vs(v,D,O){D.isScene!==!0&&(D=dt);const B=_e.get(v),N=p.state.lights,$=p.state.shadowsArray,ie=N.state.version,le=ge.getParameters(v,N.state,$,D,O),pe=ge.getProgramCacheKey(le);let Re=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?F:x).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",De),Re=new Map,B.programs=Re);let Ce=Re.get(pe);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===ie)return Qc(v,le),Ce}else le.uniforms=ge.getUniforms(v),v.onBeforeCompile(le,y),Ce=ge.acquireProgram(le,pe),Re.set(pe,Ce),B.uniforms=le.uniforms;const ye=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=J.uniform),Qc(v,le),B.needsLights=Td(v),B.lightsStateVersion=ie,B.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Jc(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=ca.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Qc(v,D){const O=_e.get(v);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Md(v,D,O,B,N){D.isScene!==!0&&(D=dt),b.resetTextureUnits();const $=D.fog,ie=B.isMeshStandardMaterial?D.environment:null,le=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ot,pe=(B.isMeshStandardMaterial?F:x).get(B.envMap||ie),Re=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!O.morphAttributes.position,Ye=!!O.morphAttributes.normal,Ze=!!O.morphAttributes.color;let mt=xi;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(mt=y.toneMapping);const ut=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,qe=ut!==void 0?ut.length:0,Me=_e.get(B),bt=p.state.lights;if(ee===!0&&(me===!0||v!==M)){const It=v===M&&B.id===T;J.setState(B,v,It)}let $e=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==bt.state.version||Me.outputColorSpace!==le||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==pe||B.fog===!0&&Me.fog!==$||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==J.numPlanes||Me.numIntersection!==J.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==Ce||Me.morphTargets!==ye||Me.morphNormals!==Ye||Me.morphColors!==Ze||Me.toneMapping!==mt||Me.morphTargetsCount!==qe)&&($e=!0):($e=!0,Me.__version=B.version);let dn=Me.currentProgram;$e===!0&&(dn=vs(B,D,N));let ji=!1,Xt=!1,Br=!1;const at=dn.getUniforms(),nn=Me.uniforms;if(ve.useProgram(dn.program)&&(ji=!0,Xt=!0,Br=!0),B.id!==T&&(T=B.id,Xt=!0),ji||M!==v){ve.buffers.depth.getReversed()?(se.copy(v.projectionMatrix),Ff(se),Of(se),at.setValue(R,"projectionMatrix",se)):at.setValue(R,"projectionMatrix",v.projectionMatrix),at.setValue(R,"viewMatrix",v.matrixWorldInverse);const kt=at.map.cameraPosition;kt!==void 0&&kt.setValue(R,je.setFromMatrixPosition(v.matrixWorld)),Ge.logarithmicDepthBuffer&&at.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Xt=!0,Br=!0)}if(N.isSkinnedMesh){at.setOptional(R,N,"bindMatrix"),at.setOptional(R,N,"bindMatrixInverse");const It=N.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),at.setValue(R,"boneTexture",It.boneTexture,b))}N.isBatchedMesh&&(at.setOptional(R,N,"batchingTexture"),at.setValue(R,"batchingTexture",N._matricesTexture,b),at.setOptional(R,N,"batchingIdTexture"),at.setValue(R,"batchingIdTexture",N._indirectTexture,b),at.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(R,"batchingColorTexture",N._colorsTexture,b));const rn=O.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&we.update(N,O,dn),(Xt||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,at.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(nn.envMap.value=pe,nn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(nn.envMapIntensity.value=D.environmentIntensity),Xt&&(at.setValue(R,"toneMappingExposure",y.toneMappingExposure),Me.needsLights&&Sd(nn,Br),$&&B.fog===!0&&ae.refreshFogUniforms(nn,$),ae.refreshMaterialUniforms(nn,B,H,Q,p.state.transmissionRenderTarget[v.id]),ca.upload(R,Jc(Me),nn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ca.upload(R,Jc(Me),nn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(R,"center",N.center),at.setValue(R,"modelViewMatrix",N.modelViewMatrix),at.setValue(R,"normalMatrix",N.normalMatrix),at.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const It=B.uniformsGroups;for(let kt=0,wa=It.length;kt<wa;kt++){const Ti=It[kt];L.update(Ti,dn),L.bind(Ti,dn)}}return dn}function Sd(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Td(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,D,O){_e.get(v.texture).__webglTexture=D,_e.get(v.depthTexture).__webglTexture=O;const B=_e.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const O=_e.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const Ed=R.createFramebuffer();this.setRenderTarget=function(v,D=0,O=0){U=v,A=D,w=O;let B=!0,N=null,$=!1,ie=!1;if(v){const pe=_e.get(v);if(pe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(pe.__hasExternalTextures)b.rebindTextures(v,_e.get(v.texture).__webglTexture,_e.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(pe.__boundDepthTexture!==ye){if(ye!==null&&_e.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ie=!0);const Ce=_e.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?N=Ce[D][O]:N=Ce[D],$=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?N=_e.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[O]:N=Ce,I.copy(v.viewport),W.copy(v.scissor),k=v.scissorTest}else I.copy(xe).multiplyScalar(H).floor(),W.copy(Be).multiplyScalar(H).floor(),k=it;if(O!==0&&(N=Ed),ve.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&ve.drawBuffers(v,N),ve.viewport(I),ve.scissor(W),ve.setScissorTest(k),$){const pe=_e.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,O)}else if(ie){const pe=_e.get(v.texture),Re=D;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,pe.__webglTexture,O,Re)}else if(v!==null&&O!==0){const pe=_e.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pe.__webglTexture,O)}T=-1},this.readRenderTargetPixels=function(v,D,O,B,N,$,ie){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ie!==void 0&&(le=le[ie]),le){ve.bindFramebuffer(R.FRAMEBUFFER,le);try{const pe=v.texture,Re=pe.format,Ce=pe.type;if(!Ge.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&O>=0&&O<=v.height-N&&R.readPixels(D,O,B,N,Ue.convert(Re),Ue.convert(Ce),$)}finally{const pe=U!==null?_e.get(U).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(v,D,O,B,N,$,ie){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ie!==void 0&&(le=le[ie]),le){const pe=v.texture,Re=pe.format,Ce=pe.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-B&&O>=0&&O<=v.height-N){ve.bindFramebuffer(R.FRAMEBUFFER,le);const ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.bufferData(R.PIXEL_PACK_BUFFER,$.byteLength,R.STREAM_READ),R.readPixels(D,O,B,N,Ue.convert(Re),Ue.convert(Ce),0);const Ye=U!==null?_e.get(U).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ye);const Ze=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Uf(R,Ze,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,$),R.deleteBuffer(ye),R.deleteSync(Ze),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,O=0){v.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(v.image.width*B),$=Math.floor(v.image.height*B),ie=D!==null?D.x:0,le=D!==null?D.y:0;b.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,ie,le,N,$),ve.unbindTexture()};const bd=R.createFramebuffer(),Ad=R.createFramebuffer();this.copyTextureToTexture=function(v,D,O=null,B=null,N=0,$=null){v.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],D=arguments[2],$=arguments[3]||0,O=null),$===null&&(N!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=N,N=0):$=0);let ie,le,pe,Re,Ce,ye,Ye,Ze,mt;const ut=v.isCompressedTexture?v.mipmaps[$]:v.image;if(O!==null)ie=O.max.x-O.min.x,le=O.max.y-O.min.y,pe=O.isBox3?O.max.z-O.min.z:1,Re=O.min.x,Ce=O.min.y,ye=O.isBox3?O.min.z:0;else{const rn=Math.pow(2,-N);ie=Math.floor(ut.width*rn),le=Math.floor(ut.height*rn),v.isDataArrayTexture?pe=ut.depth:v.isData3DTexture?pe=Math.floor(ut.depth*rn):pe=1,Re=0,Ce=0,ye=0}B!==null?(Ye=B.x,Ze=B.y,mt=B.z):(Ye=0,Ze=0,mt=0);const qe=Ue.convert(D.format),Me=Ue.convert(D.type);let bt;D.isData3DTexture?(b.setTexture3D(D,0),bt=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),bt=R.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),bt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const $e=R.getParameter(R.UNPACK_ROW_LENGTH),dn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ji=R.getParameter(R.UNPACK_SKIP_PIXELS),Xt=R.getParameter(R.UNPACK_SKIP_ROWS),Br=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye);const at=v.isDataArrayTexture||v.isData3DTexture,nn=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const rn=_e.get(v),It=_e.get(D),kt=_e.get(rn.__renderTarget),wa=_e.get(It.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,kt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let Ti=0;Ti<pe;Ti++)at&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(v).__webglTexture,N,ye+Ti),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(D).__webglTexture,$,mt+Ti)),R.blitFramebuffer(Re,Ce,ie,le,Ye,Ze,ie,le,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||_e.has(v)){const rn=_e.get(v),It=_e.get(D);ve.bindFramebuffer(R.READ_FRAMEBUFFER,bd),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ad);for(let kt=0;kt<pe;kt++)at?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,rn.__webglTexture,N,ye+kt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,rn.__webglTexture,N),nn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,It.__webglTexture,$,mt+kt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,It.__webglTexture,$),N!==0?R.blitFramebuffer(Re,Ce,ie,le,Ye,Ze,ie,le,R.COLOR_BUFFER_BIT,R.NEAREST):nn?R.copyTexSubImage3D(bt,$,Ye,Ze,mt+kt,Re,Ce,ie,le):R.copyTexSubImage2D(bt,$,Ye,Ze,Re,Ce,ie,le);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else nn?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(bt,$,Ye,Ze,mt,ie,le,pe,qe,Me,ut.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(bt,$,Ye,Ze,mt,ie,le,pe,qe,ut.data):R.texSubImage3D(bt,$,Ye,Ze,mt,ie,le,pe,qe,Me,ut):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,$,Ye,Ze,ie,le,qe,Me,ut.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,$,Ye,Ze,ut.width,ut.height,qe,ut.data):R.texSubImage2D(R.TEXTURE_2D,$,Ye,Ze,ie,le,qe,Me,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ji),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Br),$===0&&D.generateMipmaps&&R.generateMipmap(bt),ve.unbindTexture()},this.copyTextureToTexture3D=function(v,D,O=null,B=null,N=0){return v.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,v=arguments[2],D=arguments[3],N=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,O,B,N)},this.initRenderTarget=function(v){_e.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),ve.unbindTexture()},this.resetState=function(){A=0,w=0,U=null,ve.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}function Mu(i,e){if(e===of)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ic||e===_h){let t=i.getIndex();if(t===null){const o=[],c=i.getAttribute("position");if(c!==void 0){for(let u=0;u<c.count;u++)o.push(u);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===ic)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Fx extends qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=is.extractUrlBase(e);o=is.resolveURL(h,this.path)}else o=is.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){r?r(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},u=new Nh(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{s.parse(h,o,function(f){t(f),s.manager.itemEnd(e)},c)}catch(f){c(f)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},c={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Gh){try{o[ke.KHR_BINARY_GLTF]=new nv(e)}catch(a){r&&r(a);return}s=JSON.parse(o[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new mv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const a=this.pluginCallbacks[f](h);a.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[a.name]=a,o[a.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const a=s.extensionsUsed[f],l=s.extensionsRequired||[];switch(a){case ke.KHR_MATERIALS_UNLIT:o[a]=new kx;break;case ke.KHR_DRACO_MESH_COMPRESSION:o[a]=new iv(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:o[a]=new rv;break;case ke.KHR_MESH_QUANTIZATION:o[a]=new sv;break;default:l.indexOf(a)>=0&&c[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}h.setExtensions(o),h.setPlugins(c),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Ox(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Bx{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const f=new be(16777215);u.color!==void 0&&f.setRGB(u.color[0],u.color[1],u.color[2],Ot);const a=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new Sa(f),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Op(f),h.distance=a;break;case"spot":h=new Up(f),h.distance=a,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),Xn(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(u){return n._getNodeRef(t.cache,c,u)})}}class kx{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Bi}extendParams(e,t,n){const r=[];e.color=new be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(r)}}class zx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Hx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(c,c)}return Promise.all(s)}}class Gx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Vx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Wx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const c=o.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Xx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Yx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(c[0],c[1],c[2],Ot),Promise.all(s)}}class qx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class jx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(c[0],c[1],c[2],Ot),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(s)}}class Kx{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Zx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $x{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Jx{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=r.images[o.source];let u=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,u);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qx{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=r.images[o.source];let u=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,u);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ev{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const u=r.byteOffset||0,h=r.byteLength||0,f=r.count,a=r.byteStride,l=new Uint8Array(c,u,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,a,l,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(f*a);return o.decodeGltfBuffer(new Uint8Array(d),f,a,l,r.mode,r.filter),d})})}else return null}}class tv{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==on.TRIANGLES&&h.mode!==on.TRIANGLE_STRIP&&h.mode!==on.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,c=[],u={};for(const h in o)c.push(this.parser.getDependency("accessor",o[h]).then(f=>(u[h]=f,u[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const f=h.pop(),a=f.isGroup?f.children:[f],l=h[0].count,d=[];for(const g of a){const _=new Pe,m=new P,p=new un,S=new P(1,1,1),E=new pp(g.geometry,g.material,l);for(let y=0;y<l;y++)u.TRANSLATION&&m.fromBufferAttribute(u.TRANSLATION,y),u.ROTATION&&p.fromBufferAttribute(u.ROTATION,y),u.SCALE&&S.fromBufferAttribute(u.SCALE,y),E.setMatrixAt(y,_.compose(m,p,S));for(const y in u)if(y==="_COLOR_0"){const C=u[y];E.instanceColor=new sc(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,u[y]);ct.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),d.push(E)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const Gh="glTF",qr=12,Su={JSON:1313821514,BIN:5130562};class nv{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-qr,s=new DataView(e,qr);let o=0;for(;o<r;){const c=s.getUint32(o,!0);o+=4;const u=s.getUint32(o,!0);if(o+=4,u===Su.JSON){const h=new Uint8Array(e,qr+o,c);this.content=n.decode(h)}else if(u===Su.BIN){const h=qr+o;this.body=e.slice(h,h+c)}o+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},u={},h={};for(const f in o){const a=lc[f]||f.toLowerCase();c[a]=o[f]}for(const f in e.attributes){const a=lc[f]||f.toLowerCase();if(o[f]!==void 0){const l=n.accessors[e.attributes[f]],d=Sr[l.componentType];h[a]=d.name,u[a]=l.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(a,l){r.decodeDracoFile(f,function(d){for(const g in d.attributes){const _=d.attributes[g],m=u[g];m!==void 0&&(_.normalized=m)}a(d)},c,h,Ot,l)})})}}class rv{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sv{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Vh extends ps{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=c*2,h=c*3,f=r-t,a=(n-t)/f,l=a*a,d=l*a,g=e*h,_=g-h,m=-2*d+3*l,p=d-l,S=1-m,E=p-l+a;for(let y=0;y!==c;y++){const C=o[_+y+c],A=o[_+y+u]*f,w=o[g+y+c],U=o[g+y]*f;s[y]=S*C+E*A+m*w+p*U}return s}}const av=new un;class ov extends Vh{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return av.fromArray(s).normalize().toArray(s),s}}const on={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tu={9728:Ut,9729:Kt,9984:oh,9985:na,9986:$r,9987:qn},Eu={33071:fi,33648:ha,10497:Ar},oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cv={CUBICSPLINE:void 0,LINEAR:ls,STEP:cs},co={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function Ii(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uv(i,e,t){let n=!1,r=!1,s=!1;for(let h=0,f=e.length;h<f;h++){const a=e[h];if(a.POSITION!==void 0&&(n=!0),a.NORMAL!==void 0&&(r=!0),a.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],c=[],u=[];for(let h=0,f=e.length;h<f;h++){const a=e[h];if(n){const l=a.POSITION!==void 0?t.getDependency("accessor",a.POSITION):i.attributes.position;o.push(l)}if(r){const l=a.NORMAL!==void 0?t.getDependency("accessor",a.NORMAL):i.attributes.normal;c.push(l)}if(s){const l=a.COLOR_0!==void 0?t.getDependency("accessor",a.COLOR_0):i.attributes.color;u.push(l)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],a=h[1],l=h[2];return n&&(i.morphAttributes.position=f),r&&(i.morphAttributes.normal=a),s&&(i.morphAttributes.color=l),i.morphTargetsRelative=!0,i})}function hv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dv(i){let e;const t=i.extensions&&i.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lo(t.attributes):e=i.indices+":"+lo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+lo(i.targets[n]);return e}function lo(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pv=new Pe;class mv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ox,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const u=c.match(/Version\/(\d+)/);r=n&&u?parseInt(u[1],10):-1,s=c.indexOf("Firefox")>-1,o=s?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Fh(this.options.manager):this.textureLoader=new kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const c={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Ii(s,c,r),Xn(c,r),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(c)})).then(function(){for(const u of c.scenes)u.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let c=0,u=o.length;c<u;c++)e[o[c]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,c)=>{const u=this.associations.get(o);u!=null&&this.associations.set(c,u);for(const[h,f]of o.children.entries())s(f,c.children[h])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(is.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=oo[r.type],c=Sr[r.componentType],u=r.normalized===!0,h=new c(r.count*o);return Promise.resolve(new Ft(h,o,u))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const c=o[0],u=oo[r.type],h=Sr[r.componentType],f=h.BYTES_PER_ELEMENT,a=f*u,l=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==a){const p=Math.floor(l/d),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let E=t.cache.get(S);E||(_=new h(c,p*d,r.count*d/f),E=new lp(_,d/f),t.cache.add(S,E)),m=new Pc(E,u,l%d/f,g)}else c===null?_=new h(r.count*u):_=new h(c,l,r.count*u),m=new Ft(_,u,g);if(r.sparse!==void 0){const p=oo.SCALAR,S=Sr[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new S(o[1],E,r.sparse.count*p),A=new h(o[2],y,r.sparse.count*u);c!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,U=C.length;w<U;w++){const T=C[w];if(m.setX(T,A[w*u]),u>=2&&m.setY(T,A[w*u+1]),u>=3&&m.setZ(T,A[w*u+2]),u>=4&&m.setW(T,A[w*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let c=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(c=u)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],c=s.images[t],u=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||c.name||"",f.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(f.name=c.uri);const l=(s.samplers||{})[o.sampler]||{};return f.magFilter=Tu[l.magFilter]||Kt,f.minFilter=Tu[l.minFilter]||qn,f.wrapS=Eu[l.wrapS]||Ar,f.wrapT=Eu[l.wrapT]||Ar,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Ut&&f.minFilter!==Kt,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(a=>a.clone());const o=r.images[e],c=self.URL||self.webkitURL;let u=o.uri||"",h=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(a){h=!0;const l=new Blob([a],{type:o.mimeType});return u=c.createObjectURL(l),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(u).then(function(a){return new Promise(function(l,d){let g=l;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Et(_);m.needsUpdate=!0,l(m)}),t.load(is.resolveURL(a,s.path),g,void 0,d)})}).then(function(a){return h===!0&&c.revokeObjectURL(u),Xn(a,o),a.userData.mimeType=o.mimeType||fv(o.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),a});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const u=s.associations.get(o);o=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),s.associations.set(o,u)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Ih,Pn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(c,u)),n=u}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Nc,Pn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(c,u)),n=u}if(r||s||o){let c="ClonedMaterial:"+n.uuid+":";r&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let u=this.cache.get(c);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),r&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(c,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return hs}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const c={},u=s.extensions||{},h=[];if(u[ke.KHR_MATERIALS_UNLIT]){const a=r[ke.KHR_MATERIALS_UNLIT];o=a.getMaterialType(),h.push(a.extendParams(c,s,t))}else{const a=s.pbrMetallicRoughness||{};if(c.color=new be(1,1,1),c.opacity=1,Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;c.color.setRGB(l[0],l[1],l[2],Ot),c.opacity=l[3]}a.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",a.baseColorTexture,yt)),c.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,c.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",a.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",a.metallicRoughnessTexture))),o=this._invokeOne(function(l){return l.getMaterialType&&l.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(l){return l.extendMaterialParams&&l.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=Rn);const f=s.alphaMode||co.OPAQUE;if(f===co.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,f===co.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Bi&&(h.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const a=s.normalTexture.scale;c.normalScale.set(a,a)}if(s.occlusionTexture!==void 0&&o!==Bi&&(h.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Bi){const a=s.emissiveFactor;c.emissive=new be().setRGB(a[0],a[1],a[2],Ot)}return s.emissiveTexture!==void 0&&o!==Bi&&h.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,yt)),Promise.all(h).then(function(){const a=new o(c);return s.name&&(a.name=s.name),Xn(a,s),t.associations.set(a,{materials:e}),s.extensions&&Ii(r,a,s),a})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(c){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(u){return bu(u,c,t)})}const o=[];for(let c=0,u=e.length;c<u;c++){const h=e[c],f=dv(h),a=r[f];if(a)o.push(a.promise);else{let l;h.extensions&&h.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?l=s(h):l=bu(new Tn,h,t),r[f]={primitive:h,promise:l},o.push(l)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,c=[];for(let u=0,h=o.length;u<h;u++){const f=o[u].material===void 0?lv(this.cache):this.getDependency("material",o[u].material);c.push(f)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(u){const h=u.slice(0,u.length-1),f=u[u.length-1],a=[];for(let d=0,g=f.length;d<g;d++){const _=f[d],m=o[d];let p;const S=h[d];if(m.mode===on.TRIANGLES||m.mode===on.TRIANGLE_STRIP||m.mode===on.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new hp(_,S):new Zt(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===on.TRIANGLE_STRIP?p.geometry=Mu(p.geometry,_h):m.mode===on.TRIANGLE_FAN&&(p.geometry=Mu(p.geometry,ic));else if(m.mode===on.LINES)p=new Ch(_,S);else if(m.mode===on.LINE_STRIP)p=new Uc(_,S);else if(m.mode===on.LINE_LOOP)p=new _p(_,S);else if(m.mode===on.POINTS)p=new xp(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Xn(p,s),m.extensions&&Ii(r,p,m),t.assignFinalMaterial(p),a.push(p)}for(let d=0,g=a.length;d<g;d++)t.associations.set(a[d],{meshes:e,primitives:d});if(a.length===1)return s.extensions&&Ii(r,a[0],s),a[0];const l=new ki;s.extensions&&Ii(r,l,s),t.associations.set(l,{meshes:e});for(let d=0,g=a.length;d<g;d++)l.add(a[d]);return l})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(yr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Bc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,c=[],u=[];for(let h=0,f=o.length;h<f;h++){const a=o[h];if(a){c.push(a);const l=new Pe;s!==null&&l.fromArray(s.array,h*16),u.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Lc(c,u)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],c=[],u=[],h=[],f=[];for(let a=0,l=r.channels.length;a<l;a++){const d=r.channels[a],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,S=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),c.push(this.getDependency("accessor",p)),u.push(this.getDependency("accessor",S)),h.push(g),f.push(_))}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(h),Promise.all(f)]).then(function(a){const l=a[0],d=a[1],g=a[2],_=a[3],m=a[4],p=[];for(let S=0,E=l.length;S<E;S++){const y=l[S],C=d[S],A=g[S],w=_[S],U=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=n._createAnimationTracks(y,C,A,w,U);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new wp(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let u=0,h=r.weights.length;u<h;u++)c.morphTargetInfluences[u]=r.weights[u]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],c=r.children||[];for(let h=0,f=c.length;h<f;h++)o.push(n.getDependency("node",c[h]));const u=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),u]).then(function(h){const f=h[0],a=h[1],l=h[2];l!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(l,pv)});for(let d=0,g=a.length;d<g;d++)f.add(a[d]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",c=[],u=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&c.push(u),s.camera!==void 0&&c.push(r.getDependency("camera",s.camera).then(function(h){return r._getNodeRef(r.cameraCache,s.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let f;if(s.isBone===!0?f=new wh:h.length>1?f=new ki:h.length===1?f=h[0]:f=new ct,f!==h[0])for(let a=0,l=h.length;a<l;a++)f.add(h[a]);if(s.name&&(f.userData.name=s.name,f.name=o),Xn(f,s),s.extensions&&Ii(n,f,s),s.matrix!==void 0){const a=new Pe;a.fromArray(s.matrix),f.applyMatrix4(a)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ki;n.name&&(s.name=r.createUniqueName(n.name)),Xn(s,n),n.extensions&&Ii(t,s,n);const o=n.nodes||[],c=[];for(let u=0,h=o.length;u<h;u++)c.push(r.getDependency("node",o[u]));return Promise.all(c).then(function(u){for(let f=0,a=u.length;f<a;f++)s.add(u[f]);const h=f=>{const a=new Map;for(const[l,d]of r.associations)(l instanceof Pn||l instanceof Et)&&a.set(l,d);return f.traverse(l=>{const d=r.associations.get(l);d!=null&&a.set(l,d)}),a};return r.associations=h(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],c=e.name?e.name:e.uuid,u=[];si[s.path]===si.weights?e.traverse(function(l){l.morphTargetInfluences&&u.push(l.name?l.name:l.uuid)}):u.push(c);let h;switch(si[s.path]){case si.weights:h=Pr;break;case si.rotation:h=Lr;break;case si.position:case si.scale:h=Dr;break;default:switch(n.itemSize){case 1:h=Pr;break;case 2:case 3:default:h=Dr;break}break}const f=r.interpolation!==void 0?cv[r.interpolation]:ls,a=this._getArrayFromAccessor(n);for(let l=0,d=u.length;l<d;l++){const g=new h(u[l]+"."+si[s.path],t.array,a,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Lr?ov:Vh;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gv(i,e,t){const n=e.attributes,r=new $n;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],u=c.min,h=c.max;if(u!==void 0&&h!==void 0){if(r.set(new P(u[0],u[1],u[2]),new P(h[0],h[1],h[2])),c.normalized){const f=uc(Sr[c.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new P,u=new P;for(let h=0,f=s.length;h<f;h++){const a=s[h];if(a.POSITION!==void 0){const l=t.json.accessors[a.POSITION],d=l.min,g=l.max;if(d!==void 0&&g!==void 0){if(u.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),u.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),u.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),l.normalized){const _=uc(Sr[l.componentType]);u.multiplyScalar(_)}c.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}i.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function bu(i,e,t){const n=e.attributes,r=[];function s(o,c){return t.getDependency("accessor",o).then(function(u){i.setAttribute(c,u)})}for(const o in n){const c=lc[o]||o.toLowerCase();c in i.attributes||r.push(s(n[o],c))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(c){i.setIndex(c)});r.push(o)}return We.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Xn(i,e),gv(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?uv(i,e.targets,t):i})}const Au={type:"change"},Gc={type:"start"},Wh={type:"end"},js=new Nr,wu=new ui,_v=Math.cos(70*yr.DEG2RAD),xt=new P,zt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uo=1e-6;class xv extends Qp{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kl,this._sphericalDelta=new Kl,this._scale=1,this._panOffset=new P,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new P,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yv.bind(this),this._onPointerDown=vv.bind(this),this._onPointerUp=Mv.bind(this),this._onContextMenu=Rv.bind(this),this._onMouseWheel=Ev.bind(this),this._onKeyDown=bv.bind(this),this._onTouchStart=Av.bind(this),this._onTouchMove=wv.bind(this),this._onMouseDown=Sv.bind(this),this._onMouseMove=Tv.bind(this),this._interceptControlDown=Cv.bind(this),this._interceptControlUp=Iv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=zt:n>Math.PI&&(n-=zt),r<-Math.PI?r+=zt:r>Math.PI&&(r-=zt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const c=xt.length();o=this._clampDistance(c*this._scale);const u=c-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new P(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),o=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(js.origin.copy(this.object.position),js.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(js.direction))<_v?this.object.lookAt(this.target):(wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),js.intersectPlane(wu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>uo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uo||this._lastTargetPosition.distanceToSquared(this.target)>uo?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xt.copy(r).sub(this.target);let s=xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,c=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(o,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function vv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function yv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Mv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wh),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Sv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case _r.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case _r.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Gc)}function Tv(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ev(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Gc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wh))}function bv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Av(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Gc)}function wv(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function Rv(i){this.enabled!==!1&&i.preventDefault()}function Cv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Iv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ru=class{constructor(i,e){Ie(this,"target");Ie(this,"name");Ie(this,"intersected");Ie(this,"wasIntersected",!1);Ie(this,"wasIntersectedOnMouseDown",!1);Ie(this,"distance");this.target=i,this.name=e,this.intersected=!1,this.distance=0}},Ht=class{constructor(i,e=null){Ie(this,"type");Ie(this,"cancelBubble");Ie(this,"originalEvent");Ie(this,"coords",new Ee(0,0));Ie(this,"distance",0);Ie(this,"intersected",!1);Ie(this,"wasIntersected",!1);Ie(this,"wasIntersectedOnMouseDown",!1);this.cancelBubble=!1,this.type=i,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},Pv=class{constructor(i,e,t,n){Ie(this,"renderer");Ie(this,"camera");Ie(this,"domElement");Ie(this,"bindEventsOnBodyElement");Ie(this,"autoAdd");Ie(this,"scene");Ie(this,"mouse");Ie(this,"supportsPointerEvents");Ie(this,"interactiveObjects");Ie(this,"closestObject");Ie(this,"raycaster");Ie(this,"treatTouchEventsAsMouseEvents");Ie(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Ie(this,"add",(i,e=[])=>{if(i&&!this.interactiveObjects.find(t=>t.target===i))if(e.length>0)e.forEach(t=>{let n=i.getObjectByName(t);if(n){let r=new Ru(n,t);this.interactiveObjects.push(r)}});else{let t=new Ru(i,i.name);this.interactiveObjects.push(t)}});Ie(this,"remove",(i,e=[])=>{!i||(e.length>0?e.forEach(t=>{let n=i.getObjectByName(t);n&&(this.interactiveObjects=this.interactiveObjects.filter(r=>r.target!==n))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==i))});Ie(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(n=>{n.target&&this.checkIntersection(n)}),this.interactiveObjects.sort(function(n,r){return n.distance-r.distance});let i=this.interactiveObjects.find(n=>n.intersected)??null;if(i!=this.closestObject){if(this.closestObject){let n=new Ht("mouseout");this.dispatch(this.closestObject,n)}if(i){let n=new Ht("mouseover");this.dispatch(i,n)}this.closestObject=i}let e;this.interactiveObjects.forEach(n=>{!n.intersected&&n.wasIntersected&&(e||(e=new Ht("mouseleave")),this.dispatch(n,e))});let t;this.interactiveObjects.forEach(n=>{n.intersected&&!n.wasIntersected&&(t||(t=new Ht("mouseenter")),this.dispatch(n,t))})});Ie(this,"checkIntersection",i=>{let e=this.raycaster.intersectObjects([i.target],!0);if(i.wasIntersected=i.intersected,e.length>0){let t=e[0].distance;e.forEach(n=>{n.distance<t&&(t=n.distance)}),i.intersected=!0,i.distance=t}else i.intersected=!1});Ie(this,"onDocumentMouseMove",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY);let e=new Ht("mousemove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onDocumentPointerMove",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY);let e=new Ht("pointermove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onTouchMove",i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY);let e=new Ht(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onMouseClick",i=>{this.update();let e=new Ht("click",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onMouseDown",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY),this.update();let e=new Ht("mousedown",i);this.interactiveObjects.forEach(t=>{t.intersected?(t.wasIntersectedOnMouseDown=!0,this.dispatch(t,e)):t.wasIntersectedOnMouseDown=!1})});Ie(this,"onPointerDown",i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY),this.update();let e=new Ht("pointerdown",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onTouchStart",i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY),this.update();let e=new Ht(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onMouseUp",i=>{let e=new Ht("mouseup",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onPointerUp",i=>{let e=new Ht("pointerup",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onTouchEnd",i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY),this.update();let e=new Ht(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"dispatch",(i,e)=>{i.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=i.distance,e.intersected=i.intersected,e.wasIntersected=i.wasIntersected,e.wasIntersectedOnMouseDown=i.wasIntersectedOnMouseDown,i.target.dispatchEvent(e))});Ie(this,"mapPositionToPoint",(i,e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();i.x=(e-n.left)/n.width*2-1,i.y=-((t-n.top)/n.height)*2+1});this.renderer=i,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=n&&typeof n.bindEventsOnBodyElement<"u"?n.bindEventsOnBodyElement:!0,this.scene=n&&typeof n.scene<"u"?n.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(r=>{this.add(r),r.addEventListener("removed",s=>{this.remove(s.target)})}),this.update()}),this.autoAdd=n&&typeof n.autoAdd<"u"?n.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Ee(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new $p,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}},jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ho={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Cu;function Lv(){return Cu||(Cu=1,function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var l=this||t;if(a=parseFloat(a),l.ctx||f(),typeof a<"u"&&a>=0&&a<=1){if(l._volume=a,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var g=l._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=l._howls[d]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*a)}return l}return l._volume},mute:function(a){var l=this||t;l.ctx||f(),l._muted=a,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a?0:l._volume,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var g=l._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=l._howls[d]._soundById(g[_]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return l},stop:function(){for(var a=this||t,l=0;l<a._howls.length;l++)a._howls[l].stop();return a},unload:function(){for(var a=this||t,l=a._howls.length-1;l>=0;l--)a._howls[l].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,f()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var l=new Audio;l.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return a}if(!l||typeof l.canPlayType!="function")return a;var d=l.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,p=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,S=g.match(/Version\/(.*?) /),E=p&&S&&parseInt(S[1],10)<15;return a._codecs={mp3:!!(!m&&(d||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!E&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!E&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var l=function(d){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var m=a._howls[_]._getSoundIds(),p=0;p<m.length;p++){var S=a._howls[_]._soundById(m[p]);S&&S._node&&!S._node._unlocked&&(S._node._unlocked=!0,S._node.load())}a._autoResume();var E=a.ctx.createBufferSource();E.buffer=a._scratchBuffer,E.connect(a.ctx.destination),typeof E.start>"u"?E.noteOn(0):E.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),E.onended=function(){E.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var y=0;y<a._howls.length;y++)a._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var l=this||t;return a._unlocked&&l._html5AudioPool.push(a),l},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var l=0;l<a._howls.length;l++)if(a._howls[l]._webAudio){for(var d=0;d<a._howls[l]._sounds.length;d++)if(!a._howls[l]._sounds[d]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var l=0;l<a._howls.length;l++)a._howls[l]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var l=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(a)};n.prototype={init:function(a){var l=this;return t.ctx||f(),l._autoplay=a.autoplay||!1,l._format=typeof a.format!="string"?a.format:[a.format],l._html5=a.html5||!1,l._muted=a.mute||!1,l._loop=a.loop||!1,l._pool=a.pool||5,l._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,l._rate=a.rate||1,l._sprite=a.sprite||{},l._src=typeof a.src!="string"?a.src:[a.src],l._volume=a.volume!==void 0?a.volume:1,l._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=a.onend?[{fn:a.onend}]:[],l._onfade=a.onfade?[{fn:a.onfade}]:[],l._onload=a.onload?[{fn:a.onload}]:[],l._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],l._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],l._onpause=a.onpause?[{fn:a.onpause}]:[],l._onplay=a.onplay?[{fn:a.onplay}]:[],l._onstop=a.onstop?[{fn:a.onstop}]:[],l._onmute=a.onmute?[{fn:a.onmute}]:[],l._onvolume=a.onvolume?[{fn:a.onvolume}]:[],l._onrate=a.onrate?[{fn:a.onrate}]:[],l._onseek=a.onseek?[{fn:a.onseek}]:[],l._onunlock=a.onunlock?[{fn:a.onunlock}]:[],l._onresume=[],l._webAudio=t.usingWebAudio&&!l._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var a=this,l=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var d=0;d<a._src.length;d++){var g,_;if(a._format&&a._format[d])g=a._format[d];else{if(_=a._src[d],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){l=a._src[d];break}}if(!l){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=l,a._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new r(a),a._webAudio&&o(a),a},play:function(a,l){var d=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&d._state==="loaded"&&!d._sprite[a])return null;if(typeof a>"u"&&(a="__default",!d._playLock)){for(var _=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(_++,g=d._sounds[m]._id);_===1?a=null:g=null}}var p=g?d._soundById(g):d._inactiveSound();if(!p)return null;if(g&&!a&&(a=p._sprite||"__default"),d._state!=="loaded"){p._sprite=a,p._ended=!1;var S=p._id;return d._queue.push({event:"play",action:function(){d.play(S)}}),S}if(g&&!p._paused)return l||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var E=Math.max(0,p._seek>0?p._seek:d._sprite[a][0]/1e3),y=Math.max(0,(d._sprite[a][0]+d._sprite[a][1])/1e3-E),C=y*1e3/Math.abs(p._rate),A=d._sprite[a][0]/1e3,w=(d._sprite[a][0]+d._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var U=function(){p._paused=!1,p._seek=E,p._start=A,p._stop=w,p._loop=!!(p._loop||d._sprite[a][2])};if(E>=w){d._ended(p);return}var T=p._node;if(d._webAudio){var M=function(){d._playLock=!1,U(),d._refreshBuffer(p);var G=p._muted||d._muted?0:p._volume;T.gain.setValueAtTime(G,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof T.bufferSource.start>"u"?p._loop?T.bufferSource.noteGrainOn(0,E,86400):T.bufferSource.noteGrainOn(0,E,y):p._loop?T.bufferSource.start(0,E,86400):T.bufferSource.start(0,E,y),C!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),C)),l||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?M():(d._playLock=!0,d.once("resume",M),d._clearTimer(p._id))}else{var I=function(){T.currentTime=E,T.muted=p._muted||d._muted||t._muted||T.muted,T.volume=p._volume*t.volume(),T.playbackRate=p._rate;try{var G=T.play();if(G&&typeof Promise<"u"&&(G instanceof Promise||typeof G.then=="function")?(d._playLock=!0,U(),G.then(function(){d._playLock=!1,T._unlocked=!0,l?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):l||(d._playLock=!1,U(),d._emit("play",p._id)),T.playbackRate=p._rate,T.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),C):(d._endTimers[p._id]=function(){d._ended(p),T.removeEventListener("ended",d._endTimers[p._id],!1)},T.addEventListener("ended",d._endTimers[p._id],!1))}catch(Z){d._emit("playerror",p._id,Z)}};T.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(T.src=d._src,T.load());var W=window&&window.ejecta||!T.readyState&&t._navigator.isCocoonJS;if(T.readyState>=3||W)I();else{d._playLock=!0,d._state="loading";var k=function(){d._state="loaded",I(),T.removeEventListener(t._canPlayEvent,k,!1)};T.addEventListener(t._canPlayEvent,k,!1),d._clearTimer(p._id)}}return p._id},pause:function(a){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(a)}}),l;for(var d=l._getSoundIds(a),g=0;g<d.length;g++){l._clearTimer(d[g]);var _=l._soundById(d[g]);if(_&&!_._paused&&(_._seek=l.seek(d[g]),_._rateSeek=0,_._paused=!0,l._stopFade(d[g]),_._node))if(l._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),l._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||l._emit("pause",_?_._id:null)}return l},stop:function(a,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(a)}}),d;for(var g=d._getSoundIds(a),_=0;_<g.length;_++){d._clearTimer(g[_]);var m=d._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(g[_]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),l||d._emit("stop",m._id))}return d},mute:function(a,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(a,l)}}),d;if(typeof l>"u")if(typeof a=="boolean")d._muted=a;else return d._muted;for(var g=d._getSoundIds(l),_=0;_<g.length;_++){var m=d._soundById(g[_]);m&&(m._muted=a,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),d._emit("mute",m._id))}return d},volume:function(){var a=this,l=arguments,d,g;if(l.length===0)return a._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var _=a._getSoundIds(),m=_.indexOf(l[0]);m>=0?g=parseInt(l[0],10):d=parseFloat(l[0])}else l.length>=2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,l)}}),a;typeof g>"u"&&(a._volume=d),g=a._getSoundIds(g);for(var S=0;S<g.length;S++)p=a._soundById(g[S]),p&&(p._volume=d,l[2]||a._stopFade(g[S]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),a._emit("volume",p._id))}else return p=g?a._soundById(g):a._sounds[0],p?p._volume:0;return a},fade:function(a,l,d,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,l,d,g)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),l=Math.min(Math.max(0,parseFloat(l)),1),d=parseFloat(d),_.volume(a,g);for(var m=_._getSoundIds(g),p=0;p<m.length;p++){var S=_._soundById(m[p]);if(S){if(g||_._stopFade(m[p]),_._webAudio&&!S._muted){var E=t.ctx.currentTime,y=E+d/1e3;S._volume=a,S._node.gain.setValueAtTime(a,E),S._node.gain.linearRampToValueAtTime(l,y)}_._startFadeInterval(S,a,l,d,m[p],typeof g>"u")}}return _},_startFadeInterval:function(a,l,d,g,_,m){var p=this,S=l,E=d-l,y=Math.abs(E/.01),C=Math.max(4,y>0?g/y:g),A=Date.now();a._fadeTo=d,a._interval=setInterval(function(){var w=(Date.now()-A)/g;A=Date.now(),S+=E*w,S=Math.round(S*100)/100,E<0?S=Math.max(d,S):S=Math.min(d,S),p._webAudio?a._volume=S:p.volume(S,a._id,!0),m&&(p._volume=S),(d<l&&S<=d||d>l&&S>=d)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(d,a._id),p._emit("fade",a._id))},C)},_stopFade:function(a){var l=this,d=l._soundById(a);return d&&d._interval&&(l._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,l.volume(d._fadeTo,a),d._fadeTo=null,l._emit("fade",a)),l},loop:function(){var a=this,l=arguments,d,g,_;if(l.length===0)return a._loop;if(l.length===1)if(typeof l[0]=="boolean")d=l[0],a._loop=d;else return _=a._soundById(parseInt(l[0],10)),_?_._loop:!1;else l.length===2&&(d=l[0],g=parseInt(l[1],10));for(var m=a._getSoundIds(g),p=0;p<m.length;p++)_=a._soundById(m[p]),_&&(_._loop=d,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(m[p])&&(a.pause(m[p],!0),a.play(m[p],!0)))));return a},rate:function(){var a=this,l=arguments,d,g;if(l.length===0)g=a._sounds[0]._id;else if(l.length===1){var _=a._getSoundIds(),m=_.indexOf(l[0]);m>=0?g=parseInt(l[0],10):d=parseFloat(l[0])}else l.length===2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));var p;if(typeof d=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,l)}}),a;typeof g>"u"&&(a._rate=d),g=a._getSoundIds(g);for(var S=0;S<g.length;S++)if(p=a._soundById(g[S]),p){a.playing(g[S])&&(p._rateSeek=a.seek(g[S]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var E=a.seek(g[S]),y=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-E,C=y*1e3/Math.abs(p._rate);(a._endTimers[g[S]]||!p._paused)&&(a._clearTimer(g[S]),a._endTimers[g[S]]=setTimeout(a._ended.bind(a,p),C)),a._emit("rate",p._id)}}else return p=a._soundById(g),p?p._rate:a._rate;return a},seek:function(){var a=this,l=arguments,d,g;if(l.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(l.length===1){var _=a._getSoundIds(),m=_.indexOf(l[0]);m>=0?g=parseInt(l[0],10):a._sounds.length&&(g=a._sounds[0]._id,d=parseFloat(l[0]))}else l.length===2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,l)}}),a;var p=a._soundById(g);if(p)if(typeof d=="number"&&d>=0){var S=a.playing(g);S&&a.pause(g,!0),p._seek=d,p._ended=!1,a._clearTimer(g),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var E=function(){S&&a.play(g,!0),a._emit("seek",g)};if(S&&!a._webAudio){var y=function(){a._playLock?setTimeout(y,0):E()};setTimeout(y,0)}else E()}else if(a._webAudio){var C=a.playing(g)?t.ctx.currentTime-p._playStart:0,A=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(A+C*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var l=this;if(typeof a=="number"){var d=l._soundById(a);return d?!d._paused:!1}for(var g=0;g<l._sounds.length;g++)if(!l._sounds[g]._paused)return!0;return!1},duration:function(a){var l=this,d=l._duration,g=l._soundById(a);return g&&(d=l._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var a=this,l=a._sounds,d=0;d<l.length;d++)l[d]._paused||a.stop(l[d]._id),a._webAudio||(a._clearSound(l[d]._node),l[d]._node.removeEventListener("error",l[d]._errorFn,!1),l[d]._node.removeEventListener(t._canPlayEvent,l[d]._loadFn,!1),l[d]._node.removeEventListener("ended",l[d]._endFn,!1),t._releaseHtml5Audio(l[d]._node)),delete l[d]._node,a._clearTimer(l[d]._id);var g=t._howls.indexOf(a);g>=0&&t._howls.splice(g,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===a._src||a._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return s&&_&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,l,d,g){var _=this,m=_["_on"+a];return typeof l=="function"&&m.push(g?{id:d,fn:l,once:g}:{id:d,fn:l}),_},off:function(a,l,d){var g=this,_=g["_on"+a],m=0;if(typeof l=="number"&&(d=l,l=null),l||d)for(m=0;m<_.length;m++){var p=d===_[m].id;if(l===_[m].fn&&p||!l&&p){_.splice(m,1);break}}else if(a)g["_on"+a]=[];else{var S=Object.keys(g);for(m=0;m<S.length;m++)S[m].indexOf("_on")===0&&Array.isArray(g[S[m]])&&(g[S[m]]=[])}return g},once:function(a,l,d){var g=this;return g.on(a,l,d,1),g},_emit:function(a,l,d){for(var g=this,_=g["_on"+a],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===l||a==="load")&&(setTimeout((function(p){p.call(this,l,d)}).bind(g,_[m].fn),0),_[m].once&&g.off(a,_[m].fn,_[m].id));return g._loadQueue(a),g},_loadQueue:function(a){var l=this;if(l._queue.length>0){var d=l._queue[0];d.event===a&&(l._queue.shift(),l._loadQueue()),a||d.action()}return l},_ended:function(a){var l=this,d=a._sprite;if(!l._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(l._ended.bind(l,a),100),l;var g=!!(a._loop||l._sprite[d][2]);if(l._emit("end",a._id),!l._webAudio&&g&&l.stop(a._id,!0).play(a._id),l._webAudio&&g){l._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);l._endTimers[a._id]=setTimeout(l._ended.bind(l,a),_)}return l._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,l._clearTimer(a._id),l._cleanBuffer(a._node),t._autoSuspend()),!l._webAudio&&!g&&l.stop(a._id,!0),l},_clearTimer:function(a){var l=this;if(l._endTimers[a]){if(typeof l._endTimers[a]!="function")clearTimeout(l._endTimers[a]);else{var d=l._soundById(a);d&&d._node&&d._node.removeEventListener("ended",l._endTimers[a],!1)}delete l._endTimers[a]}return l},_soundById:function(a){for(var l=this,d=0;d<l._sounds.length;d++)if(a===l._sounds[d]._id)return l._sounds[d];return null},_inactiveSound:function(){var a=this;a._drain();for(var l=0;l<a._sounds.length;l++)if(a._sounds[l]._ended)return a._sounds[l].reset();return new r(a)},_drain:function(){var a=this,l=a._pool,d=0,g=0;if(!(a._sounds.length<l)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&d++;for(g=a._sounds.length-1;g>=0;g--){if(d<=l)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),d--)}}},_getSoundIds:function(a){var l=this;if(typeof a>"u"){for(var d=[],g=0;g<l._sounds.length;g++)d.push(l._sounds[g]._id);return d}else return[a]},_refreshBuffer:function(a){var l=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[l._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),l},_cleanBuffer:function(a){var l=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return l;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),d))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,l},_clearSound:function(a){var l=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);l||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(a){this._parent=a,this.init()};r.prototype={init:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,l._sounds.push(a),a.create(),a},create:function(){var a=this,l=a._parent,d=t._muted||a._muted||a._parent._muted?0:a._volume;return l._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(d,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=l._src,a._node.preload=l._preload===!0?"auto":l._preload,a._node.volume=d*t.volume(),a._node.load()),a},reset:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,l=a._parent;l._duration=Math.ceil(a._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,l=a._parent;l._duration===1/0&&(l._duration=Math.ceil(a._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var l=a._src;if(s[l]){a._duration=s[l].duration,h(a);return}if(/^data:[^;]+;base64,/.test(l)){for(var d=atob(l.split(",")[1]),g=new Uint8Array(d.length),_=0;_<d.length;++_)g[_]=d.charCodeAt(_);u(g.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,l,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){m.setRequestHeader(p,a._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}u(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[l],a.load())},c(m)}},c=function(a){try{a.send()}catch{a.onerror()}},u=function(a,l){var d=function(){l._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&l._sounds.length>0?(s[l._src]=_,h(l,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(g).catch(d):t.ctx.decodeAudioData(a,g,d)},h=function(a,l){l&&!a._duration&&(a._duration=l.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),l=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=l?parseInt(l[1],10):null;if(a&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof jr<"u"?(jr.HowlerGlobal=e,jr.Howler=t,jr.Howl=n,jr.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,o,c){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,r=typeof r!="number"?h[2]:r,s=typeof s!="number"?h[3]:s,o=typeof o!="number"?h[4]:o,c=typeof c!="number"?h[5]:c,typeof t=="number")u._orientation=[t,n,r,s,o,c],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,r,s,o,c);else return h;return u},Howl.prototype.init=function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var o=r._getSoundIds(n),c=0;c<o.length;c++){var u=r._soundById(o[c]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,s),s==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",u._id);else return u._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,r,s)}}),o;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")o._pos=[t,n,r];else return o._pos;for(var c=o._getSoundIds(s),u=0;u<c.length;u++){var h=o._soundById(c[u]);if(h)if(typeof t=="number")h._pos=[t,n,r],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):h._panner.setPosition(t,n,r)),o._emit("pos",h._id);else return h._pos}return o},Howl.prototype.orientation=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,r,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,r=typeof r!="number"?o._orientation[2]:r,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,r];else return o._orientation;for(var c=o._getSoundIds(s),u=0;u<c.length;u++){var h=o._soundById(c[u]);if(h)if(typeof t=="number")h._orientation=[t,n,r],h._node&&(h._panner||(h._pos||(h._pos=o._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,r)),o._emit("orientation",h._id);else return h._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var c=t._getSoundIds(s),u=0;u<c.length;u++)if(o=t._soundById(c[u]),o){var h=o._pannerAttr;h={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:h.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:h.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:h.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:h.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:h.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:h.panningModel};var f=o._panner;f||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),f=o._panner),f.coneInnerAngle=h.coneInnerAngle,f.coneOuterAngle=h.coneOuterAngle,f.coneOuterGain=h.coneOuterGain,f.distanceModel=h.distanceModel,f.maxDistance=h.maxDistance,f.refDistance=h.refDistance,f.rolloffFactor=h.rolloffFactor,f.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(ho)),ho}var ms=Lv();const Dv="End-Of-Stream";let yn=class extends Error{constructor(){super(Dv),this.name="EndOfStreamError"}};class Nv extends Error{constructor(e="The operation was aborted"){super(e),this.name="AbortError"}}let Yh=class{constructor(){this.endOfStream=!1,this.interrupted=!1,this.peekQueue=[]}async peek(e,t=!1){const n=await this.read(e,t);return this.peekQueue.push(e.subarray(0,n)),n}async read(e,t=!1){if(e.length===0)return 0;let n=this.readFromPeekBuffer(e);if(this.endOfStream||(n+=await this.readRemainderFromStream(e.subarray(n),t)),n===0)throw new yn;return n}readFromPeekBuffer(e){let t=e.length,n=0;for(;this.peekQueue.length>0&&t>0;){const r=this.peekQueue.pop();if(!r)throw new Error("peekData should be defined");const s=Math.min(r.length,t);e.set(r.subarray(0,s),n),n+=s,t-=s,s<r.length&&this.peekQueue.push(r.subarray(s))}return n}async readRemainderFromStream(e,t){let n=0;for(;n<e.length&&!this.endOfStream;){if(this.interrupted)throw new Nv;const r=await this.readFromStream(e.subarray(n),t);if(r===0)break;n+=r}if(!t&&n<e.length)throw new yn;return n}},Uv=class extends Yh{constructor(e){super(),this.reader=e}async abort(){return this.close()}async close(){this.reader.releaseLock()}};class Fv extends Uv{async readFromStream(e,t){if(e.length===0)return 0;const n=await this.reader.read(new Uint8Array(e.length),{min:t?void 0:e.length});return n.done&&(this.endOfStream=n.done),n.value?(e.set(n.value),n.value.length):0}}class Iu extends Yh{constructor(e){super(),this.reader=e,this.buffer=null}writeChunk(e,t){const n=Math.min(t.length,e.length);return e.set(t.subarray(0,n)),n<t.length?this.buffer=t.subarray(n):this.buffer=null,n}async readFromStream(e,t){if(e.length===0)return 0;let n=0;for(this.buffer&&(n+=this.writeChunk(e,this.buffer));n<e.length&&!this.endOfStream;){const r=await this.reader.read();if(r.done){this.endOfStream=!0;break}r.value&&(n+=this.writeChunk(e.subarray(n),r.value))}if(n===0&&this.endOfStream)throw new yn;return n}abort(){return this.interrupted=!0,this.reader.cancel()}async close(){await this.abort(),this.reader.releaseLock()}}function Ov(i){try{const e=i.getReader({mode:"byob"});return e instanceof ReadableStreamDefaultReader?new Iu(e):new Fv(e)}catch(e){if(e instanceof TypeError)return new Iu(i.getReader());throw e}}let qh=class{constructor(e){this.numBuffer=new Uint8Array(8),this.position=0,this.onClose=e==null?void 0:e.onClose,e!=null&&e.abortSignal&&e.abortSignal.addEventListener("abort",()=>{this.abort()})}async readToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.readBuffer(n,{position:t})<e.len)throw new yn;return e.get(n,0)}async peekToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.peekBuffer(n,{position:t})<e.len)throw new yn;return e.get(n,0)}async readNumber(e){if(await this.readBuffer(this.numBuffer,{length:e.len})<e.len)throw new yn;return e.get(this.numBuffer,0)}async peekNumber(e){if(await this.peekBuffer(this.numBuffer,{length:e.len})<e.len)throw new yn;return e.get(this.numBuffer,0)}async ignore(e){if(this.fileInfo.size!==void 0){const t=this.fileInfo.size-this.position;if(e>t)return this.position+=t,t}return this.position+=e,e}async close(){var e;await this.abort(),await((e=this.onClose)==null?void 0:e.call(this))}normalizeOptions(e,t){if(!this.supportsRandomAccess()&&t&&t.position!==void 0&&t.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");return{mayBeLess:!1,offset:0,length:e.length,position:this.position,...t}}abort(){return Promise.resolve()}};const Bv=256e3;let kv=class extends qh{constructor(e,t){super(t),this.streamReader=e,this.fileInfo=(t==null?void 0:t.fileInfo)??{}}async readBuffer(e,t){const n=this.normalizeOptions(e,t),r=n.position-this.position;if(r>0)return await this.ignore(r),this.readBuffer(e,t);if(r<0)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");if(n.length===0)return 0;const s=await this.streamReader.read(e.subarray(0,n.length),n.mayBeLess);if(this.position+=s,(!t||!t.mayBeLess)&&s<n.length)throw new yn;return s}async peekBuffer(e,t){const n=this.normalizeOptions(e,t);let r=0;if(n.position){const s=n.position-this.position;if(s>0){const o=new Uint8Array(n.length+s);return r=await this.peekBuffer(o,{mayBeLess:n.mayBeLess}),e.set(o.subarray(s)),r-s}if(s<0)throw new Error("Cannot peek from a negative offset in a stream")}if(n.length>0){try{r=await this.streamReader.peek(e.subarray(0,n.length),n.mayBeLess)}catch(s){if(t!=null&&t.mayBeLess&&s instanceof yn)return 0;throw s}if(!n.mayBeLess&&r<n.length)throw new yn}return r}async ignore(e){const t=Math.min(Bv,e),n=new Uint8Array(t);let r=0;for(;r<e;){const s=e-r,o=await this.readBuffer(n,{length:Math.min(t,s)});if(o<0)return o;r+=o}return r}abort(){return this.streamReader.abort()}async close(){return this.streamReader.close()}supportsRandomAccess(){return!1}},zv=class extends qh{constructor(e,t){super(t),this.uint8Array=e,this.fileInfo={...(t==null?void 0:t.fileInfo)??{},size:e.length}}async readBuffer(e,t){t!=null&&t.position&&(this.position=t.position);const n=await this.peekBuffer(e,t);return this.position+=n,n}async peekBuffer(e,t){const n=this.normalizeOptions(e,t),r=Math.min(this.uint8Array.length-n.position,n.length);if(!n.mayBeLess&&r<n.length)throw new yn;return e.set(this.uint8Array.subarray(n.position,n.position+r)),r}close(){return super.close()}supportsRandomAccess(){return!0}setPosition(e){this.position=e}};function Hv(i,e){const t=Ov(i),n=e??{},r=n.onClose;return n.onClose=async()=>{if(await t.close(),r)return r()},new kv(t,n)}function Pu(i,e){return new zv(i,e)}var Ks={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var Lu;function Gv(){return Lu||(Lu=1,Ks.read=function(i,e,t,n,r){var s,o,c=r*8-n-1,u=(1<<c)-1,h=u>>1,f=-7,a=t?r-1:0,l=t?-1:1,d=i[e+a];for(a+=l,s=d&(1<<-f)-1,d>>=-f,f+=c;f>0;s=s*256+i[e+a],a+=l,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=n;f>0;o=o*256+i[e+a],a+=l,f-=8);if(s===0)s=1-h;else{if(s===u)return o?NaN:(d?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-h}return(d?-1:1)*o*Math.pow(2,s-n)},Ks.write=function(i,e,t,n,r,s){var o,c,u,h=s*8-r-1,f=(1<<h)-1,a=f>>1,l=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,g=n?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),o+a>=1?e+=l/u:e+=l*Math.pow(2,1-a),e*u>=2&&(o++,u/=2),o+a>=f?(c=0,o=f):o+a>=1?(c=(e*u-1)*Math.pow(2,r),o=o+a):(c=e*Math.pow(2,a-1)*Math.pow(2,r),o=0));r>=8;i[t+d]=c&255,d+=g,c/=256,r-=8);for(o=o<<r|c,h+=r;h>0;i[t+d]=o&255,d+=g,o/=256,h-=8);i[t+d-g]|=_*128}),Ks}var Mi=Gv();function Le(i){return new DataView(i.buffer,i.byteOffset)}const Gi={len:1,get(i,e){return Le(i).getUint8(e)},put(i,e,t){return Le(i).setUint8(e,t),e+1}},mi={len:2,get(i,e){return Le(i).getUint16(e,!0)},put(i,e,t){return Le(i).setUint16(e,t,!0),e+2}},rs={len:2,get(i,e){return Le(i).getUint16(e)},put(i,e,t){return Le(i).setUint16(e,t),e+2}},jh={len:3,get(i,e){const t=Le(i);return t.getUint8(e)+(t.getUint16(e+1,!0)<<8)},put(i,e,t){const n=Le(i);return n.setUint8(e,t&255),n.setUint16(e+1,t>>8,!0),e+3}},Kh={len:3,get(i,e){const t=Le(i);return(t.getUint16(e)<<8)+t.getUint8(e+2)},put(i,e,t){const n=Le(i);return n.setUint16(e,t>>8),n.setUint8(e+2,t&255),e+3}},pt={len:4,get(i,e){return Le(i).getUint32(e,!0)},put(i,e,t){return Le(i).setUint32(e,t,!0),e+4}},ga={len:4,get(i,e){return Le(i).getUint32(e)},put(i,e,t){return Le(i).setUint32(e,t),e+4}},hc={len:1,get(i,e){return Le(i).getInt8(e)},put(i,e,t){return Le(i).setInt8(e,t),e+1}},Vv={len:2,get(i,e){return Le(i).getInt16(e)},put(i,e,t){return Le(i).setInt16(e,t),e+2}},Wv={len:2,get(i,e){return Le(i).getInt16(e,!0)},put(i,e,t){return Le(i).setInt16(e,t,!0),e+2}},Xv={len:3,get(i,e){const t=jh.get(i,e);return t>8388607?t-16777216:t},put(i,e,t){const n=Le(i);return n.setUint8(e,t&255),n.setUint16(e+1,t>>8,!0),e+3}},Yv={len:3,get(i,e){const t=Kh.get(i,e);return t>8388607?t-16777216:t},put(i,e,t){const n=Le(i);return n.setUint16(e,t>>8),n.setUint8(e+2,t&255),e+3}},Zh={len:4,get(i,e){return Le(i).getInt32(e)},put(i,e,t){return Le(i).setInt32(e,t),e+4}},qv={len:4,get(i,e){return Le(i).getInt32(e,!0)},put(i,e,t){return Le(i).setInt32(e,t,!0),e+4}},$h={len:8,get(i,e){return Le(i).getBigUint64(e,!0)},put(i,e,t){return Le(i).setBigUint64(e,t,!0),e+8}},jv={len:8,get(i,e){return Le(i).getBigInt64(e,!0)},put(i,e,t){return Le(i).setBigInt64(e,t,!0),e+8}},Kv={len:8,get(i,e){return Le(i).getBigUint64(e)},put(i,e,t){return Le(i).setBigUint64(e,t),e+8}},Zv={len:8,get(i,e){return Le(i).getBigInt64(e)},put(i,e,t){return Le(i).setBigInt64(e,t),e+8}},$v={len:2,get(i,e){return Mi.read(i,e,!1,10,this.len)},put(i,e,t){return Mi.write(i,t,e,!1,10,this.len),e+this.len}},Jv={len:2,get(i,e){return Mi.read(i,e,!0,10,this.len)},put(i,e,t){return Mi.write(i,t,e,!0,10,this.len),e+this.len}},Qv={len:4,get(i,e){return Le(i).getFloat32(e)},put(i,e,t){return Le(i).setFloat32(e,t),e+4}},ey={len:4,get(i,e){return Le(i).getFloat32(e,!0)},put(i,e,t){return Le(i).setFloat32(e,t,!0),e+4}},ty={len:8,get(i,e){return Le(i).getFloat64(e)},put(i,e,t){return Le(i).setFloat64(e,t),e+8}},ny={len:8,get(i,e){return Le(i).getFloat64(e,!0)},put(i,e,t){return Le(i).setFloat64(e,t,!0),e+8}},iy={len:10,get(i,e){return Mi.read(i,e,!1,63,this.len)},put(i,e,t){return Mi.write(i,t,e,!1,63,this.len),e+this.len}},ry={len:10,get(i,e){return Mi.read(i,e,!0,63,this.len)},put(i,e,t){return Mi.write(i,t,e,!0,63,this.len),e+this.len}};class sy{constructor(e){this.len=e}get(e,t){}}class Jh{constructor(e){this.len=e}get(e,t){return e.subarray(t,t+this.len)}}class At{constructor(e,t){this.len=e,this.encoding=t,this.textDecoder=new TextDecoder(t)}get(e,t){return this.textDecoder.decode(e.subarray(t,t+this.len))}}class ay{constructor(e){this.len=e,this.textDecoder=new TextDecoder("windows-1252")}get(e,t=0){return this.textDecoder.decode(e.subarray(t,t+this.len))}}const xS=Object.freeze(Object.defineProperty({__proto__:null,AnsiStringType:ay,Float16_BE:$v,Float16_LE:Jv,Float32_BE:Qv,Float32_LE:ey,Float64_BE:ty,Float64_LE:ny,Float80_BE:iy,Float80_LE:ry,INT16_BE:Vv,INT16_LE:Wv,INT24_BE:Yv,INT24_LE:Xv,INT32_BE:Zh,INT32_LE:qv,INT64_BE:Zv,INT64_LE:jv,INT8:hc,IgnoreType:sy,StringType:At,UINT16_BE:rs,UINT16_LE:mi,UINT24_BE:Kh,UINT24_LE:jh,UINT32_BE:ga,UINT32_LE:pt,UINT64_BE:Kv,UINT64_LE:$h,UINT8:Gi,Uint8ArrayType:Jh},Symbol.toStringTag,{value:"Module"})),oy="End-Of-Stream";class $t extends Error{constructor(){super(oy)}}class cy{constructor(){this.maxStreamReadSize=1*1024*1024,this.endOfStream=!1,this.peekQueue=[]}async peek(e,t,n){const r=await this.read(e,t,n);return this.peekQueue.push(e.subarray(t,t+r)),r}async read(e,t,n){if(n===0)return 0;let r=this.readFromPeekBuffer(e,t,n);if(r+=await this.readRemainderFromStream(e,t+r,n-r),r===0)throw new $t;return r}readFromPeekBuffer(e,t,n){let r=n,s=0;for(;this.peekQueue.length>0&&r>0;){const o=this.peekQueue.pop();if(!o)throw new Error("peekData should be defined");const c=Math.min(o.length,r);e.set(o.subarray(0,c),t+s),s+=c,r-=c,c<o.length&&this.peekQueue.push(o.subarray(c))}return s}async readRemainderFromStream(e,t,n){let r=n,s=0;for(;r>0&&!this.endOfStream;){const o=Math.min(r,this.maxStreamReadSize),c=await this.readFromStream(e,t+s,o);if(c===0)break;s+=c,r-=c}return s}}class ly extends cy{constructor(e){super(),this.reader=e.getReader({mode:"byob"})}async readFromStream(e,t,n){if(this.endOfStream)throw new $t;const r=await this.reader.read(new Uint8Array(n));return r.done&&(this.endOfStream=r.done),r.value?(e.set(r.value,t),r.value.byteLength):0}abort(){return this.reader.cancel()}async close(){await this.abort(),this.reader.releaseLock()}}class Qh{constructor(e){this.numBuffer=new Uint8Array(8),this.position=0,this.onClose=e==null?void 0:e.onClose,e!=null&&e.abortSignal&&e.abortSignal.addEventListener("abort",()=>{this.abort()})}async readToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.readBuffer(n,{position:t})<e.len)throw new $t;return e.get(n,0)}async peekToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.peekBuffer(n,{position:t})<e.len)throw new $t;return e.get(n,0)}async readNumber(e){if(await this.readBuffer(this.numBuffer,{length:e.len})<e.len)throw new $t;return e.get(this.numBuffer,0)}async peekNumber(e){if(await this.peekBuffer(this.numBuffer,{length:e.len})<e.len)throw new $t;return e.get(this.numBuffer,0)}async ignore(e){if(this.fileInfo.size!==void 0){const t=this.fileInfo.size-this.position;if(e>t)return this.position+=t,t}return this.position+=e,e}async close(){var e;await this.abort(),await((e=this.onClose)==null?void 0:e.call(this))}normalizeOptions(e,t){if(t&&t.position!==void 0&&t.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");return t?{mayBeLess:t.mayBeLess===!0,offset:t.offset?t.offset:0,length:t.length?t.length:e.length-(t.offset?t.offset:0),position:t.position?t.position:this.position}:{mayBeLess:!1,offset:0,length:e.length,position:this.position}}abort(){return Promise.resolve()}}const uy=256e3;class hy extends Qh{constructor(e,t){super(t),this.streamReader=e,this.fileInfo=(t==null?void 0:t.fileInfo)??{}}async readBuffer(e,t){const n=this.normalizeOptions(e,t),r=n.position-this.position;if(r>0)return await this.ignore(r),this.readBuffer(e,t);if(r<0)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");if(n.length===0)return 0;const s=await this.streamReader.read(e,n.offset,n.length);if(this.position+=s,(!t||!t.mayBeLess)&&s<n.length)throw new $t;return s}async peekBuffer(e,t){const n=this.normalizeOptions(e,t);let r=0;if(n.position){const s=n.position-this.position;if(s>0){const o=new Uint8Array(n.length+s);return r=await this.peekBuffer(o,{mayBeLess:n.mayBeLess}),e.set(o.subarray(s),n.offset),r-s}if(s<0)throw new Error("Cannot peek from a negative offset in a stream")}if(n.length>0){try{r=await this.streamReader.peek(e,n.offset,n.length)}catch(s){if(t!=null&&t.mayBeLess&&s instanceof $t)return 0;throw s}if(!n.mayBeLess&&r<n.length)throw new $t}return r}async ignore(e){const t=Math.min(uy,e),n=new Uint8Array(t);let r=0;for(;r<e;){const s=e-r,o=await this.readBuffer(n,{length:Math.min(t,s)});if(o<0)return o;r+=o}return r}abort(){return this.streamReader.abort()}supportsRandomAccess(){return!1}}class dy extends Qh{constructor(e,t){super(t),this.uint8Array=e,this.fileInfo={...(t==null?void 0:t.fileInfo)??{},size:e.length}}async readBuffer(e,t){if(t!=null&&t.position){if(t.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");this.position=t.position}const n=await this.peekBuffer(e,t);return this.position+=n,n}async peekBuffer(e,t){const n=this.normalizeOptions(e,t),r=Math.min(this.uint8Array.length-n.position,n.length);if(!n.mayBeLess&&r<n.length)throw new $t;return e.set(this.uint8Array.subarray(n.position,n.position+r),n.offset),r}close(){return super.close()}supportsRandomAccess(){return!0}setPosition(e){this.position=e}}function fy(i,e){return new hy(new ly(i),e)}function py(i,e){return new dy(i,e)}const my=Object.prototype.toString,gy="[object Uint8Array]",_y="[object ArrayBuffer]";function ed(i,e,t){return i?i.constructor===e?!0:my.call(i)===t:!1}function td(i){return ed(i,Uint8Array,gy)}function xy(i){return ed(i,ArrayBuffer,_y)}function vy(i){return td(i)||xy(i)}function yy(i){if(!td(i))throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof i}\``)}function My(i){if(!vy(i))throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof i}\``)}const Zs={utf8:new globalThis.TextDecoder("utf8")};function nd(i,e="utf8"){return My(i),Zs[e]??(Zs[e]=new globalThis.TextDecoder(e)),Zs[e].decode(i)}function id(i){if(typeof i!="string")throw new TypeError(`Expected \`string\`, got \`${typeof i}\``)}const Sy=new globalThis.TextEncoder;function Ty(i){return id(i),Sy.encode(i)}const Ey=Array.from({length:256},(i,e)=>e.toString(16).padStart(2,"0"));function vS(i){yy(i);let e="";for(let t=0;t<i.length;t++)e+=Ey[i[t]];return e}const Du={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15};function yS(i){if(id(i),i.length%2!==0)throw new Error("Invalid Hex string length.");const e=i.length/2,t=new Uint8Array(e);for(let n=0;n<e;n++){const r=Du[i[n*2]],s=Du[i[n*2+1]];if(r===void 0||s===void 0)throw new Error(`Invalid Hex character encountered at position ${n*2}`);t[n]=r<<4|s}return t}function Nu(i){const{byteLength:e}=i;if(e===6)return i.getUint16(0)*2**32+i.getUint32(2);if(e===5)return i.getUint8(0)*2**32+i.getUint32(1);if(e===4)return i.getUint32(0);if(e===3)return i.getUint8(0)*2**16+i.getUint16(1);if(e===2)return i.getUint16(0);if(e===1)return i.getUint8(0)}function rd(i,e){const t=i.length,n=e.length;if(n===0||n>t)return-1;const r=t-n;for(let s=0;s<=r;s++){let o=!0;for(let c=0;c<n;c++)if(i[s+c]!==e[c]){o=!1;break}if(o)return s}return-1}function by(i,e){return rd(i,e)!==-1}function Ay(i){return[...i].map(e=>e.charCodeAt(0))}function wy(i,e=0){const t=Number.parseInt(new At(6).get(i,148).replace(/\0.*$/,"").trim(),8);if(Number.isNaN(t))return!1;let n=8*32;for(let r=e;r<e+148;r++)n+=i[r];for(let r=e+156;r<e+512;r++)n+=i[r];return t===n}const Ry={get:(i,e)=>i[e+3]&127|i[e+2]<<7|i[e+1]<<14|i[e]<<21,len:4},Cy=["jpg","png","apng","gif","webp","flif","xcf","cr2","cr3","orf","arw","dng","nef","rw2","raf","tif","bmp","icns","jxr","psd","indd","zip","tar","rar","gz","bz2","7z","dmg","mp4","mid","mkv","webm","mov","avi","mpg","mp2","mp3","m4a","oga","ogg","ogv","opus","flac","wav","spx","amr","pdf","epub","elf","macho","exe","swf","rtf","wasm","woff","woff2","eot","ttf","otf","ico","flv","ps","xz","sqlite","nes","crx","xpi","cab","deb","ar","rpm","Z","lz","cfb","mxf","mts","blend","bpg","docx","pptx","xlsx","3gp","3g2","j2c","jp2","jpm","jpx","mj2","aif","qcp","odt","ods","odp","xml","mobi","heic","cur","ktx","ape","wv","dcm","ics","glb","pcap","dsf","lnk","alias","voc","ac3","m4v","m4p","m4b","f4v","f4p","f4b","f4a","mie","asf","ogm","ogx","mpc","arrow","shp","aac","mp1","it","s3m","xm","ai","skp","avif","eps","lzh","pgp","asar","stl","chm","3mf","zst","jxl","vcf","jls","pst","dwg","parquet","class","arj","cpio","ace","avro","icc","fbx","vsdx","vtt","apk"],Iy=["image/jpeg","image/png","image/gif","image/webp","image/flif","image/x-xcf","image/x-canon-cr2","image/x-canon-cr3","image/tiff","image/bmp","image/vnd.ms-photo","image/vnd.adobe.photoshop","application/x-indesign","application/epub+zip","application/x-xpinstall","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/zip","application/x-tar","application/x-rar-compressed","application/gzip","application/x-bzip2","application/x-7z-compressed","application/x-apple-diskimage","application/x-apache-arrow","video/mp4","audio/midi","video/x-matroska","video/webm","video/quicktime","video/vnd.avi","audio/wav","audio/qcelp","audio/x-ms-asf","video/x-ms-asf","application/vnd.ms-asf","video/mpeg","video/3gpp","audio/mpeg","audio/mp4","video/ogg","audio/ogg","audio/ogg; codecs=opus","application/ogg","audio/x-flac","audio/ape","audio/wavpack","audio/amr","application/pdf","application/x-elf","application/x-mach-binary","application/x-msdownload","application/x-shockwave-flash","application/rtf","application/wasm","font/woff","font/woff2","application/vnd.ms-fontobject","font/ttf","font/otf","image/x-icon","video/x-flv","application/postscript","application/eps","application/x-xz","application/x-sqlite3","application/x-nintendo-nes-rom","application/x-google-chrome-extension","application/vnd.ms-cab-compressed","application/x-deb","application/x-unix-archive","application/x-rpm","application/x-compress","application/x-lzip","application/x-cfb","application/x-mie","application/mxf","video/mp2t","application/x-blender","image/bpg","image/j2c","image/jp2","image/jpx","image/jpm","image/mj2","audio/aiff","application/xml","application/x-mobipocket-ebook","image/heif","image/heif-sequence","image/heic","image/heic-sequence","image/icns","image/ktx","application/dicom","audio/x-musepack","text/calendar","text/vcard","text/vtt","model/gltf-binary","application/vnd.tcpdump.pcap","audio/x-dsf","application/x.ms.shortcut","application/x.apple.alias","audio/x-voc","audio/vnd.dolby.dd-raw","audio/x-m4a","image/apng","image/x-olympus-orf","image/x-sony-arw","image/x-adobe-dng","image/x-nikon-nef","image/x-panasonic-rw2","image/x-fujifilm-raf","video/x-m4v","video/3gpp2","application/x-esri-shape","audio/aac","audio/x-it","audio/x-s3m","audio/x-xm","video/MP1S","video/MP2P","application/vnd.sketchup.skp","image/avif","application/x-lzh-compressed","application/pgp-encrypted","application/x-asar","model/stl","application/vnd.ms-htmlhelp","model/3mf","image/jxl","application/zstd","image/jls","application/vnd.ms-outlook","image/vnd.dwg","application/x-parquet","application/java-vm","application/x-arj","application/x-cpio","application/x-ace-compressed","application/avro","application/vnd.iccprofile","application/x.autodesk.fbx","application/vnd.visio","application/vnd.android.package-archive"],Uu=4100;async function sd(i){return new Py().fromBuffer(i)}function En(i,e,t){t={offset:0,...t};for(const[n,r]of e.entries())if(t.mask){if(r!==(t.mask[n]&i[n+t.offset]))return!1}else if(r!==i[n+t.offset])return!1;return!0}class Py{constructor(e){this.detectors=e==null?void 0:e.customDetectors,this.tokenizerOptions={abortSignal:e==null?void 0:e.signal},this.fromTokenizer=this.fromTokenizer.bind(this),this.fromBuffer=this.fromBuffer.bind(this),this.parse=this.parse.bind(this)}async fromTokenizer(e){const t=e.position;for(const n of this.detectors||[]){const r=await n(e);if(r)return r;if(t!==e.position)return}return this.parse(e)}async fromBuffer(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer))throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);const t=e instanceof Uint8Array?e:new Uint8Array(e);if((t==null?void 0:t.length)>1)return this.fromTokenizer(py(t,this.tokenizerOptions))}async fromBlob(e){return this.fromStream(e.stream())}async fromStream(e){const t=await fy(e,this.tokenizerOptions);try{return await this.fromTokenizer(t)}finally{await t.close()}}async toDetectionStream(e,t){const{sampleSize:n=Uu}=t;let r,s;const o=e.getReader({mode:"byob"});try{const{value:h,done:f}=await o.read(new Uint8Array(n));if(s=h,!f&&h)try{r=await this.fromBuffer(h.slice(0,n))}catch(a){if(!(a instanceof $t))throw a;r=void 0}s=h}finally{o.releaseLock()}const c=new TransformStream({async start(h){h.enqueue(s)},transform(h,f){f.enqueue(h)}}),u=e.pipeThrough(c);return u.fileType=r,u}check(e,t){return En(this.buffer,e,t)}checkString(e,t){return this.check(Ay(e),t)}async parse(e){if(this.buffer=new Uint8Array(Uu),e.fileInfo.size===void 0&&(e.fileInfo.size=Number.MAX_SAFE_INTEGER),this.tokenizer=e,await e.peekBuffer(this.buffer,{length:12,mayBeLess:!0}),this.check([66,77]))return{ext:"bmp",mime:"image/bmp"};if(this.check([11,119]))return{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"};if(this.check([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(this.check([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if(this.check([37,33]))return await e.peekBuffer(this.buffer,{length:24,mayBeLess:!0}),this.checkString("PS-Adobe-",{offset:2})&&this.checkString(" EPSF-",{offset:14})?{ext:"eps",mime:"application/eps"}:{ext:"ps",mime:"application/postscript"};if(this.check([31,160])||this.check([31,157]))return{ext:"Z",mime:"application/x-compress"};if(this.check([199,113]))return{ext:"cpio",mime:"application/x-cpio"};if(this.check([96,234]))return{ext:"arj",mime:"application/x-arj"};if(this.check([239,187,191]))return this.tokenizer.ignore(3),this.parse(e);if(this.check([71,73,70]))return{ext:"gif",mime:"image/gif"};if(this.check([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(this.check([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(this.check([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(this.checkString("ID3")){await e.ignore(6);const t=await e.readToken(Ry);return e.position+t>e.fileInfo.size?{ext:"mp3",mime:"audio/mpeg"}:(await e.ignore(t),this.fromTokenizer(e))}if(this.checkString("MP+"))return{ext:"mpc",mime:"audio/x-musepack"};if((this.buffer[0]===67||this.buffer[0]===70)&&this.check([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(this.check([255,216,255]))return this.check([247],{offset:3})?{ext:"jls",mime:"image/jls"}:{ext:"jpg",mime:"image/jpeg"};if(this.check([79,98,106,1]))return{ext:"avro",mime:"application/avro"};if(this.checkString("FLIF"))return{ext:"flif",mime:"image/flif"};if(this.checkString("8BPS"))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};if(this.checkString("WEBP",{offset:8}))return{ext:"webp",mime:"image/webp"};if(this.checkString("MPCK"))return{ext:"mpc",mime:"audio/x-musepack"};if(this.checkString("FORM"))return{ext:"aif",mime:"audio/aiff"};if(this.checkString("icns",{offset:0}))return{ext:"icns",mime:"image/icns"};if(this.check([80,75,3,4])){try{for(;e.position+30<e.fileInfo.size;){await e.readBuffer(this.buffer,{length:30});const t=new DataView(this.buffer.buffer),n={compressedSize:t.getUint32(18,!0),uncompressedSize:t.getUint32(22,!0),filenameLength:t.getUint16(26,!0),extraFieldLength:t.getUint16(28,!0)};if(n.filename=await e.readToken(new At(n.filenameLength,"utf-8")),await e.ignore(n.extraFieldLength),/classes\d*\.dex/.test(n.filename))return{ext:"apk",mime:"application/vnd.android.package-archive"};if(n.filename==="META-INF/mozilla.rsa")return{ext:"xpi",mime:"application/x-xpinstall"};if(n.filename.endsWith(".rels")||n.filename.endsWith(".xml"))switch(n.filename.split("/")[0]){case"_rels":break;case"word":return{ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};case"ppt":return{ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"};case"xl":return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};case"visio":return{ext:"vsdx",mime:"application/vnd.visio"};default:break}if(n.filename.startsWith("xl/"))return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};if(n.filename.startsWith("3D/")&&n.filename.endsWith(".model"))return{ext:"3mf",mime:"model/3mf"};if(n.filename==="mimetype"&&n.compressedSize===n.uncompressedSize){let r=await e.readToken(new At(n.compressedSize,"utf-8"));switch(r=r.trim(),r){case"application/epub+zip":return{ext:"epub",mime:"application/epub+zip"};case"application/vnd.oasis.opendocument.text":return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};case"application/vnd.oasis.opendocument.spreadsheet":return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};case"application/vnd.oasis.opendocument.presentation":return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"};default:}}if(n.compressedSize===0){let r=-1;for(;r<0&&e.position<e.fileInfo.size;)await e.peekBuffer(this.buffer,{mayBeLess:!0}),r=rd(this.buffer,new Uint8Array([80,75,3,4])),await e.ignore(r>=0?r:this.buffer.length)}else await e.ignore(n.compressedSize)}}catch(t){if(!(t instanceof $t))throw t}return{ext:"zip",mime:"application/zip"}}if(this.checkString("OggS")){await e.ignore(28);const t=new Uint8Array(8);return await e.readBuffer(t),En(t,[79,112,117,115,72,101,97,100])?{ext:"opus",mime:"audio/ogg; codecs=opus"}:En(t,[128,116,104,101,111,114,97])?{ext:"ogv",mime:"video/ogg"}:En(t,[1,118,105,100,101,111,0])?{ext:"ogm",mime:"video/ogg"}:En(t,[127,70,76,65,67])?{ext:"oga",mime:"audio/ogg"}:En(t,[83,112,101,101,120,32,32])?{ext:"spx",mime:"audio/ogg"}:En(t,[1,118,111,114,98,105,115])?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"}}if(this.check([80,75])&&(this.buffer[2]===3||this.buffer[2]===5||this.buffer[2]===7)&&(this.buffer[3]===4||this.buffer[3]===6||this.buffer[3]===8))return{ext:"zip",mime:"application/zip"};if(this.checkString("ftyp",{offset:4})&&(this.buffer[8]&96)!==0){const t=new At(4,"latin1").get(this.buffer,8).replace("\0"," ").trim();switch(t){case"avif":case"avis":return{ext:"avif",mime:"image/avif"};case"mif1":return{ext:"heic",mime:"image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt":return{ext:"mov",mime:"video/quicktime"};case"M4V":case"M4VH":case"M4VP":return{ext:"m4v",mime:"video/x-m4v"};case"M4P":return{ext:"m4p",mime:"video/mp4"};case"M4B":return{ext:"m4b",mime:"audio/mp4"};case"M4A":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V":return{ext:"f4v",mime:"video/mp4"};case"F4P":return{ext:"f4p",mime:"video/mp4"};case"F4A":return{ext:"f4a",mime:"audio/mp4"};case"F4B":return{ext:"f4b",mime:"audio/mp4"};case"crx":return{ext:"cr3",mime:"image/x-canon-cr3"};default:return t.startsWith("3g")?t.startsWith("3g2")?{ext:"3g2",mime:"video/3gpp2"}:{ext:"3gp",mime:"video/3gpp"}:{ext:"mp4",mime:"video/mp4"}}}if(this.checkString("MThd"))return{ext:"mid",mime:"audio/midi"};if(this.checkString("wOFF")&&(this.check([0,1,0,0],{offset:4})||this.checkString("OTTO",{offset:4})))return{ext:"woff",mime:"font/woff"};if(this.checkString("wOF2")&&(this.check([0,1,0,0],{offset:4})||this.checkString("OTTO",{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(this.check([212,195,178,161])||this.check([161,178,195,212]))return{ext:"pcap",mime:"application/vnd.tcpdump.pcap"};if(this.checkString("DSD "))return{ext:"dsf",mime:"audio/x-dsf"};if(this.checkString("LZIP"))return{ext:"lz",mime:"application/x-lzip"};if(this.checkString("fLaC"))return{ext:"flac",mime:"audio/x-flac"};if(this.check([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(this.checkString("wvpk"))return{ext:"wv",mime:"audio/wavpack"};if(this.checkString("%PDF")){try{await e.ignore(1350);const t=10*1024*1024,n=new Uint8Array(Math.min(t,e.fileInfo.size));if(await e.readBuffer(n,{mayBeLess:!0}),by(n,new TextEncoder().encode("AIPrivateData")))return{ext:"ai",mime:"application/postscript"}}catch(t){if(!(t instanceof $t))throw t}return{ext:"pdf",mime:"application/pdf"}}if(this.check([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(this.check([73,73])){const t=await this.readTiffHeader(!1);if(t)return t}if(this.check([77,77])){const t=await this.readTiffHeader(!0);if(t)return t}if(this.checkString("MAC "))return{ext:"ape",mime:"audio/ape"};if(this.check([26,69,223,163])){async function t(){const c=await e.peekNumber(Gi);let u=128,h=0;for(;(c&u)===0&&u!==0;)++h,u>>=1;const f=new Uint8Array(h+1);return await e.readBuffer(f),f}async function n(){const c=await t(),u=await t();u[0]^=128>>u.length-1;const h=Math.min(6,u.length),f=new DataView(c.buffer),a=new DataView(u.buffer,u.length-h,h);return{id:Nu(f),len:Nu(a)}}async function r(c){for(;c>0;){const u=await n();if(u.id===17026)return(await e.readToken(new At(u.len))).replaceAll(/\00.*$/g,"");await e.ignore(u.len),--c}}const s=await n();switch(await r(s.len)){case"webm":return{ext:"webm",mime:"video/webm"};case"matroska":return{ext:"mkv",mime:"video/x-matroska"};default:return}}if(this.check([82,73,70,70])){if(this.check([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(this.check([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/wav"};if(this.check([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(this.checkString("SQLi"))return{ext:"sqlite",mime:"application/x-sqlite3"};if(this.check([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(this.checkString("Cr24"))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(this.checkString("MSCF")||this.checkString("ISc("))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(this.check([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(this.check([197,208,211,198]))return{ext:"eps",mime:"application/eps"};if(this.check([40,181,47,253]))return{ext:"zst",mime:"application/zstd"};if(this.check([127,69,76,70]))return{ext:"elf",mime:"application/x-elf"};if(this.check([33,66,68,78]))return{ext:"pst",mime:"application/vnd.ms-outlook"};if(this.checkString("PAR1"))return{ext:"parquet",mime:"application/x-parquet"};if(this.check([207,250,237,254]))return{ext:"macho",mime:"application/x-mach-binary"};if(this.check([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(this.checkString("#!AMR"))return{ext:"amr",mime:"audio/amr"};if(this.checkString("{\\rtf"))return{ext:"rtf",mime:"application/rtf"};if(this.check([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(this.checkString("IMPM"))return{ext:"it",mime:"audio/x-it"};if(this.checkString("-lh0-",{offset:2})||this.checkString("-lh1-",{offset:2})||this.checkString("-lh2-",{offset:2})||this.checkString("-lh3-",{offset:2})||this.checkString("-lh4-",{offset:2})||this.checkString("-lh5-",{offset:2})||this.checkString("-lh6-",{offset:2})||this.checkString("-lh7-",{offset:2})||this.checkString("-lzs-",{offset:2})||this.checkString("-lz4-",{offset:2})||this.checkString("-lz5-",{offset:2})||this.checkString("-lhd-",{offset:2}))return{ext:"lzh",mime:"application/x-lzh-compressed"};if(this.check([0,0,1,186])){if(this.check([33],{offset:4,mask:[241]}))return{ext:"mpg",mime:"video/MP1S"};if(this.check([68],{offset:4,mask:[196]}))return{ext:"mpg",mime:"video/MP2P"}}if(this.checkString("ITSF"))return{ext:"chm",mime:"application/vnd.ms-htmlhelp"};if(this.check([202,254,186,190]))return{ext:"class",mime:"application/java-vm"};if(this.check([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(this.checkString("<?xml "))return{ext:"xml",mime:"application/xml"};if(this.check([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(this.check([82,97,114,33,26,7])&&(this.buffer[6]===0||this.buffer[6]===1))return{ext:"rar",mime:"application/x-rar-compressed"};if(this.checkString("solid "))return{ext:"stl",mime:"model/stl"};if(this.checkString("AC")){const t=new At(4,"latin1").get(this.buffer,2);if(t.match("^d*")&&t>=1e3&&t<=1050)return{ext:"dwg",mime:"image/vnd.dwg"}}if(this.checkString("070707"))return{ext:"cpio",mime:"application/x-cpio"};if(this.checkString("BLENDER"))return{ext:"blend",mime:"application/x-blender"};if(this.checkString("!<arch>"))return await e.ignore(8),await e.readToken(new At(13,"ascii"))==="debian-binary"?{ext:"deb",mime:"application/x-deb"}:{ext:"ar",mime:"application/x-unix-archive"};if(this.checkString("WEBVTT")&&[`
`,"\r","	"," ","\0"].some(t=>this.checkString(t,{offset:6})))return{ext:"vtt",mime:"text/vtt"};if(this.check([137,80,78,71,13,10,26,10])){await e.ignore(8);async function t(){return{length:await e.readToken(Zh),type:await e.readToken(new At(4,"latin1"))}}do{const n=await t();if(n.length<0)return;switch(n.type){case"IDAT":return{ext:"png",mime:"image/png"};case"acTL":return{ext:"apng",mime:"image/apng"};default:await e.ignore(n.length+4)}}while(e.position+8<e.fileInfo.size);return{ext:"png",mime:"image/png"}}if(this.check([65,82,82,79,87,49,0,0]))return{ext:"arrow",mime:"application/x-apache-arrow"};if(this.check([103,108,84,70,2,0,0,0]))return{ext:"glb",mime:"model/gltf-binary"};if(this.check([102,114,101,101],{offset:4})||this.check([109,100,97,116],{offset:4})||this.check([109,111,111,118],{offset:4})||this.check([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};if(this.check([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(this.checkString("gimp xcf "))return{ext:"xcf",mime:"image/x-xcf"};if(this.check([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"image/x-panasonic-rw2"};if(this.check([48,38,178,117,142,102,207,17,166,217])){async function t(){const n=new Uint8Array(16);return await e.readBuffer(n),{id:n,size:Number(await e.readToken($h))}}for(await e.ignore(30);e.position+24<e.fileInfo.size;){const n=await t();let r=n.size-24;if(En(n.id,[145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101])){const s=new Uint8Array(16);if(r-=await e.readBuffer(s),En(s,[64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"audio/x-ms-asf"};if(En(s,[192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"video/x-ms-asf"};break}await e.ignore(r)}return{ext:"asf",mime:"application/vnd.ms-asf"}}if(this.check([171,75,84,88,32,49,49,187,13,10,26,10]))return{ext:"ktx",mime:"image/ktx"};if((this.check([126,16,4])||this.check([126,24,4]))&&this.check([48,77,73,69],{offset:4}))return{ext:"mie",mime:"application/x-mie"};if(this.check([39,10,0,0,0,0,0,0,0,0,0,0],{offset:2}))return{ext:"shp",mime:"application/x-esri-shape"};if(this.check([255,79,255,81]))return{ext:"j2c",mime:"image/j2c"};if(this.check([0,0,0,12,106,80,32,32,13,10,135,10]))switch(await e.ignore(20),await e.readToken(new At(4,"ascii"))){case"jp2 ":return{ext:"jp2",mime:"image/jp2"};case"jpx ":return{ext:"jpx",mime:"image/jpx"};case"jpm ":return{ext:"jpm",mime:"image/jpm"};case"mjp2":return{ext:"mj2",mime:"image/mj2"};default:return}if(this.check([255,10])||this.check([0,0,0,12,74,88,76,32,13,10,135,10]))return{ext:"jxl",mime:"image/jxl"};if(this.check([254,255]))return this.check([0,60,0,63,0,120,0,109,0,108],{offset:2})?{ext:"xml",mime:"application/xml"}:void 0;if(this.check([0,0,1,186])||this.check([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};if(this.check([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(this.check([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(this.check([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(this.check([208,207,17,224,161,177,26,225]))return{ext:"cfb",mime:"application/x-cfb"};if(await e.peekBuffer(this.buffer,{length:Math.min(256,e.fileInfo.size),mayBeLess:!0}),this.check([97,99,115,112],{offset:36}))return{ext:"icc",mime:"application/vnd.iccprofile"};if(this.checkString("**ACE",{offset:7})&&this.checkString("**",{offset:12}))return{ext:"ace",mime:"application/x-ace-compressed"};if(this.checkString("BEGIN:")){if(this.checkString("VCARD",{offset:6}))return{ext:"vcf",mime:"text/vcard"};if(this.checkString("VCALENDAR",{offset:6}))return{ext:"ics",mime:"text/calendar"}}if(this.checkString("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifilm-raf"};if(this.checkString("Extended Module:"))return{ext:"xm",mime:"audio/x-xm"};if(this.checkString("Creative Voice File"))return{ext:"voc",mime:"audio/x-voc"};if(this.check([4,0,0,0])&&this.buffer.length>=16){const t=new DataView(this.buffer.buffer).getUint32(12,!0);if(t>12&&this.buffer.length>=t+16)try{const n=new TextDecoder().decode(this.buffer.slice(16,t+16));if(JSON.parse(n).files)return{ext:"asar",mime:"application/x-asar"}}catch{}}if(this.check([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(this.checkString("SCRM",{offset:44}))return{ext:"s3m",mime:"audio/x-s3m"};if(this.check([71])&&this.check([71],{offset:188}))return{ext:"mts",mime:"video/mp2t"};if(this.check([71],{offset:4})&&this.check([71],{offset:196}))return{ext:"mts",mime:"video/mp2t"};if(this.check([66,79,79,75,77,79,66,73],{offset:60}))return{ext:"mobi",mime:"application/x-mobipocket-ebook"};if(this.check([68,73,67,77],{offset:128}))return{ext:"dcm",mime:"application/dicom"};if(this.check([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70]))return{ext:"lnk",mime:"application/x.ms.shortcut"};if(this.check([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]))return{ext:"alias",mime:"application/x.apple.alias"};if(this.checkString("Kaydara FBX Binary  \0"))return{ext:"fbx",mime:"application/x.autodesk.fbx"};if(this.check([76,80],{offset:34})&&(this.check([0,0,1],{offset:8})||this.check([1,0,2],{offset:8})||this.check([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(this.check([6,6,237,245,216,29,70,229,189,49,239,231,254,116,183,29]))return{ext:"indd",mime:"application/x-indesign"};if(await e.peekBuffer(this.buffer,{length:Math.min(512,e.fileInfo.size),mayBeLess:!0}),wy(this.buffer))return{ext:"tar",mime:"application/x-tar"};if(this.check([255,254]))return this.check([60,0,63,0,120,0,109,0,108,0],{offset:2})?{ext:"xml",mime:"application/xml"}:this.check([255,14,83,0,107,0,101,0,116,0,99,0,104,0,85,0,112,0,32,0,77,0,111,0,100,0,101,0,108,0],{offset:2})?{ext:"skp",mime:"application/vnd.sketchup.skp"}:void 0;if(this.checkString("-----BEGIN PGP MESSAGE-----"))return{ext:"pgp",mime:"application/pgp-encrypted"};if(this.buffer.length>=2&&this.check([255,224],{offset:0,mask:[255,224]})){if(this.check([16],{offset:1,mask:[22]}))return this.check([8],{offset:1,mask:[8]})?{ext:"aac",mime:"audio/aac"}:{ext:"aac",mime:"audio/aac"};if(this.check([2],{offset:1,mask:[6]}))return{ext:"mp3",mime:"audio/mpeg"};if(this.check([4],{offset:1,mask:[6]}))return{ext:"mp2",mime:"audio/mpeg"};if(this.check([6],{offset:1,mask:[6]}))return{ext:"mp1",mime:"audio/mpeg"}}}async readTiffTag(e){const t=await this.tokenizer.readToken(e?rs:mi);switch(this.tokenizer.ignore(10),t){case 50341:return{ext:"arw",mime:"image/x-sony-arw"};case 50706:return{ext:"dng",mime:"image/x-adobe-dng"}}}async readTiffIFD(e){const t=await this.tokenizer.readToken(e?rs:mi);for(let n=0;n<t;++n){const r=await this.readTiffTag(e);if(r)return r}}async readTiffHeader(e){const t=(e?rs:mi).get(this.buffer,2),n=(e?ga:pt).get(this.buffer,4);if(t===42){if(n>=6){if(this.checkString("CR",{offset:8}))return{ext:"cr2",mime:"image/x-canon-cr2"};if(n>=8&&(this.check([28,0,254,0],{offset:8})||this.check([31,0,11,0],{offset:8})))return{ext:"nef",mime:"image/x-nikon-nef"}}return await this.tokenizer.ignore(n),await this.readTiffIFD(e)??{ext:"tif",mime:"image/tiff"}}if(t===43)return{ext:"tif",mime:"image/tiff"}}}new Set(Cy);new Set(Iy);var $s={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Fu;function Ly(){if(Fu)return $s;Fu=1;var i=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,e=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,t=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,n=/\\([\u000b\u0020-\u00ff])/g,r=/([\\"])/g,s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;$s.format=o,$s.parse=c;function o(a){if(!a||typeof a!="object")throw new TypeError("argument obj is required");var l=a.parameters,d=a.type;if(!d||!s.test(d))throw new TypeError("invalid type");var g=d;if(l&&typeof l=="object")for(var _,m=Object.keys(l).sort(),p=0;p<m.length;p++){if(_=m[p],!t.test(_))throw new TypeError("invalid parameter name");g+="; "+_+"="+h(l[_])}return g}function c(a){if(!a)throw new TypeError("argument string is required");var l=typeof a=="object"?u(a):a;if(typeof l!="string")throw new TypeError("argument string is required to be a string");var d=l.indexOf(";"),g=d!==-1?l.slice(0,d).trim():l.trim();if(!s.test(g))throw new TypeError("invalid media type");var _=new f(g.toLowerCase());if(d!==-1){var m,p,S;for(i.lastIndex=d;p=i.exec(l);){if(p.index!==d)throw new TypeError("invalid parameter format");d+=p[0].length,m=p[1].toLowerCase(),S=p[2],S.charCodeAt(0)===34&&(S=S.slice(1,-1),S.indexOf("\\")!==-1&&(S=S.replace(n,"$1"))),_.parameters[m]=S}if(d!==l.length)throw new TypeError("invalid parameter format")}return _}function u(a){var l;if(typeof a.getHeader=="function"?l=a.getHeader("content-type"):typeof a.headers=="object"&&(l=a.headers&&a.headers["content-type"]),typeof l!="string")throw new TypeError("content-type header is missing from object");return l}function h(a){var l=String(a);if(t.test(l))return l;if(l.length>0&&!e.test(l))throw new TypeError("invalid parameter value");return'"'+l.replace(r,"\\$1")+'"'}function f(a){this.parameters=Object.create(null),this.type=a}return $s}var Dy=Ly();const Ny=Xh(Dy);var Kr={};/*!
 * media-typer
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */var Ou;function Uy(){if(Ou)return Kr;Ou=1;var i=/^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/,e=/^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,t=/^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;Kr.format=n,Kr.parse=s,Kr.test=r;function n(c){if(!c||typeof c!="object")throw new TypeError("argument obj is required");var u=c.subtype,h=c.suffix,f=c.type;if(!f||!e.test(f))throw new TypeError("invalid type");if(!u||!i.test(u))throw new TypeError("invalid subtype");var a=f+"/"+u;if(h){if(!e.test(h))throw new TypeError("invalid suffix");a+="+"+h}return a}function r(c){if(!c)throw new TypeError("argument string is required");if(typeof c!="string")throw new TypeError("argument string is required to be a string");return t.test(c.toLowerCase())}function s(c){if(!c)throw new TypeError("argument string is required");if(typeof c!="string")throw new TypeError("argument string is required to be a string");var u=t.exec(c.toLowerCase());if(!u)throw new TypeError("invalid media type");var h=u[1],f=u[2],a,l=f.lastIndexOf("+");return l!==-1&&(a=f.substr(l+1),f=f.substr(0,l)),new o(h,f,a)}function o(c,u,h){this.type=c,this.subtype=u,this.suffix=h}return Kr}var Fy=Uy(),Js={exports:{}},fo,Bu;function Oy(){if(Bu)return fo;Bu=1;var i=1e3,e=i*60,t=e*60,n=t*24,r=n*7,s=n*365.25;fo=function(f,a){a=a||{};var l=typeof f;if(l==="string"&&f.length>0)return o(f);if(l==="number"&&isFinite(f))return a.long?u(f):c(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function o(f){if(f=String(f),!(f.length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);if(a){var l=parseFloat(a[1]),d=(a[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return l*s;case"weeks":case"week":case"w":return l*r;case"days":case"day":case"d":return l*n;case"hours":case"hour":case"hrs":case"hr":case"h":return l*t;case"minutes":case"minute":case"mins":case"min":case"m":return l*e;case"seconds":case"second":case"secs":case"sec":case"s":return l*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function c(f){var a=Math.abs(f);return a>=n?Math.round(f/n)+"d":a>=t?Math.round(f/t)+"h":a>=e?Math.round(f/e)+"m":a>=i?Math.round(f/i)+"s":f+"ms"}function u(f){var a=Math.abs(f);return a>=n?h(f,a,n,"day"):a>=t?h(f,a,t,"hour"):a>=e?h(f,a,e,"minute"):a>=i?h(f,a,i,"second"):f+" ms"}function h(f,a,l,d){var g=a>=l*1.5;return Math.round(f/l)+" "+d+(g?"s":"")}return fo}var po,ku;function By(){if(ku)return po;ku=1;function i(e){n.debug=n,n.default=n,n.coerce=h,n.disable=c,n.enable=s,n.enabled=u,n.humanize=Oy(),n.destroy=f,Object.keys(e).forEach(a=>{n[a]=e[a]}),n.names=[],n.skips=[],n.formatters={};function t(a){let l=0;for(let d=0;d<a.length;d++)l=(l<<5)-l+a.charCodeAt(d),l|=0;return n.colors[Math.abs(l)%n.colors.length]}n.selectColor=t;function n(a){let l,d=null,g,_;function m(...p){if(!m.enabled)return;const S=m,E=Number(new Date),y=E-(l||E);S.diff=y,S.prev=l,S.curr=E,l=E,p[0]=n.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let C=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(w,U)=>{if(w==="%%")return"%";C++;const T=n.formatters[U];if(typeof T=="function"){const M=p[C];w=T.call(S,M),p.splice(C,1),C--}return w}),n.formatArgs.call(S,p),(S.log||n.log).apply(S,p)}return m.namespace=a,m.useColors=n.useColors(),m.color=n.selectColor(a),m.extend=r,m.destroy=n.destroy,Object.defineProperty(m,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(g!==n.namespaces&&(g=n.namespaces,_=n.enabled(a)),_),set:p=>{d=p}}),typeof n.init=="function"&&n.init(m),m}function r(a,l){const d=n(this.namespace+(typeof l>"u"?":":l)+a);return d.log=this.log,d}function s(a){n.save(a),n.namespaces=a,n.names=[],n.skips=[];const l=(typeof a=="string"?a:"").trim().replace(" ",",").split(",").filter(Boolean);for(const d of l)d[0]==="-"?n.skips.push(d.slice(1)):n.names.push(d)}function o(a,l){let d=0,g=0,_=-1,m=0;for(;d<a.length;)if(g<l.length&&(l[g]===a[d]||l[g]==="*"))l[g]==="*"?(_=g,m=d,g++):(d++,g++);else if(_!==-1)g=_+1,m++,d=m;else return!1;for(;g<l.length&&l[g]==="*";)g++;return g===l.length}function c(){const a=[...n.names,...n.skips.map(l=>"-"+l)].join(",");return n.enable(""),a}function u(a){for(const l of n.skips)if(o(a,l))return!1;for(const l of n.names)if(o(a,l))return!0;return!1}function h(a){return a instanceof Error?a.stack||a.message:a}function f(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}return po=i,po}var zu;function ky(){return zu||(zu=1,function(i,e){var t={};e.formatArgs=r,e.save=s,e.load=o,e.useColors=n,e.storage=c(),e.destroy=(()=>{let h=!1;return()=>{h||(h=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function n(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let h;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(h=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(h[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function r(h){if(h[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+h[0]+(this.useColors?"%c ":" ")+"+"+i.exports.humanize(this.diff),!this.useColors)return;const f="color: "+this.color;h.splice(1,0,f,"color: inherit");let a=0,l=0;h[0].replace(/%[a-zA-Z%]/g,d=>{d!=="%%"&&(a++,d==="%c"&&(l=a))}),h.splice(l,0,f)}e.log=console.debug||console.log||(()=>{});function s(h){try{h?e.storage.setItem("debug",h):e.storage.removeItem("debug")}catch{}}function o(){let h;try{h=e.storage.getItem("debug")}catch{}return!h&&typeof process<"u"&&"env"in process&&(h=t.DEBUG),h}function c(){try{return localStorage}catch{}}i.exports=By()(e);const{formatters:u}=i.exports;u.j=function(h){try{return JSON.stringify(h)}catch(f){return"[UnexpectedJSONParseError]: "+f.message}}}(Js,Js.exports)),Js.exports}var zy=ky();const Ea=Xh(zy);var Hu;(function(i){i[i.shot=10]="shot",i[i.scene=20]="scene",i[i.track=30]="track",i[i.part=40]="part",i[i.album=50]="album",i[i.edition=60]="edition",i[i.collection=70]="collection"})(Hu||(Hu={}));var dc;(function(i){i[i.video=1]="video",i[i.audio=2]="audio",i[i.complex=3]="complex",i[i.logo=4]="logo",i[i.subtitle=17]="subtitle",i[i.button=18]="button",i[i.control=32]="control"})(dc||(dc={}));const gs=i=>class extends Error{constructor(t){super(t),this.name=i}};class Hy extends gs("CouldNotDetermineFileTypeError"){}class Gy extends gs("UnsupportedFileTypeError"){}class Vy extends gs("UnexpectedFileContentError"){constructor(e,t){super(t),this.fileType=e}toString(){return`${this.name} (FileType: ${this.fileType}): ${this.message}`}}class Vc extends gs("FieldDecodingError"){}class ad extends gs("InternalParserError"){}const Wy=i=>class extends Vy{constructor(e){super(i,e)}};function Qr(i,e,t){return(i[e]&1<<t)!==0}function Gu(i,e,t,n){let r=e;if(n==="utf-16le"){for(;i[r]!==0||i[r+1]!==0;){if(r>=t)return t;r+=2}return r}for(;i[r]!==0;){if(r>=t)return t;r++}return r}function Xy(i){const e=i.indexOf("\0");return e===-1?i:i.substr(0,e)}function Yy(i){const e=i.length;if((e&1)!==0)throw new Vc("Buffer length must be even");for(let t=0;t<e;t+=2){const n=i[t];i[t]=i[t+1],i[t+1]=n}return i}function fc(i,e){if(i[0]===255&&i[1]===254)return fc(i.subarray(2),e);if(e==="utf-16le"&&i[0]===254&&i[1]===255){if((i.length&1)!==0)throw new Vc("Expected even number of octets for 16-bit unicode string");return fc(Yy(i),e)}return new At(i.length,e).get(i,0)}function SS(i){return i=i.replace(/^\x00+/g,""),i=i.replace(/\x00+$/g,""),i}function od(i,e,t,n){const r=e+~~(t/8),s=t%8;let o=i[r];o&=255>>s;const c=8-s,u=n-c;return u<0?o>>=8-s-n:u>0&&(o<<=u,o|=od(i,e,t+c,u)),o}function TS(i,e,t){return od(i,e,t,1)===1}function qy(i){const e=[];for(let t=0,n=i.length;t<n;t++){const r=Number(i.charCodeAt(t)).toString(16);e.push(r.length===1?`0${r}`:r)}return e.join(" ")}function jy(i){return 10*Math.log10(i)}function Ky(i){return 10**(i/10)}function Zy(i){const e=i.split(" ").map(t=>t.trim().toLowerCase());if(e.length>=1){const t=Number.parseFloat(e[0]);return e.length===2&&e[1]==="db"?{dB:t,ratio:Ky(t)}:{dB:jy(t),ratio:t}}}var Vu;(function(i){i[i.Other=0]="Other",i[i["32x32 pixels 'file icon' (PNG only)"]=1]="32x32 pixels 'file icon' (PNG only)",i[i["Other file icon"]=2]="Other file icon",i[i["Cover (front)"]=3]="Cover (front)",i[i["Cover (back)"]=4]="Cover (back)",i[i["Leaflet page"]=5]="Leaflet page",i[i["Media (e.g. label side of CD)"]=6]="Media (e.g. label side of CD)",i[i["Lead artist/lead performer/soloist"]=7]="Lead artist/lead performer/soloist",i[i["Artist/performer"]=8]="Artist/performer",i[i.Conductor=9]="Conductor",i[i["Band/Orchestra"]=10]="Band/Orchestra",i[i.Composer=11]="Composer",i[i["Lyricist/text writer"]=12]="Lyricist/text writer",i[i["Recording Location"]=13]="Recording Location",i[i["During recording"]=14]="During recording",i[i["During performance"]=15]="During performance",i[i["Movie/video screen capture"]=16]="Movie/video screen capture",i[i["A bright coloured fish"]=17]="A bright coloured fish",i[i.Illustration=18]="Illustration",i[i["Band/artist logotype"]=19]="Band/artist logotype",i[i["Publisher/Studio logotype"]=20]="Publisher/Studio logotype"})(Vu||(Vu={}));var pc;(function(i){i[i.other=0]="other",i[i.lyrics=1]="lyrics",i[i.text=2]="text",i[i.movement_part=3]="movement_part",i[i.events=4]="events",i[i.chord=5]="chord",i[i.trivia_pop=6]="trivia_pop"})(pc||(pc={}));var mc;(function(i){i[i.notSynchronized0=0]="notSynchronized0",i[i.mpegFrameNumber=1]="mpegFrameNumber",i[i.milliseconds=2]="milliseconds"})(mc||(mc={}));const $y={get:(i,e)=>i[e+3]&127|i[e+2]<<7|i[e+1]<<14|i[e]<<21,len:4},ES={len:10,get:(i,e)=>({fileIdentifier:new At(3,"ascii").get(i,e),version:{major:hc.get(i,e+3),revision:hc.get(i,e+4)},flags:{unsynchronisation:Qr(i,e+5,7),isExtendedHeader:Qr(i,e+5,6),expIndicator:Qr(i,e+5,5),footer:Qr(i,e+5,4)},size:$y.get(i,e+6)})},bS={len:10,get:(i,e)=>({size:ga.get(i,e),extendedFlags:rs.get(i,e+4),sizeOfPadding:ga.get(i,e+6),crcDataPresent:Qr(i,e+4,31)})},Jy={len:1,get:(i,e)=>{switch(i[e]){case 0:return{encoding:"latin1"};case 1:return{encoding:"utf-16le",bom:!0};case 2:return{encoding:"utf-16le",bom:!1};case 3:return{encoding:"utf8",bom:!1};default:return{encoding:"utf8",bom:!1}}}},Qy={len:4,get:(i,e)=>({encoding:Jy.get(i,e),language:new At(3,"latin1").get(i,e+1)})},AS={len:6,get:(i,e)=>{const t=Qy.get(i,e);return{encoding:t.encoding,language:t.language,timeStampFormat:Gi.get(i,e+4),contentType:Gi.get(i,e+5)}}},_a={year:{multiple:!1},track:{multiple:!1},disk:{multiple:!1},title:{multiple:!1},artist:{multiple:!1},artists:{multiple:!0,unique:!0},albumartist:{multiple:!1},album:{multiple:!1},date:{multiple:!1},originaldate:{multiple:!1},originalyear:{multiple:!1},releasedate:{multiple:!1},comment:{multiple:!0,unique:!1},genre:{multiple:!0,unique:!0},picture:{multiple:!0,unique:!0},composer:{multiple:!0,unique:!0},lyrics:{multiple:!0,unique:!1},albumsort:{multiple:!1,unique:!0},titlesort:{multiple:!1,unique:!0},work:{multiple:!1,unique:!0},artistsort:{multiple:!1,unique:!0},albumartistsort:{multiple:!1,unique:!0},composersort:{multiple:!1,unique:!0},lyricist:{multiple:!0,unique:!0},writer:{multiple:!0,unique:!0},conductor:{multiple:!0,unique:!0},remixer:{multiple:!0,unique:!0},arranger:{multiple:!0,unique:!0},engineer:{multiple:!0,unique:!0},producer:{multiple:!0,unique:!0},technician:{multiple:!0,unique:!0},djmixer:{multiple:!0,unique:!0},mixer:{multiple:!0,unique:!0},label:{multiple:!0,unique:!0},grouping:{multiple:!1},subtitle:{multiple:!0},discsubtitle:{multiple:!1},totaltracks:{multiple:!1},totaldiscs:{multiple:!1},compilation:{multiple:!1},rating:{multiple:!0},bpm:{multiple:!1},mood:{multiple:!1},media:{multiple:!1},catalognumber:{multiple:!0,unique:!0},tvShow:{multiple:!1},tvShowSort:{multiple:!1},tvSeason:{multiple:!1},tvEpisode:{multiple:!1},tvEpisodeId:{multiple:!1},tvNetwork:{multiple:!1},podcast:{multiple:!1},podcasturl:{multiple:!1},releasestatus:{multiple:!1},releasetype:{multiple:!0},releasecountry:{multiple:!1},script:{multiple:!1},language:{multiple:!1},copyright:{multiple:!1},license:{multiple:!1},encodedby:{multiple:!1},encodersettings:{multiple:!1},gapless:{multiple:!1},barcode:{multiple:!1},isrc:{multiple:!0},asin:{multiple:!1},musicbrainz_recordingid:{multiple:!1},musicbrainz_trackid:{multiple:!1},musicbrainz_albumid:{multiple:!1},musicbrainz_artistid:{multiple:!0},musicbrainz_albumartistid:{multiple:!0},musicbrainz_releasegroupid:{multiple:!1},musicbrainz_workid:{multiple:!1},musicbrainz_trmid:{multiple:!1},musicbrainz_discid:{multiple:!1},acoustid_id:{multiple:!1},acoustid_fingerprint:{multiple:!1},musicip_puid:{multiple:!1},musicip_fingerprint:{multiple:!1},website:{multiple:!1},"performer:instrument":{multiple:!0,unique:!0},averageLevel:{multiple:!1},peakLevel:{multiple:!1},notes:{multiple:!0,unique:!1},key:{multiple:!1},originalalbum:{multiple:!1},originalartist:{multiple:!1},discogs_artist_id:{multiple:!0,unique:!0},discogs_release_id:{multiple:!1},discogs_label_id:{multiple:!1},discogs_master_release_id:{multiple:!1},discogs_votes:{multiple:!1},discogs_rating:{multiple:!1},replaygain_track_peak:{multiple:!1},replaygain_track_gain:{multiple:!1},replaygain_album_peak:{multiple:!1},replaygain_album_gain:{multiple:!1},replaygain_track_minmax:{multiple:!1},replaygain_album_minmax:{multiple:!1},replaygain_undo:{multiple:!1},description:{multiple:!0},longDescription:{multiple:!1},category:{multiple:!0},hdVideo:{multiple:!1},keywords:{multiple:!0},movement:{multiple:!1},movementIndex:{multiple:!1},movementTotal:{multiple:!1},podcastId:{multiple:!1},showMovement:{multiple:!1},stik:{multiple:!1}};function eM(i){return _a[i]&&!_a[i].multiple}function tM(i){return!_a[i].multiple||_a[i].unique||!1}class Jt{static toIntOrNull(e){const t=Number.parseInt(e,10);return Number.isNaN(t)?null:t}static normalizeTrack(e){const t=e.toString().split("/");return{no:Number.parseInt(t[0],10)||null,of:Number.parseInt(t[1],10)||null}}constructor(e,t){this.tagTypes=e,this.tagMap=t}mapGenericTag(e,t){e={id:e.id,value:e.value},this.postMap(e,t);const n=this.getCommonName(e.id);return n?{id:n,value:e.value}:null}getCommonName(e){return this.tagMap[e]}postMap(e,t){}}Jt.maxRatingScore=1;const nM={title:"title",artist:"artist",album:"album",year:"year",comment:"comment",track:"track",genre:"genre"};class iM extends Jt{constructor(){super(["ID3v1"],nM)}}class _s extends Jt{constructor(e,t){const n={};for(const r of Object.keys(t))n[r.toUpperCase()]=t[r];super(e,n)}getCommonName(e){return this.tagMap[e.toUpperCase()]}}const rM={TIT2:"title",TPE1:"artist","TXXX:Artists":"artists",TPE2:"albumartist",TALB:"album",TDRV:"date",TORY:"originalyear",TPOS:"disk",TCON:"genre",APIC:"picture",TCOM:"composer",USLT:"lyrics",TSOA:"albumsort",TSOT:"titlesort",TOAL:"originalalbum",TSOP:"artistsort",TSO2:"albumartistsort",TSOC:"composersort",TEXT:"lyricist","TXXX:Writer":"writer",TPE3:"conductor",TPE4:"remixer","IPLS:arranger":"arranger","IPLS:engineer":"engineer","IPLS:producer":"producer","IPLS:DJ-mix":"djmixer","IPLS:mix":"mixer",TPUB:"label",TIT1:"grouping",TIT3:"subtitle",TRCK:"track",TCMP:"compilation",POPM:"rating",TBPM:"bpm",TMED:"media","TXXX:CATALOGNUMBER":"catalognumber","TXXX:MusicBrainz Album Status":"releasestatus","TXXX:MusicBrainz Album Type":"releasetype","TXXX:MusicBrainz Album Release Country":"releasecountry","TXXX:RELEASECOUNTRY":"releasecountry","TXXX:SCRIPT":"script",TLAN:"language",TCOP:"copyright",WCOP:"license",TENC:"encodedby",TSSE:"encodersettings","TXXX:BARCODE":"barcode","TXXX:ISRC":"isrc",TSRC:"isrc","TXXX:ASIN":"asin","TXXX:originalyear":"originalyear","UFID:http://musicbrainz.org":"musicbrainz_recordingid","TXXX:MusicBrainz Release Track Id":"musicbrainz_trackid","TXXX:MusicBrainz Album Id":"musicbrainz_albumid","TXXX:MusicBrainz Artist Id":"musicbrainz_artistid","TXXX:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","TXXX:MusicBrainz Release Group Id":"musicbrainz_releasegroupid","TXXX:MusicBrainz Work Id":"musicbrainz_workid","TXXX:MusicBrainz TRM Id":"musicbrainz_trmid","TXXX:MusicBrainz Disc Id":"musicbrainz_discid","TXXX:ACOUSTID_ID":"acoustid_id","TXXX:Acoustid Id":"acoustid_id","TXXX:Acoustid Fingerprint":"acoustid_fingerprint","TXXX:MusicIP PUID":"musicip_puid","TXXX:MusicMagic Fingerprint":"musicip_fingerprint",WOAR:"website",TDRC:"date",TYER:"year",TDOR:"originaldate","TIPL:arranger":"arranger","TIPL:engineer":"engineer","TIPL:producer":"producer","TIPL:DJ-mix":"djmixer","TIPL:mix":"mixer",TMOO:"mood",SYLT:"lyrics",TSST:"discsubtitle",TKEY:"key",COMM:"comment",TOPE:"originalartist","PRIV:AverageLevel":"averageLevel","PRIV:PeakLevel":"peakLevel","TXXX:DISCOGS_ARTIST_ID":"discogs_artist_id","TXXX:DISCOGS_ARTISTS":"artists","TXXX:DISCOGS_ARTIST_NAME":"artists","TXXX:DISCOGS_ALBUM_ARTISTS":"albumartist","TXXX:DISCOGS_CATALOG":"catalognumber","TXXX:DISCOGS_COUNTRY":"releasecountry","TXXX:DISCOGS_DATE":"originaldate","TXXX:DISCOGS_LABEL":"label","TXXX:DISCOGS_LABEL_ID":"discogs_label_id","TXXX:DISCOGS_MASTER_RELEASE_ID":"discogs_master_release_id","TXXX:DISCOGS_RATING":"discogs_rating","TXXX:DISCOGS_RELEASED":"date","TXXX:DISCOGS_RELEASE_ID":"discogs_release_id","TXXX:DISCOGS_VOTES":"discogs_votes","TXXX:CATALOGID":"catalognumber","TXXX:STYLE":"genre","TXXX:REPLAYGAIN_TRACK_PEAK":"replaygain_track_peak","TXXX:REPLAYGAIN_TRACK_GAIN":"replaygain_track_gain","TXXX:REPLAYGAIN_ALBUM_PEAK":"replaygain_album_peak","TXXX:REPLAYGAIN_ALBUM_GAIN":"replaygain_album_gain","TXXX:MP3GAIN_MINMAX":"replaygain_track_minmax","TXXX:MP3GAIN_ALBUM_MINMAX":"replaygain_album_minmax","TXXX:MP3GAIN_UNDO":"replaygain_undo",MVNM:"movement",MVIN:"movementIndex",PCST:"podcast",TCAT:"category",TDES:"description",TDRL:"releasedate",TGID:"podcastId",TKWD:"keywords",WFED:"podcasturl",GRP1:"grouping"};class Wc extends _s{static toRating(e){return{source:e.email,rating:e.rating>0?(e.rating-1)/254*Jt.maxRatingScore:void 0}}constructor(){super(["ID3v2.3","ID3v2.4"],rM)}postMap(e,t){switch(e.id){case"UFID":{const n=e.value;n.owner_identifier==="http://musicbrainz.org"&&(e.id+=`:${n.owner_identifier}`,e.value=fc(n.identifier,"latin1"))}break;case"PRIV":{const n=e.value;switch(n.owner_identifier){case"AverageLevel":case"PeakValue":e.id+=`:${n.owner_identifier}`,e.value=n.data.length===4?pt.get(n.data,0):null,e.value===null&&t.addWarning("Failed to parse PRIV:PeakValue");break;default:t.addWarning(`Unknown PRIV owner-identifier: ${n.data}`)}}break;case"POPM":e.value=Wc.toRating(e.value);break}}}const sM={Title:"title",Author:"artist","WM/AlbumArtist":"albumartist","WM/AlbumTitle":"album","WM/Year":"date","WM/OriginalReleaseTime":"originaldate","WM/OriginalReleaseYear":"originalyear",Description:"comment","WM/TrackNumber":"track","WM/PartOfSet":"disk","WM/Genre":"genre","WM/Composer":"composer","WM/Lyrics":"lyrics","WM/AlbumSortOrder":"albumsort","WM/TitleSortOrder":"titlesort","WM/ArtistSortOrder":"artistsort","WM/AlbumArtistSortOrder":"albumartistsort","WM/ComposerSortOrder":"composersort","WM/Writer":"lyricist","WM/Conductor":"conductor","WM/ModifiedBy":"remixer","WM/Engineer":"engineer","WM/Producer":"producer","WM/DJMixer":"djmixer","WM/Mixer":"mixer","WM/Publisher":"label","WM/ContentGroupDescription":"grouping","WM/SubTitle":"subtitle","WM/SetSubTitle":"discsubtitle","WM/IsCompilation":"compilation","WM/SharedUserRating":"rating","WM/BeatsPerMinute":"bpm","WM/Mood":"mood","WM/Media":"media","WM/CatalogNo":"catalognumber","MusicBrainz/Album Status":"releasestatus","MusicBrainz/Album Type":"releasetype","MusicBrainz/Album Release Country":"releasecountry","WM/Script":"script","WM/Language":"language",Copyright:"copyright",LICENSE:"license","WM/EncodedBy":"encodedby","WM/EncodingSettings":"encodersettings","WM/Barcode":"barcode","WM/ISRC":"isrc","MusicBrainz/Track Id":"musicbrainz_recordingid","MusicBrainz/Release Track Id":"musicbrainz_trackid","MusicBrainz/Album Id":"musicbrainz_albumid","MusicBrainz/Artist Id":"musicbrainz_artistid","MusicBrainz/Album Artist Id":"musicbrainz_albumartistid","MusicBrainz/Release Group Id":"musicbrainz_releasegroupid","MusicBrainz/Work Id":"musicbrainz_workid","MusicBrainz/TRM Id":"musicbrainz_trmid","MusicBrainz/Disc Id":"musicbrainz_discid","Acoustid/Id":"acoustid_id","Acoustid/Fingerprint":"acoustid_fingerprint","MusicIP/PUID":"musicip_puid","WM/ARTISTS":"artists","WM/InitialKey":"key",ASIN:"asin","WM/Work":"work","WM/AuthorURL":"website","WM/Picture":"picture"};class Xc extends Jt{static toRating(e){return{rating:Number.parseFloat(e+1)/5}}constructor(){super(["asf"],sM)}postMap(e){switch(e.id){case"WM/SharedUserRating":{const t=e.id.split(":");e.value=Xc.toRating(e.value),e.id=t[0];break}}}}const aM={TT2:"title",TP1:"artist",TP2:"albumartist",TAL:"album",TYE:"year",COM:"comment",TRK:"track",TPA:"disk",TCO:"genre",PIC:"picture",TCM:"composer",TOR:"originaldate",TOT:"originalalbum",TXT:"lyricist",TP3:"conductor",TPB:"label",TT1:"grouping",TT3:"subtitle",TLA:"language",TCR:"copyright",WCP:"license",TEN:"encodedby",TSS:"encodersettings",WAR:"website",PCS:"podcast",TCP:"compilation",TDR:"date",TS2:"albumartistsort",TSA:"albumsort",TSC:"composersort",TSP:"artistsort",TST:"titlesort",WFD:"podcasturl",TBP:"bpm"};class oM extends _s{constructor(){super(["ID3v2.2"],aM)}}const cM={Title:"title",Artist:"artist",Artists:"artists","Album Artist":"albumartist",Album:"album",Year:"date",Originalyear:"originalyear",Originaldate:"originaldate",Releasedate:"releasedate",Comment:"comment",Track:"track",Disc:"disk",DISCNUMBER:"disk",Genre:"genre","Cover Art (Front)":"picture","Cover Art (Back)":"picture",Composer:"composer",Lyrics:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",Lyricist:"lyricist",Writer:"writer",Conductor:"conductor",MixArtist:"remixer",Arranger:"arranger",Engineer:"engineer",Producer:"producer",DJMixer:"djmixer",Mixer:"mixer",Label:"label",Grouping:"grouping",Subtitle:"subtitle",DiscSubtitle:"discsubtitle",Compilation:"compilation",BPM:"bpm",Mood:"mood",Media:"media",CatalogNumber:"catalognumber",MUSICBRAINZ_ALBUMSTATUS:"releasestatus",MUSICBRAINZ_ALBUMTYPE:"releasetype",RELEASECOUNTRY:"releasecountry",Script:"script",Language:"language",Copyright:"copyright",LICENSE:"license",EncodedBy:"encodedby",EncoderSettings:"encodersettings",Barcode:"barcode",ISRC:"isrc",ASIN:"asin",musicbrainz_trackid:"musicbrainz_recordingid",musicbrainz_releasetrackid:"musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",Acoustid_Id:"acoustid_id",ACOUSTID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",Weblink:"website",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",MP3GAIN_MINMAX:"replaygain_track_minmax",MP3GAIN_UNDO:"replaygain_undo"};class lM extends _s{constructor(){super(["APEv2"],cM)}}const uM={"©nam":"title","©ART":"artist",aART:"albumartist","----:com.apple.iTunes:Band":"albumartist","©alb":"album","©day":"date","©cmt":"comment","©com":"comment",trkn:"track",disk:"disk","©gen":"genre",covr:"picture","©wrt":"composer","©lyr":"lyrics",soal:"albumsort",sonm:"titlesort",soar:"artistsort",soaa:"albumartistsort",soco:"composersort","----:com.apple.iTunes:LYRICIST":"lyricist","----:com.apple.iTunes:CONDUCTOR":"conductor","----:com.apple.iTunes:REMIXER":"remixer","----:com.apple.iTunes:ENGINEER":"engineer","----:com.apple.iTunes:PRODUCER":"producer","----:com.apple.iTunes:DJMIXER":"djmixer","----:com.apple.iTunes:MIXER":"mixer","----:com.apple.iTunes:LABEL":"label","©grp":"grouping","----:com.apple.iTunes:SUBTITLE":"subtitle","----:com.apple.iTunes:DISCSUBTITLE":"discsubtitle",cpil:"compilation",tmpo:"bpm","----:com.apple.iTunes:MOOD":"mood","----:com.apple.iTunes:MEDIA":"media","----:com.apple.iTunes:CATALOGNUMBER":"catalognumber",tvsh:"tvShow",tvsn:"tvSeason",tves:"tvEpisode",sosn:"tvShowSort",tven:"tvEpisodeId",tvnn:"tvNetwork",pcst:"podcast",purl:"podcasturl","----:com.apple.iTunes:MusicBrainz Album Status":"releasestatus","----:com.apple.iTunes:MusicBrainz Album Type":"releasetype","----:com.apple.iTunes:MusicBrainz Album Release Country":"releasecountry","----:com.apple.iTunes:SCRIPT":"script","----:com.apple.iTunes:LANGUAGE":"language",cprt:"copyright","©cpy":"copyright","----:com.apple.iTunes:LICENSE":"license","©too":"encodedby",pgap:"gapless","----:com.apple.iTunes:BARCODE":"barcode","----:com.apple.iTunes:ISRC":"isrc","----:com.apple.iTunes:ASIN":"asin","----:com.apple.iTunes:NOTES":"comment","----:com.apple.iTunes:MusicBrainz Track Id":"musicbrainz_recordingid","----:com.apple.iTunes:MusicBrainz Release Track Id":"musicbrainz_trackid","----:com.apple.iTunes:MusicBrainz Album Id":"musicbrainz_albumid","----:com.apple.iTunes:MusicBrainz Artist Id":"musicbrainz_artistid","----:com.apple.iTunes:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","----:com.apple.iTunes:MusicBrainz Release Group Id":"musicbrainz_releasegroupid","----:com.apple.iTunes:MusicBrainz Work Id":"musicbrainz_workid","----:com.apple.iTunes:MusicBrainz TRM Id":"musicbrainz_trmid","----:com.apple.iTunes:MusicBrainz Disc Id":"musicbrainz_discid","----:com.apple.iTunes:Acoustid Id":"acoustid_id","----:com.apple.iTunes:Acoustid Fingerprint":"acoustid_fingerprint","----:com.apple.iTunes:MusicIP PUID":"musicip_puid","----:com.apple.iTunes:fingerprint":"musicip_fingerprint","----:com.apple.iTunes:replaygain_track_gain":"replaygain_track_gain","----:com.apple.iTunes:replaygain_track_peak":"replaygain_track_peak","----:com.apple.iTunes:replaygain_album_gain":"replaygain_album_gain","----:com.apple.iTunes:replaygain_album_peak":"replaygain_album_peak","----:com.apple.iTunes:replaygain_track_minmax":"replaygain_track_minmax","----:com.apple.iTunes:replaygain_album_minmax":"replaygain_album_minmax","----:com.apple.iTunes:replaygain_undo":"replaygain_undo",gnre:"genre","----:com.apple.iTunes:ALBUMARTISTSORT":"albumartistsort","----:com.apple.iTunes:ARTISTS":"artists","----:com.apple.iTunes:ORIGINALDATE":"originaldate","----:com.apple.iTunes:ORIGINALYEAR":"originalyear","----:com.apple.iTunes:RELEASEDATE":"releasedate",desc:"description",ldes:"longDescription","©mvn":"movement","©mvi":"movementIndex","©mvc":"movementTotal","©wrk":"work",catg:"category",egid:"podcastId",hdvd:"hdVideo",keyw:"keywords",shwm:"showMovement",stik:"stik",rate:"rating"},hM="iTunes";class Wu extends _s{constructor(){super([hM],uM)}postMap(e,t){switch(e.id){case"rate":e.value={source:void 0,rating:Number.parseFloat(e.value)/100};break}}}const dM={TITLE:"title",ARTIST:"artist",ARTISTS:"artists",ALBUMARTIST:"albumartist","ALBUM ARTIST":"albumartist",ALBUM:"album",DATE:"date",ORIGINALDATE:"originaldate",ORIGINALYEAR:"originalyear",RELEASEDATE:"releasedate",COMMENT:"comment",TRACKNUMBER:"track",DISCNUMBER:"disk",GENRE:"genre",METADATA_BLOCK_PICTURE:"picture",COMPOSER:"composer",LYRICS:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",LYRICIST:"lyricist",WRITER:"writer",CONDUCTOR:"conductor",REMIXER:"remixer",ARRANGER:"arranger",ENGINEER:"engineer",PRODUCER:"producer",DJMIXER:"djmixer",MIXER:"mixer",LABEL:"label",GROUPING:"grouping",SUBTITLE:"subtitle",DISCSUBTITLE:"discsubtitle",TRACKTOTAL:"totaltracks",DISCTOTAL:"totaldiscs",COMPILATION:"compilation",RATING:"rating",BPM:"bpm",KEY:"key",MOOD:"mood",MEDIA:"media",CATALOGNUMBER:"catalognumber",RELEASESTATUS:"releasestatus",RELEASETYPE:"releasetype",RELEASECOUNTRY:"releasecountry",SCRIPT:"script",LANGUAGE:"language",COPYRIGHT:"copyright",LICENSE:"license",ENCODEDBY:"encodedby",ENCODERSETTINGS:"encodersettings",BARCODE:"barcode",ISRC:"isrc",ASIN:"asin",MUSICBRAINZ_TRACKID:"musicbrainz_recordingid",MUSICBRAINZ_RELEASETRACKID:"musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",ACOUSTID_ID:"acoustid_id",ACOUSTID_ID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",WEBSITE:"website",NOTES:"notes",TOTALTRACKS:"totaltracks",TOTALDISCS:"totaldiscs",DISCOGS_ARTIST_ID:"discogs_artist_id",DISCOGS_ARTISTS:"artists",DISCOGS_ARTIST_NAME:"artists",DISCOGS_ALBUM_ARTISTS:"albumartist",DISCOGS_CATALOG:"catalognumber",DISCOGS_COUNTRY:"releasecountry",DISCOGS_DATE:"originaldate",DISCOGS_LABEL:"label",DISCOGS_LABEL_ID:"discogs_label_id",DISCOGS_MASTER_RELEASE_ID:"discogs_master_release_id",DISCOGS_RATING:"discogs_rating",DISCOGS_RELEASED:"date",DISCOGS_RELEASE_ID:"discogs_release_id",DISCOGS_VOTES:"discogs_votes",CATALOGID:"catalognumber",STYLE:"genre",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",REPLAYGAIN_ALBUM_GAIN:"replaygain_album_gain",REPLAYGAIN_ALBUM_PEAK:"replaygain_album_peak",REPLAYGAIN_MINMAX:"replaygain_track_minmax",REPLAYGAIN_ALBUM_MINMAX:"replaygain_album_minmax",REPLAYGAIN_UNDO:"replaygain_undo"};class xa extends Jt{static toRating(e,t,n){return{source:e?e.toLowerCase():void 0,rating:Number.parseFloat(t)/n*Jt.maxRatingScore}}constructor(){super(["vorbis"],dM)}postMap(e){if(e.id==="RATING")e.value=xa.toRating(void 0,e.value,100);else if(e.id.indexOf("RATING:")===0){const t=e.id.split(":");e.value=xa.toRating(t[1],e.value,1),e.id=t[0]}}}const fM={IART:"artist",ICRD:"date",INAM:"title",TITL:"title",IPRD:"album",ITRK:"track",IPRT:"track",COMM:"comment",ICMT:"comment",ICNT:"releasecountry",GNRE:"genre",IWRI:"writer",RATE:"rating",YEAR:"year",ISFT:"encodedby",CODE:"encodedby",TURL:"website",IGNR:"genre",IENG:"engineer",ITCH:"technician",IMED:"media",IRPD:"album"};class pM extends Jt{constructor(){super(["exif"],fM)}}const mM={"segment:title":"title","album:ARTIST":"albumartist","album:ARTISTSORT":"albumartistsort","album:TITLE":"album","album:DATE_RECORDED":"originaldate","album:DATE_RELEASED":"releasedate","album:PART_NUMBER":"disk","album:TOTAL_PARTS":"totaltracks","track:ARTIST":"artist","track:ARTISTSORT":"artistsort","track:TITLE":"title","track:PART_NUMBER":"track","track:MUSICBRAINZ_TRACKID":"musicbrainz_recordingid","track:MUSICBRAINZ_ALBUMID":"musicbrainz_albumid","track:MUSICBRAINZ_ARTISTID":"musicbrainz_artistid","track:PUBLISHER":"label","track:GENRE":"genre","track:ENCODER":"encodedby","track:ENCODER_OPTIONS":"encodersettings","edition:TOTAL_PARTS":"totaldiscs",picture:"picture"};class gM extends _s{constructor(){super(["matroska"],mM)}}const _M={NAME:"title",AUTH:"artist","(c) ":"copyright",ANNO:"comment"};class xM extends Jt{constructor(){super(["AIFF"],_M)}}class vM{constructor(){this.tagMappers={},[new iM,new oM,new Wc,new Wu,new Wu,new xa,new lM,new Xc,new pM,new gM,new xM].forEach(e=>{this.registerTagMapper(e)})}mapTag(e,t,n){if(this.tagMappers[e])return this.tagMappers[e].mapGenericTag(t,n);throw new ad(`No generic tag mapper defined for tag-format: ${e}`)}registerTagMapper(e){for(const t of e.tagTypes)this.tagMappers[t]=e}}function yM(i){const e=i.split(`
`),t=[],n=/\[(\d{2}):(\d{2})\.(\d{2})\]/;for(const r of e){const s=r.match(n);if(s){const o=Number.parseInt(s[1],10),c=Number.parseInt(s[2],10),u=Number.parseInt(s[3],10),h=(o*60+c)*1e3+u*10,f=r.replace(n,"").trim();t.push({timestamp:h,text:f})}}return{contentType:pc.lyrics,timeStampFormat:mc.milliseconds,syncText:t}}const Pi=Ea("music-metadata:collector"),MM=["matroska","APEv2","vorbis","ID3v2.4","ID3v2.3","ID3v2.2","exif","asf","iTunes","AIFF","ID3v1"];class SM{constructor(e){this.opts=e,this.format={tagTypes:[],trackInfo:[]},this.native={},this.common={track:{no:null,of:null},disk:{no:null,of:null},movementIndex:{no:null,of:null}},this.quality={warnings:[]},this.commonOrigin={},this.originPriority={},this.tagMapper=new vM;let t=1;for(const n of MM)this.originPriority[n]=t++;this.originPriority.artificial=500,this.originPriority.id3v1=600}hasAny(){return Object.keys(this.native).length>0}addStreamInfo(e){Pi(`streamInfo: type=${e.type?dc[e.type]:"?"}, codec=${e.codecName}`),this.format.trackInfo.push(e)}setFormat(e,t){var n;Pi(`format: ${e} = ${t}`),this.format[e]=t,(n=this.opts)!=null&&n.observer&&this.opts.observer({metadata:this,tag:{type:"format",id:e,value:t}})}async addTag(e,t,n){Pi(`tag ${e}.${t} = ${n}`),this.native[e]||(this.format.tagTypes.push(e),this.native[e]=[]),this.native[e].push({id:t,value:n}),await this.toCommon(e,t,n)}addWarning(e){this.quality.warnings.push({message:e})}async postMap(e,t){switch(t.id){case"artist":if(this.commonOrigin.artist===this.originPriority[e])return this.postMap("artificial",{id:"artists",value:t.value});this.common.artists||this.setGenericTag("artificial",{id:"artists",value:t.value});break;case"artists":if((!this.common.artist||this.commonOrigin.artist===this.originPriority.artificial)&&(!this.common.artists||this.common.artists.indexOf(t.value)===-1)){const n=(this.common.artists||[]).concat([t.value]),s={id:"artist",value:TM(n)};this.setGenericTag("artificial",s)}break;case"picture":return this.postFixPicture(t.value).then(n=>{n!==null&&(t.value=n,this.setGenericTag(e,t))});case"totaltracks":this.common.track.of=Jt.toIntOrNull(t.value);return;case"totaldiscs":this.common.disk.of=Jt.toIntOrNull(t.value);return;case"movementTotal":this.common.movementIndex.of=Jt.toIntOrNull(t.value);return;case"track":case"disk":case"movementIndex":{const n=this.common[t.id].of;this.common[t.id]=Jt.normalizeTrack(t.value),this.common[t.id].of=n??this.common[t.id].of;return}case"bpm":case"year":case"originalyear":t.value=Number.parseInt(t.value,10);break;case"date":{const n=Number.parseInt(t.value.substr(0,4),10);Number.isNaN(n)||(this.common.year=n);break}case"discogs_label_id":case"discogs_release_id":case"discogs_master_release_id":case"discogs_artist_id":case"discogs_votes":t.value=typeof t.value=="string"?Number.parseInt(t.value,10):t.value;break;case"replaygain_track_gain":case"replaygain_track_peak":case"replaygain_album_gain":case"replaygain_album_peak":t.value=Zy(t.value);break;case"replaygain_track_minmax":t.value=t.value.split(",").map(n=>Number.parseInt(n,10));break;case"replaygain_undo":{const n=t.value.split(",").map(r=>Number.parseInt(r,10));t.value={leftChannel:n[0],rightChannel:n[1]};break}case"gapless":case"compilation":case"podcast":case"showMovement":t.value=t.value==="1"||t.value===1;break;case"isrc":{const n=this.common[t.id];if(n&&n.indexOf(t.value)!==-1)return;break}case"comment":typeof t.value=="string"&&(t.value={text:t.value}),t.value.descriptor==="iTunPGAP"&&this.setGenericTag(e,{id:"gapless",value:t.value.text==="1"});break;case"lyrics":typeof t.value=="string"&&(t.value=yM(t.value));break}t.value!==null&&this.setGenericTag(e,t)}toCommonMetadata(){return{format:this.format,native:this.native,quality:this.quality,common:this.common}}async postFixPicture(e){if(e.data&&e.data.length>0){if(!e.format){const t=await sd(Uint8Array.from(e.data));if(t)e.format=t.mime;else return null}switch(e.format=e.format.toLocaleLowerCase(),e.format){case"image/jpg":e.format="image/jpeg"}return e}return this.addWarning("Empty picture tag found"),null}async toCommon(e,t,n){const r={id:t,value:n},s=this.tagMapper.mapTag(e,r,this);s&&await this.postMap(e,s)}setGenericTag(e,t){var s;Pi(`common.${t.id} = ${t.value}`);const n=this.commonOrigin[t.id]||1e3,r=this.originPriority[e];if(eM(t.id))if(r<=n)this.common[t.id]=t.value,this.commonOrigin[t.id]=r;else return Pi(`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`);else if(r===n)!tM(t.id)||this.common[t.id].indexOf(t.value)===-1?this.common[t.id].push(t.value):Pi(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`);else if(r<n)this.common[t.id]=[t.value],this.commonOrigin[t.id]=r;else return Pi(`Ignore native tag (list): ${e}.${t.id} = ${t.value}`);(s=this.opts)!=null&&s.observer&&this.opts.observer({metadata:this,tag:{type:"common",id:t.id,value:t.value}})}}function TM(i){return i.length>2?`${i.slice(0,i.length-1).join(", ")} & ${i[i.length-1]}`:i.join(" & ")}const EM="modulepreload",bM=function(i){return"/"+i},Xu={},en=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=bM(u),u in Xu)return;Xu[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const a=document.createElement("link");if(a.rel=h?"stylesheet":EM,h||(a.as="script"),a.crossOrigin="",a.href=u,c&&a.setAttribute("nonce",c),document.head.appendChild(a),h)return new Promise((l,d)=>{a.addEventListener("load",l),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})},AM={parserType:"mpeg",extensions:[".mp2",".mp3",".m2a",".aac","aacp"],async load(i,e,t){return new(await en(async()=>{const{MpegParser:n}=await import("./MpegParser-DJEe9mN9.js");return{MpegParser:n}},__vite__mapDeps([0,1,2]))).MpegParser(i,e,t)}},wM={parserType:"apev2",extensions:[".ape"],async load(i,e,t){return new(await en(async()=>{const{APEv2Parser:n}=await Promise.resolve().then(()=>WM);return{APEv2Parser:n}},void 0)).APEv2Parser(i,e,t)}},RM={parserType:"asf",extensions:[".asf"],async load(i,e,t){return new(await en(async()=>{const{AsfParser:n}=await import("./AsfParser-8e4e63aq.js");return{AsfParser:n}},[])).AsfParser(i,e,t)}},CM={parserType:"dsdiff",extensions:[".dff"],async load(i,e,t){return new(await en(async()=>{const{DsdiffParser:n}=await import("./DsdiffParser-DzK12UNk.js");return{DsdiffParser:n}},__vite__mapDeps([3,2]))).DsdiffParser(i,e,t)}},IM={parserType:"aiff",extensions:[".aif","aiff","aifc"],async load(i,e,t){return new(await en(async()=>{const{AIFFParser:n}=await import("./AiffParser-BslZo6vL.js");return{AIFFParser:n}},__vite__mapDeps([4,2]))).AIFFParser(i,e,t)}},PM={parserType:"dsf",extensions:[".dsf"],async load(i,e,t){return new(await en(async()=>{const{DsfParser:n}=await import("./DsfParser-UK2TH3GP.js");return{DsfParser:n}},__vite__mapDeps([5,1,2]))).DsfParser(i,e,t)}},LM={parserType:"flac",extensions:[".flac"],async load(i,e,t){return new(await en(async()=>{const{FlacParser:n}=await import("./FlacParser-CVhEZ0fI.js");return{FlacParser:n}},__vite__mapDeps([6,7,1,2]))).FlacParser(i,e,t)}},DM={parserType:"matroska",extensions:[".mka",".mkv",".mk3d",".mks","webm"],async load(i,e,t){return new(await en(async()=>{const{MatroskaParser:n}=await import("./MatroskaParser-DSIDyceH.js");return{MatroskaParser:n}},[])).MatroskaParser(i,e,t)}},NM={parserType:"mp4",extensions:[".mp4",".m4a",".m4b",".m4pa","m4v","m4r","3gp"],async load(i,e,t){return new(await en(async()=>{const{MP4Parser:n}=await import("./MP4Parser-DMr-Zheb.js");return{MP4Parser:n}},[])).MP4Parser(i,e,t)}},UM={parserType:"musepack",extensions:[".mpc"],async load(i,e,t){return new(await en(async()=>{const{MusepackParser:n}=await import("./MusepackParser-DmhXarsa.js");return{MusepackParser:n}},__vite__mapDeps([8,1,2]))).MusepackParser(i,e,t)}},FM={parserType:"ogg",extensions:[".ogg",".ogv",".oga",".ogm",".ogx",".opus",".spx"],async load(i,e,t){return new(await en(async()=>{const{OggParser:n}=await import("./OggParser-HTPiol4i.js");return{OggParser:n}},__vite__mapDeps([9,7]))).OggParser(i,e,t)}},OM={parserType:"wavpack",extensions:[".wv",".wvp"],async load(i,e,t){return new(await en(async()=>{const{WavPackParser:n}=await import("./WavPackParser-Bv9TWkwy.js");return{WavPackParser:n}},[])).WavPackParser(i,e,t)}},BM={parserType:"riff",extensions:[".wav","wave",".bwf"],async load(i,e,t){return new(await en(async()=>{const{WaveParser:n}=await import("./WaveParser-B4mVUS7d.js");return{WaveParser:n}},__vite__mapDeps([10,2]))).WaveParser(i,e,t)}},Ui=Ea("music-metadata:parser:factory");function kM(i){const e=Ny.parse(i),t=Fy.parse(e.type);return{type:t.type,subtype:t.subtype,suffix:t.suffix,parameters:e.parameters}}class zM{constructor(){this.parsers=[],[LM,AM,wM,NM,DM,BM,FM,RM,IM,OM,UM,PM,CM].forEach(e=>this.registerParser(e))}registerParser(e){this.parsers.push(e)}async parse(e,t,n){if(e.supportsRandomAccess()?(Ui("tokenizer supports random-access, scanning for appending headers"),await $M(e,n)):Ui("tokenizer does not support random-access, cannot scan for appending headers"),!t){const o=new Uint8Array(4100);if(e.fileInfo.mimeType&&(t=this.findLoaderForType(Yu(e.fileInfo.mimeType))),!t&&e.fileInfo.path&&(t=this.findLoaderForExtension(e.fileInfo.path)),!t){Ui("Guess parser on content..."),await e.peekBuffer(o,{mayBeLess:!0});const c=await sd(o);if(!c||!c.mime)throw new Hy("Failed to determine audio format");if(Ui(`Guessed file type is mime=${c.mime}, extension=${c.ext}`),t=this.findLoaderForType(Yu(c.mime)),!t)throw new Gy(`Guessed MIME-type not supported: ${c.mime}`)}}Ui(`Loading ${t.parserType} parser...`);const r=new SM(n),s=await t.load(r,e,n??{});return Ui(`Parser ${t.parserType} loaded`),await s.parse(),r.toCommonMetadata()}findLoaderForExtension(e){if(!e)return;const t=HM(e).toLocaleLowerCase()||e;return this.parsers.find(n=>n.extensions.indexOf(t)!==-1)}findLoaderForType(e){return e?this.parsers.find(t=>t.parserType===e):void 0}}function HM(i){const e=i.lastIndexOf(".");return e===-1?"":i.slice(e)}function Yu(i){let e;if(!i)return;try{e=kM(i)}catch{Ui(`Invalid HTTP Content-Type header value: ${i}`);return}const t=e.subtype.indexOf("x-")===0?e.subtype.substring(2):e.subtype;switch(e.type){case"audio":switch(t){case"mp3":case"mpeg":return"mpeg";case"aac":case"aacp":return"mpeg";case"flac":return"flac";case"ape":case"monkeys-audio":return"apev2";case"mp4":case"m4a":return"mp4";case"ogg":case"opus":case"speex":return"ogg";case"ms-wma":case"ms-wmv":case"ms-asf":return"asf";case"aiff":case"aif":case"aifc":return"aiff";case"vnd.wave":case"wav":case"wave":return"riff";case"wavpack":return"wavpack";case"musepack":return"musepack";case"matroska":case"webm":return"matroska";case"dsf":return"dsf";case"amr":return"amr"}break;case"video":switch(t){case"ms-asf":case"ms-wmv":return"asf";case"m4v":case"mp4":return"mp4";case"ogg":return"ogg";case"matroska":case"webm":return"matroska"}break;case"application":switch(t){case"vnd.ms-asf":return"asf";case"ogg":return"ogg"}break}}class cd{constructor(e,t,n){this.metadata=e,this.tokenizer=t,this.options=n}}const GM=/^[\x21-\x7e©][\x20-\x7e\x00()]{3}/,ld={len:4,get:(i,e)=>{const t=nd(i.slice(e,e+ld.len),"latin1");if(!t.match(GM))throw new Vc(`FourCC contains invalid characters: ${qy(t)} "${t}"`);return t},put:(i,e,t)=>{const n=Ty(t);if(n.length!==4)throw new ad("Invalid length");return i.set(n,e),e+4}};var mr;(function(i){i[i.text_utf8=0]="text_utf8",i[i.binary=1]="binary",i[i.external_info=2]="external_info",i[i.reserved=3]="reserved"})(mr||(mr={}));const qu={len:52,get:(i,e)=>({ID:ld.get(i,e),version:pt.get(i,e+4)/1e3,descriptorBytes:pt.get(i,e+8),headerBytes:pt.get(i,e+12),seekTableBytes:pt.get(i,e+16),headerDataBytes:pt.get(i,e+20),apeFrameDataBytes:pt.get(i,e+24),apeFrameDataBytesHigh:pt.get(i,e+28),terminatingDataBytes:pt.get(i,e+32),fileMD5:new Jh(16).get(i,e+36)})},VM={len:24,get:(i,e)=>({compressionLevel:mi.get(i,e),formatFlags:mi.get(i,e+2),blocksPerFrame:pt.get(i,e+4),finalFrameBlocks:pt.get(i,e+8),totalFrames:pt.get(i,e+12),bitsPerSample:mi.get(i,e+16),channel:mi.get(i,e+18),sampleRate:pt.get(i,e+20)})},gn={len:32,get:(i,e)=>({ID:new At(8,"ascii").get(i,e),version:pt.get(i,e+8),size:pt.get(i,e+12),fields:pt.get(i,e+16),flags:ud(pt.get(i,e+20))})},mo={len:8,get:(i,e)=>({size:pt.get(i,e),flags:ud(pt.get(i,e+4))})};function ud(i){return{containsHeader:Qs(i,31),containsFooter:Qs(i,30),isHeader:Qs(i,29),readOnly:Qs(i,0),dataType:(i&6)>>1}}function Qs(i,e){return(i&1<<e)!==0}const Li=Ea("music-metadata:parser:APEv2"),ju="APEv2",Ku="APETAGEX";class la extends Wy("APEv2"){}class gi extends cd{constructor(){super(...arguments),this.ape={}}static tryParseApeHeader(e,t,n){return new gi(e,t,n).tryParseApeHeader()}static calculateDuration(e){let t=e.totalFrames>1?e.blocksPerFrame*(e.totalFrames-1):0;return t+=e.finalFrameBlocks,t/e.sampleRate}static async findApeFooterOffset(e,t){const n=new Uint8Array(gn.len),r=e.position;await e.readBuffer(n,{position:t-gn.len}),e.setPosition(r);const s=gn.get(n,0);if(s.ID==="APETAGEX")return s.flags.isHeader?Li(`APE Header found at offset=${t-gn.len}`):(Li(`APE Footer found at offset=${t-gn.len}`),t-=s.size),{footer:s,offset:t}}static parseTagFooter(e,t,n){const r=gn.get(t,t.length-gn.len);if(r.ID!==Ku)throw new la("Unexpected APEv2 Footer ID preamble value");return Pu(t),new gi(e,Pu(t),n).parseTags(r)}async tryParseApeHeader(){if(this.tokenizer.fileInfo.size&&this.tokenizer.fileInfo.size-this.tokenizer.position<gn.len){Li("No APEv2 header found, end-of-file reached");return}const e=await this.tokenizer.peekToken(gn);if(e.ID===Ku)return await this.tokenizer.ignore(gn.len),this.parseTags(e);if(Li(`APEv2 header not found at offset=${this.tokenizer.position}`),this.tokenizer.fileInfo.size){const t=this.tokenizer.fileInfo.size-this.tokenizer.position,n=new Uint8Array(t);return await this.tokenizer.readBuffer(n),gi.parseTagFooter(this.metadata,n,this.options)}}async parse(){const e=await this.tokenizer.readToken(qu);if(e.ID!=="MAC ")throw new la("Unexpected descriptor ID");this.ape.descriptor=e;const t=e.descriptorBytes-qu.len,n=await(t>0?this.parseDescriptorExpansion(t):this.parseHeader());return await this.tokenizer.ignore(n.forwardBytes),this.tryParseApeHeader()}async parseTags(e){const t=new Uint8Array(256);let n=e.size-gn.len;Li(`Parse APE tags at offset=${this.tokenizer.position}, size=${n}`);for(let r=0;r<e.fields;r++){if(n<mo.len){this.metadata.addWarning(`APEv2 Tag-header: ${e.fields-r} items remaining, but no more tag data to read.`);break}const s=await this.tokenizer.readToken(mo);n-=mo.len+s.size,await this.tokenizer.peekBuffer(t,{length:Math.min(t.length,n)});let o=Gu(t,0,t.length);const c=await this.tokenizer.readToken(new At(o,"ascii"));switch(await this.tokenizer.ignore(1),n-=c.length+1,s.flags.dataType){case mr.text_utf8:{const h=(await this.tokenizer.readToken(new At(s.size,"utf8"))).split(/\x00/g);await Promise.all(h.map(f=>this.metadata.addTag(ju,c,f)));break}case mr.binary:if(this.options.skipCovers)await this.tokenizer.ignore(s.size);else{const u=new Uint8Array(s.size);await this.tokenizer.readBuffer(u),o=Gu(u,0,u.length);const h=nd(u.slice(0,o)),f=u.slice(o+1);await this.metadata.addTag(ju,c,{description:h,data:f})}break;case mr.external_info:Li(`Ignore external info ${c}`),await this.tokenizer.ignore(s.size);break;case mr.reserved:Li(`Ignore external info ${c}`),this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${c}"`),await this.tokenizer.ignore(s.size);break}}}async parseDescriptorExpansion(e){return await this.tokenizer.ignore(e),this.parseHeader()}async parseHeader(){const e=await this.tokenizer.readToken(VM);if(this.metadata.setFormat("lossless",!0),this.metadata.setFormat("container","Monkey's Audio"),this.metadata.setFormat("bitsPerSample",e.bitsPerSample),this.metadata.setFormat("sampleRate",e.sampleRate),this.metadata.setFormat("numberOfChannels",e.channel),this.metadata.setFormat("duration",gi.calculateDuration(e)),!this.ape.descriptor)throw new la("Missing APE descriptor");return{forwardBytes:this.ape.descriptor.seekTableBytes+this.ape.descriptor.headerDataBytes+this.ape.descriptor.apeFrameDataBytes+this.ape.descriptor.terminatingDataBytes}}}const WM=Object.freeze(Object.defineProperty({__proto__:null,APEv2Parser:gi,ApeContentError:la},Symbol.toStringTag,{value:"Module"})),ea=Ea("music-metadata:parser:ID3v1"),Zu=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise","Alt. Rock","Bass","Soul","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic","Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta Rap","Top 40","Christian Rap","Pop/Funk","Jungle","Native American","Cabaret","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk/Rock","National Folk","Swing","Fast-Fusion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock","Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groove","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle","Duet","Punk Rock","Drum Solo","A Cappella","Euro-House","Dance Hall","Goa","Drum & Bass","Club-House","Hardcore","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangsta Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue","Salsa","Thrash Metal","Anime","JPop","Synthpop","Abstract","Art Rock","Baroque","Bhangra","Big Beat","Breakbeat","Chillout","Downtempo","Dub","EBM","Eclectic","Electro","Electroclash","Emo","Experimental","Garage","Global","IDM","Illbient","Industro-Goth","Jam Band","Krautrock","Leftfield","Lounge","Math Rock","New Romantic","Nu-Breakz","Post-Punk","Post-Rock","Psytrance","Shoegaze","Space Rock","Trop Rock","World Music","Neoclassical","Audiobook","Audio Theatre","Neue Deutsche Welle","Podcast","Indie Rock","G-Funk","Dubstep","Garage Rock","Psybient"],ta={len:128,get:(i,e)=>{const t=new ur(3).get(i,e);return t==="TAG"?{header:t,title:new ur(30).get(i,e+3),artist:new ur(30).get(i,e+33),album:new ur(30).get(i,e+63),year:new ur(4).get(i,e+93),comment:new ur(28).get(i,e+97),zeroByte:Gi.get(i,e+127),track:Gi.get(i,e+126),genre:Gi.get(i,e+127)}:null}};class ur{constructor(e){this.len=e,this.stringType=new At(e,"latin1")}get(e,t){let n=this.stringType.get(e,t);return n=Xy(n),n=n.trim(),n.length>0?n:void 0}}class hd extends cd{constructor(e,t,n){super(e,t,n),this.apeHeader=n.apeHeader}static getGenre(e){if(e<Zu.length)return Zu[e]}async parse(){if(!this.tokenizer.fileInfo.size){ea("Skip checking for ID3v1 because the file-size is unknown");return}this.apeHeader&&(this.tokenizer.ignore(this.apeHeader.offset-this.tokenizer.position),await new gi(this.metadata,this.tokenizer,this.options).parseTags(this.apeHeader.footer));const e=this.tokenizer.fileInfo.size-ta.len;if(this.tokenizer.position>e){ea("Already consumed the last 128 bytes");return}const t=await this.tokenizer.readToken(ta,e);if(t){ea("ID3v1 header found at: pos=%s",this.tokenizer.fileInfo.size-ta.len);const n=["title","artist","album","comment","track","year"];for(const s of n)t[s]&&t[s]!==""&&await this.addTag(s,t[s]);const r=hd.getGenre(t.genre);r&&await this.addTag("genre",r)}else ea("ID3v1 header not found at: pos=%s",this.tokenizer.fileInfo.size-ta.len)}async addTag(e,t){await this.metadata.addTag("ID3v1",e,t)}}async function XM(i){if(i.fileInfo.size>=128){const e=new Uint8Array(3),t=i.position;return await i.readBuffer(e,{position:i.fileInfo.size-128}),i.setPosition(t),new TextDecoder("latin1").decode(e)==="TAG"}return!1}const YM="LYRICS200";async function qM(i){const e=i.fileInfo.size;if(e>=143){const t=new Uint8Array(15),n=i.position;await i.readBuffer(t,{position:e-143}),i.setPosition(n);const r=new TextDecoder("latin1").decode(t);if(r.slice(6)===YM)return Number.parseInt(r.slice(0,6),10)+15}return 0}async function jM(i,e={}){const t={mimeType:i.type,size:i.size};return i instanceof File&&(t.path=i.name),KM(i.stream(),t,e)}async function KM(i,e,t={}){const n=Hv(i,{fileInfo:typeof e=="string"?{mimeType:e}:e});try{return await ZM(n,t)}finally{await n.close()}}function ZM(i,e){return new zM().parse(i,void 0,e)}async function $M(i,e={}){let t=i.fileInfo.size;if(await XM(i)){t-=128;const n=await qM(i);t-=n}e.apeHeader=await gi.findApeFooterOffset(i,t)}var dd=!1,ss=!1;const JM=new Hp;var di=0,QM=45,es=0,Vn=0,go=di*2*Math.PI/60,fd=null,Vi=null,pd=null,md=null,wn=null,cn=null,$u=null,vt=null,as=0,an=0,Yn=null,gd=null,va=new un(0,0,0,0);const Ju=new Ee;var oi=!0,Zr=!1,vi=!1,gc=!1,_c=!1,Qu=null,In=null,ai=0,jt=0,_o=32,ci=0,eh=0,xc=0,li=-.54,dr=-.834,Wn,th=Math.PI/4.8,xo=0,vo=-Math.PI/4.8,nh=-Math.PI/2;const eS={types:[{description:"Audio",accept:{"audio/*":[".mp3",".mpeg",".opus",".ogg",".oga",".wav",".aac",".caf",".m4a",".m4b",".mp4",".weba",".webm",".dolby",".flac"]}}],excludeAcceptAllOption:!0,multiple:!0};var zi=[],_t=[],Nt=0,gr=0,Di=new ms.Howl({src:["./vinyl-crackle-33rpm-6065.mp3"],rate:1,volume:.4,loop:!0}),tS=new ms.Howl({src:["./record_end_01.mp3"],rate:1,volume:.3,loop:!0}),nS=new ms.Howl({src:["./record_end_02.mp3"],rate:1,volume:.3,loop:!0}),iS=new ms.Howl({src:["./record_end_03.mp3"],rate:1,volume:.3,loop:!0}),Hi=null;const Qt=new Ux({antialias:!0});Qt.outputColorspace=yt;Qt.setSize(window.innerWidth,window.innerHeight);Qt.setClearColor(2171169);Qt.setPixelRatio(window.devicePixelRatio*1.25);Qt.shadowMap.enabled=!0;Qt.shadowMap.type=bn;Qt.toneMapping=sh;Qt.toneMappingExposure=1.2;document.body.appendChild(Qt.domElement);const Jn=new cp,rS=new Dp().setPath("./").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);Jn.environment=rS;Jn.environmentIntensity=1.75;Jn.environmentRotation.y=3.4;const ba=new Dt(35,window.innerWidth/window.innerHeight,.01,20);ba.position.set(0,1.25,0);const ua=new Pv(Qt,ba,Qt.domElement),_d=new Fx().setPath("./");_d.load("AT-LP5_v02.glb",i=>{i.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1)});const e=i.scene;Jn.add(e),fd=e.getObjectByName("platter"),Vi=e.getObjectByName("vinyl"),Vi.visible=!1,pd=e.getObjectByName("vinylLabel"),cn=e.getObjectByName("dial"),wn=e.getObjectByName("toneArm"),$u=e.getObjectByName("ground"),$u.material.dithering=!0,vt=e.getObjectByName("boneYaw"),Yn=e.getObjectByName("bonePitch"),gd=Yn.clone(),va.copy(Yn.quaternion),ua.add(wn),ua.add(cn),ua.add(Vi),wn.addEventListener("mousedown",t=>{Ju.x=t.clientX/window.innerWidth*2-1,Ju.y=-(t.clientY/window.innerHeight)*2+1,as=vt.rotation.y,vi=!0,In=wn,Vt.enableRotate=!1;let n=new un,r=new P(0,0,1);r.applyQuaternion(Yn.quaternion),n.setFromAxisAngle(r,.05),va.copy(Yn.quaternion).multiply(n),_t.length>0&&_t[Nt].stop(),document.addEventListener("mouseup",vd)}),wn.addEventListener("mouseover",()=>{document.body.style.cursor="pointer"}),wn.addEventListener("mouseout",()=>{document.body.style.cursor="default"}),cn.addEventListener("mousedown",t=>{vi=!0,In=cn,Vt.enableRotate=!1}),cn.addEventListener("mouseup",()=>{vi=!1,gc=!1,In=null,Vt.enableRotate=!0}),cn.addEventListener("mouseover",()=>{document.body.style.cursor="pointer"}),cn.addEventListener("mouseout",()=>{document.body.style.cursor="default"}),dd=!0});_d.load("sleeve_01.glb",i=>{i.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1)});const e=i.scene;Jn.add(e),md=e.getObjectByName("sleeve")});const Bt=new Sa(13005701,3.25);Bt.position.set(-1,4,-1);Bt.castShadow=!0;Bt.shadow.mapSize.width=1024;Bt.shadow.mapSize.height=1024;Bt.shadow.camera.near=.1;Bt.shadow.camera.far=7;Bt.shadow.camera.left=-2;Bt.shadow.camera.right=2;Bt.shadow.camera.top=2;Bt.shadow.camera.bottom=-2;Bt.shadow.bias=-5e-4;Bt.shadow.radius=2;Bt.shadow.blurSamples=8;Jn.add(Bt);const Wt=new Sa(1048575,1.25);Wt.position.set(1,4,1);Wt.castShadow=!0;Wt.shadow.mapSize.width=1024;Wt.shadow.mapSize.height=1024;Wt.shadow.camera.near=.1;Wt.shadow.camera.far=7;Wt.shadow.camera.left=-2;Wt.shadow.camera.right=2;Wt.shadow.camera.top=2;Wt.shadow.camera.bottom=-2;Wt.shadow.bias=-5e-4;Wt.shadow.radius=2;Wt.shadow.blurSamples=8;Jn.add(Wt);const Yc=new Sa(16777215,.04);Yc.position.set(2,2,-2);Yc.castShadow=!1;Jn.add(Yc);new Jp(Bt.shadow.camera);const Vt=new xv(ba,Qt.domElement);Vt.enableDamping=!0;Vt.enablePan=!1;Vt.autoRotate=!1;Vt.enableRotate=!0;Vt.maxDistance=2;Vt.minDistance=.3;Vt.maxPolarAngle=1.2;Vt.target=new P(0,.1,0);Vt.update();document.getElementById("loadTracksBtn").addEventListener("click",()=>{aS()});document.addEventListener("mousemove",i=>{if(vi){if(In==wn){const e=i.movementX*.001;as+=e;const t=-Math.PI/3.5,n=Math.PI/20;as=yr.clamp(as,t,n)}vi&&In==cn&&(gc||(ai=i.clientY,gc=!0),an==th&&(jt>_o&&(an=xo,jt=0,ai=i.clientY),es=33),an==xo&&(jt<-32&&(an=th,jt=0,ai=i.clientY),jt>_o&&(an=vo,jt=0,ai=i.clientY),es=0),an==vo&&(jt<-32&&(an=xo,jt=0,ai=i.clientY),jt>_o&&(an=nh,jt=0,ai=i.clientY),es=45),an==nh&&(jt<-32&&(an=vo,jt=0,ai=i.clientY),es=78),jt=i.clientY-ai)}});function xd(){if(dd){const i=JM.getDelta();di=yr.lerp(di,es,.2),Vn=di/QM,ss&&(_t[Nt].rate(Vn),Di.rate(Vn)),go=di*2*Math.PI/60,ci=sS(vt.rotation.y,li,dr),Yn.quaternion.slerp(va,.1),vt.rotation.y>li&&vt.rotation.y<li+.02&&!oi&&(vt.rotation.y+=xc*25*i*Vn),vt.rotation.y<li&&vt.rotation.y>dr&&In!=wn&&(vt.rotation.y+=xc*i*Vn,_t.length>0&&!_t[Nt].playing()&&!oi&&vt.rotation.y>dr+5e-4&&!Zr&&_t[Nt].play()),Yn.rotation.x>-1.575?oi=!1:(oi=!0,Zr=!1),_t.length>0&&vt.rotation.y<li+.02&&!oi&&di>1&&!Zr?Di.playing()||(Di.seek(Math.random()*Di.duration()),Di.play()):Di.pause(),ss&&vt.rotation.y<dr+5e-4&&!oi&&!Zr&&(Hi.playing()||(Zr=!0,Hi.play(),Di.pause())),ss&&oi&&Hi.playing()&&Hi.pause(),vt.rotation.y<dr&&(ci=1),vt.rotation.y>li&&(ci=0),vi&&In==wn&&(vt.rotation.y=yr.lerp(vt.rotation.y,as,.075)),vi&&In==cn&&(cn.rotation.y=yr.lerp(cn.rotation.y,an,.35)),Math.abs(cn.rotation.y-an)>.05&&uS(),fd.rotation.y-=go*i,Vi.rotation.y-=go*i,vt.rotation.y<li&&In!=wn&&_t.length>0&&(Wn=(Vi.rotation.y%(2*Math.PI)+2*Math.PI)%(2*Math.PI),Wn<6.2&&Wn>3.1&&(vt.rotation.y-=.01*i*Vn*.25*(1.7-ci)),Wn<3.1&&Wn>0&&(vt.rotation.y+=.01*i*Vn*.25*(1.7-ci)),Wn<6&&Wn>5.3&&(Yn.rotation.x-=.1*i*Vn*.5*(1.1-ci)),Wn<5.3&&Wn>4.6&&(Yn.rotation.x+=.1*i*Vn*.5*(1.1-ci)))}ua.update(),Vt.update(),requestAnimationFrame(xd),Qt.render(Jn,ba)}function sS(i,e,t){return(i-e)/(t-e)}function vd(i){Vt.enableRotate=!0,di>1&&yd(),vi=!1,In=null,va.copy(gd.quaternion),document.removeEventListener("mouseup",vd)}async function aS(){ss=!1;try{const i=await window.showOpenFilePicker(eS),e=await Promise.all(i.map(r=>r.getFile()));_t.length>0&&_t[Nt]&&_t[Nt].unload(),_t=[],zi=[],gr=0,Nt=0;let t=[],n=!1;for(const r of e){const s=URL.createObjectURL(r);if(!n){const c=await jM(r);if(c.common.picture&&c.common.picture.length>0){const u=c.common.picture[0];u!=null&&lS(u),n=!0,Vi.visible=!0}}let o=new ms.Howl({src:[s],format:[r.type.split("/")[1]],onload:function(){let c=o.duration();t.push({fileName:r.name,track:o,duration:c}),t.length===e.length&&oS(t)},onend:function(){!oi&&di>1&&!_c&&cS()}})}}catch(i){console.error("Error loading files:",i)}}function oS(i){i.sort((t,n)=>t.fileName.localeCompare(n.fileName,void 0,{numeric:!0}));for(const t of i){let{track:n,duration:r}=t;_t.push(n),zi.push(gr),gr+=r,console.log(`Track: ${t.fileName}, Duration: ${r}`)}console.log("Final Ordered Track Start Times:",zi),console.log("Total playlist duration:",gr),eh=gr,xc=(dr-li)/eh;var e=Math.random();e<.33&&(Hi=tS),e>.33&&e<.66&&(Hi=nS),e>.66&&(Hi=iS),ss=!0}function cS(){Nt++,Nt<_t.length?_t[Nt].play():Nt=_t.length-1}function yd(){if(!_t.length)return;_c=!0;let i=ci*gr,e=zi.findIndex((t,n)=>i>=t&&(n===zi.length-1||i<zi[n+1]));if(e!==-1){let t=i-zi[e];_t[Nt]&&_t[Nt].stop(),Nt=e,_t[Nt].seek(t),clearTimeout(Qu),Qu=setTimeout(()=>{_c=!1},200)}}function lS(i){if(!i||!Vi)return;const e=new Blob([i.data],{type:i.format}),t=URL.createObjectURL(e);new Fh().load(t,r=>{pd.material=new hs({map:r,roughness:.2,metalness:0}),md.material=new hs({map:r,roughness:.3,metalness:0}),console.log("Album art applied to record texture!")})}function uS(){yd()}xd();export{Vu as A,cd as B,hc as C,xS as D,yn as E,ld as F,nd as G,Zu as H,Vv as I,gi as J,ES as K,hd as L,Xy as M,jh as N,Jy as O,Gu as P,Qy as Q,AS as R,At as S,dc as T,ga as U,bS as V,$y as W,rs as a,Gi as b,Ea as c,Jh as d,fc as e,pt as f,od as g,yS as h,TS as i,$h as j,mi as k,Qr as l,Wy as m,Zv as n,Pu as o,jv as p,qv as q,Kh as r,SS as s,ty as t,vS as u,Qv as v,Kv as w,Hu as x,Zh as y,Yv as z};
