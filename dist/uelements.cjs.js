"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var Pe=typeof Promise=="function"?Promise:function(e){let t=[],n=0,o;return e(_=>{o=_,n=1,t.splice(0).forEach(i)}),{then:i};function i(_){return n?setTimeout(_,0,o):t.push(_),this}};const F=!0,q=!1,Q="querySelectorAll";function Me(e){this.observe(e,{subtree:F,childList:F})}const Te=(e,t,n)=>{const o=(_,l,c,a,p)=>{for(let r=0,{length:f}=_;r<f;r++){const s=_[r];(p||Q in s)&&(a?l.has(s)||(l.add(s),c.delete(s),e(s,a)):c.has(s)||(c.add(s),l.delete(s),e(s,a)),p||o(s[Q]("*"),l,c,a,F))}},i=new(n||MutationObserver)(_=>{for(let l=new Set,c=new Set,a=0,{length:p}=_;a<p;a++){const{addedNodes:r,removedNodes:f}=_[a];o(f,l,c,q,q),o(r,l,c,F,q)}});return i.add=Me,i.add(t||document),i},se="querySelectorAll",{document:Le,Element:G,MutationObserver:Oe,Set:Fe,WeakMap:Ue}=self,J=e=>se in e,{filter:K}=[];var De=e=>{const t=new Ue,n=f=>{for(let s=0,{length:u}=f;s<u;s++)t.delete(f[s])},o=()=>{const f=p.takeRecords();for(let s=0,{length:u}=f;s<u;s++)l(K.call(f[s].removedNodes,J),!1),l(K.call(f[s].addedNodes,J),!0)},i=f=>f.matches||f.webkitMatchesSelector||f.msMatchesSelector,_=(f,s)=>{let u;if(s)for(let h,k=i(f),v=0,{length:y}=c;v<y;v++)k.call(f,h=c[v])&&(t.has(f)||t.set(f,new Fe),u=t.get(f),u.has(h)||(u.add(h),e.handle(f,s,h)));else t.has(f)&&(u=t.get(f),t.delete(f),u.forEach(h=>{e.handle(f,s,h)}))},l=(f,s=!0)=>{for(let u=0,{length:h}=f;u<h;u++)_(f[u],s)},{query:c}=e,a=e.root||Le,p=Te(_,a,Oe),{attachShadow:r}=G.prototype;return r&&(G.prototype.attachShadow=function(f){const s=r.call(this,f);return p.add(s),s}),c.length&&l(a[se](c)),{drop:n,flush:o,observer:p,parse:l}};const{create:ce,keys:We}=Object,ue=new WeakMap,Ne=new Set,R=[],fe={},M={},qe=(e,t)=>{for(let n=ue.get(t),o=0,{length:i}=e;o<i;o++){const{target:_,attributeName:l,oldValue:c}=e[o],a=_.getAttribute(l);n.attributeChanged(l,c,a)}},Re=(e,t,n,o)=>{const i=ce(o,{element:{enumerable:!0,value:e}});for(let l=0,{length:c}=n;l<c;l++)e.addEventListener(n[l].t,i,n[l].o);t.set(e,i),i.init&&i.init();const{observedAttributes:_}=o;if(_){const l=new MutationObserver(qe);l.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:_.map(c=>(e.hasAttribute(c)&&i.attributeChanged(c,null,e.getAttribute(c)),c))}),ue.set(l,i)}return i},{drop:rt,flush:je,parse:Ie}=De({query:R,handle(e,t,n){const{m:o,l:i,o:_}=fe[n],l=o.get(e)||Re(e,o,i,_),c=t?"connected":"disconnected";c in l&&l[c]()}}),Ve=(e,t)=>{if(-1<R.indexOf(e))throw new Error("duplicated: "+e);je();const n=[],o=ce(null);for(let i=We(t),_=0,{length:l}=i;_<l;_++){const c=i[_];if(/^on/.test(c)&&!/Options$/.test(c)){const a=t[c+"Options"]||!1,p=c.toLowerCase();let r=p.slice(2);n.push({t:r,o:a}),o[r]=c,p!==c&&(r=c.slice(2,3).toLowerCase()+c.slice(3),o[r]=c,n.push({t:r,o:a}))}}n.length&&(t.handleEvent=function(i){this[o[i.type]](i)}),R.push(e),fe[e]={m:new WeakMap,l:n,o:t},Ie(document.querySelectorAll(e)),ze(e),Ne.has(e)||M[e]._()},ze=e=>{if(!(e in M)){let t,n=new Pe(o=>{t=o});M[e]={_:t,$:n}}return M[e].$};var N,d,ae,$,he,X,de,U={},pe=[],Be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(e,t){for(var n in t)e[n]=t[n];return e}function ve(e){var t=e.parentNode;t&&t.removeChild(e)}function ye(e,t,n){var o,i,_,l={};for(_ in t)_=="key"?o=t[_]:_=="ref"?i=t[_]:l[_]=t[_];if(arguments.length>2&&(l.children=arguments.length>3?N.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)l[_]===void 0&&(l[_]=e.defaultProps[_]);return T(e,l,o,i,null)}function T(e,t,n,o,i){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ae:i};return i==null&&d.vnode!=null&&d.vnode(_),_}function x(e){return e.children}function L(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?w(e):null}function me(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return me(e)}}function j(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!D.__r++||X!==d.debounceRendering)&&((X=d.debounceRendering)||he)(D)}function D(){for(var e;D.__r=$.length;)e=$.sort(function(t,n){return t.__v.__b-n.__v.__b}),$=[],e.some(function(t){var n,o,i,_,l,c;t.__d&&(l=(_=(n=t).__v).__e,(c=n.__P)&&(o=[],(i=S({},_)).__v=_.__v+1,V(c,_,i,n.__n,c.ownerSVGElement!==void 0,_.__h!=null?[l]:null,o,l==null?w(_):l,_.__h),we(o,_),_.__e!=l&&me(_)))})}function ge(e,t,n,o,i,_,l,c,a,p){var r,f,s,u,h,k,v,y=o&&o.__k||pe,g=y.length;for(n.__k=[],r=0;r<t.length;r++)if((u=n.__k[r]=(u=t[r])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?T(null,u,null,null,u):Array.isArray(u)?T(x,{children:u},null,null,null):u.__b>0?T(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(s=y[r])===null||s&&u.key==s.key&&u.type===s.type)y[r]=void 0;else for(f=0;f<g;f++){if((s=y[f])&&u.key==s.key&&u.type===s.type){y[f]=void 0;break}s=null}V(e,u,s=s||U,i,_,l,c,a,p),h=u.__e,(f=u.ref)&&s.ref!=f&&(v||(v=[]),s.ref&&v.push(s.ref,null,u),v.push(f,u.__c||h,u)),h!=null?(k==null&&(k=h),typeof u.type=="function"&&u.__k===s.__k?u.__d=a=be(u,a,e):a=Se(e,u,s,y,h,a),typeof n.type=="function"&&(n.__d=a)):a&&s.__e==a&&a.parentNode!=e&&(a=w(s))}for(n.__e=k,r=g;r--;)y[r]!=null&&(typeof n.type=="function"&&y[r].__e!=null&&y[r].__e==n.__d&&(n.__d=w(o,r+1)),$e(y[r],y[r]));if(v)for(r=0;r<v.length;r++)Ce(v[r],v[++r],v[++r])}function be(e,t,n){for(var o,i=e.__k,_=0;i&&_<i.length;_++)(o=i[_])&&(o.__=e,t=typeof o.type=="function"?be(o,t,n):Se(n,o,o,i,o.__e,t));return t}function ke(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){ke(n,t)}):t.push(e)),t}function Se(e,t,n,o,i,_){var l,c,a;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=_||i.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(i),l=null;else{for(c=_,a=0;(c=c.nextSibling)&&a<o.length;a+=2)if(c==i)break e;e.insertBefore(i,_),l=_}return l!==void 0?l:i.nextSibling}function Qe(e,t,n,o,i){var _;for(_ in n)_==="children"||_==="key"||_ in t||W(e,_,null,n[_],o);for(_ in t)i&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||W(e,_,t[_],n[_],o)}function Y(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Be.test(t)?n:n+"px"}function W(e,t,n,o,i){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Y(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Y(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o||e.addEventListener(t,_?ee:Z,_):e.removeEventListener(t,_?ee:Z,_);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Z(e){this.l[e.type+!1](d.event?d.event(e):e)}function ee(e){this.l[e.type+!0](d.event?d.event(e):e)}function V(e,t,n,o,i,_,l,c,a){var p,r,f,s,u,h,k,v,y,g,H,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(p=d.__b)&&p(t);try{e:if(typeof b=="function"){if(v=t.props,y=(p=b.contextType)&&o[p.__c],g=p?y?y.props.value:p.__:o,n.__c?k=(r=t.__c=n.__c).__=r.__E:("prototype"in b&&b.prototype.render?t.__c=r=new b(v,g):(t.__c=r=new L(v,g),r.constructor=b,r.render=Je),y&&y.sub(r),r.props=v,r.state||(r.state={}),r.context=g,r.__n=o,f=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,b.getDerivedStateFromProps(v,r.__s))),s=r.props,u=r.state,f)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==s&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,g),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,g)===!1||t.__v===n.__v){r.props=v,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,g),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(s,u,h)})}r.context=g,r.props=v,r.state=r.__s,(p=d.__r)&&p(t),r.__d=!1,r.__v=t,r.__P=e,p=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=S(S({},o),r.getChildContext())),f||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(s,u)),H=p!=null&&p.type===x&&p.key==null?p.props.children:p,ge(e,Array.isArray(H)?H:[H],t,n,o,i,_,l,c,a),r.base=t.__e,t.__h=null,r.__h.length&&l.push(r),k&&(r.__E=r.__=null),r.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ge(n.__e,t,n,o,i,_,l,a);(p=d.diffed)&&p(t)}catch(P){t.__v=null,(a||_!=null)&&(t.__e=c,t.__h=!!a,_[_.indexOf(c)]=null),d.__e(P,t,n)}}function we(e,t){d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){d.__e(o,n.__v)}})}function Ge(e,t,n,o,i,_,l,c){var a,p,r,f=n.props,s=t.props,u=t.type,h=0;if(u==="svg"&&(i=!0),_!=null){for(;h<_.length;h++)if((a=_[h])&&"setAttribute"in a==!!u&&(u?a.localName===u:a.nodeType===3)){e=a,_[h]=null;break}}if(e==null){if(u===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,s.is&&s),_=null,c=!1}if(u===null)f===s||c&&e.data===s||(e.data=s);else{if(_=_&&N.call(e.childNodes),p=(f=n.props||U).dangerouslySetInnerHTML,r=s.dangerouslySetInnerHTML,!c){if(_!=null)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Qe(e,s,f,i,c),r)t.__k=[];else if(h=t.props.children,ge(e,Array.isArray(h)?h:[h],t,n,o,i&&u!=="foreignObject",_,l,_?_[0]:n.__k&&w(n,0),c),_!=null)for(h=_.length;h--;)_[h]!=null&&ve(_[h]);c||("value"in s&&(h=s.value)!==void 0&&(h!==e.value||u==="progress"&&!h||u==="option"&&h!==f.value)&&W(e,"value",h,f.value,!1),"checked"in s&&(h=s.checked)!==void 0&&h!==e.checked&&W(e,"checked",h,f.checked,!1))}return e}function Ce(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){d.__e(o,n)}}function $e(e,t,n){var o,i;if(d.unmount&&d.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Ce(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){d.__e(_,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&$e(o[i],t,typeof e.type!="function");n||e.__e==null||ve(e.__e),e.__e=e.__d=void 0}function Je(e,t,n){return this.constructor(e,n)}function Ae(e,t,n){var o,i,_;d.__&&d.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,_=[],V(t,e=(!o&&n||t).__k=ye(x,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?N.call(t.childNodes):null,_,!o&&n?n:i?i.__e:t.firstChild,o),we(_,e)}function Ke(e,t){var n={__c:t="__cC"+de++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,_;return this.getChildContext||(i=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(j)},this.sub=function(l){i.push(l);var c=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),c&&c.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}N=pe.slice,d={__e:function(e,t,n,o){for(var i,_,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(c){e=c}throw e}},ae=0,L.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),j(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),j(this))},L.prototype.render=x,$=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,de=0;var C,m,te,A=0,xe=[],ne=d.__b,_e=d.__r,oe=d.diffed,re=d.__c,ie=d.unmount;function E(e,t){d.__h&&d.__h(m,e,A||t),A=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Xe(e){return A=1,Ee(He,e)}function Ee(e,t,n){var o=E(C++,2);return o.t=e,o.__c||(o.__=[n?n(t):He(void 0,t),function(i){var _=o.t(o.__[0],i);o.__[0]!==_&&(o.__=[_,o.__[1]],o.__c.setState({}))}],o.__c=m),o.__}function Ye(e,t){var n=E(C++,3);!d.__s&&B(n.__H,t)&&(n.__=e,n.__H=t,m.__H.__h.push(n))}function Ze(e,t){var n=E(C++,4);!d.__s&&B(n.__H,t)&&(n.__=e,n.__H=t,m.__h.push(n))}function et(e){return A=5,z(function(){return{current:e}},[])}function z(e,t){var n=E(C++,7);return B(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function tt(e,t){return A=8,z(function(){return e},t)}function nt(e){var t=m.context[e.__c],n=E(C++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(m)),t.props.value):e.__}function _t(){for(var e;e=xe.shift();)if(e.__P)try{e.__H.__h.forEach(O),e.__H.__h.forEach(I),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){m=null,ne&&ne(e)},d.__r=function(e){_e&&_e(e),C=0;var t=(m=e.__c).__H;t&&(t.__h.forEach(O),t.__h.forEach(I),t.__h=[])},d.diffed=function(e){oe&&oe(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(xe.push(t)!==1&&te===d.requestAnimationFrame||((te=d.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(_),le&&cancelAnimationFrame(o),setTimeout(n)},_=setTimeout(i,100);le&&(o=requestAnimationFrame(i))})(_t)),m=null},d.__c=function(e,t){t.some(function(n){try{n.__h.forEach(O),n.__h=n.__h.filter(function(o){return!o.__||I(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],d.__e(o,n.__v)}}),re&&re(e,t)},d.unmount=function(e){ie&&ie(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{O(o)}catch(i){t=i}}),t&&d.__e(t,n.__v))};var le=typeof requestAnimationFrame=="function";function O(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function I(e){var t=m;e.__c=e.__(),m=t}function B(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function He(e,t){return typeof t=="function"?t(e):t}const ot=(e,t,n=[],o)=>{Ve(e,{init(){this.render()},observedAttributes:n,attributeChanged(){this.render()},disconnected(){o&&o()},render(){let{element:i}=this;Ae(t(i),i)}})};exports.Fragment=x;exports.createContext=Ke;exports.define=ot;exports.h=ye;exports.render=Ae;exports.toChildArray=ke;exports.useCallback=tt;exports.useContext=nt;exports.useEffect=Ye;exports.useLayoutEffect=Ze;exports.useMemo=z;exports.useReducer=Ee;exports.useRef=et;exports.useState=Xe;
