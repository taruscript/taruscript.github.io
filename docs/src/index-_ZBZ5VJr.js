(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function su(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Et={},$s=[],ai=()=>{},Sd=()=>!1,Ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ru=n=>n.startsWith("onUpdate:"),Xt=Object.assign,ou=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ym=Object.prototype.hasOwnProperty,pt=(n,e)=>Ym.call(n,e),Ye=Array.isArray,Qs=n=>go(n)==="[object Map]",Ed=n=>go(n)==="[object Set]",$u=n=>go(n)==="[object Date]",$e=n=>typeof n=="function",Ot=n=>typeof n=="string",jn=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Td=n=>(vt(n)||$e(n))&&$e(n.then)&&$e(n.catch),bd=Object.prototype.toString,go=n=>bd.call(n),$m=n=>go(n).slice(8,-1),wd=n=>go(n)==="[object Object]",au=n=>Ot(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qm=/-\w/g,Nn=ba(n=>n.replace(Qm,e=>e.slice(1).toUpperCase())),Zm=/\B([A-Z])/g,Ss=ba(n=>n.replace(Zm,"-$1").toLowerCase()),wa=ba(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xa=ba(n=>n?`on${wa(n)}`:""),Ji=(n,e)=>!Object.is(n,e),ja=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Jm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qu;const Ra=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ot(i)?ig(i):Ca(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ot(n)||vt(n))return n}const eg=/;(?![^(]*\))/g,tg=/:([^]+)/,ng=/\/\*[^]*?\*\//g;function ig(n){const e={};return n.replace(ng,"").split(eg).forEach(t=>{if(t){const i=t.split(tg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function si(n){let e="";if(Ot(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=si(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rg=su(sg);function Cd(n){return!!n||n===""}function og(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=lu(n[i],e[i]);return t}function lu(n,e){if(n===e)return!0;let t=$u(n),i=$u(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=jn(n),i=jn(e),t||i)return n===e;if(t=Ye(n),i=Ye(e),t||i)return t&&i?og(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!lu(n[o],e[o]))return!1}}return String(n)===String(e)}const Pd=n=>!!(n&&n.__v_isRef===!0),Sn=n=>Ot(n)?n:n==null?"":Ye(n)||vt(n)&&(n.toString===bd||!$e(n.toString))?Pd(n)?Sn(n.value):JSON.stringify(n,Id,2):String(n),Id=(n,e)=>Pd(e)?Id(n,e.value):Qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[qa(i,r)+" =>"]=s,t),{})}:Ed(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qa(t))}:jn(e)?qa(e):vt(e)&&!Ye(e)&&!wd(e)?String(e):e,qa=(n,e="")=>{var t;return jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let dn;class Ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){++this._on===1&&(this.prevScope=dn,dn=this)}off(){this._on>0&&--this._on===0&&(dn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ag(n){return new Ld(n)}function lg(){return dn}let bt;const Ka=new WeakSet;class Dd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dn&&dn.active&&dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zu(this),Od(this);const e=bt,t=Gn;bt=this,Gn=!0;try{return this.fn()}finally{Fd(this),bt=e,Gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fu(e);this.deps=this.depsTail=void 0,Zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let Nd=0,Wr,Xr;function Ud(n,e=!1){if(n.flags|=8,e){n.next=Xr,Xr=n;return}n.next=Wr,Wr=n}function cu(){Nd++}function uu(){if(--Nd>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),fu(i),cg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function jl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===eo)||(n.globalVersion=eo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!jl(n))))return;n.flags|=2;const e=n.dep,t=bt,i=Gn;bt=n,Gn=!0;try{Od(n);const s=n.fn(n._value);(e.version===0||Ji(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=t,Gn=i,Fd(n),n.flags&=-3}}function fu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)fu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Gn=!0;const Hd=[];function Ii(){Hd.push(Gn),Gn=!1}function Li(){const n=Hd.pop();Gn=n===void 0?!0:n}function Zu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let eo=0;class ug{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Gn||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new ug(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,kd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,eo++,this.notify(e)}notify(e){cu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{uu()}}}function kd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ql=new WeakMap,vs=Symbol(""),Kl=Symbol(""),to=Symbol("");function Kt(n,e,t){if(Gn&&bt){let i=ql.get(n);i||ql.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new hu),s.map=i,s.key=t),s.track()}}function Ti(n,e,t,i,s,r){const o=ql.get(n);if(!o){eo++;return}const a=l=>{l&&l.trigger()};if(cu(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&au(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===to||!jn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(to)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vs)),Qs(n)&&a(o.get(Kl)));break;case"delete":l||(a(o.get(vs)),Qs(n)&&a(o.get(Kl)));break;case"set":Qs(n)&&a(o.get(vs));break}}uu()}function ws(n){const e=dt(n);return e===n?e:(Kt(e,"iterate",to),Dn(n)?e:e.map(qn))}function Pa(n){return Kt(n=dt(n),"iterate",to),n}function qi(n,e){return Di(n)?rr(xs(n)?qn(e):e):qn(e)}const fg={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,n=>qi(this,n))},concat(...n){return ws(this).concat(...n.map(e=>Ye(e)?ws(e):e))},entries(){return Ya(this,"entries",n=>(n[1]=qi(this,n[1]),n))},every(n,e){return di(this,"every",n,e,void 0,arguments)},filter(n,e){return di(this,"filter",n,e,t=>t.map(i=>qi(this,i)),arguments)},find(n,e){return di(this,"find",n,e,t=>qi(this,t),arguments)},findIndex(n,e){return di(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return di(this,"findLast",n,e,t=>qi(this,t),arguments)},findLastIndex(n,e){return di(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return di(this,"forEach",n,e,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,e){return di(this,"map",n,e,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...e){return Ju(this,"reduce",n,e)},reduceRight(n,...e){return Ju(this,"reduceRight",n,e)},shift(){return br(this,"shift")},some(n,e){return di(this,"some",n,e,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return Ya(this,"values",n=>qi(this,n))}};function Ya(n,e,t){const i=Pa(n),s=i[e]();return i!==n&&!Dn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const hg=Array.prototype;function di(n,e,t,i,s,r){const o=Pa(n),a=o!==n&&!Dn(n),l=o[e];if(l!==hg[e]){const f=l.apply(n,r);return a?qn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,qi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ju(n,e,t,i){const s=Pa(n);let r=t;return s!==n&&(Dn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,qi(n,a),l,n)}),s[e](r,...i)}function $a(n,e,t){const i=dt(n);Kt(i,"iterate",to);const s=i[e](...t);return(s===-1||s===!1)&&mu(t[0])?(t[0]=dt(t[0]),i[e](...t)):s}function br(n,e,t=[]){Ii(),cu();const i=dt(n)[e].apply(n,t);return uu(),Li(),i}const dg=su("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function pg(n){jn(n)||(n=String(n));const e=dt(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Eg:jd:r?Xd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=fg[t]))return l;if(t==="hasOwnProperty")return pg}const a=Reflect.get(e,t,Qt(e)?e:i);if((jn(t)?Vd.has(t):dg(t))||(s||Kt(e,"get",t),r))return a;if(Qt(a)){const l=o&&au(t)?a:a.value;return s&&vt(l)?$l(l):l}return vt(a)?s?$l(a):_o(a):a}}class Gd extends zd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ye(e)&&au(t);if(!this._isShallow){const c=Di(r);if(!Dn(i)&&!Di(i)&&(r=dt(r),i=dt(i)),!o&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,Qt(e)?e:s);return e===dt(s)&&(a?Ji(i,r)&&Ti(e,"set",t,i):Ti(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ti(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!jn(t)||!Vd.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",Ye(e)?"length":vs),Reflect.ownKeys(e)}}class mg extends zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gg=new Gd,_g=new mg,vg=new Gd(!0);const Yl=n=>n,So=n=>Reflect.getPrototypeOf(n);function xg(n,e,t){return function(...i){const s=this.__v_raw,r=dt(s),o=Qs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Yl:e?rr:qn;return!e&&Kt(r,"iterate",l?Kl:vs),Xt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Eo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ag(n,e){const t={get(s){const r=this.__v_raw,o=dt(r),a=dt(s);n||(Ji(s,a)&&Kt(o,"get",s),Kt(o,"get",a));const{has:l}=So(o),c=e?Yl:n?rr:qn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Kt(dt(s),"iterate",vs),s.size},has(s){const r=this.__v_raw,o=dt(r),a=dt(s);return n||(Ji(s,a)&&Kt(o,"has",s),Kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=dt(a),c=e?Yl:n?rr:qn;return!n&&Kt(l,"iterate",vs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Xt(t,n?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(s){!e&&!Dn(s)&&!Di(s)&&(s=dt(s));const r=dt(this);return So(r).has.call(r,s)||(r.add(s),Ti(r,"add",s,s)),this},set(s,r){!e&&!Dn(r)&&!Di(r)&&(r=dt(r));const o=dt(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=dt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ji(r,u)&&Ti(o,"set",s,r):Ti(o,"add",s,r),this},delete(s){const r=dt(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=dt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ti(r,"delete",s,void 0),c},clear(){const s=dt(this),r=s.size!==0,o=s.clear();return r&&Ti(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=xg(s,n,e)}),t}function du(n,e){const t=Ag(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const Mg={get:du(!1,!1)},yg={get:du(!1,!0)},Sg={get:du(!0,!1)};const Wd=new WeakMap,Xd=new WeakMap,jd=new WeakMap,Eg=new WeakMap;function Tg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bg(n){return n.__v_skip||!Object.isExtensible(n)?0:Tg($m(n))}function _o(n){return Di(n)?n:pu(n,!1,gg,Mg,Wd)}function qd(n){return pu(n,!1,vg,yg,Xd)}function $l(n){return pu(n,!0,_g,Sg,jd)}function pu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=bg(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function xs(n){return Di(n)?xs(n.__v_raw):!!(n&&n.__v_isReactive)}function Di(n){return!!(n&&n.__v_isReadonly)}function Dn(n){return!!(n&&n.__v_isShallow)}function mu(n){return n?!!n.__v_raw:!1}function dt(n){const e=n&&n.__v_raw;return e?dt(e):n}function wg(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const qn=n=>vt(n)?_o(n):n,rr=n=>vt(n)?$l(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function St(n){return Kd(n,!1)}function Rg(n){return Kd(n,!0)}function Kd(n,e){return Qt(n)?n:new Cg(n,e)}class Cg{constructor(e,t){this.dep=new hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:dt(e),this._value=t?e:qn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Dn(e)||Di(e);e=i?e:dt(e),Ji(e,t)&&(this._rawValue=e,this._value=i?e:qn(e),this.dep.trigger())}}function Dt(n){return Qt(n)?n.value:n}const Pg={get:(n,e,t)=>e==="__v_raw"?n:Dt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Qt(s)&&!Qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Yd(n){return xs(n)?n:new Proxy(n,Pg)}class Ig{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Ud(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lg(n,e,t=!1){let i,s;return $e(n)?i=n:(i=n.get,s=n.set),new Ig(i,s,t)}const To={},ua=new WeakMap;let ds;function Dg(n,e=!1,t=ds){if(t){let i=ua.get(t);i||ua.set(t,i=[]),i.push(n)}}function Ng(n,e,t=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=A=>s?A:Dn(A)||s===!1||s===0?bi(A,1):bi(A);let u,f,h,d,g=!1,_=!1;if(Qt(n)?(f=()=>n.value,g=Dn(n)):xs(n)?(f=()=>c(n),g=!0):Ye(n)?(_=!0,g=n.some(A=>xs(A)||Dn(A)),f=()=>n.map(A=>{if(Qt(A))return A.value;if(xs(A))return c(A);if($e(A))return l?l(A,2):A()})):$e(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ii();try{h()}finally{Li()}}const A=ds;ds=u;try{return l?l(n,3,[d]):n(d)}finally{ds=A}}:f=ai,e&&s){const A=f,w=s===!0?1/0:s;f=()=>bi(A(),w)}const m=lg(),p=()=>{u.stop(),m&&m.active&&ou(m.effects,u)};if(r&&e){const A=e;e=(...w)=>{A(...w),p()}}let y=_?new Array(n.length).fill(To):To;const b=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const w=u.run();if(s||g||(_?w.some((C,I)=>Ji(C,y[I])):Ji(w,y))){h&&h();const C=ds;ds=u;try{const I=[w,y===To?void 0:_&&y[0]===To?[]:y,d];y=w,l?l(e,3,I):e(...I)}finally{ds=C}}}else u.run()};return a&&a(b),u=new Dd(f),u.scheduler=o?()=>o(b,!1):b,d=A=>Dg(A,!1,u),h=u.onStop=()=>{const A=ua.get(u);if(A){if(l)l(A,4);else for(const w of A)w();ua.delete(u)}},e?i?b(!0):y=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function bi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))bi(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)bi(n[i],e,t);else if(Ed(n)||Qs(n))n.forEach(i=>{bi(i,e,t)});else if(wd(n)){for(const i in n)bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&bi(n[i],e,t)}return n}function vo(n,e,t,i){try{return i?n(...i):n()}catch(s){Ia(s,e,t)}}function ci(n,e,t,i){if($e(n)){const s=vo(n,e,t,i);return s&&Td(s)&&s.catch(r=>{Ia(r,e,t)}),s}if(Ye(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ci(n[r],e,t,i));return s}}function Ia(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Ii(),vo(r,null,10,[n,l,c]),Li();return}}Ug(n,t,s,i,o)}function Ug(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const sn=[];let ei=-1;const Zs=[];let Ki=null,qs=0;const $d=Promise.resolve();let fa=null;function Qd(n){const e=fa||$d;return n?e.then(this?n.bind(this):n):e}function Og(n){let e=ei+1,t=sn.length;for(;e<t;){const i=e+t>>>1,s=sn[i],r=no(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function gu(n){if(!(n.flags&1)){const e=no(n),t=sn[sn.length-1];!t||!(n.flags&2)&&e>=no(t)?sn.push(n):sn.splice(Og(e),0,n),n.flags|=1,Zd()}}function Zd(){fa||(fa=$d.then(ep))}function Fg(n){Ye(n)?Zs.push(...n):Ki&&n.id===-1?Ki.splice(qs+1,0,n):n.flags&1||(Zs.push(n),n.flags|=1),Zd()}function ef(n,e,t=ei+1){for(;t<sn.length;t++){const i=sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jd(n){if(Zs.length){const e=[...new Set(Zs)].sort((t,i)=>no(t)-no(i));if(Zs.length=0,Ki){Ki.push(...e);return}for(Ki=e,qs=0;qs<Ki.length;qs++){const t=Ki[qs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ki=null,qs=0}}const no=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ep(n){try{for(ei=0;ei<sn.length;ei++){const e=sn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<sn.length;ei++){const e=sn[ei];e&&(e.flags&=-2)}ei=-1,sn.length=0,Jd(),fa=null,(sn.length||Zs.length)&&ep()}}let Wt=null,tp=null;function ha(n){const e=Wt;return Wt=n,tp=n&&n.type.__scopeId||null,e}function Hn(n,e=Wt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ma(-1);const r=ha(e);let o;try{o=n(...s)}finally{ha(r),i._d&&ma(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function tf(n,e){if(Wt===null)return n;const t=Oa(Wt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&($e(r)&&(r={mounted:r,updated:r}),r.deep&&bi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ss(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ii(),ci(l,t,8,[n.el,a,n,e]),Li())}}function Jo(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function Ci(n,e,t=!1){const i=O_();if(i||er){let s=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&$e(e)?e.call(i&&i.proxy):e}}const Bg=Symbol.for("v-scx"),Hg=()=>Ci(Bg);function As(n,e,t){return np(n,e,t)}function np(n,e,t=Et){const{immediate:i,deep:s,flush:r,once:o}=t,a=Xt({},t),l=e&&i||!e&&r!=="post";let c;if(ro){if(r==="sync"){const d=Hg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ai,d.resume=ai,d.pause=ai,d}}const u=Yt;a.call=(d,g,_)=>ci(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{hn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():gu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ng(n,e,a);return ro&&(c?c.push(h):l&&h()),h}function kg(n,e,t){const i=this.proxy,s=Ot(n)?n.includes(".")?ip(i,n):()=>i[n]:n.bind(i,i);let r;$e(e)?r=e:(r=e.handler,t=e);const o=Ao(this),a=np(s,r.bind(i),t);return o(),a}function ip(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Vg=Symbol("_vte"),zg=n=>n.__isTeleport,Gg=Symbol("_leaveCb");function _u(n,e){n.shapeFlag&6&&n.component?(n.transition=e,_u(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function $n(n,e){return $e(n)?Xt({name:n.name},e,{setup:n}):n}function sp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function nf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const da=new WeakMap;function jr(n,e,t,i,s=!1){if(Ye(n)){n.forEach((_,m)=>jr(_,e&&(Ye(e)?e[m]:e),t,i,s));return}if(Js(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Oa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,f=a.setupState,h=dt(f),d=f===Et?Sd:_=>nf(u,_)?!1:pt(h,_),g=(_,m)=>!(m&&nf(u,m));if(c!=null&&c!==l){if(sf(e),Ot(c))u[c]=null,d(c)&&(f[c]=null);else if(Qt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if($e(l))vo(l,a,12,[o,u]);else{const _=Ot(l),m=Qt(l);if(_||m){const p=()=>{if(n.f){const y=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ye(y)&&ou(y,r);else if(Ye(y))y.includes(r)||y.push(r);else if(_)u[l]=[r],d(l)&&(f[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{p(),da.delete(n)};y.id=-1,da.set(n,y),hn(y,t)}else sf(n),p()}}}function sf(n){const e=da.get(n);e&&(e.flags|=8,da.delete(n))}Ra().requestIdleCallback;Ra().cancelIdleCallback;const Js=n=>!!n.type.__asyncLoader,rp=n=>n.type.__isKeepAlive;function Wg(n,e){op(n,"a",e)}function Xg(n,e){op(n,"da",e)}function op(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(La(e,i,t),t){let s=t.parent;for(;s&&s.parent;)rp(s.parent.vnode)&&jg(i,e,t,s),s=s.parent}}function jg(n,e,t,i){const s=La(e,n,i,!0);ap(()=>{ou(i[e],s)},t)}function La(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ii();const a=Ao(t),l=ci(e,t,n,o);return a(),Li(),l});return i?s.unshift(r):s.push(r),r}}const Oi=n=>(e,t=Yt)=>{(!ro||n==="sp")&&La(n,(...i)=>e(...i),t)},qg=Oi("bm"),Da=Oi("m"),Kg=Oi("bu"),Yg=Oi("u"),vu=Oi("bum"),ap=Oi("um"),$g=Oi("sp"),Qg=Oi("rtg"),Zg=Oi("rtc");function Jg(n,e=Yt){La("ec",n,e)}const e_="components";function mn(n,e){return n_(e_,n,!0,e)||n}const t_=Symbol.for("v-ndc");function n_(n,e,t=!0,i=!1){const s=Wt||Yt;if(s){const r=s.type;{const a=V_(r,!1);if(a&&(a===e||a===Nn(e)||a===wa(Nn(e))))return r}const o=rf(s[n]||r[n],e)||rf(s.appContext[n],e);return!o&&i?r:o}}function rf(n,e){return n&&(n[e]||n[Nn(e)]||n[wa(Nn(e))])}function pi(n,e,t,i){let s;const r=t,o=Ye(n);if(o||Ot(n)){const a=o&&xs(n);let l=!1,c=!1;a&&(l=!Dn(n),c=Di(n),n=Pa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?rr(qn(n[u])):qn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function lp(n,e,t={},i,s){if(Wt.ce||Wt.parent&&Js(Wt.parent)&&Wt.parent.ce){const c=Object.keys(t).length>0;return je(),Cn(Lt,null,[Mt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),je();const o=r&&cp(r(t)),a=t.key||o&&o.key,l=Cn(Lt,{key:(a&&!jn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function cp(n){return n.some(e=>so(e)?!(e.type===Ni||e.type===Lt&&!cp(e.children)):!0)?n:null}const Ql=n=>n?Pp(n)?Oa(n):Ql(n.parent):null,qr=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ql(n.parent),$root:n=>Ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fp(n),$forceUpdate:n=>n.f||(n.f=()=>{gu(n.update)}),$nextTick:n=>n.n||(n.n=Qd.bind(n.proxy)),$watch:n=>kg.bind(n)}),Qa=(n,e)=>n!==Et&&!n.__isScriptSetup&&pt(n,e),i_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Qa(i,e))return o[e]=1,i[e];if(s!==Et&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==Et&&pt(t,e))return o[e]=4,t[e];Zl&&(o[e]=0)}}const c=qr[e];let u,f;if(c)return e==="$attrs"&&Kt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Et&&pt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Qa(s,e)?(s[e]=t,!0):i!==Et&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Et&&a[0]!=="$"&&pt(n,a)||Qa(e,a)||pt(r,a)||pt(i,a)||pt(qr,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function of(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Zl=!0;function s_(n){const e=fp(n),t=n.proxy,i=n.ctx;Zl=!1,e.beforeCreate&&af(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:b,unmounted:A,render:w,renderTracked:C,renderTriggered:I,errorCaptured:N,serverPrefetch:T,expose:S,inheritAttrs:D,components:X,directives:J,filters:ae}=e;if(c&&r_(c,i,null),o)for(const ue in o){const q=o[ue];$e(q)&&(i[ue]=q.bind(t))}if(s){const ue=s.call(t,t);vt(ue)&&(n.data=_o(ue))}if(Zl=!0,r)for(const ue in r){const q=r[ue],Ee=$e(q)?q.bind(t,t):$e(q.get)?q.get.bind(t,t):ai,we=!$e(q)&&$e(q.set)?q.set.bind(t):ai,Le=$t({get:Ee,set:we});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Be=>Le.value=Be})}if(a)for(const ue in a)up(a[ue],i,t,ue);if(l){const ue=$e(l)?l.call(t):l;Reflect.ownKeys(ue).forEach(q=>{Jo(q,ue[q])})}u&&af(u,n,"c");function ee(ue,q){Ye(q)?q.forEach(Ee=>ue(Ee.bind(t))):q&&ue(q.bind(t))}if(ee(qg,f),ee(Da,h),ee(Kg,d),ee(Yg,g),ee(Wg,_),ee(Xg,m),ee(Jg,N),ee(Zg,C),ee(Qg,I),ee(vu,y),ee(ap,A),ee($g,T),Ye(S))if(S.length){const ue=n.exposed||(n.exposed={});S.forEach(q=>{Object.defineProperty(ue,q,{get:()=>t[q],set:Ee=>t[q]=Ee,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===ai&&(n.render=w),D!=null&&(n.inheritAttrs=D),X&&(n.components=X),J&&(n.directives=J),T&&sp(n)}function r_(n,e,t=ai){Ye(n)&&(n=Jl(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Ci(s.from||i,s.default,!0):r=Ci(s.from||i):r=Ci(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function af(n,e,t){ci(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function up(n,e,t,i){let s=i.includes(".")?ip(t,i):()=>t[i];if(Ot(n)){const r=e[n];$e(r)&&As(s,r)}else if($e(n))As(s,n.bind(t));else if(vt(n))if(Ye(n))n.forEach(r=>up(r,e,t,i));else{const r=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(r)&&As(s,r,n)}}function fp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>pa(l,c,o,!0)),pa(l,e,o)),vt(e)&&r.set(e,l),l}function pa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&pa(n,r,t,!0),s&&s.forEach(o=>pa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=o_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const o_={data:lf,props:cf,emits:cf,methods:Hr,computed:Hr,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Hr,directives:Hr,watch:l_,provide:lf,inject:a_};function lf(n,e){return e?n?function(){return Xt($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function a_(n,e){return Hr(Jl(n),Jl(e))}function Jl(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tn(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?Xt(Object.create(null),n,e):e}function cf(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:Xt(Object.create(null),of(n),of(e??{})):e}function l_(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=tn(n[i],e[i]);return t}function hp(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let c_=0;function u_(n,e){return function(i,s=null){$e(i)||(i=Xt({},i)),s!=null&&!vt(s)&&(s=null);const r=hp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:c_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:G_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&$e(u.install)?(o.add(u),u.install(c,...f)):$e(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Mt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Oa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ci(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=er;er=c;try{return u()}finally{er=f}}};return c}}let er=null;const f_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nn(e)}Modifiers`]||n[`${Ss(e)}Modifiers`];function h_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Et;let s=t;const r=e.startsWith("update:"),o=r&&f_(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ot(u)?u.trim():u)),o.number&&(s=t.map(Jm)));let a,l=i[a=Xa(e)]||i[a=Xa(Nn(e))];!l&&r&&(l=i[a=Xa(Ss(e))]),l&&ci(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ci(c,n,6,s)}}const d_=new WeakMap;function dp(n,e,t=!1){const i=t?d_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$e(n)){const l=c=>{const u=dp(c,e,!0);u&&(a=!0,Xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ye(r)?r.forEach(l=>o[l]=null):Xt(o,r),vt(n)&&i.set(n,o),o)}function Na(n,e){return!n||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Ss(e))||pt(n,e))}function uf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=ha(n);let p,y;try{if(t.shapeFlag&4){const A=s||i,w=A;p=ni(c.call(w,A,u,f,d,h,g)),y=a}else{const A=e;p=ni(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),y=e.props?a:p_(a)}}catch(A){Kr.length=0,Ia(A,n,1),p=Mt(Ni)}let b=p;if(y&&_!==!1){const A=Object.keys(y),{shapeFlag:w}=b;A.length&&w&7&&(r&&A.some(ru)&&(y=m_(y,r)),b=or(b,y,!1,!0))}return t.dirs&&(b=or(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&_u(b,t.transition),p=b,ha(m),p}const p_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ta(t))&&((e||(e={}))[t]=n[t]);return e},m_=(n,e)=>{const t={};for(const i in n)(!ru(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function g_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ff(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(pp(o,i,h)&&!Na(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ff(i,o,c):!0:!!o;return!1}function ff(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(pp(e,n,r)&&!Na(t,r))return!0}return!1}function pp(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!lu(i,s):i!==s}function __({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const mp={},gp=()=>Object.create(mp),_p=n=>Object.getPrototypeOf(n)===mp;function v_(n,e,t,i=!1){const s={},r=gp();n.propsDefaults=Object.create(null),vp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:qd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function x_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=dt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Na(n.emitsOptions,h))continue;const d=e[h];if(l)if(pt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Nn(h);s[g]=ec(l,a,g,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{vp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=Ss(f))===f||!pt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ec(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&Ti(n.attrs,"set","")}function vp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let u;s&&pt(s,u=Nn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=dt(t),c=a||Et;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ec(s,l,f,c[f],n,!pt(c,f))}}return o}function ec(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ao(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(t))&&(i=!0))}return i}const A_=new WeakMap;function xp(n,e,t=!1){const i=t?A_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$e(n)){const u=f=>{l=!0;const[h,d]=xp(f,e,!0);Xt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,$s),$s;if(Ye(r))for(let u=0;u<r.length;u++){const f=Nn(r[u]);hf(f)&&(o[f]=Et)}else if(r)for(const u in r){const f=Nn(u);if(hf(f)){const h=r[u],d=o[f]=Ye(h)||$e(h)?{type:h}:Xt({},h),g=d.type;let _=!1,m=!0;if(Ye(g))for(let p=0;p<g.length;++p){const y=g[p],b=$e(y)&&y.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=$e(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||pt(d,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function hf(n){return n[0]!=="$"&&!Gr(n)}const xu=n=>n==="_"||n==="_ctx"||n==="$stable",Au=n=>Ye(n)?n.map(ni):[ni(n)],M_=(n,e,t)=>{if(e._n)return e;const i=Hn((...s)=>Au(e(...s)),t);return i._c=!1,i},Ap=(n,e,t)=>{const i=n._ctx;for(const s in n){if(xu(s))continue;const r=n[s];if($e(r))e[s]=M_(s,r,i);else if(r!=null){const o=Au(r);e[s]=()=>o}}},Mp=(n,e)=>{const t=Au(e);n.slots.default=()=>t},yp=(n,e,t)=>{for(const i in e)(t||!xu(i))&&(n[i]=e[i])},y_=(n,e,t)=>{const i=n.slots=gp();if(n.vnode.shapeFlag&32){const s=e._;s?(yp(i,e,t),t&&Rd(i,"_",s,!0)):Ap(e,i)}else e&&Mp(n,e)},S_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:yp(s,e,t):(r=!e.$stable,Ap(e,s)),o=e}else e&&(Mp(n,e),o={default:1});if(r)for(const a in s)!xu(a)&&o[a]==null&&delete s[a]},hn=R_;function E_(n){return T_(n)}function T_(n,e){const t=Ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ai,insertStaticContent:g}=n,_=(R,v,F,W=null,Y=null,k=null,_e=void 0,te=null,le=!!v.dynamicChildren)=>{if(R===v)return;R&&!wr(R,v)&&(W=P(R),Be(R,Y,k,!0),R=null),v.patchFlag===-2&&(le=!1,v.dynamicChildren=null);const{type:pe,ref:Pe,shapeFlag:M}=v;switch(pe){case Ua:m(R,v,F,W);break;case Ni:p(R,v,F,W);break;case ea:R==null&&y(v,F,W,_e);break;case Lt:X(R,v,F,W,Y,k,_e,te,le);break;default:M&1?w(R,v,F,W,Y,k,_e,te,le):M&6?J(R,v,F,W,Y,k,_e,te,le):(M&64||M&128)&&pe.process(R,v,F,W,Y,k,_e,te,le,fe)}Pe!=null&&Y?jr(Pe,R&&R.ref,k,v||R,!v):Pe==null&&R&&R.ref!=null&&jr(R.ref,null,k,R,!0)},m=(R,v,F,W)=>{if(R==null)i(v.el=a(v.children),F,W);else{const Y=v.el=R.el;v.children!==R.children&&c(Y,v.children)}},p=(R,v,F,W)=>{R==null?i(v.el=l(v.children||""),F,W):v.el=R.el},y=(R,v,F,W)=>{[R.el,R.anchor]=g(R.children,v,F,W,R.el,R.anchor)},b=({el:R,anchor:v},F,W)=>{let Y;for(;R&&R!==v;)Y=h(R),i(R,F,W),R=Y;i(v,F,W)},A=({el:R,anchor:v})=>{let F;for(;R&&R!==v;)F=h(R),s(R),R=F;s(v)},w=(R,v,F,W,Y,k,_e,te,le)=>{if(v.type==="svg"?_e="svg":v.type==="math"&&(_e="mathml"),R==null)C(v,F,W,Y,k,_e,te,le);else{const pe=R.el&&R.el._isVueCE?R.el:null;try{pe&&pe._beginPatch(),T(R,v,Y,k,_e,te,le)}finally{pe&&pe._endPatch()}}},C=(R,v,F,W,Y,k,_e,te)=>{let le,pe;const{props:Pe,shapeFlag:M,transition:x,dirs:U}=R;if(le=R.el=o(R.type,k,Pe&&Pe.is,Pe),M&8?u(le,R.children):M&16&&N(R.children,le,null,W,Y,Za(R,k),_e,te),U&&ss(R,null,W,"created"),I(le,R,R.scopeId,_e,W),Pe){for(const ce in Pe)ce!=="value"&&!Gr(ce)&&r(le,ce,null,Pe[ce],k,W);"value"in Pe&&r(le,"value",null,Pe.value,k),(pe=Pe.onVnodeBeforeMount)&&Jn(pe,W,R)}U&&ss(R,null,W,"beforeMount");const $=b_(Y,x);$&&x.beforeEnter(le),i(le,v,F),((pe=Pe&&Pe.onVnodeMounted)||$||U)&&hn(()=>{pe&&Jn(pe,W,R),$&&x.enter(le),U&&ss(R,null,W,"mounted")},Y)},I=(R,v,F,W,Y)=>{if(F&&d(R,F),W)for(let k=0;k<W.length;k++)d(R,W[k]);if(Y){let k=Y.subTree;if(v===k||bp(k.type)&&(k.ssContent===v||k.ssFallback===v)){const _e=Y.vnode;I(R,_e,_e.scopeId,_e.slotScopeIds,Y.parent)}}},N=(R,v,F,W,Y,k,_e,te,le=0)=>{for(let pe=le;pe<R.length;pe++){const Pe=R[pe]=te?Ei(R[pe]):ni(R[pe]);_(null,Pe,v,F,W,Y,k,_e,te)}},T=(R,v,F,W,Y,k,_e)=>{const te=v.el=R.el;let{patchFlag:le,dynamicChildren:pe,dirs:Pe}=v;le|=R.patchFlag&16;const M=R.props||Et,x=v.props||Et;let U;if(F&&rs(F,!1),(U=x.onVnodeBeforeUpdate)&&Jn(U,F,v,R),Pe&&ss(v,R,F,"beforeUpdate"),F&&rs(F,!0),(M.innerHTML&&x.innerHTML==null||M.textContent&&x.textContent==null)&&u(te,""),pe?S(R.dynamicChildren,pe,te,F,W,Za(v,Y),k):_e||q(R,v,te,null,F,W,Za(v,Y),k,!1),le>0){if(le&16)D(te,M,x,F,Y);else if(le&2&&M.class!==x.class&&r(te,"class",null,x.class,Y),le&4&&r(te,"style",M.style,x.style,Y),le&8){const $=v.dynamicProps;for(let ce=0;ce<$.length;ce++){const Q=$[ce],L=M[Q],B=x[Q];(B!==L||Q==="value")&&r(te,Q,L,B,Y,F)}}le&1&&R.children!==v.children&&u(te,v.children)}else!_e&&pe==null&&D(te,M,x,F,Y);((U=x.onVnodeUpdated)||Pe)&&hn(()=>{U&&Jn(U,F,v,R),Pe&&ss(v,R,F,"updated")},W)},S=(R,v,F,W,Y,k,_e)=>{for(let te=0;te<v.length;te++){const le=R[te],pe=v[te],Pe=le.el&&(le.type===Lt||!wr(le,pe)||le.shapeFlag&198)?f(le.el):F;_(le,pe,Pe,null,W,Y,k,_e,!0)}},D=(R,v,F,W,Y)=>{if(v!==F){if(v!==Et)for(const k in v)!Gr(k)&&!(k in F)&&r(R,k,v[k],null,Y,W);for(const k in F){if(Gr(k))continue;const _e=F[k],te=v[k];_e!==te&&k!=="value"&&r(R,k,te,_e,Y,W)}"value"in F&&r(R,"value",v.value,F.value,Y)}},X=(R,v,F,W,Y,k,_e,te,le)=>{const pe=v.el=R?R.el:a(""),Pe=v.anchor=R?R.anchor:a("");let{patchFlag:M,dynamicChildren:x,slotScopeIds:U}=v;U&&(te=te?te.concat(U):U),R==null?(i(pe,F,W),i(Pe,F,W),N(v.children||[],F,Pe,Y,k,_e,te,le)):M>0&&M&64&&x&&R.dynamicChildren&&R.dynamicChildren.length===x.length?(S(R.dynamicChildren,x,F,Y,k,_e,te),(v.key!=null||Y&&v===Y.subTree)&&Sp(R,v,!0)):q(R,v,F,Pe,Y,k,_e,te,le)},J=(R,v,F,W,Y,k,_e,te,le)=>{v.slotScopeIds=te,R==null?v.shapeFlag&512?Y.ctx.activate(v,F,W,_e,le):ae(v,F,W,Y,k,_e,le):he(R,v,le)},ae=(R,v,F,W,Y,k,_e)=>{const te=R.component=U_(R,W,Y);if(rp(R)&&(te.ctx.renderer=fe),F_(te,!1,_e),te.asyncDep){if(Y&&Y.registerDep(te,ee,_e),!R.el){const le=te.subTree=Mt(Ni);p(null,le,v,F),R.placeholder=le.el}}else ee(te,R,v,F,Y,k,_e)},he=(R,v,F)=>{const W=v.component=R.component;if(g_(R,v,F))if(W.asyncDep&&!W.asyncResolved){ue(W,v,F);return}else W.next=v,W.update();else v.el=R.el,W.vnode=v},ee=(R,v,F,W,Y,k,_e)=>{const te=()=>{if(R.isMounted){let{next:M,bu:x,u:U,parent:$,vnode:ce}=R;{const re=Ep(R);if(re){M&&(M.el=ce.el,ue(R,M,_e)),re.asyncDep.then(()=>{hn(()=>{R.isUnmounted||pe()},Y)});return}}let Q=M,L;rs(R,!1),M?(M.el=ce.el,ue(R,M,_e)):M=ce,x&&ja(x),(L=M.props&&M.props.onVnodeBeforeUpdate)&&Jn(L,$,M,ce),rs(R,!0);const B=uf(R),ne=R.subTree;R.subTree=B,_(ne,B,f(ne.el),P(ne),R,Y,k),M.el=B.el,Q===null&&__(R,B.el),U&&hn(U,Y),(L=M.props&&M.props.onVnodeUpdated)&&hn(()=>Jn(L,$,M,ce),Y)}else{let M;const{el:x,props:U}=v,{bm:$,m:ce,parent:Q,root:L,type:B}=R,ne=Js(v);rs(R,!1),$&&ja($),!ne&&(M=U&&U.onVnodeBeforeMount)&&Jn(M,Q,v),rs(R,!0);{L.ce&&L.ce._hasShadowRoot()&&L.ce._injectChildStyle(B);const re=R.subTree=uf(R);_(null,re,F,W,R,Y,k),v.el=re.el}if(ce&&hn(ce,Y),!ne&&(M=U&&U.onVnodeMounted)){const re=v;hn(()=>Jn(M,Q,re),Y)}(v.shapeFlag&256||Q&&Js(Q.vnode)&&Q.vnode.shapeFlag&256)&&R.a&&hn(R.a,Y),R.isMounted=!0,v=F=W=null}};R.scope.on();const le=R.effect=new Dd(te);R.scope.off();const pe=R.update=le.run.bind(le),Pe=R.job=le.runIfDirty.bind(le);Pe.i=R,Pe.id=R.uid,le.scheduler=()=>gu(Pe),rs(R,!0),pe()},ue=(R,v,F)=>{v.component=R;const W=R.vnode.props;R.vnode=v,R.next=null,x_(R,v.props,W,F),S_(R,v.children,F),Ii(),ef(R),Li()},q=(R,v,F,W,Y,k,_e,te,le=!1)=>{const pe=R&&R.children,Pe=R?R.shapeFlag:0,M=v.children,{patchFlag:x,shapeFlag:U}=v;if(x>0){if(x&128){we(pe,M,F,W,Y,k,_e,te,le);return}else if(x&256){Ee(pe,M,F,W,Y,k,_e,te,le);return}}U&8?(Pe&16&&z(pe,Y,k),M!==pe&&u(F,M)):Pe&16?U&16?we(pe,M,F,W,Y,k,_e,te,le):z(pe,Y,k,!0):(Pe&8&&u(F,""),U&16&&N(M,F,W,Y,k,_e,te,le))},Ee=(R,v,F,W,Y,k,_e,te,le)=>{R=R||$s,v=v||$s;const pe=R.length,Pe=v.length,M=Math.min(pe,Pe);let x;for(x=0;x<M;x++){const U=v[x]=le?Ei(v[x]):ni(v[x]);_(R[x],U,F,null,Y,k,_e,te,le)}pe>Pe?z(R,Y,k,!0,!1,M):N(v,F,W,Y,k,_e,te,le,M)},we=(R,v,F,W,Y,k,_e,te,le)=>{let pe=0;const Pe=v.length;let M=R.length-1,x=Pe-1;for(;pe<=M&&pe<=x;){const U=R[pe],$=v[pe]=le?Ei(v[pe]):ni(v[pe]);if(wr(U,$))_(U,$,F,null,Y,k,_e,te,le);else break;pe++}for(;pe<=M&&pe<=x;){const U=R[M],$=v[x]=le?Ei(v[x]):ni(v[x]);if(wr(U,$))_(U,$,F,null,Y,k,_e,te,le);else break;M--,x--}if(pe>M){if(pe<=x){const U=x+1,$=U<Pe?v[U].el:W;for(;pe<=x;)_(null,v[pe]=le?Ei(v[pe]):ni(v[pe]),F,$,Y,k,_e,te,le),pe++}}else if(pe>x)for(;pe<=M;)Be(R[pe],Y,k,!0),pe++;else{const U=pe,$=pe,ce=new Map;for(pe=$;pe<=x;pe++){const xe=v[pe]=le?Ei(v[pe]):ni(v[pe]);xe.key!=null&&ce.set(xe.key,pe)}let Q,L=0;const B=x-$+1;let ne=!1,re=0;const Z=new Array(B);for(pe=0;pe<B;pe++)Z[pe]=0;for(pe=U;pe<=M;pe++){const xe=R[pe];if(L>=B){Be(xe,Y,k,!0);continue}let Se;if(xe.key!=null)Se=ce.get(xe.key);else for(Q=$;Q<=x;Q++)if(Z[Q-$]===0&&wr(xe,v[Q])){Se=Q;break}Se===void 0?Be(xe,Y,k,!0):(Z[Se-$]=pe+1,Se>=re?re=Se:ne=!0,_(xe,v[Se],F,null,Y,k,_e,te,le),L++)}const ge=ne?w_(Z):$s;for(Q=ge.length-1,pe=B-1;pe>=0;pe--){const xe=$+pe,Se=v[xe],ye=v[xe+1],ke=xe+1<Pe?ye.el||Tp(ye):W;Z[pe]===0?_(null,Se,F,ke,Y,k,_e,te,le):ne&&(Q<0||pe!==ge[Q]?Le(Se,F,ke,2):Q--)}}},Le=(R,v,F,W,Y=null)=>{const{el:k,type:_e,transition:te,children:le,shapeFlag:pe}=R;if(pe&6){Le(R.component.subTree,v,F,W);return}if(pe&128){R.suspense.move(v,F,W);return}if(pe&64){_e.move(R,v,F,fe);return}if(_e===Lt){i(k,v,F);for(let M=0;M<le.length;M++)Le(le[M],v,F,W);i(R.anchor,v,F);return}if(_e===ea){b(R,v,F);return}if(W!==2&&pe&1&&te)if(W===0)te.beforeEnter(k),i(k,v,F),hn(()=>te.enter(k),Y);else{const{leave:M,delayLeave:x,afterLeave:U}=te,$=()=>{R.ctx.isUnmounted?s(k):i(k,v,F)},ce=()=>{k._isLeaving&&k[Gg](!0),M(k,()=>{$(),U&&U()})};x?x(k,$,ce):ce()}else i(k,v,F)},Be=(R,v,F,W=!1,Y=!1)=>{const{type:k,props:_e,ref:te,children:le,dynamicChildren:pe,shapeFlag:Pe,patchFlag:M,dirs:x,cacheIndex:U}=R;if(M===-2&&(Y=!1),te!=null&&(Ii(),jr(te,null,F,R,!0),Li()),U!=null&&(v.renderCache[U]=void 0),Pe&256){v.ctx.deactivate(R);return}const $=Pe&1&&x,ce=!Js(R);let Q;if(ce&&(Q=_e&&_e.onVnodeBeforeUnmount)&&Jn(Q,v,R),Pe&6)Re(R.component,F,W);else{if(Pe&128){R.suspense.unmount(F,W);return}$&&ss(R,null,v,"beforeUnmount"),Pe&64?R.type.remove(R,v,F,fe,W):pe&&!pe.hasOnce&&(k!==Lt||M>0&&M&64)?z(pe,v,F,!1,!0):(k===Lt&&M&384||!Y&&Pe&16)&&z(le,v,F),W&&Ke(R)}(ce&&(Q=_e&&_e.onVnodeUnmounted)||$)&&hn(()=>{Q&&Jn(Q,v,R),$&&ss(R,null,v,"unmounted")},F)},Ke=R=>{const{type:v,el:F,anchor:W,transition:Y}=R;if(v===Lt){tt(F,W);return}if(v===ea){A(R);return}const k=()=>{s(F),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(R.shapeFlag&1&&Y&&!Y.persisted){const{leave:_e,delayLeave:te}=Y,le=()=>_e(F,k);te?te(R.el,k,le):le()}else k()},tt=(R,v)=>{let F;for(;R!==v;)F=h(R),s(R),R=F;s(v)},Re=(R,v,F)=>{const{bum:W,scope:Y,job:k,subTree:_e,um:te,m:le,a:pe}=R;df(le),df(pe),W&&ja(W),Y.stop(),k&&(k.flags|=8,Be(_e,R,v,F)),te&&hn(te,v),hn(()=>{R.isUnmounted=!0},v)},z=(R,v,F,W=!1,Y=!1,k=0)=>{for(let _e=k;_e<R.length;_e++)Be(R[_e],v,F,W,Y)},P=R=>{if(R.shapeFlag&6)return P(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const v=h(R.anchor||R.el),F=v&&v[Vg];return F?h(F):v};let K=!1;const oe=(R,v,F)=>{let W;R==null?v._vnode&&(Be(v._vnode,null,null,!0),W=v._vnode.component):_(v._vnode||null,R,v,null,null,null,F),v._vnode=R,K||(K=!0,ef(W),Jd(),K=!1)},fe={p:_,um:Be,m:Le,r:Ke,mt:ae,mc:N,pc:q,pbc:S,n:P,o:n};return{render:oe,hydrate:void 0,createApp:u_(oe)}}function Za({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function rs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function b_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sp(n,e,t=!1){const i=n.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Sp(o,a)),a.type===Ua&&(a.patchFlag===-1&&(a=s[r]=Ei(a)),a.el=o.el),a.type===Ni&&!a.el&&(a.el=o.el)}}function w_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ep(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ep(e)}function df(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Tp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Tp(e.subTree):null}const bp=n=>n.__isSuspense;function R_(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):Fg(n)}const Lt=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Ni=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),Kr=[];let En=null;function je(n=!1){Kr.push(En=n?null:[])}function C_(){Kr.pop(),En=Kr[Kr.length-1]||null}let io=1;function ma(n,e=!1){io+=n,n<0&&En&&e&&(En.hasOnce=!0)}function wp(n){return n.dynamicChildren=io>0?En||$s:null,C_(),io>0&&En&&En.push(n),n}function ot(n,e,t,i,s,r){return wp(Ve(n,e,t,i,s,r,!0))}function Cn(n,e,t,i,s){return wp(Mt(n,e,t,i,s,!0))}function so(n){return n?n.__v_isVNode===!0:!1}function wr(n,e){return n.type===e.type&&n.key===e.key}const Rp=({key:n})=>n??null,ta=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ot(n)||Qt(n)||$e(n)?{i:Wt,r:n,k:e,f:!!t}:n:null);function Ve(n,e=null,t=null,i=0,s=null,r=n===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Rp(e),ref:e&&ta(e),scopeId:tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Mu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ot(t)?8:16),io>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const Mt=P_;function P_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===t_)&&(n=Ni),so(n)){const a=or(n,e,!0);return t&&Mu(a,t),io>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(n)]=a:En.push(a)),a.patchFlag=-2,a}if(z_(n)&&(n=n.__vccOpts),e){e=I_(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=si(a)),vt(l)&&(mu(l)&&!Ye(l)&&(l=Xt({},l)),e.style=Ca(l))}const o=Ot(n)?1:bp(n)?128:zg(n)?64:vt(n)?4:$e(n)?2:0;return Ve(n,e,t,i,s,o,r,!0)}function I_(n){return n?mu(n)||_p(n)?Xt({},n):n:null}function or(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?L_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Rp(c),ref:e&&e.ref?t&&r?Ye(r)?r.concat(ta(e)):[r,ta(e)]:ta(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Lt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&_u(u,l.clone(u)),u}function Cp(n=" ",e=0){return Mt(Ua,null,n,e)}function xo(n,e){const t=Mt(ea,null,n);return t.staticCount=e,t}function pn(n="",e=!1){return e?(je(),Cn(Ni,null,n)):Mt(Ni,null,n)}function ni(n){return n==null||typeof n=="boolean"?Mt(Ni):Ye(n)?Mt(Lt,null,n.slice()):so(n)?Ei(n):Mt(Ua,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function Mu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Mu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_p(e)?e._ctx=Wt:s===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Wt},t=32):(e=String(e),i&64?(t=16,e=[Cp(e)]):t=8);n.children=e,n.shapeFlag|=t}function L_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=si([e.class,i.class]));else if(s==="style")e.style=Ca([e.style,i.style]);else if(Ta(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ye(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Jn(n,e,t,i=null){ci(n,e,7,[t,i])}const D_=hp();let N_=0;function U_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||D_,r={uid:N_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xp(i,s),emitsOptions:dp(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=h_.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const O_=()=>Yt||Wt;let ga,tc;{const n=Ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ga=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),tc=e("__VUE_SSR_SETTERS__",t=>ro=t)}const Ao=n=>{const e=Yt;return ga(n),n.scope.on(),()=>{n.scope.off(),ga(e)}},pf=()=>{Yt&&Yt.scope.off(),ga(null)};function Pp(n){return n.vnode.shapeFlag&4}let ro=!1;function F_(n,e=!1,t=!1){e&&tc(e);const{props:i,children:s}=n.vnode,r=Pp(n);v_(n,i,r,e),y_(n,s,t||e);const o=r?B_(n,e):void 0;return e&&tc(!1),o}function B_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,i_);const{setup:i}=t;if(i){Ii();const s=n.setupContext=i.length>1?k_(n):null,r=Ao(n),o=vo(i,n,0,[n.props,s]),a=Td(o);if(Li(),r(),(a||n.sp)&&!Js(n)&&sp(n),a){if(o.then(pf,pf),e)return o.then(l=>{mf(n,l)}).catch(l=>{Ia(l,n,0)});n.asyncDep=o}else mf(n,o)}else Ip(n)}function mf(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Yd(e)),Ip(n)}function Ip(n,e,t){const i=n.type;n.render||(n.render=i.render||ai);{const s=Ao(n);Ii();try{s_(n)}finally{Li(),s()}}}const H_={get(n,e){return Kt(n,"get",""),n[e]}};function k_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,H_),slots:n.slots,emit:n.emit,expose:e}}function Oa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yd(wg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function V_(n,e=!0){return $e(n)?n.displayName||n.name:n.name||e&&n.__name}function z_(n){return $e(n)&&"__vccOpts"in n}const $t=(n,e)=>Lg(n,e,ro);function Lp(n,e,t){try{ma(-1);const i=arguments.length;return i===2?vt(e)&&!Ye(e)?so(e)?Mt(n,null,[e]):Mt(n,e):Mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&so(t)&&(t=[t]),Mt(n,e,t))}finally{ma(1)}}const G_="3.5.28";let nc;const gf=typeof window<"u"&&window.trustedTypes;if(gf)try{nc=gf.createPolicy("vue",{createHTML:n=>n})}catch{}const Dp=nc?n=>nc.createHTML(n):n=>n,W_="http://www.w3.org/2000/svg",X_="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,_f=Si&&Si.createElement("template"),j_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Si.createElementNS(W_,n):e==="mathml"?Si.createElementNS(X_,n):t?Si.createElement(n,{is:t}):Si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{_f.innerHTML=Dp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=_f.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},q_=Symbol("_vtc");function K_(n,e,t){const i=n[q_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const _a=Symbol("_vod"),Np=Symbol("_vsh"),vf={name:"show",beforeMount(n,{value:e},{transition:t}){n[_a]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Rr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Rr(n,!0),i.enter(n)):i.leave(n,()=>{Rr(n,!1)}):Rr(n,e))},beforeUnmount(n,{value:e}){Rr(n,e)}};function Rr(n,e){n.style.display=e?n[_a]:"none",n[Np]=!e}const Y_=Symbol(""),$_=/(?:^|;)\s*display\s*:/;function Q_(n,e,t){const i=n.style,s=Ot(t);let r=!1;if(t&&!s){if(e)if(Ot(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&na(i,a,"")}else for(const o in e)t[o]==null&&na(i,o,"");for(const o in t)o==="display"&&(r=!0),na(i,o,t[o])}else if(s){if(e!==t){const o=i[Y_];o&&(t+=";"+o),i.cssText=t,r=$_.test(t)}}else e&&n.removeAttribute("style");_a in n&&(n[_a]=r?i.display:"",n[Np]&&(i.display="none"))}const xf=/\s*!important$/;function na(n,e,t){if(Ye(t))t.forEach(i=>na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Z_(n,e);xf.test(t)?n.setProperty(Ss(i),t.replace(xf,""),"important"):n[i]=t}}const Af=["Webkit","Moz","ms"],Ja={};function Z_(n,e){const t=Ja[e];if(t)return t;let i=Nn(e);if(i!=="filter"&&i in n)return Ja[e]=i;i=wa(i);for(let s=0;s<Af.length;s++){const r=Af[s]+i;if(r in n)return Ja[e]=r}return e}const Mf="http://www.w3.org/1999/xlink";function yf(n,e,t,i,s,r=rg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Mf,e.slice(6,e.length)):n.setAttributeNS(Mf,e,t):t==null||r&&!Cd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":jn(t)?String(t):t)}function Sf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Dp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function J_(n,e,t,i){n.addEventListener(e,t,i)}function ev(n,e,t,i){n.removeEventListener(e,t,i)}const Ef=Symbol("_vei");function tv(n,e,t,i,s=null){const r=n[Ef]||(n[Ef]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=nv(e);if(i){const c=r[e]=rv(i,s);J_(n,a,c,l)}else o&&(ev(n,a,o,l),r[e]=void 0)}}const Tf=/(?:Once|Passive|Capture)$/;function nv(n){let e;if(Tf.test(n)){e={};let i;for(;i=n.match(Tf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ss(n.slice(2)),e]}let el=0;const iv=Promise.resolve(),sv=()=>el||(iv.then(()=>el=0),el=Date.now());function rv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ci(ov(i,t.value),e,5,[i])};return t.value=n,t.attached=sv(),t}function ov(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,av=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?K_(n,i,o):e==="style"?Q_(n,t,i):Ta(e)?ru(e)||tv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(n,e,i,o))?(Sf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?Sf(n,Nn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),yf(n,e,i,o))};function lv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bf(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bf(e)&&Ot(t)?!1:e in n}const cv=["ctrl","shift","alt","meta"],uv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cv.some(t=>n[`${t}Key`]&&!e.includes(t))},fv=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=uv[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},hv=Xt({patchProp:av},j_);let wf;function dv(){return wf||(wf=E_(hv))}const pv=((...n)=>{const e=dv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=gv(i);if(!s)return;const r=e._component;!$e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function mv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function gv(n){return Ot(n)?document.querySelector(n):n}const _v={data(){return{innerWidth:window.innerWidth,outerWidth:window.outerWidth,innerHeight:window.innerHeight,outerHeight:window.outerHeight,userAgent:navigator.userAgent,product:navigator.product,languages:navigator.languages[0]}},methods:{}},_n=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},vv={class:"loadingScreen"};function xv(n,e,t,i,s,r){return je(),ot("div",vv,[...e[0]||(e[0]=[xo(`<div id="loadingContents" data-v-91b2010e><pre data-v-91b2010e>######    ##   ###### #    # ######    ##   ###### #    #
  ##     #  #  #    # #    #   ##     #  #  #    # #    #
  ##    #    # # ## # #    #   ##    #    # # ## # #    #
  ##    ###### #   #  #    #   ##    ###### #   #  #    #
  ##    #    # #    # #    #   ##    #    # #    # #    #
  ##    #    # #    # ######   ##    #    # #    # ######
</pre><pre data-v-91b2010e>             #  #  #  ###### ###### #      ####             
             #  #  #  #    # #    # #      #   #            
             #  #  #  #    # # ## # #      #    #           
             #  #  #  #    # #   #  #      #    #           
             #  #  #  #    # #    # #      #   #            
             #######  ###### #    # ###### ####             
</pre><div class="container" data-v-91b2010e><div class="box" data-v-91b2010e>#</div><div class="box" data-v-91b2010e>#</div><div class="box" data-v-91b2010e>#</div></div></div>`,1)])])}const Av=_n(_v,[["render",xv],["__scopeId","data-v-91b2010e"]]),Mv=$n({components:{LoadingComponent:Av},data(){return{loading:!0,loadingTimeoutId:null}},methods:{toFalse:function(){this.loading=!1},handleKeyup:function(){this.toFalse()}},mounted(){document.addEventListener("keyup",this.handleKeyup),this.loadingTimeoutId=window.setTimeout(()=>{this.loading=!1},5500)},beforeUnmount(){document.removeEventListener("keyup",this.handleKeyup),this.loadingTimeoutId!==null&&(window.clearTimeout(this.loadingTimeoutId),this.loadingTimeoutId=null)}}),yv={class:"appDiv"},Sv={class:"flash appDiv",id:"root"},Ev={class:"appDiv"};function Tv(n,e,t,i,s,r){const o=mn("router-view"),a=mn("LoadingComponent");return je(),ot("div",yv,[tf(Ve("div",Sv,[Mt(o)],512),[[vf,!n.loading]]),tf(Ve("div",Ev,[Mt(a)],512),[[vf,n.loading]])])}const bv=_n(Mv,[["render",Tv]]);function wv(){return Up().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Up(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Rv=typeof Proxy=="function",Cv="devtools-plugin:setup",Pv="plugin:settings:set";let Rs,ic;function Iv(){var n;return Rs!==void 0||(typeof window<"u"&&window.performance?(Rs=!0,ic=window.performance):typeof globalThis<"u"&&(!((n=globalThis.perf_hooks)===null||n===void 0)&&n.performance)?(Rs=!0,ic=globalThis.perf_hooks.performance):Rs=!1),Rs}function Lv(){return Iv()?ic.now():Date.now()}class Dv{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return Lv()}},t&&t.on(Pv,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Nv(n,e){const t=n,i=Up(),s=wv(),r=Rv&&t.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(Cv,n,e);else{const o=r?new Dv(t,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}const Ks=typeof window<"u";function Uv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const mt=Object.assign;function tl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Kn(s)?s.map(n):n(s)}return t}const Yr=()=>{},Kn=Array.isArray,Ov=/\/$/,Fv=n=>n.replace(Ov,"");function nl(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Vv(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Bv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Rf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Hv(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ar(e.matched[i],t.matched[s])&&Op(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ar(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Op(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!kv(n[t],e[t]))return!1;return!0}function kv(n,e){return Kn(n)?Cf(n,e):Kn(e)?Cf(e,n):n===e}function Cf(n,e){return Kn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Vv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var oo;(function(n){n.pop="pop",n.push="push"})(oo||(oo={}));var $r;(function(n){n.back="back",n.forward="forward",n.unknown=""})($r||($r={}));function zv(n){if(!n)if(Ks){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Fv(n)}const Gv=/^[^#]+#/;function Wv(n,e){return n.replace(Gv,"#")+e}function Xv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function jv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Xv(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pf(n,e){return(history.state?history.state.position-e:-1)+n}const sc=new Map;function qv(n,e){sc.set(n,e)}function Kv(n){const e=sc.get(n);return sc.delete(n),e}let Yv=()=>location.protocol+"//"+location.host;function Fp(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Rf(l,"")}return Rf(t,n)+i+s}function $v(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=Fp(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:oo.pop,direction:m?m>0?$r.forward:$r.back:$r.unknown})})};function l(){o=t.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(mt({},h.state,{scroll:Fa()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function If(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Fa():null}}function Qv(n){const{history:e,location:t}=window,i={value:Fp(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Yv()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=mt({},e.state,If(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=mt({},s.value,e.state,{forward:l,scroll:Fa()});r(u.current,u,!0);const f=mt({},If(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Zv(n){n=zv(n);const e=Qv(n),t=$v(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=mt({location:"",base:n,go:i,createHref:Wv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Jv(n){return typeof n=="string"||n&&typeof n=="object"}function Bp(n){return typeof n=="string"||typeof n=="symbol"}const Hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hp=Symbol("");var Lf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Lf||(Lf={}));function lr(n,e){return mt(new Error,{type:n,[Hp]:!0},e)}function mi(n,e){return n instanceof Error&&Hp in n&&(e==null||!!(n.type&e))}const Df="[^/]+?",e0={sensitive:!1,strict:!1,start:!0,end:!0},t0=/[.+*?^${}()[\]/\\]/g;function n0(n,e){const t=mt({},e0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(t0,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;r.push({name:g,repeatable:_,optional:m});const y=p||Df;if(y!==Df){d+=10;try{new RegExp(`(${y})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+A.message)}}let b=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),_&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Kn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Kn(p)?p.join("/"):p;if(!y)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function i0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function s0(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=i0(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Nf(i))return 1;if(Nf(s))return-1}return s.length-i.length}function Nf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const r0={type:0,value:""},o0=/[a-zA-Z0-9_]/;function a0(n){if(!n)return[[]];if(n==="/")return[[r0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:o0.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function l0(n,e,t){const i=n0(a0(n.path),t),s=mt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function c0(n,e){const t=[],i=new Map;e=Ff({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,h){const d=!h,g=u0(u);g.aliasOf=h&&h.record;const _=Ff(e,u),m=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of b)m.push(mt({},g,{components:h?h.record.components:g.components,path:A,aliasOf:h?h.record:g}))}let p,y;for(const b of m){const{path:A}=b;if(f&&A[0]!=="/"){const w=f.record.path,C=w[w.length-1]==="/"?"":"/";b.path=f.record.path+(A&&C+A)}if(p=l0(b,f,_),h?h.alias.push(p):(y=y||p,y!==p&&y.alias.push(p),d&&u.name&&!Of(p)&&o(u.name)),g.children){const w=g.children;for(let C=0;C<w.length;C++)r(w[C],p,h&&h.children[C])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return y?()=>{o(y)}:Yr}function o(u){if(Bp(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&s0(u,t[f])>=0&&(u.record.path!==t[f].record.path||!kp(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Of(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,_;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw lr(1,{location:u});_=h.record.name,d=mt(Uf(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Uf(u.params,h.keys.map(y=>y.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(y=>y.re.test(g)),h&&(d=h.parse(g),_=h.record.name);else{if(h=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw lr(1,{location:u,currentLocation:f});_=h.record.name,d=mt({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:h0(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Uf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function u0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:f0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function f0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Of(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function h0(n){return n.reduce((e,t)=>mt(e,t.meta),{})}function Ff(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function kp(n,e){return e.children.some(t=>t===n||kp(n,t))}const Vp=/#/g,d0=/&/g,p0=/\//g,m0=/=/g,g0=/\?/g,zp=/\+/g,_0=/%5B/g,v0=/%5D/g,Gp=/%5E/g,x0=/%60/g,Wp=/%7B/g,A0=/%7C/g,Xp=/%7D/g,M0=/%20/g;function yu(n){return encodeURI(""+n).replace(A0,"|").replace(_0,"[").replace(v0,"]")}function y0(n){return yu(n).replace(Wp,"{").replace(Xp,"}").replace(Gp,"^")}function rc(n){return yu(n).replace(zp,"%2B").replace(M0,"+").replace(Vp,"%23").replace(d0,"%26").replace(x0,"`").replace(Wp,"{").replace(Xp,"}").replace(Gp,"^")}function S0(n){return rc(n).replace(m0,"%3D")}function E0(n){return yu(n).replace(Vp,"%23").replace(g0,"%3F")}function T0(n){return n==null?"":E0(n).replace(p0,"%2F")}function va(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function b0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(zp," "),o=r.indexOf("="),a=va(o<0?r:r.slice(0,o)),l=o<0?null:va(r.slice(o+1));if(a in e){let c=e[a];Kn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bf(n){let e="";for(let t in n){const i=n[t];if(t=S0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Kn(i)?i.map(r=>r&&rc(r)):[i&&rc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function w0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const R0=Symbol(""),Hf=Symbol(""),Su=Symbol(""),jp=Symbol(""),oc=Symbol("");function Cr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Yi(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(lr(4,{from:t,to:e})):f instanceof Error?a(f):Jv(f)?a(lr(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function il(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(C0(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Yi(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Uv(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Yi(h,t,i,r,o)()}))}}return s}function C0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function kf(n){const e=Ci(Su),t=Ci(jp),i=$t(()=>e.resolve(Dt(n.to))),s=$t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ar.bind(null,u));if(h>-1)return h;const d=Vf(l[c-2]);return c>1&&Vf(u)===d&&f[f.length-1].path!==d?f.findIndex(ar.bind(null,l[c-2])):h}),r=$t(()=>s.value>-1&&D0(t.params,i.value.params)),o=$t(()=>s.value>-1&&s.value===t.matched.length-1&&Op(t.params,i.value.params));function a(l={}){return L0(l)?e[Dt(n.replace)?"replace":"push"](Dt(n.to)).catch(Yr):Promise.resolve()}return{route:i,href:$t(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const P0=$n({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kf,setup(n,{slots:e}){const t=_o(kf(n)),{options:i}=Ci(Su),s=$t(()=>({[zf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[zf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Lp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),I0=P0;function L0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function D0(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Kn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Vf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const zf=(n,e,t)=>n??e??t,N0=$n({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ci(oc),s=$t(()=>n.route||i.value),r=Ci(Hf,0),o=$t(()=>{let c=Dt(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=$t(()=>s.value.matched[o.value]);Jo(Hf,$t(()=>o.value+1)),Jo(R0,a),Jo(oc,s);const l=St();return As(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ar(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Gf(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Lp(h,mt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Gf(t.default,{Component:m,route:c})||m}}});function Gf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const U0=N0;function O0(n){const e=c0(n.routes,n),t=n.parseQuery||b0,i=n.stringifyQuery||Bf,s=n.history,r=Cr(),o=Cr(),a=Cr(),l=Rg(Hi);let c=Hi;Ks&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,P=>""+P),f=tl.bind(null,T0),h=tl.bind(null,va);function d(P,K){let oe,fe;return Bp(P)?(oe=e.getRecordMatcher(P),fe=K):fe=P,e.addRoute(fe,oe)}function g(P){const K=e.getRecordMatcher(P);K&&e.removeRoute(K)}function _(){return e.getRoutes().map(P=>P.record)}function m(P){return!!e.getRecordMatcher(P)}function p(P,K){if(K=mt({},K||l.value),typeof P=="string"){const F=nl(t,P,K.path),W=e.resolve({path:F.path},K),Y=s.createHref(F.fullPath);return mt(F,W,{params:h(W.params),hash:va(F.hash),redirectedFrom:void 0,href:Y})}let oe;if("path"in P)oe=mt({},P,{path:nl(t,P.path,K.path).path});else{const F=mt({},P.params);for(const W in F)F[W]==null&&delete F[W];oe=mt({},P,{params:f(F)}),K.params=f(K.params)}const fe=e.resolve(oe,K),Ce=P.hash||"";fe.params=u(h(fe.params));const R=Bv(i,mt({},P,{hash:y0(Ce),path:fe.path})),v=s.createHref(R);return mt({fullPath:R,hash:Ce,query:i===Bf?w0(P.query):P.query||{}},fe,{redirectedFrom:void 0,href:v})}function y(P){return typeof P=="string"?nl(t,P,l.value.path):mt({},P)}function b(P,K){if(c!==P)return lr(8,{from:K,to:P})}function A(P){return I(P)}function w(P){return A(mt(y(P),{replace:!0}))}function C(P){const K=P.matched[P.matched.length-1];if(K&&K.redirect){const{redirect:oe}=K;let fe=typeof oe=="function"?oe(P):oe;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=y(fe):{path:fe},fe.params={}),mt({query:P.query,hash:P.hash,params:"path"in fe?{}:P.params},fe)}}function I(P,K){const oe=c=p(P),fe=l.value,Ce=P.state,R=P.force,v=P.replace===!0,F=C(oe);if(F)return I(mt(y(F),{state:typeof F=="object"?mt({},Ce,F.state):Ce,force:R,replace:v}),K||oe);const W=oe;W.redirectedFrom=K;let Y;return!R&&Hv(i,fe,oe)&&(Y=lr(16,{to:W,from:fe}),Le(fe,fe,!0,!1)),(Y?Promise.resolve(Y):S(W,fe)).catch(k=>mi(k)?mi(k,2)?k:we(k):q(k,W,fe)).then(k=>{if(k){if(mi(k,2))return I(mt({replace:v},y(k.to),{state:typeof k.to=="object"?mt({},Ce,k.to.state):Ce,force:R}),K||W)}else k=X(W,fe,!0,v,Ce);return D(W,fe,k),k})}function N(P,K){const oe=b(P,K);return oe?Promise.reject(oe):Promise.resolve()}function T(P){const K=tt.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(P):P()}function S(P,K){let oe;const[fe,Ce,R]=F0(P,K);oe=il(fe.reverse(),"beforeRouteLeave",P,K);for(const F of fe)F.leaveGuards.forEach(W=>{oe.push(Yi(W,P,K))});const v=N.bind(null,P,K);return oe.push(v),z(oe).then(()=>{oe=[];for(const F of r.list())oe.push(Yi(F,P,K));return oe.push(v),z(oe)}).then(()=>{oe=il(Ce,"beforeRouteUpdate",P,K);for(const F of Ce)F.updateGuards.forEach(W=>{oe.push(Yi(W,P,K))});return oe.push(v),z(oe)}).then(()=>{oe=[];for(const F of R)if(F.beforeEnter)if(Kn(F.beforeEnter))for(const W of F.beforeEnter)oe.push(Yi(W,P,K));else oe.push(Yi(F.beforeEnter,P,K));return oe.push(v),z(oe)}).then(()=>(P.matched.forEach(F=>F.enterCallbacks={}),oe=il(R,"beforeRouteEnter",P,K),oe.push(v),z(oe))).then(()=>{oe=[];for(const F of o.list())oe.push(Yi(F,P,K));return oe.push(v),z(oe)}).catch(F=>mi(F,8)?F:Promise.reject(F))}function D(P,K,oe){a.list().forEach(fe=>T(()=>fe(P,K,oe)))}function X(P,K,oe,fe,Ce){const R=b(P,K);if(R)return R;const v=K===Hi,F=Ks?history.state:{};oe&&(fe||v?s.replace(P.fullPath,mt({scroll:v&&F&&F.scroll},Ce)):s.push(P.fullPath,Ce)),l.value=P,Le(P,K,oe,v),we()}let J;function ae(){J||(J=s.listen((P,K,oe)=>{if(!Re.listening)return;const fe=p(P),Ce=C(fe);if(Ce){I(mt(Ce,{replace:!0}),fe).catch(Yr);return}c=fe;const R=l.value;Ks&&qv(Pf(R.fullPath,oe.delta),Fa()),S(fe,R).catch(v=>mi(v,12)?v:mi(v,2)?(I(v.to,fe).then(F=>{mi(F,20)&&!oe.delta&&oe.type===oo.pop&&s.go(-1,!1)}).catch(Yr),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),q(v,fe,R))).then(v=>{v=v||X(fe,R,!1),v&&(oe.delta&&!mi(v,8)?s.go(-oe.delta,!1):oe.type===oo.pop&&mi(v,20)&&s.go(-1,!1)),D(fe,R,v)}).catch(Yr)}))}let he=Cr(),ee=Cr(),ue;function q(P,K,oe){we(P);const fe=ee.list();return fe.length?fe.forEach(Ce=>Ce(P,K,oe)):console.error(P),Promise.reject(P)}function Ee(){return ue&&l.value!==Hi?Promise.resolve():new Promise((P,K)=>{he.add([P,K])})}function we(P){return ue||(ue=!P,ae(),he.list().forEach(([K,oe])=>P?oe(P):K()),he.reset()),P}function Le(P,K,oe,fe){const{scrollBehavior:Ce}=n;if(!Ks||!Ce)return Promise.resolve();const R=!oe&&Kv(Pf(P.fullPath,0))||(fe||!oe)&&history.state&&history.state.scroll||null;return Qd().then(()=>Ce(P,K,R)).then(v=>v&&jv(v)).catch(v=>q(v,P,K))}const Be=P=>s.go(P);let Ke;const tt=new Set,Re={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:n,push:A,replace:w,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Ee,install(P){const K=this;P.component("RouterLink",I0),P.component("RouterView",U0),P.config.globalProperties.$router=K,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),Ks&&!Ke&&l.value===Hi&&(Ke=!0,A(s.location).catch(Ce=>{}));const oe={};for(const Ce in Hi)Object.defineProperty(oe,Ce,{get:()=>l.value[Ce],enumerable:!0});P.provide(Su,K),P.provide(jp,qd(oe)),P.provide(oc,l);const fe=P.unmount;tt.add(P),P.unmount=function(){tt.delete(P),tt.size<1&&(c=Hi,J&&J(),J=null,l.value=Hi,Ke=!1,ue=!1),fe()}}};function z(P){return P.reduce((K,oe)=>K.then(()=>T(oe)),Promise.resolve())}return Re}function F0(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>ar(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ar(c,l))||s.push(l))}return[t,i,s]}const B0={},H0={id:"header"};function k0(n,e,t,i,s,r){return je(),ot("div",H0,[...e[0]||(e[0]=[Ve("p",null,"tarutaru world",-1)])])}const V0=_n(B0,[["render",k0],["__scopeId","data-v-7752e365"]]),Tt=16,ac=70,lc=124,kr=[{name:"Minor Pentatonic",intervals:[0,3,5,7,10]},{name:"Dorian",intervals:[0,2,3,5,7,9,10]},{name:"Phrygian",intervals:[0,1,3,5,7,8,10]},{name:"Aeolian",intervals:[0,2,3,5,7,8,10]}],cc=[{midi:33,label:"A1"},{midi:35,label:"B1"},{midi:36,label:"C2"},{midi:38,label:"D2"},{midi:40,label:"E2"}],z0=.6,G0=50,W0=.65,Wf=.12,X0=1200,j0=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function Cs(n,e,t){return Math.max(e,Math.min(t,n))}function Xf(n){return n[Math.floor(Math.random()*n.length)]}function jf(n){return 440*2**((n-69)/12)}function q0(n){const e=(n%12+12)%12,t=Math.floor(n/12)-1;return`${j0[e]}${t}`}function qf(n,e){const t=Math.max(1,Math.min(e,n)),i=[];for(let s=0;s<n;s+=1)i.push(s*t%n<t);return i}function Kf(n,e){const t=(e%n.length+n.length)%n.length;return t===0?[...n]:n.slice(n.length-t).concat(n.slice(0,n.length-t))}function K0(n){const t=new Float32Array(2048),i=Math.max(.1,n);for(let s=0;s<2048;s+=1){const r=s/2047*2-1;t[s]=(1+i)*r/(1+i*Math.abs(r))}return t}function Y0(n){const e=Math.floor(n.sampleRate*1.2),t=n.createBuffer(1,e,n.sampleRate);for(let i=0;i<t.numberOfChannels;i+=1){const s=t.getChannelData(i);for(let r=0;r<e;r+=1){const a=(1-r/e)**2.5;s[r]=(Math.random()*2-1)*a}}return t}function $0(){const n=St(88),e=St(!1),t=St(""),i=St(kr[0].name),s=St(cc[2].midi),r=St(-1),o=St(Array(Tt).fill(!1)),a=St(Array(Tt).fill(!1)),l=St(Array(Tt).fill(!1)),c=St(Array(Tt).fill(null)),u=St(Array(Tt).fill(null)),f=St({low:0,mid:0,high:0,rms:0,flux:0,beat:0}),h=$t(()=>kr.find(B=>B.name===i.value)??kr[0]),d=St([0,-2,-5,-7]),g=St(0),_=St(null),m=St(null),p=St(null),y=St(null),b=St(null),A=St(null),w=St(0),C=St(0),I=new Set;let N=null,T=new Uint8Array(0),S=new Uint8Array(0),D=new Float32Array(0);As(n,L=>{const B=Cs(Math.round(L),ac,lc);L!==B&&(n.value=B)});function X(L){Number.isFinite(L)&&(n.value=Cs(Math.round(L),ac,lc))}function J(L){cc.some(ne=>ne.midi===L)&&(s.value=L)}function ae(L){kr.some(ne=>ne.name===L)&&(i.value=L)}function he(L){return L==="kick"?o.value:L==="snare"?a.value:l.value}function ee(L){return L==="bass"?c.value:u.value}function ue(L){return L==="bass"?{velocity:.82,gate:.84}:{velocity:.58,gate:.54}}function q(L,B){if(B<0||B>=Tt)return;const ne=he(L);ne[B]=!ne[B]}function Ee(L,B,ne){B<0||B>=Tt||(he(L)[B]=ne)}function we(L,B,ne){if(B<0||B>=Tt)return;const re=ee(L);if(ne===null){re[B]=null;return}const Z=ue(L),ge=re[B];re[B]={midi:ne,velocity:ge?.velocity??Z.velocity,gate:ge?.gate??Z.gate}}function Le(){const L=Array(Tt).fill(!1);L[0]=!0,L[7]=!0,Math.random()>.32&&(L[10]=!0);for(const B of[12,14])Math.random()>.64&&(L[B]=!0);return L}function Be(){const L=Array(Tt).fill(!1);return L[4]=!0,L[12]=!0,Math.random()>.62&&(L[14]=!0),L}function Ke(){const L=7+Math.floor(Math.random()*4);return Kf(qf(Tt,L),Math.floor(Math.random()*Tt)).map((ne,re)=>{if(!ne)return!1;const Z=re%2===0?.72:.52;return Math.random()<Z})}function tt(L,B){const ne=Array(Tt).fill(null);for(let re=0;re<Tt;re+=1){const Z=re%4===0;if(!(Z||re%8===6&&Math.random()>.58||re%8===2&&Math.random()>.82))continue;const xe=Math.min(Z?3:4,L.length-1),Se=Z?L[Math.floor(Math.random()*(xe+1))]:L[Math.floor(Math.random()*Math.min(3,xe+1))],ye=!Z&&Math.random()>.9?12:0;ne[re]={midi:B+Se+ye,velocity:Z?.82:.58+Math.random()*.2,gate:Z?1.25:.7+Math.random()*.38}}return ne}function Re(L,B){const ne=Array(Tt).fill(null),re=4+Math.floor(Math.random()*3);let Z=qf(Tt,re);Math.random()>.5&&(Z=Kf(Z,1+Math.floor(Math.random()*7)));let ge=Math.floor(Math.random()*L.length);for(let xe=0;xe<Tt;xe+=1){if(!Z[xe])continue;ge=Cs(ge+Xf([-1,0,0,1,2]),0,L.length-1);const Se=Math.random()>.66?24:12;ne[xe]={midi:B+L[ge]+Se,velocity:.32+Math.random()*.28,gate:.52+Math.random()*.6}}return ne}function z(){return Xf([[0,-2,-5,-7],[0,-4,-2,-7],[0,-5,-7,-10],[0,-3,-5,-2]])}function P(){o.value=Array(Tt).fill(!1),a.value=Array(Tt).fill(!1),l.value=Array(Tt).fill(!1),c.value=Array(Tt).fill(null),u.value=Array(Tt).fill(null)}function K(){const L=h.value.intervals,B=s.value;d.value=[...z()],o.value=Le(),a.value=Be(),l.value=Ke(),c.value=tt(L,B),u.value=Re(L,B)}function oe(){return 60/n.value/4}function fe(L){const B=L.createBuffer(1,L.sampleRate,L.sampleRate),ne=B.getChannelData(0);for(let re=0;re<ne.length;re+=1)ne[re]=Math.random()*2-1;return B}function Ce(L){const B=h.value.intervals,ne=B.length,re=(L%ne+ne)%ne,Z=Math.floor(L/ne);return B[re]+Z*12}async function R(){if(_.value){_.value.state==="suspended"&&await _.value.resume();return}const L=new AudioContext,B=new DynamicsCompressorNode(L,{threshold:-18,knee:24,ratio:4,attack:.003,release:.26}),ne=new AnalyserNode(L,{fftSize:512,smoothingTimeConstant:.84}),re=new GainNode(L,{gain:1e-4}),Z=new GainNode(L,{gain:1}),ge=new WaveShaperNode(L,{curve:K0(2.4),oversample:"2x"}),xe=new BiquadFilterNode(L,{type:"lowpass",frequency:6900,Q:.38}),Se=new DelayNode(L,{delayTime:.33}),ye=new GainNode(L,{gain:.28}),ke=new BiquadFilterNode(L,{type:"lowpass",frequency:2500,Q:.2}),O=new GainNode(L,{gain:.22}),Ae=new ConvolverNode(L,{buffer:Y0(L)}),be=new GainNode(L,{gain:.2}),De=new DelayNode(L,{delayTime:.018}),ve=new GainNode(L,{gain:.11}),me=new OscillatorNode(L,{type:"sine",frequency:.21}),Ue=new GainNode(L,{gain:.0055});re.connect(Z),Z.connect(ge),ge.connect(xe),xe.connect(B),B.connect(ne),ne.connect(L.destination),re.connect(Se),Se.connect(ke),ke.connect(ye),ye.connect(Se),ke.connect(O),O.connect(Z),re.connect(Ae),Ae.connect(be),be.connect(Z),re.connect(De),De.connect(ve),ve.connect(Z),me.connect(Ue),Ue.connect(De.delayTime),me.start(),_.value=L,m.value=re,p.value=Z,y.value=ne,b.value=fe(L)}function v(L,B){const ne=_.value;if(!ne){L();return}const re=Math.max(0,(B-ne.currentTime)*1e3),Z=window.setTimeout(()=>{I.delete(Z),L()},re);I.add(Z)}function F(){for(const L of I)window.clearTimeout(L);I.clear()}function W(L,B,ne){const re=_.value,Z=m.value;if(!re||!Z)return;const ge=new OscillatorNode(re,{type:ne.wave,frequency:jf(L.midi)}),xe=new BiquadFilterNode(re,{type:ne.filterType,frequency:ne.filterBase,Q:ne.filterQ}),Se=new GainNode(re,{gain:0}),ye=new StereoPannerNode(re,{pan:Cs(ne.pan,-1,1)});ge.connect(xe),xe.connect(Se),Se.connect(ye),ye.connect(Z);let ke=null;ne.unisonDetune!==void 0&&(ke=new OscillatorNode(re,{type:ne.wave,frequency:jf(L.midi),detune:ne.unisonDetune}),ke.connect(xe));const O=Math.max(.05,oe()*L.gate),Ae=Math.max(.05,L.velocity*ne.level),be=Math.sin(B*.53)*3.4,De=Math.cos(B*.34)*2.1;Se.gain.setValueAtTime(1e-4,B),Se.gain.linearRampToValueAtTime(Ae,B+ne.attack),Se.gain.exponentialRampToValueAtTime(1e-4,B+O),ge.detune.setValueAtTime(be+De,B),xe.frequency.setValueAtTime(ne.filterBase,B),xe.frequency.exponentialRampToValueAtTime(ne.filterPeak,B+Math.min(O,.12)),ge.start(B),ge.stop(B+O+.05),ke&&(ke.start(B),ke.stop(B+O+.05))}function Y(L){const B=_.value,ne=m.value;if(!B||!ne)return;const re=new OscillatorNode(B,{type:"sine"}),Z=new GainNode(B,{gain:0});re.connect(Z),Z.connect(ne),re.frequency.setValueAtTime(150,L),re.frequency.exponentialRampToValueAtTime(46,L+.13),Z.gain.setValueAtTime(1e-4,L),Z.gain.exponentialRampToValueAtTime(.95,L+.012),Z.gain.exponentialRampToValueAtTime(1e-4,L+.17),re.start(L),re.stop(L+.2);const ge=p.value;ge&&(ge.gain.cancelScheduledValues(L),ge.gain.setValueAtTime(ge.gain.value,L),ge.gain.linearRampToValueAtTime(.66,L+.012),ge.gain.exponentialRampToValueAtTime(1,L+.24))}function k(L){const B=_.value,ne=m.value,re=b.value;if(!B||!ne||!re)return;const Z=new AudioBufferSourceNode(B,{buffer:re}),ge=new BiquadFilterNode(B,{type:"highpass",frequency:1800,Q:.7}),xe=new GainNode(B,{gain:0});Z.connect(ge),ge.connect(xe),xe.connect(ne),xe.gain.setValueAtTime(1e-4,L),xe.gain.exponentialRampToValueAtTime(.56,L+.005),xe.gain.exponentialRampToValueAtTime(1e-4,L+.16);const Se=new OscillatorNode(B,{type:"triangle",frequency:220}),ye=new GainNode(B,{gain:0});Se.connect(ye),ye.connect(ne),Se.frequency.exponentialRampToValueAtTime(150,L+.1),ye.gain.setValueAtTime(1e-4,L),ye.gain.exponentialRampToValueAtTime(.3,L+.007),ye.gain.exponentialRampToValueAtTime(1e-4,L+.13),Z.start(L),Z.stop(L+.18),Se.start(L),Se.stop(L+.14)}function _e(L){const B=_.value,ne=m.value,re=b.value;if(!B||!ne||!re)return;const Z=new AudioBufferSourceNode(B,{buffer:re}),ge=new BiquadFilterNode(B,{type:"highpass",frequency:6500,Q:.9}),xe=new GainNode(B,{gain:0});Z.connect(ge),ge.connect(xe),xe.connect(ne),xe.gain.setValueAtTime(1e-4,L),xe.gain.exponentialRampToValueAtTime(.15,L+.003),xe.gain.exponentialRampToValueAtTime(1e-4,L+.05),Z.start(L),Z.stop(L+.06)}function te(L,B){const ne=[0,2,4];for(let re=0;re<ne.length;re+=1){const Z=L+Ce(ne[re])+12;W({midi:Z,velocity:.38-re*.03,gate:1.75},B+re*.01,{wave:"triangle",level:.24,filterType:"lowpass",filterBase:680,filterPeak:1850,filterQ:1.4,attack:.065,pan:-.35+re*.24})}}function le(L,B){v(()=>{r.value=L},B)}function pe(L,B){if(L%4===0){const Z=Math.floor(L/4)%d.value.length,ge=s.value+d.value[Z];te(ge,B)}o.value[L]&&Y(B),a.value[L]&&k(B),l.value[L]&&_e(B);const ne=c.value[L];ne&&W(ne,B,{wave:"sawtooth",level:.5,filterType:"lowpass",filterBase:280,filterPeak:760,filterQ:6,attack:.006,pan:-.15});const re=u.value[L];re&&W(re,B,{wave:"square",level:.3,filterType:"bandpass",filterBase:900,filterPeak:2200,filterQ:9,attack:.004,pan:.2}),le(L,B)}function Pe(){const L=_.value;if(!L||!e.value)return;if(L.state!=="running"){L.resume();return}const B=oe();if(w.value>0&&w.value<L.currentTime-B*2){const re=Math.floor((L.currentTime-w.value)/B);re>0&&(C.value=(C.value+re)%Tt),w.value=L.currentTime+.03}let ne=0;for(;w.value<L.currentTime+z0;){const re=C.value;pe(re,w.value);const Z=oe(),ge=re%2===0?1-Wf:1+Wf;if(w.value+=Z*ge,C.value=(C.value+1)%Tt,ne+=1,ne>Tt*8)break}}async function M(){try{t.value="",await R();const L=_.value;if(!L)return;L.state==="suspended"&&await L.resume(),N!==null&&(window.clearTimeout(N),N=null);const B=m.value;B&&(B.gain.cancelScheduledValues(L.currentTime),B.gain.setValueAtTime(Math.max(1e-4,B.gain.value),L.currentTime),B.gain.exponentialRampToValueAtTime(W0,L.currentTime+.02)),e.value=!0,C.value=0,w.value=L.currentTime+.05,A.value!==null&&window.clearInterval(A.value),Pe(),A.value=window.setInterval(Pe,G0)}catch{e.value=!1,t.value="Audio initialization failed. Browser autoplay settings might block playback."}}function x(){e.value=!1;const L=_.value,B=m.value;L&&B&&(B.gain.cancelScheduledValues(L.currentTime),B.gain.setValueAtTime(Math.max(1e-4,B.gain.value),L.currentTime),B.gain.exponentialRampToValueAtTime(1e-4,L.currentTime+.015)),A.value!==null&&(window.clearInterval(A.value),A.value=null),F(),r.value=-1}async function U(){if(e.value){x();return}await M()}function $(){const L=y.value;if(!L){const H=f.value.beat*.9;return f.value={...f.value,low:f.value.low*.85,mid:f.value.mid*.85,high:f.value.high*.85,rms:f.value.rms*.84,flux:f.value.flux*.82,beat:H},f.value}T.length!==L.frequencyBinCount&&(T=new Uint8Array(L.frequencyBinCount),D=new Float32Array(L.frequencyBinCount)),S.length!==L.fftSize&&(S=new Uint8Array(L.fftSize)),L.getByteFrequencyData(T),L.getByteTimeDomainData(S);let B=0,ne=0,re=0,Z=0,ge=0;const xe=T.length,Se=Math.max(1,Math.floor(xe*.12)),ye=Se,ke=Math.max(ye+1,Math.floor(xe*.45));for(let H=0;H<xe;H+=1){const de=T[H]/255;H<Se?B+=de:H<ke?ne+=de:re+=de;const Me=de-D[H];Me>0&&(Z+=Me),D[H]=de}for(let H=0;H<S.length;H+=1){const de=(S[H]-128)/128;ge+=de*de}const O=B/Se,Ae=ne/Math.max(1,ke-ye),be=re/Math.max(1,xe-ke),De=Z/xe,ve=Math.sqrt(ge/S.length),me=Cs(O*.6+De*2.2+ve*.5,0,1.4),Ue=Cs(f.value.beat*.84+me,0,1.8);return f.value={low:f.value.low*.66+O*.34,mid:f.value.mid*.66+Ae*.34,high:f.value.high*.66+be*.34,rms:f.value.rms*.7+ve*.3,flux:f.value.flux*.62+De*.38,beat:Ue},f.value}function ce(){N!==null&&(window.clearTimeout(N),N=null),g.value+=1}function Q(){g.value=Math.max(0,g.value-1),!(g.value>0)&&(N!==null&&window.clearTimeout(N),N=window.setTimeout(()=>{if(N=null,g.value>0)return;x();const L=_.value;L&&L.close(),_.value=null,m.value=null,p.value=null,y.value=null,b.value=null,f.value={low:0,mid:0,high:0,rms:0,flux:0,beat:0}},X0))}return K(),{bpm:n,isRunning:e,errorMessage:t,selectedScaleName:i,rootMidi:s,playheadStep:r,kickSteps:o,snareSteps:a,hatSteps:l,bassSteps:c,leadSteps:u,selectedScale:h,analysisFrame:f,setBpm:X,setRoot:J,setScale:ae,toggleDrumStep:q,setDrumStep:Ee,setMelodyStep:we,clearRiff:P,regenerateRiff:K,togglePlayback:U,startPlayback:M,stopPlayback:x,sampleAudioFrame:$,attachConsumer:ce,detachConsumer:Q}}let sl=null;function qp(){return sl||(sl=$0()),sl}const Q0={class:"algorave-editor"},Z0={class:"transport-panel"},J0={class:"transport-row"},ex={class:"control-row"},tx={for:"algorave-bpm"},nx=["value","min","max"],ix={class:"control-row selectors"},sx=["value"],rx=["value"],ox=["value"],ax=["value"],lx={class:"status-line"},cx={key:0,class:"error-line"},ux={class:"grid-panel"},fx={class:"editor-grid"},hx={class:"track-header"},dx=["aria-label","onClick"],px=["value","onChange"],mx=["value"],gx=["value","onChange"],_x=["value"],vx=$n({__name:"AlgoraveContent",setup(n){const e=qp(),t=e.bpm,i=e.isRunning,s=e.errorMessage,r=e.selectedScaleName,o=e.rootMidi,a=e.playheadStep,l=e.selectedScale,c=e.kickSteps,u=e.snareSteps,f=e.hatSteps,h=e.bassSteps,d=e.leadSteps,g=kr,_=cc,m=ac,p=lc,y=Array.from({length:Tt},(Re,z)=>z),b=y.map(Re=>Re+1),A=[{key:"kick",label:"Kick"},{key:"snare",label:"Snare"},{key:"hat",label:"Hat"}],w=$t(()=>a.value<0?"--":String(a.value+1).padStart(2,"0")),C=$t(()=>N(l.value.intervals,o.value,[0,1])),I=$t(()=>N(l.value.intervals,o.value,[1,2]));Da(()=>{e.attachConsumer()}),vu(()=>{e.detachConsumer()});function N(Re,z,P){const K=[];for(const oe of P)for(let fe=0;fe<Re.length;fe+=1){const Ce=z+Re[fe]+oe*12;K.push({value:String(Ce),label:`${fe+1}:${q0(Ce)}`})}return K}function T(Re){return Re==="kick"?c.value:Re==="snare"?u.value:f.value}function S(Re){return Re==="bass"?h.value:d.value}function D(Re){return i.value&&a.value===Re}function X(Re){return{"playhead-cell":D(Re),"bar-start-cell":Re%4===0}}function J(Re,z){return T(Re)[z]}function ae(Re,z){return{"drum-active":J(Re,z),"drum-playhead":D(z)}}function he(Re,z){return{"note-filled":S(Re)[z]!==null,"playhead-cell":D(z),"bar-start-cell":z%4===0}}function ee(Re,z){e.toggleDrumStep(Re,z)}function ue(Re,z){const P=S(Re)[z];return P?String(P.midi):"rest"}function q(Re,z,P){const K=P.target;if(!K)return;if(K.value==="rest"){e.setMelodyStep(Re,z,null);return}const oe=Number.parseInt(K.value,10);Number.isFinite(oe)&&e.setMelodyStep(Re,z,oe)}function Ee(Re){const z=Re.target;if(!z)return;const P=Number.parseInt(z.value,10);Number.isFinite(P)&&e.setBpm(P)}function we(Re){const z=Re.target;if(!z)return;const P=Number.parseInt(z.value,10);Number.isFinite(P)&&e.setRoot(P)}function Le(Re){const z=Re.target;z&&e.setScale(z.value)}async function Be(){await e.togglePlayback()}function Ke(){e.regenerateRiff()}function tt(){e.clearRiff()}return(Re,z)=>(je(),ot("div",Q0,[Ve("section",Z0,[Ve("div",J0,[Ve("button",{class:"transport-button",onClick:Be},Sn(Dt(i)?"STOP":"START"),1),Ve("button",{class:"transport-button",onClick:Ke},"GENERATE"),Ve("button",{class:"transport-button",onClick:tt},"CLEAR")]),Ve("div",ex,[Ve("label",tx,"BPM "+Sn(Dt(t)),1),Ve("input",{id:"algorave-bpm",value:Dt(t),type:"range",min:Dt(m),max:Dt(p),step:"1",onInput:Ee},null,40,nx)]),Ve("div",ix,[z[0]||(z[0]=Ve("label",{for:"algorave-root"},"Root",-1)),Ve("select",{id:"algorave-root",class:"select-box",value:Dt(o),onChange:we},[(je(!0),ot(Lt,null,pi(Dt(_),P=>(je(),ot("option",{key:`root-${P.midi}`,value:P.midi},Sn(P.label),9,rx))),128))],40,sx),z[1]||(z[1]=Ve("label",{for:"algorave-scale"},"Scale",-1)),Ve("select",{id:"algorave-scale",class:"select-box",value:Dt(r),onChange:Le},[(je(!0),ot(Lt,null,pi(Dt(g),P=>(je(),ot("option",{key:`scale-${P.name}`,value:P.name},Sn(P.name),9,ax))),128))],40,ox)]),Ve("p",lx,"Playhead: "+Sn(w.value),1),z[2]||(z[2]=Ve("p",{class:"hint-line"}," Click GENERATE for randomized riffs, then tweak each step manually. ",-1)),Dt(s)?(je(),ot("p",cx,Sn(Dt(s)),1)):pn("",!0)]),Ve("section",ux,[Ve("table",fx,[Ve("thead",null,[Ve("tr",null,[z[3]||(z[3]=Ve("th",{class:"track-header"},"Track",-1)),(je(!0),ot(Lt,null,pi(Dt(b),P=>(je(),ot("th",{key:`head-${P}`,class:si(X(P-1))},Sn(P),3))),128))])]),Ve("tbody",null,[(je(),ot(Lt,null,pi(A,P=>Ve("tr",{key:P.key},[Ve("th",hx,Sn(P.label),1),(je(!0),ot(Lt,null,pi(Dt(y),K=>(je(),ot("td",{key:`${P.key}-${K}`,class:si(X(K))},[Ve("button",{class:si(["drum-button",ae(P.key,K)]),"aria-label":`Toggle ${P.label} step ${K+1}`,onClick:oe=>ee(P.key,K)},Sn(J(P.key,K)?"x":"-"),11,dx)],2))),128))])),64)),Ve("tr",null,[z[5]||(z[5]=Ve("th",{class:"track-header"},"Bass",-1)),(je(!0),ot(Lt,null,pi(Dt(y),P=>(je(),ot("td",{key:`bass-${P}`,class:si(he("bass",P))},[Ve("select",{class:"note-select",value:ue("bass",P),onChange:K=>q("bass",P,K)},[z[4]||(z[4]=Ve("option",{value:"rest"},"-",-1)),(je(!0),ot(Lt,null,pi(C.value,K=>(je(),ot("option",{key:`bass-opt-${K.value}`,value:K.value},Sn(K.label),9,mx))),128))],40,px)],2))),128))]),Ve("tr",null,[z[7]||(z[7]=Ve("th",{class:"track-header"},"Lead",-1)),(je(!0),ot(Lt,null,pi(Dt(y),P=>(je(),ot("td",{key:`lead-${P}`,class:si(he("lead",P))},[Ve("select",{class:"note-select",value:ue("lead",P),onChange:K=>q("lead",P,K)},[z[6]||(z[6]=Ve("option",{value:"rest"},"-",-1)),(je(!0),ot(Lt,null,pi(I.value,K=>(je(),ot("option",{key:`lead-opt-${K.value}`,value:K.value},Sn(K.label),9,_x))),128))],40,gx)],2))),128))])])])])]))}}),xx=_n(vx,[["__scopeId","data-v-53a852d0"]]);const Eu="180",Ax=0,Yf=1,Mx=2,Kp=1,yx=2,yi=3,Ui=0,gn=1,ri=2,es=0,tr=1,uc=2,$f=3,Qf=4,Sx=5,gs=100,Ex=101,Tx=102,bx=103,wx=104,Rx=200,Cx=201,Px=202,Ix=203,fc=204,hc=205,Lx=206,Dx=207,Nx=208,Ux=209,Ox=210,Fx=211,Bx=212,Hx=213,kx=214,dc=0,pc=1,mc=2,cr=3,gc=4,_c=5,vc=6,xc=7,Yp=0,Vx=1,zx=2,ts=0,Gx=1,Wx=2,Xx=3,jx=4,qx=5,Kx=6,Yx=7,Zf="attached",$x="detached",$p=300,ur=301,fr=302,Ac=303,Mc=304,Ba=306,hr=1e3,Qi=1001,xa=1002,an=1003,Qp=1004,Vr=1005,on=1006,ia=1007,wi=1008,ui=1009,Zp=1010,Jp=1011,ao=1012,Tu=1013,Ms=1014,zn=1015,Mo=1016,bu=1017,wu=1018,lo=1020,em=35902,tm=35899,nm=1021,im=1022,Ln=1023,co=1026,uo=1027,Ru=1028,Cu=1029,sm=1030,Pu=1031,Iu=1033,sa=33776,ra=33777,oa=33778,aa=33779,yc=35840,Sc=35841,Ec=35842,Tc=35843,bc=36196,wc=37492,Rc=37496,Cc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,Oc=37815,Fc=37816,Bc=37817,Hc=37818,kc=37819,Vc=37820,zc=37821,Gc=36492,Wc=36494,Xc=36495,jc=36283,qc=36284,Kc=36285,Yc=36286,fo=2300,ho=2301,rl=2302,Jf=2400,eh=2401,th=2402,Qx=2500,Zx=0,rm=1,$c=2,Jx=3200,eA=3201,om=0,tA=1,$i="",Vt="srgb",cn="srgb-linear",Aa="linear",At="srgb",Ps=7680,nh=519,nA=512,iA=513,sA=514,am=515,rA=516,oA=517,aA=518,lA=519,Qc=35044,ih="300 es",oi=2e3,Ma=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sh=1234567;const Qr=Math.PI/180,dr=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Lu(n,e){return(n%e+e)%e}function cA(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function uA(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function fA(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function hA(n,e=1){return e-Math.abs(Lu(n,e*2)-e)}function dA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gA(n,e){return n+Math.random()*(e-n)}function _A(n){return n*(.5-Math.random())}function vA(n){n!==void 0&&(sh=n);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xA(n){return n*Qr}function AA(n){return n*dr}function MA(n){return(n&n-1)===0&&n!==0}function yA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function SA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function EA(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const TA={DEG2RAD:Qr,RAD2DEG:dr,generateUUID:Wn,clamp:it,euclideanModulo:Lu,mapLinear:cA,inverseLerp:uA,lerp:Zr,damp:fA,pingpong:hA,smoothstep:dA,smootherstep:pA,randInt:mA,randFloat:gA,randFloatSpread:_A,seededRandom:vA,degToRad:xA,radToDeg:AA,isPowerOfTwo:MA,ceilPowerOfTwo:yA,floorPowerOfTwo:SA,setQuaternionFromProperEuler:EA,normalize:gt,denormalize:kn};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),C=Math.atan2(w,p*y);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const A=a*y;if(l=l*m+h*A,c=c*m+d*A,u=u*m+g*A,f=f*m+_*A,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new V,rh=new Xn;class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],b=s[4],A=s[7],w=s[2],C=s[5],I=s[8];return r[0]=o*_+a*y+l*w,r[3]=o*m+a*b+l*C,r[6]=o*p+a*A+l*I,r[1]=c*_+u*y+f*w,r[4]=c*m+u*b+f*C,r[7]=c*p+u*A+f*I,r[2]=h*_+d*y+g*w,r[5]=h*m+d*b+g*C,r[8]=h*p+d*A+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new Ze;function lm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bA(){const n=po("canvas");return n.style.display="block",n}const oh={};function mo(n){n in oh||(oh[n]=!0,console.warn(n))}function wA(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ah=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RA(){const n={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cn]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:At,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const ct=RA();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Is;class CA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=po("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PA=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IA=0;const cl=new V;class Gt extends vr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Qi,s=Qi,r=on,o=wi,a=Ln,l=ui,c=Gt.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Wn(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=$p;Gt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,A=(d+1)/2,w=(p+1)/2,C=(u+h)/4,I=(f+_)/4,N=(g+m)/4;return b>A&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=I/i):A>w?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=C/s,r=N/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=I/r,s=N/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LA extends vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Gt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Du(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends LA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cm extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DA extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),wo.subVectors(this.max,Pr),Ls.subVectors(e.a,Pr),Ds.subVectors(e.b,Pr),Ns.subVectors(e.c,Pr),ki.subVectors(Ds,Ls),Vi.subVectors(Ns,Ds),os.subVectors(Ls,Ns);let t=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-os.z,os.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,os.z,0,-os.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-os.y,os.x,0];return!ul(t,Ls,Ds,Ns,wo)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Ls,Ds,Ns,wo))?!1:(Ro.crossVectors(ki,Vi),t=[Ro.x,Ro.y,Ro.z],ul(t,Ls,Ds,Ns,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new V,new V,new V,new V,new V,new V,new V,new V],On=new V,bo=new Fi,Ls=new V,Ds=new V,Ns=new V,ki=new V,Vi=new V,os=new V,Pr=new V,wo=new V,Ro=new V,as=new V;function ul(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){as.fromArray(n,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const NA=new Fi,Ir=new V,fl=new V;class fi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):NA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(fl)),this.expandByPoint(Ir.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _i=new V,hl=new V,Co=new V,zi=new V,dl=new V,Po=new V,pl=new V;class Ha{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hl.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(hl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Co),a=zi.dot(this.direction),l=-zi.dot(Co),c=zi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hl).addScaledVector(Co,h),d}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){dl.subVectors(t,e),Po.subVectors(i,e),pl.crossVectors(dl,Po);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Po.crossVectors(zi,Po));if(l<0)return null;const c=a*this.direction.dot(dl.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(pl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,g,_,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UA,e,OA)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Gi.crossVectors(i,Mn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Gi.crossVectors(i,Mn)),Gi.normalize(),Io.crossVectors(Mn,Gi),s[0]=Gi.x,s[4]=Io.x,s[8]=Mn.x,s[1]=Gi.y,s[5]=Io.y,s[9]=Mn.y,s[2]=Gi.z,s[6]=Io.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],b=i[7],A=i[11],w=i[15],C=s[0],I=s[4],N=s[8],T=s[12],S=s[1],D=s[5],X=s[9],J=s[13],ae=s[2],he=s[6],ee=s[10],ue=s[14],q=s[3],Ee=s[7],we=s[11],Le=s[15];return r[0]=o*C+a*S+l*ae+c*q,r[4]=o*I+a*D+l*he+c*Ee,r[8]=o*N+a*X+l*ee+c*we,r[12]=o*T+a*J+l*ue+c*Le,r[1]=u*C+f*S+h*ae+d*q,r[5]=u*I+f*D+h*he+d*Ee,r[9]=u*N+f*X+h*ee+d*we,r[13]=u*T+f*J+h*ue+d*Le,r[2]=g*C+_*S+m*ae+p*q,r[6]=g*I+_*D+m*he+p*Ee,r[10]=g*N+_*X+m*ee+p*we,r[14]=g*T+_*J+m*ue+p*Le,r[3]=y*C+b*S+A*ae+w*q,r[7]=y*I+b*D+A*he+w*Ee,r[11]=y*N+b*X+A*ee+w*we,r[15]=y*T+b*J+A*ue+w*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+_*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,A=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=t*y+i*b+s*A+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=y*I,e[1]=(_*h*r-f*m*r-_*s*d+i*m*d+f*s*p-i*h*p)*I,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*I,e[4]=b*I,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*I,e[8]=A*I,e[9]=(g*f*r-u*_*r-g*i*d+t*_*d+u*i*p-t*f*p)*I,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*I,e[12]=w*I,e[13]=(u*_*s-g*f*s+g*i*h-t*_*h-u*i*m+t*f*m)*I,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*I,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,y=l*c,b=l*u,A=l*f,w=i.x,C=i.y,I=i.z;return s[0]=(1-(_+p))*w,s[1]=(d+A)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(d-A)*C,s[5]=(1-(h+p))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(g+b)*I,s[9]=(m-y)*I,s[10]=(1-(h+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);const c=1/r,u=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===oi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ma)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===oi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ma)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new V,Fn=new et,UA=new V(0,0,0),OA=new V(1,1,1),Gi=new V,Io=new V,Mn=new V,ch=new et,uh=new Xn;class Yn{constructor(e=0,t=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uh.setFromEuler(this),this.setFromQuaternion(uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FA=0;const fh=new V,Os=new Xn,vi=new et,Lo=new V,Lr=new V,BA=new V,HA=new Xn,hh=new V(1,0,0),dh=new V(0,1,0),ph=new V(0,0,1),mh={type:"added"},kA={type:"removed"},Fs={type:"childadded",child:null},ml={type:"childremoved",child:null};class Pt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new V,t=new Yn,i=new Xn,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Ze}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(ph,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lo.copy(e):Lo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Lr,Lo,this.up):vi.lookAt(Lo,Lr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(vi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kA),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,BA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,HA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new V(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new V,xi=new V,gl=new V,Ai=new V,Bs=new V,Hs=new V,gh=new V,_l=new V,vl=new V,xl=new V,Al=new ht,Ml=new ht,yl=new ht;class Vn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bn.subVectors(s,t),xi.subVectors(i,t),gl.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(xi),l=Bn.dot(gl),c=xi.dot(xi),u=xi.dot(gl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Al.setScalar(0),Ml.setScalar(0),yl.setScalar(0),Al.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Al,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(e,t,i,s){return Bn.subVectors(i,t),xi.subVectors(e,t),Bn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Bn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Bs.subVectors(s,i),Hs.subVectors(r,i),_l.subVectors(e,i);const l=Bs.dot(_l),c=Hs.dot(_l);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,s);const u=Bs.dot(vl),f=Hs.dot(vl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Bs,o);xl.subVectors(e,r);const d=Bs.dot(xl),g=Hs.dot(xl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Hs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return gh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(gh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Bs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=Lu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sl(o,r,e+1/3),this.g=Sl(o,r,e),this.b=Sl(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=fm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ct.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Vt){ct.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Do);const i=Zr(Wi.h,Do.h,t),s=Zr(Wi.s,Do.s,t),r=Zr(Wi.l,Do.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Qe;Qe.NAMES=fm;let VA=0;class li extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=tr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=hc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new V,No=new at;let zA=0;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class hm extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dm extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let GA=0;const Rn=new et,El=new Pt,ks=new V,yn=new Fi,Dr=new Fi,kt=new V;class Tn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lm(e)?dm:hm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(yn.min,Dr.min),yn.expandByPoint(kt),kt.addVectors(yn.max,Dr.max),yn.expandByPoint(kt)):(yn.expandByPoint(Dr.min),yn.expandByPoint(Dr.max))}yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),kt.add(ks)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new V,l[N]=new V;const c=new V,u=new V,f=new V,h=new at,d=new at,g=new at,_=new V,m=new V;function p(N,T,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,N),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(_),a[T].add(_),a[S].add(_),l[N].add(m),l[T].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,T=y.length;N<T;++N){const S=y[N],D=S.start,X=S.count;for(let J=D,ae=D+X;J<ae;J+=3)p(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new V,A=new V,w=new V,C=new V;function I(N){w.fromBufferAttribute(s,N),C.copy(w);const T=a[N];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),A.crossVectors(C,T);const D=A.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,D)}for(let N=0,T=y.length;N<T;++N){const S=y[N],D=S.start,X=S.count;for(let J=D,ae=D+X;J<ae;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Zt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _h=new et,ls=new Ha,Uo=new fi,vh=new V,Oo=new V,Fo=new V,Bo=new V,Tl=new V,Ho=new V,xh=new V,ko=new V;class zt extends Pt{constructor(e=new Tn,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Tl.fromBufferAttribute(f,e),o?Ho.addScaledVector(Tl,u):Ho.addScaledVector(Tl.sub(t),u))}t.add(Ho)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Uo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Uo,vh)===null||ls.origin.distanceToSquared(vh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),ls.copy(e.ray).applyMatrix4(_h),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let A=y,w=b;A<w;A+=3){const C=a.getX(A),I=a.getX(A+1),N=a.getX(A+2);s=Vo(this,p,e,i,c,u,f,C,I,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),b=a.getX(m+1),A=a.getX(m+2);s=Vo(this,o,e,i,c,u,f,y,b,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let A=y,w=b;A<w;A+=3){const C=A,I=A+1,N=A+2;s=Vo(this,p,e,i,c,u,f,C,I,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,A=m+2;s=Vo(this,o,e,i,c,u,f,y,b,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function WA(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function Vo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Oo),n.getVertexPosition(l,Fo),n.getVertexPosition(c,Bo);const u=WA(n,e,t,i,Oo,Fo,Bo,xh);if(u){const f=new V;Vn.getBarycoord(xh,Oo,Fo,Bo,f),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,l,c,f,new at)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,l,c,f,new at)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};Vn.getNormal(Oo,Fo,Bo,h.normal),u.face=h,u.barycoord=f}return u}class xr extends Tn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function g(_,m,p,y,b,A,w,C,I,N,T){const S=A/I,D=w/N,X=A/2,J=w/2,ae=C/2,he=I+1,ee=N+1;let ue=0,q=0;const Ee=new V;for(let we=0;we<ee;we++){const Le=we*D-J;for(let Be=0;Be<he;Be++){const Ke=Be*S-X;Ee[_]=Ke*y,Ee[m]=Le*b,Ee[p]=ae,c.push(Ee.x,Ee.y,Ee.z),Ee[_]=0,Ee[m]=0,Ee[p]=C>0?1:-1,u.push(Ee.x,Ee.y,Ee.z),f.push(Be/I),f.push(1-we/N),ue+=1}}for(let we=0;we<N;we++)for(let Le=0;Le<I;Le++){const Be=h+Le+he*we,Ke=h+Le+he*(we+1),tt=h+(Le+1)+he*(we+1),Re=h+(Le+1)+he*we;l.push(Be,Ke,Re),l.push(Ke,tt,Re),q+=6}a.addGroup(d,q,T),d+=q,h+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const s in i)e[s]=i[s]}return e}function XA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const jA={clone:pr,merge:nn};var qA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qA,this.fragmentShader=KA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=XA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mm extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new V,Ah=new at,Mh=new at;class rn extends mm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Mh),t.subVectors(Mh,Ah)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,zs=1;class YA extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Vs,zs,e,t);s.layers=this.layers,this.add(s);const r=new rn(Vs,zs,e,t);r.layers=this.layers,this.add(r);const o=new rn(Vs,zs,e,t);o.layers=this.layers,this.add(o);const a=new rn(Vs,zs,e,t);a.layers=this.layers,this.add(a);const l=new rn(Vs,zs,e,t);l.layers=this.layers,this.add(l);const c=new rn(Vs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gm extends Gt{constructor(e=[],t=ur,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $A extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xr(5,5,5),r=new ns({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:es});r.uniforms.tEquirect.value=t;const o=new zt(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=on),new YA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Zi extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QA={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ZA extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class JA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new V;class Nu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yh=new V,Sh=new ht,Eh=new ht,eM=new V,Th=new et,zo=new V,wl=new fi,bh=new et,Rl=new Ha;class tM extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(s),e.ray.intersectsSphere(wl)!==!1&&(bh.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$x?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Sh.fromBufferAttribute(s.attributes.skinIndex,e),Eh.fromBufferAttribute(s.attributes.skinWeight,e),yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Eh.getComponent(r);if(o!==0){const a=Sh.getComponent(r);Th.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(eM.copy(yh).applyMatrix4(Th),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _m extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vm extends Gt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=an,u=an,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new et,nM=new et;class Uu{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:nM;wh.multiplyMatrices(a,t[r]),wh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new vm(t,e,e,Ln,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _m),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Zc extends Zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new et,Rh=new et,Go=[],Ch=new Fi,iM=new et,Nr=new zt,Ur=new fi;class sM extends zt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,iM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Ch.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Ur.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Rh.multiplyMatrices(i,Gs),Nr.matrixWorld=Rh,Nr.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){const l=Go[o];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vm(new Float32Array(s*this.count),s,this.count,Ru,zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cl=new V,rM=new V,oM=new Ze;class ps{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Cl.subVectors(i,t).cross(rM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oM.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new fi,aM=new at(.5,.5),Wo=new V;class Ou{constructor(e=new ps,t=new ps,i=new ps,s=new ps,r=new ps,o=new ps){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],b=r[13],A=r[14],w=r[15];if(s[0].setComponents(c-o,d-u,p-g,w-y).normalize(),s[1].setComponents(c+o,d+u,p+g,w+y).normalize(),s[2].setComponents(c+a,d+f,p+_,w+b).normalize(),s[3].setComponents(c-a,d-f,p-_,w-b).normalize(),i)s[4].setComponents(l,h,m,A).normalize(),s[5].setComponents(c-l,d-h,p-m,w-A).normalize();else if(s[4].setComponents(c-l,d-h,p-m,w-A).normalize(),t===oi)s[5].setComponents(c+l,d+h,p+m,w+A).normalize();else if(t===Ma)s[5].setComponents(l,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=aM.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xm extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new V,Sa=new V,Ph=new et,Or=new Ha,Xo=new fi,Pl=new V,Ih=new V;class Fu extends Pt{constructor(e=new Tn,t=new xm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ya.fromBufferAttribute(t,s-1),Sa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ya.distanceTo(Sa);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Ph.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),b=jo(this,e,Or,l,p,y,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=jo(this,e,Or,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=jo(this,e,Or,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=jo(this,e,Or,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ya.fromBufferAttribute(a,s),Sa.fromBufferAttribute(a,r),t.distanceSqToSegment(ya,Sa,Pl,Ih)>i)return;Pl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:Ih.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Lh=new V,Dh=new V;class lM extends Fu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Lh.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lh.distanceTo(Dh);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cM extends Fu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Am extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nh=new et,Jc=new Ha,qo=new fi,Ko=new V;class uM extends Pt{constructor(e=new Tn,t=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Nh.copy(s).invert(),Jc.copy(e.ray).applyMatrix4(Nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Ko.fromBufferAttribute(f,m),Uh(Ko,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Ko.fromBufferAttribute(f,g),Uh(Ko,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uh(n,e,t,i,s,r,o){const a=Jc.distanceSqToPoint(n);if(a<t){const l=new V;Jc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mm extends Gt{constructor(e,t,i=Ms,s,r,o,a=an,l=an,c,u=co,f=1){if(u!==co&&u!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Du(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ym extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ka extends Tn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2));function y(){const A=new V,w=new V;let C=0;const I=(t-e)/i;for(let N=0;N<=r;N++){const T=[],S=N/r,D=S*(t-e)+e;for(let X=0;X<=s;X++){const J=X/s,ae=J*l+a,he=Math.sin(ae),ee=Math.cos(ae);w.x=D*he,w.y=-S*i+m,w.z=D*ee,f.push(w.x,w.y,w.z),A.set(he,I,ee).normalize(),h.push(A.x,A.y,A.z),d.push(J,1-S),T.push(g++)}_.push(T)}for(let N=0;N<s;N++)for(let T=0;T<r;T++){const S=_[T][N],D=_[T+1][N],X=_[T+1][N+1],J=_[T][N+1];(e>0||T!==0)&&(u.push(S,D,J),C+=3),(t>0||T!==r-1)&&(u.push(D,X,J),C+=3)}c.addGroup(p,C,0),p+=C}function b(A){const w=g,C=new at,I=new V;let N=0;const T=A===!0?e:t,S=A===!0?1:-1;for(let X=1;X<=s;X++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const D=g;for(let X=0;X<=s;X++){const ae=X/s*l+a,he=Math.cos(ae),ee=Math.sin(ae);I.x=T*ee,I.y=m*S,I.z=T*he,f.push(I.x,I.y,I.z),h.push(0,S,0),C.x=he*.5+.5,C.y=ee*.5*S+.5,d.push(C.x,C.y),g++}for(let X=0;X<s;X++){const J=w+X,ae=D+X;A===!0?u.push(ae,ae+1,J):u.push(ae+1,ae,J),N+=3}c.addGroup(p,N,A===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bu extends ka{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Bu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Va extends Tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let b=0;b<c;b++){const A=b*f-r;g.push(A,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,A=y+c*(p+1),w=y+1+c*(p+1),C=y+1+c*p;d.push(b,A,C),d.push(A,w,C)}this.setIndex(d),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hu extends Tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],b=p/i;let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let w=0;w<=t;w++){const C=w/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(C+A,1-b),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const b=u[p][y+1],A=u[p][y],w=u[p+1][y],C=u[p+1][y+1];(p!==0||o>0)&&d.push(b,A,C),(p!==i-1||l<Math.PI)&&d.push(A,w,C)}this.setIndex(d),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=om,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fM extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function dM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pM(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Oh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Sm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class yo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mM extends yo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=e,a=2*t-i;break;case th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:o=e,l=2*i-t;break;case th:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,A=d*m-d*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+y*o[c+w]+b*o[l+w]+A*o[f+w];return r}}class gM extends yo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class _M extends yo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _M(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dM(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ho;class Ar extends Qn{constructor(e,t,i){super(e,t,i)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=fo;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Em extends Qn{constructor(e,t,i,s){super(e,t,i,s)}}Em.prototype.ValueTypeName="color";class mr extends Qn{constructor(e,t,i,s){super(e,t,i,s)}}mr.prototype.ValueTypeName="number";class vM extends yo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class gr extends Qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new vM(this.times,this.values,this.getValueSize(),e)}}gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends Qn{constructor(e,t,i){super(e,t,i)}}Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=fo;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends Qn{constructor(e,t,i,s){super(e,t,i,s)}}_r.prototype.ValueTypeName="vector";class xM{constructor(e="",t=-1,i=[],s=Qx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(MM(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=pM(l);l=Oh(l,1,u),c=Oh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];Sm(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const b=h[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new mr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(_r,d+".position",h,"pos",s),i(gr,d+".quaternion",h,"rot",s),i(_r,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function AM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return Em;case"quaternion":return gr;case"bool":case"boolean":return Ar;case"string":return Mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function MM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=AM(n.type);if(n.times===void 0){const t=[],i=[];Sm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ri={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class yM{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const SM=new yM;class yr{constructor(e){this.manager=e!==void 0?e:SM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class EM extends Error{constructor(e,t){super(e),this.response=t}}class Tm extends yr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ri.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){f.read().then(({done:b,value:A})=>{if(b)p.close();else{_+=A.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,I=u.length;C<I;C++){const N=u[C];N.onProgress&&N.onProgress(w)}p.enqueue(A),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new EM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ri.add(`file:${e}`,c);const u=Mi[e];delete Mi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ws=new WeakMap;class TM extends yr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Ws.get(o);f===void 0&&(f=[],Ws.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=po("img");function l(){u(),t&&t(this);const f=Ws.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Ws.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Ri.remove(`image:${e}`);const h=Ws.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}Ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ri.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class bM extends yr{constructor(e){super(e)}load(e,t,i,s){const r=new Gt,o=new TM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ku extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Il=new et,Fh=new V,Bh=new V;class Vu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends Vu{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RM extends ku{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hh=new et,Fr=new V,Ll=new V;class CM extends Vu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),Ll.copy(i.position),Ll.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ll),i.updateMatrixWorld(),s.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth)}}class PM extends ku{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zu extends mm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class IM extends Vu{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class la extends ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new IM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Dl=new WeakMap;class LM extends yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Dl.has(o)===!0)s&&s(Dl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Dl.set(l,c),Ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class DM extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class NM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Gu="\\[\\]\\.:\\/",UM=new RegExp("["+Gu+"]","g"),Wu="[^"+Gu+"]",OM="[^"+Gu.replace("\\.","")+"]",FM=/((?:WC+[\/:])*)/.source.replace("WC",Wu),BM=/(WCOD+)?/.source.replace("WCOD",OM),HM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),kM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),VM=new RegExp("^"+FM+BM+HM+kM+"$"),zM=["material","materials","bones","map"];class GM{constructor(e,t,i){const s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class _t{constructor(e,t,i){this.path=t,this.parsedPath=i||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,i):new _t(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(UM,"")}static parseTrackName(e){const t=VM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);zM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=GM;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function kh(n,e,t,i){const s=WM(i);switch(t){case nm:return n*e;case Ru:return n*e/s.components*s.byteLength;case Cu:return n*e/s.components*s.byteLength;case sm:return n*e*2/s.components*s.byteLength;case Pu:return n*e*2/s.components*s.byteLength;case im:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case Iu:return n*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Tc:return Math.max(n,16)*Math.max(e,8)/4;case yc:case Ec:return Math.max(n,8)*Math.max(e,8)/2;case bc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WM(n){switch(n){case ui:case Zp:return{byteLength:1,components:1};case ao:case Jp:case Mo:return{byteLength:2,components:1};case bu:case wu:return{byteLength:2,components:4};case Ms:case Tu:case zn:return{byteLength:4,components:1};case em:case tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);function bm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function XM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
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
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,my=`#define PI 3.141592653589793
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
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_y=`vec3 transformedNormal = objectNormal;
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
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
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
}`,Ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
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
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Wy=`struct PhysicalMaterial {
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
}`,Xy=`
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tS=`#if defined( USE_POINTS_UV )
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
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
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
#endif`,lS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
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
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PS=`float getShadowMask() {
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
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,kS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`#include <common>
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
}`,ZS=`#if DEPTH_PACKING == 3200
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
}`,JS=`#define DISTANCE
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
}`,eE=`#define DISTANCE
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
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
}`,sE=`uniform vec3 diffuse;
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
}`,rE=`#include <common>
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#define LAMBERT
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
}`,lE=`#define LAMBERT
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
}`,cE=`#define MATCAP
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
}`,uE=`#define MATCAP
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
}`,fE=`#define NORMAL
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
}`,hE=`#define NORMAL
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
}`,dE=`#define PHONG
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
}`,pE=`#define PHONG
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
}`,mE=`#define STANDARD
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
}`,gE=`#define STANDARD
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
}`,_E=`#define TOON
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
}`,vE=`#define TOON
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
}`,xE=`uniform float size;
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
}`,AE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,yE=`uniform vec3 color;
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
}`,SE=`uniform float rotation;
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
}`,EE=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:jM,alphahash_pars_fragment:qM,alphamap_fragment:KM,alphamap_pars_fragment:YM,alphatest_fragment:$M,alphatest_pars_fragment:QM,aomap_fragment:ZM,aomap_pars_fragment:JM,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:sy,iridescence_fragment:ry,bumpmap_pars_fragment:oy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:uy,color_fragment:fy,color_pars_fragment:hy,color_pars_vertex:dy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:_y,displacementmap_pars_vertex:vy,displacementmap_vertex:xy,emissivemap_fragment:Ay,emissivemap_pars_fragment:My,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:Ey,envmap_common_pars_fragment:Ty,envmap_pars_fragment:by,envmap_pars_vertex:wy,envmap_physical_pars_fragment:By,envmap_vertex:Ry,fog_vertex:Cy,fog_pars_vertex:Py,fog_fragment:Iy,fog_pars_fragment:Ly,gradientmap_pars_fragment:Dy,lightmap_pars_fragment:Ny,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Oy,lights_pars_begin:Fy,lights_toon_fragment:Hy,lights_toon_pars_fragment:ky,lights_phong_fragment:Vy,lights_phong_pars_fragment:zy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Wy,lights_fragment_begin:Xy,lights_fragment_maps:jy,lights_fragment_end:qy,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:Qy,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:eS,map_particle_pars_fragment:tS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphinstance_vertex:sS,morphcolor_vertex:rS,morphnormal_vertex:oS,morphtarget_pars_vertex:aS,morphtarget_vertex:lS,normal_fragment_begin:cS,normal_fragment_maps:uS,normal_pars_fragment:fS,normal_pars_vertex:hS,normal_vertex:dS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:vS,opaque_fragment:xS,packing:AS,premultiplied_alpha_fragment:MS,project_vertex:yS,dithering_fragment:SS,dithering_pars_fragment:ES,roughnessmap_fragment:TS,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:RS,shadowmap_vertex:CS,shadowmask_pars_fragment:PS,skinbase_vertex:IS,skinning_pars_vertex:LS,skinning_vertex:DS,skinnormal_vertex:NS,specularmap_fragment:US,specularmap_pars_fragment:OS,tonemapping_fragment:FS,tonemapping_pars_fragment:BS,transmission_fragment:HS,transmission_pars_fragment:kS,uv_pars_fragment:VS,uv_pars_vertex:zS,uv_vertex:GS,worldpos_vertex:WS,background_vert:XS,background_frag:jS,backgroundCube_vert:qS,backgroundCube_frag:KS,cube_vert:YS,cube_frag:$S,depth_vert:QS,depth_frag:ZS,distanceRGBA_vert:JS,distanceRGBA_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:sE,meshbasic_vert:rE,meshbasic_frag:oE,meshlambert_vert:aE,meshlambert_frag:lE,meshmatcap_vert:cE,meshmatcap_frag:uE,meshnormal_vert:fE,meshnormal_frag:hE,meshphong_vert:dE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:_E,meshtoon_frag:vE,points_vert:xE,points_frag:AE,shadow_vert:ME,shadow_frag:yE,sprite_vert:SE,sprite_frag:EE},Ie={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ii={basic:{uniforms:nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:nn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:nn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:nn([Ie.points,Ie.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:nn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:nn([Ie.common,Ie.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:nn([Ie.sprite,Ie.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:nn([Ie.common,Ie.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:nn([Ie.lights,Ie.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const $o={r:0,b:0,g:0},us=new Yn,TE=new et;function bE(n,e,t,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function _(b){let A=!1;const w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),A=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,A){const w=g(A);w&&(w.isCubeTexture||w.mapping===Ba)?(u===void 0&&(u=new zt(new xr(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:pr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),us.copy(A.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(us)),u.material.toneMapped=ct.getTransfer(w.colorSpace)!==At,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new zt(new Va(2,2),new ns({name:"BackgroundMaterial",uniforms:pr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ct.getTransfer(w.colorSpace)!==At,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB($o,pm(n)),i.buffers.color.setClear($o.r,$o.g,$o.b,A,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:y}}function wE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,D,X,J,ae){let he=!1;const ee=f(J,X,D);r!==ee&&(r=ee,c(r.object)),he=d(S,J,X,ae),he&&g(S,J,X,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(he||o)&&(o=!1,A(S,D,X,J),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,D,X){const J=X.wireframe===!0;let ae=i[S.id];ae===void 0&&(ae={},i[S.id]=ae);let he=ae[D.id];he===void 0&&(he={},ae[D.id]=he);let ee=he[J];return ee===void 0&&(ee=h(l()),he[J]=ee),ee}function h(S){const D=[],X=[],J=[];for(let ae=0;ae<t;ae++)D[ae]=0,X[ae]=0,J[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:J,object:S,attributes:{},index:null}}function d(S,D,X,J){const ae=r.attributes,he=D.attributes;let ee=0;const ue=X.getAttributes();for(const q in ue)if(ue[q].location>=0){const we=ae[q];let Le=he[q];if(Le===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Le=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Le=S.instanceColor)),we===void 0||we.attribute!==Le||Le&&we.data!==Le.data)return!0;ee++}return r.attributesNum!==ee||r.index!==J}function g(S,D,X,J){const ae={},he=D.attributes;let ee=0;const ue=X.getAttributes();for(const q in ue)if(ue[q].location>=0){let we=he[q];we===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(we=S.instanceColor));const Le={};Le.attribute=we,we&&we.data&&(Le.data=we.data),ae[q]=Le,ee++}r.attributes=ae,r.attributesNum=ee,r.index=J}function _(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const X=r.newAttributes,J=r.enabledAttributes,ae=r.attributeDivisors;X[S]=1,J[S]===0&&(n.enableVertexAttribArray(S),J[S]=1),ae[S]!==D&&(n.vertexAttribDivisor(S,D),ae[S]=D)}function y(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,J=D.length;X<J;X++)D[X]!==S[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function b(S,D,X,J,ae,he,ee){ee===!0?n.vertexAttribIPointer(S,D,X,ae,he):n.vertexAttribPointer(S,D,X,J,ae,he)}function A(S,D,X,J){_();const ae=J.attributes,he=X.getAttributes(),ee=D.defaultAttributeValues;for(const ue in he){const q=he[ue];if(q.location>=0){let Ee=ae[ue];if(Ee===void 0&&(ue==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),ue==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),Ee!==void 0){const we=Ee.normalized,Le=Ee.itemSize,Be=e.get(Ee);if(Be===void 0)continue;const Ke=Be.buffer,tt=Be.type,Re=Be.bytesPerElement,z=tt===n.INT||tt===n.UNSIGNED_INT||Ee.gpuType===Tu;if(Ee.isInterleavedBufferAttribute){const P=Ee.data,K=P.stride,oe=Ee.offset;if(P.isInstancedInterleavedBuffer){for(let fe=0;fe<q.locationSize;fe++)p(q.location+fe,P.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let fe=0;fe<q.locationSize;fe++)m(q.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let fe=0;fe<q.locationSize;fe++)b(q.location+fe,Le/q.locationSize,tt,we,K*Re,(oe+Le/q.locationSize*fe)*Re,z)}else{if(Ee.isInstancedBufferAttribute){for(let P=0;P<q.locationSize;P++)p(q.location+P,Ee.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let P=0;P<q.locationSize;P++)m(q.location+P);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let P=0;P<q.locationSize;P++)b(q.location+P,Le/q.locationSize,tt,we,Le*Re,Le/q.locationSize*P*Re,z)}}else if(ee!==void 0){const we=ee[ue];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(q.location,we);break;case 3:n.vertexAttrib3fv(q.location,we);break;case 4:n.vertexAttrib4fv(q.location,we);break;default:n.vertexAttrib1fv(q.location,we)}}}}y()}function w(){N();for(const S in i){const D=i[S];for(const X in D){const J=D[X];for(const ae in J)u(J[ae].object),delete J[ae];delete D[X]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const X in D){const J=D[X];for(const ae in J)u(J[ae].object),delete J[ae];delete D[X]}delete i[S.id]}function I(S){for(const D in i){const X=i[D];if(X[S.id]===void 0)continue;const J=X[S.id];for(const ae in J)u(J[ae].object),delete J[ae];delete X[S.id]}}function N(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function RE(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Ln&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const N=I===Mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ui&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!N)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:w,maxSamples:C}}function PE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ps,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,b=y*4;let A=p.clippingState||null;l.value=A,A=u(g,h,b,d);for(let w=0;w!==b;++w)A[w]=t[w];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,A=d;b!==_;++b,A+=4)o.copy(f[b]).applyMatrix4(y,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function IE(n){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=ur:a===Mc&&(o.mapping=fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ac||a===Mc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $A(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ys=4,Vh=[.125,.215,.35,.446,.526,.582],_s=20,Nl=new zu,zh=new Qe;let Ul=null,Ol=0,Fl=0,Bl=!1;const ms=(1+Math.sqrt(5))/2,Xs=1/ms,Gh=[new V(-ms,Xs,0),new V(ms,Xs,0),new V(-Xs,0,ms),new V(Xs,0,ms),new V(0,ms,-Xs),new V(0,ms,Xs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],LE=new V;class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=LE}=r;Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Ol,Fl),this._renderer.xr.enabled=Bl,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Mo,format:Ln,colorSpace:cn,depthBuffer:!1},s=Xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DE(r)),this._blurMaterial=NE(r,e,t)}return s}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Nl)}_sceneToCubeUV(e,t,i,s,r){const l=new rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zh),f.toneMapping=ts,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const _=new In({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new zt(new xr,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(zh),p=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):A===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Qo(s,A*w,b>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ur||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gh[(s-r-1)%Gh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_s-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);const p=[];let y=0;for(let I=0;I<_s;++I){const N=I/_,T=Math.exp(-N*N/2);p.push(T),I===0?y+=T:I<m&&(y+=2*T)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const A=this._sizeLods[s],w=3*A*(s>b-Ys?s-b+Ys:0),C=4*(this._cubeSize-A);Qo(t,w,C,3*A,2*A),l.setRenderTarget(t),l.render(f,Nl)}}function DE(n){const e=[],t=[],i=[];let s=n;const r=n-Ys+1+Vh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ys?l=Vh[o-n+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),b=new Float32Array(m*g*d),A=new Float32Array(p*g*d);for(let C=0;C<d;C++){const I=C%3*2/3-1,N=C>2?0:-1,T=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];y.set(T,_*g*C),b.set(h,m*g*C);const S=[C,C,C,C,C,C];A.set(S,p*g*C)}const w=new Tn;w.setAttribute("position",new Zt(y,_)),w.setAttribute("uv",new Zt(b,m)),w.setAttribute("faceIndex",new Zt(A,p)),e.push(w),s>Ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xh(n,e,t){const i=new ys(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function NE(n,e,t){const i=new Float32Array(_s),s=new V(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function jh(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function qh(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}function UE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ac||l===Mc,u=l===ur||l===fr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Wh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Wh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function OE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FE(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let b=0,A=y.length;b<A;b+=3){const w=y[b+0],C=y[b+1],I=y[b+2];h.push(w,C,C,I,I,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,A=y.length/3-1;b<A;b+=3){const w=b+0,C=b+1,I=b+2;h.push(w,C,C,I,I,w)}}else return;const m=new(lm(h)?dm:hm)(h,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function BE(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function HE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kE(n,e,t){const i=new WeakMap,s=new ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let A=a.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*f),I=new cm(C,A,w,f);I.type=zn,I.needsUpdate=!0;const N=b*4;for(let S=0;S<f;S++){const D=m[S],X=p[S],J=y[S],ae=A*w*4*S;for(let he=0;he<D.count;he++){const ee=he*N;d===!0&&(s.fromBufferAttribute(D,he),C[ae+ee+0]=s.x,C[ae+ee+1]=s.y,C[ae+ee+2]=s.z,C[ae+ee+3]=0),g===!0&&(s.fromBufferAttribute(X,he),C[ae+ee+4]=s.x,C[ae+ee+5]=s.y,C[ae+ee+6]=s.z,C[ae+ee+7]=0),_===!0&&(s.fromBufferAttribute(J,he),C[ae+ee+8]=s.x,C[ae+ee+9]=s.y,C[ae+ee+10]=s.z,C[ae+ee+11]=J.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new at(A,w)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function VE(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const wm=new Gt,Kh=new Mm(1,1),Rm=new cm,Cm=new DA,Pm=new gm,Yh=[],$h=[],Qh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function WE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function XE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function jE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),Ht(t,i)}}function qE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),Ht(t,i)}}function KE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),Ht(t,i)}}function YE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $E(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function QE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function ZE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function JE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function tT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function iT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kh.compareFunction=am,r=Kh):r=wm,t.setTexture2D(e||r,s)}function sT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cm,s)}function rT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pm,s)}function oT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rm,s)}function aT(n){switch(n){case 5126:return zE;case 35664:return GE;case 35665:return WE;case 35666:return XE;case 35674:return jE;case 35675:return qE;case 35676:return KE;case 5124:case 35670:return YE;case 35667:case 35671:return $E;case 35668:case 35672:return QE;case 35669:case 35673:return ZE;case 5125:return JE;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return oT}}function lT(n,e){n.uniform1fv(this.addr,e)}function cT(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function uT(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function fT(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function hT(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dT(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pT(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mT(n,e){n.uniform1iv(this.addr,e)}function gT(n,e){n.uniform2iv(this.addr,e)}function _T(n,e){n.uniform3iv(this.addr,e)}function vT(n,e){n.uniform4iv(this.addr,e)}function xT(n,e){n.uniform1uiv(this.addr,e)}function AT(n,e){n.uniform2uiv(this.addr,e)}function MT(n,e){n.uniform3uiv(this.addr,e)}function yT(n,e){n.uniform4uiv(this.addr,e)}function ST(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wm,r[o])}function ET(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cm,r[o])}function TT(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pm,r[o])}function bT(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rm,r[o])}function wT(n){switch(n){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return hT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return AT;case 36295:return MT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return bT}}class RT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aT(t.type)}}class CT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wT(t.type)}}class PT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function ed(n,e){n.seq.push(e),n.map[e.id]=e}function IT(n,e,t){const i=n.name,s=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ed(t,c===void 0?new RT(a,n,e):new CT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new PT(a),ed(t,f)),t=f}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);IT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function td(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LT=37297;let DT=0;function NT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nd=new Ze;function UT(n){ct._getMatrix(nd,ct.workingColorSpace,n);const e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function id(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+NT(n.getShaderSource(e),a)}else return r}function OT(n,e){const t=UT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FT(n,e){let t;switch(e){case Gx:t="Linear";break;case Wx:t="Reinhard";break;case Xx:t="Cineon";break;case jx:t="ACESFilmic";break;case Kx:t="AgX";break;case Yx:t="Neutral";break;case qx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zo=new V;function BT(){ct.getLuminanceCoefficients(Zo);const n=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function kT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zr(n){return n!==""}function sd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(n){return n.replace(zT,WT)}const GT=new Map;function WT(n,e){let t=Je[e];if(t===void 0){const i=GT.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}const XT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(XT,jT)}function jT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YT(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function $T(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yp:e="ENVMAP_BLENDING_MULTIPLY";break;case Vx:e="ENVMAP_BLENDING_MIX";break;case zx:e="ENVMAP_BLENDING_ADD";break}return e}function QT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ZT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qT(t),c=KT(t),u=YT(t),f=$T(t),h=QT(t),d=HT(t),g=kT(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?Je.tonemapping_pars_fragment:"",t.toneMapping!==ts?FT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,OT("linearToOutputTexel",t.outputColorSpace),BT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=eu(o),o=sd(o,t),o=rd(o,t),a=eu(a),a=sd(a,t),a=rd(a,t),o=od(o),a=od(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+o,A=y+p+a,w=td(s,s.VERTEX_SHADER,b),C=td(s,s.FRAGMENT_SHADER,A);s.attachShader(_,w),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(D){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(_)||"",J=s.getShaderInfoLog(w)||"",ae=s.getShaderInfoLog(C)||"",he=X.trim(),ee=J.trim(),ue=ae.trim();let q=!0,Ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,C);else{const we=id(s,w,"vertex"),Le=id(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+he+`
`+we+`
`+Le)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(ee===""||ue==="")&&(Ee=!1);Ee&&(D.diagnostics={runnable:q,programLog:he,vertexShader:{log:ee,prefix:m},fragmentShader:{log:ue,prefix:p}})}s.deleteShader(w),s.deleteShader(C),N=new ca(s,_),T=VT(s,_)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,LT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let JT=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tb(e),t.set(e,i)),i}}class tb{constructor(e){this.id=JT++,this.code=e,this.usedTimes=0}}function nb(n,e,t,i,s,r,o){const a=new um,l=new eb,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,D,X,J){const ae=X.fog,he=J.geometry,ee=T.isMeshStandardMaterial?X.environment:null,ue=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),q=ue&&ue.mapping===Ba?ue.image.height:null,Ee=g[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const we=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Le=we!==void 0?we.length:0;let Be=0;he.morphAttributes.position!==void 0&&(Be=1),he.morphAttributes.normal!==void 0&&(Be=2),he.morphAttributes.color!==void 0&&(Be=3);let Ke,tt,Re,z;if(Ee){const Me=ii[Ee];Ke=Me.vertexShader,tt=Me.fragmentShader}else Ke=T.vertexShader,tt=T.fragmentShader,l.update(T),Re=l.getVertexShaderID(T),z=l.getFragmentShaderID(T);const P=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),oe=J.isInstancedMesh===!0,fe=J.isBatchedMesh===!0,Ce=!!T.map,R=!!T.matcap,v=!!ue,F=!!T.aoMap,W=!!T.lightMap,Y=!!T.bumpMap,k=!!T.normalMap,_e=!!T.displacementMap,te=!!T.emissiveMap,le=!!T.metalnessMap,pe=!!T.roughnessMap,Pe=T.anisotropy>0,M=T.clearcoat>0,x=T.dispersion>0,U=T.iridescence>0,$=T.sheen>0,ce=T.transmission>0,Q=Pe&&!!T.anisotropyMap,L=M&&!!T.clearcoatMap,B=M&&!!T.clearcoatNormalMap,ne=M&&!!T.clearcoatRoughnessMap,re=U&&!!T.iridescenceMap,Z=U&&!!T.iridescenceThicknessMap,ge=$&&!!T.sheenColorMap,xe=$&&!!T.sheenRoughnessMap,Se=!!T.specularMap,ye=!!T.specularColorMap,ke=!!T.specularIntensityMap,O=ce&&!!T.transmissionMap,Ae=ce&&!!T.thicknessMap,be=!!T.gradientMap,De=!!T.alphaMap,ve=T.alphaTest>0,me=!!T.alphaHash,Ue=!!T.extensions;let H=ts;T.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(H=n.toneMapping);const de={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:Ke,fragmentShader:tt,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:fe,batchingColor:fe&&J._colorsTexture!==null,instancing:oe,instancingColor:oe&&J.instanceColor!==null,instancingMorph:oe&&J.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:cn,alphaToCoverage:!!T.alphaToCoverage,map:Ce,matcap:R,envMap:v,envMapMode:v&&ue.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:W,bumpMap:Y,normalMap:k,displacementMap:h&&_e,emissiveMap:te,normalMapObjectSpace:k&&T.normalMapType===tA,normalMapTangentSpace:k&&T.normalMapType===om,metalnessMap:le,roughnessMap:pe,anisotropy:Pe,anisotropyMap:Q,clearcoat:M,clearcoatMap:L,clearcoatNormalMap:B,clearcoatRoughnessMap:ne,dispersion:x,iridescence:U,iridescenceMap:re,iridescenceThicknessMap:Z,sheen:$,sheenColorMap:ge,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:ye,specularIntensityMap:ke,transmission:ce,transmissionMap:O,thicknessMap:Ae,gradientMap:be,opaque:T.transparent===!1&&T.blending===tr&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:me,combine:T.combine,mapUv:Ce&&_(T.map.channel),aoMapUv:F&&_(T.aoMap.channel),lightMapUv:W&&_(T.lightMap.channel),bumpMapUv:Y&&_(T.bumpMap.channel),normalMapUv:k&&_(T.normalMap.channel),displacementMapUv:_e&&_(T.displacementMap.channel),emissiveMapUv:te&&_(T.emissiveMap.channel),metalnessMapUv:le&&_(T.metalnessMap.channel),roughnessMapUv:pe&&_(T.roughnessMap.channel),anisotropyMapUv:Q&&_(T.anisotropyMap.channel),clearcoatMapUv:L&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:B&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(T.sheenRoughnessMap.channel),specularMapUv:Se&&_(T.specularMap.channel),specularColorMapUv:ye&&_(T.specularColorMap.channel),specularIntensityMapUv:ke&&_(T.specularIntensityMap.channel),transmissionMapUv:O&&_(T.transmissionMap.channel),thicknessMapUv:Ae&&_(T.thicknessMap.channel),alphaMapUv:De&&_(T.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(k||Pe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(Ce||De),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:K,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:H,decodeVideoTexture:Ce&&T.map.isVideoTexture===!0&&ct.getTransfer(T.map.colorSpace)===At,decodeVideoTextureEmissive:te&&T.emissiveMap.isVideoTexture===!0&&ct.getTransfer(T.emissiveMap.colorSpace)===At,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ri,flipSided:T.side===gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(y(S,T),b(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function A(T){const S=g[T.type];let D;if(S){const X=ii[S];D=jA.clone(X.uniforms)}else D=T.uniforms;return D}function w(T,S){let D;for(let X=0,J=u.length;X<J;X++){const ae=u[X];if(ae.cacheKey===S){D=ae,++D.usedTimes;break}}return D===void 0&&(D=new ZT(n,S,T,r),u.push(D)),D}function C(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function I(T){l.remove(T)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:w,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:N}}function ib(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function sb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||sb),i.length>1&&i.sort(h||ld),s.length>1&&s.sort(h||ld)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function rb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new cd,n.set(i,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Qe};break;case"SpotLight":t={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function ab(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lb=0;function cb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ub(n){const e=new ob,t=ab(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new et,o=new et;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,b=0,A=0,w=0,C=0,I=0;c.sort(cb);for(let T=0,S=c.length;T<S;T++){const D=c[T],X=D.color,J=D.intensity,ae=D.distance,he=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*J,f+=X.g*J,h+=X.b*J;else if(D.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(D.sh.coefficients[ee],J);I++}else if(D.isDirectionalLight){const ee=e.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ue=D.shadow,q=t.get(D);q.shadowIntensity=ue.intensity,q.shadowBias=ue.bias,q.shadowNormalBias=ue.normalBias,q.shadowRadius=ue.radius,q.shadowMapSize=ue.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=he,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=ee,d++}else if(D.isSpotLight){const ee=e.get(D);ee.position.setFromMatrixPosition(D.matrixWorld),ee.color.copy(X).multiplyScalar(J),ee.distance=ae,ee.coneCos=Math.cos(D.angle),ee.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ee.decay=D.decay,i.spot[_]=ee;const ue=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,ue.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=ue.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=ue.intensity,q.shadowBias=ue.bias,q.shadowNormalBias=ue.normalBias,q.shadowRadius=ue.radius,q.shadowMapSize=ue.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=he,A++}_++}else if(D.isRectAreaLight){const ee=e.get(D);ee.color.copy(X).multiplyScalar(J),ee.halfWidth.set(D.width*.5,0,0),ee.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=ee,m++}else if(D.isPointLight){const ee=e.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),ee.distance=D.distance,ee.decay=D.decay,D.castShadow){const ue=D.shadow,q=t.get(D);q.shadowIntensity=ue.intensity,q.shadowBias=ue.bias,q.shadowNormalBias=ue.normalBias,q.shadowRadius=ue.radius,q.shadowMapSize=ue.mapSize,q.shadowCameraNear=ue.camera.near,q.shadowCameraFar=ue.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=he,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=ee,g++}else if(D.isHemisphereLight){const ee=e.get(D);ee.skyColor.copy(D.color).multiplyScalar(J),ee.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[p]=ee,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==A||N.numSpotMaps!==w||N.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=A,N.numSpotMaps=w,N.numLightProbes=I,i.version=lb++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(b.isSpotLight){const A=i.spot[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function ud(n){const e=new ub(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ud(n),e.set(s,[a])):r>=o.length?(a=new ud(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
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
}`;function pb(n,e,t){let i=new Ou;const s=new at,r=new at,o=new ht,a=new fM({depthPacking:eA}),l=new hM,c={},u=t.maxTextureSize,f={[Ui]:gn,[gn]:Ui,[ri]:ri},h=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:hb,fragmentShader:db}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tn;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let p=this.type;this.render=function(C,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(es),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=p!==yi&&this.type===yi,ae=p===yi&&this.type!==yi;for(let he=0,ee=C.length;he<ee;he++){const ue=C[he],q=ue.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Ee=q.getFrameExtents();if(s.multiply(Ee),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ee.x),s.x=r.x*Ee.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ee.y),s.y=r.y*Ee.y,q.mapSize.y=r.y)),q.map===null||J===!0||ae===!0){const Le=this.type!==yi?{minFilter:an,magFilter:an}:{};q.map!==null&&q.map.dispose(),q.map=new ys(s.x,s.y,Le),q.map.texture.name=ue.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const we=q.getViewportCount();for(let Le=0;Le<we;Le++){const Be=q.getViewport(Le);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),X.viewport(o),q.updateMatrices(ue,Le),i=q.getFrustum(),A(I,N,q.camera,ue,this.type)}q.isPointLightShadow!==!0&&this.type===yi&&y(q,N),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,D)};function y(C,I){const N=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ys(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,N,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,N,d,_,null)}function b(C,I,N,T){let S=null;const D=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=S.uuid,J=I.uuid;let ae=c[X];ae===void 0&&(ae={},c[X]=ae);let he=ae[J];he===void 0&&(he=S.clone(),ae[J]=he,I.addEventListener("dispose",w)),S=he}if(S.visible=I.visible,S.wireframe=I.wireframe,T===yi?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:f[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=N}return S}function A(C,I,N,T,S){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const J=e.update(C),ae=C.material;if(Array.isArray(ae)){const he=J.groups;for(let ee=0,ue=he.length;ee<ue;ee++){const q=he[ee],Ee=ae[q.materialIndex];if(Ee&&Ee.visible){const we=b(C,Ee,T,S);C.onBeforeShadow(n,C,I,N,J,we,q),n.renderBufferDirect(N,null,J,we,C,q),C.onAfterShadow(n,C,I,N,J,we,q)}}}else if(ae.visible){const he=b(C,ae,T,S);C.onBeforeShadow(n,C,I,N,J,he,null),n.renderBufferDirect(N,null,J,he,C,null),C.onAfterShadow(n,C,I,N,J,he,null)}}const X=C.children;for(let J=0,ae=X.length;J<ae;J++)A(X[J],I,N,T,S)}function w(C){C.target.removeEventListener("dispose",w);for(const N in c){const T=c[N],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const mb={[dc]:pc,[mc]:vc,[gc]:xc,[cr]:_c,[pc]:dc,[vc]:mc,[xc]:gc,[_c]:cr};function gb(n,e){function t(){let O=!1;const Ae=new ht;let be=null;const De=new ht(0,0,0,0);return{setMask:function(ve){be!==ve&&!O&&(n.colorMask(ve,ve,ve,ve),be=ve)},setLocked:function(ve){O=ve},setClear:function(ve,me,Ue,H,de){de===!0&&(ve*=H,me*=H,Ue*=H),Ae.set(ve,me,Ue,H),De.equals(Ae)===!1&&(n.clearColor(ve,me,Ue,H),De.copy(Ae))},reset:function(){O=!1,be=null,De.set(-1,0,0,0)}}}function i(){let O=!1,Ae=!1,be=null,De=null,ve=null;return{setReversed:function(me){if(Ae!==me){const Ue=e.get("EXT_clip_control");me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ae=me;const H=ve;ve=null,this.setClear(H)}},getReversed:function(){return Ae},setTest:function(me){me?P(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(me){be!==me&&!O&&(n.depthMask(me),be=me)},setFunc:function(me){if(Ae&&(me=mb[me]),De!==me){switch(me){case dc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case gc:n.depthFunc(n.EQUAL);break;case _c:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case xc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=me}},setLocked:function(me){O=me},setClear:function(me){ve!==me&&(Ae&&(me=1-me),n.clearDepth(me),ve=me)},reset:function(){O=!1,be=null,De=null,ve=null,Ae=!1}}}function s(){let O=!1,Ae=null,be=null,De=null,ve=null,me=null,Ue=null,H=null,de=null;return{setTest:function(Me){O||(Me?P(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(Me){Ae!==Me&&!O&&(n.stencilMask(Me),Ae=Me)},setFunc:function(Me,Fe,We){(be!==Me||De!==Fe||ve!==We)&&(n.stencilFunc(Me,Fe,We),be=Me,De=Fe,ve=We)},setOp:function(Me,Fe,We){(me!==Me||Ue!==Fe||H!==We)&&(n.stencilOp(Me,Fe,We),me=Me,Ue=Fe,H=We)},setLocked:function(Me){O=Me},setClear:function(Me){de!==Me&&(n.clearStencil(Me),de=Me)},reset:function(){O=!1,Ae=null,be=null,De=null,ve=null,me=null,Ue=null,H=null,de=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,b=null,A=null,w=null,C=null,I=new Qe(0,0,0),N=0,T=!1,S=null,D=null,X=null,J=null,ae=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ue=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(q)[1]),ee=ue>=1):q.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ee=ue>=2);let Ee=null,we={};const Le=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Ke=new ht().fromArray(Le),tt=new ht().fromArray(Be);function Re(O,Ae,be,De){const ve=new Uint8Array(4),me=n.createTexture();n.bindTexture(O,me),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<be;Ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Ae+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return me}const z={};z[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(n.DEPTH_TEST),o.setFunc(cr),Y(!1),k(Yf),P(n.CULL_FACE),F(es);function P(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function K(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function oe(O,Ae){return f[O]!==Ae?(n.bindFramebuffer(O,Ae),f[O]=Ae,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function fe(O,Ae){let be=d,De=!1;if(O){be=h.get(Ae),be===void 0&&(be=[],h.set(Ae,be));const ve=O.textures;if(be.length!==ve.length||be[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ue=ve.length;me<Ue;me++)be[me]=n.COLOR_ATTACHMENT0+me;be.length=ve.length,De=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,De=!0);De&&n.drawBuffers(be)}function Ce(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const R={[gs]:n.FUNC_ADD,[Ex]:n.FUNC_SUBTRACT,[Tx]:n.FUNC_REVERSE_SUBTRACT};R[bx]=n.MIN,R[wx]=n.MAX;const v={[Rx]:n.ZERO,[Cx]:n.ONE,[Px]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[Ox]:n.SRC_ALPHA_SATURATE,[Nx]:n.DST_COLOR,[Lx]:n.DST_ALPHA,[Ix]:n.ONE_MINUS_SRC_COLOR,[hc]:n.ONE_MINUS_SRC_ALPHA,[Ux]:n.ONE_MINUS_DST_COLOR,[Dx]:n.ONE_MINUS_DST_ALPHA,[Fx]:n.CONSTANT_COLOR,[Bx]:n.ONE_MINUS_CONSTANT_COLOR,[Hx]:n.CONSTANT_ALPHA,[kx]:n.ONE_MINUS_CONSTANT_ALPHA};function F(O,Ae,be,De,ve,me,Ue,H,de,Me){if(O===es){_===!0&&(K(n.BLEND),_=!1);return}if(_===!1&&(P(n.BLEND),_=!0),O!==Sx){if(O!==m||Me!==T){if((p!==gs||A!==gs)&&(n.blendEquation(n.FUNC_ADD),p=gs,A=gs),Me)switch(O){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFunc(n.ONE,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $f:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,b=null,w=null,C=null,I.set(0,0,0),N=0,m=O,T=Me}return}ve=ve||Ae,me=me||be,Ue=Ue||De,(Ae!==p||ve!==A)&&(n.blendEquationSeparate(R[Ae],R[ve]),p=Ae,A=ve),(be!==y||De!==b||me!==w||Ue!==C)&&(n.blendFuncSeparate(v[be],v[De],v[me],v[Ue]),y=be,b=De,w=me,C=Ue),(H.equals(I)===!1||de!==N)&&(n.blendColor(H.r,H.g,H.b,de),I.copy(H),N=de),m=O,T=!1}function W(O,Ae){O.side===ri?K(n.CULL_FACE):P(n.CULL_FACE);let be=O.side===gn;Ae&&(be=!be),Y(be),O.blending===tr&&O.transparent===!1?F(es):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const De=O.stencilWrite;a.setTest(De),De&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function k(O){O!==Ax?(P(n.CULL_FACE),O!==D&&(O===Yf?n.cullFace(n.BACK):O===Mx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),D=O}function _e(O){O!==X&&(ee&&n.lineWidth(O),X=O)}function te(O,Ae,be){O?(P(n.POLYGON_OFFSET_FILL),(J!==Ae||ae!==be)&&(n.polygonOffset(Ae,be),J=Ae,ae=be)):K(n.POLYGON_OFFSET_FILL)}function le(O){O?P(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function pe(O){O===void 0&&(O=n.TEXTURE0+he-1),Ee!==O&&(n.activeTexture(O),Ee=O)}function Pe(O,Ae,be){be===void 0&&(Ee===null?be=n.TEXTURE0+he-1:be=Ee);let De=we[be];De===void 0&&(De={type:void 0,texture:void 0},we[be]=De),(De.type!==O||De.texture!==Ae)&&(Ee!==be&&(n.activeTexture(be),Ee=be),n.bindTexture(O,Ae||z[O]),De.type=O,De.texture=Ae)}function M(){const O=we[Ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(O){Ke.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ke.copy(O))}function xe(O){tt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Se(O,Ae){let be=c.get(Ae);be===void 0&&(be=new WeakMap,c.set(Ae,be));let De=be.get(O);De===void 0&&(De=n.getUniformBlockIndex(Ae,O.name),be.set(O,De))}function ye(O,Ae){const De=c.get(Ae).get(O);l.get(Ae)!==De&&(n.uniformBlockBinding(Ae,De,O.__bindingPointIndex),l.set(Ae,De))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Ee=null,we={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,b=null,A=null,w=null,C=null,I=new Qe(0,0,0),N=0,T=!1,S=null,D=null,X=null,J=null,ae=null,Ke.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:K,bindFramebuffer:oe,drawBuffers:fe,useProgram:Ce,setBlending:F,setMaterial:W,setFlipSided:Y,setCullFace:k,setLineWidth:_e,setPolygonOffset:te,setScissorTest:le,activeTexture:pe,bindTexture:Pe,unbindTexture:M,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:re,texImage3D:Z,updateUBOMapping:Se,uniformBlockBinding:ye,texStorage2D:B,texStorage3D:ne,texSubImage2D:$,texSubImage3D:ce,compressedTexSubImage2D:Q,compressedTexSubImage3D:L,scissor:ge,viewport:xe,reset:ke}}function _b(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return d?new OffscreenCanvas(M,x):po("canvas")}function _(M,x,U){let $=1;const ce=Pe(M);if((ce.width>U||ce.height>U)&&($=U/Math.max(ce.width,ce.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Q=Math.floor($*ce.width),L=Math.floor($*ce.height);f===void 0&&(f=g(Q,L));const B=x?g(Q,L):f;return B.width=Q,B.height=L,B.getContext("2d").drawImage(M,0,0,Q,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+L+")."),B}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function y(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,x,U,$,ce=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=x;if(x===n.RED&&(U===n.FLOAT&&(Q=n.R32F),U===n.HALF_FLOAT&&(Q=n.R16F),U===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.R8UI),U===n.UNSIGNED_SHORT&&(Q=n.R16UI),U===n.UNSIGNED_INT&&(Q=n.R32UI),U===n.BYTE&&(Q=n.R8I),U===n.SHORT&&(Q=n.R16I),U===n.INT&&(Q=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Q=n.RG32F),U===n.HALF_FLOAT&&(Q=n.RG16F),U===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RG8UI),U===n.UNSIGNED_SHORT&&(Q=n.RG16UI),U===n.UNSIGNED_INT&&(Q=n.RG32UI),U===n.BYTE&&(Q=n.RG8I),U===n.SHORT&&(Q=n.RG16I),U===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),U===n.UNSIGNED_INT&&(Q=n.RGB32UI),U===n.BYTE&&(Q=n.RGB8I),U===n.SHORT&&(Q=n.RGB16I),U===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),U===n.UNSIGNED_INT&&(Q=n.RGBA32UI),U===n.BYTE&&(Q=n.RGBA8I),U===n.SHORT&&(Q=n.RGBA16I),U===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){const L=ce?Aa:ct.getTransfer($);U===n.FLOAT&&(Q=n.RGBA32F),U===n.HALF_FLOAT&&(Q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Q=L===At?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(M,x){let U;return M?x===null||x===Ms||x===lo?U=n.DEPTH24_STENCIL8:x===zn?U=n.DEPTH32F_STENCIL8:x===ao&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ms||x===lo?U=n.DEPTH_COMPONENT24:x===zn?U=n.DEPTH_COMPONENT32F:x===ao&&(U=n.DEPTH_COMPONENT16),U}function w(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==an&&M.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function C(M){const x=M.target;x.removeEventListener("dispose",C),N(x),x.isVideoTexture&&u.delete(x)}function I(M){const x=M.target;x.removeEventListener("dispose",I),S(x)}function N(M){const x=i.get(M);if(x.__webglInit===void 0)return;const U=M.source,$=h.get(U);if($){const ce=$[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(M),Object.keys($).length===0&&h.delete(U)}i.remove(M)}function T(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const U=M.source,$=h.get(U);delete $[x.__cacheKey],o.memory.textures--}function S(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ce=0;ce<x.__webglFramebuffer[$].length;ce++)n.deleteFramebuffer(x.__webglFramebuffer[$][ce]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=M.textures;for(let $=0,ce=U.length;$<ce;$++){const Q=i.get(U[$]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(U[$])}i.remove(M)}let D=0;function X(){D=0}function J(){const M=D;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function ae(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function he(M,x){const U=i.get(M);if(M.isVideoTexture&&le(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(U,M,x);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function ee(M,x){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){z(U,M,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function ue(M,x){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){z(U,M,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function q(M,x){const U=i.get(M);if(M.version>0&&U.__version!==M.version){P(U,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const Ee={[hr]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},we={[an]:n.NEAREST,[Qp]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Le={[nA]:n.NEVER,[lA]:n.ALWAYS,[iA]:n.LESS,[am]:n.LEQUAL,[sA]:n.EQUAL,[aA]:n.GEQUAL,[rA]:n.GREATER,[oA]:n.NOTEQUAL};function Be(M,x){if(x.type===zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===ia||x.magFilter===Vr||x.magFilter===wi||x.minFilter===on||x.minFilter===ia||x.minFilter===Vr||x.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Ee[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Ee[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Ee[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,we[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,we[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==Vr&&x.minFilter!==wi||x.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ke(M,x){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",C));const $=x.source;let ce=h.get($);ce===void 0&&(ce={},h.set($,ce));const Q=ae(x);if(Q!==M.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ce[Q].usedTimes++;const L=ce[M.__cacheKey];L!==void 0&&(ce[M.__cacheKey].usedTimes--,L.usedTimes===0&&T(x)),M.__cacheKey=Q,M.__webglTexture=ce[Q].texture}return U}function tt(M,x,U){return Math.floor(Math.floor(M/U)/x)}function Re(M,x,U,$){const Q=M.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,$,x.data);else{Q.sort((Z,ge)=>Z.start-ge.start);let L=0;for(let Z=1;Z<Q.length;Z++){const ge=Q[L],xe=Q[Z],Se=ge.start+ge.count,ye=tt(xe.start,x.width,4),ke=tt(ge.start,x.width,4);xe.start<=Se+1&&ye===ke&&tt(xe.start+xe.count-1,x.width,4)===ye?ge.count=Math.max(ge.count,xe.start+xe.count-ge.start):(++L,Q[L]=xe)}Q.length=L+1;const B=n.getParameter(n.UNPACK_ROW_LENGTH),ne=n.getParameter(n.UNPACK_SKIP_PIXELS),re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Z=0,ge=Q.length;Z<ge;Z++){const xe=Q[Z],Se=Math.floor(xe.start/4),ye=Math.ceil(xe.count/4),ke=Se%x.width,O=Math.floor(Se/x.width),Ae=ye,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,ke,O,Ae,be,U,$,x.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,B),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,re)}}function z(M,x,U){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const ce=Ke(M,x),Q=x.source;t.bindTexture($,M.__webglTexture,n.TEXTURE0+U);const L=i.get(Q);if(Q.version!==L.__version||ce===!0){t.activeTexture(n.TEXTURE0+U);const B=ct.getPrimaries(ct.workingColorSpace),ne=x.colorSpace===$i?null:ct.getPrimaries(x.colorSpace),re=x.colorSpace===$i||B===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Z=_(x.image,!1,s.maxTextureSize);Z=pe(x,Z);const ge=r.convert(x.format,x.colorSpace),xe=r.convert(x.type);let Se=b(x.internalFormat,ge,xe,x.colorSpace,x.isVideoTexture);Be($,x);let ye;const ke=x.mipmaps,O=x.isVideoTexture!==!0,Ae=L.__version===void 0||ce===!0,be=Q.dataReady,De=w(x,Z);if(x.isDepthTexture)Se=A(x.format===uo,x.type),Ae&&(O?t.texStorage2D(n.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Se,Z.width,Z.height,0,ge,xe,null));else if(x.isDataTexture)if(ke.length>0){O&&Ae&&t.texStorage2D(n.TEXTURE_2D,De,Se,ke[0].width,ke[0].height);for(let ve=0,me=ke.length;ve<me;ve++)ye=ke[ve],O?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ye.width,ye.height,ge,xe,ye.data):t.texImage2D(n.TEXTURE_2D,ve,Se,ye.width,ye.height,0,ge,xe,ye.data);x.generateMipmaps=!1}else O?(Ae&&t.texStorage2D(n.TEXTURE_2D,De,Se,Z.width,Z.height),be&&Re(x,Z,ge,xe)):t.texImage2D(n.TEXTURE_2D,0,Se,Z.width,Z.height,0,ge,xe,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Se,ke[0].width,ke[0].height,Z.depth);for(let ve=0,me=ke.length;ve<me;ve++)if(ye=ke[ve],x.format!==Ln)if(ge!==null)if(O){if(be)if(x.layerUpdates.size>0){const Ue=kh(ye.width,ye.height,x.format,x.type);for(const H of x.layerUpdates){const de=ye.data.subarray(H*Ue/ye.data.BYTES_PER_ELEMENT,(H+1)*Ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,H,ye.width,ye.height,1,ge,de)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ye.width,ye.height,Z.depth,ge,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Se,ye.width,ye.height,Z.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ye.width,ye.height,Z.depth,ge,xe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Se,ye.width,ye.height,Z.depth,0,ge,xe,ye.data)}else{O&&Ae&&t.texStorage2D(n.TEXTURE_2D,De,Se,ke[0].width,ke[0].height);for(let ve=0,me=ke.length;ve<me;ve++)ye=ke[ve],x.format!==Ln?ge!==null?O?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ye.width,ye.height,ge,xe,ye.data):t.texImage2D(n.TEXTURE_2D,ve,Se,ye.width,ye.height,0,ge,xe,ye.data)}else if(x.isDataArrayTexture)if(O){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Se,Z.width,Z.height,Z.depth),be)if(x.layerUpdates.size>0){const ve=kh(Z.width,Z.height,x.format,x.type);for(const me of x.layerUpdates){const Ue=Z.data.subarray(me*ve/Z.data.BYTES_PER_ELEMENT,(me+1)*ve/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Z.width,Z.height,1,ge,xe,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ge,xe,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,ge,xe,Z.data);else if(x.isData3DTexture)O?(Ae&&t.texStorage3D(n.TEXTURE_3D,De,Se,Z.width,Z.height,Z.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ge,xe,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,ge,xe,Z.data);else if(x.isFramebufferTexture){if(Ae)if(O)t.texStorage2D(n.TEXTURE_2D,De,Se,Z.width,Z.height);else{let ve=Z.width,me=Z.height;for(let Ue=0;Ue<De;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Se,ve,me,0,ge,xe,null),ve>>=1,me>>=1}}else if(ke.length>0){if(O&&Ae){const ve=Pe(ke[0]);t.texStorage2D(n.TEXTURE_2D,De,Se,ve.width,ve.height)}for(let ve=0,me=ke.length;ve<me;ve++)ye=ke[ve],O?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ge,xe,ye):t.texImage2D(n.TEXTURE_2D,ve,Se,ge,xe,ye);x.generateMipmaps=!1}else if(O){if(Ae){const ve=Pe(Z);t.texStorage2D(n.TEXTURE_2D,De,Se,ve.width,ve.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,xe,Z)}else t.texImage2D(n.TEXTURE_2D,0,Se,ge,xe,Z);m(x)&&p($),L.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function P(M,x,U){if(x.image.length!==6)return;const $=Ke(M,x),ce=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);const Q=i.get(ce);if(ce.version!==Q.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const L=ct.getPrimaries(ct.workingColorSpace),B=x.colorSpace===$i?null:ct.getPrimaries(x.colorSpace),ne=x.colorSpace===$i||L===B?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const re=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let me=0;me<6;me++)!re&&!Z?ge[me]=_(x.image[me],!0,s.maxCubemapSize):ge[me]=Z?x.image[me].image:x.image[me],ge[me]=pe(x,ge[me]);const xe=ge[0],Se=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),ke=b(x.internalFormat,Se,ye,x.colorSpace),O=x.isVideoTexture!==!0,Ae=Q.__version===void 0||$===!0,be=ce.dataReady;let De=w(x,xe);Be(n.TEXTURE_CUBE_MAP,x);let ve;if(re){O&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ke,xe.width,xe.height);for(let me=0;me<6;me++){ve=ge[me].mipmaps;for(let Ue=0;Ue<ve.length;Ue++){const H=ve[Ue];x.format!==Ln?Se!==null?O?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,H.width,H.height,Se,H.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ke,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,H.width,H.height,Se,ye,H.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ke,H.width,H.height,0,Se,ye,H.data)}}}else{if(ve=x.mipmaps,O&&Ae){ve.length>0&&De++;const me=Pe(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ke,me.width,me.height)}for(let me=0;me<6;me++)if(Z){O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ge[me].width,ge[me].height,Se,ye,ge[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ke,ge[me].width,ge[me].height,0,Se,ye,ge[me].data);for(let Ue=0;Ue<ve.length;Ue++){const de=ve[Ue].image[me].image;O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,de.width,de.height,Se,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ke,de.width,de.height,0,Se,ye,de.data)}}else{O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Se,ye,ge[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ke,Se,ye,ge[me]);for(let Ue=0;Ue<ve.length;Ue++){const H=ve[Ue];O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,Se,ye,H.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ke,Se,ye,H.image[me])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Q.__version=ce.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function K(M,x,U,$,ce,Q){const L=r.convert(U.format,U.colorSpace),B=r.convert(U.type),ne=b(U.internalFormat,L,B,U.colorSpace),re=i.get(x),Z=i.get(U);if(Z.__renderTarget=x,!re.__hasExternalTextures){const ge=Math.max(1,x.width>>Q),xe=Math.max(1,x.height>>Q);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Q,ne,ge,xe,x.depth,0,L,B,null):t.texImage2D(ce,Q,ne,ge,xe,0,L,B,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),te(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ce,Z.__webglTexture,0,_e(x)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ce,Z.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(M,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){const $=x.depthTexture,ce=$&&$.isDepthTexture?$.type:null,Q=A(x.stencilBuffer,ce),L=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=_e(x);te(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,Q,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,L,n.RENDERBUFFER,M)}else{const $=x.textures;for(let ce=0;ce<$.length;ce++){const Q=$[ce],L=r.convert(Q.format,Q.colorSpace),B=r.convert(Q.type),ne=b(Q.internalFormat,L,B,Q.colorSpace),re=_e(x);U&&te(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ne,x.width,x.height):te(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),he(x.depthTexture,0);const ce=$.__webglTexture,Q=_e(x);if(x.depthTexture.format===co)te(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(x.depthTexture.format===uo)te(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ce(M){const x=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const $=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ce)};$.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=$}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const $=M.texture.mipmaps;$&&$.length>0?fe(x.__webglFramebuffer[0],M):fe(x.__webglFramebuffer,M)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),oe(x.__webglDepthbuffer[$],M,!1);else{const ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Q)}}else{const $=M.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),oe(x.__webglDepthbuffer,M,!1);else{const ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(M,x,U){const $=i.get(M);x!==void 0&&K($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ce(M)}function v(M){const x=M.texture,U=i.get(M),$=i.get(x);M.addEventListener("dispose",I);const ce=M.textures,Q=M.isWebGLCubeRenderTarget===!0,L=ce.length>1;if(L||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),Q){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let ne=0;ne<x.mipmaps.length;ne++)U.__webglFramebuffer[B][ne]=n.createFramebuffer()}else U.__webglFramebuffer[B]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<x.mipmaps.length;B++)U.__webglFramebuffer[B]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(L)for(let B=0,ne=ce.length;B<ne;B++){const re=i.get(ce[B]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&te(M)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<ce.length;B++){const ne=ce[B];U.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[B]);const re=r.convert(ne.format,ne.colorSpace),Z=r.convert(ne.type),ge=b(ne.internalFormat,re,Z,ne.colorSpace,M.isXRRenderTarget===!0),xe=_e(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ge,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,U.__webglColorRenderbuffer[B])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x);for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)K(U.__webglFramebuffer[B][ne],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne);else K(U.__webglFramebuffer[B],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let B=0,ne=ce.length;B<ne;B++){const re=ce[B],Z=i.get(re);let ge=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ge=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),Be(ge,re),K(U.__webglFramebuffer,M,re,n.COLOR_ATTACHMENT0+B,ge,0),m(re)&&p(ge)}t.unbindTexture()}else{let B=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(B=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(B,$.__webglTexture),Be(B,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)K(U.__webglFramebuffer[ne],M,x,n.COLOR_ATTACHMENT0,B,ne);else K(U.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,B,0);m(x)&&p(B),t.unbindTexture()}M.depthBuffer&&Ce(M)}function F(M){const x=M.textures;for(let U=0,$=x.length;U<$;U++){const ce=x[U];if(m(ce)){const Q=y(M),L=i.get(ce).__webglTexture;t.bindTexture(Q,L),p(Q),t.unbindTexture()}}}const W=[],Y=[];function k(M){if(M.samples>0){if(te(M)===!1){const x=M.textures,U=M.width,$=M.height;let ce=n.COLOR_BUFFER_BIT;const Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=i.get(M),B=x.length>1;if(B)for(let re=0;re<x.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);const ne=M.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let re=0;re<x.length;re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),B){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const Z=i.get(x[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,ce,n.NEAREST),l===!0&&(W.length=0,Y.length=0,W.push(n.COLOR_ATTACHMENT0+re),M.depthBuffer&&M.resolveDepthBuffer===!1&&(W.push(Q),Y.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),B)for(let re=0;re<x.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const Z=i.get(x[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _e(M){return Math.min(s.maxSamples,M.samples)}function te(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function pe(M,x){const U=M.colorSpace,$=M.format,ce=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==cn&&U!==$i&&(ct.getTransfer(U)===At?($!==Ln||ce!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Pe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=he,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=q,this.rebindTextures=R,this.setupRenderTarget=v,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=K,this.useMultisampledRTT=te}function vb(n,e){function t(i,s=$i){let r;const o=ct.getTransfer(s);if(i===ui)return n.UNSIGNED_BYTE;if(i===bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===em)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zp)return n.BYTE;if(i===Jp)return n.SHORT;if(i===ao)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===Ms)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===Mo)return n.HALF_FLOAT;if(i===nm)return n.ALPHA;if(i===im)return n.RGB;if(i===Ln)return n.RGBA;if(i===co)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===Cu)return n.RED_INTEGER;if(i===sm)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===Sc||i===Ec||i===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===wc||i===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bc||i===wc)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===Hc||i===kc||i===Vc||i===zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gc||i===Wc||i===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gc)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jc||i===qc||i===Kc||i===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
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

}`;class Mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ym(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ns({vertexShader:xb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yb extends vr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Mb,p={},y=t.getContextAttributes();let b=null,A=null;const w=[],C=[],I=new at;let N=null;const T=new rn;T.viewport=new ht;const S=new rn;S.viewport=new ht;const D=[T,S],X=new DM;let J=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let P=w[z];return P===void 0&&(P=new bl,w[z]=P),P.getTargetRaySpace()},this.getControllerGrip=function(z){let P=w[z];return P===void 0&&(P=new bl,w[z]=P),P.getGripSpace()},this.getHand=function(z){let P=w[z];return P===void 0&&(P=new bl,w[z]=P),P.getHandSpace()};function he(z){const P=C.indexOf(z.inputSource);if(P===-1)return;const K=w[P];K!==void 0&&(K.update(z.inputSource,z.frame,c||o),K.dispatchEvent({type:z.type,data:z.inputSource}))}function ee(){s.removeEventListener("select",he),s.removeEventListener("selectstart",he),s.removeEventListener("selectend",he),s.removeEventListener("squeeze",he),s.removeEventListener("squeezestart",he),s.removeEventListener("squeezeend",he),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ue);for(let z=0;z<w.length;z++){const P=C[z];P!==null&&(C[z]=null,w[z].disconnect(P))}J=null,ae=null,m.reset();for(const z in p)delete p[z];e.setRenderTarget(b),d=null,h=null,f=null,s=null,A=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",he),s.addEventListener("selectstart",he),s.addEventListener("selectend",he),s.addEventListener("squeeze",he),s.addEventListener("squeezestart",he),s.addEventListener("squeezeend",he),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,oe=null,fe=null;y.depth&&(fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?uo:co,oe=y.stencil?lo:Ms);const Ce={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new ys(h.textureWidth,h.textureHeight,{format:Ln,type:ui,depthTexture:new Mm(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new ys(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(z){for(let P=0;P<z.removed.length;P++){const K=z.removed[P],oe=C.indexOf(K);oe>=0&&(C[oe]=null,w[oe].disconnect(K))}for(let P=0;P<z.added.length;P++){const K=z.added[P];let oe=C.indexOf(K);if(oe===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=C.length){C.push(K),oe=Ce;break}else if(C[Ce]===null){C[Ce]=K,oe=Ce;break}if(oe===-1)break}const fe=w[oe];fe&&fe.connect(K)}}const q=new V,Ee=new V;function we(z,P,K){q.setFromMatrixPosition(P.matrixWorld),Ee.setFromMatrixPosition(K.matrixWorld);const oe=q.distanceTo(Ee),fe=P.projectionMatrix.elements,Ce=K.projectionMatrix.elements,R=fe[14]/(fe[10]-1),v=fe[14]/(fe[10]+1),F=(fe[9]+1)/fe[5],W=(fe[9]-1)/fe[5],Y=(fe[8]-1)/fe[0],k=(Ce[8]+1)/Ce[0],_e=R*Y,te=R*k,le=oe/(-Y+k),pe=le*-Y;if(P.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(pe),z.translateZ(le),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),fe[10]===-1)z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const Pe=R+le,M=v+le,x=_e-pe,U=te+(oe-pe),$=F*v/M*Pe,ce=W*v/M*Pe;z.projectionMatrix.makePerspective(x,U,$,ce,Pe,M),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Le(z,P){P===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(P.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let P=z.near,K=z.far;m.texture!==null&&(m.depthNear>0&&(P=m.depthNear),m.depthFar>0&&(K=m.depthFar)),X.near=S.near=T.near=P,X.far=S.far=T.far=K,(J!==X.near||ae!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),J=X.near,ae=X.far),X.layers.mask=z.layers.mask|6,T.layers.mask=X.layers.mask&3,S.layers.mask=X.layers.mask&5;const oe=z.parent,fe=X.cameras;Le(X,oe);for(let Ce=0;Ce<fe.length;Ce++)Le(fe[Ce],oe);fe.length===2?we(X,T,S):X.projectionMatrix.copy(T.projectionMatrix),Be(z,X,oe)};function Be(z,P,K){K===null?z.matrix.copy(P.matrixWorld):(z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(P.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=dr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(z){return p[z]};let Ke=null;function tt(z,P){if(u=P.getViewerPose(c||o),g=P,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let oe=!1;K.length!==X.cameras.length&&(X.cameras.length=0,oe=!0);for(let v=0;v<K.length;v++){const F=K[v];let W=null;if(d!==null)W=d.getViewport(F);else{const k=f.getViewSubImage(h,F);W=k.viewport,v===0&&(e.setRenderTargetTextures(A,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(A))}let Y=D[v];Y===void 0&&(Y=new rn,Y.layers.enable(v),Y.viewport=new ht,D[v]=Y),Y.matrix.fromArray(F.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(F.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(W.x,W.y,W.width,W.height),v===0&&(X.matrix.copy(Y.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),oe===!0&&X.cameras.push(Y)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const v=f.getDepthInformation(K[0]);v&&v.isValid&&v.texture&&m.init(v,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let v=0;v<K.length;v++){const F=K[v].camera;if(F){let W=p[F];W||(W=new ym,p[F]=W);const Y=f.getCameraImage(F);W.sourceTexture=Y}}}}for(let K=0;K<w.length;K++){const oe=C[K],fe=w[K];oe!==null&&fe!==void 0&&fe.update(oe,P,c||o)}Ke&&Ke(z,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),g=null}const Re=new bm;Re.setAnimationLoop(tt),this.setAnimationLoop=function(z){Ke=z},this.dispose=function(){}}}const fs=new Yn,Sb=new et;function Eb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,A=y.envMapRotation;b&&(m.envMap.value=b,fs.copy(A),fs.x*=-1,fs.y*=-1,fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(fs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const A=b.program;i.uniformBlockBinding(y,A)}function c(y,b){let A=s[y.id];A===void 0&&(g(y),A=u(y),s[y.id]=A,y.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(y,w);const C=e.render.frame;r[y.id]!==C&&(h(y),r[y.id]=C)}function u(y){const b=f();y.__bindingPointIndex=b;const A=n.createBuffer(),w=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,A),A}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=s[y.id],A=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,I=A.length;C<I;C++){const N=Array.isArray(A[C])?A[C]:[A[C]];for(let T=0,S=N.length;T<S;T++){const D=N[T];if(d(D,C,T,w)===!0){const X=D.__offset,J=Array.isArray(D.value)?D.value:[D.value];let ae=0;for(let he=0;he<J.length;he++){const ee=J[he],ue=_(ee);typeof ee=="number"||typeof ee=="boolean"?(D.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,X+ae,D.__data)):ee.isMatrix3?(D.__data[0]=ee.elements[0],D.__data[1]=ee.elements[1],D.__data[2]=ee.elements[2],D.__data[3]=0,D.__data[4]=ee.elements[3],D.__data[5]=ee.elements[4],D.__data[6]=ee.elements[5],D.__data[7]=0,D.__data[8]=ee.elements[6],D.__data[9]=ee.elements[7],D.__data[10]=ee.elements[8],D.__data[11]=0):(ee.toArray(D.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,b,A,w){const C=y.value,I=b+"_"+A;if(w[I]===void 0)return typeof C=="number"||typeof C=="boolean"?w[I]=C:w[I]=C.clone(),!0;{const N=w[I];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return w[I]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(y){const b=y.uniforms;let A=0;const w=16;for(let I=0,N=b.length;I<N;I++){const T=Array.isArray(b[I])?b[I]:[b[I]];for(let S=0,D=T.length;S<D;S++){const X=T[S],J=Array.isArray(X.value)?X.value:[X.value];for(let ae=0,he=J.length;ae<he;ae++){const ee=J[ae],ue=_(ee),q=A%w,Ee=q%ue.boundary,we=q+Ee;A+=Ee,we!==0&&w-we<ue.storage&&(A+=w-we),X.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=ue.storage}}}const C=A%w;return C>0&&(A+=w-C),y.__size=A,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const A=o.indexOf(b.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class bb{constructor(e={}){const{canvas:t=bA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=Vt;let C=0,I=0,N=null,T=-1,S=null;const D=new ht,X=new ht;let J=null;const ae=new Qe(0);let he=0,ee=t.width,ue=t.height,q=1,Ee=null,we=null;const Le=new ht(0,0,ee,ue),Be=new ht(0,0,ee,ue);let Ke=!1;const tt=new Ou;let Re=!1,z=!1;const P=new et,K=new V,oe=new ht,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function R(){return N===null?q:1}let v=i;function F(E,G){return t.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ve,!1),v===null){const G="webgl2";if(v=F(G,E),v===null)throw F(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let W,Y,k,_e,te,le,pe,Pe,M,x,U,$,ce,Q,L,B,ne,re,Z,ge,xe,Se,ye,ke;function O(){W=new OE(v),W.init(),Se=new vb(v,W),Y=new CE(v,W,e,Se),k=new gb(v,W),Y.reversedDepthBuffer&&h&&k.buffers.depth.setReversed(!0),_e=new HE(v),te=new ib,le=new _b(v,W,k,te,Y,Se,_e),pe=new IE(A),Pe=new UE(A),M=new XM(v),ye=new wE(v,M),x=new FE(v,M,_e,ye),U=new VE(v,x,M,_e),Z=new kE(v,Y,le),B=new PE(te),$=new nb(A,pe,Pe,W,Y,ye,B),ce=new Eb(A,te),Q=new rb,L=new fb(W),re=new bE(A,pe,Pe,k,U,d,l),ne=new pb(A,U,Y),ke=new Tb(v,_e,Y,k),ge=new RE(v,W,_e),xe=new BE(v,W,_e),_e.programs=$.programs,A.capabilities=Y,A.extensions=W,A.properties=te,A.renderLists=Q,A.shadowMap=ne,A.state=k,A.info=_e}O();const Ae=new yb(A,v);this.xr=Ae,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const E=W.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=W.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(ee,ue,!1))},this.getSize=function(E){return E.set(ee,ue)},this.setSize=function(E,G,ie=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,ue=G,t.width=Math.floor(E*q),t.height=Math.floor(G*q),ie===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(ee*q,ue*q).floor()},this.setDrawingBufferSize=function(E,G,ie){ee=E,ue=G,q=ie,t.width=Math.floor(E*ie),t.height=Math.floor(G*ie),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,G,ie,se){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,G,ie,se),k.viewport(D.copy(Le).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,G,ie,se){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,G,ie,se),k.scissor(X.copy(Be).multiplyScalar(q).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){k.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){Ee=E},this.setTransparentSort=function(E){we=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,ie=!0){let se=0;if(E){let j=!1;if(N!==null){const Te=N.texture.format;j=Te===Iu||Te===Pu||Te===Cu}if(j){const Te=N.texture.type,Ne=Te===ui||Te===Ms||Te===ao||Te===lo||Te===bu||Te===wu,He=re.getClearColor(),Oe=re.getClearAlpha(),Xe=He.r,qe=He.g,ze=He.b;Ne?(g[0]=Xe,g[1]=qe,g[2]=ze,g[3]=Oe,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=Xe,_[1]=qe,_[2]=ze,_[3]=Oe,v.clearBufferiv(v.COLOR,0,_))}else se|=v.COLOR_BUFFER_BIT}G&&(se|=v.DEPTH_BUFFER_BIT),ie&&(se|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),re.dispose(),Q.dispose(),L.dispose(),te.dispose(),pe.dispose(),Pe.dispose(),U.dispose(),ye.dispose(),ke.dispose(),$.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",We),Ae.removeEventListener("sessionend",lt),nt.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=_e.autoReset,G=ne.enabled,ie=ne.autoUpdate,se=ne.needsUpdate,j=ne.type;O(),_e.autoReset=E,ne.enabled=G,ne.autoUpdate=ie,ne.needsUpdate=se,ne.type=j}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){const G=E.target;G.removeEventListener("dispose",me),Ue(G)}function Ue(E){H(E),te.remove(E)}function H(E){const G=te.get(E).programs;G!==void 0&&(G.forEach(function(ie){$.releaseProgram(ie)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,ie,se,j,Te){G===null&&(G=fe);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,He=Gm(E,G,ie,se,j);k.setMaterial(se,Ne);let Oe=ie.index,Xe=1;if(se.wireframe===!0){if(Oe=x.getWireframeAttribute(ie),Oe===void 0)return;Xe=2}const qe=ie.drawRange,ze=ie.attributes.position;let rt=qe.start*Xe,xt=(qe.start+qe.count)*Xe;Te!==null&&(rt=Math.max(rt,Te.start*Xe),xt=Math.min(xt,(Te.start+Te.count)*Xe)),Oe!==null?(rt=Math.max(rt,0),xt=Math.min(xt,Oe.count)):ze!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,ze.count));const It=xt-rt;if(It<0||It===1/0)return;ye.setup(j,se,He,ie,Oe);let wt,yt=ge;if(Oe!==null&&(wt=M.get(Oe),yt=xe,yt.setIndex(wt)),j.isMesh)se.wireframe===!0?(k.setLineWidth(se.wireframeLinewidth*R()),yt.setMode(v.LINES)):yt.setMode(v.TRIANGLES);else if(j.isLine){let Ge=se.linewidth;Ge===void 0&&(Ge=1),k.setLineWidth(Ge*R()),j.isLineSegments?yt.setMode(v.LINES):j.isLineLoop?yt.setMode(v.LINE_LOOP):yt.setMode(v.LINE_STRIP)}else j.isPoints?yt.setMode(v.POINTS):j.isSprite&&yt.setMode(v.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ge=j._multiDrawStarts,Rt=j._multiDrawCounts,ut=j._multiDrawCount,xn=Oe?M.get(Oe).bytesPerElement:1,bs=te.get(se).currentProgram.getUniforms();for(let An=0;An<ut;An++)bs.setValue(v,"_gl_DrawID",An),yt.render(Ge[An]/xn,Rt[An])}else if(j.isInstancedMesh)yt.renderInstances(rt,It,j.count);else if(ie.isInstancedBufferGeometry){const Ge=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Rt=Math.min(ie.instanceCount,Ge);yt.renderInstances(rt,It,Rt)}else yt.render(rt,It)};function de(E,G,ie){E.transparent===!0&&E.side===ri&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Un(E,G,ie),E.side=Ui,E.needsUpdate=!0,Un(E,G,ie),E.side=ri):Un(E,G,ie)}this.compile=function(E,G,ie=null){ie===null&&(ie=E),p=L.get(ie),p.init(G),b.push(p),ie.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),E!==ie&&E.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const se=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const He=Te[Ne];de(He,ie,j),se.add(He)}else de(Te,ie,j),se.add(Te)}),p=b.pop(),se},this.compileAsync=function(E,G,ie=null){const se=this.compile(E,G,ie);return new Promise(j=>{function Te(){if(se.forEach(function(Ne){te.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){j(E);return}setTimeout(Te,10)}W.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Me=null;function Fe(E){Me&&Me(E)}function We(){nt.stop()}function lt(){nt.start()}const nt=new bm;nt.setAnimationLoop(Fe),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(E){Me=E,Ae.setAnimationLoop(E),E===null?nt.stop():nt.start()},Ae.addEventListener("sessionstart",We),Ae.addEventListener("sessionend",lt),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(G),G=Ae.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,G,N),p=L.get(E,b.length),p.init(G),b.push(p),P.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),tt.setFromProjectionMatrix(P,oi,G.reversedDepth),z=this.localClippingEnabled,Re=B.init(this.clippingPlanes,z),m=Q.get(E,y.length),m.init(),y.push(m),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&ft(Te,G,-1/0,A.sortObjects)}ft(E,G,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(Ee,we),Ce=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Ce&&re.addToRenderList(m,E),this.info.render.frame++,Re===!0&&B.beginShadows();const ie=p.state.shadowsArray;ne.render(ie,E,G),Re===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,j=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Te=G.cameras;if(j.length>0)for(let Ne=0,He=Te.length;Ne<He;Ne++){const Oe=Te[Ne];un(se,j,E,Oe)}Ce&&re.render(E);for(let Ne=0,He=Te.length;Ne<He;Ne++){const Oe=Te[Ne];Ft(m,E,Oe,Oe.viewport)}}else j.length>0&&un(se,j,E,G),Ce&&re.render(E),Ft(m,E,G);N!==null&&I===0&&(le.updateMultisampleRenderTarget(N),le.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(A,E,G),ye.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],Re===!0&&B.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ft(E,G,ie,se){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)ie=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||tt.intersectsSprite(E)){se&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Ne=U.update(E),He=E.material;He.visible&&m.push(E,Ne,He,ie,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||tt.intersectsObject(E))){const Ne=U.update(E),He=E.material;if(se&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),oe.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),oe.copy(Ne.boundingSphere.center)),oe.applyMatrix4(E.matrixWorld).applyMatrix4(P)),Array.isArray(He)){const Oe=Ne.groups;for(let Xe=0,qe=Oe.length;Xe<qe;Xe++){const ze=Oe[Xe],rt=He[ze.materialIndex];rt&&rt.visible&&m.push(E,Ne,rt,ie,oe.z,ze)}}else He.visible&&m.push(E,Ne,He,ie,oe.z,null)}}const Te=E.children;for(let Ne=0,He=Te.length;Ne<He;Ne++)ft(Te[Ne],G,ie,se)}function Ft(E,G,ie,se){const j=E.opaque,Te=E.transmissive,Ne=E.transparent;p.setupLightsView(ie),Re===!0&&B.setGlobalState(A.clippingPlanes,ie),se&&k.viewport(D.copy(se)),j.length>0&&Nt(j,G,ie),Te.length>0&&Nt(Te,G,ie),Ne.length>0&&Nt(Ne,G,ie),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function un(E,G,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new ys(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Mo:ui,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Te=p.state.transmissionRenderTarget[se.id],Ne=se.viewport||D;Te.setSize(Ne.z*A.transmissionResolutionScale,Ne.w*A.transmissionResolutionScale);const He=A.getRenderTarget(),Oe=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(ae),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),Ce&&re.render(ie);const qe=A.toneMapping;A.toneMapping=ts;const ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),Re===!0&&B.setGlobalState(A.clippingPlanes,se),Nt(E,ie,se),le.updateMultisampleRenderTarget(Te),le.updateRenderTargetMipmap(Te),W.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let xt=0,It=G.length;xt<It;xt++){const wt=G[xt],yt=wt.object,Ge=wt.geometry,Rt=wt.material,ut=wt.group;if(Rt.side===ri&&yt.layers.test(se.layers)){const xn=Rt.side;Rt.side=gn,Rt.needsUpdate=!0,Bi(yt,ie,se,Ge,Rt,ut),Rt.side=xn,Rt.needsUpdate=!0,rt=!0}}rt===!0&&(le.updateMultisampleRenderTarget(Te),le.updateRenderTargetMipmap(Te))}A.setRenderTarget(He,Oe,Xe),A.setClearColor(ae,he),ze!==void 0&&(se.viewport=ze),A.toneMapping=qe}function Nt(E,G,ie){const se=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Te=E.length;j<Te;j++){const Ne=E[j],He=Ne.object,Oe=Ne.geometry,Xe=Ne.group;let qe=Ne.material;qe.allowOverride===!0&&se!==null&&(qe=se),He.layers.test(ie.layers)&&Bi(He,G,ie,Oe,qe,Xe)}}function Bi(E,G,ie,se,j,Te){E.onBeforeRender(A,G,ie,se,j,Te),E.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(A,G,ie,se,E,Te),j.transparent===!0&&j.side===ri&&j.forceSinglePass===!1?(j.side=gn,j.needsUpdate=!0,A.renderBufferDirect(ie,G,se,j,E,Te),j.side=Ui,j.needsUpdate=!0,A.renderBufferDirect(ie,G,se,j,E,Te),j.side=ri):A.renderBufferDirect(ie,G,se,j,E,Te),E.onAfterRender(A,G,ie,se,j,Te)}function Un(E,G,ie){G.isScene!==!0&&(G=fe);const se=te.get(E),j=p.state.lights,Te=p.state.shadowsArray,Ne=j.state.version,He=$.getParameters(E,j.state,Te,G,ie),Oe=$.getProgramCacheKey(He);let Xe=se.programs;se.environment=E.isMeshStandardMaterial?G.environment:null,se.fog=G.fog,se.envMap=(E.isMeshStandardMaterial?Pe:pe).get(E.envMap||se.environment),se.envMapRotation=se.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",me),Xe=new Map,se.programs=Xe);let qe=Xe.get(Oe);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===Ne)return Yu(E,He),qe}else He.uniforms=$.getUniforms(E),E.onBeforeCompile(He,A),qe=$.acquireProgram(He,Oe),Xe.set(Oe,qe),se.uniforms=He.uniforms;const ze=se.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=B.uniform),Yu(E,He),se.needsLights=Xm(E),se.lightsStateVersion=Ne,se.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function Ts(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Yu(E,G){const ie=te.get(E);ie.outputColorSpace=G.outputColorSpace,ie.batching=G.batching,ie.batchingColor=G.batchingColor,ie.instancing=G.instancing,ie.instancingColor=G.instancingColor,ie.instancingMorph=G.instancingMorph,ie.skinning=G.skinning,ie.morphTargets=G.morphTargets,ie.morphNormals=G.morphNormals,ie.morphColors=G.morphColors,ie.morphTargetsCount=G.morphTargetsCount,ie.numClippingPlanes=G.numClippingPlanes,ie.numIntersection=G.numClipIntersection,ie.vertexAlphas=G.vertexAlphas,ie.vertexTangents=G.vertexTangents,ie.toneMapping=G.toneMapping}function Gm(E,G,ie,se,j){G.isScene!==!0&&(G=fe),le.resetTextureUnits();const Te=G.fog,Ne=se.isMeshStandardMaterial?G.environment:null,He=N===null?A.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:cn,Oe=(se.isMeshStandardMaterial?Pe:pe).get(se.envMap||Ne),Xe=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,qe=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!ie.morphAttributes.position,rt=!!ie.morphAttributes.normal,xt=!!ie.morphAttributes.color;let It=ts;se.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(It=A.toneMapping);const wt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,yt=wt!==void 0?wt.length:0,Ge=te.get(se),Rt=p.state.lights;if(Re===!0&&(z===!0||E!==S)){const Jt=E===S&&se.id===T;B.setState(se,E,Jt)}let ut=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Rt.state.version||Ge.outputColorSpace!==He||j.isBatchedMesh&&Ge.batching===!1||!j.isBatchedMesh&&Ge.batching===!0||j.isBatchedMesh&&Ge.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ge.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ge.instancing===!1||!j.isInstancedMesh&&Ge.instancing===!0||j.isSkinnedMesh&&Ge.skinning===!1||!j.isSkinnedMesh&&Ge.skinning===!0||j.isInstancedMesh&&Ge.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ge.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ge.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ge.instancingMorph===!1&&j.morphTexture!==null||Ge.envMap!==Oe||se.fog===!0&&Ge.fog!==Te||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==B.numPlanes||Ge.numIntersection!==B.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==qe||Ge.morphTargets!==ze||Ge.morphNormals!==rt||Ge.morphColors!==xt||Ge.toneMapping!==It||Ge.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,Ge.__version=se.version);let xn=Ge.currentProgram;ut===!0&&(xn=Un(se,G,j));let bs=!1,An=!1,Tr=!1;const Ct=xn.getUniforms(),bn=Ge.uniforms;if(k.useProgram(xn.program)&&(bs=!0,An=!0,Tr=!0),se.id!==T&&(T=se.id,An=!0),bs||S!==E){k.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ct.setValue(v,"projectionMatrix",E.projectionMatrix),Ct.setValue(v,"viewMatrix",E.matrixWorldInverse);const fn=Ct.map.cameraPosition;fn!==void 0&&fn.setValue(v,K.setFromMatrixPosition(E.matrixWorld)),Y.logarithmicDepthBuffer&&Ct.setValue(v,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ct.setValue(v,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,An=!0,Tr=!0)}if(j.isSkinnedMesh){Ct.setOptional(v,j,"bindMatrix"),Ct.setOptional(v,j,"bindMatrixInverse");const Jt=j.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Ct.setValue(v,"boneTexture",Jt.boneTexture,le))}j.isBatchedMesh&&(Ct.setOptional(v,j,"batchingTexture"),Ct.setValue(v,"batchingTexture",j._matricesTexture,le),Ct.setOptional(v,j,"batchingIdTexture"),Ct.setValue(v,"batchingIdTexture",j._indirectTexture,le),Ct.setOptional(v,j,"batchingColorTexture"),j._colorsTexture!==null&&Ct.setValue(v,"batchingColorTexture",j._colorsTexture,le));const wn=ie.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Z.update(j,ie,xn),(An||Ge.receiveShadow!==j.receiveShadow)&&(Ge.receiveShadow=j.receiveShadow,Ct.setValue(v,"receiveShadow",j.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bn.envMap.value=Oe,bn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&G.environment!==null&&(bn.envMapIntensity.value=G.environmentIntensity),An&&(Ct.setValue(v,"toneMappingExposure",A.toneMappingExposure),Ge.needsLights&&Wm(bn,Tr),Te&&se.fog===!0&&ce.refreshFogUniforms(bn,Te),ce.refreshMaterialUniforms(bn,se,q,ue,p.state.transmissionRenderTarget[E.id]),ca.upload(v,Ts(Ge),bn,le)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ca.upload(v,Ts(Ge),bn,le),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ct.setValue(v,"center",j.center),Ct.setValue(v,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(v,"normalMatrix",j.normalMatrix),Ct.setValue(v,"modelMatrix",j.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Jt=se.uniformsGroups;for(let fn=0,Wa=Jt.length;fn<Wa;fn++){const is=Jt[fn];ke.update(is,xn),ke.bind(is,xn)}}return xn}function Wm(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Xm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,G,ie){const se=te.get(E);se.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(E.texture).__webglTexture=G,te.get(E.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ie,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const ie=te.get(E);ie.__webglFramebuffer=G,ie.__useDefaultFramebuffer=G===void 0};const jm=v.createFramebuffer();this.setRenderTarget=function(E,G=0,ie=0){N=E,C=G,I=ie;let se=!0,j=null,Te=!1,Ne=!1;if(E){const Oe=te.get(E);if(Oe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(v.FRAMEBUFFER,null),se=!1;else if(Oe.__webglFramebuffer===void 0)le.setupRenderTarget(E);else if(Oe.__hasExternalTextures)le.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&te.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(E)}}const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const qe=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?j=qe[G][ie]:j=qe[G],Te=!0):E.samples>0&&le.useMultisampledRTT(E)===!1?j=te.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?j=qe[ie]:j=qe,D.copy(E.viewport),X.copy(E.scissor),J=E.scissorTest}else D.copy(Le).multiplyScalar(q).floor(),X.copy(Be).multiplyScalar(q).floor(),J=Ke;if(ie!==0&&(j=jm),k.bindFramebuffer(v.FRAMEBUFFER,j)&&se&&k.drawBuffers(E,j),k.viewport(D),k.scissor(X),k.setScissorTest(J),Te){const Oe=te.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,ie)}else if(Ne){const Oe=G;for(let Xe=0;Xe<E.textures.length;Xe++){const qe=te.get(E.textures[Xe]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Xe,qe.__webglTexture,ie,Oe)}}else if(E!==null&&ie!==0){const Oe=te.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Oe.__webglTexture,ie)}T=-1},this.readRenderTargetPixels=function(E,G,ie,se,j,Te,Ne,He=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){k.bindFramebuffer(v.FRAMEBUFFER,Oe);try{const Xe=E.textures[He],qe=Xe.format,ze=Xe.type;if(!Y.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-se&&ie>=0&&ie<=E.height-j&&(E.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+He),v.readPixels(G,ie,se,j,Se.convert(qe),Se.convert(ze),Te))}finally{const Xe=N!==null?te.get(N).__webglFramebuffer:null;k.bindFramebuffer(v.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(E,G,ie,se,j,Te,Ne,He=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(G>=0&&G<=E.width-se&&ie>=0&&ie<=E.height-j){k.bindFramebuffer(v.FRAMEBUFFER,Oe);const Xe=E.textures[He],qe=Xe.format,ze=Xe.type;if(!Y.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,rt),v.bufferData(v.PIXEL_PACK_BUFFER,Te.byteLength,v.STREAM_READ),E.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+He),v.readPixels(G,ie,se,j,Se.convert(qe),Se.convert(ze),0);const xt=N!==null?te.get(N).__webglFramebuffer:null;k.bindFramebuffer(v.FRAMEBUFFER,xt);const It=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await wA(v,It,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,rt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Te),v.deleteBuffer(rt),v.deleteSync(It),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,ie=0){const se=Math.pow(2,-ie),j=Math.floor(E.image.width*se),Te=Math.floor(E.image.height*se),Ne=G!==null?G.x:0,He=G!==null?G.y:0;le.setTexture2D(E,0),v.copyTexSubImage2D(v.TEXTURE_2D,ie,0,0,Ne,He,j,Te),k.unbindTexture()};const qm=v.createFramebuffer(),Km=v.createFramebuffer();this.copyTextureToTexture=function(E,G,ie=null,se=null,j=0,Te=null){Te===null&&(j!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=j,j=0):Te=0);let Ne,He,Oe,Xe,qe,ze,rt,xt,It;const wt=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(ie!==null)Ne=ie.max.x-ie.min.x,He=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,Xe=ie.min.x,qe=ie.min.y,ze=ie.isBox3?ie.min.z:0;else{const wn=Math.pow(2,-j);Ne=Math.floor(wt.width*wn),He=Math.floor(wt.height*wn),E.isDataArrayTexture?Oe=wt.depth:E.isData3DTexture?Oe=Math.floor(wt.depth*wn):Oe=1,Xe=0,qe=0,ze=0}se!==null?(rt=se.x,xt=se.y,It=se.z):(rt=0,xt=0,It=0);const yt=Se.convert(G.format),Ge=Se.convert(G.type);let Rt;G.isData3DTexture?(le.setTexture3D(G,0),Rt=v.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(le.setTexture2DArray(G,0),Rt=v.TEXTURE_2D_ARRAY):(le.setTexture2D(G,0),Rt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,G.unpackAlignment);const ut=v.getParameter(v.UNPACK_ROW_LENGTH),xn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),bs=v.getParameter(v.UNPACK_SKIP_PIXELS),An=v.getParameter(v.UNPACK_SKIP_ROWS),Tr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,wt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,wt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Xe),v.pixelStorei(v.UNPACK_SKIP_ROWS,qe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ze);const Ct=E.isDataArrayTexture||E.isData3DTexture,bn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const wn=te.get(E),Jt=te.get(G),fn=te.get(wn.__renderTarget),Wa=te.get(Jt.__renderTarget);k.bindFramebuffer(v.READ_FRAMEBUFFER,fn.__webglFramebuffer),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,Wa.__webglFramebuffer);for(let is=0;is<Oe;is++)Ct&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,te.get(E).__webglTexture,j,ze+is),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,te.get(G).__webglTexture,Te,It+is)),v.blitFramebuffer(Xe,qe,Ne,He,rt,xt,Ne,He,v.DEPTH_BUFFER_BIT,v.NEAREST);k.bindFramebuffer(v.READ_FRAMEBUFFER,null),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||te.has(E)){const wn=te.get(E),Jt=te.get(G);k.bindFramebuffer(v.READ_FRAMEBUFFER,qm),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,Km);for(let fn=0;fn<Oe;fn++)Ct?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,wn.__webglTexture,j,ze+fn):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,wn.__webglTexture,j),bn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Jt.__webglTexture,Te,It+fn):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Jt.__webglTexture,Te),j!==0?v.blitFramebuffer(Xe,qe,Ne,He,rt,xt,Ne,He,v.COLOR_BUFFER_BIT,v.NEAREST):bn?v.copyTexSubImage3D(Rt,Te,rt,xt,It+fn,Xe,qe,Ne,He):v.copyTexSubImage2D(Rt,Te,rt,xt,Xe,qe,Ne,He);k.bindFramebuffer(v.READ_FRAMEBUFFER,null),k.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?v.texSubImage3D(Rt,Te,rt,xt,It,Ne,He,Oe,yt,Ge,wt.data):G.isCompressedArrayTexture?v.compressedTexSubImage3D(Rt,Te,rt,xt,It,Ne,He,Oe,yt,wt.data):v.texSubImage3D(Rt,Te,rt,xt,It,Ne,He,Oe,yt,Ge,wt):E.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Te,rt,xt,Ne,He,yt,Ge,wt.data):E.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Te,rt,xt,wt.width,wt.height,yt,wt.data):v.texSubImage2D(v.TEXTURE_2D,Te,rt,xt,Ne,He,yt,Ge,wt);v.pixelStorei(v.UNPACK_ROW_LENGTH,ut),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,xn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,bs),v.pixelStorei(v.UNPACK_SKIP_ROWS,An),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Tr),Te===0&&G.generateMipmaps&&v.generateMipmap(Rt),k.unbindTexture()},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),k.unbindTexture()},this.resetState=function(){C=0,I=0,N=null,k.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}function fd(n,e){if(e===Zx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$c||e===rm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===$c)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class wb extends yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new jb(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Jr.extractUrlBase(e);o=Jr.resolveURL(c,this.path)}else o=Jr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Tm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Im){try{o[st.KHR_BINARY_GLTF]=new qb(e)}catch(f){s&&s(f);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ow(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case st.KHR_MATERIALS_UNLIT:o[f]=new Pb;break;case st.KHR_DRACO_MESH_COMPRESSION:o[f]=new Kb(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[f]=new Yb;break;case st.KHR_MESH_QUANTIZATION:o[f]=new $b;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Rb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cb{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],cn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new la(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new PM(u),c.distance=f;break;case"spot":c=new RM(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Pb{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,i){const s=[];e.color=new Qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}}class Ib{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Lb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(a,a)}return Promise.all(r)}}class Db{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Nb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Ub{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ob{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Fb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(a[0],a[1],a[2],cn),Promise.all(r)}}class Bb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Hb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Vt)),Promise.all(r)}}class kb{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Vb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class zb{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Gb{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class Wb{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class Xb{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class jb{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new et,m=new V,p=new Xn,y=new V(1,1,1),b=new sM(g.geometry,g.material,h);for(let A=0;A<h;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&y.fromBufferAttribute(l.SCALE,A),b.setMatrixAt(A,_.compose(m,p,y));for(const A in l)if(A==="_COLOR_0"){const w=l[A];b.instanceColor=new Zc(w.array,w.itemSize,w.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);Pt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Im="glTF",Br=12,hd={JSON:1313821514,BIN:5130562};class qb{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Br),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Br,r=new DataView(e,Br);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hd.JSON){const c=new Uint8Array(e,Br+o,a);this.content=i.decode(c)}else if(l===hd.BIN){const c=Br+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Kb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=tu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=tu[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=sr[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(d)},a,c,cn,h)})})}}class Yb{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $b{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Lm extends yo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,y=1-m,b=p-h+f;for(let A=0;A!==a;A++){const w=o[_+A+a],C=o[_+A+l]*u,I=o[g+A+a],N=o[g+A]*u;r[A]=y*w+b*C+m*I+p*N}return r}}const Qb=new Xn;class Zb extends Lm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Qb.fromArray(r).normalize().toArray(r),r}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dd={9728:an,9729:on,9984:Qp,9985:ia,9986:Vr,9987:wi},pd={33071:Qi,33648:xa,10497:hr},kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jb={CUBICSPLINE:void 0,LINEAR:ho,STEP:fo},Vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ew(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ir({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),n.DefaultMaterial}function hs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ti(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function nw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iw(n){let e;const t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zl(t.attributes):e=n.indices+":"+zl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+zl(n.targets[i]);return e}function zl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function nu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rw=new et;class ow{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new bM(this.options.manager):this.textureLoader=new LM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return hs(r,a,s),ti(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Jr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=kl[s.type],a=sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Zt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=kl[s.type],c=sr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(y);b||(_=new c(a,p*d,s.count*d/u),b=new JA(_,d/u),t.cache.add(y,b)),m=new Nu(b,l,h%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new Zt(_,l,g);if(s.sparse!==void 0){const p=kl.SCALAR,y=sr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,w=new y(o[1],b,s.sparse.count*p),C=new c(o[2],A,s.sparse.count*l);a!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,N=w.length;I<N;I++){const T=w[I];if(m.setX(T,C[I*l]),l>=2&&m.setY(T,C[I*l+1]),l>=3&&m.setZ(T,C[I*l+2]),l>=4&&m.setW(T,C[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=dd[h.magFilter]||on,u.minFilter=dd[h.minFilter]||wi,u.wrapS=pd[h.wrapS]||hr,u.wrapT=pd[h.wrapT]||hr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==on,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Gt(_);m.needsUpdate=!0,h(m)}),t.load(Jr.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),ti(f,o),f.userData.mimeType=o.mimeType||sw(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Am,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new xm,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ir}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const f=s[st.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Qe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],cn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Vt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ri);const u=r.alphaMode||Vl.OPAQUE;if(u===Vl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==In&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new at(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==In&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==In){const f=r.emissiveFactor;a.emissive=new Qe().setRGB(f[0],f[1],f[2],cn)}return r.emissiveTexture!==void 0&&o!==In&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),ti(f,r),t.associations.set(f,{materials:e}),r.extensions&&hs(s,f,r),f})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return md(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=iw(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=md(new Tn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ew(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const y=c[d];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new tM(_,y):new zt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=fd(p.geometry,rm):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=fd(p.geometry,$c));else if(m.mode===Pn.LINES)p=new lM(_,y);else if(m.mode===Pn.LINE_STRIP)p=new Fu(_,y);else if(m.mode===Pn.LINE_LOOP)p=new cM(_,y);else if(m.mode===Pn.POINTS)p=new uM(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ti(p,r),m.extensions&&hs(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&hs(s,f[0],r),f[0];const h=new Zi;r.extensions&&hs(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new rn(TA.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new zu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new et;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Uu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let b=0,A=h.length;b<A;b++){const w=h[b],C=d[b],I=g[b],N=_[b],T=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=i._createAnimationTracks(w,C,I,N,T);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const y=new xM(r,void 0,p);return ti(y,s),y})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,rw)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new _m:c.length>1?u=new Zi:c.length===1?u=c[0]:u=new Pt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ti(u,r),r.extensions&&hs(i,u,r),r.matrix!==void 0){const f=new et;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Zi;i.name&&(r.name=s.createUniqueName(i.name)),ti(r,i),i.extensions&&hs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof li||h instanceof Gt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ji[r.path]===ji.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(ji[r.path]){case ji.weights:c=mr;break;case ji.rotation:c=gr;break;case ji.translation:case ji.scale:c=_r;break;default:i.itemSize===1?c=mr:c=_r;break}const u=s.interpolation!==void 0?Jb[s.interpolation]:ho,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+ji[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof gr?Zb:Lm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aw(n,e,t){const i=e.attributes,s=new Fi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const u=nu(sr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=nu(sr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new fi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function md(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=tu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ct.workingColorSpace!==cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),ti(n,e),aw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?tw(n,e.targets,t):n})}const gd="/models/saturn_v1.gltf",lw=240,cw=620,uw=1.45,fw=2.8,hw=.8,dw=46,pw=160,mw=94,gw=9,_w=42,vw=20,xw=4,Aw=1,_d=1.55,Mw=1.28,yw=4,Sw=8,Ew=.18,Tw=-1260,bw=.32,ww=1.2,Rw=.86,Cw=.85,Pw=70,Iw=7.5,Lw=16,Dw=.82,Nw=.3,Uw=1.4,Ow=.78,Fw=30,Gl=-1e3,vd=550,Bw=$n({__name:"AlgoraveVisualContent",setup(n){const e=qp(),t=St(null),i=St(null),s=St(null),r=Math.PI,o=new V(0,1,0),a=new V(0,0,1),l=new Xn().setFromAxisAngle(o,Math.PI),c=1/Fw;let u=null,f=null,h=null,d=null,g=null,_=null,m=0,p=0,y=0,b=!1,A=[],w=null,C=[],I=null,N=null,T=null,S=-1,D=null,X=null;const J=new Yn,ae=new Xn,he=new Xn;let ee=0,ue=0,q=0,Ee=0,we=-1,Le=-1,Be=-1,Ke=0,tt=0,Re=0,z=0,P=-1,K=0,oe=0,fe=0,Ce=0,R=0,v=0,F=.62,W=.24,Y=.34,k=.28;Da(()=>{e.attachConsumer(),xe(),O(),ve()}),vu(()=>{g!==null&&(window.cancelAnimationFrame(g),g=null),_&&(_.disconnect(),_=null),Ue(),e.detachConsumer()});function _e(){const H=t.value;if(!H){p=window.innerWidth,y=window.innerHeight;return}const de=Math.max(1,H.clientWidth),Me=Math.max(1,H.clientHeight);p=de,y=Me}function te(){return Math.random()*2+1}function le(H,de,Me){return Math.max(de,Math.min(Me,H))}function pe(H,de,Me){return H+(de-H)*Me}function Pe(H,de,Me){const Fe=((de-H)%1+1.5)%1-.5;return(H+Fe*Me+1)%1}function M(H){const de=-H,Me=H;return Math.random()*(Me-de)+de}function x(H,de){let Me=M(H),Fe=M(de);for(;Me>-30&&Me<30;)Me=M(H);for(;Fe>-30&&Fe<30;)Fe=M(de);return[Me,Fe]}function U(H){N=H.clone(),T=H.clone().premultiply(l)}function $(){const H=e.playheadStep.value,de=e.snareSteps.value;if(H<0||H>=de.length)return we=H,!1;const Me=H!==we;return we=H,Me&&!!de[H]}function ce(){const H=e.playheadStep.value,de=e.kickSteps.value;if(H<0||H>=de.length)return Le=H,!1;const Me=H!==Le;return Le=H,Me&&!!de[H]}function Q(){const H=e.playheadStep.value,de=e.hatSteps.value;if(H<0||H>=de.length)return Be=H,!1;const Me=H!==Be;return Be=H,Me&&!!de[H]}function L(H,de){if(P<0)return P=H,K=1,1;let Me=H-P;return Me<0&&(Me+=de),Me>0&&Me<=yw?K=Math.min(K+1,Sw):K=1,P=H,1+(K-1)*Ew}function B(H){const de=e.playheadStep.value,Me=e.bassSteps.value,Fe=e.leadSteps.value;if(de<0||de>=Me.length||de>=Fe.length)return{hue:.62+H.high*.02,intensity:.2+H.mid*.18,warmth:.28+H.low*.24,shimmer:.24+H.high*.3};const We=Me[de],lt=Fe[de],nt=!!We,ft=!!lt;if(nt&&ft&&We&&lt){const Ft=((lt.midi-We.midi)%12+12)%12,un=[.58,.74,.78,.86,.83,.54,.92,.5,.88,.67,.72,.8],Nt=le(We.velocity*.52+lt.velocity*.48,0,1);return{hue:un[Ft]??.74,intensity:le(.45+Nt*.45+H.mid*.25,0,1),warmth:le(.3+We.velocity*.36+H.low*.26,0,1),shimmer:le(.34+lt.velocity*.34+H.high*.38,0,1)}}return nt&&We?{hue:.56,intensity:le(.28+We.velocity*.36+H.low*.22,0,1),warmth:le(.48+We.velocity*.34+H.low*.2,0,1),shimmer:le(.2+H.high*.24,0,1)}:ft&&lt?{hue:.82,intensity:le(.3+lt.velocity*.38+H.high*.2,0,1),warmth:le(.2+H.low*.16,0,1),shimmer:le(.48+lt.velocity*.34+H.high*.2,0,1)}:{hue:.62,intensity:.18+H.mid*.15,warmth:.24+H.low*.22,shimmer:.2+H.high*.22}}function ne(H,de,Me){if(F=Pe(F,de.hue,.2),W=pe(W,de.intensity,.16),Y=pe(Y,de.warmth,.14),k=pe(k,de.shimmer,.18),t.value&&(t.value.style.setProperty("--vapor-hue",`${Math.round(F*360)}`),t.value.style.setProperty("--vapor-energy",W.toFixed(3)),t.value.style.setProperty("--vapor-warmth",Y.toFixed(3)),t.value.style.setProperty("--vapor-shimmer",k.toFixed(3))),C.length>=4&&(C[0].color.setHSL((F+.02)%1,.78,.62+k*.1),C[1].color.setHSL((F+.5)%1,.86,.58+W*.12),C[2].color.setHSL((F+.14)%1,.82,.56+Y*.14),C[3].color.setHSL((F+.62)%1,.2+k*.34,.82+W*.08)),s.value){const Fe=.94+Math.sin(Me*6.2+H.high*8)*.06;s.value.style.filter=`hue-rotate(${Math.round((F-.6)*300)}deg) saturate(${(1.06+W*.66).toFixed(3)}) brightness(${(Fe+k*.1).toFixed(3)})`}}function re(H,de,Me){if(!i.value)return;const Fe=Math.sin(de*.11)*(18+H.low*34),We=Math.cos(de*.08)*(10+H.mid*20),lt=1.02+H.low*.04+Me*.01+W*.02,nt=Math.sin(de*.12)*10+H.high*18+(F-.62)*280,ft=1.05+H.mid*.25+W*.6,Ft=.85+Y*.26;i.value.style.transform=`translate(${Fe}px, ${We}px) scale(${lt})`,i.value.style.filter=`hue-rotate(${nt}deg) saturate(${ft}) brightness(${Ft})`,i.value.style.opacity=String(.3+H.low*.12+H.beat*.06+k*.08)}function Z(H,de=1){if(A.length===0)return;const Me=(dw+H.high*pw+H.mid*mw)*de;for(let Fe=0;Fe<A.length;Fe+=1){const We=A[Fe],lt=.78+Math.random()*.62;if(We.position.z+=Me*lt,We.position.z>vd){const[nt,ft]=x(p,y);We.position.z=Gl,We.position.x=nt,We.position.y=ft}}}function ge(H,de=1){if(A.length===0)return;const Me=(gw+H.high*_w+H.mid*vw)*de;for(let Fe=0;Fe<A.length;Fe+=1){const We=A[Fe],lt=.74+Math.random()*.58;if(We.position.z-=Me*lt,We.position.z<Tw){const[nt,ft]=x(p,y);We.position.z=Gl+Math.random()*140,We.position.x=nt,We.position.y=ft}}}function xe(){const H=t.value;if(!H)return;_e(),f=new ZA,u=new bb({alpha:!0,antialias:!1}),u.outputColorSpace=Vt,u.setPixelRatio(Math.min(window.devicePixelRatio||1,.9)),u.setSize(p,y,!1),u.domElement.classList.add("three-canvas"),H.appendChild(u.domElement),d=new NM;const de=new la(16777215,3),Me=new la(16777215,2),Fe=new la(16777215,2);de.position.set(-10,46,600),Me.position.set(-200,46,500),Fe.position.set(200,46,500),f.add(de,Me,Fe),h=new rn(70,p/y,.1,1200),h.position.set(0,0,500),h.lookAt(0,0,470),Se(),ye(),ke(),s.value&&(s.value.style.opacity="0.14")}function Se(){if(!f)return;const H=new In({color:7707903}),de=new In({color:16741754}),Me=new In({color:15589691}),Fe=new In({color:16777215});C=[H,de,Me,Fe];const We=new Tn,lt=new Float32Array([-1,-1,1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1]);We.setAttribute("position",new Zt(lt,3)),w=We;const nt=[];for(let ft=-800;ft<800;ft+=10){let Ft=Fe;ft>0&&ft<100?Ft=de:ft>100&&ft<200?Ft=Me:ft>200&&ft<300&&(Ft=H);const un=new zt(We,Ft),[Nt,Bi]=x(p,y);un.position.set(Nt,Bi,ft);const Un=te(),Ts=Un<.5?.5:Un;un.scale.set(Ts,Ts,Ts),f.add(un),nt.push(un)}A=nt}function ye(){if(!f)return;const H=new Zi,de=new zt(new Bu(7.2,34,6),new ir({color:13490409,emissive:1717592,emissiveIntensity:.28,metalness:.08,roughness:.56}));de.rotation.x=Math.PI*.5,de.position.z=1.4,H.add(de);const Me=new ir({color:12109534,emissive:1192790,emissiveIntensity:.2,metalness:.08,roughness:.6}),Fe=new zt(new xr(19,1,10),Me);Fe.position.set(-10,0,-8),Fe.rotation.z=.1,H.add(Fe);const We=Fe.clone();We.position.x=10,We.rotation.z=-.1,H.add(We);const lt=new zt(new ka(3.6,4.4,26,12),new ir({color:9216966,emissive:1191760,emissiveIntensity:.2,metalness:.08,roughness:.6}));lt.rotation.x=Math.PI*.5,lt.position.z=-7.5,H.add(lt);const nt=new zt(new Hu(4.2,16,12),new In({color:8385791,transparent:!0,opacity:.34,blending:uc,depthWrite:!1}));nt.position.z=-20,H.add(nt),X=nt,H.position.set(2.5,-3.5,510),H.rotateZ(3.5),H.rotateOnWorldAxis(o,r),H.visible=!0,U(H.quaternion),f.add(H),D=H,I=H}function ke(){if(!f||!gd||b)return;b=!0,new wb().load(gd,de=>{const Me=de.scene;Me.position.set(2.5,-3.5,510),Me.rotateZ(3.5),Me.rotateOnWorldAxis(o,r),Me.visible=!0,U(Me.quaternion);const Fe=Me.children[1]?.material?.map;Fe&&(Fe.magFilter=on,Fe.minFilter=on,Fe.generateMipmaps=!1),D&&f&&(f.remove(D),me(D),D=null,X=null),I=Me,f?.add(Me)},void 0,()=>{b=!1})}function O(){const H=t.value;H&&(_=new ResizeObserver(()=>{Ae()}),_.observe(H))}function Ae(){!u||!h||(_e(),u.setSize(p,y,!1),h.aspect=p/y,h.updateProjectionMatrix())}function be(H,de,Me,Fe){if(Me||A.length===0)return;const We=(1.25+H.low*8+H.beat*4+H.mid*1.6)*de;for(let lt=0;lt<A.length;lt+=1){const nt=A[lt];if(Fe>.001&&(nt.position.x+=(Math.random()-.5)*1.25*Fe,nt.position.y+=(Math.random()-.5)*.9*Fe),nt.position.z+=We+lt*.05*de,nt.position.z>vd){const[ft,Ft]=x(p,y);nt.position.z=Gl,nt.position.x=ft,nt.position.y=Ft}}}function De(H,de,Me,Fe,We,lt){if(!I)return;const nt=q>0?Math.min(.05,Math.max(.001,de-q)):c;q=de,Me&&(ue=Math.min(ue+2.4,4.8)),ue*=.9;const ft=.45+H.high*3.4+H.mid*1.2+H.low*.8+ue;ee=(ee+ft*nt)%(Math.PI*2);const Ft=S<0?N:T;Ft&&(J.set(Math.sin(de*.95+ee*.3)*(.03+H.mid*.05),Math.sin(de*.42)*(.015+H.low*.03),Math.sin(de*.62)*(.06+H.high*.08)),ae.setFromEuler(J),he.setFromAxisAngle(a,ee),I.quaternion.copy(Ft).multiply(he).multiply(ae));const un=(.045+H.low*.34+H.beat*.14)*(1+(Fe-1)*.2+lt*.34);if(We||(I.position.z+=un*S,I.position.x=2.5+Math.sin(de*.72)*(1.5+H.mid*3.1),I.position.y=-3.5+Math.cos(de*.93)*(1+H.high*2.4),S<0&&I.position.z<=lw?(S=1,ue=Math.min(ue+1.1,4.8)):S>0&&I.position.z>=cw&&(S=-1,ue=Math.min(ue+1.1,4.8))),X){const Nt=1+H.low*1.2+H.beat*.28;X.scale.set(Nt,Nt,Nt),X.material.opacity=.14+H.low*.5+H.beat*.2,X.material.color.setHSL((.52+v*.0018)%1,.84,.7)}}function ve(){if(!u||!f||!h||!d){g=window.requestAnimationFrame(ve);return}const H=d.getElapsedTime();if(H-m<c){g=window.requestAnimationFrame(ve);return}m=H;const de=e.sampleAudioFrame(),Me=B(de);ne(de,Me,H);const Fe=de.beat>1.02&&Ee<=1.02;if(Ee=de.beat,Fe&&(R=1),ce()&&(oe=Math.min(oe+bw,ww),fe=Math.min(fe+Iw,Lw),R=Math.min(R+Cw,2.2)),Q()&&(Ce=Math.min(Ce+Nw,Uw)),$()){tt+=1;const Nt=e.playheadStep.value,Bi=L(Nt<0?0:Nt,Math.max(1,e.snareSteps.value.length)),Un=tt%xw===0;ge(de,(Un?Mw:1)*Bi),z=Un?_d*Bi:Bi,Un&&(Re=Aw)}let ft=!1;if(Re>0)Re-=1,ft=!0;else if(z>0){const Nt=z;z=0,Ke=Math.min(Ke+uw*Nt,fw*_d),Z(de,Nt)}const Ft=ft?0:1+Ke;R*=.88,v=(v+.14+de.high*1.2)%360,be(de,Ft,ft,Ce),De(de,H,Fe,Ft,ft,oe),h.position.x=Math.sin(H*.22)*(.6+de.mid*1.8)+R*.25,h.position.y=Math.cos(H*.18)*(.4+de.high*1.2)-de.low*.3,h.position.z=500-de.low*11-R*4;const un=Math.max(42,Math.min(80,Pw-fe));if(Math.abs(h.fov-un)>.01&&(h.fov=un,h.updateProjectionMatrix()),h.lookAt(0,0,470),re(de,H,Ce),s.value){s.value.style.opacity=String(.08+de.high*.2+de.beat*.08+Ce*.05);const Nt=Math.sin(H*120)*Ce*.9;s.value.style.transform=`translate(${Nt}px, ${H*36%24}px)`}Ke*=hw,Ke<.02&&(Ke=0),oe*=Rw,oe<.02&&(oe=0),fe*=Dw,fe<.02&&(fe=0),Ce*=Ow,Ce<.01&&(Ce=0),u.render(f,h),g=window.requestAnimationFrame(ve)}function me(H){H.traverse(de=>{const Me=de;Me.geometry&&Me.geometry.dispose();const Fe=Me.material;if(!Fe)return;if(Array.isArray(Fe)){for(const lt of Fe){const nt=lt;nt.map&&nt.map.dispose(),lt.dispose()}return}const We=Fe;We.map&&We.map.dispose(),Fe.dispose()})}function Ue(){if(f){for(const H of A)f.remove(H);I&&f.remove(I)}I&&me(I),w&&w.dispose();for(const H of C)H.dispose();if(u){u.dispose();const H=u.domElement;H.parentNode&&H.parentNode.removeChild(H)}A=[],w=null,C=[],I=null,N=null,T=null,S=-1,D=null,X=null,u=null,f=null,h=null,d=null,Ee=0,we=-1,Le=-1,Be=-1,Ke=0,tt=0,Re=0,z=0,P=-1,K=0,oe=0,fe=0,Ce=0,R=0,v=0,F=.62,W=.24,Y=.34,k=.28,m=0,ee=0,ue=0,q=0}return(H,de)=>(je(),ot("div",{ref_key:"_containerRef",ref:t,class:"visual-stage"},[Ve("div",{ref_key:"_nebulaRef",ref:i,class:"nebula-layer"},null,512),Ve("div",{ref_key:"_overlayRef",ref:s,class:"scan-overlay"},null,512),de[0]||(de[0]=Ve("div",{class:"credit"},[Cp(" inspired by "),Ve("a",{href:"https://saturn.fm/",target:"_blank",rel:"noopener noreferrer"}," https://saturn.fm/ ")],-1))],512))}}),Hw=_n(Bw,[["__scopeId","data-v-d0633b97"]]),kw=$n({setup(){const n=St(null);let e=0,t=1;function i(){if(!n.value)return;const s=n.value.textContent||"",r=s.split("").map((o,a)=>a===e?t===1?o.toUpperCase():o.toLowerCase():o).join("");n.value.textContent=r,e===s.length-1&&t===1?t=-1:e===0&&t===-1?t=1:e+=t,setTimeout(i,50)}return Da(()=>{i()}),{loadingText:n,animateLoadingText:i}}}),Vw={class:"loadingWindow"},zw={class:"container"},Gw={id:"loadingText",ref:"loadingText"};function Ww(n,e,t,i,s,r){return je(),ot("div",Vw,[Ve("div",zw,[Ve("h1",Gw,"loading...",512)])])}const Dm=_n(kw,[["render",Ww],["__scopeId","data-v-01fb82ad"]]),xd="https://platform.twitter.com/widgets.js",Xw='iframe[id^="twitter-widget-"]',jw=1e4,qw=$n({data(){return{waitTimerId:null,waitDeadlineAt:0,iframeElement:null}},methods:{updateIsView:function(n){this.$emit("loading-contoller",n)},clearIframeWaitTimer:function(){this.waitTimerId!==null&&(window.clearInterval(this.waitTimerId),this.waitTimerId=null)},handleIframeLoad:function(){this.clearIframeWaitTimer(),this.updateIsView(!1)},attachIframeListener:function(n){this.iframeElement&&this.iframeElement.removeEventListener("load",this.handleIframeLoad),this.iframeElement=n,n.addEventListener("load",this.handleIframeLoad,{once:!0})},waitForTwitterIframe:function(){this.waitDeadlineAt=Date.now()+jw,this.clearIframeWaitTimer(),this.waitTimerId=window.setInterval(()=>{const e=this.$refs.timelineRoot?.querySelector(Xw);if(e){this.clearIframeWaitTimer(),this.attachIframeListener(e);return}Date.now()>=this.waitDeadlineAt&&(this.clearIframeWaitTimer(),this.updateIsView(!1))},100)},loadTwitterScript:()=>{const n=window,e=document.querySelector(`script[src="${xd}"]`);if(e){n.twttr?.widgets?.load?n.twttr.widgets.load():e.addEventListener("load",()=>{n.twttr?.widgets?.load?.()});return}const t=document.createElement("script");t.setAttribute("src",xd),t.setAttribute("async","true"),t.addEventListener("load",()=>{n.twttr?.widgets?.load?.()}),document.head.appendChild(t)}},components:{LoadingAnimateVue:Dm},props:{isView:Boolean},mounted(){this.waitForTwitterIframe(),this.loadTwitterScript()},beforeUnmount(){this.clearIframeWaitTimer(),this.iframeElement&&(this.iframeElement.removeEventListener("load",this.handleIframeLoad),this.iframeElement=null)}}),Kw={key:0,class:"loadingTwitter"},Yw={ref:"timelineRoot"};function $w(n,e,t,i,s,r){const o=mn("LoadingAnimateVue");return je(),ot(Lt,null,[n.isView?(je(),ot("div",Kw,[Mt(o)])):pn("",!0),Ve("div",Yw,[...e[0]||(e[0]=[Ve("a",{class:"twitter-timeline",href:"https://twitter.com/7aru7aru?ref_src=twsrc%5Etfw"},null,-1)])],512)],64)}const Qw=_n(qw,[["render",$w],["__scopeId","data-v-0f00559e"]]),Zw={},Jw=""+new URL("Icon-C58L2uZH.png",import.meta.url).href,eR={id:"About"};function tR(n,e,t,i,s,r){return je(),ot("div",eR,[...e[0]||(e[0]=[xo('<div id="AboutContent" data-v-a05aa972><header data-v-a05aa972><h1 data-v-a05aa972>About</h1></header><div id="content" data-v-a05aa972><div id="profile" data-v-a05aa972><img id="icon" src="'+Jw+'" alt="" data-v-a05aa972><div id="profileContent" data-v-a05aa972><h3 class="description" data-v-a05aa972>Takuto HONDA</h3><p class="description" data-v-a05aa972>LoginName: taru</p><p class="description" data-v-a05aa972>Age: 23</p></div><div id="institution" data-v-a05aa972><h3 class="header3" data-v-a05aa972>所属</h3><h4 data-v-a05aa972>慶應義塾大学 環境情報学部 B2</h4><p data-v-a05aa972><a href="https://bcali.org" target="_blank" rel="noopener noreferrer" data-v-a05aa972> Bcali (BlockChain as Advanced Layer of the Internet Research Group) </a></p><p data-v-a05aa972><a href="https://www.wide.ad.jp" target="_blank" rel="noopener noreferrer" data-v-a05aa972> WIDEプロジェクト </a></p></div><div id="interesting" data-v-a05aa972><h3 class="header3" data-v-a05aa972>興味</h3><ul data-v-a05aa972><li data-v-a05aa972>Blockchain</li><li data-v-a05aa972>セキュリティ</li></ul></div></div></div></div>',1)])])}const nR=_n(Zw,[["render",tR],["__scopeId","data-v-a05aa972"]]),iR={},sR={class:"logs"};function rR(n,e,t,i,s,r){return je(),ot("div",sR,[...e[0]||(e[0]=[xo('<div class="log"><p><a href="https://webiotmakers.github.io/2018/maebashi/" target="_blank" rel="noopener noreferrer"> Web X IoT メイカーズチャレンジ 2018 in 前橋 </a></p></div><div class="log"><p><a href="https://webiotmakers.github.io/2019/gunma/" target="_blank" rel="noopener noreferrer"> Web X IoT メイカーズチャレンジ 2019 in 群馬 </a></p></div><div class="log"><p><a href="https://sechack365.nict.go.jp/achievement/2020/index.html" target="_blank" rel="noopener noreferrer"> SecHack365 表現駆動コース 2020 </a></p></div><div class="log"><p><a href="https://www.ipa.go.jp/jinzai/mitou/it/2024/gaiyou-in-1.html" target="_blank" rel="noopener noreferrer"> 未踏IT人材発掘・育成事業 2024 採択 </a></p></div>',4)])])}const oR=_n(iR,[["render",rR]]),aR={},lR={class:"skills"};function cR(n,e,t,i,s,r){return je(),ot("div",lR,[...e[0]||(e[0]=[xo('<h1 data-v-1e54c47d>Skills</h1><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Python</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:90%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>JavaScript</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:90%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>HTML / CSS</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:80%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>TypeScript</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:65%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Rust</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:45%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>English</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:20%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Japanese</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:20%;" data-v-1e54c47d></div></div></div>',8)])])}const uR=_n(aR,[["render",cR],["__scopeId","data-v-1e54c47d"]]),fR=$n({components:{LoadingAnimateVue:Dm},props:{targetFile:{type:String,required:!0},allowedOrigins:{type:Array,default:()=>[]}},data(){return{isArtLoading:!0,messageListener:null}},async mounted(){this.isArtLoading=await this.falseOperation()},beforeUnmount(){this.removeMessageListener()},methods:{removeMessageListener:function(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=null)},isAllowedMessageOrigin:function(n){if(!n)return!1;const e=new Set([window.location.origin]);for(const t of this.allowedOrigins)e.add(t);return e.has(n)},isReadyMessage:n=>n==="statueLoaded"||n==="distortionLoaded",falseOperation:function(){return this.removeMessageListener(),new Promise(n=>{const e=t=>{this.isAllowedMessageOrigin(t.origin)&&this.isReadyMessage(t.data)&&(this.removeMessageListener(),n(!1))};this.messageListener=e,window.addEventListener("message",e)})}}}),hR={id:"loadingArtProcess"},dR={key:0,id:"loadingAnime"};function pR(n,e,t,i,s,r){const o=mn("LoadingAnimateVue");return je(),ot("div",hR,[n.isArtLoading?(je(),ot("div",dR,[Mt(o)])):pn("",!0),Ve("div",{class:si({hidden:n.isArtLoading}),id:"drawArt"},[lp(n.$slots,"default",{id:"iframeArt"},void 0)],2)])}const mR=_n(fR,[["render",pR],["__scopeId","data-v-318c2589"]]),gR=$n({data(){return{eventX:0,eventY:0,parentElement:null,isWide:!1,windowWidth:"50%",windowHeight:"60%",isResizing:!1,resizeStartX:0,resizeStartY:0,resizeStartWidth:0,resizeStartHeight:0}},props:{windowType:{type:String,required:!0},handleModalWindowHidden:{type:Function,required:!0},defaultWidth:{type:String,default:"50%"},defaultHeight:{type:String,default:"60%"}},computed:{windowSizeStyle(){return this.isSmartPhoneChecker()?{}:this.isWide?{width:"100%",height:"100%"}:{width:this.windowWidth,height:this.windowHeight}}},mounted(){this.windowWidth=this.defaultWidth,this.windowHeight=this.defaultHeight},beforeUnmount(){document.body.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup),document.removeEventListener("mousemove",this.resizeMousemove),document.removeEventListener("mouseup",this.stopResize)},methods:{windowFront:n=>{const e=document.getElementsByClassName("modal-window");for(let i=0;i<e.length;i++){const s=e[i];s.style.zIndex="0"}const t=n.target?.closest(".modal-window");t&&(t.style.zIndex="1")},wideWindow:function(n){this.stopResize();const e=n.target?.closest(".modal-window");if(!e)return;const t=e.children[0],i=e.getElementsByClassName("wideButton")[0],s=e.getElementsByClassName("closeButton")[0];this.isWide?(this.isWide=!1,e.style.top="50%",e.style.left="50%",t&&(t.style.pointerEvents="auto")):(this.isWide=!0,e.style.top="50%",e.style.left="50%",t&&(t.style.pointerEvents="none"),i&&(i.style.pointerEvents="auto"),s&&(s.style.pointerEvents="auto"))},startResize:function(n){if(this.isWide)return;const e=n.target?.closest(".modal-window");if(!e)return;const t=e.getBoundingClientRect();this.isResizing=!0,this.resizeStartX=n.clientX,this.resizeStartY=n.clientY,this.resizeStartWidth=t.width,this.resizeStartHeight=t.height,document.addEventListener("mousemove",this.resizeMousemove),document.addEventListener("mouseup",this.stopResize)},resizeMousemove:function(n){if(!this.isResizing||this.isWide)return;const e=Math.max(420,this.resizeStartWidth+(n.clientX-this.resizeStartX)),t=Math.max(260,this.resizeStartHeight+(n.clientY-this.resizeStartY));this.windowWidth=`${e}px`,this.windowHeight=`${t}px`},stopResize:function(){this.isResizing&&(this.isResizing=!1,document.removeEventListener("mousemove",this.resizeMousemove),document.removeEventListener("mouseup",this.stopResize))},closeWindow:function(){this.handleModalWindowHidden(this.windowType)},mouseup:function(){document.body.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup)},mousedown:function(n){const e=document.getElementsByClassName("modal-window");for(let i=0;i<e.length;i++){const s=e[i];console.log(s),s.style.zIndex="0"}const t=n.target?.closest(".modal-window");t&&(this.parentElement=t,this.eventX=n.clientX-this.parentElement.offsetLeft,this.eventY=n.clientY-this.parentElement.offsetTop,this.parentElement.style.zIndex="1",document.body.addEventListener("mousemove",this.mousemove),document.addEventListener("mouseup",this.mouseup))},mousemove:function(n){if(!this.parentElement)return;const e=n.clientX-this.eventX,t=n.clientY-this.eventY;this.parentElement.style.left=`${e}px`,this.parentElement.style.top=`${t}px`},isSmartPhoneChecker:()=>!!navigator.userAgent.match(/iPhone|Android.+Mobile/)}}),_R={class:"header"},vR={class:"window-menu"},xR={class:"modal-content"};function AR(n,e,t,i,s,r){return je(),ot("div",{class:si(["modal-window",[n.isSmartPhoneChecker()?"smartPhoneWindow":""]]),style:Ca(n.windowSizeStyle),onMousedown:e[5]||(e[5]=(...o)=>n.windowFront&&n.windowFront(...o))},[Ve("div",{class:"modal-header",onMousedown:e[2]||(e[2]=(...o)=>n.mousedown&&n.mousedown(...o)),onMouseup:e[3]||(e[3]=(...o)=>n.mouseup&&n.mouseup(...o))},[Ve("p",_R,Sn(n.windowType),1),Ve("div",vR,[n.isSmartPhoneChecker()?pn("",!0):(je(),ot("button",{key:0,class:"wideButton",onClick:e[0]||(e[0]=(...o)=>n.wideWindow&&n.wideWindow(...o))},[...e[6]||(e[6]=[Ve("p",null,"□",-1)])])),Ve("button",{class:"closeButton",onClick:e[1]||(e[1]=(...o)=>n.closeWindow&&n.closeWindow(...o))},[...e[7]||(e[7]=[Ve("p",null,"☓",-1)])])])],32),Ve("div",xR,[lp(n.$slots,"default",{},void 0)]),!n.isSmartPhoneChecker()&&!n.isWide?(je(),ot("div",{key:0,class:"resize-handle",onMousedown:e[4]||(e[4]=fv((...o)=>n.startResize&&n.startResize(...o),["stop","prevent"]))},null,32)):pn("",!0)],38)}const MR=_n(gR,[["render",AR],["__scopeId","data-v-d5537645"]]),Ad=["About","Skill","Logs","Twitter","Distortion","Questions","Synthwave","Algorave","AlgoraveVisual"],yR=$n({components:{ModalWindowVue:MR,AboutContent:nR,SkillContent:uR,LogsContent:oR,TwitterEmbed:Qw,AlgoraveContent:xx,AlgoraveVisualContent:Hw,LoadingArtProcess:mR},data(){return{currentOpenIndex:0,About:!1,Skill:!1,Logs:!1,Twitter:!1,Distortion:!1,Questions:!1,Synthwave:!1,Algorave:!1,AlgoraveVisual:!1,isTwitterLoading:!0,modalTriggerEvent:"dblclick",modalIconElements:[],windowLayouts:{}}},mounted(){this.modalTriggerEvent=this.isSmartPhone()?"click":"dblclick";const n=this.$el;if(!n)return;const e=n.getElementsByClassName("isModal");this.modalIconElements=Array.from(e);for(let t=0;t<this.modalIconElements.length;t++)this.modalIconElements[t].addEventListener(this.modalTriggerEvent,this.ModalWindowDisplay)},beforeUnmount(){for(let n=0;n<this.modalIconElements.length;n++)this.modalIconElements[n].removeEventListener(this.modalTriggerEvent,this.ModalWindowDisplay);this.modalIconElements=[]},methods:{openModalWindow:function(n){const e=this[n];this[n]=!0,this.waitForOpenWindow(n,t=>{t.style.zIndex="1",!e&&(this.placeWindowWithoutOverlap(n,t),this.currentOpenIndex+=1)})},ModalWindowDisplay:function(n){console.log("execute");const e=document.getElementsByClassName("modal-window");for(let r=0;r<e.length;r++){const o=e[r];o.style.zIndex="0"}const t=n.target,s=t?.closest?.(".isModal")?.dataset?.type??t?.dataset?.type;if(s&&Ad.includes(s)){if(s==="Algorave"){this.openModalWindow("Algorave"),this.openModalWindow("AlgoraveVisual");return}this.openModalWindow(s)}},ModalWindowHidden:function(n){const e=this[n];this[n]=!1,delete this.windowLayouts[n],e&&(this.currentOpenIndex=Math.max(0,this.currentOpenIndex-1))},getScreenSize:()=>{const n=document.getElementById("screen");if(!n)return{width:window.innerWidth,height:window.innerHeight};const e=getComputedStyle(n),t=parseFloat(e.width),i=parseFloat(e.height);return{width:Number.isFinite(t)?t:n.clientWidth,height:Number.isFinite(i)?i:n.clientHeight}},getDefaultWindowSize:(n,e,t)=>n==="Algorave"?{width:e*.78125,height:t*.5606}:n==="AlgoraveVisual"?{width:420,height:420}:{width:e*.5,height:t*.6},clampValue:(n,e,t)=>Math.max(e,Math.min(t,n)),measureWindowLayout:function(n,e,t,i){const s=this.getDefaultWindowSize(n,t,i),r=e.getBoundingClientRect(),o=this.windowLayouts[n],a=r.width>0?r.width:s.width,l=r.height>0?r.height:s.height,c=Number.parseFloat(e.style.left),u=Number.parseFloat(e.style.top),f=Number.isFinite(c)?c:o?.left??t/2,h=Number.isFinite(u)?u:o?.top??i/2;return{left:f,top:h,width:a,height:l}},collectOccupiedLayouts:function(n,e,t){const i=[];for(const s of Ad){if(s===n||!this[s])continue;const r=document.getElementById(s);if(r){const a=this.measureWindowLayout(s,r,e,t);this.windowLayouts[s]=a,i.push(a);continue}const o=this.windowLayouts[s];o&&i.push(o)}return i},computeOverlapArea:(n,e,t)=>{const i=n.left-n.width/2-t,s=n.left+n.width/2+t,r=n.top-n.height/2-t,o=n.top+n.height/2+t,a=e.left-e.width/2-t,l=e.left+e.width/2+t,c=e.top-e.height/2-t,u=e.top+e.height/2+t,f=Math.max(0,Math.min(s,l)-Math.max(i,a)),h=Math.max(0,Math.min(o,u)-Math.max(r,c));return f*h},placeWindowWithoutOverlap:function(n,e){const t=this.getScreenSize(),i=this.measureWindowLayout(n,e,t.width,t.height),s=24,r=i.width/2+s,o=t.width-i.width/2-s,a=i.height/2+s,l=t.height-i.height/2-s,c=this.clampValue(t.width/2,r,o),u=this.clampValue(t.height/2,a,l),f=this.collectOccupiedLayouts(n,t.width,t.height),h=[],d=new Set,g=(A,w)=>{const C=this.clampValue(A,r,o),I=this.clampValue(w,a,l),N=`${Math.round(C)}:${Math.round(I)}`;d.has(N)||(d.add(N),h.push({left:C,top:I}))},_=Math.max(60,Math.round(i.width*.28)),m=Math.max(60,Math.round(i.height*.28));g(c,u);for(let A=1;A<=12;A+=1){for(let w=-A;w<=A;w+=1)g(c+w*_,u-A*m),g(c+w*_,u+A*m);for(let w=-A+1;w<=A-1;w+=1)g(c-A*_,u+w*m),g(c+A*_,u+w*m)}g(r,a),g(r,l),g(o,a),g(o,l);let p={left:c,top:u},y=Number.POSITIVE_INFINITY;const b=12;for(const A of h){const w={left:A.left,top:A.top,width:i.width,height:i.height};let C=0;for(const T of f)C+=this.computeOverlapArea(w,T,b);const I=(A.left-c)**2+(A.top-u)**2,N=C*100+I;N<y&&(p=A,y=N)}e.style.left=`${p.left}px`,e.style.top=`${p.top}px`,this.windowLayouts[n]={left:p.left,top:p.top,width:i.width,height:i.height}},isSmartPhone:()=>!!navigator.userAgent.match(/iPhone|Android.+Mobile/),TwitterLoadingController:function(n){this.isTwitterLoading=n},waitForOpenWindow:(n,e)=>{const t=document.getElementById("drawWindow");if(!t)throw new Error("Container element not found");const i=document.getElementById(n);if(i){e(i);return}const s=new MutationObserver(r=>{for(const o of r)if(o.type==="childList"){const a=document.getElementById(n);if(a){s.disconnect(),e(a);break}}});s.observe(t,{childList:!0})}}}),SR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgIDAwMD///8AAAAAgADCtgH7AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBBAHNiJr8idiAAAAmUlEQVQoz3XR7RHDIAgGYLzrAEFZgLQLWDtAGlmh+6/SqPUDvb7/fA6JEAAAgy2QY/caf6Szaec7ZnChxmcwz1bBP6gdXQWSkg6xtBgqFkiJCmiGsICfIbxmCHH+iiwQ3d9Z2vi8jE+4qY3i2xLATXqQSRWgRRo2mpd6wT6EO3C+UeCT4JF6ngWw1qsr/cdouN6FKod+qAjAF2XEQxQt2EgDAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU0OjM0LTA0OjAw2FGLUAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NDozNC0wNDowMKkMM+wAAAAASUVORK5CYII=",ER="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAACAgID//wDAwMAAAAAA//8A/wD///8AgACE6PTJAAAAAXRSTlMAQObYZgAAAAFiS0dEBxZhiOsAAAAHdElNRQfiBBMBIhp7Zpv1AAABdUlEQVQ4y3WUTW6DMBBGQcoBOjIk6xKpe3eS0GWQuEBLfYCK4n3EIgfopseu58fBxcm3Aj89z3iMKIokEPJUZCmhafZ46LP12hFAuyLl1glYE/ARoD2ngvdTBFglYEvgQ0GilCfv/Q3MiwKYgLZdlHoIyqRgni8RlM4hV9+z0JpqAaQICII9KDCOFQYkGNC9DLIyESDB2htAUqZnMCwYI6CkXoLyVfWdYcFWC0CH1bnYdCyYFBwHeutY0LYEyIg2JjMi4Gc1rCQHosMjg6fdYWbsWm4X00sEFuYLHVBAHAkLLVqohwXQ98fCjK/N6G6d0yGsCIgBDLE2bapCMPzRaW05tQpIYJCddlcKsBCMlzFcDB4ISDERkMFA81eAhgQywl7OdguwRg0Cn7AABDEaP7r3TgBo2CDQg4Cq59CU2AjrAqTh6/UCZHz3gJDWoDmwGPAahOFKKQUnP+L/KHj7/bkP8jwGdON3QbzYdfgT2fR50j9Dlj/uX7Pd5lE/IwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNDoyNi0wNDowMEXe6EMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzQ6MjYtMDQ6MDA0g1D/AAAAAElFTkSuQmCC",TR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXBwzSK/XgAAAAjElEQVRIx+2VQQrAIAwE1+K/oz9rX5ZeiopaTazFHronETMOIRCDK44hiDP5jY1H6pZ7gJEhNsm/iQHAjwBUIJSAEmF15aEBoRcqAwKDwdiTu8LAdxB5bP9JOwoDkgFeNKjD5xvc2wh7oLVRGNSR8w2+PImr54BGAP8cyLLeQL1YGgbHECDuWtF6LytPTdMhXzC2L6sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDc6MTItMDQ6MDDinXh7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA3OjEyLTA0OjAwk8DAxwAAAABJRU5ErkJggg==",bR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAAAEBASGhoZ3d3eAgAD////AwMDMmQDq6ur//wDMzDPj4+PMzMzMzAD/zACZmQDM/wDMzGaysrLd3d0MDAzX19eZmTOgoKSWlpaZmZkW0DvXAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhgXECILfny5AAACJklEQVRIx5WW61aDMBCE2c0FkIRi2hp5/xd1L6TSNkFcz6k/Ol9mZxcjXfdUwNWdL0Cu8wQgf54i9GQ09Nl1FsHaYwgdF/Avb61DcL09yoJu4AL03luCEMZx/GgjpJ+mKQAY1pOWgTjOl0ZfrB9ITxlQ9DxaJpbPKqHnD2AQjOqJFGKONQIdHT8ME/CUGABvwCcgB/qpEGowTeSQigFlB9HXPAqQEN2WgIdFDhDnJcb+HRD9lUIrMJIXwjLf4i2SRXy1EODKVQCe0jgD6Uke+wog8uvdFGCcF9VzR7EB3O/FYV5GPX+RjioOrOZ6tDQv2o90FCtjUn1QgMdZ+om1DBsRAmUY1IKJuDQdhAhEoAAUWFcWmw5MhMDAJMRIh/8yl8YDKAA9s0SIvtTXzbcI7zdilva3nkj+N+GWx4gOCQL4OQnWulIHBOvJQYhsS7UJ0XvjEi8+YMg58+3UJghIntTpm9dowpr1NgNoEwrI2nmT2/XX9gCXEmfQpyr4B9AfEALQCg3tce9QJwRI2859ceh0xhUCpaWEIAukPOVLupoB3gnWZ3QZ+ZLZOzySPBOi17EKkNILUHLsgLw5cDv7lvTrkhx2LWUBSJveHDS6ELshMcDSGtBtyfdzArcHMlb+9vv+DchCmAZg7dNcNQM4CV8BpK09n1cq2oNrAa+GqwCAJ4EOVN8psJ747w6rvANob99nXgc0E26t/a3/5RDNf15pilW9fgDHsyjmWYUIXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNjozNC0wNDowMO0k/sIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTY6MzQtMDQ6MDCceUZ+AAAAAElFTkSuQmCC",Wl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEUAAAAAgAAAAACAgICAgAD////AwMAA/wD//wCAAAD/AAAA//8AAP+AAID/AP8AAIAtlzWCAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhoALTbILJ0EAAABOUlEQVQoz1WRsU7DMBBAj8QSa1NUYLScKBIgBhrRGQW7gjVSguc2ym6W7FETwYrEwhcA38DUiaFTP6QDX8D5bIF6Uny6p3d3ig2AMcKPAx2UYAwQCsyMhw5EHMIC85zPHDgZg6o5sCZuPDBcSg7zRVx5cDRVKwQiXfgZxxawQsyEA1cNguS1CwtBNbAsVauz9+S68/Vthcbbx8W3awC1xJbnz5ev9Y0TqsvdVqGw+SkcKBDco7ARDiwtsMI6LWhIqhCQUOYEgrrdnVuhlA6w1ExKG7LOp26okRRDndN9sAfTlH3fPzX/QDRa6wENsD0H7aQX6FjDg1Ot0dkzenT2Dev8GcYa6MRZltGWSFMMnRB0Y6wkwW0hcOeNwYHDNlHekJzq9jEhZ5A0wUStCRL6Of8GEI0gEMJvgF/zF3Xhq8Ch1gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo1NC0wNDowMGovbQQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NTQtMDQ6MDAbctW4AAAAAElFTkSuQmCC",wR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAIAAAAD///+AgIDAwMA+Te3nAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXECDlcB2VAAAAqElEQVQoz5WQURKDIAxEseMBjF5AUi8Aqf8d5QT1/ndpEkCgrR/dnQnDzoNFjREBgGn0FQymuw5QNKLFHNzJEU3kfCEs2hGhIWBy4HOXEKoc6B0sn7uQjycilXfwUd4N/5YXIl1dfUAszwS0RCyvpeXXui1iXXQfUK3jyfveLxt7f8mQ3j0Cqwx5SE9hFx8yaGNgpeLHxsBROcxmCbX5RBvM6eed+vHqNxYSLyyMnITLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjE2OjMyLTA0OjAwjvTL+AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzoxNjozMi0wNDowMP+pc0QAAAAASUVORK5CYII=",RR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAAAAAAD////AwMAAAICAgID//wAA/wD/AABwyKKjAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAyElEQVQoz42RMQ7DIAxFg5QD4KBGXZFPgN0eIFKknqNL9k7M3Th2jYGW0qWe+F+Pb2Om6f8CqVH3joHBqRrsoJtRBCIWo90nIug1OET7dX+hHTqAhdi9/QAsBFEowEIBWCIQvRpy9MwZkLZGAQp8yXNYzczs5hQpRmYFYdcTEpInLYZmuAz4OqgC3N5q9FUaEequHNY5Ql3GEoTo1iMEwGk9pO6VIHZXNQ5FNuki+NqMOUaRKT1byC3mOqeUSuSsOj7ePX6+bKwXtg8vq/zrUZsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDQtMTZUMDc6NTY6MjAtMDQ6MDDkQX/gAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAwlRzHXAAAAABJRU5ErkJggg==",CR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgID///8AAP8AAADAwMAT19+5AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBhoAMQWRi6FPAAAAgklEQVQoz63RUQqAIAwGYIMOkFIHcNYF9AIF6wKR979KzlnkeqiHfhDlY0xxSr1H35LBwBXbSbASoJNAJSaA8xCCd94izgWIaE1/At9SAG75CC5wF+rz68MqeNwi3zHwMca4MfS40nci4sKgVJNgTHtrTkjlewWpHAlQ67mecx6DyAHwGD3zmDvtGAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0OTowNS0wNDowMJ6EiFoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDk6MDUtMDQ6MDDv2TDmAAAAAElFTkSuQmCC",PR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAAAAAACGhoaysrI5OTl3d3dVVVVNTU0AAIBCQkJfX18zMzMiIiLAwMCWlpYpKSkAmcwA//8AzMwAZswAZpkAM5kcHBwREREICAhmAGb////KapVyAAAAAXRSTlMAQObYZgAAAAFiS0dEGnVn5DIAAAAHdElNRQfiBBMBICMWVXF/AAABFUlEQVQ4y82TyZqDIBCE0w3NMkRiFLO8/4umGvSLiVzmNFMXseu3ms3T6d+IiPTBqo/K5hu2BM+wiHPMwrWy84U9CMMKYEBrJTQf76otwJLQplD7emnSCXiI6wiqBEpiVCzRxxgtxK1ipAJwfrxFd6++Eikld042Ot4BJM77YRhyzmwVuHwCidXPtXnmlC7uO4G9G3JbjijhDgle/fE6TSMhI/SA1R9BAEg94Ap7LjMiDgmWo1FgLmUuPSBxzEIT7GVZKpCOAOYwl6UC3GlhWQnYAQHSSQghr/ugq6RDQmRSou0k/FtLwHFvZwEC36rUv7ez0OsQVoDi+5q4x62eZrtQoUrrz030uJ+1uL/W4Vt//Z/9Si86bhD1UrQsrgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozMjozNS0wNDowMLWCggcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzI6MzUtMDQ6MDDE3zq7AAAAAElFTkSuQmCC",IR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACAgIDAwMAAgID///8AgAAAAP+AAAAAAAD/AAAAAIBSZDZVAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhgXETDh3DywAAABh0lEQVQ4y23TsWrDMBAGYPsNqmCC6CbZBa8NNHuEGrq24FK81tbgsXTJ5pQMmUsgT+Bg/JQ9SSdbqn2Q5f/y54QjR5Edoj8wd1Ew8d2KRISnafpI/JzELOGEb8Sb4IUvKyK0PGRpAeMJhEaei20NMu1JJEqhdOV1gq9RdKNoR7j+jqLnY4TD4duXrh0b14tEoQBl7zes/GgoEGLbAKEAT9AoWwRhGlLmAPW0JEmkuPhQlvZcq0Ti5Lij6yfYO/jcQqN0P+WDqovOLIl5ADel8FhxamCPUDZK1baxsbDH5YNSTdBwcFNN0y3Bu1LDYIDMGwaIDAAKN9MgMmyslW1AHsJxbRvwp4VwPt4PQ29vSFL5cHqxwCVLqsrBkZ52FCHz4XzaEWoO5cA8rBy+T/6Dfr65zgF6c2+50MCBRKbzEAQI5gCtByCYE9rbV4BnmawyziXmhLYORCYBGHFgbsKZa+FiBigLYIVPQMf3RssEU+6EzXIUNs+tsIXcCFvKtbDFHIQt5yBB/ge5pdMZ3n2ecAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNzo0OC0wNDowMM+D9pEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTc6NDgtMDQ6MDC+3k4tAAAAAElFTkSuQmCC",LR={class:"iconAndWindowDraw"},DR={id:"drawWindow"};function NR(n,e,t,i,s,r){const o=mn("AboutContent"),a=mn("ModalWindowVue"),l=mn("SkillContent"),c=mn("LogsContent"),u=mn("TwitterEmbed"),f=mn("LoadingArtProcess"),h=mn("AlgoraveContent"),d=mn("AlgoraveVisualContent");return je(),ot("div",LR,[e[3]||(e[3]=xo('<div class="icons" data-v-39a1b764><div class="row" data-v-39a1b764><div class="icon isModal" data-type="About" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+SR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>About</p></div><div class="icon isModal" data-type="Skill" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+ER+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Skill</p></div><div class="icon isModal" data-type="Logs" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+TR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Logs</p></div><div class="icon" data-v-39a1b764><a class="iconUrl" href="https://keybase.io/taruscript" target="_blank" rel="noopener noreferrer" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+bR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Keybase</p></a></div></div><div class="row" data-v-39a1b764><div class="icon isModal" data-type="Distortion" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+Wl+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Distortion</p></div><div class="icon isModal" data-type="Questions" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+Wl+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>???</p></div><div class="icon isModal" data-type="Synthwave" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+Wl+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Synthwave</p></div></div><div class="row" data-v-39a1b764><div class="icon isModal" data-type="Algorave" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+wR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Algorave</p></div></div><div class="row" data-v-39a1b764><div class="icon isModal" data-type="Twitter" data-v-39a1b764><img class="iconImg" width="65%" height="65%" src="'+RR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Twitter</p></div><div class="icon" data-v-39a1b764><a class="iconUrl" href="https://github.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-39a1b764><img class="" width="65%" height="65%" alt="Vue logo" src="'+CR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Github</p></a></div><div class="icon" data-v-39a1b764><a class="iconUrl" href="https://instagram.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-39a1b764><img class="" width="65%" height="65%" alt="Vue logo" src="'+PR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Instagram</p></a></div><div class="icon" data-v-39a1b764><a class="iconUrl" href="mailto:taru@sfc.wide.ad.jp" target="_blank" rel="noopener noreferrer" data-v-39a1b764><img class="" width="65%" height="65%" alt="Vue logo" src="'+IR+'" data-v-39a1b764><p class="iconName" data-v-39a1b764>Mail</p></a></div></div></div>',1)),Ve("div",DR,[n.About?(je(),Cn(a,{key:0,id:"About",windowType:"About",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(o)]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Skill?(je(),Cn(a,{key:1,id:"Skill",windowType:"Skill",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(l)]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Logs?(je(),Cn(a,{key:2,id:"Logs",windowType:"Logs",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(c)]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Twitter?(je(),Cn(a,{key:3,id:"Twitter",windowType:"Twitter",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(u,{isView:n.isTwitterLoading,onLoadingContoller:n.TwitterLoadingController},null,8,["isView","onLoadingContoller"])]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Distortion?(je(),Cn(a,{key:4,id:"Distortion",windowType:"Distortion",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[...e[0]||(e[0]=[Ve("iframe",{src:"https://taruscript.github.io/distortion_web/",width:"100%",height:"100%",frameborder:"0"},null,-1)])]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Questions?(je(),Cn(a,{key:5,id:"Questions",windowType:"Questions",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(f,{targetFile:"index.html","allowed-origins":["https://taruscript.github.io"]},{default:Hn(()=>[...e[1]||(e[1]=[Ve("iframe",{src:"https://taruscript.github.io/question/",width:"100%",height:"100%"},null,-1)])]),_:1})]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Synthwave?(je(),Cn(a,{key:6,id:"Synthwave",windowType:"Synthwave",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[...e[2]||(e[2]=[Ve("iframe",{src:"https://taruscript.github.io/synthwave_landscape/",width:"100%",height:"100%"},null,-1)])]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.Algorave?(je(),Cn(a,{key:7,id:"Algorave",windowType:"Algorave",defaultWidth:"78.125%",defaultHeight:"56.06%",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(h)]),_:1},8,["handleModalWindowHidden"])):pn("",!0),n.AlgoraveVisual?(je(),Cn(a,{key:8,id:"AlgoraveVisual",windowType:"AlgoraveVisual",defaultWidth:"420px",defaultHeight:"420px",handleModalWindowHidden:n.ModalWindowHidden},{default:Hn(()=>[Mt(d)]),_:1},8,["handleModalWindowHidden"])):pn("",!0)])])}const UR=_n(yR,[["render",NR],["__scopeId","data-v-39a1b764"]]),OR=$n({components:{IconsComponentVue:UR,HeaderComponent:V0}}),FR={id:"screen"};function BR(n,e,t,i,s,r){const o=mn("HeaderComponent"),a=mn("IconsComponentVue");return je(),ot("div",FR,[Mt(o),Mt(a)])}const HR=_n(OR,[["render",BR],["__scopeId","data-v-4acb14d9"]]),kR=[{path:"/",name:"screen",component:HR}],VR=O0({history:Zv("./"),routes:kR});var zR="store";function Er(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function GR(n){return n!==null&&typeof n=="object"}function WR(n){return n&&typeof n.then=="function"}function XR(n,e){return function(){return n(e)}}function Nm(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function Um(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;Ga(n,t,[],n._modules.root,!0),ju(n,t,e)}function ju(n,e,t){var i=n._state,s=n._scope;n.getters={},n._makeLocalGettersCache=Object.create(null);var r=n._wrappedGetters,o={},a={},l=ag(!0);l.run(function(){Er(r,function(c,u){o[u]=XR(c,n),a[u]=$t(function(){return o[u]()}),Object.defineProperty(n.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),n._state=_o({data:e}),n._scope=l,n.strict&&$R(n),i&&t&&n._withCommit(function(){i.data=null}),s&&s.stop()}function Ga(n,e,t,i,s){var r=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!r&&!s){var a=qu(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=jR(n,o,t);i.forEachMutation(function(u,f){var h=o+f;qR(n,h,u,c)}),i.forEachAction(function(u,f){var h=u.root?f:o+f,d=u.handler||u;KR(n,h,d,c)}),i.forEachGetter(function(u,f){var h=o+f;YR(n,h,u,c)}),i.forEachChild(function(u,f){Ga(n,e,t.concat(f),u,s)})}function jR(n,e,t){var i=e==="",s={dispatch:i?n.dispatch:function(r,o,a){var l=Ea(r,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),n.dispatch(f,c)},commit:i?n.commit:function(r,o,a){var l=Ea(r,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),n.commit(f,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return n.getters}:function(){return Om(n,e)}},state:{get:function(){return qu(n.state,t)}}}),s}function Om(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(t,r,{get:function(){return n.getters[s]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function qR(n,e,t,i){var s=n._mutations[e]||(n._mutations[e]=[]);s.push(function(o){t.call(n,i.state,o)})}function KR(n,e,t,i){var s=n._actions[e]||(n._actions[e]=[]);s.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return WR(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function YR(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(r){return t(i.state,i.getters,r.state,r.getters)})}function $R(n){As(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function qu(n,e){return e.reduce(function(t,i){return t[i]},n)}function Ea(n,e,t){return GR(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var QR="vuex bindings",Md="vuex:mutations",Xl="vuex:actions",js="vuex",ZR=0;function JR(n,e){Nv({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[QR]},function(t){t.addTimelineLayer({id:Md,label:"Vuex Mutations",color:yd}),t.addTimelineLayer({id:Xl,label:"Vuex Actions",color:yd}),t.addInspector({id:js,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===js)if(i.filter){var s=[];km(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[Hm(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===js){var s=i.nodeId;Om(e,s),i.state=n1(s1(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===js){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(js),t.sendInspectorState(js),t.addTimelineEvent({layerId:Md,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=ZR++,i._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:Xl,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,t.addTimelineEvent({layerId:Xl,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var yd=8702998,e1=6710886,t1=16777215,Fm={label:"namespaced",textColor:t1,backgroundColor:e1};function Bm(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function Hm(n,e){return{id:e||"root",label:Bm(e),tags:n.namespaced?[Fm]:[],children:Object.keys(n._children).map(function(t){return Hm(n._children[t],e+t+"/")})}}function km(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[Fm]:[]}),Object.keys(e._children).forEach(function(s){km(n,e._children[s],t,i+s+"/")})}function n1(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),s={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var r=i1(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Bm(o):o,editable:!1,value:iu(function(){return r[o]})}})}return s}function i1(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=iu(function(){return n[t]})}else e[t]=iu(function(){return n[t]})}),e}function s1(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?n:n.root._children)}function iu(n){try{return n()}catch(e){return e}}var Zn=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Vm={namespaced:{configurable:!0}};Vm.namespaced.get=function(){return!!this._rawModule.namespaced};Zn.prototype.addChild=function(e,t){this._children[e]=t};Zn.prototype.removeChild=function(e){delete this._children[e]};Zn.prototype.getChild=function(e){return this._children[e]};Zn.prototype.hasChild=function(e){return e in this._children};Zn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Zn.prototype.forEachChild=function(e){Er(this._children,e)};Zn.prototype.forEachGetter=function(e){this._rawModule.getters&&Er(this._rawModule.getters,e)};Zn.prototype.forEachAction=function(e){this._rawModule.actions&&Er(this._rawModule.actions,e)};Zn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Er(this._rawModule.mutations,e)};Object.defineProperties(Zn.prototype,Vm);var Es=function(e){this.register([],e,!1)};Es.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};Es.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,s){return t=t.getChild(s),i+(t.namespaced?s+"/":"")},"")};Es.prototype.update=function(e){zm([],this.root,e)};Es.prototype.register=function(e,t,i){var s=this;i===void 0&&(i=!0);var r=new Zn(t,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&Er(t.modules,function(a,l){s.register(e.concat(l),a,i)})};Es.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],s=t.getChild(i);s&&s.runtime&&t.removeChild(i)};Es.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function zm(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;zm(n.concat(i),e.getChild(i),t.modules[i])}}function r1(n){return new vn(n)}var vn=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Es(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,d){return l.call(o,h,d)},this.commit=function(h,d,g){return c.call(o,h,d,g)},this.strict=s;var u=this._modules.root.state;Ga(this,u,[],this._modules.root),ju(this,u),i.forEach(function(f){return f(t)})},Ku={state:{configurable:!0}};vn.prototype.install=function(e,t){e.provide(t||zR,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&JR(e,this)};Ku.state.get=function(){return this._state.data};Ku.state.set=function(n){};vn.prototype.commit=function(e,t,i){var s=this,r=Ea(e,t,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};vn.prototype.dispatch=function(e,t){var i=this,s=Ea(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(h){try{i._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,i.state)})}catch{}u(h)},function(h){try{i._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,i.state,h)})}catch{}f(h)})})}};vn.prototype.subscribe=function(e,t){return Nm(e,this._subscribers,t)};vn.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return Nm(i,this._actionSubscribers,t)};vn.prototype.watch=function(e,t,i){var s=this;return As(function(){return e(s.state,s.getters)},t,Object.assign({},i))};vn.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};vn.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),Ga(this,this.state,e,this._modules.get(e),i.preserveState),ju(this,this.state)};vn.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=qu(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),Um(this)};vn.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};vn.prototype.hotUpdate=function(e){this._modules.update(e),Um(this,!0)};vn.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(vn.prototype,Ku);const o1=r1({state:{},getters:{},mutations:{},actions:{},modules:{}});pv(bv).use(o1).use(VR).mount("#app");
