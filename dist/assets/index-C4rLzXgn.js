const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MpegParser-DbLfyyBM.js","./AbstractID3Parser-CuHu93ME.js","./ID3v2Parser-B3SxJVTH.js","./DsdiffParser-DoWQgsfC.js","./AiffParser-DqLeZ1_O.js","./DsfParser-DQ2um83A.js","./FlacParser-DRgPlDW9.js","./VorbisParser-CZQovsWq.js","./MusepackParser-BeIeiHgQ.js","./OggParser-I-i1WgjX.js","./WaveParser-BTcdIsnn.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="173",es={ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qp=0,Ou=1,Yp=2,$d=1,jp=2,jn=3,Ei=0,cn=1,Zn=2,Qn=0,ts=1,Fu=2,Bu=3,ku=4,Kp=5,xr=100,$p=101,Zp=102,Jp=103,Qp=104,em=200,tm=201,nm=202,im=203,ql=204,Yl=205,rm=206,sm=207,am=208,om=209,lm=210,cm=211,um=212,hm=213,dm=214,jl=0,Kl=1,$l=2,as=3,Zl=4,Jl=5,Ql=6,ec=7,Zd=0,fm=1,pm=2,Ji=0,Jd=1,Qd=2,ef=3,eu=4,tf=5,nf=6,rf=7,zu="attached",mm="detached",sf=300,os=301,ls=302,tc=303,nc=304,No=306,cs=1e3,Vi=1001,_o=1002,Bt=1003,af=1004,Fs=1005,_n=1006,to=1007,xi=1008,bi=1009,of=1010,lf=1011,na=1012,tu=1013,br=1014,Gn=1015,Mr=1016,nu=1017,iu=1018,us=1020,cf=35902,uf=1021,hf=1022,In=1023,df=1024,ff=1025,ns=1026,hs=1027,ru=1028,su=1029,pf=1030,au=1031,ou=1033,no=33776,io=33777,ro=33778,so=33779,ic=35840,rc=35841,sc=35842,ac=35843,oc=36196,lc=37492,cc=37496,uc=37808,hc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,yc=37818,Sc=37819,Tc=37820,Ec=37821,ao=36492,bc=36494,Mc=36495,mf=36283,Ac=36284,wc=36285,Rc=36286,ia=2300,ra=2301,Yo=2302,Hu=2400,Gu=2401,Vu=2402,gm=2500,_m=0,gf=1,Cc=2,xm=3200,_f=3201,xf=0,vm=1,zi="",Ct="srgb",Zt="srgb-linear",xo="linear",st="srgb",Cr=7680,Wu=519,ym=512,Sm=513,Tm=514,vf=515,Em=516,bm=517,Mm=518,Am=519,Ic=35044,Xu="300 es",vi=2e3,vo=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const qs=Math.PI/180,ds=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function lu(i,e){return(i%e+e)%e}function wm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Rm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ys(i,e,t){return(1-t)*i+t*e}function Cm(i,e,t,n){return Ys(i,e,1-Math.exp(-t*n))}function Im(i,e=1){return e-Math.abs(lu(i,e*2)-e)}function Pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nm(i,e){return i+Math.random()*(e-i)}function Um(i){return i*(.5-Math.random())}function Om(i){i!==void 0&&(qu=i);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(i){return i*qs}function Bm(i){return i*ds}function km(i){return(i&i-1)===0&&i!==0}function zm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gm(i,e,t,n,r){const s=Math.cos,a=Math.sin,l=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),o=s((e-n)/2),c=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(l*f,u*o,u*c,l*h);break;case"YZY":i.set(u*c,l*f,u*o,l*h);break;case"ZXZ":i.set(u*o,u*c,l*f,l*h);break;case"XZX":i.set(l*f,u*m,u*d,l*h);break;case"YXY":i.set(u*d,l*f,u*m,l*h);break;case"ZYZ":i.set(u*m,u*d,l*f,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:qs,RAD2DEG:ds,generateUUID:Wn,clamp:He,euclideanModulo:lu,mapLinear:wm,inverseLerp:Rm,lerp:Ys,damp:Cm,pingpong:Im,smoothstep:Pm,smootherstep:Dm,randInt:Lm,randFloat:Nm,randFloatSpread:Um,seededRandom:Om,degToRad:Fm,radToDeg:Bm,isPowerOfTwo:km,ceilPowerOfTwo:zm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Gm,normalize:at,denormalize:zn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,r,s,a,l,u,h){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,h)}set(e,t,n,r,s,a,l,u,h){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],f=n[4],o=n[7],c=n[2],d=n[5],m=n[8],_=r[0],g=r[3],p=r[6],S=r[1],b=r[4],y=r[7],C=r[2],A=r[5],w=r[8];return s[0]=a*_+l*S+u*C,s[3]=a*g+l*b+u*A,s[6]=a*p+l*y+u*w,s[1]=h*_+f*S+o*C,s[4]=h*g+f*b+o*A,s[7]=h*p+f*y+o*w,s[2]=c*_+d*S+m*C,s[5]=c*g+d*b+m*A,s[8]=c*p+d*y+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*l*h-n*s*f+n*l*u+r*s*h-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],f=e[8],o=f*a-l*h,c=l*u-f*s,d=h*s-a*u,m=t*o+n*c+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=o*_,e[1]=(r*h-f*n)*_,e[2]=(l*n-r*a)*_,e[3]=c*_,e[4]=(f*t-r*u)*_,e[5]=(r*s-l*t)*_,e[6]=d*_,e[7]=(n*u-h*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*l)+a+e,-r*h,r*u,-r*(-h*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new Fe;function yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vm(){const i=sa("canvas");return i.style.display="block",i}const Yu={};function Yr(i){i in Yu||(Yu[i]=!0,console.warn(i))}function Wm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Xm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ju=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ym(){const i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:xo,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:st,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}const qe=Ym();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=sa("canvas")),Ir.width=e.width,Ir.height=e.height;const n=Ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ir}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Km=0;class Sf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $m=0;class Lt extends Ar{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Vi,r=Vi,s=_n,a=xi,l=In,u=bi,h=Lt.DEFAULT_ANISOTROPY,f=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Wn(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=sf;Lt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,h=u[0],f=u[4],o=u[8],c=u[1],d=u[5],m=u[9],_=u[2],g=u[6],p=u[10];if(Math.abs(f-c)<.01&&Math.abs(o-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+c)<.1&&Math.abs(o+_)<.1&&Math.abs(m+g)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,y=(d+1)/2,C=(p+1)/2,A=(f+c)/4,w=(o+_)/4,N=(m+g)/4;return b>y&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=A/n,s=w/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=N/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=N/s),this.set(n,r,s,t),this}let S=Math.sqrt((g-m)*(g-m)+(o-_)*(o-_)+(c-f)*(c-f));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(o-_)/S,this.z=(c-f)/S,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zm extends Ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Sf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tf extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let u=n[r+0],h=n[r+1],f=n[r+2],o=n[r+3];const c=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=o;return}if(l===1){e[t+0]=c,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(o!==_||u!==c||h!==d||f!==m){let g=1-l;const p=u*c+h*d+f*m+o*_,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,p*S);g=Math.sin(g*A)/C,l=Math.sin(l*A)/C}const y=l*S;if(u=u*g+c*y,h=h*g+d*y,f=f*g+m*y,o=o*g+_*y,g===1-l){const C=1/Math.sqrt(u*u+h*h+f*f+o*o);u*=C,h*=C,f*=C,o*=C}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=o}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],u=n[r+1],h=n[r+2],f=n[r+3],o=s[a],c=s[a+1],d=s[a+2],m=s[a+3];return e[t]=l*m+f*o+u*d-h*c,e[t+1]=u*m+f*c+h*o-l*d,e[t+2]=h*m+f*d+l*c-u*o,e[t+3]=f*m-l*o-u*c-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,h=l(n/2),f=l(r/2),o=l(s/2),c=u(n/2),d=u(r/2),m=u(s/2);switch(a){case"XYZ":this._x=c*f*o+h*d*m,this._y=h*d*o-c*f*m,this._z=h*f*m+c*d*o,this._w=h*f*o-c*d*m;break;case"YXZ":this._x=c*f*o+h*d*m,this._y=h*d*o-c*f*m,this._z=h*f*m-c*d*o,this._w=h*f*o+c*d*m;break;case"ZXY":this._x=c*f*o-h*d*m,this._y=h*d*o+c*f*m,this._z=h*f*m+c*d*o,this._w=h*f*o-c*d*m;break;case"ZYX":this._x=c*f*o-h*d*m,this._y=h*d*o+c*f*m,this._z=h*f*m-c*d*o,this._w=h*f*o+c*d*m;break;case"YZX":this._x=c*f*o+h*d*m,this._y=h*d*o+c*f*m,this._z=h*f*m-c*d*o,this._w=h*f*o-c*d*m;break;case"XZY":this._x=c*f*o-h*d*m,this._y=h*d*o-c*f*m,this._z=h*f*m+c*d*o,this._w=h*f*o+c*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],u=t[9],h=t[2],f=t[6],o=t[10],c=n+l+o;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(f-u)*d,this._y=(s-h)*d,this._z=(a-r)*d}else if(n>l&&n>o){const d=2*Math.sqrt(1+n-l-o);this._w=(f-u)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+h)/d}else if(l>o){const d=2*Math.sqrt(1+l-n-o);this._w=(s-h)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(u+f)/d}else{const d=2*Math.sqrt(1+o-n-l);this._w=(a-r)/d,this._x=(s+h)/d,this._y=(u+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*l+r*h-s*u,this._y=r*f+a*u+s*l-n*h,this._z=s*f+a*h+n*u-r*l,this._w=a*f-n*l-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,l),o=Math.sin((1-t)*f)/h,c=Math.sin(t*f)/h;return this._w=a*o+this._w*c,this._x=n*o+this._x*c,this._y=r*o+this._y*c,this._z=s*o+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,h=2*(a*r-l*n),f=2*(l*t-s*r),o=2*(s*n-a*t);return this.x=t+u*h+a*o-l*f,this.y=n+u*f+l*h-s*o,this.z=r+u*o+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*a-n*u,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new P,$u=new yn;class wi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),xa.subVectors(this.max,As),Pr.subVectors(e.a,As),Dr.subVectors(e.b,As),Lr.subVectors(e.c,As),Ci.subVectors(Dr,Pr),Ii.subVectors(Lr,Dr),rr.subVectors(Pr,Lr);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-rr.z,rr.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,rr.z,0,-rr.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-rr.y,rr.x,0];return!Zo(t,Pr,Dr,Lr,xa)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Pr,Dr,Lr,xa))?!1:(va.crossVectors(Ci,Ii),t=[va.x,va.y,va.z],Zo(t,Pr,Dr,Lr,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,_a=new wi,Pr=new P,Dr=new P,Lr=new P,Ci=new P,Ii=new P,rr=new P,As=new P,xa=new P,va=new P,sr=new P;function Zo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){sr.fromArray(i,s);const l=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),u=e.dot(sr),h=t.dot(sr),f=n.dot(sr);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>l)return!1}return!0}const Qm=new wi,ws=new P,Jo=new P;class ri{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ws,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Jo)),this.expandByPoint(ws.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new P,Qo=new P,ya=new P,Pi=new P,el=new P,Sa=new P,tl=new P;class vs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qo.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ya),l=Pi.dot(this.direction),u=-Pi.dot(ya),h=Pi.lengthSq(),f=Math.abs(1-a*a);let o,c,d,m;if(f>0)if(o=a*u-l,c=a*l-u,m=s*f,o>=0)if(c>=-m)if(c<=m){const _=1/f;o*=_,c*=_,d=o*(o+a*c+2*l)+c*(a*o+c+2*u)+h}else c=s,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*u)+h;else c=-s,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*u)+h;else c<=-m?(o=Math.max(0,-(-a*s+l)),c=o>0?-s:Math.min(Math.max(-s,-u),s),d=-o*o+c*(c+2*u)+h):c<=m?(o=0,c=Math.min(Math.max(-s,-u),s),d=c*(c+2*u)+h):(o=Math.max(0,-(a*s+l)),c=o>0?s:Math.min(Math.max(-s,-u),s),d=-o*o+c*(c+2*u)+h);else c=a>0?-s:s,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,o),r&&r.copy(Qo).addScaledVector(ya,c),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,u;const h=1/this.direction.x,f=1/this.direction.y,o=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,r=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,r=(e.min.x-c.x)*h),f>=0?(s=(e.min.y-c.y)*f,a=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,a=(e.min.y-c.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),o>=0?(l=(e.min.z-c.z)*o,u=(e.max.z-c.z)*o):(l=(e.max.z-c.z)*o,u=(e.min.z-c.z)*o),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){el.subVectors(t,e),Sa.subVectors(n,e),tl.crossVectors(el,Sa);let a=this.direction.dot(tl),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const u=l*this.direction.dot(Sa.crossVectors(Pi,Sa));if(u<0)return null;const h=l*this.direction.dot(el.cross(Pi));if(h<0||u+h>a)return null;const f=-l*Pi.dot(tl);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,r,s,a,l,u,h,f,o,c,d,m,_,g){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,h,f,o,c,d,m,_,g)}set(e,t,n,r,s,a,l,u,h,f,o,c,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=u,p[2]=h,p[6]=f,p[10]=o,p[14]=c,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(r),h=Math.sin(r),f=Math.cos(s),o=Math.sin(s);if(e.order==="XYZ"){const c=a*f,d=a*o,m=l*f,_=l*o;t[0]=u*f,t[4]=-u*o,t[8]=h,t[1]=d+m*h,t[5]=c-_*h,t[9]=-l*u,t[2]=_-c*h,t[6]=m+d*h,t[10]=a*u}else if(e.order==="YXZ"){const c=u*f,d=u*o,m=h*f,_=h*o;t[0]=c+_*l,t[4]=m*l-d,t[8]=a*h,t[1]=a*o,t[5]=a*f,t[9]=-l,t[2]=d*l-m,t[6]=_+c*l,t[10]=a*u}else if(e.order==="ZXY"){const c=u*f,d=u*o,m=h*f,_=h*o;t[0]=c-_*l,t[4]=-a*o,t[8]=m+d*l,t[1]=d+m*l,t[5]=a*f,t[9]=_-c*l,t[2]=-a*h,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const c=a*f,d=a*o,m=l*f,_=l*o;t[0]=u*f,t[4]=m*h-d,t[8]=c*h+_,t[1]=u*o,t[5]=_*h+c,t[9]=d*h-m,t[2]=-h,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const c=a*u,d=a*h,m=l*u,_=l*h;t[0]=u*f,t[4]=_-c*o,t[8]=m*o+d,t[1]=o,t[5]=a*f,t[9]=-l*f,t[2]=-h*f,t[6]=d*o+m,t[10]=c-_*o}else if(e.order==="XZY"){const c=a*u,d=a*h,m=l*u,_=l*h;t[0]=u*f,t[4]=-o,t[8]=h*f,t[1]=c*o+_,t[5]=a*f,t[9]=d*o-m,t[2]=m*o-d,t[6]=l*f,t[10]=_*o+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,n){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Di.crossVectors(n,dn),Di.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Di.crossVectors(n,dn)),Di.normalize(),Ta.crossVectors(dn,Di),r[0]=Di.x,r[4]=Ta.x,r[8]=dn.x,r[1]=Di.y,r[5]=Ta.y,r[9]=dn.y,r[2]=Di.z,r[6]=Ta.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],f=n[1],o=n[5],c=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],b=n[7],y=n[11],C=n[15],A=r[0],w=r[4],N=r[8],T=r[12],E=r[1],I=r[5],W=r[9],B=r[13],H=r[2],K=r[6],V=r[10],J=r[14],z=r[3],ie=r[7],ue=r[11],_e=r[15];return s[0]=a*A+l*E+u*H+h*z,s[4]=a*w+l*I+u*K+h*ie,s[8]=a*N+l*W+u*V+h*ue,s[12]=a*T+l*B+u*J+h*_e,s[1]=f*A+o*E+c*H+d*z,s[5]=f*w+o*I+c*K+d*ie,s[9]=f*N+o*W+c*V+d*ue,s[13]=f*T+o*B+c*J+d*_e,s[2]=m*A+_*E+g*H+p*z,s[6]=m*w+_*I+g*K+p*ie,s[10]=m*N+_*W+g*V+p*ue,s[14]=m*T+_*B+g*J+p*_e,s[3]=S*A+b*E+y*H+C*z,s[7]=S*w+b*I+y*K+C*ie,s[11]=S*N+b*W+y*V+C*ue,s[15]=S*T+b*B+y*J+C*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],h=e[13],f=e[2],o=e[6],c=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*u*o-r*h*o-s*l*c+n*h*c+r*l*d-n*u*d)+_*(+t*u*d-t*h*c+s*a*c-r*a*d+r*h*f-s*u*f)+g*(+t*h*o-t*l*d-s*a*o+n*a*d+s*l*f-n*h*f)+p*(-r*l*f-t*u*o+t*l*c+r*a*o-n*a*c+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],f=e[8],o=e[9],c=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],S=o*g*h-_*c*h+_*u*d-l*g*d-o*u*p+l*c*p,b=m*c*h-f*g*h-m*u*d+a*g*d+f*u*p-a*c*p,y=f*_*h-m*o*h+m*l*d-a*_*d-f*l*p+a*o*p,C=m*o*u-f*_*u-m*l*c+a*_*c+f*l*g-a*o*g,A=t*S+n*b+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(_*c*s-o*g*s-_*r*d+n*g*d+o*r*p-n*c*p)*w,e[2]=(l*g*s-_*u*s+_*r*h-n*g*h-l*r*p+n*u*p)*w,e[3]=(o*u*s-l*c*s-o*r*h+n*c*h+l*r*d-n*u*d)*w,e[4]=b*w,e[5]=(f*g*s-m*c*s+m*r*d-t*g*d-f*r*p+t*c*p)*w,e[6]=(m*u*s-a*g*s-m*r*h+t*g*h+a*r*p-t*u*p)*w,e[7]=(a*c*s-f*u*s+f*r*h-t*c*h-a*r*d+t*u*d)*w,e[8]=y*w,e[9]=(m*o*s-f*_*s-m*n*d+t*_*d+f*n*p-t*o*p)*w,e[10]=(a*_*s-m*l*s+m*n*h-t*_*h-a*n*p+t*l*p)*w,e[11]=(f*l*s-a*o*s-f*n*h+t*o*h+a*n*d-t*l*d)*w,e[12]=C*w,e[13]=(f*_*r-m*o*r+m*n*c-t*_*c-f*n*g+t*o*g)*w,e[14]=(m*l*r-a*_*r-m*n*u+t*_*u+a*n*g-t*l*g)*w,e[15]=(a*o*r-f*l*r+f*n*u-t*o*u-a*n*c+t*l*c)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,h=s*a,f=s*l;return this.set(h*a+n,h*l-r*u,h*u+r*l,0,h*l+r*u,f*l+n,f*u-r*a,0,h*u-r*l,f*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,h=s+s,f=a+a,o=l+l,c=s*h,d=s*f,m=s*o,_=a*f,g=a*o,p=l*o,S=u*h,b=u*f,y=u*o,C=n.x,A=n.y,w=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+y)*C,r[2]=(m-b)*C,r[3]=0,r[4]=(d-y)*A,r[5]=(1-(c+p))*A,r[6]=(g+S)*A,r[7]=0,r[8]=(m+b)*w,r[9]=(g-S)*w,r[10]=(1-(c+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const a=Nr.set(r[4],r[5],r[6]).length(),l=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const h=1/s,f=1/a,o=1/l;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=o,Un.elements[9]*=o,Un.elements[10]*=o,t.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=vi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-r),o=(t+e)/(t-e),c=(n+r)/(n-r);let d,m;if(l===vi)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(l===vo)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=o,u[12]=0,u[1]=0,u[5]=f,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=d,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=vi){const u=this.elements,h=1/(t-e),f=1/(n-r),o=1/(a-s),c=(t+e)*h,d=(n+r)*f;let m,_;if(l===vi)m=(a+s)*o,_=-2*o;else if(l===vo)m=s*o,_=-1*o;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-c,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-d,u[2]=0,u[6]=0,u[10]=_,u[14]=-m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Nr=new P,Un=new Ne,eg=new P(0,0,0),tg=new P(1,1,1),Di=new P,Ta=new P,dn=new P,Zu=new Ne,Ju=new yn;class ni{constructor(e=0,t=0,n=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],u=r[1],h=r[5],f=r[9],o=r[2],c=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-o,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-o,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-o,s)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ng=0;const Qu=new P,Ur=new yn,ui=new Ne,Ea=new P,Rs=new P,ig=new P,rg=new yn,eh=new P(1,0,0),th=new P(0,1,0),nh=new P(0,0,1),ih={type:"added"},sg={type:"removed"},Or={type:"childadded",child:null},nl={type:"childremoved",child:null};class gt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new ni,n=new yn,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Fe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Rs,Ea,this.up):ui.lookAt(Ea,Rs,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ui),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sg),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const o=u[h];s(e.shapes,o)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),o=a(e.shapes),c=a(e.skeletons),d=a(e.animations),m=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),o.length>0&&(n.shapes=o),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new P,hi=new P,il=new P,di=new P,Fr=new P,Br=new P,rh=new P,rl=new P,sl=new P,al=new P,ol=new tt,ll=new tt,cl=new tt;class Hn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){On.subVectors(r,t),hi.subVectors(n,t),il.subVectors(e,t);const a=On.dot(On),l=On.dot(hi),u=On.dot(il),h=hi.dot(hi),f=hi.dot(il),o=a*h-l*l;if(o===0)return s.set(0,0,0),null;const c=1/o,d=(h*u-l*f)*c,m=(a*f-l*u)*c;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,r,s,a,l,u){return this.getBarycoord(e,t,n,r,di)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,di.x),u.addScaledVector(a,di.y),u.addScaledVector(l,di.z),u)}static getInterpolatedAttribute(e,t,n,r,s,a){return ol.setScalar(0),ll.setScalar(0),cl.setScalar(0),ol.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ol,s.x),a.addScaledVector(ll,s.y),a.addScaledVector(cl,s.z),a}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Fr.subVectors(r,n),Br.subVectors(s,n),rl.subVectors(e,n);const u=Fr.dot(rl),h=Br.dot(rl);if(u<=0&&h<=0)return t.copy(n);sl.subVectors(e,r);const f=Fr.dot(sl),o=Br.dot(sl);if(f>=0&&o<=f)return t.copy(r);const c=u*o-f*h;if(c<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(Fr,a);al.subVectors(e,s);const d=Fr.dot(al),m=Br.dot(al);if(m>=0&&d<=m)return t.copy(s);const _=d*h-u*m;if(_<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(n).addScaledVector(Br,l);const g=f*m-d*o;if(g<=0&&o-f>=0&&d-m>=0)return rh.subVectors(s,r),l=(o-f)/(o-f+(d-m)),t.copy(r).addScaledVector(rh,l);const p=1/(g+_+c);return a=_*p,l=c*p,t.copy(n).addScaledVector(Fr,a).addScaledVector(Br,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ba={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=lu(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ul(a,s,e+1/3),this.g=ul(a,s,e),this.b=ul(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(He(Ht.r*255,0,255))*65536+Math.round(He(Ht.g*255,0,255))*256+Math.round(He(Ht.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let u,h;const f=(l+a)/2;if(l===a)u=0,h=0;else{const o=a-l;switch(h=f<=.5?o/(a+l):o/(2-a-l),a){case n:u=(r-s)/o+(r<s?6:0);break;case r:u=(s-n)/o+2;break;case s:u=(n-r)/o+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ct){qe.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(ba);const n=Ys(Li.h,ba.h,t),r=Ys(Li.s,ba.s,t),s=Ys(Li.l,ba.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Pe;Pe.NAMES=Ef;let ag=0;class ei extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=ts,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ql&&(n.blendSrc=this.blendSrc),this.blendDst!==Yl&&(n.blendDst=this.blendDst),this.blendEquation!==xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,Ma=new Ee;let og=0;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}}class bf extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mf extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xn extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lg=0;const Mn=new Ne,hl=new gt,kr=new P,fn=new wi,Cs=new wi,Dt=new P;class qn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?Mf:bf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Cs.setFromBufferAttribute(l),this.morphTargetsRelative?(Dt.addVectors(fn.min,Cs.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,Cs.max),fn.expandByPoint(Dt)):(fn.expandByPoint(Cs.min),fn.expandByPoint(Cs.max))}fn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)Dt.fromBufferAttribute(l,h),u&&(kr.fromBufferAttribute(e,h),Dt.add(kr)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],u=[];for(let N=0;N<n.count;N++)l[N]=new P,u[N]=new P;const h=new P,f=new P,o=new P,c=new Ee,d=new Ee,m=new Ee,_=new P,g=new P;function p(N,T,E){h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,T),o.fromBufferAttribute(n,E),c.fromBufferAttribute(s,N),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,E),f.sub(h),o.sub(h),d.sub(c),m.sub(c);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(o,-d.y).multiplyScalar(I),g.copy(o).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(I),l[N].add(_),l[T].add(_),l[E].add(_),u[N].add(g),u[T].add(g),u[E].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,T=S.length;N<T;++N){const E=S[N],I=E.start,W=E.count;for(let B=I,H=I+W;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new P,y=new P,C=new P,A=new P;function w(N){C.fromBufferAttribute(r,N),A.copy(C);const T=l[N];b.copy(T),b.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(A,T);const I=y.dot(u[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,I)}for(let N=0,T=S.length;N<T;++N){const E=S[N],I=E.start,W=E.count;for(let B=I,H=I+W;B<H;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const r=new P,s=new P,a=new P,l=new P,u=new P,h=new P,f=new P,o=new P;if(e)for(let c=0,d=e.count;c<d;c+=3){const m=e.getX(c+0),_=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),f.subVectors(a,s),o.subVectors(r,s),f.cross(o),l.fromBufferAttribute(n,m),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,g),l.add(f),u.add(f),h.add(f),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let c=0,d=t.count;c<d;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),f.subVectors(a,s),o.subVectors(r,s),f.cross(o),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(l,u){const h=l.array,f=l.itemSize,o=l.normalized,c=new h.constructor(u.length*f);let d=0,m=0;for(let _=0,g=u.length;_<g;_++){l.isInterleavedBufferAttribute?d=u[_]*l.data.stride+l.offset:d=u[_]*f;for(let p=0;p<f;p++)c[m++]=h[d++]}return new Kt(c,f,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],h=e(u,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,o=h.length;f<o;f++){const c=h[f],d=e(c,n);u.push(d)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let o=0,c=h.length;o<c;o++){const d=h[o];f.push(d.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],o=s[h];for(let c=0,d=o.length;c<d;c++)f.push(o[c].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const o=a[h];this.addGroup(o.start,o.count,o.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new Ne,ar=new vs,Aa=new ri,ah=new P,wa=new P,Ra=new P,Ca=new P,dl=new P,Ia=new P,oh=new P,Pa=new P;class an extends gt{constructor(e=new qn,t=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Ia.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=l[u],o=s[u];f!==0&&(dl.fromBufferAttribute(o,e),a?Ia.addScaledVector(dl,f):Ia.addScaledVector(dl.sub(t),f))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Aa.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Aa,ah)===null||ar.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(sh.copy(s).invert(),ar.copy(e.ray).applyMatrix4(sh),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,o=s.attributes.normal,c=s.groups,d=s.drawRange;if(l!==null)if(Array.isArray(a))for(let m=0,_=c.length;m<_;m++){const g=c[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,C=b;y<C;y+=3){const A=l.getX(y),w=l.getX(y+1),N=l.getX(y+2);r=Da(this,p,e,n,h,f,o,A,w,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=l.getX(g),b=l.getX(g+1),y=l.getX(g+2);r=Da(this,a,e,n,h,f,o,S,b,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let m=0,_=c.length;m<_;m++){const g=c[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),b=Math.min(u.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,C=b;y<C;y+=3){const A=y,w=y+1,N=y+2;r=Da(this,p,e,n,h,f,o,A,w,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(u.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=g,b=g+1,y=g+2;r=Da(this,a,e,n,h,f,o,S,b,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function cg(i,e,t,n,r,s,a,l){let u;if(e.side===cn?u=n.intersectTriangle(a,s,r,!0,l):u=n.intersectTriangle(r,s,a,e.side===Ei,l),u===null)return null;Pa.copy(l),Pa.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Pa);return h<t.near||h>t.far?null:{distance:h,point:Pa.clone(),object:i}}function Da(i,e,t,n,r,s,a,l,u,h){i.getVertexPosition(l,wa),i.getVertexPosition(u,Ra),i.getVertexPosition(h,Ca);const f=cg(i,e,t,n,wa,Ra,Ca,oh);if(f){const o=new P;Hn.getBarycoord(oh,wa,Ra,Ca,o),r&&(f.uv=Hn.getInterpolatedAttribute(r,l,u,h,o,new Ee)),s&&(f.uv1=Hn.getInterpolatedAttribute(s,l,u,h,o,new Ee)),a&&(f.normal=Hn.getInterpolatedAttribute(a,l,u,h,o,new P),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const c={a:l,b:u,c:h,normal:new P,materialIndex:0};Hn.getNormal(wa,Ra,Ca,c.normal),f.face=c,f.barycoord=o}return f}class la extends qn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],o=[];let c=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Xn(h,3)),this.setAttribute("normal",new Xn(f,3)),this.setAttribute("uv",new Xn(o,2));function m(_,g,p,S,b,y,C,A,w,N,T){const E=y/w,I=C/N,W=y/2,B=C/2,H=A/2,K=w+1,V=N+1;let J=0,z=0;const ie=new P;for(let ue=0;ue<V;ue++){const _e=ue*I-B;for(let ze=0;ze<K;ze++){const ct=ze*E-W;ie[_]=ct*S,ie[g]=_e*b,ie[p]=H,h.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[p]=A>0?1:-1,f.push(ie.x,ie.y,ie.z),o.push(ze/w),o.push(1-ue/N),J+=1}}for(let ue=0;ue<N;ue++)for(let _e=0;_e<w;_e++){const ze=c+_e+K*ue,ct=c+_e+K*(ue+1),q=c+(_e+1)+K*(ue+1),te=c+(_e+1)+K*ue;u.push(ze,ct,te),u.push(ct,q,te),z+=6}l.addGroup(d,z,T),d+=z,c+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const r in n)e[r]=n[r]}return e}function ug(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Af(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Uo={clone:fs,merge:qt};var hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wf extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new P,lh=new Ee,ch=new Ee;class jt extends wf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/h,r*=a.width/u,n*=a.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Hr=1;class fg extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(zr,Hr,e,t);r.layers=this.layers,this.add(r);const s=new jt(zr,Hr,e,t);s.layers=this.layers,this.add(s);const a=new jt(zr,Hr,e,t);a.layers=this.layers,this.add(a);const l=new jt(zr,Hr,e,t);l.layers=this.layers,this.add(l);const u=new jt(zr,Hr,e,t);u.layers=this.layers,this.add(u);const h=new jt(zr,Hr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,u]=t;for(const h of t)this.remove(h);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,h,f]=this.children,o=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(o,c,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class uu extends Lt{constructor(e,t,n,r,s,a,l,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,r,s,a,l,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Qn});s.uniforms.tEquirect.value=t;const a=new an(r,s),l=t.minFilter;return t.minFilter===xi&&(t.minFilter=_n),new fg(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Sr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(h,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=h.joints["index-finger-tip"],o=h.joints["thumb-tip"],c=f.position.distanceTo(o.position),d=.02,m=.005;h.inputState.pinching&&c>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gg extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _g{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new P;class hu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uh=new P,hh=new tt,dh=new tt,xg=new P,fh=new Ne,La=new P,pl=new ri,ph=new Ne,ml=new vs;class vg extends an{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zu,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pl.copy(this.boundingSphere),pl.applyMatrix4(r),e.ray.intersectsSphere(pl)!==!1&&(ph.copy(r).invert(),ml.copy(e.ray).applyMatrix4(ph),!(this.boundingBox!==null&&ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;hh.fromBufferAttribute(r.attributes.skinIndex,e),dh.fromBufferAttribute(r.attributes.skinWeight,e),uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=dh.getComponent(s);if(a!==0){const l=hh.getComponent(s);fh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(xg.copy(uh).applyMatrix4(fh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rf extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cf extends Lt{constructor(e=null,t=1,n=1,r,s,a,l,u,h=Bt,f=Bt,o,c){super(null,a,l,u,h,f,r,s,o,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new Ne,yg=new Ne;class du{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const l=e[s]?e[s].matrixWorld:yg;mh.multiplyMatrices(l,t[s]),mh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new du(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cf(t,e,e,In,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Rf),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const l=n[r];e.boneInverses.push(l.toArray())}return e}}class Pc extends Kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gr=new Ne,gh=new Ne,Na=[],_h=new wi,Sg=new Ne,Is=new an,Ps=new ri;class Tg extends an{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Sg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),_h.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(_h)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Ps.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=r[a+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gr),gh.multiplyMatrices(n,Gr),Is.matrixWorld=gh,Is.raycast(e,Na);for(let a=0,l=Na.length;a<l;a++){const u=Na[a];u.instanceId=s,u.object=this,t.push(u)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cf(new Float32Array(r*this.count),r,this.count,ru,Gn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,u=r*e;s[u]=l,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const gl=new P,Eg=new P,bg=new Fe;class Fi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=gl.subVectors(n,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bg.getNormalMatrix(e),r=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new ri,Ua=new P;class fu{constructor(e=new Fi,t=new Fi,n=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){const n=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],u=r[3],h=r[4],f=r[5],o=r[6],c=r[7],d=r[8],m=r[9],_=r[10],g=r[11],p=r[12],S=r[13],b=r[14],y=r[15];if(n[0].setComponents(u-s,c-h,g-d,y-p).normalize(),n[1].setComponents(u+s,c+h,g+d,y+p).normalize(),n[2].setComponents(u+a,c+f,g+m,y+S).normalize(),n[3].setComponents(u-a,c-f,g-m,y-S).normalize(),n[4].setComponents(u-l,c-o,g-_,y-b).normalize(),t===vi)n[5].setComponents(u+l,c+o,g+_,y+b).normalize();else if(t===vo)n[5].setComponents(l,o,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class If extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new P,So=new P,xh=new Ne,Ds=new vs,Oa=new ri,_l=new P,vh=new P;class pu extends gt{constructor(e=new qn,t=new If){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)yo.fromBufferAttribute(t,r-1),So.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=yo.distanceTo(So);e.setAttribute("lineDistance",new Xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=s,e.ray.intersectsSphere(Oa)===!1)return;xh.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(xh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=h){const p=f.getX(_),S=f.getX(_+1),b=Fa(this,e,Ds,u,p,S,_);b&&t.push(b)}if(this.isLineLoop){const _=f.getX(m-1),g=f.getX(d),p=Fa(this,e,Ds,u,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=h){const p=Fa(this,e,Ds,u,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Fa(this,e,Ds,u,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Fa(i,e,t,n,r,s,a){const l=i.geometry.attributes.position;if(yo.fromBufferAttribute(l,r),So.fromBufferAttribute(l,s),t.distanceSqToSegment(yo,So,_l,vh)>n)return;_l.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(_l);if(!(h<e.near||h>e.far))return{distance:h,point:vh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const yh=new P,Sh=new P;class Mg extends pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yh.distanceTo(Sh);e.setAttribute("lineDistance",new Xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ag extends pu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pf extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new Ne,Dc=new vs,Ba=new ri,ka=new P;class wg extends gt{constructor(e=new qn,t=new Pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;Th.copy(r).invert(),Dc.copy(e.ray).applyMatrix4(Th);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,o=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=c,_=d;m<_;m++){const g=h.getX(m);ka.fromBufferAttribute(o,g),Eh(ka,g,u,r,e,t,this)}}else{const c=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let m=c,_=d;m<_;m++)ka.fromBufferAttribute(o,m),Eh(ka,m,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Eh(i,e,t,n,r,s,a){const l=Dc.distanceSqToPoint(i);if(l<t){const u=new P;Dc.closestPointToPoint(i,u),u.applyMatrix4(n);const h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Df extends Lt{constructor(e,t,n,r,s,a,l,u,h,f=ns){if(f!==ns&&f!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ns&&(n=br),n===void 0&&f===hs&&(n=us),super(null,r,s,a,l,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Bt,this.minFilter=u!==void 0?u:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oo extends qn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(r),h=l+1,f=u+1,o=e/l,c=t/u,d=[],m=[],_=[],g=[];for(let p=0;p<f;p++){const S=p*c-a;for(let b=0;b<h;b++){const y=b*o-s;m.push(y,-S,0),_.push(0,0,1),g.push(b/l),g.push(1-p/u)}}for(let p=0;p<u;p++)for(let S=0;S<l;S++){const b=S+h*p,y=S+h*(p+1),C=S+1+h*(p+1),A=S+1+h*p;d.push(b,y,A),d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new Xn(m,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rg extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aa extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xf,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lf extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cg extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function za(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ig(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pg(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function bh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const l=t[s]*e;for(let u=0;u!==e;++u)r[a++]=i[l+u]}return r}function Nf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class ca{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dg extends ca{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hu,endingEnd:Hu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,l=r[s],u=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case Gu:s=e,l=2*t-n;break;case Vu:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Gu:a=e,u=2*n-t;break;case Vu:a=1,u=n+r[1]-r[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=this._offsetPrev,o=this._offsetNext,c=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-c*g+2*c*_-c*m,S=(1+c)*g+(-1.5-2*c)*_+(-.5+c)*m+1,b=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let C=0;C!==l;++C)s[C]=p*a[f+C]+S*a[h+C]+b*a[u+C]+y*a[o+C];return s}}class Lg extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=(n-t)/(r-t),o=1-f;for(let c=0;c!==l;++c)s[c]=a[h+c]*o+a[u+c]*f;return s}}class Ng extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),e=!1;break}a=u}if(r!==void 0&&Ig(r))for(let l=0,u=r.length;l!==u;++l){const h=r[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yo,s=e.length-1;let a=1;for(let l=1;l<s;++l){let u=!1;const h=e[l],f=e[l+1];if(h!==f&&(l!==1||h!==e[0]))if(r)u=!0;else{const o=l*n,c=o-n,d=o+n;for(let m=0;m!==n;++m){const _=t[o+m];if(_!==t[c+m]||_!==t[d+m]){u=!0;break}}}if(u){if(l!==a){e[a]=e[l];const o=l*n,c=a*n;for(let d=0;d!==n;++d)t[c+d]=t[o+d]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ra;class ys extends ai{constructor(e,t,n){super(e,t,n)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ia;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Uf extends ai{}Uf.prototype.ValueTypeName="color";class ps extends ai{}ps.prototype.ValueTypeName="number";class Ug extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-t)/(r-t);let h=e*l;for(let f=h+l;h!==f;h+=4)yn.slerpFlat(s,0,a,h-l,a,h,u);return s}}class ms extends ai{InterpolantFactoryMethodLinear(e){return new Ug(this.times,this.values,this.getValueSize(),e)}}ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends ai{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ia;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends ai{}gs.prototype.ValueTypeName="vector";class Og{constructor(e="",t=-1,n=[],r=gm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(Bg(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ai.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let l=0;l<s;l++){let u=[],h=[];u.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const f=Pg(u);u=bh(u,1,f),h=bh(h,1,f),!r&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new ps(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.name.match(s);if(f&&f.length>1){const o=f[1];let c=r[o];c||(r[o]=c=[]),c.push(h)}}const a=[];for(const l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(o,c,d,m,_){if(d.length!==0){const g=[],p=[];Nf(d,g,p,m),g.length!==0&&_.push(new o(c,g,p))}},r=[],s=e.name||"default",a=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let o=0;o<h.length;o++){const c=h[o].keys;if(!(!c||c.length===0))if(c[0].morphTargets){const d={};let m;for(m=0;m<c.length;m++)if(c[m].morphTargets)for(let _=0;_<c[m].morphTargets.length;_++)d[c[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let S=0;S!==c[m].morphTargets.length;++S){const b=c[m];g.push(b.time),p.push(b.morphTarget===_?1:0)}r.push(new ps(".morphTargetInfluence["+_+"]",g,p))}u=d.length*a}else{const d=".bones["+t[o].name+"]";n(gs,d+".position",c,"pos",r),n(ms,d+".quaternion",c,"rot",r),n(gs,d+".scale",c,"scl",r)}}return r.length===0?null:new this(s,u,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return Uf;case"quaternion":return ms;case"bool":case"boolean":return ys;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Bg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fg(i.type);if(i.times===void 0){const t=[],n=[];Nf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kg{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,l),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,o){return h.push(f,o),this},this.removeHandler=function(f){const o=h.indexOf(f);return o!==-1&&h.splice(o,2),this},this.getHandler=function(f){for(let o=0,c=h.length;o<c;o+=2){const d=h[o],m=h[o+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null}}}const zg=new kg;class wr{constructor(e){this.manager=e!==void 0?e:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class Hg extends Error{constructor(e,t){super(e),this.response=t}}class Of extends wr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:r});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=fi[e],o=h.body.getReader(),c=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),d=c?parseInt(c):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){S();function S(){o.read().then(({done:b,value:y})=>{if(b)p.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let A=0,w=f.length;A<w;A++){const N=f[A];N.onProgress&&N.onProgress(C)}p.enqueue(y),S()}},b=>{p.error(b)})}}});return new Response(g)}else throw new Hg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,l));case"json":return h.json();default:if(l===void 0)return h.text();{const o=/charset="?([^;"\s]*)"?/i.exec(l),c=o&&o[1]?o[1].toLowerCase():void 0,d=new TextDecoder(c);return h.arrayBuffer().then(m=>d.decode(m))}}}).then(h=>{Wi.add(e,h);const f=fi[e];delete fi[e];for(let o=0,c=f.length;o<c;o++){const d=f[o];d.onLoad&&d.onLoad(h)}}).catch(h=>{const f=fi[e];if(f===void 0)throw this.manager.itemError(e),h;delete fi[e];for(let o=0,c=f.length;o<c;o++){const d=f[o];d.onError&&d.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ff extends wr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=sa("img");function u(){f(),Wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(o){f(),r&&r(o),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Gg extends wr{constructor(e){super(e)}load(e,t,n,r){const s=new uu;s.colorSpace=Ct;const a=new Ff(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let l=0;function u(h){a.load(e[h],function(f){s.images[h]=f,l++,l===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let h=0;h<e.length;++h)u(h);return s}}class Bf extends wr{constructor(e){super(e)}load(e,t,n,r){const s=new Lt,a=new Ff(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class mu extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xl=new Ne,Mh=new P,Ah=new P;class gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vg extends gu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wg extends mu{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new Ne,Ls=new P,vl=new P;class Xg extends gu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ls),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),r.makeTranslation(-Ls.x,-Ls.y,-Ls.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class qg extends mu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fo extends wf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yg extends gu{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tr extends mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Yg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jg extends wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Wi.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){r&&r(h),Wi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Wi.add(e,u),s.manager.itemStart(e)}}class Kg extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class kf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rh(){return performance.now()}const _u="\\[\\]\\.:\\/",$g=new RegExp("["+_u+"]","g"),xu="[^"+_u+"]",Zg="[^"+_u.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",xu),Qg=/(WCOD+)?/.source.replace("WCOD",Zg),e_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),t_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),n_=new RegExp("^"+Jg+Qg+e_+t_+"$"),i_=["material","materials","bones","map"];class r_{constructor(e,t,n){const r=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){const t=n_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);i_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const l=s[a];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[r];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=r_;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ch=new Ne;class s_{constructor(e,t,n=0,r=1/0){this.ray=new vs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ch.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(e,t=!0,n=[]){return Lc(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Lc(e[r],this,n,t);return n.sort(Ih),n}}function Ih(i,e){return i.distance-e.distance}function Lc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,l=s.length;a<l;a++)Lc(s[a],e,t,!0)}}class Ph{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class a_ extends Ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Dh(i,e,t,n){const r=o_(n);switch(t){case uf:return i*e;case df:return i*e;case ff:return i*e*2;case ru:return i*e/r.components*r.byteLength;case su:return i*e/r.components*r.byteLength;case pf:return i*e*2/r.components*r.byteLength;case au:return i*e*2/r.components*r.byteLength;case hf:return i*e*3/r.components*r.byteLength;case In:return i*e*4/r.components*r.byteLength;case ou:return i*e*4/r.components*r.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case ic:case sc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ao:case bc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mf:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wc:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o_(i){switch(i){case bi:case of:return{byteLength:1,components:1};case na:case lf:case Mr:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case br:case tu:case Gn:return{byteLength:4,components:1};case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function l_(i){const e=new WeakMap;function t(l,u){const h=l.array,f=l.usage,o=h.byteLength,c=i.createBuffer();i.bindBuffer(u,c),i.bufferData(u,h,f),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:o}}function n(l,u,h){const f=u.array,o=u.updateRanges;if(i.bindBuffer(h,l),o.length===0)i.bufferSubData(h,0,f);else{o.sort((d,m)=>d.start-m.start);let c=0;for(let d=1;d<o.length;d++){const m=o[c],_=o[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++c,o[c]=_)}o.length=c+1;for(let d=0,m=o.length;d<m;d++){const _=o[d];i.bufferSubData(h,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:r,remove:s,update:a}}var c_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
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
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
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
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
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
#endif`,x_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,E_=`#ifdef USE_BUMPMAP
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
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
}`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,_x=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Dx=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Ox=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,kx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:c_,alphahash_pars_fragment:u_,alphamap_fragment:h_,alphamap_pars_fragment:d_,alphatest_fragment:f_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:g_,batching_pars_vertex:__,batching_vertex:x_,begin_vertex:v_,beginnormal_vertex:y_,bsdfs:S_,iridescence_fragment:T_,bumpmap_pars_fragment:E_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:w_,color_fragment:R_,color_pars_fragment:C_,color_pars_vertex:I_,color_vertex:P_,common:D_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:N_,displacementmap_pars_vertex:U_,displacementmap_vertex:O_,emissivemap_fragment:F_,emissivemap_pars_fragment:B_,colorspace_fragment:k_,colorspace_pars_fragment:z_,envmap_fragment:H_,envmap_common_pars_fragment:G_,envmap_pars_fragment:V_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:t0,envmap_vertex:X_,fog_vertex:q_,fog_pars_vertex:Y_,fog_fragment:j_,fog_pars_fragment:K_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:Z_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:Q_,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:x0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:y0,morphinstance_vertex:S0,morphcolor_vertex:T0,morphnormal_vertex:E0,morphtarget_pars_vertex:b0,morphtarget_vertex:M0,normal_fragment_begin:A0,normal_fragment_maps:w0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:I0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:O0,packing:F0,premultiplied_alpha_fragment:B0,project_vertex:k0,dithering_fragment:z0,dithering_pars_fragment:H0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:j0,skinning_pars_vertex:K0,skinning_vertex:$0,skinnormal_vertex:Z0,specularmap_fragment:J0,specularmap_pars_fragment:Q0,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:rx,uv_pars_vertex:sx,uv_vertex:ax,worldpos_vertex:ox,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distanceRGBA_vert:gx,distanceRGBA_frag:_x,equirect_vert:xx,equirect_frag:vx,linedashed_vert:yx,linedashed_frag:Sx,meshbasic_vert:Tx,meshbasic_frag:Ex,meshlambert_vert:bx,meshlambert_frag:Mx,meshmatcap_vert:Ax,meshmatcap_frag:wx,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Ix,meshphong_frag:Px,meshphysical_vert:Dx,meshphysical_frag:Lx,meshtoon_vert:Nx,meshtoon_frag:Ux,points_vert:Ox,points_frag:Fx,shadow_vert:Bx,shadow_frag:kx,sprite_vert:zx,sprite_frag:Hx},ne={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Kn={basic:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:qt([ne.points,ne.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:qt([ne.common,ne.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:qt([ne.sprite,ne.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:qt([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:qt([ne.lights,ne.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Kn.physical={uniforms:qt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ha={r:0,b:0,g:0},lr=new ni,Gx=new Ne;function Vx(i,e,t,n,r,s,a){const l=new Pe(0);let u=s===!0?0:1,h,f,o=null,c=0,d=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const C=m(b);C===null?p(l,u):C&&C.isColor&&(p(C,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){const C=m(y);C&&(C.isCubeTexture||C.mapping===No)?(f===void 0&&(f=new an(new la(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:fs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),lr.copy(y.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(lr)),f.material.toneMapped=qe.getTransfer(C.colorSpace)!==st,(o!==C||c!==C.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,o=C,c=C.version,d=i.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new an(new Oo(2,2),new Pn({name:"BackgroundMaterial",uniforms:fs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=qe.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(o!==C||c!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,o=C,c=C.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,y){b.getRGB(Ha,Af(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,y,a)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,y=1){l.set(b),u=y,p(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,p(l,u)},render:_,addToRenderList:g,dispose:S}}function Wx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function l(E,I,W,B,H){let K=!1;const V=o(B,W,I);s!==V&&(s=V,h(s.object)),K=d(E,B,W,H),K&&m(E,B,W,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(E,I,W,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function u(){return i.createVertexArray()}function h(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function o(E,I,W){const B=W.wireframe===!0;let H=n[E.id];H===void 0&&(H={},n[E.id]=H);let K=H[I.id];K===void 0&&(K={},H[I.id]=K);let V=K[B];return V===void 0&&(V=c(u()),K[B]=V),V}function c(E){const I=[],W=[],B=[];for(let H=0;H<t;H++)I[H]=0,W[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:B,object:E,attributes:{},index:null}}function d(E,I,W,B){const H=s.attributes,K=I.attributes;let V=0;const J=W.getAttributes();for(const z in J)if(J[z].location>=0){const ue=H[z];let _e=K[z];if(_e===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function m(E,I,W,B){const H={},K=I.attributes;let V=0;const J=W.getAttributes();for(const z in J)if(J[z].location>=0){let ue=K[z];ue===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),H[z]=_e,V++}s.attributes=H,s.attributesNum=V,s.index=B}function _(){const E=s.newAttributes;for(let I=0,W=E.length;I<W;I++)E[I]=0}function g(E){p(E,0)}function p(E,I){const W=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;W[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),H[E]!==I&&(i.vertexAttribDivisor(E,I),H[E]=I)}function S(){const E=s.newAttributes,I=s.enabledAttributes;for(let W=0,B=I.length;W<B;W++)I[W]!==E[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function b(E,I,W,B,H,K,V){V===!0?i.vertexAttribIPointer(E,I,W,H,K):i.vertexAttribPointer(E,I,W,B,H,K)}function y(E,I,W,B){_();const H=B.attributes,K=W.getAttributes(),V=I.defaultAttributeValues;for(const J in K){const z=K[J];if(z.location>=0){let ie=H[J];if(ie===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const ue=ie.normalized,_e=ie.itemSize,ze=e.get(ie);if(ze===void 0)continue;const ct=ze.buffer,q=ze.type,te=ze.bytesPerElement,ge=q===i.INT||q===i.UNSIGNED_INT||ie.gpuType===tu;if(ie.isInterleavedBufferAttribute){const ae=ie.data,Me=ae.stride,et=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)p(z.location+Re,ae.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<z.locationSize;Re++)g(z.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Re=0;Re<z.locationSize;Re++)b(z.location+Re,_e/z.locationSize,q,ue,Me*te,(et+_e/z.locationSize*Re)*te,ge)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,ie.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<z.locationSize;ae++)g(z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ae=0;ae<z.locationSize;ae++)b(z.location+ae,_e/z.locationSize,q,ue,_e*te,_e/z.locationSize*ae*te,ge)}}else if(V!==void 0){const ue=V[J];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}S()}function C(){N();for(const E in n){const I=n[E];for(const W in I){const B=I[W];for(const H in B)f(B[H].object),delete B[H];delete I[W]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const W in I){const B=I[W];for(const H in B)f(B[H].object),delete B[H];delete I[W]}delete n[E.id]}function w(E){for(const I in n){const W=n[I];if(W[E.id]===void 0)continue;const B=W[E.id];for(const H in B)f(B[H].object),delete B[H];delete W[E.id]}}function N(){T(),a=!0,s!==r&&(s=r,h(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:N,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Xx(i,e,t){let n;function r(h){n=h}function s(h,f){i.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,o){o!==0&&(i.drawArraysInstanced(n,h,f,o),t.update(f,n,o))}function l(h,f,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,o);let d=0;for(let m=0;m<o;m++)d+=f[m];t.update(d,n,1)}function u(h,f,o,c){if(o===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h.length;m++)a(h[m],f[m],c[m]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,f,0,c,0,o);let m=0;for(let _=0;_<o;_++)m+=f[_]*c[_];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function qx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==In&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const N=w===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==bi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!N)}function u(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const o=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:o,reverseDepthBuffer:c,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function Yx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fi,l=new Fe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(o,c){const d=o.length!==0||c||n!==0||r;return r=c,n=o.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(o,c){t=f(o,c,0)},this.setState=function(o,c,d){const m=o.clippingPlanes,_=o.clipIntersection,g=o.clipShadows,p=i.get(o);if(!r||m===null||m.length===0||s&&!g)s?f(null):h();else{const S=s?0:n,b=S*4;let y=p.clippingState||null;u.value=y,y=f(m,c,b,d);for(let C=0;C!==b;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(o,c,d,m){const _=o!==null?o.length:0;let g=null;if(_!==0){if(g=u.value,m!==!0||g===null){const p=d+_*4,S=c.matrixWorldInverse;l.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=d;b!==_;++b,y+=4)a.copy(o[b]).applyMatrix4(S,l),a.normal.toArray(g,y),g[y+3]=a.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function jx(i){let e=new WeakMap;function t(a,l){return l===tc?a.mapping=os:l===nc&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===tc||l===nc)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new pg(u.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const $r=4,Lh=[.125,.215,.35,.446,.526,.582],vr=20,yl=new Fo,Nh=new Pe;let Sl=null,Tl=0,El=0,bl=!1;const mr=(1+Math.sqrt(5))/2,Vr=1/mr,Uh=[new P(-mr,Vr,0),new P(mr,Vr,0),new P(-Vr,0,mr),new P(Vr,0,mr),new P(0,mr,-Vr),new P(0,mr,Vr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Sl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,Tl,El),this._renderer.xr.enabled=bl,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Mr,format:In,colorSpace:Zt,depthBuffer:!1},r=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kx(s)),this._blurMaterial=$x(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,r){const l=new jt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,o=f.autoClear,c=f.toneMapping;f.getClearColor(Nh),f.toneMapping=Ji,f.autoClear=!1;const d=new yr({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new an(new la,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Nh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(l.up.set(0,u[p],0),l.lookAt(h[p],0,0)):S===1?(l.up.set(0,0,u[p]),l.lookAt(0,h[p],0)):(l.up.set(0,u[p],0),l.lookAt(0,0,h[p]));const b=this._cubeSize;Ga(r,S*b,p>2?b:0,b,b),f.setRenderTarget(r),_&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=c,f.autoClear=o,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===os||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Ga(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Uh[(r-s-1)%Uh.length];this._blur(e,s-1,s,a,l)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,o=new an(this._lodPlanes[r],h),c=h.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vr-1),_=s/m,g=isFinite(s)?1+Math.floor(f*_):vr;g>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vr}`);const p=[];let S=0;for(let w=0;w<vr;++w){const N=w/_,T=Math.exp(-N*N/2);p.push(T),w===0?S+=T:w<g&&(S+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=p,c.latitudinal.value=a==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:b}=this;c.dTheta.value=m,c.mipInt.value=b-n;const y=this._sizeLods[r],C=3*y*(r>b-$r?r-b+$r:0),A=4*(this._cubeSize-y);Ga(t,C,A,3*y,2*y),u.setRenderTarget(t),u.render(o,yl)}}function Kx(i){const e=[],t=[],n=[];let r=i;const s=i-$r+1+Lh.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let u=1/l;a>i-$r?u=Lh[a-i+$r-1]:a===0&&(u=0),n.push(u);const h=1/(l-2),f=-h,o=1+h,c=[f,f,o,f,o,o,f,f,o,o,f,o],d=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*d),b=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,N=A>2?0:-1,T=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];S.set(T,_*m*A),b.set(c,g*m*A);const E=[A,A,A,A,A,A];y.set(E,p*m*A)}const C=new qn;C.setAttribute("position",new Kt(S,_)),C.setAttribute("uv",new Kt(b,g)),C.setAttribute("faceIndex",new Kt(y,p)),e.push(C),r>$r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(i,e,t){const n=new Mi(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $x(i,e,t){const n=new Float32Array(vr),r=new P(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bh(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function kh(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function Zx(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,h=u===tc||u===nc,f=u===os||u===ls;if(h||f){let o=e.get(l);const c=o!==void 0?o.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==c)return t===null&&(t=new Oh(i)),o=h?t.fromEquirectangular(l,o):t.fromCubemap(l,o),o.texture.pmremVersion=l.pmremVersion,e.set(l,o),o.texture;if(o!==void 0)return o.texture;{const d=l.image;return h&&d&&d.height>0||f&&d&&r(d)?(t===null&&(t=new Oh(i)),o=h?t.fromEquirectangular(l):t.fromCubemap(l),o.texture.pmremVersion=l.pmremVersion,e.set(l,o),l.addEventListener("dispose",s),o.texture):null}}}return l}function r(l){let u=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&u++;return u===h}function s(l){const u=l.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qx(i,e,t,n){const r={},s=new WeakMap;function a(o){const c=o.target;c.index!==null&&e.remove(c.index);for(const m in c.attributes)e.remove(c.attributes[m]);c.removeEventListener("dispose",a),delete r[c.id];const d=s.get(c);d&&(e.remove(d),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(o,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c}function u(o){const c=o.attributes;for(const d in c)e.update(c[d],i.ARRAY_BUFFER)}function h(o){const c=[],d=o.index,m=o.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let b=0,y=S.length;b<y;b+=3){const C=S[b+0],A=S[b+1],w=S[b+2];c.push(C,A,A,w,w,C)}}else if(m!==void 0){const S=m.array;_=m.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const C=b+0,A=b+1,w=b+2;c.push(C,A,A,w,w,C)}}else return;const g=new(yf(c)?Mf:bf)(c,1);g.version=_;const p=s.get(o);p&&e.remove(p),s.set(o,g)}function f(o){const c=s.get(o);if(c){const d=o.index;d!==null&&c.version<d.version&&h(o)}else h(o);return s.get(o)}return{get:l,update:u,getWireframeAttribute:f}}function ev(i,e,t){let n;function r(c){n=c}let s,a;function l(c){s=c.type,a=c.bytesPerElement}function u(c,d){i.drawElements(n,d,s,c*a),t.update(d,n,1)}function h(c,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,c*a,m),t.update(d,n,m))}function f(c,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,c,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function o(c,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)h(c[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,c,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=o}function tv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nv(i,e,t){const n=new WeakMap,r=new tt;function s(a,l,u){const h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,o=f!==void 0?f.length:0;let c=n.get(l);if(c===void 0||c.count!==o){let T=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",T)};c!==void 0&&c.texture.dispose();const d=l.morphAttributes.position!==void 0,m=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let b=0;d===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let y=l.attributes.position.count*b,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*C*4*o),w=new Tf(A,y,C,o);w.type=Gn,w.needsUpdate=!0;const N=b*4;for(let E=0;E<o;E++){const I=g[E],W=p[E],B=S[E],H=y*C*4*E;for(let K=0;K<I.count;K++){const V=K*N;d===!0&&(r.fromBufferAttribute(I,K),A[H+V+0]=r.x,A[H+V+1]=r.y,A[H+V+2]=r.z,A[H+V+3]=0),m===!0&&(r.fromBufferAttribute(W,K),A[H+V+4]=r.x,A[H+V+5]=r.y,A[H+V+6]=r.z,A[H+V+7]=0),_===!0&&(r.fromBufferAttribute(B,K),A[H+V+8]=r.x,A[H+V+9]=r.y,A[H+V+10]=r.z,A[H+V+11]=B.itemSize===4?r.w:1)}}c={count:o,texture:w,size:new Ee(y,C)},n.set(l,c),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];const m=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function iv(i,e,t,n){let r=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,o=e.get(u,f);if(r.get(o)!==h&&(e.update(o),r.set(o,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const c=u.skeleton;r.get(c)!==h&&(c.update(),r.set(c,h))}return o}function a(){r=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const Hf=new Lt,zh=new Df(1,1),Gf=new Tf,Vf=new Jm,Wf=new uu,Hh=[],Gh=[],Vh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Hh[r];if(s===void 0&&(s=new Float32Array(r),Hh[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bo(i,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Pt(t,n)}}function cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Pt(t,n)}}function uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),Pt(t,n)}}function hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function vv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zh.compareFunction=vf,s=zh):s=Hf,t.setTexture2D(e||s,r)}function yv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vf,r)}function Sv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wf,r)}function Tv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gf,r)}function Ev(i){switch(i){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Tv}}function bv(i,e){i.uniform1fv(this.addr,e)}function Mv(i,e){const t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function Av(i,e){const t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){const t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function Rv(i,e){const t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cv(i,e){const t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Iv(i,e){const t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function Dv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Nv(i,e){i.uniform4iv(this.addr,e)}function Uv(i,e){i.uniform1uiv(this.addr,e)}function Ov(i,e){i.uniform2uiv(this.addr,e)}function Fv(i,e){i.uniform3uiv(this.addr,e)}function Bv(i,e){i.uniform4uiv(this.addr,e)}function kv(i,e,t){const n=this.cache,r=e.length,s=Bo(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Hf,s[a])}function zv(i,e,t){const n=this.cache,r=e.length,s=Bo(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vf,s[a])}function Hv(i,e,t){const n=this.cache,r=e.length,s=Bo(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wf,s[a])}function Gv(i,e,t){const n=this.cache,r=e.length,s=Bo(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gf,s[a])}function Vv(i){switch(i){case 5126:return bv;case 35664:return Mv;case 35665:return Av;case 35666:return wv;case 35674:return Rv;case 35675:return Cv;case 35676:return Iv;case 5124:case 35670:return Pv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Ov;case 36295:return Fv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ev(t.type)}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function Yv(i,e,t){const n=i.name,r=n.length;for(Ml.lastIndex=0;;){const s=Ml.exec(n),a=Ml.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===r){qh(t,h===void 0?new Wv(l,i,e):new Xv(l,i,e));break}else{let o=t.map[l];o===void 0&&(o=new qv(l),qh(t,o)),t=o}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Yv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Yh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jv=37297;let Kv=0;function $v(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const jh=new Fe;function Zv(i){qe._getMatrix(jh,qe.workingColorSpace,i);const e=`mat3( ${jh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case xo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$v(i.getShaderSource(e),a)}else return r}function Jv(i,e){const t=Zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qv(i,e){let t;switch(e){case Jd:t="Linear";break;case Qd:t="Reinhard";break;case ef:t="Cineon";break;case eu:t="ACESFilmic";break;case nf:t="AgX";break;case rf:t="Neutral";break;case tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new P;function ey(){qe.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Bs(i){return i!==""}function $h(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(ry,ay)}const sy=new Map;function ay(i,e){let t=ke[e];if(t===void 0){const n=sy.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(oy,ly)}function ly(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function cy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function uy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function dy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zd:e="ENVMAP_BLENDING_MULTIPLY";break;case fm:e="ENVMAP_BLENDING_MIX";break;case pm:e="ENVMAP_BLENDING_ADD";break}return e}function fy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function py(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=cy(t),h=uy(t),f=hy(t),o=dy(t),c=fy(t),d=ty(t),m=ny(s),_=r.createProgram();let g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+o:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Jv("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),a=Nc(a),a=$h(a,t),a=Zh(a,t),l=Nc(l),l=$h(l,t),l=Zh(l,t),a=Jh(a),l=Jh(l),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+g+a,y=S+p+l,C=Yh(r,r.VERTEX_SHADER,b),A=Yh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(A).trim();let K=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,A);else{const J=Kh(r,C,"vertex"),z=Kh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+J+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||H==="")&&(V=!1);V&&(I.diagnostics={runnable:K,programLog:W,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:p}})}r.deleteShader(C),r.deleteShader(A),N=new oo(r,_),T=iy(r,_)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,jv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let my=0;class gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _y(e),t.set(e,n)),n}}class _y{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}}function xy(i,e,t,n,r,s,a){const l=new cu,u=new gy,h=new Set,f=[],o=r.logarithmicDepthBuffer,c=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return h.add(T),T===0?"uv":`uv${T}`}function g(T,E,I,W,B){const H=W.fog,K=B.geometry,V=T.isMeshStandardMaterial?W.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),z=J&&J.mapping===No?J.image.height:null,ie=m[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=ue!==void 0?ue.length:0;let ze=0;K.morphAttributes.position!==void 0&&(ze=1),K.morphAttributes.normal!==void 0&&(ze=2),K.morphAttributes.color!==void 0&&(ze=3);let ct,q,te,ge;if(ie){const rt=Kn[ie];ct=rt.vertexShader,q=rt.fragmentShader}else ct=T.vertexShader,q=T.fragmentShader,u.update(T),te=u.getVertexShaderID(T),ge=u.getFragmentShaderID(T);const ae=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),et=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,yt=!!T.map,pt=!!T.matcap,Ye=!!J,R=!!T.aoMap,Tn=!!T.lightMap,je=!!T.bumpMap,Ke=!!T.normalMap,ye=!!T.displacementMap,ht=!!T.emissiveMap,ve=!!T.metalnessMap,M=!!T.roughnessMap,x=T.anisotropy>0,O=T.clearcoat>0,Y=T.dispersion>0,$=T.iridescence>0,X=T.sheen>0,xe=T.transmission>0,oe=x&&!!T.anisotropyMap,de=O&&!!T.clearcoatMap,Ze=O&&!!T.clearcoatNormalMap,Q=O&&!!T.clearcoatRoughnessMap,fe=$&&!!T.iridescenceMap,be=$&&!!T.iridescenceThicknessMap,Ce=X&&!!T.sheenColorMap,pe=X&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Be=!!T.specularColorMap,ut=!!T.specularIntensityMap,D=xe&&!!T.transmissionMap,re=xe&&!!T.thicknessMap,G=!!T.gradientMap,j=!!T.alphaMap,ce=T.alphaTest>0,le=!!T.alphaHash,Oe=!!T.extensions;let _t=Ji;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_t=i.toneMapping);const kt={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:ct,fragmentShader:q,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:et,instancingColor:et&&B.instanceColor!==null,instancingMorph:et&&B.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Zt,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:pt,envMap:Ye,envMapMode:Ye&&J.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:Tn,bumpMap:je,normalMap:Ke,displacementMap:c&&ye,emissiveMap:ht,normalMapObjectSpace:Ke&&T.normalMapType===vm,normalMapTangentSpace:Ke&&T.normalMapType===xf,metalnessMap:ve,roughnessMap:M,anisotropy:x,anisotropyMap:oe,clearcoat:O,clearcoatMap:de,clearcoatNormalMap:Ze,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:$,iridescenceMap:fe,iridescenceThicknessMap:be,sheen:X,sheenColorMap:Ce,sheenRoughnessMap:pe,specularMap:$e,specularColorMap:Be,specularIntensityMap:ut,transmission:xe,transmissionMap:D,thicknessMap:re,gradientMap:G,opaque:T.transparent===!1&&T.blending===ts&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:le,combine:T.combine,mapUv:yt&&_(T.map.channel),aoMapUv:R&&_(T.aoMap.channel),lightMapUv:Tn&&_(T.lightMap.channel),bumpMapUv:je&&_(T.bumpMap.channel),normalMapUv:Ke&&_(T.normalMap.channel),displacementMapUv:ye&&_(T.displacementMap.channel),emissiveMapUv:ht&&_(T.emissiveMap.channel),metalnessMapUv:ve&&_(T.metalnessMap.channel),roughnessMapUv:M&&_(T.roughnessMap.channel),anisotropyMapUv:oe&&_(T.anisotropyMap.channel),clearcoatMapUv:de&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(T.sheenRoughnessMap.channel),specularMapUv:$e&&_(T.specularMap.channel),specularColorMapUv:Be&&_(T.specularColorMap.channel),specularIntensityMapUv:ut&&_(T.specularIntensityMap.channel),transmissionMapUv:D&&_(T.transmissionMap.channel),thicknessMapUv:re&&_(T.thicknessMap.channel),alphaMapUv:j&&_(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ke||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(yt||j),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:o,reverseDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&qe.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:ht&&T.emissiveMap.isVideoTexture===!0&&qe.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zn,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return kt.vertexUv1s=h.has(1),kt.vertexUv2s=h.has(2),kt.vertexUv3s=h.has(3),h.clear(),kt}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)E.push(I),E.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(S(E,T),b(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function S(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function b(T,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),T.push(l.mask)}function y(T){const E=m[T.type];let I;if(E){const W=Kn[E];I=Uo.clone(W.uniforms)}else I=T.uniforms;return I}function C(T,E){let I;for(let W=0,B=f.length;W<B;W++){const H=f[W];if(H.cacheKey===E){I=H,++I.usedTimes;break}}return I===void 0&&(I=new py(i,E,T,s),f.push(I)),I}function A(T){if(--T.usedTimes===0){const E=f.indexOf(T);f[E]=f[f.length-1],f.pop(),T.destroy()}}function w(T){u.remove(T)}function N(){u.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:N}}function vy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,u){i.get(a)[l]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function td(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(o,c,d,m,_,g){let p=i[e];return p===void 0?(p={id:o.id,object:o,geometry:c,material:d,groupOrder:m,renderOrder:o.renderOrder,z:_,group:g},i[e]=p):(p.id=o.id,p.object=o,p.geometry=c,p.material=d,p.groupOrder=m,p.renderOrder=o.renderOrder,p.z=_,p.group=g),e++,p}function l(o,c,d,m,_,g){const p=a(o,c,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function u(o,c,d,m,_,g){const p=a(o,c,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function h(o,c){t.length>1&&t.sort(o||yy),n.length>1&&n.sort(c||ed),r.length>1&&r.sort(c||ed)}function f(){for(let o=e,c=i.length;o<c;o++){const d=i[o];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:f,sort:h}}function Sy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new td,i.set(n,[a])):r>=s.length?(a=new td,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Pe};break;case"SpotLight":t={position:new P,direction:new P,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let by=0;function My(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ay(i){const e=new Ty,t=Ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const r=new P,s=new Ne,a=new Ne;function l(h){let f=0,o=0,c=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,b=0,y=0,C=0,A=0,w=0;h.sort(My);for(let T=0,E=h.length;T<E;T++){const I=h[T],W=I.color,B=I.intensity,H=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=W.r*B,o+=W.g*B,c+=W.b*B;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],B);w++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,z=t.get(I);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=V,d++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(W).multiplyScalar(B),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;const J=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=K,y++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(W).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=V,g++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,z=t.get(I);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,b++}n.point[m]=V,m++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(B),V.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=o,n.ambient[2]=c;const N=n.hash;(N.directionalLength!==d||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==S||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==C||N.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,N.directionalLength=d,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=S,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=C,N.numLightProbes=w,n.version=by++)}function u(h,f){let o=0,c=0,d=0,m=0,_=0;const g=f.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){const b=h[p];if(b.isDirectionalLight){const y=n.directional[o];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),o++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=n.point[c];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),c++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:l,setupView:u,state:n}}function nd(i){const e=new Ay(i),t=[],n=[];function r(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function wy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new nd(i),e.set(r,[l])):s>=a.length?(l=new nd(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`;function Iy(i,e,t){let n=new fu;const r=new Ee,s=new Ee,a=new tt,l=new Lf({depthPacking:_f}),u=new Cg,h={},f=t.maxTextureSize,o={[Ei]:cn,[cn]:Ei,[Zn]:Zn},c=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const m=new qn;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(m,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(A,w,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Qn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=p!==jn&&this.type===jn,H=p===jn&&this.type!==jn;for(let K=0,V=A.length;K<V;K++){const J=A[K],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ie=z.getFrameExtents();if(r.multiply(ie),s.copy(z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ie.x),r.x=s.x*ie.x,z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ie.y),r.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||B===!0||H===!0){const _e=this.type!==jn?{minFilter:Bt,magFilter:Bt}:{};z.map!==null&&z.map.dispose(),z.map=new Mi(r.x,r.y,_e),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let _e=0;_e<ue;_e++){const ze=z.getViewport(_e);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),W.viewport(a),z.updateMatrices(J,_e),n=z.getFrustum(),y(w,N,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===jn&&S(z,N),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,E,I)};function S(A,w){const N=e.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mi(r.x,r.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,N,c,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,N,d,_,null)}function b(A,w,N,T){let E=null;const I=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=N.isPointLight===!0?u:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=E.uuid,B=w.uuid;let H=h[W];H===void 0&&(H={},h[W]=H);let K=H[B];K===void 0&&(K=E.clone(),H[B]=K,w.addEventListener("dispose",C)),E=K}if(E.visible=w.visible,E.wireframe=w.wireframe,T===jn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:o[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=i.properties.get(E);W.light=N}return E}function y(A,w,N,T,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const B=e.update(A),H=A.material;if(Array.isArray(H)){const K=B.groups;for(let V=0,J=K.length;V<J;V++){const z=K[V],ie=H[z.materialIndex];if(ie&&ie.visible){const ue=b(A,ie,T,E);A.onBeforeShadow(i,A,w,N,B,ue,z),i.renderBufferDirect(N,null,B,ue,A,z),A.onAfterShadow(i,A,w,N,B,ue,z)}}}else if(H.visible){const K=b(A,H,T,E);A.onBeforeShadow(i,A,w,N,B,K,null),i.renderBufferDirect(N,null,B,K,A,null),A.onAfterShadow(i,A,w,N,B,K,null)}}const W=A.children;for(let B=0,H=W.length;B<H;B++)y(W[B],w,N,T,E)}function C(A){A.target.removeEventListener("dispose",C);for(const N in h){const T=h[N],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const Py={[jl]:Kl,[$l]:Ql,[Zl]:ec,[as]:Jl,[Kl]:jl,[Ql]:$l,[ec]:Zl,[Jl]:as};function Dy(i,e){function t(){let D=!1;const re=new tt;let G=null;const j=new tt(0,0,0,0);return{setMask:function(ce){G!==ce&&!D&&(i.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){D=ce},setClear:function(ce,le,Oe,_t,kt){kt===!0&&(ce*=_t,le*=_t,Oe*=_t),re.set(ce,le,Oe,_t),j.equals(re)===!1&&(i.clearColor(ce,le,Oe,_t),j.copy(re))},reset:function(){D=!1,G=null,j.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,G=null,j=null,ce=null;return{setReversed:function(le){if(re!==le){const Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const _t=ce;ce=null,this.setClear(_t)}re=le},getReversed:function(){return re},setTest:function(le){le?ae(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(le){G!==le&&!D&&(i.depthMask(le),G=le)},setFunc:function(le){if(re&&(le=Py[le]),j!==le){switch(le){case jl:i.depthFunc(i.NEVER);break;case Kl:i.depthFunc(i.ALWAYS);break;case $l:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Ql:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=le}},setLocked:function(le){D=le},setClear:function(le){ce!==le&&(re&&(le=1-le),i.clearDepth(le),ce=le)},reset:function(){D=!1,G=null,j=null,ce=null,re=!1}}}function r(){let D=!1,re=null,G=null,j=null,ce=null,le=null,Oe=null,_t=null,kt=null;return{setTest:function(rt){D||(rt?ae(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(rt){re!==rt&&!D&&(i.stencilMask(rt),re=rt)},setFunc:function(rt,Dn,oi){(G!==rt||j!==Dn||ce!==oi)&&(i.stencilFunc(rt,Dn,oi),G=rt,j=Dn,ce=oi)},setOp:function(rt,Dn,oi){(le!==rt||Oe!==Dn||_t!==oi)&&(i.stencilOp(rt,Dn,oi),le=rt,Oe=Dn,_t=oi)},setLocked:function(rt){D=rt},setClear:function(rt){kt!==rt&&(i.clearStencil(rt),kt=rt)},reset:function(){D=!1,re=null,G=null,j=null,ce=null,le=null,Oe=null,_t=null,kt=null}}}const s=new t,a=new n,l=new r,u=new WeakMap,h=new WeakMap;let f={},o={},c=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,b=null,y=null,C=null,A=null,w=new Pe(0,0,0),N=0,T=!1,E=null,I=null,W=null,B=null,H=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=J>=2);let ie=null,ue={};const _e=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),ct=new tt().fromArray(_e),q=new tt().fromArray(ze);function te(D,re,G,j){const ce=new Uint8Array(4),le=i.createTexture();i.bindTexture(D,le),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<G;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(re+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return le}const ge={};ge[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ae(i.DEPTH_TEST),a.setFunc(as),je(!1),Ke(Ou),ae(i.CULL_FACE),R(Qn);function ae(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Me(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function et(D,re){return o[D]!==re?(i.bindFramebuffer(D,re),o[D]=re,D===i.DRAW_FRAMEBUFFER&&(o[i.FRAMEBUFFER]=re),D===i.FRAMEBUFFER&&(o[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(D,re){let G=d,j=!1;if(D){G=c.get(re),G===void 0&&(G=[],c.set(re,G));const ce=D.textures;if(G.length!==ce.length||G[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Oe=ce.length;le<Oe;le++)G[le]=i.COLOR_ATTACHMENT0+le;G.length=ce.length,j=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,j=!0);j&&i.drawBuffers(G)}function yt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const pt={[xr]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Zp]:i.FUNC_REVERSE_SUBTRACT};pt[Jp]=i.MIN,pt[Qp]=i.MAX;const Ye={[em]:i.ZERO,[tm]:i.ONE,[nm]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[lm]:i.SRC_ALPHA_SATURATE,[am]:i.DST_COLOR,[rm]:i.DST_ALPHA,[im]:i.ONE_MINUS_SRC_COLOR,[Yl]:i.ONE_MINUS_SRC_ALPHA,[om]:i.ONE_MINUS_DST_COLOR,[sm]:i.ONE_MINUS_DST_ALPHA,[cm]:i.CONSTANT_COLOR,[um]:i.ONE_MINUS_CONSTANT_COLOR,[hm]:i.CONSTANT_ALPHA,[dm]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,re,G,j,ce,le,Oe,_t,kt,rt){if(D===Qn){_===!0&&(Me(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),D!==Kp){if(D!==g||rt!==T){if((p!==xr||y!==xr)&&(i.blendEquation(i.FUNC_ADD),p=xr,y=xr),rt)switch(D){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fu:i.blendFunc(i.ONE,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,b=null,C=null,A=null,w.set(0,0,0),N=0,g=D,T=rt}return}ce=ce||re,le=le||G,Oe=Oe||j,(re!==p||ce!==y)&&(i.blendEquationSeparate(pt[re],pt[ce]),p=re,y=ce),(G!==S||j!==b||le!==C||Oe!==A)&&(i.blendFuncSeparate(Ye[G],Ye[j],Ye[le],Ye[Oe]),S=G,b=j,C=le,A=Oe),(_t.equals(w)===!1||kt!==N)&&(i.blendColor(_t.r,_t.g,_t.b,kt),w.copy(_t),N=kt),g=D,T=!1}function Tn(D,re){D.side===Zn?Me(i.CULL_FACE):ae(i.CULL_FACE);let G=D.side===cn;re&&(G=!G),je(G),D.blending===ts&&D.transparent===!1?R(Qn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;l.setTest(j),j&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function Ke(D){D!==qp?(ae(i.CULL_FACE),D!==I&&(D===Ou?i.cullFace(i.BACK):D===Yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),I=D}function ye(D){D!==W&&(V&&i.lineWidth(D),W=D)}function ht(D,re,G){D?(ae(i.POLYGON_OFFSET_FILL),(B!==re||H!==G)&&(i.polygonOffset(re,G),B=re,H=G)):Me(i.POLYGON_OFFSET_FILL)}function ve(D){D?ae(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function M(D){D===void 0&&(D=i.TEXTURE0+K-1),ie!==D&&(i.activeTexture(D),ie=D)}function x(D,re,G){G===void 0&&(ie===null?G=i.TEXTURE0+K-1:G=ie);let j=ue[G];j===void 0&&(j={type:void 0,texture:void 0},ue[G]=j),(j.type!==D||j.texture!==re)&&(ie!==G&&(i.activeTexture(G),ie=G),i.bindTexture(D,re||ge[D]),j.type=D,j.texture=re)}function O(){const D=ue[ie];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(D){ct.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function pe(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function $e(D,re){let G=h.get(re);G===void 0&&(G=new WeakMap,h.set(re,G));let j=G.get(D);j===void 0&&(j=i.getUniformBlockIndex(re,D.name),G.set(D,j))}function Be(D,re){const j=h.get(re).get(D);u.get(re)!==j&&(i.uniformBlockBinding(re,j,D.__bindingPointIndex),u.set(re,j))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ie=null,ue={},o={},c=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,b=null,y=null,C=null,A=null,w=new Pe(0,0,0),N=0,T=!1,E=null,I=null,W=null,B=null,H=null,ct.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ae,disable:Me,bindFramebuffer:et,drawBuffers:Re,useProgram:yt,setBlending:R,setMaterial:Tn,setFlipSided:je,setCullFace:Ke,setLineWidth:ye,setPolygonOffset:ht,setScissorTest:ve,activeTexture:M,bindTexture:x,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:fe,texImage3D:be,updateUBOMapping:$e,uniformBlockBinding:Be,texStorage2D:Ze,texStorage3D:Q,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ce,viewport:pe,reset:ut}}function Ly(i,e,t,n,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,f=new WeakMap;let o;const c=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return d?new OffscreenCanvas(M,x):sa("canvas")}function _(M,x,O){let Y=1;const $=ve(M);if(($.width>O||$.height>O)&&(Y=O/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor(Y*$.width),xe=Math.floor(Y*$.height);o===void 0&&(o=m(X,xe));const oe=x?m(X,xe):o;return oe.width=X,oe.height=xe,oe.getContext("2d").drawImage(M,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+xe+")."),oe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,x,O,Y,$=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=x;if(x===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),x===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){const xe=$?xo:qe.getTransfer(Y);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=xe===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(M,x){let O;return M?x===null||x===br||x===us?O=i.DEPTH24_STENCIL8:x===Gn?O=i.DEPTH32F_STENCIL8:x===na&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===br||x===us?O=i.DEPTH_COMPONENT24:x===Gn?O=i.DEPTH_COMPONENT32F:x===na&&(O=i.DEPTH_COMPONENT16),O}function C(M,x){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Bt&&M.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){const x=M.target;x.removeEventListener("dispose",A),N(x),x.isVideoTexture&&f.delete(x)}function w(M){const x=M.target;x.removeEventListener("dispose",w),E(x)}function N(M){const x=n.get(M);if(x.__webglInit===void 0)return;const O=M.source,Y=c.get(O);if(Y){const $=Y[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(M),Object.keys(Y).length===0&&c.delete(O)}n.remove(M)}function T(M){const x=n.get(M);i.deleteTexture(x.__webglTexture);const O=M.source,Y=c.get(O);delete Y[x.__cacheKey],a.memory.textures--}function E(M){const x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let $=0;$<x.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=M.textures;for(let Y=0,$=O.length;Y<$;Y++){const X=n.get(O[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(M)}let I=0;function W(){I=0}function B(){const M=I;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),I+=1,M}function H(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function K(M,x){const O=n.get(M);if(M.isVideoTexture&&ye(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,M,x);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function V(M,x){const O=n.get(M);if(M.version>0&&O.__version!==M.version){q(O,M,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function J(M,x){const O=n.get(M);if(M.version>0&&O.__version!==M.version){q(O,M,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function z(M,x){const O=n.get(M);if(M.version>0&&O.__version!==M.version){te(O,M,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const ie={[cs]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ue={[Bt]:i.NEAREST,[af]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},_e={[ym]:i.NEVER,[Am]:i.ALWAYS,[Sm]:i.LESS,[vf]:i.LEQUAL,[Tm]:i.EQUAL,[Mm]:i.GEQUAL,[Em]:i.GREATER,[bm]:i.NOTEQUAL};function ze(M,x){if(x.type===Gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===to||x.magFilter===Fs||x.magFilter===xi||x.minFilter===_n||x.minFilter===to||x.minFilter===Fs||x.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ie[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ie[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ie[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==Fs&&x.minFilter!==xi||x.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ct(M,x){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let $=c.get(Y);$===void 0&&($={},c.set(Y,$));const X=H(x);if(X!==M.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[X].usedTimes++;const xe=$[M.__cacheKey];xe!==void 0&&($[M.__cacheKey].usedTimes--,xe.usedTimes===0&&T(x)),M.__cacheKey=X,M.__webglTexture=$[X].texture}return O}function q(M,x,O){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const $=ct(M,x),X=x.source;t.bindTexture(Y,M.__webglTexture,i.TEXTURE0+O);const xe=n.get(X);if(X.version!==xe.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const oe=qe.getPrimaries(qe.workingColorSpace),de=x.colorSpace===zi?null:qe.getPrimaries(x.colorSpace),Ze=x.colorSpace===zi||oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Q=_(x.image,!1,r.maxTextureSize);Q=ht(x,Q);const fe=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let Ce=b(x.internalFormat,fe,be,x.colorSpace,x.isVideoTexture);ze(Y,x);let pe;const $e=x.mipmaps,Be=x.isVideoTexture!==!0,ut=xe.__version===void 0||$===!0,D=X.dataReady,re=C(x,Q);if(x.isDepthTexture)Ce=y(x.format===hs,x.type),ut&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Ce,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ce,Q.width,Q.height,0,fe,be,null));else if(x.isDataTexture)if($e.length>0){Be&&ut&&t.texStorage2D(i.TEXTURE_2D,re,Ce,$e[0].width,$e[0].height);for(let G=0,j=$e.length;G<j;G++)pe=$e[G],Be?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,be,pe.data):t.texImage2D(i.TEXTURE_2D,G,Ce,pe.width,pe.height,0,fe,be,pe.data);x.generateMipmaps=!1}else Be?(ut&&t.texStorage2D(i.TEXTURE_2D,re,Ce,Q.width,Q.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,be,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,Q.width,Q.height,0,fe,be,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ce,$e[0].width,$e[0].height,Q.depth);for(let G=0,j=$e.length;G<j;G++)if(pe=$e[G],x.format!==In)if(fe!==null)if(Be){if(D)if(x.layerUpdates.size>0){const ce=Dh(pe.width,pe.height,x.format,x.type);for(const le of x.layerUpdates){const Oe=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,le,pe.width,pe.height,1,fe,Oe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ce,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,fe,be,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Ce,pe.width,pe.height,Q.depth,0,fe,be,pe.data)}else{Be&&ut&&t.texStorage2D(i.TEXTURE_2D,re,Ce,$e[0].width,$e[0].height);for(let G=0,j=$e.length;G<j;G++)pe=$e[G],x.format!==In?fe!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,be,pe.data):t.texImage2D(i.TEXTURE_2D,G,Ce,pe.width,pe.height,0,fe,be,pe.data)}else if(x.isDataArrayTexture)if(Be){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ce,Q.width,Q.height,Q.depth),D)if(x.layerUpdates.size>0){const G=Dh(Q.width,Q.height,x.format,x.type);for(const j of x.layerUpdates){const ce=Q.data.subarray(j*G/Q.data.BYTES_PER_ELEMENT,(j+1)*G/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,fe,be,ce)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,be,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,Q.width,Q.height,Q.depth,0,fe,be,Q.data);else if(x.isData3DTexture)Be?(ut&&t.texStorage3D(i.TEXTURE_3D,re,Ce,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,be,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,Q.width,Q.height,Q.depth,0,fe,be,Q.data);else if(x.isFramebufferTexture){if(ut)if(Be)t.texStorage2D(i.TEXTURE_2D,re,Ce,Q.width,Q.height);else{let G=Q.width,j=Q.height;for(let ce=0;ce<re;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ce,G,j,0,fe,be,null),G>>=1,j>>=1}}else if($e.length>0){if(Be&&ut){const G=ve($e[0]);t.texStorage2D(i.TEXTURE_2D,re,Ce,G.width,G.height)}for(let G=0,j=$e.length;G<j;G++)pe=$e[G],Be?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,fe,be,pe):t.texImage2D(i.TEXTURE_2D,G,Ce,fe,be,pe);x.generateMipmaps=!1}else if(Be){if(ut){const G=ve(Q);t.texStorage2D(i.TEXTURE_2D,re,Ce,G.width,G.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,be,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ce,fe,be,Q);g(x)&&p(Y),xe.__version=X.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function te(M,x,O){if(x.image.length!==6)return;const Y=ct(M,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+O);const X=n.get($);if($.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);const xe=qe.getPrimaries(qe.workingColorSpace),oe=x.colorSpace===zi?null:qe.getPrimaries(x.colorSpace),de=x.colorSpace===zi||xe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!Ze&&!Q?fe[j]=_(x.image[j],!0,r.maxCubemapSize):fe[j]=Q?x.image[j].image:x.image[j],fe[j]=ht(x,fe[j]);const be=fe[0],Ce=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),$e=b(x.internalFormat,Ce,pe,x.colorSpace),Be=x.isVideoTexture!==!0,ut=X.__version===void 0||Y===!0,D=$.dataReady;let re=C(x,be);ze(i.TEXTURE_CUBE_MAP,x);let G;if(Ze){Be&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,$e,be.width,be.height);for(let j=0;j<6;j++){G=fe[j].mipmaps;for(let ce=0;ce<G.length;ce++){const le=G[ce];x.format!==In?Ce!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,le.width,le.height,Ce,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,$e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,le.width,le.height,Ce,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,$e,le.width,le.height,0,Ce,pe,le.data)}}}else{if(G=x.mipmaps,Be&&ut){G.length>0&&re++;const j=ve(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,$e,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,Ce,pe,fe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,fe[j].width,fe[j].height,0,Ce,pe,fe[j].data);for(let ce=0;ce<G.length;ce++){const Oe=G[ce].image[j].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,Oe.width,Oe.height,Ce,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,$e,Oe.width,Oe.height,0,Ce,pe,Oe.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,pe,fe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,Ce,pe,fe[j]);for(let ce=0;ce<G.length;ce++){const le=G[ce];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,Ce,pe,le.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,$e,Ce,pe,le.image[j])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),X.__version=$.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ge(M,x,O,Y,$,X){const xe=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),de=b(O.internalFormat,xe,oe,O.colorSpace),Ze=n.get(x),Q=n.get(O);if(Q.__renderTarget=x,!Ze.__hasExternalTextures){const fe=Math.max(1,x.width>>X),be=Math.max(1,x.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,X,de,fe,be,x.depth,0,xe,oe,null):t.texImage2D($,X,de,fe,be,0,xe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Ke(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,Q.__webglTexture,0,je(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,Q.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(M,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){const Y=x.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,X=y(x.stencilBuffer,$),xe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=je(x);Ke(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,M)}else{const Y=x.textures;for(let $=0;$<Y.length;$++){const X=Y[$],xe=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),de=b(X.internalFormat,xe,oe,X.colorSpace),Ze=je(x);O&&Ke(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,de,x.width,x.height):Ke(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const $=Y.__webglTexture,X=je(x);if(x.depthTexture.format===ns)Ke(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===hs)Ke(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function et(M){const x=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Me(x.__webglFramebuffer,M)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ae(x.__webglDepthbuffer[Y],M,!1);else{const $=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ae(x.__webglDepthbuffer,M,!1);else{const Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(M,x,O){const Y=n.get(M);x!==void 0&&ge(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&et(M)}function yt(M){const x=M.texture,O=n.get(M),Y=n.get(x);M.addEventListener("dispose",w);const $=M.textures,X=M.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let de=0;de<x.mipmaps.length;de++)O.__webglFramebuffer[oe][de]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xe)for(let oe=0,de=$.length;oe<de;oe++){const Ze=n.get($[oe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Ke(M)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const de=$[oe];O.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const Ze=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),fe=b(de.internalFormat,Ze,Q,de.colorSpace,M.isXRRenderTarget===!0),be=je(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,fe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ge(O.__webglFramebuffer[oe][de],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ge(O.__webglFramebuffer[oe],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,de=$.length;oe<de;oe++){const Ze=$[oe],Q=n.get(Ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ze(i.TEXTURE_2D,Ze),ge(O.__webglFramebuffer,M,Ze,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),g(Ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(oe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),ze(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ge(O.__webglFramebuffer[de],M,x,i.COLOR_ATTACHMENT0,oe,de);else ge(O.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,oe,0);g(x)&&p(oe),t.unbindTexture()}M.depthBuffer&&et(M)}function pt(M){const x=M.textures;for(let O=0,Y=x.length;O<Y;O++){const $=x[O];if(g($)){const X=S(M),xe=n.get($).__webglTexture;t.bindTexture(X,xe),p(X),t.unbindTexture()}}}const Ye=[],R=[];function Tn(M){if(M.samples>0){if(Ke(M)===!1){const x=M.textures,O=M.width,Y=M.height;let $=i.COLOR_BUFFER_BIT;const X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(M),oe=x.length>1;if(oe)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<x.length;de++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const Ze=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,$,i.NEAREST),u===!0&&(Ye.length=0,R.length=0,Ye.push(i.COLOR_ATTACHMENT0+de),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ye.push(X),R.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const Ze=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&u){const x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function je(M){return Math.min(r.maxSamples,M.samples)}function Ke(M){const x=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ye(M){const x=a.render.frame;f.get(M)!==x&&(f.set(M,x),M.update())}function ht(M,x){const O=M.colorSpace,Y=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==Zt&&O!==zi&&(qe.getTransfer(O)===st?(Y!==In||$!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ve(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Re,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ke}function Ny(i,e){function t(n,r=zi){let s;const a=qe.getTransfer(r);if(n===bi)return i.UNSIGNED_BYTE;if(n===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return i.BYTE;if(n===lf)return i.SHORT;if(n===na)return i.UNSIGNED_SHORT;if(n===tu)return i.INT;if(n===br)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===uf)return i.ALPHA;if(n===hf)return i.RGB;if(n===In)return i.RGBA;if(n===df)return i.LUMINANCE;if(n===ff)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===su)return i.RED_INTEGER;if(n===pf)return i.RG;if(n===au)return i.RG_INTEGER;if(n===ou)return i.RGBA_INTEGER;if(n===no||n===io||n===ro||n===so)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===rc||n===sc||n===ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oc||n===lc)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Tc||n===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===bc||n===Mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ao)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===Ac||n===wc||n===Rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ao)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
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

}`;class Fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:Uy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class By extends Ar{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",u=1,h=null,f=null,o=null,c=null,d=null,m=null;const _=new Fy,g=t.getContextAttributes();let p=null,S=null;const b=[],y=[],C=new Ee;let A=null;const w=new jt;w.viewport=new tt;const N=new jt;N.viewport=new tt;const T=[w,N],E=new Kg;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=b[q];return te===void 0&&(te=new fl,b[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=b[q];return te===void 0&&(te=new fl,b[q]=te),te.getGripSpace()},this.getHand=function(q){let te=b[q];return te===void 0&&(te=new fl,b[q]=te),te.getHandSpace()};function B(q){const te=y.indexOf(q.inputSource);if(te===-1)return;const ge=b[te];ge!==void 0&&(ge.update(q.inputSource,q.frame,h||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",K);for(let q=0;q<b.length;q++){const te=y[q];te!==null&&(y[q]=null,b[q].disconnect(te))}I=null,W=null,_.reset(),e.setRenderTarget(p),d=null,c=null,o=null,r=null,S=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return o},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ae=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?hs:ns,ae=g.stencil?us:br);const et={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};o=new XRWebGLBinding(r,t),c=o.createProjectionLayer(et),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),S=new Mi(c.textureWidth,c.textureHeight,{format:In,type:bi,depthTexture:new Df(c.textureWidth,c.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}else{const ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Mi(d.framebufferWidth,d.framebufferHeight,{format:In,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}S.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await r.requestReferenceSpace(l),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let te=0;te<q.removed.length;te++){const ge=q.removed[te],ae=y.indexOf(ge);ae>=0&&(y[ae]=null,b[ae].disconnect(ge))}for(let te=0;te<q.added.length;te++){const ge=q.added[te];let ae=y.indexOf(ge);if(ae===-1){for(let et=0;et<b.length;et++)if(et>=y.length){y.push(ge),ae=et;break}else if(y[et]===null){y[et]=ge,ae=et;break}if(ae===-1)break}const Me=b[ae];Me&&Me.connect(ge)}}const V=new P,J=new P;function z(q,te,ge){V.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);const ae=V.distanceTo(J),Me=te.projectionMatrix.elements,et=ge.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),yt=Me[14]/(Me[10]+1),pt=(Me[9]+1)/Me[5],Ye=(Me[9]-1)/Me[5],R=(Me[8]-1)/Me[0],Tn=(et[8]+1)/et[0],je=Re*R,Ke=Re*Tn,ye=ae/(-R+Tn),ht=ye*-R;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ht),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ve=Re+ye,M=yt+ye,x=je-ht,O=Ke+(ae-ht),Y=pt*yt/M*ve,$=Ye*yt/M*ve;q.projectionMatrix.makePerspective(x,O,Y,$,ve,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ge=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),E.near=N.near=w.near=te,E.far=N.far=w.far=ge,(I!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,W=E.far),w.layers.mask=q.layers.mask|2,N.layers.mask=q.layers.mask|4,E.layers.mask=w.layers.mask|N.layers.mask;const ae=q.parent,Me=E.cameras;ie(E,ae);for(let et=0;et<Me.length;et++)ie(Me[et],ae);Me.length===2?z(E,w,N):E.projectionMatrix.copy(w.projectionMatrix),ue(q,E,ae)};function ue(q,te,ge){ge===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ds*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(c===null&&d===null))return u},this.setFoveation=function(q){u=q,c!==null&&(c.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let _e=null;function ze(q,te){if(f=te.getViewerPose(h||a),m=te,f!==null){const ge=f.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ae=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Re=0;Re<ge.length;Re++){const yt=ge[Re];let pt=null;if(d!==null)pt=d.getViewport(yt);else{const R=o.getViewSubImage(c,yt);pt=R.viewport,Re===0&&(e.setRenderTargetTextures(S,R.colorTexture,c.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(S))}let Ye=T[Re];Ye===void 0&&(Ye=new jt,Ye.layers.enable(Re),Ye.viewport=new tt,T[Re]=Ye),Ye.matrix.fromArray(yt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(yt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(pt.x,pt.y,pt.width,pt.height),Re===0&&(E.matrix.copy(Ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(Ye)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&o){const Re=o.getDepthInformation(ge[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,r.renderState)}}for(let ge=0;ge<b.length;ge++){const ae=y[ge],Me=b[ge];ae!==null&&Me!==void 0&&Me.update(ae,te,h||a)}_e&&_e(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const ct=new zf;ct.setAnimationLoop(ze),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}}const cr=new ni,ky=new Ne;function zy(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Af(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,S,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),o(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),c(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?u(g,p,S,b):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,y=S.envMapRotation;b&&(g.envMap.value=b,cr.copy(y),cr.x*=-1,cr.y*=-1,cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(cr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function u(g,p,S,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function o(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function c(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hy(i,e,t,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function h(S,b){let y=r[S.id];y===void 0&&(m(S),y=f(S),r[S.id]=y,S.addEventListener("dispose",g));const C=b.program;n.updateUBOMapping(S,C);const A=e.render.frame;s[S.id]!==A&&(c(S),s[S.id]=A)}function f(S){const b=o();S.__bindingPointIndex=b;const y=i.createBuffer(),C=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function o(){for(let S=0;S<l;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const b=r[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,w=y.length;A<w;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,E=N.length;T<E;T++){const I=N[T];if(d(I,A,T,C)===!0){const W=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let K=0;K<B.length;K++){const V=B[K],J=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+H,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,y,C){const A=S.value,w=b+"_"+y;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const N=C[w];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[w]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function m(S){const b=S.uniforms;let y=0;const C=16;for(let w=0,N=b.length;w<N;w++){const T=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,I=T.length;E<I;E++){const W=T[E],B=Array.isArray(W.value)?W.value:[W.value];for(let H=0,K=B.length;H<K;H++){const V=B[H],J=_(V),z=y%C,ie=z%J.boundary,ue=z+ie;y+=ie,ue!==0&&C-ue<J.storage&&(y+=C-ue),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=J.storage}}}const A=y%C;return A>0&&(y+=C-A),S.__size=y,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function g(S){const b=S.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:u,update:h,dispose:p}}class Gy{constructor(e={}){const{canvas:t=Vm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:o=!1,reverseDepthBuffer:c=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Ji,this.toneMappingExposure=1;const y=this;let C=!1,A=0,w=0,N=null,T=-1,E=null;const I=new tt,W=new tt;let B=null;const H=new Pe(0);let K=0,V=t.width,J=t.height,z=1,ie=null,ue=null;const _e=new tt(0,0,V,J),ze=new tt(0,0,V,J);let ct=!1;const q=new fu;let te=!1,ge=!1;this.transmissionResolutionScale=1;const ae=new Ne,Me=new Ne,et=new P,Re=new tt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ye(){return N===null?z:1}let R=n;function Tn(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:o};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const L="webgl2";if(R=Tn(L,v),R===null)throw Tn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let je,Ke,ye,ht,ve,M,x,O,Y,$,X,xe,oe,de,Ze,Q,fe,be,Ce,pe,$e,Be,ut,D;function re(){je=new Jx(R),je.init(),Be=new Ny(R,je),Ke=new qx(R,je,e,Be),ye=new Dy(R,je),Ke.reverseDepthBuffer&&c&&ye.buffers.depth.setReversed(!0),ht=new tv(R),ve=new vy,M=new Ly(R,je,ye,ve,Ke,Be,ht),x=new jx(y),O=new Zx(y),Y=new l_(R),ut=new Wx(R,Y),$=new Qx(R,Y,ht,ut),X=new iv(R,$,Y,ht),Ce=new nv(R,Ke,M),Q=new Yx(ve),xe=new xy(y,x,O,je,Ke,ut,Q),oe=new zy(y,ve),de=new Sy,Ze=new wy(je),be=new Vx(y,x,O,ye,X,d,u),fe=new Iy(y,X,Ke),D=new Hy(R,ht,Ke,ye),pe=new Xx(R,je,ht),$e=new ev(R,je,ht),ht.programs=xe.programs,y.capabilities=Ke,y.extensions=je,y.properties=ve,y.renderLists=de,y.shadowMap=fe,y.state=ye,y.info=ht}re();const G=new By(y,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(V,J,!1))},this.getSize=function(v){return v.set(V,J)},this.setSize=function(v,L,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,J=L,t.width=Math.floor(v*z),t.height=Math.floor(L*z),F===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(V*z,J*z).floor()},this.setDrawingBufferSize=function(v,L,F){V=v,J=L,z=F,t.width=Math.floor(v*F),t.height=Math.floor(L*F),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(I)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,L,F,k){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,L,F,k),ye.viewport(I.copy(_e).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(ze)},this.setScissor=function(v,L,F,k){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,L,F,k),ye.scissor(W.copy(ze).multiplyScalar(z).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(v){ye.setScissorTest(ct=v)},this.setOpaqueSort=function(v){ie=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(v=!0,L=!0,F=!0){let k=0;if(v){let U=!1;if(N!==null){const Z=N.texture.format;U=Z===ou||Z===au||Z===su}if(U){const Z=N.texture.type,se=Z===bi||Z===br||Z===na||Z===us||Z===nu||Z===iu,he=be.getClearColor(),me=be.getClearAlpha(),Ie=he.r,De=he.g,Se=he.b;se?(m[0]=Ie,m[1]=De,m[2]=Se,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=Ie,_[1]=De,_[2]=Se,_[3]=me,R.clearBufferiv(R.COLOR,0,_))}else k|=R.COLOR_BUFFER_BIT}L&&(k|=R.DEPTH_BUFFER_BIT),F&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),be.dispose(),de.dispose(),Ze.dispose(),ve.dispose(),x.dispose(),O.dispose(),X.dispose(),ut.dispose(),D.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",Cu),G.removeEventListener("sessionend",Iu),nr.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=ht.autoReset,L=fe.enabled,F=fe.autoUpdate,k=fe.needsUpdate,U=fe.type;re(),ht.autoReset=v,fe.enabled=L,fe.autoUpdate=F,fe.needsUpdate=k,fe.type=U}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Oe(v){const L=v.target;L.removeEventListener("dispose",Oe),_t(L)}function _t(v){kt(v),ve.remove(v)}function kt(v){const L=ve.get(v).programs;L!==void 0&&(L.forEach(function(F){xe.releaseProgram(F)}),v.isShaderMaterial&&xe.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,F,k,U,Z){L===null&&(L=yt);const se=U.isMesh&&U.matrixWorld.determinant()<0,he=zp(v,L,F,k,U);ye.setMaterial(k,se);let me=F.index,Ie=1;if(k.wireframe===!0){if(me=$.getWireframeAttribute(F),me===void 0)return;Ie=2}const De=F.drawRange,Se=F.attributes.position;let Je=De.start*Ie,nt=(De.start+De.count)*Ie;Z!==null&&(Je=Math.max(Je,Z.start*Ie),nt=Math.min(nt,(Z.start+Z.count)*Ie)),me!==null?(Je=Math.max(Je,0),nt=Math.min(nt,me.count)):Se!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Se.count));const Et=nt-Je;if(Et<0||Et===1/0)return;ut.setup(U,k,he,F,me);let xt,Qe=pe;if(me!==null&&(xt=Y.get(me),Qe=$e,Qe.setIndex(xt)),U.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*Ye()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(U.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*Ye()),U.isLineSegments?Qe.setMode(R.LINES):U.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else U.isPoints?Qe.setMode(R.POINTS):U.isSprite&&Qe.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Nt=U._multiDrawCounts,it=U._multiDrawCount,Ln=me?Y.get(me).bytesPerElement:1,Rr=ve.get(k).currentProgram.getUniforms();for(let hn=0;hn<it;hn++)Rr.setValue(R,"_gl_DrawID",hn),Qe.render(Te[hn]/Ln,Nt[hn])}else if(U.isInstancedMesh)Qe.renderInstances(Je,Et,U.count);else if(F.isInstancedBufferGeometry){const Te=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Nt=Math.min(F.instanceCount,Te);Qe.renderInstances(Je,Et,Nt)}else Qe.render(Je,Et)};function rt(v,L,F){v.transparent===!0&&v.side===Zn&&v.forceSinglePass===!1?(v.side=cn,v.needsUpdate=!0,ga(v,L,F),v.side=Ei,v.needsUpdate=!0,ga(v,L,F),v.side=Zn):ga(v,L,F)}this.compile=function(v,L,F=null){F===null&&(F=v),p=Ze.get(F),p.init(L),b.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==F&&v.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Z=U.material;if(Z)if(Array.isArray(Z))for(let se=0;se<Z.length;se++){const he=Z[se];rt(he,F,U),k.add(he)}else rt(Z,F,U),k.add(Z)}),b.pop(),p=null,k},this.compileAsync=function(v,L,F=null){const k=this.compile(v,L,F);return new Promise(U=>{function Z(){if(k.forEach(function(se){ve.get(se).currentProgram.isReady()&&k.delete(se)}),k.size===0){U(v);return}setTimeout(Z,10)}je.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let Dn=null;function oi(v){Dn&&Dn(v)}function Cu(){nr.stop()}function Iu(){nr.start()}const nr=new zf;nr.setAnimationLoop(oi),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(v){Dn=v,G.setAnimationLoop(v),v===null?nr.stop():nr.start()},G.addEventListener("sessionstart",Cu),G.addEventListener("sessionend",Iu),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,L,N),p=Ze.get(v,b.length),p.init(L),b.push(p),Me.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Me),ge=this.localClippingEnabled,te=Q.init(this.clippingPlanes,ge),g=de.get(v,S.length),g.init(),S.push(g),G.enabled===!0&&G.isPresenting===!0){const Z=y.xr.getDepthSensingMesh();Z!==null&&Xo(Z,L,-1/0,y.sortObjects)}Xo(v,L,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ie,ue),pt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,pt&&be.addToRenderList(g,v),this.info.render.frame++,te===!0&&Q.beginShadows();const F=p.state.shadowsArray;fe.render(F,v,L),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,U=g.transmissive;if(p.setupLights(),L.isArrayCamera){const Z=L.cameras;if(U.length>0)for(let se=0,he=Z.length;se<he;se++){const me=Z[se];Du(k,U,v,me)}pt&&be.render(v);for(let se=0,he=Z.length;se<he;se++){const me=Z[se];Pu(g,v,me,me.viewport)}}else U.length>0&&Du(k,U,v,L),pt&&be.render(v),Pu(g,v,L);N!==null&&w===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(y,v,L),ut.resetDefaultState(),T=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Xo(v,L,F,k){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){k&&Re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);const se=X.update(v),he=v.material;he.visible&&g.push(v,se,he,F,Re.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const se=X.update(v),he=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Re.copy(v.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Re.copy(se.boundingSphere.center)),Re.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(he)){const me=se.groups;for(let Ie=0,De=me.length;Ie<De;Ie++){const Se=me[Ie],Je=he[Se.materialIndex];Je&&Je.visible&&g.push(v,se,Je,F,Re.z,Se)}}else he.visible&&g.push(v,se,he,F,Re.z,null)}}const Z=v.children;for(let se=0,he=Z.length;se<he;se++)Xo(Z[se],L,F,k)}function Pu(v,L,F,k){const U=v.opaque,Z=v.transmissive,se=v.transparent;p.setupLightsView(F),te===!0&&Q.setGlobalState(y.clippingPlanes,F),k&&ye.viewport(I.copy(k)),U.length>0&&ma(U,L,F),Z.length>0&&ma(Z,L,F),se.length>0&&ma(se,L,F),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Du(v,L,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Mi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Mr:bi,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Z=p.state.transmissionRenderTarget[k.id],se=k.viewport||I;Z.setSize(se.z*y.transmissionResolutionScale,se.w*y.transmissionResolutionScale);const he=y.getRenderTarget();y.setRenderTarget(Z),y.getClearColor(H),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),pt&&be.render(F);const me=y.toneMapping;y.toneMapping=Ji;const Ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),te===!0&&Q.setGlobalState(y.clippingPlanes,k),ma(v,F,k),M.updateMultisampleRenderTarget(Z),M.updateRenderTargetMipmap(Z),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Se=0,Je=L.length;Se<Je;Se++){const nt=L[Se],Et=nt.object,xt=nt.geometry,Qe=nt.material,Te=nt.group;if(Qe.side===Zn&&Et.layers.test(k.layers)){const Nt=Qe.side;Qe.side=cn,Qe.needsUpdate=!0,Lu(Et,F,k,xt,Qe,Te),Qe.side=Nt,Qe.needsUpdate=!0,De=!0}}De===!0&&(M.updateMultisampleRenderTarget(Z),M.updateRenderTargetMipmap(Z))}y.setRenderTarget(he),y.setClearColor(H,K),Ie!==void 0&&(k.viewport=Ie),y.toneMapping=me}function ma(v,L,F){const k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Z=v.length;U<Z;U++){const se=v[U],he=se.object,me=se.geometry,Ie=k===null?se.material:k,De=se.group;he.layers.test(F.layers)&&Lu(he,L,F,me,Ie,De)}}function Lu(v,L,F,k,U,Z){v.onBeforeRender(y,L,F,k,U,Z),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,L,F,k,v,Z),U.transparent===!0&&U.side===Zn&&U.forceSinglePass===!1?(U.side=cn,U.needsUpdate=!0,y.renderBufferDirect(F,L,k,U,v,Z),U.side=Ei,U.needsUpdate=!0,y.renderBufferDirect(F,L,k,U,v,Z),U.side=Zn):y.renderBufferDirect(F,L,k,U,v,Z),v.onAfterRender(y,L,F,k,U,Z)}function ga(v,L,F){L.isScene!==!0&&(L=yt);const k=ve.get(v),U=p.state.lights,Z=p.state.shadowsArray,se=U.state.version,he=xe.getParameters(v,U.state,Z,L,F),me=xe.getProgramCacheKey(he);let Ie=k.programs;k.environment=v.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(v.isMeshStandardMaterial?O:x).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",Oe),Ie=new Map,k.programs=Ie);let De=Ie.get(me);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===se)return Uu(v,he),De}else he.uniforms=xe.getUniforms(v),v.onBeforeCompile(he,y),De=xe.acquireProgram(he,me),Ie.set(me,De),k.uniforms=he.uniforms;const Se=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=Q.uniform),Uu(v,he),k.needsLights=Gp(v),k.lightsStateVersion=se,k.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function Nu(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=oo.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Uu(v,L){const F=ve.get(v);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function zp(v,L,F,k,U){L.isScene!==!0&&(L=yt),M.resetTextureUnits();const Z=L.fog,se=k.isMeshStandardMaterial?L.environment:null,he=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Zt,me=(k.isMeshStandardMaterial?O:x).get(k.envMap||se),Ie=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!F.morphAttributes.position,Je=!!F.morphAttributes.normal,nt=!!F.morphAttributes.color;let Et=Ji;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=y.toneMapping);const xt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=xt!==void 0?xt.length:0,Te=ve.get(k),Nt=p.state.lights;if(te===!0&&(ge===!0||v!==E)){const Vt=v===E&&k.id===T;Q.setState(k,v,Vt)}let it=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Nt.state.version||Te.outputColorSpace!==he||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==me||k.fog===!0&&Te.fog!==Z||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Q.numPlanes||Te.numIntersection!==Q.numIntersection)||Te.vertexAlphas!==Ie||Te.vertexTangents!==De||Te.morphTargets!==Se||Te.morphNormals!==Je||Te.morphColors!==nt||Te.toneMapping!==Et||Te.morphTargetsCount!==Qe)&&(it=!0):(it=!0,Te.__version=k.version);let Ln=Te.currentProgram;it===!0&&(Ln=ga(k,L,U));let Rr=!1,hn=!1,Ms=!1;const dt=Ln.getUniforms(),En=Te.uniforms;if(ye.useProgram(Ln.program)&&(Rr=!0,hn=!0,Ms=!0),k.id!==T&&(T=k.id,hn=!0),Rr||E!==v){ye.buffers.depth.getReversed()?(ae.copy(v.projectionMatrix),Xm(ae),qm(ae),dt.setValue(R,"projectionMatrix",ae)):dt.setValue(R,"projectionMatrix",v.projectionMatrix),dt.setValue(R,"viewMatrix",v.matrixWorldInverse);const en=dt.map.cameraPosition;en!==void 0&&en.setValue(R,et.setFromMatrixPosition(v.matrixWorld)),Ke.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,hn=!0,Ms=!0)}if(U.isSkinnedMesh){dt.setOptional(R,U,"bindMatrix"),dt.setOptional(R,U,"bindMatrixInverse");const Vt=U.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),dt.setValue(R,"boneTexture",Vt.boneTexture,M))}U.isBatchedMesh&&(dt.setOptional(R,U,"batchingTexture"),dt.setValue(R,"batchingTexture",U._matricesTexture,M),dt.setOptional(R,U,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",U._indirectTexture,M),dt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",U._colorsTexture,M));const bn=F.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Ce.update(U,F,Ln),(hn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,dt.setValue(R,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(En.envMap.value=me,En.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(En.envMapIntensity.value=L.environmentIntensity),hn&&(dt.setValue(R,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Hp(En,Ms),Z&&k.fog===!0&&oe.refreshFogUniforms(En,Z),oe.refreshMaterialUniforms(En,k,z,J,p.state.transmissionRenderTarget[v.id]),oo.upload(R,Nu(Te),En,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(oo.upload(R,Nu(Te),En,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(R,"center",U.center),dt.setValue(R,"modelViewMatrix",U.modelViewMatrix),dt.setValue(R,"normalMatrix",U.normalMatrix),dt.setValue(R,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Vt=k.uniformsGroups;for(let en=0,qo=Vt.length;en<qo;en++){const ir=Vt[en];D.update(ir,Ln),D.bind(ir,Ln)}}return Ln}function Hp(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Gp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,F){ve.get(v.texture).__webglTexture=L,ve.get(v.depthTexture).__webglTexture=F;const k=ve.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){const F=ve.get(v);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0};const Vp=R.createFramebuffer();this.setRenderTarget=function(v,L=0,F=0){N=v,A=L,w=F;let k=!0,U=null,Z=!1,se=!1;if(v){const me=ve.get(v);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(me.__hasExternalTextures)M.rebindTextures(v,ve.get(v.texture).__webglTexture,ve.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Se=v.depthTexture;if(me.__boundDepthTexture!==Se){if(Se!==null&&ve.has(Se)&&(v.width!==Se.image.width||v.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(se=!0);const De=ve.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[L])?U=De[L][F]:U=De[L],Z=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?U=ve.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[F]:U=De,I.copy(v.viewport),W.copy(v.scissor),B=v.scissorTest}else I.copy(_e).multiplyScalar(z).floor(),W.copy(ze).multiplyScalar(z).floor(),B=ct;if(F!==0&&(U=Vp),ye.bindFramebuffer(R.FRAMEBUFFER,U)&&k&&ye.drawBuffers(v,U),ye.viewport(I),ye.scissor(W),ye.setScissorTest(B),Z){const me=ve.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,F)}else if(se){const me=ve.get(v.texture),Ie=L;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,F,Ie)}else if(v!==null&&F!==0){const me=ve.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,F)}T=-1},this.readRenderTargetPixels=function(v,L,F,k,U,Z,se){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ve.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&se!==void 0&&(he=he[se]),he){ye.bindFramebuffer(R.FRAMEBUFFER,he);try{const me=v.texture,Ie=me.format,De=me.type;if(!Ke.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-k&&F>=0&&F<=v.height-U&&R.readPixels(L,F,k,U,Be.convert(Ie),Be.convert(De),Z)}finally{const me=N!==null?ve.get(N).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(v,L,F,k,U,Z,se){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ve.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&se!==void 0&&(he=he[se]),he){const me=v.texture,Ie=me.format,De=me.type;if(!Ke.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-k&&F>=0&&F<=v.height-U){ye.bindFramebuffer(R.FRAMEBUFFER,he);const Se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Se),R.bufferData(R.PIXEL_PACK_BUFFER,Z.byteLength,R.STREAM_READ),R.readPixels(L,F,k,U,Be.convert(Ie),Be.convert(De),0);const Je=N!==null?ve.get(N).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,Je);const nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Wm(R,nt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Z),R.deleteBuffer(Se),R.deleteSync(nt),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,F=0){v.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);const k=Math.pow(2,-F),U=Math.floor(v.image.width*k),Z=Math.floor(v.image.height*k),se=L!==null?L.x:0,he=L!==null?L.y:0;M.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,se,he,U,Z),ye.unbindTexture()};const Wp=R.createFramebuffer(),Xp=R.createFramebuffer();this.copyTextureToTexture=function(v,L,F=null,k=null,U=0,Z=null){v.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],L=arguments[2],Z=arguments[3]||0,F=null),Z===null&&(U!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Z=U,U=0):Z=0);let se,he,me,Ie,De,Se,Je,nt,Et;const xt=v.isCompressedTexture?v.mipmaps[Z]:v.image;if(F!==null)se=F.max.x-F.min.x,he=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Ie=F.min.x,De=F.min.y,Se=F.isBox3?F.min.z:0;else{const bn=Math.pow(2,-U);se=Math.floor(xt.width*bn),he=Math.floor(xt.height*bn),v.isDataArrayTexture?me=xt.depth:v.isData3DTexture?me=Math.floor(xt.depth*bn):me=1,Ie=0,De=0,Se=0}k!==null?(Je=k.x,nt=k.y,Et=k.z):(Je=0,nt=0,Et=0);const Qe=Be.convert(L.format),Te=Be.convert(L.type);let Nt;L.isData3DTexture?(M.setTexture3D(L,0),Nt=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(M.setTexture2DArray(L,0),Nt=R.TEXTURE_2D_ARRAY):(M.setTexture2D(L,0),Nt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const it=R.getParameter(R.UNPACK_ROW_LENGTH),Ln=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Rr=R.getParameter(R.UNPACK_SKIP_PIXELS),hn=R.getParameter(R.UNPACK_SKIP_ROWS),Ms=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se);const dt=v.isDataArrayTexture||v.isData3DTexture,En=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const bn=ve.get(v),Vt=ve.get(L),en=ve.get(bn.__renderTarget),qo=ve.get(Vt.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,en.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let ir=0;ir<me;ir++)dt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(v).__webglTexture,U,Se+ir),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(L).__webglTexture,Z,Et+ir)),R.blitFramebuffer(Ie,De,se,he,Je,nt,se,he,R.DEPTH_BUFFER_BIT,R.NEAREST);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ve.has(v)){const bn=ve.get(v),Vt=ve.get(L);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Wp),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,Xp);for(let en=0;en<me;en++)dt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bn.__webglTexture,U,Se+en):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bn.__webglTexture,U),En?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Vt.__webglTexture,Z,Et+en):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Vt.__webglTexture,Z),U!==0?R.blitFramebuffer(Ie,De,se,he,Je,nt,se,he,R.COLOR_BUFFER_BIT,R.NEAREST):En?R.copyTexSubImage3D(Nt,Z,Je,nt,Et+en,Ie,De,se,he):R.copyTexSubImage2D(Nt,Z,Je,nt,Ie,De,se,he);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else En?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(Nt,Z,Je,nt,Et,se,he,me,Qe,Te,xt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Nt,Z,Je,nt,Et,se,he,me,Qe,xt.data):R.texSubImage3D(Nt,Z,Je,nt,Et,se,he,me,Qe,Te,xt):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Z,Je,nt,se,he,Qe,Te,xt.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Z,Je,nt,xt.width,xt.height,Qe,xt.data):R.texSubImage2D(R.TEXTURE_2D,Z,Je,nt,se,he,Qe,Te,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,it),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ln),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rr),R.pixelStorei(R.UNPACK_SKIP_ROWS,hn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ms),Z===0&&L.generateMipmaps&&R.generateMipmap(Nt),ye.unbindTexture()},this.copyTextureToTexture3D=function(v,L,F=null,k=null,U=0){return v.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,v=arguments[2],L=arguments[3],U=arguments[4]||0),Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,F,k,U)},this.initRenderTarget=function(v){ve.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,N=null,ye.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}function id(i,e){if(e===_m)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Cc||e===gf){let t=i.getIndex();if(t===null){const a=[],l=i.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)a.push(u);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Cc)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Vy extends wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new lS(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=js.extractUrlBase(e);a=js.resolveURL(h,this.path)}else a=js.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){r?r(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},u=new Of(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{s.parse(h,a,function(f){t(f),s.manager.itemEnd(e)},l)}catch(f){l(f)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},l={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Xf){try{a[Ve.KHR_BINARY_GLTF]=new cS(e)}catch(o){r&&r(o);return}s=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new TS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const o=this.pluginCallbacks[f](h);o.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[o.name]=o,a[o.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const o=s.extensionsUsed[f],c=s.extensionsRequired||[];switch(o){case Ve.KHR_MATERIALS_UNLIT:a[o]=new qy;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[o]=new uS(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[o]=new hS;break;case Ve.KHR_MESH_QUANTIZATION:a[o]=new dS;break;default:c.indexOf(o)>=0&&l[o]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+o+'".')}}h.setExtensions(a),h.setPlugins(l),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Wy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xy{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const f=new Pe(16777215);u.color!==void 0&&f.setRGB(u.color[0],u.color[1],u.color[2],Zt);const o=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new Tr(f),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new qg(f),h.distance=o;break;case"spot":h=new Wg(f),h.distance=o,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),mi(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class qy{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(e,t,n){const r=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(r)}}class Yy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class jy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(l,l)}return Promise.all(s)}}class Ky{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class $y{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Zy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Zt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Jy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Qy{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(l[0],l[1],l[2],Zt),Promise.all(s)}}class eS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class tS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(l[0],l[1],l[2],Zt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(s)}}class nS{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class iS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class rS{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class sS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],l=r.images[a.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,u);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],l=r.images[a.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,u);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oS{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const u=r.byteOffset||0,h=r.byteLength||0,f=r.count,o=r.byteStride,c=new Uint8Array(l,u,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,o,c,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(f*o);return a.decodeGltfBuffer(new Uint8Array(d),f,o,c,r.mode,r.filter),d})})}else return null}}class lS{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==wn.TRIANGLES&&h.mode!==wn.TRIANGLE_STRIP&&h.mode!==wn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],u={};for(const h in a)l.push(this.parser.getDependency("accessor",a[h]).then(f=>(u[h]=f,u[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const f=h.pop(),o=f.isGroup?f.children:[f],c=h[0].count,d=[];for(const m of o){const _=new Ne,g=new P,p=new yn,S=new P(1,1,1),b=new Tg(m.geometry,m.material,c);for(let y=0;y<c;y++)u.TRANSLATION&&g.fromBufferAttribute(u.TRANSLATION,y),u.ROTATION&&p.fromBufferAttribute(u.ROTATION,y),u.SCALE&&S.fromBufferAttribute(u.SCALE,y),b.setMatrixAt(y,_.compose(g,p,S));for(const y in u)if(y==="_COLOR_0"){const C=u[y];b.instanceColor=new Pc(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,u[y]);gt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const Xf="glTF",Ns=12,rd={JSON:1313821514,BIN:5130562};class cS{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ns,s=new DataView(e,Ns);let a=0;for(;a<r;){const l=s.getUint32(a,!0);a+=4;const u=s.getUint32(a,!0);if(a+=4,u===rd.JSON){const h=new Uint8Array(e,Ns+a,l);this.content=n.decode(h)}else if(u===rd.BIN){const h=Ns+a;this.body=e.slice(h,h+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},u={},h={};for(const f in a){const o=Uc[f]||f.toLowerCase();l[o]=a[f]}for(const f in e.attributes){const o=Uc[f]||f.toLowerCase();if(a[f]!==void 0){const c=n.accessors[e.attributes[f]],d=rs[c.componentType];h[o]=d.name,u[o]=c.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(o,c){r.decodeDracoFile(f,function(d){for(const m in d.attributes){const _=d.attributes[m],g=u[m];g!==void 0&&(_.normalized=g)}o(d)},l,h,Zt,c)})})}}class hS{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dS{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class qf extends ca{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=l*2,h=l*3,f=r-t,o=(n-t)/f,c=o*o,d=c*o,m=e*h,_=m-h,g=-2*d+3*c,p=d-c,S=1-g,b=p-c+o;for(let y=0;y!==l;y++){const C=a[_+y+l],A=a[_+y+u]*f,w=a[m+y+l],N=a[m+y]*f;s[y]=S*C+b*A+g*w+p*N}return s}}const fS=new yn;class pS extends qf{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return fS.fromArray(s).normalize().toArray(s),s}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sd={9728:Bt,9729:_n,9984:af,9985:to,9986:Fs,9987:xi},ad={33071:Vi,33648:_o,10497:cs},Al={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mS={CUBICSPLINE:void 0,LINEAR:ra,STEP:ia},wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function ur(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _S(i,e,t){let n=!1,r=!1,s=!1;for(let h=0,f=e.length;h<f;h++){const o=e[h];if(o.POSITION!==void 0&&(n=!0),o.NORMAL!==void 0&&(r=!0),o.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],l=[],u=[];for(let h=0,f=e.length;h<f;h++){const o=e[h];if(n){const c=o.POSITION!==void 0?t.getDependency("accessor",o.POSITION):i.attributes.position;a.push(c)}if(r){const c=o.NORMAL!==void 0?t.getDependency("accessor",o.NORMAL):i.attributes.normal;l.push(c)}if(s){const c=o.COLOR_0!==void 0?t.getDependency("accessor",o.COLOR_0):i.attributes.color;u.push(c)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],o=h[1],c=h[2];return n&&(i.morphAttributes.position=f),r&&(i.morphAttributes.normal=o),s&&(i.morphAttributes.color=c),i.morphTargetsRelative=!0,i})}function xS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vS(i){let e;const t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rl(t.attributes):e=i.indices+":"+Rl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Rl(i.targets[n]);return e}function Rl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Oc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const SS=new Ne;class TS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);r=n&&u?parseInt(u[1],10):-1,s=l.indexOf("Firefox")>-1,a=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Bf(this.options.manager):this.textureLoader=new jg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Of(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return ur(s,l,r),mi(l,r),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let l=0,u=a.length;l<u;l++)e[a[l]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,l)=>{const u=this.associations.get(a);u!=null&&this.associations.set(l,u);for(const[h,f]of a.children.entries())s(f,l.children[h])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(js.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Al[r.type],l=rs[r.componentType],u=r.normalized===!0,h=new l(r.count*a);return Promise.resolve(new Kt(h,a,u))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const l=a[0],u=Al[r.type],h=rs[r.componentType],f=h.BYTES_PER_ELEMENT,o=f*u,c=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(d&&d!==o){const p=Math.floor(c/d),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let b=t.cache.get(S);b||(_=new h(l,p*d,r.count*d/f),b=new _g(_,d/f),t.cache.add(S,b)),g=new hu(b,u,c%d/f,m)}else l===null?_=new h(r.count*u):_=new h(l,c,r.count*u),g=new Kt(_,u,m);if(r.sparse!==void 0){const p=Al.SCALAR,S=rs[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new S(a[1],b,r.sparse.count*p),A=new h(a[2],y,r.sparse.count*u);l!==null&&(g=new Kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,N=C.length;w<N;w++){const T=C[w];if(g.setX(T,A[w*u]),u>=2&&g.setY(T,A[w*u+1]),u>=3&&g.setZ(T,A[w*u+2]),u>=4&&g.setW(T,A[w*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let l=this.textureLoader;if(a.uri){const u=n.manager.getHandler(a.uri);u!==null&&(l=u)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],l=s.images[t],u=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||l.name||"",f.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(f.name=l.uri);const c=(s.samplers||{})[a.sampler]||{};return f.magFilter=sd[c.magFilter]||_n,f.minFilter=sd[c.minFilter]||xi,f.wrapS=ad[c.wrapS]||cs,f.wrapT=ad[c.wrapT]||cs,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Bt&&f.minFilter!==_n,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(o=>o.clone());const a=r.images[e],l=self.URL||self.webkitURL;let u=a.uri||"",h=!1;if(a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(o){h=!0;const c=new Blob([o],{type:a.mimeType});return u=l.createObjectURL(c),u});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(u).then(function(o){return new Promise(function(c,d){let m=c;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Lt(_);g.needsUpdate=!0,c(g)}),t.load(js.resolveURL(o,s.path),m,void 0,d)})}).then(function(o){return h===!0&&l.revokeObjectURL(u),mi(o,a),o.userData.mimeType=a.mimeType||yS(a.uri),o}).catch(function(o){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),o});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=s.associations.get(a);a=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),s.associations.set(a,u)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Pf,ei.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new If,ei.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(r||s||a){let l="ClonedMaterial:"+n.uuid+":";r&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),s&&(u.vertexColors=!0),a&&(u.flatShading=!0),r&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return aa}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const l={},u=s.extensions||{},h=[];if(u[Ve.KHR_MATERIALS_UNLIT]){const o=r[Ve.KHR_MATERIALS_UNLIT];a=o.getMaterialType(),h.push(o.extendParams(l,s,t))}else{const o=s.pbrMetallicRoughness||{};if(l.color=new Pe(1,1,1),l.opacity=1,Array.isArray(o.baseColorFactor)){const c=o.baseColorFactor;l.color.setRGB(c[0],c[1],c[2],Zt),l.opacity=c[3]}o.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",o.baseColorTexture,Ct)),l.metalness=o.metallicFactor!==void 0?o.metallicFactor:1,l.roughness=o.roughnessFactor!==void 0?o.roughnessFactor:1,o.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",o.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",o.metallicRoughnessTexture))),a=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Zn);const f=s.alphaMode||wl.OPAQUE;if(f===wl.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,f===wl.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==yr&&(h.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const o=s.normalTexture.scale;l.normalScale.set(o,o)}if(s.occlusionTexture!==void 0&&a!==yr&&(h.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==yr){const o=s.emissiveFactor;l.emissive=new Pe().setRGB(o[0],o[1],o[2],Zt)}return s.emissiveTexture!==void 0&&a!==yr&&h.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(h).then(function(){const o=new a(l);return s.name&&(o.name=s.name),mi(o,s),t.associations.set(o,{materials:e}),s.extensions&&ur(r,o,s),o})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(l){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return od(u,l,t)})}const a=[];for(let l=0,u=e.length;l<u;l++){const h=e[l],f=vS(h),o=r[f];if(o)a.push(o.promise);else{let c;h.extensions&&h.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?c=s(h):c=od(new qn,h,t),r[f]={primitive:h,promise:c},a.push(c)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,l=[];for(let u=0,h=a.length;u<h;u++){const f=a[u].material===void 0?gS(this.cache):this.getDependency("material",a[u].material);l.push(f)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(u){const h=u.slice(0,u.length-1),f=u[u.length-1],o=[];for(let d=0,m=f.length;d<m;d++){const _=f[d],g=a[d];let p;const S=h[d];if(g.mode===wn.TRIANGLES||g.mode===wn.TRIANGLE_STRIP||g.mode===wn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new vg(_,S):new an(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===wn.TRIANGLE_STRIP?p.geometry=id(p.geometry,gf):g.mode===wn.TRIANGLE_FAN&&(p.geometry=id(p.geometry,Cc));else if(g.mode===wn.LINES)p=new Mg(_,S);else if(g.mode===wn.LINE_STRIP)p=new pu(_,S);else if(g.mode===wn.LINE_LOOP)p=new Ag(_,S);else if(g.mode===wn.POINTS)p=new wg(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&xS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),mi(p,s),g.extensions&&ur(r,p,g),t.assignFinalMaterial(p),o.push(p)}for(let d=0,m=o.length;d<m;d++)t.associations.set(o[d],{meshes:e,primitives:d});if(o.length===1)return s.extensions&&ur(r,o[0],s),o[0];const c=new Sr;s.extensions&&ur(r,c,s),t.associations.set(c,{meshes:e});for(let d=0,m=o.length;d<m;d++)c.add(o[d]);return c})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(gi.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Fo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,l=[],u=[];for(let h=0,f=a.length;h<f;h++){const o=a[h];if(o){l.push(o);const c=new Ne;s!==null&&c.fromArray(s.array,h*16),u.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new du(l,u)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],l=[],u=[],h=[],f=[];for(let o=0,c=r.channels.length;o<c;o++){const d=r.channels[o],m=r.samplers[d.sampler],_=d.target,g=_.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,S=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",p)),u.push(this.getDependency("accessor",S)),h.push(m),f.push(_))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h),Promise.all(f)]).then(function(o){const c=o[0],d=o[1],m=o[2],_=o[3],g=o[4],p=[];for(let S=0,b=c.length;S<b;S++){const y=c[S],C=d[S],A=m[S],w=_[S],N=g[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=n._createAnimationTracks(y,C,A,w,N);if(T)for(let E=0;E<T.length;E++)p.push(T[E])}return new Og(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let u=0,h=r.weights.length;u<h;u++)l.morphTargetInfluences[u]=r.weights[u]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],l=r.children||[];for(let h=0,f=l.length;h<f;h++)a.push(n.getDependency("node",l[h]));const u=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),u]).then(function(h){const f=h[0],o=h[1],c=h[2];c!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(c,SS)});for(let d=0,m=o.length;d<m;d++)f.add(o[d]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",l=[],u=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&l.push(u),s.camera!==void 0&&l.push(r.getDependency("camera",s.camera).then(function(h){return r._getNodeRef(r.cameraCache,s.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let f;if(s.isBone===!0?f=new Rf:h.length>1?f=new Sr:h.length===1?f=h[0]:f=new gt,f!==h[0])for(let o=0,c=h.length;o<c;o++)f.add(h[o]);if(s.name&&(f.userData.name=s.name,f.name=a),mi(f,s),s.extensions&&ur(n,f,s),s.matrix!==void 0){const o=new Ne;o.fromArray(s.matrix),f.applyMatrix4(o)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Sr;n.name&&(s.name=r.createUniqueName(n.name)),mi(s,n),n.extensions&&ur(t,s,n);const a=n.nodes||[],l=[];for(let u=0,h=a.length;u<h;u++)l.push(r.getDependency("node",a[u]));return Promise.all(l).then(function(u){for(let f=0,o=u.length;f<o;f++)s.add(u[f]);const h=f=>{const o=new Map;for(const[c,d]of r.associations)(c instanceof ei||c instanceof Lt)&&o.set(c,d);return f.traverse(c=>{const d=r.associations.get(c);d!=null&&o.set(c,d)}),o};return r.associations=h(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],l=e.name?e.name:e.uuid,u=[];Ui[s.path]===Ui.weights?e.traverse(function(c){c.morphTargetInfluences&&u.push(c.name?c.name:c.uuid)}):u.push(l);let h;switch(Ui[s.path]){case Ui.weights:h=ps;break;case Ui.rotation:h=ms;break;case Ui.position:case Ui.scale:h=gs;break;default:switch(n.itemSize){case 1:h=ps;break;case 2:case 3:default:h=gs;break}break}const f=r.interpolation!==void 0?mS[r.interpolation]:ra,o=this._getArrayFromAccessor(n);for(let c=0,d=u.length;c<d;c++){const m=new h(u[c]+"."+Ui[s.path],t.array,o,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Oc(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ms?pS:qf;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ES(i,e,t){const n=e.attributes,r=new wi;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,h=l.max;if(u!==void 0&&h!==void 0){if(r.set(new P(u[0],u[1],u[2]),new P(h[0],h[1],h[2])),l.normalized){const f=Oc(rs[l.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new P,u=new P;for(let h=0,f=s.length;h<f;h++){const o=s[h];if(o.POSITION!==void 0){const c=t.json.accessors[o.POSITION],d=c.min,m=c.max;if(d!==void 0&&m!==void 0){if(u.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),u.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),u.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),c.normalized){const _=Oc(rs[c.componentType]);u.multiplyScalar(_)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}i.boundingBox=r;const a=new ri;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function od(i,e,t){const n=e.attributes,r=[];function s(a,l){return t.getDependency("accessor",a).then(function(u){i.setAttribute(l,u)})}for(const a in n){const l=Uc[a]||a.toLowerCase();l in i.attributes||r.push(s(n[a],l))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});r.push(a)}return qe.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),mi(i,e),ES(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?_S(i,e.targets,t):i})}const ld={type:"change"},yu={type:"start"},Yf={type:"end"},Wa=new vs,cd=new Fi,bS=Math.cos(70*gi.DEG2RAD),Rt=new P,tn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6;class MS extends a_{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new yn,this._lastTargetPosition=new P,this._quat=new yn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ph,this._sphericalDelta=new Ph,this._scale=1,this._panOffset=new P,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new P,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wS.bind(this),this._onPointerDown=AS.bind(this),this._onPointerUp=RS.bind(this),this._onContextMenu=US.bind(this),this._onMouseWheel=PS.bind(this),this._onKeyDown=DS.bind(this),this._onTouchStart=LS.bind(this),this._onTouchMove=NS.bind(this),this._onMouseDown=CS.bind(this),this._onMouseMove=IS.bind(this),this._interceptControlDown=OS.bind(this),this._interceptControlUp=FS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ld),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=Rt.length();a=this._clampDistance(l*this._scale);const u=l-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new P(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<bS?this.object.lookAt(this.target):(cd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(cd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,l=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function AS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function wS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function RS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yf),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function CS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(yu)}function IS(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function PS(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(yu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yf))}function DS(i){this.enabled!==!1&&this._handleKeyDown(i)}function LS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case Kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(yu)}function NS(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function US(i){this.enabled!==!1&&i.preventDefault()}function OS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ud=class{target;name;intersected;wasIntersected=!1;wasIntersectedOnMouseDown=!1;distance;constructor(i,e){this.target=i,this.name=e,this.intersected=!1,this.distance=0}},nn=class{type;cancelBubble;originalEvent;coords=new Ee(0,0);distance=0;intersected=!1;wasIntersected=!1;wasIntersectedOnMouseDown=!1;constructor(i,e=null){this.cancelBubble=!1,this.type=i,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},BS=class{renderer;camera;domElement;bindEventsOnBodyElement;autoAdd;scene;mouse;supportsPointerEvents;interactiveObjects;closestObject;raycaster;treatTouchEventsAsMouseEvents;constructor(i,e,t,n){this.renderer=i,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=n&&typeof n.bindEventsOnBodyElement<"u"?n.bindEventsOnBodyElement:!0,this.scene=n&&typeof n.scene<"u"?n.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(r=>{this.add(r),r.addEventListener("removed",s=>{this.remove(s.target)})}),this.update()}),this.autoAdd=n&&typeof n.autoAdd<"u"?n.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Ee(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new s_,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}dispose=()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)};add=(i,e=[])=>{if(i&&!this.interactiveObjects.find(t=>t.target===i))if(e.length>0)e.forEach(t=>{let n=i.getObjectByName(t);if(n){let r=new ud(n,t);this.interactiveObjects.push(r)}});else{let t=new ud(i,i.name);this.interactiveObjects.push(t)}};remove=(i,e=[])=>{!i||(e.length>0?e.forEach(t=>{let n=i.getObjectByName(t);n&&(this.interactiveObjects=this.interactiveObjects.filter(r=>r.target!==n))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==i))};update=()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(n=>{n.target&&this.checkIntersection(n)}),this.interactiveObjects.sort(function(n,r){return n.distance-r.distance});let i=this.interactiveObjects.find(n=>n.intersected)??null;if(i!=this.closestObject){if(this.closestObject){let n=new nn("mouseout");this.dispatch(this.closestObject,n)}if(i){let n=new nn("mouseover");this.dispatch(i,n)}this.closestObject=i}let e;this.interactiveObjects.forEach(n=>{!n.intersected&&n.wasIntersected&&(e||(e=new nn("mouseleave")),this.dispatch(n,e))});let t;this.interactiveObjects.forEach(n=>{n.intersected&&!n.wasIntersected&&(t||(t=new nn("mouseenter")),this.dispatch(n,t))})};checkIntersection=i=>{let e=this.raycaster.intersectObjects([i.target],!0);if(i.wasIntersected=i.intersected,e.length>0){let t=e[0].distance;e.forEach(n=>{n.distance<t&&(t=n.distance)}),i.intersected=!0,i.distance=t}else i.intersected=!1};onDocumentMouseMove=i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY);let e=new nn("mousemove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onDocumentPointerMove=i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY);let e=new nn("pointermove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchMove=i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY);let e=new nn(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onMouseClick=i=>{this.update();let e=new nn("click",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseDown=i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY),this.update();let e=new nn("mousedown",i);this.interactiveObjects.forEach(t=>{t.intersected?(t.wasIntersectedOnMouseDown=!0,this.dispatch(t,e)):t.wasIntersectedOnMouseDown=!1})};onPointerDown=i=>{this.mapPositionToPoint(this.mouse,i.clientX,i.clientY),this.update();let e=new nn("pointerdown",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onTouchStart=i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY),this.update();let e=new nn(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",i);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseUp=i=>{let e=new nn("mouseup",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onPointerUp=i=>{let e=new nn("pointerup",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchEnd=i=>{i.touches.length>0&&this.mapPositionToPoint(this.mouse,i.touches[0].clientX,i.touches[0].clientY),this.update();let e=new nn(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",i);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};dispatch=(i,e)=>{i.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=i.distance,e.intersected=i.intersected,e.wasIntersected=i.wasIntersected,e.wasIntersectedOnMouseDown=i.wasIntersectedOnMouseDown,i.target.dispatchEvent(e))};mapPositionToPoint=(i,e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();i.x=(e-n.left)/n.width*2-1,i.y=-((t-n.top)/n.height)*2+1}},Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Il={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var hd;function kS(){return hd||(hd=1,function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var o=this||t;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var c=this||t;if(o=parseFloat(o),c.ctx||f(),typeof o<"u"&&o>=0&&o<=1){if(c._volume=o,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var m=c._howls[d]._getSoundIds(),_=0;_<m.length;_++){var g=c._howls[d]._soundById(m[_]);g&&g._node&&(g._node.volume=g._volume*o)}return c}return c._volume},mute:function(o){var c=this||t;c.ctx||f(),c._muted=o,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var m=c._howls[d]._getSoundIds(),_=0;_<m.length;_++){var g=c._howls[d]._soundById(m[_]);g&&g._node&&(g._node.muted=o?!0:g._muted)}return c},stop:function(){for(var o=this||t,c=0;c<o._howls.length;c++)o._howls[c].stop();return o},unload:function(){for(var o=this||t,c=o._howls.length-1;c>=0;c--)o._howls[c].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,f()),o},codecs:function(o){return(this||t)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||t;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var c=new Audio;c.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return o}if(!c||typeof c.canPlayType!="function")return o;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),m=o._navigator?o._navigator.userAgent:"",_=m.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,S=m.match(/Version\/(.*?) /),b=p&&S&&parseInt(S[1],10)<15;return o._codecs={mp3:!!(!g&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!b&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!b&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||t;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var c=function(d){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,o._releaseHtml5Audio(m)}catch{o.noAudio=!0;break}for(var _=0;_<o._howls.length;_++)if(!o._howls[_]._webAudio)for(var g=o._howls[_]._getSoundIds(),p=0;p<g.length;p++){var S=o._howls[_]._soundById(g[p]);S&&S._node&&!S._node._unlocked&&(S._node._unlocked=!0,S._node.load())}o._autoResume();var b=o.ctx.createBufferSource();b.buffer=o._scratchBuffer,b.connect(o.ctx.destination),typeof b.start>"u"?b.noteOn(0):b.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),b.onended=function(){b.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var y=0;y<o._howls.length;y++)o._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),o}},_obtainHtml5Audio:function(){var o=this||t;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var c=this||t;return o._unlocked&&c._html5AudioPool.push(o),c},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<o._howls.length;c++)if(o._howls[c]._webAudio){for(var d=0;d<o._howls[c]._sounds.length;d++)if(!o._howls[c]._sounds[d]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var m=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(m,m)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!t.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var c=0;c<o._howls.length;c++)o._howls[c]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var t=new e,n=function(o){var c=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(o)};n.prototype={init:function(o){var c=this;return t.ctx||f(),c._autoplay=o.autoplay||!1,c._format=typeof o.format!="string"?o.format:[o.format],c._html5=o.html5||!1,c._muted=o.mute||!1,c._loop=o.loop||!1,c._pool=o.pool||5,c._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,c._rate=o.rate||1,c._sprite=o.sprite||{},c._src=typeof o.src!="string"?o.src:[o.src],c._volume=o.volume!==void 0?o.volume:1,c._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=o.onend?[{fn:o.onend}]:[],c._onfade=o.onfade?[{fn:o.onfade}]:[],c._onload=o.onload?[{fn:o.onload}]:[],c._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],c._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],c._onpause=o.onpause?[{fn:o.onpause}]:[],c._onplay=o.onplay?[{fn:o.onplay}]:[],c._onstop=o.onstop?[{fn:o.onstop}]:[],c._onmute=o.onmute?[{fn:o.onmute}]:[],c._onvolume=o.onvolume?[{fn:o.onvolume}]:[],c._onrate=o.onrate?[{fn:o.onrate}]:[],c._onseek=o.onseek?[{fn:o.onseek}]:[],c._onunlock=o.onunlock?[{fn:o.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var o=this,c=null;if(t.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var d=0;d<o._src.length;d++){var m,_;if(o._format&&o._format[d])m=o._format[d];else{if(_=o._src[d],typeof _!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(_),m||(m=/\.([^.]+)$/.exec(_.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){c=o._src[d];break}}if(!c){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=c,o._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new r(o),o._webAudio&&a(o),o},play:function(o,c){var d=this,m=null;if(typeof o=="number")m=o,o=null;else{if(typeof o=="string"&&d._state==="loaded"&&!d._sprite[o])return null;if(typeof o>"u"&&(o="__default",!d._playLock)){for(var _=0,g=0;g<d._sounds.length;g++)d._sounds[g]._paused&&!d._sounds[g]._ended&&(_++,m=d._sounds[g]._id);_===1?o=null:m=null}}var p=m?d._soundById(m):d._inactiveSound();if(!p)return null;if(m&&!o&&(o=p._sprite||"__default"),d._state!=="loaded"){p._sprite=o,p._ended=!1;var S=p._id;return d._queue.push({event:"play",action:function(){d.play(S)}}),S}if(m&&!p._paused)return c||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var b=Math.max(0,p._seek>0?p._seek:d._sprite[o][0]/1e3),y=Math.max(0,(d._sprite[o][0]+d._sprite[o][1])/1e3-b),C=y*1e3/Math.abs(p._rate),A=d._sprite[o][0]/1e3,w=(d._sprite[o][0]+d._sprite[o][1])/1e3;p._sprite=o,p._ended=!1;var N=function(){p._paused=!1,p._seek=b,p._start=A,p._stop=w,p._loop=!!(p._loop||d._sprite[o][2])};if(b>=w){d._ended(p);return}var T=p._node;if(d._webAudio){var E=function(){d._playLock=!1,N(),d._refreshBuffer(p);var H=p._muted||d._muted?0:p._volume;T.gain.setValueAtTime(H,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof T.bufferSource.start>"u"?p._loop?T.bufferSource.noteGrainOn(0,b,86400):T.bufferSource.noteGrainOn(0,b,y):p._loop?T.bufferSource.start(0,b,86400):T.bufferSource.start(0,b,y),C!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),C)),c||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?E():(d._playLock=!0,d.once("resume",E),d._clearTimer(p._id))}else{var I=function(){T.currentTime=b,T.muted=p._muted||d._muted||t._muted||T.muted,T.volume=p._volume*t.volume(),T.playbackRate=p._rate;try{var H=T.play();if(H&&typeof Promise<"u"&&(H instanceof Promise||typeof H.then=="function")?(d._playLock=!0,N(),H.then(function(){d._playLock=!1,T._unlocked=!0,c?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):c||(d._playLock=!1,N(),d._emit("play",p._id)),T.playbackRate=p._rate,T.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),C):(d._endTimers[p._id]=function(){d._ended(p),T.removeEventListener("ended",d._endTimers[p._id],!1)},T.addEventListener("ended",d._endTimers[p._id],!1))}catch(K){d._emit("playerror",p._id,K)}};T.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(T.src=d._src,T.load());var W=window&&window.ejecta||!T.readyState&&t._navigator.isCocoonJS;if(T.readyState>=3||W)I();else{d._playLock=!0,d._state="loading";var B=function(){d._state="loaded",I(),T.removeEventListener(t._canPlayEvent,B,!1)};T.addEventListener(t._canPlayEvent,B,!1),d._clearTimer(p._id)}}return p._id},pause:function(o){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(o)}}),c;for(var d=c._getSoundIds(o),m=0;m<d.length;m++){c._clearTimer(d[m]);var _=c._soundById(d[m]);if(_&&!_._paused&&(_._seek=c.seek(d[m]),_._rateSeek=0,_._paused=!0,c._stopFade(d[m]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(o,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(o)}}),d;for(var m=d._getSoundIds(o),_=0;_<m.length;_++){d._clearTimer(m[_]);var g=d._soundById(m[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,d._stopFade(m[_]),g._node&&(d._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),d._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&d._clearSound(g._node))),c||d._emit("stop",g._id))}return d},mute:function(o,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(o,c)}}),d;if(typeof c>"u")if(typeof o=="boolean")d._muted=o;else return d._muted;for(var m=d._getSoundIds(c),_=0;_<m.length;_++){var g=d._soundById(m[_]);g&&(g._muted=o,g._interval&&d._stopFade(g._id),d._webAudio&&g._node?g._node.gain.setValueAtTime(o?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:o),d._emit("mute",g._id))}return d},volume:function(){var o=this,c=arguments,d,m;if(c.length===0)return o._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=o._getSoundIds(),g=_.indexOf(c[0]);g>=0?m=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),m=parseInt(c[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,c)}}),o;typeof m>"u"&&(o._volume=d),m=o._getSoundIds(m);for(var S=0;S<m.length;S++)p=o._soundById(m[S]),p&&(p._volume=d,c[2]||o._stopFade(m[S]),o._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),o._emit("volume",p._id))}else return p=m?o._soundById(m):o._sounds[0],p?p._volume:0;return o},fade:function(o,c,d,m){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(o,c,d,m)}}),_;o=Math.min(Math.max(0,parseFloat(o)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),_.volume(o,m);for(var g=_._getSoundIds(m),p=0;p<g.length;p++){var S=_._soundById(g[p]);if(S){if(m||_._stopFade(g[p]),_._webAudio&&!S._muted){var b=t.ctx.currentTime,y=b+d/1e3;S._volume=o,S._node.gain.setValueAtTime(o,b),S._node.gain.linearRampToValueAtTime(c,y)}_._startFadeInterval(S,o,c,d,g[p],typeof m>"u")}}return _},_startFadeInterval:function(o,c,d,m,_,g){var p=this,S=c,b=d-c,y=Math.abs(b/.01),C=Math.max(4,y>0?m/y:m),A=Date.now();o._fadeTo=d,o._interval=setInterval(function(){var w=(Date.now()-A)/m;A=Date.now(),S+=b*w,S=Math.round(S*100)/100,b<0?S=Math.max(d,S):S=Math.min(d,S),p._webAudio?o._volume=S:p.volume(S,o._id,!0),g&&(p._volume=S),(d<c&&S<=d||d>c&&S>=d)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,p.volume(d,o._id),p._emit("fade",o._id))},C)},_stopFade:function(o){var c=this,d=c._soundById(o);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,o),d._fadeTo=null,c._emit("fade",o)),c},loop:function(){var o=this,c=arguments,d,m,_;if(c.length===0)return o._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],o._loop=d;else return _=o._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(d=c[0],m=parseInt(c[1],10));for(var g=o._getSoundIds(m),p=0;p<g.length;p++)_=o._soundById(g[p]),_&&(_._loop=d,o._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,o.playing(g[p])&&(o.pause(g[p],!0),o.play(g[p],!0)))));return o},rate:function(){var o=this,c=arguments,d,m;if(c.length===0)m=o._sounds[0]._id;else if(c.length===1){var _=o._getSoundIds(),g=_.indexOf(c[0]);g>=0?m=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),m=parseInt(c[1],10));var p;if(typeof d=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,c)}}),o;typeof m>"u"&&(o._rate=d),m=o._getSoundIds(m);for(var S=0;S<m.length;S++)if(p=o._soundById(m[S]),p){o.playing(m[S])&&(p._rateSeek=o.seek(m[S]),p._playStart=o._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,o._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var b=o.seek(m[S]),y=(o._sprite[p._sprite][0]+o._sprite[p._sprite][1])/1e3-b,C=y*1e3/Math.abs(p._rate);(o._endTimers[m[S]]||!p._paused)&&(o._clearTimer(m[S]),o._endTimers[m[S]]=setTimeout(o._ended.bind(o,p),C)),o._emit("rate",p._id)}}else return p=o._soundById(m),p?p._rate:o._rate;return o},seek:function(){var o=this,c=arguments,d,m;if(c.length===0)o._sounds.length&&(m=o._sounds[0]._id);else if(c.length===1){var _=o._getSoundIds(),g=_.indexOf(c[0]);g>=0?m=parseInt(c[0],10):o._sounds.length&&(m=o._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),m=parseInt(c[1],10));if(typeof m>"u")return 0;if(typeof d=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,c)}}),o;var p=o._soundById(m);if(p)if(typeof d=="number"&&d>=0){var S=o.playing(m);S&&o.pause(m,!0),p._seek=d,p._ended=!1,o._clearTimer(m),!o._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var b=function(){S&&o.play(m,!0),o._emit("seek",m)};if(S&&!o._webAudio){var y=function(){o._playLock?setTimeout(y,0):b()};setTimeout(y,0)}else b()}else if(o._webAudio){var C=o.playing(m)?t.ctx.currentTime-p._playStart:0,A=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(A+C*Math.abs(p._rate))}else return p._node.currentTime;return o},playing:function(o){var c=this;if(typeof o=="number"){var d=c._soundById(o);return d?!d._paused:!1}for(var m=0;m<c._sounds.length;m++)if(!c._sounds[m]._paused)return!0;return!1},duration:function(o){var c=this,d=c._duration,m=c._soundById(o);return m&&(d=c._sprite[m._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var o=this,c=o._sounds,d=0;d<c.length;d++)c[d]._paused||o.stop(c[d]._id),o._webAudio||(o._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,o._clearTimer(c[d]._id);var m=t._howls.indexOf(o);m>=0&&t._howls.splice(m,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===o._src||o._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return s&&_&&delete s[o._src],t.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,c,d,m){var _=this,g=_["_on"+o];return typeof c=="function"&&g.push(m?{id:d,fn:c,once:m}:{id:d,fn:c}),_},off:function(o,c,d){var m=this,_=m["_on"+o],g=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(g=0;g<_.length;g++){var p=d===_[g].id;if(c===_[g].fn&&p||!c&&p){_.splice(g,1);break}}else if(o)m["_on"+o]=[];else{var S=Object.keys(m);for(g=0;g<S.length;g++)S[g].indexOf("_on")===0&&Array.isArray(m[S[g]])&&(m[S[g]]=[])}return m},once:function(o,c,d){var m=this;return m.on(o,c,d,1),m},_emit:function(o,c,d){for(var m=this,_=m["_on"+o],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===c||o==="load")&&(setTimeout(function(p){p.call(this,c,d)}.bind(m,_[g].fn),0),_[g].once&&m.off(o,_[g].fn,_[g].id));return m._loadQueue(o),m},_loadQueue:function(o){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===o&&(c._queue.shift(),c._loadQueue()),o||d.action()}return c},_ended:function(o){var c=this,d=o._sprite;if(!c._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(c._ended.bind(c,o),100),c;var m=!!(o._loop||c._sprite[d][2]);if(c._emit("end",o._id),!c._webAudio&&m&&c.stop(o._id,!0).play(o._id),c._webAudio&&m){c._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=t.ctx.currentTime;var _=(o._stop-o._start)*1e3/Math.abs(o._rate);c._endTimers[o._id]=setTimeout(c._ended.bind(c,o),_)}return c._webAudio&&!m&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,c._clearTimer(o._id),c._cleanBuffer(o._node),t._autoSuspend()),!c._webAudio&&!m&&c.stop(o._id,!0),c},_clearTimer:function(o){var c=this;if(c._endTimers[o]){if(typeof c._endTimers[o]!="function")clearTimeout(c._endTimers[o]);else{var d=c._soundById(o);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[o],!1)}delete c._endTimers[o]}return c},_soundById:function(o){for(var c=this,d=0;d<c._sounds.length;d++)if(o===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var o=this;o._drain();for(var c=0;c<o._sounds.length;c++)if(o._sounds[c]._ended)return o._sounds[c].reset();return new r(o)},_drain:function(){var o=this,c=o._pool,d=0,m=0;if(!(o._sounds.length<c)){for(m=0;m<o._sounds.length;m++)o._sounds[m]._ended&&d++;for(m=o._sounds.length-1;m>=0;m--){if(d<=c)return;o._sounds[m]._ended&&(o._webAudio&&o._sounds[m]._node&&o._sounds[m]._node.disconnect(0),o._sounds.splice(m,1),d--)}}},_getSoundIds:function(o){var c=this;if(typeof o>"u"){for(var d=[],m=0;m<c._sounds.length;m++)d.push(c._sounds[m]._id);return d}else return[o]},_refreshBuffer:function(o){var c=this;return o._node.bufferSource=t.ctx.createBufferSource(),o._node.bufferSource.buffer=s[c._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,t.ctx.currentTime),c},_cleanBuffer:function(o){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return c;if(t._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),d))try{o.bufferSource.buffer=t._scratchBuffer}catch{}return o.bufferSource=null,c},_clearSound:function(o){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(o){this._parent=o,this.init()};r.prototype={init:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,c._sounds.push(o),o.create(),o},create:function(){var o=this,c=o._parent,d=t._muted||o._muted||o._parent._muted?0:o._volume;return c._webAudio?(o._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),o._node.gain.setValueAtTime(d,t.ctx.currentTime),o._node.paused=!0,o._node.connect(t.masterGain)):t.noAudio||(o._node=t._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(t._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=c._src,o._node.preload=c._preload===!0?"auto":c._preload,o._node.volume=d*t.volume(),o._node.load()),o},reset:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,c=o._parent;c._duration=Math.ceil(o._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),o._node.removeEventListener(t._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,c=o._parent;c._duration===1/0&&(c._duration=Math.ceil(o._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var s={},a=function(o){var c=o._src;if(s[c]){o._duration=s[c].duration,h(o);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),m=new Uint8Array(d.length),_=0;_<d.length;++_)m[_]=d.charCodeAt(_);u(m.buffer,o)}else{var g=new XMLHttpRequest;g.open(o._xhr.method,c,!0),g.withCredentials=o._xhr.withCredentials,g.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(p){g.setRequestHeader(p,o._xhr.headers[p])}),g.onload=function(){var p=(g.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}u(g.response,o)},g.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete s[c],o.load())},l(g)}},l=function(o){try{o.send()}catch{o.onerror()}},u=function(o,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},m=function(_){_&&c._sounds.length>0?(s[c._src]=_,h(c,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(o).then(m).catch(d):t.ctx.decodeAudioData(o,m,d)},h=function(o,c){c&&!o._duration&&(o._duration=c.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(o&&d&&d<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof Us<"u"?(Us.HowlerGlobal=e,Us.Howler=t,Us.Howl=n,Us.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,a,l){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,r=typeof r!="number"?h[2]:r,s=typeof s!="number"?h[3]:s,a=typeof a!="number"?h[4]:a,l=typeof l!="number"?h[5]:l,typeof t=="number")u._orientation=[t,n,r,s,a,l],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,r,s,a,l);else return h;return u},Howl.prototype.init=function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var a=r._getSoundIds(n),l=0;l<a.length;l++){var u=r._soundById(a[l]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,s),s==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",u._id);else return u._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,r,s)}}),a;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")a._pos=[t,n,r];else return a._pos;for(var l=a._getSoundIds(s),u=0;u<l.length;u++){var h=a._soundById(l[u]);if(h)if(typeof t=="number")h._pos=[t,n,r],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):h._panner.setPosition(t,n,r)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,n,r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,r,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,r=typeof r!="number"?a._orientation[2]:r,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,r];else return a._orientation;for(var l=a._getSoundIds(s),u=0;u<l.length;u++){var h=a._soundById(l[u]);if(h)if(typeof t=="number")h._orientation=[t,n,r],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,r)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),u=0;u<l.length;u++)if(a=t._soundById(l[u]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:h.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:h.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:h.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:h.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:h.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:h.panningModel};var f=a._panner;f||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),f=a._panner),f.coneInnerAngle=h.coneInnerAngle,f.coneOuterAngle=h.coneOuterAngle,f.coneOuterGain=h.coneOuterGain,f.distanceModel=h.distanceModel,f.maxDistance=h.maxDistance,f.refDistance=h.refDistance,f.rolloffFactor=h.rolloffFactor,f.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(Il)),Il}var ua=kS();const zS="End-Of-Stream";let Vn=class extends Error{constructor(){super(zS),this.name="EndOfStreamError"}};class HS extends Error{constructor(e="The operation was aborted"){super(e),this.name="AbortError"}}let Kf=class{constructor(){this.endOfStream=!1,this.interrupted=!1,this.peekQueue=[]}async peek(e,t=!1){const n=await this.read(e,t);return this.peekQueue.push(e.subarray(0,n)),n}async read(e,t=!1){if(e.length===0)return 0;let n=this.readFromPeekBuffer(e);if(this.endOfStream||(n+=await this.readRemainderFromStream(e.subarray(n),t)),n===0)throw new Vn;return n}readFromPeekBuffer(e){let t=e.length,n=0;for(;this.peekQueue.length>0&&t>0;){const r=this.peekQueue.pop();if(!r)throw new Error("peekData should be defined");const s=Math.min(r.length,t);e.set(r.subarray(0,s),n),n+=s,t-=s,s<r.length&&this.peekQueue.push(r.subarray(s))}return n}async readRemainderFromStream(e,t){let n=0;for(;n<e.length&&!this.endOfStream;){if(this.interrupted)throw new HS;const r=await this.readFromStream(e.subarray(n),t);if(r===0)break;n+=r}if(!t&&n<e.length)throw new Vn;return n}},GS=class extends Kf{constructor(e){super(),this.reader=e}async abort(){return this.close()}async close(){this.reader.releaseLock()}};class VS extends GS{async readFromStream(e,t){if(e.length===0)return 0;const n=await this.reader.read(new Uint8Array(e.length),{min:t?void 0:e.length});return n.done&&(this.endOfStream=n.done),n.value?(e.set(n.value),n.value.length):0}}class dd extends Kf{constructor(e){super(),this.reader=e,this.buffer=null}writeChunk(e,t){const n=Math.min(t.length,e.length);return e.set(t.subarray(0,n)),n<t.length?this.buffer=t.subarray(n):this.buffer=null,n}async readFromStream(e,t){if(e.length===0)return 0;let n=0;for(this.buffer&&(n+=this.writeChunk(e,this.buffer));n<e.length&&!this.endOfStream;){const r=await this.reader.read();if(r.done){this.endOfStream=!0;break}r.value&&(n+=this.writeChunk(e.subarray(n),r.value))}if(n===0&&this.endOfStream)throw new Vn;return n}abort(){return this.interrupted=!0,this.reader.cancel()}async close(){await this.abort(),this.reader.releaseLock()}}function WS(i){try{const e=i.getReader({mode:"byob"});return e instanceof ReadableStreamDefaultReader?new dd(e):new VS(e)}catch(e){if(e instanceof TypeError)return new dd(i.getReader());throw e}}let $f=class{constructor(e){this.numBuffer=new Uint8Array(8),this.position=0,this.onClose=e?.onClose,e?.abortSignal&&e.abortSignal.addEventListener("abort",()=>{this.abort()})}async readToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.readBuffer(n,{position:t})<e.len)throw new Vn;return e.get(n,0)}async peekToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.peekBuffer(n,{position:t})<e.len)throw new Vn;return e.get(n,0)}async readNumber(e){if(await this.readBuffer(this.numBuffer,{length:e.len})<e.len)throw new Vn;return e.get(this.numBuffer,0)}async peekNumber(e){if(await this.peekBuffer(this.numBuffer,{length:e.len})<e.len)throw new Vn;return e.get(this.numBuffer,0)}async ignore(e){if(this.fileInfo.size!==void 0){const t=this.fileInfo.size-this.position;if(e>t)return this.position+=t,t}return this.position+=e,e}async close(){await this.abort(),await this.onClose?.()}normalizeOptions(e,t){if(!this.supportsRandomAccess()&&t&&t.position!==void 0&&t.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");return{mayBeLess:!1,offset:0,length:e.length,position:this.position,...t}}abort(){return Promise.resolve()}};const XS=256e3;let qS=class extends $f{constructor(e,t){super(t),this.streamReader=e,this.fileInfo=t?.fileInfo??{}}async readBuffer(e,t){const n=this.normalizeOptions(e,t),r=n.position-this.position;if(r>0)return await this.ignore(r),this.readBuffer(e,t);if(r<0)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");if(n.length===0)return 0;const s=await this.streamReader.read(e.subarray(0,n.length),n.mayBeLess);if(this.position+=s,(!t||!t.mayBeLess)&&s<n.length)throw new Vn;return s}async peekBuffer(e,t){const n=this.normalizeOptions(e,t);let r=0;if(n.position){const s=n.position-this.position;if(s>0){const a=new Uint8Array(n.length+s);return r=await this.peekBuffer(a,{mayBeLess:n.mayBeLess}),e.set(a.subarray(s)),r-s}if(s<0)throw new Error("Cannot peek from a negative offset in a stream")}if(n.length>0){try{r=await this.streamReader.peek(e.subarray(0,n.length),n.mayBeLess)}catch(s){if(t?.mayBeLess&&s instanceof Vn)return 0;throw s}if(!n.mayBeLess&&r<n.length)throw new Vn}return r}async ignore(e){const t=Math.min(XS,e),n=new Uint8Array(t);let r=0;for(;r<e;){const s=e-r,a=await this.readBuffer(n,{length:Math.min(t,s)});if(a<0)return a;r+=a}return r}abort(){return this.streamReader.abort()}async close(){return this.streamReader.close()}supportsRandomAccess(){return!1}},YS=class extends $f{constructor(e,t){super(t),this.uint8Array=e,this.fileInfo={...t?.fileInfo??{},size:e.length}}async readBuffer(e,t){t?.position&&(this.position=t.position);const n=await this.peekBuffer(e,t);return this.position+=n,n}async peekBuffer(e,t){const n=this.normalizeOptions(e,t),r=Math.min(this.uint8Array.length-n.position,n.length);if(!n.mayBeLess&&r<n.length)throw new Vn;return e.set(this.uint8Array.subarray(n.position,n.position+r)),r}close(){return super.close()}supportsRandomAccess(){return!0}setPosition(e){this.position=e}};function jS(i,e){const t=WS(i),n=e??{},r=n.onClose;return n.onClose=async()=>{if(await t.close(),r)return r()},new qS(t,n)}function fd(i,e){return new YS(i,e)}var Xa={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var pd;function KS(){return pd||(pd=1,Xa.read=function(i,e,t,n,r){var s,a,l=r*8-n-1,u=(1<<l)-1,h=u>>1,f=-7,o=t?r-1:0,c=t?-1:1,d=i[e+o];for(o+=c,s=d&(1<<-f)-1,d>>=-f,f+=l;f>0;s=s*256+i[e+o],o+=c,f-=8);for(a=s&(1<<-f)-1,s>>=-f,f+=n;f>0;a=a*256+i[e+o],o+=c,f-=8);if(s===0)s=1-h;else{if(s===u)return a?NaN:(d?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-h}return(d?-1:1)*a*Math.pow(2,s-n)},Xa.write=function(i,e,t,n,r,s){var a,l,u,h=s*8-r-1,f=(1<<h)-1,o=f>>1,c=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,m=n?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+o>=1?e+=c/u:e+=c*Math.pow(2,1-o),e*u>=2&&(a++,u/=2),a+o>=f?(l=0,a=f):a+o>=1?(l=(e*u-1)*Math.pow(2,r),a=a+o):(l=e*Math.pow(2,o-1)*Math.pow(2,r),a=0));r>=8;i[t+d]=l&255,d+=m,l/=256,r-=8);for(a=a<<r|l,h+=r;h>0;i[t+d]=a&255,d+=m,a/=256,h-=8);i[t+d-m]|=_*128}),Xa}var tr=KS();function Ue(i){return new DataView(i.buffer,i.byteOffset)}const Er={len:1,get(i,e){return Ue(i).getUint8(e)},put(i,e,t){return Ue(i).setUint8(e,t),e+1}},Xi={len:2,get(i,e){return Ue(i).getUint16(e,!0)},put(i,e,t){return Ue(i).setUint16(e,t,!0),e+2}},Ks={len:2,get(i,e){return Ue(i).getUint16(e)},put(i,e,t){return Ue(i).setUint16(e,t),e+2}},Zf={len:3,get(i,e){const t=Ue(i);return t.getUint8(e)+(t.getUint16(e+1,!0)<<8)},put(i,e,t){const n=Ue(i);return n.setUint8(e,t&255),n.setUint16(e+1,t>>8,!0),e+3}},Jf={len:3,get(i,e){const t=Ue(i);return(t.getUint16(e)<<8)+t.getUint8(e+2)},put(i,e,t){const n=Ue(i);return n.setUint16(e,t>>8),n.setUint8(e+2,t&255),e+3}},Tt={len:4,get(i,e){return Ue(i).getUint32(e,!0)},put(i,e,t){return Ue(i).setUint32(e,t,!0),e+4}},To={len:4,get(i,e){return Ue(i).getUint32(e)},put(i,e,t){return Ue(i).setUint32(e,t),e+4}},Fc={len:1,get(i,e){return Ue(i).getInt8(e)},put(i,e,t){return Ue(i).setInt8(e,t),e+1}},$S={len:2,get(i,e){return Ue(i).getInt16(e)},put(i,e,t){return Ue(i).setInt16(e,t),e+2}},ZS={len:2,get(i,e){return Ue(i).getInt16(e,!0)},put(i,e,t){return Ue(i).setInt16(e,t,!0),e+2}},JS={len:3,get(i,e){const t=Zf.get(i,e);return t>8388607?t-16777216:t},put(i,e,t){const n=Ue(i);return n.setUint8(e,t&255),n.setUint16(e+1,t>>8,!0),e+3}},QS={len:3,get(i,e){const t=Jf.get(i,e);return t>8388607?t-16777216:t},put(i,e,t){const n=Ue(i);return n.setUint16(e,t>>8),n.setUint8(e+2,t&255),e+3}},Qf={len:4,get(i,e){return Ue(i).getInt32(e)},put(i,e,t){return Ue(i).setInt32(e,t),e+4}},eT={len:4,get(i,e){return Ue(i).getInt32(e,!0)},put(i,e,t){return Ue(i).setInt32(e,t,!0),e+4}},ep={len:8,get(i,e){return Ue(i).getBigUint64(e,!0)},put(i,e,t){return Ue(i).setBigUint64(e,t,!0),e+8}},tT={len:8,get(i,e){return Ue(i).getBigInt64(e,!0)},put(i,e,t){return Ue(i).setBigInt64(e,t,!0),e+8}},nT={len:8,get(i,e){return Ue(i).getBigUint64(e)},put(i,e,t){return Ue(i).setBigUint64(e,t),e+8}},iT={len:8,get(i,e){return Ue(i).getBigInt64(e)},put(i,e,t){return Ue(i).setBigInt64(e,t),e+8}},rT={len:2,get(i,e){return tr.read(i,e,!1,10,this.len)},put(i,e,t){return tr.write(i,t,e,!1,10,this.len),e+this.len}},sT={len:2,get(i,e){return tr.read(i,e,!0,10,this.len)},put(i,e,t){return tr.write(i,t,e,!0,10,this.len),e+this.len}},aT={len:4,get(i,e){return Ue(i).getFloat32(e)},put(i,e,t){return Ue(i).setFloat32(e,t),e+4}},oT={len:4,get(i,e){return Ue(i).getFloat32(e,!0)},put(i,e,t){return Ue(i).setFloat32(e,t,!0),e+4}},lT={len:8,get(i,e){return Ue(i).getFloat64(e)},put(i,e,t){return Ue(i).setFloat64(e,t),e+8}},cT={len:8,get(i,e){return Ue(i).getFloat64(e,!0)},put(i,e,t){return Ue(i).setFloat64(e,t,!0),e+8}},uT={len:10,get(i,e){return tr.read(i,e,!1,63,this.len)},put(i,e,t){return tr.write(i,t,e,!1,63,this.len),e+this.len}},hT={len:10,get(i,e){return tr.read(i,e,!0,63,this.len)},put(i,e,t){return tr.write(i,t,e,!0,63,this.len),e+this.len}};class dT{constructor(e){this.len=e}get(e,t){}}class tp{constructor(e){this.len=e}get(e,t){return e.subarray(t,t+this.len)}}class Ot{constructor(e,t){this.len=e,this.encoding=t,this.textDecoder=new TextDecoder(t)}get(e,t){return this.textDecoder.decode(e.subarray(t,t+this.len))}}class fT{constructor(e){this.len=e,this.textDecoder=new TextDecoder("windows-1252")}get(e,t=0){return this.textDecoder.decode(e.subarray(t,t+this.len))}}const yM=Object.freeze(Object.defineProperty({__proto__:null,AnsiStringType:fT,Float16_BE:rT,Float16_LE:sT,Float32_BE:aT,Float32_LE:oT,Float64_BE:lT,Float64_LE:cT,Float80_BE:uT,Float80_LE:hT,INT16_BE:$S,INT16_LE:ZS,INT24_BE:QS,INT24_LE:JS,INT32_BE:Qf,INT32_LE:eT,INT64_BE:iT,INT64_LE:tT,INT8:Fc,IgnoreType:dT,StringType:Ot,UINT16_BE:Ks,UINT16_LE:Xi,UINT24_BE:Jf,UINT24_LE:Zf,UINT32_BE:To,UINT32_LE:Tt,UINT64_BE:nT,UINT64_LE:ep,UINT8:Er,Uint8ArrayType:tp},Symbol.toStringTag,{value:"Module"})),pT="End-Of-Stream";class xn extends Error{constructor(){super(pT)}}class mT{constructor(){this.maxStreamReadSize=1*1024*1024,this.endOfStream=!1,this.peekQueue=[]}async peek(e,t,n){const r=await this.read(e,t,n);return this.peekQueue.push(e.subarray(t,t+r)),r}async read(e,t,n){if(n===0)return 0;let r=this.readFromPeekBuffer(e,t,n);if(r+=await this.readRemainderFromStream(e,t+r,n-r),r===0)throw new xn;return r}readFromPeekBuffer(e,t,n){let r=n,s=0;for(;this.peekQueue.length>0&&r>0;){const a=this.peekQueue.pop();if(!a)throw new Error("peekData should be defined");const l=Math.min(a.length,r);e.set(a.subarray(0,l),t+s),s+=l,r-=l,l<a.length&&this.peekQueue.push(a.subarray(l))}return s}async readRemainderFromStream(e,t,n){let r=n,s=0;for(;r>0&&!this.endOfStream;){const a=Math.min(r,this.maxStreamReadSize),l=await this.readFromStream(e,t+s,a);if(l===0)break;s+=l,r-=l}return s}}class gT extends mT{constructor(e){super(),this.reader=e.getReader({mode:"byob"})}async readFromStream(e,t,n){if(this.endOfStream)throw new xn;const r=await this.reader.read(new Uint8Array(n));return r.done&&(this.endOfStream=r.done),r.value?(e.set(r.value,t),r.value.byteLength):0}abort(){return this.reader.cancel()}async close(){await this.abort(),this.reader.releaseLock()}}class np{constructor(e){this.numBuffer=new Uint8Array(8),this.position=0,this.onClose=e?.onClose,e?.abortSignal&&e.abortSignal.addEventListener("abort",()=>{this.abort()})}async readToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.readBuffer(n,{position:t})<e.len)throw new xn;return e.get(n,0)}async peekToken(e,t=this.position){const n=new Uint8Array(e.len);if(await this.peekBuffer(n,{position:t})<e.len)throw new xn;return e.get(n,0)}async readNumber(e){if(await this.readBuffer(this.numBuffer,{length:e.len})<e.len)throw new xn;return e.get(this.numBuffer,0)}async peekNumber(e){if(await this.peekBuffer(this.numBuffer,{length:e.len})<e.len)throw new xn;return e.get(this.numBuffer,0)}async ignore(e){if(this.fileInfo.size!==void 0){const t=this.fileInfo.size-this.position;if(e>t)return this.position+=t,t}return this.position+=e,e}async close(){await this.abort(),await this.onClose?.()}normalizeOptions(e,t){if(t&&t.position!==void 0&&t.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");return t?{mayBeLess:t.mayBeLess===!0,offset:t.offset?t.offset:0,length:t.length?t.length:e.length-(t.offset?t.offset:0),position:t.position?t.position:this.position}:{mayBeLess:!1,offset:0,length:e.length,position:this.position}}abort(){return Promise.resolve()}}const _T=256e3;class xT extends np{constructor(e,t){super(t),this.streamReader=e,this.fileInfo=t?.fileInfo??{}}async readBuffer(e,t){const n=this.normalizeOptions(e,t),r=n.position-this.position;if(r>0)return await this.ignore(r),this.readBuffer(e,t);if(r<0)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");if(n.length===0)return 0;const s=await this.streamReader.read(e,n.offset,n.length);if(this.position+=s,(!t||!t.mayBeLess)&&s<n.length)throw new xn;return s}async peekBuffer(e,t){const n=this.normalizeOptions(e,t);let r=0;if(n.position){const s=n.position-this.position;if(s>0){const a=new Uint8Array(n.length+s);return r=await this.peekBuffer(a,{mayBeLess:n.mayBeLess}),e.set(a.subarray(s),n.offset),r-s}if(s<0)throw new Error("Cannot peek from a negative offset in a stream")}if(n.length>0){try{r=await this.streamReader.peek(e,n.offset,n.length)}catch(s){if(t?.mayBeLess&&s instanceof xn)return 0;throw s}if(!n.mayBeLess&&r<n.length)throw new xn}return r}async ignore(e){const t=Math.min(_T,e),n=new Uint8Array(t);let r=0;for(;r<e;){const s=e-r,a=await this.readBuffer(n,{length:Math.min(t,s)});if(a<0)return a;r+=a}return r}abort(){return this.streamReader.abort()}supportsRandomAccess(){return!1}}class vT extends np{constructor(e,t){super(t),this.uint8Array=e,this.fileInfo={...t?.fileInfo??{},size:e.length}}async readBuffer(e,t){if(t?.position){if(t.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");this.position=t.position}const n=await this.peekBuffer(e,t);return this.position+=n,n}async peekBuffer(e,t){const n=this.normalizeOptions(e,t),r=Math.min(this.uint8Array.length-n.position,n.length);if(!n.mayBeLess&&r<n.length)throw new xn;return e.set(this.uint8Array.subarray(n.position,n.position+r),n.offset),r}close(){return super.close()}supportsRandomAccess(){return!0}setPosition(e){this.position=e}}function yT(i,e){return new xT(new gT(i),e)}function ST(i,e){return new vT(i,e)}const TT=Object.prototype.toString,ET="[object Uint8Array]",bT="[object ArrayBuffer]";function ip(i,e,t){return i?i.constructor===e?!0:TT.call(i)===t:!1}function rp(i){return ip(i,Uint8Array,ET)}function MT(i){return ip(i,ArrayBuffer,bT)}function AT(i){return rp(i)||MT(i)}function wT(i){if(!rp(i))throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof i}\``)}function RT(i){if(!AT(i))throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof i}\``)}const md={utf8:new globalThis.TextDecoder("utf8")};function sp(i,e="utf8"){return RT(i),md[e]??=new globalThis.TextDecoder(e),md[e].decode(i)}function ap(i){if(typeof i!="string")throw new TypeError(`Expected \`string\`, got \`${typeof i}\``)}const CT=new globalThis.TextEncoder;function IT(i){return ap(i),CT.encode(i)}const PT=Array.from({length:256},(i,e)=>e.toString(16).padStart(2,"0"));function SM(i){wT(i);let e="";for(let t=0;t<i.length;t++)e+=PT[i[t]];return e}const gd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15};function TM(i){if(ap(i),i.length%2!==0)throw new Error("Invalid Hex string length.");const e=i.length/2,t=new Uint8Array(e);for(let n=0;n<e;n++){const r=gd[i[n*2]],s=gd[i[n*2+1]];if(r===void 0||s===void 0)throw new Error(`Invalid Hex character encountered at position ${n*2}`);t[n]=r<<4|s}return t}function _d(i){const{byteLength:e}=i;if(e===6)return i.getUint16(0)*2**32+i.getUint32(2);if(e===5)return i.getUint8(0)*2**32+i.getUint32(1);if(e===4)return i.getUint32(0);if(e===3)return i.getUint8(0)*2**16+i.getUint16(1);if(e===2)return i.getUint16(0);if(e===1)return i.getUint8(0)}function op(i,e){const t=i.length,n=e.length;if(n===0||n>t)return-1;const r=t-n;for(let s=0;s<=r;s++){let a=!0;for(let l=0;l<n;l++)if(i[s+l]!==e[l]){a=!1;break}if(a)return s}return-1}function DT(i,e){return op(i,e)!==-1}function LT(i){return[...i].map(e=>e.charCodeAt(0))}function NT(i,e=0){const t=Number.parseInt(new Ot(6).get(i,148).replace(/\0.*$/,"").trim(),8);if(Number.isNaN(t))return!1;let n=8*32;for(let r=e;r<e+148;r++)n+=i[r];for(let r=e+156;r<e+512;r++)n+=i[r];return t===n}const UT={get:(i,e)=>i[e+3]&127|i[e+2]<<7|i[e+1]<<14|i[e]<<21,len:4},OT=["jpg","png","apng","gif","webp","flif","xcf","cr2","cr3","orf","arw","dng","nef","rw2","raf","tif","bmp","icns","jxr","psd","indd","zip","tar","rar","gz","bz2","7z","dmg","mp4","mid","mkv","webm","mov","avi","mpg","mp2","mp3","m4a","oga","ogg","ogv","opus","flac","wav","spx","amr","pdf","epub","elf","macho","exe","swf","rtf","wasm","woff","woff2","eot","ttf","otf","ico","flv","ps","xz","sqlite","nes","crx","xpi","cab","deb","ar","rpm","Z","lz","cfb","mxf","mts","blend","bpg","docx","pptx","xlsx","3gp","3g2","j2c","jp2","jpm","jpx","mj2","aif","qcp","odt","ods","odp","xml","mobi","heic","cur","ktx","ape","wv","dcm","ics","glb","pcap","dsf","lnk","alias","voc","ac3","m4v","m4p","m4b","f4v","f4p","f4b","f4a","mie","asf","ogm","ogx","mpc","arrow","shp","aac","mp1","it","s3m","xm","ai","skp","avif","eps","lzh","pgp","asar","stl","chm","3mf","zst","jxl","vcf","jls","pst","dwg","parquet","class","arj","cpio","ace","avro","icc","fbx","vsdx","vtt","apk"],FT=["image/jpeg","image/png","image/gif","image/webp","image/flif","image/x-xcf","image/x-canon-cr2","image/x-canon-cr3","image/tiff","image/bmp","image/vnd.ms-photo","image/vnd.adobe.photoshop","application/x-indesign","application/epub+zip","application/x-xpinstall","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/zip","application/x-tar","application/x-rar-compressed","application/gzip","application/x-bzip2","application/x-7z-compressed","application/x-apple-diskimage","application/x-apache-arrow","video/mp4","audio/midi","video/x-matroska","video/webm","video/quicktime","video/vnd.avi","audio/wav","audio/qcelp","audio/x-ms-asf","video/x-ms-asf","application/vnd.ms-asf","video/mpeg","video/3gpp","audio/mpeg","audio/mp4","video/ogg","audio/ogg","audio/ogg; codecs=opus","application/ogg","audio/x-flac","audio/ape","audio/wavpack","audio/amr","application/pdf","application/x-elf","application/x-mach-binary","application/x-msdownload","application/x-shockwave-flash","application/rtf","application/wasm","font/woff","font/woff2","application/vnd.ms-fontobject","font/ttf","font/otf","image/x-icon","video/x-flv","application/postscript","application/eps","application/x-xz","application/x-sqlite3","application/x-nintendo-nes-rom","application/x-google-chrome-extension","application/vnd.ms-cab-compressed","application/x-deb","application/x-unix-archive","application/x-rpm","application/x-compress","application/x-lzip","application/x-cfb","application/x-mie","application/mxf","video/mp2t","application/x-blender","image/bpg","image/j2c","image/jp2","image/jpx","image/jpm","image/mj2","audio/aiff","application/xml","application/x-mobipocket-ebook","image/heif","image/heif-sequence","image/heic","image/heic-sequence","image/icns","image/ktx","application/dicom","audio/x-musepack","text/calendar","text/vcard","text/vtt","model/gltf-binary","application/vnd.tcpdump.pcap","audio/x-dsf","application/x.ms.shortcut","application/x.apple.alias","audio/x-voc","audio/vnd.dolby.dd-raw","audio/x-m4a","image/apng","image/x-olympus-orf","image/x-sony-arw","image/x-adobe-dng","image/x-nikon-nef","image/x-panasonic-rw2","image/x-fujifilm-raf","video/x-m4v","video/3gpp2","application/x-esri-shape","audio/aac","audio/x-it","audio/x-s3m","audio/x-xm","video/MP1S","video/MP2P","application/vnd.sketchup.skp","image/avif","application/x-lzh-compressed","application/pgp-encrypted","application/x-asar","model/stl","application/vnd.ms-htmlhelp","model/3mf","image/jxl","application/zstd","image/jls","application/vnd.ms-outlook","image/vnd.dwg","application/x-parquet","application/java-vm","application/x-arj","application/x-cpio","application/x-ace-compressed","application/avro","application/vnd.iccprofile","application/x.autodesk.fbx","application/vnd.visio","application/vnd.android.package-archive"],xd=4100;async function lp(i){return new BT().fromBuffer(i)}function Yn(i,e,t){t={offset:0,...t};for(const[n,r]of e.entries())if(t.mask){if(r!==(t.mask[n]&i[n+t.offset]))return!1}else if(r!==i[n+t.offset])return!1;return!0}class BT{constructor(e){this.detectors=e?.customDetectors,this.tokenizerOptions={abortSignal:e?.signal},this.fromTokenizer=this.fromTokenizer.bind(this),this.fromBuffer=this.fromBuffer.bind(this),this.parse=this.parse.bind(this)}async fromTokenizer(e){const t=e.position;for(const n of this.detectors||[]){const r=await n(e);if(r)return r;if(t!==e.position)return}return this.parse(e)}async fromBuffer(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer))throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);const t=e instanceof Uint8Array?e:new Uint8Array(e);if(t?.length>1)return this.fromTokenizer(ST(t,this.tokenizerOptions))}async fromBlob(e){return this.fromStream(e.stream())}async fromStream(e){const t=await yT(e,this.tokenizerOptions);try{return await this.fromTokenizer(t)}finally{await t.close()}}async toDetectionStream(e,t){const{sampleSize:n=xd}=t;let r,s;const a=e.getReader({mode:"byob"});try{const{value:h,done:f}=await a.read(new Uint8Array(n));if(s=h,!f&&h)try{r=await this.fromBuffer(h.slice(0,n))}catch(o){if(!(o instanceof xn))throw o;r=void 0}s=h}finally{a.releaseLock()}const l=new TransformStream({async start(h){h.enqueue(s)},transform(h,f){f.enqueue(h)}}),u=e.pipeThrough(l);return u.fileType=r,u}check(e,t){return Yn(this.buffer,e,t)}checkString(e,t){return this.check(LT(e),t)}async parse(e){if(this.buffer=new Uint8Array(xd),e.fileInfo.size===void 0&&(e.fileInfo.size=Number.MAX_SAFE_INTEGER),this.tokenizer=e,await e.peekBuffer(this.buffer,{length:12,mayBeLess:!0}),this.check([66,77]))return{ext:"bmp",mime:"image/bmp"};if(this.check([11,119]))return{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"};if(this.check([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(this.check([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if(this.check([37,33]))return await e.peekBuffer(this.buffer,{length:24,mayBeLess:!0}),this.checkString("PS-Adobe-",{offset:2})&&this.checkString(" EPSF-",{offset:14})?{ext:"eps",mime:"application/eps"}:{ext:"ps",mime:"application/postscript"};if(this.check([31,160])||this.check([31,157]))return{ext:"Z",mime:"application/x-compress"};if(this.check([199,113]))return{ext:"cpio",mime:"application/x-cpio"};if(this.check([96,234]))return{ext:"arj",mime:"application/x-arj"};if(this.check([239,187,191]))return this.tokenizer.ignore(3),this.parse(e);if(this.check([71,73,70]))return{ext:"gif",mime:"image/gif"};if(this.check([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(this.check([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(this.check([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(this.checkString("ID3")){await e.ignore(6);const t=await e.readToken(UT);return e.position+t>e.fileInfo.size?{ext:"mp3",mime:"audio/mpeg"}:(await e.ignore(t),this.fromTokenizer(e))}if(this.checkString("MP+"))return{ext:"mpc",mime:"audio/x-musepack"};if((this.buffer[0]===67||this.buffer[0]===70)&&this.check([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(this.check([255,216,255]))return this.check([247],{offset:3})?{ext:"jls",mime:"image/jls"}:{ext:"jpg",mime:"image/jpeg"};if(this.check([79,98,106,1]))return{ext:"avro",mime:"application/avro"};if(this.checkString("FLIF"))return{ext:"flif",mime:"image/flif"};if(this.checkString("8BPS"))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};if(this.checkString("WEBP",{offset:8}))return{ext:"webp",mime:"image/webp"};if(this.checkString("MPCK"))return{ext:"mpc",mime:"audio/x-musepack"};if(this.checkString("FORM"))return{ext:"aif",mime:"audio/aiff"};if(this.checkString("icns",{offset:0}))return{ext:"icns",mime:"image/icns"};if(this.check([80,75,3,4])){try{for(;e.position+30<e.fileInfo.size;){await e.readBuffer(this.buffer,{length:30});const t=new DataView(this.buffer.buffer),n={compressedSize:t.getUint32(18,!0),uncompressedSize:t.getUint32(22,!0),filenameLength:t.getUint16(26,!0),extraFieldLength:t.getUint16(28,!0)};if(n.filename=await e.readToken(new Ot(n.filenameLength,"utf-8")),await e.ignore(n.extraFieldLength),/classes\d*\.dex/.test(n.filename))return{ext:"apk",mime:"application/vnd.android.package-archive"};if(n.filename==="META-INF/mozilla.rsa")return{ext:"xpi",mime:"application/x-xpinstall"};if(n.filename.endsWith(".rels")||n.filename.endsWith(".xml"))switch(n.filename.split("/")[0]){case"_rels":break;case"word":return{ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};case"ppt":return{ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"};case"xl":return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};case"visio":return{ext:"vsdx",mime:"application/vnd.visio"};default:break}if(n.filename.startsWith("xl/"))return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};if(n.filename.startsWith("3D/")&&n.filename.endsWith(".model"))return{ext:"3mf",mime:"model/3mf"};if(n.filename==="mimetype"&&n.compressedSize===n.uncompressedSize){let r=await e.readToken(new Ot(n.compressedSize,"utf-8"));switch(r=r.trim(),r){case"application/epub+zip":return{ext:"epub",mime:"application/epub+zip"};case"application/vnd.oasis.opendocument.text":return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};case"application/vnd.oasis.opendocument.spreadsheet":return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};case"application/vnd.oasis.opendocument.presentation":return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"};default:}}if(n.compressedSize===0){let r=-1;for(;r<0&&e.position<e.fileInfo.size;)await e.peekBuffer(this.buffer,{mayBeLess:!0}),r=op(this.buffer,new Uint8Array([80,75,3,4])),await e.ignore(r>=0?r:this.buffer.length)}else await e.ignore(n.compressedSize)}}catch(t){if(!(t instanceof xn))throw t}return{ext:"zip",mime:"application/zip"}}if(this.checkString("OggS")){await e.ignore(28);const t=new Uint8Array(8);return await e.readBuffer(t),Yn(t,[79,112,117,115,72,101,97,100])?{ext:"opus",mime:"audio/ogg; codecs=opus"}:Yn(t,[128,116,104,101,111,114,97])?{ext:"ogv",mime:"video/ogg"}:Yn(t,[1,118,105,100,101,111,0])?{ext:"ogm",mime:"video/ogg"}:Yn(t,[127,70,76,65,67])?{ext:"oga",mime:"audio/ogg"}:Yn(t,[83,112,101,101,120,32,32])?{ext:"spx",mime:"audio/ogg"}:Yn(t,[1,118,111,114,98,105,115])?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"}}if(this.check([80,75])&&(this.buffer[2]===3||this.buffer[2]===5||this.buffer[2]===7)&&(this.buffer[3]===4||this.buffer[3]===6||this.buffer[3]===8))return{ext:"zip",mime:"application/zip"};if(this.checkString("ftyp",{offset:4})&&(this.buffer[8]&96)!==0){const t=new Ot(4,"latin1").get(this.buffer,8).replace("\0"," ").trim();switch(t){case"avif":case"avis":return{ext:"avif",mime:"image/avif"};case"mif1":return{ext:"heic",mime:"image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt":return{ext:"mov",mime:"video/quicktime"};case"M4V":case"M4VH":case"M4VP":return{ext:"m4v",mime:"video/x-m4v"};case"M4P":return{ext:"m4p",mime:"video/mp4"};case"M4B":return{ext:"m4b",mime:"audio/mp4"};case"M4A":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V":return{ext:"f4v",mime:"video/mp4"};case"F4P":return{ext:"f4p",mime:"video/mp4"};case"F4A":return{ext:"f4a",mime:"audio/mp4"};case"F4B":return{ext:"f4b",mime:"audio/mp4"};case"crx":return{ext:"cr3",mime:"image/x-canon-cr3"};default:return t.startsWith("3g")?t.startsWith("3g2")?{ext:"3g2",mime:"video/3gpp2"}:{ext:"3gp",mime:"video/3gpp"}:{ext:"mp4",mime:"video/mp4"}}}if(this.checkString("MThd"))return{ext:"mid",mime:"audio/midi"};if(this.checkString("wOFF")&&(this.check([0,1,0,0],{offset:4})||this.checkString("OTTO",{offset:4})))return{ext:"woff",mime:"font/woff"};if(this.checkString("wOF2")&&(this.check([0,1,0,0],{offset:4})||this.checkString("OTTO",{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(this.check([212,195,178,161])||this.check([161,178,195,212]))return{ext:"pcap",mime:"application/vnd.tcpdump.pcap"};if(this.checkString("DSD "))return{ext:"dsf",mime:"audio/x-dsf"};if(this.checkString("LZIP"))return{ext:"lz",mime:"application/x-lzip"};if(this.checkString("fLaC"))return{ext:"flac",mime:"audio/x-flac"};if(this.check([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(this.checkString("wvpk"))return{ext:"wv",mime:"audio/wavpack"};if(this.checkString("%PDF")){try{await e.ignore(1350);const t=10*1024*1024,n=new Uint8Array(Math.min(t,e.fileInfo.size));if(await e.readBuffer(n,{mayBeLess:!0}),DT(n,new TextEncoder().encode("AIPrivateData")))return{ext:"ai",mime:"application/postscript"}}catch(t){if(!(t instanceof xn))throw t}return{ext:"pdf",mime:"application/pdf"}}if(this.check([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(this.check([73,73])){const t=await this.readTiffHeader(!1);if(t)return t}if(this.check([77,77])){const t=await this.readTiffHeader(!0);if(t)return t}if(this.checkString("MAC "))return{ext:"ape",mime:"audio/ape"};if(this.check([26,69,223,163])){async function t(){const l=await e.peekNumber(Er);let u=128,h=0;for(;(l&u)===0&&u!==0;)++h,u>>=1;const f=new Uint8Array(h+1);return await e.readBuffer(f),f}async function n(){const l=await t(),u=await t();u[0]^=128>>u.length-1;const h=Math.min(6,u.length),f=new DataView(l.buffer),o=new DataView(u.buffer,u.length-h,h);return{id:_d(f),len:_d(o)}}async function r(l){for(;l>0;){const u=await n();if(u.id===17026)return(await e.readToken(new Ot(u.len))).replaceAll(/\00.*$/g,"");await e.ignore(u.len),--l}}const s=await n();switch(await r(s.len)){case"webm":return{ext:"webm",mime:"video/webm"};case"matroska":return{ext:"mkv",mime:"video/x-matroska"};default:return}}if(this.check([82,73,70,70])){if(this.check([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(this.check([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/wav"};if(this.check([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(this.checkString("SQLi"))return{ext:"sqlite",mime:"application/x-sqlite3"};if(this.check([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(this.checkString("Cr24"))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(this.checkString("MSCF")||this.checkString("ISc("))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(this.check([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(this.check([197,208,211,198]))return{ext:"eps",mime:"application/eps"};if(this.check([40,181,47,253]))return{ext:"zst",mime:"application/zstd"};if(this.check([127,69,76,70]))return{ext:"elf",mime:"application/x-elf"};if(this.check([33,66,68,78]))return{ext:"pst",mime:"application/vnd.ms-outlook"};if(this.checkString("PAR1"))return{ext:"parquet",mime:"application/x-parquet"};if(this.check([207,250,237,254]))return{ext:"macho",mime:"application/x-mach-binary"};if(this.check([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(this.checkString("#!AMR"))return{ext:"amr",mime:"audio/amr"};if(this.checkString("{\\rtf"))return{ext:"rtf",mime:"application/rtf"};if(this.check([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(this.checkString("IMPM"))return{ext:"it",mime:"audio/x-it"};if(this.checkString("-lh0-",{offset:2})||this.checkString("-lh1-",{offset:2})||this.checkString("-lh2-",{offset:2})||this.checkString("-lh3-",{offset:2})||this.checkString("-lh4-",{offset:2})||this.checkString("-lh5-",{offset:2})||this.checkString("-lh6-",{offset:2})||this.checkString("-lh7-",{offset:2})||this.checkString("-lzs-",{offset:2})||this.checkString("-lz4-",{offset:2})||this.checkString("-lz5-",{offset:2})||this.checkString("-lhd-",{offset:2}))return{ext:"lzh",mime:"application/x-lzh-compressed"};if(this.check([0,0,1,186])){if(this.check([33],{offset:4,mask:[241]}))return{ext:"mpg",mime:"video/MP1S"};if(this.check([68],{offset:4,mask:[196]}))return{ext:"mpg",mime:"video/MP2P"}}if(this.checkString("ITSF"))return{ext:"chm",mime:"application/vnd.ms-htmlhelp"};if(this.check([202,254,186,190]))return{ext:"class",mime:"application/java-vm"};if(this.check([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(this.checkString("<?xml "))return{ext:"xml",mime:"application/xml"};if(this.check([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(this.check([82,97,114,33,26,7])&&(this.buffer[6]===0||this.buffer[6]===1))return{ext:"rar",mime:"application/x-rar-compressed"};if(this.checkString("solid "))return{ext:"stl",mime:"model/stl"};if(this.checkString("AC")){const t=new Ot(4,"latin1").get(this.buffer,2);if(t.match("^d*")&&t>=1e3&&t<=1050)return{ext:"dwg",mime:"image/vnd.dwg"}}if(this.checkString("070707"))return{ext:"cpio",mime:"application/x-cpio"};if(this.checkString("BLENDER"))return{ext:"blend",mime:"application/x-blender"};if(this.checkString("!<arch>"))return await e.ignore(8),await e.readToken(new Ot(13,"ascii"))==="debian-binary"?{ext:"deb",mime:"application/x-deb"}:{ext:"ar",mime:"application/x-unix-archive"};if(this.checkString("WEBVTT")&&[`
`,"\r","	"," ","\0"].some(t=>this.checkString(t,{offset:6})))return{ext:"vtt",mime:"text/vtt"};if(this.check([137,80,78,71,13,10,26,10])){await e.ignore(8);async function t(){return{length:await e.readToken(Qf),type:await e.readToken(new Ot(4,"latin1"))}}do{const n=await t();if(n.length<0)return;switch(n.type){case"IDAT":return{ext:"png",mime:"image/png"};case"acTL":return{ext:"apng",mime:"image/apng"};default:await e.ignore(n.length+4)}}while(e.position+8<e.fileInfo.size);return{ext:"png",mime:"image/png"}}if(this.check([65,82,82,79,87,49,0,0]))return{ext:"arrow",mime:"application/x-apache-arrow"};if(this.check([103,108,84,70,2,0,0,0]))return{ext:"glb",mime:"model/gltf-binary"};if(this.check([102,114,101,101],{offset:4})||this.check([109,100,97,116],{offset:4})||this.check([109,111,111,118],{offset:4})||this.check([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};if(this.check([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(this.checkString("gimp xcf "))return{ext:"xcf",mime:"image/x-xcf"};if(this.check([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"image/x-panasonic-rw2"};if(this.check([48,38,178,117,142,102,207,17,166,217])){async function t(){const n=new Uint8Array(16);return await e.readBuffer(n),{id:n,size:Number(await e.readToken(ep))}}for(await e.ignore(30);e.position+24<e.fileInfo.size;){const n=await t();let r=n.size-24;if(Yn(n.id,[145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101])){const s=new Uint8Array(16);if(r-=await e.readBuffer(s),Yn(s,[64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"audio/x-ms-asf"};if(Yn(s,[192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"video/x-ms-asf"};break}await e.ignore(r)}return{ext:"asf",mime:"application/vnd.ms-asf"}}if(this.check([171,75,84,88,32,49,49,187,13,10,26,10]))return{ext:"ktx",mime:"image/ktx"};if((this.check([126,16,4])||this.check([126,24,4]))&&this.check([48,77,73,69],{offset:4}))return{ext:"mie",mime:"application/x-mie"};if(this.check([39,10,0,0,0,0,0,0,0,0,0,0],{offset:2}))return{ext:"shp",mime:"application/x-esri-shape"};if(this.check([255,79,255,81]))return{ext:"j2c",mime:"image/j2c"};if(this.check([0,0,0,12,106,80,32,32,13,10,135,10]))switch(await e.ignore(20),await e.readToken(new Ot(4,"ascii"))){case"jp2 ":return{ext:"jp2",mime:"image/jp2"};case"jpx ":return{ext:"jpx",mime:"image/jpx"};case"jpm ":return{ext:"jpm",mime:"image/jpm"};case"mjp2":return{ext:"mj2",mime:"image/mj2"};default:return}if(this.check([255,10])||this.check([0,0,0,12,74,88,76,32,13,10,135,10]))return{ext:"jxl",mime:"image/jxl"};if(this.check([254,255]))return this.check([0,60,0,63,0,120,0,109,0,108],{offset:2})?{ext:"xml",mime:"application/xml"}:void 0;if(this.check([0,0,1,186])||this.check([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};if(this.check([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(this.check([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(this.check([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(this.check([208,207,17,224,161,177,26,225]))return{ext:"cfb",mime:"application/x-cfb"};if(await e.peekBuffer(this.buffer,{length:Math.min(256,e.fileInfo.size),mayBeLess:!0}),this.check([97,99,115,112],{offset:36}))return{ext:"icc",mime:"application/vnd.iccprofile"};if(this.checkString("**ACE",{offset:7})&&this.checkString("**",{offset:12}))return{ext:"ace",mime:"application/x-ace-compressed"};if(this.checkString("BEGIN:")){if(this.checkString("VCARD",{offset:6}))return{ext:"vcf",mime:"text/vcard"};if(this.checkString("VCALENDAR",{offset:6}))return{ext:"ics",mime:"text/calendar"}}if(this.checkString("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifilm-raf"};if(this.checkString("Extended Module:"))return{ext:"xm",mime:"audio/x-xm"};if(this.checkString("Creative Voice File"))return{ext:"voc",mime:"audio/x-voc"};if(this.check([4,0,0,0])&&this.buffer.length>=16){const t=new DataView(this.buffer.buffer).getUint32(12,!0);if(t>12&&this.buffer.length>=t+16)try{const n=new TextDecoder().decode(this.buffer.slice(16,t+16));if(JSON.parse(n).files)return{ext:"asar",mime:"application/x-asar"}}catch{}}if(this.check([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(this.checkString("SCRM",{offset:44}))return{ext:"s3m",mime:"audio/x-s3m"};if(this.check([71])&&this.check([71],{offset:188}))return{ext:"mts",mime:"video/mp2t"};if(this.check([71],{offset:4})&&this.check([71],{offset:196}))return{ext:"mts",mime:"video/mp2t"};if(this.check([66,79,79,75,77,79,66,73],{offset:60}))return{ext:"mobi",mime:"application/x-mobipocket-ebook"};if(this.check([68,73,67,77],{offset:128}))return{ext:"dcm",mime:"application/dicom"};if(this.check([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70]))return{ext:"lnk",mime:"application/x.ms.shortcut"};if(this.check([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]))return{ext:"alias",mime:"application/x.apple.alias"};if(this.checkString("Kaydara FBX Binary  \0"))return{ext:"fbx",mime:"application/x.autodesk.fbx"};if(this.check([76,80],{offset:34})&&(this.check([0,0,1],{offset:8})||this.check([1,0,2],{offset:8})||this.check([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(this.check([6,6,237,245,216,29,70,229,189,49,239,231,254,116,183,29]))return{ext:"indd",mime:"application/x-indesign"};if(await e.peekBuffer(this.buffer,{length:Math.min(512,e.fileInfo.size),mayBeLess:!0}),NT(this.buffer))return{ext:"tar",mime:"application/x-tar"};if(this.check([255,254]))return this.check([60,0,63,0,120,0,109,0,108,0],{offset:2})?{ext:"xml",mime:"application/xml"}:this.check([255,14,83,0,107,0,101,0,116,0,99,0,104,0,85,0,112,0,32,0,77,0,111,0,100,0,101,0,108,0],{offset:2})?{ext:"skp",mime:"application/vnd.sketchup.skp"}:void 0;if(this.checkString("-----BEGIN PGP MESSAGE-----"))return{ext:"pgp",mime:"application/pgp-encrypted"};if(this.buffer.length>=2&&this.check([255,224],{offset:0,mask:[255,224]})){if(this.check([16],{offset:1,mask:[22]}))return this.check([8],{offset:1,mask:[8]})?{ext:"aac",mime:"audio/aac"}:{ext:"aac",mime:"audio/aac"};if(this.check([2],{offset:1,mask:[6]}))return{ext:"mp3",mime:"audio/mpeg"};if(this.check([4],{offset:1,mask:[6]}))return{ext:"mp2",mime:"audio/mpeg"};if(this.check([6],{offset:1,mask:[6]}))return{ext:"mp1",mime:"audio/mpeg"}}}async readTiffTag(e){const t=await this.tokenizer.readToken(e?Ks:Xi);switch(this.tokenizer.ignore(10),t){case 50341:return{ext:"arw",mime:"image/x-sony-arw"};case 50706:return{ext:"dng",mime:"image/x-adobe-dng"}}}async readTiffIFD(e){const t=await this.tokenizer.readToken(e?Ks:Xi);for(let n=0;n<t;++n){const r=await this.readTiffTag(e);if(r)return r}}async readTiffHeader(e){const t=(e?Ks:Xi).get(this.buffer,2),n=(e?To:Tt).get(this.buffer,4);if(t===42){if(n>=6){if(this.checkString("CR",{offset:8}))return{ext:"cr2",mime:"image/x-canon-cr2"};if(n>=8&&(this.check([28,0,254,0],{offset:8})||this.check([31,0,11,0],{offset:8})))return{ext:"nef",mime:"image/x-nikon-nef"}}return await this.tokenizer.ignore(n),await this.readTiffIFD(e)??{ext:"tif",mime:"image/tiff"}}if(t===43)return{ext:"tif",mime:"image/tiff"}}}new Set(OT);new Set(FT);var qa={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var vd;function kT(){if(vd)return qa;vd=1;var i=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,e=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,t=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,n=/\\([\u000b\u0020-\u00ff])/g,r=/([\\"])/g,s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;qa.format=a,qa.parse=l;function a(o){if(!o||typeof o!="object")throw new TypeError("argument obj is required");var c=o.parameters,d=o.type;if(!d||!s.test(d))throw new TypeError("invalid type");var m=d;if(c&&typeof c=="object")for(var _,g=Object.keys(c).sort(),p=0;p<g.length;p++){if(_=g[p],!t.test(_))throw new TypeError("invalid parameter name");m+="; "+_+"="+h(c[_])}return m}function l(o){if(!o)throw new TypeError("argument string is required");var c=typeof o=="object"?u(o):o;if(typeof c!="string")throw new TypeError("argument string is required to be a string");var d=c.indexOf(";"),m=d!==-1?c.slice(0,d).trim():c.trim();if(!s.test(m))throw new TypeError("invalid media type");var _=new f(m.toLowerCase());if(d!==-1){var g,p,S;for(i.lastIndex=d;p=i.exec(c);){if(p.index!==d)throw new TypeError("invalid parameter format");d+=p[0].length,g=p[1].toLowerCase(),S=p[2],S.charCodeAt(0)===34&&(S=S.slice(1,-1),S.indexOf("\\")!==-1&&(S=S.replace(n,"$1"))),_.parameters[g]=S}if(d!==c.length)throw new TypeError("invalid parameter format")}return _}function u(o){var c;if(typeof o.getHeader=="function"?c=o.getHeader("content-type"):typeof o.headers=="object"&&(c=o.headers&&o.headers["content-type"]),typeof c!="string")throw new TypeError("content-type header is missing from object");return c}function h(o){var c=String(o);if(t.test(c))return c;if(c.length>0&&!e.test(c))throw new TypeError("invalid parameter value");return'"'+c.replace(r,"\\$1")+'"'}function f(o){this.parameters=Object.create(null),this.type=o}return qa}var zT=kT();const HT=jf(zT);var Os={};/*!
 * media-typer
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */var yd;function GT(){if(yd)return Os;yd=1;var i=/^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/,e=/^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,t=/^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;Os.format=n,Os.parse=s,Os.test=r;function n(l){if(!l||typeof l!="object")throw new TypeError("argument obj is required");var u=l.subtype,h=l.suffix,f=l.type;if(!f||!e.test(f))throw new TypeError("invalid type");if(!u||!i.test(u))throw new TypeError("invalid subtype");var o=f+"/"+u;if(h){if(!e.test(h))throw new TypeError("invalid suffix");o+="+"+h}return o}function r(l){if(!l)throw new TypeError("argument string is required");if(typeof l!="string")throw new TypeError("argument string is required to be a string");return t.test(l.toLowerCase())}function s(l){if(!l)throw new TypeError("argument string is required");if(typeof l!="string")throw new TypeError("argument string is required to be a string");var u=t.exec(l.toLowerCase());if(!u)throw new TypeError("invalid media type");var h=u[1],f=u[2],o,c=f.lastIndexOf("+");return c!==-1&&(o=f.substr(c+1),f=f.substr(0,c)),new a(h,f,o)}function a(l,u,h){this.type=l,this.subtype=u,this.suffix=h}return Os}var VT=GT(),Ya={exports:{}},Pl,Sd;function WT(){if(Sd)return Pl;Sd=1;var i=1e3,e=i*60,t=e*60,n=t*24,r=n*7,s=n*365.25;Pl=function(f,o){o=o||{};var c=typeof f;if(c==="string"&&f.length>0)return a(f);if(c==="number"&&isFinite(f))return o.long?u(f):l(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function a(f){if(f=String(f),!(f.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);if(o){var c=parseFloat(o[1]),d=(o[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*r;case"days":case"day":case"d":return c*n;case"hours":case"hour":case"hrs":case"hr":case"h":return c*t;case"minutes":case"minute":case"mins":case"min":case"m":return c*e;case"seconds":case"second":case"secs":case"sec":case"s":return c*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function l(f){var o=Math.abs(f);return o>=n?Math.round(f/n)+"d":o>=t?Math.round(f/t)+"h":o>=e?Math.round(f/e)+"m":o>=i?Math.round(f/i)+"s":f+"ms"}function u(f){var o=Math.abs(f);return o>=n?h(f,o,n,"day"):o>=t?h(f,o,t,"hour"):o>=e?h(f,o,e,"minute"):o>=i?h(f,o,i,"second"):f+" ms"}function h(f,o,c,d){var m=o>=c*1.5;return Math.round(f/c)+" "+d+(m?"s":"")}return Pl}var Dl,Td;function XT(){if(Td)return Dl;Td=1;function i(e){n.debug=n,n.default=n,n.coerce=h,n.disable=l,n.enable=s,n.enabled=u,n.humanize=WT(),n.destroy=f,Object.keys(e).forEach(o=>{n[o]=e[o]}),n.names=[],n.skips=[],n.formatters={};function t(o){let c=0;for(let d=0;d<o.length;d++)c=(c<<5)-c+o.charCodeAt(d),c|=0;return n.colors[Math.abs(c)%n.colors.length]}n.selectColor=t;function n(o){let c,d=null,m,_;function g(...p){if(!g.enabled)return;const S=g,b=Number(new Date),y=b-(c||b);S.diff=y,S.prev=c,S.curr=b,c=b,p[0]=n.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let C=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(w,N)=>{if(w==="%%")return"%";C++;const T=n.formatters[N];if(typeof T=="function"){const E=p[C];w=T.call(S,E),p.splice(C,1),C--}return w}),n.formatArgs.call(S,p),(S.log||n.log).apply(S,p)}return g.namespace=o,g.useColors=n.useColors(),g.color=n.selectColor(o),g.extend=r,g.destroy=n.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(m!==n.namespaces&&(m=n.namespaces,_=n.enabled(o)),_),set:p=>{d=p}}),typeof n.init=="function"&&n.init(g),g}function r(o,c){const d=n(this.namespace+(typeof c>"u"?":":c)+o);return d.log=this.log,d}function s(o){n.save(o),n.namespaces=o,n.names=[],n.skips=[];const c=(typeof o=="string"?o:"").trim().replace(" ",",").split(",").filter(Boolean);for(const d of c)d[0]==="-"?n.skips.push(d.slice(1)):n.names.push(d)}function a(o,c){let d=0,m=0,_=-1,g=0;for(;d<o.length;)if(m<c.length&&(c[m]===o[d]||c[m]==="*"))c[m]==="*"?(_=m,g=d,m++):(d++,m++);else if(_!==-1)m=_+1,g++,d=g;else return!1;for(;m<c.length&&c[m]==="*";)m++;return m===c.length}function l(){const o=[...n.names,...n.skips.map(c=>"-"+c)].join(",");return n.enable(""),o}function u(o){for(const c of n.skips)if(a(o,c))return!1;for(const c of n.names)if(a(o,c))return!0;return!1}function h(o){return o instanceof Error?o.stack||o.message:o}function f(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}return Dl=i,Dl}var Ed;function qT(){return Ed||(Ed=1,function(i,e){var t={};e.formatArgs=r,e.save=s,e.load=a,e.useColors=n,e.storage=l(),e.destroy=(()=>{let h=!1;return()=>{h||(h=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function n(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let h;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(h=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(h[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function r(h){if(h[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+h[0]+(this.useColors?"%c ":" ")+"+"+i.exports.humanize(this.diff),!this.useColors)return;const f="color: "+this.color;h.splice(1,0,f,"color: inherit");let o=0,c=0;h[0].replace(/%[a-zA-Z%]/g,d=>{d!=="%%"&&(o++,d==="%c"&&(c=o))}),h.splice(c,0,f)}e.log=console.debug||console.log||(()=>{});function s(h){try{h?e.storage.setItem("debug",h):e.storage.removeItem("debug")}catch{}}function a(){let h;try{h=e.storage.getItem("debug")}catch{}return!h&&typeof process<"u"&&"env"in process&&(h=t.DEBUG),h}function l(){try{return localStorage}catch{}}i.exports=XT()(e);const{formatters:u}=i.exports;u.j=function(h){try{return JSON.stringify(h)}catch(f){return"[UnexpectedJSONParseError]: "+f.message}}}(Ya,Ya.exports)),Ya.exports}var YT=qT();const ko=jf(YT);var bd;(function(i){i[i.shot=10]="shot",i[i.scene=20]="scene",i[i.track=30]="track",i[i.part=40]="part",i[i.album=50]="album",i[i.edition=60]="edition",i[i.collection=70]="collection"})(bd||(bd={}));var Bc;(function(i){i[i.video=1]="video",i[i.audio=2]="audio",i[i.complex=3]="complex",i[i.logo=4]="logo",i[i.subtitle=17]="subtitle",i[i.button=18]="button",i[i.control=32]="control"})(Bc||(Bc={}));const ha=i=>class extends Error{constructor(t){super(t),this.name=i}};class jT extends ha("CouldNotDetermineFileTypeError"){}class KT extends ha("UnsupportedFileTypeError"){}class $T extends ha("UnexpectedFileContentError"){constructor(e,t){super(t),this.fileType=e}toString(){return`${this.name} (FileType: ${this.fileType}): ${this.message}`}}class Su extends ha("FieldDecodingError"){}class cp extends ha("InternalParserError"){}const ZT=i=>class extends $T{constructor(e){super(i,e)}};function ks(i,e,t){return(i[e]&1<<t)!==0}function Md(i,e,t,n){let r=e;if(n==="utf-16le"){for(;i[r]!==0||i[r+1]!==0;){if(r>=t)return t;r+=2}return r}for(;i[r]!==0;){if(r>=t)return t;r++}return r}function JT(i){const e=i.indexOf("\0");return e===-1?i:i.substr(0,e)}function QT(i){const e=i.length;if((e&1)!==0)throw new Su("Buffer length must be even");for(let t=0;t<e;t+=2){const n=i[t];i[t]=i[t+1],i[t+1]=n}return i}function kc(i,e){if(i[0]===255&&i[1]===254)return kc(i.subarray(2),e);if(e==="utf-16le"&&i[0]===254&&i[1]===255){if((i.length&1)!==0)throw new Su("Expected even number of octets for 16-bit unicode string");return kc(QT(i),e)}return new Ot(i.length,e).get(i,0)}function bM(i){return i=i.replace(/^\x00+/g,""),i=i.replace(/\x00+$/g,""),i}function up(i,e,t,n){const r=e+~~(t/8),s=t%8;let a=i[r];a&=255>>s;const l=8-s,u=n-l;return u<0?a>>=8-s-n:u>0&&(a<<=u,a|=up(i,e,t+l,u)),a}function MM(i,e,t){return up(i,e,t,1)===1}function eE(i){const e=[];for(let t=0,n=i.length;t<n;t++){const r=Number(i.charCodeAt(t)).toString(16);e.push(r.length===1?`0${r}`:r)}return e.join(" ")}function tE(i){return 10*Math.log10(i)}function nE(i){return 10**(i/10)}function iE(i){const e=i.split(" ").map(t=>t.trim().toLowerCase());if(e.length>=1){const t=Number.parseFloat(e[0]);return e.length===2&&e[1]==="db"?{dB:t,ratio:nE(t)}:{dB:tE(t),ratio:t}}}var Ad;(function(i){i[i.Other=0]="Other",i[i["32x32 pixels 'file icon' (PNG only)"]=1]="32x32 pixels 'file icon' (PNG only)",i[i["Other file icon"]=2]="Other file icon",i[i["Cover (front)"]=3]="Cover (front)",i[i["Cover (back)"]=4]="Cover (back)",i[i["Leaflet page"]=5]="Leaflet page",i[i["Media (e.g. label side of CD)"]=6]="Media (e.g. label side of CD)",i[i["Lead artist/lead performer/soloist"]=7]="Lead artist/lead performer/soloist",i[i["Artist/performer"]=8]="Artist/performer",i[i.Conductor=9]="Conductor",i[i["Band/Orchestra"]=10]="Band/Orchestra",i[i.Composer=11]="Composer",i[i["Lyricist/text writer"]=12]="Lyricist/text writer",i[i["Recording Location"]=13]="Recording Location",i[i["During recording"]=14]="During recording",i[i["During performance"]=15]="During performance",i[i["Movie/video screen capture"]=16]="Movie/video screen capture",i[i["A bright coloured fish"]=17]="A bright coloured fish",i[i.Illustration=18]="Illustration",i[i["Band/artist logotype"]=19]="Band/artist logotype",i[i["Publisher/Studio logotype"]=20]="Publisher/Studio logotype"})(Ad||(Ad={}));var zc;(function(i){i[i.other=0]="other",i[i.lyrics=1]="lyrics",i[i.text=2]="text",i[i.movement_part=3]="movement_part",i[i.events=4]="events",i[i.chord=5]="chord",i[i.trivia_pop=6]="trivia_pop"})(zc||(zc={}));var Hc;(function(i){i[i.notSynchronized0=0]="notSynchronized0",i[i.mpegFrameNumber=1]="mpegFrameNumber",i[i.milliseconds=2]="milliseconds"})(Hc||(Hc={}));const rE={get:(i,e)=>i[e+3]&127|i[e+2]<<7|i[e+1]<<14|i[e]<<21,len:4},AM={len:10,get:(i,e)=>({fileIdentifier:new Ot(3,"ascii").get(i,e),version:{major:Fc.get(i,e+3),revision:Fc.get(i,e+4)},flags:{unsynchronisation:ks(i,e+5,7),isExtendedHeader:ks(i,e+5,6),expIndicator:ks(i,e+5,5),footer:ks(i,e+5,4)},size:rE.get(i,e+6)})},wM={len:10,get:(i,e)=>({size:To.get(i,e),extendedFlags:Ks.get(i,e+4),sizeOfPadding:To.get(i,e+6),crcDataPresent:ks(i,e+4,31)})},sE={len:1,get:(i,e)=>{switch(i[e]){case 0:return{encoding:"latin1"};case 1:return{encoding:"utf-16le",bom:!0};case 2:return{encoding:"utf-16le",bom:!1};case 3:return{encoding:"utf8",bom:!1};default:return{encoding:"utf8",bom:!1}}}},aE={len:4,get:(i,e)=>({encoding:sE.get(i,e),language:new Ot(3,"latin1").get(i,e+1)})},RM={len:6,get:(i,e)=>{const t=aE.get(i,e);return{encoding:t.encoding,language:t.language,timeStampFormat:Er.get(i,e+4),contentType:Er.get(i,e+5)}}},Eo={year:{multiple:!1},track:{multiple:!1},disk:{multiple:!1},title:{multiple:!1},artist:{multiple:!1},artists:{multiple:!0,unique:!0},albumartist:{multiple:!1},album:{multiple:!1},date:{multiple:!1},originaldate:{multiple:!1},originalyear:{multiple:!1},releasedate:{multiple:!1},comment:{multiple:!0,unique:!1},genre:{multiple:!0,unique:!0},picture:{multiple:!0,unique:!0},composer:{multiple:!0,unique:!0},lyrics:{multiple:!0,unique:!1},albumsort:{multiple:!1,unique:!0},titlesort:{multiple:!1,unique:!0},work:{multiple:!1,unique:!0},artistsort:{multiple:!1,unique:!0},albumartistsort:{multiple:!1,unique:!0},composersort:{multiple:!1,unique:!0},lyricist:{multiple:!0,unique:!0},writer:{multiple:!0,unique:!0},conductor:{multiple:!0,unique:!0},remixer:{multiple:!0,unique:!0},arranger:{multiple:!0,unique:!0},engineer:{multiple:!0,unique:!0},producer:{multiple:!0,unique:!0},technician:{multiple:!0,unique:!0},djmixer:{multiple:!0,unique:!0},mixer:{multiple:!0,unique:!0},label:{multiple:!0,unique:!0},grouping:{multiple:!1},subtitle:{multiple:!0},discsubtitle:{multiple:!1},totaltracks:{multiple:!1},totaldiscs:{multiple:!1},compilation:{multiple:!1},rating:{multiple:!0},bpm:{multiple:!1},mood:{multiple:!1},media:{multiple:!1},catalognumber:{multiple:!0,unique:!0},tvShow:{multiple:!1},tvShowSort:{multiple:!1},tvSeason:{multiple:!1},tvEpisode:{multiple:!1},tvEpisodeId:{multiple:!1},tvNetwork:{multiple:!1},podcast:{multiple:!1},podcasturl:{multiple:!1},releasestatus:{multiple:!1},releasetype:{multiple:!0},releasecountry:{multiple:!1},script:{multiple:!1},language:{multiple:!1},copyright:{multiple:!1},license:{multiple:!1},encodedby:{multiple:!1},encodersettings:{multiple:!1},gapless:{multiple:!1},barcode:{multiple:!1},isrc:{multiple:!0},asin:{multiple:!1},musicbrainz_recordingid:{multiple:!1},musicbrainz_trackid:{multiple:!1},musicbrainz_albumid:{multiple:!1},musicbrainz_artistid:{multiple:!0},musicbrainz_albumartistid:{multiple:!0},musicbrainz_releasegroupid:{multiple:!1},musicbrainz_workid:{multiple:!1},musicbrainz_trmid:{multiple:!1},musicbrainz_discid:{multiple:!1},acoustid_id:{multiple:!1},acoustid_fingerprint:{multiple:!1},musicip_puid:{multiple:!1},musicip_fingerprint:{multiple:!1},website:{multiple:!1},"performer:instrument":{multiple:!0,unique:!0},averageLevel:{multiple:!1},peakLevel:{multiple:!1},notes:{multiple:!0,unique:!1},key:{multiple:!1},originalalbum:{multiple:!1},originalartist:{multiple:!1},discogs_artist_id:{multiple:!0,unique:!0},discogs_release_id:{multiple:!1},discogs_label_id:{multiple:!1},discogs_master_release_id:{multiple:!1},discogs_votes:{multiple:!1},discogs_rating:{multiple:!1},replaygain_track_peak:{multiple:!1},replaygain_track_gain:{multiple:!1},replaygain_album_peak:{multiple:!1},replaygain_album_gain:{multiple:!1},replaygain_track_minmax:{multiple:!1},replaygain_album_minmax:{multiple:!1},replaygain_undo:{multiple:!1},description:{multiple:!0},longDescription:{multiple:!1},category:{multiple:!0},hdVideo:{multiple:!1},keywords:{multiple:!0},movement:{multiple:!1},movementIndex:{multiple:!1},movementTotal:{multiple:!1},podcastId:{multiple:!1},showMovement:{multiple:!1},stik:{multiple:!1}};function oE(i){return Eo[i]&&!Eo[i].multiple}function lE(i){return!Eo[i].multiple||Eo[i].unique||!1}class vn{static toIntOrNull(e){const t=Number.parseInt(e,10);return Number.isNaN(t)?null:t}static normalizeTrack(e){const t=e.toString().split("/");return{no:Number.parseInt(t[0],10)||null,of:Number.parseInt(t[1],10)||null}}constructor(e,t){this.tagTypes=e,this.tagMap=t}mapGenericTag(e,t){e={id:e.id,value:e.value},this.postMap(e,t);const n=this.getCommonName(e.id);return n?{id:n,value:e.value}:null}getCommonName(e){return this.tagMap[e]}postMap(e,t){}}vn.maxRatingScore=1;const cE={title:"title",artist:"artist",album:"album",year:"year",comment:"comment",track:"track",genre:"genre"};class uE extends vn{constructor(){super(["ID3v1"],cE)}}class da extends vn{constructor(e,t){const n={};for(const r of Object.keys(t))n[r.toUpperCase()]=t[r];super(e,n)}getCommonName(e){return this.tagMap[e.toUpperCase()]}}const hE={TIT2:"title",TPE1:"artist","TXXX:Artists":"artists",TPE2:"albumartist",TALB:"album",TDRV:"date",TORY:"originalyear",TPOS:"disk",TCON:"genre",APIC:"picture",TCOM:"composer",USLT:"lyrics",TSOA:"albumsort",TSOT:"titlesort",TOAL:"originalalbum",TSOP:"artistsort",TSO2:"albumartistsort",TSOC:"composersort",TEXT:"lyricist","TXXX:Writer":"writer",TPE3:"conductor",TPE4:"remixer","IPLS:arranger":"arranger","IPLS:engineer":"engineer","IPLS:producer":"producer","IPLS:DJ-mix":"djmixer","IPLS:mix":"mixer",TPUB:"label",TIT1:"grouping",TIT3:"subtitle",TRCK:"track",TCMP:"compilation",POPM:"rating",TBPM:"bpm",TMED:"media","TXXX:CATALOGNUMBER":"catalognumber","TXXX:MusicBrainz Album Status":"releasestatus","TXXX:MusicBrainz Album Type":"releasetype","TXXX:MusicBrainz Album Release Country":"releasecountry","TXXX:RELEASECOUNTRY":"releasecountry","TXXX:SCRIPT":"script",TLAN:"language",TCOP:"copyright",WCOP:"license",TENC:"encodedby",TSSE:"encodersettings","TXXX:BARCODE":"barcode","TXXX:ISRC":"isrc",TSRC:"isrc","TXXX:ASIN":"asin","TXXX:originalyear":"originalyear","UFID:http://musicbrainz.org":"musicbrainz_recordingid","TXXX:MusicBrainz Release Track Id":"musicbrainz_trackid","TXXX:MusicBrainz Album Id":"musicbrainz_albumid","TXXX:MusicBrainz Artist Id":"musicbrainz_artistid","TXXX:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","TXXX:MusicBrainz Release Group Id":"musicbrainz_releasegroupid","TXXX:MusicBrainz Work Id":"musicbrainz_workid","TXXX:MusicBrainz TRM Id":"musicbrainz_trmid","TXXX:MusicBrainz Disc Id":"musicbrainz_discid","TXXX:ACOUSTID_ID":"acoustid_id","TXXX:Acoustid Id":"acoustid_id","TXXX:Acoustid Fingerprint":"acoustid_fingerprint","TXXX:MusicIP PUID":"musicip_puid","TXXX:MusicMagic Fingerprint":"musicip_fingerprint",WOAR:"website",TDRC:"date",TYER:"year",TDOR:"originaldate","TIPL:arranger":"arranger","TIPL:engineer":"engineer","TIPL:producer":"producer","TIPL:DJ-mix":"djmixer","TIPL:mix":"mixer",TMOO:"mood",SYLT:"lyrics",TSST:"discsubtitle",TKEY:"key",COMM:"comment",TOPE:"originalartist","PRIV:AverageLevel":"averageLevel","PRIV:PeakLevel":"peakLevel","TXXX:DISCOGS_ARTIST_ID":"discogs_artist_id","TXXX:DISCOGS_ARTISTS":"artists","TXXX:DISCOGS_ARTIST_NAME":"artists","TXXX:DISCOGS_ALBUM_ARTISTS":"albumartist","TXXX:DISCOGS_CATALOG":"catalognumber","TXXX:DISCOGS_COUNTRY":"releasecountry","TXXX:DISCOGS_DATE":"originaldate","TXXX:DISCOGS_LABEL":"label","TXXX:DISCOGS_LABEL_ID":"discogs_label_id","TXXX:DISCOGS_MASTER_RELEASE_ID":"discogs_master_release_id","TXXX:DISCOGS_RATING":"discogs_rating","TXXX:DISCOGS_RELEASED":"date","TXXX:DISCOGS_RELEASE_ID":"discogs_release_id","TXXX:DISCOGS_VOTES":"discogs_votes","TXXX:CATALOGID":"catalognumber","TXXX:STYLE":"genre","TXXX:REPLAYGAIN_TRACK_PEAK":"replaygain_track_peak","TXXX:REPLAYGAIN_TRACK_GAIN":"replaygain_track_gain","TXXX:REPLAYGAIN_ALBUM_PEAK":"replaygain_album_peak","TXXX:REPLAYGAIN_ALBUM_GAIN":"replaygain_album_gain","TXXX:MP3GAIN_MINMAX":"replaygain_track_minmax","TXXX:MP3GAIN_ALBUM_MINMAX":"replaygain_album_minmax","TXXX:MP3GAIN_UNDO":"replaygain_undo",MVNM:"movement",MVIN:"movementIndex",PCST:"podcast",TCAT:"category",TDES:"description",TDRL:"releasedate",TGID:"podcastId",TKWD:"keywords",WFED:"podcasturl",GRP1:"grouping"};class Tu extends da{static toRating(e){return{source:e.email,rating:e.rating>0?(e.rating-1)/254*vn.maxRatingScore:void 0}}constructor(){super(["ID3v2.3","ID3v2.4"],hE)}postMap(e,t){switch(e.id){case"UFID":{const n=e.value;n.owner_identifier==="http://musicbrainz.org"&&(e.id+=`:${n.owner_identifier}`,e.value=kc(n.identifier,"latin1"))}break;case"PRIV":{const n=e.value;switch(n.owner_identifier){case"AverageLevel":case"PeakValue":e.id+=`:${n.owner_identifier}`,e.value=n.data.length===4?Tt.get(n.data,0):null,e.value===null&&t.addWarning("Failed to parse PRIV:PeakValue");break;default:t.addWarning(`Unknown PRIV owner-identifier: ${n.data}`)}}break;case"POPM":e.value=Tu.toRating(e.value);break}}}const dE={Title:"title",Author:"artist","WM/AlbumArtist":"albumartist","WM/AlbumTitle":"album","WM/Year":"date","WM/OriginalReleaseTime":"originaldate","WM/OriginalReleaseYear":"originalyear",Description:"comment","WM/TrackNumber":"track","WM/PartOfSet":"disk","WM/Genre":"genre","WM/Composer":"composer","WM/Lyrics":"lyrics","WM/AlbumSortOrder":"albumsort","WM/TitleSortOrder":"titlesort","WM/ArtistSortOrder":"artistsort","WM/AlbumArtistSortOrder":"albumartistsort","WM/ComposerSortOrder":"composersort","WM/Writer":"lyricist","WM/Conductor":"conductor","WM/ModifiedBy":"remixer","WM/Engineer":"engineer","WM/Producer":"producer","WM/DJMixer":"djmixer","WM/Mixer":"mixer","WM/Publisher":"label","WM/ContentGroupDescription":"grouping","WM/SubTitle":"subtitle","WM/SetSubTitle":"discsubtitle","WM/IsCompilation":"compilation","WM/SharedUserRating":"rating","WM/BeatsPerMinute":"bpm","WM/Mood":"mood","WM/Media":"media","WM/CatalogNo":"catalognumber","MusicBrainz/Album Status":"releasestatus","MusicBrainz/Album Type":"releasetype","MusicBrainz/Album Release Country":"releasecountry","WM/Script":"script","WM/Language":"language",Copyright:"copyright",LICENSE:"license","WM/EncodedBy":"encodedby","WM/EncodingSettings":"encodersettings","WM/Barcode":"barcode","WM/ISRC":"isrc","MusicBrainz/Track Id":"musicbrainz_recordingid","MusicBrainz/Release Track Id":"musicbrainz_trackid","MusicBrainz/Album Id":"musicbrainz_albumid","MusicBrainz/Artist Id":"musicbrainz_artistid","MusicBrainz/Album Artist Id":"musicbrainz_albumartistid","MusicBrainz/Release Group Id":"musicbrainz_releasegroupid","MusicBrainz/Work Id":"musicbrainz_workid","MusicBrainz/TRM Id":"musicbrainz_trmid","MusicBrainz/Disc Id":"musicbrainz_discid","Acoustid/Id":"acoustid_id","Acoustid/Fingerprint":"acoustid_fingerprint","MusicIP/PUID":"musicip_puid","WM/ARTISTS":"artists","WM/InitialKey":"key",ASIN:"asin","WM/Work":"work","WM/AuthorURL":"website","WM/Picture":"picture"};class Eu extends vn{static toRating(e){return{rating:Number.parseFloat(e+1)/5}}constructor(){super(["asf"],dE)}postMap(e){switch(e.id){case"WM/SharedUserRating":{const t=e.id.split(":");e.value=Eu.toRating(e.value),e.id=t[0];break}}}}const fE={TT2:"title",TP1:"artist",TP2:"albumartist",TAL:"album",TYE:"year",COM:"comment",TRK:"track",TPA:"disk",TCO:"genre",PIC:"picture",TCM:"composer",TOR:"originaldate",TOT:"originalalbum",TXT:"lyricist",TP3:"conductor",TPB:"label",TT1:"grouping",TT3:"subtitle",TLA:"language",TCR:"copyright",WCP:"license",TEN:"encodedby",TSS:"encodersettings",WAR:"website",PCS:"podcast",TCP:"compilation",TDR:"date",TS2:"albumartistsort",TSA:"albumsort",TSC:"composersort",TSP:"artistsort",TST:"titlesort",WFD:"podcasturl",TBP:"bpm"};class pE extends da{constructor(){super(["ID3v2.2"],fE)}}const mE={Title:"title",Artist:"artist",Artists:"artists","Album Artist":"albumartist",Album:"album",Year:"date",Originalyear:"originalyear",Originaldate:"originaldate",Releasedate:"releasedate",Comment:"comment",Track:"track",Disc:"disk",DISCNUMBER:"disk",Genre:"genre","Cover Art (Front)":"picture","Cover Art (Back)":"picture",Composer:"composer",Lyrics:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",Lyricist:"lyricist",Writer:"writer",Conductor:"conductor",MixArtist:"remixer",Arranger:"arranger",Engineer:"engineer",Producer:"producer",DJMixer:"djmixer",Mixer:"mixer",Label:"label",Grouping:"grouping",Subtitle:"subtitle",DiscSubtitle:"discsubtitle",Compilation:"compilation",BPM:"bpm",Mood:"mood",Media:"media",CatalogNumber:"catalognumber",MUSICBRAINZ_ALBUMSTATUS:"releasestatus",MUSICBRAINZ_ALBUMTYPE:"releasetype",RELEASECOUNTRY:"releasecountry",Script:"script",Language:"language",Copyright:"copyright",LICENSE:"license",EncodedBy:"encodedby",EncoderSettings:"encodersettings",Barcode:"barcode",ISRC:"isrc",ASIN:"asin",musicbrainz_trackid:"musicbrainz_recordingid",musicbrainz_releasetrackid:"musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",Acoustid_Id:"acoustid_id",ACOUSTID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",Weblink:"website",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",MP3GAIN_MINMAX:"replaygain_track_minmax",MP3GAIN_UNDO:"replaygain_undo"};class gE extends da{constructor(){super(["APEv2"],mE)}}const _E={"©nam":"title","©ART":"artist",aART:"albumartist","----:com.apple.iTunes:Band":"albumartist","©alb":"album","©day":"date","©cmt":"comment","©com":"comment",trkn:"track",disk:"disk","©gen":"genre",covr:"picture","©wrt":"composer","©lyr":"lyrics",soal:"albumsort",sonm:"titlesort",soar:"artistsort",soaa:"albumartistsort",soco:"composersort","----:com.apple.iTunes:LYRICIST":"lyricist","----:com.apple.iTunes:CONDUCTOR":"conductor","----:com.apple.iTunes:REMIXER":"remixer","----:com.apple.iTunes:ENGINEER":"engineer","----:com.apple.iTunes:PRODUCER":"producer","----:com.apple.iTunes:DJMIXER":"djmixer","----:com.apple.iTunes:MIXER":"mixer","----:com.apple.iTunes:LABEL":"label","©grp":"grouping","----:com.apple.iTunes:SUBTITLE":"subtitle","----:com.apple.iTunes:DISCSUBTITLE":"discsubtitle",cpil:"compilation",tmpo:"bpm","----:com.apple.iTunes:MOOD":"mood","----:com.apple.iTunes:MEDIA":"media","----:com.apple.iTunes:CATALOGNUMBER":"catalognumber",tvsh:"tvShow",tvsn:"tvSeason",tves:"tvEpisode",sosn:"tvShowSort",tven:"tvEpisodeId",tvnn:"tvNetwork",pcst:"podcast",purl:"podcasturl","----:com.apple.iTunes:MusicBrainz Album Status":"releasestatus","----:com.apple.iTunes:MusicBrainz Album Type":"releasetype","----:com.apple.iTunes:MusicBrainz Album Release Country":"releasecountry","----:com.apple.iTunes:SCRIPT":"script","----:com.apple.iTunes:LANGUAGE":"language",cprt:"copyright","©cpy":"copyright","----:com.apple.iTunes:LICENSE":"license","©too":"encodedby",pgap:"gapless","----:com.apple.iTunes:BARCODE":"barcode","----:com.apple.iTunes:ISRC":"isrc","----:com.apple.iTunes:ASIN":"asin","----:com.apple.iTunes:NOTES":"comment","----:com.apple.iTunes:MusicBrainz Track Id":"musicbrainz_recordingid","----:com.apple.iTunes:MusicBrainz Release Track Id":"musicbrainz_trackid","----:com.apple.iTunes:MusicBrainz Album Id":"musicbrainz_albumid","----:com.apple.iTunes:MusicBrainz Artist Id":"musicbrainz_artistid","----:com.apple.iTunes:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","----:com.apple.iTunes:MusicBrainz Release Group Id":"musicbrainz_releasegroupid","----:com.apple.iTunes:MusicBrainz Work Id":"musicbrainz_workid","----:com.apple.iTunes:MusicBrainz TRM Id":"musicbrainz_trmid","----:com.apple.iTunes:MusicBrainz Disc Id":"musicbrainz_discid","----:com.apple.iTunes:Acoustid Id":"acoustid_id","----:com.apple.iTunes:Acoustid Fingerprint":"acoustid_fingerprint","----:com.apple.iTunes:MusicIP PUID":"musicip_puid","----:com.apple.iTunes:fingerprint":"musicip_fingerprint","----:com.apple.iTunes:replaygain_track_gain":"replaygain_track_gain","----:com.apple.iTunes:replaygain_track_peak":"replaygain_track_peak","----:com.apple.iTunes:replaygain_album_gain":"replaygain_album_gain","----:com.apple.iTunes:replaygain_album_peak":"replaygain_album_peak","----:com.apple.iTunes:replaygain_track_minmax":"replaygain_track_minmax","----:com.apple.iTunes:replaygain_album_minmax":"replaygain_album_minmax","----:com.apple.iTunes:replaygain_undo":"replaygain_undo",gnre:"genre","----:com.apple.iTunes:ALBUMARTISTSORT":"albumartistsort","----:com.apple.iTunes:ARTISTS":"artists","----:com.apple.iTunes:ORIGINALDATE":"originaldate","----:com.apple.iTunes:ORIGINALYEAR":"originalyear","----:com.apple.iTunes:RELEASEDATE":"releasedate",desc:"description",ldes:"longDescription","©mvn":"movement","©mvi":"movementIndex","©mvc":"movementTotal","©wrk":"work",catg:"category",egid:"podcastId",hdvd:"hdVideo",keyw:"keywords",shwm:"showMovement",stik:"stik",rate:"rating"},xE="iTunes";class wd extends da{constructor(){super([xE],_E)}postMap(e,t){switch(e.id){case"rate":e.value={source:void 0,rating:Number.parseFloat(e.value)/100};break}}}const vE={TITLE:"title",ARTIST:"artist",ARTISTS:"artists",ALBUMARTIST:"albumartist","ALBUM ARTIST":"albumartist",ALBUM:"album",DATE:"date",ORIGINALDATE:"originaldate",ORIGINALYEAR:"originalyear",RELEASEDATE:"releasedate",COMMENT:"comment",TRACKNUMBER:"track",DISCNUMBER:"disk",GENRE:"genre",METADATA_BLOCK_PICTURE:"picture",COMPOSER:"composer",LYRICS:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",LYRICIST:"lyricist",WRITER:"writer",CONDUCTOR:"conductor",REMIXER:"remixer",ARRANGER:"arranger",ENGINEER:"engineer",PRODUCER:"producer",DJMIXER:"djmixer",MIXER:"mixer",LABEL:"label",GROUPING:"grouping",SUBTITLE:"subtitle",DISCSUBTITLE:"discsubtitle",TRACKTOTAL:"totaltracks",DISCTOTAL:"totaldiscs",COMPILATION:"compilation",RATING:"rating",BPM:"bpm",KEY:"key",MOOD:"mood",MEDIA:"media",CATALOGNUMBER:"catalognumber",RELEASESTATUS:"releasestatus",RELEASETYPE:"releasetype",RELEASECOUNTRY:"releasecountry",SCRIPT:"script",LANGUAGE:"language",COPYRIGHT:"copyright",LICENSE:"license",ENCODEDBY:"encodedby",ENCODERSETTINGS:"encodersettings",BARCODE:"barcode",ISRC:"isrc",ASIN:"asin",MUSICBRAINZ_TRACKID:"musicbrainz_recordingid",MUSICBRAINZ_RELEASETRACKID:"musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",ACOUSTID_ID:"acoustid_id",ACOUSTID_ID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",WEBSITE:"website",NOTES:"notes",TOTALTRACKS:"totaltracks",TOTALDISCS:"totaldiscs",DISCOGS_ARTIST_ID:"discogs_artist_id",DISCOGS_ARTISTS:"artists",DISCOGS_ARTIST_NAME:"artists",DISCOGS_ALBUM_ARTISTS:"albumartist",DISCOGS_CATALOG:"catalognumber",DISCOGS_COUNTRY:"releasecountry",DISCOGS_DATE:"originaldate",DISCOGS_LABEL:"label",DISCOGS_LABEL_ID:"discogs_label_id",DISCOGS_MASTER_RELEASE_ID:"discogs_master_release_id",DISCOGS_RATING:"discogs_rating",DISCOGS_RELEASED:"date",DISCOGS_RELEASE_ID:"discogs_release_id",DISCOGS_VOTES:"discogs_votes",CATALOGID:"catalognumber",STYLE:"genre",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",REPLAYGAIN_ALBUM_GAIN:"replaygain_album_gain",REPLAYGAIN_ALBUM_PEAK:"replaygain_album_peak",REPLAYGAIN_MINMAX:"replaygain_track_minmax",REPLAYGAIN_ALBUM_MINMAX:"replaygain_album_minmax",REPLAYGAIN_UNDO:"replaygain_undo"};class bo extends vn{static toRating(e,t,n){return{source:e?e.toLowerCase():void 0,rating:Number.parseFloat(t)/n*vn.maxRatingScore}}constructor(){super(["vorbis"],vE)}postMap(e){if(e.id==="RATING")e.value=bo.toRating(void 0,e.value,100);else if(e.id.indexOf("RATING:")===0){const t=e.id.split(":");e.value=bo.toRating(t[1],e.value,1),e.id=t[0]}}}const yE={IART:"artist",ICRD:"date",INAM:"title",TITL:"title",IPRD:"album",ITRK:"track",IPRT:"track",COMM:"comment",ICMT:"comment",ICNT:"releasecountry",GNRE:"genre",IWRI:"writer",RATE:"rating",YEAR:"year",ISFT:"encodedby",CODE:"encodedby",TURL:"website",IGNR:"genre",IENG:"engineer",ITCH:"technician",IMED:"media",IRPD:"album"};class SE extends vn{constructor(){super(["exif"],yE)}}const TE={"segment:title":"title","album:ARTIST":"albumartist","album:ARTISTSORT":"albumartistsort","album:TITLE":"album","album:DATE_RECORDED":"originaldate","album:DATE_RELEASED":"releasedate","album:PART_NUMBER":"disk","album:TOTAL_PARTS":"totaltracks","track:ARTIST":"artist","track:ARTISTSORT":"artistsort","track:TITLE":"title","track:PART_NUMBER":"track","track:MUSICBRAINZ_TRACKID":"musicbrainz_recordingid","track:MUSICBRAINZ_ALBUMID":"musicbrainz_albumid","track:MUSICBRAINZ_ARTISTID":"musicbrainz_artistid","track:PUBLISHER":"label","track:GENRE":"genre","track:ENCODER":"encodedby","track:ENCODER_OPTIONS":"encodersettings","edition:TOTAL_PARTS":"totaldiscs",picture:"picture"};class EE extends da{constructor(){super(["matroska"],TE)}}const bE={NAME:"title",AUTH:"artist","(c) ":"copyright",ANNO:"comment"};class ME extends vn{constructor(){super(["AIFF"],bE)}}class AE{constructor(){this.tagMappers={},[new uE,new pE,new Tu,new wd,new wd,new bo,new gE,new Eu,new SE,new EE,new ME].forEach(e=>{this.registerTagMapper(e)})}mapTag(e,t,n){if(this.tagMappers[e])return this.tagMappers[e].mapGenericTag(t,n);throw new cp(`No generic tag mapper defined for tag-format: ${e}`)}registerTagMapper(e){for(const t of e.tagTypes)this.tagMappers[t]=e}}function wE(i){const e=i.split(`
`),t=[],n=/\[(\d{2}):(\d{2})\.(\d{2})\]/;for(const r of e){const s=r.match(n);if(s){const a=Number.parseInt(s[1],10),l=Number.parseInt(s[2],10),u=Number.parseInt(s[3],10),h=(a*60+l)*1e3+u*10,f=r.replace(n,"").trim();t.push({timestamp:h,text:f})}}return{contentType:zc.lyrics,timeStampFormat:Hc.milliseconds,syncText:t}}const hr=ko("music-metadata:collector"),RE=["matroska","APEv2","vorbis","ID3v2.4","ID3v2.3","ID3v2.2","exif","asf","iTunes","AIFF","ID3v1"];class CE{constructor(e){this.opts=e,this.format={tagTypes:[],trackInfo:[]},this.native={},this.common={track:{no:null,of:null},disk:{no:null,of:null},movementIndex:{no:null,of:null}},this.quality={warnings:[]},this.commonOrigin={},this.originPriority={},this.tagMapper=new AE;let t=1;for(const n of RE)this.originPriority[n]=t++;this.originPriority.artificial=500,this.originPriority.id3v1=600}hasAny(){return Object.keys(this.native).length>0}addStreamInfo(e){hr(`streamInfo: type=${e.type?Bc[e.type]:"?"}, codec=${e.codecName}`),this.format.trackInfo.push(e)}setFormat(e,t){hr(`format: ${e} = ${t}`),this.format[e]=t,this.opts?.observer&&this.opts.observer({metadata:this,tag:{type:"format",id:e,value:t}})}async addTag(e,t,n){hr(`tag ${e}.${t} = ${n}`),this.native[e]||(this.format.tagTypes.push(e),this.native[e]=[]),this.native[e].push({id:t,value:n}),await this.toCommon(e,t,n)}addWarning(e){this.quality.warnings.push({message:e})}async postMap(e,t){switch(t.id){case"artist":if(this.commonOrigin.artist===this.originPriority[e])return this.postMap("artificial",{id:"artists",value:t.value});this.common.artists||this.setGenericTag("artificial",{id:"artists",value:t.value});break;case"artists":if((!this.common.artist||this.commonOrigin.artist===this.originPriority.artificial)&&(!this.common.artists||this.common.artists.indexOf(t.value)===-1)){const n=(this.common.artists||[]).concat([t.value]),s={id:"artist",value:IE(n)};this.setGenericTag("artificial",s)}break;case"picture":return this.postFixPicture(t.value).then(n=>{n!==null&&(t.value=n,this.setGenericTag(e,t))});case"totaltracks":this.common.track.of=vn.toIntOrNull(t.value);return;case"totaldiscs":this.common.disk.of=vn.toIntOrNull(t.value);return;case"movementTotal":this.common.movementIndex.of=vn.toIntOrNull(t.value);return;case"track":case"disk":case"movementIndex":{const n=this.common[t.id].of;this.common[t.id]=vn.normalizeTrack(t.value),this.common[t.id].of=n??this.common[t.id].of;return}case"bpm":case"year":case"originalyear":t.value=Number.parseInt(t.value,10);break;case"date":{const n=Number.parseInt(t.value.substr(0,4),10);Number.isNaN(n)||(this.common.year=n);break}case"discogs_label_id":case"discogs_release_id":case"discogs_master_release_id":case"discogs_artist_id":case"discogs_votes":t.value=typeof t.value=="string"?Number.parseInt(t.value,10):t.value;break;case"replaygain_track_gain":case"replaygain_track_peak":case"replaygain_album_gain":case"replaygain_album_peak":t.value=iE(t.value);break;case"replaygain_track_minmax":t.value=t.value.split(",").map(n=>Number.parseInt(n,10));break;case"replaygain_undo":{const n=t.value.split(",").map(r=>Number.parseInt(r,10));t.value={leftChannel:n[0],rightChannel:n[1]};break}case"gapless":case"compilation":case"podcast":case"showMovement":t.value=t.value==="1"||t.value===1;break;case"isrc":{const n=this.common[t.id];if(n&&n.indexOf(t.value)!==-1)return;break}case"comment":typeof t.value=="string"&&(t.value={text:t.value}),t.value.descriptor==="iTunPGAP"&&this.setGenericTag(e,{id:"gapless",value:t.value.text==="1"});break;case"lyrics":typeof t.value=="string"&&(t.value=wE(t.value));break}t.value!==null&&this.setGenericTag(e,t)}toCommonMetadata(){return{format:this.format,native:this.native,quality:this.quality,common:this.common}}async postFixPicture(e){if(e.data&&e.data.length>0){if(!e.format){const t=await lp(Uint8Array.from(e.data));if(t)e.format=t.mime;else return null}switch(e.format=e.format.toLocaleLowerCase(),e.format){case"image/jpg":e.format="image/jpeg"}return e}return this.addWarning("Empty picture tag found"),null}async toCommon(e,t,n){const r={id:t,value:n},s=this.tagMapper.mapTag(e,r,this);s&&await this.postMap(e,s)}setGenericTag(e,t){hr(`common.${t.id} = ${t.value}`);const n=this.commonOrigin[t.id]||1e3,r=this.originPriority[e];if(oE(t.id))if(r<=n)this.common[t.id]=t.value,this.commonOrigin[t.id]=r;else return hr(`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`);else if(r===n)!lE(t.id)||this.common[t.id].indexOf(t.value)===-1?this.common[t.id].push(t.value):hr(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`);else if(r<n)this.common[t.id]=[t.value],this.commonOrigin[t.id]=r;else return hr(`Ignore native tag (list): ${e}.${t.id} = ${t.value}`);this.opts?.observer&&this.opts.observer({metadata:this,tag:{type:"common",id:t.id,value:t.value}})}}function IE(i){return i.length>2?`${i.slice(0,i.length-1).join(", ")} & ${i[i.length-1]}`:i.join(" & ")}const PE="modulepreload",DE=function(i,e){return new URL(i,e).href},Rd={},Sn=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");r=Promise.allSettled(t.map(h=>{if(h=DE(h,n),h in Rd)return;Rd[h]=!0;const f=h.endsWith(".css"),o=f?'[rel="stylesheet"]':"";if(!!n)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===h&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${o}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":PE,f||(d.as="script"),d.crossOrigin="",d.href=h,u&&d.setAttribute("nonce",u),document.head.appendChild(d),f)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},LE={parserType:"mpeg",extensions:[".mp2",".mp3",".m2a",".aac","aacp"],async load(i,e,t){return new(await Sn(async()=>{const{MpegParser:n}=await import("./MpegParser-DbLfyyBM.js");return{MpegParser:n}},__vite__mapDeps([0,1,2]),import.meta.url)).MpegParser(i,e,t)}},NE={parserType:"apev2",extensions:[".ape"],async load(i,e,t){return new(await Sn(async()=>{const{APEv2Parser:n}=await Promise.resolve().then(()=>ZE);return{APEv2Parser:n}},void 0,import.meta.url)).APEv2Parser(i,e,t)}},UE={parserType:"asf",extensions:[".asf"],async load(i,e,t){return new(await Sn(async()=>{const{AsfParser:n}=await import("./AsfParser-B9WYh5VY.js");return{AsfParser:n}},[],import.meta.url)).AsfParser(i,e,t)}},OE={parserType:"dsdiff",extensions:[".dff"],async load(i,e,t){return new(await Sn(async()=>{const{DsdiffParser:n}=await import("./DsdiffParser-DoWQgsfC.js");return{DsdiffParser:n}},__vite__mapDeps([3,2]),import.meta.url)).DsdiffParser(i,e,t)}},FE={parserType:"aiff",extensions:[".aif","aiff","aifc"],async load(i,e,t){return new(await Sn(async()=>{const{AIFFParser:n}=await import("./AiffParser-DqLeZ1_O.js");return{AIFFParser:n}},__vite__mapDeps([4,2]),import.meta.url)).AIFFParser(i,e,t)}},BE={parserType:"dsf",extensions:[".dsf"],async load(i,e,t){return new(await Sn(async()=>{const{DsfParser:n}=await import("./DsfParser-DQ2um83A.js");return{DsfParser:n}},__vite__mapDeps([5,1,2]),import.meta.url)).DsfParser(i,e,t)}},kE={parserType:"flac",extensions:[".flac"],async load(i,e,t){return new(await Sn(async()=>{const{FlacParser:n}=await import("./FlacParser-DRgPlDW9.js");return{FlacParser:n}},__vite__mapDeps([6,7,1,2]),import.meta.url)).FlacParser(i,e,t)}},zE={parserType:"matroska",extensions:[".mka",".mkv",".mk3d",".mks","webm"],async load(i,e,t){return new(await Sn(async()=>{const{MatroskaParser:n}=await import("./MatroskaParser-Ccib8E9_.js");return{MatroskaParser:n}},[],import.meta.url)).MatroskaParser(i,e,t)}},HE={parserType:"mp4",extensions:[".mp4",".m4a",".m4b",".m4pa","m4v","m4r","3gp"],async load(i,e,t){return new(await Sn(async()=>{const{MP4Parser:n}=await import("./MP4Parser-DKDg6cQe.js");return{MP4Parser:n}},[],import.meta.url)).MP4Parser(i,e,t)}},GE={parserType:"musepack",extensions:[".mpc"],async load(i,e,t){return new(await Sn(async()=>{const{MusepackParser:n}=await import("./MusepackParser-BeIeiHgQ.js");return{MusepackParser:n}},__vite__mapDeps([8,1,2]),import.meta.url)).MusepackParser(i,e,t)}},VE={parserType:"ogg",extensions:[".ogg",".ogv",".oga",".ogm",".ogx",".opus",".spx"],async load(i,e,t){return new(await Sn(async()=>{const{OggParser:n}=await import("./OggParser-I-i1WgjX.js");return{OggParser:n}},__vite__mapDeps([9,7]),import.meta.url)).OggParser(i,e,t)}},WE={parserType:"wavpack",extensions:[".wv",".wvp"],async load(i,e,t){return new(await Sn(async()=>{const{WavPackParser:n}=await import("./WavPackParser-DXV8ly_O.js");return{WavPackParser:n}},[],import.meta.url)).WavPackParser(i,e,t)}},XE={parserType:"riff",extensions:[".wav","wave",".bwf"],async load(i,e,t){return new(await Sn(async()=>{const{WaveParser:n}=await import("./WaveParser-BTcdIsnn.js");return{WaveParser:n}},__vite__mapDeps([10,2]),import.meta.url)).WaveParser(i,e,t)}},gr=ko("music-metadata:parser:factory");function qE(i){const e=HT.parse(i),t=VT.parse(e.type);return{type:t.type,subtype:t.subtype,suffix:t.suffix,parameters:e.parameters}}class YE{constructor(){this.parsers=[],[kE,LE,NE,HE,zE,XE,VE,UE,FE,WE,GE,BE,OE].forEach(e=>this.registerParser(e))}registerParser(e){this.parsers.push(e)}async parse(e,t,n){if(e.supportsRandomAccess()?(gr("tokenizer supports random-access, scanning for appending headers"),await ib(e,n)):gr("tokenizer does not support random-access, cannot scan for appending headers"),!t){const a=new Uint8Array(4100);if(e.fileInfo.mimeType&&(t=this.findLoaderForType(Cd(e.fileInfo.mimeType))),!t&&e.fileInfo.path&&(t=this.findLoaderForExtension(e.fileInfo.path)),!t){gr("Guess parser on content..."),await e.peekBuffer(a,{mayBeLess:!0});const l=await lp(a);if(!l||!l.mime)throw new jT("Failed to determine audio format");if(gr(`Guessed file type is mime=${l.mime}, extension=${l.ext}`),t=this.findLoaderForType(Cd(l.mime)),!t)throw new KT(`Guessed MIME-type not supported: ${l.mime}`)}}gr(`Loading ${t.parserType} parser...`);const r=new CE(n),s=await t.load(r,e,n??{});return gr(`Parser ${t.parserType} loaded`),await s.parse(),r.toCommonMetadata()}findLoaderForExtension(e){if(!e)return;const t=jE(e).toLocaleLowerCase()||e;return this.parsers.find(n=>n.extensions.indexOf(t)!==-1)}findLoaderForType(e){return e?this.parsers.find(t=>t.parserType===e):void 0}}function jE(i){const e=i.lastIndexOf(".");return e===-1?"":i.slice(e)}function Cd(i){let e;if(!i)return;try{e=qE(i)}catch{gr(`Invalid HTTP Content-Type header value: ${i}`);return}const t=e.subtype.indexOf("x-")===0?e.subtype.substring(2):e.subtype;switch(e.type){case"audio":switch(t){case"mp3":case"mpeg":return"mpeg";case"aac":case"aacp":return"mpeg";case"flac":return"flac";case"ape":case"monkeys-audio":return"apev2";case"mp4":case"m4a":return"mp4";case"ogg":case"opus":case"speex":return"ogg";case"ms-wma":case"ms-wmv":case"ms-asf":return"asf";case"aiff":case"aif":case"aifc":return"aiff";case"vnd.wave":case"wav":case"wave":return"riff";case"wavpack":return"wavpack";case"musepack":return"musepack";case"matroska":case"webm":return"matroska";case"dsf":return"dsf";case"amr":return"amr"}break;case"video":switch(t){case"ms-asf":case"ms-wmv":return"asf";case"m4v":case"mp4":return"mp4";case"ogg":return"ogg";case"matroska":case"webm":return"matroska"}break;case"application":switch(t){case"vnd.ms-asf":return"asf";case"ogg":return"ogg"}break}}class hp{constructor(e,t,n){this.metadata=e,this.tokenizer=t,this.options=n}}const KE=/^[\x21-\x7e©][\x20-\x7e\x00()]{3}/,dp={len:4,get:(i,e)=>{const t=sp(i.slice(e,e+dp.len),"latin1");if(!t.match(KE))throw new Su(`FourCC contains invalid characters: ${eE(t)} "${t}"`);return t},put:(i,e,t)=>{const n=IT(t);if(n.length!==4)throw new cp("Invalid length");return i.set(n,e),e+4}};var Zr;(function(i){i[i.text_utf8=0]="text_utf8",i[i.binary=1]="binary",i[i.external_info=2]="external_info",i[i.reserved=3]="reserved"})(Zr||(Zr={}));const Id={len:52,get:(i,e)=>({ID:dp.get(i,e),version:Tt.get(i,e+4)/1e3,descriptorBytes:Tt.get(i,e+8),headerBytes:Tt.get(i,e+12),seekTableBytes:Tt.get(i,e+16),headerDataBytes:Tt.get(i,e+20),apeFrameDataBytes:Tt.get(i,e+24),apeFrameDataBytesHigh:Tt.get(i,e+28),terminatingDataBytes:Tt.get(i,e+32),fileMD5:new tp(16).get(i,e+36)})},$E={len:24,get:(i,e)=>({compressionLevel:Xi.get(i,e),formatFlags:Xi.get(i,e+2),blocksPerFrame:Tt.get(i,e+4),finalFrameBlocks:Tt.get(i,e+8),totalFrames:Tt.get(i,e+12),bitsPerSample:Xi.get(i,e+16),channel:Xi.get(i,e+18),sampleRate:Tt.get(i,e+20)})},Fn={len:32,get:(i,e)=>({ID:new Ot(8,"ascii").get(i,e),version:Tt.get(i,e+8),size:Tt.get(i,e+12),fields:Tt.get(i,e+16),flags:fp(Tt.get(i,e+20))})},Ll={len:8,get:(i,e)=>({size:Tt.get(i,e),flags:fp(Tt.get(i,e+4))})};function fp(i){return{containsHeader:ja(i,31),containsFooter:ja(i,30),isHeader:ja(i,29),readOnly:ja(i,0),dataType:(i&6)>>1}}function ja(i,e){return(i&1<<e)!==0}const dr=ko("music-metadata:parser:APEv2"),Pd="APEv2",Dd="APETAGEX";class lo extends ZT("APEv2"){}class qi extends hp{constructor(){super(...arguments),this.ape={}}static tryParseApeHeader(e,t,n){return new qi(e,t,n).tryParseApeHeader()}static calculateDuration(e){let t=e.totalFrames>1?e.blocksPerFrame*(e.totalFrames-1):0;return t+=e.finalFrameBlocks,t/e.sampleRate}static async findApeFooterOffset(e,t){const n=new Uint8Array(Fn.len),r=e.position;await e.readBuffer(n,{position:t-Fn.len}),e.setPosition(r);const s=Fn.get(n,0);if(s.ID==="APETAGEX")return s.flags.isHeader?dr(`APE Header found at offset=${t-Fn.len}`):(dr(`APE Footer found at offset=${t-Fn.len}`),t-=s.size),{footer:s,offset:t}}static parseTagFooter(e,t,n){const r=Fn.get(t,t.length-Fn.len);if(r.ID!==Dd)throw new lo("Unexpected APEv2 Footer ID preamble value");return fd(t),new qi(e,fd(t),n).parseTags(r)}async tryParseApeHeader(){if(this.tokenizer.fileInfo.size&&this.tokenizer.fileInfo.size-this.tokenizer.position<Fn.len){dr("No APEv2 header found, end-of-file reached");return}const e=await this.tokenizer.peekToken(Fn);if(e.ID===Dd)return await this.tokenizer.ignore(Fn.len),this.parseTags(e);if(dr(`APEv2 header not found at offset=${this.tokenizer.position}`),this.tokenizer.fileInfo.size){const t=this.tokenizer.fileInfo.size-this.tokenizer.position,n=new Uint8Array(t);return await this.tokenizer.readBuffer(n),qi.parseTagFooter(this.metadata,n,this.options)}}async parse(){const e=await this.tokenizer.readToken(Id);if(e.ID!=="MAC ")throw new lo("Unexpected descriptor ID");this.ape.descriptor=e;const t=e.descriptorBytes-Id.len,n=await(t>0?this.parseDescriptorExpansion(t):this.parseHeader());return await this.tokenizer.ignore(n.forwardBytes),this.tryParseApeHeader()}async parseTags(e){const t=new Uint8Array(256);let n=e.size-Fn.len;dr(`Parse APE tags at offset=${this.tokenizer.position}, size=${n}`);for(let r=0;r<e.fields;r++){if(n<Ll.len){this.metadata.addWarning(`APEv2 Tag-header: ${e.fields-r} items remaining, but no more tag data to read.`);break}const s=await this.tokenizer.readToken(Ll);n-=Ll.len+s.size,await this.tokenizer.peekBuffer(t,{length:Math.min(t.length,n)});let a=Md(t,0,t.length);const l=await this.tokenizer.readToken(new Ot(a,"ascii"));switch(await this.tokenizer.ignore(1),n-=l.length+1,s.flags.dataType){case Zr.text_utf8:{const h=(await this.tokenizer.readToken(new Ot(s.size,"utf8"))).split(/\x00/g);await Promise.all(h.map(f=>this.metadata.addTag(Pd,l,f)));break}case Zr.binary:if(this.options.skipCovers)await this.tokenizer.ignore(s.size);else{const u=new Uint8Array(s.size);await this.tokenizer.readBuffer(u),a=Md(u,0,u.length);const h=sp(u.slice(0,a)),f=u.slice(a+1);await this.metadata.addTag(Pd,l,{description:h,data:f})}break;case Zr.external_info:dr(`Ignore external info ${l}`),await this.tokenizer.ignore(s.size);break;case Zr.reserved:dr(`Ignore external info ${l}`),this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${l}"`),await this.tokenizer.ignore(s.size);break}}}async parseDescriptorExpansion(e){return await this.tokenizer.ignore(e),this.parseHeader()}async parseHeader(){const e=await this.tokenizer.readToken($E);if(this.metadata.setFormat("lossless",!0),this.metadata.setFormat("container","Monkey's Audio"),this.metadata.setFormat("bitsPerSample",e.bitsPerSample),this.metadata.setFormat("sampleRate",e.sampleRate),this.metadata.setFormat("numberOfChannels",e.channel),this.metadata.setFormat("duration",qi.calculateDuration(e)),!this.ape.descriptor)throw new lo("Missing APE descriptor");return{forwardBytes:this.ape.descriptor.seekTableBytes+this.ape.descriptor.headerDataBytes+this.ape.descriptor.apeFrameDataBytes+this.ape.descriptor.terminatingDataBytes}}}const ZE=Object.freeze(Object.defineProperty({__proto__:null,APEv2Parser:qi,ApeContentError:lo},Symbol.toStringTag,{value:"Module"})),Ka=ko("music-metadata:parser:ID3v1"),Ld=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise","Alt. Rock","Bass","Soul","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic","Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta Rap","Top 40","Christian Rap","Pop/Funk","Jungle","Native American","Cabaret","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk/Rock","National Folk","Swing","Fast-Fusion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock","Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groove","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle","Duet","Punk Rock","Drum Solo","A Cappella","Euro-House","Dance Hall","Goa","Drum & Bass","Club-House","Hardcore","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangsta Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue","Salsa","Thrash Metal","Anime","JPop","Synthpop","Abstract","Art Rock","Baroque","Bhangra","Big Beat","Breakbeat","Chillout","Downtempo","Dub","EBM","Eclectic","Electro","Electroclash","Emo","Experimental","Garage","Global","IDM","Illbient","Industro-Goth","Jam Band","Krautrock","Leftfield","Lounge","Math Rock","New Romantic","Nu-Breakz","Post-Punk","Post-Rock","Psytrance","Shoegaze","Space Rock","Trop Rock","World Music","Neoclassical","Audiobook","Audio Theatre","Neue Deutsche Welle","Podcast","Indie Rock","G-Funk","Dubstep","Garage Rock","Psybient"],$a={len:128,get:(i,e)=>{const t=new Wr(3).get(i,e);return t==="TAG"?{header:t,title:new Wr(30).get(i,e+3),artist:new Wr(30).get(i,e+33),album:new Wr(30).get(i,e+63),year:new Wr(4).get(i,e+93),comment:new Wr(28).get(i,e+97),zeroByte:Er.get(i,e+127),track:Er.get(i,e+126),genre:Er.get(i,e+127)}:null}};class Wr{constructor(e){this.len=e,this.stringType=new Ot(e,"latin1")}get(e,t){let n=this.stringType.get(e,t);return n=JT(n),n=n.trim(),n.length>0?n:void 0}}class pp extends hp{constructor(e,t,n){super(e,t,n),this.apeHeader=n.apeHeader}static getGenre(e){if(e<Ld.length)return Ld[e]}async parse(){if(!this.tokenizer.fileInfo.size){Ka("Skip checking for ID3v1 because the file-size is unknown");return}this.apeHeader&&(this.tokenizer.ignore(this.apeHeader.offset-this.tokenizer.position),await new qi(this.metadata,this.tokenizer,this.options).parseTags(this.apeHeader.footer));const e=this.tokenizer.fileInfo.size-$a.len;if(this.tokenizer.position>e){Ka("Already consumed the last 128 bytes");return}const t=await this.tokenizer.readToken($a,e);if(t){Ka("ID3v1 header found at: pos=%s",this.tokenizer.fileInfo.size-$a.len);const n=["title","artist","album","comment","track","year"];for(const s of n)t[s]&&t[s]!==""&&await this.addTag(s,t[s]);const r=pp.getGenre(t.genre);r&&await this.addTag("genre",r)}else Ka("ID3v1 header not found at: pos=%s",this.tokenizer.fileInfo.size-$a.len)}async addTag(e,t){await this.metadata.addTag("ID3v1",e,t)}}async function JE(i){if(i.fileInfo.size>=128){const e=new Uint8Array(3),t=i.position;return await i.readBuffer(e,{position:i.fileInfo.size-128}),i.setPosition(t),new TextDecoder("latin1").decode(e)==="TAG"}return!1}const QE="LYRICS200";async function eb(i){const e=i.fileInfo.size;if(e>=143){const t=new Uint8Array(15),n=i.position;await i.readBuffer(t,{position:e-143}),i.setPosition(n);const r=new TextDecoder("latin1").decode(t);if(r.slice(6)===QE)return Number.parseInt(r.slice(0,6),10)+15}return 0}async function mp(i,e={}){const t={mimeType:i.type,size:i.size};return i instanceof File&&(t.path=i.name),tb(i.stream(),t,e)}async function tb(i,e,t={}){const n=jS(i,{fileInfo:typeof e=="string"?{mimeType:e}:e});try{return await nb(n,t)}finally{await n.close()}}function nb(i,e){return new YE().parse(i,void 0,e)}async function ib(i,e={}){let t=i.fileInfo.size;if(await JE(i)){t-=128;const n=await eb(i);t-=n}e.apeHeader=await qi.findApeFooterOffset(i,t)}const rb={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Es{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sb=new Fo(-1,1,1,-1,0,1);class ab extends qn{constructor(){super(),this.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xn([0,2,0,0,2,0],2))}}const ob=new ab;class bu{constructor(e){this._mesh=new an(ob,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lb extends Es{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new Pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nd extends Es{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class cb extends Es{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ub{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lb(rb),this.copyPass.material.blending=Qn,this.clock=new kf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const l=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Nd!==void 0&&(a instanceof Nd?n=!0:a instanceof cb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hb extends Es{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const db={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class fb extends Es{constructor(){super();const e=db;this.uniforms=Uo.clone(e.uniforms),this.material=new Rg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new bu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ef?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===tf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const pb={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class mb extends Es{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new Mi(1,1,{minFilter:Bt,magFilter:Bt,type:Mr}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Lf,this.materialDepth.depthPacking=_f,this.materialDepth.blending=Qn;const l=pb,u=Uo.clone(l.uniforms);u.tDepth.value=this.renderTargetDepth.texture,u.focus.value=r,u.aspect.value=t.aspect,u.aperture.value=s,u.maxblur.value=a,u.nearClip.value=t.near,u.farClip.value=t.far,this.materialBokeh=new Pn({defines:Object.assign({},l.defines),uniforms:u,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=u,this.fsQuad=new bu(this.materialBokeh),this._oldClearColor=new Pe}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ud(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function ii(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ud(Object(t),!0).forEach(function(n){gb(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Ud(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function co(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?co=function(e){return typeof e}:co=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},co(i)}function gb(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Ai(){return Ai=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Ai.apply(this,arguments)}function _b(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function xb(i,e){if(i==null)return{};var t=_b(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}var vb="1.15.6";function Ti(i){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(i)}var Ri=Ti(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),fa=Ti(/Edge/i),Od=Ti(/firefox/i),$s=Ti(/safari/i)&&!Ti(/chrome/i)&&!Ti(/android/i),Mu=Ti(/iP(ad|od|hone)/i),gp=Ti(/chrome/i)&&Ti(/android/i),_p={capture:!1,passive:!1};function Xe(i,e,t){i.addEventListener(e,t,!Ri&&_p)}function We(i,e,t){i.removeEventListener(e,t,!Ri&&_p)}function Mo(i,e){if(e){if(e[0]===">"&&(e=e.substring(1)),i)try{if(i.matches)return i.matches(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e)}catch{return!1}return!1}}function xp(i){return i.host&&i!==document&&i.host.nodeType?i.host:i.parentNode}function kn(i,e,t,n){if(i){t=t||document;do{if(e!=null&&(e[0]===">"?i.parentNode===t&&Mo(i,e):Mo(i,e))||n&&i===t)return i;if(i===t)break}while(i=xp(i))}return null}var Fd=/\s+/g;function mn(i,e,t){if(i&&e)if(i.classList)i.classList[t?"add":"remove"](e);else{var n=(" "+i.className+" ").replace(Fd," ").replace(" "+e+" "," ");i.className=(n+(t?" "+e:"")).replace(Fd," ")}}function Ae(i,e,t){var n=i&&i.style;if(n){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(i,""):i.currentStyle&&(t=i.currentStyle),e===void 0?t:t[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=t+(typeof t=="string"?"":"px")}}function ss(i,e){var t="";if(typeof i=="string")t=i;else do{var n=Ae(i,"transform");n&&n!=="none"&&(t=n+" "+t)}while(!e&&(i=i.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(t)}function vp(i,e,t){if(i){var n=i.getElementsByTagName(e),r=0,s=n.length;if(t)for(;r<s;r++)t(n[r],r);return n}return[]}function ti(){var i=document.scrollingElement;return i||document.documentElement}function wt(i,e,t,n,r){if(!(!i.getBoundingClientRect&&i!==window)){var s,a,l,u,h,f,o;if(i!==window&&i.parentNode&&i!==ti()?(s=i.getBoundingClientRect(),a=s.top,l=s.left,u=s.bottom,h=s.right,f=s.height,o=s.width):(a=0,l=0,u=window.innerHeight,h=window.innerWidth,f=window.innerHeight,o=window.innerWidth),(e||t)&&i!==window&&(r=r||i.parentNode,!Ri))do if(r&&r.getBoundingClientRect&&(Ae(r,"transform")!=="none"||t&&Ae(r,"position")!=="static")){var c=r.getBoundingClientRect();a-=c.top+parseInt(Ae(r,"border-top-width")),l-=c.left+parseInt(Ae(r,"border-left-width")),u=a+s.height,h=l+s.width;break}while(r=r.parentNode);if(n&&i!==window){var d=ss(r||i),m=d&&d.a,_=d&&d.d;d&&(a/=_,l/=m,o/=m,f/=_,u=a+f,h=l+o)}return{top:a,left:l,bottom:u,right:h,width:o,height:f}}}function Bd(i,e,t){for(var n=Yi(i,!0),r=wt(i)[e];n;){var s=wt(n)[t],a=void 0;if(a=r>=s,!a)return n;if(n===ti())break;n=Yi(n,!1)}return!1}function _s(i,e,t,n){for(var r=0,s=0,a=i.children;s<a.length;){if(a[s].style.display!=="none"&&a[s]!==we.ghost&&(n||a[s]!==we.dragged)&&kn(a[s],t.draggable,i,!1)){if(r===e)return a[s];r++}s++}return null}function Au(i,e){for(var t=i.lastElementChild;t&&(t===we.ghost||Ae(t,"display")==="none"||e&&!Mo(t,e));)t=t.previousElementSibling;return t||null}function Rn(i,e){var t=0;if(!i||!i.parentNode)return-1;for(;i=i.previousElementSibling;)i.nodeName.toUpperCase()!=="TEMPLATE"&&i!==we.clone&&(!e||Mo(i,e))&&t++;return t}function kd(i){var e=0,t=0,n=ti();if(i)do{var r=ss(i),s=r.a,a=r.d;e+=i.scrollLeft*s,t+=i.scrollTop*a}while(i!==n&&(i=i.parentNode));return[e,t]}function yb(i,e){for(var t in i)if(i.hasOwnProperty(t)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===i[t][n])return Number(t)}return-1}function Yi(i,e){if(!i||!i.getBoundingClientRect)return ti();var t=i,n=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var r=Ae(t);if(t.clientWidth<t.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return ti();if(n||e)return t;n=!0}}while(t=t.parentNode);return ti()}function Sb(i,e){if(i&&e)for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);return i}function Nl(i,e){return Math.round(i.top)===Math.round(e.top)&&Math.round(i.left)===Math.round(e.left)&&Math.round(i.height)===Math.round(e.height)&&Math.round(i.width)===Math.round(e.width)}var Zs;function yp(i,e){return function(){if(!Zs){var t=arguments,n=this;t.length===1?i.call(n,t[0]):i.apply(n,t),Zs=setTimeout(function(){Zs=void 0},e)}}}function Tb(){clearTimeout(Zs),Zs=void 0}function Sp(i,e,t){i.scrollLeft+=e,i.scrollTop+=t}function Tp(i){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(i).cloneNode(!0):t?t(i).clone(!0)[0]:i.cloneNode(!0)}function Ep(i,e,t){var n={};return Array.from(i.children).forEach(function(r){var s,a,l,u;if(!(!kn(r,e.draggable,i,!1)||r.animated||r===t)){var h=wt(r);n.left=Math.min((s=n.left)!==null&&s!==void 0?s:1/0,h.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,h.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,h.right),n.bottom=Math.max((u=n.bottom)!==null&&u!==void 0?u:-1/0,h.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var sn="Sortable"+new Date().getTime();function Eb(){var i=[],e;return{captureAnimationState:function(){if(i=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(r){if(!(Ae(r,"display")==="none"||r===we.ghost)){i.push({target:r,rect:wt(r)});var s=ii({},i[i.length-1].rect);if(r.thisAnimationDuration){var a=ss(r,!0);a&&(s.top-=a.f,s.left-=a.e)}r.fromRect=s}})}},addAnimationState:function(n){i.push(n)},removeAnimationState:function(n){i.splice(yb(i,{target:n}),1)},animateAll:function(n){var r=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var s=!1,a=0;i.forEach(function(l){var u=0,h=l.target,f=h.fromRect,o=wt(h),c=h.prevFromRect,d=h.prevToRect,m=l.rect,_=ss(h,!0);_&&(o.top-=_.f,o.left-=_.e),h.toRect=o,h.thisAnimationDuration&&Nl(c,o)&&!Nl(f,o)&&(m.top-o.top)/(m.left-o.left)===(f.top-o.top)/(f.left-o.left)&&(u=Mb(m,c,d,r.options)),Nl(o,f)||(h.prevFromRect=f,h.prevToRect=o,u||(u=r.options.animation),r.animate(h,m,o,u)),u&&(s=!0,a=Math.max(a,u),clearTimeout(h.animationResetTimer),h.animationResetTimer=setTimeout(function(){h.animationTime=0,h.prevFromRect=null,h.fromRect=null,h.prevToRect=null,h.thisAnimationDuration=null},u),h.thisAnimationDuration=u)}),clearTimeout(e),s?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),i=[]},animate:function(n,r,s,a){if(a){Ae(n,"transition",""),Ae(n,"transform","");var l=ss(this.el),u=l&&l.a,h=l&&l.d,f=(r.left-s.left)/(u||1),o=(r.top-s.top)/(h||1);n.animatingX=!!f,n.animatingY=!!o,Ae(n,"transform","translate3d("+f+"px,"+o+"px,0)"),this.forRepaintDummy=bb(n),Ae(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),Ae(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){Ae(n,"transition",""),Ae(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function bb(i){return i.offsetWidth}function Mb(i,e,t,n){return Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*n.animation}var Xr=[],Ul={initializeByDefault:!0},pa={mount:function(e){for(var t in Ul)Ul.hasOwnProperty(t)&&!(t in e)&&(e[t]=Ul[t]);Xr.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Xr.push(e)},pluginEvent:function(e,t,n){var r=this;this.eventCanceled=!1,n.cancel=function(){r.eventCanceled=!0};var s=e+"Global";Xr.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][s]&&t[a.pluginName][s](ii({sortable:t},n)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](ii({sortable:t},n)))})},initializePlugins:function(e,t,n,r){Xr.forEach(function(l){var u=l.pluginName;if(!(!e.options[u]&&!l.initializeByDefault)){var h=new l(e,t,e.options);h.sortable=e,h.options=e.options,e[u]=h,Ai(n,h.defaults)}});for(var s in e.options)if(e.options.hasOwnProperty(s)){var a=this.modifyOption(e,s,e.options[s]);typeof a<"u"&&(e.options[s]=a)}},getEventProperties:function(e,t){var n={};return Xr.forEach(function(r){typeof r.eventProperties=="function"&&Ai(n,r.eventProperties.call(t[r.pluginName],e))}),n},modifyOption:function(e,t,n){var r;return Xr.forEach(function(s){e[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[t]=="function"&&(r=s.optionListeners[t].call(e[s.pluginName],n))}),r}};function Ab(i){var e=i.sortable,t=i.rootEl,n=i.name,r=i.targetEl,s=i.cloneEl,a=i.toEl,l=i.fromEl,u=i.oldIndex,h=i.newIndex,f=i.oldDraggableIndex,o=i.newDraggableIndex,c=i.originalEvent,d=i.putSortable,m=i.extraEventProperties;if(e=e||t&&t[sn],!!e){var _,g=e.options,p="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Ri&&!fa?_=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(_=document.createEvent("Event"),_.initEvent(n,!0,!0)),_.to=a||t,_.from=l||t,_.item=r||t,_.clone=s,_.oldIndex=u,_.newIndex=h,_.oldDraggableIndex=f,_.newDraggableIndex=o,_.originalEvent=c,_.pullMode=d?d.lastPutMode:void 0;var S=ii(ii({},m),pa.getEventProperties(n,e));for(var b in S)_[b]=S[b];t&&t.dispatchEvent(_),g[p]&&g[p].call(e,_)}}var wb=["evt"],rn=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.evt,s=xb(n,wb);pa.pluginEvent.bind(we)(e,t,ii({dragEl:ee,parentEl:vt,ghostEl:Le,rootEl:ft,nextEl:_r,lastDownEl:uo,cloneEl:mt,cloneHidden:Hi,dragStarted:zs,putSortable:Ut,activeSortable:we.active,originalEvent:r,oldIndex:Jr,oldDraggableIndex:Js,newIndex:gn,newDraggableIndex:Bi,hideGhostForTarget:wp,unhideGhostForTarget:Rp,cloneNowHidden:function(){Hi=!0},cloneNowShown:function(){Hi=!1},dispatchSortableEvent:function(l){Xt({sortable:t,name:l,originalEvent:r})}},s))};function Xt(i){Ab(ii({putSortable:Ut,cloneEl:mt,targetEl:ee,rootEl:ft,oldIndex:Jr,oldDraggableIndex:Js,newIndex:gn,newDraggableIndex:Bi},i))}var ee,vt,Le,ft,_r,uo,mt,Hi,Jr,gn,Js,Bi,Za,Ut,jr=!1,Ao=!1,wo=[],fr,Bn,Ol,Fl,zd,Hd,zs,qr,Qs,ea=!1,Ja=!1,ho,Gt,Bl=[],Gc=!1,Ro=[],zo=typeof document<"u",Qa=Mu,Gd=fa||Ri?"cssFloat":"float",Rb=zo&&!gp&&!Mu&&"draggable"in document.createElement("div"),bp=function(){if(zo){if(Ri)return!1;var i=document.createElement("x");return i.style.cssText="pointer-events:auto",i.style.pointerEvents==="auto"}}(),Mp=function(e,t){var n=Ae(e),r=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),s=_s(e,0,t),a=_s(e,1,t),l=s&&Ae(s),u=a&&Ae(a),h=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+wt(s).width,f=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+wt(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&l.float&&l.float!=="none"){var o=l.float==="left"?"left":"right";return a&&(u.clear==="both"||u.clear===o)?"vertical":"horizontal"}return s&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||h>=r&&n[Gd]==="none"||a&&n[Gd]==="none"&&h+f>r)?"vertical":"horizontal"},Cb=function(e,t,n){var r=n?e.left:e.top,s=n?e.right:e.bottom,a=n?e.width:e.height,l=n?t.left:t.top,u=n?t.right:t.bottom,h=n?t.width:t.height;return r===l||s===u||r+a/2===l+h/2},Ib=function(e,t){var n;return wo.some(function(r){var s=r[sn].options.emptyInsertThreshold;if(!(!s||Au(r))){var a=wt(r),l=e>=a.left-s&&e<=a.right+s,u=t>=a.top-s&&t<=a.bottom+s;if(l&&u)return n=r}}),n},Ap=function(e){function t(s,a){return function(l,u,h,f){var o=l.options.group.name&&u.options.group.name&&l.options.group.name===u.options.group.name;if(s==null&&(a||o))return!0;if(s==null||s===!1)return!1;if(a&&s==="clone")return s;if(typeof s=="function")return t(s(l,u,h,f),a)(l,u,h,f);var c=(a?l:u).options.group.name;return s===!0||typeof s=="string"&&s===c||s.join&&s.indexOf(c)>-1}}var n={},r=e.group;(!r||co(r)!="object")&&(r={name:r}),n.name=r.name,n.checkPull=t(r.pull,!0),n.checkPut=t(r.put),n.revertClone=r.revertClone,e.group=n},wp=function(){!bp&&Le&&Ae(Le,"display","none")},Rp=function(){!bp&&Le&&Ae(Le,"display","")};zo&&!gp&&document.addEventListener("click",function(i){if(Ao)return i.preventDefault(),i.stopPropagation&&i.stopPropagation(),i.stopImmediatePropagation&&i.stopImmediatePropagation(),Ao=!1,!1},!0);var pr=function(e){if(ee){e=e.touches?e.touches[0]:e;var t=Ib(e.clientX,e.clientY);if(t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[sn]._onDragOver(n)}}},Pb=function(e){ee&&ee.parentNode[sn]._isOutsideThisEl(e.target)};function we(i,e){if(!(i&&i.nodeType&&i.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));this.el=i,this.options=e=Ai({},e),i[sn]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(i.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Mp(i,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:we.supportPointer!==!1&&"PointerEvent"in window&&(!$s||Mu),emptyInsertThreshold:5};pa.initializePlugins(this,i,t);for(var n in t)!(n in e)&&(e[n]=t[n]);Ap(e);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=e.forceFallback?!1:Rb,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Xe(i,"pointerdown",this._onTapStart):(Xe(i,"mousedown",this._onTapStart),Xe(i,"touchstart",this._onTapStart)),this.nativeDraggable&&(Xe(i,"dragover",this),Xe(i,"dragenter",this)),wo.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Ai(this,Eb())}we.prototype={constructor:we,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(qr=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,ee):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,r=this.options,s=r.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,u=(l||e).target,h=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||u,f=r.filter;if(kb(n),!ee&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||r.disabled)&&!h.isContentEditable&&!(!this.nativeDraggable&&$s&&u&&u.tagName.toUpperCase()==="SELECT")&&(u=kn(u,r.draggable,n,!1),!(u&&u.animated)&&uo!==u)){if(Jr=Rn(u),Js=Rn(u,r.draggable),typeof f=="function"){if(f.call(this,e,u,this)){Xt({sortable:t,rootEl:h,name:"filter",targetEl:u,toEl:n,fromEl:n}),rn("filter",t,{evt:e}),s&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(o){if(o=kn(h,o.trim(),n,!1),o)return Xt({sortable:t,rootEl:o,name:"filter",targetEl:u,fromEl:n,toEl:n}),rn("filter",t,{evt:e}),!0}),f)){s&&e.preventDefault();return}r.handle&&!kn(h,r.handle,n,!1)||this._prepareDragStart(e,l,u)}}},_prepareDragStart:function(e,t,n){var r=this,s=r.el,a=r.options,l=s.ownerDocument,u;if(n&&!ee&&n.parentNode===s){var h=wt(n);if(ft=s,ee=n,vt=ee.parentNode,_r=ee.nextSibling,uo=n,Za=a.group,we.dragged=ee,fr={target:ee,clientX:(t||e).clientX,clientY:(t||e).clientY},zd=fr.clientX-h.left,Hd=fr.clientY-h.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,ee.style["will-change"]="all",u=function(){if(rn("delayEnded",r,{evt:e}),we.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!Od&&r.nativeDraggable&&(ee.draggable=!0),r._triggerDragStart(e,t),Xt({sortable:r,name:"choose",originalEvent:e}),mn(ee,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){vp(ee,f.trim(),kl)}),Xe(l,"dragover",pr),Xe(l,"mousemove",pr),Xe(l,"touchmove",pr),a.supportPointer?(Xe(l,"pointerup",r._onDrop),!this.nativeDraggable&&Xe(l,"pointercancel",r._onDrop)):(Xe(l,"mouseup",r._onDrop),Xe(l,"touchend",r._onDrop),Xe(l,"touchcancel",r._onDrop)),Od&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ee.draggable=!0),rn("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(fa||Ri))){if(we.eventCanceled){this._onDrop();return}a.supportPointer?(Xe(l,"pointerup",r._disableDelayedDrag),Xe(l,"pointercancel",r._disableDelayedDrag)):(Xe(l,"mouseup",r._disableDelayedDrag),Xe(l,"touchend",r._disableDelayedDrag),Xe(l,"touchcancel",r._disableDelayedDrag)),Xe(l,"mousemove",r._delayedDragTouchMoveHandler),Xe(l,"touchmove",r._delayedDragTouchMoveHandler),a.supportPointer&&Xe(l,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(u,a.delay)}else u()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ee&&kl(ee),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;We(e,"mouseup",this._disableDelayedDrag),We(e,"touchend",this._disableDelayedDrag),We(e,"touchcancel",this._disableDelayedDrag),We(e,"pointerup",this._disableDelayedDrag),We(e,"pointercancel",this._disableDelayedDrag),We(e,"mousemove",this._delayedDragTouchMoveHandler),We(e,"touchmove",this._delayedDragTouchMoveHandler),We(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?Xe(document,"pointermove",this._onTouchMove):t?Xe(document,"touchmove",this._onTouchMove):Xe(document,"mousemove",this._onTouchMove):(Xe(ee,"dragend",this),Xe(ft,"dragstart",this._onDragStart));try{document.selection?fo(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(jr=!1,ft&&ee){rn("dragStarted",this,{evt:t}),this.nativeDraggable&&Xe(document,"dragover",Pb);var n=this.options;!e&&mn(ee,n.dragClass,!1),mn(ee,n.ghostClass,!0),we.active=this,e&&this._appendGhost(),Xt({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Bn){this._lastX=Bn.clientX,this._lastY=Bn.clientY,wp();for(var e=document.elementFromPoint(Bn.clientX,Bn.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Bn.clientX,Bn.clientY),e!==t);)t=e;if(ee.parentNode[sn]._isOutsideThisEl(e),t)do{if(t[sn]){var n=void 0;if(n=t[sn]._onDragOver({clientX:Bn.clientX,clientY:Bn.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=xp(t));Rp()}},_onTouchMove:function(e){if(fr){var t=this.options,n=t.fallbackTolerance,r=t.fallbackOffset,s=e.touches?e.touches[0]:e,a=Le&&ss(Le,!0),l=Le&&a&&a.a,u=Le&&a&&a.d,h=Qa&&Gt&&kd(Gt),f=(s.clientX-fr.clientX+r.x)/(l||1)+(h?h[0]-Bl[0]:0)/(l||1),o=(s.clientY-fr.clientY+r.y)/(u||1)+(h?h[1]-Bl[1]:0)/(u||1);if(!we.active&&!jr){if(n&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(Le){a?(a.e+=f-(Ol||0),a.f+=o-(Fl||0)):a={a:1,b:0,c:0,d:1,e:f,f:o};var c="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");Ae(Le,"webkitTransform",c),Ae(Le,"mozTransform",c),Ae(Le,"msTransform",c),Ae(Le,"transform",c),Ol=f,Fl=o,Bn=s}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!Le){var e=this.options.fallbackOnBody?document.body:ft,t=wt(ee,!0,Qa,!0,e),n=this.options;if(Qa){for(Gt=e;Ae(Gt,"position")==="static"&&Ae(Gt,"transform")==="none"&&Gt!==document;)Gt=Gt.parentNode;Gt!==document.body&&Gt!==document.documentElement?(Gt===document&&(Gt=ti()),t.top+=Gt.scrollTop,t.left+=Gt.scrollLeft):Gt=ti(),Bl=kd(Gt)}Le=ee.cloneNode(!0),mn(Le,n.ghostClass,!1),mn(Le,n.fallbackClass,!0),mn(Le,n.dragClass,!0),Ae(Le,"transition",""),Ae(Le,"transform",""),Ae(Le,"box-sizing","border-box"),Ae(Le,"margin",0),Ae(Le,"top",t.top),Ae(Le,"left",t.left),Ae(Le,"width",t.width),Ae(Le,"height",t.height),Ae(Le,"opacity","0.8"),Ae(Le,"position",Qa?"absolute":"fixed"),Ae(Le,"zIndex","100000"),Ae(Le,"pointerEvents","none"),we.ghost=Le,e.appendChild(Le),Ae(Le,"transform-origin",zd/parseInt(Le.style.width)*100+"% "+Hd/parseInt(Le.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,r=e.dataTransfer,s=n.options;if(rn("dragStart",this,{evt:e}),we.eventCanceled){this._onDrop();return}rn("setupClone",this),we.eventCanceled||(mt=Tp(ee),mt.removeAttribute("id"),mt.draggable=!1,mt.style["will-change"]="",this._hideClone(),mn(mt,this.options.chosenClass,!1),we.clone=mt),n.cloneId=fo(function(){rn("clone",n),!we.eventCanceled&&(n.options.removeCloneOnHide||ft.insertBefore(mt,ee),n._hideClone(),Xt({sortable:n,name:"clone"}))}),!t&&mn(ee,s.dragClass,!0),t?(Ao=!0,n._loopId=setInterval(n._emulateDragOver,50)):(We(document,"mouseup",n._onDrop),We(document,"touchend",n._onDrop),We(document,"touchcancel",n._onDrop),r&&(r.effectAllowed="move",s.setData&&s.setData.call(n,r,ee)),Xe(document,"drop",n),Ae(ee,"transform","translateZ(0)")),jr=!0,n._dragStartId=fo(n._dragStarted.bind(n,t,e)),Xe(document,"selectstart",n),zs=!0,window.getSelection().removeAllRanges(),$s&&Ae(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,n=e.target,r,s,a,l=this.options,u=l.group,h=we.active,f=Za===u,o=l.sort,c=Ut||h,d,m=this,_=!1;if(Gc)return;function g(z,ie){rn(z,m,ii({evt:e,isOwner:f,axis:d?"vertical":"horizontal",revert:a,dragRect:r,targetRect:s,canSort:o,fromSortable:c,target:n,completed:S,onMove:function(_e,ze){return eo(ft,t,ee,r,_e,wt(_e),e,ze)},changed:b},ie))}function p(){g("dragOverAnimationCapture"),m.captureAnimationState(),m!==c&&c.captureAnimationState()}function S(z){return g("dragOverCompleted",{insertion:z}),z&&(f?h._hideClone():h._showClone(m),m!==c&&(mn(ee,Ut?Ut.options.ghostClass:h.options.ghostClass,!1),mn(ee,l.ghostClass,!0)),Ut!==m&&m!==we.active?Ut=m:m===we.active&&Ut&&(Ut=null),c===m&&(m._ignoreWhileAnimating=n),m.animateAll(function(){g("dragOverAnimationComplete"),m._ignoreWhileAnimating=null}),m!==c&&(c.animateAll(),c._ignoreWhileAnimating=null)),(n===ee&&!ee.animated||n===t&&!n.animated)&&(qr=null),!l.dragoverBubble&&!e.rootEl&&n!==document&&(ee.parentNode[sn]._isOutsideThisEl(e.target),!z&&pr(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),_=!0}function b(){gn=Rn(ee),Bi=Rn(ee,l.draggable),Xt({sortable:m,name:"change",toEl:t,newIndex:gn,newDraggableIndex:Bi,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=kn(n,l.draggable,t,!0),g("dragOver"),we.eventCanceled)return _;if(ee.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||m._ignoreWhileAnimating===n)return S(!1);if(Ao=!1,h&&!l.disabled&&(f?o||(a=vt!==ft):Ut===this||(this.lastPutMode=Za.checkPull(this,h,ee,e))&&u.checkPut(this,h,ee,e))){if(d=this._getDirection(e,n)==="vertical",r=wt(ee),g("dragOverValid"),we.eventCanceled)return _;if(a)return vt=ft,p(),this._hideClone(),g("revert"),we.eventCanceled||(_r?ft.insertBefore(ee,_r):ft.appendChild(ee)),S(!0);var y=Au(t,l.draggable);if(!y||Ub(e,d,this)&&!y.animated){if(y===ee)return S(!1);if(y&&t===e.target&&(n=y),n&&(s=wt(n)),eo(ft,t,ee,r,n,s,e,!!n)!==!1)return p(),y&&y.nextSibling?t.insertBefore(ee,y.nextSibling):t.appendChild(ee),vt=t,b(),S(!0)}else if(y&&Nb(e,d,this)){var C=_s(t,0,l,!0);if(C===ee)return S(!1);if(n=C,s=wt(n),eo(ft,t,ee,r,n,s,e,!1)!==!1)return p(),t.insertBefore(ee,C),vt=t,b(),S(!0)}else if(n.parentNode===t){s=wt(n);var A=0,w,N=ee.parentNode!==t,T=!Cb(ee.animated&&ee.toRect||r,n.animated&&n.toRect||s,d),E=d?"top":"left",I=Bd(n,"top","top")||Bd(ee,"top","top"),W=I?I.scrollTop:void 0;qr!==n&&(w=s[E],ea=!1,Ja=!T&&l.invertSwap||N),A=Ob(e,n,s,d,T?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,Ja,qr===n);var B;if(A!==0){var H=Rn(ee);do H-=A,B=vt.children[H];while(B&&(Ae(B,"display")==="none"||B===Le))}if(A===0||B===n)return S(!1);qr=n,Qs=A;var K=n.nextElementSibling,V=!1;V=A===1;var J=eo(ft,t,ee,r,n,s,e,V);if(J!==!1)return(J===1||J===-1)&&(V=J===1),Gc=!0,setTimeout(Lb,30),p(),V&&!K?t.appendChild(ee):n.parentNode.insertBefore(ee,V?K:n),I&&Sp(I,0,W-I.scrollTop),vt=ee.parentNode,w!==void 0&&!Ja&&(ho=Math.abs(w-wt(n)[E])),b(),S(!0)}if(t.contains(ee))return S(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){We(document,"mousemove",this._onTouchMove),We(document,"touchmove",this._onTouchMove),We(document,"pointermove",this._onTouchMove),We(document,"dragover",pr),We(document,"mousemove",pr),We(document,"touchmove",pr)},_offUpEvents:function(){var e=this.el.ownerDocument;We(e,"mouseup",this._onDrop),We(e,"touchend",this._onDrop),We(e,"pointerup",this._onDrop),We(e,"pointercancel",this._onDrop),We(e,"touchcancel",this._onDrop),We(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;if(gn=Rn(ee),Bi=Rn(ee,n.draggable),rn("drop",this,{evt:e}),vt=ee&&ee.parentNode,gn=Rn(ee),Bi=Rn(ee,n.draggable),we.eventCanceled){this._nulling();return}jr=!1,Ja=!1,ea=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Vc(this.cloneId),Vc(this._dragStartId),this.nativeDraggable&&(We(document,"drop",this),We(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),$s&&Ae(document.body,"user-select",""),Ae(ee,"transform",""),e&&(zs&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),Le&&Le.parentNode&&Le.parentNode.removeChild(Le),(ft===vt||Ut&&Ut.lastPutMode!=="clone")&&mt&&mt.parentNode&&mt.parentNode.removeChild(mt),ee&&(this.nativeDraggable&&We(ee,"dragend",this),kl(ee),ee.style["will-change"]="",zs&&!jr&&mn(ee,Ut?Ut.options.ghostClass:this.options.ghostClass,!1),mn(ee,this.options.chosenClass,!1),Xt({sortable:this,name:"unchoose",toEl:vt,newIndex:null,newDraggableIndex:null,originalEvent:e}),ft!==vt?(gn>=0&&(Xt({rootEl:vt,name:"add",toEl:vt,fromEl:ft,originalEvent:e}),Xt({sortable:this,name:"remove",toEl:vt,originalEvent:e}),Xt({rootEl:vt,name:"sort",toEl:vt,fromEl:ft,originalEvent:e}),Xt({sortable:this,name:"sort",toEl:vt,originalEvent:e})),Ut&&Ut.save()):gn!==Jr&&gn>=0&&(Xt({sortable:this,name:"update",toEl:vt,originalEvent:e}),Xt({sortable:this,name:"sort",toEl:vt,originalEvent:e})),we.active&&((gn==null||gn===-1)&&(gn=Jr,Bi=Js),Xt({sortable:this,name:"end",toEl:vt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){rn("nulling",this),ft=ee=vt=Le=_r=mt=uo=Hi=fr=Bn=zs=gn=Bi=Jr=Js=qr=Qs=Ut=Za=we.dragged=we.ghost=we.clone=we.active=null,Ro.forEach(function(e){e.checked=!0}),Ro.length=Ol=Fl=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":ee&&(this._onDragOver(e),Db(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,n=this.el.children,r=0,s=n.length,a=this.options;r<s;r++)t=n[r],kn(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Bb(t));return e},sort:function(e,t){var n={},r=this.el;this.toArray().forEach(function(s,a){var l=r.children[a];kn(l,this.options.draggable,r,!1)&&(n[s]=l)},this),t&&this.captureAnimationState(),e.forEach(function(s){n[s]&&(r.removeChild(n[s]),r.appendChild(n[s]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return kn(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var r=pa.modifyOption(this,e,t);typeof r<"u"?n[e]=r:n[e]=t,e==="group"&&Ap(n)},destroy:function(){rn("destroy",this);var e=this.el;e[sn]=null,We(e,"mousedown",this._onTapStart),We(e,"touchstart",this._onTapStart),We(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(We(e,"dragover",this),We(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),wo.splice(wo.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Hi){if(rn("hideClone",this),we.eventCanceled)return;Ae(mt,"display","none"),this.options.removeCloneOnHide&&mt.parentNode&&mt.parentNode.removeChild(mt),Hi=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Hi){if(rn("showClone",this),we.eventCanceled)return;ee.parentNode==ft&&!this.options.group.revertClone?ft.insertBefore(mt,ee):_r?ft.insertBefore(mt,_r):ft.appendChild(mt),this.options.group.revertClone&&this.animate(ee,mt),Ae(mt,"display",""),Hi=!1}}};function Db(i){i.dataTransfer&&(i.dataTransfer.dropEffect="move"),i.cancelable&&i.preventDefault()}function eo(i,e,t,n,r,s,a,l){var u,h=i[sn],f=h.options.onMove,o;return window.CustomEvent&&!Ri&&!fa?u=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(u=document.createEvent("Event"),u.initEvent("move",!0,!0)),u.to=e,u.from=i,u.dragged=t,u.draggedRect=n,u.related=r||e,u.relatedRect=s||wt(e),u.willInsertAfter=l,u.originalEvent=a,i.dispatchEvent(u),f&&(o=f.call(h,u,a)),o}function kl(i){i.draggable=!1}function Lb(){Gc=!1}function Nb(i,e,t){var n=wt(_s(t.el,0,t.options,!0)),r=Ep(t.el,t.options,Le),s=10;return e?i.clientX<r.left-s||i.clientY<n.top&&i.clientX<n.right:i.clientY<r.top-s||i.clientY<n.bottom&&i.clientX<n.left}function Ub(i,e,t){var n=wt(Au(t.el,t.options.draggable)),r=Ep(t.el,t.options,Le),s=10;return e?i.clientX>r.right+s||i.clientY>n.bottom&&i.clientX>n.left:i.clientY>r.bottom+s||i.clientX>n.right&&i.clientY>n.top}function Ob(i,e,t,n,r,s,a,l){var u=n?i.clientY:i.clientX,h=n?t.height:t.width,f=n?t.top:t.left,o=n?t.bottom:t.right,c=!1;if(!a){if(l&&ho<h*r){if(!ea&&(Qs===1?u>f+h*s/2:u<o-h*s/2)&&(ea=!0),ea)c=!0;else if(Qs===1?u<f+ho:u>o-ho)return-Qs}else if(u>f+h*(1-r)/2&&u<o-h*(1-r)/2)return Fb(e)}return c=c||a,c&&(u<f+h*s/2||u>o-h*s/2)?u>f+h/2?1:-1:0}function Fb(i){return Rn(ee)<Rn(i)?1:-1}function Bb(i){for(var e=i.tagName+i.className+i.src+i.href+i.textContent,t=e.length,n=0;t--;)n+=e.charCodeAt(t);return n.toString(36)}function kb(i){Ro.length=0;for(var e=i.getElementsByTagName("input"),t=e.length;t--;){var n=e[t];n.checked&&Ro.push(n)}}function fo(i){return setTimeout(i,0)}function Vc(i){return clearTimeout(i)}zo&&Xe(document,"touchmove",function(i){(we.active||jr)&&i.cancelable&&i.preventDefault()});we.utils={on:Xe,off:We,css:Ae,find:vp,is:function(e,t){return!!kn(e,t,e,!1)},extend:Sb,throttle:yp,closest:kn,toggleClass:mn,clone:Tp,index:Rn,nextTick:fo,cancelNextTick:Vc,detectDirection:Mp,getChild:_s,expando:sn};we.get=function(i){return i[sn]};we.mount=function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(we.utils=ii(ii({},we.utils),n.utils)),pa.mount(n)})};we.create=function(i,e){return new we(i,e)};we.version=vb;var Mt=[],Hs,Wc,Xc=!1,zl,Hl,Co,Gs;function zb(){function i(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return i.prototype={dragStarted:function(t){var n=t.originalEvent;this.sortable.nativeDraggable?Xe(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Xe(document,"pointermove",this._handleFallbackAutoScroll):n.touches?Xe(document,"touchmove",this._handleFallbackAutoScroll):Xe(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var n=t.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?We(document,"dragover",this._handleAutoScroll):(We(document,"pointermove",this._handleFallbackAutoScroll),We(document,"touchmove",this._handleFallbackAutoScroll),We(document,"mousemove",this._handleFallbackAutoScroll)),Vd(),po(),Tb()},nulling:function(){Co=Wc=Hs=Xc=Gs=zl=Hl=null,Mt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,n){var r=this,s=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(s,a);if(Co=t,n||this.options.forceAutoScrollFallback||fa||Ri||$s){Gl(t,this.options,l,n);var u=Yi(l,!0);Xc&&(!Gs||s!==zl||a!==Hl)&&(Gs&&Vd(),Gs=setInterval(function(){var h=Yi(document.elementFromPoint(s,a),!0);h!==u&&(u=h,po()),Gl(t,r.options,h,n)},10),zl=s,Hl=a)}else{if(!this.options.bubbleScroll||Yi(l,!0)===ti()){po();return}Gl(t,this.options,Yi(l,!1),!1)}}},Ai(i,{pluginName:"scroll",initializeByDefault:!0})}function po(){Mt.forEach(function(i){clearInterval(i.pid)}),Mt=[]}function Vd(){clearInterval(Gs)}var Gl=yp(function(i,e,t,n){if(e.scroll){var r=(i.touches?i.touches[0]:i).clientX,s=(i.touches?i.touches[0]:i).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,u=ti(),h=!1,f;Wc!==t&&(Wc=t,po(),Hs=e.scroll,f=e.scrollFn,Hs===!0&&(Hs=Yi(t,!0)));var o=0,c=Hs;do{var d=c,m=wt(d),_=m.top,g=m.bottom,p=m.left,S=m.right,b=m.width,y=m.height,C=void 0,A=void 0,w=d.scrollWidth,N=d.scrollHeight,T=Ae(d),E=d.scrollLeft,I=d.scrollTop;d===u?(C=b<w&&(T.overflowX==="auto"||T.overflowX==="scroll"||T.overflowX==="visible"),A=y<N&&(T.overflowY==="auto"||T.overflowY==="scroll"||T.overflowY==="visible")):(C=b<w&&(T.overflowX==="auto"||T.overflowX==="scroll"),A=y<N&&(T.overflowY==="auto"||T.overflowY==="scroll"));var W=C&&(Math.abs(S-r)<=a&&E+b<w)-(Math.abs(p-r)<=a&&!!E),B=A&&(Math.abs(g-s)<=a&&I+y<N)-(Math.abs(_-s)<=a&&!!I);if(!Mt[o])for(var H=0;H<=o;H++)Mt[H]||(Mt[H]={});(Mt[o].vx!=W||Mt[o].vy!=B||Mt[o].el!==d)&&(Mt[o].el=d,Mt[o].vx=W,Mt[o].vy=B,clearInterval(Mt[o].pid),(W!=0||B!=0)&&(h=!0,Mt[o].pid=setInterval(function(){n&&this.layer===0&&we.active._onTouchMove(Co);var K=Mt[this.layer].vy?Mt[this.layer].vy*l:0,V=Mt[this.layer].vx?Mt[this.layer].vx*l:0;typeof f=="function"&&f.call(we.dragged.parentNode[sn],V,K,i,Co,Mt[this.layer].el)!=="continue"||Sp(Mt[this.layer].el,V,K)}.bind({layer:o}),24))),o++}while(e.bubbleScroll&&c!==u&&(c=Yi(c,!1)));Xc=h}},30),Cp=function(e){var t=e.originalEvent,n=e.putSortable,r=e.dragEl,s=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,u=e.unhideGhostForTarget;if(t){var h=n||s;l();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,o=document.elementFromPoint(f.clientX,f.clientY);u(),h&&!h.el.contains(o)&&(a("spill"),this.onSpill({dragEl:r,putSortable:n}))}};function wu(){}wu.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var r=_s(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(t,r):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:Cp};Ai(wu,{pluginName:"revertOnSpill"});function Ru(){}Ru.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable,r=n||this.sortable;r.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),r.animateAll()},drop:Cp};Ai(Ru,{pluginName:"removeOnSpill"});we.mount(new zb);we.mount(Ru,wu);var Ip=!1,oa=!1;const Hb=new kf;var ji=0,Gb=45,Vs=0,Yt=0,qc=ji*2*Math.PI/60,Pp=null,Qi=null,Io=null,Po=null,$n=null,mo=null,Cn=null,go=null,At=null,ta=0,An=0,_i=null,Dp=null,Do=new yn(0,0,0,0);const Wd=new Ee;var Gi=!0,Ws=!1,er=!1,Yc=!1,jc=!1,Xd=!1,Lp=!1,qd=null,Jn=null,Ki=0,Vb=.45,Kc=.438,Wb=.0541,$c=-.153,Xb=-.13,Zc=-.195,Oi=0,pn=0,Vl=30,$i=0,Yd=0,Jc=0,Zi=-.54,xs=-.834,pi,jd=Math.PI/4.8,Wl=0,Xl=-Math.PI/4.8,Kd=-Math.PI/2;new we(document.getElementById("editableTrackList"),{animation:200,handle:".track-number",ghostClass:"sortable-ghost",onEnd:()=>{fM()}});const Ge={tracks:[],trackNames:[],duration:0,startTimes:[],art:null},qb={types:[{description:"Audio",accept:{"audio/*":[".mp3",".mpeg",".opus",".ogg",".oga",".wav",".aac",".caf",".m4a",".m4b",".mp4",".weba",".webm",".dolby",".flac"]}}],excludeAcceptAllOption:!0,multiple:!0};var Xs=[],Ft=[],on=[],ln=0,Np=0,Lo=.00557;class Yb{constructor(e,t,n,r,s,a,l,u,h,f,o,c){this.mesh=e,this.artist=t,this.name=n,this.tracks=r,this.trackNames=s,this.duration=a,this.startTimes=l,this.art=u,this.id=h,this.initialZ=f,this.targetRotation=new yn(o),this.targetPosition=new P(c)}}var ki=new ua.Howl({src:["./vinyl-crackle-33rpm-6065.mp3"],rate:1,volume:.4,loop:!0}),jb=new ua.Howl({src:["./record_end_01.mp3"],rate:1,volume:.3,loop:!0}),Kb=new ua.Howl({src:["./record_end_02.mp3"],rate:1,volume:.3,loop:!0}),$b=new ua.Howl({src:["./record_end_03.mp3"],rate:1,volume:.3,loop:!0}),yi=null;const un=new Gy({antialias:!1});un.outputColorspace=Ct;un.setSize(window.innerWidth,window.innerHeight);un.setClearColor(2171169);un.setPixelRatio(window.devicePixelRatio*2);un.shadowMap.enabled=!0;un.shadowMap.type=jn;un.toneMapping=eu;un.toneMappingExposure=1.15;document.body.appendChild(un.domElement);const St=new gg,Zb=new Gg().setPath("./").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);St.environment=Zb;St.environmentIntensity=.7;St.environmentRotation.y=3.4;const bs=new jt(35,window.innerWidth/window.innerHeight,.01,20);bs.position.set(0,1.25,0);const Qr=new BS(un,bs,un.domElement),Ho=new Vy().setPath("./");Ho.load("AT-LP5_v02.glb",i=>{i.scene.traverse(function(n){n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1)});const e=i.scene;St.add(e);const t=e.getObjectByName("body");Pp=e.getObjectByName("platter"),Qi=e.getObjectByName("vinyl"),Qi.visible=!1,Io=e.getObjectByName("vinylLabel"),Cn=e.getObjectByName("dial"),$n=e.getObjectByName("toneArm"),mo=e.getObjectByName("toneArmNeedle"),mo.position.set(.001,.02,.245),At=e.getObjectByName("boneYaw"),At.add(mo),_i=e.getObjectByName("bonePitch"),Dp=_i.clone(),Do.copy(_i.quaternion),Qr.add(t),Qr.add($n),Qr.add(Cn),Qr.add(Qi),t.addEventListener("click",n=>{n.stopPropagation()}),$n.addEventListener("mousedown",n=>{Wd.x=n.clientX/window.innerWidth*2-1,Wd.y=-(n.clientY/window.innerHeight)*2+1,ta=At.rotation.y,er=!0,Jn=$n,$t.enableRotate=!1;let r=new yn,s=new P(0,0,1);s.applyQuaternion(_i.quaternion),r.setFromAxisAngle(s,.05),Do.copy(_i.quaternion).multiply(r),Ft.length>0&&Ft[ln].stop(),n.stopPropagation(),document.addEventListener("mouseup",Fp)}),$n.addEventListener("mouseover",()=>{document.body.style.cursor="pointer"}),$n.addEventListener("mouseout",()=>{document.body.style.cursor="default"}),Cn.addEventListener("mousedown",n=>{er=!0,Jn=Cn,$t.enableRotate=!1}),Cn.addEventListener("mouseup",()=>{er=!1,Yc=!1,Jn=null,$t.enableRotate=!0}),Cn.addEventListener("mouseover",()=>{document.body.style.cursor="pointer"}),Cn.addEventListener("mouseout",()=>{document.body.style.cursor="default"}),Ip=!0});Ho.load("sleeve_01.glb",i=>{i.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1)}),Po=i.scene.getObjectByName("sleeve")});Ho.load("groundPlane_01.glb",i=>{i.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1)}),go=i.scene;const e=go.getObjectByName("ground");e.material.dithering=!0,St.add(go)});const Jt=new Tr(13005701,4.25);Jt.position.set(-1,4,-1);Jt.castShadow=!0;Jt.shadow.mapSize.width=1024;Jt.shadow.mapSize.height=1024;Jt.shadow.camera.near=.1;Jt.shadow.camera.far=7;Jt.shadow.camera.left=-2;Jt.shadow.camera.right=2;Jt.shadow.camera.top=2;Jt.shadow.camera.bottom=-2;Jt.shadow.bias=-5e-4;Jt.shadow.radius=2;Jt.shadow.blurSamples=8;St.add(Jt);const Qt=new Tr(1048575,2.25);Qt.position.set(1,4,1);Qt.castShadow=!0;Qt.shadow.mapSize.width=1024;Qt.shadow.mapSize.height=1024;Qt.shadow.camera.near=.1;Qt.shadow.camera.far=7;Qt.shadow.camera.left=-2;Qt.shadow.camera.right=2;Qt.shadow.camera.top=2;Qt.shadow.camera.bottom=-2;Qt.shadow.bias=-5e-4;Qt.shadow.radius=2;Qt.shadow.blurSamples=8;St.add(Qt);const Go=new Tr(16777215,.04);Go.position.set(2,2,-2);Go.castShadow=!1;St.add(Go);const $t=new MS(bs,un.domElement);$t.enableDamping=!0;$t.enablePan=!0;$t.autoRotate=!1;$t.enableRotate=!0;$t.maxDistance=1.1;$t.minDistance=.3;$t.maxPolarAngle=1.2;$t.target=new P(0,.1,0);$t.update();document.getElementById("buildRecordBtn").addEventListener("click",()=>{document.getElementById("recordBuildPanel").classList.remove("hidden")});document.getElementById("loadTracksToBuilderBtn").addEventListener("click",async()=>{const i=await window.showOpenFilePicker(qb),e=await Promise.all(i.map(l=>l.getFile())),t=document.getElementById("editableTrackList");t.innerHTML="",document.getElementById("noTracksMsg").style.display="none",Ge.tracks=[],Ge.trackNames=[],Ge.startTimes=[],Ge.duration=0;let n=!1,r=0;const s=e.map(async l=>{const u=URL.createObjectURL(l),h=await mp(l),f=h.common.title||l.name,o=h.common.track?.no??null;if(Ge.trackNames.length===0&&(h.common.album&&(document.getElementById("builderTitle").value=h.common.album),(h.common.artist||h.common.albumartist)&&(document.getElementById("builderArtist").value=h.common.artist||h.common.albumartist)),!n&&h.common.picture?.length>0){const c=h.common.picture[0],d=URL.createObjectURL(new Blob([c.data],{type:c.format}));document.getElementById("builderAlbumArt").src=d,Ge.art=c,n=!0}return new Promise(c=>{const d=new ua.Howl({src:[u],format:[l.type.split("/")[1]],html5:!1,onload:function(){c({fileName:l.name,howl:d,title:f,trackNumber:o,duration:d.duration()})},onend:function(){!Gi&&ji>1&&!jc&&ln<Ft.length-1&&sM()}})})}),a=await Promise.all(s);a.sort((l,u)=>l.trackNumber&&u.trackNumber?l.trackNumber-u.trackNumber:l.fileName.localeCompare(u.fileName,void 0,{numeric:!0})),a.forEach((l,u)=>{const{howl:h,title:f,duration:o}=l;Ge.tracks.push(h),Ge.trackNames.push(f),Ge.startTimes.push(r),r+=o;const c=document.createElement("li");c.classList.add("builder-track-row"),c.dataset.index=u,c.innerHTML=`
			<span class="track-number">${u+1}.</span>
			<input type="text" class="track-edit" value="${f}">
		`,t.appendChild(c)}),Ge.duration=r});document.getElementById("fetchMetadataBtn").addEventListener("click",async()=>{if(!Ge.tracks.length)return;const i=Ge.tracks[0]._src;try{const t=await(await fetch(i)).blob(),n=await mp(t);if(n.common.picture&&n.common.picture.length>0){const r=n.common.picture[0],s=URL.createObjectURL(new Blob([r.data],{type:r.format}));document.getElementById("builderAlbumArt").src=s,Ge.art=r}else alert("No image found in metadata.")}catch(e){console.error("Error reading metadata:",e),alert("Could not extract metadata from the track.")}});document.getElementById("uploadArtBtn").addEventListener("click",async()=>{const[i]=await window.showOpenFilePicker({types:[{description:"Images",accept:{"image/*":[".png",".jpg",".jpeg",".webp",".gif"]}}],excludeAcceptAllOption:!0,multiple:!1});if(!i)return;const e=await i.getFile(),t=URL.createObjectURL(e),n=document.getElementById("builderAlbumArt");n.src=t;const r=await e.arrayBuffer();Ge.art={data:new Uint8Array(r),format:e.type}});document.getElementById("addRecordBtn").addEventListener("click",()=>{if(Ge.tracks.length===0)return;const i=new Yb;i.id=Date.now();const e=Po.clone(!0);St.add(e),Qr.add(e),i.mesh=e,i.artist=document.getElementById("builderArtist").value||"Unknown Artist",i.name=document.getElementById("builderTitle").value||"Untitled Record",i.tracks=Ge.tracks,i.trackNames=Ge.trackNames,i.startTimes=Ge.startTimes,i.duration=Ge.duration,i.art=Ge.art,kp(i.art,i.mesh,i,!1),Ki==0?e.position.set(Vb+dM(-.0015,.0015),Wb,Xb+Lo*(on.length+1)):e.position.set(Kc,$c,Zc+Lo*(on.length+1)),e.rotation.x=1.294,i.initialZ=e.position.z,i.targetPosition=e.position.clone(),i.targetRotation=e.rotation.clone(),e.addEventListener("click",n=>{hM(i),document.getElementById("recordInfoPanel").classList.add("visible"),n.stopPropagation()}),e.addEventListener("mouseover",n=>{document.body.style.cursor="pointer",cM(on.indexOf(i)),n.stopPropagation()}),e.addEventListener("mouseout",n=>{document.body.style.cursor="default",uM(),n.stopPropagation()}),Yd=i.duration,Jc=(xs-Zi)/Yd;var t=Math.random();t<.33&&(yi=jb),t>.33&&t<.66&&(yi=Kb),t>.66&&(yi=$b),on.push(i),document.getElementById("recordBuildPanel").classList.add("hidden"),setTimeout(function(){Ge.tracks=[],Ge.trackNames=[],Ge.duration=0,Ge.startTimes=[],Ge.art=null,document.getElementById("builderTitle").value="",document.getElementById("builderArtist").value="",document.getElementById("builderAlbumArt").src="defaultArt.png";const n=document.getElementById("editableTrackList");n.innerHTML="",document.getElementById("noTracksMsg").style.display="block"},300)});document.getElementById("cancelBuildBtn").addEventListener("click",()=>{document.getElementById("recordBuildPanel").classList.add("hidden"),setTimeout(function(){Ge.tracks=[],Ge.trackNames=[],Ge.duration=0,Ge.startTimes=[],Ge.art=null,document.getElementById("builderTitle").value="",document.getElementById("builderArtist").value="",document.getElementById("builderAlbumArt").src="defaultArt.png";const i=document.getElementById("editableTrackList");i.innerHTML="",document.getElementById("noTracksMsg").style.display="block"},300)});document.getElementById("changeSceneBtn").addEventListener("click",()=>{Xd||(lM(),Xd=!0)});document.addEventListener("mousemove",i=>{if(er){if(Jn==$n){const e=i.movementX*.001;ta+=e;const t=-Math.PI/3.5,n=Math.PI/20;ta=gi.clamp(ta,t,n)}er&&Jn==Cn&&(Yc||(Oi=i.clientY,Yc=!0),An==jd&&(pn>Vl&&(An=Wl,pn=0,Oi=i.clientY),Vs=33),An==Wl&&(pn<-30&&(An=jd,pn=0,Oi=i.clientY),pn>Vl&&(An=Xl,pn=0,Oi=i.clientY),Vs=0),An==Xl&&(pn<-30&&(An=Wl,pn=0,Oi=i.clientY),pn>Vl&&(An=Kd,pn=0,Oi=i.clientY),Vs=45),An==Kd&&(pn<-30&&(An=Xl,pn=0,Oi=i.clientY),Vs=78),pn=i.clientY-Oi)}});const Jb=new hb(St,bs),Up=new mb(St,bs,{focus:1,aperture:.01,maxblur:.005}),Qb=new fb,Vo=new ub(un);Vo.addPass(Jb);Vo.addPass(Up);Vo.addPass(Qb);const eM=Wo(8,i=>{const e=new P;mo.getWorldPosition(e);const t=bs.position.distanceTo(e);Up.materialBokeh.uniforms.focus.value=t}),tM=Wo(20,i=>{ji=gi.lerp(ji,Vs,.4),Yt=ji/Gb,Yt<.01&&(Yt=0),oa&&(Ft[ln].rate(Yt),ki.playing()&&ki.rate(Yt),yi.playing()&&yi.rate(Yt)),qc=ji*2*Math.PI/60,$i=rM(At.rotation.y,Zi,xs)}),nM=Wo(20,i=>{_i.rotation.x>-1.575?Gi=!1:(Gi=!0,Ws=!1),Ft.length>0&&At.rotation.y<Zi+.02&&!Gi&&ji>1&&!Ws&&Yt>.01?ki.playing()||(ki.seek(Math.random()*ki.duration()),ki.play()):ki.pause(),oa&&At.rotation.y<xs+5e-4&&!Gi&&!Ws&&Yt>.01&&(yi.playing()||(Ws=!0,yi.play(),ki.pause())),oa&&Gi&&yi.playing()&&yi.pause(),At.rotation.y<xs&&($i=1),At.rotation.y>Zi&&($i=0)}),iM=Wo(20,i=>{Qr.update()});function Op(){if(Ip){const i=Hb.getDelta();eM(),tM(),_i.quaternion.slerp(Do,.1),At.rotation.y>Zi&&At.rotation.y<Zi+.02&&!Gi&&(At.rotation.y+=Jc*25*i*Yt),At.rotation.y<Zi&&At.rotation.y>xs&&Jn!=$n&&(At.rotation.y+=Jc*i*Yt,Ft.length>0&&!Ft[ln].playing()&&!Gi&&At.rotation.y>xs+5e-4&&!Ws&&Yt>.01&&Ft[ln].play()),nM(),er&&Jn==$n&&(At.rotation.y=gi.lerp(At.rotation.y,ta,.075)),er&&Jn==Cn&&(Cn.rotation.y=gi.lerp(Cn.rotation.y,An,.35)),Math.abs(Cn.rotation.y-An)>.05&&aM(),Pp.rotation.y-=qc*i,Qi.rotation.y-=qc*i,At.rotation.y<Zi&&Jn!=$n&&Ft.length>0&&(pi=(Qi.rotation.y%(2*Math.PI)+2*Math.PI)%(2*Math.PI),pi<6.2&&pi>3.1&&(At.rotation.y-=.01*i*Yt*.25*(1.7-$i)),pi<3.1&&pi>0&&(At.rotation.y+=.01*i*Yt*.25*(1.7-$i)),pi<6&&pi>5.3&&(_i.rotation.x-=.1*i*Yt*.5*(1.1-$i)),pi<5.3&&pi>4.6&&(_i.rotation.x+=.1*i*Yt*.5*(1.1-$i)))}Lp&&on.forEach(i=>{i.mesh.rotation.x=gi.lerp(i.mesh.rotation.x,i.targetRotation.x,.12),i.mesh.position.y=gi.lerp(i.mesh.position.y,i.targetPosition.y,.1225),i.mesh.position.z=gi.lerp(i.mesh.position.z,i.targetPosition.z,.125)}),iM(),$t.update(),requestAnimationFrame(Op),Vo.render()}function rM(i,e,t){return(i-e)/(t-e)}function Fp(i){$t.enableRotate=!0,ji>1&&Bp(),er=!1,Jn=null,Do.copy(Dp.quaternion),document.removeEventListener("mouseup",Fp)}function sM(){ln++,ln<Ft.length?Ft[ln].play():ln=Ft.length-1}function Bp(){if(!Ft.length)return;jc=!0;let i=$i*Np,e=Xs.findIndex((t,n)=>i>=t&&(n===Xs.length-1||i<Xs[n+1]));if(e!==-1){let t=i-Xs[e];Ft[ln]&&Ft[ln].stop(),ln=e,Ft[ln].seek(t),clearTimeout(qd),qd=setTimeout(()=>{jc=!1},200)}}function kp(i,e,t,n){if(n){Io.material=new aa({map:t.art,roughness:.16,metalness:0});return}if(!i||!Qi)return;const r=new Blob([i.data],{type:i.format}),s=URL.createObjectURL(r);new Bf().load(s,l=>{e.material=new aa({map:l,roughness:.2,metalness:0}),t.art=l,console.log(t),console.log("Album art applied to record texture!")})}function aM(){Bp()}function oM(i){oa=!1,Ft=i.tracks,Xs=i.startTimes,Np=i.duration,ln=0,Qi.visible=!0,kp(i.art,i.sleeve,i,!0),oa=!0,i.art&&(Io.material.map=i.art,Io.material.needsUpdate=!0,Po.material.map=i.art,Po.material.needsUpdate=!0),Qi.visible=!0,console.log("loaded record ",i)}function lM(){Ki=1,on.length>0&&on.forEach(n=>{n.mesh.position.x=Kc,n.targetPosition.x=Kc,n.mesh.position.y=$c,n.targetPosition.y=$c,n.mesh.position.z=Zc+Lo*(on.indexOf(n)+1),n.targetPosition.z=Zc+Lo*(on.indexOf(n)+1),n.initialZ=n.mesh.position.z}),St.remove(Jt),St.remove(Qt),St.remove(Go),un.toneMappingExposure=1.75,St.environmentIntensity=.75,St.environmentRotation.y=11.4;const i=new Tr(15590068,11);i.position.set(5.6,1.5,6.3),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=4,i.shadow.camera.far=10,i.shadow.camera.left=-1.2,i.shadow.camera.right=1.5,i.shadow.camera.top=1,i.shadow.camera.bottom=-1,i.shadow.bias=-.002,i.shadow.radius=2,i.shadow.blurSamples=32;const e=new Tr(11847379,.05);e.position.set(1,.8,-1),e.castShadow=!1;const t=new Tr(16777215,.5);t.position.set(0,.7,0),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=.5,t.shadow.camera.far=1.4,t.shadow.camera.left=-.5,t.shadow.camera.right=1,t.shadow.camera.top=.3,t.shadow.camera.bottom=-.3,t.shadow.bias=-1e-4,t.shadow.radius=3,t.shadow.blurSamples=16,t.shadow.intensity=1.6,St.add(i),St.add(e),St.add(t),Ho.load("env_01.glb",n=>{n.scene.traverse(function(s){s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1)});const r=n.scene;St.add(r)}),St.remove(go),$t.maxPolarAngle=1.4}function cM(i){Lp=!0,console.log(i),on.forEach(e=>{on.indexOf(e)>i&&(e.targetRotation.x=1.6),on.indexOf(e)==i&&(i<on.length-1&&(Ki==0&&(e.targetPosition.y=.125),Ki==1&&(e.targetPosition.y=-.075),i>0?(console.log("Moving Forward"),e.targetPosition.z=e.initialZ-.025):(e.targetPosition.z=e.initialZ-.025,console.log("Moving Backward"))),e.targetRotation.x=1.45,Ki==0&&(e.targetPosition.y=.125),Ki==1&&(e.targetPosition.y=-.075))})}function uM(){on.forEach(i=>{i.targetRotation.x=1.294,Ki==0&&(i.targetPosition.y=.0541),Ki==1&&(i.targetPosition.y=-.153),i.targetPosition.z=i.initialZ})}function hM(i){const e=document.getElementById("recordInfoPanel");e.classList.remove("hidden"),document.getElementById("albumTitle").innerText=i.name||"Unknown Album",document.getElementById("artistName").innerText=i.artist||"Unknown Artist";const t=document.getElementById("trackList");if(t.innerHTML="",i.trackNames.forEach((n,r)=>{const s=document.createElement("li");s.innerHTML=`
		<span class="track-number">${r+1}.</span>
		<span class="track-title">${n||"Untitled Track"}</span>
	`,t.appendChild(s)}),i.art&&i.art.image){const n=document.createElement("canvas"),r=n.getContext("2d");n.width=i.art.image.width,n.height=i.art.image.height,r.drawImage(i.art.image,0,0);const s=n.toDataURL(),a=document.getElementById("recordInfoPanel");a.style.setProperty("--bg-image",`url('${s}')`),a.style.backgroundColor="rgba(255, 255, 255, 0.85)",a.style.setProperty("--bg-image",`url('${s}')`),a.style.setProperty("--bg-opacity","0.75")}else e.style.backgroundImage="none";document.getElementById("loadToPlayerBtn").onclick=()=>{oM(i)},document.getElementById("closePanelBtn").onclick=()=>{document.getElementById("recordInfoPanel").classList.remove("visible")}}function dM(i,e){return Math.random()*(e-i)+i}function fM(){const i=document.querySelectorAll("#editableTrackList .builder-track-row"),e=[],t=[];i.forEach((r,s)=>{const a=r.querySelector(".track-edit"),l=parseInt(r.dataset.index);e.push(a.value),t.push(Ge.tracks[l]),r.querySelector(".track-number").textContent=`${s+1}.`}),Ge.trackNames=e,Ge.tracks=t,Ge.startTimes=[];let n=0;Ge.tracks.forEach(r=>{Ge.startTimes.push(n),n+=r.duration()}),Ge.duration=n}function Wo(i,e){const t=1e3/i;let n=0;return()=>{const r=performance.now();r-n>=t&&(n=r,e(r))}}Op();export{Ad as A,hp as B,Fc as C,yM as D,Vn as E,dp as F,sp as G,Ld as H,$S as I,qi as J,AM as K,pp as L,JT as M,Zf as N,sE as O,Md as P,aE as Q,RM as R,Ot as S,Bc as T,To as U,wM as V,rE as W,Ks as a,Er as b,ko as c,tp as d,kc as e,Tt as f,up as g,TM as h,MM as i,ep as j,Xi as k,ks as l,ZT as m,iT as n,fd as o,tT as p,eT as q,Jf as r,bM as s,lT as t,SM as u,aT as v,nT as w,bd as x,Qf as y,QS as z};
