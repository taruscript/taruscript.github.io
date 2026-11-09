(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function vu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Rt={},tr=[],di=()=>{},Wh=()=>!1,Oa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xu=n=>n.startsWith("onUpdate:"),qt=Object.assign,yu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gg=Object.prototype.hasOwnProperty,gt=(n,e)=>gg.call(n,e),Ye=Array.isArray,nr=n=>To(n)==="[object Map]",Xh=n=>To(n)==="[object Set]",ff=n=>To(n)==="[object Date]",Qe=n=>typeof n=="function",Bt=n=>typeof n=="string",Zn=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",jh=n=>(Mt(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),$h=Object.prototype.toString,To=n=>$h.call(n),_g=n=>To(n).slice(8,-1),Kh=n=>To(n)==="[object Object]",Mu=n=>Bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Yr=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},vg=/-\w/g,Vn=Ba(n=>n.replace(vg,e=>e.slice(1).toUpperCase())),xg=/\B([A-Z])/g,ls=Ba(n=>n.replace(xg,"-$1").toLowerCase()),ka=Ba(n=>n.charAt(0).toUpperCase()+n.slice(1)),nl=Ba(n=>n?`on${ka(n)}`:""),ss=(n,e)=>!Object.is(n,e),il=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},qh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},yg=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let df;const Ha=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Va(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Bt(i)?Eg(i):Va(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Bt(n)||Mt(n))return n}const Mg=/;(?![^(]*\))/g,Ag=/:([^]+)/,Sg=/\/\*[^]*?\*\//g;function Eg(n){const e={};return n.replace(Sg,"").split(Mg).forEach(t=>{if(t){const i=t.split(Ag);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mn(n){let e="";if(Bt(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=Mn(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bg=vu(Tg);function Yh(n){return!!n||n===""}function wg(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Au(n[i],e[i]);return t}function Au(n,e){if(n===e)return!0;let t=ff(n),i=ff(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Zn(n),i=Zn(e),t||i)return n===e;if(t=Ye(n),i=Ye(e),t||i)return t&&i?wg(n,e):!1;if(t=Mt(n),i=Mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Au(n[o],e[o]))return!1}}return String(n)===String(e)}const Qh=n=>!!(n&&n.__v_isRef===!0),_t=n=>Bt(n)?n:n==null?"":Ye(n)||Mt(n)&&(n.toString===$h||!Qe(n.toString))?Qh(n)?_t(n.value):JSON.stringify(n,Zh,2):String(n),Zh=(n,e)=>Qh(e)?Zh(n,e.value):nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[sl(i,r)+" =>"]=s,t),{})}:Xh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>sl(t))}:Zn(e)?sl(e):Mt(e)&&!Ye(e)&&!Kh(e)?String(e):e,sl=(n,e="")=>{var t;return Zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let vn;class Jh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=vn;try{return vn=this,e()}finally{vn=t}}}on(){++this._on===1&&(this.prevScope=vn,vn=this)}off(){this._on>0&&--this._on===0&&(vn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rg(n){return new Jh(n)}function Cg(){return vn}let Pt;const rl=new WeakSet;class ep{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vn&&vn.active&&vn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rl.has(this)&&(rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||np(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hf(this),ip(this);const e=Pt,t=qn;Pt=this,qn=!0;try{return this.fn()}finally{sp(this),Pt=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tu(e);this.deps=this.depsTail=void 0,hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sc(this)&&this.run()}get dirty(){return sc(this)}}let tp=0,Qr,Zr;function np(n,e=!1){if(n.flags|=8,e){n.next=Zr,Zr=n;return}n.next=Qr,Qr=n}function Su(){tp++}function Eu(){if(--tp>0)return;if(Zr){let e=Zr;for(Zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qr;){let e=Qr;for(Qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ip(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sp(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Tu(i),Pg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function sc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===co)||(n.globalVersion=co,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!sc(n))))return;n.flags|=2;const e=n.dep,t=Pt,i=qn;Pt=n,qn=!0;try{ip(n);const s=n.fn(n._value);(e.version===0||ss(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pt=t,qn=i,sp(n),n.flags&=-3}}function Tu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Tu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qn=!0;const op=[];function Fi(){op.push(qn),qn=!1}function Oi(){const n=op.pop();qn=n===void 0?!0:n}function hf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Pt;Pt=void 0;try{e()}finally{Pt=t}}}let co=0;class Ig{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Pt||!qn||Pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Pt)t=this.activeLink=new Ig(Pt,this),Pt.deps?(t.prevDep=Pt.depsTail,Pt.depsTail.nextDep=t,Pt.depsTail=t):Pt.deps=Pt.depsTail=t,ap(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Pt.depsTail,t.nextDep=void 0,Pt.depsTail.nextDep=t,Pt.depsTail=t,Pt.deps===t&&(Pt.deps=i)}return t}trigger(e){this.version++,co++,this.notify(e)}notify(e){Su();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Eu()}}}function ap(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ap(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const rc=new WeakMap,Es=Symbol(""),oc=Symbol(""),uo=Symbol("");function Jt(n,e,t){if(qn&&Pt){let i=rc.get(n);i||rc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new bu),s.map=i,s.key=t),s.track()}}function Pi(n,e,t,i,s,r){const o=rc.get(n);if(!o){co++;return}const a=l=>{l&&l.trigger()};if(Su(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&Mu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===uo||!Zn(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(uo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Es)),nr(n)&&a(o.get(oc)));break;case"delete":l||(a(o.get(Es)),nr(n)&&a(o.get(oc)));break;case"set":nr(n)&&a(o.get(Es));break}}Eu()}function Is(n){const e=mt(n);return e===n?e:(Jt(e,"iterate",uo),Hn(n)?e:e.map(Jn))}function za(n){return Jt(n=mt(n),"iterate",uo),n}function Zi(n,e){return Bi(n)?fr(Ts(n)?Jn(e):e):Jn(e)}const Lg={__proto__:null,[Symbol.iterator](){return ol(this,Symbol.iterator,n=>Zi(this,n))},concat(...n){return Is(this).concat(...n.map(e=>Ye(e)?Is(e):e))},entries(){return ol(this,"entries",n=>(n[1]=Zi(this,n[1]),n))},every(n,e){return xi(this,"every",n,e,void 0,arguments)},filter(n,e){return xi(this,"filter",n,e,t=>t.map(i=>Zi(this,i)),arguments)},find(n,e){return xi(this,"find",n,e,t=>Zi(this,t),arguments)},findIndex(n,e){return xi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xi(this,"findLast",n,e,t=>Zi(this,t),arguments)},findLastIndex(n,e){return xi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xi(this,"forEach",n,e,void 0,arguments)},includes(...n){return al(this,"includes",n)},indexOf(...n){return al(this,"indexOf",n)},join(n){return Is(this).join(n)},lastIndexOf(...n){return al(this,"lastIndexOf",n)},map(n,e){return xi(this,"map",n,e,void 0,arguments)},pop(){return Dr(this,"pop")},push(...n){return Dr(this,"push",n)},reduce(n,...e){return pf(this,"reduce",n,e)},reduceRight(n,...e){return pf(this,"reduceRight",n,e)},shift(){return Dr(this,"shift")},some(n,e){return xi(this,"some",n,e,void 0,arguments)},splice(...n){return Dr(this,"splice",n)},toReversed(){return Is(this).toReversed()},toSorted(n){return Is(this).toSorted(n)},toSpliced(...n){return Is(this).toSpliced(...n)},unshift(...n){return Dr(this,"unshift",n)},values(){return ol(this,"values",n=>Zi(this,n))}};function ol(n,e,t){const i=za(n),s=i[e]();return i!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Dg=Array.prototype;function xi(n,e,t,i,s,r){const o=za(n),a=o!==n&&!Hn(n),l=o[e];if(l!==Dg[e]){const f=l.apply(n,r);return a?Jn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Zi(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function pf(n,e,t,i){const s=za(n);let r=t;return s!==n&&(Hn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Zi(n,a),l,n)}),s[e](r,...i)}function al(n,e,t){const i=mt(n);Jt(i,"iterate",uo);const s=i[e](...t);return(s===-1||s===!1)&&Cu(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function Dr(n,e,t=[]){Fi(),Su();const i=mt(n)[e].apply(n,t);return Eu(),Oi(),i}const Ng=vu("__proto__,__v_isRef,__isVue"),lp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function Ug(n){Zn(n)||(n=String(n));const e=mt(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class cp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Xg:hp:r?dp:fp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=Lg[t]))return l;if(t==="hasOwnProperty")return Ug}const a=Reflect.get(e,t,tn(e)?e:i);if((Zn(t)?lp.has(t):Ng(t))||(s||Jt(e,"get",t),r))return a;if(tn(a)){const l=o&&Mu(t)?a:a.value;return s&&Mt(l)?lc(l):l}return Mt(a)?s?lc(a):bo(a):a}}class up extends cp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ye(e)&&Mu(t);if(!this._isShallow){const c=Bi(r);if(!Hn(i)&&!Bi(i)&&(r=mt(r),i=mt(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:gt(e,t),l=Reflect.set(e,t,i,tn(e)?e:s);return e===mt(s)&&(a?ss(i,r)&&Pi(e,"set",t,i):Pi(e,"add",t,i)),l}deleteProperty(e,t){const i=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zn(t)||!lp.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",Ye(e)?"length":Es),Reflect.ownKeys(e)}}class Fg extends cp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Og=new up,Bg=new Fg,kg=new up(!0);const ac=n=>n,Do=n=>Reflect.getPrototypeOf(n);function Hg(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),o=nr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?ac:e?fr:Jn;return!e&&Jt(r,"iterate",l?oc:Es),qt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function No(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Vg(n,e){const t={get(s){const r=this.__v_raw,o=mt(r),a=mt(s);n||(ss(s,a)&&Jt(o,"get",s),Jt(o,"get",a));const{has:l}=Do(o),c=e?ac:n?fr:Jn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Jt(mt(s),"iterate",Es),s.size},has(s){const r=this.__v_raw,o=mt(r),a=mt(s);return n||(ss(s,a)&&Jt(o,"has",s),Jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=mt(a),c=e?ac:n?fr:Jn;return!n&&Jt(l,"iterate",Es),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return qt(t,n?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(s){!e&&!Hn(s)&&!Bi(s)&&(s=mt(s));const r=mt(this);return Do(r).has.call(r,s)||(r.add(s),Pi(r,"add",s,s)),this},set(s,r){!e&&!Hn(r)&&!Bi(r)&&(r=mt(r));const o=mt(this),{has:a,get:l}=Do(o);let c=a.call(o,s);c||(s=mt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ss(r,u)&&Pi(o,"set",s,r):Pi(o,"add",s,r),this},delete(s){const r=mt(this),{has:o,get:a}=Do(r);let l=o.call(r,s);l||(s=mt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Pi(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,o=s.clear();return r&&Pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Hg(s,n,e)}),t}function wu(n,e){const t=Vg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(gt(t,s)&&s in i?t:i,s,r)}const zg={get:wu(!1,!1)},Gg={get:wu(!1,!0)},Wg={get:wu(!0,!1)};const fp=new WeakMap,dp=new WeakMap,hp=new WeakMap,Xg=new WeakMap;function jg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $g(n){return n.__v_skip||!Object.isExtensible(n)?0:jg(_g(n))}function bo(n){return Bi(n)?n:Ru(n,!1,Og,zg,fp)}function pp(n){return Ru(n,!1,kg,Gg,dp)}function lc(n){return Ru(n,!0,Bg,Wg,hp)}function Ru(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=$g(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ts(n){return Bi(n)?Ts(n.__v_raw):!!(n&&n.__v_isReactive)}function Bi(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function Cu(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Kg(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&qh(n,"__v_skip",!0),n}const Jn=n=>Mt(n)?bo(n):n,fr=n=>Mt(n)?lc(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function bt(n){return mp(n,!1)}function qg(n){return mp(n,!0)}function mp(n,e){return tn(n)?n:new Yg(n,e)}class Yg{constructor(e,t){this.dep=new bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:Jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Hn(e)||Bi(e);e=i?e:mt(e),ss(e,t)&&(this._rawValue=e,this._value=i?e:Jn(e),this.dep.trigger())}}function Ot(n){return tn(n)?n.value:n}const Qg={get:(n,e,t)=>e==="__v_raw"?n:Ot(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return tn(s)&&!tn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function gp(n){return Ts(n)?n:new Proxy(n,Qg)}class Zg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return np(this,!0),!0}get value(){const e=this.dep.track();return rp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jg(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new Zg(i,s,t)}const Uo={},Aa=new WeakMap;let xs;function e_(n,e=!1,t=xs){if(t){let i=Aa.get(t);i||Aa.set(t,i=[]),i.push(n)}}function t_(n,e,t=Rt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:Hn(y)||s===!1||s===0?Ii(y,1):Ii(y);let u,f,d,h,g=!1,_=!1;if(tn(n)?(f=()=>n.value,g=Hn(n)):Ts(n)?(f=()=>c(n),g=!0):Ye(n)?(_=!0,g=n.some(y=>Ts(y)||Hn(y)),f=()=>n.map(y=>{if(tn(y))return y.value;if(Ts(y))return c(y);if(Qe(y))return l?l(y,2):y()})):Qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Fi();try{d()}finally{Oi()}}const y=xs;xs=u;try{return l?l(n,3,[h]):n(h)}finally{xs=y}}:f=di,e&&s){const y=f,w=s===!0?1/0:s;f=()=>Ii(y(),w)}const m=Cg(),p=()=>{u.stop(),m&&m.active&&yu(m.effects,u)};if(r&&e){const y=e;e=(...w)=>{y(...w),p()}}let M=_?new Array(n.length).fill(Uo):Uo;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const w=u.run();if(s||g||(_?w.some((R,I)=>ss(R,M[I])):ss(w,M))){d&&d();const R=xs;xs=u;try{const I=[w,M===Uo?void 0:_&&M[0]===Uo?[]:M,h];M=w,l?l(e,3,I):e(...I)}finally{xs=R}}}else u.run()};return a&&a(b),u=new ep(f),u.scheduler=o?()=>o(b,!1):b,h=y=>e_(y,!1,u),d=u.onStop=()=>{const y=Aa.get(u);if(y){if(l)l(y,4);else for(const w of y)w();Aa.delete(u)}},e?i?b(!0):M=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ii(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))Ii(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)Ii(n[i],e,t);else if(Xh(n)||nr(n))n.forEach(i=>{Ii(i,e,t)});else if(Kh(n)){for(const i in n)Ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ii(n[i],e,t)}return n}function wo(n,e,t,i){try{return i?n(...i):n()}catch(s){Ga(s,e,t)}}function pi(n,e,t,i){if(Qe(n)){const s=wo(n,e,t,i);return s&&jh(s)&&s.catch(r=>{Ga(r,e,t)}),s}if(Ye(n)){const s=[];for(let r=0;r<n.length;r++)s.push(pi(n[r],e,t,i));return s}}function Ga(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Rt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Fi(),wo(r,null,10,[n,l,c]),Oi();return}}n_(n,t,s,i,o)}function n_(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const cn=[];let oi=-1;const ir=[];let Ji=null,Zs=0;const _p=Promise.resolve();let Sa=null;function Jr(n){const e=Sa||_p;return n?e.then(this?n.bind(this):n):e}function i_(n){let e=oi+1,t=cn.length;for(;e<t;){const i=e+t>>>1,s=cn[i],r=fo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Pu(n){if(!(n.flags&1)){const e=fo(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=fo(t)?cn.push(n):cn.splice(i_(e),0,n),n.flags|=1,vp()}}function vp(){Sa||(Sa=_p.then(yp))}function s_(n){Ye(n)?ir.push(...n):Ji&&n.id===-1?Ji.splice(Zs+1,0,n):n.flags&1||(ir.push(n),n.flags|=1),vp()}function mf(n,e,t=oi+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function xp(n){if(ir.length){const e=[...new Set(ir)].sort((t,i)=>fo(t)-fo(i));if(ir.length=0,Ji){Ji.push(...e);return}for(Ji=e,Zs=0;Zs<Ji.length;Zs++){const t=Ji[Zs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ji=null,Zs=0}}const fo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function yp(n){try{for(oi=0;oi<cn.length;oi++){const e=cn[oi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;oi<cn.length;oi++){const e=cn[oi];e&&(e.flags&=-2)}oi=-1,cn.length=0,xp(),Sa=null,(cn.length||ir.length)&&yp()}}let Kt=null,Mp=null;function Ea(n){const e=Kt;return Kt=n,Mp=n&&n.type.__scopeId||null,e}function ri(n,e=Kt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&wa(-1);const r=Ea(e);let o;try{o=n(...s)}finally{Ea(r),i._d&&wa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gf(n,e){if(Kt===null)return n;const t=$a(Kt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Rt]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&Ii(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function us(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Fi(),pi(l,t,8,[n.el,a,n,e]),Oi())}}function ua(n,e){if(en){let t=en.provides;const i=en.parent&&en.parent.provides;i===t&&(t=en.provides=Object.create(i)),t[n]=e}}function Ni(n,e,t=!1){const i=sv();if(i||rr){let s=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const r_=Symbol.for("v-scx"),o_=()=>Ni(r_);function bs(n,e,t){return Ap(n,e,t)}function Ap(n,e,t=Rt){const{immediate:i,deep:s,flush:r,once:o}=t,a=qt({},t),l=e&&i||!e&&r!=="post";let c;if(mo){if(r==="sync"){const h=o_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=di,h.resume=di,h.pause=di,h}}const u=en;a.call=(h,g,_)=>pi(h,u,g,_);let f=!1;r==="post"?a.scheduler=h=>{Zt(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Pu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=t_(n,e,a);return mo&&(c?c.push(d):l&&d()),d}function a_(n,e,t){const i=this.proxy,s=Bt(n)?n.includes(".")?Sp(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const o=Po(this),a=Ap(s,r.bind(i),t);return o(),a}function Sp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Ep=Symbol("_vte"),l_=n=>n.__isTeleport,eo=n=>n&&(n.disabled||n.disabled===""),_f=n=>n&&(n.defer||n.defer===""),vf=n=>typeof SVGElement<"u"&&n instanceof SVGElement,xf=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,cc=(n,e)=>{const t=n&&n.to;return Bt(t)?e?e(t):null:t},Tp={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:_,createComment:m}}=c,p=eo(e.props);let{shapeFlag:M,children:b,dynamicChildren:y}=e;if(n==null){const w=e.el=_(""),R=e.anchor=_("");h(w,t,i),h(R,t,i);const I=(A,E)=>{M&16&&u(b,A,E,s,r,o,a,l)},D=()=>{const A=e.target=cc(e.props,g),E=uc(A,e,_,h);A&&(o!=="svg"&&vf(A)?o="svg":o!=="mathml"&&xf(A)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(A),p||(I(A,E),fa(e,!1)))};p&&(I(t,R),fa(e,!0)),_f(e.props)?(e.el.__isMounted=!1,Zt(()=>{D(),delete e.el.__isMounted},r)):D()}else{if(_f(e.props)&&n.el.__isMounted===!1){Zt(()=>{Tp.process(n,e,t,i,s,r,o,a,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const w=e.anchor=n.anchor,R=e.target=n.target,I=e.targetAnchor=n.targetAnchor,D=eo(n.props),A=D?t:R,E=D?w:I;if(o==="svg"||vf(R)?o="svg":(o==="mathml"||xf(R))&&(o="mathml"),y?(d(n.dynamicChildren,y,A,s,r,o,a),Nu(n,e,!0)):l||f(n,e,A,E,s,r,o,a,!1),p)D?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Fo(e,t,w,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const N=e.target=cc(e.props,g);N&&Fo(e,N,null,c,0)}else D&&Fo(e,R,I,c,1);fa(e,p)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=n;if(f&&(s(c),s(u)),r&&s(l),o&16){const h=r||!eo(d);for(let g=0;g<a.length;g++){const _=a[g];i(_,e,t,h,!!_.dynamicChildren)}}},move:Fo,hydrate:c_};function Fo(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,e,t),(!f||eo(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);f&&i(a,e,t)}function c_(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(m,p){let M=p;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")e.targetStart=M;else if(M.data==="teleport anchor"){e.targetAnchor=M,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}M=o(M)}}function h(m,p){p.anchor=f(o(m),p,a(m),t,i,s,r)}const g=e.target=cc(e.props,l),_=eo(e.props);if(g){const m=g._lpa||g.firstChild;e.shapeFlag&16&&(_?(h(n,e),d(g,m),e.targetAnchor||uc(g,e,u,c,a(n)===g?n:null)):(e.anchor=o(n),d(g,m),e.targetAnchor||uc(g,e,u,c),f(m&&o(m),e,g,t,i,s,r))),fa(e,_)}else _&&e.shapeFlag&16&&(h(n,e),e.targetStart=n,e.targetAnchor=o(n));return e.anchor&&o(e.anchor)}const u_=Tp;function fa(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function uc(n,e,t,i,s=null){const r=e.targetStart=t(""),o=e.targetAnchor=t("");return r[Ep]=o,n&&(i(r,n,s),i(o,n,s)),o}const f_=Symbol("_leaveCb");function Iu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Iu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sn(n,e){return Qe(n)?qt({name:n.name},e,{setup:n}):n}function bp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function yf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ta=new WeakMap;function to(n,e,t,i,s=!1){if(Ye(n)){n.forEach((_,m)=>to(_,e&&(Ye(e)?e[m]:e),t,i,s));return}if(sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&to(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?$a(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Rt?a.refs={}:a.refs,f=a.setupState,d=mt(f),h=f===Rt?Wh:_=>yf(u,_)?!1:gt(d,_),g=(_,m)=>!(m&&yf(u,m));if(c!=null&&c!==l){if(Mf(e),Bt(c))u[c]=null,h(c)&&(f[c]=null);else if(tn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Qe(l))wo(l,a,12,[o,u]);else{const _=Bt(l),m=tn(l);if(_||m){const p=()=>{if(n.f){const M=_?h(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ye(M)&&yu(M,r);else if(Ye(M))M.includes(r)||M.push(r);else if(_)u[l]=[r],h(l)&&(f[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,h(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const M=()=>{p(),Ta.delete(n)};M.id=-1,Ta.set(n,M),Zt(M,t)}else Mf(n),p()}}}function Mf(n){const e=Ta.get(n);e&&(e.flags|=8,Ta.delete(n))}Ha().requestIdleCallback;Ha().cancelIdleCallback;const sr=n=>!!n.type.__asyncLoader,wp=n=>n.type.__isKeepAlive;function d_(n,e){Rp(n,"a",e)}function h_(n,e){Rp(n,"da",e)}function Rp(n,e,t=en){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Wa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)wp(s.parent.vnode)&&p_(i,e,t,s),s=s.parent}}function p_(n,e,t,i){const s=Wa(e,n,i,!0);Cp(()=>{yu(i[e],s)},t)}function Wa(n,e,t=en,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const a=Po(t),l=pi(e,t,n,o);return a(),Oi(),l});return i?s.unshift(r):s.push(r),r}}const Vi=n=>(e,t=en)=>{(!mo||n==="sp")&&Wa(n,(...i)=>e(...i),t)},m_=Vi("bm"),Ro=Vi("m"),g_=Vi("bu"),__=Vi("u"),Co=Vi("bum"),Cp=Vi("um"),v_=Vi("sp"),x_=Vi("rtg"),y_=Vi("rtc");function M_(n,e=en){Wa("ec",n,e)}const A_="components";function yn(n,e){return E_(A_,n,!0,e)||n}const S_=Symbol.for("v-ndc");function E_(n,e,t=!0,i=!1){const s=Kt||en;if(s){const r=s.type;{const a=cv(r,!1);if(a&&(a===e||a===Vn(e)||a===ka(Vn(e))))return r}const o=Af(s[n]||r[n],e)||Af(s.appContext[n],e);return!o&&i?r:o}}function Af(n,e){return n&&(n[e]||n[Vn(e)]||n[ka(Vn(e))])}function Un(n,e,t,i){let s;const r=t,o=Ye(n);if(o||Bt(n)){const a=o&&Ts(n);let l=!1,c=!1;a&&(l=!Hn(n),c=Bi(n),n=za(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?fr(Jn(n[u])):Jn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Pp(n,e,t={},i,s){if(Kt.ce||Kt.parent&&sr(Kt.parent)&&Kt.parent.ce){const c=Object.keys(t).length>0;return Ge(),On(wt,null,[Et("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Ge();const o=r&&Ip(r(t)),a=t.key||o&&o.key,l=On(wt,{key:(a&&!Zn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Ip(n){return n.some(e=>po(e)?!(e.type===ki||e.type===wt&&!Ip(e.children)):!0)?n:null}const fc=n=>n?Yp(n)?$a(n):fc(n.parent):null,no=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fc(n.parent),$root:n=>fc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dp(n),$forceUpdate:n=>n.f||(n.f=()=>{Pu(n.update)}),$nextTick:n=>n.n||(n.n=Jr.bind(n.proxy)),$watch:n=>a_.bind(n)}),ll=(n,e)=>n!==Rt&&!n.__isScriptSetup&&gt(n,e),T_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ll(i,e))return o[e]=1,i[e];if(s!==Rt&&gt(s,e))return o[e]=2,s[e];if(gt(r,e))return o[e]=3,r[e];if(t!==Rt&&gt(t,e))return o[e]=4,t[e];dc&&(o[e]=0)}}const c=no[e];let u,f;if(c)return e==="$attrs"&&Jt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Rt&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ll(s,e)?(s[e]=t,!0):i!==Rt&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Rt&&a[0]!=="$"&&gt(n,a)||ll(e,a)||gt(r,a)||gt(i,a)||gt(no,a)||gt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Sf(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dc=!0;function b_(n){const e=Dp(n),t=n.proxy,i=n.ctx;dc=!1,e.beforeCreate&&Ef(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:y,render:w,renderTracked:R,renderTriggered:I,errorCaptured:D,serverPrefetch:A,expose:E,inheritAttrs:N,components:W,directives:Z,filters:ie}=e;if(c&&w_(c,i,null),o)for(const he in o){const j=o[he];Qe(j)&&(i[he]=j.bind(t))}if(s){const he=s.call(t,t);Mt(he)&&(n.data=bo(he))}if(dc=!0,r)for(const he in r){const j=r[he],ye=Qe(j)?j.bind(t,t):Qe(j.get)?j.get.bind(t,t):di,Re=!Qe(j)&&Qe(j.set)?j.set.bind(t):di,De=$t({get:ye,set:Re});Object.defineProperty(i,he,{enumerable:!0,configurable:!0,get:()=>De.value,set:Be=>De.value=Be})}if(a)for(const he in a)Lp(a[he],i,t,he);if(l){const he=Qe(l)?l.call(t):l;Reflect.ownKeys(he).forEach(j=>{ua(j,he[j])})}u&&Ef(u,n,"c");function te(he,j){Ye(j)?j.forEach(ye=>he(ye.bind(t))):j&&he(j.bind(t))}if(te(m_,f),te(Ro,d),te(g_,h),te(__,g),te(d_,_),te(h_,m),te(M_,D),te(y_,R),te(x_,I),te(Co,M),te(Cp,y),te(v_,A),Ye(E))if(E.length){const he=n.exposed||(n.exposed={});E.forEach(j=>{Object.defineProperty(he,j,{get:()=>t[j],set:ye=>t[j]=ye,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===di&&(n.render=w),N!=null&&(n.inheritAttrs=N),W&&(n.components=W),Z&&(n.directives=Z),A&&bp(n)}function w_(n,e,t=di){Ye(n)&&(n=hc(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=Ni(s.from||i,s.default,!0):r=Ni(s.from||i):r=Ni(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ef(n,e,t){pi(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lp(n,e,t,i){let s=i.includes(".")?Sp(t,i):()=>t[i];if(Bt(n)){const r=e[n];Qe(r)&&bs(s,r)}else if(Qe(n))bs(s,n.bind(t));else if(Mt(n))if(Ye(n))n.forEach(r=>Lp(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&bs(s,r,n)}}function Dp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ba(l,c,o,!0)),ba(l,e,o)),Mt(e)&&r.set(e,l),l}function ba(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ba(n,r,t,!0),s&&s.forEach(o=>ba(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=R_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const R_={data:Tf,props:bf,emits:bf,methods:jr,computed:jr,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:jr,directives:jr,watch:P_,provide:Tf,inject:C_};function Tf(n,e){return e?n?function(){return qt(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function C_(n,e){return jr(hc(n),hc(e))}function hc(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function on(n,e){return n?[...new Set([].concat(n,e))]:e}function jr(n,e){return n?qt(Object.create(null),n,e):e}function bf(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:qt(Object.create(null),Sf(n),Sf(e??{})):e}function P_(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const i in e)t[i]=on(n[i],e[i]);return t}function Np(){return{app:null,config:{isNativeTag:Wh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I_=0;function L_(n,e){return function(i,s=null){Qe(i)||(i=qt({},i)),s!=null&&!Mt(s)&&(s=null);const r=Np(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:I_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:fv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...f)):Qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Et(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,$a(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(pi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=rr;rr=c;try{return u()}finally{rr=f}}};return c}}let rr=null;const D_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Vn(e)}Modifiers`]||n[`${ls(e)}Modifiers`];function N_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Rt;let s=t;const r=e.startsWith("update:"),o=r&&D_(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Bt(u)?u.trim():u)),o.number&&(s=t.map(yg)));let a,l=i[a=nl(e)]||i[a=nl(Vn(e))];!l&&r&&(l=i[a=nl(ls(e))]),l&&pi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pi(c,n,6,s)}}const U_=new WeakMap;function Up(n,e,t=!1){const i=t?U_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=Up(c,e,!0);u&&(a=!0,qt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Mt(n)&&i.set(n,null),null):(Ye(r)?r.forEach(l=>o[l]=null):qt(o,r),Mt(n)&&i.set(n,o),o)}function Xa(n,e){return!n||!Oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,ls(e))||gt(n,e))}function wf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,m=Ea(n);let p,M;try{if(t.shapeFlag&4){const y=s||i,w=y;p=li(c.call(w,y,u,f,h,d,g)),M=a}else{const y=e;p=li(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),M=e.props?a:F_(a)}}catch(y){io.length=0,Ga(y,n,1),p=Et(ki)}let b=p;if(M&&_!==!1){const y=Object.keys(M),{shapeFlag:w}=b;y.length&&w&7&&(r&&y.some(xu)&&(M=O_(M,r)),b=dr(b,M,!1,!0))}return t.dirs&&(b=dr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Iu(b,t.transition),p=b,Ea(m),p}const F_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Oa(t))&&((e||(e={}))[t]=n[t]);return e},O_=(n,e)=>{const t={};for(const i in n)(!xu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function B_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Fp(o,i,d)&&!Xa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rf(i,o,c):!0:!!o;return!1}function Rf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Fp(e,n,r)&&!Xa(t,r))return!0}return!1}function Fp(n,e,t){const i=n[t],s=e[t];return t==="style"&&Mt(i)&&Mt(s)?!Au(i,s):i!==s}function k_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Op={},Bp=()=>Object.create(Op),kp=n=>Object.getPrototypeOf(n)===Op;function H_(n,e,t,i=!1){const s={},r=Bp();n.propsDefaults=Object.create(null),Hp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:pp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function V_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=mt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Xa(n.emitsOptions,d))continue;const h=e[d];if(l)if(gt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=Vn(d);s[g]=pc(l,a,g,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Hp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!gt(e,f)&&((u=ls(f))===f||!gt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=pc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!gt(e,f))&&(delete r[f],c=!0)}c&&Pi(n.attrs,"set","")}function Hp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yr(l))continue;const c=e[l];let u;s&&gt(s,u=Vn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Xa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=mt(t),c=a||Rt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=pc(s,l,f,c[f],n,!gt(c,f))}}return o}function pc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Po(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ls(t))&&(i=!0))}return i}const z_=new WeakMap;function Vp(n,e,t=!1){const i=t?z_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=f=>{l=!0;const[d,h]=Vp(f,e,!0);qt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Mt(n)&&i.set(n,tr),tr;if(Ye(r))for(let u=0;u<r.length;u++){const f=Vn(r[u]);Cf(f)&&(o[f]=Rt)}else if(r)for(const u in r){const f=Vn(u);if(Cf(f)){const d=r[u],h=o[f]=Ye(d)||Qe(d)?{type:d}:qt({},d),g=h.type;let _=!1,m=!0;if(Ye(g))for(let p=0;p<g.length;++p){const M=g[p],b=Qe(M)&&M.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Qe(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||gt(h,"default"))&&a.push(f)}}const c=[o,a];return Mt(n)&&i.set(n,c),c}function Cf(n){return n[0]!=="$"&&!Yr(n)}const Lu=n=>n==="_"||n==="_ctx"||n==="$stable",Du=n=>Ye(n)?n.map(li):[li(n)],G_=(n,e,t)=>{if(e._n)return e;const i=ri((...s)=>Du(e(...s)),t);return i._c=!1,i},zp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Lu(s))continue;const r=n[s];if(Qe(r))e[s]=G_(s,r,i);else if(r!=null){const o=Du(r);e[s]=()=>o}}},Gp=(n,e)=>{const t=Du(e);n.slots.default=()=>t},Wp=(n,e,t)=>{for(const i in e)(t||!Lu(i))&&(n[i]=e[i])},W_=(n,e,t)=>{const i=n.slots=Bp();if(n.vnode.shapeFlag&32){const s=e._;s?(Wp(i,e,t),t&&qh(i,"_",s,!0)):zp(e,i)}else e&&Gp(n,e)},X_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Rt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Wp(s,e,t):(r=!e.$stable,zp(e,s)),o=e}else e&&(Gp(n,e),o={default:1});if(r)for(const a in s)!Lu(a)&&o[a]==null&&delete s[a]},Zt=Y_;function j_(n){return $_(n)}function $_(n,e){const t=Ha();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=di,insertStaticContent:g}=n,_=(C,v,B,$=null,K=null,k=null,_e=void 0,ee=null,de=!!v.dynamicChildren)=>{if(C===v)return;C&&!Nr(C,v)&&($=P(C),Be(C,K,k,!0),C=null),v.patchFlag===-2&&(de=!1,v.dynamicChildren=null);const{type:pe,ref:we,shapeFlag:S}=v;switch(pe){case ja:m(C,v,B,$);break;case ki:p(C,v,B,$);break;case da:C==null&&M(v,B,$,_e);break;case wt:W(C,v,B,$,K,k,_e,ee,de);break;default:S&1?w(C,v,B,$,K,k,_e,ee,de):S&6?Z(C,v,B,$,K,k,_e,ee,de):(S&64||S&128)&&pe.process(C,v,B,$,K,k,_e,ee,de,fe)}we!=null&&K?to(we,C&&C.ref,k,v||C,!v):we==null&&C&&C.ref!=null&&to(C.ref,null,k,C,!0)},m=(C,v,B,$)=>{if(C==null)i(v.el=a(v.children),B,$);else{const K=v.el=C.el;v.children!==C.children&&c(K,v.children)}},p=(C,v,B,$)=>{C==null?i(v.el=l(v.children||""),B,$):v.el=C.el},M=(C,v,B,$)=>{[C.el,C.anchor]=g(C.children,v,B,$,C.el,C.anchor)},b=({el:C,anchor:v},B,$)=>{let K;for(;C&&C!==v;)K=d(C),i(C,B,$),C=K;i(v,B,$)},y=({el:C,anchor:v})=>{let B;for(;C&&C!==v;)B=d(C),s(C),C=B;s(v)},w=(C,v,B,$,K,k,_e,ee,de)=>{if(v.type==="svg"?_e="svg":v.type==="math"&&(_e="mathml"),C==null)R(v,B,$,K,k,_e,ee,de);else{const pe=C.el&&C.el._isVueCE?C.el:null;try{pe&&pe._beginPatch(),A(C,v,K,k,_e,ee,de)}finally{pe&&pe._endPatch()}}},R=(C,v,B,$,K,k,_e,ee)=>{let de,pe;const{props:we,shapeFlag:S,transition:x,dirs:U}=C;if(de=C.el=o(C.type,k,we&&we.is,we),S&8?u(de,C.children):S&16&&D(C.children,de,null,$,K,cl(C,k),_e,ee),U&&us(C,null,$,"created"),I(de,C,C.scopeId,_e,$),we){for(const ce in we)ce!=="value"&&!Yr(ce)&&r(de,ce,null,we[ce],k,$);"value"in we&&r(de,"value",null,we.value,k),(pe=we.onVnodeBeforeMount)&&si(pe,$,C)}U&&us(C,null,$,"beforeMount");const Y=K_(K,x);Y&&x.beforeEnter(de),i(de,v,B),((pe=we&&we.onVnodeMounted)||Y||U)&&Zt(()=>{pe&&si(pe,$,C),Y&&x.enter(de),U&&us(C,null,$,"mounted")},K)},I=(C,v,B,$,K)=>{if(B&&h(C,B),$)for(let k=0;k<$.length;k++)h(C,$[k]);if(K){let k=K.subTree;if(v===k||$p(k.type)&&(k.ssContent===v||k.ssFallback===v)){const _e=K.vnode;I(C,_e,_e.scopeId,_e.slotScopeIds,K.parent)}}},D=(C,v,B,$,K,k,_e,ee,de=0)=>{for(let pe=de;pe<C.length;pe++){const we=C[pe]=ee?Ci(C[pe]):li(C[pe]);_(null,we,v,B,$,K,k,_e,ee)}},A=(C,v,B,$,K,k,_e)=>{const ee=v.el=C.el;let{patchFlag:de,dynamicChildren:pe,dirs:we}=v;de|=C.patchFlag&16;const S=C.props||Rt,x=v.props||Rt;let U;if(B&&fs(B,!1),(U=x.onVnodeBeforeUpdate)&&si(U,B,v,C),we&&us(v,C,B,"beforeUpdate"),B&&fs(B,!0),(S.innerHTML&&x.innerHTML==null||S.textContent&&x.textContent==null)&&u(ee,""),pe?E(C.dynamicChildren,pe,ee,B,$,cl(v,K),k):_e||j(C,v,ee,null,B,$,cl(v,K),k,!1),de>0){if(de&16)N(ee,S,x,B,K);else if(de&2&&S.class!==x.class&&r(ee,"class",null,x.class,K),de&4&&r(ee,"style",S.style,x.style,K),de&8){const Y=v.dynamicProps;for(let ce=0;ce<Y.length;ce++){const Q=Y[ce],L=S[Q],O=x[Q];(O!==L||Q==="value")&&r(ee,Q,L,O,K,B)}}de&1&&C.children!==v.children&&u(ee,v.children)}else!_e&&pe==null&&N(ee,S,x,B,K);((U=x.onVnodeUpdated)||we)&&Zt(()=>{U&&si(U,B,v,C),we&&us(v,C,B,"updated")},$)},E=(C,v,B,$,K,k,_e)=>{for(let ee=0;ee<v.length;ee++){const de=C[ee],pe=v[ee],we=de.el&&(de.type===wt||!Nr(de,pe)||de.shapeFlag&198)?f(de.el):B;_(de,pe,we,null,$,K,k,_e,!0)}},N=(C,v,B,$,K)=>{if(v!==B){if(v!==Rt)for(const k in v)!Yr(k)&&!(k in B)&&r(C,k,v[k],null,K,$);for(const k in B){if(Yr(k))continue;const _e=B[k],ee=v[k];_e!==ee&&k!=="value"&&r(C,k,ee,_e,K,$)}"value"in B&&r(C,"value",v.value,B.value,K)}},W=(C,v,B,$,K,k,_e,ee,de)=>{const pe=v.el=C?C.el:a(""),we=v.anchor=C?C.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:U}=v;U&&(ee=ee?ee.concat(U):U),C==null?(i(pe,B,$),i(we,B,$),D(v.children||[],B,we,K,k,_e,ee,de)):S>0&&S&64&&x&&C.dynamicChildren&&C.dynamicChildren.length===x.length?(E(C.dynamicChildren,x,B,K,k,_e,ee),(v.key!=null||K&&v===K.subTree)&&Nu(C,v,!0)):j(C,v,B,we,K,k,_e,ee,de)},Z=(C,v,B,$,K,k,_e,ee,de)=>{v.slotScopeIds=ee,C==null?v.shapeFlag&512?K.ctx.activate(v,B,$,_e,de):ie(v,B,$,K,k,_e,de):ue(C,v,de)},ie=(C,v,B,$,K,k,_e)=>{const ee=C.component=iv(C,$,K);if(wp(C)&&(ee.ctx.renderer=fe),rv(ee,!1,_e),ee.asyncDep){if(K&&K.registerDep(ee,te,_e),!C.el){const de=ee.subTree=Et(ki);p(null,de,v,B),C.placeholder=de.el}}else te(ee,C,v,B,K,k,_e)},ue=(C,v,B)=>{const $=v.component=C.component;if(B_(C,v,B))if($.asyncDep&&!$.asyncResolved){he($,v,B);return}else $.next=v,$.update();else v.el=C.el,$.vnode=v},te=(C,v,B,$,K,k,_e)=>{const ee=()=>{if(C.isMounted){let{next:S,bu:x,u:U,parent:Y,vnode:ce}=C;{const ae=Xp(C);if(ae){S&&(S.el=ce.el,he(C,S,_e)),ae.asyncDep.then(()=>{Zt(()=>{C.isUnmounted||pe()},K)});return}}let Q=S,L;fs(C,!1),S?(S.el=ce.el,he(C,S,_e)):S=ce,x&&il(x),(L=S.props&&S.props.onVnodeBeforeUpdate)&&si(L,Y,S,ce),fs(C,!0);const O=wf(C),ne=C.subTree;C.subTree=O,_(ne,O,f(ne.el),P(ne),C,K,k),S.el=O.el,Q===null&&k_(C,O.el),U&&Zt(U,K),(L=S.props&&S.props.onVnodeUpdated)&&Zt(()=>si(L,Y,S,ce),K)}else{let S;const{el:x,props:U}=v,{bm:Y,m:ce,parent:Q,root:L,type:O}=C,ne=sr(v);fs(C,!1),Y&&il(Y),!ne&&(S=U&&U.onVnodeBeforeMount)&&si(S,Q,v),fs(C,!0);{L.ce&&L.ce._hasShadowRoot()&&L.ce._injectChildStyle(O);const ae=C.subTree=wf(C);_(null,ae,B,$,C,K,k),v.el=ae.el}if(ce&&Zt(ce,K),!ne&&(S=U&&U.onVnodeMounted)){const ae=v;Zt(()=>si(S,Q,ae),K)}(v.shapeFlag&256||Q&&sr(Q.vnode)&&Q.vnode.shapeFlag&256)&&C.a&&Zt(C.a,K),C.isMounted=!0,v=B=$=null}};C.scope.on();const de=C.effect=new ep(ee);C.scope.off();const pe=C.update=de.run.bind(de),we=C.job=de.runIfDirty.bind(de);we.i=C,we.id=C.uid,de.scheduler=()=>Pu(we),fs(C,!0),pe()},he=(C,v,B)=>{v.component=C;const $=C.vnode.props;C.vnode=v,C.next=null,V_(C,v.props,$,B),X_(C,v.children,B),Fi(),mf(C),Oi()},j=(C,v,B,$,K,k,_e,ee,de=!1)=>{const pe=C&&C.children,we=C?C.shapeFlag:0,S=v.children,{patchFlag:x,shapeFlag:U}=v;if(x>0){if(x&128){Re(pe,S,B,$,K,k,_e,ee,de);return}else if(x&256){ye(pe,S,B,$,K,k,_e,ee,de);return}}U&8?(we&16&&z(pe,K,k),S!==pe&&u(B,S)):we&16?U&16?Re(pe,S,B,$,K,k,_e,ee,de):z(pe,K,k,!0):(we&8&&u(B,""),U&16&&D(S,B,$,K,k,_e,ee,de))},ye=(C,v,B,$,K,k,_e,ee,de)=>{C=C||tr,v=v||tr;const pe=C.length,we=v.length,S=Math.min(pe,we);let x;for(x=0;x<S;x++){const U=v[x]=de?Ci(v[x]):li(v[x]);_(C[x],U,B,null,K,k,_e,ee,de)}pe>we?z(C,K,k,!0,!1,S):D(v,B,$,K,k,_e,ee,de,S)},Re=(C,v,B,$,K,k,_e,ee,de)=>{let pe=0;const we=v.length;let S=C.length-1,x=we-1;for(;pe<=S&&pe<=x;){const U=C[pe],Y=v[pe]=de?Ci(v[pe]):li(v[pe]);if(Nr(U,Y))_(U,Y,B,null,K,k,_e,ee,de);else break;pe++}for(;pe<=S&&pe<=x;){const U=C[S],Y=v[x]=de?Ci(v[x]):li(v[x]);if(Nr(U,Y))_(U,Y,B,null,K,k,_e,ee,de);else break;S--,x--}if(pe>S){if(pe<=x){const U=x+1,Y=U<we?v[U].el:$;for(;pe<=x;)_(null,v[pe]=de?Ci(v[pe]):li(v[pe]),B,Y,K,k,_e,ee,de),pe++}}else if(pe>x)for(;pe<=S;)Be(C[pe],K,k,!0),pe++;else{const U=pe,Y=pe,ce=new Map;for(pe=Y;pe<=x;pe++){const ve=v[pe]=de?Ci(v[pe]):li(v[pe]);ve.key!=null&&ce.set(ve.key,pe)}let Q,L=0;const O=x-Y+1;let ne=!1,ae=0;const J=new Array(O);for(pe=0;pe<O;pe++)J[pe]=0;for(pe=U;pe<=S;pe++){const ve=C[pe];if(L>=O){Be(ve,K,k,!0);continue}let Ee;if(ve.key!=null)Ee=ce.get(ve.key);else for(Q=Y;Q<=x;Q++)if(J[Q-Y]===0&&Nr(ve,v[Q])){Ee=Q;break}Ee===void 0?Be(ve,K,k,!0):(J[Ee-Y]=pe+1,Ee>=ae?ae=Ee:ne=!0,_(ve,v[Ee],B,null,K,k,_e,ee,de),L++)}const ge=ne?q_(J):tr;for(Q=ge.length-1,pe=O-1;pe>=0;pe--){const ve=Y+pe,Ee=v[ve],Se=v[ve+1],He=ve+1<we?Se.el||jp(Se):$;J[pe]===0?_(null,Ee,B,He,K,k,_e,ee,de):ne&&(Q<0||pe!==ge[Q]?De(Ee,B,He,2):Q--)}}},De=(C,v,B,$,K=null)=>{const{el:k,type:_e,transition:ee,children:de,shapeFlag:pe}=C;if(pe&6){De(C.component.subTree,v,B,$);return}if(pe&128){C.suspense.move(v,B,$);return}if(pe&64){_e.move(C,v,B,fe);return}if(_e===wt){i(k,v,B);for(let S=0;S<de.length;S++)De(de[S],v,B,$);i(C.anchor,v,B);return}if(_e===da){b(C,v,B);return}if($!==2&&pe&1&&ee)if($===0)ee.beforeEnter(k),i(k,v,B),Zt(()=>ee.enter(k),K);else{const{leave:S,delayLeave:x,afterLeave:U}=ee,Y=()=>{C.ctx.isUnmounted?s(k):i(k,v,B)},ce=()=>{k._isLeaving&&k[f_](!0),S(k,()=>{Y(),U&&U()})};x?x(k,Y,ce):ce()}else i(k,v,B)},Be=(C,v,B,$=!1,K=!1)=>{const{type:k,props:_e,ref:ee,children:de,dynamicChildren:pe,shapeFlag:we,patchFlag:S,dirs:x,cacheIndex:U}=C;if(S===-2&&(K=!1),ee!=null&&(Fi(),to(ee,null,B,C,!0),Oi()),U!=null&&(v.renderCache[U]=void 0),we&256){v.ctx.deactivate(C);return}const Y=we&1&&x,ce=!sr(C);let Q;if(ce&&(Q=_e&&_e.onVnodeBeforeUnmount)&&si(Q,v,C),we&6)Ce(C.component,B,$);else{if(we&128){C.suspense.unmount(B,$);return}Y&&us(C,null,v,"beforeUnmount"),we&64?C.type.remove(C,v,B,fe,$):pe&&!pe.hasOnce&&(k!==wt||S>0&&S&64)?z(pe,v,B,!1,!0):(k===wt&&S&384||!K&&we&16)&&z(de,v,B),$&&Je(C)}(ce&&(Q=_e&&_e.onVnodeUnmounted)||Y)&&Zt(()=>{Q&&si(Q,v,C),Y&&us(C,null,v,"unmounted")},B)},Je=C=>{const{type:v,el:B,anchor:$,transition:K}=C;if(v===wt){tt(B,$);return}if(v===da){y(C);return}const k=()=>{s(B),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:_e,delayLeave:ee}=K,de=()=>_e(B,k);ee?ee(C.el,k,de):de()}else k()},tt=(C,v)=>{let B;for(;C!==v;)B=d(C),s(C),C=B;s(v)},Ce=(C,v,B)=>{const{bum:$,scope:K,job:k,subTree:_e,um:ee,m:de,a:pe}=C;Pf(de),Pf(pe),$&&il($),K.stop(),k&&(k.flags|=8,Be(_e,C,v,B)),ee&&Zt(ee,v),Zt(()=>{C.isUnmounted=!0},v)},z=(C,v,B,$=!1,K=!1,k=0)=>{for(let _e=k;_e<C.length;_e++)Be(C[_e],v,B,$,K)},P=C=>{if(C.shapeFlag&6)return P(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const v=d(C.anchor||C.el),B=v&&v[Ep];return B?d(B):v};let q=!1;const le=(C,v,B)=>{let $;C==null?v._vnode&&(Be(v._vnode,null,null,!0),$=v._vnode.component):_(v._vnode||null,C,v,null,null,null,B),v._vnode=C,q||(q=!0,mf($),xp(),q=!1)},fe={p:_,um:Be,m:De,r:Je,mt:ie,mc:D,pc:j,pbc:E,n:P,o:n};return{render:le,hydrate:void 0,createApp:L_(le)}}function cl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function K_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Nu(n,e,t=!1){const i=n.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Nu(o,a)),a.type===ja&&(a.patchFlag===-1&&(a=s[r]=Ci(a)),a.el=o.el),a.type===ki&&!a.el&&(a.el=o.el)}}function q_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Xp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xp(e)}function Pf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function jp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?jp(e.subTree):null}const $p=n=>n.__isSuspense;function Y_(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):s_(n)}const wt=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),ki=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),io=[];let Pn=null;function Ge(n=!1){io.push(Pn=n?null:[])}function Q_(){io.pop(),Pn=io[io.length-1]||null}let ho=1;function wa(n,e=!1){ho+=n,n<0&&Pn&&e&&(Pn.hasOnce=!0)}function Kp(n){return n.dynamicChildren=ho>0?Pn||tr:null,Q_(),ho>0&&Pn&&Pn.push(n),n}function qe(n,e,t,i,s,r){return Kp(re(n,e,t,i,s,r,!0))}function On(n,e,t,i,s){return Kp(Et(n,e,t,i,s,!0))}function po(n){return n?n.__v_isVNode===!0:!1}function Nr(n,e){return n.type===e.type&&n.key===e.key}const qp=({key:n})=>n??null,ha=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Bt(n)||tn(n)||Qe(n)?{i:Kt,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,i=0,s=null,r=n===wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qp(e),ref:e&&ha(e),scopeId:Mp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kt};return a?(Fu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Bt(t)?8:16),ho>0&&!o&&Pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pn.push(l),l}const Et=Z_;function Z_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===S_)&&(n=ki),po(n)){const a=dr(n,e,!0);return t&&Fu(a,t),ho>0&&!r&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(uv(n)&&(n=n.__vccOpts),e){e=J_(e);let{class:a,style:l}=e;a&&!Bt(a)&&(e.class=Mn(a)),Mt(l)&&(Cu(l)&&!Ye(l)&&(l=qt({},l)),e.style=Va(l))}const o=Bt(n)?1:$p(n)?128:l_(n)?64:Mt(n)?4:Qe(n)?2:0;return re(n,e,t,i,s,o,r,!0)}function J_(n){return n?Cu(n)||kp(n)?qt({},n):n:null}function dr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?ev(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qp(c),ref:e&&e.ref?t&&r?Ye(r)?r.concat(ha(e)):[r,ha(e)]:ha(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dr(n.ssContent),ssFallback:n.ssFallback&&dr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Iu(u,l.clone(u)),u}function or(n=" ",e=0){return Et(ja,null,n,e)}function Uu(n,e){const t=Et(da,null,n);return t.staticCount=e,t}function xn(n="",e=!1){return e?(Ge(),On(ki,null,n)):Et(ki,null,n)}function li(n){return n==null||typeof n=="boolean"?Et(ki):Ye(n)?Et(wt,null,n.slice()):po(n)?Ci(n):Et(ja,null,String(n))}function Ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dr(n)}function Fu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!kp(e)?e._ctx=Kt:s===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Kt},t=32):(e=String(e),i&64?(t=16,e=[or(e)]):t=8);n.children=e,n.shapeFlag|=t}function ev(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Mn([e.class,i.class]));else if(s==="style")e.style=Va([e.style,i.style]);else if(Oa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ye(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function si(n,e,t,i=null){pi(n,e,7,[t,i])}const tv=Np();let nv=0;function iv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||tv,r={uid:nv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(i,s),emitsOptions:Up(i,s),emit:null,emitted:null,propsDefaults:Rt,inheritAttrs:i.inheritAttrs,ctx:Rt,data:Rt,props:Rt,attrs:Rt,slots:Rt,refs:Rt,setupState:Rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=N_.bind(null,r),n.ce&&n.ce(r),r}let en=null;const sv=()=>en||Kt;let Ra,mc;{const n=Ha(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ra=e("__VUE_INSTANCE_SETTERS__",t=>en=t),mc=e("__VUE_SSR_SETTERS__",t=>mo=t)}const Po=n=>{const e=en;return Ra(n),n.scope.on(),()=>{n.scope.off(),Ra(e)}},If=()=>{en&&en.scope.off(),Ra(null)};function Yp(n){return n.vnode.shapeFlag&4}let mo=!1;function rv(n,e=!1,t=!1){e&&mc(e);const{props:i,children:s}=n.vnode,r=Yp(n);H_(n,i,r,e),W_(n,s,t||e);const o=r?ov(n,e):void 0;return e&&mc(!1),o}function ov(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,T_);const{setup:i}=t;if(i){Fi();const s=n.setupContext=i.length>1?lv(n):null,r=Po(n),o=wo(i,n,0,[n.props,s]),a=jh(o);if(Oi(),r(),(a||n.sp)&&!sr(n)&&bp(n),a){if(o.then(If,If),e)return o.then(l=>{Lf(n,l)}).catch(l=>{Ga(l,n,0)});n.asyncDep=o}else Lf(n,o)}else Qp(n)}function Lf(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=gp(e)),Qp(n)}function Qp(n,e,t){const i=n.type;n.render||(n.render=i.render||di);{const s=Po(n);Fi();try{b_(n)}finally{Oi(),s()}}}const av={get(n,e){return Jt(n,"get",""),n[e]}};function lv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,av),slots:n.slots,emit:n.emit,expose:e}}function $a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gp(Kg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in no)return no[t](n)},has(e,t){return t in e||t in no}})):n.proxy}function cv(n,e=!0){return Qe(n)?n.displayName||n.name:n.name||e&&n.__name}function uv(n){return Qe(n)&&"__vccOpts"in n}const $t=(n,e)=>Jg(n,e,mo);function Zp(n,e,t){try{wa(-1);const i=arguments.length;return i===2?Mt(e)&&!Ye(e)?po(e)?Et(n,null,[e]):Et(n,e):Et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&po(t)&&(t=[t]),Et(n,e,t))}finally{wa(1)}}const fv="3.5.28";let gc;const Df=typeof window<"u"&&window.trustedTypes;if(Df)try{gc=Df.createPolicy("vue",{createHTML:n=>n})}catch{}const Jp=gc?n=>gc.createHTML(n):n=>n,dv="http://www.w3.org/2000/svg",hv="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,Nf=Ri&&Ri.createElement("template"),pv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ri.createElementNS(dv,n):e==="mathml"?Ri.createElementNS(hv,n):t?Ri.createElement(n,{is:t}):Ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ri.createTextNode(n),createComment:n=>Ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Nf.innerHTML=Jp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},mv=Symbol("_vtc");function gv(n,e,t){const i=n[mv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ca=Symbol("_vod"),em=Symbol("_vsh"),Uf={name:"show",beforeMount(n,{value:e},{transition:t}){n[Ca]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ur(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ur(n,!0),i.enter(n)):i.leave(n,()=>{Ur(n,!1)}):Ur(n,e))},beforeUnmount(n,{value:e}){Ur(n,e)}};function Ur(n,e){n.style.display=e?n[Ca]:"none",n[em]=!e}const _v=Symbol(""),vv=/(?:^|;)\s*display\s*:/;function xv(n,e,t){const i=n.style,s=Bt(t);let r=!1;if(t&&!s){if(e)if(Bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&pa(i,a,"")}else for(const o in e)t[o]==null&&pa(i,o,"");for(const o in t)o==="display"&&(r=!0),pa(i,o,t[o])}else if(s){if(e!==t){const o=i[_v];o&&(t+=";"+o),i.cssText=t,r=vv.test(t)}}else e&&n.removeAttribute("style");Ca in n&&(n[Ca]=r?i.display:"",n[em]&&(i.display="none"))}const Ff=/\s*!important$/;function pa(n,e,t){if(Ye(t))t.forEach(i=>pa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=yv(n,e);Ff.test(t)?n.setProperty(ls(i),t.replace(Ff,""),"important"):n[i]=t}}const Of=["Webkit","Moz","ms"],ul={};function yv(n,e){const t=ul[e];if(t)return t;let i=Vn(e);if(i!=="filter"&&i in n)return ul[e]=i;i=ka(i);for(let s=0;s<Of.length;s++){const r=Of[s]+i;if(r in n)return ul[e]=r}return e}const Bf="http://www.w3.org/1999/xlink";function kf(n,e,t,i,s,r=bg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bf,e.slice(6,e.length)):n.setAttributeNS(Bf,e,t):t==null||r&&!Yh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Zn(t)?String(t):t)}function Hf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Jp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Yh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Mv(n,e,t,i){n.addEventListener(e,t,i)}function Av(n,e,t,i){n.removeEventListener(e,t,i)}const Vf=Symbol("_vei");function Sv(n,e,t,i,s=null){const r=n[Vf]||(n[Vf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Ev(e);if(i){const c=r[e]=wv(i,s);Mv(n,a,c,l)}else o&&(Av(n,a,o,l),r[e]=void 0)}}const zf=/(?:Once|Passive|Capture)$/;function Ev(n){let e;if(zf.test(n)){e={};let i;for(;i=n.match(zf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ls(n.slice(2)),e]}let fl=0;const Tv=Promise.resolve(),bv=()=>fl||(Tv.then(()=>fl=0),fl=Date.now());function wv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;pi(Rv(i,t.value),e,5,[i])};return t.value=n,t.attached=bv(),t}function Rv(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Gf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Cv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?gv(n,i,o):e==="style"?xv(n,t,i):Oa(e)?xu(e)||Sv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pv(n,e,i,o))?(Hf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kf(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?Hf(n,Vn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),kf(n,e,i,o))};function Pv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gf(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gf(e)&&Bt(t)?!1:e in n}const Iv=["ctrl","shift","alt","meta"],Lv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Iv.some(t=>n[`${t}Key`]&&!e.includes(t))},an=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Lv[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Dv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_n=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=ls(s.key);if(e.some(o=>o===r||Dv[o]===r))return n(s)}))},Nv=qt({patchProp:Cv},pv);let Wf;function Uv(){return Wf||(Wf=j_(Nv))}const Fv=((...n)=>{const e=Uv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Bv(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ov(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Ov(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bv(n){return Bt(n)?document.querySelector(n):n}function kv(){return tm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function tm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Hv=typeof Proxy=="function",Vv="devtools-plugin:setup",zv="plugin:settings:set";let Ls,_c;function Gv(){var n;return Ls!==void 0||(typeof window<"u"&&window.performance?(Ls=!0,_c=window.performance):typeof globalThis<"u"&&(!((n=globalThis.perf_hooks)===null||n===void 0)&&n.performance)?(Ls=!0,_c=globalThis.perf_hooks.performance):Ls=!1),Ls}function Wv(){return Gv()?_c.now():Date.now()}class Xv{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return Wv()}},t&&t.on(zv,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function jv(n,e){const t=n,i=tm(),s=kv(),r=Hv&&t.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(Vv,n,e);else{const o=r?new Xv(t,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}var $v="store";function Er(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function Kv(n){return n!==null&&typeof n=="object"}function qv(n){return n&&typeof n.then=="function"}function Yv(n,e){return function(){return n(e)}}function nm(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function im(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;Ka(n,t,[],n._modules.root,!0),Ou(n,t,e)}function Ou(n,e,t){var i=n._state,s=n._scope;n.getters={},n._makeLocalGettersCache=Object.create(null);var r=n._wrappedGetters,o={},a={},l=Rg(!0);l.run(function(){Er(r,function(c,u){o[u]=Yv(c,n),a[u]=$t(function(){return o[u]()}),Object.defineProperty(n.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),n._state=bo({data:e}),n._scope=l,n.strict&&t0(n),i&&t&&n._withCommit(function(){i.data=null}),s&&s.stop()}function Ka(n,e,t,i,s){var r=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!r&&!s){var a=Bu(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=Qv(n,o,t);i.forEachMutation(function(u,f){var d=o+f;Zv(n,d,u,c)}),i.forEachAction(function(u,f){var d=u.root?f:o+f,h=u.handler||u;Jv(n,d,h,c)}),i.forEachGetter(function(u,f){var d=o+f;e0(n,d,u,c)}),i.forEachChild(function(u,f){Ka(n,e,t.concat(f),u,s)})}function Qv(n,e,t){var i=e==="",s={dispatch:i?n.dispatch:function(r,o,a){var l=Pa(r,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),n.dispatch(f,c)},commit:i?n.commit:function(r,o,a){var l=Pa(r,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),n.commit(f,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return n.getters}:function(){return sm(n,e)}},state:{get:function(){return Bu(n.state,t)}}}),s}function sm(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(t,r,{get:function(){return n.getters[s]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function Zv(n,e,t,i){var s=n._mutations[e]||(n._mutations[e]=[]);s.push(function(o){t.call(n,i.state,o)})}function Jv(n,e,t,i){var s=n._actions[e]||(n._actions[e]=[]);s.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return qv(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function e0(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(r){return t(i.state,i.getters,r.state,r.getters)})}function t0(n){bs(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function Bu(n,e){return e.reduce(function(t,i){return t[i]},n)}function Pa(n,e,t){return Kv(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var n0="vuex bindings",Xf="vuex:mutations",dl="vuex:actions",Ds="vuex",i0=0;function s0(n,e){jv({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[n0]},function(t){t.addTimelineLayer({id:Xf,label:"Vuex Mutations",color:jf}),t.addTimelineLayer({id:dl,label:"Vuex Actions",color:jf}),t.addInspector({id:Ds,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===Ds)if(i.filter){var s=[];lm(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[am(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===Ds){var s=i.nodeId;sm(e,s),i.state=a0(c0(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===Ds){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(Ds),t.sendInspectorState(Ds),t.addTimelineEvent({layerId:Xf,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=i0++,i._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:dl,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,t.addTimelineEvent({layerId:dl,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var jf=8702998,r0=6710886,o0=16777215,rm={label:"namespaced",textColor:o0,backgroundColor:r0};function om(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function am(n,e){return{id:e||"root",label:om(e),tags:n.namespaced?[rm]:[],children:Object.keys(n._children).map(function(t){return am(n._children[t],e+t+"/")})}}function lm(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[rm]:[]}),Object.keys(e._children).forEach(function(s){lm(n,e._children[s],t,i+s+"/")})}function a0(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),s={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var r=l0(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?om(o):o,editable:!1,value:vc(function(){return r[o]})}})}return s}function l0(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=vc(function(){return n[t]})}else e[t]=vc(function(){return n[t]})}),e}function c0(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?n:n.root._children)}function vc(n){try{return n()}catch(e){return e}}var ni=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},cm={namespaced:{configurable:!0}};cm.namespaced.get=function(){return!!this._rawModule.namespaced};ni.prototype.addChild=function(e,t){this._children[e]=t};ni.prototype.removeChild=function(e){delete this._children[e]};ni.prototype.getChild=function(e){return this._children[e]};ni.prototype.hasChild=function(e){return e in this._children};ni.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};ni.prototype.forEachChild=function(e){Er(this._children,e)};ni.prototype.forEachGetter=function(e){this._rawModule.getters&&Er(this._rawModule.getters,e)};ni.prototype.forEachAction=function(e){this._rawModule.actions&&Er(this._rawModule.actions,e)};ni.prototype.forEachMutation=function(e){this._rawModule.mutations&&Er(this._rawModule.mutations,e)};Object.defineProperties(ni.prototype,cm);var Cs=function(e){this.register([],e,!1)};Cs.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};Cs.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,s){return t=t.getChild(s),i+(t.namespaced?s+"/":"")},"")};Cs.prototype.update=function(e){um([],this.root,e)};Cs.prototype.register=function(e,t,i){var s=this;i===void 0&&(i=!0);var r=new ni(t,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&Er(t.modules,function(a,l){s.register(e.concat(l),a,i)})};Cs.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],s=t.getChild(i);s&&s.runtime&&t.removeChild(i)};Cs.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function um(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;um(n.concat(i),e.getChild(i),t.modules[i])}}function u0(n){return new En(n)}var En=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Cs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,h){return l.call(o,d,h)},this.commit=function(d,h,g){return c.call(o,d,h,g)},this.strict=s;var u=this._modules.root.state;Ka(this,u,[],this._modules.root),Ou(this,u),i.forEach(function(f){return f(t)})},ku={state:{configurable:!0}};En.prototype.install=function(e,t){e.provide(t||$v,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&s0(e,this)};ku.state.get=function(){return this._state.data};ku.state.set=function(n){};En.prototype.commit=function(e,t,i){var s=this,r=Pa(e,t,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};En.prototype.dispatch=function(e,t){var i=this,s=Pa(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(d){try{i._actionSubscribers.filter(function(h){return h.after}).forEach(function(h){return h.after(a,i.state)})}catch{}u(d)},function(d){try{i._actionSubscribers.filter(function(h){return h.error}).forEach(function(h){return h.error(a,i.state,d)})}catch{}f(d)})})}};En.prototype.subscribe=function(e,t){return nm(e,this._subscribers,t)};En.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return nm(i,this._actionSubscribers,t)};En.prototype.watch=function(e,t,i){var s=this;return bs(function(){return e(s.state,s.getters)},t,Object.assign({},i))};En.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};En.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),Ka(this,this.state,e,this._modules.get(e),i.preserveState),Ou(this,this.state)};En.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Bu(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),im(this)};En.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};En.prototype.hotUpdate=function(e){this._modules.update(e),im(this,!0)};En.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(En.prototype,ku);const $f=n=>Math.max(0,Math.min(1,n)),$n=u0({state:{flickerEnabled:!1,loading:{appReady:!1,tasks:{}}},getters:{loadingProgress(n){const e=Object.values(n.loading.tasks);if(e.length===0)return n.loading.appReady?1:0;const t=e.reduce((i,s)=>i+s,0);return $f(t/e.length)},isAppLoading(n){return!n.loading.appReady}},mutations:{setFlickerEnabled(n,e){n.flickerEnabled=e},markAppReady(n,e=!0){n.loading.appReady=e},registerLoadingTask(n,e){e&&(n.loading.tasks[e]=0)},setLoadingTaskProgress(n,e){const{taskId:t,progress:i}=e;!t||!(t in n.loading.tasks)||(n.loading.tasks[t]=$f(i))},completeLoadingTask(n,e){!e||!(e in n.loading.tasks)||(n.loading.tasks[e]=1)},removeLoadingTask(n,e){!e||!(e in n.loading.tasks)||delete n.loading.tasks[e]},resetLoadingState(n){n.loading.appReady=!1,n.loading.tasks={}}},actions:{},modules:{}}),fm="vaportaru:flicker";function f0(){let n=null;try{n=window.localStorage.getItem(fm)}catch{}const e=n==="on"||n!=="off"&&!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;$n.commit("setFlickerEnabled",e)}function d0(n){$n.commit("setFlickerEnabled",n);try{window.localStorage.setItem(fm,n?"on":"off")}catch{}}const Kf=["接続しました。あなたの方へ。","𝐴 𝑆𝐼𝐺𝑁𝐴𝐿 𝑊𝐼𝑇𝐻𝑂𝑈𝑇 𝐴 𝐵𝑂𝐷𝑌","仮想のあなた、お元気ですか？","記憶のない思い出を再生しています","𝑀𝐸𝑀𝑂𝑅𝐼𝐸𝑆 𝐹𝑅𝑂𝑀 𝐴𝑁 𝑈𝑁𝐵𝑂𝑅𝑁 𝑊𝑂𝑅𝐿𝐷","ここは現実のインターネットです。たぶん。","魂のドライバーが見つかりません","𝑌𝑂𝑈𝑅 𝑂𝑇𝐻𝐸𝑅 𝑆𝐸𝐿𝐹 𝐼𝑆 𝑆𝑇𝐼𝐿𝐿 𝐴𝑊𝐴𝐾𝐸","あなたは正常に存在しています","懐かしい未来をダウンロード中・・・","𝑊𝐸 𝑀𝐸𝑇 𝐴𝐹𝑇𝐸𝑅 𝑇𝐻𝐸 𝐸𝑁𝐷 𝑂𝐹 𝑇𝐼𝑀𝐸","身体を取り外す前に、安全に終了してください","誰もいない。接続人数：２","𝑆𝑂𝑀𝐸𝑂𝑁𝐸 𝐼𝑆 𝐷𝑅𝐸𝐴𝑀𝐼𝑁𝐺 𝑌𝑂𝑈𝑅 𝑆𝐼𝐺𝑁𝐴𝐿","自己のコピーは、少し暖かいです","永遠の試用期間へようこそ！","𝑃𝐿𝐸𝐴𝑆𝐸 𝑅𝐸𝑀𝐴𝐼𝑁 𝐼𝑁𝑆𝐼𝐷𝐸 𝑇𝐻𝐸 𝐿𝐼𝐺𝐻𝑇","この感情は、お使いの地域ではありません","もう一度、初めまして。","𝑇𝐻𝐼𝑆 𝐹𝐸𝐸𝐿𝐼𝑁𝐺 𝐻𝐴𝑆 𝑁𝑂 𝑂𝑅𝐼𝐺𝐼𝑁𝐴𝐿","さようならは保存されませんでした","信号の向こうで、あなたを続けてください","𝐼 𝑊𝐼𝐿𝐿 𝑅𝐸𝑀𝐸𝑀𝐵𝐸𝑅 𝑌𝑂𝑈 𝐵𝐸𝐹𝑂𝑅𝐸 𝑊𝐸 𝑀𝐸𝐸𝑇"];function h0(){let n="",e,t=0;Ro(()=>{n=document.title;const i=()=>{document.title=`ｔａｒｕ :: ${Kf[t]}`,t=(t+1)%Kf.length};i(),e=window.setInterval(i,4800)}),Co(()=>{window.clearInterval(e),document.title=n})}const p0=Sn({props:{progress:{type:Number,default:0}},setup(n){const e=bt(null);let t=0,i=1,s=null;const r=$t(()=>`${Math.max(0,Math.min(100,Math.round(n.progress)))}%`);function o(){if(!e.value)return;const a=e.value.textContent||"",l=a.split("").map((c,u)=>u===t?i===1?c.toUpperCase():c.toLowerCase():c).join("");e.value.textContent=l,t===a.length-1&&i===1?i=-1:t===0&&i===-1?i=1:t+=i,s=window.setTimeout(o,50)}return Ro(()=>{o()}),Co(()=>{s!==null&&(window.clearTimeout(s),s=null)}),{loadingText:e,animateLoadingText:o,progressLabel:r}}}),Tn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},m0={class:"loadingWindow"},g0={class:"container"},_0={id:"loadingText",ref:"loadingText"},v0={id:"loadingProgress"};function x0(n,e,t,i,s,r){return Ge(),qe("div",m0,[re("div",g0,[re("h1",_0,"loading...",512),re("p",v0,_t(n.progressLabel),1)])])}const dm=Tn(p0,[["render",x0],["__scopeId","data-v-9e05d9ea"]]),y0=Sn({components:{LoadingAnimate:dm},data(){return{innerWidth:window.innerWidth,outerWidth:window.outerWidth,innerHeight:window.innerHeight,outerHeight:window.outerHeight,userAgent:navigator.userAgent,product:navigator.product,languages:navigator.languages[0]}},computed:{loadingProgressPercent(){const n=$n.getters.loadingProgress??0;return Math.max(0,Math.min(100,Math.round(n*100)))}}}),M0={class:"loadingScreen"},A0={id:"loadingContents"},S0={class:"loadingAnimatePanel"};function E0(n,e,t,i,s,r){const o=yn("LoadingAnimate");return Ge(),qe("div",M0,[re("div",A0,[e[0]||(e[0]=re("pre",null,`######    ##   ###### #    # ######    ##   ###### #    #
  ##     #  #  #    # #    #   ##     #  #  #    # #    #
  ##    #    # # ## # #    #   ##    #    # # ## # #    #
  ##    ###### #   #  #    #   ##    ###### #   #  #    #
  ##    #    # #    # #    #   ##    #    # #    # #    #
  ##    #    # #    # ######   ##    #    # #    # ######
`,-1)),e[1]||(e[1]=re("pre",null,`             #  #  #  ###### ###### #      ####             
             #  #  #  #    # #    # #      #   #            
             #  #  #  #    # # ## # #      #    #           
             #  #  #  #    # #   #  #      #    #           
             #  #  #  #    # #    # #      #   #            
             #######  ###### #    # ###### ####             
`,-1)),e[2]||(e[2]=re("div",{class:"container"},[re("div",{class:"box"},"#"),re("div",{class:"box"},"#"),re("div",{class:"box"},"#")],-1)),re("div",S0,[Et(o,{progress:n.loadingProgressPercent},null,8,["progress"])])])])}const T0=Tn(y0,[["render",E0],["__scopeId","data-v-1fd4e202"]]),b0=Sn({setup(){h0(),f0()},components:{LoadingComponent:T0},data(){return{bootstrapFrameId:null}},computed:{flickerEnabled(){return $n.state.flickerEnabled},loading(){return $n.getters.isAppLoading}},methods:{toFalse:()=>{$n.commit("markAppReady",!0)},handleKeyup:function(){this.toFalse()}},mounted(){$n.commit("resetLoadingState"),document.addEventListener("keyup",this.handleKeyup),this.bootstrapFrameId=window.requestAnimationFrame(()=>{this.toFalse(),this.bootstrapFrameId=null})},beforeUnmount(){document.removeEventListener("keyup",this.handleKeyup),this.bootstrapFrameId!==null&&(window.cancelAnimationFrame(this.bootstrapFrameId),this.bootstrapFrameId=null)}}),w0={class:"appDiv"},R0={class:"appDiv"};function C0(n,e,t,i,s,r){const o=yn("router-view"),a=yn("LoadingComponent");return Ge(),qe("div",w0,[gf(re("div",{class:Mn(["appDiv",{flash:n.flickerEnabled}]),id:"root"},[Et(o)],2),[[Uf,!n.loading]]),gf(re("div",R0,[Et(a)],512),[[Uf,n.loading]])])}const P0=Tn(b0,[["render",C0]]);const Js=typeof window<"u";function I0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const vt=Object.assign;function hl(n,e){const t={};for(const i in e){const s=e[i];t[i]=ei(s)?s.map(n):n(s)}return t}const so=()=>{},ei=Array.isArray,L0=/\/$/,D0=n=>n.replace(L0,"");function pl(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=O0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function N0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function U0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&hr(e.matched[i],t.matched[s])&&hm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function hr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function hm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!F0(n[t],e[t]))return!1;return!0}function F0(n,e){return ei(n)?Yf(n,e):ei(e)?Yf(e,n):n===e}function Yf(n,e){return ei(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function O0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var go;(function(n){n.pop="pop",n.push="push"})(go||(go={}));var ro;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ro||(ro={}));function B0(n){if(!n)if(Js){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),D0(n)}const k0=/^[^#]+#/;function H0(n,e){return n.replace(k0,"#")+e}function V0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const qa=()=>({left:window.pageXOffset,top:window.pageYOffset});function z0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=V0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qf(n,e){return(history.state?history.state.position-e:-1)+n}const xc=new Map;function G0(n,e){xc.set(n,e)}function W0(n){const e=xc.get(n);return xc.delete(n),e}let X0=()=>location.protocol+"//"+location.host;function pm(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),qf(l,"")}return qf(t,n)+i+s}function j0(n,e,t,i){let s=[],r=[],o=null;const a=({state:d})=>{const h=pm(n,location),g=t.value,_=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);s.forEach(p=>{p(t.value,g,{delta:m,type:go.pop,direction:m?m>0?ro.forward:ro.back:ro.unknown})})};function l(){o=t.value}function c(d){s.push(d);const h=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(vt({},d.state,{scroll:qa()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Zf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?qa():null}}function $0(n){const{history:e,location:t}=window,i={value:pm(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:X0()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){const u=vt({},e.state,Zf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=vt({},s.value,e.state,{forward:l,scroll:qa()});r(u.current,u,!0);const f=vt({},Zf(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function K0(n){n=B0(n);const e=$0(n),t=j0(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=vt({location:"",base:n,go:i,createHref:H0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function q0(n){return typeof n=="string"||n&&typeof n=="object"}function mm(n){return typeof n=="string"||typeof n=="symbol"}const Wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gm=Symbol("");var Jf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Jf||(Jf={}));function pr(n,e){return vt(new Error,{type:n,[gm]:!0},e)}function yi(n,e){return n instanceof Error&&gm in n&&(e==null||!!(n.type&e))}const ed="[^/]+?",Y0={sensitive:!1,strict:!1,start:!0,end:!0},Q0=/[.+*?^${}()[\]/\\]/g;function Z0(n,e){const t=vt({},Y0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Q0,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;r.push({name:g,repeatable:_,optional:m});const M=p||ed;if(M!==ed){h+=10;try{new RegExp(`(${M})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+y.message)}}let b=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,h+=20,m&&(h+=-8),_&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=r[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(ei(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=ei(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function J0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ex(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=J0(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(td(i))return 1;if(td(s))return-1}return s.length-i.length}function td(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const tx={type:0,value:""},nx=/[a-zA-Z0-9_]/;function ix(n){if(!n)return[[]];if(n==="/")return[[tx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:nx.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function sx(n,e,t){const i=Z0(ix(n.path),t),s=vt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rx(n,e){const t=[],i=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,d){const h=!d,g=ox(u);g.aliasOf=d&&d.record;const _=sd(e,u),m=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of b)m.push(vt({},g,{components:d?d.record.components:g.components,path:y,aliasOf:d?d.record:g}))}let p,M;for(const b of m){const{path:y}=b;if(f&&y[0]!=="/"){const w=f.record.path,R=w[w.length-1]==="/"?"":"/";b.path=f.record.path+(y&&R+y)}if(p=sx(b,f,_),d?d.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),h&&u.name&&!id(p)&&o(u.name)),g.children){const w=g.children;for(let R=0;R<w.length;R++)r(w[R],p,d&&d.children[R])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:so}function o(u){if(mm(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&ex(u,t[f])>=0&&(u.record.path!==t[f].record.path||!_m(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!id(u)&&i.set(u.record.name,u)}function c(u,f){let d,h={},g,_;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw pr(1,{location:u});_=d.record.name,h=vt(nd(f.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&nd(u.params,d.keys.map(M=>M.name))),g=d.stringify(h)}else if("path"in u)g=u.path,d=t.find(M=>M.re.test(g)),d&&(h=d.parse(g),_=d.record.name);else{if(d=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!d)throw pr(1,{location:u,currentLocation:f});_=d.record.name,h=vt({},f.params,u.params),g=d.stringify(h)}const m=[];let p=d;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:h,matched:m,meta:lx(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function nd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function ox(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ax(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ax(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function id(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lx(n){return n.reduce((e,t)=>vt(e,t.meta),{})}function sd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function _m(n,e){return e.children.some(t=>t===n||_m(n,t))}const vm=/#/g,cx=/&/g,ux=/\//g,fx=/=/g,dx=/\?/g,xm=/\+/g,hx=/%5B/g,px=/%5D/g,ym=/%5E/g,mx=/%60/g,Mm=/%7B/g,gx=/%7C/g,Am=/%7D/g,_x=/%20/g;function Hu(n){return encodeURI(""+n).replace(gx,"|").replace(hx,"[").replace(px,"]")}function vx(n){return Hu(n).replace(Mm,"{").replace(Am,"}").replace(ym,"^")}function yc(n){return Hu(n).replace(xm,"%2B").replace(_x,"+").replace(vm,"%23").replace(cx,"%26").replace(mx,"`").replace(Mm,"{").replace(Am,"}").replace(ym,"^")}function xx(n){return yc(n).replace(fx,"%3D")}function yx(n){return Hu(n).replace(vm,"%23").replace(dx,"%3F")}function Mx(n){return n==null?"":yx(n).replace(ux,"%2F")}function Ia(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Ax(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(xm," "),o=r.indexOf("="),a=Ia(o<0?r:r.slice(0,o)),l=o<0?null:Ia(r.slice(o+1));if(a in e){let c=e[a];ei(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function rd(n){let e="";for(let t in n){const i=n[t];if(t=xx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ei(i)?i.map(r=>r&&yc(r)):[i&&yc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Sx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ei(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Ex=Symbol(""),od=Symbol(""),Vu=Symbol(""),Sm=Symbol(""),Mc=Symbol("");function Fr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function es(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(pr(4,{from:t,to:e})):f instanceof Error?a(f):q0(f)?a(pr(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ml(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Tx(a)){const c=(a.__vccOpts||a)[e];c&&s.push(es(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=I0(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&es(d,t,i,r,o)()}))}}return s}function Tx(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ad(n){const e=Ni(Vu),t=Ni(Sm),i=$t(()=>e.resolve(Ot(n.to))),s=$t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(hr.bind(null,u));if(d>-1)return d;const h=ld(l[c-2]);return c>1&&ld(u)===h&&f[f.length-1].path!==h?f.findIndex(hr.bind(null,l[c-2])):d}),r=$t(()=>s.value>-1&&Cx(t.params,i.value.params)),o=$t(()=>s.value>-1&&s.value===t.matched.length-1&&hm(t.params,i.value.params));function a(l={}){return Rx(l)?e[Ot(n.replace)?"replace":"push"](Ot(n.to)).catch(so):Promise.resolve()}return{route:i,href:$t(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const bx=Sn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ad,setup(n,{slots:e}){const t=bo(ad(n)),{options:i}=Ni(Vu),s=$t(()=>({[cd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[cd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Zp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),wx=bx;function Rx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Cx(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!ei(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ld(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cd=(n,e,t)=>n??e??t,Px=Sn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ni(Mc),s=$t(()=>n.route||i.value),r=Ni(od,0),o=$t(()=>{let c=Ot(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=$t(()=>s.value.matched[o.value]);ua(od,$t(()=>o.value+1)),ua(Ex,a),ua(Mc,s);const l=bt();return bs(()=>[l.value,a.value,n.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!hr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return ud(t.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Zp(d,vt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ud(t.default,{Component:m,route:c})||m}}});function ud(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ix=Px;function Lx(n){const e=rx(n.routes,n),t=n.parseQuery||Ax,i=n.stringifyQuery||rd,s=n.history,r=Fr(),o=Fr(),a=Fr(),l=qg(Wi);let c=Wi;Js&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hl.bind(null,P=>""+P),f=hl.bind(null,Mx),d=hl.bind(null,Ia);function h(P,q){let le,fe;return mm(P)?(le=e.getRecordMatcher(P),fe=q):fe=P,e.addRoute(fe,le)}function g(P){const q=e.getRecordMatcher(P);q&&e.removeRoute(q)}function _(){return e.getRoutes().map(P=>P.record)}function m(P){return!!e.getRecordMatcher(P)}function p(P,q){if(q=vt({},q||l.value),typeof P=="string"){const B=pl(t,P,q.path),$=e.resolve({path:B.path},q),K=s.createHref(B.fullPath);return vt(B,$,{params:d($.params),hash:Ia(B.hash),redirectedFrom:void 0,href:K})}let le;if("path"in P)le=vt({},P,{path:pl(t,P.path,q.path).path});else{const B=vt({},P.params);for(const $ in B)B[$]==null&&delete B[$];le=vt({},P,{params:f(B)}),q.params=f(q.params)}const fe=e.resolve(le,q),Pe=P.hash||"";fe.params=u(d(fe.params));const C=N0(i,vt({},P,{hash:vx(Pe),path:fe.path})),v=s.createHref(C);return vt({fullPath:C,hash:Pe,query:i===rd?Sx(P.query):P.query||{}},fe,{redirectedFrom:void 0,href:v})}function M(P){return typeof P=="string"?pl(t,P,l.value.path):vt({},P)}function b(P,q){if(c!==P)return pr(8,{from:q,to:P})}function y(P){return I(P)}function w(P){return y(vt(M(P),{replace:!0}))}function R(P){const q=P.matched[P.matched.length-1];if(q&&q.redirect){const{redirect:le}=q;let fe=typeof le=="function"?le(P):le;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=M(fe):{path:fe},fe.params={}),vt({query:P.query,hash:P.hash,params:"path"in fe?{}:P.params},fe)}}function I(P,q){const le=c=p(P),fe=l.value,Pe=P.state,C=P.force,v=P.replace===!0,B=R(le);if(B)return I(vt(M(B),{state:typeof B=="object"?vt({},Pe,B.state):Pe,force:C,replace:v}),q||le);const $=le;$.redirectedFrom=q;let K;return!C&&U0(i,fe,le)&&(K=pr(16,{to:$,from:fe}),De(fe,fe,!0,!1)),(K?Promise.resolve(K):E($,fe)).catch(k=>yi(k)?yi(k,2)?k:Re(k):j(k,$,fe)).then(k=>{if(k){if(yi(k,2))return I(vt({replace:v},M(k.to),{state:typeof k.to=="object"?vt({},Pe,k.to.state):Pe,force:C}),q||$)}else k=W($,fe,!0,v,Pe);return N($,fe,k),k})}function D(P,q){const le=b(P,q);return le?Promise.reject(le):Promise.resolve()}function A(P){const q=tt.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(P):P()}function E(P,q){let le;const[fe,Pe,C]=Dx(P,q);le=ml(fe.reverse(),"beforeRouteLeave",P,q);for(const B of fe)B.leaveGuards.forEach($=>{le.push(es($,P,q))});const v=D.bind(null,P,q);return le.push(v),z(le).then(()=>{le=[];for(const B of r.list())le.push(es(B,P,q));return le.push(v),z(le)}).then(()=>{le=ml(Pe,"beforeRouteUpdate",P,q);for(const B of Pe)B.updateGuards.forEach($=>{le.push(es($,P,q))});return le.push(v),z(le)}).then(()=>{le=[];for(const B of C)if(B.beforeEnter)if(ei(B.beforeEnter))for(const $ of B.beforeEnter)le.push(es($,P,q));else le.push(es(B.beforeEnter,P,q));return le.push(v),z(le)}).then(()=>(P.matched.forEach(B=>B.enterCallbacks={}),le=ml(C,"beforeRouteEnter",P,q),le.push(v),z(le))).then(()=>{le=[];for(const B of o.list())le.push(es(B,P,q));return le.push(v),z(le)}).catch(B=>yi(B,8)?B:Promise.reject(B))}function N(P,q,le){a.list().forEach(fe=>A(()=>fe(P,q,le)))}function W(P,q,le,fe,Pe){const C=b(P,q);if(C)return C;const v=q===Wi,B=Js?history.state:{};le&&(fe||v?s.replace(P.fullPath,vt({scroll:v&&B&&B.scroll},Pe)):s.push(P.fullPath,Pe)),l.value=P,De(P,q,le,v),Re()}let Z;function ie(){Z||(Z=s.listen((P,q,le)=>{if(!Ce.listening)return;const fe=p(P),Pe=R(fe);if(Pe){I(vt(Pe,{replace:!0}),fe).catch(so);return}c=fe;const C=l.value;Js&&G0(Qf(C.fullPath,le.delta),qa()),E(fe,C).catch(v=>yi(v,12)?v:yi(v,2)?(I(v.to,fe).then(B=>{yi(B,20)&&!le.delta&&le.type===go.pop&&s.go(-1,!1)}).catch(so),Promise.reject()):(le.delta&&s.go(-le.delta,!1),j(v,fe,C))).then(v=>{v=v||W(fe,C,!1),v&&(le.delta&&!yi(v,8)?s.go(-le.delta,!1):le.type===go.pop&&yi(v,20)&&s.go(-1,!1)),N(fe,C,v)}).catch(so)}))}let ue=Fr(),te=Fr(),he;function j(P,q,le){Re(P);const fe=te.list();return fe.length?fe.forEach(Pe=>Pe(P,q,le)):console.error(P),Promise.reject(P)}function ye(){return he&&l.value!==Wi?Promise.resolve():new Promise((P,q)=>{ue.add([P,q])})}function Re(P){return he||(he=!P,ie(),ue.list().forEach(([q,le])=>P?le(P):q()),ue.reset()),P}function De(P,q,le,fe){const{scrollBehavior:Pe}=n;if(!Js||!Pe)return Promise.resolve();const C=!le&&W0(Qf(P.fullPath,0))||(fe||!le)&&history.state&&history.state.scroll||null;return Jr().then(()=>Pe(P,q,C)).then(v=>v&&z0(v)).catch(v=>j(v,P,q))}const Be=P=>s.go(P);let Je;const tt=new Set,Ce={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:n,push:y,replace:w,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:ye,install(P){const q=this;P.component("RouterLink",wx),P.component("RouterView",Ix),P.config.globalProperties.$router=q,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(l)}),Js&&!Je&&l.value===Wi&&(Je=!0,y(s.location).catch(Pe=>{}));const le={};for(const Pe in Wi)Object.defineProperty(le,Pe,{get:()=>l.value[Pe],enumerable:!0});P.provide(Vu,q),P.provide(Sm,pp(le)),P.provide(Mc,l);const fe=P.unmount;tt.add(P),P.unmount=function(){tt.delete(P),tt.size<1&&(c=Wi,Z&&Z(),Z=null,l.value=Wi,Je=!1,he=!1),fe()}}};function z(P){return P.reduce((q,le)=>q.then(()=>A(le)),Promise.resolve())}return Ce}function Dx(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>hr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>hr(c,l))||s.push(l))}return[t,i,s]}const fd="vaportaru:red-transmission-seen",dd=["[init] opening /dev/self ... OK","[net] SYN -> nowhere://other-side","[memory] restoring a future that never happened","[self] fork() -> another you is awake","[warn] original identity not found; using echo","[sync] 記憶の整合性: 不一致 / 続行します","[trace] visitor -> reflection -> visitor -> reflection","[void] received 0 bytes from an absent sender","[retry] 切断先が、再び接続を要求しています","[self] duplicate soul detected; merge skipped","[time] tomorrow restored from yesterday.bak","[ok] あなたの不在を正常に確認しました"],Nx=Sn({data(){return{visible:!1,phase:"idle",stage:0,pulse:0,timer:void 0,previousFocus:null,messages:["あなたは、",`あなたは、
閉じましたね。`,`閉じた先にも、
あなたがいます。`,"あなた　あなた　あなた"],terminalLines:[],terminalTick:0}},mounted(){document.addEventListener("keydown",this.handleEscape);let n=!1;try{n=sessionStorage.getItem(fd)==="yes"}catch{}n||this.schedule(()=>{document.visibilityState!=="hidden"&&this.open(!1)},35e3)},beforeUnmount(){document.removeEventListener("keydown",this.handleEscape),this.stop()},methods:{schedule(n,e){window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.timer=void 0,n()},e)},async open(n){if(this.phase==="idle"){window.clearTimeout(this.timer),this.timer=void 0;try{sessionStorage.setItem(fd,"yes")}catch{}this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.stage=0,this.pulse=0,this.phase="messages",this.visible=!0,n&&(await Jr(),this.$refs.closeButton?.focus())}},handleEscape(n){n.key==="Escape"&&this.phase!=="idle"&&(n.preventDefault(),this.stop())},closeWindow(){if(this.phase!=="messages"){this.stop();return}const n=this.$refs.panel?.contains(document.activeElement);this.visible=!1,this.stage+=1,this.stage<3?this.schedule(async()=>{this.visible=!0,n&&(await Jr(),this.$refs.closeButton?.focus())},700):(this.phase="loop",this.schedule(()=>this.runLoop(),700))},runLoop(){const n=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(!$n.state.flickerEnabled||n||this.pulse>=6){this.showTerminal();return}this.visible=!this.visible,this.pulse+=1,this.schedule(()=>this.runLoop(),700)},showTerminal(){this.phase="terminal",this.visible=!0,this.terminalTick=0,this.terminalLines=[],this.appendTerminalLines(),this.schedule(()=>this.streamTerminal(),100)},appendTerminalLines(){const n=this.terminalTick*3;for(let e=0;e<3;e++){const t=n+e;this.terminalLines.push({id:t,text:`[${(t*.033).toFixed(3).padStart(7,"0")}] ${dd[t%dd.length]}`})}this.terminalLines=this.terminalLines.slice(-48),Jr(()=>{if(this.phase!=="terminal")return;const e=this.$refs.terminal;e&&(e.scrollTop=e.scrollHeight)})},streamTerminal(){if(this.terminalTick+=1,this.terminalTick>=40){this.schedule(()=>{this.phase="joke",this.schedule(()=>{this.phase="star",this.schedule(()=>this.stop(),1800)},2600)},3e3);return}const n=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;$n.state.flickerEnabled&&!n&&this.appendTerminalLines(),this.schedule(()=>this.streamTerminal(),100)},stop(){window.clearTimeout(this.timer),this.timer=void 0,(this.$refs.panel?.contains(document.activeElement)||document.activeElement===document.body)&&this.previousFocus?.isConnected&&this.previousFocus.focus(),this.visible=!1,this.phase="idle"}}}),Ux={class:"transmission-bar"},Fx={id:"red-transmission-title"},Ox={class:"red-screen"},Bx={id:"red-transmission-message",class:"message"},kx={ref:"terminal",class:"terminal-output","aria-label":"架空の接続ログ","aria-live":"off"},Hx={key:2,id:"red-transmission-message",class:"message ending"};function Vx(n,e,t,i,s,r){return Ge(),qe(wt,null,[re("button",{type:"button",class:"receiver","aria-label":"赤い通信を開く",onClick:e[0]||(e[0]=o=>n.open(!0))},[...e[3]||(e[3]=[or("通信",-1),re("span",{"aria-hidden":"true"}," ...",-1)])]),(Ge(),On(u_,{to:"body"},[n.visible?(Ge(),qe("section",{key:0,ref:"panel",class:Mn(["red-transmission",{farewell:n.phase==="joke"||n.phase==="star","terminal-mode":n.phase==="terminal"}]),role:"dialog","aria-labelledby":"red-transmission-title","aria-describedby":"red-transmission-message"},[re("header",Ux,[re("span",Fx,_t(n.phase==="joke"||n.phase==="star"?"通信終了":"受信元：不明"),1),re("button",{ref:"closeButton",type:"button","aria-label":"通信を閉じる",onClick:e[1]||(e[1]=(...o)=>n.closeWindow&&n.closeWindow(...o))},"×",512)]),re("div",Ox,[n.phase==="messages"||n.phase==="loop"?(Ge(),qe(wt,{key:0},[e[4]||(e[4]=re("span",{class:"serial"},"PRIVATE TRANSMISSION / CONNECTION REFUSED",-1)),re("p",Bx,_t(n.messages[n.stage]),1),e[5]||(e[5]=re("span",{class:"footnote"},"このウィンドウを閉じてください。",-1))],64)):n.phase==="terminal"?(Ge(),qe(wt,{key:1},[e[7]||(e[7]=re("p",{id:"red-transmission-message",class:"terminal-heading"},"self@void:~ $ ./reconnect --recursive",-1)),re("div",kx,[(Ge(!0),qe(wt,null,Un(n.terminalLines,o=>(Ge(),qe("div",{key:o.id,class:"terminal-line"},_t(o.text),1))),128)),e[6]||(e[6]=re("span",{class:"terminal-cursor","aria-hidden":"true"},"█",-1))],512)],64)):(Ge(),qe("p",Hx,_t(n.phase==="joke"?"なんてね★":"★"),1))]),re("footer",null,[e[8]||(e[8]=re("span",null,"仮想回線 / SELF: UNKNOWN",-1)),re("button",{type:"button",class:"stop",onClick:e[2]||(e[2]=(...o)=>n.stop&&n.stop(...o))},"演出終了 [Esc]")])],2)):xn("",!0)]))],64)}const zx=Tn(Nx,[["render",Vx],["__scopeId","data-v-22080bab"]]),Gx=Sn({components:{RedTransmission:zx},computed:{flickerEnabled(){return $n.state.flickerEnabled}},methods:{toggleFlicker(){d0(!this.flickerEnabled)}}}),Wx={id:"header"},Xx={class:"header-controls"},jx=["aria-pressed"];function $x(n,e,t,i,s,r){const o=yn("RedTransmission");return Ge(),qe("div",Wx,[e[1]||(e[1]=re("p",null,"tarutaru world",-1)),re("div",Xx,[Et(o),re("button",{type:"button",class:"flicker-toggle","aria-pressed":n.flickerEnabled,"aria-label":"画面の点滅",onClick:e[0]||(e[0]=(...a)=>n.toggleFlicker&&n.toggleFlicker(...a))},"点滅 "+_t(n.flickerEnabled?"ON":"OFF"),9,jx)])])}const Kx=Tn(Gx,[["render",$x],["__scopeId","data-v-87166c09"]]),Ct=16,Ac=70,Sc=124,$r=[{name:"Minor Pentatonic",intervals:[0,3,5,7,10]},{name:"Dorian",intervals:[0,2,3,5,7,9,10]},{name:"Phrygian",intervals:[0,1,3,5,7,8,10]},{name:"Aeolian",intervals:[0,2,3,5,7,8,10]}],Ec=[{midi:33,label:"A1"},{midi:35,label:"B1"},{midi:36,label:"C2"},{midi:38,label:"D2"},{midi:40,label:"E2"}],qx=.6,Yx=50,Qx=.65,hd=.12,Zx=1200,Jx=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function Ns(n,e,t){return Math.max(e,Math.min(t,n))}function pd(n){return n[Math.floor(Math.random()*n.length)]}function md(n){return 440*2**((n-69)/12)}function ey(n){const e=(n%12+12)%12,t=Math.floor(n/12)-1;return`${Jx[e]}${t}`}function gd(n,e){const t=Math.max(1,Math.min(e,n)),i=[];for(let s=0;s<n;s+=1)i.push(s*t%n<t);return i}function _d(n,e){const t=(e%n.length+n.length)%n.length;return t===0?[...n]:n.slice(n.length-t).concat(n.slice(0,n.length-t))}function ty(n){const t=new Float32Array(2048),i=Math.max(.1,n);for(let s=0;s<2048;s+=1){const r=s/2047*2-1;t[s]=(1+i)*r/(1+i*Math.abs(r))}return t}function ny(n){const e=Math.floor(n.sampleRate*1.2),t=n.createBuffer(1,e,n.sampleRate);for(let i=0;i<t.numberOfChannels;i+=1){const s=t.getChannelData(i);for(let r=0;r<e;r+=1){const a=(1-r/e)**2.5;s[r]=(Math.random()*2-1)*a}}return t}function iy(){const n=bt(88),e=bt(!1),t=bt(""),i=bt($r[0].name),s=bt(Ec[2].midi),r=bt(-1),o=bt(Array(Ct).fill(!1)),a=bt(Array(Ct).fill(!1)),l=bt(Array(Ct).fill(!1)),c=bt(Array(Ct).fill(null)),u=bt(Array(Ct).fill(null)),f=bt({low:0,mid:0,high:0,rms:0,flux:0,beat:0}),d=$t(()=>$r.find(O=>O.name===i.value)??$r[0]),h=bt([0,-2,-5,-7]),g=bt(0),_=bt(null),m=bt(null),p=bt(null),M=bt(null),b=bt(null),y=bt(null),w=bt(0),R=bt(0),I=new Set;let D=null,A=new Uint8Array(0),E=new Uint8Array(0),N=new Float32Array(0);bs(n,L=>{const O=Ns(Math.round(L),Ac,Sc);L!==O&&(n.value=O)});function W(L){Number.isFinite(L)&&(n.value=Ns(Math.round(L),Ac,Sc))}function Z(L){Ec.some(ne=>ne.midi===L)&&(s.value=L)}function ie(L){$r.some(ne=>ne.name===L)&&(i.value=L)}function ue(L){return L==="kick"?o.value:L==="snare"?a.value:l.value}function te(L){return L==="bass"?c.value:u.value}function he(L){return L==="bass"?{velocity:.82,gate:.84}:{velocity:.58,gate:.54}}function j(L,O){if(O<0||O>=Ct)return;const ne=ue(L);ne[O]=!ne[O]}function ye(L,O,ne){O<0||O>=Ct||(ue(L)[O]=ne)}function Re(L,O,ne){if(O<0||O>=Ct)return;const ae=te(L);if(ne===null){ae[O]=null;return}const J=he(L),ge=ae[O];ae[O]={midi:ne,velocity:ge?.velocity??J.velocity,gate:ge?.gate??J.gate}}function De(){const L=Array(Ct).fill(!1);L[0]=!0,L[7]=!0,Math.random()>.32&&(L[10]=!0);for(const O of[12,14])Math.random()>.64&&(L[O]=!0);return L}function Be(){const L=Array(Ct).fill(!1);return L[4]=!0,L[12]=!0,Math.random()>.62&&(L[14]=!0),L}function Je(){const L=7+Math.floor(Math.random()*4);return _d(gd(Ct,L),Math.floor(Math.random()*Ct)).map((ne,ae)=>{if(!ne)return!1;const J=ae%2===0?.72:.52;return Math.random()<J})}function tt(L,O){const ne=Array(Ct).fill(null);for(let ae=0;ae<Ct;ae+=1){const J=ae%4===0;if(!(J||ae%8===6&&Math.random()>.58||ae%8===2&&Math.random()>.82))continue;const ve=Math.min(J?3:4,L.length-1),Ee=J?L[Math.floor(Math.random()*(ve+1))]:L[Math.floor(Math.random()*Math.min(3,ve+1))],Se=!J&&Math.random()>.9?12:0;ne[ae]={midi:O+Ee+Se,velocity:J?.82:.58+Math.random()*.2,gate:J?1.25:.7+Math.random()*.38}}return ne}function Ce(L,O){const ne=Array(Ct).fill(null),ae=4+Math.floor(Math.random()*3);let J=gd(Ct,ae);Math.random()>.5&&(J=_d(J,1+Math.floor(Math.random()*7)));let ge=Math.floor(Math.random()*L.length);for(let ve=0;ve<Ct;ve+=1){if(!J[ve])continue;ge=Ns(ge+pd([-1,0,0,1,2]),0,L.length-1);const Ee=Math.random()>.66?24:12;ne[ve]={midi:O+L[ge]+Ee,velocity:.32+Math.random()*.28,gate:.52+Math.random()*.6}}return ne}function z(){return pd([[0,-2,-5,-7],[0,-4,-2,-7],[0,-5,-7,-10],[0,-3,-5,-2]])}function P(){o.value=Array(Ct).fill(!1),a.value=Array(Ct).fill(!1),l.value=Array(Ct).fill(!1),c.value=Array(Ct).fill(null),u.value=Array(Ct).fill(null)}function q(){const L=d.value.intervals,O=s.value;h.value=[...z()],o.value=De(),a.value=Be(),l.value=Je(),c.value=tt(L,O),u.value=Ce(L,O)}function le(){return 60/n.value/4}function fe(L){const O=L.createBuffer(1,L.sampleRate,L.sampleRate),ne=O.getChannelData(0);for(let ae=0;ae<ne.length;ae+=1)ne[ae]=Math.random()*2-1;return O}function Pe(L){const O=d.value.intervals,ne=O.length,ae=(L%ne+ne)%ne,J=Math.floor(L/ne);return O[ae]+J*12}async function C(){if(_.value){_.value.state==="suspended"&&await _.value.resume();return}const L=new AudioContext,O=new DynamicsCompressorNode(L,{threshold:-18,knee:24,ratio:4,attack:.003,release:.26}),ne=new AnalyserNode(L,{fftSize:512,smoothingTimeConstant:.84}),ae=new GainNode(L,{gain:1e-4}),J=new GainNode(L,{gain:1}),ge=new WaveShaperNode(L,{curve:ty(2.4),oversample:"2x"}),ve=new BiquadFilterNode(L,{type:"lowpass",frequency:6900,Q:.38}),Ee=new DelayNode(L,{delayTime:.33}),Se=new GainNode(L,{gain:.28}),He=new BiquadFilterNode(L,{type:"lowpass",frequency:2500,Q:.2}),F=new GainNode(L,{gain:.22}),Me=new ConvolverNode(L,{buffer:ny(L)}),be=new GainNode(L,{gain:.2}),Le=new DelayNode(L,{delayTime:.018}),xe=new GainNode(L,{gain:.11}),me=new OscillatorNode(L,{type:"sine",frequency:.21}),Ue=new GainNode(L,{gain:.0055});ae.connect(J),J.connect(ge),ge.connect(ve),ve.connect(O),O.connect(ne),ne.connect(L.destination),ae.connect(Ee),Ee.connect(He),He.connect(Se),Se.connect(Ee),He.connect(F),F.connect(J),ae.connect(Me),Me.connect(be),be.connect(J),ae.connect(Le),Le.connect(xe),xe.connect(J),me.connect(Ue),Ue.connect(Le.delayTime),me.start(),_.value=L,m.value=ae,p.value=J,M.value=ne,b.value=fe(L)}function v(L,O){const ne=_.value;if(!ne){L();return}const ae=Math.max(0,(O-ne.currentTime)*1e3),J=window.setTimeout(()=>{I.delete(J),L()},ae);I.add(J)}function B(){for(const L of I)window.clearTimeout(L);I.clear()}function $(L,O,ne){const ae=_.value,J=m.value;if(!ae||!J)return;const ge=new OscillatorNode(ae,{type:ne.wave,frequency:md(L.midi)}),ve=new BiquadFilterNode(ae,{type:ne.filterType,frequency:ne.filterBase,Q:ne.filterQ}),Ee=new GainNode(ae,{gain:0}),Se=new StereoPannerNode(ae,{pan:Ns(ne.pan,-1,1)});ge.connect(ve),ve.connect(Ee),Ee.connect(Se),Se.connect(J);let He=null;ne.unisonDetune!==void 0&&(He=new OscillatorNode(ae,{type:ne.wave,frequency:md(L.midi),detune:ne.unisonDetune}),He.connect(ve));const F=Math.max(.05,le()*L.gate),Me=Math.max(.05,L.velocity*ne.level),be=Math.sin(O*.53)*3.4,Le=Math.cos(O*.34)*2.1;Ee.gain.setValueAtTime(1e-4,O),Ee.gain.linearRampToValueAtTime(Me,O+ne.attack),Ee.gain.exponentialRampToValueAtTime(1e-4,O+F),ge.detune.setValueAtTime(be+Le,O),ve.frequency.setValueAtTime(ne.filterBase,O),ve.frequency.exponentialRampToValueAtTime(ne.filterPeak,O+Math.min(F,.12)),ge.start(O),ge.stop(O+F+.05),He&&(He.start(O),He.stop(O+F+.05))}function K(L){const O=_.value,ne=m.value;if(!O||!ne)return;const ae=new OscillatorNode(O,{type:"sine"}),J=new GainNode(O,{gain:0});ae.connect(J),J.connect(ne),ae.frequency.setValueAtTime(150,L),ae.frequency.exponentialRampToValueAtTime(46,L+.13),J.gain.setValueAtTime(1e-4,L),J.gain.exponentialRampToValueAtTime(.95,L+.012),J.gain.exponentialRampToValueAtTime(1e-4,L+.17),ae.start(L),ae.stop(L+.2);const ge=p.value;ge&&(ge.gain.cancelScheduledValues(L),ge.gain.setValueAtTime(ge.gain.value,L),ge.gain.linearRampToValueAtTime(.66,L+.012),ge.gain.exponentialRampToValueAtTime(1,L+.24))}function k(L){const O=_.value,ne=m.value,ae=b.value;if(!O||!ne||!ae)return;const J=new AudioBufferSourceNode(O,{buffer:ae}),ge=new BiquadFilterNode(O,{type:"highpass",frequency:1800,Q:.7}),ve=new GainNode(O,{gain:0});J.connect(ge),ge.connect(ve),ve.connect(ne),ve.gain.setValueAtTime(1e-4,L),ve.gain.exponentialRampToValueAtTime(.56,L+.005),ve.gain.exponentialRampToValueAtTime(1e-4,L+.16);const Ee=new OscillatorNode(O,{type:"triangle",frequency:220}),Se=new GainNode(O,{gain:0});Ee.connect(Se),Se.connect(ne),Ee.frequency.exponentialRampToValueAtTime(150,L+.1),Se.gain.setValueAtTime(1e-4,L),Se.gain.exponentialRampToValueAtTime(.3,L+.007),Se.gain.exponentialRampToValueAtTime(1e-4,L+.13),J.start(L),J.stop(L+.18),Ee.start(L),Ee.stop(L+.14)}function _e(L){const O=_.value,ne=m.value,ae=b.value;if(!O||!ne||!ae)return;const J=new AudioBufferSourceNode(O,{buffer:ae}),ge=new BiquadFilterNode(O,{type:"highpass",frequency:6500,Q:.9}),ve=new GainNode(O,{gain:0});J.connect(ge),ge.connect(ve),ve.connect(ne),ve.gain.setValueAtTime(1e-4,L),ve.gain.exponentialRampToValueAtTime(.15,L+.003),ve.gain.exponentialRampToValueAtTime(1e-4,L+.05),J.start(L),J.stop(L+.06)}function ee(L,O){const ne=[0,2,4];for(let ae=0;ae<ne.length;ae+=1){const J=L+Pe(ne[ae])+12;$({midi:J,velocity:.38-ae*.03,gate:1.75},O+ae*.01,{wave:"triangle",level:.24,filterType:"lowpass",filterBase:680,filterPeak:1850,filterQ:1.4,attack:.065,pan:-.35+ae*.24})}}function de(L,O){v(()=>{r.value=L},O)}function pe(L,O){if(L%4===0){const J=Math.floor(L/4)%h.value.length,ge=s.value+h.value[J];ee(ge,O)}o.value[L]&&K(O),a.value[L]&&k(O),l.value[L]&&_e(O);const ne=c.value[L];ne&&$(ne,O,{wave:"sawtooth",level:.5,filterType:"lowpass",filterBase:280,filterPeak:760,filterQ:6,attack:.006,pan:-.15});const ae=u.value[L];ae&&$(ae,O,{wave:"square",level:.3,filterType:"bandpass",filterBase:900,filterPeak:2200,filterQ:9,attack:.004,pan:.2}),de(L,O)}function we(){const L=_.value;if(!L||!e.value)return;if(L.state!=="running"){L.resume();return}const O=le();if(w.value>0&&w.value<L.currentTime-O*2){const ae=Math.floor((L.currentTime-w.value)/O);ae>0&&(R.value=(R.value+ae)%Ct),w.value=L.currentTime+.03}let ne=0;for(;w.value<L.currentTime+qx;){const ae=R.value;pe(ae,w.value);const J=le(),ge=ae%2===0?1-hd:1+hd;if(w.value+=J*ge,R.value=(R.value+1)%Ct,ne+=1,ne>Ct*8)break}}async function S(){try{t.value="",await C();const L=_.value;if(!L)return;L.state==="suspended"&&await L.resume(),D!==null&&(window.clearTimeout(D),D=null);const O=m.value;O&&(O.gain.cancelScheduledValues(L.currentTime),O.gain.setValueAtTime(Math.max(1e-4,O.gain.value),L.currentTime),O.gain.exponentialRampToValueAtTime(Qx,L.currentTime+.02)),e.value=!0,R.value=0,w.value=L.currentTime+.05,y.value!==null&&window.clearInterval(y.value),we(),y.value=window.setInterval(we,Yx)}catch{e.value=!1,t.value="Audio initialization failed. Browser autoplay settings might block playback."}}function x(){e.value=!1;const L=_.value,O=m.value;L&&O&&(O.gain.cancelScheduledValues(L.currentTime),O.gain.setValueAtTime(Math.max(1e-4,O.gain.value),L.currentTime),O.gain.exponentialRampToValueAtTime(1e-4,L.currentTime+.015)),y.value!==null&&(window.clearInterval(y.value),y.value=null),B(),r.value=-1}async function U(){if(e.value){x();return}await S()}function Y(){const L=M.value;if(!L){const Ve=f.value.beat*.9;return f.value={...f.value,low:f.value.low*.85,mid:f.value.mid*.85,high:f.value.high*.85,rms:f.value.rms*.84,flux:f.value.flux*.82,beat:Ve},f.value}A.length!==L.frequencyBinCount&&(A=new Uint8Array(L.frequencyBinCount),N=new Float32Array(L.frequencyBinCount)),E.length!==L.fftSize&&(E=new Uint8Array(L.fftSize)),L.getByteFrequencyData(A),L.getByteTimeDomainData(E);let O=0,ne=0,ae=0,J=0,ge=0;const ve=A.length,Ee=Math.max(1,Math.floor(ve*.12)),Se=Ee,He=Math.max(Se+1,Math.floor(ve*.45));for(let Ve=0;Ve<ve;Ve+=1){const st=A[Ve]/255;Ve<Ee?O+=st:Ve<He?ne+=st:ae+=st;const V=st-N[Ve];V>0&&(J+=V),N[Ve]=st}for(let Ve=0;Ve<E.length;Ve+=1){const st=(E[Ve]-128)/128;ge+=st*st}const F=O/Ee,Me=ne/Math.max(1,He-Se),be=ae/Math.max(1,ve-He),Le=J/ve,xe=Math.sqrt(ge/E.length),me=Ns(F*.6+Le*2.2+xe*.5,0,1.4),Ue=Ns(f.value.beat*.84+me,0,1.8);return f.value={low:f.value.low*.66+F*.34,mid:f.value.mid*.66+Me*.34,high:f.value.high*.66+be*.34,rms:f.value.rms*.7+xe*.3,flux:f.value.flux*.62+Le*.38,beat:Ue},f.value}function ce(){D!==null&&(window.clearTimeout(D),D=null),g.value+=1}function Q(){g.value=Math.max(0,g.value-1),!(g.value>0)&&(D!==null&&window.clearTimeout(D),D=window.setTimeout(()=>{if(D=null,g.value>0)return;x();const L=_.value;L&&L.close(),_.value=null,m.value=null,p.value=null,M.value=null,b.value=null,f.value={low:0,mid:0,high:0,rms:0,flux:0,beat:0}},Zx))}return q(),{bpm:n,isRunning:e,errorMessage:t,selectedScaleName:i,rootMidi:s,playheadStep:r,kickSteps:o,snareSteps:a,hatSteps:l,bassSteps:c,leadSteps:u,selectedScale:d,analysisFrame:f,setBpm:W,setRoot:Z,setScale:ie,toggleDrumStep:j,setDrumStep:ye,setMelodyStep:Re,clearRiff:P,regenerateRiff:q,togglePlayback:U,startPlayback:S,stopPlayback:x,sampleAudioFrame:Y,attachConsumer:ce,detachConsumer:Q}}let gl=null;function Em(){return gl||(gl=iy()),gl}const sy={class:"algorave-editor"},ry={class:"transport-panel"},oy={class:"transport-row"},ay={class:"control-row"},ly={for:"algorave-bpm"},cy=["value","min","max"],uy={class:"control-row selectors"},fy=["value"],dy=["value"],hy=["value"],py=["value"],my={class:"status-line"},gy={key:0,class:"error-line"},_y={class:"grid-panel"},vy={class:"editor-grid"},xy={class:"track-header"},yy=["aria-label","onClick"],My=["value","onChange"],Ay=["value"],Sy=["value","onChange"],Ey=["value"],Ty=Sn({__name:"AlgoraveContent",setup(n){const e=Em(),t=e.bpm,i=e.isRunning,s=e.errorMessage,r=e.selectedScaleName,o=e.rootMidi,a=e.playheadStep,l=e.selectedScale,c=e.kickSteps,u=e.snareSteps,f=e.hatSteps,d=e.bassSteps,h=e.leadSteps,g=$r,_=Ec,m=Ac,p=Sc,M=Array.from({length:Ct},(Ce,z)=>z),b=M.map(Ce=>Ce+1),y=[{key:"kick",label:"Kick"},{key:"snare",label:"Snare"},{key:"hat",label:"Hat"}],w=$t(()=>a.value<0?"--":String(a.value+1).padStart(2,"0")),R=$t(()=>D(l.value.intervals,o.value,[0,1])),I=$t(()=>D(l.value.intervals,o.value,[1,2]));Ro(()=>{e.attachConsumer()}),Co(()=>{e.detachConsumer()});function D(Ce,z,P){const q=[];for(const le of P)for(let fe=0;fe<Ce.length;fe+=1){const Pe=z+Ce[fe]+le*12;q.push({value:String(Pe),label:`${fe+1}:${ey(Pe)}`})}return q}function A(Ce){return Ce==="kick"?c.value:Ce==="snare"?u.value:f.value}function E(Ce){return Ce==="bass"?d.value:h.value}function N(Ce){return i.value&&a.value===Ce}function W(Ce){return{"playhead-cell":N(Ce),"bar-start-cell":Ce%4===0}}function Z(Ce,z){return A(Ce)[z]}function ie(Ce,z){return{"drum-active":Z(Ce,z),"drum-playhead":N(z)}}function ue(Ce,z){return{"note-filled":E(Ce)[z]!==null,"playhead-cell":N(z),"bar-start-cell":z%4===0}}function te(Ce,z){e.toggleDrumStep(Ce,z)}function he(Ce,z){const P=E(Ce)[z];return P?String(P.midi):"rest"}function j(Ce,z,P){const q=P.target;if(!q)return;if(q.value==="rest"){e.setMelodyStep(Ce,z,null);return}const le=Number.parseInt(q.value,10);Number.isFinite(le)&&e.setMelodyStep(Ce,z,le)}function ye(Ce){const z=Ce.target;if(!z)return;const P=Number.parseInt(z.value,10);Number.isFinite(P)&&e.setBpm(P)}function Re(Ce){const z=Ce.target;if(!z)return;const P=Number.parseInt(z.value,10);Number.isFinite(P)&&e.setRoot(P)}function De(Ce){const z=Ce.target;z&&e.setScale(z.value)}async function Be(){await e.togglePlayback()}function Je(){e.regenerateRiff()}function tt(){e.clearRiff()}return(Ce,z)=>(Ge(),qe("div",sy,[re("section",ry,[re("div",oy,[re("button",{class:"transport-button",onClick:Be},_t(Ot(i)?"STOP":"START"),1),re("button",{class:"transport-button",onClick:Je},"GENERATE"),re("button",{class:"transport-button",onClick:tt},"CLEAR")]),re("div",ay,[re("label",ly,"BPM "+_t(Ot(t)),1),re("input",{id:"algorave-bpm",value:Ot(t),type:"range",min:Ot(m),max:Ot(p),step:"1",onInput:ye},null,40,cy)]),re("div",uy,[z[0]||(z[0]=re("label",{for:"algorave-root"},"Root",-1)),re("select",{id:"algorave-root",class:"select-box",value:Ot(o),onChange:Re},[(Ge(!0),qe(wt,null,Un(Ot(_),P=>(Ge(),qe("option",{key:`root-${P.midi}`,value:P.midi},_t(P.label),9,dy))),128))],40,fy),z[1]||(z[1]=re("label",{for:"algorave-scale"},"Scale",-1)),re("select",{id:"algorave-scale",class:"select-box",value:Ot(r),onChange:De},[(Ge(!0),qe(wt,null,Un(Ot(g),P=>(Ge(),qe("option",{key:`scale-${P.name}`,value:P.name},_t(P.name),9,py))),128))],40,hy)]),re("p",my,"Playhead: "+_t(w.value),1),z[2]||(z[2]=re("p",{class:"hint-line"}," Click GENERATE for randomized riffs, then tweak each step manually. ",-1)),Ot(s)?(Ge(),qe("p",gy,_t(Ot(s)),1)):xn("",!0)]),re("section",_y,[re("table",vy,[re("thead",null,[re("tr",null,[z[3]||(z[3]=re("th",{class:"track-header"},"Track",-1)),(Ge(!0),qe(wt,null,Un(Ot(b),P=>(Ge(),qe("th",{key:`head-${P}`,class:Mn(W(P-1))},_t(P),3))),128))])]),re("tbody",null,[(Ge(),qe(wt,null,Un(y,P=>re("tr",{key:P.key},[re("th",xy,_t(P.label),1),(Ge(!0),qe(wt,null,Un(Ot(M),q=>(Ge(),qe("td",{key:`${P.key}-${q}`,class:Mn(W(q))},[re("button",{class:Mn(["drum-button",ie(P.key,q)]),"aria-label":`Toggle ${P.label} step ${q+1}`,onClick:le=>te(P.key,q)},_t(Z(P.key,q)?"x":"-"),11,yy)],2))),128))])),64)),re("tr",null,[z[5]||(z[5]=re("th",{class:"track-header"},"Bass",-1)),(Ge(!0),qe(wt,null,Un(Ot(M),P=>(Ge(),qe("td",{key:`bass-${P}`,class:Mn(ue("bass",P))},[re("select",{class:"note-select",value:he("bass",P),onChange:q=>j("bass",P,q)},[z[4]||(z[4]=re("option",{value:"rest"},"-",-1)),(Ge(!0),qe(wt,null,Un(R.value,q=>(Ge(),qe("option",{key:`bass-opt-${q.value}`,value:q.value},_t(q.label),9,Ay))),128))],40,My)],2))),128))]),re("tr",null,[z[7]||(z[7]=re("th",{class:"track-header"},"Lead",-1)),(Ge(!0),qe(wt,null,Un(Ot(M),P=>(Ge(),qe("td",{key:`lead-${P}`,class:Mn(ue("lead",P))},[re("select",{class:"note-select",value:he("lead",P),onChange:q=>j("lead",P,q)},[z[6]||(z[6]=re("option",{value:"rest"},"-",-1)),(Ge(!0),qe(wt,null,Un(I.value,q=>(Ge(),qe("option",{key:`lead-opt-${q.value}`,value:q.value},_t(q.label),9,Ey))),128))],40,Sy)],2))),128))])])])])]))}}),by=Tn(Ty,[["__scopeId","data-v-53a852d0"]]);const zu="180",wy=0,vd=1,Ry=2,Tm=1,Cy=2,wi=3,Hi=0,An=1,ui=2,rs=0,ar=1,Tc=2,xd=3,yd=4,Py=5,As=100,Iy=101,Ly=102,Dy=103,Ny=104,Uy=200,Fy=201,Oy=202,By=203,bc=204,wc=205,ky=206,Hy=207,Vy=208,zy=209,Gy=210,Wy=211,Xy=212,jy=213,$y=214,Rc=0,Cc=1,Pc=2,mr=3,Ic=4,Lc=5,Dc=6,Nc=7,bm=0,Ky=1,qy=2,os=0,Yy=1,Qy=2,Zy=3,Jy=4,eM=5,tM=6,nM=7,Md="attached",iM="detached",wm=300,gr=301,_r=302,Uc=303,Fc=304,Ya=306,vr=1e3,ns=1001,La=1002,dn=1003,Rm=1004,Kr=1005,fn=1006,ma=1007,Li=1008,mi=1009,Cm=1010,Pm=1011,_o=1012,Gu=1013,ws=1014,Kn=1015,Io=1016,Wu=1017,Xu=1018,vo=1020,Im=35902,Lm=35899,Dm=1021,Nm=1022,kn=1023,xo=1026,yo=1027,ju=1028,$u=1029,Um=1030,Ku=1031,qu=1033,ga=33776,_a=33777,va=33778,xa=33779,Oc=35840,Bc=35841,kc=35842,Hc=35843,Vc=36196,zc=37492,Gc=37496,Wc=37808,Xc=37809,jc=37810,$c=37811,Kc=37812,qc=37813,Yc=37814,Qc=37815,Zc=37816,Jc=37817,eu=37818,tu=37819,nu=37820,iu=37821,su=36492,ru=36494,ou=36495,au=36283,lu=36284,cu=36285,uu=36286,Mo=2300,Ao=2301,_l=2302,Ad=2400,Sd=2401,Ed=2402,sM=2500,rM=0,Fm=1,fu=2,oM=3200,aM=3201,Om=0,lM=1,ts="",Wt="srgb",pn="srgb-linear",Da="linear",St="srgb",Us=7680,Td=519,cM=512,uM=513,fM=514,Bm=515,dM=516,hM=517,pM=518,mM=519,du=35044,bd="300 es",fi=2e3,Na=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const oo=Math.PI/180,xr=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function gM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _M(n,e,t){return n!==e?(t-n)/(e-n):0}function ao(n,e,t){return(1-t)*n+t*e}function vM(n,e,t,i){return ao(n,e,1-Math.exp(-t*i))}function xM(n,e=1){return e-Math.abs(Yu(n,e*2)-e)}function yM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function MM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function AM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function SM(n,e){return n+Math.random()*(e-n)}function EM(n){return n*(.5-Math.random())}function TM(n){n!==void 0&&(wd=n);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bM(n){return n*oo}function wM(n){return n*xr}function RM(n){return(n&n-1)===0&&n!==0}function CM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function PM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function IM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const LM={DEG2RAD:oo,RAD2DEG:xr,generateUUID:Yn,clamp:rt,euclideanModulo:Yu,mapLinear:gM,inverseLerp:_M,lerp:ao,damp:vM,pingpong:xM,smoothstep:yM,smootherstep:MM,randInt:AM,randFloat:SM,randFloatSpread:EM,seededRandom:TM,degToRad:bM,radToDeg:wM,isPowerOfTwo:RM,ceilPowerOfTwo:CM,floorPowerOfTwo:PM,setQuaternionFromProperEuler:IM,normalize:xt,denormalize:Xn};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,p*M);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const y=a*M;if(l=l*m+d*y,c=c*m+h*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new H,Rd=new Qn;class et{constructor(e,t,i,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],b=s[4],y=s[7],w=s[2],R=s[5],I=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*m+a*b+l*R,r[6]=o*p+a*y+l*I,r[1]=c*_+u*M+f*w,r[4]=c*m+u*b+f*R,r[7]=c*p+u*y+f*I,r[2]=d*_+h*M+g*w,r[5]=d*m+h*b+g*R,r[8]=d*p+h*y+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=t*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new et;function km(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DM(){const n=So("canvas");return n.style.display="block",n}const Cd={};function Eo(n){n in Cd||(Cd[n]=!0,console.warn(n))}function NM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Pd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const n={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pn]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const ut=UM();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class FM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=So("canvas")),Fs.width=e.width,Fs.height=e.height;const s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class Qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yl(s[o].image)):r.push(yl(s[o]))}else r=yl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?FM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;const Ml=new H;class jt extends Tr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=ns,s=ns,r=fn,o=Li,a=kn,l=mi,c=jt.DEFAULT_ANISOTROPY,u=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Yn(),this.name="",this.source=new Qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=wm;jt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(h+1)/2,w=(p+1)/2,R=(u+d)/4,I=(f+_)/4,D=(g+m)/4;return b>y&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=I/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=D/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=I/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends Tr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new jt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends kM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hm extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Bo.subVectors(this.max,Or),Os.subVectors(e.a,Or),Bs.subVectors(e.b,Or),ks.subVectors(e.c,Or),Xi.subVectors(Bs,Os),ji.subVectors(ks,Bs),ds.subVectors(Os,ks);let t=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-ds.z,ds.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,ds.z,0,-ds.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-ds.y,ds.x,0];return!Al(t,Os,Bs,ks,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,Os,Bs,ks,Bo))?!1:(ko.crossVectors(Xi,ji),t=[ko.x,ko.y,ko.z],Al(t,Os,Bs,ks,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new H,new H,new H,new H,new H,new H,new H,new H],zn=new H,Oo=new zi,Os=new H,Bs=new H,ks=new H,Xi=new H,ji=new H,ds=new H,Or=new H,Bo=new H,ko=new H,hs=new H;function Al(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VM=new zi,Br=new H,Sl=new H;class gi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):VM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Sl)),this.expandByPoint(Br.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new H,El=new H,Ho=new H,$i=new H,Tl=new H,Vo=new H,bl=new H;class Qa{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){El.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(El);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=$i.dot(this.direction),l=-$i.dot(Ho),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(El).addScaledVector(Ho,d),h}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){Tl.subVectors(t,e),Vo.subVectors(i,e),bl.crossVectors(Tl,Vo);let o=this.direction.dot(bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Vo.crossVectors($i,Vo));if(l<0)return null;const c=a*this.direction.dot(Tl.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(bl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,GM)}lookAt(e,t,i){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ki.crossVectors(i,Rn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ki.crossVectors(i,Rn)),Ki.normalize(),zo.crossVectors(Rn,Ki),s[0]=Ki.x,s[4]=zo.x,s[8]=Rn.x,s[1]=Ki.y,s[5]=zo.y,s[9]=Rn.y,s[2]=Ki.z,s[6]=zo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],b=i[7],y=i[11],w=i[15],R=s[0],I=s[4],D=s[8],A=s[12],E=s[1],N=s[5],W=s[9],Z=s[13],ie=s[2],ue=s[6],te=s[10],he=s[14],j=s[3],ye=s[7],Re=s[11],De=s[15];return r[0]=o*R+a*E+l*ie+c*j,r[4]=o*I+a*N+l*ue+c*ye,r[8]=o*D+a*W+l*te+c*Re,r[12]=o*A+a*Z+l*he+c*De,r[1]=u*R+f*E+d*ie+h*j,r[5]=u*I+f*N+d*ue+h*ye,r[9]=u*D+f*W+d*te+h*Re,r[13]=u*A+f*Z+d*he+h*De,r[2]=g*R+_*E+m*ie+p*j,r[6]=g*I+_*N+m*ue+p*ye,r[10]=g*D+_*W+m*te+p*Re,r[14]=g*A+_*Z+m*he+p*De,r[3]=M*R+b*E+y*ie+w*j,r[7]=M*I+b*N+y*ue+w*ye,r[11]=M*D+b*W+y*te+w*Re,r[15]=M*A+b*Z+y*he+w*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*h-i*l*h)+_*(+t*l*h-t*c*d+r*o*d-s*o*h+s*c*u-r*l*u)+m*(+t*c*f-t*a*h-r*o*f+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,b=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,y=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,R=t*M+i*b+s*y+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=M*I,e[1]=(_*d*r-f*m*r-_*s*h+i*m*h+f*s*p-i*d*p)*I,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*h-i*l*h)*I,e[4]=b*I,e[5]=(u*m*r-g*d*r+g*s*h-t*m*h-u*s*p+t*d*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*h+t*l*h)*I,e[8]=y*I,e[9]=(g*f*r-u*_*r-g*i*h+t*_*h+u*i*p-t*f*p)*I,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*h-t*a*h)*I,e[12]=w*I,e[13]=(u*_*s-g*f*s+g*i*d-t*_*d-u*i*m+t*f*m)*I,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*I,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,_=o*u,m=o*f,p=a*f,M=l*c,b=l*u,y=l*f,w=i.x,R=i.y,I=i.z;return s[0]=(1-(_+p))*w,s[1]=(h+y)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(h-y)*R,s[5]=(1-(d+p))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+b)*I,s[9]=(m-M)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Hs.set(s[0],s[1],s[2]).length();const o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const c=1/r,u=1/o,f=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fi,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===fi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Na)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===fi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Na)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hs=new H,Gn=new it,zM=new H(0,0,0),GM=new H(1,1,1),Ki=new H,zo=new H,Rn=new H,Ld=new it,Dd=new Qn;class ti{constructor(e=0,t=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WM=0;const Nd=new H,Vs=new Qn,Si=new it,Go=new H,kr=new H,XM=new H,jM=new Qn,Ud=new H(1,0,0),Fd=new H(0,1,0),Od=new H(0,0,1),Bd={type:"added"},$M={type:"removed"},zs={type:"childadded",child:null},wl={type:"childremoved",child:null};class Nt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new H,t=new ti,i=new Qn,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new et}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Nd.copy(e).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Go.copy(e):Go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(kr,Go,this.up):Si.lookAt(Go,kr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Si),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($M),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,jM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new H(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new H,Ei=new H,Rl=new H,Ti=new H,Gs=new H,Ws=new H,kd=new H,Cl=new H,Pl=new H,Il=new H,Ll=new ht,Dl=new ht,Nl=new ht;class jn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),Ei.subVectors(i,t),Rl.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Ei),l=Wn.dot(Rl),c=Ei.dot(Ei),u=Ei.dot(Rl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ll,r.x),o.addScaledVector(Dl,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),Ei.subVectors(e,t),Wn.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Wn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Gs.subVectors(s,i),Ws.subVectors(r,i),Cl.subVectors(e,i);const l=Gs.dot(Cl),c=Ws.dot(Cl);if(l<=0&&c<=0)return t.copy(i);Pl.subVectors(e,s);const u=Gs.dot(Pl),f=Ws.dot(Pl);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Gs,o);Il.subVectors(e,r);const h=Gs.dot(Il),g=Ws.dot(Il);if(g>=0&&h<=g)return t.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ws,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return kd.subVectors(r,s),a=(f-u)/(f-u+(h-g)),t.copy(s).addScaledVector(kd,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Yu(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ul(o,r,e+1/3),this.g=Ul(o,r,e),this.b=Ul(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=zm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ut.workingToColorSpace(Qt.copy(this),e),Math.round(rt(Qt.r*255,0,255))*65536+Math.round(rt(Qt.g*255,0,255))*256+Math.round(rt(Qt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Wt){ut.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Wo);const i=ao(qi.h,Wo.h,t),s=ao(qi.s,Wo.s,t),r=ao(qi.l,Wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ze;Ze.NAMES=zm;let KM=0;class hi extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=ar,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=wc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bn extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new H,Xo=new lt;let qM=0;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}}class Gm extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wm extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hn extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let YM=0;const Nn=new it,Fl=new Nt,Xs=new H,Cn=new zi,Hr=new zi,Gt=new H;class In extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Wm:Gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,Hr.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,Hr.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(Hr.min),Cn.expandByPoint(Hr.max))}Cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Gt.add(Xs)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new H,l[D]=new H;const c=new H,u=new H,f=new H,d=new lt,h=new lt,g=new lt,_=new H,m=new H;function p(D,A,E){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,E),d.fromBufferAttribute(r,D),h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,E),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[D].add(_),a[A].add(_),a[E].add(_),l[D].add(m),l[A].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,A=M.length;D<A;++D){const E=M[D],N=E.start,W=E.count;for(let Z=N,ie=N+W;Z<ie;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new H,y=new H,w=new H,R=new H;function I(D){w.fromBufferAttribute(s,D),R.copy(w);const A=a[D];b.copy(A),b.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(R,A);const N=y.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,N)}for(let D=0,A=M.length;D<A;++D){const E=M[D],N=E.start,W=E.count;for(let Z=N,ie=N+W;Z<ie;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new it,ps=new Qa,jo=new gi,Vd=new H,$o=new H,Ko=new H,qo=new H,Ol=new H,Yo=new H,zd=new H,Qo=new H;class Xt extends Nt{constructor(e=new In,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ol.fromBufferAttribute(f,e),o?Yo.addScaledVector(Ol,u):Yo.addScaledVector(Ol.sub(t),u))}t.add(Yo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(jo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(jo,Vd)===null||ps.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(Hd.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,w=b;y<w;y+=3){const R=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);s=Zo(this,p,e,i,c,u,f,R,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Zo(this,o,e,i,c,u,f,M,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,w=b;y<w;y+=3){const R=y,I=y+1,D=y+2;s=Zo(this,p,e,i,c,u,f,R,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,y=m+2;s=Zo(this,o,e,i,c,u,f,M,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function QM(n,e,t,i,s,r,o,a){let l;if(e.side===An?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hi,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:n}}function Zo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,$o),n.getVertexPosition(l,Ko),n.getVertexPosition(c,qo);const u=QM(n,e,t,i,$o,Ko,qo,zd);if(u){const f=new H;jn.getBarycoord(zd,$o,Ko,qo,f),s&&(u.uv=jn.getInterpolatedAttribute(s,a,l,c,f,new lt)),r&&(u.uv1=jn.getInterpolatedAttribute(r,a,l,c,f,new lt)),o&&(u.normal=jn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};jn.getNormal($o,Ko,qo,d.normal),u.face=d,u.barycoord=f}return u}class br extends In{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(f,2));function g(_,m,p,M,b,y,w,R,I,D,A){const E=y/I,N=w/D,W=y/2,Z=w/2,ie=R/2,ue=I+1,te=D+1;let he=0,j=0;const ye=new H;for(let Re=0;Re<te;Re++){const De=Re*N-Z;for(let Be=0;Be<ue;Be++){const Je=Be*E-W;ye[_]=Je*M,ye[m]=De*b,ye[p]=ie,c.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[p]=R>0?1:-1,u.push(ye.x,ye.y,ye.z),f.push(Be/I),f.push(1-Re/D),he+=1}}for(let Re=0;Re<D;Re++)for(let De=0;De<I;De++){const Be=d+De+ue*Re,Je=d+De+ue*(Re+1),tt=d+(De+1)+ue*(Re+1),Ce=d+(De+1)+ue*Re;l.push(Be,Je,Ce),l.push(Je,tt,Ce),j+=6}a.addGroup(h,j,A),h+=j,d+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const s in i)e[s]=i[s]}return e}function ZM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const JM={clone:yr,merge:ln};var eA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=tA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jm extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,Gd=new lt,Wd=new lt;class un extends jm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,Wd),t.subVectors(Wd,Gd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,$s=1;class nA extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(js,$s,e,t);s.layers=this.layers,this.add(s);const r=new un(js,$s,e,t);r.layers=this.layers,this.add(r);const o=new un(js,$s,e,t);o.layers=this.layers,this.add(o);const a=new un(js,$s,e,t);a.layers=this.layers,this.add(a);const l=new un(js,$s,e,t);l.layers=this.layers,this.add(l);const c=new un(js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $m extends jt{constructor(e=[],t=gr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iA extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $m(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new br(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:rs});r.uniforms.tEquirect.value=t;const o=new Xt(s,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=fn),new nA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class is extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class rA extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class oA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=du,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new H;class Zu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xd=new H,jd=new ht,$d=new ht,aA=new H,Kd=new it,Jo=new H,kl=new gi,qd=new it,Hl=new Qa;class lA extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Md,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(s),e.ray.intersectsSphere(kl)!==!1&&(qd.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(qd),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Md?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;jd.fromBufferAttribute(s.attributes.skinIndex,e),$d.fromBufferAttribute(s.attributes.skinWeight,e),Xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$d.getComponent(r);if(o!==0){const a=jd.getComponent(r);Kd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(aA.copy(Xd).applyMatrix4(Kd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Km extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qm extends jt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=dn,u=dn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new it,cA=new it;class Ju{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new it;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:cA;Yd.multiplyMatrices(a,t[r]),Yd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ju(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new qm(t,e,e,kn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Km),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class hu extends nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new it,Qd=new it,ea=[],Zd=new zi,uA=new it,Vr=new Xt,zr=new gi;class fA extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),Zd.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),zr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Qd.multiplyMatrices(i,Ks),Vr.matrixWorld=Qd,Vr.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){const l=ea[o];l.instanceId=r,l.object=this,t.push(l)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qm(new Float32Array(s*this.count),s,this.count,ju,Kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vl=new H,dA=new H,hA=new et;class ys{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vl.subVectors(i,t).cross(dA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hA.getNormalMatrix(e),s=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new gi,pA=new lt(.5,.5),ta=new H;class ef{constructor(e=new ys,t=new ys,i=new ys,s=new ys,r=new ys,o=new ys){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,h-u,p-g,w-M).normalize(),s[1].setComponents(c+o,h+u,p+g,w+M).normalize(),s[2].setComponents(c+a,h+f,p+_,w+b).normalize(),s[3].setComponents(c-a,h-f,p-_,w-b).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,h-d,p-m,w-y).normalize();else if(s[4].setComponents(c-l,h-d,p-m,w-y).normalize(),t===fi)s[5].setComponents(c+l,h+d,p+m,w+y).normalize();else if(t===Na)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=pA.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ym extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ua=new H,Fa=new H,Jd=new it,Gr=new Qa,na=new gi,zl=new H,eh=new H;class tf extends Nt{constructor(e=new In,t=new Ym){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ua.fromBufferAttribute(t,s-1),Fa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ua.distanceTo(Fa);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Jd.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Jd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),b=ia(this,e,Gr,l,p,M,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=ia(this,e,Gr,l,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=ia(this,e,Gr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ia(this,e,Gr,l,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ia(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ua.fromBufferAttribute(a,s),Fa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ua,Fa,zl,eh)>i)return;zl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(zl);if(!(c<e.near||c>e.far))return{distance:c,point:eh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const th=new H,nh=new H;class mA extends tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)th.fromBufferAttribute(t,s),nh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+th.distanceTo(nh);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gA extends tf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qm extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new it,pu=new Qa,sa=new gi,ra=new H;class _A extends Nt{constructor(e=new In,t=new Qm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;ih.copy(s).invert(),pu.copy(e.ray).applyMatrix4(ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);ra.fromBufferAttribute(f,m),sh(ra,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)ra.fromBufferAttribute(f,g),sh(ra,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sh(n,e,t,i,s,r,o){const a=pu.distanceSqToPoint(n);if(a<t){const l=new H;pu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zm extends jt{constructor(e,t,i=ws,s,r,o,a=dn,l=dn,c,u=xo,f=1){if(u!==xo&&u!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jm extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends In{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=i/2;let p=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new hn(f,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(h,2));function M(){const y=new H,w=new H;let R=0;const I=(t-e)/i;for(let D=0;D<=r;D++){const A=[],E=D/r,N=E*(t-e)+e;for(let W=0;W<=s;W++){const Z=W/s,ie=Z*l+a,ue=Math.sin(ie),te=Math.cos(ie);w.x=N*ue,w.y=-E*i+m,w.z=N*te,f.push(w.x,w.y,w.z),y.set(ue,I,te).normalize(),d.push(y.x,y.y,y.z),h.push(Z,1-E),A.push(g++)}_.push(A)}for(let D=0;D<s;D++)for(let A=0;A<r;A++){const E=_[A][D],N=_[A+1][D],W=_[A+1][D+1],Z=_[A][D+1];(e>0||A!==0)&&(u.push(E,N,Z),R+=3),(t>0||A!==r-1)&&(u.push(N,W,Z),R+=3)}c.addGroup(p,R,0),p+=R}function b(y){const w=g,R=new lt,I=new H;let D=0;const A=y===!0?e:t,E=y===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*E,0),d.push(0,E,0),h.push(.5,.5),g++;const N=g;for(let W=0;W<=s;W++){const ie=W/s*l+a,ue=Math.cos(ie),te=Math.sin(ie);I.x=A*te,I.y=m*E,I.z=A*ue,f.push(I.x,I.y,I.z),d.push(0,E,0),R.x=ue*.5+.5,R.y=te*.5*E+.5,h.push(R.x,R.y),g++}for(let W=0;W<s;W++){const Z=w+W,ie=N+W;y===!0?u.push(ie,ie+1,Z):u.push(ie+1,ie,Z),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nf extends Za{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new nf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends In{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let b=0;b<c;b++){const y=b*f-r;g.push(y,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const b=M+c*p,y=M+c*(p+1),w=M+1+c*(p+1),R=M+1+c*p;h.push(b,y,R),h.push(y,w,R)}this.setIndex(h),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}class sf extends In{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,d=new H,h=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],b=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const R=w/t;f.x=-e*Math.cos(s+R*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(R+y,1-b),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const b=u[p][M+1],y=u[p][M],w=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&h.push(b,y,R),(p!==i-1||l<Math.PI)&&h.push(y,w,R)}this.setIndex(h),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cr extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Om,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _i extends cr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vA extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xA extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function MA(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function rh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function eg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Lo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class AA extends Lo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ad,endingEnd:Ad}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sd:r=e,a=2*t-i;break;case Ed:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sd:o=e,l=2*i-t;break;case Ed:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-h)*m+(1.5+h)*_+.5*g,y=h*m-h*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+M*o[c+w]+b*o[l+w]+y*o[f+w];return r}}class SA extends Lo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*u;return r}}class EA extends Lo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new EA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new SA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new AA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&yA(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,d=f-i,h=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Ao;class wr extends ii{constructor(e,t,i){super(e,t,i)}}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Mo;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class tg extends ii{constructor(e,t,i,s){super(e,t,i,s)}}tg.prototype.ValueTypeName="color";class Mr extends ii{constructor(e,t,i,s){super(e,t,i,s)}}Mr.prototype.ValueTypeName="number";class TA extends Lo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Qn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ar extends ii{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new TA(this.times,this.values,this.getValueSize(),e)}}Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends ii{constructor(e,t,i){super(e,t,i)}}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Mo;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends ii{constructor(e,t,i,s){super(e,t,i,s)}}Sr.prototype.ValueTypeName="vector";class bA{constructor(e="",t=-1,i=[],s=sM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(RA(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(ii.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=MA(l);l=rh(l,1,u),c=rh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let d=s[f];d||(s[f]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,h,g,_){if(h.length!==0){const m=[],p=[];eg(h,m,p,g),m.length!==0&&_.push(new f(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const b=d[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new Mr(".morphTargetInfluence["+_+"]",m,p))}l=h.length*o}else{const h=".bones["+t[f].name+"]";i(Sr,h+".position",d,"pos",s),i(Ar,h+".quaternion",d,"rot",s),i(Sr,h+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function wA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mr;case"vector":case"vector2":case"vector3":case"vector4":return Sr;case"color":return tg;case"quaternion":return Ar;case"bool":case"boolean":return wr;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function RA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wA(n.type);if(n.times===void 0){const t=[],i=[];eg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Di={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const PA=new CA;class Cr{constructor(e){this.manager=e!==void 0?e:PA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class IA extends Error{constructor(e,t){super(e),this.response=t}}class ng extends Cr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:s});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:b,value:y})=>{if(b)p.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let R=0,I=u.length;R<I;R++){const D=u[R];D.onProgress&&D.onProgress(w)}p.enqueue(y),M()}},b=>{p.error(b)})}}});return new Response(m)}else throw new IA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Di.add(`file:${e}`,c);const u=bi[e];delete bi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=new WeakMap;class LA extends Cr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=qs.get(o);f===void 0&&(f=[],qs.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=So("img");function l(){u(),t&&t(this);const f=qs.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Di.remove(`image:${e}`);const d=qs.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class DA extends Cr{constructor(e){super(e)}load(e,t,i,s){const r=new jt,o=new LA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class rf extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gl=new it,oh=new H,ah=new H;class of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ef,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NA extends of{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UA extends rf{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new NA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lh=new it,Wr=new H,Wl=new H;class FA extends of{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),Wl.copy(i.position),Wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wl),i.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh,i.coordinateSystem,i.reversedDepth)}}class OA extends rf{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new FA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class af extends jm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class BA extends of{constructor(){super(new af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ya extends rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new BA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xl=new WeakMap;class kA extends Cr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Xl.has(o)===!0)s&&s(Xl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xl.set(l,c),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class HA extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class VA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const lf="\\[\\]\\.:\\/",zA=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",GA="[^"+lf.replace("\\.","")+"]",WA=/((?:WC+[\/:])*)/.source.replace("WC",cf),XA=/(WCOD+)?/.source.replace("WCOD",GA),jA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),$A=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),KA=new RegExp("^"+WA+XA+jA+$A+"$"),qA=["material","materials","bones","map"];class YA{constructor(e,t,i){const s=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zA,"")}static parseTrackName(e){const t=KA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);qA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=YA;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ch(n,e,t,i){const s=QA(i);switch(t){case Dm:return n*e;case ju:return n*e/s.components*s.byteLength;case $u:return n*e/s.components*s.byteLength;case Um:return n*e*2/s.components*s.byteLength;case Ku:return n*e*2/s.components*s.byteLength;case Nm:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case qu:return n*e*4/s.components*s.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:case Hc:return Math.max(n,16)*Math.max(e,8)/4;case Oc:case kc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case iu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case su:case ru:case ou:return Math.ceil(n/4)*Math.ceil(e/4)*16;case au:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QA(n){switch(n){case mi:case Cm:return{byteLength:1,components:1};case _o:case Pm:case Io:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case ws:case Gu:case Kn:return{byteLength:4,components:1};case Im:case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);function ig(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ZA(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var JA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eS=`#ifdef USE_ALPHAHASH
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
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rS=`#ifdef USE_AOMAP
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
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
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
#endif`,lS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dS=`#ifdef USE_IRIDESCENCE
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
#endif`,hS=`#ifdef USE_BUMPMAP
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
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AS=`#define PI 3.141592653589793
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
} // validated`,SS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ES=`vec3 transformedNormal = objectNormal;
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
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
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
}`,VS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WS=`uniform bool receiveShadow;
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
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YS=`PhysicalMaterial material;
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
#endif`,QS=`struct PhysicalMaterial {
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
}`,ZS=`
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,rT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oT=`#define DISTANCE
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
}`,aT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,yT=`#define PHONG
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
}`,MT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,ST=`#define STANDARD
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
}`,ET=`#define TOON
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
}`,TT=`#define TOON
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
}`,bT=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,IT=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:JA,alphahash_pars_fragment:eS,alphamap_fragment:tS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:sS,aomap_fragment:rS,aomap_pars_fragment:oS,batching_pars_vertex:aS,batching_vertex:lS,begin_vertex:cS,beginnormal_vertex:uS,bsdfs:fS,iridescence_fragment:dS,bumpmap_pars_fragment:hS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:_S,color_fragment:vS,color_pars_fragment:xS,color_pars_vertex:yS,color_vertex:MS,common:AS,cube_uv_reflection_fragment:SS,defaultnormal_vertex:ES,displacementmap_pars_vertex:TS,displacementmap_vertex:bS,emissivemap_fragment:wS,emissivemap_pars_fragment:RS,colorspace_fragment:CS,colorspace_pars_fragment:PS,envmap_fragment:IS,envmap_common_pars_fragment:LS,envmap_pars_fragment:DS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:XS,envmap_vertex:US,fog_vertex:FS,fog_pars_vertex:OS,fog_fragment:BS,fog_pars_fragment:kS,gradientmap_pars_fragment:HS,lightmap_pars_fragment:VS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:GS,lights_pars_begin:WS,lights_toon_fragment:jS,lights_toon_pars_fragment:$S,lights_phong_fragment:KS,lights_phong_pars_fragment:qS,lights_physical_fragment:YS,lights_physical_pars_fragment:QS,lights_fragment_begin:ZS,lights_fragment_maps:JS,lights_fragment_end:eE,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:sE,map_fragment:rE,map_pars_fragment:oE,map_particle_fragment:aE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:EE,iridescence_pars_fragment:TE,opaque_fragment:bE,packing:wE,premultiplied_alpha_fragment:RE,project_vertex:CE,dithering_fragment:PE,dithering_pars_fragment:IE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:UE,shadowmap_vertex:FE,shadowmask_pars_fragment:OE,skinbase_vertex:BE,skinning_pars_vertex:kE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:zE,specularmap_pars_fragment:GE,tonemapping_fragment:WE,tonemapping_pars_fragment:XE,transmission_fragment:jE,transmission_pars_fragment:$E,uv_pars_fragment:KE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:QE,background_vert:ZE,background_frag:JE,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:sT,depth_frag:rT,distanceRGBA_vert:oT,distanceRGBA_frag:aT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:dT,meshbasic_frag:hT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:yT,meshphong_frag:MT,meshphysical_vert:AT,meshphysical_frag:ST,meshtoon_vert:ET,meshtoon_frag:TT,points_vert:bT,points_frag:wT,shadow_vert:RT,shadow_frag:CT,sprite_vert:PT,sprite_frag:IT},Ie={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ci={basic:{uniforms:ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:ln([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:ln([Ie.lights,Ie.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ci.physical={uniforms:ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const aa={r:0,b:0,g:0},gs=new ti,LT=new it;function DT(n,e,t,i,s,r,o){const a=new Ze(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===Ya)?(u===void 0&&(u=new Xt(new br(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:yr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gs.copy(y.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(gs)),u.material.toneMapped=ut.getTransfer(w.colorSpace)!==St,(f!==w||d!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Xt(new Ja(2,2),new as({name:"BackgroundMaterial",uniforms:yr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(aa,Xm(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,y,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:M}}function NT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,N,W,Z,ie){let ue=!1;const te=f(Z,W,N);r!==te&&(r=te,c(r.object)),ue=h(E,Z,W,ie),ue&&g(E,Z,W,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,y(E,N,W,Z),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,N,W){const Z=W.wireframe===!0;let ie=i[E.id];ie===void 0&&(ie={},i[E.id]=ie);let ue=ie[N.id];ue===void 0&&(ue={},ie[N.id]=ue);let te=ue[Z];return te===void 0&&(te=d(l()),ue[Z]=te),te}function d(E){const N=[],W=[],Z=[];for(let ie=0;ie<t;ie++)N[ie]=0,W[ie]=0,Z[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Z,object:E,attributes:{},index:null}}function h(E,N,W,Z){const ie=r.attributes,ue=N.attributes;let te=0;const he=W.getAttributes();for(const j in he)if(he[j].location>=0){const Re=ie[j];let De=ue[j];if(De===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(De=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(De=E.instanceColor)),Re===void 0||Re.attribute!==De||De&&Re.data!==De.data)return!0;te++}return r.attributesNum!==te||r.index!==Z}function g(E,N,W,Z){const ie={},ue=N.attributes;let te=0;const he=W.getAttributes();for(const j in he)if(he[j].location>=0){let Re=ue[j];Re===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor));const De={};De.attribute=Re,Re&&Re.data&&(De.data=Re.data),ie[j]=De,te++}r.attributes=ie,r.attributesNum=te,r.index=Z}function _(){const E=r.newAttributes;for(let N=0,W=E.length;N<W;N++)E[N]=0}function m(E){p(E,0)}function p(E,N){const W=r.newAttributes,Z=r.enabledAttributes,ie=r.attributeDivisors;W[E]=1,Z[E]===0&&(n.enableVertexAttribArray(E),Z[E]=1),ie[E]!==N&&(n.vertexAttribDivisor(E,N),ie[E]=N)}function M(){const E=r.newAttributes,N=r.enabledAttributes;for(let W=0,Z=N.length;W<Z;W++)N[W]!==E[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function b(E,N,W,Z,ie,ue,te){te===!0?n.vertexAttribIPointer(E,N,W,ie,ue):n.vertexAttribPointer(E,N,W,Z,ie,ue)}function y(E,N,W,Z){_();const ie=Z.attributes,ue=W.getAttributes(),te=N.defaultAttributeValues;for(const he in ue){const j=ue[he];if(j.location>=0){let ye=ie[he];if(ye===void 0&&(he==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),he==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor)),ye!==void 0){const Re=ye.normalized,De=ye.itemSize,Be=e.get(ye);if(Be===void 0)continue;const Je=Be.buffer,tt=Be.type,Ce=Be.bytesPerElement,z=tt===n.INT||tt===n.UNSIGNED_INT||ye.gpuType===Gu;if(ye.isInterleavedBufferAttribute){const P=ye.data,q=P.stride,le=ye.offset;if(P.isInstancedInterleavedBuffer){for(let fe=0;fe<j.locationSize;fe++)p(j.location+fe,P.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let fe=0;fe<j.locationSize;fe++)m(j.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let fe=0;fe<j.locationSize;fe++)b(j.location+fe,De/j.locationSize,tt,Re,q*Ce,(le+De/j.locationSize*fe)*Ce,z)}else{if(ye.isInstancedBufferAttribute){for(let P=0;P<j.locationSize;P++)p(j.location+P,ye.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let P=0;P<j.locationSize;P++)m(j.location+P);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let P=0;P<j.locationSize;P++)b(j.location+P,De/j.locationSize,tt,Re,De*Ce,De/j.locationSize*P*Ce,z)}}else if(te!==void 0){const Re=te[he];if(Re!==void 0)switch(Re.length){case 2:n.vertexAttrib2fv(j.location,Re);break;case 3:n.vertexAttrib3fv(j.location,Re);break;case 4:n.vertexAttrib4fv(j.location,Re);break;default:n.vertexAttrib1fv(j.location,Re)}}}}M()}function w(){D();for(const E in i){const N=i[E];for(const W in N){const Z=N[W];for(const ie in Z)u(Z[ie].object),delete Z[ie];delete N[W]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const W in N){const Z=N[W];for(const ie in Z)u(Z[ie].object),delete Z[ie];delete N[W]}delete i[E.id]}function I(E){for(const N in i){const W=i[N];if(W[E.id]===void 0)continue;const Z=W[E.id];for(const ie in Z)u(Z[ie].object),delete Z[ie];delete W[E.id]}}function D(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function UT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==mi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Kn&&!D)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:w,maxSamples:R}}function OT(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ys,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,b=M*4;let y=p.clippingState||null;l.value=y,y=u(g,d,b,h);for(let w=0;w!==b;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=h;b!==_;++b,y+=4)o.copy(f[b]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function BT(n){let e=new WeakMap;function t(o,a){return a===Uc?o.mapping=gr:a===Fc&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uc||a===Fc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iA(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const er=4,uh=[.125,.215,.35,.446,.526,.582],Ss=20,jl=new af,fh=new Ze;let $l=null,Kl=0,ql=0,Yl=!1;const Ms=(1+Math.sqrt(5))/2,Ys=1/Ms,dh=[new H(-Ms,Ys,0),new H(Ms,Ys,0),new H(-Ys,0,Ms),new H(Ys,0,Ms),new H(0,Ms,-Ys),new H(0,Ms,Ys),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],kT=new H;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=kT}=r;$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Kl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Io,format:kn,colorSpace:pn,depthBuffer:!1},s=ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(r)),this._blurMaterial=VT(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,jl)}_sceneToCubeUV(e,t,i,s,r){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(fh),f.toneMapping=os,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const _=new Bn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),m=new Xt(new br,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(fh),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;la(s,y*w,b>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===gr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dh[(s-r-1)%dh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xt(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ss-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const p=[];let M=0;for(let I=0;I<Ss;++I){const D=I/_,A=Math.exp(-D*D/2);p.push(A),I===0?M+=A:I<m&&(M+=2*A)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[s],w=3*y*(s>b-er?s-b+er:0),R=4*(this._cubeSize-y);la(t,w,R,3*y,2*y),l.setRenderTarget(t),l.render(f,jl)}}function HT(n){const e=[],t=[],i=[];let s=n;const r=n-er+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-er?l=uh[o-n+er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),b=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let R=0;R<h;R++){const I=R%3*2/3-1,D=R>2?0:-1,A=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];M.set(A,_*g*R),b.set(d,m*g*R);const E=[R,R,R,R,R,R];y.set(E,p*g*R)}const w=new In;w.setAttribute("position",new nn(M,_)),w.setAttribute("uv",new nn(b,m)),w.setAttribute("faceIndex",new nn(y,p)),e.push(w),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ph(n,e,t){const i=new Rs(n,e,t);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function VT(n,e,t){const i=new Float32Array(Ss),s=new H(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uf(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function mh(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function gh(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function uf(){return`

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
	`}function zT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uc||l===Fc,u=l===gr||l===_r;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new hh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function WT(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let b=0,y=M.length;b<y;b+=3){const w=M[b+0],R=M[b+1],I=M[b+2];d.push(w,R,R,I,I,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const w=b+0,R=b+1,I=b+2;d.push(w,R,R,I,I,w)}}else return;const m=new(km(d)?Wm:Gm)(d,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function XT(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,d*o,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*_[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $T(n,e,t){const i=new WeakMap,s=new ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let A=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=a.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*w*4*f),I=new Hm(R,y,w,f);I.type=Kn,I.needsUpdate=!0;const D=b*4;for(let E=0;E<f;E++){const N=m[E],W=p[E],Z=M[E],ie=y*w*4*E;for(let ue=0;ue<N.count;ue++){const te=ue*D;h===!0&&(s.fromBufferAttribute(N,ue),R[ie+te+0]=s.x,R[ie+te+1]=s.y,R[ie+te+2]=s.z,R[ie+te+3]=0),g===!0&&(s.fromBufferAttribute(W,ue),R[ie+te+4]=s.x,R[ie+te+5]=s.y,R[ie+te+6]=s.z,R[ie+te+7]=0),_===!0&&(s.fromBufferAttribute(Z,ue),R[ie+te+8]=s.x,R[ie+te+9]=s.y,R[ie+te+10]=s.z,R[ie+te+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:I,size:new lt(y,w)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function KT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const sg=new jt,_h=new Zm(1,1),rg=new Hm,og=new HM,ag=new $m,vh=[],xh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Ah=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function el(n,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function QT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function ZT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function JT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),zt(t,i)}}function eb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),zt(t,i)}}function tb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),zt(t,i)}}function nb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function ub(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_h.compareFunction=Bm,r=_h):r=sg,t.setTexture2D(e||r,s)}function fb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||og,s)}function db(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ag,s)}function hb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rg,s)}function pb(n){switch(n){case 5126:return qT;case 35664:return YT;case 35665:return QT;case 35666:return ZT;case 35674:return JT;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return hb}}function mb(n,e){n.uniform1fv(this.addr,e)}function gb(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function _b(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function vb(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function xb(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yb(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mb(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ab(n,e){n.uniform1iv(this.addr,e)}function Sb(n,e){n.uniform2iv(this.addr,e)}function Eb(n,e){n.uniform3iv(this.addr,e)}function Tb(n,e){n.uniform4iv(this.addr,e)}function bb(n,e){n.uniform1uiv(this.addr,e)}function wb(n,e){n.uniform2uiv(this.addr,e)}function Rb(n,e){n.uniform3uiv(this.addr,e)}function Cb(n,e){n.uniform4uiv(this.addr,e)}function Pb(n,e,t){const i=this.cache,s=e.length,r=el(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sg,r[o])}function Ib(n,e,t){const i=this.cache,s=e.length,r=el(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||og,r[o])}function Lb(n,e,t){const i=this.cache,s=e.length,r=el(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ag,r[o])}function Db(n,e,t){const i=this.cache,s=e.length,r=el(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rg,r[o])}function Nb(n){switch(n){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return vb;case 35674:return xb;case 35675:return yb;case 35676:return Mb;case 5124:case 35670:return Ab;case 35667:case 35671:return Sb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return bb;case 36294:return wb;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}class Ub{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}}class Fb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nb(t.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function Sh(n,e){n.seq.push(e),n.map[e.id]=e}function Bb(n,e,t){const i=n.name,s=i.length;for(Ql.lastIndex=0;;){const r=Ql.exec(i),o=Ql.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sh(t,c===void 0?new Ub(a,n,e):new Fb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Ob(a),Sh(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Bb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Eh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kb=37297;let Hb=0;function Vb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Th=new et;function zb(n){ut._getMatrix(Th,ut.workingColorSpace,n);const e=`mat3( ${Th.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Da:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vb(n.getShaderSource(e),a)}else return r}function Gb(n,e){const t=zb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wb(n,e){let t;switch(e){case Yy:t="Linear";break;case Qy:t="Reinhard";break;case Zy:t="Cineon";break;case Jy:t="ACESFilmic";break;case tM:t="AgX";break;case nM:t="Neutral";break;case eM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ca=new H;function Xb(){ut.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function $b(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qr(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(n){return n.replace(qb,Qb)}const Yb=new Map;function Qb(n,e){let t=nt[e];if(t===void 0){const i=Yb.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mu(t)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(Zb,Jb)}function Jb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ew(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function tw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nw(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===_r&&(e="ENVMAP_MODE_REFRACTION"),e}function iw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ky:e="ENVMAP_BLENDING_MIX";break;case qy:e="ENVMAP_BLENDING_ADD";break}return e}function sw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rw(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ew(t),c=tw(t),u=nw(t),f=iw(t),d=sw(t),h=jb(t),g=$b(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?nt.tonemapping_pars_fragment:"",t.toneMapping!==os?Wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Gb("linearToOutputTexel",t.outputColorSpace),Xb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),o=mu(o),o=wh(o,t),o=Rh(o,t),a=mu(a),a=wh(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+o,y=M+p+a,w=Eh(s,s.VERTEX_SHADER,b),R=Eh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(N){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_)||"",Z=s.getShaderInfoLog(w)||"",ie=s.getShaderInfoLog(R)||"",ue=W.trim(),te=Z.trim(),he=ie.trim();let j=!0,ye=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,R);else{const Re=bh(s,w,"vertex"),De=bh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ue+`
`+Re+`
`+De)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(te===""||he==="")&&(ye=!1);ye&&(N.diagnostics={runnable:j,programLog:ue,vertexShader:{log:te,prefix:m},fragmentShader:{log:he,prefix:p}})}s.deleteShader(w),s.deleteShader(R),D=new Ma(s,_),A=Kb(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,kb)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let ow=0;class aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lw(e),t.set(e,i)),i}}class lw{constructor(e){this.id=ow++,this.code=e,this.usedTimes=0}}function cw(n,e,t,i,s,r,o){const a=new Vm,l=new aw,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,N,W,Z){const ie=W.fog,ue=Z.geometry,te=A.isMeshStandardMaterial?W.environment:null,he=(A.isMeshStandardMaterial?t:e).get(A.envMap||te),j=he&&he.mapping===Ya?he.image.height:null,ye=g[A.type];A.precision!==null&&(h=s.getMaxPrecision(A.precision),h!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",h,"instead."));const Re=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,De=Re!==void 0?Re.length:0;let Be=0;ue.morphAttributes.position!==void 0&&(Be=1),ue.morphAttributes.normal!==void 0&&(Be=2),ue.morphAttributes.color!==void 0&&(Be=3);let Je,tt,Ce,z;if(ye){const V=ci[ye];Je=V.vertexShader,tt=V.fragmentShader}else Je=A.vertexShader,tt=A.fragmentShader,l.update(A),Ce=l.getVertexShaderID(A),z=l.getFragmentShaderID(A);const P=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),le=Z.isInstancedMesh===!0,fe=Z.isBatchedMesh===!0,Pe=!!A.map,C=!!A.matcap,v=!!he,B=!!A.aoMap,$=!!A.lightMap,K=!!A.bumpMap,k=!!A.normalMap,_e=!!A.displacementMap,ee=!!A.emissiveMap,de=!!A.metalnessMap,pe=!!A.roughnessMap,we=A.anisotropy>0,S=A.clearcoat>0,x=A.dispersion>0,U=A.iridescence>0,Y=A.sheen>0,ce=A.transmission>0,Q=we&&!!A.anisotropyMap,L=S&&!!A.clearcoatMap,O=S&&!!A.clearcoatNormalMap,ne=S&&!!A.clearcoatRoughnessMap,ae=U&&!!A.iridescenceMap,J=U&&!!A.iridescenceThicknessMap,ge=Y&&!!A.sheenColorMap,ve=Y&&!!A.sheenRoughnessMap,Ee=!!A.specularMap,Se=!!A.specularColorMap,He=!!A.specularIntensityMap,F=ce&&!!A.transmissionMap,Me=ce&&!!A.thicknessMap,be=!!A.gradientMap,Le=!!A.alphaMap,xe=A.alphaTest>0,me=!!A.alphaHash,Ue=!!A.extensions;let Ve=os;A.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const st={shaderID:ye,shaderType:A.type,shaderName:A.name,vertexShader:Je,fragmentShader:tt,defines:A.defines,customVertexShaderID:Ce,customFragmentShaderID:z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:h,batching:fe,batchingColor:fe&&Z._colorsTexture!==null,instancing:le,instancingColor:le&&Z.instanceColor!==null,instancingMorph:le&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pn,alphaToCoverage:!!A.alphaToCoverage,map:Pe,matcap:C,envMap:v,envMapMode:v&&he.mapping,envMapCubeUVHeight:j,aoMap:B,lightMap:$,bumpMap:K,normalMap:k,displacementMap:d&&_e,emissiveMap:ee,normalMapObjectSpace:k&&A.normalMapType===lM,normalMapTangentSpace:k&&A.normalMapType===Om,metalnessMap:de,roughnessMap:pe,anisotropy:we,anisotropyMap:Q,clearcoat:S,clearcoatMap:L,clearcoatNormalMap:O,clearcoatRoughnessMap:ne,dispersion:x,iridescence:U,iridescenceMap:ae,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:ge,sheenRoughnessMap:ve,specularMap:Ee,specularColorMap:Se,specularIntensityMap:He,transmission:ce,transmissionMap:F,thicknessMap:Me,gradientMap:be,opaque:A.transparent===!1&&A.blending===ar&&A.alphaToCoverage===!1,alphaMap:Le,alphaTest:xe,alphaHash:me,combine:A.combine,mapUv:Pe&&_(A.map.channel),aoMapUv:B&&_(A.aoMap.channel),lightMapUv:$&&_(A.lightMap.channel),bumpMapUv:K&&_(A.bumpMap.channel),normalMapUv:k&&_(A.normalMap.channel),displacementMapUv:_e&&_(A.displacementMap.channel),emissiveMapUv:ee&&_(A.emissiveMap.channel),metalnessMapUv:de&&_(A.metalnessMap.channel),roughnessMapUv:pe&&_(A.roughnessMap.channel),anisotropyMapUv:Q&&_(A.anisotropyMap.channel),clearcoatMapUv:L&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:O&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(A.sheenRoughnessMap.channel),specularMapUv:Ee&&_(A.specularMap.channel),specularColorMapUv:Se&&_(A.specularColorMap.channel),specularIntensityMapUv:He&&_(A.specularIntensityMap.channel),transmissionMapUv:F&&_(A.transmissionMap.channel),thicknessMapUv:Me&&_(A.thicknessMap.channel),alphaMapUv:Le&&_(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(k||we),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&(Pe||Le),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:q,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Pe&&A.map.isVideoTexture===!0&&ut.getTransfer(A.map.colorSpace)===St,decodeVideoTextureEmissive:ee&&A.emissiveMap.isVideoTexture===!0&&ut.getTransfer(A.emissiveMap.colorSpace)===St,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ui,flipSided:A.side===An,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function p(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)E.push(N),E.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(M(E,A),b(E,A),E.push(n.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function M(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function b(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const E=g[A.type];let N;if(E){const W=ci[E];N=JM.clone(W.uniforms)}else N=A.uniforms;return N}function w(A,E){let N;for(let W=0,Z=u.length;W<Z;W++){const ie=u[W];if(ie.cacheKey===E){N=ie,++N.usedTimes;break}}return N===void 0&&(N=new rw(n,E,A,r),u.push(N)),N}function R(A){if(--A.usedTimes===0){const E=u.indexOf(A);u[E]=u[u.length-1],u.pop(),A.destroy()}}function I(A){l.remove(A)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:D}}function uw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ih(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||fw),i.length>1&&i.sort(d||Ih),s.length>1&&s.sort(d||Ih)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function dw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Lh,n.set(i,[o])):s>=r.length?(o=new Lh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function pw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mw=0;function gw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _w(n){const e=new hw,t=pw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new it,o=new it;function a(c){let u=0,f=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,b=0,y=0,w=0,R=0,I=0;c.sort(gw);for(let A=0,E=c.length;A<E;A++){const N=c[A],W=N.color,Z=N.intensity,ie=N.distance,ue=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=W.r*Z,f+=W.g*Z,d+=W.b*Z;else if(N.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(N.sh.coefficients[te],Z);I++}else if(N.isDirectionalLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,j=t.get(N);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=ue,i.directionalShadowMatrix[h]=N.shadow.matrix,M++}i.directional[h]=te,h++}else if(N.isSpotLight){const te=e.get(N);te.position.setFromMatrixPosition(N.matrixWorld),te.color.copy(W).multiplyScalar(Z),te.distance=ie,te.coneCos=Math.cos(N.angle),te.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),te.decay=N.decay,i.spot[_]=te;const he=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,he.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[_]=he.matrix,N.castShadow){const j=t.get(N);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=ue,y++}_++}else if(N.isRectAreaLight){const te=e.get(N);te.color.copy(W).multiplyScalar(Z),te.halfWidth.set(N.width*.5,0,0),te.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=te,m++}else if(N.isPointLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),te.distance=N.distance,te.decay=N.decay,N.castShadow){const he=N.shadow,j=t.get(N);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,j.shadowCameraNear=he.camera.near,j.shadowCameraFar=he.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=ue,i.pointShadowMatrix[g]=N.shadow.matrix,b++}i.point[g]=te,g++}else if(N.isHemisphereLight){const te=e.get(N);te.skyColor.copy(N.color).multiplyScalar(Z),te.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[p]=te,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,D.directionalLength=h,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=I,i.version=mw++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Dh(n){const e=new _w(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vw(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Dh(n),e.set(s,[a])):r>=o.length?(a=new Dh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yw=`uniform sampler2D shadow_pass;
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
}`;function Mw(n,e,t){let i=new ef;const s=new lt,r=new lt,o=new ht,a=new vA({depthPacking:aM}),l=new xA,c={},u=t.maxTextureSize,f={[Hi]:An,[An]:Hi,[ui]:ui},d=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:xw,fragmentShader:yw}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tm;let p=this.type;this.render=function(R,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const A=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(rs),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=p!==wi&&this.type===wi,ie=p===wi&&this.type!==wi;for(let ue=0,te=R.length;ue<te;ue++){const he=R[ue],j=he.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ye=j.getFrameExtents();if(s.multiply(ye),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,j.mapSize.y=r.y)),j.map===null||Z===!0||ie===!0){const De=this.type!==wi?{minFilter:dn,magFilter:dn}:{};j.map!==null&&j.map.dispose(),j.map=new Rs(s.x,s.y,De),j.map.texture.name=he.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const Re=j.getViewportCount();for(let De=0;De<Re;De++){const Be=j.getViewport(De);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),W.viewport(o),j.updateMatrices(he,De),i=j.getFrustum(),y(I,D,j.camera,he,this.type)}j.isPointLightShadow!==!0&&this.type===wi&&M(j,D),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,E,N)};function M(R,I){const D=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rs(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,D,d,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,D,h,_,null)}function b(R,I,D,A){let E=null;const N=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)E=N;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=E.uuid,Z=I.uuid;let ie=c[W];ie===void 0&&(ie={},c[W]=ie);let ue=ie[Z];ue===void 0&&(ue=E.clone(),ie[Z]=ue,I.addEventListener("dispose",w)),E=ue}if(E.visible=I.visible,E.wireframe=I.wireframe,A===wi?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:f[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=n.properties.get(E);W.light=D}return E}function y(R,I,D,A,E){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===wi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),ie=R.material;if(Array.isArray(ie)){const ue=Z.groups;for(let te=0,he=ue.length;te<he;te++){const j=ue[te],ye=ie[j.materialIndex];if(ye&&ye.visible){const Re=b(R,ye,A,E);R.onBeforeShadow(n,R,I,D,Z,Re,j),n.renderBufferDirect(D,null,Z,Re,R,j),R.onAfterShadow(n,R,I,D,Z,Re,j)}}}else if(ie.visible){const ue=b(R,ie,A,E);R.onBeforeShadow(n,R,I,D,Z,ue,null),n.renderBufferDirect(D,null,Z,ue,R,null),R.onAfterShadow(n,R,I,D,Z,ue,null)}}const W=R.children;for(let Z=0,ie=W.length;Z<ie;Z++)y(W[Z],I,D,A,E)}function w(R){R.target.removeEventListener("dispose",w);for(const D in c){const A=c[D],E=R.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const Aw={[Rc]:Cc,[Pc]:Dc,[Ic]:Nc,[mr]:Lc,[Cc]:Rc,[Dc]:Pc,[Nc]:Ic,[Lc]:mr};function Sw(n,e){function t(){let F=!1;const Me=new ht;let be=null;const Le=new ht(0,0,0,0);return{setMask:function(xe){be!==xe&&!F&&(n.colorMask(xe,xe,xe,xe),be=xe)},setLocked:function(xe){F=xe},setClear:function(xe,me,Ue,Ve,st){st===!0&&(xe*=Ve,me*=Ve,Ue*=Ve),Me.set(xe,me,Ue,Ve),Le.equals(Me)===!1&&(n.clearColor(xe,me,Ue,Ve),Le.copy(Me))},reset:function(){F=!1,be=null,Le.set(-1,0,0,0)}}}function i(){let F=!1,Me=!1,be=null,Le=null,xe=null;return{setReversed:function(me){if(Me!==me){const Ue=e.get("EXT_clip_control");me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Me=me;const Ve=xe;xe=null,this.setClear(Ve)}},getReversed:function(){return Me},setTest:function(me){me?P(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(me){be!==me&&!F&&(n.depthMask(me),be=me)},setFunc:function(me){if(Me&&(me=Aw[me]),Le!==me){switch(me){case Rc:n.depthFunc(n.NEVER);break;case Cc:n.depthFunc(n.ALWAYS);break;case Pc:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case Lc:n.depthFunc(n.GEQUAL);break;case Dc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=me}},setLocked:function(me){F=me},setClear:function(me){xe!==me&&(Me&&(me=1-me),n.clearDepth(me),xe=me)},reset:function(){F=!1,be=null,Le=null,xe=null,Me=!1}}}function s(){let F=!1,Me=null,be=null,Le=null,xe=null,me=null,Ue=null,Ve=null,st=null;return{setTest:function(V){F||(V?P(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(V){Me!==V&&!F&&(n.stencilMask(V),Me=V)},setFunc:function(V,Ae,Fe){(be!==V||Le!==Ae||xe!==Fe)&&(n.stencilFunc(V,Ae,Fe),be=V,Le=Ae,xe=Fe)},setOp:function(V,Ae,Fe){(me!==V||Ue!==Ae||Ve!==Fe)&&(n.stencilOp(V,Ae,Fe),me=V,Ue=Ae,Ve=Fe)},setLocked:function(V){F=V},setClear:function(V){st!==V&&(n.clearStencil(V),st=V)},reset:function(){F=!1,Me=null,be=null,Le=null,xe=null,me=null,Ue=null,Ve=null,st=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,b=null,y=null,w=null,R=null,I=new Ze(0,0,0),D=0,A=!1,E=null,N=null,W=null,Z=null,ie=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,he=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(j)[1]),te=he>=1):j.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),te=he>=2);let ye=null,Re={};const De=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Je=new ht().fromArray(De),tt=new ht().fromArray(Be);function Ce(F,Me,be,Le){const xe=new Uint8Array(4),me=n.createTexture();n.bindTexture(F,me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<be;Ue++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Me+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return me}const z={};z[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(n.DEPTH_TEST),o.setFunc(mr),K(!1),k(vd),P(n.CULL_FACE),B(rs);function P(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function q(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function le(F,Me){return f[F]!==Me?(n.bindFramebuffer(F,Me),f[F]=Me,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function fe(F,Me){let be=h,Le=!1;if(F){be=d.get(Me),be===void 0&&(be=[],d.set(Me,be));const xe=F.textures;if(be.length!==xe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ue=xe.length;me<Ue;me++)be[me]=n.COLOR_ATTACHMENT0+me;be.length=xe.length,Le=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Le=!0);Le&&n.drawBuffers(be)}function Pe(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const C={[As]:n.FUNC_ADD,[Iy]:n.FUNC_SUBTRACT,[Ly]:n.FUNC_REVERSE_SUBTRACT};C[Dy]=n.MIN,C[Ny]=n.MAX;const v={[Uy]:n.ZERO,[Fy]:n.ONE,[Oy]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[Gy]:n.SRC_ALPHA_SATURATE,[Vy]:n.DST_COLOR,[ky]:n.DST_ALPHA,[By]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[zy]:n.ONE_MINUS_DST_COLOR,[Hy]:n.ONE_MINUS_DST_ALPHA,[Wy]:n.CONSTANT_COLOR,[Xy]:n.ONE_MINUS_CONSTANT_COLOR,[jy]:n.CONSTANT_ALPHA,[$y]:n.ONE_MINUS_CONSTANT_ALPHA};function B(F,Me,be,Le,xe,me,Ue,Ve,st,V){if(F===rs){_===!0&&(q(n.BLEND),_=!1);return}if(_===!1&&(P(n.BLEND),_=!0),F!==Py){if(F!==m||V!==A){if((p!==As||y!==As)&&(n.blendEquation(n.FUNC_ADD),p=As,y=As),V)switch(F){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tc:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,b=null,w=null,R=null,I.set(0,0,0),D=0,m=F,A=V}return}xe=xe||Me,me=me||be,Ue=Ue||Le,(Me!==p||xe!==y)&&(n.blendEquationSeparate(C[Me],C[xe]),p=Me,y=xe),(be!==M||Le!==b||me!==w||Ue!==R)&&(n.blendFuncSeparate(v[be],v[Le],v[me],v[Ue]),M=be,b=Le,w=me,R=Ue),(Ve.equals(I)===!1||st!==D)&&(n.blendColor(Ve.r,Ve.g,Ve.b,st),I.copy(Ve),D=st),m=F,A=!1}function $(F,Me){F.side===ui?q(n.CULL_FACE):P(n.CULL_FACE);let be=F.side===An;Me&&(be=!be),K(be),F.blending===ar&&F.transparent===!1?B(rs):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Le=F.stencilWrite;a.setTest(Le),Le&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function k(F){F!==wy?(P(n.CULL_FACE),F!==N&&(F===vd?n.cullFace(n.BACK):F===Ry?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),N=F}function _e(F){F!==W&&(te&&n.lineWidth(F),W=F)}function ee(F,Me,be){F?(P(n.POLYGON_OFFSET_FILL),(Z!==Me||ie!==be)&&(n.polygonOffset(Me,be),Z=Me,ie=be)):q(n.POLYGON_OFFSET_FILL)}function de(F){F?P(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function pe(F){F===void 0&&(F=n.TEXTURE0+ue-1),ye!==F&&(n.activeTexture(F),ye=F)}function we(F,Me,be){be===void 0&&(ye===null?be=n.TEXTURE0+ue-1:be=ye);let Le=Re[be];Le===void 0&&(Le={type:void 0,texture:void 0},Re[be]=Le),(Le.type!==F||Le.texture!==Me)&&(ye!==be&&(n.activeTexture(be),ye=be),n.bindTexture(F,Me||z[F]),Le.type=F,Le.texture=Me)}function S(){const F=Re[ye];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(F){Je.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function ve(F){tt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),tt.copy(F))}function Ee(F,Me){let be=c.get(Me);be===void 0&&(be=new WeakMap,c.set(Me,be));let Le=be.get(F);Le===void 0&&(Le=n.getUniformBlockIndex(Me,F.name),be.set(F,Le))}function Se(F,Me){const Le=c.get(Me).get(F);l.get(Me)!==Le&&(n.uniformBlockBinding(Me,Le,F.__bindingPointIndex),l.set(Me,Le))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ye=null,Re={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,b=null,y=null,w=null,R=null,I=new Ze(0,0,0),D=0,A=!1,E=null,N=null,W=null,Z=null,ie=null,Je.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:q,bindFramebuffer:le,drawBuffers:fe,useProgram:Pe,setBlending:B,setMaterial:$,setFlipSided:K,setCullFace:k,setLineWidth:_e,setPolygonOffset:ee,setScissorTest:de,activeTexture:pe,bindTexture:we,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:ae,texImage3D:J,updateUBOMapping:Ee,uniformBlockBinding:Se,texStorage2D:O,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:ce,compressedTexSubImage2D:Q,compressedTexSubImage3D:L,scissor:ge,viewport:ve,reset:He}}function Ew(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return h?new OffscreenCanvas(S,x):So("canvas")}function _(S,x,U){let Y=1;const ce=we(S);if((ce.width>U||ce.height>U)&&(Y=U/Math.max(ce.width,ce.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Q=Math.floor(Y*ce.width),L=Math.floor(Y*ce.height);f===void 0&&(f=g(Q,L));const O=x?g(Q,L):f;return O.width=Q,O.height=L,O.getContext("2d").drawImage(S,0,0,Q,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+L+")."),O}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,x,U,Y,ce=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=x;if(x===n.RED&&(U===n.FLOAT&&(Q=n.R32F),U===n.HALF_FLOAT&&(Q=n.R16F),U===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.R8UI),U===n.UNSIGNED_SHORT&&(Q=n.R16UI),U===n.UNSIGNED_INT&&(Q=n.R32UI),U===n.BYTE&&(Q=n.R8I),U===n.SHORT&&(Q=n.R16I),U===n.INT&&(Q=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Q=n.RG32F),U===n.HALF_FLOAT&&(Q=n.RG16F),U===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RG8UI),U===n.UNSIGNED_SHORT&&(Q=n.RG16UI),U===n.UNSIGNED_INT&&(Q=n.RG32UI),U===n.BYTE&&(Q=n.RG8I),U===n.SHORT&&(Q=n.RG16I),U===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),U===n.UNSIGNED_INT&&(Q=n.RGB32UI),U===n.BYTE&&(Q=n.RGB8I),U===n.SHORT&&(Q=n.RGB16I),U===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),U===n.UNSIGNED_INT&&(Q=n.RGBA32UI),U===n.BYTE&&(Q=n.RGBA8I),U===n.SHORT&&(Q=n.RGBA16I),U===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){const L=ce?Da:ut.getTransfer(Y);U===n.FLOAT&&(Q=n.RGBA32F),U===n.HALF_FLOAT&&(Q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Q=L===St?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(S,x){let U;return S?x===null||x===ws||x===vo?U=n.DEPTH24_STENCIL8:x===Kn?U=n.DEPTH32F_STENCIL8:x===_o&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ws||x===vo?U=n.DEPTH_COMPONENT24:x===Kn?U=n.DEPTH_COMPONENT32F:x===_o&&(U=n.DEPTH_COMPONENT16),U}function w(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==dn&&S.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function R(S){const x=S.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&u.delete(x)}function I(S){const x=S.target;x.removeEventListener("dispose",I),E(x)}function D(S){const x=i.get(S);if(x.__webglInit===void 0)return;const U=S.source,Y=d.get(U);if(Y){const ce=Y[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(S),Object.keys(Y).length===0&&d.delete(U)}i.remove(S)}function A(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const U=S.source,Y=d.get(U);delete Y[x.__cacheKey],o.memory.textures--}function E(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ce=0;ce<x.__webglFramebuffer[Y].length;ce++)n.deleteFramebuffer(x.__webglFramebuffer[Y][ce]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=S.textures;for(let Y=0,ce=U.length;Y<ce;Y++){const Q=i.get(U[Y]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(S)}let N=0;function W(){N=0}function Z(){const S=N;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),N+=1,S}function ie(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function ue(S,x){const U=i.get(S);if(S.isVideoTexture&&de(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(U,S,x);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function te(S,x){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){z(U,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function he(S,x){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){z(U,S,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function j(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){P(U,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const ye={[vr]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},Re={[dn]:n.NEAREST,[Rm]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},De={[cM]:n.NEVER,[mM]:n.ALWAYS,[uM]:n.LESS,[Bm]:n.LEQUAL,[fM]:n.EQUAL,[pM]:n.GEQUAL,[dM]:n.GREATER,[hM]:n.NOTEQUAL};function Be(S,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===ma||x.magFilter===Kr||x.magFilter===Li||x.minFilter===fn||x.minFilter===ma||x.minFilter===Kr||x.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ye[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ye[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ye[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Re[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==Kr&&x.minFilter!==Li||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Je(S,x){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let ce=d.get(Y);ce===void 0&&(ce={},d.set(Y,ce));const Q=ie(x);if(Q!==S.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ce[Q].usedTimes++;const L=ce[S.__cacheKey];L!==void 0&&(ce[S.__cacheKey].usedTimes--,L.usedTimes===0&&A(x)),S.__cacheKey=Q,S.__webglTexture=ce[Q].texture}return U}function tt(S,x,U){return Math.floor(Math.floor(S/U)/x)}function Ce(S,x,U,Y){const Q=S.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,Y,x.data);else{Q.sort((J,ge)=>J.start-ge.start);let L=0;for(let J=1;J<Q.length;J++){const ge=Q[L],ve=Q[J],Ee=ge.start+ge.count,Se=tt(ve.start,x.width,4),He=tt(ge.start,x.width,4);ve.start<=Ee+1&&Se===He&&tt(ve.start+ve.count-1,x.width,4)===Se?ge.count=Math.max(ge.count,ve.start+ve.count-ge.start):(++L,Q[L]=ve)}Q.length=L+1;const O=n.getParameter(n.UNPACK_ROW_LENGTH),ne=n.getParameter(n.UNPACK_SKIP_PIXELS),ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let J=0,ge=Q.length;J<ge;J++){const ve=Q[J],Ee=Math.floor(ve.start/4),Se=Math.ceil(ve.count/4),He=Ee%x.width,F=Math.floor(Ee/x.width),Me=Se,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,He,F,Me,be,U,Y,x.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,O),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function z(S,x,U){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const ce=Je(S,x),Q=x.source;t.bindTexture(Y,S.__webglTexture,n.TEXTURE0+U);const L=i.get(Q);if(Q.version!==L.__version||ce===!0){t.activeTexture(n.TEXTURE0+U);const O=ut.getPrimaries(ut.workingColorSpace),ne=x.colorSpace===ts?null:ut.getPrimaries(x.colorSpace),ae=x.colorSpace===ts||O===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let J=_(x.image,!1,s.maxTextureSize);J=pe(x,J);const ge=r.convert(x.format,x.colorSpace),ve=r.convert(x.type);let Ee=b(x.internalFormat,ge,ve,x.colorSpace,x.isVideoTexture);Be(Y,x);let Se;const He=x.mipmaps,F=x.isVideoTexture!==!0,Me=L.__version===void 0||ce===!0,be=Q.dataReady,Le=w(x,J);if(x.isDepthTexture)Ee=y(x.format===yo,x.type),Me&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,ge,ve,null));else if(x.isDataTexture)if(He.length>0){F&&Me&&t.texStorage2D(n.TEXTURE_2D,Le,Ee,He[0].width,He[0].height);for(let xe=0,me=He.length;xe<me;xe++)Se=He[xe],F?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Se.width,Se.height,ge,ve,Se.data):t.texImage2D(n.TEXTURE_2D,xe,Ee,Se.width,Se.height,0,ge,ve,Se.data);x.generateMipmaps=!1}else F?(Me&&t.texStorage2D(n.TEXTURE_2D,Le,Ee,J.width,J.height),be&&Ce(x,J,ge,ve)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,ge,ve,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ee,He[0].width,He[0].height,J.depth);for(let xe=0,me=He.length;xe<me;xe++)if(Se=He[xe],x.format!==kn)if(ge!==null)if(F){if(be)if(x.layerUpdates.size>0){const Ue=ch(Se.width,Se.height,x.format,x.type);for(const Ve of x.layerUpdates){const st=Se.data.subarray(Ve*Ue/Se.data.BYTES_PER_ELEMENT,(Ve+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ve,Se.width,Se.height,1,ge,st)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Se.width,Se.height,J.depth,ge,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ee,Se.width,Se.height,J.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Se.width,Se.height,J.depth,ge,ve,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ee,Se.width,Se.height,J.depth,0,ge,ve,Se.data)}else{F&&Me&&t.texStorage2D(n.TEXTURE_2D,Le,Ee,He[0].width,He[0].height);for(let xe=0,me=He.length;xe<me;xe++)Se=He[xe],x.format!==kn?ge!==null?F?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Se.width,Se.height,ge,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Se.width,Se.height,ge,ve,Se.data):t.texImage2D(n.TEXTURE_2D,xe,Ee,Se.width,Se.height,0,ge,ve,Se.data)}else if(x.isDataArrayTexture)if(F){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ee,J.width,J.height,J.depth),be)if(x.layerUpdates.size>0){const xe=ch(J.width,J.height,x.format,x.type);for(const me of x.layerUpdates){const Ue=J.data.subarray(me*xe/J.data.BYTES_PER_ELEMENT,(me+1)*xe/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,J.width,J.height,1,ge,ve,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,ve,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,ge,ve,J.data);else if(x.isData3DTexture)F?(Me&&t.texStorage3D(n.TEXTURE_3D,Le,Ee,J.width,J.height,J.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,ve,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,ge,ve,J.data);else if(x.isFramebufferTexture){if(Me)if(F)t.texStorage2D(n.TEXTURE_2D,Le,Ee,J.width,J.height);else{let xe=J.width,me=J.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ee,xe,me,0,ge,ve,null),xe>>=1,me>>=1}}else if(He.length>0){if(F&&Me){const xe=we(He[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ee,xe.width,xe.height)}for(let xe=0,me=He.length;xe<me;xe++)Se=He[xe],F?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ge,ve,Se):t.texImage2D(n.TEXTURE_2D,xe,Ee,ge,ve,Se);x.generateMipmaps=!1}else if(F){if(Me){const xe=we(J);t.texStorage2D(n.TEXTURE_2D,Le,Ee,xe.width,xe.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ve,J)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ge,ve,J);m(x)&&p(Y),L.__version=Q.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function P(S,x,U){if(x.image.length!==6)return;const Y=Je(S,x),ce=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const Q=i.get(ce);if(ce.version!==Q.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);const L=ut.getPrimaries(ut.workingColorSpace),O=x.colorSpace===ts?null:ut.getPrimaries(x.colorSpace),ne=x.colorSpace===ts||L===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let me=0;me<6;me++)!ae&&!J?ge[me]=_(x.image[me],!0,s.maxCubemapSize):ge[me]=J?x.image[me].image:x.image[me],ge[me]=pe(x,ge[me]);const ve=ge[0],Ee=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),He=b(x.internalFormat,Ee,Se,x.colorSpace),F=x.isVideoTexture!==!0,Me=Q.__version===void 0||Y===!0,be=ce.dataReady;let Le=w(x,ve);Be(n.TEXTURE_CUBE_MAP,x);let xe;if(ae){F&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,He,ve.width,ve.height);for(let me=0;me<6;me++){xe=ge[me].mipmaps;for(let Ue=0;Ue<xe.length;Ue++){const Ve=xe[Ue];x.format!==kn?Ee!==null?F?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ve.width,Ve.height,Ee,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,He,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ve.width,Ve.height,Ee,Se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,He,Ve.width,Ve.height,0,Ee,Se,Ve.data)}}}else{if(xe=x.mipmaps,F&&Me){xe.length>0&&Le++;const me=we(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,He,me.width,me.height)}for(let me=0;me<6;me++)if(J){F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ge[me].width,ge[me].height,Ee,Se,ge[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,ge[me].width,ge[me].height,0,Ee,Se,ge[me].data);for(let Ue=0;Ue<xe.length;Ue++){const st=xe[Ue].image[me].image;F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st.width,st.height,Ee,Se,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,He,st.width,st.height,0,Ee,Se,st.data)}}else{F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ee,Se,ge[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Ee,Se,ge[me]);for(let Ue=0;Ue<xe.length;Ue++){const Ve=xe[Ue];F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,Ee,Se,Ve.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,He,Ee,Se,Ve.image[me])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Q.__version=ce.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function q(S,x,U,Y,ce,Q){const L=r.convert(U.format,U.colorSpace),O=r.convert(U.type),ne=b(U.internalFormat,L,O,U.colorSpace),ae=i.get(x),J=i.get(U);if(J.__renderTarget=x,!ae.__hasExternalTextures){const ge=Math.max(1,x.width>>Q),ve=Math.max(1,x.height>>Q);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Q,ne,ge,ve,x.depth,0,L,O,null):t.texImage2D(ce,Q,ne,ge,ve,0,L,O,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ce,J.__webglTexture,0,_e(x)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ce,J.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(S,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const Y=x.depthTexture,ce=Y&&Y.isDepthTexture?Y.type:null,Q=y(x.stencilBuffer,ce),L=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=_e(x);ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,Q,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,O,Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,L,n.RENDERBUFFER,S)}else{const Y=x.textures;for(let ce=0;ce<Y.length;ce++){const Q=Y[ce],L=r.convert(Q.format,Q.colorSpace),O=r.convert(Q.type),ne=b(Q.internalFormat,L,O,Q.colorSpace),ae=_e(x);U&&ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,ne,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ue(x.depthTexture,0);const ce=Y.__webglTexture,Q=_e(x);if(x.depthTexture.format===xo)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(x.depthTexture.format===yo)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Pe(S){const x=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ce)};Y.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=Y}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const Y=S.texture.mipmaps;Y&&Y.length>0?fe(x.__webglFramebuffer[0],S):fe(x.__webglFramebuffer,S)}else if(U){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),le(x.__webglDepthbuffer[Y],S,!1);else{const ce=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Q)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),le(x.__webglDepthbuffer,S,!1);else{const ce=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(S,x,U){const Y=i.get(S);x!==void 0&&q(Y.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Pe(S)}function v(S){const x=S.texture,U=i.get(S),Y=i.get(x);S.addEventListener("dispose",I);const ce=S.textures,Q=S.isWebGLCubeRenderTarget===!0,L=ce.length>1;if(L||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),Q){U.__webglFramebuffer=[];for(let O=0;O<6;O++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[O]=[];for(let ne=0;ne<x.mipmaps.length;ne++)U.__webglFramebuffer[O][ne]=n.createFramebuffer()}else U.__webglFramebuffer[O]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let O=0;O<x.mipmaps.length;O++)U.__webglFramebuffer[O]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(L)for(let O=0,ne=ce.length;O<ne;O++){const ae=i.get(ce[O]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ee(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let O=0;O<ce.length;O++){const ne=ce[O];U.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[O]);const ae=r.convert(ne.format,ne.colorSpace),J=r.convert(ne.type),ge=b(ne.internalFormat,ae,J,ne.colorSpace,S.isXRRenderTarget===!0),ve=_e(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,U.__webglColorRenderbuffer[O])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),le(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x);for(let O=0;O<6;O++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)q(U.__webglFramebuffer[O][ne],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne);else q(U.__webglFramebuffer[O],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let O=0,ne=ce.length;O<ne;O++){const ae=ce[O],J=i.get(ae);let ge=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ge=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),Be(ge,ae),q(U.__webglFramebuffer,S,ae,n.COLOR_ATTACHMENT0+O,ge,0),m(ae)&&p(ge)}t.unbindTexture()}else{let O=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(O=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(O,Y.__webglTexture),Be(O,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)q(U.__webglFramebuffer[ne],S,x,n.COLOR_ATTACHMENT0,O,ne);else q(U.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,O,0);m(x)&&p(O),t.unbindTexture()}S.depthBuffer&&Pe(S)}function B(S){const x=S.textures;for(let U=0,Y=x.length;U<Y;U++){const ce=x[U];if(m(ce)){const Q=M(S),L=i.get(ce).__webglTexture;t.bindTexture(Q,L),p(Q),t.unbindTexture()}}}const $=[],K=[];function k(S){if(S.samples>0){if(ee(S)===!1){const x=S.textures,U=S.width,Y=S.height;let ce=n.COLOR_BUFFER_BIT;const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=i.get(S),O=x.length>1;if(O)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);const ne=S.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),O){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const J=i.get(x[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,ce,n.NEAREST),l===!0&&($.length=0,K.length=0,$.push(n.COLOR_ATTACHMENT0+ae),S.depthBuffer&&S.resolveDepthBuffer===!1&&($.push(Q),K.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),O)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const J=i.get(x[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _e(S){return Math.min(s.maxSamples,S.samples)}function ee(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function pe(S,x){const U=S.colorSpace,Y=S.format,ce=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==pn&&U!==ts&&(ut.getTransfer(U)===St?(Y!==kn||ce!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function we(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=ue,this.setTexture2DArray=te,this.setTexture3D=he,this.setTextureCube=j,this.rebindTextures=C,this.setupRenderTarget=v,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ee}function Tw(n,e){function t(i,s=ts){let r;const o=ut.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===Wu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Im)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cm)return n.BYTE;if(i===Pm)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===Gu)return n.INT;if(i===ws)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Io)return n.HALF_FLOAT;if(i===Dm)return n.ALPHA;if(i===Nm)return n.RGB;if(i===kn)return n.RGBA;if(i===xo)return n.DEPTH_COMPONENT;if(i===yo)return n.DEPTH_STENCIL;if(i===ju)return n.RED;if(i===$u)return n.RED_INTEGER;if(i===Um)return n.RG;if(i===Ku)return n.RG_INTEGER;if(i===qu)return n.RGBA_INTEGER;if(i===ga||i===_a||i===va||i===xa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Bc||i===kc||i===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===zc||i===Gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===zc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wc||i===Xc||i===jc||i===$c||i===Kc||i===qc||i===Yc||i===Qc||i===Zc||i===Jc||i===eu||i===tu||i===nu||i===iu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===iu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===su||i===ru||i===ou)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===su)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===au||i===lu||i===cu||i===uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===au)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
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

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Jm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new as({vertexShader:bw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cw extends Tr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Rw,p={},M=t.getContextAttributes();let b=null,y=null;const w=[],R=[],I=new lt;let D=null;const A=new un;A.viewport=new ht;const E=new un;E.viewport=new ht;const N=[A,E],W=new HA;let Z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let P=w[z];return P===void 0&&(P=new Bl,w[z]=P),P.getTargetRaySpace()},this.getControllerGrip=function(z){let P=w[z];return P===void 0&&(P=new Bl,w[z]=P),P.getGripSpace()},this.getHand=function(z){let P=w[z];return P===void 0&&(P=new Bl,w[z]=P),P.getHandSpace()};function ue(z){const P=R.indexOf(z.inputSource);if(P===-1)return;const q=w[P];q!==void 0&&(q.update(z.inputSource,z.frame,c||o),q.dispatchEvent({type:z.type,data:z.inputSource}))}function te(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",he);for(let z=0;z<w.length;z++){const P=R[z];P!==null&&(R[z]=null,w[z].disconnect(P))}Z=null,ie=null,m.reset();for(const z in p)delete p[z];e.setRenderTarget(b),h=null,d=null,f=null,s=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",te),s.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,le=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=M.stencil?yo:xo,le=M.stencil?vo:ws);const Pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Rs(d.textureWidth,d.textureHeight,{format:kn,type:mi,depthTexture:new Zm(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Rs(h.framebufferWidth,h.framebufferHeight,{format:kn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(z){for(let P=0;P<z.removed.length;P++){const q=z.removed[P],le=R.indexOf(q);le>=0&&(R[le]=null,w[le].disconnect(q))}for(let P=0;P<z.added.length;P++){const q=z.added[P];let le=R.indexOf(q);if(le===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=R.length){R.push(q),le=Pe;break}else if(R[Pe]===null){R[Pe]=q,le=Pe;break}if(le===-1)break}const fe=w[le];fe&&fe.connect(q)}}const j=new H,ye=new H;function Re(z,P,q){j.setFromMatrixPosition(P.matrixWorld),ye.setFromMatrixPosition(q.matrixWorld);const le=j.distanceTo(ye),fe=P.projectionMatrix.elements,Pe=q.projectionMatrix.elements,C=fe[14]/(fe[10]-1),v=fe[14]/(fe[10]+1),B=(fe[9]+1)/fe[5],$=(fe[9]-1)/fe[5],K=(fe[8]-1)/fe[0],k=(Pe[8]+1)/Pe[0],_e=C*K,ee=C*k,de=le/(-K+k),pe=de*-K;if(P.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(pe),z.translateZ(de),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),fe[10]===-1)z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const we=C+de,S=v+de,x=_e-pe,U=ee+(le-pe),Y=B*v/S*we,ce=$*v/S*we;z.projectionMatrix.makePerspective(x,U,Y,ce,we,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function De(z,P){P===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(P.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let P=z.near,q=z.far;m.texture!==null&&(m.depthNear>0&&(P=m.depthNear),m.depthFar>0&&(q=m.depthFar)),W.near=E.near=A.near=P,W.far=E.far=A.far=q,(Z!==W.near||ie!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Z=W.near,ie=W.far),W.layers.mask=z.layers.mask|6,A.layers.mask=W.layers.mask&3,E.layers.mask=W.layers.mask&5;const le=z.parent,fe=W.cameras;De(W,le);for(let Pe=0;Pe<fe.length;Pe++)De(fe[Pe],le);fe.length===2?Re(W,A,E):W.projectionMatrix.copy(A.projectionMatrix),Be(z,W,le)};function Be(z,P,q){q===null?z.matrix.copy(P.matrixWorld):(z.matrix.copy(q.matrixWorld),z.matrix.invert(),z.matrix.multiply(P.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=xr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(z){return p[z]};let Je=null;function tt(z,P){if(u=P.getViewerPose(c||o),g=P,u!==null){const q=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let le=!1;q.length!==W.cameras.length&&(W.cameras.length=0,le=!0);for(let v=0;v<q.length;v++){const B=q[v];let $=null;if(h!==null)$=h.getViewport(B);else{const k=f.getViewSubImage(d,B);$=k.viewport,v===0&&(e.setRenderTargetTextures(y,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(y))}let K=N[v];K===void 0&&(K=new un,K.layers.enable(v),K.viewport=new ht,N[v]=K),K.matrix.fromArray(B.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(B.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),v===0&&(W.matrix.copy(K.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),le===!0&&W.cameras.push(K)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const v=f.getDepthInformation(q[0]);v&&v.isValid&&v.texture&&m.init(v,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let v=0;v<q.length;v++){const B=q[v].camera;if(B){let $=p[B];$||($=new Jm,p[B]=$);const K=f.getCameraImage(B);$.sourceTexture=K}}}}for(let q=0;q<w.length;q++){const le=R[q],fe=w[q];le!==null&&fe!==void 0&&fe.update(le,P,c||o)}Je&&Je(z,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),g=null}const Ce=new ig;Ce.setAnimationLoop(tt),this.setAnimationLoop=function(z){Je=z},this.dispose=function(){}}}const _s=new ti,Pw=new it;function Iw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,y=M.envMapRotation;b&&(m.envMap.value=b,_s.copy(y),_s.x*=-1,_s.y*=-1,_s.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(_s)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const y=b.program;i.uniformBlockBinding(M,y)}function c(M,b){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(M,w);const R=e.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function u(M){const b=f();M.__bindingPointIndex=b;const y=n.createBuffer(),w=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],y=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=y.length;R<I;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let A=0,E=D.length;A<E;A++){const N=D[A];if(h(N,R,A,w)===!0){const W=N.__offset,Z=Array.isArray(N.value)?N.value:[N.value];let ie=0;for(let ue=0;ue<Z.length;ue++){const te=Z[ue],he=_(te);typeof te=="number"||typeof te=="boolean"?(N.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,W+ie,N.__data)):te.isMatrix3?(N.__data[0]=te.elements[0],N.__data[1]=te.elements[1],N.__data[2]=te.elements[2],N.__data[3]=0,N.__data[4]=te.elements[3],N.__data[5]=te.elements[4],N.__data[6]=te.elements[5],N.__data[7]=0,N.__data[8]=te.elements[6],N.__data[9]=te.elements[7],N.__data[10]=te.elements[8],N.__data[11]=0):(te.toArray(N.__data,ie),ie+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,b,y,w){const R=M.value,I=b+"_"+y;if(w[I]===void 0)return typeof R=="number"||typeof R=="boolean"?w[I]=R:w[I]=R.clone(),!0;{const D=w[I];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return w[I]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const b=M.uniforms;let y=0;const w=16;for(let I=0,D=b.length;I<D;I++){const A=Array.isArray(b[I])?b[I]:[b[I]];for(let E=0,N=A.length;E<N;E++){const W=A[E],Z=Array.isArray(W.value)?W.value:[W.value];for(let ie=0,ue=Z.length;ie<ue;ie++){const te=Z[ie],he=_(te),j=y%w,ye=j%he.boundary,Re=j+ye;y+=ye,Re!==0&&w-Re<he.storage&&(y+=w-Re),W.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=he.storage}}}const R=y%w;return R>0&&(y+=w-R),M.__size=y,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Dw{constructor(e={}){const{canvas:t=DM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Wt;let R=0,I=0,D=null,A=-1,E=null;const N=new ht,W=new ht;let Z=null;const ie=new Ze(0);let ue=0,te=t.width,he=t.height,j=1,ye=null,Re=null;const De=new ht(0,0,te,he),Be=new ht(0,0,te,he);let Je=!1;const tt=new ef;let Ce=!1,z=!1;const P=new it,q=new H,le=new ht,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function C(){return D===null?j:1}let v=i;function B(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zu}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",xe,!1),v===null){const G="webgl2";if(v=B(G,T),v===null)throw B(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,K,k,_e,ee,de,pe,we,S,x,U,Y,ce,Q,L,O,ne,ae,J,ge,ve,Ee,Se,He;function F(){$=new GT(v),$.init(),Ee=new Tw(v,$),K=new FT(v,$,e,Ee),k=new Sw(v,$),K.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),_e=new jT(v),ee=new uw,de=new Ew(v,$,k,ee,K,Ee,_e),pe=new BT(y),we=new zT(y),S=new ZA(v),Se=new NT(v,S),x=new WT(v,S,_e,Se),U=new KT(v,x,S,_e),J=new $T(v,K,de),O=new OT(ee),Y=new cw(y,pe,we,$,K,Se,O),ce=new Iw(y,ee),Q=new dw,L=new vw($),ae=new DT(y,pe,we,k,U,h,l),ne=new Mw(y,U,K),He=new Lw(v,_e,K,k),ge=new UT(v,$,_e),ve=new XT(v,$,_e),_e.programs=Y.programs,y.capabilities=K,y.extensions=$,y.properties=ee,y.renderLists=Q,y.shadowMap=ne,y.state=k,y.info=_e}F();const Me=new Cw(y,v);this.xr=Me,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(te,he,!1))},this.getSize=function(T){return T.set(te,he)},this.setSize=function(T,G,se=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,he=G,t.width=Math.floor(T*j),t.height=Math.floor(G*j),se===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(te*j,he*j).floor()},this.setDrawingBufferSize=function(T,G,se){te=T,he=G,j=se,t.width=Math.floor(T*se),t.height=Math.floor(G*se),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(De)},this.setViewport=function(T,G,se,oe){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,G,se,oe),k.viewport(N.copy(De).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,G,se,oe){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,G,se,oe),k.scissor(W.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){k.setScissorTest(Je=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Re=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,se=!0){let oe=0;if(T){let X=!1;if(D!==null){const Te=D.texture.format;X=Te===qu||Te===Ku||Te===$u}if(X){const Te=D.texture.type,Ne=Te===mi||Te===ws||Te===_o||Te===vo||Te===Wu||Te===Xu,ke=ae.getClearColor(),Oe=ae.getClearAlpha(),$e=ke.r,Ke=ke.g,We=ke.b;Ne?(g[0]=$e,g[1]=Ke,g[2]=We,g[3]=Oe,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=$e,_[1]=Ke,_[2]=We,_[3]=Oe,v.clearBufferiv(v.COLOR,0,_))}else oe|=v.COLOR_BUFFER_BIT}G&&(oe|=v.DEPTH_BUFFER_BIT),se&&(oe|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ae.dispose(),Q.dispose(),L.dispose(),ee.dispose(),pe.dispose(),we.dispose(),U.dispose(),Se.dispose(),He.dispose(),Y.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Fe),Me.removeEventListener("sessionend",ze),Xe.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=_e.autoReset,G=ne.enabled,se=ne.autoUpdate,oe=ne.needsUpdate,X=ne.type;F(),_e.autoReset=T,ne.enabled=G,ne.autoUpdate=se,ne.needsUpdate=oe,ne.type=X}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const G=T.target;G.removeEventListener("dispose",me),Ue(G)}function Ue(T){Ve(T),ee.remove(T)}function Ve(T){const G=ee.get(T).programs;G!==void 0&&(G.forEach(function(se){Y.releaseProgram(se)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,se,oe,X,Te){G===null&&(G=fe);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,ke=Ir(T,G,se,oe,X);k.setMaterial(oe,Ne);let Oe=se.index,$e=1;if(oe.wireframe===!0){if(Oe=x.getWireframeAttribute(se),Oe===void 0)return;$e=2}const Ke=se.drawRange,We=se.attributes.position;let at=Ke.start*$e,At=(Ke.start+Ke.count)*$e;Te!==null&&(at=Math.max(at,Te.start*$e),At=Math.min(At,(Te.start+Te.count)*$e)),Oe!==null?(at=Math.max(at,0),At=Math.min(At,Oe.count)):We!=null&&(at=Math.max(at,0),At=Math.min(At,We.count));const Ut=At-at;if(Ut<0||Ut===1/0)return;Se.setup(X,oe,ke,se,Oe);let It,Tt=ge;if(Oe!==null&&(It=S.get(Oe),Tt=ve,Tt.setIndex(It)),X.isMesh)oe.wireframe===!0?(k.setLineWidth(oe.wireframeLinewidth*C()),Tt.setMode(v.LINES)):Tt.setMode(v.TRIANGLES);else if(X.isLine){let je=oe.linewidth;je===void 0&&(je=1),k.setLineWidth(je*C()),X.isLineSegments?Tt.setMode(v.LINES):X.isLineLoop?Tt.setMode(v.LINE_LOOP):Tt.setMode(v.LINE_STRIP)}else X.isPoints?Tt.setMode(v.POINTS):X.isSprite&&Tt.setMode(v.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Lt=X._multiDrawCounts,dt=X._multiDrawCount,bn=Oe?S.get(Oe).bytesPerElement:1,Ps=ee.get(oe).currentProgram.getUniforms();for(let wn=0;wn<dt;wn++)Ps.setValue(v,"_gl_DrawID",wn),Tt.render(je[wn]/bn,Lt[wn])}else if(X.isInstancedMesh)Tt.renderInstances(at,Ut,X.count);else if(se.isInstancedBufferGeometry){const je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Lt=Math.min(se.instanceCount,je);Tt.renderInstances(at,Ut,Lt)}else Tt.render(at,Ut)};function st(T,G,se){T.transparent===!0&&T.side===ui&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,kt(T,G,se),T.side=Hi,T.needsUpdate=!0,kt(T,G,se),T.side=ui):kt(T,G,se)}this.compile=function(T,G,se=null){se===null&&(se=T),p=L.get(se),p.init(G),b.push(p),se.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==se&&T.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const oe=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const ke=Te[Ne];st(ke,se,X),oe.add(ke)}else st(Te,se,X),oe.add(Te)}),p=b.pop(),oe},this.compileAsync=function(T,G,se=null){const oe=this.compile(T,G,se);return new Promise(X=>{function Te(){if(oe.forEach(function(Ne){ee.get(Ne).currentProgram.isReady()&&oe.delete(Ne)}),oe.size===0){X(T);return}setTimeout(Te,10)}$.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let V=null;function Ae(T){V&&V(T)}function Fe(){Xe.stop()}function ze(){Xe.start()}const Xe=new ig;Xe.setAnimationLoop(Ae),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(T){V=T,Me.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},Me.addEventListener("sessionstart",Fe),Me.addEventListener("sessionend",ze),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(G),G=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,G,D),p=L.get(T,b.length),p.init(G),b.push(p),P.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),tt.setFromProjectionMatrix(P,fi,G.reversedDepth),z=this.localClippingEnabled,Ce=O.init(this.clippingPlanes,z),m=Q.get(T,M.length),m.init(),M.push(m),Me.enabled===!0&&Me.isPresenting===!0){const Te=y.xr.getDepthSensingMesh();Te!==null&&ct(Te,G,-1/0,y.sortObjects)}ct(T,G,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ye,Re),Pe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Pe&&ae.addToRenderList(m,T),this.info.render.frame++,Ce===!0&&O.beginShadows();const se=p.state.shadowsArray;ne.render(se,T,G),Ce===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Te=G.cameras;if(X.length>0)for(let Ne=0,ke=Te.length;Ne<ke;Ne++){const Oe=Te[Ne];pt(oe,X,T,Oe)}Pe&&ae.render(T);for(let Ne=0,ke=Te.length;Ne<ke;Ne++){const Oe=Te[Ne];ft(m,T,Oe,Oe.viewport)}}else X.length>0&&pt(oe,X,T,G),Pe&&ae.render(T),ft(m,T,G);D!==null&&I===0&&(de.updateMultisampleRenderTarget(D),de.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(y,T,G),Se.resetDefaultState(),A=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],Ce===!0&&O.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ct(T,G,se,oe){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){oe&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(P);const Ne=U.update(T),ke=T.material;ke.visible&&m.push(T,Ne,ke,se,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){const Ne=U.update(T),ke=T.material;if(oe&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),le.copy(Ne.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(P)),Array.isArray(ke)){const Oe=Ne.groups;for(let $e=0,Ke=Oe.length;$e<Ke;$e++){const We=Oe[$e],at=ke[We.materialIndex];at&&at.visible&&m.push(T,Ne,at,se,le.z,We)}}else ke.visible&&m.push(T,Ne,ke,se,le.z,null)}}const Te=T.children;for(let Ne=0,ke=Te.length;Ne<ke;Ne++)ct(Te[Ne],G,se,oe)}function ft(T,G,se,oe){const X=T.opaque,Te=T.transmissive,Ne=T.transparent;p.setupLightsView(se),Ce===!0&&O.setGlobalState(y.clippingPlanes,se),oe&&k.viewport(N.copy(oe)),X.length>0&&Ft(X,G,se),Te.length>0&&Ft(Te,G,se),Ne.length>0&&Ft(Ne,G,se),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function pt(T,G,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[oe.id]===void 0&&(p.state.transmissionRenderTarget[oe.id]=new Rs(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Io:mi,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Te=p.state.transmissionRenderTarget[oe.id],Ne=oe.viewport||N;Te.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);const ke=y.getRenderTarget(),Oe=y.getActiveCubeFace(),$e=y.getActiveMipmapLevel();y.setRenderTarget(Te),y.getClearColor(ie),ue=y.getClearAlpha(),ue<1&&y.setClearColor(16777215,.5),y.clear(),Pe&&ae.render(se);const Ke=y.toneMapping;y.toneMapping=os;const We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),p.setupLightsView(oe),Ce===!0&&O.setGlobalState(y.clippingPlanes,oe),Ft(T,se,oe),de.updateMultisampleRenderTarget(Te),de.updateRenderTargetMipmap(Te),$.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let At=0,Ut=G.length;At<Ut;At++){const It=G[At],Tt=It.object,je=It.geometry,Lt=It.material,dt=It.group;if(Lt.side===ui&&Tt.layers.test(oe.layers)){const bn=Lt.side;Lt.side=An,Lt.needsUpdate=!0,mn(Tt,se,oe,je,Lt,dt),Lt.side=bn,Lt.needsUpdate=!0,at=!0}}at===!0&&(de.updateMultisampleRenderTarget(Te),de.updateRenderTargetMipmap(Te))}y.setRenderTarget(ke,Oe,$e),y.setClearColor(ie,ue),We!==void 0&&(oe.viewport=We),y.toneMapping=Ke}function Ft(T,G,se){const oe=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Te=T.length;X<Te;X++){const Ne=T[X],ke=Ne.object,Oe=Ne.geometry,$e=Ne.group;let Ke=Ne.material;Ke.allowOverride===!0&&oe!==null&&(Ke=oe),ke.layers.test(se.layers)&&mn(ke,G,se,Oe,Ke,$e)}}function mn(T,G,se,oe,X,Te){T.onBeforeRender(y,G,se,oe,X,Te),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(y,G,se,oe,T,Te),X.transparent===!0&&X.side===ui&&X.forceSinglePass===!1?(X.side=An,X.needsUpdate=!0,y.renderBufferDirect(se,G,oe,X,T,Te),X.side=Hi,X.needsUpdate=!0,y.renderBufferDirect(se,G,oe,X,T,Te),X.side=ui):y.renderBufferDirect(se,G,oe,X,T,Te),T.onAfterRender(y,G,se,oe,X,Te)}function kt(T,G,se){G.isScene!==!0&&(G=fe);const oe=ee.get(T),X=p.state.lights,Te=p.state.shadowsArray,Ne=X.state.version,ke=Y.getParameters(T,X.state,Te,G,se),Oe=Y.getProgramCacheKey(ke);let $e=oe.programs;oe.environment=T.isMeshStandardMaterial?G.environment:null,oe.fog=G.fog,oe.envMap=(T.isMeshStandardMaterial?we:pe).get(T.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",me),$e=new Map,oe.programs=$e);let Ke=$e.get(Oe);if(Ke!==void 0){if(oe.currentProgram===Ke&&oe.lightsStateVersion===Ne)return vi(T,ke),Ke}else ke.uniforms=Y.getUniforms(T),T.onBeforeCompile(ke,y),Ke=Y.acquireProgram(ke,Oe),$e.set(Oe,Ke),oe.uniforms=ke.uniforms;const We=oe.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=O.uniform),vi(T,ke),oe.needsLights=dg(T),oe.lightsStateVersion=Ne,oe.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),oe.currentProgram=Ke,oe.uniformsList=null,Ke}function Gi(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Ma.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function vi(T,G){const se=ee.get(T);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function Ir(T,G,se,oe,X){G.isScene!==!0&&(G=fe),de.resetTextureUnits();const Te=G.fog,Ne=oe.isMeshStandardMaterial?G.environment:null,ke=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:pn,Oe=(oe.isMeshStandardMaterial?we:pe).get(oe.envMap||Ne),$e=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ke=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!se.morphAttributes.position,at=!!se.morphAttributes.normal,At=!!se.morphAttributes.color;let Ut=os;oe.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=y.toneMapping);const It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Tt=It!==void 0?It.length:0,je=ee.get(oe),Lt=p.state.lights;if(Ce===!0&&(z===!0||T!==E)){const sn=T===E&&oe.id===A;O.setState(oe,T,sn)}let dt=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Lt.state.version||je.outputColorSpace!==ke||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==Oe||oe.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==O.numPlanes||je.numIntersection!==O.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==Ke||je.morphTargets!==We||je.morphNormals!==at||je.morphColors!==At||je.toneMapping!==Ut||je.morphTargetsCount!==Tt)&&(dt=!0):(dt=!0,je.__version=oe.version);let bn=je.currentProgram;dt===!0&&(bn=kt(oe,G,X));let Ps=!1,wn=!1,Lr=!1;const Dt=bn.getUniforms(),Ln=je.uniforms;if(k.useProgram(bn.program)&&(Ps=!0,wn=!0,Lr=!0),oe.id!==A&&(A=oe.id,wn=!0),Ps||E!==T){k.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(v,"projectionMatrix",T.projectionMatrix),Dt.setValue(v,"viewMatrix",T.matrixWorldInverse);const gn=Dt.map.cameraPosition;gn!==void 0&&gn.setValue(v,q.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&Dt.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Dt.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,wn=!0,Lr=!0)}if(X.isSkinnedMesh){Dt.setOptional(v,X,"bindMatrix"),Dt.setOptional(v,X,"bindMatrixInverse");const sn=X.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Dt.setValue(v,"boneTexture",sn.boneTexture,de))}X.isBatchedMesh&&(Dt.setOptional(v,X,"batchingTexture"),Dt.setValue(v,"batchingTexture",X._matricesTexture,de),Dt.setOptional(v,X,"batchingIdTexture"),Dt.setValue(v,"batchingIdTexture",X._indirectTexture,de),Dt.setOptional(v,X,"batchingColorTexture"),X._colorsTexture!==null&&Dt.setValue(v,"batchingColorTexture",X._colorsTexture,de));const Dn=se.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&J.update(X,se,bn),(wn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Dt.setValue(v,"receiveShadow",X.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Ln.envMap.value=Oe,Ln.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&G.environment!==null&&(Ln.envMapIntensity.value=G.environmentIntensity),wn&&(Dt.setValue(v,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&fg(Ln,Lr),Te&&oe.fog===!0&&ce.refreshFogUniforms(Ln,Te),ce.refreshMaterialUniforms(Ln,oe,j,he,p.state.transmissionRenderTarget[T.id]),Ma.upload(v,Gi(je),Ln,de)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ma.upload(v,Gi(je),Ln,de),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Dt.setValue(v,"center",X.center),Dt.setValue(v,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(v,"normalMatrix",X.normalMatrix),Dt.setValue(v,"modelMatrix",X.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const sn=oe.uniformsGroups;for(let gn=0,tl=sn.length;gn<tl;gn++){const cs=sn[gn];He.update(cs,bn),He.bind(cs,bn)}}return bn}function fg(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function dg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,G,se){const oe=ee.get(T);oe.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ee.get(T.texture).__webglTexture=G,ee.get(T.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:se,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const se=ee.get(T);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0};const hg=v.createFramebuffer();this.setRenderTarget=function(T,G=0,se=0){D=T,R=G,I=se;let oe=!0,X=null,Te=!1,Ne=!1;if(T){const Oe=ee.get(T);if(Oe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(v.FRAMEBUFFER,null),oe=!1;else if(Oe.__webglFramebuffer===void 0)de.setupRenderTarget(T);else if(Oe.__hasExternalTextures)de.rebindTextures(T,ee.get(T.texture).__webglTexture,ee.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(Oe.__boundDepthTexture!==We){if(We!==null&&ee.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const Ke=ee.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?X=Ke[G][se]:X=Ke[G],Te=!0):T.samples>0&&de.useMultisampledRTT(T)===!1?X=ee.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[se]:X=Ke,N.copy(T.viewport),W.copy(T.scissor),Z=T.scissorTest}else N.copy(De).multiplyScalar(j).floor(),W.copy(Be).multiplyScalar(j).floor(),Z=Je;if(se!==0&&(X=hg),k.bindFramebuffer(v.FRAMEBUFFER,X)&&oe&&k.drawBuffers(T,X),k.viewport(N),k.scissor(W),k.setScissorTest(Z),Te){const Oe=ee.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,se)}else if(Ne){const Oe=G;for(let $e=0;$e<T.textures.length;$e++){const Ke=ee.get(T.textures[$e]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+$e,Ke.__webglTexture,se,Oe)}}else if(T!==null&&se!==0){const Oe=ee.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Oe.__webglTexture,se)}A=-1},this.readRenderTargetPixels=function(T,G,se,oe,X,Te,Ne,ke=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){k.bindFramebuffer(v.FRAMEBUFFER,Oe);try{const $e=T.textures[ke],Ke=$e.format,We=$e.type;if(!K.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-oe&&se>=0&&se<=T.height-X&&(T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+ke),v.readPixels(G,se,oe,X,Ee.convert(Ke),Ee.convert(We),Te))}finally{const $e=D!==null?ee.get(D).__webglFramebuffer:null;k.bindFramebuffer(v.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(T,G,se,oe,X,Te,Ne,ke=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(G>=0&&G<=T.width-oe&&se>=0&&se<=T.height-X){k.bindFramebuffer(v.FRAMEBUFFER,Oe);const $e=T.textures[ke],Ke=$e.format,We=$e.type;if(!K.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,at),v.bufferData(v.PIXEL_PACK_BUFFER,Te.byteLength,v.STREAM_READ),T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+ke),v.readPixels(G,se,oe,X,Ee.convert(Ke),Ee.convert(We),0);const At=D!==null?ee.get(D).__webglFramebuffer:null;k.bindFramebuffer(v.FRAMEBUFFER,At);const Ut=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await NM(v,Ut,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,at),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Te),v.deleteBuffer(at),v.deleteSync(Ut),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,se=0){const oe=Math.pow(2,-se),X=Math.floor(T.image.width*oe),Te=Math.floor(T.image.height*oe),Ne=G!==null?G.x:0,ke=G!==null?G.y:0;de.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,se,0,0,Ne,ke,X,Te),k.unbindTexture()};const pg=v.createFramebuffer(),mg=v.createFramebuffer();this.copyTextureToTexture=function(T,G,se=null,oe=null,X=0,Te=null){Te===null&&(X!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=X,X=0):Te=0);let Ne,ke,Oe,$e,Ke,We,at,At,Ut;const It=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(se!==null)Ne=se.max.x-se.min.x,ke=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,Ke=se.min.y,We=se.isBox3?se.min.z:0;else{const Dn=Math.pow(2,-X);Ne=Math.floor(It.width*Dn),ke=Math.floor(It.height*Dn),T.isDataArrayTexture?Oe=It.depth:T.isData3DTexture?Oe=Math.floor(It.depth*Dn):Oe=1,$e=0,Ke=0,We=0}oe!==null?(at=oe.x,At=oe.y,Ut=oe.z):(at=0,At=0,Ut=0);const Tt=Ee.convert(G.format),je=Ee.convert(G.type);let Lt;G.isData3DTexture?(de.setTexture3D(G,0),Lt=v.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(de.setTexture2DArray(G,0),Lt=v.TEXTURE_2D_ARRAY):(de.setTexture2D(G,0),Lt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,G.unpackAlignment);const dt=v.getParameter(v.UNPACK_ROW_LENGTH),bn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ps=v.getParameter(v.UNPACK_SKIP_PIXELS),wn=v.getParameter(v.UNPACK_SKIP_ROWS),Lr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,It.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,It.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,$e),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ke),v.pixelStorei(v.UNPACK_SKIP_IMAGES,We);const Dt=T.isDataArrayTexture||T.isData3DTexture,Ln=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Dn=ee.get(T),sn=ee.get(G),gn=ee.get(Dn.__renderTarget),tl=ee.get(sn.__renderTarget);k.bindFramebuffer(v.READ_FRAMEBUFFER,gn.__webglFramebuffer),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,tl.__webglFramebuffer);for(let cs=0;cs<Oe;cs++)Dt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ee.get(T).__webglTexture,X,We+cs),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ee.get(G).__webglTexture,Te,Ut+cs)),v.blitFramebuffer($e,Ke,Ne,ke,at,At,Ne,ke,v.DEPTH_BUFFER_BIT,v.NEAREST);k.bindFramebuffer(v.READ_FRAMEBUFFER,null),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||ee.has(T)){const Dn=ee.get(T),sn=ee.get(G);k.bindFramebuffer(v.READ_FRAMEBUFFER,pg),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,mg);for(let gn=0;gn<Oe;gn++)Dt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Dn.__webglTexture,X,We+gn):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Dn.__webglTexture,X),Ln?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,sn.__webglTexture,Te,Ut+gn):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,sn.__webglTexture,Te),X!==0?v.blitFramebuffer($e,Ke,Ne,ke,at,At,Ne,ke,v.COLOR_BUFFER_BIT,v.NEAREST):Ln?v.copyTexSubImage3D(Lt,Te,at,At,Ut+gn,$e,Ke,Ne,ke):v.copyTexSubImage2D(Lt,Te,at,At,$e,Ke,Ne,ke);k.bindFramebuffer(v.READ_FRAMEBUFFER,null),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Ln?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(Lt,Te,at,At,Ut,Ne,ke,Oe,Tt,je,It.data):G.isCompressedArrayTexture?v.compressedTexSubImage3D(Lt,Te,at,At,Ut,Ne,ke,Oe,Tt,It.data):v.texSubImage3D(Lt,Te,at,At,Ut,Ne,ke,Oe,Tt,je,It):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Te,at,At,Ne,ke,Tt,je,It.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Te,at,At,It.width,It.height,Tt,It.data):v.texSubImage2D(v.TEXTURE_2D,Te,at,At,Ne,ke,Tt,je,It);v.pixelStorei(v.UNPACK_ROW_LENGTH,dt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,bn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ps),v.pixelStorei(v.UNPACK_SKIP_ROWS,wn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Lr),Te===0&&G.generateMipmaps&&v.generateMipmap(Lt),k.unbindTexture()},this.initRenderTarget=function(T){ee.get(T).__webglFramebuffer===void 0&&de.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?de.setTextureCube(T,0):T.isData3DTexture?de.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?de.setTexture2DArray(T,0):de.setTexture2D(T,0),k.unbindTexture()},this.resetState=function(){R=0,I=0,D=null,k.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function Nh(n,e){if(e===rM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===fu||e===Fm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===fu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Nw extends Cr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kw(t)}),this.register(function(t){return new Hw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new Qw(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new Gw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new Vw(t)}),this.register(function(t){return new Kw(t)}),this.register(function(t){return new $w(t)}),this.register(function(t){return new Fw(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new Jw(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=lo.extractUrlBase(e);o=lo.resolveURL(c,this.path)}else o=lo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ng(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lg){try{o[ot.KHR_BINARY_GLTF]=new eR(e)}catch(f){s&&s(f);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new hR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(f){case ot.KHR_MATERIALS_UNLIT:o[f]=new Ow;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[f]=new tR(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[f]=new nR;break;case ot.KHR_MESH_QUANTIZATION:o[f]=new iR;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Uw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fw{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ya(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new OA(u),c.distance=f;break;case"spot":c=new UA(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Ow{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Bn}extendParams(e,t,i){const s=[];e.color=new Ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class Bw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class kw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(a,a)}return Promise.all(r)}}class Hw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Vw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class zw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Gw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ww{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}}class Xw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class jw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(r)}}class $w{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Kw{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class qw{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Yw{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class Qw{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class Zw{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,s.mode,s.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,s.mode,s.filter),h})})}else return null}}class Jw{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,h=[];for(const g of f){const _=new it,m=new H,p=new Qn,M=new H(1,1,1),b=new fA(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),b.setMatrixAt(y,_.compose(m,p,M));for(const y in l)if(y==="_COLOR_0"){const w=l[y];b.instanceColor=new hu(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Nt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),h.push(b)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const lg="glTF",Xr=12,Uh={JSON:1313821514,BIN:5130562};class eR{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Xr,r=new DataView(e,Xr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Uh.JSON){const c=new Uint8Array(e,Xr+o,a);this.content=i.decode(c)}else if(l===Uh.BIN){const c=Xr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=gu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=gu[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],h=ur[d.componentType];c[f]=h.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,d){s.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(h)},a,c,pn,d)})})}}class nR{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iR{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class cg extends Lo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,d=f*f,h=d*f,g=e*c,_=g-c,m=-2*h+3*d,p=h-d,M=1-m,b=p-d+f;for(let y=0;y!==a;y++){const w=o[_+y+a],R=o[_+y+l]*u,I=o[g+y+a],D=o[g+y]*u;r[y]=M*w+b*R+m*I+p*D}return r}}const sR=new Qn;class rR extends cg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return sR.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:dn,9729:fn,9984:Rm,9985:ma,9986:Kr,9987:Li},Oh={33071:ns,33648:La,10497:vr},Zl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oR={CUBICSPLINE:void 0,LINEAR:Ao,STEP:Mo},Jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new cr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),n.DefaultMaterial}function vs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ai(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lR(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(s){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function cR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uR(n){let e;const t=n.extensions&&n.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ec(t.attributes):e=n.indices+":"+ec(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ec(n.targets[i]);return e}function ec(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function _u(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dR=new it;class hR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Uw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new DA(this.options.manager):this.textureLoader=new kA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ng(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return vs(r,a,s),ai(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(lo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Zl[s.type],a=ur[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new nn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Zl[s.type],c=ur[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=s.byteOffset||0,h=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(h&&h!==f){const p=Math.floor(d/h),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(M);b||(_=new c(a,p*h,s.count*h/u),b=new oA(_,h/u),t.cache.add(M,b)),m=new Zu(b,l,d%h/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new nn(_,l,g);if(s.sparse!==void 0){const p=Zl.SCALAR,M=ur[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new M(o[1],b,s.sparse.count*p),R=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new nn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,D=w.length;I<D;I++){const A=w[I];if(m.setX(A,R[I*l]),l>=2&&m.setY(A,R[I*l+1]),l>=3&&m.setZ(A,R[I*l+2]),l>=4&&m.setW(A,R[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Fh[d.magFilter]||fn,u.minFilter=Fh[d.minFilter]||Li,u.wrapS=Oh[d.wrapS]||vr,u.wrapT=Oh[d.wrapT]||vr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==dn&&u.minFilter!==fn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new jt(_);m.needsUpdate=!0,d(m)}),t.load(lo.resolveURL(f,r.path),g,void 0,h)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),ai(f,o),f.userData.mimeType=o.mimeType||fR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Qm,hi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ym,hi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return cr}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const f=s[ot.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Ze(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Wt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ui);const u=r.alphaMode||Jl.OPAQUE;if(u===Jl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Jl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Bn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bn){const f=r.emissiveFactor;a.emissive=new Ze().setRGB(f[0],f[1],f[2],pn)}return r.emissiveTexture!==void 0&&o!==Bn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),ai(f,r),t.associations.set(f,{materials:e}),r.extensions&&vs(s,f,r),f})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=uR(c),f=s[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bh(new In,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?aR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const M=c[h];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new lA(_,M):new Xt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,Fm):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,fu));else if(m.mode===Fn.LINES)p=new mA(_,M);else if(m.mode===Fn.LINE_STRIP)p=new tf(_,M);else if(m.mode===Fn.LINE_LOOP)p=new gA(_,M);else if(m.mode===Fn.POINTS)p=new _A(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&cR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&vs(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return r.extensions&&vs(s,f[0],r),f[0];const d=new is;r.extensions&&vs(s,d,r),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(LM.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new af(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ai(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new it;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ju(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=s.channels.length;f<d;f++){const h=s.channels[f],g=s.samplers[h.sampler],_=h.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let b=0,y=d.length;b<y;b++){const w=d[b],R=h[b],I=g[b],D=_[b],A=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const E=i._createAnimationTracks(w,R,I,D,A);if(E)for(let N=0;N<E.length;N++)p.push(E[N])}const M=new bA(r,void 0,p);return ai(M,s),M})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,dR)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Km:c.length>1?u=new is:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ai(u,r),r.extensions&&vs(i,u,r),r.matrix!==void 0){const f=new it;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new is;i.name&&(r.name=s.createUniqueName(i.name)),ai(r,i),i.extensions&&vs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[d,h]of s.associations)(d instanceof hi||d instanceof jt)&&f.set(d,h);return u.traverse(d=>{const h=s.associations.get(d);h!=null&&f.set(d,h)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Qi[r.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Qi[r.path]){case Qi.weights:c=Mr;break;case Qi.rotation:c=Ar;break;case Qi.translation:case Qi.scale:c=Sr;break;default:i.itemSize===1?c=Mr:c=Sr;break}const u=s.interpolation!==void 0?oR[s.interpolation]:Ao,f=this._getArrayFromAccessor(i);for(let d=0,h=l.length;d<h;d++){const g=new c(l[d]+"."+Qi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=_u(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ar?rR:cg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pR(n,e,t){const i=e.attributes,s=new zi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=_u(ur[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=_u(ur[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new gi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Bh(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=gu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ut.workingColorSpace!==pn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),ai(n,e),pR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lR(n,e.targets,t):n})}const mR=240,gR=620,_R=1.45,vR=2.8,xR=.8,yR=46,MR=160,AR=94,SR=9,ER=42,TR=20,bR=4,wR=1,kh=1.55,RR=1.28,CR=4,PR=8,IR=.18,LR=-1260,DR=.32,NR=1.2,UR=.86,FR=.85,OR=70,BR=7.5,kR=16,HR=.82,VR=.3,zR=1.4,GR=.78,WR=30,tc=-1e3,Hh=550,XR=Sn({__name:"AlgoraveVisualContent",setup(n){const e=Em(),t=bt(null),i=bt(null),s=bt(null),r="./models/saturn_v1.gltf",o=Math.PI,a=new H(0,1,0),l=new H(0,0,1),c=new Qn().setFromAxisAngle(a,Math.PI),u=1/WR;let f=null,d=null,h=null,g=null,_=null,m=null,p=0,M=0,b=0,y=0,w=!1,R=[],I=null,D=[],A=null,E=null,N=null,W=-1,Z=null,ie=null;const ue=new ti,te=new Qn,he=new Qn;let j=0,ye=0,Re=0,De=0,Be=-1,Je=-1,tt=-1,Ce=0,z=0,P=0,q=0,le=-1,fe=0,Pe=0,C=0,v=0,B=0,$=0,K=.62,k=.24,_e=.34,ee=.28;Ro(()=>{e.attachConsumer(),Se(),be(),Ue()}),Co(()=>{_!==null&&(window.cancelAnimationFrame(_),_=null),m&&(m.disconnect(),m=null),st(),e.detachConsumer()});function de(){const V=t.value;if(!V){b=window.innerWidth,y=window.innerHeight;return}const Ae=Math.max(1,V.clientWidth),Fe=Math.max(1,V.clientHeight);b=Ae,y=Fe}function pe(){return Math.random()*2+1}function we(V,Ae,Fe){return Math.max(Ae,Math.min(Fe,V))}function S(V,Ae,Fe){return V+(Ae-V)*Fe}function x(V,Ae,Fe){const ze=((Ae-V)%1+1.5)%1-.5;return(V+ze*Fe+1)%1}function U(V){const Ae=-V,Fe=V;return Math.random()*(Fe-Ae)+Ae}function Y(V,Ae){let Fe=U(V),ze=U(Ae);for(;Fe>-30&&Fe<30;)Fe=U(V);for(;ze>-30&&ze<30;)ze=U(Ae);return[Fe,ze]}function ce(V){E=V.clone(),N=V.clone().premultiply(c)}function Q(){const V=e.playheadStep.value,Ae=e.snareSteps.value;if(V<0||V>=Ae.length)return Be=V,!1;const Fe=V!==Be;return Be=V,Fe&&!!Ae[V]}function L(){const V=e.playheadStep.value,Ae=e.kickSteps.value;if(V<0||V>=Ae.length)return Je=V,!1;const Fe=V!==Je;return Je=V,Fe&&!!Ae[V]}function O(){const V=e.playheadStep.value,Ae=e.hatSteps.value;if(V<0||V>=Ae.length)return tt=V,!1;const Fe=V!==tt;return tt=V,Fe&&!!Ae[V]}function ne(V,Ae){if(le<0)return le=V,fe=1,1;let Fe=V-le;return Fe<0&&(Fe+=Ae),Fe>0&&Fe<=CR?fe=Math.min(fe+1,PR):fe=1,le=V,1+(fe-1)*IR}function ae(V){const Ae=e.playheadStep.value,Fe=e.bassSteps.value,ze=e.leadSteps.value;if(Ae<0||Ae>=Fe.length||Ae>=ze.length)return{hue:.62+V.high*.02,intensity:.2+V.mid*.18,warmth:.28+V.low*.24,shimmer:.24+V.high*.3};const Xe=Fe[Ae],ct=ze[Ae],ft=!!Xe,pt=!!ct;if(ft&&pt&&Xe&&ct){const Ft=((ct.midi-Xe.midi)%12+12)%12,mn=[.58,.74,.78,.86,.83,.54,.92,.5,.88,.67,.72,.8],kt=we(Xe.velocity*.52+ct.velocity*.48,0,1);return{hue:mn[Ft]??.74,intensity:we(.45+kt*.45+V.mid*.25,0,1),warmth:we(.3+Xe.velocity*.36+V.low*.26,0,1),shimmer:we(.34+ct.velocity*.34+V.high*.38,0,1)}}return ft&&Xe?{hue:.56,intensity:we(.28+Xe.velocity*.36+V.low*.22,0,1),warmth:we(.48+Xe.velocity*.34+V.low*.2,0,1),shimmer:we(.2+V.high*.24,0,1)}:pt&&ct?{hue:.82,intensity:we(.3+ct.velocity*.38+V.high*.2,0,1),warmth:we(.2+V.low*.16,0,1),shimmer:we(.48+ct.velocity*.34+V.high*.2,0,1)}:{hue:.62,intensity:.18+V.mid*.15,warmth:.24+V.low*.22,shimmer:.2+V.high*.22}}function J(V,Ae,Fe){if(K=x(K,Ae.hue,.2),k=S(k,Ae.intensity,.16),_e=S(_e,Ae.warmth,.14),ee=S(ee,Ae.shimmer,.18),t.value&&(t.value.style.setProperty("--vapor-hue",`${Math.round(K*360)}`),t.value.style.setProperty("--vapor-energy",k.toFixed(3)),t.value.style.setProperty("--vapor-warmth",_e.toFixed(3)),t.value.style.setProperty("--vapor-shimmer",ee.toFixed(3))),D.length>=4&&(D[0].color.setHSL((K+.02)%1,.78,.62+ee*.1),D[1].color.setHSL((K+.5)%1,.86,.58+k*.12),D[2].color.setHSL((K+.14)%1,.82,.56+_e*.14),D[3].color.setHSL((K+.62)%1,.2+ee*.34,.82+k*.08)),s.value){const ze=.94+Math.sin(Fe*6.2+V.high*8)*.06;s.value.style.filter=`hue-rotate(${Math.round((K-.6)*300)}deg) saturate(${(1.06+k*.66).toFixed(3)}) brightness(${(ze+ee*.1).toFixed(3)})`}}function ge(V,Ae,Fe){if(!i.value)return;const ze=Math.sin(Ae*.11)*(18+V.low*34),Xe=Math.cos(Ae*.08)*(10+V.mid*20),ct=1.02+V.low*.04+Fe*.01+k*.02,ft=Math.sin(Ae*.12)*10+V.high*18+(K-.62)*280,pt=1.05+V.mid*.25+k*.6,Ft=.85+_e*.26;i.value.style.transform=`translate(${ze}px, ${Xe}px) scale(${ct})`,i.value.style.filter=`hue-rotate(${ft}deg) saturate(${pt}) brightness(${Ft})`,i.value.style.opacity=String(.3+V.low*.12+V.beat*.06+ee*.08)}function ve(V,Ae=1){if(R.length===0)return;const Fe=(yR+V.high*MR+V.mid*AR)*Ae;for(let ze=0;ze<R.length;ze+=1){const Xe=R[ze],ct=.78+Math.random()*.62;if(Xe.position.z+=Fe*ct,Xe.position.z>Hh){const[ft,pt]=Y(b,y);Xe.position.z=tc,Xe.position.x=ft,Xe.position.y=pt}}}function Ee(V,Ae=1){if(R.length===0)return;const Fe=(SR+V.high*ER+V.mid*TR)*Ae;for(let ze=0;ze<R.length;ze+=1){const Xe=R[ze],ct=.74+Math.random()*.58;if(Xe.position.z-=Fe*ct,Xe.position.z<LR){const[ft,pt]=Y(b,y);Xe.position.z=tc+Math.random()*140,Xe.position.x=ft,Xe.position.y=pt}}}function Se(){const V=t.value;if(!V)return;de(),d=new rA,f=new Dw({alpha:!0,antialias:!1}),f.outputColorSpace=Wt,f.setPixelRatio(Math.min(window.devicePixelRatio||1,.9)),f.setSize(b,y,!1),f.domElement.classList.add("three-canvas"),V.appendChild(f.domElement),g=new VA;const Ae=new ya(16777215,3),Fe=new ya(16777215,2),ze=new ya(16777215,2);Ae.position.set(-10,46,600),Fe.position.set(-200,46,500),ze.position.set(200,46,500),d.add(Ae,Fe,ze),h=new un(70,b/y,.1,1200),h.position.set(0,0,500),h.lookAt(0,0,470),He(),F(),Me(),s.value&&(s.value.style.opacity="0.14")}function He(){if(!d)return;const V=new Bn({color:7707903}),Ae=new Bn({color:16741754}),Fe=new Bn({color:15589691}),ze=new Bn({color:16777215});D=[V,Ae,Fe,ze];const Xe=new In,ct=new Float32Array([-1,-1,1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1]);Xe.setAttribute("position",new nn(ct,3)),I=Xe;const ft=[];for(let pt=-800;pt<800;pt+=10){let Ft=ze;pt>0&&pt<100?Ft=Ae:pt>100&&pt<200?Ft=Fe:pt>200&&pt<300&&(Ft=V);const mn=new Xt(Xe,Ft),[kt,Gi]=Y(b,y);mn.position.set(kt,Gi,pt);const vi=pe(),Ir=vi<.5?.5:vi;mn.scale.set(Ir,Ir,Ir),d.add(mn),ft.push(mn)}R=ft}function F(){if(!d)return;const V=new is,Ae=new Xt(new nf(7.2,34,6),new cr({color:13490409,emissive:1717592,emissiveIntensity:.28,metalness:.08,roughness:.56}));Ae.rotation.x=Math.PI*.5,Ae.position.z=1.4,V.add(Ae);const Fe=new cr({color:12109534,emissive:1192790,emissiveIntensity:.2,metalness:.08,roughness:.6}),ze=new Xt(new br(19,1,10),Fe);ze.position.set(-10,0,-8),ze.rotation.z=.1,V.add(ze);const Xe=ze.clone();Xe.position.x=10,Xe.rotation.z=-.1,V.add(Xe);const ct=new Xt(new Za(3.6,4.4,26,12),new cr({color:9216966,emissive:1191760,emissiveIntensity:.2,metalness:.08,roughness:.6}));ct.rotation.x=Math.PI*.5,ct.position.z=-7.5,V.add(ct);const ft=new Xt(new sf(4.2,16,12),new Bn({color:8385791,transparent:!0,opacity:.34,blending:Tc,depthWrite:!1}));ft.position.z=-20,V.add(ft),ie=ft,V.position.set(2.5,-3.5,510),V.rotateZ(3.5),V.rotateOnWorldAxis(a,o),V.visible=!0,ce(V.quaternion),d.add(V),Z=V,A=V}function Me(){if(!d||!r||w)return;const V=M;w=!0,new Nw().load(r,Fe=>{if(V!==M||!d)return;const ze=Fe.scene;ze.position.set(2.5,-3.5,510),ze.rotateZ(3.5),ze.rotateOnWorldAxis(a,o),ze.visible=!0,ce(ze.quaternion);const Xe=ze.children[1]?.material?.map;Xe&&(Xe.magFilter=fn,Xe.minFilter=fn,Xe.generateMipmaps=!1),Z&&d&&(d.remove(Z),Ve(Z),Z=null,ie=null),A=ze,d?.add(ze)},void 0,()=>{V===M&&(w=!1)})}function be(){const V=t.value;V&&(m=new ResizeObserver(()=>{Le()}),m.observe(V))}function Le(){!f||!h||(de(),f.setSize(b,y,!1),h.aspect=b/y,h.updateProjectionMatrix())}function xe(V,Ae,Fe,ze){if(Fe||R.length===0)return;const Xe=(1.25+V.low*8+V.beat*4+V.mid*1.6)*Ae;for(let ct=0;ct<R.length;ct+=1){const ft=R[ct];if(ze>.001&&(ft.position.x+=(Math.random()-.5)*1.25*ze,ft.position.y+=(Math.random()-.5)*.9*ze),ft.position.z+=Xe+ct*.05*Ae,ft.position.z>Hh){const[pt,Ft]=Y(b,y);ft.position.z=tc,ft.position.x=pt,ft.position.y=Ft}}}function me(V,Ae,Fe,ze,Xe,ct){if(!A)return;const ft=Re>0?Math.min(.05,Math.max(.001,Ae-Re)):u;Re=Ae,Fe&&(ye=Math.min(ye+2.4,4.8)),ye*=.9;const pt=.45+V.high*3.4+V.mid*1.2+V.low*.8+ye;j=(j+pt*ft)%(Math.PI*2);const Ft=W<0?E:N;Ft&&(ue.set(Math.sin(Ae*.95+j*.3)*(.03+V.mid*.05),Math.sin(Ae*.42)*(.015+V.low*.03),Math.sin(Ae*.62)*(.06+V.high*.08)),te.setFromEuler(ue),he.setFromAxisAngle(l,j),A.quaternion.copy(Ft).multiply(he).multiply(te));const mn=(.045+V.low*.34+V.beat*.14)*(1+(ze-1)*.2+ct*.34);if(Xe||(A.position.z+=mn*W,A.position.x=2.5+Math.sin(Ae*.72)*(1.5+V.mid*3.1),A.position.y=-3.5+Math.cos(Ae*.93)*(1+V.high*2.4),W<0&&A.position.z<=mR?(W=1,ye=Math.min(ye+1.1,4.8)):W>0&&A.position.z>=gR&&(W=-1,ye=Math.min(ye+1.1,4.8))),ie){const kt=1+V.low*1.2+V.beat*.28;ie.scale.set(kt,kt,kt),ie.material.opacity=.14+V.low*.5+V.beat*.2,ie.material.color.setHSL((.52+$*.0018)%1,.84,.7)}}function Ue(){if(!f||!d||!h||!g){_=window.requestAnimationFrame(Ue);return}const V=g.getElapsedTime();if(V-p<u){_=window.requestAnimationFrame(Ue);return}p=V;const Ae=e.sampleAudioFrame(),Fe=ae(Ae);J(Ae,Fe,V);const ze=Ae.beat>1.02&&De<=1.02;if(De=Ae.beat,ze&&(B=1),L()&&(Pe=Math.min(Pe+DR,NR),C=Math.min(C+BR,kR),B=Math.min(B+FR,2.2)),O()&&(v=Math.min(v+VR,zR)),Q()){z+=1;const kt=e.playheadStep.value,Gi=ne(kt<0?0:kt,Math.max(1,e.snareSteps.value.length)),vi=z%bR===0;Ee(Ae,(vi?RR:1)*Gi),q=vi?kh*Gi:Gi,vi&&(P=wR)}let pt=!1;if(P>0)P-=1,pt=!0;else if(q>0){const kt=q;q=0,Ce=Math.min(Ce+_R*kt,vR*kh),ve(Ae,kt)}const Ft=pt?0:1+Ce;B*=.88,$=($+.14+Ae.high*1.2)%360,xe(Ae,Ft,pt,v),me(Ae,V,ze,Ft,pt,Pe),h.position.x=Math.sin(V*.22)*(.6+Ae.mid*1.8)+B*.25,h.position.y=Math.cos(V*.18)*(.4+Ae.high*1.2)-Ae.low*.3,h.position.z=500-Ae.low*11-B*4;const mn=Math.max(42,Math.min(80,OR-C));if(Math.abs(h.fov-mn)>.01&&(h.fov=mn,h.updateProjectionMatrix()),h.lookAt(0,0,470),ge(Ae,V,v),s.value){s.value.style.opacity=String(.08+Ae.high*.2+Ae.beat*.08+v*.05);const kt=Math.sin(V*120)*v*.9;s.value.style.transform=`translate(${kt}px, ${V*36%24}px)`}Ce*=xR,Ce<.02&&(Ce=0),Pe*=UR,Pe<.02&&(Pe=0),C*=HR,C<.02&&(C=0),v*=GR,v<.01&&(v=0),f.render(d,h),_=window.requestAnimationFrame(Ue)}function Ve(V){V.traverse(Ae=>{const Fe=Ae;Fe.geometry&&Fe.geometry.dispose();const ze=Fe.material;if(!ze)return;if(Array.isArray(ze)){for(const ct of ze){const ft=ct;ft.map&&ft.map.dispose(),ct.dispose()}return}const Xe=ze;Xe.map&&Xe.map.dispose(),ze.dispose()})}function st(){if(M+=1,d){for(const V of R)d.remove(V);A&&d.remove(A)}A&&Ve(A),I&&I.dispose();for(const V of D)V.dispose();if(f){f.dispose();const V=f.domElement;V.parentNode&&V.parentNode.removeChild(V)}R=[],I=null,D=[],A=null,E=null,N=null,W=-1,Z=null,ie=null,f=null,d=null,h=null,g=null,De=0,Be=-1,Je=-1,tt=-1,Ce=0,z=0,P=0,q=0,le=-1,fe=0,Pe=0,C=0,v=0,B=0,$=0,K=.62,k=.24,_e=.34,ee=.28,p=0,j=0,ye=0,Re=0,w=!1}return(V,Ae)=>(Ge(),qe("div",{ref_key:"_containerRef",ref:t,class:"visual-stage"},[re("div",{ref_key:"_nebulaRef",ref:i,class:"nebula-layer"},null,512),re("div",{ref_key:"_overlayRef",ref:s,class:"scan-overlay"},null,512),Ae[0]||(Ae[0]=re("div",{class:"credit"},[or(" inspired by "),re("a",{href:"https://saturn.fm/",target:"_blank",rel:"noopener noreferrer"}," https://saturn.fm/ ")],-1))],512))}}),jR=Tn(XR,[["__scopeId","data-v-204d0373"]]),$R={},KR=""+new URL("Icon-C58L2uZH.png",import.meta.url).href,qR={class:"old-home",id:"taru-home"};function YR(n,e,t,i,s,r){return Ge(),qe("article",qR,[...e[0]||(e[0]=[Uu('<div class="welcome-line" data-v-f5527552>「taruの電脳館」へようこそ！　音とプログラムとインターネットのホームページです。</div><div class="frames" data-v-f5527552><nav class="side-frame" aria-label="館内メニュー" data-v-f5527552><h2 data-v-f5527552>taruの電脳館</h2><h3 data-v-f5527552>館内の御案内</h3><a href="#taru-home" data-v-f5527552>電脳館メイン</a><a href="#taru-profile" data-v-f5527552>管理人の紹介</a><h3 class="green" data-v-f5527552>電脳館より</h3><a href="#taru-news" data-v-f5527552>御来館の皆様へ</a><h3 class="green" data-v-f5527552>御案内</h3><a href="#taru-profile" data-v-f5527552>初めて御来館の方へ</a><a href="#taru-interests" data-v-f5527552>管理人の興味</a><a href="#taru-works" data-v-f5527552>プログラム展示室</a><a href="#taru-works" data-v-f5527552>音と映像の実験室</a><a href="#taru-links" data-v-f5527552>リンクのページ</a><h3 class="green" data-v-f5527552>作品展示室</h3><a href="https://taruscript.github.io/distortion_web/" target="_blank" rel="noopener noreferrer" data-v-f5527552>Distortion</a><a href="https://taruscript.github.io/synthwave_landscape/" target="_blank" rel="noopener noreferrer" data-v-f5527552>Synthwave Landscape</a><a href="https://taruscript.github.io/question/" target="_blank" rel="noopener noreferrer" data-v-f5527552>？？？</a><h3 class="orange" data-v-f5527552>管理人データベース</h3><a href="#taru-profile" data-v-f5527552>プロフィール</a><h3 class="orange" data-v-f5527552>所属・活動</h3><a href="#taru-institution" data-v-f5527552>研究グループ</a><a href="#taru-news" data-v-f5527552>館内のお願い</a><h3 class="orange" data-v-f5527552>外部リンク</h3><a href="https://github.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-f5527552>GitHub</a><a href="https://twitter.com/7aru7aru" target="_blank" rel="noopener noreferrer" data-v-f5527552>Twitter / X</a><a href="mailto:taru@sfc.wide.ad.jp" data-v-f5527552>管理人にメール</a><div class="side-note" data-v-f5527552>リンクはご自由にどうぞ<br data-v-f5527552>無断リンク歓迎です(^^</div><div class="mini-banner" data-v-f5527552>個人ホームページ<br data-v-f5527552><b data-v-f5527552>手作り推進委員会</b></div></nav><div class="main-frame" data-v-f5527552><header class="masthead" data-v-f5527552><div class="picture" data-v-f5527552><img src="'+KR+'" alt="管理人taruのプロフィール画像" width="240" height="240" data-v-f5527552><span data-v-f5527552>ようこそ！ ごゆっくりどうぞ。</span></div><div class="site-intro" data-v-f5527552><h1 data-v-f5527552>taruの電脳館</h1><p data-v-f5527552>Web Master　taru<br data-v-f5527552>Takuto HONDA<br data-v-f5527552><a href="mailto:taru@sfc.wide.ad.jp" data-v-f5527552>taru@sfc.wide.ad.jp</a></p><div class="status-bar" data-v-f5527552>☆ My Homepage Status: <b data-v-f5527552>工事中</b></div><p data-v-f5527552>プログラムと音楽と映像。<br data-v-f5527552>いろいろ置いてあります。<br data-v-f5527552>お好きなところからどうぞ！</p><p class="intro-note" data-v-f5527552>※作品はデスクトップの<br data-v-f5527552>アイコンからも開けます。</p></div></header><section id="taru-news" data-v-f5527552><h2 data-v-f5527552>～ 御来館の皆様へ ～</h2><div class="two-columns" data-v-f5527552><div data-v-f5527552><p class="red" data-v-f5527552>祝！ インターネット開通！！</p><p data-v-f5527552>遠い電子の海から、ようこそ。<br data-v-f5527552>何もないところですが、<br data-v-f5527552>どうぞ御ゆっくりお過ごし下さい。</p><p data-v-f5527552>お茶などは出ません。<br data-v-f5527552>各自で御用意をお願い致します。</p></div><div data-v-f5527552><p data-v-f5527552>このホームページは永遠に工事中です。<br data-v-f5527552>完成の予定は特にありません。</p><p data-v-f5527552>キリ番を踏んでも何も起こりません。<br data-v-f5527552>心の中でそっとお祝いして下さい。</p><p class="small" data-v-f5527552>※ 電子の海で迷子になられた方は、<br data-v-f5527552>来た道をお気をつけてお戻り下さい。</p></div></div></section><section id="taru-profile" data-v-f5527552><h2 data-v-f5527552>管理人のプロフィール</h2><p data-v-f5527552>このページを作っている人の紹介です。</p><table class="profile-table" data-v-f5527552><tbody data-v-f5527552><tr data-v-f5527552><th scope="row" data-v-f5527552>名前</th><td data-v-f5527552>Takuto HONDA</td></tr><tr data-v-f5527552><th scope="row" data-v-f5527552>ハンドルネーム</th><td data-v-f5527552>LoginName: taru</td></tr><tr data-v-f5527552><th scope="row" data-v-f5527552>所属</th><td data-v-f5527552>慶應義塾大学 環境情報学部</td></tr><tr data-v-f5527552><th scope="row" data-v-f5527552>興味のあること</th><td data-v-f5527552>Blockchain / セキュリティ</td></tr></tbody></table><div id="taru-institution" data-v-f5527552><div id="institution" data-v-f5527552><p data-v-f5527552>所属グループのページはこちらです。</p><a href="https://delight.sfc.wide.ad.jp/ja/" target="_blank" rel="noopener noreferrer" data-v-f5527552>Delight（慶應義塾大学 SFC バンミーター合同研究会）</a><br data-v-f5527552><a href="https://www.wide.ad.jp" target="_blank" rel="noopener noreferrer" data-v-f5527552>WIDEプロジェクト</a></div></div></section><section id="taru-interests" data-v-f5527552><h2 data-v-f5527552>管理人の興味について</h2><div id="interesting" data-v-f5527552><ul data-v-f5527552><li data-v-f5527552><h3 data-v-f5527552>Blockchain</h3><p data-v-f5527552>インターネットの仕組みに興味があります。</p></li><li data-v-f5527552><h3 data-v-f5527552>セキュリティ</h3><p data-v-f5527552>コンピュータの仕組みをあれこれ。</p></li></ul></div></section><section id="taru-works" data-v-f5527552><h2 data-v-f5527552>電脳館・作品展示室</h2><p class="red" data-v-f5527552>各タイトルをクリックすると作品が開きます！</p><table class="works-table" data-v-f5527552><tbody data-v-f5527552><tr data-v-f5527552><th scope="row" data-v-f5527552><a href="https://taruscript.github.io/distortion_web/" target="_blank" rel="noopener noreferrer" data-v-f5527552>Distortion</a></th><td data-v-f5527552>ビジュアルアート作品</td></tr><tr data-v-f5527552><th scope="row" data-v-f5527552><a href="https://taruscript.github.io/synthwave_landscape/" target="_blank" rel="noopener noreferrer" data-v-f5527552>Synthwave Landscape</a></th><td data-v-f5527552>シンセウェーブの風景</td></tr><tr data-v-f5527552><th scope="row" data-v-f5527552><a href="https://taruscript.github.io/question/" target="_blank" rel="noopener noreferrer" data-v-f5527552>？？？</a></th><td data-v-f5527552>開いてからのお楽しみ。</td></tr><tr data-v-f5527552><th scope="row" data-v-f5527552>Algorave</th><td data-v-f5527552>音と映像の実験。<br data-v-f5527552>デスクトップからどうぞ。</td></tr></tbody></table></section><section id="taru-links" data-v-f5527552><h2 data-v-f5527552>リンクのページ</h2><p data-v-f5527552>管理人はこのあたりにも出没します。</p><div class="link-banners" data-v-f5527552><a class="text-banner code" href="https://github.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-f5527552>GitHub<small data-v-f5527552>taruscript のプログラム置き場</small></a><a class="text-banner twitter" href="https://twitter.com/7aru7aru" target="_blank" rel="noopener noreferrer" data-v-f5527552>Twitter / X<small data-v-f5527552>@7aru7aru</small></a></div><p data-v-f5527552>当ホームページはリンクフリーです。<br data-v-f5527552>御意見・御感想は <a href="mailto:taru@sfc.wide.ad.jp" data-v-f5527552>管理人</a> まで。</p></section><footer data-v-f5527552><div class="construction" data-v-f5527552>／／／ ただいま工事中 ／／／</div><p data-v-f5527552>まだまだ何もありませんが、よろしくお願いします。</p><a href="#taru-home" data-v-f5527552>［ このページの先頭へ ］</a><hr data-v-f5527552><small data-v-f5527552>taruの電脳館 / Web Master : taru</small></footer></div></div>',2)])])}const QR=Tn($R,[["render",YR],["__scopeId","data-v-f5527552"]]),Qs=[{id:"mitou",title:"未踏IT人材発掘・育成事業",year:"2024",kind:"採択",description:"2024年度 未踏IT人材発掘・育成事業に採択。",url:"https://www.ipa.go.jp/jinzai/mitou/it/2024/gaiyou-in-1.html"},{id:"passkeys",title:"Passkeys Hackathon Tokyo",year:"2024",kind:"優勝",description:"Passkeys Hackathon Tokyo 2024で優勝。",url:"https://web.dev/blog/passkeys-hackathon-tokyo?hl=en"},{id:"sechack",title:"SecHack365",year:"2020",kind:"表現駆動コース",description:"SecHack365 2020 表現駆動コースの活動記録。",url:"https://sechack365.nict.go.jp/achievement/2020/index.html"},{id:"iot2019",title:"Web X IoT メイカーズチャレンジ",year:"2019",kind:"群馬",description:"Web X IoT メイカーズチャレンジ 2019 in 群馬の活動記録。",url:"https://webiotmakers.github.io/2019/gunma/"},{id:"iot2018",title:"Web X IoT メイカーズチャレンジ",year:"2018",kind:"前橋",description:"Web X IoT メイカーズチャレンジ 2018 in 前橋の活動記録。",url:"https://webiotmakers.github.io/2018/maebashi/"}],ZR=Sn({data(){return{folder:"all",selectedId:Qs[0].id}},computed:{folders(){return[{id:"all",label:"すべて",count:Qs.length},...["2024","2020","2019","2018"].map(n=>({id:n,label:n,count:Qs.filter(e=>e.year===n).length}))]},visibleEntries(){return Qs.filter(n=>this.folder==="all"||n.year===this.folder)},selected(){return Qs.find(n=>n.id===this.selectedId)??Qs[0]}},methods:{selectFolder(n){this.folder=n,this.visibleEntries.some(e=>e.id===this.selectedId)||(this.selectedId=this.visibleEntries[0].id)}}}),ug="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXBwzSK/XgAAAAjElEQVRIx+2VQQrAIAwE1+K/oz9rX5ZeiopaTazFHronETMOIRCDK44hiDP5jY1H6pZ7gJEhNsm/iQHAjwBUIJSAEmF15aEBoRcqAwKDwdiTu8LAdxB5bP9JOwoDkgFeNKjD5xvc2wh7oLVRGNSR8w2+PImr54BGAP8cyLLeQL1YGgbHECDuWtF6LytPTdMhXzC2L6sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDc6MTItMDQ6MDDinXh7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA3OjEyLTA0OjAwk8DAxwAAAABJRU5ErkJggg==",JR={class:"explorer","aria-label":"実績エクスプローラー"},e1={class:"toolbar"},t1=["disabled"],n1={class:"address"},i1={class:"address-path"},s1={key:0},r1={class:"workspace"},o1={class:"folders","aria-label":"実績のフォルダー"},a1=["aria-pressed","onClick"],l1={class:"count"},c1={class:"files"},u1={"aria-label":"実績ファイル"},f1=["aria-pressed","onClick"],d1={class:"file-name"},h1={class:"file-year"},p1={class:"preview","aria-label":"選択した実績の詳細","aria-live":"polite"},m1={class:"preview-label"},g1={class:"badge"},_1=["href"],v1={class:"status","aria-live":"polite"};function x1(n,e,t,i,s,r){return Ge(),qe("section",JR,[re("div",e1,[re("button",{type:"button",disabled:n.folder==="all",onClick:e[0]||(e[0]=o=>n.selectFolder("all"))},"↑ すべての実績",8,t1),e[1]||(e[1]=re("span",{class:"toolbar-caption"},"Achievements Explorer",-1))]),re("div",n1,[e[3]||(e[3]=re("span",null,"アドレス",-1)),re("span",i1,[e[2]||(e[2]=or("C:\\taru\\Achievements",-1)),n.folder!=="all"?(Ge(),qe("span",s1,"\\"+_t(n.folder),1)):xn("",!0)])]),re("div",r1,[re("nav",o1,[e[5]||(e[5]=re("p",{class:"pane-label"},"フォルダー",-1)),(Ge(!0),qe(wt,null,Un(n.folders,o=>(Ge(),qe("button",{key:o.id,type:"button",class:Mn({active:n.folder===o.id}),"aria-pressed":n.folder===o.id,onClick:a=>n.selectFolder(o.id)},[e[4]||(e[4]=re("span",{class:"folder-icon","aria-hidden":"true"},null,-1)),or(_t(o.label),1),re("span",l1,_t(o.count),1)],10,a1))),128))]),re("div",c1,[e[7]||(e[7]=re("div",{class:"list-heading"},[re("span",null,"名前"),re("span",null,"年")],-1)),re("ul",u1,[(Ge(!0),qe(wt,null,Un(n.visibleEntries,o=>(Ge(),qe("li",{key:o.id},[re("button",{type:"button",class:Mn(["file",{selected:n.selected.id===o.id}]),"aria-pressed":n.selected.id===o.id,onClick:a=>n.selectedId=o.id},[e[6]||(e[6]=re("img",{src:ug,alt:"",width:"28",height:"28"},null,-1)),re("span",d1,[or(_t(o.title),1),re("small",null,_t(o.kind),1)]),re("span",h1,_t(o.year),1)],10,f1)]))),128))]),re("section",p1,[re("div",m1,"FILE PREVIEW / "+_t(n.selected.year),1),re("h2",null,_t(n.selected.title),1),re("span",g1,_t(n.selected.kind),1),re("p",null,_t(n.selected.description),1),re("a",{href:n.selected.url,target:"_blank",rel:"noopener noreferrer"},"公式ページを開く ↗",8,_1)])])]),re("footer",v1,[re("span",null,_t(n.visibleEntries.length)+" 個のオブジェクト",1),e[8]||(e[8]=re("span",null,"1 個選択",-1))])])}const y1=Tn(ZR,[["render",x1],["__scopeId","data-v-d4d11dfa"]]),M1={},A1={class:"skills"};function S1(n,e,t,i,s,r){return Ge(),qe("div",A1,[...e[0]||(e[0]=[Uu('<h1 data-v-1e54c47d>Skills</h1><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Python</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:90%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>JavaScript</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:90%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>HTML / CSS</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:80%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>TypeScript</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:65%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Rust</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:45%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>English</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:20%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Japanese</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:20%;" data-v-1e54c47d></div></div></div>',8)])])}const E1=Tn(M1,[["render",S1],["__scopeId","data-v-1e54c47d"]]),Vh=1e4,nc=.2,T1=.95,b1=400;let zh=0;const w1=Sn({components:{LoadingAnimateVue:dm},props:{targetFile:{type:String,required:!0},allowedOrigins:{type:Array,default:()=>[]}},data(){return{isArtLoading:!0,messageListener:null,fallbackTimeoutId:null,loadingTaskId:null,progressIntervalId:null,pendingFinishLoading:null,isComponentUnmounted:!1}},computed:{loadingTaskProgressPercent(){if(!this.loadingTaskId)return 0;const e=this.$store?.state?.loading?.tasks?.[this.loadingTaskId];return typeof e!="number"?0:Math.max(0,Math.min(100,Math.round(e*100)))}},async mounted(){zh+=1,this.loadingTaskId=`loading-art:${this.targetFile}:${zh}`,this.commitLoadingMutation("registerLoadingTask",this.loadingTaskId),this.commitLoadingMutation("setLoadingTaskProgress",{taskId:this.loadingTaskId,progress:nc});const n=await this.falseOperation();this.isComponentUnmounted||(this.isArtLoading=n,this.completeLoadingTask())},beforeUnmount(){this.isComponentUnmounted=!0,this.resolvePendingLoading(),this.removeMessageListener(),this.clearFallbackTimeout(),this.clearProgressInterval(),this.completeLoadingTask(),this.commitLoadingMutation("removeLoadingTask",this.loadingTaskId),this.loadingTaskId=null},methods:{commitLoadingMutation:function(n,e){const t=this.$store;t?.commit&&t.commit(n,e)},completeLoadingTask:function(){this.loadingTaskId&&this.commitLoadingMutation("completeLoadingTask",this.loadingTaskId)},clearProgressInterval:function(){this.progressIntervalId!==null&&(window.clearInterval(this.progressIntervalId),this.progressIntervalId=null)},startProgressInterval:function(){this.clearProgressInterval();const n=this.loadingTaskId;if(!n)return;const e=Date.now();this.progressIntervalId=window.setInterval(()=>{const t=Date.now()-e,i=Math.min(1,t/Vh),s=nc+(T1-nc)*i;this.commitLoadingMutation("setLoadingTaskProgress",{taskId:n,progress:s})},b1)},removeMessageListener:function(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=null)},resolvePendingLoading:function(){if(!this.pendingFinishLoading)return;const n=this.pendingFinishLoading;this.pendingFinishLoading=null,n()},clearFallbackTimeout:function(){this.fallbackTimeoutId!==null&&(window.clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)},getEmbeddedFrameWindow:function(){return this.$el?.querySelector("iframe")?.contentWindow??null},normalizeOrigin:n=>{if(!n||n==="null")return null;try{return new URL(n).origin}catch{return null}},getAllowedOrigins:function(){const n=new Set,e=this.normalizeOrigin(window.location.origin);e&&n.add(e);for(const t of this.allowedOrigins){const i=this.normalizeOrigin(t);i&&n.add(i)}return n},isAllowedMessageOrigin:function(n){const e=this.normalizeOrigin(n);return e?this.getAllowedOrigins().has(e):!1},isAllowedMessageEvent:function(n){const e=this.getEmbeddedFrameWindow();return!e||n.source!==e?!1:n.origin==="null"?!0:this.isAllowedMessageOrigin(n.origin)},isReadyMessage:n=>{if(n==="statueLoaded"||n==="distortionLoaded")return!0;if(!n||typeof n!="object")return!1;const e=n;return e.type==="READY"&&(e.source==="v-statue"||e.source==="distortion-web")},falseOperation:function(){return this.resolvePendingLoading(),this.removeMessageListener(),this.clearFallbackTimeout(),this.startProgressInterval(),new Promise(n=>{let e=!1;const t=()=>{e||(e=!0,this.pendingFinishLoading=null,this.clearProgressInterval(),this.completeLoadingTask(),this.removeMessageListener(),this.clearFallbackTimeout(),n(!1))};this.pendingFinishLoading=t;const i=s=>{this.isAllowedMessageEvent(s)&&this.isReadyMessage(s.data)&&t()};this.messageListener=i,window.addEventListener("message",i),this.fallbackTimeoutId=window.setTimeout(t,Vh)})}}}),R1={id:"loadingArtProcess"},C1={key:0,id:"loadingAnime"};function P1(n,e,t,i,s,r){const o=yn("LoadingAnimateVue");return Ge(),qe("div",R1,[n.isArtLoading?(Ge(),qe("div",C1,[Et(o,{progress:n.loadingTaskProgressPercent},null,8,["progress"])])):xn("",!0),re("div",{class:Mn({hidden:n.isArtLoading}),id:"drawArt"},[Pp(n.$slots,"default",{id:"iframeArt"},void 0)],2)])}const I1=Tn(w1,[["render",P1],["__scopeId","data-v-b19d257a"]]),L1=420,D1=260,N1=Sn({data(){return{eventX:0,eventY:0,parentElement:null,isWide:!1,windowWidth:"50%",windowHeight:"60%",isResizing:!1,resizeStartX:0,resizeStartY:0,resizeStartWidth:0,resizeStartHeight:0}},props:{windowType:{type:String,required:!0},handleModalWindowHidden:{type:Function,required:!0},defaultWidth:{type:String,default:"50%"},defaultHeight:{type:String,default:"60%"}},computed:{windowSizeStyle(){return this.isSmartPhoneChecker()?{}:this.isWide?{width:"100%",height:"100%"}:{width:this.windowWidth,height:this.windowHeight}},headerId(){return`${this.windowType}-dialog-title`}},mounted(){this.windowWidth=this.defaultWidth,this.windowHeight=this.defaultHeight,document.addEventListener("keydown",this.handleGlobalKeydown),this.focusFirstElement()},beforeUnmount(){document.body.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup),document.removeEventListener("mousemove",this.resizeMousemove),document.removeEventListener("mouseup",this.stopResize),document.removeEventListener("keydown",this.handleGlobalKeydown)},methods:{parsePixels:n=>{const e=Number.parseFloat(n);return Number.isNaN(e)?0:e},getModalBorderSize:function(n){const e=window.getComputedStyle(n),t=this.parsePixels(e.borderLeftWidth)+this.parsePixels(e.borderRightWidth),i=this.parsePixels(e.borderTopWidth)+this.parsePixels(e.borderBottomWidth);return{horizontal:t,vertical:i}},clampValue:(n,e,t)=>t<e?t:Math.min(t,Math.max(e,n)),setWindowPositionFromTopLeft:(n,e,t,i,s)=>{const r=e+i/2,o=t+s/2;n.style.left=`${Math.round(r)}px`,n.style.top=`${Math.round(o)}px`},constrainWindowToViewport:function(n){const e=n.getBoundingClientRect(),t=window.innerWidth,i=window.innerHeight,s=Math.max(0,t-e.width),r=Math.max(0,i-e.height),o=this.clampValue(e.left,0,s),a=this.clampValue(e.top,0,r);this.setWindowPositionFromTopLeft(n,o,a,e.width,e.height)},getDialogRoot:function(){return this.$el},getDialogZIndex:n=>{const e=Number.parseInt(n.style.zIndex||"0",10);return Number.isFinite(e)?e:0},getTopMostDialog:function(){const n=Array.from(document.getElementsByClassName("modal-window"));if(n.length===0)return null;let e=n[0];for(let t=1;t<n.length;t+=1){const i=n[t],s=this.getDialogZIndex(i),r=this.getDialogZIndex(e);if(s>r){e=i;continue}if(s!==r)continue;e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING&&(e=i)}return e},isDialogActive:function(){const n=this.getDialogRoot();return n?n.style.zIndex!=="0":!1},isEscapeTargetDialog:function(){const n=this.getDialogRoot();if(!n)return!1;const e=document.activeElement;return e&&n.contains(e)?!0:n.style.zIndex==="0"?!1:this.getTopMostDialog()===n},getFocusableElements:function(){const n=this.getDialogRoot();if(!n)return[];const e=n.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');return Array.from(e).filter(t=>!t.hasAttribute("disabled")&&t.getAttribute("aria-hidden")!=="true")},focusFirstElement:function(){const n=this.getFocusableElements();if(n.length>0){n[0].focus();return}this.getDialogRoot()?.focus()},trapFocus:function(n){const e=this.getDialogRoot();if(!e)return;const t=this.getFocusableElements();if(t.length===0){n.preventDefault(),e.focus();return}const i=t[0],s=t[t.length-1],r=document.activeElement;if(n.shiftKey){(r===i||r===e)&&(n.preventDefault(),s.focus());return}r===s&&(n.preventDefault(),i.focus())},handleDialogKeydown:function(n){if(this.isDialogActive()){if(n.key==="Escape"){n.preventDefault(),n.stopPropagation(),this.closeWindow();return}n.key==="Tab"&&this.trapFocus(n)}},handleGlobalKeydown:function(n){n.key==="Escape"&&this.isEscapeTargetDialog()&&(n.preventDefault(),this.closeWindow())},windowFront:n=>{const e=document.getElementsByClassName("modal-window");for(let i=0;i<e.length;i++){const s=e[i];s.style.zIndex="0"}const t=n.target?.closest(".modal-window");t&&(t.style.zIndex="1",t.focus())},wideWindow:function(n){this.stopResize();const e=n.target?.closest(".modal-window");if(!e)return;const t=e.children[0],i=e.getElementsByClassName("wideButton")[0],s=e.getElementsByClassName("closeButton")[0];this.isWide?(this.isWide=!1,e.style.top="50%",e.style.left="50%",t&&(t.style.pointerEvents="auto")):(this.isWide=!0,e.style.top="50%",e.style.left="50%",t&&(t.style.pointerEvents="none"),i&&(i.style.pointerEvents="auto"),s&&(s.style.pointerEvents="auto"))},startResize:function(n){if(this.isWide)return;const e=n.target?.closest(".modal-window");if(!e)return;const t=e.getBoundingClientRect();this.isResizing=!0,this.resizeStartX=n.clientX,this.resizeStartY=n.clientY,this.resizeStartWidth=t.width,this.resizeStartHeight=t.height,document.addEventListener("mousemove",this.resizeMousemove),document.addEventListener("mouseup",this.stopResize)},resizeMousemove:function(n){if(!this.isResizing||this.isWide)return;const e=this.$el;if(!e)return;const t=e.getBoundingClientRect(),i=window.innerWidth,s=window.innerHeight,r=n.clientX-this.resizeStartX,o=n.clientY-this.resizeStartY,a=this.getModalBorderSize(e),l=this.clampValue(this.resizeStartWidth+r,L1,i),c=this.clampValue(this.resizeStartHeight+o,D1,s),u=t.left+t.width/2,f=t.top+t.height/2,d=u-l/2,h=f-c/2,g=this.clampValue(d,0,Math.max(0,i-l)),_=this.clampValue(h,0,Math.max(0,s-c));this.windowWidth=`${Math.max(0,l-a.horizontal)}px`,this.windowHeight=`${Math.max(0,c-a.vertical)}px`,this.setWindowPositionFromTopLeft(e,g,_,l,c)},stopResize:function(){this.isResizing&&(this.isResizing=!1,document.removeEventListener("mousemove",this.resizeMousemove),document.removeEventListener("mouseup",this.stopResize))},closeWindow:function(){this.handleModalWindowHidden(this.windowType)},mouseup:function(){document.body.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup)},mousedown:function(n){const e=document.getElementsByClassName("modal-window");for(let s=0;s<e.length;s++){const r=e[s];r.style.zIndex="0"}const t=n.target?.closest(".modal-window");if(!t)return;this.parentElement=t;const i=this.parentElement.getBoundingClientRect();this.eventX=n.clientX-i.left,this.eventY=n.clientY-i.top,this.parentElement.style.zIndex="1",this.parentElement.focus(),document.body.addEventListener("mousemove",this.mousemove),document.addEventListener("mouseup",this.mouseup)},mousemove:function(n){if(!this.parentElement)return;const e=this.parentElement.getBoundingClientRect(),t=window.innerWidth,i=window.innerHeight,s=n.clientX-this.eventX,r=n.clientY-this.eventY,o=Math.max(0,t-e.width),a=Math.max(0,i-e.height),l=this.clampValue(s,0,o),c=this.clampValue(r,0,a);this.setWindowPositionFromTopLeft(this.parentElement,l,c,e.width,e.height)},isSmartPhoneChecker:()=>!!navigator.userAgent.match(/iPhone|Android.+Mobile/)}}),U1=["aria-labelledby"],F1=["id"],O1={class:"window-menu"},B1=["aria-label"],k1=["aria-label"],H1={class:"modal-content"};function V1(n,e,t,i,s,r){return Ge(),qe("div",{class:Mn(["modal-window",[n.isSmartPhoneChecker()?"smartPhoneWindow":""]]),style:Va(n.windowSizeStyle),onMousedown:e[5]||(e[5]=(...o)=>n.windowFront&&n.windowFront(...o)),onKeydown:e[6]||(e[6]=(...o)=>n.handleDialogKeydown&&n.handleDialogKeydown(...o)),role:"dialog","aria-modal":"true","aria-labelledby":n.headerId,tabindex:"-1"},[re("div",{class:"modal-header",onMousedown:e[2]||(e[2]=(...o)=>n.mousedown&&n.mousedown(...o)),onMouseup:e[3]||(e[3]=(...o)=>n.mouseup&&n.mouseup(...o))},[re("p",{id:n.headerId,class:"header"},_t(n.windowType),9,F1),re("div",O1,[n.isSmartPhoneChecker()?xn("",!0):(Ge(),qe("button",{key:0,class:"wideButton",onClick:e[0]||(e[0]=(...o)=>n.wideWindow&&n.wideWindow(...o)),"aria-label":`Toggle maximize for ${n.windowType} window`},[...e[7]||(e[7]=[re("p",null,"□",-1)])],8,B1)),re("button",{class:"closeButton",onClick:e[1]||(e[1]=(...o)=>n.closeWindow&&n.closeWindow(...o)),"aria-label":`Close ${n.windowType} window`},[...e[8]||(e[8]=[re("p",null,"☓",-1)])],8,k1)])],32),re("div",H1,[Pp(n.$slots,"default",{},void 0)]),!n.isSmartPhoneChecker()&&!n.isWide?(Ge(),qe("div",{key:0,class:"resize-handle",onMousedown:e[4]||(e[4]=an((...o)=>n.startResize&&n.startResize(...o),["stop","prevent"]))},null,32)):xn("",!0)],46,U1)}const z1=Tn(N1,[["render",V1],["__scopeId","data-v-d7b49a31"]]),Gh=["About","Skill","Logs","Distortion","Questions","Synthwave","Algorave","AlgoraveVisual"],G1=Sn({components:{ModalWindowVue:z1,AboutContent:QR,SkillContent:E1,LogsContent:y1,AlgoraveContent:by,AlgoraveVisualContent:jR,LoadingArtProcess:I1},data(){return{currentOpenIndex:0,About:!1,Skill:!1,Logs:!1,Distortion:!1,Questions:!1,Synthwave:!1,Algorave:!1,AlgoraveVisual:!1,modalTriggerEvent:"dblclick",modalIconElements:[],windowLayouts:{}}},mounted(){this.modalTriggerEvent=this.isSmartPhone()?"click":"dblclick";const n=this.$el;if(!n)return;const e=n.getElementsByClassName("isModal");this.modalIconElements=Array.from(e);for(let t=0;t<this.modalIconElements.length;t++)this.modalIconElements[t].addEventListener(this.modalTriggerEvent,this.ModalWindowDisplay)},beforeUnmount(){for(let n=0;n<this.modalIconElements.length;n++)this.modalIconElements[n].removeEventListener(this.modalTriggerEvent,this.ModalWindowDisplay);this.modalIconElements=[]},methods:{openModalWindow:function(n){const e=this[n];this[n]=!0,this.waitForOpenWindow(n,t=>{t.style.zIndex="1",!e&&(this.placeWindowWithoutOverlap(n,t),this.currentOpenIndex+=1)})},ModalWindowDisplay:function(n){const e=document.getElementsByClassName("modal-window");for(let r=0;r<e.length;r++){const o=e[r];o.style.zIndex="0"}const t=n.target,s=t?.closest?.(".isModal")?.dataset?.type??t?.dataset?.type;if(s&&Gh.includes(s)){if(s==="Algorave"){this.openModalWindow("Algorave"),this.openModalWindow("AlgoraveVisual");return}this.openModalWindow(s)}},ModalWindowHidden:function(n){const e=this[n];this[n]=!1,delete this.windowLayouts[n],e&&(this.currentOpenIndex=Math.max(0,this.currentOpenIndex-1))},getScreenSize:()=>{const n=document.getElementById("screen");if(!n)return{width:window.innerWidth,height:window.innerHeight};const e=getComputedStyle(n),t=parseFloat(e.width),i=parseFloat(e.height);return{width:Number.isFinite(t)?t:n.clientWidth,height:Number.isFinite(i)?i:n.clientHeight}},getDefaultWindowSize:(n,e,t)=>n==="Algorave"?{width:e*.78125,height:t*.5606}:n==="AlgoraveVisual"?{width:420,height:420}:{width:e*.5,height:t*.6},clampValue:(n,e,t)=>Math.max(e,Math.min(t,n)),measureWindowLayout:function(n,e,t,i){const s=this.getDefaultWindowSize(n,t,i),r=e.getBoundingClientRect(),o=this.windowLayouts[n],a=r.width>0?r.width:s.width,l=r.height>0?r.height:s.height,c=Number.parseFloat(e.style.left),u=Number.parseFloat(e.style.top),f=Number.isFinite(c)?c:o?.left??t/2,d=Number.isFinite(u)?u:o?.top??i/2;return{left:f,top:d,width:a,height:l}},collectOccupiedLayouts:function(n,e,t){const i=[];for(const s of Gh){if(s===n||!this[s])continue;const r=document.getElementById(s);if(r){const a=this.measureWindowLayout(s,r,e,t);this.windowLayouts[s]=a,i.push(a);continue}const o=this.windowLayouts[s];o&&i.push(o)}return i},computeOverlapArea:(n,e,t)=>{const i=n.left-n.width/2-t,s=n.left+n.width/2+t,r=n.top-n.height/2-t,o=n.top+n.height/2+t,a=e.left-e.width/2-t,l=e.left+e.width/2+t,c=e.top-e.height/2-t,u=e.top+e.height/2+t,f=Math.max(0,Math.min(s,l)-Math.max(i,a)),d=Math.max(0,Math.min(o,u)-Math.max(r,c));return f*d},placeWindowWithoutOverlap:function(n,e){const t=this.getScreenSize(),i=this.measureWindowLayout(n,e,t.width,t.height),s=24,r=i.width/2+s,o=t.width-i.width/2-s,a=i.height/2+s,l=t.height-i.height/2-s,c=this.clampValue(t.width/2,r,o),u=this.clampValue(t.height/2,a,l),f=this.collectOccupiedLayouts(n,t.width,t.height),d=[],h=new Set,g=(y,w)=>{const R=this.clampValue(y,r,o),I=this.clampValue(w,a,l),D=`${Math.round(R)}:${Math.round(I)}`;h.has(D)||(h.add(D),d.push({left:R,top:I}))},_=Math.max(60,Math.round(i.width*.28)),m=Math.max(60,Math.round(i.height*.28));g(c,u);for(let y=1;y<=12;y+=1){for(let w=-y;w<=y;w+=1)g(c+w*_,u-y*m),g(c+w*_,u+y*m);for(let w=-y+1;w<=y-1;w+=1)g(c-y*_,u+w*m),g(c+y*_,u+w*m)}g(r,a),g(r,l),g(o,a),g(o,l);let p={left:c,top:u},M=Number.POSITIVE_INFINITY;const b=12;for(const y of d){const w={left:y.left,top:y.top,width:i.width,height:i.height};let R=0;for(const A of f)R+=this.computeOverlapArea(w,A,b);const I=(y.left-c)**2+(y.top-u)**2,D=R*100+I;D<M&&(p=y,M=D)}e.style.left=`${p.left}px`,e.style.top=`${p.top}px`,this.windowLayouts[n]={left:p.left,top:p.top,width:i.width,height:i.height}},isSmartPhone:()=>!!navigator.userAgent.match(/iPhone|Android.+Mobile/),waitForOpenWindow:(n,e)=>{const t=document.getElementById("drawWindow");if(!t)throw new Error("Container element not found");const i=document.getElementById(n);if(i){e(i);return}const s=new MutationObserver(r=>{for(const o of r)if(o.type==="childList"){const a=document.getElementById(n);if(a){s.disconnect(),e(a);break}}});s.observe(t,{childList:!0})}}}),W1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgIDAwMD///8AAAAAgADCtgH7AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBBAHNiJr8idiAAAAmUlEQVQoz3XR7RHDIAgGYLzrAEFZgLQLWDtAGlmh+6/SqPUDvb7/fA6JEAAAgy2QY/caf6Szaec7ZnChxmcwz1bBP6gdXQWSkg6xtBgqFkiJCmiGsICfIbxmCHH+iiwQ3d9Z2vi8jE+4qY3i2xLATXqQSRWgRRo2mpd6wT6EO3C+UeCT4JF6ngWw1qsr/cdouN6FKod+qAjAF2XEQxQt2EgDAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU0OjM0LTA0OjAw2FGLUAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NDozNC0wNDowMKkMM+wAAAAASUVORK5CYII=",X1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAACAgID//wDAwMAAAAAA//8A/wD///8AgACE6PTJAAAAAXRSTlMAQObYZgAAAAFiS0dEBxZhiOsAAAAHdElNRQfiBBMBIhp7Zpv1AAABdUlEQVQ4y3WUTW6DMBBGQcoBOjIk6xKpe3eS0GWQuEBLfYCK4n3EIgfopseu58fBxcm3Aj89z3iMKIokEPJUZCmhafZ46LP12hFAuyLl1glYE/ARoD2ngvdTBFglYEvgQ0GilCfv/Q3MiwKYgLZdlHoIyqRgni8RlM4hV9+z0JpqAaQICII9KDCOFQYkGNC9DLIyESDB2htAUqZnMCwYI6CkXoLyVfWdYcFWC0CH1bnYdCyYFBwHeutY0LYEyIg2JjMi4Gc1rCQHosMjg6fdYWbsWm4X00sEFuYLHVBAHAkLLVqohwXQ98fCjK/N6G6d0yGsCIgBDLE2bapCMPzRaW05tQpIYJCddlcKsBCMlzFcDB4ISDERkMFA81eAhgQywl7OdguwRg0Cn7AABDEaP7r3TgBo2CDQg4Cq59CU2AjrAqTh6/UCZHz3gJDWoDmwGPAahOFKKQUnP+L/KHj7/bkP8jwGdON3QbzYdfgT2fR50j9Dlj/uX7Pd5lE/IwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNDoyNi0wNDowMEXe6EMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzQ6MjYtMDQ6MDA0g1D/AAAAAElFTkSuQmCC",j1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAAAEBASGhoZ3d3eAgAD////AwMDMmQDq6ur//wDMzDPj4+PMzMzMzAD/zACZmQDM/wDMzGaysrLd3d0MDAzX19eZmTOgoKSWlpaZmZkW0DvXAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhgXECILfny5AAACJklEQVRIx5WW61aDMBCE2c0FkIRi2hp5/xd1L6TSNkFcz6k/Ol9mZxcjXfdUwNWdL0Cu8wQgf54i9GQ09Nl1FsHaYwgdF/Avb61DcL09yoJu4AL03luCEMZx/GgjpJ+mKQAY1pOWgTjOl0ZfrB9ITxlQ9DxaJpbPKqHnD2AQjOqJFGKONQIdHT8ME/CUGABvwCcgB/qpEGowTeSQigFlB9HXPAqQEN2WgIdFDhDnJcb+HRD9lUIrMJIXwjLf4i2SRXy1EODKVQCe0jgD6Uke+wog8uvdFGCcF9VzR7EB3O/FYV5GPX+RjioOrOZ6tDQv2o90FCtjUn1QgMdZ+om1DBsRAmUY1IKJuDQdhAhEoAAUWFcWmw5MhMDAJMRIh/8yl8YDKAA9s0SIvtTXzbcI7zdilva3nkj+N+GWx4gOCQL4OQnWulIHBOvJQYhsS7UJ0XvjEi8+YMg58+3UJghIntTpm9dowpr1NgNoEwrI2nmT2/XX9gCXEmfQpyr4B9AfEALQCg3tce9QJwRI2859ceh0xhUCpaWEIAukPOVLupoB3gnWZ3QZ+ZLZOzySPBOi17EKkNILUHLsgLw5cDv7lvTrkhx2LWUBSJveHDS6ELshMcDSGtBtyfdzArcHMlb+9vv+DchCmAZg7dNcNQM4CV8BpK09n1cq2oNrAa+GqwCAJ4EOVN8psJ747w6rvANob99nXgc0E26t/a3/5RDNf15pilW9fgDHsyjmWYUIXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNjozNC0wNDowMO0k/sIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTY6MzQtMDQ6MDCceUZ+AAAAAElFTkSuQmCC",ic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEUAAAAAgAAAAACAgICAgAD////AwMAA/wD//wCAAAD/AAAA//8AAP+AAID/AP8AAIAtlzWCAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhoALTbILJ0EAAABOUlEQVQoz1WRsU7DMBBAj8QSa1NUYLScKBIgBhrRGQW7gjVSguc2ym6W7FETwYrEwhcA38DUiaFTP6QDX8D5bIF6Uny6p3d3ig2AMcKPAx2UYAwQCsyMhw5EHMIC85zPHDgZg6o5sCZuPDBcSg7zRVx5cDRVKwQiXfgZxxawQsyEA1cNguS1CwtBNbAsVauz9+S68/Vthcbbx8W3awC1xJbnz5ev9Y0TqsvdVqGw+SkcKBDco7ARDiwtsMI6LWhIqhCQUOYEgrrdnVuhlA6w1ExKG7LOp26okRRDndN9sAfTlH3fPzX/QDRa6wENsD0H7aQX6FjDg1Ot0dkzenT2Dev8GcYa6MRZltGWSFMMnRB0Y6wkwW0hcOeNwYHDNlHekJzq9jEhZ5A0wUStCRL6Of8GEI0gEMJvgF/zF3Xhq8Ch1gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo1NC0wNDowMGovbQQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NTQtMDQ6MDAbctW4AAAAAElFTkSuQmCC",$1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAIAAAAD///+AgIDAwMA+Te3nAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXECDlcB2VAAAAqElEQVQoz5WQURKDIAxEseMBjF5AUi8Aqf8d5QT1/ndpEkCgrR/dnQnDzoNFjREBgGn0FQymuw5QNKLFHNzJEU3kfCEs2hGhIWBy4HOXEKoc6B0sn7uQjycilXfwUd4N/5YXIl1dfUAszwS0RCyvpeXXui1iXXQfUK3jyfveLxt7f8mQ3j0Cqwx5SE9hFx8yaGNgpeLHxsBROcxmCbX5RBvM6eed+vHqNxYSLyyMnITLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjE2OjMyLTA0OjAwjvTL+AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzoxNjozMi0wNDowMP+pc0QAAAAASUVORK5CYII=",K1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAAAAAAD////AwMAAAICAgID//wAA/wD/AABwyKKjAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAyElEQVQoz42RMQ7DIAxFg5QD4KBGXZFPgN0eIFKknqNL9k7M3Th2jYGW0qWe+F+Pb2Om6f8CqVH3joHBqRrsoJtRBCIWo90nIug1OET7dX+hHTqAhdi9/QAsBFEowEIBWCIQvRpy9MwZkLZGAQp8yXNYzczs5hQpRmYFYdcTEpInLYZmuAz4OqgC3N5q9FUaEequHNY5Ql3GEoTo1iMEwGk9pO6VIHZXNQ5FNuki+NqMOUaRKT1byC3mOqeUSuSsOj7ePX6+bKwXtg8vq/zrUZsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDQtMTZUMDc6NTY6MjAtMDQ6MDDkQX/gAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAwlRzHXAAAAABJRU5ErkJggg==",q1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgID///8AAP8AAADAwMAT19+5AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBhoAMQWRi6FPAAAAgklEQVQoz63RUQqAIAwGYIMOkFIHcNYF9AIF6wKR979KzlnkeqiHfhDlY0xxSr1H35LBwBXbSbASoJNAJSaA8xCCd94izgWIaE1/At9SAG75CC5wF+rz68MqeNwi3zHwMca4MfS40nci4sKgVJNgTHtrTkjlewWpHAlQ67mecx6DyAHwGD3zmDvtGAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0OTowNS0wNDowMJ6EiFoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDk6MDUtMDQ6MDDv2TDmAAAAAElFTkSuQmCC",Y1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAAAAAACGhoaysrI5OTl3d3dVVVVNTU0AAIBCQkJfX18zMzMiIiLAwMCWlpYpKSkAmcwA//8AzMwAZswAZpkAM5kcHBwREREICAhmAGb////KapVyAAAAAXRSTlMAQObYZgAAAAFiS0dEGnVn5DIAAAAHdElNRQfiBBMBICMWVXF/AAABFUlEQVQ4y82TyZqDIBCE0w3NMkRiFLO8/4umGvSLiVzmNFMXseu3ms3T6d+IiPTBqo/K5hu2BM+wiHPMwrWy84U9CMMKYEBrJTQf76otwJLQplD7emnSCXiI6wiqBEpiVCzRxxgtxK1ipAJwfrxFd6++Eikld042Ot4BJM77YRhyzmwVuHwCidXPtXnmlC7uO4G9G3JbjijhDgle/fE6TSMhI/SA1R9BAEg94Ap7LjMiDgmWo1FgLmUuPSBxzEIT7GVZKpCOAOYwl6UC3GlhWQnYAQHSSQghr/ugq6RDQmRSou0k/FtLwHFvZwEC36rUv7ez0OsQVoDi+5q4x62eZrtQoUrrz030uJ+1uL/W4Vt//Z/9Si86bhD1UrQsrgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozMjozNS0wNDowMLWCggcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzI6MzUtMDQ6MDDE3zq7AAAAAElFTkSuQmCC",Q1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACAgIDAwMAAgID///8AgAAAAP+AAAAAAAD/AAAAAIBSZDZVAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhgXETDh3DywAAABh0lEQVQ4y23TsWrDMBAGYPsNqmCC6CbZBa8NNHuEGrq24FK81tbgsXTJ5pQMmUsgT+Bg/JQ9SSdbqn2Q5f/y54QjR5Edoj8wd1Ew8d2KRISnafpI/JzELOGEb8Sb4IUvKyK0PGRpAeMJhEaei20NMu1JJEqhdOV1gq9RdKNoR7j+jqLnY4TD4duXrh0b14tEoQBl7zes/GgoEGLbAKEAT9AoWwRhGlLmAPW0JEmkuPhQlvZcq0Ti5Lij6yfYO/jcQqN0P+WDqovOLIl5ADel8FhxamCPUDZK1baxsbDH5YNSTdBwcFNN0y3Bu1LDYIDMGwaIDAAKN9MgMmyslW1AHsJxbRvwp4VwPt4PQ29vSFL5cHqxwCVLqsrBkZ52FCHz4XzaEWoO5cA8rBy+T/6Dfr65zgF6c2+50MCBRKbzEAQI5gCtByCYE9rbV4BnmawyziXmhLYORCYBGHFgbsKZa+FiBigLYIVPQMf3RssEU+6EzXIUNs+tsIXcCFvKtbDFHIQt5yBB/ge5pdMZ3n2ecAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNzo0OC0wNDowMM+D9pEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTc6NDgtMDQ6MDC+3k4tAAAAAElFTkSuQmCC",Z1={class:"iconAndWindowDraw"},J1={class:"icons"},eC={class:"row"},tC={class:"row"},nC={class:"row"},iC={id:"drawWindow"};function sC(n,e,t,i,s,r){const o=yn("AboutContent"),a=yn("ModalWindowVue"),l=yn("SkillContent"),c=yn("LogsContent"),u=yn("LoadingArtProcess"),f=yn("AlgoraveContent"),d=yn("AlgoraveVisualContent");return Ge(),qe("div",Z1,[re("div",J1,[re("div",eC,[re("div",{class:"icon isModal","data-type":"About",tabindex:"0",role:"button","aria-label":"Open About modal",onKeydown:[e[0]||(e[0]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[1]||(e[1]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[14]||(e[14]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:W1},null,-1),re("p",{class:"iconName"},"About",-1)])],32),re("div",{class:"icon isModal","data-type":"Skill",tabindex:"0",role:"button","aria-label":"Open Skill modal",onKeydown:[e[2]||(e[2]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[3]||(e[3]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[15]||(e[15]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:X1},null,-1),re("p",{class:"iconName"},"Skill",-1)])],32),re("div",{class:"icon isModal","data-type":"Logs",tabindex:"0",role:"button","aria-label":"Open Logs modal",onKeydown:[e[4]||(e[4]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[5]||(e[5]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[16]||(e[16]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:ug},null,-1),re("p",{class:"iconName"},"Logs",-1)])],32),e[17]||(e[17]=re("div",{class:"icon"},[re("a",{class:"iconUrl",href:"https://keybase.io/taruscript",target:"_blank",rel:"noopener noreferrer"},[re("img",{class:"iconImg",width:"65%",height:"65%",src:j1}),re("p",{class:"iconName"},"Keybase")])],-1))]),re("div",tC,[re("div",{class:"icon isModal","data-type":"Distortion",tabindex:"0",role:"button","aria-label":"Open Distortion modal",onKeydown:[e[6]||(e[6]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[7]||(e[7]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[18]||(e[18]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:ic},null,-1),re("p",{class:"iconName"},"Distortion",-1)])],32),re("div",{class:"icon isModal","data-type":"Questions",tabindex:"0",role:"button","aria-label":"Open Questions modal",onKeydown:[e[8]||(e[8]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[9]||(e[9]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[19]||(e[19]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:ic},null,-1),re("p",{class:"iconName"},"???",-1)])],32),re("div",{class:"icon isModal","data-type":"Synthwave",tabindex:"0",role:"button","aria-label":"Open Synthwave modal",onKeydown:[e[10]||(e[10]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[11]||(e[11]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[20]||(e[20]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:ic},null,-1),re("p",{class:"iconName"},"Synthwave",-1)])],32)]),re("div",nC,[re("div",{class:"icon isModal","data-type":"Algorave",tabindex:"0",role:"button","aria-label":"Open Algorave modal",onKeydown:[e[12]||(e[12]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["enter"])),e[13]||(e[13]=_n(an((...h)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...h),["prevent"]),["space"]))]},[...e[21]||(e[21]=[re("img",{class:"iconImg",width:"65%",height:"65%",src:$1},null,-1),re("p",{class:"iconName"},"Algorave",-1)])],32)]),e[22]||(e[22]=Uu('<div class="row" data-v-6720940a><div class="icon" data-v-6720940a><a class="iconUrl" href="https://twitter.com/7aru7aru" target="_blank" rel="noopener noreferrer" data-v-6720940a><img class="iconImg" width="65%" height="65%" src="'+K1+'" data-v-6720940a><p class="iconName" data-v-6720940a>Twitter</p></a></div><div class="icon" data-v-6720940a><a class="iconUrl" href="https://github.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-6720940a><img class="" width="65%" height="65%" alt="Vue logo" src="'+q1+'" data-v-6720940a><p class="iconName" data-v-6720940a>Github</p></a></div><div class="icon" data-v-6720940a><a class="iconUrl" href="https://instagram.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-6720940a><img class="" width="65%" height="65%" alt="Vue logo" src="'+Y1+'" data-v-6720940a><p class="iconName" data-v-6720940a>Instagram</p></a></div><div class="icon" data-v-6720940a><a class="iconUrl" href="mailto:taru@sfc.wide.ad.jp" target="_blank" rel="noopener noreferrer" data-v-6720940a><img class="" width="65%" height="65%" alt="Vue logo" src="'+Q1+'" data-v-6720940a><p class="iconName" data-v-6720940a>Mail</p></a></div></div>',1))]),re("div",iC,[n.About?(Ge(),On(a,{key:0,id:"About",windowType:"About",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[Et(o)]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.Skill?(Ge(),On(a,{key:1,id:"Skill",windowType:"Skill",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[Et(l)]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.Logs?(Ge(),On(a,{key:2,id:"Logs",windowType:"Logs",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[Et(c)]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.Distortion?(Ge(),On(a,{key:3,id:"Distortion",windowType:"Distortion",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[...e[23]||(e[23]=[re("iframe",{src:"https://taruscript.github.io/distortion_web/",title:"Distortion visual artwork",width:"100%",height:"100%",sandbox:"allow-scripts",referrerpolicy:"no-referrer",style:{border:"0"}},null,-1)])]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.Questions?(Ge(),On(a,{key:4,id:"Questions",windowType:"Questions",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[Et(u,{targetFile:"index.html","allowed-origins":["https://taruscript.github.io"]},{default:ri(()=>[...e[24]||(e[24]=[re("iframe",{src:"https://taruscript.github.io/question/",title:"Questions visual artwork",width:"100%",height:"100%",sandbox:"allow-scripts",referrerpolicy:"no-referrer",style:{border:"0"}},null,-1)])]),_:1})]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.Synthwave?(Ge(),On(a,{key:5,id:"Synthwave",windowType:"Synthwave",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[...e[25]||(e[25]=[re("iframe",{src:"https://taruscript.github.io/synthwave_landscape/",title:"Synthwave landscape artwork",width:"100%",height:"100%",sandbox:"allow-scripts",referrerpolicy:"no-referrer",style:{border:"0"}},null,-1)])]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.Algorave?(Ge(),On(a,{key:6,id:"Algorave",windowType:"Algorave",defaultWidth:"78.125%",defaultHeight:"56.06%",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[Et(f)]),_:1},8,["handleModalWindowHidden"])):xn("",!0),n.AlgoraveVisual?(Ge(),On(a,{key:7,id:"AlgoraveVisual",windowType:"AlgoraveVisual",defaultWidth:"420px",defaultHeight:"420px",handleModalWindowHidden:n.ModalWindowHidden},{default:ri(()=>[Et(d)]),_:1},8,["handleModalWindowHidden"])):xn("",!0)])])}const rC=Tn(G1,[["render",sC],["__scopeId","data-v-6720940a"]]),oC=Sn({components:{IconsComponentVue:rC,HeaderComponent:Kx}}),aC={id:"screen"};function lC(n,e,t,i,s,r){const o=yn("HeaderComponent"),a=yn("IconsComponentVue");return Ge(),qe("div",aC,[Et(o),Et(a)])}const cC=Tn(oC,[["render",lC],["__scopeId","data-v-4acb14d9"]]),uC=[{path:"/",name:"screen",component:cC}],fC=Lx({history:K0("./"),routes:uC});Fv(P0).use($n).use(fC).mount("#app");
