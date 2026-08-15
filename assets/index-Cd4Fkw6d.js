const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ArticlePage-BZXEkiyj.js","assets/motion-9r90InlX.js","assets/i18n-Clk0yT6c.js","assets/icons-2dZjiWmL.js","assets/TocPanel-D6u0spty.js","assets/markdown-Dddm8GD8.js","assets/react-hln8-4Ni.js","assets/DiaryPage-CXLXJMJV.js"])))=>i.map(i=>d[i]);
import{u as _c,a as qm,j as c,A as pc,m as ze,b as fy,c as my,d as dy}from"./motion-9r90InlX.js";import{a as hy,i as yy,b as py,u as Vn,r as K}from"./i18n-Clk0yT6c.js";import{r as gy,u as Vr,L as zt,B as vy,a as by,R as _y,b as St,N as xy,O as Sy}from"./react-hln8-4Ni.js";import{p as zy,Q as Tm,$ as jm,C as Lr,u as gc,P as mc,O as Ay,Z as Ty,o as Em,h as jy,i as Zr,a as Ey,K as Ny}from"./icons-2dZjiWmL.js";(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))m(A);new MutationObserver(A=>{for(const T of A)if(T.type==="childList")for(const Q of T.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&m(Q)}).observe(document,{childList:!0,subtree:!0});function S(A){const T={};return A.integrity&&(T.integrity=A.integrity),A.referrerPolicy&&(T.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?T.credentials="include":A.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function m(A){if(A.ep)return;A.ep=!0;const T=S(A);fetch(A.href,T)}})();var dc={exports:{}},Sa={},hc={exports:{}},yc={};var Nm;function My(){return Nm||(Nm=1,(function(d){function z(_,j){var H=_.length;_.push(j);n:for(;0<H;){var cn=H-1>>>1,sn=_[cn];if(0<A(sn,j))_[cn]=j,_[H]=sn,H=cn;else break n}}function S(_){return _.length===0?null:_[0]}function m(_){if(_.length===0)return null;var j=_[0],H=_.pop();if(H!==j){_[0]=H;n:for(var cn=0,sn=_.length,Xn=sn>>>1;cn<Xn;){var hn=2*(cn+1)-1,P=_[hn],Mn=hn+1,Te=_[Mn];if(0>A(P,H))Mn<sn&&0>A(Te,P)?(_[cn]=Te,_[Mn]=H,cn=Mn):(_[cn]=P,_[hn]=H,cn=hn);else if(Mn<sn&&0>A(Te,H))_[cn]=Te,_[Mn]=H,cn=Mn;else break n}}return j}function A(_,j){var H=_.sortIndex-j.sortIndex;return H!==0?H:_.id-j.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var T=performance;d.unstable_now=function(){return T.now()}}else{var Q=Date,un=Q.now();d.unstable_now=function(){return Q.now()-un}}var W=[],w=[],$=1,E=null,q=3,Tn=!1,dn=!1,jn=!1,Zn=!1,Pn=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Un(_){for(var j=S(w);j!==null;){if(j.callback===null)m(w);else if(j.startTime<=_)m(w),j.sortIndex=j.expirationTime,z(W,j);else break;j=S(w)}}function R(_){if(jn=!1,Un(_),!dn)if(S(W)!==null)dn=!0,Hn||(Hn=!0,Y());else{var j=S(w);j!==null&&Oe(R,j.startTime-_)}}var Hn=!1,Rn=-1,En=5,Gn=-1;function De(){return Zn?!0:!(d.unstable_now()-Gn<En)}function M(){if(Zn=!1,Hn){var _=d.unstable_now();Gn=_;var j=!0;try{n:{dn=!1,jn&&(jn=!1,Ae(Rn),Rn=-1),Tn=!0;var H=q;try{e:{for(Un(_),E=S(W);E!==null&&!(E.expirationTime>_&&De());){var cn=E.callback;if(typeof cn=="function"){E.callback=null,q=E.priorityLevel;var sn=cn(E.expirationTime<=_);if(_=d.unstable_now(),typeof sn=="function"){E.callback=sn,Un(_),j=!0;break e}E===S(W)&&m(W),Un(_)}else m(W);E=S(W)}if(E!==null)j=!0;else{var Xn=S(w);Xn!==null&&Oe(R,Xn.startTime-_),j=!1}}break n}finally{E=null,q=H,Tn=!1}j=void 0}}finally{j?Y():Hn=!1}}}var Y;if(typeof I=="function")Y=function(){I(M)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,Nn=yn.port2;yn.port1.onmessage=M,Y=function(){Nn.postMessage(null)}}else Y=function(){Pn(M,0)};function Oe(_,j){Rn=Pn(function(){_(d.unstable_now())},j)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(_){_.callback=null},d.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):En=0<_?Math.floor(1e3/_):5},d.unstable_getCurrentPriorityLevel=function(){return q},d.unstable_next=function(_){switch(q){case 1:case 2:case 3:var j=3;break;default:j=q}var H=q;q=j;try{return _()}finally{q=H}},d.unstable_requestPaint=function(){Zn=!0},d.unstable_runWithPriority=function(_,j){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var H=q;q=_;try{return j()}finally{q=H}},d.unstable_scheduleCallback=function(_,j,H){var cn=d.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?cn+H:cn):H=cn,_){case 1:var sn=-1;break;case 2:sn=250;break;case 5:sn=1073741823;break;case 4:sn=1e4;break;default:sn=5e3}return sn=H+sn,_={id:$++,callback:j,priorityLevel:_,startTime:H,expirationTime:sn,sortIndex:-1},H>cn?(_.sortIndex=H,z(w,_),S(W)===null&&_===S(w)&&(jn?(Ae(Rn),Rn=-1):jn=!0,Oe(R,H-cn))):(_.sortIndex=sn,z(W,_),dn||Tn||(dn=!0,Hn||(Hn=!0,Y()))),_},d.unstable_shouldYield=De,d.unstable_wrapCallback=function(_){var j=q;return function(){var H=q;q=j;try{return _.apply(this,arguments)}finally{q=H}}}})(yc)),yc}var Mm;function Dy(){return Mm||(Mm=1,hc.exports=My()),hc.exports}var Dm;function Oy(){if(Dm)return Sa;Dm=1;var d=Dy(),z=hy(),S=gy();function m(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function T(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Q(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function un(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function W(n){if(T(n)!==n)throw Error(m(188))}function w(n){var e=n.alternate;if(!e){if(e=T(n),e===null)throw Error(m(188));return e!==n?null:n}for(var t=n,l=e;;){var a=t.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){t=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===t)return W(a),n;if(r===l)return W(a),e;r=r.sibling}throw Error(m(188))}if(t.return!==l.return)t=a,l=r;else{for(var i=!1,u=a.child;u;){if(u===t){i=!0,t=a,l=r;break}if(u===l){i=!0,l=a,t=r;break}u=u.sibling}if(!i){for(u=r.child;u;){if(u===t){i=!0,t=r,l=a;break}if(u===l){i=!0,l=r,t=a;break}u=u.sibling}if(!i)throw Error(m(189))}}if(t.alternate!==l)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?n:e}function $(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=$(n),e!==null)return e;n=n.sibling}return null}var E=Object.assign,q=Symbol.for("react.element"),Tn=Symbol.for("react.transitional.element"),dn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Zn=Symbol.for("react.strict_mode"),Pn=Symbol.for("react.profiler"),Ae=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Un=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Hn=Symbol.for("react.suspense_list"),Rn=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Gn=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=M&&n[M]||n["@@iterator"],typeof n=="function"?n:null)}var yn=Symbol.for("react.client.reference");function Nn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===yn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case jn:return"Fragment";case Pn:return"Profiler";case Zn:return"StrictMode";case R:return"Suspense";case Hn:return"SuspenseList";case Gn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case dn:return"Portal";case I:return n.displayName||"Context";case Ae:return(n._context.displayName||"Context")+".Consumer";case Un:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rn:return e=n.displayName||null,e!==null?e:Nn(n.type)||"Memo";case En:e=n._payload,n=n._init;try{return Nn(n(e))}catch{}}return null}var Oe=Array.isArray,_=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},cn=[],sn=-1;function Xn(n){return{current:n}}function hn(n){0>sn||(n.current=cn[sn],cn[sn]=null,sn--)}function P(n,e){sn++,cn[sn]=n.current,n.current=e}var Mn=Xn(null),Te=Xn(null),Fe=Xn(null),za=Xn(null);function Aa(n,e){switch(P(Fe,e),P(Te,n),P(Mn,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Jf(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Jf(e),n=Wf(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}hn(Mn),P(Mn,n)}function Lt(){hn(Mn),hn(Te),hn(Fe)}function kr(n){n.memoizedState!==null&&P(za,n);var e=Mn.current,t=Wf(e,n.type);e!==t&&(P(Te,n),P(Mn,t))}function Ta(n){Te.current===n&&(hn(Mn),hn(Te)),za.current===n&&(hn(za),va._currentValue=H)}var Jr,Sc;function At(n){if(Jr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Jr=e&&e[1]||"",Sc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jr+n+Sc}var Wr=!1;function Fr(n,e){if(!n||Wr)return"";Wr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var p=g}Reflect.construct(n,[],x)}else{try{x.call()}catch(g){p=g}n.call(x.prototype)}}else{try{throw Error()}catch(g){p=g}(x=n())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),i=r[0],u=r[1];if(i&&u){var s=i.split(`
`),y=u.split(`
`);for(a=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;if(l===s.length||a===y.length)for(l=s.length-1,a=y.length-1;1<=l&&0<=a&&s[l]!==y[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==y[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==y[a]){var v=`
`+s[l].replace(" at new "," at ");return n.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",n.displayName)),v}while(1<=l&&0<=a);break}}}finally{Wr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?At(t):""}function Xm(n,e){switch(n.tag){case 26:case 27:case 5:return At(n.type);case 16:return At("Lazy");case 13:return n.child!==e&&e!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return Fr(n.type,!1);case 11:return Fr(n.type.render,!1);case 1:return Fr(n.type,!0);case 31:return At("Activity");default:return""}}function zc(n){try{var e="",t=null;do e+=Xm(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $r=Object.prototype.hasOwnProperty,Ir=d.unstable_scheduleCallback,Pr=d.unstable_cancelCallback,Lm=d.unstable_shouldYield,Vm=d.unstable_requestPaint,ne=d.unstable_now,Zm=d.unstable_getCurrentPriorityLevel,Ac=d.unstable_ImmediatePriority,Tc=d.unstable_UserBlockingPriority,ja=d.unstable_NormalPriority,Km=d.unstable_LowPriority,jc=d.unstable_IdlePriority,km=d.log,Jm=d.unstable_setDisableYieldValue,Dl=null,ee=null;function $e(n){if(typeof km=="function"&&Jm(n),ee&&typeof ee.setStrictMode=="function")try{ee.setStrictMode(Dl,n)}catch{}}var te=Math.clz32?Math.clz32:$m,Wm=Math.log,Fm=Math.LN2;function $m(n){return n>>>=0,n===0?32:31-(Wm(n)/Fm|0)|0}var Ea=256,Na=262144,Ma=4194304;function Tt(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Da(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var a=0,r=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var u=l&134217727;return u!==0?(l=u&~r,l!==0?a=Tt(l):(i&=u,i!==0?a=Tt(i):t||(t=u&~n,t!==0&&(a=Tt(t))))):(u=l&~r,u!==0?a=Tt(u):i!==0?a=Tt(i):t||(t=l&~n,t!==0&&(a=Tt(t)))),a===0?0:e!==0&&e!==a&&(e&r)===0&&(r=a&-a,t=e&-e,r>=t||r===32&&(t&4194048)!==0)?e:a}function Ol(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Im(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ec(){var n=Ma;return Ma<<=1,(Ma&62914560)===0&&(Ma=4194304),n}function ni(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ul(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Pm(n,e,t,l,a,r){var i=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var u=n.entanglements,s=n.expirationTimes,y=n.hiddenUpdates;for(t=i&~t;0<t;){var v=31-te(t),x=1<<v;u[v]=0,s[v]=-1;var p=y[v];if(p!==null)for(y[v]=null,v=0;v<p.length;v++){var g=p[v];g!==null&&(g.lane&=-536870913)}t&=~x}l!==0&&Nc(n,l,0),r!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=r&~(i&~e))}function Nc(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-te(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function Mc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-te(t),a=1<<l;a&e|n[l]&e&&(n[l]|=e),t&=~a}}function Dc(n,e){var t=e&-e;return t=(t&42)!==0?1:ei(t),(t&(n.suspendedLanes|e))!==0?0:t}function ei(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ti(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Oc(){var n=j.p;return n!==0?n:(n=window.event,n===void 0?32:vm(n.type))}function Uc(n,e){var t=j.p;try{return j.p=n,e()}finally{j.p=t}}var Ie=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Ie,Kn="__reactProps$"+Ie,Vt="__reactContainer$"+Ie,li="__reactEvents$"+Ie,nd="__reactListeners$"+Ie,ed="__reactHandles$"+Ie,Hc="__reactResources$"+Ie,Hl="__reactMarker$"+Ie;function ai(n){delete n[Cn],delete n[Kn],delete n[li],delete n[nd],delete n[ed]}function Zt(n){var e=n[Cn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vt]||t[Cn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=tm(n);n!==null;){if(t=n[Cn])return t;n=tm(n)}return e}n=t,t=n.parentNode}return null}function Kt(n){if(n=n[Cn]||n[Vt]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Cl(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(m(33))}function kt(n){var e=n[Hc];return e||(e=n[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Dn(n){n[Hl]=!0}var Cc=new Set,Bc={};function jt(n,e){Jt(n,e),Jt(n+"Capture",e)}function Jt(n,e){for(Bc[n]=e,n=0;n<e.length;n++)Cc.add(e[n])}var td=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wc={},qc={};function ld(n){return $r.call(qc,n)?!0:$r.call(wc,n)?!1:td.test(n)?qc[n]=!0:(wc[n]=!0,!1)}function Oa(n,e,t){if(ld(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Ua(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Ue(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+l)}}function oe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Yc(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ad(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,r=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,r.call(this,i)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ri(n){if(!n._valueTracker){var e=Yc(n)?"checked":"value";n._valueTracker=ad(n,e,""+n[e])}}function Qc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=Yc(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}function Ha(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var rd=/[\n"\\]/g;function fe(n){return n.replace(rd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ii(n,e,t,l,a,r,i,u){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+oe(e)):n.value!==""+oe(e)&&(n.value=""+oe(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?ui(n,i,oe(e)):t!=null?ui(n,i,oe(t)):l!=null&&n.removeAttribute("value"),a==null&&r!=null&&(n.defaultChecked=!!r),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+oe(u):n.removeAttribute("name")}function Rc(n,e,t,l,a,r,i,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){ri(n);return}t=t!=null?""+oe(t):"",e=e!=null?""+oe(e):t,u||e===n.value||(n.value=e),n.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=u?n.checked:!!l,n.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),ri(n)}function ui(n,e,t){e==="number"&&Ha(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function Wt(n,e,t,l){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&l&&(n[t].defaultSelected=!0)}else{for(t=""+oe(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,l&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Gc(n,e,t){if(e!=null&&(e=""+oe(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+oe(t):""}function Xc(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(m(92));if(Oe(l)){if(1<l.length)throw Error(m(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=oe(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),ri(n)}function Ft(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var id=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||id.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Vc(n,e,t){if(e!=null&&typeof e!="object")throw Error(m(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&t[a]!==l&&Lc(n,a,l)}else for(var r in e)e.hasOwnProperty(r)&&Lc(n,r,e[r])}function ci(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ca(n){return cd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function He(){}var si=null;function oi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $t=null,It=null;function Zc(n){var e=Kt(n);if(e&&(n=e.stateNode)){var t=n[Kn]||null;n:switch(n=e.stateNode,e.type){case"input":if(ii(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+fe(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var a=l[Kn]||null;if(!a)throw Error(m(90));ii(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&Qc(l)}break n;case"textarea":Gc(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Wt(n,!!t.multiple,e,!1)}}}var fi=!1;function Kc(n,e,t){if(fi)return n(e,t);fi=!0;try{var l=n(e);return l}finally{if(fi=!1,($t!==null||It!==null)&&(xr(),$t&&(e=$t,n=It,It=$t=null,Zc(e),n)))for(e=0;e<n.length;e++)Zc(n[e])}}function Bl(n,e){var t=n.stateNode;if(t===null)return null;var l=t[Kn]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(m(231,e,typeof t));return t}var Ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=!1;if(Ce)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){mi=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{mi=!1}var Pe=null,di=null,Ba=null;function kc(){if(Ba)return Ba;var n,e=di,t=e.length,l,a="value"in Pe?Pe.value:Pe.textContent,r=a.length;for(n=0;n<t&&e[n]===a[n];n++);var i=t-n;for(l=1;l<=i&&e[t-l]===a[r-l];l++);return Ba=a.slice(n,1<l?1-l:void 0)}function wa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qa(){return!0}function Jc(){return!1}function kn(n){function e(t,l,a,r,i){this._reactName=t,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qa:Jc,this.isPropagationStopped=Jc,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=kn(Et),ql=E({},Et,{view:0,detail:0}),sd=kn(ql),hi,yi,Yl,Qa=E({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Yl&&(Yl&&n.type==="mousemove"?(hi=n.screenX-Yl.screenX,yi=n.screenY-Yl.screenY):yi=hi=0,Yl=n),hi)},movementY:function(n){return"movementY"in n?n.movementY:yi}}),Wc=kn(Qa),od=E({},Qa,{dataTransfer:0}),fd=kn(od),md=E({},ql,{relatedTarget:0}),pi=kn(md),dd=E({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=kn(dd),yd=E({},Et,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),pd=kn(yd),gd=E({},Et,{data:0}),Fc=kn(gd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=_d[n])?!!e[n]:!1}function gi(){return xd}var Sd=E({},ql,{key:function(n){if(n.key){var e=vd[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zd=kn(Sd),Ad=E({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=kn(Ad),Td=E({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),jd=kn(Td),Ed=E({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=kn(Ed),Md=E({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=kn(Md),Od=E({},Et,{newState:0,oldState:0}),Ud=kn(Od),Hd=[9,13,27,32],vi=Ce&&"CompositionEvent"in window,Ql=null;Ce&&"documentMode"in document&&(Ql=document.documentMode);var Cd=Ce&&"TextEvent"in window&&!Ql,Ic=Ce&&(!vi||Ql&&8<Ql&&11>=Ql),Pc=" ",ns=!1;function es(n,e){switch(n){case"keyup":return Hd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pt=!1;function Bd(n,e){switch(n){case"compositionend":return ts(e);case"keypress":return e.which!==32?null:(ns=!0,Pc);case"textInput":return n=e.data,n===Pc&&ns?null:n;default:return null}}function wd(n,e){if(Pt)return n==="compositionend"||!vi&&es(n,e)?(n=kc(),Ba=di=Pe=null,Pt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ic&&e.locale!=="ko"?null:e.data;default:return null}}var qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ls(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!qd[n.type]:e==="textarea"}function as(n,e,t,l){$t?It?It.push(l):It=[l]:$t=l,e=Nr(e,"onChange"),0<e.length&&(t=new Ya("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var Rl=null,Gl=null;function Yd(n){Xf(n,0)}function Ra(n){var e=Cl(n);if(Qc(e))return n}function rs(n,e){if(n==="change")return e}var is=!1;if(Ce){var bi;if(Ce){var _i="oninput"in document;if(!_i){var us=document.createElement("div");us.setAttribute("oninput","return;"),_i=typeof us.oninput=="function"}bi=_i}else bi=!1;is=bi&&(!document.documentMode||9<document.documentMode)}function cs(){Rl&&(Rl.detachEvent("onpropertychange",ss),Gl=Rl=null)}function ss(n){if(n.propertyName==="value"&&Ra(Gl)){var e=[];as(e,Gl,n,oi(n)),Kc(Yd,e)}}function Qd(n,e,t){n==="focusin"?(cs(),Rl=e,Gl=t,Rl.attachEvent("onpropertychange",ss)):n==="focusout"&&cs()}function Rd(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ra(Gl)}function Gd(n,e){if(n==="click")return Ra(e)}function Xd(n,e){if(n==="input"||n==="change")return Ra(e)}function Ld(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var le=typeof Object.is=="function"?Object.is:Ld;function Xl(n,e){if(le(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var a=t[l];if(!$r.call(e,a)||!le(n[a],e[a]))return!1}return!0}function os(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fs(n,e){var t=os(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=os(t)}}function ms(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ms(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ds(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Ha(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ha(n.document)}return e}function xi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Vd=Ce&&"documentMode"in document&&11>=document.documentMode,nl=null,Si=null,Ll=null,zi=!1;function hs(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zi||nl==null||nl!==Ha(l)||(l=nl,"selectionStart"in l&&xi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Xl(Ll,l)||(Ll=l,l=Nr(Si,"onSelect"),0<l.length&&(e=new Ya("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=nl)))}function Nt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var el={animationend:Nt("Animation","AnimationEnd"),animationiteration:Nt("Animation","AnimationIteration"),animationstart:Nt("Animation","AnimationStart"),transitionrun:Nt("Transition","TransitionRun"),transitionstart:Nt("Transition","TransitionStart"),transitioncancel:Nt("Transition","TransitionCancel"),transitionend:Nt("Transition","TransitionEnd")},Ai={},ys={};Ce&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Mt(n){if(Ai[n])return Ai[n];if(!el[n])return n;var e=el[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ys)return Ai[n]=e[t];return n}var ps=Mt("animationend"),gs=Mt("animationiteration"),vs=Mt("animationstart"),Zd=Mt("transitionrun"),Kd=Mt("transitionstart"),kd=Mt("transitioncancel"),bs=Mt("transitionend"),_s=new Map,Ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ti.push("scrollEnd");function _e(n,e){_s.set(n,e),jt(e,[n])}var Ga=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},me=[],tl=0,ji=0;function Xa(){for(var n=tl,e=ji=tl=0;e<n;){var t=me[e];me[e++]=null;var l=me[e];me[e++]=null;var a=me[e];me[e++]=null;var r=me[e];if(me[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}r!==0&&xs(t,a,r)}}function La(n,e,t,l){me[tl++]=n,me[tl++]=e,me[tl++]=t,me[tl++]=l,ji|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ei(n,e,t,l){return La(n,e,t,l),Va(n)}function Dt(n,e){return La(n,null,null,e),Va(n)}function xs(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var a=!1,r=n.return;r!==null;)r.childLanes|=t,l=r.alternate,l!==null&&(l.childLanes|=t),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(a=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,a&&e!==null&&(a=31-te(t),n=r.hiddenUpdates,l=n[a],l===null?n[a]=[e]:l.push(e),e.lane=t|536870912),r):null}function Va(n){if(50<fa)throw fa=0,wu=null,Error(m(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ll={};function Jd(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(n,e,t,l){return new Jd(n,e,t,l)}function Ni(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Be(n,e){var t=n.alternate;return t===null?(t=ae(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Ss(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Za(n,e,t,l,a,r){var i=0;if(l=n,typeof n=="function")Ni(n)&&(i=1);else if(typeof n=="string")i=Ph(n,t,Mn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Gn:return n=ae(31,t,e,a),n.elementType=Gn,n.lanes=r,n;case jn:return Ot(t.children,a,r,e);case Zn:i=8,a|=24;break;case Pn:return n=ae(12,t,e,a|2),n.elementType=Pn,n.lanes=r,n;case R:return n=ae(13,t,e,a),n.elementType=R,n.lanes=r,n;case Hn:return n=ae(19,t,e,a),n.elementType=Hn,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case I:i=10;break n;case Ae:i=9;break n;case Un:i=11;break n;case Rn:i=14;break n;case En:i=16,l=null;break n}i=29,t=Error(m(130,n===null?"null":typeof n,"")),l=null}return e=ae(i,t,e,a),e.elementType=n,e.type=l,e.lanes=r,e}function Ot(n,e,t,l){return n=ae(7,n,l,e),n.lanes=t,n}function Mi(n,e,t){return n=ae(6,n,null,e),n.lanes=t,n}function zs(n){var e=ae(18,null,null,0);return e.stateNode=n,e}function Di(n,e,t){return e=ae(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var As=new WeakMap;function de(n,e){if(typeof n=="object"&&n!==null){var t=As.get(n);return t!==void 0?t:(e={value:n,source:e,stack:zc(e)},As.set(n,e),e)}return{value:n,source:e,stack:zc(e)}}var al=[],rl=0,Ka=null,Vl=0,he=[],ye=0,nt=null,je=1,Ee="";function we(n,e){al[rl++]=Vl,al[rl++]=Ka,Ka=n,Vl=e}function Ts(n,e,t){he[ye++]=je,he[ye++]=Ee,he[ye++]=nt,nt=n;var l=je;n=Ee;var a=32-te(l)-1;l&=~(1<<a),t+=1;var r=32-te(e)+a;if(30<r){var i=a-a%5;r=(l&(1<<i)-1).toString(32),l>>=i,a-=i,je=1<<32-te(e)+a|t<<a|l,Ee=r+n}else je=1<<r|t<<a|l,Ee=n}function Oi(n){n.return!==null&&(we(n,1),Ts(n,1,0))}function Ui(n){for(;n===Ka;)Ka=al[--rl],al[rl]=null,Vl=al[--rl],al[rl]=null;for(;n===nt;)nt=he[--ye],he[ye]=null,Ee=he[--ye],he[ye]=null,je=he[--ye],he[ye]=null}function js(n,e){he[ye++]=je,he[ye++]=Ee,he[ye++]=nt,je=e.id,Ee=e.overflow,nt=n}var Bn=null,on=null,Z=!1,et=null,pe=!1,Hi=Error(m(519));function tt(n){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(de(e,n)),Hi}function Es(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[Cn]=n,e[Kn]=l,t){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(t=0;t<da.length;t++)X(da[t],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),Rc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),Xc(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||Kf(e.textContent,t)?(l.popover!=null&&(X("beforetoggle",e),X("toggle",e)),l.onScroll!=null&&X("scroll",e),l.onScrollEnd!=null&&X("scrollend",e),l.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||tt(n,!0)}function Ns(n){for(Bn=n.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:pe=!1;return;case 27:case 3:pe=!0;return;default:Bn=Bn.return}}function il(n){if(n!==Bn)return!1;if(!Z)return Ns(n),Z=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||$u(n.type,n.memoizedProps)),t=!t),t&&on&&tt(n),Ns(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));on=em(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));on=em(n)}else e===27?(e=on,pt(n.type)?(n=tc,tc=null,on=n):on=e):on=Bn?ve(n.stateNode.nextSibling):null;return!0}function Ut(){on=Bn=null,Z=!1}function Ci(){var n=et;return n!==null&&($n===null?$n=n:$n.push.apply($n,n),et=null),n}function Zl(n){et===null?et=[n]:et.push(n)}var Bi=Xn(null),Ht=null,qe=null;function lt(n,e,t){P(Bi,e._currentValue),e._currentValue=t}function Ye(n){n._currentValue=Bi.current,hn(Bi)}function wi(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function qi(n,e,t,l){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var r=a.dependencies;if(r!==null){var i=a.child;r=r.firstContext;n:for(;r!==null;){var u=r;r=a;for(var s=0;s<e.length;s++)if(u.context===e[s]){r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),wi(r.return,t,n),l||(i=null);break n}r=u.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(m(341));i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),wi(i,t,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function ul(n,e,t,l){n=null;for(var a=e,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var u=a.type;le(a.pendingProps.value,i.value)||(n!==null?n.push(u):n=[u])}}else if(a===za.current){if(i=a.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(va):n=[va])}a=a.return}n!==null&&qi(e,n,t,l),e.flags|=262144}function ka(n){for(n=n.firstContext;n!==null;){if(!le(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ct(n){Ht=n,qe=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function wn(n){return Ms(Ht,n)}function Ja(n,e){return Ht===null&&Ct(n),Ms(n,e)}function Ms(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},qe===null){if(n===null)throw Error(m(308));qe=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else qe=qe.next=e;return t}var Wd=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Fd=d.unstable_scheduleCallback,$d=d.unstable_NormalPriority,_n={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yi(){return{controller:new Wd,data:new Map,refCount:0}}function Kl(n){n.refCount--,n.refCount===0&&Fd($d,function(){n.controller.abort()})}var kl=null,Qi=0,cl=0,sl=null;function Id(n,e){if(kl===null){var t=kl=[];Qi=0,cl=Xu(),sl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Qi++,e.then(Ds,Ds),e}function Ds(){if(--Qi===0&&kl!==null){sl!==null&&(sl.status="fulfilled");var n=kl;kl=null,cl=0,sl=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Pd(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<t.length;a++)(0,t[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),l}var Os=_.S;_.S=function(n,e){pf=ne(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Id(n,e),Os!==null&&Os(n,e)};var Bt=Xn(null);function Ri(){var n=Bt.current;return n!==null?n:rn.pooledCache}function Wa(n,e){e===null?P(Bt,Bt.current):P(Bt,e.pool)}function Us(){var n=Ri();return n===null?null:{parent:_n._currentValue,pool:n}}var ol=Error(m(460)),Gi=Error(m(474)),Fa=Error(m(542)),$a={then:function(){}};function Hs(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Cs(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(He,He),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,ws(n),n;default:if(typeof e.status=="string")e.then(He,He);else{if(n=rn,n!==null&&100<n.shellSuspendCounter)throw Error(m(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,ws(n),n}throw qt=e,ol}}function wt(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(qt=t,ol):t}}var qt=null;function Bs(){if(qt===null)throw Error(m(459));var n=qt;return qt=null,n}function ws(n){if(n===ol||n===Fa)throw Error(m(483))}var fl=null,Jl=0;function Ia(n){var e=Jl;return Jl+=1,fl===null&&(fl=[]),Cs(fl,n,e)}function Wl(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Pa(n,e){throw e.$$typeof===q?Error(m(525)):(n=Object.prototype.toString.call(e),Error(m(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function qs(n){function e(f,o){if(n){var h=f.deletions;h===null?(f.deletions=[o],f.flags|=16):h.push(o)}}function t(f,o){if(!n)return null;for(;o!==null;)e(f,o),o=o.sibling;return null}function l(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function a(f,o){return f=Be(f,o),f.index=0,f.sibling=null,f}function r(f,o,h){return f.index=h,n?(h=f.alternate,h!==null?(h=h.index,h<o?(f.flags|=67108866,o):h):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function i(f){return n&&f.alternate===null&&(f.flags|=67108866),f}function u(f,o,h,b){return o===null||o.tag!==6?(o=Mi(h,f.mode,b),o.return=f,o):(o=a(o,h),o.return=f,o)}function s(f,o,h,b){var O=h.type;return O===jn?v(f,o,h.props.children,b,h.key):o!==null&&(o.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===En&&wt(O)===o.type)?(o=a(o,h.props),Wl(o,h),o.return=f,o):(o=Za(h.type,h.key,h.props,null,f.mode,b),Wl(o,h),o.return=f,o)}function y(f,o,h,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=Di(h,f.mode,b),o.return=f,o):(o=a(o,h.children||[]),o.return=f,o)}function v(f,o,h,b,O){return o===null||o.tag!==7?(o=Ot(h,f.mode,b,O),o.return=f,o):(o=a(o,h),o.return=f,o)}function x(f,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Mi(""+o,f.mode,h),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Tn:return h=Za(o.type,o.key,o.props,null,f.mode,h),Wl(h,o),h.return=f,h;case dn:return o=Di(o,f.mode,h),o.return=f,o;case En:return o=wt(o),x(f,o,h)}if(Oe(o)||Y(o))return o=Ot(o,f.mode,h,null),o.return=f,o;if(typeof o.then=="function")return x(f,Ia(o),h);if(o.$$typeof===I)return x(f,Ja(f,o),h);Pa(f,o)}return null}function p(f,o,h,b){var O=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return O!==null?null:u(f,o,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:return h.key===O?s(f,o,h,b):null;case dn:return h.key===O?y(f,o,h,b):null;case En:return h=wt(h),p(f,o,h,b)}if(Oe(h)||Y(h))return O!==null?null:v(f,o,h,b,null);if(typeof h.then=="function")return p(f,o,Ia(h),b);if(h.$$typeof===I)return p(f,o,Ja(f,h),b);Pa(f,h)}return null}function g(f,o,h,b,O){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(h)||null,u(o,f,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Tn:return f=f.get(b.key===null?h:b.key)||null,s(o,f,b,O);case dn:return f=f.get(b.key===null?h:b.key)||null,y(o,f,b,O);case En:return b=wt(b),g(f,o,h,b,O)}if(Oe(b)||Y(b))return f=f.get(h)||null,v(o,f,b,O,null);if(typeof b.then=="function")return g(f,o,h,Ia(b),O);if(b.$$typeof===I)return g(f,o,h,Ja(o,b),O);Pa(o,b)}return null}function N(f,o,h,b){for(var O=null,k=null,D=o,B=o=0,V=null;D!==null&&B<h.length;B++){D.index>B?(V=D,D=null):V=D.sibling;var J=p(f,D,h[B],b);if(J===null){D===null&&(D=V);break}n&&D&&J.alternate===null&&e(f,D),o=r(J,o,B),k===null?O=J:k.sibling=J,k=J,D=V}if(B===h.length)return t(f,D),Z&&we(f,B),O;if(D===null){for(;B<h.length;B++)D=x(f,h[B],b),D!==null&&(o=r(D,o,B),k===null?O=D:k.sibling=D,k=D);return Z&&we(f,B),O}for(D=l(D);B<h.length;B++)V=g(D,f,B,h[B],b),V!==null&&(n&&V.alternate!==null&&D.delete(V.key===null?B:V.key),o=r(V,o,B),k===null?O=V:k.sibling=V,k=V);return n&&D.forEach(function(xt){return e(f,xt)}),Z&&we(f,B),O}function U(f,o,h,b){if(h==null)throw Error(m(151));for(var O=null,k=null,D=o,B=o=0,V=null,J=h.next();D!==null&&!J.done;B++,J=h.next()){D.index>B?(V=D,D=null):V=D.sibling;var xt=p(f,D,J.value,b);if(xt===null){D===null&&(D=V);break}n&&D&&xt.alternate===null&&e(f,D),o=r(xt,o,B),k===null?O=xt:k.sibling=xt,k=xt,D=V}if(J.done)return t(f,D),Z&&we(f,B),O;if(D===null){for(;!J.done;B++,J=h.next())J=x(f,J.value,b),J!==null&&(o=r(J,o,B),k===null?O=J:k.sibling=J,k=J);return Z&&we(f,B),O}for(D=l(D);!J.done;B++,J=h.next())J=g(D,f,B,J.value,b),J!==null&&(n&&J.alternate!==null&&D.delete(J.key===null?B:J.key),o=r(J,o,B),k===null?O=J:k.sibling=J,k=J);return n&&D.forEach(function(oy){return e(f,oy)}),Z&&we(f,B),O}function an(f,o,h,b){if(typeof h=="object"&&h!==null&&h.type===jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Tn:n:{for(var O=h.key;o!==null;){if(o.key===O){if(O=h.type,O===jn){if(o.tag===7){t(f,o.sibling),b=a(o,h.props.children),b.return=f,f=b;break n}}else if(o.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===En&&wt(O)===o.type){t(f,o.sibling),b=a(o,h.props),Wl(b,h),b.return=f,f=b;break n}t(f,o);break}else e(f,o);o=o.sibling}h.type===jn?(b=Ot(h.props.children,f.mode,b,h.key),b.return=f,f=b):(b=Za(h.type,h.key,h.props,null,f.mode,b),Wl(b,h),b.return=f,f=b)}return i(f);case dn:n:{for(O=h.key;o!==null;){if(o.key===O)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){t(f,o.sibling),b=a(o,h.children||[]),b.return=f,f=b;break n}else{t(f,o);break}else e(f,o);o=o.sibling}b=Di(h,f.mode,b),b.return=f,f=b}return i(f);case En:return h=wt(h),an(f,o,h,b)}if(Oe(h))return N(f,o,h,b);if(Y(h)){if(O=Y(h),typeof O!="function")throw Error(m(150));return h=O.call(h),U(f,o,h,b)}if(typeof h.then=="function")return an(f,o,Ia(h),b);if(h.$$typeof===I)return an(f,o,Ja(f,h),b);Pa(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(t(f,o.sibling),b=a(o,h),b.return=f,f=b):(t(f,o),b=Mi(h,f.mode,b),b.return=f,f=b),i(f)):t(f,o)}return function(f,o,h,b){try{Jl=0;var O=an(f,o,h,b);return fl=null,O}catch(D){if(D===ol||D===Fa)throw D;var k=ae(29,D,null,f.mode);return k.lanes=b,k.return=f,k}}}var Yt=qs(!0),Ys=qs(!1),at=!1;function Xi(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Li(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function it(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(F&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=Va(n),xs(n,null,t),e}return La(n,l,e,t),Va(n)}function Fl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Mc(n,t)}}function Vi(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var a=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?a=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?a=r=e:r=r.next=e}else a=r=e;t={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Zi=!1;function $l(){if(Zi){var n=sl;if(n!==null)throw n}}function Il(n,e,t,l){Zi=!1;var a=n.updateQueue;at=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var s=u,y=s.next;s.next=null,i===null?r=y:i.next=y,i=s;var v=n.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==i&&(u===null?v.firstBaseUpdate=y:u.next=y,v.lastBaseUpdate=s))}if(r!==null){var x=a.baseState;i=0,v=y=s=null,u=r;do{var p=u.lane&-536870913,g=p!==u.lane;if(g?(L&p)===p:(l&p)===p){p!==0&&p===cl&&(Zi=!0),v!==null&&(v=v.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var N=n,U=u;p=e;var an=t;switch(U.tag){case 1:if(N=U.payload,typeof N=="function"){x=N.call(an,x,p);break n}x=N;break n;case 3:N.flags=N.flags&-65537|128;case 0:if(N=U.payload,p=typeof N=="function"?N.call(an,x,p):N,p==null)break n;x=E({},x,p);break n;case 2:at=!0}}p=u.callback,p!==null&&(n.flags|=64,g&&(n.flags|=8192),g=a.callbacks,g===null?a.callbacks=[p]:g.push(p))}else g={lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(y=v=g,s=x):v=v.next=g,i|=p;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;g=u,u=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);v===null&&(s=x),a.baseState=s,a.firstBaseUpdate=y,a.lastBaseUpdate=v,r===null&&(a.shared.lanes=0),ft|=i,n.lanes=i,n.memoizedState=x}}function Qs(n,e){if(typeof n!="function")throw Error(m(191,n));n.call(e)}function Rs(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Qs(t[n],e)}var ml=Xn(null),nr=Xn(0);function Gs(n,e){n=ke,P(nr,n),P(ml,e),ke=n|e.baseLanes}function Ki(){P(nr,ke),P(ml,ml.current)}function ki(){ke=nr.current,hn(ml),hn(nr)}var re=Xn(null),ge=null;function ut(n){var e=n.alternate;P(vn,vn.current&1),P(re,n),ge===null&&(e===null||ml.current!==null||e.memoizedState!==null)&&(ge=n)}function Ji(n){P(vn,vn.current),P(re,n),ge===null&&(ge=n)}function Xs(n){n.tag===22?(P(vn,vn.current),P(re,n),ge===null&&(ge=n)):ct()}function ct(){P(vn,vn.current),P(re,re.current)}function ie(n){hn(re),ge===n&&(ge=null),hn(vn)}var vn=Xn(0);function er(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||nc(t)||ec(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qe=0,C=null,tn=null,xn=null,tr=!1,dl=!1,Qt=!1,lr=0,Pl=0,hl=null,nh=0;function pn(){throw Error(m(321))}function Wi(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!le(n[t],e[t]))return!1;return!0}function Fi(n,e,t,l,a,r){return Qe=r,C=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=n===null||n.memoizedState===null?jo:fu,Qt=!1,r=t(l,a),Qt=!1,dl&&(r=Vs(e,t,l,a)),Ls(n),r}function Ls(n){_.H=ta;var e=tn!==null&&tn.next!==null;if(Qe=0,xn=tn=C=null,tr=!1,Pl=0,hl=null,e)throw Error(m(300));n===null||Sn||(n=n.dependencies,n!==null&&ka(n)&&(Sn=!0))}function Vs(n,e,t,l){C=n;var a=0;do{if(dl&&(hl=null),Pl=0,dl=!1,25<=a)throw Error(m(301));if(a+=1,xn=tn=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=Eo,r=e(t,l)}while(dl);return r}function eh(){var n=_.H,e=n.useState()[0];return e=typeof e.then=="function"?na(e):e,n=n.useState()[0],(tn!==null?tn.memoizedState:null)!==n&&(C.flags|=1024),e}function $i(){var n=lr!==0;return lr=0,n}function Ii(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Pi(n){if(tr){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}tr=!1}Qe=0,xn=tn=C=null,dl=!1,Pl=lr=0,hl=null}function Ln(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?C.memoizedState=xn=n:xn=xn.next=n,xn}function bn(){if(tn===null){var n=C.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var e=xn===null?C.memoizedState:xn.next;if(e!==null)xn=e,tn=n;else{if(n===null)throw C.alternate===null?Error(m(467)):Error(m(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},xn===null?C.memoizedState=xn=n:xn=xn.next=n}return xn}function ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function na(n){var e=Pl;return Pl+=1,hl===null&&(hl=[]),n=Cs(hl,n,e),e=C,(xn===null?e.memoizedState:xn.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?jo:fu),n}function rr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return na(n);if(n.$$typeof===I)return wn(n)}throw Error(m(438,String(n)))}function nu(n){var e=null,t=C.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=C.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=ar(),C.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=De;return e.index++,t}function Re(n,e){return typeof e=="function"?e(n):e}function ir(n){var e=bn();return eu(e,tn,n)}function eu(n,e,t){var l=n.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var a=n.baseQueue,r=l.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}e.baseQueue=a=r,l.pending=null}if(r=n.baseState,a===null)n.memoizedState=r;else{e=a.next;var u=i=null,s=null,y=e,v=!1;do{var x=y.lane&-536870913;if(x!==y.lane?(L&x)===x:(Qe&x)===x){var p=y.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),x===cl&&(v=!0);else if((Qe&p)===p){y=y.next,p===cl&&(v=!0);continue}else x={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(u=s=x,i=r):s=s.next=x,C.lanes|=p,ft|=p;x=y.action,Qt&&t(r,x),r=y.hasEagerState?y.eagerState:t(r,x)}else p={lane:x,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},s===null?(u=s=p,i=r):s=s.next=p,C.lanes|=x,ft|=x;y=y.next}while(y!==null&&y!==e);if(s===null?i=r:s.next=u,!le(r,n.memoizedState)&&(Sn=!0,v&&(t=sl,t!==null)))throw t;n.memoizedState=r,n.baseState=i,n.baseQueue=s,l.lastRenderedState=r}return a===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function tu(n){var e=bn(),t=e.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=n;var l=t.dispatch,a=t.pending,r=e.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do r=n(r,i.action),i=i.next;while(i!==a);le(r,e.memoizedState)||(Sn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,l]}function Zs(n,e,t){var l=C,a=bn(),r=Z;if(r){if(t===void 0)throw Error(m(407));t=t()}else t=e();var i=!le((tn||a).memoizedState,t);if(i&&(a.memoizedState=t,Sn=!0),a=a.queue,ru(Js.bind(null,l,a,n),[n]),a.getSnapshot!==e||i||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},ks.bind(null,l,a,t,e),null),rn===null)throw Error(m(349));r||(Qe&127)!==0||Ks(l,e,t)}return t}function Ks(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=C.updateQueue,e===null?(e=ar(),C.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ks(n,e,t,l){e.value=t,e.getSnapshot=l,Ws(e)&&Fs(n)}function Js(n,e,t){return t(function(){Ws(e)&&Fs(n)})}function Ws(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!le(n,t)}catch{return!0}}function Fs(n){var e=Dt(n,2);e!==null&&In(e,n,2)}function lu(n){var e=Ln();if(typeof n=="function"){var t=n;if(n=t(),Qt){$e(!0);try{t()}finally{$e(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:n},e}function $s(n,e,t,l){return n.baseState=t,eu(n,tn,typeof l=="function"?l:Re)}function th(n,e,t,l,a){if(sr(n))throw Error(m(485));if(n=e.action,n!==null){var r={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};_.T!==null?t(!0):r.isTransition=!1,l(r),t=e.pending,t===null?(r.next=e.pending=r,Is(e,r)):(r.next=t.next,e.pending=t.next=r)}}function Is(n,e){var t=e.action,l=e.payload,a=n.state;if(e.isTransition){var r=_.T,i={};_.T=i;try{var u=t(a,l),s=_.S;s!==null&&s(i,u),Ps(n,e,u)}catch(y){au(n,e,y)}finally{r!==null&&i.types!==null&&(r.types=i.types),_.T=r}}else try{r=t(a,l),Ps(n,e,r)}catch(y){au(n,e,y)}}function Ps(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){no(n,e,l)},function(l){return au(n,e,l)}):no(n,e,t)}function no(n,e,t){e.status="fulfilled",e.value=t,eo(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Is(n,t)))}function au(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,eo(e),e=e.next;while(e!==l)}n.action=null}function eo(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function to(n,e){return e}function lo(n,e){if(Z){var t=rn.formState;if(t!==null){n:{var l=C;if(Z){if(on){e:{for(var a=on,r=pe;a.nodeType!==8;){if(!r){a=null;break e}if(a=ve(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){on=ve(a.nextSibling),l=a.data==="F!";break n}}tt(l)}l=!1}l&&(e=t[0])}}return t=Ln(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=l,t=zo.bind(null,C,l),l.dispatch=t,l=lu(!1),r=ou.bind(null,C,!1,l.queue),l=Ln(),a={state:e,dispatch:null,action:n,pending:null},l.queue=a,t=th.bind(null,C,a,r,t),a.dispatch=t,l.memoizedState=n,[e,t,!1]}function ao(n){var e=bn();return ro(e,tn,n)}function ro(n,e,t){if(e=eu(n,e,to)[0],n=ir(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=na(e)}catch(i){throw i===ol?Fa:i}else l=e;e=bn();var a=e.queue,r=a.dispatch;return t!==e.memoizedState&&(C.flags|=2048,yl(9,{destroy:void 0},lh.bind(null,a,t),null)),[l,r,n]}function lh(n,e){n.action=e}function io(n){var e=bn(),t=tn;if(t!==null)return ro(e,t,n);bn(),e=e.memoizedState,t=bn();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function yl(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=C.updateQueue,e===null&&(e=ar(),C.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function uo(){return bn().memoizedState}function ur(n,e,t,l){var a=Ln();C.flags|=n,a.memoizedState=yl(1|e,{destroy:void 0},t,l===void 0?null:l)}function cr(n,e,t,l){var a=bn();l=l===void 0?null:l;var r=a.memoizedState.inst;tn!==null&&l!==null&&Wi(l,tn.memoizedState.deps)?a.memoizedState=yl(e,r,t,l):(C.flags|=n,a.memoizedState=yl(1|e,r,t,l))}function co(n,e){ur(8390656,8,n,e)}function ru(n,e){cr(2048,8,n,e)}function ah(n){C.flags|=4;var e=C.updateQueue;if(e===null)e=ar(),C.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function so(n){var e=bn().memoizedState;return ah({ref:e,nextImpl:n}),function(){if((F&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function oo(n,e){return cr(4,2,n,e)}function fo(n,e){return cr(4,4,n,e)}function mo(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ho(n,e,t){t=t!=null?t.concat([n]):null,cr(4,4,mo.bind(null,e,n),t)}function iu(){}function yo(n,e){var t=bn();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&Wi(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function po(n,e){var t=bn();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&Wi(e,l[1]))return l[0];if(l=n(),Qt){$e(!0);try{n()}finally{$e(!1)}}return t.memoizedState=[l,e],l}function uu(n,e,t){return t===void 0||(Qe&1073741824)!==0&&(L&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=vf(),C.lanes|=n,ft|=n,t)}function go(n,e,t,l){return le(t,e)?t:ml.current!==null?(n=uu(n,t,l),le(n,e)||(Sn=!0),n):(Qe&42)===0||(Qe&1073741824)!==0&&(L&261930)===0?(Sn=!0,n.memoizedState=t):(n=vf(),C.lanes|=n,ft|=n,e)}function vo(n,e,t,l,a){var r=j.p;j.p=r!==0&&8>r?r:8;var i=_.T,u={};_.T=u,ou(n,!1,e,t);try{var s=a(),y=_.S;if(y!==null&&y(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=Pd(s,l);ea(n,e,v,se(n))}else ea(n,e,l,se(n))}catch(x){ea(n,e,{then:function(){},status:"rejected",reason:x},se())}finally{j.p=r,i!==null&&u.types!==null&&(i.types=u.types),_.T=i}}function rh(){}function cu(n,e,t,l){if(n.tag!==5)throw Error(m(476));var a=bo(n).queue;vo(n,a,e,H,t===null?rh:function(){return _o(n),t(l)})}function bo(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:H},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function _o(n){var e=bo(n);e.next===null&&(e=n.alternate.memoizedState),ea(n,e.next.queue,{},se())}function su(){return wn(va)}function xo(){return bn().memoizedState}function So(){return bn().memoizedState}function ih(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=se();n=rt(t);var l=it(e,n,t);l!==null&&(In(l,e,t),Fl(l,e,t)),e={cache:Yi()},n.payload=e;return}e=e.return}}function uh(n,e,t){var l=se();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},sr(n)?Ao(e,t):(t=Ei(n,e,t,l),t!==null&&(In(t,n,l),To(t,e,l)))}function zo(n,e,t){var l=se();ea(n,e,t,l)}function ea(n,e,t,l){var a={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(sr(n))Ao(e,a);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,u=r(i,t);if(a.hasEagerState=!0,a.eagerState=u,le(u,i))return La(n,e,a,0),rn===null&&Xa(),!1}catch{}if(t=Ei(n,e,a,l),t!==null)return In(t,n,l),To(t,e,l),!0}return!1}function ou(n,e,t,l){if(l={lane:2,revertLane:Xu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},sr(n)){if(e)throw Error(m(479))}else e=Ei(n,t,l,2),e!==null&&In(e,n,2)}function sr(n){var e=n.alternate;return n===C||e!==null&&e===C}function Ao(n,e){dl=tr=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function To(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Mc(n,t)}}var ta={readContext:wn,use:rr,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};ta.useEffectEvent=pn;var jo={readContext:wn,use:rr,useCallback:function(n,e){return Ln().memoizedState=[n,e===void 0?null:e],n},useContext:wn,useEffect:co,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,ur(4194308,4,mo.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ur(4194308,4,n,e)},useInsertionEffect:function(n,e){ur(4,2,n,e)},useMemo:function(n,e){var t=Ln();e=e===void 0?null:e;var l=n();if(Qt){$e(!0);try{n()}finally{$e(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=Ln();if(t!==void 0){var a=t(e);if(Qt){$e(!0);try{t(e)}finally{$e(!1)}}}else a=e;return l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},l.queue=n,n=n.dispatch=uh.bind(null,C,n),[l.memoizedState,n]},useRef:function(n){var e=Ln();return n={current:n},e.memoizedState=n},useState:function(n){n=lu(n);var e=n.queue,t=zo.bind(null,C,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:iu,useDeferredValue:function(n,e){var t=Ln();return uu(t,n,e)},useTransition:function(){var n=lu(!1);return n=vo.bind(null,C,n.queue,!0,!1),Ln().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=C,a=Ln();if(Z){if(t===void 0)throw Error(m(407));t=t()}else{if(t=e(),rn===null)throw Error(m(349));(L&127)!==0||Ks(l,e,t)}a.memoizedState=t;var r={value:t,getSnapshot:e};return a.queue=r,co(Js.bind(null,l,r,n),[n]),l.flags|=2048,yl(9,{destroy:void 0},ks.bind(null,l,r,t,e),null),t},useId:function(){var n=Ln(),e=rn.identifierPrefix;if(Z){var t=Ee,l=je;t=(l&~(1<<32-te(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=lr++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=nh++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:su,useFormState:lo,useActionState:lo,useOptimistic:function(n){var e=Ln();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=ou.bind(null,C,!0,t),t.dispatch=e,[n,e]},useMemoCache:nu,useCacheRefresh:function(){return Ln().memoizedState=ih.bind(null,C)},useEffectEvent:function(n){var e=Ln(),t={impl:n};return e.memoizedState=t,function(){if((F&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}},fu={readContext:wn,use:rr,useCallback:yo,useContext:wn,useEffect:ru,useImperativeHandle:ho,useInsertionEffect:oo,useLayoutEffect:fo,useMemo:po,useReducer:ir,useRef:uo,useState:function(){return ir(Re)},useDebugValue:iu,useDeferredValue:function(n,e){var t=bn();return go(t,tn.memoizedState,n,e)},useTransition:function(){var n=ir(Re)[0],e=bn().memoizedState;return[typeof n=="boolean"?n:na(n),e]},useSyncExternalStore:Zs,useId:xo,useHostTransitionStatus:su,useFormState:ao,useActionState:ao,useOptimistic:function(n,e){var t=bn();return $s(t,tn,n,e)},useMemoCache:nu,useCacheRefresh:So};fu.useEffectEvent=so;var Eo={readContext:wn,use:rr,useCallback:yo,useContext:wn,useEffect:ru,useImperativeHandle:ho,useInsertionEffect:oo,useLayoutEffect:fo,useMemo:po,useReducer:tu,useRef:uo,useState:function(){return tu(Re)},useDebugValue:iu,useDeferredValue:function(n,e){var t=bn();return tn===null?uu(t,n,e):go(t,tn.memoizedState,n,e)},useTransition:function(){var n=tu(Re)[0],e=bn().memoizedState;return[typeof n=="boolean"?n:na(n),e]},useSyncExternalStore:Zs,useId:xo,useHostTransitionStatus:su,useFormState:io,useActionState:io,useOptimistic:function(n,e){var t=bn();return tn!==null?$s(t,tn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:nu,useCacheRefresh:So};Eo.useEffectEvent=so;function mu(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:E({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var du={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=se(),a=rt(l);a.payload=e,t!=null&&(a.callback=t),e=it(n,a,l),e!==null&&(In(e,n,l),Fl(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=se(),a=rt(l);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=it(n,a,l),e!==null&&(In(e,n,l),Fl(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=se(),l=rt(t);l.tag=2,e!=null&&(l.callback=e),e=it(n,l,t),e!==null&&(In(e,n,t),Fl(e,n,t))}};function No(n,e,t,l,a,r,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,r,i):e.prototype&&e.prototype.isPureReactComponent?!Xl(t,l)||!Xl(a,r):!0}function Mo(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&du.enqueueReplaceState(e,e.state,null)}function Rt(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=E({},t));for(var a in n)t[a]===void 0&&(t[a]=n[a])}return t}function Do(n){Ga(n)}function Oo(n){console.error(n)}function Uo(n){Ga(n)}function or(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Ho(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function hu(n,e,t){return t=rt(t),t.tag=3,t.payload={element:null},t.callback=function(){or(n,e)},t}function Co(n){return n=rt(n),n.tag=3,n}function Bo(n,e,t,l){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;n.payload=function(){return a(r)},n.callback=function(){Ho(e,t,l)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ho(e,t,l),typeof a!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function ch(n,e,t,l,a){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&ul(e,t,a,!0),t=re.current,t!==null){switch(t.tag){case 31:case 13:return ge===null?Sr():t.alternate===null&&gn===0&&(gn=3),t.flags&=-257,t.flags|=65536,t.lanes=a,l===$a?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Qu(n,l,a)),!1;case 22:return t.flags|=65536,l===$a?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Qu(n,l,a)),!1}throw Error(m(435,t.tag))}return Qu(n,l,a),Sr(),!1}if(Z)return e=re.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Hi&&(n=Error(m(422),{cause:l}),Zl(de(n,t)))):(l!==Hi&&(e=Error(m(423),{cause:l}),Zl(de(e,t))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,l=de(l,t),a=hu(n.stateNode,l,a),Vi(n,a),gn!==4&&(gn=2)),!1;var r=Error(m(520),{cause:l});if(r=de(r,t),oa===null?oa=[r]:oa.push(r),gn!==4&&(gn=2),e===null)return!0;l=de(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=a&-a,t.lanes|=n,n=hu(t.stateNode,l,n),Vi(t,n),!1;case 1:if(e=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Co(a),Bo(a,n,t,l),Vi(t,a),!1}t=t.return}while(t!==null);return!1}var yu=Error(m(461)),Sn=!1;function qn(n,e,t,l){e.child=n===null?Ys(e,null,t,l):Yt(e,n.child,t,l)}function wo(n,e,t,l,a){t=t.render;var r=e.ref;if("ref"in l){var i={};for(var u in l)u!=="ref"&&(i[u]=l[u])}else i=l;return Ct(e),l=Fi(n,e,t,i,r,a),u=$i(),n!==null&&!Sn?(Ii(n,e,a),Ge(n,e,a)):(Z&&u&&Oi(e),e.flags|=1,qn(n,e,l,a),e.child)}function qo(n,e,t,l,a){if(n===null){var r=t.type;return typeof r=="function"&&!Ni(r)&&r.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=r,Yo(n,e,r,l,a)):(n=Za(t.type,null,l,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!zu(n,a)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:Xl,t(i,l)&&n.ref===e.ref)return Ge(n,e,a)}return e.flags|=1,n=Be(r,l),n.ref=e.ref,n.return=e,e.child=n}function Yo(n,e,t,l,a){if(n!==null){var r=n.memoizedProps;if(Xl(r,l)&&n.ref===e.ref)if(Sn=!1,e.pendingProps=l=r,zu(n,a))(n.flags&131072)!==0&&(Sn=!0);else return e.lanes=n.lanes,Ge(n,e,a)}return pu(n,e,t,l,a)}function Qo(n,e,t,l){var a=l.children,r=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,n!==null){for(l=e.child=n.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~r}else l=0,e.child=null;return Ro(n,e,r,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wa(e,r!==null?r.cachePool:null),r!==null?Gs(e,r):Ki(),Xs(e);else return l=e.lanes=536870912,Ro(n,e,r!==null?r.baseLanes|t:t,t,l)}else r!==null?(Wa(e,r.cachePool),Gs(e,r),ct(),e.memoizedState=null):(n!==null&&Wa(e,null),Ki(),ct());return qn(n,e,a,t),e.child}function la(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ro(n,e,t,l,a){var r=Ri();return r=r===null?null:{parent:_n._currentValue,pool:r},e.memoizedState={baseLanes:t,cachePool:r},n!==null&&Wa(e,null),Ki(),Xs(e),n!==null&&ul(n,e,l,!0),e.childLanes=a,null}function fr(n,e){return e=dr({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Go(n,e,t){return Yt(e,n.child,null,t),n=fr(e,e.pendingProps),n.flags|=2,ie(e),e.memoizedState=null,n}function sh(n,e,t){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Z){if(l.mode==="hidden")return n=fr(e,l),e.lanes=536870912,la(null,n);if(Ji(e),(n=on)?(n=nm(n,pe),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:nt!==null?{id:je,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},t=zs(n),t.return=e,e.child=t,Bn=e,on=null)):n=null,n===null)throw tt(e);return e.lanes=536870912,null}return fr(e,l)}var r=n.memoizedState;if(r!==null){var i=r.dehydrated;if(Ji(e),a)if(e.flags&256)e.flags&=-257,e=Go(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(m(558));else if(Sn||ul(n,e,t,!1),a=(t&n.childLanes)!==0,Sn||a){if(l=rn,l!==null&&(i=Dc(l,t),i!==0&&i!==r.retryLane))throw r.retryLane=i,Dt(n,i),In(l,n,i),yu;Sr(),e=Go(n,e,t)}else n=r.treeContext,on=ve(i.nextSibling),Bn=e,Z=!0,et=null,pe=!1,n!==null&&js(e,n),e=fr(e,l),e.flags|=4096;return e}return n=Be(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function mr(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function pu(n,e,t,l,a){return Ct(e),t=Fi(n,e,t,l,void 0,a),l=$i(),n!==null&&!Sn?(Ii(n,e,a),Ge(n,e,a)):(Z&&l&&Oi(e),e.flags|=1,qn(n,e,t,a),e.child)}function Xo(n,e,t,l,a,r){return Ct(e),e.updateQueue=null,t=Vs(e,l,t,a),Ls(n),l=$i(),n!==null&&!Sn?(Ii(n,e,r),Ge(n,e,r)):(Z&&l&&Oi(e),e.flags|=1,qn(n,e,t,r),e.child)}function Lo(n,e,t,l,a){if(Ct(e),e.stateNode===null){var r=ll,i=t.contextType;typeof i=="object"&&i!==null&&(r=wn(i)),r=new t(l,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=du,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=l,r.state=e.memoizedState,r.refs={},Xi(e),i=t.contextType,r.context=typeof i=="object"&&i!==null?wn(i):ll,r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(mu(e,t,i,l),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&du.enqueueReplaceState(r,r.state,null),Il(e,l,r,a),$l(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){r=e.stateNode;var u=e.memoizedProps,s=Rt(t,u);r.props=s;var y=r.context,v=t.contextType;i=ll,typeof v=="object"&&v!==null&&(i=wn(v));var x=t.getDerivedStateFromProps;v=typeof x=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,v||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||y!==i)&&Mo(e,r,l,i),at=!1;var p=e.memoizedState;r.state=p,Il(e,l,r,a),$l(),y=e.memoizedState,u||p!==y||at?(typeof x=="function"&&(mu(e,t,x,l),y=e.memoizedState),(s=at||No(e,t,s,l,p,y,i))?(v||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=y),r.props=l,r.state=y,r.context=i,l=s):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{r=e.stateNode,Li(n,e),i=e.memoizedProps,v=Rt(t,i),r.props=v,x=e.pendingProps,p=r.context,y=t.contextType,s=ll,typeof y=="object"&&y!==null&&(s=wn(y)),u=t.getDerivedStateFromProps,(y=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==x||p!==s)&&Mo(e,r,l,s),at=!1,p=e.memoizedState,r.state=p,Il(e,l,r,a),$l();var g=e.memoizedState;i!==x||p!==g||at||n!==null&&n.dependencies!==null&&ka(n.dependencies)?(typeof u=="function"&&(mu(e,t,u,l),g=e.memoizedState),(v=at||No(e,t,v,l,p,g,s)||n!==null&&n.dependencies!==null&&ka(n.dependencies))?(y||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,g,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,g,s)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=g),r.props=l,r.state=g,r.context=s,l=v):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),l=!1)}return r=l,mr(n,e),l=(e.flags&128)!==0,r||l?(r=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&l?(e.child=Yt(e,n.child,null,a),e.child=Yt(e,null,t,a)):qn(n,e,t,a),e.memoizedState=r.state,n=e.child):n=Ge(n,e,a),n}function Vo(n,e,t,l){return Ut(),e.flags|=256,qn(n,e,t,l),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vu(n){return{baseLanes:n,cachePool:Us()}}function bu(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=ce),n}function Zo(n,e,t){var l=e.pendingProps,a=!1,r=(e.flags&128)!==0,i;if((i=r)||(i=n!==null&&n.memoizedState===null?!1:(vn.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(Z){if(a?ut(e):ct(),(n=on)?(n=nm(n,pe),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:nt!==null?{id:je,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},t=zs(n),t.return=e,e.child=t,Bn=e,on=null)):n=null,n===null)throw tt(e);return ec(n)?e.lanes=32:e.lanes=536870912,null}var u=l.children;return l=l.fallback,a?(ct(),a=e.mode,u=dr({mode:"hidden",children:u},a),l=Ot(l,a,t,null),u.return=e,l.return=e,u.sibling=l,e.child=u,l=e.child,l.memoizedState=vu(t),l.childLanes=bu(n,i,t),e.memoizedState=gu,la(null,l)):(ut(e),_u(e,u))}var s=n.memoizedState;if(s!==null&&(u=s.dehydrated,u!==null)){if(r)e.flags&256?(ut(e),e.flags&=-257,e=xu(n,e,t)):e.memoizedState!==null?(ct(),e.child=n.child,e.flags|=128,e=null):(ct(),u=l.fallback,a=e.mode,l=dr({mode:"visible",children:l.children},a),u=Ot(u,a,t,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,Yt(e,n.child,null,t),l=e.child,l.memoizedState=vu(t),l.childLanes=bu(n,i,t),e.memoizedState=gu,e=la(null,l));else if(ut(e),ec(u)){if(i=u.nextSibling&&u.nextSibling.dataset,i)var y=i.dgst;i=y,l=Error(m(419)),l.stack="",l.digest=i,Zl({value:l,source:null,stack:null}),e=xu(n,e,t)}else if(Sn||ul(n,e,t,!1),i=(t&n.childLanes)!==0,Sn||i){if(i=rn,i!==null&&(l=Dc(i,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,Dt(n,l),In(i,n,l),yu;nc(u)||Sr(),e=xu(n,e,t)}else nc(u)?(e.flags|=192,e.child=n.child,e=null):(n=s.treeContext,on=ve(u.nextSibling),Bn=e,Z=!0,et=null,pe=!1,n!==null&&js(e,n),e=_u(e,l.children),e.flags|=4096);return e}return a?(ct(),u=l.fallback,a=e.mode,s=n.child,y=s.sibling,l=Be(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,y!==null?u=Be(y,u):(u=Ot(u,a,t,null),u.flags|=2),u.return=e,l.return=e,l.sibling=u,e.child=l,la(null,l),l=e.child,u=n.child.memoizedState,u===null?u=vu(t):(a=u.cachePool,a!==null?(s=_n._currentValue,a=a.parent!==s?{parent:s,pool:s}:a):a=Us(),u={baseLanes:u.baseLanes|t,cachePool:a}),l.memoizedState=u,l.childLanes=bu(n,i,t),e.memoizedState=gu,la(n.child,l)):(ut(e),t=n.child,n=t.sibling,t=Be(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t,e.memoizedState=null,t)}function _u(n,e){return e=dr({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function dr(n,e){return n=ae(22,n,null,e),n.lanes=0,n}function xu(n,e,t){return Yt(e,n.child,null,t),n=_u(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ko(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),wi(n.return,e,t)}function Su(n,e,t,l,a,r){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:a,treeForkCount:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=t,i.tailMode=a,i.treeForkCount=r)}function ko(n,e,t){var l=e.pendingProps,a=l.revealOrder,r=l.tail;l=l.children;var i=vn.current,u=(i&2)!==0;if(u?(i=i&1|2,e.flags|=128):i&=1,P(vn,i),qn(n,e,l,t),l=Z?Vl:0,!u&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ko(n,t,e);else if(n.tag===19)Ko(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&er(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Su(e,!1,a,t,r,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&er(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Su(e,!0,t,null,r,l);break;case"together":Su(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Ge(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ft|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(ul(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(m(153));if(e.child!==null){for(n=e.child,t=Be(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Be(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zu(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&ka(n)))}function oh(n,e,t){switch(e.tag){case 3:Aa(e,e.stateNode.containerInfo),lt(e,_n,n.memoizedState.cache),Ut();break;case 27:case 5:kr(e);break;case 4:Aa(e,e.stateNode.containerInfo);break;case 10:lt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ji(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ut(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Zo(n,e,t):(ut(e),n=Ge(n,e,t),n!==null?n.sibling:null);ut(e);break;case 19:var a=(n.flags&128)!==0;if(l=(t&e.childLanes)!==0,l||(ul(n,e,t,!1),l=(t&e.childLanes)!==0),a){if(l)return ko(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),P(vn,vn.current),l)break;return null;case 22:return e.lanes=0,Qo(n,e,t,e.pendingProps);case 24:lt(e,_n,n.memoizedState.cache)}return Ge(n,e,t)}function Jo(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Sn=!0;else{if(!zu(n,t)&&(e.flags&128)===0)return Sn=!1,oh(n,e,t);Sn=(n.flags&131072)!==0}else Sn=!1,Z&&(e.flags&1048576)!==0&&Ts(e,Vl,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=wt(e.elementType),e.type=n,typeof n=="function")Ni(n)?(l=Rt(n,l),e.tag=1,e=Lo(null,e,n,l,t)):(e.tag=0,e=pu(null,e,n,l,t));else{if(n!=null){var a=n.$$typeof;if(a===Un){e.tag=11,e=wo(null,e,n,l,t);break n}else if(a===Rn){e.tag=14,e=qo(null,e,n,l,t);break n}}throw e=Nn(n)||n,Error(m(306,e,""))}}return e;case 0:return pu(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,a=Rt(l,e.pendingProps),Lo(n,e,l,a,t);case 3:n:{if(Aa(e,e.stateNode.containerInfo),n===null)throw Error(m(387));l=e.pendingProps;var r=e.memoizedState;a=r.element,Li(n,e),Il(e,l,null,t);var i=e.memoizedState;if(l=i.cache,lt(e,_n,l),l!==r.cache&&qi(e,[_n],t,!0),$l(),l=i.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Vo(n,e,l,t);break n}else if(l!==a){a=de(Error(m(424)),e),Zl(a),e=Vo(n,e,l,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,on=ve(n.firstChild),Bn=e,Z=!0,et=null,pe=!0,t=Ys(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ut(),l===a){e=Ge(n,e,t);break n}qn(n,e,l,t)}e=e.child}return e;case 26:return mr(n,e),n===null?(t=im(e.type,null,e.pendingProps,null))?e.memoizedState=t:Z||(t=e.type,n=e.pendingProps,l=Mr(Fe.current).createElement(t),l[Cn]=e,l[Kn]=n,Yn(l,t,n),Dn(l),e.stateNode=l):e.memoizedState=im(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return kr(e),n===null&&Z&&(l=e.stateNode=lm(e.type,e.pendingProps,Fe.current),Bn=e,pe=!0,a=on,pt(e.type)?(tc=a,on=ve(l.firstChild)):on=a),qn(n,e,e.pendingProps.children,t),mr(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Z&&((a=l=on)&&(l=Rh(l,e.type,e.pendingProps,pe),l!==null?(e.stateNode=l,Bn=e,on=ve(l.firstChild),pe=!1,a=!0):a=!1),a||tt(e)),kr(e),a=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,l=r.children,$u(a,r)?l=null:i!==null&&$u(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Fi(n,e,eh,null,null,t),va._currentValue=a),mr(n,e),qn(n,e,l,t),e.child;case 6:return n===null&&Z&&((n=t=on)&&(t=Gh(t,e.pendingProps,pe),t!==null?(e.stateNode=t,Bn=e,on=null,n=!0):n=!1),n||tt(e)),null;case 13:return Zo(n,e,t);case 4:return Aa(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=Yt(e,null,l,t):qn(n,e,l,t),e.child;case 11:return wo(n,e,e.type,e.pendingProps,t);case 7:return qn(n,e,e.pendingProps,t),e.child;case 8:return qn(n,e,e.pendingProps.children,t),e.child;case 12:return qn(n,e,e.pendingProps.children,t),e.child;case 10:return l=e.pendingProps,lt(e,e.type,l.value),qn(n,e,l.children,t),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Ct(e),a=wn(a),l=l(a),e.flags|=1,qn(n,e,l,t),e.child;case 14:return qo(n,e,e.type,e.pendingProps,t);case 15:return Yo(n,e,e.type,e.pendingProps,t);case 19:return ko(n,e,t);case 31:return sh(n,e,t);case 22:return Qo(n,e,t,e.pendingProps);case 24:return Ct(e),l=wn(_n),n===null?(a=Ri(),a===null&&(a=rn,r=Yi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=t),a=r),e.memoizedState={parent:l,cache:a},Xi(e),lt(e,_n,a)):((n.lanes&t)!==0&&(Li(n,e),Il(e,null,null,t),$l()),a=n.memoizedState,r=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),lt(e,_n,l)):(l=r.cache,lt(e,_n,l),l!==a.cache&&qi(e,[_n],t,!0))),qn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Xe(n){n.flags|=4}function Au(n,e,t,l,a){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(Sf())n.flags|=8192;else throw qt=$a,Gi}else n.flags&=-16777217}function Wo(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!fm(e))if(Sf())n.flags|=8192;else throw qt=$a,Gi}function hr(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Ec():536870912,n.lanes|=e,bl|=e)}function aa(n,e){if(!Z)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function fn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function fh(n,e,t){var l=e.pendingProps;switch(Ui(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return fn(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ye(_n),Lt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(il(e)?Xe(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci())),fn(e),null;case 26:var a=e.type,r=e.memoizedState;return n===null?(Xe(e),r!==null?(fn(e),Wo(e,r)):(fn(e),Au(e,a,null,l,t))):r?r!==n.memoizedState?(Xe(e),fn(e),Wo(e,r)):(fn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Xe(e),fn(e),Au(e,a,n,l,t)),null;case 27:if(Ta(e),t=Fe.current,a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Xe(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return fn(e),null}n=Mn.current,il(e)?Es(e):(n=lm(a,l,t),e.stateNode=n,Xe(e))}return fn(e),null;case 5:if(Ta(e),a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Xe(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return fn(e),null}if(r=Mn.current,il(e))Es(e);else{var i=Mr(Fe.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}r[Cn]=e,r[Kn]=l;n:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break n;for(;i.sibling===null;){if(i.return===null||i.return===e)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=r;n:switch(Yn(r,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Xe(e)}}return fn(e),Au(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Xe(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(m(166));if(n=Fe.current,il(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,a=Bn,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}n[Cn]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Kf(n.nodeValue,t)),n||tt(e,!0)}else n=Mr(n).createTextNode(l),n[Cn]=e,e.stateNode=n}return fn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=il(e),t!==null){if(n===null){if(!l)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(557));n[Cn]=e}else Ut(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fn(e),n=!1}else t=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ie(e),e):(ie(e),null);if((e.flags&128)!==0)throw Error(m(558))}return fn(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=il(e),l!==null&&l.dehydrated!==null){if(n===null){if(!a)throw Error(m(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[Cn]=e}else Ut(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fn(e),a=!1}else a=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ie(e),e):(ie(e),null)}return ie(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),hr(e,e.updateQueue),fn(e),null);case 4:return Lt(),n===null&&Ku(e.stateNode.containerInfo),fn(e),null;case 10:return Ye(e.type),fn(e),null;case 19:if(hn(vn),l=e.memoizedState,l===null)return fn(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)aa(l,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(r=er(n),r!==null){for(e.flags|=128,aa(l,!1),n=r.updateQueue,e.updateQueue=n,hr(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Ss(t,n),t=t.sibling;return P(vn,vn.current&1|2),Z&&we(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&ne()>br&&(e.flags|=128,a=!0,aa(l,!1),e.lanes=4194304)}else{if(!a)if(n=er(r),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,hr(e,n),aa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!Z)return fn(e),null}else 2*ne()-l.renderingStartTime>br&&t!==536870912&&(e.flags|=128,a=!0,aa(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ne(),n.sibling=null,t=vn.current,P(vn,a?t&1|2:t&1),Z&&we(e,l.treeForkCount),n):(fn(e),null);case 22:case 23:return ie(e),ki(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),t=e.updateQueue,t!==null&&hr(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&hn(Bt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ye(_n),fn(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function mh(n,e){switch(Ui(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ye(_n),Lt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Ta(e),null;case 31:if(e.memoizedState!==null){if(ie(e),e.alternate===null)throw Error(m(340));Ut()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ie(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Ut()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return hn(vn),null;case 4:return Lt(),null;case 10:return Ye(e.type),null;case 22:case 23:return ie(e),ki(),n!==null&&hn(Bt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ye(_n),null;case 25:return null;default:return null}}function Fo(n,e){switch(Ui(e),e.tag){case 3:Ye(_n),Lt();break;case 26:case 27:case 5:Ta(e);break;case 4:Lt();break;case 31:e.memoizedState!==null&&ie(e);break;case 13:ie(e);break;case 19:hn(vn);break;case 10:Ye(e.type);break;case 22:case 23:ie(e),ki(),n!==null&&hn(Bt);break;case 24:Ye(_n)}}function ra(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var a=l.next;t=a;do{if((t.tag&n)===n){l=void 0;var r=t.create,i=t.inst;l=r(),i.destroy=l}t=t.next}while(t!==a)}}catch(u){en(e,e.return,u)}}function st(n,e,t){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&n)===n){var i=l.inst,u=i.destroy;if(u!==void 0){i.destroy=void 0,a=e;var s=t,y=u;try{y()}catch(v){en(a,s,v)}}}l=l.next}while(l!==r)}}catch(v){en(e,e.return,v)}}function $o(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Rs(e,t)}catch(l){en(n,n.return,l)}}}function Io(n,e,t){t.props=Rt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){en(n,e,l)}}function ia(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(a){en(n,e,a)}}function Ne(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(a){en(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){en(n,e,a)}else t.current=null}function Po(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(a){en(n,n.return,a)}}function Tu(n,e,t){try{var l=n.stateNode;Ch(l,n.type,t,e),l[Kn]=e}catch(a){en(n,n.return,a)}}function nf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&pt(n.type)||n.tag===4}function ju(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||nf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&pt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eu(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=He));else if(l!==4&&(l===27&&pt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Eu(n,e,t),n=n.sibling;n!==null;)Eu(n,e,t),n=n.sibling}function yr(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(l!==4&&(l===27&&pt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(yr(n,e,t),n=n.sibling;n!==null;)yr(n,e,t),n=n.sibling}function ef(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Yn(e,l,t),e[Cn]=n,e[Kn]=t}catch(r){en(n,n.return,r)}}var Le=!1,zn=!1,Nu=!1,tf=typeof WeakSet=="function"?WeakSet:Set,On=null;function dh(n,e){if(n=n.containerInfo,Wu=wr,n=ds(n),xi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break n}var i=0,u=-1,s=-1,y=0,v=0,x=n,p=null;e:for(;;){for(var g;x!==t||a!==0&&x.nodeType!==3||(u=i+a),x!==r||l!==0&&x.nodeType!==3||(s=i+l),x.nodeType===3&&(i+=x.nodeValue.length),(g=x.firstChild)!==null;)p=x,x=g;for(;;){if(x===n)break e;if(p===t&&++y===a&&(u=i),p===r&&++v===l&&(s=i),(g=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=g}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fu={focusedElem:n,selectionRange:t},wr=!1,On=e;On!==null;)if(e=On,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,On=n;else for(;On!==null;){switch(e=On,r=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)a=n[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&r!==null){n=void 0,t=e,a=r.memoizedProps,r=r.memoizedState,l=t.stateNode;try{var N=Rt(t.type,a);n=l.getSnapshotBeforeUpdate(N,r),l.__reactInternalSnapshotBeforeUpdate=n}catch(U){en(t,t.return,U)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Pu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Pu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(m(163))}if(n=e.sibling,n!==null){n.return=e.return,On=n;break}On=e.return}}function lf(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ze(n,t),l&4&&ra(5,t);break;case 1:if(Ze(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(i){en(t,t.return,i)}else{var a=Rt(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){en(t,t.return,i)}}l&64&&$o(t),l&512&&ia(t,t.return);break;case 3:if(Ze(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Rs(n,e)}catch(i){en(t,t.return,i)}}break;case 27:e===null&&l&4&&ef(t);case 26:case 5:Ze(n,t),e===null&&l&4&&Po(t),l&512&&ia(t,t.return);break;case 12:Ze(n,t);break;case 31:Ze(n,t),l&4&&uf(n,t);break;case 13:Ze(n,t),l&4&&cf(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Sh.bind(null,t),Xh(n,t))));break;case 22:if(l=t.memoizedState!==null||Le,!l){e=e!==null&&e.memoizedState!==null||zn,a=Le;var r=zn;Le=l,(zn=e)&&!r?Ke(n,t,(t.subtreeFlags&8772)!==0):Ze(n,t),Le=a,zn=r}break;case 30:break;default:Ze(n,t)}}function af(n){var e=n.alternate;e!==null&&(n.alternate=null,af(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&ai(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var mn=null,Jn=!1;function Ve(n,e,t){for(t=t.child;t!==null;)rf(n,e,t),t=t.sibling}function rf(n,e,t){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(Dl,t)}catch{}switch(t.tag){case 26:zn||Ne(t,e),Ve(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:zn||Ne(t,e);var l=mn,a=Jn;pt(t.type)&&(mn=t.stateNode,Jn=!1),Ve(n,e,t),ya(t.stateNode),mn=l,Jn=a;break;case 5:zn||Ne(t,e);case 6:if(l=mn,a=Jn,mn=null,Ve(n,e,t),mn=l,Jn=a,mn!==null)if(Jn)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(t.stateNode)}catch(r){en(t,e,r)}else try{mn.removeChild(t.stateNode)}catch(r){en(t,e,r)}break;case 18:mn!==null&&(Jn?(n=mn,If(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),El(n)):If(mn,t.stateNode));break;case 4:l=mn,a=Jn,mn=t.stateNode.containerInfo,Jn=!0,Ve(n,e,t),mn=l,Jn=a;break;case 0:case 11:case 14:case 15:st(2,t,e),zn||st(4,t,e),Ve(n,e,t);break;case 1:zn||(Ne(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Io(t,e,l)),Ve(n,e,t);break;case 21:Ve(n,e,t);break;case 22:zn=(l=zn)||t.memoizedState!==null,Ve(n,e,t),zn=l;break;default:Ve(n,e,t)}}function uf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{El(n)}catch(t){en(e,e.return,t)}}}function cf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{El(n)}catch(t){en(e,e.return,t)}}function hh(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new tf),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new tf),e;default:throw Error(m(435,n.tag))}}function pr(n,e){var t=hh(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var a=zh.bind(null,n,l);l.then(a,a)}})}function Wn(n,e){var t=e.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l],r=n,i=e,u=i;n:for(;u!==null;){switch(u.tag){case 27:if(pt(u.type)){mn=u.stateNode,Jn=!1;break n}break;case 5:mn=u.stateNode,Jn=!1;break n;case 3:case 4:mn=u.stateNode.containerInfo,Jn=!0;break n}u=u.return}if(mn===null)throw Error(m(160));rf(r,i,a),mn=null,Jn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)sf(e,n),e=e.sibling}var xe=null;function sf(n,e){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Wn(e,n),Fn(n),l&4&&(st(3,n,n.return),ra(3,n),st(5,n,n.return));break;case 1:Wn(e,n),Fn(n),l&512&&(zn||t===null||Ne(t,t.return)),l&64&&Le&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var a=xe;if(Wn(e,n),Fn(n),l&512&&(zn||t===null||Ne(t,t.return)),l&4){var r=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Hl]||r[Cn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),Yn(r,l,t),r[Cn]=n,Dn(r),l=r;break n;case"link":var i=sm("link","href",a).get(l+(t.href||""));if(i){for(var u=0;u<i.length;u++)if(r=i[u],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(u,1);break e}}r=a.createElement(l),Yn(r,l,t),a.head.appendChild(r);break;case"meta":if(i=sm("meta","content",a).get(l+(t.content||""))){for(u=0;u<i.length;u++)if(r=i[u],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(u,1);break e}}r=a.createElement(l),Yn(r,l,t),a.head.appendChild(r);break;default:throw Error(m(468,l))}r[Cn]=n,Dn(r),l=r}n.stateNode=l}else om(a,n.type,n.stateNode);else n.stateNode=cm(a,l,n.memoizedProps);else r!==l?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,l===null?om(a,n.type,n.stateNode):cm(a,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Tu(n,n.memoizedProps,t.memoizedProps)}break;case 27:Wn(e,n),Fn(n),l&512&&(zn||t===null||Ne(t,t.return)),t!==null&&l&4&&Tu(n,n.memoizedProps,t.memoizedProps);break;case 5:if(Wn(e,n),Fn(n),l&512&&(zn||t===null||Ne(t,t.return)),n.flags&32){a=n.stateNode;try{Ft(a,"")}catch(N){en(n,n.return,N)}}l&4&&n.stateNode!=null&&(a=n.memoizedProps,Tu(n,a,t!==null?t.memoizedProps:a)),l&1024&&(Nu=!0);break;case 6:if(Wn(e,n),Fn(n),l&4){if(n.stateNode===null)throw Error(m(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(N){en(n,n.return,N)}}break;case 3:if(Ur=null,a=xe,xe=Dr(e.containerInfo),Wn(e,n),xe=a,Fn(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(N){en(n,n.return,N)}Nu&&(Nu=!1,of(n));break;case 4:l=xe,xe=Dr(n.stateNode.containerInfo),Wn(e,n),Fn(n),xe=l;break;case 12:Wn(e,n),Fn(n);break;case 31:Wn(e,n),Fn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,pr(n,l)));break;case 13:Wn(e,n),Fn(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(vr=ne()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,pr(n,l)));break;case 22:a=n.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,y=Le,v=zn;if(Le=y||a,zn=v||s,Wn(e,n),zn=v,Le=y,Fn(n),l&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(t===null||s||Le||zn||Gt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){s=t=e;try{if(r=s.stateNode,a)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=s.stateNode;var x=s.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;u.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(N){en(s,s.return,N)}}}else if(e.tag===6){if(t===null){s=e;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(N){en(s,s.return,N)}}}else if(e.tag===18){if(t===null){s=e;try{var g=s.stateNode;a?Pf(g,!0):Pf(s.stateNode,!1)}catch(N){en(s,s.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,pr(n,t))));break;case 19:Wn(e,n),Fn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,pr(n,l)));break;case 30:break;case 21:break;default:Wn(e,n),Fn(n)}}function Fn(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(nf(l)){t=l;break}l=l.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var a=t.stateNode,r=ju(n);yr(n,r,a);break;case 5:var i=t.stateNode;t.flags&32&&(Ft(i,""),t.flags&=-33);var u=ju(n);yr(n,u,i);break;case 3:case 4:var s=t.stateNode.containerInfo,y=ju(n);Eu(n,y,s);break;default:throw Error(m(161))}}catch(v){en(n,n.return,v)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function of(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;of(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Ze(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)lf(n,e.alternate,e),e=e.sibling}function Gt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:st(4,e,e.return),Gt(e);break;case 1:Ne(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Io(e,e.return,t),Gt(e);break;case 27:ya(e.stateNode);case 26:case 5:Ne(e,e.return),Gt(e);break;case 22:e.memoizedState===null&&Gt(e);break;case 30:Gt(e);break;default:Gt(e)}n=n.sibling}}function Ke(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=n,r=e,i=r.flags;switch(r.tag){case 0:case 11:case 15:Ke(a,r,t),ra(4,r);break;case 1:if(Ke(a,r,t),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(y){en(l,l.return,y)}if(l=r,a=l.updateQueue,a!==null){var u=l.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Qs(s[a],u)}catch(y){en(l,l.return,y)}}t&&i&64&&$o(r),ia(r,r.return);break;case 27:ef(r);case 26:case 5:Ke(a,r,t),t&&l===null&&i&4&&Po(r),ia(r,r.return);break;case 12:Ke(a,r,t);break;case 31:Ke(a,r,t),t&&i&4&&uf(a,r);break;case 13:Ke(a,r,t),t&&i&4&&cf(a,r);break;case 22:r.memoizedState===null&&Ke(a,r,t),ia(r,r.return);break;case 30:break;default:Ke(a,r,t)}e=e.sibling}}function Mu(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Kl(t))}function Du(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kl(n))}function Se(n,e,t,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ff(n,e,t,l),e=e.sibling}function ff(n,e,t,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Se(n,e,t,l),a&2048&&ra(9,e);break;case 1:Se(n,e,t,l);break;case 3:Se(n,e,t,l),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kl(n)));break;case 12:if(a&2048){Se(n,e,t,l),n=e.stateNode;try{var r=e.memoizedProps,i=r.id,u=r.onPostCommit;typeof u=="function"&&u(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(s){en(e,e.return,s)}}else Se(n,e,t,l);break;case 31:Se(n,e,t,l);break;case 13:Se(n,e,t,l);break;case 23:break;case 22:r=e.stateNode,i=e.alternate,e.memoizedState!==null?r._visibility&2?Se(n,e,t,l):ua(n,e):r._visibility&2?Se(n,e,t,l):(r._visibility|=2,pl(n,e,t,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Mu(i,e);break;case 24:Se(n,e,t,l),a&2048&&Du(e.alternate,e);break;default:Se(n,e,t,l)}}function pl(n,e,t,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=n,i=e,u=t,s=l,y=i.flags;switch(i.tag){case 0:case 11:case 15:pl(r,i,u,s,a),ra(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?pl(r,i,u,s,a):ua(r,i):(v._visibility|=2,pl(r,i,u,s,a)),a&&y&2048&&Mu(i.alternate,i);break;case 24:pl(r,i,u,s,a),a&&y&2048&&Du(i.alternate,i);break;default:pl(r,i,u,s,a)}e=e.sibling}}function ua(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,a=l.flags;switch(l.tag){case 22:ua(t,l),a&2048&&Mu(l.alternate,l);break;case 24:ua(t,l),a&2048&&Du(l.alternate,l);break;default:ua(t,l)}e=e.sibling}}var ca=8192;function gl(n,e,t){if(n.subtreeFlags&ca)for(n=n.child;n!==null;)mf(n,e,t),n=n.sibling}function mf(n,e,t){switch(n.tag){case 26:gl(n,e,t),n.flags&ca&&n.memoizedState!==null&&ny(t,xe,n.memoizedState,n.memoizedProps);break;case 5:gl(n,e,t);break;case 3:case 4:var l=xe;xe=Dr(n.stateNode.containerInfo),gl(n,e,t),xe=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=ca,ca=16777216,gl(n,e,t),ca=l):gl(n,e,t));break;default:gl(n,e,t)}}function df(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function sa(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];On=l,yf(l,n)}df(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hf(n),n=n.sibling}function hf(n){switch(n.tag){case 0:case 11:case 15:sa(n),n.flags&2048&&st(9,n,n.return);break;case 3:sa(n);break;case 12:sa(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,gr(n)):sa(n);break;default:sa(n)}}function gr(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];On=l,yf(l,n)}df(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:st(8,e,e.return),gr(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,gr(e));break;default:gr(e)}n=n.sibling}}function yf(n,e){for(;On!==null;){var t=On;switch(t.tag){case 0:case 11:case 15:st(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,On=l;else n:for(t=n;On!==null;){l=On;var a=l.sibling,r=l.return;if(af(l),l===t){On=null;break n}if(a!==null){a.return=r,On=a;break n}On=r}}}var yh={getCacheForType:function(n){var e=wn(_n),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return wn(_n).controller.signal}},ph=typeof WeakMap=="function"?WeakMap:Map,F=0,rn=null,G=null,L=0,nn=0,ue=null,ot=!1,vl=!1,Ou=!1,ke=0,gn=0,ft=0,Xt=0,Uu=0,ce=0,bl=0,oa=null,$n=null,Hu=!1,vr=0,pf=0,br=1/0,_r=null,mt=null,An=0,dt=null,_l=null,Je=0,Cu=0,Bu=null,gf=null,fa=0,wu=null;function se(){return(F&2)!==0&&L!==0?L&-L:_.T!==null?Xu():Oc()}function vf(){if(ce===0)if((L&536870912)===0||Z){var n=Na;Na<<=1,(Na&3932160)===0&&(Na=262144),ce=n}else ce=536870912;return n=re.current,n!==null&&(n.flags|=32),ce}function In(n,e,t){(n===rn&&(nn===2||nn===9)||n.cancelPendingCommit!==null)&&(xl(n,0),ht(n,L,ce,!1)),Ul(n,t),((F&2)===0||n!==rn)&&(n===rn&&((F&2)===0&&(Xt|=t),gn===4&&ht(n,L,ce,!1)),Me(n))}function bf(n,e,t){if((F&6)!==0)throw Error(m(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Ol(n,e),a=l?bh(n,e):Yu(n,e,!0),r=l;do{if(a===0){vl&&!l&&ht(n,e,0,!1);break}else{if(t=n.current.alternate,r&&!gh(t)){a=Yu(n,e,!1),r=!1;continue}if(a===2){if(r=e,n.errorRecoveryDisabledLanes&r)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var u=n;a=oa;var s=u.current.memoizedState.isDehydrated;if(s&&(xl(u,i).flags|=256),i=Yu(u,i,!1),i!==2){if(Ou&&!s){u.errorRecoveryDisabledLanes|=r,Xt|=r,a=4;break n}r=$n,$n=a,r!==null&&($n===null?$n=r:$n.push.apply($n,r))}a=i}if(r=!1,a!==2)continue}}if(a===1){xl(n,0),ht(n,e,0,!0);break}n:{switch(l=n,r=a,r){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:ht(l,e,ce,!ot);break n;case 2:$n=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(a=vr+300-ne(),10<a)){if(ht(l,e,ce,!ot),Da(l,0,!0)!==0)break n;Je=e,l.timeoutHandle=Ff(_f.bind(null,l,t,$n,_r,Hu,e,ce,Xt,bl,ot,r,"Throttled",-0,0),a);break n}_f(l,t,$n,_r,Hu,e,ce,Xt,bl,ot,r,null,-0,0)}}break}while(!0);Me(n)}function _f(n,e,t,l,a,r,i,u,s,y,v,x,p,g){if(n.timeoutHandle=-1,x=e.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},mf(e,r,x);var N=(r&62914560)===r?vr-ne():(r&4194048)===r?pf-ne():0;if(N=ey(x,N),N!==null){Je=r,n.cancelPendingCommit=N(Nf.bind(null,n,e,r,t,l,a,i,u,s,v,x,null,p,g)),ht(n,r,i,!y);return}}Nf(n,e,r,t,l,a,i,u,s)}function gh(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var a=t[l],r=a.getSnapshot;a=a.value;try{if(!le(r(),a))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ht(n,e,t,l){e&=~Uu,e&=~Xt,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var a=e;0<a;){var r=31-te(a),i=1<<r;l[r]=-1,a&=~i}t!==0&&Nc(n,t,e)}function xr(){return(F&6)===0?(ma(0),!1):!0}function qu(){if(G!==null){if(nn===0)var n=G.return;else n=G,qe=Ht=null,Pi(n),fl=null,Jl=0,n=G;for(;n!==null;)Fo(n.alternate,n),n=n.return;G=null}}function xl(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,qh(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Je=0,qu(),rn=n,G=t=Be(n.current,null),L=e,nn=0,ue=null,ot=!1,vl=Ol(n,e),Ou=!1,bl=ce=Uu=Xt=ft=gn=0,$n=oa=null,Hu=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var a=31-te(l),r=1<<a;e|=n[a],l&=~r}return ke=e,Xa(),t}function xf(n,e){C=null,_.H=ta,e===ol||e===Fa?(e=Bs(),nn=3):e===Gi?(e=Bs(),nn=4):nn=e===yu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ue=e,G===null&&(gn=1,or(n,de(e,n.current)))}function Sf(){var n=re.current;return n===null?!0:(L&4194048)===L?ge===null:(L&62914560)===L||(L&536870912)!==0?n===ge:!1}function zf(){var n=_.H;return _.H=ta,n===null?ta:n}function Af(){var n=_.A;return _.A=yh,n}function Sr(){gn=4,ot||(L&4194048)!==L&&re.current!==null||(vl=!0),(ft&134217727)===0&&(Xt&134217727)===0||rn===null||ht(rn,L,ce,!1)}function Yu(n,e,t){var l=F;F|=2;var a=zf(),r=Af();(rn!==n||L!==e)&&(_r=null,xl(n,e)),e=!1;var i=gn;n:do try{if(nn!==0&&G!==null){var u=G,s=ue;switch(nn){case 8:qu(),i=6;break n;case 3:case 2:case 9:case 6:re.current===null&&(e=!0);var y=nn;if(nn=0,ue=null,Sl(n,u,s,y),t&&vl){i=0;break n}break;default:y=nn,nn=0,ue=null,Sl(n,u,s,y)}}vh(),i=gn;break}catch(v){xf(n,v)}while(!0);return e&&n.shellSuspendCounter++,qe=Ht=null,F=l,_.H=a,_.A=r,G===null&&(rn=null,L=0,Xa()),i}function vh(){for(;G!==null;)Tf(G)}function bh(n,e){var t=F;F|=2;var l=zf(),a=Af();rn!==n||L!==e?(_r=null,br=ne()+500,xl(n,e)):vl=Ol(n,e);n:do try{if(nn!==0&&G!==null){e=G;var r=ue;e:switch(nn){case 1:nn=0,ue=null,Sl(n,e,r,1);break;case 2:case 9:if(Hs(r)){nn=0,ue=null,jf(e);break}e=function(){nn!==2&&nn!==9||rn!==n||(nn=7),Me(n)},r.then(e,e);break n;case 3:nn=7;break n;case 4:nn=5;break n;case 7:Hs(r)?(nn=0,ue=null,jf(e)):(nn=0,ue=null,Sl(n,e,r,7));break;case 5:var i=null;switch(G.tag){case 26:i=G.memoizedState;case 5:case 27:var u=G;if(i?fm(i):u.stateNode.complete){nn=0,ue=null;var s=u.sibling;if(s!==null)G=s;else{var y=u.return;y!==null?(G=y,zr(y)):G=null}break e}}nn=0,ue=null,Sl(n,e,r,5);break;case 6:nn=0,ue=null,Sl(n,e,r,6);break;case 8:qu(),gn=6;break n;default:throw Error(m(462))}}_h();break}catch(v){xf(n,v)}while(!0);return qe=Ht=null,_.H=l,_.A=a,F=t,G!==null?0:(rn=null,L=0,Xa(),gn)}function _h(){for(;G!==null&&!Lm();)Tf(G)}function Tf(n){var e=Jo(n.alternate,n,ke);n.memoizedProps=n.pendingProps,e===null?zr(n):G=e}function jf(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Xo(t,e,e.pendingProps,e.type,void 0,L);break;case 11:e=Xo(t,e,e.pendingProps,e.type.render,e.ref,L);break;case 5:Pi(e);default:Fo(t,e),e=G=Ss(e,ke),e=Jo(t,e,ke)}n.memoizedProps=n.pendingProps,e===null?zr(n):G=e}function Sl(n,e,t,l){qe=Ht=null,Pi(e),fl=null,Jl=0;var a=e.return;try{if(ch(n,a,e,t,L)){gn=1,or(n,de(t,n.current)),G=null;return}}catch(r){if(a!==null)throw G=a,r;gn=1,or(n,de(t,n.current)),G=null;return}e.flags&32768?(Z||l===1?n=!0:vl||(L&536870912)!==0?n=!1:(ot=n=!0,(l===2||l===9||l===3||l===6)&&(l=re.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ef(e,n)):zr(e)}function zr(n){var e=n;do{if((e.flags&32768)!==0){Ef(e,ot);return}n=e.return;var t=fh(e.alternate,e,ke);if(t!==null){G=t;return}if(e=e.sibling,e!==null){G=e;return}G=e=n}while(e!==null);gn===0&&(gn=5)}function Ef(n,e){do{var t=mh(n.alternate,n);if(t!==null){t.flags&=32767,G=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){G=n;return}G=n=t}while(n!==null);gn=6,G=null}function Nf(n,e,t,l,a,r,i,u,s){n.cancelPendingCommit=null;do Ar();while(An!==0);if((F&6)!==0)throw Error(m(327));if(e!==null){if(e===n.current)throw Error(m(177));if(r=e.lanes|e.childLanes,r|=ji,Pm(n,t,r,i,u,s),n===rn&&(G=rn=null,L=0),_l=e,dt=n,Je=t,Cu=r,Bu=a,gf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Ah(ja,function(){return Hf(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,a=j.p,j.p=2,i=F,F|=4;try{dh(n,e,t)}finally{F=i,j.p=a,_.T=l}}An=1,Mf(),Df(),Of()}}function Mf(){if(An===1){An=0;var n=dt,e=_l,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=_.T,_.T=null;var l=j.p;j.p=2;var a=F;F|=4;try{sf(e,n);var r=Fu,i=ds(n.containerInfo),u=r.focusedElem,s=r.selectionRange;if(i!==u&&u&&u.ownerDocument&&ms(u.ownerDocument.documentElement,u)){if(s!==null&&xi(u)){var y=s.start,v=s.end;if(v===void 0&&(v=y),"selectionStart"in u)u.selectionStart=y,u.selectionEnd=Math.min(v,u.value.length);else{var x=u.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var g=p.getSelection(),N=u.textContent.length,U=Math.min(s.start,N),an=s.end===void 0?U:Math.min(s.end,N);!g.extend&&U>an&&(i=an,an=U,U=i);var f=fs(u,U),o=fs(u,an);if(f&&o&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var h=x.createRange();h.setStart(f.node,f.offset),g.removeAllRanges(),U>an?(g.addRange(h),g.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),g.addRange(h))}}}}for(x=[],g=u;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<x.length;u++){var b=x[u];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}wr=!!Wu,Fu=Wu=null}finally{F=a,j.p=l,_.T=t}}n.current=e,An=2}}function Df(){if(An===2){An=0;var n=dt,e=_l,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=_.T,_.T=null;var l=j.p;j.p=2;var a=F;F|=4;try{lf(n,e.alternate,e)}finally{F=a,j.p=l,_.T=t}}An=3}}function Of(){if(An===4||An===3){An=0,Vm();var n=dt,e=_l,t=Je,l=gf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?An=5:(An=0,_l=dt=null,Uf(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(mt=null),ti(t),e=e.stateNode,ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=_.T,a=j.p,j.p=2,_.T=null;try{for(var r=n.onRecoverableError,i=0;i<l.length;i++){var u=l[i];r(u.value,{componentStack:u.stack})}}finally{_.T=e,j.p=a}}(Je&3)!==0&&Ar(),Me(n),a=n.pendingLanes,(t&261930)!==0&&(a&42)!==0?n===wu?fa++:(fa=0,wu=n):fa=0,ma(0)}}function Uf(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Kl(e)))}function Ar(){return Mf(),Df(),Of(),Hf()}function Hf(){if(An!==5)return!1;var n=dt,e=Cu;Cu=0;var t=ti(Je),l=_.T,a=j.p;try{j.p=32>t?32:t,_.T=null,t=Bu,Bu=null;var r=dt,i=Je;if(An=0,_l=dt=null,Je=0,(F&6)!==0)throw Error(m(331));var u=F;if(F|=4,hf(r.current),ff(r,r.current,i,t),F=u,ma(0,!1),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(Dl,r)}catch{}return!0}finally{j.p=a,_.T=l,Uf(n,e)}}function Cf(n,e,t){e=de(t,e),e=hu(n.stateNode,e,2),n=it(n,e,2),n!==null&&(Ul(n,2),Me(n))}function en(n,e,t){if(n.tag===3)Cf(n,n,t);else for(;e!==null;){if(e.tag===3){Cf(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mt===null||!mt.has(l))){n=de(t,n),t=Co(2),l=it(e,t,2),l!==null&&(Bo(t,l,e,n),Ul(l,2),Me(l));break}}e=e.return}}function Qu(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new ph;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(t)||(Ou=!0,a.add(t),n=xh.bind(null,n,e,t),e.then(n,n))}function xh(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,rn===n&&(L&t)===t&&(gn===4||gn===3&&(L&62914560)===L&&300>ne()-vr?(F&2)===0&&xl(n,0):Uu|=t,bl===L&&(bl=0)),Me(n)}function Bf(n,e){e===0&&(e=Ec()),n=Dt(n,e),n!==null&&(Ul(n,e),Me(n))}function Sh(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Bf(n,t)}function zh(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(e),Bf(n,t)}function Ah(n,e){return Ir(n,e)}var Tr=null,zl=null,Ru=!1,jr=!1,Gu=!1,yt=0;function Me(n){n!==zl&&n.next===null&&(zl===null?Tr=zl=n:zl=zl.next=n),jr=!0,Ru||(Ru=!0,jh())}function ma(n,e){if(!Gu&&jr){Gu=!0;do for(var t=!1,l=Tr;l!==null;){if(n!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var i=l.suspendedLanes,u=l.pingedLanes;r=(1<<31-te(42|n)+1)-1,r&=a&~(i&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Qf(l,r))}else r=L,r=Da(l,l===rn?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Ol(l,r)||(t=!0,Qf(l,r));l=l.next}while(t);Gu=!1}}function Th(){wf()}function wf(){jr=Ru=!1;var n=0;yt!==0&&wh()&&(n=yt);for(var e=ne(),t=null,l=Tr;l!==null;){var a=l.next,r=qf(l,e);r===0?(l.next=null,t===null?Tr=a:t.next=a,a===null&&(zl=t)):(t=l,(n!==0||(r&3)!==0)&&(jr=!0)),l=a}An!==0&&An!==5||ma(n),yt!==0&&(yt=0)}function qf(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,a=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var i=31-te(r),u=1<<i,s=a[i];s===-1?((u&t)===0||(u&l)!==0)&&(a[i]=Im(u,e)):s<=e&&(n.expiredLanes|=u),r&=~u}if(e=rn,t=L,t=Da(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(nn===2||nn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Pr(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Ol(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&Pr(l),ti(t)){case 2:case 8:t=Tc;break;case 32:t=ja;break;case 268435456:t=jc;break;default:t=ja}return l=Yf.bind(null,n),t=Ir(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&Pr(l),n.callbackPriority=2,n.callbackNode=null,2}function Yf(n,e){if(An!==0&&An!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Ar()&&n.callbackNode!==t)return null;var l=L;return l=Da(n,n===rn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(bf(n,l,e),qf(n,ne()),n.callbackNode!=null&&n.callbackNode===t?Yf.bind(null,n):null)}function Qf(n,e){if(Ar())return null;bf(n,e,!0)}function jh(){Yh(function(){(F&6)!==0?Ir(Ac,Th):wf()})}function Xu(){if(yt===0){var n=cl;n===0&&(n=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),yt=n}return yt}function Rf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ca(""+n)}function Gf(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function Eh(n,e,t,l,a){if(e==="submit"&&t&&t.stateNode===a){var r=Rf((a[Kn]||null).action),i=l.submitter;i&&(e=(e=i[Kn]||null)?Rf(e.formAction):i.getAttribute("formAction"),e!==null&&(r=e,i=null));var u=new Ya("action","action",null,l,a);n.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(yt!==0){var s=i?Gf(a,i):new FormData(a);cu(t,{pending:!0,data:s,method:a.method,action:r},null,s)}}else typeof r=="function"&&(u.preventDefault(),s=i?Gf(a,i):new FormData(a),cu(t,{pending:!0,data:s,method:a.method,action:r},r,s))},currentTarget:a}]})}}for(var Lu=0;Lu<Ti.length;Lu++){var Vu=Ti[Lu],Nh=Vu.toLowerCase(),Mh=Vu[0].toUpperCase()+Vu.slice(1);_e(Nh,"on"+Mh)}_e(ps,"onAnimationEnd"),_e(gs,"onAnimationIteration"),_e(vs,"onAnimationStart"),_e("dblclick","onDoubleClick"),_e("focusin","onFocus"),_e("focusout","onBlur"),_e(Zd,"onTransitionRun"),_e(Kd,"onTransitionStart"),_e(kd,"onTransitionCancel"),_e(bs,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jt("onBeforeInput",["compositionend","keypress","textInput","paste"]),jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(da));function Xf(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],a=l.event;l=l.listeners;n:{var r=void 0;if(e)for(var i=l.length-1;0<=i;i--){var u=l[i],s=u.instance,y=u.currentTarget;if(u=u.listener,s!==r&&a.isPropagationStopped())break n;r=u,a.currentTarget=y;try{r(a)}catch(v){Ga(v)}a.currentTarget=null,r=s}else for(i=0;i<l.length;i++){if(u=l[i],s=u.instance,y=u.currentTarget,u=u.listener,s!==r&&a.isPropagationStopped())break n;r=u,a.currentTarget=y;try{r(a)}catch(v){Ga(v)}a.currentTarget=null,r=s}}}}function X(n,e){var t=e[li];t===void 0&&(t=e[li]=new Set);var l=n+"__bubble";t.has(l)||(Lf(e,n,2,!1),t.add(l))}function Zu(n,e,t){var l=0;e&&(l|=4),Lf(t,n,l,e)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Ku(n){if(!n[Er]){n[Er]=!0,Cc.forEach(function(t){t!=="selectionchange"&&(Dh.has(t)||Zu(t,!1,n),Zu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Er]||(e[Er]=!0,Zu("selectionchange",!1,e))}}function Lf(n,e,t,l){switch(vm(e)){case 2:var a=ay;break;case 8:a=ry;break;default:a=uc}t=a.bind(null,e,t,n),a=void 0,!mi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function ku(n,e,t,l,a){var r=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var u=l.stateNode.containerInfo;if(u===a)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;u!==null;){if(i=Zt(u),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=r=i;continue n}u=u.parentNode}}l=l.return}Kc(function(){var y=r,v=oi(t),x=[];n:{var p=_s.get(n);if(p!==void 0){var g=Ya,N=n;switch(n){case"keypress":if(wa(t)===0)break n;case"keydown":case"keyup":g=zd;break;case"focusin":N="focus",g=pi;break;case"focusout":N="blur",g=pi;break;case"beforeblur":case"afterblur":g=pi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jd;break;case ps:case gs:case vs:g=hd;break;case bs:g=Nd;break;case"scroll":case"scrollend":g=sd;break;case"wheel":g=Dd;break;case"copy":case"cut":case"paste":g=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$c;break;case"toggle":case"beforetoggle":g=Ud}var U=(e&4)!==0,an=!U&&(n==="scroll"||n==="scrollend"),f=U?p!==null?p+"Capture":null:p;U=[];for(var o=y,h;o!==null;){var b=o;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||f===null||(b=Bl(o,f),b!=null&&U.push(ha(o,b,h))),an)break;o=o.return}0<U.length&&(p=new g(p,N,null,t,v),x.push({event:p,listeners:U}))}}if((e&7)===0){n:{if(p=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",p&&t!==si&&(N=t.relatedTarget||t.fromElement)&&(Zt(N)||N[Vt]))break n;if((g||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,g?(N=t.relatedTarget||t.toElement,g=y,N=N?Zt(N):null,N!==null&&(an=T(N),U=N.tag,N!==an||U!==5&&U!==27&&U!==6)&&(N=null)):(g=null,N=y),g!==N)){if(U=Wc,b="onMouseLeave",f="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(U=$c,b="onPointerLeave",f="onPointerEnter",o="pointer"),an=g==null?p:Cl(g),h=N==null?p:Cl(N),p=new U(b,o+"leave",g,t,v),p.target=an,p.relatedTarget=h,b=null,Zt(v)===y&&(U=new U(f,o+"enter",N,t,v),U.target=h,U.relatedTarget=an,b=U),an=b,g&&N)e:{for(U=Oh,f=g,o=N,h=0,b=f;b;b=U(b))h++;b=0;for(var O=o;O;O=U(O))b++;for(;0<h-b;)f=U(f),h--;for(;0<b-h;)o=U(o),b--;for(;h--;){if(f===o||o!==null&&f===o.alternate){U=f;break e}f=U(f),o=U(o)}U=null}else U=null;g!==null&&Vf(x,p,g,U,!1),N!==null&&an!==null&&Vf(x,an,N,U,!0)}}n:{if(p=y?Cl(y):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=rs;else if(ls(p))if(is)k=Xd;else{k=Rd;var D=Qd}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?y&&ci(y.elementType)&&(k=rs):k=Gd;if(k&&(k=k(n,y))){as(x,k,t,v);break n}D&&D(n,p,y),n==="focusout"&&y&&p.type==="number"&&y.memoizedProps.value!=null&&ui(p,"number",p.value)}switch(D=y?Cl(y):window,n){case"focusin":(ls(D)||D.contentEditable==="true")&&(nl=D,Si=y,Ll=null);break;case"focusout":Ll=Si=nl=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,hs(x,t,v);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":hs(x,t,v)}var B;if(vi)n:{switch(n){case"compositionstart":var V="onCompositionStart";break n;case"compositionend":V="onCompositionEnd";break n;case"compositionupdate":V="onCompositionUpdate";break n}V=void 0}else Pt?es(n,t)&&(V="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Ic&&t.locale!=="ko"&&(Pt||V!=="onCompositionStart"?V==="onCompositionEnd"&&Pt&&(B=kc()):(Pe=v,di="value"in Pe?Pe.value:Pe.textContent,Pt=!0)),D=Nr(y,V),0<D.length&&(V=new Fc(V,n,null,t,v),x.push({event:V,listeners:D}),B?V.data=B:(B=ts(t),B!==null&&(V.data=B)))),(B=Cd?Bd(n,t):wd(n,t))&&(V=Nr(y,"onBeforeInput"),0<V.length&&(D=new Fc("onBeforeInput","beforeinput",null,t,v),x.push({event:D,listeners:V}),D.data=B)),Eh(x,n,y,t,v)}Xf(x,e)})}function ha(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Nr(n,e){for(var t=e+"Capture",l=[];n!==null;){var a=n,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Bl(n,t),a!=null&&l.unshift(ha(n,a,r)),a=Bl(n,e),a!=null&&l.push(ha(n,a,r))),n.tag===3)return l;n=n.return}return[]}function Oh(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Vf(n,e,t,l,a){for(var r=e._reactName,i=[];t!==null&&t!==l;){var u=t,s=u.alternate,y=u.stateNode;if(u=u.tag,s!==null&&s===l)break;u!==5&&u!==26&&u!==27||y===null||(s=y,a?(y=Bl(t,r),y!=null&&i.unshift(ha(t,y,s))):a||(y=Bl(t,r),y!=null&&i.push(ha(t,y,s)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var Uh=/\r\n?/g,Hh=/\u0000|\uFFFD/g;function Zf(n){return(typeof n=="string"?n:""+n).replace(Uh,`
`).replace(Hh,"")}function Kf(n,e){return e=Zf(e),Zf(n)===e}function ln(n,e,t,l,a,r){switch(t){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Ft(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Ft(n,""+l);break;case"className":Ua(n,"class",l);break;case"tabIndex":Ua(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ua(n,t,l);break;case"style":Vc(n,l,r);break;case"data":if(e!=="object"){Ua(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ca(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(e!=="input"&&ln(n,e,"name",a.name,a,null),ln(n,e,"formEncType",a.formEncType,a,null),ln(n,e,"formMethod",a.formMethod,a,null),ln(n,e,"formTarget",a.formTarget,a,null)):(ln(n,e,"encType",a.encType,a,null),ln(n,e,"method",a.method,a,null),ln(n,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ca(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=He);break;case"onScroll":l!=null&&X("scroll",n);break;case"onScrollEnd":l!=null&&X("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(m(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=Ca(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":X("beforetoggle",n),X("toggle",n),Oa(n,"popover",l);break;case"xlinkActuate":Ue(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oa(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ud.get(t)||t,Oa(n,t,l))}}function Ju(n,e,t,l,a,r){switch(t){case"style":Vc(n,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(m(60));n.innerHTML=t}}break;case"children":typeof l=="string"?Ft(n,l):(typeof l=="number"||typeof l=="bigint")&&Ft(n,""+l);break;case"onScroll":l!=null&&X("scroll",n);break;case"onScrollEnd":l!=null&&X("scrollend",n);break;case"onClick":l!=null&&(n.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bc.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),e=t.slice(2,a?t.length-7:void 0),r=n[Kn]||null,r=r!=null?r[t]:null,typeof r=="function"&&n.removeEventListener(e,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,l,a);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):Oa(n,t,l)}}}function Yn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",n),X("load",n);var l=!1,a=!1,r;for(r in t)if(t.hasOwnProperty(r)){var i=t[r];if(i!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ln(n,e,r,i,t,null)}}a&&ln(n,e,"srcSet",t.srcSet,t,null),l&&ln(n,e,"src",t.src,t,null);return;case"input":X("invalid",n);var u=r=i=a=null,s=null,y=null;for(l in t)if(t.hasOwnProperty(l)){var v=t[l];if(v!=null)switch(l){case"name":a=v;break;case"type":i=v;break;case"checked":s=v;break;case"defaultChecked":y=v;break;case"value":r=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,e));break;default:ln(n,e,l,v,t,null)}}Rc(n,r,u,s,y,i,a,!1);return;case"select":X("invalid",n),l=i=r=null;for(a in t)if(t.hasOwnProperty(a)&&(u=t[a],u!=null))switch(a){case"value":r=u;break;case"defaultValue":i=u;break;case"multiple":l=u;default:ln(n,e,a,u,t,null)}e=r,t=i,n.multiple=!!l,e!=null?Wt(n,!!l,e,!1):t!=null&&Wt(n,!!l,t,!0);return;case"textarea":X("invalid",n),r=a=l=null;for(i in t)if(t.hasOwnProperty(i)&&(u=t[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":a=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:ln(n,e,i,u,t,null)}Xc(n,l,a,r);return;case"option":for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null)&&(s==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":ln(n,e,s,l,t,null));return;case"dialog":X("beforetoggle",n),X("toggle",n),X("cancel",n),X("close",n);break;case"iframe":case"object":X("load",n);break;case"video":case"audio":for(l=0;l<da.length;l++)X(da[l],n);break;case"image":X("error",n),X("load",n);break;case"details":X("toggle",n);break;case"embed":case"source":case"link":X("error",n),X("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in t)if(t.hasOwnProperty(y)&&(l=t[y],l!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ln(n,e,y,l,t,null)}return;default:if(ci(e)){for(v in t)t.hasOwnProperty(v)&&(l=t[v],l!==void 0&&Ju(n,e,v,l,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(l=t[u],l!=null&&ln(n,e,u,l,t,null))}function Ch(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,i=null,u=null,s=null,y=null,v=null;for(g in t){var x=t[g];if(t.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=x;default:l.hasOwnProperty(g)||ln(n,e,g,null,l,x)}}for(var p in l){var g=l[p];if(x=t[p],l.hasOwnProperty(p)&&(g!=null||x!=null))switch(p){case"type":r=g;break;case"name":a=g;break;case"checked":y=g;break;case"defaultChecked":v=g;break;case"value":i=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,e));break;default:g!==x&&ln(n,e,p,g,l,x)}}ii(n,i,u,s,y,v,r,a);return;case"select":g=i=u=p=null;for(r in t)if(s=t[r],t.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":g=s;default:l.hasOwnProperty(r)||ln(n,e,r,null,l,s)}for(a in l)if(r=l[a],s=t[a],l.hasOwnProperty(a)&&(r!=null||s!=null))switch(a){case"value":p=r;break;case"defaultValue":u=r;break;case"multiple":i=r;default:r!==s&&ln(n,e,a,r,l,s)}e=u,t=i,l=g,p!=null?Wt(n,!!t,p,!1):!!l!=!!t&&(e!=null?Wt(n,!!t,e,!0):Wt(n,!!t,t?[]:"",!1));return;case"textarea":g=p=null;for(u in t)if(a=t[u],t.hasOwnProperty(u)&&a!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ln(n,e,u,null,l,a)}for(i in l)if(a=l[i],r=t[i],l.hasOwnProperty(i)&&(a!=null||r!=null))switch(i){case"value":p=a;break;case"defaultValue":g=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(m(91));break;default:a!==r&&ln(n,e,i,a,l,r)}Gc(n,p,g);return;case"option":for(var N in t)p=t[N],t.hasOwnProperty(N)&&p!=null&&!l.hasOwnProperty(N)&&(N==="selected"?n.selected=!1:ln(n,e,N,null,l,p));for(s in l)p=l[s],g=t[s],l.hasOwnProperty(s)&&p!==g&&(p!=null||g!=null)&&(s==="selected"?n.selected=p&&typeof p!="function"&&typeof p!="symbol":ln(n,e,s,p,l,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in t)p=t[U],t.hasOwnProperty(U)&&p!=null&&!l.hasOwnProperty(U)&&ln(n,e,U,null,l,p);for(y in l)if(p=l[y],g=t[y],l.hasOwnProperty(y)&&p!==g&&(p!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,e));break;default:ln(n,e,y,p,l,g)}return;default:if(ci(e)){for(var an in t)p=t[an],t.hasOwnProperty(an)&&p!==void 0&&!l.hasOwnProperty(an)&&Ju(n,e,an,void 0,l,p);for(v in l)p=l[v],g=t[v],!l.hasOwnProperty(v)||p===g||p===void 0&&g===void 0||Ju(n,e,v,p,l,g);return}}for(var f in t)p=t[f],t.hasOwnProperty(f)&&p!=null&&!l.hasOwnProperty(f)&&ln(n,e,f,null,l,p);for(x in l)p=l[x],g=t[x],!l.hasOwnProperty(x)||p===g||p==null&&g==null||ln(n,e,x,p,l,g)}function kf(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bh(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var a=t[l],r=a.transferSize,i=a.initiatorType,u=a.duration;if(r&&u&&kf(i)){for(i=0,u=a.responseEnd,l+=1;l<t.length;l++){var s=t[l],y=s.startTime;if(y>u)break;var v=s.transferSize,x=s.initiatorType;v&&kf(x)&&(s=s.responseEnd,i+=v*(s<u?1:(u-y)/(s-y)))}if(--l,e+=8*(r+i)/(a.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wu=null,Fu=null;function Mr(n){return n.nodeType===9?n:n.ownerDocument}function Jf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wf(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function $u(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=null;function wh(){var n=window.event;return n&&n.type==="popstate"?n===Iu?!1:(Iu=n,!0):(Iu=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,Yh=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(n){return $f.resolve(null).then(n).catch(Qh)}:Ff;function Qh(n){setTimeout(function(){throw n})}function pt(n){return n==="head"}function If(n,e){var t=e,l=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(a),El(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")ya(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ya(t);for(var r=t.firstChild;r;){var i=r.nextSibling,u=r.nodeName;r[Hl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=i}}else t==="body"&&ya(n.ownerDocument.body);t=a}while(t);El(e)}function Pf(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function Pu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Pu(t),ai(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Rh(n,e,t,l){for(;n.nodeType===1;){var a=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Hl])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=ve(n.nextSibling),n===null)break}return null}function Gh(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=ve(n.nextSibling),n===null))return null;return n}function nm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ve(n.nextSibling),n===null))return null;return n}function nc(n){return n.data==="$?"||n.data==="$~"}function ec(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Xh(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ve(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var tc=null;function em(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return ve(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function tm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function lm(n,e,t){switch(e=Mr(t),n){case"html":if(n=e.documentElement,!n)throw Error(m(452));return n;case"head":if(n=e.head,!n)throw Error(m(453));return n;case"body":if(n=e.body,!n)throw Error(m(454));return n;default:throw Error(m(451))}}function ya(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);ai(n)}var be=new Map,am=new Set;function Dr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var We=j.d;j.d={f:Lh,r:Vh,D:Zh,C:Kh,L:kh,m:Jh,X:Fh,S:Wh,M:$h};function Lh(){var n=We.f(),e=xr();return n||e}function Vh(n){var e=Kt(n);e!==null&&e.tag===5&&e.type==="form"?_o(e):We.r(n)}var Al=typeof document>"u"?null:document;function rm(n,e,t){var l=Al;if(l&&typeof e=="string"&&e){var a=fe(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),am.has(a)||(am.add(a),n={rel:n,crossOrigin:t,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),Yn(e,"link",n),Dn(e),l.head.appendChild(e)))}}function Zh(n){We.D(n),rm("dns-prefetch",n,null)}function Kh(n,e){We.C(n,e),rm("preconnect",n,e)}function kh(n,e,t){We.L(n,e,t);var l=Al;if(l&&n&&e){var a='link[rel="preload"][as="'+fe(e)+'"]';e==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+fe(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+fe(t.imageSizes)+'"]')):a+='[href="'+fe(n)+'"]';var r=a;switch(e){case"style":r=Tl(n);break;case"script":r=jl(n)}be.has(r)||(n=E({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),be.set(r,n),l.querySelector(a)!==null||e==="style"&&l.querySelector(pa(r))||e==="script"&&l.querySelector(ga(r))||(e=l.createElement("link"),Yn(e,"link",n),Dn(e),l.head.appendChild(e)))}}function Jh(n,e){We.m(n,e);var t=Al;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+fe(l)+'"][href="'+fe(n)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=jl(n)}if(!be.has(r)&&(n=E({rel:"modulepreload",href:n},e),be.set(r,n),t.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ga(r)))return}l=t.createElement("link"),Yn(l,"link",n),Dn(l),t.head.appendChild(l)}}}function Wh(n,e,t){We.S(n,e,t);var l=Al;if(l&&n){var a=kt(l).hoistableStyles,r=Tl(n);e=e||"default";var i=a.get(r);if(!i){var u={loading:0,preload:null};if(i=l.querySelector(pa(r)))u.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":e},t),(t=be.get(r))&&lc(n,t);var s=i=l.createElement("link");Dn(s),Yn(s,"link",n),s._p=new Promise(function(y,v){s.onload=y,s.onerror=v}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Or(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:u},a.set(r,i)}}}function Fh(n,e){We.X(n,e);var t=Al;if(t&&n){var l=kt(t).hoistableScripts,a=jl(n),r=l.get(a);r||(r=t.querySelector(ga(a)),r||(n=E({src:n,async:!0},e),(e=be.get(a))&&ac(n,e),r=t.createElement("script"),Dn(r),Yn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function $h(n,e){We.M(n,e);var t=Al;if(t&&n){var l=kt(t).hoistableScripts,a=jl(n),r=l.get(a);r||(r=t.querySelector(ga(a)),r||(n=E({src:n,async:!0,type:"module"},e),(e=be.get(a))&&ac(n,e),r=t.createElement("script"),Dn(r),Yn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function im(n,e,t,l){var a=(a=Fe.current)?Dr(a):null;if(!a)throw Error(m(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Tl(t.href),t=kt(a).hoistableStyles,l=t.get(e),l||(l={type:"style",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Tl(t.href);var r=kt(a).hoistableStyles,i=r.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,i),(r=a.querySelector(pa(n)))&&!r._p&&(i.instance=r,i.state.loading=5),be.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},be.set(n,t),r||Ih(a,n,t,i.state))),e&&l===null)throw Error(m(528,""));return i}if(e&&l!==null)throw Error(m(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jl(t),t=kt(a).hoistableScripts,l=t.get(e),l||(l={type:"script",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,n))}}function Tl(n){return'href="'+fe(n)+'"'}function pa(n){return'link[rel="stylesheet"]['+n+"]"}function um(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function Ih(n,e,t,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Yn(e,"link",t),Dn(e),n.head.appendChild(e))}function jl(n){return'[src="'+fe(n)+'"]'}function ga(n){return"script[async]"+n}function cm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+fe(t.href)+'"]');if(l)return e.instance=l,Dn(l),l;var a=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Dn(l),Yn(l,"style",a),Or(l,t.precedence,n),e.instance=l;case"stylesheet":a=Tl(t.href);var r=n.querySelector(pa(a));if(r)return e.state.loading|=4,e.instance=r,Dn(r),r;l=um(t),(a=be.get(a))&&lc(l,a),r=(n.ownerDocument||n).createElement("link"),Dn(r);var i=r;return i._p=new Promise(function(u,s){i.onload=u,i.onerror=s}),Yn(r,"link",l),e.state.loading|=4,Or(r,t.precedence,n),e.instance=r;case"script":return r=jl(t.src),(a=n.querySelector(ga(r)))?(e.instance=a,Dn(a),a):(l=t,(a=be.get(r))&&(l=E({},t),ac(l,a)),n=n.ownerDocument||n,a=n.createElement("script"),Dn(a),Yn(a,"link",l),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Or(l,t.precedence,n));return e.instance}function Or(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,i=0;i<l.length;i++){var u=l[i];if(u.dataset.precedence===e)r=u;else if(r!==a)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function lc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function ac(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Ur=null;function sm(n,e,t){if(Ur===null){var l=new Map,a=Ur=new Map;a.set(t,l)}else a=Ur,l=a.get(t),l||(l=new Map,a.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),a=0;a<t.length;a++){var r=t[a];if(!(r[Hl]||r[Cn]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(e)||"";i=n+i;var u=l.get(i);u?u.push(r):l.set(i,[r])}}return l}function om(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Ph(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function fm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function ny(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Tl(l.href),r=e.querySelector(pa(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Hr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Dn(r);return}r=e.ownerDocument||e,l=um(l),(a=be.get(a))&&lc(l,a),r=r.createElement("link"),Dn(r);var i=r;i._p=new Promise(function(u,s){i.onload=u,i.onerror=s}),Yn(r,"link",l),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Hr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var rc=0;function ey(n,e){return n.stylesheets&&n.count===0&&Br(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&Br(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4+e);0<n.imgBytes&&rc===0&&(rc=62500*Bh());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Br(n,n.stylesheets),n.unsuspend)){var r=n.unsuspend;n.unsuspend=null,r()}},(n.imgBytes>rc?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Hr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Br(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Cr=null;function Br(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Cr=new Map,e.forEach(ty,n),Cr=null,Hr.call(n))}function ty(n,e){if(!(e.state.loading&4)){var t=Cr.get(n);if(t)var l=t.get(null);else{t=new Map,Cr.set(n,t);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var i=a[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),l=i)}l&&t.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),r=t.get(i)||l,r===l&&t.set(null,a),t.set(i,a),this.count++,l=Hr.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var va={$$typeof:I,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function ly(n,e,t,l,a,r,i,u,s){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.hiddenUpdates=ni(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function mm(n,e,t,l,a,r,i,u,s,y,v,x){return n=new ly(n,e,t,i,s,y,v,x,u),e=1,r===!0&&(e|=24),r=ae(3,null,null,e),n.current=r,r.stateNode=n,e=Yi(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:l,isDehydrated:t,cache:e},Xi(r),n}function dm(n){return n?(n=ll,n):ll}function hm(n,e,t,l,a,r){a=dm(a),l.context===null?l.context=a:l.pendingContext=a,l=rt(e),l.payload={element:t},r=r===void 0?null:r,r!==null&&(l.callback=r),t=it(n,l,e),t!==null&&(In(t,n,e),Fl(t,n,e))}function ym(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ic(n,e){ym(n,e),(n=n.alternate)&&ym(n,e)}function pm(n){if(n.tag===13||n.tag===31){var e=Dt(n,67108864);e!==null&&In(e,n,67108864),ic(n,67108864)}}function gm(n){if(n.tag===13||n.tag===31){var e=se();e=ei(e);var t=Dt(n,e);t!==null&&In(t,n,e),ic(n,e)}}var wr=!0;function ay(n,e,t,l){var a=_.T;_.T=null;var r=j.p;try{j.p=2,uc(n,e,t,l)}finally{j.p=r,_.T=a}}function ry(n,e,t,l){var a=_.T;_.T=null;var r=j.p;try{j.p=8,uc(n,e,t,l)}finally{j.p=r,_.T=a}}function uc(n,e,t,l){if(wr){var a=cc(l);if(a===null)ku(n,e,l,qr,t),bm(n,l);else if(uy(a,n,e,t,l))l.stopPropagation();else if(bm(n,l),e&4&&-1<iy.indexOf(n)){for(;a!==null;){var r=Kt(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Tt(r.pendingLanes);if(i!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;i;){var s=1<<31-te(i);u.entanglements[1]|=s,i&=~s}Me(r),(F&6)===0&&(br=ne()+500,ma(0))}}break;case 31:case 13:u=Dt(r,2),u!==null&&In(u,r,2),xr(),ic(r,2)}if(r=cc(l),r===null&&ku(n,e,l,qr,t),r===a)break;a=r}a!==null&&l.stopPropagation()}else ku(n,e,l,null,t)}}function cc(n){return n=oi(n),sc(n)}var qr=null;function sc(n){if(qr=null,n=Zt(n),n!==null){var e=T(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=Q(e),n!==null)return n;n=null}else if(t===31){if(n=un(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return qr=n,null}function vm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zm()){case Ac:return 2;case Tc:return 8;case ja:case Km:return 32;case jc:return 268435456;default:return 32}default:return 32}}var oc=!1,gt=null,vt=null,bt=null,ba=new Map,_a=new Map,_t=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bm(n,e){switch(n){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function xa(n,e,t,l,a,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Kt(e),e!==null&&pm(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function uy(n,e,t,l,a){switch(e){case"focusin":return gt=xa(gt,n,e,t,l,a),!0;case"dragenter":return vt=xa(vt,n,e,t,l,a),!0;case"mouseover":return bt=xa(bt,n,e,t,l,a),!0;case"pointerover":var r=a.pointerId;return ba.set(r,xa(ba.get(r)||null,n,e,t,l,a)),!0;case"gotpointercapture":return r=a.pointerId,_a.set(r,xa(_a.get(r)||null,n,e,t,l,a)),!0}return!1}function _m(n){var e=Zt(n.target);if(e!==null){var t=T(e);if(t!==null){if(e=t.tag,e===13){if(e=Q(t),e!==null){n.blockedOn=e,Uc(n.priority,function(){gm(t)});return}}else if(e===31){if(e=un(t),e!==null){n.blockedOn=e,Uc(n.priority,function(){gm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cc(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);si=l,t.target.dispatchEvent(l),si=null}else return e=Kt(t),e!==null&&pm(e),n.blockedOn=t,!1;e.shift()}return!0}function xm(n,e,t){Yr(n)&&t.delete(e)}function cy(){oc=!1,gt!==null&&Yr(gt)&&(gt=null),vt!==null&&Yr(vt)&&(vt=null),bt!==null&&Yr(bt)&&(bt=null),ba.forEach(xm),_a.forEach(xm)}function Qr(n,e){n.blockedOn===e&&(n.blockedOn=null,oc||(oc=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,cy)))}var Rr=null;function Sm(n){Rr!==n&&(Rr=n,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Rr===n&&(Rr=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],a=n[e+2];if(typeof l!="function"){if(sc(l||t)===null)continue;break}var r=Kt(t);r!==null&&(n.splice(e,3),e-=3,cu(r,{pending:!0,data:a,method:t.method,action:l},l,a))}}))}function El(n){function e(s){return Qr(s,n)}gt!==null&&Qr(gt,n),vt!==null&&Qr(vt,n),bt!==null&&Qr(bt,n),ba.forEach(e),_a.forEach(e);for(var t=0;t<_t.length;t++){var l=_t[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<_t.length&&(t=_t[0],t.blockedOn===null);)_m(t),t.blockedOn===null&&_t.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var a=t[l],r=t[l+1],i=a[Kn]||null;if(typeof r=="function")i||Sm(t);else if(i){var u=null;if(r&&r.hasAttribute("formAction")){if(a=r,i=r[Kn]||null)u=i.formAction;else if(sc(a)!==null)continue}else u=i.action;typeof u=="function"?t[l+1]=u:(t.splice(l,3),l-=3),Sm(t)}}}function zm(){function n(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function fc(n){this._internalRoot=n}Gr.prototype.render=fc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(m(409));var t=e.current,l=se();hm(t,l,n,e,null,null)},Gr.prototype.unmount=fc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;hm(n.current,2,null,n,null,null),xr(),e[Vt]=null}};function Gr(n){this._internalRoot=n}Gr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Oc();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_t.length&&e!==0&&e<_t[t].priority;t++);_t.splice(t,0,n),t===0&&_m(n)}};var Am=z.version;if(Am!=="19.2.4")throw Error(m(527,Am,"19.2.4"));j.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(m(188)):(n=Object.keys(n).join(","),Error(m(268,n)));return n=w(e),n=n!==null?$(n):null,n=n===null?null:n.stateNode,n};var sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Dl=Xr.inject(sy),ee=Xr}catch{}}return Sa.createRoot=function(n,e){if(!A(n))throw Error(m(299));var t=!1,l="",a=Do,r=Oo,i=Uo;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mm(n,1,!1,null,null,t,l,null,a,r,i,zm),n[Vt]=e.current,Ku(n),new fc(e)},Sa.hydrateRoot=function(n,e,t){if(!A(n))throw Error(m(299));var l=!1,a="",r=Do,i=Oo,u=Uo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(s=t.formState)),e=mm(n,1,!0,e,t??null,l,a,s,r,i,u,zm),e.context=dm(null),t=e.current,l=se(),l=ei(l),a=rt(l),a.callback=null,it(t,a,l),t=l,e.current.lanes=t,Ul(e,t),Me(e),n[Vt]=e.current,Ku(n),new Gr(e)},Sa.version="19.2.4",Sa}var Om;function Uy(){if(Om)return dc.exports;Om=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(z){console.error(z)}}return d(),dc.exports=Oy(),dc.exports}var Hy=Uy();const Cy={siteTitle:"Aitenry · 写代码，也写生活",navigation:{home:"首页",diaries:"日记",articles:"文章",search:"搜索",typeToSearch:"输入关键词，搜索文章与日记…",startTypingToSearch:"开始输入以搜索",noArticlesFound:"没有找到相关内容",tryADifferentSearchTerm:"换个关键词试试",toggleTheme:"切换主题",skip:"跳到主内容",kbdHint:"↑↓ 选择 · ⏎ 打开 · ESC 关闭"},notFound:{title:"页面不存在",desc:"你访问的页面不存在或已被移除。",back:"返回首页"},common:{back:"返回",copy:"复制",copied:"已复制",copyCode:"复制代码",publishedOn:"发布于",words:"字",minRead:"分钟",backToArticles:"返回文章",backToDiaries:"返回日记",readMore:"阅读全文",readDiary:"阅读日记",backToTop:"回到顶部",prev:"上一篇",next:"下一篇",tableOfContents:"目录",all:"全部",reading:"阅读进度"},articleNotFound:{title:"文章不存在",desc:"这篇文章可能已被移除，或链接有误。",back:"返回文章"},diaryNotFound:{title:"日记不存在",desc:"这篇日记可能已被移除，或链接有误。",back:"返回日记"},home:{headline1:"写代码，",headline2:"也写生活",roles:"全栈开发者 · 产品设计师 · 开源贡献者",nowPrefix:"现在：正在构建",nowTarget:"RytenBench",ctaArticles:"阅读文章",ctaProjects:"查看项目",statsArticles:"篇文章",statsDiaries:"篇日记",statsProjects:"开源项目",statsSkills:"项技术栈",scroll:"向下滚动",marquee:["全栈开发","AI 应用","开源","TypeScript","Java","Vue","写作","设计","阅读","折腾","咖啡","凌晨"]},about:{eyebrow:"关于",title:"关于我",meta:["坐标 · 中国","状态 · 持续构建中","现在 · RytenBench"],desc1:"我是一名专注于 AI 与 Web 技术融合的开发者，正在构建智能系统与 AI 驱动的应用。相信技术能创造更美好的未来，也相信代码之外还有生活。",desc2:"热衷探索技术前沿，关注 AI 在信息管理领域的落地。注重代码质量与用户体验，追求简单而高效的解决方案——这也是我写每一行代码的标准。",quote:"衡量生命的尺度是思想和行为，而不是时间。",tags:["AI 应用","Web 全栈","开源","设计"]},skills:{eyebrow:"技术栈",title:"技术栈"},projects:{eyebrow:"项目",title:"开源项目",iimsDescription:"AI 驱动的智能信息管理平台（已被收购）",rytenDescription:"轻量级个人 AI 工作台",viewProject:"查看项目",statusActive:"开发中",statusAcquired:"已收购 · 停止更新"},articles:{eyebrow:"文章",title:"文章",total:"篇"},diaries:{eyebrow:"日记",title:"日记",total:"篇"},footer:{eyebrow:"未完待续",closing:"保持好奇，继续折腾。",rights:"保留所有权利"}},By={siteTitle:"Aitenry · Write code, live a life",navigation:{home:"Home",diaries:"Diaries",articles:"Articles",search:"Search",typeToSearch:"Search articles & diaries…",startTypingToSearch:"Start typing to search",noArticlesFound:"Nothing found",tryADifferentSearchTerm:"Try another keyword",toggleTheme:"Toggle theme",skip:"Skip to content",kbdHint:"↑↓ navigate · ⏎ open · ESC close"},notFound:{title:"Page not found",desc:"The page you are looking for does not exist or has been removed.",back:"Back to Home"},common:{back:"Back",copy:"Copy",copied:"Copied",copyCode:"Copy code",publishedOn:"Published on",words:"words",minRead:"min",backToArticles:"Back to Articles",backToDiaries:"Back to Diaries",readMore:"Read more",readDiary:"Read diary",backToTop:"Back to top",prev:"Previous",next:"Next",tableOfContents:"Contents",all:"All",reading:"Reading"},articleNotFound:{title:"Article not found",desc:"This article may have been removed, or the link is broken.",back:"Back to Articles"},diaryNotFound:{title:"Diary not found",desc:"This diary may have been removed, or the link is broken.",back:"Back to Diaries"},home:{headline1:"Write code,",headline2:"live a life",roles:"Full-Stack Developer · Product Designer · Open-Source Contributor",nowPrefix:"NOW: Building",nowTarget:"RytenBench",ctaArticles:"Read Articles",ctaProjects:"View Projects",statsArticles:"Articles",statsDiaries:"Diaries",statsProjects:"Projects",statsSkills:"Skills",scroll:"Scroll",marquee:["FULL-STACK","AI APPS","OPEN SOURCE","TYPESCRIPT","JAVA","VUE","WRITING","DESIGN","READING","HACKING","COFFEE","MIDNIGHT"]},about:{eyebrow:"About",title:"About Me",meta:["Location · China","Status · Building","Now · RytenBench"],desc1:"A developer focused on blending AI with the web, building intelligent systems and AI-powered applications. I believe technology can create a better future — and that there is more to life than code.",desc2:"I explore the technical frontier, especially how AI lands in information management. I care about code quality and user experience, always chasing simple yet efficient solutions.",quote:"Life is measured by thought and action, not by time.",tags:["AI Apps","Web Full-Stack","Open Source","Design"]},skills:{eyebrow:"Stack",title:"Tech Stack"},projects:{eyebrow:"Projects",title:"Open Source",iimsDescription:"AI-powered intelligent information management platform (acquired)",rytenDescription:"Lightweight personal AI workbench",viewProject:"View project",statusActive:"Active",statusAcquired:"Acquired"},articles:{eyebrow:"Articles",title:"Articles",total:"TOTAL"},diaries:{eyebrow:"Diaries",title:"Diaries",total:"TOTAL"},footer:{eyebrow:"TO BE CONTINUED",closing:"Stay curious, keep building.",rights:"All rights reserved"}},wy=()=>(navigator.language||navigator.userLanguage||"zh").startsWith("zh")?"zh":"en";yy.use(py).init({resources:{zh:{translation:Cy},en:{translation:By}},lng:wy(),fallbackLng:"zh",interpolation:{escapeValue:!1}});const qy="modulepreload",Yy=function(d){return"/"+d},Um={},Ym=function(z,S,m){let A=Promise.resolve();if(S&&S.length>0){let W=function(w){return Promise.all(w.map($=>Promise.resolve($).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const Q=document.querySelector("meta[property=csp-nonce]"),un=Q?.nonce||Q?.getAttribute("nonce");A=W(S.map(w=>{if(w=Yy(w),w in Um)return;Um[w]=!0;const $=w.endsWith(".css"),E=$?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${E}`))return;const q=document.createElement("link");if(q.rel=$?"stylesheet":qy,$||(q.as="script"),q.crossOrigin="",q.href=w,un&&q.setAttribute("nonce",un),document.head.appendChild(q),$)return new Promise((Tn,dn)=>{q.addEventListener("load",Tn),q.addEventListener("error",()=>dn(new Error(`Unable to preload CSS for ${w}`)))})}))}function T(Q){const un=new Event("vite:preloadError",{cancelable:!0});if(un.payload=Q,window.dispatchEvent(un),!un.defaultPrevented)throw Q}return A.then(Q=>{for(const un of Q||[])un.status==="rejected"&&T(un.reason);return z().catch(T)})},Qy='## 分支命名前缀及含义\r\n\r\n| 前缀          | 全称            | 用途             | 示例                                              |\r\n|-------------|---------------|----------------|-------------------------------------------------|\r\n| `feat/`     | feature       | 新功能开发          | `feat/user-auth`, `feat/payment-gateway`        |\r\n| `fix/`      | fix           | Bug 修复         | `fix/login-error`, `fix/null-pointer`           |\r\n| `release/`  | release       | 版本发布准备         | `release/v2.1.0`, `release/2024-q1`             |\r\n| `hotfix/`   | hotfix        | 紧急线上修复         | `hotfix/prod-crash`, `hotfix/security-patch`    |\r\n| `refactor/` | refactor      | 代码重构（不改功能）     | `refactor/api-client`, `refactor/db-layer`      |\r\n| `style/`    | style         | 代码格式调整（空格、分号等） | `style/lint-fix`, `style/format-code`           |\r\n| `docs/`     | documentation | 文档更新           | `docs/readme-update`, `docs/api-docs`           |\r\n| `test/`     | test          | 测试相关           | `test/unit-tests`, `test/e2e-coverage`          |\r\n| `chore/`    | chore         | 构建/工具/依赖更新     | `chore/upgrade-deps`, `chore/ci-config`         |\r\n| `perf/`     | performance   | 性能优化           | `perf/query-optimization`, `perf/image-loading` |\r\n| `ci/`       | ci/cd         | CI/CD 配置       | `ci/github-actions`, `ci/deployment-pipeline`   |\r\n| `build/`    | build         | 构建系统/编译相关      | `build/webpack-config`, `build/dockerfile`      |\r\n\r\n---\r\n\r\n## 实际工作流示例\r\n\r\n### 开发新功能（Jira 集成）\r\n\r\n```bash\r\n# 1. 同步主干\r\ngit checkout main && git pull\r\n\r\n# 2. 创建分支（含任务 ID）\r\ngit checkout -b feat/PROJ-456-add-search-bar\r\n\r\n# 3. 开发并提交（提交信息也用相同规范）\r\ngit commit -m "feat(search): add keyword search bar"\r\ngit commit -m "test(search): add unit tests for search"\r\n\r\n# 4. 推送并创建 PR\r\ngit push -u origin feat/PROJ-456-add-search-bar\r\n# → GitHub/GitLab 会自动识别类型并打标签\r\n```\r\n\r\n### 紧急线上修复\r\n\r\n```bash\r\ngit checkout main && git pull\r\ngit checkout -b fix/PROJ-789-payment-failure\r\n\r\n# 修复后提交\r\ngit commit -m "fix(payment): handle null response from gateway"\r\n\r\n# PR 到 main，快速审批合并\r\ngit push origin fix/PROJ-789-payment-failure\r\n```\r\n\r\n### 准备发布\r\n\r\n```bash\r\n# 从 main 创建发布分支\r\ngit checkout main && git pull\r\ngit checkout -b release/v2.1.0\r\n\r\n# 进行最后测试、更新版本号、CHANGELOG\r\ngit commit -m "chore(release): bump version to 2.1.0"\r\ngit commit -m "docs(changelog): update for v2.1.0"\r\n\r\n# 合并到 main 并打 Tag\r\ngit checkout main\r\ngit merge --no-ff release/v2.1.0\r\ngit tag -a v2.1.0 -m "Release v2.1.0"\r\ngit push origin main --tags\r\n\r\n# （可选）合并到 develop（如果使用 Git Flow）\r\n```\r\n\r\n---',Ry=`## #规范代码格式\r
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
`,Nl=[{id:"1",title:"Python 编程指南",date:"2024-03-15",excerpt:"Python 基础语法和编程技巧指南。",content:Ry,tags:["Python","Programming","Beginner"]},{id:"2",title:"Git 分支命名规则",date:"2024-03-10",excerpt:"规范化的 Git 分支命名规范和最佳实践。",content:Qy,tags:["Git","Version Control","Best Practices"]}],Gy=`<div style="text-align: center;">\r
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
`,Xy=`<div style="text-align: center;">\r
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
`,Ly=`Intelligent Information Management System (IIMS) - AI驱动的智能信息管理平台。\r
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
`,Vy=`## 个人 AI 工作台\r
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
`,Ml=[{id:"1",title:"RytenBench",date:"2026-02-17",weather:"多云",mood:"思考",excerpt:"发布下一个项目的规划与定位！",content:Vy,tags:["项目","AI","工具","工作区"]},{id:"2",title:"IIMS-By-AI v0.1.0",date:"2026-01-31",weather:"晴",mood:"激动",excerpt:"今天终于完成了 IIMS-By-AI 项目的第一个版本！",content:Ly,tags:["项目","AI","智能系统","IIMS"]},{id:"3",title:"题记-2020.12.28.夜",date:"2020-12-28",weather:"夜",mood:"别离",excerpt:"别离 - 亭院门前叶纷飞，落日西下人憔悴。",content:Xy,tags:["诗","别离","感悟"]},{id:"4",title:"题记-2020.6.12.夜",date:"2020-06-12",weather:"夜",mood:"感伤",excerpt:"忆思首 - 吾坐台前思旧事，月光透雾照台前。",content:Gy,tags:["诗","感悟","生活"]}],Hm=["home","diaries","articles"],Zy=({activeSection:d,isDarkMode:z,onToggleTheme:S,handleNavClick:m})=>{const{t:A}=Vn(),T=Vr(),[Q,un]=K.useState(!1),[W,w]=K.useState(!1),[$,E]=K.useState(""),[q,Tn]=K.useState(!1),[dn,jn]=K.useState(0),Zn=K.useRef(null),Pn=K.useRef(null),{scrollY:Ae}=_c();qm(Ae,"change",M=>un(M>24)),K.useEffect(()=>(document.body.style.overflow=W||q?"hidden":"",()=>{document.body.style.overflow=""}),[W,q]),K.useEffect(()=>{const M=Y=>{(Y.metaKey||Y.ctrlKey)&&Y.key.toLowerCase()==="k"&&(Y.preventDefault(),w(yn=>!yn))};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[]),K.useEffect(()=>{if(W){const M=setTimeout(()=>Zn.current?.focus(),60);return()=>clearTimeout(M)}},[W]);const I=$.trim().toLowerCase(),Un=I?Nl.filter(M=>M.title.toLowerCase().includes(I)||M.excerpt.toLowerCase().includes(I)||M.tags.some(Y=>Y.toLowerCase().includes(I))):[],R=I?Ml.filter(M=>M.title.toLowerCase().includes(I)||M.excerpt.toLowerCase().includes(I)||M.tags.some(Y=>Y.toLowerCase().includes(I))):[],Hn=[...R.map(M=>({to:`/diary/${M.id}`,title:M.title,excerpt:M.excerpt})),...Un.map(M=>({to:`/article/${M.id}`,title:M.title,excerpt:M.excerpt}))],Rn=K.useRef(Hn),En=K.useRef(dn);K.useEffect(()=>{Rn.current=Hn}),K.useEffect(()=>{En.current=dn}),K.useEffect(()=>{if(!W)return;const M=Y=>{if(Y.key==="Escape"){w(!1);return}const yn=Rn.current;if(yn.length!==0){if(Y.key==="ArrowDown")Y.preventDefault(),jn(Nn=>Math.min(Nn+1,yn.length-1));else if(Y.key==="ArrowUp")Y.preventDefault(),jn(Nn=>Math.max(Nn-1,0));else if(Y.key==="Enter"){Y.preventDefault();const Nn=yn[En.current];Nn&&(w(!1),E(""),T(Nn.to))}}};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[W,T]),K.useEffect(()=>{Pn.current?.scrollIntoView({block:"nearest"})},[dn]);const Gn="flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)] cursor-pointer",De=()=>I?R.length===0&&Un.length===0?c.jsxs("div",{className:"py-14 text-center",children:[c.jsx("p",{className:"text-sm font-medium",children:A("navigation.noArticlesFound")}),c.jsx("p",{className:"mt-1 eyebrow text-mute",children:A("navigation.tryADifferentSearchTerm")})]}):c.jsxs("div",{className:"space-y-6",children:[R.length>0&&c.jsxs("div",{children:[c.jsx("h4",{className:"eyebrow mb-1 px-1 text-mute",children:A("navigation.diaries")}),c.jsx("div",{className:"h-rule"}),R.map((M,Y)=>{const yn=Y===dn;return c.jsxs(zt,{prefetch:"intent",to:`/diary/${M.id}`,ref:yn?Nn=>{Pn.current=Nn}:void 0,onClick:()=>{w(!1),E("")},className:`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${yn?"bg-soft":""}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:`truncate font-display text-base font-medium ${yn?"text-[var(--accent)]":""}`,children:M.title}),c.jsx("p",{className:"mt-0.5 line-clamp-1 text-xs text-mute",children:M.excerpt})]}),c.jsx(Em,{size:16,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"})]},`d-${M.id}`)})]}),Un.length>0&&c.jsxs("div",{children:[c.jsx("h4",{className:"eyebrow mb-1 px-1 text-mute",children:A("navigation.articles")}),c.jsx("div",{className:"h-rule"}),Un.map((M,Y)=>{const yn=R.length+Y===dn;return c.jsxs(zt,{prefetch:"intent",to:`/article/${M.id}`,ref:yn?Nn=>{Pn.current=Nn}:void 0,onClick:()=>{w(!1),E("")},className:`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${yn?"bg-soft":""}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:`truncate font-display text-base font-medium ${yn?"text-[var(--accent)]":""}`,children:M.title}),c.jsx("p",{className:"mt-0.5 line-clamp-1 text-xs text-mute",children:M.excerpt})]}),c.jsx(Em,{size:16,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"})]},`a-${M.id}`)})]})]}):c.jsx("div",{className:"py-14 text-center eyebrow text-mute",children:A("navigation.startTypingToSearch")});return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${Q?"border-b border-line bg-[var(--paper)]/90 backdrop-blur-md":"border-b border-transparent"}`,children:c.jsxs("nav",{className:"mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8",children:[c.jsxs(zt,{to:"/home",onClick:M=>m(M,"home"),className:"font-display text-xl font-semibold tracking-tight transition-colors duration-200 hover:text-[var(--accent)]",children:["Aitenry",c.jsx("span",{className:"text-accent",children:"."})]}),c.jsx("div",{className:"hidden items-center gap-8 md:flex",children:Hm.map((M,Y)=>{const yn=d===M;return c.jsxs(zt,{to:`/${M}`,onClick:Nn=>m(Nn,M),className:`eyebrow link-underline transition-colors duration-200 ${yn?"text-accent":"text-mute hover:text-ink"}`,children:[c.jsxs("span",{className:"mr-1 opacity-60",children:["0",Y+1]}),A(`navigation.${M}`)]},M)})}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>w(!0),"aria-label":A("navigation.search"),className:Gn,children:c.jsx(zy,{size:16})}),c.jsx("button",{onClick:S,"aria-label":A("navigation.toggleTheme"),className:`${Gn} hidden sm:flex`,children:z?c.jsx(Tm,{size:16}):c.jsx(jm,{size:16})}),c.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:`${Gn} hidden sm:flex`,children:c.jsx(Lr,{size:16})}),c.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:`${Gn} hidden sm:flex`,children:c.jsx(gc,{size:16})}),c.jsx("button",{onClick:()=>Tn(M=>!M),"aria-label":"menu",className:`${Gn} md:hidden`,children:q?c.jsx(mc,{size:17}):c.jsx(Ay,{size:17})})]})]})}),c.jsx(pc,{children:q&&c.jsxs(ze.div,{initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.25,ease:"easeOut"},className:"fixed inset-0 z-50 bg-[var(--paper)] md:hidden",children:[c.jsx("button",{onClick:()=>Tn(!1),"aria-label":"close menu",className:"absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(mc,{size:17})}),c.jsxs("div",{className:"flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24",children:[Hm.map((M,Y)=>c.jsx(ze.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.06*Y,duration:.35},className:"border-b border-line",children:c.jsxs(zt,{to:`/${M}`,onClick:yn=>{m(yn,M),Tn(!1)},className:"flex items-baseline gap-4 py-5",children:[c.jsxs("span",{className:"eyebrow text-accent",children:["0",Y+1]}),c.jsx("span",{className:"font-display text-4xl font-semibold",children:A(`navigation.${M}`)})]})},M)),c.jsxs(ze.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25},className:"mt-auto flex items-center justify-between",children:[c.jsxs("div",{className:"flex gap-3",children:[c.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(Lr,{size:19})}),c.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(gc,{size:19})})]}),c.jsxs("button",{onClick:S,className:"eyebrow flex h-11 items-center gap-2 border border-line px-4 text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:[z?c.jsx(Tm,{size:16}):c.jsx(jm,{size:16}),A("navigation.toggleTheme")]})]})]})]})}),c.jsx(pc,{children:W&&c.jsx(ze.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},className:"fixed inset-0 z-50 bg-[var(--paper)]/70 backdrop-blur-sm",onClick:()=>w(!1),children:c.jsxs(ze.div,{initial:{opacity:0,y:-14},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.25,ease:"easeOut"},className:"mx-auto mt-24 w-[calc(100%-2rem)] max-w-2xl border border-line bg-[var(--paper)] p-6 shadow-[8px_8px_0_0_var(--ink)] sm:p-8",onClick:M=>M.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"eyebrow text-accent",children:A("navigation.search")}),c.jsx("button",{onClick:()=>w(!1),"aria-label":"close",className:"flex h-8 w-8 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:c.jsx(mc,{size:16})})]}),c.jsxs("div",{className:"mt-5 flex items-center gap-3 border-b-2 border-[var(--ink)] pb-3",children:[c.jsx(Ty,{size:18,className:"text-mute"}),c.jsx("input",{ref:Zn,type:"text",value:$,onChange:M=>{E(M.target.value),jn(0)},placeholder:A("navigation.typeToSearch"),className:"h-9 flex-1 bg-transparent font-mono text-base text-ink placeholder:text-mute focus:outline-none"}),c.jsx("kbd",{className:"hidden border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mute sm:block",children:"esc"})]}),c.jsx("div",{className:"nice-scroll mt-4 max-h-[52vh] overflow-y-auto",children:De()}),c.jsx("p",{className:"eyebrow mt-4 border-t border-line pt-3 text-mute",children:A("navigation.kbdHint")})]})})})]})},Ky=({scaleX:d})=>c.jsx(ze.div,{className:"fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[var(--accent)]",style:{scaleX:d},"aria-hidden":!0}),ky=["home","diaries","articles"],Jy=()=>{const{t:d}=Vn(),z=new Date().getFullYear();return c.jsxs("footer",{className:"relative z-10 border-t border-line",children:[c.jsx("div",{className:"mx-auto max-w-6xl px-4 py-20 sm:px-6 md:px-8",children:c.jsxs("div",{className:"flex flex-col justify-between gap-10 md:flex-row md:items-end",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow text-accent",children:["/ ",d("footer.eyebrow")]}),c.jsx("h2",{className:"mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl",children:d("footer.closing")})]}),c.jsxs("div",{className:"flex flex-col gap-4 md:items-end",children:[c.jsxs("div",{className:"flex gap-3",children:[c.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:c.jsx(Lr,{size:19})}),c.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:c.jsx(gc,{size:19})})]}),c.jsx("nav",{className:"flex gap-6",children:ky.map(S=>c.jsx(zt,{to:`/${S}`,className:"eyebrow link-underline text-mute transition-colors hover:text-ink",children:d(`navigation.${S}`)},S))})]})]})}),c.jsx("div",{className:"border-t border-line",children:c.jsx("div",{className:"mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 md:px-8",children:c.jsxs("p",{className:"eyebrow text-mute",children:["© ",z," Aitenry · ",d("footer.rights")]})})})]})},Wy=()=>{const{t:d}=Vn(),[z,S]=K.useState(!1),{scrollY:m}=_c();return qm(m,"change",A=>S(A>480)),c.jsx(pc,{children:z&&c.jsx(ze.button,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:12},transition:{duration:.2},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":d("common.backToTop"),title:d("common.backToTop"),className:"fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-[var(--paper)] text-ink transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:c.jsx(jy,{size:17})})})},Fy=()=>c.jsx("div",{"aria-hidden":!0,className:"noise"}),$y=({quantity:d=80,color:z=[.106,.098,.082],size:S=1.5,className:m=""})=>{const A=K.useRef(null);return K.useEffect(()=>{const T=A.current;if(!T)return;const Q=T.getContext("2d");if(!Q)return;const un=window.matchMedia("(prefers-reduced-motion: reduce)").matches,W=Math.min(window.devicePixelRatio||1,2),w={x:-9999,y:-9999};let $=0,E=0,q=0;const Tn=[],dn=()=>{$=window.innerWidth,E=window.innerHeight,T.width=$*W,T.height=E*W,T.style.width=`${$}px`,T.style.height=`${E}px`,Q.setTransform(W,0,0,W,0,0)},jn=()=>{Tn.length=0;for(let I=0;I<d;I++)Tn.push({x:Math.random()*$,y:Math.random()*E,vx:(Math.random()-.5)*.22,vy:-(Math.random()*.18+.04),size:Math.random()*S+S*.4,alpha:Math.random()*.22+.1,pushX:0,pushY:0})},Zn=()=>{Q.clearRect(0,0,$,E);const I=`${Math.round(z[0]*255)}, ${Math.round(z[1]*255)}, ${Math.round(z[2]*255)}`,Un=130;for(const R of Tn){const Hn=R.x-w.x,Rn=R.y-w.y,En=Hn*Hn+Rn*Rn;if(En<Un*Un&&En>.01){const Gn=Math.sqrt(En),De=(1-Gn/Un)*.6;R.pushX+=Hn/Gn*De,R.pushY+=Rn/Gn*De}R.pushX*=.88,R.pushY*=.88,un||(R.x+=R.vx+R.pushX*.35,R.y+=R.vy+R.pushY*.35),R.y<-10&&(R.y=E+10,R.x=Math.random()*$),R.x<-10&&(R.x=$+10),R.x>$+10&&(R.x=-10),Q.beginPath(),Q.arc(R.x,R.y,R.size,0,Math.PI*2),Q.fillStyle=`rgba(${I}, ${R.alpha})`,Q.fill()}q=requestAnimationFrame(Zn)},Pn=I=>{w.x=I.clientX,w.y=I.clientY},Ae=()=>{document.hidden?cancelAnimationFrame(q):q=requestAnimationFrame(Zn)};return dn(),jn(),un?(Zn(),cancelAnimationFrame(q)):q=requestAnimationFrame(Zn),window.addEventListener("resize",dn),window.addEventListener("mousemove",Pn),document.addEventListener("visibilitychange",Ae),()=>{cancelAnimationFrame(q),window.removeEventListener("resize",dn),window.removeEventListener("mousemove",Pn),document.removeEventListener("visibilitychange",Ae)}},[d,z,S]),c.jsx("canvas",{ref:A,"aria-hidden":!0,className:`pointer-events-none fixed inset-0 ${m}`})},Iy=({value:d,duration:z=1.4,suffix:S="",className:m=""})=>{const A=K.useRef(null),T=fy(A,{once:!0,margin:"-40px"}),[Q,un]=K.useState(0);return K.useEffect(()=>{if(!T)return;const W=my(0,d,{duration:z,ease:"easeOut",onUpdate:w=>un(w)});return()=>W.stop()},[T,d,z]),c.jsxs("span",{ref:A,className:`font-mono tabular-nums ${m}`,children:[String(Math.round(Q)).padStart(2,"0"),S]})},vc=[.16,1,.3,1],Qn=({children:d,delay:z=0,y:S=18,className:m=""})=>c.jsx(ze.div,{initial:{opacity:0,y:S},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:z,ease:vc},className:m,children:d}),Qm=[{id:1,title:"RytenBench",descriptionKey:"projects.rytenDescription",tech:["Electron","React","TypeScript","AI"],imageLight:"/ryten-light.svg",imageDark:"/ryten-dark.svg",github:"https://github.com/Aitenry/RytenBench",status:"active"},{id:2,title:"IIMS-By-AI",descriptionKey:"projects.iimsDescription",tech:["Java","Vue","SpringBoot","TypeScript","AI"],imageLight:"/iims-light.svg",imageDark:"/iims-dark.svg",github:"https://github.com/Aitenry/IIMS-By-AI",status:"acquired"}],Rm=[{name:"Java",level:90},{name:"Vue",level:79},{name:"JavaScript",level:79},{name:"TypeScript",level:73},{name:"React",level:72},{name:"Electron",level:70}],Py=()=>{const{t:d}=Vn(),z=Vr(),S=[{value:Nl.length,label:d("home.statsArticles")},{value:Ml.length,label:d("home.statsDiaries")},{value:Qm.length,label:d("home.statsProjects")},{value:Rm.length,label:d("home.statsSkills")}];return c.jsx("section",{id:"home",className:"relative flex min-h-[calc(100svh-4rem)] flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-8",children:c.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[c.jsxs("h1",{className:"font-display text-[13vw] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl",children:[c.jsx("span",{className:"block overflow-hidden pb-1",children:c.jsx(ze.span,{initial:{y:"110%"},animate:{y:0},transition:{duration:.8,ease:vc},className:"block",children:d("home.headline1")})}),c.jsx("span",{className:"block overflow-hidden pb-2",children:c.jsxs(ze.span,{initial:{y:"110%"},animate:{y:0},transition:{duration:.8,delay:.12,ease:vc},className:"block italic",children:[d("home.headline2"),c.jsx("span",{className:"text-accent not-italic",children:"。"})]})})]}),c.jsx(Qn,{delay:.3,children:c.jsx("p",{className:"mt-6 font-mono text-sm text-mute sm:text-base",children:d("home.roles")})}),c.jsx(Qn,{delay:.38,children:c.jsxs("p",{className:"mt-3 flex items-center gap-2 font-mono text-sm sm:text-base",children:[c.jsx("span",{className:"blink inline-block h-3 w-2 shrink-0 bg-[var(--accent)]"}),c.jsx("span",{children:d("home.nowPrefix")}),c.jsx("a",{href:"https://github.com/Aitenry/RytenBench",target:"_blank",rel:"noopener noreferrer",className:"link-underline text-accent transition-opacity duration-200 hover:opacity-70",children:d("home.nowTarget")})]})}),c.jsx(Qn,{delay:.46,children:c.jsxs("div",{className:"mt-8 flex flex-col gap-3 sm:flex-row",children:[c.jsxs("button",{onClick:()=>z("/articles"),className:"group inline-flex cursor-pointer items-center justify-center gap-2 border border-[var(--ink)] bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:[d("home.ctaArticles"),c.jsx(Zr,{size:16,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),c.jsxs("button",{onClick:()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}),className:"group inline-flex cursor-pointer items-center justify-center gap-2 border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-[var(--ink)]",children:[d("home.ctaProjects"),c.jsx(Ey,{size:16,className:"transition-transform duration-300 group-hover:translate-y-0.5"})]})]})}),c.jsx(Qn,{delay:.55,children:c.jsx("div",{className:"mt-12 grid grid-cols-2 border-t border-line sm:grid-cols-4",children:S.map((m,A)=>c.jsxs("div",{className:`px-4 py-6 ${A>0?"border-l border-line":""} ${A>=2?"border-t border-line sm:border-t-0":""}`,children:[c.jsx(Iy,{value:m.value,className:"text-3xl font-medium sm:text-4xl"}),c.jsx("p",{className:"eyebrow mt-2 text-mute",children:m.label})]},m.label))})})]})})},Gm=({children:d,className:z=""})=>c.jsx("span",{className:`eyebrow text-accent ${z}`,children:d}),np=()=>{const{t:d}=Vn(),z=d("about.meta",{returnObjects:!0}),S=d("about.tags",{returnObjects:!0});return c.jsx("section",{id:"about",className:"h-rule px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:c.jsxs("div",{className:"mx-auto grid max-w-6xl gap-14 lg:grid-cols-12",children:[c.jsxs("div",{className:"lg:col-span-4",children:[c.jsx(Qn,{children:c.jsxs(Gm,{children:["01 — ",d("about.eyebrow")]})}),c.jsx(Qn,{delay:.05,children:c.jsx("h2",{className:"mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl",children:d("about.title")})}),c.jsx(Qn,{delay:.12,children:c.jsx("dl",{className:"mt-12 border-t border-line",children:z.map((m,A)=>{const[T,Q]=m.split(" · ");return c.jsxs("div",{className:"flex items-baseline justify-between gap-4 border-b border-line py-3.5",children:[c.jsx("dt",{className:"eyebrow text-mute",children:T}),c.jsx("dd",{className:"font-mono text-sm",children:Q})]},A)})})})]}),c.jsxs("div",{className:"lg:col-span-7 lg:col-start-6",children:[c.jsx(Qn,{delay:.1,children:c.jsx("p",{className:"text-lg leading-relaxed sm:text-xl",children:d("about.desc1")})}),c.jsx(Qn,{delay:.16,children:c.jsx("p",{className:"mt-6 leading-relaxed text-mute",children:d("about.desc2")})}),c.jsx(Qn,{delay:.22,children:c.jsx("blockquote",{className:"mt-14 border-l-2 border-[var(--accent)] pl-6",children:c.jsxs("p",{className:"font-display text-2xl italic leading-snug sm:text-3xl",children:["“",d("about.quote"),"”"]})})}),c.jsx(Qn,{delay:.28,children:c.jsx("div",{className:"mt-10 flex flex-wrap gap-2",children:S.map(m=>c.jsx("span",{className:"border border-line px-3 py-1.5 font-mono text-xs text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",children:m},m))})})]})]})})},Kr=({index:d,label:z,title:S,extra:m,className:A=""})=>c.jsxs("div",{className:`flex items-end justify-between gap-6 ${A}`,children:[c.jsxs("div",{children:[c.jsxs(Gm,{children:[String(d).padStart(2,"0")," — ",z]}),c.jsx("h2",{className:"mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl",children:S})]}),m&&c.jsx("div",{className:"hidden pb-2 sm:block",children:m})]}),ep=()=>{const{t:d}=Vn();return c.jsx("section",{id:"skills",className:"px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-6xl",children:[c.jsx(Kr,{index:2,label:d("skills.eyebrow"),title:d("skills.title")}),c.jsx("div",{className:"mt-14 border-b border-line",children:Rm.map((z,S)=>c.jsx(Qn,{delay:S*.04,children:c.jsxs("div",{className:"group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-soft sm:py-6",children:[c.jsx("span",{className:"col-span-4 font-display text-lg font-medium transition-all duration-300 group-hover:italic group-hover:pl-1 sm:col-span-3 sm:text-xl",children:z.name}),c.jsx("div",{className:"col-span-5 h-[2px] overflow-hidden bg-[var(--line)] sm:col-span-7",children:c.jsx(ze.div,{initial:{width:0},whileInView:{width:`${z.level}%`},viewport:{once:!0},transition:{duration:1.1,delay:.15+S*.06,ease:"easeOut"},className:"h-full bg-[var(--accent)]"})}),c.jsxs("span",{className:"col-span-3 text-right font-mono text-sm text-mute sm:col-span-2",children:[String(z.level).padStart(2,"0"),"%"]})]})},z.name))})]})})},tp=({children:d,href:z,className:S="",external:m=!1})=>c.jsxs("a",{href:z,...m?{target:"_blank",rel:"noopener noreferrer"}:{},className:`group link-underline inline-flex items-center gap-1.5 text-sm font-medium ${S}`,children:[d,c.jsx(Zr,{size:15,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),lp=({isDarkMode:d})=>{const{t:z}=Vn();return c.jsx("section",{id:"projects",className:"h-rule bg-soft px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-6xl",children:[c.jsx(Kr,{index:3,label:z("projects.eyebrow"),title:z("projects.title")}),c.jsx("div",{className:"mt-14 grid gap-px border border-line bg-[var(--line)] md:grid-cols-2",children:Qm.map((S,m)=>c.jsx(Qn,{delay:m*.08,className:"h-full",children:c.jsxs("a",{href:S.github,target:"_blank",rel:"noopener noreferrer",className:"group flex h-full flex-col bg-[var(--paper)] p-6 transition-colors duration-300 hover:bg-soft sm:p-8",children:[c.jsx("div",{className:"aspect-[16/8] overflow-hidden border border-line",children:c.jsx("img",{src:d?S.imageDark:S.imageLight,alt:S.title,loading:"lazy",className:"h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"})}),c.jsxs("div",{className:"mt-6 flex items-baseline justify-between gap-4",children:[c.jsx("h3",{className:"font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl",children:S.title}),c.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[c.jsx("span",{className:`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${S.status==="active"?"border-[var(--accent)] text-[var(--accent)]":"border-line text-mute"}`,children:S.status==="active"?z("projects.statusActive"):z("projects.statusAcquired")}),c.jsxs("span",{className:"font-mono text-xs text-mute",children:["NO.",String(S.id).padStart(2,"0")]})]})]}),c.jsx("p",{className:"mt-3 leading-relaxed text-mute",children:z(S.descriptionKey)}),c.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:S.tech.map(A=>c.jsx("span",{className:"border border-line px-2.5 py-1 font-mono text-[11px] text-mute",children:A},A))}),c.jsxs("div",{className:"mt-auto flex items-center justify-between pt-8",children:[c.jsx(tp,{href:S.github,external:!0,children:z("projects.viewProject")}),c.jsx(Lr,{size:19,className:"text-mute transition-colors duration-300 group-hover:text-[var(--accent)]"})]})]})},S.id))})]})})},ap=({items:d,className:z=""})=>{const S=c.jsx("div",{className:"marquee-track items-center",children:[...d,...d].map((m,A)=>c.jsxs("span",{className:"mx-6 inline-flex items-center gap-6 whitespace-nowrap",children:[m,c.jsx("span",{"aria-hidden":!0,className:"text-[0.6em]",children:"✦"})]},A))});return c.jsx("div",{"aria-hidden":!0,className:`marquee overflow-hidden border-y border-[var(--accent)] bg-accent py-3 text-[var(--accent-ink)] ${z}`,children:c.jsx("div",{className:"eyebrow font-semibold",children:S})})},rp=({isDarkMode:d})=>{const{t:z}=Vn(),S=z("home.marquee",{returnObjects:!0});return c.jsxs(c.Fragment,{children:[c.jsx(Py,{}),c.jsx("div",{className:"relative z-10 -mx-2 -mt-8 rotate-[-1.2deg] sm:mx-0 sm:-mt-10",children:c.jsx(ap,{items:S})}),c.jsx(np,{}),c.jsx(ep,{}),c.jsx(lp,{isDarkMode:d})]})},bc=d=>typeof d=="string"?d:Array.isArray(d)?d.map(bc).join(""):d&&typeof d=="object"&&K.isValidElement(d)?bc(d.props.children):"",Tp=d=>{const z=d.replace(/[#*`[\]()_~]/g,"").replace(/\r?\n/g," ").trim(),S=(z.match(/[\u4e00-\u9fa5]/g)||[]).length,m=z.split(/\s+/).filter(A=>A.length>0).length;return S+m},ip=d=>{const z=d.replace(/[#*`[\]()_~]/g,"").replace(/\r?\n/g," ").trim(),S=(z.match(/[\u4e00-\u9fa5]/g)||[]).length,m=z.split(/\s+/).filter(T=>T.length>0).length,A=S/400+m/200;return Math.max(1,Math.round(A))},up=d=>d.trim().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,""),cp=d=>up(d.replace(/[`*_]/g,"").trim()),jp=d=>{const z=[];for(const S of d.split(/\r?\n/)){const m=S.match(/^(#{2,3})\s+(.+)$/);if(!m)continue;const A=bc(m[2]).trim();A&&z.push({level:m[1].length,title:A,id:cp(A)})}return z},Cm=d=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${d?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,sp=()=>{const{t:d}=Vn(),z=Array.from(new Set(Nl.flatMap(T=>T.tags))),[S,m]=K.useState(null),A=S?Nl.filter(T=>T.tags.includes(S)):Nl;return c.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-5xl",children:[c.jsx(Kr,{index:1,label:d("articles.eyebrow"),title:d("articles.title"),extra:c.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(A.length).padStart(2,"0")," / ",String(Nl.length).padStart(2,"0")]})}),c.jsx(Qn,{children:c.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[c.jsx("button",{onClick:()=>m(null),className:Cm(S===null),children:d("common.all")}),z.map(T=>c.jsx("button",{onClick:()=>m(T===S?null:T),className:Cm(T===S),children:T},T))]})}),c.jsx("div",{className:"border-b border-line",children:A.map((T,Q)=>c.jsx(Qn,{delay:Q*.04,children:c.jsxs(zt,{prefetch:"intent",to:`/article/${T.id}`,className:"group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8",children:[c.jsx("span",{className:"col-span-12 font-mono text-xs text-mute sm:col-span-2",children:T.date}),c.jsxs("div",{className:"col-span-12 sm:col-span-8",children:[c.jsx("h3",{className:"font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl",children:T.title}),c.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-mute",children:T.excerpt})]}),c.jsxs("div",{className:"col-span-12 flex items-center justify-between sm:col-span-2 sm:justify-end",children:[c.jsxs("span",{className:"font-mono text-xs text-mute",children:[ip(T.content)," ",d("common.minRead")]}),c.jsx(Zr,{size:17,className:"text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"})]})]})},T.id))})]})})},xc=d=>{const{t:z}=Vn();K.useEffect(()=>(document.title=d?`${d} — Aitenry`:z("siteTitle"),()=>{document.title=z("siteTitle")}),[d,z])},op=()=>{const{t:d}=Vn();return xc(d("articles.title")),c.jsx("div",{className:"relative min-h-screen",children:c.jsx(sp,{})})},Bm=d=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${d?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,fp=()=>{const{t:d}=Vn(),z=Array.from(new Set(Ml.flatMap(T=>T.tags))),[S,m]=K.useState(null),A=S?Ml.filter(T=>T.tags.includes(S)):Ml;return c.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:c.jsxs("div",{className:"mx-auto max-w-5xl",children:[c.jsx(Kr,{index:2,label:d("diaries.eyebrow"),title:d("diaries.title"),extra:c.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(A.length).padStart(2,"0")," / ",String(Ml.length).padStart(2,"0")]})}),c.jsx(Qn,{children:c.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[c.jsx("button",{onClick:()=>m(null),className:Bm(S===null),children:d("common.all")}),z.map(T=>c.jsx("button",{onClick:()=>m(T===S?null:T),className:Bm(T===S),children:T},T))]})}),c.jsx("div",{className:"border-b border-line",children:A.map((T,Q)=>c.jsx(Qn,{delay:Q*.04,children:c.jsxs(zt,{prefetch:"intent",to:`/diary/${T.id}`,className:"group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8",children:[c.jsxs("div",{className:"col-span-12 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-mute sm:col-span-3",children:[c.jsx("span",{children:T.date}),T.weather&&c.jsx("span",{className:"border border-line px-1.5 py-0.5",children:T.weather}),T.mood&&c.jsx("span",{className:"border border-line px-1.5 py-0.5",children:T.mood})]}),c.jsxs("div",{className:"col-span-12 sm:col-span-7",children:[c.jsx("h3",{className:"font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl",children:T.title}),c.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-mute",children:T.excerpt})]}),c.jsx("div",{className:"col-span-12 flex justify-end sm:col-span-2",children:c.jsx(Zr,{size:17,className:"text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"})})]})},T.id))})]})})},mp=()=>{const{t:d}=Vn();return xc(d("diaries.title")),c.jsx("div",{className:"relative min-h-screen",children:c.jsx(fp,{})})},dp=({code:d,title:z,desc:S,backLabel:m,onBack:A,fullScreen:T=!1})=>c.jsx("div",{className:`relative flex items-center justify-center px-4 ${T?"min-h-[100svh]":"min-h-[70vh]"}`,children:c.jsxs("div",{className:"w-full max-w-md border border-line bg-[var(--paper)] p-10 shadow-[8px_8px_0_0_var(--ink)]",children:[c.jsx("p",{className:"eyebrow text-accent",children:d}),c.jsx("h1",{className:"mt-4 font-display text-4xl font-semibold",children:z}),c.jsx("p",{className:"mt-3 text-sm text-mute",children:S}),c.jsxs("button",{onClick:A,className:"mt-8 inline-flex cursor-pointer items-center gap-2 border border-[var(--ink)] bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:[c.jsx(Ny,{size:15}),m]})]})}),hp=()=>{const{t:d}=Vn(),z=Vr();return xc("404"),c.jsx(dp,{fullScreen:!0,code:"404 — PAGE NOT FOUND",title:d("notFound.title"),desc:d("notFound.desc"),backLabel:d("notFound.back"),onBack:()=>z("/home")})},yp=K.lazy(()=>Ym(()=>import("./ArticlePage-BZXEkiyj.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),pp=K.lazy(()=>Ym(()=>import("./DiaryPage-CXLXJMJV.js"),__vite__mapDeps([7,1,2,3,4,5,6]))),gp=()=>c.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:c.jsxs("p",{className:"eyebrow text-mute",children:["LOADING",c.jsx("span",{className:"blink ml-1 inline-block h-3 w-2 translate-y-0.5 bg-[var(--accent)]"})]})}),vp=()=>{try{const d=localStorage.getItem("blog-theme");if(d==="light")return!1;if(d==="dark")return!0}catch{}return window.matchMedia("(prefers-color-scheme: dark)").matches},bp=()=>{const[d,z]=K.useState(vp),{t:S}=Vn(),m=by(),A=Vr(),{scrollYProgress:T}=_c(),Q=dy(T,{stiffness:100,damping:30,restDelta:.001});let un="";m.pathname==="/home"?un="home":m.pathname==="/diaries"||m.pathname.startsWith("/diary/")?un="diaries":(m.pathname==="/articles"||m.pathname.startsWith("/article/"))&&(un="articles"),K.useEffect(()=>{window.scrollTo(0,0)},[m.pathname]),K.useEffect(()=>{document.querySelector('meta[name="theme-color"]')?.setAttribute("content",d?"#14120E":"#F3F0E9")},[d]);const W=K.useCallback(()=>{z($=>{const E=!$;try{localStorage.setItem("blog-theme",E?"dark":"light")}catch{}return E})},[]),w=($,E)=>{$.preventDefault(),E==="home"?A("/home"):E==="diaries"?A("/diaries"):E==="articles"&&A("/articles")};return c.jsxs("div",{"data-theme":d?"dark":"light",className:"font-sans relative min-h-screen overflow-x-clip bg-[var(--paper)] text-ink transition-colors duration-300",children:[c.jsx(Fy,{}),c.jsx($y,{quantity:80,size:1.5,color:d?[.929,.914,.875]:[.106,.098,.082]}),c.jsxs(_y,{children:[c.jsx(St,{path:"/",element:c.jsx(xy,{to:"/home",replace:!0})}),c.jsxs(St,{element:c.jsxs(c.Fragment,{children:[c.jsx("a",{href:"#main",onClick:$=>{$.preventDefault();const E=document.getElementById("main");E?.focus(),E?.scrollIntoView()},className:"sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper",children:S("navigation.skip")}),c.jsx(Ky,{scaleX:Q}),c.jsx(Zy,{activeSection:un,isDarkMode:d,onToggleTheme:W,handleNavClick:w}),c.jsx("main",{id:"main",tabIndex:-1,className:"relative z-10 pt-16 focus:outline-none",children:c.jsx(K.Suspense,{fallback:c.jsx(gp,{}),children:c.jsx(Sy,{})})}),c.jsx(Jy,{}),c.jsx(Wy,{})]}),children:[c.jsx(St,{path:"/home",element:c.jsx(rp,{isDarkMode:d})}),c.jsx(St,{path:"/articles",element:c.jsx(op,{})}),c.jsx(St,{path:"/article/:id",element:c.jsx(yp,{})}),c.jsx(St,{path:"/diaries",element:c.jsx(mp,{})}),c.jsx(St,{path:"/diary/:id",element:c.jsx(pp,{})})]}),c.jsx(St,{path:"*",element:c.jsx(hp,{})})]})]})},_p=()=>c.jsx(vy,{children:c.jsx(bp,{})}),wm=sessionStorage.getItem("redirect");wm&&(sessionStorage.removeItem("redirect"),window.history.replaceState(null,"",wm));window.location.hash.startsWith("#/")&&window.history.replaceState(null,"",window.location.hash.slice(1));Hy.createRoot(document.getElementById("root")).render(c.jsx(K.StrictMode,{children:c.jsx(_p,{})}));export{vc as E,dp as N,Nl as a,bc as b,Tp as c,Ml as d,jp as e,cp as h,ip as r,xc as u};
