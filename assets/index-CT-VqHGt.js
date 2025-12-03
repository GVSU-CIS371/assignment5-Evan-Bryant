(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},qr=[],qt=()=>{},hd=()=>!1,Wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),el=t=>t.startsWith("onUpdate:"),at=Object.assign,tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y_=Object.prototype.hasOwnProperty,Ee=(t,e)=>y_.call(t,e),te=Array.isArray,Hr=t=>Ai(t)==="[object Map]",Ko=t=>Ai(t)==="[object Set]",eh=t=>Ai(t)==="[object Date]",oe=t=>typeof t=="function",$e=t=>typeof t=="string",kt=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",fd=t=>(Ce(t)||oe(t))&&oe(t.then)&&oe(t.catch),dd=Object.prototype.toString,Ai=t=>dd.call(t),v_=t=>Ai(t).slice(8,-1),pd=t=>Ai(t)==="[object Object]",Go=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},E_=/-\w/g,St=Qo(t=>t.replace(E_,e=>e.slice(1).toUpperCase())),T_=/\B([A-Z])/g,er=Qo(t=>t.replace(T_,"-$1").toLowerCase()),Jo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Qo(t=>t?`on${Jo(t)}`:""),Bn=(t,e)=>!Object.is(t,e),so=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let th;const Yo=()=>th||(th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ls(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?b_(r):ls(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Ce(t))return t}const I_=/;(?![^(]*\))/g,w_=/:([^]+)/,A_=/\/\*[^]*?\*\//g;function b_(t){const e={};return t.replace(A_,"").split(I_).forEach(n=>{if(n){const r=n.split(w_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nl(t){let e="";if($e(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=nl(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const S_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",R_=Zc(S_);function md(t){return!!t||t===""}function C_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Xr(t[r],e[r]);return n}function Xr(t,e){if(t===e)return!0;let n=eh(t),r=eh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=kt(t),r=kt(e),n||r)return t===e;if(n=te(t),r=te(e),n||r)return n&&r?C_(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Xr(t[a],e[a]))return!1}}return String(t)===String(e)}function P_(t,e){return t.findIndex(n=>Xr(n,e))}const _d=t=>!!(t&&t.__v_isRef===!0),Cn=t=>$e(t)?t:t==null?"":te(t)||Ce(t)&&(t.toString===dd||!oe(t.toString))?_d(t)?Cn(t.value):JSON.stringify(t,yd,2):String(t),yd=(t,e)=>_d(e)?yd(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$a(r,i)+" =>"]=s,n),{})}:Ko(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$a(n))}:kt(e)?$a(e):Ce(e)&&!te(e)&&!pd(e)?String(e):e,$a=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class vd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){this._on>0&&--this._on===0&&(nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ed(t){return new vd(t)}function Td(){return nt}function V_(t,e=!1){nt&&nt.cleanups.push(t)}let Se;const qa=new WeakSet;class Id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ad(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nh(this),bd(this);const e=Se,n=Nt;Se=this,Nt=!0;try{return this.fn()}finally{Sd(this),Se=e,Nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)il(e);this.deps=this.depsTail=void 0,nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dc(this)&&this.run()}get dirty(){return dc(this)}}let wd=0,Ws,Ks;function Ad(t,e=!1){if(t.flags|=8,e){t.next=Ks,Ks=t;return}t.next=Ws,Ws=t}function rl(){wd++}function sl(){if(--wd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function bd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),il(r),N_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ai)||(t.globalVersion=ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dc(t))))return;t.flags|=2;const e=t.dep,n=Se,r=Nt;Se=t,Nt=!0;try{bd(t);const s=t.fn(t._value);(e.version===0||Bn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=n,Nt=r,Sd(t),t.flags&=-3}}function il(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)il(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function N_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nt=!0;const Cd=[];function un(){Cd.push(Nt),Nt=!1}function hn(){const t=Cd.pop();Nt=t===void 0?!0:t}function nh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Se;Se=void 0;try{e()}finally{Se=n}}}let ai=0;class D_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ol{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!Nt||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new D_(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,Pd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=r)}return n}trigger(e){this.version++,ai++,this.notify(e)}notify(e){rl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{sl()}}}function Pd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Pd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const To=new WeakMap,mr=Symbol(""),pc=Symbol(""),ci=Symbol("");function st(t,e,n){if(Nt&&Se){let r=To.get(t);r||To.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ol),s.map=r,s.key=n),s.track()}}function tn(t,e,n,r,s,i){const a=To.get(t);if(!a){ai++;return}const c=l=>{l&&l.trigger()};if(rl(),e==="clear")a.forEach(c);else{const l=te(t),h=l&&Go(n);if(l&&n==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===ci||!kt(y)&&y>=d)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(ci)),e){case"add":l?h&&c(a.get("length")):(c(a.get(mr)),Hr(t)&&c(a.get(pc)));break;case"delete":l||(c(a.get(mr)),Hr(t)&&c(a.get(pc)));break;case"set":Hr(t)&&c(a.get(mr));break}}sl()}function k_(t,e){const n=To.get(t);return n&&n.get(e)}function xr(t){const e=me(t);return e===t?e:(st(e,"iterate",ci),Et(t)?e:e.map(Ot))}function Zo(t){return st(t=me(t),"iterate",ci),t}function Vn(t,e){return fn(t)?an(t)?Yr(Ot(e)):Yr(e):Ot(e)}const O_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,t=>Vn(this,t))},concat(...t){return xr(this).concat(...t.map(e=>te(e)?xr(e):e))},entries(){return Ha(this,"entries",t=>(t[1]=Vn(this,t[1]),t))},every(t,e){return Zt(this,"every",t,e,void 0,arguments)},filter(t,e){return Zt(this,"filter",t,e,n=>n.map(r=>Vn(this,r)),arguments)},find(t,e){return Zt(this,"find",t,e,n=>Vn(this,n),arguments)},findIndex(t,e){return Zt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zt(this,"findLast",t,e,n=>Vn(this,n),arguments)},findLastIndex(t,e){return Zt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zt(this,"forEach",t,e,void 0,arguments)},includes(...t){return za(this,"includes",t)},indexOf(...t){return za(this,"indexOf",t)},join(t){return xr(this).join(t)},lastIndexOf(...t){return za(this,"lastIndexOf",t)},map(t,e){return Zt(this,"map",t,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...t){return xs(this,"push",t)},reduce(t,...e){return rh(this,"reduce",t,e)},reduceRight(t,...e){return rh(this,"reduceRight",t,e)},shift(){return xs(this,"shift")},some(t,e){return Zt(this,"some",t,e,void 0,arguments)},splice(...t){return xs(this,"splice",t)},toReversed(){return xr(this).toReversed()},toSorted(t){return xr(this).toSorted(t)},toSpliced(...t){return xr(this).toSpliced(...t)},unshift(...t){return xs(this,"unshift",t)},values(){return Ha(this,"values",t=>Vn(this,t))}};function Ha(t,e,n){const r=Zo(t),s=r[e]();return r!==t&&!Et(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const M_=Array.prototype;function Zt(t,e,n,r,s,i){const a=Zo(t),c=a!==t&&!Et(t),l=a[e];if(l!==M_[e]){const p=l.apply(t,i);return c?Ot(p):p}let h=n;a!==t&&(c?h=function(p,y){return n.call(this,Vn(t,p),y,t)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,t)}));const d=l.call(a,h,r);return c&&s?s(d):d}function rh(t,e,n,r){const s=Zo(t);let i=n;return s!==t&&(Et(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,Vn(t,c),l,t)}),s[e](i,...r)}function za(t,e,n){const r=me(t);st(r,"iterate",ci);const s=r[e](...n);return(s===-1||s===!1)&&ta(n[0])?(n[0]=me(n[0]),r[e](...n)):s}function xs(t,e,n=[]){un(),rl();const r=me(t)[e].apply(t,n);return sl(),hn(),r}const x_=Zc("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function L_(t){kt(t)||(t=String(t));const e=me(this);return st(e,"has",t),e.hasOwnProperty(t)}class Nd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?K_:Md:i?Od:kd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=te(e);if(!s){let l;if(a&&(l=O_[n]))return l;if(n==="hasOwnProperty")return L_}const c=Reflect.get(e,n,Oe(e)?e:r);if((kt(n)?Vd.has(n):x_(n))||(s||st(e,"get",n),i))return c;if(Oe(c)){const l=a&&Go(n)?c:c.value;return s&&Ce(l)?mc(l):l}return Ce(c)?s?mc(c):ea(c):c}}class Dd extends Nd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=te(e)&&Go(n);if(!this._isShallow){const h=fn(i);if(!Et(r)&&!fn(r)&&(i=me(i),r=me(r)),!a&&Oe(i)&&!Oe(r))return h||(i.value=r),!0}const c=a?Number(n)<e.length:Ee(e,n),l=Reflect.set(e,n,r,Oe(e)?e:s);return e===me(s)&&(c?Bn(r,i)&&tn(e,"set",n,r):tn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kt(n)||!Vd.has(n))&&st(e,"has",n),r}ownKeys(e){return st(e,"iterate",te(e)?"length":mr),Reflect.ownKeys(e)}}class F_ extends Nd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const U_=new Dd,B_=new F_,j_=new Dd(!0);const gc=t=>t,Gi=t=>Reflect.getPrototypeOf(t);function $_(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),a=Hr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?gc:e?Yr:Ot;return!e&&st(i,"iterate",l?pc:mr),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:c?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function Qi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function q_(t,e){const n={get(s){const i=this.__v_raw,a=me(i),c=me(s);t||(Bn(s,c)&&st(a,"get",s),st(a,"get",c));const{has:l}=Gi(a),h=e?gc:t?Yr:Ot;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&st(me(s),"iterate",mr),s.size},has(s){const i=this.__v_raw,a=me(i),c=me(s);return t||(Bn(s,c)&&st(a,"has",s),st(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=me(c),h=e?gc:t?Yr:Ot;return!t&&st(l,"iterate",mr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return at(n,t?{add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear")}:{add(s){!e&&!Et(s)&&!fn(s)&&(s=me(s));const i=me(this);return Gi(i).has.call(i,s)||(i.add(s),tn(i,"add",s,s)),this},set(s,i){!e&&!Et(i)&&!fn(i)&&(i=me(i));const a=me(this),{has:c,get:l}=Gi(a);let h=c.call(a,s);h||(s=me(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Bn(i,d)&&tn(a,"set",s,i):tn(a,"add",s,i),this},delete(s){const i=me(this),{has:a,get:c}=Gi(i);let l=a.call(i,s);l||(s=me(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&tn(i,"delete",s,void 0),h},clear(){const s=me(this),i=s.size!==0,a=s.clear();return i&&tn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$_(s,t,e)}),n}function al(t,e){const n=q_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const H_={get:al(!1,!1)},z_={get:al(!1,!0)},W_={get:al(!0,!1)};const kd=new WeakMap,Od=new WeakMap,Md=new WeakMap,K_=new WeakMap;function G_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Q_(t){return t.__v_skip||!Object.isExtensible(t)?0:G_(v_(t))}function ea(t){return fn(t)?t:cl(t,!1,U_,H_,kd)}function J_(t){return cl(t,!1,j_,z_,Od)}function mc(t){return cl(t,!0,B_,W_,Md)}function cl(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Q_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function an(t){return fn(t)?an(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function Et(t){return!!(t&&t.__v_isShallow)}function ta(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function ll(t){return!Ee(t,"__v_skip")&&Object.isExtensible(t)&&gd(t,"__v_skip",!0),t}const Ot=t=>Ce(t)?ea(t):t,Yr=t=>Ce(t)?mc(t):t;function Oe(t){return t?t.__v_isRef===!0:!1}function xd(t){return X_(t,!1)}function X_(t,e){return Oe(t)?t:new Y_(t,e)}class Y_{constructor(e,n){this.dep=new ol,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:Ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Et(e)||fn(e);e=r?e:me(e),Bn(e,n)&&(this._rawValue=e,this._value=r?e:Ot(e),this.dep.trigger())}}function Ld(t){return Oe(t)?t.value:t}const Z_={get:(t,e,n)=>e==="__v_raw"?t:Ld(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fd(t){return an(t)?t:new Proxy(t,Z_)}function ey(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=ny(t,n);return e}class ty{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=me(e);let s=!0,i=e;if(!te(e)||!Go(String(n)))do s=!ta(i)||Et(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Ld(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Oe(this._raw[this._key])){const n=this._object[this._key];if(Oe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return k_(this._raw,this._key)}}function ny(t,e,n){return new ty(t,e,n)}class ry{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ol(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Ad(this,!0),!0}get value(){const e=this.dep.track();return Rd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sy(t,e,n=!1){let r,s;return oe(t)?r=t:(r=t.get,s=t.set),new ry(r,s,n)}const Ji={},Io=new WeakMap;let fr;function iy(t,e=!1,n=fr){if(n){let r=Io.get(n);r||Io.set(n,r=[]),r.push(t)}}function oy(t,e,n=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=K=>s?K:Et(K)||s===!1||s===0?nn(K,1):nn(K);let d,p,y,b,D=!1,x=!1;if(Oe(t)?(p=()=>t.value,D=Et(t)):an(t)?(p=()=>h(t),D=!0):te(t)?(x=!0,D=t.some(K=>an(K)||Et(K)),p=()=>t.map(K=>{if(Oe(K))return K.value;if(an(K))return h(K);if(oe(K))return l?l(K,2):K()})):oe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(y){un();try{y()}finally{hn()}}const K=fr;fr=d;try{return l?l(t,3,[b]):t(b)}finally{fr=K}}:p=qt,e&&s){const K=p,se=s===!0?1/0:s;p=()=>nn(K(),se)}const B=Td(),H=()=>{d.stop(),B&&B.active&&tl(B.effects,d)};if(i&&e){const K=e;e=(...se)=>{K(...se),H()}}let G=x?new Array(t.length).fill(Ji):Ji;const Q=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(e){const se=d.run();if(s||D||(x?se.some((Ie,w)=>Bn(Ie,G[w])):Bn(se,G))){y&&y();const Ie=fr;fr=d;try{const w=[se,G===Ji?void 0:x&&G[0]===Ji?[]:G,b];G=se,l?l(e,3,w):e(...w)}finally{fr=Ie}}}else d.run()};return c&&c(Q),d=new Id(p),d.scheduler=a?()=>a(Q,!1):Q,b=K=>iy(K,!1,d),y=d.onStop=()=>{const K=Io.get(d);if(K){if(l)l(K,4);else for(const se of K)se();Io.delete(d)}},e?r?Q(!0):G=d.run():a?a(Q.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function nn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Oe(t))nn(t.value,e,n);else if(te(t))for(let r=0;r<t.length;r++)nn(t[r],e,n);else if(Ko(t)||Hr(t))t.forEach(r=>{nn(r,e,n)});else if(pd(t)){for(const r in t)nn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(t,e,n,r){try{return r?t(...r):t()}catch(s){na(s,e,n)}}function Qt(t,e,n,r){if(oe(t)){const s=bi(t,e,n,r);return s&&fd(s)&&s.catch(i=>{na(i,e,n)}),s}if(te(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function na(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){un(),bi(i,null,10,[t,l,h]),hn();return}}ay(t,n,s,r,a)}function ay(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ht=[];let Bt=-1;const zr=[];let Nn=null,Fr=0;const Ud=Promise.resolve();let wo=null;function ul(t){const e=wo||Ud;return t?e.then(this?t.bind(this):t):e}function cy(t){let e=Bt+1,n=ht.length;for(;e<n;){const r=e+n>>>1,s=ht[r],i=li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function hl(t){if(!(t.flags&1)){const e=li(t),n=ht[ht.length-1];!n||!(t.flags&2)&&e>=li(n)?ht.push(t):ht.splice(cy(e),0,t),t.flags|=1,Bd()}}function Bd(){wo||(wo=Ud.then($d))}function ly(t){te(t)?zr.push(...t):Nn&&t.id===-1?Nn.splice(Fr+1,0,t):t.flags&1||(zr.push(t),t.flags|=1),Bd()}function sh(t,e,n=Bt+1){for(;n<ht.length;n++){const r=ht[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ht.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function jd(t){if(zr.length){const e=[...new Set(zr)].sort((n,r)=>li(n)-li(r));if(zr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Fr=0;Fr<Nn.length;Fr++){const n=Nn[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,Fr=0}}const li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $d(t){try{for(Bt=0;Bt<ht.length;Bt++){const e=ht[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<ht.length;Bt++){const e=ht[Bt];e&&(e.flags&=-2)}Bt=-1,ht.length=0,jd(),wo=null,(ht.length||zr.length)&&$d()}}let Xe=null,qd=null;function Ao(t){const e=Xe;return Xe=t,qd=t&&t.type.__scopeId||null,e}function Us(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gh(-1);const i=Ao(e);let a;try{a=t(...s)}finally{Ao(i),r._d&&gh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ls(t,e){if(Xe===null)return t;const n=oa(Xe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=be]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&nn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(un(),Qt(l,n,8,[t.el,c,t,e]),hn())}}const uy=Symbol("_vte"),hy=t=>t.__isTeleport,fy=Symbol("_leaveCb");function fl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Si(t,e){return oe(t)?at({name:t.name},e,{setup:t}):t}function Hd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const bo=new WeakMap;function Gs(t,e,n,r,s=!1){if(te(t)){t.forEach((D,x)=>Gs(D,e&&(te(e)?e[x]:e),n,r,s));return}if(Wr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===be?c.refs={}:c.refs,p=c.setupState,y=me(p),b=p===be?hd:D=>Ee(y,D);if(h!=null&&h!==l){if(ih(e),$e(h))d[h]=null,b(h)&&(p[h]=null);else if(Oe(h)){h.value=null;const D=e;D.k&&(d[D.k]=null)}}if(oe(l))bi(l,c,12,[a,d]);else{const D=$e(l),x=Oe(l);if(D||x){const B=()=>{if(t.f){const H=D?b(l)?p[l]:d[l]:l.value;if(s)te(H)&&tl(H,i);else if(te(H))H.includes(i)||H.push(i);else if(D)d[l]=[i],b(l)&&(p[l]=d[l]);else{const G=[i];l.value=G,t.k&&(d[t.k]=G)}}else D?(d[l]=a,b(l)&&(p[l]=a)):x&&(l.value=a,t.k&&(d[t.k]=a))};if(a){const H=()=>{B(),bo.delete(t)};H.id=-1,bo.set(t,H),yt(H,n)}else ih(t),B()}}}function ih(t){const e=bo.get(t);e&&(e.flags|=8,bo.delete(t))}Yo().requestIdleCallback;Yo().cancelIdleCallback;const Wr=t=>!!t.type.__asyncLoader,zd=t=>t.type.__isKeepAlive;function dy(t,e){Wd(t,"a",e)}function py(t,e){Wd(t,"da",e)}function Wd(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zd(s.parent.vnode)&&gy(r,e,n,s),s=s.parent}}function gy(t,e,n,r){const s=ra(e,t,r,!0);Kd(()=>{tl(r[e],s)},n)}function ra(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{un();const c=Ri(n),l=Qt(e,n,t,a);return c(),hn(),l});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=ot)=>{(!hi||t==="sp")&&ra(t,(...r)=>e(...r),n)},my=yn("bm"),_y=yn("m"),yy=yn("bu"),vy=yn("u"),Ey=yn("bum"),Kd=yn("um"),Ty=yn("sp"),Iy=yn("rtg"),wy=yn("rtc");function Ay(t,e=ot){ra("ec",t,e)}const by="components";function Sy(t,e){return Cy(by,t,!0,e)||t}const Ry=Symbol.for("v-ndc");function Cy(t,e,n=!0,r=!1){const s=Xe||ot;if(s){const i=s.type;{const c=_v(i,!1);if(c&&(c===e||c===St(e)||c===Jo(St(e))))return i}const a=oh(s[t]||i[t],e)||oh(s.appContext[t],e);return!a&&r?i:a}}function oh(t,e){return t&&(t[e]||t[St(e)]||t[Jo(St(e))])}function kn(t,e,n,r){let s;const i=n,a=te(t);if(a||$e(t)){const c=a&&an(t);let l=!1,h=!1;c&&(l=!Et(t),h=fn(t),t=Zo(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(l?h?Yr(Ot(t[d])):Ot(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function io(t,e,n={},r,s){if(Xe.ce||Xe.parent&&Wr(Xe.parent)&&Xe.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),le(),On(xe,null,[Tt("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),le();const a=i&&Gd(i(n)),c=n.key||a&&a.key,l=On(xe,{key:(c&&!kt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Gd(t){return t.some(e=>gl(e)?!(e.type===dn||e.type===xe&&!Gd(e.children)):!0)?t:null}const _c=t=>t?gp(t)?oa(t):_c(t.parent):null,Qs=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Jd(t),$forceUpdate:t=>t.f||(t.f=()=>{hl(t.update)}),$nextTick:t=>t.n||(t.n=ul.bind(t.proxy)),$watch:t=>jy.bind(t)}),Wa=(t,e)=>t!==be&&!t.__isScriptSetup&&Ee(t,e),Py={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wa(r,e))return a[e]=1,r[e];if(s!==be&&Ee(s,e))return a[e]=2,s[e];if(Ee(i,e))return a[e]=3,i[e];if(n!==be&&Ee(n,e))return a[e]=4,n[e];yc&&(a[e]=0)}}const h=Qs[e];let d,p;if(h)return e==="$attrs"&&st(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==be&&Ee(n,e))return a[e]=4,n[e];if(p=l.config.globalProperties,Ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wa(s,e)?(s[e]=n,!0):r!==be&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(n[c]||t!==be&&c[0]!=="$"&&Ee(t,c)||Wa(e,c)||Ee(i,c)||Ee(r,c)||Ee(Qs,c)||Ee(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ah(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function Vy(t){const e=Jd(t),n=t.proxy,r=t.ctx;yc=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:b,updated:D,activated:x,deactivated:B,beforeDestroy:H,beforeUnmount:G,destroyed:Q,unmounted:K,render:se,renderTracked:Ie,renderTriggered:w,errorCaptured:m,serverPrefetch:_,expose:I,inheritAttrs:T,components:S,directives:v,filters:Le}=e;if(h&&Ny(h,r,null),a)for(const ce in a){const _e=a[ce];oe(_e)&&(r[ce]=_e.bind(n))}if(s){const ce=s.call(n,n);Ce(ce)&&(t.data=ea(ce))}if(yc=!0,i)for(const ce in i){const _e=i[ce],wt=oe(_e)?_e.bind(n,n):oe(_e.get)?_e.get.bind(n,n):qt,Vr=!oe(_e)&&oe(_e.set)?_e.set.bind(n):qt,xt=Zs({get:wt,set:Vr});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>xt.value,set:pt=>xt.value=pt})}if(c)for(const ce in c)Qd(c[ce],r,n,ce);if(l){const ce=oe(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(_e=>{Ly(_e,ce[_e])})}d&&ch(d,t,"c");function Ne(ce,_e){te(_e)?_e.forEach(wt=>ce(wt.bind(n))):_e&&ce(_e.bind(n))}if(Ne(my,p),Ne(_y,y),Ne(yy,b),Ne(vy,D),Ne(dy,x),Ne(py,B),Ne(Ay,m),Ne(wy,Ie),Ne(Iy,w),Ne(Ey,G),Ne(Kd,K),Ne(Ty,_),te(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(_e=>{Object.defineProperty(ce,_e,{get:()=>n[_e],set:wt=>n[_e]=wt,enumerable:!0})})}else t.exposed||(t.exposed={});se&&t.render===qt&&(t.render=se),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),v&&(t.directives=v),_&&Hd(t)}function Ny(t,e,n=qt){te(t)&&(t=vc(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Js(s.from||r,s.default,!0):i=Js(s.from||r):i=Js(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ch(t,e,n){Qt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qd(t,e,n,r){let s=r.includes(".")?Zd(n,r):()=>n[r];if($e(t)){const i=e[t];oe(i)&&oo(s,i)}else if(oe(t))oo(s,t.bind(n));else if(Ce(t))if(te(t))t.forEach(i=>Qd(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&oo(s,i,t)}}function Jd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>So(l,h,a,!0)),So(l,e,a)),Ce(e)&&i.set(e,l),l}function So(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&So(t,i,n,!0),s&&s.forEach(a=>So(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Dy[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Dy={data:lh,props:uh,emits:uh,methods:Bs,computed:Bs,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Bs,directives:Bs,watch:Oy,provide:lh,inject:ky};function lh(t,e){return e?t?function(){return at(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function ky(t,e){return Bs(vc(t),vc(e))}function vc(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?at(Object.create(null),t,e):e}function uh(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:at(Object.create(null),ah(t),ah(e??{})):e}function Oy(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ut(t[r],e[r]);return n}function Xd(){return{app:null,config:{isNativeTag:hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let My=0;function xy(t,e){return function(r,s=null){oe(r)||(r=at({},r)),s!=null&&!Ce(s)&&(s=null);const i=Xd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:My++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&oe(d.install)?(a.add(d),d.install(h,...p)):oe(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!l){const b=h._ceVNode||Tt(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(b,d,y),l=!0,h._container=d,d.__vue_app__=h,oa(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Qt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=_r;_r=h;try{return d()}finally{_r=p}}};return h}}let _r=null;function Ly(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Js(t,e,n=!1){const r=pp();if(r||_r){let s=_r?_r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function Fy(){return!!(pp()||_r)}const Uy=Symbol.for("v-scx"),By=()=>Js(Uy);function oo(t,e,n){return Yd(t,e,n)}function Yd(t,e,n=be){const{immediate:r,deep:s,flush:i,once:a}=n,c=at({},n),l=e&&r||!e&&i!=="post";let h;if(hi){if(i==="sync"){const b=By();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=qt,b.resume=qt,b.pause=qt,b}}const d=ot;c.call=(b,D,x)=>Qt(b,d,D,x);let p=!1;i==="post"?c.scheduler=b=>{yt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,D)=>{D?b():hl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const y=oy(t,e,c);return hi&&(h?h.push(y):l&&y()),y}function jy(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Zd(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const a=Ri(this),c=Yd(s,i.bind(r),n);return a(),c}function Zd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $y=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${er(e)}Modifiers`];function qy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),a=i&&$y(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>$e(d)?d.trim():d)),a.number&&(s=n.map(Xo)));let c,l=r[c=ja(e)]||r[c=ja(St(e))];!l&&i&&(l=r[c=ja(er(e))]),l&&Qt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(h,t,6,s)}}const Hy=new WeakMap;function ep(t,e,n=!1){const r=n?Hy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!oe(t)){const l=h=>{const d=ep(h,e,!0);d&&(c=!0,at(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(te(i)?i.forEach(l=>a[l]=null):at(a,i),Ce(t)&&r.set(t,a),a)}function sa(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,er(e))||Ee(t,e))}function hh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:y,setupState:b,ctx:D,inheritAttrs:x}=t,B=Ao(t);let H,G;try{if(n.shapeFlag&4){const K=s||r,se=K;H=$t(h.call(se,K,d,p,b,y,D)),G=c}else{const K=e;H=$t(K.length>1?K(p,{attrs:c,slots:a,emit:l}):K(p,null)),G=e.props?c:zy(c)}}catch(K){Xs.length=0,na(K,t,1),H=Tt(dn)}let Q=H;if(G&&x!==!1){const K=Object.keys(G),{shapeFlag:se}=Q;K.length&&se&7&&(i&&K.some(el)&&(G=Wy(G,i)),Q=Zr(Q,G,!1,!0))}return n.dirs&&(Q=Zr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&fl(Q,n.transition),H=Q,Ao(B),H}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},Wy=(t,e)=>{const n={};for(const r in t)(!el(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ky(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(a[y]!==r[y]&&!sa(h,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?fh(r,a,h):!0:!!a;return!1}function fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function Gy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tp={},np=()=>Object.create(tp),rp=t=>Object.getPrototypeOf(t)===tp;function Qy(t,e,n,r=!1){const s={},i=np();t.propsDefaults=Object.create(null),sp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:J_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Jy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=me(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(sa(t.emitsOptions,y))continue;const b=e[y];if(l)if(Ee(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const D=St(y);s[D]=Ec(l,c,D,b,t,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{sp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=er(p))===p||!Ee(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ec(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&tn(t.attrs,"set","")}function sp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(zs(l))continue;const h=e[l];let d;s&&Ee(s,d=St(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:sa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=me(n),h=c||be;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ec(s,l,p,h[p],t,!Ee(h,p))}}return a}function Ec(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&oe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ri(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===er(n))&&(r=!0))}return r}const Xy=new WeakMap;function ip(t,e,n=!1){const r=n?Xy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!oe(t)){const d=p=>{l=!0;const[y,b]=ip(p,e,!0);at(a,y),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ce(t)&&r.set(t,qr),qr;if(te(i))for(let d=0;d<i.length;d++){const p=St(i[d]);dh(p)&&(a[p]=be)}else if(i)for(const d in i){const p=St(d);if(dh(p)){const y=i[d],b=a[p]=te(y)||oe(y)?{type:y}:at({},y),D=b.type;let x=!1,B=!0;if(te(D))for(let H=0;H<D.length;++H){const G=D[H],Q=oe(G)&&G.name;if(Q==="Boolean"){x=!0;break}else Q==="String"&&(B=!1)}else x=oe(D)&&D.name==="Boolean";b[0]=x,b[1]=B,(x||Ee(b,"default"))&&c.push(p)}}const h=[a,c];return Ce(t)&&r.set(t,h),h}function dh(t){return t[0]!=="$"&&!zs(t)}const dl=t=>t==="_"||t==="_ctx"||t==="$stable",pl=t=>te(t)?t.map($t):[$t(t)],Yy=(t,e,n)=>{if(e._n)return e;const r=Us((...s)=>pl(e(...s)),n);return r._c=!1,r},op=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dl(s))continue;const i=t[s];if(oe(i))e[s]=Yy(s,i,r);else if(i!=null){const a=pl(i);e[s]=()=>a}}},ap=(t,e)=>{const n=pl(e);t.slots.default=()=>n},cp=(t,e,n)=>{for(const r in e)(n||!dl(r))&&(t[r]=e[r])},Zy=(t,e,n)=>{const r=t.slots=np();if(t.vnode.shapeFlag&32){const s=e._;s?(cp(r,e,n),n&&gd(r,"_",s,!0)):op(e,r)}else e&&ap(t,e)},ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:cp(s,e,n):(i=!e.$stable,op(e,s)),a=e}else e&&(ap(t,e),a={default:1});if(i)for(const c in s)!dl(c)&&a[c]==null&&delete s[c]},yt=iv;function tv(t){return nv(t)}function nv(t,e){const n=Yo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:b=qt,insertStaticContent:D}=t,x=(E,A,P,U=null,k=null,O=null,$=void 0,F=null,L=!!A.dynamicChildren)=>{if(E===A)return;E&&!Fs(E,A)&&(U=En(E),pt(E,k,O,!0),E=null),A.patchFlag===-2&&(L=!1,A.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:q}=A;switch(M){case ia:B(E,A,P,U);break;case dn:H(E,A,P,U);break;case Ga:E==null&&G(A,P,U,$);break;case xe:S(E,A,P,U,k,O,$,F,L);break;default:q&1?se(E,A,P,U,k,O,$,F,L):q&6?v(E,A,P,U,k,O,$,F,L):(q&64||q&128)&&M.process(E,A,P,U,k,O,$,F,L,sr)}Y!=null&&k?Gs(Y,E&&E.ref,O,A||E,!A):Y==null&&E&&E.ref!=null&&Gs(E.ref,null,O,E,!0)},B=(E,A,P,U)=>{if(E==null)r(A.el=c(A.children),P,U);else{const k=A.el=E.el;A.children!==E.children&&h(k,A.children)}},H=(E,A,P,U)=>{E==null?r(A.el=l(A.children||""),P,U):A.el=E.el},G=(E,A,P,U)=>{[E.el,E.anchor]=D(E.children,A,P,U,E.el,E.anchor)},Q=({el:E,anchor:A},P,U)=>{let k;for(;E&&E!==A;)k=y(E),r(E,P,U),E=k;r(A,P,U)},K=({el:E,anchor:A})=>{let P;for(;E&&E!==A;)P=y(E),s(E),E=P;s(A)},se=(E,A,P,U,k,O,$,F,L)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),E==null)Ie(A,P,U,k,O,$,F,L);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),_(E,A,k,O,$,F,L)}finally{M&&M._endPatch()}}},Ie=(E,A,P,U,k,O,$,F)=>{let L,M;const{props:Y,shapeFlag:q,transition:X,dirs:Z}=E;if(L=E.el=a(E.type,O,Y&&Y.is,Y),q&8?d(L,E.children):q&16&&m(E.children,L,null,U,k,Ka(E,O),$,F),Z&&ur(E,null,U,"created"),w(L,E,E.scopeId,$,U),Y){for(const we in Y)we!=="value"&&!zs(we)&&i(L,we,null,Y[we],O,U);"value"in Y&&i(L,"value",null,Y.value,O),(M=Y.onVnodeBeforeMount)&&Ut(M,U,E)}Z&&ur(E,null,U,"beforeMount");const ue=rv(k,X);ue&&X.beforeEnter(L),r(L,A,P),((M=Y&&Y.onVnodeMounted)||ue||Z)&&yt(()=>{M&&Ut(M,U,E),ue&&X.enter(L),Z&&ur(E,null,U,"mounted")},k)},w=(E,A,P,U,k)=>{if(P&&b(E,P),U)for(let O=0;O<U.length;O++)b(E,U[O]);if(k){let O=k.subTree;if(A===O||hp(O.type)&&(O.ssContent===A||O.ssFallback===A)){const $=k.vnode;w(E,$,$.scopeId,$.slotScopeIds,k.parent)}}},m=(E,A,P,U,k,O,$,F,L=0)=>{for(let M=L;M<E.length;M++){const Y=E[M]=F?Dn(E[M]):$t(E[M]);x(null,Y,A,P,U,k,O,$,F)}},_=(E,A,P,U,k,O,$)=>{const F=A.el=E.el;let{patchFlag:L,dynamicChildren:M,dirs:Y}=A;L|=E.patchFlag&16;const q=E.props||be,X=A.props||be;let Z;if(P&&hr(P,!1),(Z=X.onVnodeBeforeUpdate)&&Ut(Z,P,A,E),Y&&ur(A,E,P,"beforeUpdate"),P&&hr(P,!0),(q.innerHTML&&X.innerHTML==null||q.textContent&&X.textContent==null)&&d(F,""),M?I(E.dynamicChildren,M,F,P,U,Ka(A,k),O):$||_e(E,A,F,null,P,U,Ka(A,k),O,!1),L>0){if(L&16)T(F,q,X,P,k);else if(L&2&&q.class!==X.class&&i(F,"class",null,X.class,k),L&4&&i(F,"style",q.style,X.style,k),L&8){const ue=A.dynamicProps;for(let we=0;we<ue.length;we++){const ge=ue[we],Ze=q[ge],et=X[ge];(et!==Ze||ge==="value")&&i(F,ge,Ze,et,k,P)}}L&1&&E.children!==A.children&&d(F,A.children)}else!$&&M==null&&T(F,q,X,P,k);((Z=X.onVnodeUpdated)||Y)&&yt(()=>{Z&&Ut(Z,P,A,E),Y&&ur(A,E,P,"updated")},U)},I=(E,A,P,U,k,O,$)=>{for(let F=0;F<A.length;F++){const L=E[F],M=A[F],Y=L.el&&(L.type===xe||!Fs(L,M)||L.shapeFlag&198)?p(L.el):P;x(L,M,Y,null,U,k,O,$,!0)}},T=(E,A,P,U,k)=>{if(A!==P){if(A!==be)for(const O in A)!zs(O)&&!(O in P)&&i(E,O,A[O],null,k,U);for(const O in P){if(zs(O))continue;const $=P[O],F=A[O];$!==F&&O!=="value"&&i(E,O,F,$,k,U)}"value"in P&&i(E,"value",A.value,P.value,k)}},S=(E,A,P,U,k,O,$,F,L)=>{const M=A.el=E?E.el:c(""),Y=A.anchor=E?E.anchor:c("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:Z}=A;Z&&(F=F?F.concat(Z):Z),E==null?(r(M,P,U),r(Y,P,U),m(A.children||[],P,Y,k,O,$,F,L)):q>0&&q&64&&X&&E.dynamicChildren?(I(E.dynamicChildren,X,P,k,O,$,F),(A.key!=null||k&&A===k.subTree)&&lp(E,A,!0)):_e(E,A,P,Y,k,O,$,F,L)},v=(E,A,P,U,k,O,$,F,L)=>{A.slotScopeIds=F,E==null?A.shapeFlag&512?k.ctx.activate(A,P,U,$,L):Le(A,P,U,k,O,$,L):It(E,A,L)},Le=(E,A,P,U,k,O,$)=>{const F=E.component=fv(E,U,k);if(zd(E)&&(F.ctx.renderer=sr),dv(F,!1,$),F.asyncDep){if(k&&k.registerDep(F,Ne,$),!E.el){const L=F.subTree=Tt(dn);H(null,L,A,P),E.placeholder=L.el}}else Ne(F,E,A,P,k,O,$)},It=(E,A,P)=>{const U=A.component=E.component;if(Ky(E,A,P))if(U.asyncDep&&!U.asyncResolved){ce(U,A,P);return}else U.next=A,U.update();else A.el=E.el,U.vnode=A},Ne=(E,A,P,U,k,O,$)=>{const F=()=>{if(E.isMounted){let{next:q,bu:X,u:Z,parent:ue,vnode:we}=E;{const mt=up(E);if(mt){q&&(q.el=we.el,ce(E,q,$)),mt.asyncDep.then(()=>{E.isUnmounted||F()});return}}let ge=q,Ze;hr(E,!1),q?(q.el=we.el,ce(E,q,$)):q=we,X&&so(X),(Ze=q.props&&q.props.onVnodeBeforeUpdate)&&Ut(Ze,ue,q,we),hr(E,!0);const et=hh(E),gt=E.subTree;E.subTree=et,x(gt,et,p(gt.el),En(gt),E,k,O),q.el=et.el,ge===null&&Gy(E,et.el),Z&&yt(Z,k),(Ze=q.props&&q.props.onVnodeUpdated)&&yt(()=>Ut(Ze,ue,q,we),k)}else{let q;const{el:X,props:Z}=A,{bm:ue,m:we,parent:ge,root:Ze,type:et}=E,gt=Wr(A);hr(E,!1),ue&&so(ue),!gt&&(q=Z&&Z.onVnodeBeforeMount)&&Ut(q,ge,A),hr(E,!0);{Ze.ce&&Ze.ce._def.shadowRoot!==!1&&Ze.ce._injectChildStyle(et);const mt=E.subTree=hh(E);x(null,mt,P,U,E,k,O),A.el=mt.el}if(we&&yt(we,k),!gt&&(q=Z&&Z.onVnodeMounted)){const mt=A;yt(()=>Ut(q,ge,mt),k)}(A.shapeFlag&256||ge&&Wr(ge.vnode)&&ge.vnode.shapeFlag&256)&&E.a&&yt(E.a,k),E.isMounted=!0,A=P=U=null}};E.scope.on();const L=E.effect=new Id(F);E.scope.off();const M=E.update=L.run.bind(L),Y=E.job=L.runIfDirty.bind(L);Y.i=E,Y.id=E.uid,L.scheduler=()=>hl(Y),hr(E,!0),M()},ce=(E,A,P)=>{A.component=E;const U=E.vnode.props;E.vnode=A,E.next=null,Jy(E,A.props,U,P),ev(E,A.children,P),un(),sh(E),hn()},_e=(E,A,P,U,k,O,$,F,L=!1)=>{const M=E&&E.children,Y=E?E.shapeFlag:0,q=A.children,{patchFlag:X,shapeFlag:Z}=A;if(X>0){if(X&128){Vr(M,q,P,U,k,O,$,F,L);return}else if(X&256){wt(M,q,P,U,k,O,$,F,L);return}}Z&8?(Y&16&&Yt(M,k,O),q!==M&&d(P,q)):Y&16?Z&16?Vr(M,q,P,U,k,O,$,F,L):Yt(M,k,O,!0):(Y&8&&d(P,""),Z&16&&m(q,P,U,k,O,$,F,L))},wt=(E,A,P,U,k,O,$,F,L)=>{E=E||qr,A=A||qr;const M=E.length,Y=A.length,q=Math.min(M,Y);let X;for(X=0;X<q;X++){const Z=A[X]=L?Dn(A[X]):$t(A[X]);x(E[X],Z,P,null,k,O,$,F,L)}M>Y?Yt(E,k,O,!0,!1,q):m(A,P,U,k,O,$,F,L,q)},Vr=(E,A,P,U,k,O,$,F,L)=>{let M=0;const Y=A.length;let q=E.length-1,X=Y-1;for(;M<=q&&M<=X;){const Z=E[M],ue=A[M]=L?Dn(A[M]):$t(A[M]);if(Fs(Z,ue))x(Z,ue,P,null,k,O,$,F,L);else break;M++}for(;M<=q&&M<=X;){const Z=E[q],ue=A[X]=L?Dn(A[X]):$t(A[X]);if(Fs(Z,ue))x(Z,ue,P,null,k,O,$,F,L);else break;q--,X--}if(M>q){if(M<=X){const Z=X+1,ue=Z<Y?A[Z].el:U;for(;M<=X;)x(null,A[M]=L?Dn(A[M]):$t(A[M]),P,ue,k,O,$,F,L),M++}}else if(M>X)for(;M<=q;)pt(E[M],k,O,!0),M++;else{const Z=M,ue=M,we=new Map;for(M=ue;M<=X;M++){const Ge=A[M]=L?Dn(A[M]):$t(A[M]);Ge.key!=null&&we.set(Ge.key,M)}let ge,Ze=0;const et=X-ue+1;let gt=!1,mt=0;const Rt=new Array(et);for(M=0;M<et;M++)Rt[M]=0;for(M=Z;M<=q;M++){const Ge=E[M];if(Ze>=et){pt(Ge,k,O,!0);continue}let ze;if(Ge.key!=null)ze=we.get(Ge.key);else for(ge=ue;ge<=X;ge++)if(Rt[ge-ue]===0&&Fs(Ge,A[ge])){ze=ge;break}ze===void 0?pt(Ge,k,O,!0):(Rt[ze-ue]=M+1,ze>=mt?mt=ze:gt=!0,x(Ge,A[ze],P,null,k,O,$,F,L),Ze++)}const Dr=gt?sv(Rt):qr;for(ge=Dr.length-1,M=et-1;M>=0;M--){const Ge=ue+M,ze=A[Ge],Ts=A[Ge+1],ir=Ge+1<Y?Ts.el||Ts.placeholder:U;Rt[M]===0?x(null,ze,P,ir,k,O,$,F,L):gt&&(ge<0||M!==Dr[ge]?xt(ze,P,ir,2):ge--)}}},xt=(E,A,P,U,k=null)=>{const{el:O,type:$,transition:F,children:L,shapeFlag:M}=E;if(M&6){xt(E.component.subTree,A,P,U);return}if(M&128){E.suspense.move(A,P,U);return}if(M&64){$.move(E,A,P,sr);return}if($===xe){r(O,A,P);for(let q=0;q<L.length;q++)xt(L[q],A,P,U);r(E.anchor,A,P);return}if($===Ga){Q(E,A,P);return}if(U!==2&&M&1&&F)if(U===0)F.beforeEnter(O),r(O,A,P),yt(()=>F.enter(O),k);else{const{leave:q,delayLeave:X,afterLeave:Z}=F,ue=()=>{E.ctx.isUnmounted?s(O):r(O,A,P)},we=()=>{O._isLeaving&&O[fy](!0),q(O,()=>{ue(),Z&&Z()})};X?X(O,ue,we):we()}else r(O,A,P)},pt=(E,A,P,U=!1,k=!1)=>{const{type:O,props:$,ref:F,children:L,dynamicChildren:M,shapeFlag:Y,patchFlag:q,dirs:X,cacheIndex:Z}=E;if(q===-2&&(k=!1),F!=null&&(un(),Gs(F,null,P,E,!0),hn()),Z!=null&&(A.renderCache[Z]=void 0),Y&256){A.ctx.deactivate(E);return}const ue=Y&1&&X,we=!Wr(E);let ge;if(we&&(ge=$&&$.onVnodeBeforeUnmount)&&Ut(ge,A,E),Y&6)vs(E.component,P,U);else{if(Y&128){E.suspense.unmount(P,U);return}ue&&ur(E,null,A,"beforeUnmount"),Y&64?E.type.remove(E,A,P,sr,U):M&&!M.hasOnce&&(O!==xe||q>0&&q&64)?Yt(M,A,P,!1,!0):(O===xe&&q&384||!k&&Y&16)&&Yt(L,A,P),U&&ys(E)}(we&&(ge=$&&$.onVnodeUnmounted)||ue)&&yt(()=>{ge&&Ut(ge,A,E),ue&&ur(E,null,A,"unmounted")},P)},ys=E=>{const{type:A,el:P,anchor:U,transition:k}=E;if(A===xe){Nr(P,U);return}if(A===Ga){K(E);return}const O=()=>{s(P),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(E.shapeFlag&1&&k&&!k.persisted){const{leave:$,delayLeave:F}=k,L=()=>$(P,O);F?F(E.el,O,L):L()}else O()},Nr=(E,A)=>{let P;for(;E!==A;)P=y(E),s(E),E=P;s(A)},vs=(E,A,P)=>{const{bum:U,scope:k,job:O,subTree:$,um:F,m:L,a:M}=E;ph(L),ph(M),U&&so(U),k.stop(),O&&(O.flags|=8,pt($,E,A,P)),F&&yt(F,A),yt(()=>{E.isUnmounted=!0},A)},Yt=(E,A,P,U=!1,k=!1,O=0)=>{for(let $=O;$<E.length;$++)pt(E[$],A,P,U,k)},En=E=>{if(E.shapeFlag&6)return En(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=y(E.anchor||E.el),P=A&&A[uy];return P?y(P):A};let rr=!1;const Es=(E,A,P)=>{E==null?A._vnode&&pt(A._vnode,null,null,!0):x(A._vnode||null,E,A,null,null,null,P),A._vnode=E,rr||(rr=!0,sh(),jd(),rr=!1)},sr={p:x,um:pt,m:xt,r:ys,mt:Le,mc:m,pc:_e,pbc:I,n:En,o:t};return{render:Es,hydrate:void 0,createApp:xy(Es)}}function Ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lp(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Dn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&lp(a,c)),c.type===ia&&c.patchFlag!==-1&&(c.el=a.el),c.type===dn&&!c.el&&(c.el=a.el)}}function sv(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function up(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:up(e)}function ph(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hp=t=>t.__isSuspense;function iv(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):ly(t)}const xe=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),Xs=[];let vt=null;function le(t=!1){Xs.push(vt=t?null:[])}function ov(){Xs.pop(),vt=Xs[Xs.length-1]||null}let ui=1;function gh(t,e=!1){ui+=t,t<0&&vt&&e&&(vt.hasOnce=!0)}function fp(t){return t.dynamicChildren=ui>0?vt||qr:null,ov(),ui>0&&vt&&vt.push(t),t}function ve(t,e,n,r,s,i){return fp(ye(t,e,n,r,s,i,!0))}function On(t,e,n,r,s){return fp(Tt(t,e,n,r,s,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const dp=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Oe(t)||oe(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function ye(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dp(e),ref:e&&ao(e),scopeId:qd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return c?(ml(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),ui>0&&!a&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const Tt=av;function av(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ry)&&(t=dn),gl(t)){const c=Zr(t,e,!0);return n&&ml(c,n),ui>0&&!i&&vt&&(c.shapeFlag&6?vt[vt.indexOf(t)]=c:vt.push(c)),c.patchFlag=-2,c}if(yv(t)&&(t=t.__vccOpts),e){e=cv(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=nl(c)),Ce(l)&&(ta(l)&&!te(l)&&(l=at({},l)),e.style=ls(l))}const a=$e(t)?1:hp(t)?128:hy(t)?64:Ce(t)?4:oe(t)?2:0;return ye(t,e,n,r,s,a,i,!0)}function cv(t){return t?ta(t)||rp(t)?at({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?lv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&dp(h),ref:e&&e.ref?n&&i?te(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&fl(d,l.clone(d)),d}function co(t=" ",e=0){return Tt(ia,null,t,e)}function Ys(t="",e=!1){return e?(le(),On(dn,null,t)):Tt(dn,null,t)}function $t(t){return t==null||typeof t=="boolean"?Tt(dn):te(t)?Tt(xe,null,t.slice()):gl(t)?Dn(t):Tt(ia,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function ml(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ml(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!rp(e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[co(e)]):n=8);t.children=e,t.shapeFlag|=n}function lv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=nl([e.class,r.class]));else if(s==="style")e.style=ls([e.style,r.style]);else if(Wo(s)){const i=e[s],a=r[s];a&&i!==a&&!(te(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){Qt(t,e,7,[n,r])}const uv=Xd();let hv=0;function fv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uv,i={uid:hv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(r,s),emitsOptions:ep(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qy.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const pp=()=>ot||Xe;let Ro,Tc;{const t=Yo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ro=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),Tc=e("__VUE_SSR_SETTERS__",n=>hi=n)}const Ri=t=>{const e=ot;return Ro(t),t.scope.on(),()=>{t.scope.off(),Ro(e)}},mh=()=>{ot&&ot.scope.off(),Ro(null)};function gp(t){return t.vnode.shapeFlag&4}let hi=!1;function dv(t,e=!1,n=!1){e&&Tc(e);const{props:r,children:s}=t.vnode,i=gp(t);Qy(t,r,i,e),Zy(t,s,n||e);const a=i?pv(t,e):void 0;return e&&Tc(!1),a}function pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Py);const{setup:r}=n;if(r){un();const s=t.setupContext=r.length>1?mv(t):null,i=Ri(t),a=bi(r,t,0,[t.props,s]),c=fd(a);if(hn(),i(),(c||t.sp)&&!Wr(t)&&Hd(t),c){if(a.then(mh,mh),e)return a.then(l=>{_h(t,l)}).catch(l=>{na(l,t,0)});t.asyncDep=a}else _h(t,a)}else mp(t)}function _h(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Fd(e)),mp(t)}function mp(t,e,n){const r=t.type;t.render||(t.render=r.render||qt);{const s=Ri(t);un();try{Vy(t)}finally{hn(),s()}}}const gv={get(t,e){return st(t,"get",""),t[e]}};function mv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gv),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fd(ll(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function _v(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function yv(t){return oe(t)&&"__vccOpts"in t}const Zs=(t,e)=>sy(t,e,hi),vv="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ic;const yh=typeof window<"u"&&window.trustedTypes;if(yh)try{Ic=yh.createPolicy("vue",{createHTML:t=>t})}catch{}const _p=Ic?t=>Ic.createHTML(t):t=>t,Ev="http://www.w3.org/2000/svg",Tv="http://www.w3.org/1998/Math/MathML",en=typeof document<"u"?document:null,vh=en&&en.createElement("template"),Iv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?en.createElementNS(Ev,t):e==="mathml"?en.createElementNS(Tv,t):n?en.createElement(t,{is:n}):en.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=_p(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=vh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wv=Symbol("_vtc");function Av(t,e,n){const r=t[wv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Eh=Symbol("_vod"),bv=Symbol("_vsh"),Sv=Symbol(""),Rv=/(?:^|;)\s*display\s*:/;function Cv(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&lo(r,c,"")}else for(const a in e)n[a]==null&&lo(r,a,"");for(const a in n)a==="display"&&(i=!0),lo(r,a,n[a])}else if(s){if(e!==n){const a=r[Sv];a&&(n+=";"+a),r.cssText=n,i=Rv.test(n)}}else e&&t.removeAttribute("style");Eh in t&&(t[Eh]=i?r.display:"",t[bv]&&(r.display="none"))}const Th=/\s*!important$/;function lo(t,e,n){if(te(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pv(t,e);Th.test(n)?t.setProperty(er(r),n.replace(Th,""),"important"):t[r]=n}}const Ih=["Webkit","Moz","ms"],Qa={};function Pv(t,e){const n=Qa[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Qa[e]=r;r=Jo(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in t)return Qa[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function Ah(t,e,n,r,s,i=R_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n):n==null||i&&!md(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kt(n)?String(n):n)}function bh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_p(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=md(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Mn(t,e,n,r){t.addEventListener(e,n,r)}function Vv(t,e,n,r){t.removeEventListener(e,n,r)}const Sh=Symbol("_vei");function Nv(t,e,n,r,s=null){const i=t[Sh]||(t[Sh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Dv(e);if(r){const h=i[e]=Mv(r,s);Mn(t,c,h,l)}else a&&(Vv(t,c,a,l),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function Dv(t){let e;if(Rh.test(t)){e={};let r;for(;r=t.match(Rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):er(t.slice(2)),e]}let Ja=0;const kv=Promise.resolve(),Ov=()=>Ja||(kv.then(()=>Ja=0),Ja=Date.now());function Mv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(xv(r,n.value),e,5,[r])};return n.value=t,n.attached=Ov(),n}function xv(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Lv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Av(t,r,a):e==="style"?Cv(t,n,r):Wo(e)?el(e)||Nv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fv(t,e,r,a))?(bh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ah(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?bh(t,St(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ah(t,e,r,a))};function Fv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&$e(n)?!1:e in t}const es=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>so(e,n):e};function Uv(t){t.target.composing=!0}function Ph(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cn=Symbol("_assign");function Vh(t,e,n){return e&&(t=t.trim()),n&&(t=Xo(t)),t}const Bv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cn]=es(s);const i=r||s.props&&s.props.type==="number";Mn(t,e?"change":"input",a=>{a.target.composing||t[cn](Vh(t.value,n,i))}),(n||i)&&Mn(t,"change",()=>{t.value=Vh(t.value,n,i)}),e||(Mn(t,"compositionstart",Uv),Mn(t,"compositionend",Ph),Mn(t,"change",Ph))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[cn]=es(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jv={created(t,{value:e},n){t.checked=Xr(e,n.props.value),t[cn]=es(n),Mn(t,"change",()=>{t[cn](fi(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[cn]=es(r),e!==n&&(t.checked=Xr(e,r.props.value))}},Xa={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ko(e);Mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Xo(fi(a)):fi(a));t[cn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ul(()=>{t._assigning=!1})}),t[cn]=es(r)},mounted(t,{value:e}){Nh(t,e)},beforeUpdate(t,e,n){t[cn]=es(n)},updated(t,{value:e}){t._assigning||Nh(t,e)}};function Nh(t,e){const n=t.multiple,r=te(e);if(!(n&&!r&&!Ko(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],c=fi(a);if(n)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=P_(e,c)>-1}else a.selected=e.has(c);else if(Xr(fi(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fi(t){return"_value"in t?t._value:t.value}const $v={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=er(s.key);if(e.some(a=>a===i||$v[a]===i))return t(s)}))},Hv=at({patchProp:Lv},Iv);let Dh;function zv(){return Dh||(Dh=tv(Hv))}const Wv=((...t)=>{const e=zv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gv(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Kv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Kv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gv(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let yp;const aa=t=>yp=t,vp=Symbol();function wc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ei||(ei={}));function Qv(){const t=Ed(!0),e=t.run(()=>xd({}));let n=[],r=[];const s=ll({install(i){aa(s),s._a=i,i.provide(vp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ep=()=>{};function kh(t,e,n,r=Ep){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Td()&&V_(s),s}function Lr(t,...e){t.forEach(n=>{n(...e)})}const Jv=t=>t(),Oh=Symbol(),Ya=Symbol();function Ac(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];wc(s)&&wc(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!an(r)?t[n]=Ac(s,r):t[n]=r}return t}const Xv=Symbol();function Yv(t){return!wc(t)||!Object.prototype.hasOwnProperty.call(t,Xv)}const{assign:Pn}=Object;function Zv(t){return!!(Oe(t)&&t.effect)}function eE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=ey(n.state.value[t]);return Pn(d,i,Object.keys(a||{}).reduce((p,y)=>(p[y]=ll(Zs(()=>{aa(n);const b=n._s.get(t);return a[y].call(b,b)})),p),{}))}return l=Tp(t,h,e,n,r,!0),l}function Tp(t,e,n={},r,s,i){let a;const c=Pn({actions:{}},n),l={deep:!0};let h,d,p=new Set,y=new Set,b;const D=r.state.value[t];!i&&!D&&(r.state.value[t]={}),xd({});let x;function B(m){let _;h=d=!1,typeof m=="function"?(m(r.state.value[t]),_={type:ei.patchFunction,storeId:t,events:b}):(Ac(r.state.value[t],m),_={type:ei.patchObject,payload:m,storeId:t,events:b});const I=x=Symbol();ul().then(()=>{x===I&&(h=!0)}),d=!0,Lr(p,_,r.state.value[t])}const H=i?function(){const{state:_}=n,I=_?_():{};this.$patch(T=>{Pn(T,I)})}:Ep;function G(){a.stop(),p.clear(),y.clear(),r._s.delete(t)}const Q=(m,_="")=>{if(Oh in m)return m[Ya]=_,m;const I=function(){aa(r);const T=Array.from(arguments),S=new Set,v=new Set;function Le(ce){S.add(ce)}function It(ce){v.add(ce)}Lr(y,{args:T,name:I[Ya],store:se,after:Le,onError:It});let Ne;try{Ne=m.apply(this&&this.$id===t?this:se,T)}catch(ce){throw Lr(v,ce),ce}return Ne instanceof Promise?Ne.then(ce=>(Lr(S,ce),ce)).catch(ce=>(Lr(v,ce),Promise.reject(ce))):(Lr(S,Ne),Ne)};return I[Oh]=!0,I[Ya]=_,I},K={_p:r,$id:t,$onAction:kh.bind(null,y),$patch:B,$reset:H,$subscribe(m,_={}){const I=kh(p,m,_.detached,()=>T()),T=a.run(()=>oo(()=>r.state.value[t],S=>{(_.flush==="sync"?d:h)&&m({storeId:t,type:ei.direct,events:b},S)},Pn({},l,_)));return I},$dispose:G},se=ea(K);r._s.set(t,se);const w=(r._a&&r._a.runWithContext||Jv)(()=>r._e.run(()=>(a=Ed()).run(()=>e({action:Q}))));for(const m in w){const _=w[m];if(Oe(_)&&!Zv(_)||an(_))i||(D&&Yv(_)&&(Oe(_)?_.value=D[m]:Ac(_,D[m])),r.state.value[t][m]=_);else if(typeof _=="function"){const I=Q(_,m);w[m]=I,c.actions[m]=_}}return Pn(se,w),Pn(me(se),w),Object.defineProperty(se,"$state",{get:()=>r.state.value[t],set:m=>{B(_=>{Pn(_,m)})}}),r._p.forEach(m=>{Pn(se,a.run(()=>m({store:se,app:r._a,pinia:r,options:c})))}),D&&i&&n.hydrate&&n.hydrate(se.$state,D),h=!0,d=!0,se}/*! #__NO_SIDE_EFFECTS__ */function tE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=Fy();return a=a||(l?Js(vp,null):null),a&&aa(a),a=yp,a._s.has(t)||(s?Tp(t,e,r,a):eE(t,r,a)),a._s.get(t)}return i.$id=t,i}const nE=()=>{};var Mh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(y=64)),r.push(n[d],n[p],n[y],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new sE;const y=i<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iE=function(t){const e=Ip(t);return wp.encodeByteArray(e,!0)},Co=function(t){return iE(t).replace(/\./g,"")},Ap=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof Mh>"u")return;const t=Mh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return nE()||aE()||cE()||lE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=ca())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},uE=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sp=()=>{var t;return(t=ca())==null?void 0:t.config},Rp=t=>{var e;return(e=ca())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Co(JSON.stringify(n)),Co(JSON.stringify(a)),""].join(".")}const ti={};function dE(){const t={prod:[],emulator:[]};for(const e of Object.keys(ti))ti[e]?t.emulator.push(e):t.prod.push(e);return t}function pE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let xh=!1;function Pp(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||ti[t]===e||ti[t]||xh)return;ti[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=dE().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function l(y,b){y.setAttribute("width","24"),y.setAttribute("id",b),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{xh=!0,a()},y}function d(y,b){y.setAttribute("id",b),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=pE(r),b=n("text"),D=document.getElementById(b)||document.createElement("span"),x=n("learnmore"),B=document.getElementById(x)||document.createElement("a"),H=n("preprendIcon"),G=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Q=y.element;c(Q),d(B,x);const K=h();l(G,H),Q.append(G,D,B,K),document.body.appendChild(Q)}i?(D.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function mE(){var e;const t=(e=ca())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _E(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EE(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TE(){return!mE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IE(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?bE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new vn(s,c,r)}}function bE(t,e){return t.replace(SE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const SE=/\{\$([^}]+)}/g;function RE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Lh(i)&&Lh(a)){if(!Tr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function CE(t,e){const n=new PE(t,e);return n.subscribe.bind(n)}class PE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kE(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(t){return t===dr?void 0:t}function kE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const ME={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},xE=he.INFO,LE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},FE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=xE,this._logHandler=FE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ME[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const UE=(t,e)=>e.some(n=>t instanceof n);let Fh,Uh;function BE(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vp=new WeakMap,bc=new WeakMap,Np=new WeakMap,ec=new WeakMap,yl=new WeakMap;function $E(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(jn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Vp.set(n,t)}).catch(()=>{}),yl.set(e,t),e}function qE(t){if(bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});bc.set(t,e)}let Sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HE(t){Sc=t(Sc)}function zE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tc(this),e,...n);return Np.set(r,e.sort?e.sort():[e]),jn(r)}:jE().includes(t)?function(...e){return t.apply(tc(this),e),jn(Vp.get(this))}:function(...e){return jn(t.apply(tc(this),e))}}function WE(t){return typeof t=="function"?zE(t):(t instanceof IDBTransaction&&qE(t),UE(t,BE())?new Proxy(t,Sc):t)}function jn(t){if(t instanceof IDBRequest)return $E(t);if(ec.has(t))return ec.get(t);const e=WE(t);return e!==t&&(ec.set(t,e),yl.set(e,t)),e}const tc=t=>yl.get(t);function KE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=jn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(jn(a.result),l.oldVersion,l.newVersion,jn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const GE=["get","getKey","getAll","getAllKeys","count"],QE=["put","add","delete","clear"],nc=new Map;function Bh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return nc.set(e,i),i}HE(t=>({...t,get:(e,n,r)=>Bh(e,n)||t.get(e,n,r),has:(e,n)=>!!Bh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",jh="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new _l("@firebase/app"),YE="@firebase/app-compat",ZE="@firebase/analytics-compat",eT="@firebase/analytics",tT="@firebase/app-check-compat",nT="@firebase/app-check",rT="@firebase/auth",sT="@firebase/auth-compat",iT="@firebase/database",oT="@firebase/data-connect",aT="@firebase/database-compat",cT="@firebase/functions",lT="@firebase/functions-compat",uT="@firebase/installations",hT="@firebase/installations-compat",fT="@firebase/messaging",dT="@firebase/messaging-compat",pT="@firebase/performance",gT="@firebase/performance-compat",mT="@firebase/remote-config",_T="@firebase/remote-config-compat",yT="@firebase/storage",vT="@firebase/storage-compat",ET="@firebase/firestore",TT="@firebase/ai",IT="@firebase/firestore-compat",wT="firebase",AT="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="[DEFAULT]",bT={[Rc]:"fire-core",[YE]:"fire-core-compat",[eT]:"fire-analytics",[ZE]:"fire-analytics-compat",[nT]:"fire-app-check",[tT]:"fire-app-check-compat",[rT]:"fire-auth",[sT]:"fire-auth-compat",[iT]:"fire-rtdb",[oT]:"fire-data-connect",[aT]:"fire-rtdb-compat",[cT]:"fire-fn",[lT]:"fire-fn-compat",[uT]:"fire-iid",[hT]:"fire-iid-compat",[fT]:"fire-fcm",[dT]:"fire-fcm-compat",[pT]:"fire-perf",[gT]:"fire-perf-compat",[mT]:"fire-rc",[_T]:"fire-rc-compat",[yT]:"fire-gcs",[vT]:"fire-gcs-compat",[ET]:"fire-fst",[IT]:"fire-fst-compat",[TT]:"fire-vertex","fire-js":"fire-js",[wT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,ST=new Map,Pc=new Map;function $h(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Pc.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of Po.values())$h(n,t);for(const n of ST.values())$h(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Ci("app","Firebase",RT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=AT;function Dp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Cc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=Sp()),!n)throw $n.create("no-options");const i=Po.get(s);if(i){if(Tr(n,i.options)&&Tr(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const a=new OE(s);for(const l of Pc.values())a.addComponent(l);const c=new CT(n,r,a);return Po.set(s,c),c}function kp(t=Cc){const e=Po.get(t);if(!e&&t===Cc&&Sp())return Dp();if(!e)throw $n.create("no-app",{appName:t});return e}function qn(t,e,n){let r=bT[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}ts(new Ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="firebase-heartbeat-database",VT=1,di="firebase-heartbeat-store";let rc=null;function Op(){return rc||(rc=KE(PT,VT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(di)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),rc}async function NT(t){try{const n=(await Op()).transaction(di),r=await n.objectStore(di).get(Mp(t));return await n.done,r}catch(e){if(e instanceof vn)pn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function qh(t,e){try{const r=(await Op()).transaction(di,"readwrite");await r.objectStore(di).put(e,Mp(t)),await r.done}catch(n){if(n instanceof vn)pn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Mp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1024,kT=30;class OT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>kT){const a=LT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hh(),{heartbeatsToSend:r,unsentEntries:s}=MT(this._heartbeatsCache.heartbeats),i=Co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pn.warn(n),""}}}function Hh(){return new Date().toISOString().substring(0,10)}function MT(t,e=DT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zh(t){return Co(JSON.stringify({version:2,heartbeats:t})).length}function LT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){ts(new Ir("platform-logger",e=>new JE(e),"PRIVATE")),ts(new Ir("heartbeat",e=>new OT(e),"PRIVATE")),qn(Rc,jh,t),qn(Rc,jh,"esm2020"),qn("fire-js","")}FT("");function xp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UT=xp,Lp=new Ci("auth","Firebase",xp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new _l("@firebase/auth");function BT(t,...e){Vo.logLevel<=he.WARN&&Vo.warn(`Auth (${hs}): ${t}`,...e)}function uo(t,...e){Vo.logLevel<=he.ERROR&&Vo.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Tl(t,...e)}function Dt(t,...e){return Tl(t,...e)}function El(t,e,n){const r={...UT(),[e]:n};return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return El(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),El(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lp.create(t,...e)}function ne(t,e,...n){if(!t)throw Tl(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function gn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $T(){return Wh()==="http:"||Wh()==="https:"}function Wh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($T()||yE()||"connection"in navigator)?navigator.onLine:!0}function HT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=gE()||vE()}get(){return qT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KT=new Vi(3e4,6e4);function wl(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fs(t,e,n,r,s={}){return Up(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Pi({key:t.config.apiKey,...a}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return _E()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(h.credentials="include"),Fp.fetch()(await Bp(t,t.config.apiHost,n,c),h)})}async function Up(t,e,n){t._canInitEmulator=!1;const r={...zT,...e};try{const s=new QT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Xi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Xi(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw El(t,d,h);Jt(t,d)}}catch(s){if(s instanceof vn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function GT(t,e,n,r,s={}){const i=await fs(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Il(t.config,s):`${t.config.apiScheme}://${s}`;return WT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class QT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),KT.get())})}}function Xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function No(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XT(t,e=!1){const n=ft(t),r=await n.getIdToken(e),s=Al(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(sc(s.auth_time)),issuedAtTime:ni(sc(s.iat)),expirationTime:ni(sc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function Al(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ap(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kh(t){const e=Al(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&YT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){var p;const e=t.auth,n=await t.getIdToken(),r=await pi(t,No(e,{idToken:n}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?jp(s.providerUserInfo):[],a=tI(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function eI(t){const e=ft(t);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){const n=await Up(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Bp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(l.credentials="include"),Fp.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rI(t,e){return fs(t,"POST","/v2/accounts:revokeToken",wl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Kh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Kr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new ZT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XT(this,e)}reload(){return eI(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await pi(this,JT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:b,providerData:D,stsTokenManager:x}=n;ne(p&&x,e,"internal-error");const B=Kr.fromJSON(this.name,x);ne(typeof p=="string",e,"internal-error"),Rn(r,e.name),Rn(s,e.name),ne(typeof y=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),Rn(i,e.name),Rn(a,e.name),Rn(c,e.name),Rn(l,e.name),Rn(h,e.name),Rn(d,e.name);const H=new Pt({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&(H.providerData=D.map(G=>({...G}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Do(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const l=new Pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Nc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map;function on(t){gn(t instanceof Function,"Expected a class definition");let e=Gh.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$p.type="NONE";const Qh=$p;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await No(this.auth,{idToken:e}).catch(()=>{});return n?Pt._fromGetAccountInfoResponse(this.auth,n,e):null}return Pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(on(Qh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||on(Qh);const a=ho(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const y=await No(e,{idToken:d}).catch(()=>{});if(!y)break;p=await Pt._fromGetAccountInfoResponse(e,y,d)}else p=Pt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gp(e))return"Blackberry";if(Qp(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||zp(e))&&!e.includes("edge/"))return"Chrome";if(Kp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qp(t=ct()){return/firefox\//i.test(t)}function Hp(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zp(t=ct()){return/crios\//i.test(t)}function Wp(t=ct()){return/iemobile/i.test(t)}function Kp(t=ct()){return/android/i.test(t)}function Gp(t=ct()){return/blackberry/i.test(t)}function Qp(t=ct()){return/webos/i.test(t)}function bl(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sI(t=ct()){var e;return bl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function iI(){return EE()&&document.documentMode===10}function Jp(t=ct()){return bl(t)||Kp(t)||Qp(t)||Gp(t)||/windows phone/i.test(t)||Wp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e=[]){let n;switch(t){case"Browser":n=Jh(ct());break;case"Worker":n=`${Jh(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e={}){return fs(t,"GET","/v2/passwordPolicy",wl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=6;class lI{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??cI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new oI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await No(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(yr(this));const n=e?ft(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aI(this),n=new lI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&BT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function la(t){return ft(t)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=CE(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hI(t){Sl=t}function fI(t){return Sl.loadJS(t)}function dI(){return Sl.gapiScript}function pI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e){const n=vl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tr(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function mI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _I(t,e,n){const r=la(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yp(e),{host:a,port:c}=yI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Tr(h,r.config.emulator)&&Tr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,us(a)?(Cp(`${i}//${a}${l}`),Pp("Auth",!0)):vI()}function Yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=Yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Yh(a)}}}function Yh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return GT(t,"POST","/v1/accounts:signInWithIdp",wl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="http://localhost";class wr extends Zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new wr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:EI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ni{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Ni{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),a=Zh(r);return new ns({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zh(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ko(e,n,r,s)}}function eg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(t,i,e,r):i})}async function TI(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(yr(r));const s="reauthenticate";try{const i=await pi(t,eg(r,s,e,t),n);ne(i.idToken,r,"internal-error");const a=Al(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(t.uid===c,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e,n=!1){if(Ct(t.app))return Promise.reject(yr(t));const r="signIn",s=await eg(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function AI(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function bI(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function SI(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function RI(t){return ft(t).signOut()}const Oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=1e3,PI=10;class ng extends tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);iI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ng.type="LOCAL";const VI=ng;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rg.type="SESSION";const sg=rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await NI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Cl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function kI(t){Ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function OI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function xI(){return ig()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebaseLocalStorageDb",LI=1,Mo="firebaseLocalStorage",ag="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ha(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function FI(){const t=indexedDB.deleteDatabase(og);return new Di(t).toPromise()}function Dc(){const t=indexedDB.open(og,LI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mo,{keyPath:ag})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),await FI(),e(await Dc()))})})}async function ef(t,e,n){const r=ha(t,!0).put({[ag]:e,value:n});return new Di(r).toPromise()}async function UI(t,e){const n=ha(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function tf(t,e){const n=ha(t,!0).delete(e);return new Di(n).toPromise()}const BI=800,jI=3;class cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(xI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await OI(),!this.activeServiceWorker)return;this.sender=new DI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await ef(e,Oo,"1"),await tf(e,Oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cg.type="LOCAL";const $I=cg;new Vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){return e?on(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qI(t){return wI(t.auth,new Pl(t),t.bypassAuthState)}function HI(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),II(n,new Pl(t),t.bypassAuthState)}async function zI(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),TI(n,new Pl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qI;case"linkViaPopup":case"linkViaRedirect":return zI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:Jt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new Vi(2e3,1e4);async function KI(t,e,n){if(Ct(t.app))return Promise.reject(Dt(t,"operation-not-supported-in-this-environment"));const r=la(t);jT(t,e,Rl);const s=lg(r,n);return new pr(r,"signInViaPopup",e,s).executeNotNull()}class pr extends ug{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="pendingRedirect",fo=new Map;class QI extends ug{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await JI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JI(t,e){const n=ZI(e),r=YI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function XI(t,e){fo.set(t._key(),e)}function YI(t){return on(t._redirectPersistence)}function ZI(t){return ho(GI,t.config.apiKey,t.name)}async function ew(t,e,n=!1){if(Ct(t.app))return Promise.reject(yr(t));const r=la(t),s=lg(r,e),a=await new QI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=600*1e3;class nw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}}function nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ow=/^https?/;async function aw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sw(t);for(const n of e)try{if(cw(n))return}catch{}Jt(t,"unauthorized-domain")}function cw(t){const e=Vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!ow.test(n))return!1;if(iw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new Vi(3e4,6e4);function rf(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uw(t){return new Promise((e,n)=>{var s,i,a;function r(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(Dt(t,"network-request-failed"))},timeout:lw.get()})}if((i=(s=Ht().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Ht().gapi)!=null&&a.load)r();else{const c=pI("iframefcb");return Ht()[c]=()=>{gapi.load?r():n(Dt(t,"network-request-failed"))},fI(`${dI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw po=null,e})}let po=null;function hw(t){return po=po||uw(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new Vi(5e3,15e3),dw="__/auth/iframe",pw="emulator/auth/iframe",gw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _w(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Il(e,pw):`https://${t.config.authDomain}/${dw}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=mw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function yw(t){const e=await hw(t),n=Ht().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:_w(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Dt(t,"network-request-failed"),c=Ht().setTimeout(()=>{i(a)},fw.get());function l(){Ht().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ew=500,Tw=600,Iw="_blank",ww="http://localhost";class sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Aw(t,e,n,r=Ew,s=Tw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...vw,width:r.toString(),height:s.toString(),top:i,left:a},h=ct().toLowerCase();n&&(c=zp(h)?Iw:n),qp(h)&&(e=e||ww,l.scrollbars="yes");const d=Object.entries(l).reduce((y,[b,D])=>`${y}${b}=${D},`,"");if(sI(h)&&c!=="_self")return bw(e||"",c),new sf(null);const p=window.open(e||"",c,d);ne(p,t,"popup-blocked");try{p.focus()}catch{}return new sf(p)}function bw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="__/auth/handler",Rw="emulator/auth/handler",Cw=encodeURIComponent("fac");async function of(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof Rl){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",RE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ni){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${Cw}=${encodeURIComponent(l)}`:"";return`${Pw(t)}?${Pi(c).slice(1)}${h}`}function Pw({config:t}){return t.emulator?Il(t,Rw):`https://${t.authDomain}/${Sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class Vw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sg,this._completeRedirectFn=ew,this._overrideRedirectResult=XI}async _openPopup(e,n,r,s){var a;gn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await of(e,n,r,Vc(),s);return Aw(e,i,Cl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await of(e,n,r,Vc(),s);return kI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yw(e),r=new nw(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ic];i!==void 0&&n(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jp()||Hp()||bl()}}const Nw=Vw;var af="@firebase/auth",cf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ow(t){ts(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xp(t)},h=new uI(r,s,i,l);return mI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Ir("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(r=>new Dw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(af,cf,kw(t)),qn(af,cf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=300,xw=Rp("authIdTokenMaxAge")||Mw;let lf=null;const Lw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xw)return;const s=n==null?void 0:n.token;lf!==s&&(lf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fw(t=kp()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gI(t,{popupRedirectResolver:Nw,persistence:[$I,VI,sg]}),r=Rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Lw(i.toString());bI(n,a,()=>a(n.currentUser)),AI(n,c=>a(c))}}const s=bp("auth");return s&&_I(n,`http://${s}`),n}function Uw(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}hI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Uw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ow("Browser");const tr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Bw={},jw={class:"carafe"};function $w(t,e){return le(),ve("div",jw,[io(t.$slots,"top",{},void 0,!0),io(t.$slots,"mid",{},void 0,!0),io(t.$slots,"bottom",{},void 0,!0)])}const qw=tr(Bw,[["render",$w],["__scopeId","data-v-fff01356"]]),Hw={},zw={class:"mug"};function Ww(t,e){return le(),ve("div",zw,[io(t.$slots,"default")])}const Kw=tr(Hw,[["render",Ww]]),Gw=Si({__name:"Syrup",props:{color:{},height:{}},setup(t){return(e,n)=>(le(),ve("div",{class:"syrup",style:ls({backgroundColor:t.color,height:t.height+"%"})},null,4))}}),Qw=tr(Gw,[["__scopeId","data-v-5c65cdd9"]]),Jw=Si({__name:"Base",props:{color:{},height:{}},setup(t){return(e,n)=>(le(),ve("div",{class:"baseBeverage",style:ls({backgroundColor:t.color,height:t.height+"%"})},null,4))}}),Xw=tr(Jw,[["__scopeId","data-v-b03ea88d"]]),Yw=Si({__name:"Creamer",props:{color:{},height:{}},setup(t){return(e,n)=>(le(),ve("div",{class:"froth",style:ls({backgroundColor:t.color,height:t.height+"%"})},[(le(),ve(xe,null,kn(5,r=>ye("div",{key:r,class:"foam"})),64))],4))}}),Zw=tr(Yw,[["__scopeId","data-v-365c7b44"]]),eA={},tA={id:"steam"},nA={class:"stream"};function rA(t,e){return le(),ve("div",tA,[(le(),ve(xe,null,kn(3,()=>ye("div",nA)),64))])}const sA=tr(eA,[["render",rA]]),iA={},oA={id:"condensation"},aA={class:"flake"};function cA(t,e){return le(),ve("div",oA,[(le(),ve(xe,null,kn(3,()=>ye("div",aA)),64))])}const lA=tr(iA,[["render",cA]]),Yi=20,uA=Si({__name:"Beverage",props:{isIced:{type:Boolean},base:{},creamer:{},syrup:{}},setup(t){const e=t,n=Zs(()=>e.creamer.name!=="No Cream"),r=Zs(()=>e.syrup.name!=="No Syrup"),s=Zs(()=>100-(n.value?Yi:0)-(r.value?Yi:0));return(i,a)=>(le(),On(Kw,null,{default:Us(()=>[t.isIced?(le(),On(lA,{key:0})):(le(),On(sA,{key:1})),Tt(qw,null,{top:Us(()=>[n.value?(le(),On(Zw,{key:0,color:t.creamer.color,height:Yi},null,8,["color"])):Ys("",!0)]),mid:Us(()=>[r.value?(le(),On(Qw,{key:0,color:t.syrup.color,height:Yi},null,8,["color"])):Ys("",!0)]),bottom:Us(()=>[Tt(Xw,{color:t.base.color,height:s.value},null,8,["color","height"])]),_:1})]),_:1}))}});var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.F=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(I,T,S){for(var v=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)v[Le-2]=arguments[Le];return m.prototype[T].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);const I=Array(16);if(typeof m=="string")for(var T=0;T<16;++T)I[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;T<16;++T)I[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],T=w.g[2];let S=w.g[3],v;v=m+(S^_&(T^S))+I[0]+3614090360&4294967295,m=_+(v<<7&4294967295|v>>>25),v=S+(T^m&(_^T))+I[1]+3905402710&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(_^S&(m^_))+I[2]+606105819&4294967295,T=S+(v<<17&4294967295|v>>>15),v=_+(m^T&(S^m))+I[3]+3250441966&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(S^_&(T^S))+I[4]+4118548399&4294967295,m=_+(v<<7&4294967295|v>>>25),v=S+(T^m&(_^T))+I[5]+1200080426&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(_^S&(m^_))+I[6]+2821735955&4294967295,T=S+(v<<17&4294967295|v>>>15),v=_+(m^T&(S^m))+I[7]+4249261313&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(S^_&(T^S))+I[8]+1770035416&4294967295,m=_+(v<<7&4294967295|v>>>25),v=S+(T^m&(_^T))+I[9]+2336552879&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(_^S&(m^_))+I[10]+4294925233&4294967295,T=S+(v<<17&4294967295|v>>>15),v=_+(m^T&(S^m))+I[11]+2304563134&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(S^_&(T^S))+I[12]+1804603682&4294967295,m=_+(v<<7&4294967295|v>>>25),v=S+(T^m&(_^T))+I[13]+4254626195&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(_^S&(m^_))+I[14]+2792965006&4294967295,T=S+(v<<17&4294967295|v>>>15),v=_+(m^T&(S^m))+I[15]+1236535329&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(T^S&(_^T))+I[1]+4129170786&4294967295,m=_+(v<<5&4294967295|v>>>27),v=S+(_^T&(m^_))+I[6]+3225465664&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(S^m))+I[11]+643717713&4294967295,T=S+(v<<14&4294967295|v>>>18),v=_+(S^m&(T^S))+I[0]+3921069994&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(T^S&(_^T))+I[5]+3593408605&4294967295,m=_+(v<<5&4294967295|v>>>27),v=S+(_^T&(m^_))+I[10]+38016083&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(S^m))+I[15]+3634488961&4294967295,T=S+(v<<14&4294967295|v>>>18),v=_+(S^m&(T^S))+I[4]+3889429448&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(T^S&(_^T))+I[9]+568446438&4294967295,m=_+(v<<5&4294967295|v>>>27),v=S+(_^T&(m^_))+I[14]+3275163606&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(S^m))+I[3]+4107603335&4294967295,T=S+(v<<14&4294967295|v>>>18),v=_+(S^m&(T^S))+I[8]+1163531501&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(T^S&(_^T))+I[13]+2850285829&4294967295,m=_+(v<<5&4294967295|v>>>27),v=S+(_^T&(m^_))+I[2]+4243563512&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(S^m))+I[7]+1735328473&4294967295,T=S+(v<<14&4294967295|v>>>18),v=_+(S^m&(T^S))+I[12]+2368359562&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(_^T^S)+I[5]+4294588738&4294967295,m=_+(v<<4&4294967295|v>>>28),v=S+(m^_^T)+I[8]+2272392833&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^_)+I[11]+1839030562&4294967295,T=S+(v<<16&4294967295|v>>>16),v=_+(T^S^m)+I[14]+4259657740&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(_^T^S)+I[1]+2763975236&4294967295,m=_+(v<<4&4294967295|v>>>28),v=S+(m^_^T)+I[4]+1272893353&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^_)+I[7]+4139469664&4294967295,T=S+(v<<16&4294967295|v>>>16),v=_+(T^S^m)+I[10]+3200236656&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(_^T^S)+I[13]+681279174&4294967295,m=_+(v<<4&4294967295|v>>>28),v=S+(m^_^T)+I[0]+3936430074&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^_)+I[3]+3572445317&4294967295,T=S+(v<<16&4294967295|v>>>16),v=_+(T^S^m)+I[6]+76029189&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(_^T^S)+I[9]+3654602809&4294967295,m=_+(v<<4&4294967295|v>>>28),v=S+(m^_^T)+I[12]+3873151461&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^_)+I[15]+530742520&4294967295,T=S+(v<<16&4294967295|v>>>16),v=_+(T^S^m)+I[2]+3299628645&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(T^(_|~S))+I[0]+4096336452&4294967295,m=_+(v<<6&4294967295|v>>>26),v=S+(_^(m|~T))+I[7]+1126891415&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~_))+I[14]+2878612391&4294967295,T=S+(v<<15&4294967295|v>>>17),v=_+(S^(T|~m))+I[5]+4237533241&4294967295,_=T+(v<<21&4294967295|v>>>11),v=m+(T^(_|~S))+I[12]+1700485571&4294967295,m=_+(v<<6&4294967295|v>>>26),v=S+(_^(m|~T))+I[3]+2399980690&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~_))+I[10]+4293915773&4294967295,T=S+(v<<15&4294967295|v>>>17),v=_+(S^(T|~m))+I[1]+2240044497&4294967295,_=T+(v<<21&4294967295|v>>>11),v=m+(T^(_|~S))+I[8]+1873313359&4294967295,m=_+(v<<6&4294967295|v>>>26),v=S+(_^(m|~T))+I[15]+4264355552&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~_))+I[6]+2734768916&4294967295,T=S+(v<<15&4294967295|v>>>17),v=_+(S^(T|~m))+I[13]+1309151649&4294967295,_=T+(v<<21&4294967295|v>>>11),v=m+(T^(_|~S))+I[4]+4149444226&4294967295,m=_+(v<<6&4294967295|v>>>26),v=S+(_^(m|~T))+I[11]+3174756917&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~_))+I[2]+718787259&4294967295,T=S+(v<<15&4294967295|v>>>17),v=_+(S^(T|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.v=function(w,m){m===void 0&&(m=w.length);const _=m-this.blockSize,I=this.C;let T=this.h,S=0;for(;S<m;){if(T==0)for(;S<=_;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<m;)if(I[T++]=w.charCodeAt(S++),T==this.blockSize){s(this,I),T=0;break}}else for(;S<m;)if(I[T++]=w[S++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=m},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)w[m++]=this.g[_]>>>I&255;return w};function i(w,m){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;const _=[];let I=!0;for(let T=w.length-1;T>=0;T--){const S=w[T]|0;I&&S==m||(_[T]=S,I=!1)}this.g=_}var c={};function l(w){return-128<=w&&w<128?i(w,function(m){return new a([m|0],m<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return B(h(-w));const m=[];let _=1;for(let I=0;w>=_;I++)m[I]=w/_|0,_*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return B(d(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(m,8));let I=p;for(let S=0;S<w.length;S+=8){var T=Math.min(8,w.length-S);const v=parseInt(w.substring(S,S+T),m);T<8?(T=h(Math.pow(m,T)),I=I.j(T).add(h(v))):(I=I.j(_),I=I.add(h(v)))}return I}var p=l(0),y=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(x(this))return-B(this).m();let w=0,m=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);w+=(I>=0?I:4294967296+I)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(x(this))return"-"+B(this).toString(w);const m=h(Math.pow(w,6));var _=this;let I="";for(;;){const T=K(_,m).g;_=H(_,T.j(m));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=T,D(_))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=H(this,w),x(w)?-1:D(w)?0:1};function B(w){const m=w.g.length,_=[];for(let I=0;I<m;I++)_[I]=~w.g[I];return new a(_,~w.h).add(y)}t.abs=function(){return x(this)?B(this):this},t.add=function(w){const m=Math.max(this.g.length,w.g.length),_=[];let I=0;for(let T=0;T<=m;T++){let S=I+(this.i(T)&65535)+(w.i(T)&65535),v=(S>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);I=v>>>16,S&=65535,v&=65535,_[T]=v<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(w,m){return w.add(B(m))}t.j=function(w){if(D(this)||D(w))return p;if(x(this))return x(w)?B(this).j(B(w)):B(B(this).j(w));if(x(w))return B(this.j(B(w)));if(this.l(b)<0&&w.l(b)<0)return h(this.m()*w.m());const m=this.g.length+w.g.length,_=[];for(var I=0;I<2*m;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<w.g.length;T++){const S=this.i(I)>>>16,v=this.i(I)&65535,Le=w.i(T)>>>16,It=w.i(T)&65535;_[2*I+2*T]+=v*It,G(_,2*I+2*T),_[2*I+2*T+1]+=S*It,G(_,2*I+2*T+1),_[2*I+2*T+1]+=v*Le,G(_,2*I+2*T+1),_[2*I+2*T+2]+=S*Le,G(_,2*I+2*T+2)}for(w=0;w<m;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=m;w<2*m;w++)_[w]=0;return new a(_,0)};function G(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Q(w,m){this.g=w,this.h=m}function K(w,m){if(D(m))throw Error("division by zero");if(D(w))return new Q(p,p);if(x(w))return m=K(B(w),m),new Q(B(m.g),B(m.h));if(x(m))return m=K(w,B(m)),new Q(B(m.g),m.h);if(w.g.length>30){if(x(w)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,I=m;I.l(w)<=0;)_=se(_),I=se(I);var T=Ie(_,1),S=Ie(I,1);for(I=Ie(I,2),_=Ie(_,2);!D(I);){var v=S.add(I);v.l(w)<=0&&(T=T.add(_),S=v),I=Ie(I,1),_=Ie(_,1)}return m=H(w,T.j(m)),new Q(T,m)}for(T=p;w.l(m)>=0;){for(_=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=h(_),v=S.j(m);x(v)||v.l(w)>0;)_-=I,S=h(_),v=S.j(m);D(S)&&(S=y),T=T.add(S),w=H(w,v)}return new Q(T,w)}t.B=function(w){return K(this,w).h},t.and=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)&w.i(I);return new a(_,this.h&w.h)},t.or=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)|w.i(I);return new a(_,this.h|w.h)},t.xor=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)^w.i(I);return new a(_,this.h^w.h)};function se(w){const m=w.g.length+1,_=[];for(let I=0;I<m;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(_,w.h)}function Ie(w,m){const _=m>>5;m%=32;const I=w.g.length-_,T=[];for(let S=0;S<I;S++)T[S]=m>0?w.i(S+_)>>>m|w.i(S+_+1)<<32-m:w.i(S+_);return new a(T,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Hn=a}).apply(typeof uf<"u"?uf:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,js,pg,go,kc,gg,mg,_g;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,R,C){for(var j=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)j[ae-2]=arguments[ae];return u.prototype[R].apply(g,j)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function D(o,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const C=R.length||0;o.length=f+C;for(let j=0;j<C;j++)o[f+j]=R[j]}else o.push(R)}}class x{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){a.setTimeout(()=>{throw o},0)}function H(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,f){const g=Q.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new x(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let se,Ie=!1,w=new G,m=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(_)}};function _(){for(var o;o=H();){try{o.h.call(o.g)}catch(f){B(f)}var u=Q;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}Ie=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function Le(o,u){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Le,T),Le.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var It="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function ce(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Ne,this.da=this.fa=!1}function _e(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function Vr(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function xt(o){const u={};for(const f in o)u[f]=o[f];return u}const pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ys(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<pt.length;C++)f=pt[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Nr(o){this.src=o,this.g={},this.h=0}Nr.prototype.add=function(o,u,f,g,R){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=Yt(o,u,g,R);return j>-1?(u=o[j],f||(u.fa=!1)):(u=new ce(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function vs(o,u){const f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=R>=0)&&Array.prototype.splice.call(g,R,1),C&&(_e(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Yt(o,u,f,g){for(let R=0;R<o.length;++R){const C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var En="closure_lm_"+(Math.random()*1e6|0),rr={};function Es(o,u,f,g,R){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Es(o,u[C],f,g,R);return null}return f=$(f),o&&o[It]?o.J(u,f,c(g)?!!g.capture:!1,R):sr(o,u,f,!1,g,R)}function sr(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");const j=c(R)?!!R.capture:!!R;let ae=k(o);if(ae||(o[En]=ae=new Nr(o)),f=ae.add(u,f,g,j,C),f.proxy)return f;if(g=hu(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)S||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(P(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function hu(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function E(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)E(o,u[C],f,g,R);else g=c(g)?!!g.capture:!!g,f=$(f),o&&o[It]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],f=Yt(u,f,g,R),f>-1&&(_e(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=k(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Yt(u,f,g,R)),(f=o>-1?u[o]:null)&&A(f))}function A(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[It])vs(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(P(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=k(u))?(vs(f,o),f.h==0&&(f.src=null,u[En]=null)):_e(o)}}}function P(o){return o in rr?rr[o]:rr[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new Le(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&A(o),o=f.call(g,u)}return o}function k(o){return o=o[En],o instanceof Nr?o:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(o){return typeof o=="function"?o:(o[O]||(o[O]=function(u){return o.handleEvent(u)}),o[O])}function F(){I.call(this),this.i=new Nr(this),this.M=this,this.G=null}p(F,I),F.prototype[It]=!0,F.prototype.removeEventListener=function(o,u,f,g){E(this,o,u,f,g)};function L(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new T(u,o);else if(u instanceof T)u.target=u.target||o;else{var R=u;u=new T(g,o),ys(u,R)}R=!0;let C,j;if(f)for(j=f.length-1;j>=0;j--)C=u.g=f[j],R=M(C,g,!0,u)&&R;if(C=u.g=o,R=M(C,g,!0,u)&&R,R=M(C,g,!1,u)&&R,f)for(j=0;j<f.length;j++)C=u.g=f[j],R=M(C,g,!1,u)&&R}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)_e(f[g]);delete o.g[u],o.h--}}this.G=null},F.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},F.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function M(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let C=0;C<u.length;++C){const j=u[C];if(j&&!j.da&&j.capture==f){const ae=j.listener,qe=j.ha||j.src;j.fa&&vs(o.i,j),R=ae.call(qe,g)!==!1&&R}}return R&&!g.defaultPrevented}function Y(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function q(o){o.g=Y(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class X extends I{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){I.call(this),this.h=o,this.g={}}p(Z,I);var ue=[];function we(o){wt(o.g,function(u,f){this.g.hasOwnProperty(f)&&A(u)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),we(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ge=a.JSON.stringify,Ze=a.JSON.parse,et=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function gt(){}function mt(){}var Rt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dr(){T.call(this,"d")}p(Dr,T);function Ge(){T.call(this,"c")}p(Ge,T);var ze={},Ts=null;function ir(){return Ts=Ts||new F}ze.Ia="serverreachability";function fu(o){T.call(this,ze.Ia,o)}p(fu,T);function Is(o){const u=ir();L(u,new fu(u))}ze.STAT_EVENT="statevent";function du(o,u){T.call(this,ze.STAT_EVENT,o),this.stat=u}p(du,T);function lt(o){const u=ir();L(u,new du(u,o))}ze.Ja="timingevent";function pu(o,u){T.call(this,ze.Ja,o),this.size=u}p(pu,T);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.ua=function(){this.g=!1};function Jm(o,u,f,g,R,C){o.info(function(){if(o.g)if(C){var j="",ae=C.split("&");for(let Ae=0;Ae<ae.length;Ae++){var qe=ae[Ae].split("=");if(qe.length>1){const We=qe[0];qe=qe[1];const Ft=We.split("_");j=Ft.length>=2&&Ft[1]=="type"?j+(We+"="+qe+"&"):j+(We+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function Xm(o,u,f,g,R,C,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+j})}function kr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Zm(o,f)+(g?" "+g:"")})}function Ym(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function Zm(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return ge(C)}catch{return u}}var Fi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},gu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},mu;function Ra(){}p(Ra,gt),Ra.prototype.g=function(){return new XMLHttpRequest},mu=new Ra;function bs(o){return encodeURIComponent(String(o))}function e_(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Tn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var yu={},Ca={};function Pa(o,u,f){o.M=1,o.A=Bi(Lt(u)),o.u=f,o.R=!0,vu(o,null)}function vu(o,u){o.F=Date.now(),Ui(o),o.B=Lt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Du(f.i,"t",g),o.C=0,f=o.j.L,o.h=new _u,o.g=Ju(o.j,f?u:null,!o.u),o.P>0&&(o.O=new X(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(ue[0]=R.toString()),R=ue);for(let C=0;C<R.length;C++){const j=Es(f,R[C],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.J?xt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Is(),Jm(o.i,o.v,o.B,o.l,o.S,o.u)}Tn.prototype.ba=function(o){o=o.target;const u=this.O;u&&An(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const ae=An(this.g),qe=this.g.ya(),Ae=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Uu(this.g)))){this.K||ae!=4||qe==7||(qe==8||Ae<=0?Is(3):Is(2)),Va(this);var u=this.g.ca();this.X=u;var f=t_(this);if(this.o=u==200,Xm(this.i,this.v,this.B,this.l,this.S,ae,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var C=g;break t}}C=null}if(o=C)kr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Na(this,o);else{this.o=!1,this.m=3,lt(12),or(this),Ss(this);break e}}if(this.R){o=!0;let We;for(;!this.K&&this.C<f.length;)if(We=n_(this,f),We==Ca){ae==4&&(this.m=4,lt(14),o=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(We==yu){this.m=4,lt(15),kr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else kr(this.i,this.l,We,null),Na(this,We);if(Eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,lt(16),o=!1),this.o=this.o&&o,!o)kr(this.i,this.l,f,"[Invalid Chunked Response]"),or(this),Ss(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ua(j),j.P=!0,lt(11))}}else kr(this.i,this.l,f,null),Na(this,f);ae==4&&or(this),this.o&&!this.K&&(ae==4?Wu(this.j,this):(this.o=!1,Ui(this)))}else m_(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),or(this),Ss(this)}}}catch{}finally{}};function t_(o){if(!Eu(o))return o.g.la();const u=Uu(o.g);if(u==="")return"";let f="";const g=u.length,R=An(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return or(o),Ss(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,f+=o.h.i.decode(u[C],{stream:!(R&&C==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function Eu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function n_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Ca:(f=Number(u.substring(f,g)),isNaN(f)?yu:(g+=1,g+f>u.length?Ca:(u=u.slice(g,g+f),o.C=g+f,u)))}Tn.prototype.cancel=function(){this.K=!0,or(this)};function Ui(o){o.T=Date.now()+o.H,Tu(o,o.H)}function Tu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ws(h(o.aa,o),u)}function Va(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Tn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Ym(this.i,this.B),this.M!=2&&(Is(),lt(17)),or(this),this.m=2,Ss(this)):Tu(this,this.T-o)};function Ss(o){o.j.I==0||o.K||Wu(o.j,o)}function or(o){Va(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,we(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Na(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Da(f.h,o))){if(!o.L&&Da(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)zi(f),qi(f);else break e;Fa(f),lt(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ws(h(f.Va,f),6e3));Au(f.h)<=1&&f.ta&&(f.ta=void 0)}else cr(f,11)}else if((o.L||f.g==o)&&zi(f),!v(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let Ae=R[u];const We=Ae[0];if(!(We<=f.K))if(f.K=We,Ae=Ae[1],f.I==2)if(Ae[0]=="c"){f.M=Ae[1],f.ba=Ae[2];const Ft=Ae[3];Ft!=null&&(f.ka=Ft,f.j.info("VER="+f.ka));const lr=Ae[4];lr!=null&&(f.za=lr,f.j.info("SVER="+f.za));const bn=Ae[5];bn!=null&&typeof bn=="number"&&bn>0&&(g=1.5*bn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Sn=o.g;if(Sn){const Ki=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var C=g.h;C.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ka(C,C.h),C.h=null))}if(g.G){const Ba=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(g.wa=Ba,Pe(g.J,g.G,Ba))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var j=o;if(g.na=Qu(g,g.L?g.ba:null,g.W),j.L){bu(g.h,j);var ae=j,qe=g.O;qe&&(ae.H=qe),ae.D&&(Va(ae),Ui(ae)),g.g=j}else Hu(g);f.i.length>0&&Hi(f)}else Ae[0]!="stop"&&Ae[0]!="close"||cr(f,7);else f.I==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?cr(f,7):La(f):Ae[0]!="noop"&&f.l&&f.l.qa(Ae),f.A=0)}}Is(4)}catch{}}var r_=class{constructor(o,u){this.g=o,this.map=u}};function Iu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Au(o){return o.h?1:o.g?o.g.size:0}function Da(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ka(o,u){o.g?o.g.add(u):o.h=u}function bu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Iu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Su(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return b(o.i)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s_(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let R,C=null;g>=0?(R=o[f].substring(0,g),C=o[f].substring(g+1)):R=o[f],u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function In(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof In?(this.l=o.l,Rs(this,o.j),this.o=o.o,this.g=o.g,Cs(this,o.u),this.h=o.h,Oa(this,ku(o.i)),this.m=o.m):o&&(u=String(o).match(Ru))?(this.l=!1,Rs(this,u[1]||"",!0),this.o=Ps(u[2]||""),this.g=Ps(u[3]||"",!0),Cs(this,u[4]),this.h=Ps(u[5]||"",!0),Oa(this,u[6]||"",!0),this.m=Ps(u[7]||"")):(this.l=!1,this.i=new Ns(null,this.l))}In.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Vs(u,Cu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Vs(u,Cu,!0),"@"),o.push(bs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Vs(f,f.charAt(0)=="/"?a_:o_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Vs(f,l_)),o.join("")},In.prototype.resolve=function(o){const u=Lt(this);let f=!!o.j;f?Rs(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)Cs(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let j=0;j<R.length;){const ae=R[j++];ae=="."?g&&j==R.length&&C.push(""):ae==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&j==R.length&&C.push("")):(C.push(ae),g=!0)}g=C.join("/")}else g=R}return f?u.h=g:f=o.i.toString()!=="",f?Oa(u,ku(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Lt(o){return new In(o)}function Rs(o,u,f){o.j=f?Ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Cs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Oa(o,u,f){u instanceof Ns?(o.i=u,u_(o.i,o.l)):(f||(u=Vs(u,c_)),o.i=new Ns(u,o.l))}function Pe(o,u,f){o.i.set(u,f)}function Bi(o){return Pe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Vs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,i_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function i_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cu=/[#\/\?@]/g,o_=/[#\?:]/g,a_=/[#\?]/g,c_=/[#\?@]/g,l_=/#/g;function Ns(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ar(o){o.g||(o.g=new Map,o.h=0,o.i&&s_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ns.prototype,t.add=function(o,u){ar(this),this.i=null,o=Or(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Pu(o,u){ar(o),u=Or(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Vu(o,u){return ar(o),u=Or(o,u),o.g.has(u)}t.forEach=function(o,u){ar(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)};function Nu(o,u){ar(o);let f=[];if(typeof u=="string")Vu(o,u)&&(f=f.concat(o.g.get(Or(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}t.set=function(o,u){return ar(this),this.i=null,o=Or(this,o),Vu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=Nu(this,o),o.length>0?String(o[0]):u):u};function Du(o,u,f){Pu(o,u),f.length>0&&(o.i=null,o.g.set(Or(o,u),b(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const R=bs(f);f=Nu(this,f);for(let C=0;C<f.length;C++){let j=R;f[C]!==""&&(j+="="+bs(f[C])),o.push(j)}}return this.i=o.join("&")};function ku(o){const u=new Ns;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Or(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function u_(o,u){u&&!o.j&&(ar(o),o.i=null,o.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(Pu(this,g),Du(this,R,f))},o)),o.j=u}function h_(o,u){const f=new As;if(a.Image){const g=new Image;g.onload=d(wn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(wn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(wn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(wn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function f_(o,u){const f=new As,g=new AbortController,R=setTimeout(()=>{g.abort(),wn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?wn(f,"TestPingServer: ok",!0,u):wn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),wn(f,"TestPingServer: error",!1,u)})}function wn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function d_(){this.g=new et}function Ma(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Ma,gt),Ma.prototype.g=function(){return new ji(this.i,this.h)};function ji(o,u){F.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ji,F),t=ji.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,ks(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ou(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ou(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ds(this):ks(this),this.readyState==3&&Ou(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Ds(this))},t.Na=function(o){this.g&&(this.response=o,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ks(o)}t.setRequestHeader=function(o,u){this.A.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Mu(o){let u="";return wt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function xa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Mu(f),typeof o=="string"?f!=null&&bs(f):Pe(o,u,f))}function ke(o){F.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ke,F);var p_=/^https?$/i,g_=["POST","PUT"];t=ke.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():mu.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){xu(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(g_,u,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of f)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){xu(this,C)}};function xu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Lu(o),$i(o)}function Lu(o){o.A||(o.A=!0,L(o,"complete"),L(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,L(this,"complete"),L(this,"abort"),$i(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Fu(this):this.Xa())},t.Xa=function(){Fu(this)};function Fu(o){if(o.h&&typeof i<"u"){if(o.v&&An(o)==4)setTimeout(o.Ca.bind(o),0);else if(L(o,"readystatechange"),An(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=C===0){let j=String(o.D).match(Ru)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!p_.test(j?j.toLowerCase():"")}f=g}if(f)L(o,"complete"),L(o,"success");else{o.o=6;try{var R=An(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",Lu(o)}}finally{$i(o)}}}}function $i(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||L(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function An(o){return o.g?o.g.readyState:0}t.ca=function(){try{return An(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ze(u)}};function Uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function m_(o){const u={};o=(o.g&&An(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(v(o[g]))continue;var f=e_(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}Vr(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Bu(o){this.za=0,this.i=[],this.j=new As,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Os("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Os("baseRetryDelayMs",5e3,o),this.Za=Os("retryDelaySeedMs",1e4,o),this.Ta=Os("forwardChannelMaxRetries",2,o),this.va=Os("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Iu(o&&o.concurrentRequestLimit),this.Ba=new d_,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Bu.prototype,t.ka=8,t.I=1,t.connect=function(o,u,f,g){lt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Qu(this,null,this.W),Hi(this)};function La(o){if(ju(o),o.I==3){var u=o.V++,f=Lt(o.J);if(Pe(f,"SID",o.M),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),Ms(o,f),u=new Tn(o,o.j,u),u.M=2,u.A=Bi(Lt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=Ju(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ui(u)}Gu(o)}function qi(o){o.g&&(Ua(o),o.g.cancel(),o.g=null)}function ju(o){qi(o),o.v&&(a.clearTimeout(o.v),o.v=null),zi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Hi(o){if(!wu(o.h)&&!o.m){o.m=!0;var u=o.Ea;se||m(),Ie||(se(),Ie=!0),w.add(u,o),o.D=0}}function __(o,u){return Au(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ws(h(o.Ea,o,u),Ku(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Tn(this,this.j,o);let C=this.o;if(this.U&&(C?(C=xt(C),ys(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=qu(this,R,u),f=Lt(this.J),Pe(f,"RID",o),Pe(f,"CVER",22),this.G&&Pe(f,"X-HTTP-Session-Id",this.G),Ms(this,f),C&&(this.R?u="headers="+bs(Mu(C))+"&"+u:this.u&&xa(f,this.u,C)),ka(this.h,R),this.Ra&&Pe(f,"TYPE","init"),this.S?(Pe(f,"$req",u),Pe(f,"SID","null"),R.U=!0,Pa(R,f,null)):Pa(R,f,u),this.I=2}}else this.I==3&&(o?$u(this,o):this.i.length==0||wu(this.h)||$u(this))};function $u(o,u){var f;u?f=u.l:f=o.V++;const g=Lt(o.J);Pe(g,"SID",o.M),Pe(g,"RID",f),Pe(g,"AID",o.K),Ms(o,g),o.u&&o.o&&xa(g,o.u,o.o),f=new Tn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=qu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ka(o.h,f),Pa(f,g,u)}function Ms(o,u){o.H&&wt(o.H,function(f,g){Pe(u,g,f)}),o.l&&wt({},function(f,g){Pe(u,g,f)})}function qu(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let ae=-1;for(;;){const qe=["count="+f];ae==-1?f>0?(ae=R[0].g,qe.push("ofs="+ae)):ae=0:qe.push("ofs="+ae);let Ae=!0;for(let We=0;We<f;We++){var C=R[We].g;const Ft=R[We].map;if(C-=ae,C<0)ae=Math.max(0,R[We].g-100),Ae=!1;else try{C="req"+C+"_"||"";try{var j=Ft instanceof Map?Ft:Object.entries(Ft);for(const[lr,bn]of j){let Sn=bn;c(bn)&&(Sn=ge(bn)),qe.push(C+lr+"="+encodeURIComponent(Sn))}}catch(lr){throw qe.push(C+"type="+encodeURIComponent("_badmap")),lr}}catch{g&&g(Ft)}}if(Ae){j=qe.join("&");break e}}j=void 0}return o=o.i.splice(0,f),u.G=o,j}function Hu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;se||m(),Ie||(se(),Ie=!0),w.add(u,o),o.A=0}}function Fa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ws(h(o.Da,o),Ku(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,zu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ws(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),qi(this),zu(this))};function Ua(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function zu(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Lt(o.na);Pe(u,"RID","rpc"),Pe(u,"SID",o.M),Pe(u,"AID",o.K),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Pe(u,"TO",o.ia),Pe(u,"TYPE","xmlhttp"),Ms(o,u),o.u&&o.o&&xa(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Bi(Lt(u)),f.u=null,f.R=!0,vu(f,o)}t.Va=function(){this.C!=null&&(this.C=null,qi(this),Fa(this),lt(19))};function zi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Wu(o,u){var f=null;if(o.g==u){zi(o),Ua(o),o.g=null;var g=2}else if(Da(o.h,u))f=u.G,bu(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;g=ir(),L(g,new pu(g,f)),Hi(o)}else Hu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&__(o,u)||g==2&&Fa(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:cr(o,5);break;case 4:cr(o,10);break;case 3:cr(o,6);break;default:cr(o,2)}}}function Ku(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function cr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const R=!g;g=new In(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rs(g,"https"),Bi(g),R?h_(g.toString(),f):f_(g.toString(),f)}else lt(2);o.I=0,o.l&&o.l.pa(u),Gu(o),ju(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Gu(o){if(o.I=0,o.ja=[],o.l){const u=Su(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function Qu(o,u,f){var g=f instanceof In?Lt(f):new In(f);if(g.g!="")u&&(g.g=u+"."+g.g),Cs(g,g.u);else{var R=a.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const C=new In(null);g&&Rs(C,g),u&&(C.g=u),R&&Cs(C,R),f&&(C.h=f),g=C}return f=o.G,u=o.wa,f&&u&&Pe(g,f,u),Pe(g,"VER",o.ka),Ms(o,g),g}function Ju(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ke(new Ma({ab:f})):new ke(o.ma),u.Fa(o.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xu(){}t=Xu.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Wi(){}Wi.prototype.g=function(o,u){return new _t(o,u)};function _t(o,u){F.call(this),this.g=new Bu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!v(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Mr(this)}p(_t,F),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){La(this.g)},_t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ge(o),o=f);u.i.push(new r_(u.Ya++,o)),u.I==3&&Hi(u)},_t.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,_t.Z.N.call(this)};function Yu(o){Dr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Yu,Dr);function Zu(){Ge.call(this),this.status=1}p(Zu,Ge);function Mr(o){this.g=o}p(Mr,Xu),Mr.prototype.ra=function(){L(this.g,"a")},Mr.prototype.qa=function(o){L(this.g,new Yu(o))},Mr.prototype.pa=function(o){L(this.g,new Zu)},Mr.prototype.oa=function(){L(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,_g=function(){return new Wi},mg=function(){return ir()},gg=ze,kc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,go=Fi,gu.COMPLETE="complete",pg=gu,mt.EventType=Rt,Rt.OPEN="a",Rt.CLOSE="b",Rt.ERROR="c",Rt.MESSAGE="d",F.prototype.listen=F.prototype.J,js=mt,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,dg=ke}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const hf="@firebase/firestore",ff="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new _l("@firebase/firestore");function Ur(){return Ar.logLevel}function W(t,...e){if(Ar.logLevel<=he.DEBUG){const n=e.map(Vl);Ar.debug(`Firestore (${ds}): ${t}`,...n)}}function mn(t,...e){if(Ar.logLevel<=he.ERROR){const n=e.map(Vl);Ar.error(`Firestore (${ds}): ${t}`,...n)}}function rs(t,...e){if(Ar.logLevel<=he.WARN){const n=e.map(Vl);Ar.warn(`Firestore (${ds}): ${t}`,...n)}}function Vl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yg(t,r,n)}function yg(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw mn(r),new Error(r)}function Te(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||yg(e,s,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(rt.UNAUTHENTICATED)))}shutdown(){}}class fA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class dA{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new vg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class pA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class df{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new df(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Te(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new df(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Oc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return oc(s)===oc(i)?fe(s,i):oc(s)?1:-1}return fe(t.length,e.length)}const yA=55296,vA=57343;function oc(t){const e=t.charCodeAt(0);return e>=yA&&e<=vA}function ss(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="__name__";class jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=jt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return fe(e.length,n.length)}static compareSegments(e,n){const r=jt.isNumericId(e),s=jt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(e).compare(jt.extractNumericId(n)):Oc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class Re extends jt{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Re(n)}static emptyPath(){return new Re([])}}const EA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends jt{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return EA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pf}static keyField(){return new Je([pf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Re.fromString(e))}static fromName(e){return new J(Re.fromString(e).popFirst(5))}static empty(){return new J(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gf(t){if(!J.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mf(t){if(J.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fa(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function ki(t,e){if(!Tg(t))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=-62135596800,yf=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yf);return new Ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_f)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yf}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ki(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_f;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Be("string",Ve._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ve(0,0))}static max(){return new re(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=-1;function IA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Gn(s,J.empty(),e)}function wA(t){return new Gn(t.readTime,t.key,gi)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(re.min(),J.empty(),gi)}static max(){return new Gn(re.max(),J.empty(),gi)}}function AA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==bA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):N.reject(n)}static resolve(e){return new N(((n,r)=>{n(e)}))}static reject(e){return new N(((n,r)=>{r(e)}))}static waitFor(e){return new N(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next((s=>s?N.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new N(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new N(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function RA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}da.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=-1;function pa(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function CA(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="";function PA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vf(e)),e=VA(t.get(n),e);return vf(e)}function VA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ig:n+="";break;default:n+=i}}return n}function vf(t){return t+Ig+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tf(this.data.getIterator())}getIteratorFrom(e){return new Tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new He(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ag("Invalid base64 string: "+i):i}})(e);return new Ye(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const NA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Te(!!t,39018),typeof t=="string"){let e=0;const n=NA.exec(t);if(Te(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jn(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="server_timestamp",Sg="__type__",Rg="__previous_value__",Cg="__local_write_time__";function kl(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Sg])==null?void 0:r.stringValue)===bg}function ga(t){const e=t.mapValue.fields[Rg];return kl(e)?ga(e):e}function mi(t){const e=Qn(t.mapValue.fields[Cg].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Lo="(default)";class _i{constructor(e,n){this.projectId=e,this.database=n||Lo}static empty(){return new _i("","")}get isDefaultDatabase(){return this.database===Lo}isEqual(e){return e instanceof _i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__type__",kA="__max__",to={mapValue:{}},Vg="__vector__",Fo="value";function Xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kl(t)?4:MA(t)?9007199254740991:OA(t)?10:11:ee(28295,{value:t})}function Xt(t,e){if(t===e)return!0;const n=Xn(t);if(n!==Xn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qn(s.timestampValue),c=Qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?xo(a)===xo(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ef(a)!==Ef(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Xt(a[l],c[l])))return!1;return!0})(t,e);default:return ee(52216,{left:t})}}function yi(t,e){return(t.values||[]).find((n=>Xt(n,e)))!==void 0}function is(t,e){if(t===e)return 0;const n=Xn(t),r=Xn(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return If(t.timestampValue,e.timestampValue);case 4:return If(mi(t),mi(e));case 5:return Oc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Jn(i),l=Jn(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=fe(c[h],l[h]);if(d!==0)return d}return fe(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=fe(Me(i.latitude),Me(a.latitude));return c!==0?c:fe(Me(i.longitude),Me(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return wf(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var y,b,D,x;const c=i.fields||{},l=a.fields||{},h=(y=c[Fo])==null?void 0:y.arrayValue,d=(b=l[Fo])==null?void 0:b.arrayValue,p=fe(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return p!==0?p:wf(h,d)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===to.mapValue&&a===to.mapValue)return 0;if(i===to.mapValue)return 1;if(a===to.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const y=Oc(l[p],d[p]);if(y!==0)return y;const b=is(c[l[p]],h[d[p]]);if(b!==0)return b}return fe(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function If(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Qn(t),r=Qn(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function wf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function os(t){return Mc(t)}function Mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Jn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return J.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Mc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Mc(n.fields[a])}`;return s+"}"})(t.mapValue):ee(61005,{value:t})}function mo(t){switch(Xn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ga(t);return e?16+mo(e):16;case 5:return 2*t.stringValue.length;case 6:return Jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+mo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Sr(r.fields,((i,a)=>{s+=i.length+mo(a)})),s})(t.mapValue);default:throw ee(13486,{value:t})}}function Af(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xc(t){return!!t&&"integerValue"in t}function Ol(t){return!!t&&"arrayValue"in t}function bf(t){return!!t&&"nullValue"in t}function Sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _o(t){return!!t&&"mapValue"in t}function OA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Pg])==null?void 0:r.stringValue)===Vg}function ri(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ri(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ri(t.arrayValue.values[n]);return e}return{...t}}function MA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ri(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=ri(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new At(ri(this.value))}}function Ng(t){const e=[];return Sr(t.fields,((n,r)=>{const s=new Je([n]);if(_o(r)){const i=Ng(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new it(e,0,re.min(),re.min(),re.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,re.min(),re.min(),At.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,re.min(),re.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.position=e,this.inclusive=n}}function Rf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),n.key):r=is(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function xA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{}class Ue extends Dg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FA(e,n,r):n==="array-contains"?new jA(e,r):n==="in"?new $A(e,r):n==="not-in"?new qA(e,r):n==="array-contains-any"?new HA(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UA(e,r):new BA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(is(n,this.value)):n!==null&&Xn(this.value)===Xn(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Dg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Mt(e,n)}matches(e){return kg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kg(t){return t.op==="and"}function Og(t){return LA(t)&&kg(t)}function LA(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function Lc(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+os(t.value);if(Og(t))return t.filters.map((e=>Lc(e))).join(",");{const e=t.filters.map((n=>Lc(n))).join(",");return`${t.op}(${e})`}}function Mg(t,e){return t instanceof Ue?(function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)})(t,e):t instanceof Mt?(function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Mg(a,s.filters[c])),!0):!1})(t,e):void ee(19439)}function xg(t){return t instanceof Ue?(function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`})(t):t instanceof Mt?(function(n){return n.op.toString()+" {"+n.getFilters().map(xg).join(" ,")+"}"})(t):"Filter"}class FA extends Ue{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class UA extends Ue{constructor(e,n){super(e,"in",n),this.keys=Lg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class BA extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Lg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Lg(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>J.fromName(r.referenceValue)))}class jA extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ol(n)&&yi(n.arrayValue,this.value)}}class $A extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yi(this.value.arrayValue,n)}}class qA extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!yi(this.value.arrayValue,n)}}class HA extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ol(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>yi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Pf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new zA(t,e,n,r,s,i,a)}function Ml(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Lc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>os(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>os(r))).join(",")),e.Te=n}return e.Te}function xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cf(t.startAt,e.startAt)&&Cf(t.endAt,e.endAt)}function Fc(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function WA(t,e,n,r,s,i,a,c){return new ms(t,e,n,r,s,i,a,c)}function Ll(t){return new ms(t)}function Vf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fg(t){return t.collectionGroup!==null}function si(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new He(Je.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new vi(i,r))})),n.has(Je.keyField().canonicalString())||e.Ie.push(new vi(Je.keyField(),r))}return e.Ie}function zt(t){const e=ie(t);return e.Ee||(e.Ee=KA(e,si(t))),e.Ee}function KA(t,e){if(t.limitType==="F")return Pf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new vi(s.field,i)}));const n=t.endAt?new Uo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uo(t.startAt.position,t.startAt.inclusive):null;return Pf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uc(t,e){const n=t.filters.concat([e]);return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bc(t,e,n){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return xl(zt(t),zt(e))&&t.limitType===e.limitType}function Ug(t){return`${Ml(zt(t))}|lt:${t.limitType}`}function Br(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>xg(s))).join(", ")}]`),pa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>os(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>os(s))).join(",")),`Target(${r})`})(zt(t))}; limitType=${t.limitType})`}function _a(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of si(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Rf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,si(r),s)||r.endAt&&!(function(a,c,l){const h=Rf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,si(r),s))})(t,e)}function GA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bg(t){return(e,n)=>{let r=!1;for(const s of si(t)){const i=QA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QA(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?is(l,h):ee(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new De(J.comparator);function _n(){return JA}const jg=new De(J.comparator);function $s(...t){let e=jg;for(const n of t)e=e.insert(n.key,n);return e}function $g(t){let e=jg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function gr(){return ii()}function qg(){return ii()}function ii(){return new Rr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const XA=new De(J.comparator),YA=new He(J.comparator);function de(...t){let e=YA;for(const n of t)e=e.add(n);return e}const ZA=new He(fe);function eb(){return ZA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function Hg(t){return{integerValue:""+t}}function tb(t,e){return CA(e)?Hg(e):Fl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this._=void 0}}function nb(t,e,n){return t instanceof Ei?(function(s,i){const a={fields:{[Sg]:{stringValue:bg},[Cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kl(i)&&(i=ga(i)),i&&(a.fields[Rg]=i),{mapValue:a}})(n,e):t instanceof Ti?Wg(t,e):t instanceof Ii?Kg(t,e):(function(s,i){const a=zg(s,i),c=Nf(a)+Nf(s.Ae);return xc(a)&&xc(s.Ae)?Hg(c):Fl(s.serializer,c)})(t,e)}function rb(t,e,n){return t instanceof Ti?Wg(t,e):t instanceof Ii?Kg(t,e):n}function zg(t,e){return t instanceof Bo?(function(r){return xc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ei extends ya{}class Ti extends ya{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=Gg(e);for(const r of t.elements)n.some((s=>Xt(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ii extends ya{constructor(e){super(),this.elements=e}}function Kg(t,e){let n=Gg(e);for(const r of t.elements)n=n.filter((s=>!Xt(s,r)));return{arrayValue:{values:n}}}class Bo extends ya{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Nf(t){return Me(t.integerValue||t.doubleValue)}function Gg(t){return Ol(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.field=e,this.transform=n}}function ib(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof Ii&&s instanceof Ii?ss(r.elements,s.elements,Xt):r instanceof Bo&&s instanceof Bo?Xt(r.Ae,s.Ae):r instanceof Ei&&s instanceof Ei})(t.transform,e.transform)}class ob{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function Qg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xg(t.key,ln.none()):new Oi(t.key,t.data,ln.none());{const n=t.data,r=At.empty();let s=new He(Je.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Cr(t.key,r,new Vt(s.toArray()),ln.none())}}function ab(t,e,n){t instanceof Oi?(function(s,i,a){const c=s.value.clone(),l=kf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Cr?(function(s,i,a){if(!yo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=kf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Jg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function oi(t,e,n,r){return t instanceof Oi?(function(i,a,c,l){if(!yo(i.precondition,a))return c;const h=i.value.clone(),d=Of(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Cr?(function(i,a,c,l){if(!yo(i.precondition,a))return c;const h=Of(i.fieldTransforms,l,a),d=a.data;return d.setAll(Jg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,c){return yo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function cb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zg(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function Df(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,((i,a)=>ib(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function kf(t,e,n){const r=new Map;Te(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,rb(a,c,n[s]))}return r}function Of(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,nb(i,a,e))}return r}class Xg extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lb extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ab(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Qg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(re.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),de())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,((n,r)=>Df(n,r)))&&ss(this.baseMutations,e.baseMutations,((n,r)=>Df(n,r)))}}class Ul{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return XA})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ul(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,pe;function db(t){switch(t){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function Yg(t){if(t===void 0)return mn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Fe.OK:return V.OK;case Fe.CANCELLED:return V.CANCELLED;case Fe.UNKNOWN:return V.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return V.INTERNAL;case Fe.UNAVAILABLE:return V.UNAVAILABLE;case Fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Fe.NOT_FOUND:return V.NOT_FOUND;case Fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Fe.ABORTED:return V.ABORTED;case Fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Fe.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:t})}}(pe=Fe||(Fe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=new Hn([4294967295,4294967295],0);function Mf(t){const e=pb().encode(t),n=new fg;return n.update(e),new Uint8Array(n.digest())}function xf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([n,r],0),new Hn([s,i],0)]}class Bl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Hn.fromNumber(r)));return s.compare(gb)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Mf(e),[r,s]=xf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Bl(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const n=Mf(e),[r,s]=xf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ea(re.min(),s,new De(fe),_n(),de())}}class Mi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mi(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Zg{constructor(e,n){this.targetId=e,this.Ce=n}}class em{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Lf{constructor(){this.ve=0,this.Fe=Ff(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Mi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ff()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class mb{constructor(e){this.Ge=e,this.ze=new Map,this.je=_n(),this.Je=no(),this.He=no(),this.Ye=new De(fe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Fc(i))if(r===0){const a=new J(i.path);this.et(n,a,it.newNoDocument(a,re.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Jn(r).toUint8Array()}catch(l){if(l instanceof Ag)return rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Bl(a,s,i)}catch(l){return rs(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Fc(c.target)){const l=new J(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,it.newNoDocument(l,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=de();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Ea(e,n,this.Ye,this.je,r);return this.je=_n(),this.Je=no(),this.He=no(),this.Ye=new De(fe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Lf,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new He(fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new He(fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Lf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function no(){return new De(J.comparator)}function Ff(){return new De(J.comparator)}const _b={asc:"ASCENDING",desc:"DESCENDING"},yb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vb={and:"AND",or:"OR"};class Eb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jc(t,e){return t.useProto3Json||pa(e)?e:{value:e}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tb(t,e){return jo(t,e.toTimestamp())}function Wt(t){return Te(!!t,49232),re.fromTimestamp((function(n){const r=Qn(n);return new Ve(r.seconds,r.nanos)})(t))}function jl(t,e){return $c(t,e).canonicalString()}function $c(t,e){const n=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function nm(t){const e=Re.fromString(t);return Te(am(e),10190,{key:e.toString()}),e}function qc(t,e){return jl(t.databaseId,e.path)}function ac(t,e){const n=nm(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(sm(n))}function rm(t,e){return jl(t.databaseId,e)}function Ib(t){const e=nm(t);return e.length===4?Re.emptyPath():sm(e)}function Hc(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sm(t){return Te(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Uf(t,e,n){return{name:qc(t,e),fields:n.value.mapValue.fields}}function wb(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Te(d===void 0||typeof d=="string",58123),Ye.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ye.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?V.UNKNOWN:Yg(h.code);return new z(d,h.message||"")})(a);n=new em(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ac(t,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):re.min(),c=new At({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new vo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ac(t,r.document),i=r.readTime?Wt(r.readTime):re.min(),a=it.newNoDocument(s,i),c=r.removedTargetIds||[];n=new vo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ac(t,r.document),i=r.removedTargetIds||[];n=new vo([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new fb(s,i),c=r.targetId;n=new Zg(c,a)}}return n}function Ab(t,e){let n;if(e instanceof Oi)n={update:Uf(t,e.key,e.value)};else if(e instanceof Xg)n={delete:qc(t,e.key)};else if(e instanceof Cr)n={update:Uf(t,e.key,e.data),updateMask:kb(e.fieldMask)};else{if(!(e instanceof lb))return ee(16599,{Vt:e.type});n={verify:qc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ii)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Bo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Tb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(t,e.precondition)),n}function bb(t,e){return t&&t.length>0?(Te(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(re.min())&&(a=Wt(i)),new ob(a,s.transformResults||[])})(n,e)))):[]}function Sb(t,e){return{documents:[rm(t,e.path)]}}function Rb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rm(t,s);const i=(function(h){if(h.length!==0)return om(Mt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(y){return{field:jr(y.field),direction:Vb(y.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=jc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function Cb(t){let e=Ib(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const y=im(p);return y instanceof Mt&&Og(y)?y.getFilters():[y]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((y=>(function(D){return new vi($r(D.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(y)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let y;return y=typeof p=="object"?p.value:p,pa(y)?null:y})(n.limit));let l=null;n.startAt&&(l=(function(p){const y=!!p.before,b=p.values||[];return new Uo(b,y)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const y=!p.before,b=p.values||[];return new Uo(b,y)})(n.endAt)),WA(e,s,a,i,c,"F",l,h)}function Pb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function im(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$r(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$r(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$r(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$r(n.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ue.create($r(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Mt.create(n.compositeFilter.filters.map((r=>im(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(n.compositeFilter.op))})(t):ee(30097,{filter:t})}function Vb(t){return _b[t]}function Nb(t){return yb[t]}function Db(t){return vb[t]}function jr(t){return{fieldPath:t.canonicalString()}}function $r(t){return Je.fromServerFormat(t.fieldPath)}function om(t){return t instanceof Ue?(function(n){if(n.op==="=="){if(Sf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NAN"}};if(bf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NAN"}};if(bf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(n.field),op:Nb(n.op),value:n.value}}})(t):t instanceof Mt?(function(n){const r=n.getFilters().map((s=>om(s)));return r.length===1?r[0]:{compositeFilter:{op:Db(n.op),filters:r}}})(t):ee(54877,{filter:t})}function kb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function am(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=re.min(),a=re.min(),c=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.yt=e}}function Mb(t){const e=Cb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.Cn=new Lb}addToCollectionParentIndex(e,n){return this.Cn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Gn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Lb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cm=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(cm,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new as(0)}static cr(){return new as(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="LruGarbageCollector",Fb=1048576;function $f([t,e],[n,r]){const s=fe(t,n);return s===0?fe(e,r):s}class Ub{constructor(e){this.Ir=e,this.buffer=new He($f),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$f(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Bb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(jf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gs(n)?W(jf,"Ignoring IndexedDB error during garbage collection: ",n):await ps(n)}await this.Vr(3e5)}))}}class jb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return N.resolve(da.ce);const r=new Ub(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Bf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bf):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Ur()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function $b(t,e){return new jb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.changes=new Rr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&oi(r.mutation,s,Vt.empty(),Ve.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,de()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=de()){const s=gr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=$s();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,de())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=_n();const a=ii(),c=(function(){return ii()})();return n.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),oi(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,Vt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>c.set(h,new Hb(d,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=ii();let s=new De(((a,c)=>a-c)),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Vt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=qg();d.forEach((y=>{if(!i.has(y)){const b=Qg(n.get(y),r.get(y));b!==null&&p.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(gr());let c=gi,l=i;return a.next((h=>N.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{l=l.insert(d,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,de()))).next((d=>({batchId:c,changes:$g(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next((r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(l=>{const h=(function(p,y){return new ms(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,it.newInvalidDocument(d)))}));let c=$s();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&oi(d.mutation,h,Vt.empty(),Ve.now()),_a(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return N.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}})(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:Mb(s.bundledQuery),readTime:Wt(s.readTime)}})(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.overlays=new De(J.comparator),this.qr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return N.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,a=new J(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=gr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return N.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hb(n,r));let i=this.qr.get(n);i===void 0&&(i=de(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.Qr=new He(Ke.$r),this.Ur=new He(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Ke(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new J(new Re([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new J(new Re([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=de();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ke(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return J.comparator(e.key,n.key)||fe(e.Yr,n.Yr)}static Kr(e,n){return fe(e.Yr,n.Yr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new He(Ke.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ub(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,n){return N.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Dl:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(fe);return n.forEach((s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new J(i),0);let c=new He(fe);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)}),a),N.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Te(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(n.mutations,(s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.ri=e,this.docs=(function(){return new De(J.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_n();const a=n.path,c=new J(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||AA(wA(d),r)<=0||(s.has(d.key)||_a(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return N.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new Xb(this)}getSize(e){return N.resolve(this.size)}}class Xb extends qb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),N.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.persistence=e,this.si=new Rr((n=>Ml(n)),xl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.oi=0,this._i=new $l,this.targetCount=0,this.ai=as.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),N.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new as(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Pr(n),N.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.ui={},this.overlays={},this.ci=new da(0),this.li=!1,this.li=!0,this.hi=new Gb,this.referenceDelegate=e(this),this.Pi=new Yb(this),this.indexManager=new xb,this.remoteDocumentCache=(function(s){return new Jb(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Ob(n),this.Ii=new Wb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Kb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Qb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new Zb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return N.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class Zb extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.Ri=new $l,this.Vi=null}static mi(e){return new ql(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),N.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,(r=>{const s=J.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,re.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return N.or([()=>N.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class $o{constructor(e,n){this.persistence=e,this.pi=new Rr((r=>PA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=$b(this,n)}static mi(e,n){return new $o(e,n)}Ei(){}di(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return N.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?N.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,n).next((c=>{c||(r++,i.removeEntry(a,re.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),N.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mo(e.data.value)),n}br(e,n,r){return N.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return TE()?8:RA(ct())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new eS;return this.Ss(e,n,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,a,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ur()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Br(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(Ur()<=he.DEBUG&&W("QueryEngine","Query:",Br(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ur()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Br(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(n))):N.resolve())}ys(e,n){if(Vf(n))return N.resolve(null);let r=zt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Bc(n,null,"F"),r=zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=de(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ds(n,c);return this.Cs(n,h,a,l.readTime)?this.ys(e,Bc(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ws(e,n,r,s){return Vf(n)||s.isEqual(re.min())?N.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?N.resolve(null):(Ur()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Br(n)),this.vs(e,a,n,IA(s,gi)).next((c=>c)))}))}Ds(e,n){let r=new He(Bg(e));return n.forEach(((s,i)=>{_a(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ur()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Br(n)),this.ps.getDocumentsMatchingQuery(e,n,Gn.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="LocalStore",nS=3e8;class rS{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new De(fe),this.xs=new Rr((i=>Ml(i)),xl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function sS(t,e,n,r){return new rS(t,e,n,r)}async function um(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=de();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function iS(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,y=p.keys();let b=N.resolve();return y.forEach((D=>{b=b.next((()=>d.getEntry(l,D))).next((x=>{const B=h.docVersions.get(D);Te(B!==null,48541),x.version.compareTo(B)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function hm(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function oS(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((d,p)=>{const y=s.get(p);if(!y)return;c.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,p))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Ye.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(x,B,H){return x.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=nS?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(y,b,d)&&c.push(n.Pi.updateTargetData(i,b))}));let l=_n(),h=de();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(aS(i,a,e.documentUpdates).next((d=>{l=d.ks,h=d.qs}))),!r.isEqual(re.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return N.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function aS(t,e,n){let r=de(),s=de();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=_n();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(zl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:s}}))}function cS(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Dl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function lS(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new Un(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function zc(t,e,n){const r=ie(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!gs(a))throw a;W(zl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function qf(t,e,n){const r=ie(t);let s=re.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),y=p.xs.get(d);return y!==void 0?N.resolve(p.Ms.get(y)):p.Pi.getTargetData(h,d)})(r,a,zt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:re.min(),n?i:de()))).next((c=>(uS(r,GA(e),c),{documents:c,Qs:i})))))}function uS(t,e,n){let r=t.Os.get(e)||re.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Hf{constructor(){this.activeTargetIds=eb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hS{constructor(){this.Mo=new Hf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="ConnectivityMonitor";class Wf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(zf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro=null;function Wc(){return ro===null?ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():ro++,"0x"+ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="RestConnection",dS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Lo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=Wc(),c=this.zo(e,n.toUriEncodedString());W(cc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),d=us(h);return this.Jo(e,c,l,r,d).then((p=>(W(cc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw rs(cc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=dS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class mS extends pS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=Wc();return new Promise(((c,l)=>{const h=new dg;h.setWithCredentials(!0),h.listenOnce(pg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case go.NO_ERROR:const p=h.getResponseJson();W(tt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case go.TIMEOUT:W(tt,`RPC '${e}' ${a} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const y=h.getStatus();if(W(tt,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b==null?void 0:b.error;if(D&&D.status&&D.message){const x=(function(H){const G=H.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN})(D.status);l(new z(x,D.message))}else l(new z(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(tt,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(tt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}T_(e,n,r){const s=Wc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_g(),c=mg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(tt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let y=!1,b=!1;const D=new gS({Yo:B=>{b?W(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(y||(W(tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),W(tt,`RPC '${e}' stream ${s} sending:`,B),p.send(B))},Zo:()=>p.close()}),x=(B,H,G)=>{B.listen(H,(Q=>{try{G(Q)}catch(K){setTimeout((()=>{throw K}),0)}}))};return x(p,js.EventType.OPEN,(()=>{b||(W(tt,`RPC '${e}' stream ${s} transport opened.`),D.o_())})),x(p,js.EventType.CLOSE,(()=>{b||(b=!0,W(tt,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))})),x(p,js.EventType.ERROR,(B=>{b||(b=!0,rs(tt,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),D.a_(new z(V.UNAVAILABLE,"The operation could not be completed")))})),x(p,js.EventType.MESSAGE,(B=>{var H;if(!b){const G=B.data[0];Te(!!G,16349);const Q=G,K=(Q==null?void 0:Q.error)||((H=Q[0])==null?void 0:H.error);if(K){W(tt,`RPC '${e}' stream ${s} received error:`,K);const se=K.status;let Ie=(function(_){const I=Fe[_];if(I!==void 0)return Yg(I)})(se),w=K.message;Ie===void 0&&(Ie=V.INTERNAL,w="Unknown error status: "+se+" with message "+K.message),b=!0,D.a_(new z(Ie,w)),p.close()}else W(tt,`RPC '${e}' stream ${s} received:`,G),D.u_(G)}})),x(c,gg.STAT_EVENT,(B=>{B.stat===kc.PROXY?W(tt,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===kc.NOPROXY&&W(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){return new Eb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="PersistentStream";class dm{constructor(e,n,r,s,i,a,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fm(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return W(Kf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(W(Kf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _S extends dm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Wt(a.readTime):re.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Hc(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Fc(l)?{documents:Sb(i,l)}:{query:Rb(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=tm(i,a.resumeToken);const h=jc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=jo(i,a.snapshotVersion.toTimestamp());const h=jc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Pb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Hc(this.serializer),n.removeTarget=e,this.q_(n)}}class yS extends dm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=bb(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>Ab(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{}class ES extends vS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,$c(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,$c(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class TS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="RemoteStore";class IS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Pr(this)&&(W(br,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ea.add(4),await xi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ia(h)})(this))}))})),this.Ra=new TS(r,s)}}async function Ia(t){if(Pr(t))for(const e of t.da)await e(!0)}async function xi(t){for(const e of t.da)await e(!1)}function pm(t,e){const n=ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ql(n)?Gl(n):_s(n).O_()&&Kl(n,e))}function Wl(t,e){const n=ie(t),r=_s(n);n.Ia.delete(e),r.O_()&&gm(n,e),n.Ia.size===0&&(r.O_()?r.L_():Pr(n)&&n.Ra.set("Unknown"))}function Kl(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).Y_(e)}function gm(t,e){t.Va.Ue(e),_s(t).Z_(e)}function Gl(t){t.Va=new mb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.Ra.ua()}function Ql(t){return Pr(t)&&!_s(t).x_()&&t.Ia.size>0}function Pr(t){return ie(t).Ea.size===0}function mm(t){t.Va=void 0}async function wS(t){t.Ra.set("Online")}async function AS(t){t.Ia.forEach(((e,n)=>{Kl(t,e)}))}async function bS(t,e){mm(t),Ql(t)?(t.Ra.ha(e),Gl(t)):t.Ra.set("Unknown")}async function SS(t,e,n){if(t.Ra.set("Online"),e instanceof em&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){W(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(t,r)}else if(e instanceof vo?t.Va.Ze(e):e instanceof Zg?t.Va.st(e):t.Va.tt(e),!n.isEqual(re.min()))try{const r=await hm(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),gm(i,l);const p=new Un(d.target,l,h,d.sequenceNumber);Kl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){W(br,"Failed to raise snapshot:",r),await qo(t,r)}}async function qo(t,e,n){if(!gs(e))throw e;t.Ea.add(1),await xi(t),t.Ra.set("Offline"),n||(n=()=>hm(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{W(br,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ia(t)}))}function _m(t,e){return e().catch((n=>qo(t,n,e)))}async function wa(t){const e=ie(t),n=Yn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dl;for(;RS(e);)try{const s=await cS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,CS(e,s)}catch(s){await qo(e,s)}ym(e)&&vm(e)}function RS(t){return Pr(t)&&t.Ta.length<10}function CS(t,e){t.Ta.push(e);const n=Yn(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ym(t){return Pr(t)&&!Yn(t).x_()&&t.Ta.length>0}function vm(t){Yn(t).start()}async function PS(t){Yn(t).ra()}async function VS(t){const e=Yn(t);for(const n of t.Ta)e.ea(n.mutations)}async function NS(t,e,n){const r=t.Ta.shift(),s=Ul.from(r,e,n);await _m(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await wa(t)}async function DS(t,e){e&&Yn(t).X_&&await(async function(r,s){if((function(a){return db(a)&&a!==V.ABORTED})(s.code)){const i=r.Ta.shift();Yn(r).B_(),await _m(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wa(r)}})(t,e),ym(t)&&vm(t)}async function Gf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W(br,"RemoteStore received new credentials");const r=Pr(n);n.Ea.add(3),await xi(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ia(n)}async function kS(t,e){const n=ie(t);e?(n.Ea.delete(2),await Ia(n)):e||(n.Ea.add(2),await xi(n),n.Ra.set("Unknown"))}function _s(t){return t.ma||(t.ma=(function(n,r,s){const i=ie(n);return i.sa(),new _S(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:wS.bind(null,t),t_:AS.bind(null,t),r_:bS.bind(null,t),H_:SS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Ql(t)?Gl(t):t.Ra.set("Unknown")):(await t.ma.stop(),mm(t))}))),t.ma}function Yn(t){return t.fa||(t.fa=(function(n,r,s){const i=ie(n);return i.sa(),new yS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:PS.bind(null,t),r_:DS.bind(null,t),ta:VS.bind(null,t),na:NS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await wa(t)):(await t.fa.stop(),t.Ta.length>0&&(W(br,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Jl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(t,e){if(mn("AsyncQueue",`${e}: ${t}`),gs(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static emptySet(e){return new Jr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new De(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.ga=new De(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class cs{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new cs(e,n,Jr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class MS{constructor(){this.queries=Jf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=Jf(),i.forEach(((a,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Jf(){return new Rr((t=>Ug(t)),ma)}async function Em(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new OS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Xl(a,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Yl(n)}async function Tm(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xS(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Yl(n)}function LS(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Yl(t){t.Ca.forEach((e=>{e.next()}))}var Kc,Xf;(Xf=Kc||(Kc={})).Ma="default",Xf.Cache="cache";class Im{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.key=e}}class Am{constructor(e){this.key=e}}class FS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=Bg(e),this.tu=new Jr(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Qf,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const y=s.get(d),b=_a(this.query,p)?p:null,D=!!y&&this.mutatedKeys.has(y.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;y&&b?y.data.isEqual(b.data)?D!==x&&(r.track({type:3,doc:b}),B=!0):this.su(y,b)||(r.track({type:2,doc:b}),B=!0,(l&&this.eu(b,l)>0||h&&this.eu(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),B=!0):y&&!b&&(r.track({type:1,doc:y}),B=!0,(l||h)&&(c=!0)),B&&(b?(a=a.add(b),i=x?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((d,p)=>(function(b,D){const x=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:B})}};return x(b)-x(D)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new cs(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Am(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new wm(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return cs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zl="SyncEngine";class US{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BS{constructor(e){this.key=e,this.hu=!1}}class jS{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Rr((c=>Ug(c)),ma),this.Iu=new Map,this.Eu=new Set,this.du=new De(J.comparator),this.Au=new Map,this.Ru=new $l,this.Vu={},this.mu=new Map,this.fu=as.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $S(t,e,n=!0){const r=Vm(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await bm(r,e,n,!0),s}async function qS(t,e){const n=Vm(t);await bm(n,e,!0,!1)}async function bm(t,e,n,r){const s=await lS(t.localStore,zt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await HS(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&pm(t.remoteStore,s),c}async function HS(t,e,n,r,s){t.pu=(p,y,b)=>(async function(x,B,H,G){let Q=B.view.ru(H);Q.Cs&&(Q=await qf(x.localStore,B.query,!1).then((({documents:w})=>B.view.ru(w,Q))));const K=G&&G.targetChanges.get(B.targetId),se=G&&G.targetMismatches.get(B.targetId)!=null,Ie=B.view.applyChanges(Q,x.isPrimaryClient,K,se);return Zf(x,B.targetId,Ie.au),Ie.snapshot})(t,p,y,b);const i=await qf(t.localStore,e,!0),a=new FS(e,i.Qs),c=a.ru(i.documents),l=Mi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Zf(t,n,h.au);const d=new US(e,n,a);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function zS(t,e,n){const r=ie(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!ma(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wl(r.remoteStore,s.targetId),Gc(r,s.targetId)})).catch(ps)):(Gc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function WS(t,e){const n=ie(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wl(n.remoteStore,r.targetId))}async function KS(t,e,n){const r=eR(t);try{const s=await(function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce(((b,D)=>b.add(D.key)),de());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let D=_n(),x=de();return l.Ns.getEntries(b,d).next((B=>{D=B,D.forEach(((H,G)=>{G.isValidDocument()||(x=x.add(H))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,D))).next((B=>{p=B;const H=[];for(const G of c){const Q=cb(G,p.get(G.key).overlayedDocument);Q!=null&&H.push(new Cr(G.key,Q,Ng(Q.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,H,c)})).next((B=>{y=B;const H=B.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(b,B.batchId,H)}))})).then((()=>({batchId:y.batchId,changes:$g(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new De(fe)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,n),await Li(r,s.changes),await wa(r.remoteStore)}catch(s){const i=Xl(s,"Failed to persist write");n.reject(i)}}async function Sm(t,e){const n=ie(t);try{const r=await oS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Te(a.hu,14607):s.removedDocuments.size>0&&(Te(a.hu,42227),a.hu=!1))})),await Li(n,r,e)}catch(r){await ps(r)}}function Yf(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const y of p.Sa)y.va(c)&&(h=!0)})),h&&Yl(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GS(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new De(J.comparator);a=a.insert(i,it.newNoDocument(i,re.min()));const c=de().add(i),l=new Ea(re.min(),new Map,new De(fe),a,c);await Sm(r,l),r.du=r.du.remove(i),r.Au.delete(e),eu(r)}else await zc(r.localStore,e,!1).then((()=>Gc(r,e,n))).catch(ps)}async function QS(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await iS(n.localStore,e);Cm(n,r,null),Rm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Li(n,s)}catch(s){await ps(s)}}async function JS(t,e,n){const r=ie(t);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Te(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Cm(r,e,n),Rm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Li(r,s)}catch(s){await ps(s)}}function Rm(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Cm(t,e,n){const r=ie(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Pm(t,r)}))}function Pm(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Wl(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),eu(t))}function Zf(t,e,n){for(const r of n)r instanceof wm?(t.Ru.addReference(r.key,e),XS(t,r)):r instanceof Am?(W(Zl,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Pm(t,r.key)):ee(19791,{wu:r})}function XS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(Zl,"New document in limbo: "+n),t.Eu.add(r),eu(t))}function eu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(Re.fromString(e)),r=t.fu.next();t.Au.set(r,new BS(n)),t.du=t.du.insert(n,r),pm(t.remoteStore,new Un(zt(Ll(n.path)),r,"TargetPurposeLimboResolution",da.ce))}}async function Li(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{a.push(r.pu(l,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hl.As(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(h,(y=>N.forEach(y.Es,(b=>d.persistence.referenceDelegate.addReference(p,y.targetId,b))).next((()=>N.forEach(y.ds,(b=>d.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))))))}catch(p){if(!gs(p))throw p;W(zl,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const b=d.Ms.get(y),D=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(D);d.Ms=d.Ms.insert(y,x)}}})(r.localStore,i))}async function YS(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W(Zl,"User change. New user:",e.toKey());const r=await um(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new z(V.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Li(n,r.Ls)}}function ZS(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const c=n.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Vm(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GS.bind(null,e),e.Pu.H_=xS.bind(null,e.eventManager),e.Pu.yu=LS.bind(null,e.eventManager),e}function eR(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JS.bind(null,e),e}class Ho{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return sS(this.persistence,new tS,e.initialUser,this.serializer)}Cu(e){return new lm(ql.mi,this.serializer)}Du(e){return new hS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ho.provider={build:()=>new Ho};class tR extends Ho{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Te(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Bb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new lm((r=>$o.mi(r,n)),this.serializer)}}class Qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YS.bind(null,this.syncEngine),await kS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new MS})()}createDatastore(e){const n=Ta(e.databaseInfo.databaseId),r=(function(i){return new mS(i)})(e.databaseInfo);return(function(i,a,c,l){return new ES(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new IS(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Yf(this.syncEngine,n,0)),(function(){return Wf.v()?new Wf:new fS})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,d){const p=new jS(s,i,a,c,l,h);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ie(s);W(br,"RemoteStore shutting down."),i.Ea.add(5),await xi(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Qc.provider={build:()=>new Qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class nR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=Nl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xl(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),W(Zn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await um(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ed(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rR(t);W(Zn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Gf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Gf(e.remoteStore,s))),t._onlineComponents=e}async function rR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Zn,"Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new Ho)}}else W(Zn,"Using default OfflineComponentProvider"),await uc(t,new tR(void 0));return t._offlineComponents}async function Dm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Zn,"Using user provided OnlineComponentProvider"),await ed(t,t._uninitializedComponentsProvider._online)):(W(Zn,"Using default OnlineComponentProvider"),await ed(t,new Qc))),t._onlineComponents}function sR(t){return Dm(t).then((e=>e.syncEngine))}async function Jc(t){const e=await Dm(t),n=e.eventManager;return n.onListen=$S.bind(null,e.syncEngine),n.onUnlisten=zS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WS.bind(null,e.syncEngine),n}function iR(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new Nm({next:y=>{d.Nu(),a.enqueueAndForget((()=>Tm(i,p))),y.fromCache&&l.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Im(c,d,{includeMetadataChanges:!0,qa:!0});return Em(i,p)})(await Jc(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="firestore.googleapis.com",nd=!0;class rd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Om,this.ssl=nd}else this.host=e.host,this.ssl=e.ssl??nd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Fb)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=km(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hA;switch(r.type){case"firstParty":return new gA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=td.get(n);r&&(W("ComponentProvider","Removing Datastore"),td.delete(n),r.terminate())})(this),Promise.resolve()}}function oR(t,e,n,r={}){var h;t=Wn(t,Aa);const s=us(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Cp(`https://${c}`),Pp("Firestore",!0)),i.host!==Om&&i.host!==c&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Tr(l,a)&&(t._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=rt.MOCK_USER;else{d=fE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new rt(y)}t._authCredentials=new fA(new vg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ki(n,je._jsonSchema))return new je(e,r||null,new J(Re.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Be("string",je._jsonSchemaVersion),referencePath:Be("string")};class Kn extends nr{constructor(e,n,r){super(e,n,Ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new J(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function Xc(t,e,...n){if(t=ft(t),Eg("collection","path",e),t instanceof Aa){const r=Re.fromString(e,...n);return mf(r),new Kn(t,null,r)}{if(!(t instanceof je||t instanceof Kn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return mf(r),new Kn(t.firestore,null,r)}}function aR(t,e,...n){if(t=ft(t),arguments.length===1&&(e=Nl.newId()),Eg("doc","path",e),t instanceof Aa){const r=Re.fromString(e,...n);return gf(r),new je(t,null,new J(r))}{if(!(t instanceof je||t instanceof Kn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return gf(r),new je(t.firestore,t instanceof Kn?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="AsyncQueue";class id{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fm(this,"async_queue_retry"),this._c=()=>{const r=lc();r&&W(sd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new zn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gs(e))throw e;W(sd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,mn("INTERNAL UNHANDLED ERROR: ",od(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Jl.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:od(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function od(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class wi extends Aa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new id,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new id(e),this._firestoreClient=void 0,await e}}}function cR(t,e){const n=typeof t=="object"?t:kp(),r=typeof t=="string"?t:Lo,s=vl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uE("firestore");i&&oR(s,...i)}return s}function tu(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lR(t),t._firestoreClient}function lR(t){var r,s,i;const e=t._freezeSettings(),n=(function(c,l,h,d){return new DA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,km(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new nR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(Ye.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ki(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Be("string",bt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(e){if(ki(e,Kt._jsonSchema))return new Kt(e.latitude,e.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:Be("string",Kt._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ki(e,Gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Gt(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:Be("string",Gt._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^__.*__$/;class hR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}function Mm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class su{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new su({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return zo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Mm(this.Ac)&&uR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class fR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ta(e)}Cc(e,n,r,s=!1){return new su({Ac:e,methodName:n,Dc:r,path:Je.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xm(t){const e=t._freezeSettings(),n=Ta(t._databaseId);return new fR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dR(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Um("Data must be an object, but it was:",a,r);const c=Lm(r,a);let l,h;if(i.merge)l=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=gR(e,p,n);if(!a.contains(y))throw new z(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);_R(d,y)||d.push(y)}l=new Vt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new hR(new At(c),l,h)}class iu extends ru{_toFieldTransform(e){return new sb(e.path,new Ei)}isEqual(e){return e instanceof iu}}function pR(t,e,n,r=!1){return ou(n,t.Cc(r?4:3,e))}function ou(t,e){if(Fm(t=ft(t)))return Um("Unsupported field value:",e,t),Lm(t,e);if(t instanceof ru)return(function(r,s){if(!Mm(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=ou(c,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:jo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(s.serializer,i)}}if(r instanceof Kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:tm(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gt)return(function(a,c){return{mapValue:{fields:{[Pg]:{stringValue:Vg},[Fo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Fl(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${fa(r)}`)})(t,e)}function Lm(t,e){const n={};return wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,((r,s)=>{const i=ou(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Fm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Kt||t instanceof bt||t instanceof je||t instanceof ru||t instanceof Gt)}function Um(t,e,n){if(!Fm(n)||!Tg(n)){const r=fa(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function gR(t,e,n){if((e=ft(e))instanceof nu)return e._internalPath;if(typeof e=="string")return Bm(t,e);throw zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const mR=new RegExp("[~\\*/\\[\\]]");function Bm(t,e,n){if(e.search(mR)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nu(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new z(V.INVALID_ARGUMENT,c+t+l)}function _R(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ba("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yR extends jm{data(){return super.data()}}function ba(t,e){return typeof e=="string"?Bm(t,e):e instanceof nu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class au{}class qm extends au{}function Hm(t,e,...n){let r=[];e instanceof au&&r.push(e),r=r.concat(n),(function(i){const a=i.filter((l=>l instanceof cu)).length,c=i.filter((l=>l instanceof Sa)).length;if(a>1||a>0&&c>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Sa extends qm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sa(e,n,r)}_apply(e){const n=this._parse(e);return zm(e._query,n),new nr(e.firestore,e.converter,Uc(e._query,n))}_parse(e){const n=xm(e.firestore);return(function(i,a,c,l,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ld(p,d);const D=[];for(const x of p)D.push(cd(l,i,x));y={arrayValue:{values:D}}}else y=cd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ld(p,d),y=pR(c,a,p,d==="in"||d==="not-in");return Ue.create(h,d,y)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vR(t,e,n){const r=e,s=ba("where",t);return Sa._create(s,r,n)}class cu extends au{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Mt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)zm(a,l),a=Uc(a,l)})(e._query,n),new nr(e.firestore,e.converter,Uc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lu extends qm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lu(e,n)}_apply(e){const n=(function(s,i,a){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vi(i,a)})(e._query,this._field,this._direction);return new nr(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new ms(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function ER(t,e="asc"){const n=e,r=ba("orderBy",t);return lu._create(r,n)}function cd(t,e,n){if(typeof(n=ft(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fg(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!J.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Af(t,new J(r))}if(n instanceof je)return Af(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fa(n)}.`)}function ld(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zm(t,e){const n=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TR{convertValue(e,n="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Sr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Fo].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>Me(a.doubleValue)));return new Gt(n)}convertGeoPoint(e){return new Kt(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ga(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mi(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Te(am(r),9688,{name:e});const s=new _i(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vr extends jm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ba("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",vr._jsonSchema={type:Be("string",vr._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Eo extends vr{data(e={}){return super.data(e)}}class Er{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:wR(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}Er._jsonSchemaVersion="firestore/querySnapshot/1.0",Er._jsonSchema={type:Be("string",Er._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class uu extends TR{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function AR(t){t=Wn(t,nr);const e=Wn(t.firestore,wi),n=tu(e),r=new uu(e);return $m(t._query),iR(n,t._query).then((s=>new Er(e,r,t,s)))}function bR(t,e,n){t=Wn(t,je);const r=Wn(t.firestore,wi),s=IR(t.converter,e);return RR(r,[dR(xm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function SR(t,...e){var l,h,d;t=ft(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ad(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ad(e[r])){const p=e[r];e[r]=(l=p.next)==null?void 0:l.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,a,c;if(t instanceof je)a=Wn(t.firestore,wi),c=Ll(t._key.path),i={next:p=>{e[r]&&e[r](CR(a,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Wn(t,nr);a=Wn(p.firestore,wi),c=p._query;const y=new uu(a);i={next:b=>{e[r]&&e[r](new Er(a,y,p,b))},error:e[r+1],complete:e[r+2]},$m(t._query)}return(function(y,b,D,x){const B=new Nm(x),H=new Im(b,B,D);return y.asyncQueue.enqueueAndForget((async()=>Em(await Jc(y),H))),()=>{B.Nu(),y.asyncQueue.enqueueAndForget((async()=>Tm(await Jc(y),H)))}})(tu(a),c,s,i)}function RR(t,e){return(function(r,s){const i=new zn;return r.asyncQueue.enqueueAndForget((async()=>KS(await sR(r),s,i))),i.promise})(tu(t),e)}function CR(t,e,n){const r=n.docs.get(e._key),s=new uu(t);return new vr(t,s,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}function PR(){return new iu("serverTimestamp")}(function(e,n=!0){(function(s){ds=s})(hs),ts(new Ir("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new wi(new dA(r.getProvider("auth-internal")),new mA(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _i(h.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),qn(hf,ff,e),qn(hf,ff,"esm2020")})();var VR="firebase",NR="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(VR,NR,"app");const DR={apiKey:"AIzaSyBOzjvNvtljSrWIZ5omnoDzc5WKCmWuUfg",authDomain:"brew-n-save-bryant.firebaseapp.com",projectId:"brew-n-save-bryant",storageBucket:"brew-n-save-bryant.firebasestorage.app",messagingSenderId:"250055878376",appId:"1:250055878376:web:791a833361f9321dec0b5d"},Wm=Dp(DR),Yc=cR(Wm),hc=Fw(Wm),ud=["Hot","Cold"],fc=async t=>(await AR(Hm(Xc(Yc,t)))).docs.map(n=>({id:n.id,...n.data()})),Km=tE("BeverageStore",{state:()=>({temps:ud,bases:[],creamers:[],syrups:[],beverages:[],currentBase:null,currentCreamer:null,currentSyrup:null,currentTemp:ud[0]||"Hot",currentBeverage:null,user:null,beverageListener:null}),getters:{isIced(t){return t.currentTemp==="Cold"}},actions:{async init(){if(this.bases.length)return;const[t,e,n]=await Promise.all([fc("bases"),fc("creamers"),fc("syrups")]);this.bases=t,this.creamers=e,this.syrups=n,this.currentBase=this.bases[0]||null,this.currentCreamer=this.creamers[0]||null,this.currentSyrup=this.syrups[0]||null},setUser(t){var r;if(((r=this.user)==null?void 0:r.uid)===(t==null?void 0:t.uid)){this.user=t;return}if(this.stopBeverageListener(),this.user=t,this.beverages=[],this.currentBeverage=null,!t)return;const e=Xc(Yc,"beverages"),n=Hm(e,vR("uid","==",t.uid),ER("createdAt","desc"));this.beverageListener=SR(n,s=>{const i=s.docs.map(a=>{const c=a.data();return{id:a.id,name:c.name,base:c.base,creamer:c.creamer,syrup:c.syrup,temp:c.temp}});this.beverages=i,i.length?this.showBeverage(i[0]):this.currentBeverage=null})},stopBeverageListener(){this.beverageListener&&(this.beverageListener(),this.beverageListener=null)},async makeBeverage(t){if(!this.user)return"No user logged in, please sign in first.";if(!this.currentBase||!this.currentCreamer||!this.currentSyrup||!this.currentTemp)return"Please complete all beverage options and the name before making a beverage.";const e=(t||"").trim();if(!e)return"Please complete all beverage options and the name before making a beverage.";const n=Xc(Yc,"beverages"),r=`${this.user.uid}-${Date.now()}`,s={name:e,base:this.currentBase,creamer:this.currentCreamer,syrup:this.currentSyrup,temp:this.currentTemp,uid:this.user.uid,createdAt:PR()};await bR(aR(n,r),s);const i={id:r,name:e,base:this.currentBase,creamer:this.currentCreamer,syrup:this.currentSyrup,temp:this.currentTemp};return this.beverages=[i,...this.beverages.filter(a=>a.id!==r)],this.showBeverage(i),`Beverage ${e} made successfully!`},showBeverage(t){this.currentBase=t.base,this.currentCreamer=t.creamer,this.currentSyrup=t.syrup,this.currentTemp=t.temp||this.temps[0]||this.currentTemp,this.currentBeverage=t}}}),kR=Si({name:"App",components:{Beverage:uA},data(){return{newBeverageName:"",statusMessage:"",authUnsubscribe:null}},computed:{beverageStore(){return Km()},selectedBaseId:{get(){var t;return((t=this.beverageStore.currentBase)==null?void 0:t.id)||""},set(t){const e=this.beverageStore.bases.find(n=>n.id===t)||null;this.beverageStore.currentBase=e}},selectedCreamerId:{get(){var t;return((t=this.beverageStore.currentCreamer)==null?void 0:t.id)||""},set(t){const e=this.beverageStore.creamers.find(n=>n.id===t)||null;this.beverageStore.currentCreamer=e}},selectedSyrupId:{get(){var t;return((t=this.beverageStore.currentSyrup)==null?void 0:t.id)||""},set(t){const e=this.beverageStore.syrups.find(n=>n.id===t)||null;this.beverageStore.currentSyrup=e}},selectedTemp:{get(){return this.beverageStore.currentTemp||""},set(t){this.beverageStore.currentTemp=t}}},created(){this.authUnsubscribe=SI(hc,t=>{this.beverageStore.setUser(t),t||(this.statusMessage="Signed out. Sign in to see your beverages.")})},beforeUnmount(){this.authUnsubscribe&&(this.authUnsubscribe(),this.authUnsubscribe=null)},methods:{async handleMakeBeverage(){const t=this.newBeverageName.trim();if(!t){this.statusMessage="Please complete all beverage options and the name before making a beverage.";return}const e=await this.beverageStore.makeBeverage(t);this.statusMessage=e,e!=null&&e.startsWith("Beverage")&&(this.newBeverageName="")},async withGoogle(){const t=new rn;this.statusMessage="Signing in...";try{const e=await KI(hc,t),n=e.user.displayName||e.user.email||"User";this.statusMessage=`Signed in as ${n}.`}catch(e){const n=e instanceof Error?e.message:"Could not sign in.";this.statusMessage=n}},async signOutUser(){try{await RI(hc),this.statusMessage="Signed out. Sign in to see your beverages."}catch(t){const e=t instanceof Error?t.message:"Could not sign out.";this.statusMessage=e}},isCurrentSelection(t){var e,n,r;return((e=this.beverageStore.currentBase)==null?void 0:e.id)===t.base.id&&((n=this.beverageStore.currentCreamer)==null?void 0:n.id)===t.creamer.id&&((r=this.beverageStore.currentSyrup)==null?void 0:r.id)===t.syrup.id&&this.beverageStore.currentTemp===t.temp}}}),OR={class:"app"},MR={key:0,class:"auth-panel"},xR={class:"user-info"},LR={key:1,class:"status-message"},FR={key:2,class:"beverage-builder"},UR={class:"temps"},BR=["value"],jR={class:"controls"},$R={class:"control"},qR=["value"],HR={class:"control"},zR=["value"],WR={class:"control"},KR=["value"],GR={class:"name-row"},QR={class:"control beverage-name"},JR={class:"control make-beverage"},XR=["disabled"],YR={key:0,class:"control make-beverage"},ZR={key:3},eC={key:0,id:"beverage-container"},tC={key:0},nC={key:1},rC=["checked","onChange"],sC={key:1,class:"saved-placeholder"};function iC(t,e,n,r,s,i){const a=Sy("Beverage");return le(),ve(xe,null,[ye("div",OR,[t.beverageStore.user?(le(),ve("section",MR,[ye("div",xR,[ye("p",null,[e[9]||(e[9]=co(" Signed in as ",-1)),ye("strong",null,Cn(t.beverageStore.user.displayName||t.beverageStore.user.email),1)]),ye("button",{class:"action-button",onClick:e[0]||(e[0]=(...c)=>t.signOutUser&&t.signOutUser(...c))},"Sign out")])])):Ys("",!0),t.statusMessage?(le(),ve("p",LR,Cn(t.statusMessage),1)):Ys("",!0),t.beverageStore.currentBase&&t.beverageStore.currentCreamer&&t.beverageStore.currentSyrup?(le(),ve("div",FR,[Tt(a,{isIced:t.beverageStore.isIced,base:t.beverageStore.currentBase,creamer:t.beverageStore.currentCreamer,syrup:t.beverageStore.currentSyrup},null,8,["isIced","base","creamer","syrup"]),ye("div",UR,[(le(!0),ve(xe,null,kn(t.beverageStore.temps,c=>(le(),ve("label",{key:c,class:"temp-option"},[Ls(ye("input",{type:"radio",name:"temperature",value:c,"onUpdate:modelValue":e[1]||(e[1]=l=>t.selectedTemp=l)},null,8,BR),[[jv,t.selectedTemp]]),co(" "+Cn(c),1)]))),128))]),ye("div",jR,[ye("div",$R,[e[10]||(e[10]=ye("label",{for:"base"},"Base Beverage",-1)),Ls(ye("select",{id:"base","onUpdate:modelValue":e[2]||(e[2]=c=>t.selectedBaseId=c)},[(le(!0),ve(xe,null,kn(t.beverageStore.bases,c=>(le(),ve("option",{key:c.id,value:c.id},Cn(c.name),9,qR))),128))],512),[[Xa,t.selectedBaseId]])]),ye("div",HR,[e[11]||(e[11]=ye("label",{for:"creamer"},"Creamer",-1)),Ls(ye("select",{id:"creamer","onUpdate:modelValue":e[3]||(e[3]=c=>t.selectedCreamerId=c)},[(le(!0),ve(xe,null,kn(t.beverageStore.creamers,c=>(le(),ve("option",{key:c.id,value:c.id},Cn(c.name),9,zR))),128))],512),[[Xa,t.selectedCreamerId]])]),ye("div",WR,[e[12]||(e[12]=ye("label",{for:"syrup"},"Syrup",-1)),Ls(ye("select",{id:"syrup","onUpdate:modelValue":e[4]||(e[4]=c=>t.selectedSyrupId=c)},[(le(!0),ve(xe,null,kn(t.beverageStore.syrups,c=>(le(),ve("option",{key:c.id,value:c.id},Cn(c.name),9,KR))),128))],512),[[Xa,t.selectedSyrupId]])])]),ye("div",GR,[ye("div",QR,[e[13]||(e[13]=ye("label",{for:"beverageName"},"Beverage Name",-1)),Ls(ye("input",{id:"beverageName",type:"text","onUpdate:modelValue":e[5]||(e[5]=c=>t.newBeverageName=c),placeholder:"Enter a name",onKeyup:e[6]||(e[6]=qv((...c)=>t.handleMakeBeverage&&t.handleMakeBeverage(...c),["enter"]))},null,544),[[Bv,t.newBeverageName]])]),ye("div",JR,[ye("button",{class:"action-button",onClick:e[7]||(e[7]=(...c)=>t.handleMakeBeverage&&t.handleMakeBeverage(...c)),disabled:!t.beverageStore.user}," Make Beverage ",8,XR)]),t.beverageStore.user?Ys("",!0):(le(),ve("div",YR,[ye("button",{class:"action-button",onClick:e[8]||(e[8]=(...c)=>t.withGoogle&&t.withGoogle(...c))},"Sign in with Google")]))])])):(le(),ve("div",ZR,"Loading beverages..."))]),t.beverageStore.user?(le(),ve("div",eC,[t.beverageStore.beverages.length===0?(le(),ve("div",tC,"No beverages yet. Make one to see it here.")):(le(),ve("div",nC,[(le(!0),ve(xe,null,kn(t.beverageStore.beverages,c=>(le(),ve("div",{key:c.id,class:"beverage-option"},[ye("label",null,[ye("input",{type:"radio",name:"saved-beverage",checked:t.isCurrentSelection(c),onChange:l=>t.beverageStore.showBeverage(c)},null,40,rC),co(" "+Cn(c.name),1)])]))),128))]))])):(le(),ve("div",sC,"Sign in to load your saved beverages."))],64)}const oC=tr(kR,[["render",iC],["__scopeId","data-v-9f614717"]]),Gm=Qv(),Qm=Wv(oC);Qm.use(Gm);const aC=Km(Gm),cC=async()=>{try{await aC.init()}catch(t){console.error("Failed to load beverages from Firestore:",t)}finally{Qm.mount("#app")}};cC();
