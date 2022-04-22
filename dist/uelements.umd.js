(function(y,A){typeof exports=="object"&&typeof module!="undefined"?A(exports):typeof define=="function"&&define.amd?define(["exports"],A):(y=typeof globalThis!="undefined"?globalThis:y||self,A(y.uelements={}))})(this,function(y){"use strict";var A=typeof Promise=="function"?Promise:function(e){let t=[],n=0,o;return e(_=>{o=_,n=1,t.splice(0).forEach(i)}),{then:i};function i(_){return n?setTimeout(_,0,o):t.push(_),this}};const T=!0,j=!1,J="querySelectorAll";function xe(e){this.observe(e,{subtree:T,childList:T})}const Le=(e,t,n)=>{const o=(_,l,u,a,p)=>{for(let r=0,{length:f}=_;r<f;r++){const s=_[r];(p||J in s)&&(a?l.has(s)||(l.add(s),u.delete(s),e(s,a)):u.has(s)||(u.add(s),l.delete(s),e(s,a)),p||o(s[J]("*"),l,u,a,T))}},i=new(n||MutationObserver)(_=>{for(let l=new Set,u=new Set,a=0,{length:p}=_;a<p;a++){const{addedNodes:r,removedNodes:f}=_[a];o(f,l,u,j,j),o(r,l,u,T,j)}});return i.add=xe,i.add(t||document),i},K="querySelectorAll",{document:Oe,Element:X,MutationObserver:Fe,Set:Ue,WeakMap:De}=self,Y=e=>K in e,{filter:Z}=[];var We=e=>{const t=new De,n=f=>{for(let s=0,{length:c}=f;s<c;s++)t.delete(f[s])},o=()=>{const f=p.takeRecords();for(let s=0,{length:c}=f;s<c;s++)l(Z.call(f[s].removedNodes,Y),!1),l(Z.call(f[s].addedNodes,Y),!0)},i=f=>f.matches||f.webkitMatchesSelector||f.msMatchesSelector,_=(f,s)=>{let c;if(s)for(let h,w=i(f),v=0,{length:m}=u;v<m;v++)w.call(f,h=u[v])&&(t.has(f)||t.set(f,new Ue),c=t.get(f),c.has(h)||(c.add(h),e.handle(f,s,h)));else t.has(f)&&(c=t.get(f),t.delete(f),c.forEach(h=>{e.handle(f,s,h)}))},l=(f,s=!0)=>{for(let c=0,{length:h}=f;c<h;c++)_(f[c],s)},{query:u}=e,a=e.root||Oe,p=Le(_,a,Fe),{attachShadow:r}=X.prototype;return r&&(X.prototype.attachShadow=function(f){const s=r.call(this,f);return p.add(s),s}),u.length&&l(a[K](u)),{drop:n,flush:o,observer:p,parse:l}};const{create:ee,keys:Ne}=Object,te=new WeakMap,qe=new Set,I=[],ne={},x={},Re=(e,t)=>{for(let n=te.get(t),o=0,{length:i}=e;o<i;o++){const{target:_,attributeName:l,oldValue:u}=e[o],a=_.getAttribute(l);n.attributeChanged(l,u,a)}},je=(e,t,n,o)=>{const i=ee(o,{element:{enumerable:!0,value:e}});for(let l=0,{length:u}=n;l<u;l++)e.addEventListener(n[l].t,i,n[l].o);t.set(e,i),i.init&&i.init();const{observedAttributes:_}=o;if(_){const l=new MutationObserver(Re);l.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:_.map(u=>(e.hasAttribute(u)&&i.attributeChanged(u,null,e.getAttribute(u)),u))}),te.set(l,i)}return i},{drop:it,flush:Ie,parse:Ve}=We({query:I,handle(e,t,n){const{m:o,l:i,o:_}=ne[n],l=o.get(e)||je(e,o,i,_),u=t?"connected":"disconnected";u in l&&l[u]()}}),ze=(e,t)=>{if(-1<I.indexOf(e))throw new Error("duplicated: "+e);Ie();const n=[],o=ee(null);for(let i=Ne(t),_=0,{length:l}=i;_<l;_++){const u=i[_];if(/^on/.test(u)&&!/Options$/.test(u)){const a=t[u+"Options"]||!1,p=u.toLowerCase();let r=p.slice(2);n.push({t:r,o:a}),o[r]=u,p!==u&&(r=u.slice(2,3).toLowerCase()+u.slice(3),o[r]=u,n.push({t:r,o:a}))}}n.length&&(t.handleEvent=function(i){this[o[i.type]](i)}),I.push(e),ne[e]={m:new WeakMap,l:n,o:t},Ve(document.querySelectorAll(e)),Be(e),qe.has(e)||x[e]._()},Be=e=>{if(!(e in x)){let t,n=new A(o=>{t=o});x[e]={_:t,$:n}}return x[e].$};var L,d,_e,E,oe,re,ie,O={},le=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(e,t){for(var n in t)e[n]=t[n];return e}function se(e){var t=e.parentNode;t&&t.removeChild(e)}function ue(e,t,n){var o,i,_,l={};for(_ in t)_=="key"?o=t[_]:_=="ref"?i=t[_]:l[_]=t[_];if(arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)l[_]===void 0&&(l[_]=e.defaultProps[_]);return F(e,l,o,i,null)}function F(e,t,n,o,i){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++_e:i};return i==null&&d.vnode!=null&&d.vnode(_),_}function H(e){return e.children}function U(e,t){this.props=e,this.context=t}function C(e,t){if(t==null)return e.__?C(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?C(e):null}function ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ce(e)}}function V(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!D.__r++||re!==d.debounceRendering)&&((re=d.debounceRendering)||oe)(D)}function D(){for(var e;D.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,o,i,_,l,u;t.__d&&(l=(_=(n=t).__v).__e,(u=n.__P)&&(o=[],(i=S({},_)).__v=_.__v+1,z(u,_,i,n.__n,u.ownerSVGElement!==void 0,_.__h!=null?[l]:null,o,l==null?C(_):l,_.__h),me(o,_),_.__e!=l&&ce(_)))})}function fe(e,t,n,o,i,_,l,u,a,p){var r,f,s,c,h,w,v,m=o&&o.__k||le,b=m.length;for(n.__k=[],r=0;r<t.length;r++)if((c=n.__k[r]=(c=t[r])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?F(null,c,null,null,c):Array.isArray(c)?F(H,{children:c},null,null,null):c.__b>0?F(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(s=m[r])===null||s&&c.key==s.key&&c.type===s.type)m[r]=void 0;else for(f=0;f<b;f++){if((s=m[f])&&c.key==s.key&&c.type===s.type){m[f]=void 0;break}s=null}z(e,c,s=s||O,i,_,l,u,a,p),h=c.__e,(f=c.ref)&&s.ref!=f&&(v||(v=[]),s.ref&&v.push(s.ref,null,c),v.push(f,c.__c||h,c)),h!=null?(w==null&&(w=h),typeof c.type=="function"&&c.__k===s.__k?c.__d=a=ae(c,a,e):a=de(e,c,s,m,h,a),typeof n.type=="function"&&(n.__d=a)):a&&s.__e==a&&a.parentNode!=e&&(a=C(s))}for(n.__e=w,r=b;r--;)m[r]!=null&&(typeof n.type=="function"&&m[r].__e!=null&&m[r].__e==n.__d&&(n.__d=C(o,r+1)),be(m[r],m[r]));if(v)for(r=0;r<v.length;r++)ge(v[r],v[++r],v[++r])}function ae(e,t,n){for(var o,i=e.__k,_=0;i&&_<i.length;_++)(o=i[_])&&(o.__=e,t=typeof o.type=="function"?ae(o,t,n):de(n,o,o,i,o.__e,t));return t}function he(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){he(n,t)}):t.push(e)),t}function de(e,t,n,o,i,_){var l,u,a;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=_||i.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(i),l=null;else{for(u=_,a=0;(u=u.nextSibling)&&a<o.length;a+=2)if(u==i)break e;e.insertBefore(i,_),l=_}return l!==void 0?l:i.nextSibling}function Ge(e,t,n,o,i){var _;for(_ in n)_==="children"||_==="key"||_ in t||W(e,_,null,n[_],o);for(_ in t)i&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||W(e,_,t[_],n[_],o)}function pe(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Qe.test(t)?n:n+"px"}function W(e,t,n,o,i){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||pe(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||pe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o||e.addEventListener(t,_?ye:ve,_):e.removeEventListener(t,_?ye:ve,_);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function ve(e){this.l[e.type+!1](d.event?d.event(e):e)}function ye(e){this.l[e.type+!0](d.event?d.event(e):e)}function z(e,t,n,o,i,_,l,u,a){var p,r,f,s,c,h,w,v,m,b,q,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,u=t.__e=n.__e,t.__h=null,_=[u]),(p=d.__b)&&p(t);try{e:if(typeof k=="function"){if(v=t.props,m=(p=k.contextType)&&o[p.__c],b=p?m?m.props.value:p.__:o,n.__c?w=(r=t.__c=n.__c).__=r.__E:("prototype"in k&&k.prototype.render?t.__c=r=new k(v,b):(t.__c=r=new U(v,b),r.constructor=k,r.render=Ke),m&&m.sub(r),r.props=v,r.state||(r.state={}),r.context=b,r.__n=o,f=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,k.getDerivedStateFromProps(v,r.__s))),s=r.props,c=r.state,f)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==s&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,b),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,b)===!1||t.__v===n.__v){r.props=v,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(R){R&&(R.__=t)}),r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,b),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(s,c,h)})}r.context=b,r.props=v,r.state=r.__s,(p=d.__r)&&p(t),r.__d=!1,r.__v=t,r.__P=e,p=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=S(S({},o),r.getChildContext())),f||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(s,c)),q=p!=null&&p.type===H&&p.key==null?p.props.children:p,fe(e,Array.isArray(q)?q:[q],t,n,o,i,_,l,u,a),r.base=t.__e,t.__h=null,r.__h.length&&l.push(r),w&&(r.__E=r.__=null),r.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Je(n.__e,t,n,o,i,_,l,a);(p=d.diffed)&&p(t)}catch(R){t.__v=null,(a||_!=null)&&(t.__e=u,t.__h=!!a,_[_.indexOf(u)]=null),d.__e(R,t,n)}}function me(e,t){d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){d.__e(o,n.__v)}})}function Je(e,t,n,o,i,_,l,u){var a,p,r,f=n.props,s=t.props,c=t.type,h=0;if(c==="svg"&&(i=!0),_!=null){for(;h<_.length;h++)if((a=_[h])&&"setAttribute"in a==!!c&&(c?a.localName===c:a.nodeType===3)){e=a,_[h]=null;break}}if(e==null){if(c===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,s.is&&s),_=null,u=!1}if(c===null)f===s||u&&e.data===s||(e.data=s);else{if(_=_&&L.call(e.childNodes),p=(f=n.props||O).dangerouslySetInnerHTML,r=s.dangerouslySetInnerHTML,!u){if(_!=null)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Ge(e,s,f,i,u),r)t.__k=[];else if(h=t.props.children,fe(e,Array.isArray(h)?h:[h],t,n,o,i&&c!=="foreignObject",_,l,_?_[0]:n.__k&&C(n,0),u),_!=null)for(h=_.length;h--;)_[h]!=null&&se(_[h]);u||("value"in s&&(h=s.value)!==void 0&&(h!==e.value||c==="progress"&&!h||c==="option"&&h!==f.value)&&W(e,"value",h,f.value,!1),"checked"in s&&(h=s.checked)!==void 0&&h!==e.checked&&W(e,"checked",h,f.checked,!1))}return e}function ge(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){d.__e(o,n)}}function be(e,t,n){var o,i;if(d.unmount&&d.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ge(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){d.__e(_,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&be(o[i],t,typeof e.type!="function");n||e.__e==null||se(e.__e),e.__e=e.__d=void 0}function Ke(e,t,n){return this.constructor(e,n)}function ke(e,t,n){var o,i,_;d.__&&d.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,_=[],z(t,e=(!o&&n||t).__k=ue(H,null,[e]),i||O,O,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?L.call(t.childNodes):null,_,!o&&n?n:i?i.__e:t.firstChild,o),me(_,e)}function Xe(e,t){var n={__c:t="__cC"+ie++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,_;return this.getChildContext||(i=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(V)},this.sub=function(l){i.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),u&&u.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}L=le.slice,d={__e:function(e,t,n,o){for(var i,_,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(u){e=u}throw e}},_e=0,U.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),V(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),V(this))},U.prototype.render=H,E=[],oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,ie=0;var $,g,Se,P=0,we=[],Ce=d.__b,$e=d.__r,Ae=d.diffed,Ee=d.__c,He=d.unmount;function M(e,t){d.__h&&d.__h(g,e,P||t),P=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ye(e){return P=1,Pe(Te,e)}function Pe(e,t,n){var o=M($++,2);return o.t=e,o.__c||(o.__=[n?n(t):Te(void 0,t),function(i){var _=o.t(o.__[0],i);o.__[0]!==_&&(o.__=[_,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function Ze(e,t){var n=M($++,3);!d.__s&&G(n.__H,t)&&(n.__=e,n.__H=t,g.__H.__h.push(n))}function et(e,t){var n=M($++,4);!d.__s&&G(n.__H,t)&&(n.__=e,n.__H=t,g.__h.push(n))}function tt(e){return P=5,B(function(){return{current:e}},[])}function B(e,t){var n=M($++,7);return G(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function nt(e,t){return P=8,B(function(){return e},t)}function _t(e){var t=g.context[e.__c],n=M($++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(g)),t.props.value):e.__}function ot(){for(var e;e=we.shift();)if(e.__P)try{e.__H.__h.forEach(N),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){g=null,Ce&&Ce(e)},d.__r=function(e){$e&&$e(e),$=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(N),t.__h.forEach(Q),t.__h=[])},d.diffed=function(e){Ae&&Ae(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(we.push(t)!==1&&Se===d.requestAnimationFrame||((Se=d.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(_),Me&&cancelAnimationFrame(o),setTimeout(n)},_=setTimeout(i,100);Me&&(o=requestAnimationFrame(i))})(ot)),g=null},d.__c=function(e,t){t.some(function(n){try{n.__h.forEach(N),n.__h=n.__h.filter(function(o){return!o.__||Q(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],d.__e(o,n.__v)}}),Ee&&Ee(e,t)},d.unmount=function(e){He&&He(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{N(o)}catch(i){t=i}}),t&&d.__e(t,n.__v))};var Me=typeof requestAnimationFrame=="function";function N(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function Q(e){var t=g;e.__c=e.__(),g=t}function G(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Te(e,t){return typeof t=="function"?t(e):t}const rt=(e,t,n=[],o)=>{ze(e,{init(){this.render()},observedAttributes:n,attributeChanged(){this.render()},disconnected(){o&&o()},render(){let{element:i}=this;ke(t(i),i)}})};y.Fragment=H,y.createContext=Xe,y.define=rt,y.h=ue,y.render=ke,y.toChildArray=he,y.useCallback=nt,y.useContext=_t,y.useEffect=Ze,y.useLayoutEffect=et,y.useMemo=B,y.useReducer=Pe,y.useRef=tt,y.useState=Ye,Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
