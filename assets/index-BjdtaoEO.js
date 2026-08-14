const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ArticlePage-DoNaQ-Pk.js","assets/motion-9r90InlX.js","assets/i18n-Clk0yT6c.js","assets/icons-2dZjiWmL.js","assets/TocPanel-qczq_aNB.js","assets/markdown-Dddm8GD8.js","assets/react-BUGHXdl-.js","assets/DiaryPage-D0_8fCi7.js"])))=>i.map(i=>d[i]);
import{u as bc,a as wm,j as c,A as yc,m as ie,b as fy,c as my,d as dy}from"./motion-9r90InlX.js";import{a as hy,i as yy,b as py,u as wn,r as K}from"./i18n-Clk0yT6c.js";import{r as gy,u as Vr,L as _t,B as vy,a as by,R as _y,b as Gt,N as xy}from"./react-BUGHXdl-.js";import{p as Sy,Q as Tm,$ as Am,C as Lr,u as pc,P as jm,O as zy,Z as Ty,o as Em,h as Ay,i as Zr,a as jy,K as Ey}from"./icons-2dZjiWmL.js";(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))m(T);new MutationObserver(T=>{for(const A of T)if(A.type==="childList")for(const W of A.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&m(W)}).observe(document,{childList:!0,subtree:!0});function z(T){const A={};return T.integrity&&(A.integrity=T.integrity),T.referrerPolicy&&(A.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?A.credentials="include":T.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function m(T){if(T.ep)return;T.ep=!0;const A=z(T);fetch(T.href,A)}})();var mc={exports:{}},Sa={},dc={exports:{}},hc={};var Nm;function Ny(){return Nm||(Nm=1,(function(p){function S(_,j){var H=_.length;_.push(j);n:for(;0<H;){var ln=H-1>>>1,an=_[ln];if(0<T(an,j))_[ln]=j,_[H]=an,H=ln;else break n}}function z(_){return _.length===0?null:_[0]}function m(_){if(_.length===0)return null;var j=_[0],H=_.pop();if(H!==j){_[0]=H;n:for(var ln=0,an=_.length,Bn=an>>>1;ln<Bn;){var on=2*(ln+1)-1,J=_[on],Tn=on+1,ze=_[Tn];if(0>T(J,H))Tn<an&&0>T(ze,J)?(_[ln]=ze,_[Tn]=H,ln=Tn):(_[ln]=J,_[on]=H,ln=on);else if(Tn<an&&0>T(ze,H))_[ln]=ze,_[Tn]=H,ln=Tn;else break n}}return j}function T(_,j){var H=_.sortIndex-j.sortIndex;return H!==0?H:_.id-j.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;p.unstable_now=function(){return A.now()}}else{var W=Date,sn=W.now();p.unstable_now=function(){return W.now()-sn}}var tn=[],L=[],Hn=1,D=null,C=3,Kn=!1,xn=!1,Cn=!1,Ne=!1,Se=typeof setTimeout=="function"?setTimeout:null,xt=typeof clearTimeout=="function"?clearTimeout:null,fn=typeof setImmediate<"u"?setImmediate:null;function kn(_){for(var j=z(L);j!==null;){if(j.callback===null)m(L);else if(j.startTime<=_)m(L),j.sortIndex=j.expirationTime,S(tn,j);else break;j=z(L)}}function Jn(_){if(Cn=!1,kn(_),!xn)if(z(tn)!==null)xn=!0,Wn||(Wn=!0,w());else{var j=z(L);j!==null&&Me(Jn,j.startTime-_)}}var Wn=!1,ue=-1,Yn=5,ce=-1;function Xt(){return Ne?!0:!(p.unstable_now()-ce<Yn)}function N(){if(Ne=!1,Wn){var _=p.unstable_now();ce=_;var j=!0;try{n:{xn=!1,Cn&&(Cn=!1,xt(ue),ue=-1),Kn=!0;var H=C;try{e:{for(kn(_),D=z(tn);D!==null&&!(D.expirationTime>_&&Xt());){var ln=D.callback;if(typeof ln=="function"){D.callback=null,C=D.priorityLevel;var an=ln(D.expirationTime<=_);if(_=p.unstable_now(),typeof an=="function"){D.callback=an,kn(_),j=!0;break e}D===z(tn)&&m(tn),kn(_)}else m(tn);D=z(tn)}if(D!==null)j=!0;else{var Bn=z(L);Bn!==null&&Me(Jn,Bn.startTime-_),j=!1}}break n}finally{D=null,C=H,Kn=!1}j=void 0}}finally{j?w():Wn=!1}}}var w;if(typeof fn=="function")w=function(){fn(N)};else if(typeof MessageChannel<"u"){var mn=new MessageChannel,zn=mn.port2;mn.port1.onmessage=N,w=function(){zn.postMessage(null)}}else w=function(){Se(N,0)};function Me(_,j){ue=Se(function(){_(p.unstable_now())},j)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(_){_.callback=null},p.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yn=0<_?Math.floor(1e3/_):5},p.unstable_getCurrentPriorityLevel=function(){return C},p.unstable_next=function(_){switch(C){case 1:case 2:case 3:var j=3;break;default:j=C}var H=C;C=j;try{return _()}finally{C=H}},p.unstable_requestPaint=function(){Ne=!0},p.unstable_runWithPriority=function(_,j){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var H=C;C=_;try{return j()}finally{C=H}},p.unstable_scheduleCallback=function(_,j,H){var ln=p.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ln+H:ln):H=ln,_){case 1:var an=-1;break;case 2:an=250;break;case 5:an=1073741823;break;case 4:an=1e4;break;default:an=5e3}return an=H+an,_={id:Hn++,callback:j,priorityLevel:_,startTime:H,expirationTime:an,sortIndex:-1},H>ln?(_.sortIndex=H,S(L,_),z(tn)===null&&_===z(L)&&(Cn?(xt(ue),ue=-1):Cn=!0,Me(Jn,H-ln))):(_.sortIndex=an,S(tn,_),xn||Kn||(xn=!0,Wn||(Wn=!0,w()))),_},p.unstable_shouldYield=Xt,p.unstable_wrapCallback=function(_){var j=C;return function(){var H=C;C=j;try{return _.apply(this,arguments)}finally{C=H}}}})(hc)),hc}var Mm;function My(){return Mm||(Mm=1,dc.exports=Ny()),dc.exports}var Dm;function Dy(){if(Dm)return Sa;Dm=1;var p=My(),S=hy(),z=gy();function m(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function A(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function W(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function sn(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function tn(n){if(A(n)!==n)throw Error(m(188))}function L(n){var e=n.alternate;if(!e){if(e=A(n),e===null)throw Error(m(188));return e!==n?null:n}for(var t=n,l=e;;){var a=t.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){t=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===t)return tn(a),n;if(r===l)return tn(a),e;r=r.sibling}throw Error(m(188))}if(t.return!==l.return)t=a,l=r;else{for(var i=!1,u=a.child;u;){if(u===t){i=!0,t=a,l=r;break}if(u===l){i=!0,l=a,t=r;break}u=u.sibling}if(!i){for(u=r.child;u;){if(u===t){i=!0,t=r,l=a;break}if(u===l){i=!0,l=r,t=a;break}u=u.sibling}if(!i)throw Error(m(189))}}if(t.alternate!==l)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?n:e}function Hn(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=Hn(n),e!==null)return e;n=n.sibling}return null}var D=Object.assign,C=Symbol.for("react.element"),Kn=Symbol.for("react.transitional.element"),xn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),xt=Symbol.for("react.consumer"),fn=Symbol.for("react.context"),kn=Symbol.for("react.forward_ref"),Jn=Symbol.for("react.suspense"),Wn=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),Xt=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function w(n){return n===null||typeof n!="object"?null:(n=N&&n[N]||n["@@iterator"],typeof n=="function"?n:null)}var mn=Symbol.for("react.client.reference");function zn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===mn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Cn:return"Fragment";case Se:return"Profiler";case Ne:return"StrictMode";case Jn:return"Suspense";case Wn:return"SuspenseList";case ce:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case xn:return"Portal";case fn:return n.displayName||"Context";case xt:return(n._context.displayName||"Context")+".Consumer";case kn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return e=n.displayName||null,e!==null?e:zn(n.type)||"Memo";case Yn:e=n._payload,n=n._init;try{return zn(n(e))}catch{}}return null}var Me=Array.isArray,_=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ln=[],an=-1;function Bn(n){return{current:n}}function on(n){0>an||(n.current=ln[an],ln[an]=null,an--)}function J(n,e){an++,ln[an]=n.current,n.current=e}var Tn=Bn(null),ze=Bn(null),Je=Bn(null),za=Bn(null);function Ta(n,e){switch(J(Je,e),J(ze,n),J(Tn,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?kf(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=kf(e),n=Jf(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}on(Tn),J(Tn,n)}function Lt(){on(Tn),on(ze),on(Je)}function kr(n){n.memoizedState!==null&&J(za,n);var e=Tn.current,t=Jf(e,n.type);e!==t&&(J(ze,n),J(Tn,t))}function Aa(n){ze.current===n&&(on(Tn),on(ze)),za.current===n&&(on(za),va._currentValue=H)}var Jr,xc;function St(n){if(Jr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Jr=e&&e[1]||"",xc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jr+n+xc}var Wr=!1;function Fr(n,e){if(!n||Wr)return"";Wr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var y=g}Reflect.construct(n,[],x)}else{try{x.call()}catch(g){y=g}n.call(x.prototype)}}else{try{throw Error()}catch(g){y=g}(x=n())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),i=r[0],u=r[1];if(i&&u){var s=i.split(`
`),h=u.split(`
`);for(a=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;if(l===s.length||a===h.length)for(l=s.length-1,a=h.length-1;1<=l&&0<=a&&s[l]!==h[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==h[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==h[a]){var v=`
`+s[l].replace(" at new "," at ");return n.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",n.displayName)),v}while(1<=l&&0<=a);break}}}finally{Wr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?St(t):""}function Xm(n,e){switch(n.tag){case 26:case 27:case 5:return St(n.type);case 16:return St("Lazy");case 13:return n.child!==e&&e!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Fr(n.type,!1);case 11:return Fr(n.type.render,!1);case 1:return Fr(n.type,!0);case 31:return St("Activity");default:return""}}function Sc(n){try{var e="",t=null;do e+=Xm(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $r=Object.prototype.hasOwnProperty,Ir=p.unstable_scheduleCallback,Pr=p.unstable_cancelCallback,Lm=p.unstable_shouldYield,Vm=p.unstable_requestPaint,Fn=p.unstable_now,Zm=p.unstable_getCurrentPriorityLevel,zc=p.unstable_ImmediatePriority,Tc=p.unstable_UserBlockingPriority,ja=p.unstable_NormalPriority,Km=p.unstable_LowPriority,Ac=p.unstable_IdlePriority,km=p.log,Jm=p.unstable_setDisableYieldValue,Dl=null,$n=null;function We(n){if(typeof km=="function"&&Jm(n),$n&&typeof $n.setStrictMode=="function")try{$n.setStrictMode(Dl,n)}catch{}}var In=Math.clz32?Math.clz32:$m,Wm=Math.log,Fm=Math.LN2;function $m(n){return n>>>=0,n===0?32:31-(Wm(n)/Fm|0)|0}var Ea=256,Na=262144,Ma=4194304;function zt(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Da(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var a=0,r=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var u=l&134217727;return u!==0?(l=u&~r,l!==0?a=zt(l):(i&=u,i!==0?a=zt(i):t||(t=u&~n,t!==0&&(a=zt(t))))):(u=l&~r,u!==0?a=zt(u):i!==0?a=zt(i):t||(t=l&~n,t!==0&&(a=zt(t)))),a===0?0:e!==0&&e!==a&&(e&r)===0&&(r=a&-a,t=e&-e,r>=t||r===32&&(t&4194048)!==0)?e:a}function Ol(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Im(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jc(){var n=Ma;return Ma<<=1,(Ma&62914560)===0&&(Ma=4194304),n}function ni(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ul(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Pm(n,e,t,l,a,r){var i=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var u=n.entanglements,s=n.expirationTimes,h=n.hiddenUpdates;for(t=i&~t;0<t;){var v=31-In(t),x=1<<v;u[v]=0,s[v]=-1;var y=h[v];if(y!==null)for(h[v]=null,v=0;v<y.length;v++){var g=y[v];g!==null&&(g.lane&=-536870913)}t&=~x}l!==0&&Ec(n,l,0),r!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=r&~(i&~e))}function Ec(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-In(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function Nc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-In(t),a=1<<l;a&e|n[l]&e&&(n[l]|=e),t&=~a}}function Mc(n,e){var t=e&-e;return t=(t&42)!==0?1:ei(t),(t&(n.suspendedLanes|e))!==0?0:t}function ei(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ti(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dc(){var n=j.p;return n!==0?n:(n=window.event,n===void 0?32:gm(n.type))}function Oc(n,e){var t=j.p;try{return j.p=n,e()}finally{j.p=t}}var Fe=Math.random().toString(36).slice(2),En="__reactFiber$"+Fe,Qn="__reactProps$"+Fe,Vt="__reactContainer$"+Fe,li="__reactEvents$"+Fe,nd="__reactListeners$"+Fe,ed="__reactHandles$"+Fe,Uc="__reactResources$"+Fe,Hl="__reactMarker$"+Fe;function ai(n){delete n[En],delete n[Qn],delete n[li],delete n[nd],delete n[ed]}function Zt(n){var e=n[En];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vt]||t[En]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=em(n);n!==null;){if(t=n[En])return t;n=em(n)}return e}n=t,t=n.parentNode}return null}function Kt(n){if(n=n[En]||n[Vt]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Cl(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(m(33))}function kt(n){var e=n[Uc];return e||(e=n[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function An(n){n[Hl]=!0}var Hc=new Set,Cc={};function Tt(n,e){Jt(n,e),Jt(n+"Capture",e)}function Jt(n,e){for(Cc[n]=e,n=0;n<e.length;n++)Hc.add(e[n])}var td=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},qc={};function ld(n){return $r.call(qc,n)?!0:$r.call(Bc,n)?!1:td.test(n)?qc[n]=!0:(Bc[n]=!0,!1)}function Oa(n,e,t){if(ld(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Ua(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function De(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+l)}}function se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function wc(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ad(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,r=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,r.call(this,i)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ri(n){if(!n._valueTracker){var e=wc(n)?"checked":"value";n._valueTracker=ad(n,e,""+n[e])}}function Yc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=wc(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}function Ha(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var rd=/[\n"\\]/g;function oe(n){return n.replace(rd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ii(n,e,t,l,a,r,i,u){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+se(e)):n.value!==""+se(e)&&(n.value=""+se(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?ui(n,i,se(e)):t!=null?ui(n,i,se(t)):l!=null&&n.removeAttribute("value"),a==null&&r!=null&&(n.defaultChecked=!!r),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+se(u):n.removeAttribute("name")}function Qc(n,e,t,l,a,r,i,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){ri(n);return}t=t!=null?""+se(t):"",e=e!=null?""+se(e):t,u||e===n.value||(n.value=e),n.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=u?n.checked:!!l,n.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),ri(n)}function ui(n,e,t){e==="number"&&Ha(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function Wt(n,e,t,l){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&l&&(n[t].defaultSelected=!0)}else{for(t=""+se(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,l&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Rc(n,e,t){if(e!=null&&(e=""+se(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+se(t):""}function Gc(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(m(92));if(Me(l)){if(1<l.length)throw Error(m(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=se(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),ri(n)}function Ft(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var id=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xc(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||id.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Lc(n,e,t){if(e!=null&&typeof e!="object")throw Error(m(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&t[a]!==l&&Xc(n,a,l)}else for(var r in e)e.hasOwnProperty(r)&&Xc(n,r,e[r])}function ci(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ca(n){return cd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Oe(){}var si=null;function oi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $t=null,It=null;function Vc(n){var e=Kt(n);if(e&&(n=e.stateNode)){var t=n[Qn]||null;n:switch(n=e.stateNode,e.type){case"input":if(ii(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+oe(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var a=l[Qn]||null;if(!a)throw Error(m(90));ii(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&Yc(l)}break n;case"textarea":Rc(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Wt(n,!!t.multiple,e,!1)}}}var fi=!1;function Zc(n,e,t){if(fi)return n(e,t);fi=!0;try{var l=n(e);return l}finally{if(fi=!1,($t!==null||It!==null)&&(xr(),$t&&(e=$t,n=It,It=$t=null,Vc(e),n)))for(e=0;e<n.length;e++)Vc(n[e])}}function Bl(n,e){var t=n.stateNode;if(t===null)return null;var l=t[Qn]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(m(231,e,typeof t));return t}var Ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=!1;if(Ue)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){mi=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{mi=!1}var $e=null,di=null,Ba=null;function Kc(){if(Ba)return Ba;var n,e=di,t=e.length,l,a="value"in $e?$e.value:$e.textContent,r=a.length;for(n=0;n<t&&e[n]===a[n];n++);var i=t-n;for(l=1;l<=i&&e[t-l]===a[r-l];l++);return Ba=a.slice(n,1<l?1-l:void 0)}function qa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function wa(){return!0}function kc(){return!1}function Rn(n){function e(t,l,a,r,i){this._reactName=t,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?wa:kc,this.isPropagationStopped=kc,this}return D(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=Rn(At),wl=D({},At,{view:0,detail:0}),sd=Rn(wl),hi,yi,Yl,Qa=D({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Yl&&(Yl&&n.type==="mousemove"?(hi=n.screenX-Yl.screenX,yi=n.screenY-Yl.screenY):yi=hi=0,Yl=n),hi)},movementY:function(n){return"movementY"in n?n.movementY:yi}}),Jc=Rn(Qa),od=D({},Qa,{dataTransfer:0}),fd=Rn(od),md=D({},wl,{relatedTarget:0}),pi=Rn(md),dd=D({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=Rn(dd),yd=D({},At,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),pd=Rn(yd),gd=D({},At,{data:0}),Wc=Rn(gd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=_d[n])?!!e[n]:!1}function gi(){return xd}var Sd=D({},wl,{key:function(n){if(n.key){var e=vd[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(n){return n.type==="keypress"?qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zd=Rn(Sd),Td=D({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=Rn(Td),Ad=D({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),jd=Rn(Ad),Ed=D({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=Rn(Ed),Md=D({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=Rn(Md),Od=D({},At,{newState:0,oldState:0}),Ud=Rn(Od),Hd=[9,13,27,32],vi=Ue&&"CompositionEvent"in window,Ql=null;Ue&&"documentMode"in document&&(Ql=document.documentMode);var Cd=Ue&&"TextEvent"in window&&!Ql,$c=Ue&&(!vi||Ql&&8<Ql&&11>=Ql),Ic=" ",Pc=!1;function ns(n,e){switch(n){case"keyup":return Hd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function es(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pt=!1;function Bd(n,e){switch(n){case"compositionend":return es(e);case"keypress":return e.which!==32?null:(Pc=!0,Ic);case"textInput":return n=e.data,n===Ic&&Pc?null:n;default:return null}}function qd(n,e){if(Pt)return n==="compositionend"||!vi&&ns(n,e)?(n=Kc(),Ba=di=$e=null,Pt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $c&&e.locale!=="ko"?null:e.data;default:return null}}var wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wd[n.type]:e==="textarea"}function ls(n,e,t,l){$t?It?It.push(l):It=[l]:$t=l,e=Nr(e,"onChange"),0<e.length&&(t=new Ya("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var Rl=null,Gl=null;function Yd(n){Gf(n,0)}function Ra(n){var e=Cl(n);if(Yc(e))return n}function as(n,e){if(n==="change")return e}var rs=!1;if(Ue){var bi;if(Ue){var _i="oninput"in document;if(!_i){var is=document.createElement("div");is.setAttribute("oninput","return;"),_i=typeof is.oninput=="function"}bi=_i}else bi=!1;rs=bi&&(!document.documentMode||9<document.documentMode)}function us(){Rl&&(Rl.detachEvent("onpropertychange",cs),Gl=Rl=null)}function cs(n){if(n.propertyName==="value"&&Ra(Gl)){var e=[];ls(e,Gl,n,oi(n)),Zc(Yd,e)}}function Qd(n,e,t){n==="focusin"?(us(),Rl=e,Gl=t,Rl.attachEvent("onpropertychange",cs)):n==="focusout"&&us()}function Rd(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ra(Gl)}function Gd(n,e){if(n==="click")return Ra(e)}function Xd(n,e){if(n==="input"||n==="change")return Ra(e)}function Ld(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Ld;function Xl(n,e){if(Pn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var a=t[l];if(!$r.call(e,a)||!Pn(n[a],e[a]))return!1}return!0}function ss(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function os(n,e){var t=ss(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=ss(t)}}function fs(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?fs(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ms(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Ha(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ha(n.document)}return e}function xi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Vd=Ue&&"documentMode"in document&&11>=document.documentMode,nl=null,Si=null,Ll=null,zi=!1;function ds(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zi||nl==null||nl!==Ha(l)||(l=nl,"selectionStart"in l&&xi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Xl(Ll,l)||(Ll=l,l=Nr(Si,"onSelect"),0<l.length&&(e=new Ya("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=nl)))}function jt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var el={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionrun:jt("Transition","TransitionRun"),transitionstart:jt("Transition","TransitionStart"),transitioncancel:jt("Transition","TransitionCancel"),transitionend:jt("Transition","TransitionEnd")},Ti={},hs={};Ue&&(hs=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Et(n){if(Ti[n])return Ti[n];if(!el[n])return n;var e=el[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in hs)return Ti[n]=e[t];return n}var ys=Et("animationend"),ps=Et("animationiteration"),gs=Et("animationstart"),Zd=Et("transitionrun"),Kd=Et("transitionstart"),kd=Et("transitioncancel"),vs=Et("transitionend"),bs=new Map,Ai="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ai.push("scrollEnd");function be(n,e){bs.set(n,e),Tt(e,[n])}var Ga=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},fe=[],tl=0,ji=0;function Xa(){for(var n=tl,e=ji=tl=0;e<n;){var t=fe[e];fe[e++]=null;var l=fe[e];fe[e++]=null;var a=fe[e];fe[e++]=null;var r=fe[e];if(fe[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}r!==0&&_s(t,a,r)}}function La(n,e,t,l){fe[tl++]=n,fe[tl++]=e,fe[tl++]=t,fe[tl++]=l,ji|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ei(n,e,t,l){return La(n,e,t,l),Va(n)}function Nt(n,e){return La(n,null,null,e),Va(n)}function _s(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var a=!1,r=n.return;r!==null;)r.childLanes|=t,l=r.alternate,l!==null&&(l.childLanes|=t),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(a=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,a&&e!==null&&(a=31-In(t),n=r.hiddenUpdates,l=n[a],l===null?n[a]=[e]:l.push(e),e.lane=t|536870912),r):null}function Va(n){if(50<fa)throw fa=0,qu=null,Error(m(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ll={};function Jd(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ne(n,e,t,l){return new Jd(n,e,t,l)}function Ni(n){return n=n.prototype,!(!n||!n.isReactComponent)}function He(n,e){var t=n.alternate;return t===null?(t=ne(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function xs(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Za(n,e,t,l,a,r){var i=0;if(l=n,typeof n=="function")Ni(n)&&(i=1);else if(typeof n=="string")i=Ph(n,t,Tn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case ce:return n=ne(31,t,e,a),n.elementType=ce,n.lanes=r,n;case Cn:return Mt(t.children,a,r,e);case Ne:i=8,a|=24;break;case Se:return n=ne(12,t,e,a|2),n.elementType=Se,n.lanes=r,n;case Jn:return n=ne(13,t,e,a),n.elementType=Jn,n.lanes=r,n;case Wn:return n=ne(19,t,e,a),n.elementType=Wn,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fn:i=10;break n;case xt:i=9;break n;case kn:i=11;break n;case ue:i=14;break n;case Yn:i=16,l=null;break n}i=29,t=Error(m(130,n===null?"null":typeof n,"")),l=null}return e=ne(i,t,e,a),e.elementType=n,e.type=l,e.lanes=r,e}function Mt(n,e,t,l){return n=ne(7,n,l,e),n.lanes=t,n}function Mi(n,e,t){return n=ne(6,n,null,e),n.lanes=t,n}function Ss(n){var e=ne(18,null,null,0);return e.stateNode=n,e}function Di(n,e,t){return e=ne(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var zs=new WeakMap;function me(n,e){if(typeof n=="object"&&n!==null){var t=zs.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Sc(e)},zs.set(n,e),e)}return{value:n,source:e,stack:Sc(e)}}var al=[],rl=0,Ka=null,Vl=0,de=[],he=0,Ie=null,Te=1,Ae="";function Ce(n,e){al[rl++]=Vl,al[rl++]=Ka,Ka=n,Vl=e}function Ts(n,e,t){de[he++]=Te,de[he++]=Ae,de[he++]=Ie,Ie=n;var l=Te;n=Ae;var a=32-In(l)-1;l&=~(1<<a),t+=1;var r=32-In(e)+a;if(30<r){var i=a-a%5;r=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Te=1<<32-In(e)+a|t<<a|l,Ae=r+n}else Te=1<<r|t<<a|l,Ae=n}function Oi(n){n.return!==null&&(Ce(n,1),Ts(n,1,0))}function Ui(n){for(;n===Ka;)Ka=al[--rl],al[rl]=null,Vl=al[--rl],al[rl]=null;for(;n===Ie;)Ie=de[--he],de[he]=null,Ae=de[--he],de[he]=null,Te=de[--he],de[he]=null}function As(n,e){de[he++]=Te,de[he++]=Ae,de[he++]=Ie,Te=e.id,Ae=e.overflow,Ie=n}var Nn=null,rn=null,X=!1,Pe=null,ye=!1,Hi=Error(m(519));function nt(n){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(me(e,n)),Hi}function js(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[En]=n,e[Qn]=l,t){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(t=0;t<da.length;t++)Q(da[t],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Q("invalid",e),Qc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Q("invalid",e);break;case"textarea":Q("invalid",e),Gc(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||Zf(e.textContent,t)?(l.popover!=null&&(Q("beforetoggle",e),Q("toggle",e)),l.onScroll!=null&&Q("scroll",e),l.onScrollEnd!=null&&Q("scrollend",e),l.onClick!=null&&(e.onclick=Oe),e=!0):e=!1,e||nt(n,!0)}function Es(n){for(Nn=n.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:ye=!1;return;case 27:case 3:ye=!0;return;default:Nn=Nn.return}}function il(n){if(n!==Nn)return!1;if(!X)return Es(n),X=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||$u(n.type,n.memoizedProps)),t=!t),t&&rn&&nt(n),Es(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));rn=nm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));rn=nm(n)}else e===27?(e=rn,ht(n.type)?(n=tc,tc=null,rn=n):rn=e):rn=Nn?ge(n.stateNode.nextSibling):null;return!0}function Dt(){rn=Nn=null,X=!1}function Ci(){var n=Pe;return n!==null&&(Vn===null?Vn=n:Vn.push.apply(Vn,n),Pe=null),n}function Zl(n){Pe===null?Pe=[n]:Pe.push(n)}var Bi=Bn(null),Ot=null,Be=null;function et(n,e,t){J(Bi,e._currentValue),e._currentValue=t}function qe(n){n._currentValue=Bi.current,on(Bi)}function qi(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function wi(n,e,t,l){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var r=a.dependencies;if(r!==null){var i=a.child;r=r.firstContext;n:for(;r!==null;){var u=r;r=a;for(var s=0;s<e.length;s++)if(u.context===e[s]){r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),qi(r.return,t,n),l||(i=null);break n}r=u.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(m(341));i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),qi(i,t,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function ul(n,e,t,l){n=null;for(var a=e,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var u=a.type;Pn(a.pendingProps.value,i.value)||(n!==null?n.push(u):n=[u])}}else if(a===za.current){if(i=a.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(va):n=[va])}a=a.return}n!==null&&wi(e,n,t,l),e.flags|=262144}function ka(n){for(n=n.firstContext;n!==null;){if(!Pn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ut(n){Ot=n,Be=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Mn(n){return Ns(Ot,n)}function Ja(n,e){return Ot===null&&Ut(n),Ns(n,e)}function Ns(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Be===null){if(n===null)throw Error(m(308));Be=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Be=Be.next=e;return t}var Wd=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Fd=p.unstable_scheduleCallback,$d=p.unstable_NormalPriority,gn={$$typeof:fn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yi(){return{controller:new Wd,data:new Map,refCount:0}}function Kl(n){n.refCount--,n.refCount===0&&Fd($d,function(){n.controller.abort()})}var kl=null,Qi=0,cl=0,sl=null;function Id(n,e){if(kl===null){var t=kl=[];Qi=0,cl=Xu(),sl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Qi++,e.then(Ms,Ms),e}function Ms(){if(--Qi===0&&kl!==null){sl!==null&&(sl.status="fulfilled");var n=kl;kl=null,cl=0,sl=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Pd(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<t.length;a++)(0,t[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),l}var Ds=_.S;_.S=function(n,e){yf=Fn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Id(n,e),Ds!==null&&Ds(n,e)};var Ht=Bn(null);function Ri(){var n=Ht.current;return n!==null?n:en.pooledCache}function Wa(n,e){e===null?J(Ht,Ht.current):J(Ht,e.pool)}function Os(){var n=Ri();return n===null?null:{parent:gn._currentValue,pool:n}}var ol=Error(m(460)),Gi=Error(m(474)),Fa=Error(m(542)),$a={then:function(){}};function Us(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Hs(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Oe,Oe),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bs(n),n;default:if(typeof e.status=="string")e.then(Oe,Oe);else{if(n=en,n!==null&&100<n.shellSuspendCounter)throw Error(m(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bs(n),n}throw Bt=e,ol}}function Ct(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Bt=t,ol):t}}var Bt=null;function Cs(){if(Bt===null)throw Error(m(459));var n=Bt;return Bt=null,n}function Bs(n){if(n===ol||n===Fa)throw Error(m(483))}var fl=null,Jl=0;function Ia(n){var e=Jl;return Jl+=1,fl===null&&(fl=[]),Hs(fl,n,e)}function Wl(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Pa(n,e){throw e.$$typeof===C?Error(m(525)):(n=Object.prototype.toString.call(e),Error(m(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function qs(n){function e(f,o){if(n){var d=f.deletions;d===null?(f.deletions=[o],f.flags|=16):d.push(o)}}function t(f,o){if(!n)return null;for(;o!==null;)e(f,o),o=o.sibling;return null}function l(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function a(f,o){return f=He(f,o),f.index=0,f.sibling=null,f}function r(f,o,d){return f.index=d,n?(d=f.alternate,d!==null?(d=d.index,d<o?(f.flags|=67108866,o):d):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function i(f){return n&&f.alternate===null&&(f.flags|=67108866),f}function u(f,o,d,b){return o===null||o.tag!==6?(o=Mi(d,f.mode,b),o.return=f,o):(o=a(o,d),o.return=f,o)}function s(f,o,d,b){var O=d.type;return O===Cn?v(f,o,d.props.children,b,d.key):o!==null&&(o.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Yn&&Ct(O)===o.type)?(o=a(o,d.props),Wl(o,d),o.return=f,o):(o=Za(d.type,d.key,d.props,null,f.mode,b),Wl(o,d),o.return=f,o)}function h(f,o,d,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=Di(d,f.mode,b),o.return=f,o):(o=a(o,d.children||[]),o.return=f,o)}function v(f,o,d,b,O){return o===null||o.tag!==7?(o=Mt(d,f.mode,b,O),o.return=f,o):(o=a(o,d),o.return=f,o)}function x(f,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Mi(""+o,f.mode,d),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Kn:return d=Za(o.type,o.key,o.props,null,f.mode,d),Wl(d,o),d.return=f,d;case xn:return o=Di(o,f.mode,d),o.return=f,o;case Yn:return o=Ct(o),x(f,o,d)}if(Me(o)||w(o))return o=Mt(o,f.mode,d,null),o.return=f,o;if(typeof o.then=="function")return x(f,Ia(o),d);if(o.$$typeof===fn)return x(f,Ja(f,o),d);Pa(f,o)}return null}function y(f,o,d,b){var O=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return O!==null?null:u(f,o,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Kn:return d.key===O?s(f,o,d,b):null;case xn:return d.key===O?h(f,o,d,b):null;case Yn:return d=Ct(d),y(f,o,d,b)}if(Me(d)||w(d))return O!==null?null:v(f,o,d,b,null);if(typeof d.then=="function")return y(f,o,Ia(d),b);if(d.$$typeof===fn)return y(f,o,Ja(f,d),b);Pa(f,d)}return null}function g(f,o,d,b,O){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,u(o,f,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Kn:return f=f.get(b.key===null?d:b.key)||null,s(o,f,b,O);case xn:return f=f.get(b.key===null?d:b.key)||null,h(o,f,b,O);case Yn:return b=Ct(b),g(f,o,d,b,O)}if(Me(b)||w(b))return f=f.get(d)||null,v(o,f,b,O,null);if(typeof b.then=="function")return g(f,o,d,Ia(b),O);if(b.$$typeof===fn)return g(f,o,d,Ja(o,b),O);Pa(o,b)}return null}function E(f,o,d,b){for(var O=null,V=null,M=o,q=o=0,G=null;M!==null&&q<d.length;q++){M.index>q?(G=M,M=null):G=M.sibling;var Z=y(f,M,d[q],b);if(Z===null){M===null&&(M=G);break}n&&M&&Z.alternate===null&&e(f,M),o=r(Z,o,q),V===null?O=Z:V.sibling=Z,V=Z,M=G}if(q===d.length)return t(f,M),X&&Ce(f,q),O;if(M===null){for(;q<d.length;q++)M=x(f,d[q],b),M!==null&&(o=r(M,o,q),V===null?O=M:V.sibling=M,V=M);return X&&Ce(f,q),O}for(M=l(M);q<d.length;q++)G=g(M,f,q,d[q],b),G!==null&&(n&&G.alternate!==null&&M.delete(G.key===null?q:G.key),o=r(G,o,q),V===null?O=G:V.sibling=G,V=G);return n&&M.forEach(function(bt){return e(f,bt)}),X&&Ce(f,q),O}function U(f,o,d,b){if(d==null)throw Error(m(151));for(var O=null,V=null,M=o,q=o=0,G=null,Z=d.next();M!==null&&!Z.done;q++,Z=d.next()){M.index>q?(G=M,M=null):G=M.sibling;var bt=y(f,M,Z.value,b);if(bt===null){M===null&&(M=G);break}n&&M&&bt.alternate===null&&e(f,M),o=r(bt,o,q),V===null?O=bt:V.sibling=bt,V=bt,M=G}if(Z.done)return t(f,M),X&&Ce(f,q),O;if(M===null){for(;!Z.done;q++,Z=d.next())Z=x(f,Z.value,b),Z!==null&&(o=r(Z,o,q),V===null?O=Z:V.sibling=Z,V=Z);return X&&Ce(f,q),O}for(M=l(M);!Z.done;q++,Z=d.next())Z=g(M,f,q,Z.value,b),Z!==null&&(n&&Z.alternate!==null&&M.delete(Z.key===null?q:Z.key),o=r(Z,o,q),V===null?O=Z:V.sibling=Z,V=Z);return n&&M.forEach(function(oy){return e(f,oy)}),X&&Ce(f,q),O}function nn(f,o,d,b){if(typeof d=="object"&&d!==null&&d.type===Cn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Kn:n:{for(var O=d.key;o!==null;){if(o.key===O){if(O=d.type,O===Cn){if(o.tag===7){t(f,o.sibling),b=a(o,d.props.children),b.return=f,f=b;break n}}else if(o.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Yn&&Ct(O)===o.type){t(f,o.sibling),b=a(o,d.props),Wl(b,d),b.return=f,f=b;break n}t(f,o);break}else e(f,o);o=o.sibling}d.type===Cn?(b=Mt(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=Za(d.type,d.key,d.props,null,f.mode,b),Wl(b,d),b.return=f,f=b)}return i(f);case xn:n:{for(O=d.key;o!==null;){if(o.key===O)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){t(f,o.sibling),b=a(o,d.children||[]),b.return=f,f=b;break n}else{t(f,o);break}else e(f,o);o=o.sibling}b=Di(d,f.mode,b),b.return=f,f=b}return i(f);case Yn:return d=Ct(d),nn(f,o,d,b)}if(Me(d))return E(f,o,d,b);if(w(d)){if(O=w(d),typeof O!="function")throw Error(m(150));return d=O.call(d),U(f,o,d,b)}if(typeof d.then=="function")return nn(f,o,Ia(d),b);if(d.$$typeof===fn)return nn(f,o,Ja(f,d),b);Pa(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(t(f,o.sibling),b=a(o,d),b.return=f,f=b):(t(f,o),b=Mi(d,f.mode,b),b.return=f,f=b),i(f)):t(f,o)}return function(f,o,d,b){try{Jl=0;var O=nn(f,o,d,b);return fl=null,O}catch(M){if(M===ol||M===Fa)throw M;var V=ne(29,M,null,f.mode);return V.lanes=b,V.return=f,V}}}var qt=qs(!0),ws=qs(!1),tt=!1;function Xi(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Li(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function lt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function at(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(k&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=Va(n),_s(n,null,t),e}return La(n,l,e,t),Va(n)}function Fl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Nc(n,t)}}function Vi(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var a=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?a=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?a=r=e:r=r.next=e}else a=r=e;t={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Zi=!1;function $l(){if(Zi){var n=sl;if(n!==null)throw n}}function Il(n,e,t,l){Zi=!1;var a=n.updateQueue;tt=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var s=u,h=s.next;s.next=null,i===null?r=h:i.next=h,i=s;var v=n.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==i&&(u===null?v.firstBaseUpdate=h:u.next=h,v.lastBaseUpdate=s))}if(r!==null){var x=a.baseState;i=0,v=h=s=null,u=r;do{var y=u.lane&-536870913,g=y!==u.lane;if(g?(R&y)===y:(l&y)===y){y!==0&&y===cl&&(Zi=!0),v!==null&&(v=v.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var E=n,U=u;y=e;var nn=t;switch(U.tag){case 1:if(E=U.payload,typeof E=="function"){x=E.call(nn,x,y);break n}x=E;break n;case 3:E.flags=E.flags&-65537|128;case 0:if(E=U.payload,y=typeof E=="function"?E.call(nn,x,y):E,y==null)break n;x=D({},x,y);break n;case 2:tt=!0}}y=u.callback,y!==null&&(n.flags|=64,g&&(n.flags|=8192),g=a.callbacks,g===null?a.callbacks=[y]:g.push(y))}else g={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(h=v=g,s=x):v=v.next=g,i|=y;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;g=u,u=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);v===null&&(s=x),a.baseState=s,a.firstBaseUpdate=h,a.lastBaseUpdate=v,r===null&&(a.shared.lanes=0),st|=i,n.lanes=i,n.memoizedState=x}}function Ys(n,e){if(typeof n!="function")throw Error(m(191,n));n.call(e)}function Qs(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Ys(t[n],e)}var ml=Bn(null),nr=Bn(0);function Rs(n,e){n=Ze,J(nr,n),J(ml,e),Ze=n|e.baseLanes}function Ki(){J(nr,Ze),J(ml,ml.current)}function ki(){Ze=nr.current,on(ml),on(nr)}var ee=Bn(null),pe=null;function rt(n){var e=n.alternate;J(yn,yn.current&1),J(ee,n),pe===null&&(e===null||ml.current!==null||e.memoizedState!==null)&&(pe=n)}function Ji(n){J(yn,yn.current),J(ee,n),pe===null&&(pe=n)}function Gs(n){n.tag===22?(J(yn,yn.current),J(ee,n),pe===null&&(pe=n)):it()}function it(){J(yn,yn.current),J(ee,ee.current)}function te(n){on(ee),pe===n&&(pe=null),on(yn)}var yn=Bn(0);function er(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||nc(t)||ec(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var we=0,B=null,I=null,vn=null,tr=!1,dl=!1,wt=!1,lr=0,Pl=0,hl=null,nh=0;function dn(){throw Error(m(321))}function Wi(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pn(n[t],e[t]))return!1;return!0}function Fi(n,e,t,l,a,r){return we=r,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=n===null||n.memoizedState===null?Ao:fu,wt=!1,r=t(l,a),wt=!1,dl&&(r=Ls(e,t,l,a)),Xs(n),r}function Xs(n){_.H=ta;var e=I!==null&&I.next!==null;if(we=0,vn=I=B=null,tr=!1,Pl=0,hl=null,e)throw Error(m(300));n===null||bn||(n=n.dependencies,n!==null&&ka(n)&&(bn=!0))}function Ls(n,e,t,l){B=n;var a=0;do{if(dl&&(hl=null),Pl=0,dl=!1,25<=a)throw Error(m(301));if(a+=1,vn=I=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=jo,r=e(t,l)}while(dl);return r}function eh(){var n=_.H,e=n.useState()[0];return e=typeof e.then=="function"?na(e):e,n=n.useState()[0],(I!==null?I.memoizedState:null)!==n&&(B.flags|=1024),e}function $i(){var n=lr!==0;return lr=0,n}function Ii(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Pi(n){if(tr){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}tr=!1}we=0,vn=I=B=null,dl=!1,Pl=lr=0,hl=null}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?B.memoizedState=vn=n:vn=vn.next=n,vn}function pn(){if(I===null){var n=B.alternate;n=n!==null?n.memoizedState:null}else n=I.next;var e=vn===null?B.memoizedState:vn.next;if(e!==null)vn=e,I=n;else{if(n===null)throw B.alternate===null?Error(m(467)):Error(m(310));I=n,n={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},vn===null?B.memoizedState=vn=n:vn=vn.next=n}return vn}function ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function na(n){var e=Pl;return Pl+=1,hl===null&&(hl=[]),n=Hs(hl,n,e),e=B,(vn===null?e.memoizedState:vn.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?Ao:fu),n}function rr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return na(n);if(n.$$typeof===fn)return Mn(n)}throw Error(m(438,String(n)))}function nu(n){var e=null,t=B.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=B.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=ar(),B.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=Xt;return e.index++,t}function Ye(n,e){return typeof e=="function"?e(n):e}function ir(n){var e=pn();return eu(e,I,n)}function eu(n,e,t){var l=n.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var a=n.baseQueue,r=l.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}e.baseQueue=a=r,l.pending=null}if(r=n.baseState,a===null)n.memoizedState=r;else{e=a.next;var u=i=null,s=null,h=e,v=!1;do{var x=h.lane&-536870913;if(x!==h.lane?(R&x)===x:(we&x)===x){var y=h.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),x===cl&&(v=!0);else if((we&y)===y){h=h.next,y===cl&&(v=!0);continue}else x={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(u=s=x,i=r):s=s.next=x,B.lanes|=y,st|=y;x=h.action,wt&&t(r,x),r=h.hasEagerState?h.eagerState:t(r,x)}else y={lane:x,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(u=s=y,i=r):s=s.next=y,B.lanes|=x,st|=x;h=h.next}while(h!==null&&h!==e);if(s===null?i=r:s.next=u,!Pn(r,n.memoizedState)&&(bn=!0,v&&(t=sl,t!==null)))throw t;n.memoizedState=r,n.baseState=i,n.baseQueue=s,l.lastRenderedState=r}return a===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function tu(n){var e=pn(),t=e.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=n;var l=t.dispatch,a=t.pending,r=e.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do r=n(r,i.action),i=i.next;while(i!==a);Pn(r,e.memoizedState)||(bn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,l]}function Vs(n,e,t){var l=B,a=pn(),r=X;if(r){if(t===void 0)throw Error(m(407));t=t()}else t=e();var i=!Pn((I||a).memoizedState,t);if(i&&(a.memoizedState=t,bn=!0),a=a.queue,ru(ks.bind(null,l,a,n),[n]),a.getSnapshot!==e||i||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Ks.bind(null,l,a,t,e),null),en===null)throw Error(m(349));r||(we&127)!==0||Zs(l,e,t)}return t}function Zs(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=B.updateQueue,e===null?(e=ar(),B.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ks(n,e,t,l){e.value=t,e.getSnapshot=l,Js(e)&&Ws(n)}function ks(n,e,t){return t(function(){Js(e)&&Ws(n)})}function Js(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pn(n,t)}catch{return!0}}function Ws(n){var e=Nt(n,2);e!==null&&Zn(e,n,2)}function lu(n){var e=qn();if(typeof n=="function"){var t=n;if(n=t(),wt){We(!0);try{t()}finally{We(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:n},e}function Fs(n,e,t,l){return n.baseState=t,eu(n,I,typeof l=="function"?l:Ye)}function th(n,e,t,l,a){if(sr(n))throw Error(m(485));if(n=e.action,n!==null){var r={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};_.T!==null?t(!0):r.isTransition=!1,l(r),t=e.pending,t===null?(r.next=e.pending=r,$s(e,r)):(r.next=t.next,e.pending=t.next=r)}}function $s(n,e){var t=e.action,l=e.payload,a=n.state;if(e.isTransition){var r=_.T,i={};_.T=i;try{var u=t(a,l),s=_.S;s!==null&&s(i,u),Is(n,e,u)}catch(h){au(n,e,h)}finally{r!==null&&i.types!==null&&(r.types=i.types),_.T=r}}else try{r=t(a,l),Is(n,e,r)}catch(h){au(n,e,h)}}function Is(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Ps(n,e,l)},function(l){return au(n,e,l)}):Ps(n,e,t)}function Ps(n,e,t){e.status="fulfilled",e.value=t,no(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,$s(n,t)))}function au(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,no(e),e=e.next;while(e!==l)}n.action=null}function no(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function eo(n,e){return e}function to(n,e){if(X){var t=en.formState;if(t!==null){n:{var l=B;if(X){if(rn){e:{for(var a=rn,r=ye;a.nodeType!==8;){if(!r){a=null;break e}if(a=ge(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){rn=ge(a.nextSibling),l=a.data==="F!";break n}}nt(l)}l=!1}l&&(e=t[0])}}return t=qn(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=l,t=So.bind(null,B,l),l.dispatch=t,l=lu(!1),r=ou.bind(null,B,!1,l.queue),l=qn(),a={state:e,dispatch:null,action:n,pending:null},l.queue=a,t=th.bind(null,B,a,r,t),a.dispatch=t,l.memoizedState=n,[e,t,!1]}function lo(n){var e=pn();return ao(e,I,n)}function ao(n,e,t){if(e=eu(n,e,eo)[0],n=ir(Ye)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=na(e)}catch(i){throw i===ol?Fa:i}else l=e;e=pn();var a=e.queue,r=a.dispatch;return t!==e.memoizedState&&(B.flags|=2048,yl(9,{destroy:void 0},lh.bind(null,a,t),null)),[l,r,n]}function lh(n,e){n.action=e}function ro(n){var e=pn(),t=I;if(t!==null)return ao(e,t,n);pn(),e=e.memoizedState,t=pn();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function yl(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=B.updateQueue,e===null&&(e=ar(),B.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function io(){return pn().memoizedState}function ur(n,e,t,l){var a=qn();B.flags|=n,a.memoizedState=yl(1|e,{destroy:void 0},t,l===void 0?null:l)}function cr(n,e,t,l){var a=pn();l=l===void 0?null:l;var r=a.memoizedState.inst;I!==null&&l!==null&&Wi(l,I.memoizedState.deps)?a.memoizedState=yl(e,r,t,l):(B.flags|=n,a.memoizedState=yl(1|e,r,t,l))}function uo(n,e){ur(8390656,8,n,e)}function ru(n,e){cr(2048,8,n,e)}function ah(n){B.flags|=4;var e=B.updateQueue;if(e===null)e=ar(),B.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function co(n){var e=pn().memoizedState;return ah({ref:e,nextImpl:n}),function(){if((k&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function so(n,e){return cr(4,2,n,e)}function oo(n,e){return cr(4,4,n,e)}function fo(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function mo(n,e,t){t=t!=null?t.concat([n]):null,cr(4,4,fo.bind(null,e,n),t)}function iu(){}function ho(n,e){var t=pn();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&Wi(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function yo(n,e){var t=pn();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&Wi(e,l[1]))return l[0];if(l=n(),wt){We(!0);try{n()}finally{We(!1)}}return t.memoizedState=[l,e],l}function uu(n,e,t){return t===void 0||(we&1073741824)!==0&&(R&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=gf(),B.lanes|=n,st|=n,t)}function po(n,e,t,l){return Pn(t,e)?t:ml.current!==null?(n=uu(n,t,l),Pn(n,e)||(bn=!0),n):(we&42)===0||(we&1073741824)!==0&&(R&261930)===0?(bn=!0,n.memoizedState=t):(n=gf(),B.lanes|=n,st|=n,e)}function go(n,e,t,l,a){var r=j.p;j.p=r!==0&&8>r?r:8;var i=_.T,u={};_.T=u,ou(n,!1,e,t);try{var s=a(),h=_.S;if(h!==null&&h(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=Pd(s,l);ea(n,e,v,re(n))}else ea(n,e,l,re(n))}catch(x){ea(n,e,{then:function(){},status:"rejected",reason:x},re())}finally{j.p=r,i!==null&&u.types!==null&&(i.types=u.types),_.T=i}}function rh(){}function cu(n,e,t,l){if(n.tag!==5)throw Error(m(476));var a=vo(n).queue;go(n,a,e,H,t===null?rh:function(){return bo(n),t(l)})}function vo(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:H},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function bo(n){var e=vo(n);e.next===null&&(e=n.alternate.memoizedState),ea(n,e.next.queue,{},re())}function su(){return Mn(va)}function _o(){return pn().memoizedState}function xo(){return pn().memoizedState}function ih(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=re();n=lt(t);var l=at(e,n,t);l!==null&&(Zn(l,e,t),Fl(l,e,t)),e={cache:Yi()},n.payload=e;return}e=e.return}}function uh(n,e,t){var l=re();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},sr(n)?zo(e,t):(t=Ei(n,e,t,l),t!==null&&(Zn(t,n,l),To(t,e,l)))}function So(n,e,t){var l=re();ea(n,e,t,l)}function ea(n,e,t,l){var a={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(sr(n))zo(e,a);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,u=r(i,t);if(a.hasEagerState=!0,a.eagerState=u,Pn(u,i))return La(n,e,a,0),en===null&&Xa(),!1}catch{}if(t=Ei(n,e,a,l),t!==null)return Zn(t,n,l),To(t,e,l),!0}return!1}function ou(n,e,t,l){if(l={lane:2,revertLane:Xu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},sr(n)){if(e)throw Error(m(479))}else e=Ei(n,t,l,2),e!==null&&Zn(e,n,2)}function sr(n){var e=n.alternate;return n===B||e!==null&&e===B}function zo(n,e){dl=tr=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function To(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Nc(n,t)}}var ta={readContext:Mn,use:rr,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};ta.useEffectEvent=dn;var Ao={readContext:Mn,use:rr,useCallback:function(n,e){return qn().memoizedState=[n,e===void 0?null:e],n},useContext:Mn,useEffect:uo,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,ur(4194308,4,fo.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ur(4194308,4,n,e)},useInsertionEffect:function(n,e){ur(4,2,n,e)},useMemo:function(n,e){var t=qn();e=e===void 0?null:e;var l=n();if(wt){We(!0);try{n()}finally{We(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=qn();if(t!==void 0){var a=t(e);if(wt){We(!0);try{t(e)}finally{We(!1)}}}else a=e;return l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},l.queue=n,n=n.dispatch=uh.bind(null,B,n),[l.memoizedState,n]},useRef:function(n){var e=qn();return n={current:n},e.memoizedState=n},useState:function(n){n=lu(n);var e=n.queue,t=So.bind(null,B,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:iu,useDeferredValue:function(n,e){var t=qn();return uu(t,n,e)},useTransition:function(){var n=lu(!1);return n=go.bind(null,B,n.queue,!0,!1),qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=B,a=qn();if(X){if(t===void 0)throw Error(m(407));t=t()}else{if(t=e(),en===null)throw Error(m(349));(R&127)!==0||Zs(l,e,t)}a.memoizedState=t;var r={value:t,getSnapshot:e};return a.queue=r,uo(ks.bind(null,l,r,n),[n]),l.flags|=2048,yl(9,{destroy:void 0},Ks.bind(null,l,r,t,e),null),t},useId:function(){var n=qn(),e=en.identifierPrefix;if(X){var t=Ae,l=Te;t=(l&~(1<<32-In(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=lr++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=nh++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:su,useFormState:to,useActionState:to,useOptimistic:function(n){var e=qn();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=ou.bind(null,B,!0,t),t.dispatch=e,[n,e]},useMemoCache:nu,useCacheRefresh:function(){return qn().memoizedState=ih.bind(null,B)},useEffectEvent:function(n){var e=qn(),t={impl:n};return e.memoizedState=t,function(){if((k&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}},fu={readContext:Mn,use:rr,useCallback:ho,useContext:Mn,useEffect:ru,useImperativeHandle:mo,useInsertionEffect:so,useLayoutEffect:oo,useMemo:yo,useReducer:ir,useRef:io,useState:function(){return ir(Ye)},useDebugValue:iu,useDeferredValue:function(n,e){var t=pn();return po(t,I.memoizedState,n,e)},useTransition:function(){var n=ir(Ye)[0],e=pn().memoizedState;return[typeof n=="boolean"?n:na(n),e]},useSyncExternalStore:Vs,useId:_o,useHostTransitionStatus:su,useFormState:lo,useActionState:lo,useOptimistic:function(n,e){var t=pn();return Fs(t,I,n,e)},useMemoCache:nu,useCacheRefresh:xo};fu.useEffectEvent=co;var jo={readContext:Mn,use:rr,useCallback:ho,useContext:Mn,useEffect:ru,useImperativeHandle:mo,useInsertionEffect:so,useLayoutEffect:oo,useMemo:yo,useReducer:tu,useRef:io,useState:function(){return tu(Ye)},useDebugValue:iu,useDeferredValue:function(n,e){var t=pn();return I===null?uu(t,n,e):po(t,I.memoizedState,n,e)},useTransition:function(){var n=tu(Ye)[0],e=pn().memoizedState;return[typeof n=="boolean"?n:na(n),e]},useSyncExternalStore:Vs,useId:_o,useHostTransitionStatus:su,useFormState:ro,useActionState:ro,useOptimistic:function(n,e){var t=pn();return I!==null?Fs(t,I,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:nu,useCacheRefresh:xo};jo.useEffectEvent=co;function mu(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:D({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var du={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=re(),a=lt(l);a.payload=e,t!=null&&(a.callback=t),e=at(n,a,l),e!==null&&(Zn(e,n,l),Fl(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=re(),a=lt(l);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=at(n,a,l),e!==null&&(Zn(e,n,l),Fl(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=re(),l=lt(t);l.tag=2,e!=null&&(l.callback=e),e=at(n,l,t),e!==null&&(Zn(e,n,t),Fl(e,n,t))}};function Eo(n,e,t,l,a,r,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,r,i):e.prototype&&e.prototype.isPureReactComponent?!Xl(t,l)||!Xl(a,r):!0}function No(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&du.enqueueReplaceState(e,e.state,null)}function Yt(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=D({},t));for(var a in n)t[a]===void 0&&(t[a]=n[a])}return t}function Mo(n){Ga(n)}function Do(n){console.error(n)}function Oo(n){Ga(n)}function or(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Uo(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function hu(n,e,t){return t=lt(t),t.tag=3,t.payload={element:null},t.callback=function(){or(n,e)},t}function Ho(n){return n=lt(n),n.tag=3,n}function Co(n,e,t,l){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;n.payload=function(){return a(r)},n.callback=function(){Uo(e,t,l)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t,l),typeof a!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function ch(n,e,t,l,a){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&ul(e,t,a,!0),t=ee.current,t!==null){switch(t.tag){case 31:case 13:return pe===null?Sr():t.alternate===null&&hn===0&&(hn=3),t.flags&=-257,t.flags|=65536,t.lanes=a,l===$a?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Qu(n,l,a)),!1;case 22:return t.flags|=65536,l===$a?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Qu(n,l,a)),!1}throw Error(m(435,t.tag))}return Qu(n,l,a),Sr(),!1}if(X)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Hi&&(n=Error(m(422),{cause:l}),Zl(me(n,t)))):(l!==Hi&&(e=Error(m(423),{cause:l}),Zl(me(e,t))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,l=me(l,t),a=hu(n.stateNode,l,a),Vi(n,a),hn!==4&&(hn=2)),!1;var r=Error(m(520),{cause:l});if(r=me(r,t),oa===null?oa=[r]:oa.push(r),hn!==4&&(hn=2),e===null)return!0;l=me(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=a&-a,t.lanes|=n,n=hu(t.stateNode,l,n),Vi(t,n),!1;case 1:if(e=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ot===null||!ot.has(r))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Ho(a),Co(a,n,t,l),Vi(t,a),!1}t=t.return}while(t!==null);return!1}var yu=Error(m(461)),bn=!1;function Dn(n,e,t,l){e.child=n===null?ws(e,null,t,l):qt(e,n.child,t,l)}function Bo(n,e,t,l,a){t=t.render;var r=e.ref;if("ref"in l){var i={};for(var u in l)u!=="ref"&&(i[u]=l[u])}else i=l;return Ut(e),l=Fi(n,e,t,i,r,a),u=$i(),n!==null&&!bn?(Ii(n,e,a),Qe(n,e,a)):(X&&u&&Oi(e),e.flags|=1,Dn(n,e,l,a),e.child)}function qo(n,e,t,l,a){if(n===null){var r=t.type;return typeof r=="function"&&!Ni(r)&&r.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=r,wo(n,e,r,l,a)):(n=Za(t.type,null,l,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!zu(n,a)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:Xl,t(i,l)&&n.ref===e.ref)return Qe(n,e,a)}return e.flags|=1,n=He(r,l),n.ref=e.ref,n.return=e,e.child=n}function wo(n,e,t,l,a){if(n!==null){var r=n.memoizedProps;if(Xl(r,l)&&n.ref===e.ref)if(bn=!1,e.pendingProps=l=r,zu(n,a))(n.flags&131072)!==0&&(bn=!0);else return e.lanes=n.lanes,Qe(n,e,a)}return pu(n,e,t,l,a)}function Yo(n,e,t,l){var a=l.children,r=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,n!==null){for(l=e.child=n.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~r}else l=0,e.child=null;return Qo(n,e,r,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wa(e,r!==null?r.cachePool:null),r!==null?Rs(e,r):Ki(),Gs(e);else return l=e.lanes=536870912,Qo(n,e,r!==null?r.baseLanes|t:t,t,l)}else r!==null?(Wa(e,r.cachePool),Rs(e,r),it(),e.memoizedState=null):(n!==null&&Wa(e,null),Ki(),it());return Dn(n,e,a,t),e.child}function la(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qo(n,e,t,l,a){var r=Ri();return r=r===null?null:{parent:gn._currentValue,pool:r},e.memoizedState={baseLanes:t,cachePool:r},n!==null&&Wa(e,null),Ki(),Gs(e),n!==null&&ul(n,e,l,!0),e.childLanes=a,null}function fr(n,e){return e=dr({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Ro(n,e,t){return qt(e,n.child,null,t),n=fr(e,e.pendingProps),n.flags|=2,te(e),e.memoizedState=null,n}function sh(n,e,t){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(X){if(l.mode==="hidden")return n=fr(e,l),e.lanes=536870912,la(null,n);if(Ji(e),(n=rn)?(n=Pf(n,ye),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ie!==null?{id:Te,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},t=Ss(n),t.return=e,e.child=t,Nn=e,rn=null)):n=null,n===null)throw nt(e);return e.lanes=536870912,null}return fr(e,l)}var r=n.memoizedState;if(r!==null){var i=r.dehydrated;if(Ji(e),a)if(e.flags&256)e.flags&=-257,e=Ro(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(m(558));else if(bn||ul(n,e,t,!1),a=(t&n.childLanes)!==0,bn||a){if(l=en,l!==null&&(i=Mc(l,t),i!==0&&i!==r.retryLane))throw r.retryLane=i,Nt(n,i),Zn(l,n,i),yu;Sr(),e=Ro(n,e,t)}else n=r.treeContext,rn=ge(i.nextSibling),Nn=e,X=!0,Pe=null,ye=!1,n!==null&&As(e,n),e=fr(e,l),e.flags|=4096;return e}return n=He(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function mr(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function pu(n,e,t,l,a){return Ut(e),t=Fi(n,e,t,l,void 0,a),l=$i(),n!==null&&!bn?(Ii(n,e,a),Qe(n,e,a)):(X&&l&&Oi(e),e.flags|=1,Dn(n,e,t,a),e.child)}function Go(n,e,t,l,a,r){return Ut(e),e.updateQueue=null,t=Ls(e,l,t,a),Xs(n),l=$i(),n!==null&&!bn?(Ii(n,e,r),Qe(n,e,r)):(X&&l&&Oi(e),e.flags|=1,Dn(n,e,t,r),e.child)}function Xo(n,e,t,l,a){if(Ut(e),e.stateNode===null){var r=ll,i=t.contextType;typeof i=="object"&&i!==null&&(r=Mn(i)),r=new t(l,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=du,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=l,r.state=e.memoizedState,r.refs={},Xi(e),i=t.contextType,r.context=typeof i=="object"&&i!==null?Mn(i):ll,r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(mu(e,t,i,l),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&du.enqueueReplaceState(r,r.state,null),Il(e,l,r,a),$l(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){r=e.stateNode;var u=e.memoizedProps,s=Yt(t,u);r.props=s;var h=r.context,v=t.contextType;i=ll,typeof v=="object"&&v!==null&&(i=Mn(v));var x=t.getDerivedStateFromProps;v=typeof x=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,v||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||h!==i)&&No(e,r,l,i),tt=!1;var y=e.memoizedState;r.state=y,Il(e,l,r,a),$l(),h=e.memoizedState,u||y!==h||tt?(typeof x=="function"&&(mu(e,t,x,l),h=e.memoizedState),(s=tt||Eo(e,t,s,l,y,h,i))?(v||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=h),r.props=l,r.state=h,r.context=i,l=s):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{r=e.stateNode,Li(n,e),i=e.memoizedProps,v=Yt(t,i),r.props=v,x=e.pendingProps,y=r.context,h=t.contextType,s=ll,typeof h=="object"&&h!==null&&(s=Mn(h)),u=t.getDerivedStateFromProps,(h=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==x||y!==s)&&No(e,r,l,s),tt=!1,y=e.memoizedState,r.state=y,Il(e,l,r,a),$l();var g=e.memoizedState;i!==x||y!==g||tt||n!==null&&n.dependencies!==null&&ka(n.dependencies)?(typeof u=="function"&&(mu(e,t,u,l),g=e.memoizedState),(v=tt||Eo(e,t,v,l,y,g,s)||n!==null&&n.dependencies!==null&&ka(n.dependencies))?(h||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,g,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,g,s)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=g),r.props=l,r.state=g,r.context=s,l=v):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),l=!1)}return r=l,mr(n,e),l=(e.flags&128)!==0,r||l?(r=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&l?(e.child=qt(e,n.child,null,a),e.child=qt(e,null,t,a)):Dn(n,e,t,a),e.memoizedState=r.state,n=e.child):n=Qe(n,e,a),n}function Lo(n,e,t,l){return Dt(),e.flags|=256,Dn(n,e,t,l),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vu(n){return{baseLanes:n,cachePool:Os()}}function bu(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=ae),n}function Vo(n,e,t){var l=e.pendingProps,a=!1,r=(e.flags&128)!==0,i;if((i=r)||(i=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(X){if(a?rt(e):it(),(n=rn)?(n=Pf(n,ye),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ie!==null?{id:Te,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},t=Ss(n),t.return=e,e.child=t,Nn=e,rn=null)):n=null,n===null)throw nt(e);return ec(n)?e.lanes=32:e.lanes=536870912,null}var u=l.children;return l=l.fallback,a?(it(),a=e.mode,u=dr({mode:"hidden",children:u},a),l=Mt(l,a,t,null),u.return=e,l.return=e,u.sibling=l,e.child=u,l=e.child,l.memoizedState=vu(t),l.childLanes=bu(n,i,t),e.memoizedState=gu,la(null,l)):(rt(e),_u(e,u))}var s=n.memoizedState;if(s!==null&&(u=s.dehydrated,u!==null)){if(r)e.flags&256?(rt(e),e.flags&=-257,e=xu(n,e,t)):e.memoizedState!==null?(it(),e.child=n.child,e.flags|=128,e=null):(it(),u=l.fallback,a=e.mode,l=dr({mode:"visible",children:l.children},a),u=Mt(u,a,t,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,qt(e,n.child,null,t),l=e.child,l.memoizedState=vu(t),l.childLanes=bu(n,i,t),e.memoizedState=gu,e=la(null,l));else if(rt(e),ec(u)){if(i=u.nextSibling&&u.nextSibling.dataset,i)var h=i.dgst;i=h,l=Error(m(419)),l.stack="",l.digest=i,Zl({value:l,source:null,stack:null}),e=xu(n,e,t)}else if(bn||ul(n,e,t,!1),i=(t&n.childLanes)!==0,bn||i){if(i=en,i!==null&&(l=Mc(i,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,Nt(n,l),Zn(i,n,l),yu;nc(u)||Sr(),e=xu(n,e,t)}else nc(u)?(e.flags|=192,e.child=n.child,e=null):(n=s.treeContext,rn=ge(u.nextSibling),Nn=e,X=!0,Pe=null,ye=!1,n!==null&&As(e,n),e=_u(e,l.children),e.flags|=4096);return e}return a?(it(),u=l.fallback,a=e.mode,s=n.child,h=s.sibling,l=He(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,h!==null?u=He(h,u):(u=Mt(u,a,t,null),u.flags|=2),u.return=e,l.return=e,l.sibling=u,e.child=l,la(null,l),l=e.child,u=n.child.memoizedState,u===null?u=vu(t):(a=u.cachePool,a!==null?(s=gn._currentValue,a=a.parent!==s?{parent:s,pool:s}:a):a=Os(),u={baseLanes:u.baseLanes|t,cachePool:a}),l.memoizedState=u,l.childLanes=bu(n,i,t),e.memoizedState=gu,la(n.child,l)):(rt(e),t=n.child,n=t.sibling,t=He(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t,e.memoizedState=null,t)}function _u(n,e){return e=dr({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function dr(n,e){return n=ne(22,n,null,e),n.lanes=0,n}function xu(n,e,t){return qt(e,n.child,null,t),n=_u(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Zo(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),qi(n.return,e,t)}function Su(n,e,t,l,a,r){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:a,treeForkCount:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=t,i.tailMode=a,i.treeForkCount=r)}function Ko(n,e,t){var l=e.pendingProps,a=l.revealOrder,r=l.tail;l=l.children;var i=yn.current,u=(i&2)!==0;if(u?(i=i&1|2,e.flags|=128):i&=1,J(yn,i),Dn(n,e,l,t),l=X?Vl:0,!u&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zo(n,t,e);else if(n.tag===19)Zo(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&er(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Su(e,!1,a,t,r,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&er(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Su(e,!0,t,null,r,l);break;case"together":Su(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Qe(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),st|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(ul(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(m(153));if(e.child!==null){for(n=e.child,t=He(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=He(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zu(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&ka(n)))}function oh(n,e,t){switch(e.tag){case 3:Ta(e,e.stateNode.containerInfo),et(e,gn,n.memoizedState.cache),Dt();break;case 27:case 5:kr(e);break;case 4:Ta(e,e.stateNode.containerInfo);break;case 10:et(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ji(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(rt(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Vo(n,e,t):(rt(e),n=Qe(n,e,t),n!==null?n.sibling:null);rt(e);break;case 19:var a=(n.flags&128)!==0;if(l=(t&e.childLanes)!==0,l||(ul(n,e,t,!1),l=(t&e.childLanes)!==0),a){if(l)return Ko(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(yn,yn.current),l)break;return null;case 22:return e.lanes=0,Yo(n,e,t,e.pendingProps);case 24:et(e,gn,n.memoizedState.cache)}return Qe(n,e,t)}function ko(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)bn=!0;else{if(!zu(n,t)&&(e.flags&128)===0)return bn=!1,oh(n,e,t);bn=(n.flags&131072)!==0}else bn=!1,X&&(e.flags&1048576)!==0&&Ts(e,Vl,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=Ct(e.elementType),e.type=n,typeof n=="function")Ni(n)?(l=Yt(n,l),e.tag=1,e=Xo(null,e,n,l,t)):(e.tag=0,e=pu(null,e,n,l,t));else{if(n!=null){var a=n.$$typeof;if(a===kn){e.tag=11,e=Bo(null,e,n,l,t);break n}else if(a===ue){e.tag=14,e=qo(null,e,n,l,t);break n}}throw e=zn(n)||n,Error(m(306,e,""))}}return e;case 0:return pu(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,a=Yt(l,e.pendingProps),Xo(n,e,l,a,t);case 3:n:{if(Ta(e,e.stateNode.containerInfo),n===null)throw Error(m(387));l=e.pendingProps;var r=e.memoizedState;a=r.element,Li(n,e),Il(e,l,null,t);var i=e.memoizedState;if(l=i.cache,et(e,gn,l),l!==r.cache&&wi(e,[gn],t,!0),$l(),l=i.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Lo(n,e,l,t);break n}else if(l!==a){a=me(Error(m(424)),e),Zl(a),e=Lo(n,e,l,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,rn=ge(n.firstChild),Nn=e,X=!0,Pe=null,ye=!0,t=ws(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Dt(),l===a){e=Qe(n,e,t);break n}Dn(n,e,l,t)}e=e.child}return e;case 26:return mr(n,e),n===null?(t=rm(e.type,null,e.pendingProps,null))?e.memoizedState=t:X||(t=e.type,n=e.pendingProps,l=Mr(Je.current).createElement(t),l[En]=e,l[Qn]=n,On(l,t,n),An(l),e.stateNode=l):e.memoizedState=rm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return kr(e),n===null&&X&&(l=e.stateNode=tm(e.type,e.pendingProps,Je.current),Nn=e,ye=!0,a=rn,ht(e.type)?(tc=a,rn=ge(l.firstChild)):rn=a),Dn(n,e,e.pendingProps.children,t),mr(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&X&&((a=l=rn)&&(l=Rh(l,e.type,e.pendingProps,ye),l!==null?(e.stateNode=l,Nn=e,rn=ge(l.firstChild),ye=!1,a=!0):a=!1),a||nt(e)),kr(e),a=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,l=r.children,$u(a,r)?l=null:i!==null&&$u(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Fi(n,e,eh,null,null,t),va._currentValue=a),mr(n,e),Dn(n,e,l,t),e.child;case 6:return n===null&&X&&((n=t=rn)&&(t=Gh(t,e.pendingProps,ye),t!==null?(e.stateNode=t,Nn=e,rn=null,n=!0):n=!1),n||nt(e)),null;case 13:return Vo(n,e,t);case 4:return Ta(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=qt(e,null,l,t):Dn(n,e,l,t),e.child;case 11:return Bo(n,e,e.type,e.pendingProps,t);case 7:return Dn(n,e,e.pendingProps,t),e.child;case 8:return Dn(n,e,e.pendingProps.children,t),e.child;case 12:return Dn(n,e,e.pendingProps.children,t),e.child;case 10:return l=e.pendingProps,et(e,e.type,l.value),Dn(n,e,l.children,t),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Ut(e),a=Mn(a),l=l(a),e.flags|=1,Dn(n,e,l,t),e.child;case 14:return qo(n,e,e.type,e.pendingProps,t);case 15:return wo(n,e,e.type,e.pendingProps,t);case 19:return Ko(n,e,t);case 31:return sh(n,e,t);case 22:return Yo(n,e,t,e.pendingProps);case 24:return Ut(e),l=Mn(gn),n===null?(a=Ri(),a===null&&(a=en,r=Yi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=t),a=r),e.memoizedState={parent:l,cache:a},Xi(e),et(e,gn,a)):((n.lanes&t)!==0&&(Li(n,e),Il(e,null,null,t),$l()),a=n.memoizedState,r=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),et(e,gn,l)):(l=r.cache,et(e,gn,l),l!==a.cache&&wi(e,[gn],t,!0))),Dn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Re(n){n.flags|=4}function Tu(n,e,t,l,a){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(xf())n.flags|=8192;else throw Bt=$a,Gi}else n.flags&=-16777217}function Jo(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!om(e))if(xf())n.flags|=8192;else throw Bt=$a,Gi}function hr(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?jc():536870912,n.lanes|=e,bl|=e)}function aa(n,e){if(!X)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function un(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function fh(n,e,t){var l=e.pendingProps;switch(Ui(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return un(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),qe(gn),Lt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(il(e)?Re(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci())),un(e),null;case 26:var a=e.type,r=e.memoizedState;return n===null?(Re(e),r!==null?(un(e),Jo(e,r)):(un(e),Tu(e,a,null,l,t))):r?r!==n.memoizedState?(Re(e),un(e),Jo(e,r)):(un(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Re(e),un(e),Tu(e,a,n,l,t)),null;case 27:if(Aa(e),t=Je.current,a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Re(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return un(e),null}n=Tn.current,il(e)?js(e):(n=tm(a,l,t),e.stateNode=n,Re(e))}return un(e),null;case 5:if(Aa(e),a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Re(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return un(e),null}if(r=Tn.current,il(e))js(e);else{var i=Mr(Je.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}r[En]=e,r[Qn]=l;n:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break n;for(;i.sibling===null;){if(i.return===null||i.return===e)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=r;n:switch(On(r,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Re(e)}}return un(e),Tu(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Re(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(m(166));if(n=Je.current,il(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,a=Nn,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}n[En]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Zf(n.nodeValue,t)),n||nt(e,!0)}else n=Mr(n).createTextNode(l),n[En]=e,e.stateNode=n}return un(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=il(e),t!==null){if(n===null){if(!l)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(557));n[En]=e}else Dt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;un(e),n=!1}else t=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(te(e),e):(te(e),null);if((e.flags&128)!==0)throw Error(m(558))}return un(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=il(e),l!==null&&l.dehydrated!==null){if(n===null){if(!a)throw Error(m(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[En]=e}else Dt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;un(e),a=!1}else a=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(te(e),e):(te(e),null)}return te(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),hr(e,e.updateQueue),un(e),null);case 4:return Lt(),n===null&&Ku(e.stateNode.containerInfo),un(e),null;case 10:return qe(e.type),un(e),null;case 19:if(on(yn),l=e.memoizedState,l===null)return un(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)aa(l,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(r=er(n),r!==null){for(e.flags|=128,aa(l,!1),n=r.updateQueue,e.updateQueue=n,hr(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)xs(t,n),t=t.sibling;return J(yn,yn.current&1|2),X&&Ce(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&Fn()>br&&(e.flags|=128,a=!0,aa(l,!1),e.lanes=4194304)}else{if(!a)if(n=er(r),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,hr(e,n),aa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!X)return un(e),null}else 2*Fn()-l.renderingStartTime>br&&t!==536870912&&(e.flags|=128,a=!0,aa(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Fn(),n.sibling=null,t=yn.current,J(yn,a?t&1|2:t&1),X&&Ce(e,l.treeForkCount),n):(un(e),null);case 22:case 23:return te(e),ki(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),t=e.updateQueue,t!==null&&hr(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&on(Ht),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),qe(gn),un(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function mh(n,e){switch(Ui(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return qe(gn),Lt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Aa(e),null;case 31:if(e.memoizedState!==null){if(te(e),e.alternate===null)throw Error(m(340));Dt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(te(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Dt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return on(yn),null;case 4:return Lt(),null;case 10:return qe(e.type),null;case 22:case 23:return te(e),ki(),n!==null&&on(Ht),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return qe(gn),null;case 25:return null;default:return null}}function Wo(n,e){switch(Ui(e),e.tag){case 3:qe(gn),Lt();break;case 26:case 27:case 5:Aa(e);break;case 4:Lt();break;case 31:e.memoizedState!==null&&te(e);break;case 13:te(e);break;case 19:on(yn);break;case 10:qe(e.type);break;case 22:case 23:te(e),ki(),n!==null&&on(Ht);break;case 24:qe(gn)}}function ra(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var a=l.next;t=a;do{if((t.tag&n)===n){l=void 0;var r=t.create,i=t.inst;l=r(),i.destroy=l}t=t.next}while(t!==a)}}catch(u){$(e,e.return,u)}}function ut(n,e,t){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&n)===n){var i=l.inst,u=i.destroy;if(u!==void 0){i.destroy=void 0,a=e;var s=t,h=u;try{h()}catch(v){$(a,s,v)}}}l=l.next}while(l!==r)}}catch(v){$(e,e.return,v)}}function Fo(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Qs(e,t)}catch(l){$(n,n.return,l)}}}function $o(n,e,t){t.props=Yt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){$(n,e,l)}}function ia(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(a){$(n,e,a)}}function je(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(a){$(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){$(n,e,a)}else t.current=null}function Io(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(a){$(n,n.return,a)}}function Au(n,e,t){try{var l=n.stateNode;Ch(l,n.type,t,e),l[Qn]=e}catch(a){$(n,n.return,a)}}function Po(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ht(n.type)||n.tag===4}function ju(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Po(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ht(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eu(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Oe));else if(l!==4&&(l===27&&ht(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Eu(n,e,t),n=n.sibling;n!==null;)Eu(n,e,t),n=n.sibling}function yr(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(l!==4&&(l===27&&ht(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(yr(n,e,t),n=n.sibling;n!==null;)yr(n,e,t),n=n.sibling}function nf(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);On(e,l,t),e[En]=n,e[Qn]=t}catch(r){$(n,n.return,r)}}var Ge=!1,_n=!1,Nu=!1,ef=typeof WeakSet=="function"?WeakSet:Set,jn=null;function dh(n,e){if(n=n.containerInfo,Wu=qr,n=ms(n),xi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break n}var i=0,u=-1,s=-1,h=0,v=0,x=n,y=null;e:for(;;){for(var g;x!==t||a!==0&&x.nodeType!==3||(u=i+a),x!==r||l!==0&&x.nodeType!==3||(s=i+l),x.nodeType===3&&(i+=x.nodeValue.length),(g=x.firstChild)!==null;)y=x,x=g;for(;;){if(x===n)break e;if(y===t&&++h===a&&(u=i),y===r&&++v===l&&(s=i),(g=x.nextSibling)!==null)break;x=y,y=x.parentNode}x=g}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fu={focusedElem:n,selectionRange:t},qr=!1,jn=e;jn!==null;)if(e=jn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,jn=n;else for(;jn!==null;){switch(e=jn,r=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)a=n[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&r!==null){n=void 0,t=e,a=r.memoizedProps,r=r.memoizedState,l=t.stateNode;try{var E=Yt(t.type,a);n=l.getSnapshotBeforeUpdate(E,r),l.__reactInternalSnapshotBeforeUpdate=n}catch(U){$(t,t.return,U)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Pu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Pu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(m(163))}if(n=e.sibling,n!==null){n.return=e.return,jn=n;break}jn=e.return}}function tf(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Le(n,t),l&4&&ra(5,t);break;case 1:if(Le(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(i){$(t,t.return,i)}else{var a=Yt(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){$(t,t.return,i)}}l&64&&Fo(t),l&512&&ia(t,t.return);break;case 3:if(Le(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Qs(n,e)}catch(i){$(t,t.return,i)}}break;case 27:e===null&&l&4&&nf(t);case 26:case 5:Le(n,t),e===null&&l&4&&Io(t),l&512&&ia(t,t.return);break;case 12:Le(n,t);break;case 31:Le(n,t),l&4&&rf(n,t);break;case 13:Le(n,t),l&4&&uf(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Sh.bind(null,t),Xh(n,t))));break;case 22:if(l=t.memoizedState!==null||Ge,!l){e=e!==null&&e.memoizedState!==null||_n,a=Ge;var r=_n;Ge=l,(_n=e)&&!r?Ve(n,t,(t.subtreeFlags&8772)!==0):Le(n,t),Ge=a,_n=r}break;case 30:break;default:Le(n,t)}}function lf(n){var e=n.alternate;e!==null&&(n.alternate=null,lf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&ai(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var cn=null,Gn=!1;function Xe(n,e,t){for(t=t.child;t!==null;)af(n,e,t),t=t.sibling}function af(n,e,t){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Dl,t)}catch{}switch(t.tag){case 26:_n||je(t,e),Xe(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:_n||je(t,e);var l=cn,a=Gn;ht(t.type)&&(cn=t.stateNode,Gn=!1),Xe(n,e,t),ya(t.stateNode),cn=l,Gn=a;break;case 5:_n||je(t,e);case 6:if(l=cn,a=Gn,cn=null,Xe(n,e,t),cn=l,Gn=a,cn!==null)if(Gn)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(t.stateNode)}catch(r){$(t,e,r)}else try{cn.removeChild(t.stateNode)}catch(r){$(t,e,r)}break;case 18:cn!==null&&(Gn?(n=cn,$f(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),El(n)):$f(cn,t.stateNode));break;case 4:l=cn,a=Gn,cn=t.stateNode.containerInfo,Gn=!0,Xe(n,e,t),cn=l,Gn=a;break;case 0:case 11:case 14:case 15:ut(2,t,e),_n||ut(4,t,e),Xe(n,e,t);break;case 1:_n||(je(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&$o(t,e,l)),Xe(n,e,t);break;case 21:Xe(n,e,t);break;case 22:_n=(l=_n)||t.memoizedState!==null,Xe(n,e,t),_n=l;break;default:Xe(n,e,t)}}function rf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{El(n)}catch(t){$(e,e.return,t)}}}function uf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{El(n)}catch(t){$(e,e.return,t)}}function hh(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new ef),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new ef),e;default:throw Error(m(435,n.tag))}}function pr(n,e){var t=hh(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var a=zh.bind(null,n,l);l.then(a,a)}})}function Xn(n,e){var t=e.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l],r=n,i=e,u=i;n:for(;u!==null;){switch(u.tag){case 27:if(ht(u.type)){cn=u.stateNode,Gn=!1;break n}break;case 5:cn=u.stateNode,Gn=!1;break n;case 3:case 4:cn=u.stateNode.containerInfo,Gn=!0;break n}u=u.return}if(cn===null)throw Error(m(160));af(r,i,a),cn=null,Gn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)cf(e,n),e=e.sibling}var _e=null;function cf(n,e){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Xn(e,n),Ln(n),l&4&&(ut(3,n,n.return),ra(3,n),ut(5,n,n.return));break;case 1:Xn(e,n),Ln(n),l&512&&(_n||t===null||je(t,t.return)),l&64&&Ge&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var a=_e;if(Xn(e,n),Ln(n),l&512&&(_n||t===null||je(t,t.return)),l&4){var r=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Hl]||r[En]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),On(r,l,t),r[En]=n,An(r),l=r;break n;case"link":var i=cm("link","href",a).get(l+(t.href||""));if(i){for(var u=0;u<i.length;u++)if(r=i[u],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(u,1);break e}}r=a.createElement(l),On(r,l,t),a.head.appendChild(r);break;case"meta":if(i=cm("meta","content",a).get(l+(t.content||""))){for(u=0;u<i.length;u++)if(r=i[u],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(u,1);break e}}r=a.createElement(l),On(r,l,t),a.head.appendChild(r);break;default:throw Error(m(468,l))}r[En]=n,An(r),l=r}n.stateNode=l}else sm(a,n.type,n.stateNode);else n.stateNode=um(a,l,n.memoizedProps);else r!==l?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,l===null?sm(a,n.type,n.stateNode):um(a,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Au(n,n.memoizedProps,t.memoizedProps)}break;case 27:Xn(e,n),Ln(n),l&512&&(_n||t===null||je(t,t.return)),t!==null&&l&4&&Au(n,n.memoizedProps,t.memoizedProps);break;case 5:if(Xn(e,n),Ln(n),l&512&&(_n||t===null||je(t,t.return)),n.flags&32){a=n.stateNode;try{Ft(a,"")}catch(E){$(n,n.return,E)}}l&4&&n.stateNode!=null&&(a=n.memoizedProps,Au(n,a,t!==null?t.memoizedProps:a)),l&1024&&(Nu=!0);break;case 6:if(Xn(e,n),Ln(n),l&4){if(n.stateNode===null)throw Error(m(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(E){$(n,n.return,E)}}break;case 3:if(Ur=null,a=_e,_e=Dr(e.containerInfo),Xn(e,n),_e=a,Ln(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(E){$(n,n.return,E)}Nu&&(Nu=!1,sf(n));break;case 4:l=_e,_e=Dr(n.stateNode.containerInfo),Xn(e,n),Ln(n),_e=l;break;case 12:Xn(e,n),Ln(n);break;case 31:Xn(e,n),Ln(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,pr(n,l)));break;case 13:Xn(e,n),Ln(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(vr=Fn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,pr(n,l)));break;case 22:a=n.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,h=Ge,v=_n;if(Ge=h||a,_n=v||s,Xn(e,n),_n=v,Ge=h,Ln(n),l&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(t===null||s||Ge||_n||Qt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){s=t=e;try{if(r=s.stateNode,a)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=s.stateNode;var x=s.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(E){$(s,s.return,E)}}}else if(e.tag===6){if(t===null){s=e;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(E){$(s,s.return,E)}}}else if(e.tag===18){if(t===null){s=e;try{var g=s.stateNode;a?If(g,!0):If(s.stateNode,!1)}catch(E){$(s,s.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,pr(n,t))));break;case 19:Xn(e,n),Ln(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,pr(n,l)));break;case 30:break;case 21:break;default:Xn(e,n),Ln(n)}}function Ln(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(Po(l)){t=l;break}l=l.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var a=t.stateNode,r=ju(n);yr(n,r,a);break;case 5:var i=t.stateNode;t.flags&32&&(Ft(i,""),t.flags&=-33);var u=ju(n);yr(n,u,i);break;case 3:case 4:var s=t.stateNode.containerInfo,h=ju(n);Eu(n,h,s);break;default:throw Error(m(161))}}catch(v){$(n,n.return,v)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function sf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;sf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Le(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tf(n,e.alternate,e),e=e.sibling}function Qt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:ut(4,e,e.return),Qt(e);break;case 1:je(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&$o(e,e.return,t),Qt(e);break;case 27:ya(e.stateNode);case 26:case 5:je(e,e.return),Qt(e);break;case 22:e.memoizedState===null&&Qt(e);break;case 30:Qt(e);break;default:Qt(e)}n=n.sibling}}function Ve(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=n,r=e,i=r.flags;switch(r.tag){case 0:case 11:case 15:Ve(a,r,t),ra(4,r);break;case 1:if(Ve(a,r,t),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){$(l,l.return,h)}if(l=r,a=l.updateQueue,a!==null){var u=l.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Ys(s[a],u)}catch(h){$(l,l.return,h)}}t&&i&64&&Fo(r),ia(r,r.return);break;case 27:nf(r);case 26:case 5:Ve(a,r,t),t&&l===null&&i&4&&Io(r),ia(r,r.return);break;case 12:Ve(a,r,t);break;case 31:Ve(a,r,t),t&&i&4&&rf(a,r);break;case 13:Ve(a,r,t),t&&i&4&&uf(a,r);break;case 22:r.memoizedState===null&&Ve(a,r,t),ia(r,r.return);break;case 30:break;default:Ve(a,r,t)}e=e.sibling}}function Mu(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Kl(t))}function Du(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kl(n))}function xe(n,e,t,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)of(n,e,t,l),e=e.sibling}function of(n,e,t,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:xe(n,e,t,l),a&2048&&ra(9,e);break;case 1:xe(n,e,t,l);break;case 3:xe(n,e,t,l),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kl(n)));break;case 12:if(a&2048){xe(n,e,t,l),n=e.stateNode;try{var r=e.memoizedProps,i=r.id,u=r.onPostCommit;typeof u=="function"&&u(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(s){$(e,e.return,s)}}else xe(n,e,t,l);break;case 31:xe(n,e,t,l);break;case 13:xe(n,e,t,l);break;case 23:break;case 22:r=e.stateNode,i=e.alternate,e.memoizedState!==null?r._visibility&2?xe(n,e,t,l):ua(n,e):r._visibility&2?xe(n,e,t,l):(r._visibility|=2,pl(n,e,t,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Mu(i,e);break;case 24:xe(n,e,t,l),a&2048&&Du(e.alternate,e);break;default:xe(n,e,t,l)}}function pl(n,e,t,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=n,i=e,u=t,s=l,h=i.flags;switch(i.tag){case 0:case 11:case 15:pl(r,i,u,s,a),ra(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?pl(r,i,u,s,a):ua(r,i):(v._visibility|=2,pl(r,i,u,s,a)),a&&h&2048&&Mu(i.alternate,i);break;case 24:pl(r,i,u,s,a),a&&h&2048&&Du(i.alternate,i);break;default:pl(r,i,u,s,a)}e=e.sibling}}function ua(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,a=l.flags;switch(l.tag){case 22:ua(t,l),a&2048&&Mu(l.alternate,l);break;case 24:ua(t,l),a&2048&&Du(l.alternate,l);break;default:ua(t,l)}e=e.sibling}}var ca=8192;function gl(n,e,t){if(n.subtreeFlags&ca)for(n=n.child;n!==null;)ff(n,e,t),n=n.sibling}function ff(n,e,t){switch(n.tag){case 26:gl(n,e,t),n.flags&ca&&n.memoizedState!==null&&ny(t,_e,n.memoizedState,n.memoizedProps);break;case 5:gl(n,e,t);break;case 3:case 4:var l=_e;_e=Dr(n.stateNode.containerInfo),gl(n,e,t),_e=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=ca,ca=16777216,gl(n,e,t),ca=l):gl(n,e,t));break;default:gl(n,e,t)}}function mf(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function sa(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];jn=l,hf(l,n)}mf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)df(n),n=n.sibling}function df(n){switch(n.tag){case 0:case 11:case 15:sa(n),n.flags&2048&&ut(9,n,n.return);break;case 3:sa(n);break;case 12:sa(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,gr(n)):sa(n);break;default:sa(n)}}function gr(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];jn=l,hf(l,n)}mf(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:ut(8,e,e.return),gr(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,gr(e));break;default:gr(e)}n=n.sibling}}function hf(n,e){for(;jn!==null;){var t=jn;switch(t.tag){case 0:case 11:case 15:ut(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,jn=l;else n:for(t=n;jn!==null;){l=jn;var a=l.sibling,r=l.return;if(lf(l),l===t){jn=null;break n}if(a!==null){a.return=r,jn=a;break n}jn=r}}}var yh={getCacheForType:function(n){var e=Mn(gn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Mn(gn).controller.signal}},ph=typeof WeakMap=="function"?WeakMap:Map,k=0,en=null,Y=null,R=0,F=0,le=null,ct=!1,vl=!1,Ou=!1,Ze=0,hn=0,st=0,Rt=0,Uu=0,ae=0,bl=0,oa=null,Vn=null,Hu=!1,vr=0,yf=0,br=1/0,_r=null,ot=null,Sn=0,ft=null,_l=null,Ke=0,Cu=0,Bu=null,pf=null,fa=0,qu=null;function re(){return(k&2)!==0&&R!==0?R&-R:_.T!==null?Xu():Dc()}function gf(){if(ae===0)if((R&536870912)===0||X){var n=Na;Na<<=1,(Na&3932160)===0&&(Na=262144),ae=n}else ae=536870912;return n=ee.current,n!==null&&(n.flags|=32),ae}function Zn(n,e,t){(n===en&&(F===2||F===9)||n.cancelPendingCommit!==null)&&(xl(n,0),mt(n,R,ae,!1)),Ul(n,t),((k&2)===0||n!==en)&&(n===en&&((k&2)===0&&(Rt|=t),hn===4&&mt(n,R,ae,!1)),Ee(n))}function vf(n,e,t){if((k&6)!==0)throw Error(m(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Ol(n,e),a=l?bh(n,e):Yu(n,e,!0),r=l;do{if(a===0){vl&&!l&&mt(n,e,0,!1);break}else{if(t=n.current.alternate,r&&!gh(t)){a=Yu(n,e,!1),r=!1;continue}if(a===2){if(r=e,n.errorRecoveryDisabledLanes&r)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var u=n;a=oa;var s=u.current.memoizedState.isDehydrated;if(s&&(xl(u,i).flags|=256),i=Yu(u,i,!1),i!==2){if(Ou&&!s){u.errorRecoveryDisabledLanes|=r,Rt|=r,a=4;break n}r=Vn,Vn=a,r!==null&&(Vn===null?Vn=r:Vn.push.apply(Vn,r))}a=i}if(r=!1,a!==2)continue}}if(a===1){xl(n,0),mt(n,e,0,!0);break}n:{switch(l=n,r=a,r){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:mt(l,e,ae,!ct);break n;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(a=vr+300-Fn(),10<a)){if(mt(l,e,ae,!ct),Da(l,0,!0)!==0)break n;Ke=e,l.timeoutHandle=Wf(bf.bind(null,l,t,Vn,_r,Hu,e,ae,Rt,bl,ct,r,"Throttled",-0,0),a);break n}bf(l,t,Vn,_r,Hu,e,ae,Rt,bl,ct,r,null,-0,0)}}break}while(!0);Ee(n)}function bf(n,e,t,l,a,r,i,u,s,h,v,x,y,g){if(n.timeoutHandle=-1,x=e.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oe},ff(e,r,x);var E=(r&62914560)===r?vr-Fn():(r&4194048)===r?yf-Fn():0;if(E=ey(x,E),E!==null){Ke=r,n.cancelPendingCommit=E(Ef.bind(null,n,e,r,t,l,a,i,u,s,v,x,null,y,g)),mt(n,r,i,!h);return}}Ef(n,e,r,t,l,a,i,u,s)}function gh(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var a=t[l],r=a.getSnapshot;a=a.value;try{if(!Pn(r(),a))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mt(n,e,t,l){e&=~Uu,e&=~Rt,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var a=e;0<a;){var r=31-In(a),i=1<<r;l[r]=-1,a&=~i}t!==0&&Ec(n,t,e)}function xr(){return(k&6)===0?(ma(0),!1):!0}function wu(){if(Y!==null){if(F===0)var n=Y.return;else n=Y,Be=Ot=null,Pi(n),fl=null,Jl=0,n=Y;for(;n!==null;)Wo(n.alternate,n),n=n.return;Y=null}}function xl(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,wh(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Ke=0,wu(),en=n,Y=t=He(n.current,null),R=e,F=0,le=null,ct=!1,vl=Ol(n,e),Ou=!1,bl=ae=Uu=Rt=st=hn=0,Vn=oa=null,Hu=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var a=31-In(l),r=1<<a;e|=n[a],l&=~r}return Ze=e,Xa(),t}function _f(n,e){B=null,_.H=ta,e===ol||e===Fa?(e=Cs(),F=3):e===Gi?(e=Cs(),F=4):F=e===yu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,le=e,Y===null&&(hn=1,or(n,me(e,n.current)))}function xf(){var n=ee.current;return n===null?!0:(R&4194048)===R?pe===null:(R&62914560)===R||(R&536870912)!==0?n===pe:!1}function Sf(){var n=_.H;return _.H=ta,n===null?ta:n}function zf(){var n=_.A;return _.A=yh,n}function Sr(){hn=4,ct||(R&4194048)!==R&&ee.current!==null||(vl=!0),(st&134217727)===0&&(Rt&134217727)===0||en===null||mt(en,R,ae,!1)}function Yu(n,e,t){var l=k;k|=2;var a=Sf(),r=zf();(en!==n||R!==e)&&(_r=null,xl(n,e)),e=!1;var i=hn;n:do try{if(F!==0&&Y!==null){var u=Y,s=le;switch(F){case 8:wu(),i=6;break n;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var h=F;if(F=0,le=null,Sl(n,u,s,h),t&&vl){i=0;break n}break;default:h=F,F=0,le=null,Sl(n,u,s,h)}}vh(),i=hn;break}catch(v){_f(n,v)}while(!0);return e&&n.shellSuspendCounter++,Be=Ot=null,k=l,_.H=a,_.A=r,Y===null&&(en=null,R=0,Xa()),i}function vh(){for(;Y!==null;)Tf(Y)}function bh(n,e){var t=k;k|=2;var l=Sf(),a=zf();en!==n||R!==e?(_r=null,br=Fn()+500,xl(n,e)):vl=Ol(n,e);n:do try{if(F!==0&&Y!==null){e=Y;var r=le;e:switch(F){case 1:F=0,le=null,Sl(n,e,r,1);break;case 2:case 9:if(Us(r)){F=0,le=null,Af(e);break}e=function(){F!==2&&F!==9||en!==n||(F=7),Ee(n)},r.then(e,e);break n;case 3:F=7;break n;case 4:F=5;break n;case 7:Us(r)?(F=0,le=null,Af(e)):(F=0,le=null,Sl(n,e,r,7));break;case 5:var i=null;switch(Y.tag){case 26:i=Y.memoizedState;case 5:case 27:var u=Y;if(i?om(i):u.stateNode.complete){F=0,le=null;var s=u.sibling;if(s!==null)Y=s;else{var h=u.return;h!==null?(Y=h,zr(h)):Y=null}break e}}F=0,le=null,Sl(n,e,r,5);break;case 6:F=0,le=null,Sl(n,e,r,6);break;case 8:wu(),hn=6;break n;default:throw Error(m(462))}}_h();break}catch(v){_f(n,v)}while(!0);return Be=Ot=null,_.H=l,_.A=a,k=t,Y!==null?0:(en=null,R=0,Xa(),hn)}function _h(){for(;Y!==null&&!Lm();)Tf(Y)}function Tf(n){var e=ko(n.alternate,n,Ze);n.memoizedProps=n.pendingProps,e===null?zr(n):Y=e}function Af(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Go(t,e,e.pendingProps,e.type,void 0,R);break;case 11:e=Go(t,e,e.pendingProps,e.type.render,e.ref,R);break;case 5:Pi(e);default:Wo(t,e),e=Y=xs(e,Ze),e=ko(t,e,Ze)}n.memoizedProps=n.pendingProps,e===null?zr(n):Y=e}function Sl(n,e,t,l){Be=Ot=null,Pi(e),fl=null,Jl=0;var a=e.return;try{if(ch(n,a,e,t,R)){hn=1,or(n,me(t,n.current)),Y=null;return}}catch(r){if(a!==null)throw Y=a,r;hn=1,or(n,me(t,n.current)),Y=null;return}e.flags&32768?(X||l===1?n=!0:vl||(R&536870912)!==0?n=!1:(ct=n=!0,(l===2||l===9||l===3||l===6)&&(l=ee.current,l!==null&&l.tag===13&&(l.flags|=16384))),jf(e,n)):zr(e)}function zr(n){var e=n;do{if((e.flags&32768)!==0){jf(e,ct);return}n=e.return;var t=fh(e.alternate,e,Ze);if(t!==null){Y=t;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=n}while(e!==null);hn===0&&(hn=5)}function jf(n,e){do{var t=mh(n.alternate,n);if(t!==null){t.flags&=32767,Y=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Y=n;return}Y=n=t}while(n!==null);hn=6,Y=null}function Ef(n,e,t,l,a,r,i,u,s){n.cancelPendingCommit=null;do Tr();while(Sn!==0);if((k&6)!==0)throw Error(m(327));if(e!==null){if(e===n.current)throw Error(m(177));if(r=e.lanes|e.childLanes,r|=ji,Pm(n,t,r,i,u,s),n===en&&(Y=en=null,R=0),_l=e,ft=n,Ke=t,Cu=r,Bu=a,pf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Th(ja,function(){return Uf(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,a=j.p,j.p=2,i=k,k|=4;try{dh(n,e,t)}finally{k=i,j.p=a,_.T=l}}Sn=1,Nf(),Mf(),Df()}}function Nf(){if(Sn===1){Sn=0;var n=ft,e=_l,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=_.T,_.T=null;var l=j.p;j.p=2;var a=k;k|=4;try{cf(e,n);var r=Fu,i=ms(n.containerInfo),u=r.focusedElem,s=r.selectionRange;if(i!==u&&u&&u.ownerDocument&&fs(u.ownerDocument.documentElement,u)){if(s!==null&&xi(u)){var h=s.start,v=s.end;if(v===void 0&&(v=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(v,u.value.length);else{var x=u.ownerDocument||document,y=x&&x.defaultView||window;if(y.getSelection){var g=y.getSelection(),E=u.textContent.length,U=Math.min(s.start,E),nn=s.end===void 0?U:Math.min(s.end,E);!g.extend&&U>nn&&(i=nn,nn=U,U=i);var f=os(u,U),o=os(u,nn);if(f&&o&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var d=x.createRange();d.setStart(f.node,f.offset),g.removeAllRanges(),U>nn?(g.addRange(d),g.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),g.addRange(d))}}}}for(x=[],g=u;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<x.length;u++){var b=x[u];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}qr=!!Wu,Fu=Wu=null}finally{k=a,j.p=l,_.T=t}}n.current=e,Sn=2}}function Mf(){if(Sn===2){Sn=0;var n=ft,e=_l,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=_.T,_.T=null;var l=j.p;j.p=2;var a=k;k|=4;try{tf(n,e.alternate,e)}finally{k=a,j.p=l,_.T=t}}Sn=3}}function Df(){if(Sn===4||Sn===3){Sn=0,Vm();var n=ft,e=_l,t=Ke,l=pf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Sn=5:(Sn=0,_l=ft=null,Of(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(ot=null),ti(t),e=e.stateNode,$n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=_.T,a=j.p,j.p=2,_.T=null;try{for(var r=n.onRecoverableError,i=0;i<l.length;i++){var u=l[i];r(u.value,{componentStack:u.stack})}}finally{_.T=e,j.p=a}}(Ke&3)!==0&&Tr(),Ee(n),a=n.pendingLanes,(t&261930)!==0&&(a&42)!==0?n===qu?fa++:(fa=0,qu=n):fa=0,ma(0)}}function Of(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Kl(e)))}function Tr(){return Nf(),Mf(),Df(),Uf()}function Uf(){if(Sn!==5)return!1;var n=ft,e=Cu;Cu=0;var t=ti(Ke),l=_.T,a=j.p;try{j.p=32>t?32:t,_.T=null,t=Bu,Bu=null;var r=ft,i=Ke;if(Sn=0,_l=ft=null,Ke=0,(k&6)!==0)throw Error(m(331));var u=k;if(k|=4,df(r.current),of(r,r.current,i,t),k=u,ma(0,!1),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Dl,r)}catch{}return!0}finally{j.p=a,_.T=l,Of(n,e)}}function Hf(n,e,t){e=me(t,e),e=hu(n.stateNode,e,2),n=at(n,e,2),n!==null&&(Ul(n,2),Ee(n))}function $(n,e,t){if(n.tag===3)Hf(n,n,t);else for(;e!==null;){if(e.tag===3){Hf(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ot===null||!ot.has(l))){n=me(t,n),t=Ho(2),l=at(e,t,2),l!==null&&(Co(t,l,e,n),Ul(l,2),Ee(l));break}}e=e.return}}function Qu(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new ph;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(t)||(Ou=!0,a.add(t),n=xh.bind(null,n,e,t),e.then(n,n))}function xh(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,en===n&&(R&t)===t&&(hn===4||hn===3&&(R&62914560)===R&&300>Fn()-vr?(k&2)===0&&xl(n,0):Uu|=t,bl===R&&(bl=0)),Ee(n)}function Cf(n,e){e===0&&(e=jc()),n=Nt(n,e),n!==null&&(Ul(n,e),Ee(n))}function Sh(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Cf(n,t)}function zh(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(e),Cf(n,t)}function Th(n,e){return Ir(n,e)}var Ar=null,zl=null,Ru=!1,jr=!1,Gu=!1,dt=0;function Ee(n){n!==zl&&n.next===null&&(zl===null?Ar=zl=n:zl=zl.next=n),jr=!0,Ru||(Ru=!0,jh())}function ma(n,e){if(!Gu&&jr){Gu=!0;do for(var t=!1,l=Ar;l!==null;){if(n!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var i=l.suspendedLanes,u=l.pingedLanes;r=(1<<31-In(42|n)+1)-1,r&=a&~(i&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Yf(l,r))}else r=R,r=Da(l,l===en?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Ol(l,r)||(t=!0,Yf(l,r));l=l.next}while(t);Gu=!1}}function Ah(){Bf()}function Bf(){jr=Ru=!1;var n=0;dt!==0&&qh()&&(n=dt);for(var e=Fn(),t=null,l=Ar;l!==null;){var a=l.next,r=qf(l,e);r===0?(l.next=null,t===null?Ar=a:t.next=a,a===null&&(zl=t)):(t=l,(n!==0||(r&3)!==0)&&(jr=!0)),l=a}Sn!==0&&Sn!==5||ma(n),dt!==0&&(dt=0)}function qf(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,a=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var i=31-In(r),u=1<<i,s=a[i];s===-1?((u&t)===0||(u&l)!==0)&&(a[i]=Im(u,e)):s<=e&&(n.expiredLanes|=u),r&=~u}if(e=en,t=R,t=Da(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(F===2||F===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Pr(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Ol(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&Pr(l),ti(t)){case 2:case 8:t=Tc;break;case 32:t=ja;break;case 268435456:t=Ac;break;default:t=ja}return l=wf.bind(null,n),t=Ir(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&Pr(l),n.callbackPriority=2,n.callbackNode=null,2}function wf(n,e){if(Sn!==0&&Sn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Tr()&&n.callbackNode!==t)return null;var l=R;return l=Da(n,n===en?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(vf(n,l,e),qf(n,Fn()),n.callbackNode!=null&&n.callbackNode===t?wf.bind(null,n):null)}function Yf(n,e){if(Tr())return null;vf(n,e,!0)}function jh(){Yh(function(){(k&6)!==0?Ir(zc,Ah):Bf()})}function Xu(){if(dt===0){var n=cl;n===0&&(n=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),dt=n}return dt}function Qf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ca(""+n)}function Rf(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function Eh(n,e,t,l,a){if(e==="submit"&&t&&t.stateNode===a){var r=Qf((a[Qn]||null).action),i=l.submitter;i&&(e=(e=i[Qn]||null)?Qf(e.formAction):i.getAttribute("formAction"),e!==null&&(r=e,i=null));var u=new Ya("action","action",null,l,a);n.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(dt!==0){var s=i?Rf(a,i):new FormData(a);cu(t,{pending:!0,data:s,method:a.method,action:r},null,s)}}else typeof r=="function"&&(u.preventDefault(),s=i?Rf(a,i):new FormData(a),cu(t,{pending:!0,data:s,method:a.method,action:r},r,s))},currentTarget:a}]})}}for(var Lu=0;Lu<Ai.length;Lu++){var Vu=Ai[Lu],Nh=Vu.toLowerCase(),Mh=Vu[0].toUpperCase()+Vu.slice(1);be(Nh,"on"+Mh)}be(ys,"onAnimationEnd"),be(ps,"onAnimationIteration"),be(gs,"onAnimationStart"),be("dblclick","onDoubleClick"),be("focusin","onFocus"),be("focusout","onBlur"),be(Zd,"onTransitionRun"),be(Kd,"onTransitionStart"),be(kd,"onTransitionCancel"),be(vs,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(da));function Gf(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],a=l.event;l=l.listeners;n:{var r=void 0;if(e)for(var i=l.length-1;0<=i;i--){var u=l[i],s=u.instance,h=u.currentTarget;if(u=u.listener,s!==r&&a.isPropagationStopped())break n;r=u,a.currentTarget=h;try{r(a)}catch(v){Ga(v)}a.currentTarget=null,r=s}else for(i=0;i<l.length;i++){if(u=l[i],s=u.instance,h=u.currentTarget,u=u.listener,s!==r&&a.isPropagationStopped())break n;r=u,a.currentTarget=h;try{r(a)}catch(v){Ga(v)}a.currentTarget=null,r=s}}}}function Q(n,e){var t=e[li];t===void 0&&(t=e[li]=new Set);var l=n+"__bubble";t.has(l)||(Xf(e,n,2,!1),t.add(l))}function Zu(n,e,t){var l=0;e&&(l|=4),Xf(t,n,l,e)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Ku(n){if(!n[Er]){n[Er]=!0,Hc.forEach(function(t){t!=="selectionchange"&&(Dh.has(t)||Zu(t,!1,n),Zu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Er]||(e[Er]=!0,Zu("selectionchange",!1,e))}}function Xf(n,e,t,l){switch(gm(e)){case 2:var a=ay;break;case 8:a=ry;break;default:a=uc}t=a.bind(null,e,t,n),a=void 0,!mi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function ku(n,e,t,l,a){var r=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var u=l.stateNode.containerInfo;if(u===a)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;u!==null;){if(i=Zt(u),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=r=i;continue n}u=u.parentNode}}l=l.return}Zc(function(){var h=r,v=oi(t),x=[];n:{var y=bs.get(n);if(y!==void 0){var g=Ya,E=n;switch(n){case"keypress":if(qa(t)===0)break n;case"keydown":case"keyup":g=zd;break;case"focusin":E="focus",g=pi;break;case"focusout":E="blur",g=pi;break;case"beforeblur":case"afterblur":g=pi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jd;break;case ys:case ps:case gs:g=hd;break;case vs:g=Nd;break;case"scroll":case"scrollend":g=sd;break;case"wheel":g=Dd;break;case"copy":case"cut":case"paste":g=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fc;break;case"toggle":case"beforetoggle":g=Ud}var U=(e&4)!==0,nn=!U&&(n==="scroll"||n==="scrollend"),f=U?y!==null?y+"Capture":null:y;U=[];for(var o=h,d;o!==null;){var b=o;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=Bl(o,f),b!=null&&U.push(ha(o,b,d))),nn)break;o=o.return}0<U.length&&(y=new g(y,E,null,t,v),x.push({event:y,listeners:U}))}}if((e&7)===0){n:{if(y=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",y&&t!==si&&(E=t.relatedTarget||t.fromElement)&&(Zt(E)||E[Vt]))break n;if((g||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,g?(E=t.relatedTarget||t.toElement,g=h,E=E?Zt(E):null,E!==null&&(nn=A(E),U=E.tag,E!==nn||U!==5&&U!==27&&U!==6)&&(E=null)):(g=null,E=h),g!==E)){if(U=Jc,b="onMouseLeave",f="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(U=Fc,b="onPointerLeave",f="onPointerEnter",o="pointer"),nn=g==null?y:Cl(g),d=E==null?y:Cl(E),y=new U(b,o+"leave",g,t,v),y.target=nn,y.relatedTarget=d,b=null,Zt(v)===h&&(U=new U(f,o+"enter",E,t,v),U.target=d,U.relatedTarget=nn,b=U),nn=b,g&&E)e:{for(U=Oh,f=g,o=E,d=0,b=f;b;b=U(b))d++;b=0;for(var O=o;O;O=U(O))b++;for(;0<d-b;)f=U(f),d--;for(;0<b-d;)o=U(o),b--;for(;d--;){if(f===o||o!==null&&f===o.alternate){U=f;break e}f=U(f),o=U(o)}U=null}else U=null;g!==null&&Lf(x,y,g,U,!1),E!==null&&nn!==null&&Lf(x,nn,E,U,!0)}}n:{if(y=h?Cl(h):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var V=as;else if(ts(y))if(rs)V=Xd;else{V=Rd;var M=Qd}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&ci(h.elementType)&&(V=as):V=Gd;if(V&&(V=V(n,h))){ls(x,V,t,v);break n}M&&M(n,y,h),n==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&ui(y,"number",y.value)}switch(M=h?Cl(h):window,n){case"focusin":(ts(M)||M.contentEditable==="true")&&(nl=M,Si=h,Ll=null);break;case"focusout":Ll=Si=nl=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,ds(x,t,v);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":ds(x,t,v)}var q;if(vi)n:{switch(n){case"compositionstart":var G="onCompositionStart";break n;case"compositionend":G="onCompositionEnd";break n;case"compositionupdate":G="onCompositionUpdate";break n}G=void 0}else Pt?ns(n,t)&&(G="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&($c&&t.locale!=="ko"&&(Pt||G!=="onCompositionStart"?G==="onCompositionEnd"&&Pt&&(q=Kc()):($e=v,di="value"in $e?$e.value:$e.textContent,Pt=!0)),M=Nr(h,G),0<M.length&&(G=new Wc(G,n,null,t,v),x.push({event:G,listeners:M}),q?G.data=q:(q=es(t),q!==null&&(G.data=q)))),(q=Cd?Bd(n,t):qd(n,t))&&(G=Nr(h,"onBeforeInput"),0<G.length&&(M=new Wc("onBeforeInput","beforeinput",null,t,v),x.push({event:M,listeners:G}),M.data=q)),Eh(x,n,h,t,v)}Gf(x,e)})}function ha(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Nr(n,e){for(var t=e+"Capture",l=[];n!==null;){var a=n,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Bl(n,t),a!=null&&l.unshift(ha(n,a,r)),a=Bl(n,e),a!=null&&l.push(ha(n,a,r))),n.tag===3)return l;n=n.return}return[]}function Oh(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Lf(n,e,t,l,a){for(var r=e._reactName,i=[];t!==null&&t!==l;){var u=t,s=u.alternate,h=u.stateNode;if(u=u.tag,s!==null&&s===l)break;u!==5&&u!==26&&u!==27||h===null||(s=h,a?(h=Bl(t,r),h!=null&&i.unshift(ha(t,h,s))):a||(h=Bl(t,r),h!=null&&i.push(ha(t,h,s)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var Uh=/\r\n?/g,Hh=/\u0000|\uFFFD/g;function Vf(n){return(typeof n=="string"?n:""+n).replace(Uh,`
`).replace(Hh,"")}function Zf(n,e){return e=Vf(e),Vf(n)===e}function P(n,e,t,l,a,r){switch(t){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Ft(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Ft(n,""+l);break;case"className":Ua(n,"class",l);break;case"tabIndex":Ua(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ua(n,t,l);break;case"style":Lc(n,l,r);break;case"data":if(e!=="object"){Ua(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ca(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(e!=="input"&&P(n,e,"name",a.name,a,null),P(n,e,"formEncType",a.formEncType,a,null),P(n,e,"formMethod",a.formMethod,a,null),P(n,e,"formTarget",a.formTarget,a,null)):(P(n,e,"encType",a.encType,a,null),P(n,e,"method",a.method,a,null),P(n,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ca(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Oe);break;case"onScroll":l!=null&&Q("scroll",n);break;case"onScrollEnd":l!=null&&Q("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(m(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=Ca(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":Q("beforetoggle",n),Q("toggle",n),Oa(n,"popover",l);break;case"xlinkActuate":De(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":De(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":De(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":De(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":De(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":De(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":De(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":De(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":De(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oa(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ud.get(t)||t,Oa(n,t,l))}}function Ju(n,e,t,l,a,r){switch(t){case"style":Lc(n,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(m(60));n.innerHTML=t}}break;case"children":typeof l=="string"?Ft(n,l):(typeof l=="number"||typeof l=="bigint")&&Ft(n,""+l);break;case"onScroll":l!=null&&Q("scroll",n);break;case"onScrollEnd":l!=null&&Q("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Oe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cc.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),e=t.slice(2,a?t.length-7:void 0),r=n[Qn]||null,r=r!=null?r[t]:null,typeof r=="function"&&n.removeEventListener(e,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,l,a);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):Oa(n,t,l)}}}function On(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",n),Q("load",n);var l=!1,a=!1,r;for(r in t)if(t.hasOwnProperty(r)){var i=t[r];if(i!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:P(n,e,r,i,t,null)}}a&&P(n,e,"srcSet",t.srcSet,t,null),l&&P(n,e,"src",t.src,t,null);return;case"input":Q("invalid",n);var u=r=i=a=null,s=null,h=null;for(l in t)if(t.hasOwnProperty(l)){var v=t[l];if(v!=null)switch(l){case"name":a=v;break;case"type":i=v;break;case"checked":s=v;break;case"defaultChecked":h=v;break;case"value":r=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,e));break;default:P(n,e,l,v,t,null)}}Qc(n,r,u,s,h,i,a,!1);return;case"select":Q("invalid",n),l=i=r=null;for(a in t)if(t.hasOwnProperty(a)&&(u=t[a],u!=null))switch(a){case"value":r=u;break;case"defaultValue":i=u;break;case"multiple":l=u;default:P(n,e,a,u,t,null)}e=r,t=i,n.multiple=!!l,e!=null?Wt(n,!!l,e,!1):t!=null&&Wt(n,!!l,t,!0);return;case"textarea":Q("invalid",n),r=a=l=null;for(i in t)if(t.hasOwnProperty(i)&&(u=t[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":a=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:P(n,e,i,u,t,null)}Gc(n,l,a,r);return;case"option":for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null)&&(s==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":P(n,e,s,l,t,null));return;case"dialog":Q("beforetoggle",n),Q("toggle",n),Q("cancel",n),Q("close",n);break;case"iframe":case"object":Q("load",n);break;case"video":case"audio":for(l=0;l<da.length;l++)Q(da[l],n);break;case"image":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"embed":case"source":case"link":Q("error",n),Q("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in t)if(t.hasOwnProperty(h)&&(l=t[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:P(n,e,h,l,t,null)}return;default:if(ci(e)){for(v in t)t.hasOwnProperty(v)&&(l=t[v],l!==void 0&&Ju(n,e,v,l,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(l=t[u],l!=null&&P(n,e,u,l,t,null))}function Ch(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,i=null,u=null,s=null,h=null,v=null;for(g in t){var x=t[g];if(t.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=x;default:l.hasOwnProperty(g)||P(n,e,g,null,l,x)}}for(var y in l){var g=l[y];if(x=t[y],l.hasOwnProperty(y)&&(g!=null||x!=null))switch(y){case"type":r=g;break;case"name":a=g;break;case"checked":h=g;break;case"defaultChecked":v=g;break;case"value":i=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,e));break;default:g!==x&&P(n,e,y,g,l,x)}}ii(n,i,u,s,h,v,r,a);return;case"select":g=i=u=y=null;for(r in t)if(s=t[r],t.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":g=s;default:l.hasOwnProperty(r)||P(n,e,r,null,l,s)}for(a in l)if(r=l[a],s=t[a],l.hasOwnProperty(a)&&(r!=null||s!=null))switch(a){case"value":y=r;break;case"defaultValue":u=r;break;case"multiple":i=r;default:r!==s&&P(n,e,a,r,l,s)}e=u,t=i,l=g,y!=null?Wt(n,!!t,y,!1):!!l!=!!t&&(e!=null?Wt(n,!!t,e,!0):Wt(n,!!t,t?[]:"",!1));return;case"textarea":g=y=null;for(u in t)if(a=t[u],t.hasOwnProperty(u)&&a!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:P(n,e,u,null,l,a)}for(i in l)if(a=l[i],r=t[i],l.hasOwnProperty(i)&&(a!=null||r!=null))switch(i){case"value":y=a;break;case"defaultValue":g=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(m(91));break;default:a!==r&&P(n,e,i,a,l,r)}Rc(n,y,g);return;case"option":for(var E in t)y=t[E],t.hasOwnProperty(E)&&y!=null&&!l.hasOwnProperty(E)&&(E==="selected"?n.selected=!1:P(n,e,E,null,l,y));for(s in l)y=l[s],g=t[s],l.hasOwnProperty(s)&&y!==g&&(y!=null||g!=null)&&(s==="selected"?n.selected=y&&typeof y!="function"&&typeof y!="symbol":P(n,e,s,y,l,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in t)y=t[U],t.hasOwnProperty(U)&&y!=null&&!l.hasOwnProperty(U)&&P(n,e,U,null,l,y);for(h in l)if(y=l[h],g=t[h],l.hasOwnProperty(h)&&y!==g&&(y!=null||g!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:P(n,e,h,y,l,g)}return;default:if(ci(e)){for(var nn in t)y=t[nn],t.hasOwnProperty(nn)&&y!==void 0&&!l.hasOwnProperty(nn)&&Ju(n,e,nn,void 0,l,y);for(v in l)y=l[v],g=t[v],!l.hasOwnProperty(v)||y===g||y===void 0&&g===void 0||Ju(n,e,v,y,l,g);return}}for(var f in t)y=t[f],t.hasOwnProperty(f)&&y!=null&&!l.hasOwnProperty(f)&&P(n,e,f,null,l,y);for(x in l)y=l[x],g=t[x],!l.hasOwnProperty(x)||y===g||y==null&&g==null||P(n,e,x,y,l,g)}function Kf(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bh(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var a=t[l],r=a.transferSize,i=a.initiatorType,u=a.duration;if(r&&u&&Kf(i)){for(i=0,u=a.responseEnd,l+=1;l<t.length;l++){var s=t[l],h=s.startTime;if(h>u)break;var v=s.transferSize,x=s.initiatorType;v&&Kf(x)&&(s=s.responseEnd,i+=v*(s<u?1:(u-h)/(s-h)))}if(--l,e+=8*(r+i)/(a.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wu=null,Fu=null;function Mr(n){return n.nodeType===9?n:n.ownerDocument}function kf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jf(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function $u(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=null;function qh(){var n=window.event;return n&&n.type==="popstate"?n===Iu?!1:(Iu=n,!0):(Iu=null,!1)}var Wf=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,Yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(n){return Ff.resolve(null).then(n).catch(Qh)}:Wf;function Qh(n){setTimeout(function(){throw n})}function ht(n){return n==="head"}function $f(n,e){var t=e,l=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(a),El(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")ya(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ya(t);for(var r=t.firstChild;r;){var i=r.nextSibling,u=r.nodeName;r[Hl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=i}}else t==="body"&&ya(n.ownerDocument.body);t=a}while(t);El(e)}function If(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function Pu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Pu(t),ai(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Rh(n,e,t,l){for(;n.nodeType===1;){var a=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Hl])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=ge(n.nextSibling),n===null)break}return null}function Gh(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=ge(n.nextSibling),n===null))return null;return n}function Pf(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ge(n.nextSibling),n===null))return null;return n}function nc(n){return n.data==="$?"||n.data==="$~"}function ec(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Xh(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ge(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var tc=null;function nm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return ge(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function em(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function tm(n,e,t){switch(e=Mr(t),n){case"html":if(n=e.documentElement,!n)throw Error(m(452));return n;case"head":if(n=e.head,!n)throw Error(m(453));return n;case"body":if(n=e.body,!n)throw Error(m(454));return n;default:throw Error(m(451))}}function ya(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);ai(n)}var ve=new Map,lm=new Set;function Dr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ke=j.d;j.d={f:Lh,r:Vh,D:Zh,C:Kh,L:kh,m:Jh,X:Fh,S:Wh,M:$h};function Lh(){var n=ke.f(),e=xr();return n||e}function Vh(n){var e=Kt(n);e!==null&&e.tag===5&&e.type==="form"?bo(e):ke.r(n)}var Tl=typeof document>"u"?null:document;function am(n,e,t){var l=Tl;if(l&&typeof e=="string"&&e){var a=oe(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),lm.has(a)||(lm.add(a),n={rel:n,crossOrigin:t,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),On(e,"link",n),An(e),l.head.appendChild(e)))}}function Zh(n){ke.D(n),am("dns-prefetch",n,null)}function Kh(n,e){ke.C(n,e),am("preconnect",n,e)}function kh(n,e,t){ke.L(n,e,t);var l=Tl;if(l&&n&&e){var a='link[rel="preload"][as="'+oe(e)+'"]';e==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+oe(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+oe(t.imageSizes)+'"]')):a+='[href="'+oe(n)+'"]';var r=a;switch(e){case"style":r=Al(n);break;case"script":r=jl(n)}ve.has(r)||(n=D({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),ve.set(r,n),l.querySelector(a)!==null||e==="style"&&l.querySelector(pa(r))||e==="script"&&l.querySelector(ga(r))||(e=l.createElement("link"),On(e,"link",n),An(e),l.head.appendChild(e)))}}function Jh(n,e){ke.m(n,e);var t=Tl;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+oe(l)+'"][href="'+oe(n)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=jl(n)}if(!ve.has(r)&&(n=D({rel:"modulepreload",href:n},e),ve.set(r,n),t.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ga(r)))return}l=t.createElement("link"),On(l,"link",n),An(l),t.head.appendChild(l)}}}function Wh(n,e,t){ke.S(n,e,t);var l=Tl;if(l&&n){var a=kt(l).hoistableStyles,r=Al(n);e=e||"default";var i=a.get(r);if(!i){var u={loading:0,preload:null};if(i=l.querySelector(pa(r)))u.loading=5;else{n=D({rel:"stylesheet",href:n,"data-precedence":e},t),(t=ve.get(r))&&lc(n,t);var s=i=l.createElement("link");An(s),On(s,"link",n),s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Or(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:u},a.set(r,i)}}}function Fh(n,e){ke.X(n,e);var t=Tl;if(t&&n){var l=kt(t).hoistableScripts,a=jl(n),r=l.get(a);r||(r=t.querySelector(ga(a)),r||(n=D({src:n,async:!0},e),(e=ve.get(a))&&ac(n,e),r=t.createElement("script"),An(r),On(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function $h(n,e){ke.M(n,e);var t=Tl;if(t&&n){var l=kt(t).hoistableScripts,a=jl(n),r=l.get(a);r||(r=t.querySelector(ga(a)),r||(n=D({src:n,async:!0,type:"module"},e),(e=ve.get(a))&&ac(n,e),r=t.createElement("script"),An(r),On(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function rm(n,e,t,l){var a=(a=Je.current)?Dr(a):null;if(!a)throw Error(m(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Al(t.href),t=kt(a).hoistableStyles,l=t.get(e),l||(l={type:"style",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Al(t.href);var r=kt(a).hoistableStyles,i=r.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,i),(r=a.querySelector(pa(n)))&&!r._p&&(i.instance=r,i.state.loading=5),ve.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ve.set(n,t),r||Ih(a,n,t,i.state))),e&&l===null)throw Error(m(528,""));return i}if(e&&l!==null)throw Error(m(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jl(t),t=kt(a).hoistableScripts,l=t.get(e),l||(l={type:"script",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,n))}}function Al(n){return'href="'+oe(n)+'"'}function pa(n){return'link[rel="stylesheet"]['+n+"]"}function im(n){return D({},n,{"data-precedence":n.precedence,precedence:null})}function Ih(n,e,t,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),On(e,"link",t),An(e),n.head.appendChild(e))}function jl(n){return'[src="'+oe(n)+'"]'}function ga(n){return"script[async]"+n}function um(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+oe(t.href)+'"]');if(l)return e.instance=l,An(l),l;var a=D({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),An(l),On(l,"style",a),Or(l,t.precedence,n),e.instance=l;case"stylesheet":a=Al(t.href);var r=n.querySelector(pa(a));if(r)return e.state.loading|=4,e.instance=r,An(r),r;l=im(t),(a=ve.get(a))&&lc(l,a),r=(n.ownerDocument||n).createElement("link"),An(r);var i=r;return i._p=new Promise(function(u,s){i.onload=u,i.onerror=s}),On(r,"link",l),e.state.loading|=4,Or(r,t.precedence,n),e.instance=r;case"script":return r=jl(t.src),(a=n.querySelector(ga(r)))?(e.instance=a,An(a),a):(l=t,(a=ve.get(r))&&(l=D({},t),ac(l,a)),n=n.ownerDocument||n,a=n.createElement("script"),An(a),On(a,"link",l),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Or(l,t.precedence,n));return e.instance}function Or(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,i=0;i<l.length;i++){var u=l[i];if(u.dataset.precedence===e)r=u;else if(r!==a)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function lc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function ac(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Ur=null;function cm(n,e,t){if(Ur===null){var l=new Map,a=Ur=new Map;a.set(t,l)}else a=Ur,l=a.get(t),l||(l=new Map,a.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),a=0;a<t.length;a++){var r=t[a];if(!(r[Hl]||r[En]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(e)||"";i=n+i;var u=l.get(i);u?u.push(r):l.set(i,[r])}}return l}function sm(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Ph(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function om(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function ny(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Al(l.href),r=e.querySelector(pa(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Hr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,An(r);return}r=e.ownerDocument||e,l=im(l),(a=ve.get(a))&&lc(l,a),r=r.createElement("link"),An(r);var i=r;i._p=new Promise(function(u,s){i.onload=u,i.onerror=s}),On(r,"link",l),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Hr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var rc=0;function ey(n,e){return n.stylesheets&&n.count===0&&Br(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&Br(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4+e);0<n.imgBytes&&rc===0&&(rc=62500*Bh());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Br(n,n.stylesheets),n.unsuspend)){var r=n.unsuspend;n.unsuspend=null,r()}},(n.imgBytes>rc?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Hr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Br(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Cr=null;function Br(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Cr=new Map,e.forEach(ty,n),Cr=null,Hr.call(n))}function ty(n,e){if(!(e.state.loading&4)){var t=Cr.get(n);if(t)var l=t.get(null);else{t=new Map,Cr.set(n,t);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var i=a[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),l=i)}l&&t.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),r=t.get(i)||l,r===l&&t.set(null,a),t.set(i,a),this.count++,l=Hr.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var va={$$typeof:fn,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function ly(n,e,t,l,a,r,i,u,s){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.hiddenUpdates=ni(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function fm(n,e,t,l,a,r,i,u,s,h,v,x){return n=new ly(n,e,t,i,s,h,v,x,u),e=1,r===!0&&(e|=24),r=ne(3,null,null,e),n.current=r,r.stateNode=n,e=Yi(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:l,isDehydrated:t,cache:e},Xi(r),n}function mm(n){return n?(n=ll,n):ll}function dm(n,e,t,l,a,r){a=mm(a),l.context===null?l.context=a:l.pendingContext=a,l=lt(e),l.payload={element:t},r=r===void 0?null:r,r!==null&&(l.callback=r),t=at(n,l,e),t!==null&&(Zn(t,n,e),Fl(t,n,e))}function hm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ic(n,e){hm(n,e),(n=n.alternate)&&hm(n,e)}function ym(n){if(n.tag===13||n.tag===31){var e=Nt(n,67108864);e!==null&&Zn(e,n,67108864),ic(n,67108864)}}function pm(n){if(n.tag===13||n.tag===31){var e=re();e=ei(e);var t=Nt(n,e);t!==null&&Zn(t,n,e),ic(n,e)}}var qr=!0;function ay(n,e,t,l){var a=_.T;_.T=null;var r=j.p;try{j.p=2,uc(n,e,t,l)}finally{j.p=r,_.T=a}}function ry(n,e,t,l){var a=_.T;_.T=null;var r=j.p;try{j.p=8,uc(n,e,t,l)}finally{j.p=r,_.T=a}}function uc(n,e,t,l){if(qr){var a=cc(l);if(a===null)ku(n,e,l,wr,t),vm(n,l);else if(uy(a,n,e,t,l))l.stopPropagation();else if(vm(n,l),e&4&&-1<iy.indexOf(n)){for(;a!==null;){var r=Kt(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=zt(r.pendingLanes);if(i!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;i;){var s=1<<31-In(i);u.entanglements[1]|=s,i&=~s}Ee(r),(k&6)===0&&(br=Fn()+500,ma(0))}}break;case 31:case 13:u=Nt(r,2),u!==null&&Zn(u,r,2),xr(),ic(r,2)}if(r=cc(l),r===null&&ku(n,e,l,wr,t),r===a)break;a=r}a!==null&&l.stopPropagation()}else ku(n,e,l,null,t)}}function cc(n){return n=oi(n),sc(n)}var wr=null;function sc(n){if(wr=null,n=Zt(n),n!==null){var e=A(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=W(e),n!==null)return n;n=null}else if(t===31){if(n=sn(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return wr=n,null}function gm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zm()){case zc:return 2;case Tc:return 8;case ja:case Km:return 32;case Ac:return 268435456;default:return 32}default:return 32}}var oc=!1,yt=null,pt=null,gt=null,ba=new Map,_a=new Map,vt=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vm(n,e){switch(n){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function xa(n,e,t,l,a,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Kt(e),e!==null&&ym(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function uy(n,e,t,l,a){switch(e){case"focusin":return yt=xa(yt,n,e,t,l,a),!0;case"dragenter":return pt=xa(pt,n,e,t,l,a),!0;case"mouseover":return gt=xa(gt,n,e,t,l,a),!0;case"pointerover":var r=a.pointerId;return ba.set(r,xa(ba.get(r)||null,n,e,t,l,a)),!0;case"gotpointercapture":return r=a.pointerId,_a.set(r,xa(_a.get(r)||null,n,e,t,l,a)),!0}return!1}function bm(n){var e=Zt(n.target);if(e!==null){var t=A(e);if(t!==null){if(e=t.tag,e===13){if(e=W(t),e!==null){n.blockedOn=e,Oc(n.priority,function(){pm(t)});return}}else if(e===31){if(e=sn(t),e!==null){n.blockedOn=e,Oc(n.priority,function(){pm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cc(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);si=l,t.target.dispatchEvent(l),si=null}else return e=Kt(t),e!==null&&ym(e),n.blockedOn=t,!1;e.shift()}return!0}function _m(n,e,t){Yr(n)&&t.delete(e)}function cy(){oc=!1,yt!==null&&Yr(yt)&&(yt=null),pt!==null&&Yr(pt)&&(pt=null),gt!==null&&Yr(gt)&&(gt=null),ba.forEach(_m),_a.forEach(_m)}function Qr(n,e){n.blockedOn===e&&(n.blockedOn=null,oc||(oc=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,cy)))}var Rr=null;function xm(n){Rr!==n&&(Rr=n,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Rr===n&&(Rr=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],a=n[e+2];if(typeof l!="function"){if(sc(l||t)===null)continue;break}var r=Kt(t);r!==null&&(n.splice(e,3),e-=3,cu(r,{pending:!0,data:a,method:t.method,action:l},l,a))}}))}function El(n){function e(s){return Qr(s,n)}yt!==null&&Qr(yt,n),pt!==null&&Qr(pt,n),gt!==null&&Qr(gt,n),ba.forEach(e),_a.forEach(e);for(var t=0;t<vt.length;t++){var l=vt[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<vt.length&&(t=vt[0],t.blockedOn===null);)bm(t),t.blockedOn===null&&vt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var a=t[l],r=t[l+1],i=a[Qn]||null;if(typeof r=="function")i||xm(t);else if(i){var u=null;if(r&&r.hasAttribute("formAction")){if(a=r,i=r[Qn]||null)u=i.formAction;else if(sc(a)!==null)continue}else u=i.action;typeof u=="function"?t[l+1]=u:(t.splice(l,3),l-=3),xm(t)}}}function Sm(){function n(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function fc(n){this._internalRoot=n}Gr.prototype.render=fc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(m(409));var t=e.current,l=re();dm(t,l,n,e,null,null)},Gr.prototype.unmount=fc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;dm(n.current,2,null,n,null,null),xr(),e[Vt]=null}};function Gr(n){this._internalRoot=n}Gr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Dc();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vt.length&&e!==0&&e<vt[t].priority;t++);vt.splice(t,0,n),t===0&&bm(n)}};var zm=S.version;if(zm!=="19.2.4")throw Error(m(527,zm,"19.2.4"));j.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(m(188)):(n=Object.keys(n).join(","),Error(m(268,n)));return n=L(e),n=n!==null?Hn(n):null,n=n===null?null:n.stateNode,n};var sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Dl=Xr.inject(sy),$n=Xr}catch{}}return Sa.createRoot=function(n,e){if(!T(n))throw Error(m(299));var t=!1,l="",a=Mo,r=Do,i=Oo;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fm(n,1,!1,null,null,t,l,null,a,r,i,Sm),n[Vt]=e.current,Ku(n),new fc(e)},Sa.hydrateRoot=function(n,e,t){if(!T(n))throw Error(m(299));var l=!1,a="",r=Mo,i=Do,u=Oo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(s=t.formState)),e=fm(n,1,!0,e,t??null,l,a,s,r,i,u,Sm),e.context=mm(null),t=e.current,l=re(),l=ei(l),a=lt(l),a.callback=null,at(t,a,l),t=l,e.current.lanes=t,Ul(e,t),Ee(e),n[Vt]=e.current,Ku(n),new Gr(e)},Sa.version="19.2.4",Sa}var Om;function Oy(){if(Om)return mc.exports;Om=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(S){console.error(S)}}return p(),mc.exports=Dy(),mc.exports}var Uy=Oy();const Hy={siteTitle:"Aitenry · 写代码，也写生活",navigation:{home:"首页",diaries:"日记",articles:"文章",search:"搜索",typeToSearch:"输入关键词，搜索文章与日记…",startTypingToSearch:"开始输入以搜索",noArticlesFound:"没有找到相关内容",tryADifferentSearchTerm:"换个关键词试试",toggleTheme:"切换主题",skip:"跳到主内容",kbdHint:"↑↓ 选择 · ⏎ 打开 · ESC 关闭"},notFound:{title:"页面不存在",desc:"你访问的页面不存在或已被移除。",back:"返回首页"},common:{back:"返回",copy:"复制",copied:"已复制",copyCode:"复制代码",publishedOn:"发布于",words:"字",minRead:"分钟",backToArticles:"返回文章",backToDiaries:"返回日记",readMore:"阅读全文",readDiary:"阅读日记",backToTop:"回到顶部",prev:"上一篇",next:"下一篇",tableOfContents:"目录",all:"全部",reading:"阅读进度"},articleNotFound:{title:"文章不存在",desc:"这篇文章可能已被移除，或链接有误。",back:"返回文章"},diaryNotFound:{title:"日记不存在",desc:"这篇日记可能已被移除，或链接有误。",back:"返回日记"},home:{headline1:"写代码，",headline2:"也写生活",roles:"全栈开发者 · 产品设计师 · 开源贡献者",nowPrefix:"现在：正在构建",nowTarget:"RytenBench",ctaArticles:"阅读文章",ctaProjects:"查看项目",statsArticles:"篇文章",statsDiaries:"篇日记",statsProjects:"开源项目",statsSkills:"项技术栈",scroll:"向下滚动",marquee:["全栈开发","AI 应用","开源","TypeScript","Java","Vue","写作","设计","阅读","折腾","咖啡","凌晨"]},about:{eyebrow:"关于",title:"关于我",meta:["坐标 · 中国","状态 · 持续构建中","现在 · RytenBench"],desc1:"我是一名专注于 AI 与 Web 技术融合的开发者，正在构建智能系统与 AI 驱动的应用。相信技术能创造更美好的未来，也相信代码之外还有生活。",desc2:"热衷探索技术前沿，关注 AI 在信息管理领域的落地。注重代码质量与用户体验，追求简单而高效的解决方案——这也是我写每一行代码的标准。",quote:"衡量生命的尺度是思想和行为，而不是时间。",tags:["AI 应用","Web 全栈","开源","设计"]},skills:{eyebrow:"技术栈",title:"技术栈"},projects:{eyebrow:"项目",title:"开源项目",iimsDescription:"AI 驱动的智能信息管理平台（已被收购）",rytenDescription:"轻量级个人 AI 工作台",viewProject:"查看项目",statusActive:"开发中",statusAcquired:"已收购 · 停止更新"},articles:{eyebrow:"文章",title:"文章",total:"篇"},diaries:{eyebrow:"日记",title:"日记",total:"篇"},footer:{eyebrow:"未完待续",closing:"保持好奇，继续折腾。",rights:"保留所有权利"}},Cy={siteTitle:"Aitenry · Write code, live a life",navigation:{home:"Home",diaries:"Diaries",articles:"Articles",search:"Search",typeToSearch:"Search articles & diaries…",startTypingToSearch:"Start typing to search",noArticlesFound:"Nothing found",tryADifferentSearchTerm:"Try another keyword",toggleTheme:"Toggle theme",skip:"Skip to content",kbdHint:"↑↓ navigate · ⏎ open · ESC close"},notFound:{title:"Page not found",desc:"The page you are looking for does not exist or has been removed.",back:"Back to Home"},common:{back:"Back",copy:"Copy",copied:"Copied",copyCode:"Copy code",publishedOn:"Published on",words:"words",minRead:"min",backToArticles:"Back to Articles",backToDiaries:"Back to Diaries",readMore:"Read more",readDiary:"Read diary",backToTop:"Back to top",prev:"Previous",next:"Next",tableOfContents:"Contents",all:"All",reading:"Reading"},articleNotFound:{title:"Article not found",desc:"This article may have been removed, or the link is broken.",back:"Back to Articles"},diaryNotFound:{title:"Diary not found",desc:"This diary may have been removed, or the link is broken.",back:"Back to Diaries"},home:{headline1:"Write code,",headline2:"live a life",roles:"Full-Stack Developer · Product Designer · Open-Source Contributor",nowPrefix:"NOW: Building",nowTarget:"RytenBench",ctaArticles:"Read Articles",ctaProjects:"View Projects",statsArticles:"Articles",statsDiaries:"Diaries",statsProjects:"Projects",statsSkills:"Skills",scroll:"Scroll",marquee:["FULL-STACK","AI APPS","OPEN SOURCE","TYPESCRIPT","JAVA","VUE","WRITING","DESIGN","READING","HACKING","COFFEE","MIDNIGHT"]},about:{eyebrow:"About",title:"About Me",meta:["Location · China","Status · Building","Now · RytenBench"],desc1:"A developer focused on blending AI with the web, building intelligent systems and AI-powered applications. I believe technology can create a better future — and that there is more to life than code.",desc2:"I explore the technical frontier, especially how AI lands in information management. I care about code quality and user experience, always chasing simple yet efficient solutions.",quote:"Life is measured by thought and action, not by time.",tags:["AI Apps","Web Full-Stack","Open Source","Design"]},skills:{eyebrow:"Stack",title:"Tech Stack"},projects:{eyebrow:"Projects",title:"Open Source",iimsDescription:"AI-powered intelligent information management platform (acquired)",rytenDescription:"Lightweight personal AI workbench",viewProject:"View project",statusActive:"Active",statusAcquired:"Acquired"},articles:{eyebrow:"Articles",title:"Articles",total:"TOTAL"},diaries:{eyebrow:"Diaries",title:"Diaries",total:"TOTAL"},footer:{eyebrow:"TO BE CONTINUED",closing:"Stay curious, keep building.",rights:"All rights reserved"}},By=()=>(navigator.language||navigator.userLanguage||"zh").startsWith("zh")?"zh":"en";yy.use(py).init({resources:{zh:{translation:Hy},en:{translation:Cy}},lng:By(),fallbackLng:"zh",interpolation:{escapeValue:!1}});const qy="modulepreload",wy=function(p){return"/"+p},Um={},Ym=function(S,z,m){let T=Promise.resolve();if(z&&z.length>0){let tn=function(L){return Promise.all(L.map(Hn=>Promise.resolve(Hn).then(D=>({status:"fulfilled",value:D}),D=>({status:"rejected",reason:D}))))};document.getElementsByTagName("link");const W=document.querySelector("meta[property=csp-nonce]"),sn=W?.nonce||W?.getAttribute("nonce");T=tn(z.map(L=>{if(L=wy(L),L in Um)return;Um[L]=!0;const Hn=L.endsWith(".css"),D=Hn?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${L}"]${D}`))return;const C=document.createElement("link");if(C.rel=Hn?"stylesheet":qy,Hn||(C.as="script"),C.crossOrigin="",C.href=L,sn&&C.setAttribute("nonce",sn),document.head.appendChild(C),Hn)return new Promise((Kn,xn)=>{C.addEventListener("load",Kn),C.addEventListener("error",()=>xn(new Error(`Unable to preload CSS for ${L}`)))})}))}function A(W){const sn=new Event("vite:preloadError",{cancelable:!0});if(sn.payload=W,window.dispatchEvent(sn),!sn.defaultPrevented)throw W}return T.then(W=>{for(const sn of W||[])sn.status==="rejected"&&A(sn.reason);return S().catch(A)})},Yy='## 分支命名前缀及含义\r\n\r\n| 前缀          | 全称            | 用途             | 示例                                              |\r\n|-------------|---------------|----------------|-------------------------------------------------|\r\n| `feat/`     | feature       | 新功能开发          | `feat/user-auth`, `feat/payment-gateway`        |\r\n| `fix/`      | fix           | Bug 修复         | `fix/login-error`, `fix/null-pointer`           |\r\n| `release/`  | release       | 版本发布准备         | `release/v2.1.0`, `release/2024-q1`             |\r\n| `hotfix/`   | hotfix        | 紧急线上修复         | `hotfix/prod-crash`, `hotfix/security-patch`    |\r\n| `refactor/` | refactor      | 代码重构（不改功能）     | `refactor/api-client`, `refactor/db-layer`      |\r\n| `style/`    | style         | 代码格式调整（空格、分号等） | `style/lint-fix`, `style/format-code`           |\r\n| `docs/`     | documentation | 文档更新           | `docs/readme-update`, `docs/api-docs`           |\r\n| `test/`     | test          | 测试相关           | `test/unit-tests`, `test/e2e-coverage`          |\r\n| `chore/`    | chore         | 构建/工具/依赖更新     | `chore/upgrade-deps`, `chore/ci-config`         |\r\n| `perf/`     | performance   | 性能优化           | `perf/query-optimization`, `perf/image-loading` |\r\n| `ci/`       | ci/cd         | CI/CD 配置       | `ci/github-actions`, `ci/deployment-pipeline`   |\r\n| `build/`    | build         | 构建系统/编译相关      | `build/webpack-config`, `build/dockerfile`      |\r\n\r\n---\r\n\r\n## 实际工作流示例\r\n\r\n### 开发新功能（Jira 集成）\r\n\r\n```bash\r\n# 1. 同步主干\r\ngit checkout main && git pull\r\n\r\n# 2. 创建分支（含任务 ID）\r\ngit checkout -b feat/PROJ-456-add-search-bar\r\n\r\n# 3. 开发并提交（提交信息也用相同规范）\r\ngit commit -m "feat(search): add keyword search bar"\r\ngit commit -m "test(search): add unit tests for search"\r\n\r\n# 4. 推送并创建 PR\r\ngit push -u origin feat/PROJ-456-add-search-bar\r\n# → GitHub/GitLab 会自动识别类型并打标签\r\n```\r\n\r\n### 紧急线上修复\r\n\r\n```bash\r\ngit checkout main && git pull\r\ngit checkout -b fix/PROJ-789-payment-failure\r\n\r\n# 修复后提交\r\ngit commit -m "fix(payment): handle null response from gateway"\r\n\r\n# PR 到 main，快速审批合并\r\ngit push origin fix/PROJ-789-payment-failure\r\n```\r\n\r\n### 准备发布\r\n\r\n```bash\r\n# 从 main 创建发布分支\r\ngit checkout main && git pull\r\ngit checkout -b release/v2.1.0\r\n\r\n# 进行最后测试、更新版本号、CHANGELOG\r\ngit commit -m "chore(release): bump version to 2.1.0"\r\ngit commit -m "docs(changelog): update for v2.1.0"\r\n\r\n# 合并到 main 并打 Tag\r\ngit checkout main\r\ngit merge --no-ff release/v2.1.0\r\ngit tag -a v2.1.0 -m "Release v2.1.0"\r\ngit push origin main --tags\r\n\r\n# （可选）合并到 develop（如果使用 Git Flow）\r\n```\r\n\r\n---',Qy=`## #规范代码格式\r
\r
当学习的程序越来越复杂，就需要一些代码格式设置约定来规范代码，提高代码的可读性...\r
\r
【PEP 8】：[PEP 8 – Style Guide for Python Code | peps.python.org](https://peps.python.org/pep-0008/)\r
\r
- 缩进：【PEP 8】建议每一级缩进都使用四个空格，即一个tab键，这既可以提高可读性，又留下了足够的多级缩进空间，缩进体现了上下代码之间的从属关系；\r
- 行长：建议每行不超过80字符，最初制定这样的指南时，是因为在大多数的计算机中，终端窗口每一行只能容纳79个字符；【PEP\r
  8】建议注释的行长都不超过72字符，因为有一些工具为大型项目自动生成文档时，会在注释开头添加格式化字符;\r
- 空行：要将不同的方法或者不同的部分隔开，都可以使用空行，但不能滥用；\r
\r
**注意：Python解释器根据水平缩进情况来解读代码，但不关心垂直间距...**\r
\r
------\r
\r
## 1. 变量与简单数据类型\r
\r
要注意变量的命名规范，避免出现命名错误.\r
\r
- 变量名只能包含字母、数字和下划线：变量名可以以字母或下划线开头，但是不能以数字开头；\r
- 变量名不能包含空格，但可以使用下划线来分隔其中的单词；\r
- 不要将Python关键字和函数名用做变量名；\r
- 变量名的命名应该简短又具有描述性；\r
- Python应该使用小写来命名变量，虽然不会导致错误，但是为了命名规范；\r
\r
------\r
\r
### 1.1 String\r
\r
字符串就是一系列的字符，在Python中，用引号扩起的都是字符串其中的引号可以是单引号，也可以是双引号.\r
\r
\`\`\`python\r
print("This is a String...")\r
print('This is a String...')\r
print('I told my friend, "Python is my favorite language!"')\r
print("The lanugage 'Python' is named after Monty Python, not the snake.")\r
print("One of Python's strengths is its diverse and supportive community.")\r
\`\`\`\r
\r
| 函数           | 作用                                                                                         |\r
|--------------|--------------------------------------------------------------------------------------------|\r
| title(  )    | 首字母以大写的方式显示每一个单词，即将每一个单词的首字母改成大写：【'line one'】>【'Line One'】                                 |\r
| upper(  )    | 将全部字母转换成大写：【'Luo'】>【'LUO'】                                                                 |\r
| lower(  )    | 将全部字母转换成小写：【'Luo'】>【'luo'】                                                                 |\r
| lstrip(  )   | 删除字符串开头的多余空白字符：【' python'】>【'python'】                                                      |\r
| rstrip(  )   | 删除字符串末尾的多余空白字符：【'python '】>【'python'】                                                      |\r
| strip(  )    | 同时剔除字符串两端的空白字符：【' python '】>【'python'】                                                     |\r
| format(name) | 放入参数name，通过占位符注入到字符串里面："Hello {}, would you like to learn some Python today?".format(name) |\r
\r
| 符号 | 作用                         |\r
|----|----------------------------|\r
| \\n | 换行                         |\r
| \\t | 转义字符，相当于一个tap键，通常宽度相当于8个空格 |\r
\r
\`\`\`python\r
# 替换人名的形式，以小写、大写、首字母大写的方式显示人名\r
def method(name):\r
    print("Hello {}, would you like to learn some Python today?".format(name))\r
\r
\r
if __name__ == '__main__':\r
    method("Eddie".title())\r
    method("Eddie".upper())\r
    method("Eddie".lower())\r
\r
\`\`\`\r
\r
1. f-string 是指以 f ' '开头的字符串，其中以 '{}' 包含的表达式会进行值替换.\r
\r
   \`\`\`python\r
   # 替换人名的形式，以小写、大写、首字母大写的方式显示人名\r
   def method(name):\r
       print(f"Hello {name}, would you like to learn some Python today?")\r
   \r
   \r
   if __name__ == '__main__':\r
       method("Eddie".title())\r
       method("Eddie".upper())\r
       method("Eddie".lower())\r
   \`\`\`\r
\r
\r
2. r-string 是指以 r ' '开头的字符串，可以防止字符串转义，即去掉反斜杠的转移机制.\r
\r
   \`\`\`python\r
   def method():\r
       print(r"Hello Eddie, would you like to learn some Python today?\\n")\r
   \r
   \r
   if __name__ == '__main__':\r
       method()\r
   \`\`\`\r
\r
\r
3. u-string 是指以u' '开头的字符串，表示对字符串进行Unicode编码【一般用在中文字符串前面】\r
\r
   \`\`\`python\r
   def method():\r
       print(u"点击量")\r
   \r
   \r
   if __name__ == '__main__':\r
       method()\r
   \`\`\`\r
\r
   注意：一般英文字符在使用各种编码下，基本都可以正常解析；但是中文，必须表明所需的编码，否则一旦编码转换就会出现乱码，建议所有编码方式采用UTF-8.\r
\r
------\r
\r
5. b-string 是指b' '开头的字符串，表示把字符串转换成byte类型.\r
\r
   \`\`\`python\r
   def method():\r
       print(b'opi')\r
   \r
   \r
   if __name__ == '__main__':\r
       method()\r
   \`\`\`\r
\r
------\r
\r
### 1.2 Number\r
\r
数字经常用来表现可视化数据，存储web应用信息...\r
\r
| 运算符 | 说明 |\r
|-----|----|\r
| +   | 加  |\r
| -   | 减  |\r
| *   | 乘  |\r
| /   | 除  |\r
| **  | 乘方 |\r
\r
\`\`\`python\r
print(2 + 3*4)\r
>> 14\r
\r
print((2 + 3) * 4)\r
>> 20\r
\`\`\`\r
\r
\`\`\`python\r
# 小数点位数可能是不确定的，Python通常都会安装你的期望去处理，即输出的小数点是0.3\r
print(0.2 + 0.1)\r
>> 0.3 or 0.3000000000004\r
\r
print(3 * 0.1)\r
>> 0.3 or 0.3000000000004\r
\`\`\`\r
\r
| 函数名 | 作用                                |\r
|-----|-----------------------------------|\r
| str | 类型转换，为了避免类型错误，把其他类型的数据转换成String类型 |\r
\r
从 Python3 转而用 Python2 或者 从 Python2 转而用 Python3时，会出现这种规范问题，要注意：\r
\r
\`\`\`python\r
# python2.7，编译环境下\r
print(3 / 2)\r
>> 1\r
\r
print(3.0 / 2)\r
>> 1.5\r
\r
print(3 / 2.0)\r
>> 1.5\r
\r
print(3.0 / 2.0)\r
>> 1.5\r
\r
# 在python3，编译环境下\r
print(3 / 2)\r
>> 1.5\r
\`\`\`\r
\r
------\r
\r
## 2. 列表\r
\r
列表由一系列按特定顺序排列的元素组成，列表通常包含多个元素，给列表指定一个表示复数的名称：letters、digits、names...\r
\r
\`\`\`python\r
bicycles = ['trek', 'cannondale', 'redline', 'specialized']\r
print(bicycles)\r
print(bicycles[0])\r
print(bicycles[1])\r
print(bicycles[3])\r
print(bicycles[-1])\r
\`\`\`\r
\r
\`\`\`\r
>> ['trek', 'cannondale', 'redline', 'specialized']\r
>> trek\r
>> cannondale\r
>> specialized\r
>> specialized\r
\`\`\`\r
\r
------\r
\r
### 2.1 修改、添加、删除\r
\r
#### 2.1.1 修改列表元素\r
\r
修改列表元素的语法与访问列表元素的语法类似. 要修改列表元素，可以指定列表名和要修改的元素的索引，再指定该元素的新值.\r
\r
\`\`\`python\r
motorcycles = ['honda', 'yamaha', 'suzuki']\r
print(mortorcycles)\r
motorcycles[0] = 'ducati'\r
print(mortorcycles)\r
\`\`\`\r
\r
\`\`\`\r
>> ['honda', 'yamaha', 'suzuki']\r
>> ['ducati', 'yamaha', 'suzuki']\r
\`\`\`\r
\r
------\r
\r
#### 2.2.2 添加列表元素\r
\r
| 函数         | 作用                      |\r
|------------|-------------------------|\r
| append(  ) | 将元素追加到列表的末尾             |\r
| insert(  ) | 提供下标和要插入的元素，直接插入当前下标的位置 |\r
\r
1. 在末尾添加元素\r
\r
\`\`\`python\r
motorcycles = ['honda', 'yamaha', 'suzuki']\r
print(mortorcycles)\r
motorcycles.append('ducati')\r
print(mortorcycles)\r
\`\`\`\r
\r
\`\`\`\r
>> ['honda', 'yamaha', 'suzuki']\r
>> ['honda', 'yamaha', 'suzuki', 'ducati']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# 这种创建列表的方式及其常见\r
motorcycles = []\r
motorcycles.append('honda')\r
motorcycles.append('yamaha')\r
motorcycles.append('suzuki')\r
print(mortorcycles)\r
\`\`\`\r
\r
\`\`\`\r
>> ['honda', 'yamaha', 'suzuki']\r
\`\`\`\r
\r
------\r
\r
2. 在列表中插入元素\r
\r
\`\`\`python\r
motorcycles = ['honda', 'yamaha', 'suzuki']\r
motorcycles.insert(0, 'ducati')\r
print(mortorcycles)\r
\`\`\`\r
\r
\`\`\`\r
>> ['ducati', 'honda', 'yamaha', 'suzuki']\r
\`\`\`\r
\r
------\r
\r
#### 2.2.3 删除列表元素\r
\r
| 方式         | 作用                                         |\r
|------------|--------------------------------------------|\r
| del        | 该语句可以删除指定的下标元素                             |\r
| pop(  )    | 如果不传值，默认删除列表最后一位；反则，以传入的那一个作为下标，删除当前下标下的元素 |\r
| remove(  ) | 删除列表里面含有的指定元素，以元素值来索检                      |\r
\r
\`\`\`python\r
# del语法\r
motorcycles = ['hona', 'yamaha', 'suzuki']\r
print(motorcycles)\r
del motorcycles[0]\r
print(motorcycles)\r
\`\`\`\r
\r
\`\`\`\r
>> ['hona', 'yamaha', 'suzuki']\r
>> ['yamaha', 'suzuki']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# pop函数\r
motorcycles = ['hona', 'yamaha', 'suzuki']\r
print(motorcycles)\r
poppedF_motorcycle = motorcycles.pop()\r
poppedS_motorcycle = motorcycles.pop(0)\r
print(motorcycles)\r
print(poppedF_motorcycle)\r
print(poppedS_motorcycle)\r
\`\`\`\r
\r
\`\`\`\r
>> ['hona', 'yamaha', 'suzuki']\r
>> ['yamaha']\r
>> suzuki\r
>> hona\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# remove函数\r
motorcycles = ['hona', 'yamaha', 'suzuki']\r
print(motorcycles)\r
motorcycles.remove('yamaha')\r
print(motorcycles)\r
\`\`\`\r
\r
\`\`\`\r
>> ['hona', 'yamaha', 'suzuki']\r
>> ['hona', 'suzuki']\r
\`\`\`\r
\r
------\r
\r
### 2.2 组织列表\r
\r
注意：在索引列表元素时候，要注意索引的下标不能超过索引长度，如果要访问最后一位元素可以用-1作为下标，但是列表不能为空\r
\r
| 方法名         | 作用                                       |\r
|-------------|------------------------------------------|\r
| sort(  )    | 对列表进行永久性排序，传入参数reverse=True可以倒序排列列表里面的元素 |\r
| sorted(  )  | 对列表进行临时排序，传入参数reverse=True可以倒序排列列表里面的元素  |\r
| reverse(  ) | 反转列表元素的排列顺序，并且是永久性修改                     |\r
| len(  )     | 列表长度                                     |\r
\r
\`\`\`python\r
# sort函数\r
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
cars.sort()  # 传参：reverse=True\r
print(cars)\r
\`\`\`\r
\r
\`\`\`\r
>> ['AUDI', 'BMW', 'SUBARU', 'TOYOTA']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# sorted函数\r
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
print("Here is the original list:")\r
print(cars)\r
print("Here is the sorted list:")\r
print(sorted(cars))\r
print("Here is the original list again:")\r
print(cars)\r
\`\`\`\r
\r
\`\`\`\r
>> Here is the original list:\r
>> ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
>> Here is the sorted list:\r
>> ['AUDI', 'BMW', 'SUBARU', 'TOYOTA']\r
>> Here is the original list again:\r
>> ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# reverse函数\r
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
print(cars)\r
cars.reverse()\r
print(cars)\r
\`\`\`\r
\r
\`\`\`\r
>> ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
>> ['SUBARU', 'TOYOTA', 'AUDI', 'BMW']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# len函数\r
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']\r
len(cars)\r
\`\`\`\r
\r
\`\`\`\r
>> 4\r
\`\`\`\r
\r
------\r
\r
### 2.3 操作列表\r
\r
#### 2.3.1 遍历列表元素\r
\r
注意：\r
\r
- Python根据缩进来判断代码行与前一个代码行的关系;\r
- 为了避免出现bug，要严格规范缩进问题;\r
- 一般条件语句后面都要初始结构体里面的内容，所以要用冒号' : '表示语句的开始.\r
\r
\`\`\`python\r
magicians = ['alice', 'david', 'carolina']\r
for magician in magicians:  # 取出列表magicians的元素，并赋值给magician\r
    print(magician)  # 取magician的值，并打印到控制台\r
\`\`\`\r
\r
\`\`\`\r
>> alice    \r
>> david\r
>> carolina\r
\`\`\`\r
\r
------\r
\r
#### 2.3.2 创建数字列表\r
\r
| 函数        | 作用                                             |\r
|-----------|------------------------------------------------|\r
| range(  ) | 生成一系列的数字，具有区间限制：rang(1, 4)只能输出1到3的数字区间是 [1, 3] |\r
| list(  )  | 利用range方法生成一个数字列表                              |\r
| min(  )   | 找出列表里面的最小值                                     |\r
| max(  )   | 找出列表里面的最大值                                     |\r
| sum(  )   | 求列表里面所有数字元素的总和                                 |\r
\r
\`\`\`python\r
# range函数\r
for value in range(1, 5):\r
    print(value)\r
\`\`\`\r
\r
\`\`\`\r
>> 1\r
>> 2\r
>> 3\r
>> 4\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# list函数\r
numbers = list(range(1, 6, 2))  # 取2倍数的数\r
print(number)\r
\`\`\`\r
\r
\`\`\`\r
>> [2, 4, 6, 8, 10]\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# min & max & sum\r
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]\r
min(digits)\r
max(digits)\r
sum(digits)\r
\`\`\`\r
\r
\`\`\`\r
>> 0\r
>> 9\r
>> 45\r
\`\`\`\r
\r
------\r
\r
\r
\r
进阶写法，用于简化代码\r
\r
\`\`\`python\r
# squares = []\r
# for value in range(1, 11):\r
#     square = value**2\r
#     squares.append(square)\r
# print(squares)\r
\r
# 互相等效，下面是简化后的方式\r
squares = [value**2 for value in range(1, 11)]\r
print(squares)\r
\`\`\`\r
\r
\`\`\`\r
>> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\r
\`\`\`\r
\r
------\r
\r
#### 2.3.3 处理列表区间部分\r
\r
##### 1. 列表区间切片\r
\r
| 区间    | 说明                                                                   |\r
|-------|----------------------------------------------------------------------|\r
| [1:3] | 取“下标1”到“下标2”的元素，包含“下标1”和“下标2”，即区间表示[1,3)                             |\r
| [:4]  | 当第一位参数为空的时候默认为起始是列表开头，即取“下标0”到“下标3”的元素，包含“下标0”和“下标3”，区间表示[0,4)       |\r
| [2:]  | 当第二位参数为空的时候默认为取到列表的末尾，即取“下标2”到“下标-1”的元素，包含“下标2”和“下标-1”，区间表示[2,-1]    |\r
| [:-1] | 当第一位参数为空的时候默认为起始是列表开头，即取“下标0”到“下标-1”的元素，包含“下标0”和“下标-1”，区间表示[0,-1]    |\r
| [-3:] | 当第二位参数为空的时候默认为取到列表的末尾，即取“下标-3”到“下标-1”的元素，包含“下标-3”和“下标-1”，区间表示[-3,-1] |\r
\r
\`\`\`python\r
players = ['charles', 'martina', 'michael', 'florence', 'eli']\r
print(players[1:3])\r
\`\`\`\r
\r
\`\`\`\r
>> ['martina', 'michael']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
players = ['charles', 'martina', 'michael', 'florence', 'eli']\r
print(players[:4])\r
\`\`\`\r
\r
\`\`\`\r
>> ['charles', 'martina', 'michael', 'florence']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
players = ['charles', 'martina', 'michael', 'florence', 'eli']\r
print(players[2:])\r
\`\`\`\r
\r
\`\`\`\r
>> ['michael', 'florence', 'eli']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
players = ['charles', 'martina', 'michael', 'florence', 'eli']\r
print(players[-3:])\r
\`\`\`\r
\r
\`\`\`\r
>> ['michael', 'florence', 'eli']\r
\`\`\`\r
\r
------\r
\r
##### 2. 复制列表\r
\r
\`\`\`python\r
my_foods = ['pizza', 'falafel', 'carrot cake']\r
friend_foods = my_foods[:]\r
my_foods.append('cannal')\r
friend_foods.append('ice cream')\r
print(my_foods)\r
print(friend_foods)\r
\`\`\`\r
\r
\`\`\`\r
>> ['pizza', 'falafel', 'carrot cake', 'cannal']\r
>> ['pizza', 'falafel', 'carrot cake', 'ice cream']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# 这里的赋值并不是副本的储存，而是相互关联\r
# 当my_foods收到追加信息的时候，friend_foods也会同步追加信息\r
# 当friend_foods收到追加信息的时候，my_foods也会同步追加信息\r
my_foods = ['pizza', 'falafel', 'carrot cake']\r
friend_foods = my_foods\r
my_foods.append('cannal')\r
friend_foods.append('ice cream')\r
print(my_foods)\r
print(friend_foods)\r
\`\`\`\r
\r
\`\`\`\r
>> ['pizza', 'falafel', 'carrot cake', 'cannal', 'ice cream']\r
>> ['pizza', 'falafel', 'carrot cake', 'cannal', 'ice cream']\r
\`\`\`\r
\r
------\r
\r
#### 2.3.4 元组\r
\r
- 在Python语法里面，将不能修改的值称为不可变的，而不可变的列表被称为元组；\r
- 元组看起来像列表一样，但使用圆括号而不是方括号来标识；\r
- 定义元组之后，就可以使用索引来访问其中的元素，就像访问列表元素一样；\r
- 如果想重新修改元组的元素，可以重新给存储元组的变量赋值.\r
\r
\`\`\`python\r
# 取值\r
dimensions = (30, 60)\r
print(dimensions[0])\r
print(dimensions[1])\r
\`\`\`\r
\r
\`\`\`\r
>> 30\r
>> 60\r
\`\`\`\r
\r
\`\`\`python\r
# 因为元组是不可修改的列表\r
dimensions[0] = 10  # 使用该语句会导致报错\r
\`\`\`\r
\r
\`\`\`python\r
# 利用for循环进行遍历\r
dimensions = (30, 60)\r
for dimension in dimensions:\r
    print(dimension)\r
\`\`\`\r
\r
\`\`\`\r
>> 30\r
>> 60\r
\`\`\`\r
\r
------\r
\r
## 3. 条件语句\r
\r
用if条件语句来处理，需要条件的程序\r
\r
\`\`\`python\r
cars = ['audi', 'bmw', 'subaru', 'toyota']\r
for car in cars:\r
    if car == 'bmw':\r
        print(car.upper())\r
    else:\r
        print(car.title())\r
\`\`\`\r
\r
\`\`\`\r
>> Audi\r
>> BMW\r
>> Subaru\r
>> Toyota\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
# Python中的字符串区分大小写\r
print('Audi' == 'audi')\r
print('Audi'.lower() == 'audi')\r
\`\`\`\r
\r
\`\`\`\r
>> False\r
>> True\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
print("name" != "nmea")\r
\`\`\`\r
\r
\`\`\`\r
>> False\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
print(19 < 21)\r
print(19 <= 21)\r
print(19 > 21)\r
print(19 >= 21)\r
\`\`\`\r
\r
\`\`\`\r
>> True\r
>> True\r
>> False\r
>> False\r
\`\`\`\r
\r
------\r
\r
### 3.1 检查多个条件\r
\r
有时候需要多个条件形成一个条件，这个时候就需要关键字：and 与 or\r
\r
#### 3.1.1 使用 and 检查多个条件\r
\r
要检查是否两个条件都为True，才可以进行if语句体里的语法.\r
\r
\`\`\`python\r
numbers = [60, 40, 67, 80, 92, 32]\r
for number in numbers:\r
    if(number >= 60 and number <= 70):\r
        print("number[60, 70]: " + str(number))\r
\`\`\`\r
\r
------\r
\r
#### 3.1.2 使用 or 检查多个条件\r
\r
只要其中一个条件为True，才可以进行if语句体里的语法.\r
\r
\`\`\`python\r
foods = ['pizza', 'falafel', 'carrot cake', 'cannal', 'ice cream']\r
for food in foods:\r
    if(food == 'ice cream' or food == 'pizza'):\r
        print("I choose " + food)\r
\`\`\`\r
\r
------\r
\r
#### 3.1.3 使用 in 检查列表里是否包含某个元素\r
\r
in关键字能够在创建一个列表后，轻松的检查其中是否包含特定的值.\r
\r
\`\`\`python\r
requested_toppings = ['mushrooms', 'onions', 'pineapple']\r
'mushrooms' in requested_toppings\r
\`\`\`\r
\r
\`\`\`\r
>> True\r
\`\`\`\r
\r
------\r
\r
#### 3.1.4 使用 not in 检查特定值是否不包括在列表中\r
\r
not in 关键字能够在创建一个列表后，轻松的确定特定的值是否不在列表里面\r
\r
\`\`\`python\r
banned_users = ['andrew', 'carolina', 'david']\r
user = 'marie'\r
if user not in banned_users:\r
    print(user.title() + ", you can post a response if you wish.")\r
\`\`\`\r
\r
------\r
\r
#### 3.1.5 使用布尔值：False & True\r
\r
布尔值的结果只能是两种结果：False 或者 True\r
\r
\`\`\`python\r
user_status = [True, False, False, True, False, True]\r
username = ['Luo', 'Lucas', 'KK', 'Aiox', 'Pon', 'Q-Fox']\r
for index, user in enumerate(username):\r
    print(user + " isOnline: " + str(user_status[index]))\r
\`\`\`\r
\r
------\r
\r
### 3.2 形成条件语句的关键字\r
\r
#### 3.2.1 if语句\r
\r
\`\`\`python\r
age = 19\r
if age >= 18:\r
    print("You are old enough to vote!")\r
\`\`\`\r
\r
\`\`\`\r
>> You are old enough to vote!\r
\`\`\`\r
\r
在if语句中将列表名用在条件表达式中时，Python将在列表至少包含一个元素时返回True，并在列表为空时返回False.\r
\r
\`\`\`python\r
requested_topping = []\r
if requested_toppings:\r
    for requested_topping in requested_toppings:\r
        print("Adding " + requested_topping + ".")\r
    print("\\nFinished making your pizza!")\r
else:\r
    print("Are you sure you want a plain pizza?")\r
\`\`\`\r
\r
------\r
\r
#### 3.2.2 if-else语句\r
\r
\`\`\`python\r
age = 17\r
if age >= 18:\r
    print("You are old enough to vote!")\r
    print("Have you registered to vate yet?")\r
else:\r
    print("Sorry, you are too young to vote.")\r
    print("Please register to vote as soon as you turn 18!")\r
\`\`\`\r
\r
\`\`\`\r
>> Sorry, you are too young to vote.\r
>> Please register to vote as soon as you turn 18!\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
available_toppings = ['mushrooms', 'olines', 'green peppers', 'pepperoni', 'extra cheese']\r
requested_toppings = ['mushrooms', 'french fries', 'extra cheese']\r
for requested_topping in requested_toppings:\r
    if requested_topping in available_toppings:\r
        print("Adding " + requested_topping + ".")\r
    else:\r
        print("Sorry, we don't have " + requested_topping + ".")\r
print("\\nFinished making your pizzal!")\r
\`\`\`\r
\r
\`\`\`\r
>> Adding mushrooms.\r
>> Sorry, we don't have french fries.\r
>> Adding extra cheese.\r
\r
>> Finished making your pizzal!\r
\`\`\`\r
\r
------\r
\r
#### 3.2.3 if-elif-else语句\r
\r
Python并不要求 if-elif 结构后面必须有else代码块.\r
\r
在有些情况下，else代码块很有用，而在其他一些情况下，使用一条elif语句来处理特定的情形更加合理.\r
\r
\`\`\`python\r
age = 12\r
if age < 4:\r
    print("Your admission cost is $0.")\r
elif age < 18:\r
    print("Your admission cost is $5.")\r
else:\r
    print("Your admission cost is $10.")\r
\r
# 简化打印\r
age = 12\r
if age < 4:\r
    price = 0;\r
elif age < 18:\r
    price = 5;\r
else:\r
    price = 10;\r
print("Your admission cost is $" + str(price) + ".")\r
\`\`\`\r
\r
------\r
\r
## 4. 字典\r
\r
访问字典中的值，获取与键相关联的值，可依次指定字典名和放在方括号内的键，俗称键值对\r
\r
\`\`\`python\r
alien_style = {\r
    'color': 'green', \r
    'points': 5\r
}\r
print(alien_style['color'])\r
print(alien_style['points'])\r
\`\`\`\r
\r
\`\`\`\r
>> green\r
>> 5\r
\`\`\`\r
\r
------\r
\r
### 4.1 修改、添加、删除\r
\r
#### 4.1.1 修改字典里面Key对应的Value\r
\r
如果在当前字典里面存在相应的Key，则该语句是修改这个Key的值.\r
\r
\`\`\`python\r
alien_style = {\r
    'color': 'green', \r
    'points': 5\r
}\r
alien_style['color'] = 'yellow'\r
print("The alien is now " + alien_style['color'] + ".")\r
\`\`\`\r
\r
\`\`\`\r
>> The alien_style is now yellow.\r
\`\`\`\r
\r
------\r
\r
#### 4.1.2 添加Key-Value对进入字典\r
\r
如果在当前字典里面不存在相应的Key，则该语句是添加这个Key-Value对进入字典里面.\r
\r
\`\`\`python\r
alien_style = {\r
    'color': 'green', \r
    'points': 5\r
}\r
alien_style['translationX'] = 67\r
alien_style['translationY'] = 97\r
print(alien_style)\r
\`\`\`\r
\r
\`\`\`\r
>> {'color': 'green', 'points': 5, 'translationX': 67, 'translationY': 97}\r
\`\`\`\r
\r
------\r
\r
#### 4.1.3 删除字典里面的Key-Value对\r
\r
- 对于字典中不再需要的信息，可以使用del语句将相应的Key-Value对彻底删除.\r
- 使用del语句时，必须指定字典名和要删除的键.\r
\r
\`\`\`python\r
alien_style = {\r
    'color': 'green', \r
    'points': 5\r
}\r
del alien_style['points']\r
print(alien_style)\r
\`\`\`\r
\r
\`\`\`\r
>> {'color': 'green'}\r
\`\`\`\r
\r
------\r
\r
### 4.2 遍历字典\r
\r
一个字典可能只包含几个Key-Value对，也可能包含数百万个Key-Value对.\r
\r
由于数据大量，可以用于各种方式的数据储存，所以字典也支持遍历.\r
\r
遍历方式：1、遍历字典所有的Key；2、遍历字典所有的Value；3、遍历字典所有的Key-Value对.\r
\r
------\r
\r
#### 4.2.1 遍历所有的Key-Value对\r
\r
注意：\r
\r
- 即便遍历字典时，Key-Value对的返回顺序也与存储顺序不同.\r
- Python不关心Key-Value对的存储顺序，而只跟踪建和值之间的关联关系.\r
\r
\`\`\`python\r
user = {\r
    'userId': '0823160946',\r
    'username': 'Lucas',\r
    'age': 18\r
}\r
for key, value in user.items():\r
    print("{Key, Value}: " + "{" + str(key) + ", " + str(value) + "}")\r
\`\`\`\r
\r
\`\`\`\r
>> {Key, Value}: {userId, 0823160946}\r
>> {Key, Value}: {username, Lucas}\r
>> {Key, Value}: {age, 18}\r
\`\`\`\r
\r
------\r
\r
#### 4.2.2 遍历字典中所有的Key\r
\r
\`\`\`python\r
user = {\r
    'userId': '0823160946',\r
    'username': 'Lucas',\r
    'age': 18\r
}\r
for key in user.keys():\r
    print("Key: " + str(key))\r
\`\`\`\r
\r
\`\`\`\r
>> Key: userId\r
>> Key: username\r
>> Key: age\r
\`\`\`\r
\r
------\r
\r
\r
\r
***按照顺序遍历字典中所有的Key***\r
\r
\`\`\`python\r
user = {\r
    'userId': '0823160946',\r
    'username': 'Lucas',\r
    'age': 18\r
}\r
for key in sorted(user.keys()):\r
    print("Key: " + str(key))\r
\`\`\`\r
\r
\`\`\`\r
>> Key: age\r
>> Key: userId\r
>> Key: username\r
\`\`\`\r
\r
------\r
\r
#### 4.2.3 遍历字典中所有的Value\r
\r
\`\`\`python\r
user = {\r
    'userId': '0823160946',\r
    'username': 'Lucas',\r
    'age': 18\r
}\r
for value in user.values():\r
    print("Value: " + str(value))\r
\`\`\`\r
\r
\`\`\`\r
>> Value: 0823160946\r
>> Value: Lucas\r
>> Value: 18\r
\`\`\`\r
\r
------\r
\r
\r
\r
***使用set方法，去除重复的Value***\r
\r
\`\`\`python\r
user_style = {\r
    'Lucas': 'humor',\r
    'Luo': 'boring',\r
    'Aixo': 'optimistic',\r
    'Loping': 'boring'\r
}\r
for value in set(user_style.values()):\r
    print(value.title())\r
\`\`\`\r
\r
------\r
\r
### 4.3 字典嵌套\r
\r
有时候，需要将一系列字典存储在列表中，或将列表作为值存储在字典中，这称之为嵌套.\r
\r
------\r
\r
#### 4.3.1 在列表里面存字典\r
\r
有时候，需要将一系列字典存储在列表中.\r
\r
\`\`\`python\r
aliens = []\r
for index in range(30):\r
    new_alien = {\r
        'color': 'green',\r
        'points': 5,\r
        'speed': 'show'\r
    }\r
    aliens.append(new_alien)\r
for index, alien in enumerate(aliens[:3]):\r
    print("aliens[" + str(index) + "] = " + str(alien))\r
print("...")\r
\`\`\`\r
\r
\`\`\`\r
>> aliens[0] = {'color': 'green', 'points': 5, 'speed': 'show'}\r
>> aliens[1] = {'color': 'green', 'points': 5, 'speed': 'show'}\r
>> aliens[2] = {'color': 'green', 'points': 5, 'speed': 'show'}\r
>> ...\r
\`\`\`\r
\r
------\r
\r
#### 4.3.2 在字典中存储列表\r
\r
有时候，需要将列表存储在字典中，而不是将字典存储在列表中.\r
\r
\`\`\`python\r
favorite_languages = {\r
    'Lucas': ['C#', 'C++'],\r
    'Eddie': ['Java', 'Python', 'C++', 'JavaScript'],\r
    'Luo': ['Java', 'PHP', 'C++']\r
}\r
print("")\r
for user, languages in favorite_languages.items():\r
    print(user + "'s favorite languages are: ")\r
    for language in languages:\r
        print(language, end=" ")\r
    print("\\n")\r
\`\`\`\r
\r
\`\`\`\r
>> Lucas's favorite languages are: \r
>> C# C++ \r
\r
>> Eddie's favorite languages are: \r
>> Java Python C++ JavaScript \r
\r
>> Luo's favorite languages are: \r
>> Java PHP C++ \r
\r
\`\`\`\r
\r
------\r
\r
#### 4.3.3 在字典中存储字典\r
\r
可以在字典中嵌套字典，但这样做时，会提高代码的复杂性，不易于解读.\r
\r
\`\`\`python\r
users = {\r
    'aeinstein': {\r
        'first': 'albert', \r
        'last': 'einstein', \r
        'location': 'princeton'\r
    },\r
    'mcurie': {\r
        'first': 'marie', \r
        'last': 'curie', \r
        'location': 'paris'\r
    }\r
}\r
for username, user_info in users.items():\r
    print("\\nUsername: " + username)\r
    full_name = user_info['first'] + ", " + user_info['last']\r
    location = user_info['location']\r
    \r
    print("\\tFull name: " + full_name.title())\r
    print("\\tLocation: " + location.title())\r
\`\`\`\r
\r
\`\`\`\r
>> Username: aeinstein\r
>> 		Full name: Albert, Einstein\r
>> 		Location: Princeton\r
\r
>> Username: mcurie\r
>> 		Full name: Marie, Curie\r
>> 		Location: Paris\r
\`\`\`\r
\r
------\r
\r
## 5. 用户输入与while循环\r
\r
### 5.1 用户输入\r
\r
- 函数input()让程序暂停运行，等待用户输入一些文本；\r
- 获取用户输入的值之后，再将值赋给一个变量中，供程序使用.\r
\r
\`\`\`python\r
message = input("Tell me something, and I will repeat it back to you: ")\r
print(massage)\r
\`\`\`\r
\r
\`\`\`\r
>> Tell me something, and I will repeat it back to you: Hello everyone!\r
>> Hello everyone!\r
\`\`\`\r
\r
------\r
\r
#### 5.1.1 使用int函数来获取数值输入\r
\r
- 使用input函数的时候，Python将用户输入解读为字符串;\r
- 这个时候，如果需要int类型的数据要用int函数强转类型.\r
\r
\`\`\`python\r
age = int(input("How old are you? "))\r
print("Are you over 18 years old? >> " + age >= 18)\r
\`\`\`\r
\r
------\r
\r
#### 5.1.2 求模运算符\r
\r
在处理数据值信息时，求模运算符\\<%>是一个很有用的符号，作用：将两个数相除并返回余数.\r
\r
\`\`\`python\r
number = int(input("Enter a number, and I'll tell you if it's even or odd: "))\r
if number % 2 == 0:\r
    print("The number " + str(number) + " is even.")\r
else:\r
    print("The number " + str(number) + "is odd.")\r
\`\`\`\r
\r
\`\`\`\r
>> Enter a number, and I'll tell you if it's even or odd: 42\r
>> The number 42 is even.\r
\`\`\`\r
\r
------\r
\r
### 5.2 while循环语句\r
\r
for循环用于针对集合中的每一个元素的一个代码块，而while循环不断地运行，直到指定的条件不满足为止.\r
\r
\`\`\`python\r
current_number = 1\r
while current_number <= 5:\r
    print(current_number, end=" ")\r
    current_number += 1\r
\`\`\`\r
\r
\`\`\`\r
>> 1 2 3 4 5 \r
\`\`\`\r
\r
------\r
\r
#### 5.2.1 用户选择何时退出\r
\r
\`\`\`python\r
prompt = "\\nTell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: "\r
message = ""\r
while message != 'Quit':\r
    message = input(prompt)\r
    if message == 'Quit':\r
        print("Exit loop statement...")\r
    else:\r
        print("You say: " + message)\r
\`\`\`\r
\r
\`\`\`\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: 7966\r
>> You say: 7966\r
\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: again 7966\r
>> You say: again 7966\r
\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: Quit\r
>> Exit loop statement...\r
\`\`\`\r
\r
------\r
\r
#### 5.2.2 使用标志符\r
\r
使用boolean类型的数据作为变量，为while语句的逻辑提供灵活性，即标志符.\r
\r
\`\`\`python\r
prompt = "\\nTell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: "\r
active = True\r
while active:\r
    message = input(prompt)\r
    if message == 'Quit':\r
        print("Exit loop statement...")\r
        active = False\r
    else:\r
        print("You say: " + message)\r
\`\`\`\r
\r
\`\`\`\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: 7966\r
>> You say: 7966\r
\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: again 7966\r
>> You say: again 7966\r
\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: Quit\r
>> Exit loop statement...\r
\`\`\`\r
\r
------\r
\r
#### 5.2.3 使用break关键字\r
\r
如果要立即退出while循环，不再运行循环中余下的代码，可以使用break语句\r
\r
\`\`\`python\r
prompt = "\\nTell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: "\r
while True:\r
    message = input(prompt)\r
    if message == 'Quit':\r
        print("Exit loop statement...")\r
        break\r
    else:\r
        print("You say: " + message)\r
\`\`\`\r
\r
\`\`\`\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: 7966\r
>> You say: 7966\r
\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: again 7966\r
>> You say: again 7966\r
\r
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: Quit\r
>> Exit loop statement...\r
\`\`\`\r
\r
------\r
\r
#### 5.2.4 使用continue关键字\r
\r
- 如果要返回到循环开头，并根据条件测试结果决定是否继续执行循环，可以使用continue关键字；\r
- 它不像break语句那样不再执行余下代码并退出整个循环.\r
\r
\`\`\`python\r
current_number = 0\r
while current_number < 10:\r
    current_number += 1\r
    if current_number % 2 == 0:\r
        continue\r
    print(current_number, end=" ")\r
\`\`\`\r
\r
\`\`\`\r
>> 1 3 5 7 9 \r
\`\`\`\r
\r
------\r
\r
#### 5.2.5 要避免无限循环\r
\r
每一个while循环语句都必须有停止运行的途径，为了防止循环一直循环下去，占用大量的内存空间.\r
\r
\`\`\`python\r
# 正确的循环语句\r
x = 1\r
while x <= 5:\r
    print(x, end=" ")\r
    x += 1\r
\`\`\`\r
\r
\`\`\`python\r
# 错误的循环语句\r
x = 1\r
while x <= 5:\r
    print(x)\r
\`\`\`\r
\r
------\r
\r
#### 5.2.6 处理列表和字典\r
\r
- for循环是一种遍历列表的有效方式，但在for循环中不应该修改列表，否则将导致Python难以跟踪其中的元素；\r
- 要在遍历列表的同时对其进行修改，可以使用while循环；\r
- 通过将while循环同列表和字典结合起来使用，可以收集、存储并组织大量输入，供以后查看和显示\r
\r
------\r
\r
##### 1. 在列表之间移动元素\r
\r
\`\`\`python\r
unconfirmed_users = ['alice', 'brian', 'candace']\r
confirmed_users = []\r
\r
while unconfirmed_users:\r
    current_user = unconfirmed_users.pop()\r
    print("Verifying user: " + current_user.title())\r
    confirmed_user.append(currend_user)\r
print("\\nThe following users have been confirmed: ")\r
for confirmed_user in confirmed_users:\r
    print(confirmed_user.title())\r
\`\`\`\r
\r
\`\`\`\r
>> Verifying user: Candace\r
>> Verifying user: Brian\r
>> Verifying user: Alice\r
\r
>> The following users have been confirmed: \r
>> Candace\r
>> Brian\r
>> Alice\r
\`\`\`\r
\r
------\r
\r
##### 2. 删除包含特定值的所有列表元素\r
\r
\`\`\`python\r
pets = ['dog', 'cat', 'goldfish', 'cat', 'rabbit', 'cat']\r
while 'cat' in pets:\r
    pets.remove('cat')\r
print(pets)\r
\`\`\`\r
\r
\`\`\`\r
>> ['dog', 'goldfish', 'rabbit']\r
\`\`\`\r
\r
------\r
\r
##### 3. 使用用户输入来填充字典\r
\r
\`\`\`python\r
responses = {}\r
polling_active = True\r
while polling_active:\r
    name = input("\\nWhat's you name? ")\r
    response = input("Which mountain would you like climb someday? ")\r
    responses[name] = response\r
    repeat = input("Would you like to let another person respond? (Yes / No) >> ")\r
    if repeat == 'No':\r
        polling_active = False\r
print("\\n--- Poll Results ---")\r
for name, response in responses.items():\r
    print(name + " would like to climb " + response + ".")\r
\`\`\`\r
\r
\`\`\`\r
>> What's you name? lucas\r
>> Which mountain would you like climb someday? lkl\r
>> Would you like to let another person respond? (Yes / No) >> Yes\r
\r
>> What's you name? lucas\r
>> Which mountain would you like climb someday? Denali\r
>> Would you like to let another person respond? (Yes / No) >> No\r
\r
>> --- Poll Results ---\r
>> lucas would like to climb Denali.\r
\`\`\`\r
\r
------\r
\r
## 6. 函数\r
\r
### 6.1 定义函数\r
\r
这是最简单的函数结构，使用关键字def来定义一个函数.\r
\r
\`\`\`python\r
def greet_user():\r
    print("Hello!")\r
\r
\r
greet_user()\r
\`\`\`\r
\r
\`\`\`\r
>> Hello!\r
\`\`\`\r
\r
------\r
\r
#### 6.1.1 向函数传递信息\r
\r
\`\`\`python\r
def greet_user(username):\r
    print("Hello, " + username.title() + "!")\r
\r
\r
greet_user("lucas")\r
\`\`\`\r
\r
\`\`\`\r
>> Hello, Lucas!\r
\`\`\`\r
\r
------\r
\r
#### 6.1.2 实参与形参\r
\r
- 实参是调用函数时传递给函数的信息 >> "lucas"；\r
- 形参是调用函数完成其工作所需的一项信息 >> username.\r
\r
\`\`\`python\r
def greet_user(username):\r
    print("Hello, " + username.title() + "!")\r
\r
\r
greet_user("lucas")\r
\`\`\`\r
\r
------\r
\r
### 6.2 传递实参\r
\r
- 鉴于函数定义中可能包含多个形参，因此函数调用中也可能包含多个实参；\r
- 向函数传递实参的方式很多，可以使用位置实参，这要求实参的顺序与形参的顺序相同；\r
- 也可以使用关键字实参，其中每一个实参都由变量名和值组成，还可以使用列表和字典.\r
\r
------\r
\r
#### 6.2.1 位置实参\r
\r
- 调用函数时，Python必须将函数调用中的每一个实参都关联到函数定义中的一个形参；\r
- 为此，最简单的关联方式是基于实参的顺序，这种关联方式被称为位置实参.\r
\r
\`\`\`python\r
def describe_pet(animal_type, pet_name):\r
    print("\\nI have a " + animal_type + ".")\r
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")\r
\r
\r
describe_pet('hamster', 'harry')\r
\`\`\`\r
\r
\`\`\`\r
>> I have a hamster.\r
>> My hamster's name is Harry.\r
\`\`\`\r
\r
------\r
\r
##### 1. 调用函数多次\r
\r
可以根据需要调用函数任意次.\r
\r
\`\`\`python\r
def describe_pet(animal_type, pet_name):\r
    print("\\nI have a " + animal_type + ".")\r
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")\r
\r
\r
describe_pet('hamster', 'harry')\r
describe_pet('dog', 'willie')\r
\`\`\`\r
\r
\`\`\`\r
>> I have a hamster.\r
>> My hamster's name is Harry.\r
\r
>> I have a dog.\r
>> My dog's name is willie.\r
\`\`\`\r
\r
------\r
\r
##### 2. 位置实参的顺序很重要\r
\r
使用位置实参来调用函数时，如果实参的顺序不正确，结果可能会出现偏差.\r
\r
\`\`\`python\r
def describe_pet(animal_type, pet_name):\r
    print("\\nI have a " + animal_type + ".")\r
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")\r
\r
\r
describe_pet('harry', 'hamster')\r
\`\`\`\r
\r
\`\`\`\r
>> I have a harry.\r
>> My harry's name is Hamster.\r
\`\`\`\r
\r
------\r
\r
#### 6.2.2 关键字实参\r
\r
- 关键字实参是传递给函数的<名称-值>对，该形式直接在实参中将名称和值关联起来；\r
- 因此向函数传递实参时不会混淆，关键字实参让开发者无需考虑函数调用中的实参的顺序，还清楚地指出了函数调用中的各个值的用途.\r
\r
注意：使用关键字实参时，务必准确地指定函数定义中的形参名.\r
\r
\`\`\`python\r
def describe_pet(animal_type, pet_name):\r
    print("\\nI have a " + animal_type + ".")\r
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")\r
\r
\r
describe_pet(animal_type='hamster', pet_name='harry')\r
\`\`\`\r
\r
\`\`\`\r
>> I have a harry.\r
>> My harry's name is Hamster.\r
\`\`\`\r
\r
------\r
\r
#### 6.2.3 默认值\r
\r
- 编写函数时，可以给每一个形参指定默认值；\r
- 在调用函数中给形参提供了实参时，Python将使用指定的实参值；\r
- 如果不给拥有默认值的形参提供值，函数将使用形参的默认值；\r
\r
注意：使用默认值时，在形参列表中必须先列出没有默认值的形参，再列出有默认值的形参，这让Python依然能够正确地解读位置实参.\r
\r
\`\`\`python\r
def describe_pet(animal_type, pet_name='harry'):\r
    print("\\nI have a " + animal_type + ".")\r
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")\r
\r
\r
describe_pet(animal_type='hamster')\r
\`\`\`\r
\r
\`\`\`\r
>> I have a harry.\r
>> My harry's name is Hamster.\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
def describe_pet(animal_type, pet_name='harry'):\r
    print("\\nI have a " + animal_type + ".")\r
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")\r
\r
\r
describe_pet('hamster')\r
\`\`\`\r
\r
\`\`\`\r
>> I have a harry.\r
>> My harry's name is Hamster.\r
\`\`\`\r
\r
------\r
\r
### 6.3 返回值\r
\r
- 函数并非总是直接显示输出，相反，它可以处理一些数据，并返回一个或一组值，函数返回的值被称为返回值；\r
- 在函数中，可使用return语句将值返回到调用函数的代码行；\r
- 返回值可以让开发者能够将程序的大部分繁重工作移到函数中去完成，从而简化主程序.\r
\r
------\r
\r
#### 6.3.1 返回简单值\r
\r
\`\`\`python\r
def get_formatted_name(first_name, last_name):\r
    full_name = first_name + ' ' + last_name\r
    return full_name.title()\r
\r
\r
print(get_formatted_name('jimi', 'hendrix'))\r
\`\`\`\r
\r
\`\`\`\r
Jimi Hendrix\r
\`\`\`\r
\r
------\r
\r
#### 6.3.2 让实参变成可选\r
\r
\`\`\`python\r
def get_formatted_name(first_name, last_name, middle_name=''):\r
    if middle_name:\r
        full_name = first_name + ' ' + middle_name + ' ' + last_name\r
    else:\r
        full_name = first_name + ' ' + last_name\r
    return full_name.title()\r
\r
\r
print(get_formatted_name('jimi', 'hendrix'))\r
print(get_formatted_name('john', 'hooker', 'lee'))\r
\`\`\`\r
\r
\`\`\`\r
>> Jimi Hendrix\r
>> John Lee Hooker\r
\`\`\`\r
\r
------\r
\r
#### 6.3.3 返回字典\r
\r
函数可返回任何类型的值，包括列表和字典等较为复杂的数据结构.\r
\r
\`\`\`python\r
def build_person(first_name, last_name):\r
    person = {\r
        'first': first_name, \r
        'last': last_name\r
    }\r
    return person\r
\r
\r
print(build_person('jimi', 'hendrix'))\r
\`\`\`\r
\r
\`\`\`\r
>> {'first': 'jimi', 'last': 'hendrix'}\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
def build_person(first_name, last_name, age=''):\r
    person = {\r
        'first': first_name, \r
        'last': last_name\r
    }\r
    if age:\r
        person['age'] = age\r
    return person\r
\r
\r
print(build_person('jimi', 'hendrix', age=27))\r
\`\`\`\r
\r
\`\`\`\r
>> {'first': 'jimi', 'last': 'hendrix', 'age': 27}\r
\`\`\`\r
\r
------\r
\r
#### 6.3.4 结合使用函数和while循环语句\r
\r
\`\`\`python\r
def get_formatted_name(first_name, last_name):\r
    full_name = first_name + ' ' + last_name\r
    return full_name.title()\r
\r
while True:\r
    print("\\nPlease tell me your name: ")\r
    print("Enter 'Q' at any time to quit")\r
    f_name = input("First name: ")\r
    if f_name == 'Q':\r
        break\r
    l_name = input("Last name: ")\r
    if l_name == 'Q':\r
        break\r
   	\r
    formatted_name = get_formatted_name(f_name, l_name)\r
    print("\\nHello, " + formatted_name + "!")\r
\`\`\`\r
\r
\`\`\`\r
>> Please tell me your name: \r
>> Enter 'Q' at any time to quit\r
>> First name: eric\r
>> Last name: matthes\r
\r
>> Hello, Eric Matthes!\r
\r
>> Please tell me your name: \r
>> Enter 'Q' at any time to quit\r
>> First name: Q\r
\`\`\`\r
\r
------\r
\r
### 6.4 传递列表\r
\r
- 向函数传递列表很有用，列表包含的可能是名字、数字或更复杂的对象<字典>；\r
- 将列表传递给函数后，函数就能直接访问其内容；\r
\r
\`\`\`python\r
def greet_users(names):\r
    for name in names:\r
        msg = "Hello, " + name.title() + "!"\r
        print(msg)\r
\r
\r
usernames = ['hannah', 'ty', 'margot']\r
greet_users(usernames)\r
\`\`\`\r
\r
\`\`\`\r
>> Hello, Hannah!\r
>> Hello, Ty!\r
>> Hello, Margot!\r
\`\`\`\r
\r
------\r
\r
#### 6.4.1 在函数中修改列表\r
\r
- 将列表传递给函数后，函数就可以对其进行修改；\r
- 在函数中对这个列表所做的任何修改都是永久性的，这可以让开发者能够高效的处理大量的数据.\r
\r
\`\`\`python\r
def print_models(unprinted_designs, completed_models):\r
    while unprinted_designs:\r
        current_design = unprinted_designs.pop()\r
        print("Printing model: " + current_design)\r
        completed_models.append(current_design)\r
\r
\r
def show_completed_models(completed_models):\r
    print("\\nThe following models have been printed:")\r
    for completed_model in completed_models:\r
        print(completed_model)\r
\r
\r
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']\r
completed_models = []\r
\r
print_models(unprinted_designs, completed_models)\r
show_completed_models(completed_models)\r
\`\`\`\r
\r
\`\`\`\r
>> Printing model: dodecahedron\r
>> Printing model: robot pendant\r
>> Printing model: iphone case\r
\r
>> The following models have been printed:\r
>> dodecahedron\r
>> robot pendant\r
>> iphone case\r
\`\`\`\r
\r
------\r
\r
#### 6.4.2 禁止函数修改列表\r
\r
通过切片表示法[:]创建列表的副本.\r
\r
\`\`\`python\r
function_name(list_name[:])\r
\`\`\`\r
\r
实例：\r
\r
\`\`\`python\r
def print_models(unprinted_designs, completed_models):\r
    while unprinted_designs:\r
        current_design = unprinted_designs.pop()\r
        print("Printing model: " + current_design)\r
        completed_models.append(current_design)\r
\r
\r
def show_completed_models(completed_models):\r
    print("\\nThe following models have been printed:")\r
    for completed_model in completed_models:\r
        print(completed_model)\r
\r
\r
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']\r
completed_models = []\r
\r
print_models(unprinted_designs[:], completed_models)\r
show_completed_models(completed_models)\r
\`\`\`\r
\r
\`\`\`\r
>> Printing model: dodecahedron\r
>> Printing model: robot pendant\r
>> Printing model: iphone case\r
\r
>> The following models have been printed:\r
>> dodecahedron\r
>> robot pendant\r
>> iphone case\r
\`\`\`\r
\r
------\r
\r
### 6.5 传递任意数量的实参\r
\r
如果预先不知道函数需要接受多少个实参，Python允许函数从调用语句中收集任意数量的实参.\r
\r
\`\`\`python\r
def make_pizza(*toppings):\r
    print("\\nMaking a pizza with the following topping:")\r
    for topping in toppings:\r
        print("- " + topping)\r
\r
\r
make_pizza('pepperoni')\r
make_pizza('mushrooms', 'green peppers', 'extra cheese')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a pizza with the following topping:\r
>> - pepperoni\r
\r
>> Making a pizza with the following topping:\r
>> - mushrooms\r
>> - green peppers\r
>> - extra cheese\r
\`\`\`\r
\r
------\r
\r
#### 6.5.1 结合使用位置实参和任意数量实参\r
\r
- 如果让函数接受不同类型的实参，必须在函数定义中将接纳任意数量实参的形参放在最后；\r
- Python先匹配位置实参和关键字实参，再将余下的实参都收集到最后一个形参中.\r
\r
\`\`\`python\r
def make_pizza(size, *toppings):\r
    print("\\nMaking a " + str(size) + "-inch pizza with the following topping:")\r
    for topping in toppings:\r
        print("- " + topping)\r
\r
\r
make_pizza(16, 'pepperoni')\r
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a 16-inch pizza with the following topping:\r
>> - pepperoni\r
\r
>> Making a 12-inch pizza with the following topping:\r
>> - mushrooms\r
>> - green peppers\r
>> - extra cheese\r
\`\`\`\r
\r
------\r
\r
#### 6.5.2 使用任意数量的关键字实参\r
\r
- 如果需要接受任意数量的实参，但预先不知道传递给函数的会是什么样的信息；\r
- 在这种情况下，可以将函数编写成能够接受任意数量的Key-Value对；\r
- 函数dict用于创建一个字典.\r
\r
\`\`\`python\r
def build_profile(first, last, **user_info):\r
    profile = dict()\r
    profile['first_name'] = first\r
    profile['last_name'] = last\r
    for key, value in user_info.items():\r
        profile[key] = value\r
    return profile\r
\r
\r
user_profile = build_profile(\r
    'albert', 'einstein', \r
    location='princeton', \r
    field='physics'\r
)\r
print(user_profile)\r
\`\`\`\r
\r
\`\`\`\r
>> {'first_name': 'albert', 'last_name': 'einstein', 'location': 'princeton', 'field': 'physics'}\r
\`\`\`\r
\r
------\r
\r
### 6.6 将函数存储在模块中\r
\r
- 通过将函数存储在独立的文件中，可隐藏程序代码的细节，将重点放在程序的高层逻辑上；\r
- 将函数存储在模块中，可以让不同的程序重用函数，还可以与其他的开发者共享这些封装好的函数库.\r
\r
------\r
\r
#### 6.6.1 导入整个模块\r
\r
\`\`\`python\r
# utiltips.py\r
def element(size, *names):\r
    print("\\nMaking a " + str(size) + " size parts are: ")\r
    for name in names:\r
        print("- " + name.title())\r
\`\`\`\r
\r
\`\`\`python\r
import utiltips\r
\r
utiltips.element(16, 'screw')\r
utiltips.element(12, 'hexagon bolt', 'hexagon nut')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a 16 size parts are: \r
>> - Screw\r
\r
>> Making a 12 size parts are: \r
>> - Hexagon Bolt\r
>> - Hexagon Nut\r
\`\`\`\r
\r
------\r
\r
#### 6.6.2 导入特定的函数\r
\r
导入模块中特定的函数\r
\r
\`\`\`python\r
from module_name import function_name\r
\`\`\`\r
\r
通过用逗号分隔函数名，导入模块中需要的多个函数\r
\r
\`\`\`python\r
from module_name import function_01, function_02, function_03\r
\`\`\`\r
\r
实例：\r
\r
\`\`\`python\r
# utils.py\r
def element(size, *names):\r
    print("\\nMaking a " + str(size) + " size parts are: ")\r
    for name in names:\r
        print("- " + name.title())\r
\`\`\`\r
\r
\`\`\`python\r
from utils import element\r
\r
element(16, 'screw')\r
element(12, 'hexagon bolt', 'hexagon nut')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a 16 size parts are: \r
>> - Screw\r
\r
>> Making a 12 size parts are: \r
>> - Hexagon Bolt\r
>> - Hexagon Nut\r
\`\`\`\r
\r
------\r
\r
#### 6.6.3 使用as给函数指定别名\r
\r
给函数指定别名的语法\r
\r
\`\`\`python\r
from module_name import function_name as fn\r
\`\`\`\r
\r
实例：\r
\r
\`\`\`python\r
# utils.py\r
def element(size, *names):\r
    print("\\nMaking a " + str(size) + " size parts are: ")\r
    for name in names:\r
        print("- " + name.title())\r
\`\`\`\r
\r
\`\`\`python\r
from utils import element as el\r
\r
el(16, 'screw')\r
el(12, 'hexagon bolt', 'hexagon nut')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a 16 size parts are: \r
>> - Screw\r
\r
>> Making a 12 size parts are: \r
>> - Hexagon Bolt\r
>> - Hexagon Nut\r
\`\`\`\r
\r
------\r
\r
#### 6.6.4 使用as给模块指定别名\r
\r
给模块指定别名用法\r
\r
\`\`\`python\r
import module_name as mn\r
\`\`\`\r
\r
实例：\r
\r
\`\`\`python\r
# utils.py\r
def element(size, *names):\r
    print("\\nMaking a " + str(size) + " size parts are: ")\r
    for name in names:\r
        print("- " + name.title())\r
\`\`\`\r
\r
\`\`\`python\r
import utils as us\r
\r
us.element(16, 'screw')\r
us.element(12, 'hexagon bolt', 'hexagon nut')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a 16 size parts are: \r
>> - Screw\r
\r
>> Making a 12 size parts are: \r
>> - Hexagon Bolt\r
>> - Hexagon Nut\r
\`\`\`\r
\r
------\r
\r
#### 6.6.5 导入模块中的所有函数\r
\r
- 使用星号<*>运算符可以让Python导入模块中的所有函数，很少用，最好不要用这种方法导入函数；\r
- 当项目大的时候，把所有函数都导入进来，会占用资源，因为有一些的函数用不到；\r
- 如果模块中有函数的名称与项目里面使用的名称相同，可能会导致函数被覆盖掉.\r
\r
\`\`\`python\r
from module_name import *\r
\`\`\`\r
\r
实例：\r
\r
\`\`\`python\r
# utils.py\r
def element(size, *names):\r
    print("\\nMaking a " + str(size) + " size parts are: ")\r
    for name in names:\r
        print("- " + name.title())\r
\`\`\`\r
\r
\`\`\`python\r
from utils import *\r
\r
us.element(16, 'screw')\r
us.element(12, 'hexagon bolt', 'hexagon nut')\r
\`\`\`\r
\r
\`\`\`\r
>> Making a 16 size parts are: \r
>> - Screw\r
\r
>> Making a 12 size parts are: \r
>> - Hexagon Bolt\r
>> - Hexagon Nut\r
\`\`\`\r
\r
------\r
\r
## 7. 类\r
\r
### 7.1 创建与使用类\r
\r
#### 7.1.1 创建Dog类\r
\r
根据开发者需要的属性和函数，创建相应的类.\r
\r
| 运用             | 作用                        |\r
|----------------|---------------------------|\r
| \\__init__(   ) | 初始化类结构体内的变量               |\r
| self           | 以self为前缀的变量都可以提供给；类中的方法使用 |\r
\r
\`\`\`python\r
class Dog:\r
    \r
    def __init__(self, name, age):\r
        self.name = name\r
        self.age = age\r
    \r
    def sit(self):\r
        print(self.name.title() + " is now sitting.")\r
    \r
    def roll_over(self):\r
        print(self.name.title() + " rolled over!")\r
\`\`\`\r
\r
------\r
\r
#### 7.1.2 根据类创建实例\r
\r
\`\`\`python\r
my_dog = Dog('willie', 6)\r
print("My dog's name is " + my_dog.name.title() + " and it's " + str(my_dog.age) + " years old.")\r
\`\`\`\r
\r
\`\`\`\r
>> My dog's name is Willie and he's 6 years old.\r
\`\`\`\r
\r
------\r
\r
1. 访问属性\r
\r
\`\`\`python\r
my_dog.name\r
my_dog.age\r
\`\`\`\r
\r
------\r
\r
2. 调用方法\r
\r
\`\`\`python\r
my_dog = Dog('willie', 6)\r
my_dog.sit()\r
my_dog.roll_over()\r
\`\`\`\r
\r
------\r
\r
3. 创建多个实例\r
\r
\`\`\`python\r
my_dog = Dog('willie', 6)\r
my_dog.sit()\r
my_dog.roll_over()\r
\r
your_dog = Dog('lucy', 3)\r
your_dog.sit()\r
your_dog.roll_over()\r
\`\`\`\r
\r
------\r
\r
### 7.2 使用类与实例\r
\r
#### 7.2.1 创建Car类\r
\r
\`\`\`python\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
my_new_car = Car('audi', 'a4', 2016)\r
print(my_new_car.get_descriptive_name())\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Audi A4\r
\`\`\`\r
\r
------\r
\r
#### 7.2.2 给属性指定默认值\r
\r
- 类中的每一个属性都必须有初始值，哪怕这个值是0或者空字符串；\r
- 在有些情况下，如果设置默认值的时候，在方法\\__init__( )内指定这种初始值是可行的；\r
- 如果对某一个属性这样做了，就不需要包含为它提供初始值的形参.\r
\r
\`\`\`python\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
    \r
my_new_car = Car('audi', 'a4', 2016)\r
print(my_new_car.get_descriptive_name())\r
my_new_car.read_odometer()\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Audi A4\r
>> This car has 0 miles on it.\r
\`\`\`\r
\r
------\r
\r
#### 7.2.3 修改属性的值\r
\r
1. 直接修改属性的值\r
\r
不推荐：要修改一个值，最简单粗暴的方法就是通过实例直接访问它，并赋值.\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car\r
\r
my_new_car = Car('audi', 'a4', 2016)\r
print(my_new_car.get_descriptive_name())\r
\r
my_new_car.odometer_reading = 23\r
my_new_car.read_odometer()\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Audi A4\r
>> This car has 23 miles on it.\r
\`\`\`\r
\r
------\r
\r
2. 通过方法修改属性的值\r
\r
推荐使用：一般通过创建一个更新方法，就不需要直接访问属性，直接将值传递给一个方法，让它的内部进行更新.\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
        \r
    def update_odometer(self, mileage):\r
        self.odometer_reading = mileage\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car\r
\r
my_new_car = Car('audi', 'a4', 2016)\r
print(my_new_car.get_descriptive_name())\r
\r
my_new_car.update_odometer(23)\r
my_new_car.read_odometer()\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Audi A4\r
>> This car has 23 miles on it.\r
\`\`\`\r
\r
------\r
\r
3. 通过方法对属性的值进行递增\r
\r
- 有时候需要将属性值递增特定的量，而不是将其设置为全新的值.\r
- 有时候，需要注意安全问题：当要增加里程数的时候，为了避免黑客的恶意注入，要禁止任何人将里程表读数往回调.\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
        \r
    def update_odometer(self, mileage):\r
        if mileage >= self.odometer_reading:\r
        	self.odometer_reading = mileage\r
        else:\r
            print("You can't roll back an odometer!")\r
        \r
    def increment_odometer(self, miles):\r
        self.odometer_reading += miles\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car\r
\r
my_new_car = Car('audi', 'a4', 2016)\r
print(my_new_car.get_descriptive_name())\r
\r
my_new_car.update_odometer(23500)\r
my_new_car.read_odometer()\r
\r
my_new_car.increment_odometer(100)\r
my_new_car.read_odometer()\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Audi A4\r
>> This car has 23500 miles on it.\r
>> This car has 23600 miles on it.\r
\`\`\`\r
\r
------\r
\r
### 7.3 类的继承关系\r
\r
- 一个类继承另一个类时，它将自动获得另一个类的所有属性和方法；\r
- 原有的类称为父类，而新类称为子类；\r
- 子类继承了其父类的所有属性和方法，同时还可以定义自己的属性和方法.\r
\r
------\r
\r
#### 7.3.1 子类的\\__init__(  )方法\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
        \r
    def update_odometer(self, mileage):\r
        if mileage >= self.odometer_reading:\r
        	self.odometer_reading = mileage\r
        else:\r
            print("You can't roll back an odometer!")\r
        \r
    def increment_odometer(self, miles):\r
        self.odometer_reading += miles\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car\r
\r
\r
class ElectricCar(Car):\r
    def __init__(self, make, model, year):\r
        super().__init__(make, model, year)  # 初始化父类的属性\r
\r
\r
my_tesla = ElectricCar('tesla', 'model s', 2016)\r
print(my_tesla.get_descriptive_name())\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Tesla Model S\r
\`\`\`\r
\r
------\r
\r
#### 7.3.2 给子类定义属性和方法\r
\r
让一个类继承另一个类后，可以添加区分子类和父类所需的新属性和方法.\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
        \r
    def update_odometer(self, mileage):\r
        if mileage >= self.odometer_reading:\r
        	self.odometer_reading = mileage\r
        else:\r
            print("You can't roll back an odometer!")\r
        \r
    def increment_odometer(self, miles):\r
        self.odometer_reading += miles\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car\r
\r
\r
class ElectricCar(Car):\r
    def __init__(self, make, model, year):\r
        super().__init__(make, model, year)  # 初始化父类的属性\r
        self.battery_size = 70 # 再初始化子类特有的属性\r
    \r
    def describe_battery(self):\r
        print("This car has a " + str(self.battery_size) + "-KWH battery.")\r
\r
\r
my_tesla = ElectricCar('tesla', 'model s', 2016)\r
print(my_tesla.get_descriptive_name())\r
my_tesla.describe_battery()\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Tesla Model S\r
>> This car has a 70-KWH battery.\r
\`\`\`\r
\r
------\r
\r
#### 7.3.3 重写父类的方法\r
\r
- 对于父类的方法，只要它不符合子类模拟实物的行为，都可以对其进行重写；\r
- 所以，可以在子类中定义一个这样的方法，即它与需要重写的父类方法同名.\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
        \r
    def fill_gas_tank(self):\r
        print("Be Meaningless...")\r
        \r
    def update_odometer(self, mileage):\r
        if mileage >= self.odometer_reading:\r
        	self.odometer_reading = mileage\r
        else:\r
            print("You can't roll back an odometer!")\r
        \r
    def increment_odometer(self, miles):\r
        self.odometer_reading += miles\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car\r
\r
\r
class ElectricCar(Car):\r
    def __init__(self, make, model, year):\r
        super().__init__(make, model, year)  # 初始化父类的属性\r
        self.battery_size = 70 # 再初始化子类特有的属性\r
    \r
    def describe_battery(self):\r
        print("This car has a " + str(self.battery_size) + "-KWH battery.")\r
    \r
    # 重写该方法\r
    def fill_gas_tank(self):\r
        print("This car doesn't need a gas tank!")\r
\r
\r
my_tesla = ElectricCar('tesla', 'model s', 2016)\r
print(my_tesla.get_descriptive_name())\r
my_tesla.describe_battery()\r
my_tesla.fill_gas_tank()\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Tesla Model S\r
>> This car has a 70-KWH battery.\r
>> This car doesn't need a gas tank!\r
\`\`\`\r
\r
------\r
\r
#### 7.3.4 将实例用做属性\r
\r
- 当属性和方法清单以及文件行数越来越长，就需要将类的一部分作为一个独立的类提取出来；\r
- 可以将大型类拆分成多个协同的小类，并不断给这些小类添加细节，即需求方法.\r
\r
\`\`\`python\r
# utils.py\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
    \r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
    \r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
        \r
    def update_odometer(self, mileage):\r
        if mileage >= self.odometer_reading:\r
        	self.odometer_reading = mileage\r
        else:\r
            print("You can't roll back an odometer!")\r
        \r
    def increment_odometer(self, miles):\r
        self.odometer_reading += miles\r
\r
\r
\r
class Battery:\r
    def __init__(self, battery_size=70):\r
        self.battery_size = battery_size\r
    \r
    def describe_battery(self):\r
        print("This car has a " + str(self.battery_size) + "-KWH battery.")\r
\`\`\`\r
\r
\`\`\`python\r
import utils\r
\r
\r
class ElectricCar(utils.Car):\r
    def __init__(self, make, model, year):\r
        super().__init__(make, model, year)  # 初始化父类的属性\r
        self.battery = utils.Battery()  # 再初始化子类特有的属性\r
\r
\r
my_tesla = ElectricCar('tesla', 'model s', 2016)\r
print(my_tesla.get_descriptive_name())\r
my_tesla.battery.describe_battery()  # 调用新类里面的方法\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Tesla Model S\r
>> This car has a 70-KWH battery.\r
\`\`\`\r
\r
注意：当需要新类的方法时候，调用的方式如下\r
\r
\`\`\`python\r
object_variable.new_object_class.function()\r
\`\`\`\r
\r
------\r
\r
### 7.4 导入类\r
\r
1. 导入单个类\r
\r
\`\`\`python\r
from module_name import class_name\r
\`\`\`\r
\r
------\r
\r
2. 从一个模块中导入多个类\r
\r
\`\`\`python\r
class Car:\r
    def __init__(self, make, model, year):\r
        self.make = make\r
        self.model = model\r
        self.year = year\r
        self.odometer_reading = 0\r
\r
    def get_descriptive_name(self):\r
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model\r
        return long_name.title()\r
\r
    def read_odometer(self):\r
        print("This car has " + str(self.odometer_reading) + " miles on it.")\r
\r
    def update_odometer(self, mileage):\r
        if mileage >= self.odometer_reading:\r
            self.odometer_reading = mileage\r
        else:\r
            print("You can't roll back an odometer!")\r
\r
    def increment_odometer(self, miles):\r
        self.odometer_reading += miles\r
\r
\r
class Battery:\r
    def __init__(self, battery_size=70):\r
        self.battery_size = battery_size\r
\r
    def describe_battery(self):\r
        print("This car has a " + str(self.battery_size) + "-KWH battery.")\r
\r
\r
class ElectricCar(Car):\r
    def __init__(self, make, model, year):\r
        super().__init__(make, model, year)  # 初始化父类的属性\r
        self.battery = Battery()  # 再初始化子类特有的属性\r
\r
\`\`\`\r
\r
\`\`\`python\r
from utils import Car, ElectricCar\r
\r
\r
my_beetle = Car('volkswagen', 'beetle', 2016)\r
print(my_beetle.get_descriptive_name())\r
\r
my_tesla = ElectricCar('tesla', 'model s', 2016)\r
print(my_tesla.get_descriptive_name())\r
\`\`\`\r
\r
\`\`\`\r
>> 2016 Volkswagen Beetle\r
>> 2016 Tesla Model S\r
\`\`\`\r
\r
------\r
\r
3. 导入整个模块\r
\r
\`\`\`python\r
import module_name\r
\`\`\`\r
\r
------\r
\r
4. 导入模块中的所有类\r
\r
\`\`\`python\r
from module_name import *\r
\`\`\`\r
\r
------\r
\r
5. 在模块中导入另一个模块\r
\r
\`\`\`python\r
from utils import Car\r
\r
class Battery:\r
    --snip--\r
\r
class ElectricCar(Car):\r
    --snip--\r
\`\`\`\r
\r
------\r
\r
## 8. 文件与异常\r
\r
### 8.1 从文件中读取数据\r
\r
#### 8.1.1 读取整个文件\r
\r
1. 创建TXT文件，并放入数据.\r
\r
\`\`\`\r
3.1415926535\r
\`\`\`\r
\r
------\r
\r
2. 代码部分\r
\r
\`\`\`python\r
# 要注意路径问题\r
with open('PI.txt') as file:\r
    contents = file.read()\r
    print(contents)\r
\`\`\`\r
\r
------\r
\r
3. 结果\r
\r
\`\`\`\r
>> 3.1415926535\r
\`\`\`\r
\r
------\r
\r
#### 8.1.2 文件路径\r
\r
注意：\r
\r
- Windows系统有时能够正确地解读文件路径中的斜杠，如果使用Windows系统，且结果不符合预期，请确保在文件路径中使用的是反斜杠；\r
- 由于反斜杠在Python中被视为转义标记，为了在Windows中确保正确读取路径，应在原始字符串的方式指定路径，即在开头的单引号前加上r.\r
\r
在Linux与OSX系统中，绝对路径如下：\r
\r
\`\`\`\r
/home/ehmatthes/other_files/text_files/filename.txt\r
\`\`\`\r
\r
------\r
\r
\r
\r
在Windows系统，绝对路径如下：\r
\r
\`\`\`\r
C:\\Users\\ehmatthes\\other_files\\text_files\\filename.txt\r
\`\`\`\r
\r
------\r
\r
#### 8.1.3 逐行读取\r
\r
- 关键字with，负责妥善地打开和关闭文件.\r
- 要以每次一行的方式检查文件，可对文件对象使用for循环.\r
- 消除多余的空白行，用rstrip().\r
\r
***PI.txt***\r
\r
\`\`\`\r
3.415926535\r
  897932384\r
  626433832\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
filename = 'PI.txt'\r
\r
with open(filename) as file_object:\r
    for line in file_object:\r
        print(line.rstrip())\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
filename = 'PI.txt'\r
\r
with open(filename) as file_object:\r
    lines = file_object.readlines()\r
\r
for line in lines:\r
    print(line.rstrip)\r
\`\`\`\r
\r
------\r
\r
#### 8.1.4 使用文件内容\r
\r
\`\`\`python\r
filename = 'PI.txt'\r
\r
with open(filename) as file_object:\r
    lines = file_object.readlines()\r
    \r
pi_string = ''\r
for line in lines:\r
    pi_string += line.strip()\r
\r
print(pi_string)\r
print("PI Length: " + str(len(pi_string)))\r
\`\`\`\r
\r
------\r
\r
#### 8.1.5 截取圆周率位数\r
\r
\`\`\`python\r
filename = 'PI.txt'\r
\r
with open(filename) as file_object:\r
    lines file_object.readlines()\r
    \r
pi_string = ''\r
for line in lines:\r
    pi_string += line.strip()\r
\r
print(pi_string[:52] + "...")\r
print("PI Length: " + str(len(pi_string)))\r
\`\`\`\r
\r
------\r
\r
### 8.2 写入文件\r
\r
- 保存数据的最简单的方式之一是将其写入到文件中.\r
- 通过将输出写入文件，即便关闭包含程序输出的终端窗口，这些输出也依然存在.\r
- 开发者可以在程序结束运行后查看这些输出，可以和别人分享输出文件，还可以编写程序来将这些输出读取到内存中并进行处理.\r
\r
------\r
\r
#### 8.2.1 写入空文件\r
\r
注意：Python只能将字符串写入文本文件，要将数值数据存储到文本文件中，必须先使用函数str( )将其转换为字符串格式.\r
\r
\`\`\`python\r
filename = 'programming.txt'\r
\r
with open(filename, 'w') as file_object:\r
    file_object.write("I love programming.")\r
\`\`\`\r
\r
\`\`\`\r
I love programming.\r
\`\`\`\r
\r
------\r
\r
#### 8.2.2 写入多行数据\r
\r
注意：要每一个字符串占一行，这个时候就需要换行符 >> \\n\r
\r
\`\`\`python\r
filename = 'programming.txt'\r
\r
with open(filename, 'w') as file_object:\r
    file_object.write("I love programming.\\n")\r
    file_object.write("I love creating new games.\\n")\r
\`\`\`\r
\r
\`\`\`\r
I love programming.\r
I love creating new games.\r
\`\`\`\r
\r
------\r
\r
#### 8.2.3 将信息追加到文件\r
\r
如果需要给文件添加内容，而不是覆盖原有的内容，可以使用追加的方式打开文件；\r
\r
\`\`\`python\r
filename = 'programming.txt'\r
\r
with open(filename, 'a') as file_object:\r
    file_object.write("I also love finding meaning in large datasets.\\n")\r
    file_object.write("I love creating app that can run in a browser.\\n")\r
\`\`\`\r
\r
\`\`\`\r
I love programming.\r
I love creating new games.\r
I also love finding meaning in large datasets.\r
I love creating app that can run in a browser.\r
\`\`\`\r
\r
------\r
\r
### 8.3 异常\r
\r
- 异常的特殊对象来管理程序执行期间发生的错误；\r
- Python在处理py文件的时候，发生的错误，它都会创建一个异常对象；\r
- 如果开发者编写了处理该异常的代码，程序将继续运行；\r
- 如果开发者未对异常进行处理，程序将停止，并显示traceback，其中包含有关异常的报告.\r
\r
------\r
\r
#### 8.3.1 使用异常避免崩溃\r
\r
- 使用try-except代码块，来处理异常导致的程序崩溃.\r
- 在except语句里面使用pass关键字，表示当遇到错误，什么都不用管直接跳过异常.\r
\r
\`\`\`python\r
# 原程序\r
# 当输入0的时候，程序会报错，程序被强制性停止\r
print("Give me two numbers, and I'll divide them.")\r
print("Enter 'Q' to quit.")\r
\r
while True:\r
    first_number = input("\\nFirst number: ")\r
    if first_number == 'Q':\r
        break\r
    second_number = input("\\nSecond number: ")\r
    if second_number == 'Q':\r
        break\r
    answer = int(first_number) / int(second_number)\r
    print(answer)\r
\`\`\`\r
\r
------\r
\r
**基于ZeroDivisionError的异常处理**\r
\r
\`\`\`python\r
# 使用try-except改进程序\r
print("Give me two numbers, and I'll divide them.")\r
print("Enter 'Q' to quit.")\r
\r
while True:\r
    first_number = input("\\nFirst number: ")\r
    if first_number == 'Q':\r
        break\r
    second_number = input("\\nSecond number: ")\r
    if second_number == 'Q':\r
        break\r
    try:\r
    	answer = int(first_number) / int(second_number)\r
    except ZeroDivisionError:\r
        print("You can't divide by 0!")\r
    else:\r
    	print(answer)\r
\`\`\`\r
\r
------\r
\r
#### 8.3.2 处理FileNotFoundError异常\r
\r
\`\`\`python\r
filename = 'alice.txt'\r
\r
try:\r
    with open(filename) as file:\r
        contents = file.read()\r
except FileNotFoundError:\r
    msg = "Sorry, the file " + filename + " does not exist."\r
    print(msg)\r
\`\`\`\r
\r
\`\`\`\r
>> Sorry, the file alice.txt does not exist.\r
\`\`\`\r
\r
------\r
\r
#### 8.3.3 分析文本\r
\r
| 函数名       | 作用                                 |\r
|-----------|------------------------------------|\r
| split(  ) | 以空格为分隔符将字符串分拆成多个部分，并将这些部分都存储到一个列表中 |\r
\r
\`\`\`python\r
title = "Alice in Wonderland"\r
print(title.split())\r
\`\`\`\r
\r
\`\`\`\r
>> ['Alice', 'in', 'Wonderland']\r
\`\`\`\r
\r
------\r
\r
\`\`\`python\r
filename = 'alice.txt'\r
\r
try:\r
    with open(filename) as file:\r
        contents = file.read()\r
except FileNotFoundError:\r
    msg = "Sorry, the file " + filename + " does not exist."\r
    print(msg)\r
else:\r
    words = contents.split()\r
    num_words = len(words)\r
    print("The file " + filename + " has about " + str(num_words) + " words.")\r
\`\`\`\r
\r
\`\`\`\r
>> The file alice.txt has about 29461 words.\r
\`\`\`\r
\r
------\r
\r
#### 8.3.4 使用多个文件\r
\r
\`\`\`python\r
def count_words(filename):\r
    try:\r
        with open(filename) as file:\r
            contents = file.read()\r
    except FileNotFoundError:\r
        msg = "Sorry, the file " + filename + " does not exist."\r
        print(msg)\r
    else:\r
        words = contents.split()\r
        num_words = len(words)\r
        print("The file " + filename + " has about " + str(num_words) + " words.")\r
\r
\r
filenames = ['alice.txt', 'siddhartha.txt', 'moby_dick.txt', 'little_women.txt']\r
for filename in filenames:\r
    count_words(filename)\r
\`\`\`\r
\r
\`\`\`\r
>> The file alice.txt has about 29461 words.\r
>> Sorry, the file siddhartha.txt does not exist.\r
>> The file moby_dick.txt has about 215136 words.\r
>> The file little_women.txt has about 189079 words.\r
\`\`\`\r
\r
------\r
\r
### 8.4 存储数据\r
\r
一般来说，存储数据最常用的格式存储是JOSN数据格式；\r
\r
注意：JSON ( JavaScript Object Notation ) 格式最初是为JavaScript开发的，但随后成了一种常见格式，被包括Python在内的众多语言采用.\r
\r
------\r
\r
#### 8.4.1 使用 json.dump() 与 json.load()\r
\r
1. 使用json.dump()存储数据：\r
\r
\`\`\`python\r
import json\r
\r
numbers = [2, 3, 5, 7, 11, 13]\r
\r
filename = 'numbers.json'\r
with open(filename, 'w') as file:\r
    json.dump(numbers, file)\r
\`\`\`\r
\r
文件里面的信息：\r
\r
\`\`\`\r
[2, 3, 5, 7, 11, 13]\r
\`\`\`\r
\r
------\r
\r
2. 使用json.load()加载存储的数据：\r
\r
\`\`\`python\r
import json\r
\r
filename = 'numbers.json'\r
with open(filename) as file:\r
    numbers = json.load(file)\r
\r
print(numbers)\r
\`\`\`\r
\r
\`\`\`\r
>> [2, 3, 5, 7, 11, 13]\r
\`\`\`\r
\r
------\r
\r
#### 8.4.2 保存和读取用户生成的数据\r
\r
对于用户生成的数据，使用json保存会方便传输与读取，因为如果不以某种方式进行存储，等程序停止运行时用户的信息将丢失.\r
\r
1. 把数据存储后打印.\r
\r
\`\`\`python\r
import json\r
\r
username = input("What is you name? ")\r
filename = 'username.json'\r
with open(filename, 'w') as file:\r
    json.dump(username, file)\r
    print("We'll remember you when you come back, " + username + "!")\r
\`\`\`\r
\r
\`\`\`\r
>> What is your name? Eric\r
>> We'll remember you when you come back, Eric!\r
\`\`\`\r
\r
------\r
\r
2. 读取被存储的用户，并打印出来.\r
\r
\`\`\`python\r
import json\r
\r
filename = 'username.json'\r
\r
with open(filename) as file:\r
    username = json.load(file)\r
    print("welcome back, " + username + "!")\r
\`\`\`\r
\r
\`\`\`\r
>> Welcome back, Eric!\r
\`\`\`\r
\r
------\r
\r
3. 合并上面两个程序\r
\r
\`\`\`python\r
import json\r
\r
filename = 'username.json'\r
try:\r
    with open(filename) as file:\r
        username = json.load(file)\r
except FileNotFoundError:\r
    username = input("What is your name? ")\r
    with open(filename, "w") as file:\r
        json.dump(username, file)\r
        print("We'll remember you when you come back, " + username + "!")\r
else:\r
    print("Welcome back, " + username + "!")\r
\`\`\`\r
\r
第一次运行结果：\r
\r
\`\`\`\r
>> What is your name? Eric\r
>> We'll remember you when you come back, Eric!\r
\`\`\`\r
\r
第二次运行结果：\r
\r
\`\`\`\r
>> Welcome back, Eric!\r
\`\`\`\r
\r
------\r
\r
#### 8.4.3 重构\r
\r
- 代码能够正常的运行，但可以做进一步的改进，即将代码划分为一系列完成具体工作的函数，这样的过程被称为重构；\r
- 重构让代码更清晰、更易于理解、更容易拓展.\r
\r
\`\`\`python\r
import json\r
\r
def get_stored_username():\r
    filename = 'username.json'\r
    try:\r
        with open(filename) as file:\r
            username = json.load(file)\r
    except FileNotFoundError:\r
        return None\r
    else:\r
        return username\r
    \r
def greet_user():\r
    username = get_stored_username()\r
    if username:\r
        print("Welcome back, " + username + "!")\r
    else:\r
        username = input("what is your name?")\r
        filename = 'username.json'\r
        with open(filename, 'w') as file:\r
            json.dump(username, file)\r
            print("We'll remember you when you come back, " + username + "!")\r
\r
greet_user()\r
\`\`\`\r
\r
代码重构之后：\r
\r
\`\`\`python\r
import json\r
\r
def get_stored_username():\r
    filename = 'username.json'\r
    try:\r
        with open(filename) as file:\r
            username = json.load(file)\r
    except FileNotFoundError:\r
        return None\r
    else:\r
        return username\r
    \r
def get_new_username():\r
    username = input("What is you name? ")\r
    filename = 'username.json'\r
    with open(filename, 'w') as file:\r
        json.dump(username, file)\r
    return username\r
\r
def greet_user():\r
    username = get_stored_username()\r
    if username:\r
        print("Welcome back, " + username + "!")\r
    else:\r
        username = get_new_username()\r
        print("We'll remember you when you come back, " + username + "!")\r
\r
greet_user()\r
\`\`\`\r
\r
------\r
\r
## 9. 测试代码\r
\r
- 在编写函数或类时，还可以为其编写测试。通过测试，可以确定代码面对各种输入都能够按照要求的那样工作；\r
- 每一个开发者都会犯错误，因此每一个开发者都必须掌握测试代码的技能.\r
\r
------\r
\r
### 9.1 测试函数\r
\r
\`\`\`python\r
def get_formatted_name(first, last):\r
    full_name = first + ' ' + last\r
    return full_name.title()\r
\`\`\`\r
\r
\`\`\`python\r
from name_function import get_formatted_name\r
print("Enter 'Q' at any time to quit.\\nEnter 'K' at any time to keep going.")\r
while True:\r
    choose = input("Please, enter you choose: \\n")\r
    if choose == 'K':\r
        first = input("\\nPlease give me a first name: ")\r
        last = input("Please give me a last name: ")\r
        formatted_name = get_formatted_name(first, last)\r
        print("\\tNeatly formatted name: " + formatted_name + '.')\r
    elif choose == 'Q':\r
        break\r
    else:\r
        print("Please re-enter your selection.")\r
        \r
\`\`\`\r
\r
\`\`\`\r
>> Enter 'Q' at any time to quit.\r
>> Enter 'K' at any time to keep going.\r
>> \r
>> Please, enter you choose: K\r
>> Please give me a first name: janis\r
>> Please give me a last name: joplin\r
>> 		Neatly formatted name: Janis Joplin.\r
>> \r
>> Please, enter you choose: K\r
>> Please give me a first name: bob\r
>> Please give me a last name: dylan\r
>> 		Neatly formatted name: Bob Dylan.\r
>> \r
>> Please, enter you choose: Q\r
\`\`\`\r
\r
- Python标准库中的模块unittest提供了代码测试工具；\r
- 单元测试用于核实函数的某个方面没有问题；\r
- 测试用例是一组单元测试，单元测试一起核实函数在各种情形下的行为都符合要求；\r
- 良好的测试用例考虑到了函数可能收到的各种输入，包含针对所有这些情形的测试；\r
- 全覆盖式测试用例包含一套单元测试，涵盖了各种可能的函数所有方法.\r
\r
\`\`\`python\r
import unittest\r
from name_function import get_formatted_name\r
\r
class NamesTestCase(unittest.TestCase):\r
    def test_first_last_name(self):\r
        formatted_name = get_formatted_name('janis', 'joplin')\r
        self.assertEqual(formatted_name, 'Janis Joplin')\r
\r
unittest.main()\r
\`\`\`\r
\r
------\r
\r
### 9.2 测试类\r
\r
描述了6个常用的断言方法，使用这些方法可以核实返回的值等于或不等于预期的值、返回的值为True或False、返回的值在列表中或不在列表中.\r
\r
| 方法                      | 用途            |\r
|-------------------------|---------------|\r
| assertEqual(a, b)       | 核实 a == b     |\r
| assertNotEqual(a, b)    | 核实 a != b     |\r
| assertTrue(x)           | 核实x为Ture      |\r
| assertFalse(x)          | 核实x为False     |\r
| assertIn(item, list)    | 核实item在list中  |\r
| assertNotIn(item, list) | 核实item不在list中 |\r
\r
\`\`\`python\r
# survey.py\r
class AnonymousSurvey():\r
    def __init__(self, question):\r
        self.question question\r
        self.reponses = []\r
    \r
    def show_question(self):\r
        print(self.question)\r
    \r
    def store_response(self, new_response):\r
        self.responses.append(new_response)\r
    \r
    def show_results(self):\r
        print("Survey results: ")\r
        for response in self.responses:\r
            print('- ' + response)\r
        \r
\`\`\`\r
\r
\`\`\`python\r
from survey import AnonymousSurvey\r
\r
question = "What language did you first learn to speak?"\r
my_survey = AnonymousSurvey(question)\r
\r
my_survey.show_question()\r
print("Enter 'Q' at any time to quit.\\n")\r
while True:\r
    response = input("Language: ")\r
    if response == 'Q':\r
        break\r
    my_survay.store_response(response)\r
\r
print("\\nThank you to everyone who participated in the survey!")\r
my_survay.show_results()\r
\`\`\`\r
\r
\`\`\`\r
>> What language did you first learn to speak?\r
>> Enter 'Q' at any time to quit.\r
>> \r
>> Language: English\r
>> Language: Spanish\r
>> Language: Mandarin\r
>> Language: Q\r
>>\r
>> Thank you to everyone who participated in the survey!\r
>> Survey results: \r
>> - English\r
>> - Spanish\r
>> - Mandarin\r
\`\`\`\r
\r
------\r
\r
\r
\r
**测试AnonymousSurvey类**\r
\r
\`\`\`python\r
import unittest\r
from survey import AnonymousSurvey\r
\r
class TestAnonymousSurvey(unittest.TestCase):\r
    \r
    def test_store_three_responses(self):\r
        question = "What language did you first learn to speak?"\r
        my_survey = ['English', 'Spanish', 'Mandarin']\r
        for response in responses:\r
            my_survey.store_response(response)\r
        \r
        for response in responses:\r
            self.assertIn(response, my_survey.responses)\r
\r
unittest.main()\r
\`\`\`\r
\r
- 利用方法setUp( )，来初始化测试参数；\r
- 创建一个调查对象，创建一个答案列表.\r
\r
\`\`\`python\r
import unittest\r
from survey import AnonymousSurvey\r
\r
class TestAnonymousSurvey(unittest.TestCase):\r
    \r
    def setUp(self):\r
        question = "What language did you first learn to speak?"\r
        self.my_survey = AnonymousSurvey(question)\r
        self.responses = ['English', 'Spanish', 'Mandarin']\r
	\r
    def test_store_three_responses(self):\r
        for response in self.responses:\r
            my_survey.store_response(response)\r
        \r
        for response in self.responses:\r
            self.assertIn(response, my_survey.responses)\r
\r
unittest.main()\r
\r
\`\`\`\r
\r
运行测试用例时，每完成一个单元测试，Python都会打印一个字符：\r
\r
- 测试通过时打印一个 ‘ . ’\r
- 测试引发错误时打印一个 ‘ E ’\r
- 测试导致断言失败时打印一个 ‘ F ’\r
\r
------\r
\r
`,Nl=[{id:"1",title:"Python 编程指南",date:"2024-03-15",excerpt:"Python 基础语法和编程技巧指南。",content:Qy,tags:["Python","Programming","Beginner"]},{id:"2",title:"Git 分支命名规则",date:"2024-03-10",excerpt:"规范化的 Git 分支命名规范和最佳实践。",content:Yy,tags:["Git","Version Control","Best Practices"]}],Ry=`<div style="text-align: center;">\r
\r
## 忆思首\r
\r
吾坐台前思旧事，月光透雾照台前。\r
\r
感伤往事催泪下，哭过笑过封尘心！\r
\r
门前柳枝随风飘，枯叶残花润入土。\r
\r
事如诸多烦心志，明了知了又如何？\r
\r
</div>\r
`,Gy=`<div style="text-align: center;">\r
\r
## 别离\r
\r
亭院门前叶纷飞，落日西下人憔悴。\r
\r
晚霞夕阳终散去，残月寒风凝叶霜。\r
\r
盏灯落尽千辉絮，纸上终是戚戚言。\r
\r
世间百态为情生，唯我一人对愁眠。\r
\r
</div>\r
`,Xy=`Intelligent Information Management System (IIMS) - AI驱动的智能信息管理平台。\r
\r
这是一个综合性的多功能集成平台，旨在提供高效、智能的信息管理解决方案。\r
\r
## 技术栈\r
\r
### 前端技术栈\r
\r
| 技术           | 版本     | 说明           |\r
|--------------|--------|--------------|\r
| Vue          | 3.5.18 | 前端框架         |\r
| Vue Router   | 4.0.13 | 路由管理         |\r
| Pinia        | 3.0.2  | 状态管理         |\r
| Vuex         | 4.1.0  | 状态管理         |\r
| Element Plus | 2.13.2 | UI 组件库       |\r
| Vite         | 7.1.11 | 构建工具         |\r
| TypeScript   | 5.8.0  | 类型系统         |\r
| Tailwind CSS | 4.0.15 | CSS 框架       |\r
| Vditor       | 3.10.9 | Markdown 编辑器 |\r
| ECharts      | 5.6.0  | 数据可视化        |\r
| Axios        | 1.13.5 | HTTP 客户端     |\r
\r
### 后端技术栈\r
\r
| 技术           | 版本       | 说明      |\r
|--------------|----------|---------|\r
| Spring Boot  | 3.5.0    | 后端框架    |\r
| Java         | 17       | 开发语言    |\r
| MyBatis Plus | 3.5.10.1 | ORM 框架  |\r
| Spring AI    | 1.1.2    | AI 集成框架 |\r
| Sa-Token     | 1.34.0   | 权限认证框架  |\r
| MySQL        | 9.0.0    | 关系型数据库  |\r
| PostgreSQL   | 42.7.10  | 关系型数据库  |\r
| Redis        | 2.7.2    | 缓存数据库   |\r
| MinIO        | 8.5.12   | 对象存储    |\r
| Knife4j      | 3.0.3    | API 文档  |\r
| Lombok       | 1.18.20  | 代码简化工具  |\r
\r
## 核心功能\r
\r
### 1. AI 对话管理功能\r
\r
| 功能    | 状态   | 说明   |\r
|-------|------|------|\r
| 对话删除  | ✅    | 已完成  |\r
| 对话复制  | ✅    | 已完成  |\r
| 话题置顶  | ❎️   | 待开发  |\r
| 话题重命名 | ❎️   | 待开发  |\r
| 分享对话  | ❎️   | 待开发  |\r
| 生成历史  | ❎️   | 待开发  |\r
| 对话收藏  | ✅/❎️ | 部分完成 |\r
| 重新生成  | ❎️   | 待开发  |\r
\r
### 2. AI 智能功能\r
\r
| 功能     | 状态   | 说明                  |\r
|--------|------|---------------------|\r
| 内部系统问答 | ❎️   | MCP、Tools 集成        |\r
| 权限集成   | ❎️   | 用户权限验证              |\r
| 对话问答   | ✅    | 基础问答功能              |\r
| 知识库问答  | ✅/❎️ | 内部文档知识库 ✅，用户上传文档 ❎️ |\r
| 文章问答   | ❎️   | MD 文档内容解析           |\r
| 文档问答   | ✅    | 文档内容问答              |\r
\r
### 3. AI 模型支持\r
\r
| 平台       | 状态 | 说明      |\r
|----------|----|---------|\r
| Ollama   | ✅  | 本地模型支持  |\r
| Deepseek | ✅  | 云端模型支持  |\r
| OpenAI   | ✅  | vllm 支持 |\r
\r
## 技术特性\r
\r
| 特性    | 说明               |\r
|-------|------------------|\r
| 权限管理  | 基于角色的访问控制，敏感信息保护 |\r
| AI 集成 | 关键词提取，智能接口调用     |\r
| 数据安全  | 权限验证，敏感信息过滤      |\r
| 流式输出  | 支持实时响应           |\r
\r
## 开发状态\r
\r
系统正在积极开发中，部分核心功能已完成，其他模块正在持续优化和改进。\r
\r
[![Star History Chart](https://api.star-history.com/image?repos=Aitenry/IIMS-By-AI&amp;type=date&amp;legend=top-left)](https://www.star-history.com/?repos=Aitenry%2FIIMS-By-AI&amp;type=date&amp;legend=top-left)\r
`,Ly=`## 个人 AI 工作台\r
\r
RytenBench 是一款专为个人用户设计的 AI 工作台，集成了日常工作和学习中常用的各种功能，旨在提高个人效率和生产力。它使用\r
Electron、React 和 TypeScript 构建为跨平台桌面应用程序，以 PGLite（PostgreSQL in WebAssembly）作为本地数据库，并深度集成\r
LangChain + LangGraph + deepagents 打造智能 AI 助手。\r
\r
### 技术栈\r
\r
| 技术               | 说明                               |\r
|------------------|----------------------------------|\r
| Electron         | 桌面应用框架                           |\r
| electron-vite    | 新一代 Electron 构建工具                |\r
| React 19         | 前端框架                             |\r
| TypeScript       | 开发语言                             |\r
| Ant Design 6     | UI 组件库                           |\r
| Tailwind CSS 4   | CSS 框架                           |\r
| Tailwind CSS 4   | CSS 框架                           |\r
| LangChain        | AI 框架                            |\r
| LangGraph        | AI 工作流编排                         |\r
| deepagents       | 子代理编排                            |\r
| ECharts 6        | 数据可视化（知识图谱）                      |\r
| electron-store   | 配置持久化                            |\r
| electron-updater | 应用自动更新                           |\r
| electron-builder | 应用打包                             |\r
| PGLite           | 本地数据库（PostgreSQL in WebAssembly） |\r
\r
### 核心特性\r
\r
| 特性             | 说明                                                                                                                                                       |\r
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| Home Canvas    | 可视化桌面画布，文档、Wiki、待办以交互式节点展示，节点位置跨会话持久化                                                                                                                    |\r
| 文档管理           | Markdown 文档创建编辑、图片嵌入、全文搜索，支持 TXT/MD/DOCX/HTML 导入与 Markdown 导出                                                                                            |\r
| Wiki           | 层级目录树组织文档，文档间多对多关联，支持归档管理                                                                                                                                |\r
| 知识图谱           | 基于 LLM 自动抽取实体与关系、实体合并与二次扫描（gleaning），ECharts 6 可视化                                                                                                       |\r
| AI 聊天助手        | 流式响应、深度思考（reasoning）展示、工具调用、子代理编排，支持工作区级聊天历史与技能集成                                                                                                        |\r
| Agent 系统       | 按工作区配置子代理（自定义提示词与工具选择），主代理支持可配置工具与技能                                                                                                                     |\r
| 技能系统           | 从本地目录加载自定义技能，可在会话中启用/停用技能                                                                                                                                |\r
| 多 Provider LLM | 支持 OpenAI、Anthropic、DeepSeek、Gemini、Vertex AI、Mistral、Ollama、OpenRouter、xAI、Bedrock、Cloudflare Workers AI 及任意 OpenAI 兼容端点，API Key 使用 AES-256-GCM 加密并绑定本机 |\r
| 计划             | 甘特图任务管理、层级任务树、任务依赖、优先级与完成状态跟踪                                                                                                                            |\r
| 天气             | Open-Meteo 实时天气与多日预报，electron-store 离线缓存                                                                                                                 |\r
| 音乐播放器          | 文件夹式歌单、播放控制、喜欢/最近播放、侧边栏迷你播放器，自动提取音频元数据与封面                                                                                                                |\r
| 主题切换           | 亮色/暗色/自动主题，自动模式按时间段切换（6:00 ~ 18:00）                                                                                                                      |\r
| 自定义窗口框架        | 无边框窗口，含标题栏、侧边栏导航、底栏与右栏面板                                                                                                                                 |\r
| 锁屏             | MD5 哈希密码锁屏，按 Esc 触发，保护隐私                                                                                                                                 |\r
| 自动更新           | 基于 electron-updater 的应用自动更新                                                                                                                              |\r
| 现代 UI          | Ant Design 6 + Tailwind CSS 4 打造的简洁响应式界面                                                                                                                 |\r
| 跨平台            | 原生运行在 Windows、macOS 和 Linux 上                                                                                                                            |\r
\r
### 功能模块\r
\r
#### 首页（Home Canvas）\r
\r
| 功能点   | 详细说明                      |\r
|-------|---------------------------|\r
| 可视化画布 | 文档、Wiki、待办以交互式节点展示，支持拖拽布局 |\r
| 节点持久化 | 节点位置跨会话保存                 |\r
| 快速访问  | 通过节点快速打开文档、Wiki 与待办       |\r
\r
#### 文档（Documents）\r
\r
| 功能点  | 详细说明                                |\r
|------|-------------------------------------|\r
| 文档管理 | Markdown 文档的创建、编辑与管理                |\r
| 导入导出 | 支持 TXT、MD、DOCX、HTML 导入，导出为 Markdown |\r
| 全文搜索 | 文档内容全文搜索                            |\r
| 图片嵌入 | 文档内嵌图片支持                            |\r
\r
#### Wiki\r
\r
| 功能点  | 详细说明       |\r
|------|------------|\r
| 目录树  | 层级目录树组织文档  |\r
| 文档关联 | 跨目录多对多关联文档 |\r
| 归档管理 | Wiki 归档与恢复 |\r
\r
#### 知识图谱\r
\r
##### 构建流程\r
\r
| 功能点  | 详细说明                 |\r
|------|----------------------|\r
| 自动构建 | 基于 LLM 自动构建知识节点和关系图谱 |\r
| 实体抽取 | 自动抽取文档中的实体与关系        |\r
| 二次扫描 | gleaning 机制补扫遗漏实体    |\r
\r
##### 图谱管理\r
\r
| 功能点   | 详细说明                |\r
|-------|---------------------|\r
| 图谱可视化 | ECharts 6 交互式知识图谱展示 |\r
| 增量更新  | 新文档可追加到已有图谱         |\r
| 实体合并  | 跨文档实体去重与合并          |\r
\r
#### 计划（Planner）\r
\r
| 功能点  | 详细说明                |\r
|------|---------------------|\r
| 任务管理 | 层级任务树、依赖关系、优先级与完成状态 |\r
| 甘特图  | 甘特图可视化任务时间线         |\r
\r
##### 待办事项\r
\r
| 功能点  | 详细说明       |\r
|------|------------|\r
| 任务列表 | 展示所有待办任务   |\r
| 任务创建 | 添加新的待办任务   |\r
| 任务状态 | 标记任务完成/未完成 |\r
\r
#### 天气\r
\r
| 功能点  | 详细说明                 |\r
|------|----------------------|\r
| 实时天气 | 显示本地实时天气（Open-Meteo） |\r
| 天气预报 | 多日天气预测，支持离线缓存        |\r
| 生活指数 | 穿衣、紫外线等生活指数          |\r
\r
##### 数据源与缓存\r
\r
| 功能点  | 详细说明                      |\r
|------|---------------------------|\r
| 数据来源 | Open-Meteo 免费天气 API       |\r
| 离线缓存 | 数据缓存于 electron-store，离线可用 |\r
\r
#### AI 聊天助手\r
\r
| 功能点   | 详细说明                           |\r
|-------|--------------------------------|\r
| AI 对话 | 自然语言对话，支持流式响应                  |\r
| 深度思考  | 展示推理（reasoning）过程              |\r
| 工具调用  | 内置文档、Wiki、图谱、音乐、计划、待办、天气、时间等工具 |\r
| 子代理编排 | 基于 deepagents 的子代理任务编排         |\r
| 上下文记忆 | 按工作区持久化聊天历史                    |\r
| 附件支持  | 支持图片与文档附件                      |\r
\r
#### 音乐\r
\r
| 功能点   | 详细说明                  |\r
|-------|-----------------------|\r
| 音乐播放  | 播放本地音乐文件，文件夹式歌单管理     |\r
| 播放控制  | 播放/暂停/切歌/音量控制、喜欢与最近播放 |\r
| 迷你播放器 | 侧边栏迷你播放器组件            |\r
| 元数据提取 | 自动提取音频元数据与封面          |\r
\r
#### Agent 与技能系统\r
\r
| 功能点   | 详细说明                |\r
|-------|---------------------|\r
| 子代理配置 | 按工作区配置子代理系统提示词与工具选择 |\r
| 技能加载  | 从本地目录加载技能，会话中可启停    |\r
\r
### 开发状态\r
\r
项目正在积极开发中，这是一个全新的个人 AI 工作台项目，旨在为用户提供一个集成了多种功能的高效工作环境。\r
`,Ml=[{id:"1",title:"RytenBench",date:"2026-02-17",weather:"多云",mood:"思考",excerpt:"发布下一个项目的规划与定位！",content:Ly,tags:["项目","AI","工具","工作区"]},{id:"2",title:"IIMS-By-AI v0.1.0",date:"2026-01-31",weather:"晴",mood:"激动",excerpt:"今天终于完成了 IIMS-By-AI 项目的第一个版本！",content:Xy,tags:["项目","AI","智能系统","IIMS"]},{id:"3",title:"题记-2020.12.28.夜",date:"2020-12-28",weather:"夜",mood:"别离",excerpt:"别离 - 亭院门前叶纷飞，落日西下人憔悴。",content:Gy,tags:["诗","别离","感悟"]},{id:"4",title:"题记-2020.6.12.夜",date:"2020-06-12",weather:"夜",mood:"感伤",excerpt:"忆思首 - 吾坐台前思旧事，月光透雾照台前。",content:Ry,tags:["诗","感悟","生活"]}],Hm=["home","diaries","articles"],Vy=({activeSection:p,isDarkMode:S,onToggleTheme:z,handleNavClick:m})=>{const{t:T}=wn(),A=Vr(),[W,sn]=K.useState(!1),[tn,L]=K.useState(!1),[Hn,D]=K.useState(""),[C,Kn]=K.useState(!1),[xn,Cn]=K.useState(0),Ne=K.useRef(null),Se=K.useRef(null),{scrollY:xt}=bc();wm(xt,"change",N=>sn(N>24)),K.useEffect(()=>(document.body.style.overflow=tn||C?"hidden":"",()=>{document.body.style.overflow=""}),[tn,C]),K.useEffect(()=>{const N=w=>{(w.metaKey||w.ctrlKey)&&w.key.toLowerCase()==="k"&&(w.preventDefault(),L(mn=>!mn))};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[]),K.useEffect(()=>{if(tn){const N=setTimeout(()=>Ne.current?.focus(),60);return()=>clearTimeout(N)}},[tn]);const fn=Hn.trim().toLowerCase(),kn=fn?Nl.filter(N=>N.title.toLowerCase().includes(fn)||N.excerpt.toLowerCase().includes(fn)||N.tags.some(w=>w.toLowerCase().includes(fn))):[],Jn=fn?Ml.filter(N=>N.title.toLowerCase().includes(fn)||N.excerpt.toLowerCase().includes(fn)||N.tags.some(w=>w.toLowerCase().includes(fn))):[],Wn=[...Jn.map(N=>({to:`/diary/${N.id}`,title:N.title,excerpt:N.excerpt})),...kn.map(N=>({to:`/article/${N.id}`,title:N.title,excerpt:N.excerpt}))],ue=K.useRef(Wn),Yn=K.useRef(xn);K.useEffect(()=>{ue.current=Wn}),K.useEffect(()=>{Yn.current=xn}),K.useEffect(()=>{if(!tn)return;const N=w=>{if(w.key==="Escape"){L(!1);return}const mn=ue.current;if(mn.length!==0){if(w.key==="ArrowDown")w.preventDefault(),Cn(zn=>Math.min(zn+1,mn.length-1));else if(w.key==="ArrowUp")w.preventDefault(),Cn(zn=>Math.max(zn-1,0));else if(w.key==="Enter"){w.preventDefault();const zn=mn[Yn.current];zn&&(L(!1),D(""),A(zn.to))}}};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[tn,A]),K.useEffect(()=>{Se.current?.scrollIntoView({block:"nearest"})},[xn]);const ce="flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)] cursor-pointer",Xt=()=>fn?Jn.length===0&&kn.length===0?c.jsxs("div",{className:"py-14 text-center",children:[c.jsx("p",{className:"text-sm font-medium",children:T("navigation.noArticlesFound")}),c.jsx("p",{className:"mt-1 eyebrow text-mute",children:T("navigation.tryADifferentSearchTerm")})]}):c.jsxs("div",{className:"space-y-6",children:[Jn.length>0&&c.jsxs("div",{children:[c.jsx("h4",{className:"eyebrow mb-1 px-1 text-mute",children:T("navigation.diaries")}),c.jsx("div",{className:"h-rule"}),Jn.map((N,w)=>{const mn=w===xn;return c.jsxs(_t,{prefetch:"intent",to:`/diary/${N.id}`,ref:mn?zn=>{Se.current=zn}:void 0,onClick:()=>{L(!1),D("")},className:`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${mn?"bg-soft":""}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:`truncate font-display text-base font-medium ${mn?"text-[var(--accent)]":""}`,children:N.title}),c.jsx("p",{className:"mt-0.5 line-clamp-1 text-xs text-mute",children:N.excerpt})]}),c.jsx(Em,{size:16,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"})]},`d-${N.id}`)})]}),kn.length>0&&c.jsxs("div",{children:[c.jsx("h4",{className:"eyebrow mb-1 px-1 text-mute",children:T("navigation.articles")}),c.jsx("div",{className:"h-rule"}),kn.map((N,w)=>{const mn=Jn.length+w===xn;return c.jsxs(_t,{prefetch:"intent",to:`/article/${N.id}`,ref:mn?zn=>{Se.current=zn}:void 0,onClick:()=>{L(!1),D("")},className:`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${mn?"bg-soft":""}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:`truncate font-display text-base font-medium ${mn?"text-[var(--accent)]":""}`,children:N.title}),c.jsx("p",{className:"mt-0.5 line-clamp-1 text-xs text-mute",children:N.excerpt})]}),c.jsx(Em,{size:16,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"})]},`a-${N.id}`)})]})]}):c.jsx("div",{className:"py-14 text-center eyebrow text-mute",children:T("navigation.startTypingToSearch")});return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${W?"border-b border-line bg-[var(--paper)]/90 backdrop-blur-md":"border-b border-transparent"}`,children:c.jsxs("nav",{className:"mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8",children:[c.jsxs(_t,{to:"/home",onClick:N=>m(N,"home"),className:"font-display text-xl font-semibold tracking-tight transition-colors duration-200 hover:text-[var(--accent)]",children:["Aitenry",c.jsx("span",{className:"text-accent",children:"."})]}),c.jsx("div",{className:"hidden items-center gap-8 md:flex",children:Hm.map((N,w)=>{const mn=p===N;return c.jsxs(_t,{to:`/${N}`,onClick:zn=>m(zn,N),className:`eyebrow link-underline transition-colors duration-200 ${mn?"text-accent":"text-mute hover:text-ink"}`,children:[c.jsxs("span",{className:"mr-1 opacity-60",children:["0",w+1]}),T(`navigation.${N}`)]},N)})}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>L(!0),"aria-label":T("navigation.search"),className:ce,children:c.jsx(Sy,{size:16})}),c.jsx("button",{onClick:z,"aria-label":T("navigation.toggleTheme"),className:`${ce} hidden sm:flex`,children:S?c.jsx(Tm,{size:16}):c.jsx(Am,{size:16})}),c.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:`${ce} hidden sm:flex`,children:c.jsx(Lr,{size:16})}),c.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:`${ce} hidden sm:flex`,children:c.jsx(pc,{size:16})}),c.jsx("button",{onClick:()=>Kn(N=>!N),"aria-label":"menu",className:`${ce} md:hidden`,children:C?c.jsx(jm,{size:17}):c.jsx(zy,{size:17})})]})]})}),c.jsx(yc,{children:C&&c.jsx(ie.div,{initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.25,ease:"easeOut"},className:"fixed inset-0 z-50 bg-[var(--paper)] md:hidden",children:c.jsxs("div",{className:"flex h-full flex-col px-6 pb-10 pt-24",children:[Hm.map((N,w)=>c.jsx(ie.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.06*w,duration:.35},className:"border-b border-line",children:c.jsxs(_t,{to:`/${N}`,onClick:mn=>{m(mn,N),Kn(!1)},className:"flex items-baseline gap-4 py-5",children:[c.jsxs("span",{className:"eyebrow text-accent",children:["0",w+1]}),c.jsx("span",{className:"font-display text-4xl font-semibold",children:T(`navigation.${N}`)})]})},N)),c.jsxs(ie.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25},className:"mt-auto flex items-center justify-between",children:[c.jsxs("div",{className:"flex gap-3",children:[c.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(Lr,{size:19})}),c.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(pc,{size:19})})]}),c.jsxs("button",{onClick:z,className:"eyebrow flex h-11 items-center gap-2 border border-line px-4 text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:[S?c.jsx(Tm,{size:16}):c.jsx(Am,{size:16}),T("navigation.toggleTheme")]})]})]})})}),c.jsx(yc,{children:tn&&c.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},className:"fixed inset-0 z-50 bg-[var(--paper)]/70 backdrop-blur-sm",onClick:()=>L(!1),children:c.jsxs(ie.div,{initial:{opacity:0,y:-14},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.25,ease:"easeOut"},className:"mx-auto mt-24 w-[calc(100%-2rem)] max-w-2xl border border-line bg-[var(--paper)] p-6 shadow-[8px_8px_0_0_var(--ink)] sm:p-8",onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"eyebrow text-accent",children:T("navigation.search")}),c.jsx("button",{onClick:()=>L(!1),"aria-label":"close",className:"flex h-8 w-8 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(jm,{size:16})})]}),c.jsxs("div",{className:"mt-5 flex items-center gap-3 border-b-2 border-[var(--ink)] pb-3",children:[c.jsx(Ty,{size:18,className:"text-mute"}),c.jsx("input",{ref:Ne,type:"text",value:Hn,onChange:N=>{D(N.target.value),Cn(0)},placeholder:T("navigation.typeToSearch"),className:"h-9 flex-1 bg-transparent font-mono text-base text-ink placeholder:text-mute focus:outline-none"}),c.jsx("kbd",{className:"hidden border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mute sm:block",children:"esc"})]}),c.jsx("div",{className:"nice-scroll mt-4 max-h-[52vh] overflow-y-auto",children:Xt()}),c.jsx("p",{className:"eyebrow mt-4 border-t border-line pt-3 text-mute",children:T("navigation.kbdHint")})]})})})]})},Zy=({scaleX:p})=>c.jsx(ie.div,{className:"fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[var(--accent)]",style:{scaleX:p},"aria-hidden":!0}),Ky=["home","diaries","articles"],ky=()=>{const{t:p}=wn(),S=new Date().getFullYear();return c.jsxs("footer",{className:"relative z-10 border-t border-line",children:[c.jsx("div",{className:"mx-auto max-w-6xl px-4 py-20 sm:px-6 md:px-8",children:c.jsxs("div",{className:"flex flex-col justify-between gap-10 md:flex-row md:items-end",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow text-accent",children:["/ ",p("footer.eyebrow")]}),c.jsx("h2",{className:"mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl",children:p("footer.closing")})]}),c.jsxs("div",{className:"flex flex-col gap-4 md:items-end",children:[c.jsxs("div",{className:"flex gap-3",children:[c.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:c.jsx(Lr,{size:19})}),c.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:c.jsx(pc,{size:19})})]}),c.jsx("nav",{className:"flex gap-6",children:Ky.map(z=>c.jsx(_t,{to:`/${z}`,className:"eyebrow link-underline text-mute transition-colors hover:text-ink",children:p(`navigation.${z}`)},z))})]})]})}),c.jsx("div",{className:"border-t border-line",children:c.jsx("div",{className:"mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 md:px-8",children:c.jsxs("p",{className:"eyebrow text-mute",children:["© ",S," Aitenry · ",p("footer.rights")]})})})]})},Jy=()=>{const{t:p}=wn(),[S,z]=K.useState(!1),{scrollY:m}=bc();return wm(m,"change",T=>z(T>480)),c.jsx(yc,{children:S&&c.jsx(ie.button,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:12},transition:{duration:.2},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":p("common.backToTop"),title:p("common.backToTop"),className:"fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-[var(--paper)] text-ink transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:c.jsx(Ay,{size:17})})})},Wy=()=>c.jsx("div",{"aria-hidden":!0,className:"noise"}),Fy=({value:p,duration:S=1.4,suffix:z="",className:m=""})=>{const T=K.useRef(null),A=fy(T,{once:!0,margin:"-40px"}),[W,sn]=K.useState(0);return K.useEffect(()=>{if(!A)return;const tn=my(0,p,{duration:S,ease:"easeOut",onUpdate:L=>sn(L)});return()=>tn.stop()},[A,p,S]),c.jsxs("span",{ref:T,className:`font-mono tabular-nums ${m}`,children:[String(Math.round(W)).padStart(2,"0"),z]})},gc=[.16,1,.3,1],Un=({children:p,delay:S=0,y:z=18,className:m=""})=>c.jsx(ie.div,{initial:{opacity:0,y:z},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:S,ease:gc},className:m,children:p}),Qm=[{id:1,title:"RytenBench",descriptionKey:"projects.rytenDescription",tech:["Electron","React","TypeScript","AI"],imageLight:"/ryten-light.svg",imageDark:"/ryten-dark.svg",github:"https://github.com/Aitenry/RytenBench",status:"active"},{id:2,title:"IIMS-By-AI",descriptionKey:"projects.iimsDescription",tech:["Java","Vue","SpringBoot","TypeScript","AI"],imageLight:"/iims-light.svg",imageDark:"/iims-dark.svg",github:"https://github.com/Aitenry/IIMS-By-AI",status:"acquired"}],Rm=[{name:"Java",level:90},{name:"Vue",level:79},{name:"JavaScript",level:79},{name:"TypeScript",level:73},{name:"React",level:72},{name:"Electron",level:70}],$y=({scrollToNextSection:p})=>{const{t:S}=wn(),z=Vr(),m=[{value:Nl.length,label:S("home.statsArticles")},{value:Ml.length,label:S("home.statsDiaries")},{value:Qm.length,label:S("home.statsProjects")},{value:Rm.length,label:S("home.statsSkills")}];return c.jsxs("section",{id:"home",className:"relative flex min-h-[calc(100svh-4rem)] flex-col justify-center px-4 py-20 sm:px-6 md:px-8",children:[c.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[c.jsxs("h1",{className:"mt-8 font-display text-[13vw] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl",children:[c.jsx("span",{className:"block overflow-hidden pb-1",children:c.jsx(ie.span,{initial:{y:"110%"},animate:{y:0},transition:{duration:.8,ease:gc},className:"block",children:S("home.headline1")})}),c.jsx("span",{className:"block overflow-hidden pb-2",children:c.jsxs(ie.span,{initial:{y:"110%"},animate:{y:0},transition:{duration:.8,delay:.12,ease:gc},className:"block italic",children:[S("home.headline2"),c.jsx("span",{className:"text-accent not-italic",children:"。"})]})})]}),c.jsx(Un,{delay:.3,children:c.jsx("p",{className:"mt-8 font-mono text-sm text-mute sm:text-base",children:S("home.roles")})}),c.jsx(Un,{delay:.38,children:c.jsxs("p",{className:"mt-3 font-mono text-sm sm:text-base",children:[c.jsx("span",{className:"blink mr-2 inline-block h-3 w-2 translate-y-0.5 bg-[var(--accent)]"}),S("home.nowPrefix")," ",c.jsx("a",{href:"https://github.com/Aitenry/RytenBench",target:"_blank",rel:"noopener noreferrer",className:"link-underline text-accent transition-opacity duration-200 hover:opacity-70",children:S("home.nowTarget")})]})}),c.jsx(Un,{delay:.46,children:c.jsxs("div",{className:"mt-10 flex flex-col gap-3 sm:flex-row",children:[c.jsxs("button",{onClick:()=>z("/articles"),className:"group inline-flex cursor-pointer items-center justify-center gap-2 border border-[var(--ink)] bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:[S("home.ctaArticles"),c.jsx(Zr,{size:16,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),c.jsxs("button",{onClick:()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}),className:"group inline-flex cursor-pointer items-center justify-center gap-2 border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-[var(--ink)]",children:[S("home.ctaProjects"),c.jsx(jy,{size:16,className:"transition-transform duration-300 group-hover:translate-y-0.5"})]})]})}),c.jsx(Un,{delay:.55,children:c.jsx("div",{className:"mt-20 grid grid-cols-2 border-t border-line sm:grid-cols-4",children:m.map((T,A)=>c.jsxs("div",{className:`px-4 py-6 ${A>0?"border-l border-line":""} ${A>=2?"border-t border-line sm:border-t-0":""}`,children:[c.jsx(Fy,{value:T.value,className:"text-3xl font-medium sm:text-4xl"}),c.jsx("p",{className:"eyebrow mt-2 text-mute",children:T.label})]},T.label))})})]}),c.jsx(ie.button,{onClick:p,"aria-label":S("home.scroll"),initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.6},className:"absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center",children:c.jsx(ie.span,{animate:{y:[0,10,0],opacity:[1,.3,1]},transition:{duration:1.8,repeat:1/0,ease:"easeInOut"},className:"block h-9 w-px bg-[var(--ink)]"})})]})},Gm=({children:p,className:S=""})=>c.jsx("span",{className:`eyebrow text-accent ${S}`,children:p}),Iy=()=>{const{t:p}=wn(),S=p("about.meta",{returnObjects:!0}),z=p("about.tags",{returnObjects:!0});return c.jsx("section",{id:"about",className:"h-rule px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:c.jsxs("div",{className:"mx-auto grid max-w-6xl gap-14 lg:grid-cols-12",children:[c.jsxs("div",{className:"lg:col-span-4",children:[c.jsx(Un,{children:c.jsxs(Gm,{children:["01 — ",p("about.eyebrow")]})}),c.jsx(Un,{delay:.05,children:c.jsx("h2",{className:"mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl",children:p("about.title")})}),c.jsx(Un,{delay:.12,children:c.jsx("dl",{className:"mt-12 border-t border-line",children:S.map((m,T)=>{const[A,W]=m.split(" · ");return c.jsxs("div",{className:"flex items-baseline justify-between gap-4 border-b border-line py-3.5",children:[c.jsx("dt",{className:"eyebrow text-mute",children:A}),c.jsx("dd",{className:"font-mono text-sm",children:W})]},T)})})})]}),c.jsxs("div",{className:"lg:col-span-7 lg:col-start-6",children:[c.jsx(Un,{delay:.1,children:c.jsx("p",{className:"text-lg leading-relaxed sm:text-xl",children:p("about.desc1")})}),c.jsx(Un,{delay:.16,children:c.jsx("p",{className:"mt-6 leading-relaxed text-mute",children:p("about.desc2")})}),c.jsx(Un,{delay:.22,children:c.jsx("blockquote",{className:"mt-14 border-l-2 border-[var(--accent)] pl-6",children:c.jsxs("p",{className:"font-display text-2xl italic leading-snug sm:text-3xl",children:["“",p("about.quote"),"”"]})})}),c.jsx(Un,{delay:.28,children:c.jsx("div",{className:"mt-10 flex flex-wrap gap-2",children:z.map(m=>c.jsx("span",{className:"border border-line px-3 py-1.5 font-mono text-xs text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",children:m},m))})})]})]})})},Kr=({index:p,label:S,title:z,extra:m,className:T=""})=>c.jsxs("div",{className:`flex items-end justify-between gap-6 ${T}`,children:[c.jsxs("div",{children:[c.jsxs(Gm,{children:[String(p).padStart(2,"0")," — ",S]}),c.jsx("h2",{className:"mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl",children:z})]}),m&&c.jsx("div",{className:"hidden pb-2 sm:block",children:m})]}),Py=()=>{const{t:p}=wn();return c.jsx("section",{id:"skills",className:"px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-6xl",children:[c.jsx(Kr,{index:2,label:p("skills.eyebrow"),title:p("skills.title")}),c.jsx("div",{className:"mt-14 border-b border-line",children:Rm.map((S,z)=>c.jsx(Un,{delay:z*.04,children:c.jsxs("div",{className:"group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-soft sm:py-6",children:[c.jsx("span",{className:"col-span-4 font-display text-lg font-medium transition-all duration-300 group-hover:italic group-hover:pl-1 sm:col-span-3 sm:text-xl",children:S.name}),c.jsx("div",{className:"col-span-5 h-[2px] overflow-hidden bg-[var(--line)] sm:col-span-7",children:c.jsx(ie.div,{initial:{width:0},whileInView:{width:`${S.level}%`},viewport:{once:!0},transition:{duration:1.1,delay:.15+z*.06,ease:"easeOut"},className:"h-full bg-[var(--accent)]"})}),c.jsxs("span",{className:"col-span-3 text-right font-mono text-sm text-mute sm:col-span-2",children:[String(S.level).padStart(2,"0"),"%"]})]})},S.name))})]})})},np=({children:p,href:S,className:z="",external:m=!1})=>c.jsxs("a",{href:S,...m?{target:"_blank",rel:"noopener noreferrer"}:{},className:`group link-underline inline-flex items-center gap-1.5 text-sm font-medium ${z}`,children:[p,c.jsx(Zr,{size:15,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),ep=({isDarkMode:p})=>{const{t:S}=wn();return c.jsx("section",{id:"projects",className:"h-rule bg-soft px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-6xl",children:[c.jsx(Kr,{index:3,label:S("projects.eyebrow"),title:S("projects.title")}),c.jsx("div",{className:"mt-14 grid gap-px border border-line bg-[var(--line)] md:grid-cols-2",children:Qm.map((z,m)=>c.jsx(Un,{delay:m*.08,className:"h-full",children:c.jsxs("a",{href:z.github,target:"_blank",rel:"noopener noreferrer",className:"group flex h-full flex-col bg-[var(--paper)] p-6 transition-colors duration-300 hover:bg-soft sm:p-8",children:[c.jsx("div",{className:"aspect-[16/8] overflow-hidden border border-line",children:c.jsx("img",{src:p?z.imageDark:z.imageLight,alt:z.title,loading:"lazy",className:"h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"})}),c.jsxs("div",{className:"mt-6 flex items-baseline justify-between gap-4",children:[c.jsx("h3",{className:"font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl",children:z.title}),c.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[c.jsx("span",{className:`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${z.status==="active"?"border-[var(--accent)] text-[var(--accent)]":"border-line text-mute"}`,children:z.status==="active"?S("projects.statusActive"):S("projects.statusAcquired")}),c.jsxs("span",{className:"font-mono text-xs text-mute",children:["NO.",String(z.id).padStart(2,"0")]})]})]}),c.jsx("p",{className:"mt-3 leading-relaxed text-mute",children:S(z.descriptionKey)}),c.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:z.tech.map(T=>c.jsx("span",{className:"border border-line px-2.5 py-1 font-mono text-[11px] text-mute",children:T},T))}),c.jsxs("div",{className:"mt-auto flex items-center justify-between pt-8",children:[c.jsx(np,{href:z.github,external:!0,children:S("projects.viewProject")}),c.jsx(Lr,{size:19,className:"text-mute transition-colors duration-300 group-hover:text-[var(--accent)]"})]})]})},z.id))})]})})},tp=({items:p,className:S=""})=>{const z=c.jsx("div",{className:"marquee-track items-center",children:[...p,...p].map((m,T)=>c.jsxs("span",{className:"mx-6 inline-flex items-center gap-6 whitespace-nowrap",children:[m,c.jsx("span",{"aria-hidden":!0,className:"text-[0.6em]",children:"✦"})]},T))});return c.jsx("div",{"aria-hidden":!0,className:`marquee overflow-hidden border-y border-[var(--accent)] bg-accent py-3 text-[var(--accent-ink)] ${S}`,children:c.jsx("div",{className:"eyebrow font-semibold",children:z})})},lp=({isDarkMode:p,scrollToNextSection:S})=>{const{t:z}=wn(),m=z("home.marquee",{returnObjects:!0});return c.jsxs(c.Fragment,{children:[c.jsx($y,{scrollToNextSection:S}),c.jsx("div",{className:"relative z-10 -mx-2 rotate-[-1.2deg] sm:mx-0",children:c.jsx(tp,{items:m})}),c.jsx(Iy,{}),c.jsx(Py,{}),c.jsx(ep,{isDarkMode:p})]})},vc=p=>typeof p=="string"?p:Array.isArray(p)?p.map(vc).join(""):p&&typeof p=="object"&&K.isValidElement(p)?vc(p.props.children):"",zp=p=>{const S=p.replace(/[#*`[\]()_~]/g,"").replace(/\r?\n/g," ").trim(),z=(S.match(/[\u4e00-\u9fa5]/g)||[]).length,m=S.split(/\s+/).filter(T=>T.length>0).length;return z+m},ap=p=>{const S=p.replace(/[#*`[\]()_~]/g,"").replace(/\r?\n/g," ").trim(),z=(S.match(/[\u4e00-\u9fa5]/g)||[]).length,m=S.split(/\s+/).filter(A=>A.length>0).length,T=z/400+m/200;return Math.max(1,Math.round(T))},rp=p=>p.trim().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,""),ip=p=>rp(p.replace(/[`*_]/g,"").trim()),Tp=p=>{const S=[];for(const z of p.split(/\r?\n/)){const m=z.match(/^(#{2,3})\s+(.+)$/);if(!m)continue;const T=vc(m[2]).trim();T&&S.push({level:m[1].length,title:T,id:ip(T)})}return S},Cm=p=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${p?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,up=()=>{const{t:p}=wn(),S=Array.from(new Set(Nl.flatMap(A=>A.tags))),[z,m]=K.useState(null),T=z?Nl.filter(A=>A.tags.includes(z)):Nl;return c.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-5xl",children:[c.jsx(Kr,{index:1,label:p("articles.eyebrow"),title:p("articles.title"),extra:c.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(T.length).padStart(2,"0")," / ",String(Nl.length).padStart(2,"0")]})}),c.jsx(Un,{children:c.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[c.jsx("button",{onClick:()=>m(null),className:Cm(z===null),children:p("common.all")}),S.map(A=>c.jsx("button",{onClick:()=>m(A===z?null:A),className:Cm(A===z),children:A},A))]})}),c.jsx("div",{className:"border-b border-line",children:T.map((A,W)=>c.jsx(Un,{delay:W*.04,children:c.jsxs(_t,{prefetch:"intent",to:`/article/${A.id}`,className:"group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8",children:[c.jsx("span",{className:"col-span-12 font-mono text-xs text-mute sm:col-span-2",children:A.date}),c.jsxs("div",{className:"col-span-12 sm:col-span-8",children:[c.jsx("h3",{className:"font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl",children:A.title}),c.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-mute",children:A.excerpt})]}),c.jsxs("div",{className:"col-span-12 flex items-center justify-between sm:col-span-2 sm:justify-end",children:[c.jsxs("span",{className:"font-mono text-xs text-mute",children:[ap(A.content)," ",p("common.minRead")]}),c.jsx(Zr,{size:17,className:"text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"})]})]})},A.id))})]})})},_c=p=>{const{t:S}=wn();K.useEffect(()=>(document.title=p?`${p} — Aitenry`:S("siteTitle"),()=>{document.title=S("siteTitle")}),[p,S])},cp=()=>{const{t:p}=wn();return _c(p("articles.title")),c.jsx("div",{className:"relative min-h-screen",children:c.jsx(up,{})})},Bm=p=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${p?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,sp=()=>{const{t:p}=wn(),S=Array.from(new Set(Ml.flatMap(A=>A.tags))),[z,m]=K.useState(null),T=z?Ml.filter(A=>A.tags.includes(z)):Ml;return c.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-5xl",children:[c.jsx(Kr,{index:2,label:p("diaries.eyebrow"),title:p("diaries.title"),extra:c.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(T.length).padStart(2,"0")," / ",String(Ml.length).padStart(2,"0")]})}),c.jsx(Un,{children:c.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[c.jsx("button",{onClick:()=>m(null),className:Bm(z===null),children:p("common.all")}),S.map(A=>c.jsx("button",{onClick:()=>m(A===z?null:A),className:Bm(A===z),children:A},A))]})}),c.jsx("div",{className:"border-b border-line",children:T.map((A,W)=>c.jsx(Un,{delay:W*.04,children:c.jsxs(_t,{prefetch:"intent",to:`/diary/${A.id}`,className:"group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8",children:[c.jsxs("div",{className:"col-span-12 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-mute sm:col-span-3",children:[c.jsx("span",{children:A.date}),A.weather&&c.jsx("span",{className:"border border-line px-1.5 py-0.5",children:A.weather}),A.mood&&c.jsx("span",{className:"border border-line px-1.5 py-0.5",children:A.mood})]}),c.jsxs("div",{className:"col-span-12 sm:col-span-7",children:[c.jsx("h3",{className:"font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl",children:A.title}),c.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-mute",children:A.excerpt})]}),c.jsx("div",{className:"col-span-12 flex justify-end sm:col-span-2",children:c.jsx(Zr,{size:17,className:"text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"})})]})},A.id))})]})})},op=()=>{const{t:p}=wn();return _c(p("diaries.title")),c.jsx("div",{className:"relative min-h-screen",children:c.jsx(sp,{})})},fp=({code:p,title:S,desc:z,backLabel:m,onBack:T})=>c.jsx("div",{className:"relative flex min-h-[70vh] items-center justify-center px-4",children:c.jsxs("div",{className:"w-full max-w-md border border-line bg-[var(--paper)] p-10 shadow-[8px_8px_0_0_var(--ink)]",children:[c.jsx("p",{className:"eyebrow text-accent",children:p}),c.jsx("h1",{className:"mt-4 font-display text-4xl font-semibold",children:S}),c.jsx("p",{className:"mt-3 text-sm text-mute",children:z}),c.jsxs("button",{onClick:T,className:"mt-8 inline-flex cursor-pointer items-center gap-2 border border-[var(--ink)] bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:[c.jsx(Ey,{size:15}),m]})]})}),mp=()=>{const{t:p}=wn(),S=Vr();return _c("404"),c.jsx(fp,{code:"404 — PAGE NOT FOUND",title:p("notFound.title"),desc:p("notFound.desc"),backLabel:p("notFound.back"),onBack:()=>S("/home")})},dp=K.lazy(()=>Ym(()=>import("./ArticlePage-DoNaQ-Pk.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),hp=K.lazy(()=>Ym(()=>import("./DiaryPage-D0_8fCi7.js"),__vite__mapDeps([7,1,2,3,4,5,6]))),yp=()=>c.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:c.jsxs("p",{className:"eyebrow text-mute",children:["LOADING",c.jsx("span",{className:"blink ml-1 inline-block h-3 w-2 translate-y-0.5 bg-[var(--accent)]"})]})}),pp=()=>{try{const p=localStorage.getItem("blog-theme");if(p==="light")return!1;if(p==="dark")return!0}catch{}return window.matchMedia("(prefers-color-scheme: dark)").matches},gp=()=>{const[p,S]=K.useState(pp),{t:z}=wn(),m=by(),T=Vr(),{scrollYProgress:A}=bc(),W=dy(A,{stiffness:100,damping:30,restDelta:.001});let sn="";m.pathname==="/home"?sn="home":m.pathname==="/diaries"||m.pathname.startsWith("/diary/")?sn="diaries":(m.pathname==="/articles"||m.pathname.startsWith("/article/"))&&(sn="articles"),K.useEffect(()=>{window.scrollTo(0,0)},[m.pathname]),K.useEffect(()=>{document.querySelector('meta[name="theme-color"]')?.setAttribute("content",p?"#14120E":"#F3F0E9")},[p]);const tn=K.useCallback(()=>{S(D=>{const C=!D;try{localStorage.setItem("blog-theme",C?"dark":"light")}catch{}return C})},[]),L=()=>{document.getElementById("about")?.scrollIntoView({behavior:"smooth"})},Hn=(D,C)=>{D.preventDefault(),C==="home"?T("/home"):C==="diaries"?T("/diaries"):C==="articles"&&T("/articles")};return c.jsxs("div",{"data-theme":p?"dark":"light",className:"font-sans relative min-h-screen overflow-x-clip bg-[var(--paper)] text-ink transition-colors duration-300",children:[c.jsx("a",{href:"#main",onClick:D=>{D.preventDefault();const C=document.getElementById("main");C?.focus(),C?.scrollIntoView()},className:"sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper",children:z("navigation.skip")}),c.jsx(Wy,{}),c.jsx(Zy,{scaleX:W}),c.jsx(Vy,{activeSection:sn,isDarkMode:p,onToggleTheme:tn,handleNavClick:Hn}),c.jsx("main",{id:"main",tabIndex:-1,className:"relative z-10 pt-16 focus:outline-none",children:c.jsx(K.Suspense,{fallback:c.jsx(yp,{}),children:c.jsxs(_y,{children:[c.jsx(Gt,{path:"/",element:c.jsx(xy,{to:"/home",replace:!0})}),c.jsx(Gt,{path:"/home",element:c.jsx(lp,{isDarkMode:p,scrollToNextSection:L})}),c.jsx(Gt,{path:"/articles",element:c.jsx(cp,{})}),c.jsx(Gt,{path:"/article/:id",element:c.jsx(dp,{})}),c.jsx(Gt,{path:"/diaries",element:c.jsx(op,{})}),c.jsx(Gt,{path:"/diary/:id",element:c.jsx(hp,{})}),c.jsx(Gt,{path:"*",element:c.jsx(mp,{})})]})})}),c.jsx(ky,{}),c.jsx(Jy,{})]})},vp=()=>c.jsx(vy,{children:c.jsx(gp,{})}),qm=sessionStorage.getItem("redirect");qm&&(sessionStorage.removeItem("redirect"),window.history.replaceState(null,"",qm));window.location.hash.startsWith("#/")&&window.history.replaceState(null,"",window.location.hash.slice(1));Uy.createRoot(document.getElementById("root")).render(c.jsx(K.StrictMode,{children:c.jsx(vp,{})}));export{gc as E,fp as N,Nl as a,vc as b,zp as c,Ml as d,Tp as e,ip as h,ap as r,_c as u};
