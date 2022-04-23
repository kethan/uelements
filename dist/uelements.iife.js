var uelements=function(m){"use strict";var Le=typeof Promise=="function"?Promise:function(e){let t=[],n=0,o;return e(_=>{o=_,n=1,t.splice(0).forEach(i)}),{then:i};function i(_){return n?setTimeout(_,0,o):t.push(_),this}};const M=!0,R=!1,J="querySelectorAll";function Oe(e){this.observe(e,{subtree:M,childList:M})}const Fe=(e,t,n)=>{const o=(_,l,c,a,p)=>{for(let r=0,{length:f}=_;r<f;r++){const u=_[r];(p||J in u)&&(a?l.has(u)||(l.add(u),c.delete(u),e(u,a)):c.has(u)||(c.add(u),l.delete(u),e(u,a)),p||o(u[J]("*"),l,c,a,M))}},i=new(n||MutationObserver)(_=>{for(let l=new Set,c=new Set,a=0,{length:p}=_;a<p;a++){const{addedNodes:r,removedNodes:f}=_[a];o(f,l,c,R,R),o(r,l,c,M,R)}});return i.add=Oe,i.add(t||document),i},K="querySelectorAll",{document:Ue,Element:X,MutationObserver:De,Set:We,WeakMap:xe}=self,Y=e=>K in e,{filter:Z}=[];var Ne=e=>{const t=new xe,n=f=>{for(let u=0,{length:s}=f;u<s;u++)t.delete(f[u])},o=()=>{const f=p.takeRecords();for(let u=0,{length:s}=f;u<s;u++)l(Z.call(f[u].removedNodes,Y),!1),l(Z.call(f[u].addedNodes,Y),!0)},i=f=>f.matches||f.webkitMatchesSelector||f.msMatchesSelector,_=(f,u)=>{let s;if(u)for(let h,w=i(f),v=0,{length:y}=c;v<y;v++)w.call(f,h=c[v])&&(t.has(f)||t.set(f,new We),s=t.get(f),s.has(h)||(s.add(h),e.handle(f,u,h)));else t.has(f)&&(s=t.get(f),t.delete(f),s.forEach(h=>{e.handle(f,u,h)}))},l=(f,u=!0)=>{for(let s=0,{length:h}=f;s<h;s++)_(f[s],u)},{query:c}=e,a=e.root||Ue,p=Fe(_,a,De),{attachShadow:r}=X.prototype;return r&&(X.prototype.attachShadow=function(f){const u=r.call(this,f);return p.add(u),u}),c.length&&l(a[K](c)),{drop:n,flush:o,observer:p,parse:l}};const{create:ee,keys:qe}=Object,te=new WeakMap,Re=new Set,j=[],ne={},T={},je=(e,t)=>{for(let n=te.get(t),o=0,{length:i}=e;o<i;o++){const{target:_,attributeName:l,oldValue:c}=e[o],a=_.getAttribute(l);n.attributeChanged(l,c,a)}},Ie=(e,t,n,o)=>{const i=ee(o,{element:{enumerable:!0,value:e}});for(let l=0,{length:c}=n;l<c;l++)e.addEventListener(n[l].t,i,n[l].o);t.set(e,i),i.init&&i.init();const{observedAttributes:_}=o;if(_){const l=new MutationObserver(je);l.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:_.map(c=>(e.hasAttribute(c)&&i.attributeChanged(c,null,e.getAttribute(c)),c))}),te.set(l,i)}return i},{drop:it,flush:Ve,parse:ze}=Ne({query:j,handle(e,t,n){const{m:o,l:i,o:_}=ne[n],l=o.get(e)||Ie(e,o,i,_),c=t?"connected":"disconnected";c in l&&l[c]()}}),_e=(e,t)=>{if(-1<j.indexOf(e))throw new Error("duplicated: "+e);Ve();const n=[],o=ee(null);for(let i=qe(t),_=0,{length:l}=i;_<l;_++){const c=i[_];if(/^on/.test(c)&&!/Options$/.test(c)){const a=t[c+"Options"]||!1,p=c.toLowerCase();let r=p.slice(2);n.push({t:r,o:a}),o[r]=c,p!==c&&(r=c.slice(2,3).toLowerCase()+c.slice(3),o[r]=c,n.push({t:r,o:a}))}}n.length&&(t.handleEvent=function(i){this[o[i.type]](i)}),j.push(e),ne[e]={m:new WeakMap,l:n,o:t},ze(document.querySelectorAll(e)),Be(e),Re.has(e)||T[e]._()},Be=e=>{if(!(e in T)){let t,n=new Le(o=>{t=o});T[e]={_:t,$:n}}return T[e].$};var L,d,oe,A,re,ie,le,O={},ue=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(e,t){for(var n in t)e[n]=t[n];return e}function ce(e){var t=e.parentNode;t&&t.removeChild(e)}function I(e,t,n){var o,i,_,l={};for(_ in t)_=="key"?o=t[_]:_=="ref"?i=t[_]:l[_]=t[_];if(arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)l[_]===void 0&&(l[_]=e.defaultProps[_]);return F(e,l,o,i,null)}function F(e,t,n,o,i){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++oe:i};return i==null&&d.vnode!=null&&d.vnode(_),_}function E(e){return e.children}function U(e,t){this.props=e,this.context=t}function $(e,t){if(t==null)return e.__?$(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?$(e):null}function se(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return se(e)}}function V(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!D.__r++||ie!==d.debounceRendering)&&((ie=d.debounceRendering)||re)(D)}function D(){for(var e;D.__r=A.length;)e=A.sort(function(t,n){return t.__v.__b-n.__v.__b}),A=[],e.some(function(t){var n,o,i,_,l,c;t.__d&&(l=(_=(n=t).__v).__e,(c=n.__P)&&(o=[],(i=S({},_)).__v=_.__v+1,z(c,_,i,n.__n,c.ownerSVGElement!==void 0,_.__h!=null?[l]:null,o,l==null?$(_):l,_.__h),me(o,_),_.__e!=l&&se(_)))})}function fe(e,t,n,o,i,_,l,c,a,p){var r,f,u,s,h,w,v,y=o&&o.__k||ue,b=y.length;for(n.__k=[],r=0;r<t.length;r++)if((s=n.__k[r]=(s=t[r])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?F(null,s,null,null,s):Array.isArray(s)?F(E,{children:s},null,null,null):s.__b>0?F(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(u=y[r])===null||u&&s.key==u.key&&s.type===u.type)y[r]=void 0;else for(f=0;f<b;f++){if((u=y[f])&&s.key==u.key&&s.type===u.type){y[f]=void 0;break}u=null}z(e,s,u=u||O,i,_,l,c,a,p),h=s.__e,(f=s.ref)&&u.ref!=f&&(v||(v=[]),u.ref&&v.push(u.ref,null,s),v.push(f,s.__c||h,s)),h!=null?(w==null&&(w=h),typeof s.type=="function"&&s.__k===u.__k?s.__d=a=ae(s,a,e):a=de(e,s,u,y,h,a),typeof n.type=="function"&&(n.__d=a)):a&&u.__e==a&&a.parentNode!=e&&(a=$(u))}for(n.__e=w,r=b;r--;)y[r]!=null&&(typeof n.type=="function"&&y[r].__e!=null&&y[r].__e==n.__d&&(n.__d=$(o,r+1)),be(y[r],y[r]));if(v)for(r=0;r<v.length;r++)ge(v[r],v[++r],v[++r])}function ae(e,t,n){for(var o,i=e.__k,_=0;i&&_<i.length;_++)(o=i[_])&&(o.__=e,t=typeof o.type=="function"?ae(o,t,n):de(n,o,o,i,o.__e,t));return t}function he(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){he(n,t)}):t.push(e)),t}function de(e,t,n,o,i,_){var l,c,a;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=_||i.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(i),l=null;else{for(c=_,a=0;(c=c.nextSibling)&&a<o.length;a+=2)if(c==i)break e;e.insertBefore(i,_),l=_}return l!==void 0?l:i.nextSibling}function Ge(e,t,n,o,i){var _;for(_ in n)_==="children"||_==="key"||_ in t||W(e,_,null,n[_],o);for(_ in t)i&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||W(e,_,t[_],n[_],o)}function pe(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Qe.test(t)?n:n+"px"}function W(e,t,n,o,i){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||pe(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||pe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o||e.addEventListener(t,_?ye:ve,_):e.removeEventListener(t,_?ye:ve,_);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function ve(e){this.l[e.type+!1](d.event?d.event(e):e)}function ye(e){this.l[e.type+!0](d.event?d.event(e):e)}function z(e,t,n,o,i,_,l,c,a){var p,r,f,u,s,h,w,v,y,b,N,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(p=d.__b)&&p(t);try{e:if(typeof k=="function"){if(v=t.props,y=(p=k.contextType)&&o[p.__c],b=p?y?y.props.value:p.__:o,n.__c?w=(r=t.__c=n.__c).__=r.__E:("prototype"in k&&k.prototype.render?t.__c=r=new k(v,b):(t.__c=r=new U(v,b),r.constructor=k,r.render=Ke),y&&y.sub(r),r.props=v,r.state||(r.state={}),r.context=b,r.__n=o,f=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,k.getDerivedStateFromProps(v,r.__s))),u=r.props,s=r.state,f)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==u&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,b),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,b)===!1||t.__v===n.__v){r.props=v,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(q){q&&(q.__=t)}),r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,b),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(u,s,h)})}r.context=b,r.props=v,r.state=r.__s,(p=d.__r)&&p(t),r.__d=!1,r.__v=t,r.__P=e,p=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=S(S({},o),r.getChildContext())),f||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(u,s)),N=p!=null&&p.type===E&&p.key==null?p.props.children:p,fe(e,Array.isArray(N)?N:[N],t,n,o,i,_,l,c,a),r.base=t.__e,t.__h=null,r.__h.length&&l.push(r),w&&(r.__E=r.__=null),r.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Je(n.__e,t,n,o,i,_,l,a);(p=d.diffed)&&p(t)}catch(q){t.__v=null,(a||_!=null)&&(t.__e=c,t.__h=!!a,_[_.indexOf(c)]=null),d.__e(q,t,n)}}function me(e,t){d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){d.__e(o,n.__v)}})}function Je(e,t,n,o,i,_,l,c){var a,p,r,f=n.props,u=t.props,s=t.type,h=0;if(s==="svg"&&(i=!0),_!=null){for(;h<_.length;h++)if((a=_[h])&&"setAttribute"in a==!!s&&(s?a.localName===s:a.nodeType===3)){e=a,_[h]=null;break}}if(e==null){if(s===null)return document.createTextNode(u);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,u.is&&u),_=null,c=!1}if(s===null)f===u||c&&e.data===u||(e.data=u);else{if(_=_&&L.call(e.childNodes),p=(f=n.props||O).dangerouslySetInnerHTML,r=u.dangerouslySetInnerHTML,!c){if(_!=null)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Ge(e,u,f,i,c),r)t.__k=[];else if(h=t.props.children,fe(e,Array.isArray(h)?h:[h],t,n,o,i&&s!=="foreignObject",_,l,_?_[0]:n.__k&&$(n,0),c),_!=null)for(h=_.length;h--;)_[h]!=null&&ce(_[h]);c||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||s==="progress"&&!h||s==="option"&&h!==f.value)&&W(e,"value",h,f.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&W(e,"checked",h,f.checked,!1))}return e}function ge(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){d.__e(o,n)}}function be(e,t,n){var o,i;if(d.unmount&&d.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ge(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){d.__e(_,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&be(o[i],t,typeof e.type!="function");n||e.__e==null||ce(e.__e),e.__e=e.__d=void 0}function Ke(e,t,n){return this.constructor(e,n)}function ke(e,t,n){var o,i,_;d.__&&d.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,_=[],z(t,e=(!o&&n||t).__k=I(E,null,[e]),i||O,O,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?L.call(t.childNodes):null,_,!o&&n?n:i?i.__e:t.firstChild,o),me(_,e)}function Xe(e,t){var n={__c:t="__cC"+le++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,_;return this.getChildContext||(i=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(V)},this.sub=function(l){i.push(l);var c=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),c&&c.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}L=ue.slice,d={__e:function(e,t,n,o){for(var i,_,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(c){e=c}throw e}},oe=0,U.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),V(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),V(this))},U.prototype.render=E,A=[],re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,le=0;var C,g,Se,H=0,we=[],$e=d.__b,Ce=d.__r,Ae=d.diffed,Ee=d.__c,He=d.unmount;function P(e,t){d.__h&&d.__h(g,e,H||t),H=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ye(e){return H=1,Pe(Te,e)}function Pe(e,t,n){var o=P(C++,2);return o.t=e,o.__c||(o.__=[n?n(t):Te(void 0,t),function(i){var _=o.t(o.__[0],i);o.__[0]!==_&&(o.__=[_,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function Ze(e,t){var n=P(C++,3);!d.__s&&G(n.__H,t)&&(n.__=e,n.__H=t,g.__H.__h.push(n))}function et(e,t){var n=P(C++,4);!d.__s&&G(n.__H,t)&&(n.__=e,n.__H=t,g.__h.push(n))}function tt(e){return H=5,B(function(){return{current:e}},[])}function B(e,t){var n=P(C++,7);return G(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function nt(e,t){return H=8,B(function(){return e},t)}function _t(e){var t=g.context[e.__c],n=P(C++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(g)),t.props.value):e.__}function ot(){for(var e;e=we.shift();)if(e.__P)try{e.__H.__h.forEach(x),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){g=null,$e&&$e(e)},d.__r=function(e){Ce&&Ce(e),C=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(x),t.__h.forEach(Q),t.__h=[])},d.diffed=function(e){Ae&&Ae(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(we.push(t)!==1&&Se===d.requestAnimationFrame||((Se=d.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(_),Me&&cancelAnimationFrame(o),setTimeout(n)},_=setTimeout(i,100);Me&&(o=requestAnimationFrame(i))})(ot)),g=null},d.__c=function(e,t){t.some(function(n){try{n.__h.forEach(x),n.__h=n.__h.filter(function(o){return!o.__||Q(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],d.__e(o,n.__v)}}),Ee&&Ee(e,t)},d.unmount=function(e){He&&He(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{x(o)}catch(i){t=i}}),t&&d.__e(t,n.__v))};var Me=typeof requestAnimationFrame=="function";function x(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function Q(e){var t=g;e.__c=e.__(),g=t}function G(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Te(e,t){return typeof t=="function"?t(e):t}const rt=(e,t,n=[],o)=>{_e(e,{init(){this.render()},observedAttributes:n,attributeChanged(){this.render()},disconnected(){o&&o()},render(){let{element:i}=this;ke(I(()=>t(i)),i)}})};return m.$define=_e,m.Fragment=E,m.createContext=Xe,m.define=rt,m.h=I,m.render=ke,m.toChildArray=he,m.useCallback=nt,m.useContext=_t,m.useEffect=Ze,m.useLayoutEffect=et,m.useMemo=B,m.useReducer=Pe,m.useRef=tt,m.useState=Ye,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),m}({});
