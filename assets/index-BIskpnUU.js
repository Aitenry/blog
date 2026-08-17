const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ArticlePage-BsuGkmlI.js","assets/motion-D3VPq0fv.js","assets/i18n-Clk0yT6c.js","assets/icons-B3ev_rn4.js","assets/TocPanel-Dbqh6ykE.js","assets/markdown-D8IRBaPa.js","assets/react-VYqzLfsW.js","assets/DiaryPage-Dgl1RusC.js"])))=>i.map(i=>d[i]);
import{u as Es,a as Vm,j as u,A as Fr,m as Kn,b as bp,c as xp,d as Aa,e as Dm}from"./motion-D3VPq0fv.js";import{a as _p,i as Sp,b as jp,u as zn,r as G}from"./i18n-Clk0yT6c.js";import{r as zp,u as Pr,L as jt,a as Tp,B as Ap,b as Np,R as Ep,c as Te,N as Mp,O as Op}from"./react-VYqzLfsW.js";import{p as wp,Q as Um,$ as Hm,C as $r,u as zs,P as Wr,O as Dp,Z as Up,o as Ts,h as Hp,i as ni,a as Cp,J as Bp,r as qp,K as Rp}from"./icons-B3ev_rn4.js";(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))m(j);new MutationObserver(j=>{for(const T of j)if(T.type==="childList")for(const D of T.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&m(D)}).observe(document,{childList:!0,subtree:!0});function x(j){const T={};return j.integrity&&(T.integrity=j.integrity),j.referrerPolicy&&(T.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?T.credentials="include":j.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function m(j){if(j.ep)return;j.ep=!0;const T=x(j);fetch(j.href,T)}})();var xs={exports:{}},Ta={},_s={exports:{}},Ss={};var Cm;function Yp(){return Cm||(Cm=1,(function(o){function z(_,E){var B=_.length;_.push(E);n:for(;0<B;){var fn=B-1>>>1,mn=_[fn];if(0<j(mn,E))_[fn]=E,_[B]=mn,B=fn;else break n}}function x(_){return _.length===0?null:_[0]}function m(_){if(_.length===0)return null;var E=_[0],B=_.pop();if(B!==E){_[0]=B;n:for(var fn=0,mn=_.length,Vn=mn>>>1;fn<Vn;){var gn=2*(fn+1)-1,en=_[gn],Dn=gn+1,Ae=_[Dn];if(0>j(en,B))Dn<mn&&0>j(Ae,en)?(_[fn]=Ae,_[Dn]=B,fn=Dn):(_[fn]=en,_[gn]=B,fn=gn);else if(Dn<mn&&0>j(Ae,B))_[fn]=Ae,_[Dn]=B,fn=Dn;else break n}}return E}function j(_,E){var B=_.sortIndex-E.sortIndex;return B!==0?B:_.id-E.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var T=performance;o.unstable_now=function(){return T.now()}}else{var D=Date,R=D.now();o.unstable_now=function(){return D.now()-R}}var Y=[],H=[],Z=1,N=null,A=3,I=!1,cn=!1,on=!1,_n=!1,kn=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,nn=typeof setImmediate<"u"?setImmediate:null;function Cn(_){for(var E=x(H);E!==null;){if(E.callback===null)m(H);else if(E.startTime<=_)m(H),E.sortIndex=E.expirationTime,z(Y,E);else break;E=x(H)}}function X(_){if(on=!1,Cn(_),!cn)if(x(Y)!==null)cn=!0,Bn||(Bn=!0,L());else{var E=x(H);E!==null&&De(X,E.startTime-_)}}var Bn=!1,Ln=-1,On=5,Xn=-1;function we(){return _n?!0:!(o.unstable_now()-Xn<On)}function O(){if(_n=!1,Bn){var _=o.unstable_now();Xn=_;var E=!0;try{n:{cn=!1,on&&(on=!1,fe(Ln),Ln=-1),I=!0;var B=A;try{e:{for(Cn(_),N=x(Y);N!==null&&!(N.expirationTime>_&&we());){var fn=N.callback;if(typeof fn=="function"){N.callback=null,A=N.priorityLevel;var mn=fn(N.expirationTime<=_);if(_=o.unstable_now(),typeof mn=="function"){N.callback=mn,Cn(_),E=!0;break e}N===x(Y)&&m(Y),Cn(_)}else m(Y);N=x(Y)}if(N!==null)E=!0;else{var Vn=x(H);Vn!==null&&De(X,Vn.startTime-_),E=!1}}break n}finally{N=null,A=B,I=!1}E=void 0}}finally{E?L():Bn=!1}}}var L;if(typeof nn=="function")L=function(){nn(O)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,wn=vn.port2;vn.port1.onmessage=O,L=function(){wn.postMessage(null)}}else L=function(){kn(O,0)};function De(_,E){Ln=kn(function(){_(o.unstable_now())},E)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_){_.callback=null},o.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):On=0<_?Math.floor(1e3/_):5},o.unstable_getCurrentPriorityLevel=function(){return A},o.unstable_next=function(_){switch(A){case 1:case 2:case 3:var E=3;break;default:E=A}var B=A;A=E;try{return _()}finally{A=B}},o.unstable_requestPaint=function(){_n=!0},o.unstable_runWithPriority=function(_,E){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var B=A;A=_;try{return E()}finally{A=B}},o.unstable_scheduleCallback=function(_,E,B){var fn=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?fn+B:fn):B=fn,_){case 1:var mn=-1;break;case 2:mn=250;break;case 5:mn=1073741823;break;case 4:mn=1e4;break;default:mn=5e3}return mn=B+mn,_={id:Z++,callback:E,priorityLevel:_,startTime:B,expirationTime:mn,sortIndex:-1},B>fn?(_.sortIndex=B,z(H,_),x(Y)===null&&_===x(H)&&(on?(fe(Ln),Ln=-1):on=!0,De(X,B-fn))):(_.sortIndex=mn,z(Y,_),cn||I||(cn=!0,Bn||(Bn=!0,L()))),_},o.unstable_shouldYield=we,o.unstable_wrapCallback=function(_){var E=A;return function(){var B=A;A=E;try{return _.apply(this,arguments)}finally{A=B}}}})(Ss)),Ss}var Bm;function Qp(){return Bm||(Bm=1,_s.exports=Yp()),_s.exports}var qm;function Gp(){if(qm)return Ta;qm=1;var o=Qp(),z=_p(),x=zp();function m(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function T(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function D(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function R(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Y(n){if(T(n)!==n)throw Error(m(188))}function H(n){var e=n.alternate;if(!e){if(e=T(n),e===null)throw Error(m(188));return e!==n?null:n}for(var t=n,l=e;;){var a=t.return;if(a===null)break;var r=a.alternate;if(r===null){if(l=a.return,l!==null){t=l;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===t)return Y(a),n;if(r===l)return Y(a),e;r=r.sibling}throw Error(m(188))}if(t.return!==l.return)t=a,l=r;else{for(var i=!1,s=a.child;s;){if(s===t){i=!0,t=a,l=r;break}if(s===l){i=!0,l=a,t=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===t){i=!0,t=r,l=a;break}if(s===l){i=!0,l=r,t=a;break}s=s.sibling}if(!i)throw Error(m(189))}}if(t.alternate!==l)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?n:e}function Z(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=Z(n),e!==null)return e;n=n.sibling}return null}var N=Object.assign,A=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),cn=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),_n=Symbol.for("react.strict_mode"),kn=Symbol.for("react.profiler"),fe=Symbol.for("react.consumer"),nn=Symbol.for("react.context"),Cn=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),Bn=Symbol.for("react.suspense_list"),Ln=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Xn=Symbol.for("react.activity"),we=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var vn=Symbol.for("react.client.reference");function wn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===vn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case on:return"Fragment";case kn:return"Profiler";case _n:return"StrictMode";case X:return"Suspense";case Bn:return"SuspenseList";case Xn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case cn:return"Portal";case nn:return n.displayName||"Context";case fe:return(n._context.displayName||"Context")+".Consumer";case Cn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ln:return e=n.displayName||null,e!==null?e:wn(n.type)||"Memo";case On:e=n._payload,n=n._init;try{return wn(n(e))}catch{}}return null}var De=Array.isArray,_=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},fn=[],mn=-1;function Vn(n){return{current:n}}function gn(n){0>mn||(n.current=fn[mn],fn[mn]=null,mn--)}function en(n,e){mn++,fn[mn]=n.current,n.current=e}var Dn=Vn(null),Ae=Vn(null),$e=Vn(null),Na=Vn(null);function Ea(n,e){switch(en($e,e),en(Ae,n),en(Dn,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?em(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=em(e),n=tm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}gn(Dn),en(Dn,n)}function Vt(){gn(Dn),gn(Ae),gn($e)}function ei(n){n.memoizedState!==null&&en(Na,n);var e=Dn.current,t=tm(e,n.type);e!==t&&(en(Ae,n),en(Dn,t))}function Ma(n){Ae.current===n&&(gn(Dn),gn(Ae)),Na.current===n&&(gn(Na),_a._currentValue=B)}var ti,Ms;function zt(n){if(ti===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ti=e&&e[1]||"",Ms=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ti+n+Ms}var li=!1;function ai(n,e){if(!n||li)return"";li=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var y=g}Reflect.construct(n,[],S)}else{try{S.call()}catch(g){y=g}n.call(S.prototype)}}else{try{throw Error()}catch(g){y=g}(S=n())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),i=r[0],s=r[1];if(i&&s){var c=i.split(`
`),p=s.split(`
`);for(a=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;if(l===c.length||a===p.length)for(l=c.length-1,a=p.length-1;1<=l&&0<=a&&c[l]!==p[a];)a--;for(;1<=l&&0<=a;l--,a--)if(c[l]!==p[a]){if(l!==1||a!==1)do if(l--,a--,0>a||c[l]!==p[a]){var v=`
`+c[l].replace(" at new "," at ");return n.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",n.displayName)),v}while(1<=l&&0<=a);break}}}finally{li=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?zt(t):""}function Fm(n,e){switch(n.tag){case 26:case 27:case 5:return zt(n.type);case 16:return zt("Lazy");case 13:return n.child!==e&&e!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return ai(n.type,!1);case 11:return ai(n.type.render,!1);case 1:return ai(n.type,!0);case 31:return zt("Activity");default:return""}}function Os(n){try{var e="",t=null;do e+=Fm(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ri=Object.prototype.hasOwnProperty,ii=o.unstable_scheduleCallback,ui=o.unstable_cancelCallback,$m=o.unstable_shouldYield,Im=o.unstable_requestPaint,ee=o.unstable_now,Pm=o.unstable_getCurrentPriorityLevel,ws=o.unstable_ImmediatePriority,Ds=o.unstable_UserBlockingPriority,Oa=o.unstable_NormalPriority,nd=o.unstable_LowPriority,Us=o.unstable_IdlePriority,ed=o.log,td=o.unstable_setDisableYieldValue,Ul=null,te=null;function Ie(n){if(typeof ed=="function"&&td(n),te&&typeof te.setStrictMode=="function")try{te.setStrictMode(Ul,n)}catch{}}var le=Math.clz32?Math.clz32:rd,ld=Math.log,ad=Math.LN2;function rd(n){return n>>>=0,n===0?32:31-(ld(n)/ad|0)|0}var wa=256,Da=262144,Ua=4194304;function Tt(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ha(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var a=0,r=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var s=l&134217727;return s!==0?(l=s&~r,l!==0?a=Tt(l):(i&=s,i!==0?a=Tt(i):t||(t=s&~n,t!==0&&(a=Tt(t))))):(s=l&~r,s!==0?a=Tt(s):i!==0?a=Tt(i):t||(t=l&~n,t!==0&&(a=Tt(t)))),a===0?0:e!==0&&e!==a&&(e&r)===0&&(r=a&-a,t=e&-e,r>=t||r===32&&(t&4194048)!==0)?e:a}function Hl(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function id(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var n=Ua;return Ua<<=1,(Ua&62914560)===0&&(Ua=4194304),n}function si(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Cl(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ud(n,e,t,l,a,r){var i=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var s=n.entanglements,c=n.expirationTimes,p=n.hiddenUpdates;for(t=i&~t;0<t;){var v=31-le(t),S=1<<v;s[v]=0,c[v]=-1;var y=p[v];if(y!==null)for(p[v]=null,v=0;v<y.length;v++){var g=y[v];g!==null&&(g.lane&=-536870913)}t&=~S}l!==0&&Cs(n,l,0),r!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=r&~(i&~e))}function Cs(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-le(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function Bs(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-le(t),a=1<<l;a&e|n[l]&e&&(n[l]|=e),t&=~a}}function qs(n,e){var t=e&-e;return t=(t&42)!==0?1:ci(t),(t&(n.suspendedLanes|e))!==0?0:t}function ci(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function oi(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rs(){var n=E.p;return n!==0?n:(n=window.event,n===void 0?32:Tm(n.type))}function Ys(n,e){var t=E.p;try{return E.p=n,e()}finally{E.p=t}}var Pe=Math.random().toString(36).slice(2),qn="__reactFiber$"+Pe,Jn="__reactProps$"+Pe,Zt="__reactContainer$"+Pe,fi="__reactEvents$"+Pe,sd="__reactListeners$"+Pe,cd="__reactHandles$"+Pe,Qs="__reactResources$"+Pe,Bl="__reactMarker$"+Pe;function mi(n){delete n[qn],delete n[Jn],delete n[fi],delete n[sd],delete n[cd]}function Kt(n){var e=n[qn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Zt]||t[qn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=cm(n);n!==null;){if(t=n[qn])return t;n=cm(n)}return e}n=t,t=n.parentNode}return null}function Jt(n){if(n=n[qn]||n[Zt]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function ql(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(m(33))}function Wt(n){var e=n[Qs];return e||(e=n[Qs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Un(n){n[Bl]=!0}var Gs=new Set,Ls={};function At(n,e){Ft(n,e),Ft(n+"Capture",e)}function Ft(n,e){for(Ls[n]=e,n=0;n<e.length;n++)Gs.add(e[n])}var od=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xs={},ks={};function fd(n){return ri.call(ks,n)?!0:ri.call(Xs,n)?!1:od.test(n)?ks[n]=!0:(Xs[n]=!0,!1)}function Ca(n,e,t){if(fd(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Ba(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Ue(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+l)}}function me(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Vs(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function md(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,r=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,r.call(this,i)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function di(n){if(!n._valueTracker){var e=Vs(n)?"checked":"value";n._valueTracker=md(n,e,""+n[e])}}function Zs(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=Vs(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}function qa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var dd=/[\n"\\]/g;function de(n){return n.replace(dd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function hi(n,e,t,l,a,r,i,s){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+me(e)):n.value!==""+me(e)&&(n.value=""+me(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?pi(n,i,me(e)):t!=null?pi(n,i,me(t)):l!=null&&n.removeAttribute("value"),a==null&&r!=null&&(n.defaultChecked=!!r),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.name=""+me(s):n.removeAttribute("name")}function Ks(n,e,t,l,a,r,i,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){di(n);return}t=t!=null?""+me(t):"",e=e!=null?""+me(e):t,s||e===n.value||(n.value=e),n.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=s?n.checked:!!l,n.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),di(n)}function pi(n,e,t){e==="number"&&qa(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function $t(n,e,t,l){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&l&&(n[t].defaultSelected=!0)}else{for(t=""+me(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,l&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Js(n,e,t){if(e!=null&&(e=""+me(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+me(t):""}function Ws(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(m(92));if(De(l)){if(1<l.length)throw Error(m(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=me(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),di(n)}function It(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var hd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fs(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||hd.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function $s(n,e,t){if(e!=null&&typeof e!="object")throw Error(m(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&t[a]!==l&&Fs(n,a,l)}else for(var r in e)e.hasOwnProperty(r)&&Fs(n,r,e[r])}function yi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(n){return yd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function He(){}var gi=null;function vi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pt=null,nl=null;function Is(n){var e=Jt(n);if(e&&(n=e.stateNode)){var t=n[Jn]||null;n:switch(n=e.stateNode,e.type){case"input":if(hi(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+de(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var a=l[Jn]||null;if(!a)throw Error(m(90));hi(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&Zs(l)}break n;case"textarea":Js(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&$t(n,!!t.multiple,e,!1)}}}var bi=!1;function Ps(n,e,t){if(bi)return n(e,t);bi=!0;try{var l=n(e);return l}finally{if(bi=!1,(Pt!==null||nl!==null)&&(Tr(),Pt&&(e=Pt,n=nl,nl=Pt=null,Is(e),n)))for(e=0;e<n.length;e++)Is(n[e])}}function Rl(n,e){var t=n.stateNode;if(t===null)return null;var l=t[Jn]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(m(231,e,typeof t));return t}var Ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=!1;if(Ce)try{var Yl={};Object.defineProperty(Yl,"passive",{get:function(){xi=!0}}),window.addEventListener("test",Yl,Yl),window.removeEventListener("test",Yl,Yl)}catch{xi=!1}var nt=null,_i=null,Ya=null;function nc(){if(Ya)return Ya;var n,e=_i,t=e.length,l,a="value"in nt?nt.value:nt.textContent,r=a.length;for(n=0;n<t&&e[n]===a[n];n++);var i=t-n;for(l=1;l<=i&&e[t-l]===a[r-l];l++);return Ya=a.slice(n,1<l?1-l:void 0)}function Qa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ga(){return!0}function ec(){return!1}function Wn(n){function e(t,l,a,r,i){this._reactName=t,this._targetInst=a,this.type=l,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(t=n[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ga:ec,this.isPropagationStopped=ec,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Wn(Nt),Ql=N({},Nt,{view:0,detail:0}),gd=Wn(Ql),Si,ji,Gl,Xa=N({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ti,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gl&&(Gl&&n.type==="mousemove"?(Si=n.screenX-Gl.screenX,ji=n.screenY-Gl.screenY):ji=Si=0,Gl=n),Si)},movementY:function(n){return"movementY"in n?n.movementY:ji}}),tc=Wn(Xa),vd=N({},Xa,{dataTransfer:0}),bd=Wn(vd),xd=N({},Ql,{relatedTarget:0}),zi=Wn(xd),_d=N({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),Sd=Wn(_d),jd=N({},Nt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zd=Wn(jd),Td=N({},Nt,{data:0}),lc=Wn(Td),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ed[n])?!!e[n]:!1}function Ti(){return Md}var Od=N({},Ql,{key:function(n){if(n.key){var e=Ad[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ti,charCode:function(n){return n.type==="keypress"?Qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wd=Wn(Od),Dd=N({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Wn(Dd),Ud=N({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ti}),Hd=Wn(Ud),Cd=N({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bd=Wn(Cd),qd=N({},Xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Wn(qd),Yd=N({},Nt,{newState:0,oldState:0}),Qd=Wn(Yd),Gd=[9,13,27,32],Ai=Ce&&"CompositionEvent"in window,Ll=null;Ce&&"documentMode"in document&&(Ll=document.documentMode);var Ld=Ce&&"TextEvent"in window&&!Ll,rc=Ce&&(!Ai||Ll&&8<Ll&&11>=Ll),ic=" ",uc=!1;function sc(n,e){switch(n){case"keyup":return Gd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var el=!1;function Xd(n,e){switch(n){case"compositionend":return cc(e);case"keypress":return e.which!==32?null:(uc=!0,ic);case"textInput":return n=e.data,n===ic&&uc?null:n;default:return null}}function kd(n,e){if(el)return n==="compositionend"||!Ai&&sc(n,e)?(n=nc(),Ya=_i=nt=null,el=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rc&&e.locale!=="ko"?null:e.data;default:return null}}var Vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Vd[n.type]:e==="textarea"}function fc(n,e,t,l){Pt?nl?nl.push(l):nl=[l]:Pt=l,e=Dr(e,"onChange"),0<e.length&&(t=new La("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var Xl=null,kl=null;function Zd(n){Wf(n,0)}function ka(n){var e=ql(n);if(Zs(e))return n}function mc(n,e){if(n==="change")return e}var dc=!1;if(Ce){var Ni;if(Ce){var Ei="oninput"in document;if(!Ei){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Ei=typeof hc.oninput=="function"}Ni=Ei}else Ni=!1;dc=Ni&&(!document.documentMode||9<document.documentMode)}function pc(){Xl&&(Xl.detachEvent("onpropertychange",yc),kl=Xl=null)}function yc(n){if(n.propertyName==="value"&&ka(kl)){var e=[];fc(e,kl,n,vi(n)),Ps(Zd,e)}}function Kd(n,e,t){n==="focusin"?(pc(),Xl=e,kl=t,Xl.attachEvent("onpropertychange",yc)):n==="focusout"&&pc()}function Jd(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ka(kl)}function Wd(n,e){if(n==="click")return ka(e)}function Fd(n,e){if(n==="input"||n==="change")return ka(e)}function $d(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ae=typeof Object.is=="function"?Object.is:$d;function Vl(n,e){if(ae(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var a=t[l];if(!ri.call(e,a)||!ae(n[a],e[a]))return!1}return!0}function gc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vc(n,e){var t=gc(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=gc(t)}}function bc(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?bc(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function xc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=qa(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=qa(n.document)}return e}function Mi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Id=Ce&&"documentMode"in document&&11>=document.documentMode,tl=null,Oi=null,Zl=null,wi=!1;function _c(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wi||tl==null||tl!==qa(l)||(l=tl,"selectionStart"in l&&Mi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zl&&Vl(Zl,l)||(Zl=l,l=Dr(Oi,"onSelect"),0<l.length&&(e=new La("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=tl)))}function Et(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ll={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionrun:Et("Transition","TransitionRun"),transitionstart:Et("Transition","TransitionStart"),transitioncancel:Et("Transition","TransitionCancel"),transitionend:Et("Transition","TransitionEnd")},Di={},Sc={};Ce&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete ll.animationend.animation,delete ll.animationiteration.animation,delete ll.animationstart.animation),"TransitionEvent"in window||delete ll.transitionend.transition);function Mt(n){if(Di[n])return Di[n];if(!ll[n])return n;var e=ll[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Sc)return Di[n]=e[t];return n}var jc=Mt("animationend"),zc=Mt("animationiteration"),Tc=Mt("animationstart"),Pd=Mt("transitionrun"),nh=Mt("transitionstart"),eh=Mt("transitioncancel"),Ac=Mt("transitionend"),Nc=new Map,Ui="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ui.push("scrollEnd");function Se(n,e){Nc.set(n,e),At(e,[n])}var Va=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},he=[],al=0,Hi=0;function Za(){for(var n=al,e=Hi=al=0;e<n;){var t=he[e];he[e++]=null;var l=he[e];he[e++]=null;var a=he[e];he[e++]=null;var r=he[e];if(he[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}r!==0&&Ec(t,a,r)}}function Ka(n,e,t,l){he[al++]=n,he[al++]=e,he[al++]=t,he[al++]=l,Hi|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ci(n,e,t,l){return Ka(n,e,t,l),Ja(n)}function Ot(n,e){return Ka(n,null,null,e),Ja(n)}function Ec(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var a=!1,r=n.return;r!==null;)r.childLanes|=t,l=r.alternate,l!==null&&(l.childLanes|=t),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(a=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,a&&e!==null&&(a=31-le(t),n=r.hiddenUpdates,l=n[a],l===null?n[a]=[e]:l.push(e),e.lane=t|536870912),r):null}function Ja(n){if(50<ha)throw ha=0,ku=null,Error(m(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var rl={};function th(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function re(n,e,t,l){return new th(n,e,t,l)}function Bi(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Be(n,e){var t=n.alternate;return t===null?(t=re(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Mc(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Wa(n,e,t,l,a,r){var i=0;if(l=n,typeof n=="function")Bi(n)&&(i=1);else if(typeof n=="string")i=up(n,t,Dn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Xn:return n=re(31,t,e,a),n.elementType=Xn,n.lanes=r,n;case on:return wt(t.children,a,r,e);case _n:i=8,a|=24;break;case kn:return n=re(12,t,e,a|2),n.elementType=kn,n.lanes=r,n;case X:return n=re(13,t,e,a),n.elementType=X,n.lanes=r,n;case Bn:return n=re(19,t,e,a),n.elementType=Bn,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case nn:i=10;break n;case fe:i=9;break n;case Cn:i=11;break n;case Ln:i=14;break n;case On:i=16,l=null;break n}i=29,t=Error(m(130,n===null?"null":typeof n,"")),l=null}return e=re(i,t,e,a),e.elementType=n,e.type=l,e.lanes=r,e}function wt(n,e,t,l){return n=re(7,n,l,e),n.lanes=t,n}function qi(n,e,t){return n=re(6,n,null,e),n.lanes=t,n}function Oc(n){var e=re(18,null,null,0);return e.stateNode=n,e}function Ri(n,e,t){return e=re(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var wc=new WeakMap;function pe(n,e){if(typeof n=="object"&&n!==null){var t=wc.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Os(e)},wc.set(n,e),e)}return{value:n,source:e,stack:Os(e)}}var il=[],ul=0,Fa=null,Kl=0,ye=[],ge=0,et=null,Ne=1,Ee="";function qe(n,e){il[ul++]=Kl,il[ul++]=Fa,Fa=n,Kl=e}function Dc(n,e,t){ye[ge++]=Ne,ye[ge++]=Ee,ye[ge++]=et,et=n;var l=Ne;n=Ee;var a=32-le(l)-1;l&=~(1<<a),t+=1;var r=32-le(e)+a;if(30<r){var i=a-a%5;r=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Ne=1<<32-le(e)+a|t<<a|l,Ee=r+n}else Ne=1<<r|t<<a|l,Ee=n}function Yi(n){n.return!==null&&(qe(n,1),Dc(n,1,0))}function Qi(n){for(;n===Fa;)Fa=il[--ul],il[ul]=null,Kl=il[--ul],il[ul]=null;for(;n===et;)et=ye[--ge],ye[ge]=null,Ee=ye[--ge],ye[ge]=null,Ne=ye[--ge],ye[ge]=null}function Uc(n,e){ye[ge++]=Ne,ye[ge++]=Ee,ye[ge++]=et,Ne=e.id,Ee=e.overflow,et=n}var Rn=null,dn=null,W=!1,tt=null,ve=!1,Gi=Error(m(519));function lt(n){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(pe(e,n)),Gi}function Hc(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[qn]=n,e[Jn]=l,t){case"dialog":V("cancel",e),V("close",e);break;case"iframe":case"object":case"embed":V("load",e);break;case"video":case"audio":for(t=0;t<ya.length;t++)V(ya[t],e);break;case"source":V("error",e);break;case"img":case"image":case"link":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"input":V("invalid",e),Ks(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":V("invalid",e);break;case"textarea":V("invalid",e),Ws(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||Pf(e.textContent,t)?(l.popover!=null&&(V("beforetoggle",e),V("toggle",e)),l.onScroll!=null&&V("scroll",e),l.onScrollEnd!=null&&V("scrollend",e),l.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||lt(n,!0)}function Cc(n){for(Rn=n.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:ve=!1;return;case 27:case 3:ve=!0;return;default:Rn=Rn.return}}function sl(n){if(n!==Rn)return!1;if(!W)return Cc(n),W=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||rs(n.type,n.memoizedProps)),t=!t),t&&dn&&lt(n),Cc(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));dn=sm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));dn=sm(n)}else e===27?(e=dn,gt(n.type)?(n=os,os=null,dn=n):dn=e):dn=Rn?xe(n.stateNode.nextSibling):null;return!0}function Dt(){dn=Rn=null,W=!1}function Li(){var n=tt;return n!==null&&(Pn===null?Pn=n:Pn.push.apply(Pn,n),tt=null),n}function Jl(n){tt===null?tt=[n]:tt.push(n)}var Xi=Vn(null),Ut=null,Re=null;function at(n,e,t){en(Xi,e._currentValue),e._currentValue=t}function Ye(n){n._currentValue=Xi.current,gn(Xi)}function ki(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function Vi(n,e,t,l){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var r=a.dependencies;if(r!==null){var i=a.child;r=r.firstContext;n:for(;r!==null;){var s=r;r=a;for(var c=0;c<e.length;c++)if(s.context===e[c]){r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),ki(r.return,t,n),l||(i=null);break n}r=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(m(341));i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),ki(i,t,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function cl(n,e,t,l){n=null;for(var a=e,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var s=a.type;ae(a.pendingProps.value,i.value)||(n!==null?n.push(s):n=[s])}}else if(a===Na.current){if(i=a.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(_a):n=[_a])}a=a.return}n!==null&&Vi(e,n,t,l),e.flags|=262144}function $a(n){for(n=n.firstContext;n!==null;){if(!ae(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ht(n){Ut=n,Re=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Yn(n){return Bc(Ut,n)}function Ia(n,e){return Ut===null&&Ht(n),Bc(n,e)}function Bc(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Re===null){if(n===null)throw Error(m(308));Re=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Re=Re.next=e;return t}var lh=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},ah=o.unstable_scheduleCallback,rh=o.unstable_NormalPriority,Tn={$$typeof:nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zi(){return{controller:new lh,data:new Map,refCount:0}}function Wl(n){n.refCount--,n.refCount===0&&ah(rh,function(){n.controller.abort()})}var Fl=null,Ki=0,ol=0,fl=null;function ih(n,e){if(Fl===null){var t=Fl=[];Ki=0,ol=Fu(),fl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ki++,e.then(qc,qc),e}function qc(){if(--Ki===0&&Fl!==null){fl!==null&&(fl.status="fulfilled");var n=Fl;Fl=null,ol=0,fl=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function uh(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<t.length;a++)(0,t[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),l}var Rc=_.S;_.S=function(n,e){jf=ee(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ih(n,e),Rc!==null&&Rc(n,e)};var Ct=Vn(null);function Ji(){var n=Ct.current;return n!==null?n:sn.pooledCache}function Pa(n,e){e===null?en(Ct,Ct.current):en(Ct,e.pool)}function Yc(){var n=Ji();return n===null?null:{parent:Tn._currentValue,pool:n}}var ml=Error(m(460)),Wi=Error(m(474)),nr=Error(m(542)),er={then:function(){}};function Qc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Gc(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(He,He),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Xc(n),n;default:if(typeof e.status=="string")e.then(He,He);else{if(n=sn,n!==null&&100<n.shellSuspendCounter)throw Error(m(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Xc(n),n}throw qt=e,ml}}function Bt(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(qt=t,ml):t}}var qt=null;function Lc(){if(qt===null)throw Error(m(459));var n=qt;return qt=null,n}function Xc(n){if(n===ml||n===nr)throw Error(m(483))}var dl=null,$l=0;function tr(n){var e=$l;return $l+=1,dl===null&&(dl=[]),Gc(dl,n,e)}function Il(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function lr(n,e){throw e.$$typeof===A?Error(m(525)):(n=Object.prototype.toString.call(e),Error(m(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function kc(n){function e(d,f){if(n){var h=d.deletions;h===null?(d.deletions=[f],d.flags|=16):h.push(f)}}function t(d,f){if(!n)return null;for(;f!==null;)e(d,f),f=f.sibling;return null}function l(d){for(var f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(d,f){return d=Be(d,f),d.index=0,d.sibling=null,d}function r(d,f,h){return d.index=h,n?(h=d.alternate,h!==null?(h=h.index,h<f?(d.flags|=67108866,f):h):(d.flags|=67108866,f)):(d.flags|=1048576,f)}function i(d){return n&&d.alternate===null&&(d.flags|=67108866),d}function s(d,f,h,b){return f===null||f.tag!==6?(f=qi(h,d.mode,b),f.return=d,f):(f=a(f,h),f.return=d,f)}function c(d,f,h,b){var U=h.type;return U===on?v(d,f,h.props.children,b,h.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===On&&Bt(U)===f.type)?(f=a(f,h.props),Il(f,h),f.return=d,f):(f=Wa(h.type,h.key,h.props,null,d.mode,b),Il(f,h),f.return=d,f)}function p(d,f,h,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ri(h,d.mode,b),f.return=d,f):(f=a(f,h.children||[]),f.return=d,f)}function v(d,f,h,b,U){return f===null||f.tag!==7?(f=wt(h,d.mode,b,U),f.return=d,f):(f=a(f,h),f.return=d,f)}function S(d,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=qi(""+f,d.mode,h),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case I:return h=Wa(f.type,f.key,f.props,null,d.mode,h),Il(h,f),h.return=d,h;case cn:return f=Ri(f,d.mode,h),f.return=d,f;case On:return f=Bt(f),S(d,f,h)}if(De(f)||L(f))return f=wt(f,d.mode,h,null),f.return=d,f;if(typeof f.then=="function")return S(d,tr(f),h);if(f.$$typeof===nn)return S(d,Ia(d,f),h);lr(d,f)}return null}function y(d,f,h,b){var U=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:s(d,f,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case I:return h.key===U?c(d,f,h,b):null;case cn:return h.key===U?p(d,f,h,b):null;case On:return h=Bt(h),y(d,f,h,b)}if(De(h)||L(h))return U!==null?null:v(d,f,h,b,null);if(typeof h.then=="function")return y(d,f,tr(h),b);if(h.$$typeof===nn)return y(d,f,Ia(d,h),b);lr(d,h)}return null}function g(d,f,h,b,U){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(h)||null,s(f,d,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case I:return d=d.get(b.key===null?h:b.key)||null,c(f,d,b,U);case cn:return d=d.get(b.key===null?h:b.key)||null,p(f,d,b,U);case On:return b=Bt(b),g(d,f,h,b,U)}if(De(b)||L(b))return d=d.get(h)||null,v(f,d,b,U,null);if(typeof b.then=="function")return g(d,f,h,tr(b),U);if(b.$$typeof===nn)return g(d,f,h,Ia(f,b),U);lr(f,b)}return null}function M(d,f,h,b){for(var U=null,F=null,w=f,Q=f=0,J=null;w!==null&&Q<h.length;Q++){w.index>Q?(J=w,w=null):J=w.sibling;var $=y(d,w,h[Q],b);if($===null){w===null&&(w=J);break}n&&w&&$.alternate===null&&e(d,w),f=r($,f,Q),F===null?U=$:F.sibling=$,F=$,w=J}if(Q===h.length)return t(d,w),W&&qe(d,Q),U;if(w===null){for(;Q<h.length;Q++)w=S(d,h[Q],b),w!==null&&(f=r(w,f,Q),F===null?U=w:F.sibling=w,F=w);return W&&qe(d,Q),U}for(w=l(w);Q<h.length;Q++)J=g(w,d,Q,h[Q],b),J!==null&&(n&&J.alternate!==null&&w.delete(J.key===null?Q:J.key),f=r(J,f,Q),F===null?U=J:F.sibling=J,F=J);return n&&w.forEach(function(St){return e(d,St)}),W&&qe(d,Q),U}function C(d,f,h,b){if(h==null)throw Error(m(151));for(var U=null,F=null,w=f,Q=f=0,J=null,$=h.next();w!==null&&!$.done;Q++,$=h.next()){w.index>Q?(J=w,w=null):J=w.sibling;var St=y(d,w,$.value,b);if(St===null){w===null&&(w=J);break}n&&w&&St.alternate===null&&e(d,w),f=r(St,f,Q),F===null?U=St:F.sibling=St,F=St,w=J}if($.done)return t(d,w),W&&qe(d,Q),U;if(w===null){for(;!$.done;Q++,$=h.next())$=S(d,$.value,b),$!==null&&(f=r($,f,Q),F===null?U=$:F.sibling=$,F=$);return W&&qe(d,Q),U}for(w=l(w);!$.done;Q++,$=h.next())$=g(w,d,Q,$.value,b),$!==null&&(n&&$.alternate!==null&&w.delete($.key===null?Q:$.key),f=r($,f,Q),F===null?U=$:F.sibling=$,F=$);return n&&w.forEach(function(vp){return e(d,vp)}),W&&qe(d,Q),U}function un(d,f,h,b){if(typeof h=="object"&&h!==null&&h.type===on&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case I:n:{for(var U=h.key;f!==null;){if(f.key===U){if(U=h.type,U===on){if(f.tag===7){t(d,f.sibling),b=a(f,h.props.children),b.return=d,d=b;break n}}else if(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===On&&Bt(U)===f.type){t(d,f.sibling),b=a(f,h.props),Il(b,h),b.return=d,d=b;break n}t(d,f);break}else e(d,f);f=f.sibling}h.type===on?(b=wt(h.props.children,d.mode,b,h.key),b.return=d,d=b):(b=Wa(h.type,h.key,h.props,null,d.mode,b),Il(b,h),b.return=d,d=b)}return i(d);case cn:n:{for(U=h.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(d,f.sibling),b=a(f,h.children||[]),b.return=d,d=b;break n}else{t(d,f);break}else e(d,f);f=f.sibling}b=Ri(h,d.mode,b),b.return=d,d=b}return i(d);case On:return h=Bt(h),un(d,f,h,b)}if(De(h))return M(d,f,h,b);if(L(h)){if(U=L(h),typeof U!="function")throw Error(m(150));return h=U.call(h),C(d,f,h,b)}if(typeof h.then=="function")return un(d,f,tr(h),b);if(h.$$typeof===nn)return un(d,f,Ia(d,h),b);lr(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(t(d,f.sibling),b=a(f,h),b.return=d,d=b):(t(d,f),b=qi(h,d.mode,b),b.return=d,d=b),i(d)):t(d,f)}return function(d,f,h,b){try{$l=0;var U=un(d,f,h,b);return dl=null,U}catch(w){if(w===ml||w===nr)throw w;var F=re(29,w,null,d.mode);return F.lanes=b,F.return=d,F}}}var Rt=kc(!0),Vc=kc(!1),rt=!1;function Fi(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $i(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function it(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ut(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=Ja(n),Ec(n,null,t),e}return Ka(n,l,e,t),Ja(n)}function Pl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Bs(n,t)}}function Ii(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var a=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?a=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?a=r=e:r=r.next=e}else a=r=e;t={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Pi=!1;function na(){if(Pi){var n=fl;if(n!==null)throw n}}function ea(n,e,t,l){Pi=!1;var a=n.updateQueue;rt=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,p=c.next;c.next=null,i===null?r=p:i.next=p,i=c;var v=n.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=p:s.next=p,v.lastBaseUpdate=c))}if(r!==null){var S=a.baseState;i=0,v=p=c=null,s=r;do{var y=s.lane&-536870913,g=y!==s.lane;if(g?(K&y)===y:(l&y)===y){y!==0&&y===ol&&(Pi=!0),v!==null&&(v=v.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});n:{var M=n,C=s;y=e;var un=t;switch(C.tag){case 1:if(M=C.payload,typeof M=="function"){S=M.call(un,S,y);break n}S=M;break n;case 3:M.flags=M.flags&-65537|128;case 0:if(M=C.payload,y=typeof M=="function"?M.call(un,S,y):M,y==null)break n;S=N({},S,y);break n;case 2:rt=!0}}y=s.callback,y!==null&&(n.flags|=64,g&&(n.flags|=8192),g=a.callbacks,g===null?a.callbacks=[y]:g.push(y))}else g={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(p=v=g,c=S):v=v.next=g,i|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);v===null&&(c=S),a.baseState=c,a.firstBaseUpdate=p,a.lastBaseUpdate=v,r===null&&(a.shared.lanes=0),mt|=i,n.lanes=i,n.memoizedState=S}}function Zc(n,e){if(typeof n!="function")throw Error(m(191,n));n.call(e)}function Kc(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Zc(t[n],e)}var hl=Vn(null),ar=Vn(0);function Jc(n,e){n=Je,en(ar,n),en(hl,e),Je=n|e.baseLanes}function nu(){en(ar,Je),en(hl,hl.current)}function eu(){Je=ar.current,gn(hl),gn(ar)}var ie=Vn(null),be=null;function st(n){var e=n.alternate;en(Sn,Sn.current&1),en(ie,n),be===null&&(e===null||hl.current!==null||e.memoizedState!==null)&&(be=n)}function tu(n){en(Sn,Sn.current),en(ie,n),be===null&&(be=n)}function Wc(n){n.tag===22?(en(Sn,Sn.current),en(ie,n),be===null&&(be=n)):ct()}function ct(){en(Sn,Sn.current),en(ie,ie.current)}function ue(n){gn(ie),be===n&&(be=null),gn(Sn)}var Sn=Vn(0);function rr(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||ss(t)||cs(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qe=0,q=null,an=null,An=null,ir=!1,pl=!1,Yt=!1,ur=0,ta=0,yl=null,sh=0;function bn(){throw Error(m(321))}function lu(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ae(n[t],e[t]))return!1;return!0}function au(n,e,t,l,a,r){return Qe=r,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=n===null||n.memoizedState===null?Uo:bu,Yt=!1,r=t(l,a),Yt=!1,pl&&(r=$c(e,t,l,a)),Fc(n),r}function Fc(n){_.H=ra;var e=an!==null&&an.next!==null;if(Qe=0,An=an=q=null,ir=!1,ta=0,yl=null,e)throw Error(m(300));n===null||Nn||(n=n.dependencies,n!==null&&$a(n)&&(Nn=!0))}function $c(n,e,t,l){q=n;var a=0;do{if(pl&&(yl=null),ta=0,pl=!1,25<=a)throw Error(m(301));if(a+=1,An=an=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=Ho,r=e(t,l)}while(pl);return r}function ch(){var n=_.H,e=n.useState()[0];return e=typeof e.then=="function"?la(e):e,n=n.useState()[0],(an!==null?an.memoizedState:null)!==n&&(q.flags|=1024),e}function ru(){var n=ur!==0;return ur=0,n}function iu(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function uu(n){if(ir){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}ir=!1}Qe=0,An=an=q=null,pl=!1,ta=ur=0,yl=null}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?q.memoizedState=An=n:An=An.next=n,An}function jn(){if(an===null){var n=q.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var e=An===null?q.memoizedState:An.next;if(e!==null)An=e,an=n;else{if(n===null)throw q.alternate===null?Error(m(467)):Error(m(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},An===null?q.memoizedState=An=n:An=An.next=n}return An}function sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(n){var e=ta;return ta+=1,yl===null&&(yl=[]),n=Gc(yl,n,e),e=q,(An===null?e.memoizedState:An.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?Uo:bu),n}function cr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return la(n);if(n.$$typeof===nn)return Yn(n)}throw Error(m(438,String(n)))}function su(n){var e=null,t=q.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=q.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=sr(),q.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=we;return e.index++,t}function Ge(n,e){return typeof e=="function"?e(n):e}function or(n){var e=jn();return cu(e,an,n)}function cu(n,e,t){var l=n.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var a=n.baseQueue,r=l.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}e.baseQueue=a=r,l.pending=null}if(r=n.baseState,a===null)n.memoizedState=r;else{e=a.next;var s=i=null,c=null,p=e,v=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(K&S)===S:(Qe&S)===S){var y=p.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===ol&&(v=!0);else if((Qe&y)===y){p=p.next,y===ol&&(v=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=S,i=r):c=c.next=S,q.lanes|=y,mt|=y;S=p.action,Yt&&t(r,S),r=p.hasEagerState?p.eagerState:t(r,S)}else y={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=y,i=r):c=c.next=y,q.lanes|=S,mt|=S;p=p.next}while(p!==null&&p!==e);if(c===null?i=r:c.next=s,!ae(r,n.memoizedState)&&(Nn=!0,v&&(t=fl,t!==null)))throw t;n.memoizedState=r,n.baseState=i,n.baseQueue=c,l.lastRenderedState=r}return a===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ou(n){var e=jn(),t=e.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=n;var l=t.dispatch,a=t.pending,r=e.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do r=n(r,i.action),i=i.next;while(i!==a);ae(r,e.memoizedState)||(Nn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,l]}function Ic(n,e,t){var l=q,a=jn(),r=W;if(r){if(t===void 0)throw Error(m(407));t=t()}else t=e();var i=!ae((an||a).memoizedState,t);if(i&&(a.memoizedState=t,Nn=!0),a=a.queue,du(eo.bind(null,l,a,n),[n]),a.getSnapshot!==e||i||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},no.bind(null,l,a,t,e),null),sn===null)throw Error(m(349));r||(Qe&127)!==0||Pc(l,e,t)}return t}function Pc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=q.updateQueue,e===null?(e=sr(),q.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function no(n,e,t,l){e.value=t,e.getSnapshot=l,to(e)&&lo(n)}function eo(n,e,t){return t(function(){to(e)&&lo(n)})}function to(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ae(n,t)}catch{return!0}}function lo(n){var e=Ot(n,2);e!==null&&ne(e,n,2)}function fu(n){var e=Zn();if(typeof n=="function"){var t=n;if(n=t(),Yt){Ie(!0);try{t()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:n},e}function ao(n,e,t,l){return n.baseState=t,cu(n,an,typeof l=="function"?l:Ge)}function oh(n,e,t,l,a){if(dr(n))throw Error(m(485));if(n=e.action,n!==null){var r={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};_.T!==null?t(!0):r.isTransition=!1,l(r),t=e.pending,t===null?(r.next=e.pending=r,ro(e,r)):(r.next=t.next,e.pending=t.next=r)}}function ro(n,e){var t=e.action,l=e.payload,a=n.state;if(e.isTransition){var r=_.T,i={};_.T=i;try{var s=t(a,l),c=_.S;c!==null&&c(i,s),io(n,e,s)}catch(p){mu(n,e,p)}finally{r!==null&&i.types!==null&&(r.types=i.types),_.T=r}}else try{r=t(a,l),io(n,e,r)}catch(p){mu(n,e,p)}}function io(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){uo(n,e,l)},function(l){return mu(n,e,l)}):uo(n,e,t)}function uo(n,e,t){e.status="fulfilled",e.value=t,so(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,ro(n,t)))}function mu(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,so(e),e=e.next;while(e!==l)}n.action=null}function so(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function co(n,e){return e}function oo(n,e){if(W){var t=sn.formState;if(t!==null){n:{var l=q;if(W){if(dn){e:{for(var a=dn,r=ve;a.nodeType!==8;){if(!r){a=null;break e}if(a=xe(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){dn=xe(a.nextSibling),l=a.data==="F!";break n}}lt(l)}l=!1}l&&(e=t[0])}}return t=Zn(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=l,t=Oo.bind(null,q,l),l.dispatch=t,l=fu(!1),r=vu.bind(null,q,!1,l.queue),l=Zn(),a={state:e,dispatch:null,action:n,pending:null},l.queue=a,t=oh.bind(null,q,a,r,t),a.dispatch=t,l.memoizedState=n,[e,t,!1]}function fo(n){var e=jn();return mo(e,an,n)}function mo(n,e,t){if(e=cu(n,e,co)[0],n=or(Ge)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=la(e)}catch(i){throw i===ml?nr:i}else l=e;e=jn();var a=e.queue,r=a.dispatch;return t!==e.memoizedState&&(q.flags|=2048,gl(9,{destroy:void 0},fh.bind(null,a,t),null)),[l,r,n]}function fh(n,e){n.action=e}function ho(n){var e=jn(),t=an;if(t!==null)return mo(e,t,n);jn(),e=e.memoizedState,t=jn();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function gl(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=q.updateQueue,e===null&&(e=sr(),q.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function po(){return jn().memoizedState}function fr(n,e,t,l){var a=Zn();q.flags|=n,a.memoizedState=gl(1|e,{destroy:void 0},t,l===void 0?null:l)}function mr(n,e,t,l){var a=jn();l=l===void 0?null:l;var r=a.memoizedState.inst;an!==null&&l!==null&&lu(l,an.memoizedState.deps)?a.memoizedState=gl(e,r,t,l):(q.flags|=n,a.memoizedState=gl(1|e,r,t,l))}function yo(n,e){fr(8390656,8,n,e)}function du(n,e){mr(2048,8,n,e)}function mh(n){q.flags|=4;var e=q.updateQueue;if(e===null)e=sr(),q.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function go(n){var e=jn().memoizedState;return mh({ref:e,nextImpl:n}),function(){if((P&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function vo(n,e){return mr(4,2,n,e)}function bo(n,e){return mr(4,4,n,e)}function xo(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function _o(n,e,t){t=t!=null?t.concat([n]):null,mr(4,4,xo.bind(null,e,n),t)}function hu(){}function So(n,e){var t=jn();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&lu(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function jo(n,e){var t=jn();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&lu(e,l[1]))return l[0];if(l=n(),Yt){Ie(!0);try{n()}finally{Ie(!1)}}return t.memoizedState=[l,e],l}function pu(n,e,t){return t===void 0||(Qe&1073741824)!==0&&(K&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Tf(),q.lanes|=n,mt|=n,t)}function zo(n,e,t,l){return ae(t,e)?t:hl.current!==null?(n=pu(n,t,l),ae(n,e)||(Nn=!0),n):(Qe&42)===0||(Qe&1073741824)!==0&&(K&261930)===0?(Nn=!0,n.memoizedState=t):(n=Tf(),q.lanes|=n,mt|=n,e)}function To(n,e,t,l,a){var r=E.p;E.p=r!==0&&8>r?r:8;var i=_.T,s={};_.T=s,vu(n,!1,e,t);try{var c=a(),p=_.S;if(p!==null&&p(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=uh(c,l);aa(n,e,v,oe(n))}else aa(n,e,l,oe(n))}catch(S){aa(n,e,{then:function(){},status:"rejected",reason:S},oe())}finally{E.p=r,i!==null&&s.types!==null&&(i.types=s.types),_.T=i}}function dh(){}function yu(n,e,t,l){if(n.tag!==5)throw Error(m(476));var a=Ao(n).queue;To(n,a,e,B,t===null?dh:function(){return No(n),t(l)})}function Ao(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:B},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function No(n){var e=Ao(n);e.next===null&&(e=n.alternate.memoizedState),aa(n,e.next.queue,{},oe())}function gu(){return Yn(_a)}function Eo(){return jn().memoizedState}function Mo(){return jn().memoizedState}function hh(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=oe();n=it(t);var l=ut(e,n,t);l!==null&&(ne(l,e,t),Pl(l,e,t)),e={cache:Zi()},n.payload=e;return}e=e.return}}function ph(n,e,t){var l=oe();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},dr(n)?wo(e,t):(t=Ci(n,e,t,l),t!==null&&(ne(t,n,l),Do(t,e,l)))}function Oo(n,e,t){var l=oe();aa(n,e,t,l)}function aa(n,e,t,l){var a={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(dr(n))wo(e,a);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,s=r(i,t);if(a.hasEagerState=!0,a.eagerState=s,ae(s,i))return Ka(n,e,a,0),sn===null&&Za(),!1}catch{}if(t=Ci(n,e,a,l),t!==null)return ne(t,n,l),Do(t,e,l),!0}return!1}function vu(n,e,t,l){if(l={lane:2,revertLane:Fu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},dr(n)){if(e)throw Error(m(479))}else e=Ci(n,t,l,2),e!==null&&ne(e,n,2)}function dr(n){var e=n.alternate;return n===q||e!==null&&e===q}function wo(n,e){pl=ir=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Do(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Bs(n,t)}}var ra={readContext:Yn,use:cr,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn,useHostTransitionStatus:bn,useFormState:bn,useActionState:bn,useOptimistic:bn,useMemoCache:bn,useCacheRefresh:bn};ra.useEffectEvent=bn;var Uo={readContext:Yn,use:cr,useCallback:function(n,e){return Zn().memoizedState=[n,e===void 0?null:e],n},useContext:Yn,useEffect:yo,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,fr(4194308,4,xo.bind(null,e,n),t)},useLayoutEffect:function(n,e){return fr(4194308,4,n,e)},useInsertionEffect:function(n,e){fr(4,2,n,e)},useMemo:function(n,e){var t=Zn();e=e===void 0?null:e;var l=n();if(Yt){Ie(!0);try{n()}finally{Ie(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=Zn();if(t!==void 0){var a=t(e);if(Yt){Ie(!0);try{t(e)}finally{Ie(!1)}}}else a=e;return l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},l.queue=n,n=n.dispatch=ph.bind(null,q,n),[l.memoizedState,n]},useRef:function(n){var e=Zn();return n={current:n},e.memoizedState=n},useState:function(n){n=fu(n);var e=n.queue,t=Oo.bind(null,q,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:hu,useDeferredValue:function(n,e){var t=Zn();return pu(t,n,e)},useTransition:function(){var n=fu(!1);return n=To.bind(null,q,n.queue,!0,!1),Zn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=q,a=Zn();if(W){if(t===void 0)throw Error(m(407));t=t()}else{if(t=e(),sn===null)throw Error(m(349));(K&127)!==0||Pc(l,e,t)}a.memoizedState=t;var r={value:t,getSnapshot:e};return a.queue=r,yo(eo.bind(null,l,r,n),[n]),l.flags|=2048,gl(9,{destroy:void 0},no.bind(null,l,r,t,e),null),t},useId:function(){var n=Zn(),e=sn.identifierPrefix;if(W){var t=Ee,l=Ne;t=(l&~(1<<32-le(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=ur++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=sh++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:gu,useFormState:oo,useActionState:oo,useOptimistic:function(n){var e=Zn();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=vu.bind(null,q,!0,t),t.dispatch=e,[n,e]},useMemoCache:su,useCacheRefresh:function(){return Zn().memoizedState=hh.bind(null,q)},useEffectEvent:function(n){var e=Zn(),t={impl:n};return e.memoizedState=t,function(){if((P&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}},bu={readContext:Yn,use:cr,useCallback:So,useContext:Yn,useEffect:du,useImperativeHandle:_o,useInsertionEffect:vo,useLayoutEffect:bo,useMemo:jo,useReducer:or,useRef:po,useState:function(){return or(Ge)},useDebugValue:hu,useDeferredValue:function(n,e){var t=jn();return zo(t,an.memoizedState,n,e)},useTransition:function(){var n=or(Ge)[0],e=jn().memoizedState;return[typeof n=="boolean"?n:la(n),e]},useSyncExternalStore:Ic,useId:Eo,useHostTransitionStatus:gu,useFormState:fo,useActionState:fo,useOptimistic:function(n,e){var t=jn();return ao(t,an,n,e)},useMemoCache:su,useCacheRefresh:Mo};bu.useEffectEvent=go;var Ho={readContext:Yn,use:cr,useCallback:So,useContext:Yn,useEffect:du,useImperativeHandle:_o,useInsertionEffect:vo,useLayoutEffect:bo,useMemo:jo,useReducer:ou,useRef:po,useState:function(){return ou(Ge)},useDebugValue:hu,useDeferredValue:function(n,e){var t=jn();return an===null?pu(t,n,e):zo(t,an.memoizedState,n,e)},useTransition:function(){var n=ou(Ge)[0],e=jn().memoizedState;return[typeof n=="boolean"?n:la(n),e]},useSyncExternalStore:Ic,useId:Eo,useHostTransitionStatus:gu,useFormState:ho,useActionState:ho,useOptimistic:function(n,e){var t=jn();return an!==null?ao(t,an,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:su,useCacheRefresh:Mo};Ho.useEffectEvent=go;function xu(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:N({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _u={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=oe(),a=it(l);a.payload=e,t!=null&&(a.callback=t),e=ut(n,a,l),e!==null&&(ne(e,n,l),Pl(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=oe(),a=it(l);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=ut(n,a,l),e!==null&&(ne(e,n,l),Pl(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=oe(),l=it(t);l.tag=2,e!=null&&(l.callback=e),e=ut(n,l,t),e!==null&&(ne(e,n,t),Pl(e,n,t))}};function Co(n,e,t,l,a,r,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,r,i):e.prototype&&e.prototype.isPureReactComponent?!Vl(t,l)||!Vl(a,r):!0}function Bo(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&_u.enqueueReplaceState(e,e.state,null)}function Qt(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=N({},t));for(var a in n)t[a]===void 0&&(t[a]=n[a])}return t}function qo(n){Va(n)}function Ro(n){console.error(n)}function Yo(n){Va(n)}function hr(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Qo(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Su(n,e,t){return t=it(t),t.tag=3,t.payload={element:null},t.callback=function(){hr(n,e)},t}function Go(n){return n=it(n),n.tag=3,n}function Lo(n,e,t,l){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var r=l.value;n.payload=function(){return a(r)},n.callback=function(){Qo(e,t,l)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qo(e,t,l),typeof a!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function yh(n,e,t,l,a){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&cl(e,t,a,!0),t=ie.current,t!==null){switch(t.tag){case 31:case 13:return be===null?Ar():t.alternate===null&&xn===0&&(xn=3),t.flags&=-257,t.flags|=65536,t.lanes=a,l===er?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Ku(n,l,a)),!1;case 22:return t.flags|=65536,l===er?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Ku(n,l,a)),!1}throw Error(m(435,t.tag))}return Ku(n,l,a),Ar(),!1}if(W)return e=ie.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Gi&&(n=Error(m(422),{cause:l}),Jl(pe(n,t)))):(l!==Gi&&(e=Error(m(423),{cause:l}),Jl(pe(e,t))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,l=pe(l,t),a=Su(n.stateNode,l,a),Ii(n,a),xn!==4&&(xn=2)),!1;var r=Error(m(520),{cause:l});if(r=pe(r,t),da===null?da=[r]:da.push(r),xn!==4&&(xn=2),e===null)return!0;l=pe(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=a&-a,t.lanes|=n,n=Su(t.stateNode,l,n),Ii(t,n),!1;case 1:if(e=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Go(a),Lo(a,n,t,l),Ii(t,a),!1}t=t.return}while(t!==null);return!1}var ju=Error(m(461)),Nn=!1;function Qn(n,e,t,l){e.child=n===null?Vc(e,null,t,l):Rt(e,n.child,t,l)}function Xo(n,e,t,l,a){t=t.render;var r=e.ref;if("ref"in l){var i={};for(var s in l)s!=="ref"&&(i[s]=l[s])}else i=l;return Ht(e),l=au(n,e,t,i,r,a),s=ru(),n!==null&&!Nn?(iu(n,e,a),Le(n,e,a)):(W&&s&&Yi(e),e.flags|=1,Qn(n,e,l,a),e.child)}function ko(n,e,t,l,a){if(n===null){var r=t.type;return typeof r=="function"&&!Bi(r)&&r.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=r,Vo(n,e,r,l,a)):(n=Wa(t.type,null,l,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!wu(n,a)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:Vl,t(i,l)&&n.ref===e.ref)return Le(n,e,a)}return e.flags|=1,n=Be(r,l),n.ref=e.ref,n.return=e,e.child=n}function Vo(n,e,t,l,a){if(n!==null){var r=n.memoizedProps;if(Vl(r,l)&&n.ref===e.ref)if(Nn=!1,e.pendingProps=l=r,wu(n,a))(n.flags&131072)!==0&&(Nn=!0);else return e.lanes=n.lanes,Le(n,e,a)}return zu(n,e,t,l,a)}function Zo(n,e,t,l){var a=l.children,r=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,n!==null){for(l=e.child=n.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~r}else l=0,e.child=null;return Ko(n,e,r,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Pa(e,r!==null?r.cachePool:null),r!==null?Jc(e,r):nu(),Wc(e);else return l=e.lanes=536870912,Ko(n,e,r!==null?r.baseLanes|t:t,t,l)}else r!==null?(Pa(e,r.cachePool),Jc(e,r),ct(),e.memoizedState=null):(n!==null&&Pa(e,null),nu(),ct());return Qn(n,e,a,t),e.child}function ia(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ko(n,e,t,l,a){var r=Ji();return r=r===null?null:{parent:Tn._currentValue,pool:r},e.memoizedState={baseLanes:t,cachePool:r},n!==null&&Pa(e,null),nu(),Wc(e),n!==null&&cl(n,e,l,!0),e.childLanes=a,null}function pr(n,e){return e=gr({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Jo(n,e,t){return Rt(e,n.child,null,t),n=pr(e,e.pendingProps),n.flags|=2,ue(e),e.memoizedState=null,n}function gh(n,e,t){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(W){if(l.mode==="hidden")return n=pr(e,l),e.lanes=536870912,ia(null,n);if(tu(e),(n=dn)?(n=um(n,ve),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:et!==null?{id:Ne,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},t=Oc(n),t.return=e,e.child=t,Rn=e,dn=null)):n=null,n===null)throw lt(e);return e.lanes=536870912,null}return pr(e,l)}var r=n.memoizedState;if(r!==null){var i=r.dehydrated;if(tu(e),a)if(e.flags&256)e.flags&=-257,e=Jo(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(m(558));else if(Nn||cl(n,e,t,!1),a=(t&n.childLanes)!==0,Nn||a){if(l=sn,l!==null&&(i=qs(l,t),i!==0&&i!==r.retryLane))throw r.retryLane=i,Ot(n,i),ne(l,n,i),ju;Ar(),e=Jo(n,e,t)}else n=r.treeContext,dn=xe(i.nextSibling),Rn=e,W=!0,tt=null,ve=!1,n!==null&&Uc(e,n),e=pr(e,l),e.flags|=4096;return e}return n=Be(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function yr(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function zu(n,e,t,l,a){return Ht(e),t=au(n,e,t,l,void 0,a),l=ru(),n!==null&&!Nn?(iu(n,e,a),Le(n,e,a)):(W&&l&&Yi(e),e.flags|=1,Qn(n,e,t,a),e.child)}function Wo(n,e,t,l,a,r){return Ht(e),e.updateQueue=null,t=$c(e,l,t,a),Fc(n),l=ru(),n!==null&&!Nn?(iu(n,e,r),Le(n,e,r)):(W&&l&&Yi(e),e.flags|=1,Qn(n,e,t,r),e.child)}function Fo(n,e,t,l,a){if(Ht(e),e.stateNode===null){var r=rl,i=t.contextType;typeof i=="object"&&i!==null&&(r=Yn(i)),r=new t(l,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_u,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=l,r.state=e.memoizedState,r.refs={},Fi(e),i=t.contextType,r.context=typeof i=="object"&&i!==null?Yn(i):rl,r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xu(e,t,i,l),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&_u.enqueueReplaceState(r,r.state,null),ea(e,l,r,a),na(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){r=e.stateNode;var s=e.memoizedProps,c=Qt(t,s);r.props=c;var p=r.context,v=t.contextType;i=rl,typeof v=="object"&&v!==null&&(i=Yn(v));var S=t.getDerivedStateFromProps;v=typeof S=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,v||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||p!==i)&&Bo(e,r,l,i),rt=!1;var y=e.memoizedState;r.state=y,ea(e,l,r,a),na(),p=e.memoizedState,s||y!==p||rt?(typeof S=="function"&&(xu(e,t,S,l),p=e.memoizedState),(c=rt||Co(e,t,c,l,y,p,i))?(v||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=p),r.props=l,r.state=p,r.context=i,l=c):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{r=e.stateNode,$i(n,e),i=e.memoizedProps,v=Qt(t,i),r.props=v,S=e.pendingProps,y=r.context,p=t.contextType,c=rl,typeof p=="object"&&p!==null&&(c=Yn(p)),s=t.getDerivedStateFromProps,(p=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==S||y!==c)&&Bo(e,r,l,c),rt=!1,y=e.memoizedState,r.state=y,ea(e,l,r,a),na();var g=e.memoizedState;i!==S||y!==g||rt||n!==null&&n.dependencies!==null&&$a(n.dependencies)?(typeof s=="function"&&(xu(e,t,s,l),g=e.memoizedState),(v=rt||Co(e,t,v,l,y,g,c)||n!==null&&n.dependencies!==null&&$a(n.dependencies))?(p||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,g,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,g,c)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=g),r.props=l,r.state=g,r.context=c,l=v):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),l=!1)}return r=l,yr(n,e),l=(e.flags&128)!==0,r||l?(r=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&l?(e.child=Rt(e,n.child,null,a),e.child=Rt(e,null,t,a)):Qn(n,e,t,a),e.memoizedState=r.state,n=e.child):n=Le(n,e,a),n}function $o(n,e,t,l){return Dt(),e.flags|=256,Qn(n,e,t,l),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Au(n){return{baseLanes:n,cachePool:Yc()}}function Nu(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=ce),n}function Io(n,e,t){var l=e.pendingProps,a=!1,r=(e.flags&128)!==0,i;if((i=r)||(i=n!==null&&n.memoizedState===null?!1:(Sn.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(W){if(a?st(e):ct(),(n=dn)?(n=um(n,ve),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:et!==null?{id:Ne,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},t=Oc(n),t.return=e,e.child=t,Rn=e,dn=null)):n=null,n===null)throw lt(e);return cs(n)?e.lanes=32:e.lanes=536870912,null}var s=l.children;return l=l.fallback,a?(ct(),a=e.mode,s=gr({mode:"hidden",children:s},a),l=wt(l,a,t,null),s.return=e,l.return=e,s.sibling=l,e.child=s,l=e.child,l.memoizedState=Au(t),l.childLanes=Nu(n,i,t),e.memoizedState=Tu,ia(null,l)):(st(e),Eu(e,s))}var c=n.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(r)e.flags&256?(st(e),e.flags&=-257,e=Mu(n,e,t)):e.memoizedState!==null?(ct(),e.child=n.child,e.flags|=128,e=null):(ct(),s=l.fallback,a=e.mode,l=gr({mode:"visible",children:l.children},a),s=wt(s,a,t,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,Rt(e,n.child,null,t),l=e.child,l.memoizedState=Au(t),l.childLanes=Nu(n,i,t),e.memoizedState=Tu,e=ia(null,l));else if(st(e),cs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var p=i.dgst;i=p,l=Error(m(419)),l.stack="",l.digest=i,Jl({value:l,source:null,stack:null}),e=Mu(n,e,t)}else if(Nn||cl(n,e,t,!1),i=(t&n.childLanes)!==0,Nn||i){if(i=sn,i!==null&&(l=qs(i,t),l!==0&&l!==c.retryLane))throw c.retryLane=l,Ot(n,l),ne(i,n,l),ju;ss(s)||Ar(),e=Mu(n,e,t)}else ss(s)?(e.flags|=192,e.child=n.child,e=null):(n=c.treeContext,dn=xe(s.nextSibling),Rn=e,W=!0,tt=null,ve=!1,n!==null&&Uc(e,n),e=Eu(e,l.children),e.flags|=4096);return e}return a?(ct(),s=l.fallback,a=e.mode,c=n.child,p=c.sibling,l=Be(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,p!==null?s=Be(p,s):(s=wt(s,a,t,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,ia(null,l),l=e.child,s=n.child.memoizedState,s===null?s=Au(t):(a=s.cachePool,a!==null?(c=Tn._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=Yc(),s={baseLanes:s.baseLanes|t,cachePool:a}),l.memoizedState=s,l.childLanes=Nu(n,i,t),e.memoizedState=Tu,ia(n.child,l)):(st(e),t=n.child,n=t.sibling,t=Be(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t,e.memoizedState=null,t)}function Eu(n,e){return e=gr({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function gr(n,e){return n=re(22,n,null,e),n.lanes=0,n}function Mu(n,e,t){return Rt(e,n.child,null,t),n=Eu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Po(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),ki(n.return,e,t)}function Ou(n,e,t,l,a,r){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:a,treeForkCount:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=t,i.tailMode=a,i.treeForkCount=r)}function nf(n,e,t){var l=e.pendingProps,a=l.revealOrder,r=l.tail;l=l.children;var i=Sn.current,s=(i&2)!==0;if(s?(i=i&1|2,e.flags|=128):i&=1,en(Sn,i),Qn(n,e,l,t),l=W?Kl:0,!s&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Po(n,t,e);else if(n.tag===19)Po(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&rr(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Ou(e,!1,a,t,r,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&rr(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Ou(e,!0,t,null,r,l);break;case"together":Ou(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Le(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),mt|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(cl(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(m(153));if(e.child!==null){for(n=e.child,t=Be(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Be(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function wu(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&$a(n)))}function vh(n,e,t){switch(e.tag){case 3:Ea(e,e.stateNode.containerInfo),at(e,Tn,n.memoizedState.cache),Dt();break;case 27:case 5:ei(e);break;case 4:Ea(e,e.stateNode.containerInfo);break;case 10:at(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,tu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(st(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Io(n,e,t):(st(e),n=Le(n,e,t),n!==null?n.sibling:null);st(e);break;case 19:var a=(n.flags&128)!==0;if(l=(t&e.childLanes)!==0,l||(cl(n,e,t,!1),l=(t&e.childLanes)!==0),a){if(l)return nf(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),en(Sn,Sn.current),l)break;return null;case 22:return e.lanes=0,Zo(n,e,t,e.pendingProps);case 24:at(e,Tn,n.memoizedState.cache)}return Le(n,e,t)}function ef(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Nn=!0;else{if(!wu(n,t)&&(e.flags&128)===0)return Nn=!1,vh(n,e,t);Nn=(n.flags&131072)!==0}else Nn=!1,W&&(e.flags&1048576)!==0&&Dc(e,Kl,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=Bt(e.elementType),e.type=n,typeof n=="function")Bi(n)?(l=Qt(n,l),e.tag=1,e=Fo(null,e,n,l,t)):(e.tag=0,e=zu(null,e,n,l,t));else{if(n!=null){var a=n.$$typeof;if(a===Cn){e.tag=11,e=Xo(null,e,n,l,t);break n}else if(a===Ln){e.tag=14,e=ko(null,e,n,l,t);break n}}throw e=wn(n)||n,Error(m(306,e,""))}}return e;case 0:return zu(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,a=Qt(l,e.pendingProps),Fo(n,e,l,a,t);case 3:n:{if(Ea(e,e.stateNode.containerInfo),n===null)throw Error(m(387));l=e.pendingProps;var r=e.memoizedState;a=r.element,$i(n,e),ea(e,l,null,t);var i=e.memoizedState;if(l=i.cache,at(e,Tn,l),l!==r.cache&&Vi(e,[Tn],t,!0),na(),l=i.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=$o(n,e,l,t);break n}else if(l!==a){a=pe(Error(m(424)),e),Jl(a),e=$o(n,e,l,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,dn=xe(n.firstChild),Rn=e,W=!0,tt=null,ve=!0,t=Vc(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Dt(),l===a){e=Le(n,e,t);break n}Qn(n,e,l,t)}e=e.child}return e;case 26:return yr(n,e),n===null?(t=dm(e.type,null,e.pendingProps,null))?e.memoizedState=t:W||(t=e.type,n=e.pendingProps,l=Ur($e.current).createElement(t),l[qn]=e,l[Jn]=n,Gn(l,t,n),Un(l),e.stateNode=l):e.memoizedState=dm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return ei(e),n===null&&W&&(l=e.stateNode=om(e.type,e.pendingProps,$e.current),Rn=e,ve=!0,a=dn,gt(e.type)?(os=a,dn=xe(l.firstChild)):dn=a),Qn(n,e,e.pendingProps.children,t),yr(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&W&&((a=l=dn)&&(l=Jh(l,e.type,e.pendingProps,ve),l!==null?(e.stateNode=l,Rn=e,dn=xe(l.firstChild),ve=!1,a=!0):a=!1),a||lt(e)),ei(e),a=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,l=r.children,rs(a,r)?l=null:i!==null&&rs(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=au(n,e,ch,null,null,t),_a._currentValue=a),yr(n,e),Qn(n,e,l,t),e.child;case 6:return n===null&&W&&((n=t=dn)&&(t=Wh(t,e.pendingProps,ve),t!==null?(e.stateNode=t,Rn=e,dn=null,n=!0):n=!1),n||lt(e)),null;case 13:return Io(n,e,t);case 4:return Ea(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=Rt(e,null,l,t):Qn(n,e,l,t),e.child;case 11:return Xo(n,e,e.type,e.pendingProps,t);case 7:return Qn(n,e,e.pendingProps,t),e.child;case 8:return Qn(n,e,e.pendingProps.children,t),e.child;case 12:return Qn(n,e,e.pendingProps.children,t),e.child;case 10:return l=e.pendingProps,at(e,e.type,l.value),Qn(n,e,l.children,t),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Ht(e),a=Yn(a),l=l(a),e.flags|=1,Qn(n,e,l,t),e.child;case 14:return ko(n,e,e.type,e.pendingProps,t);case 15:return Vo(n,e,e.type,e.pendingProps,t);case 19:return nf(n,e,t);case 31:return gh(n,e,t);case 22:return Zo(n,e,t,e.pendingProps);case 24:return Ht(e),l=Yn(Tn),n===null?(a=Ji(),a===null&&(a=sn,r=Zi(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=t),a=r),e.memoizedState={parent:l,cache:a},Fi(e),at(e,Tn,a)):((n.lanes&t)!==0&&($i(n,e),ea(e,null,null,t),na()),a=n.memoizedState,r=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),at(e,Tn,l)):(l=r.cache,at(e,Tn,l),l!==a.cache&&Vi(e,[Tn],t,!0))),Qn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Xe(n){n.flags|=4}function Du(n,e,t,l,a){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(Mf())n.flags|=8192;else throw qt=er,Wi}else n.flags&=-16777217}function tf(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!vm(e))if(Mf())n.flags|=8192;else throw qt=er,Wi}function vr(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Hs():536870912,n.lanes|=e,_l|=e)}function ua(n,e){if(!W)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function hn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function bh(n,e,t){var l=e.pendingProps;switch(Qi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return hn(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ye(Tn),Vt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(sl(e)?Xe(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Li())),hn(e),null;case 26:var a=e.type,r=e.memoizedState;return n===null?(Xe(e),r!==null?(hn(e),tf(e,r)):(hn(e),Du(e,a,null,l,t))):r?r!==n.memoizedState?(Xe(e),hn(e),tf(e,r)):(hn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Xe(e),hn(e),Du(e,a,n,l,t)),null;case 27:if(Ma(e),t=$e.current,a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Xe(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return hn(e),null}n=Dn.current,sl(e)?Hc(e):(n=om(a,l,t),e.stateNode=n,Xe(e))}return hn(e),null;case 5:if(Ma(e),a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Xe(e);else{if(!l){if(e.stateNode===null)throw Error(m(166));return hn(e),null}if(r=Dn.current,sl(e))Hc(e);else{var i=Ur($e.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}r[qn]=e,r[Jn]=l;n:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break n;for(;i.sibling===null;){if(i.return===null||i.return===e)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=r;n:switch(Gn(r,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Xe(e)}}return hn(e),Du(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Xe(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(m(166));if(n=$e.current,sl(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,a=Rn,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}n[qn]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Pf(n.nodeValue,t)),n||lt(e,!0)}else n=Ur(n).createTextNode(l),n[qn]=e,e.stateNode=n}return hn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=sl(e),t!==null){if(n===null){if(!l)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(557));n[qn]=e}else Dt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;hn(e),n=!1}else t=Li(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ue(e),e):(ue(e),null);if((e.flags&128)!==0)throw Error(m(558))}return hn(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=sl(e),l!==null&&l.dehydrated!==null){if(n===null){if(!a)throw Error(m(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[qn]=e}else Dt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;hn(e),a=!1}else a=Li(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ue(e),e):(ue(e),null)}return ue(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==a&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),vr(e,e.updateQueue),hn(e),null);case 4:return Vt(),n===null&&ns(e.stateNode.containerInfo),hn(e),null;case 10:return Ye(e.type),hn(e),null;case 19:if(gn(Sn),l=e.memoizedState,l===null)return hn(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)ua(l,!1);else{if(xn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(r=rr(n),r!==null){for(e.flags|=128,ua(l,!1),n=r.updateQueue,e.updateQueue=n,vr(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Mc(t,n),t=t.sibling;return en(Sn,Sn.current&1|2),W&&qe(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&ee()>jr&&(e.flags|=128,a=!0,ua(l,!1),e.lanes=4194304)}else{if(!a)if(n=rr(r),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,vr(e,n),ua(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!W)return hn(e),null}else 2*ee()-l.renderingStartTime>jr&&t!==536870912&&(e.flags|=128,a=!0,ua(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ee(),n.sibling=null,t=Sn.current,en(Sn,a?t&1|2:t&1),W&&qe(e,l.treeForkCount),n):(hn(e),null);case 22:case 23:return ue(e),eu(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),t=e.updateQueue,t!==null&&vr(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&gn(Ct),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ye(Tn),hn(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function xh(n,e){switch(Qi(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ye(Tn),Vt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Ma(e),null;case 31:if(e.memoizedState!==null){if(ue(e),e.alternate===null)throw Error(m(340));Dt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ue(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Dt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return gn(Sn),null;case 4:return Vt(),null;case 10:return Ye(e.type),null;case 22:case 23:return ue(e),eu(),n!==null&&gn(Ct),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ye(Tn),null;case 25:return null;default:return null}}function lf(n,e){switch(Qi(e),e.tag){case 3:Ye(Tn),Vt();break;case 26:case 27:case 5:Ma(e);break;case 4:Vt();break;case 31:e.memoizedState!==null&&ue(e);break;case 13:ue(e);break;case 19:gn(Sn);break;case 10:Ye(e.type);break;case 22:case 23:ue(e),eu(),n!==null&&gn(Ct);break;case 24:Ye(Tn)}}function sa(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var a=l.next;t=a;do{if((t.tag&n)===n){l=void 0;var r=t.create,i=t.inst;l=r(),i.destroy=l}t=t.next}while(t!==a)}}catch(s){ln(e,e.return,s)}}function ot(n,e,t){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var r=a.next;l=r;do{if((l.tag&n)===n){var i=l.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=e;var c=t,p=s;try{p()}catch(v){ln(a,c,v)}}}l=l.next}while(l!==r)}}catch(v){ln(e,e.return,v)}}function af(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Kc(e,t)}catch(l){ln(n,n.return,l)}}}function rf(n,e,t){t.props=Qt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){ln(n,e,l)}}function ca(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(a){ln(n,e,a)}}function Me(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(a){ln(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){ln(n,e,a)}else t.current=null}function uf(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(a){ln(n,n.return,a)}}function Uu(n,e,t){try{var l=n.stateNode;Lh(l,n.type,t,e),l[Jn]=e}catch(a){ln(n,n.return,a)}}function sf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&gt(n.type)||n.tag===4}function Hu(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||sf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&gt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=He));else if(l!==4&&(l===27&&gt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Cu(n,e,t),n=n.sibling;n!==null;)Cu(n,e,t),n=n.sibling}function br(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(l!==4&&(l===27&&gt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(br(n,e,t),n=n.sibling;n!==null;)br(n,e,t),n=n.sibling}function cf(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Gn(e,l,t),e[qn]=n,e[Jn]=t}catch(r){ln(n,n.return,r)}}var ke=!1,En=!1,Bu=!1,of=typeof WeakSet=="function"?WeakSet:Set,Hn=null;function _h(n,e){if(n=n.containerInfo,ls=Qr,n=xc(n),Mi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break n}var i=0,s=-1,c=-1,p=0,v=0,S=n,y=null;e:for(;;){for(var g;S!==t||a!==0&&S.nodeType!==3||(s=i+a),S!==r||l!==0&&S.nodeType!==3||(c=i+l),S.nodeType===3&&(i+=S.nodeValue.length),(g=S.firstChild)!==null;)y=S,S=g;for(;;){if(S===n)break e;if(y===t&&++p===a&&(s=i),y===r&&++v===l&&(c=i),(g=S.nextSibling)!==null)break;S=y,y=S.parentNode}S=g}t=s===-1||c===-1?null:{start:s,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(as={focusedElem:n,selectionRange:t},Qr=!1,Hn=e;Hn!==null;)if(e=Hn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Hn=n;else for(;Hn!==null;){switch(e=Hn,r=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)a=n[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&r!==null){n=void 0,t=e,a=r.memoizedProps,r=r.memoizedState,l=t.stateNode;try{var M=Qt(t.type,a);n=l.getSnapshotBeforeUpdate(M,r),l.__reactInternalSnapshotBeforeUpdate=n}catch(C){ln(t,t.return,C)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)us(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":us(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(m(163))}if(n=e.sibling,n!==null){n.return=e.return,Hn=n;break}Hn=e.return}}function ff(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ze(n,t),l&4&&sa(5,t);break;case 1:if(Ze(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(i){ln(t,t.return,i)}else{var a=Qt(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){ln(t,t.return,i)}}l&64&&af(t),l&512&&ca(t,t.return);break;case 3:if(Ze(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Kc(n,e)}catch(i){ln(t,t.return,i)}}break;case 27:e===null&&l&4&&cf(t);case 26:case 5:Ze(n,t),e===null&&l&4&&uf(t),l&512&&ca(t,t.return);break;case 12:Ze(n,t);break;case 31:Ze(n,t),l&4&&hf(n,t);break;case 13:Ze(n,t),l&4&&pf(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Oh.bind(null,t),Fh(n,t))));break;case 22:if(l=t.memoizedState!==null||ke,!l){e=e!==null&&e.memoizedState!==null||En,a=ke;var r=En;ke=l,(En=e)&&!r?Ke(n,t,(t.subtreeFlags&8772)!==0):Ze(n,t),ke=a,En=r}break;case 30:break;default:Ze(n,t)}}function mf(n){var e=n.alternate;e!==null&&(n.alternate=null,mf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&mi(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var yn=null,Fn=!1;function Ve(n,e,t){for(t=t.child;t!==null;)df(n,e,t),t=t.sibling}function df(n,e,t){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(Ul,t)}catch{}switch(t.tag){case 26:En||Me(t,e),Ve(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:En||Me(t,e);var l=yn,a=Fn;gt(t.type)&&(yn=t.stateNode,Fn=!1),Ve(n,e,t),va(t.stateNode),yn=l,Fn=a;break;case 5:En||Me(t,e);case 6:if(l=yn,a=Fn,yn=null,Ve(n,e,t),yn=l,Fn=a,yn!==null)if(Fn)try{(yn.nodeType===9?yn.body:yn.nodeName==="HTML"?yn.ownerDocument.body:yn).removeChild(t.stateNode)}catch(r){ln(t,e,r)}else try{yn.removeChild(t.stateNode)}catch(r){ln(t,e,r)}break;case 18:yn!==null&&(Fn?(n=yn,rm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Ml(n)):rm(yn,t.stateNode));break;case 4:l=yn,a=Fn,yn=t.stateNode.containerInfo,Fn=!0,Ve(n,e,t),yn=l,Fn=a;break;case 0:case 11:case 14:case 15:ot(2,t,e),En||ot(4,t,e),Ve(n,e,t);break;case 1:En||(Me(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&rf(t,e,l)),Ve(n,e,t);break;case 21:Ve(n,e,t);break;case 22:En=(l=En)||t.memoizedState!==null,Ve(n,e,t),En=l;break;default:Ve(n,e,t)}}function hf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ml(n)}catch(t){ln(e,e.return,t)}}}function pf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ml(n)}catch(t){ln(e,e.return,t)}}function Sh(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new of),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new of),e;default:throw Error(m(435,n.tag))}}function xr(n,e){var t=Sh(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var a=wh.bind(null,n,l);l.then(a,a)}})}function $n(n,e){var t=e.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l],r=n,i=e,s=i;n:for(;s!==null;){switch(s.tag){case 27:if(gt(s.type)){yn=s.stateNode,Fn=!1;break n}break;case 5:yn=s.stateNode,Fn=!1;break n;case 3:case 4:yn=s.stateNode.containerInfo,Fn=!0;break n}s=s.return}if(yn===null)throw Error(m(160));df(r,i,a),yn=null,Fn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)yf(e,n),e=e.sibling}var je=null;function yf(n,e){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:$n(e,n),In(n),l&4&&(ot(3,n,n.return),sa(3,n),ot(5,n,n.return));break;case 1:$n(e,n),In(n),l&512&&(En||t===null||Me(t,t.return)),l&64&&ke&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var a=je;if($n(e,n),In(n),l&512&&(En||t===null||Me(t,t.return)),l&4){var r=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Bl]||r[qn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(l),a.head.insertBefore(r,a.querySelector("head > title"))),Gn(r,l,t),r[qn]=n,Un(r),l=r;break n;case"link":var i=ym("link","href",a).get(l+(t.href||""));if(i){for(var s=0;s<i.length;s++)if(r=i[s],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(s,1);break e}}r=a.createElement(l),Gn(r,l,t),a.head.appendChild(r);break;case"meta":if(i=ym("meta","content",a).get(l+(t.content||""))){for(s=0;s<i.length;s++)if(r=i[s],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(s,1);break e}}r=a.createElement(l),Gn(r,l,t),a.head.appendChild(r);break;default:throw Error(m(468,l))}r[qn]=n,Un(r),l=r}n.stateNode=l}else gm(a,n.type,n.stateNode);else n.stateNode=pm(a,l,n.memoizedProps);else r!==l?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,l===null?gm(a,n.type,n.stateNode):pm(a,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Uu(n,n.memoizedProps,t.memoizedProps)}break;case 27:$n(e,n),In(n),l&512&&(En||t===null||Me(t,t.return)),t!==null&&l&4&&Uu(n,n.memoizedProps,t.memoizedProps);break;case 5:if($n(e,n),In(n),l&512&&(En||t===null||Me(t,t.return)),n.flags&32){a=n.stateNode;try{It(a,"")}catch(M){ln(n,n.return,M)}}l&4&&n.stateNode!=null&&(a=n.memoizedProps,Uu(n,a,t!==null?t.memoizedProps:a)),l&1024&&(Bu=!0);break;case 6:if($n(e,n),In(n),l&4){if(n.stateNode===null)throw Error(m(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(M){ln(n,n.return,M)}}break;case 3:if(Br=null,a=je,je=Hr(e.containerInfo),$n(e,n),je=a,In(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ml(e.containerInfo)}catch(M){ln(n,n.return,M)}Bu&&(Bu=!1,gf(n));break;case 4:l=je,je=Hr(n.stateNode.containerInfo),$n(e,n),In(n),je=l;break;case 12:$n(e,n),In(n);break;case 31:$n(e,n),In(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,xr(n,l)));break;case 13:$n(e,n),In(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Sr=ee()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,xr(n,l)));break;case 22:a=n.memoizedState!==null;var c=t!==null&&t.memoizedState!==null,p=ke,v=En;if(ke=p||a,En=v||c,$n(e,n),En=v,ke=p,In(n),l&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(t===null||c||ke||En||Gt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){c=t=e;try{if(r=c.stateNode,a)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=c.stateNode;var S=c.memoizedProps.style,y=S!=null&&S.hasOwnProperty("display")?S.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(M){ln(c,c.return,M)}}}else if(e.tag===6){if(t===null){c=e;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(M){ln(c,c.return,M)}}}else if(e.tag===18){if(t===null){c=e;try{var g=c.stateNode;a?im(g,!0):im(c.stateNode,!1)}catch(M){ln(c,c.return,M)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,xr(n,t))));break;case 19:$n(e,n),In(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,xr(n,l)));break;case 30:break;case 21:break;default:$n(e,n),In(n)}}function In(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(sf(l)){t=l;break}l=l.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var a=t.stateNode,r=Hu(n);br(n,r,a);break;case 5:var i=t.stateNode;t.flags&32&&(It(i,""),t.flags&=-33);var s=Hu(n);br(n,s,i);break;case 3:case 4:var c=t.stateNode.containerInfo,p=Hu(n);Cu(n,p,c);break;default:throw Error(m(161))}}catch(v){ln(n,n.return,v)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function gf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;gf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Ze(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ff(n,e.alternate,e),e=e.sibling}function Gt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:ot(4,e,e.return),Gt(e);break;case 1:Me(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&rf(e,e.return,t),Gt(e);break;case 27:va(e.stateNode);case 26:case 5:Me(e,e.return),Gt(e);break;case 22:e.memoizedState===null&&Gt(e);break;case 30:Gt(e);break;default:Gt(e)}n=n.sibling}}function Ke(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=n,r=e,i=r.flags;switch(r.tag){case 0:case 11:case 15:Ke(a,r,t),sa(4,r);break;case 1:if(Ke(a,r,t),l=r,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(p){ln(l,l.return,p)}if(l=r,a=l.updateQueue,a!==null){var s=l.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)Zc(c[a],s)}catch(p){ln(l,l.return,p)}}t&&i&64&&af(r),ca(r,r.return);break;case 27:cf(r);case 26:case 5:Ke(a,r,t),t&&l===null&&i&4&&uf(r),ca(r,r.return);break;case 12:Ke(a,r,t);break;case 31:Ke(a,r,t),t&&i&4&&hf(a,r);break;case 13:Ke(a,r,t),t&&i&4&&pf(a,r);break;case 22:r.memoizedState===null&&Ke(a,r,t),ca(r,r.return);break;case 30:break;default:Ke(a,r,t)}e=e.sibling}}function qu(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Wl(t))}function Ru(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Wl(n))}function ze(n,e,t,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vf(n,e,t,l),e=e.sibling}function vf(n,e,t,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ze(n,e,t,l),a&2048&&sa(9,e);break;case 1:ze(n,e,t,l);break;case 3:ze(n,e,t,l),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Wl(n)));break;case 12:if(a&2048){ze(n,e,t,l),n=e.stateNode;try{var r=e.memoizedProps,i=r.id,s=r.onPostCommit;typeof s=="function"&&s(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(c){ln(e,e.return,c)}}else ze(n,e,t,l);break;case 31:ze(n,e,t,l);break;case 13:ze(n,e,t,l);break;case 23:break;case 22:r=e.stateNode,i=e.alternate,e.memoizedState!==null?r._visibility&2?ze(n,e,t,l):oa(n,e):r._visibility&2?ze(n,e,t,l):(r._visibility|=2,vl(n,e,t,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&qu(i,e);break;case 24:ze(n,e,t,l),a&2048&&Ru(e.alternate,e);break;default:ze(n,e,t,l)}}function vl(n,e,t,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=n,i=e,s=t,c=l,p=i.flags;switch(i.tag){case 0:case 11:case 15:vl(r,i,s,c,a),sa(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?vl(r,i,s,c,a):oa(r,i):(v._visibility|=2,vl(r,i,s,c,a)),a&&p&2048&&qu(i.alternate,i);break;case 24:vl(r,i,s,c,a),a&&p&2048&&Ru(i.alternate,i);break;default:vl(r,i,s,c,a)}e=e.sibling}}function oa(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,a=l.flags;switch(l.tag){case 22:oa(t,l),a&2048&&qu(l.alternate,l);break;case 24:oa(t,l),a&2048&&Ru(l.alternate,l);break;default:oa(t,l)}e=e.sibling}}var fa=8192;function bl(n,e,t){if(n.subtreeFlags&fa)for(n=n.child;n!==null;)bf(n,e,t),n=n.sibling}function bf(n,e,t){switch(n.tag){case 26:bl(n,e,t),n.flags&fa&&n.memoizedState!==null&&sp(t,je,n.memoizedState,n.memoizedProps);break;case 5:bl(n,e,t);break;case 3:case 4:var l=je;je=Hr(n.stateNode.containerInfo),bl(n,e,t),je=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=fa,fa=16777216,bl(n,e,t),fa=l):bl(n,e,t));break;default:bl(n,e,t)}}function xf(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ma(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Hn=l,Sf(l,n)}xf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_f(n),n=n.sibling}function _f(n){switch(n.tag){case 0:case 11:case 15:ma(n),n.flags&2048&&ot(9,n,n.return);break;case 3:ma(n);break;case 12:ma(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,_r(n)):ma(n);break;default:ma(n)}}function _r(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Hn=l,Sf(l,n)}xf(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:ot(8,e,e.return),_r(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,_r(e));break;default:_r(e)}n=n.sibling}}function Sf(n,e){for(;Hn!==null;){var t=Hn;switch(t.tag){case 0:case 11:case 15:ot(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Hn=l;else n:for(t=n;Hn!==null;){l=Hn;var a=l.sibling,r=l.return;if(mf(l),l===t){Hn=null;break n}if(a!==null){a.return=r,Hn=a;break n}Hn=r}}}var jh={getCacheForType:function(n){var e=Yn(Tn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Yn(Tn).controller.signal}},zh=typeof WeakMap=="function"?WeakMap:Map,P=0,sn=null,k=null,K=0,tn=0,se=null,ft=!1,xl=!1,Yu=!1,Je=0,xn=0,mt=0,Lt=0,Qu=0,ce=0,_l=0,da=null,Pn=null,Gu=!1,Sr=0,jf=0,jr=1/0,zr=null,dt=null,Mn=0,ht=null,Sl=null,We=0,Lu=0,Xu=null,zf=null,ha=0,ku=null;function oe(){return(P&2)!==0&&K!==0?K&-K:_.T!==null?Fu():Rs()}function Tf(){if(ce===0)if((K&536870912)===0||W){var n=Da;Da<<=1,(Da&3932160)===0&&(Da=262144),ce=n}else ce=536870912;return n=ie.current,n!==null&&(n.flags|=32),ce}function ne(n,e,t){(n===sn&&(tn===2||tn===9)||n.cancelPendingCommit!==null)&&(jl(n,0),pt(n,K,ce,!1)),Cl(n,t),((P&2)===0||n!==sn)&&(n===sn&&((P&2)===0&&(Lt|=t),xn===4&&pt(n,K,ce,!1)),Oe(n))}function Af(n,e,t){if((P&6)!==0)throw Error(m(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Hl(n,e),a=l?Nh(n,e):Zu(n,e,!0),r=l;do{if(a===0){xl&&!l&&pt(n,e,0,!1);break}else{if(t=n.current.alternate,r&&!Th(t)){a=Zu(n,e,!1),r=!1;continue}if(a===2){if(r=e,n.errorRecoveryDisabledLanes&r)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var s=n;a=da;var c=s.current.memoizedState.isDehydrated;if(c&&(jl(s,i).flags|=256),i=Zu(s,i,!1),i!==2){if(Yu&&!c){s.errorRecoveryDisabledLanes|=r,Lt|=r,a=4;break n}r=Pn,Pn=a,r!==null&&(Pn===null?Pn=r:Pn.push.apply(Pn,r))}a=i}if(r=!1,a!==2)continue}}if(a===1){jl(n,0),pt(n,e,0,!0);break}n:{switch(l=n,r=a,r){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:pt(l,e,ce,!ft);break n;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(a=Sr+300-ee(),10<a)){if(pt(l,e,ce,!ft),Ha(l,0,!0)!==0)break n;We=e,l.timeoutHandle=lm(Nf.bind(null,l,t,Pn,zr,Gu,e,ce,Lt,_l,ft,r,"Throttled",-0,0),a);break n}Nf(l,t,Pn,zr,Gu,e,ce,Lt,_l,ft,r,null,-0,0)}}break}while(!0);Oe(n)}function Nf(n,e,t,l,a,r,i,s,c,p,v,S,y,g){if(n.timeoutHandle=-1,S=e.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},bf(e,r,S);var M=(r&62914560)===r?Sr-ee():(r&4194048)===r?jf-ee():0;if(M=cp(S,M),M!==null){We=r,n.cancelPendingCommit=M(Cf.bind(null,n,e,r,t,l,a,i,s,c,v,S,null,y,g)),pt(n,r,i,!p);return}}Cf(n,e,r,t,l,a,i,s,c)}function Th(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var a=t[l],r=a.getSnapshot;a=a.value;try{if(!ae(r(),a))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pt(n,e,t,l){e&=~Qu,e&=~Lt,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var a=e;0<a;){var r=31-le(a),i=1<<r;l[r]=-1,a&=~i}t!==0&&Cs(n,t,e)}function Tr(){return(P&6)===0?(pa(0),!1):!0}function Vu(){if(k!==null){if(tn===0)var n=k.return;else n=k,Re=Ut=null,uu(n),dl=null,$l=0,n=k;for(;n!==null;)lf(n.alternate,n),n=n.return;k=null}}function jl(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,Vh(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),We=0,Vu(),sn=n,k=t=Be(n.current,null),K=e,tn=0,se=null,ft=!1,xl=Hl(n,e),Yu=!1,_l=ce=Qu=Lt=mt=xn=0,Pn=da=null,Gu=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var a=31-le(l),r=1<<a;e|=n[a],l&=~r}return Je=e,Za(),t}function Ef(n,e){q=null,_.H=ra,e===ml||e===nr?(e=Lc(),tn=3):e===Wi?(e=Lc(),tn=4):tn=e===ju?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,se=e,k===null&&(xn=1,hr(n,pe(e,n.current)))}function Mf(){var n=ie.current;return n===null?!0:(K&4194048)===K?be===null:(K&62914560)===K||(K&536870912)!==0?n===be:!1}function Of(){var n=_.H;return _.H=ra,n===null?ra:n}function wf(){var n=_.A;return _.A=jh,n}function Ar(){xn=4,ft||(K&4194048)!==K&&ie.current!==null||(xl=!0),(mt&134217727)===0&&(Lt&134217727)===0||sn===null||pt(sn,K,ce,!1)}function Zu(n,e,t){var l=P;P|=2;var a=Of(),r=wf();(sn!==n||K!==e)&&(zr=null,jl(n,e)),e=!1;var i=xn;n:do try{if(tn!==0&&k!==null){var s=k,c=se;switch(tn){case 8:Vu(),i=6;break n;case 3:case 2:case 9:case 6:ie.current===null&&(e=!0);var p=tn;if(tn=0,se=null,zl(n,s,c,p),t&&xl){i=0;break n}break;default:p=tn,tn=0,se=null,zl(n,s,c,p)}}Ah(),i=xn;break}catch(v){Ef(n,v)}while(!0);return e&&n.shellSuspendCounter++,Re=Ut=null,P=l,_.H=a,_.A=r,k===null&&(sn=null,K=0,Za()),i}function Ah(){for(;k!==null;)Df(k)}function Nh(n,e){var t=P;P|=2;var l=Of(),a=wf();sn!==n||K!==e?(zr=null,jr=ee()+500,jl(n,e)):xl=Hl(n,e);n:do try{if(tn!==0&&k!==null){e=k;var r=se;e:switch(tn){case 1:tn=0,se=null,zl(n,e,r,1);break;case 2:case 9:if(Qc(r)){tn=0,se=null,Uf(e);break}e=function(){tn!==2&&tn!==9||sn!==n||(tn=7),Oe(n)},r.then(e,e);break n;case 3:tn=7;break n;case 4:tn=5;break n;case 7:Qc(r)?(tn=0,se=null,Uf(e)):(tn=0,se=null,zl(n,e,r,7));break;case 5:var i=null;switch(k.tag){case 26:i=k.memoizedState;case 5:case 27:var s=k;if(i?vm(i):s.stateNode.complete){tn=0,se=null;var c=s.sibling;if(c!==null)k=c;else{var p=s.return;p!==null?(k=p,Nr(p)):k=null}break e}}tn=0,se=null,zl(n,e,r,5);break;case 6:tn=0,se=null,zl(n,e,r,6);break;case 8:Vu(),xn=6;break n;default:throw Error(m(462))}}Eh();break}catch(v){Ef(n,v)}while(!0);return Re=Ut=null,_.H=l,_.A=a,P=t,k!==null?0:(sn=null,K=0,Za(),xn)}function Eh(){for(;k!==null&&!$m();)Df(k)}function Df(n){var e=ef(n.alternate,n,Je);n.memoizedProps=n.pendingProps,e===null?Nr(n):k=e}function Uf(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Wo(t,e,e.pendingProps,e.type,void 0,K);break;case 11:e=Wo(t,e,e.pendingProps,e.type.render,e.ref,K);break;case 5:uu(e);default:lf(t,e),e=k=Mc(e,Je),e=ef(t,e,Je)}n.memoizedProps=n.pendingProps,e===null?Nr(n):k=e}function zl(n,e,t,l){Re=Ut=null,uu(e),dl=null,$l=0;var a=e.return;try{if(yh(n,a,e,t,K)){xn=1,hr(n,pe(t,n.current)),k=null;return}}catch(r){if(a!==null)throw k=a,r;xn=1,hr(n,pe(t,n.current)),k=null;return}e.flags&32768?(W||l===1?n=!0:xl||(K&536870912)!==0?n=!1:(ft=n=!0,(l===2||l===9||l===3||l===6)&&(l=ie.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hf(e,n)):Nr(e)}function Nr(n){var e=n;do{if((e.flags&32768)!==0){Hf(e,ft);return}n=e.return;var t=bh(e.alternate,e,Je);if(t!==null){k=t;return}if(e=e.sibling,e!==null){k=e;return}k=e=n}while(e!==null);xn===0&&(xn=5)}function Hf(n,e){do{var t=xh(n.alternate,n);if(t!==null){t.flags&=32767,k=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){k=n;return}k=n=t}while(n!==null);xn=6,k=null}function Cf(n,e,t,l,a,r,i,s,c){n.cancelPendingCommit=null;do Er();while(Mn!==0);if((P&6)!==0)throw Error(m(327));if(e!==null){if(e===n.current)throw Error(m(177));if(r=e.lanes|e.childLanes,r|=Hi,ud(n,t,r,i,s,c),n===sn&&(k=sn=null,K=0),Sl=e,ht=n,We=t,Lu=r,Xu=a,zf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Dh(Oa,function(){return Qf(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,a=E.p,E.p=2,i=P,P|=4;try{_h(n,e,t)}finally{P=i,E.p=a,_.T=l}}Mn=1,Bf(),qf(),Rf()}}function Bf(){if(Mn===1){Mn=0;var n=ht,e=Sl,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=_.T,_.T=null;var l=E.p;E.p=2;var a=P;P|=4;try{yf(e,n);var r=as,i=xc(n.containerInfo),s=r.focusedElem,c=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&bc(s.ownerDocument.documentElement,s)){if(c!==null&&Mi(s)){var p=c.start,v=c.end;if(v===void 0&&(v=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(v,s.value.length);else{var S=s.ownerDocument||document,y=S&&S.defaultView||window;if(y.getSelection){var g=y.getSelection(),M=s.textContent.length,C=Math.min(c.start,M),un=c.end===void 0?C:Math.min(c.end,M);!g.extend&&C>un&&(i=un,un=C,C=i);var d=vc(s,C),f=vc(s,un);if(d&&f&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var h=S.createRange();h.setStart(d.node,d.offset),g.removeAllRanges(),C>un?(g.addRange(h),g.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),g.addRange(h))}}}}for(S=[],g=s;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<S.length;s++){var b=S[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Qr=!!ls,as=ls=null}finally{P=a,E.p=l,_.T=t}}n.current=e,Mn=2}}function qf(){if(Mn===2){Mn=0;var n=ht,e=Sl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=_.T,_.T=null;var l=E.p;E.p=2;var a=P;P|=4;try{ff(n,e.alternate,e)}finally{P=a,E.p=l,_.T=t}}Mn=3}}function Rf(){if(Mn===4||Mn===3){Mn=0,Im();var n=ht,e=Sl,t=We,l=zf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Mn=5:(Mn=0,Sl=ht=null,Yf(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(dt=null),oi(t),e=e.stateNode,te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=_.T,a=E.p,E.p=2,_.T=null;try{for(var r=n.onRecoverableError,i=0;i<l.length;i++){var s=l[i];r(s.value,{componentStack:s.stack})}}finally{_.T=e,E.p=a}}(We&3)!==0&&Er(),Oe(n),a=n.pendingLanes,(t&261930)!==0&&(a&42)!==0?n===ku?ha++:(ha=0,ku=n):ha=0,pa(0)}}function Yf(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Wl(e)))}function Er(){return Bf(),qf(),Rf(),Qf()}function Qf(){if(Mn!==5)return!1;var n=ht,e=Lu;Lu=0;var t=oi(We),l=_.T,a=E.p;try{E.p=32>t?32:t,_.T=null,t=Xu,Xu=null;var r=ht,i=We;if(Mn=0,Sl=ht=null,We=0,(P&6)!==0)throw Error(m(331));var s=P;if(P|=4,_f(r.current),vf(r,r.current,i,t),P=s,pa(0,!1),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(Ul,r)}catch{}return!0}finally{E.p=a,_.T=l,Yf(n,e)}}function Gf(n,e,t){e=pe(t,e),e=Su(n.stateNode,e,2),n=ut(n,e,2),n!==null&&(Cl(n,2),Oe(n))}function ln(n,e,t){if(n.tag===3)Gf(n,n,t);else for(;e!==null;){if(e.tag===3){Gf(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dt===null||!dt.has(l))){n=pe(t,n),t=Go(2),l=ut(e,t,2),l!==null&&(Lo(t,l,e,n),Cl(l,2),Oe(l));break}}e=e.return}}function Ku(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new zh;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(t)||(Yu=!0,a.add(t),n=Mh.bind(null,n,e,t),e.then(n,n))}function Mh(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,sn===n&&(K&t)===t&&(xn===4||xn===3&&(K&62914560)===K&&300>ee()-Sr?(P&2)===0&&jl(n,0):Qu|=t,_l===K&&(_l=0)),Oe(n)}function Lf(n,e){e===0&&(e=Hs()),n=Ot(n,e),n!==null&&(Cl(n,e),Oe(n))}function Oh(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Lf(n,t)}function wh(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(e),Lf(n,t)}function Dh(n,e){return ii(n,e)}var Mr=null,Tl=null,Ju=!1,Or=!1,Wu=!1,yt=0;function Oe(n){n!==Tl&&n.next===null&&(Tl===null?Mr=Tl=n:Tl=Tl.next=n),Or=!0,Ju||(Ju=!0,Hh())}function pa(n,e){if(!Wu&&Or){Wu=!0;do for(var t=!1,l=Mr;l!==null;){if(n!==0){var a=l.pendingLanes;if(a===0)var r=0;else{var i=l.suspendedLanes,s=l.pingedLanes;r=(1<<31-le(42|n)+1)-1,r&=a&~(i&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Zf(l,r))}else r=K,r=Ha(l,l===sn?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Hl(l,r)||(t=!0,Zf(l,r));l=l.next}while(t);Wu=!1}}function Uh(){Xf()}function Xf(){Or=Ju=!1;var n=0;yt!==0&&kh()&&(n=yt);for(var e=ee(),t=null,l=Mr;l!==null;){var a=l.next,r=kf(l,e);r===0?(l.next=null,t===null?Mr=a:t.next=a,a===null&&(Tl=t)):(t=l,(n!==0||(r&3)!==0)&&(Or=!0)),l=a}Mn!==0&&Mn!==5||pa(n),yt!==0&&(yt=0)}function kf(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,a=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var i=31-le(r),s=1<<i,c=a[i];c===-1?((s&t)===0||(s&l)!==0)&&(a[i]=id(s,e)):c<=e&&(n.expiredLanes|=s),r&=~s}if(e=sn,t=K,t=Ha(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(tn===2||tn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&ui(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Hl(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&ui(l),oi(t)){case 2:case 8:t=Ds;break;case 32:t=Oa;break;case 268435456:t=Us;break;default:t=Oa}return l=Vf.bind(null,n),t=ii(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&ui(l),n.callbackPriority=2,n.callbackNode=null,2}function Vf(n,e){if(Mn!==0&&Mn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Er()&&n.callbackNode!==t)return null;var l=K;return l=Ha(n,n===sn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Af(n,l,e),kf(n,ee()),n.callbackNode!=null&&n.callbackNode===t?Vf.bind(null,n):null)}function Zf(n,e){if(Er())return null;Af(n,e,!0)}function Hh(){Zh(function(){(P&6)!==0?ii(ws,Uh):Xf()})}function Fu(){if(yt===0){var n=ol;n===0&&(n=wa,wa<<=1,(wa&261888)===0&&(wa=256)),yt=n}return yt}function Kf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ra(""+n)}function Jf(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function Ch(n,e,t,l,a){if(e==="submit"&&t&&t.stateNode===a){var r=Kf((a[Jn]||null).action),i=l.submitter;i&&(e=(e=i[Jn]||null)?Kf(e.formAction):i.getAttribute("formAction"),e!==null&&(r=e,i=null));var s=new La("action","action",null,l,a);n.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(yt!==0){var c=i?Jf(a,i):new FormData(a);yu(t,{pending:!0,data:c,method:a.method,action:r},null,c)}}else typeof r=="function"&&(s.preventDefault(),c=i?Jf(a,i):new FormData(a),yu(t,{pending:!0,data:c,method:a.method,action:r},r,c))},currentTarget:a}]})}}for(var $u=0;$u<Ui.length;$u++){var Iu=Ui[$u],Bh=Iu.toLowerCase(),qh=Iu[0].toUpperCase()+Iu.slice(1);Se(Bh,"on"+qh)}Se(jc,"onAnimationEnd"),Se(zc,"onAnimationIteration"),Se(Tc,"onAnimationStart"),Se("dblclick","onDoubleClick"),Se("focusin","onFocus"),Se("focusout","onBlur"),Se(Pd,"onTransitionRun"),Se(nh,"onTransitionStart"),Se(eh,"onTransitionCancel"),Se(Ac,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya));function Wf(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],a=l.event;l=l.listeners;n:{var r=void 0;if(e)for(var i=l.length-1;0<=i;i--){var s=l[i],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==r&&a.isPropagationStopped())break n;r=s,a.currentTarget=p;try{r(a)}catch(v){Va(v)}a.currentTarget=null,r=c}else for(i=0;i<l.length;i++){if(s=l[i],c=s.instance,p=s.currentTarget,s=s.listener,c!==r&&a.isPropagationStopped())break n;r=s,a.currentTarget=p;try{r(a)}catch(v){Va(v)}a.currentTarget=null,r=c}}}}function V(n,e){var t=e[fi];t===void 0&&(t=e[fi]=new Set);var l=n+"__bubble";t.has(l)||(Ff(e,n,2,!1),t.add(l))}function Pu(n,e,t){var l=0;e&&(l|=4),Ff(t,n,l,e)}var wr="_reactListening"+Math.random().toString(36).slice(2);function ns(n){if(!n[wr]){n[wr]=!0,Gs.forEach(function(t){t!=="selectionchange"&&(Rh.has(t)||Pu(t,!1,n),Pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[wr]||(e[wr]=!0,Pu("selectionchange",!1,e))}}function Ff(n,e,t,l){switch(Tm(e)){case 2:var a=mp;break;case 8:a=dp;break;default:a=ps}t=a.bind(null,e,t,n),a=void 0,!xi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function es(n,e,t,l,a){var r=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var s=l.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=l.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=Kt(s),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){l=r=i;continue n}s=s.parentNode}}l=l.return}Ps(function(){var p=r,v=vi(t),S=[];n:{var y=Nc.get(n);if(y!==void 0){var g=La,M=n;switch(n){case"keypress":if(Qa(t)===0)break n;case"keydown":case"keyup":g=wd;break;case"focusin":M="focus",g=zi;break;case"focusout":M="blur",g=zi;break;case"beforeblur":case"afterblur":g=zi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Hd;break;case jc:case zc:case Tc:g=Sd;break;case Ac:g=Bd;break;case"scroll":case"scrollend":g=gd;break;case"wheel":g=Rd;break;case"copy":case"cut":case"paste":g=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ac;break;case"toggle":case"beforetoggle":g=Qd}var C=(e&4)!==0,un=!C&&(n==="scroll"||n==="scrollend"),d=C?y!==null?y+"Capture":null:y;C=[];for(var f=p,h;f!==null;){var b=f;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||d===null||(b=Rl(f,d),b!=null&&C.push(ga(f,b,h))),un)break;f=f.return}0<C.length&&(y=new g(y,M,null,t,v),S.push({event:y,listeners:C}))}}if((e&7)===0){n:{if(y=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",y&&t!==gi&&(M=t.relatedTarget||t.fromElement)&&(Kt(M)||M[Zt]))break n;if((g||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,g?(M=t.relatedTarget||t.toElement,g=p,M=M?Kt(M):null,M!==null&&(un=T(M),C=M.tag,M!==un||C!==5&&C!==27&&C!==6)&&(M=null)):(g=null,M=p),g!==M)){if(C=tc,b="onMouseLeave",d="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(C=ac,b="onPointerLeave",d="onPointerEnter",f="pointer"),un=g==null?y:ql(g),h=M==null?y:ql(M),y=new C(b,f+"leave",g,t,v),y.target=un,y.relatedTarget=h,b=null,Kt(v)===p&&(C=new C(d,f+"enter",M,t,v),C.target=h,C.relatedTarget=un,b=C),un=b,g&&M)e:{for(C=Yh,d=g,f=M,h=0,b=d;b;b=C(b))h++;b=0;for(var U=f;U;U=C(U))b++;for(;0<h-b;)d=C(d),h--;for(;0<b-h;)f=C(f),b--;for(;h--;){if(d===f||f!==null&&d===f.alternate){C=d;break e}d=C(d),f=C(f)}C=null}else C=null;g!==null&&$f(S,y,g,C,!1),M!==null&&un!==null&&$f(S,un,M,C,!0)}}n:{if(y=p?ql(p):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var F=mc;else if(oc(y))if(dc)F=Fd;else{F=Jd;var w=Kd}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&yi(p.elementType)&&(F=mc):F=Wd;if(F&&(F=F(n,p))){fc(S,F,t,v);break n}w&&w(n,y,p),n==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&pi(y,"number",y.value)}switch(w=p?ql(p):window,n){case"focusin":(oc(w)||w.contentEditable==="true")&&(tl=w,Oi=p,Zl=null);break;case"focusout":Zl=Oi=tl=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,_c(S,t,v);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":_c(S,t,v)}var Q;if(Ai)n:{switch(n){case"compositionstart":var J="onCompositionStart";break n;case"compositionend":J="onCompositionEnd";break n;case"compositionupdate":J="onCompositionUpdate";break n}J=void 0}else el?sc(n,t)&&(J="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(J="onCompositionStart");J&&(rc&&t.locale!=="ko"&&(el||J!=="onCompositionStart"?J==="onCompositionEnd"&&el&&(Q=nc()):(nt=v,_i="value"in nt?nt.value:nt.textContent,el=!0)),w=Dr(p,J),0<w.length&&(J=new lc(J,n,null,t,v),S.push({event:J,listeners:w}),Q?J.data=Q:(Q=cc(t),Q!==null&&(J.data=Q)))),(Q=Ld?Xd(n,t):kd(n,t))&&(J=Dr(p,"onBeforeInput"),0<J.length&&(w=new lc("onBeforeInput","beforeinput",null,t,v),S.push({event:w,listeners:J}),w.data=Q)),Ch(S,n,p,t,v)}Wf(S,e)})}function ga(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Dr(n,e){for(var t=e+"Capture",l=[];n!==null;){var a=n,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Rl(n,t),a!=null&&l.unshift(ga(n,a,r)),a=Rl(n,e),a!=null&&l.push(ga(n,a,r))),n.tag===3)return l;n=n.return}return[]}function Yh(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $f(n,e,t,l,a){for(var r=e._reactName,i=[];t!==null&&t!==l;){var s=t,c=s.alternate,p=s.stateNode;if(s=s.tag,c!==null&&c===l)break;s!==5&&s!==26&&s!==27||p===null||(c=p,a?(p=Rl(t,r),p!=null&&i.unshift(ga(t,p,c))):a||(p=Rl(t,r),p!=null&&i.push(ga(t,p,c)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var Qh=/\r\n?/g,Gh=/\u0000|\uFFFD/g;function If(n){return(typeof n=="string"?n:""+n).replace(Qh,`
`).replace(Gh,"")}function Pf(n,e){return e=If(e),If(n)===e}function rn(n,e,t,l,a,r){switch(t){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||It(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&It(n,""+l);break;case"className":Ba(n,"class",l);break;case"tabIndex":Ba(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ba(n,t,l);break;case"style":$s(n,l,r);break;case"data":if(e!=="object"){Ba(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ra(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(e!=="input"&&rn(n,e,"name",a.name,a,null),rn(n,e,"formEncType",a.formEncType,a,null),rn(n,e,"formMethod",a.formMethod,a,null),rn(n,e,"formTarget",a.formTarget,a,null)):(rn(n,e,"encType",a.encType,a,null),rn(n,e,"method",a.method,a,null),rn(n,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ra(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=He);break;case"onScroll":l!=null&&V("scroll",n);break;case"onScrollEnd":l!=null&&V("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(m(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=Ra(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":V("beforetoggle",n),V("toggle",n),Ca(n,"popover",l);break;case"xlinkActuate":Ue(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ca(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=pd.get(t)||t,Ca(n,t,l))}}function ts(n,e,t,l,a,r){switch(t){case"style":$s(n,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(m(60));n.innerHTML=t}}break;case"children":typeof l=="string"?It(n,l):(typeof l=="number"||typeof l=="bigint")&&It(n,""+l);break;case"onScroll":l!=null&&V("scroll",n);break;case"onScrollEnd":l!=null&&V("scrollend",n);break;case"onClick":l!=null&&(n.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ls.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),e=t.slice(2,a?t.length-7:void 0),r=n[Jn]||null,r=r!=null?r[t]:null,typeof r=="function"&&n.removeEventListener(e,r,a),typeof l=="function")){typeof r!="function"&&r!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,l,a);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):Ca(n,t,l)}}}function Gn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",n),V("load",n);var l=!1,a=!1,r;for(r in t)if(t.hasOwnProperty(r)){var i=t[r];if(i!=null)switch(r){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:rn(n,e,r,i,t,null)}}a&&rn(n,e,"srcSet",t.srcSet,t,null),l&&rn(n,e,"src",t.src,t,null);return;case"input":V("invalid",n);var s=r=i=a=null,c=null,p=null;for(l in t)if(t.hasOwnProperty(l)){var v=t[l];if(v!=null)switch(l){case"name":a=v;break;case"type":i=v;break;case"checked":c=v;break;case"defaultChecked":p=v;break;case"value":r=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,e));break;default:rn(n,e,l,v,t,null)}}Ks(n,r,s,c,p,i,a,!1);return;case"select":V("invalid",n),l=i=r=null;for(a in t)if(t.hasOwnProperty(a)&&(s=t[a],s!=null))switch(a){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":l=s;default:rn(n,e,a,s,t,null)}e=r,t=i,n.multiple=!!l,e!=null?$t(n,!!l,e,!1):t!=null&&$t(n,!!l,t,!0);return;case"textarea":V("invalid",n),r=a=l=null;for(i in t)if(t.hasOwnProperty(i)&&(s=t[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":a=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:rn(n,e,i,s,t,null)}Ws(n,l,a,r);return;case"option":for(c in t)t.hasOwnProperty(c)&&(l=t[c],l!=null)&&(c==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":rn(n,e,c,l,t,null));return;case"dialog":V("beforetoggle",n),V("toggle",n),V("cancel",n),V("close",n);break;case"iframe":case"object":V("load",n);break;case"video":case"audio":for(l=0;l<ya.length;l++)V(ya[l],n);break;case"image":V("error",n),V("load",n);break;case"details":V("toggle",n);break;case"embed":case"source":case"link":V("error",n),V("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in t)if(t.hasOwnProperty(p)&&(l=t[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:rn(n,e,p,l,t,null)}return;default:if(yi(e)){for(v in t)t.hasOwnProperty(v)&&(l=t[v],l!==void 0&&ts(n,e,v,l,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null&&rn(n,e,s,l,t,null))}function Lh(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,i=null,s=null,c=null,p=null,v=null;for(g in t){var S=t[g];if(t.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=S;default:l.hasOwnProperty(g)||rn(n,e,g,null,l,S)}}for(var y in l){var g=l[y];if(S=t[y],l.hasOwnProperty(y)&&(g!=null||S!=null))switch(y){case"type":r=g;break;case"name":a=g;break;case"checked":p=g;break;case"defaultChecked":v=g;break;case"value":i=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,e));break;default:g!==S&&rn(n,e,y,g,l,S)}}hi(n,i,s,c,p,v,r,a);return;case"select":g=i=s=y=null;for(r in t)if(c=t[r],t.hasOwnProperty(r)&&c!=null)switch(r){case"value":break;case"multiple":g=c;default:l.hasOwnProperty(r)||rn(n,e,r,null,l,c)}for(a in l)if(r=l[a],c=t[a],l.hasOwnProperty(a)&&(r!=null||c!=null))switch(a){case"value":y=r;break;case"defaultValue":s=r;break;case"multiple":i=r;default:r!==c&&rn(n,e,a,r,l,c)}e=s,t=i,l=g,y!=null?$t(n,!!t,y,!1):!!l!=!!t&&(e!=null?$t(n,!!t,e,!0):$t(n,!!t,t?[]:"",!1));return;case"textarea":g=y=null;for(s in t)if(a=t[s],t.hasOwnProperty(s)&&a!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:rn(n,e,s,null,l,a)}for(i in l)if(a=l[i],r=t[i],l.hasOwnProperty(i)&&(a!=null||r!=null))switch(i){case"value":y=a;break;case"defaultValue":g=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(m(91));break;default:a!==r&&rn(n,e,i,a,l,r)}Js(n,y,g);return;case"option":for(var M in t)y=t[M],t.hasOwnProperty(M)&&y!=null&&!l.hasOwnProperty(M)&&(M==="selected"?n.selected=!1:rn(n,e,M,null,l,y));for(c in l)y=l[c],g=t[c],l.hasOwnProperty(c)&&y!==g&&(y!=null||g!=null)&&(c==="selected"?n.selected=y&&typeof y!="function"&&typeof y!="symbol":rn(n,e,c,y,l,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in t)y=t[C],t.hasOwnProperty(C)&&y!=null&&!l.hasOwnProperty(C)&&rn(n,e,C,null,l,y);for(p in l)if(y=l[p],g=t[p],l.hasOwnProperty(p)&&y!==g&&(y!=null||g!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:rn(n,e,p,y,l,g)}return;default:if(yi(e)){for(var un in t)y=t[un],t.hasOwnProperty(un)&&y!==void 0&&!l.hasOwnProperty(un)&&ts(n,e,un,void 0,l,y);for(v in l)y=l[v],g=t[v],!l.hasOwnProperty(v)||y===g||y===void 0&&g===void 0||ts(n,e,v,y,l,g);return}}for(var d in t)y=t[d],t.hasOwnProperty(d)&&y!=null&&!l.hasOwnProperty(d)&&rn(n,e,d,null,l,y);for(S in l)y=l[S],g=t[S],!l.hasOwnProperty(S)||y===g||y==null&&g==null||rn(n,e,S,y,l,g)}function nm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xh(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var a=t[l],r=a.transferSize,i=a.initiatorType,s=a.duration;if(r&&s&&nm(i)){for(i=0,s=a.responseEnd,l+=1;l<t.length;l++){var c=t[l],p=c.startTime;if(p>s)break;var v=c.transferSize,S=c.initiatorType;v&&nm(S)&&(c=c.responseEnd,i+=v*(c<s?1:(s-p)/(c-p)))}if(--l,e+=8*(r+i)/(a.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var ls=null,as=null;function Ur(n){return n.nodeType===9?n:n.ownerDocument}function em(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function rs(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var is=null;function kh(){var n=window.event;return n&&n.type==="popstate"?n===is?!1:(is=n,!0):(is=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,Vh=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,Zh=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(n){return am.resolve(null).then(n).catch(Kh)}:lm;function Kh(n){setTimeout(function(){throw n})}function gt(n){return n==="head"}function rm(n,e){var t=e,l=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(a),Ml(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")va(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,va(t);for(var r=t.firstChild;r;){var i=r.nextSibling,s=r.nodeName;r[Bl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=i}}else t==="body"&&va(n.ownerDocument.body);t=a}while(t);Ml(e)}function im(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function us(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":us(t),mi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Jh(n,e,t,l){for(;n.nodeType===1;){var a=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Bl])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=xe(n.nextSibling),n===null)break}return null}function Wh(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=xe(n.nextSibling),n===null))return null;return n}function um(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=xe(n.nextSibling),n===null))return null;return n}function ss(n){return n.data==="$?"||n.data==="$~"}function cs(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Fh(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function xe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var os=null;function sm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return xe(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function cm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function om(n,e,t){switch(e=Ur(t),n){case"html":if(n=e.documentElement,!n)throw Error(m(452));return n;case"head":if(n=e.head,!n)throw Error(m(453));return n;case"body":if(n=e.body,!n)throw Error(m(454));return n;default:throw Error(m(451))}}function va(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);mi(n)}var _e=new Map,fm=new Set;function Hr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Fe=E.d;E.d={f:$h,r:Ih,D:Ph,C:np,L:ep,m:tp,X:ap,S:lp,M:rp};function $h(){var n=Fe.f(),e=Tr();return n||e}function Ih(n){var e=Jt(n);e!==null&&e.tag===5&&e.type==="form"?No(e):Fe.r(n)}var Al=typeof document>"u"?null:document;function mm(n,e,t){var l=Al;if(l&&typeof e=="string"&&e){var a=de(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),fm.has(a)||(fm.add(a),n={rel:n,crossOrigin:t,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),Gn(e,"link",n),Un(e),l.head.appendChild(e)))}}function Ph(n){Fe.D(n),mm("dns-prefetch",n,null)}function np(n,e){Fe.C(n,e),mm("preconnect",n,e)}function ep(n,e,t){Fe.L(n,e,t);var l=Al;if(l&&n&&e){var a='link[rel="preload"][as="'+de(e)+'"]';e==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+de(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+de(t.imageSizes)+'"]')):a+='[href="'+de(n)+'"]';var r=a;switch(e){case"style":r=Nl(n);break;case"script":r=El(n)}_e.has(r)||(n=N({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),_e.set(r,n),l.querySelector(a)!==null||e==="style"&&l.querySelector(ba(r))||e==="script"&&l.querySelector(xa(r))||(e=l.createElement("link"),Gn(e,"link",n),Un(e),l.head.appendChild(e)))}}function tp(n,e){Fe.m(n,e);var t=Al;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+de(l)+'"][href="'+de(n)+'"]',r=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=El(n)}if(!_e.has(r)&&(n=N({rel:"modulepreload",href:n},e),_e.set(r,n),t.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(xa(r)))return}l=t.createElement("link"),Gn(l,"link",n),Un(l),t.head.appendChild(l)}}}function lp(n,e,t){Fe.S(n,e,t);var l=Al;if(l&&n){var a=Wt(l).hoistableStyles,r=Nl(n);e=e||"default";var i=a.get(r);if(!i){var s={loading:0,preload:null};if(i=l.querySelector(ba(r)))s.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":e},t),(t=_e.get(r))&&fs(n,t);var c=i=l.createElement("link");Un(c),Gn(c,"link",n),c._p=new Promise(function(p,v){c.onload=p,c.onerror=v}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Cr(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(r,i)}}}function ap(n,e){Fe.X(n,e);var t=Al;if(t&&n){var l=Wt(t).hoistableScripts,a=El(n),r=l.get(a);r||(r=t.querySelector(xa(a)),r||(n=N({src:n,async:!0},e),(e=_e.get(a))&&ms(n,e),r=t.createElement("script"),Un(r),Gn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function rp(n,e){Fe.M(n,e);var t=Al;if(t&&n){var l=Wt(t).hoistableScripts,a=El(n),r=l.get(a);r||(r=t.querySelector(xa(a)),r||(n=N({src:n,async:!0,type:"module"},e),(e=_e.get(a))&&ms(n,e),r=t.createElement("script"),Un(r),Gn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(a,r))}}function dm(n,e,t,l){var a=(a=$e.current)?Hr(a):null;if(!a)throw Error(m(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Nl(t.href),t=Wt(a).hoistableStyles,l=t.get(e),l||(l={type:"style",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Nl(t.href);var r=Wt(a).hoistableStyles,i=r.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,i),(r=a.querySelector(ba(n)))&&!r._p&&(i.instance=r,i.state.loading=5),_e.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},_e.set(n,t),r||ip(a,n,t,i.state))),e&&l===null)throw Error(m(528,""));return i}if(e&&l!==null)throw Error(m(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=El(t),t=Wt(a).hoistableScripts,l=t.get(e),l||(l={type:"script",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,n))}}function Nl(n){return'href="'+de(n)+'"'}function ba(n){return'link[rel="stylesheet"]['+n+"]"}function hm(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function ip(n,e,t,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Gn(e,"link",t),Un(e),n.head.appendChild(e))}function El(n){return'[src="'+de(n)+'"]'}function xa(n){return"script[async]"+n}function pm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+de(t.href)+'"]');if(l)return e.instance=l,Un(l),l;var a=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Un(l),Gn(l,"style",a),Cr(l,t.precedence,n),e.instance=l;case"stylesheet":a=Nl(t.href);var r=n.querySelector(ba(a));if(r)return e.state.loading|=4,e.instance=r,Un(r),r;l=hm(t),(a=_e.get(a))&&fs(l,a),r=(n.ownerDocument||n).createElement("link"),Un(r);var i=r;return i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),Gn(r,"link",l),e.state.loading|=4,Cr(r,t.precedence,n),e.instance=r;case"script":return r=El(t.src),(a=n.querySelector(xa(r)))?(e.instance=a,Un(a),a):(l=t,(a=_e.get(r))&&(l=N({},t),ms(l,a)),n=n.ownerDocument||n,a=n.createElement("script"),Un(a),Gn(a,"link",l),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Cr(l,t.precedence,n));return e.instance}function Cr(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,r=a,i=0;i<l.length;i++){var s=l[i];if(s.dataset.precedence===e)r=s;else if(r!==a)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function fs(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function ms(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Br=null;function ym(n,e,t){if(Br===null){var l=new Map,a=Br=new Map;a.set(t,l)}else a=Br,l=a.get(t),l||(l=new Map,a.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),a=0;a<t.length;a++){var r=t[a];if(!(r[Bl]||r[qn]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(e)||"";i=n+i;var s=l.get(i);s?s.push(r):l.set(i,[r])}}return l}function gm(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function up(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function vm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function sp(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Nl(l.href),r=e.querySelector(ba(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=qr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Un(r);return}r=e.ownerDocument||e,l=hm(l),(a=_e.get(a))&&fs(l,a),r=r.createElement("link"),Un(r);var i=r;i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),Gn(r,"link",l),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=qr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var ds=0;function cp(n,e){return n.stylesheets&&n.count===0&&Yr(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&Yr(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4+e);0<n.imgBytes&&ds===0&&(ds=62500*Xh());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Yr(n,n.stylesheets),n.unsuspend)){var r=n.unsuspend;n.unsuspend=null,r()}},(n.imgBytes>ds?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function qr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yr(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Rr=null;function Yr(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Rr=new Map,e.forEach(op,n),Rr=null,qr.call(n))}function op(n,e){if(!(e.state.loading&4)){var t=Rr.get(n);if(t)var l=t.get(null);else{t=new Map,Rr.set(n,t);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var i=a[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),l=i)}l&&t.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),r=t.get(i)||l,r===l&&t.set(null,a),t.set(i,a),this.count++,l=qr.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),r?r.parentNode.insertBefore(a,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var _a={$$typeof:nn,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function fp(n,e,t,l,a,r,i,s,c){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.hiddenUpdates=si(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function bm(n,e,t,l,a,r,i,s,c,p,v,S){return n=new fp(n,e,t,i,c,p,v,S,s),e=1,r===!0&&(e|=24),r=re(3,null,null,e),n.current=r,r.stateNode=n,e=Zi(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:l,isDehydrated:t,cache:e},Fi(r),n}function xm(n){return n?(n=rl,n):rl}function _m(n,e,t,l,a,r){a=xm(a),l.context===null?l.context=a:l.pendingContext=a,l=it(e),l.payload={element:t},r=r===void 0?null:r,r!==null&&(l.callback=r),t=ut(n,l,e),t!==null&&(ne(t,n,e),Pl(t,n,e))}function Sm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function hs(n,e){Sm(n,e),(n=n.alternate)&&Sm(n,e)}function jm(n){if(n.tag===13||n.tag===31){var e=Ot(n,67108864);e!==null&&ne(e,n,67108864),hs(n,67108864)}}function zm(n){if(n.tag===13||n.tag===31){var e=oe();e=ci(e);var t=Ot(n,e);t!==null&&ne(t,n,e),hs(n,e)}}var Qr=!0;function mp(n,e,t,l){var a=_.T;_.T=null;var r=E.p;try{E.p=2,ps(n,e,t,l)}finally{E.p=r,_.T=a}}function dp(n,e,t,l){var a=_.T;_.T=null;var r=E.p;try{E.p=8,ps(n,e,t,l)}finally{E.p=r,_.T=a}}function ps(n,e,t,l){if(Qr){var a=ys(l);if(a===null)es(n,e,l,Gr,t),Am(n,l);else if(pp(a,n,e,t,l))l.stopPropagation();else if(Am(n,l),e&4&&-1<hp.indexOf(n)){for(;a!==null;){var r=Jt(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Tt(r.pendingLanes);if(i!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var c=1<<31-le(i);s.entanglements[1]|=c,i&=~c}Oe(r),(P&6)===0&&(jr=ee()+500,pa(0))}}break;case 31:case 13:s=Ot(r,2),s!==null&&ne(s,r,2),Tr(),hs(r,2)}if(r=ys(l),r===null&&es(n,e,l,Gr,t),r===a)break;a=r}a!==null&&l.stopPropagation()}else es(n,e,l,null,t)}}function ys(n){return n=vi(n),gs(n)}var Gr=null;function gs(n){if(Gr=null,n=Kt(n),n!==null){var e=T(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=D(e),n!==null)return n;n=null}else if(t===31){if(n=R(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Gr=n,null}function Tm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pm()){case ws:return 2;case Ds:return 8;case Oa:case nd:return 32;case Us:return 268435456;default:return 32}default:return 32}}var vs=!1,vt=null,bt=null,xt=null,Sa=new Map,ja=new Map,_t=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(n,e){switch(n){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function za(n,e,t,l,a,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Jt(e),e!==null&&jm(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function pp(n,e,t,l,a){switch(e){case"focusin":return vt=za(vt,n,e,t,l,a),!0;case"dragenter":return bt=za(bt,n,e,t,l,a),!0;case"mouseover":return xt=za(xt,n,e,t,l,a),!0;case"pointerover":var r=a.pointerId;return Sa.set(r,za(Sa.get(r)||null,n,e,t,l,a)),!0;case"gotpointercapture":return r=a.pointerId,ja.set(r,za(ja.get(r)||null,n,e,t,l,a)),!0}return!1}function Nm(n){var e=Kt(n.target);if(e!==null){var t=T(e);if(t!==null){if(e=t.tag,e===13){if(e=D(t),e!==null){n.blockedOn=e,Ys(n.priority,function(){zm(t)});return}}else if(e===31){if(e=R(t),e!==null){n.blockedOn=e,Ys(n.priority,function(){zm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ys(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);gi=l,t.target.dispatchEvent(l),gi=null}else return e=Jt(t),e!==null&&jm(e),n.blockedOn=t,!1;e.shift()}return!0}function Em(n,e,t){Lr(n)&&t.delete(e)}function yp(){vs=!1,vt!==null&&Lr(vt)&&(vt=null),bt!==null&&Lr(bt)&&(bt=null),xt!==null&&Lr(xt)&&(xt=null),Sa.forEach(Em),ja.forEach(Em)}function Xr(n,e){n.blockedOn===e&&(n.blockedOn=null,vs||(vs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yp)))}var kr=null;function Mm(n){kr!==n&&(kr=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kr===n&&(kr=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],a=n[e+2];if(typeof l!="function"){if(gs(l||t)===null)continue;break}var r=Jt(t);r!==null&&(n.splice(e,3),e-=3,yu(r,{pending:!0,data:a,method:t.method,action:l},l,a))}}))}function Ml(n){function e(c){return Xr(c,n)}vt!==null&&Xr(vt,n),bt!==null&&Xr(bt,n),xt!==null&&Xr(xt,n),Sa.forEach(e),ja.forEach(e);for(var t=0;t<_t.length;t++){var l=_t[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<_t.length&&(t=_t[0],t.blockedOn===null);)Nm(t),t.blockedOn===null&&_t.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var a=t[l],r=t[l+1],i=a[Jn]||null;if(typeof r=="function")i||Mm(t);else if(i){var s=null;if(r&&r.hasAttribute("formAction")){if(a=r,i=r[Jn]||null)s=i.formAction;else if(gs(a)!==null)continue}else s=i.action;typeof s=="function"?t[l+1]=s:(t.splice(l,3),l-=3),Mm(t)}}}function Om(){function n(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function bs(n){this._internalRoot=n}Vr.prototype.render=bs.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(m(409));var t=e.current,l=oe();_m(t,l,n,e,null,null)},Vr.prototype.unmount=bs.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;_m(n.current,2,null,n,null,null),Tr(),e[Zt]=null}};function Vr(n){this._internalRoot=n}Vr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Rs();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_t.length&&e!==0&&e<_t[t].priority;t++);_t.splice(t,0,n),t===0&&Nm(n)}};var wm=z.version;if(wm!=="19.2.4")throw Error(m(527,wm,"19.2.4"));E.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(m(188)):(n=Object.keys(n).join(","),Error(m(268,n)));return n=H(e),n=n!==null?Z(n):null,n=n===null?null:n.stateNode,n};var gp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Ul=Zr.inject(gp),te=Zr}catch{}}return Ta.createRoot=function(n,e){if(!j(n))throw Error(m(299));var t=!1,l="",a=qo,r=Ro,i=Yo;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bm(n,1,!1,null,null,t,l,null,a,r,i,Om),n[Zt]=e.current,ns(n),new bs(e)},Ta.hydrateRoot=function(n,e,t){if(!j(n))throw Error(m(299));var l=!1,a="",r=qo,i=Ro,s=Yo,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),e=bm(n,1,!0,e,t??null,l,a,c,r,i,s,Om),e.context=xm(null),t=e.current,l=oe(),l=ci(l),a=it(l),a.callback=null,ut(t,a,l),t=l,e.current.lanes=t,Cl(e,t),Oe(e),n[Zt]=e.current,ns(n),new Vr(e)},Ta.version="19.2.4",Ta}var Rm;function Lp(){if(Rm)return xs.exports;Rm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(z){console.error(z)}}return o(),xs.exports=Gp(),xs.exports}var Xp=Lp();const kp={siteTitle:"Aitenry · 写代码，也写生活",navigation:{home:"首页",diaries:"日记",articles:"文章",photos:"相册",reading:"书单",tools:"工具箱",search:"搜索",typeToSearch:"输入关键词，搜索文章与日记…",startTypingToSearch:"开始输入以搜索",noArticlesFound:"没有找到相关内容",tryADifferentSearchTerm:"换个关键词试试",toggleTheme:"切换主题",skip:"跳到主内容",kbdHint:"↑↓ 选择 · ⏎ 打开 · ESC 关闭"},notFound:{title:"页面不存在",desc:"你访问的页面不存在或已被移除。",back:"返回首页"},common:{back:"返回",copy:"复制",copied:"已复制",copyCode:"复制代码",publishedOn:"发布于",words:"字",minRead:"分钟",backToArticles:"返回文章",backToDiaries:"返回日记",readMore:"阅读全文",readDiary:"阅读日记",backToTop:"回到顶部",prev:"上一篇",next:"下一篇",tableOfContents:"目录",all:"全部",reading:"阅读进度"},articleNotFound:{title:"文章不存在",desc:"这篇文章可能已被移除，或链接有误。",back:"返回文章"},diaryNotFound:{title:"日记不存在",desc:"这篇日记可能已被移除，或链接有误。",back:"返回日记"},home:{headline1:"写代码，",headline2:"也写生活",roles:"全栈开发者 · 产品设计师 · 开源贡献者",nowPrefix:"现在：正在构建",nowTarget:"RytenBench",ctaArticles:"阅读文章",ctaProjects:"查看项目",statsArticles:"篇文章",statsDiaries:"篇日记",statsProjects:"开源项目",statsSkills:"项技术栈",scroll:"向下滚动",marquee:["全栈开发","AI 应用","开源","TypeScript","Java","Vue","写作","设计","阅读","折腾","咖啡","凌晨"]},about:{eyebrow:"关于",title:"关于我",meta:["坐标 · 中国","状态 · 持续构建中","现在 · RytenBench"],desc1:"我是一名专注于 AI 与 Web 技术融合的开发者，正在构建智能系统与 AI 驱动的应用。相信技术能创造更美好的未来，也相信代码之外还有生活。",desc2:"热衷探索技术前沿，关注 AI 在信息管理领域的落地。注重代码质量与用户体验，追求简单而高效的解决方案——这也是我写每一行代码的标准。",quote:"衡量生命的尺度是思想和行为，而不是时间。",tags:["AI 应用","Web 全栈","开源","设计"]},skills:{eyebrow:"技术栈",title:"技术栈"},projects:{eyebrow:"项目",title:"开源项目",iimsDescription:"AI 驱动的智能信息管理平台（已被收购）",rytenDescription:"轻量级个人 AI 工作台",viewProject:"查看项目",statusActive:"开发中",statusAcquired:"已收购 · 停止更新"},articles:{eyebrow:"文章",title:"文章",total:"篇"},diaries:{eyebrow:"日记",title:"日记",total:"篇"},photos:{eyebrow:"相册",title:"照片",total:"张",all:"全部",travel:"旅行",pet:"宠物",lightbox:"照片查看器",close:"关闭",prev:"上一张",next:"下一张",kbdHint:"← → 切换 · ESC 关闭",featured:"精选",autoplayHint:"悬停暂停 · 点击查看",viewHint:"查看大图",statPhotos:"张照片",statSeries:"个系列",statShotOn:"拍摄于"},reading:{eyebrow:"书单",title:"在读的书",total:"本",statusReading:"在读",statusRead:"已读",statusWant:"想读"},tools:{eyebrow:"工具箱",title:"常用工具",total:"件",visit:"访问"},footer:{eyebrow:"未完待续",closing:"保持好奇，继续折腾。",rights:"保留所有权利"}},Vp={siteTitle:"Aitenry · Write code, live a life",navigation:{home:"Home",diaries:"Diaries",articles:"Articles",photos:"Photos",reading:"Reading",tools:"Toolbox",search:"Search",typeToSearch:"Search articles & diaries…",startTypingToSearch:"Start typing to search",noArticlesFound:"Nothing found",tryADifferentSearchTerm:"Try another keyword",toggleTheme:"Toggle theme",skip:"Skip to content",kbdHint:"↑↓ navigate · ⏎ open · ESC close"},notFound:{title:"Page not found",desc:"The page you are looking for does not exist or has been removed.",back:"Back to Home"},common:{back:"Back",copy:"Copy",copied:"Copied",copyCode:"Copy code",publishedOn:"Published on",words:"words",minRead:"min",backToArticles:"Back to Articles",backToDiaries:"Back to Diaries",readMore:"Read more",readDiary:"Read diary",backToTop:"Back to top",prev:"Previous",next:"Next",tableOfContents:"Contents",all:"All",reading:"Reading"},articleNotFound:{title:"Article not found",desc:"This article may have been removed, or the link is broken.",back:"Back to Articles"},diaryNotFound:{title:"Diary not found",desc:"This diary may have been removed, or the link is broken.",back:"Back to Diaries"},home:{headline1:"Write code,",headline2:"live a life",roles:"Full-Stack Developer · Product Designer · Open-Source Contributor",nowPrefix:"NOW: Building",nowTarget:"RytenBench",ctaArticles:"Read Articles",ctaProjects:"View Projects",statsArticles:"Articles",statsDiaries:"Diaries",statsProjects:"Projects",statsSkills:"Skills",scroll:"Scroll",marquee:["FULL-STACK","AI APPS","OPEN SOURCE","TYPESCRIPT","JAVA","VUE","WRITING","DESIGN","READING","HACKING","COFFEE","MIDNIGHT"]},about:{eyebrow:"About",title:"About Me",meta:["Location · China","Status · Building","Now · RytenBench"],desc1:"A developer focused on blending AI with the web, building intelligent systems and AI-powered applications. I believe technology can create a better future — and that there is more to life than code.",desc2:"I explore the technical frontier, especially how AI lands in information management. I care about code quality and user experience, always chasing simple yet efficient solutions.",quote:"Life is measured by thought and action, not by time.",tags:["AI Apps","Web Full-Stack","Open Source","Design"]},skills:{eyebrow:"Stack",title:"Tech Stack"},projects:{eyebrow:"Projects",title:"Open Source",iimsDescription:"AI-powered intelligent information management platform (acquired)",rytenDescription:"Lightweight personal AI workbench",viewProject:"View project",statusActive:"Active",statusAcquired:"Acquired"},articles:{eyebrow:"Articles",title:"Articles",total:"TOTAL"},diaries:{eyebrow:"Diaries",title:"Diaries",total:"TOTAL"},photos:{eyebrow:"Gallery",title:"Photos",total:"PHOTOS",all:"All",travel:"Travel",pet:"Pets",lightbox:"Photo viewer",close:"Close",prev:"Previous",next:"Next",kbdHint:"← → navigate · ESC close",featured:"Featured",autoplayHint:"Hover to pause · Click to view",viewHint:"View Large",statPhotos:"PHOTOS",statSeries:"SERIES",statShotOn:"SHOT ON"},reading:{eyebrow:"Reading",title:"Reading List",total:"BOOKS",statusReading:"Reading",statusRead:"Read",statusWant:"To Read"},tools:{eyebrow:"Toolbox",title:"Toolbox",total:"TOOLS",visit:"Visit"},footer:{eyebrow:"TO BE CONTINUED",closing:"Stay curious, keep building.",rights:"All rights reserved"}},Zp=()=>(navigator.language||navigator.userLanguage||"zh").startsWith("zh")?"zh":"en";Sp.use(jp).init({resources:{zh:{translation:kp},en:{translation:Vp}},lng:Zp(),fallbackLng:"zh",interpolation:{escapeValue:!1}});const Kp="modulepreload",Jp=function(o){return"/"+o},Ym={},Zm=function(z,x,m){let j=Promise.resolve();if(x&&x.length>0){let Y=function(H){return Promise.all(H.map(Z=>Promise.resolve(Z).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const D=document.querySelector("meta[property=csp-nonce]"),R=D?.nonce||D?.getAttribute("nonce");j=Y(x.map(H=>{if(H=Jp(H),H in Ym)return;Ym[H]=!0;const Z=H.endsWith(".css"),N=Z?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${H}"]${N}`))return;const A=document.createElement("link");if(A.rel=Z?"stylesheet":Kp,Z||(A.as="script"),A.crossOrigin="",A.href=H,R&&A.setAttribute("nonce",R),document.head.appendChild(A),Z)return new Promise((I,cn)=>{A.addEventListener("load",I),A.addEventListener("error",()=>cn(new Error(`Unable to preload CSS for ${H}`)))})}))}function T(D){const R=new Event("vite:preloadError",{cancelable:!0});if(R.payload=D,window.dispatchEvent(R),!R.defaultPrevented)throw D}return j.then(D=>{for(const R of D||[])R.status==="rejected"&&T(R.reason);return z().catch(T)})},Wp='## 分支命名前缀及含义\r\n\r\n| 前缀          | 全称            | 用途             | 示例                                              |\r\n|-------------|---------------|----------------|-------------------------------------------------|\r\n| `feat/`     | feature       | 新功能开发          | `feat/user-auth`, `feat/payment-gateway`        |\r\n| `fix/`      | fix           | Bug 修复         | `fix/login-error`, `fix/null-pointer`           |\r\n| `release/`  | release       | 版本发布准备         | `release/v2.1.0`, `release/2024-q1`             |\r\n| `hotfix/`   | hotfix        | 紧急线上修复         | `hotfix/prod-crash`, `hotfix/security-patch`    |\r\n| `refactor/` | refactor      | 代码重构（不改功能）     | `refactor/api-client`, `refactor/db-layer`      |\r\n| `style/`    | style         | 代码格式调整（空格、分号等） | `style/lint-fix`, `style/format-code`           |\r\n| `docs/`     | documentation | 文档更新           | `docs/readme-update`, `docs/api-docs`           |\r\n| `test/`     | test          | 测试相关           | `test/unit-tests`, `test/e2e-coverage`          |\r\n| `chore/`    | chore         | 构建/工具/依赖更新     | `chore/upgrade-deps`, `chore/ci-config`         |\r\n| `perf/`     | performance   | 性能优化           | `perf/query-optimization`, `perf/image-loading` |\r\n| `ci/`       | ci/cd         | CI/CD 配置       | `ci/github-actions`, `ci/deployment-pipeline`   |\r\n| `build/`    | build         | 构建系统/编译相关      | `build/webpack-config`, `build/dockerfile`      |\r\n\r\n---\r\n\r\n## 实际工作流示例\r\n\r\n### 开发新功能（Jira 集成）\r\n\r\n```bash\r\n# 1. 同步主干\r\ngit checkout main && git pull\r\n\r\n# 2. 创建分支（含任务 ID）\r\ngit checkout -b feat/PROJ-456-add-search-bar\r\n\r\n# 3. 开发并提交（提交信息也用相同规范）\r\ngit commit -m "feat(search): add keyword search bar"\r\ngit commit -m "test(search): add unit tests for search"\r\n\r\n# 4. 推送并创建 PR\r\ngit push -u origin feat/PROJ-456-add-search-bar\r\n# → GitHub/GitLab 会自动识别类型并打标签\r\n```\r\n\r\n### 紧急线上修复\r\n\r\n```bash\r\ngit checkout main && git pull\r\ngit checkout -b fix/PROJ-789-payment-failure\r\n\r\n# 修复后提交\r\ngit commit -m "fix(payment): handle null response from gateway"\r\n\r\n# PR 到 main，快速审批合并\r\ngit push origin fix/PROJ-789-payment-failure\r\n```\r\n\r\n### 准备发布\r\n\r\n```bash\r\n# 从 main 创建发布分支\r\ngit checkout main && git pull\r\ngit checkout -b release/v2.1.0\r\n\r\n# 进行最后测试、更新版本号、CHANGELOG\r\ngit commit -m "chore(release): bump version to 2.1.0"\r\ngit commit -m "docs(changelog): update for v2.1.0"\r\n\r\n# 合并到 main 并打 Tag\r\ngit checkout main\r\ngit merge --no-ff release/v2.1.0\r\ngit tag -a v2.1.0 -m "Release v2.1.0"\r\ngit push origin main --tags\r\n\r\n# （可选）合并到 develop（如果使用 Git Flow）\r\n```\r\n\r\n---',Fp=`## #规范代码格式\r
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
`,Ol=[{id:"1",title:"Python 编程指南",date:"2024-03-15",excerpt:"Python 基础语法和编程技巧指南。",content:Fp,tags:["Python","Programming","Beginner"]},{id:"2",title:"Git 分支命名规则",date:"2024-03-10",excerpt:"规范化的 Git 分支命名规范和最佳实践。",content:Wp,tags:["Git","Version Control","Best Practices"]}],$p=`<div style="text-align: center;">\r
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
`,Ip=`<div style="text-align: center;">\r
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
`,Pp=`Intelligent Information Management System (IIMS) - AI驱动的智能信息管理平台。\r
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
`,ny=`## 个人 AI 工作台\r
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
`,wl=[{id:"1",title:"RytenBench",date:"2026-02-17",weather:"多云",mood:"思考",excerpt:"发布下一个项目的规划与定位！",content:ny,tags:["项目","AI","工具","工作区"]},{id:"2",title:"IIMS-By-AI v0.1.0",date:"2026-01-31",weather:"晴",mood:"激动",excerpt:"今天终于完成了 IIMS-By-AI 项目的第一个版本！",content:Pp,tags:["项目","AI","智能系统","IIMS"]},{id:"3",title:"题记-2020.12.28.夜",date:"2020-12-28",weather:"夜",mood:"别离",excerpt:"别离 - 亭院门前叶纷飞，落日西下人憔悴。",content:Ip,tags:["诗","别离","感悟"]},{id:"4",title:"题记-2020.6.12.夜",date:"2020-06-12",weather:"夜",mood:"感伤",excerpt:"忆思首 - 吾坐台前思旧事，月光透雾照台前。",content:$p,tags:["诗","感悟","生活"]}],Qm=["home","diaries","articles","photos","reading","tools"],ey=({activeSection:o,isDarkMode:z,onToggleTheme:x,handleNavClick:m})=>{const{t:j}=zn(),T=Pr(),[D,R]=G.useState(!1),[Y,H]=G.useState(!1),[Z,N]=G.useState(""),[A,I]=G.useState(!1),[cn,on]=G.useState(0),_n=G.useRef(null),kn=G.useRef(null),{scrollY:fe}=Es();Vm(fe,"change",O=>R(O>24)),G.useEffect(()=>(document.body.style.overflow=Y||A?"hidden":"",()=>{document.body.style.overflow=""}),[Y,A]),G.useEffect(()=>{const O=L=>{(L.metaKey||L.ctrlKey)&&L.key.toLowerCase()==="k"&&(L.preventDefault(),H(vn=>!vn))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]),G.useEffect(()=>{if(Y){const O=setTimeout(()=>_n.current?.focus(),60);return()=>clearTimeout(O)}},[Y]);const nn=Z.trim().toLowerCase(),Cn=nn?Ol.filter(O=>O.title.toLowerCase().includes(nn)||O.excerpt.toLowerCase().includes(nn)||O.tags.some(L=>L.toLowerCase().includes(nn))):[],X=nn?wl.filter(O=>O.title.toLowerCase().includes(nn)||O.excerpt.toLowerCase().includes(nn)||O.tags.some(L=>L.toLowerCase().includes(nn))):[],Bn=[...X.map(O=>({to:`/diary/${O.id}`,title:O.title,excerpt:O.excerpt})),...Cn.map(O=>({to:`/article/${O.id}`,title:O.title,excerpt:O.excerpt}))],Ln=G.useRef(Bn),On=G.useRef(cn);G.useEffect(()=>{Ln.current=Bn}),G.useEffect(()=>{On.current=cn}),G.useEffect(()=>{if(!Y)return;const O=L=>{if(L.key==="Escape"){H(!1);return}const vn=Ln.current;if(vn.length!==0){if(L.key==="ArrowDown")L.preventDefault(),on(wn=>Math.min(wn+1,vn.length-1));else if(L.key==="ArrowUp")L.preventDefault(),on(wn=>Math.max(wn-1,0));else if(L.key==="Enter"){L.preventDefault();const wn=vn[On.current];wn&&(H(!1),N(""),T(wn.to))}}};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[Y,T]),G.useEffect(()=>{kn.current?.scrollIntoView({block:"nearest"})},[cn]);const Xn="flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)] cursor-pointer",we=()=>nn?X.length===0&&Cn.length===0?u.jsxs("div",{className:"py-14 text-center",children:[u.jsx("p",{className:"text-sm font-medium",children:j("navigation.noArticlesFound")}),u.jsx("p",{className:"mt-1 eyebrow text-mute",children:j("navigation.tryADifferentSearchTerm")})]}):u.jsxs("div",{className:"space-y-6",children:[X.length>0&&u.jsxs("div",{children:[u.jsx("h4",{className:"eyebrow mb-1 px-1 text-mute",children:j("navigation.diaries")}),u.jsx("div",{className:"h-rule"}),X.map((O,L)=>{const vn=L===cn;return u.jsxs(jt,{prefetch:"intent",to:`/diary/${O.id}`,ref:vn?wn=>{kn.current=wn}:void 0,onClick:()=>{H(!1),N("")},className:`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${vn?"bg-soft":""}`,children:[u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:`truncate font-display text-base font-medium ${vn?"text-[var(--accent)]":""}`,children:O.title}),u.jsx("p",{className:"mt-0.5 line-clamp-1 text-xs text-mute",children:O.excerpt})]}),u.jsx(Ts,{size:16,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"})]},`d-${O.id}`)})]}),Cn.length>0&&u.jsxs("div",{children:[u.jsx("h4",{className:"eyebrow mb-1 px-1 text-mute",children:j("navigation.articles")}),u.jsx("div",{className:"h-rule"}),Cn.map((O,L)=>{const vn=X.length+L===cn;return u.jsxs(jt,{prefetch:"intent",to:`/article/${O.id}`,ref:vn?wn=>{kn.current=wn}:void 0,onClick:()=>{H(!1),N("")},className:`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${vn?"bg-soft":""}`,children:[u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:`truncate font-display text-base font-medium ${vn?"text-[var(--accent)]":""}`,children:O.title}),u.jsx("p",{className:"mt-0.5 line-clamp-1 text-xs text-mute",children:O.excerpt})]}),u.jsx(Ts,{size:16,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"})]},`a-${O.id}`)})]})]}):u.jsx("div",{className:"py-14 text-center eyebrow text-mute",children:j("navigation.startTypingToSearch")});return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${D?"border-b border-line bg-[var(--paper)]/90 backdrop-blur-md":"border-b border-transparent"}`,children:u.jsxs("nav",{className:"mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8",children:[u.jsxs(jt,{to:"/home",onClick:O=>m(O,"home"),className:"font-display text-xl font-semibold tracking-tight transition-colors duration-200 hover:text-[var(--accent)]",children:["Aitenry",u.jsx("span",{className:"text-accent",children:"."})]}),u.jsx("div",{className:"hidden items-center gap-5 md:flex lg:gap-7",children:Qm.map((O,L)=>{const vn=o===O;return u.jsxs(jt,{to:`/${O}`,onClick:wn=>m(wn,O),className:`eyebrow link-underline transition-colors duration-200 ${vn?"text-accent":"text-mute hover:text-ink"}`,children:[u.jsxs("span",{className:"mr-1 opacity-60",children:["0",L+1]}),j(`navigation.${O}`)]},O)})}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>H(!0),"aria-label":j("navigation.search"),className:Xn,children:u.jsx(wp,{size:16})}),u.jsx("button",{onClick:x,"aria-label":j("navigation.toggleTheme"),className:`${Xn} hidden sm:flex`,children:z?u.jsx(Um,{size:16}):u.jsx(Hm,{size:16})}),u.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:`${Xn} hidden lg:flex`,children:u.jsx($r,{size:16})}),u.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:`${Xn} hidden lg:flex`,children:u.jsx(zs,{size:16})}),u.jsx("button",{onClick:()=>I(O=>!O),"aria-label":"menu",className:`${Xn} md:hidden`,children:A?u.jsx(Wr,{size:17}):u.jsx(Dp,{size:17})})]})]})}),u.jsx(Fr,{children:A&&u.jsxs(Kn.div,{initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.25,ease:"easeOut"},className:"fixed inset-0 z-50 bg-[var(--paper)] md:hidden",children:[u.jsx("button",{onClick:()=>I(!1),"aria-label":"close menu",className:"absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",children:u.jsx(Wr,{size:17})}),u.jsxs("div",{className:"flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24",children:[Qm.map((O,L)=>u.jsx(Kn.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.06*L,duration:.35},className:"border-b border-line",children:u.jsxs(jt,{to:`/${O}`,onClick:vn=>{m(vn,O),I(!1)},className:"flex items-baseline gap-4 py-5",children:[u.jsxs("span",{className:"eyebrow text-accent",children:["0",L+1]}),u.jsx("span",{className:"font-display text-4xl font-semibold",children:j(`navigation.${O}`)})]})},O)),u.jsxs(Kn.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25},className:"mt-auto flex items-center justify-between",children:[u.jsxs("div",{className:"flex gap-3",children:[u.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:u.jsx($r,{size:19})}),u.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:u.jsx(zs,{size:19})})]}),u.jsxs("button",{onClick:x,className:"eyebrow flex h-11 items-center gap-2 border border-line px-4 text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:[z?u.jsx(Um,{size:16}):u.jsx(Hm,{size:16}),j("navigation.toggleTheme")]})]})]})]})}),u.jsx(Fr,{children:Y&&u.jsx(Kn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},className:"fixed inset-0 z-50 bg-[var(--paper)]/70 backdrop-blur-sm",onClick:()=>H(!1),children:u.jsxs(Kn.div,{initial:{opacity:0,y:-14},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.25,ease:"easeOut"},className:"mx-auto mt-24 w-[calc(100%-2rem)] max-w-2xl border border-line bg-[var(--paper)] p-6 shadow-[8px_8px_0_0_var(--ink)] sm:p-8",onClick:O=>O.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"eyebrow text-accent",children:j("navigation.search")}),u.jsx("button",{onClick:()=>H(!1),"aria-label":"close",className:"flex h-8 w-8 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",children:u.jsx(Wr,{size:16})})]}),u.jsxs("div",{className:"mt-5 flex items-center gap-3 border-b-2 border-[var(--ink)] pb-3",children:[u.jsx(Up,{size:18,className:"text-mute"}),u.jsx("input",{ref:_n,type:"text",value:Z,onChange:O=>{N(O.target.value),on(0)},placeholder:j("navigation.typeToSearch"),className:"h-9 flex-1 bg-transparent font-mono text-base text-ink placeholder:text-mute focus:outline-none"}),u.jsx("kbd",{className:"hidden border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mute sm:block",children:"esc"})]}),u.jsx("div",{className:"nice-scroll mt-4 max-h-[52vh] overflow-y-auto",children:we()}),u.jsx("p",{className:"eyebrow mt-4 border-t border-line pt-3 text-mute",children:j("navigation.kbdHint")})]})})})]})},ty=({scaleX:o})=>u.jsx(Kn.div,{className:"fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[var(--accent)]",style:{scaleX:o},"aria-hidden":!0}),ly=["home","diaries","articles","photos","reading","tools"],ay=()=>{const{t:o}=zn(),z=new Date().getFullYear();return u.jsxs("footer",{className:"relative z-10 border-t border-line",children:[u.jsx("div",{className:"mx-auto max-w-6xl px-4 py-20 sm:px-6 md:px-8",children:u.jsxs("div",{className:"flex flex-col justify-between gap-10 md:flex-row md:items-end",children:[u.jsxs("div",{children:[u.jsxs("p",{className:"eyebrow text-accent",children:["/ ",o("footer.eyebrow")]}),u.jsx("h2",{className:"mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl",children:o("footer.closing")})]}),u.jsxs("div",{className:"flex flex-col gap-4 md:items-end",children:[u.jsxs("div",{className:"flex gap-3",children:[u.jsx("a",{href:"https://github.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:u.jsx($r,{size:19})}),u.jsx("a",{href:"https://gitee.com/Aitenry",target:"_blank",rel:"noopener noreferrer","aria-label":"Gitee",className:"flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:u.jsx(zs,{size:19})})]}),u.jsx("nav",{className:"flex max-w-xs flex-wrap gap-x-6 gap-y-2 md:max-w-none md:justify-end",children:ly.map(x=>u.jsx(jt,{to:`/${x}`,className:"eyebrow link-underline text-mute transition-colors hover:text-ink",children:o(`navigation.${x}`)},x))})]})]})}),u.jsx("div",{className:"border-t border-line",children:u.jsx("div",{className:"mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 md:px-8",children:u.jsxs("p",{className:"eyebrow text-mute",children:["© ",z," Aitenry · ",o("footer.rights")]})})})]})},ry=()=>{const{t:o}=zn(),[z,x]=G.useState(!1),{scrollY:m}=Es();return Vm(m,"change",j=>x(j>480)),u.jsx(Fr,{children:z&&u.jsx(Kn.button,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:12},transition:{duration:.2},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":o("common.backToTop"),title:o("common.backToTop"),className:"fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-[var(--paper)] text-ink transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:u.jsx(Hp,{size:17})})})},iy=()=>u.jsx("div",{"aria-hidden":!0,className:"noise"}),uy=({quantity:o=80,color:z=[.106,.098,.082],size:x=1.5,className:m=""})=>{const j=G.useRef(null);return G.useEffect(()=>{const T=j.current;if(!T)return;const D=T.getContext("2d");if(!D)return;const R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Y=Math.min(window.devicePixelRatio||1,2),H={x:-9999,y:-9999};let Z=0,N=0,A=0;const I=[],cn=()=>{Z=window.innerWidth,N=window.innerHeight,T.width=Z*Y,T.height=N*Y,T.style.width=`${Z}px`,T.style.height=`${N}px`,D.setTransform(Y,0,0,Y,0,0)},on=()=>{I.length=0;for(let nn=0;nn<o;nn++)I.push({x:Math.random()*Z,y:Math.random()*N,vx:(Math.random()-.5)*.22,vy:-(Math.random()*.18+.04),size:Math.random()*x+x*.4,alpha:Math.random()*.22+.1,pushX:0,pushY:0})},_n=()=>{D.clearRect(0,0,Z,N);const nn=`${Math.round(z[0]*255)}, ${Math.round(z[1]*255)}, ${Math.round(z[2]*255)}`,Cn=130;for(const X of I){const Bn=X.x-H.x,Ln=X.y-H.y,On=Bn*Bn+Ln*Ln;if(On<Cn*Cn&&On>.01){const Xn=Math.sqrt(On),we=(1-Xn/Cn)*.6;X.pushX+=Bn/Xn*we,X.pushY+=Ln/Xn*we}X.pushX*=.88,X.pushY*=.88,R||(X.x+=X.vx+X.pushX*.35,X.y+=X.vy+X.pushY*.35),X.y<-10&&(X.y=N+10,X.x=Math.random()*Z),X.x<-10&&(X.x=Z+10),X.x>Z+10&&(X.x=-10),D.beginPath(),D.arc(X.x,X.y,X.size,0,Math.PI*2),D.fillStyle=`rgba(${nn}, ${X.alpha})`,D.fill()}A=requestAnimationFrame(_n)},kn=nn=>{H.x=nn.clientX,H.y=nn.clientY},fe=()=>{document.hidden?cancelAnimationFrame(A):A=requestAnimationFrame(_n)};return cn(),on(),R?(_n(),cancelAnimationFrame(A)):A=requestAnimationFrame(_n),window.addEventListener("resize",cn),window.addEventListener("mousemove",kn),document.addEventListener("visibilitychange",fe),()=>{cancelAnimationFrame(A),window.removeEventListener("resize",cn),window.removeEventListener("mousemove",kn),document.removeEventListener("visibilitychange",fe)}},[o,z,x]),u.jsx("canvas",{ref:j,"aria-hidden":!0,className:`pointer-events-none fixed inset-0 ${m}`})},As=({value:o,duration:z=1.4,suffix:x="",className:m=""})=>{const j=G.useRef(null),T=bp(j,{once:!0,margin:"-40px"}),[D,R]=G.useState(0);return G.useEffect(()=>{if(!T)return;const Y=xp(0,o,{duration:z,ease:"easeOut",onUpdate:H=>R(H)});return()=>Y.stop()},[T,o,z]),u.jsxs("span",{ref:j,className:`font-mono tabular-nums ${m}`,children:[String(Math.round(D)).padStart(2,"0"),x]})},Ir=[.16,1,.3,1],pn=({children:o,delay:z=0,y:x=18,className:m=""})=>u.jsx(Kn.div,{initial:{opacity:0,y:x},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:z,ease:Ir},className:m,children:o}),Km=[{id:1,title:"RytenBench",descriptionKey:"projects.rytenDescription",tech:["Electron","React","TypeScript","AI"],imageLight:"/ryten-light.svg",imageDark:"/ryten-dark.svg",github:"https://github.com/Aitenry/RytenBench",status:"active"},{id:2,title:"IIMS-By-AI",descriptionKey:"projects.iimsDescription",tech:["Java","Vue","SpringBoot","TypeScript","AI"],imageLight:"/iims-light.svg",imageDark:"/iims-dark.svg",github:"https://github.com/Aitenry/IIMS-By-AI",status:"acquired"}],Jm=[{name:"Java",level:90},{name:"Vue",level:79},{name:"JavaScript",level:79},{name:"TypeScript",level:73},{name:"React",level:72},{name:"Electron",level:70}],sy=()=>{const{t:o}=zn(),z=Pr(),x=[{value:Ol.length,label:o("home.statsArticles")},{value:wl.length,label:o("home.statsDiaries")},{value:Km.length,label:o("home.statsProjects")},{value:Jm.length,label:o("home.statsSkills")}];return u.jsx("section",{id:"home",className:"relative flex min-h-[calc(100svh-4rem)] flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-8",children:u.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[u.jsxs("h1",{className:"font-display text-[13vw] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl",children:[u.jsx("span",{className:"block overflow-hidden pb-1",children:u.jsx(Kn.span,{initial:{y:"110%"},animate:{y:0},transition:{duration:.8,ease:Ir},className:"block",children:o("home.headline1")})}),u.jsx("span",{className:"block overflow-hidden pb-2",children:u.jsxs(Kn.span,{initial:{y:"110%"},animate:{y:0},transition:{duration:.8,delay:.12,ease:Ir},className:"block italic",children:[o("home.headline2"),u.jsx("span",{className:"text-accent not-italic",children:"。"})]})})]}),u.jsx(pn,{delay:.3,children:u.jsx("p",{className:"mt-6 font-mono text-sm text-mute sm:text-base",children:o("home.roles")})}),u.jsx(pn,{delay:.38,children:u.jsxs("p",{className:"mt-3 flex items-center gap-2 font-mono text-sm sm:text-base",children:[u.jsx("span",{className:"blink inline-block h-3 w-2 shrink-0 bg-[var(--accent)]"}),u.jsx("span",{children:o("home.nowPrefix")}),u.jsx("a",{href:"https://github.com/Aitenry/RytenBench",target:"_blank",rel:"noopener noreferrer",className:"link-underline text-accent transition-opacity duration-200 hover:opacity-70",children:o("home.nowTarget")})]})}),u.jsx(pn,{delay:.46,children:u.jsxs("div",{className:"mt-8 flex flex-col gap-3 sm:flex-row",children:[u.jsxs("button",{onClick:()=>z("/articles"),className:"group inline-flex cursor-pointer items-center justify-center gap-2 border border-[var(--ink)] bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:[o("home.ctaArticles"),u.jsx(ni,{size:16,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),u.jsxs("button",{onClick:()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}),className:"group inline-flex cursor-pointer items-center justify-center gap-2 border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-[var(--ink)]",children:[o("home.ctaProjects"),u.jsx(Cp,{size:16,className:"transition-transform duration-300 group-hover:translate-y-0.5"})]})]})}),u.jsx(pn,{delay:.55,children:u.jsx("div",{className:"mt-12 grid grid-cols-2 border-t border-line sm:grid-cols-4",children:x.map((m,j)=>u.jsxs("div",{className:`px-4 py-6 ${j>0?"border-l border-line":""} ${j>=2?"border-t border-line sm:border-t-0":""}`,children:[u.jsx(As,{value:m.value,className:"text-3xl font-medium sm:text-4xl"}),u.jsx("p",{className:"eyebrow mt-2 text-mute",children:m.label})]},m.label))})})]})})},Wm=({children:o,className:z=""})=>u.jsx("span",{className:`eyebrow text-accent ${z}`,children:o}),cy=()=>{const{t:o}=zn(),z=o("about.meta",{returnObjects:!0}),x=o("about.tags",{returnObjects:!0});return u.jsx("section",{id:"about",className:"h-rule px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:u.jsxs("div",{className:"mx-auto grid max-w-6xl gap-14 lg:grid-cols-12",children:[u.jsxs("div",{className:"lg:col-span-4",children:[u.jsx(pn,{children:u.jsxs(Wm,{children:["01 — ",o("about.eyebrow")]})}),u.jsx(pn,{delay:.05,children:u.jsx("h2",{className:"mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl",children:o("about.title")})}),u.jsx(pn,{delay:.12,children:u.jsx("dl",{className:"mt-12 border-t border-line",children:z.map((m,j)=>{const[T,D]=m.split(" · ");return u.jsxs("div",{className:"flex items-baseline justify-between gap-4 border-b border-line py-3.5",children:[u.jsx("dt",{className:"eyebrow text-mute",children:T}),u.jsx("dd",{className:"font-mono text-sm",children:D})]},j)})})})]}),u.jsxs("div",{className:"lg:col-span-7 lg:col-start-6",children:[u.jsx(pn,{delay:.1,children:u.jsx("p",{className:"text-lg leading-relaxed sm:text-xl",children:o("about.desc1")})}),u.jsx(pn,{delay:.16,children:u.jsx("p",{className:"mt-6 leading-relaxed text-mute",children:o("about.desc2")})}),u.jsx(pn,{delay:.22,children:u.jsx("blockquote",{className:"mt-14 border-l-2 border-[var(--accent)] pl-6",children:u.jsxs("p",{className:"font-display text-2xl italic leading-snug sm:text-3xl",children:["“",o("about.quote"),"”"]})})}),u.jsx(pn,{delay:.28,children:u.jsx("div",{className:"mt-10 flex flex-wrap gap-2",children:x.map(m=>u.jsx("span",{className:"border border-line px-3 py-1.5 font-mono text-xs text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",children:m},m))})})]})]})})},oy=({text:o,className:z="",stagger:x=.045,delay:m=0})=>{const j=o.split("");return u.jsx("span",{className:z,"aria-label":o,role:"text",children:j.map((T,D)=>u.jsx(Kn.span,{"aria-hidden":"true",initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.65,delay:m+D*x,ease:Ir},className:"inline-block whitespace-pre",children:T},`${T}-${D}`))})},kt=({index:o,label:z,title:x,extra:m,className:j="",animateTitle:T=!1})=>u.jsxs("div",{className:`flex items-end justify-between gap-6 ${j}`,children:[u.jsxs("div",{children:[u.jsxs(Wm,{children:[String(o).padStart(2,"0")," — ",z]}),u.jsx("h2",{className:"mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl",children:T?u.jsx(oy,{text:x}):x})]}),m&&u.jsx("div",{className:"hidden pb-2 sm:block",children:m})]}),fy=()=>{const{t:o}=zn();return u.jsx("section",{id:"skills",className:"px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:u.jsxs("div",{className:"mx-auto max-w-6xl",children:[u.jsx(kt,{index:2,label:o("skills.eyebrow"),title:o("skills.title")}),u.jsx("div",{className:"mt-14 border-b border-line",children:Jm.map((z,x)=>u.jsx(pn,{delay:x*.04,children:u.jsxs("div",{className:"group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-soft sm:py-6",children:[u.jsx("span",{className:"col-span-4 font-display text-lg font-medium transition-all duration-300 group-hover:italic group-hover:pl-1 sm:col-span-3 sm:text-xl",children:z.name}),u.jsx("div",{className:"col-span-5 h-[2px] overflow-hidden bg-[var(--line)] sm:col-span-7",children:u.jsx(Kn.div,{initial:{width:0},whileInView:{width:`${z.level}%`},viewport:{once:!0},transition:{duration:1.1,delay:.15+x*.06,ease:"easeOut"},className:"h-full bg-[var(--accent)]"})}),u.jsxs("span",{className:"col-span-3 text-right font-mono text-sm text-mute sm:col-span-2",children:[String(z.level).padStart(2,"0"),"%"]})]})},z.name))})]})})},my=({children:o,href:z,className:x="",external:m=!1})=>u.jsxs("a",{href:z,...m?{target:"_blank",rel:"noopener noreferrer"}:{},className:`group link-underline inline-flex items-center gap-1.5 text-sm font-medium ${x}`,children:[o,u.jsx(ni,{size:15,className:"transition-transform duration-300 group-hover:translate-x-1"})]}),dy=({isDarkMode:o})=>{const{t:z}=zn();return u.jsx("section",{id:"projects",className:"h-rule bg-soft px-4 py-28 sm:px-6 sm:py-36 md:px-8",children:u.jsxs("div",{className:"mx-auto max-w-6xl",children:[u.jsx(kt,{index:3,label:z("projects.eyebrow"),title:z("projects.title")}),u.jsx("div",{className:"mt-14 grid gap-px border border-line bg-[var(--line)] md:grid-cols-2",children:Km.map((x,m)=>u.jsx(pn,{delay:m*.08,className:"h-full",children:u.jsxs("a",{href:x.github,target:"_blank",rel:"noopener noreferrer",className:"group flex h-full flex-col bg-[var(--paper)] p-6 transition-colors duration-300 hover:bg-soft sm:p-8",children:[u.jsx("div",{className:"aspect-[16/8] overflow-hidden border border-line",children:u.jsx("img",{src:o?x.imageDark:x.imageLight,alt:x.title,loading:"lazy",className:"h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"})}),u.jsxs("div",{className:"mt-6 flex items-baseline justify-between gap-4",children:[u.jsx("h3",{className:"font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl",children:x.title}),u.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[u.jsx("span",{className:`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${x.status==="active"?"border-[var(--accent)] text-[var(--accent)]":"border-line text-mute"}`,children:x.status==="active"?z("projects.statusActive"):z("projects.statusAcquired")}),u.jsxs("span",{className:"font-mono text-xs text-mute",children:["NO.",String(x.id).padStart(2,"0")]})]})]}),u.jsx("p",{className:"mt-3 leading-relaxed text-mute",children:z(x.descriptionKey)}),u.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:x.tech.map(j=>u.jsx("span",{className:"border border-line px-2.5 py-1 font-mono text-[11px] text-mute",children:j},j))}),u.jsxs("div",{className:"mt-auto flex items-center justify-between pt-8",children:[u.jsx(my,{href:x.github,external:!0,children:z("projects.viewProject")}),u.jsx($r,{size:19,className:"text-mute transition-colors duration-300 group-hover:text-[var(--accent)]"})]})]})},x.id))})]})})},hy=({items:o,className:z=""})=>{const x=u.jsx("div",{className:"marquee-track items-center",children:[...o,...o].map((m,j)=>u.jsxs("span",{className:"mx-6 inline-flex items-center gap-6 whitespace-nowrap",children:[m,u.jsx("span",{"aria-hidden":!0,className:"text-[0.6em]",children:"✦"})]},j))});return u.jsx("div",{"aria-hidden":!0,className:`marquee overflow-hidden border-y border-[var(--accent)] bg-accent py-3 text-[var(--accent-ink)] ${z}`,children:u.jsx("div",{className:"eyebrow font-semibold",children:x})})},py=({isDarkMode:o})=>{const{t:z}=zn(),x=z("home.marquee",{returnObjects:!0});return u.jsxs(u.Fragment,{children:[u.jsx(sy,{}),u.jsx("div",{className:"relative z-10 -mx-2 -mt-8 rotate-[-1.2deg] sm:mx-0 sm:-mt-10",children:u.jsx(hy,{items:x})}),u.jsx(cy,{}),u.jsx(fy,{}),u.jsx(dy,{isDarkMode:o})]})},Ns=o=>typeof o=="string"?o:Array.isArray(o)?o.map(Ns).join(""):o&&typeof o=="object"&&G.isValidElement(o)?Ns(o.props.children):"",Vy=o=>{const z=o.replace(/[#*`[\]()_~]/g,"").replace(/\r?\n/g," ").trim(),x=(z.match(/[\u4e00-\u9fa5]/g)||[]).length,m=z.split(/\s+/).filter(j=>j.length>0).length;return x+m},yy=o=>{const z=o.replace(/[#*`[\]()_~]/g,"").replace(/\r?\n/g," ").trim(),x=(z.match(/[\u4e00-\u9fa5]/g)||[]).length,m=z.split(/\s+/).filter(T=>T.length>0).length,j=x/400+m/200;return Math.max(1,Math.round(j))},gy=o=>o.trim().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,""),vy=o=>gy(o.replace(/[`*_]/g,"").trim()),Zy=o=>{const z=[];for(const x of o.split(/\r?\n/)){const m=x.match(/^(#{2,3})\s+(.+)$/);if(!m)continue;const j=Ns(m[2]).trim();j&&z.push({level:m[1].length,title:j,id:vy(j)})}return z},Gm=o=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${o?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,by=()=>{const{t:o}=zn(),z=Array.from(new Set(Ol.flatMap(T=>T.tags))),[x,m]=G.useState(null),j=x?Ol.filter(T=>T.tags.includes(x)):Ol;return u.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:u.jsxs("div",{className:"mx-auto max-w-5xl",children:[u.jsx(kt,{index:1,label:o("articles.eyebrow"),title:o("articles.title"),extra:u.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(j.length).padStart(2,"0")," / ",String(Ol.length).padStart(2,"0")]})}),u.jsx(pn,{children:u.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[u.jsx("button",{onClick:()=>m(null),className:Gm(x===null),children:o("common.all")}),z.map(T=>u.jsx("button",{onClick:()=>m(T===x?null:T),className:Gm(T===x),children:T},T))]})}),u.jsx("div",{className:"border-b border-line",children:j.map((T,D)=>u.jsx(pn,{delay:D*.04,children:u.jsxs(jt,{prefetch:"intent",to:`/article/${T.id}`,className:"group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8",children:[u.jsx("span",{className:"col-span-12 font-mono text-xs text-mute sm:col-span-2",children:T.date}),u.jsxs("div",{className:"col-span-12 sm:col-span-8",children:[u.jsx("h3",{className:"font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl",children:T.title}),u.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-mute",children:T.excerpt})]}),u.jsxs("div",{className:"col-span-12 flex items-center justify-between sm:col-span-2 sm:justify-end",children:[u.jsxs("span",{className:"font-mono text-xs text-mute",children:[yy(T.content)," ",o("common.minRead")]}),u.jsx(ni,{size:17,className:"text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"})]})]})},T.id))})]})})},Dl=o=>{const{t:z}=zn();G.useEffect(()=>(document.title=o?`${o} — Aitenry`:z("siteTitle"),()=>{document.title=z("siteTitle")}),[o,z])},xy=()=>{const{t:o}=zn();return Dl(o("articles.title")),u.jsx("div",{className:"relative min-h-screen",children:u.jsx(by,{})})},Lm=o=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${o?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,_y=()=>{const{t:o}=zn(),z=Array.from(new Set(wl.flatMap(T=>T.tags))),[x,m]=G.useState(null),j=x?wl.filter(T=>T.tags.includes(x)):wl;return u.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:u.jsxs("div",{className:"mx-auto max-w-5xl",children:[u.jsx(kt,{index:2,label:o("diaries.eyebrow"),title:o("diaries.title"),extra:u.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(j.length).padStart(2,"0")," / ",String(wl.length).padStart(2,"0")]})}),u.jsx(pn,{children:u.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[u.jsx("button",{onClick:()=>m(null),className:Lm(x===null),children:o("common.all")}),z.map(T=>u.jsx("button",{onClick:()=>m(T===x?null:T),className:Lm(T===x),children:T},T))]})}),u.jsx("div",{className:"border-b border-line",children:j.map((T,D)=>u.jsx(pn,{delay:D*.04,children:u.jsxs(jt,{prefetch:"intent",to:`/diary/${T.id}`,className:"group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8",children:[u.jsxs("div",{className:"col-span-12 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-mute sm:col-span-3",children:[u.jsx("span",{children:T.date}),T.weather&&u.jsx("span",{className:"border border-line px-1.5 py-0.5",children:T.weather}),T.mood&&u.jsx("span",{className:"border border-line px-1.5 py-0.5",children:T.mood})]}),u.jsxs("div",{className:"col-span-12 sm:col-span-7",children:[u.jsx("h3",{className:"font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl",children:T.title}),u.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-mute",children:T.excerpt})]}),u.jsx("div",{className:"col-span-12 flex justify-end sm:col-span-2",children:u.jsx(ni,{size:17,className:"text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"})})]})},T.id))})]})})},Sy=()=>{const{t:o}=zn();return Dl(o("diaries.title")),u.jsx("div",{className:"relative min-h-screen",children:u.jsx(_y,{})})},Xt=[{no:1,category:"pet",src:"/pet/thumbs/20260815082344_1_3.jpg",date:"2026.08.15"},{no:2,category:"pet",src:"/pet/thumbs/20260815082345_2_3.jpg",date:"2026.08.15"},{no:3,category:"pet",src:"/pet/thumbs/20260815082346_3_3.jpg",date:"2026.08.15"},{no:4,category:"travel",src:"/travel/thumbs/20260815082348_4_3.jpg",date:"2026.08.15"},{no:5,category:"pet",src:"/pet/thumbs/20260815082348_5_3.jpg",date:"2026.08.15"},{no:6,category:"pet",src:"/pet/thumbs/20260815082349_6_3.jpg",date:"2026.08.15"},{no:7,category:"travel",src:"/travel/thumbs/20260815082351_7_3.jpg",date:"2026.08.15"},{no:8,category:"travel",src:"/travel/thumbs/20260815082352_8_3.jpg",date:"2026.08.15"},{no:9,category:"travel",src:"/travel/thumbs/20260815082353_9_3.jpg",date:"2026.08.15"},{no:10,category:"travel",src:"/travel/thumbs/20260815082354_10_3.jpg",date:"2026.08.15"},{no:11,category:"travel",src:"/travel/thumbs/20260815082355_11_3.jpg",date:"2026.08.15"},{no:12,category:"travel",src:"/travel/thumbs/20260815082356_12_3.jpg",date:"2026.08.15"},{no:13,category:"pet",src:"/pet/thumbs/20260817174248_13_3.jpg",date:"2026.08.17"},{no:14,category:"pet",src:"/pet/thumbs/20260817174248_14_3.jpg",date:"2026.08.17"},{no:15,category:"pet",src:"/pet/thumbs/20260817195806_15_3.jpg",date:"2026.08.17"},{no:16,category:"pet",src:"/pet/thumbs/20260817195806_16_3.jpg",date:"2026.08.17"},{no:17,category:"pet",src:"/pet/thumbs/20260817195808_17_3.jpg",date:"2026.08.17"},{no:18,category:"pet",src:"/pet/thumbs/20260817195809_18_3.jpg",date:"2026.08.17"},{no:19,category:"pet",src:"/pet/thumbs/20260817195811_19_3.jpg",date:"2026.08.17"},{no:20,category:"pet",src:"/pet/thumbs/20260817195812_20_3.jpg",date:"2026.08.17"}],jy=({items:o,onSelect:z,cardClass:x="w-64 sm:w-80",duration:m=42})=>{if(o.length===0)return null;const j=T=>u.jsx("div",{className:"flex shrink-0","aria-hidden":T===1,children:o.map((D,R)=>u.jsxs("button",{onClick:()=>z?.(R),"aria-label":D.alt,className:`group block shrink-0 cursor-pointer border-r border-line bg-[var(--paper)] text-left transition-colors duration-300 hover:bg-soft ${x}`,children:[u.jsx("div",{className:"aspect-[16/7] overflow-hidden border-b border-line",children:u.jsx("img",{src:D.src,alt:D.alt,loading:"lazy",draggable:!1,className:"h-full w-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.03]"})}),u.jsxs("div",{className:"flex items-baseline justify-between gap-3 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest",children:[u.jsx("span",{className:"text-[var(--accent)]",children:D.caption}),u.jsx("span",{className:"text-mute",children:D.sub})]})]},`${T}-${R}`))});return u.jsx("div",{className:"marquee overflow-hidden border-y border-line",children:u.jsxs("div",{className:"marquee-track",style:{animationDuration:`${m}s`},children:[j(0),j(1)]})})},Kr={damping:30,stiffness:100,mass:2},zy=({imageSrc:o,altText:z,overlay:x,className:m="",rotateAmplitude:j=14,scaleOnHover:T=1.04,onClick:D})=>{const R=G.useRef(null),Y=Aa(Dm(0),Kr),H=Aa(Dm(0),Kr),Z=Aa(1,Kr),N=Aa(0,Kr),A=on=>{if(!R.current)return;const _n=R.current.getBoundingClientRect(),kn=on.clientX-_n.left-_n.width/2,fe=on.clientY-_n.top-_n.height/2;Y.set(fe/(_n.height/2)*-j),H.set(kn/(_n.width/2)*j)},I=()=>{Z.set(T),N.set(1)},cn=()=>{N.set(0),Z.set(1),Y.set(0),H.set(0)};return u.jsx("div",{ref:R,className:m,style:{perspective:900},onMouseMove:A,onMouseEnter:I,onMouseLeave:cn,onClick:D,role:D?"button":void 0,tabIndex:D?0:void 0,onKeyDown:D?on=>{(on.key==="Enter"||on.key===" ")&&(on.preventDefault(),D())}:void 0,children:u.jsxs(Kn.div,{style:{rotateX:Y,rotateY:H,scale:Z},className:"relative h-full w-full",children:[u.jsx("img",{src:o,alt:z,loading:"lazy",draggable:!1,className:"h-full w-full object-cover select-none"}),x&&u.jsx(Kn.div,{style:{opacity:N},className:"pointer-events-none absolute inset-0 flex items-end justify-start p-3",children:x})]})})},Xm=o=>`cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${o?"border-[var(--accent)] bg-accent text-[var(--accent-ink)]":"border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]"}`,Ty=()=>{const{t:o}=zn(),[z,x]=G.useState("all"),[m,j]=G.useState(null),T=z==="all"?Xt:Xt.filter(A=>A.category===z),D=A=>o(`photos.${A}`),R=G.useCallback(()=>j(null),[]),Y=G.useCallback(A=>{j(I=>I===null?I:(I+A+T.length)%T.length)},[T.length]);G.useEffect(()=>{if(m===null)return;document.body.style.overflow="hidden";const A=I=>{I.key==="Escape"?R():I.key==="ArrowLeft"?Y(-1):I.key==="ArrowRight"&&Y(1)};return window.addEventListener("keydown",A),()=>{document.body.style.overflow="",window.removeEventListener("keydown",A)}},[m,R,Y]);const H=m!==null?T[m]:null,Z=Xt.map(A=>({src:A.src,alt:`${D(A.category)}照片 ${String(A.no).padStart(2,"0")}`,caption:`${D(A.category)} / ${String(A.no).padStart(2,"0")}`,sub:A.date})),N=new Set(Xt.map(A=>A.category)).size;return u.jsxs("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:[u.jsxs("div",{className:"mx-auto max-w-6xl",children:[u.jsx(kt,{index:4,label:o("photos.eyebrow"),title:o("photos.title"),animateTitle:!0,extra:u.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(T.length).padStart(2,"0")," / ",String(Xt.length).padStart(2,"0")]})}),u.jsx(pn,{children:u.jsxs("div",{className:"mt-10",children:[u.jsxs("div",{className:"flex items-baseline justify-between border-b border-line pb-3",children:[u.jsxs("h3",{className:"eyebrow text-accent",children:["// ",o("photos.featured")]}),u.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-mute",children:o("photos.autoplayHint")})]}),u.jsx(jy,{items:Z,onSelect:A=>j(A)})]})}),u.jsx(pn,{children:u.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-line py-5 font-mono text-xs text-mute",children:[u.jsxs("span",{children:[u.jsx(As,{value:Xt.length,className:"text-lg text-[var(--accent)]"}),u.jsx("span",{className:"ml-1.5 uppercase tracking-widest",children:o("photos.statPhotos")})]}),u.jsxs("span",{children:[u.jsx(As,{value:N,className:"text-lg text-[var(--accent)]"}),u.jsx("span",{className:"ml-1.5 uppercase tracking-widest",children:o("photos.statSeries")})]}),u.jsxs("span",{className:"uppercase tracking-widest",children:[o("photos.statShotOn")," ",Xt[0]?.date??""]})]})}),u.jsx(pn,{children:u.jsxs("div",{className:"mt-8 flex flex-wrap gap-2 border-b border-line pb-5",children:[u.jsx("button",{onClick:()=>x("all"),className:Xm(z==="all"),children:o("common.all")}),["travel","pet"].map(A=>u.jsx("button",{onClick:()=>x(A),className:Xm(z===A),children:o(`photos.${A}`)},A))]})}),u.jsx("div",{className:"mt-8 grid grid-cols-1 gap-px border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3",children:T.map((A,I)=>u.jsx(pn,{delay:I%3*.06,children:u.jsxs("div",{className:"group bg-[var(--paper)] transition-colors duration-300 hover:bg-soft",children:[u.jsx(zy,{imageSrc:A.src,altText:`${D(A.category)}照片 ${String(A.no).padStart(2,"0")}`,className:"aspect-[16/7] cursor-pointer overflow-hidden border-b border-line",onClick:()=>j(I),overlay:u.jsxs("span",{className:"border border-[var(--accent)] bg-[var(--paper)]/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]",children:[o("photos.viewHint")," ↗"]})}),u.jsxs("div",{className:"flex items-baseline justify-between gap-3 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest",children:[u.jsxs("span",{className:"text-mute transition-colors duration-300 group-hover:text-[var(--accent)]",children:[D(A.category)," / ",String(A.no).padStart(2,"0")]}),u.jsx("span",{className:"text-mute",children:A.date})]})]})},A.no))})]}),Tp.createPortal(u.jsx(Fr,{children:H&&m!==null&&u.jsxs(Kn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-[70] flex flex-col bg-[var(--paper)]/95 backdrop-blur-sm",onClick:R,role:"dialog","aria-modal":"true","aria-label":o("photos.lightbox"),children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-line px-4 py-3 sm:px-6",children:[u.jsxs("span",{className:"eyebrow text-accent",children:[String(m+1).padStart(2,"0")," / ",String(T.length).padStart(2,"0")]}),u.jsx("button",{onClick:R,"aria-label":o("photos.close"),className:"flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",children:u.jsx(Wr,{size:17})})]}),u.jsxs("div",{className:"relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20",children:[u.jsx("button",{onClick:A=>{A.stopPropagation(),Y(-1)},"aria-label":o("photos.prev"),className:"absolute left-2 z-10 flex h-10 w-10 items-center justify-center border border-line bg-[var(--paper)] text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:left-5",children:u.jsx(Bp,{size:22})}),u.jsx("img",{src:H.src,alt:`${D(H.category)}照片 ${String(H.no).padStart(2,"0")}`,className:"max-h-[70vh] max-w-full border border-line bg-[var(--paper-soft)] object-contain",onClick:A=>A.stopPropagation()}),u.jsx("button",{onClick:A=>{A.stopPropagation(),Y(1)},"aria-label":o("photos.next"),className:"absolute right-2 z-10 flex h-10 w-10 items-center justify-center border border-line bg-[var(--paper)] text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:right-5",children:u.jsx(qp,{size:22})})]}),u.jsx("div",{className:"border-t border-line px-4 py-3 sm:px-6",children:u.jsxs("p",{className:"font-mono text-[11px] uppercase tracking-widest text-mute",children:[D(H.category)," / ",String(H.no).padStart(2,"0"),u.jsx("span",{className:"mx-2 text-[var(--line)]",children:"/"}),H.date,u.jsx("span",{className:"mx-2 text-[var(--line)]",children:"/"}),o("photos.kbdHint")]})})]})}),document.body)]})},Ay=()=>{const{t:o}=zn();return Dl(o("photos.title")),u.jsx("div",{className:"relative min-h-screen",children:u.jsx(Ty,{})})},js=[{id:"1",title:"代码大全（第 2 版）",author:"Steve McConnell",category:"编程",status:"read"},{id:"2",title:"重构：改善既有代码的设计（第 2 版）",author:"Martin Fowler",category:"编程",status:"read"},{id:"3",title:"人月神话",author:"Frederick P. Brooks Jr.",category:"编程",status:"read"},{id:"4",title:"黑客与画家",author:"Paul Graham",category:"编程",status:"read"},{id:"5",title:"计算机程序的构造和解释（SICP）",author:"Harold Abelson / Gerald Jay Sussman",category:"编程",status:"want"},{id:"6",title:"编程珠玑",author:"Jon Bentley",category:"编程",status:"want"},{id:"7",title:"代码整洁之道",author:"Robert C. Martin",category:"编程",status:"want"},{id:"8",title:"深入理解计算机系统",author:"Randal E. Bryant / David R. O’Hallaron",category:"编程",status:"want"},{id:"9",title:"设计中的设计",author:"原研哉",category:"设计",status:"reading",progress:60},{id:"10",title:"写给大家看的设计书",author:"Robin Williams",category:"设计",status:"read"},{id:"11",title:"秩序感：装饰艺术的心理学研究",author:"E. H. Gombrich",category:"设计",status:"want"},{id:"12",title:"活着",author:"余华",category:"文学",status:"read"},{id:"13",title:"百年孤独",author:"加西亚·马尔克斯",category:"文学",status:"reading",progress:35},{id:"14",title:"围城",author:"钱锺书",category:"文学",status:"read"},{id:"15",title:"平凡的世界",author:"路遥",category:"文学",status:"read"},{id:"16",title:"红楼梦",author:"曹雪芹",category:"文学",status:"want"}],Ny={reading:"border-[var(--accent)] text-[var(--accent)]",read:"border-line text-mute",want:"border-line text-mute"},Ey=(o,z)=>z(o==="reading"?"reading.statusReading":o==="read"?"reading.statusRead":"reading.statusWant"),My=()=>{const{t:o}=zn(),z=x=>js.filter(m=>m.status===x).length;return u.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:u.jsxs("div",{className:"mx-auto max-w-5xl",children:[u.jsx(kt,{index:5,label:o("reading.eyebrow"),title:o("reading.title"),extra:u.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(js.length).padStart(2,"0")," ",o("reading.total")]})}),u.jsx(pn,{children:u.jsxs("div",{className:"mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-5 font-mono text-xs text-mute",children:[u.jsxs("span",{children:[u.jsx("span",{className:"text-[var(--accent)]",children:String(z("reading")).padStart(2,"0")})," ",o("reading.statusReading")]}),u.jsxs("span",{children:[u.jsx("span",{className:"text-ink",children:String(z("read")).padStart(2,"0")})," ",o("reading.statusRead")]}),u.jsxs("span",{children:[u.jsx("span",{children:String(z("want")).padStart(2,"0")})," ",o("reading.statusWant")]})]})}),u.jsx("div",{className:"border-b border-line",children:js.map((x,m)=>u.jsx(pn,{delay:m*.03,children:u.jsxs("div",{className:"group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-soft sm:py-6",children:[u.jsx("div",{className:"col-span-3 sm:col-span-2",children:u.jsx("span",{className:`inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${Ny[x.status]}`,children:Ey(x.status,o)})}),u.jsxs("div",{className:"col-span-9 sm:col-span-7",children:[u.jsx("h3",{className:"font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-xl",children:x.title}),u.jsx("p",{className:"mt-0.5 font-mono text-xs text-mute",children:x.author})]}),u.jsxs("div",{className:"col-span-12 flex items-center justify-between gap-4 pl-0 sm:col-span-3 sm:justify-end",children:[u.jsx("span",{className:"border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mute",children:x.category}),x.status==="reading"&&x.progress!==void 0?u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"h-1 w-16 overflow-hidden bg-[var(--line)] sm:w-20",children:u.jsx("span",{className:"block h-full bg-[var(--accent)]",style:{width:`${x.progress}%`}})}),u.jsxs("span",{className:"font-mono text-[10px] text-[var(--accent)]",children:[x.progress,"%"]})]}):u.jsx("span",{className:"font-mono text-xs text-mute",children:"—"})]})]})},x.id))})]})})},Oy=()=>{const{t:o}=zn();return Dl(o("reading.title")),u.jsx("div",{className:"relative min-h-screen",children:u.jsx(My,{})})},Jr=[{name:"GitHub",url:"https://github.com",category:"开发",desc:"代码托管与开源协作，世界的版本库。"},{name:"Vite",url:"https://vite.dev",category:"开发",desc:"下一代前端构建工具，秒级冷启动。"},{name:"TypeScript",url:"https://www.typescriptlang.org",category:"开发",desc:"带类型的 JavaScript，规模化的底气。"},{name:"pnpm",url:"https://pnpm.io",category:"开发",desc:"快速、省磁盘的包管理器。"},{name:"Docker",url:"https://www.docker.com",category:"开发",desc:"容器化交付，环境一致性的答案。"},{name:"Figma",url:"https://www.figma.com",category:"设计",desc:"界面设计与原型协作的一站式画布。"},{name:"Google Fonts",url:"https://fonts.google.com",category:"设计",desc:"开源字体库，本站字体也来自这里。"},{name:"Excalidraw",url:"https://excalidraw.com",category:"设计",desc:"手绘风白板，画架构图的手感利器。"},{name:"Coolors",url:"https://coolors.co",category:"设计",desc:"配色方案生成器，快速搭调色板。"},{name:"Obsidian",url:"https://obsidian.md",category:"效率",desc:"本地优先的双链笔记，知识沉淀的仓库。"},{name:"Raycast",url:"https://www.raycast.com",category:"效率",desc:"macOS 启动器，一切皆可快捷键。"},{name:"Notion",url:"https://www.notion.so",category:"效率",desc:"一体化工作区，文档、数据库与看板。"},{name:"Todoist",url:"https://todoist.com",category:"效率",desc:"跨平台任务清单，GTD 的轻量落地。"},{name:"语雀",url:"https://www.yuque.com",category:"效率",desc:"结构化文档与团队知识库。"}],wy=()=>{const{t:o}=zn(),z=Array.from(new Set(Jr.map(x=>x.category)));return u.jsx("section",{className:"relative px-4 py-16 sm:px-6 sm:py-24 md:px-8",children:u.jsxs("div",{className:"mx-auto max-w-6xl",children:[u.jsx(kt,{index:6,label:o("tools.eyebrow"),title:o("tools.title"),extra:u.jsxs("span",{className:"font-mono text-sm text-mute",children:[String(Jr.length).padStart(2,"0")," ",o("tools.total")]})}),u.jsx("div",{className:"mt-10 space-y-14",children:z.map((x,m)=>u.jsxs("div",{children:[u.jsx(pn,{children:u.jsxs("div",{className:"flex items-baseline justify-between border-b border-line pb-3",children:[u.jsxs("h3",{className:"eyebrow text-accent",children:[String(m+1).padStart(2,"0")," — ",x]}),u.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-widest text-mute",children:[String(Jr.filter(j=>j.category===x).length).padStart(2,"0")," ITEMS"]})]})}),u.jsx("div",{className:"mt-6 grid gap-px border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3",children:Jr.filter(j=>j.category===x).map((j,T)=>u.jsx(pn,{delay:T%3*.06,className:"h-full",children:u.jsxs("a",{href:j.url,target:"_blank",rel:"noopener noreferrer",className:"group flex h-full flex-col bg-[var(--paper)] p-5 transition-colors duration-300 hover:bg-soft sm:p-6",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3",children:[u.jsx("h4",{className:"font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]",children:j.name}),u.jsx(Ts,{size:17,className:"mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"})]}),u.jsx("p",{className:"mt-2 text-sm leading-relaxed text-mute",children:j.desc}),u.jsxs("div",{className:"mt-auto flex items-center justify-between pt-5",children:[u.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-mute",children:j.url.replace(/^https?:\/\/(www\.)?/,"")}),u.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]",children:o("tools.visit")})]})]})},j.name))})]},x))})]})})},Dy=()=>{const{t:o}=zn();return Dl(o("tools.title")),u.jsx("div",{className:"relative min-h-screen",children:u.jsx(wy,{})})},Uy=({code:o,title:z,desc:x,backLabel:m,onBack:j,fullScreen:T=!1})=>u.jsx("div",{className:`relative flex items-center justify-center px-4 ${T?"min-h-[100svh]":"min-h-[70vh]"}`,children:u.jsxs("div",{className:"w-full max-w-md border border-line bg-[var(--paper)] p-10 shadow-[8px_8px_0_0_var(--ink)]",children:[u.jsx("p",{className:"eyebrow text-accent",children:o}),u.jsx("h1",{className:"mt-4 font-display text-4xl font-semibold",children:z}),u.jsx("p",{className:"mt-3 text-sm text-mute",children:x}),u.jsxs("button",{onClick:j,className:"mt-8 inline-flex cursor-pointer items-center gap-2 border border-[var(--ink)] bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]",children:[u.jsx(Rp,{size:15}),m]})]})}),Hy=()=>{const{t:o}=zn(),z=Pr();return Dl("404"),u.jsx(Uy,{fullScreen:!0,code:"404 — PAGE NOT FOUND",title:o("notFound.title"),desc:o("notFound.desc"),backLabel:o("notFound.back"),onBack:()=>z("/home")})},Cy=G.lazy(()=>Zm(()=>import("./ArticlePage-BsuGkmlI.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),By=G.lazy(()=>Zm(()=>import("./DiaryPage-Dgl1RusC.js"),__vite__mapDeps([7,1,2,3,4,5,6]))),qy=()=>u.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:u.jsxs("p",{className:"eyebrow text-mute",children:["LOADING",u.jsx("span",{className:"blink ml-1 inline-block h-3 w-2 translate-y-0.5 bg-[var(--accent)]"})]})}),Ry=()=>{try{const o=localStorage.getItem("blog-theme");if(o==="light")return!1;if(o==="dark")return!0}catch{}return window.matchMedia("(prefers-color-scheme: dark)").matches},Yy=()=>{const[o,z]=G.useState(Ry),{t:x}=zn(),m=Np(),j=Pr(),{scrollYProgress:T}=Es(),D=Aa(T,{stiffness:100,damping:30,restDelta:.001});let R="";m.pathname==="/home"?R="home":m.pathname==="/diaries"||m.pathname.startsWith("/diary/")?R="diaries":m.pathname==="/articles"||m.pathname.startsWith("/article/")?R="articles":m.pathname==="/photos"?R="photos":m.pathname==="/reading"?R="reading":m.pathname==="/tools"&&(R="tools"),G.useEffect(()=>{window.scrollTo(0,0)},[m.pathname]),G.useEffect(()=>{document.documentElement.setAttribute("data-theme",o?"dark":"light"),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",o?"#14120E":"#F3F0E9")},[o]);const Y=G.useCallback(()=>{z(Z=>{const N=!Z;try{localStorage.setItem("blog-theme",N?"dark":"light")}catch{}return N})},[]),H=(Z,N)=>{Z.preventDefault(),N==="home"?j("/home"):N==="diaries"?j("/diaries"):N==="articles"?j("/articles"):N==="photos"?j("/photos"):N==="reading"?j("/reading"):N==="tools"&&j("/tools")};return u.jsxs("div",{className:"font-sans relative min-h-screen overflow-x-clip bg-[var(--paper)] text-ink transition-colors duration-300",children:[u.jsx(iy,{}),u.jsx(uy,{quantity:80,size:1.5,color:o?[.929,.914,.875]:[.106,.098,.082]}),u.jsxs(Ep,{children:[u.jsx(Te,{path:"/",element:u.jsx(Mp,{to:"/home",replace:!0})}),u.jsxs(Te,{element:u.jsxs(u.Fragment,{children:[u.jsx("a",{href:"#main",onClick:Z=>{Z.preventDefault();const N=document.getElementById("main");N?.focus(),N?.scrollIntoView()},className:"sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper",children:x("navigation.skip")}),u.jsx(ty,{scaleX:D}),u.jsx(ey,{activeSection:R,isDarkMode:o,onToggleTheme:Y,handleNavClick:H}),u.jsx("main",{id:"main",tabIndex:-1,className:"relative z-10 pt-16 focus:outline-none",children:u.jsx(G.Suspense,{fallback:u.jsx(qy,{}),children:u.jsx(Op,{})})}),u.jsx(ay,{}),u.jsx(ry,{})]}),children:[u.jsx(Te,{path:"/home",element:u.jsx(py,{isDarkMode:o})}),u.jsx(Te,{path:"/articles",element:u.jsx(xy,{})}),u.jsx(Te,{path:"/article/:id",element:u.jsx(Cy,{})}),u.jsx(Te,{path:"/diaries",element:u.jsx(Sy,{})}),u.jsx(Te,{path:"/diary/:id",element:u.jsx(By,{})}),u.jsx(Te,{path:"/photos",element:u.jsx(Ay,{})}),u.jsx(Te,{path:"/reading",element:u.jsx(Oy,{})}),u.jsx(Te,{path:"/tools",element:u.jsx(Dy,{})})]}),u.jsx(Te,{path:"*",element:u.jsx(Hy,{})})]})]})},Qy=()=>u.jsx(Ap,{children:u.jsx(Yy,{})}),km=sessionStorage.getItem("redirect");km&&(sessionStorage.removeItem("redirect"),window.history.replaceState(null,"",km));window.location.hash.startsWith("#/")&&window.history.replaceState(null,"",window.location.hash.slice(1));Xp.createRoot(document.getElementById("root")).render(u.jsx(G.StrictMode,{children:u.jsx(Qy,{})}));export{Ir as E,Uy as N,Ol as a,Ns as b,Vy as c,wl as d,Zy as e,vy as h,yy as r,Dl as u};
