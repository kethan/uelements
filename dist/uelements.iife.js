var uelements=function(v){"use strict";var P,y,Z,A,ee,te,O={},ne=[],We=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var o in t)e[o]=t[o];return e}function oe(e){var t=e.parentNode;t&&t.removeChild(e)}function L(e,t,o){var _,s,n,l={};for(n in t)n=="key"?_=t[n]:n=="ref"?s=t[n]:l[n]=t[n];if(arguments.length>2&&(l.children=arguments.length>3?P.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)l[n]===void 0&&(l[n]=e.defaultProps[n]);return D(e,l,_,s,null)}function D(e,t,o,_,s){var n={type:e,props:t,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++Z:s};return s==null&&y.vnode!=null&&y.vnode(n),n}function $(e){return e.children}function T(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?w(e):null}function _e(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return _e(e)}}function re(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!N.__r++||te!==y.debounceRendering)&&((te=y.debounceRendering)||ee)(N)}function N(){for(var e;N.__r=A.length;)e=A.sort(function(t,o){return t.__v.__b-o.__v.__b}),A=[],e.some(function(t){var o,_,s,n,l,i;t.__d&&(l=(n=(o=t).__v).__e,(i=o.__P)&&(_=[],(s=k({},n)).__v=n.__v+1,z(i,n,s,o.__n,i.ownerSVGElement!==void 0,n.__h!=null?[l]:null,_,l==null?w(n):l,n.__h),ae(_,n),n.__e!=l&&_e(n)))})}function se(e,t,o,_,s,n,l,i,f,d){var r,a,c,u,h,S,p,g=_&&_.__k||ne,m=g.length;for(o.__k=[],r=0;r<t.length;r++)if((u=o.__k[r]=(u=t[r])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?D(null,u,null,null,u):Array.isArray(u)?D($,{children:u},null,null,null):u.__b>0?D(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=o,u.__b=o.__b+1,(c=g[r])===null||c&&u.key==c.key&&u.type===c.type)g[r]=void 0;else for(a=0;a<m;a++){if((c=g[a])&&u.key==c.key&&u.type===c.type){g[a]=void 0;break}c=null}z(e,u,c=c||O,s,n,l,i,f,d),h=u.__e,(a=u.ref)&&c.ref!=a&&(p||(p=[]),c.ref&&p.push(c.ref,null,u),p.push(a,u.__c||h,u)),h!=null?(S==null&&(S=h),typeof u.type=="function"&&u.__k===c.__k?u.__d=f=le(u,f,e):f=ie(e,u,c,g,h,f),typeof o.type=="function"&&(o.__d=f)):f&&c.__e==f&&f.parentNode!=e&&(f=w(c))}for(o.__e=S,r=m;r--;)g[r]!=null&&(typeof o.type=="function"&&g[r].__e!=null&&g[r].__e==o.__d&&(o.__d=w(_,r+1)),he(g[r],g[r]));if(p)for(r=0;r<p.length;r++)de(p[r],p[++r],p[++r])}function le(e,t,o){for(var _,s=e.__k,n=0;s&&n<s.length;n++)(_=s[n])&&(_.__=e,t=typeof _.type=="function"?le(_,t,o):ie(o,_,_,s,_.__e,t));return t}function ie(e,t,o,_,s,n){var l,i,f;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(o==null||s!=n||s.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(s),l=null;else{for(i=n,f=0;(i=i.nextSibling)&&f<_.length;f+=2)if(i==s)break e;e.insertBefore(s,n),l=n}return l!==void 0?l:s.nextSibling}function Ue(e,t,o,_,s){var n;for(n in o)n==="children"||n==="key"||n in t||W(e,n,null,o[n],_);for(n in t)s&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||o[n]===t[n]||W(e,n,t[n],o[n],_)}function ce(e,t,o){t[0]==="-"?e.setProperty(t,o):e[t]=o==null?"":typeof o!="number"||We.test(t)?o:o+"px"}function W(e,t,o,_,s){var n;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)o&&t in o||ce(e.style,t,"");if(o)for(t in o)_&&o[t]===_[t]||ce(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=o,o?_||e.addEventListener(t,n?fe:ue,n):e.removeEventListener(t,n?fe:ue,n);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=o==null?"":o;break e}catch{}typeof o=="function"||(o!=null&&(o!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,o):e.removeAttribute(t))}}function ue(e){this.l[e.type+!1](y.event?y.event(e):e)}function fe(e){this.l[e.type+!0](y.event?y.event(e):e)}function z(e,t,o,_,s,n,l,i,f){var d,r,a,c,u,h,S,p,g,m,x,b=t.type;if(t.constructor!==void 0)return null;o.__h!=null&&(f=o.__h,i=t.__e=o.__e,t.__h=null,n=[i]),(d=y.__b)&&d(t);try{e:if(typeof b=="function"){if(p=t.props,g=(d=b.contextType)&&_[d.__c],m=d?g?g.props.value:d.__:_,o.__c?S=(r=t.__c=o.__c).__=r.__E:("prototype"in b&&b.prototype.render?t.__c=r=new b(p,m):(t.__c=r=new T(p,m),r.constructor=b,r.render=Fe),g&&g.sub(r),r.props=p,r.state||(r.state={}),r.context=m,r.__n=_,a=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=k({},r.__s)),k(r.__s,b.getDerivedStateFromProps(p,r.__s))),c=r.props,u=r.state,a)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&p!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,m),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,m)===!1||t.__v===o.__v){r.props=p,r.state=r.__s,t.__v!==o.__v&&(r.__d=!1),r.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(V){V&&(V.__=t)}),r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,m),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,u,h)})}r.context=m,r.props=p,r.state=r.__s,(d=y.__r)&&d(t),r.__d=!1,r.__v=t,r.__P=e,d=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(_=k(k({},_),r.getChildContext())),a||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(c,u)),x=d!=null&&d.type===$&&d.key==null?d.props.children:d,se(e,Array.isArray(x)?x:[x],t,o,_,s,n,l,i,f),r.base=t.__e,t.__h=null,r.__h.length&&l.push(r),S&&(r.__E=r.__=null),r.__e=!1}else n==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=Re(o.__e,t,o,_,s,n,l,f);(d=y.diffed)&&d(t)}catch(V){t.__v=null,(f||n!=null)&&(t.__e=i,t.__h=!!f,n[n.indexOf(i)]=null),y.__e(V,t,o)}}function ae(e,t){y.__c&&y.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(_){_.call(o)})}catch(_){y.__e(_,o.__v)}})}function Re(e,t,o,_,s,n,l,i){var f,d,r,a=o.props,c=t.props,u=t.type,h=0;if(u==="svg"&&(s=!0),n!=null){for(;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!u&&(u?f.localName===u:f.nodeType===3)){e=f,n[h]=null;break}}if(e==null){if(u===null)return document.createTextNode(c);e=s?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,c.is&&c),n=null,i=!1}if(u===null)a===c||i&&e.data===c||(e.data=c);else{if(n=n&&P.call(e.childNodes),d=(a=o.props||O).dangerouslySetInnerHTML,r=c.dangerouslySetInnerHTML,!i){if(n!=null)for(a={},h=0;h<e.attributes.length;h++)a[e.attributes[h].name]=e.attributes[h].value;(r||d)&&(r&&(d&&r.__html==d.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Ue(e,c,a,s,i),r)t.__k=[];else if(h=t.props.children,se(e,Array.isArray(h)?h:[h],t,o,_,s&&u!=="foreignObject",n,l,n?n[0]:o.__k&&w(o,0),i),n!=null)for(h=n.length;h--;)n[h]!=null&&oe(n[h]);i||("value"in c&&(h=c.value)!==void 0&&(h!==e.value||u==="progress"&&!h||u==="option"&&h!==a.value)&&W(e,"value",h,a.value,!1),"checked"in c&&(h=c.checked)!==void 0&&h!==e.checked&&W(e,"checked",h,a.checked,!1))}return e}function de(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(_){y.__e(_,o)}}function he(e,t,o){var _,s;if(y.unmount&&y.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||de(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){y.__e(n,t)}_.base=_.__P=null}if(_=e.__k)for(s=0;s<_.length;s++)_[s]&&he(_[s],t,typeof e.type!="function");o||e.__e==null||oe(e.__e),e.__e=e.__d=void 0}function Fe(e,t,o){return this.constructor(e,o)}function pe(e,t,o){var _,s,n;y.__&&y.__(e,t),s=(_=typeof o=="function")?null:o&&o.__k||t.__k,n=[],z(t,e=(!_&&o||t).__k=L($,null,[e]),s||O,O,t.ownerSVGElement!==void 0,!_&&o?[o]:s?null:t.firstChild?P.call(t.childNodes):null,n,!_&&o?o:s?s.__e:t.firstChild,_),ae(n,e)}P=ne.slice,y={__e:function(e,t,o,_){for(var s,n,l;t=t.__;)if((s=t.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(e)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,_||{}),l=s.__d),l)return s.__E=s}catch(i){e=i}throw e}},Z=0,T.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},o),this.props)),e&&k(o,e),e!=null&&this.__v&&(t&&this.__h.push(t),re(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),re(this))},T.prototype.render=$,A=[],ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N.__r=0;var ve=typeof Promise=="function"?Promise:function(e){let t=[],o=0,_;return e(n=>{_=n,o=1,t.splice(0).forEach(s)}),{then:s};function s(n){return o?setTimeout(n,0,_):t.push(n),this}};let U=null,R=new Set;const ye=e=>{const{$:t,r:o,h:_}=e;j(o)&&(E.get(_).delete(e),o()),j(e.r=t())&&E.get(_).add(e)},je=()=>{const e=R;R=new Set,e.forEach(({h:t,c:o,a:_,e:s})=>{s&&t.apply(o,_)})},E=new WeakMap,F=[],B=[];function ge(e,t){return e!==this[t]}const qe=e=>{const t=E.get(e);t&&Q.then(()=>{t.forEach(o=>{o.r(),o.r=null}),t.clear()})},M=()=>U,He=e=>E.has(e),j=e=>typeof e=="function",Ie=e=>{const t={h:o,c:null,a:null,e:0,i:0,s:[]};return o;function o(){const _=U;U=t,t.e=t.i=0;try{return e.apply(t.c=this,t.a=arguments)}finally{U=_,F.length&&Q.then(F.forEach.bind(F.splice(0),ye)),B.length&&B.splice(0).forEach(ye)}}},xe=e=>{R.has(e)||(e.e=1,R.add(e),Q.then(je))},Q=new ve(e=>e()),Ve=e=>({_:new Set,provide:Be,value:e}),ze=({_:e,value:t})=>(e.add(M()),t);function Be(e){const{_:t,value:o}=this;o!==e&&(this._=new Set,this.value=e,t.forEach(({h:_,c:s,a:n})=>{_.apply(s,n)}))}const Qe=(e,t)=>me(()=>e,t),me=(e,t)=>{const o=M(),{i:_,s}=o;return(_===s.length||!t||t.some(ge,s[_]._))&&(s[_]={$:e(),_:t}),s[o.i++].$},be=e=>(t,o)=>{const _=M(),{i:s,s:n,h:l}=_,i=s===n.length;_.i++,i&&(E.has(l)||E.set(l,new Set),n[s]={$:t,_:o,r:null,h:l}),(i||!o||o.some(ge,n[s]._))&&e.push(n[s]),n[s].$=t,n[s]._=o},Ge=be(F),Je=be(B),ke=(e,t)=>j(t)?t(e):t,Se=(e,t,o)=>{const _=M(),{i:s,s:n}=_;s===n.length&&n.push({$:j(o)?o(t):ke(void 0,t),set:f=>{n[s].$=e(n[s].$,f),xe(_)}});const{$:l,set:i}=n[_.i++];return[l,i]},Ke=e=>Se(ke,e),Xe=e=>{const t=M(),{i:o,s:_}=t;return o===_.length&&_.push({current:e}),_[t.i++]},q=!0,G=!1,we="querySelectorAll";function Ye(e){this.observe(e,{subtree:q,childList:q})}const Ze=(e,t,o)=>{const _=(n,l,i,f,d)=>{for(let r=0,{length:a}=n;r<a;r++){const c=n[r];(d||we in c)&&(f?l.has(c)||(l.add(c),i.delete(c),e(c,f)):i.has(c)||(i.add(c),l.delete(c),e(c,f)),d||_(c[we]("*"),l,i,f,q))}},s=new(o||MutationObserver)(n=>{for(let l=new Set,i=new Set,f=0,{length:d}=n;f<d;f++){const{addedNodes:r,removedNodes:a}=n[f];_(a,l,i,G,G),_(r,l,i,q,G)}});return s.add=Ye,s.add(t||document),s},Ee="querySelectorAll",{document:et,Element:Ce,MutationObserver:tt,Set:nt,WeakMap:ot}=self,Ae=e=>Ee in e,{filter:$e}=[];var _t=e=>{const t=new ot,o=a=>{for(let c=0,{length:u}=a;c<u;c++)t.delete(a[c])},_=()=>{const a=d.takeRecords();for(let c=0,{length:u}=a;c<u;c++)l($e.call(a[c].removedNodes,Ae),!1),l($e.call(a[c].addedNodes,Ae),!0)},s=a=>a.matches||a.webkitMatchesSelector||a.msMatchesSelector,n=(a,c)=>{let u;if(c)for(let h,S=s(a),p=0,{length:g}=i;p<g;p++)S.call(a,h=i[p])&&(t.has(a)||t.set(a,new nt),u=t.get(a),u.has(h)||(u.add(h),e.handle(a,c,h)));else t.has(a)&&(u=t.get(a),t.delete(a),u.forEach(h=>{e.handle(a,c,h)}))},l=(a,c=!0)=>{for(let u=0,{length:h}=a;u<h;u++)n(a[u],c)},{query:i}=e,f=e.root||et,d=Ze(n,f,tt),{attachShadow:r}=Ce.prototype;return r&&(Ce.prototype.attachShadow=function(a){const c=r.call(this,a);return d.add(c),c}),i.length&&l(f[Ee](i)),{drop:o,flush:_,observer:d,parse:l}};const{create:Me,keys:rt}=Object,J=new WeakMap,H=new Set,C=[],K={},I={},st=(e,t)=>{for(let o=J.get(t),_=0,{length:s}=e;_<s;_++){const{target:n,attributeName:l,oldValue:i}=e[_],f=n.getAttribute(l);o.attributeChanged(l,i,f)}},lt=(e,t,o,_)=>{const s=Me(_,{element:{enumerable:!0,value:e}});for(let l=0,{length:i}=o;l<i;l++)e.addEventListener(o[l].t,s,o[l].o);t.set(e,s),s.init&&s.init();const{observedAttributes:n}=_;if(n){const l=new MutationObserver(st);l.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:n.map(i=>(e.hasAttribute(i)&&s.attributeChanged(i,null,e.getAttribute(i)),i))}),J.set(l,s)}return s},{drop:it,flush:Pe,parse:Oe}=_t({query:C,handle(e,t,o){const{m:_,l:s,o:n}=K[o],l=_.get(e)||lt(e,_,s,n),i=t?"connected":"disconnected";i in l&&l[i]()}}),ct=e=>(K[e]||J).o,X=(e,t)=>{if(-1<C.indexOf(e))throw new Error("duplicated: "+e);Pe();const o=[],_=Me(null);for(let s=rt(t),n=0,{length:l}=s;n<l;n++){const i=s[n];if(/^on/.test(i)&&!/Options$/.test(i)){const f=t[i+"Options"]||!1,d=i.toLowerCase();let r=d.slice(2);o.push({t:r,o:f}),_[r]=i,d!==i&&(r=i.slice(2,3).toLowerCase()+i.slice(3),_[r]=i,o.push({t:r,o:f}))}}o.length&&(t.handleEvent=function(s){this[_[s.type]](s)}),C.push(e),K[e]={m:new WeakMap,l:o,o:t},Oe(document.querySelectorAll(e)),Le(e),H.has(e)||I[e]._()},ut=(e,t,o)=>{H.add(e),X(e,{init(){H.has(e)&&(H.delete(e),t().then(({default:_})=>{C.splice(C.indexOf(e),1),it(document.querySelectorAll(e)),(o||X)(e,_)}))}})},ft=e=>{C.length&&(Pe(),Oe([e]))},Le=e=>{if(!(e in I)){let t,o=new ve(_=>{t=_});I[e]={_:t,$:o}}return I[e].$};function De(){dt(this)}const Y=(e,t)=>{X(e,typeof t=="function"?{init:De,render:t}:(t.init||(t.init=De),t))},at=(e,t)=>{ut(e,t,Y)},dt=e=>{const{disconnected:t,element:o,render:_}=e,s=Ie(_.bind(e,o));return e.disconnected=()=>{He(s)&&qe(s),t&&t.call(e)},(e.render=s)()};var Te=function(e,t,o,_){var s;t[0]=0;for(var n=1;n<t.length;n++){var l=t[n++],i=t[n]?(t[0]|=l?1:2,o[t[n++]]):t[++n];l===3?_[0]=i:l===4?_[1]=Object.assign(_[1]||{},i):l===5?(_[1]=_[1]||{})[t[++n]]=i:l===6?_[1][t[++n]]+=i+"":l?(s=e.apply(i,Te(e,i,o,["",null])),_.push(s),i[0]?t[0]|=2:(t[n-2]=0,t[n]=s)):_.push(i)}return _},Ne=new Map;function ht(e){var t=Ne.get(this);return t||(t=new Map,Ne.set(this,t)),(t=Te(this,t.get(e)||(t.set(e,t=function(o){for(var _,s,n=1,l="",i="",f=[0],d=function(c){n===1&&(c||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?f.push(0,c,l):n===3&&(c||l)?(f.push(3,c,l),n=2):n===2&&l==="..."&&c?f.push(4,c,0):n===2&&l&&!c?f.push(5,0,!0,l):n>=5&&((l||!c&&n===5)&&(f.push(n,0,l,s),n=6),c&&(f.push(n,c,0,s),n=6)),l=""},r=0;r<o.length;r++){r&&(n===1&&d(),d(r));for(var a=0;a<o[r].length;a++)_=o[r][a],n===1?_==="<"?(d(),f=[f],n=3):l+=_:n===4?l==="--"&&_===">"?(n=1,l=""):l=_+l[0]:i?_===i?i="":l+=_:_==='"'||_==="'"?i=_:_===">"?(d(),n=1):n&&(_==="="?(n=5,s=l,l=""):_==="/"&&(n<5||o[r][a+1]===">")?(d(),n===3&&(f=f[0]),n=f,(f=f[0]).push(2,0,n),n=0):_===" "||_==="	"||_===`
`||_==="\r"?(d(),n=2):l+=_),n===3&&l==="!--"&&(n=4,f=f[0])}return d(),f}(e)),t),arguments,[])).length>1?t:t[0]}const pt=ht.bind(L);function vt(e,...t){const o={enumerable:!0,configurable:!0};return t.forEach(_=>{_&&Object.keys(_).forEach(s=>{const n=Object.getOwnPropertyDescriptor(_,s);Object.defineProperty(e,s,Object.assign(n,o))})}),e}const yt=(e,t,o=[])=>{Y(e,{observedAttributes:o,attributeChanged(){this.render()},render(_){const s=t(_);pe(s,_)}})};return v.$define=Y,v.$defineAsync=at,v.Fragment=$,v.completeAssign=vt,v.createContext=Ve,v.createElement=L,v.define=yt,v.get=ct,v.h=L,v.html=pt,v.render=pe,v.upgrade=ft,v.useCallback=Qe,v.useContext=ze,v.useEffect=Ge,v.useLayoutEffect=Je,v.useMemo=me,v.useReducer=Se,v.useRef=Xe,v.useState=Ke,v.whenDefined=Le,Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),v}({});