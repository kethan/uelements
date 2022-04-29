(function(v,C){typeof exports=="object"&&typeof module!="undefined"?C(exports):typeof define=="function"&&define.amd?define(["exports"],C):(v=typeof globalThis!="undefined"?globalThis:v||self,C(v.uelements={}))})(this,function(v){"use strict";const C=new Set,O=new Map;new window.MutationObserver(e=>{for(const t of e)if(t.type==="attributes"){const{target:_,attributeName:n,oldValue:i}=t;if(O.has(_)){let[o,u]=O.get(_);if(u.includes(n)||u.length==0){const a=_.getAttribute(n);o(n,i,a,_)}}}C.forEach(t=>t())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function xe(e,t){setTimeout(_),C.add(_);function _(){document.querySelectorAll(e).forEach(n=>{if(!O.has(n)){const{connected:i=()=>{},disconnected:o=()=>{},attributeChanged:u=()=>{},observedAttributes:a=[]}=t(n);O.set(n,[u,a]),i(),Me(e,n,()=>o())}})}}function Me(e,t,_){setTimeout(n),C.add(n);function n(){t&&document.contains(t)&&t.matches(e)||(O.delete(t),C.delete(n),_())}}var N,l,K,T,Q,Y,X,L={},ee=[],Ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,t){for(var _ in t)e[_]=t[_];return e}function te(e){var t=e.parentNode;t&&t.removeChild(e)}function A(e,t,_){var n,i,o,u={};for(o in t)o=="key"?n=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return D(e,u,n,i,null)}function D(e,t,_,n,i){var o={type:e,props:t,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++K:i};return i==null&&l.vnode!=null&&l.vnode(o),o}function S(e){return e.children}function $(e,t){this.props=e,this.context=t}function E(e,t){if(t==null)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?E(e):null}function _e(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return _e(e)}}function B(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!F.__r++||Y!==l.debounceRendering)&&((Y=l.debounceRendering)||Q)(F)}function F(){for(var e;F.__r=T.length;)e=T.sort(function(t,_){return t.__v.__b-_.__v.__b}),T=[],e.some(function(t){var _,n,i,o,u,a;t.__d&&(u=(o=(_=t).__v).__e,(a=_.__P)&&(n=[],(i=P({},o)).__v=o.__v+1,I(a,o,i,_.__n,a.ownerSVGElement!==void 0,o.__h!=null?[u]:null,n,u==null?E(o):u,o.__h),ce(n,o),o.__e!=u&&_e(o)))})}function ne(e,t,_,n,i,o,u,a,d,p){var r,h,f,c,s,w,m,y=n&&n.__k||ee,g=y.length;for(_.__k=[],r=0;r<t.length;r++)if((c=_.__k[r]=(c=t[r])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?D(null,c,null,null,c):Array.isArray(c)?D(S,{children:c},null,null,null):c.__b>0?D(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=_,c.__b=_.__b+1,(f=y[r])===null||f&&c.key==f.key&&c.type===f.type)y[r]=void 0;else for(h=0;h<g;h++){if((f=y[h])&&c.key==f.key&&c.type===f.type){y[h]=void 0;break}f=null}I(e,c,f=f||L,i,o,u,a,d,p),s=c.__e,(h=c.ref)&&f.ref!=h&&(m||(m=[]),f.ref&&m.push(f.ref,null,c),m.push(h,c.__c||s,c)),s!=null?(w==null&&(w=s),typeof c.type=="function"&&c.__k===f.__k?c.__d=d=oe(c,d,e):d=re(e,c,f,y,s,d),typeof _.type=="function"&&(_.__d=d)):d&&f.__e==d&&d.parentNode!=e&&(d=E(f))}for(_.__e=w,r=g;r--;)y[r]!=null&&(typeof _.type=="function"&&y[r].__e!=null&&y[r].__e==_.__d&&(_.__d=E(n,r+1)),ae(y[r],y[r]));if(m)for(r=0;r<m.length;r++)fe(m[r],m[++r],m[++r])}function oe(e,t,_){for(var n,i=e.__k,o=0;i&&o<i.length;o++)(n=i[o])&&(n.__=e,t=typeof n.type=="function"?oe(n,t,_):re(_,n,n,i,n.__e,t));return t}function U(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(_){U(_,t)}):t.push(e)),t}function re(e,t,_,n,i,o){var u,a,d;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(_==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),u=null;else{for(a=o,d=0;(a=a.nextSibling)&&d<n.length;d+=2)if(a==i)break e;e.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function Le(e,t,_,n,i){var o;for(o in _)o==="children"||o==="key"||o in t||W(e,o,null,_[o],n);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||_[o]===t[o]||W(e,o,t[o],_[o],n)}function ie(e,t,_){t[0]==="-"?e.setProperty(t,_):e[t]=_==null?"":typeof _!="number"||Ne.test(t)?_:_+"px"}function W(e,t,_,n,i){var o;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)_&&t in _||ie(e.style,t,"");if(_)for(t in _)n&&_[t]===n[t]||ie(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=_,_?n||e.addEventListener(t,o?le:ue,o):e.removeEventListener(t,o?le:ue,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_==null?"":_;break e}catch{}typeof _=="function"||(_!=null&&(_!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,_):e.removeAttribute(t))}}function ue(e){this.l[e.type+!1](l.event?l.event(e):e)}function le(e){this.l[e.type+!0](l.event?l.event(e):e)}function I(e,t,_,n,i,o,u,a,d){var p,r,h,f,c,s,w,m,y,g,z,k=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(d=_.__h,a=t.__e=_.__e,t.__h=null,o=[a]),(p=l.__b)&&p(t);try{e:if(typeof k=="function"){if(m=t.props,y=(p=k.contextType)&&n[p.__c],g=p?y?y.props.value:p.__:n,_.__c?w=(r=t.__c=_.__c).__=r.__E:("prototype"in k&&k.prototype.render?t.__c=r=new k(m,g):(t.__c=r=new $(m,g),r.constructor=k,r.render=Fe),y&&y.sub(r),r.props=m,r.state||(r.state={}),r.context=g,r.__n=n,h=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=P({},r.__s)),P(r.__s,k.getDerivedStateFromProps(m,r.__s))),f=r.props,c=r.state,h)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&m!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(m,g),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(m,r.__s,g)===!1||t.__v===_.__v){r.props=m,r.state=r.__s,t.__v!==_.__v&&(r.__d=!1),r.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(q){q&&(q.__=t)}),r.__h.length&&u.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(m,r.__s,g),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,c,s)})}r.context=g,r.props=m,r.state=r.__s,(p=l.__r)&&p(t),r.__d=!1,r.__v=t,r.__P=e,p=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(n=P(P({},n),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(s=r.getSnapshotBeforeUpdate(f,c)),z=p!=null&&p.type===S&&p.key==null?p.props.children:p,ne(e,Array.isArray(z)?z:[z],t,_,n,i,o,u,a,d),r.base=t.__e,t.__h=null,r.__h.length&&u.push(r),w&&(r.__E=r.__=null),r.__e=!1}else o==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=De(_.__e,t,_,n,i,o,u,d);(p=l.diffed)&&p(t)}catch(q){t.__v=null,(d||o!=null)&&(t.__e=a,t.__h=!!d,o[o.indexOf(a)]=null),l.__e(q,t,_)}}function ce(e,t){l.__c&&l.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(n){n.call(_)})}catch(n){l.__e(n,_.__v)}})}function De(e,t,_,n,i,o,u,a){var d,p,r,h=_.props,f=t.props,c=t.type,s=0;if(c==="svg"&&(i=!0),o!=null){for(;s<o.length;s++)if((d=o[s])&&"setAttribute"in d==!!c&&(c?d.localName===c:d.nodeType===3)){e=d,o[s]=null;break}}if(e==null){if(c===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,f.is&&f),o=null,a=!1}if(c===null)h===f||a&&e.data===f||(e.data=f);else{if(o=o&&N.call(e.childNodes),p=(h=_.props||L).dangerouslySetInnerHTML,r=f.dangerouslySetInnerHTML,!a){if(o!=null)for(h={},s=0;s<e.attributes.length;s++)h[e.attributes[s].name]=e.attributes[s].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Le(e,f,h,i,a),r)t.__k=[];else if(s=t.props.children,ne(e,Array.isArray(s)?s:[s],t,_,n,i&&c!=="foreignObject",o,u,o?o[0]:_.__k&&E(_,0),a),o!=null)for(s=o.length;s--;)o[s]!=null&&te(o[s]);a||("value"in f&&(s=f.value)!==void 0&&(s!==e.value||c==="progress"&&!s||c==="option"&&s!==h.value)&&W(e,"value",s,h.value,!1),"checked"in f&&(s=f.checked)!==void 0&&s!==e.checked&&W(e,"checked",s,h.checked,!1))}return e}function fe(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(n){l.__e(n,_)}}function ae(e,t,_){var n,i;if(l.unmount&&l.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||fe(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){l.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&ae(n[i],t,typeof e.type!="function");_||e.__e==null||te(e.__e),e.__e=e.__d=void 0}function Fe(e,t,_){return this.constructor(e,_)}function se(e,t,_){var n,i,o;l.__&&l.__(e,t),i=(n=typeof _=="function")?null:_&&_.__k||t.__k,o=[],I(t,e=(!n&&_||t).__k=A(S,null,[e]),i||L,L,t.ownerSVGElement!==void 0,!n&&_?[_]:i?null:t.firstChild?N.call(t.childNodes):null,o,!n&&_?_:i?i.__e:t.firstChild,n),ce(o,e)}function We(e,t){var _={__c:t="__cC"+X++,__:e,Consumer:function(n,i){return n.children(i)},Provider:function(n){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&i.some(B)},this.sub=function(u){i.push(u);var a=u.componentWillUnmount;u.componentWillUnmount=function(){i.splice(i.indexOf(u),1),a&&a.call(u)}}),n.children}};return _.Provider.__=_.Consumer.contextType=_}N=ee.slice,l={__e:function(e,t,_,n){for(var i,o,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),u=i.__d),u)return i.__E=i}catch(a){e=a}throw e}},K=0,$.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},_),this.props)),e&&P(_,e),e!=null&&this.__v&&(t&&this.__h.push(t),B(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),B(this))},$.prototype.render=S,T=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F.__r=0,X=0;var H,b,pe,x=0,de=[],he=l.__b,ve=l.__r,me=l.diffed,ye=l.__c,be=l.unmount;function M(e,t){l.__h&&l.__h(b,e,x||t),x=0;var _=b.__H||(b.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({}),_.__[e]}function Re(e){return x=1,ge($e,e)}function ge(e,t,_){var n=M(H++,2);return n.t=e,n.__c||(n.__=[_?_(t):$e(void 0,t),function(i){var o=n.t(n.__[0],i);n.__[0]!==o&&(n.__=[o,n.__[1]],n.__c.setState({}))}],n.__c=b),n.__}function Ve(e,t){var _=M(H++,3);!l.__s&&J(_.__H,t)&&(_.__=e,_.__H=t,b.__H.__h.push(_))}function je(e,t){var _=M(H++,4);!l.__s&&J(_.__H,t)&&(_.__=e,_.__H=t,b.__h.push(_))}function ze(e){return x=5,Z(function(){return{current:e}},[])}function Z(e,t){var _=M(H++,7);return J(_.__H,t)&&(_.__=e(),_.__H=t,_.__h=e),_.__}function qe(e,t){return x=8,Z(function(){return e},t)}function Be(e){var t=b.context[e.__c],_=M(H++,9);return _.c=e,t?(_.__==null&&(_.__=!0,t.sub(b)),t.props.value):e.__}function Ie(){for(var e;e=de.shift();)if(e.__P)try{e.__H.__h.forEach(R),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}l.__b=function(e){b=null,he&&he(e)},l.__r=function(e){ve&&ve(e),H=0;var t=(b=e.__c).__H;t&&(t.__h.forEach(R),t.__h.forEach(G),t.__h=[])},l.diffed=function(e){me&&me(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(de.push(t)!==1&&pe===l.requestAnimationFrame||((pe=l.requestAnimationFrame)||function(_){var n,i=function(){clearTimeout(o),ke&&cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(i,100);ke&&(n=requestAnimationFrame(i))})(Ie)),b=null},l.__c=function(e,t){t.some(function(_){try{_.__h.forEach(R),_.__h=_.__h.filter(function(n){return!n.__||G(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],l.__e(n,_.__v)}}),ye&&ye(e,t)},l.unmount=function(e){be&&be(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{R(n)}catch(i){t=i}}),t&&l.__e(t,_.__v))};var ke=typeof requestAnimationFrame=="function";function R(e){var t=b,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),b=t}function G(e){var t=b;e.__c=e.__(),b=t}function J(e,t){return!e||e.length!==t.length||t.some(function(_,n){return _!==e[n]})}function $e(e,t){return typeof t=="function"?t(e):t}function Ze(e,t){for(var _ in t)e[_]=t[_];return e}function Ce(e,t){for(var _ in e)if(_!=="__source"&&!(_ in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function Pe(e){this.props=e}(Pe.prototype=new $).isPureReactComponent=!0,Pe.prototype.shouldComponentUpdate=function(e,t){return Ce(this.props,e)||Ce(this.state,t)};var we=l.__b;l.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),we&&we(e)};var Ge=l.__e;l.__e=function(e,t,_,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=_.__e,t.__k=_.__k),i.__c(e,t)}Ge(e,t,_,n)};var Se=l.unmount;function V(){this.__u=0,this.t=null,this.__b=null}function Ae(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Je(e){var t,_,n;function i(o){if(t||(t=e()).then(function(u){_=u.default||u},function(u){n=u}),n)throw n;if(!_)throw t;return A(_,o)}return i.displayName="Lazy",i.__f=!0,i}function j(){this.u=null,this.o=null}l.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Se&&Se(e)},(V.prototype=new $).__c=function(e,t){var _=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(_);var i=Ae(n.__v),o=!1,u=function(){o||(o=!0,_.__R=null,i?i(a):a())};_.__R=u;var a=function(){if(!--n.__u){if(n.state.__e){var p=n.state.__e;n.__v.__k[0]=function h(f,c,s){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(w){return h(w,c,s)}),f.__c&&f.__c.__P===c&&(f.__e&&s.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=s)),f}(p,p.__c.__P,p.__c.__O)}var r;for(n.setState({__e:n.__b=null});r=n.t.pop();)r.forceUpdate()}},d=t.__h===!0;n.__u++||d||n.setState({__e:n.__b=n.__v.__k[0]}),e.then(u,u)},V.prototype.componentWillUnmount=function(){this.t=[]},V.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var _=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=function o(u,a,d){return u&&(u.__c&&u.__c.__H&&(u.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),u.__c.__H=null),(u=Ze({},u)).__c!=null&&(u.__c.__P===d&&(u.__c.__P=a),u.__c=null),u.__k=u.__k&&u.__k.map(function(p){return o(p,a,d)})),u}(this.__b,_,n.__O=n.__P)}this.__b=null}var i=t.__e&&A(S,null,e.fallback);return i&&(i.__h=null),[A(S,null,t.__e?null:e.children),i]};var Ee=function(e,t,_){if(++_[1]===_[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(_=e.u;_;){for(;_.length>3;)_.pop()();if(_[1]<_[0])break;e.u=_=_[2]}};(j.prototype=new $).__e=function(e){var t=this,_=Ae(t.__v),n=t.o.get(e);return n[0]++,function(i){var o=function(){t.props.revealOrder?(n.push(i),Ee(t,e,n)):i()};_?_(o):o()}},j.prototype.render=function(e){this.u=null,this.o=new Map;var t=U(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var _=t.length;_--;)this.o.set(t[_],this.u=[1,0,this.u]);return e.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,_){Ee(e,_,t)})};var Ke=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Qe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ye=typeof document!="undefined",Xe=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};$.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty($.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var He=l.event;function et(){}function tt(){return this.cancelBubble}function _t(){return this.defaultPrevented}l.event=function(e){return He&&(e=He(e)),e.persist=et,e.isPropagationStopped=tt,e.isDefaultPrevented=_t,e.nativeEvent=e};var Oe={configurable:!0,get:function(){return this.class}},Te=l.vnode;l.vnode=function(e){var t=e.type,_=e.props,n=_;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in n={},_){var u=_[o];Ye&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in _&&u==null||(o==="defaultValue"&&"value"in _&&_.value==null?o="value":o==="download"&&u===!0?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Xe(_.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&Qe.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():u===null&&(u=void 0),n[o]=u)}t=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=U(_.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),t=="select"&&n.defaultValue!=null&&(n.value=U(_.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),e.props=n,_.class!=_.className&&(Oe.enumerable="className"in _,_.className!=null&&(n.class=_.className),Object.defineProperty(n,"className",Oe))}e.$$typeof=Ke,Te&&Te(e)};var Ue=l.__r;l.__r=function(e){Ue&&Ue(e)};const nt=(e,t,_=[],n)=>{const i=o=>se(A(()=>t(o)),o);xe(e,o=>({connected:()=>i(o),disconnected:()=>n&&n(),attributeChanged:()=>i(o),observedAttributes:_}))};v.Fragment=S,v.Suspense=V,v.createContext=We,v.define=nt,v.h=A,v.lazy=Je,v.render=se,v.toChildArray=U,v.useCallback=qe,v.useContext=Be,v.useEffect=Ve,v.useLayoutEffect=je,v.useMemo=Z,v.useReducer=ge,v.useRef=ze,v.useState=Re,Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
