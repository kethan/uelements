const whenCallbacks = /* @__PURE__ */ new Set();
const mapElements = /* @__PURE__ */ new Map();
const mutationObserver = new window.MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes") {
      const { target, attributeName, oldValue } = mutation;
      if (mapElements.has(target)) {
        let [attributeChanged, observedAttributes] = mapElements.get(target);
        if (observedAttributes.includes(attributeName) || observedAttributes.length == 0) {
          const value = target.getAttribute(attributeName);
          attributeChanged(attributeName, oldValue, value, target);
        }
      }
    }
  }
  whenCallbacks.forEach((callback) => callback());
});
mutationObserver.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
  attributeOldValue: true
});
function when(selector, callback) {
  setTimeout(check);
  whenCallbacks.add(check);
  function check() {
    document.querySelectorAll(selector).forEach((element) => {
      if (!mapElements.has(element)) {
        const { connected = () => {
        }, disconnected = () => {
        }, attributeChanged = () => {
        }, observedAttributes = [] } = callback(element);
        mapElements.set(element, [attributeChanged, observedAttributes]);
        connected();
        removed(selector, element, () => disconnected());
      } else
        return;
    });
  }
}
function removed(selector, target, callback) {
  setTimeout(check);
  whenCallbacks.add(check);
  function check() {
    if (target && document.contains(target) && target.matches(selector)) {
      return;
    }
    mapElements.delete(target);
    whenCallbacks.delete(check);
    callback();
  }
}
let t$2 = (n2, e2, o2, f2) => {
  let s2 = {};
  for (let i2 = 1; i2 < e2.length; i2++) {
    let r2 = e2[i2], u2 = typeof r2 == "number" ? o2[r2] : r2, l2 = e2[++i2];
    if (l2 === 1)
      f2[0] = u2;
    else if (l2 === 3)
      f2[1] = Object.assign(f2[1] || {}, u2);
    else if (l2 === 5)
      (f2[1] = f2[1] || {})[e2[++i2]] = u2;
    else if (l2 === 6) {
      let t2 = e2[++i2], n3 = (f2[1] = f2[1] || {})[t2], o3 = s2[t2];
      o3 || typeof u2 != "function" && typeof n3 != "function" || (o3 = n3 && [n3] || [], f2[1][t2] = function() {
        let t3 = "";
        for (var n4 = 0; n4 < o3.length; n4++)
          t3 += typeof o3[n4] == "function" ? o3[n4].call(this) : o3[n4];
        return t3;
      }), o3 ? o3.push(u2) : f2[1][t2] += u2 + "";
    } else if (l2) {
      let e3 = () => n2.apply(null, t$2(n2, u2, o2, ["", null]));
      f2.push(typeof f2[0] == "function" ? e3 : e3());
    } else
      f2.push(u2);
  }
  return f2;
}, n$1 = function(t2) {
  let n2, e2, o2 = 1, f2 = "", s2 = "", i2 = [0];
  let r2 = (t3) => {
    o2 === 1 && (t3 || (f2 = f2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i2.push(t3 || f2, 0) : o2 === 3 && (t3 || f2) ? (i2.push(t3 || f2, 1), o2 = 2) : o2 === 2 && f2 === "..." && t3 ? i2.push(t3, 3) : o2 === 2 && f2 && !t3 ? i2.push(true, 5, f2) : o2 >= 5 && ((f2 || !t3 && o2 === 5) && (i2.push(f2, o2, e2), o2 = 6), t3 && (i2.push(t3, o2, e2), o2 = 6)), f2 = "";
  };
  for (let u2 = 0; u2 < t2.length; u2++) {
    u2 && (o2 === 1 && r2(), r2(u2));
    for (let l2 = 0; l2 < t2[u2].length; l2++)
      n2 = t2[u2][l2], o2 === 1 ? n2 === "<" ? (r2(), i2 = [i2], o2 = 3) : f2 += n2 : o2 === 4 ? f2 === "--" && n2 === ">" ? (o2 = 1, f2 = "") : f2 = n2 + f2[0] : s2 ? n2 === s2 ? s2 = "" : f2 += n2 : n2 === '"' || n2 === "'" ? s2 = n2 : n2 === ">" ? (r2(), o2 = 1) : o2 && (n2 === "=" ? (o2 = 5, e2 = f2, f2 = "") : n2 === "/" && (o2 < 5 || t2[u2][l2 + 1] === ">") ? (r2(), o2 === 3 && (i2 = i2[0]), o2 = i2, (i2 = i2[0]).push(o2, 2), o2 = 0) : n2 === " " || n2 === "	" || n2 === "\n" || n2 === "\r" ? (r2(), o2 = 2) : f2 += n2), o2 === 3 && f2 === "!--" && (o2 = 4, i2 = i2[0]);
  }
  return r2(), i2;
}, e$1 = /* @__PURE__ */ new Map(), o$2 = function(o2) {
  let f2 = e$1.get(this);
  return f2 || (f2 = /* @__PURE__ */ new Map(), e$1.set(this, f2)), f2 = t$2(this, f2.get(o2) || (f2.set(o2, f2 = n$1(o2)), f2), arguments, []), f2.length > 1 ? f2 : f2[0];
}, f$3 = function() {
  let t2 = o$2.apply(this, arguments);
  if (t2)
    return Array.isArray(t2) ? this(t2) : typeof t2 == "object" ? t2 : this([t2]);
}, s$2 = function() {
  let t2 = f$3.bind(this);
  return (this.wrap || t2).apply(t2, arguments);
};
let n = [];
let t$1;
function o$1(n2) {
  let r2 = t$1, u2 = () => {
  };
  t$1 = u2, a(u2);
  let o2 = n2(() => {
    S(u2), t$1 = void 0;
  });
  return t$1 = r2, o2;
}
function c$2(n2) {
  let r2 = t$1;
  t$1 = void 0;
  let u2 = n2();
  return t$1 = r2, u2;
}
function i$2(u2) {
  function o2(c2) {
    if (arguments.length === 0)
      return t$1 && !o2.__o.has(t$1) && (o2.__o.add(t$1), t$1.u.push(o2)), u2;
    u2 = c2;
    let e2 = t$1;
    return t$1 = void 0, o2.o = new Set(o2.__o), o2.o.forEach((n2) => n2.i = false), o2.o.forEach((n2) => {
      n2.i || n2();
    }), t$1 = e2, u2;
  }
  return o2.$o = 1, o2.__o = /* @__PURE__ */ new Set(), o2.t = n, o2;
}
function f$2(n2, r2) {
  function u2() {
    let o3 = t$1;
    return t$1 && t$1.__c.push(u2), S(u2), u2.i = true, t$1 = u2, r2 = n2(r2), t$1 = o3, r2;
  }
  function o2() {
    return u2.i ? t$1 && u2.u.forEach((n3) => n3()) : r2 = u2(), r2;
  }
  return n2.l = u2, a(u2), u2(), o2.$o = 1, o2;
}
function s$1(n2) {
  return t$1 && t$1.v.push(n2), n2;
}
function l$1(n2) {
  return f$2(n2), () => S(n2.l);
}
function S(n2) {
  n2.__c.forEach(S), n2.u.forEach((t2) => {
    t2.__o.delete(n2), t2.o && t2.o.delete(n2);
  }), n2.v.forEach((n3) => n3()), a(n2);
}
function a(n2) {
  n2.u = [], n2.__c = [], n2.v = [];
}
let r$1 = {}, i$1 = [];
function f$1(e2) {
  return this.t && this.t[e2.type](e2);
}
r$1.h = (...e2) => {
  let t2, n2 = (s2) => {
    if (s2 == null)
      ;
    else if (typeof s2 == "string")
      t2 ? r$1.add(t2, s2) : t2 = r$1.s ? document.createElementNS("http://www.w3.org/2000/svg", s2) : document.createElement(s2);
    else if (Array.isArray(s2))
      t2 || (t2 = document.createDocumentFragment()), s2.forEach(n2);
    else if (s2 instanceof Node)
      t2 ? r$1.add(t2, s2) : t2 = s2;
    else if (typeof s2 == "object")
      r$1.property(t2, s2, null, r$1.s);
    else if (typeof s2 == "function")
      if (t2) {
        let e3 = r$1.add(t2, "");
        r$1.insert(t2, s2, e3);
      } else
        t2 = s2.apply(null, e2.splice(1));
    else
      r$1.add(t2, "" + s2);
  };
  return e2.forEach(n2), t2;
}, r$1.insert = (e2, t2, n2, s2, l2) => (e2 = n2 && n2.parentNode || e2, l2 = l2 || s2 instanceof Node && s2, t2 === s2 || (s2 && typeof s2 != "string" || !(typeof t2 == "string" || typeof t2 == "number" && (t2 += "")) ? typeof t2 == "function" ? r$1.subscribe(() => {
  s2 = r$1.insert(e2, t2.call({ el: e2, endMark: n2 }), n2, s2, l2);
}) : (n2 ? s2 && (l2 || (l2 = s2.o && s2.o.nextSibling || n2.previousSibling), r$1.rm(e2, l2, n2)) : e2.textContent = "", s2 = null, t2 && t2 !== true && (s2 = r$1.add(e2, t2, n2))) : (s2 != null && e2.firstChild ? n2 ? (n2.previousSibling || e2.lastChild).data = t2 : e2.firstChild.data = t2 : n2 ? r$1.add(e2, t2, n2) : e2.textContent = t2, s2 = t2)), s2), r$1.property = (e2, t2, n2, s2, l2) => {
  if (t2 != null)
    if (!n2 || n2 === "attrs" && (s2 = true))
      for (n2 in t2)
        r$1.property(e2, t2[n2], n2, s2, l2);
    else
      n2[0] !== "o" || n2[1] !== "n" || t2.$o ? typeof t2 == "function" ? r$1.subscribe(() => {
        r$1.property(e2, t2.call({ el: e2, name: n2 }), n2, s2, l2);
      }) : l2 ? e2.style.setProperty(n2, t2) : s2 || n2.slice(0, 5) === "data-" || n2.slice(0, 5) === "aria-" ? e2.setAttribute(n2, t2) : n2 === "style" ? typeof t2 == "string" ? e2.style.cssText = t2 : r$1.property(e2, t2, null, s2, true) : (n2 === "class" && (n2 += "Name"), e2[n2] = t2) : ((e3, t3, n3) => {
        t3 = t3.slice(2).toLowerCase(), n3 ? e3.addEventListener(t3, f$1) : e3.removeEventListener(t3, f$1), (e3.t || (e3.t = {}))[t3] = n3;
      })(e2, n2, t2);
}, r$1.add = (e2, t2, n2) => {
  let s2 = ((e3) => {
    const { childNodes: t3 } = e3;
    if (t3 && e3.nodeType === 11)
      return t3.length < 2 ? t3[0] : { o: r$1.add(e3, "", t3[0]) };
  })(t2 = ((e3) => typeof e3 == "string" ? document.createTextNode(e3) : e3 instanceof Node ? e3 : r$1.h(i$1, e3))(t2)) || t2;
  return e2.insertBefore(t2, n2 && n2.parentNode && n2), s2;
}, r$1.rm = (e2, t2, n2) => {
  for (; t2 && t2 !== n2; ) {
    let n3 = t2.nextSibling;
    e2 === t2.parentNode && e2.removeChild(t2), t2 = n3;
  }
}, r$1.subscribe = l$1, r$1.cleanup = s$1, r$1.root = o$1, r$1.sample = c$2, r$1.hs = (...e2) => {
  let t2 = r$1.s;
  r$1.s = true;
  let n2 = u$2(...e2);
  return r$1.s = t2, n2;
};
let u$2 = (...e2) => r$1.h.apply(r$1.h, e2);
let t;
function r(e2, r2, o2) {
  let u2 = function() {
    const { el: u3, name: c2, endMark: l2 } = this, i2 = (t2, e3, r3, o3) => {
      if (r3 == null) {
        let r4 = e3 || t2;
        e3 && e3.t === void 0 && t2.firstChild === t2.lastChild && t2.firstChild === e3 && (e3.t = ""), r4.t = r$1.insert(t2, o3, e3, r4.t);
      } else
        r$1.property(t2, o3, r3);
    };
    i2.o = u3, i2.u = l2, i2.l = c2, i2.i = e2, i2.m = r2, i2.p = o2, t.push(i2);
  };
  return u2.$o = 2, u2;
}
function o(e2, r2) {
  let o2 = t;
  t = [];
  let l2 = e2(), i2 = t;
  t = o2;
  let s2 = l2.content || l2.parentNode && l2;
  s2 || (s2 = document.createDocumentFragment(), s2.appendChild(l2));
  let f2 = s2.cloneNode(true);
  function a2(t2, e3) {
    e3 !== false && e3 !== true || (r2 = e3);
    let o3 = {};
    let u2;
    return r2 ? (s2.A && s2.A.forEach((n2) => s2.appendChild(n2)), u2 = s2) : u2 = f2.cloneNode(true), u2.firstChild && (u2.firstChild.props = t2), i2.forEach((n2) => {
      n2.g = r2 ? n2.o : c$1(u2, n2.h), n2.j = r2 ? n2.u : n2.k && c$1(n2.g, n2.k);
    }), i2.forEach((e4) => {
      r$1.action(e4, t2, o3)(e4.i, e4.l);
    }), s2.A = Array.from(s2.childNodes), u2;
  }
  return r2 || i2.forEach((n2) => {
    n2.h = u$1(s2, n2.o), n2.k = n2.u && u$1(n2.o, n2.u);
  }), a2.$t = true, a2;
}
function u$1(n2, t2) {
  let e2, r2 = [];
  for (; (e2 = t2.parentNode) !== n2.parentNode; )
    r2.unshift(Array.from(e2.childNodes).indexOf(t2)), t2 = e2;
  return r2;
}
function c$1(n2, t2) {
  return t2.forEach((t3) => n2 = n2.childNodes[t3]), n2;
}
r$1.action = (n2, t2, e2) => {
  let r2 = n2.g;
  return (o2, u2) => {
    let c2 = t2[o2];
    c2 != null && n2(r2, n2.j, u2, c2), n2.m && (e2[o2] || (e2[o2] = [], Object.defineProperty(t2, o2, { get: () => n2.p ? u2 in r2 ? r2[u2] : r2 : c2, set(n3) {
      c2 = n3, e2[o2].forEach((t3) => t3(n3));
    } })), e2[o2].push(n2.bind(null, r2, n2.j, u2)));
  };
};
let u = {};
function i(n2) {
  let o$12 = (n2 ? r$1.hs : r$1.h).bind();
  return o$12.wrap = function() {
    let n3 = this, t2 = Array.from(arguments), o$13 = t2[0], i2 = t2.slice(1);
    for (let n4 = 1; n4 < t2.length; n4++)
      t2[n4] = s(n4 - 1);
    function e2() {
      const { endMark: s2 } = this || {}, c2 = o$13.join("\0");
      let f2 = u[c2];
      f2 || (f2 = o(() => n3.apply(null, t2)), u[c2] = f2), e2.t = e2.t || s2;
      let m2 = s2 && e2.t !== s2;
      return f2.t ? m2 = f2.t !== s2 : f2.t = s2, f2(i2, !m2);
    }
    return e2;
  }, o$12;
}
function e(n2, o2) {
  o2.t = o2.t || r$1.add(o2, ""), o2.o = r$1.insert(o2, n2, o2.t, o2.o);
}
function s(n2) {
  return r(n2);
}
let c = i(), f = i(true);
function m() {
  return s$2.apply(c, arguments);
}
function l() {
  return s$2.apply(f, arguments);
}
const define = (name, callback, attrs = [], cleanup2) => {
  const _r = (el) => e(callback(el), el);
  when(name, (el) => ({
    connected: () => _r(el),
    disconnected: () => {
      cleanup2 && cleanup2();
    },
    attributeChanged: () => {
      _r(el);
    },
    observedAttributes: attrs
  }));
};
export { s$1 as cleanup, f$2 as computed, define, c as h, f as hs, m as html, i$2 as o, i$2 as observable, e as render, l$1 as subscribe, l as svg };
