(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function fu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},Js=[],ui=()=>{},Id=()=>!1,Ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hu=n=>n.startsWith("onUpdate:"),$t=Object.assign,du=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},tg=Object.prototype.hasOwnProperty,gt=(n,e)=>tg.call(n,e),$e=Array.isArray,er=n=>yo(n)==="[object Map]",Ld=n=>yo(n)==="[object Set]",nf=n=>yo(n)==="[object Date]",Ye=n=>typeof n=="function",kt=n=>typeof n=="string",Yn=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",Dd=n=>(yt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),Nd=Object.prototype.toString,yo=n=>Nd.call(n),ng=n=>yo(n).slice(8,-1),Ud=n=>yo(n)==="[object Object]",pu=n=>kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Kr=fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},ig=/-\w/g,Bn=Pa(n=>n.replace(ig,e=>e.slice(1).toUpperCase())),sg=/\B([A-Z])/g,as=Pa(n=>n.replace(sg,"-$1").toLowerCase()),Ia=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qa=Pa(n=>n?`on${Ia(n)}`:""),is=(n,e)=>!Object.is(n,e),Za=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Od=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rg=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let sf;const La=()=>sf||(sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Da(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=kt(i)?cg(i):Da(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(kt(n)||yt(n))return n}const og=/;(?![^(]*\))/g,ag=/:([^]+)/,lg=/\/\*[^]*?\*\//g;function cg(n){const e={};return n.replace(lg,"").split(og).forEach(t=>{if(t){const i=t.split(ag);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ai(n){let e="";if(kt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=ai(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ug="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=fu(ug);function Fd(n){return!!n||n===""}function hg(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=mu(n[i],e[i]);return t}function mu(n,e){if(n===e)return!0;let t=nf(n),i=nf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Yn(n),i=Yn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?hg(n,e):!1;if(t=yt(n),i=yt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!mu(n[o],e[o]))return!1}}return String(n)===String(e)}const Bd=n=>!!(n&&n.__v_isRef===!0),vn=n=>kt(n)?n:n==null?"":$e(n)||yt(n)&&(n.toString===Nd||!Ye(n.toString))?Bd(n)?vn(n.value):JSON.stringify(n,kd,2):String(n),kd=(n,e)=>Bd(e)?kd(n,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ja(i,r)+" =>"]=s,t),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ja(t))}:Yn(e)?Ja(e):yt(e)&&!$e(e)&&!Ud(e)?String(e):e,Ja=(n,e="")=>{var t;return Yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let xn;class Hd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xn,!e&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){++this._on===1&&(this.prevScope=xn,xn=this)}off(){this._on>0&&--this._on===0&&(xn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dg(n){return new Hd(n)}function pg(){return xn}let Rt;const el=new WeakSet;class Vd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xn&&xn.active&&xn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rf(this),Wd(this);const e=Rt,t=Kn;Rt=this,Kn=!0;try{return this.fn()}finally{Xd(this),Rt=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vu(e);this.deps=this.depsTail=void 0,rf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let zd=0,qr,$r;function Gd(n,e=!1){if(n.flags|=8,e){n.next=$r,$r=n;return}n.next=qr,qr=n}function gu(){zd++}function _u(){if(--zd>0)return;if($r){let e=$r;for($r=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qr;){let e=qr;for(qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Wd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),vu(i),mg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Jl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function jd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ro)||(n.globalVersion=ro,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Jl(n))))return;n.flags|=2;const e=n.dep,t=Rt,i=Kn;Rt=n,Kn=!0;try{Wd(n);const s=n.fn(n._value);(e.version===0||is(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Rt=t,Kn=i,Xd(n),n.flags&=-3}}function vu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)vu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function mg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const Kd=[];function Ui(){Kd.push(Kn),Kn=!1}function Oi(){const n=Kd.pop();Kn=n===void 0?!0:n}function rf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Rt;Rt=void 0;try{e()}finally{Rt=t}}}let ro=0;class gg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rt||!Kn||Rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Rt)t=this.activeLink=new gg(Rt,this),Rt.deps?(t.prevDep=Rt.depsTail,Rt.depsTail.nextDep=t,Rt.depsTail=t):Rt.deps=Rt.depsTail=t,qd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Rt.depsTail,t.nextDep=void 0,Rt.depsTail.nextDep=t,Rt.depsTail=t,Rt.deps===t&&(Rt.deps=i)}return t}trigger(e){this.version++,ro++,this.notify(e)}notify(e){gu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_u()}}}function qd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ec=new WeakMap,Ss=Symbol(""),tc=Symbol(""),oo=Symbol("");function Jt(n,e,t){if(Kn&&Rt){let i=ec.get(n);i||ec.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new xu),s.map=i,s.key=t),s.track()}}function Ci(n,e,t,i,s,r){const o=ec.get(n);if(!o){ro++;return}const a=l=>{l&&l.trigger()};if(gu(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&pu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===oo||!Yn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(oo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ss)),er(n)&&a(o.get(tc)));break;case"delete":l||(a(o.get(Ss)),er(n)&&a(o.get(tc)));break;case"set":er(n)&&a(o.get(Ss));break}}_u()}function Ps(n){const e=mt(n);return e===n?e:(Jt(e,"iterate",oo),Fn(n)?e:e.map(Qn))}function Na(n){return Jt(n=mt(n),"iterate",oo),n}function Qi(n,e){return Fi(n)?lr(Es(n)?Qn(e):e):Qn(e)}const _g={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,n=>Qi(this,n))},concat(...n){return Ps(this).concat(...n.map(e=>$e(e)?Ps(e):e))},entries(){return tl(this,"entries",n=>(n[1]=Qi(this,n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(i=>Qi(this,i)),arguments)},find(n,e){return _i(this,"find",n,e,t=>Qi(this,t),arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,t=>Qi(this,t),arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return nl(this,"includes",n)},indexOf(...n){return nl(this,"indexOf",n)},join(n){return Ps(this).join(n)},lastIndexOf(...n){return nl(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...n){return Pr(this,"push",n)},reduce(n,...e){return of(this,"reduce",n,e)},reduceRight(n,...e){return of(this,"reduceRight",n,e)},shift(){return Pr(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return Pr(this,"splice",n)},toReversed(){return Ps(this).toReversed()},toSorted(n){return Ps(this).toSorted(n)},toSpliced(...n){return Ps(this).toSpliced(...n)},unshift(...n){return Pr(this,"unshift",n)},values(){return tl(this,"values",n=>Qi(this,n))}};function tl(n,e,t){const i=Na(n),s=i[e]();return i!==n&&!Fn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const vg=Array.prototype;function _i(n,e,t,i,s,r){const o=Na(n),a=o!==n&&!Fn(n),l=o[e];if(l!==vg[e]){const f=l.apply(n,r);return a?Qn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Qi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function of(n,e,t,i){const s=Na(n);let r=t;return s!==n&&(Fn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Qi(n,a),l,n)}),s[e](r,...i)}function nl(n,e,t){const i=mt(n);Jt(i,"iterate",oo);const s=i[e](...t);return(s===-1||s===!1)&&Au(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function Pr(n,e,t=[]){Ui(),gu();const i=mt(n)[e].apply(n,t);return _u(),Oi(),i}const xg=fu("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function Mg(n){Yn(n)||(n=String(n));const e=mt(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class Yd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Pg:ep:r?Jd:Zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=_g[t]))return l;if(t==="hasOwnProperty")return Mg}const a=Reflect.get(e,t,tn(e)?e:i);if((Yn(t)?$d.has(t):xg(t))||(s||Jt(e,"get",t),r))return a;if(tn(a)){const l=o&&pu(t)?a:a.value;return s&&yt(l)?ic(l):l}return yt(a)?s?ic(a):Ao(a):a}}class Qd extends Yd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=$e(e)&&pu(t);if(!this._isShallow){const c=Fi(r);if(!Fn(i)&&!Fi(i)&&(r=mt(r),i=mt(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:gt(e,t),l=Reflect.set(e,t,i,tn(e)?e:s);return e===mt(s)&&(a?is(i,r)&&Ci(e,"set",t,i):Ci(e,"add",t,i)),l}deleteProperty(e,t){const i=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Yn(t)||!$d.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",$e(e)?"length":Ss),Reflect.ownKeys(e)}}class yg extends Yd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ag=new Qd,Sg=new yg,Eg=new Qd(!0);const nc=n=>n,wo=n=>Reflect.getPrototypeOf(n);function Tg(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),o=er(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?nc:e?lr:Qn;return!e&&Jt(r,"iterate",l?tc:Ss),$t(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ro(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bg(n,e){const t={get(s){const r=this.__v_raw,o=mt(r),a=mt(s);n||(is(s,a)&&Jt(o,"get",s),Jt(o,"get",a));const{has:l}=wo(o),c=e?nc:n?lr:Qn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Jt(mt(s),"iterate",Ss),s.size},has(s){const r=this.__v_raw,o=mt(r),a=mt(s);return n||(is(s,a)&&Jt(o,"has",s),Jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=mt(a),c=e?nc:n?lr:Qn;return!n&&Jt(l,"iterate",Ss),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return $t(t,n?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(s){!e&&!Fn(s)&&!Fi(s)&&(s=mt(s));const r=mt(this);return wo(r).has.call(r,s)||(r.add(s),Ci(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!Fi(r)&&(r=mt(r));const o=mt(this),{has:a,get:l}=wo(o);let c=a.call(o,s);c||(s=mt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?is(r,u)&&Ci(o,"set",s,r):Ci(o,"add",s,r),this},delete(s){const r=mt(this),{has:o,get:a}=wo(r);let l=o.call(r,s);l||(s=mt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ci(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,o=s.clear();return r&&Ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Tg(s,n,e)}),t}function Mu(n,e){const t=bg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(gt(t,s)&&s in i?t:i,s,r)}const wg={get:Mu(!1,!1)},Rg={get:Mu(!1,!0)},Cg={get:Mu(!0,!1)};const Zd=new WeakMap,Jd=new WeakMap,ep=new WeakMap,Pg=new WeakMap;function Ig(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lg(n){return n.__v_skip||!Object.isExtensible(n)?0:Ig(ng(n))}function Ao(n){return Fi(n)?n:yu(n,!1,Ag,wg,Zd)}function tp(n){return yu(n,!1,Eg,Rg,Jd)}function ic(n){return yu(n,!0,Sg,Cg,ep)}function yu(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Lg(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Es(n){return Fi(n)?Es(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function Fn(n){return!!(n&&n.__v_isShallow)}function Au(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Dg(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&Od(n,"__v_skip",!0),n}const Qn=n=>yt(n)?Ao(n):n,lr=n=>yt(n)?ic(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Tt(n){return np(n,!1)}function Ng(n){return np(n,!0)}function np(n,e){return tn(n)?n:new Ug(n,e)}class Ug{constructor(e,t){this.dep=new xu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:Qn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Fn(e)||Fi(e);e=i?e:mt(e),is(e,t)&&(this._rawValue=e,this._value=i?e:Qn(e),this.dep.trigger())}}function Ot(n){return tn(n)?n.value:n}const Og={get:(n,e,t)=>e==="__v_raw"?n:Ot(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return tn(s)&&!tn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ip(n){return Es(n)?n:new Proxy(n,Og)}class Fg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new xu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return Gd(this,!0),!0}get value(){const e=this.dep.track();return jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bg(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new Fg(i,s,t)}const Co={},pa=new WeakMap;let vs;function kg(n,e=!1,t=vs){if(t){let i=pa.get(t);i||pa.set(t,i=[]),i.push(n)}}function Hg(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:Fn(M)||s===!1||s===0?Pi(M,1):Pi(M);let u,f,h,d,g=!1,v=!1;if(tn(n)?(f=()=>n.value,g=Fn(n)):Es(n)?(f=()=>c(n),g=!0):$e(n)?(v=!0,g=n.some(M=>Es(M)||Fn(M)),f=()=>n.map(M=>{if(tn(M))return M.value;if(Es(M))return c(M);if(Ye(M))return l?l(M,2):M()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ui();try{h()}finally{Oi()}}const M=vs;vs=u;try{return l?l(n,3,[d]):n(d)}finally{vs=M}}:f=ui,e&&s){const M=f,w=s===!0?1/0:s;f=()=>Pi(M(),w)}const m=pg(),p=()=>{u.stop(),m&&m.active&&du(m.effects,u)};if(r&&e){const M=e;e=(...w)=>{M(...w),p()}}let A=v?new Array(n.length).fill(Co):Co;const b=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const w=u.run();if(s||g||(v?w.some((C,L)=>is(C,A[L])):is(w,A))){h&&h();const C=vs;vs=u;try{const L=[w,A===Co?void 0:v&&A[0]===Co?[]:A,d];A=w,l?l(e,3,L):e(...L)}finally{vs=C}}}else u.run()};return a&&a(b),u=new Vd(f),u.scheduler=o?()=>o(b,!1):b,d=M=>kg(M,!1,u),h=u.onStop=()=>{const M=pa.get(u);if(M){if(l)l(M,4);else for(const w of M)w();pa.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Pi(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))Pi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Pi(n[i],e,t);else if(Ld(n)||er(n))n.forEach(i=>{Pi(i,e,t)});else if(Ud(n)){for(const i in n)Pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Pi(n[i],e,t)}return n}function So(n,e,t,i){try{return i?n(...i):n()}catch(s){Ua(s,e,t)}}function hi(n,e,t,i){if(Ye(n)){const s=So(n,e,t,i);return s&&Dd(s)&&s.catch(r=>{Ua(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(hi(n[r],e,t,i));return s}}function Ua(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Ui(),So(r,null,10,[n,l,c]),Oi();return}}Vg(n,t,s,i,o)}function Vg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const cn=[];let ii=-1;const tr=[];let Zi=null,Ys=0;const sp=Promise.resolve();let ma=null;function rp(n){const e=ma||sp;return n?e.then(this?n.bind(this):n):e}function zg(n){let e=ii+1,t=cn.length;for(;e<t;){const i=e+t>>>1,s=cn[i],r=ao(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Su(n){if(!(n.flags&1)){const e=ao(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=ao(t)?cn.push(n):cn.splice(zg(e),0,n),n.flags|=1,op()}}function op(){ma||(ma=sp.then(lp))}function Gg(n){$e(n)?tr.push(...n):Zi&&n.id===-1?Zi.splice(Ys+1,0,n):n.flags&1||(tr.push(n),n.flags|=1),op()}function af(n,e,t=ii+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ap(n){if(tr.length){const e=[...new Set(tr)].sort((t,i)=>ao(t)-ao(i));if(tr.length=0,Zi){Zi.push(...e);return}for(Zi=e,Ys=0;Ys<Zi.length;Ys++){const t=Zi[Ys];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zi=null,Ys=0}}const ao=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lp(n){try{for(ii=0;ii<cn.length;ii++){const e=cn[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<cn.length;ii++){const e=cn[ii];e&&(e.flags&=-2)}ii=-1,cn.length=0,ap(),ma=null,(cn.length||tr.length)&&lp()}}let qt=null,cp=null;function ga(n){const e=qt;return qt=n,cp=n&&n.type.__scopeId||null,e}function Gn(n,e=qt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&xa(-1);const r=ga(e);let o;try{o=n(...s)}finally{ga(r),i._d&&xa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function lf(n,e){if(qt===null)return n;const t=za(qt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Pi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function cs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ui(),hi(l,t,8,[n.el,a,n,e]),Oi())}}function ia(n,e){if(en){let t=en.provides;const i=en.parent&&en.parent.provides;i===t&&(t=en.provides=Object.create(i)),t[n]=e}}function Di(n,e,t=!1){const i=z_();if(i||ir){let s=ir?ir._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Wg=Symbol.for("v-scx"),Xg=()=>Di(Wg);function Ts(n,e,t){return up(n,e,t)}function up(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:o}=t,a=$t({},t),l=e&&i||!e&&r!=="post";let c;if(uo){if(r==="sync"){const d=Xg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ui,d.resume=ui,d.pause=ui,d}}const u=en;a.call=(d,g,v)=>hi(d,u,g,v);let f=!1;r==="post"?a.scheduler=d=>{_n(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Su(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Hg(n,e,a);return uo&&(c?c.push(h):l&&h()),h}function jg(n,e,t){const i=this.proxy,s=kt(n)?n.includes(".")?fp(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=Eo(this),a=up(s,r.bind(i),t);return o(),a}function fp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Kg=Symbol("_vte"),qg=n=>n.__isTeleport,$g=Symbol("_leaveCb");function Eu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Eu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function kn(n,e){return Ye(n)?$t({name:n.name},e,{setup:n}):n}function hp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function cf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const _a=new WeakMap;function Yr(n,e,t,i,s=!1){if($e(n)){n.forEach((v,m)=>Yr(v,e&&($e(e)?e[m]:e),t,i,s));return}if(nr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Yr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?za(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,f=a.setupState,h=mt(f),d=f===bt?Id:v=>cf(u,v)?!1:gt(h,v),g=(v,m)=>!(m&&cf(u,m));if(c!=null&&c!==l){if(uf(e),kt(c))u[c]=null,d(c)&&(f[c]=null);else if(tn(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ye(l))So(l,a,12,[o,u]);else{const v=kt(l),m=tn(l);if(v||m){const p=()=>{if(n.f){const A=v?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)$e(A)&&du(A,r);else if($e(A))A.includes(r)||A.push(r);else if(v)u[l]=[r],d(l)&&(f[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else v?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{p(),_a.delete(n)};A.id=-1,_a.set(n,A),_n(A,t)}else uf(n),p()}}}function uf(n){const e=_a.get(n);e&&(e.flags|=8,_a.delete(n))}La().requestIdleCallback;La().cancelIdleCallback;const nr=n=>!!n.type.__asyncLoader,dp=n=>n.type.__isKeepAlive;function Yg(n,e){pp(n,"a",e)}function Qg(n,e){pp(n,"da",e)}function pp(n,e,t=en){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Oa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)dp(s.parent.vnode)&&Zg(i,e,t,s),s=s.parent}}function Zg(n,e,t,i){const s=Oa(e,n,i,!0);mp(()=>{du(i[e],s)},t)}function Oa(n,e,t=en,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ui();const a=Eo(t),l=hi(e,t,n,o);return a(),Oi(),l});return i?s.unshift(r):s.push(r),r}}const Hi=n=>(e,t=en)=>{(!uo||n==="sp")&&Oa(n,(...i)=>e(...i),t)},Jg=Hi("bm"),Fa=Hi("m"),e_=Hi("bu"),t_=Hi("u"),Ba=Hi("bum"),mp=Hi("um"),n_=Hi("sp"),i_=Hi("rtg"),s_=Hi("rtc");function r_(n,e=en){Oa("ec",n,e)}const o_="components";function ln(n,e){return l_(o_,n,!0,e)||n}const a_=Symbol.for("v-ndc");function l_(n,e,t=!0,i=!1){const s=qt||en;if(s){const r=s.type;{const a=K_(r,!1);if(a&&(a===e||a===Bn(e)||a===Ia(Bn(e))))return r}const o=ff(s[n]||r[n],e)||ff(s.appContext[n],e);return!o&&i?r:o}}function ff(n,e){return n&&(n[e]||n[Bn(e)]||n[Ia(Bn(e))])}function vi(n,e,t,i){let s;const r=t,o=$e(n);if(o||kt(n)){const a=o&&Es(n);let l=!1,c=!1;a&&(l=!Fn(n),c=Fi(n),n=Na(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?lr(Qn(n[u])):Qn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function gp(n,e,t={},i,s){if(qt.ce||qt.parent&&nr(qt.parent)&&qt.parent.ce){const c=Object.keys(t).length>0;return Ke(),Dn(Nt,null,[Mt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Ke();const o=r&&_p(r(t)),a=t.key||o&&o.key,l=Dn(Nt,{key:(a&&!Yn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function _p(n){return n.some(e=>co(e)?!(e.type===Bi||e.type===Nt&&!_p(e.children)):!0)?n:null}const sc=n=>n?Bp(n)?za(n):sc(n.parent):null,Qr=$t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sc(n.parent),$root:n=>sc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xp(n),$forceUpdate:n=>n.f||(n.f=()=>{Su(n.update)}),$nextTick:n=>n.n||(n.n=rp.bind(n.proxy)),$watch:n=>jg.bind(n)}),il=(n,e)=>n!==bt&&!n.__isScriptSetup&&gt(n,e),c_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(il(i,e))return o[e]=1,i[e];if(s!==bt&&gt(s,e))return o[e]=2,s[e];if(gt(r,e))return o[e]=3,r[e];if(t!==bt&&gt(t,e))return o[e]=4,t[e];rc&&(o[e]=0)}}const c=Qr[e];let u,f;if(c)return e==="$attrs"&&Jt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==bt&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return il(s,e)?(s[e]=t,!0):i!==bt&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==bt&&a[0]!=="$"&&gt(n,a)||il(e,a)||gt(r,a)||gt(i,a)||gt(Qr,a)||gt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function hf(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rc=!0;function u_(n){const e=xp(n),t=n.proxy,i=n.ctx;rc=!1,e.beforeCreate&&df(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:b,unmounted:M,render:w,renderTracked:C,renderTriggered:L,errorCaptured:N,serverPrefetch:S,expose:T,inheritAttrs:D,components:W,directives:Z,filters:ie}=e;if(c&&f_(c,i,null),o)for(const he in o){const j=o[he];Ye(j)&&(i[he]=j.bind(t))}if(s){const he=s.call(t,t);yt(he)&&(n.data=Ao(he))}if(rc=!0,r)for(const he in r){const j=r[he],Me=Ye(j)?j.bind(t,t):Ye(j.get)?j.get.bind(t,t):ui,Re=!Ye(j)&&Ye(j.set)?j.set.bind(t):ui,De=Kt({get:Me,set:Re});Object.defineProperty(i,he,{enumerable:!0,configurable:!0,get:()=>De.value,set:Be=>De.value=Be})}if(a)for(const he in a)vp(a[he],i,t,he);if(l){const he=Ye(l)?l.call(t):l;Reflect.ownKeys(he).forEach(j=>{ia(j,he[j])})}u&&df(u,n,"c");function te(he,j){$e(j)?j.forEach(Me=>he(Me.bind(t))):j&&he(j.bind(t))}if(te(Jg,f),te(Fa,h),te(e_,d),te(t_,g),te(Yg,v),te(Qg,m),te(r_,N),te(s_,C),te(i_,L),te(Ba,A),te(mp,M),te(n_,S),$e(T))if(T.length){const he=n.exposed||(n.exposed={});T.forEach(j=>{Object.defineProperty(he,j,{get:()=>t[j],set:Me=>t[j]=Me,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===ui&&(n.render=w),D!=null&&(n.inheritAttrs=D),W&&(n.components=W),Z&&(n.directives=Z),S&&hp(n)}function f_(n,e,t=ui){$e(n)&&(n=oc(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=Di(s.from||i,s.default,!0):r=Di(s.from||i):r=Di(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function df(n,e,t){hi($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vp(n,e,t,i){let s=i.includes(".")?fp(t,i):()=>t[i];if(kt(n)){const r=e[n];Ye(r)&&Ts(s,r)}else if(Ye(n))Ts(s,n.bind(t));else if(yt(n))if($e(n))n.forEach(r=>vp(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&Ts(s,r,n)}}function xp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>va(l,c,o,!0)),va(l,e,o)),yt(e)&&r.set(e,l),l}function va(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&va(n,r,t,!0),s&&s.forEach(o=>va(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=h_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const h_={data:pf,props:mf,emits:mf,methods:Gr,computed:Gr,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:Gr,directives:Gr,watch:p_,provide:pf,inject:d_};function pf(n,e){return e?n?function(){return $t(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function d_(n,e){return Gr(oc(n),oc(e))}function oc(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function on(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?$t(Object.create(null),n,e):e}function mf(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:$t(Object.create(null),hf(n),hf(e??{})):e}function p_(n,e){if(!n)return e;if(!e)return n;const t=$t(Object.create(null),n);for(const i in e)t[i]=on(n[i],e[i]);return t}function Mp(){return{app:null,config:{isNativeTag:Id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let m_=0;function g_(n,e){return function(i,s=null){Ye(i)||(i=$t({},i)),s!=null&&!yt(s)&&(s=null);const r=Mp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:m_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:$_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Mt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,za(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(hi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ir;ir=c;try{return u()}finally{ir=f}}};return c}}let ir=null;const __=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Bn(e)}Modifiers`]||n[`${as(e)}Modifiers`];function v_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),o=r&&__(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>kt(u)?u.trim():u)),o.number&&(s=t.map(rg)));let a,l=i[a=Qa(e)]||i[a=Qa(Bn(e))];!l&&r&&(l=i[a=Qa(as(e))]),l&&hi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,hi(c,n,6,s)}}const x_=new WeakMap;function yp(n,e,t=!1){const i=t?x_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const u=yp(c,e,!0);u&&(a=!0,$t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(yt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>o[l]=null):$t(o,r),yt(n)&&i.set(n,o),o)}function ka(n,e){return!n||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,as(e))||gt(n,e))}function gf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=n,m=ga(n);let p,A;try{if(t.shapeFlag&4){const M=s||i,w=M;p=ri(c.call(w,M,u,f,d,h,g)),A=a}else{const M=e;p=ri(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),A=e.props?a:M_(a)}}catch(M){Zr.length=0,Ua(M,n,1),p=Mt(Bi)}let b=p;if(A&&v!==!1){const M=Object.keys(A),{shapeFlag:w}=b;M.length&&w&7&&(r&&M.some(hu)&&(A=y_(A,r)),b=cr(b,A,!1,!0))}return t.dirs&&(b=cr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Eu(b,t.transition),p=b,ga(m),p}const M_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ca(t))&&((e||(e={}))[t]=n[t]);return e},y_=(n,e)=>{const t={};for(const i in n)(!hu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function A_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_f(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Ap(o,i,h)&&!ka(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?_f(i,o,c):!0:!!o;return!1}function _f(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ap(e,n,r)&&!ka(t,r))return!0}return!1}function Ap(n,e,t){const i=n[t],s=e[t];return t==="style"&&yt(i)&&yt(s)?!mu(i,s):i!==s}function S_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Sp={},Ep=()=>Object.create(Sp),Tp=n=>Object.getPrototypeOf(n)===Sp;function E_(n,e,t,i=!1){const s={},r=Ep();n.propsDefaults=Object.create(null),bp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:tp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function T_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=mt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ka(n.emitsOptions,h))continue;const d=e[h];if(l)if(gt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Bn(h);s[g]=ac(l,a,g,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{bp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!gt(e,f)&&((u=as(f))===f||!gt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ac(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!gt(e,f))&&(delete r[f],c=!0)}c&&Ci(n.attrs,"set","")}function bp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Kr(l))continue;const c=e[l];let u;s&&gt(s,u=Bn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ka(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=mt(t),c=a||bt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ac(s,l,f,c[f],n,!gt(c,f))}}return o}function ac(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Eo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===as(t))&&(i=!0))}return i}const b_=new WeakMap;function wp(n,e,t=!1){const i=t?b_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,d]=wp(f,e,!0);$t(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,Js),Js;if($e(r))for(let u=0;u<r.length;u++){const f=Bn(r[u]);vf(f)&&(o[f]=bt)}else if(r)for(const u in r){const f=Bn(u);if(vf(f)){const h=r[u],d=o[f]=$e(h)||Ye(h)?{type:h}:$t({},h),g=d.type;let v=!1,m=!0;if($e(g))for(let p=0;p<g.length;++p){const A=g[p],b=Ye(A)&&A.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=Ye(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||gt(d,"default"))&&a.push(f)}}const c=[o,a];return yt(n)&&i.set(n,c),c}function vf(n){return n[0]!=="$"&&!Kr(n)}const Tu=n=>n==="_"||n==="_ctx"||n==="$stable",bu=n=>$e(n)?n.map(ri):[ri(n)],w_=(n,e,t)=>{if(e._n)return e;const i=Gn((...s)=>bu(e(...s)),t);return i._c=!1,i},Rp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Tu(s))continue;const r=n[s];if(Ye(r))e[s]=w_(s,r,i);else if(r!=null){const o=bu(r);e[s]=()=>o}}},Cp=(n,e)=>{const t=bu(e);n.slots.default=()=>t},Pp=(n,e,t)=>{for(const i in e)(t||!Tu(i))&&(n[i]=e[i])},R_=(n,e,t)=>{const i=n.slots=Ep();if(n.vnode.shapeFlag&32){const s=e._;s?(Pp(i,e,t),t&&Od(i,"_",s,!0)):Rp(e,i)}else e&&Cp(n,e)},C_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Pp(s,e,t):(r=!e.$stable,Rp(e,s)),o=e}else e&&(Cp(n,e),o={default:1});if(r)for(const a in s)!Tu(a)&&o[a]==null&&delete s[a]},_n=N_;function P_(n){return I_(n)}function I_(n,e){const t=La();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ui,insertStaticContent:g}=n,v=(R,_,B,K=null,q=null,k=null,ge=void 0,ee=null,fe=!!_.dynamicChildren)=>{if(R===_)return;R&&!Ir(R,_)&&(K=P(R),Be(R,q,k,!0),R=null),_.patchFlag===-2&&(fe=!1,_.dynamicChildren=null);const{type:de,ref:we,shapeFlag:y}=_;switch(de){case Ha:m(R,_,B,K);break;case Bi:p(R,_,B,K);break;case sa:R==null&&A(_,B,K,ge);break;case Nt:W(R,_,B,K,q,k,ge,ee,fe);break;default:y&1?w(R,_,B,K,q,k,ge,ee,fe):y&6?Z(R,_,B,K,q,k,ge,ee,fe):(y&64||y&128)&&de.process(R,_,B,K,q,k,ge,ee,fe,ue)}we!=null&&q?Yr(we,R&&R.ref,k,_||R,!_):we==null&&R&&R.ref!=null&&Yr(R.ref,null,k,R,!0)},m=(R,_,B,K)=>{if(R==null)i(_.el=a(_.children),B,K);else{const q=_.el=R.el;_.children!==R.children&&c(q,_.children)}},p=(R,_,B,K)=>{R==null?i(_.el=l(_.children||""),B,K):_.el=R.el},A=(R,_,B,K)=>{[R.el,R.anchor]=g(R.children,_,B,K,R.el,R.anchor)},b=({el:R,anchor:_},B,K)=>{let q;for(;R&&R!==_;)q=h(R),i(R,B,K),R=q;i(_,B,K)},M=({el:R,anchor:_})=>{let B;for(;R&&R!==_;)B=h(R),s(R),R=B;s(_)},w=(R,_,B,K,q,k,ge,ee,fe)=>{if(_.type==="svg"?ge="svg":_.type==="math"&&(ge="mathml"),R==null)C(_,B,K,q,k,ge,ee,fe);else{const de=R.el&&R.el._isVueCE?R.el:null;try{de&&de._beginPatch(),S(R,_,q,k,ge,ee,fe)}finally{de&&de._endPatch()}}},C=(R,_,B,K,q,k,ge,ee)=>{let fe,de;const{props:we,shapeFlag:y,transition:x,dirs:U}=R;if(fe=R.el=o(R.type,k,we&&we.is,we),y&8?u(fe,R.children):y&16&&N(R.children,fe,null,K,q,sl(R,k),ge,ee),U&&cs(R,null,K,"created"),L(fe,R,R.scopeId,ge,K),we){for(const le in we)le!=="value"&&!Kr(le)&&r(fe,le,null,we[le],k,K);"value"in we&&r(fe,"value",null,we.value,k),(de=we.onVnodeBeforeMount)&&ni(de,K,R)}U&&cs(R,null,K,"beforeMount");const Y=L_(q,x);Y&&x.beforeEnter(fe),i(fe,_,B),((de=we&&we.onVnodeMounted)||Y||U)&&_n(()=>{de&&ni(de,K,R),Y&&x.enter(fe),U&&cs(R,null,K,"mounted")},q)},L=(R,_,B,K,q)=>{if(B&&d(R,B),K)for(let k=0;k<K.length;k++)d(R,K[k]);if(q){let k=q.subTree;if(_===k||Np(k.type)&&(k.ssContent===_||k.ssFallback===_)){const ge=q.vnode;L(R,ge,ge.scopeId,ge.slotScopeIds,q.parent)}}},N=(R,_,B,K,q,k,ge,ee,fe=0)=>{for(let de=fe;de<R.length;de++){const we=R[de]=ee?Ri(R[de]):ri(R[de]);v(null,we,_,B,K,q,k,ge,ee)}},S=(R,_,B,K,q,k,ge)=>{const ee=_.el=R.el;let{patchFlag:fe,dynamicChildren:de,dirs:we}=_;fe|=R.patchFlag&16;const y=R.props||bt,x=_.props||bt;let U;if(B&&us(B,!1),(U=x.onVnodeBeforeUpdate)&&ni(U,B,_,R),we&&cs(_,R,B,"beforeUpdate"),B&&us(B,!0),(y.innerHTML&&x.innerHTML==null||y.textContent&&x.textContent==null)&&u(ee,""),de?T(R.dynamicChildren,de,ee,B,K,sl(_,q),k):ge||j(R,_,ee,null,B,K,sl(_,q),k,!1),fe>0){if(fe&16)D(ee,y,x,B,q);else if(fe&2&&y.class!==x.class&&r(ee,"class",null,x.class,q),fe&4&&r(ee,"style",y.style,x.style,q),fe&8){const Y=_.dynamicProps;for(let le=0;le<Y.length;le++){const Q=Y[le],I=y[Q],F=x[Q];(F!==I||Q==="value")&&r(ee,Q,I,F,q,B)}}fe&1&&R.children!==_.children&&u(ee,_.children)}else!ge&&de==null&&D(ee,y,x,B,q);((U=x.onVnodeUpdated)||we)&&_n(()=>{U&&ni(U,B,_,R),we&&cs(_,R,B,"updated")},K)},T=(R,_,B,K,q,k,ge)=>{for(let ee=0;ee<_.length;ee++){const fe=R[ee],de=_[ee],we=fe.el&&(fe.type===Nt||!Ir(fe,de)||fe.shapeFlag&198)?f(fe.el):B;v(fe,de,we,null,K,q,k,ge,!0)}},D=(R,_,B,K,q)=>{if(_!==B){if(_!==bt)for(const k in _)!Kr(k)&&!(k in B)&&r(R,k,_[k],null,q,K);for(const k in B){if(Kr(k))continue;const ge=B[k],ee=_[k];ge!==ee&&k!=="value"&&r(R,k,ee,ge,q,K)}"value"in B&&r(R,"value",_.value,B.value,q)}},W=(R,_,B,K,q,k,ge,ee,fe)=>{const de=_.el=R?R.el:a(""),we=_.anchor=R?R.anchor:a("");let{patchFlag:y,dynamicChildren:x,slotScopeIds:U}=_;U&&(ee=ee?ee.concat(U):U),R==null?(i(de,B,K),i(we,B,K),N(_.children||[],B,we,q,k,ge,ee,fe)):y>0&&y&64&&x&&R.dynamicChildren&&R.dynamicChildren.length===x.length?(T(R.dynamicChildren,x,B,q,k,ge,ee),(_.key!=null||q&&_===q.subTree)&&Ip(R,_,!0)):j(R,_,B,we,q,k,ge,ee,fe)},Z=(R,_,B,K,q,k,ge,ee,fe)=>{_.slotScopeIds=ee,R==null?_.shapeFlag&512?q.ctx.activate(_,B,K,ge,fe):ie(_,B,K,q,k,ge,fe):ce(R,_,fe)},ie=(R,_,B,K,q,k,ge)=>{const ee=R.component=V_(R,K,q);if(dp(R)&&(ee.ctx.renderer=ue),G_(ee,!1,ge),ee.asyncDep){if(q&&q.registerDep(ee,te,ge),!R.el){const fe=ee.subTree=Mt(Bi);p(null,fe,_,B),R.placeholder=fe.el}}else te(ee,R,_,B,q,k,ge)},ce=(R,_,B)=>{const K=_.component=R.component;if(A_(R,_,B))if(K.asyncDep&&!K.asyncResolved){he(K,_,B);return}else K.next=_,K.update();else _.el=R.el,K.vnode=_},te=(R,_,B,K,q,k,ge)=>{const ee=()=>{if(R.isMounted){let{next:y,bu:x,u:U,parent:Y,vnode:le}=R;{const oe=Lp(R);if(oe){y&&(y.el=le.el,he(R,y,ge)),oe.asyncDep.then(()=>{_n(()=>{R.isUnmounted||de()},q)});return}}let Q=y,I;us(R,!1),y?(y.el=le.el,he(R,y,ge)):y=le,x&&Za(x),(I=y.props&&y.props.onVnodeBeforeUpdate)&&ni(I,Y,y,le),us(R,!0);const F=gf(R),ne=R.subTree;R.subTree=F,v(ne,F,f(ne.el),P(ne),R,q,k),y.el=F.el,Q===null&&S_(R,F.el),U&&_n(U,q),(I=y.props&&y.props.onVnodeUpdated)&&_n(()=>ni(I,Y,y,le),q)}else{let y;const{el:x,props:U}=_,{bm:Y,m:le,parent:Q,root:I,type:F}=R,ne=nr(_);us(R,!1),Y&&Za(Y),!ne&&(y=U&&U.onVnodeBeforeMount)&&ni(y,Q,_),us(R,!0);{I.ce&&I.ce._hasShadowRoot()&&I.ce._injectChildStyle(F);const oe=R.subTree=gf(R);v(null,oe,B,K,R,q,k),_.el=oe.el}if(le&&_n(le,q),!ne&&(y=U&&U.onVnodeMounted)){const oe=_;_n(()=>ni(y,Q,oe),q)}(_.shapeFlag&256||Q&&nr(Q.vnode)&&Q.vnode.shapeFlag&256)&&R.a&&_n(R.a,q),R.isMounted=!0,_=B=K=null}};R.scope.on();const fe=R.effect=new Vd(ee);R.scope.off();const de=R.update=fe.run.bind(fe),we=R.job=fe.runIfDirty.bind(fe);we.i=R,we.id=R.uid,fe.scheduler=()=>Su(we),us(R,!0),de()},he=(R,_,B)=>{_.component=R;const K=R.vnode.props;R.vnode=_,R.next=null,T_(R,_.props,K,B),C_(R,_.children,B),Ui(),af(R),Oi()},j=(R,_,B,K,q,k,ge,ee,fe=!1)=>{const de=R&&R.children,we=R?R.shapeFlag:0,y=_.children,{patchFlag:x,shapeFlag:U}=_;if(x>0){if(x&128){Re(de,y,B,K,q,k,ge,ee,fe);return}else if(x&256){Me(de,y,B,K,q,k,ge,ee,fe);return}}U&8?(we&16&&z(de,q,k),y!==de&&u(B,y)):we&16?U&16?Re(de,y,B,K,q,k,ge,ee,fe):z(de,q,k,!0):(we&8&&u(B,""),U&16&&N(y,B,K,q,k,ge,ee,fe))},Me=(R,_,B,K,q,k,ge,ee,fe)=>{R=R||Js,_=_||Js;const de=R.length,we=_.length,y=Math.min(de,we);let x;for(x=0;x<y;x++){const U=_[x]=fe?Ri(_[x]):ri(_[x]);v(R[x],U,B,null,q,k,ge,ee,fe)}de>we?z(R,q,k,!0,!1,y):N(_,B,K,q,k,ge,ee,fe,y)},Re=(R,_,B,K,q,k,ge,ee,fe)=>{let de=0;const we=_.length;let y=R.length-1,x=we-1;for(;de<=y&&de<=x;){const U=R[de],Y=_[de]=fe?Ri(_[de]):ri(_[de]);if(Ir(U,Y))v(U,Y,B,null,q,k,ge,ee,fe);else break;de++}for(;de<=y&&de<=x;){const U=R[y],Y=_[x]=fe?Ri(_[x]):ri(_[x]);if(Ir(U,Y))v(U,Y,B,null,q,k,ge,ee,fe);else break;y--,x--}if(de>y){if(de<=x){const U=x+1,Y=U<we?_[U].el:K;for(;de<=x;)v(null,_[de]=fe?Ri(_[de]):ri(_[de]),B,Y,q,k,ge,ee,fe),de++}}else if(de>x)for(;de<=y;)Be(R[de],q,k,!0),de++;else{const U=de,Y=de,le=new Map;for(de=Y;de<=x;de++){const _e=_[de]=fe?Ri(_[de]):ri(_[de]);_e.key!=null&&le.set(_e.key,de)}let Q,I=0;const F=x-Y+1;let ne=!1,oe=0;const J=new Array(F);for(de=0;de<F;de++)J[de]=0;for(de=U;de<=y;de++){const _e=R[de];if(I>=F){Be(_e,q,k,!0);continue}let Ee;if(_e.key!=null)Ee=le.get(_e.key);else for(Q=Y;Q<=x;Q++)if(J[Q-Y]===0&&Ir(_e,_[Q])){Ee=Q;break}Ee===void 0?Be(_e,q,k,!0):(J[Ee-Y]=de+1,Ee>=oe?oe=Ee:ne=!0,v(_e,_[Ee],B,null,q,k,ge,ee,fe),I++)}const me=ne?D_(J):Js;for(Q=me.length-1,de=F-1;de>=0;de--){const _e=Y+de,Ee=_[_e],Se=_[_e+1],He=_e+1<we?Se.el||Dp(Se):K;J[de]===0?v(null,Ee,B,He,q,k,ge,ee,fe):ne&&(Q<0||de!==me[Q]?De(Ee,B,He,2):Q--)}}},De=(R,_,B,K,q=null)=>{const{el:k,type:ge,transition:ee,children:fe,shapeFlag:de}=R;if(de&6){De(R.component.subTree,_,B,K);return}if(de&128){R.suspense.move(_,B,K);return}if(de&64){ge.move(R,_,B,ue);return}if(ge===Nt){i(k,_,B);for(let y=0;y<fe.length;y++)De(fe[y],_,B,K);i(R.anchor,_,B);return}if(ge===sa){b(R,_,B);return}if(K!==2&&de&1&&ee)if(K===0)ee.beforeEnter(k),i(k,_,B),_n(()=>ee.enter(k),q);else{const{leave:y,delayLeave:x,afterLeave:U}=ee,Y=()=>{R.ctx.isUnmounted?s(k):i(k,_,B)},le=()=>{k._isLeaving&&k[$g](!0),y(k,()=>{Y(),U&&U()})};x?x(k,Y,le):le()}else i(k,_,B)},Be=(R,_,B,K=!1,q=!1)=>{const{type:k,props:ge,ref:ee,children:fe,dynamicChildren:de,shapeFlag:we,patchFlag:y,dirs:x,cacheIndex:U}=R;if(y===-2&&(q=!1),ee!=null&&(Ui(),Yr(ee,null,B,R,!0),Oi()),U!=null&&(_.renderCache[U]=void 0),we&256){_.ctx.deactivate(R);return}const Y=we&1&&x,le=!nr(R);let Q;if(le&&(Q=ge&&ge.onVnodeBeforeUnmount)&&ni(Q,_,R),we&6)Ce(R.component,B,K);else{if(we&128){R.suspense.unmount(B,K);return}Y&&cs(R,null,_,"beforeUnmount"),we&64?R.type.remove(R,_,B,ue,K):de&&!de.hasOnce&&(k!==Nt||y>0&&y&64)?z(de,_,B,!1,!0):(k===Nt&&y&384||!q&&we&16)&&z(fe,_,B),K&&Ze(R)}(le&&(Q=ge&&ge.onVnodeUnmounted)||Y)&&_n(()=>{Q&&ni(Q,_,R),Y&&cs(R,null,_,"unmounted")},B)},Ze=R=>{const{type:_,el:B,anchor:K,transition:q}=R;if(_===Nt){et(B,K);return}if(_===sa){M(R);return}const k=()=>{s(B),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(R.shapeFlag&1&&q&&!q.persisted){const{leave:ge,delayLeave:ee}=q,fe=()=>ge(B,k);ee?ee(R.el,k,fe):fe()}else k()},et=(R,_)=>{let B;for(;R!==_;)B=h(R),s(R),R=B;s(_)},Ce=(R,_,B)=>{const{bum:K,scope:q,job:k,subTree:ge,um:ee,m:fe,a:de}=R;xf(fe),xf(de),K&&Za(K),q.stop(),k&&(k.flags|=8,Be(ge,R,_,B)),ee&&_n(ee,_),_n(()=>{R.isUnmounted=!0},_)},z=(R,_,B,K=!1,q=!1,k=0)=>{for(let ge=k;ge<R.length;ge++)Be(R[ge],_,B,K,q)},P=R=>{if(R.shapeFlag&6)return P(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const _=h(R.anchor||R.el),B=_&&_[Kg];return B?h(B):_};let $=!1;const ae=(R,_,B)=>{let K;R==null?_._vnode&&(Be(_._vnode,null,null,!0),K=_._vnode.component):v(_._vnode||null,R,_,null,null,null,B),_._vnode=R,$||($=!0,af(K),ap(),$=!1)},ue={p:v,um:Be,m:De,r:Ze,mt:ie,mc:N,pc:j,pbc:T,n:P,o:n};return{render:ae,hydrate:void 0,createApp:g_(ae)}}function sl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function us({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function L_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ip(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ri(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Ip(o,a)),a.type===Ha&&(a.patchFlag===-1&&(a=s[r]=Ri(a)),a.el=o.el),a.type===Bi&&!a.el&&(a.el=o.el)}}function D_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Lp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lp(e)}function xf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Dp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Dp(e.subTree):null}const Np=n=>n.__isSuspense;function N_(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Gg(n)}const Nt=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),Bi=Symbol.for("v-cmt"),sa=Symbol.for("v-stc"),Zr=[];let Rn=null;function Ke(n=!1){Zr.push(Rn=n?null:[])}function U_(){Zr.pop(),Rn=Zr[Zr.length-1]||null}let lo=1;function xa(n,e=!1){lo+=n,n<0&&Rn&&e&&(Rn.hasOnce=!0)}function Up(n){return n.dynamicChildren=lo>0?Rn||Js:null,U_(),lo>0&&Rn&&Rn.push(n),n}function at(n,e,t,i,s,r){return Up(xe(n,e,t,i,s,r,!0))}function Dn(n,e,t,i,s){return Up(Mt(n,e,t,i,s,!0))}function co(n){return n?n.__v_isVNode===!0:!1}function Ir(n,e){return n.type===e.type&&n.key===e.key}const Op=({key:n})=>n??null,ra=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?kt(n)||tn(n)||Ye(n)?{i:qt,r:n,k:e,f:!!t}:n:null);function xe(n,e=null,t=null,i=0,s=null,r=n===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Op(e),ref:e&&ra(e),scopeId:cp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return a?(wu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=kt(t)?8:16),lo>0&&!o&&Rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Rn.push(l),l}const Mt=O_;function O_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===a_)&&(n=Bi),co(n)){const a=cr(n,e,!0);return t&&wu(a,t),lo>0&&!r&&Rn&&(a.shapeFlag&6?Rn[Rn.indexOf(n)]=a:Rn.push(a)),a.patchFlag=-2,a}if(q_(n)&&(n=n.__vccOpts),e){e=F_(e);let{class:a,style:l}=e;a&&!kt(a)&&(e.class=ai(a)),yt(l)&&(Au(l)&&!$e(l)&&(l=$t({},l)),e.style=Da(l))}const o=kt(n)?1:Np(n)?128:qg(n)?64:yt(n)?4:Ye(n)?2:0;return xe(n,e,t,i,s,o,r,!0)}function F_(n){return n?Au(n)||Tp(n)?$t({},n):n:null}function cr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?B_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Op(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(ra(e)):[r,ra(e)]:ra(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cr(n.ssContent),ssFallback:n.ssFallback&&cr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Eu(u,l.clone(u)),u}function Fp(n=" ",e=0){return Mt(Ha,null,n,e)}function Va(n,e){const t=Mt(sa,null,n);return t.staticCount=e,t}function Mn(n="",e=!1){return e?(Ke(),Dn(Bi,null,n)):Mt(Bi,null,n)}function ri(n){return n==null||typeof n=="boolean"?Mt(Bi):$e(n)?Mt(Nt,null,n.slice()):co(n)?Ri(n):Mt(Ha,null,String(n))}function Ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cr(n)}function wu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),wu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Tp(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),i&64?(t=16,e=[Fp(e)]):t=8);n.children=e,n.shapeFlag|=t}function B_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ai([e.class,i.class]));else if(s==="style")e.style=Da([e.style,i.style]);else if(Ca(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ni(n,e,t,i=null){hi(n,e,7,[t,i])}const k_=Mp();let H_=0;function V_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||k_,r={uid:H_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(i,s),emitsOptions:yp(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=v_.bind(null,r),n.ce&&n.ce(r),r}let en=null;const z_=()=>en||qt;let Ma,lc;{const n=La(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ma=e("__VUE_INSTANCE_SETTERS__",t=>en=t),lc=e("__VUE_SSR_SETTERS__",t=>uo=t)}const Eo=n=>{const e=en;return Ma(n),n.scope.on(),()=>{n.scope.off(),Ma(e)}},Mf=()=>{en&&en.scope.off(),Ma(null)};function Bp(n){return n.vnode.shapeFlag&4}let uo=!1;function G_(n,e=!1,t=!1){e&&lc(e);const{props:i,children:s}=n.vnode,r=Bp(n);E_(n,i,r,e),R_(n,s,t||e);const o=r?W_(n,e):void 0;return e&&lc(!1),o}function W_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,c_);const{setup:i}=t;if(i){Ui();const s=n.setupContext=i.length>1?j_(n):null,r=Eo(n),o=So(i,n,0,[n.props,s]),a=Dd(o);if(Oi(),r(),(a||n.sp)&&!nr(n)&&hp(n),a){if(o.then(Mf,Mf),e)return o.then(l=>{yf(n,l)}).catch(l=>{Ua(l,n,0)});n.asyncDep=o}else yf(n,o)}else kp(n)}function yf(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=ip(e)),kp(n)}function kp(n,e,t){const i=n.type;n.render||(n.render=i.render||ui);{const s=Eo(n);Ui();try{u_(n)}finally{Oi(),s()}}}const X_={get(n,e){return Jt(n,"get",""),n[e]}};function j_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,X_),slots:n.slots,emit:n.emit,expose:e}}function za(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ip(Dg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qr)return Qr[t](n)},has(e,t){return t in e||t in Qr}})):n.proxy}function K_(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function q_(n){return Ye(n)&&"__vccOpts"in n}const Kt=(n,e)=>Bg(n,e,uo);function Hp(n,e,t){try{xa(-1);const i=arguments.length;return i===2?yt(e)&&!$e(e)?co(e)?Mt(n,null,[e]):Mt(n,e):Mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&co(t)&&(t=[t]),Mt(n,e,t))}finally{xa(1)}}const $_="3.5.28";let cc;const Af=typeof window<"u"&&window.trustedTypes;if(Af)try{cc=Af.createPolicy("vue",{createHTML:n=>n})}catch{}const Vp=cc?n=>cc.createHTML(n):n=>n,Y_="http://www.w3.org/2000/svg",Q_="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,Sf=wi&&wi.createElement("template"),Z_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?wi.createElementNS(Y_,n):e==="mathml"?wi.createElementNS(Q_,n):t?wi.createElement(n,{is:t}):wi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>wi.createTextNode(n),createComment:n=>wi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>wi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Sf.innerHTML=Vp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Sf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},J_=Symbol("_vtc");function e0(n,e,t){const i=n[J_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ya=Symbol("_vod"),zp=Symbol("_vsh"),Ef={name:"show",beforeMount(n,{value:e},{transition:t}){n[ya]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Lr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Lr(n,!0),i.enter(n)):i.leave(n,()=>{Lr(n,!1)}):Lr(n,e))},beforeUnmount(n,{value:e}){Lr(n,e)}};function Lr(n,e){n.style.display=e?n[ya]:"none",n[zp]=!e}const t0=Symbol(""),n0=/(?:^|;)\s*display\s*:/;function i0(n,e,t){const i=n.style,s=kt(t);let r=!1;if(t&&!s){if(e)if(kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&oa(i,a,"")}else for(const o in e)t[o]==null&&oa(i,o,"");for(const o in t)o==="display"&&(r=!0),oa(i,o,t[o])}else if(s){if(e!==t){const o=i[t0];o&&(t+=";"+o),i.cssText=t,r=n0.test(t)}}else e&&n.removeAttribute("style");ya in n&&(n[ya]=r?i.display:"",n[zp]&&(i.display="none"))}const Tf=/\s*!important$/;function oa(n,e,t){if($e(t))t.forEach(i=>oa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=s0(n,e);Tf.test(t)?n.setProperty(as(i),t.replace(Tf,""),"important"):n[i]=t}}const bf=["Webkit","Moz","ms"],rl={};function s0(n,e){const t=rl[e];if(t)return t;let i=Bn(e);if(i!=="filter"&&i in n)return rl[e]=i;i=Ia(i);for(let s=0;s<bf.length;s++){const r=bf[s]+i;if(r in n)return rl[e]=r}return e}const wf="http://www.w3.org/1999/xlink";function Rf(n,e,t,i,s,r=fg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wf,e.slice(6,e.length)):n.setAttributeNS(wf,e,t):t==null||r&&!Fd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Yn(t)?String(t):t)}function Cf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Vp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Fd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function r0(n,e,t,i){n.addEventListener(e,t,i)}function o0(n,e,t,i){n.removeEventListener(e,t,i)}const Pf=Symbol("_vei");function a0(n,e,t,i,s=null){const r=n[Pf]||(n[Pf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=l0(e);if(i){const c=r[e]=f0(i,s);r0(n,a,c,l)}else o&&(o0(n,a,o,l),r[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function l0(n){let e;if(If.test(n)){e={};let i;for(;i=n.match(If);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):as(n.slice(2)),e]}let ol=0;const c0=Promise.resolve(),u0=()=>ol||(c0.then(()=>ol=0),ol=Date.now());function f0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hi(h0(i,t.value),e,5,[i])};return t.value=n,t.attached=u0(),t}function h0(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,d0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?e0(n,i,o):e==="style"?i0(n,t,i):Ca(e)?hu(e)||a0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):p0(n,e,i,o))?(Cf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rf(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!kt(i))?Cf(n,Bn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Rf(n,e,i,o))};function p0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lf(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lf(e)&&kt(t)?!1:e in n}const m0=["ctrl","shift","alt","meta"],g0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>m0.some(t=>n[`${t}Key`]&&!e.includes(t))},jt=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=g0[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},_0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yt=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=as(s.key);if(e.some(o=>o===r||_0[o]===r))return n(s)}))},v0=$t({patchProp:d0},Z_);let Df;function x0(){return Df||(Df=P_(v0))}const M0=((...n)=>{const e=x0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=A0(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function y0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function A0(n){return kt(n)?document.querySelector(n):n}function S0(){return Gp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Gp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const E0=typeof Proxy=="function",T0="devtools-plugin:setup",b0="plugin:settings:set";let Is,uc;function w0(){var n;return Is!==void 0||(typeof window<"u"&&window.performance?(Is=!0,uc=window.performance):typeof globalThis<"u"&&(!((n=globalThis.perf_hooks)===null||n===void 0)&&n.performance)?(Is=!0,uc=globalThis.perf_hooks.performance):Is=!1),Is}function R0(){return w0()?uc.now():Date.now()}class C0{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return R0()}},t&&t.on(b0,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function P0(n,e){const t=n,i=Gp(),s=S0(),r=E0&&t.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(T0,n,e);else{const o=r?new C0(t,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}var I0="store";function yr(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function L0(n){return n!==null&&typeof n=="object"}function D0(n){return n&&typeof n.then=="function"}function N0(n,e){return function(){return n(e)}}function Wp(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function Xp(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;Ga(n,t,[],n._modules.root,!0),Ru(n,t,e)}function Ru(n,e,t){var i=n._state,s=n._scope;n.getters={},n._makeLocalGettersCache=Object.create(null);var r=n._wrappedGetters,o={},a={},l=dg(!0);l.run(function(){yr(r,function(c,u){o[u]=N0(c,n),a[u]=Kt(function(){return o[u]()}),Object.defineProperty(n.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),n._state=Ao({data:e}),n._scope=l,n.strict&&k0(n),i&&t&&n._withCommit(function(){i.data=null}),s&&s.stop()}function Ga(n,e,t,i,s){var r=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!r&&!s){var a=Cu(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=U0(n,o,t);i.forEachMutation(function(u,f){var h=o+f;O0(n,h,u,c)}),i.forEachAction(function(u,f){var h=u.root?f:o+f,d=u.handler||u;F0(n,h,d,c)}),i.forEachGetter(function(u,f){var h=o+f;B0(n,h,u,c)}),i.forEachChild(function(u,f){Ga(n,e,t.concat(f),u,s)})}function U0(n,e,t){var i=e==="",s={dispatch:i?n.dispatch:function(r,o,a){var l=Aa(r,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),n.dispatch(f,c)},commit:i?n.commit:function(r,o,a){var l=Aa(r,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),n.commit(f,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return n.getters}:function(){return jp(n,e)}},state:{get:function(){return Cu(n.state,t)}}}),s}function jp(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(t,r,{get:function(){return n.getters[s]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function O0(n,e,t,i){var s=n._mutations[e]||(n._mutations[e]=[]);s.push(function(o){t.call(n,i.state,o)})}function F0(n,e,t,i){var s=n._actions[e]||(n._actions[e]=[]);s.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return D0(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function B0(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(r){return t(i.state,i.getters,r.state,r.getters)})}function k0(n){Ts(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function Cu(n,e){return e.reduce(function(t,i){return t[i]},n)}function Aa(n,e,t){return L0(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var H0="vuex bindings",Nf="vuex:mutations",al="vuex:actions",Ls="vuex",V0=0;function z0(n,e){P0({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[H0]},function(t){t.addTimelineLayer({id:Nf,label:"Vuex Mutations",color:Uf}),t.addTimelineLayer({id:al,label:"Vuex Actions",color:Uf}),t.addInspector({id:Ls,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===Ls)if(i.filter){var s=[];Yp(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[$p(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===Ls){var s=i.nodeId;jp(e,s),i.state=X0(K0(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===Ls){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(Ls),t.sendInspectorState(Ls),t.addTimelineEvent({layerId:Nf,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=V0++,i._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:al,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,t.addTimelineEvent({layerId:al,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var Uf=8702998,G0=6710886,W0=16777215,Kp={label:"namespaced",textColor:W0,backgroundColor:G0};function qp(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function $p(n,e){return{id:e||"root",label:qp(e),tags:n.namespaced?[Kp]:[],children:Object.keys(n._children).map(function(t){return $p(n._children[t],e+t+"/")})}}function Yp(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[Kp]:[]}),Object.keys(e._children).forEach(function(s){Yp(n,e._children[s],t,i+s+"/")})}function X0(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),s={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var r=j0(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?qp(o):o,editable:!1,value:fc(function(){return r[o]})}})}return s}function j0(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=fc(function(){return n[t]})}else e[t]=fc(function(){return n[t]})}),e}function K0(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?n:n.root._children)}function fc(n){try{return n()}catch(e){return e}}var ei=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Qp={namespaced:{configurable:!0}};Qp.namespaced.get=function(){return!!this._rawModule.namespaced};ei.prototype.addChild=function(e,t){this._children[e]=t};ei.prototype.removeChild=function(e){delete this._children[e]};ei.prototype.getChild=function(e){return this._children[e]};ei.prototype.hasChild=function(e){return e in this._children};ei.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};ei.prototype.forEachChild=function(e){yr(this._children,e)};ei.prototype.forEachGetter=function(e){this._rawModule.getters&&yr(this._rawModule.getters,e)};ei.prototype.forEachAction=function(e){this._rawModule.actions&&yr(this._rawModule.actions,e)};ei.prototype.forEachMutation=function(e){this._rawModule.mutations&&yr(this._rawModule.mutations,e)};Object.defineProperties(ei.prototype,Qp);var Rs=function(e){this.register([],e,!1)};Rs.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};Rs.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,s){return t=t.getChild(s),i+(t.namespaced?s+"/":"")},"")};Rs.prototype.update=function(e){Zp([],this.root,e)};Rs.prototype.register=function(e,t,i){var s=this;i===void 0&&(i=!0);var r=new ei(t,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&yr(t.modules,function(a,l){s.register(e.concat(l),a,i)})};Rs.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],s=t.getChild(i);s&&s.runtime&&t.removeChild(i)};Rs.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function Zp(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;Zp(n.concat(i),e.getChild(i),t.modules[i])}}function q0(n){return new An(n)}var An=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Rs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,d){return l.call(o,h,d)},this.commit=function(h,d,g){return c.call(o,h,d,g)},this.strict=s;var u=this._modules.root.state;Ga(this,u,[],this._modules.root),Ru(this,u),i.forEach(function(f){return f(t)})},Pu={state:{configurable:!0}};An.prototype.install=function(e,t){e.provide(t||I0,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&z0(e,this)};Pu.state.get=function(){return this._state.data};Pu.state.set=function(n){};An.prototype.commit=function(e,t,i){var s=this,r=Aa(e,t,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};An.prototype.dispatch=function(e,t){var i=this,s=Aa(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(h){try{i._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,i.state)})}catch{}u(h)},function(h){try{i._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,i.state,h)})}catch{}f(h)})})}};An.prototype.subscribe=function(e,t){return Wp(e,this._subscribers,t)};An.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return Wp(i,this._actionSubscribers,t)};An.prototype.watch=function(e,t,i){var s=this;return Ts(function(){return e(s.state,s.getters)},t,Object.assign({},i))};An.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};An.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),Ga(this,this.state,e,this._modules.get(e),i.preserveState),Ru(this,this.state)};An.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Cu(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),Xp(this)};An.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};An.prototype.hotUpdate=function(e){this._modules.update(e),Xp(this,!0)};An.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(An.prototype,Pu);const Of=n=>Math.max(0,Math.min(1,n)),Jr=q0({state:{loading:{appReady:!1,tasks:{}}},getters:{loadingProgress(n){const e=Object.values(n.loading.tasks);if(e.length===0)return n.loading.appReady?1:0;const t=e.reduce((i,s)=>i+s,0);return Of(t/e.length)},isAppLoading(n){return!n.loading.appReady}},mutations:{markAppReady(n,e=!0){n.loading.appReady=e},registerLoadingTask(n,e){e&&(n.loading.tasks[e]=0)},setLoadingTaskProgress(n,e){const{taskId:t,progress:i}=e;!t||!(t in n.loading.tasks)||(n.loading.tasks[t]=Of(i))},completeLoadingTask(n,e){!e||!(e in n.loading.tasks)||(n.loading.tasks[e]=1)},removeLoadingTask(n,e){!e||!(e in n.loading.tasks)||delete n.loading.tasks[e]},resetLoadingState(n){n.loading.appReady=!1,n.loading.tasks={}}},actions:{},modules:{}}),$0=kn({props:{progress:{type:Number,default:0}},setup(n){const e=Tt(null);let t=0,i=1,s=null;const r=Kt(()=>`${Math.max(0,Math.min(100,Math.round(n.progress)))}%`);function o(){if(!e.value)return;const a=e.value.textContent||"",l=a.split("").map((c,u)=>u===t?i===1?c.toUpperCase():c.toLowerCase():c).join("");e.value.textContent=l,t===a.length-1&&i===1?i=-1:t===0&&i===-1?i=1:t+=i,s=window.setTimeout(o,50)}return Fa(()=>{o()}),Ba(()=>{s!==null&&(window.clearTimeout(s),s=null)}),{loadingText:e,animateLoadingText:o,progressLabel:r}}}),Sn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Y0={class:"loadingWindow"},Q0={class:"container"},Z0={id:"loadingText",ref:"loadingText"},J0={id:"loadingProgress"};function ev(n,e,t,i,s,r){return Ke(),at("div",Y0,[xe("div",Q0,[xe("h1",Z0,"loading...",512),xe("p",J0,vn(n.progressLabel),1)])])}const Iu=Sn($0,[["render",ev],["__scopeId","data-v-9e05d9ea"]]),tv=kn({components:{LoadingAnimate:Iu},data(){return{innerWidth:window.innerWidth,outerWidth:window.outerWidth,innerHeight:window.innerHeight,outerHeight:window.outerHeight,userAgent:navigator.userAgent,product:navigator.product,languages:navigator.languages[0]}},computed:{loadingProgressPercent(){const n=Jr.getters.loadingProgress??0;return Math.max(0,Math.min(100,Math.round(n*100)))}}}),nv={class:"loadingScreen"},iv={id:"loadingContents"},sv={class:"loadingAnimatePanel"};function rv(n,e,t,i,s,r){const o=ln("LoadingAnimate");return Ke(),at("div",nv,[xe("div",iv,[e[0]||(e[0]=xe("pre",null,`######    ##   ###### #    # ######    ##   ###### #    #
  ##     #  #  #    # #    #   ##     #  #  #    # #    #
  ##    #    # # ## # #    #   ##    #    # # ## # #    #
  ##    ###### #   #  #    #   ##    ###### #   #  #    #
  ##    #    # #    # #    #   ##    #    # #    # #    #
  ##    #    # #    # ######   ##    #    # #    # ######
`,-1)),e[1]||(e[1]=xe("pre",null,`             #  #  #  ###### ###### #      ####             
             #  #  #  #    # #    # #      #   #            
             #  #  #  #    # # ## # #      #    #           
             #  #  #  #    # #   #  #      #    #           
             #  #  #  #    # #    # #      #   #            
             #######  ###### #    # ###### ####             
`,-1)),e[2]||(e[2]=xe("div",{class:"container"},[xe("div",{class:"box"},"#"),xe("div",{class:"box"},"#"),xe("div",{class:"box"},"#")],-1)),xe("div",sv,[Mt(o,{progress:n.loadingProgressPercent},null,8,["progress"])])])])}const ov=Sn(tv,[["render",rv],["__scopeId","data-v-1fd4e202"]]),av=kn({components:{LoadingComponent:ov},data(){return{bootstrapFrameId:null}},computed:{loading(){return Jr.getters.isAppLoading}},methods:{toFalse:()=>{Jr.commit("markAppReady",!0)},handleKeyup:function(){this.toFalse()}},mounted(){Jr.commit("resetLoadingState"),document.addEventListener("keyup",this.handleKeyup),this.bootstrapFrameId=window.requestAnimationFrame(()=>{this.toFalse(),this.bootstrapFrameId=null})},beforeUnmount(){document.removeEventListener("keyup",this.handleKeyup),this.bootstrapFrameId!==null&&(window.cancelAnimationFrame(this.bootstrapFrameId),this.bootstrapFrameId=null)}}),lv={class:"appDiv"},cv={class:"flash appDiv",id:"root"},uv={class:"appDiv"};function fv(n,e,t,i,s,r){const o=ln("router-view"),a=ln("LoadingComponent");return Ke(),at("div",lv,[lf(xe("div",cv,[Mt(o)],512),[[Ef,!n.loading]]),lf(xe("div",uv,[Mt(a)],512),[[Ef,n.loading]])])}const hv=Sn(av,[["render",fv]]);const Qs=typeof window<"u";function dv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const _t=Object.assign;function ll(n,e){const t={};for(const i in e){const s=e[i];t[i]=Zn(s)?s.map(n):n(s)}return t}const eo=()=>{},Zn=Array.isArray,pv=/\/$/,mv=n=>n.replace(pv,"");function cl(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xv(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function gv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ff(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function _v(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ur(e.matched[i],t.matched[s])&&Jp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Jp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!vv(n[t],e[t]))return!1;return!0}function vv(n,e){return Zn(n)?Bf(n,e):Zn(e)?Bf(e,n):n===e}function Bf(n,e){return Zn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function xv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var fo;(function(n){n.pop="pop",n.push="push"})(fo||(fo={}));var to;(function(n){n.back="back",n.forward="forward",n.unknown=""})(to||(to={}));function Mv(n){if(!n)if(Qs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),mv(n)}const yv=/^[^#]+#/;function Av(n,e){return n.replace(yv,"#")+e}function Sv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ev(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Sv(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function kf(n,e){return(history.state?history.state.position-e:-1)+n}const hc=new Map;function Tv(n,e){hc.set(n,e)}function bv(n){const e=hc.get(n);return hc.delete(n),e}let wv=()=>location.protocol+"//"+location.host;function em(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ff(l,"")}return Ff(t,n)+i+s}function Rv(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=em(n,location),g=t.value,v=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:fo.pop,direction:m?m>0?to.forward:to.back:to.unknown})})};function l(){o=t.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(_t({},h.state,{scroll:Wa()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Hf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Wa():null}}function Cv(n){const{history:e,location:t}=window,i={value:em(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:wv()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=_t({},e.state,Hf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=_t({},s.value,e.state,{forward:l,scroll:Wa()});r(u.current,u,!0);const f=_t({},Hf(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Pv(n){n=Mv(n);const e=Cv(n),t=Rv(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=_t({location:"",base:n,go:i,createHref:Av.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Iv(n){return typeof n=="string"||n&&typeof n=="object"}function tm(n){return typeof n=="string"||typeof n=="symbol"}const Gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nm=Symbol("");var Vf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Vf||(Vf={}));function fr(n,e){return _t(new Error,{type:n,[nm]:!0},e)}function xi(n,e){return n instanceof Error&&nm in n&&(e==null||!!(n.type&e))}const zf="[^/]+?",Lv={sensitive:!1,strict:!1,start:!0,end:!0},Dv=/[.+*?^${}()[\]/\\]/g;function Nv(n,e){const t=_t({},Lv,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Dv,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=h;r.push({name:g,repeatable:v,optional:m});const A=p||zf;if(A!==zf){d+=10;try{new RegExp(`(${A})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+M.message)}}let b=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),v&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(Zn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=Zn(p)?p.join("/"):p;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Uv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ov(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Uv(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Gf(i))return 1;if(Gf(s))return-1}return s.length-i.length}function Gf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Fv={type:0,value:""},Bv=/[a-zA-Z0-9_]/;function kv(n){if(!n)return[[]];if(n==="/")return[[Fv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Bv.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Hv(n,e,t){const i=Nv(kv(n.path),t),s=_t(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Vv(n,e){const t=[],i=new Map;e=jf({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,h){const d=!h,g=zv(u);g.aliasOf=h&&h.record;const v=jf(e,u),m=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of b)m.push(_t({},g,{components:h?h.record.components:g.components,path:M,aliasOf:h?h.record:g}))}let p,A;for(const b of m){const{path:M}=b;if(f&&M[0]!=="/"){const w=f.record.path,C=w[w.length-1]==="/"?"":"/";b.path=f.record.path+(M&&C+M)}if(p=Hv(b,f,v),h?h.alias.push(p):(A=A||p,A!==p&&A.alias.push(p),d&&u.name&&!Xf(p)&&o(u.name)),g.children){const w=g.children;for(let C=0;C<w.length;C++)r(w[C],p,h&&h.children[C])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return A?()=>{o(A)}:eo}function o(u){if(tm(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&Ov(u,t[f])>=0&&(u.record.path!==t[f].record.path||!im(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Xf(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw fr(1,{location:u});v=h.record.name,d=_t(Wf(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Wf(u.params,h.keys.map(A=>A.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(A=>A.re.test(g)),h&&(d=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(A=>A.re.test(f.path)),!h)throw fr(1,{location:u,currentLocation:f});v=h.record.name,d=_t({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:m,meta:Wv(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Wf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function zv(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Gv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Gv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Xf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Wv(n){return n.reduce((e,t)=>_t(e,t.meta),{})}function jf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function im(n,e){return e.children.some(t=>t===n||im(n,t))}const sm=/#/g,Xv=/&/g,jv=/\//g,Kv=/=/g,qv=/\?/g,rm=/\+/g,$v=/%5B/g,Yv=/%5D/g,om=/%5E/g,Qv=/%60/g,am=/%7B/g,Zv=/%7C/g,lm=/%7D/g,Jv=/%20/g;function Lu(n){return encodeURI(""+n).replace(Zv,"|").replace($v,"[").replace(Yv,"]")}function ex(n){return Lu(n).replace(am,"{").replace(lm,"}").replace(om,"^")}function dc(n){return Lu(n).replace(rm,"%2B").replace(Jv,"+").replace(sm,"%23").replace(Xv,"%26").replace(Qv,"`").replace(am,"{").replace(lm,"}").replace(om,"^")}function tx(n){return dc(n).replace(Kv,"%3D")}function nx(n){return Lu(n).replace(sm,"%23").replace(qv,"%3F")}function ix(n){return n==null?"":nx(n).replace(jv,"%2F")}function Sa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function sx(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(rm," "),o=r.indexOf("="),a=Sa(o<0?r:r.slice(0,o)),l=o<0?null:Sa(r.slice(o+1));if(a in e){let c=e[a];Zn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Kf(n){let e="";for(let t in n){const i=n[t];if(t=tx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Zn(i)?i.map(r=>r&&dc(r)):[i&&dc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function rx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Zn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const ox=Symbol(""),qf=Symbol(""),Du=Symbol(""),cm=Symbol(""),pc=Symbol("");function Dr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ji(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(fr(4,{from:t,to:e})):f instanceof Error?a(f):Iv(f)?a(fr(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ul(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ax(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ji(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=dv(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ji(h,t,i,r,o)()}))}}return s}function ax(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function $f(n){const e=Di(Du),t=Di(cm),i=Kt(()=>e.resolve(Ot(n.to))),s=Kt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ur.bind(null,u));if(h>-1)return h;const d=Yf(l[c-2]);return c>1&&Yf(u)===d&&f[f.length-1].path!==d?f.findIndex(ur.bind(null,l[c-2])):h}),r=Kt(()=>s.value>-1&&fx(t.params,i.value.params)),o=Kt(()=>s.value>-1&&s.value===t.matched.length-1&&Jp(t.params,i.value.params));function a(l={}){return ux(l)?e[Ot(n.replace)?"replace":"push"](Ot(n.to)).catch(eo):Promise.resolve()}return{route:i,href:Kt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const lx=kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$f,setup(n,{slots:e}){const t=Ao($f(n)),{options:i}=Di(Du),s=Kt(()=>({[Qf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Qf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Hp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),cx=lx;function ux(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function fx(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Zn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Yf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Qf=(n,e,t)=>n??e??t,hx=kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Di(pc),s=Kt(()=>n.route||i.value),r=Di(qf,0),o=Kt(()=>{let c=Ot(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Kt(()=>s.value.matched[o.value]);ia(qf,Kt(()=>o.value+1)),ia(ox,a),ia(pc,s);const l=Tt();return Ts(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ur(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Zf(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Hp(h,_t({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Zf(t.default,{Component:m,route:c})||m}}});function Zf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const dx=hx;function px(n){const e=Vv(n.routes,n),t=n.parseQuery||sx,i=n.stringifyQuery||Kf,s=n.history,r=Dr(),o=Dr(),a=Dr(),l=Ng(Gi);let c=Gi;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,P=>""+P),f=ll.bind(null,ix),h=ll.bind(null,Sa);function d(P,$){let ae,ue;return tm(P)?(ae=e.getRecordMatcher(P),ue=$):ue=P,e.addRoute(ue,ae)}function g(P){const $=e.getRecordMatcher(P);$&&e.removeRoute($)}function v(){return e.getRoutes().map(P=>P.record)}function m(P){return!!e.getRecordMatcher(P)}function p(P,$){if($=_t({},$||l.value),typeof P=="string"){const B=cl(t,P,$.path),K=e.resolve({path:B.path},$),q=s.createHref(B.fullPath);return _t(B,K,{params:h(K.params),hash:Sa(B.hash),redirectedFrom:void 0,href:q})}let ae;if("path"in P)ae=_t({},P,{path:cl(t,P.path,$.path).path});else{const B=_t({},P.params);for(const K in B)B[K]==null&&delete B[K];ae=_t({},P,{params:f(B)}),$.params=f($.params)}const ue=e.resolve(ae,$),Pe=P.hash||"";ue.params=u(h(ue.params));const R=gv(i,_t({},P,{hash:ex(Pe),path:ue.path})),_=s.createHref(R);return _t({fullPath:R,hash:Pe,query:i===Kf?rx(P.query):P.query||{}},ue,{redirectedFrom:void 0,href:_})}function A(P){return typeof P=="string"?cl(t,P,l.value.path):_t({},P)}function b(P,$){if(c!==P)return fr(8,{from:$,to:P})}function M(P){return L(P)}function w(P){return M(_t(A(P),{replace:!0}))}function C(P){const $=P.matched[P.matched.length-1];if($&&$.redirect){const{redirect:ae}=$;let ue=typeof ae=="function"?ae(P):ae;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=A(ue):{path:ue},ue.params={}),_t({query:P.query,hash:P.hash,params:"path"in ue?{}:P.params},ue)}}function L(P,$){const ae=c=p(P),ue=l.value,Pe=P.state,R=P.force,_=P.replace===!0,B=C(ae);if(B)return L(_t(A(B),{state:typeof B=="object"?_t({},Pe,B.state):Pe,force:R,replace:_}),$||ae);const K=ae;K.redirectedFrom=$;let q;return!R&&_v(i,ue,ae)&&(q=fr(16,{to:K,from:ue}),De(ue,ue,!0,!1)),(q?Promise.resolve(q):T(K,ue)).catch(k=>xi(k)?xi(k,2)?k:Re(k):j(k,K,ue)).then(k=>{if(k){if(xi(k,2))return L(_t({replace:_},A(k.to),{state:typeof k.to=="object"?_t({},Pe,k.to.state):Pe,force:R}),$||K)}else k=W(K,ue,!0,_,Pe);return D(K,ue,k),k})}function N(P,$){const ae=b(P,$);return ae?Promise.reject(ae):Promise.resolve()}function S(P){const $=et.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(P):P()}function T(P,$){let ae;const[ue,Pe,R]=mx(P,$);ae=ul(ue.reverse(),"beforeRouteLeave",P,$);for(const B of ue)B.leaveGuards.forEach(K=>{ae.push(Ji(K,P,$))});const _=N.bind(null,P,$);return ae.push(_),z(ae).then(()=>{ae=[];for(const B of r.list())ae.push(Ji(B,P,$));return ae.push(_),z(ae)}).then(()=>{ae=ul(Pe,"beforeRouteUpdate",P,$);for(const B of Pe)B.updateGuards.forEach(K=>{ae.push(Ji(K,P,$))});return ae.push(_),z(ae)}).then(()=>{ae=[];for(const B of R)if(B.beforeEnter)if(Zn(B.beforeEnter))for(const K of B.beforeEnter)ae.push(Ji(K,P,$));else ae.push(Ji(B.beforeEnter,P,$));return ae.push(_),z(ae)}).then(()=>(P.matched.forEach(B=>B.enterCallbacks={}),ae=ul(R,"beforeRouteEnter",P,$),ae.push(_),z(ae))).then(()=>{ae=[];for(const B of o.list())ae.push(Ji(B,P,$));return ae.push(_),z(ae)}).catch(B=>xi(B,8)?B:Promise.reject(B))}function D(P,$,ae){a.list().forEach(ue=>S(()=>ue(P,$,ae)))}function W(P,$,ae,ue,Pe){const R=b(P,$);if(R)return R;const _=$===Gi,B=Qs?history.state:{};ae&&(ue||_?s.replace(P.fullPath,_t({scroll:_&&B&&B.scroll},Pe)):s.push(P.fullPath,Pe)),l.value=P,De(P,$,ae,_),Re()}let Z;function ie(){Z||(Z=s.listen((P,$,ae)=>{if(!Ce.listening)return;const ue=p(P),Pe=C(ue);if(Pe){L(_t(Pe,{replace:!0}),ue).catch(eo);return}c=ue;const R=l.value;Qs&&Tv(kf(R.fullPath,ae.delta),Wa()),T(ue,R).catch(_=>xi(_,12)?_:xi(_,2)?(L(_.to,ue).then(B=>{xi(B,20)&&!ae.delta&&ae.type===fo.pop&&s.go(-1,!1)}).catch(eo),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),j(_,ue,R))).then(_=>{_=_||W(ue,R,!1),_&&(ae.delta&&!xi(_,8)?s.go(-ae.delta,!1):ae.type===fo.pop&&xi(_,20)&&s.go(-1,!1)),D(ue,R,_)}).catch(eo)}))}let ce=Dr(),te=Dr(),he;function j(P,$,ae){Re(P);const ue=te.list();return ue.length?ue.forEach(Pe=>Pe(P,$,ae)):console.error(P),Promise.reject(P)}function Me(){return he&&l.value!==Gi?Promise.resolve():new Promise((P,$)=>{ce.add([P,$])})}function Re(P){return he||(he=!P,ie(),ce.list().forEach(([$,ae])=>P?ae(P):$()),ce.reset()),P}function De(P,$,ae,ue){const{scrollBehavior:Pe}=n;if(!Qs||!Pe)return Promise.resolve();const R=!ae&&bv(kf(P.fullPath,0))||(ue||!ae)&&history.state&&history.state.scroll||null;return rp().then(()=>Pe(P,$,R)).then(_=>_&&Ev(_)).catch(_=>j(_,P,$))}const Be=P=>s.go(P);let Ze;const et=new Set,Ce={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:n,push:M,replace:w,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:Me,install(P){const $=this;P.component("RouterLink",cx),P.component("RouterView",dx),P.config.globalProperties.$router=$,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(l)}),Qs&&!Ze&&l.value===Gi&&(Ze=!0,M(s.location).catch(Pe=>{}));const ae={};for(const Pe in Gi)Object.defineProperty(ae,Pe,{get:()=>l.value[Pe],enumerable:!0});P.provide(Du,$),P.provide(cm,tp(ae)),P.provide(pc,l);const ue=P.unmount;et.add(P),P.unmount=function(){et.delete(P),et.size<1&&(c=Gi,Z&&Z(),Z=null,l.value=Gi,Ze=!1,he=!1),ue()}}};function z(P){return P.reduce(($,ae)=>$.then(()=>S(ae)),Promise.resolve())}return Ce}function mx(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>ur(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ur(c,l))||s.push(l))}return[t,i,s]}const gx={},_x={id:"header"};function vx(n,e,t,i,s,r){return Ke(),at("div",_x,[...e[0]||(e[0]=[xe("p",null,"tarutaru world",-1)])])}const xx=Sn(gx,[["render",vx],["__scopeId","data-v-7752e365"]]),wt=16,mc=70,gc=124,Wr=[{name:"Minor Pentatonic",intervals:[0,3,5,7,10]},{name:"Dorian",intervals:[0,2,3,5,7,9,10]},{name:"Phrygian",intervals:[0,1,3,5,7,8,10]},{name:"Aeolian",intervals:[0,2,3,5,7,8,10]}],_c=[{midi:33,label:"A1"},{midi:35,label:"B1"},{midi:36,label:"C2"},{midi:38,label:"D2"},{midi:40,label:"E2"}],Mx=.6,yx=50,Ax=.65,Jf=.12,Sx=1200,Ex=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function Ds(n,e,t){return Math.max(e,Math.min(t,n))}function eh(n){return n[Math.floor(Math.random()*n.length)]}function th(n){return 440*2**((n-69)/12)}function Tx(n){const e=(n%12+12)%12,t=Math.floor(n/12)-1;return`${Ex[e]}${t}`}function nh(n,e){const t=Math.max(1,Math.min(e,n)),i=[];for(let s=0;s<n;s+=1)i.push(s*t%n<t);return i}function ih(n,e){const t=(e%n.length+n.length)%n.length;return t===0?[...n]:n.slice(n.length-t).concat(n.slice(0,n.length-t))}function bx(n){const t=new Float32Array(2048),i=Math.max(.1,n);for(let s=0;s<2048;s+=1){const r=s/2047*2-1;t[s]=(1+i)*r/(1+i*Math.abs(r))}return t}function wx(n){const e=Math.floor(n.sampleRate*1.2),t=n.createBuffer(1,e,n.sampleRate);for(let i=0;i<t.numberOfChannels;i+=1){const s=t.getChannelData(i);for(let r=0;r<e;r+=1){const a=(1-r/e)**2.5;s[r]=(Math.random()*2-1)*a}}return t}function Rx(){const n=Tt(88),e=Tt(!1),t=Tt(""),i=Tt(Wr[0].name),s=Tt(_c[2].midi),r=Tt(-1),o=Tt(Array(wt).fill(!1)),a=Tt(Array(wt).fill(!1)),l=Tt(Array(wt).fill(!1)),c=Tt(Array(wt).fill(null)),u=Tt(Array(wt).fill(null)),f=Tt({low:0,mid:0,high:0,rms:0,flux:0,beat:0}),h=Kt(()=>Wr.find(F=>F.name===i.value)??Wr[0]),d=Tt([0,-2,-5,-7]),g=Tt(0),v=Tt(null),m=Tt(null),p=Tt(null),A=Tt(null),b=Tt(null),M=Tt(null),w=Tt(0),C=Tt(0),L=new Set;let N=null,S=new Uint8Array(0),T=new Uint8Array(0),D=new Float32Array(0);Ts(n,I=>{const F=Ds(Math.round(I),mc,gc);I!==F&&(n.value=F)});function W(I){Number.isFinite(I)&&(n.value=Ds(Math.round(I),mc,gc))}function Z(I){_c.some(ne=>ne.midi===I)&&(s.value=I)}function ie(I){Wr.some(ne=>ne.name===I)&&(i.value=I)}function ce(I){return I==="kick"?o.value:I==="snare"?a.value:l.value}function te(I){return I==="bass"?c.value:u.value}function he(I){return I==="bass"?{velocity:.82,gate:.84}:{velocity:.58,gate:.54}}function j(I,F){if(F<0||F>=wt)return;const ne=ce(I);ne[F]=!ne[F]}function Me(I,F,ne){F<0||F>=wt||(ce(I)[F]=ne)}function Re(I,F,ne){if(F<0||F>=wt)return;const oe=te(I);if(ne===null){oe[F]=null;return}const J=he(I),me=oe[F];oe[F]={midi:ne,velocity:me?.velocity??J.velocity,gate:me?.gate??J.gate}}function De(){const I=Array(wt).fill(!1);I[0]=!0,I[7]=!0,Math.random()>.32&&(I[10]=!0);for(const F of[12,14])Math.random()>.64&&(I[F]=!0);return I}function Be(){const I=Array(wt).fill(!1);return I[4]=!0,I[12]=!0,Math.random()>.62&&(I[14]=!0),I}function Ze(){const I=7+Math.floor(Math.random()*4);return ih(nh(wt,I),Math.floor(Math.random()*wt)).map((ne,oe)=>{if(!ne)return!1;const J=oe%2===0?.72:.52;return Math.random()<J})}function et(I,F){const ne=Array(wt).fill(null);for(let oe=0;oe<wt;oe+=1){const J=oe%4===0;if(!(J||oe%8===6&&Math.random()>.58||oe%8===2&&Math.random()>.82))continue;const _e=Math.min(J?3:4,I.length-1),Ee=J?I[Math.floor(Math.random()*(_e+1))]:I[Math.floor(Math.random()*Math.min(3,_e+1))],Se=!J&&Math.random()>.9?12:0;ne[oe]={midi:F+Ee+Se,velocity:J?.82:.58+Math.random()*.2,gate:J?1.25:.7+Math.random()*.38}}return ne}function Ce(I,F){const ne=Array(wt).fill(null),oe=4+Math.floor(Math.random()*3);let J=nh(wt,oe);Math.random()>.5&&(J=ih(J,1+Math.floor(Math.random()*7)));let me=Math.floor(Math.random()*I.length);for(let _e=0;_e<wt;_e+=1){if(!J[_e])continue;me=Ds(me+eh([-1,0,0,1,2]),0,I.length-1);const Ee=Math.random()>.66?24:12;ne[_e]={midi:F+I[me]+Ee,velocity:.32+Math.random()*.28,gate:.52+Math.random()*.6}}return ne}function z(){return eh([[0,-2,-5,-7],[0,-4,-2,-7],[0,-5,-7,-10],[0,-3,-5,-2]])}function P(){o.value=Array(wt).fill(!1),a.value=Array(wt).fill(!1),l.value=Array(wt).fill(!1),c.value=Array(wt).fill(null),u.value=Array(wt).fill(null)}function $(){const I=h.value.intervals,F=s.value;d.value=[...z()],o.value=De(),a.value=Be(),l.value=Ze(),c.value=et(I,F),u.value=Ce(I,F)}function ae(){return 60/n.value/4}function ue(I){const F=I.createBuffer(1,I.sampleRate,I.sampleRate),ne=F.getChannelData(0);for(let oe=0;oe<ne.length;oe+=1)ne[oe]=Math.random()*2-1;return F}function Pe(I){const F=h.value.intervals,ne=F.length,oe=(I%ne+ne)%ne,J=Math.floor(I/ne);return F[oe]+J*12}async function R(){if(v.value){v.value.state==="suspended"&&await v.value.resume();return}const I=new AudioContext,F=new DynamicsCompressorNode(I,{threshold:-18,knee:24,ratio:4,attack:.003,release:.26}),ne=new AnalyserNode(I,{fftSize:512,smoothingTimeConstant:.84}),oe=new GainNode(I,{gain:1e-4}),J=new GainNode(I,{gain:1}),me=new WaveShaperNode(I,{curve:bx(2.4),oversample:"2x"}),_e=new BiquadFilterNode(I,{type:"lowpass",frequency:6900,Q:.38}),Ee=new DelayNode(I,{delayTime:.33}),Se=new GainNode(I,{gain:.28}),He=new BiquadFilterNode(I,{type:"lowpass",frequency:2500,Q:.2}),O=new GainNode(I,{gain:.22}),ye=new ConvolverNode(I,{buffer:wx(I)}),be=new GainNode(I,{gain:.2}),Le=new DelayNode(I,{delayTime:.018}),ve=new GainNode(I,{gain:.11}),pe=new OscillatorNode(I,{type:"sine",frequency:.21}),Ue=new GainNode(I,{gain:.0055});oe.connect(J),J.connect(me),me.connect(_e),_e.connect(F),F.connect(ne),ne.connect(I.destination),oe.connect(Ee),Ee.connect(He),He.connect(Se),Se.connect(Ee),He.connect(O),O.connect(J),oe.connect(ye),ye.connect(be),be.connect(J),oe.connect(Le),Le.connect(ve),ve.connect(J),pe.connect(Ue),Ue.connect(Le.delayTime),pe.start(),v.value=I,m.value=oe,p.value=J,A.value=ne,b.value=ue(I)}function _(I,F){const ne=v.value;if(!ne){I();return}const oe=Math.max(0,(F-ne.currentTime)*1e3),J=window.setTimeout(()=>{L.delete(J),I()},oe);L.add(J)}function B(){for(const I of L)window.clearTimeout(I);L.clear()}function K(I,F,ne){const oe=v.value,J=m.value;if(!oe||!J)return;const me=new OscillatorNode(oe,{type:ne.wave,frequency:th(I.midi)}),_e=new BiquadFilterNode(oe,{type:ne.filterType,frequency:ne.filterBase,Q:ne.filterQ}),Ee=new GainNode(oe,{gain:0}),Se=new StereoPannerNode(oe,{pan:Ds(ne.pan,-1,1)});me.connect(_e),_e.connect(Ee),Ee.connect(Se),Se.connect(J);let He=null;ne.unisonDetune!==void 0&&(He=new OscillatorNode(oe,{type:ne.wave,frequency:th(I.midi),detune:ne.unisonDetune}),He.connect(_e));const O=Math.max(.05,ae()*I.gate),ye=Math.max(.05,I.velocity*ne.level),be=Math.sin(F*.53)*3.4,Le=Math.cos(F*.34)*2.1;Ee.gain.setValueAtTime(1e-4,F),Ee.gain.linearRampToValueAtTime(ye,F+ne.attack),Ee.gain.exponentialRampToValueAtTime(1e-4,F+O),me.detune.setValueAtTime(be+Le,F),_e.frequency.setValueAtTime(ne.filterBase,F),_e.frequency.exponentialRampToValueAtTime(ne.filterPeak,F+Math.min(O,.12)),me.start(F),me.stop(F+O+.05),He&&(He.start(F),He.stop(F+O+.05))}function q(I){const F=v.value,ne=m.value;if(!F||!ne)return;const oe=new OscillatorNode(F,{type:"sine"}),J=new GainNode(F,{gain:0});oe.connect(J),J.connect(ne),oe.frequency.setValueAtTime(150,I),oe.frequency.exponentialRampToValueAtTime(46,I+.13),J.gain.setValueAtTime(1e-4,I),J.gain.exponentialRampToValueAtTime(.95,I+.012),J.gain.exponentialRampToValueAtTime(1e-4,I+.17),oe.start(I),oe.stop(I+.2);const me=p.value;me&&(me.gain.cancelScheduledValues(I),me.gain.setValueAtTime(me.gain.value,I),me.gain.linearRampToValueAtTime(.66,I+.012),me.gain.exponentialRampToValueAtTime(1,I+.24))}function k(I){const F=v.value,ne=m.value,oe=b.value;if(!F||!ne||!oe)return;const J=new AudioBufferSourceNode(F,{buffer:oe}),me=new BiquadFilterNode(F,{type:"highpass",frequency:1800,Q:.7}),_e=new GainNode(F,{gain:0});J.connect(me),me.connect(_e),_e.connect(ne),_e.gain.setValueAtTime(1e-4,I),_e.gain.exponentialRampToValueAtTime(.56,I+.005),_e.gain.exponentialRampToValueAtTime(1e-4,I+.16);const Ee=new OscillatorNode(F,{type:"triangle",frequency:220}),Se=new GainNode(F,{gain:0});Ee.connect(Se),Se.connect(ne),Ee.frequency.exponentialRampToValueAtTime(150,I+.1),Se.gain.setValueAtTime(1e-4,I),Se.gain.exponentialRampToValueAtTime(.3,I+.007),Se.gain.exponentialRampToValueAtTime(1e-4,I+.13),J.start(I),J.stop(I+.18),Ee.start(I),Ee.stop(I+.14)}function ge(I){const F=v.value,ne=m.value,oe=b.value;if(!F||!ne||!oe)return;const J=new AudioBufferSourceNode(F,{buffer:oe}),me=new BiquadFilterNode(F,{type:"highpass",frequency:6500,Q:.9}),_e=new GainNode(F,{gain:0});J.connect(me),me.connect(_e),_e.connect(ne),_e.gain.setValueAtTime(1e-4,I),_e.gain.exponentialRampToValueAtTime(.15,I+.003),_e.gain.exponentialRampToValueAtTime(1e-4,I+.05),J.start(I),J.stop(I+.06)}function ee(I,F){const ne=[0,2,4];for(let oe=0;oe<ne.length;oe+=1){const J=I+Pe(ne[oe])+12;K({midi:J,velocity:.38-oe*.03,gate:1.75},F+oe*.01,{wave:"triangle",level:.24,filterType:"lowpass",filterBase:680,filterPeak:1850,filterQ:1.4,attack:.065,pan:-.35+oe*.24})}}function fe(I,F){_(()=>{r.value=I},F)}function de(I,F){if(I%4===0){const J=Math.floor(I/4)%d.value.length,me=s.value+d.value[J];ee(me,F)}o.value[I]&&q(F),a.value[I]&&k(F),l.value[I]&&ge(F);const ne=c.value[I];ne&&K(ne,F,{wave:"sawtooth",level:.5,filterType:"lowpass",filterBase:280,filterPeak:760,filterQ:6,attack:.006,pan:-.15});const oe=u.value[I];oe&&K(oe,F,{wave:"square",level:.3,filterType:"bandpass",filterBase:900,filterPeak:2200,filterQ:9,attack:.004,pan:.2}),fe(I,F)}function we(){const I=v.value;if(!I||!e.value)return;if(I.state!=="running"){I.resume();return}const F=ae();if(w.value>0&&w.value<I.currentTime-F*2){const oe=Math.floor((I.currentTime-w.value)/F);oe>0&&(C.value=(C.value+oe)%wt),w.value=I.currentTime+.03}let ne=0;for(;w.value<I.currentTime+Mx;){const oe=C.value;de(oe,w.value);const J=ae(),me=oe%2===0?1-Jf:1+Jf;if(w.value+=J*me,C.value=(C.value+1)%wt,ne+=1,ne>wt*8)break}}async function y(){try{t.value="",await R();const I=v.value;if(!I)return;I.state==="suspended"&&await I.resume(),N!==null&&(window.clearTimeout(N),N=null);const F=m.value;F&&(F.gain.cancelScheduledValues(I.currentTime),F.gain.setValueAtTime(Math.max(1e-4,F.gain.value),I.currentTime),F.gain.exponentialRampToValueAtTime(Ax,I.currentTime+.02)),e.value=!0,C.value=0,w.value=I.currentTime+.05,M.value!==null&&window.clearInterval(M.value),we(),M.value=window.setInterval(we,yx)}catch{e.value=!1,t.value="Audio initialization failed. Browser autoplay settings might block playback."}}function x(){e.value=!1;const I=v.value,F=m.value;I&&F&&(F.gain.cancelScheduledValues(I.currentTime),F.gain.setValueAtTime(Math.max(1e-4,F.gain.value),I.currentTime),F.gain.exponentialRampToValueAtTime(1e-4,I.currentTime+.015)),M.value!==null&&(window.clearInterval(M.value),M.value=null),B(),r.value=-1}async function U(){if(e.value){x();return}await y()}function Y(){const I=A.value;if(!I){const Ve=f.value.beat*.9;return f.value={...f.value,low:f.value.low*.85,mid:f.value.mid*.85,high:f.value.high*.85,rms:f.value.rms*.84,flux:f.value.flux*.82,beat:Ve},f.value}S.length!==I.frequencyBinCount&&(S=new Uint8Array(I.frequencyBinCount),D=new Float32Array(I.frequencyBinCount)),T.length!==I.fftSize&&(T=new Uint8Array(I.fftSize)),I.getByteFrequencyData(S),I.getByteTimeDomainData(T);let F=0,ne=0,oe=0,J=0,me=0;const _e=S.length,Ee=Math.max(1,Math.floor(_e*.12)),Se=Ee,He=Math.max(Se+1,Math.floor(_e*.45));for(let Ve=0;Ve<_e;Ve+=1){const it=S[Ve]/255;Ve<Ee?F+=it:Ve<He?ne+=it:oe+=it;const V=it-D[Ve];V>0&&(J+=V),D[Ve]=it}for(let Ve=0;Ve<T.length;Ve+=1){const it=(T[Ve]-128)/128;me+=it*it}const O=F/Ee,ye=ne/Math.max(1,He-Se),be=oe/Math.max(1,_e-He),Le=J/_e,ve=Math.sqrt(me/T.length),pe=Ds(O*.6+Le*2.2+ve*.5,0,1.4),Ue=Ds(f.value.beat*.84+pe,0,1.8);return f.value={low:f.value.low*.66+O*.34,mid:f.value.mid*.66+ye*.34,high:f.value.high*.66+be*.34,rms:f.value.rms*.7+ve*.3,flux:f.value.flux*.62+Le*.38,beat:Ue},f.value}function le(){N!==null&&(window.clearTimeout(N),N=null),g.value+=1}function Q(){g.value=Math.max(0,g.value-1),!(g.value>0)&&(N!==null&&window.clearTimeout(N),N=window.setTimeout(()=>{if(N=null,g.value>0)return;x();const I=v.value;I&&I.close(),v.value=null,m.value=null,p.value=null,A.value=null,b.value=null,f.value={low:0,mid:0,high:0,rms:0,flux:0,beat:0}},Sx))}return $(),{bpm:n,isRunning:e,errorMessage:t,selectedScaleName:i,rootMidi:s,playheadStep:r,kickSteps:o,snareSteps:a,hatSteps:l,bassSteps:c,leadSteps:u,selectedScale:h,analysisFrame:f,setBpm:W,setRoot:Z,setScale:ie,toggleDrumStep:j,setDrumStep:Me,setMelodyStep:Re,clearRiff:P,regenerateRiff:$,togglePlayback:U,startPlayback:y,stopPlayback:x,sampleAudioFrame:Y,attachConsumer:le,detachConsumer:Q}}let fl=null;function um(){return fl||(fl=Rx()),fl}const Cx={class:"algorave-editor"},Px={class:"transport-panel"},Ix={class:"transport-row"},Lx={class:"control-row"},Dx={for:"algorave-bpm"},Nx=["value","min","max"],Ux={class:"control-row selectors"},Ox=["value"],Fx=["value"],Bx=["value"],kx=["value"],Hx={class:"status-line"},Vx={key:0,class:"error-line"},zx={class:"grid-panel"},Gx={class:"editor-grid"},Wx={class:"track-header"},Xx=["aria-label","onClick"],jx=["value","onChange"],Kx=["value"],qx=["value","onChange"],$x=["value"],Yx=kn({__name:"AlgoraveContent",setup(n){const e=um(),t=e.bpm,i=e.isRunning,s=e.errorMessage,r=e.selectedScaleName,o=e.rootMidi,a=e.playheadStep,l=e.selectedScale,c=e.kickSteps,u=e.snareSteps,f=e.hatSteps,h=e.bassSteps,d=e.leadSteps,g=Wr,v=_c,m=mc,p=gc,A=Array.from({length:wt},(Ce,z)=>z),b=A.map(Ce=>Ce+1),M=[{key:"kick",label:"Kick"},{key:"snare",label:"Snare"},{key:"hat",label:"Hat"}],w=Kt(()=>a.value<0?"--":String(a.value+1).padStart(2,"0")),C=Kt(()=>N(l.value.intervals,o.value,[0,1])),L=Kt(()=>N(l.value.intervals,o.value,[1,2]));Fa(()=>{e.attachConsumer()}),Ba(()=>{e.detachConsumer()});function N(Ce,z,P){const $=[];for(const ae of P)for(let ue=0;ue<Ce.length;ue+=1){const Pe=z+Ce[ue]+ae*12;$.push({value:String(Pe),label:`${ue+1}:${Tx(Pe)}`})}return $}function S(Ce){return Ce==="kick"?c.value:Ce==="snare"?u.value:f.value}function T(Ce){return Ce==="bass"?h.value:d.value}function D(Ce){return i.value&&a.value===Ce}function W(Ce){return{"playhead-cell":D(Ce),"bar-start-cell":Ce%4===0}}function Z(Ce,z){return S(Ce)[z]}function ie(Ce,z){return{"drum-active":Z(Ce,z),"drum-playhead":D(z)}}function ce(Ce,z){return{"note-filled":T(Ce)[z]!==null,"playhead-cell":D(z),"bar-start-cell":z%4===0}}function te(Ce,z){e.toggleDrumStep(Ce,z)}function he(Ce,z){const P=T(Ce)[z];return P?String(P.midi):"rest"}function j(Ce,z,P){const $=P.target;if(!$)return;if($.value==="rest"){e.setMelodyStep(Ce,z,null);return}const ae=Number.parseInt($.value,10);Number.isFinite(ae)&&e.setMelodyStep(Ce,z,ae)}function Me(Ce){const z=Ce.target;if(!z)return;const P=Number.parseInt(z.value,10);Number.isFinite(P)&&e.setBpm(P)}function Re(Ce){const z=Ce.target;if(!z)return;const P=Number.parseInt(z.value,10);Number.isFinite(P)&&e.setRoot(P)}function De(Ce){const z=Ce.target;z&&e.setScale(z.value)}async function Be(){await e.togglePlayback()}function Ze(){e.regenerateRiff()}function et(){e.clearRiff()}return(Ce,z)=>(Ke(),at("div",Cx,[xe("section",Px,[xe("div",Ix,[xe("button",{class:"transport-button",onClick:Be},vn(Ot(i)?"STOP":"START"),1),xe("button",{class:"transport-button",onClick:Ze},"GENERATE"),xe("button",{class:"transport-button",onClick:et},"CLEAR")]),xe("div",Lx,[xe("label",Dx,"BPM "+vn(Ot(t)),1),xe("input",{id:"algorave-bpm",value:Ot(t),type:"range",min:Ot(m),max:Ot(p),step:"1",onInput:Me},null,40,Nx)]),xe("div",Ux,[z[0]||(z[0]=xe("label",{for:"algorave-root"},"Root",-1)),xe("select",{id:"algorave-root",class:"select-box",value:Ot(o),onChange:Re},[(Ke(!0),at(Nt,null,vi(Ot(v),P=>(Ke(),at("option",{key:`root-${P.midi}`,value:P.midi},vn(P.label),9,Fx))),128))],40,Ox),z[1]||(z[1]=xe("label",{for:"algorave-scale"},"Scale",-1)),xe("select",{id:"algorave-scale",class:"select-box",value:Ot(r),onChange:De},[(Ke(!0),at(Nt,null,vi(Ot(g),P=>(Ke(),at("option",{key:`scale-${P.name}`,value:P.name},vn(P.name),9,kx))),128))],40,Bx)]),xe("p",Hx,"Playhead: "+vn(w.value),1),z[2]||(z[2]=xe("p",{class:"hint-line"}," Click GENERATE for randomized riffs, then tweak each step manually. ",-1)),Ot(s)?(Ke(),at("p",Vx,vn(Ot(s)),1)):Mn("",!0)]),xe("section",zx,[xe("table",Gx,[xe("thead",null,[xe("tr",null,[z[3]||(z[3]=xe("th",{class:"track-header"},"Track",-1)),(Ke(!0),at(Nt,null,vi(Ot(b),P=>(Ke(),at("th",{key:`head-${P}`,class:ai(W(P-1))},vn(P),3))),128))])]),xe("tbody",null,[(Ke(),at(Nt,null,vi(M,P=>xe("tr",{key:P.key},[xe("th",Wx,vn(P.label),1),(Ke(!0),at(Nt,null,vi(Ot(A),$=>(Ke(),at("td",{key:`${P.key}-${$}`,class:ai(W($))},[xe("button",{class:ai(["drum-button",ie(P.key,$)]),"aria-label":`Toggle ${P.label} step ${$+1}`,onClick:ae=>te(P.key,$)},vn(Z(P.key,$)?"x":"-"),11,Xx)],2))),128))])),64)),xe("tr",null,[z[5]||(z[5]=xe("th",{class:"track-header"},"Bass",-1)),(Ke(!0),at(Nt,null,vi(Ot(A),P=>(Ke(),at("td",{key:`bass-${P}`,class:ai(ce("bass",P))},[xe("select",{class:"note-select",value:he("bass",P),onChange:$=>j("bass",P,$)},[z[4]||(z[4]=xe("option",{value:"rest"},"-",-1)),(Ke(!0),at(Nt,null,vi(C.value,$=>(Ke(),at("option",{key:`bass-opt-${$.value}`,value:$.value},vn($.label),9,Kx))),128))],40,jx)],2))),128))]),xe("tr",null,[z[7]||(z[7]=xe("th",{class:"track-header"},"Lead",-1)),(Ke(!0),at(Nt,null,vi(Ot(A),P=>(Ke(),at("td",{key:`lead-${P}`,class:ai(ce("lead",P))},[xe("select",{class:"note-select",value:he("lead",P),onChange:$=>j("lead",P,$)},[z[6]||(z[6]=xe("option",{value:"rest"},"-",-1)),(Ke(!0),at(Nt,null,vi(L.value,$=>(Ke(),at("option",{key:`lead-opt-${$.value}`,value:$.value},vn($.label),9,$x))),128))],40,qx)],2))),128))])])])])]))}}),Qx=Sn(Yx,[["__scopeId","data-v-53a852d0"]]);const Nu="180",Zx=0,sh=1,Jx=2,fm=1,eM=2,bi=3,ki=0,yn=1,li=2,ss=0,sr=1,vc=2,rh=3,oh=4,tM=5,ys=100,nM=101,iM=102,sM=103,rM=104,oM=200,aM=201,lM=202,cM=203,xc=204,Mc=205,uM=206,fM=207,hM=208,dM=209,pM=210,mM=211,gM=212,_M=213,vM=214,yc=0,Ac=1,Sc=2,hr=3,Ec=4,Tc=5,bc=6,wc=7,hm=0,xM=1,MM=2,rs=0,yM=1,AM=2,SM=3,EM=4,TM=5,bM=6,wM=7,ah="attached",RM="detached",dm=300,dr=301,pr=302,Rc=303,Cc=304,Xa=306,mr=1e3,ts=1001,Ea=1002,hn=1003,pm=1004,Xr=1005,fn=1006,aa=1007,Ii=1008,di=1009,mm=1010,gm=1011,ho=1012,Uu=1013,bs=1014,jn=1015,To=1016,Ou=1017,Fu=1018,po=1020,_m=35902,vm=35899,xm=1021,Mm=1022,On=1023,mo=1026,go=1027,Bu=1028,ku=1029,ym=1030,Hu=1031,Vu=1033,la=33776,ca=33777,ua=33778,fa=33779,Pc=35840,Ic=35841,Lc=35842,Dc=35843,Nc=36196,Uc=37492,Oc=37496,Fc=37808,Bc=37809,kc=37810,Hc=37811,Vc=37812,zc=37813,Gc=37814,Wc=37815,Xc=37816,jc=37817,Kc=37818,qc=37819,$c=37820,Yc=37821,Qc=36492,Zc=36494,Jc=36495,eu=36283,tu=36284,nu=36285,iu=36286,_o=2300,vo=2301,hl=2302,lh=2400,ch=2401,uh=2402,CM=2500,PM=0,Am=1,su=2,IM=3200,LM=3201,Sm=0,DM=1,es="",Gt="srgb",pn="srgb-linear",Ta="linear",St="srgb",Ns=7680,fh=519,NM=512,UM=513,OM=514,Em=515,FM=516,BM=517,kM=518,HM=519,ru=35044,hh="300 es",ci=2e3,ba=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const no=Math.PI/180,gr=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n,e){return(n%e+e)%e}function VM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function zM(n,e,t){return n!==e?(t-n)/(e-n):0}function io(n,e,t){return(1-t)*n+t*e}function GM(n,e,t,i){return io(n,e,1-Math.exp(-t*i))}function WM(n,e=1){return e-Math.abs(zu(n,e*2)-e)}function XM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function KM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qM(n,e){return n+Math.random()*(e-n)}function $M(n){return n*(.5-Math.random())}function YM(n){n!==void 0&&(dh=n);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function QM(n){return n*no}function ZM(n){return n*gr}function JM(n){return(n&n-1)===0&&n!==0}function ey(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ty(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ny(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const iy={DEG2RAD:no,RAD2DEG:gr,generateUUID:qn,clamp:st,euclideanModulo:zu,mapLinear:VM,inverseLerp:zM,lerp:io,damp:GM,pingpong:WM,smoothstep:XM,smootherstep:jM,randInt:KM,randFloat:qM,randFloatSpread:$M,seededRandom:YM,degToRad:QM,radToDeg:ZM,isPowerOfTwo:JM,ceilPowerOfTwo:ey,floorPowerOfTwo:ty,setQuaternionFromProperEuler:ny,normalize:vt,denormalize:Wn};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*v,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),C=Math.atan2(w,p*A);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const M=a*A;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+v*M,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new H,ph=new $n;class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],A=s[1],b=s[4],M=s[7],w=s[2],C=s[5],L=s[8];return r[0]=o*v+a*A+l*w,r[3]=o*m+a*b+l*C,r[6]=o*p+a*M+l*L,r[1]=c*v+u*A+f*w,r[4]=c*m+u*b+f*C,r[7]=c*p+u*M+f*L,r[2]=h*v+d*A+g*w,r[5]=h*m+d*b+g*C,r[8]=h*p+d*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pl.makeScale(e,t)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new Je;function Tm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sy(){const n=xo("canvas");return n.style.display="block",n}const mh={};function Mo(n){n in mh||(mh[n]=!0,console.warn(n))}function ry(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const gh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){const n={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pn]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const ut=oy();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Us;class ay{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=xo("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ly=0;class Gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ay.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;const gl=new H;class Xt extends Ar{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ts,s=ts,r=fn,o=Ii,a=On,l=di,c=Xt.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=qn(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gl).x}get height(){return this.source.getSize(gl).y}get depth(){return this.source.getSize(gl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=dm;Xt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(d+1)/2,w=(p+1)/2,C=(u+h)/4,L=(f+v)/4,N=(g+m)/4;return b>M&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=L/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=N/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=L/r,s=N/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uy extends Ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Xt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends uy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bm extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fy extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Io.subVectors(this.max,Nr),Os.subVectors(e.a,Nr),Fs.subVectors(e.b,Nr),Bs.subVectors(e.c,Nr),Wi.subVectors(Fs,Os),Xi.subVectors(Bs,Fs),fs.subVectors(Os,Bs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-fs.z,fs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,fs.z,0,-fs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-fs.y,fs.x,0];return!_l(t,Os,Fs,Bs,Io)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,Os,Fs,Bs,Io))?!1:(Lo.crossVectors(Wi,Xi),t=[Lo.x,Lo.y,Lo.z],_l(t,Os,Fs,Bs,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new H,new H,new H,new H,new H,new H,new H,new H],Hn=new H,Po=new Vi,Os=new H,Fs=new H,Bs=new H,Wi=new H,Xi=new H,fs=new H,Nr=new H,Io=new H,Lo=new H,hs=new H;function _l(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hy=new Vi,Ur=new H,vl=new H;class pi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(vl)),this.expandByPoint(Ur.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const yi=new H,xl=new H,Do=new H,ji=new H,Ml=new H,No=new H,yl=new H;class ja{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(xl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=ji.dot(this.direction),l=-ji.dot(Do),c=ji.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xl).addScaledVector(Do,h),d}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Ml.subVectors(t,e),No.subVectors(i,e),yl.crossVectors(Ml,No);let o=this.direction.dot(yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(No.crossVectors(ji,No));if(l<0)return null;const c=a*this.direction.dot(Ml.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(yl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,g,v,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,py)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ki.crossVectors(i,bn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ki.crossVectors(i,bn)),Ki.normalize(),Uo.crossVectors(bn,Ki),s[0]=Ki.x,s[4]=Uo.x,s[8]=bn.x,s[1]=Ki.y,s[5]=Uo.y,s[9]=bn.y,s[2]=Ki.z,s[6]=Uo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],b=i[7],M=i[11],w=i[15],C=s[0],L=s[4],N=s[8],S=s[12],T=s[1],D=s[5],W=s[9],Z=s[13],ie=s[2],ce=s[6],te=s[10],he=s[14],j=s[3],Me=s[7],Re=s[11],De=s[15];return r[0]=o*C+a*T+l*ie+c*j,r[4]=o*L+a*D+l*ce+c*Me,r[8]=o*N+a*W+l*te+c*Re,r[12]=o*S+a*Z+l*he+c*De,r[1]=u*C+f*T+h*ie+d*j,r[5]=u*L+f*D+h*ce+d*Me,r[9]=u*N+f*W+h*te+d*Re,r[13]=u*S+f*Z+h*he+d*De,r[2]=g*C+v*T+m*ie+p*j,r[6]=g*L+v*D+m*ce+p*Me,r[10]=g*N+v*W+m*te+p*Re,r[14]=g*S+v*Z+m*he+p*De,r[3]=A*C+b*T+M*ie+w*j,r[7]=A*L+b*D+M*ce+w*Me,r[11]=A*N+b*W+M*te+w*Re,r[15]=A*S+b*Z+M*he+w*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+v*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,w=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,C=t*A+i*b+s*M+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=A*L,e[1]=(v*h*r-f*m*r-v*s*d+i*m*d+f*s*p-i*h*p)*L,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*L,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*L,e[4]=b*L,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*L,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*L,e[8]=M*L,e[9]=(g*f*r-u*v*r-g*i*d+t*v*d+u*i*p-t*f*p)*L,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*L,e[12]=w*L,e[13]=(u*v*s-g*f*s+g*i*h-t*v*h-u*i*m+t*f*m)*L,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,v=o*u,m=o*f,p=a*f,A=l*c,b=l*u,M=l*f,w=i.x,C=i.y,L=i.z;return s[0]=(1-(v+p))*w,s[1]=(d+M)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(d-M)*C,s[5]=(1-(h+p))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+b)*L,s[9]=(m-A)*L,s[10]=(1-(h+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ks.set(s[0],s[1],s[2]).length();const o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);const c=1/r,u=1/o,f=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ba)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===ci)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ba)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ks=new H,Vn=new nt,dy=new H(0,0,0),py=new H(1,1,1),Ki=new H,Uo=new H,bn=new H,vh=new nt,xh=new $n;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const Mh=new H,Hs=new $n,Ai=new nt,Oo=new H,Or=new H,gy=new H,_y=new $n,yh=new H(1,0,0),Ah=new H(0,1,0),Sh=new H(0,0,1),Eh={type:"added"},vy={type:"removed"},Vs={type:"childadded",child:null},Al={type:"childremoved",child:null};class Lt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new H,t=new Jn,i=new $n,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Je}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oo.copy(e):Oo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Or,Oo,this.up):Ai.lookAt(Oo,Or,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vy),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new H(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new H,Si=new H,Sl=new H,Ei=new H,zs=new H,Gs=new H,Th=new H,El=new H,Tl=new H,bl=new H,wl=new dt,Rl=new dt,Cl=new dt;class Xn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),Si.subVectors(i,t),Sl.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(Si),l=zn.dot(Sl),c=Si.dot(Si),u=Si.dot(Sl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return wl.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),wl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),Si.subVectors(e,t),zn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,i),Gs.subVectors(r,i),El.subVectors(e,i);const l=zs.dot(El),c=Gs.dot(El);if(l<=0&&c<=0)return t.copy(i);Tl.subVectors(e,s);const u=zs.dot(Tl),f=Gs.dot(Tl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(zs,o);bl.subVectors(e,r);const d=zs.dot(bl),g=Gs.dot(bl);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Gs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Th.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Th,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(zs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=zu(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pl(o,r,e+1/3),this.g=Pl(o,r,e),this.b=Pl(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=Rm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ut.workingToColorSpace(Zt.copy(this),e),Math.round(st(Zt.r*255,0,255))*65536+Math.round(st(Zt.g*255,0,255))*256+Math.round(st(Zt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Gt){ut.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Fo);const i=io(qi.h,Fo.h,t),s=io(qi.s,Fo.s,t),r=io(qi.l,Fo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Qe;Qe.NAMES=Rm;let xy=0;class fi extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=sr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=Mc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xc&&(i.blendSrc=this.blendSrc),this.blendDst!==Mc&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Un extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new H,Bo=new lt;let My=0;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ru,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}}class Cm extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pm extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yy=0;const Ln=new nt,Il=new Lt,Ws=new H,wn=new Vi,Fr=new Vi,zt=new H;class Cn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Pm:Cm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(wn.min,Fr.min),wn.expandByPoint(zt),zt.addVectors(wn.max,Fr.max),wn.expandByPoint(zt)):(wn.expandByPoint(Fr.min),wn.expandByPoint(Fr.max))}wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),zt.add(Ws)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new H,l[N]=new H;const c=new H,u=new H,f=new H,h=new lt,d=new lt,g=new lt,v=new H,m=new H;function p(N,S,T){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),h.fromBufferAttribute(r,N),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,T),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(v),a[S].add(v),a[T].add(v),l[N].add(m),l[S].add(m),l[T].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,S=A.length;N<S;++N){const T=A[N],D=T.start,W=T.count;for(let Z=D,ie=D+W;Z<ie;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new H,M=new H,w=new H,C=new H;function L(N){w.fromBufferAttribute(s,N),C.copy(w);const S=a[N];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(C,S);const D=M.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,D)}for(let N=0,S=A.length;N<S;++N){const T=A[N],D=T.start,W=T.count;for(let Z=D,ie=D+W;Z<ie;Z+=3)L(e.getX(Z+0)),L(e.getX(Z+1)),L(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bh=new nt,ds=new ja,ko=new pi,wh=new H,Ho=new H,Vo=new H,zo=new H,Ll=new H,Go=new H,Rh=new H,Wo=new H;class Wt extends Lt{constructor(e=new Cn,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ll.fromBufferAttribute(f,e),o?Go.addScaledVector(Ll,u):Go.addScaledVector(Ll.sub(t),u))}t.add(Go)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(ko.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ko,wh)===null||ds.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(bh.copy(r).invert(),ds.copy(e.ray).applyMatrix4(bh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=b;M<w;M+=3){const C=a.getX(M),L=a.getX(M+1),N=a.getX(M+2);s=Xo(this,p,e,i,c,u,f,C,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=Xo(this,o,e,i,c,u,f,A,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=b;M<w;M+=3){const C=M,L=M+1,N=M+2;s=Xo(this,p,e,i,c,u,f,C,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=m,b=m+1,M=m+2;s=Xo(this,o,e,i,c,u,f,A,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ay(n,e,t,i,s,r,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ki,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ho),n.getVertexPosition(l,Vo),n.getVertexPosition(c,zo);const u=Ay(n,e,t,i,Ho,Vo,zo,Rh);if(u){const f=new H;Xn.getBarycoord(Rh,Ho,Vo,zo,f),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,l,c,f,new lt)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,l,c,f,new lt)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Xn.getNormal(Ho,Vo,zo,h.normal),u.face=h,u.barycoord=f}return u}class Sr extends Cn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(f,2));function g(v,m,p,A,b,M,w,C,L,N,S){const T=M/L,D=w/N,W=M/2,Z=w/2,ie=C/2,ce=L+1,te=N+1;let he=0,j=0;const Me=new H;for(let Re=0;Re<te;Re++){const De=Re*D-Z;for(let Be=0;Be<ce;Be++){const Ze=Be*T-W;Me[v]=Ze*A,Me[m]=De*b,Me[p]=ie,c.push(Me.x,Me.y,Me.z),Me[v]=0,Me[m]=0,Me[p]=C>0?1:-1,u.push(Me.x,Me.y,Me.z),f.push(Be/L),f.push(1-Re/N),he+=1}}for(let Re=0;Re<N;Re++)for(let De=0;De<L;De++){const Be=h+De+ce*Re,Ze=h+De+ce*(Re+1),et=h+(De+1)+ce*(Re+1),Ce=h+(De+1)+ce*Re;l.push(Be,Ze,Ce),l.push(Ze,et,Ce),j+=6}a.addGroup(d,j,S),d+=j,h+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const s in i)e[s]=i[s]}return e}function Sy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Im(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Ey={clone:_r,merge:an};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lm extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new H,Ch=new lt,Ph=new lt;class un extends Lm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Ph),t.subVectors(Ph,Ch)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,js=1;class wy extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Xs,js,e,t);s.layers=this.layers,this.add(s);const r=new un(Xs,js,e,t);r.layers=this.layers,this.add(r);const o=new un(Xs,js,e,t);o.layers=this.layers,this.add(o);const a=new un(Xs,js,e,t);a.layers=this.layers,this.add(a);const l=new un(Xs,js,e,t);l.layers=this.layers,this.add(l);const c=new un(Xs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dm extends Xt{constructor(e=[],t=dr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ry extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Dm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sr(5,5,5),r=new os({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:ss});r.uniforms.tEquirect.value=t;const o=new Wt(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=fn),new wy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class ns extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Py extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new H;class Wu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ih=new H,Lh=new dt,Dh=new dt,Ly=new H,Nh=new nt,jo=new H,Nl=new pi,Uh=new nt,Ul=new ja;class Dy extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ah,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(s),e.ray.intersectsSphere(Nl)!==!1&&(Uh.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(Uh),!(this.boundingBox!==null&&Ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===RM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Lh.fromBufferAttribute(s.attributes.skinIndex,e),Dh.fromBufferAttribute(s.attributes.skinWeight,e),Ih.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Dh.getComponent(r);if(o!==0){const a=Lh.getComponent(r);Nh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ly.copy(Ih).applyMatrix4(Nh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nm extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Um extends Xt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=hn,u=hn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new nt,Ny=new nt;class Xu{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new nt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ny;Oh.multiplyMatrices(a,t[r]),Oh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Xu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Um(t,e,e,On,jn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Nm),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class ou extends nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new nt,Fh=new nt,Ko=[],Bh=new Vi,Uy=new nt,Br=new Wt,kr=new pi;class Oy extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Uy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),Bh.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Bh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),kr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(i),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Fh.multiplyMatrices(i,Ks),Br.matrixWorld=Fh,Br.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){const l=Ko[o];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Um(new Float32Array(s*this.count),s,this.count,Bu,jn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ol=new H,Fy=new H,By=new Je;class xs{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ol.subVectors(i,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||By.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new pi,ky=new lt(.5,.5),qo=new H;class ju{constructor(e=new xs,t=new xs,i=new xs,s=new xs,r=new xs,o=new xs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],A=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,d-u,p-g,w-A).normalize(),s[1].setComponents(c+o,d+u,p+g,w+A).normalize(),s[2].setComponents(c+a,d+f,p+v,w+b).normalize(),s[3].setComponents(c-a,d-f,p-v,w-b).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,w-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,w-M).normalize(),t===ci)s[5].setComponents(c+l,d+h,p+m,w+M).normalize();else if(t===ba)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=ky.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Om extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wa=new H,Ra=new H,kh=new nt,Hr=new ja,$o=new pi,Fl=new H,Hh=new H;class Ku extends Lt{constructor(e=new Cn,t=new Om){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wa.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wa.distanceTo(Ra);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;kh.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),A=u.getX(v+1),b=Yo(this,e,Hr,l,p,A,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=Yo(this,e,Hr,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=Yo(this,e,Hr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Yo(this,e,Hr,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(wa.fromBufferAttribute(a,s),Ra.fromBufferAttribute(a,r),t.distanceSqToSegment(wa,Ra,Fl,Hh)>i)return;Fl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fl);if(!(c<e.near||c>e.far))return{distance:c,point:Hh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Vh=new H,zh=new H;class Hy extends Ku{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vh.distanceTo(zh);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vy extends Ku{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fm extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new nt,au=new ja,Qo=new pi,Zo=new H;class zy extends Lt{constructor(e=new Cn,t=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Gh.copy(s).invert(),au.copy(e.ray).applyMatrix4(Gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);Zo.fromBufferAttribute(f,m),Wh(Zo,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Zo.fromBufferAttribute(f,g),Wh(Zo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wh(n,e,t,i,s,r,o){const a=au.distanceSqToPoint(n);if(a<t){const l=new H;au.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Bm extends Xt{constructor(e,t,i=bs,s,r,o,a=hn,l=hn,c,u=mo,f=1){if(u!==mo&&u!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class km extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends Cn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const v=[],m=i/2;let p=0;A(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(d,2));function A(){const M=new H,w=new H;let C=0;const L=(t-e)/i;for(let N=0;N<=r;N++){const S=[],T=N/r,D=T*(t-e)+e;for(let W=0;W<=s;W++){const Z=W/s,ie=Z*l+a,ce=Math.sin(ie),te=Math.cos(ie);w.x=D*ce,w.y=-T*i+m,w.z=D*te,f.push(w.x,w.y,w.z),M.set(ce,L,te).normalize(),h.push(M.x,M.y,M.z),d.push(Z,1-T),S.push(g++)}v.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){const T=v[S][N],D=v[S+1][N],W=v[S+1][N+1],Z=v[S][N+1];(e>0||S!==0)&&(u.push(T,D,Z),C+=3),(t>0||S!==r-1)&&(u.push(D,W,Z),C+=3)}c.addGroup(p,C,0),p+=C}function b(M){const w=g,C=new lt,L=new H;let N=0;const S=M===!0?e:t,T=M===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*T,0),h.push(0,T,0),d.push(.5,.5),g++;const D=g;for(let W=0;W<=s;W++){const ie=W/s*l+a,ce=Math.cos(ie),te=Math.sin(ie);L.x=S*te,L.y=m*T,L.z=S*ce,f.push(L.x,L.y,L.z),h.push(0,T,0),C.x=ce*.5+.5,C.y=te*.5*T+.5,d.push(C.x,C.y),g++}for(let W=0;W<s;W++){const Z=w+W,ie=D+W;M===!0?u.push(ie,ie+1,Z):u.push(ie+1,ie,Z),N+=3}c.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qu extends Ka{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends Cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let b=0;b<c;b++){const M=b*f-r;g.push(M,-A,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const b=A+c*p,M=A+c*(p+1),w=A+1+c*(p+1),C=A+1+c*p;d.push(b,M,C),d.push(M,w,C)}this.setIndex(d),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class $u extends Cn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const A=[],b=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const C=w/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(C+M,1-b),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const b=u[p][A+1],M=u[p][A],w=u[p+1][A],C=u[p+1][A+1];(p!==0||o>0)&&d.push(b,M,C),(p!==i-1||l<Math.PI)&&d.push(M,w,C)}this.setIndex(d),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class or extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sm,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends or{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gy extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wy extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Xy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function jy(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Xh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Hm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class bo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ky extends bo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:r=e,a=2*t-i;break;case uh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:o=e,l=2*i-t;break;case uh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,A=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-d)*m+(1.5+d)*v+.5*g,M=d*m-d*v;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+A*o[c+w]+b*o[l+w]+M*o[f+w];return r}}class qy extends bo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class $y extends bo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ky(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case hl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Xy(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=vo;class Er extends ti{constructor(e,t,i){super(e,t,i)}}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=_o;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Vm extends ti{constructor(e,t,i,s){super(e,t,i,s)}}Vm.prototype.ValueTypeName="color";class vr extends ti{constructor(e,t,i,s){super(e,t,i,s)}}vr.prototype.ValueTypeName="number";class Yy extends bo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)$n.slerpFlat(r,0,o,c-a,o,c,l);return r}}class xr extends ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Yy(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends ti{constructor(e,t,i){super(e,t,i)}}Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=_o;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends ti{constructor(e,t,i,s){super(e,t,i,s)}}Mr.prototype.ValueTypeName="vector";class Qy{constructor(e="",t=-1,i=[],s=CM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Jy(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(ti.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=jy(l);l=Xh(l,1,u),c=Xh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,v){if(d.length!==0){const m=[],p=[];Hm(d,m,p,g),m.length!==0&&v.push(new f(h,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)d[h[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let A=0;A!==h[g].morphTargets.length;++A){const b=h[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new vr(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(Mr,d+".position",h,"pos",s),i(xr,d+".quaternion",h,"rot",s),i(Mr,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Zy(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return Mr;case"color":return Vm;case"quaternion":return xr;case"bool":case"boolean":return Er;case"string":return Tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Jy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zy(n.type);if(n.times===void 0){const t=[],i=[];Hm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Li={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class eA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const tA=new eA;class br{constructor(e){this.manager=e!==void 0?e:tA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}br.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class nA extends Error{constructor(e,t){super(e),this.response=t}}class zm extends br{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Li.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:s});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ti[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:b,value:M})=>{if(b)p.close();else{v+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let C=0,L=u.length;C<L;C++){const N=u[C];N.onProgress&&N.onProgress(w)}p.enqueue(M),A()}},b=>{p.error(b)})}}});return new Response(m)}else throw new nA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Li.add(`file:${e}`,c);const u=Ti[e];delete Ti[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=new WeakMap;class iA extends br{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Li.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=qs.get(o);f===void 0&&(f=[],qs.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=xo("img");function l(){u(),t&&t(this);const f=qs.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Li.remove(`image:${e}`);const h=qs.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Li.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class sA extends br{constructor(e){super(e)}load(e,t,i,s){const r=new Xt,o=new iA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Yu extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bl=new nt,jh=new H,Kh=new H;class Qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ju,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rA extends Qu{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oA extends Yu{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qh=new nt,Vr=new H,kl=new H;class aA extends Qu{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vr),kl.copy(i.position),kl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth)}}class lA extends Yu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new aA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zu extends Lm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cA extends Qu{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ha extends Yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class so{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hl=new WeakMap;class uA extends br{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Li.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Hl.has(o)===!0)s&&s(Hl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Hl.set(l,c),Li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class fA extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ju="\\[\\]\\.:\\/",dA=new RegExp("["+Ju+"]","g"),ef="[^"+Ju+"]",pA="[^"+Ju.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",ef),gA=/(WCOD+)?/.source.replace("WCOD",pA),_A=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),vA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),xA=new RegExp("^"+mA+gA+_A+vA+"$"),MA=["material","materials","bones","map"];class yA{constructor(e,t,i){const s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dA,"")}static parseTrackName(e){const t=xA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);MA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=yA;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function $h(n,e,t,i){const s=AA(i);switch(t){case xm:return n*e;case Bu:return n*e/s.components*s.byteLength;case ku:return n*e/s.components*s.byteLength;case ym:return n*e*2/s.components*s.byteLength;case Hu:return n*e*2/s.components*s.byteLength;case Mm:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case Vu:return n*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Pc:case Lc:return Math.max(n,8)*Math.max(e,8)/2;case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qc:case Zc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AA(n){switch(n){case di:case mm:return{byteLength:1,components:1};case ho:case gm:case To:return{byteLength:2,components:1};case Ou:case Fu:return{byteLength:2,components:4};case bs:case Uu:case jn:return{byteLength:4,components:1};case _m:case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nu);function Gm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function SA(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var EA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TA=`#ifdef USE_ALPHAHASH
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
#endif`,bA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PA=`#ifdef USE_AOMAP
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
#endif`,IA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LA=`#ifdef USE_BATCHING
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
#endif`,DA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FA=`#ifdef USE_IRIDESCENCE
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
#endif`,BA=`#ifdef USE_BUMPMAP
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
#endif`,kA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KA=`#define PI 3.141592653589793
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
} // validated`,qA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$A=`vec3 transformedNormal = objectNormal;
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
#endif`,YA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",tS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
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
}`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mS=`uniform bool receiveShadow;
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
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yS=`PhysicalMaterial material;
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
#endif`,AS=`struct PhysicalMaterial {
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
}`,SS=`
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
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
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DS=`#if defined( USE_POINTS_UV )
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
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,US=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
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
#endif`,HS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jS=`#ifdef USE_NORMALMAP
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
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,PE=`#if DEPTH_PACKING == 3200
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
}`,IE=`#define DISTANCE
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
}`,LE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,OE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,BE=`uniform vec3 diffuse;
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
}`,kE=`#define LAMBERT
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
}`,HE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,zE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,jE=`#define PHONG
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
}`,KE=`#define STANDARD
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
}`,qE=`#define STANDARD
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
}`,$E=`#define TOON
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
}`,YE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:EA,alphahash_pars_fragment:TA,alphamap_fragment:bA,alphamap_pars_fragment:wA,alphatest_fragment:RA,alphatest_pars_fragment:CA,aomap_fragment:PA,aomap_pars_fragment:IA,batching_pars_vertex:LA,batching_vertex:DA,begin_vertex:NA,beginnormal_vertex:UA,bsdfs:OA,iridescence_fragment:FA,bumpmap_pars_fragment:BA,clipping_planes_fragment:kA,clipping_planes_pars_fragment:HA,clipping_planes_pars_vertex:VA,clipping_planes_vertex:zA,color_fragment:GA,color_pars_fragment:WA,color_pars_vertex:XA,color_vertex:jA,common:KA,cube_uv_reflection_fragment:qA,defaultnormal_vertex:$A,displacementmap_pars_vertex:YA,displacementmap_vertex:QA,emissivemap_fragment:ZA,emissivemap_pars_fragment:JA,colorspace_fragment:eS,colorspace_pars_fragment:tS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:sS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:gS,envmap_vertex:oS,fog_vertex:aS,fog_pars_vertex:lS,fog_fragment:cS,fog_pars_fragment:uS,gradientmap_pars_fragment:fS,lightmap_pars_fragment:hS,lights_lambert_fragment:dS,lights_lambert_pars_fragment:pS,lights_pars_begin:mS,lights_toon_fragment:_S,lights_toon_pars_fragment:vS,lights_phong_fragment:xS,lights_phong_pars_fragment:MS,lights_physical_fragment:yS,lights_physical_pars_fragment:AS,lights_fragment_begin:SS,lights_fragment_maps:ES,lights_fragment_end:TS,logdepthbuf_fragment:bS,logdepthbuf_pars_fragment:wS,logdepthbuf_pars_vertex:RS,logdepthbuf_vertex:CS,map_fragment:PS,map_pars_fragment:IS,map_particle_fragment:LS,map_particle_pars_fragment:DS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:US,morphinstance_vertex:OS,morphcolor_vertex:FS,morphnormal_vertex:BS,morphtarget_pars_vertex:kS,morphtarget_vertex:HS,normal_fragment_begin:VS,normal_fragment_maps:zS,normal_pars_fragment:GS,normal_pars_vertex:WS,normal_vertex:XS,normalmap_pars_fragment:jS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:$S,iridescence_pars_fragment:YS,opaque_fragment:QS,packing:ZS,premultiplied_alpha_fragment:JS,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:oE,shadowmap_vertex:aE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:dE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:_E,transmission_pars_fragment:vE,uv_pars_fragment:xE,uv_pars_vertex:ME,uv_vertex:yE,worldpos_vertex:AE,background_vert:SE,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:bE,cube_vert:wE,cube_frag:RE,depth_vert:CE,depth_frag:PE,distanceRGBA_vert:IE,distanceRGBA_frag:LE,equirect_vert:DE,equirect_frag:NE,linedashed_vert:UE,linedashed_frag:OE,meshbasic_vert:FE,meshbasic_frag:BE,meshlambert_vert:kE,meshlambert_frag:HE,meshmatcap_vert:VE,meshmatcap_frag:zE,meshnormal_vert:GE,meshnormal_frag:WE,meshphong_vert:XE,meshphong_frag:jE,meshphysical_vert:KE,meshphysical_frag:qE,meshtoon_vert:$E,meshtoon_frag:YE,points_vert:QE,points_frag:ZE,shadow_vert:JE,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},Ie={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},oi={basic:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:an([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:an([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:an([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:an([Ie.points,Ie.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:an([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:an([Ie.common,Ie.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:an([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:an([Ie.sprite,Ie.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:an([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:an([Ie.lights,Ie.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};oi.physical={uniforms:an([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ea={r:0,b:0,g:0},ms=new Jn,iT=new nt;function sT(n,e,t,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===Xa)?(u===void 0&&(u=new Wt(new Sr(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:_r(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ms.copy(M.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ms)),u.material.toneMapped=ut.getTransfer(w.colorSpace)!==St,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Wt(new qa(2,2),new os({name:"BackgroundMaterial",uniforms:_r(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(ea,Im(n)),i.buffers.color.setClear(ea.r,ea.g,ea.b,M,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m,dispose:A}}function rT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(T,D,W,Z,ie){let ce=!1;const te=f(Z,W,D);r!==te&&(r=te,c(r.object)),ce=d(T,Z,W,ie),ce&&g(T,Z,W,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,M(T,D,W,Z),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,D,W){const Z=W.wireframe===!0;let ie=i[T.id];ie===void 0&&(ie={},i[T.id]=ie);let ce=ie[D.id];ce===void 0&&(ce={},ie[D.id]=ce);let te=ce[Z];return te===void 0&&(te=h(l()),ce[Z]=te),te}function h(T){const D=[],W=[],Z=[];for(let ie=0;ie<t;ie++)D[ie]=0,W[ie]=0,Z[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:Z,object:T,attributes:{},index:null}}function d(T,D,W,Z){const ie=r.attributes,ce=D.attributes;let te=0;const he=W.getAttributes();for(const j in he)if(he[j].location>=0){const Re=ie[j];let De=ce[j];if(De===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(De=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(De=T.instanceColor)),Re===void 0||Re.attribute!==De||De&&Re.data!==De.data)return!0;te++}return r.attributesNum!==te||r.index!==Z}function g(T,D,W,Z){const ie={},ce=D.attributes;let te=0;const he=W.getAttributes();for(const j in he)if(he[j].location>=0){let Re=ce[j];Re===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Re=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Re=T.instanceColor));const De={};De.attribute=Re,Re&&Re.data&&(De.data=Re.data),ie[j]=De,te++}r.attributes=ie,r.attributesNum=te,r.index=Z}function v(){const T=r.newAttributes;for(let D=0,W=T.length;D<W;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const W=r.newAttributes,Z=r.enabledAttributes,ie=r.attributeDivisors;W[T]=1,Z[T]===0&&(n.enableVertexAttribArray(T),Z[T]=1),ie[T]!==D&&(n.vertexAttribDivisor(T,D),ie[T]=D)}function A(){const T=r.newAttributes,D=r.enabledAttributes;for(let W=0,Z=D.length;W<Z;W++)D[W]!==T[W]&&(n.disableVertexAttribArray(W),D[W]=0)}function b(T,D,W,Z,ie,ce,te){te===!0?n.vertexAttribIPointer(T,D,W,ie,ce):n.vertexAttribPointer(T,D,W,Z,ie,ce)}function M(T,D,W,Z){v();const ie=Z.attributes,ce=W.getAttributes(),te=D.defaultAttributeValues;for(const he in ce){const j=ce[he];if(j.location>=0){let Me=ie[he];if(Me===void 0&&(he==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),he==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),Me!==void 0){const Re=Me.normalized,De=Me.itemSize,Be=e.get(Me);if(Be===void 0)continue;const Ze=Be.buffer,et=Be.type,Ce=Be.bytesPerElement,z=et===n.INT||et===n.UNSIGNED_INT||Me.gpuType===Uu;if(Me.isInterleavedBufferAttribute){const P=Me.data,$=P.stride,ae=Me.offset;if(P.isInstancedInterleavedBuffer){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,P.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ue=0;ue<j.locationSize;ue++)m(j.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ue=0;ue<j.locationSize;ue++)b(j.location+ue,De/j.locationSize,et,Re,$*Ce,(ae+De/j.locationSize*ue)*Ce,z)}else{if(Me.isInstancedBufferAttribute){for(let P=0;P<j.locationSize;P++)p(j.location+P,Me.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let P=0;P<j.locationSize;P++)m(j.location+P);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let P=0;P<j.locationSize;P++)b(j.location+P,De/j.locationSize,et,Re,De*Ce,De/j.locationSize*P*Ce,z)}}else if(te!==void 0){const Re=te[he];if(Re!==void 0)switch(Re.length){case 2:n.vertexAttrib2fv(j.location,Re);break;case 3:n.vertexAttrib3fv(j.location,Re);break;case 4:n.vertexAttrib4fv(j.location,Re);break;default:n.vertexAttrib1fv(j.location,Re)}}}}A()}function w(){N();for(const T in i){const D=i[T];for(const W in D){const Z=D[W];for(const ie in Z)u(Z[ie].object),delete Z[ie];delete D[W]}delete i[T]}}function C(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const W in D){const Z=D[W];for(const ie in Z)u(Z[ie].object),delete Z[ie];delete D[W]}delete i[T.id]}function L(T){for(const D in i){const W=i[D];if(W[T.id]===void 0)continue;const Z=W[T.id];for(const ie in Z)u(Z[ie].object),delete Z[ie];delete W[T.id]}}function N(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function oT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==On&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===To&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==di&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==jn&&!N)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:w,maxSamples:C}}function lT(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new xs,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,b=A*4;let M=p.clippingState||null;l.value=M,M=u(g,h,b,d);for(let w=0;w!==b;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==v;++b,M+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cT(n){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=dr:a===Cc&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ry(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Zs=4,Yh=[.125,.215,.35,.446,.526,.582],As=20,Vl=new Zu,Qh=new Qe;let zl=null,Gl=0,Wl=0,Xl=!1;const Ms=(1+Math.sqrt(5))/2,$s=1/Ms,Zh=[new H(-Ms,$s,0),new H(Ms,$s,0),new H(-$s,0,Ms),new H($s,0,Ms),new H(0,Ms,-$s),new H(0,Ms,$s),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],uT=new H;class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=uT}=r;zl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Gl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:To,format:On,colorSpace:pn,depthBuffer:!1},s=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(r)),this._blurMaterial=hT(r,e,t)}return s}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,i,s,r){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Qh),f.toneMapping=rs,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new Un({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new Wt(new Sr,v);let p=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,p=!0):(v.color.copy(Qh),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;ta(s,M*w,b>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===dr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zh[(s-r-1)%Zh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wt(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*As-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):As;m>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const p=[];let A=0;for(let L=0;L<As;++L){const N=L/v,S=Math.exp(-N*N/2);p.push(S),L===0?A+=S:L<m&&(A+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const M=this._sizeLods[s],w=3*M*(s>b-Zs?s-b+Zs:0),C=4*(this._cubeSize-M);ta(t,w,C,3*M,2*M),l.setRenderTarget(t),l.render(f,Vl)}}function fT(n){const e=[],t=[],i=[];let s=n;const r=n-Zs+1+Yh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Zs?l=Yh[o-n+Zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),b=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let C=0;C<d;C++){const L=C%3*2/3-1,N=C>2?0:-1,S=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];A.set(S,v*g*C),b.set(h,m*g*C);const T=[C,C,C,C,C,C];M.set(T,p*g*C)}const w=new Cn;w.setAttribute("position",new nn(A,v)),w.setAttribute("uv",new nn(b,m)),w.setAttribute("faceIndex",new nn(M,p)),e.push(w),s>Zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ed(n,e,t){const i=new ws(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hT(n,e,t){const i=new Float32Array(As),s=new H(0,1,0);return new os({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function td(){return new os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function nd(){return new os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}function dT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rc||l===Cc,u=l===dr||l===pr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Jh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Jh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Mo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function mT(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let b=0,M=A.length;b<M;b+=3){const w=A[b+0],C=A[b+1],L=A[b+2];h.push(w,C,C,L,L,w)}}else if(g!==void 0){const A=g.array;v=g.version;for(let b=0,M=A.length/3-1;b<M;b+=3){const w=b+0,C=b+1,L=b+2;h.push(w,C,C,L,L,w)}}else return;const m=new(Tm(h)?Pm:Cm)(h,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gT(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*v[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _T(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vT(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*w*4*f),L=new bm(C,M,w,f);L.type=jn,L.needsUpdate=!0;const N=b*4;for(let T=0;T<f;T++){const D=m[T],W=p[T],Z=A[T],ie=M*w*4*T;for(let ce=0;ce<D.count;ce++){const te=ce*N;d===!0&&(s.fromBufferAttribute(D,ce),C[ie+te+0]=s.x,C[ie+te+1]=s.y,C[ie+te+2]=s.z,C[ie+te+3]=0),g===!0&&(s.fromBufferAttribute(W,ce),C[ie+te+4]=s.x,C[ie+te+5]=s.y,C[ie+te+6]=s.z,C[ie+te+7]=0),v===!0&&(s.fromBufferAttribute(Z,ce),C[ie+te+8]=s.x,C[ie+te+9]=s.y,C[ie+te+10]=s.z,C[ie+te+11]=Z.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new lt(M,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function xT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Wm=new Xt,id=new Bm(1,1),Xm=new bm,jm=new fy,Km=new Dm,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),ld=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function ET(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Vt(t,i)}}function TT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),Vt(t,i)}}function bT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),Vt(t,i)}}function wT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function IT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function NT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function UT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=Em,r=id):r=Wm,t.setTexture2D(e||r,s)}function OT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jm,s)}function FT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Km,s)}function BT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xm,s)}function kT(n){switch(n){case 5126:return MT;case 35664:return yT;case 35665:return AT;case 35666:return ST;case 35674:return ET;case 35675:return TT;case 35676:return bT;case 5124:case 35670:return wT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return PT;case 5125:return IT;case 36294:return LT;case 36295:return DT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(n,e){n.uniform1fv(this.addr,e)}function VT(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function zT(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function GT(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function WT(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XT(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jT(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KT(n,e){n.uniform1iv(this.addr,e)}function qT(n,e){n.uniform2iv(this.addr,e)}function $T(n,e){n.uniform3iv(this.addr,e)}function YT(n,e){n.uniform4iv(this.addr,e)}function QT(n,e){n.uniform1uiv(this.addr,e)}function ZT(n,e){n.uniform2uiv(this.addr,e)}function JT(n,e){n.uniform3uiv(this.addr,e)}function eb(n,e){n.uniform4uiv(this.addr,e)}function tb(n,e,t){const i=this.cache,s=e.length,r=$a(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Wm,r[o])}function nb(n,e,t){const i=this.cache,s=e.length,r=$a(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jm,r[o])}function ib(n,e,t){const i=this.cache,s=e.length,r=$a(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Km,r[o])}function sb(n,e,t){const i=this.cache,s=e.length,r=$a(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xm,r[o])}function rb(n){switch(n){case 5126:return HT;case 35664:return VT;case 35665:return zT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return KT;case 35667:case 35671:return qT;case 35668:case 35672:return $T;case 35669:case 35673:return YT;case 5125:return QT;case 36294:return ZT;case 36295:return JT;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}class ob{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kT(t.type)}}class ab{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rb(t.type)}}class lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function cb(n,e,t){const i=n.name,s=i.length;for(jl.lastIndex=0;;){const r=jl.exec(i),o=jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cd(t,c===void 0?new ob(a,n,e):new ab(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lb(a),cd(t,f)),t=f}}}class da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ub=37297;let fb=0;function hb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const fd=new Je;function db(n){ut._getMatrix(fd,ut.workingColorSpace,n);const e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Ta:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hb(n.getShaderSource(e),a)}else return r}function pb(n,e){const t=db(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mb(n,e){let t;switch(e){case yM:t="Linear";break;case AM:t="Reinhard";break;case SM:t="Cineon";break;case EM:t="ACESFilmic";break;case bM:t="AgX";break;case wM:t="Neutral";break;case TM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new H;function gb(){ut.getLuminanceCoefficients(na);const n=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function vb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jr(n){return n!==""}function dd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(n){return n.replace(Mb,Ab)}const yb=new Map;function Ab(n,e){let t=tt[e];if(t===void 0){const i=yb.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(Sb,Eb)}function Eb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Tb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function bb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===pr&&(e="ENVMAP_MODE_REFRACTION"),e}function Rb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case xM:e="ENVMAP_BLENDING_MIX";break;case MM:e="ENVMAP_BLENDING_ADD";break}return e}function Cb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Pb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Tb(t),c=bb(t),u=wb(t),f=Rb(t),h=Cb(t),d=_b(t),g=vb(r),v=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?tt.tonemapping_pars_fragment:"",t.toneMapping!==rs?mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,pb("linearToOutputTexel",t.outputColorSpace),gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),o=lu(o),o=dd(o,t),o=pd(o,t),a=lu(a),a=dd(a,t),a=pd(a,t),o=md(o),a=md(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=A+m+o,M=A+p+a,w=ud(s,s.VERTEX_SHADER,b),C=ud(s,s.FRAGMENT_SHADER,M);s.attachShader(v,w),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(v)||"",Z=s.getShaderInfoLog(w)||"",ie=s.getShaderInfoLog(C)||"",ce=W.trim(),te=Z.trim(),he=ie.trim();let j=!0,Me=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,C);else{const Re=hd(s,w,"vertex"),De=hd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ce+`
`+Re+`
`+De)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(te===""||he==="")&&(Me=!1);Me&&(D.diagnostics={runnable:j,programLog:ce,vertexShader:{log:te,prefix:m},fragmentShader:{log:he,prefix:p}})}s.deleteShader(w),s.deleteShader(C),N=new da(s,v),S=xb(s,v)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,ub)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=C,this}let Ib=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Db(e),t.set(e,i)),i}}class Db{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}}function Nb(n,e,t,i,s,r,o){const a=new wm,l=new Lb,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,T,D,W,Z){const ie=W.fog,ce=Z.geometry,te=S.isMeshStandardMaterial?W.environment:null,he=(S.isMeshStandardMaterial?t:e).get(S.envMap||te),j=he&&he.mapping===Xa?he.image.height:null,Me=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,De=Re!==void 0?Re.length:0;let Be=0;ce.morphAttributes.position!==void 0&&(Be=1),ce.morphAttributes.normal!==void 0&&(Be=2),ce.morphAttributes.color!==void 0&&(Be=3);let Ze,et,Ce,z;if(Me){const V=oi[Me];Ze=V.vertexShader,et=V.fragmentShader}else Ze=S.vertexShader,et=S.fragmentShader,l.update(S),Ce=l.getVertexShaderID(S),z=l.getFragmentShaderID(S);const P=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),ae=Z.isInstancedMesh===!0,ue=Z.isBatchedMesh===!0,Pe=!!S.map,R=!!S.matcap,_=!!he,B=!!S.aoMap,K=!!S.lightMap,q=!!S.bumpMap,k=!!S.normalMap,ge=!!S.displacementMap,ee=!!S.emissiveMap,fe=!!S.metalnessMap,de=!!S.roughnessMap,we=S.anisotropy>0,y=S.clearcoat>0,x=S.dispersion>0,U=S.iridescence>0,Y=S.sheen>0,le=S.transmission>0,Q=we&&!!S.anisotropyMap,I=y&&!!S.clearcoatMap,F=y&&!!S.clearcoatNormalMap,ne=y&&!!S.clearcoatRoughnessMap,oe=U&&!!S.iridescenceMap,J=U&&!!S.iridescenceThicknessMap,me=Y&&!!S.sheenColorMap,_e=Y&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,Se=!!S.specularColorMap,He=!!S.specularIntensityMap,O=le&&!!S.transmissionMap,ye=le&&!!S.thicknessMap,be=!!S.gradientMap,Le=!!S.alphaMap,ve=S.alphaTest>0,pe=!!S.alphaHash,Ue=!!S.extensions;let Ve=rs;S.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const it={shaderID:Me,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:et,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ue,batchingColor:ue&&Z._colorsTexture!==null,instancing:ae,instancingColor:ae&&Z.instanceColor!==null,instancingMorph:ae&&Z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pn,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:R,envMap:_,envMapMode:_&&he.mapping,envMapCubeUVHeight:j,aoMap:B,lightMap:K,bumpMap:q,normalMap:k,displacementMap:h&&ge,emissiveMap:ee,normalMapObjectSpace:k&&S.normalMapType===DM,normalMapTangentSpace:k&&S.normalMapType===Sm,metalnessMap:fe,roughnessMap:de,anisotropy:we,anisotropyMap:Q,clearcoat:y,clearcoatMap:I,clearcoatNormalMap:F,clearcoatRoughnessMap:ne,dispersion:x,iridescence:U,iridescenceMap:oe,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:me,sheenRoughnessMap:_e,specularMap:Ee,specularColorMap:Se,specularIntensityMap:He,transmission:le,transmissionMap:O,thicknessMap:ye,gradientMap:be,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:pe,combine:S.combine,mapUv:Pe&&v(S.map.channel),aoMapUv:B&&v(S.aoMap.channel),lightMapUv:K&&v(S.lightMap.channel),bumpMapUv:q&&v(S.bumpMap.channel),normalMapUv:k&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:ee&&v(S.emissiveMap.channel),metalnessMapUv:fe&&v(S.metalnessMap.channel),roughnessMapUv:de&&v(S.roughnessMap.channel),anisotropyMapUv:Q&&v(S.anisotropyMap.channel),clearcoatMapUv:I&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:F&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(S.sheenRoughnessMap.channel),specularMapUv:Ee&&v(S.specularMap.channel),specularColorMapUv:Se&&v(S.specularColorMap.channel),specularIntensityMapUv:He&&v(S.specularIntensityMap.channel),transmissionMapUv:O&&v(S.transmissionMap.channel),thicknessMapUv:ye&&v(S.thicknessMap.channel),alphaMapUv:Le&&v(S.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(k||we),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(Pe||Le),fog:!!ie,useFog:S.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:$,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)T.push(D),T.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(A(T,S),b(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function A(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const T=g[S.type];let D;if(T){const W=oi[T];D=Ey.clone(W.uniforms)}else D=S.uniforms;return D}function w(S,T){let D;for(let W=0,Z=u.length;W<Z;W++){const ie=u[W];if(ie.cacheKey===T){D=ie,++D.usedTimes;break}}return D===void 0&&(D=new Pb(n,T,S,r),u.push(D)),D}function C(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:N}}function Ub(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ob(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Ob),i.length>1&&i.sort(h||_d),s.length>1&&s.sort(h||_d)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Fb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new vd,n.set(i,[o])):s>=r.length?(o=new vd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function kb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hb=0;function Vb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zb(n){const e=new Bb,t=kb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new nt,o=new nt;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,b=0,M=0,w=0,C=0,L=0;c.sort(Vb);for(let S=0,T=c.length;S<T;S++){const D=c[S],W=D.color,Z=D.intensity,ie=D.distance,ce=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=W.r*Z,f+=W.g*Z,h+=W.b*Z;else if(D.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(D.sh.coefficients[te],Z);L++}else if(D.isDirectionalLight){const te=e.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const he=D.shadow,j=t.get(D);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=ce,i.directionalShadowMatrix[d]=D.shadow.matrix,A++}i.directional[d]=te,d++}else if(D.isSpotLight){const te=e.get(D);te.position.setFromMatrixPosition(D.matrixWorld),te.color.copy(W).multiplyScalar(Z),te.distance=ie,te.coneCos=Math.cos(D.angle),te.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),te.decay=D.decay,i.spot[v]=te;const he=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,he.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=he.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=ce,M++}v++}else if(D.isRectAreaLight){const te=e.get(D);te.color.copy(W).multiplyScalar(Z),te.halfWidth.set(D.width*.5,0,0),te.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=te,m++}else if(D.isPointLight){const te=e.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity),te.distance=D.distance,te.decay=D.decay,D.castShadow){const he=D.shadow,j=t.get(D);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,j.shadowCameraNear=he.camera.near,j.shadowCameraFar=he.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=ce,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=te,g++}else if(D.isHemisphereLight){const te=e.get(D);te.skyColor.copy(D.color).multiplyScalar(Z),te.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[p]=te,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==A||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==w||N.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,N.directionalLength=d,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=A,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=w,N.numLightProbes=L,i.version=Hb++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const b=c[p];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function xd(n){const e=new zb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xd(n),e.set(s,[a])):r>=o.length?(a=new xd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
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
}`;function jb(n,e,t){let i=new ju;const s=new lt,r=new lt,o=new dt,a=new Gy({depthPacking:LM}),l=new Wy,c={},u=t.maxTextureSize,f={[ki]:yn,[yn]:ki,[li]:li},h=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm;let p=this.type;this.render=function(C,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ss),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=p!==bi&&this.type===bi,ie=p===bi&&this.type!==bi;for(let ce=0,te=C.length;ce<te;ce++){const he=C[ce],j=he.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const Me=j.getFrameExtents();if(s.multiply(Me),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Me.x),s.x=r.x*Me.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Me.y),s.y=r.y*Me.y,j.mapSize.y=r.y)),j.map===null||Z===!0||ie===!0){const De=this.type!==bi?{minFilter:hn,magFilter:hn}:{};j.map!==null&&j.map.dispose(),j.map=new ws(s.x,s.y,De),j.map.texture.name=he.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const Re=j.getViewportCount();for(let De=0;De<Re;De++){const Be=j.getViewport(De);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),W.viewport(o),j.updateMatrices(he,De),i=j.getFrustum(),M(L,N,j.camera,he,this.type)}j.isPointLightShadow!==!0&&this.type===bi&&A(j,N),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,T,D)};function A(C,L){const N=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ws(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,N,h,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,N,d,v,null)}function b(C,L,N,S){let T=null;const D=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)T=D;else if(T=N.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const W=T.uuid,Z=L.uuid;let ie=c[W];ie===void 0&&(ie={},c[W]=ie);let ce=ie[Z];ce===void 0&&(ce=T.clone(),ie[Z]=ce,L.addEventListener("dispose",w)),T=ce}if(T.visible=L.visible,T.wireframe=L.wireframe,S===bi?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:f[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=n.properties.get(T);W.light=N}return T}function M(C,L,N,S,T){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),ie=C.material;if(Array.isArray(ie)){const ce=Z.groups;for(let te=0,he=ce.length;te<he;te++){const j=ce[te],Me=ie[j.materialIndex];if(Me&&Me.visible){const Re=b(C,Me,S,T);C.onBeforeShadow(n,C,L,N,Z,Re,j),n.renderBufferDirect(N,null,Z,Re,C,j),C.onAfterShadow(n,C,L,N,Z,Re,j)}}}else if(ie.visible){const ce=b(C,ie,S,T);C.onBeforeShadow(n,C,L,N,Z,ce,null),n.renderBufferDirect(N,null,Z,ce,C,null),C.onAfterShadow(n,C,L,N,Z,ce,null)}}const W=C.children;for(let Z=0,ie=W.length;Z<ie;Z++)M(W[Z],L,N,S,T)}function w(C){C.target.removeEventListener("dispose",w);for(const N in c){const S=c[N],T=C.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const Kb={[yc]:Ac,[Sc]:bc,[Ec]:wc,[hr]:Tc,[Ac]:yc,[bc]:Sc,[wc]:Ec,[Tc]:hr};function qb(n,e){function t(){let O=!1;const ye=new dt;let be=null;const Le=new dt(0,0,0,0);return{setMask:function(ve){be!==ve&&!O&&(n.colorMask(ve,ve,ve,ve),be=ve)},setLocked:function(ve){O=ve},setClear:function(ve,pe,Ue,Ve,it){it===!0&&(ve*=Ve,pe*=Ve,Ue*=Ve),ye.set(ve,pe,Ue,Ve),Le.equals(ye)===!1&&(n.clearColor(ve,pe,Ue,Ve),Le.copy(ye))},reset:function(){O=!1,be=null,Le.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,be=null,Le=null,ve=null;return{setReversed:function(pe){if(ye!==pe){const Ue=e.get("EXT_clip_control");pe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ye=pe;const Ve=ve;ve=null,this.setClear(Ve)}},getReversed:function(){return ye},setTest:function(pe){pe?P(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(pe){be!==pe&&!O&&(n.depthMask(pe),be=pe)},setFunc:function(pe){if(ye&&(pe=Kb[pe]),Le!==pe){switch(pe){case yc:n.depthFunc(n.NEVER);break;case Ac:n.depthFunc(n.ALWAYS);break;case Sc:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Ec:n.depthFunc(n.EQUAL);break;case Tc:n.depthFunc(n.GEQUAL);break;case bc:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=pe}},setLocked:function(pe){O=pe},setClear:function(pe){ve!==pe&&(ye&&(pe=1-pe),n.clearDepth(pe),ve=pe)},reset:function(){O=!1,be=null,Le=null,ve=null,ye=!1}}}function s(){let O=!1,ye=null,be=null,Le=null,ve=null,pe=null,Ue=null,Ve=null,it=null;return{setTest:function(V){O||(V?P(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(V){ye!==V&&!O&&(n.stencilMask(V),ye=V)},setFunc:function(V,Ae,Oe){(be!==V||Le!==Ae||ve!==Oe)&&(n.stencilFunc(V,Ae,Oe),be=V,Le=Ae,ve=Oe)},setOp:function(V,Ae,Oe){(pe!==V||Ue!==Ae||Ve!==Oe)&&(n.stencilOp(V,Ae,Oe),pe=V,Ue=Ae,Ve=Oe)},setLocked:function(V){O=V},setClear:function(V){it!==V&&(n.clearStencil(V),it=V)},reset:function(){O=!1,ye=null,be=null,Le=null,ve=null,pe=null,Ue=null,Ve=null,it=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,b=null,M=null,w=null,C=null,L=new Qe(0,0,0),N=0,S=!1,T=null,D=null,W=null,Z=null,ie=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,he=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(j)[1]),te=he>=1):j.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),te=he>=2);let Me=null,Re={};const De=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Ze=new dt().fromArray(De),et=new dt().fromArray(Be);function Ce(O,ye,be,Le){const ve=new Uint8Array(4),pe=n.createTexture();n.bindTexture(O,pe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<be;Ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ye+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return pe}const z={};z[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(n.DEPTH_TEST),o.setFunc(hr),q(!1),k(sh),P(n.CULL_FACE),B(ss);function P(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function $(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,ye){return f[O]!==ye?(n.bindFramebuffer(O,ye),f[O]=ye,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function ue(O,ye){let be=d,Le=!1;if(O){be=h.get(ye),be===void 0&&(be=[],h.set(ye,be));const ve=O.textures;if(be.length!==ve.length||be[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ue=ve.length;pe<Ue;pe++)be[pe]=n.COLOR_ATTACHMENT0+pe;be.length=ve.length,Le=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Le=!0);Le&&n.drawBuffers(be)}function Pe(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const R={[ys]:n.FUNC_ADD,[nM]:n.FUNC_SUBTRACT,[iM]:n.FUNC_REVERSE_SUBTRACT};R[sM]=n.MIN,R[rM]=n.MAX;const _={[oM]:n.ZERO,[aM]:n.ONE,[lM]:n.SRC_COLOR,[xc]:n.SRC_ALPHA,[pM]:n.SRC_ALPHA_SATURATE,[hM]:n.DST_COLOR,[uM]:n.DST_ALPHA,[cM]:n.ONE_MINUS_SRC_COLOR,[Mc]:n.ONE_MINUS_SRC_ALPHA,[dM]:n.ONE_MINUS_DST_COLOR,[fM]:n.ONE_MINUS_DST_ALPHA,[mM]:n.CONSTANT_COLOR,[gM]:n.ONE_MINUS_CONSTANT_COLOR,[_M]:n.CONSTANT_ALPHA,[vM]:n.ONE_MINUS_CONSTANT_ALPHA};function B(O,ye,be,Le,ve,pe,Ue,Ve,it,V){if(O===ss){v===!0&&($(n.BLEND),v=!1);return}if(v===!1&&(P(n.BLEND),v=!0),O!==tM){if(O!==m||V!==S){if((p!==ys||M!==ys)&&(n.blendEquation(n.FUNC_ADD),p=ys,M=ys),V)switch(O){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,b=null,w=null,C=null,L.set(0,0,0),N=0,m=O,S=V}return}ve=ve||ye,pe=pe||be,Ue=Ue||Le,(ye!==p||ve!==M)&&(n.blendEquationSeparate(R[ye],R[ve]),p=ye,M=ve),(be!==A||Le!==b||pe!==w||Ue!==C)&&(n.blendFuncSeparate(_[be],_[Le],_[pe],_[Ue]),A=be,b=Le,w=pe,C=Ue),(Ve.equals(L)===!1||it!==N)&&(n.blendColor(Ve.r,Ve.g,Ve.b,it),L.copy(Ve),N=it),m=O,S=!1}function K(O,ye){O.side===li?$(n.CULL_FACE):P(n.CULL_FACE);let be=O.side===yn;ye&&(be=!be),q(be),O.blending===sr&&O.transparent===!1?B(ss):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Le=O.stencilWrite;a.setTest(Le),Le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function k(O){O!==Zx?(P(n.CULL_FACE),O!==D&&(O===sh?n.cullFace(n.BACK):O===Jx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),D=O}function ge(O){O!==W&&(te&&n.lineWidth(O),W=O)}function ee(O,ye,be){O?(P(n.POLYGON_OFFSET_FILL),(Z!==ye||ie!==be)&&(n.polygonOffset(ye,be),Z=ye,ie=be)):$(n.POLYGON_OFFSET_FILL)}function fe(O){O?P(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function de(O){O===void 0&&(O=n.TEXTURE0+ce-1),Me!==O&&(n.activeTexture(O),Me=O)}function we(O,ye,be){be===void 0&&(Me===null?be=n.TEXTURE0+ce-1:be=Me);let Le=Re[be];Le===void 0&&(Le={type:void 0,texture:void 0},Re[be]=Le),(Le.type!==O||Le.texture!==ye)&&(Me!==be&&(n.activeTexture(be),Me=be),n.bindTexture(O,ye||z[O]),Le.type=O,Le.texture=ye)}function y(){const O=Re[Me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(O){Ze.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ze.copy(O))}function _e(O){et.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Ee(O,ye){let be=c.get(ye);be===void 0&&(be=new WeakMap,c.set(ye,be));let Le=be.get(O);Le===void 0&&(Le=n.getUniformBlockIndex(ye,O.name),be.set(O,Le))}function Se(O,ye){const Le=c.get(ye).get(O);l.get(ye)!==Le&&(n.uniformBlockBinding(ye,Le,O.__bindingPointIndex),l.set(ye,Le))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Me=null,Re={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,b=null,M=null,w=null,C=null,L=new Qe(0,0,0),N=0,S=!1,T=null,D=null,W=null,Z=null,ie=null,Ze.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:$,bindFramebuffer:ae,drawBuffers:ue,useProgram:Pe,setBlending:B,setMaterial:K,setFlipSided:q,setCullFace:k,setLineWidth:ge,setPolygonOffset:ee,setScissorTest:fe,activeTexture:de,bindTexture:we,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:oe,texImage3D:J,updateUBOMapping:Ee,uniformBlockBinding:Se,texStorage2D:F,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:I,scissor:me,viewport:_e,reset:He}}function $b(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return d?new OffscreenCanvas(y,x):xo("canvas")}function v(y,x,U){let Y=1;const le=we(y);if((le.width>U||le.height>U)&&(Y=U/Math.max(le.width,le.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Q=Math.floor(Y*le.width),I=Math.floor(Y*le.height);f===void 0&&(f=g(Q,I));const F=x?g(Q,I):f;return F.width=Q,F.height=I,F.getContext("2d").drawImage(y,0,0,Q,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+I+")."),F}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(y,x,U,Y,le=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=x;if(x===n.RED&&(U===n.FLOAT&&(Q=n.R32F),U===n.HALF_FLOAT&&(Q=n.R16F),U===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.R8UI),U===n.UNSIGNED_SHORT&&(Q=n.R16UI),U===n.UNSIGNED_INT&&(Q=n.R32UI),U===n.BYTE&&(Q=n.R8I),U===n.SHORT&&(Q=n.R16I),U===n.INT&&(Q=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Q=n.RG32F),U===n.HALF_FLOAT&&(Q=n.RG16F),U===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RG8UI),U===n.UNSIGNED_SHORT&&(Q=n.RG16UI),U===n.UNSIGNED_INT&&(Q=n.RG32UI),U===n.BYTE&&(Q=n.RG8I),U===n.SHORT&&(Q=n.RG16I),U===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),U===n.UNSIGNED_INT&&(Q=n.RGB32UI),U===n.BYTE&&(Q=n.RGB8I),U===n.SHORT&&(Q=n.RGB16I),U===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),U===n.UNSIGNED_INT&&(Q=n.RGBA32UI),U===n.BYTE&&(Q=n.RGBA8I),U===n.SHORT&&(Q=n.RGBA16I),U===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){const I=le?Ta:ut.getTransfer(Y);U===n.FLOAT&&(Q=n.RGBA32F),U===n.HALF_FLOAT&&(Q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Q=I===St?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(y,x){let U;return y?x===null||x===bs||x===po?U=n.DEPTH24_STENCIL8:x===jn?U=n.DEPTH32F_STENCIL8:x===ho&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bs||x===po?U=n.DEPTH_COMPONENT24:x===jn?U=n.DEPTH_COMPONENT32F:x===ho&&(U=n.DEPTH_COMPONENT16),U}function w(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==hn&&y.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function C(y){const x=y.target;x.removeEventListener("dispose",C),N(x),x.isVideoTexture&&u.delete(x)}function L(y){const x=y.target;x.removeEventListener("dispose",L),T(x)}function N(y){const x=i.get(y);if(x.__webglInit===void 0)return;const U=y.source,Y=h.get(U);if(Y){const le=Y[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(y),Object.keys(Y).length===0&&h.delete(U)}i.remove(y)}function S(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const U=y.source,Y=h.get(U);delete Y[x.__cacheKey],o.memory.textures--}function T(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let le=0;le<x.__webglFramebuffer[Y].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[Y][le]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=y.textures;for(let Y=0,le=U.length;Y<le;Y++){const Q=i.get(U[Y]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(y)}let D=0;function W(){D=0}function Z(){const y=D;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),D+=1,y}function ie(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function ce(y,x){const U=i.get(y);if(y.isVideoTexture&&fe(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&U.__version!==y.version){const Y=y.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(U,y,x);return}}else y.isExternalTexture&&(U.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function te(y,x){const U=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){z(U,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function he(y,x){const U=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){z(U,y,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function j(y,x){const U=i.get(y);if(y.version>0&&U.__version!==y.version){P(U,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const Me={[mr]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Ea]:n.MIRRORED_REPEAT},Re={[hn]:n.NEAREST,[pm]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},De={[NM]:n.NEVER,[HM]:n.ALWAYS,[UM]:n.LESS,[Em]:n.LEQUAL,[OM]:n.EQUAL,[kM]:n.GEQUAL,[FM]:n.GREATER,[BM]:n.NOTEQUAL};function Be(y,x){if(x.type===jn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===aa||x.magFilter===Xr||x.magFilter===Ii||x.minFilter===fn||x.minFilter===aa||x.minFilter===Xr||x.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,Me[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Me[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Me[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Re[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==Xr&&x.minFilter!==Ii||x.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(y,x){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",C));const Y=x.source;let le=h.get(Y);le===void 0&&(le={},h.set(Y,le));const Q=ie(x);if(Q!==y.__cacheKey){le[Q]===void 0&&(le[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),le[Q].usedTimes++;const I=le[y.__cacheKey];I!==void 0&&(le[y.__cacheKey].usedTimes--,I.usedTimes===0&&S(x)),y.__cacheKey=Q,y.__webglTexture=le[Q].texture}return U}function et(y,x,U){return Math.floor(Math.floor(y/U)/x)}function Ce(y,x,U,Y){const Q=y.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,Y,x.data);else{Q.sort((J,me)=>J.start-me.start);let I=0;for(let J=1;J<Q.length;J++){const me=Q[I],_e=Q[J],Ee=me.start+me.count,Se=et(_e.start,x.width,4),He=et(me.start,x.width,4);_e.start<=Ee+1&&Se===He&&et(_e.start+_e.count-1,x.width,4)===Se?me.count=Math.max(me.count,_e.start+_e.count-me.start):(++I,Q[I]=_e)}Q.length=I+1;const F=n.getParameter(n.UNPACK_ROW_LENGTH),ne=n.getParameter(n.UNPACK_SKIP_PIXELS),oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let J=0,me=Q.length;J<me;J++){const _e=Q[J],Ee=Math.floor(_e.start/4),Se=Math.ceil(_e.count/4),He=Ee%x.width,O=Math.floor(Ee/x.width),ye=Se,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,He,O,ye,be,U,Y,x.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,F),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function z(y,x,U){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const le=Ze(y,x),Q=x.source;t.bindTexture(Y,y.__webglTexture,n.TEXTURE0+U);const I=i.get(Q);if(Q.version!==I.__version||le===!0){t.activeTexture(n.TEXTURE0+U);const F=ut.getPrimaries(ut.workingColorSpace),ne=x.colorSpace===es?null:ut.getPrimaries(x.colorSpace),oe=x.colorSpace===es||F===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let J=v(x.image,!1,s.maxTextureSize);J=de(x,J);const me=r.convert(x.format,x.colorSpace),_e=r.convert(x.type);let Ee=b(x.internalFormat,me,_e,x.colorSpace,x.isVideoTexture);Be(Y,x);let Se;const He=x.mipmaps,O=x.isVideoTexture!==!0,ye=I.__version===void 0||le===!0,be=Q.dataReady,Le=w(x,J);if(x.isDepthTexture)Ee=M(x.format===go,x.type),ye&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,me,_e,null));else if(x.isDataTexture)if(He.length>0){O&&ye&&t.texStorage2D(n.TEXTURE_2D,Le,Ee,He[0].width,He[0].height);for(let ve=0,pe=He.length;ve<pe;ve++)Se=He[ve],O?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,me,_e,Se.data):t.texImage2D(n.TEXTURE_2D,ve,Ee,Se.width,Se.height,0,me,_e,Se.data);x.generateMipmaps=!1}else O?(ye&&t.texStorage2D(n.TEXTURE_2D,Le,Ee,J.width,J.height),be&&Ce(x,J,me,_e)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,me,_e,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ee,He[0].width,He[0].height,J.depth);for(let ve=0,pe=He.length;ve<pe;ve++)if(Se=He[ve],x.format!==On)if(me!==null)if(O){if(be)if(x.layerUpdates.size>0){const Ue=$h(Se.width,Se.height,x.format,x.type);for(const Ve of x.layerUpdates){const it=Se.data.subarray(Ve*Ue/Se.data.BYTES_PER_ELEMENT,(Ve+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ve,Se.width,Se.height,1,me,it)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,J.depth,me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ee,Se.width,Se.height,J.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,J.depth,me,_e,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ee,Se.width,Se.height,J.depth,0,me,_e,Se.data)}else{O&&ye&&t.texStorage2D(n.TEXTURE_2D,Le,Ee,He[0].width,He[0].height);for(let ve=0,pe=He.length;ve<pe;ve++)Se=He[ve],x.format!==On?me!==null?O?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,me,_e,Se.data):t.texImage2D(n.TEXTURE_2D,ve,Ee,Se.width,Se.height,0,me,_e,Se.data)}else if(x.isDataArrayTexture)if(O){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ee,J.width,J.height,J.depth),be)if(x.layerUpdates.size>0){const ve=$h(J.width,J.height,x.format,x.type);for(const pe of x.layerUpdates){const Ue=J.data.subarray(pe*ve/J.data.BYTES_PER_ELEMENT,(pe+1)*ve/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,J.width,J.height,1,me,_e,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,me,_e,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,me,_e,J.data);else if(x.isData3DTexture)O?(ye&&t.texStorage3D(n.TEXTURE_3D,Le,Ee,J.width,J.height,J.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,me,_e,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,me,_e,J.data);else if(x.isFramebufferTexture){if(ye)if(O)t.texStorage2D(n.TEXTURE_2D,Le,Ee,J.width,J.height);else{let ve=J.width,pe=J.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ee,ve,pe,0,me,_e,null),ve>>=1,pe>>=1}}else if(He.length>0){if(O&&ye){const ve=we(He[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ee,ve.width,ve.height)}for(let ve=0,pe=He.length;ve<pe;ve++)Se=He[ve],O?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,me,_e,Se):t.texImage2D(n.TEXTURE_2D,ve,Ee,me,_e,Se);x.generateMipmaps=!1}else if(O){if(ye){const ve=we(J);t.texStorage2D(n.TEXTURE_2D,Le,Ee,ve.width,ve.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,_e,J)}else t.texImage2D(n.TEXTURE_2D,0,Ee,me,_e,J);m(x)&&p(Y),I.__version=Q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function P(y,x,U){if(x.image.length!==6)return;const Y=Ze(y,x),le=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const Q=i.get(le);if(le.version!==Q.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);const I=ut.getPrimaries(ut.workingColorSpace),F=x.colorSpace===es?null:ut.getPrimaries(x.colorSpace),ne=x.colorSpace===es||I===F?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,me=[];for(let pe=0;pe<6;pe++)!oe&&!J?me[pe]=v(x.image[pe],!0,s.maxCubemapSize):me[pe]=J?x.image[pe].image:x.image[pe],me[pe]=de(x,me[pe]);const _e=me[0],Ee=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),He=b(x.internalFormat,Ee,Se,x.colorSpace),O=x.isVideoTexture!==!0,ye=Q.__version===void 0||Y===!0,be=le.dataReady;let Le=w(x,_e);Be(n.TEXTURE_CUBE_MAP,x);let ve;if(oe){O&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,He,_e.width,_e.height);for(let pe=0;pe<6;pe++){ve=me[pe].mipmaps;for(let Ue=0;Ue<ve.length;Ue++){const Ve=ve[Ue];x.format!==On?Ee!==null?O?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Ve.width,Ve.height,Ee,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,He,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Ve.width,Ve.height,Ee,Se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,He,Ve.width,Ve.height,0,Ee,Se,Ve.data)}}}else{if(ve=x.mipmaps,O&&ye){ve.length>0&&Le++;const pe=we(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,He,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(J){O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,me[pe].width,me[pe].height,Ee,Se,me[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,He,me[pe].width,me[pe].height,0,Ee,Se,me[pe].data);for(let Ue=0;Ue<ve.length;Ue++){const it=ve[Ue].image[pe].image;O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,it.width,it.height,Ee,Se,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,He,it.width,it.height,0,Ee,Se,it.data)}}else{O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee,Se,me[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,He,Ee,Se,me[pe]);for(let Ue=0;Ue<ve.length;Ue++){const Ve=ve[Ue];O?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,Ee,Se,Ve.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,He,Ee,Se,Ve.image[pe])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Q.__version=le.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function $(y,x,U,Y,le,Q){const I=r.convert(U.format,U.colorSpace),F=r.convert(U.type),ne=b(U.internalFormat,I,F,U.colorSpace),oe=i.get(x),J=i.get(U);if(J.__renderTarget=x,!oe.__hasExternalTextures){const me=Math.max(1,x.width>>Q),_e=Math.max(1,x.height>>Q);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,ne,me,_e,x.depth,0,I,F,null):t.texImage2D(le,Q,ne,me,_e,0,I,F,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,le,J.__webglTexture,0,ge(x)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,le,J.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(y,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const Y=x.depthTexture,le=Y&&Y.isDepthTexture?Y.type:null,Q=M(x.stencilBuffer,le),I=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=ge(x);ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,Q,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,y)}else{const Y=x.textures;for(let le=0;le<Y.length;le++){const Q=Y[le],I=r.convert(Q.format,Q.colorSpace),F=r.convert(Q.type),ne=b(Q.internalFormat,I,F,Q.colorSpace),oe=ge(x);U&&ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ne,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ce(x.depthTexture,0);const le=Y.__webglTexture,Q=ge(x);if(x.depthTexture.format===mo)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(x.depthTexture.format===go)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Pe(y){const x=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const Y=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",le)};Y.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=Y}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const Y=y.texture.mipmaps;Y&&Y.length>0?ue(x.__webglFramebuffer[0],y):ue(x.__webglFramebuffer,y)}else if(U){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[Y],y,!1);else{const le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Q)}}else{const Y=y.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,y,!1);else{const le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(y,x,U){const Y=i.get(y);x!==void 0&&$(Y.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Pe(y)}function _(y){const x=y.texture,U=i.get(y),Y=i.get(x);y.addEventListener("dispose",L);const le=y.textures,Q=y.isWebGLCubeRenderTarget===!0,I=le.length>1;if(I||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),Q){U.__webglFramebuffer=[];for(let F=0;F<6;F++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[F]=[];for(let ne=0;ne<x.mipmaps.length;ne++)U.__webglFramebuffer[F][ne]=n.createFramebuffer()}else U.__webglFramebuffer[F]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let F=0;F<x.mipmaps.length;F++)U.__webglFramebuffer[F]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(I)for(let F=0,ne=le.length;F<ne;F++){const oe=i.get(le[F]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&ee(y)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let F=0;F<le.length;F++){const ne=le[F];U.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[F]);const oe=r.convert(ne.format,ne.colorSpace),J=r.convert(ne.type),me=b(ne.internalFormat,oe,J,ne.colorSpace,y.isXRRenderTarget===!0),_e=ge(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,me,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,U.__webglColorRenderbuffer[F])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x);for(let F=0;F<6;F++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)$(U.__webglFramebuffer[F][ne],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne);else $(U.__webglFramebuffer[F],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let F=0,ne=le.length;F<ne;F++){const oe=le[F],J=i.get(oe);let me=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(me=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,J.__webglTexture),Be(me,oe),$(U.__webglFramebuffer,y,oe,n.COLOR_ATTACHMENT0+F,me,0),m(oe)&&p(me)}t.unbindTexture()}else{let F=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(F=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(F,Y.__webglTexture),Be(F,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)$(U.__webglFramebuffer[ne],y,x,n.COLOR_ATTACHMENT0,F,ne);else $(U.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,F,0);m(x)&&p(F),t.unbindTexture()}y.depthBuffer&&Pe(y)}function B(y){const x=y.textures;for(let U=0,Y=x.length;U<Y;U++){const le=x[U];if(m(le)){const Q=A(y),I=i.get(le).__webglTexture;t.bindTexture(Q,I),p(Q),t.unbindTexture()}}}const K=[],q=[];function k(y){if(y.samples>0){if(ee(y)===!1){const x=y.textures,U=y.width,Y=y.height;let le=n.COLOR_BUFFER_BIT;const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=i.get(y),F=x.length>1;if(F)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);const ne=y.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),F){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const J=i.get(x[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,le,n.NEAREST),l===!0&&(K.length=0,q.length=0,K.push(n.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(K.push(Q),q.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),F)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const J=i.get(x[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ge(y){return Math.min(s.maxSamples,y.samples)}function ee(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function fe(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function de(y,x){const U=y.colorSpace,Y=y.format,le=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==pn&&U!==es&&(ut.getTransfer(U)===St?(Y!==On||le!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function we(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=he,this.setTextureCube=j,this.rebindTextures=R,this.setupRenderTarget=_,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ee}function Yb(n,e){function t(i,s=es){let r;const o=ut.getTransfer(s);if(i===di)return n.UNSIGNED_BYTE;if(i===Ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_m)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mm)return n.BYTE;if(i===gm)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===bs)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===To)return n.HALF_FLOAT;if(i===xm)return n.ALPHA;if(i===Mm)return n.RGB;if(i===On)return n.RGBA;if(i===mo)return n.DEPTH_COMPONENT;if(i===go)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===ym)return n.RG;if(i===Hu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===fa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nc||i===Uc||i===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nc||i===Uc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fc||i===Bc||i===kc||i===Hc||i===Vc||i===zc||i===Gc||i===Wc||i===Xc||i===jc||i===Kc||i===qc||i===$c||i===Yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===Zc||i===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===tu||i===nu||i===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
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

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new km(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new os({vertexShader:Qb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ew extends Ar{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Jb,p={},A=t.getContextAttributes();let b=null,M=null;const w=[],C=[],L=new lt;let N=null;const S=new un;S.viewport=new dt;const T=new un;T.viewport=new dt;const D=[S,T],W=new fA;let Z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let P=w[z];return P===void 0&&(P=new Dl,w[z]=P),P.getTargetRaySpace()},this.getControllerGrip=function(z){let P=w[z];return P===void 0&&(P=new Dl,w[z]=P),P.getGripSpace()},this.getHand=function(z){let P=w[z];return P===void 0&&(P=new Dl,w[z]=P),P.getHandSpace()};function ce(z){const P=C.indexOf(z.inputSource);if(P===-1)return;const $=w[P];$!==void 0&&($.update(z.inputSource,z.frame,c||o),$.dispatchEvent({type:z.type,data:z.inputSource}))}function te(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",he);for(let z=0;z<w.length;z++){const P=C[z];P!==null&&(C[z]=null,w[z].disconnect(P))}Z=null,ie=null,m.reset();for(const z in p)delete p[z];e.setRenderTarget(b),d=null,h=null,f=null,s=null,M=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",te),s.addEventListener("inputsourceschange",he),A.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ae=null,ue=null;A.depth&&(ue=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=A.stencil?go:mo,ae=A.stencil?po:bs);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ws(h.textureWidth,h.textureHeight,{format:On,type:di,depthTexture:new Bm(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const $={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ws(d.framebufferWidth,d.framebufferHeight,{format:On,type:di,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(z){for(let P=0;P<z.removed.length;P++){const $=z.removed[P],ae=C.indexOf($);ae>=0&&(C[ae]=null,w[ae].disconnect($))}for(let P=0;P<z.added.length;P++){const $=z.added[P];let ae=C.indexOf($);if(ae===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=C.length){C.push($),ae=Pe;break}else if(C[Pe]===null){C[Pe]=$,ae=Pe;break}if(ae===-1)break}const ue=w[ae];ue&&ue.connect($)}}const j=new H,Me=new H;function Re(z,P,$){j.setFromMatrixPosition(P.matrixWorld),Me.setFromMatrixPosition($.matrixWorld);const ae=j.distanceTo(Me),ue=P.projectionMatrix.elements,Pe=$.projectionMatrix.elements,R=ue[14]/(ue[10]-1),_=ue[14]/(ue[10]+1),B=(ue[9]+1)/ue[5],K=(ue[9]-1)/ue[5],q=(ue[8]-1)/ue[0],k=(Pe[8]+1)/Pe[0],ge=R*q,ee=R*k,fe=ae/(-q+k),de=fe*-q;if(P.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(de),z.translateZ(fe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ue[10]===-1)z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const we=R+fe,y=_+fe,x=ge-de,U=ee+(ae-de),Y=B*_/y*we,le=K*_/y*we;z.projectionMatrix.makePerspective(x,U,Y,le,we,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function De(z,P){P===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(P.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let P=z.near,$=z.far;m.texture!==null&&(m.depthNear>0&&(P=m.depthNear),m.depthFar>0&&($=m.depthFar)),W.near=T.near=S.near=P,W.far=T.far=S.far=$,(Z!==W.near||ie!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Z=W.near,ie=W.far),W.layers.mask=z.layers.mask|6,S.layers.mask=W.layers.mask&3,T.layers.mask=W.layers.mask&5;const ae=z.parent,ue=W.cameras;De(W,ae);for(let Pe=0;Pe<ue.length;Pe++)De(ue[Pe],ae);ue.length===2?Re(W,S,T):W.projectionMatrix.copy(S.projectionMatrix),Be(z,W,ae)};function Be(z,P,$){$===null?z.matrix.copy(P.matrixWorld):(z.matrix.copy($.matrixWorld),z.matrix.invert(),z.matrix.multiply(P.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=gr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(z){return p[z]};let Ze=null;function et(z,P){if(u=P.getViewerPose(c||o),g=P,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ae=!1;$.length!==W.cameras.length&&(W.cameras.length=0,ae=!0);for(let _=0;_<$.length;_++){const B=$[_];let K=null;if(d!==null)K=d.getViewport(B);else{const k=f.getViewSubImage(h,B);K=k.viewport,_===0&&(e.setRenderTargetTextures(M,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(M))}let q=D[_];q===void 0&&(q=new un,q.layers.enable(_),q.viewport=new dt,D[_]=q),q.matrix.fromArray(B.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(B.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(K.x,K.y,K.width,K.height),_===0&&(W.matrix.copy(q.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ae===!0&&W.cameras.push(q)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const _=f.getDepthInformation($[0]);_&&_.isValid&&_.texture&&m.init(_,s.renderState)}if(ue&&ue.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let _=0;_<$.length;_++){const B=$[_].camera;if(B){let K=p[B];K||(K=new km,p[B]=K);const q=f.getCameraImage(B);K.sourceTexture=q}}}}for(let $=0;$<w.length;$++){const ae=C[$],ue=w[$];ae!==null&&ue!==void 0&&ue.update(ae,P,c||o)}Ze&&Ze(z,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),g=null}const Ce=new Gm;Ce.setAnimationLoop(et),this.setAnimationLoop=function(z){Ze=z},this.dispose=function(){}}}const gs=new Jn,tw=new nt;function nw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Im(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),b=A.envMap,M=A.envMapRotation;b&&(m.envMap.value=b,gs.copy(M),gs.x*=-1,gs.y*=-1,gs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(gs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const M=b.program;i.uniformBlockBinding(A,M)}function c(A,b){let M=s[A.id];M===void 0&&(g(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(A,w);const C=e.render.frame;r[A.id]!==C&&(h(A),r[A.id]=C)}function u(A){const b=f();A.__bindingPointIndex=b;const M=n.createBuffer(),w=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const b=s[A.id],M=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,L=M.length;C<L;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,T=N.length;S<T;S++){const D=N[S];if(d(D,C,S,w)===!0){const W=D.__offset,Z=Array.isArray(D.value)?D.value:[D.value];let ie=0;for(let ce=0;ce<Z.length;ce++){const te=Z[ce],he=v(te);typeof te=="number"||typeof te=="boolean"?(D.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,W+ie,D.__data)):te.isMatrix3?(D.__data[0]=te.elements[0],D.__data[1]=te.elements[1],D.__data[2]=te.elements[2],D.__data[3]=0,D.__data[4]=te.elements[3],D.__data[5]=te.elements[4],D.__data[6]=te.elements[5],D.__data[7]=0,D.__data[8]=te.elements[6],D.__data[9]=te.elements[7],D.__data[10]=te.elements[8],D.__data[11]=0):(te.toArray(D.__data,ie),ie+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,b,M,w){const C=A.value,L=b+"_"+M;if(w[L]===void 0)return typeof C=="number"||typeof C=="boolean"?w[L]=C:w[L]=C.clone(),!0;{const N=w[L];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return w[L]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(A){const b=A.uniforms;let M=0;const w=16;for(let L=0,N=b.length;L<N;L++){const S=Array.isArray(b[L])?b[L]:[b[L]];for(let T=0,D=S.length;T<D;T++){const W=S[T],Z=Array.isArray(W.value)?W.value:[W.value];for(let ie=0,ce=Z.length;ie<ce;ie++){const te=Z[ie],he=v(te),j=M%w,Me=j%he.boundary,Re=j+Me;M+=Me,Re!==0&&w-Re<he.storage&&(M+=w-Re),W.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=he.storage}}}const C=M%w;return C>0&&(M+=w-C),A.__size=M,A.__cache={},this}function v(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class sw{constructor(e={}){const{canvas:t=sy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=Gt;let C=0,L=0,N=null,S=-1,T=null;const D=new dt,W=new dt;let Z=null;const ie=new Qe(0);let ce=0,te=t.width,he=t.height,j=1,Me=null,Re=null;const De=new dt(0,0,te,he),Be=new dt(0,0,te,he);let Ze=!1;const et=new ju;let Ce=!1,z=!1;const P=new nt,$=new H,ae=new dt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function R(){return N===null?j:1}let _=i;function B(E,G){return t.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nu}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ve,!1),_===null){const G="webgl2";if(_=B(G,E),_===null)throw B(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,q,k,ge,ee,fe,de,we,y,x,U,Y,le,Q,I,F,ne,oe,J,me,_e,Ee,Se,He;function O(){K=new pT(_),K.init(),Ee=new Yb(_,K),q=new aT(_,K,e,Ee),k=new qb(_,K),q.reversedDepthBuffer&&h&&k.buffers.depth.setReversed(!0),ge=new _T(_),ee=new Ub,fe=new $b(_,K,k,ee,q,Ee,ge),de=new cT(M),we=new dT(M),y=new SA(_),Se=new rT(_,y),x=new mT(_,y,ge,Se),U=new xT(_,x,y,ge),J=new vT(_,q,fe),F=new lT(ee),Y=new Nb(M,de,we,K,q,Se,F),le=new nw(M,ee),Q=new Fb,I=new Gb(K),oe=new sT(M,de,we,k,U,d,l),ne=new jb(M,U,q),He=new iw(_,ge,q,k),me=new oT(_,K,ge),_e=new gT(_,K,ge),ge.programs=Y.programs,M.capabilities=q,M.extensions=K,M.properties=ee,M.renderLists=Q,M.shadowMap=ne,M.state=k,M.info=ge}O();const ye=new ew(M,_);this.xr=ye,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(te,he,!1))},this.getSize=function(E){return E.set(te,he)},this.setSize=function(E,G,se=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,he=G,t.width=Math.floor(E*j),t.height=Math.floor(G*j),se===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(te*j,he*j).floor()},this.setDrawingBufferSize=function(E,G,se){te=E,he=G,j=se,t.width=Math.floor(E*se),t.height=Math.floor(G*se),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,G,se,re){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,G,se,re),k.viewport(D.copy(De).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,G,se,re){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,G,se,re),k.scissor(W.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){k.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){Me=E},this.setTransparentSort=function(E){Re=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,se=!0){let re=0;if(E){let X=!1;if(N!==null){const Te=N.texture.format;X=Te===Vu||Te===Hu||Te===ku}if(X){const Te=N.texture.type,Ne=Te===di||Te===bs||Te===ho||Te===po||Te===Ou||Te===Fu,ke=oe.getClearColor(),Fe=oe.getClearAlpha(),je=ke.r,qe=ke.g,Ge=ke.b;Ne?(g[0]=je,g[1]=qe,g[2]=Ge,g[3]=Fe,_.clearBufferuiv(_.COLOR,0,g)):(v[0]=je,v[1]=qe,v[2]=Ge,v[3]=Fe,_.clearBufferiv(_.COLOR,0,v))}else re|=_.COLOR_BUFFER_BIT}G&&(re|=_.DEPTH_BUFFER_BIT),se&&(re|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),oe.dispose(),Q.dispose(),I.dispose(),ee.dispose(),de.dispose(),we.dispose(),U.dispose(),Se.dispose(),He.dispose(),Y.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Oe),ye.removeEventListener("sessionend",ze),We.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=ge.autoReset,G=ne.enabled,se=ne.autoUpdate,re=ne.needsUpdate,X=ne.type;O(),ge.autoReset=E,ne.enabled=G,ne.autoUpdate=se,ne.needsUpdate=re,ne.type=X}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){const G=E.target;G.removeEventListener("dispose",pe),Ue(G)}function Ue(E){Ve(E),ee.remove(E)}function Ve(E){const G=ee.get(E).programs;G!==void 0&&(G.forEach(function(se){Y.releaseProgram(se)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,se,re,X,Te){G===null&&(G=ue);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,ke=Rr(E,G,se,re,X);k.setMaterial(re,Ne);let Fe=se.index,je=1;if(re.wireframe===!0){if(Fe=x.getWireframeAttribute(se),Fe===void 0)return;je=2}const qe=se.drawRange,Ge=se.attributes.position;let ot=qe.start*je,At=(qe.start+qe.count)*je;Te!==null&&(ot=Math.max(ot,Te.start*je),At=Math.min(At,(Te.start+Te.count)*je)),Fe!==null?(ot=Math.max(ot,0),At=Math.min(At,Fe.count)):Ge!=null&&(ot=Math.max(ot,0),At=Math.min(At,Ge.count));const Dt=At-ot;if(Dt<0||Dt===1/0)return;Se.setup(X,re,ke,se,Fe);let Ct,Et=me;if(Fe!==null&&(Ct=y.get(Fe),Et=_e,Et.setIndex(Ct)),X.isMesh)re.wireframe===!0?(k.setLineWidth(re.wireframeLinewidth*R()),Et.setMode(_.LINES)):Et.setMode(_.TRIANGLES);else if(X.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),k.setLineWidth(Xe*R()),X.isLineSegments?Et.setMode(_.LINES):X.isLineLoop?Et.setMode(_.LINE_LOOP):Et.setMode(_.LINE_STRIP)}else X.isPoints?Et.setMode(_.POINTS):X.isSprite&&Et.setMode(_.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xe=X._multiDrawStarts,Pt=X._multiDrawCounts,ht=X._multiDrawCount,En=Fe?y.get(Fe).bytesPerElement:1,Cs=ee.get(re).currentProgram.getUniforms();for(let Tn=0;Tn<ht;Tn++)Cs.setValue(_,"_gl_DrawID",Tn),Et.render(Xe[Tn]/En,Pt[Tn])}else if(X.isInstancedMesh)Et.renderInstances(ot,Dt,X.count);else if(se.isInstancedBufferGeometry){const Xe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Pt=Math.min(se.instanceCount,Xe);Et.renderInstances(ot,Dt,Pt)}else Et.render(ot,Dt)};function it(E,G,se){E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,Ft(E,G,se),E.side=ki,E.needsUpdate=!0,Ft(E,G,se),E.side=li):Ft(E,G,se)}this.compile=function(E,G,se=null){se===null&&(se=E),p=I.get(se),p.init(G),b.push(p),se.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),E!==se&&E.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const re=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const ke=Te[Ne];it(ke,se,X),re.add(ke)}else it(Te,se,X),re.add(Te)}),p=b.pop(),re},this.compileAsync=function(E,G,se=null){const re=this.compile(E,G,se);return new Promise(X=>{function Te(){if(re.forEach(function(Ne){ee.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){X(E);return}setTimeout(Te,10)}K.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let V=null;function Ae(E){V&&V(E)}function Oe(){We.stop()}function ze(){We.start()}const We=new Gm;We.setAnimationLoop(Ae),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(E){V=E,ye.setAnimationLoop(E),E===null?We.stop():We.start()},ye.addEventListener("sessionstart",Oe),ye.addEventListener("sessionend",ze),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,G,N),p=I.get(E,b.length),p.init(G),b.push(p),P.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(P,ci,G.reversedDepth),z=this.localClippingEnabled,Ce=F.init(this.clippingPlanes,z),m=Q.get(E,A.length),m.init(),A.push(m),ye.enabled===!0&&ye.isPresenting===!0){const Te=M.xr.getDepthSensingMesh();Te!==null&&ct(Te,G,-1/0,M.sortObjects)}ct(E,G,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Me,Re),Pe=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Pe&&oe.addToRenderList(m,E),this.info.render.frame++,Ce===!0&&F.beginShadows();const se=p.state.shadowsArray;ne.render(se,E,G),Ce===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Te=G.cameras;if(X.length>0)for(let Ne=0,ke=Te.length;Ne<ke;Ne++){const Fe=Te[Ne];pt(re,X,E,Fe)}Pe&&oe.render(E);for(let Ne=0,ke=Te.length;Ne<ke;Ne++){const Fe=Te[Ne];ft(m,E,Fe,Fe.viewport)}}else X.length>0&&pt(re,X,E,G),Pe&&oe.render(E),ft(m,E,G);N!==null&&L===0&&(fe.updateMultisampleRenderTarget(N),fe.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(M,E,G),Se.resetDefaultState(),S=-1,T=null,b.pop(),b.length>0?(p=b[b.length-1],Ce===!0&&F.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ct(E,G,se,re){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)se=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){re&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Ne=U.update(E),ke=E.material;ke.visible&&m.push(E,Ne,ke,se,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Ne=U.update(E),ke=E.material;if(re&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ae.copy(Ne.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(P)),Array.isArray(ke)){const Fe=Ne.groups;for(let je=0,qe=Fe.length;je<qe;je++){const Ge=Fe[je],ot=ke[Ge.materialIndex];ot&&ot.visible&&m.push(E,Ne,ot,se,ae.z,Ge)}}else ke.visible&&m.push(E,Ne,ke,se,ae.z,null)}}const Te=E.children;for(let Ne=0,ke=Te.length;Ne<ke;Ne++)ct(Te[Ne],G,se,re)}function ft(E,G,se,re){const X=E.opaque,Te=E.transmissive,Ne=E.transparent;p.setupLightsView(se),Ce===!0&&F.setGlobalState(M.clippingPlanes,se),re&&k.viewport(D.copy(re)),X.length>0&&Ut(X,G,se),Te.length>0&&Ut(Te,G,se),Ne.length>0&&Ut(Ne,G,se),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function pt(E,G,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new ws(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?To:di,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Te=p.state.transmissionRenderTarget[re.id],Ne=re.viewport||D;Te.setSize(Ne.z*M.transmissionResolutionScale,Ne.w*M.transmissionResolutionScale);const ke=M.getRenderTarget(),Fe=M.getActiveCubeFace(),je=M.getActiveMipmapLevel();M.setRenderTarget(Te),M.getClearColor(ie),ce=M.getClearAlpha(),ce<1&&M.setClearColor(16777215,.5),M.clear(),Pe&&oe.render(se);const qe=M.toneMapping;M.toneMapping=rs;const Ge=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),Ce===!0&&F.setGlobalState(M.clippingPlanes,re),Ut(E,se,re),fe.updateMultisampleRenderTarget(Te),fe.updateRenderTargetMipmap(Te),K.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let At=0,Dt=G.length;At<Dt;At++){const Ct=G[At],Et=Ct.object,Xe=Ct.geometry,Pt=Ct.material,ht=Ct.group;if(Pt.side===li&&Et.layers.test(re.layers)){const En=Pt.side;Pt.side=yn,Pt.needsUpdate=!0,mn(Et,se,re,Xe,Pt,ht),Pt.side=En,Pt.needsUpdate=!0,ot=!0}}ot===!0&&(fe.updateMultisampleRenderTarget(Te),fe.updateRenderTargetMipmap(Te))}M.setRenderTarget(ke,Fe,je),M.setClearColor(ie,ce),Ge!==void 0&&(re.viewport=Ge),M.toneMapping=qe}function Ut(E,G,se){const re=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Te=E.length;X<Te;X++){const Ne=E[X],ke=Ne.object,Fe=Ne.geometry,je=Ne.group;let qe=Ne.material;qe.allowOverride===!0&&re!==null&&(qe=re),ke.layers.test(se.layers)&&mn(ke,G,se,Fe,qe,je)}}function mn(E,G,se,re,X,Te){E.onBeforeRender(M,G,se,re,X,Te),E.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(M,G,se,re,E,Te),X.transparent===!0&&X.side===li&&X.forceSinglePass===!1?(X.side=yn,X.needsUpdate=!0,M.renderBufferDirect(se,G,re,X,E,Te),X.side=ki,X.needsUpdate=!0,M.renderBufferDirect(se,G,re,X,E,Te),X.side=li):M.renderBufferDirect(se,G,re,X,E,Te),E.onAfterRender(M,G,se,re,X,Te)}function Ft(E,G,se){G.isScene!==!0&&(G=ue);const re=ee.get(E),X=p.state.lights,Te=p.state.shadowsArray,Ne=X.state.version,ke=Y.getParameters(E,X.state,Te,G,se),Fe=Y.getProgramCacheKey(ke);let je=re.programs;re.environment=E.isMeshStandardMaterial?G.environment:null,re.fog=G.fog,re.envMap=(E.isMeshStandardMaterial?we:de).get(E.envMap||re.environment),re.envMapRotation=re.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",pe),je=new Map,re.programs=je);let qe=je.get(Fe);if(qe!==void 0){if(re.currentProgram===qe&&re.lightsStateVersion===Ne)return gi(E,ke),qe}else ke.uniforms=Y.getUniforms(E),E.onBeforeCompile(ke,M),qe=Y.acquireProgram(ke,Fe),je.set(Fe,qe),re.uniforms=ke.uniforms;const Ge=re.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=F.uniform),gi(E,ke),re.needsLights=Qm(E),re.lightsStateVersion=Ne,re.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=qe,re.uniformsList=null,qe}function zi(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=da.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function gi(E,G){const se=ee.get(E);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function Rr(E,G,se,re,X){G.isScene!==!0&&(G=ue),fe.resetTextureUnits();const Te=G.fog,Ne=re.isMeshStandardMaterial?G.environment:null,ke=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:pn,Fe=(re.isMeshStandardMaterial?we:de).get(re.envMap||Ne),je=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,qe=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ge=!!se.morphAttributes.position,ot=!!se.morphAttributes.normal,At=!!se.morphAttributes.color;let Dt=rs;re.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=M.toneMapping);const Ct=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Et=Ct!==void 0?Ct.length:0,Xe=ee.get(re),Pt=p.state.lights;if(Ce===!0&&(z===!0||E!==T)){const sn=E===T&&re.id===S;F.setState(re,E,sn)}let ht=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Pt.state.version||Xe.outputColorSpace!==ke||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Fe||re.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==F.numPlanes||Xe.numIntersection!==F.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==qe||Xe.morphTargets!==Ge||Xe.morphNormals!==ot||Xe.morphColors!==At||Xe.toneMapping!==Dt||Xe.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,Xe.__version=re.version);let En=Xe.currentProgram;ht===!0&&(En=Ft(re,G,X));let Cs=!1,Tn=!1,Cr=!1;const It=En.getUniforms(),Pn=Xe.uniforms;if(k.useProgram(En.program)&&(Cs=!0,Tn=!0,Cr=!0),re.id!==S&&(S=re.id,Tn=!0),Cs||T!==E){k.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),It.setValue(_,"projectionMatrix",E.projectionMatrix),It.setValue(_,"viewMatrix",E.matrixWorldInverse);const gn=It.map.cameraPosition;gn!==void 0&&gn.setValue(_,$.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&It.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Tn=!0,Cr=!0)}if(X.isSkinnedMesh){It.setOptional(_,X,"bindMatrix"),It.setOptional(_,X,"bindMatrixInverse");const sn=X.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),It.setValue(_,"boneTexture",sn.boneTexture,fe))}X.isBatchedMesh&&(It.setOptional(_,X,"batchingTexture"),It.setValue(_,"batchingTexture",X._matricesTexture,fe),It.setOptional(_,X,"batchingIdTexture"),It.setValue(_,"batchingIdTexture",X._indirectTexture,fe),It.setOptional(_,X,"batchingColorTexture"),X._colorsTexture!==null&&It.setValue(_,"batchingColorTexture",X._colorsTexture,fe));const In=se.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&J.update(X,se,En),(Tn||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,It.setValue(_,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Pn.envMap.value=Fe,Pn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&G.environment!==null&&(Pn.envMapIntensity.value=G.environmentIntensity),Tn&&(It.setValue(_,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Ym(Pn,Cr),Te&&re.fog===!0&&le.refreshFogUniforms(Pn,Te),le.refreshMaterialUniforms(Pn,re,j,he,p.state.transmissionRenderTarget[E.id]),da.upload(_,zi(Xe),Pn,fe)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(da.upload(_,zi(Xe),Pn,fe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(_,"center",X.center),It.setValue(_,"modelViewMatrix",X.modelViewMatrix),It.setValue(_,"normalMatrix",X.normalMatrix),It.setValue(_,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const sn=re.uniformsGroups;for(let gn=0,Ya=sn.length;gn<Ya;gn++){const ls=sn[gn];He.update(ls,En),He.bind(ls,En)}}return En}function Ym(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Qm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,G,se){const re=ee.get(E);re.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ee.get(E.texture).__webglTexture=G,ee.get(E.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const se=ee.get(E);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0};const Zm=_.createFramebuffer();this.setRenderTarget=function(E,G=0,se=0){N=E,C=G,L=se;let re=!0,X=null,Te=!1,Ne=!1;if(E){const Fe=ee.get(E);if(Fe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(_.FRAMEBUFFER,null),re=!1;else if(Fe.__webglFramebuffer===void 0)fe.setupRenderTarget(E);else if(Fe.__hasExternalTextures)fe.rebindTextures(E,ee.get(E.texture).__webglTexture,ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ge=E.depthTexture;if(Fe.__boundDepthTexture!==Ge){if(Ge!==null&&ee.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(E)}}const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);const qe=ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?X=qe[G][se]:X=qe[G],Te=!0):E.samples>0&&fe.useMultisampledRTT(E)===!1?X=ee.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?X=qe[se]:X=qe,D.copy(E.viewport),W.copy(E.scissor),Z=E.scissorTest}else D.copy(De).multiplyScalar(j).floor(),W.copy(Be).multiplyScalar(j).floor(),Z=Ze;if(se!==0&&(X=Zm),k.bindFramebuffer(_.FRAMEBUFFER,X)&&re&&k.drawBuffers(E,X),k.viewport(D),k.scissor(W),k.setScissorTest(Z),Te){const Fe=ee.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,se)}else if(Ne){const Fe=G;for(let je=0;je<E.textures.length;je++){const qe=ee.get(E.textures[je]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+je,qe.__webglTexture,se,Fe)}}else if(E!==null&&se!==0){const Fe=ee.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Fe.__webglTexture,se)}S=-1},this.readRenderTargetPixels=function(E,G,se,re,X,Te,Ne,ke=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){k.bindFramebuffer(_.FRAMEBUFFER,Fe);try{const je=E.textures[ke],qe=je.format,Ge=je.type;if(!q.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-re&&se>=0&&se<=E.height-X&&(E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+ke),_.readPixels(G,se,re,X,Ee.convert(qe),Ee.convert(Ge),Te))}finally{const je=N!==null?ee.get(N).__webglFramebuffer:null;k.bindFramebuffer(_.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(E,G,se,re,X,Te,Ne,ke=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(G>=0&&G<=E.width-re&&se>=0&&se<=E.height-X){k.bindFramebuffer(_.FRAMEBUFFER,Fe);const je=E.textures[ke],qe=je.format,Ge=je.type;if(!q.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,ot),_.bufferData(_.PIXEL_PACK_BUFFER,Te.byteLength,_.STREAM_READ),E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+ke),_.readPixels(G,se,re,X,Ee.convert(qe),Ee.convert(Ge),0);const At=N!==null?ee.get(N).__webglFramebuffer:null;k.bindFramebuffer(_.FRAMEBUFFER,At);const Dt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await ry(_,Dt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,ot),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Te),_.deleteBuffer(ot),_.deleteSync(Dt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,se=0){const re=Math.pow(2,-se),X=Math.floor(E.image.width*re),Te=Math.floor(E.image.height*re),Ne=G!==null?G.x:0,ke=G!==null?G.y:0;fe.setTexture2D(E,0),_.copyTexSubImage2D(_.TEXTURE_2D,se,0,0,Ne,ke,X,Te),k.unbindTexture()};const Jm=_.createFramebuffer(),eg=_.createFramebuffer();this.copyTextureToTexture=function(E,G,se=null,re=null,X=0,Te=null){Te===null&&(X!==0?(Mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=X,X=0):Te=0);let Ne,ke,Fe,je,qe,Ge,ot,At,Dt;const Ct=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(se!==null)Ne=se.max.x-se.min.x,ke=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,je=se.min.x,qe=se.min.y,Ge=se.isBox3?se.min.z:0;else{const In=Math.pow(2,-X);Ne=Math.floor(Ct.width*In),ke=Math.floor(Ct.height*In),E.isDataArrayTexture?Fe=Ct.depth:E.isData3DTexture?Fe=Math.floor(Ct.depth*In):Fe=1,je=0,qe=0,Ge=0}re!==null?(ot=re.x,At=re.y,Dt=re.z):(ot=0,At=0,Dt=0);const Et=Ee.convert(G.format),Xe=Ee.convert(G.type);let Pt;G.isData3DTexture?(fe.setTexture3D(G,0),Pt=_.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(fe.setTexture2DArray(G,0),Pt=_.TEXTURE_2D_ARRAY):(fe.setTexture2D(G,0),Pt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,G.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,G.unpackAlignment);const ht=_.getParameter(_.UNPACK_ROW_LENGTH),En=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Cs=_.getParameter(_.UNPACK_SKIP_PIXELS),Tn=_.getParameter(_.UNPACK_SKIP_ROWS),Cr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,je),_.pixelStorei(_.UNPACK_SKIP_ROWS,qe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ge);const It=E.isDataArrayTexture||E.isData3DTexture,Pn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const In=ee.get(E),sn=ee.get(G),gn=ee.get(In.__renderTarget),Ya=ee.get(sn.__renderTarget);k.bindFramebuffer(_.READ_FRAMEBUFFER,gn.__webglFramebuffer),k.bindFramebuffer(_.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let ls=0;ls<Fe;ls++)It&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ee.get(E).__webglTexture,X,Ge+ls),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ee.get(G).__webglTexture,Te,Dt+ls)),_.blitFramebuffer(je,qe,Ne,ke,ot,At,Ne,ke,_.DEPTH_BUFFER_BIT,_.NEAREST);k.bindFramebuffer(_.READ_FRAMEBUFFER,null),k.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||ee.has(E)){const In=ee.get(E),sn=ee.get(G);k.bindFramebuffer(_.READ_FRAMEBUFFER,Jm),k.bindFramebuffer(_.DRAW_FRAMEBUFFER,eg);for(let gn=0;gn<Fe;gn++)It?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,In.__webglTexture,X,Ge+gn):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,In.__webglTexture,X),Pn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,sn.__webglTexture,Te,Dt+gn):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,sn.__webglTexture,Te),X!==0?_.blitFramebuffer(je,qe,Ne,ke,ot,At,Ne,ke,_.COLOR_BUFFER_BIT,_.NEAREST):Pn?_.copyTexSubImage3D(Pt,Te,ot,At,Dt+gn,je,qe,Ne,ke):_.copyTexSubImage2D(Pt,Te,ot,At,je,qe,Ne,ke);k.bindFramebuffer(_.READ_FRAMEBUFFER,null),k.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Pn?E.isDataTexture||E.isData3DTexture?_.texSubImage3D(Pt,Te,ot,At,Dt,Ne,ke,Fe,Et,Xe,Ct.data):G.isCompressedArrayTexture?_.compressedTexSubImage3D(Pt,Te,ot,At,Dt,Ne,ke,Fe,Et,Ct.data):_.texSubImage3D(Pt,Te,ot,At,Dt,Ne,ke,Fe,Et,Xe,Ct):E.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Te,ot,At,Ne,ke,Et,Xe,Ct.data):E.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Te,ot,At,Ct.width,Ct.height,Et,Ct.data):_.texSubImage2D(_.TEXTURE_2D,Te,ot,At,Ne,ke,Et,Xe,Ct);_.pixelStorei(_.UNPACK_ROW_LENGTH,ht),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,En),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Cs),_.pixelStorei(_.UNPACK_SKIP_ROWS,Tn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Cr),Te===0&&G.generateMipmaps&&_.generateMipmap(Pt),k.unbindTexture()},this.initRenderTarget=function(E){ee.get(E).__webglFramebuffer===void 0&&fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?fe.setTextureCube(E,0):E.isData3DTexture?fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?fe.setTexture2DArray(E,0):fe.setTexture2D(E,0),k.unbindTexture()},this.resetState=function(){C=0,L=0,N=null,k.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function Md(n,e){if(e===PM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===su||e===Am){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===su)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class rw extends br{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new Ew(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=so.extractUrlBase(e);o=so.resolveURL(c,this.path)}else o=so.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new zm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qm){try{o[rt.KHR_BINARY_GLTF]=new Tw(e)}catch(f){s&&s(f);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case rt.KHR_MATERIALS_UNLIT:o[f]=new lw;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[f]=new bw(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[f]=new ww;break;case rt.KHR_MESH_QUANTIZATION:o[f]=new Rw;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function ow(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aw{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ha(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lA(u),c.distance=f;break;case"spot":c=new oA(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class lw{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,i){const s=[];e.color=new Qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}}class cw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class uw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(a,a)}return Promise.all(r)}}class fw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class dw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class pw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}}class gw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _w{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}}class vw{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class xw{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Mw{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yw{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class Aw{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class Sw{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class Ew{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const v=new nt,m=new H,p=new $n,A=new H(1,1,1),b=new Oy(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&A.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,v.compose(m,p,A));for(const M in l)if(M==="_COLOR_0"){const w=l[M];b.instanceColor=new ou(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Lt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const qm="glTF",zr=12,yd={JSON:1313821514,BIN:5130562};class Tw{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zr,r=new DataView(e,zr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===yd.JSON){const c=new Uint8Array(e,zr+o,a);this.content=i.decode(c)}else if(l===yd.BIN){const c=zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=cu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=cu[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=ar[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}f(d)},a,c,pn,h)})})}}class ww{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rw{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class $m extends bo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,d=h*f,g=e*c,v=g-c,m=-2*d+3*h,p=d-h,A=1-m,b=p-h+f;for(let M=0;M!==a;M++){const w=o[v+M+a],C=o[v+M+l]*u,L=o[g+M+a],N=o[g+M]*u;r[M]=A*w+b*C+m*L+p*N}return r}}const Cw=new $n;class Pw extends $m{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Cw.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ad={9728:hn,9729:fn,9984:pm,9985:aa,9986:Xr,9987:Ii},Sd={33071:ts,33648:Ea,10497:mr},Kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iw={CUBICSPLINE:void 0,LINEAR:vo,STEP:_o},ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new or({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),n.DefaultMaterial}function _s(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function si(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function Nw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uw(n){let e;const t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$l(t.attributes):e=n.indices+":"+$l(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+$l(n.targets[i]);return e}function $l(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function uu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ow(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Fw=new nt;class Bw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ow,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new sA(this.options.manager):this.textureLoader=new uA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return _s(r,a,s),si(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(so.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Kl[s.type],a=ar[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new nn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Kl[s.type],c=ar[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(d&&d!==f){const p=Math.floor(h/d),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(A);b||(v=new c(a,p*d,s.count*d/u),b=new Iy(v,d/u),t.cache.add(A,b)),m=new Wu(b,l,h%d/u,g)}else a===null?v=new c(s.count*l):v=new c(a,h,s.count*l),m=new nn(v,l,g);if(s.sparse!==void 0){const p=Kl.SCALAR,A=ar[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new A(o[1],b,s.sparse.count*p),C=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new nn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,N=w.length;L<N;L++){const S=w[L];if(m.setX(S,C[L*l]),l>=2&&m.setY(S,C[L*l+1]),l>=3&&m.setZ(S,C[L*l+2]),l>=4&&m.setW(S,C[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ad[h.magFilter]||fn,u.minFilter=Ad[h.minFilter]||Ii,u.wrapS=Sd[h.wrapS]||mr,u.wrapT=Sd[h.wrapT]||mr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==hn&&u.minFilter!==fn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Xt(v);m.needsUpdate=!0,h(m)}),t.load(so.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),si(f,o),f.userData.mimeType=o.mimeType||Ow(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Fm,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Om,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return or}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const f=s[rt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Qe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],pn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Gt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=li);const u=r.alphaMode||ql.OPAQUE;if(u===ql.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ql.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Un&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Un&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Un){const f=r.emissiveFactor;a.emissive=new Qe().setRGB(f[0],f[1],f[2],pn)}return r.emissiveTexture!==void 0&&o!==Un&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),si(f,r),t.associations.set(f,{materials:e}),r.extensions&&_s(s,f,r),f})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ed(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Uw(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Ed(new Cn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Lw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=o[d];let p;const A=c[d];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Dy(v,A):new Wt(v,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=Md(p.geometry,Am):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=Md(p.geometry,su));else if(m.mode===Nn.LINES)p=new Hy(v,A);else if(m.mode===Nn.LINE_STRIP)p=new Ku(v,A);else if(m.mode===Nn.LINE_LOOP)p=new Vy(v,A);else if(m.mode===Nn.POINTS)p=new zy(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),si(p,r),m.extensions&&_s(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&_s(s,f[0],r),f[0];const h=new ns;r.extensions&&_s(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(iy.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Zu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),si(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new nt;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],g=s.samplers[d.sampler],v=d.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],v=f[3],m=f[4],p=[];for(let b=0,M=h.length;b<M;b++){const w=h[b],C=d[b],L=g[b],N=v[b],S=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const T=i._createAnimationTracks(w,C,L,N,S);if(T)for(let D=0;D<T.length;D++)p.push(T[D])}const A=new Qy(r,void 0,p);return si(A,s),A})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Fw)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Nm:c.length>1?u=new ns:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),si(u,r),r.extensions&&_s(i,u,r),r.matrix!==void 0){const f=new nt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ns;i.name&&(r.name=s.createUniqueName(i.name)),si(r,i),i.extensions&&_s(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof fi||h instanceof Xt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Yi[r.path]===Yi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Yi[r.path]){case Yi.weights:c=vr;break;case Yi.rotation:c=xr;break;case Yi.translation:case Yi.scale:c=Mr;break;default:i.itemSize===1?c=vr:c=Mr;break}const u=s.interpolation!==void 0?Iw[s.interpolation]:vo,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+Yi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=uu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof xr?Pw:$m;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kw(n,e,t){const i=e.attributes,s=new Vi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=uu(ar[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const v=uu(ar[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new pi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Ed(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=cu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ut.workingColorSpace!==pn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),si(n,e),kw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Dw(n,e.targets,t):n})}const Hw=240,Vw=620,zw=1.45,Gw=2.8,Ww=.8,Xw=46,jw=160,Kw=94,qw=9,$w=42,Yw=20,Qw=4,Zw=1,Td=1.55,Jw=1.28,eR=4,tR=8,nR=.18,iR=-1260,sR=.32,rR=1.2,oR=.86,aR=.85,lR=70,cR=7.5,uR=16,fR=.82,hR=.3,dR=1.4,pR=.78,mR=30,Yl=-1e3,bd=550,gR=kn({__name:"AlgoraveVisualContent",setup(n){const e=um(),t=Tt(null),i=Tt(null),s=Tt(null),r="./models/saturn_v1.gltf",o=Math.PI,a=new H(0,1,0),l=new H(0,0,1),c=new $n().setFromAxisAngle(a,Math.PI),u=1/mR;let f=null,h=null,d=null,g=null,v=null,m=null,p=0,A=0,b=0,M=0,w=!1,C=[],L=null,N=[],S=null,T=null,D=null,W=-1,Z=null,ie=null;const ce=new Jn,te=new $n,he=new $n;let j=0,Me=0,Re=0,De=0,Be=-1,Ze=-1,et=-1,Ce=0,z=0,P=0,$=0,ae=-1,ue=0,Pe=0,R=0,_=0,B=0,K=0,q=.62,k=.24,ge=.34,ee=.28;Fa(()=>{e.attachConsumer(),Se(),be(),Ue()}),Ba(()=>{v!==null&&(window.cancelAnimationFrame(v),v=null),m&&(m.disconnect(),m=null),it(),e.detachConsumer()});function fe(){const V=t.value;if(!V){b=window.innerWidth,M=window.innerHeight;return}const Ae=Math.max(1,V.clientWidth),Oe=Math.max(1,V.clientHeight);b=Ae,M=Oe}function de(){return Math.random()*2+1}function we(V,Ae,Oe){return Math.max(Ae,Math.min(Oe,V))}function y(V,Ae,Oe){return V+(Ae-V)*Oe}function x(V,Ae,Oe){const ze=((Ae-V)%1+1.5)%1-.5;return(V+ze*Oe+1)%1}function U(V){const Ae=-V,Oe=V;return Math.random()*(Oe-Ae)+Ae}function Y(V,Ae){let Oe=U(V),ze=U(Ae);for(;Oe>-30&&Oe<30;)Oe=U(V);for(;ze>-30&&ze<30;)ze=U(Ae);return[Oe,ze]}function le(V){T=V.clone(),D=V.clone().premultiply(c)}function Q(){const V=e.playheadStep.value,Ae=e.snareSteps.value;if(V<0||V>=Ae.length)return Be=V,!1;const Oe=V!==Be;return Be=V,Oe&&!!Ae[V]}function I(){const V=e.playheadStep.value,Ae=e.kickSteps.value;if(V<0||V>=Ae.length)return Ze=V,!1;const Oe=V!==Ze;return Ze=V,Oe&&!!Ae[V]}function F(){const V=e.playheadStep.value,Ae=e.hatSteps.value;if(V<0||V>=Ae.length)return et=V,!1;const Oe=V!==et;return et=V,Oe&&!!Ae[V]}function ne(V,Ae){if(ae<0)return ae=V,ue=1,1;let Oe=V-ae;return Oe<0&&(Oe+=Ae),Oe>0&&Oe<=eR?ue=Math.min(ue+1,tR):ue=1,ae=V,1+(ue-1)*nR}function oe(V){const Ae=e.playheadStep.value,Oe=e.bassSteps.value,ze=e.leadSteps.value;if(Ae<0||Ae>=Oe.length||Ae>=ze.length)return{hue:.62+V.high*.02,intensity:.2+V.mid*.18,warmth:.28+V.low*.24,shimmer:.24+V.high*.3};const We=Oe[Ae],ct=ze[Ae],ft=!!We,pt=!!ct;if(ft&&pt&&We&&ct){const Ut=((ct.midi-We.midi)%12+12)%12,mn=[.58,.74,.78,.86,.83,.54,.92,.5,.88,.67,.72,.8],Ft=we(We.velocity*.52+ct.velocity*.48,0,1);return{hue:mn[Ut]??.74,intensity:we(.45+Ft*.45+V.mid*.25,0,1),warmth:we(.3+We.velocity*.36+V.low*.26,0,1),shimmer:we(.34+ct.velocity*.34+V.high*.38,0,1)}}return ft&&We?{hue:.56,intensity:we(.28+We.velocity*.36+V.low*.22,0,1),warmth:we(.48+We.velocity*.34+V.low*.2,0,1),shimmer:we(.2+V.high*.24,0,1)}:pt&&ct?{hue:.82,intensity:we(.3+ct.velocity*.38+V.high*.2,0,1),warmth:we(.2+V.low*.16,0,1),shimmer:we(.48+ct.velocity*.34+V.high*.2,0,1)}:{hue:.62,intensity:.18+V.mid*.15,warmth:.24+V.low*.22,shimmer:.2+V.high*.22}}function J(V,Ae,Oe){if(q=x(q,Ae.hue,.2),k=y(k,Ae.intensity,.16),ge=y(ge,Ae.warmth,.14),ee=y(ee,Ae.shimmer,.18),t.value&&(t.value.style.setProperty("--vapor-hue",`${Math.round(q*360)}`),t.value.style.setProperty("--vapor-energy",k.toFixed(3)),t.value.style.setProperty("--vapor-warmth",ge.toFixed(3)),t.value.style.setProperty("--vapor-shimmer",ee.toFixed(3))),N.length>=4&&(N[0].color.setHSL((q+.02)%1,.78,.62+ee*.1),N[1].color.setHSL((q+.5)%1,.86,.58+k*.12),N[2].color.setHSL((q+.14)%1,.82,.56+ge*.14),N[3].color.setHSL((q+.62)%1,.2+ee*.34,.82+k*.08)),s.value){const ze=.94+Math.sin(Oe*6.2+V.high*8)*.06;s.value.style.filter=`hue-rotate(${Math.round((q-.6)*300)}deg) saturate(${(1.06+k*.66).toFixed(3)}) brightness(${(ze+ee*.1).toFixed(3)})`}}function me(V,Ae,Oe){if(!i.value)return;const ze=Math.sin(Ae*.11)*(18+V.low*34),We=Math.cos(Ae*.08)*(10+V.mid*20),ct=1.02+V.low*.04+Oe*.01+k*.02,ft=Math.sin(Ae*.12)*10+V.high*18+(q-.62)*280,pt=1.05+V.mid*.25+k*.6,Ut=.85+ge*.26;i.value.style.transform=`translate(${ze}px, ${We}px) scale(${ct})`,i.value.style.filter=`hue-rotate(${ft}deg) saturate(${pt}) brightness(${Ut})`,i.value.style.opacity=String(.3+V.low*.12+V.beat*.06+ee*.08)}function _e(V,Ae=1){if(C.length===0)return;const Oe=(Xw+V.high*jw+V.mid*Kw)*Ae;for(let ze=0;ze<C.length;ze+=1){const We=C[ze],ct=.78+Math.random()*.62;if(We.position.z+=Oe*ct,We.position.z>bd){const[ft,pt]=Y(b,M);We.position.z=Yl,We.position.x=ft,We.position.y=pt}}}function Ee(V,Ae=1){if(C.length===0)return;const Oe=(qw+V.high*$w+V.mid*Yw)*Ae;for(let ze=0;ze<C.length;ze+=1){const We=C[ze],ct=.74+Math.random()*.58;if(We.position.z-=Oe*ct,We.position.z<iR){const[ft,pt]=Y(b,M);We.position.z=Yl+Math.random()*140,We.position.x=ft,We.position.y=pt}}}function Se(){const V=t.value;if(!V)return;fe(),h=new Py,f=new sw({alpha:!0,antialias:!1}),f.outputColorSpace=Gt,f.setPixelRatio(Math.min(window.devicePixelRatio||1,.9)),f.setSize(b,M,!1),f.domElement.classList.add("three-canvas"),V.appendChild(f.domElement),g=new hA;const Ae=new ha(16777215,3),Oe=new ha(16777215,2),ze=new ha(16777215,2);Ae.position.set(-10,46,600),Oe.position.set(-200,46,500),ze.position.set(200,46,500),h.add(Ae,Oe,ze),d=new un(70,b/M,.1,1200),d.position.set(0,0,500),d.lookAt(0,0,470),He(),O(),ye(),s.value&&(s.value.style.opacity="0.14")}function He(){if(!h)return;const V=new Un({color:7707903}),Ae=new Un({color:16741754}),Oe=new Un({color:15589691}),ze=new Un({color:16777215});N=[V,Ae,Oe,ze];const We=new Cn,ct=new Float32Array([-1,-1,1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1]);We.setAttribute("position",new nn(ct,3)),L=We;const ft=[];for(let pt=-800;pt<800;pt+=10){let Ut=ze;pt>0&&pt<100?Ut=Ae:pt>100&&pt<200?Ut=Oe:pt>200&&pt<300&&(Ut=V);const mn=new Wt(We,Ut),[Ft,zi]=Y(b,M);mn.position.set(Ft,zi,pt);const gi=de(),Rr=gi<.5?.5:gi;mn.scale.set(Rr,Rr,Rr),h.add(mn),ft.push(mn)}C=ft}function O(){if(!h)return;const V=new ns,Ae=new Wt(new qu(7.2,34,6),new or({color:13490409,emissive:1717592,emissiveIntensity:.28,metalness:.08,roughness:.56}));Ae.rotation.x=Math.PI*.5,Ae.position.z=1.4,V.add(Ae);const Oe=new or({color:12109534,emissive:1192790,emissiveIntensity:.2,metalness:.08,roughness:.6}),ze=new Wt(new Sr(19,1,10),Oe);ze.position.set(-10,0,-8),ze.rotation.z=.1,V.add(ze);const We=ze.clone();We.position.x=10,We.rotation.z=-.1,V.add(We);const ct=new Wt(new Ka(3.6,4.4,26,12),new or({color:9216966,emissive:1191760,emissiveIntensity:.2,metalness:.08,roughness:.6}));ct.rotation.x=Math.PI*.5,ct.position.z=-7.5,V.add(ct);const ft=new Wt(new $u(4.2,16,12),new Un({color:8385791,transparent:!0,opacity:.34,blending:vc,depthWrite:!1}));ft.position.z=-20,V.add(ft),ie=ft,V.position.set(2.5,-3.5,510),V.rotateZ(3.5),V.rotateOnWorldAxis(a,o),V.visible=!0,le(V.quaternion),h.add(V),Z=V,S=V}function ye(){if(!h||!r||w)return;const V=A;w=!0,new rw().load(r,Oe=>{if(V!==A||!h)return;const ze=Oe.scene;ze.position.set(2.5,-3.5,510),ze.rotateZ(3.5),ze.rotateOnWorldAxis(a,o),ze.visible=!0,le(ze.quaternion);const We=ze.children[1]?.material?.map;We&&(We.magFilter=fn,We.minFilter=fn,We.generateMipmaps=!1),Z&&h&&(h.remove(Z),Ve(Z),Z=null,ie=null),S=ze,h?.add(ze)},void 0,()=>{V===A&&(w=!1)})}function be(){const V=t.value;V&&(m=new ResizeObserver(()=>{Le()}),m.observe(V))}function Le(){!f||!d||(fe(),f.setSize(b,M,!1),d.aspect=b/M,d.updateProjectionMatrix())}function ve(V,Ae,Oe,ze){if(Oe||C.length===0)return;const We=(1.25+V.low*8+V.beat*4+V.mid*1.6)*Ae;for(let ct=0;ct<C.length;ct+=1){const ft=C[ct];if(ze>.001&&(ft.position.x+=(Math.random()-.5)*1.25*ze,ft.position.y+=(Math.random()-.5)*.9*ze),ft.position.z+=We+ct*.05*Ae,ft.position.z>bd){const[pt,Ut]=Y(b,M);ft.position.z=Yl,ft.position.x=pt,ft.position.y=Ut}}}function pe(V,Ae,Oe,ze,We,ct){if(!S)return;const ft=Re>0?Math.min(.05,Math.max(.001,Ae-Re)):u;Re=Ae,Oe&&(Me=Math.min(Me+2.4,4.8)),Me*=.9;const pt=.45+V.high*3.4+V.mid*1.2+V.low*.8+Me;j=(j+pt*ft)%(Math.PI*2);const Ut=W<0?T:D;Ut&&(ce.set(Math.sin(Ae*.95+j*.3)*(.03+V.mid*.05),Math.sin(Ae*.42)*(.015+V.low*.03),Math.sin(Ae*.62)*(.06+V.high*.08)),te.setFromEuler(ce),he.setFromAxisAngle(l,j),S.quaternion.copy(Ut).multiply(he).multiply(te));const mn=(.045+V.low*.34+V.beat*.14)*(1+(ze-1)*.2+ct*.34);if(We||(S.position.z+=mn*W,S.position.x=2.5+Math.sin(Ae*.72)*(1.5+V.mid*3.1),S.position.y=-3.5+Math.cos(Ae*.93)*(1+V.high*2.4),W<0&&S.position.z<=Hw?(W=1,Me=Math.min(Me+1.1,4.8)):W>0&&S.position.z>=Vw&&(W=-1,Me=Math.min(Me+1.1,4.8))),ie){const Ft=1+V.low*1.2+V.beat*.28;ie.scale.set(Ft,Ft,Ft),ie.material.opacity=.14+V.low*.5+V.beat*.2,ie.material.color.setHSL((.52+K*.0018)%1,.84,.7)}}function Ue(){if(!f||!h||!d||!g){v=window.requestAnimationFrame(Ue);return}const V=g.getElapsedTime();if(V-p<u){v=window.requestAnimationFrame(Ue);return}p=V;const Ae=e.sampleAudioFrame(),Oe=oe(Ae);J(Ae,Oe,V);const ze=Ae.beat>1.02&&De<=1.02;if(De=Ae.beat,ze&&(B=1),I()&&(Pe=Math.min(Pe+sR,rR),R=Math.min(R+cR,uR),B=Math.min(B+aR,2.2)),F()&&(_=Math.min(_+hR,dR)),Q()){z+=1;const Ft=e.playheadStep.value,zi=ne(Ft<0?0:Ft,Math.max(1,e.snareSteps.value.length)),gi=z%Qw===0;Ee(Ae,(gi?Jw:1)*zi),$=gi?Td*zi:zi,gi&&(P=Zw)}let pt=!1;if(P>0)P-=1,pt=!0;else if($>0){const Ft=$;$=0,Ce=Math.min(Ce+zw*Ft,Gw*Td),_e(Ae,Ft)}const Ut=pt?0:1+Ce;B*=.88,K=(K+.14+Ae.high*1.2)%360,ve(Ae,Ut,pt,_),pe(Ae,V,ze,Ut,pt,Pe),d.position.x=Math.sin(V*.22)*(.6+Ae.mid*1.8)+B*.25,d.position.y=Math.cos(V*.18)*(.4+Ae.high*1.2)-Ae.low*.3,d.position.z=500-Ae.low*11-B*4;const mn=Math.max(42,Math.min(80,lR-R));if(Math.abs(d.fov-mn)>.01&&(d.fov=mn,d.updateProjectionMatrix()),d.lookAt(0,0,470),me(Ae,V,_),s.value){s.value.style.opacity=String(.08+Ae.high*.2+Ae.beat*.08+_*.05);const Ft=Math.sin(V*120)*_*.9;s.value.style.transform=`translate(${Ft}px, ${V*36%24}px)`}Ce*=Ww,Ce<.02&&(Ce=0),Pe*=oR,Pe<.02&&(Pe=0),R*=fR,R<.02&&(R=0),_*=pR,_<.01&&(_=0),f.render(h,d),v=window.requestAnimationFrame(Ue)}function Ve(V){V.traverse(Ae=>{const Oe=Ae;Oe.geometry&&Oe.geometry.dispose();const ze=Oe.material;if(!ze)return;if(Array.isArray(ze)){for(const ct of ze){const ft=ct;ft.map&&ft.map.dispose(),ct.dispose()}return}const We=ze;We.map&&We.map.dispose(),ze.dispose()})}function it(){if(A+=1,h){for(const V of C)h.remove(V);S&&h.remove(S)}S&&Ve(S),L&&L.dispose();for(const V of N)V.dispose();if(f){f.dispose();const V=f.domElement;V.parentNode&&V.parentNode.removeChild(V)}C=[],L=null,N=[],S=null,T=null,D=null,W=-1,Z=null,ie=null,f=null,h=null,d=null,g=null,De=0,Be=-1,Ze=-1,et=-1,Ce=0,z=0,P=0,$=0,ae=-1,ue=0,Pe=0,R=0,_=0,B=0,K=0,q=.62,k=.24,ge=.34,ee=.28,p=0,j=0,Me=0,Re=0,w=!1}return(V,Ae)=>(Ke(),at("div",{ref_key:"_containerRef",ref:t,class:"visual-stage"},[xe("div",{ref_key:"_nebulaRef",ref:i,class:"nebula-layer"},null,512),xe("div",{ref_key:"_overlayRef",ref:s,class:"scan-overlay"},null,512),Ae[0]||(Ae[0]=xe("div",{class:"credit"},[Fp(" inspired by "),xe("a",{href:"https://saturn.fm/",target:"_blank",rel:"noopener noreferrer"}," https://saturn.fm/ ")],-1))],512))}}),_R=Sn(gR,[["__scopeId","data-v-204d0373"]]),wd="https://platform.twitter.com/widgets.js",vR='iframe[id^="twitter-widget-"]',xR=1e4,MR=kn({data(){return{waitTimerId:null,waitDeadlineAt:0,iframeElement:null}},methods:{updateIsView:function(n){this.$emit("loading-contoller",n)},clearIframeWaitTimer:function(){this.waitTimerId!==null&&(window.clearInterval(this.waitTimerId),this.waitTimerId=null)},handleIframeLoad:function(){this.clearIframeWaitTimer(),this.updateIsView(!1)},attachIframeListener:function(n){this.iframeElement&&this.iframeElement.removeEventListener("load",this.handleIframeLoad),this.iframeElement=n,n.addEventListener("load",this.handleIframeLoad,{once:!0})},waitForTwitterIframe:function(){this.waitDeadlineAt=Date.now()+xR,this.clearIframeWaitTimer(),this.waitTimerId=window.setInterval(()=>{const e=this.$refs.timelineRoot?.querySelector(vR);if(e){this.clearIframeWaitTimer(),this.attachIframeListener(e);return}Date.now()>=this.waitDeadlineAt&&(this.clearIframeWaitTimer(),this.updateIsView(!1))},100)},loadTwitterScript:()=>{const n=window,e=document.querySelector(`script[src="${wd}"]`);if(e){n.twttr?.widgets?.load?n.twttr.widgets.load():e.addEventListener("load",()=>{n.twttr?.widgets?.load?.()});return}const t=document.createElement("script");t.setAttribute("src",wd),t.setAttribute("async","true"),t.addEventListener("load",()=>{n.twttr?.widgets?.load?.()}),document.head.appendChild(t)}},components:{LoadingAnimateVue:Iu},props:{isView:Boolean},mounted(){this.waitForTwitterIframe(),this.loadTwitterScript()},beforeUnmount(){this.clearIframeWaitTimer(),this.iframeElement&&(this.iframeElement.removeEventListener("load",this.handleIframeLoad),this.iframeElement=null)}}),yR={key:0,class:"loadingTwitter"},AR={ref:"timelineRoot"};function SR(n,e,t,i,s,r){const o=ln("LoadingAnimateVue");return Ke(),at(Nt,null,[n.isView?(Ke(),at("div",yR,[Mt(o)])):Mn("",!0),xe("div",AR,[...e[0]||(e[0]=[xe("a",{class:"twitter-timeline",href:"https://twitter.com/7aru7aru?ref_src=twsrc%5Etfw"},null,-1)])],512)],64)}const ER=Sn(MR,[["render",SR],["__scopeId","data-v-0f00559e"]]),TR={},bR=""+new URL("Icon-C58L2uZH.png",import.meta.url).href,wR={id:"About"};function RR(n,e,t,i,s,r){return Ke(),at("div",wR,[...e[0]||(e[0]=[Va('<div id="AboutContent" data-v-a05aa972><header data-v-a05aa972><h1 data-v-a05aa972>About</h1></header><div id="content" data-v-a05aa972><div id="profile" data-v-a05aa972><img id="icon" src="'+bR+'" alt="" data-v-a05aa972><div id="profileContent" data-v-a05aa972><h3 class="description" data-v-a05aa972>Takuto HONDA</h3><p class="description" data-v-a05aa972>LoginName: taru</p><p class="description" data-v-a05aa972>Age: 23</p></div><div id="institution" data-v-a05aa972><h3 class="header3" data-v-a05aa972>所属</h3><h4 data-v-a05aa972>慶應義塾大学 環境情報学部 B2</h4><p data-v-a05aa972><a href="https://bcali.org" target="_blank" rel="noopener noreferrer" data-v-a05aa972> Bcali (BlockChain as Advanced Layer of the Internet Research Group) </a></p><p data-v-a05aa972><a href="https://www.wide.ad.jp" target="_blank" rel="noopener noreferrer" data-v-a05aa972> WIDEプロジェクト </a></p></div><div id="interesting" data-v-a05aa972><h3 class="header3" data-v-a05aa972>興味</h3><ul data-v-a05aa972><li data-v-a05aa972>Blockchain</li><li data-v-a05aa972>セキュリティ</li></ul></div></div></div></div>',1)])])}const CR=Sn(TR,[["render",RR],["__scopeId","data-v-a05aa972"]]),PR={},IR={class:"logs"};function LR(n,e,t,i,s,r){return Ke(),at("div",IR,[...e[0]||(e[0]=[Va('<div class="log"><p><a href="https://webiotmakers.github.io/2018/maebashi/" target="_blank" rel="noopener noreferrer"> Web X IoT メイカーズチャレンジ 2018 in 前橋 </a></p></div><div class="log"><p><a href="https://webiotmakers.github.io/2019/gunma/" target="_blank" rel="noopener noreferrer"> Web X IoT メイカーズチャレンジ 2019 in 群馬 </a></p></div><div class="log"><p><a href="https://sechack365.nict.go.jp/achievement/2020/index.html" target="_blank" rel="noopener noreferrer"> SecHack365 表現駆動コース 2020 </a></p></div><div class="log"><p><a href="https://web.dev/blog/passkeys-hackathon-tokyo?hl=en" target="_blank" rel="noopener noreferrer"> Passkeys Hackathon Tokyo 2024 優勝 </a></p></div><div class="log"><p><a href="https://www.ipa.go.jp/jinzai/mitou/it/2024/gaiyou-in-1.html" target="_blank" rel="noopener noreferrer"> 未踏IT人材発掘・育成事業 2024 採択 </a></p></div>',5)])])}const DR=Sn(PR,[["render",LR]]),NR={},UR={class:"skills"};function OR(n,e,t,i,s,r){return Ke(),at("div",UR,[...e[0]||(e[0]=[Va('<h1 data-v-1e54c47d>Skills</h1><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Python</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:90%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>JavaScript</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:90%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>HTML / CSS</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:80%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>TypeScript</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:65%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Rust</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:45%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>English</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:20%;" data-v-1e54c47d></div></div></div><div class="skill" data-v-1e54c47d><h3 class="skillTag" data-v-1e54c47d>Japanese</h3><div class="bar" data-v-1e54c47d><div class="barfill" style="width:20%;" data-v-1e54c47d></div></div></div>',8)])])}const FR=Sn(NR,[["render",OR],["__scopeId","data-v-1e54c47d"]]),Rd=1e4,Ql=.2,BR=.95,kR=400;let Cd=0;const HR=kn({components:{LoadingAnimateVue:Iu},props:{targetFile:{type:String,required:!0},allowedOrigins:{type:Array,default:()=>[]}},data(){return{isArtLoading:!0,messageListener:null,fallbackTimeoutId:null,loadingTaskId:null,progressIntervalId:null,pendingFinishLoading:null,isComponentUnmounted:!1}},computed:{loadingTaskProgressPercent(){if(!this.loadingTaskId)return 0;const e=this.$store?.state?.loading?.tasks?.[this.loadingTaskId];return typeof e!="number"?0:Math.max(0,Math.min(100,Math.round(e*100)))}},async mounted(){Cd+=1,this.loadingTaskId=`loading-art:${this.targetFile}:${Cd}`,this.commitLoadingMutation("registerLoadingTask",this.loadingTaskId),this.commitLoadingMutation("setLoadingTaskProgress",{taskId:this.loadingTaskId,progress:Ql});const n=await this.falseOperation();this.isComponentUnmounted||(this.isArtLoading=n,this.completeLoadingTask())},beforeUnmount(){this.isComponentUnmounted=!0,this.resolvePendingLoading(),this.removeMessageListener(),this.clearFallbackTimeout(),this.clearProgressInterval(),this.completeLoadingTask(),this.commitLoadingMutation("removeLoadingTask",this.loadingTaskId),this.loadingTaskId=null},methods:{commitLoadingMutation:function(n,e){const t=this.$store;t?.commit&&t.commit(n,e)},completeLoadingTask:function(){this.loadingTaskId&&this.commitLoadingMutation("completeLoadingTask",this.loadingTaskId)},clearProgressInterval:function(){this.progressIntervalId!==null&&(window.clearInterval(this.progressIntervalId),this.progressIntervalId=null)},startProgressInterval:function(){this.clearProgressInterval();const n=this.loadingTaskId;if(!n)return;const e=Date.now();this.progressIntervalId=window.setInterval(()=>{const t=Date.now()-e,i=Math.min(1,t/Rd),s=Ql+(BR-Ql)*i;this.commitLoadingMutation("setLoadingTaskProgress",{taskId:n,progress:s})},kR)},removeMessageListener:function(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=null)},resolvePendingLoading:function(){if(!this.pendingFinishLoading)return;const n=this.pendingFinishLoading;this.pendingFinishLoading=null,n()},clearFallbackTimeout:function(){this.fallbackTimeoutId!==null&&(window.clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)},normalizeOrigin:n=>{if(!n||n==="null")return null;try{return new URL(n).origin}catch{return null}},getAllowedOrigins:function(){const n=new Set,e=this.normalizeOrigin(window.location.origin);e&&n.add(e);for(const t of this.allowedOrigins){const i=this.normalizeOrigin(t);i&&n.add(i)}return n},isAllowedMessageOrigin:function(n){const e=this.normalizeOrigin(n);return e?this.getAllowedOrigins().has(e):!1},isReadyMessage:n=>{if(n==="statueLoaded"||n==="distortionLoaded")return!0;if(!n||typeof n!="object")return!1;const e=n;return e.type==="READY"&&(e.source==="v-statue"||e.source==="distortion-web")},falseOperation:function(){return this.resolvePendingLoading(),this.removeMessageListener(),this.clearFallbackTimeout(),this.startProgressInterval(),new Promise(n=>{let e=!1;const t=()=>{e||(e=!0,this.pendingFinishLoading=null,this.clearProgressInterval(),this.completeLoadingTask(),this.removeMessageListener(),this.clearFallbackTimeout(),n(!1))};this.pendingFinishLoading=t;const i=s=>{this.isAllowedMessageOrigin(s.origin)&&this.isReadyMessage(s.data)&&t()};this.messageListener=i,window.addEventListener("message",i),this.fallbackTimeoutId=window.setTimeout(t,Rd)})}}}),VR={id:"loadingArtProcess"},zR={key:0,id:"loadingAnime"};function GR(n,e,t,i,s,r){const o=ln("LoadingAnimateVue");return Ke(),at("div",VR,[n.isArtLoading?(Ke(),at("div",zR,[Mt(o,{progress:n.loadingTaskProgressPercent},null,8,["progress"])])):Mn("",!0),xe("div",{class:ai({hidden:n.isArtLoading}),id:"drawArt"},[gp(n.$slots,"default",{id:"iframeArt"},void 0)],2)])}const WR=Sn(HR,[["render",GR],["__scopeId","data-v-9c6c4677"]]),XR=420,jR=260,KR=kn({data(){return{eventX:0,eventY:0,parentElement:null,isWide:!1,windowWidth:"50%",windowHeight:"60%",isResizing:!1,resizeStartX:0,resizeStartY:0,resizeStartWidth:0,resizeStartHeight:0}},props:{windowType:{type:String,required:!0},handleModalWindowHidden:{type:Function,required:!0},defaultWidth:{type:String,default:"50%"},defaultHeight:{type:String,default:"60%"}},computed:{windowSizeStyle(){return this.isSmartPhoneChecker()?{}:this.isWide?{width:"100%",height:"100%"}:{width:this.windowWidth,height:this.windowHeight}},headerId(){return`${this.windowType}-dialog-title`}},mounted(){this.windowWidth=this.defaultWidth,this.windowHeight=this.defaultHeight,document.addEventListener("keydown",this.handleGlobalKeydown),this.focusFirstElement()},beforeUnmount(){document.body.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup),document.removeEventListener("mousemove",this.resizeMousemove),document.removeEventListener("mouseup",this.stopResize),document.removeEventListener("keydown",this.handleGlobalKeydown)},methods:{parsePixels:n=>{const e=Number.parseFloat(n);return Number.isNaN(e)?0:e},getModalBorderSize:function(n){const e=window.getComputedStyle(n),t=this.parsePixels(e.borderLeftWidth)+this.parsePixels(e.borderRightWidth),i=this.parsePixels(e.borderTopWidth)+this.parsePixels(e.borderBottomWidth);return{horizontal:t,vertical:i}},clampValue:(n,e,t)=>t<e?t:Math.min(t,Math.max(e,n)),setWindowPositionFromTopLeft:(n,e,t,i,s)=>{const r=e+i/2,o=t+s/2;n.style.left=`${Math.round(r)}px`,n.style.top=`${Math.round(o)}px`},constrainWindowToViewport:function(n){const e=n.getBoundingClientRect(),t=window.innerWidth,i=window.innerHeight,s=Math.max(0,t-e.width),r=Math.max(0,i-e.height),o=this.clampValue(e.left,0,s),a=this.clampValue(e.top,0,r);this.setWindowPositionFromTopLeft(n,o,a,e.width,e.height)},getDialogRoot:function(){return this.$el},getDialogZIndex:n=>{const e=Number.parseInt(n.style.zIndex||"0",10);return Number.isFinite(e)?e:0},getTopMostDialog:function(){const n=Array.from(document.getElementsByClassName("modal-window"));if(n.length===0)return null;let e=n[0];for(let t=1;t<n.length;t+=1){const i=n[t],s=this.getDialogZIndex(i),r=this.getDialogZIndex(e);if(s>r){e=i;continue}if(s!==r)continue;e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING&&(e=i)}return e},isDialogActive:function(){const n=this.getDialogRoot();return n?n.style.zIndex!=="0":!1},isEscapeTargetDialog:function(){const n=this.getDialogRoot();if(!n)return!1;const e=document.activeElement;return e&&n.contains(e)?!0:n.style.zIndex==="0"?!1:this.getTopMostDialog()===n},getFocusableElements:function(){const n=this.getDialogRoot();if(!n)return[];const e=n.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');return Array.from(e).filter(t=>!t.hasAttribute("disabled")&&t.getAttribute("aria-hidden")!=="true")},focusFirstElement:function(){const n=this.getFocusableElements();if(n.length>0){n[0].focus();return}this.getDialogRoot()?.focus()},trapFocus:function(n){const e=this.getDialogRoot();if(!e)return;const t=this.getFocusableElements();if(t.length===0){n.preventDefault(),e.focus();return}const i=t[0],s=t[t.length-1],r=document.activeElement;if(n.shiftKey){(r===i||r===e)&&(n.preventDefault(),s.focus());return}r===s&&(n.preventDefault(),i.focus())},handleDialogKeydown:function(n){if(this.isDialogActive()){if(n.key==="Escape"){n.preventDefault(),n.stopPropagation(),this.closeWindow();return}n.key==="Tab"&&this.trapFocus(n)}},handleGlobalKeydown:function(n){n.key==="Escape"&&this.isEscapeTargetDialog()&&(n.preventDefault(),this.closeWindow())},windowFront:n=>{const e=document.getElementsByClassName("modal-window");for(let i=0;i<e.length;i++){const s=e[i];s.style.zIndex="0"}const t=n.target?.closest(".modal-window");t&&(t.style.zIndex="1",t.focus())},wideWindow:function(n){this.stopResize();const e=n.target?.closest(".modal-window");if(!e)return;const t=e.children[0],i=e.getElementsByClassName("wideButton")[0],s=e.getElementsByClassName("closeButton")[0];this.isWide?(this.isWide=!1,e.style.top="50%",e.style.left="50%",t&&(t.style.pointerEvents="auto")):(this.isWide=!0,e.style.top="50%",e.style.left="50%",t&&(t.style.pointerEvents="none"),i&&(i.style.pointerEvents="auto"),s&&(s.style.pointerEvents="auto"))},startResize:function(n){if(this.isWide)return;const e=n.target?.closest(".modal-window");if(!e)return;const t=e.getBoundingClientRect();this.isResizing=!0,this.resizeStartX=n.clientX,this.resizeStartY=n.clientY,this.resizeStartWidth=t.width,this.resizeStartHeight=t.height,document.addEventListener("mousemove",this.resizeMousemove),document.addEventListener("mouseup",this.stopResize)},resizeMousemove:function(n){if(!this.isResizing||this.isWide)return;const e=this.$el;if(!e)return;const t=e.getBoundingClientRect(),i=window.innerWidth,s=window.innerHeight,r=n.clientX-this.resizeStartX,o=n.clientY-this.resizeStartY,a=this.getModalBorderSize(e),l=this.clampValue(this.resizeStartWidth+r,XR,i),c=this.clampValue(this.resizeStartHeight+o,jR,s),u=t.left+t.width/2,f=t.top+t.height/2,h=u-l/2,d=f-c/2,g=this.clampValue(h,0,Math.max(0,i-l)),v=this.clampValue(d,0,Math.max(0,s-c));this.windowWidth=`${Math.max(0,l-a.horizontal)}px`,this.windowHeight=`${Math.max(0,c-a.vertical)}px`,this.setWindowPositionFromTopLeft(e,g,v,l,c)},stopResize:function(){this.isResizing&&(this.isResizing=!1,document.removeEventListener("mousemove",this.resizeMousemove),document.removeEventListener("mouseup",this.stopResize))},closeWindow:function(){this.handleModalWindowHidden(this.windowType)},mouseup:function(){document.body.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup)},mousedown:function(n){const e=document.getElementsByClassName("modal-window");for(let s=0;s<e.length;s++){const r=e[s];r.style.zIndex="0"}const t=n.target?.closest(".modal-window");if(!t)return;this.parentElement=t;const i=this.parentElement.getBoundingClientRect();this.eventX=n.clientX-i.left,this.eventY=n.clientY-i.top,this.parentElement.style.zIndex="1",this.parentElement.focus(),document.body.addEventListener("mousemove",this.mousemove),document.addEventListener("mouseup",this.mouseup)},mousemove:function(n){if(!this.parentElement)return;const e=this.parentElement.getBoundingClientRect(),t=window.innerWidth,i=window.innerHeight,s=n.clientX-this.eventX,r=n.clientY-this.eventY,o=Math.max(0,t-e.width),a=Math.max(0,i-e.height),l=this.clampValue(s,0,o),c=this.clampValue(r,0,a);this.setWindowPositionFromTopLeft(this.parentElement,l,c,e.width,e.height)},isSmartPhoneChecker:()=>!!navigator.userAgent.match(/iPhone|Android.+Mobile/)}}),qR=["aria-labelledby"],$R=["id"],YR={class:"window-menu"},QR=["aria-label"],ZR=["aria-label"],JR={class:"modal-content"};function e1(n,e,t,i,s,r){return Ke(),at("div",{class:ai(["modal-window",[n.isSmartPhoneChecker()?"smartPhoneWindow":""]]),style:Da(n.windowSizeStyle),onMousedown:e[5]||(e[5]=(...o)=>n.windowFront&&n.windowFront(...o)),onKeydown:e[6]||(e[6]=(...o)=>n.handleDialogKeydown&&n.handleDialogKeydown(...o)),role:"dialog","aria-modal":"true","aria-labelledby":n.headerId,tabindex:"-1"},[xe("div",{class:"modal-header",onMousedown:e[2]||(e[2]=(...o)=>n.mousedown&&n.mousedown(...o)),onMouseup:e[3]||(e[3]=(...o)=>n.mouseup&&n.mouseup(...o))},[xe("p",{id:n.headerId,class:"header"},vn(n.windowType),9,$R),xe("div",YR,[n.isSmartPhoneChecker()?Mn("",!0):(Ke(),at("button",{key:0,class:"wideButton",onClick:e[0]||(e[0]=(...o)=>n.wideWindow&&n.wideWindow(...o)),"aria-label":`Toggle maximize for ${n.windowType} window`},[...e[7]||(e[7]=[xe("p",null,"□",-1)])],8,QR)),xe("button",{class:"closeButton",onClick:e[1]||(e[1]=(...o)=>n.closeWindow&&n.closeWindow(...o)),"aria-label":`Close ${n.windowType} window`},[...e[8]||(e[8]=[xe("p",null,"☓",-1)])],8,ZR)])],32),xe("div",JR,[gp(n.$slots,"default",{},void 0)]),!n.isSmartPhoneChecker()&&!n.isWide?(Ke(),at("div",{key:0,class:"resize-handle",onMousedown:e[4]||(e[4]=jt((...o)=>n.startResize&&n.startResize(...o),["stop","prevent"]))},null,32)):Mn("",!0)],46,qR)}const t1=Sn(KR,[["render",e1],["__scopeId","data-v-d7b49a31"]]),Pd=["About","Skill","Logs","Twitter","Distortion","Questions","Synthwave","Algorave","AlgoraveVisual"],n1=kn({components:{ModalWindowVue:t1,AboutContent:CR,SkillContent:FR,LogsContent:DR,TwitterEmbed:ER,AlgoraveContent:Qx,AlgoraveVisualContent:_R,LoadingArtProcess:WR},data(){return{currentOpenIndex:0,About:!1,Skill:!1,Logs:!1,Twitter:!1,Distortion:!1,Questions:!1,Synthwave:!1,Algorave:!1,AlgoraveVisual:!1,isTwitterLoading:!0,modalTriggerEvent:"dblclick",modalIconElements:[],windowLayouts:{}}},mounted(){this.modalTriggerEvent=this.isSmartPhone()?"click":"dblclick";const n=this.$el;if(!n)return;const e=n.getElementsByClassName("isModal");this.modalIconElements=Array.from(e);for(let t=0;t<this.modalIconElements.length;t++)this.modalIconElements[t].addEventListener(this.modalTriggerEvent,this.ModalWindowDisplay)},beforeUnmount(){for(let n=0;n<this.modalIconElements.length;n++)this.modalIconElements[n].removeEventListener(this.modalTriggerEvent,this.ModalWindowDisplay);this.modalIconElements=[]},methods:{openModalWindow:function(n){const e=this[n];this[n]=!0,this.waitForOpenWindow(n,t=>{t.style.zIndex="1",!e&&(this.placeWindowWithoutOverlap(n,t),this.currentOpenIndex+=1)})},ModalWindowDisplay:function(n){const e=document.getElementsByClassName("modal-window");for(let r=0;r<e.length;r++){const o=e[r];o.style.zIndex="0"}const t=n.target,s=t?.closest?.(".isModal")?.dataset?.type??t?.dataset?.type;if(s&&Pd.includes(s)){if(s==="Algorave"){this.openModalWindow("Algorave"),this.openModalWindow("AlgoraveVisual");return}this.openModalWindow(s)}},ModalWindowHidden:function(n){const e=this[n];this[n]=!1,delete this.windowLayouts[n],e&&(this.currentOpenIndex=Math.max(0,this.currentOpenIndex-1))},getScreenSize:()=>{const n=document.getElementById("screen");if(!n)return{width:window.innerWidth,height:window.innerHeight};const e=getComputedStyle(n),t=parseFloat(e.width),i=parseFloat(e.height);return{width:Number.isFinite(t)?t:n.clientWidth,height:Number.isFinite(i)?i:n.clientHeight}},getDefaultWindowSize:(n,e,t)=>n==="Algorave"?{width:e*.78125,height:t*.5606}:n==="AlgoraveVisual"?{width:420,height:420}:{width:e*.5,height:t*.6},clampValue:(n,e,t)=>Math.max(e,Math.min(t,n)),measureWindowLayout:function(n,e,t,i){const s=this.getDefaultWindowSize(n,t,i),r=e.getBoundingClientRect(),o=this.windowLayouts[n],a=r.width>0?r.width:s.width,l=r.height>0?r.height:s.height,c=Number.parseFloat(e.style.left),u=Number.parseFloat(e.style.top),f=Number.isFinite(c)?c:o?.left??t/2,h=Number.isFinite(u)?u:o?.top??i/2;return{left:f,top:h,width:a,height:l}},collectOccupiedLayouts:function(n,e,t){const i=[];for(const s of Pd){if(s===n||!this[s])continue;const r=document.getElementById(s);if(r){const a=this.measureWindowLayout(s,r,e,t);this.windowLayouts[s]=a,i.push(a);continue}const o=this.windowLayouts[s];o&&i.push(o)}return i},computeOverlapArea:(n,e,t)=>{const i=n.left-n.width/2-t,s=n.left+n.width/2+t,r=n.top-n.height/2-t,o=n.top+n.height/2+t,a=e.left-e.width/2-t,l=e.left+e.width/2+t,c=e.top-e.height/2-t,u=e.top+e.height/2+t,f=Math.max(0,Math.min(s,l)-Math.max(i,a)),h=Math.max(0,Math.min(o,u)-Math.max(r,c));return f*h},placeWindowWithoutOverlap:function(n,e){const t=this.getScreenSize(),i=this.measureWindowLayout(n,e,t.width,t.height),s=24,r=i.width/2+s,o=t.width-i.width/2-s,a=i.height/2+s,l=t.height-i.height/2-s,c=this.clampValue(t.width/2,r,o),u=this.clampValue(t.height/2,a,l),f=this.collectOccupiedLayouts(n,t.width,t.height),h=[],d=new Set,g=(M,w)=>{const C=this.clampValue(M,r,o),L=this.clampValue(w,a,l),N=`${Math.round(C)}:${Math.round(L)}`;d.has(N)||(d.add(N),h.push({left:C,top:L}))},v=Math.max(60,Math.round(i.width*.28)),m=Math.max(60,Math.round(i.height*.28));g(c,u);for(let M=1;M<=12;M+=1){for(let w=-M;w<=M;w+=1)g(c+w*v,u-M*m),g(c+w*v,u+M*m);for(let w=-M+1;w<=M-1;w+=1)g(c-M*v,u+w*m),g(c+M*v,u+w*m)}g(r,a),g(r,l),g(o,a),g(o,l);let p={left:c,top:u},A=Number.POSITIVE_INFINITY;const b=12;for(const M of h){const w={left:M.left,top:M.top,width:i.width,height:i.height};let C=0;for(const S of f)C+=this.computeOverlapArea(w,S,b);const L=(M.left-c)**2+(M.top-u)**2,N=C*100+L;N<A&&(p=M,A=N)}e.style.left=`${p.left}px`,e.style.top=`${p.top}px`,this.windowLayouts[n]={left:p.left,top:p.top,width:i.width,height:i.height}},isSmartPhone:()=>!!navigator.userAgent.match(/iPhone|Android.+Mobile/),TwitterLoadingController:function(n){this.isTwitterLoading=n},waitForOpenWindow:(n,e)=>{const t=document.getElementById("drawWindow");if(!t)throw new Error("Container element not found");const i=document.getElementById(n);if(i){e(i);return}const s=new MutationObserver(r=>{for(const o of r)if(o.type==="childList"){const a=document.getElementById(n);if(a){s.disconnect(),e(a);break}}});s.observe(t,{childList:!0})}}}),i1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgIDAwMD///8AAAAAgADCtgH7AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBBAHNiJr8idiAAAAmUlEQVQoz3XR7RHDIAgGYLzrAEFZgLQLWDtAGlmh+6/SqPUDvb7/fA6JEAAAgy2QY/caf6Szaec7ZnChxmcwz1bBP6gdXQWSkg6xtBgqFkiJCmiGsICfIbxmCHH+iiwQ3d9Z2vi8jE+4qY3i2xLATXqQSRWgRRo2mpd6wT6EO3C+UeCT4JF6ngWw1qsr/cdouN6FKod+qAjAF2XEQxQt2EgDAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU0OjM0LTA0OjAw2FGLUAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NDozNC0wNDowMKkMM+wAAAAASUVORK5CYII=",s1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAACAgID//wDAwMAAAAAA//8A/wD///8AgACE6PTJAAAAAXRSTlMAQObYZgAAAAFiS0dEBxZhiOsAAAAHdElNRQfiBBMBIhp7Zpv1AAABdUlEQVQ4y3WUTW6DMBBGQcoBOjIk6xKpe3eS0GWQuEBLfYCK4n3EIgfopseu58fBxcm3Aj89z3iMKIokEPJUZCmhafZ46LP12hFAuyLl1glYE/ARoD2ngvdTBFglYEvgQ0GilCfv/Q3MiwKYgLZdlHoIyqRgni8RlM4hV9+z0JpqAaQICII9KDCOFQYkGNC9DLIyESDB2htAUqZnMCwYI6CkXoLyVfWdYcFWC0CH1bnYdCyYFBwHeutY0LYEyIg2JjMi4Gc1rCQHosMjg6fdYWbsWm4X00sEFuYLHVBAHAkLLVqohwXQ98fCjK/N6G6d0yGsCIgBDLE2bapCMPzRaW05tQpIYJCddlcKsBCMlzFcDB4ISDERkMFA81eAhgQywl7OdguwRg0Cn7AABDEaP7r3TgBo2CDQg4Cq59CU2AjrAqTh6/UCZHz3gJDWoDmwGPAahOFKKQUnP+L/KHj7/bkP8jwGdON3QbzYdfgT2fR50j9Dlj/uX7Pd5lE/IwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNDoyNi0wNDowMEXe6EMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzQ6MjYtMDQ6MDA0g1D/AAAAAElFTkSuQmCC",r1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXBwzSK/XgAAAAjElEQVRIx+2VQQrAIAwE1+K/oz9rX5ZeiopaTazFHronETMOIRCDK44hiDP5jY1H6pZ7gJEhNsm/iQHAjwBUIJSAEmF15aEBoRcqAwKDwdiTu8LAdxB5bP9JOwoDkgFeNKjD5xvc2wh7oLVRGNSR8w2+PImr54BGAP8cyLLeQL1YGgbHECDuWtF6LytPTdMhXzC2L6sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDc6MTItMDQ6MDDinXh7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA3OjEyLTA0OjAwk8DAxwAAAABJRU5ErkJggg==",o1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAAAEBASGhoZ3d3eAgAD////AwMDMmQDq6ur//wDMzDPj4+PMzMzMzAD/zACZmQDM/wDMzGaysrLd3d0MDAzX19eZmTOgoKSWlpaZmZkW0DvXAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhgXECILfny5AAACJklEQVRIx5WW61aDMBCE2c0FkIRi2hp5/xd1L6TSNkFcz6k/Ol9mZxcjXfdUwNWdL0Cu8wQgf54i9GQ09Nl1FsHaYwgdF/Avb61DcL09yoJu4AL03luCEMZx/GgjpJ+mKQAY1pOWgTjOl0ZfrB9ITxlQ9DxaJpbPKqHnD2AQjOqJFGKONQIdHT8ME/CUGABvwCcgB/qpEGowTeSQigFlB9HXPAqQEN2WgIdFDhDnJcb+HRD9lUIrMJIXwjLf4i2SRXy1EODKVQCe0jgD6Uke+wog8uvdFGCcF9VzR7EB3O/FYV5GPX+RjioOrOZ6tDQv2o90FCtjUn1QgMdZ+om1DBsRAmUY1IKJuDQdhAhEoAAUWFcWmw5MhMDAJMRIh/8yl8YDKAA9s0SIvtTXzbcI7zdilva3nkj+N+GWx4gOCQL4OQnWulIHBOvJQYhsS7UJ0XvjEi8+YMg58+3UJghIntTpm9dowpr1NgNoEwrI2nmT2/XX9gCXEmfQpyr4B9AfEALQCg3tce9QJwRI2859ceh0xhUCpaWEIAukPOVLupoB3gnWZ3QZ+ZLZOzySPBOi17EKkNILUHLsgLw5cDv7lvTrkhx2LWUBSJveHDS6ELshMcDSGtBtyfdzArcHMlb+9vv+DchCmAZg7dNcNQM4CV8BpK09n1cq2oNrAa+GqwCAJ4EOVN8psJ747w6rvANob99nXgc0E26t/a3/5RDNf15pilW9fgDHsyjmWYUIXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNjozNC0wNDowMO0k/sIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTY6MzQtMDQ6MDCceUZ+AAAAAElFTkSuQmCC",Zl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEUAAAAAgAAAAACAgICAgAD////AwMAA/wD//wCAAAD/AAAA//8AAP+AAID/AP8AAIAtlzWCAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhoALTbILJ0EAAABOUlEQVQoz1WRsU7DMBBAj8QSa1NUYLScKBIgBhrRGQW7gjVSguc2ym6W7FETwYrEwhcA38DUiaFTP6QDX8D5bIF6Uny6p3d3ig2AMcKPAx2UYAwQCsyMhw5EHMIC85zPHDgZg6o5sCZuPDBcSg7zRVx5cDRVKwQiXfgZxxawQsyEA1cNguS1CwtBNbAsVauz9+S68/Vthcbbx8W3awC1xJbnz5ev9Y0TqsvdVqGw+SkcKBDco7ARDiwtsMI6LWhIqhCQUOYEgrrdnVuhlA6w1ExKG7LOp26okRRDndN9sAfTlH3fPzX/QDRa6wENsD0H7aQX6FjDg1Ot0dkzenT2Dev8GcYa6MRZltGWSFMMnRB0Y6wkwW0hcOeNwYHDNlHekJzq9jEhZ5A0wUStCRL6Of8GEI0gEMJvgF/zF3Xhq8Ch1gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo1NC0wNDowMGovbQQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NTQtMDQ6MDAbctW4AAAAAElFTkSuQmCC",a1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAIAAAAD///+AgIDAwMA+Te3nAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXECDlcB2VAAAAqElEQVQoz5WQURKDIAxEseMBjF5AUi8Aqf8d5QT1/ndpEkCgrR/dnQnDzoNFjREBgGn0FQymuw5QNKLFHNzJEU3kfCEs2hGhIWBy4HOXEKoc6B0sn7uQjycilXfwUd4N/5YXIl1dfUAszwS0RCyvpeXXui1iXXQfUK3jyfveLxt7f8mQ3j0Cqwx5SE9hFx8yaGNgpeLHxsBROcxmCbX5RBvM6eed+vHqNxYSLyyMnITLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjE2OjMyLTA0OjAwjvTL+AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzoxNjozMi0wNDowMP+pc0QAAAAASUVORK5CYII=",l1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAAAAAAD////AwMAAAICAgID//wAA/wD/AABwyKKjAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAyElEQVQoz42RMQ7DIAxFg5QD4KBGXZFPgN0eIFKknqNL9k7M3Th2jYGW0qWe+F+Pb2Om6f8CqVH3joHBqRrsoJtRBCIWo90nIug1OET7dX+hHTqAhdi9/QAsBFEowEIBWCIQvRpy9MwZkLZGAQp8yXNYzczs5hQpRmYFYdcTEpInLYZmuAz4OqgC3N5q9FUaEequHNY5Ql3GEoTo1iMEwGk9pO6VIHZXNQ5FNuki+NqMOUaRKT1byC3mOqeUSuSsOj7ePX6+bKwXtg8vq/zrUZsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDQtMTZUMDc6NTY6MjAtMDQ6MDDkQX/gAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAwlRzHXAAAAABJRU5ErkJggg==",c1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgID///8AAP8AAADAwMAT19+5AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBhoAMQWRi6FPAAAAgklEQVQoz63RUQqAIAwGYIMOkFIHcNYF9AIF6wKR979KzlnkeqiHfhDlY0xxSr1H35LBwBXbSbASoJNAJSaA8xCCd94izgWIaE1/At9SAG75CC5wF+rz68MqeNwi3zHwMca4MfS40nci4sKgVJNgTHtrTkjlewWpHAlQ67mecx6DyAHwGD3zmDvtGAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0OTowNS0wNDowMJ6EiFoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDk6MDUtMDQ6MDDv2TDmAAAAAElFTkSuQmCC",u1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAAAAAACGhoaysrI5OTl3d3dVVVVNTU0AAIBCQkJfX18zMzMiIiLAwMCWlpYpKSkAmcwA//8AzMwAZswAZpkAM5kcHBwREREICAhmAGb////KapVyAAAAAXRSTlMAQObYZgAAAAFiS0dEGnVn5DIAAAAHdElNRQfiBBMBICMWVXF/AAABFUlEQVQ4y82TyZqDIBCE0w3NMkRiFLO8/4umGvSLiVzmNFMXseu3ms3T6d+IiPTBqo/K5hu2BM+wiHPMwrWy84U9CMMKYEBrJTQf76otwJLQplD7emnSCXiI6wiqBEpiVCzRxxgtxK1ipAJwfrxFd6++Eikld042Ot4BJM77YRhyzmwVuHwCidXPtXnmlC7uO4G9G3JbjijhDgle/fE6TSMhI/SA1R9BAEg94Ap7LjMiDgmWo1FgLmUuPSBxzEIT7GVZKpCOAOYwl6UC3GlhWQnYAQHSSQghr/ugq6RDQmRSou0k/FtLwHFvZwEC36rUv7ez0OsQVoDi+5q4x62eZrtQoUrrz030uJ+1uL/W4Vt//Z/9Si86bhD1UrQsrgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozMjozNS0wNDowMLWCggcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzI6MzUtMDQ6MDDE3zq7AAAAAElFTkSuQmCC",f1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACAgIDAwMAAgID///8AgAAAAP+AAAAAAAD/AAAAAIBSZDZVAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhgXETDh3DywAAABh0lEQVQ4y23TsWrDMBAGYPsNqmCC6CbZBa8NNHuEGrq24FK81tbgsXTJ5pQMmUsgT+Bg/JQ9SSdbqn2Q5f/y54QjR5Edoj8wd1Ew8d2KRISnafpI/JzELOGEb8Sb4IUvKyK0PGRpAeMJhEaei20NMu1JJEqhdOV1gq9RdKNoR7j+jqLnY4TD4duXrh0b14tEoQBl7zes/GgoEGLbAKEAT9AoWwRhGlLmAPW0JEmkuPhQlvZcq0Ti5Lij6yfYO/jcQqN0P+WDqovOLIl5ADel8FhxamCPUDZK1baxsbDH5YNSTdBwcFNN0y3Bu1LDYIDMGwaIDAAKN9MgMmyslW1AHsJxbRvwp4VwPt4PQ29vSFL5cHqxwCVLqsrBkZ52FCHz4XzaEWoO5cA8rBy+T/6Dfr65zgF6c2+50MCBRKbzEAQI5gCtByCYE9rbV4BnmawyziXmhLYORCYBGHFgbsKZa+FiBigLYIVPQMf3RssEU+6EzXIUNs+tsIXcCFvKtbDFHIQt5yBB/ge5pdMZ3n2ecAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNzo0OC0wNDowMM+D9pEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTc6NDgtMDQ6MDC+3k4tAAAAAElFTkSuQmCC",h1={class:"iconAndWindowDraw"},d1={class:"icons"},p1={class:"row"},m1={class:"row"},g1={class:"row"},_1={class:"row"},v1={id:"drawWindow"};function x1(n,e,t,i,s,r){const o=ln("AboutContent"),a=ln("ModalWindowVue"),l=ln("SkillContent"),c=ln("LogsContent"),u=ln("TwitterEmbed"),f=ln("LoadingArtProcess"),h=ln("AlgoraveContent"),d=ln("AlgoraveVisualContent");return Ke(),at("div",h1,[xe("div",d1,[xe("div",p1,[xe("div",{class:"icon isModal","data-type":"About",tabindex:"0",role:"button","aria-label":"Open About modal",onKeydown:[e[0]||(e[0]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[1]||(e[1]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[16]||(e[16]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:i1},null,-1),xe("p",{class:"iconName"},"About",-1)])],32),xe("div",{class:"icon isModal","data-type":"Skill",tabindex:"0",role:"button","aria-label":"Open Skill modal",onKeydown:[e[2]||(e[2]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[3]||(e[3]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[17]||(e[17]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:s1},null,-1),xe("p",{class:"iconName"},"Skill",-1)])],32),xe("div",{class:"icon isModal","data-type":"Logs",tabindex:"0",role:"button","aria-label":"Open Logs modal",onKeydown:[e[4]||(e[4]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[5]||(e[5]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[18]||(e[18]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:r1},null,-1),xe("p",{class:"iconName"},"Logs",-1)])],32),e[19]||(e[19]=xe("div",{class:"icon"},[xe("a",{class:"iconUrl",href:"https://keybase.io/taruscript",target:"_blank",rel:"noopener noreferrer"},[xe("img",{class:"iconImg",width:"65%",height:"65%",src:o1}),xe("p",{class:"iconName"},"Keybase")])],-1))]),xe("div",m1,[xe("div",{class:"icon isModal","data-type":"Distortion",tabindex:"0",role:"button","aria-label":"Open Distortion modal",onKeydown:[e[6]||(e[6]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[7]||(e[7]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[20]||(e[20]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:Zl},null,-1),xe("p",{class:"iconName"},"Distortion",-1)])],32),xe("div",{class:"icon isModal","data-type":"Questions",tabindex:"0",role:"button","aria-label":"Open Questions modal",onKeydown:[e[8]||(e[8]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[9]||(e[9]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[21]||(e[21]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:Zl},null,-1),xe("p",{class:"iconName"},"???",-1)])],32),xe("div",{class:"icon isModal","data-type":"Synthwave",tabindex:"0",role:"button","aria-label":"Open Synthwave modal",onKeydown:[e[10]||(e[10]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[11]||(e[11]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[22]||(e[22]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:Zl},null,-1),xe("p",{class:"iconName"},"Synthwave",-1)])],32)]),xe("div",g1,[xe("div",{class:"icon isModal","data-type":"Algorave",tabindex:"0",role:"button","aria-label":"Open Algorave modal",onKeydown:[e[12]||(e[12]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[13]||(e[13]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[23]||(e[23]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:a1},null,-1),xe("p",{class:"iconName"},"Algorave",-1)])],32)]),xe("div",_1,[xe("div",{class:"icon isModal","data-type":"Twitter",tabindex:"0",role:"button","aria-label":"Open Twitter modal",onKeydown:[e[14]||(e[14]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["enter"])),e[15]||(e[15]=Yt(jt((...g)=>n.ModalWindowDisplay&&n.ModalWindowDisplay(...g),["prevent"]),["space"]))]},[...e[24]||(e[24]=[xe("img",{class:"iconImg",width:"65%",height:"65%",src:l1},null,-1),xe("p",{class:"iconName"},"Twitter",-1)])],32),e[25]||(e[25]=Va('<div class="icon" data-v-71e5c013><a class="iconUrl" href="https://github.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-71e5c013><img class="" width="65%" height="65%" alt="Vue logo" src="'+c1+'" data-v-71e5c013><p class="iconName" data-v-71e5c013>Github</p></a></div><div class="icon" data-v-71e5c013><a class="iconUrl" href="https://instagram.com/taruscript" target="_blank" rel="noopener noreferrer" data-v-71e5c013><img class="" width="65%" height="65%" alt="Vue logo" src="'+u1+'" data-v-71e5c013><p class="iconName" data-v-71e5c013>Instagram</p></a></div><div class="icon" data-v-71e5c013><a class="iconUrl" href="mailto:taru@sfc.wide.ad.jp" target="_blank" rel="noopener noreferrer" data-v-71e5c013><img class="" width="65%" height="65%" alt="Vue logo" src="'+f1+'" data-v-71e5c013><p class="iconName" data-v-71e5c013>Mail</p></a></div>',3))])]),xe("div",v1,[n.About?(Ke(),Dn(a,{key:0,id:"About",windowType:"About",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(o)]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Skill?(Ke(),Dn(a,{key:1,id:"Skill",windowType:"Skill",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(l)]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Logs?(Ke(),Dn(a,{key:2,id:"Logs",windowType:"Logs",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(c)]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Twitter?(Ke(),Dn(a,{key:3,id:"Twitter",windowType:"Twitter",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(u,{isView:n.isTwitterLoading,onLoadingContoller:n.TwitterLoadingController},null,8,["isView","onLoadingContoller"])]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Distortion?(Ke(),Dn(a,{key:4,id:"Distortion",windowType:"Distortion",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[...e[26]||(e[26]=[xe("iframe",{src:"https://taruscript.github.io/distortion_web/",title:"Distortion visual artwork",width:"100%",height:"100%",sandbox:"allow-scripts allow-same-origin",referrerpolicy:"no-referrer",style:{border:"0"}},null,-1)])]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Questions?(Ke(),Dn(a,{key:5,id:"Questions",windowType:"Questions",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(f,{targetFile:"index.html","allowed-origins":["https://taruscript.github.io"]},{default:Gn(()=>[...e[27]||(e[27]=[xe("iframe",{src:"https://taruscript.github.io/question/",title:"Questions visual artwork",width:"100%",height:"100%",sandbox:"allow-scripts allow-same-origin",referrerpolicy:"no-referrer",style:{border:"0"}},null,-1)])]),_:1})]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Synthwave?(Ke(),Dn(a,{key:6,id:"Synthwave",windowType:"Synthwave",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[...e[28]||(e[28]=[xe("iframe",{src:"https://taruscript.github.io/synthwave_landscape/",title:"Synthwave landscape artwork",width:"100%",height:"100%",sandbox:"allow-scripts allow-same-origin",referrerpolicy:"no-referrer",style:{border:"0"}},null,-1)])]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.Algorave?(Ke(),Dn(a,{key:7,id:"Algorave",windowType:"Algorave",defaultWidth:"78.125%",defaultHeight:"56.06%",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(h)]),_:1},8,["handleModalWindowHidden"])):Mn("",!0),n.AlgoraveVisual?(Ke(),Dn(a,{key:8,id:"AlgoraveVisual",windowType:"AlgoraveVisual",defaultWidth:"420px",defaultHeight:"420px",handleModalWindowHidden:n.ModalWindowHidden},{default:Gn(()=>[Mt(d)]),_:1},8,["handleModalWindowHidden"])):Mn("",!0)])])}const M1=Sn(n1,[["render",x1],["__scopeId","data-v-71e5c013"]]),y1=kn({components:{IconsComponentVue:M1,HeaderComponent:xx}}),A1={id:"screen"};function S1(n,e,t,i,s,r){const o=ln("HeaderComponent"),a=ln("IconsComponentVue");return Ke(),at("div",A1,[Mt(o),Mt(a)])}const E1=Sn(y1,[["render",S1],["__scopeId","data-v-4acb14d9"]]),T1=[{path:"/",name:"screen",component:E1}],b1=px({history:Pv("./"),routes:T1});M0(hv).use(Jr).use(b1).mount("#app");
